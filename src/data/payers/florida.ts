import type { PayerConfig } from './types.js';

export const floridaPayers: Record<string, PayerConfig> = {
  'florida-medicaid': {
    slug: 'florida-medicaid',
    cardDesc: 'No autism dx required; BA carved INTO nine MMA plans 2/1/2025; 97153 at $12.26/unit.',
    assessmentPA: {
      value: 'Required — FFS via Acentra\'s eQSuite (assessment codes submitted separately from treatment); MMA enrollees via their plan',
      status: 'verified',
      cites: [{ title: 'Acentra Health \u2014 Behavior Analysis Provider Manual 2026', url: 'https://fl.acentra.com/wp-content/uploads/sites/14/2026/05/Behavior-Analysis-Provider-Manual-2026.pdf' }, { title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    treatmentPA: {
      value: 'Required — authorization before initiation and at least every 180 days; behavior plan covers up to 6 months',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Acentra Health \u2014 Behavior Analysis Provider Manual 2026', url: 'https://fl.acentra.com/wp-content/uploads/sites/14/2026/05/Behavior-Analysis-Provider-Manual-2026.pdf' }],
    },
    dxRequired: {
      value: 'No — eligibility is functional impairment of a major life activity, gated by a physician referral + order + Comprehensive Diagnostic Evaluation (no F84.x requirement)',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Florida Medicaid — Behavior Analysis Services (AHCA)',
    state: 'FL', kind: 'state-medicaid',
    intakeGates: {
      ageLimit: {
        value:
          'Under 21, with no lower bound. The coverage policy covers “Florida Medicaid recipients under the age of 21 years requiring medically necessary BA services to address behavior that impairs a recipient’s ability to perform a major life activity.” No minimum age is set: the BASC-3 PRQ requirement starts at age 2 and the Vineland-3 Maladaptive Behavior Domain at age 3, but those are documentation thresholds, not eligibility floors. EPSDT sits on top — services for recipients under 21 “exceeding the coverage described within this policy or the associated fee schedule may be approved, if medically necessary.”',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required, so no diagnosis-recency rule exists — and the policy sets no maximum age for the Comprehensive Diagnostic Evaluation either. What is time-bound is the assessment cycle: a behavior assessment must be conducted before interventions begin; “a reassessment and updated behavior plan to renew prior authorization for continued services must be completed at least every six months”; and “the core instruments must be included with reassessments every 12 months.” More frequent assessment is required when new interfering behavior emerges. A full assessment may be requested on a change of provider, but a change in a practitioner’s status (an RBT becoming a BCaBA) is not grounds for one.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Whether a given MMA plan will accept an older CDE — the state policy sets no ceiling, but plans layer their own freshness rules (Carelon, for Simply members, requires the treatment plan and data to be no older than 30 days at submission).',
      },
      diagnosingProviders: {
        value:
          'No ASD diagnosis is required, so no diagnosing-provider rule gates entry — what gates it is who leads the Comprehensive Diagnostic Evaluation. The CDE “may be performed by a multidisciplinary team or individual practitioner. In any case, the CDE must be led by a licensed practitioner working within their medical, developmental, or psychological scope(s) of practice,” and it “must include assessment findings and treatment recommendations appropriate to the recipient.” Claims still carry “the most current and appropriate diagnosis code to the highest level of specificity that supports medical necessity,” plus any co-occurring disorders that affect medical necessity.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'Two core standardized instruments, named in rule and required at the initial assessment: the Vineland-3 Comprehensive Parent Interview Form for all recipients, plus the Maladaptive Behavior Domain for recipients ages 3 and older; and the Behavior Assessment System for Children, Third Edition, Parenting Relationship Questionnaire (BASC-3 PRQ) for all recipients ages 2 through 18. “The complete scoring report, including outcome measure scores, must be submitted with service prior authorization requests.” Additional tools are at the Lead Analyst’s discretion, and the two core instruments must be re-administered with reassessments every 12 months.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required — and in Florida the referral, not a diagnosis, is the front door. “The recipient must be referred by an independent physician or practitioner qualified to assess and diagnose disorders related to functional impairment,” namely a primary care physician with a family practice, internal medicine or pediatrics specialty; a board-certified or board-eligible physician specialising in developmental behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology or adult/child psychiatry; or a child psychologist. “The referral must include a physician’s order for behavior analysis services and a comprehensive diagnostic evaluation (CDE) performed according to national evidence-based practice standards.” “Independent physician” is defined by the financial-independence test at 42 U.S.C. 1395nn. The original referral documentation must be kept in the recipient’s medical record; the policy sets no expiry date on it.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Narrow — one code. The only telemedicine provision in the coverage policy is caregiver training: “The Lead Analyst may provide up to two hours per week of training to parents or guardians via telemedicine in accordance with Rule 59G-1.057, Florida Administrative Code.” That is 97156 at the Lead Analyst level (billed with GT on the fee schedule), capped at two hours a week. The policy authorises no telemedicine delivery of 97153 direct treatment, 97155 protocol modification, or the assessment codes — plan for those to be in person.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      authTurnaround: {
        value:
          'Fee-for-service BA requests go to Acentra (eQSuite), and Acentra measures the clock from a complete file: “The review completion timeframe is measured from the date eQHealth receives all required information.” First-level approvals come “within 3 business days”; cases needing physician review “within 5 business days”; reconsiderations within 3 business days. A request missing documents is pended, and if the missing items are not in “within two business day[s] the review request is Technically Denied” and must be resubmitted as a new case. Lead times: submit an initial (“admission”) request “at least 5 business days before services are initiated,” and a reauthorization (“continued stay”) “no less than 10 business days, but not more than 30 business days before the end of the current approval period.” Approvals run up to 180 calendar days. The federal FFS rule effective 1/1/2026 caps standard decisions at 7 calendar days and expedited at 72 hours from receipt (42 CFR 440.230(e)). Most children are in an MMA plan, and each plan runs its own clock.',
        status: 'verified',
        cites: [
          { title: 'Acentra Health — Behavior Analysis Provider Manual 2026', url: 'https://fl.acentra.com/wp-content/uploads/sites/14/2026/05/Behavior-Analysis-Provider-Manual-2026.pdf' },
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes, from 1/1/2026 (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Florida Medicaid pays last. Rule 59G-1.052: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance, AARP plans, or automobile coverage prior to submitting or resubmitting a claim for reimbursement to Florida Medicaid.” Bill the commercial plan first, then send Medicaid the balance with proof of the other payer’s payment or denial. Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and nothing if the other payer paid at or above the Medicaid rate. It also pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s ABA authorization. The rule’s only Medicaid-PA exemption is for “services approved by Medicare”; it gives none when a commercial plan is primary. Providers “must inquire if a recipient has third-party insurance coverage” at every visit, and may not refuse a Medicaid child because other insurance exists. Exceptions where Medicaid pays before another program include IDEA Part B/C funds and Indian Health Service. The rule publishes no pay-and-chase exception for EPSDT or preventive pediatric care.',
        status: 'verified',
        cites: [
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'A standards reference, not a ratio. “Florida Medicaid requires supervision of BCaBAs and RBTs in accordance with current practice standards as published by the Council of Autism Service Providers, and specified in the supervision plan of the approved behavior plan” — and that behavior plan must name the authorized supervisor(s). The structural floor is in who may render: a Lead Analyst is a BCBA, an FL-CBA, or a practitioner fully licensed under Chapters 490 or 491, F.S.; a BCaBA works under the supervision of a BCBA; an RBT works under a BCBA or a BCaBA. The incorporated CASP standard is 1–2 hours of case supervision per 10 hours of direct treatment, with the BACB’s 5%-of-monthly-hours RBT minimum underneath it.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'CASP — ABA Practice Guidelines for the Treatment of ASD (3.0)', url: 'https://assets-002.noviams.com/novi-file-uploads/casp/pdfs-and-documents/ASD_Guidelines/ABA_Practice_Guidelines_3_0-70a721a1.pdf' }],
      },
      concurrentBilling: {
        value:
          'No — not as a default, and Florida says so twice. On reimbursement: “The supervisor may be reimbursed for observing a supervisee implementing the behavior plan. The supervisee will not be reimbursed when the supervisor is reimbursed for the same time period.” On coverage: “services provided simultaneously by more than one BA provider” are non-covered “unless determined to be medically necessary, prior authorized, and indicated in the approved behavior plan.” So 97155 alongside 97153 for the same clock time is something the approved behavior plan has to carry, not a standing permission. One named exception: a recipient may receive BA from one rendering provider within a provider group while the parent, guardian or caregiver receives family adaptive behavior treatment guidance from a second rendering provider in the same group.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      dailyLimits: {
        value:
          'Florida caps by the week, not the day: “Florida Medicaid covers up to 40 hours per week of BA intervention services as indicated in the recipient’s prior-authorized behavior plan,” and EPSDT lets recipients under 21 exceed the policy and fee-schedule limits when medically necessary. Group adaptive behavior treatment — by protocol or with protocol modification — maxes at six participants. Units are 15 minutes on the CMS 8-minute rule: total minutes divided by 15, with a remainder of 8 minutes or more counting as one unit and a remainder under 8 not reimbursable. The fee schedule adds per-assessment ceilings (97151 to a maximum of 24 units per assessment; reassessment 97151-TS to 18) and caps 97156 telemedicine at two hours a week. No per-code per-day MUE ceiling is published in the coverage policy.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Which MUE table (CMS Medicaid NCCI vs. Practitioner) a plan’s claim editor applies, and the current per-assessment unit caps — AHCA’s fee-schedule PDFs block automated retrieval, so confirm the live schedule with AHCA or the MMA plan before modelling units.',
      },
      noteSignature: {
        value:
          'The person who delivered the service signs — “session notes must be signed and dated by the rendering practitioner” — with no supervising-analyst co-signature required. Each note must carry the date, time, location and duration of services; the maladaptive behaviors observed; the replacement/compensatory skills targeted; a description of the recipient’s response; any protocol modification, goal change or therapist direction given; an explanation if the parent or guardian was not present; and the participants, including observers, teachers, caregivers and other health care providers. Separately — and this is the signature most often missed at intake — “the behavior assessment and behavior plan must be signed by the Lead Analyst and the recipient’s parent or guardian.”',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      placeOfService: {
        value:
          'Setting is documented and gated rather than restricted by a code list: session notes must record the location, and the behavior plan must name the treatment setting(s). School is the gated one — “authorization requests for services to be delivered in a school must include the recipient’s Individualized Education Plan (IEP),” failing which the provider submits documentation justifying the services plus an estimated timeframe for the IEP; a 504 plan if the school does not conduct IEPs; and if it conducts neither, the school’s name with an explanation. Non-covered regardless of setting: recipient supervision, personal care assistance (acting as a 1:1 aide), companion, chaperone or shadow services “regardless of activity or setting,” caregiver or childcare services, and travel time. BA is also non-covered on the same day as behavioral health overlay services, therapeutic behavioral on-site services, or therapeutic group care.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'A professional claim (837P / CMS-1500) under the enrolled rendering practitioner — Florida is unusual in enrolling the technicians themselves. Every rendering practitioner individually enrolls with AHCA: Lead Analysts as provider type 392, BCaBAs as 391 and RBTs as 390, with 390s and 391s enrollable only as members of an enrolled BA group (type 393). Each application needs a colour copy of the BACB certification matching the applicant’s legal name and a completed Level 2 background screening; AHCA names missing screenings and missing tax-ID proof as the two most common causes of delay. Credential level is priced into the code rather than a universal modifier set — 97155 pays at the Lead Analyst tier and at a lower rate with the HN modifier for a BCaBA, while 97153 pays the same whether an RBT, a BCaBA or a Lead Analyst renders it.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'AHCA — Enrolling as a Florida Medicaid Behavior Analysis Provider (webinar deck + FAQ)', url: 'https://ahca.myflorida.com/content/download/11448/file/Enrolling_as_a_Florida_Medicaid_Behavior_Analysis_Provider.pdf' }],
      },
    },
    pill: 'Payer Guide · Florida Medicaid',
    h1: 'Florida Medicaid Behavior Analysis (BA) coverage: the intake guide.',
    metaTitle: 'Florida Medicaid ABA (Behavior Analysis) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Florida Medicaid covers ABA under the Behavior Analysis (BA) benefit — no autism diagnosis required, the February 2025 SMMC 3.0 carve-in to nine MMA plans, Acentra/eQSuite for fee-for-service, Vineland-3 and BASC-3 documentation, 180-day authorizations, and the low fee schedule.',
    intro: [
      'Florida Medicaid covers ABA as "Behavior Analysis (BA) Services" for recipients under 21 — and its front door is one of the widest in the country: no autism diagnosis is required. Eligibility turns on behavior that impairs a major life activity, gated by an independent physician\'s referral. The structure changed fundamentally on February 1, 2025, when SMMC 3.0 carved BA INTO the nine Managed Medical Assistance plans: most families now get BA through their plan\'s network with prior authorization routed to the plan, while the shrinking fee-for-service remainder still authorizes through Acentra Health\'s eQSuite. The trade-off for the wide front door is heavy documentation (Vineland-3 and BASC-3 with every request) and some of the lowest ABA rates in the Southeast.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21, via the BA benefit (EPSDT can exceed policy limits)' },
      { label: 'Autism dx required?', value: 'NO — functional-impairment eligibility; physician referral + order + CDE instead' },
      { label: 'Prior auth', value: 'Required for all BA services — via the MMA plan, or Acentra (eQSuite) for FFS' },
      { label: 'Auth periods', value: 'Up to 180 days / 6 months; reassessment + updated behavior plan to renew' },
      { label: 'Hour cap', value: 'Up to 40 hrs/week as prior-authorized in the behavior plan' },
      { label: 'Rates (per 15 min)', value: '97151 $19.05 · 97153 $12.26 · 97155 $19.17 · 97156 $19.05' },
      { label: 'Administered by', value: 'Nine MMA plans (since 2/1/2025) + Acentra FFS for non-enrolled recipients' },
      { label: 'Staff screening', value: 'Level 2 fingerprint (FDLE + FBI) via the Clearinghouse — every rendering practitioner, employer-renewed every 5 years' },
    ],
    sections: [
      {
        h2: 'The February 2025 carve-in: who authorizes what now',
        body: [
          'For years Florida ran BA as a fee-for-service carve-out with all prior authorization through eQHealth (now Acentra Health). SMMC 3.0 ended that on February 1, 2025: BA moved into the nine MMA plans — Aetna Better Health, Children\'s Medical Services Health Plan, Community Care Plan, Florida Community Care, Humana Healthy Horizons, Molina, Simply Healthcare, Sunshine Health, and UnitedHealthcare Community Plan. If the family is enrolled in an MMA plan, the plan\'s process (portal, UM vendor, fax, turnaround) governs the PA; only recipients NOT enrolled in a plan remain fee-for-service with authorization through Acentra\'s eQSuite portal at fl.acentra.com (customer service 855-444-3747). At the transition, plans had to honor pre-existing Acentra authorizations — AHCA\'s baseline was ~90 days of auth protection, and UHC, Humana, and Florida Community Care each publicly committed to 120 days plus paying non-par providers at prior rates. The first intake question in Florida is therefore: which plan — because it decides where the paperwork goes.',
          'One guardrail keeps the nine plans aligned: the coverage policy requires managed care plans to comply with its service coverage requirements and forbids more stringent limits than Florida Medicaid policy. Plans differ on process — portals, delegated UM vendors, faxes — not clinical criteria. The per-plan guides below cover those mechanics.',
        ],
        cites: [
          { title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
          { title: 'Acuity News — Florida Medicaid ABA in 2026: SMMC 3.0 carve-in & rates', url: 'https://acuity.news/regulation/florida-medicaid-aba-in-2026-managed-care-carve-in-a-refreshed-coverage-policy-and-where-ahca-rates-sit-across-the-southeast/' },
          { title: 'Acentra Health — Florida Medicaid Behavior Analysis (eQSuite)', url: 'https://fl.acentra.com/behavior-analysis/' },
        ],
      },
      {
        h2: 'No autism diagnosis required — the referral gate instead',
        body: [
          'Florida\'s eligibility test is functional, not diagnostic: recipients under 21 "requiring medically necessary BA services to address behavior that impairs a recipient\'s ability to perform a major life activity" — safety, communication, self-care, self-stimulating and other behaviors all qualify. There is no F84.x requirement. What gates entry instead is a referral from an independent physician or practitioner (a PCP in family practice, internal medicine, or pediatrics; a developmental-behavioral or neurodevelopmental pediatrician; a pediatric neurologist; a psychiatrist; or a child psychologist), and that referral must include a physician\'s order for BA services plus a Comprehensive Diagnostic Evaluation (CDE) performed to national evidence-based practice standards, led by a licensed practitioner. Claims still need the most current, most specific diagnosis code that supports medical necessity, plus co-occurring disorders — but for intake, the practical checklist is referral, order, and CDE, not a diagnosis hunt. Families waiting on an autism evaluation don\'t have to wait for BA.',
        ],
        cites: [
          { title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
        ],
      },
      {
        h2: 'Authorization mechanics & the documentation stack',
        body: [
          'All BA services require prior authorization — assessment included. On the FFS side, assessment requests (97151, 97152, 97151-TS) are submitted separately from treatment codes in eQSuite; initial ("admission") requests go in at least 5 business days before the start date, reauthorizations ("continued stay") 10–30 business days before the current period ends, with decisions in 3 business days at first level (5 at physician level) once information is complete, and reconsideration available within 30 calendar days of a denial. Authorizations run up to 180 calendar days; renewing one takes a reassessment and an updated behavior plan at least every 6 months, with the core instruments re-administered every 12 months.',
          'The documentation stack is Florida\'s real workload: every PA request must attach complete scoring reports for the Vineland-3 (Comprehensive Parent Interview Form, plus the Maladaptive Behavior Domain for ages 3+) and the BASC-3 PRQ (ages 2–18). School-based BA needs the IEP (or 504 plan, or a documented explanation) with the request, and reauthorizations must include data on parent/guardian participation — so caregiver engagement is a renewal variable from day one. Interventions cap at 40 hours/week as prior-authorized in the behavior plan, though EPSDT allows exceeding policy and fee-schedule limits when medically necessary. Billing runs on the 8-minute rule for 15-minute units; supervisor and supervisee can\'t both bill the same time; group treatment maxes at 6 participants; travel time and 1:1 shadow/personal care are explicitly non-covered.',
        ],
        cites: [
          { title: 'Acentra Health (eQHealth) — Behavior Analysis Provider Manual 2026', url: 'https://fl.acentra.com/wp-content/uploads/sites/14/2026/05/Behavior-Analysis-Provider-Manual-2026.pdf' },
          { title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
        ],
      },
      {
        h2: 'Rates: among the lowest in the Southeast',
        body: [
          'The January 1, 2025 BA fee schedule (still operative through 2026) pays per 15-minute unit: 97151 behavior assessment $19.05 (max 24 units per assessment; reassessment 97151-TS $19.05, max 18 units), 97153 direct treatment $12.26 (RBT, BCaBA, or Lead Analyst — same rate regardless of credential), 97155 protocol modification $19.17 at the Lead Analyst tier ($15.37 with the HN modifier for BCaBA), and 97156 family training $19.05 (telemedicine 97156-GT at the same rate, max 2 hours/week). The $12.26 on 97153 — the code that fills most of a week — is the number to build Florida Medicaid unit economics around, and it has barely moved: the August 2022 schedule paid $12.19. A caveat on sourcing: AHCA\'s fee-schedule PDFs block automated retrieval, so the 2025/2026 figures here are cross-verified from two secondary trackers and anchored against the archived 2022 AHCA schedule — confirm the current PDF from AHCA directly before contracting. MCO-contracted rates use the state schedule as the reference baseline.',
        ],
        cites: [
          { title: 'BellMedEx — Florida Medicaid ABA fee schedule rates 2026', url: 'https://bellmedex.com/florida-medicaid-applied-behavior-analysis-fee-schedule-rates/' },
          { title: 'Acuity News — Florida Medicaid ABA in 2026: where AHCA rates sit', url: 'https://acuity.news/regulation/florida-medicaid-aba-in-2026-managed-care-carve-in-a-refreshed-coverage-policy-and-where-ahca-rates-sit-across-the-southeast/' },
          { title: 'Behavior Analysis Fee Schedule eff. 8/1/2022 (archived AHCA primary)', url: 'https://web.archive.org/web/20241006051746/https://fl.acentra.com/wp-content/uploads/sites/14/2024/03/BA_Services_2022_Fee_Schedule.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Florida licenses no behavior analysts: s. 393.17, F.S. instead recognizes certification from a national credentialing board — the BACB — and the FL-CBA is a closed legacy credential (the BACB absorbed the old state program in October 2003; no new FL-CBAs are issued, and a lapsed one requires requalifying as a BCBA). Under the December 2024 coverage policy, technicians must be BACB-credentialed RBTs working under a BCBA or BCaBA, and the Lead Analyst on every case must be a BCBA, an FL-CBA, or a practitioner licensed under chapter 490 or 491. The policy adds no training hours beyond the BACB\'s own RBT requirements (40-hour training, competency assessment, exam, plus the BACB\'s own criminal-background and abuse-registry check within 180 days of applying). The staffing catch is enrollment: every rendering practitioner individually enrolls in Florida Medicaid — Lead Analysts as provider type 392, BCaBAs as 391, RBTs as 390, with 390s and 391s enrollable only as members of an enrolled BA group (type 393). Each application needs a color copy of the BACB certification matching the applicant\'s legal name (black-and-white copies are rejected) and a completed background screening — AHCA says missing screenings and missing tax-ID proof are the two most common causes of BA application delays.',
          'The background screening reaches far past owners: s. 409.907(8)(a), F.S. requires a Level 2 screening not just for the provider and each principal (officers, directors, managing employees, 5%+ owners) but for anyone who participates "by way of rendering services to Medicaid recipients or having direct access to Medicaid recipients" — i.e., every RBT, BCaBA, and analyst on the schedule. Mechanics: the employer initiates the screening through the Care Provider Background Screening Clearinghouse; the candidate submits fingerprints and a photo at an approved Livescan provider; FDLE runs the statewide check and the FBI the national one, plus sex-offender registry searches in states of residence over the preceding 5 years; the eligibility determination must be in hand before employment begins, and for Medicaid enrollment the screening must be within the last 5 years. Prints are retained — FDLE automatically reports new Florida arrests against them — and the employer must initiate a Clearinghouse renewal via the Clearinghouse Results Website before the 5-year expiration (the window opens 60 days out); miss it and the prints drop, the determination expires, and the employee re-fingerprints at a Livescan provider at higher cost. Since January 1, 2024, employers must also register with the Clearinghouse and report employment-status changes within 5 business days. One honest gap: neither the coverage policy nor AHCA\'s BA enrollment materials publish an OIG-LEIE/SAM.gov exclusion-screening cadence for BA staff — federal exclusion-screening obligations still apply, so set your own monthly-check policy rather than waiting for a state instruction.',
          'Supervision floors: Florida sets no numeric ratio in rule. The coverage policy instead requires all BA services — including supervision of BCaBAs and RBTs — to follow "current practice standards as published by the Council of Autism Service Providers," as laid out in the supervision plan inside the approved behavior plan (which must name the authorized supervisors). The incorporated CASP standard is 1–2 hours of case supervision per 10 hours of direct treatment; the BACB\'s 5%-of-monthly-hours minimum for RBTs remains the floor underneath. Supervision is billable — the supervisor can be reimbursed for observing a supervisee implementing the plan, but the supervisee isn\'t paid for the same time period. At the plan level, the two MMA plans checked (Simply/Carelon and Humana) layer only administrative credentialing and portal registration on top — no evidence of employee-level screening beyond the AHCA Level 2/Clearinghouse baseline, which already covers every rendering practitioner through enrollment.',
        ],
        cites: [
          { title: 'Florida Statutes s. 393.17 (behavior analyst certification)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/393.17' },
          { title: 'BACB — Florida Certified Behavior Analysts (FL-CBAs)', url: 'https://www.bacb.com/flcba/' },
          { title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
          { title: 'AHCA — Enrolling as a Florida Medicaid Behavior Analysis Provider (webinar deck + FAQ)', url: 'https://ahca.myflorida.com/content/download/11448/file/Enrolling_as_a_Florida_Medicaid_Behavior_Analysis_Provider.pdf' },
          { title: 'Florida Statutes s. 409.907 (Medicaid provider agreements; background screening)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/409.907' },
          { title: 'Florida Statutes s. 435.04 (Level 2 screening standards)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/435.04' },
          { title: 'Florida Statutes s. 435.12 (Care Provider Background Screening Clearinghouse)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/435.12' },
          { title: 'AHCA — Clearinghouse Renewals', url: 'https://ahca.myflorida.com/health-quality-assurance/bureau-of-central-services/background-screening/clearinghouse-renewals' },
          { title: 'CASP — ABA Practice Guidelines for the Treatment of ASD (3.0)', url: 'https://assets-002.noviams.com/novi-file-uploads/casp/pdfs-and-documents/ASD_Guidelines/ABA_Practice_Guidelines_3_0-70a721a1.pdf' },
          { title: 'BACB — RBT Handbook', url: 'https://www.bacb.com/wp-content/uploads/2022/01/RBTHandbook.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'MMA plan (or FFS)', desc: 'One of the nine plans, or unenrolled/FFS via Acentra — it decides the entire PA pathway.' },
      { title: 'Physician referral + order + CDE', desc: 'The eligibility gate: independent physician referral with a BA order and a Comprehensive Diagnostic Evaluation. No autism diagnosis needed.' },
      { title: 'Vineland-3 & BASC-3 PRQ scoring reports', desc: 'Complete scoring reports attach to every PA request — schedule the instruments as part of intake, not after.' },
      { title: 'School status + IEP/504', desc: 'School-based BA requires the IEP or 504 (or a documented explanation) with the auth request.' },
      { title: 'Caregiver participation commitment', desc: 'Reauthorizations must report parent/guardian participation data — set expectations at intake.' },
    ],
    sources: [
      { title: 'Florida Medicaid Behavior Analysis Services Coverage Policy (Dec 2024, Rule 59G-4.125)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
      { title: 'Rule 59G-4.125, F.A.C. (effective 2/10/2025)', url: 'https://www.flrules.org/gateway/ruleno.asp?id=59G-4.125' },
      { title: 'Acentra Health — Behavior Analysis Provider Manual 2026', url: 'https://fl.acentra.com/wp-content/uploads/sites/14/2026/05/Behavior-Analysis-Provider-Manual-2026.pdf' },
      { title: 'Acentra Health — Florida Medicaid Behavior Analysis (eQSuite)', url: 'https://fl.acentra.com/behavior-analysis/' },
      { title: 'Acuity News — Florida Medicaid ABA in 2026 (carve-in & rates)', url: 'https://acuity.news/regulation/florida-medicaid-aba-in-2026-managed-care-carve-in-a-refreshed-coverage-policy-and-where-ahca-rates-sit-across-the-southeast/' },
      { title: 'BellMedEx — Florida Medicaid ABA fee schedule rates 2026', url: 'https://bellmedex.com/florida-medicaid-applied-behavior-analysis-fee-schedule-rates/' },
      { title: 'Behavior Analysis Fee Schedule eff. 8/1/2022 (archived AHCA primary)', url: 'https://web.archive.org/web/20241006051746/https://fl.acentra.com/wp-content/uploads/sites/14/2024/03/BA_Services_2022_Fee_Schedule.pdf' },
      { title: 'Florida Statutes s. 393.17 (behavior analyst certification)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/393.17' },
      { title: 'BACB — Florida Certified Behavior Analysts (FL-CBAs)', url: 'https://www.bacb.com/flcba/' },
      { title: 'AHCA — Enrolling as a Florida Medicaid Behavior Analysis Provider (webinar deck + FAQ)', url: 'https://ahca.myflorida.com/content/download/11448/file/Enrolling_as_a_Florida_Medicaid_Behavior_Analysis_Provider.pdf' },
      { title: 'Florida Statutes s. 409.907 (Medicaid provider agreements; background screening)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/409.907' },
      { title: 'Florida Statutes s. 435.04 (Level 2 screening standards)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/435.04' },
      { title: 'Florida Statutes s. 435.12 (Care Provider Background Screening Clearinghouse)', url: 'https://www.flsenate.gov/Laws/Statutes/2025/435.12' },
      { title: 'AHCA — Clearinghouse Renewals', url: 'https://ahca.myflorida.com/health-quality-assurance/bureau-of-central-services/background-screening/clearinghouse-renewals' },
      { title: 'CASP — ABA Practice Guidelines for the Treatment of ASD (3.0)', url: 'https://assets-002.noviams.com/novi-file-uploads/casp/pdfs-and-documents/ASD_Guidelines/ABA_Practice_Guidelines_3_0-70a721a1.pdf' },
      { title: 'BACB — RBT Handbook', url: 'https://www.bacb.com/wp-content/uploads/2022/01/RBTHandbook.pdf' },
    ],
    faq: [
      { q: 'Does Florida Medicaid require an autism diagnosis for ABA?', a: 'No. Eligibility is functional — behavior that impairs a major life activity, for recipients under 21. The gate is a referral from an independent physician or qualifying practitioner, including a physician\'s order for BA services and a Comprehensive Diagnostic Evaluation. Claims carry the most specific supporting diagnosis, but no F84.x code is required.' },
      { q: 'Who approves Florida Medicaid ABA prior authorizations now?', a: 'Since February 1, 2025 (SMMC 3.0), the member\'s MMA plan — one of nine — authorizes BA for plan enrollees. Only recipients not enrolled in a plan still authorize through Acentra Health\'s eQSuite portal on the fee-for-service side.' },
      { q: 'How long do Florida BA authorizations last?', a: 'Up to 180 calendar days. Renewal requires a reassessment and an updated behavior plan at least every 6 months, with the Vineland-3 and BASC-3 core instruments re-administered every 12 months.' },
      { q: 'What does Florida Medicaid pay for ABA?', a: 'Per the January 2025 schedule: 97153 direct treatment $12.26 per 15-minute unit, 97151 assessment $19.05, 97155 $19.17 (Lead Analyst), 97156 family training $19.05 — among the lowest ABA rates in the Southeast. MCO contracts use the state schedule as the baseline.' },
    ],
  },

  'sunshine-health-florida': {
    slug: 'sunshine-health-florida',
    family: 'centene',
    cardDesc: 'Largest SMMC plan; in-house UM, dedicated BA fax/form, 5-day determinations, BA VBP.',
    assessmentPA: {
      value: 'Required — all BA services incl. 97151, with Vineland-3 and BASC-3 PRQ scoring reports at initial assessment and annually',
      status: 'verified',
      cites: [{ title: 'Sunshine Health \u2014 BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health \u2014 BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }],
    },
    treatmentPA: {
      value: 'Required — authorizations up to 6 months; determinations within 5 calendar days (7 for CMS Health Plan)',
      status: 'verified',
      cites: [{ title: 'Sunshine Health \u2014 BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health) — standard PA decisions within seven calendar days', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Sunshine Health \u2014 BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Sunshine Health (FL)',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21. Sunshine’s BA Quick Reference Guide and BA prior-authorization form publish no plan-specific age limit, and the coverage policy forbids one — managed care plans “must not be subject to more stringent service coverage limits than specified in Florida Medicaid policies.” The BA PA form does require the member’s date of birth and age on every request.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required for eligibility, but Sunshine puts a hard clock on the instruments: “the Vineland-3 and BASC-3 PRQ core assessments are required to be included for initial assessment and annually for reassessments,” and “the complete scoring reports for the Vineland and BASC, including outcome measure scores, must be submitted with service at each prior authorization request.” The PA form goes further, asking for the date and score of the most recent AND the previous administration of each instrument — so a stale or single-point score set is visible on its face. The form also collects the “Date of Initial Diagnosis” and the “Standardized Diagnostic Assessments Utilized” even though no diagnosis gates the benefit. Authorizations run up to six months.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Sunshine restates the state referral gate rather than adding to it: “the recipient must be referred by an independent physician or practitioner qualified to assess and diagnose disorders related to functional impairment, including: primary care physician with family practice, internal medicine or pediatrics specialty; board certified or board eligible physician with specialty in developmental behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, adult or child psychiatry; child psychologist.” The PA form separately captures the “Diagnosing Clinicians Name and Credentials” and the “Referring Clinicians’ Name and Credentials” as distinct fields — collect both at intake, because they are not always the same person.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'The state pair, with Sunshine’s own age wording: the Vineland-3 Comprehensive Parent Interview Form including the Maladaptive Behavior Domain “for all recipients,” and the BASC-3 PRQ “for all recipients 2 years old and less than 19 years old.” The PA form requires, for each instrument, the date of the most recent assessment, the score of the most recent assessment and the score of the previous assessment, plus a free field for “any other assessments used” on the same three data points. A comprehensive diagnostic evaluation (CDE) “performed according to national evidence-based practice standards” attaches to both the initial assessment and the initial treatment request.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }],
      },
      referral: {
        value:
          'Required, and Sunshine has layered two plan-specific gates on top. The state referral plus physician order plus CDE go in with the initial ABA assessment request. Since 8/1/2026 every NEW BA authorization request must also carry a “PCP Acknowledgement and Care Coordination Form” — Sunshine states that “authorizations submitted on or after August 1, 2026, will not be approved without this form.” The PCP confirms awareness of the BA services and any care-coordination considerations but does not set BA hours or approve the treatment plan; the form updates annually, yet the ORIGINAL signed copy must be resubmitted with every prior-authorization request. And since 7/15/2026, a family switching BA providers does not transfer the authorization: the new provider files a brand-new initial request with its own current Vineland-3 and BASC-3, plus a Change of Provider Form.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — PCP Acknowledgement and Care Coordination Form, eff. 8/1/2026 (published 7/31/2026)', url: 'https://www.sunshinehealth.com/newsroom/pcp-acknowledgement.html' }, { title: 'Sunshine Health — Behavior Analysis (BA) Provider Changes Require New Authorization (7/15/2026)', url: 'https://www.sunshinehealth.com/newsroom/ba-provider-change-guidance.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'One code only, stated on the face of Sunshine’s own PA form: “telehealth only allowed for 97156 with limits (see fee schedule)” — matching the state policy’s two-hours-a-week cap on Lead Analyst caregiver training by telemedicine. Sunshine adds two conditions of its own: an out-of-state rendering provider “must be registered with the Florida Department of Health,” and “the telehealth platform must be compliant with HIPAA.”',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      authTurnaround: {
        value:
          'Sunshine’s BA page: “MMA, CW, SMI, LTC, HIV: Determination within 5 calendar days of receipt of request.” The 2026 provider manual matches for standard requests (“within five calendar days of receiving the request,” extendable “up to an additional four calendar days”). For expedited requests the manual says “within two business days of receipt,” with a one-time one-calendar-day extension. The AHCA contract sets expedited at two calendar days. Lead time: the manual asks for pre-scheduled services “within five calendar days before the requested service date.” BA authorizations run up to 6 months. No separate BA reauthorization lead time is published. The AHCA contract every MMA plan signs sets the clock: plans “shall provide standard authorization decisions within no more than five (5) days following receipt of the request for service,” extendable by “up to four (4) additional days,” and expedited decisions “no later than two (2) days after receipt,” extendable by one day. The contract defines days as calendar days. That is stricter than the federal Medicaid managed-care cap (7 calendar days standard and 72 hours expedited for rating periods from 1/1/2026, 42 CFR 438.210(d)), so the state clock governs.',
        status: 'verified',
        cites: [
          { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
          { title: 'Sunshine Health Provider Manual (SH_11287, © 2026) — MMA, LTC, CWSP, SMI and HIV lines', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/Provider%20Manual.pdf' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Sunshine’s manual: bill other insurance first “as Medicaid is always the payer of last resort. If an authorization is required, the providers still must obtain Sunshine Health authorization for the Medicaid portion of the bill.” So a child with a parent’s commercial plan needs two authorizations: the commercial plan’s and Sunshine’s BA authorization. Primary and secondary claims are never processed together; send the secondary claim only after the primary’s EOP or ERA, or it is denied “based on the need for primary insurance information.” File the COB claim within 90 days of the primary payer’s explanation of payment (participating and non-participating alike). Where the primary plan’s benefit is exhausted, send the EOB that shows the exhaustion. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Sunshine Health Provider Manual (SH_11287, © 2026) — MMA, LTC, CWSP, SMI and HIV lines', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/Provider%20Manual.pdf' },
          { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Sunshine restates the credential chain — RBTs work “under the supervision of a BCBA or BCaBA” and BCaBAs “under the supervision of a BCBA” — and leaves supervision intensity to the state rule, which incorporates the Council of Autism Service Providers practice standards and the supervision plan inside the approved behavior plan. What Sunshine adds is an attestation with the signer’s name on it: the BA PA form closes with a BCBA/licensed-clinician signature and date under the line “I attest that all individuals rendering service under the proposed treatment plan have the appropriate training and education required to render services.”',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      concurrentBilling: {
        value:
          'Sunshine publishes a claim mechanic, not a coverage permission: “to ensure Medicaid claim acceptance for codes 97153XP and 97155XP, continue to bill with a minimum charge of $0.01.” The XP (separate practitioner) lines presuppose two different renderers, but the governing rule is still the state’s — the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Whether Sunshine will authorize 97153 and 97155 for the same clock time on a specific behavior plan — ask Sunshine UM at 1-844-477-8313 before building a schedule that depends on it.',
      },
      dailyLimits: {
        value:
          'By the week. Sunshine prints “Behavior Analysis services — 40 hour/week maximum” across the top of its BA PA request form, and its QRG restates that “Florida Medicaid Behavior Analysis service policy identifies a 40-hour per week limit for behavior analysis services.” The form asks for total units requested per code plus the schedule of requested BA services, so intensity is reviewed code by code against that weekly ceiling. No per-code per-day unit ceiling is published.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
        verifyVia:
          'Sunshine UM (1-844-477-8313) for any per-day unit edit its claim system applies, and the current Florida BA fee schedule for per-assessment unit caps.',
      },
      noteSignature: {
        value:
          'Sunshine restates the state signature rule — “the behavior assessment and behavior plan must be signed by the Lead Analyst and the recipient’s parent or guardian” — and the state rule that session notes are signed and dated by the rendering practitioner governs underneath. The PA packet itself carries a third signature: the BCBA or licensed clinician signs and dates the request, attesting to the training and education of everyone rendering under the plan.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      placeOfService: {
        value:
          'Sunshine publishes no place-of-service rule of its own; the BA PA form simply has a “Treatment Setting” field that the request must fill in, and the state rule governs — school-based requests carry the IEP (or 504, or a documented explanation), group treatment caps at six participants, and 1:1 shadow/personal-care and travel time are non-covered regardless of setting.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Whether Sunshine imposes any setting-specific documentation beyond the state IEP/504 rule — confirm with Sunshine UM before starting school-based hours.',
      },
      billAsProvider: {
        value:
          'The PA form is built around the supervising clinician’s identity: it collects the BCBA/licensed-clinician name, credentials and individual provider NPI, plus the group facility name, group NPI and group tax ID where applicable. Underneath, the state enrollment structure governs — every rendering practitioner enrolls with AHCA (Lead Analyst 392, BCaBA 391, RBT 390, BA group 393), with 390s and 391s enrollable only inside an enrolled group. A member transferring from another insurer requires proof of the previous authorization with the request.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
    },
    pill: 'Payer Guide · Sunshine Health',
    h1: 'Sunshine Health ABA / Behavior Analysis coverage (Florida MMA plan).',
    metaTitle: 'Sunshine Health (Florida Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Sunshine Health administers Florida Medicaid Behavior Analysis since the February 2025 carve-in — in-house UM, the dedicated BA PA form and fax, 5-day determinations, the value-based incentive program, and a reported network enrollment pause.',
    intro: [
      'Sunshine Health, Centene\'s Florida plan and the largest in SMMC, administers the Behavior Analysis benefit in-house — no delegated UM vendor. Clinical criteria mirror the AHCA coverage policy (Vineland-3/BASC-3 documentation, 6-month authorizations, the referral gate), so what\'s Sunshine-specific is machinery: a dedicated BA PA request form and fax line, a 5-calendar-day determination clock, a value-based incentive program for BA providers, and — worth knowing for network planning — an industry-reported pause on adding practitioners to existing BA groups. Sunshine also operates the Children\'s Medical Services Health Plan on behalf of the state, which has its own guide.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan (Centene) — largest in Florida; also operates CMS Health Plan' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy (plans can\'t be more stringent)' },
      { label: 'Prior auth', value: 'Required for all BA — dedicated BA PA form, fax 1-844-208-9113' },
      { label: 'Determinations', value: '5 calendar days (MMA/CW/SMI/LTC/HIV); 7 for CMS Health Plan' },
      { label: 'UM', value: 'In-house Sunshine UM Department — 1-844-477-8313' },
      { label: 'Rates', value: 'Contracted; state BA fee schedule is the reference baseline' },
    ],
    sections: [
      {
        h2: 'How Sunshine runs BA authorization',
        body: [
          'Requests go through the Sunshine Health Secure Provider Portal or by fax to the dedicated BA line, 1-844-208-9113, using Sunshine\'s BA PA request form. The documentation requirements are the state stack: Vineland-3 and BASC-3 PRQ scoring reports at the initial assessment and annually, the physician referral/order/CDE gate, and 6-month authorization periods. Determinations land within 5 calendar days for MMA and most other lines (7 calendar days for the CMS Health Plan line). UM questions go to Sunshine\'s in-house department at 1-844-477-8313. In late October 2025 Sunshine extended authorization timeframes and units for members with renewals landing October 31 and told providers to check the portal before submitting renewals — a reminder to verify the current auth on file before building a renewal packet.',
        ],
        cites: [
          { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
        ],
      },
      {
        h2: 'The VBP program — and a reported enrollment pause',
        body: [
          'Sunshine runs a value-based incentive program for BA providers with outcome-tied bonuses — worth asking about at contracting, since it\'s the only one of the nine plans with a published BA VBP. On the flip side: industry reporting describes a temporary pause, effective October 1, 2025, on enrolling new practitioners into existing BA provider groups — effectively a network moratorium at the practitioner level. We could not verify this against a Sunshine primary source (the plan\'s newsroom blocks automated access), so treat it as a flagged, unconfirmed report: if you\'re adding BCBAs or RBTs to a Sunshine-contracted group, confirm current enrollment status with your provider-relations contact before promising start dates.',
          'A confirmed, primary-sourced rule as of July 15, 2026: Sunshine will not carry an authorization over when a member switches BA providers. The new provider must submit a brand-new initial authorization request (starting at 24 units before treatment codes are added), obtain its own current Vineland-3/BASC-3 assessments rather than relying on the prior provider\'s documentation, and file a Change of Provider Form — Sunshine explicitly states it will not accept the outgoing provider\'s paperwork to carry the case forward. Build this into any transfer-of-care intake: a family switching BA providers restarts the authorization clock, it doesn\'t transfer it.',
          'A second, newer rule layers on top, effective August 1, 2026: every NEW BA authorization request must include a "PCP Acknowledgement and Care Coordination Form," per a Sunshine newsroom notice published July 31, 2026. Sunshine\'s own language is blunt about the stakes: "Authorizations submitted on or after August 1, 2026, will not be approved without this form." The PCP reviews the member/provider information on the form and confirms awareness of the BA services and any care-coordination considerations — but does NOT determine BA hours, approve the treatment plan, or make the authorization decision itself; that stays with Sunshine\'s UM process. Two mechanics worth building into intake workflow: the form must be updated annually, but the ORIGINAL signed document has to be resubmitted with EVERY prior-authorization request, not just once a year — and this form is additive, layering on top of (not replacing) the existing CDE, Vineland-3, and BASC-3 documentation stack.',
        ],
        cites: [
          { title: '3 Pie Squared — Sunshine Health ABA enrollment pause (industry report, unverified)', url: 'https://3piesquared.com/blog/sunshine-healths-aba-enrollment-pause-what-aba-practice-owners-need-to-know_361' },
          { title: 'Sunshine Health — Behavior Analysis (BA) Provider Changes Require New Authorization (7/15/2026)', url: 'https://www.sunshinehealth.com/newsroom/ba-provider-change-guidance.html' },
          { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
          { title: 'Sunshine Health — PCP Acknowledgement and Care Coordination Form required for new BA authorizations, eff. 8/1/2026 (published 7/31/2026)', url: 'https://www.sunshinehealth.com/newsroom/pcp-acknowledgement.html' },
        ],
      },
      {
        h2: 'Ambetter is NOT Florida Medicaid — the marketplace distinction',
        body: [
          'Sunshine Health\'s own newsroom describes Centene\'s Florida footprint as spanning several separate lines of business: "Sunshine Health offers government-sponsored managed care through Medicaid, Long Term Care, the Health Insurance Marketplace (Ambetter), and Medicare (Allwell)." Ambetter from Sunshine Health is the ACA Health Insurance Marketplace (exchange) brand — a completely different product from the Sunshine Health Medicaid MMA plan covered by the rest of this guide, underwritten by a separate entity (Centene Venture Company Florida / Sunshine State Health Plan, Inc. as a Qualified Health Plan issuer). Because roughly a quarter of Carelu\'s Florida intake mentions "Sunshine" or "Ambetter," and families often use the names interchangeably, intake should always ask which card the family actually holds rather than assuming Medicaid rules apply.',
          'The distinction isn\'t just branding — it changes which coverage rules govern. Florida\'s autism mandate (the Steven A. Geller Autism Coverage Act, § 627.6686, Fla. Stat.) explicitly excludes individual-market plans by its own text: the statute\'s definition of "health insurance plan" states it "does not include any health insurance plan offered in the individual market, any health insurance plan that is individually underwritten, or any health insurance plan provided to a small employer." Florida\'s own Office of Insurance Regulation confirms the practical effect: the mandate "appl[ies] to Florida regulated, fully-insured large group health insurance and Health Maintenance Organization plans," while "the regulation of coverage and benefits for ASD under individual and small group health plans" falls instead under the federal Mental Health Parity and Addiction Equity Act (MHPAEA) — and OIR notes MHPAEA "does not explicitly mandate applied behavior analysis (ABA) therapy as outlined in Florida law for large group plans." Ambetter marketplace plans are individual-market fully-insured products, so they sit outside the Geller Act entirely — a materially different, and more fragile, legal basis for ABA coverage than Florida Medicaid\'s AHCA-mandated Behavior Analysis benefit. Ambetter\'s own ABA coverage instead rests on ACA Essential Health Benefits/plan design and Centene\'s corporate-wide medical-necessity clinical policy (CP.BH.104, "Applied Behavior Analysis"), which explicitly carves out that Medicaid state rules take precedence over its own general criteria wherever the two conflict — confirming Ambetter is not simply a rebrand of the Medicaid benefit. We could not verify whether Ambetter\'s prior-authorization contacts are genuinely separate from Sunshine Health Medicaid\'s (the same portal, phone, and BH fax numbers appear on Ambetter\'s own published provider pages), so route by the family\'s actual card and plan documents rather than assuming a distinct process.',
        ],
        cites: [
          { title: 'Sunshine Health newsroom — "Ambetter from Sunshine Health makes it easier..."', url: 'https://www.sunshinehealth.com/content/sunshine-new/en_us/newsroom/ambetter-from-sunshine-health-makes-it-easier-than-ever-to-get-health-insurance-coverage.html' },
          { title: 'Ambetter Health — Florida health plans page', url: 'https://www.ambetterhealth.com/en/fl/health-plans/' },
          { title: '§ 627.6686, Fla. Stat. (2024) — Steven A. Geller Autism Coverage Act', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
          { title: 'Florida CFO/Office of Insurance Regulation — Autism Spectrum Disorder coverage', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
          { title: 'Centene Clinical Policy CP.BH.104 — Applied Behavior Analysis', url: 'https://www.ambetterhealth.com/content/dam/centene/Sunshine/Ambetter/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Exact Sunshine line of business', desc: 'MMA vs. Child Welfare vs. SMI vs. CMS Health Plan — the determination clock and processes differ.' },
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies unchanged — collect it before the PA.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'Required at initial assessment and annually with Sunshine requests.' },
      { title: 'Practitioner enrollment status', desc: 'A reported pause on adding practitioners to existing BA groups — verify with provider relations before quoting start dates.' },
      { title: 'PCP Acknowledgement and Care Coordination Form', desc: 'Required with every NEW BA authorization request effective 8/1/2026 — the ORIGINAL signed form must accompany each PA request (annual update alone isn\'t enough); missing it means the authorization won\'t be approved.' },
      { title: 'Sunshine Medicaid vs. Ambetter marketplace', desc: 'Ask which card the family holds — Ambetter is Centene\'s ACA marketplace brand, not Florida Medicaid, and follows different coverage rules (ACA/MHPAEA + CP.BH.104, not the state autism mandate or the AHCA BA policy).' },
    ],
    sources: [
      { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
      { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' },
      { title: 'Sunshine Health — Behavior Analysis (BA) Provider Changes Require New Authorization (7/15/2026)', url: 'https://www.sunshinehealth.com/newsroom/ba-provider-change-guidance.html' },
      { title: 'Sunshine Health — PCP Acknowledgement and Care Coordination Form, eff. 8/1/2026 (published 7/31/2026)', url: 'https://www.sunshinehealth.com/newsroom/pcp-acknowledgement.html' },
      { title: '3 Pie Squared — Sunshine ABA enrollment pause (industry report)', url: 'https://3piesquared.com/blog/sunshine-healths-aba-enrollment-pause-what-aba-practice-owners-need-to-know_361' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
      { title: 'Sunshine Health newsroom — Ambetter marketplace description', url: 'https://www.sunshinehealth.com/content/sunshine-new/en_us/newsroom/ambetter-from-sunshine-health-makes-it-easier-than-ever-to-get-health-insurance-coverage.html' },
      { title: 'Ambetter Health — Florida health plans page', url: 'https://www.ambetterhealth.com/en/fl/health-plans/' },
      { title: '§ 627.6686, Fla. Stat. (2024) — Steven A. Geller Autism Coverage Act', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
      { title: 'Florida CFO/Office of Insurance Regulation — Autism Spectrum Disorder coverage', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
      { title: 'Centene Clinical Policy CP.BH.104 — Applied Behavior Analysis', url: 'https://www.ambetterhealth.com/content/dam/centene/Sunshine/Ambetter/policies/clinical-policies/CP.BH.104.pdf' },
    ],
    faq: [
      { q: 'Does Sunshine Health cover ABA in Florida?', a: 'Yes — since the February 1, 2025 carve-in, Sunshine administers the Florida Medicaid Behavior Analysis benefit for its MMA members on the AHCA clinical criteria: no autism diagnosis required, physician referral + order + CDE, PA on all BA services.' },
      { q: 'How fast does Sunshine decide BA authorizations?', a: 'Published determinations run 5 calendar days for MMA and most lines, 7 calendar days for the CMS Health Plan line. Submit via the secure portal or the dedicated BA fax, 1-844-208-9113.' },
      { q: 'Is Sunshine accepting new ABA providers?', a: 'Industry reporting describes a temporary pause (from October 1, 2025) on enrolling new practitioners into existing BA groups, which we could not confirm against a Sunshine primary source. Verify current status with Sunshine provider relations.' },
      { q: 'What is the Sunshine Health PCP Acknowledgement Form?', a: 'Effective August 1, 2026, Sunshine requires a "PCP Acknowledgement and Care Coordination Form" with every new BA authorization request — Sunshine states authorizations submitted on or after that date "will not be approved without this form." The PCP confirms awareness of the BA services and care-coordination considerations but does not set BA hours or approve the treatment plan. The form updates annually, but the original signed copy must be resubmitted with every PA request, on top of the existing CDE/Vineland-3/BASC-3 documentation.' },
      { q: 'Is Ambetter the same as Sunshine Health Medicaid?', a: 'No — Ambetter from Sunshine Health is Centene\'s ACA Marketplace (exchange) brand, a fully-insured individual-market product. It is NOT Florida Medicaid, and Florida\'s autism mandate (§ 627.6686) explicitly excludes individual-market plans, so Ambetter\'s ABA coverage rests on ACA/MHPAEA rules and Centene\'s own clinical policy rather than the state mandate or the AHCA Medicaid BA policy. Always confirm which card a family holds.' },
    ],
  },

  'cms-health-plan-florida': {
    slug: 'cms-health-plan-florida',
    family: 'centene',
    cardDesc: 'Specialty plan for children with chronic conditions; Sunshine machinery, 7-day clock.',
    assessmentPA: {
      value: 'Required — via Sunshine Health\'s BA process (portal or BA fax 1-844-208-9113); Title 21/CHIP members included',
      status: 'verified',
      cites: [{ title: 'Sunshine Health \u2014 BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Sunshine Health \u2014 PA required for ABA CPT codes incl. CMS Title 21 (plan notice)', url: 'https://www.sunshinehealth.com/newsroom/aba-cpt-codes.html' }],
    },
    treatmentPA: {
      value: 'Required — determinations within 7 calendar days (vs. 5 on other Sunshine lines)',
      status: 'verified',
      cites: [{ title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health) — standard PA decisions within seven calendar days', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health \u2014 BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
    },
    payer: 'Children\'s Medical Services (CMS) Health Plan (FL)',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21 — and because this is the Title XIX/XXI specialty plan for children with chronic conditions, essentially the whole membership sits inside that window. Neither Sunshine’s BA materials nor the plan notice publishes a CMS-specific age limit, and the coverage policy forbids a plan from being more stringent than state policy.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required. The instrument clock is Sunshine’s, because CMS Health Plan runs on Sunshine’s BA process: the Vineland-3 and BASC-3 PRQ core assessments are required at the initial assessment and annually for reassessments, with complete scoring reports submitted at each prior-authorization request, on top of the state’s six-month reassessment and updated-behavior-plan cycle.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'The state rule, unchanged: the CDE must be led by a licensed practitioner working within their medical, developmental or psychological scope of practice, and the referral comes from an independent physician or qualifying practitioner. This matters more on this plan than anywhere else in Florida — members carry co-occurring chronic conditions and rich specialist records, and the no-diagnosis eligibility means functionally impairing behavior qualifies through the referral gate without an ASD label.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
      },
      diagnosticTools: {
        value:
          'The state pair, via Sunshine’s process: Vineland-3 Comprehensive Parent Interview Form (plus the Maladaptive Behavior Domain for ages 3 and older) and the BASC-3 PRQ for ages 2 through 18, with complete scoring reports attached to every PA request and re-administration annually.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required — the state referral plus physician order plus CDE, submitted through Sunshine’s BA process. Two CMS-specific mechanics: prior authorization applies to the ABA CPT codes for Title 21 (CHIP) members as well as Title 19, so a CHIP card does not shortcut the workflow; and determinations run up to seven calendar days rather than Sunshine’s five, which is the longest published clock among the Sunshine lines.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health) — standard PA decisions within seven calendar days', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule as administered by Sunshine: telehealth is allowed only for 97156 caregiver training, within the state’s two-hours-a-week telemedicine cap, with a HIPAA-compliant platform and Florida Department of Health registration for an out-of-state rendering provider. No CMS Health Plan-specific telehealth expansion is published.',
        status: 'verified',
        cites: [{ title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      authTurnaround: {
        value:
          'CMS Health Plan runs its own, slower clock. Its provider manual: standard medical and behavioral health PA decisions “are made within seven calendar days of receipt of the request,” with one extension of “up to an additional four calendar days.” Urgent or expedited requests are decided “within 48 hours of receipt,” with a one-time one-day extension. Lead time: submit pre-scheduled services “within seven calendar days before the requested service date.” No separate BA reauthorization lead time is published. Note the gap with the AHCA contract: CMS Health Plan “must meet all other plan requirements for the MMA program,” and the MMA contract sets 5 days standard and 2 days expedited. Plan around the 7 days the plan publishes.',
        status: 'verified',
        cites: [
          { title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'CMS Health Plan’s manual: if “the member has other primary medical insurance, providers should submit the claim to that insurance as CMS Health Plan is always the payer of last resort. If an authorization is required, the providers still must obtain Sunshine Health authorization for the Medicaid portion of the bill.” Check the Coordination of Benefits tab in the Sunshine portal. Primary and secondary claims must be split and sent in order. File the COB claim within 90 days of the primary payer’s explanation of payment. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Sunshine’s machinery on the state floor: RBTs under a BCBA or BCaBA, BCaBAs under a BCBA, supervision intensity per the Council of Autism Service Providers standards as set out in the supervision plan inside the approved behavior plan, which must name the authorized supervisors.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
      },
      concurrentBilling: {
        value:
          'The state rule governs and Sunshine publishes no CMS-specific variation: the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Sunshine UM at 1-844-477-8313, which administers CMS Health Plan BA, for whether a specific plan may carry 97153 and 97155 on the same clock time.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling: up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, with EPSDT available to exceed policy and fee-schedule limits when medically necessary, and group treatment capped at six participants. No per-day unit ceiling is published for this plan.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
        verifyVia:
          'Sunshine UM for any per-day claim edit; the current AHCA BA fee schedule for per-assessment unit caps.',
      },
      noteSignature: {
        value:
          'The state rule, unchanged: session notes are signed and dated by the rendering practitioner and must carry date, time, location, duration, behaviors observed, skills targeted, the recipient’s response, any protocol modification or therapist direction, an explanation if the parent or guardian was absent, and the participants. The behavior assessment and behavior plan are signed by the Lead Analyst and the parent or guardian.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' }],
      },
      placeOfService: {
        value:
          'The state rule: a school-based request must include the IEP, or a 504 plan, or documentation naming the school and explaining that neither exists; 1:1 shadow, personal care, companion and chaperone services are non-covered regardless of setting, as is travel time; BA is non-covered on the same day as behavioral health overlay, therapeutic behavioral on-site, or therapeutic group care services — a same-day conflict worth checking on a chronic-condition population that often carries other Medicaid benefits.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Claims run through Sunshine on the state enrollment structure: every rendering practitioner enrolls with AHCA (Lead Analyst 392, BCaBA 391, RBT 390), with 390s and 391s enrollable only as members of an enrolled BA group (393), and the PA request carries the supervising BCBA or licensed clinician’s NPI plus the group NPI and tax ID.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' }],
      },
    },
    pill: 'Payer Guide · CMS Health Plan (FL)',
    h1: 'Children\'s Medical Services Health Plan ABA coverage (Florida specialty plan).',
    metaTitle: 'CMS Health Plan (Florida Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How the Children\'s Medical Services Health Plan — Florida\'s specialty plan for children with chronic conditions, operated by Sunshine Health — handles Behavior Analysis: Sunshine\'s BA process, the 7-day determination clock, and Title 21 (CHIP) PA requirements.',
    intro: [
      'The Children\'s Medical Services (CMS) Health Plan is Florida\'s Title XIX/XXI specialty plan for children with chronic conditions, operated by Sunshine Health on behalf of the state — which makes its membership disproportionately ABA-relevant and its BA process effectively a Sunshine line of business. Requests run through Sunshine\'s portal, form, and BA fax; the practical differences are a longer determination clock (7 calendar days instead of 5) and the fact that Title 21 (CHIP) members also require PA for ABA CPT codes.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC specialty plan (Title XIX/XXI), operated by Sunshine Health' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy, via Sunshine\'s BA process' },
      { label: 'Prior auth', value: 'Required — Sunshine portal or BA fax 1-844-208-9113; CHIP members too' },
      { label: 'Determinations', value: '7 calendar days (the longest clock among Sunshine lines)' },
      { label: 'Population', value: 'Children with chronic conditions — high per-member ABA relevance' },
      { label: 'Rates', value: 'Contracted via Sunshine; state fee schedule baseline' },
    ],
    sections: [
      {
        h2: 'A Sunshine line with two differences',
        body: [
          'Everything mechanical about CMS Health Plan BA is Sunshine Health: the Secure Provider Portal, the BA PA request form, the dedicated BA fax at 1-844-208-9113, in-house UM, and the AHCA clinical criteria underneath (referral + order + CDE, Vineland-3/BASC-3 reports, 6-month authorizations). The two differences worth building into intake: determinations take up to 7 calendar days rather than 5 — set family expectations accordingly — and PA applies to ABA CPT codes for Title 21 (CHIP) members as well as Title 19, so don\'t assume a CHIP card changes the workflow. Because the plan serves children with chronic and complex conditions, Florida\'s no-autism-diagnosis eligibility matters here more than anywhere: members with co-occurring medical conditions and functionally impairing behavior qualify through the referral gate without an ASD label.',
        ],
        cites: [
          { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
          { title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health) — standard PA decisions within seven calendar days', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Title 19 vs. Title 21', desc: 'Both require PA for ABA codes — but capture which program the member is in for eligibility hygiene.' },
      { title: 'Referral + order + CDE', desc: 'The state gate applies; no autism diagnosis required.' },
      { title: 'Medical complexity picture', desc: 'Chronic-condition membership means richer clinical records — gather co-occurring diagnoses for the most specific coding.' },
      { title: 'Timeline expectations', desc: 'The 7-day determination clock is the longest of the Sunshine lines — communicate it to families.' },
    ],
    sources: [
      { title: 'Sunshine Health — BA Provider Quick Reference Guide', url: 'https://www.sunshinehealth.com/providers/Billing-manual/ba.html' },
      { title: 'Sunshine Health — PA required for ABA CPT codes incl. CMS Title 21 (plan notice)', url: 'https://www.sunshinehealth.com/newsroom/aba-cpt-codes.html' },
      { title: 'Children’s Medical Services Health Plan Provider Manual (CMS_10234, © 2025 Sunshine Health)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/CMS-PRO-PE-Manual.pdf' },
      { title: 'Sunshine Health — BA PA Request Form (fax 1-844-208-9113)', url: 'https://www.sunshinehealth.com/content/dam/centene/Sunshine/pdfs/SH-PRO-BH-BA-PA-Request.pdf' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does the CMS Health Plan cover ABA?', a: 'Yes — it administers the Florida Medicaid BA benefit for its specialty population through Sunshine Health\'s process, on the state clinical criteria. No autism diagnosis is required; the physician referral + order + CDE gate applies.' },
      { q: 'How is CMS Health Plan different from regular Sunshine Health for ABA?', a: 'Same portal, form, fax, and criteria — but determinations take up to 7 calendar days instead of 5, and Title 21 (CHIP) members also need PA for ABA CPT codes.' },
    ],
  },

  'simply-healthcare-florida': {
    slug: 'simply-healthcare-florida',
    family: 'anthem',
    cardDesc: 'BA fully delegated to Carelon — auths AND claims; 30-day data-freshness rule on PAs.',
    assessmentPA: {
      value: 'Required — via Carelon Behavioral Health: eServices portal or fax 1-800-370-1116',
      status: 'verified',
      cites: [{ title: 'Simply Healthcare / Carelon \u2014 Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
    },
    treatmentPA: {
      value: 'Required — via Carelon; treatment plan and data must be no older than 30 days at submission',
      status: 'verified',
      cites: [{ title: 'Simply Healthcare / Carelon \u2014 Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Simply Healthcare / Carelon \u2014 Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Simply Healthcare Plans (FL)',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21. Carelon’s February 2025 behavioral analysis training for Simply publishes no age criterion of its own, and the coverage policy bars a plan from applying more stringent service coverage limits than state policy.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required, but Carelon imposes the tightest freshness rule of the nine Florida plans: the treatment plan and supporting data “should be no older than 30 days at the time of submission,” and “the plan should contain current Vineland and BASC scores.” That is a process rule sitting on top of the state’s clinical cycle — reassessment and an updated behavior plan at least every six months, core instruments re-administered every 12 — and it changes sequencing: refresh data collection before assembling a renewal packet rather than finalising the plan months ahead.',
        status: 'verified',
        cites: [{ title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Carelon narrows the CDE author in its own training material: “CDE: diagnostic evaluation completed by a medical doctor specializing in developmental behavioral pediatrics, neurodevelopmental pediatrics, pediatric neurology, adult or child psychiatry, or a child psychologist,” and the evaluation must be “signed by the qualified diagnostician.” Note what is missing against the state list — the primary care physician in family practice, internal medicine or pediatrics. Because the coverage policy forbids a plan from being more stringent than Florida Medicaid policy, a PCP-authored CDE should still be acceptable, but Carelon’s published packet does not say so.',
        status: 'verified',
        cites: [{ title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Carelon (eServices, or provider.relations.FL@carelon.com) on whether a PCP-authored CDE is accepted for a Simply member — the state list is wider than Carelon’s published one.',
      },
      diagnosticTools: {
        value:
          'The state pair, with a currency requirement: Carelon requires the submitted treatment plan to “contain current Vineland and BASC scores,” which in the state policy means the Vineland-3 Comprehensive Parent Interview Form (plus the Maladaptive Behavior Domain for ages 3 and older) and the BASC-3 PRQ for ages 2 through 18, with complete scoring reports attached to the prior-authorization request and re-administration every 12 months.',
        status: 'verified',
        cites: [{ title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required. Carelon’s submission checklist is explicit: “a referral for BA therapy by a qualified diagnostician,” with the CDE attached and signed by that diagnostician; an up-to-date treatment plan with member-specific information and data; the completed request form; and the IEP or 504 plan if applicable. The state requirement that the referral include a physician’s order for BA services applies underneath.',
        status: 'verified',
        cites: [{ title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. Carelon’s February 2025 BA training for Simply publishes no telehealth rule of its own — no code list, no place-of-service guidance and no expansion beyond the state provision.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
        verifyVia:
          'Carelon eServices or provider.relations.FL@carelon.com before scheduling any remote session other than 97156 caregiver training.',
      },
      authTurnaround: {
        value:
          'Simply’s MMA manual publishes only the expedited clock: “Decisions on urgent requests (that is, expedited service authorizations) will be made within two calendar days,” and expedited requests must go through Availity Essentials, not fax or phone. It publishes no standard-request number, so the contract clock applies. The AHCA contract every MMA plan signs sets the clock: plans “shall provide standard authorization decisions within no more than five (5) days following receipt of the request for service,” extendable by “up to four (4) additional days,” and expedited decisions “no later than two (2) days after receipt,” extendable by one day. The contract defines days as calendar days. That is stricter than the federal Medicaid managed-care cap (7 calendar days standard and 72 hours expedited for rating periods from 1/1/2026, 42 CFR 438.210(d)), so the state clock governs. Carelon runs Simply’s BA reviews, and its 30-day rule bites first: the treatment plan and data must be no more than 30 days old when submitted. No reauthorization lead time is published.',
        status: 'verified',
        cites: [
          { title: 'Simply Healthcare — Florida SMMC MMA and Florida Healthy Kids Provider Manual (Nov 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SMH_FHKProviderManual.pdf?v=202606181620' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
          { title: 'Simply Healthcare / Carelon — Florida Medicaid Behavioral Analysis provider training (Jan 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Simply’s manual: “the Medicaid program will be the payer of last resort when third-party resources are available.” When Simply knows of other coverage before paying, it will reject the claim “and redirect the provider to bill the appropriate insurance carrier,” or recover after payment if it learns later. Send COB/TPL information to Florida Claims Correspondence with a Claim Correspondence Form and the other payer’s EOP. The manual does not say whether a Simply (Carelon) BA authorization is still needed when a commercial plan is primary. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Simply Healthcare — Florida SMMC MMA and Florida Healthy Kids Provider Manual (Nov 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SMH_FHKProviderManual.pdf?v=202606181620' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
        verifyVia: 'Carelon (1-800-397-1630), before the first date of service: whether Simply requires its own BA authorization when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The state floor, unchanged by the Carelon delegation: supervision of BCaBAs and RBTs follows the Council of Autism Service Providers practice standards as specified in the supervision plan inside the approved behavior plan, which must name the authorized supervisors. Rendering is credential-chained — Lead Analyst (BCBA, FL-CBA, or Ch. 490/491 licensee), BCaBA under a BCBA, RBT under a BCBA or BCaBA. Carelon’s BA training adds no ratio or caseload cap.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
      },
      concurrentBilling: {
        value:
          'The state rule governs and Carelon publishes no variation: the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Carelon’s National Provider Service Line or provider.relations.FL@carelon.com for whether an authorization can carry 97153 and 97155 on the same clock time.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling: up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, EPSDT available above it when medically necessary, group treatment capped at six participants, and 15-minute units on the CMS 8-minute rule. Carelon publishes no per-day unit table for Simply.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
        verifyVia:
          'Carelon for the per-day edits its claim system applies; the current AHCA BA fee schedule for per-assessment unit caps.',
      },
      noteSignature: {
        value:
          'The state rule: session notes are signed and dated by the rendering practitioner, carrying date, time, location, duration, behaviors observed, skills targeted, the recipient’s response, protocol modifications or therapist direction, an explanation if the parent or guardian was absent, and the participants. The behavior assessment and behavior plan carry two signatures — the Lead Analyst and the parent or guardian. Carelon layers a date discipline rather than a signature one: the plan and data must be under 30 days old when submitted, so document dates are themselves a claim risk.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
      },
      placeOfService: {
        value:
          'The state rule, with Carelon collecting the school evidence in its packet: the IEP or 504 plan is a listed submission item “if applicable,” and the state requires a school-based request to carry the IEP, or a 504, or documentation naming the school and explaining that neither exists. Non-covered regardless of setting: 1:1 shadow, personal care assistance, companion and chaperone services, caregiver or childcare, and travel time.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }],
      },
      billAsProvider: {
        value:
          'Your counterparty is Carelon, not Simply: authorizations go to Carelon through eServices or fax 1-800-370-1116, and claims go to Carelon through Availity Essentials — its preferred direct-data-entry channel — with Payspan handling payments. The claim itself still rides on the state enrollment structure: each rendering practitioner enrolls with AHCA (Lead Analyst 392, BCaBA 391, RBT 390), with 390s and 391s enrollable only inside an enrolled BA group (393). Three registrations — eServices, Availity, Payspan — precede the first Simply member.',
        status: 'verified',
        cites: [{ title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
    },
    pill: 'Payer Guide · Simply Healthcare (FL)',
    h1: 'Simply Healthcare ABA / Behavior Analysis coverage (Florida MMA plan).',
    metaTitle: 'Simply Healthcare (Florida Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Simply Healthcare (Elevance) administers Florida Medicaid Behavior Analysis — full delegation to Carelon Behavioral Health for both authorizations and claims, the 30-day treatment-plan freshness rule, eServices and Availity workflows.',
    intro: [
      'Simply Healthcare, Elevance\'s Florida plan, took the most distinctive path of the nine MMA plans at the February 1, 2025 carve-in: it delegated Behavior Analysis UM to Carelon Behavioral Health — and not just authorizations. Claims go to Carelon too, via Availity Essentials, making Simply the only Florida plan where providers effectively work for a national behavioral-health vendor end to end. Clinical criteria still defer to the AHCA policy; the workflow is what\'s different, including one Carelon-specific rule with real intake consequences: treatment plans and data must be no older than 30 days when the PA is submitted.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan (Elevance Health)' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy; UM delegated to Carelon (eff. 2/1/2025)' },
      { label: 'Prior auth', value: 'Required — Carelon eServices portal or fax 1-800-370-1116' },
      { label: 'Freshness rule', value: 'Treatment plan + data no older than 30 days at submission' },
      { label: 'Claims', value: 'To Carelon via Availity Essentials (not Simply); Payspan for payments' },
      { label: 'Provider relations', value: 'FL-dedicated Carelon team — provider.relations.FL@carelon.com' },
    ],
    sections: [
      {
        h2: 'The Carelon delegation: auths and claims',
        body: [
          'Effective February 1, 2025, Simply\'s BA authorizations run through Carelon Behavioral Health — submit via the Carelon eServices portal or fax 1-800-370-1116 — and claims submit to Carelon through Availity Essentials (Carelon\'s preferred direct-data-entry channel), with Payspan handling payments. At the transition, existing authorizations were auto-extended at least 90 days for continuity of care. Support runs through Carelon\'s National Provider Service Line, Availity Client Services, and a Florida-dedicated provider-relations mailbox at provider.relations.FL@carelon.com. For a practice used to billing the health plan directly, the operational takeaway is blunt: for Simply members, your counterparty is Carelon — portal registrations, claims setup, and escalation paths should all be built there.',
        ],
        cites: [
          { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025 transition)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' },
        ],
      },
      {
        h2: 'The 30-day freshness rule',
        body: [
          'Carelon requires that the treatment plan and supporting data be no older than 30 days at the time of PA submission. That\'s a process rule, not a coverage limit — the state\'s 6-month reassessment cycle still governs clinically — but it changes sequencing: don\'t finalize the behavior plan months ahead of the submission date, and when a renewal window opens, refresh data collection before assembling the packet. A stale-dated plan is an avoidable administrative denial. Everything else follows the state stack: referral + order + CDE at entry, Vineland-3/BASC-3 scoring reports, up-to-6-month authorization periods.',
        ],
        cites: [
          { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025 transition)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' },
        ],
      },
    ],
    collect: [
      { title: 'Carelon setup status', desc: 'eServices for auths, Availity for claims, Payspan for payments — three registrations before the first Simply member.' },
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies; no autism diagnosis required.' },
      { title: 'Plan/data dates', desc: 'Treatment plan and data must be under 30 days old at submission — track document dates in the packet.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'The state documentation stack rides along with every Carelon request.' },
    ],
    sources: [
      { title: 'Simply Healthcare / Carelon — Behavioral Analysis provider training (Feb 2025)', url: 'https://provider.simplyhealthcareplans.com/docs/gpp/FLFL_SIMPLY_CarelonBehavioralAnalysisTrainingRes.pdf?v=202503041513' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does Simply Healthcare cover ABA in Florida?', a: 'Yes — on the AHCA Behavior Analysis criteria (no autism diagnosis required), with utilization management and claims both delegated to Carelon Behavioral Health since February 1, 2025.' },
      { q: 'Where do Simply Healthcare ABA authorizations go?', a: 'To Carelon — via the eServices portal or fax 1-800-370-1116. Claims also go to Carelon, submitted through Availity Essentials, not to Simply directly.' },
      { q: 'What is the 30-day rule on Simply/Carelon PAs?', a: 'The treatment plan and supporting data must be no older than 30 days at submission — a Carelon process rule layered on the state\'s 6-month clinical cycle. Refresh data before assembling any renewal packet.' },
    ],
  },

  'unitedhealthcare-community-plan-florida': {
    slug: 'unitedhealthcare-community-plan-florida',
    family: 'unitedhealthcare',
    cardDesc: 'Optum-run since 2/2025: portal-only PA on Provider Express, 2-step auth, 120-day continuity.',
    assessmentPA: {
      value: 'Required — portal-only via Provider Express ("ABA Assessment" request type); no fax pathway advertised',
      status: 'verified',
      cites: [{ title: 'UHC Community Plan FL \u2014 SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }],
    },
    treatmentPA: {
      value: 'Required — "ABA Treatment" request type; Optum\'s two-step assessment-then-treatment structure',
      status: 'verified',
      cites: [{ title: 'UHC Community Plan FL \u2014 SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'UHC Community Plan FL \u2014 SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'UnitedHealthcare Community Plan of Florida',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21, with EPSDT available above the policy and fee-schedule limits. The plan’s SMMC Behavioral Analysis Program quick reference guide and Optum’s Florida ABA QRG are both administrative — continuity of care, portal navigation, claims, payment — and publish no clinical criteria, including no age criterion.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Optum Provider Express — Florida ABA QRG', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/flaba/FLABAQRG.pdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required. The state cycle governs: reassessment and an updated behavior plan at least every six months to renew, with the Vineland-3 and BASC-3 PRQ core instruments re-administered every 12 months, and no maximum age on the Comprehensive Diagnostic Evaluation itself. Neither the plan QRG nor Optum’s Florida ABA QRG publishes a Florida-specific recency window.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Optum Provider Express — Florida ABA QRG', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/flaba/FLABAQRG.pdf' }],
      },
      diagnosingProviders: {
        value:
          'The state rule, unchanged: the referral comes from an independent physician or qualifying practitioner (PCP in family practice, internal medicine or pediatrics; a developmental-behavioral, neurodevelopmental, pediatric-neurology or adult/child-psychiatry specialist; or a child psychologist), and the CDE must be led by a licensed practitioner working within their medical, developmental or psychological scope of practice. Optum’s national ABA criteria — which require a DSM-5-TR diagnosis from a state-licensed physician, psychologist or other qualified state-licensed clinician — are the commercial pattern, not the Florida Medicaid gate, and the state contract makes the AHCA policy the floor and ceiling.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }],
      },
      diagnosticTools: {
        value:
          'The state pair: Vineland-3 Comprehensive Parent Interview Form for all recipients (plus the Maladaptive Behavior Domain for ages 3 and older) and the BASC-3 PRQ for ages 2 through 18, with the complete scoring reports submitted with every prior-authorization request. Additional tools are at the Lead Analyst’s discretion. Neither the plan QRG nor Optum’s Florida ABA QRG adds an instrument requirement.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Optum Provider Express — Florida ABA QRG', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/flaba/FLABAQRG.pdf' }],
      },
      referral: {
        value:
          'Required — the state gate (independent physician referral, physician’s order for BA services, and a CDE performed to national evidence-based practice standards) applies unchanged. What is UHC-specific is the channel, not the content: “all behavioral analysis services require prior authorization. Requests must be submitted via the secure portal” — Provider Express, Auths, Request a new authorization, then “ABA Assessment” or “ABA Treatment” from the dropdown. No fax pathway is advertised for BA, which makes One Healthcare ID and Provider Express registration a day-one task rather than a fallback.',
        status: 'verified',
        cites: [{ title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. Neither the plan’s SMMC Behavioral Analysis Program QRG nor Optum’s Florida ABA QRG publishes a telehealth code list, place-of-service rule or modifier set for Florida Medicaid BA, and Optum’s national supplemental criteria treat telehealth as a best-practice reference rather than a coded benefit.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Optum Provider Express — Florida ABA QRG', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/flaba/FLABAQRG.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services (1-877-614-0484) before scheduling any remote BA session other than 97156 caregiver training.',
      },
      authTurnaround: {
        value:
          'UHC’s 2026 Florida Medicaid manual lists non-urgent pre-service decisions “within 7 days of receipt of request” and urgent/expedited pre-service decisions “within 2 days of request receipt.” Retrospective reviews take 30 calendar days from receipt of all clinical information. BA requests go through Optum (Provider Express), and neither the manual nor the Optum BA quick reference guide publishes a reauthorization lead time. Note the gap with the AHCA contract, which requires standard decisions “within no more than five (5) days following receipt” for MMA plans. The plan’s published 7 days is the realistic planning number.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Florida LTC and MMA', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/FL-Care-Provider-Manual-Statewide-Medicaid-Managed-Care.pdf' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'UHC’s manual: “UnitedHealthcare Community Plan is, by law, the payer of last resort for eligible members. Therefore, you must bill and obtain an explanation of benefits (EOB) from any other insurance or health care coverage resource before billing.” Attach the complete EOB, showing the paid amount or denial reason, to the UHC claim. Optum’s BA quick reference guide warns that claims needing “an exception process, such as coordination of benefits (COB)” may fall outside the usual 15-calendar-day processing time. It does not say whether an Optum BA authorization is still needed when a commercial plan is primary. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Florida LTC and MMA', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/FL-Care-Provider-Manual-Statewide-Medicaid-Managed-Care.pdf' },
          { title: 'UnitedHealthcare Community Plan of Florida / Optum — Behavioral Analysis quick reference guide', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
        verifyVia: 'Optum / UHC Community Plan Provider Services: whether an Optum BA authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The state floor: supervision of BCaBAs and RBTs follows the Council of Autism Service Providers practice standards as set out in the supervision plan inside the approved behavior plan, which must name the authorized supervisors; a Lead Analyst is a BCBA, FL-CBA or Ch. 490/491 licensee, a BCaBA works under a BCBA, and an RBT under a BCBA or BCaBA. Optum’s Florida BA materials publish no ratio or caseload cap, and Optum’s Gold Card program can waive prior authorization for eligible network behavioral providers once a track record exists.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published for this plan. Optum’s commercial ABA reimbursement policy does permit 97153 and 97155 concurrently when two different providers render them, but it is a commercial policy and does not govern the Florida Medicaid line; the state rule that does govern is the opposite default — the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services (1-877-614-0484) — ask specifically whether the commercial concurrency rule is applied to UnitedHealthcare Community Plan of Florida BA claims, or whether the AHCA rule stands alone.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling of up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, EPSDT available above it, group treatment capped at six participants, and 15-minute units on the CMS 8-minute rule. No per-day unit table is published for the Florida Medicaid line — Optum’s published per-day maximum-frequency table sits in its commercial reimbursement policy, which does not govern this plan.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services (1-877-614-0484) for the per-day unit edits applied to Florida Community Plan BA claims, and the current AHCA BA fee schedule.',
      },
      noteSignature: {
        value:
          'The state rule: “session notes must be signed and dated by the rendering practitioner,” carrying date, time, location and duration, behaviors observed, skills targeted, the recipient’s response, protocol modifications and therapist directions, an explanation if the parent or guardian was absent, and the participants. The behavior assessment and behavior plan are signed by the Lead Analyst and the parent or guardian. Optum’s Florida BA materials add no signature rule.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }],
      },
      placeOfService: {
        value:
          'The state rule: a school-based request must carry the IEP, or a 504 plan, or documentation naming the school and explaining that neither is available; 1:1 shadow, personal care assistance, companion and chaperone services are non-covered “regardless of activity or setting,” as are caregiver/childcare services and travel time. Optum’s Florida BA materials publish no place-of-service code list for this plan.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services for whether the Florida Medicaid line expects a POS code set beyond what the state policy requires.',
      },
      billAsProvider: {
        value:
          'Claims go to UnitedHealthcare Community Plan under payer ID 87726 within 180 days of the date of service, on EDI 837P/CMS-1500 (or 837I/UB-04), with clean claims “processed within 15 calendar days after receipt.” A first-time submitter must include a W9 — the March 2025 edition of the plan QRG also required a copy of the Florida license with that first claim. Underneath, the state enrollment structure governs whose NPI can render: Lead Analyst 392, BCaBA 391, RBT 390, with 390s and 391s enrollable only inside an enrolled BA group (393). Payment is electronic only, by ACH via Optum Pay or virtual card.',
        status: 'verified',
        cites: [{ title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' }, { title: 'Optum Provider Express — Florida ABA QRG', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/flaba/FLABAQRG.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
    },
    pill: 'Payer Guide · UHC Community Plan (FL)',
    h1: 'UnitedHealthcare Community Plan of Florida ABA / BA coverage (MMA plan).',
    metaTitle: 'UHC Community Plan Florida (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers Florida Medicaid Behavior Analysis — Optum\'s portal-only Provider Express workflow, the two-step assessment/treatment authorization, 120-day carve-in continuity, and claims mechanics (payer ID 87726).',
    intro: [
      'UnitedHealthcare Community Plan of Florida handed its Behavior Analysis program to Optum (United Behavioral Health) at the February 1, 2025 carve-in — making it the most "national-carrier" experience of the nine MMA plans. Authorizations run Optum\'s standard two-step structure on Provider Express, and uniquely among Florida\'s plans, the pathway is portal-only: no fax route is advertised for BA auths. The AHCA coverage policy remains the clinical floor and ceiling per the state contract, but the day-to-day machinery — clinical criteria documents, portal, credentialing — is Optum\'s ABA stack.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan; BA program managed by Optum since 2/1/2025' },
      { label: 'Clinical rules', value: 'AHCA BA policy (state floor/ceiling) + Optum criteria (BH803ABA + FL supplement)' },
      { label: 'Prior auth', value: 'Portal-only — Provider Express, "ABA Assessment" then "ABA Treatment"' },
      { label: 'Continuity at carve-in', value: '120 days honoring Acentra auths; non-par paid at prior rates ≥60 days' },
      { label: 'Claims', value: 'Payer ID 87726; 180-day timely filing; clean claims in 15 calendar days' },
      { label: 'Support', value: 'Web support 1-866-209-9320; provider services 1-877-614-0484' },
    ],
    sections: [
      {
        h2: 'The Optum workflow on a state-policy base',
        body: [
          'All BA services require prior authorization, and requests must be submitted via the secure Provider Express portal (One Healthcare ID login): Auths → Request a new authorization → select "ABA Assessment" or "ABA Treatment" from the dropdown. That two-step, assessment-then-treatment structure is Optum\'s national ABA pattern, applied to the Florida Medicaid population — with the state contract requiring compliance with the AHCA coverage policy, so the referral + order + CDE gate, the no-autism-diagnosis eligibility, and the state documentation stack all still apply. There is no advertised fax pathway for BA auths, which makes portal access a day-one credentialing task for any practice taking UHC members. Optum\'s Gold Card program can waive PA for eligible network behavioral providers — worth asking about once a track record exists.',
        ],
        cites: [
          { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' },
        ],
      },
      {
        h2: 'Transition history and claims mechanics',
        body: [
          'At the carve-in, UHC committed to a 120-day continuity-of-care period from February 1, 2025 — honoring and extending existing Acentra authorizations for the full 120 days and paying non-participating providers at prior rates for a minimum of 60 days. That window has closed; every auth now lives in Provider Express. Claims go to UHC Community Plan under payer ID 87726 with 180-day timely filing, and clean claims process within 15 calendar days. First-time submitters must include a W9 and a copy of the Florida license with the claim — a known first-claim tripwire for groups new to the plan.',
        ],
        cites: [
          { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Provider Express access', desc: 'Portal-only PA — confirm One Healthcare ID and Provider Express registration before the first UHC member.' },
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies; no autism diagnosis required.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'The state documentation stack attaches to Optum requests too.' },
      { title: 'First-claim documents', desc: 'W9 + Florida license copy required with a first-time claim submission.' },
    ],
    sources: [
      { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG (BH00998-1-25)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' },
      { title: 'Optum Provider Express — Florida ABA QRG', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/flaba/FLABAQRG.pdf' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Florida cover ABA?', a: 'Yes — since February 1, 2025 its Behavior Analysis program is managed by Optum on the state clinical criteria: no autism diagnosis required, physician referral + order + CDE, PA on all BA services.' },
      { q: 'How do I submit a BA authorization to UHC Community Plan of Florida?', a: 'Portal-only: Provider Express → Auths → Request a new authorization → "ABA Assessment" or "ABA Treatment." No fax pathway is advertised for BA — unique among Florida\'s nine plans.' },
      { q: 'Where do UHC Florida Medicaid ABA claims go?', a: 'To UHC Community Plan, payer ID 87726, within 180-day timely filing; clean claims process in 15 calendar days. First-time submitters must attach a W9 and a copy of the Florida license.' },
    ],
  },

  'humana-healthy-horizons-florida': {
    slug: 'humana-healthy-horizons-florida',
    family: 'humana',
    cardDesc: 'Widest channels of the nine (Availity, 24/7 IVR, fax), named BA reps, fee-schedule-linked non-par pay.',
    assessmentPA: {
      value: 'Required — via Availity Essentials (preferred), IVR 800-523-0023 (24/7), or fax 813-321-7220, with CDE, physician order, and BASC-3 PRQ attached',
      status: 'verified',
      cites: [{ title: 'Humana Healthy Horizons FL \u2014 BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Humana FL \u2014 ABA clinical toolkit', url: 'https://provider.humana.com/medicaid/florida-medicaid/aba-toolkit' }],
    },
    treatmentPA: {
      value: 'Required — same channels; PA list at Humana.com/PAL',
      status: 'verified',
      cites: [{ title: 'Humana Healthy Horizons FL \u2014 BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Humana FL \u2014 ABA clinical toolkit', url: 'https://provider.humana.com/medicaid/florida-medicaid/aba-toolkit' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Humana Healthy Horizons in Florida',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21, with EPSDT available above the coverage-policy and fee-schedule limits. Humana’s BA informational flyer and ABA toolkit publish no plan-specific age limit, and the state policy forbids a plan from applying more stringent service coverage limits.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required. Humana’s own instrument clock tracks the state cycle: the BASC-3 PRQ is required for ages 2 through 18 at the initial request and every 12 months, on top of the state’s reassessment and updated behavior plan at least every six months. The Comprehensive Diagnostic Evaluation itself carries no published expiry.',
        status: 'verified',
        cites: [{ title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'The state rule, restated in Humana’s documentation list: the physician’s order and the Comprehensive Diagnostic Evaluation both attach to the request, with the referral coming from an independent physician or qualifying practitioner and the CDE led by a licensed practitioner working within their medical, developmental or psychological scope of practice. Humana publishes no narrower list of its own.',
        status: 'verified',
        cites: [{ title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'Humana names the BASC-3 PRQ explicitly — ages 2 through 18, at the initial request and every 12 months — as a required attachment alongside the CDE and the physician’s order. The state pair applies in full, so the Vineland-3 Comprehensive Parent Interview Form (plus the Maladaptive Behavior Domain for ages 3 and older) rides with it, complete scoring reports included.',
        status: 'verified',
        cites: [{ title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required, and Humana publishes the fullest documentation list of the nine plans: the Comprehensive Diagnostic Evaluation, the physician’s order, the BASC-3 PRQ, a rationale for the requested hours, and the IEP or 504 plan when services are school-based — submitted on the Florida ABA PA form (MCD 466) through Availity Essentials (preferred), the 24/7 IVR at 800-523-0023, or fax 813-321-7220. Humana’s current flyer adds that “the Behavior Analysis Authorization form should be completed and included with your authorization request” and that “a valid Medicaid ID is required for all providers, whether located in Florida or out of state, as a condition of payment.”',
        status: 'verified',
        cites: [{ title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Humana FL — ABA PA Form (MCD 466)', url: 'https://assets.humana.com/is/content/humana/ABA_PA_Formpdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. Humana’s BA informational flyer and ABA toolkit publish no telehealth code list, modifier set or place-of-service rule for Florida BA.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }],
        verifyVia:
          'Humana’s Florida BA mailbox (FLBA@humana.com) or the provider line 800-477-6931 before scheduling a remote session other than 97156 caregiver training.',
      },
      authTurnaround: {
        value:
          'Humana’s 2026 Florida provider handbook publishes no decision timeframe for PA requests. Its PA page says only that requests “should be made as soon as possible.” The contract clock therefore applies. The AHCA contract every MMA plan signs sets the clock: plans “shall provide standard authorization decisions within no more than five (5) days following receipt of the request for service,” extendable by “up to four (4) additional days,” and expedited decisions “no later than two (2) days after receipt,” extendable by one day. The contract defines days as calendar days. That is stricter than the federal Medicaid managed-care cap (7 calendar days standard and 72 hours expedited for rating periods from 1/1/2026, 42 CFR 438.210(d)), so the state clock governs. Humana’s BA request must include a current assessment “from within the past 60 days,” so time the reassessment to the submission. No reauthorization lead time is published.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Florida — 2026 Provider Handbook', url: 'https://assets.humana.com/is/content/humana/Provider_Handbookpdf' },
          { title: 'Humana Healthy Horizons in Florida — Prior Authorization page', url: 'https://provider.humana.com/medicaid/florida-medicaid/prior-authorization' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Humana’s handbook says only: “Humana Healthy Horizons assumes full responsibility for collections in the event of third-party liability.” It publishes no step-by-step rule on billing the other payer first. The state rule that binds every MMA plan still applies. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Florida — 2026 Provider Handbook', url: 'https://assets.humana.com/is/content/humana/Provider_Handbookpdf' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
        verifyVia: 'Humana Provider Services (IVR 800-523-0023): whether Humana wants the commercial EOB before its claim, and whether its BA authorization is still required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The state floor: supervision of BCaBAs and RBTs per the Council of Autism Service Providers practice standards, specified in the supervision plan inside the approved behavior plan, which names the authorized supervisors. Humana adds no ratio or caseload cap — but it does ask for a rationale for the requested hours with every authorization, which is where a supervision schedule has to be justified.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }],
      },
      concurrentBilling: {
        value:
          'The state rule governs and Humana publishes no variation: the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Humana’s Florida BA mailbox (FLBA@humana.com) or the named regional BA representative for whether an authorization may carry 97153 and 97155 on the same clock time.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling of up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, with EPSDT available above it and group treatment capped at six participants. Humana bills “reimbursement for all services in 15-minute increments” and requires add-on codes to be billed with the corresponding base code. No per-day unit table is published.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }],
        verifyVia:
          'Humana provider services (800-477-6931) for per-day claim edits; the AHCA fee schedule under Rule 59G-4.002 for per-assessment unit caps.',
      },
      noteSignature: {
        value:
          'The state rule: session notes signed and dated by the rendering practitioner, carrying date, time, location, duration, behaviors observed, skills targeted, the recipient’s response, protocol modification or therapist direction, an explanation if the parent or guardian was absent, and the participants; the behavior assessment and behavior plan signed by the Lead Analyst and the parent or guardian. Humana publishes no additional signature rule for BA.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }],
      },
      placeOfService: {
        value:
          'Humana makes the state school rule an explicit line item on its documentation list — the IEP or 504 plan is required when services are school-based — and the state rule supplies the rest: in the absence of an IEP, documentation justifying the services plus an estimated IEP timeframe; 1:1 shadow, personal care, companion and chaperone services non-covered regardless of setting; travel time non-covered.',
        status: 'verified',
        cites: [{ title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Humana publishes the box-by-box rule: “use the CMS-1500 form to submit claims for behavioral analysis services”; if the rendering provider is in a group and the group is being paid, “the group will be captured in the billing provider section (Box 33), and then the rendering provider will be captured in the rendering provider section (Box 24)”; if the rendering provider is the one being reimbursed, they go in Box 33; and “enter the individual rendering (treating) provider’s number in Item 24 J… only when it is different from the pay-to provider number.” Claims go out under payer ID 61101 through Availity (paper to the Lexington, KY claims office), clean claims process within 20 days, and for codes inside an approved authorization non-participating providers default to the lesser of the amount Humana specified on the authorization form or 100% of the applicable Medicaid fee schedule.',
        status: 'verified',
        cites: [{ title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
    },
    pill: 'Payer Guide · Humana Healthy Horizons (FL)',
    h1: 'Humana Healthy Horizons in Florida ABA / BA coverage (MMA plan).',
    metaTitle: 'Humana Healthy Horizons Florida (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Humana Healthy Horizons administers Florida Medicaid Behavior Analysis — Availity, 24/7 IVR and fax channels, the MCD 466 PA form, documentation requirements, named regional BA reps, and non-par payment tied to the state fee schedule.',
    intro: [
      'Humana Healthy Horizons administers Florida\'s Behavior Analysis benefit in-house on the AHCA criteria, and differentiates on access: the broadest channel set of the nine plans (Availity Essentials preferred, a 24/7 IVR line, and fax), a dedicated BA provider-relations mailbox with named regional reps, and an unusually explicit rate anchor — non-participating providers\' claims for authorized codes default to a percentage of the Florida Medicaid allowable fee schedule. It was also among the most generous at the carve-in, honoring pre-existing authorizations for 120 days.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan (Humana), in-house UM' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy; PA form MCD 466' },
      { label: 'Prior auth', value: 'Availity (preferred), IVR 800-523-0023 (24/7), or fax 813-321-7220' },
      { label: 'Documentation', value: 'CDE, physician order, BASC-3 PRQ (initial + every 12 months), hours rationale, IEP/504 if school-based' },
      { label: 'Claims', value: 'Availity payer ID 61101; clean claims in 20 days; non-par default = % of state fee schedule' },
      { label: 'BA support', value: 'FLBA@humana.com + named regional reps; provider line 800-477-6931' },
    ],
    sections: [
      {
        h2: 'How Humana runs BA authorization',
        body: [
          'PA is required for all BA services and can be initiated three ways: Availity Essentials (Humana\'s preferred channel), the 24/7 IVR at 800-523-0023, or fax to 813-321-7220, using the Florida ABA PA form (MCD 466). The documentation list tracks the state policy closely: the Comprehensive Diagnostic Evaluation, the physician\'s order, the BASC-3 PRQ for ages 2–18 (at initial request and every 12 months), a rationale for the requested hours, and the IEP or 504 plan when services are school-based. The plan\'s full PA list lives at Humana.com/PAL. Uniquely among the nine, Humana publishes a dedicated BA provider-relations structure: the FLBA@humana.com mailbox plus named regional representatives covering Regions A–E and F–I — for an intake team, a saved contact sheet turns authorization questions into emails with a named owner. Non-par contracting starts at RequestToJoin@humana.com.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons FL — Behavior Analysis Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' },
          { title: 'Humana FL — ABA clinical toolkit', url: 'https://provider.humana.com/medicaid/florida-medicaid/aba-toolkit' },
        ],
      },
      {
        h2: 'Rates and claims: the fee-schedule anchor',
        body: [
          'Participating providers bill at contracted rates (claims via Availity, payer ID 61101; paper to Humana\'s Lexington, KY claims office), with clean claims processed within 20 days. The notable rate fact: for codes inside an approved authorization, non-participating claims default-pay at a percentage of the Florida Medicaid allowable fee schedule — an explicit statutory-schedule linkage that makes the state\'s low BA rates (97153 at $12.26/unit) the reference point for any Humana negotiation. At the February 2025 carve-in, Humana honored and auto-extended pre-existing Acentra authorizations for 120 days and paid non-par providers at pre-transition rates through that window.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons FL — Behavior Analysis Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' },
        ],
      },
    ],
    collect: [
      { title: 'Referral + order + CDE', desc: 'The CDE and physician order attach to the Humana PA — collect them at intake.' },
      { title: 'BASC-3 PRQ scoring report', desc: 'Required at initial request and every 12 months for ages 2–18.' },
      { title: 'Hours rationale', desc: 'Humana asks for the rationale behind requested hours — align clinical planning with the ask.' },
      { title: 'School status + IEP/504', desc: 'Required with school-based requests.' },
      { title: 'Regional BA rep', desc: 'Identify the named Humana rep for your region and save the FLBA@humana.com contact.' },
    ],
    sources: [
      { title: 'Humana Healthy Horizons FL — BA Informational Flyer (675204FL0225)', url: 'https://assets.humana.com/is/content/humana/ABA_Informational_Flyer_AHCApdf' },
      { title: 'Humana FL — ABA PA Form (MCD 466)', url: 'https://assets.humana.com/is/content/humana/ABA_PA_Formpdf' },
      { title: 'Humana FL — ABA clinical toolkit', url: 'https://provider.humana.com/medicaid/florida-medicaid/aba-toolkit' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does Humana Healthy Horizons cover ABA in Florida?', a: 'Yes — it administers the state Behavior Analysis benefit on AHCA criteria: no autism diagnosis required, physician referral + order + CDE, PA on all BA services via Availity, 24/7 IVR, or fax.' },
      { q: 'What documents does a Humana Florida BA authorization need?', a: 'The CDE, the physician\'s order, the BASC-3 PRQ (ages 2–18, initial and every 12 months), a rationale for requested hours, and the IEP/504 for school-based services — submitted with the MCD 466 form.' },
      { q: 'What does Humana pay non-par ABA providers in Florida?', a: 'For codes in an approved authorization, non-par claims default-pay at a percentage of the Florida Medicaid allowable fee schedule — so the state\'s BA rates are the explicit reference point.' },
    ],
  },

  'aetna-better-health-florida': {
    slug: 'aetna-better-health-florida',
    family: 'aetna',
    cardDesc: 'BA contracting runs through third-party BSN; universal PA from 7/1/2025 (per plan notices).',
    assessmentPA: {
      value: 'Required — the state BA policy requires PA on all BA services; ABHFL submission specifics are not publicly verifiable (plan site blocks access) — confirm channel in the portal',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    treatmentPA: {
      value: 'Required — per the state policy; ABHFL-specific process details unverified — confirm via Availity/plan portal',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Aetna Better Health of Florida',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21, with EPSDT available above the coverage-policy and fee-schedule limits. The coverage policy binds every MMA plan — “the provision of services to recipients enrolled in a Florida Medicaid managed care plan must not be subject to more stringent service coverage limits than specified in Florida Medicaid policies” — so ABHFL cannot narrow the age window even though its own BA one-pager and FAQ could not be retrieved (aetnabetterhealth.com returns HTTP 403 to automated clients).',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required, so no diagnosis-recency rule applies; the state cycle governs — reassessment and an updated behavior plan at least every six months, core instruments re-administered every 12 months, and no published expiry on the Comprehensive Diagnostic Evaluation. Whether ABHFL layers a document-freshness rule of its own (as Carelon does for Simply) is not publicly verifiable.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'The ABHFL Behavior Analysis one-pager and BA FAQ in the provider portal, or the plan’s recurring BA Provider Open Office Hours — both PDFs return HTTP 403 to automated retrieval.',
      },
      diagnosingProviders: {
        value:
          'The state rule, which ABHFL cannot narrow: the referral comes from an independent physician or qualifying practitioner (PCP in family practice, internal medicine or pediatrics; a developmental-behavioral, neurodevelopmental, pediatric-neurology or adult/child-psychiatry specialist; or a child psychologist), and the CDE must be led by a licensed practitioner working within their medical, developmental or psychological scope of practice.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'The state pair: the Vineland-3 Comprehensive Parent Interview Form for all recipients, plus the Maladaptive Behavior Domain for ages 3 and older, and the BASC-3 PRQ for ages 2 through 18, with complete scoring reports submitted with every prior-authorization request and re-administration every 12 months.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required — the state gate applies: an independent physician referral, a physician’s order for BA services, and a Comprehensive Diagnostic Evaluation performed to national evidence-based practice standards. Plan notices indicate ABHFL ran extended carve-in continuity into mid-2025, with universal prior authorization applying to all members receiving BA from July 1, 2025. What is not publicly verifiable is the submission channel and whether a BA-specific ABHFL form exists — the plan’s general guidance points to Availity.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'ABHFL — BA Provider Open Office Hours notice (02/24/2025)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/pdf/ABHFL_BA_Office_Hours_Provider_Notice_02.24.2025.pdf' }],
        verifyVia:
          'The ABHFL provider portal or a BA Provider Open Office Hours session for the live submission channel and any plan-specific BA form.',
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. No ABHFL-specific BA telehealth expansion could be verified — the plan’s BA one-pager, BA FAQ and provider resource guide all return HTTP 403 to automated retrieval.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'The ABHFL provider portal, the BA FAQ, or a BA Provider Open Office Hours session — the state provision is the dependable floor in the meantime.',
      },
      authTurnaround: {
        value:
          'Aetna Better Health of Florida is faster than the contract. Its manual: “For Medicaid members, routine prior authorization requests will be completed within four (4) calendar days of receipt of the request. A four (4) day extension can be provided if additional information is needed.” Urgent requests “will be processed within 48 hours of the Plan’s receipt of the request unless additional information is required.” No reauthorization lead time is published. The AHCA contract floor is 5 days standard and 2 days expedited.',
        status: 'verified',
        cites: [
          { title: 'Aetna Better Health of Florida — Provider Manual, MMA and Comprehensive LTC (published 8/7/2026)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/provider/pdf/abhfl_medicaid_comprehensive_ltc_provider_manual.pdf' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Aetna Better Health of Florida waives its own PA when another payer is primary: “If other insurance is the primary payer before Aetna Better Health of Florida, prior authorization of a service is not required, unless it is known that the service provided is not covered by the primary payer. If the service is not covered by the primary payer, the provider must follow our prior authorization rules.” Bill the other insurer first and send its EOB or remittance advice with the claim; claims without it “will be denied in most cases.” When the primary does not cover the service or the benefit is exhausted, get an updated letter from the primary carrier every January and July. Filing deadlines differ inside the manual: 90 days after the primary’s final determination (citing the SMMC contract) in one place, 180 days from the EOB in another. File within 90 to satisfy both. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule.',
        status: 'verified',
        cites: [
          { title: 'Aetna Better Health of Florida — Provider Manual, MMA and Comprehensive LTC (published 8/7/2026)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/provider/pdf/abhfl_medicaid_comprehensive_ltc_provider_manual.pdf' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The state floor: supervision of BCaBAs and RBTs per the Council of Autism Service Providers practice standards, as specified in the supervision plan inside the approved behavior plan, which must name the authorized supervisors. Rendering is credential-chained — Lead Analyst (BCBA, FL-CBA or Ch. 490/491 licensee), BCaBA under a BCBA, RBT under a BCBA or BCaBA. No ABHFL supervision ratio is publicly verifiable.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'ABHFL provider relations, or Behavioral Services Network (BSN) — the plan’s delegated BA contracting and credentialing partner — for anything the plan layers on top.',
      },
      concurrentBilling: {
        value:
          'The state rule is the floor: the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan. ABHFL publishes no retrievable BA reimbursement policy of its own.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'ABHFL provider services or a BA Provider Open Office Hours session — ask whether 97155 pays alongside 97153 when analyst, technician and member are all present.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling: up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, EPSDT available above it, group treatment capped at six participants, 15-minute units on the CMS 8-minute rule. No ABHFL per-day unit table could be retrieved.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'ABHFL provider portal / BA office hours, and the current AHCA BA fee schedule under Rule 59G-4.002.',
      },
      noteSignature: {
        value:
          'The state rule: “session notes must be signed and dated by the rendering practitioner,” with date, time, location, duration, behaviors observed, skills targeted, the recipient’s response, protocol modification or therapist direction, an explanation if the parent or guardian was absent, and the participants; the behavior assessment and behavior plan are signed by the Lead Analyst and the parent or guardian.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      placeOfService: {
        value:
          'The state rule: a school-based request must include the IEP, or a 504 plan, or documentation naming the school and explaining that neither exists; 1:1 shadow, personal care assistance, companion and chaperone services are non-covered “regardless of activity or setting,” as are caregiver/childcare services and travel time; BA is non-covered on the same day as behavioral health overlay, therapeutic behavioral on-site, or therapeutic group care services.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'The state enrollment structure governs the claim: a professional claim (837P / CMS-1500) under an individually enrolled rendering practitioner — Lead Analyst 392, BCaBA 391, RBT 390 — with 390s and 391s enrollable only as members of an enrolled BA group (393). Network entry is the ABHFL-specific step: BA contracting and credentialing are delegated to Behavioral Services Network, Inc. (BSN) rather than run through Aetna, so a group must complete BSN credentialing before any of those NPIs can bill.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'ABHFL — BA Provider Open Office Hours notice (02/24/2025)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/pdf/ABHFL_BA_Office_Hours_Provider_Notice_02.24.2025.pdf' }],
      },
    },
    pill: 'Payer Guide · Aetna Better Health (FL)',
    h1: 'Aetna Better Health of Florida ABA / BA coverage (MMA plan).',
    metaTitle: 'Aetna Better Health of Florida (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Aetna Better Health of Florida administers the Medicaid Behavior Analysis benefit — BSN-delegated network contracting, the July 2025 universal PA start after extended carve-in continuity, BA office hours, and which process details remain unverified.',
    intro: [
      'Aetna Better Health of Florida (ABHFL) administers the Behavior Analysis benefit on the AHCA criteria with no distinct clinical policy of its own — but with one structural quirk that matters before any member is ever served: BA network contracting and credentialing are delegated to a third party, Behavioral Services Network (BSN), rather than run through Aetna directly. A transparency note up front: aetnabetterhealth.com blocks automated access, so this guide\'s process specifics (PA channels, portal details) are thinner and flagged where unverified — the state-policy requirements, which bind every MMA plan, are the reliable floor.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan (CVS Health/Aetna), in-house UM' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy — no distinct ABHFL clinical policy found' },
      { label: 'Prior auth', value: 'Required for all BA per state policy; universal PA from 7/1/2025 per plan notices' },
      { label: 'BA contracting', value: 'Delegated to Behavioral Services Network (BSN) — info@bsnnet.com, 305-907-7470' },
      { label: 'Provider support', value: 'Recurring "BA Provider Open Office Hours" covering PA, claims, Availity' },
      { label: 'Rates', value: 'Contracted; state fee schedule baseline' },
    ],
    sections: [
      {
        h2: 'The BSN contracting layer',
        body: [
          'To join ABHFL\'s BA network, providers contract and credential through Behavioral Services Network, Inc. (BSN) — info@bsnnet.com, 305-907-7470 — a distinct entry point from Aetna\'s own credentialing machinery and from every other Florida plan. For a group planning multi-plan participation, BSN is a separate pipeline to start early. Once in network, ABHFL publishes a set of BA-specific artifacts (a BA one-pager, FAQ, claims update, and change-of-provider form) and holds recurring "BA Provider Open Office Hours" covering the PA process, claims timely filing, and Availity — the best venue for resolving the process details this guide can\'t verify from published sources.',
        ],
        cites: [
          { title: 'ABHFL — BA Provider Open Office Hours notice (02/24/2025)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/pdf/ABHFL_BA_Office_Hours_Provider_Notice_02.24.2025.pdf' },
          { title: 'ABHFL — provider materials & forms (BA one-pager, FAQ)', url: 'https://www.aetnabetterhealth.com/florida/providers/materials-forms.html' },
        ],
      },
      {
        h2: 'Authorization: the state floor, and what\'s unverified',
        body: [
          'The AHCA coverage policy binds ABHFL like every MMA plan: PA on all BA services, the referral + order + CDE gate (no autism diagnosis required), Vineland-3/BASC-3 documentation, and up-to-6-month authorizations that the plan cannot make more stringent. Plan notices indicate ABHFL ran extended carve-in continuity into mid-2025, with universal PA applying to all members receiving BA from July 1, 2025 — i.e., ABHFL held the transition window open longer than the AHCA 90-day baseline. What we could not verify against a primary source, because the plan\'s site blocks automated access: the exact submission channel (general ABHFL guidance points to Availity) and any BA-specific form. Confirm the current channel in the portal or at the plan\'s BA office hours before the first submission, and treat this guide\'s state-policy facts as the dependable part.',
        ],
        cites: [
          { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
          { title: 'ABHFL — BA Provider Open Office Hours notice (02/24/2025)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/pdf/ABHFL_BA_Office_Hours_Provider_Notice_02.24.2025.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'BSN credentialing status', desc: 'BA network entry runs through BSN, not Aetna — confirm contracting is complete before quoting start dates.' },
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies; no autism diagnosis required.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'The state documentation stack applies to ABHFL requests.' },
      { title: 'Current PA channel', desc: 'Verify the live submission path (Availity/portal/fax) with the plan — published specifics are unverified.' },
    ],
    sources: [
      { title: 'ABHFL — BA Provider Open Office Hours notice (02/24/2025)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/florida/pdf/ABHFL_BA_Office_Hours_Provider_Notice_02.24.2025.pdf' },
      { title: 'ABHFL — provider materials & forms', url: 'https://www.aetnabetterhealth.com/florida/providers/materials-forms.html' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does Aetna Better Health of Florida cover ABA?', a: 'Yes — it administers the state Behavior Analysis benefit on AHCA criteria: no autism diagnosis required, the physician referral + order + CDE gate, and PA on all BA services (universal PA from July 1, 2025 per plan notices).' },
      { q: 'How do I join Aetna Better Health of Florida\'s ABA network?', a: 'Through Behavioral Services Network (BSN), the plan\'s delegated BA contracting and credentialing partner — info@bsnnet.com or 305-907-7470 — not through Aetna directly.' },
      { q: 'Where do ABHFL BA authorizations get submitted?', a: 'The plan\'s general PA guidance points to Availity, but ABHFL\'s BA-specific submission details aren\'t publicly verifiable — confirm the current channel in the portal or at the plan\'s BA Provider Open Office Hours.' },
    ],
  },

  'molina-healthcare-florida': {
    slug: 'molina-healthcare-florida',
    family: 'molina',
    cardDesc: 'Administers BA in-house on state criteria; a BA QRG exists, but specifics aren\'t publicly verifiable.',
    assessmentPA: {
      value: 'Required — the state BA policy requires PA on all BA services (CDE + documentation with requests); Molina-specific submission details are not publicly verifiable — use the plan\'s PA Code Lookup Tool and portal',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    treatmentPA: {
      value: 'Required — per the state policy; check Molina\'s Prior Authorization Code Lookup Tool for current specifics',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Molina Healthcare of Florida',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21, with EPSDT available above the coverage-policy and fee-schedule limits. The coverage policy binds every MMA plan and forbids more stringent service coverage limits than state policy, so Molina cannot narrow the window — which matters here because molinahealthcare.com returns HTTP 403 to automated retrieval and the plan’s BA Quick Reference Guide could not be read.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required, so no diagnosis-recency rule applies; the state cycle governs — reassessment and an updated behavior plan at least every six months, core instruments re-administered every 12 months, and no published expiry on the Comprehensive Diagnostic Evaluation. Whether Molina layers a document-freshness rule of its own is not publicly verifiable.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Molina’s BA Quick Reference Guide (October 2025 / 2026 editions) and Prior Authorization Code Lookup Tool inside the Molina provider portal — the published URL returns HTTP 403.',
      },
      diagnosingProviders: {
        value:
          'The state rule, which Molina cannot narrow: the referral comes from an independent physician or qualifying practitioner (PCP in family practice, internal medicine or pediatrics; a developmental-behavioral, neurodevelopmental, pediatric-neurology or adult/child-psychiatry specialist; or a child psychologist), and the CDE must be led by a licensed practitioner working within their medical, developmental or psychological scope of practice.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'The state pair: Vineland-3 Comprehensive Parent Interview Form for all recipients (plus the Maladaptive Behavior Domain for ages 3 and older) and the BASC-3 PRQ for ages 2 through 18, with complete scoring reports attached to every prior-authorization request and re-administration every 12 months.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required — the state gate applies: an independent physician referral, a physician’s order for BA services, and a Comprehensive Diagnostic Evaluation performed to national evidence-based practice standards, with prior authorization on all BA services. The submission channel and any Molina-specific form are not publicly verifiable; Molina’s Prior Authorization Code Lookup Tool and provider portal are the authoritative sources. Turnaround is published in Molina’s 3/18/2026 Florida Medicaid manual: a standard determination “no later than contractual requirements or seven (7) calendar days after we receive the initial request for service,” and an expedited one “no later than contractual requirements or two (2) calendar days” (the AHCA contract sets 5 days standard, 2 expedited).',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Molina FL — BA Quick Reference Guide 2026 (access-restricted)', url: 'https://www.molinahealthcare.com/providers/fl/medicaid/comm/-/media/D0605825716B47F8819AD3B554626A86.ashx' }, { title: 'Molina Healthcare of Florida — Medicaid Provider Manual (3/18/2026)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/fl/medicaid/3-18-26-MHFL-Medicaid-Provider-Handbook-508.ashx' }],
        verifyVia:
          'Molina’s BA Quick Reference Guide and PA Code Lookup Tool in the provider portal — build the first Molina submission around a portal session.',
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. No Molina-specific BA telehealth expansion could be verified — the plan’s BA Quick Reference Guide returns HTTP 403 to automated retrieval.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Molina’s BA Quick Reference Guide in the provider portal; the state provision is the dependable floor in the meantime.',
      },
      authTurnaround: {
        value:
          'Molina’s March 2026 Florida manual: “For a standard authorization request, Molina makes the determination and provides notification no later than contractual requirements or seven (7) calendar days after we receive the initial request for service.” Expedited requests are decided “no later than contractual requirements or two (2) calendar days.” The contractual requirement is the AHCA clock of 5 days standard and 2 days expedited. Molina does not retroactively authorize services that need PA. No BA reauthorization lead time is published.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Florida — Medicaid Provider Manual (3/18/2026)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/fl/medicaid/3-18-26-MHFL-Medicaid-Provider-Handbook-508.ashx' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Molina’s manual: “Medicaid is always the payer of last resort … If third party liability can be established, Providers must bill the primary payer and submit a primary explanation of benefits (EOB) to Molina for secondary Claim processing.” Primary carrier payment information must be on the claim. Pay-and-chase exception: “Molina will pay claims for prenatal care and preventive pediatric care (EPSDT) and then seek reimbursement from third parties.” The manual does not say whether ABA claims count as EPSDT preventive care for this purpose. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Florida — Medicaid Provider Manual (3/18/2026)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/fl/medicaid/3-18-26-MHFL-Medicaid-Provider-Handbook-508.ashx' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
        verifyVia: 'Molina Provider Services: whether an ABA claim for a child with commercial coverage can be paid first under the EPSDT exception, and whether Molina’s BA authorization is required when the commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The state floor: supervision of BCaBAs and RBTs per the Council of Autism Service Providers practice standards, as specified in the supervision plan inside the approved behavior plan, which must name the authorized supervisors; Lead Analyst is a BCBA, FL-CBA or Ch. 490/491 licensee, a BCaBA works under a BCBA, and an RBT under a BCBA or BCaBA. No Molina supervision ratio is publicly verifiable.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Molina provider services / the BA Quick Reference Guide for anything the plan layers on top of the state standard.',
      },
      concurrentBilling: {
        value:
          'The state rule is the floor: the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan. No retrievable Molina BA reimbursement policy addresses the same-clock-time question.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Molina provider services — ask whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling: up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, EPSDT available above it, group treatment capped at six participants, and 15-minute units on the CMS 8-minute rule. No Molina per-day unit table could be retrieved.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Molina’s Prior Authorization Code Lookup Tool and BA Quick Reference Guide in the portal, plus the current AHCA BA fee schedule.',
      },
      noteSignature: {
        value:
          'The state rule: “session notes must be signed and dated by the rendering practitioner,” carrying date, time, location, duration, behaviors observed, skills targeted, the recipient’s response, protocol modification or therapist direction, an explanation if the parent or guardian was absent, and the participants; the behavior assessment and behavior plan are signed by the Lead Analyst and the parent or guardian.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      placeOfService: {
        value:
          'The state rule: a school-based request must include the IEP, or a 504 plan, or documentation naming the school and explaining that neither exists; 1:1 shadow, personal care assistance, companion and chaperone services are non-covered “regardless of activity or setting,” as are caregiver/childcare services and travel time; BA is non-covered on the same day as behavioral health overlay, therapeutic behavioral on-site, or therapeutic group care services.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'The state enrollment structure governs: a professional claim (837P / CMS-1500) under an individually enrolled rendering practitioner — Lead Analyst 392, BCaBA 391, RBT 390 — with 390s and 391s enrollable only as members of an enrolled BA group (393). Molina publishes no retrievable BA-specific billing-provider rule.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Molina’s BA Quick Reference Guide for any plan-specific claim-form or modifier instruction.',
      },
    },
    pill: 'Payer Guide · Molina Healthcare (FL)',
    h1: 'Molina Healthcare of Florida ABA / BA coverage (MMA plan).',
    metaTitle: 'Molina Healthcare of Florida (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of Florida administers the Medicaid Behavior Analysis benefit since the February 2025 carve-in — in-house UM on state criteria, the BA Quick Reference Guide, and which process specifics remain publicly unverifiable.',
    intro: [
      'Molina Healthcare of Florida administers the Behavior Analysis benefit in-house — it published a carve-in notice ("Molina Healthcare Will Provide Behavior Analysis (BA) Services") and maintains a BA Quick Reference Guide with October 2025 and 2026 editions. Honesty about the limits of this guide: Molina\'s site blocks automated access, so it is the weakest-verified of Florida\'s nine plans here. No evidence of distinct clinical criteria surfaced, which means the reliable playbook is the state one — the AHCA policy binds Molina like every MMA plan, and plan-specific submission mechanics should be confirmed in the portal.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan (Molina), in-house UM' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy — no distinct Molina clinical criteria found' },
      { label: 'Prior auth', value: 'Required for all BA per state policy; check Molina\'s PA Code Lookup Tool' },
      { label: 'Plan resources', value: 'BA Quick Reference Guide (10/2025 and 2026 editions) — access-restricted' },
      { label: 'Verification note', value: 'Molina blocks automated access — confirm specifics in the provider portal' },
      { label: 'Rates', value: 'Contracted; state fee schedule baseline' },
    ],
    sections: [
      {
        h2: 'What\'s verified, and what to confirm in the portal',
        body: [
          'Verified: Molina administers BA in-house since the February 1, 2025 carve-in, maintains a BA Quick Reference Guide (updated October 2025, with a 2026 edition), and — like every MMA plan — must comply with the AHCA coverage policy without imposing more stringent limits. That gives you the dependable core: PA on all BA services with the CDE and required documentation, the referral + order gate with no autism-diagnosis requirement, Vineland-3/BASC-3 scoring reports, and up-to-6-month authorization periods. Not publicly verifiable (the plan\'s site blocks automated retrieval): the exact submission channel and forms. Molina\'s Prior Authorization Code Lookup Tool and provider portal are the authoritative sources for those — build the first Molina submission around a portal session, not this page. Turnaround is published in Molina\u2019s 3/18/2026 Florida Medicaid manual: a standard determination “no later than contractual requirements or seven (7) calendar days after we receive the initial request for service,” and an expedited one “no later than contractual requirements or two (2) calendar days” (the AHCA contract sets 5 days standard, 2 expedited).',
        ],
        cites: [
          { title: 'Molina FL — BA Quick Reference Guide 2026 (access-restricted)', url: 'https://www.molinahealthcare.com/providers/fl/medicaid/comm/-/media/D0605825716B47F8819AD3B554626A86.ashx' },
          { title: 'Molina Healthcare of Florida — Medicaid Provider Manual (3/18/2026)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/fl/medicaid/3-18-26-MHFL-Medicaid-Provider-Handbook-508.ashx' },
          { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies; no autism diagnosis required.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'The state documentation stack applies to Molina requests.' },
      { title: 'Current QRG + PA lookup', desc: 'Pull the latest BA Quick Reference Guide and run the codes through Molina\'s PA lookup tool in the portal.' },
      { title: 'Submission channel', desc: 'Confirm portal vs. fax and any Molina-specific form directly with the plan — not publicly verifiable.' },
    ],
    sources: [
      { title: 'Molina FL — BA Quick Reference Guide 2026 (access-restricted)', url: 'https://www.molinahealthcare.com/providers/fl/medicaid/comm/-/media/D0605825716B47F8819AD3B554626A86.ashx' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does Molina Healthcare of Florida cover ABA?', a: 'Yes — it administers the state Behavior Analysis benefit in-house since the February 2025 carve-in, on AHCA criteria: no autism diagnosis required, referral + order + CDE, PA on all BA services.' },
      { q: 'Where are Molina\'s Florida BA rules published?', a: 'In its BA Quick Reference Guide (October 2025 / 2026 editions) and PA Code Lookup Tool — both access-restricted, so confirm current specifics in the Molina provider portal. Clinically, the AHCA coverage policy governs.' },
    ],
  },

  'community-care-plan-florida': {
    slug: 'community-care-plan-florida',
    cardDesc: 'BA fully delegated to Therapy Network of FL — auths AND claims; fastest published turnarounds.',
    assessmentPA: {
      value: 'Required — all codes on the FL BA fee schedule need PA from Therapy Network of Florida (portal at asp.healthsystemone.com/hs1providers; fax backup)',
      status: 'verified',
      cites: [{ title: 'Community Care Plan \u2014 Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }],
    },
    treatmentPA: {
      value: 'Required — via TNFL; standard approvals within 5 calendar days, expedited within 2',
      status: 'verified',
      cites: [{ title: 'Community Care Plan \u2014 Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Community Care Plan \u2014 Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Community Care Plan (FL)',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Under 21, and CCP states it from both directions: its BA provider manual authorizes services for “Medicaid Ages 0-21,” and its service exclusions open with “any Medicaid member 21 years old and over.” That tracks the state benefit exactly — Florida Medicaid BA is for recipients under the age of 21, with EPSDT available above the coverage-policy and fee-schedule limits.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required. CCP publishes the cycle precisely: “the behavior reassessment is required every 6 months”; “the core standardized behavior instruments are only required on an annual basis unless a new behavior emerges or additional hours are requested”; and the reassessment must “be submitted at least 10 days but not more than 30 days prior to the last day of the previously certified service” — so a renewal filed too early is as much a problem as one filed too late. Modifications are never authorized retrospectively.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'CCP requires a “prescription or referral form” issued “by an independent physician or practitioner qualified to assess and diagnose disorders related to functional impairments,” including the diagnosis and an order for BA services, plus the Comprehensive Diagnostic Evaluation. It then adds a signature-block rule that intake should treat as a document check: “all practitioner’s signature must include their NPI, credentials and date of signature as defined in Chapter 668, Part I, F.S. Please ensure that the referring provider’s (physician/ARNP/P.A.) LMN, prescription or referral form includes their NPI, credentials and date of signature” — note that CCP names ARNPs and PAs, which the state referral list does not.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          '“2 core standardized behavior instruments required (required once a year)”: the Vineland-3 Comprehensive Parent Interview Form for all recipients plus the Maladaptive Behavior Domain for ages 3 and older, and the BASC-3 PRQ for recipients ages 2 through 18 — with “additional assessment tools… at the lead analyst’s discretion,” and administration, scoring and reporting all documented in the behavior assessment. The behavior plan must also identify the functions of behavior “based on a Functional Analysis (FA), brief FA, precursor FA or conditional probability.”',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      referral: {
        value:
          'Required, and it is the first item on CCP’s own checklist for authorizing the behavior assessment: the prescription or referral form from an independent physician or qualified practitioner, carrying the diagnosis and an order for BA services, plus the CDE. Everything on the Florida BA fee schedule needs prior authorization from Therapy Network of Florida — “behavior assessments, behavior reassessments, behavior intervention/treatment, modification request and all codes on the Florida BA Fee Schedule require prior authorization by Therapy Network” — via the portal at asp.healthsystemone.com/hs1providers, with fax as an emergency backup. Standard approvals land within 5 calendar days, expedited within 2.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. CCP’s BA provider manual publishes no telehealth section, and “any services not included on the Florida Behavior Analysis Fee Schedule” are non-covered — so a telehealth line that is not on that schedule will not pay.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }],
        verifyVia:
          'Therapy Network of Florida provider relations (1-888-550-8800, option 2) before scheduling any remote session other than 97156 caregiver training.',
      },
      authTurnaround: {
        value:
          'Therapy Network of Florida decides CCP’s BA requests. For approvals: “Standard/Routine requests are completed within 5 calendar days. Expedited/Urgent requests are completed within 2 calendar days.” Expedited means waiting “could place the member’s life, health, or ability to regain maximum function in serious jeopardy.” Reassessment (reauthorization) requests must “be submitted at least 10 days but not more than 30 days prior to the last day of the previously certified service”; for an authorization ending 4/30, submit no earlier than 4/1. CCP’s own MMA manual says standard requests “will not exceed 5 calendar days” and expedited “will not exceed 2 business days.” The AHCA contract sets 2 days for expedited.',
        status: 'verified',
        cites: [
          { title: 'Community Care Plan — Behavior Analysis Provider Manual (Therapy Network of Florida, Jan 2025)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' },
          { title: 'Community Care Plan — MMA Provider Manual (3/11/2026)', url: 'https://ccpcares.org/wp-content/uploads/CCP-MMA-Provider-Manual_03.11.26.pdf' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'CCP’s MMA manual: “Claims with primary and secondary coverage cannot be processed simultaneously. Medicaid is the payer of last resort. Submit claims to the primary payer first.” BA claims go to Therapy Network of Florida, not CCP, and TNFL allows “ninety (90) days from the date of final determination of the primary payer” for a claims complaint. Neither manual says whether a TNFL BA authorization is still needed when a commercial plan is primary. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Community Care Plan — MMA Provider Manual (3/11/2026)', url: 'https://ccpcares.org/wp-content/uploads/CCP-MMA-Provider-Manual_03.11.26.pdf' },
          { title: 'Community Care Plan — Behavior Analysis Provider Manual (Therapy Network of Florida, Jan 2025)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
        ],
        verifyVia: 'Therapy Network of Florida: whether a TNFL BA authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'CCP makes supervision visible on the schedule rather than as a ratio. The behavior plan must carry a “supervision plan, including name(s) of authorized supervisor(s), and list this in the schedule,” and the requested weekly schedule must show “days of the week, hours of the day, service codes for those hours, to include supervision” — CCP’s own worked example pairs 97153 blocks with 97155 and 97156 blocks by day. The state standard sits underneath: supervision of BCaBAs and RBTs per the Council of Autism Service Providers practice standards, as specified in the approved behavior plan.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      concurrentBilling: {
        value:
          'CCP restates the state exclusion verbatim in its own exclusion list: “services by more than one BA provider unless determined to be medically necessary, prior authorized and indicated in the approved behavior plan.” The reimbursement half of the state rule applies too — the supervisee is not reimbursed when the supervisor is reimbursed for the same time period. So concurrency is something the approved plan and the TNFL authorization have to carry explicitly; the requested schedule is where it gets declared.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      dailyLimits: {
        value:
          'By the week, with a documentation trigger. The state ceiling of up to 40 hours per week as prior-authorized in the behavior plan applies, and CCP’s documentation tips flag “any requests for more than 40 hours” as needing support. “Services not on the Florida BA fee schedule are non-covered,” and members 21 and over are excluded outright. No per-code per-day unit ceiling is published.',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'Therapy Network of Florida for any per-day claim edit, and the current AHCA BA fee schedule for per-assessment unit caps.',
      },
      noteSignature: {
        value:
          'CCP publishes three signature rules, and this is the tightest-documented set among Florida’s nine plans. Session notes: “the notes must be signed and dated by the rendering practitioner,” carrying date, time, location and duration, maladaptive behaviors observed, replacement/compensatory skills targeted, the recipient’s response, protocol modification or therapist direction, an explanation if the parent or guardian was not present, and the participants. Plan: “the behavior assessment and behavior plan must be signed by the Lead Analyst and the recipient’s parent or caregiver.” And every signature on the treatment-plan document “must include their NPI, credentials and date of signature as defined in Chapter 668, Part I, F.S.”',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      placeOfService: {
        value:
          'School is gated, and CCP asks for the detail up front: the full behavior assessment must include “detailed information about the school name, time frame, classroom type, IEP recommendation, 504 plan and services,” and an authorization request for services delivered in a school must include the IEP — failing which, documentation justifying the services plus an estimated IEP timeframe, a 504 plan if the school does not conduct IEPs, or the school’s name with an explanation if it conducts neither. The behavior plan must also name the treatment setting. CCP’s exclusion list goes one item beyond the state’s: personal care assistance, companion, chaperone or shadow; caregiver or childcare; travel time; and “services in PPEC.”',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Everything goes to Therapy Network of Florida, not to Community Care Plan — “do not send any claims to the health plans,” and a payment made in error by the plan is an overpayment to be returned. TNFL’s payer ID is 65062 for professional claims and 12k89 for institutional; paper claims go on an original CMS-1500 (or UB-04 for institutionally billed claims) to the TNFL claims processing centre in Ft. Lauderdale. A claim submitted before the authorization is approved “will deny for no authorization.” Adjustment requests run 365 days from the EOP/EOB date. Underneath, the state enrollment structure still decides whose NPI may render: Lead Analyst 392, BCaBA 391, RBT 390, inside an enrolled BA group (393).',
        status: 'verified',
        cites: [{ title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
    },
    pill: 'Payer Guide · Community Care Plan',
    h1: 'Community Care Plan ABA / BA coverage (Florida MMA plan).',
    metaTitle: 'Community Care Plan (Florida Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Community Care Plan — the provider-owned South Florida MMA plan — administers Behavior Analysis: full delegation of authorizations and claims to Therapy Network of Florida, 5-day standard / 2-day expedited turnarounds, and the state criteria underneath.',
    intro: [
      'Community Care Plan (CCP) — the provider-owned plan of Broward Health and Memorial Healthcare System, with a South Florida footprint — delegates its entire Behavior Analysis function to Therapy Network of Florida (TNFL): prior authorizations AND claims. Day to day, a practice serving CCP members works with TNFL, not CCP. The plan\'s BA provider manual copies the AHCA coverage criteria nearly verbatim, and its published turnarounds are the fastest of the nine plans: 5 calendar days standard, 2 expedited.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC MMA plan — provider-owned (Broward Health + Memorial), South FL' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy, near-verbatim in the CCP BA manual' },
      { label: 'Prior auth', value: 'Required for every code on the FL BA fee schedule — via Therapy Network of FL' },
      { label: 'Turnarounds', value: '5 calendar days standard / 2 expedited — fastest published of the nine' },
      { label: 'Claims', value: 'Also to TNFL — portal at therapynetwork.com; paper to Therapy Network of Florida' },
      { label: 'Age scope', value: 'Members 21 and over excluded (per the state benefit)' },
    ],
    sections: [
      {
        h2: 'The TNFL delegation: one counterparty for everything',
        body: [
          'CCP\'s BA manual is direct: behavior assessments, reassessments, and all codes on the Florida BA Fee Schedule require prior authorization by Therapy Network. Requests go through the Provider Web Portal at asp.healthsystemone.com/hs1providers (fax available as backup), and approvals and claims status run 24/7 on therapynetwork.com — claims themselves also go to TNFL, with paper claims addressed to Therapy Network of Florida. Standard/routine approvals come within 5 calendar days and expedited/urgent within 2; when a TNFL clinician recommends denial, the recommendation completes within 4 calendar days with referral to the plan\'s Medical Director if the reviewing clinician and provider disagree. Services not on the Florida BA fee schedule are non-covered, and members 21 and over are excluded — consistent with the state benefit\'s under-21 scope.',
        ],
        cites: [
          { title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29, hosted by TNFL)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' },
        ],
      },
      {
        h2: 'The state criteria, unchanged underneath',
        body: [
          'CCP\'s coverage criteria and exclusions track the AHCA policy nearly verbatim: the referral + order + CDE gate with no autism-diagnosis requirement, Vineland-3/BASC-3 documentation, up-to-6-month authorizations, and the 40-hour weekly ceiling as prior-authorized. The operative difference is purely who you talk to — for intake, that means TNFL portal credentials are the day-one setup task, and the 2-day expedited pathway is worth knowing when a family\'s clinical urgency justifies it.',
        ],
        cites: [
          { title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' },
          { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'TNFL portal access', desc: 'Auths at asp.healthsystemone.com/hs1providers, status and claims at therapynetwork.com — set both up first.' },
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies; no autism diagnosis required.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'The state documentation stack rides with every TNFL request.' },
      { title: 'Urgency assessment', desc: 'The 2-calendar-day expedited pathway exists — flag clinically urgent cases at intake.' },
    ],
    sources: [
      { title: 'Community Care Plan — Behavior Analysis Provider Manual (2025-01-29)', url: 'https://www.therapynetwork.com/state_links/ba/manuals/Community-Care-Plan-Behavior-Analysis-Provider-Manual.pdf' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does Community Care Plan cover ABA?', a: 'Yes — the state Behavior Analysis benefit on AHCA criteria (no autism diagnosis required), with the entire BA function — authorizations and claims — delegated to Therapy Network of Florida.' },
      { q: 'How fast does CCP approve BA authorizations?', a: 'The fastest published turnarounds of Florida\'s nine plans: 5 calendar days standard, 2 calendar days expedited, via Therapy Network of Florida.' },
      { q: 'Where do CCP ABA claims go?', a: 'To Therapy Network of Florida, not CCP — electronically via the TNFL portal, or on paper addressed to Therapy Network of Florida.' },
    ],
  },

  'florida-community-care': {
    slug: 'florida-community-care',
    cardDesc: 'CIDD-focused specialty plan; in-house UM, PA by fax, email, or portal; 120-day continuity honored.',
    assessmentPA: {
      value: 'Required — FCC ABA PA Request Form by fax 305-675-6138, email FCCUMDepartment@FCCHealthPlan.com, or the FCC Provider Portal',
      status: 'verified',
      cites: [{ title: 'Florida Community Care \u2014 Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
    },
    treatmentPA: {
      value: 'Required — same channels, via FCC\'s in-house Utilization Department',
      status: 'verified',
      cites: [{ title: 'Florida Community Care \u2014 Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
    },
    dxRequired: {
      value: 'No — state BA policy applies: physician referral + order + CDE, no autism-diagnosis requirement',
      status: 'verified',
      cites: [{ title: 'Florida Community Care \u2014 Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
    },
    payer: 'Florida Community Care',
    state: 'FL', kind: 'medicaid-mco', parent: 'Florida Medicaid (AHCA)',
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Florida Medicaid rule: BA is for recipients under the age of 21, with EPSDT available above the coverage-policy and fee-schedule limits. FCC’s published BA services page is procedural — which form, which fax, which mailbox — and states no age criterion of its own; the coverage policy forbids a plan from applying more stringent service coverage limits than state policy.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
      },
      dxRecency: {
        value:
          'No autism diagnosis is required, so no diagnosis-recency rule applies. The state cycle governs: reassessment and an updated behavior plan at least every six months, the two core instruments re-administered every 12 months, and no published expiry on the Comprehensive Diagnostic Evaluation. FCC’s BA page publishes no plan-specific freshness rule.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
        verifyVia:
          'The Florida Community Care ABA Prior Authorization Request Form itself (via the FCC Provider Portal, or FCCUMDepartment@FCCHealthPlan.com) for any date requirement the form imposes.',
      },
      diagnosingProviders: {
        value:
          'The state rule, which FCC cannot narrow: the referral comes from an independent physician or qualifying practitioner (PCP in family practice, internal medicine or pediatrics; a developmental-behavioral, neurodevelopmental, pediatric-neurology or adult/child-psychiatry specialist; or a child psychologist), and the CDE must be led by a licensed practitioner working within their medical, developmental or psychological scope of practice. Given FCC’s long-term-care and CIDD membership, much of that record usually already exists — mine it rather than re-commissioning it.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
      },
      diagnosticTools: {
        value:
          'The state pair: the Vineland-3 Comprehensive Parent Interview Form for all recipients (plus the Maladaptive Behavior Domain for ages 3 and older) and the BASC-3 PRQ for ages 2 through 18, with complete scoring reports submitted with every prior-authorization request and re-administration every 12 months. FCC publishes no additional instrument requirement.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
      },
      referral: {
        value:
          'Required — the state gate (independent physician referral, physician’s order for BA services, and a CDE performed to national evidence-based practice standards) applies unchanged. FCC’s contribution is the channel: prior authorization is required after the continuity-of-care period, and providers “must submit the Florida Community Care ABA Prior Authorization Request Form” for new courses of treatment, by fax to 305-675-6138, by email to FCCUMDepartment@FCCHealthPlan.com, or through the FCC Provider Portal — email submission being unusual among Florida’s nine plans.',
        status: 'verified',
        cites: [{ title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Florida Medicaid rule: the only telemedicine provision is up to two hours per week of Lead Analyst caregiver training (97156) under Rule 59G-1.057, F.A.C. FCC’s BA services page publishes no telehealth rule, code list or place-of-service guidance.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
        verifyVia:
          'The FCC Utilization Department (FCCUMDepartment@FCCHealthPlan.com) or the provider call centre 1-833-322-7526 before scheduling a remote session other than 97156 caregiver training.',
      },
      authTurnaround: {
        value:
          'FCC’s provider handbook: “Staff process pre-service routine requests within 7 calendar days from the date of receipt,” with notice to provider and enrollee in the same 7 days. Urgent pre-service requests are processed “within 48 hours from the date and time of receipt”; providers can mark a request STAT. No BA reauthorization lead time is published. Note the gap with the AHCA contract, which sets 5 days standard and 2 days expedited for MMA plans. Plan around the 7 days FCC publishes.',
        status: 'verified',
        cites: [
          { title: 'Florida Community Care — Provider Handbook (rev. 3)', url: 'https://fcchealthplan.com/wp-content/uploads/2025/01/2M2609-FCC-Prov-Manual-r3.pdf' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'FCC’s provider handbook publishes no coordination-of-benefits procedure of its own, so the state rule governs. Florida Medicaid pays last. Rule 59G-1.052 says: “Florida Medicaid is the payer of last resort. Providers must exhaust all TPL sources of payment, such as Medicare, TRICARE, private health insurance … prior to submitting or resubmitting a claim.” The AHCA contract binds every MMA plan to that rule. Two consequences for intake: Medicaid pays only “the difference between the Florida Medicaid rate and the third-party payment,” and it pays nothing when “the provider’s TPL claim is denied for failing to obtain the appropriate authorization from the third-party.” So get the commercial plan’s own ABA authorization first.',
        status: 'verified',
        cites: [
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
          { title: 'AHCA SMMC Model Health Plan Contract — Attachment II Core Provisions (update 10/1/2025), §V.6 and §XI.D', url: 'https://ahca.myflorida.com/content/download/27248/file/Attachment%20II-%20-%20Core%20Contract%20Provisions%20Oct%202025.pdf' },
          { title: 'Florida Community Care — Provider Handbook (rev. 3)', url: 'https://fcchealthplan.com/wp-content/uploads/2025/01/2M2609-FCC-Prov-Manual-r3.pdf' },
        ],
        verifyVia: 'FCC Utilization Management: whether FCC requires its own BA authorization when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The state floor: supervision of BCaBAs and RBTs per the Council of Autism Service Providers practice standards, as specified in the supervision plan inside the approved behavior plan, which must name the authorized supervisors; Lead Analyst is a BCBA, FL-CBA or Ch. 490/491 licensee, a BCaBA works under a BCBA, and an RBT under a BCBA or BCaBA. FCC publishes no ratio or caseload cap of its own.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }, { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }],
      },
      concurrentBilling: {
        value:
          'The state rule is the floor and FCC publishes no variation: the supervisee is not reimbursed when the supervisor is reimbursed for the same time period, and simultaneous services by more than one BA provider are non-covered unless medically necessary, prior authorized and indicated in the approved behavior plan.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'The FCC Utilization Department for whether an authorization can carry 97153 and 97155 on the same clock time.',
      },
      dailyLimits: {
        value:
          'The state weekly ceiling: up to 40 hours per week of BA intervention as prior-authorized in the behavior plan, EPSDT available above it, group treatment capped at six participants, and 15-minute units on the CMS 8-minute rule. FCC publishes no per-day unit table.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
        verifyVia:
          'The FCC ABA Prior Authorization Request Form and the FCC Utilization Department, plus the current AHCA BA fee schedule for per-assessment unit caps.',
      },
      noteSignature: {
        value:
          'The state rule: “session notes must be signed and dated by the rendering practitioner,” carrying date, time, location, duration, behaviors observed, skills targeted, the recipient’s response, protocol modification or therapist direction, an explanation if the parent or guardian was absent, and the participants; the behavior assessment and behavior plan are signed by the Lead Analyst and the parent or guardian. FCC adds no published signature rule.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      placeOfService: {
        value:
          'The state rule: a school-based request must include the IEP, or a 504 plan, or documentation naming the school and explaining that neither is available; 1:1 shadow, personal care assistance, companion and chaperone services are non-covered “regardless of activity or setting,” as are caregiver/childcare services and travel time; BA is non-covered on the same day as behavioral health overlay, therapeutic behavioral on-site, or therapeutic group care. The same-day exclusions deserve a second look on a long-term-care and CIDD population that often carries other Medicaid benefits.',
        status: 'verified',
        cites: [{ title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Claims run under payer ID FLCCR through Availity or your clearinghouse, with the provider portal at secure.healthx.com and a provider call centre at 1-833-322-7526. The state enrollment structure decides whose NPI may render: a professional claim (837P / CMS-1500) under an individually enrolled practitioner — Lead Analyst 392, BCaBA 391, RBT 390 — with 390s and 391s enrollable only as members of an enrolled BA group (393).',
        status: 'verified',
        cites: [{ title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' }, { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' }],
      },
    },
    pill: 'Payer Guide · Florida Community Care',
    h1: 'Florida Community Care ABA / BA coverage (specialty plan).',
    metaTitle: 'Florida Community Care (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Florida Community Care — the Independent Living Systems specialty plan serving the CIDD population — administers Behavior Analysis: the FCC ABA PA form by fax, email, or portal, in-house UM, and 120-day carve-in continuity.',
    intro: [
      'Florida Community Care (FCC), operated by Independent Living Systems, is the smallest and most specialized of the nine plans — focused on long-term care and the CIDD (intellectual/developmental disability) population, which makes its membership unusually ABA-relevant per capita. The BA workflow is lightweight and in-house: a dedicated FCC ABA Prior Authorization Request Form submitted by fax, email (unusual among the nine), or the provider portal to FCC\'s own Utilization Department, on the state clinical criteria.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'SMMC specialty plan (Independent Living Systems) — LTC/CIDD focus' },
      { label: 'Clinical rules', value: 'AHCA BA Coverage Policy; no external UM vendor' },
      { label: 'Prior auth', value: 'FCC ABA PA form — fax 305-675-6138, email FCCUMDepartment@FCCHealthPlan.com, or portal' },
      { label: 'Continuity at carve-in', value: 'Ongoing BA auths honored for the full CoC period, minimum 120 days' },
      { label: 'Claims', value: 'Payer ID FLCCR via Availity/clearinghouse; portal at secure.healthx.com' },
      { label: 'Support', value: 'Provider call center 1-833-322-7526' },
    ],
    sections: [
      {
        h2: 'How FCC runs BA authorization',
        body: [
          'Submit the Florida Community Care ABA Prior Authorization Request Form to the in-house Utilization Department by fax (305-675-6138), email (FCCUMDepartment@FCCHealthPlan.com — email PA submission is unusual among Florida\'s plans and handy for small teams), or through the FCC Provider Portal at secure.healthx.com. The clinical criteria are the state\'s: referral + order + CDE at entry, no autism-diagnosis requirement, Vineland-3/BASC-3 documentation, authorizations up to 6 months. At the February 2025 carve-in, FCC honored ongoing BA authorizations for the entirety of the continuity-of-care period — a minimum of 120 days after enrollment. Claims run under payer ID FLCCR via Availity or your clearinghouse, and the provider call center is 1-833-322-7526. Given the CIDD focus, expect members with rich existing clinical records — leverage them for the CDE and the most specific supporting diagnoses.',
        ],
        cites: [
          { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' },
        ],
      },
    ],
    collect: [
      { title: 'Referral + order + CDE', desc: 'The state eligibility gate applies; no autism diagnosis required — existing CIDD records often cover much of it.' },
      { title: 'Vineland-3 & BASC-3 scoring reports', desc: 'The state documentation stack applies to FCC requests.' },
      { title: 'Preferred submission channel', desc: 'Fax, email, or portal all work — standardize one internally for tracking.' },
      { title: 'Claims setup', desc: 'Payer ID FLCCR via Availity/clearinghouse before the first date of service.' },
    ],
    sources: [
      { title: 'Florida Community Care — Behavioral Analysis Services (provider page)', url: 'https://fcchealthplan.com/ba-services/' },
      { title: 'Florida Medicaid BA Services Coverage Policy (Dec 2024)', url: 'https://www.flrules.org/gateway/readRefFile.asp?refId=17525&filename=Florida%20Medicaid%20Behavior%20Analysis%20Services%20Coverage%20Policy.pdf' },
    ],
    faq: [
      { q: 'Does Florida Community Care cover ABA?', a: 'Yes — the state Behavior Analysis benefit on AHCA criteria (no autism diagnosis required), authorized by FCC\'s in-house Utilization Department via its ABA PA form.' },
      { q: 'How do I submit a BA authorization to FCC?', a: 'The FCC ABA Prior Authorization Request Form by fax to 305-675-6138, email to FCCUMDepartment@FCCHealthPlan.com, or through the FCC Provider Portal — email submission is an FCC-specific convenience.' },
    ],
  },

  'aetna-florida': {
    slug: 'aetna-florida',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the § 627.6686 Geller Act mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [{ title: 'Aetna \u2014 Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [{ title: 'Aetna \u2014 Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
    },
    payer: 'Aetna in Florida',
    state: 'FL', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Aetna publishes none. The ABA Medical Necessity Guide gives a “typical age range” of 0–7 years for comprehensive ABA and “all ages” for focused ABA, which is planning guidance, not a benefit boundary, and CPB 0554/0648 set no age criterion. The age terms that bite in Florida come from the Geller Act, and only for the plans it reaches: an eligible individual is “under 18 years of age or 18 years of age or older and in high school” AND “diagnosed as having a developmental disability at 8 years of age or younger.” That mandate covers fully-insured large-group and state-employee plans only — individual, individually underwritten and small-employer plans are excluded by the statute’s own text, and self-funded ERISA plans sit outside state reach. Federal parity limits how hard age terms can be enforced against covered group plans, so treat an age-based decline on a large-group plan as an escalation, not an answer.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
        verifyVia:
          'Plan funding type and group size first, then a live benefits verification — the mandate, not the carrier policy, is what carries the age terms.',
      },
      dxRecency: {
        value:
          'Aetna sets no expiry on the ASD diagnosis itself, but it puts a 12-month clock on the functional evidence: “there is demonstration of functional impairment on a standardized scale of functioning in the past 12 months… the impairment must be at least one standard deviation below the population mean OR represent a significant risk of harm to self or others.” In practice that is the recency rule intake must schedule around — a current standardized functional score, not a fresh diagnostic report. Reauthorization commonly runs on a roughly six-month cadence.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Broad, and tied to scope of practice: the ASD diagnosis must be “obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).” CPB 0648 lists who Aetna expects to be involved in an ASD evaluation — “board certified behavioral analyst; developmental pediatrician; neurologist; occupational therapist; physical therapist; primary care provider; psychiatrist; psychologist; or speech-language pathologist and audiologist” — evaluated by “the appropriate certified/licensed health care professional.” The diagnosis itself must be DSM-5 ASD (ICD-10 F84.0, F84.3–F84.9); ABA for other indications is considered experimental, investigational or unproven.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      diagnosticTools: {
        value:
          'Two layers, and intake needs both. For the diagnosis, CPB 0648 names the instruments Aetna expects alongside clinical assessment: “Autism Diagnostic Interview-Revised (ADI-R), Autism Diagnostic Observation Schedule-2nd edition (ADOS-2), Childhood Autism Rating Scale 2nd edition (CARS-2) and Asperger Syndrome Diagnostic Scale.” For medical necessity, the ABA Medical Necessity Guide requires a standardized scale of functioning administered in the past 12 months — “for instance, the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS” — scoring at least one standard deviation below the population mean, or documenting a significant risk of harm.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      referral: {
        value:
          'Aetna gates ABA with precertification rather than a referral: form GR-69017-4, submitted through Availity or by phone, for both the assessment and treatment. Neither CPB 0554, CPB 0648 nor the ABA Medical Necessity Guide publishes a referral or physician-order requirement — the Guide mentions “involvement of, or referrals to, appropriate health care, community or supplemental resources” as a quality element, not an entry condition. Whether the specific plan needs a PCP referral is a benefit-design question, not a policy one.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'The member’s benefit document and Aetna precertification at the number on the ID card — ask whether a PCP referral is required in addition to precertification.',
      },
      telehealth: {
        value:
          'Not published. Aetna’s ABA materials — CPB 0554, CPB 0648 and the ABA Medical Necessity Guide — say nothing about telehealth delivery of ABA: no code list, no place-of-service codes, no modifiers and no limits. Do not assume the Florida Medicaid position either, which is narrower than most commercial practice (telemedicine for caregiver training only).',
        status: 'unverified',
        blocker: 'per-case',
        verifyVia:
          'Aetna’s telemedicine policy and provider services at the number on the member’s ID card — confirm which ABA codes pay by telehealth on that specific Florida plan before scheduling remote sessions.',
      },
      authTurnaround: {
        value:
          'No Florida statute sets the decision deadline: § 627.42392, Fla. Stat. governs the prior authorization form, not the clock. The federal claims rule sets the floor for employer plans, whether insured or self-funded, and for non-grandfathered individual and marketplace plans: a pre-service decision “not later than 15 days after receipt of the claim,” with one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1(f)(2); 45 CFR 147.136). A plan may be faster. Aetna’s behavioral health provider manual publishes no decision timeframe.',
        status: 'plan-dependent',
        cites: [
          { title: '§ 627.42392, Fla. Stat. — Prior authorization (2026)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.42392' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
        verifyVia: 'Aetna Behavioral Health precertification (number on the member ID card): the plan’s standard and urgent turnaround for ABA requests, whether the clock starts at receipt or at a complete request, and how far ahead of expiry a reauthorization must be filed. Also ask whether the plan is grandfathered, since grandfathered plans are outside 45 CFR 147.136.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child covered on both parents’ group plans, Florida’s COB statute sets the order: “The benefits of the policy or plan of the parent whose birthday, excluding year of birth, falls earlier in a year are determined before” the other parent’s. For divorced or separated parents, the order is the custodial parent’s plan, then the custodial parent’s spouse’s plan, then the non-custodial parent’s, unless a court decree assigns health costs to one parent. The statute reaches group policies and group plans issued in Florida; whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Medicaid is the payer of last resort (Rule 59G-1.052). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If the other plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: '§ 627.4235, Fla. Stat. — Coordination of benefits', url: 'https://www.flsenate.gov/Laws/Statutes/2025/627.4235' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured (Florida statute order applies) or self-funded (the plan document’s COB clause applies).',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'A duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, “there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards.” The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap — the operative standard is professional practice plus whatever the participating-provider agreement adds. Florida supplies no licensure backstop of its own: the state licenses no behavior analysts, and the Geller Act keys ABA coverage to s. 393.17, F.S. certification (BACB/FL-CBA) or Chapter 490/491 licensure.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither the ABA Medical Necessity Guide nor Aetna’s clinical policy bulletins on ABA address whether 97153 and 97155 may be billed for the same clock time; Aetna carries the concurrency question in its claim editing rather than in a public policy.',
        status: 'unverified',
        blocker: 'per-case',
        verifyVia:
          'Aetna precertification/provider services at the number on the member’s ID card, and the plan’s own reimbursement schedule — ask specifically whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
      },
      dailyLimits: {
        value:
          'Not published. Aetna’s ABA documents set medical-necessity criteria and precertification requirements for 97151–97158, 0362T and 0373T but no per-day unit ceiling and no statement of which MUE table applies. The Guide’s intensity table is descriptive rather than limiting — 10–25 hours a week over 1–2 years for comprehensive ABA, 1–20 hours a week over 1–4 years for focused ABA — and the Geller Act’s nominal $36,000-a-year and $200,000-lifetime ABA caps are dollar limits, not unit limits, and are arguably unenforceable against parity-subject group plans.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
      },
      noteSignature: {
        value:
          'Not published in Aetna’s ABA materials — no rule on who signs a session note or within what window.',
        status: 'unverified',
        blocker: 'document',
        verifyVia:
          'The Aetna provider manual and your participation agreement’s documentation clause.',
      },
      placeOfService: {
        value:
          'Aetna publishes no place-of-service code list for ABA. The one boundary it does state is the schools carve-out: pursuant to applicable law Aetna “is not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act.” That limits paying for what the IEP owes; it is not a blanket ban on the school setting, and it yields to a stronger state mandate. Florida’s mandate does not itself name settings, so where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
        verifyVia:
          'The member’s benefit document, and Aetna provider services for whether school-setting ABA is payable on that plan.',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician: “services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise.” Florida has no behavior-analyst licensure law, so the operative credential is BACB certification (or the legacy FL-CBA, or Chapter 490/491 licensure) — and the Geller Act keys covered ABA to exactly that s. 393.17 certification or 490/491 licensure. The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
      },
    },
    pill: 'Payer Guide · Aetna · Florida',
    h1: 'Aetna ABA coverage in Florida: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Florida: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Florida families — the national clinical policy, prior authorization, the Steven A. Geller Autism Coverage Act (§ 627.6686) mandate with its Down syndrome extension, Florida\'s no-license BCBA landscape, and what intake should verify.',
    intro: [
      'For an intake team in Florida, an Aetna card means three layers at once: the carrier\'s national clinical policy, Florida\'s autism insurance mandate (the Steven A. Geller Autism Coverage Act, § 627.6686, Fla. Stat.), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: '§ 627.6686, Fla. Stat. (insurers) + § 641.31098 (HMOs) — Geller Act' },
      { label: 'Mandate age', value: 'Under 18 (or 18+ still in high school), dx of a developmental disability by age 8' },
      { label: 'Mandate caps', value: '$36,000/yr; $200,000 lifetime (CPI-adjusted; parity-limited)' },
      { label: 'Exempt from mandate', value: 'Individual, individually underwritten, and small-group plans; self-funded ERISA' },
      { label: 'Licensure', value: 'None — no FL behavior analyst license; BCBA/FL-CBA credential (s. 393.17)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Florida',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Florida is the legal floor underneath it: the state mandate below governs what covered group plans must include, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. Note the contrast with Florida Medicaid, which requires no autism diagnosis at all — on the commercial side, Aetna\'s ASD-only rule is strict. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Florida.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Florida mandate: what it guarantees (and doesn\'t)',
        body: [
          'The Steven A. Geller Autism Coverage Act (2008) requires coverage in group plans issued or delivered in Florida after April 1, 2009 — in practice fully-insured large-group plans and the state employee plan under § 627.6686, with companion § 641.31098 reaching large-group HMO contracts. It explicitly excludes individual-market, individually underwritten, and small-employer plans. The eligible individual is narrow: under 18 (or 18 and older but still in high school) AND diagnosed with a developmental disability at 8 years of age or younger. Covered services include well-child ASD screening plus speech, OT, PT, and applied behavior analysis — and unusually for a state mandate, it covers treatment of Down syndrome as well as ASD. ABA benefits cap at $36,000 annually and $200,000 lifetime, with an annual CPI-medical adjustment each January 1; ABA providers must be certified under s. 393.17, Fla. Stat. or licensed under chapters 490/491. Self-funded ERISA plans sit outside state reach, and because ASD/ABA is treated as a mental health benefit, MHPAEA\'s ban on dollar-value treatment limits arguably neuters the caps for parity-subject plans — treat the caps-vs-parity question as analysis, not settled guidance. Florida DFS consumer guidance notes that individual and small-group plans, though outside the mandate, generally cover ABA via the ACA EHB benchmark plus parity.',
        ],
        cites: [
          { title: 'Fla. Stat. § 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
          { title: 'FL Dept. of Financial Services — ASD coverage overview', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
        ],
      },
      {
        h2: 'Aetna Medicaid in Florida',
        body: [
          'A family saying "we have Aetna" in Florida may actually be on the carrier\'s Medicaid plan — Aetna Better Health of Florida, one of the nine SMMC MMA plans administering Behavior Analysis since February 2025 — which follows the state Medicaid rules (no autism diagnosis required), not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan. No Florida-specific Aetna commercial ABA policy, form, or supplement exists — the national CPBs plus the state mandate are the whole picture.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Florida',
        body: [
          'Florida has no state behavior-analyst license — it is absent from the BACB\'s list of states with licensure laws. The operative credential is BACB certification (BCBA/BCaBA/RBT); s. 393.17, Fla. Stat. requires the state to recognize BACB certification, and legacy Florida Certified Behavior Analysts (FL-CBA, administered by BACB since 2003) remain recognized — the Geller Act itself keys ABA coverage to s. 393.17 certification or chapter 490/491 licensure. On rates: Aetna does not publish commercial ABA fee schedules for Florida (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The Florida Medicaid schedule is the local floor to benchmark against, and it is low: 97153 pays $12.26 per 15-minute unit.',
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (FL not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured large-group (mandate applies) vs. individual/small-group or self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Commercial vs. Aetna Better Health of Florida (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — Aetna\'s commercial policy is ASD-only.' },
      { title: 'Age + diagnosis-age history', desc: 'The mandate keys to under-18 (or in high school) with the developmental-disability dx made by age 8 — flag edge cases for parity analysis.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Fla. Stat. § 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
      { title: 'FL Dept. of Financial Services — ASD coverage overview', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna \u2014 Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
    ],
    faq: [
      { q: 'Does Aetna cover ABA therapy in Florida?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Florida\'s Geller Act (§ 627.6686) for covered fully-insured group plans. Individual, small-group, and self-funded employer plans sit outside the mandate, so always verify plan funding type first.' },
      { q: 'What does the Florida autism mandate require?', a: 'For covered group plans: screening, speech, OT, PT, and ABA for eligible individuals — under 18 (or 18+ in high school) diagnosed with a developmental disability by age 8 — with ABA capped at $36,000/year and $200,000 lifetime (CPI-adjusted). Unusually, it covers Down syndrome as well as ASD. Federal parity limits how hard the dollar caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Florida?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Florida Medicaid BA schedule (97153 at $12.26/unit — among the lowest in the Southeast) and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-florida': {
    slug: 'cigna-florida',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the § 627.6686 Geller Act mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in Florida',
    state: 'FL', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 publishes no age limit — coverage turns on a confirmed DSM-5-TR ASD diagnosis and medical necessity, not on age. The age terms in Florida come from the Geller Act, and only for the plans it reaches: an eligible individual is under 18, or 18 or older and still in high school, AND was diagnosed with a developmental disability at 8 years of age or younger. The statute excludes individual-market, individually underwritten and small-employer plans by its own text, and self-funded ERISA plans sit outside state reach; federal parity limits how hard age terms can be enforced against covered group plans.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
        verifyVia:
          'Plan funding type and group size, then a live benefits verification — EN0499 itself will not answer an age question.',
      },
      dxRecency: {
        value:
          'EN0499 sets no maximum age on the diagnosis, but it requires the date to be on the record and puts the currency burden on the instruments. Required with the diagnosis: “the name, credentials, and type of licensure of the individual who made the diagnosis” and “the date on which the diagnosis was most recently made.” For the assessment instrument, “the instrument used represents the most current version, and does not represent obsolete editions of the assessment (e.g., must be the Vineland-3 vs. Vineland-II)” and “the instrument used assesses the individual’s specific and current abilities and skills,” with the date of administration and the respondent named. A diagnosis termed “provisional,” “proposed,” “potential,” “at risk of” or “rule out” is not a confirmed diagnosis.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Scope-of-practice based, and strict about what does not count. The individual must have “a confirmed diagnosis of autism spectrum disorder (ASD) (ICD-10-CM Diagnosis Codes F84.0 – F84.9, with the exception of F84.2, Rett syndrome) based on the criteria in the… DSM-5-TR by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice.” Two disqualifiers intake should screen for: “educational identification or meeting educational eligibility for services related to autism through the [Individuals] with Disabilities Education Act may not meet criteria as a formal diagnosis of ASD,” and a provisional or rule-out diagnosis is not confirmed. The ABA assessment itself must be performed by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health clinician with documented training in ABA.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'EN0499 names no required instrument list — it sets instrument criteria instead, which is a harder bar to meet by accident. The assessment must include “administration of a reliable, valid, and standardized assessment instrument that measures the individual’s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR… social communication and social interaction; and restricted, repetitive patterns of behavior, interests, or activities,” and the instrument “must be completed in its entirety and as designed,” have established reliability and validity “for use with members of the population tested (e.g., age, language preference),” be administered and interpreted by someone trained to do so, be the most current version, assess current abilities, and carry the date of administration, the respondent’s name and the form type.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No referral requirement is published, and Cigna’s front door is unusually open: assessment codes 97151, 97152 and 0362T need no prior authorization under EN0499, so the assessment can start on the diagnosis alone. The rigour arrives at the treatment step, which requires the completed assessment plus a treatment plan submitted with Cigna’s ABA prior-authorization form. Whether a specific plan layers a PCP referral on top is a benefit-design question.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'A live benefits verification and Evernorth Provider Services at 800.926.2273 — confirm whether the plan requires a referral in addition to the treatment PA.',
      },
      telehealth: {
        value:
          'Open, and stated at both the policy and the guide level. EN0499: “ABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities,” with the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements — and the line-of-sight/close-proximity documentation rule expressly “does not apply to telehealth services, when applicable.” The Evernorth autism resource guide is blunter: “all ABA CPT codes are covered telehealth services,” subject to EN0499. Services delivered via telehealth still have to meet the direct treatment / direct engagement definition and be documented as such.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      authTurnaround: {
        value:
          'No Florida statute sets the decision deadline: § 627.42392, Fla. Stat. governs the prior authorization form, not the clock. The federal claims rule sets the floor for employer plans, whether insured or self-funded, and for non-grandfathered individual and marketplace plans: a pre-service decision “not later than 15 days after receipt of the claim,” with one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1(f)(2); 45 CFR 147.136). A plan may be faster.',
        status: 'plan-dependent',
        cites: [
          { title: '§ 627.42392, Fla. Stat. — Prior authorization (2026)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.42392' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
        ],
        verifyVia: 'Evernorth Behavioral Health / Cigna (number on the member ID card): the plan’s standard and urgent turnaround for ABA requests, whether the clock starts at receipt or at a complete request, and how far ahead of expiry a reauthorization must be filed. Also ask whether the plan is grandfathered, since grandfathered plans are outside 45 CFR 147.136.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child covered on both parents’ group plans, Florida’s COB statute sets the order: “The benefits of the policy or plan of the parent whose birthday, excluding year of birth, falls earlier in a year are determined before” the other parent’s. For divorced or separated parents, the order is the custodial parent’s plan, then the custodial parent’s spouse’s plan, then the non-custodial parent’s, unless a court decree assigns health costs to one parent. The statute reaches group policies and group plans issued in Florida; whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Medicaid is the payer of last resort (Rule 59G-1.052). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If the other plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: '§ 627.4235, Fla. Stat. — Coordination of benefits', url: 'https://www.flsenate.gov/Laws/Statutes/2025/627.4235' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured (Florida statute order applies) or self-funded (the plan document’s COB clause applies).',
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
          'Yes — and Evernorth writes it as an explicit carve-out from its general rule: “only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).” Both must be with the patient; analyst time away from the patient is outside the exception. EN0499 separately treats ABA delivered by multiple provider organisations in the same authorization period as not medically necessary absent a documented coordination plan.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published. The Evernorth autism resource guide sets the code set — 97151–97158, 0362T and 0373T only, all in 15-minute increments — but no per-day unit ceiling and no statement of which MUE table Evernorth applies. The Geller Act’s nominal $36,000-a-year and $200,000-lifetime ABA caps are dollar limits rather than unit limits, and are arguably unenforceable against parity-subject group plans.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273.',
      },
      noteSignature: {
        value:
          'Not published in the Evernorth autism resource guide or EN0499 — no rule on who signs a session note or when. What EN0499 does police is content: progress data must be dated, goals measured against baseline, and services documented against the treatment plan.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
      },
      placeOfService: {
        value:
          'No place-of-service code list, but EN0499 does set a setting rule with teeth. Where services are delivered “within environments that may also include additional and/or alternative behavioral expectations (e.g., academic setting, vocational placement, services delivered via telehealth modalities),” the documentation must identify that the services still meet the direct treatment definition “regardless of treatment location or modality,” are conducted against the treatment-plan goals, and — the exclusion that decides most school cases — that “the ABA services are not utilized to replace or replicate activities that are the responsibility of the setting and environment where services occur (e.g., classroom aide, 1:1 teacher, tutor, vocational assistant/coach, respite services).” Telehealth is separately open across all ABA codes.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 plus the member’s benefit document for whether a school or group-home setting is payable on that plan.',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: “Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.” Practically, the BCBA’s credential is what the claim rides on for technician-delivered 97153. Florida adds no licensure of its own — it licenses no behavior analysts — so BACB certification (or the legacy FL-CBA, or Chapter 490/491 licensure) is the operative credential, and the Geller Act keys covered ABA to exactly that.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
      },
    },
    pill: 'Payer Guide · Cigna · Florida',
    h1: 'Cigna / Evernorth ABA coverage in Florida: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Florida: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Florida families — the national EN0499 policy with no assessment PA, the Steven A. Geller Autism Coverage Act (§ 627.6686) mandate with its Down syndrome extension, Florida\'s no-license BCBA landscape, and what intake should verify.',
    intro: [
      'For an intake team in Florida, a Cigna card means three layers at once: the carrier\'s national clinical policy, Florida\'s autism insurance mandate (the Steven A. Geller Autism Coverage Act, § 627.6686, Fla. Stat.), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: '§ 627.6686, Fla. Stat. (insurers) + § 641.31098 (HMOs) — Geller Act' },
      { label: 'Mandate age', value: 'Under 18 (or 18+ still in high school), dx of a developmental disability by age 8' },
      { label: 'Mandate caps', value: '$36,000/yr; $200,000 lifetime (CPI-adjusted; parity-limited)' },
      { label: 'Exempt from mandate', value: 'Individual, individually underwritten, and small-group plans; self-funded ERISA' },
      { label: 'Licensure', value: 'None — no FL behavior analyst license; BCBA/FL-CBA credential (s. 393.17)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Florida',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Florida is the legal floor underneath it: the state mandate below governs what covered group plans must include, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Florida.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Florida mandate: what it guarantees (and doesn\'t)',
        body: [
          'The Steven A. Geller Autism Coverage Act (2008) requires coverage in group plans issued or delivered in Florida after April 1, 2009 — in practice fully-insured large-group plans and the state employee plan under § 627.6686, with companion § 641.31098 reaching large-group HMO contracts. It explicitly excludes individual-market, individually underwritten, and small-employer plans. The eligible individual is narrow: under 18 (or 18 and older but still in high school) AND diagnosed with a developmental disability at 8 years of age or younger. Covered services include well-child ASD screening plus speech, OT, PT, and applied behavior analysis — and unusually for a state mandate, it covers treatment of Down syndrome as well as ASD (note the friction: EN0499 itself is ASD-only, so a mandate-covered Down syndrome request rides on the statute, not the carrier policy). ABA benefits cap at $36,000 annually and $200,000 lifetime, with an annual CPI-medical adjustment; ABA providers must be certified under s. 393.17, Fla. Stat. or licensed under chapters 490/491. Self-funded ERISA plans sit outside state reach, and MHPAEA\'s ban on dollar-value treatment limits arguably neuters the caps for parity-subject plans. Florida DFS consumer guidance notes individual and small-group plans generally cover ABA via the ACA EHB benchmark plus parity even though the mandate doesn\'t reach them.',
        ],
        cites: [
          { title: 'Fla. Stat. § 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
          { title: 'FL Dept. of Financial Services — ASD coverage overview', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
        ],
      },
      {
        h2: 'No Florida-specific Cigna policy exists',
        body: [
          'We checked the current EN0499 text directly: it contains no Florida mention and no Florida carve-out — unlike Virginia, where the policy excludes fully-insured business, Florida members are handled under the standard EN0499 criteria (ASD diagnosis F84.0–F84.9 required, F84.2 excluded), subject to any controlling state mandate at the benefit-plan level. That means the no-assessment-PA fast path applies to Florida Cigna members, and Florida-specific answers come from benefits verification — plan funding type, mandate applicability, benefit limits — not from a carrier document. Cigna operates no Florida Medicaid MMA plan, so there is no Medicaid cross-check to run on a Cigna card.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Florida',
        body: [
          'Florida has no state behavior-analyst license — it is absent from the BACB\'s list of states with licensure laws. The operative credential is BACB certification (BCBA/BCaBA/RBT); s. 393.17, Fla. Stat. requires the state to recognize BACB certification, and legacy Florida Certified Behavior Analysts (FL-CBA, administered by BACB since 2003) remain recognized — the Geller Act itself keys ABA coverage to s. 393.17 certification or chapter 490/491 licensure. On rates: Cigna does not publish commercial ABA fee schedules for Florida (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The Florida Medicaid schedule is the local floor to benchmark against, and it is low: 97153 pays $12.26 per 15-minute unit.',
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (FL not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured large-group (mandate applies) vs. individual/small-group or self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — then the assessment can start without PA.' },
      { title: 'Age + diagnosis-age history', desc: 'The mandate keys to under-18 (or in high school) with the developmental-disability dx made by age 8 — flag edge cases for parity analysis.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Fla. Stat. § 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
      { title: 'FL Dept. of Financial Services — ASD coverage overview', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    faq: [
      { q: 'Does Cigna cover ABA therapy in Florida?', a: 'Yes — under national policy EN0499 for ASD (no PA on assessment codes 97151/97152/0362T), layered on Florida\'s Geller Act (§ 627.6686) for covered fully-insured group plans. Self-funded, individual, and small-group plans sit outside the mandate, so verify plan funding type first.' },
      { q: 'What does the Florida autism mandate require?', a: 'For covered group plans: screening, speech, OT, PT, and ABA for eligible individuals — under 18 (or 18+ in high school) diagnosed with a developmental disability by age 8 — with ABA capped at $36,000/year and $200,000 lifetime (CPI-adjusted). It also covers Down syndrome, and federal parity limits how hard the dollar caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Florida?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Florida Medicaid BA schedule (97153 at $12.26/unit) and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-florida': {
    slug: 'unitedhealthcare-florida',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + a real FL State Mandates entry: Down syndrome ABA covered.',
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
    payer: 'UnitedHealthcare / Optum in Florida',
    state: 'FL', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Optum’s ABA Supplemental Clinical Criteria publish no age limit — coverage turns on a valid ASD diagnosis and medical necessity. Two age-bearing layers sit above it in Florida. The Geller Act: under 18, or 18 and older and still in high school, with the developmental-disability diagnosis made at 8 years of age or younger, for fully-insured large-group and state-employee plans only. And Optum’s own Florida entry in its ABA State Mandates criteria, which reaches “mid and large group fully insured (does not include individual and small)” plans. Federal parity limits how hard age terms can be enforced against covered group plans.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
        verifyVia:
          'Plan funding type and group size before anything else — they decide whether the mandate layer applies at all.',
      },
      dxRecency: {
        value:
          'Not published. The Supplemental Clinical Criteria require a valid DSM-5-TR ASD diagnosis confirmed with at least one clinically validated tool, but set no maximum age on that diagnosis and no re-diagnosis interval. What Optum does clock is the review cycle — continued-service reviews every 4–6 months — and the documentation standard that assessment instruments be norm-referenced against age-matched peers and used to “assess developmental gains as a result of interventions,” which implies current rather than historical scores without naming a window.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services and Provider Express — ask whether an evaluation older than a given date triggers re-evaluation before an ABA authorization.',
      },
      diagnosingProviders: {
        value:
          'State-licensed and scope-qualified: “a valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR.” The diagnosing clinician — not the ABA provider — confirms and documents both the diagnosis and the severity level. Note the parenthetical: “or other applicable diagnosis as required by governing laws” is what carries Florida’s Down syndrome path, since Optum’s Florida State Mandates entry covers ABA “for the treatment of Down Syndrome” on mid- and large-group fully-insured plans.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      diagnosticTools: {
        value:
          'Optum publishes the fullest instrument taxonomy of the national carriers, in two stages. For the diagnosis, “the DSM-5 diagnosis and severity level are confirmed and documented by the diagnosing clinician using at least one clinically validated tool (not an all-inclusive list),” across first-level screening tools (ABC, CHAT/M-CHAT, CSBS-DP-IT-Checklist, ASQ, AQ, CAST), second-level screening tools (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). For treatment intensity, the plan must be set from baseline measurement “with the use of at least one of the following validated measurement tools”: ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland (VABS) or CFQL-2 — with the caveat that “measurement tools should be individualized and will not be the same for all individuals or programs.” The ABA provider separately completes a standard or functional behavioral assessment, caregiver interviews, direct observation, record review, a baseline skills assessment and norm-referenced instruments against age-matched peers.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No referral requirement is published; the gate is authorization. “Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law),” run as Optum’s two-step structure on Provider Express — assessment authorized first, then treatment — with continued-service reviews every 4–6 months. Whether a specific plan also requires a PCP referral is a benefit-design question.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'A live benefits verification plus Provider Express — confirm whether the plan layers a referral requirement on top of the two-step authorization.',
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
          'No Florida statute sets the decision deadline: § 627.42392, Fla. Stat. governs the prior authorization form, not the clock. The federal claims rule sets the floor for employer plans, whether insured or self-funded, and for non-grandfathered individual and marketplace plans: a pre-service decision “not later than 15 days after receipt of the claim,” with one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1(f)(2); 45 CFR 147.136). A plan may be faster.',
        status: 'plan-dependent',
        cites: [
          { title: '§ 627.42392, Fla. Stat. — Prior authorization (2026)', url: 'https://www.flsenate.gov/Laws/Statutes/2026/627.42392' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
        ],
        verifyVia: 'Optum Behavioral Health (number on the member ID card): the plan’s standard and urgent turnaround for ABA requests, whether the clock starts at receipt or at a complete request, and how far ahead of expiry a reauthorization must be filed. Also ask whether the plan is grandfathered, since grandfathered plans are outside 45 CFR 147.136.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child covered on both parents’ group plans, Florida’s COB statute sets the order: “The benefits of the policy or plan of the parent whose birthday, excluding year of birth, falls earlier in a year are determined before” the other parent’s. For divorced or separated parents, the order is the custodial parent’s plan, then the custodial parent’s spouse’s plan, then the non-custodial parent’s, unless a court decree assigns health costs to one parent. The statute reaches group policies and group plans issued in Florida; whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Medicaid is the payer of last resort (Rule 59G-1.052). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If the other plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: '§ 627.4235, Fla. Stat. — Coordination of benefits', url: 'https://www.flsenate.gov/Laws/Statutes/2025/627.4235' },
          { title: 'Rule 59G-1.052, F.A.C. — Third-Party Liability Requirements (AHCA)', url: 'https://ahca.myflorida.com/content/download/5929/file/59G_1052_TPL_Requirements.pdf?version=1' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured (Florida statute order applies) or self-funded (the plan document’s COB clause applies).',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'No percentage or caseload cap — the commercial reimbursement policy refers providers to the ABA Coding Coalition for supervision requirements. What Optum polices is the boundary: “CPT codes 97153 and 97155 may not be billed for technician training,” including training a technician new to the organisation on a client’s programming or on reassessment-driven goal changes; and 97155 “should be reported only for services where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient” — treatment planning is an indirect service and is not separately reimbursable. The clinical criteria add the credential chain: technicians work “under the applicable supervision of a BCBA or licensed behavioral health clinician” and “should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate,” with an explicit warning that a parent serving as their own child’s RBT creates an ethics conflict for the supervising BCBA.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, with a single-provider exclusion. “Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently.” So the concurrency has to be two people — a technician on 97153 and an analyst on 97155 directing them with the patient present. Separately, 97155 and 97156 may both pay on the same date of service only if the services are separate, distinct and clearly documented; “a single provider can’t bill for both simultaneously (e.g., in the same 15-minute block).”',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum publishes its own per-day table on top of CMS MUEs — maximum frequency per day: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs). MUEs otherwise apply per CMS guidance, and billing above 32 units a day of 97153 “may be subject to non-reimbursement or recovery.” Time is counted on the CMS 15-minute rule (1 unit at 8 minutes or more, 2 at 23 or more, and so on). The Geller Act’s $36,000-a-year and $200,000-lifetime ABA caps are dollar limits rather than unit limits, and are arguably unenforceable against parity-subject group plans.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
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
          'The commercial ABA reimbursement policy sets codes, modifiers, units and concurrency but no place-of-service rule; the clinical criteria only require the place of service to appear on every daily progress note, and the treatment plan to be coordinated with the school and any IFSP/IEP. Florida is one of the states where Optum publishes a genuine state supplement, but it is a covered-condition rule rather than a setting rule: for Florida members on mid- and large-group fully-insured plans, “Applied Behavior Analysis (ABA) is covered for the treatment of Down Syndrome. Speech therapy, physical therapy, occupational therapy, and ABA must be covered to the same extent as the existing Florida autism mandate.”',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
        verifyVia:
          'UnitedHealthcare/Optum provider services and the member’s benefit document for whether school, community or group-home ABA is payable on that plan.',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor’s level), HN = BCaBA (bachelor’s level), HO = BCBA or master’s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: “billing multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial.” Indirect work has no code of its own — it is bundled into the direct-service code. Florida adds no licensure layer, so BACB certification (or the legacy FL-CBA, or Chapter 490/491 licensure) is the operative credential.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Fla. Stat. \u00a7 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' }],
      },
    },
    pill: 'Payer Guide · UnitedHealthcare · Florida',
    h1: 'UnitedHealthcare / Optum ABA coverage in Florida: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Florida: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Florida families — the national two-step authorization, Optum\'s Florida State Mandates entry covering ABA for Down syndrome, the Geller Act (§ 627.6686), Florida\'s no-license BCBA landscape, and what intake should verify.',
    intro: [
      'For an intake team in Florida, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Florida\'s autism insurance mandate (the Steven A. Geller Autism Coverage Act, § 627.6686, Fla. Stat.), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — and Florida is one of the states where Optum publishes a genuine state-specific supplement, extending ABA coverage to Down syndrome for mandate-covered plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD per the national policy; + Down syndrome for FL mandate-covered plans' },
      { label: 'State mandate', value: '§ 627.6686, Fla. Stat. (insurers) + § 641.31098 (HMOs) — Geller Act' },
      { label: 'Mandate age', value: 'Under 18 (or 18+ still in high school), dx of a developmental disability by age 8' },
      { label: 'Mandate caps', value: '$36,000/yr; $200,000 lifetime (CPI-adjusted; parity-limited)' },
      { label: 'Exempt from mandate', value: 'Individual, individually underwritten, and small-group plans; self-funded ERISA' },
      { label: 'Licensure', value: 'None — no FL behavior analyst license; BCBA/FL-CBA credential (s. 393.17)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Florida',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months. That clinical policy is national — what changes in Florida is the legal floor underneath it: the state mandate below governs what covered group plans must include, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Florida.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Florida mandate: what it guarantees (and doesn\'t)',
        body: [
          'The Steven A. Geller Autism Coverage Act (2008) requires coverage in group plans issued or delivered in Florida after April 1, 2009 — in practice fully-insured large-group plans and the state employee plan under § 627.6686, with companion § 641.31098 reaching large-group HMO contracts. It explicitly excludes individual-market, individually underwritten, and small-employer plans. The eligible individual is narrow: under 18 (or 18 and older but still in high school) AND diagnosed with a developmental disability at 8 years of age or younger. Covered services include well-child ASD screening plus speech, OT, PT, and applied behavior analysis — and unusually for a state mandate, it covers treatment of Down syndrome as well as ASD. ABA benefits cap at $36,000 annually and $200,000 lifetime, with an annual CPI-medical adjustment; ABA providers must be certified under s. 393.17, Fla. Stat. or licensed under chapters 490/491. Self-funded ERISA plans sit outside state reach, and MHPAEA\'s ban on dollar-value treatment limits arguably neuters the caps for parity-subject plans. Florida DFS consumer guidance notes individual and small-group plans generally cover ABA via the ACA EHB benchmark plus parity even though the mandate doesn\'t reach them.',
        ],
        cites: [
          { title: 'Fla. Stat. § 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
          { title: 'FL Dept. of Financial Services — ASD coverage overview', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
        ],
      },
      {
        h2: 'Optum\'s Florida-specific criteria: Down syndrome ABA',
        body: [
          'Florida has its own entry in Optum\'s ABA State Mandates supplemental criteria (policy BH 803ABA STM12026, effective January 2026): for Florida members on mid- and large-group fully-insured plans (not individual or small-group), ABA is covered for the treatment of Down syndrome, and speech, physical, and occupational therapy plus ABA must be covered to the same extent as the existing Florida autism mandate. That makes UnitedHealthcare the carrier whose published criteria explicitly operationalize the Geller Act\'s Down syndrome extension — for an intake team, a Down syndrome inquiry on a fully-insured mid/large-group UHC plan is a coverable case, not an automatic ASD-only decline. Confirm funding type and group size before promising it.',
        ],
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM12026, Florida entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Florida',
        body: [
          'A family saying "we have UnitedHealthcare" in Florida may actually be on the carrier\'s Medicaid plan — UnitedHealthcare Community Plan of Florida, whose Behavior Analysis program Optum has managed since the February 2025 SMMC carve-in. That plan follows the state Medicaid rules (no autism diagnosis required, portal-only PA on Provider Express), not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
        cites: [
          { title: 'UHC Community Plan FL — SMMC Behavioral Analysis Program QRG', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Florida',
        body: [
          'Florida has no state behavior-analyst license — it is absent from the BACB\'s list of states with licensure laws. The operative credential is BACB certification (BCBA/BCaBA/RBT); s. 393.17, Fla. Stat. requires the state to recognize BACB certification, and legacy Florida Certified Behavior Analysts (FL-CBA, administered by BACB since 2003) remain recognized — the Geller Act itself keys ABA coverage to s. 393.17 certification or chapter 490/491 licensure. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Florida (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The Florida Medicaid schedule is the local floor to benchmark against, and it is low: 97153 pays $12.26 per 15-minute unit.',
        ],
        cites: [
          { title: 'BACB — U.S. Licensure of Behavior Analysts (FL not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type + group size', desc: 'Fully insured mid/large-group triggers both the mandate and Optum\'s Down syndrome coverage; individual/small-group and self-funded ERISA are exempt.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Florida (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD with a validated tool for the standard path — or the Down syndrome diagnosis for the Florida mandate path.' },
      { title: 'Age + diagnosis-age history', desc: 'The mandate keys to under-18 (or in high school) with the developmental-disability dx made by age 8 — flag edge cases for parity analysis.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Fla. Stat. § 627.6686 (2024)', url: 'https://www.flsenate.gov/Laws/statutes/2024/627.6686' },
      { title: 'FL Dept. of Financial Services — ASD coverage overview', url: 'https://www.myfloridacfo.com/division/consumers/consumerprotections/autism-spectrum-disorder' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
      { title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'UHC Community Plan FL \u2014 SMMC Behavioral Analysis Program QRG', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/fl/resources/FL-BAP-QRG.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Florida?', a: 'Yes — under Optum\'s national two-step authorization for ASD, layered on Florida\'s Geller Act (§ 627.6686) for covered fully-insured group plans. Self-funded, individual, and small-group plans sit outside the mandate, so verify plan funding type first.' },
      { q: 'Does UnitedHealthcare cover ABA for Down syndrome in Florida?', a: 'For mid- and large-group fully-insured Florida plans, yes — Optum\'s ABA State Mandates supplement explicitly covers ABA for the treatment of Down syndrome, mirroring the Florida mandate\'s unusual Down syndrome extension. It does not apply to individual or small-group plans; confirm funding type and group size.' },
      { q: 'What does the Florida autism mandate require?', a: 'For covered group plans: screening, speech, OT, PT, and ABA for eligible individuals — under 18 (or 18+ in high school) diagnosed with a developmental disability by age 8 — with ABA capped at $36,000/year and $200,000 lifetime (CPI-adjusted). Federal parity limits how hard the dollar caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Florida?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Florida Medicaid BA schedule (97153 at $12.26/unit) and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },
};

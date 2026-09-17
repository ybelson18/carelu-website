import type { PayerConfig } from './types.js';

export const newYorkPayers: Record<string, PayerConfig> = {
  'new-york-medicaid': {
    slug: 'new-york-medicaid',
    cardDesc: 'Under 21, ASD/Rett; FFS has NO prior auth (referral only) — but most kids sit in MCOs that do.',
    assessmentPA: {
      value: 'FFS: NO prior authorization — the gate is a practitioner referral (valid ≤2 years). MMC plans set their own PA, and every major plan requires it',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    treatmentPA: {
      value: 'FFS: none stated — referral-gated, with treatment-plan updates every 6 months. MMC: each plan runs its own assessment + treatment PA',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    dxRequired: {
      value: 'Yes — under 21 with ASD (DSM-5) and/or Rett syndrome (F84.0, F84.2); not available for adults 21+ or other diagnoses',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'New York Medicaid (NYS DOH / eMedNY)',
    state: 'NY', kind: 'state-medicaid',
    pill: 'Payer Guide · New York Medicaid',
    h1: 'New York Medicaid ABA coverage: the intake guide.',
    metaTitle: 'New York Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How NYS Medicaid covers ABA — no prior authorization at the fee-for-service layer (a 2-year practitioner referral is the gate), the 2023 managed-care carve-in where every major plan does require PA, the phased 25% cut to 97153, LBA-only billing, and the 5% supervision rule.',
    intro: [
      'New York Medicaid covers ABA for members under 21 with autism spectrum disorder or Rett syndrome — a young benefit (first billable in 2021, nine years after the state\'s commercial mandate) with a split personality. At the fee-for-service layer, administered through eMedNY, there is no prior authorization at all: the entire front door is a practitioner referral valid for up to two years. But since January 1, 2023 the benefit is carved into every mainstream Medicaid Managed Care plan, most children sit in one of those ~13 plans, and every major plan does impose its own prior authorization. In practice, "does this family need a PA?" is answered by which card they carry — which makes plan identification the first intake question in New York.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21, ASD (DSM-5) and/or Rett syndrome; no waiver pathway, no adult coverage' },
      { label: 'FFS prior auth', value: 'NONE — a practitioner referral (valid ≤2 years) is the only gate' },
      { label: 'MMC prior auth', value: 'Plan-by-plan — all major MCOs require PA (see the per-plan guides)' },
      { label: 'Diagnosis recency', value: 'Referral valid no more than 2 years (the state\'s de facto recency rule)' },
      { label: 'Rates (per 15 min)', value: '97153: $14.45 (eff. 4/1/2026, after a phased 25% cut) · 97151/97155/97156: $19.26' },
      { label: 'Licensure', value: 'NYSED Licensed Behavior Analyst (LBA) — only LBAs enroll and bill' },
      { label: 'Settings', value: 'Home, clinic, community — NOT reimbursable in schools' },
      { label: 'Staff screening', value: 'No RBT or state background-check mandate for technicians — screening flows from OMIG/LEIE/SAM exclusion checks, plus Justice Center checks only in OMH/OPWDD/OCFS-certified settings' },
    ],
    sections: [
      {
        h2: 'The FFS front door: a referral, not a prior authorization',
        body: [
          'Nothing in the current FFS ABA Policy Manual (updated October 1, 2025) requires prior authorization or prior approval — for the assessment or for treatment. The gate is a referral from a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant (LBAs cannot diagnose or self-refer). The referral is valid for no more than 2 years and must carry a specific payload: the member\'s age, the ASD and/or Rett diagnosis with date of initial diagnosis, co-morbid diagnoses, severity level, a statement of need for ABA, and the DSM-5 Diagnostic Checklist. Once services start, the treatment plan must be updated at least every 6 months and shared with the referring provider. For intake, that means a complete referral packet is the whole authorization battle on FFS — chase its required elements at first contact, because an incomplete referral is the only thing standing between the family and a booked assessment.',
          'One forward-looking caveat: the Governor\'s FY 2026-27 Executive Budget proposed an ABA "Centers of Excellence" (CoE) designation framework whose criteria were still undefined as of mid-2026. Two budget-summary sources on the enacted SFY2026-27 budget (signed 5/28/2026) describe only the ABA rate-methodology reform as surviving into the enacted budget, with no CoE program mentioned — but that read comes from secondary budget-highlights write-ups, not primary bill text, so treat "CoE didn\'t survive" as unconfirmed rather than settled. Still worth watching for an implementation notice from DOH/OMH before assuming either outcome.',
        ],
        cites: [
          { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
          { title: 'Acuity News — NY Medicaid ABA rates 2026 & Centers of Excellence proposal', url: 'https://acuity.news/regulation/new-york-medicaid-aba-reimbursement-rate-reduction-2026/' },
          { title: 'Cerebral Palsy Associations of NYS — NY SFY 2027 Final Budget Highlights (secondary budget summary, unconfirmed against primary bill text)', url: 'https://cpstate.org/new-york-state-fiscal-year-2027-final-budget-highlights/' },
          { title: 'MHANYS — Report on the 2026-27 Budget Related to Behavioral Health (secondary budget summary, unconfirmed against primary bill text)', url: 'https://mhanys.org/mh_update/report-on-the-2026-27-budget-related-to-behavioral-health/' },
        ],
      },
      {
        h2: 'The 2023 carve-in: where most families actually are',
        body: [
          'Effective January 1, 2023, ABA was carved into the mainstream Medicaid Managed Care benefit package — and since most children are enrolled in MMC, most New York ABA runs through a plan, not through eMedNY. The state\'s own manual is blunt about what that means: providers serving an MMC member "must contact the MMC member\'s specific MMC plan for coverage, billing, and reimbursement guidance." Unlike the FFS layer, every major plan imposes prior authorization, each with its own machinery — Fidelis\'s Centene-style clinical policy, UnitedHealthcare\'s Optum portal, Anthem\'s Availity form, Healthfirst, MetroPlus, EmblemHealth, and Molina all have dedicated guides below.',
          'The carve-in also runs through the regional upstate plans per the eMedNY directory (v2026-2, April 1, 2026): Excellus BCBS (Central NY, Rochester, Southern Tier), MVP Health Plan and CDPHP (Capital Region and Hudson Valley), and Independent Health and Highmark Western & Northeastern NY (Western NY), plus the HIV-SNPs (Amida Care, MetroPlus Partnership) and HARP variants — each now has its own dedicated guide below. Per the state\'s July 2026 Medicaid Managed Care enrollment report, the five regional plans carry real scale, not a rounding error: Excellus (179,533 statewide members), MVP (165,151), CDPHP (80,854), Independent Health (60,812, Erie County only), and Highmark Western & Northeastern NY (45,881) — roughly 532,000 members combined. One trap: Aetna Better Health appears in the NY directory only as a Partial LTC (MLTC) plan — it is not a mainstream children\'s Medicaid plan and not an ABA payer in NY Medicaid.',
        ],
        cites: [
          { title: 'eMedNY — Information for All Providers, Managed Care Information (plan directory v2026-2)', url: 'https://www.emedny.org/providermanuals/allproviders/pdfs/information_for_all_providers_managed_care_information.pdf' },
          { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
          { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
        ],
      },
      {
        h2: 'Rates: a single statewide schedule — and a 25% cut to 97153',
        body: [
          'The FFS fee schedule is flat: one statewide rate per code, no credential tiers, no modifiers, no geographic variation. Assessment (97151) and the QHP codes (97155 protocol modification, 97156 family guidance) pay $19.26 per 15-minute unit; group codes 97154/97157/97158 pay $3.31 per unit per member. The story is 97153, technician-delivered direct treatment — the volume code of every ABA practice. The FY 2025-26 enacted budget authorized a phased 25% cut applied only to 97153: $19.26 → $16.85 effective October 1, 2025 → $14.45 effective April 1, 2026. A NYSABA/CASP survey reported 74% of Medicaid ABA providers would leave the program if the second tranche took effect; the FY 2026-27 Executive Budget nonetheless layered on roughly $28.5M in further cuts. Two modeling notes: MMC plans negotiate their own rates (the state schedule is the FFS reference, not binding on plans), and any margin model built on pre-cut 97153 rates is now ~25% wrong.',
        ],
        cites: [
          { title: 'NYS Medicaid ABA Fee Schedule (effective April 1, 2026)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Fee_Schedule.xls' },
          { title: 'NYS Medicaid Update, August 2025 (Vol 41 No 8) — 97153 rate reduction', url: 'https://health.ny.gov/health_care/medicaid/program/update/2025/no08_2025-08.htm' },
          { title: 'Acuity News — NY Medicaid ABA rate reduction 2026', url: 'https://acuity.news/regulation/new-york-medicaid-aba-reimbursement-rate-reduction-2026/' },
        ],
      },
      {
        h2: 'Licensure, supervision, and the operational rules',
        body: [
          'New York is one of the strictest licensure states in the country: only NYSED Licensed Behavior Analysts (LBAs) can enroll in Medicaid and bill — a BCBA credential alone is not sufficient. Certified Behavior Analyst Assistants (CBAAs) enroll as non-billing (OPRA) providers and bill through their supervising LBA, and unlicensed technicians may deliver scripted 97153 sessions billed under the LBA\'s NPI. Effective October 1, 2025, that supervision has teeth: LBAs must supervise unlicensed technicians for at least 5% of the technician\'s service hours each calendar month, with at least 2 face-to-face real-time contacts per month (one observing service delivery), and no LBA may supervise more than 6 CBAAs/unlicensed individuals at a time — rules that apply to FFS and MMC alike, and that turn supervision capacity into a hard cap on census. Other operational rules worth wiring into intake: ABA is not reimbursable in a school setting (home, clinic, and community are fine); records must be kept at least 6 years and, for minors, until the patient turns 22 (10 years for MMC providers); and ABA-via-telehealth was under formal state evidence review in mid-2025 — supervision of technicians may already occur via synchronous audio/video.',
        ],
        cites: [
          { title: 'NYS Medicaid Update, August 2025 (Vol 41 No 8) — supervision requirements', url: 'https://health.ny.gov/health_care/medicaid/program/update/2025/no08_2025-08.htm' },
          { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'New York has no RBT mandate. The FFS manual defines the technician tier simply as an "unlicensed individual" — someone not licensed, certified, or registered by the state as an ABA provider — with no credential, training-hour, age, or education requirement attached. What the state regulates instead is scope: an LBA may not delegate any task within the ABA scope of practice, even under direct supervision, so technicians only execute the scripted treatment-plan activities the LBA wrote, record data without interpreting it, prepare the setting, and write factual session notes. The middle tier is unique to New York: the Certified Behavior Analyst Assistant (CBAA), a NYSED credential under Education Law Article 167 requiring a bachelor\'s degree (in ABA, or a related field plus ABA certificate coursework), 1,000 hours of supervised experience, and passage of both the NYCBAA and NY Autism exams. And if you staff with RBTs anyway — many agencies do — the BACB\'s own floor travels with the credential: 18+, high-school education, the 40-hour training and competency assessment, and a passed criminal background check plus abuse-registry check no more than 180 days before the certification application.',
          'On background screening, the ABA Policy Manual itself imposes no employee-level background-check, fingerprinting, or registry requirement — the obligations arrive from adjacent rules, keyed to what your agency is. At provider enrollment, NY Medicaid screens applications at the federal limited/moderate/high risk tiers and collects the $750 federal application fee (2026) from certain provider types (waived if already paid to Medicare or another state\'s Medicaid/CHIP within 12 months); enrollment fingerprinting attaches only at the high-risk tier, so confirm your risk category with provider enrollment. Justice Center pre-employment checks — Staff Exclusion List check first, then a fingerprint-based criminal background check via IdentoGO, fully completed before the hire has regular unsupervised contact with recipients — bind programs under Justice Center jurisdiction (OMH- and OPWDD-operated/certified programs, OCFS residential programs for children), not a standalone LBA practice billing Medicaid FFS; but an agency that also runs OPWDD-certified services (e.g., community habilitation) carries the full four-check stack: SEL, CBC, an MHL 16.34 check, and the OCFS child-abuse SCR check. Every agency, whatever its settings, should screen staff against the three exclusion databases OMIG names — the NYS Medicaid exclusion list, the federal OIG LEIE, and SAM.gov; OMIG doesn\'t publish a check frequency, so set a recurring cadence in your compliance plan.',
          'The supervisor credential is the LBA, and New York is explicit that BCBA certification alone "is not sufficient" to practice — it\'s only a pathway to licensure, which requires a master\'s from a NYSED-registered ABA program (or substantial equivalent), the exam (BCBA satisfies it), supervised experience, good moral character, minimum age 21, NYSED-approved child-abuse-reporting coursework, and a $300 fee. The supervision math covered above — 5% of each technician\'s monthly service hours, two face-to-face contacts, the six-supervisee cap — is what turns those credentials into a staffing model. Plans then layer on their own stacks: Optum/UHC Community Plan requires network LBAs to hold active BCBA certification plus the NY license plus a NY Medicaid ID (CBAAs need their own Medicaid ID), along with professional liability insurance and a virtual-visits attestation for telehealth supervision; Healthfirst stretches record retention to 10 years for MMC providers (vs. the state\'s 6-year/age-22 floor). No NY Medicaid plan we checked requires RBT certification for technicians.',
        ],
        cites: [
          { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
          { title: 'NYSED Office of the Professions — CBAA FAQs', url: 'https://www.op.nysed.gov/professions/certified-behavior-analyst-assistants/faqs' },
          { title: 'BACB RBT Handbook (June 2026 update)', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'eMedNY Provider Enrollment — federal application fee ($750 for 2026)', url: 'https://www.emedny.org/info/providerenrollment/ffs.aspx' },
          { title: 'NYS Justice Center — Pre-Employment Checks (SEL, then CBC)', url: 'https://www.justicecenter.ny.gov/pre-employment-checks' },
          { title: 'OMIG — Medicaid Exclusions (screen NYS list, OIG LEIE, SAM.gov)', url: 'https://omig.ny.gov/medicaid-fraud/medicaid-exclusions' },
          { title: 'NYSED Office of the Professions — LBA License Requirements (Section 8804, Subpart 79-17)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/licensecertification-requirements' },
          { title: 'Optum NY Medicaid ABA Provider Orientation (2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
          { title: 'Healthfirst — ABA supervision requirements', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' },
        ],
      },
    ],
    collect: [
      { title: 'FFS or which MMC plan', desc: 'The single fact that decides whether there\'s a PA at all — get the card, not the family\'s guess.' },
      { title: 'Complete referral packet', desc: 'From a licensed, Medicaid-enrolled physician/psychologist/NP/PA: dx + initial dx date, co-morbidities, severity, statement of need, DSM-5 checklist. Referral ≤2 years old.' },
      { title: 'Age and diagnosis', desc: 'Under 21 with ASD and/or Rett only — 21st-birthday proximity is a coverage cliff to flag early.' },
      { title: 'Service setting', desc: 'Home, clinic, or community — school-based delivery is not reimbursable.' },
      { title: 'Supervising LBA capacity', desc: 'The 5%/2-contact/6-supervisee rules make LBA bandwidth a scheduling constraint from day one.' },
    ],
    sources: [
      { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
      { title: 'NYS Medicaid ABA Fee Schedule (effective April 1, 2026)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Fee_Schedule.xls' },
      { title: 'NYS Medicaid Update, August 2025 (Vol 41 No 8)', url: 'https://health.ny.gov/health_care/medicaid/program/update/2025/no08_2025-08.htm' },
      { title: 'eMedNY — Managed Care Information plan directory (v2026-2, 4/1/2026)', url: 'https://www.emedny.org/providermanuals/allproviders/pdfs/information_for_all_providers_managed_care_information.pdf' },
      { title: 'Acuity News — NY Medicaid ABA rates 2026 (secondary; cross-checked against primary sources)', url: 'https://acuity.news/regulation/new-york-medicaid-aba-reimbursement-rate-reduction-2026/' },
      { title: 'NYSED Office of the Professions — LBA License Requirements (Section 8804, Subpart 79-17)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/licensecertification-requirements' },
      { title: 'NYSED Office of the Professions — CBAA FAQs', url: 'https://www.op.nysed.gov/professions/certified-behavior-analyst-assistants/faqs' },
      { title: 'BACB RBT Handbook (June 2026 update)', url: 'https://www.bacb.com/rbt-handbook' },
      { title: 'eMedNY Provider Enrollment — federal application fee', url: 'https://www.emedny.org/info/providerenrollment/ffs.aspx' },
      { title: 'NYS Justice Center — Pre-Employment Checks', url: 'https://www.justicecenter.ny.gov/pre-employment-checks' },
      { title: 'OMIG — Medicaid Exclusions', url: 'https://omig.ny.gov/medicaid-fraud/medicaid-exclusions' },
      { title: 'Optum NY Medicaid ABA Provider Orientation (2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
      { title: 'Healthfirst — ABA supervision requirements', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' },
      { title: 'Cerebral Palsy Associations of NYS — NY SFY 2027 Final Budget Highlights (secondary budget summary, unconfirmed against primary bill text)', url: 'https://cpstate.org/new-york-state-fiscal-year-2027-final-budget-highlights/' },
      { title: 'MHANYS — Report on the 2026-27 Budget Related to Behavioral Health (secondary budget summary, unconfirmed against primary bill text)', url: 'https://mhanys.org/mh_update/report-on-the-2026-27-budget-related-to-behavioral-health/' },
      { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
      { title: 'NYSED \u2014 LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Under 21. ABA \u201cwill be covered for NYS Medicaid fee-for-service (FFS) and Medicaid Managed Care (MMC) members under 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) and/or Rett Syndrome.\u201d No minimum age is set, and there is no waiver pathway and no adult coverage \u2014 so the 21st birthday is a hard coverage cliff worth flagging at intake for any member 19 or older.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      dxRecency: {
        value:
          'New York regulates the referral\u2019s age, not the evaluation\u2019s. \u201cReferrals for ABA services are valid for no more than two years\u201d and must carry the \u201cdate of initial diagnosis\u201d \u2014 but the manual sets no maximum age on the diagnostic report itself, so an older evaluation can still support a fresh referral. Once services start, \u201cLBAs will update the treatment plan at least every 6 months or as needed,\u201d and initial plans and updates \u201cshould be shared with the referring provider.\u201d Managed-care plans layer tighter clocks on top (Fidelis runs a 2-year evaluation window plus a 60-month validated-tool rule; MetroPlus requires annual re-validation), so the card decides the operative recency rule.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          '\u201cThe NYS Medicaid member must be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d and those referring providers \u201cshould follow the criteria for diagnosing ASD found in the DSM-5 and outlined in the NYS Department of Health\u2019s publication, Clinical Practice Guideline on Assessment and Intervention Services for Young Children with Autism Spectrum Disorders.\u201d LBAs and CBAAs are outside that list \u2014 NYSED bars them from diagnosing the condition ABA is provided for and from prescribing or ordering ABA \u2014 which is why no New York case should open without a separate diagnosing clinician in the file.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'NYSED \u2014 LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' }],
      },
      diagnosticTools: {
        value:
          'No instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses,\u201d plus the \u201csymptom severity level/level of support (if referral is from an ASD-diagnosing provider).\u201d On the ABA side the manual asks only that the treatment plan record the \u201cassessment methodology (e.g., antecedent-behavior-consequence log, behavioral observation/sampling, functional behavior assessment, self-monitoring/self-report, inventory, etc.)\u201d and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results of assessment.\u201d Named-instrument requirements in New York are a managed-care overlay, not a state rule.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      referral: {
        value:
          'Required \u2014 and at the fee-for-service layer it is the entire authorization gate, because nothing in the current manual requires prior approval. The referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric NP, pediatric NP or PA; it is \u201cvalid for no more than two years\u201d; and it must carry seven elements: age of the patient, the ASD or Rett Syndrome diagnosis, date of initial diagnosis, co-morbid diagnosis if applicable, symptom severity level/level of support, \u201cstatement the patient needs ABA services,\u201d and the DSM-5 Diagnostic Checklist. An incomplete referral is the only thing standing between an FFS family and a booked assessment.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      telehealth: {
        value:
          'The manual answers telehealth only for supervision, not for service delivery. On-site supervision of technicians is preferred, \u201chowever, supervision may be conducted via a synchronous interactive audio and video telecommunication system, or similar means, consistent with NYS Medicaid FFS telehealth policy\u201d \u2014 and the two required monthly contacts must be face-to-face and real time, so they \u201cmay not occur telephonically, via email or text messaging.\u201d Which ABA service codes may themselves be delivered remotely, and under what place-of-service code, is not stated in the ABA manual; ABA-via-telehealth was under formal state evidence review in mid-2025. Plans publish their own answers (UHC Community Plan allows 97155, 97156 and 97157 at POS 02 for approved virtual-visits providers).',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'NYS Medicaid Update, August 2025 (Vol 41 No 8)', url: 'https://health.ny.gov/health_care/medicaid/program/update/2025/no08_2025-08.htm' }],
        verifyVia:
          'NYS Medicaid\u2019s general telehealth policy and the Medicaid Update archive for an ABA-specific telehealth notice; for a managed-care member, the plan\u2019s own telehealth policy.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Effective October 1, 2025 the supervision rules have hard numbers. \u201cAn LBA can supervise no more than six CBAAs/unlicensed individuals at a time\u201d; \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month\u201d; and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d \u2014 explicitly not telephonic, email or text \u2014 with the LBA observing the technician delivering services in at least one. One of the two contacts may be a small-group meeting. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs separately require direct supervision, cannot exceed six per LBA, and their supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Because an LBA may not delegate any task inside the ABA scope of practice, supervision capacity is a hard cap on census.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'NYS Medicaid Update, August 2025 (Vol 41 No 8)', url: 'https://health.ny.gov/health_care/medicaid/program/update/2025/no08_2025-08.htm' }],
      },
      concurrentBilling: {
        value:
          'Not answered for 97153 with 97155. The ABA manual\u2019s only same-session provision runs the other way \u2014 it tells you when 97155 may be counted toward the 5% supervision minimum, not whether a technician\u2019s 97153 units may be billed for the same clock time. The manual\u2019s two stated code restrictions are unrelated: \u201cCPT code 97156 & 97157 can only be billed when the service is delivered in concert with care of the patient as part of the child\u2019s treatment plan,\u201d and 97154/97158 \u201ccan only be billed for a group treatment session of no more than 8 individuals.\u201d',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'eMedNY provider services (800) 343-9000 and the Medicaid NCCI edit files applied to the ABA fee schedule; for a managed-care member, the plan\u2019s claim-edit policy.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'The ABA manual publishes no per-day unit ceiling, no weekly hour cap and no annual benefit maximum \u2014 consistent with a benefit that carries no prior approval at the FFS layer. The only quantitative limits stated are group size (97154 and 97158 \u201ccan only be billed for a group treatment session of no more than 8 individuals\u201d) and the requirement that documentation record \u201ctotal hours of service per week.\u201d Whether New York applies the Medicaid NCCI MUE table to the ABA codes is not stated in the manual.',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'NYS Medicaid ABA Fee Schedule (effective April 1, 2026)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Fee_Schedule.xls' }],
        verifyVia:
          'The eMedNY ABA Procedure Codes & Fee Schedule and the Medicaid NCCI MUE files; for a managed-care member, the plan\u2019s authorized units are the operative ceiling.',
        blocker: 'document',
      },
      noteSignature: {
        value:
          'The person who prepared the note signs it, and the supervising LBA countersigns a CBAA\u2019s: the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months or as needed, and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Documentation of supervision itself \u201cshould be recorded in the patient file of the NYS Medicaid member.\u201d Clinical documentation \u201cshould include, but may not be limited to\u201d the treatment plan with assessment and goals, specific goals with associated data, total hours of service per week and who provided them (including caregiver training), and the location(s) of services. Retention: \u201ca minimum of six years and, for minors, until the patient turns 22 years of age.\u201d',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      placeOfService: {
        value:
          '\u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings.\u201d Then the line that shapes every New York intake: \u201cNote: NYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record \u201clocation(s) of services (such as office, residence, community),\u201d so setting is documented, not assumed. Managed-care plans have followed the state here rather than deviating \u2014 Fidelis stopped covering school-setting ABA on 9/1/2023 and MVP administratively denies any ABA code billed with POS = School from 7/1/2025.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'The LBA is the billing provider, always. \u201cAn LBA must be enrolled with the NYS Medicaid FFS program to receive reimbursement for ABA services provided to a NYS Medicaid FFS or MMC member,\u201d and \u201cCBAAs cannot bill the NYS Medicaid program directly\u201d \u2014 they enroll as OPRA providers and their work is billed by the supervising LBA. The role mapping is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim.\u201d For non-enrolled unlicensed aides and LBA limited-permit holders, the supervising LBA\u2019s NPI fills Billing, Supervising and Rendering alike. An Article 28 facility bills instead on the Ordered Ambulatory Fee Schedule, with its LBAs/CBAAs enrolled as OPRA providers and affiliated with the facility.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
    },
    faq: [
      { q: 'Does New York Medicaid require prior authorization for ABA?', a: 'At the fee-for-service layer, no — the current FFS policy manual contains no PA requirement; the gate is a practitioner referral valid up to 2 years. But most children are in Medicaid Managed Care, and every major MMC plan does require prior authorization under its own process.' },
      { q: 'Who qualifies for ABA under NY Medicaid?', a: 'Members under 21 with ASD as defined by DSM-5 and/or Rett syndrome, referred by a NYS-licensed, Medicaid-enrolled physician, psychologist, psychiatric NP, pediatric NP, or PA. Adults 21+ and non-ASD/Rett diagnoses are not covered.' },
      { q: 'What does NY Medicaid pay for ABA?', a: 'A single statewide rate per code: $19.26 per 15-minute unit for 97151/97155/97156, and $14.45 for technician-delivered 97153 as of April 1, 2026 — after a phased 25% cut from $19.26. MMC plans negotiate their own rates.' },
      { q: 'Can a BCBA bill NY Medicaid for ABA?', a: 'Not on the BCBA credential alone — New York requires NYSED licensure as a Licensed Behavior Analyst (LBA) to enroll and bill. CBAAs enroll as non-billing providers under a supervising LBA.' },
    ],
  },

  'fidelis-care-new-york': {
    slug: 'fidelis-care-new-york',
    family: 'centene',
    cardDesc: 'Largest NY plan; full Centene-style policy: named instruments, graphs, 6-month reauth cycle.',
    assessmentPA: {
      value: 'Authorization-based — a behavioral assessment must be completed before requesting treatment; the diagnostic evaluation must be within 2 years of the auth request',
      status: 'verified',
      cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
    },
    treatmentPA: {
      value: 'Required — FBA and/or named skill assessment with graphs; 6-month treatment-plan updates; monthly session notes per authorized code at concurrent review',
      status: 'verified',
      cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
    },
    dxRequired: {
      value: 'Yes — under 21, ASD/Rett per the state baseline (Fidelis also lists F84.3); initial requests need a validated diagnostic tool within 60 months',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
    },
    payer: 'Fidelis Care New York (Centene)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Fidelis Care (NY)',
    h1: 'Fidelis Care New York ABA coverage (Medicaid Managed Care).',
    metaTitle: 'Fidelis Care New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Fidelis Care — New York\'s largest Medicaid plan — authorizes ABA: the Centene-derived clinical policy, named assessment instruments with graphs, the 60-month diagnostic recency rule, 6-month reauthorization cycles, and the school-setting bar.',
    intro: [
      'Fidelis Care, the Centene-owned plan and largest Medicaid plan in New York, is the clearest illustration of the state\'s FFS-versus-MMC split: while the state FFS layer needs only a referral, Fidelis layers a full Centene-style clinical policy (FC.CP.BH.301.04) on the state baseline — named assessment instruments, graphed data requirements, a 6-month reauthorization cycle, and heavy concurrent-review documentation. Eligibility mirrors the state (under 21, ASD/Rett, 2-year referral), but the authorization work is entirely Fidelis\'s own.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (Centene) — the largest Medicaid plan in NY' },
      { label: 'Clinical rules', value: 'Fidelis clinical policy FC.CP.BH.301.04 + ABA Provider Tip Sheet (01/2026)' },
      { label: 'Diagnosis recency', value: 'Validated diagnostic tool within 60 months for initial requests; dx evaluation within 2 years of the auth request' },
      { label: 'Reauth cycle', value: 'Updated treatment plan every 6 months; Medical Director may tighten review frequency' },
      { label: 'Intensity model', value: 'Focused ABA (10–25 hrs/wk) vs. Comprehensive (30–40 hrs/wk) — no hard cap, hours justified' },
      { label: 'Claims', value: 'Due within 90 days of date of service' },
    ],
    sections: [
      {
        h2: 'The Centene-style overlay: instruments, graphs, and the 6-month cycle',
        body: [
          'A behavioral assessment by a BCBA/LBA-equivalent must be completed before treatment is requested, and the treatment request must show results from at least one specified functional behavior assessment (descriptive FBA, traditional FA, or IISCA) and/or a named skill assessment — VB-MAPP, ABLLS-R, AFLS, PEAK, SSIS, EFL, or Socially Savvy; a Vineland alone is explicitly insufficient — with graphs and tables attached. Concurrent reviews are the heaviest in the state: updated graphs and goal-grid performance, one session note per month for each authorized CPT code (including supervision and family-guidance notes), an updated assessment scoring grid, an updated treatment plan, and a signed visit attestation. Treatment plans update every 6 months, and the Medical Director may adjust review frequency. The policy also frames intensity as Focused (10–25 hrs/week) versus Comprehensive (30–40 hrs/week), requires hours be justified against age, school attendance, and daily activities, and expects discharge when there\'s no measurable improvement for 6+ months without a reasonable expectation that a revised plan would help.',
        ],
        cites: [
          { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' },
        ],
      },
      {
        h2: 'The recency rules — and the waitlist workaround',
        body: [
          'Fidelis runs two clocks: the diagnostic evaluation supporting the request must be within 2 years of the authorization request, and initial requests need a DSM-5 diagnosis made with a validated assessment tool administered within the past 60 months (not required for continuing services). That instrument requirement is stricter than the state\'s referral rule; the 60-month window is looser in time. The plan also offers a genuine waitlist workaround: if a diagnostic assessment can\'t be obtained within 6 months of the request, Fidelis will accept a letter of confirmation from a NYS-licensed qualified professional to start services — but only if the member is in, or recently was in, ABA. For intake, that letter can be the difference between starting now and losing a family to a diagnostic waitlist.',
        ],
        cites: [
          { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' },
          { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' },
        ],
      },
      {
        h2: 'Settings, credentialing, and claims mechanics',
        body: [
          'No ABA in school settings since September 1, 2023 — and for treatment during school hours, providers must first contact the local Committee on Special Education for an independent evaluation, so a school-hours request is a coordination project, not a form field. Every ABA practitioner must complete both Fidelis credentialing and MMIS Medicaid enrollment before serving members, and claims are due within 90 days of the date of service — a short window that punishes slow authorization cleanup. Requests run through the Fidelis Provider Portal at fideliscare.org, with the ABA form on the Provider Policies page. Rates are negotiated per contract; whether Fidelis pays the state fee schedule is not published.',
        ],
        cites: [
          { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnostic evaluation + dates', desc: 'Two clocks: dx evaluation within 2 years of the request; validated diagnostic tool within 60 months for initial requests.' },
      { title: 'Assessment instrument data', desc: 'A named FBA and/or skill assessment (VB-MAPP, ABLLS-R, etc.) with graphs — Vineland alone bounces.' },
      { title: 'School schedule', desc: 'No school-setting ABA; school-hours treatment requires CSE contact first — capture the school picture at intake.' },
      { title: 'Credentialing + MMIS status', desc: 'Both must be complete before serving Fidelis members — confirm before quoting start dates.' },
      { title: 'Waitlist-workaround eligibility', desc: 'If no diagnostic slot within 6 months and the member is in/recently in ABA, pursue the letter of confirmation.' },
    ],
    sources: [
      { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' },
      { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. Fidelis applies the same under-21 eligibility and adds F84.3 to the diagnosis list it will accept.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
      },
      dxRecency: {
        value:
          'The strictest recency stack in New York, and it runs on two clocks. The diagnostic evaluation supporting the request must be within 2 years of the authorization request, and an initial request additionally needs a DSM-5 diagnosis made with a validated assessment tool administered within the past 60 months (the instrument rule does not re-trigger for continuing services). Fidelis also publishes a genuine waitlist workaround: where a diagnostic assessment cannot be obtained within 6 months of the request, it will accept a letter of confirmation from a NYS-licensed qualified professional to start services, provided the member is in or recently was in ABA. Treatment plans then update every 6 months, and the Medical Director may tighten review frequency.',
        status: 'verified',
        cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }, { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. Fidelis adds its own escape hatch rather than its own credential: where the diagnostic assessment cannot be scheduled within 6 months, a letter of confirmation from a NYS-licensed qualified professional will start services for a member already in or recently in ABA.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
      },
      diagnosticTools: {
        value:
          'Named instruments, with graphs \u2014 this is where Fidelis departs hardest from the state baseline. The treatment request must show results from at least one specified functional behavior assessment (descriptive FBA, traditional functional analysis, or IISCA) and/or a named skill assessment \u2014 VB-MAPP, ABLLS-R, AFLS, PEAK, SSIS, EFL or Socially Savvy \u2014 with graphs and tables attached; a Vineland alone is explicitly insufficient. Initial requests separately need the DSM-5 diagnosis made with a validated diagnostic tool administered within the past 60 months. Concurrent review is the heaviest in the state: updated graphs and goal-grid performance, one session note per month for each authorized CPT code including supervision and family-guidance notes, an updated assessment scoring grid, an updated treatment plan, and a signed visit attestation.',
        status: 'verified',
        cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. On top of that, Fidelis is authorization-based: a behavioral assessment by a BCBA/LBA-equivalent must be completed before treatment is requested, and requests run through the Fidelis Provider Portal with the ABA form on the Provider Policies page. Every ABA practitioner must complete both Fidelis credentialing and MMIS Medicaid enrollment before serving members.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }, { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' }],
      },
      telehealth: {
        value:
          'Not published. Neither Fidelis\u2019s ABA clinical policy nor its provider tip sheet states which ABA codes may be delivered by telehealth or under which place-of-service code, and the state\u2019s own ABA manual answers telehealth only for supervision. What Fidelis does publish about setting cuts the other way: no ABA in school settings since September 1, 2023, and treatment during school hours requires contacting the local Committee on Special Education for an independent evaluation first.',
        status: 'unverified',
        cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }, { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' }],
        verifyVia:
          'Fidelis provider services and the ABA form on the fideliscare.org Provider Policies page \u2014 confirm telehealth code eligibility and POS in writing before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Fidelis adds a documentation consequence rather than a different ratio: concurrent review requires one session note per month for each authorized CPT code, supervision notes included.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Fidelis\u2019s ABA policy governs medical necessity and documentation, not claim edits, and says nothing about billing 97153 and 97155 for the same clock time; the state manual is silent too.',
        status: 'unverified',
        cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Fidelis provider services and the plan\u2019s claim-editing/reimbursement policies on fideliscare.org.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No hard cap \u2014 Fidelis frames intensity as a model rather than a ceiling: Focused ABA at 10\u201325 hours per week versus Comprehensive at 30\u201340, with requested hours justified against the member\u2019s age, school attendance and daily activities. Discharge is expected \u201cwhen there\u2019s no measurable improvement for 6+ months without a reasonable expectation that a revised plan would help.\u201d The practical ceiling is the authorized units, and claims are due within 90 days of the date of service \u2014 a short window that punishes slow authorization cleanup.',
        status: 'verified',
        cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }, { title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' }],
      },
      noteSignature: {
        value:
          'Fidelis requires \u201ca signed visit attestation\u201d at concurrent review alongside one session note per month for every authorized CPT code (supervision and family-guidance notes included), updated graphs and goal-grid performance, an updated assessment scoring grid and an updated treatment plan. The signer of the individual session note is not specified by Fidelis, so the state rule governs underneath: the supervising LBA must review and sign treatment notes and reports prepared by a CBAA supervisee.',
        status: 'verified',
        cites: [{ title: 'Fidelis ABA Clinical Policy FC.CP.BH.301.04', url: 'https://www.fideliscare.org/Portals/0/Providers/Applied-Behavior-Analysis-Policy-FC.BH.301.04.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      placeOfService: {
        value:
          'Stricter than the state baseline in one respect and equal in the rest. New York Medicaid already does not reimburse ABA in a school setting; Fidelis stopped covering school-setting ABA specifically on September 1, 2023, and adds a coordination gate for treatment during school hours \u2014 providers \u201cmust first contact the local Committee on Special Education for an independent evaluation,\u201d which makes a school-hours request a coordination project rather than a form field. Home, clinic and community remain available per the state\u2019s any-legally-authorized-setting rule.',
        status: 'verified',
        cites: [{ title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Fidelis publishes no rendering-versus-supervising NPI convention of its own; what it does require is that \u201cevery ABA practitioner must complete both Fidelis credentialing and MMIS Medicaid enrollment before serving members,\u201d which mirrors the state\u2019s enrollment architecture. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Confirm the managed-care claim format with Fidelis, since the state manual directs MMC providers to their plan for billing guidance.',
        status: 'verified',
        cites: [{ title: 'Fidelis ABA Provider Tip Sheet (01/01/2026)', url: 'https://www.fideliscare.org/Portals/0/Providers/TipSheets/ABA-Provider-Tip-Sheet.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Fidelis provider services for the MMC claim format \u2014 the eMedNY convention above is the FFS reference, not a Fidelis-published rule.',
      },
    },
    faq: [
      { q: 'Does Fidelis Care cover ABA therapy?', a: 'Yes — for NY Medicaid members under 21 with ASD or Rett syndrome, under its own Centene-derived clinical policy: assessment completed first, treatment authorized with named instruments and graphed data, and 6-month reauthorization cycles.' },
      { q: 'How recent does the autism diagnosis need to be for Fidelis?', a: 'Initial requests need a DSM-5 diagnosis using a validated assessment tool administered within the past 60 months, and the supporting diagnostic evaluation must be within 2 years of the authorization request. Continuing services don\'t re-trigger the instrument rule.' },
      { q: 'Can ABA be delivered in schools for Fidelis members?', a: 'No — Fidelis stopped covering school-setting ABA September 1, 2023. For treatment during school hours, contact the local Committee on Special Education for an independent evaluation first.' },
    ],
  },

  'unitedhealthcare-community-plan-new-york': {
    slug: 'unitedhealthcare-community-plan-new-york',
    family: 'unitedhealthcare',
    cardDesc: 'State-baseline clinical criteria, but ALL ABA services are PA-gated through Optum\'s Provider Express.',
    assessmentPA: {
      value: 'Required — "all ABA services require prior authorization"; assessment auth via the online ABA request on providerexpress.com',
      status: 'verified',
      cites: [{ title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }],
    },
    treatmentPA: {
      value: 'Required — via Provider Express or the Autism Care Advocate; claims deny without an auth on file, and additional units need a new PA',
      status: 'verified',
      cites: [{ title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }],
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD/Rett per DSM-5, with the 2-year practitioner referral incl. the DSM-5 checklist',
      status: 'verified',
      cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'UnitedHealthcare Community Plan of New York',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · UHC Community Plan (NY)',
    h1: 'UnitedHealthcare Community Plan of New York ABA coverage (Medicaid Managed Care).',
    metaTitle: 'UHC Community Plan New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers NY Medicaid ABA — Optum/United Behavioral Health of New York UM, universal prior authorization via providerexpress.com, state-deferent clinical criteria, and telehealth rules for supervision and caregiver training.',
    intro: [
      'UnitedHealthcare Community Plan of New York hands its ABA benefit to Optum (United Behavioral Health of New York, I.P.A., Inc.) — and Optum\'s orientation for the plan says it plainly: all ABA services require prior authorization. The clinical criteria underneath are deliberately state-deferent — Optum\'s New York Medicaid entry in its national State Mandates document copies the state\'s eligibility and referral rules essentially verbatim — so the work at this plan isn\'t arguing medical necessity against a foreign standard; it\'s running the state\'s own rules through Optum\'s PA machinery on providerexpress.com.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC + HARP (United HealthCare of NY, Inc.)' },
      { label: 'UM vendor', value: 'Optum — United Behavioral Health of New York, I.P.A., Inc.' },
      { label: 'Prior auth', value: 'Required on ALL ABA services — assessment and treatment alike' },
      { label: 'Portal', value: 'providerexpress.com (online ABA requests; auth status viewable)' },
      { label: 'Clinical criteria', value: 'State baseline per Optum\'s BH803ABA NY Medicaid/CHP entry (under 21, ASD/Rett, 2-year referral)' },
      { label: 'Telehealth', value: '97155 supervision + 97156/97157 caregiver training, POS 02, once approved as a virtual-visits provider' },
    ],
    sections: [
      {
        h2: 'Everything is PA-gated — the inverse of FFS',
        body: [
          'Where the state FFS layer needs only a referral, UHC\'s plan requires prior authorization for every ABA service. The assessment PA goes in as an online ABA Assessment request on providerexpress.com; the treatment PA follows through the portal or by calling the Autism Care Advocate with the member\'s name and ID, diagnosis, and a description of the treatment plan, and authorization status is viewable online. Two claim-killers to design around: claims deny without an authorization on file, and requesting additional units beyond the auth requires a new PA — "over limit" is a listed denial reason. No hour caps are published; treat authorized units as the operative ceiling.',
        ],
        cites: [
          { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
        ],
      },
      {
        h2: 'State-deferent criteria, Optum process',
        body: [
          'Optum\'s ABA State Mandates supplemental criteria (BH 803ABA, effective January 2026) carries an explicit "New York Medicaid and Child Health Plus (CHP)" entry that restates the state criteria: under 21, ASD and/or Rett syndrome, and the 2-year practitioner referral including the DSM-5 Diagnostic Checklist. So the referral packet you\'d assemble for FFS is the same clinical foundation here — the difference is that it feeds a PA request instead of going straight to service. Operational extras from the orientation: telehealth is allowed for supervision (97155) and caregiver training (97156/97157) once you\'re approved as a virtual-visits provider, billed with POS 02; and LBAs may form group practices, while CBAAs may work in one but cannot own one.',
        ],
        cites: [
          { title: 'Optum ABA State Mandates BH 803ABA STM12026 (Jan 2026) — NY Medicaid/CHP entry', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state referral packet', desc: 'The state\'s 2-year referral with DSM-5 checklist is the clinical core of the Optum PA — collect it first.' },
      { title: 'Member ID + plan line', desc: 'Mainstream MMC vs. HARP vs. CHP — and confirm the card actually says Community Plan, not UHC commercial.' },
      { title: 'Auth-before-service discipline', desc: 'Claims deny without an auth on file; never start sessions on a pending request.' },
      { title: 'Unit runway', desc: 'Additional units need a new PA — track burn-down and file before the auth exhausts.' },
      { title: 'Telehealth provider status', desc: 'Virtual 97155/97156/97157 requires virtual-visits approval; bill POS 02.' },
    ],
    sources: [
      { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869_01302025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
      { title: 'Optum ABA State Mandates BH 803ABA STM12026 (Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule, restated verbatim in Optum\u2019s own criteria: \u201cenrollees may be eligible for ABA if they are under age 21 and have received a diagnosis of autism spectrum disorder and/or Rett Syndrome as defined by the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5).\u201d No minimum age; no adult pathway.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule: Optum\u2019s New York Medicaid/CHP entry copies the state\u2019s referral clock \u2014 \u201creferrals for ABA services are valid for no more than two years\u201d and must include the date of initial diagnosis \u2014 and states no separate maximum age for the diagnostic evaluation. Optum\u2019s national criteria add no recency rule either; their clock is the review cycle.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule, restated in Optum\u2019s State Mandates supplement: \u201cthe NYS Medicaid member must be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician (including psychiatrists and developmental/behavioral pediatricians), psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant.\u201d Delivery is separate and state-specified: \u201cABA services are provided by Licensed Behavior Analyst (LBA), Certified Behavior Analyst Assistant (CBAA) working under the supervision of LBAs, or other individuals specified under Article 167 of NYS education law.\u201d',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: Optum\u2019s New York entry requires the referral to carry the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d and the symptom severity level/level of support, and names no instrument beyond that. Optum\u2019s national criteria do publish a two-tier instrument list (CARS-2, ADI-R, ADOS-2, DISCO for diagnosis; ATEC, VB-MAPP, ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland, CFQL-2 for setting intensity), but the New York Medicaid entry is the state-specific criteria set for this plan \u2014 confirm with the Autism Care Advocate which applies to a given request.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule for the clinical content \u2014 the 2-year practitioner referral with the seven required elements, DSM-5 checklist included \u2014 but the process is the inverse of fee-for-service: \u201call ABA services require prior authorization.\u201d The assessment PA goes in as an online ABA Assessment request on providerexpress.com; the treatment PA follows through the portal or by calling the Autism Care Advocate with the member\u2019s name and ID, diagnosis and a description of the treatment plan. Claims deny without an authorization on file, and requesting units beyond the authorization needs a new PA.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }],
      },
      telehealth: {
        value:
          'The most specific telehealth answer of any New York Medicaid plan: telehealth is allowed for supervision (97155) and caregiver training (97156 and 97157) once the practice is approved as a virtual-visits provider, billed with place of service 02. Direct technician-delivered treatment is not on that list. Optum\u2019s national criteria add only best-practice framing \u2014 telehealth options \u201care not intended to supplant in-person service; rather, they are intended to supplement the traditional in-person service delivery model.\u201d',
        status: 'verified',
        cites: [{ title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Optum layers network requirements on top: LBAs must hold active BCBA certification plus the New York license plus a NY Medicaid ID, CBAAs need their own Medicaid ID, and a virtual-visits attestation is required for telehealth supervision. \u201cLBAs may form a group practice. CBAAs may work in a group practice but cannot own a group practice.\u201d',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Optum\u2019s New York Medicaid entry restates state eligibility and referral rules and says nothing about billing 97153 and 97155 for the same clock time; the national Supplemental Clinical Criteria govern medical necessity rather than claim edits, and the state manual is silent.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The Autism Care Advocate line or Provider Express provider services, plus UnitedHealthcare Community Plan of New York\u2019s reimbursement policies.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No hour caps are published \u2014 treat the authorized units as the operative ceiling, because \u201cover limit\u201d is a listed denial reason and additional units require a new prior authorization rather than an adjustment. Optum\u2019s national criteria decline to set a numeric ceiling on evidence grounds and note that \u201cfull time ABA programs are rare,\u201d while flagging utilization below 80% of authorized hours at review.',
        status: 'verified',
        cites: [{ title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d Optum publishes no additional New York Medicaid signature rule; its national criteria require only that behavior analysts \u201cidentify their services accurately and include all required information on reports, bills, invoices, requests for reimbursement, and receipts.\u201d',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule, restated in Optum\u2019s State Mandates entry: \u201cLBAs and CBAAs may work in any setting that may legally provide ABA services. Examples of such settings may include: private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 and NYS Medicaid does not reimburse ABA in a school setting. Optum\u2019s national criteria exclude the same functional overlap: \u201c1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA),\u201d while allowing teacher training, meetings with school personnel and school observations as coordination.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      billAsProvider: {
        value:
          'Optum defers to the state and then to itself on enrollment: \u201cABA providers offering services to a Medicaid Managed Care (MMC) enrollee must contact the enrollee\u2019s specific MMC Plan(s) for coverage, billing, and reimbursement guidance,\u201d and network LBAs must carry a NY Medicaid ID alongside the license and BCBA certification, with CBAAs holding their own Medicaid ID. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Confirm the managed-care claim format on Provider Express before billing.',
        status: 'verified',
        cites: [{ title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Provider Express or the Autism Care Advocate line for the MMC claim format \u2014 the eMedNY roles above are the FFS reference.',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of New York cover ABA?', a: 'Yes — for NY Medicaid members under 21 with ASD or Rett syndrome, on the state\'s clinical criteria, but with prior authorization required on all ABA services through Optum\'s providerexpress.com portal.' },
      { q: 'How do I get an ABA authorization from UHC Community Plan NY?', a: 'Submit the online ABA Assessment request on providerexpress.com for the assessment, then the treatment request through the portal or the Autism Care Advocate line with member info, diagnosis, and the treatment plan. Status is viewable online.' },
      { q: 'Are UHC\'s clinical criteria different from the state\'s?', a: 'No — Optum\'s New York Medicaid/CHP entry copies the state criteria (under 21, ASD/Rett, 2-year referral with DSM-5 checklist). What differs is process: everything is PA-gated, unlike fee-for-service.' },
    ],
  },

  'anthem-healthplus-new-york': {
    slug: 'anthem-healthplus-new-york',
    family: 'anthem',
    cardDesc: 'Treatment Plan Request Form via Availity; Comprehensive-vs-Focused framing; incomplete forms returned.',
    treatmentPA: {
      value: 'Required — Treatment Plan Request Form for ASD (NY Medicaid) via Availity.com, with BCBA/QHCP information; incomplete forms are returned',
      status: 'verified',
      cites: [{ title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
    },
    assessmentPA: {
      value: 'Not published for the Medicaid line \u2014 Anthem\u2019s documented process is a treatment-plan-request workflow, and no policy answers whether 97151 itself needs PA; run assessments on the assumption a request may be needed and get the answer in writing per case',
      status: 'unverified',
      cites: [{ title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }, { title: 'Anthem NY provider news — ABA Services FAQ (article 13424)', url: 'https://providernews.anthem.com/new-york/articles/applied-behavior-analysis-services-faq-for-providers-13424' }],
      verifyVia:
        'Anthem’s ABA Services FAQ for New York providers (provider news article 13424) — the document that would settle whether 97151 itself needs a request. It was unretrievable at review time: the article page returns an empty JS shell and the Wayback Machine holds no capture. Until it can be read, Availity or Anthem NY Medicaid provider services, in writing per case.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD/Rett per DSM-5, with the state practitioner referral',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
    },
    payer: 'Anthem Blue Cross and Blue Shield HP (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Anthem HealthPlus (NY)',
    h1: 'Anthem Blue Cross and Blue Shield HP ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'Anthem HealthPlus New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield HP (formerly Empire BCBS HealthPlus) authorizes NY Medicaid ABA — the Treatment Plan Request Form via Availity, the Comprehensive-vs-Focused model classification, and what remains unpublished.',
    intro: [
      'Anthem HP, LLC — the Elevance plan formerly branded Empire BlueCross BlueShield HealthPlus — carries the NY Medicaid ABA carve-in with an Anthem-specific authorization layer on the state\'s eligibility baseline. The center of gravity is its Treatment Plan Request Form for Autism Spectrum Disorders (June 2026 revision — proof the plan is an active NY ABA payer), submitted through Availity. Like other Elevance plans, it sorts requests into Comprehensive versus Focused ABA, and it returns incomplete forms rather than pending them.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (Anthem HP, LLC; formerly Empire BCBS HealthPlus)' },
      { label: 'Treatment PA', value: 'Required — Treatment Plan Request Form via Availity (preferred method)' },
      { label: 'Intensity model', value: 'Form distinguishes Comprehensive vs. Focused ABA requests' },
      { label: 'Form details', value: 'Requires BCBA/QHCP information and age of first ABA treatment; incomplete forms returned' },
      { label: 'Clinical criteria', value: 'State eligibility baseline (under 21, ASD/Rett, referral) + Anthem PA overlay' },
      { label: 'Portal', value: 'Availity.com' },
    ],
    sections: [
      {
        h2: 'The Treatment Plan Request Form workflow',
        body: [
          'Treatment authorization runs on Anthem\'s Treatment Plan Request Form for Autism Spectrum Disorders — New York Medicaid (form NY-BCBS-CD-008303-26-GRP2461, June 2026 revision), submitted via Availity.com as the preferred channel. The form requires the treating BCBA/QHCP\'s information, captures the member\'s age at first ABA treatment, and classifies the request as Comprehensive or Focused ABA — the standard Elevance intensity-review framework, so expect requested hours to be weighed against that model. The operational rule that costs the most time: incomplete forms are returned, not worked — so treat every field as required and package the clinical documentation with the first submission.',
        ],
        cites: [
          { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' },
        ],
      },
      {
        h2: 'What Anthem doesn\'t publish — verify in the portal',
        body: [
          'Several operational facts have no published answer we could verify: whether the assessment code 97151 itself requires PA (the plan\'s published process is a treatment-plan-request workflow), whether Carelon Behavioral Health plays a UM role for ABA, and any hour caps or rates. Anthem also maintains an ABA Services FAQ for NY providers (provider news article 13424) that wasn\'t retrievable at review time. Until the plan confirms otherwise in Availity or through provider services, run assessments on the assumption a request may be needed, and get the answer in writing per case.',
        ],
        cites: [
          { title: 'Anthem NY provider news — ABA Services FAQ (article 13424)', url: 'https://providernews.anthem.com/new-york/articles/applied-behavior-analysis-services-faq-for-providers-13424' },
        ],
      },
    ],
    collect: [
      { title: 'BCBA/QHCP details', desc: 'The form requires the treating analyst\'s information — have credentials and NPI ready before submission.' },
      { title: 'ABA treatment history', desc: 'The form captures age of first ABA treatment — ask at intake, not at form time.' },
      { title: 'Comprehensive vs. Focused framing', desc: 'Classify the request deliberately and align requested hours with the model.' },
      { title: 'Complete state referral packet', desc: 'The state eligibility baseline still applies — referral, dx, severity, DSM-5 checklist.' },
    ],
    sources: [
      { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' },
      { title: 'Anthem NY provider news — ABA Services FAQ (article 13424)', url: 'https://providernews.anthem.com/new-york/articles/applied-behavior-analysis-services-faq-for-providers-13424' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. Anthem publishes no age rule of its own for the New York Medicaid line; its Treatment Plan Request Form captures the member\u2019s age at first ABA treatment rather than gating on current age.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule \u2014 the 2-year referral is the clock, and no maximum age is set on the diagnostic evaluation. Anthem publishes no recency rule of its own for the Medicaid line; what its form does capture is treatment history, including the age at which ABA was first received.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. Anthem\u2019s Treatment Plan Request Form requires the treating BCBA/QHCP\u2019s information but names no diagnosing credential of its own for the Medicaid line.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d Anthem\u2019s New York Medicaid form asks for the Comprehensive-versus-Focused classification and clinical documentation rather than a named instrument battery.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. Anthem\u2019s own gate sits on top: treatment authorization runs on the Treatment Plan Request Form for Autism Spectrum Disorders \u2014 New York Medicaid (form NY-BCBS-CD-008303-26-GRP2461, June 2026 revision), submitted through Availity.com as the preferred channel, with incomplete forms returned rather than pended. Whether assessment code 97151 needs its own prior authorization is not published.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
      },
      telehealth: {
        value:
          'Not published for the New York Medicaid line. Anthem\u2019s Treatment Plan Request Form does not state which ABA codes may be delivered remotely or under which place-of-service code, and no Anthem New York Medicaid telehealth policy for ABA was retrievable at review time (the plan\u2019s ABA Services FAQ for NY providers, provider news article 13424, was unavailable). The state\u2019s own ABA manual answers telehealth only for supervision.',
        status: 'unverified',
        cites: [{ title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Availity or Anthem NY provider services \u2014 and the plan\u2019s ABA Services FAQ for New York providers; get the telehealth answer in writing per case.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Anthem publishes no supervision ratio of its own for the New York Medicaid line; its form requires the treating BCBA/QHCP\u2019s information, which in New York must be an NYSED-licensed LBA (a BCBA credential alone does not qualify).',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
      },
      concurrentBilling: {
        value:
          'Not published for the New York Medicaid line. Anthem\u2019s Medicaid Treatment Plan Request Form is an authorization instrument, not a reimbursement policy, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Availity or Anthem NY Medicaid provider services, and Anthem\u2019s reimbursement policies for the New York Medicaid line.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No published hour cap for the New York Medicaid line. The form sorts requests into Comprehensive versus Focused ABA \u2014 the standard Elevance intensity-review framework \u2014 so expect requested hours to be weighed against that model rather than against a stated ceiling. Authorization periods, unit limits and rates are not published.',
        status: 'unverified',
        cites: [{ title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }],
        verifyVia:
          'Availity or Anthem NY Medicaid provider services \u2014 confirm authorization period, unit limits and any hour-cap logic per case in writing.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d Anthem publishes no additional session-note signature rule for its New York Medicaid line.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Anthem NY Medicaid provider services for any plan-specific documentation standard beyond the state rule.',
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. Anthem publishes no separate place-of-service rule for the New York Medicaid line; the state\u2019s school bar is the operative constraint.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Availity or Anthem NY Medicaid provider services for any plan-specific setting restriction.',
      },
      billAsProvider: {
        value:
          'Not published for the New York Medicaid line \u2014 Anthem\u2019s form collects the treating BCBA/QHCP\u2019s information but states no rendering-versus-supervising NPI convention. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Because the state manual directs managed-care providers to their plan for billing guidance, confirm the Anthem claim format in Availity before billing CBAA- or technician-delivered units.',
        status: 'unverified',
        cites: [{ title: 'Anthem NY Medicaid ABA Treatment Plan Request Form (June 2026)', url: 'https://providers.anthem.com/docs/gpp/NY_ABC_CAID_ABA_AuthReqForm.pdf?v=202411221617' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Availity or Anthem NY Medicaid provider services \u2014 confirm the rendering/supervising NPI convention and any modifier requirement in writing.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem HealthPlus cover ABA in New York?', a: 'Yes — it carries the NY Medicaid ABA carve-in for members under 21 with ASD/Rett, with treatment authorized via its Treatment Plan Request Form submitted through Availity. The June 2026 form revision confirms it remains an active NY ABA payer.' },
      { q: 'Does the ABA assessment need prior authorization at Anthem NY?', a: 'No published policy answers that for 97151 specifically — the documented process is the treatment-plan-request workflow. Verify per case in Availity or with provider services, and get the answer in writing.' },
      { q: 'Why was our Anthem ABA request returned?', a: 'Anthem returns incomplete Treatment Plan Request Forms rather than pending them. Complete every field — including BCBA/QHCP information and the Comprehensive/Focused classification — and attach clinical documentation up front.' },
    ],
  },

  'healthfirst-new-york': {
    slug: 'healthfirst-new-york',
    cardDesc: 'Own ABA authorization policy; PA routed through Availity Essentials — policy text unpublished, verify.',
    assessmentPA: {
      value: 'Not published for the Medicaid line \u2014 on Healthfirst\u2019s commercial small/large group plans all of 97151\u201397158 require PA; confirm the Medicaid ABA workflow in Availity Essentials before booking',
      status: 'unverified',
      cites: [{ title: 'Healthfirst — prior authorization through Availity', url: 'https://hfproviders.org/resource-posts/prior-auth-through-availity' }, { title: 'Healthfirst — ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
      verifyVia:
        'The current Healthfirst ABA authorization policy — the prior version circulated as doc 0374-22, and an updated version is announced with a reported October 2026 effective date. The PDF 404s on hfproviders.org, so request the current text from provider services (1-888-801-1660) and confirm the Medicaid ABA workflow in Availity Essentials.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required under Healthfirst\u2019s own ABA authorization policy (updated version announced, reported October 2026 effective date), submitted through the Availity Essentials Online Authorization Tool with \u201cHealthfirst (New York)\u201d as the payer \u2014 the policy text itself was unavailable at review time',
      status: 'unverified',
      cites: [{ title: 'Healthfirst — prior authorization through Availity', url: 'https://hfproviders.org/resource-posts/prior-auth-through-availity' }, { title: 'Healthfirst — ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
      verifyVia:
        'The current Healthfirst ABA authorization policy — the prior version circulated as doc 0374-22, and an updated version is announced with a reported October 2026 effective date. The PDF 404s on hfproviders.org, so request the current text from provider services (1-888-801-1660) and confirm the Medicaid ABA workflow in Availity Essentials.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD/Rett per DSM-5, with the state practitioner referral',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Healthfirst — ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
    },
    payer: 'Healthfirst (New York)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Healthfirst (NY)',
    h1: 'Healthfirst ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'Healthfirst New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Healthfirst handles NY Medicaid ABA — its own ABA authorization policy, prior authorization through the Availity Essentials tool, the state supervision rules applied to Healthfirst plans, and what couldn\'t be verified from published sources.',
    intro: [
      'Healthfirst — the large NYC-area provider-sponsored plan — maintains its own Policy for the Authorization of Applied Behavioral Analysis (ABA) Services, with an updated version announced with a reported effective date of October 2026. The honest caveat up front: the policy PDF itself was unavailable at review time, so this guide covers what\'s verified — the plan runs its own authorization machinery through Availity Essentials on top of state-baseline clinical criteria — and flags exactly what to confirm in the portal before promising a family timelines.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (HealthFirst PHSP, Inc.) — NYC-area footprint' },
      { label: 'Authorization', value: 'Plan-specific ABA authorization policy (updated version announced; text unpublished — verify)' },
      { label: 'PA portal', value: 'Availity Essentials Online Authorization Tool — select "Healthfirst (New York)" as payer' },
      { label: 'Commercial signal', value: 'On Healthfirst small/large group plans, 97151–97158 all require PA' },
      { label: 'Supervision', value: 'State 10/1/2025 rules (5% of tech hours, 2 monthly contacts) applied to Healthfirst plans' },
      { label: 'Provider services', value: '1-888-801-1660' },
    ],
    sections: [
      {
        h2: 'What\'s verified — and what isn\'t',
        body: [
          'Verified: Healthfirst publishes its own ABA authorization policy (the prior version circulated as doc 0374-22, with an updated version announced carrying a reported October 2026 effective date), routes prior authorization through the Availity Essentials Online Authorization Tool with "Healthfirst (New York)" selected as the payer, and — on its commercial small/large group lines — requires PA on the full ABA code range 97151–97158, a strong signal of an authorization-first posture. Also verified: Healthfirst republished the state\'s October 1, 2025 technician-supervision requirements verbatim on its provider site, applying them to Healthfirst plans. Not verified: the Medicaid-line specifics — whether 97151 needs PA, authorization periods, documentation requirements, hour-cap logic, and rates — because the policy PDF 404s. Pull the current policy from hfproviders.org or provider services (1-888-801-1660) and confirm the Medicaid ABA workflow in Availity before committing to start dates.',
        ],
        cites: [
          { title: 'Healthfirst provider page — ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' },
          { title: 'Healthfirst — prior authorization through Availity', url: 'https://hfproviders.org/resource-posts/prior-auth-through-availity' },
        ],
      },
      {
        h2: 'The state baseline still does the clinical work',
        body: [
          'Healthfirst\'s published ABA content mirrors the state program: members under 21 with ASD and/or Rett syndrome, the practitioner referral, and — per its supervision post — the state\'s LBA/CBAA structure with the 5%-of-tech-hours, two-contacts-per-month supervision rule. So the intake package is the same one the state FFS manual defines; the open question at this plan is purely the authorization mechanics layered on top. Build the referral packet to the state spec, then confirm Healthfirst\'s submission requirements against the live policy.',
        ],
        cites: [
          { title: 'Healthfirst provider page — ABA supervision requirements', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' },
          { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Current authorization policy', desc: 'The policy text is unpublished — pull the live version from hfproviders.org or provider services before quoting timelines.' },
      { title: 'Complete state referral packet', desc: 'Under-21 ASD/Rett dx, referral with severity and DSM-5 checklist — the clinical baseline is the state\'s.' },
      { title: 'Availity payer selection', desc: 'Submit PA through Availity Essentials with "Healthfirst (New York)" as the payer.' },
      { title: 'Line of business', desc: 'Medicaid vs. Healthfirst commercial — on commercial group plans, all of 97151–97158 require PA.' },
    ],
    sources: [
      { title: 'Healthfirst — ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' },
      { title: 'Healthfirst — prior authorization through Availity', url: 'https://hfproviders.org/resource-posts/prior-auth-through-availity' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. Healthfirst\u2019s published ABA content mirrors the state program rather than setting an age rule of its own.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule \u2014 the referral is valid no more than two years and no maximum age is set on the diagnostic evaluation itself. Healthfirst\u2019s own ABA authorization policy (the prior version circulated as doc 0374-22, with an updated version announced carrying a reported October 2026 effective date) was not retrievable at review time, so any plan-specific recency rule is unconfirmed.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Pull the current ABA authorization policy from hfproviders.org or Healthfirst provider services (1-888-801-1660) and confirm whether it adds a recency rule.',
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. Healthfirst republishes the state\u2019s LBA/CBAA structure on its provider site and names no additional diagnosing credential.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d No Healthfirst-specific instrument requirement was located; its policy PDF was unavailable at review time.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The current Healthfirst ABA authorization policy via hfproviders.org or provider services (1-888-801-1660).',
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. Healthfirst then runs its own authorization machinery on top: prior authorization goes through the Availity Essentials Online Authorization Tool with \u201cHealthfirst (New York)\u201d selected as the payer. On its commercial small and large group lines the full range 97151\u201397158 requires PA, a strong signal of an authorization-first posture; the Medicaid-line specifics are unconfirmed because the policy PDF 404s.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Healthfirst \u2014 prior authorization through Availity', url: 'https://hfproviders.org/resource-posts/prior-auth-through-availity' }],
        verifyVia:
          'Confirm the Medicaid ABA authorization workflow in Availity and pull the current policy from hfproviders.org before quoting start dates.',
      },
      telehealth: {
        value:
          'Not published. No Healthfirst ABA telehealth policy was located, and the plan\u2019s ABA content republishes the state\u2019s supervision rules rather than a service-delivery telehealth rule. The state\u2019s own manual answers telehealth only for supervision of unlicensed individuals, where synchronous audio-and-video is permitted.',
        status: 'unverified',
        cites: [{ title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Healthfirst provider services (1-888-801-1660) or the current ABA authorization policy on hfproviders.org \u2014 confirm code eligibility and POS before scheduling remote sessions.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Healthfirst republished the state\u2019s October 1, 2025 technician-supervision requirements verbatim on its provider site and applies them to Healthfirst plans: LBA supervision of at least 5% of each unlicensed individual\u2019s monthly service hours, at least two face-to-face real-time contacts per month with the LBA observing service delivery in one of them, and a maximum of six CBAAs/unlicensed individuals per LBA. That is the state rule, adopted by the plan rather than merely inherited.',
        status: 'verified',
        cites: [{ title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Healthfirst\u2019s retrievable ABA content covers supervision and the Availity authorization route; its ABA authorization policy PDF was unavailable at review time, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Healthfirst provider services (1-888-801-1660) and the current ABA authorization policy on hfproviders.org.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published for the Medicaid line \u2014 authorization periods, unit limits and hour-cap logic all sit in the ABA authorization policy that was unavailable at review time. What is verified is the authorization posture: on Healthfirst\u2019s commercial small and large group plans all of 97151\u201397158 require prior authorization, so treat authorized units as the ceiling and confirm the Medicaid rule before booking.',
        status: 'unverified',
        cites: [{ title: 'Healthfirst \u2014 prior authorization through Availity', url: 'https://hfproviders.org/resource-posts/prior-auth-through-availity' }, { title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
        verifyVia:
          'The current Healthfirst ABA authorization policy via hfproviders.org, or provider services (1-888-801-1660).',
        blocker: 'document',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d Healthfirst adds one documented deviation of its own: record retention stretches to 10 years for its managed-care providers, against the state\u2019s six-year/age-22 floor.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. No Healthfirst-specific setting rule was located.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Healthfirst provider services (1-888-801-1660) or the current ABA authorization policy for any plan-specific setting restriction.',
      },
      billAsProvider: {
        value:
          'Not published. Healthfirst states no rendering-versus-supervising NPI convention in its retrievable ABA content. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Because the state directs managed-care providers to their plan for billing guidance, confirm the Healthfirst claim format before billing CBAA- or technician-delivered units.',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Healthfirst \u2014 ABA supervision requirements (eff. 10/1/2025)', url: 'https://hfproviders.org/resource-posts/applied-behavior-analysis-supervision-requirements' }],
        verifyVia:
          'Healthfirst provider services (1-888-801-1660) and the current ABA authorization policy on hfproviders.org.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Healthfirst cover ABA therapy?', a: 'Yes — it carries the NY Medicaid ABA carve-in on the state\'s clinical baseline (under 21, ASD/Rett, practitioner referral) and maintains its own ABA authorization policy, with PA submitted through Availity Essentials.' },
      { q: 'Does Healthfirst require prior authorization for the ABA assessment?', a: 'On its commercial group plans, yes — 97151–97158 all require PA. For the Medicaid line, the policy text was unavailable at review time; confirm the current policy via hfproviders.org or provider services (1-888-801-1660) before booking.' },
      { q: 'Do the state\'s new supervision rules apply at Healthfirst?', a: 'Yes — Healthfirst republished the state\'s October 2025 requirements (LBA supervision of at least 5% of technician hours, 2 monthly face-to-face contacts, max 6 supervisees) as applying to its plans.' },
    ],
  },

  'metroplus-health-new-york': {
    slug: 'metroplus-health-new-york',
    cardDesc: 'NYC H+H plan; auth via email/fax to CSS; unique quirk: diagnosis must be re-validated annually.',
    treatmentPA: {
      value: 'Required — authorization requests and clinical information go to MetroPlus CSS by email or fax (per the 2023 benefit notice)',
      status: 'verified',
      cites: [{ title: 'MetroPlusHealth notice — 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }],
    },
    assessmentPA: {
      value: 'Not published \u2014 assessment-PA specifics, authorization periods and hour caps aren\u2019t in the materials we could verify; confirm with MetroPlus CSS per case',
      status: 'unverified',
      cites: [{ title: 'MetroPlusHealth notice — 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'MetroPlus provider authorization page', url: 'https://metroplus.org/providers/provider-resources/provider-authorization/' }],
      verifyVia:
        'MetroPlus CSS — the email/fax authorization intake named in the 2023 ABA benefit notice — or the metroplus.org provider authorization page. Ask specifically whether 97151 needs its own authorization, and get the answer in writing per case.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — state baseline plus a MetroPlus quirk: a comprehensive autism evaluation by a NYS-licensed clinician, authenticated and re-validated annually (LBAs don\'t qualify to validate it)',
      status: 'verified',
      cites: [{ title: 'MetroPlusHealth notice — 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'MetroPlusHealth (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · MetroPlusHealth (NY)',
    h1: 'MetroPlusHealth ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'MetroPlusHealth New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How MetroPlusHealth — the NYC Health + Hospitals plan — handles NY Medicaid ABA: email/fax authorization to CSS, the annual diagnosis-validation requirement that\'s stricter than the state\'s 2-year rule, and the NYC-only footprint.',
    intro: [
      'MetroPlusHealth, the NYC Health + Hospitals plan, carries the NY Medicaid ABA carve-in with two plan-specific wrinkles worth designing intake around. First, the mechanics are old-school: ABA authorization requests and clinical information go to MetroPlus CSS by email or fax, not a slick portal workflow. Second — and unique among the plans we profile — MetroPlus requires the autism diagnosis to be authenticated and re-validated annually by the member\'s treatment team, a stricter cadence than the state\'s 2-year referral rule, and it holds that LBAs don\'t meet the practitioner level to validate the diagnosis themselves.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (Metroplus Health Plan, Inc. — NYC Health + Hospitals)' },
      { label: 'Footprint', value: 'New York City only' },
      { label: 'Authorization channel', value: 'Email or fax to MetroPlus CSS — requests + clinical information' },
      { label: 'Diagnosis recency', value: 'Annual — diagnosis authenticated and re-validated every year (stricter than the state\'s 2-year referral)' },
      { label: 'Diagnostic evaluation', value: 'Comprehensive autism evaluation by a NYS-licensed clinician; LBAs can\'t validate the dx' },
      { label: 'Clinical criteria', value: 'State baseline (under 21, ASD/Rett) + MetroPlus overlays' },
    ],
    sections: [
      {
        h2: 'The annual diagnosis-validation quirk',
        body: [
          'MetroPlus states that LBAs do not meet the practitioner level to authenticate or validate an autism diagnosis — so ABA providers must coordinate with the member\'s treatment team (physician, psychologist, or other qualified NYS-licensed clinician) to have the diagnosis authenticated and validated annually. That\'s a materially tighter clock than the state\'s 2-year referral: for every MetroPlus family, intake should diary an annual diagnosis-revalidation task with the diagnosing or treating clinician, or reauthorization becomes an avoidable scramble. The underlying diagnostic requirement is a comprehensive autism evaluation by a NYS-licensed clinician accompanying or preceding the diagnosis.',
        ],
        cites: [
          { title: 'MetroPlusHealth notice — 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' },
        ],
      },
      {
        h2: 'Mechanics and what to verify',
        body: [
          'Per the plan\'s 2023 benefit notice, authorization requests and supporting clinical information are submitted to MetroPlus CSS by email or fax — build a submission template and a delivery-confirmation habit, since email/fax workflows lack a portal\'s status visibility. Assessment-PA specifics, authorization periods, hour caps, and rates aren\'t published in the materials we could verify; confirm current requirements with CSS or via the metroplus.org provider portal per case. The footprint is NYC-only, and the clinical baseline is the state\'s: under 21, ASD/Rett, practitioner referral.',
        ],
        cites: [
          { title: 'MetroPlusHealth notice — 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' },
          { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Comprehensive autism evaluation', desc: 'By a NYS-licensed clinician — it must accompany or precede the diagnosis, and an LBA\'s attestation doesn\'t count.' },
      { title: 'Annual revalidation plan', desc: 'Diary a yearly diagnosis-authentication task with the treatment team — MetroPlus\'s cadence is annual, not the state\'s 2 years.' },
      { title: 'CSS submission package', desc: 'Auth request + clinical information by email or fax — use a template and confirm receipt.' },
      { title: 'Complete state referral packet', desc: 'The state baseline (under 21, ASD/Rett, referral with DSM-5 checklist) still applies.' },
    ],
    sources: [
      { title: 'MetroPlusHealth notice — 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' },
      { title: 'MetroPlus provider authorization page', url: 'https://metroplus.org/providers/provider-resources/provider-authorization/' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. MetroPlus publishes no age rule of its own; its footprint, not its age rule, is the plan-specific limit \u2014 New York City only.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }],
      },
      dxRecency: {
        value:
          'Stricter than the state, and this is the fact to design intake around. Where New York Medicaid runs a 2-year referral clock, MetroPlus requires the autism diagnosis to be \u201cauthenticated and validated annually\u201d by the member\u2019s treatment team. Diary a yearly diagnosis-revalidation task with the diagnosing or treating clinician for every MetroPlus family, or reauthorization becomes an avoidable scramble.',
        status: 'verified',
        cites: [{ title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid referral rule, plus a MetroPlus exclusion that matters: LBAs \u201cdo not meet the practitioner level to authenticate or validate an autism diagnosis,\u201d so ABA providers must coordinate with the member\u2019s treatment team \u2014 physician, psychologist, or another qualified NYS-licensed clinician \u2014 to have the diagnosis authenticated and validated. The underlying requirement is a comprehensive autism evaluation by a NYS-licensed clinician accompanying or preceding the diagnosis.',
        status: 'verified',
        cites: [{ title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. MetroPlus requires \u201ca comprehensive autism evaluation by a NYS-licensed clinician\u201d behind the diagnosis but does not specify which instruments must sit inside it; the state baseline requires only the DSM-5 Diagnostic Checklist with the referral and the standardized assessment used, identified as appropriate.',
        status: 'verified',
        cites: [{ title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. MetroPlus\u2019s own mechanics are old-school: authorization requests and supporting clinical information go to MetroPlus CSS by email or fax rather than through a portal workflow, so build a submission template and a delivery-confirmation habit. Assessment-PA specifics and authorization periods are not published.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }],
        verifyVia:
          'MetroPlus CSS, or the metroplus.org provider portal, for assessment-PA specifics and authorization periods.',
      },
      telehealth: {
        value:
          'Not published. MetroPlus\u2019s 2023 ABA benefit notice covers the submission channel and the annual diagnosis-validation rule and says nothing about which ABA codes may be delivered remotely; the state manual answers telehealth only for supervision.',
        status: 'unverified',
        cites: [{ title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'MetroPlus CSS or the metroplus.org provider authorization page \u2014 confirm telehealth code eligibility and POS in writing before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d MetroPlus publishes no supervision ratio of its own; its plan-specific credential rule runs in the other direction, holding that LBAs do not meet the practitioner level to authenticate or validate the autism diagnosis.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }],
      },
      concurrentBilling: {
        value:
          'Not published. The 2023 benefit notice is a process document, not a reimbursement policy, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'MetroPlus CSS or provider services via the metroplus.org provider authorization page.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published \u2014 MetroPlus states no authorization periods, unit ceilings or hour caps in the materials that could be verified. Treat the authorized units as the ceiling and get the authorization period in writing with each approval, since the email/fax workflow gives no portal status visibility.',
        status: 'unverified',
        cites: [{ title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }, { title: 'MetroPlus provider authorization page', url: 'https://metroplus.org/providers/provider-resources/provider-authorization/' }],
        verifyVia:
          'MetroPlus CSS or the metroplus.org provider authorization page \u2014 confirm authorization period, unit limits and rates per case.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d MetroPlus publishes no additional session-note signature rule; its one documentation-cadence rule is the annual diagnosis authentication by the treatment team.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. No MetroPlus-specific setting rule was located; the footprint is the plan-specific constraint \u2014 New York City only.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'MetroPlus CSS for any plan-specific setting restriction.',
      },
      billAsProvider: {
        value:
          'Not published. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. MetroPlus states no managed-care claim convention of its own in the materials that could be verified, and the state manual directs MMC providers to their plan for billing guidance.',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MetroPlusHealth notice \u2014 2023 ABA benefit changes', url: 'https://metroplus.org/press/important-notice-to-our-applied-behavioral-analysis-aba-providers-regarding-2023-aba-benefit-changes/' }],
        verifyVia:
          'MetroPlus CSS or provider services \u2014 confirm the rendering/supervising NPI convention before billing CBAA- or technician-delivered units.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does MetroPlusHealth cover ABA therapy?', a: 'Yes — it carries the NY Medicaid ABA carve-in for NYC members under 21 with ASD/Rett, with authorization requests and clinical information submitted to MetroPlus CSS by email or fax.' },
      { q: 'How often does the autism diagnosis need to be validated at MetroPlus?', a: 'Annually — MetroPlus requires the diagnosis be authenticated and re-validated every year by the member\'s treatment team, and holds that LBAs don\'t meet the practitioner level to do it. That\'s stricter than the state\'s 2-year referral rule.' },
      { q: 'Is MetroPlus available outside New York City?', a: 'No — it\'s the NYC Health + Hospitals plan, with a New York City-only footprint.' },
    ],
  },

  'emblemhealth-new-york': {
    slug: 'emblemhealth-new-york',
    cardDesc: 'Published ABA content restates the state criteria verbatim; PA specifics unpublished — verify.',
    assessmentPA: {
      value: 'Not published \u2014 no distinct EmblemHealth ABA clinical policy was located; verify the assessment workflow in the emblemhealth.com provider portal and get the answer in writing',
      status: 'unverified',
      cites: [{ title: 'EmblemHealth — Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      verifyVia:
        'EmblemHealth provider services through the emblemhealth.com provider portal. Ask whether 97151 requires authorization on the Medicaid line, and whether Carelon Behavioral Health runs ABA utilization management — get the answer in writing per case.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Not published \u2014 the plan\u2019s ABA content restates the state criteria verbatim without authorization specifics; silence is not proof there is no PA, so confirm per case in the portal',
      status: 'unverified',
      cites: [{ title: 'EmblemHealth — Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      verifyVia:
        'EmblemHealth provider services through the emblemhealth.com provider portal. Ask whether the treatment codes require authorization and which entity adjudicates; the plan’s silence in public materials is not proof there is no PA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD/Rett per DSM-5, referral from the state\'s practitioner list',
      status: 'verified',
      cites: [{ title: 'EmblemHealth — Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'EmblemHealth (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · EmblemHealth (NY)',
    h1: 'EmblemHealth ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'EmblemHealth New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How EmblemHealth (HIP) handles NY Medicaid ABA — a published benefit that restates the state criteria verbatim, no distinct clinical policy located, and the PA questions to verify in the provider portal.',
    intro: [
      'EmblemHealth — operating NY Medicaid through its HIP entities (HIP of Greater New York, Westchester, and Nassau) — is the closest thing to a pure pass-through among the downstate plans: its published Medicaid ABA benefit content is a verbatim restatement of the state criteria effective with the January 1, 2023 carve-in, and we located no distinct EmblemHealth ABA clinical policy. That makes the state guide your clinical rulebook here — but it does not mean no PA exists. The plan\'s authorization specifics simply aren\'t published, so verify the process in the portal before booking.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (HIP of Greater NY / Westchester / Nassau)' },
      { label: 'Clinical rules', value: 'State criteria restated verbatim — no distinct ABA policy located' },
      { label: 'Prior auth', value: 'Not published — verify assessment and treatment PA in the provider portal' },
      { label: 'BH management', value: 'Carelon Behavioral Health historically manages Emblem BH (unconfirmed for ABA specifically)' },
      { label: 'Portal', value: 'emblemhealth.com provider portal' },
      { label: 'Carve-in date', value: 'January 1, 2023, with the statewide MMC carve-in' },
    ],
    sections: [
      {
        h2: 'A state-baseline plan — with unpublished plumbing',
        body: [
          'EmblemHealth\'s published ABA benefit page restates the state program: members under 21 with ASD and/or Rett syndrome per DSM-5, referred by the state\'s practitioner list, effective with the 2023 carve-in. No named assessment instruments, no plan-specific recency rules, no published intensity framework — the clinical criteria are the state\'s. What the public materials don\'t answer: whether the assessment or treatment requires prior authorization on the Medicaid line, what the authorization periods are, and whether Carelon Behavioral Health (which has historically managed Emblem\'s behavioral benefit) runs ABA UM. Treat those as portal questions — confirm the ABA authorization workflow through emblemhealth.com provider services per case, and get answers in writing.',
        ],
        cites: [
          { title: 'EmblemHealth — Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' },
          { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state referral packet', desc: 'Emblem\'s published criteria are the state\'s — the under-21 ASD/Rett referral with DSM-5 checklist is the clinical core.' },
      { title: 'PA confirmation in writing', desc: 'Authorization specifics are unpublished — confirm assessment and treatment PA per case via the portal.' },
      { title: 'HIP entity on the card', desc: 'Greater NY, Westchester, or Nassau — capture the exact entity for eligibility checks.' },
    ],
    sources: [
      { title: 'EmblemHealth — Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule, restated verbatim on EmblemHealth\u2019s own Medicaid ABA benefit page: members under 21 with ASD per DSM-5 and/or Rett syndrome, effective with the January 1, 2023 carve-in. No minimum age; no adult pathway.',
        status: 'verified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule: the referral is valid no more than two years and no maximum age is set on the diagnostic evaluation. EmblemHealth publishes no recency rule of its own \u2014 we located no distinct EmblemHealth ABA clinical policy, and its published benefit content is a verbatim restatement of the state criteria.',
        status: 'verified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule, restated on EmblemHealth\u2019s benefit page: referral from the state\u2019s practitioner list \u2014 a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric NP, pediatric NP or PA. LBAs and CBAAs may not diagnose or self-refer. No Emblem-specific credential was located.',
        status: 'verified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d EmblemHealth names no assessment instruments and publishes no plan-specific recency or intensity framework \u2014 its ABA content is the state criteria restated.',
        status: 'verified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. What EmblemHealth does not publish is whether it layers prior authorization on top: no distinct ABA clinical policy was located and the authorization specifics are absent from the public materials. That is not evidence there is no PA \u2014 verify the workflow in the emblemhealth.com provider portal before booking, and get the answer in writing.',
        status: 'verified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The emblemhealth.com provider portal or provider services \u2014 confirm whether assessment and treatment require prior authorization, and whether Carelon Behavioral Health runs ABA utilization management for the Medicaid line.',
      },
      telehealth: {
        value:
          'Not published. EmblemHealth\u2019s Medicaid ABA benefit page restates the state criteria and says nothing about telehealth delivery of ABA codes; the state manual answers telehealth only for supervision.',
        status: 'unverified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The emblemhealth.com provider portal or provider services \u2014 confirm telehealth code eligibility and place of service in writing per case.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d EmblemHealth publishes no supervision rule of its own \u2014 we located no distinct EmblemHealth ABA clinical policy, so the state rule is the whole answer here.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }],
      },
      concurrentBilling: {
        value:
          'Not published. No distinct EmblemHealth ABA clinical policy was located, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The emblemhealth.com provider portal or provider services; Carelon Behavioral Health has historically managed Emblem\u2019s behavioral benefit, but its role in ABA utilization management is unconfirmed.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published \u2014 authorization periods, unit ceilings and hour-cap logic are all absent from EmblemHealth\u2019s public ABA materials, and no distinct clinical policy was located. The state sets no per-day ceiling either.',
        status: 'unverified',
        cites: [{ title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The emblemhealth.com provider portal or provider services \u2014 confirm authorization periods and any unit limits per case in writing.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d No EmblemHealth-specific documentation or signature rule was located.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. EmblemHealth publishes no setting rule of its own; the state\u2019s school bar is the operative constraint.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }],
      },
      billAsProvider: {
        value:
          'Not published. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. EmblemHealth states no managed-care claim convention of its own, and the state manual directs MMC providers to their plan for billing guidance \u2014 so confirm the claim format with Emblem before billing CBAA- or technician-delivered units.',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'EmblemHealth \u2014 Medicaid ABA benefit page', url: 'https://www.emblemhealth.com/providers/resources/State-Sponsored-Programs/medicaid-applied-behavior-analysis-benefit-' }],
        verifyVia:
          'The emblemhealth.com provider portal or provider services \u2014 confirm the rendering/supervising NPI convention and the correct HIP entity for the member.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does EmblemHealth cover ABA therapy?', a: 'Yes — its Medicaid plans carry the NY ABA carve-in on the state criteria, restated verbatim in its published benefit content: under 21, ASD/Rett per DSM-5, with the state practitioner referral.' },
      { q: 'Does EmblemHealth require prior authorization for ABA?', a: 'The plan publishes no ABA-specific PA details — no distinct clinical policy was located. Verify the authorization workflow through the emblemhealth.com provider portal before booking, and get the answer in writing.' },
    ],
  },

  'molina-healthcare-new-york': {
    slug: 'molina-healthcare-new-york',
    family: 'molina',
    cardDesc: 'Ex-Affinity; ABA UM in-house since 9/2021 (formerly eviCore) — the classic stale-info trap.',
    assessmentPA: {
      value: 'PA-based per Molina\u2019s bulletin trail, but whether 97151 needs a separate authorization isn\u2019t published \u2014 confirm per case with provider services, in writing',
      status: 'unverified',
      cites: [{ title: 'Molina NY provider notice — ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
      verifyVia:
        'Molina NY provider services. Ask whether 97151 requires a separate authorization from treatment and for the current NY Medicaid PA code list, in writing per case — and disregard any eviCore-era instruction, which has been stale since 9/1/2021.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required \u2014 reviewed in-house by Molina\u2019s ABA care-review clinicians (including LBA reviewers) since the 9/1/2021 eviCore transition; route through Molina\u2019s own portal/Availity, never eviCore, and confirm the current PA code list from the NY Medicaid bulletins',
      status: 'verified',
      cites: [{ title: 'Molina NY provider notice — ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' }],
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD/Rett per DSM-5, with the state practitioner referral',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'Molina Healthcare of New York',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Molina Healthcare (NY)',
    h1: 'Molina Healthcare of New York ABA coverage (Medicaid Managed Care).',
    metaTitle: 'Molina Healthcare New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of New York (formerly Affinity) handles NY Medicaid ABA — in-house UM with LBA reviewers since the September 2021 eviCore transition, the stale-info traps that transition left behind, and what to verify per case.',
    intro: [
      'Molina Healthcare of New York — the plan formerly branded Affinity, including the TotalCare ("TONY") plan code — runs its ABA utilization management in-house, with LBA care-review clinicians evaluating assessments and treatment plans for medical necessity. The history matters operationally: ABA UM moved from eviCore to Molina effective September 1, 2021, with PA code changes following that October, and stale eviCore-era instructions still circulate. One nuance worth knowing at intake: "Affinity" isn\'t purely legacy branding — Molina still actively markets a co-branded "Affinity by Molina Healthcare" Medicaid Managed Care product for downstate members (Bronx, Brooklyn, Manhattan, Nassau, Orange, Queens, Rockland, Staten Island, Suffolk, Westchester), per Molina\'s own site, so a family naming "Affinity" may be describing a currently-valid downstate product rather than an outdated card. Molina\'s bulletin trail indicates ABA is PA-based, but the current process specifics aren\'t published in materials we could verify — so this guide covers the verified structure and the exact questions to close in the portal.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (formerly Affinity; incl. TotalCare "TONY" plan code)' },
      { label: 'UM vendor', value: 'In-house since 9/1/2021 — previously eviCore (stale-info trap)' },
      { label: 'Reviewers', value: 'Molina ABA care-review clinicians (LBA reviewers) assess medical necessity' },
      { label: 'Prior auth', value: 'PA-based per Molina\'s bulletin trail — current specifics unpublished; verify per case' },
      { label: 'Portal', value: 'Molina provider portal / Availity' },
      { label: 'Clinical criteria', value: 'State baseline (under 21, ASD/Rett); plan-specific overlays unverified' },
    ],
    sections: [
      {
        h2: 'The eviCore transition — and why old instructions still bite',
        body: [
          'Until September 1, 2021, Molina NY\'s ABA authorizations ran through eviCore; since then, assessments and treatment plans are reviewed in-house by Molina\'s ABA care-review clinicians, including LBA reviewers, with PA code changes effective October 1, 2021. That transition is the plan\'s defining operational fact: eviCore-era submission instructions, fax numbers, and code lists still surface in old provider packets and search results, and following them sends requests into a void. Anything referencing eviCore for Molina NY ABA is stale — route requests through Molina\'s own portal/Availity channel and confirm the current PA code list from the plan\'s NY Medicaid bulletins.',
        ],
        cites: [
          { title: 'Molina NY provider notice — changes to ABA prior authorization requirements', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' },
          { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' },
        ],
      },
      {
        h2: 'What to verify per case',
        body: [
          'Molina\'s current published materials don\'t answer the operational questions intake needs: whether 97151 requires PA separately from treatment, authorization periods, documentation requirements, hour-cap logic, or rates — and its clinical criteria versus the state baseline are unverified. Until the plan confirms otherwise, work from the state\'s clinical baseline (under 21, ASD/Rett, complete practitioner referral), submit through the current Molina portal, and confirm PA requirements per case with provider services in writing. Families transferred through the Affinity-to-Molina rebrand may also carry outdated card branding — verify plan identity on every inquiry.',
        ],
        cites: [
          { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' },
          { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Current plan identity', desc: 'Affinity and TotalCare ("TONY") cards are Molina now — verify against live eligibility, not the card art.' },
      { title: 'Complete state referral packet', desc: 'Under-21 ASD/Rett dx with the full referral payload — the clinical baseline while plan specifics stay unpublished.' },
      { title: 'PA confirmation in writing', desc: 'Molina\'s bulletin trail says PA-based, but specifics are unverified — confirm per case through provider services.' },
      { title: 'Post-2021 submission channel', desc: 'Ignore anything referencing eviCore — route through Molina\'s own portal/Availity.' },
    ],
    sources: [
      { title: 'Molina NY provider notice — ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' },
      { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
      { title: 'Molina Healthcare — Affinity by Molina Healthcare (NY Medicaid Managed Care) overview', url: 'https://www.molinahealthcare.com/members/ny/hp/affinity/medicaid/overvw/overvw.aspx' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. Molina publishes no age rule of its own for New York; its clinical criteria versus the state baseline are unverified in the materials we could reach.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule: the referral is valid no more than two years and no maximum age is set on the diagnostic evaluation. Molina publishes no New York recency rule of its own in the materials we could verify.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
        verifyVia:
          'Molina NY provider services and the NY Medicaid bulletins index \u2014 confirm whether Molina adds a diagnostic recency rule.',
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. Molina\u2019s published New York material identifies its reviewers rather than its diagnosticians: assessments and treatment plans are reviewed in-house by Molina ABA care-review clinicians, including LBA reviewers, since the September 1, 2021 move off eviCore.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY provider notice \u2014 ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d No Molina-specific instrument requirement was located for New York.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
        verifyVia:
          'Molina NY provider services \u2014 confirm whether the in-house LBA reviewers expect named instruments.',
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. Molina\u2019s bulletin trail indicates ABA is prior-authorization-based, but the current process specifics are not published in materials we could verify. The one operational certainty is the routing: anything referencing eviCore for Molina New York ABA is stale \u2014 utilization management moved in-house effective September 1, 2021, with PA code changes following that October, so route requests through Molina\u2019s own portal or Availity.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY provider notice \u2014 ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
        verifyVia:
          'Molina NY provider services \u2014 confirm per case, in writing, whether 97151 requires PA separately from treatment and what the current PA code list is.',
      },
      telehealth: {
        value:
          'Not published. Molina\u2019s retrievable New York materials cover the eviCore transition and the bulletin index; no ABA telehealth policy was located, and the state manual answers telehealth only for supervision.',
        status: 'unverified',
        cites: [{ title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Molina NY provider services or the NY Medicaid bulletins index at molinahealthcare.com \u2014 confirm telehealth code eligibility and POS in writing.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Molina publishes no supervision rule of its own for New York; note that its in-house reviewers include LBAs, so a supervision plan that meets the state rule is what a Molina reviewer will be reading against.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY provider notice \u2014 ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' }],
      },
      concurrentBilling: {
        value:
          'Not published. Molina\u2019s New York bulletin trail covers the eviCore transition and PA code changes rather than claim edits, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Molina NY provider services and the NY Medicaid bulletins index \u2014 confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published \u2014 authorization periods, unit ceilings, hour-cap logic and rates are all absent from the Molina New York materials we could verify. The state sets no per-day ceiling either.',
        status: 'unverified',
        cites: [{ title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Molina NY provider services \u2014 confirm authorization periods and any unit limits per case in writing.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d No Molina-specific New York documentation or signature rule was located.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. No Molina-specific New York setting rule was located; the state\u2019s school bar is the operative constraint.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY Medicaid bulletins index', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/bulletin.aspx' }],
      },
      billAsProvider: {
        value:
          'Not published. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Molina states no New York managed-care claim convention we could verify \u2014 and given the eviCore-era instructions still circulating, confirm the current submission channel and claim format with Molina rather than an old provider packet.',
        status: 'unverified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Molina NY provider notice \u2014 ABA prior authorization changes', url: 'https://www.molinahealthcare.com/providers/ny/medicaid/comm/-/media/Molina/PublicWebsite/PDF/Providers/ny/medicaid/Prior%20Authorization%20Update_Provider_Notice_for_ABA' }],
        verifyVia:
          'Molina NY provider services \u2014 confirm the current portal/Availity route, the PA code list, and the rendering/supervising NPI convention.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of New York cover ABA?', a: 'Yes — it carries the NY Medicaid ABA carve-in, with assessments and treatment plans reviewed in-house by Molina\'s ABA care-review clinicians (including LBA reviewers). Its bulletin trail indicates PA-based authorization; confirm current specifics per case.' },
      { q: 'Do I still submit Molina NY ABA requests through eviCore?', a: 'No — eviCore hasn\'t handled Molina NY ABA since September 1, 2021. UM is in-house; route requests through Molina\'s portal/Availity and treat any eviCore-referencing instructions as stale.' },
      { q: 'Is Molina the same as Affinity in New York?', a: 'Yes — Molina acquired Affinity, and most Affinity branding is legacy card art now covered by Molina. But note: Molina still actively operates a co-branded "Affinity by Molina Healthcare" Medicaid Managed Care product for downstate members, so "Affinity" can also be a currently-valid plan name, not only an old card — verify plan identity either way on any inquiry.' },
    ],
  },

  'aetna-new-york': {
    slug: 'aetna-new-york',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the NY autism mandate: no ABA-only visit caps, no age limit, LBA-only.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
    },
    payer: 'Aetna in New York',
    state: 'NY', kind: 'commercial',
    pill: 'Payer Guide · Aetna · New York',
    h1: 'Aetna ABA coverage in New York: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in New York: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for New York families — the national clinical policy, prior authorization, the NY autism mandate (no age limit, no ABA-only visit caps, exemptions), NYSED LBA licensure, and what intake should verify.',
    intro: [
      'For an intake team in New York, an Aetna card means three layers at once: the carrier\'s national clinical policy, New York\'s autism insurance mandate (Ins. Law §§ 3216(i)(25), 3221(l)(17), 4303(ee)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — with the two New York-specific facts that surprise out-of-state operators: the mandate bars ABA-only visit caps outright (the old 680-hour ceiling was repealed in 2020), and only NYSED-licensed behavior analysts can deliver mandated ABA — a BCBA alone is not enough.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'NY Ins. Law §§ 3216(i)(25), 3221(l)(17), 4303(ee) — eff. Nov 1, 2012' },
      { label: 'Mandate age', value: 'No age limit in the mandate or DFS Circular Letter 6 (2014)' },
      { label: 'Mandate cap', value: 'None permitted — the statute bars visit limits applied solely to ASD treatment (the 680-hour cap was repealed eff. 1/1/2020)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans (federal preemption)' },
      { label: 'Licensure', value: 'NYSED Licensed Behavior Analyst (LBA) — BCBA alone insufficient' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New York',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in New York is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in New York.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The New York mandate: no ABA-only caps, no age limit, LBA-delivered',
        body: [
          'New York\'s autism mandate — enacted via S.5845 (2011), effective for policies issued or renewed on or after November 1, 2012, and implemented through DFS Insurance Circular Letter No. 6 (2014) — requires every state-regulated policy providing physician/medical coverage (individual, group, Article 43/HMO, student plans, municipal cooperatives) to cover screening, diagnosis, and treatment of ASD, including ABA. Three features define it. No age limit: unlike Medicaid\'s under-21 rule, neither the statute nor CL 6 sets one, so adult ABA cases are mandate-covered on fully-insured plans. No ABA-only limits: the 680-hour annual ceiling was struck from the statute effective January 1, 2020, and the current text instead bars a policy from containing “any limitations on visits that are solely applied to the treatment of autism spectrum disorder.” Cost-sharing still applies, but only on the same terms as other benefits. Any ABA-specific hour or visit ceiling on a fully-insured New York plan is a parity red flag to escalate — not an hours budget to plan around. (The 680-hour figure still circulates widely, including in DFS Circular Letter No. 6 (2014), which predates the repeal.) And a credential gate: since October 11, 2014, mandated ABA must be provided or supervised by NYSED-licensed LBAs or CBAAs — BACB certification alone doesn\'t satisfy it. Self-funded ERISA plans sit outside the mandate by preemption; MHPAEA parity applies to ABA as a behavioral health benefit either way. (Bills to reinstate an hours ceiling have been introduced in consecutive sessions and none has passed; treat the repeal as current law until one does.)',
        ],
        cites: [
          { title: 'DFS Insurance Circular Letter No. 6 (2014) — Standards for Insurance Coverage for ABA', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
          { title: 'NY Insurance Law § 3216(i)(25) — current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' },
        ],
      },
      {
        h2: 'No New York-specific Aetna policy — and no Aetna Medicaid ABA plan here',
        body: [
          'We checked: Aetna publishes no New York-specific ABA policy, form, or supplement — the national CPBs, national precert forms, and the state mandate are the whole picture, with the no-ABA-only-limits rule and the LBA credential gate reaching Aetna\'s fully-insured NY plans through the Insurance Law rather than any Aetna document. One adjacent trap: Aetna Better Health appears in New York\'s Medicaid directory only as a Partial LTC (MLTC) plan — it is not a mainstream children\'s Medicaid plan, so unlike most states there is no Aetna Medicaid ABA line in New York. A family with an Aetna card in NY is a commercial family.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'eMedNY — Managed Care Information plan directory (v2026-2)', url: 'https://www.emedny.org/providermanuals/allproviders/pdfs/information_for_all_providers_managed_care_information.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in New York',
        body: [
          'New York is one of the strictest licensure states: practicing ABA requires the NYSED Licensed Behavior Analyst (LBA) credential under Education Law Article 167 (§§ 8800–8808; regulations at 8 NYCRR 79-17/79-18), administered by NYSED\'s Office of the Professions — a BCBA alone cannot practice or bill, and the mandate itself conditions commercial ABA coverage on LBA/CBAA delivery or supervision. Practice must be pursuant to a diagnosis and prescription/order from an authorized licensed professional, and §8802 has expanded the licensed scope beyond ASD to behavioral health conditions in the current DSM. On rates: Aetna does not publish commercial ABA fee schedules for New York (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
          { title: 'NYSED Office of the Professions — Article 167 (Ed. Law §§ 8800–8808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Any ABA-specific visit or hour cap on the plan', desc: 'Fully-insured NY plans may not limit visits solely for ASD — if a plan quotes an ABA-only ceiling, capture it verbatim and escalate it as a parity issue.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Supervising LBA', desc: 'Mandated ABA must be LBA/CBAA-provided or supervised — confirm the NYSED license, not just BCBA status.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
      { title: 'NYSED — Article 167 (Ed. Law §§ 8800–8808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' },
      { title: 'eMedNY — Managed Care Information plan directory (v2026-2)', url: 'https://www.emedny.org/providermanuals/allproviders/pdfs/information_for_all_providers_managed_care_information.pdf' },
      { title: 'NY Insurance Law § 3216(i)(25) — current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'No age limit, and in New York that is the statute speaking, not just the carrier. Aetna\u2019s national policies (CPB 0554 and CPB 0648) set no upper or lower age bound for ABA, and the New York mandate sets none either \u2014 neither the Insurance Law nor DFS Circular Letter No. 6 (2014) carries one, so adult ABA cases are mandate-covered on fully-insured plans. This is the sharpest contrast with New York Medicaid, which stops at 21. Self-funded ERISA plans sit outside the mandate, so plan funding type still decides.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }],
      },
      dxRecency: {
        value:
          'Aetna\u2019s policies are silent on how recent the diagnostic evaluation must be, and set no re-evaluation interval, so recency is a plan-document and utilization-review question. Reauthorization is commonly on a roughly six-month cadence, which is the practical clock intake should plan around. New York\u2019s mandate imposes no recency rule of its own on commercial plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Aetna precertification intake (form GR-69017-4 via Availity or phone) \u2014 ask what evaluation age the reviewer will accept and get it in writing per case.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'CPB 0648 frames the diagnosis as made by an \u201cappropriate certified/licensed health care professional\u201d and names the professional types it contemplates in an ASD workup \u2014 board certified behavioral analyst, developmental pediatrician, neurologist, occupational therapist, physical therapist, primary care provider, psychiatrist, psychologist, and speech-language pathologist and audiologist. New York narrows this from the other direction: NYSED bars LBAs and CBAAs from diagnosing the condition ABA is provided for and from prescribing or ordering ABA for a particular individual, and tells LBAs to verify a client\u2019s ASD diagnosis before providing services. So the diagnosis must come from someone other than your analyst.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
      },
      diagnosticTools: {
        value:
          'CPB 0648 names four ASD instruments \u2014 the Autism Diagnostic Interview-Revised (ADI-R), Autism Diagnostic Observation Schedule-2nd edition (ADOS-2), Childhood Autism Rating Scale 2nd edition (CARS-2) and Asperger Syndrome Diagnostic Scale \u2014 without stating that any one of them is mandatory for an ABA authorization. Treat the list as the instruments Aetna recognizes rather than a required battery, and confirm per case at precertification. New York\u2019s mandate names no instruments.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }],
        verifyVia:
          'Aetna precertification (form GR-69017-4) \u2014 confirm which instrument results the reviewer requires for the specific plan.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Aetna\u2019s ABA policies are silent on referrals and orders, but New York supplies the requirement through two independent routes that ask for the same document. NYSED bars an LBA or CBAA from prescribing or ordering ABA, and DFS conditions coverage on ABA being provided or supervised by an LBA (or a CBAA supervised by one) \u2014 while the mandate itself defines covered treatment as that \u201cprescribed or ordered for an individual diagnosed with autism spectrum disorder by a licensed physician or a licensed psychologist.\u201d So no New York case should open without both the diagnostic report and a physician\u2019s or psychologist\u2019s order in hand. Precertification is separately required on form GR-69017-4 via Availity or phone.',
        status: 'verified',
        cites: [{ title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
      telehealth: {
        value:
          'Neither CPB 0554 nor CPB 0648 addresses telehealth delivery of ABA codes, and Aetna publishes no New York-specific ABA policy, form or supplement that would supply one. New York\u2019s mandate is likewise silent on modality. Coverage and any place-of-service requirement therefore fall to the member\u2019s benefit plan and Aetna\u2019s general telemedicine terms.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Aetna\u2019s telemedicine policy and the member\u2019s benefit document, confirmed at precertification before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Aetna publishes no supervision ratio, supervisee cap or observation cadence for ABA. In New York the binding rule is the licensure one, and it reaches commercial coverage directly: since October 11, 2014 mandated ABA must be provided or supervised by an NYSED-Licensed Behavior Analyst, or by a Certified Behavior Analyst Assistant working under LBA supervision, for the services to be eligible for health insurance coverage \u2014 BACB certification alone does not satisfy it. NYSED is explicit that BCBA certification \u201cmay not be used as a license to practice in New York State.\u201d',
        status: 'verified',
        cites: [{ title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
        verifyVia:
          'Aetna provider services and your participating-provider agreement for any Aetna-specific supervision or documentation requirement.',
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 addresses whether 97153 and 97155 may be billed for the same clock time, and there is no New York-specific Aetna ABA supplement.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        verifyVia:
          'Aetna\u2019s clinical payment, coding and policy changes pages and your participating-provider agreement \u2014 confirm with provider services before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No Aetna-published per-day MUE, unit ceiling or weekly hour maximum \u2014 and in New York, an ABA-specific ceiling on a fully-insured plan is a compliance problem rather than a budget. The current statute \u201cshall not contain any limitations on visits that are solely applied to the treatment of autism spectrum disorder\u201d; the 680-hour annual ceiling that still circulates widely was struck from the Insurance Law effective January 1, 2020, and DFS Circular Letter No. 6 (2014), which recites it, predates the repeal. Cost-sharing still applies, but only on the same terms as other benefits. Capture any ABA-only ceiling a plan quotes verbatim and escalate it as a parity issue; self-funded ERISA plans sit outside the mandate.',
        status: 'verified',
        cites: [{ title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
      noteSignature: {
        value:
          'Not published in the ABA policies. Aetna\u2019s documentation and signature expectations for ABA sit in its general medical-record standards and the participating-provider agreement rather than in CPB 0554 or CPB 0648, and New York\u2019s mandate imposes no note-signature rule on commercial plans.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Aetna\u2019s provider manual medical-records standards and your participating-provider agreement.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Aetna\u2019s ABA policies name no payable settings. New York\u2019s mandate supplies the one rule that matters at intake: coverage \u201cmay be denied on the basis that the treatment is being provided under an IEP under Article 89 of the Education Law,\u201d while services provided on a supplemental basis outside an educational setting stay covered when prescribed. Capture the school schedule and IEP services so the request draws that line explicitly. Note the contrast with New York Medicaid, which bars school-setting ABA outright.',
        status: 'verified',
        cites: [{ title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Live benefits verification for any Aetna place-of-service restriction on the specific plan.',
      },
      billAsProvider: {
        value:
          'Not published in the ABA policies \u2014 Aetna sets no rendering-versus-supervising NPI convention for ABA. New York\u2019s constraint is the credential rather than the claim field: DFS has said a person providing ABA must be an LBA, or a CBAA supervised by an LBA, for their services to be eligible for insurance coverage, and NYSED licensure is required to practice at all. Rates are contract-negotiated; no national carrier publishes commercial ABA fee schedules for New York.',
        status: 'unverified',
        cites: [{ title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'Your Aetna participating-provider agreement and Aetna\u2019s professional claim submission guidance.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in New York?', a: 'Yes — under the carrier\'s national policy for ASD, layered on New York\'s autism mandate for fully-insured plans: no age limit, no ABA-only visit caps, LBA-delivered. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the New York autism mandate require?', a: 'State-regulated plans must cover screening, diagnosis, and treatment of ASD including ABA, with no age limit; and no limits on visits may be applied solely to ASD treatment — the 680-hour cap was repealed effective 1/1/2020, and the older $45,000 dollar figure is not in current guidance either, and mandated ABA must be provided or supervised by NYSED-licensed LBAs/CBAAs.' },
      { q: 'What does Aetna pay for ABA in New York?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the NY Medicaid fee schedule ($19.26/unit for most codes; $14.45 for 97153) and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-new-york': {
    slug: 'cigna-new-york',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the NY mandate: no ABA-only visit caps, no age limit, LBA-only.',
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
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in New York',
    state: 'NY', kind: 'commercial',
    pill: 'Payer Guide · Cigna · New York',
    h1: 'Cigna / Evernorth ABA coverage in New York: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in New York: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for New York families — the national clinical policy, prior authorization, the NY autism mandate (no age limit, no ABA-only visit caps, exemptions), NYSED LBA licensure, and what intake should verify.',
    intro: [
      'For an intake team in New York, a Cigna card means three layers at once: the carrier\'s national clinical policy, New York\'s autism insurance mandate (Ins. Law §§ 3216(i)(25), 3221(l)(17), 4303(ee)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — with the two New York-specific facts that surprise out-of-state operators: the mandate bars ABA-only visit caps outright (the old 680-hour ceiling was repealed in 2020), and only NYSED-licensed behavior analysts can deliver mandated ABA — a BCBA alone is not enough.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'NY Ins. Law §§ 3216(i)(25), 3221(l)(17), 4303(ee) — eff. Nov 1, 2012' },
      { label: 'Mandate age', value: 'No age limit in the mandate or DFS Circular Letter 6 (2014)' },
      { label: 'Mandate cap', value: 'None permitted — the statute bars visit limits applied solely to ASD treatment (the 680-hour cap was repealed eff. 1/1/2020)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans (federal preemption)' },
      { label: 'Licensure', value: 'NYSED Licensed Behavior Analyst (LBA) — BCBA alone insufficient' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New York',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. Unlike Virginia, New York gets no carve-out from EN0499 — the current policy names New York only as an example of a state mandate ("New York law requires regulated benefit plans to provide coverage for the screening, diagnosis and treatment of ASD, including applied behavioral analysis"), so the national criteria apply to New York business, fully-insured and self-funded alike. What changes in New York is the legal floor underneath: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in New York.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The New York mandate: no ABA-only caps, no age limit, LBA-delivered',
        body: [
          'New York\'s autism mandate — enacted via S.5845 (2011), effective for policies issued or renewed on or after November 1, 2012, and implemented through DFS Insurance Circular Letter No. 6 (2014) — requires every state-regulated policy providing physician/medical coverage (individual, group, Article 43/HMO, student plans, municipal cooperatives) to cover screening, diagnosis, and treatment of ASD, including ABA. Three features define it. No age limit: unlike Medicaid\'s under-21 rule, neither the statute nor CL 6 sets one, so adult ABA cases are mandate-covered on fully-insured plans. No ABA-only limits: the 680-hour annual ceiling was struck from the statute effective January 1, 2020, and the current text instead bars a policy from containing “any limitations on visits that are solely applied to the treatment of autism spectrum disorder.” Cost-sharing still applies, but only on the same terms as other benefits. Any ABA-specific hour or visit ceiling on a fully-insured New York plan is a parity red flag to escalate — not an hours budget to plan around. (The 680-hour figure still circulates widely, including in DFS Circular Letter No. 6 (2014), which predates the repeal.) And a credential gate: since October 11, 2014, mandated ABA must be provided or supervised by NYSED-licensed LBAs or CBAAs — BACB certification alone doesn\'t satisfy it. Self-funded ERISA plans sit outside the mandate by preemption; MHPAEA parity applies to ABA as a behavioral health benefit either way. One Cigna-specific friction point: EN0499 excludes Rett syndrome (F84.2), a diagnosis NY Medicaid covers — a Rett family with a Cigna card should be routed through benefits verification and the plan document, not assumed covered.',
        ],
        cites: [
          { title: 'DFS Insurance Circular Letter No. 6 (2014) — Standards for Insurance Coverage for ABA', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
          { title: 'NY Insurance Law § 3216(i)(25) — current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in New York',
        body: [
          'New York is one of the strictest licensure states: practicing ABA requires the NYSED Licensed Behavior Analyst (LBA) credential under Education Law Article 167 (§§ 8800–8808; regulations at 8 NYCRR 79-17/79-18), administered by NYSED\'s Office of the Professions — a BCBA alone cannot practice or bill, and the mandate itself conditions commercial ABA coverage on LBA/CBAA delivery or supervision. Practice must be pursuant to a diagnosis and prescription/order from an authorized licensed professional, and §8802 has expanded the licensed scope beyond ASD to behavioral health conditions in the current DSM. On rates: Cigna does not publish commercial ABA fee schedules for New York (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup. Cigna runs no NY Medicaid plan, so there\'s no Medicaid cross-check on a Cigna card here.',
        ],
        cites: [
          { title: 'NYSED Office of the Professions — Article 167 (Ed. Law §§ 8800–8808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Any ABA-specific visit or hour cap on the plan', desc: 'Fully-insured NY plans may not limit visits solely for ASD — if a plan quotes an ABA-only ceiling, capture it verbatim and escalate it as a parity issue.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — flag Rett (F84.2), which EN0499 excludes.' },
      { title: 'Supervising LBA', desc: 'Mandated ABA must be LBA/CBAA-provided or supervised — confirm the NYSED license, not just BCBA status.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
      { title: 'NYSED — Article 167 (Ed. Law §§ 8800–8808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' },
      { title: 'NY Insurance Law § 3216(i)(25) — current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 states no age limit, and neither does New York \u2014 the mandate and DFS Circular Letter No. 6 (2014) carry none, so adult ABA cases are mandate-covered on fully-insured plans, unlike New York Medicaid, which stops at 21. Self-funded ERISA plans sit outside the mandate, so plan funding type is still the first fact on every benefits check.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }],
      },
      dxRecency: {
        value:
          'EN0499 puts its clocks on the assessment and the data, not the diagnosis. The diagnosis must be documented with \u201cthe date on which the diagnosis was most recently made\u201d but carries no maximum age. What must be current is the instrument and the data: \u201cadministration of the assessment instrument has been completed within 60 days prior to the start of treatment,\u201d quantitative baseline data likewise within 60 days, current data within 60 days of both the start date and the date the request is received, and a fresh standardized instrument \u201cfollowing any break in treatment greater than 60 calendar days.\u201d Continued treatment needs an instrument \u201ccompleted no more than one year prior to the start date of the continued treatment request.\u201d',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'EN0499 requires the diagnosis to be made \u201cby a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice,\u201d with the name, credentials and type of licensure of that person and the date of the most recent diagnosis all provided. New York narrows it further: NYSED bars LBAs and CBAAs from diagnosing or from prescribing/ordering ABA, and the mandate defines covered treatment as that prescribed or ordered by a licensed physician or licensed psychologist. One Cigna-specific trap \u2014 EN0499 excludes Rett syndrome (F84.2), which New York Medicaid covers, so a Rett family with a Cigna card goes to benefits verification, not straight to intake.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named, but the specification is strict. The assessment must administer \u201ca reliable, valid, and standardized assessment instrument that measures the individual\u2019s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR\u2026 social communication and social interaction; and restricted, repetitive patterns of behavior, interests, or activities,\u201d and that instrument must be \u201ccompleted in its entirety and as designed,\u201d validated for the population tested, administered and interpreted by someone trained to do so, and \u201cthe most current version\u2026 (e.g., must be the Vineland-3 vs. Vineland-II).\u201d Standardized scores, score tables and scoring grids must be provided, with the date of administration, respondent name and form type.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'EN0499 requires no referral \u2014 the gate is the confirmed diagnosis plus the ABA assessment, and assessment codes 97151, 97152 and 0362T carry no prior authorization at all; the rigor arrives at the treatment step, which needs the completed assessment and a treatment plan on Cigna\u2019s ABA PA form. New York supplies the order requirement the policy omits: the mandate covers treatment \u201cprescribed or ordered\u2026 by a licensed physician or a licensed psychologist,\u201d and NYSED bars your LBA from supplying it. Collect both the diagnostic report and the physician\u2019s or psychologist\u2019s order at first contact.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
      },
      telehealth: {
        value:
          'Permitted, with no code list and no place-of-service rule published: \u201cABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities,\u201d chosen on individual characteristics, treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. Telehealth is one of the environments where services must be \u201cclearly identified and documented,\u201d and the line-of-sight/proximity requirement expressly \u201cdoes not apply to telehealth services, when applicable.\u201d New York\u2019s mandate is silent on modality.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          '\u201cDirect case supervision (occurs concurrently with the delivery of direct treatment to the individual and consists of BCBA face-to-face with the individual and either the Registered Behavior Technician [RBT] or the Board Certified Assistant Behavior Analyst [BCaBA]) and indirect case supervision is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment,\u201d and \u201cwhen direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided.\u201d EN0499 accepts a BCBA, LBA or independently licensed clinician with documented ABA training as the supervisor \u2014 but in New York only the LBA half of that counts: DFS conditions coverage on ABA being provided or supervised by an NYSED-licensed LBA, or a CBAA under LBA supervision, and NYSED says BCBA certification \u201cmay not be used as a license to practice in New York State.\u201d',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
      },
      concurrentBilling: {
        value:
          'Not answered for 97153 with 97155. EN0499 defines concurrent billing only in its glossary \u2014 \u201cregardless of the funding source, multiple providers bill for services rendered to the same patient when those services occur at the same time\u201d \u2014 and the rule it actually states is about modalities: \u201cprovision of ABA treatment is not covered or reimbursable when delivered to the same individual, at the same time as any other treatment modality (e.g., ABA and speech therapy, or ABA and occupational therapy).\u201d The 97155 descriptor Cigna reproduces already contemplates \u201csimultaneous direction of technician,\u201d but whether both codes may be billed for the same clock time is not addressed.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Cigna/Evernorth provider services and the applicable reimbursement (not coverage) policy \u2014 confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling and no hour maximum in EN0499: \u201cthe recommended intensity of treatment should be based on what is medically necessary for the individual independent of the individual\u2019s schedule of activities outside of treatment or previous utilization of services,\u201d measured as direct ABA hours per week excluding case supervision and caregiver training. In New York that aligns with the statute, which bars a policy from containing \u201cany limitations on visits that are solely applied to the treatment of autism spectrum disorder\u201d \u2014 the 680-hour ceiling that still circulates was struck effective January 1, 2020, and DFS Circular Letter No. 6 (2014) predates the repeal. Any ABA-only ceiling quoted on a fully-insured New York plan is a parity red flag, not an hours budget.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }],
      },
      noteSignature: {
        value:
          'The rendering provider signs, per service. \u201cA separate written record is expected for each individual receiving ABA intervention corresponding with each service noted through identified CPT Code\u201d and must include the start date and time and end date and time for each service, location of service delivery, focus of service, a detailed description of the intervention, individuals present, the specific service delivered, and \u201cname, credential (if applicable), and signature of ABA provider who rendered the service.\u201d No supervising-analyst co-signature is required by the policy.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      placeOfService: {
        value:
          'EN0499 sets setting by clinical need rather than a payable-locations list: \u201ccare must be deliverable in any setting that is relevant for the individual to achieve treatment goals \u2014 whether in the home, at school, in a clinic or center, or in the community,\u201d with residential facilities, childcare facilities, transportation, vocational or educational classes and recreational and social environments all named. Two guardrails: \u201cservices that are considered primarily educational or vocational in nature, or related to academic or work performance are not covered or reimbursable,\u201d and ABA may not \u201creplace or replicate activities that are the responsibility of the setting\u2026 (e.g., classroom aide, 1:1 teacher, tutor, vocational assistant/coach, respite services).\u201d New York\u2019s mandate runs the same line \u2014 a plan may deny treatment provided under an IEP while supplemental services outside the educational setting stay covered.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }],
      },
      billAsProvider: {
        value:
          'EN0499 sets no rendering-versus-supervising NPI convention \u2014 it governs who may perform each service and requires the signature of whoever rendered it, but not whose number the claim carries. New York\u2019s binding constraint is the credential: DFS conditions insurance coverage on ABA being provided by an LBA, or by a CBAA supervised by one, and NYSED licensure is required to practice at all. Rates are contract-negotiated; no national carrier publishes commercial ABA fee schedules for New York.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
        verifyVia:
          'Cigna/Evernorth provider services and your participating-provider agreement for claim-submission conventions.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in New York?', a: 'Yes — under national policy EN0499 (which applies fully in New York, with no state carve-out), layered on New York\'s autism mandate for fully-insured plans: no age limit, no ABA-only visit caps, LBA-delivered. Self-funded plans are exempt from the mandate, so verify plan funding type first.' },
      { q: 'What does the New York autism mandate require?', a: 'State-regulated plans must cover screening, diagnosis, and treatment of ASD including ABA, with no age limit; and no limits on visits may be applied solely to ASD treatment — the 680-hour cap was repealed effective 1/1/2020, and the older $45,000 dollar figure is not in current guidance either, and mandated ABA must be provided or supervised by NYSED-licensed LBAs/CBAAs.' },
      { q: 'Does the ABA assessment need prior authorization with Cigna in New York?', a: 'No — per EN0499, assessment codes 97151, 97152, and 0362T need no prior authorization. Treatment does, with the completed assessment and treatment plan on Cigna\'s ABA PA form.' },
    ],
  },

  'unitedhealthcare-new-york': {
    slug: 'unitedhealthcare-new-york',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the NY mandate: no ABA-only visit caps, no age limit, LBA-only.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    treatmentPA: {
      value: 'Required — step 2 (treatment auth); reviews every 4–6 months',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    dxRequired: {
      value: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'UnitedHealthcare / Optum in New York',
    state: 'NY', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · New York',
    h1: 'UnitedHealthcare / Optum ABA coverage in New York: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in New York: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for New York families — the national clinical policy, two-step prior authorization, the NY autism mandate (no age limit, no ABA-only visit caps, exemptions), NYSED LBA licensure, and the Medicaid line to check for.',
    intro: [
      'For an intake team in New York, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, New York\'s autism insurance mandate (Ins. Law §§ 3216(i)(25), 3221(l)(17), 4303(ee)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — with the two New York-specific facts that surprise out-of-state operators: the mandate bars ABA-only visit caps outright (the old 680-hour ceiling was repealed in 2020), and only NYSED-licensed behavior analysts can deliver mandated ABA — a BCBA alone is not enough.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'NY Ins. Law §§ 3216(i)(25), 3221(l)(17), 4303(ee) — eff. Nov 1, 2012' },
      { label: 'Mandate age', value: 'No age limit in the mandate or DFS Circular Letter 6 (2014)' },
      { label: 'Mandate cap', value: 'None permitted — the statute bars visit limits applied solely to ASD treatment (the 680-hour cap was repealed eff. 1/1/2020)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans (federal preemption)' },
      { label: 'Licensure', value: 'NYSED Licensed Behavior Analyst (LBA) — BCBA alone insufficient' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New York',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months. That clinical policy is national — what changes in New York is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. One nuance for New York specifically: Optum\'s ABA State Mandates supplement does carry an explicit New York entry, but it\'s a Medicaid and Child Health Plus entry restating the state Medicaid criteria — there is no NY commercial-mandate override in the document, so commercial members run on the standard national criteria plus the Insurance Law floor. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in New York.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'The New York mandate: no ABA-only caps, no age limit, LBA-delivered',
        body: [
          'New York\'s autism mandate — enacted via S.5845 (2011), effective for policies issued or renewed on or after November 1, 2012, and implemented through DFS Insurance Circular Letter No. 6 (2014) — requires every state-regulated policy providing physician/medical coverage (individual, group, Article 43/HMO, student plans, municipal cooperatives) to cover screening, diagnosis, and treatment of ASD, including ABA. Three features define it. No age limit: unlike Medicaid\'s under-21 rule, neither the statute nor CL 6 sets one, so adult ABA cases are mandate-covered on fully-insured plans. No ABA-only limits: the 680-hour annual ceiling was struck from the statute effective January 1, 2020, and the current text instead bars a policy from containing “any limitations on visits that are solely applied to the treatment of autism spectrum disorder.” Cost-sharing still applies, but only on the same terms as other benefits. Any ABA-specific hour or visit ceiling on a fully-insured New York plan is a parity red flag to escalate — not an hours budget to plan around. (The 680-hour figure still circulates widely, including in DFS Circular Letter No. 6 (2014), which predates the repeal.) And a credential gate: since October 11, 2014, mandated ABA must be provided or supervised by NYSED-licensed LBAs or CBAAs — BACB certification alone doesn\'t satisfy it. Self-funded ERISA plans sit outside the mandate by preemption; MHPAEA parity applies to ABA as a behavioral health benefit either way.',
        ],
        cites: [
          { title: 'DFS Insurance Circular Letter No. 6 (2014) — Standards for Insurance Coverage for ABA', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
          { title: 'NY Insurance Law § 3216(i)(25) — current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in New York',
        body: [
          'A family saying "we have UnitedHealthcare" in New York may actually be on the carrier\'s Medicaid plan — UnitedHealthcare Community Plan of New York, where ABA is managed by Optum under the state Medicaid rules with all services PA-gated through Provider Express. Same portal, different rulebook: verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
        cites: [
          { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869_01302025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in New York',
        body: [
          'New York is one of the strictest licensure states: practicing ABA requires the NYSED Licensed Behavior Analyst (LBA) credential under Education Law Article 167 (§§ 8800–8808; regulations at 8 NYCRR 79-17/79-18), administered by NYSED\'s Office of the Professions — a BCBA alone cannot practice or bill, and the mandate itself conditions commercial ABA coverage on LBA/CBAA delivery or supervision. Practice must be pursuant to a diagnosis and prescription/order from an authorized licensed professional, and §8802 has expanded the licensed scope beyond ASD to behavioral health conditions in the current DSM. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for New York (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
          { title: 'NYSED Office of the Professions — Article 167 (Ed. Law §§ 8800–8808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of New York (Medicaid) — different rules, different guide.' },
      { title: 'Any ABA-specific visit or hour cap on the plan', desc: 'Fully-insured NY plans may not limit visits solely for ASD — if a plan quotes an ABA-only ceiling, capture it verbatim and escalate it as a parity issue.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.), diagnosing provider and credentials, evaluation date.' },
      { title: 'Supervising LBA', desc: 'Mandated ABA must be LBA/CBAA-provided or supervised — confirm the NYSED license, not just BCBA status.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
      { title: 'NYSED — Article 167 (Ed. Law §§ 8800–8808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' },
      { title: 'NY Insurance Law § 3216(i)(25) — current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' },
      { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869_01302025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Optum\u2019s Supplemental Clinical Criteria state no age limit \u2014 they note ABA is \u201ceffective across the lifespan\u201d \u2014 and Optum\u2019s ABA State Mandates supplement carries only a New York Medicaid and Child Health Plus entry (\u201cunder age 21\u201d), with no New York commercial override. So commercial members run on the national criteria plus the Insurance Law floor, and that floor sets no age either: neither the mandate nor DFS Circular Letter No. 6 (2014) carries an age limit, so adult ABA cases are mandate-covered on fully-insured plans.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }],
      },
      dxRecency: {
        value:
          'Optum\u2019s criteria set no maximum age on the diagnostic evaluation, and New York\u2019s mandate imposes none on commercial plans. The recurring clock is the review cycle instead \u2014 continued-service reviews every four to six months, with progress documented \u201cin standardized assessment of norm-referenced, adaptive functioning\u201d and coverage at risk where \u201cdeclining or no progress on standardized adaptive measures of functioning such as the Vineland\u201d persists across successive authorization periods.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosingProviders: {
        value:
          '\u201cA valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR.\u201d New York narrows that: NYSED bars LBAs and CBAAs from diagnosing or from prescribing/ordering ABA, and the mandate defines covered treatment as that prescribed or ordered by a licensed physician or licensed psychologist. The ABA provider is a separate credential \u2014 a master\u2019s- or doctoral-level BCBA, a credentialed licensed behavioral health clinician, or a BCaBA or non-licensed individual under direct supervision \u2014 and in New York that person must hold the NYSED license.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }],
      },
      diagnosticTools: {
        value:
          'Optum publishes the most explicit instrument list of any national ABA policy, in two tiers. The diagnosis and severity level \u201care confirmed and documented by the diagnosing clinician using at least one clinically validated tool (not an all-inclusive list)\u201d \u2014 first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT-Checklist, ASQ, AQ, CAST), second-level screeners (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity must then be \u201cchosen according to baseline measurement with the use of at least one of the following validated measurement tools\u201d \u2014 ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland (VABS) or CFQL-2 \u2014 selected individually rather than uniformly.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'Optum requires no referral \u2014 the gate is the validated diagnosis plus authorization: \u201cprior authorization is required for ABA (unless otherwise specified or mandated by contract or law),\u201d run as a two-step process on Provider Express with the assessment authorized first and treatment second, reviewed every four to six months. New York supplies the order requirement the criteria omit: the mandate covers treatment \u201cprescribed or ordered\u2026 by a licensed physician or a licensed psychologist,\u201d and NYSED bars an LBA or CBAA from supplying it. Optum\u2019s State Mandates supplement restates the state referral rule only for the Medicaid/CHP line, not for commercial.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
      },
      telehealth: {
        value:
          'Optum names no ABA telehealth code list and no place-of-service rule for commercial members. It points to the Council of Autism Service Providers\u2019 Practice Parameters for Telehealth-Implementation of Applied Behavior Analysis, Second Edition as best practice \u2014 covering delivery \u201cin a broad range of clinical settings (e.g., home, clinic, school)\u201d \u2014 and adds the framing that matters at authorization: \u201cthe telehealth options presented are not intended to supplant in-person service; rather, they are intended to supplement the traditional in-person service delivery model.\u201d By contrast, the Medicaid line does publish a code list (97155, 97156, 97157 at POS 02 for approved virtual-visits providers).',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum NY Medicaid ABA Provider Orientation (BH00869, 01/30/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/nyaba/NYabaPres.pdf' }],
        verifyVia:
          'Optum/Provider Express virtual-visits requirements and the member\u2019s benefit plan \u2014 confirm code eligibility and POS before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          '\u201cConsistent with CASP standards of care, direct case supervision is required 1\u20132 hours for every 10 hours of direct treatment per week.\u201d Technicians \u201cmust be under the applicable supervision of a BCBA or licensed behavioral health clinician\u201d and \u201cshould be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate\u201d \u2014 and in New York the state mandate is the binding half of that clause: DFS conditions coverage on ABA being provided or supervised by an NYSED-licensed LBA, or a CBAA under LBA supervision, with BCBA certification alone insufficient. Optum also bars a common workaround: \u201cit is not recommended that parents serve in an RBT role,\u201d and a BCBA supervising a parent acting as RBT for their own child \u201cwould also be in violation of their ethics code.\u201d',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
      },
      concurrentBilling: {
        value:
          'Not answered. The Supplemental Clinical Criteria govern medical necessity, not claim edits, and say nothing about billing 97153 and 97155 for the same clock time. The nearest published rule is a documentation one \u2014 behavior analysts \u201cdo not implement or bill non-behavioral services under an authorization or contract for behavioral services.\u201d',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum/Provider Express provider services and UnitedHealthcare\u2019s reimbursement policies \u2014 confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day or per-week ceiling, and Optum argues against one on the evidence: \u201caccording to current research there is a lack of high-quality clinical evidence to suggest that a higher number of hours results in improved outcomes\u2026 no difference was noted in outcomes between 15 hours versus 25 hours per week,\u201d while also noting limited evidence that very low intensity works as well. Schedules must allow rest and nutrition breaks and peer interaction, and \u201cfull time ABA programs are rare.\u201d In New York the statute pushes the same way from the other side: a policy \u201cshall not contain any limitations on visits that are solely applied to the treatment of autism spectrum disorder,\u201d the 680-hour ceiling having been struck effective January 1, 2020. Utilization below 80% of authorized hours is the operational flag at review.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }],
      },
      noteSignature: {
        value:
          'No session-note signature rule is published in the Supplemental Clinical Criteria, and New York\u2019s mandate imposes none on commercial plans. What Optum does require is that \u201cbehavior analysts identify their services accurately and include all required information on reports, bills, invoices, requests for reimbursement, and receipts,\u201d and that all components of care be tracked and updated throughout authorization periods.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum/Provider Express documentation standards and the UnitedHealthcare provider administrative guide\u2019s medical-records section.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Optum declines to restrict setting: \u201ctreatment should not be restricted to specific settings but instead should be delivered in the settings that maximize treatment outcomes for the individual patient,\u201d and \u201cABA should be rendered in multiple settings to support transition and generalization.\u201d The exclusion is functional: ABA is not covered for \u201c1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA),\u201d while teacher training, meetings with school personnel and school observations remain coverable as coordination. New York\u2019s mandate draws the same line \u2014 a plan may deny treatment provided under an IEP under Article 89 while supplemental services outside the educational setting stay covered.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'NY Insurance Law \u00a7 3216(i)(25) \u2014 current text (no ABA-only visit limits)', url: 'https://www.nysenate.gov/legislation/laws/ISC/3216' }],
      },
      billAsProvider: {
        value:
          'Not published as a claim convention. Optum\u2019s criteria define who may render each service but set no rendering-versus-supervising NPI rule. New York\u2019s binding constraint is the credential: DFS conditions insurance coverage on ABA being provided by an LBA, or a CBAA supervised by one, and NYSED licensure is required to practice at all \u2014 note that this cuts against Optum\u2019s RBT-preferring language, since New York regulates technicians by scope rather than by certification. Rates are contract-negotiated.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }, { title: 'NYSED Office of the Professions \u2014 Article 167 (Ed. Law \u00a7\u00a7 8800\u20138808)', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/laws-rules-regulations/article-167' }],
        verifyVia:
          'Provider Express claim-submission guidance and your UnitedHealthcare participating-provider agreement.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in New York?', a: 'Yes — under the carrier\'s national policy for ASD via Optum\'s two-step authorization, layered on New York\'s autism mandate for fully-insured plans: no age limit, no ABA-only visit caps, LBA-delivered. Self-funded plans are exempt from the mandate, so verify plan funding type first.' },
      { q: 'What does the New York autism mandate require?', a: 'State-regulated plans must cover screening, diagnosis, and treatment of ASD including ABA, with no age limit; and no limits on visits may be applied solely to ASD treatment — the 680-hour cap was repealed effective 1/1/2020, and the older $45,000 dollar figure is not in current guidance either, and mandated ABA must be provided or supervised by NYSED-licensed LBAs/CBAAs.' },
      { q: 'What does UnitedHealthcare pay for ABA in New York?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the NY Medicaid fee schedule ($19.26/unit for most codes; $14.45 for 97153) and treat rate-setting as part of contracting.' },
    ],
  },

  'excellus-bcbs-new-york': {
    slug: 'excellus-bcbs-new-york',
    family: 'bcbs',
    cardDesc: 'Central/Western NY + Southern Tier; own named ABA medical policy (3.01.11) — but outpatient PA specifics sit behind the portal login.',
    assessmentPA: {
      value: 'Not published for outpatient ABA \u2014 Medical Policy 3.01.11 describes \u201cmedical necessity review\u2026 when applicable\u201d rather than a code-level gate, and Excellus directs providers to check eMedNY for code coverage first; confirm with Provider Services',
      status: 'unverified',
      cites: [{ title: 'Excellus Medical Policy 3.01.11 — Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'Excellus — Prior Authorization', url: 'https://www.excellusbcbs.com/prior-authorization' }],
      verifyVia:
        'Excellus Provider Services. Ask whether 97151 carries a code-level PA requirement for outpatient ABA and get it in writing; no Excellus-published outpatient ABA PA list or form was located, and the plan directs providers to check eMedNY code coverage first.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Not published \u2014 no standalone outpatient ABA PA form was located and BH/ABA is not delegated to eviCore (radiology, cardiology, MSK, oncology and sleep only); BH Care Management runs through Excellus directly, so confirm requirements and turnaround in writing before booking',
      status: 'unverified',
      cites: [{ title: 'Excellus Medical Policy 3.01.11 — Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'Excellus — Prior Authorization', url: 'https://www.excellusbcbs.com/prior-authorization' }],
      verifyVia:
        'Excellus Provider Services — BH Care Management for Medicaid and HARP runs through Excellus directly, not eviCore. Confirm outpatient ABA PA requirements, turnaround times and the submission channel in writing before booking.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — DSM-5-TR ASD per Excellus\'s own ABA medical policy (3.01.11), layered on the state\'s under-21 ASD/Rett baseline; Rett-specific language isn\'t in the Excellus policy itself',
      status: 'verified',
      cites: [{ title: 'Excellus Medical Policy 3.01.11 — Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'Excellus BlueCross BlueShield (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Excellus BCBS (NY)',
    h1: 'Excellus BlueCross BlueShield ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'Excellus BCBS New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Excellus BlueCross BlueShield administers NY Medicaid ABA — its own named ABA medical policy (3.01.11), the 13-county Central/Western NY and Southern Tier footprint, in-house behavioral health with no vendor carve-out, and what prior-auth and telehealth specifics remain unpublished.',
    intro: [
      'Excellus BlueCross BlueShield — the nonprofit Rochester-based plan running Medicaid Managed Care as HMOBlue Option, Blue Choice Option, and Premier Option (HARP: Blue Option Plus) across 179,533 members per the state\'s July 2026 enrollment report — stands out among New York\'s upstate MCOs for actually publishing a named ABA clinical policy rather than leaving the benefit entirely to the state baseline. Medical Policy 3.01.11, "Applied Behavior Analysis," lists the covered CPT codes, documentation expectations, and licensure tiers directly, and its own "Product Disclaimer" spells out how it relates to the state program: where eMedNY hasn\'t published Medicaid-specific criteria, Excellus\'s medical policy fills the gap. What the plan does not publish is the outpatient prior-authorization mechanics themselves — so this guide covers the well-documented clinical policy and flags exactly what to confirm before booking.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (Excellus Health Plan, Inc.) — HMOBlue Option, Blue Choice Option, Premier Option; HARP: Blue Option Plus' },
      { label: 'Footprint', value: '13 counties: Broome, Erie, Herkimer, Livingston, Monroe, Oneida, Onondaga, Ontario, Orleans, Otsego, Seneca, Wayne, Yates' },
      { label: 'Clinical policy', value: 'Own Medical Policy 3.01.11, "Applied Behavior Analysis" (current eff. 6/18/2026) — names 97151–97158, 0362T, 0373T' },
      { label: 'BH/ABA UM', value: 'In-house — no vendor carve-out found; eviCore handles only radiology, cardiology, MSK, oncology, and sleep for Excellus, not BH' },
      { label: 'Prior auth specifics', value: 'Not published for outpatient ABA — plan directs providers to check eMedNY for MMC/HARP code coverage, then confirm via BH Care Management' },
      { label: 'Claims', value: '120-day timely filing for professional claims' },
    ],
    sections: [
      {
        h2: 'A named medical policy — filling the gaps eMedNY leaves open',
        body: [
          'Excellus publishes its own dedicated ABA clinical policy — Medical Policy 3.01.11, "Applied Behavior Analysis" (current version effective June 18, 2026) — rather than leaving coverage entirely to the state baseline. The policy deems ABA medically appropriate for DSM-5-TR autism spectrum disorder, treats alternative approaches (DIR/Floortime, TEACCH, RDI) as investigational, and names the codes in scope: 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T, and 0373T. Its Product Disclaimer states the operative rule for Medicaid members directly: "If a Medicaid product covers a specific service, and there are no New York State Medicaid guidelines (eMedNY) criteria, medical policy criteria apply to the benefit" — so for anything eMedNY\'s ABA Policy Manual doesn\'t spell out, Excellus\'s own medical-necessity criteria govern.',
        ],
        cites: [
          { title: 'Excellus Medical Policy 3.01.11 — Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' },
        ],
      },
      {
        h2: 'Documentation and licensure — heavier than the state referral alone',
        body: [
          'Beyond the state\'s referral packet, Excellus\'s medical policy calls for a specific documentation set at review: psychological/other testing reports, a copy of the IEP where one exists, Early Intervention or Preschool progress notes, the frequency/duration/location of requested sessions, the treating provider\'s certification/credentials, requested supervision hours, and an assessment/treatment plan naming target behaviors — with resubmission expected at least every 12 months (or more often where state rules require it, e.g., NY\'s own 6-month update cycle). The policy also restates New York\'s licensure tiers directly: LBA/BCBA for assessment, treatment planning, and oversight; CBAA/BCaBA to deliver services under supervision; and RBTs/behavior technicians restricted to protocol implementation and data collection, per NYS Education Law. One school-related note: ABA delivered as part of an IEP or Preschool/School Supportive Health Services Program is excluded as a school-district "free care" service, though supplemental, non-IEP ABA may still be covered.',
        ],
        cites: [
          { title: 'Excellus Medical Policy 3.01.11 — Applied Behavior Analysis', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' },
        ],
      },
      {
        h2: 'Prior authorization: what\'s published, and what to confirm',
        body: [
          'We found no Excellus-published list stating whether the assessment (97151) or the treatment codes require prior authorization for outpatient ABA specifically — the medical policy describes a "medical necessity review... when applicable" rather than a hard PA gate tied to each code. Excellus\'s general prior-authorization guidance for Medicaid Managed Care and HARP members instead directs providers to "review the eMedNY website for benefit coverage of specific codes prior to submitting a prior authorization request" — consistent with the Product Disclaimer above: check the state rule first, then Excellus\'s medical policy fills any gap. Behavioral health and ABA are not delegated to eviCore (Excellus\'s vendor for radiology, cardiology, musculoskeletal, oncology, and sleep) or to any other named UM vendor we could confirm — BH Care Management for Medicaid and HARP members runs through Excellus directly. An Inpatient Prior Authorization Form exists for institutional behavioral-health levels of care (partial hospitalization, psychiatric inpatient, SUD detox/rehab), submitted through Excellus\'s own SDS portal, but we located no equivalent standalone form for outpatient ABA. Treat outpatient ABA PA requirements, turnaround times, and the exact submission channel as open questions for Provider Services until the plan confirms them in writing.',
        ],
        cites: [
          { title: 'Excellus — Prior Authorization', url: 'https://www.excellusbcbs.com/prior-authorization' },
          { title: 'Excellus provider portal — SDS authorization portal', url: 'https://provider.excellusbcbs.com/authorizations/sds-portal' },
        ],
      },
      {
        h2: 'Telehealth and billing basics',
        body: [
          'Excellus\'s general Telemedicine and Telehealth medical policy — its most recent confirmed revision markers run only through 2017 — does not list any ABA codes (97151–97158) in its covered CPT/HCPCS table, and the ABA medical policy itself only cites third-party guidance (the Council of Autism Service Providers\' 2021 telehealth practice parameter) as supportive literature, not a coverage commitment. Whether Excellus Medicaid MMC will reimburse ABA codes delivered via telehealth, and under what modifier, is not confirmed — verify with Provider Services before scheduling remote sessions. On claims: professional timely filing is 120 days from the date of service (the clock for coordination-of-benefits claims starts at the primary payer\'s EOB date); a missed deadline can be appealed via a Timely Filing Review request within 120 days of the remittance.',
        ],
        cites: [
          { title: 'Excellus Telemedicine and Telehealth Corporate Medical Policy (#1.01.49)', url: 'https://provider.excellusbcbs.com/documents/20152/127460/EXC-PRV-Telehealth_Telemedicine+Corporate+Medical+Policy.pdf' },
          { title: 'Excellus — "Navigating the Blues" Billing Orientation Guidebook (Oct 2025)', url: 'https://provider.excellusbcbs.com/documents/53971/224461/Navigating+the+Blues+Billing+Orientation+Guidebook.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state referral packet', desc: 'Under-21 ASD/Rett dx, referral with severity and DSM-5 checklist — the clinical baseline Excellus\'s medical policy sits on top of.' },
      { title: 'IEP and Early Intervention records', desc: 'Excellus\'s policy asks for an IEP copy where one exists, plus EI/Preschool progress notes — pull these at intake, not at review time.' },
      { title: 'Target-behavior treatment plan + supervision hours', desc: 'The medical policy expects an assessment/treatment plan naming target behaviors and the requested supervision hours.' },
      { title: 'PA confirmation in writing', desc: 'Outpatient ABA PA specifics aren\'t published — confirm the process and turnaround through Provider Services before booking.' },
      { title: 'Telehealth confirmation', desc: 'ABA-code telehealth coverage isn\'t confirmed by any Excellus document we found — verify per case.' },
    ],
    sources: [
      { title: 'Excellus Medical Policy 3.01.11 — Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' },
      { title: 'Excellus — Prior Authorization', url: 'https://www.excellusbcbs.com/prior-authorization' },
      { title: 'Excellus provider portal — SDS authorization portal', url: 'https://provider.excellusbcbs.com/authorizations/sds-portal' },
      { title: 'Excellus Telemedicine and Telehealth Corporate Medical Policy (#1.01.49)', url: 'https://provider.excellusbcbs.com/documents/20152/127460/EXC-PRV-Telehealth_Telemedicine+Corporate+Medical+Policy.pdf' },
      { title: 'Excellus — "Navigating the Blues" Billing Orientation Guidebook (Oct 2025)', url: 'https://provider.excellusbcbs.com/documents/53971/224461/Navigating+the+Blues+Billing+Orientation+Guidebook.pdf' },
      { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Excellus\u2019s own Medical Policy 3.01.11 sets no age limit \u2014 it deems ABA medically appropriate for DSM-5-TR autism spectrum disorder without an age gate. The state baseline supplies the boundary underneath for Medicaid members: under 21 with ASD and/or Rett syndrome. Read them together per the policy\u2019s own Product Disclaimer, which says medical-policy criteria fill the gaps eMedNY leaves open rather than override the state where it speaks.',
        status: 'verified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      dxRecency: {
        value:
          'No recency rule on the diagnosis in either layer \u2014 the state\u2019s 2-year referral clock is the only one. What Excellus does impose is a resubmission cadence: documentation is expected at review \u201cat least every 12 months (or more often where state rules require it),\u201d which in New York means the state\u2019s own 6-month treatment-plan update cycle governs.',
        status: 'verified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. Excellus\u2019s medical policy restates New York\u2019s licensure tiers on the delivery side \u2014 LBA/BCBA for assessment, treatment planning and oversight; CBAA/BCaBA to deliver under supervision; RBTs and behavior technicians restricted to protocol implementation and data collection, per NYS Education Law \u2014 but names no diagnosing credential of its own.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }],
      },
      diagnosticTools: {
        value:
          'No named instrument, but a heavier document set than the state asks for. Beyond the state\u2019s referral packet, Excellus\u2019s medical policy calls for psychological and other testing reports, a copy of the IEP where one exists, Early Intervention or Preschool progress notes, the frequency, duration and location of requested sessions, the treating provider\u2019s certification and credentials, the requested supervision hours, and an assessment/treatment plan naming target behaviors. Pull the IEP and EI records at intake rather than at review time.',
        status: 'verified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. Whether Excellus layers prior authorization on top is genuinely unsettled: we found no Excellus-published list stating that 97151 or the treatment codes require PA for outpatient ABA \u2014 the medical policy describes \u201cmedical necessity review\u2026 when applicable\u201d \u2014 and the plan\u2019s general Medicaid/HARP guidance instead directs providers to \u201creview the eMedNY website for benefit coverage of specific codes prior to submitting a prior authorization request.\u201d Behavioral health is not delegated to eviCore (radiology, cardiology, MSK, oncology and sleep only); BH Care Management runs through Excellus directly.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'Excellus \u2014 Prior Authorization', url: 'https://www.excellusbcbs.com/prior-authorization' }],
        verifyVia:
          'Excellus Provider Services \u2014 confirm outpatient ABA PA requirements, turnaround times and the submission channel in writing; no standalone outpatient ABA PA form was located.',
      },
      telehealth: {
        value:
          'Not confirmed, and the evidence points to a gap rather than a permission. Excellus\u2019s general Telemedicine and Telehealth medical policy (#1.01.49), whose most recent confirmed revision markers run only through 2017, does not list any ABA code (97151\u201397158) in its covered CPT/HCPCS table, and the ABA medical policy itself cites the Council of Autism Service Providers\u2019 2021 telehealth practice parameter only as supportive literature, not a coverage commitment. Whether Excellus Medicaid will reimburse ABA delivered via telehealth, and under which modifier, is unresolved.',
        status: 'unverified',
        cites: [{ title: 'Excellus Telemedicine and Telehealth Corporate Medical Policy (#1.01.49)', url: 'https://provider.excellusbcbs.com/documents/20152/127460/EXC-PRV-Telehealth_Telemedicine+Corporate+Medical+Policy.pdf' }, { title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }],
        verifyVia:
          'Excellus Provider Services \u2014 confirm ABA telehealth reimbursement and the required modifier before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Excellus restates New York\u2019s licensure tiers in its own policy \u2014 LBA/BCBA for assessment, treatment planning and oversight; CBAA/BCaBA to deliver services under supervision; RBTs and behavior technicians restricted to protocol implementation and data collection, per NYS Education Law \u2014 and requires the requested supervision hours to be stated in the submitted documentation. The numeric floor comes from the state and applies to managed care alike: 5% of each unlicensed individual\u2019s monthly service hours, two face-to-face real-time contacts per month with one observation, and no more than six CBAAs/unlicensed individuals per LBA.',
        status: 'verified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Medical Policy 3.01.11 names the codes in scope (97151\u201397158, 0362T, 0373T) and the documentation expected, but states no same-clock-time rule for 97153 with 97155; the state manual is silent too.',
        status: 'unverified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Excellus Provider Services and the plan\u2019s claim-editing guidance \u2014 confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling or hour cap is published. The policy asks for \u201cthe frequency/duration/location of requested sessions\u201d and the requested supervision hours rather than measuring them against a stated maximum, and resubmission is expected at least every 12 months, or more often where state rules require \u2014 which in New York means every 6 months. On claims: professional timely filing is 120 days from the date of service, with a Timely Filing Review request available within 120 days of the remittance.',
        status: 'verified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }],
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d Excellus adds no session-note signature rule of its own; what it requires at review is the treating provider\u2019s certification and credentials alongside the assessment and treatment plan.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }],
      },
      placeOfService: {
        value:
          'The state\u2019s school bar plus an Excellus free-care exclusion. New York Medicaid does not reimburse ABA in a school setting; Excellus adds that ABA delivered as part of an IEP or a Preschool/School Supportive Health Services Program \u201cis excluded as a school-district free care service, though supplemental, non-IEP ABA may still be covered.\u201d The policy also requires the location of requested sessions to be stated in the submitted documentation, so setting is reviewed rather than assumed. Home, clinic and community remain available under the state\u2019s any-legally-authorized-setting rule.',
        status: 'verified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Not published as a claim convention \u2014 Medical Policy 3.01.11 governs who may deliver which service (LBA/BCBA for assessment, planning and oversight; CBAA/BCaBA under supervision; technicians for protocol implementation and data collection) but names no rendering-versus-supervising NPI rule. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Confirm the Excellus managed-care claim format before billing CBAA- or technician-delivered units.',
        status: 'unverified',
        cites: [{ title: 'Excellus Medical Policy 3.01.11 \u2014 Applied Behavior Analysis (eff. 6/18/2026)', url: 'https://www.excellusbcbs.com/documents/d/global/exc-prv-applied-behavior-analysis' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Excellus Provider Services and the \u201cNavigating the Blues\u201d billing orientation guidebook \u2014 confirm the rendering/supervising NPI convention.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Excellus BlueCross BlueShield cover ABA therapy?', a: 'Yes — it carries the NY Medicaid ABA carve-in and publishes its own ABA Medical Policy (3.01.11) naming the covered codes (97151–97158, 0362T, 0373T) and documentation requirements, layered on the state\'s under-21 ASD/Rett baseline.' },
      { q: 'Does Excellus require prior authorization for ABA?', a: 'Not published for the specific codes — Excellus\'s guidance directs providers to check eMedNY for code-level Medicaid coverage first, then confirm any plan-level PA process with Provider Services; no standalone outpatient ABA PA form was found.' },
      { q: 'Does a BH vendor manage ABA for Excellus Medicaid members?', a: 'No vendor carve-out was found — eviCore manages only radiology, cardiology, musculoskeletal, oncology, and sleep for Excellus, and behavioral health/ABA runs through Excellus\'s own BH Care Management team.' },
    ],
  },

  'mvp-health-plan-new-york': {
    slug: 'mvp-health-plan-new-york',
    cardDesc: 'In-house BH/ABA UM; PA required for both assessment and treatment — but 0362T/0373T are excluded from Medicaid Managed Care reimbursement.',
    assessmentPA: {
      value: 'Required — MVP\'s ABA payment policy requires prior authorization for the assessment, referred by an NYS-licensed, Medicaid-enrolled physician, psychologist, psychiatric NP, pediatric NP, or PA',
      status: 'verified',
      cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'MVP Behavioral Health Services and Authorization Requirements', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider/online-resources/bh-services-and-authorization-requirements' }],
    },
    treatmentPA: {
      value: 'Required — treatment authorized via MVP\'s BH authorization request (fax 1-855-853-4850); 0362T and 0373T appear on the covered-code list but are excluded from Medicaid Managed Care reimbursement specifically',
      status: 'verified',
      cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'MVP Behavioral Health Services and Authorization Requirements', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider/online-resources/bh-services-and-authorization-requirements' }],
    },
    dxRequired: {
      value: 'Yes — under 21, ASD/Rett per the state baseline; MVP\'s 2026 payment-policy update restates the NYS-licensed/Medicaid-enrolled referral rule verbatim, with a 2-year referral validity',
      status: 'verified',
      cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'MVP Health Plan (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · MVP Health Plan (NY)',
    h1: 'MVP Health Plan ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'MVP Health Plan New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How MVP Health Plan authorizes NY Medicaid ABA — its own named ABA payment policy, prior authorization on both assessment and treatment, the 0362T/0373T Medicaid exclusion, the July 2025 school-setting bar, and a telehealth waiver tied to an expired federal deadline.',
    intro: [
      'MVP Health Plan — covering roughly 165,151 members per the state\'s July 2026 enrollment report, across a 30-county Capital Region, Hudson Valley, North Country, and western-NY footprint under its "MVP Medicaid Managed Care" brand (HARP: MVP Harmonious Health Care Plan) — administers behavioral health, including ABA, entirely in-house: no vendor carve-out exists for BH, even though MVP does delegate radiology, musculoskeletal, and post-acute UM to eviCore, Magellan, and naviHealth respectively. MVP publishes an actual named ABA payment policy with real teeth — a firm prior-authorization requirement on assessment and treatment alike, an explicit exclusion of two otherwise-covered codes from Medicaid reimbursement, and a July 2025 school-setting bar — making this one of the better-documented upstate plans in this directory, with only a handful of open questions left for Provider Services.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC (MVP Health Plan, Inc.) — "MVP Medicaid Managed Care"; HARP: MVP Harmonious Health Care Plan' },
      { label: 'Footprint', value: '30 counties spanning Capital Region, Hudson Valley, North Country, and parts of Western NY (incl. Albany, Monroe, Orange, Rockland, Westchester)' },
      { label: 'BH/ABA UM', value: 'In-house — MVP wrote its own ABA medical-necessity criteria in 2021; no vendor carve-out (eviCore/Magellan/naviHealth handle only radiology, MSK, and post-acute)' },
      { label: 'Prior auth', value: 'Required for ABA assessment and treatment alike, per MVP\'s own ABA Payment Policy and its Behavioral Health Authorization Requirements grid' },
      { label: 'Codes excluded from Medicaid', value: '0362T and 0373T appear on MVP\'s general covered-code list but are explicitly excluded from Medicaid Managed Care reimbursement' },
      { label: 'School setting', value: 'ABA (97151–97158, 0362T, 0373T) not reimbursable with Place of Service = School, effective 7/1/2025' },
    ],
    sections: [
      {
        h2: 'A named ABA payment policy — with a Medicaid-specific code exclusion',
        body: [
          'MVP publishes a standalone "Applied Behavior Analysis Services" payment policy (current version effective 4/1/2026), reviewed most recently February 2026 with no changes. It lists the covered codes — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T, and 0373T — but carries a Medicaid-specific carve-out worth flagging for billing: "The following procedures are excluded from Medicaid Managed Care (MMC) plan coverage: Behavior identification supporting assessment (CPT 0362T); Adaptive behavior treatment with protocol modification (0373T)." That exclusion has held across every version of the policy reviewed (2024 through 2026) — so while those two codes are billable on MVP\'s other lines of business, they are not reimbursable under NY Medicaid Managed Care specifically. Separately, RBT/unlicensed-professional-rendered services are only reimbursable under 97152, 97153, and 97154 — not 97151 or 97155–97158.',
        ],
        cites: [
          { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' },
        ],
      },
      {
        h2: 'Prior authorization: required on both ends, referral-gated like the state',
        body: [
          'MVP\'s Behavioral Health Services and Authorization Requirements grid states plainly that Applied Behavior Analysis for NY Medicaid (including CHP) carries "Auth Required," effective with the Medicaid ABA benefit\'s own 1/1/2023 start date, for children ages 0–20. The ABA payment policy confirms prior authorization is required "for ABA Assessments and Services" alike, and its current (2026) version adds a Medicaid-specific referral rule matching the state\'s own: the member must be referred by an NYS-licensed and NYS Medicaid-enrolled physician (including psychiatrist and developmental/behavioral pediatrician), psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant, with the referral valid 2 years and carrying age, diagnosis, date of initial diagnosis, comorbidities, severity, the DSM-5 diagnostic checklist, and a statement of medical necessity. Submit authorization requests by phone (1-800-684-9286), fax (1-855-853-4850) with the clinical support, or by email to BHservices@mvphealthcare.com; MVP\'s Behavioral Health Authorization and Notification request forms are indexed at mvphealthcare.com/providers/forms.',
        ],
        cites: [
          { title: 'MVP Behavioral Health Services and Authorization Requirements', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider/online-resources/bh-services-and-authorization-requirements' },
          { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' },
        ],
      },
      {
        h2: 'The school-setting bar, and what to watch on HARP',
        body: [
          'Effective July 1, 2025, MVP will not reimburse any ABA code (97151–97158, 0362T, 0373T) billed with Place of Service = School — a FastFax notice confirms requests for school-setting delivery are "administratively denied," and treatment plans submitted with a PA request must now specify the place(s) of service. ABA also isn\'t covered as a substitute for Early Intervention or when delivered under an IEP or Preschool/School Supportive Health Services Program. One item worth confirming directly with MVP: earlier policy versions stated ABA was "not covered... for Health and Recovery Plans (HARP)," but the current policy\'s scope line now lists HARP among the covered lines of business without an explicit statement reversing the old exclusion — treat HARP-enrolled members\' ABA coverage as a call-to-confirm rather than an assumed yes.',
        ],
        cites: [
          { title: 'MVP FastFax #2025.16 — ABA School Setting Exclusion (3/27/2025)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/fastfax/2025/2025-16-aba-school-setting-exclusion.pdf' },
          { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' },
        ],
      },
      {
        h2: 'Telehealth and billing basics',
        body: [
          'MVP\'s ABA payment policy ties telehealth reimbursement to a federal waiver rather than stating a firm standing rule: "MVP shall reimburse ABA services delivered via video-enabled telehealth through March 31, 2025, or until the CMS waiver expires, whichever is later. Following the expiration or change of the waiver, MVP may deny ABA services delivered via telehealth in accordance with applicable state laws or regulations." That waiver-contingent language is unchanged in the current (April 2026) policy, so treat ABA telehealth coverage as unconfirmed and verify current status with Provider Services before scheduling remote sessions — audio-only, fax-only, and e-mail-only delivery are explicitly not reimbursable regardless. On claims: timely filing is 180 days from the date of service (or per contract), with a matching 180-day window to request an adjustment after a denial or incorrect payment; EDI submissions use Payee ID 14165, and paper claims go to MVP Health Care, Attn: Claims Department, PO Box 2207, Schenectady, NY 12301.',
        ],
        cites: [
          { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' },
          { title: 'MVP 2025 Provider Policies (Claims, Contacting MVP Health Care)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2025/january/mvp-provider-policies-effective-january-1-2025.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state-style referral packet', desc: 'NYS-licensed, Medicaid-enrolled referring provider; dx + initial dx date, comorbidities, severity, DSM-5 checklist, statement of medical necessity; referral valid 2 years.' },
      { title: 'Place-of-service plan', desc: 'ABA is not reimbursable with POS = School as of 7/1/2025 — confirm the delivery setting before submitting the PA request.' },
      { title: 'HARP status confirmation', desc: 'If the member is HARP-enrolled, confirm ABA coverage directly with MVP — the policy\'s scope and its older HARP exclusion haven\'t been explicitly reconciled in writing.' },
      { title: 'Billing-code check for 0362T/0373T', desc: 'Both are Medicaid-excluded at MVP despite appearing covered elsewhere — verify before billing to avoid a denial.' },
      { title: 'Telehealth status per case', desc: 'MVP\'s telehealth ABA language is tied to an expired federal waiver reference — confirm current reimbursement status before delivering remotely.' },
    ],
    sources: [
      { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' },
      { title: 'MVP Behavioral Health Services and Authorization Requirements', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider/online-resources/bh-services-and-authorization-requirements' },
      { title: 'MVP FastFax #2025.16 — ABA School Setting Exclusion', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/fastfax/2025/2025-16-aba-school-setting-exclusion.pdf' },
      { title: 'MVP 2025 Provider Policies', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2025/january/mvp-provider-policies-effective-january-1-2025.pdf' },
      { title: 'MVP Medicaid Managed Care plan page (30-county service area)', url: 'https://www.mvphealthcare.com/plans/medicaid' },
      { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'MVP states the age band explicitly rather than inheriting it silently: its Behavioral Health Services and Authorization Requirements grid lists Applied Behavior Analysis for NY Medicaid (including CHP) as \u201cAuth Required,\u201d effective with the benefit\u2019s own 1/1/2023 start date, \u201cfor children ages 0\u201320.\u201d That matches the state rule \u2014 under 21, no minimum age.',
        status: 'verified',
        cites: [{ title: 'MVP Behavioral Health Services and Authorization Requirements', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider/online-resources/bh-services-and-authorization-requirements' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule: MVP\u2019s 2026 ABA payment policy restates the state referral rule verbatim, including the two-year validity and the requirement to state the date of initial diagnosis. No maximum age is set on the diagnostic evaluation itself, and MVP publishes no separate recency rule.',
        status: 'verified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule, restated verbatim in MVP\u2019s ABA payment policy: the member must be referred by \u201can NYS-licensed and NYS Medicaid-enrolled physician (including psychiatrist and developmental/behavioral pediatrician), psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant.\u201d LBAs may not diagnose or self-refer.',
        status: 'verified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d MVP\u2019s payment policy restates the state\u2019s referral payload \u2014 age, diagnosis, date of initial diagnosis, comorbidities, severity, the DSM-5 diagnostic checklist and a statement of medical necessity \u2014 and names no instrument of its own.',
        status: 'verified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule, restated verbatim by MVP with the two-year validity and the full seven-element payload, but bolted onto a hard prior-authorization gate on both ends: the payment policy requires prior authorization \u201cfor ABA Assessments and Services\u201d alike, and the BH authorization grid marks ABA \u201cAuth Required\u201d for Medicaid and CHP from 1/1/2023. Submit by phone (1-800-684-9286), fax (1-855-853-4850) with the clinical support, or email to BHservices@mvphealthcare.com. Treatment plans submitted with a PA request must now specify the place(s) of service.',
        status: 'verified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'MVP Behavioral Health Services and Authorization Requirements', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider/online-resources/bh-services-and-authorization-requirements' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      telehealth: {
        value:
          'Published but tied to a lapsed federal deadline, so treat it as open. MVP\u2019s ABA payment policy says it \u201cshall reimburse ABA services delivered via video-enabled telehealth through March 31, 2025, or until the CMS waiver expires, whichever is later. Following the expiration or change of the waiver, MVP may deny ABA services delivered via telehealth in accordance with applicable state laws or regulations\u201d \u2014 language unchanged in the April 2026 policy. What is unconditional: audio-only, fax-only and e-mail-only delivery are not reimbursable.',
        status: 'unverified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }],
        verifyVia:
          'MVP Provider Services \u2014 confirm the current telehealth reimbursement status for ABA codes before scheduling remote sessions; the policy\u2019s waiver reference has not been updated since the cited date passed.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d MVP publishes no supervision ratio of its own. What it does publish is a rendering restriction that shapes the staffing model: RBT- and unlicensed-professional-rendered services \u201care only reimbursable under 97152, 97153, and 97154 \u2014 not 97151 or 97155\u201397158,\u201d so supervision, protocol modification and family guidance must be delivered by the analyst.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. MVP\u2019s ABA payment policy is explicit about who may render which code and which codes are excluded from Medicaid, but states no same-clock-time rule for 97153 with 97155, and the state manual is silent.',
        status: 'unverified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'MVP Provider Services (behavioral health 1-800-684-9286) \u2014 confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling or hour cap is published \u2014 MVP authorizes rather than capping. The constraint that bites instead is code-level: \u201cthe following procedures are excluded from Medicaid Managed Care (MMC) plan coverage: Behavior identification supporting assessment (CPT 0362T); Adaptive behavior treatment with protocol modification (0373T),\u201d an exclusion that has held across every policy version from 2024 through 2026 even though both codes appear on MVP\u2019s general covered-code list. On claims: timely filing is 180 days from the date of service or per contract, with a matching 180-day adjustment window; EDI payee ID 14165.',
        status: 'verified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }],
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d MVP adds no session-note signature rule of its own; its documentation requirements run to the authorization request and the treatment plan, which must specify the place(s) of service.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }],
      },
      placeOfService: {
        value:
          'The strictest published school rule among New York\u2019s upstate plans. Effective July 1, 2025 MVP will not reimburse any ABA code \u2014 97151\u201397158, 0362T, 0373T \u2014 billed with Place of Service = School; requests for school-setting delivery are \u201cadministratively denied,\u201d and treatment plans submitted with a PA request must specify the place(s) of service. ABA is also not covered as a substitute for Early Intervention or when delivered under an IEP or a Preschool/School Supportive Health Services Program. That sits on top of the state rule, which already bars school-setting ABA; home, clinic and community remain available.',
        status: 'verified',
        cites: [{ title: 'MVP FastFax #2025.16 \u2014 ABA School Setting Exclusion', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/fastfax/2025/2025-16-aba-school-setting-exclusion.pdf' }, { title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'MVP does not publish an NPI convention, but it does publish the rendering restriction that governs who may bill what: RBT- and unlicensed-professional-rendered services \u201care only reimbursable under 97152, 97153, and 97154\u201d \u2014 not 97151 or 97155\u201397158. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Claims route by EDI to payee ID 14165, or by paper to MVP Health Care, Attn: Claims Department, PO Box 2207, Schenectady, NY 12301.',
        status: 'verified',
        cites: [{ title: 'MVP Applied Behavior Analysis Services Payment Policy (eff. 4/1/2026)', url: 'https://www.mvphealthcare.com/-/media/project/mvp/healthcare/documents/provider-policies-and-payment-policies/2026/april/mvp-payment-policies-effective-april-1-2026.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'MVP Provider Services for the rendering/supervising NPI convention on managed-care ABA claims.',
      },
    },
    faq: [
      { q: 'Does MVP Health Plan cover ABA therapy?', a: 'Yes — MVP carries the NY Medicaid ABA carve-in and publishes its own ABA Payment Policy, with prior authorization required for both assessment and treatment and in-house behavioral health utilization management (no vendor carve-out).' },
      { q: 'Are all ABA codes billable to MVP Medicaid?', a: 'Not quite — 0362T and 0373T appear on MVP\'s general covered-code list but are explicitly excluded from Medicaid Managed Care reimbursement specifically. Confirm code-by-code before billing.' },
      { q: 'Can ABA be delivered in a school setting for MVP Medicaid members?', a: 'No — effective July 1, 2025, MVP administratively denies any ABA code billed with Place of Service = School, across all its lines of business.' },
      { q: 'Does MVP cover ABA via telehealth?', a: 'Unclear as of this review — MVP\'s payment policy ties telehealth ABA reimbursement to a CMS waiver referencing a March 31, 2025 date without a subsequent update, so confirm current telehealth status with Provider Services before scheduling remote sessions.' },
    ],
  },

  'cdphp-new-york': {
    slug: 'cdphp-new-york',
    cardDesc: 'Capital District plan; ABA codes named in-house at CDPHP\'s own Behavioral Health Access Center — but PA specifics and limits sit behind the secure portal.',
    assessmentPA: {
      value: 'Not confirmed \u2014 outpatient BH by participating practitioners needs no authorization, but \u201ccertain\u201d Medicaid\u2013Select/HARP behavioral services do; whether 97151 is among them sits in the secure-portal Prior Authorization Guideline. Confirm at the Behavioral Health Access Center (518-641-3600 / 1-888-320-9584)',
      status: 'unverified',
      cites: [{ title: 'CDPHP Provider Office Administrative Manual, Section 18 — Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 5 — Referral/Authorization Process (rev. January 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-5-referral-authorization-process.pdf' }],
      verifyVia:
        'CDPHP’s “Prior Authorization Guideline” — the complete list of Medicaid–Select and HARP behavioral services requiring prior authorization, held behind the secure login at provider.cdphp.com and not readable from public materials. Until it can be retrieved, the Behavioral Health Access Center (518-641-3600 / 1-888-320-9584) answers per case.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not confirmed \u2014 same secure-portal deferral; the POAM names 97151\u201397158 as covered with \u201cno maximum benefit\u201d but routes code-level PA questions to the Behavioral Health Access Center. Get the answer in writing per case',
      status: 'unverified',
      cites: [{ title: 'CDPHP Provider Office Administrative Manual, Section 18 — Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 5 — Referral/Authorization Process (rev. January 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-5-referral-authorization-process.pdf' }],
      verifyVia:
        'CDPHP’s “Prior Authorization Guideline” — the complete list of Medicaid–Select and HARP behavioral services requiring prior authorization, held behind the secure login at provider.cdphp.com and not readable from public materials. Until it can be retrieved, the Behavioral Health Access Center (518-641-3600 / 1-888-320-9584) answers per case.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD/Rett per DSM-5, with the state practitioner referral; CDPHP names 97151–97158 in its POAM but defers PA/limit specifics to the secure provider portal',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 — Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
    },
    payer: 'CDPHP (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · CDPHP (NY)',
    h1: 'CDPHP ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'CDPHP New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CDPHP (Capital District Physicians\' Health Plan) handles NY Medicaid ABA — its in-house Behavioral Health Access Center, the ABA codes named in the Provider Office Administrative Manual, and the prior-auth and telehealth specifics that sit behind the secure provider portal.',
    intro: [
      'CDPHP — Capital District Physicians\' Health Plan, Inc., covering 80,854 Medicaid Managed Care members per the state\'s July 2026 enrollment report — runs its NY Medicaid ABA benefit through its own "Medicaid–Select Plan" and "Medicaid–HARP" products, with behavioral health managed entirely in-house through an internal Behavioral Health Access Center rather than an outside BH vendor. CDPHP\'s Provider Office Administrative Manual (POAM) names the ABA CPT codes directly and states the benefit carries no annual maximum, which is more than several plans in this directory publish — but the manual repeatedly defers the actual prior-authorization mechanics and code-level limits to a "Prior Authorization Guideline" document that sits behind the secure provider-portal login, so this guide covers what CDPHP states plainly and flags what to confirm before booking.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC — "Medicaid–Select Plan" and "Medicaid–HARP" (Capital District Physicians\' Health Plan, Inc.)' },
      { label: 'Footprint', value: 'Capital District (Albany-area)' },
      { label: 'BH/ABA UM', value: 'In-house — CDPHP Behavioral Health Access Center (518-641-3600 / 1-888-320-9584); no named BH vendor carve-out' },
      { label: 'ABA benefit limit', value: '"Not subject to a maximum benefit" — covered until services are no longer medically necessary, per the POAM' },
      { label: 'ABA codes named', value: '97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158 — PA/limit specifics deferred to the secure portal' },
      { label: 'Credentialing', value: 'ABA must be provided or supervised by a NYS-licensed, board-certified behavior analyst (BCBA/BCBA-D) per the POAM' },
    ],
    sections: [
      {
        h2: 'What CDPHP states plainly — and what it defers to the portal',
        body: [
          'CDPHP\'s Provider Office Administrative Manual, Section 18 (Behavioral Health), names the ABA benefit directly: "Applied behavior analysis — Coverage is not subject to a maximum benefit and the individual is covered until the services are no longer medically necessary." It lists the CPT codes in scope — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158 — and requires that "ABA services must be provided by or supervised by a NYS-licensed, board-certified behavior analyst (BCBA/BCBA-D)," noting CDPHP maintains a credentialed ABA provider network. For the operational detail — code-level prior-authorization requirements, unit or session limits, and documentation specifics — the manual repeatedly points providers to "the complete policy by logging in securely at provider.cdphp.com," so those specifics aren\'t independently confirmable from public materials.',
        ],
        cites: [
          { title: 'CDPHP Provider Office Administrative Manual, Section 18 — Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' },
        ],
      },
      {
        h2: 'Prior authorization: a general BH gate, ABA specifics unconfirmed',
        body: [
          'CDPHP\'s general behavioral-health rule is that no authorization is required for outpatient mental health or substance-use-disorder treatment by participating psychiatrists, psychiatric NPs, psychologists, LMSWs, and mental health counselors — but "certain behavioral health services in Medicaid–Select Plan and Medicaid–HARP require prior authorization by calling the Behavioral Health Access Center," with the complete list held in the secure-portal "Prior Authorization Guideline" document. Nothing in CDPHP\'s public materials confirms whether the ABA assessment (97151) is treated under that general no-PA rule or is one of the "certain services" requiring authorization, nor whether the treatment codes carry unit caps. Route ABA authorization questions to the Behavioral Health Access Center directly, and get the answer in writing per case before scheduling.',
        ],
        cites: [
          { title: 'CDPHP Provider Office Administrative Manual, Section 18 — Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' },
          { title: 'CDPHP Provider Office Administrative Manual, Section 5 — Referral/Authorization Process (rev. January 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-5-referral-authorization-process.pdf' },
        ],
      },
      {
        h2: 'Telehealth and billing basics',
        body: [
          'CDPHP has no published ABA-specific telehealth billing policy (place-of-service code, modifier, or reimbursement parity) in any document we could access; its behavioral-health provider resources instead link out to the American Telemedicine Association\'s 2017 "Practice Guidelines for Telemental Health with Children and Adolescents" — a third-party clinical-practice standard, not a CDPHP coverage commitment. On claims: CDPHP\'s Claim Submission manual repeatedly references a filing deadline "within established filing limits" without stating the specific day count in the sections we could access, so confirm the exact timely-filing window with Provider Services; claim disputes use a "Provider Review Form" filed within 6 months of the claim\'s adjudication date, mailed to CDPHP Provider Services, 6 Wellness Way, Latham, NY 12110.',
        ],
        cites: [
          { title: 'CDPHP — American Telemedicine Association telemental health guidelines (hosted resource)', url: 'https://www.cdphp.com/-/media/files/providers/behavioral-health/hedis-toolkit-and-bh-guidelines/practice-guidelines-telemental-health.pdf' },
          { title: 'CDPHP Provider Office Administrative Manual, Section 9 — Claim Submission (rev. July 2024)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-9-claim-submission.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state referral packet', desc: 'Under-21 ASD/Rett dx, referral with severity and DSM-5 checklist — the clinical baseline CDPHP\'s POAM sits on top of.' },
      { title: 'BCBA/BCBA-D credentials', desc: 'CDPHP requires ABA be provided or supervised by a NYS-licensed BCBA/BCBA-D — confirm network credentialing status before scheduling.' },
      { title: 'PA confirmation in writing', desc: 'Code-level PA requirements and any limits aren\'t published — call the Behavioral Health Access Center (518-641-3600 / 1-888-320-9584) and get the answer in writing per case.' },
      { title: 'Telehealth confirmation', desc: 'No CDPHP-specific ABA telehealth billing policy was found — verify POS/modifier requirements before delivering remotely.' },
      { title: 'Timely filing window', desc: 'The exact day-count for claims filing isn\'t stated in the public POAM sections — confirm with Provider Services (518-641-3500 / 1-800-926-7526).' },
    ],
    sources: [
      { title: 'CDPHP Provider Office Administrative Manual, Section 18 — Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' },
      { title: 'CDPHP Provider Office Administrative Manual, Section 5 — Referral/Authorization Process (rev. January 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-5-referral-authorization-process.pdf' },
      { title: 'CDPHP Provider Office Administrative Manual, Section 9 — Claim Submission (rev. July 2024)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-9-claim-submission.pdf' },
      { title: 'CDPHP — American Telemedicine Association telemental health guidelines (hosted resource)', url: 'https://www.cdphp.com/-/media/files/providers/behavioral-health/hedis-toolkit-and-bh-guidelines/practice-guidelines-telemental-health.pdf' },
      { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. CDPHP\u2019s Provider Office Administrative Manual names ABA as a covered Medicaid\u2013Select Plan and Medicaid\u2013HARP benefit without setting an age of its own, and adds that \u201ccoverage is not subject to a maximum benefit and the individual is covered until the services are no longer medically necessary.\u201d',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule \u2014 the two-year referral is the clock and no maximum age is set on the diagnostic evaluation. CDPHP publishes no recency rule of its own; its manual defers documentation specifics to a \u201cPrior Authorization Guideline\u201d document behind the secure provider-portal login.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
        verifyVia:
          'The secure Prior Authorization Guideline at provider.cdphp.com, or the CDPHP Behavioral Health Access Center (518-641-3600 / 1-888-320-9584).',
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. CDPHP names a delivery credential rather than a diagnostic one: \u201cABA services must be provided by or supervised by a NYS-licensed, board-certified behavior analyst (BCBA/BCBA-D),\u201d with a credentialed ABA provider network maintained.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d No CDPHP-specific instrument requirement is published; documentation specifics sit behind the secure-portal Prior Authorization Guideline.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
        verifyVia:
          'The secure Prior Authorization Guideline at provider.cdphp.com, or the Behavioral Health Access Center.',
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. CDPHP\u2019s own authorization posture is genuinely ambiguous from public materials: outpatient mental health and substance-use treatment by participating psychiatrists, psychiatric NPs, psychologists, LMSWs and mental health counselors needs no authorization, but \u201ccertain behavioral health services in Medicaid\u2013Select Plan and Medicaid\u2013HARP require prior authorization by calling the Behavioral Health Access Center,\u201d with the list held in the secure-portal Prior Authorization Guideline. Nothing published confirms whether the ABA codes are among them.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 5 \u2014 Referral/Authorization Process (rev. January 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-5-referral-authorization-process.pdf' }],
        verifyVia:
          'The CDPHP Behavioral Health Access Center (518-641-3600 / 1-888-320-9584) \u2014 confirm per case in writing whether 97151 and the treatment codes require PA.',
      },
      telehealth: {
        value:
          'Not published. CDPHP has no ABA-specific telehealth billing policy \u2014 no place-of-service code, modifier or reimbursement-parity statement \u2014 in any document we could access; its behavioral-health resources instead link out to the American Telemedicine Association\u2019s 2017 telemental-health practice guidelines, a third-party clinical standard rather than a coverage commitment.',
        status: 'unverified',
        cites: [{ title: 'CDPHP \u2014 American Telemedicine Association telemental health guidelines (hosted resource)', url: 'https://www.cdphp.com/-/media/files/providers/behavioral-health/hedis-toolkit-and-bh-guidelines/practice-guidelines-telemental-health.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
        verifyVia:
          'The CDPHP Behavioral Health Access Center (518-641-3600 / 1-888-320-9584) \u2014 confirm POS and modifier requirements before delivering remotely.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'CDPHP states the credential \u2014 \u201cABA services must be provided by or supervised by a NYS-licensed, board-certified behavior analyst (BCBA/BCBA-D)\u201d \u2014 but publishes no ratio. The numbers come from the state and apply to managed care alike: 5% of each unlicensed individual\u2019s monthly service hours supervised, at least two face-to-face real-time contacts per month with one observation of service delivery, and no more than six CBAAs/unlicensed individuals per LBA.',
        status: 'verified',
        cites: [{ title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. CDPHP\u2019s manual names the ABA codes in scope (97151\u201397158) but defers code-level rules to the secure-portal Prior Authorization Guideline, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'The CDPHP Behavioral Health Access Center (518-641-3600 / 1-888-320-9584) and the secure Prior Authorization Guideline at provider.cdphp.com.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No annual maximum \u2014 \u201ccoverage is not subject to a maximum benefit and the individual is covered until the services are no longer medically necessary\u201d \u2014 but that does not rule out per-authorization unit limits, which sit behind the secure-portal Prior Authorization Guideline along with the code-level PA requirements. Confirm before assuming unlimited units.',
        status: 'verified',
        cites: [{ title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
        verifyVia:
          'The secure Prior Authorization Guideline at provider.cdphp.com, or the Behavioral Health Access Center \u2014 confirm per-authorization unit limits.',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d CDPHP publishes no additional session-note signature rule; its documentation specifics are deferred to the secure provider portal.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. CDPHP publishes no setting rule of its own; the state\u2019s school bar is the operative constraint.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }],
      },
      billAsProvider: {
        value:
          'Not published as a claim convention. CDPHP requires ABA to be provided or supervised by a NYS-licensed BCBA/BCBA-D within its credentialed network, but names no rendering-versus-supervising NPI rule, and its Claim Submission manual references a filing deadline \u201cwithin established filing limits\u201d without stating the day count in the sections we could access. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers.',
        status: 'unverified',
        cites: [{ title: 'CDPHP Provider Office Administrative Manual, Section 18 \u2014 Behavioral Health (rev. July 2025)', url: 'https://www.cdphp.com/-/media/files/providers/poam/section-18-behavioral-health.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'CDPHP Provider Services (518-641-3500 / 1-800-926-7526) \u2014 confirm the rendering/supervising NPI convention and the exact timely-filing window.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does CDPHP cover ABA therapy?', a: 'Yes — CDPHP\'s Provider Office Administrative Manual names ABA (CPT 97151–97158) as a covered Medicaid–Select Plan and Medicaid–HARP benefit with no maximum benefit limit, provided or supervised by a NYS-licensed BCBA/BCBA-D.' },
      { q: 'Does CDPHP require prior authorization for ABA?', a: 'Not confirmed from public materials — CDPHP states that "certain" behavioral health services in its Medicaid lines require prior authorization via the Behavioral Health Access Center, but doesn\'t specify whether ABA codes are among them. Confirm per case at 518-641-3600 / 1-888-320-9584.' },
      { q: 'Is there a session or dollar cap on CDPHP\'s ABA benefit?', a: 'CDPHP\'s manual states the benefit "is not subject to a maximum benefit," but doesn\'t rule out per-authorization unit limits, which sit behind the secure-portal Prior Authorization Guideline — confirm before assuming unlimited units.' },
    ],
  },

  'independent-health-new-york': {
    slug: 'independent-health-new-york',
    cardDesc: 'Erie County/Buffalo only (not Monroe); Carelon runs general BH, but ABA looks to be administered directly by Independent Health — confirm which before routing a case.',
    assessmentPA: {
      value: 'Not published \u2014 the MediSource handbook\u2019s member-facing PA list doesn\u2019t name ABA, but that list is a simplified summary, not the provider procedure-code grid; confirm per case (716-250-7183 / 1-833-891-9372)',
      status: 'unverified',
      cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }],
      verifyVia:
        'Independent Health’s provider prior-authorization procedure-code grid for MediSource, which sits behind the HealthTrio Connect provider-portal login — the handbook’s member-facing PA list is a simplified summary, not that grid. Provider Services (716-250-7183 / 1-833-891-9372) in the meantime.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not published \u2014 and settle the routing question first: Carelon manages general BH for Independent Health\u2019s state products while ABA appears to be administered by Independent Health directly (strongly indicated, not confirmed in one explicit sentence)',
      status: 'unverified',
      cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'Independent Health — Behavioral Health for State Products', url: 'https://www.independenthealth.com/providers/policies-and-guidelies/behavioral-health-for-state-products' }],
      verifyVia:
        'The same HealthTrio-gated MediSource prior-authorization procedure-code grid — and settle the routing question with Provider Services first (716-250-7183 / 1-833-891-9372): whether Independent Health or Carelon Behavioral Health actually adjudicates ABA authorizations and claims.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes — state baseline: under 21, ASD and/or Rett syndrome, assessed/treated by a Licensed Behavior Analyst or a Certified Behavior Analyst Assistant under LBA supervision, per the MediSource member handbook',
      status: 'verified',
      cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
    },
    payer: 'Independent Health (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Independent Health (NY)',
    h1: 'Independent Health ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'Independent Health New York (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Independent Health (MediSource) handles NY Medicaid ABA — the Erie County-only footprint, Carelon\'s behavioral-health delegation and where ABA appears to sit outside it, and the prior-auth and billing specifics that remain unpublished.',
    intro: [
      'Independent Health Association runs NY Medicaid Managed Care under the brand "MediSource" (HARP: MediSource Connect), covering 60,812 members per the state\'s July 2026 enrollment report — all of them in Erie County, the Buffalo market; the state\'s own enrollment tables do not list Independent Health under Monroe County, so treat this as a Buffalo/Erie plan rather than a Buffalo-and-Rochester one. Independent Health delegates behavioral health benefit management for its state products to Carelon Behavioral Health — but the evidence points to ABA sitting outside that delegation: the current MediSource member handbook places its ABA section apart from the "Behavioral Health Care" section that carries Carelon\'s crisis-line branding throughout, describing ABA in "Independent Health covers..." language instead. That distinction isn\'t stated explicitly in a single provider-facing sentence we could find, so this guide treats it as strongly indicated rather than certain, and flags it as the first thing to confirm on any Independent Health case.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC — "MediSource"; HARP: "MediSource Connect" (Independent Health Association, Inc.)' },
      { label: 'Footprint', value: 'Erie County (Buffalo) — the state\'s enrollment tables do not list Independent Health under Monroe County' },
      { label: 'BH/ABA UM', value: 'Carelon Behavioral Health manages general BH for MediSource; ABA appears to sit outside that delegation and be administered by Independent Health directly (strongly indicated, not confirmed in an explicit statement)' },
      { label: 'Prior auth', value: 'Not published for ABA codes specifically — the member handbook\'s general PA list doesn\'t name ABA; confirm with Provider Services' },
      { label: 'Providers', value: 'Licensed Behavior Analyst (LBA), or Certified Behavior Analyst Assistant (CBAA) under LBA supervision, per the MediSource handbook' },
      { label: 'Portal', value: 'HealthTrio Connect (general); Carelon\'s provider.beaconhealthoptions.com for BH-delegated services' },
    ],
    sections: [
      {
        h2: 'The Carelon delegation — and why ABA looks like the exception',
        body: [
          'Independent Health states directly, on its current provider policies page, that "Carelon now oversees all behavioral health benefit management services for our MediSource, MediSource Connect, Child Health Plus and Essential Plans" — covering appeals, care management, claims, eligibility, prior authorization, network operations, and utilization review for behavioral health generally. But the 2026 MediSource Member Handbook places its "Applied Behavior Analysis (ABA) Services" description in a separate part of the document — grouped with Children\'s HCBS and Article 29-I VFCA services rather than the "Behavioral Health Care" (mental health/substance use) section — and describes it in "Independent Health covers..." and "Independent Health will work with you and your provider" language, with no Carelon reference anywhere in that section, while every page of the Behavioral Health Care section footers Carelon\'s crisis line. That placement is consistent with New York\'s statewide pattern of no BH-vendor carve-out for the mainstream MMC ABA benefit — but because no single sentence confirms it plainly, verify with Provider Services which entity (Independent Health or Carelon) actually adjudicates ABA authorizations and claims before routing a case to either one.',
        ],
        cites: [
          { title: 'Independent Health — Behavioral Health for State Products', url: 'https://www.independenthealth.com/providers/policies-and-guidelies/behavioral-health-for-state-products' },
          { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' },
        ],
      },
      {
        h2: 'Eligibility and providers, per the member handbook',
        body: [
          'The MediSource handbook states ABA is covered for children/youth under 21 with autism spectrum disorder and/or Rett syndrome, with assessment and treatment delivered by a physician, Licensed Behavior Analyst (LBA), or Certified Behavior Analyst Assistant (CBAA) working under LBA supervision — matching the state\'s licensure framework. Covered service types named include individual treatment in the home or another setting, group adaptive behavior treatment, and family/caregiver training and support. No Independent Health-specific documentation list (beyond the state\'s own referral requirements), assessment instruments, or reauthorization cadence is published for MediSource — those specifics, if they exist, sit behind the HealthTrio provider-portal login.',
        ],
        cites: [
          { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' },
        ],
      },
      {
        h2: 'Prior authorization, telehealth, and billing basics',
        body: [
          'No Independent Health document we could access confirms whether the ABA assessment or treatment codes require prior authorization for MediSource — the handbook\'s general member-facing PA-required list (out-of-plan services, subacute/SNF admissions, home care, personal care, PERS, mental health, DME, certain surgeries) does not name ABA specifically, but that list is a simplified member summary, not the provider procedure-code grid, so its silence isn\'t proof no PA is required. No ABA-specific telehealth policy was found either. On billing: Carelon\'s claims rules for Independent Health\'s other behavioral-health services set timely filing at 90 days from date of service for MediSource (120 days for Essential Plan/Child Health Plus) — whether that same window applies to ABA claims, or whether ABA bills to Independent Health directly on a different timeline, is unconfirmed. Confirm PA requirements, telehealth eligibility, and the correct claims-filing window with Provider Services before booking or billing.',
        ],
        cites: [
          { title: 'Independent Health/Beacon Provider FAQ Tip Sheet (2016; general BH claims rules, unconfirmed as still current)', url: 'https://www.independenthealth.com/content/dam/independenthealth/provider/Policies-and-Guidelines/documents/IHBeaconProviderFAQTipSheet.pdf' },
          { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state referral packet', desc: 'Under-21 ASD/Rett dx, referral with severity and DSM-5 checklist — the clinical baseline MediSource sits on top of.' },
      { title: 'Which entity to route to', desc: 'Confirm whether Independent Health or Carelon actually handles ABA authorization/claims for this member before submitting anything — the public materials don\'t settle it explicitly.' },
      { title: 'LBA/CBAA credentials', desc: 'The handbook requires LBA delivery or LBA-supervised CBAA delivery — confirm network credentialing status.' },
      { title: 'PA confirmation in writing', desc: 'ABA-specific PA requirements aren\'t published — confirm per case via Member Services (716-250-7183 / 1-833-891-9372) or the provider portal.' },
      { title: 'County/plan match', desc: 'Independent Health\'s MediSource footprint is Erie County — confirm the member is actually in-service-area before assuming coverage.' },
    ],
    sources: [
      { title: 'Independent Health — Behavioral Health for State Products', url: 'https://www.independenthealth.com/providers/policies-and-guidelies/behavioral-health-for-state-products' },
      { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' },
      { title: 'Independent Health — MediSource plan page', url: 'https://www.independenthealth.com/individuals-and-families/find-a-health-plan/state-plans/medisource' },
      { title: 'Independent Health — MediSource Connect (HARP) plan page', url: 'https://www.independenthealth.com/individuals-and-families/find-a-health-plan/state-plans/medisource-connect' },
      { title: 'Independent Health/Beacon Provider FAQ Tip Sheet (2016)', url: 'https://www.independenthealth.com/content/dam/independenthealth/provider/Policies-and-Guidelines/documents/IHBeaconProviderFAQTipSheet.pdf' },
      { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Stated in the plan\u2019s own member handbook and matching the state: the MediSource handbook covers ABA for children and youth under 21 with autism spectrum disorder and/or Rett syndrome. No minimum age; no adult pathway.',
        status: 'verified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule \u2014 the two-year referral is the clock, and no maximum age is set on the diagnostic evaluation. \u201cNo Independent Health-specific documentation list (beyond the state\u2019s own referral requirements), assessment instruments, or reauthorization cadence is published for MediSource\u201d; those specifics, if they exist, sit behind the HealthTrio provider-portal login.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }],
        verifyVia:
          'Independent Health Provider Services or the HealthTrio Connect portal \u2014 confirm whether MediSource adds a recency rule.',
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule for the referral, with the handbook restating the delivery side: assessment and treatment are delivered \u201cby a physician, Licensed Behavior Analyst (LBA), or Certified Behavior Analyst Assistant (CBAA) working under LBA supervision.\u201d LBAs and CBAAs may not diagnose or self-refer, so the diagnosing clinician must come from the state\u2019s practitioner list.',
        status: 'verified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the New York Medicaid rule: no instrument is mandated. What the state requires with the referral is the \u201cDSM-5 Diagnostic Checklist for ASD diagnoses\u201d plus the severity level when the referral comes from an ASD-diagnosing provider; the treatment plan need only record the assessment methodology used and, \u201cas appropriate, identify standardized assessment used (e.g., adaptive behavior scales, symptom inventories, aggression ratings) and results.\u201d No Independent Health-specific instrument requirement is published for MediSource.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }],
        verifyVia:
          'Independent Health Provider Services or the HealthTrio Connect portal.',
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. Whether MediSource layers prior authorization on the ABA codes is unresolved: the handbook\u2019s general member-facing PA-required list (out-of-plan services, subacute/SNF admissions, home care, personal care, PERS, mental health, DME, certain surgeries) does not name ABA, but that list is a simplified member summary rather than the provider procedure-code grid, so its silence is not proof. The first thing to settle on any case is which entity adjudicates: Carelon Behavioral Health manages general BH for Independent Health\u2019s state products, while ABA appears from the handbook\u2019s structure to be administered by Independent Health directly \u2014 strongly indicated, not stated in one explicit sentence.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'Independent Health \u2014 Behavioral Health for State Products', url: 'https://www.independenthealth.com/providers/policies-and-guidelies/behavioral-health-for-state-products' }],
        verifyVia:
          'Independent Health Member/Provider Services (716-250-7183 / 1-833-891-9372) \u2014 confirm in writing whether ABA requires PA and whether Independent Health or Carelon adjudicates it.',
      },
      telehealth: {
        value:
          'Not published. No ABA-specific telehealth policy was found in any Independent Health document we could access, and the state manual answers telehealth only for supervision.',
        status: 'unverified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Independent Health Provider Services \u2014 confirm telehealth eligibility, code list and place of service before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'The MediSource handbook restates New York\u2019s structure \u2014 ABA delivered by a physician, an LBA, or a CBAA working under LBA supervision \u2014 and the numeric floor comes from the state, applying to managed care alike: 5% of each unlicensed individual\u2019s monthly service hours, at least two face-to-face real-time contacts per month with one observation, and no more than six CBAAs/unlicensed individuals per LBA.',
        status: 'verified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Independent Health\u2019s retrievable ABA content is the member handbook\u2019s benefit description; no claim-edit rule for 97153 with 97155 was located, and the state manual is silent.',
        status: 'unverified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Independent Health Provider Services \u2014 and confirm first whether Independent Health or Carelon adjudicates ABA claims for the member.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published \u2014 no authorization periods, unit ceilings or hour-cap logic appear in the MediSource materials we could access, and the state sets no per-day ceiling either. On claims, Carelon\u2019s rules for Independent Health\u2019s other behavioral-health services set timely filing at 90 days from date of service for MediSource (120 days for Essential Plan and Child Health Plus), but whether that window applies to ABA \u2014 or whether ABA bills to Independent Health directly on a different timeline \u2014 is unconfirmed.',
        status: 'unverified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'Independent Health \u2014 Behavioral Health for State Products', url: 'https://www.independenthealth.com/providers/policies-and-guidelies/behavioral-health-for-state-products' }],
        verifyVia:
          'Independent Health Provider Services \u2014 confirm authorization periods, unit limits and the correct claims-filing window for ABA specifically.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d No Independent Health-specific documentation or signature rule was located for MediSource.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }],
      },
      placeOfService: {
        value:
          'The MediSource handbook names the covered service types \u2014 individual treatment in the home or another setting, group adaptive behavior treatment, and family/caregiver training and support \u2014 without publishing a setting restriction of its own. The state rule supplies the limit: any legally authorized setting, but NYS Medicaid does not reimburse ABA in a school setting.',
        status: 'verified',
        cites: [{ title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      billAsProvider: {
        value:
          'Not published, and the routing question comes first: confirm whether Independent Health or Carelon Behavioral Health actually adjudicates ABA authorizations and claims for the member before submitting anything, since the public materials do not settle it explicitly. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers.',
        status: 'unverified',
        cites: [{ title: 'Independent Health \u2014 Behavioral Health for State Products', url: 'https://www.independenthealth.com/providers/policies-and-guidelies/behavioral-health-for-state-products' }, { title: 'Independent Health MediSource Member Handbook (2026)', url: 'https://www.independenthealth.com/content/dam/independenthealth/individuals-and-families/find-a-health-plan/documents/state/medisource-member-handbook.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Independent Health Provider Services \u2014 confirm the adjudicating entity, the rendering/supervising NPI convention and the claims-filing window.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Independent Health cover ABA therapy?', a: 'Yes — its MediSource Medicaid plan covers ABA for members under 21 with ASD and/or Rett syndrome, delivered by an LBA or an LBA-supervised CBAA, per the current member handbook.' },
      { q: 'Does Carelon handle ABA authorizations for Independent Health?', a: 'Carelon manages general behavioral health for Independent Health\'s state products, but ABA appears to be administered by Independent Health directly based on how the member handbook separates the two benefits — not confirmed in one explicit sentence, so verify with Provider Services before routing a case.' },
      { q: 'Is Independent Health available in Rochester/Monroe County?', a: 'No — the state\'s Medicaid Managed Care enrollment tables list Independent Health only under Erie County (Buffalo), not Monroe County.' },
    ],
  },

  'highmark-western-new-york': {
    slug: 'highmark-western-new-york',
    family: 'bcbs',
    cardDesc: '8 WNY counties; ABA requires authorization and carries a stated $45,000/year cap — delegate is Wellpoint Partnership Plan (a Carelon mention in the same manual is unresolved).',
    assessmentPA: {
      value: 'Required — a standalone "Request for Authorization: Autism Spectrum Disorder Testing" form gates the diagnostic workup, submitted via Availity Essentials or fax to 844-452-8073',
      status: 'verified',
      cites: [{ title: 'Highmark WNY — Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' }, { title: 'Highmark BCBS of Western New York Provider Manual — Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }],
    },
    treatmentPA: {
      value: 'Required — ABA services are listed as requiring authorization across MMC, HARP, and CHPlus in the Provider Manual\'s PA table; the same manual states a $45,000-per-calendar-year ABA benefit maximum',
      status: 'verified',
      cites: [{ title: 'Highmark BCBS of Western New York Provider Manual — Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }],
    },
    dxRequired: {
      value: 'Yes — state baseline (under 21, ASD/Rett); Highmark\'s testing-authorization form asks for validated screeners (ASRS, SCQ, SRS, M-CHAT, CARS, GADS) plus DSM-5/ICD-10 codes',
      status: 'verified',
      cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark WNY — Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' }],
    },
    payer: 'Highmark Western and Northeastern New York (NY Medicaid)',
    state: 'NY', kind: 'medicaid-mco', parent: 'New York Medicaid',
    pill: 'Payer Guide · Highmark WNY (NY)',
    h1: 'Highmark Western and Northeastern New York ABA coverage (NY Medicaid Managed Care).',
    metaTitle: 'Highmark Western NY (Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Highmark Western and Northeastern New York (formerly HealthNow/BCBS of Western NY) authorizes NY Medicaid ABA — the $45,000/year benefit cap, prior auth on assessment and treatment, the Wellpoint Partnership Plan delegation, and telehealth codes from a dated COVID-era bulletin.',
    intro: [
      'Highmark Western and Northeastern New York Inc. — the plan formerly branded HealthNow New York / BlueCross BlueShield of Western New York, now operating as "Highmark Blue Cross Blue Shield of Western New York" since the 2021 Highmark affiliation — runs NY Medicaid Managed Care, HARP, and Child Health Plus across eight Western New York counties (Allegany, Cattaraugus, Chautauqua, Erie, Genesee, Niagara, Orleans, and Wyoming), covering 45,881 members per the state\'s July 2026 enrollment report. Unlike several plans in this directory, Highmark WNY names its ABA rules with unusual specificity — a stated dollar cap, an explicit prior-authorization requirement, and named telehealth codes — through a longstanding delegation to Wellpoint Partnership Plan, LLC (formerly Amerigroup Partnership Plan), which the plan\'s own Provider Manual says has managed its Medicaid behavioral health since 2016.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Mainstream MMC, HARP & CHPlus — "Highmark Blue Cross Blue Shield of Western New York" (legal entity: Highmark Western and Northeastern New York Inc.)' },
      { label: 'Footprint', value: '8 counties: Allegany, Cattaraugus, Chautauqua, Erie, Genesee, Niagara, Orleans, Wyoming' },
      { label: 'BH/ABA UM', value: 'Delegated to Wellpoint Partnership Plan, LLC (formerly Amerigroup Partnership Plan) since 2016; the same manual also names Carelon Behavioral Health elsewhere — unresolved, confirm which applies' },
      { label: 'ABA benefit cap', value: '"$45,000 per calendar year" — stated directly in the Provider Manual\'s ASD section' },
      { label: 'Prior auth', value: 'Required — ABA listed on the PA/medical-necessity table for MMC, SSI, HARP, and CHPlus alike; a standalone assessment/testing authorization form is published' },
      { label: 'Telehealth', value: '97151, 97153, 97155 (POS 02, modifier 95/GT) and 97156/97157 caregiver training confirmed in a 2020/Jan-2022 COVID-era bulletin — verify current applicability' },
    ],
    sections: [
      {
        h2: 'A stated dollar cap and a confirmed PA requirement',
        body: [
          'Highmark WNY\'s Medicaid/CHPlus Provider Manual states its Autism Spectrum Disorder section plainly: "The maximum applied behavioral health analysis benefit is $45,000 per calendar year" — a specific dollar figure this guide has not found published this precisely by any other upstate NY Medicaid plan. The manual\'s Behavioral Health prior-authorization table confirms ABA requires authorization across the board: "Applied behavior analysis (ABA) services — Covered effective 1/1/2023: requires authorization" for MMC and SSI, and "Covered: requires authorization" for HARP and CHPlus alike. Psychological and neuropsychological testing used to establish or support the ASD diagnosis is separately listed as requiring authorization based on medical necessity criteria.',
        ],
        cites: [
          { title: 'Highmark BCBS of Western New York Provider Manual — Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' },
        ],
      },
      {
        h2: 'The assessment gate — and the delegation question',
        body: [
          'Highmark WNY publishes a standalone "Request for Authorization: Autism Spectrum Disorder Testing" form (Feb 2026) covering the psych/neuropsych testing codes used to diagnose ASD (96130, 96131, 96136–96139), requiring clinical history, validated screener results (ASRS, SCQ, SRS, M-CHAT, CARS, GARS, GADS), and DSM-5/ICD-10 codes — and it explicitly asks "Is this a request to access ABA services?" as a checkbox, tying the testing authorization directly to the ABA pathway. Submit via Availity Essentials or fax to 844-452-8073, before rendering services. On delegation: the Provider Manual states repeatedly, with a dedicated contact inbox (WNYBehavioralHealthTeam@wellpoint.com), that Wellpoint Partnership Plan, LLC has administered the plan\'s Medicaid Managed Care, HARP, and CHPlus behavioral health since 2016 — but the same manual\'s vendor-disclosure footer also names Carelon Behavioral Health IPA Strategies, LLC as performing utilization review "on behalf of the health plan," without clarifying which lines of business that covers. The Wellpoint citations are far more numerous and Medicaid-specific; treat Wellpoint as the operative BH/ABA delegate, but confirm directly with Provider Services before assuming it over Carelon on any given case.',
        ],
        cites: [
          { title: 'Highmark WNY — Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' },
          { title: 'Highmark BCBS of Western New York Provider Manual (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' },
        ],
      },
      {
        h2: 'Telehealth — confirmed codes, but from a dated bulletin',
        body: [
          'A Highmark WNY provider bulletin (originally issued June 2020 for COVID-19, republished January 2022) names the exact ABA telehealth codes it recognizes: "Highmark BCBSWNY would recognize ABA therapy for functional behavior assessment (FBA) (97151), adaptive behavioral treatment by protocol or protocol modification (97153, 97155), and telehealth caregiver training (97156, 97157) visits within the member\'s benefits, with POS 02 and modifier 95 or GT." The same bulletin is explicit that telephonic-only (audio-only) delivery does not qualify — ABA requires audio-plus-video telehealth. Because this bulletin was written for the COVID period and no newer document was found superseding it, confirm with Provider Services that this telehealth guidance is still the operative policy before relying on it for a current authorization.',
        ],
        cites: [
          { title: 'Highmark WNY — COVID-19 Guidance for Telehealth/Telephonic Care for Behavioral Health Services (Medicaid/CHPlus, rev. Jan 2022)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_CAID_PU_COVID19GuidanceTelehealthBH.pdf' },
        ],
      },
      {
        h2: 'Billing basics',
        body: [
          'Timely filing is 120 days from the date of service (or per the provider agreement); corrected claims must be submitted within 90 days of the Explanation of Payment. Claims route through Availity Essentials, Highmark\'s exclusive EDI clearinghouse partner (payer ID 00246), or by paper to New York Claims, P.O. Box 61010, Virginia Beach, VA 23466-1010. Medical appeals of an adverse determination must be filed within 60 calendar days of the notice-of-action date, and payment disputes within 45 calendar days of the Explanation of Payment.',
        ],
        cites: [
          { title: 'Highmark BCBS of Western New York Provider Manual — Quick Reference (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' },
          { title: 'Highmark WNY Billing FAQ Bulletin (May 2023)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_Training_FAQBilling.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Complete state referral packet', desc: 'Under-21 ASD/Rett dx, referral with severity and DSM-5 checklist — the clinical baseline underneath the plan\'s own PA process.' },
      { title: 'ASD Testing Authorization form', desc: 'File this before the diagnostic workup — it explicitly gates access to ABA services, with validated-screener results attached.' },
      { title: 'Annual benefit tracking', desc: 'The $45,000/calendar-year ABA cap makes spend-to-date a scheduling constraint — track it against the treatment plan\'s intensity from day one.' },
      { title: 'Delegate confirmation', desc: 'Confirm with Provider Services whether Wellpoint Partnership Plan or Carelon is the operative BH/ABA reviewer for this case before submitting.' },
      { title: 'Telehealth currency check', desc: 'The only telehealth guidance found is a COVID-era bulletin — confirm it\'s still operative before billing 97151/97153/97155/97156/97157 via telehealth.' },
    ],
    sources: [
      { title: 'Highmark BCBS of Western New York Provider Manual — Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' },
      { title: 'Highmark WNY — Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' },
      { title: 'Highmark WNY — COVID-19 Guidance for Telehealth/Telephonic Care for Behavioral Health Services (rev. Jan 2022)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_CAID_PU_COVID19GuidanceTelehealthBH.pdf' },
      { title: 'Highmark WNY Billing FAQ Bulletin (May 2023)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_Training_FAQBilling.pdf' },
      { title: 'NYS DOH Medicaid Managed Care Enrollment Report, July 2026', url: 'https://www.health.ny.gov/health_care/managed_care/reports/enrollment/monthly/2026/docs/en07_26.pdf' },
      { title: 'eMedNY ABA Provider Policy Manual (state baseline)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the New York Medicaid rule: ABA is covered for members \u201cunder 21 years of age with a diagnosis of Autism Spectrum Disorder (ASD) as defined by\u2026 (DSM-5) and/or Rett Syndrome.\u201d No minimum age and no adult pathway \u2014 the 21st birthday is a hard cliff. Highmark WNY publishes no age rule of its own; its Provider Manual lists ABA as covered effective 1/1/2023 across MMC, SSI, HARP and CHPlus, subject to authorization and to a stated $45,000-per-calendar-year benefit maximum.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the New York Medicaid rule \u2014 the two-year referral is the clock and no maximum age is set on the diagnostic evaluation. Highmark WNY publishes no recency rule of its own; what it does gate is the workup, through a standalone ASD testing authorization that must be filed before the diagnostic services are rendered.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark WNY \u2014 Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the New York Medicaid rule: the diagnosis and referral must come from a NYS-licensed, NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner or physician assistant, following DSM-5 criteria and NYSDOH\u2019s Clinical Practice Guideline on ASD. LBAs and CBAAs sit outside that list \u2014 they may not diagnose and may not self-refer. Highmark WNY\u2019s ASD Testing authorization form covers the psychological and neuropsychological testing codes used to diagnose ASD (96130, 96131, 96136\u201396139) and asks for clinical history and DSM-5/ICD-10 codes, but names no diagnosing credential beyond the state\u2019s referral list.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark WNY \u2014 Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' }],
      },
      diagnosticTools: {
        value:
          'The most explicit screener list of any New York Medicaid plan, though it sits on the testing-authorization form rather than in a clinical policy. The \u201cRequest for Authorization: Autism Spectrum Disorder Testing\u201d form (Feb 2026) requires clinical history, DSM-5/ICD-10 codes and validated screener results \u2014 ASRS, SCQ, SRS, M-CHAT, CARS, GARS and GADS \u2014 and explicitly asks \u201cIs this a request to access ABA services?\u201d as a checkbox, tying the testing authorization directly to the ABA pathway. The state baseline underneath requires only the DSM-5 Diagnostic Checklist with the referral.',
        status: 'verified',
        cites: [{ title: 'Highmark WNY \u2014 Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
      },
      referral: {
        value:
          'Follows the New York Medicaid rule: the member \u201cmust be referred for ABA services by a NYS-licensed and NYS Medicaid-enrolled physician, psychologist, psychiatric nurse practitioner, pediatric nurse practitioner, or physician assistant,\u201d the referral is \u201cvalid for no more than two years,\u201d and it must carry age, the ASD/Rett diagnosis, date of initial diagnosis, co-morbid diagnoses, symptom severity level, a statement the patient needs ABA, and the DSM-5 Diagnostic Checklist. Highmark WNY adds two of its own gates. First, the diagnostic workup: file the ASD Testing authorization via Availity Essentials or fax to 844-452-8073 before rendering services. Second, treatment: the Provider Manual\u2019s behavioral-health PA table reads \u201cApplied behavior analysis (ABA) services \u2014 Covered effective 1/1/2023: requires authorization\u201d for MMC and SSI, and \u201cCovered: requires authorization\u201d for HARP and CHPlus. Behavioral health has been delegated to Wellpoint Partnership Plan, LLC since 2016 (WNYBehavioralHealthTeam@wellpoint.com), though the same manual\u2019s vendor footer also names Carelon Behavioral Health IPA Strategies without clarifying scope.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }, { title: 'Highmark WNY \u2014 Request for Authorization: Autism Spectrum Disorder Testing (Feb 2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYHM_ReqAuth_AutismSpectrumDisorderTesting.pdf' }],
        verifyVia:
          'Highmark WNY Provider Services \u2014 confirm whether Wellpoint Partnership Plan or Carelon is the operative BH/ABA reviewer for the case before submitting.',
      },
      telehealth: {
        value:
          'Highmark WNY names the codes, but the only guidance found is a COVID-era bulletin. Originally issued June 2020 and republished January 2022, it states that \u201cHighmark BCBSWNY would recognize ABA therapy for functional behavior assessment (FBA) (97151), adaptive behavioral treatment by protocol or protocol modification (97153, 97155), and telehealth caregiver training (97156, 97157) visits within the member\u2019s benefits, with POS 02 and modifier 95 or GT,\u201d and is explicit that telephonic-only (audio-only) delivery does not qualify \u2014 ABA requires audio plus video. No newer document superseding it was located.',
        status: 'unverified',
        cites: [{ title: 'Highmark WNY \u2014 COVID-19 Guidance for Telehealth/Telephonic Care for Behavioral Health Services (rev. Jan 2022)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_CAID_PU_COVID19GuidanceTelehealthBH.pdf' }],
        verifyVia:
          'Highmark WNY Provider Services \u2014 confirm the COVID-era telehealth bulletin is still operative before billing 97151/97153/97155/97156/97157 via telehealth.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the New York Medicaid rule, which the state applies to FFS and managed care alike: \u201can LBA can supervise no more than six CBAAs/unlicensed individuals at a time,\u201d \u201cLBAs are required to supervise unlicensed individuals for a minimum of five percent of the hours the unlicensed individual spends providing behavior analysis services each calendar month,\u201d and \u201csupervision must include at least two face-to-face, real-time contacts per month\u201d with the LBA observing service delivery in at least one. Supervision may run over synchronous audio-and-video where on-site is impractical. 97155 counts toward the 5% \u201conly when the LBA joins the patient and the unlicensed individual during a treatment session to direct the unlicensed individual/technician in implementing a new or modified treatment protocol.\u201d CBAAs need direct supervision, and the supervisor \u201cshould assess each patient\u2019s/client\u2019s progress at least every 6 months\u2026 and review and sign treatment notes and reports prepared by the CBAA supervisee.\u201d Highmark WNY publishes no supervision ratio of its own; its Provider Manual addresses authorization and benefit limits rather than staffing structure, so the state rule is the operative one.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. The Provider Manual\u2019s ASD section states the benefit cap and the PA requirement rather than claim edits, and the state manual is silent on 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Highmark WNY Provider Services, or the delegated behavioral-health team at WNYBehavioralHealthTeam@wellpoint.com \u2014 confirm in writing before billing the overlap.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling, but the only stated dollar cap among New York\u2019s Medicaid plans: \u201cthe maximum applied behavioral health analysis benefit is $45,000 per calendar year,\u201d stated directly in the Provider Manual\u2019s Autism Spectrum Disorder section. That makes spend-to-date a scheduling constraint from day one \u2014 track it against the treatment plan\u2019s intensity rather than discovering it mid-year. On claims: timely filing is 120 days from the date of service or per the provider agreement, corrected claims within 90 days of the Explanation of Payment, appeals within 60 calendar days of the notice-of-action date and payment disputes within 45.',
        status: 'verified',
        cites: [{ title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }],
      },
      noteSignature: {
        value:
          'Follows the New York Medicaid rule: the LBA supervisor must \u201creview and sign treatment notes and reports prepared by the CBAA supervisee,\u201d and documentation of supervision itself \u201cshould be recorded in the patient file.\u201d Clinical documentation must carry the treatment plan with assessment and goals, the goal data, total hours of service per week by who delivered them, and the location(s) of services. Records are kept \u201cfor a minimum of six years and, for minors, until the patient turns 22 years of age.\u201d Highmark WNY publishes no additional session-note signature rule for ABA.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }],
      },
      placeOfService: {
        value:
          'Follows the New York Medicaid rule: \u201cLBAs and CBAAs may work in any legally authorized setting. Examples of such settings include private practice, settings where patients/clients reside full-time or part-time, clinics, hospitals, residences, and community settings\u201d \u2014 but \u201cNYS Medicaid does not reimburse for ABA services in a school setting.\u201d The treatment plan must record the location(s) of services. Highmark WNY publishes no separate setting rule for ABA; the state\u2019s school bar is the operative constraint, and the plan\u2019s own telehealth bulletin adds POS 02 with modifier 95 or GT for the codes it recognizes remotely.',
        status: 'verified',
        cites: [{ title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }, { title: 'Highmark WNY \u2014 COVID-19 Guidance for Telehealth/Telephonic Care for Behavioral Health Services (rev. Jan 2022)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_CAID_PU_COVID19GuidanceTelehealthBH.pdf' }],
        verifyVia:
          'Highmark WNY Provider Services for any plan-specific setting restriction.',
      },
      billAsProvider: {
        value:
          'Not published as a claim convention \u2014 the Provider Manual sets the authorization and benefit rules rather than a rendering-versus-supervising NPI rule. At the fee-for-service layer New York is explicit: LBAs bill \u201cusing the LBA\u2019s National Provider Identification (NPI) number for the \u2018Billing\u2019 provider and/or \u2018Supervising\u2019 provider,\u201d with \u201cthe NPI number of the CBAA that provided the ABA service\u2026 reported as the \u2018Rendering\u2019 provider on each claim\u201d; for unlicensed aides and LBA limited-permit holders the supervising LBA\u2019s NPI fills all three roles. CBAAs cannot bill directly and enroll as OPRA providers. Claims route through Availity Essentials, Highmark\u2019s exclusive EDI clearinghouse partner (payer ID 00246), or by paper to New York Claims, P.O. Box 61010, Virginia Beach, VA 23466-1010.',
        status: 'unverified',
        cites: [{ title: 'Highmark BCBS of Western New York Provider Manual \u2014 Medicaid Managed Care and Child Health Plus (eff. 4/1/2026)', url: 'https://providerpublic.mybcbswny.com/docs/gpp/NYNY_NYW_ProviderManual.pdf' }, { title: 'eMedNY ABA Provider Policy Manual (updated Oct 1, 2025)', url: 'https://www.emedny.org/ProviderManuals/ABA/PDFS/ABA_Policy.pdf' }],
        verifyVia:
          'Highmark WNY Provider Services \u2014 confirm the rendering/supervising NPI convention and any modifier requirement for CBAA- and technician-delivered units.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Highmark Western New York cover ABA therapy?', a: 'Yes — for NY Medicaid Managed Care, HARP, and Child Health Plus members under 21 with ASD/Rett, effective 1/1/2023, subject to a stated $45,000-per-calendar-year benefit maximum and prior authorization.' },
      { q: 'Does the ABA assessment require prior authorization at Highmark WNY?', a: 'Yes — a standalone Autism Spectrum Disorder Testing authorization form gates the diagnostic workup and explicitly asks whether the request is meant to access ABA services, submitted via Availity Essentials or fax before services are rendered.' },
      { q: 'Who manages behavioral health for Highmark Western New York Medicaid?', a: 'Wellpoint Partnership Plan, LLC (formerly Amerigroup Partnership Plan) has managed the plan\'s Medicaid Managed Care, HARP, and CHPlus behavioral health since 2016, per the Provider Manual — though the same manual also references Carelon Behavioral Health in a vendor-disclosure footer without clarifying scope. Confirm with Provider Services which applies to your case.' },
      { q: 'Is Highmark Western New York available outside Western NY?', a: 'No — the Medicaid Managed Care/HARP/CHPlus product is limited to eight Western New York counties (Allegany, Cattaraugus, Chautauqua, Erie, Genesee, Niagara, Orleans, Wyoming), despite the plan\'s legal name including "Northeastern New York."' },
    ],
  },

  'anthem-bcbs-new-york': {
    slug: 'anthem-bcbs-new-york',
    payer: 'Anthem BCBS New York (formerly Empire)',
    state: 'NY', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'The 680-hour cap was repealed in 2020; Empire is now Anthem; 28-county service area.',
    assessmentPA: {
      value: 'Yes — 97151, 97152 and 0362T are authorized per authorization period, with an assessment-only pathway on Anthem\'s ASD form',
      status: 'verified',
      cites: [{ title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }],
    },
    treatmentPA: {
      value: 'Yes — 97153, 97154, 97155, 97158 and 0373T are authorized per week',
      status: 'verified',
      cites: [{ title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }],
    },
    dxRequired: {
      value: 'Yes — and the ABA must be prescribed or ordered by a licensed physician or licensed psychologist; an LBA may not diagnose or self-refer',
      status: 'verified',
      cites: [{ title: 'NY Insurance Law § 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' }, { title: 'NYSED — LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' }],
    },
    pill: 'Payer Guide · Anthem BCBS · New York',
    h1: 'Anthem BCBS New York ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS New York (Empire) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in New York: why the 680-hour cap no longer exists, the Empire rebrand, the 28-county service area, NYSED behavior-analyst licensure, and what intake must verify.',
    intro: [
      'Two things about Anthem in New York are still widely repeated and both are wrong. The first is that the plan is called Empire — Empire BlueCross BlueShield was rebranded Anthem effective January 1, 2024, and the underwriting entities were legally renamed Anthem HealthChoice Assurance, Inc. and Anthem HealthChoice HMO, Inc. Member ID numbers and provider contracts did not change. The second is the 680-hour annual ABA ceiling, which almost every ABA resource on the internet still quotes. It was real, it was in the insurance statute rather than a regulation, and it was repealed by the 2019 budget act effective January 1, 2020.',
      'That repeal changes how you argue a case. There is no statutory hour budget to run out of any more. Any hour limit a New York family actually hits on a fully insured Anthem plan is a medical-necessity determination, which means it goes through Article 49 utilization review and external appeal — not a number you have to accept. Self-funded ERISA plans sit outside the state mandate entirely and answer to federal parity, so plan funding type remains the first fact benefits verification establishes.',
    ],
    atGlance: [
      { label: 'Brand', value: 'Empire BCBS became Anthem BCBS effective January 1, 2024 — same member IDs' },
      { label: 'Service area', value: '28 New York counties (17 southeastern + 11 northeastern)' },
      { label: 'State mandate', value: 'NY Ins. Law §§ 3216(i)(25) individual, 3221(l)(17) group, 4303(ee) Article 43/HMO' },
      { label: '680-hour cap', value: 'REPEALED — struck by Ch. 57 of the Laws of 2019, effective 1/1/2020' },
      { label: 'Age / dollar limits', value: 'None in the current statute' },
      { label: 'Criteria applied', value: 'MCG B-806-T — replaced CG-BEH-02 for ABA on June 1, 2024' },
      { label: 'Submit via', value: 'Availity Essentials (preferred) or fax 866-582-2287, on the ASD Treatment Plan Request Form' },
      { label: 'Licensure', value: 'NYSED Licensed Behavior Analyst (LBA) or CBAA — BACB certification alone is not a NY license' },
    ],
    sections: [
      {
        h2: 'The 680-hour cap is gone. Stop quoting it.',
        cites: [
          { title: 'NY S.1507-C (Ch. 57 of the Laws of 2019), Part BB, Subpart A', url: 'https://www.nysenate.gov/legislation/bills/2019/S1507/amendment/C' },
          { title: 'NY Insurance Law § 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' },
          { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
        ],
        body: [
          'New York\'s autism mandate did once carry an explicit ABA ceiling. DFS described it plainly in 2014: the mandate "includes coverage for 680 hours of applied behavior analysis (\'ABA\') treatment per policy or calendar year per covered individual diagnosed with ASD." That sentence lived in the statute itself, in §§ 3216(i)(25)(B), 3221(l)(17)(B) and 4303(ee)(2) — not in a regulation, and not in 11 NYCRR Part 440, which was a short-lived emergency regulation about licensure standards that expired on October 11, 2014.',
          'The 2019 budget act (S.1507-C / A.2007-C, Part BB, Subpart A, enacted as Chapter 57 of the Laws of 2019) struck the sentence from all three sections. In New York bill drafting, square brackets mark language being deleted, and the bill shows the cap bracketed out. The act took effect on the first of January following enactment and applied to all policies and contracts issued, renewed, modified, altered or amended on or after that date — January 1, 2020. Grep the current statute for "six hundred eighty" and it is not there.',
          'What replaced it cuts the other way. The current text says a policy "shall not contain any limitations on visits that are solely applied to the treatment of autism spectrum disorder," forbids financial requirements or treatment limitations on ASD benefits more restrictive than those applied to substantially all medical and surgical benefits, and requires coverage consistent at minimum with federal MHPAEA. Bills to put the 680 hours back have been introduced in four consecutive sessions — the current one, A3896, sat in Assembly committee as of January 2026 — and none has passed. One caveat worth carrying: DFS Circular Letter No. 6 (2014) is still live and still authoritative on the licensure point, but its background recital of 680 hours is outdated. Cite it for licensure, never for hours.',
        ],
      },
      {
        h2: 'Empire is Anthem — and only in 28 counties',
        cites: [
          { title: 'Anthem New York Provider Manual (effective July 1, 2026)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/manuals/PM_NY_000016.pdf' },
          { title: 'Anthem — FAQs: our upcoming rebrand to Anthem (Empire, November 2023)', url: 'https://providers.anthem.com/docs/gpp/NYE_FAQs.pdf' },
        ],
        body: [
          'Anthem\'s own provider FAQ told New York providers that most communications would move to the Anthem brand beginning January 1, 2024, that members would get a new ID card with the Anthem logo but the member ID number would not change, and that existing agreements and contracts with Empire were unaffected. So an Empire card in a family\'s folder is an Anthem card; do not treat it as a different payer or re-verify it as one.',
          'Geography is the fact that actually saves intake time. Anthem\'s New York provider manual names its service area as 28 counties: Albany, Bronx, Clinton, Columbia, Delaware, Dutchess, Essex, Fulton, Greene, Montgomery, Kings, Nassau, New York, Orange, Putnam, Queens, Rensselaer, Richmond, Rockland, Saratoga, Schenectady, Schoharie, Suffolk, Sullivan, Ulster, Warren, Washington and Westchester. Seventeen southeastern counties carry the trade name "Anthem Blue Cross and Blue Shield"; eleven northeastern counties carry "Anthem Blue Cross" — so the exact brand wording on the card is itself a geography tell. If a family lives outside those 28 counties, their Blue plan is somebody else — Excellus, Highmark, MVP, CDPHP or Independent Health — and this guide does not govern them.',
        ],
      },
      {
        h2: 'What the mandate actually requires',
        cites: [
          { title: 'NY Insurance Law § 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' },
          { title: 'NY Insurance Law § 3221 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3221/' },
          { title: 'NY Insurance Law § 4303 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-43/4303/' },
        ],
        list: [
          { title: 'Three sections, three markets', desc: '§ 3216(i)(25) binds individual accident and health policies; § 3221(l)(17) binds group or blanket policies; § 4303(ee) binds Article 43 corporations and HMOs. Between them they cover essentially every state-regulated New York plan.' },
          { title: 'No age limit, no dollar cap, no hour cap', desc: 'The current text carries none of the three. The original 2011 law had a $45,000 annual ABA cap; that gave way to the 680 hours, which is itself now repealed.' },
          { title: 'A physician or psychologist must prescribe or order it', desc: 'Covered treatment is that "prescribed or ordered for an individual diagnosed with autism spectrum disorder by a licensed physician or a licensed psychologist." This is not optional paperwork — it is the definition of what the plan owes.' },
          { title: 'Utilization review survives', desc: 'The statute expressly preserves utilization review and external appeals under Article 49, plus case management and other managed-care provisions. That is the arena an hour dispute now plays out in.' },
          { title: 'The IEP carve-out', desc: 'Coverage may be denied on the basis that the treatment is being provided under an IEP under Article 89 of the Education Law — but services provided on a supplemental basis outside an educational setting stay covered when prescribed. Document the school-day boundary carefully.' },
        ],
      },
      {
        h2: 'Licensure: New York does not accept a BCBA alone',
        cites: [
          { title: 'NYSED Office of the Professions — Licensed Behavior Analysts FAQ', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/frequently-asked-questions' },
          { title: 'NYSED — LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' },
          { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
        ],
        body: [
          'New York licenses two credentials through the State Education Department: Licensed Behavior Analyst (LBA) and Certified Behavior Analyst Assistant (CBAA), the latter working under LBA supervision. NYSED is explicit that BACB certification "may be included in advertising in New York State" but "may not be used as a license to practice in New York State," and the grandparenting pathway closed in January 2016. DFS ties this straight to reimbursement: a person providing ABA must be an LBA, or a CBAA supervised by an LBA, for their services to be eligible for health insurance coverage.',
          'The scope limits matter just as much at intake. An LBA or CBAA may not diagnose the condition ABA is being provided for, and may not prescribe or order ABA for a particular individual. NYSED tells LBAs to verify a client\'s ASD diagnosis before providing services, precisely because the diagnosis and the order have to come from someone else. Practically: no New York case should open without both the diagnostic report and a physician\'s or psychologist\'s order in hand — and the mandate requires the same thing, so the payer and the licensure board are asking for the identical document.',
        ],
      },
      {
        h2: 'Submitting the authorization',
        cites: [
          { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
          { title: 'Anthem — MCG care guidelines 27th edition update (New York, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/new-york/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
          { title: 'Anthem New York — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/new-york/articles/streamlined-aba-claim-process-starts-january-1-2026-27878' },
        ],
        body: [
          'Anthem reviews ABA itself — there is no delegated behavioral health vendor in the New York commercial path we could find, and Carelon Medical Benefits Management\'s New York programme is cardiology, genetic testing, radiology, musculoskeletal, surgical and radiation therapy, not ABA. The instrument is Anthem\'s Treatment Plan Request Form for Autism Spectrum Disorders, a commercial form explicitly covering New York. Requests go through Availity as the preferred channel, with fax 866-582-2287 as the alternative, and must include BCBA (or other qualified healthcare professional) information plus the form itself.',
          'The form tells you how the authorization is shaped. You mark the request comprehensive or focused. 97151, 97152, 0362T, 97156 and 97157 are authorized per authorization period; 97153, 97154, 97155, 97158 and 0373T are authorized per week — and 0362T and 0373T each require clinical justification. There is an assessment-only pathway for 97151, 97152 and 0362T, or where the member has new coverage, requiring a diagnostic evaluation by a doctorate-level clinician or allowable qualified healthcare provider showing DSM-5-TR criteria and naming the standardized tools used (the form offers ADI-R, ADOS-2 and CARS-2 as examples). The treatment plan should be dated within 30 days of the start date.',
          'Two more things to know. The criteria set changed: effective June 1, 2024 Anthem moved ABA reviews from CG-BEH-02 and MCG W0153 to MCG B-806-T, and MCG guidelines are proprietary and unpublished — so the form, not a public policy document, is your best guide to what a complete request looks like. And from January 1, 2026, Anthem reimburses ABA on weekly approved units rather than total authorized units, with units above the approved weekly limit ineligible and adjusted, which is the same per-week structure the form already reflects.',
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type, first', desc: 'Fully insured New York plan (the mandate and its no-cap rules apply) vs. self-funded ERISA (preempted; federal parity and the plan document govern). Nothing else on this page is reliable until you know which.' },
      { title: 'County of residence', desc: 'Anthem New York serves 28 counties. Outside them, an "Anthem" or "Blue Cross" answer means a different carrier — confirm before building the file.' },
      { title: 'The prescribing physician or psychologist', desc: 'Both the mandate and NYSED\'s scope rules require the ABA to be prescribed or ordered by a licensed physician or licensed psychologist. Your LBA cannot supply it.' },
      { title: 'Full diagnostic evaluation, not a diagnosis letter', desc: 'Anthem\'s ASD form wants a doctorate-level evaluation showing DSM-5-TR criteria and the standardized tools used. Ask for the whole report at first contact.' },
      { title: 'NYSED license numbers', desc: 'LBA for the supervising analyst, CBAA for assistants. A BCBA credential alone will not support coverage in New York.' },
      { title: 'School hours and IEP services', desc: 'The mandate lets a plan deny treatment provided under an IEP while preserving supplemental services outside the educational setting. Capture the school schedule and IEP services so the request draws that line explicitly.' },
    ],
    sources: [
      { title: 'NY S.1507-C (Ch. 57 of the Laws of 2019), Part BB, Subpart A', url: 'https://www.nysenate.gov/legislation/bills/2019/S1507/amendment/C' },
      { title: 'NY Insurance Law § 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' },
      { title: 'NY Insurance Law § 3221 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3221/' },
      { title: 'NY Insurance Law § 4303 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-43/4303/' },
      { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
      { title: 'NYSED Office of the Professions — Licensed Behavior Analysts FAQ', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/frequently-asked-questions' },
      { title: 'NYSED — LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' },
      { title: 'Anthem New York Provider Manual (effective July 1, 2026)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/manuals/PM_NY_000016.pdf' },
      { title: 'Anthem — FAQs: our upcoming rebrand to Anthem (Empire, November 2023)', url: 'https://providers.anthem.com/docs/gpp/NYE_FAQs.pdf' },
      { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' },
      { title: 'Anthem — MCG care guidelines 27th edition update (New York, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/new-york/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem New York — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/new-york/articles/streamlined-aba-claim-process-starts-january-1-2026-27878' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'None. \u201cThe current text carries none of the three\u201d \u2014 no age limit, no dollar cap, no hour cap. The original 2011 law carried a $45,000 annual ABA cap; that gave way to the 680-hour ceiling, which Chapter 57 of the Laws of 2019 struck from \u00a7\u00a7 3216(i)(25), 3221(l)(17) and 4303(ee) effective for policies issued, renewed, modified, altered or amended on or after January 1, 2020. So an adult ABA case on a fully-insured New York Anthem plan is mandate-covered, in sharp contrast with New York Medicaid\u2019s under-21 rule. Self-funded ERISA plans sit outside the mandate entirely.',
        status: 'verified',
        cites: [{ title: 'NY Insurance Law \u00a7 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' }, { title: 'NY Insurance Law \u00a7 3221 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3221/' }, { title: 'NY Insurance Law \u00a7 4303 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-43/4303/' }],
      },
      dxRecency: {
        value:
          'No recency rule on the diagnosis itself \u2014 neither the mandate nor Anthem\u2019s ASD form sets a maximum age for the diagnostic evaluation. What Anthem does date is the plan: \u201cthe treatment plan should be dated within 30 days of the start date,\u201d and treatment plans must show review or update at least every six months. MCG B-806-T, the criteria set Anthem applies to ABA since June 1, 2024, is proprietary and unpublished, so the form is the best available guide to what a complete request looks like.',
        status: 'verified',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }, { title: 'Anthem ABA Provider Resource Guide \u2014 New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' }],
      },
      diagnosingProviders: {
        value:
          'A licensed physician or a licensed psychologist, and this is not optional paperwork \u2014 the mandate defines covered treatment as that \u201cprescribed or ordered for an individual diagnosed with autism spectrum disorder by a licensed physician or a licensed psychologist.\u201d NYSED reinforces it from the licensure side: an LBA or CBAA \u201cmay not diagnose the condition ABA is being provided for, and may not prescribe or order ABA for a particular individual,\u201d and NYSED tells LBAs to verify a client\u2019s ASD diagnosis before providing services. Anthem\u2019s assessment-only pathway asks for \u201ca diagnostic evaluation by a doctorate-level clinician or allowable qualified healthcare provider.\u201d',
        status: 'verified',
        cites: [{ title: 'NY Insurance Law \u00a7 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' }, { title: 'NYSED \u2014 LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' }, { title: 'NYSED Office of the Professions \u2014 Licensed Behavior Analysts FAQ', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/frequently-asked-questions' }, { title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }],
      },
      diagnosticTools: {
        value:
          'Anthem wants the whole evaluation, not a diagnosis letter. The assessment-only pathway for 97151, 97152 and 0362T \u2014 also used where the member has new coverage \u2014 requires a diagnostic evaluation by a doctorate-level clinician or allowable qualified healthcare provider showing DSM-5-TR criteria and naming the standardized tools used, with the form offering ADI-R, ADOS-2 and CARS-2 as examples rather than as a required list. Ask for the full report at first contact.',
        status: 'verified',
        cites: [{ title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }],
      },
      referral: {
        value:
          'Required by statute, not just by form: the mandate covers treatment \u201cprescribed or ordered\u2026 by a licensed physician or a licensed psychologist,\u201d and NYSED bars your LBA from supplying the order or the diagnosis. Both the payer and the licensure board therefore ask for the identical document, so no New York case should open without the diagnostic report and the physician\u2019s or psychologist\u2019s order in hand. Authorization then runs on Anthem\u2019s Treatment Plan Request Form for Autism Spectrum Disorders through Availity (preferred) or fax 866-582-2287, with BCBA or other qualified healthcare professional information included; no referral validity window is published.',
        status: 'verified',
        cites: [{ title: 'NY Insurance Law \u00a7 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' }, { title: 'NYSED \u2014 LBA/CBAA assessment and treatment plans', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/professional-practice/assessment-and-treatment-plans' }, { title: 'Anthem \u2014 Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' }],
      },
      telehealth: {
        value:
          'Anthem names the place-of-service codes but not the code list. For ABA it identifies POS 10 for telehealth with the member at home and POS 02 for telehealth with the member elsewhere, \u201ceach subject to the member\u2019s coverage and plan review,\u201d and directs providers to its Virtual Visits reimbursement policy, noting that \u201callowed codes may vary\u201d and pointing to the allowed virtual services list plus CPT Appendix P for state-by-state eligibility. So which ABA codes are payable by telehealth in New York is a per-plan lookup, not a published rule.',
        status: 'unverified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' }],
        verifyVia:
          'Anthem\u2019s Virtual Visits reimbursement policy and the allowed-virtual-services list for New York \u2014 confirm ABA code eligibility before scheduling remote sessions.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Anthem lists who may deliver ABA \u2014 \u201cpsychiatrists (MDs), psychologists (PhDs), licensed clinical social workers (LCSWs), licensed professional counselors (LPCs), licensed marriage and family therapists (LMFTs) with special training and/or experience in applied behavior analysis, Board Certified Behavior Analysts (BCBA/BCBA-D), providers practicing under the direction and supervision of the BCBA, and other mental health service providers licensed or authorized by the state in which they practice\u201d \u2014 and publishes no ratio, cap or observation cadence. In New York that list is narrowed by law rather than by Anthem: NYSED licenses only the LBA and the CBAA (the latter under LBA supervision), says BACB certification \u201cmay not be used as a license to practice in New York State,\u201d and DFS has tied reimbursement to exactly that \u2014 a person providing ABA must be an LBA, or a CBAA supervised by an LBA, for their services to be eligible for health insurance coverage. The grandparenting pathway closed in January 2016.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide \u2014 New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' }, { title: 'NYSED Office of the Professions \u2014 Licensed Behavior Analysts FAQ', url: 'https://www.op.nysed.gov/professions/licensed-behavior-analysts/frequently-asked-questions' }, { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' }],
      },
      concurrentBilling: {
        value: 'A physician or other QHP billing 97155 can add 97153 only if both the technician and the QHP are face-to-face with the patient at the same time and the QHP is directing the technician. Supervised or directed services billed alongside a QHP-performed procedure are also subject to Anthem\'s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' }],
      },
      dailyLimits: {
        value: 'No per-day unit ceiling is published. The authorization itself is shaped per code: 97151, 97152, 0362T, 97156 and 97157 are authorized per authorization period, while 97153, 97154, 97155, 97158 and 0373T are authorized per week — and from January 1, 2026 weekly units above the approved limit are ineligible for reimbursement. ABA codes may separately carry CMS MUE limits, administered as NCCI edits under Anthem\'s Code and Clinical Editing Guidelines policy.',
        status: 'verified',
        cites: [
          { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
          { title: 'Anthem New York — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/new-york/articles/streamlined-aba-claim-process-starts-january-1-2026-27878' },
        ],
      },
      noteSignature: {
        value: 'Each medical-record entry must carry author identification — handwritten signature, unique electronic identifier, or initials — plus rendering provider credentials. Entries are expected at the time of service or shortly thereafter and should not exceed 30 days, with a signature date within 30 days of the date of service. Timed codes require total treatment minutes plus start and stop times. Treatment plans must show review or update at least every 6 months, and the plan submitted with a request should be dated within 30 days of the start date.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' },
          { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
        ],
      },
      placeOfService: {
        value: 'POS codes Anthem names for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — each subject to the member\'s coverage and plan review. Note the New York mandate separately permits a plan to deny treatment delivered under an IEP while covering supplemental services outside the educational setting, so school-based ABA needs that distinction documented.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' },
          { title: 'NY Insurance Law § 3216 (current)', url: 'https://law.justia.com/codes/new-york/isc/article-32/3216/' },
        ],
      },
      billAsProvider: {
        value: 'ABA delivered by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS-1500, with degree-level modifiers HM, HN and HO identifying the rendering staff level. In New York, DFS additionally requires that the person providing ABA be a NYSED-Licensed Behavior Analyst, or a CBAA supervised by one, for the services to be eligible for insurance coverage.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — New York and 10 other states (June 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/aba-provider-resource-guide-abc-ny.pdf' },
          { title: 'DFS Insurance Circular Letter No. 6 (2014)', url: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2014_06' },
        ],
      },
    },
    faq: [
      { q: 'Is ABA still capped at 680 hours a year in New York?', a: 'No. The 680-hour ceiling was written into NY Insurance Law §§ 3216(i)(25), 3221(l)(17) and 4303(ee), and Chapter 57 of the Laws of 2019 struck it from all three, effective for policies issued, renewed, modified, altered or amended on or after January 1, 2020. The current statute carries no hour cap, no dollar cap and no age limit, and forbids visit limits applied solely to autism. Bills to reinstate the 680 hours have been introduced repeatedly and none has passed.' },
      { q: 'Is Empire BlueCross BlueShield the same as Anthem in New York?', a: 'Yes. Empire was rebranded Anthem effective January 1, 2024 and the underwriting entities were renamed Anthem HealthChoice Assurance, Inc. and Anthem HealthChoice HMO, Inc. Member ID numbers did not change and existing provider agreements were unaffected.' },
      { q: 'Does Anthem cover all of New York State?', a: 'No — 28 counties, split between 17 southeastern counties trading as "Anthem Blue Cross and Blue Shield" and 11 northeastern counties trading as "Anthem Blue Cross." Elsewhere in the state the Blue plan is Excellus, Highmark, MVP, CDPHP or Independent Health.' },
      { q: 'Can a BCBA deliver covered ABA in New York?', a: 'Not on BACB certification alone. New York requires a NYSED Licensed Behavior Analyst, or a Certified Behavior Analyst Assistant supervised by one, and DFS has said that is what makes the services eligible for insurance coverage. NYSED also bars LBAs and CBAAs from diagnosing or from prescribing or ordering ABA — that has to come from a licensed physician or psychologist.' },
      { q: 'Which criteria does Anthem apply to ABA in New York?', a: 'MCG B-806-T. Anthem notified commercial providers that effective June 1, 2024 it would transition from CG-BEH-02 and MCG W0153 to MCG B-806-T for medical-necessity and clinical-appropriateness reviews. MCG guidelines are proprietary and not published, so build the request around Anthem\'s Treatment Plan Request Form for Autism Spectrum Disorders.' },
    ],
  },
};

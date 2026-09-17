import type { PayerConfig } from './types.js';

export const georgiaPayers: Record<string, PayerConfig> = {
  'georgia-medicaid': {
    slug: 'georgia-medicaid',
    cardDesc: 'EPSDT under 21, Katie Beckett path, CMO landscape, PA packages.',
    assessmentPA: 'Required — a separate prior authorization for the behavioral assessment',
    treatmentPA: 'Required — separate PA, issued in 6-month increments',
    dxRequired: 'Yes \u2014 documented DSM-5 ASD diagnosis (EPSDT ABS benefit)',
    payer: 'Georgia Medicaid',
    state: 'GA', kind: 'state-medicaid',
    deliveryRules: {
      supervision: {
        value:
          'Georgia runs a caseload cap, not a percentage floor. Under the DCH manual a physician, psychiatrist, BCBA-D or BCBA \u2014 the enrolled Qualified Health Care Provider (QHCP) \u2014 may supervise up to six certified BCaBAs and RBTs at any point in time, and the attestation appendix caps a licensed non-BCBA supervisor (a physician, say) at three practitioners. \u201cSupervision\u201d is defined as direct clinical review for training or teaching and does NOT require the supervisor to be present at the work site. Both supervisor and supervisee must keep a contemporaneous record of the date, duration, type and a brief summary of each supervision session, producible on audit; discrepancies make the associated claims subject to recoupment. A BCaBA must be supervised by a BCBA/BCBA-D but may supervise RBTs; an RBT can never be the QHCP. Every supervised direct-care professional must attest to one year of ASD experience, and the Attestation must be resubmitted within two weeks of any staffing change.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      concurrentBilling: {
        value:
          'Not answered by the publicly posted manual. The January 2018 Part II ASD manual on medicaid.georgia.gov predates the Category I adaptive-behavior code set \u2014 its Appendix A still prices 0359T\u20130374T \u2014 and it contains no concurrent-services or same-clock-time provision for 97153 with 97155. Current quarterly manuals and the live fee schedule sit inside GAMMIS, which blocks automated retrieval.',
        status: 'unverified',
        verifyVia:
          'GAMMIS (mmis.georgia.gov) provider manual + fee schedule for the current ASD policy, or the member\u2019s CMO policy \u2014 CareSource MCD-MM-0212 and Peach State GA.CP.BH.504 are the ones published openly.',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling is published in the posted manual. DCH sets utilization by prior approval and the Chapter 903 service limitations rather than a per-code MUE table, and the manual\u2019s only quantitative guidance is that therapy \u201ccan range from 10-30 hours per week, or more if medically necessary.\u201d Whether Georgia applies the Medicaid NCCI MUE table, the Practitioner MUE table, or its own fee-schedule limits is not stated in the posted document.',
        status: 'unverified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
        verifyVia:
          'GAMMIS fee schedule and current ASD manual; for a managed-care member, the CMO\u2019s claim-edit policy (Peach State publishes 6 hrs/day \u00b7 30 hrs/week; Amerigroup publishes weekly ceilings).',
      },
      noteSignature: {
        value:
          'The person who wrote the note signs it \u2014 the manual imposes no supervising-analyst co-signature. Records must contain \u201cprogress notes that are legible, detailed, complete, signed and dated,\u201d and every signature must be \u201clegible, original and belong to the person creating the signature\u201d; if illegible the name must also be printed. All signatures must be dated the actual date signed, rubber-stamp signatures are not accepted, and electronic signatures are accepted only in the circumstances set out in Part I \u00a7 106. Records must be documented in \u2018real time\u2019 and not back-dated; corrections take a single strike-through plus the corrector\u2019s initials and date, never whiteout.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      placeOfService: {
        value:
          'Georgia prices by setting rather than restricting it: every ABS line carries a service-location modifier \u2014 U6 in-clinic, U7 out-of-clinic (paid at a materially higher rate), GT telemedicine \u2014 alongside the practitioner-level modifier. The posted manual sets no school, community or group-home rule of its own; the school-setting requirements an intake team will actually meet are in the CMO policies (Peach State requires a separate school plan for every educational setting).',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
        verifyVia:
          'For school and group-home delivery specifically: the member\u2019s CMO policy, and the current ASD manual inside GAMMIS.',
      },
      billAsProvider: {
        value:
          'The claim goes out under the enrolled QHCP and/or the facility. BCaBAs and RBTs \u201care not enrolled directly by the Division as providers because they are not independent practitioners\u201d \u2014 their services are claimed under the enrolled provider identification number of the supervising QHCP and/or the facility, and if the payee is a facility the QHCP must attest under the facility Medicaid ID and list all supervisees. Practitioner level rides as a modifier: U1 physician/psychiatrist, U2 psychologist or BCBA-D, U3 BCBA, U4 BCaBA or master\u2019s-level analyst with a year of ASD experience, U5 RBT with a year of ASD experience \u2014 plus the setting modifier (U6/U7/GT). Separately, the ordering/prescribing/referring practitioner\u2019s NPI must appear on the claim (CMS-1500 box 17, qualifier DK ordering, DN referring, DQ supervising) and that practitioner must be Georgia-Medicaid-enrolled or the claim is denied.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
    },
    pill: 'Payer Guide · Georgia Medicaid',
    h1: 'Georgia Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Georgia Medicaid ABA Coverage & Prior Auth: Intake Guide | Carelu',
    metaDescription:
      'How Georgia Medicaid (DCH) covers ABA: eligibility under EPSDT, Katie Beckett access, prior authorization, required documents, CPT codes and modifiers — an intake-focused guide for ABA providers.',
    intro: [
      'Georgia Medicaid covers ABA — the state calls it Adaptive Behavior Services (ABS) — for members under 21 through EPSDT, and Georgia is one of the highest-demand ABA states in the country. But the benefit runs through a thicket of DCH manual rules, CMO-specific policies, and a managed-care transition in flight. Here\'s what an intake team actually needs to know.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21, via EPSDT (since Jan 2018)' },
      { label: 'Prior auth', value: 'Required for assessment AND treatment, separately' },
      { label: 'Auth increments', value: '6-month treatment authorizations' },
      { label: 'Typical hours', value: '10–30 hrs/week; more if medically necessary' },
      { label: 'Middle-income path', value: 'Katie Beckett waiver (income ignored)' },
      { label: 'Managed care', value: 'CMOs administer PA under their own aligned policies' },
      { label: 'Diagnosis recency', value: 'Eval instruments within 5 years; outside assessments within 6 months' },
      { label: 'Staff screening', value: 'GCIC+FBI fingerprints for licensed analysts; BACB 180-day check is the only technician-level screen' },
    ],
    sections: [
      {
        h2: 'Who qualifies',
        cites: [{ title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }, { title: 'GA DCH — Katie Beckett / TEFRA', url: 'https://medicaid.georgia.gov/programs/all-programs/tefrakatie-beckett' }],
        body: [
          'Coverage applies to Medicaid members under age 21 with a documented DSM-5 ASD diagnosis established by a licensed physician, psychologist, or other qualifying professional using evidence-based tools — per current CMO operationalizations, a comprehensive diagnostic evaluation generally needs at least two instruments (one clinician-administered like ADOS-2 or CARS-2, plus one caregiver tool like ADI-R or SRS-2) within the last five years. School psychoeducational assessments don\'t qualify.',
          'The detail most intake teams miss: families who "make too much for Medicaid" often still qualify through the Katie Beckett (TEFRA) deeming waiver — family income is ignored, and qualification is based on the child\'s level of care. It confers full Medicaid eligibility, which unlocks the ABA benefit. An online Katie Beckett application portal launched in April 2026. If your intake process turns away middle-income families without mentioning Katie Beckett, you\'re losing eligible families.',
        ],
      },
      {
        h2: 'Prior authorization',
        cites: [{ title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
        body: [
          'Everything is prior-authorized: one PA for the behavioral assessment, a separate PA for treatment, requested by the enrolled QHCP (licensed physician, psychologist, BCBA-D, or BCBA — BCaBAs and RBTs cannot serve as the QHCP). Treatment authorizations come in 6-month increments; fee-for-service PAs go through the GAMMIS portal, while CMO members follow their plan\'s process.',
        ],
        list: [
          { title: 'The treatment PA package', desc: 'Diagnosis + summarized assessment results, proposed Plan of Care (documenting all other services), IFSP/IEP if applicable, psych assessment if applicable, progress notes, and — for CMOs — a Letter of Medical Necessity and the Medicaid cover page.' },
          { title: 'Assessment recency', desc: 'Outside assessments are accepted if dated within 6 months of the request; comprehensive assessments are generally capped at 8 hours per 6-month period.' },
          { title: 'Reauthorization every 6 months', desc: 'Requires a behavior assessment conducted within 2 months of the requested effective date, progress vs. prior goals (with graphs), and updated individualized goals.' },
        ],
      },
      {
        h2: 'The CMO landscape (and why it matters for intake)',
        cites: [{ title: 'GA DCH — Autism Spectrum Disorder program', url: 'https://medicaid.georgia.gov/programs/all-programs/autism-spectrum-disorder' }, { title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'Georgia Medicaid — Georgia Families Latest News (updated 4/23/2026)', url: 'https://medicaid.georgia.gov/programs/all-programs/georgia-families/georgia-families-latest-news' }],
        body: [
          'ABA is not carved out of managed care — most members are in a CMO (CareSource, Peach State, Amerigroup today), and each administers prior auth under its own policy aligned to the DCH manual. December 2024 awards went to CareSource, Humana, Molina, and UnitedHealthcare, but as of this review (8/1/2026) the re-procurement still has not gone live: per DCH\'s own "Georgia Families — Latest News" page (updated 4/23/2026), the procurement remains in the protest phase pending a Notice of Award, and DCH has extended the current CMO contracts — Amerigroup, CareSource, and Peach State — through June 30, 2027, with no go-live date yet announced for the 2024 awardees. Amerigroup and Peach State carry no other status change beyond that extension. For intake, the practical rule: always capture which CMO the family is enrolled in — it determines the PA process, forms, and timelines you\'ll be working against — and don\'t assume the new awardees are live until DCH announces a transition date.',
        ],
      },
      {
        h2: 'Billing basics your intake data feeds',
        cites: [{ title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
        body: [
          'Georgia reimburses CPT 97151–97158, 0362T, and 0373T in 15-minute units, with practitioner-level modifiers (U1–U5) and setting modifiers — U6 in-clinic, U7 out-of-clinic at a higher rate, GT telehealth. Georgia is unusual in paying different rates by setting, which makes the family\'s preferred setting (home vs. center) an intake question with direct revenue implications. Telehealth is billable only if the rendering provider is in Georgia or within 50 miles of the border.',
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        cites: [
          { title: 'Georgia HB 412 (2022) — O.C.G.A. Title 43, Ch. 7A', url: 'https://gov.georgia.gov/document/2022-signed-legislation/hb-412/download' },
          { title: 'Ga. Comp. R. & Regs. 75-5-.01 (licensure by certification)', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-75-5-.01' },
          { title: 'GA licensure application deadlines (secondary source)', url: 'https://www.appliedbehavioranalysisedu.org/georgia/' },
          { title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' },
          { title: 'BACB RBT Handbook', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' },
        ],
        body: [
          'Georgia licensure is new and the deadlines have already passed. HB 412 created O.C.G.A. Title 43, Chapter 7A effective July 1, 2023: behavior analysts and assistant behavior analysts must now be licensed by the Georgia Behavior Analyst Licensing Board (under the Secretary of State), and unlicensed practice carries a $1,000 fine per violation. Every license applicant must clear a GCIC + FBI fingerprint record check at their own expense — filing the application is express consent. The Board required behavior analysts to file complete applications by September 30, 2025 and assistants by March 31, 2026; anyone who missed those dates may be treated as practicing without a license. (Sourcing caveat: those deadlines are confirmed on secondary sources — the Board\'s own pages on sos.ga.gov block automated retrieval — so verify current status with the Board directly.) Licenses run two years and require maintaining active BCBA/BCaBA certification.',
          'The Medicaid staffing structure runs through the QHCP. Only a licensed physician, psychologist, BCBA-D, or BCBA can be the enrolled QHCP, and each may supervise up to six BCaBAs and RBTs at any point in time — a hard ratio that caps how many technicians one BCBA can carry. A BCaBA must be supervised by a BCBA/BCBA-D but may in turn supervise RBTs; an RBT can never be the QHCP. Every direct-care professional (RBTs included) must attest to one year of experience serving youth with ASD on the Department\'s Attestation form, which must be updated and resubmitted within two weeks of any staffing change — a compliance chore intake and HR should share. Supervision doesn\'t require the supervisor on site, but both supervisor and supervisee must keep contemporaneous records of each session\'s date, duration, type, and content; discrepancies subject the associated claims to recoupment.',
          'At the technician level, Georgia is notably light on state screening: technicians are exempt from licensure (they must use nonprofessional titles like "behavior technician"), and neither the statute nor the publicly posted ASD manual imposes a state background-check, fingerprint, or registry mandate on them — the operative screen is the BACB\'s own: a criminal background check plus abuse-registry check within 180 days before the RBT application, with 5%-of-hours monthly supervision and at least two face-to-face contacts per month. Plan-level extras do bind: Peach State requires protocol modification (BCBA-level case direction) at ≥2 hours/week or 10% of direct service hours (whichever is greater), and 0373T sessions must include a BCBA onsite and immediately available. One honest gap: the ASD manual publicly posted is the January 2018 version, and current quarterly manuals plus enrollment-screening detail live inside GAMMIS, which blocks public access — confirm staff-level exclusion-screening expectations (OIG LEIE / SAM.gov cadence) with DCH provider enrollment.',
        ],
      },
    ],
    collect: [
      { title: 'Medicaid ID + CMO', desc: 'Which plan the child is on (CareSource, Peach State, Amerigroup, or FFS) — it decides the whole PA path.' },
      { title: 'Diagnosis report + tools used', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, instruments used, and the date (5-year window; 6-month recency for assessments).' },
      { title: 'Katie Beckett status', desc: 'For non-Medicaid families: whether they\'ve applied, and a pointer to the online portal if not.' },
      { title: 'IEP / IFSP', desc: 'Required in the PA package when applicable; also flags school-setting rules.' },
      { title: 'Preferred setting & availability', desc: 'Home vs. center affects modifiers and rates; school attendance affects allowable weekly hours.' },
      { title: 'Other services in place', desc: 'Speech, OT, PT — the Plan of Care must document coordination.' },
    ],
    sources: [
      { title: 'GA DCH — Autism Spectrum Disorder program', url: 'https://medicaid.georgia.gov/programs/all-programs/autism-spectrum-disorder' },
      { title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' },
      { title: 'GA DCH — Katie Beckett / TEFRA', url: 'https://medicaid.georgia.gov/programs/all-programs/tefrakatie-beckett' },
      { title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' },
      { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' },
      { title: 'Georgia HB 412 (2022) — O.C.G.A. Title 43, Ch. 7A', url: 'https://gov.georgia.gov/document/2022-signed-legislation/hb-412/download' },
      { title: 'Ga. Comp. R. & Regs. 75-5-.01 (licensure by certification)', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-75-5-.01' },
      { title: 'GA licensure application deadlines (secondary source)', url: 'https://www.appliedbehavioranalysisedu.org/georgia/' },
      { title: 'BACB RBT Handbook', url: 'https://www.bacb.com/rbt-handbook' },
    ],
    faq: [
      { q: 'Does Georgia Medicaid cover ABA therapy?', a: 'Yes — for members under age 21 with a documented DSM-5 ASD diagnosis, under EPSDT, effective since January 2018. All services require prior authorization.' },
      { q: 'Can families who earn too much for Medicaid still get ABA covered?', a: 'Often, yes — through the Katie Beckett (TEFRA) deeming waiver, which ignores family income and qualifies the child based on level of care. Approval confers full Medicaid eligibility, including the ABA benefit.' },
      { q: 'How long do Georgia Medicaid ABA authorizations last?', a: 'Treatment authorizations are issued in 6-month increments, with reauthorization requiring a recent assessment (within 2 months), documented progress, and updated goals.' },
    ],
  },

  'anthem-bcbs-georgia': {
    slug: 'anthem-bcbs-georgia',
    cardDesc: 'CG-BEH-02 criteria + Ava\u2019s Law mandate; caps, parity, billing rules.',
    family: 'anthem',
    assessmentPA: 'Required; initial behavior-identification assessment capped at 20 combined hours',
    treatmentPA: 'Required — updated plan every 6 months',
    dxRequired: 'Yes \u2014 ASD diagnosis from a licensed, qualified professional (CG-BEH-02)',
    payer: 'Anthem BCBS Georgia',
    state: 'GA', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'Anthem\u2019s commercial ABA guide \u2014 which names Georgia (Blue Cross Blue Shield Healthcare Plan of Georgia, Inc.) on its cover \u2014 defines supervision through what is billable rather than through a ratio: \u201cA QHP can only bill for 97155 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician.\u201d Approved ABA renderers include BCBA/BCBA-D and \u201cproviders practicing under the direction and supervision of the BCBA.\u201d No percentage floor or caseload cap is published.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, on Anthem\u2019s own terms: where the technician and the QHP are both face-to-face with the patient at the same time and the QHP is directing the technician, \u201ccodes 97153 and 97155 can be billed together.\u201d The permission is conditional on that simultaneous face-to-face direction \u2014 97155 for analyst work away from the patient is outside it.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
      },
      dailyLimits: {
        value:
          'Anthem publishes no Anthem-specific per-day ceiling and defers to CMS. \u201cABA codes may have associated MUE limits\u201d; Anthem administers NCCI edits under its Code and Clinical Editing Guidelines reimbursement policy, and \u201cNCCI edits are revised to align with CMS MUE updates once published.\u201d The guide points providers to CMS for the current MUE list \u2014 so the operative regime is the CMS table Anthem\u2019s editor loads, not a published Anthem number.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        verifyVia:
          'Which CMS MUE table (Practitioner vs. Medicaid NCCI) Anthem\u2019s editor applies to a given Georgia product \u2014 confirm with Anthem provider services before modelling units.',
      },
      noteSignature: {
        value:
          'Anthem signs by author identification and puts a clock on it. Each entry in the medical record must include author identification of the physician or other QHP \u2014 \u201ca handwritten signature, unique electronic identifier, or initials and rendering provider credentials\u201d \u2014 entered at the time of service or shortly thereafter and \u201cnot exceed[ing] 30 days,\u201d with the signature date within 30 days of the date of service. All documentation must be legible to someone other than the writer and must support the services billed on each unique date. For timed ABA codes the record must carry total treatment time in minutes plus start and stop times.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
      },
      placeOfService: {
        value:
          'Anthem publishes the POS code list for ABA outright: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member outside the home \u2014 all \u201csubject to member\u2019s coverage and reviews by the plan.\u201d School and community are therefore codeable places of service, not excluded ones; group home is not listed.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        verifyVia:
          'Whether POS 03 school is payable on a specific Georgia member\u2019s benefit \u2014 the code list is explicitly subject to plan review.',
      },
      billAsProvider: {
        value:
          'The supervising analyst goes in box 31. \u201cABA therapy performed by therapy assistants, behavioral technicians, or paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form.\u201d Credential level rides as a modifier: HM for less than bachelor\u2019s level, HN bachelor\u2019s level, HO master\u2019s level.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
      },
    },
    pill: 'Payer Guide · Anthem BCBS Georgia',
    h1: 'Anthem BCBS Georgia ABA coverage (+ Ava\'s Law).',
    metaTitle: 'Anthem BCBS Georgia ABA Coverage & Ava\'s Law: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross Blue Shield covers ABA in Georgia: CG-BEH-02 medical-necessity criteria, documentation and billing rules, 6-month reauthorization — plus how Ava\'s Law and parity protections apply.',
    intro: [
      'Anthem Blue Cross Blue Shield of Georgia covers ABA under clinical guideline CG-BEH-02, layered on top of Georgia\'s autism insurance mandate — Ava\'s Law. The combination matters: the policy defines what\'s medically necessary, while the mandate (and federal parity law) defines what plans must offer and which caps are actually enforceable. Intake teams that understand both catch coverage that others write off.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — per CG-BEH-02 medical-necessity criteria' },
      { label: 'State mandate', value: 'Ava\'s Law: state-regulated plans, age 20 and under' },
      { label: 'Assessment cap', value: 'Initial behavior-identification assessment ≤20 combined hours' },
      { label: 'Direct-care ceiling', value: '≤40 hrs/week adaptive behavior treatment' },
      { label: 'Reauth', value: 'Updated plan every 6 months; standardized assessment ≥ every 2 years' },
      { label: 'Parity note', value: '$35K/year cap generally unenforceable vs. large groups (MHPAEA)' },
    ],
    sections: [
      {
        h2: 'Medical-necessity criteria',
        cites: [{ title: 'Anthem ABA Provider Resource Guide (Oct 2024)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        body: [
          'CG-BEH-02 requires all of the following: an ASD diagnosis from a licensed, qualified professional; a person-centered treatment plan with measurable, baseline-anchored goals; a provider licensed or certified per state law; completed functional assessments across motor, language, social, and adaptive domains; and age-appropriate goals targeting the deficits that matter. The initial behavior-identification assessment is capped at 20 combined hours — enough for a thorough assessment, not an open-ended one.',
        ],
      },
      {
        h2: 'Ava\'s Law — and its limits',
        cites: [{ title: 'Ava\'s Law — O.C.G.A. § 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' }],
        body: [
          'Georgia\'s autism mandate (O.C.G.A. § 33-24-59.10) requires state-regulated individual and group plans to cover ASD treatment — including ABA — for individuals 20 and under, with ABA nominally cappable at $35,000/year. Two big caveats every intake team should know: employers with 10 or fewer employees and self-funded ERISA plans are exempt from the state mandate; and federal mental-health parity (MHPAEA) generally makes the dollar and age caps unenforceable against covered large-group plans. A payer applying the $35K cap to a large-group member is a parity red flag worth escalating, not accepting.',
        ],
      },
      {
        h2: 'Billing and documentation rules',
        cites: [{ title: 'Anthem ABA Provider Resource Guide (Oct 2024)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        list: [
          { title: 'Codes & modifiers', desc: '97151–97158 plus 0362T/0373T, with degree-level modifiers (HM/HN/HO). Technician-rendered services must show the supervising BCBA in Box 31 of the CMS-1500.' },
          { title: 'Concurrent billing', desc: '97155 alongside 97153 only when technician and QHP are both face-to-face and the QHP is directing.' },
          { title: 'Hour limits', desc: 'Direct treatment ≤40 hours/week; protocol modification up to 2 hours per 10 direct hours, max 8/week.' },
          { title: 'Documentation', desc: 'Timed codes need total minutes and start/stop times; notes entered within 30 days with signature and credentials; plans must include caregiver training, mastery dates, generalization, and discharge planning.' },
        ],
      },
      {
        h2: 'Reauthorization rhythm',
        cites: [{ title: 'Anthem ABA Provider Resource Guide (Oct 2024)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        body: [
          'Expect an updated treatment plan every 6 months, interim progress assessment at least every 6 months, standardized developmental assessments at minimum every 2 years, and documented clinically significant progress in adaptive functioning, communication, language, or social skills. Intake sets this clock: the baseline data collected at the start is what every future review gets measured against.',
        ],
      },
    ],
    collect: [
      { title: 'Member ID + plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) vs. small group (≤10 employees, exempt) — this determines what the plan owes.' },
      { title: 'Employer size', desc: 'Directly relevant to both the mandate and parity analysis.' },
      { title: 'Diagnosis + functional assessments', desc: 'ASD diagnosis from a qualified professional, plus any existing motor/language/social/adaptive assessments.' },
      { title: 'Age', desc: 'The mandate covers 20 and under; parity may extend practical coverage — flag edge cases for benefits verification.' },
      { title: 'Baseline data expectations', desc: 'Set up the measurable, baseline-anchored goals CG-BEH-02 requires from day one.' },
    ],
    sources: [
      { title: 'Anthem ABA Provider Resource Guide (Oct 2024)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' },
      { title: 'Ava\'s Law — O.C.G.A. § 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' },
      { title: 'Georgia Behavior Analyst Licensing Board', url: 'https://sos.ga.gov/georgia-behavior-analyst-licensing-board' },
    ],
    faq: [
      { q: 'Does Anthem BCBS Georgia cover ABA therapy?', a: 'Yes — under clinical guideline CG-BEH-02, requiring an ASD diagnosis, functional assessments, a measurable treatment plan, and a licensed/certified provider. Georgia\'s Ava\'s Law also mandates coverage in state-regulated plans for individuals 20 and under.' },
      { q: 'Is the $35,000 ABA cap in Ava\'s Law enforceable?', a: 'Against large-group plans covered by federal parity law, generally not — MHPAEA prohibits treatment limits on mental-health benefits that are stricter than medical/surgical benefits. Treat a payer applying the cap to a large-group member as a red flag to escalate.' },
      { q: 'Which plans are exempt from Ava\'s Law?', a: 'Self-funded ERISA plans (federal preemption) and employers with 10 or fewer employees. That\'s why intake should always capture the employer and funding type, not just the insurance card.' },
    ],
  },

  'caresource-georgia': {
    slug: 'caresource-georgia',
    cardDesc: 'MCD-MM-0212 aligned to the DCH manual; in-house PA; 2026 rate change.',
    family: 'caresource',
    assessmentPA: 'Required — in-house PA/medical review, aligned to the DCH ASD manual',
    treatmentPA: 'Required — signed treatment documentation before claims',
    dxRequired: 'Yes \u2014 DSM-5 ASD per the DCH ASD manual',
    payer: 'CareSource (Georgia Medicaid CMO)',
    pill: 'Payer Guide · CareSource Georgia',
    h1: 'CareSource Georgia ABA coverage (GA Medicaid CMO).',
    metaTitle: 'CareSource Georgia Medicaid ABA (CMO) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CareSource administers ABA for Georgia Medicaid members — policy MCD-MM-0212 aligned to the DCH ASD manual, in-house medical review, MUE daily-unit limits, and a 2026 reimbursement change.',
    state: 'GA', kind: 'medicaid-mco', parent: 'Georgia Medicaid',
    deliveryRules: {
      supervision: {
        value:
          'CareSource restates the DCH structure and adds a reimbursement consequence. The QHCP must supervise non-enrolled practitioners under the enrolled provider identification number of the QHCP and/or facility, performed in accordance with BACB supervision guidelines \u2014 and \u201csupervision is not separately reimbursable as it is buil[t] into the direct service code rates.\u201d Who may supervise whom: a licensed physician, licensed psychologist, BCBA-D or BCBA may supervise BCaBAs and RBTs; a BCaBA must be supervised by a physician, psychologist or BCBA/BCBA-D but may supervise RBTs. Supervision records must capture the duration and type of each session plus a brief summary of pertinent activity, kept by both supervisor and supervisee for audit; discrepancies make the associated claims subject to recoupment. Family training must be delivered by the BCBA or BCaBA \u2014 an RBT may assist during a family-training session but may not conduct the training or supervise interventions.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      concurrentBilling: {
        value:
          'CareSource publishes the limit, not the permission. \u201cTime reported and billed MUST be face-to-face time with the patient,\u201d and \u201cQHCP billing of protocol modification is not appropriate in instances when documentation supports only supervision or services being performed at a time when the member is not present.\u201d So 97155 billed for supervision with the member absent is a recoupment target. The policy does not state affirmatively whether 97153 and 97155 may be billed for the same clock time when analyst, technician and member are all face-to-face.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
        verifyVia:
          'CareSource Provider Services for the same-clock-time question \u2014 the policy answers only the negative case.',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling is published. MM-0212 leaves intensity to medical necessity, noting only that \u201cmedical[ly] necessary will determine approved hours per week (eg, typically 10-30 hours)\u201d commensurate with the deficits identified in the behavior assessment.',
        status: 'unverified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
        verifyVia:
          'CareSource GA provider services / the Georgia fee schedule inside GAMMIS.',
      },
      noteSignature: {
        value:
          'CareSource adds a parent signature and makes it a claims precondition \u2014 this is the rule most likely to cost a Georgia clinic money. The member\u2019s treatment record (plans of care, treatment plans, behavior support plans, functional assessments, daily services notes and progress notes) \u201cmust be completed by the provider or practitioner, signed by the parent or legal guardian (if minor age) or by the member if applicable and submitted to CareSource prior to claims submission. Claims will not be accepted without accompanying signed treatment documentation.\u201d On top of that, progress notes must be legible, detailed, complete, signed and dated; signatures must be original and belong to the person who created them and be dated the actual date signed; rubber stamps are not acceptable and electronic signatures only in certain circumstances; records must be real-time, never back-dated, with corrections by single strike-through plus initials and date.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
      },
      placeOfService: {
        value:
          'MM-0212 describes ABA as delivered \u201cin centers or at home\u201d and permits telehealth delivery per GA DCH Part II policy, with the provider responsible for judging clinical appropriateness, risk and provider competence for the modality. It sets no separate school or group-home rule of its own.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
        verifyVia:
          'For school-based delivery under a CareSource member: CareSource GA provider services, since the policy is silent where Peach State\u2019s is explicit.',
      },
      billAsProvider: {
        value:
          'Under the QHCP and/or the facility. CareSource repeats the state rule that the QHCP must supervise non-enrolled practitioners \u201cunder the enrolled provider identification number of the QHCP and/or facility\u201d \u2014 so RBT- and BCaBA-delivered time is claimed on the supervising enrolled provider\u2019s number, not the technician\u2019s.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
    },
    intro: [
      'CareSource is one of the Georgia Medicaid care management organizations (CMOs) that administers the ABA benefit. Its ABA policy (MCD-MM-0212) is aligned to the Georgia DCH Part II ASD manual, but CareSource layers its own utilization-management process on top — so if a family carries CareSource, this is the guide that governs their authorization.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Georgia Medicaid CMO (managed care)' },
      { label: 'Policy', value: 'GA MCD-MM-0212, aligned to the DCH ASD manual' },
      { label: 'Prior auth', value: 'Required; in-house PA/medical review (GA manual + MCG)' },
      { label: 'Docs', value: 'Signed treatment documentation before claims submission' },
      { label: 'Daily units', value: 'CMS MUE per-code daily-unit limits apply' },
      { label: '2026 rate', value: 'Pays 80% of the GA Medicaid fee schedule (eff. 5/11/2026)' },
      { label: 'Diagnosis recency', value: 'Eval within 5 years (DCH-aligned criteria)' },
    ],
    sections: [
      {
        h2: 'How CareSource administers the benefit',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
        body: [
          'CareSource performs in-house prior authorization and medical review using the Georgia ASD manual plus MCG Health criteria, and requires signed treatment documentation to be submitted prior to claims submission. Because it aligns to the DCH manual, the underlying clinical rules mirror Georgia Medicaid — but the submission path, forms, and timelines are CareSource\'s own.',
        ],
        list: [
          { title: 'Maximum daily units (MUE)', desc: 'Per CMS MUE as published by GA (via MM-0212): e.g., 97151=32, 97153=32, 97155=24, 97156=16 daily units — capture requested intensity by code.' },
          { title: 'Assessment cap', desc: 'Comprehensive assessments generally not to exceed 8 hours per 6-month period, consistent with the DCH manual.' },
        ],
      },
      {
        h2: 'The 2026 rate change',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
        body: [
          'Effective May 11, 2026, CareSource pays 80% of the Georgia Medicaid fee schedule for covered services — a material change for practices modeling CareSource revenue. It does not change coverage, but it changes the economics of every CareSource authorization.',
        ],
      },
    ],
    collect: [
      { title: 'CareSource member ID', desc: 'Confirm the family is on CareSource (vs. another GA CMO or FFS) — it decides the whole PA path.' },
      { title: 'DSM-5 ASD diagnosis + tools', desc: 'Diagnosis, instruments used, and date, per the DCH manual requirements CareSource follows.' },
      { title: 'Treatment documentation', desc: 'Signed treatment documentation is required before claims — set the expectation at intake.' },
      { title: 'Requested units by code', desc: 'MUE daily-unit limits apply, so plan requested intensity code by code.' },
    ],
    sources: [
      { title: 'CareSource — GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' },
      { title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' },
    ],
    faq: [
      { q: 'Does CareSource Georgia cover ABA therapy?', a: 'Yes — CareSource administers the Georgia Medicaid ABA benefit under policy MCD-MM-0212, aligned to the DCH ASD manual, with in-house prior authorization and medical review. Members must be under 21 with an ASD diagnosis.' },
      { q: 'What changed with CareSource ABA reimbursement in 2026?', a: 'Effective May 11, 2026, CareSource pays 80% of the Georgia Medicaid fee schedule for covered services. Coverage is unchanged; the reimbursement rate is lower.' },
      { q: 'How is CareSource different from Georgia Medicaid fee-for-service?', a: 'The clinical rules align to the DCH ASD manual, but CareSource runs its own PA/medical-review process (using MCG criteria) and requires signed treatment documentation before claims. Always confirm the member\'s plan at intake.' },
    ],
  },

  'peach-state-georgia': {
    slug: 'peach-state-georgia',
    cardDesc: 'GA.CP.BH.504; hour parameters + 80%-attendance rule; 0373T rules.',
    family: 'centene',
    assessmentPA: 'Required — criteria based on the DCH ASD manual',
    treatmentPA: 'Required — criteria based on the DCH ASD manual',
    dxRequired: 'Yes \u2014 DSM-5 ASD per the DCH ASD manual',
    payer: 'Peach State Health Plan (GA Medicaid CMO)',
    pill: 'Payer Guide · Peach State (GA)',
    h1: 'Peach State Health Plan ABA coverage (GA Medicaid CMO).',
    metaTitle: 'Peach State Health Plan (GA Medicaid CMO) ABA Coverage | Carelu',
    metaDescription:
      'How Peach State Health Plan administers ABA for Georgia Medicaid — policy GA.CP.BH.504 aligned to the DCH ASD manual, hour parameters, the 80%-attendance rule, and 0373T requirements.',
    state: 'GA', kind: 'medicaid-mco', parent: 'Georgia Medicaid',
    deliveryRules: {
      supervision: {
        value:
          'Peach State is the Georgia plan that publishes a hard supervision floor: \u201cAdaptive Behavior Treatment with Protocol Modification occurs for at least two hours per week or 10% of the direct service hours provided, whichever is greater.\u201d For a 30-hour week that is three hours of 97155, not two. Separately, any request using 0373T \u201cmust include a BCBA who is onsite and immediately available to join the session.\u201d',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not stated. GA.CP.BH.504 reproduces the AMA descriptor for 97155 \u2014 \u201cwhich may include simultaneous direction of technician, face-to-face with one patient\u201d \u2014 but sets no same-clock-time billing rule of its own for 97153 alongside 97155.',
        status: 'unverified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
        verifyVia:
          'Peach State / Centene provider services, and the Georgia fee schedule inside GAMMIS.',
      },
      dailyLimits: {
        value:
          'Peach State works in hours per day and per week rather than a per-code MUE table. Treatment hours must \u201cnot exceed six hours per day up to a total of 30 hours per week,\u201d unless clinical documentation justifies more (high-intensity, high-frequency behaviors or significant skill deficits). The treatment plan must also reflect the child\u2019s school attendance \u2014 the policy names \u201cless than 20 hours per week if attending school full-time\u201d as the benchmark \u2014 and must build in rest, nutrition breaks and peer-interaction time.',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      noteSignature: {
        value:
          'Not addressed for session notes. The policy does require the diagnostic evaluation to carry the \u201cevaluator\u2019s name, legible signature, and credentials,\u201d but says nothing about who signs each treatment session note or when.',
        status: 'unverified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
        verifyVia:
          'Peach State provider manual / provider services; Georgia DCH\u2019s documentation standard (writer signs and dates, real time, no back-dating) is the applicable floor.',
      },
      placeOfService: {
        value:
          'School delivery is allowed but gated by a separate school plan \u2014 the most operationally demanding place-of-service rule in Georgia. \u201cA school plan is required for all educational settings to include home school, public and private schools (with exception only for daycare or after-school settings).\u201d In school, the plan of care must define the behaviors targeted for reduction specific to that setting, list behavior-reduction goals and include line graphs meeting the ASD policy graph rules; skill-acquisition goals \u201cshould not be implemented in this setting.\u201d Training school personnel is not reimbursable. Reauthorization data must be collected across all treatment settings \u2014 home, school, clinic, community. And ABA delivered \u201cin lieu of school, respite care, or other community-based settings of care\u201d is a discharge criterion, not a covered service.',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      billAsProvider: {
        value:
          'Peach State\u2019s ASD policy sets no separate rule, so the Georgia DCH floor governs: BCaBAs and RBTs are not independently enrolled, and their time is claimed under the supervising QHCP\u2019s and/or the facility\u2019s enrolled provider number with the U1\u2013U5 practitioner-level modifier and the U6/U7/GT setting modifier.',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
        verifyVia:
          'Confirm the modifier set against the current Georgia fee schedule in GAMMIS before a first submission.',
      },
    },
    intro: [
      'Peach State Health Plan is a Georgia Medicaid CMO that administers the ABA benefit under clinical policy GA.CP.BH.504, with prior-authorization criteria explicitly based on the DCH Part II ASD manual. For families carrying Peach State, this is the plan-level layer on top of the state rules.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Georgia Medicaid CMO (managed care)' },
      { label: 'Policy', value: 'GA.CP.BH.504 (ASD services), based on the DCH manual' },
      { label: 'Hours', value: '≤6 hrs/day up to 30/week unless clinically justified' },
      { label: 'Students', value: '<20 hrs/week if attending school full-time' },
      { label: 'Attendance', value: 'Below 80% of authorized hours requires justification' },
      { label: 'Note', value: 'Lost the 2024 CMO rebid (protest pending) — watch status' },
      { label: 'Diagnosis recency', value: 'Eval within 5 years (DCH-aligned criteria)' },
    ],
    sections: [
      {
        h2: 'Utilization parameters',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
        body: [
          'Peach State\'s PA criteria follow the DCH ASD manual. Hour parameters: no more than 6 hours per day, up to 30 hours per week unless clinically justified; fewer than 20 hours per week for full-time students; protocol modification (97155) at least 2 hours per week or 10% of direct hours. If attendance falls below 80% of authorized hours, justification documentation is required — which makes capturing realistic family availability at intake a reauthorization safeguard.',
        ],
        list: [
          { title: '0373T requirements', desc: 'Requests need an extra-technician plan, environmental modifications per target behavior, a titration plan toward 97153, and a BCBA on-site and immediately available.' },
        ],
      },
    ],
    collect: [
      { title: 'Peach State member ID', desc: 'Confirm the plan — it determines the PA process and forms.' },
      { title: 'DSM-5 ASD diagnosis', desc: 'Per the DCH manual criteria Peach State follows.' },
      { title: 'Realistic availability', desc: 'The 80%-attendance rule makes accurate availability a first-order intake question.' },
      { title: 'School status', desc: 'Full-time school attendance caps weekly hours below 20 — capture it up front.' },
    ],
    sources: [
      { title: 'Peach State — GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' },
      { title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' },
    ],
    faq: [
      { q: 'Does Peach State Health Plan cover ABA therapy?', a: 'Yes — Peach State administers the Georgia Medicaid ABA benefit under policy GA.CP.BH.504, with prior-authorization criteria based on the DCH ASD manual, for members under 21 with ASD.' },
      { q: 'What are Peach State\'s ABA hour limits?', a: 'Generally no more than 6 hours/day up to 30 hours/week unless clinically justified, and under 20 hours/week for full-time students. Attendance below 80% of authorized hours requires justification.' },
      { q: 'Is Peach State staying a Georgia Medicaid CMO?', a: 'Peach State lost the December 2024 CMO rebid and filed a protest; the transition timeline has been in flux. Confirm the member\'s current plan and any transition at intake.' },
    ],
  },

  'amerigroup-georgia': {
    slug: 'amerigroup-georgia',
    cardDesc: 'CG-BEH-02 adaptive behavioral treatment; verify current version.',
    family: 'anthem',
    assessmentPA: 'Required — CG-BEH-02 medical-necessity review',
    treatmentPA: 'Required — CG-BEH-02 medical-necessity review',
    dxRequired: 'Yes \u2014 DSM-5 ASD per the DCH ASD manual',
    payer: 'Amerigroup (GA Medicaid CMO)',
    pill: 'Payer Guide · Amerigroup (GA)',
    h1: 'Amerigroup Georgia ABA coverage (GA Medicaid CMO).',
    metaTitle: 'Amerigroup Georgia Medicaid (CMO) ABA Coverage Guide | Carelu',
    metaDescription:
      'How Amerigroup administers ABA for Georgia Medicaid — the CG-BEH-02 adaptive behavioral treatment guideline aligned to the DCH ASD manual, with prior authorization and medical-necessity review.',
    state: 'GA', kind: 'medicaid-mco', parent: 'Georgia Medicaid',
    deliveryRules: {
      supervision: {
        value:
          'Amerigroup publishes a supervision ceiling rather than a floor: \u201cUp to two (2) hours of protocol modification will be covered for every ten (10) hours of direct ABT therapy. Any greater frequency of protocol modification will require written documentation demonstrating the need for additional protocol modification.\u201d In practice that is a 20% cap on 97155 against 97153 before extra justification is required. Note the vintage \u2014 UM Guideline CG-BEH-02 carries a current effective date of 9/27/2017 and a last review date of 8/3/2017.',
        status: 'verified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Confirm CG-BEH-02 is still the operative Georgia guideline \u2014 Amerigroup GA is operating under a DCH contract extension through 6/30/2027 and the posted guideline is dated 2017.',
      },
      concurrentBilling: {
        value:
          'Not addressed. CG-BEH-02 is a medical-necessity guideline, not a reimbursement policy, and contains no same-clock-time rule for 97153 with 97155.',
        status: 'unverified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Amerigroup/Wellpoint Georgia provider services, and the Georgia fee schedule inside GAMMIS.',
      },
      dailyLimits: {
        value:
          'Amerigroup gates by the week, not the day. \u201cThe total hours of ABT requested should be comprised of fewer than 40 hours per week\u201d \u2014 more than 40 requires documentation of why, because \u201cABT services for more than 40 hours per week have not been shown to be more effective.\u201d Group adaptive behavior treatment and social-skills group hours count inside that 40. Exposure adaptive behavior treatment and exposure treatment with protocol modification (0362T/0373T) \u201cshould be comprised of fewer than 10 hours per week.\u201d No per-code per-day unit ceiling is published.',
        status: 'verified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
      },
      noteSignature: {
        value:
          'Not addressed. The guideline sets documentation expectations for authorization (clinical summaries justifying hours per behavioral target, progress measured against baseline) but no session-note signature rule.',
        status: 'unverified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Amerigroup GA provider manual; Georgia DCH\u2019s standard \u2014 the writer signs and dates, real time, no back-dating \u2014 is the applicable floor.',
      },
    },
    intro: [
      'Amerigroup is a Georgia Medicaid CMO that administers ABA under its Adaptive Behavioral Treatment for ASD guideline (CG-BEH-02), aligned to the Georgia DCH ASD manual. Its published guideline has an older revision date, so verifying the current version on the Amerigroup provider portal is especially important here.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Georgia Medicaid CMO (managed care)' },
      { label: 'Guideline', value: 'CG-BEH-02 (Adaptive Behavioral Treatment for ASD)' },
      { label: 'Aligned to', value: 'Georgia DCH Part II ASD manual' },
      { label: 'Prior auth', value: 'Required; medical-necessity review' },
      { label: 'Caution', value: 'Published guideline dated 2017/2018 — verify current version' },
      { label: 'Note', value: 'Amerigroup\'s Georgia CMO status was affected by the 2024 rebid' },
      { label: 'Diagnosis recency', value: 'Eval within 5 years (DCH-aligned criteria)' },
    ],
    sections: [
      {
        h2: 'How Amerigroup administers the benefit',
        cites: [{ title: 'Amerigroup — Adaptive Behavioral Treatment for ASD (CG-BEH-02, GA Medicaid)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        body: [
          'Amerigroup covers ABA under CG-BEH-02, its adaptive behavioral treatment guideline, aligned to the Georgia DCH ASD manual and subject to prior authorization and medical-necessity review. Because the published version is dated 2017/2018 and likely superseded, treat the linked guideline as a starting point and confirm the current requirements on the Amerigroup provider portal before relying on any specific rule.',
        ],
      },
    ],
    collect: [
      { title: 'Amerigroup member ID', desc: 'Confirm the plan and current CMO status at intake.' },
      { title: 'DSM-5 ASD diagnosis', desc: 'Per the DCH manual criteria the guideline aligns to.' },
      { title: 'Medical-necessity documentation', desc: 'Required for the prior-authorization request.' },
      { title: 'Plan of Care', desc: 'Measurable, baseline-anchored goals consistent with the DCH manual.' },
    ],
    sources: [
      { title: 'Amerigroup — Adaptive Behavioral Treatment for ASD (CG-BEH-02, GA Medicaid)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' },
      { title: 'GA DCH — Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' },
    ],
    faq: [
      { q: 'Does Amerigroup Georgia cover ABA therapy?', a: 'Yes — Amerigroup administers the Georgia Medicaid ABA benefit under its CG-BEH-02 adaptive behavioral treatment guideline, aligned to the DCH ASD manual, with prior authorization and medical-necessity review.' },
      { q: 'Is Amerigroup\'s Georgia ABA guideline current?', a: 'The publicly available version is dated 2017/2018 and is likely superseded. Verify the current guideline on the Amerigroup provider portal before relying on specific requirements.' },
    ],
  },

  'aetna-georgia': {
    slug: 'aetna-georgia',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the O.C.G.A. § 33-24-59.10 (Ava’s Law) mandate layer.',
    assessmentPA: 'Required — precertification (form GR-69017-4), per Aetna\'s national CPB 0554 policy',
    treatmentPA: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
    dxRequired: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
    payer: 'Aetna in Georgia',
    state: 'GA', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, \u201cthere must be supervision and direction of the unlicensed or non-certified providers in line with practice standards.\u201d The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap \u2014 the operative standard is professional practice plus whatever the contract adds.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither the ABA Medical Necessity Guide nor Aetna\u2019s clinical policy bulletin on ABA addresses whether 97153 and 97155 may be billed for the same clock time; Aetna carries the concurrency question in its claim editing rather than in a public policy.',
        status: 'unverified',
        verifyVia:
          'Aetna precertification/provider services at the number on the member\u2019s ID card, and the plan\u2019s own reimbursement schedule \u2014 ask specifically whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
      },
      dailyLimits: {
        value:
          'Not published. Aetna\u2019s ABA documents set medical-necessity criteria and precertification requirements for 97151\u201397158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies.',
        status: 'unverified',
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
      },
      noteSignature: {
        value:
          'Not published in Aetna\u2019s ABA materials \u2014 no rule on who signs a session note or within what window.',
        status: 'unverified',
        verifyVia:
          'The Aetna provider manual and your participation agreement\u2019s documentation clause.',
      },
      placeOfService: {
        value:
          'Aetna does not publish a POS code list for ABA. The one place-of-service boundary it does state is the schools carve-out: pursuant to applicable law Aetna \u201cis not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act.\u201d That is a limit on paying for what the IEP owes, not a blanket ban on the school setting \u2014 and it yields to a stronger state mandate. Where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'The member\u2019s benefit document, and Aetna provider services for whether school-setting ABA is payable on that plan.',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician. \u201cServices must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise.\u201d The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
    },
    pill: 'Payer Guide · Aetna · Georgia',
    h1: 'Aetna ABA coverage in Georgia: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Georgia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Georgia families — the national clinical policy, prior authorization, the O.C.G.A. § 33-24-59.10 (Ava’s Law) mandate (ages, caps, exemptions), Georgia behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Georgia, a Aetna card means three layers at once: the carrier\'s national clinical policy, Georgia\'s autism insurance mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'O.C.G.A. § 33-24-59.10 (Ava’s Law)' },
      { label: 'Mandate age', value: 'Age 20 and under (mandate); parity may extend in practice' },
      { label: 'Mandate caps', value: '$35,000/yr nominal ABA cap; no visit limits allowed' },
      { label: 'Exempt from mandate', value: '≤10-employee groups; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed Behavior Analyst (GA Behavior Analyst Licensing Board)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Georgia',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Georgia is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Georgia.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Georgia mandate: what it guarantees (and doesn\'t)',
        body: [
          'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. The statute exempts employers with 10 or fewer employees, and insurers can seek a one-year opt-out if an actuary certifies the mandate raises average premiums more than 1%. Self-funded ERISA plans are exempt by federal preemption. Federal mental-health parity (MHPAEA) generally makes the dollar and age caps hard to enforce against covered large-group plans — a payer applying the $35K cap to a large-group member is a red flag to escalate, not accept.',
        ],
        cites: [
      { title: 'Georgia Code § 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' },
      { title: 'Autism Speaks — Georgia state-regulated coverage', url: 'https://www.autismspeaks.org/georgia-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No Georgia-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no Georgia-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Georgia-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Georgia',
        body: [
          'Georgia now licenses behavior analysts: HB 412 (2022) created the Georgia Behavior Analyst Licensing Board under the Secretary of State, with licensure built on BCBA certification. Confirm your supervising analysts hold the Georgia license when credentialing with any commercial plan. On rates: Aetna does not publish commercial ABA fee schedules for Georgia (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Georgia Association for Behavior Analysis — licensure (HB 412)', url: 'https://www.georgia-aba.org/licensure' },
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
      { title: 'Georgia Code § 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' },
      { title: 'Autism Speaks — Georgia state-regulated coverage', url: 'https://www.autismspeaks.org/georgia-state-regulated-insurance-coverage' },
      { title: 'Georgia Association for Behavior Analysis — licensure (HB 412)', url: 'https://www.georgia-aba.org/licensure' },
      { title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    faq: [
      { q: 'Does Aetna cover ABA therapy in Georgia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Georgia\'s mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Georgia autism mandate require?', a: 'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Georgia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Georgia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-georgia': {
    slug: 'cigna-georgia',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the O.C.G.A. § 33-24-59.10 (Ava’s Law) mandate layer.',
    assessmentPA: 'Not required for assessment codes 97151, 97152, 0362T (per national policy EN0499)',
    treatmentPA: 'Required — assessment + treatment plan with the ABA PA form (EN0499)',
    dxRequired: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
    payer: 'Cigna / Evernorth in Georgia',
    state: 'GA', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'Not published as a ratio. The Evernorth autism resource guide governs credentialing and billing rather than supervision intensity, and Evernorth publishes no percentage floor or caseload cap for technician supervision.',
        status: 'unverified',
        verifyVia:
          'Evernorth Provider Services at 800.926.2273, and the Intensive Behavioral Interventions coverage policy (EN0499).',
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
      },
      noteSignature: {
        value:
          'Not published in the autism resource guide \u2014 no rule on who signs a session note or when.',
        status: 'unverified',
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
      },
      placeOfService: {
        value:
          'Only the telehealth half is published: \u201call ABA CPT codes are covered telehealth services,\u201d subject to the Intensive Behavioral Interventions coverage policy (EN0499). The guide states no school, community or group-home rule.',
        status: 'unverified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 for school and community settings, plus the member\u2019s benefit document.',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: \u201cEvernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider.\u201d Practically, the BCBA\u2019s credential is what the claim rides on for technician-delivered 97153.',
        status: 'verified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    pill: 'Payer Guide · Cigna · Georgia',
    h1: 'Cigna / Evernorth ABA coverage in Georgia: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Georgia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Georgia families — the national clinical policy, prior authorization, the O.C.G.A. § 33-24-59.10 (Ava’s Law) mandate (ages, caps, exemptions), Georgia behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Georgia, a Cigna card means three layers at once: the carrier\'s national clinical policy, Georgia\'s autism insurance mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'O.C.G.A. § 33-24-59.10 (Ava’s Law)' },
      { label: 'Mandate age', value: 'Age 20 and under (mandate); parity may extend in practice' },
      { label: 'Mandate caps', value: '$35,000/yr nominal ABA cap; no visit limits allowed' },
      { label: 'Exempt from mandate', value: '≤10-employee groups; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed Behavior Analyst (GA Behavior Analyst Licensing Board)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Georgia',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Georgia is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Georgia.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Georgia mandate: what it guarantees (and doesn\'t)',
        body: [
          'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. The statute exempts employers with 10 or fewer employees, and insurers can seek a one-year opt-out if an actuary certifies the mandate raises average premiums more than 1%. Self-funded ERISA plans are exempt by federal preemption. Federal mental-health parity (MHPAEA) generally makes the dollar and age caps hard to enforce against covered large-group plans — a payer applying the $35K cap to a large-group member is a red flag to escalate, not accept.',
        ],
        cites: [
      { title: 'Georgia Code § 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' },
      { title: 'Autism Speaks — Georgia state-regulated coverage', url: 'https://www.autismspeaks.org/georgia-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No Georgia-specific Cigna policy exists',
        body: [
          'We checked: Cigna / Evernorth publishes no Georgia-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Georgia-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Georgia',
        body: [
          'Georgia now licenses behavior analysts: HB 412 (2022) created the Georgia Behavior Analyst Licensing Board under the Secretary of State, with licensure built on BCBA certification. Confirm your supervising analysts hold the Georgia license when credentialing with any commercial plan. On rates: Cigna does not publish commercial ABA fee schedules for Georgia (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Georgia Association for Behavior Analysis — licensure (HB 412)', url: 'https://www.georgia-aba.org/licensure' },
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
      { title: 'Georgia Code § 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' },
      { title: 'Autism Speaks — Georgia state-regulated coverage', url: 'https://www.autismspeaks.org/georgia-state-regulated-insurance-coverage' },
      { title: 'Georgia Association for Behavior Analysis — licensure (HB 412)', url: 'https://www.georgia-aba.org/licensure' },
    ],
    faq: [
      { q: 'Does Cigna cover ABA therapy in Georgia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Georgia\'s mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Georgia autism mandate require?', a: 'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Georgia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Georgia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-georgia': {
    slug: 'unitedhealthcare-georgia',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the O.C.G.A. § 33-24-59.10 (Ava’s Law) mandate layer.',
    assessmentPA: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
    treatmentPA: 'Required — step 2 (treatment auth); reviews every 4–6 months',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
    payer: 'UnitedHealthcare / Optum in Georgia',
    state: 'GA', kind: 'commercial',
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
        value:
          'No signature rule is published, but the documentation burden is explicit where money turns on it: services billed on the same date must be \u201cseparate, distinct, and clearly documented in the progress notes,\u201d and if documentation does not clearly separate them the claim may be denied. Who signs, and within what window, is not stated.',
        status: 'unverified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
        verifyVia:
          'The UnitedHealthcare/Optum provider manual and your participation agreement\u2019s documentation clause.',
      },
      placeOfService: {
        value:
          'Not addressed in the commercial ABA reimbursement policy \u2014 it sets codes, modifiers, units and concurrency but no place-of-service rule.',
        status: 'unverified',
        verifyVia:
          'UnitedHealthcare/Optum provider services and the member\u2019s benefit document; Optum\u2019s published ABA State Mandates document carries no Georgia entry, so nothing state-specific applies on top.',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\u2019s level), HN = BCaBA (bachelor\u2019s level), HO = BCBA or master\u2019s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: \u201cBilling multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial.\u201d Indirect work has no code of its own \u2014 it is bundled into the direct-service code.',
        status: 'verified',
        cites: [{ title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    pill: 'Payer Guide · UnitedHealthcare · Georgia',
    h1: 'UnitedHealthcare / Optum ABA coverage in Georgia: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Georgia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Georgia families — the national clinical policy, prior authorization, the O.C.G.A. § 33-24-59.10 (Ava’s Law) mandate (ages, caps, exemptions), Georgia behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Georgia, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Georgia\'s autism insurance mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'O.C.G.A. § 33-24-59.10 (Ava’s Law)' },
      { label: 'Mandate age', value: 'Age 20 and under (mandate); parity may extend in practice' },
      { label: 'Mandate caps', value: '$35,000/yr nominal ABA cap; no visit limits allowed' },
      { label: 'Exempt from mandate', value: '≤10-employee groups; self-funded ERISA plans' },
      { label: 'Licensure', value: 'Licensed Behavior Analyst (GA Behavior Analyst Licensing Board)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Georgia',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Georgia is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Georgia.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Georgia mandate: what it guarantees (and doesn\'t)',
        body: [
          'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. The statute exempts employers with 10 or fewer employees, and insurers can seek a one-year opt-out if an actuary certifies the mandate raises average premiums more than 1%. Self-funded ERISA plans are exempt by federal preemption. Federal mental-health parity (MHPAEA) generally makes the dollar and age caps hard to enforce against covered large-group plans — a payer applying the $35K cap to a large-group member is a red flag to escalate, not accept.',
        ],
        cites: [
      { title: 'Georgia Code § 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' },
      { title: 'Autism Speaks — Georgia state-regulated coverage', url: 'https://www.autismspeaks.org/georgia-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No Georgia-specific UnitedHealthcare policy exists',
        body: [
          'We checked: UnitedHealthcare / Optum publishes no Georgia-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Georgia-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Georgia',
        body: [
          'Georgia now licenses behavior analysts: HB 412 (2022) created the Georgia Behavior Analyst Licensing Board under the Secretary of State, with licensure built on BCBA certification. Confirm your supervising analysts hold the Georgia license when credentialing with any commercial plan. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Georgia (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Georgia Association for Behavior Analysis — licensure (HB 412)', url: 'https://www.georgia-aba.org/licensure' },
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
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Georgia Code § 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' },
      { title: 'Autism Speaks — Georgia state-regulated coverage', url: 'https://www.autismspeaks.org/georgia-state-regulated-insurance-coverage' },
      { title: 'Georgia Association for Behavior Analysis — licensure (HB 412)', url: 'https://www.georgia-aba.org/licensure' },
      { title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Georgia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Georgia\'s mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Georgia autism mandate require?', a: 'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Georgia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Georgia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },
};

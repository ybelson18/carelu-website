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
    intakeGates: {
      ageLimit: {
        value:
          'Under 21. The posted ASD manual states it plainly under General Eligibility: “Autism Spectrum Services are for individuals under the age of 21.” The current DCH Telehealth Guidance (version date 10/1/2025) confirms the same footing from a document that is not stale — ASD assessment and treatment are “provided to Medicaid beneficiaries in accordance with the Early and Periodic Screening, Diagnostic and Treatment (EPSDT) Benefit and according to medical necessity.” Two further eligibility conditions sit alongside the age bound: “children must be able to participate in sessions,” and caregivers “must be able to participate in ABS therapy and have the ability to implement ABS techniques in the home environment.”',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }, { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }],
      },
      dxRecency: {
        value:
          'The posted manual sets one recency rule, and it is about the assessment rather than the diagnosis: “Medicaid will accept for submission the findings from an assessment that was not approved/covered by Medicaid… as long as the assessment was conducted/dated no more than six (6) months prior to the treatment PA request submission.” On the diagnosis itself the manual says only that it “should be made and confirmed in early childhood.” The five-year evaluation window Georgia families actually meet is a CMO operationalisation, not a posted state rule — CareSource requires a diagnostic re-evaluation when “the initial diagnosis is at least 5 years old with no evidence of ongoing assessment and treatment,” and Peach State requires the CDE to have been “completed within the last five years” at treatment initiation. Sourcing caveat: the ASD manual publicly posted on medicaid.georgia.gov is the January 2018 version and is known to be stale — its Appendix A still prices the retired 0359T–0374T code set — while the current quarterly manuals and live fee schedule sit inside GAMMIS (mmis.georgia.gov), which refuses automated clients outright.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }, { title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
        verifyVia:
          'The current ASD manual inside GAMMIS (mmis.georgia.gov) for whether DCH has since adopted the five-year window itself; in the meantime route by the member’s CMO policy.',
      },
      diagnosingProviders: {
        value:
          'Two requirements stack. Credential: “a documented diagnosis of ASD must be established by a licensed physician or psychologist, or other licensed professional as designated by the Medical Composite Board in order to perform a behavioral assessment and develop a resulting Plan of Care.” Experience: “the diagnosis must be made by a practitioner with one year of experience in serving individuals with an autism diagnosis who is also enabled by the OCGA practice acts to diagnose behavioral health/intellectual/developmental conditions” — a one-year ASD-experience test on the diagnostician that intake should actually check, not assume. The enrolled QHCP then re-validates at assessment: “based on the assessment, the QHCP validates the individual’s diagnosis of ASD and identifies the severity level… according to the DSM-5 manual,” and if the diagnosis is not validated the QHCP refers the member elsewhere. Sourcing caveat: the ASD manual publicly posted on medicaid.georgia.gov is the January 2018 version and is known to be stale — its Appendix A still prices the retired 0359T–0374T code set — while the current quarterly manuals and live fee schedule sit inside GAMMIS (mmis.georgia.gov), which refuses automated clients outright.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      diagnosticTools: {
        value:
          'The posted manual asks for one tool, not two: “diagnosis should be made and confirmed in early childhood using one of the following tools: Autism Diagnostic Observation Schedule (ADOS), Autism Diagnostic Interview (ADI), the Diagnostic Interview for Social, Communication Disorders (DISCO), and/or other known evidence based tools.” For the behavioral assessment it adds that “the QHCP must use valid and reliable evaluation tools that conform to industry standards (such as the ADOS).” Three conditions must be ruled out as causal: primary hearing deficits, primary speech disorder, and heavy metal poisoning. Treat the one-tool floor as a floor only — the two-instrument requirement families actually face (one clinician-administered tool plus one caregiver tool) comes from the CMOs, and school psychoeducational assessments are not acceptable as a diagnostic evaluation on any of them. Sourcing caveat: the ASD manual publicly posted on medicaid.georgia.gov is the January 2018 version and is known to be stale — its Appendix A still prices the retired 0359T–0374T code set — while the current quarterly manuals and live fee schedule sit inside GAMMIS (mmis.georgia.gov), which refuses automated clients outright.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }, { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
        verifyVia:
          'The current ASD manual inside GAMMIS for the live instrument list; Peach State GA.CP.BH.504 and CareSource MCD-MM-0212 publish the operative two-tool requirement openly.',
      },
      referral: {
        value:
          'Two separate gates, and only one of them is what intake usually means by “referral.” Clinically, ASD services “must be recommended by a licensed physician or other licensed practitioner of the healing arts acting within their scope of practice under state law” per 42 CFR 440.130(c), and “all ABS PAs must be requested by the enrolled QHCP” — a licensed physician, psychologist, BCBA-D or BCBA; BCaBAs and RBTs cannot serve as the QHCP. Administratively, the ordering, prescribing or referring practitioner’s NPI must appear on the claim — on the CMS-1500 “enter qualifiers to indicate if the claim has an ordering, referring, or prescribing provider to the left of the dotted line in box 17 (Ordering = DK; Referring = DN or Supervising = DQ)” — and that practitioner must be enrolled in Georgia Medicaid, or the claim denies. The treatment PA package also carries the IFSP/IEP where applicable.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      telehealth: {
        value:
          'Georgia publishes a real telehealth benefit for ABS, and the best current source for it is not the ASD manual — it is the DCH Part II Telehealth Guidance (version date 10/1/2025), which carries its own ASD section. “Practitioners of ASD services can use telehealth to assess, diagnose and provide therapies to patients,” provided they hold a current Georgia medical or psychology licence or a valid ABA certification; Georgia Medicaid enrols BCBAs as QHCPs for this purpose. The guidance publishes a current Category I code table for telehealth ABS — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, each in 15-minute units with the GT modifier and the U1–U5 practitioner-level modifier (U1 physician/psychiatrist, U2 psychologist or BCBA-D, U3 BCBA, U4 BCaBA or master’s-level behavior analyst, U5 RBT). On the claim, “the GT modifier is required as applicable, and/or the use of either POS 02 or POS 10,” where POS 02 is telehealth outside the patient’s home and POS 10 is telehealth in the patient’s home; CPT modifier 93 may be appended for audio-only services where appropriate. Prior authorization applies to telehealth ABS exactly as it does in person. Worth noting for the code-set question generally: this DCH document carries the Category I 97151–97158 set, while the posted January 2018 ASD manual still prices 0359T–0374T.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }],
        verifyVia:
          'Whether Georgia still limits telehealth billing to a rendering provider located in Georgia or within 50 miles of the state line — CareSource MCD-MM-0212 states that rule and attributes it to this guidance, but the 10/1/2025 version does not contain it. Confirm in GAMMIS (mmis.georgia.gov) or with DCH before relying on either reading.',
      },
    },
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
      { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' },
      { title: 'Georgia Medicaid \u2014 Georgia Families Latest News (updated 4/23/2026)', url: 'https://medicaid.georgia.gov/programs/all-programs/georgia-families/georgia-families-latest-news' },
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
    intakeGates: {
      ageLimit: {
        value:
          'Anthem’s commercial ABA provider resource guide publishes no age criterion — it covers credentialing, coding, place of service, documentation and telehealth, not eligibility age. The age term that bites in Georgia comes from Ava’s Law, which requires state-regulated individual and group plans to cover ASD treatment for individuals 20 years of age or under. Two carve-outs and one federal override matter: employers with 10 or fewer employees are exempt, self-funded ERISA plans are preempted, and federal mental-health parity generally makes the mandate’s age and dollar caps hard to enforce against covered large-group plans — so an age-based decline on a large-group member is an escalation, not an answer.',
        status: 'plan-dependent',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }, { title: 'Ava\'s Law \u2014 O.C.G.A. \u00a7 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' }],
        verifyVia:
          'Plan funding type and employer size first, then a live benefits verification; clinical guideline CG-BEH-02 in the Anthem provider portal for any age criterion the guideline itself carries.',
      },
      dxRecency: {
        value:
          'Anthem’s ABA provider resource guide sets a treatment-plan clock rather than a diagnosis clock: “documentation must show that the treatment plan was reviewed and/or updated at a minimum of every six months. Providers should review their guidelines if treatment plans are required more frequently.” It publishes no recency window on the ASD diagnostic evaluation itself, and no re-diagnosis interval.',
        status: 'unverified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        verifyVia:
          'Anthem clinical guideline CG-BEH-02 in the Anthem provider portal, and Anthem provider services — the public resource guide does not carry the medical-necessity criteria text.',
      },
      diagnosingProviders: {
        value:
          'The ABA provider resource guide lists who may RENDER ABA, not who may diagnose: “approved service providers include psychiatrists (MDs), psychologists (PhDs), licensed clinical social workers (LPCs), licensed marriage and family therapists (LMFTs) with special training and/or experience in applied behavior analysis, Board Certified Behavior Analysts (BCBA/BCBA-D), providers practicing under the direction and supervision of the BCBA, and other mental health service providers licensed or authorized by the state in which they practice and recognized by the Anthem affiliated health plan to be eligible for reimbursement.” The diagnosing-provider requirement lives in clinical guideline CG-BEH-02 rather than in this document. Georgia adds a licensure layer either way: HB 412 (2022) created O.C.G.A. Title 43, Chapter 7A, so the supervising analyst must hold a Georgia Behavior Analyst Licensing Board licence.',
        status: 'unverified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        verifyVia:
          'Anthem clinical guideline CG-BEH-02 in the Anthem provider portal for the credentials Anthem requires of the diagnosing professional.',
      },
      diagnosticTools: {
        value:
          'Anthem names no required instrument. Its resource guide defines applied behavior analysis as including “a detailed behavioral history, patient observation, administration of standardized and nonstandardized tests and structured guardian/caregiver interview to identify and describe deficient adaptive or maladaptive behaviors,” and behavioral follow-up assessments as using “structured observation and/or standardized and nonstandardized tests to determine levels of adaptive behavior” across cooperation, motivation, visual understanding, receptive and expressive language, imitation, requests, labeling, play and leisure, and social interactions. Which instruments satisfy that is not published.',
        status: 'unverified',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        verifyVia:
          'Anthem clinical guideline CG-BEH-02 for any required or preferred instrument list, and Anthem provider services.',
      },
      referral: {
        value:
          'No referral precondition is published for ABA. The resource guide treats “physician orders” and “referrals” as elements that must be present in the medical record when they exist, not as an entry gate, and Anthem gates ABA through prior authorization instead — assessment and treatment reviewed against CG-BEH-02, with the initial behavior-identification assessment capped at 20 combined hours. Whether the member’s specific plan requires a PCP referral is a benefit-design question.',
        status: 'plan-dependent',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }, { title: 'Ava\'s Law \u2014 O.C.G.A. \u00a7 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' }],
        verifyVia:
          'The member’s benefit document and Anthem provider services — ask whether a PCP referral is required in addition to the prior authorization.',
      },
      telehealth: {
        value:
          'Anthem publishes the place-of-service half outright but makes the code list plan- and state-specific. Telehealth POS codes for ABA are “10 = Telehealth (member located in home while receiving services)” and “02 = Telehealth (member located outside of home while receiving services),” all “subject to member’s coverage and reviews by the plan.” For which codes actually pay, the guide redirects: “please visit our Virtual Visits reimbursement policy that outlines our standard rules. Allowed codes may vary. Refer to the Allowed virtual services in addition to CPT Appendix P to obtain codes that are eligible for reimbursement in your state.” So the POS mechanics are settled and the payable code set is not.',
        status: 'plan-dependent',
        cites: [{ title: 'Anthem BCBS \u2014 ABA Provider Resource Guide (Commercial; incl. Georgia)', url: 'https://files.providernews.anthem.com/5585/MULTI-BCBS-CM-072378-24-CPN72366-EXPRESS-ABA-prov-resource-gd-FINAL-V3.pdf' }],
        verifyVia:
          'Anthem’s Virtual Visits reimbursement policy and the Georgia “Allowed virtual services” list, plus the member’s benefit document, before scheduling remote ABA.',
      },
    },
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
    intakeGates: {
      ageLimit: {
        value:
          'Under 21, with a participation condition attached: “member is under the age of 21 and must be able to participate in sessions.” CareSource adds that parents and caregivers “must be able to participate in ABA therapy and have the ability to implement ABA techniques in the home environment. If unwilling or unable, consideration will be given to other modalities of treatment” — so caregiver availability is an eligibility question at intake, not just a clinical preference.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      dxRecency: {
        value:
          'No fixed expiry, but three named triggers force a diagnostic re-evaluation reconfirming the diagnosis — “the diagnosis of ASD is provisional,” “no formal neuropsychological evaluation was completed,” or “the initial diagnosis is at least 5 years old with no evidence of ongoing assessment and treatment” — and that re-evaluation “must include, at a minimum, 1 clinician observational assessment (school psychoeducation assessments are not acceptable).” On the assessment side the clock is tight: the behavioral assessment PA “may be requested in 3-month increments and completed one time during the 6-month treatment authorization period no more than 2 months prior to the effective date of the next treatment authorization,” with comprehensive assessments generally not to exceed 8 hours every 6 months unless additional justification is provided. Evaluations must be “completed prior to requesting prior authorizations for behavioral assessment or treatment services.”',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
      },
      diagnosingProviders: {
        value:
          'The DCH credential list, restated: documentation must be established by “a licensed physician or psychologist” or “other licensed professional as designated by Medical Composite Board.” CareSource adds a report-level identity requirement — the initial evaluation results must carry the “evaluator’s name, signature, and credentials” — and a shape requirement: evaluations “should be comprehensive with multiple informants, covering multiple domains.” Primary hearing deficits, speech disorder and heavy metal poisoning “must be ruled out as causal reasons for behavior.”',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      diagnosticTools: {
        value:
          'Two tools, one from each side: “completion of 1 acceptable evidence-based tool and 1 caregiver tool (a list can be located in the Georgia Autism Spectrum Disorder Services Policies and Procedures Manual).” The evaluation report must be submitted in report format “with a summary of each individual evaluation instrument, developmental history, and present concerns,” and must include the date completed, a “minimum of 2 assessment tools, including 1 clinician tool and 1 caregiver tool with a summary of each individual assessment,” any tests administered with scores, and the evaluator’s name, signature and credentials. A diagnostic re-evaluation needs at minimum one clinician observational assessment; school psychoeducational assessments are not acceptable.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }],
      },
      referral: {
        value:
          'The state structure, administered in-house. “PA must be requested by the enrolled QHCP,” and the behavioral assessment “is conducted by an independent practitioner who also develops” the plan — with prior authorization required separately for the behavioral assessment and for treatment. The clinical recommendation requirement underneath is the Georgia Medicaid one: ASD services must be recommended by a licensed physician or other licensed practitioner of the healing arts acting within their scope of practice under state law, per 42 CFR 440.130(c), and the ordering/prescribing/referring practitioner’s NPI must be on the claim and enrolled in Georgia Medicaid. CareSource reviews against the DCH ASD manual plus MCG criteria and requires signed treatment documentation before claims submission.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      telehealth: {
        value:
          'Allowed, with the state’s billing rules and a provider-judgement duty on top. “The provision of ABA services is allowed via telehealth per GA DCH. Part II Policies and Procedures for Autism Spectrum Disorder Services publishes applicable codes, modifiers and allowable provider types. Additionally, Part II Policies and Procedures for Telehealth Guidance provides information for telehealth billing requirements, which is only billable if the provider is in GA or within 50 miles of the GA border when services are rendered.” CareSource then puts the modality decision on the clinician: decisions must be “consistent with best, currently available evidence and clinical consensus,” weighing assessed needs, strengths, preferences and available resources, with the same professional ethics as in-person care and explicit attention to interstate licensure, state regulatory issues, caregiver discomfort with technology, technology limits and cultural acceptance; providers must have protocols for clinical appropriateness and confirm their own competence in the modality.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' }, { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }],
        verifyVia:
          'The 50-mile rule specifically: CareSource attributes it to the DCH Telehealth Guidance, but the version dated 10/1/2025 does not contain it. Confirm with CareSource GA provider services, or against the current guidance inside GAMMIS, before relying on a border-adjacent rendering location.',
      },
    },
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
      { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' },
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
    intakeGates: {
      ageLimit: {
        value:
          'Under 21 — GA.CP.BH.504 makes it the first medical-necessity criterion: “member/enrollee is under the age of 21 years.” Two participation conditions sit alongside it: the member must exhibit behaviors presenting “clinically significant health or safety risk to self or others” or “significantly interfering with basic self-care, communication, or social skills,” and “member/enrollee and caregivers can participate in adaptive behavioral services (ABS) and can implement ABS techniques in the home environment as instructed by the behavior analyst.”',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      dxRecency: {
        value:
          'Five years, stated outright — and the only Georgia plan that writes the renewal trigger as cleanly. At treatment initiation, “the CDE has been completed within the last five years.” For treatment continuation, a “diagnostic re-evaluation to re-confirm diagnosis” is required when any of the following apply: “provisional diagnosis of ASD”; “no formal psychological or neuropsychological evaluation was completed”; or “more than five years have passed since the initial diagnosis and there is no evidence of ongoing assessment and treatment.” Separately, the behavioral assessment or reassessment “must be completed at least every six months or no more than 2 months prior to the start of the initial treatment” authorization, and reauthorization needs “results of a recent behavior assessment (within two months).”',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      diagnosingProviders: {
        value:
          'A licensed clinician, with the evaluation signed and attributable: the member must have “a documented diagnosis of autism spectrum disorder (ASD) established by a licensed physician, psychologist, or other qualified licensed professional,” and the CDE report must document the “evaluator’s name, legible signature, and credentials” alongside each test administered “with scores and date originally completed.” The hard exclusion intake should screen for first: “school psychoeducational assessments are not acceptable for a diagnostic evaluation.” The CDE must also document direct observation and a parent/caregiver interview, and physical health concerns — medical concerns, speech deficits, hearing deficits, heavy metal poisoning — must have been “evaluated and ruled out as causal reasons for behavior.”',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      diagnosticTools: {
        value:
          'A minimum of two, one from each named list — the most explicit instrument requirement published by any Georgia payer. “A minimum of two assessment tools (one primary clinician tool and one caregiver tool).” Primary clinician tool, one of: ADOS-2; GARS-3; CARS2 ST/HF; STAT; Communication and Symbolic Behavior Scales (CSBS); TELE-ASD-PEDS; Naturalistic Observational Diagnostic Assessment (NODA); DISCO; RITA-T; Autism Detection in Early Childhood (ADEC); EarliPoint; Canvas DX. Caregiver tool, one of: ADI-R; DISCO; CARS Parent Questionnaire (CARS QPC); GARS-3; Social Communication Questionnaire (SCQ); M-CHAT; SRS-2; Autism Spectrum Rating Scale (ASRS); Autism Behavior Checklist (ABC); Toddler Autism Symptom Inventory (TASI); BASC; PDD-BI; PEDS:DM; ASQ-3; ASQ:SE2; Conners Behavior Rating Scale (CBRS); Child Development Inventory (CDI); CSBS DP Infant-Toddler Checklist. Each requires a summary of the individual assessment, the score and the original completion date.',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
      },
      referral: {
        value:
          'A physician recommendation, and it is a listed medical-necessity criterion rather than paperwork: “requested services have been recommended by a licensed physician or other qualified licensed practitioner of the healing arts acting within their scope of practice under state law” — the 42 CFR 440.130(c) formula. Assessment and treatment are authorized separately: “requests for behavioral assessments and treatment services are completed separately and authorized independently.” The treatment PA package adds the Letter of Medical Necessity and the Medicaid Cover Page, and the Georgia rule that the PA be requested by the enrolled QHCP and that the ordering/referring practitioner’s NPI appear on the claim applies underneath.',
        status: 'verified',
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      telehealth: {
        value:
          'GA.CP.BH.504 acknowledges telehealth as a modality — services “may be provided in various settings (e.g., home, clinic, school, community) and modalities (e.g., in-person, telehealth)” — but publishes no rule of its own: no code list, no modifier, no place-of-service guidance and no limit. The operative floor is the DCH Part II Telehealth Guidance (version date 10/1/2025), which does carry an ASD section: ABS codes 97151–97158, 0362T and 0373T are billable by telehealth in 15-minute units with the GT modifier and the U1–U5 practitioner-level modifier, on POS 02 (member outside the home) or POS 10 (member at home), with prior authorization unchanged.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
        verifyVia:
          'Peach State / Centene provider services for any plan-level telehealth restriction on ABS, since GA.CP.BH.504 is silent where its other criteria are explicit.',
      },
    },
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
      { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' },
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
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Georgia Medicaid rule: Adaptive Behavior Services are an EPSDT benefit and “Autism Spectrum Services are for individuals under the age of 21.” Amerigroup’s UM Guideline CG-BEH-02 publishes no age criterion of its own — it is a medical-necessity guideline keyed to whether “a state mandate requires or a benefit plan explicitly provides coverage for ABT,” not an eligibility document.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Note the vintage: the posted CG-BEH-02 is dated June 2018 (GAPEC-2437-18) and Amerigroup GA is operating under a DCH contract extension through 6/30/2027 — confirm the current guideline on the Amerigroup/Wellpoint provider portal.',
      },
      dxRecency: {
        value:
          'Not published. CG-BEH-02 requires a diagnosis of ASD and measurable goals “based on standardized assessments,” with “baseline measurements, progress to date and anticipated timeline for achievement based on both the initial assessment and subsequent interim assessments over the duration of the intervention” — but it names no recency window on the diagnostic evaluation and no re-diagnosis trigger. The Georgia floor is the DCH rule that an outside assessment is accepted for a treatment PA only if “conducted/dated no more than six (6) months prior to the treatment PA request submission.”',
        status: 'unverified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
        verifyVia:
          'Amerigroup/Wellpoint Georgia provider services for the current guideline; the CMOs that do publish a window (CareSource MCD-MM-0212 and Peach State GA.CP.BH.504) both use five years from the initial diagnosis as the re-evaluation trigger.',
      },
      diagnosingProviders: {
        value:
          'Scope-of-practice based and deliberately broad: “a diagnosis of ASD has been made by a licensed medical professional or other qualified health care professional as is consistent with state licensing requirements.” The guideline separately requires documentation “that ABT services will be delivered by an appropriate provider who is licensed or certified according to applicable state laws and benefit plan requirements.” The Georgia floor is narrower and governs for Medicaid members: the diagnosis must be established by a licensed physician or psychologist, or another licensed professional designated by the Medical Composite Board, and made by a practitioner with one year of experience serving individuals with an autism diagnosis.',
        status: 'verified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }],
      },
      diagnosticTools: {
        value:
          'CG-BEH-02 names no instrument. It requires that “assessments of motor, language, social, and adaptive functions have been completed” and that treatment-plan goals be “in objective and measurable terms based on standardized assessments,” and defines assessment instruments generically as “specialized and standardized diagnostic test used to evaluate an individual’s performance.” Which instruments qualify is left open.',
        status: 'unverified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Amerigroup/Wellpoint Georgia provider services and the current GA DCH ASD manual inside GAMMIS; Peach State GA.CP.BH.504 publishes the operative Georgia two-tool list (one primary clinician tool plus one caregiver tool) openly.',
      },
      referral: {
        value:
          'CG-BEH-02 is a medical-necessity guideline and states no referral gate, so the Georgia Medicaid structure governs: ASD services must be recommended by a licensed physician or other licensed practitioner of the healing arts acting within their scope of practice under state law per 42 CFR 440.130(c); all ABS prior authorizations must be requested by the enrolled QHCP (a licensed physician, psychologist, BCBA-D or BCBA — never a BCaBA or RBT); and the ordering, prescribing or referring practitioner’s NPI must appear on the CMS-1500 in box 17 with the DK, DN or DQ qualifier and be enrolled in Georgia Medicaid, or the claim denies. Assessment and treatment are authorized separately in six-month increments.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH \u2014 Part II ASD Policy Manual', url: 'https://medicaid.georgia.gov/document/publication/asd-policy-manual/download' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
      },
      telehealth: {
        value:
          'CG-BEH-02 contains no telehealth provision, so the Georgia Medicaid floor governs: under the DCH Part II Telehealth Guidance (version date 10/1/2025), “practitioners of ASD services can use telehealth to assess, diagnose and provide therapies to patients,” and the guidance publishes the billable ABS telehealth codes — 97151–97158, 0362T and 0373T in 15-minute units with the GT modifier plus the U1–U5 practitioner-level modifier, on POS 02 (member outside the home) or POS 10 (member at home). Prior authorization applies to telehealth ABS exactly as in person.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Amerigroup/Wellpoint Georgia provider services for any plan-level restriction the posted 2018 guideline would not show.',
      },
    },
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
      { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' },
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
    intakeGates: {
      ageLimit: {
        value:
          'Aetna publishes none. The ABA Medical Necessity Guide gives a “typical age range” of 0–7 years for comprehensive ABA and “all ages” for focused ABA — planning guidance, not a benefit boundary — and CPB 0554/0648 set no age criterion. The age term in Georgia comes from Ava’s Law, which reaches individuals 20 years of age or under on state-regulated plans, with employers of 10 or fewer employees exempt and self-funded ERISA plans preempted. Federal parity generally makes that age cap hard to enforce against covered large-group plans, so treat an age-based decline on a large-group member as an escalation rather than an answer.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Georgia Code \u00a7 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' }],
        verifyVia:
          'Plan funding type and employer size, then a live benefits verification — the mandate, not the carrier policy, is what carries the age term.',
      },
      dxRecency: {
        value:
          'Aetna sets no expiry on the ASD diagnosis itself, but it puts a 12-month clock on the functional evidence: “there is demonstration of functional impairment on a standardized scale of functioning in the past 12 months… the impairment must be at least one standard deviation below the population mean OR represent a significant risk of harm to self or others.” That is the recency rule intake must schedule around — a current standardized functional score, not a fresh diagnostic report. Reauthorization commonly runs on a roughly six-month cadence.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Broad and scope-tied: the ASD diagnosis must be “obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).” CPB 0648 names who Aetna expects to be involved in an ASD evaluation — “board certified behavioral analyst; developmental pediatrician; neurologist; occupational therapist; physical therapist; primary care provider; psychiatrist; psychologist; or speech-language pathologist and audiologist” — evaluated by “the appropriate certified/licensed health care professional.” The diagnosis must be DSM-5 ASD (ICD-10 F84.0, F84.3–F84.9); ABA for other indications is considered experimental, investigational or unproven. Georgia adds a licensure layer on the treating side: since HB 412 (2022), behavior analysts must hold a Georgia Behavior Analyst Licensing Board licence.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      diagnosticTools: {
        value:
          'Two layers, and intake needs both. For the diagnosis, CPB 0648 names the instruments Aetna expects alongside clinical assessment: “Autism Diagnostic Interview-Revised (ADI-R), Autism Diagnostic Observation Schedule-2nd edition (ADOS-2), Childhood Autism Rating Scale 2nd edition (CARS-2) and Asperger Syndrome Diagnostic Scale.” For medical necessity, the ABA Medical Necessity Guide requires a standardized scale of functioning administered in the past 12 months — “for instance, the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS” — scoring at least one standard deviation below the population mean, or documenting a significant risk of harm to self or others.',
        status: 'verified',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      referral: {
        value:
          'Aetna gates ABA with precertification rather than a referral: form GR-69017-4, via Availity or phone, for both the assessment and treatment. Neither CPB 0554, CPB 0648 nor the ABA Medical Necessity Guide publishes a referral or physician-order requirement — the Guide mentions “involvement of, or referrals to, appropriate health care, community or supplemental resources” as a quality element, not an entry condition. Whether the member’s plan requires a PCP referral is a benefit-design question.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'The member’s benefit document and Aetna precertification at the number on the ID card — ask whether a PCP referral is required in addition to precertification.',
      },
      telehealth: {
        value:
          'Not published. Aetna’s ABA materials — CPB 0554, CPB 0648 and the ABA Medical Necessity Guide — say nothing about telehealth delivery of ABA: no code list, no place-of-service codes, no modifiers and no limits.',
        status: 'unverified',
        verifyVia:
          'Aetna’s telemedicine policy and provider services at the number on the member’s ID card — confirm which ABA codes pay by telehealth on that specific Georgia plan before scheduling remote sessions.',
      },
    },
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
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 publishes no age limit — coverage turns on a confirmed DSM-5-TR ASD diagnosis and medical necessity, not on age. The age term in Georgia comes from Ava’s Law, which reaches individuals 20 years of age or under on state-regulated plans, with employers of 10 or fewer employees exempt and self-funded ERISA plans preempted; federal parity generally makes that cap hard to enforce against covered large-group plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Georgia Code \u00a7 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' }],
        verifyVia:
          'Plan funding type and employer size, then a live benefits verification — EN0499 itself will not answer an age question.',
      },
      dxRecency: {
        value:
          'EN0499 sets no maximum age on the diagnosis, but it requires the date to be on the record and puts the currency burden on the instruments. Required with the diagnosis: “the name, credentials, and type of licensure of the individual who made the diagnosis” and “the date on which the diagnosis was most recently made.” For the assessment instrument, “the instrument used represents the most current version, and does not represent obsolete editions of the assessment (e.g., must be the Vineland-3 vs. Vineland-II)” and it must assess “the individual’s specific and current abilities and skills,” with the date of administration and the respondent named. A diagnosis termed “provisional,” “proposed,” “potential,” “at risk of” or “rule out” is not a confirmed diagnosis.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Scope-of-practice based, and strict about what does not count. The individual must have “a confirmed diagnosis of autism spectrum disorder (ASD) (ICD-10-CM Diagnosis Codes F84.0 – F84.9, with the exception of F84.2, Rett syndrome) based on the criteria in the… DSM-5-TR by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice.” Two disqualifiers intake should screen for: “educational identification or meeting educational eligibility for services related to autism through the [Individuals] with Disabilities Education Act may not meet criteria as a formal diagnosis of ASD,” and a provisional or rule-out diagnosis is not confirmed. The ABA assessment itself must be performed by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health clinician with documented training in ABA — and in Georgia that analyst must also hold a Georgia Behavior Analyst Licensing Board licence under HB 412.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'EN0499 names no required instrument list — it sets instrument criteria instead, which is a harder bar to meet by accident. The assessment must include “administration of a reliable, valid, and standardized assessment instrument that measures the individual’s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR… social communication and social interaction; and restricted, repetitive patterns of behavior, interests, or activities,” and the instrument “must be completed in its entirety and as designed,” have established reliability and validity “for use with members of the population tested (e.g., age, language preference),” be administered and interpreted by someone trained to do so, be the most current version, assess current abilities, and carry the date of administration, the respondent’s name and the form type.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No referral requirement is published, and Cigna’s front door is unusually open: assessment codes 97151, 97152 and 0362T need no prior authorization under EN0499, so the assessment can start on the diagnosis alone. The rigour arrives at the treatment step, which requires the completed assessment plus a treatment plan submitted with Cigna’s ABA prior-authorization form. Whether a specific plan layers a PCP referral on top is a benefit-design question.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'A live benefits verification and Evernorth Provider Services at 800.926.2273 — confirm whether the plan requires a referral in addition to the treatment PA.',
      },
      telehealth: {
        value:
          'Open, and stated at both the policy and the guide level. EN0499: “ABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities,” with the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements — and the line-of-sight/close-proximity documentation rule expressly “does not apply to telehealth services, when applicable.” The Evernorth autism resource guide is blunter: “all ABA CPT codes are covered telehealth services,” subject to EN0499. Services delivered via telehealth must still meet the direct treatment / direct engagement definition and be documented as such.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
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
    intakeGates: {
      ageLimit: {
        value:
          'Optum’s ABA Supplemental Clinical Criteria publish no age limit — coverage turns on a valid ASD diagnosis and medical necessity. The age term in Georgia comes from Ava’s Law (individuals 20 years of age or under on state-regulated plans, with ≤10-employee groups exempt and self-funded ERISA plans preempted), and there is no Georgia entry in Optum’s ABA State Mandates criteria to add anything on top. Federal parity generally makes the mandate’s age cap hard to enforce against covered large-group plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Georgia Code \u00a7 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' }],
        verifyVia:
          'Plan funding type and employer size, then a live benefits verification — the mandate, not the carrier criteria, is what carries the age term.',
      },
      dxRecency: {
        value:
          'Not published. The Supplemental Clinical Criteria require a valid DSM-5-TR ASD diagnosis confirmed with at least one clinically validated tool, but set no maximum age on that diagnosis and no re-diagnosis interval. What Optum does clock is the review cycle — continued-service reviews every 4–6 months, with an operational flag when utilization falls below 80% of authorized hours — and the documentation standard that assessment instruments be norm-referenced against age-matched peers and used to “assess developmental gains as a result of interventions,” which implies current rather than historical scores without naming a window.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services and Provider Express — ask whether an evaluation older than a given date triggers re-evaluation before an ABA authorization.',
      },
      diagnosingProviders: {
        value:
          'State-licensed and scope-qualified: “a valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR.” The diagnosing clinician — not the ABA provider — confirms and documents both the diagnosis and the severity level. On the treating side Optum requires a master’s- or doctoral-level BCBA, a credentialed licensed behavioral health clinician with attested ABA expertise, or a BCaBA or non-licensed individual under the direct supervision of one of those; in Georgia the analyst must additionally hold a Georgia Behavior Analyst Licensing Board licence under HB 412.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
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
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'A live benefits verification plus Provider Express — confirm whether the plan layers a referral requirement on top of the two-step authorization.',
      },
      telehealth: {
        value:
          'Not published as a coded benefit. The Supplemental Clinical Criteria treat telehealth as a best-practice reference rather than a rule — pointing providers to the “Practice Parameters for Telehealth-Implementation of Applied Behavior Analysis, Second Edition” for “designing, implementing, and operating ABA services delivered via telehealth in a broad range of clinical settings (e.g., home, clinic, school)” and noting that “the telehealth options presented are not intended to supplant in-person service; rather, they are intended to supplement the traditional in-person service delivery model.” No code list, place-of-service code or unit limit for telehealth appears in the criteria, and Optum’s commercial ABA reimbursement policy is silent on telehealth entirely. Optum publishes no Georgia entry in its ABA State Mandates document, so nothing state-specific applies on top.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum \u2014 Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum Behavioral Health provider services and the member’s benefit document — confirm which ABA codes pay by telehealth, and under which place-of-service code, before scheduling remote sessions.',
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
      { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Georgia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Georgia\'s mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Georgia autism mandate require?', a: 'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Georgia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Georgia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },
};

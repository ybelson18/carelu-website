import type { PayerConfig } from './types.js';

export const nationalPayers: Record<string, PayerConfig> = {
  'aetna': {
    slug: 'aetna',
    cardDesc: 'CPB 0554 \u2014 ASD-only coverage, precert form GR-69017-4, telehealth codes.',
    family: 'aetna',
    assessmentPA: {
      value: 'Required — precertification via Availity or the precert line; clinical detail on form GR-69017-4 (7-26, eff. 8/1/2026)',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
      status: 'unverified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
      verifyVia: 'Aetna documents still disagree on the code range and a human must settle which governs an ABA review: CPB 0554 (ABA, last review 10/14/2026) lists "ICD-10 codes covered if selection criteria are met: F84.0 - F84.9". CPB 0648 (Autism Spectrum Disorders, last review 10/20/2026) now lists only F84.0, F84.3, F84.5, F84.8 and F84.9, leaving out F84.2 (Rett syndrome), as does the Applied behavior analysis medical necessity guide (the guideline Aetna’s behavioral-health reviewers apply), which states "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9)" in both its quality-of-care elements and its medical-necessity criteria, which leaves out F84.2 (Rett syndrome). The ASD-only half of the claim is not in doubt; the range is.',
      blocker: 'document',
    },
    payer: 'Aetna',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Aetna',
    h1: 'Aetna ABA coverage: verification & prior-auth guide.',
    metaTitle: 'Does Aetna Cover ABA Therapy? Prior Auth & Intake Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA therapy: CPB 0554 policy, the precertification process and required information, provider qualifications, and telehealth rules — an intake-focused guide for ABA providers.',
    intro: [
      'Aetna covers ABA for autism spectrum disorder under its clinical policy CPB 0554 — and considers it experimental for everything else. Coverage is real but gated: precertification with specific required information, an ASD-only diagnosis scope, and plan-by-plan variation that makes benefit verification non-negotiable. Here\'s what intake needs to capture to get a family from "we have Aetna" to an authorized start.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD (F84.0–F84.9) only' },
      { label: 'Policy', value: 'CPB 0554 (ABA) + CPB 0648 (ASD)' },
      { label: 'Precert', value: 'Required — via Availity or phone; form GR-69017-4 (7-26, eff. 8/1/2026) carries the clinical detail (not for MD/MA)' },
      { label: 'Provider bar', value: 'BACB certification or state BA licensure' },
      { label: 'Telehealth', value: 'Covered for 97151, 97153, 97155, 97156, 97157' },
      { label: 'Reauth cadence', value: 'Progress evaluated every 6 months; standardized assessment within 12 months (repeat every 6–12)' },
    ],
    sections: [
      {
        h2: 'What Aetna requires for precertification',
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        body: [
          'The current revision of form GR-69017-4 is stamped 7-26 and states: "Effective August 1, 2026, this form replaces all other Applied Behavior Health Analysis (ABA) precertification information request documents and forms." The form does not start a request. You initiate on Availity (Authorization/Precertification Add, then a short questionnaire if asked) or by calling the Precertification Department, and attach the completed form to the case. The form says "Don\'t use this form for Maryland and Massachusetts." It also asks for results of a standardized assessment (e.g., Vineland, ABAS, VB-MAPP) completed within the past 12 months. The rest of what it asks for is what a good intake process should already have collected:',
        ],
        list: [
          { title: 'Diagnosis details', desc: 'DSM-5 diagnosis code(s), the diagnosing provider, and their credentials.' },
          { title: 'Requested hours by CPT code', desc: 'The proposed intensity, code by code — which means the assessment plan needs to exist before the request.' },
          { title: 'Supervising clinician', desc: 'Name and credential of the BCBA or licensed clinician overseeing the case.' },
          { title: 'Concurrent services', desc: 'PT/OT/speech and school services, plus how care is coordinated across them.' },
          { title: 'Rationale for changes', desc: 'Any increase or change in hours needs explicit clinical justification.' },
        ],
      },
      {
        h2: 'Provider qualifications',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
        body: [
          'Practitioners delivering ABA under Aetna policy need BACB national certification or state behavior-analyst licensure; unlicensed staff work under supervision per practice standards. The diagnosis itself must come from “an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).” CPB 0648 also references intensive-intervention research norms (25 hours/week, 12 months/year), useful context when justifying requested intensity.',
        ],
      },
      {
        h2: 'Telehealth',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }],
        body: [
          'On commercial plans Aetna\'s telemedicine payment policy lists 97151, 97153, 97155, 97156 and 97157 as telehealth-eligible (97152, 97154 and 97158 are checked for Medicare Advantage only), billed with GT/95/FR modifiers; the posted policy shows a last review of June 2021. The lesson for intake: telehealth rules can change and the posted policy is old; verify the current position on every benefits check rather than assuming last quarter\'s answer.',
        ],
      },
      {
        h2: 'The plan-variation trap',
        cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        body: [
          'CPB 0554 is Aetna\'s clinical policy — but self-funded employer plans can carve benefits differently, and state mandates layer on top. Two families with Aetna cards can have materially different ABA benefits. The only safe intake behavior is a live benefits verification on every family: ABA coverage confirmation, deductible status, visit or dollar limits, and the precert path for that specific plan.',
        ],
      },
      {
        h2: 'What does an Aetna ABA reauthorization need, and are graphs required?',
        cites: [
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        body: [
          'Aetna does not ask for graphs. Its precertification form GR-69017-4 (7-26) asks for numbers: “Include baseline, interim and current data for all goals,” plus “supporting data that demonstrates current severity level of each impairment.” A dated table or a graph with its values will both carry that data.',
          'How recent: the form wants “Results of a standardized assessment (i.e. Vineland, ABAS, VB-MAPP) completed within the past 12 months.” It adds: “Re‐evaluation of interventions and progress has been performed (every 6 months) to assess the need for ongoing ABA; AND a repeat validated assessment has been done every 6-12 months to demonstrate response to intervention.” The Medical Necessity Guide says “A member\'s progress is to be evaluated every six months.”',
          'What else goes in: a time-limited treatment plan with measured target behaviors, baselines and “quantifiable criteria for progress”; data showing the impairment justifies the hours requested; measurable caregiver goals; titration and discharge criteria with an aftercare plan; and the clinical rationale for any change from the hours approved at the last review. The guide wants proof of improvement. Where there is none, it wants “documentation of modification of the treatment, additional assessments that have been conducted, and/or there has been appropriate consultations from other staff or experts.” Coverage ends after improvement of less than one standard deviation in all domains over successive authorization periods. It also ends after improvement of two or more standard deviations in multiple domains, or one or more in a Focused ABA plan. The form is not used for Maryland or Massachusetts plans.',
        ],
      },
      {
        h2: 'Can a BCBA licensed in another state deliver ABA by telehealth to an Aetna member?',
        cites: [
          { title: 'Aetna — Behavioral Health Televideo Services (DocFind)', url: 'https://es.aetna.com/dse/cms/codeAssets/html/static/Behavioral_Health_Televideo.html' },
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual (1158252-01-01, 8/22) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
        body: [
          'Aetna applies the law at both ends of the call. Its Behavioral Health Televideo Services page says providers “comply with all relevant laws in the jurisdiction where they and the member getting services are located,” and adds that “Not all benefits plans cover Behavioral Health Televideo Services.” Aetna’s 2026 provider manual sets the ABA credential: “either national certification is needed from the Behavior Analyst Certification Board (BACB), or the practitioner must be licensed as a behavior analyst in the state in which they practice.” Its Behavioral Health Provider Manual (8/22 edition) says telemedicine providers “must act within the scope of their license and ensure that they have the proper licensure based on state requirements.”',
          'Aetna publishes no ABA-specific cross-state rule beyond that. A BCBA can treat an Aetna child in another state by telehealth only if that state’s law lets them practise there and the member’s plan covers televideo. Check both on the benefits call, along with which ABA codes the plan pays by telehealth.',
        ],
      },
      {
        h2: 'How do you dispute or appeal an Aetna ABA claim?',
        body: [
          'Aetna runs two steps. A reconsideration is “a formal review of a previous claim decision” covering reimbursement, coding and reprocessing, and “You need to file your reconsideration within 180 calendar days of the initial claim decision.” An appeal follows: “File your appeal within 60 calendar days of the reconsideration decision.” Some denials skip the first step and go straight to appeal, including medical-necessity and payment-policy decisions, adverse utilization review decisions, outpatient denials for no precertification and retroactive authorizations; for those Aetna allows up to 180 days on commercial plans. Aetna says most reconsiderations get an EOB or letter within 30 business days. File on Availity, or by mail with the Practitioner and Provider Complaint and Appeal form, which is mandatory for written appeals.',
          'State law changes the 180-day standard for fully insured members. Aetna’s exceptions table gives Maryland 365 days for all providers; New Jersey 90 calendar days from the notice to reach New Jersey’s PICPA arbitration program, and 18 months from first payment to seek an underpayment; North Carolina 2 years from the original claim payment. Self-funded plans stay on the 180-day standard.',
        ],
        cites: [{ title: 'Aetna — The disputes process: reconsiderations and post-service appeals', url: 'https://www.aetna.com/health-care-professionals/disputes-appeals/disputes-appeals-overview.html' }, { title: 'Aetna — Dispute & appeal process: state exceptions to filing standard', url: 'https://www.aetna.com/health-care-professionals/disputes-appeals/provider-appeals.html' }, { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }],
      },
      {
        h2: 'Aetna ABA claims: codes, filing limit and payment time',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — The disputes process: reconsiderations and post-service appeals', url: 'https://www.aetna.com/health-care-professionals/disputes-appeals/disputes-appeals-overview.html' },
        ],
        body: [
          'Codes: Aetna’s behavioral health precertification list puts ABA under CPT 97151–97158, 0362T and 0373T, and CPB 0554’s code table lists the same CPT set. Neither document lists a HCPCS H-code (H0031, H0032, H2019) for commercial ABA.',
          'Filing limit and payment time: Aetna’s June 2026 national provider manual publishes neither. It defines a clean claim as one “received in a timely manner” that includes all the data elements of the CMS-1500. It adds that a clean claim “Doesn’t involve coordination of benefits,” so secondary claims fall outside the clean-claim clock. The manual does not mention taxonomy codes on claims or electronic visit verification. The filing deadline and payment terms are in your participation agreement. On fully insured plans, the state’s prompt-pay and timely-filing law also applies. After a decision, you have 180 calendar days to file a reconsideration and then 60 calendar days to appeal. No weekly submission cutoff or check-run day is published.',
        ],
      },
      {
        h2: 'Does Aetna require a referring provider on ABA claims?',
        body: [
          'Not as a standing rule. Aetna\u2019s provider manual (June 2026) says a clean claim includes \u201cA corresponding referral (whether in paper or electronic format), if required for the applicable claim,\u201d along with \u201cAll the data elements of the UB-04 or CMS-1500.\u201d For behavioral health, which is where Aetna places ABA, \u201cMembers may access behavioral health care in three ways: Through direct access to the behavioral health provider; Through a recommendation from the primary care physician or other treatment provider; Through a referral from an employee assistance or student assistance program provider.\u201d So box 17 is needed only when the member\u2019s plan requires a referral for the service; in Aetna Open Access plans \u201creferrals also are not necessary.\u201d Where a PCP referral is required, it must be issued before the visit: \u201cReferrals should not be retroactive.\u201d',
        ],
        cites: [{ title: 'Aetna — Provider manual (8102800-01-01, 6/26): clean claims, referrals, behavioral health access', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }],
      },
      {
        h2: 'Who can diagnose autism for Aetna ABA, and can an LCSW?',
        body: [
          'Aetna’s ABA Medical Necessity Guide asks for “a DSM-V diagnosis of Autism Spectrum Disorder … obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).” It does not name licensed clinical social workers either way. An LCSW’s diagnosis therefore meets Aetna’s test only where the state’s licensing law puts diagnosing autism within the LCSW’s scope of practice. The precertification form asks for the “Diagnosing Provider (name and credentials),” so the reviewer sees who made the diagnosis.',
        ],
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
      },
      {
        h2: 'Aetna authorizations, out-of-network providers and changing agencies',
        body: [
          'Who the precertification is for: form GR-69017-4 (7-26) identifies the requester by “Provider/Provider Group TIN or PIN number” and asks for network status, “Participating” or “Non-Participating.” A non-participating provider therefore uses the same form. It also names the supervising clinician. Aetna publishes no rule on whether an approved precertification moves to another rendering provider or another TIN when a family changes ABA agencies. Ask Aetna precertification before the switch.',
          'Out-of-network care at the in-network cost: Aetna’s June 2026 provider manual offers transition of care, which “allows certain qualifying members the ability to request to continue receiving care from their current out-of-network provider at in-network cost level for a defined period of time,” and continuity of care when a provider leaves the network during “an active course of covered treatment.” The treating provider “must be an individual practitioner (for example, a specialist, physical therapist, or speech therapist) or home care agency.” An ABA agency is not named. The member asks Member Services or the employer for a Transition Coverage Request Form, completes it with the treating provider and faxes it to Aetna, and Aetna sends a coverage letter that gives how long the transition benefits last. The manual and the ABA documents describe no single case agreement process.',
        ],
        cites: [{ title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }],
      },
      {
        h2: 'Paying privately instead of using Aetna: self-pay rules and the Good Faith Estimate',
        body: [
          'Federal law covers a family that pays for ABA itself. Under 45 CFR § 149.610 a “self-pay” individual includes someone who has coverage “but who does not seek to have a claim for such item or service submitted to such plan or coverage,” as well as the uninsured. The provider must ask whether the family has coverage and wants to use it, and must tell self-pay families that a good faith estimate is available. The written estimate is due “not later than 1 business day after the date of scheduling” when the service is booked at least 3 business days ahead, within 3 business days when it is booked at least 10 business days ahead, and within 3 business days of a request. For a recurring service such as weekly ABA, one estimate may cover the whole course, but its scope “must not exceed 12 months.” The estimate lists the diagnosis and service codes, the expected charge for each service, and the name, NPI and TIN of each provider. It must also carry the disclaimers the rule lists, including the family’s right to dispute.',
          'The dispute right is in 45 CFR § 149.620. If the bill is “at least $400 more than the total amount of expected charges listed on the good faith estimate,” the family may start patient-provider dispute resolution within 120 calendar days of receiving that bill. CMS’s medical bill rights page explains these rights and takes questions at 1-800-985-3059.',
          'Aetna’s own rule for network providers: to provide a service the plan does not cover, Aetna’s June 2026 provider manual says you must “Notify the member that their insurance will not cover the service” in writing “at each specific occurrence” (“A general financial responsibility form is not sufficient”), and get the member’s signature on a consent that they understand the service is not covered and “Agree to be financially responsible.” You may not bill the member when a claim is denied “for administrative reasons such as lack of referral or authorization when one was required,” or for a service Aetna denied “as a result of our UM review.” A member who has used up a visit limit cannot be charged more than the contracted rate.',
        ],
        cites: [{ title: '45 CFR § 149.610 — Good faith estimates of expected charges for uninsured (or self-pay) individuals', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.610' }, { title: '45 CFR § 149.620 — Patient-provider dispute resolution (uninsured or self-pay)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.620' }, { title: 'CMS — Medical bill rights (No Surprises Act; good faith estimates)', url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights' }, { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }],
      },
      {
        h2: 'Can an ABA provider end services or discharge a child on an Aetna plan?',
        body: [
          'This page is not legal advice. What Aetna’s documents say: the treatment plan must include “documentation of planning for transition through the continuum of interventions, services and settings, as well as titration and discharge criteria.” On ending coverage, the ABA Medical Necessity Guide says “A member not making progress will be transitioned to other appropriate services. When it becomes clear that a treatment is ineffective, or the treatment is no longer needed, this must be communicated to the family and provider.” Coverage ends when medical necessity is no longer met, or after improvement of two or more standard deviations in multiple domains (one or more in a Focused ABA plan). The precertification form also asks for discharge criteria with an aftercare plan.',
          'Aetna sets no notice period for a provider who decides to stop treating a child, for example because of aggression the setting cannot manage. That question is decided by state law, the provider’s licensing rules and the provider contract, which these documents do not cover. When a child needs a different level of care, the same guide expects a transition to “other appropriate services.”',
        ],
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
      },
    ],
    collect: [
      { title: 'Member ID, group ID & subscriber', desc: 'Plus a card photo — enough to run verification without a callback.' },
      { title: 'Plan type', desc: 'Fully insured vs. self-funded changes which rules apply; note the state of issue for mandate purposes.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD code, diagnosing provider and credentials, evaluation date.' },
      { title: 'Concurrent services', desc: 'Speech, OT, PT, school supports — required on the precert form.' },
      { title: 'Prior ABA history', desc: 'Previous providers, hours, and progress — needed to justify requested intensity.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
      { title: 'Aetna — Behavioral Health Televideo Services (DocFind)', url: 'https://es.aetna.com/dse/cms/codeAssets/html/static/Behavioral_Health_Televideo.html' },
      { title: 'Aetna — Behavioral Health Provider Manual (1158252-01-01, 8/22) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
      { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      { title: 'Aetna — The disputes process: reconsiderations and post-service appeals', url: 'https://www.aetna.com/health-care-professionals/disputes-appeals/disputes-appeals-overview.html' },
      { title: 'Aetna — Dispute & appeal process: state exceptions to filing standard', url: 'https://www.aetna.com/health-care-professionals/disputes-appeals/provider-appeals.html' },
      { title: 'Aetna — Provider manual State Supplement, Texas section (8705750-01-01, 7/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
      { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
      { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
      { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
      { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
      { title: 'Aetna — OfficeLink Updates newsletter archive (quarterly newsletters + monthly notices and reminders)', url: 'https://www.aetna.com/health-care-professionals/newsletters-news/provider-newsletters-archive.html' },
      { title: '45 CFR § 149.610 — Good faith estimates of expected charges for uninsured (or self-pay) individuals', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.610' },
      { title: '45 CFR § 149.620 — Patient-provider dispute resolution (uninsured or self-pay)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.620' },
      { title: 'CMS — Medical bill rights (No Surprises Act; good faith estimates)', url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Aetna\'s ABA medical necessity guide: services "must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" unless state mandates, plan documents or contracts require otherwise, and where those allow unlicensed or non-certified staff "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." No RBT credential is named. The guide does set the supervision allowance: “additional authorization may be provided for QHP protocol modification and direction at 1 to 2 hours per 10 hours of treatment by protocol, as well as authorization for caregiver training.” It sets no cap on how many technicians or cases one analyst may supervise. The precertification form does make supervision a submission fact rather than an internal one: it asks for the name and credential of the BCBA or licensed clinician overseeing the case. For context on intensity rather than supervision, CPB 0648 references intensive-intervention research norms of 25 hours a week, 12 months a year.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 states whether 97155 and 97153 may be billed for the same clock time; Aetna handles code-pair questions through reimbursement and claim-editing policy rather than through the clinical policy bulletin. The precertification form does require requested hours to be listed code by code, so the authorization will at least be explicit about which codes are in play.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card. Ask specifically about 97153 billed alongside 97155.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Billed by the licensed or certified analyst, unless the plan or state says otherwise. Aetna’s ABA Medical Necessity Guide: “Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise.” Where unlicensed or non-certified staff deliver services, “there must be supervision and direction” of them in line with practice standards. Aetna does not publish whose NPI goes in the rendering field of a technician-delivered 97153 line, or any degree-level modifiers.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia: 'Your Aetna participation agreement, or Aetna provider services / Availity — confirm the rendering-NPI convention and any modifiers before the first claim.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published as a per-day unit ceiling. CPB 0554 lists the covered ABA codes but sets no per-day cap, and Aetna publishes no ABA-specific MUE table. The operative ceiling is the precertification itself: form GR-69017-4 asks for treatment hours per week code by code, and assessment hours per authorization period. The ABA Medical Necessity Guide sizes those weekly hours with a severity table. For each impaired domain (maladaptive behavior, social communication, self-care) it allows 1 to 4 hours a week for mild impairment (more than 1 SD below the mean), 4 to 7 for moderate (more than 1.5 SD) and 7 to 10 for severe (more than 2 SD). “Authorized hours will be based on documented severity of impairments.” Its typical intensity is 10–25 hours a week for comprehensive ABA and 1–20 for focused ABA. These are authorization limits, not claim edits.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
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
          'Aetna publishes no ABA place-of-service list. On school settings it says two things. CPB 0648: "Many Aetna plans exclude coverage of educational services. For example, speech therapy or ABA services during class would be excluded under these plans. Please check benefit plan exclusions." And precertification form GR-69017-4 asks "Are any ABA hours being requested during class?" and, if so, how many and for which codes. The IEP/IDEA carve-out in Aetna\'s ABA medical necessity guide sits in its Maryland exhibit, not in the national criteria. Where ABA is payable in a school, the community or a group home is a benefit-document question.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/20/2026)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        verifyVia: 'The member\'s benefit document (educational-services exclusion), and Aetna provider services for whether school-setting ABA is payable on that plan.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'CPB 0554 states no age limit for ABA. What decides the age question on an Aetna card is therefore the plan and the state: self-funded employer plans can carve benefits differently, and state autism mandates layer their own age bands on fully-insured business. Two families with Aetna cards can have materially different ABA benefits, so age is a benefits-verification answer, not a policy lookup.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'A live benefits verification on every family \u2014 ABA coverage confirmation, any age or visit limits, deductible status, and the precert path for that specific plan.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No recency rule is published. The ABA Medical Necessity Guide does not state how recent the ASD diagnostic evaluation must be (its 12-month test is on the functional-impairment scale), and the precertification form (GR-69017-4, 7-26 revision, eff. 8/1/2026) asks for the diagnosis code, the diagnosing provider and their credentials without a date test. The form\'s date test is on the standardized assessment instead: results "completed within the past 12 months," with a repeat validated assessment every 6\u201312 months. Capture the evaluation date at intake regardless; any plan-level rule will be applied against it.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
        verifyVia: 'The precertification submission itself \u2014 Availity\'s two-step precert add plus clinical questionnaire, or the precert phone line. Ask whether an evaluation of this age is acceptable before booking the assessment.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Aetna’s ABA Medical Necessity Guide requires a DSM-5 autism spectrum diagnosis “obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice).” That is a scope-of-practice test, not a closed list. LCSW: the guide neither names nor excludes licensed clinical social workers, so an LCSW’s diagnosis meets it only where the state’s licensing law puts diagnosing autism within the LCSW’s scope. The test is applied at the front door: precertification form GR-69017-4 (7-26) asks for the “Diagnosing Provider (name and credentials).”',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the diagnosis code, the diagnosing provider and their credentials rather than for an instrument, date and score \u2014 a notably lighter bar than Optum\'s validated-tool requirement or MHS\'s named-instrument form. Collect the instrument anyway: a state mandate or a downstream reviewer may want it even when the policy does not.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Aetna\'s ABA documents impose no referral or physician-order requirement of their own (the ABA Medical Necessity Guide names none). What Aetna requires is precertification: its behavioral health precertification list covers every ABA code, assessment and treatment alike; the request is initiated on Availity or by phone, with form GR-69017-4 (7-26 revision, eff. 8/1/2026) supplying the clinical information; and reauthorization runs on a roughly six-month cadence (the guide evaluates progress every six months). Where a state autism mandate applies to a fully-insured plan, that mandate may add a prescription or physician-order requirement of its own \u2014 Maryland and Missouri both do \u2014 so check the state layer before assuming none exists.',
        status: 'verified',
        cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      telehealth: {
        value:
          'Aetna\'s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151 (the assessment), 97153, 97155 (protocol modification, the code for BCBA direction of the technician), 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable.',
        status: 'verified',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }],
        verifyVia: 'Aetna provider services or Availity — confirm the payment policy is still current and that the member\'s plan carries a telehealth benefit before scheduling remote hours.',
      },
      authTurnaround: {
        value:
          'No national number: Aetna\'s provider manual publishes no decision clock for ABA precertification, so the deadline comes from the law that governs the plan. Self-funded employer plans (ERISA): a pre-service decision "not later than 15 days after receipt of the claim," extendable once by 15 days, and 72 hours for urgent care. Fully insured plans follow the state\'s utilization-review law, which is often tighter — Aetna\'s own state supplement shows Texas at "3 calendar days from receipt of a complete request." Reauthorization lead time is likewise a state-law and plan question; capture the authorization end date and file the continued-service request well before it.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Provider manual State Supplement, Texas section (8705750-01-01, 7/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
          { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: ask whether the plan is fully insured (state UR deadlines) or self-funded (ERISA deadlines), and ask Aetna precertification how early a reauthorization may be submitted.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Aetna coordinates "as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member\'s plan," and lists the birthday rule among the order-of-benefit rules it applies: for a child whose parents are married or living together, the plan of the parent whose birthday falls earlier in the year is primary; separated or divorced parents follow the custodial-parent rule unless a court order assigns coverage. Secondary payment is either the standard 100%-allowable method or maintenance of benefits, "a method used by many self-funded plans" under which Aetna pays nothing when the primary\'s benefit equals or exceeds Aetna\'s. Aetna pays ahead of Medicaid (payer of last resort by federal law — the Medicaid program may still require its own PA), TRICARE (secondary to other health insurance by law) and CHAMPVA (pays after other health insurance).',
        status: 'verified',
        cites: [
          { title: 'Aetna — Provider manual (8102800-01-01, 6/26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Is there an Aetna template for the ABA assessment or treatment request?', a: 'Yes: precertification form GR-69017-4 (7-26), which “Effective August 1, 2026 … replaces all other Applied Behavior Health Analysis (ABA) precertification information request documents and forms” (not for Maryland or Massachusetts plans). It asks for hours per authorization period for 97151, 97152 and 0362T, hours per week for treatment codes, the diagnosing provider’s name and credentials, a standardized assessment such as the Vineland, ABAS or VB-MAPP from the past 12 months, and baseline, interim and current data for all goals. Start the request on Availity or by phone and attach the form.' },
      { q: 'Do we have to give a Good Faith Estimate to a family paying privately?', a: 'Yes, under federal law. 45 CFR § 149.610 treats a family as self-pay if it is uninsured or chooses not to submit a claim to its plan. Tell the family an estimate is available, and give it in writing within 1 business day of scheduling (3 business days if the start is at least 10 business days away, or after a request). One estimate can cover up to 12 months of recurring sessions. If the bill comes in at least $400 over the estimate, the family can dispute it within 120 days. For a service Aetna does not cover, Aetna’s manual also requires written notice and a signed consent each time.' },
      { q: 'Does Aetna use HM, HN, HO or HP modifiers on ABA claims?', a: 'Aetna’s ABA Medical Necessity Guide, precertification form and June 2026 provider manual name no credential modifiers for ABA. The guide says services “must be provided directly or billed by licensed behavior analysts …, board-certified behavior analysts, or licensed psychologists … unless state mandates, plan documents or contracts require otherwise.” Check your contract or a state rule for any modifier requirement.' },
      { q: 'How many RBTs can one BCBA supervise under Aetna?', a: 'Aetna sets no number. Its ABA Medical Necessity Guide authorizes supervision time, “1 to 2 hours per 10 hours of treatment by protocol,” and requires supervision of unlicensed staff “in line with practice standards,” but it does not cap technicians or cases per analyst. Any caseload limit comes from state licensure law or the BACB.' },
      { q: 'Can an LCSW diagnose autism for Aetna ABA coverage?', a: 'Aetna does not name LCSWs. Its ABA Medical Necessity Guide accepts a diagnosis from a “licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice.” So an LCSW’s diagnosis qualifies only where the state’s licensing law puts autism diagnosis within the LCSW’s scope. The precertification form asks for the diagnosing provider’s name and credentials.' },
      { q: 'Does Aetna accept H0031 or H0032 for commercial ABA?', a: 'Aetna’s commercial ABA documents use CPT codes only: 97151–97158, 0362T and 0373T are the codes on its behavioral health precertification list and in CPB 0554. Bill commercial ABA with those CPT codes.' },
      { q: 'What is Aetna’s timely filing limit for commercial ABA claims?', a: 'Aetna’s national provider manual does not publish one. The deadline is in your participation agreement, and on a fully insured plan the state’s timely-filing law applies too. The manual treats any claim involving coordination of benefits as outside its clean-claim definition. Reconsiderations are due within 180 calendar days of the claim decision.' },
      { q: 'Does Aetna require graphs for ABA reauthorizations?', a: 'No. Aetna’s precertification form asks for baseline, interim and current data for every goal, plus data showing how severe each impairment is now. It also asks for a standardized assessment (Vineland, ABAS or VB-MAPP) from the past 12 months, a progress re-evaluation every 6 months and a repeat validated assessment every 6–12 months. A graph is fine if it shows the values and dates, but none is required.' },
      { q: 'Does Aetna require a referring provider on ABA claims?', a: 'Only when the member\u2019s plan requires a referral. Aetna\u2019s June 2026 provider manual counts a referral as part of a clean claim only "if required for the applicable claim," and members can reach behavioral health care by direct access. Open Access plans need no referral. Check the member\u2019s plan on the eligibility response.' },
      { q: 'Does Aetna cover ABA therapy?', a: 'Yes — for autism spectrum disorder (ICD-10 F84.0–F84.9) under clinical policy CPB 0554, with precertification. Aetna considers ABA experimental for non-ASD indications.' },
      { q: 'Does Aetna require prior authorization for ABA?', a: 'Yes. Precertification is initiated on Availity or by phone, and form GR-69017-4 (7-26 revision, eff. 8/1/2026) supplies diagnosis details, requested hours per CPT code, the supervising clinician, and concurrent services.' },
      { q: 'Does Aetna cover ABA by telehealth?', a: 'Yes, for codes 97151, 97153, 97155, 97156, and 97157 (not 97152) — but the policy has shifted before, so confirm the current rule during each benefits verification.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Not by name. Aetna\'s ABA medical necessity guide says services must be provided directly or billed by licensed behavior analysts, BCBAs or licensed psychologists "unless state mandates, plan documents or contracts require otherwise." Where those allow services by unlicensed or non-certified staff, "there must be supervision and direction" in line with practice standards. Your contract and any state licensure law decide the technician credential.' },
      { q: 'Can an out-of-state BCBA provide ABA to an Aetna member by telehealth?', a: 'Only within the law at both ends. Aetna requires televideo providers to comply with all relevant laws in the jurisdiction where they and the member are located, and not every plan covers televideo. Confirm that the child’s state allows the BCBA to practise there, and verify telehealth coverage for the specific plan.' },
      { q: 'How long do we have to appeal an Aetna commercial ABA claim?', a: 'File a reconsideration within 180 calendar days of the claim decision, then an appeal within 60 calendar days of the reconsideration decision. Medical-necessity, payment-policy, no-precertification and retro-authorization denials go straight to appeal, with up to 180 days on commercial plans. Fully insured plans in some states get longer: Maryland 365 days, North Carolina 2 years from the original payment.' },
      { q: 'Does Aetna commercial require EVV for ABA?', a: 'No Aetna commercial ABA document we read mentions electronic visit verification: not the ABA Medical Necessity Guide, the ABA precertification form or the 2026 provider manual. The federal EVV mandate, 42 U.S.C. § 1396b(l), applies to Medicaid personal care and home health services, not to commercial plans. Aetna Better Health (Medicaid) plans follow their state’s EVV rules, so check the state Medicaid guide for those.' },
      { q: 'Does Aetna bill ABA under the supervising BCBA or the rendering technician?', a: 'Aetna’s ABA Medical Necessity Guide says services “must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists,” with unlicensed staff supervised, “unless state mandates, plan documents or contracts require otherwise.” So technician services are billed by the licensed or certified provider. Aetna does not publish which NPI goes in the rendering field; confirm it with your Aetna contract or provider services.' },
    ],
  },

  'cigna': {
    slug: 'cigna',
    cardDesc: 'No PA on assessment codes; EN0499 treatment authorization; full telehealth.',
    family: 'cigna',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (with ASD dx + licensed/BCBA provider)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + plan with the ABA PA form',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Cigna / Evernorth',
    h1: 'Cigna ABA coverage: prior auth, plans & telehealth.',
    metaTitle: 'Cigna ABA Coverage & Prior Authorization: Intake Guide | Carelu',
    metaDescription:
      'How Cigna/Evernorth covers ABA: no PA on assessment codes, treatment authorization requirements under EN0499, treatment-plan standards, session-note rules, and full telehealth coverage.',
    intro: [
      'Cigna (through Evernorth Behavioral Health) covers ABA for autism with one of the more intake-friendly front doors in the industry: no prior authorization on assessment codes. The rigor arrives at the treatment-authorization step, where policy EN0499 sets detailed requirements for assessments, treatment plans, and progress data. Understanding both halves lets an intake team start families fast without setting up a denial later.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — ASD only (Rett syndrome excluded)' },
      { label: 'Assessment PA', value: 'None for 97151, 97152, 0362T (with ASD dx + licensed/BCBA provider)' },
      { label: 'Treatment PA', value: 'Required — assessment + plan + PA form' },
      { label: 'Submission window', value: 'Encouraged: up to 30 days before or within 2 weeks after start; retrospective only after 90+ days (EN0499)' },
      { label: 'Telehealth', value: '"All ABA CPT codes are covered telehealth services"' },
      { label: 'Policy', value: 'EN0499 (eff. 5/15/2026) + autism resource guide' },
      { label: 'Assessment recency', value: 'Standardized assessment within 60 days of treatment start' },
    ],
    sections: [
      {
        h2: 'The intake-friendly part: no assessment PA',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'With an autism diagnosis on file, an independently licensed provider or BCBA can run assessment codes 97151, 97152, and 0362T without prior authorization (when the plan covers ABA). For intake, that means the sequence can be: verify benefits → book the assessment immediately → build the treatment request from the assessment. No authorization purgatory between first call and first appointment — if your intake process is fast enough to use it.',
        ],
      },
      {
        h2: 'Treatment authorization',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        body: [
          'The treatment PA package is the completed assessment plus treatment plan with Cigna\'s ABA PA form, which Cigna\'s autism resource guide encourages providers to submit up to 30 days before or within two weeks after the start of service ("A delay in request may result in a retrospective review"). EN0499 (eff. 5/15/2026) sets the actual retrospective trigger: "A retrospective authorization request for ABA is any request made when more than 90 days have passed since the start date of the requested authorization, or any time after the patient has discharged." Initiation requires a standardized, validated instrument — current edition, e.g., Vineland-3 — administered within 60 days before treatment start, with deficits mapped to DSM-5-TR ASD domains and to the treatment plan\'s goals.',
        ],
        list: [
          { title: 'Treatment-plan bar', desc: 'Measurable goals with operational definitions and mastery criteria; dated baseline data per setting; caregiver-training goals with their own baselines and data plans; a named, credentialed supervisor; and defined discharge criteria with a fading plan.' },
          { title: 'Session notes', desc: 'Every note needs date, start/end times, location, focus, detailed intervention description, persons present, service type, and the rendering provider\'s name, credential, and signature.' },
          { title: 'Continued treatment', desc: 'Updated plan with current data (≤60 days old), sustained progress, a repeat standardized assessment within a year, and re-assessment after any break over 60 days.' },
        ],
      },
      {
        h2: 'Does Cigna require graphs for an ABA reassessment?',
        cites: [
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth Behavioral Health — Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
        ],
        body: [
          'Not as such. Neither EN0499 (eff. 5/15/2026) nor Evernorth’s ABA Prior Authorization Form (07/26 edition) asks for graphs. What both require is numbers with dates. For continued treatment EN0499 asks for “Quantitative baseline, interim and current data … with dates reported from when the data were collected for all behaviors and skills previously identified and/or proposed for intervention … across all settings and environments.” The form says: “Ensure treatment goal data are quantitative rather than anecdotal in nature” and “Include baseline, interim, and current goal data, with dates recorded, to demonstrate progress over time.” EN0499 defines interim data as covering “at a minimum … the previous 6 months of treatment” and says it “may be reported as patient data points and/or as a relevant average.” So a graph with dated data points works, and so does a dated table. A narrative summary does not. EN0499 mentions figures in one place only, for the standardized assessment: “Standardized scores and score tables, and/or scoring grids/figures must be provided, when applicable.”',
          'How recent: current data must be “collected within no more than 60 days prior to the start date of the continued treatment request, as well as collected within no more than 60 days prior to the date the authorization request is received.” The standardized assessment must be “completed no more than one year prior to the start date of the continued treatment request.” The form puts it as “readministered at least once every year.” After any break in treatment longer than 60 calendar days, a new standardized assessment and updated data are required.',
          'What else the reassessment needs: an updated treatment plan covering current deficits and progress; data showing “ongoing and sustained progress”; where progress is not shown, the barriers and a documented plan with adjusted protocols; data reported separately for each setting; dated baseline data within 60 days for any new goal; and caregiver (stakeholder) training data showing that each stakeholder still takes part and is progressing. To ask for more hours, add the clinical rationale and quantitative data showing how the increase would improve the outcome. On the form, tick “Continued stay,” say whether treatment broke since the last request, and list the standardized assessments with their dates. The form also warns that the AFLS, Essential for Living and the PEAK Comprehensive Assessment do not, on their own, show medical necessity. A request counts as continued treatment when the child had ABA with the requesting provider within the last 90 days. Approved treatment is authorized per month under 97155, which can be swapped with 97153–97158 and 0373T. Weekly hours are multiplied by 4.33 to get the monthly figure.',
        ],
      },
      {
        h2: 'Billing restrictions worth knowing at intake',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'ABA isn\'t covered when delivered at the same time as another therapy (speech, OT) to the same child — so intake should map the family\'s existing therapy schedule, not just list it. Only one provider can bill a unit of time, with the standard supervision exceptions. And if a family is transitioning from another ABA agency, overlapping authorization periods require documented coordination between agencies — capture the outgoing provider\'s details up front.',
        ],
      },
      {
        h2: 'Supervision and credentialing',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        body: [
          'Assessment and case supervision must come from a BCBA, licensed behavior analyst, or independently licensed clinician with documented ABA training, with direct supervision at the standard 1–2 hours per 10 hours of direct treatment. Evernorth doesn\'t credential non-licensed staff — RBT services bill under the supervising provider.',
        ],
      },
      {
        h2: 'Is Cigna\'s ABA network open to new providers?',
        body: [
          'Evernorth Behavioral Health, which runs Cigna\'s ABA network, says it "is committed to expanding our network of autism providers." It requires providers to be certified by a national governing body or a state licensing board (BCBA, BCBA-D, BCaBA, licensed behavior analyst or other behavioral health licensure). Individual providers complete the Evernorth Behavioral Provider Information Form; autism clinics and large group practices complete the Evernorth Screening Application for Autism Clinics. An application can take up to 90 days, and once a clinic contract is signed each certified or licensed provider must also be credentialed, which "can take an additional 60 to 90 days." Providers must be fully credentialed to render in-network services. "Evernorth does not credential nonlicensed/noncertified staff": technician services are billed under the supervising provider.',
        ],
        cites: [{ title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      {
        h2: 'Can a BCBA licensed in another state deliver ABA by telehealth to a Cigna member?',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
        body: [
          'Evernorth, which runs Cigna’s behavioral network, puts the licensing burden on the provider and points to state law. Its Behavioral Health Administrative Guidelines (September 2026) say: “Providers must meet all state requirements to provide virtual behavioral services, including any licenses and certifications. Providers must also comply with their state laws about the use of audio or video-based technology.” Providers are also “expected to follow all regulatory and licensure requirements related to their scope of practice.” A provider who meets the telehealth specialty requirements attests on the Attested Specialty Form, and Evernorth then adds “telehealth” to the provider profile.',
          'The guidelines do not name the member’s state in so many words. Check the child’s state licensing law for whether an out-of-state BCBA may practise there by telehealth before scheduling remote sessions.',
        ],
      },
      {
        h2: 'How do you bill Cigna ABA claims: telehealth modifier, filing limit and codes?',
        body: [
          'Telehealth: Evernorth Behavioral Health lets individual providers and outpatient clinics “permanently use telehealth for outpatient therapy, applied behavior analysis (ABA).” On a CMS-1500 put the CPT code in field 24-D with “Modifier 95,” and “Place of Service (POS) 02 in Field 24-B.” GT is retired by CMS but “still acceptable on claim forms.”',
          'Filing limit: Evernorth’s Behavioral Health Administrative Guidelines (September 2026) say “We will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement.” A longer state timely-filing law applies where there is one. For COB claims “the 90-day filing limit is applied based on the primary payer’s processing date as stated on an explanation of benefits [EOB] or explanation of payment [EOP].” A claim sent back to you for more information gets a fresh 90 days from the date of the request. Corrected claims are not stamped “Corrected Claim.” They follow NUBC rules: on a CMS-1500, “Field 22 should include a ‘7’ or ‘8’ to indicate a replacement or voided claim.” Evernorth’s older (2021) electronic claim submission course adds a 180-day limit for “Non-participating provider or patient claims” and says a claim acceptance from Evernorth can serve as proof of timely filing. Payment time: the guidelines publish no national clean-claim payment deadline. Prompt-pay clocks for fully insured plans come from state law and sit in the guide’s state addenda. Evernorth offers ERA (835) to “Shorten the payment cycle.” It publishes no weekly submission cutoff or check-run day. The 2021 course also lists what an electronic claim carries: the billing provider’s name, TIN and NPI, the place of service, the prior authorization number, and the name and NPI of the rendering provider, attending physician and referring physician.',
          'Codes and who bills: Evernorth’s autism resource guide is explicit: “All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY.” So HCPCS codes such as H0031, H0032 or H2019 are not used for ABA on Cigna plans. Evernorth’s ABA billing-code table lists 97151 through 97158 plus 0362T and 0373T, all in 15-minute units. Technicians and BCaBAs may provide 97152, 97153 and 97154, but the bill for those codes goes out under the BCBA-D, BCBA or licensed mental health provider; every other code is both provided and billed by the BCBA-D, BCBA or licensed provider. Precertification is not needed for 97151, 97152 or 0362T with an autism diagnosis when the provider is independently licensed or a BCBA, except when a network exception is requested.',
        ],
        cites: [{ title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026) — Claims filing deadline, corrected claims (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth Behavioral Health — Behavioral telehealth billing (COVID-19: Interim Guidance page, updated Jun 23, 2023)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDbwcCOVID-19.html' }, { title: 'Evernorth — Electronic claim submission (EDI eCourse, ©2021) (PDF)', url: 'https://chk.static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/eCourses/medical/ediOptions/medBehaviorClaimSubmit.pdf' }, { title: 'Evernorth Behavioral Health — Billing Codes for Applied Behavior Analysis (Dec 16, 2022)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDBwCBillingCodesForABA.html' }],
      },
      {
        h2: 'Cigna ABA appeals, fee schedule, taxonomy and EVV',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026) — Dispute resolution, appeals (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
        body: [
          'Appeals: Evernorth’s Behavioral Health Administrative Guidelines (September 2026) say to call Provider Services at 800.926.2273 first. Payment appeals are then “initiated in writing within 180 calendar days of the date of the initial payment or denial decision,” or within 180 days of an adjustment. A clinical appeal is due “within 180 calendar days from the claim denial unless determined otherwise by plan or state regulation.” A second-level appeal is due within 60 days of the first-level decision. “Most appeals are resolved within 60 calendar days of receipt,” with notice within 75 days unless state law differs. A late-filing denial (no claim within 90 days of the date of service) needs proof with the appeal, such as the EDI transmission report or COB evidence. Each appeal has to be submitted by a person; Evernorth does not accept appeals filed by automation. Fee-schedule adjustments can go through the reconsideration feature on Provider.Evernorth.com instead of an appeal.',
          'Fee schedule: Evernorth does not publish ABA rates. “For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement.” Fee-schedule and contract questions go to Provider Services at 800.926.2273.',
          'Taxonomy and EVV: the 290-page guidelines do not mention a taxonomy code on claims or electronic visit verification. The 837 rule they state is that the billing provider’s TIN and NPI are required, and any rendering or referring provider listed must carry a name and NPI. Ask Provider Services if your contract adds a taxonomy requirement.',
        ],
      },
      {
        h2: 'Does Cigna require a referring provider on ABA claims?',
        body: [
          'Not required. Evernorth\u2019s Behavioral Health Administrative Guidelines (September 2026), which govern Cigna behavioral claims including ABA, say for 837 claims: \u201cThe \u2018Billing Provider\u2019 Taxpayer Identification Number (TIN) and NPI are required. Any additional provider identification on the claim, such as the \u2018Rendering Provider\u2019 or \u2018Referring Provider,\u2019 must include the name and NPI when submitted.\u201d So box 17/17b is optional, but if you fill it in, give the referring clinician\u2019s name and NPI together.',
        ],
        cites: [{ title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026) — NPI on 837 claims', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' }],
      },
      {
        h2: 'Cigna authorizations, network exceptions and changing ABA agencies',
        body: [
          'Who the authorization is for: Evernorth’s ABA Prior Authorization Form (07/26) asks for the servicing clinic’s name and “Taxpayer Identification Number (TIN)” and for the supervising provider’s name and credential or license. An approved request is written per month under 97155 and can be used across 97153–97158 and 0373T.',
          'Two agencies at once: EN0499 says “ABA services delivered by multiple ABA provider organizations/agencies/companies during the same authorization period are not considered medically necessary unless ALL the following are present and documented”: a clear plan to coordinate care so services are not duplicated, intervention strategies that are “consistent and not contradictory,” and a combined intensity across all ABA providers that reflects the child’s needs. A new agency taking over a case therefore needs its own authorization and, while the old one is still open, documented coordination with the outgoing agency.',
          'Out-of-network providers: Evernorth’s ABA billing-code page says the assessment codes need no precertification for an independently licensed provider or BCBA, but “authorization is required for 97151, 97152, or 0362T when requesting a network exception.” Evernorth does not define a network exception there or publish criteria for granting one. Ask the Autism Care Coordinator team (877-279-7603) whether one is possible for the member.',
        ],
        cites: [{ title: 'Evernorth Behavioral Health — Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' }, { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth Behavioral Health — Billing Codes for Applied Behavior Analysis (Dec 16, 2022)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDBwCBillingCodesForABA.html' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      {
        h2: 'Paying privately instead of using Cigna: self-pay agreements and the Good Faith Estimate',
        body: [
          'Federal law covers a family that pays for ABA itself. Under 45 CFR § 149.610 a “self-pay” individual includes someone who has coverage “but who does not seek to have a claim for such item or service submitted to such plan or coverage,” as well as the uninsured. The provider must ask whether the family has coverage and wants to use it, and must tell self-pay families that a good faith estimate is available. The written estimate is due “not later than 1 business day after the date of scheduling” when the service is booked at least 3 business days ahead, within 3 business days when it is booked at least 10 business days ahead, and within 3 business days of a request. For a recurring service such as weekly ABA, one estimate may cover the whole course, but its scope “must not exceed 12 months.” The estimate lists the diagnosis and service codes, the expected charge for each service, and the name, NPI and TIN of each provider. It must also carry the disclaimers the rule lists, including the family’s right to dispute.',
          'The dispute right is in 45 CFR § 149.620. If the bill is “at least $400 more than the total amount of expected charges listed on the good faith estimate,” the family may start patient-provider dispute resolution within 120 calendar days of receiving that bill. CMS’s medical bill rights page explains these rights and takes questions at 1-800-985-3059.',
          'Evernorth’s rule for network providers: its September 2026 Administrative Guidelines say “You cannot bill patients for covered services or for services for which payment was denied due to your failure to comply with your Provider Agreement,” including authorization and timely-filing rules. A self-pay agreement is allowed for services that are not covered, which the guidelines say include “Services for which the patient elects not to use their benefit plan.” The patient must sign it, with a full financial disclosure, “in advance of services being rendered.” Evernorth’s Self-Pay Agreement form is in the Forms Center on Provider.Evernorth.com, or you may use your own if it has the same data elements. An agreement signed at the start of treatment that only mentions a possible future self-pay arrangement does not count, and an agreement “may never be retroactive.”',
        ],
        cites: [{ title: '45 CFR § 149.610 — Good faith estimates of expected charges for uninsured (or self-pay) individuals', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.610' }, { title: '45 CFR § 149.620 — Patient-provider dispute resolution (uninsured or self-pay)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.620' }, { title: 'CMS — Medical bill rights (No Surprises Act; good faith estimates)', url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights' }, { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' }],
      },
      {
        h2: 'Can an ABA provider end services or discharge a child on a Cigna plan?',
        body: [
          'This page is not legal advice. What EN0499 says: “Transition and discharge planning is not a single event that occurs at the end of the treatment period. Abrupt termination of services may be detrimental to a individual’s progress.” “Discharge can be initiated by the provider or the individual for a multitude of reasons and should occur in compliance with any state laws or regulations pertinent to discharge.” Every treatment plan needs a “transition plan that includes a plan for fading services from all settings” and discharge criteria for “discontinuation and/or transfer to alternative or less intrusive levels of care.”',
          'For severe behavior such as aggression, EN0499 sets extra criteria rather than an exclusion. When treatment is part of a Severe Behavior Program or includes severe behavior, the request needs a complete treatment and behavior history (for example emergency services, bodily injury or property destruction), dated baseline data within 60 days, “specific safety measures and protocols,” and documented consultation with medical or mental health professionals. Codes 0362T and 0373T cover severe destructive behavior that needs two or more technicians face to face. EN0499 sets no notice period for a provider-initiated discharge; state law and the provider contract decide that.',
        ],
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    ],
    collect: [
      { title: 'Member ID + plan details', desc: 'Card photo, subscriber info, and whether the plan actually includes the ABA benefit.' },
      { title: 'Diagnosis documentation', desc: 'DSM-5-TR ASD diagnosis; note Rett syndrome (F84.2) is excluded under EN0499.' },
      { title: 'Recent standardized assessment', desc: 'E.g., Vineland-3 within 60 days of treatment start — or plan to administer one during your assessment window.' },
      { title: 'Current therapy schedule', desc: 'Days/times of speech, OT, PT — concurrent-service timing directly affects billability.' },
      { title: 'Prior/current ABA provider', desc: 'Transitions need documented coordination; get releases signed at intake.' },
    ],
    sources: [
      { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Evernorth Behavioral Health — Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
      { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
      { title: 'Evernorth Behavioral Health — Behavioral telehealth billing (COVID-19: Interim Guidance page, updated Jun 23, 2023)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDbwcCOVID-19.html' },
      { title: 'Evernorth — Electronic claim submission (EDI eCourse, ©2021) (PDF)', url: 'https://chk.static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/eCourses/medical/ediOptions/medBehaviorClaimSubmit.pdf' },
      { title: 'Evernorth Behavioral Health — Billing Codes for Applied Behavior Analysis (Dec 16, 2022)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDBwCBillingCodesForABA.html' },
      { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
      { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
      { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
      { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
      { title: 'Cigna Healthcare — Provider Newsroom, U.S. Commercial (replaced Network News in 2024)', url: 'https://providernewsroom.com/category/cigna-healthcare/' },
      { title: 'Evernorth Behavioral Health — Provider Newsroom, Behavioral Health (Cigna/Evernorth provider news)', url: 'https://providernewsroom.com/category/evernorth/' },
      { title: '45 CFR § 149.610 — Good faith estimates of expected charges for uninsured (or self-pay) individuals', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.610' },
      { title: '45 CFR § 149.620 — Patient-provider dispute resolution (uninsured or self-pay)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.620' },
      { title: 'CMS — Medical bill rights (No Surprises Act; good faith estimates)', url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Assessment and case supervision must come from a BCBA, a licensed behavior analyst, or an independently licensed clinician with documented ABA training, with direct supervision at the standard 1\u20132 hours per 10 hours of direct treatment. Evernorth does not credential non-licensed staff at all, so the supervising clinician is also the contractual party. The treatment plan must name a credentialed supervisor and define discharge criteria with a fading plan. EN0499 adds that when direct treatment is 10 hours a week or less, “a minimum of one to two hours per week of direct case supervision is provided.” It sets no limit on how many technicians or cases one BCBA may supervise. That cap comes from the BACB and state licensure rules, not from Cigna.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Two rules, and the first one catches more claims than the second. ABA is not covered when delivered at the same time as another therapy \u2014 speech, OT \u2014 to the same child, which makes the family\'s existing therapy schedule an intake fact rather than a note. And only one provider can bill a unit of time, with the standard supervision exceptions. Where a family is transitioning from another ABA agency, overlapping authorization periods require documented coordination between the agencies, so capture the outgoing provider\'s details and get releases signed up front.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      noteSignature: {
        value:
          'EN0499 specifies the note element by element: every session note needs the date, start and end times, location, focus, a detailed description of the intervention, the persons present, the service type, and the rendering provider\'s name, credential and signature. No countersignature requirement and no signing deadline are published.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          'Evernorth does not credential non-licensed staff, so RBT-delivered services bill under the supervising provider. The treatment plan must carry a named, credentialed supervisor, and assessment codes are payable only when performed by an independently licensed provider or a BCBA. Evernorth’s ABA billing-code table says the same code by code: 97152, 97153 and 97154 may be provided by a “BCaBA, Technician,” but the provider who can bill for them is the “BCBA-D, BCBA, or licensed mental health provider.”',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth Behavioral Health — Billing Codes for Applied Behavior Analysis (Dec 16, 2022)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDBwCBillingCodesForABA.html' }],
      },
      dailyLimits: {
        value:
          'Not published as a per-day unit ceiling. EN0499 bounds the day from a different direction: ABA is not covered when delivered at the same time as another therapy to the same child, and only one provider can bill a unit of time, with the standard supervision exceptions. Requested intensity is set in the treatment plan and authorized on the ABA PA form rather than against a published cap. The limit that does apply is the authorization itself. Evernorth’s ABA Prior Authorization Form (07/26) says an approved authorization “will be written on a per month basis with CPT code 97155 and can be interchanged with ongoing treatment codes 97153–97158 and 0373T. ABA hours requested per week are multiplied by 4.33 to determine monthly averages.” So the cap is a monthly bank of authorized hours, not a daily claim edit.',
        status: 'plan-dependent',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth Behavioral Health — Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' }],
        verifyVia: 'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 publishes no age limit for ABA. The bound on a Cigna card therefore comes from the plan document and, on fully-insured business, from the state autism mandate \u2014 Maryland\'s habilitative mandate runs through the month the enrollee turns 19, Missouri\'s ABA dollar cap runs through age 18, Indiana\'s mandate has no age term at all. Establish plan funding type before quoting any bound.',
        status: 'plan-dependent',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 confirm the ABA benefit exists, the funding type, and any age or visit limit.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Cigna\'s recency rule attaches to the standardized assessment rather than to the diagnosis, and it is the tightest in this directory. Initiation requires a standardized, validated instrument in its current edition administered within 60 days before treatment start. Continued treatment needs an updated plan with current data no more than 60 days old, sustained progress, a repeat standardized assessment within a year, and a re-assessment after any break in service longer than 60 days. If the family\'s most recent testing is older than 60 days, plan to administer during the assessment window \u2014 which Cigna lets you open without prior authorization.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'EN0499 (eff. 5/15/2026) requires a DSM-5-TR autism spectrum diagnosis (F84.0\u2013F84.9, except F84.2 Rett syndrome) made \u201cby a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice.\u201d The request must give \u201cThe name, credentials, and type of licensure\u201d of the person who made the diagnosis and \u201cThe date on which the diagnosis was most recently made.\u201d A school (IDEA) eligibility finding \u201cmay not meet criteria as a formal diagnosis of ASD\u201d unless it also meets that standard. A diagnosis called \u201cprovisional,\u201d \u201crule out\u201d or \u201cat risk of\u201d does not count as confirmed. Evernorth\u2019s ABA Prior Authorization Form asks for the evaluator\u2019s credential: medical doctor, licensed psychologist or other. LCSW: EN0499 does not name licensed clinical social workers either way. A diagnosis by an LCSW meets its test only where the LCSW may practise independently and the state licensing board treats autism diagnosis as within the LCSW’s scope.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth Behavioral Health \u2014 Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' }],
      },
      diagnosticTools: {
        value:
          'A standardized, validated instrument in its current edition \u2014 EN0499 gives Vineland-3 as the example rather than a closed list \u2014 administered within 60 days before treatment start, with the deficits it measures mapped to DSM-5-TR ASD domains and carried through into the treatment plan\'s goals. Continued treatment requires a repeat standardized assessment within a year. The instrument is the hinge of the treatment authorization, so pick it before the assessment rather than after. Evernorth\u2019s ABA Prior Authorization Form (07/26) says the AFLS, the Essential for Living and the PEAK Comprehensive Assessment \u201cdo not, on their own, sufficiently demonstrate medical necessity.\u201d Where a tool scores on a grid or towers, fill in the bubbles to show each domain was fully assessed.',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth Behavioral Health \u2014 Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required by EN0499, and \u2014 the part that makes Cigna the friendliest front door in this directory \u2014 no prior authorization is required on assessment codes 97151, 97152 and 0362T when there is an autism diagnosis on file and the provider is independently licensed or a BCBA. Treatment is the gated step: the completed assessment plus a treatment plan on Cigna\'s ABA PA form, which Cigna\'s autism resource guide encourages providers to submit up to 30 days before or within two weeks after the start of service. The retrospective line is EN0499\'s, not that window: a request becomes retrospective "when more than 90 days have passed since the start date of the requested authorization, or any time after the patient has discharged."',
        status: 'verified',
        cites: [{ title: 'Cigna EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      telehealth: {
        value:
          'The most permissive published position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model — in person, telehealth or hybrid — chosen on the individual\'s needs rather than by code. State Medicaid telehealth restrictions do not reach commercial Cigna business. That includes the 97151 assessment and 97155 protocol modification. EN0499 describes direct case supervision as occurring "concurrently with the delivery of direct treatment," with the BCBA "face-to-face with the individual and either the Registered Behavior Technician® [RBT®] or the Board Certified Assistant Behavior Analyst® [BCaBA®]," at one to two hours per ten hours of direct treatment; it publishes no separate in-person minimum for supervision delivered by telehealth. How to bill it: Evernorth Behavioral Health says individual providers and outpatient clinics “may permanently use telehealth for outpatient therapy, applied behavior analysis (ABA)” and must put the CPT code in field 24-D, “Modifier 95 in Field 24-D to specify telehealth” and “Place of Service (POS) 02 in Field 24-B.” The GT modifier “has been retired by the Centers for Medicare & Medicaid Services (CMS), but it still acceptable on claim forms.” On the authorization side, Evernorth’s ABA Prior Authorization Form (07/26) lists Telehealth as a place of service to tick (with clinic, home and school), so declare remote delivery on the request.',
        status: 'verified',
        cites: [{ title: 'Evernorth Behavioral Health — Applied Behavior Analysis Prior Authorization Form (PCOMM-2025-224, 07/26) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Evernorth Behavioral Health — Behavioral telehealth billing (COVID-19: Interim Guidance page, updated Jun 23, 2023)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/doingBusinessWithUs/cbhDbwcCOVID-19.html' }],
      },
      authTurnaround: {
        value:
          'Cigna/Evernorth publishes no clock of its own: "We (or our designees) make coverage determinations in accordance with the time frames required under applicable law." For self-funded employer plans that is the ERISA claims rule — a pre-service decision within 15 days (one 15-day extension) and 72 hours for urgent care; fully insured plans follow the state\'s utilization-review law. What Cigna does publish on timing is encouragement, not a rule: its autism resource guide says "we encourage providers to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days." EN0499 (eff. 5/15/2026) sets the actual retrospective trigger: "A retrospective authorization request for ABA is any request made when more than 90 days have passed since the start date of the requested authorization, or any time after the patient has discharged."',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured (state UR deadlines) or self-funded/ASO (ERISA)? Confirm the reauthorization window with the Cigna Autism Care Coordinator team (877-279-7603).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Evernorth follows the NAIC order-of-benefit rules "subject to applicable law and the terms of the benefit plan." Dependent child of married parents living together: the "birthday rule" — "The plan of the parent whose birthday falls earlier in the calendar year is primary" (month and day only; same birthday, the longer-running plan). Divorced or separated parents: a court decree first, otherwise custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse. When Cigna is secondary, bill the primary first and submit to Cigna with the primary\'s explanation of payment; the 90-day filing limit runs from the primary\'s processing date. Cigna pays ahead of Medicaid (payer of last resort by federal law — the Medicaid program may still require its own PA), TRICARE (secondary to other health insurance by law) and CHAMPVA (pays after other health insurance).',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026) (PDF)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Is there a Cigna template for the ABA assessment or treatment plan?', a: 'Cigna uses Evernorth’s ABA Prior Authorization Form (07/26) for treatment requests; the assessment codes 97151, 97152 and 0362T need no prior authorization for an independently licensed provider or BCBA. EN0499 sets the content: a current-edition standardized, validated instrument (for example the Vineland-3) given within 60 days of the start of treatment, “Standardized scores and score tables, and/or scoring grids/figures … when applicable,” measurable goals with dated baselines, caregiver goals, a transition plan and discharge criteria. The form warns that the AFLS, Essential for Living and PEAK do not on their own show medical necessity.' },
      { q: 'Can a family pay privately for ABA while covered by Cigna?', a: 'Yes, if they choose not to use the plan. Evernorth lists “Services for which the patient elects not to use their benefit plan” among services a self-pay agreement can cover; it must be signed in advance and can never be retroactive. Under 45 CFR § 149.610 that family is also “self-pay” for federal purposes, so they are entitled to a written Good Faith Estimate.' },
      { q: 'Does Cigna give out-of-network ABA providers a single case agreement?', a: 'Evernorth’s term is a network exception. Its ABA billing page says authorization is required for 97151, 97152 or 0362T “when requesting a network exception.” Evernorth publishes no criteria for approving one; call the Autism Care Coordinator team at 877-279-7603.' },
      { q: 'Will a Cigna ABA authorization transfer when a family changes agencies?', a: 'Cigna publishes no transfer rule. The PA form ties the request to the servicing clinic’s TIN and the supervising provider, and EN0499 treats two ABA agencies in the same authorization period as not medically necessary unless care is coordinated, consistent and the combined hours fit the child’s needs. Plan for the new agency to request its own authorization.' },
      { q: 'Can an LCSW diagnose autism for Cigna ABA coverage?', a: 'Possibly, depending on the state. EN0499 requires the diagnosis to be made “by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice.” It does not name LCSWs. The PA form asks whether the evaluator is a medical doctor, licensed psychologist or other, and for the diagnosing professional’s name, credentials and licence type.' },
      { q: 'Where do I find Cigna’s ABA fee schedule?', a: 'In your contract. Evernorth says your fee schedule and the list of reimbursable autism services are in Exhibit A of your Provider Agreement. It publishes no ABA rate table, and fee-schedule questions go to Provider Services at 800.926.2273.' },
      { q: 'How long do I have to appeal a Cigna ABA claim?', a: 'Evernorth’s September 2026 guidelines give 180 calendar days from the initial payment or denial decision for a written payment appeal, and 180 days from the denial for a clinical appeal unless the plan or state law says otherwise. A second-level appeal is due within 60 days of the first decision, and most appeals are resolved within 60 days.' },
      { q: 'Does Cigna require graphs for ABA reassessments?', a: 'No graph is required as such. EN0499 and Evernorth’s ABA Prior Authorization Form require quantitative baseline, interim and current goal data with dates, for every goal and every setting. Interim data covers at least the last 6 months and may be shown as data points or averages, and current data must be no more than 60 days old. A standardized assessment from the last 12 months is also required. A dated graph or a dated table both meet the requirement; a narrative summary does not.' },
      { q: 'Does Cigna require a referring provider on ABA claims?', a: 'No. Evernorth\u2019s September 2026 administrative guidelines require only the billing provider\u2019s TIN and NPI; a referring provider is optional, but if you report one it "must include the name and NPI."' },
      { q: 'Does Cigna require prior authorization for ABA?', a: 'Not for assessment codes (97151, 97152, 0362T) when there\'s an autism diagnosis and the provider is independently licensed or a BCBA. Treatment services do require authorization — assessment plus treatment plan with the PA form.' },
      { q: 'Does Cigna cover ABA by telehealth?', a: 'Yes — its March 2025 provider guide states all ABA CPT codes are covered telehealth services, with delivery (in-person, telehealth, hybrid) based on the individual\'s needs.' },
      { q: 'Can a child receive ABA and speech therapy under Cigna?', a: 'Yes, but not at the same time of day — Cigna doesn\'t cover ABA delivered concurrently with another therapy session. Intake should capture the existing therapy schedule to plan around it.' },
      { q: 'Is Cigna accepting new ABA providers?', a: 'Evernorth, which runs Cigna\'s behavioral network, says it is "committed to expanding our network of autism providers." Individual providers submit the Evernorth Behavioral Provider Information Form and clinics the Screening Application for Autism Clinics; allow up to 90 days for the application plus 60 to 90 days of credentialing per provider.' },
      { q: 'Does Cigna credential RBTs?', a: 'No. "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." EN0499 expects the direct work from an RBT or BCaBA under BCBA case supervision.' },
      { q: 'Can an out-of-state BCBA provide ABA to a Cigna member by telehealth?', a: 'Only if state law allows it. Evernorth requires providers to meet all state requirements for virtual behavioral services, including licences and certifications, and to attest to the telehealth specialty. Check the child’s state licensing rules before scheduling remote sessions.' },
      { q: 'Does Cigna require a telehealth modifier for ABA?', a: 'Yes. Evernorth Behavioral Health asks for modifier 95 in field 24-D and place of service 02 in field 24-B on telehealth claims, and ABA is on its list of services providers may permanently deliver by telehealth. GT is retired but still accepted.' },
      { q: 'What is Cigna’s timely filing limit for ABA claims?', a: 'Evernorth’s September 2026 administrative guidelines give 90 days from the date of service, or whatever your provider agreement says, and a longer state law wins. Secondary (COB) claims get 90 days from the primary payer’s processing date on its EOB. Corrected claims use frequency code 7 or 8 in box 22. An older Evernorth course gives 180 days for non-participating providers.' },
      { q: 'Does Cigna accept H0031 or H0032 for ABA?', a: 'No. Evernorth’s autism resource guide says all ABA services must be billed with CPT 97151–97158, 0362T and 0373T only.' },
      { q: 'How fast does Cigna pay a clean ABA claim?', a: 'Evernorth publishes no national clean-claim payment deadline or weekly cutoff. On fully insured plans the state prompt-pay law sets the clock, and Evernorth’s guidelines carry those in their state addenda. Enrolling in ERA (835) shortens the payment cycle.' },
      { q: 'Which ABA billing codes does Cigna use, and who can bill them?', a: 'Evernorth lists 97151–97158, 0362T and 0373T. Technicians and BCaBAs may deliver 97152, 97153 and 97154, but those are billed by the BCBA-D, BCBA or licensed mental health provider; the other codes are delivered and billed by those licensed or certified providers.' },
    ],
  },

  'unitedhealthcare-optum': {
    slug: 'unitedhealthcare-optum',
    cardDesc: 'Two-step auth via Provider Express, 4\u20136 month reviews, code clusters.',
    family: 'unitedhealthcare',
    assessmentPA: {
      value: 'Required — step 1 of the two-step authorization (assessment auth)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — a separate treatment authorization after the assessment. “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law,” and continued-care requests go in “no more than 30 days prior to the current approvals on file expiring” (Optum ABA CPT FAQ)',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    payer: 'UnitedHealthcare / Optum',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare / Optum',
    h1: 'UnitedHealthcare & Optum ABA: the authorization guide.',
    metaTitle: 'UnitedHealthcare / Optum ABA Prior Auth & Coverage Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare covers ABA through Optum Behavioral Health: the two-step authorization via Provider Express, 4–6 month reviews, code clusters, supervision standards, and telehealth attestation.',
    intro: [
      'UnitedHealthcare administers ABA through Optum Behavioral Health, with authorization running through the Provider Express portal as a two-step process — assessment first, then treatment. Optum\'s Supplemental Clinical Criteria are among the most operationally specific in the industry (down to utilization thresholds and code clusters), which cuts both ways: more rules to satisfy, but also more predictability for an intake team that knows them.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — via Optum Behavioral Health' },
      { label: 'Prior auth', value: 'Two-step: assessment auth, then treatment auth (Provider Express)' },
      { label: 'Review cadence', value: 'Every 4–6 months, per account/state law' },
      { label: 'Code structure', value: '4 clusters; units shift within a cluster' },
      { label: 'Supervision', value: '1–2 hrs per 10 direct hrs; min 1 hr 97155/case/month' },
      { label: 'Utilization flag', value: '<80% of authorized hours (2-week window) gets scrutiny' },
    ],
    sections: [
      {
        h2: 'The two-step authorization',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        body: [
          'Step one authorizes the assessment: functional behavior assessment, caregiver interviews, direct observation, record review, baseline skills, and norm-referenced instruments. Step two authorizes treatment based on what the assessment produced. Both run through Provider Express. For most commercial plans without a state-specific carve-out, the standard Optum Supplemental Clinical Criteria (BH803ABASCC) apply.',
          'The diagnosis bar: DSM-5-TR ASD from a state-licensed physician, psychologist, or other qualified clinician, confirmed with at least one clinically validated tool (ADI-R, ADOS-2, DISCO — or second-level tools like CARS-2, RITA-T, STAT).',
        ],
      },
      {
        h2: 'Code clusters — and why intake data shapes them',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        body: [
          'Optum authorizes in four clusters: assessment (97151, 97152), direct care (97153, 97154), multi-staff (0362T, 0373T), and QHP services (97155–97158). Units can flex within a cluster without a new authorization — a genuinely useful operational buffer. Concurrent billing is allowed for supervision (97153+97155), group oversight (97154+97155), and parent training alongside direct care (97153+97156). Not covered: team meetings without the member, 1:1 classroom aides, and services owed under IDEA — which is why intake should capture the school/IEP picture precisely.',
        ],
      },
      {
        h2: 'Continued-service reviews',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum — Applied Behavior Analysis (ABA) Treatment Reviews Via Portal (BH00705, 11/2024) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/national/Portal_Review_Autism_CPT%20UPDATED.pdf%20(1).pdf' }, { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' }],
        body: [
          'Reviews land every 4–6 months and want progress documented per targeted behavior using the same measurement methods as baseline — mastered-program rates, change scores, updated standardized adaptive measures. Two operational tripwires matter for scheduling and intake: inadequate progress within 6 months requires documented reasons plus treatment modification, and utilization below 80% of authorized hours over a two-week window draws scrutiny. Families whose availability can\'t support the authorized intensity are a reauthorization risk from day one — capture real availability honestly at intake.',
          'Does Optum require graphs at reauthorization? No document we read asks for them. The Supplemental Clinical Criteria (interim review April 2026) ask for numbers measured the way the baseline was: “Progress is assessed and documented for each targeted symptom and behavior, including progress toward defined goals, including the same modes of measurement that were utilized for baseline measurement.” That progress “should include rate and percentage of mastered programs, rates of mastered targets, change scores for any outcome measures, updated standardized adaptive measures, and change scores for skills-based assessments.” Movement from baseline must be shown “using validated and norm referenced assessments of functioning,” with caregiver progress where it applies. Each review must also show how generalization is targeted, list the barriers and their fixes, and say which goals were modified or removed. Optum’s portal review guide (BH00705) asks, for each domain, for the main goals, the total number of goals and the “Progress made in this area including number of goals mastered.” Clinical updates are reviewed “ordinarily 6 months” apart and “should include all areas from the initial plan.” Optum’s CPT FAQ sets no fixed reassessment interval (“There is no required frequency at which an assessment must take place”). It asks for the continued-care request “no more than 30 days prior to the current approvals on file expiring.” Time spent on “data analysis, graphs” is not billed separately; it is bundled into 97151 or the direct-service codes.',
        ],
      },
      {
        h2: 'Telehealth',
        cites: [{ title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
        body: [
          'Tele-supervision and virtual family training require the provider to be an approved Optum virtual-visits provider with a completed attestation on Provider Express, and the authorization itself must note virtual delivery. Optum frames telehealth as a supplement to — not a replacement for — in-person care.',
        ],
      },
      {
        h2: 'Can a BCBA licensed in another state deliver ABA by telehealth to a UnitedHealthcare member?',
        cites: [
          { title: 'Optum Behavioral Health Solutions National Network Manual (eff. Oct. 1, 2025) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/netwManual/2024/NNMJune2024.pdf' },
        ],
        body: [
          'Optum answers this directly. Its National Network Manual (effective Oct. 1, 2025) says: “Providers offering telehealth visits must be licensed in the state where the member is located at the time of service. In addition, providers must comply with all licensing laws and telehealth regulations in the jurisdiction(s) where the provider is licensed and where the member is receiving treatment. This includes specific telehealth documentation requirements, informed consent to treat via telehealth, and other telehealth-specific laws and regulations.” Providers also attest to offering telehealth to be listed for it in the directory. For ABA, check the BCBA’s licence against the state the child is in at the time of each session, not the state the agency is in.',
        ],
      },
      {
        h2: 'Will Optum authorize ABA retroactively for a UnitedHealthcare member?',
        cites: [
          { title: 'Optum Behavioral Health Solutions National Network Manual (eff. Oct. 1, 2025) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/netwManual/2024/NNMJune2024.pdf' },
        ],
        body: [
          'Only as an exception. The National Network Manual says: “On occasion, emergent or other unusual circumstances will interfere with the pre-authorization processes. In those cases, requests for a retrospective review of services must be submitted within 180 calendar days of the date(s) of service, unless otherwise mandated by state law.” A retrospective review covers an initial request “made after services have already been delivered but no claim has been filed.” The request “must include information regarding the reason or circumstances preventing required prior authorization or notification and include the medical record and will be processed at the sole discretion of Optum.” Optum decides within 30 calendar days of receipt, and requests outside the time frame “will not be processed.” Treat retro review as a safety valve, not a workflow.',
        ],
      },
      {
        h2: 'Timely filing, appeals and credentialing time with Optum',
        body: [
          'Payment time and codes: Optum’s National Network Manual says “Generally, claims that contain all required information and have the required authorization, if applicable, will be paid within 45 calendar days after Optum receives the claim, or as required by state and federal laws. This may exclude claims that require coordination of benefits determinations.” Bill the primary carrier first when the child has other coverage. No weekly submission cutoff is published. Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) covers “CPT codes 97151-97158 along with the appropriate modifier” for the credential that delivered the service. Indirect work has no separate code and is bundled into the direct codes. HCPCS H-codes are not on its commercial ABA code list.',
          'Fee schedule, taxonomy and EVV: Optum publishes no ABA rate table. Its CPT FAQ says contracted providers “should bill your contracted billing codes and customary charges as outlined on your Fee Schedule after receiving appropriate authorization,” and “You will be reimbursed based on your contracted rate.” The National Network Manual adds that “Failure to follow the terms and conditions as set forth on your fee schedule may result in claim denial(s).” The manual mentions taxonomy only as a directory field you can update. It says nothing about taxonomy on claims or about electronic visit verification. Ask Optum if your agreement requires either.',
          'Optum’s National Network Manual (effective Oct. 1, 2025): “All information necessary to process claims must be received by Optum no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan.” Late claims “may be rejected,” the member may not be billed for them, and corrections should be made “within 90 days of receipt of the initial claim.”',
          'Disputes on commercial plans run in two steps: reconsideration first, then appeal. “The 2-step process allows for a total of 12 months for submission for both steps,” unless state law or the participation agreement sets another deadline.',
          'Every ABA line carries a credential modifier under Optum’s reimbursement policy 2022RP501A: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a BCBA-D. On joining the network, Optum’s ABA CPT FAQ says “Solo Behavior Analysts/Specialists and Group credentialing can take from 45 to 120 days after submission of all materials,” and a new agency audit “normally” takes up to 90 days to schedule.',
        ],
        cites: [{ title: 'Optum — Behavioral Health Solutions National Network Manual (published Aug. 1, 2025, effective Oct. 1, 2025) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/netwManual/2024/NNMJune2024.pdf' }, { title: 'Optum — ABA reimbursement policy 2022RP501A (updated June 2026) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' }],
      },
      {
        h2: 'Does UnitedHealthcare / Optum require a referring provider on ABA claims?',
        body: [
          'Not for ABA. Optum\u2019s National Network Manual (effective September 1, 2026), which governs UnitedHealthcare behavioral health claims including ABA, lists what a Form 1500 claim should carry: member and subscriber names and dates of birth, member ID, ICD diagnosis, dates of service, length of session, type and duration of service, and the clinician\u2019s name, credentials, tax ID and NPI. A referring provider is not on the list. UnitedHealthcare\u2019s 2026 Administrative Guide asks for a valid billing NPI, rendering NPI and taxonomy on all claims and adds \u201cwe encourage you to submit the referring health care provider\u2019s NPI\u201d; it makes the referring provider\u2019s name and NPI mandatory only on \u201claboratory, DME, imaging and home health claims.\u201d',
        ],
        cites: [{ title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026) — claim submission requirements', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' }, { title: '2026 UnitedHealthcare Care Provider Administrative Guide — Chapter 10, claims and NPI', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' }],
      },
      {
        h2: 'Reconsideration packet and out-of-network payment for UnitedHealthcare ABA claims',
        body: [
          'What to send: Optum’s National Network Manual (effective Sept. 1, 2026) runs a 2-step process for Commercial and Medicare Advantage plans, reconsideration and then appeal, with “a total of 12 months for submission for both steps” unless state law or your agreement says otherwise. Its “Required Documentation”: “Include member-specific treatment plans, clinical records, payment appendices or other items that support why you believe our decision was incorrect. We make our review decision based on the materials available at the time of the review.” For a timely-filing denial, include “confirmation we received and accepted your claim within your timely filing requirement.” By mail, complete a reconsideration request form “to outline the reason you disagree with our decision” and send it with the documents to Optum Behavioral Health Solutions, P.O. Box 30757, Salt Lake City, UT 84123; online, use Provider Express > Appeals > Submit Claim Appeal and give “The factual or legal basis for appeal” plus any records that help. The manual addresses this process to network providers.',
          'UnitedHealthcare’s 2026 Administrative Guide says the same for its claims: file within “12 months from the date of the original claim EOB or PRA (or as required by law or your Agreement)” and “Please be detailed in why you feel the payment is not the adjudication outcome you expected.” At reconsideration, include “any necessary additional supporting materials not included in the original claim submissions.” At appeal, attach only new materials: “Please do not include any materials that you sent to us as part of the reconsideration request.” Reconsideration “does not apply in some states, based on applicable state law.”',
          'How an out-of-network claim is priced: UnitedHealthcare says that when the No Surprises Act or a state surprise-billing law does not apply, “United will look to the member’s benefit plan to determine if it is covered and how it should be paid.” The allowed amount may come from “one or more” methods: a percentage of CMS (Medicare) rates, FAIR Health’s database (by percentile), Viant, a rate negotiated with the out-of-network provider “after the service was provided,” or third-party network discounts. “Which option is used depends on various factors, including but not limited to the terms of the healthcare benefit plan, the type of provider, and the type of service.” So an out-of-network provider asking for a higher allowed amount should cite the method in the member’s plan document and what that method produces for the code; UnitedHealthcare publishes no ABA out-of-network rate.',
        ],
        cites: [{ title: 'Optum — Behavioral Health Services National Provider Network Manual (BH02330, published July 1, 2026, effective Sept. 1, 2026) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' }, { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' }, { title: 'UnitedHealthcare — Information on payment of out-of-network benefits', url: 'https://www.uhc.com/legal/information-on-payment-of-out-of-network-benefits' }],
      },
      {
        h2: 'Optum authorizations, single case agreements and changing ABA agencies',
        body: [
          'Who an authorization belongs to: the National Network Manual says “Authorizations for non-routine outpatient services are specific to the requesting clinician. The clinician will receive a copy of the authorization approval,” and lists ABA among those services. Inside a group, Optum’s ABA CPT FAQ adds: “Any ABA Supervisor who is credentialed under the group or facility contract can see a member, billing with the applicable CPT code(s).” Optum publishes no rule moving an authorization to a different agency. A family that changes agencies needs the new agency to request its own authorization.',
          'Single case agreements: asked whether a provider can get “an accommodation/Single Case Agreement (SCA) during the process of credentialing,” Optum’s CPT FAQ answers “Not automatically. In exception cases, based on clinical need, new business implementations, or other gaps in the network, a SCA may be approved after review with the clinical team.” Once an SCA provider becomes contracted, “send a list of your current members to your Network Manager who will coordinate with the clinical team to update your authorizations.” UnitedHealthcare’s Administrative Guide gives the general route for network benefits from a nonparticipating provider on commercial plans: request prior approval at UHCprovider.com > Sign In > Referrals, after checking for a network provider and the W500 Emergent Wrap network; “If approved, we apply the network benefits to the services done by the out-of-network care provider.”',
          'When a network provider leaves Optum: unless the termination is for quality, fraud, licence or federal-program reasons, “clinicians are obligated to continue to provide treatment for all members under their care” for up to 90 calendar days, or until the member moves to another Optum clinician, the episode ends or the benefit ends. Optum notifies affected members “at least 30 calendar days prior to the effective date of the termination, whenever feasible,” and helps them choose a new provider. State law wins where it sets a different period.',
        ],
        cites: [{ title: 'Optum — Behavioral Health Services National Provider Network Manual (BH02330, published July 1, 2026, effective Sept. 1, 2026) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' }, { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' }, { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' }],
      },
      {
        h2: 'Which ABA credential may bill which code for UnitedHealthcare (HM, HN, HO, HP)',
        body: [
          'Optum’s commercial ABA reimbursement policy 2022RP501A (updated June 2026) applies to network and non-network providers on Commercial and Individual Exchange plans. Modifiers: HM for an RBT (“less than a bachelor’s degree level”), HN for a BCaBA (bachelor’s level), HO for a master’s-level BCBA or licensed mental health provider, HP for a BCBA-D or doctoral licensed provider. The allowed modifiers by code are: 97151 HN, HO or HP; 97152, 97153 and 97154 HN, HM, HO or HP; 97155, 97156, 97157 and 97158 HN, HO or HP. 0362T and 0373T “do not require modifiers.” So an RBT (HM) may not bill 97151 or 97155–97158, while a BCaBA (HN) may bill every code. A supervisor’s work “should be billed with the applicable CPT code(s) and the HO modifier.” Bill “only one provider-level modifier per ABA service line.” On HM the policy adds: “State regulatory requirements may supplement, modify or supersede this policy.”',
          'Optum’s CPT FAQ says a BCaBA “can serve as a BCBA extender for services outlined on your fee schedule and billed with modifiers,” including supervising technicians. Technicians working 1:1 “are required to be a Registered Behavior Technician (RBT), a Board-Certified Autism Technician (BCAT), and certified Applied Behavior Analysis Technician (ABAT), or hold an alternative certification (if alternative certification is approved by Network management).”',
        ],
        cites: [{ title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' }],
      },
      {
        h2: 'Paying privately instead of using UnitedHealthcare: self-pay rules and the Good Faith Estimate',
        body: [
          'Federal law covers a family that pays for ABA itself. Under 45 CFR § 149.610 a “self-pay” individual includes someone who has coverage “but who does not seek to have a claim for such item or service submitted to such plan or coverage,” as well as the uninsured. The provider must ask whether the family has coverage and wants to use it, and must tell self-pay families that a good faith estimate is available. The written estimate is due “not later than 1 business day after the date of scheduling” when the service is booked at least 3 business days ahead, within 3 business days when it is booked at least 10 business days ahead, and within 3 business days of a request. For a recurring service such as weekly ABA, one estimate may cover the whole course, but its scope “must not exceed 12 months.” The estimate lists the diagnosis and service codes, the expected charge for each service, and the name, NPI and TIN of each provider. It must also carry the disclaimers the rule lists, including the family’s right to dispute.',
          'The dispute right is in 45 CFR § 149.620. If the bill is “at least $400 more than the total amount of expected charges listed on the good faith estimate,” the family may start patient-provider dispute resolution within 120 calendar days of receiving that bill. CMS’s medical bill rights page explains these rights and takes questions at 1-800-985-3059.',
          'Optum’s rule for network providers: when Optum does not authorize requested services, the National Network Manual lets you bill the member only “If a written statement is signed by the member after the adverse benefit determination and in advance of receiving such services.” A financial-responsibility waiver signed at the start of treatment does not count. The statement must say that you told the member Optum cannot authorize the services, give Optum’s reason, and say that the member has been denied coverage and will be financially responsible.',
        ],
        cites: [{ title: '45 CFR § 149.610 — Good faith estimates of expected charges for uninsured (or self-pay) individuals', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.610' }, { title: '45 CFR § 149.620 — Patient-provider dispute resolution (uninsured or self-pay)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.620' }, { title: 'CMS — Medical bill rights (No Surprises Act; good faith estimates)', url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights' }, { title: 'Optum — Behavioral Health Services National Provider Network Manual (BH02330, published July 1, 2026, effective Sept. 1, 2026) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' }],
      },
      {
        h2: 'Can an ABA provider end services or discharge a child on a UnitedHealthcare plan?',
        body: [
          'This page is not legal advice. Optum’s Supplemental Clinical Criteria (April 2026): “Discharge can be initiated by the provider or the patient for a multitude of reasons and should occur in compliance with any state laws or regulations pertinent to discharge.” Transition is meant to move the child “through treatment toward discharge or other more intensive services as clinically indicated,” and transition and discharge planning “are not a single event that occurs at the end of the treatment period.” The criteria list when transition or discharge may be appropriate, including when goals are met, when there is no substantive progress over successive authorization periods, when treatment is making behaviors persistently worse, and when “Caregivers and providers are unable to reconcile important issues in treatment planning and delivery that prevent delivering medically necessary care.”',
          'Goals may target behaviors “presenting a safety risk to self, others, or property,” and 0362T and 0373T cover assessment and treatment with two or more technicians for a patient “who exhibits destructive behavior.” Optum sets no notice period for a provider-initiated discharge; state law and the participation agreement decide that.',
        ],
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    ],
    collect: [
      { title: 'Member ID + card photo', desc: 'Plus subscriber details for the benefits check.' },
      { title: 'Diagnosis + validated tool', desc: 'DSM-5-TR diagnosis, diagnosing clinician, and which instrument confirmed it (ADI-R, ADOS-2, etc.).' },
      { title: 'School / IEP status', desc: 'IDEA-covered services are excluded from coverage — the school picture must be precise.' },
      { title: 'Real family availability', desc: 'Authorized hours the family can\'t attend become an 80%-utilization problem at review.' },
      { title: 'Caregiver participation capacity', desc: 'Caregiver involvement and progress are review criteria — set expectations at intake.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
      { title: 'Optum Behavioral Health Solutions National Network Manual (eff. Oct. 1, 2025) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/netwManual/2024/NNMJune2024.pdf' },
      { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
      { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
      { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
      { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
      { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
      { title: 'Optum — Applied Behavior Analysis (ABA) Treatment Reviews Via Portal (BH00705, 11/2024) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/national/Portal_Review_Autism_CPT%20UPDATED.pdf%20(1).pdf' },
      { title: 'UnitedHealthcare — Network News (provider news hub, monthly overview + latest articles)', url: 'https://www.uhcprovider.com/en/resource-library/news.html' },
      { title: 'Optum Behavioral Health — Top of Mind, All News (Provider Express provider news by month)', url: 'https://www.providerexpress.com/content/ope-provexpr/us/en/Top-of-Mind/top-of-mind-all-news-.html' },
      { title: 'Optum — Behavioral Health Services National Provider Network Manual (BH02330, published July 1, 2026, effective Sept. 1, 2026) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
      { title: 'UnitedHealthcare — Information on payment of out-of-network benefits', url: 'https://www.uhc.com/legal/information-on-payment-of-out-of-network-benefits' },
      { title: '45 CFR § 149.610 — Good faith estimates of expected charges for uninsured (or self-pay) individuals', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.610' },
      { title: '45 CFR § 149.620 — Patient-provider dispute resolution (uninsured or self-pay)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-149/subpart-G/section-149.620' },
      { title: 'CMS — Medical bill rights (No Surprises Act; good faith estimates)', url: 'https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum publishes both a band and a floor: supervision at 1\u20132 hours per 10 hours of direct treatment, and a minimum of one hour of 97155 per case per month. The floor is the one that catches people \u2014 a light month still owes an hour of billed supervision. The Supplemental Clinical Criteria (interim review April 2026) put the band as “direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week,” consistent with CASP. They set no cap on how many technicians or cases one BCBA may supervise. Technicians “should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate.”',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
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
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule rather than a place-of-service table: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered. That makes the school and IEP picture a coverage question rather than background \u2014 capture it precisely at intake, because a goal that belongs in the IEP is a goal Optum will not pay for.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
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
      billAsProvider: {
        value:
          'Optum names the rendering credential on every line but not whose NPI carries it. Its commercial ABA reimbursement policy (2022RP501A, updated June 2026): “The appropriate modifier must be billed to reflect the appropriate credentials of the provider delivering the services” — HM for an RBT (“less than a bachelor’s degree level”), HN for a BCaBA, HO for a master’s-level BCBA or licensed mental health provider, HP for a BCBA-D. Its ABA CPT FAQ adds that “Any ABA Supervisor who is credentialed under the group or facility contract can see a member,” and that BCaBAs bill “with the outlined modifiers under your group model.” Neither document says whether the technician’s or the supervisor’s NPI goes in the rendering field.',
        status: 'unverified',
        cites: [{ title: 'Optum — ABA reimbursement policy 2022RP501A (updated June 2026) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' }],
        verifyVia: 'Optum provider services (877-614-0484) or your participation agreement — confirm the rendering-NPI convention for HM-modifier lines before the first claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'The Supplemental Clinical Criteria publish no age limit for ABA. Where a state has its own entry in Optum\'s ABA State Mandates supplement, that entry can import a mandate\'s age terms for fully-insured business \u2014 Maryland\'s entry adopts the COMAR hour floors that run by age band \u2014 but on the national criteria age is a benefits question, decided by the plan and the state of issue.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, and Optum\'s ABA State Mandates supplemental criteria for the state of issue.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No recency rule for the ASD diagnosis is published in the Supplemental Clinical Criteria cited here. The cadence Optum does set is downstream: continued-service reviews land every 4\u20136 months (per account and state law) and require progress documented per targeted behavior using the same measurement methods as baseline, plus updated standardized adaptive measures. Inadequate progress within six months requires documented reasons and a treatment modification.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services, or the step-one assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Optum’s Supplemental Clinical Criteria (annual review April 2026): “A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR.” The diagnosing clinician must confirm and document the diagnosis and severity level with at least one clinically validated tool. LCSW: the criteria do not name licensed clinical social workers either way, so an LCSW qualifies only where state law makes the LCSW qualified to diagnose autism. The credential is submission data: Optum asks for the diagnosing clinician and the confirming instrument at the step-one assessment authorization on Provider Express.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'The strictest named-tool requirement among the national commercial carriers. The diagnosis must be confirmed with at least one clinically validated tool: Optum names first-level instruments \u2014 the ADI-R, the ADOS-2 and the DISCO \u2014 and accepts second-level tools including the CARS-2, the RITA-T and the STAT. Capture which instrument was used, by whom and when; \u201cdiagnosed by Dr. X\u201d with no named tool is the most common reason an Optum assessment request stalls at intake.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No physician referral or order is required by the Supplemental Clinical Criteria. What stands in its place is a two-step authorization through the Provider Express portal: step one authorizes the assessment \u2014 functional behavior assessment, caregiver interviews, direct observation, record review, baseline skills and norm-referenced instruments \u2014 and step two authorizes treatment based on what the assessment produced. Both are required before the corresponding service. Where state law specifies otherwise, the state-specific criteria in Optum\'s ABA State Mandates supplement govern instead of the standard criteria.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth, and neither is the 97151 assessment or the technician-assisted 97152: plan the assessment in person. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.”',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'UnitedHealthcare\'s 2026 Administrative Guide says "We notify you of our coverage decision within the time required by law" and, for commercial prior authorization, lists "Standard requests: up to 15 calendar days" and "Expedited requests: 72 hours" (may be extended for missing information), asking for notification "at least 15 calendar days in advance, if possible," and at least 5 business days before the service. Fully insured plans can be tighter under state utilization-review law; self-funded plans follow ERISA (15 days pre-service, one 15-day extension; 72 hours urgent). For ABA the operative lead time is Optum\'s: request continued services "no more than 30 days prior to the current approvals on file expiring," with all clinical information ready at the call.',
        status: 'plan-dependent',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: '29 CFR § 2560.503-1(f)(2) — ERISA group health plan claim decision deadlines', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: fully insured (state UR deadlines) or self-funded/ASO (ERISA)? Confirm the continued-service window with the Optum ABA line (behavioral health number on the member card).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'UnitedHealthcare: "COB is administered according to the member\'s benefit plan and in accordance with law." Optum puts the check on the provider — "You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first" — and when Optum is secondary "you will be paid up to the Optum contracted rate," with no billing the family for the difference. Neither document states the dependent-child order itself, so the birthday rule applies through state COB law on fully insured plans and through the plan document on self-funded ones. UnitedHealthcare pays ahead of Medicaid (payer of last resort by federal law — the Medicaid program may still require its own PA), TRICARE (secondary to other health insurance by law) and CHAMPVA (pays after other health insurance). To bill a secondary plan when the member has no ABA benefit, Optum\'s FAQ says to call the number on the card to request a denial.',
        status: 'plan-dependent',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial, Exchange, MA) (PDF)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health Solutions National Network Manual (eff. Oct. 1, 2025) (PDF)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/netwManual/2024/NNMJune2024.pdf' },
          { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (updated Jan. 1, 2025) (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
        verifyVia: 'Benefits verification: ask which COB order and secondary-payment method the plan document uses (standard vs maintenance of benefits), and whether the plan is fully insured or self-funded.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Optum require a specific ABA assessment or treatment-plan template?', a: 'No template is published. Optum’s portal review guide (BH00705) lists what the reviewer may ask: supervisor, agency name and Tax ID, hours requested per code (97151, 97152, 0362T, 97153–97158, 0373T), who gave the most recent diagnosis and when, school and IEP details, other services and the schedule, assessments used with scores (for example Vineland, VB-MAPP, ABLLS), severity and goals in the communication, social and behavior domains, and caregiver involvement and proficiency. Clinical updates “should include all areas from the initial plan.” Assessment and reassessment bill only as 97151 and 97152 under Optum’s reimbursement policy.' },
      { q: 'Which UnitedHealthcare phone line and NPI do we use to check ABA eligibility?', a: 'Optum’s National Network Manual (Sept. 2026) says to use the Provider Express secure portal or call “the phone number on the member’s ID card,” and to have the member’s name, address and ID number and the subscriber’s name and date of birth ready. It does not say which NPI a caller must give. 1-877-614-0484 is Optum Provider Services, which the manual uses for network, practice-information and contract questions.' },
      { q: 'Is there an exception to Optum’s three-code ABA telehealth limit?', a: 'None is published. Optum’s telehealth billing guide says “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157,” and gives no exception or exemption process. The provider must be an approved Optum virtual-visits provider and tell the ABA Care Advocate at authorization.' },
      { q: 'Does Optum give single case agreements to out-of-network ABA providers?', a: 'Only by exception. Optum’s ABA CPT FAQ: an SCA is “Not automatically” available, but “In exception cases, based on clinical need, new business implementations, or other gaps in the network, a SCA may be approved after review with the clinical team.”' },
      { q: 'What should a UnitedHealthcare ABA reconsideration include?', a: 'Optum asks for “member-specific treatment plans, clinical records, payment appendices or other items that support why you believe our decision was incorrect,” plus proof of timely filing if that was the denial reason, within 12 months for both steps. UnitedHealthcare asks you to be “detailed in why you feel the payment is not the adjudication outcome you expected.” For an out-of-network rate dispute, UnitedHealthcare prices the claim by the method in the member’s plan (for example a percentage of CMS rates or FAIR Health), so tie your request to that method.' },
      { q: 'Is an Optum ABA authorization tied to the individual BCBA or the group?', a: 'Optum’s National Network Manual says authorizations for non-routine outpatient services such as ABA “are specific to the requesting clinician.” Within the same contracted group, its ABA CPT FAQ lets “Any ABA Supervisor who is credentialed under the group or facility contract” see the member. No transfer to a different agency is published; the new agency requests its own authorization.' },
      { q: 'Can an LCSW diagnose autism for UnitedHealthcare ABA?', a: 'Optum’s criteria accept a diagnosis from “a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis.” LCSWs are not named, so it depends on whether state law makes an LCSW qualified to diagnose autism. The diagnosis must also be confirmed with at least one clinically validated tool such as the ADOS-2.' },
      { q: 'How fast does Optum pay a clean UnitedHealthcare ABA claim?', a: 'Optum’s National Network Manual says complete, authorized claims are generally paid within 45 calendar days after Optum receives them, or faster where state or federal law requires. Claims that need a coordination-of-benefits determination may take longer. No weekly billing cutoff is published.' },
      { q: 'Does UnitedHealthcare/Optum require graphs for ABA reauthorization?', a: 'No graph is required. Optum wants progress on every target measured the same way as the baseline. That means rates and percentages of mastered programs and targets, change scores on outcome and skills-based measures, and updated standardized adaptive (norm-referenced) scores, plus caregiver progress. Reviews ordinarily come every 6 months. Submit the continued-care request no more than 30 days before the current authorization expires.' },
      { q: 'Does UnitedHealthcare / Optum require a referring provider on ABA claims?', a: 'No. Optum\u2019s National Network Manual lists the required claim fields for behavioral health claims without a referring provider, and UnitedHealthcare\u2019s 2026 Administrative Guide only encourages the referring NPI. It is mandatory there only on lab, DME, imaging and home health claims.' },
      { q: 'Does UnitedHealthcare require prior authorization for ABA?', a: 'Yes — a two-step process via Optum\'s Provider Express portal: an assessment authorization first, then a treatment authorization, generally under Optum\'s Supplemental Clinical Criteria unless state law specifies otherwise.' },
      { q: 'How often does Optum review ABA authorizations?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'What happens if a family uses fewer hours than authorized?', a: 'Utilization below 80% of authorized hours over a two-week period draws scrutiny at review. Intake should capture realistic availability so the requested intensity matches what the family can actually attend.' },
      { q: 'Does UnitedHealthcare (Optum) require RBT certification for ABA technicians?', a: 'Optum\'s ABA criteria say technicians "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate," working under BCBA or licensed-clinician supervision. They also advise against a parent serving as the RBT for their own child.' },
      { q: 'Can the ABA assessment be done by telehealth with UnitedHealthcare?', a: 'No, not on commercial plans. Optum\'s telehealth billing guide allows only 97155, 97156 and 97157 by telehealth for ABA, so 97151 and 97152 are delivered in person. Supervision (97155) and caregiver training can be remote once the provider has completed Optum\'s virtual-visits attestation.' },
      { q: 'Can an out-of-state BCBA provide ABA to a UnitedHealthcare member by telehealth?', a: 'Only if licensed where the child is. Optum requires telehealth providers to be licensed in the state where the member is located at the time of service, and to follow the licensing and telehealth laws of both their own state and the member’s.' },
      { q: 'Does Optum allow retro-authorization for ABA?', a: 'Only in emergent or unusual circumstances. A retrospective review must be requested within 180 calendar days of the service (unless state law says otherwise), must explain why prior authorization was not obtained, and is at Optum’s sole discretion. Optum decides within 30 calendar days.' },
      { q: 'What is UnitedHealthcare/Optum’s timely filing limit for ABA claims?', a: '90 calendar days from the date of service under Optum’s National Network Manual, unless state or federal law or the member’s plan allows longer. Corrections should be made within 90 days of the original claim.' },
      { q: 'How long do we have to appeal an Optum ABA claim decision?', a: 'Twelve months in total for both steps (reconsideration, then appeal) on commercial plans, unless state law or your participation agreement sets a different deadline.' },
      { q: 'How long does Optum ABA credentialing take?', a: 'Optum’s ABA CPT FAQ says 45 to 120 days after all materials are submitted, for solo analysts and groups alike. New agencies also need a site audit, which can take up to 90 days to schedule.' },
    ],
  },
  'meritain-health': {
    slug: 'meritain-health',
    cardDesc: 'Aetna-owned TPA for self-funded employer plans — the employer\'s plan document, not Meritain, sets the ABA benefit.',
    family: 'aetna',
    assessmentPA: {
      value: 'Plan-dependent — Meritain tells members to "consult your benefits guide" for which services need precertification; the employer plan sets the list',
      status: 'plan-dependent',
      cites: [
        { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
        { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
      ],
      verifyVia: 'The employer\'s plan document, readable in the Meritain provider portal (account.meritain.com), or Meritain Medical Management at 1-800-242-1199 — ask whether 97151/97152 need precertification on this group.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Plan-dependent — set by the employer\'s plan document and administered by Meritain; ask per group, never per carrier',
      status: 'plan-dependent',
      cites: [
        { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
      ],
      verifyVia: 'The plan document in the Meritain provider portal, or Meritain Medical Management (1-800-242-1199) — ask whether ABA treatment codes need precertification and how requests are submitted for this group.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Plan-dependent — the diagnosis requirement is whatever the sponsor\'s plan document and adopted medical policy say; Meritain publishes no ABA policy of its own that we could find',
      status: 'plan-dependent',
      cites: [
        { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
      ],
      verifyVia: 'The plan document (Meritain provider portal) — ask which medical-necessity criteria the plan applies to ABA and which diagnoses qualify.',
      blocker: 'per-case',
    },
    payer: 'Meritain Health',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Meritain Health',
    h1: 'Meritain Health ABA coverage: the intake guide.',
    metaTitle: 'Meritain Health ABA Coverage — Self-Funded Plans & Prior Auth | Carelu',
    metaDescription:
      'Why a Meritain Health card is not a coverage answer: Meritain administers self-funded employer plans, so the employer\'s plan document decides ABA benefits and precertification, state autism mandates may not reach the plan, and verification runs per employer group.',
    intro: [
      'Meritain Health is a benefits administrator, not an insurer. It calls itself one of the nation\'s largest third-party administrators, a subsidiary of Aetna and CVS Health, serving self-funded employee benefit plans. That changes how intake should read the card: the employer funds the claims and writes the plan, including which services need precertification. The useful questions are which employer sponsors the plan and what that plan document says about ABA, not what Meritain\'s ABA policy is.',
      'Two things follow. A self-funded ERISA plan is not treated as an insurer under state insurance law, so the state autism mandate a family has read about may not reach it. And two Meritain members can have different ABA benefits because they work for different employers. Verify each employer group separately.',
    ],
    atGlance: [
      { label: 'What it is', value: 'Third-party administrator for self-funded employer plans; a subsidiary of Aetna and CVS Health' },
      { label: 'Who sets the benefit', value: 'The employer plan sponsor, in the plan document' },
      { label: 'Precert', value: 'Plan-dependent; Meritain Medical Management 1-800-242-1199' },
      { label: 'State autism mandates', value: 'May not apply; ERISA self-funded plans are not deemed insurers under state law' },
      { label: 'Network', value: 'Sponsor\'s choice; over 90% offer Aetna Choice POS II, others use regional networks' },
      { label: 'Provider line', value: 'Card number, or 1-800-566-9311 (24-hour automated benefits and claims)' },
      { label: 'Eligibility (EDI)', value: 'Optum (formerly Change Healthcare) or SSI; Availity for claim submission only' },
    ],
    sections: [
      {
        h2: 'A TPA card tells you who pays claims, not what is covered',
        cites: [
          { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
          { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
          { title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' },
        ],
        body: [
          'A Meritain card tells you who processes the claim. It does not tell you what is covered. Meritain administers self-funded employee benefit plans, so the benefit design comes from the employer. Meritain\'s own precertification page tells members that "to read more about what services require precertification under your health care benefits plan, consult your benefits guide." Intake should capture the employer name and group number as first-class fields.',
          'The plan document is easier to get than it is on most TPA cards. Meritain\'s provider portal (account.meritain.com) lists "Plan documents" and "Eligibility and benefits" among what a registered provider can view, along with claims history, EOBs, the patient\'s ID card and accumulators. To register you need your tax ID, provider name and address exactly as on the W-9 you submitted, plus your NPI and phone number. For a new ABA family, read the plan document there before quoting coverage.',
        ],
      },
      {
        h2: 'Settle the funding question before quoting a mandate',
        cites: [
          { title: '29 U.S.C. § 1144 — ERISA preemption, including the “deemer” clause at (b)(2)(B)', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleB-part5-sec1144.htm' },
          { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleA-sec1003.htm' },
        ],
        body: [
          'State autism mandates regulate insurance. Under ERISA\'s "deemer" clause, an employee benefit plan "shall [not] be deemed to be an insurance company or other insurer … for purposes of any law of any State purporting to regulate insurance companies, insurance contracts." In practice, a self-funded employer plan is generally outside the state mandate\'s direct reach, so the mandate a family cites for their state may not apply to their plan. Some sponsors still choose to cover ABA and some do not. The plan document is the only answer.',
          'There is one exception to watch for. ERISA "shall not apply" to governmental plans or to most church plans (29 U.S.C. § 1003(b)), so a city, county, school-district or church plan administered by Meritain is not an ERISA plan. Its rules come from its own plan terms and whatever state law reaches it. Ask who the employer is before relying on either framework.',
        ],
      },
      {
        h2: 'The Aetna connection: the network, not the policy',
        cites: [
          { title: 'Meritain Health — Network solutions', url: 'https://www.meritain.com/network-solutions/' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        ],
        body: [
          'Meritain says that "over 90 percent of our plan sponsors choose to offer the Aetna Choice POS II network" and that it is "the only TPA able to offer access to this network." It also offers regional and combined networks, so the network is a sponsor choice too. Confirm which one this group uses before treating an Aetna-participating provider as in network.',
          'Network access is not clinical policy. Aetna\'s ABA precertification form GR-69017-4 (7-26) lists the plans it "applies to": Aetna plans, Innovation Health plans, Allina Health | Aetna and Banner | Aetna. Meritain is not on that list. Do not assume Aetna\'s CPB 0554 criteria or Aetna\'s precert workflow govern a Meritain member unless the plan says so.',
        ],
      },
      {
        h2: 'Running eligibility on a Meritain card',
        cites: [
          { title: 'Meritain Health — Electronic transaction vendors', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-electronic-transaction-vendors/' },
          { title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' },
        ],
        body: [
          'Meritain\'s clearinghouse table lists which vendors handle which transactions. Optum (formerly Change Healthcare) and SSI (ClaimsNet) handle eligibility, claim status and claim submission. Availity handles claims submission only. An eligibility check routed through Availity is therefore the wrong channel for Meritain. For a person, call the toll-free number on the back of the patient\'s ID card, or 1-800-566-9311 for 24-hour automated benefits and claims information.',
        ],
      },
    ],
    collect: [
      { title: 'Employer name and group number', desc: 'The benefit lives in the employer\'s plan document. Without the group, a Meritain benefit check has nothing to look up.' },
      { title: 'Plan type', desc: 'Self-funded ERISA, governmental or church plan? This decides whether ERISA\'s timelines and the state mandate apply. Never quote a mandate before this is known.' },
      { title: 'The plan document\'s ABA terms', desc: 'Coverage, precertification, hour or dollar limits and any age limit, read from the plan document in the Meritain provider portal.' },
      { title: 'Which network the group uses', desc: 'Most sponsors use Aetna Choice POS II, but some use regional networks. Confirm before treating Aetna participation as in network.' },
      { title: 'Member ID, card photo and the card\'s phone numbers', desc: 'Meritain tells providers to call the number on the back of the ID card, and the precertification number is often printed there too.' },
      { title: 'Other coverage', desc: 'The other parent\'s plan, Medicaid, TRICARE or CHAMPVA. The plan document\'s order-of-benefits terms and federal payer-order rules decide who pays first.' },
    ],
    sources: [
      { title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' },
      { title: 'Meritain Health — For providers (provider portal)', url: 'https://www.meritain.com/resources-for-providers-meritain-health-provider-portal/' },
      { title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' },
      { title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' },
      { title: 'Meritain Health — Network solutions', url: 'https://www.meritain.com/network-solutions/' },
      { title: 'Meritain Health — Electronic transaction vendors', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-electronic-transaction-vendors/' },
      { title: '29 U.S.C. § 1144 — ERISA preemption', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleB-part5-sec1144.htm' },
      { title: '29 CFR § 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
      { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleA-sec1003.htm' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
      { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
      { title: 'VA — CHAMPVA Guidebook (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Nothing Meritain publishes sets a supervision requirement for ABA. Supervision terms come from the medical policy the plan sponsor adopts and the plan document, and they can differ between Meritain groups.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — About us (self-funded employee benefit plans)', url: 'https://www.meritain.com/about-us/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) or the plan document in the provider portal — ask which ABA medical policy the group applies and what it requires of BCBA supervision.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not published by Meritain. Whether 97153 and 97155 may be billed for the same clock time depends on the plan\'s adopted payment and claim-editing rules.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'The number on the back of the member\'s ID card — ask specifically whether 97153 and 97155 may overlap and which claim-editing rules the group uses.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published by Meritain. Any hour, visit or dollar limit on ABA is written into the employer\'s plan document.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'The plan document and accumulators in the Meritain provider portal — read any ABA limit and how much of it has already been used.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published by Meritain. Documentation standards for ABA session notes are set by the plan\'s adopted medical policy and provider agreement.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'The number on the member\'s ID card — ask which documentation standard applies at audit for this group.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not published by Meritain. Whether home, clinic, school or telehealth ABA is payable is a plan-document question for each employer group.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Provider services', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-provider-services/' }],
        verifyVia: 'Benefits verification on the specific group — ask which places of service are payable for ABA and whether school-based delivery is excluded.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Not published by Meritain. Whose NPI carries a technician-delivered 97153 claim, and which modifiers are required, depends on the network contract and the plan\'s billing rules.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Electronic transaction vendors', url: 'https://www.meritain.com/about-us-self-funded-employee-benefit-plans/meritain-health-electronic-transaction-vendors/' }],
        verifyVia: 'The number on the member\'s ID card, plus the network the group uses (Aetna Choice POS II or a regional network) — confirm rendering-versus-billing NPI and modifiers before the first claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Set by the plan document. Because a self-funded ERISA plan is generally outside state insurance mandates, a mandate\'s age band may not apply. A governmental or church plan is outside ERISA and has to be checked on its own terms.',
        status: 'plan-dependent',
        cites: [
          { title: '29 U.S.C. § 1144 — ERISA preemption', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleB-part5-sec1144.htm' },
          { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleA-sec1003.htm' },
        ],
        verifyVia: 'The plan document in the Meritain provider portal — read any ABA age limit directly.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published by Meritain. Any rule on how recent the diagnostic evaluation must be comes from the medical policy the plan adopts.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) — ask whether an evaluation of this age is accepted before booking the assessment.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not published by Meritain. Which credentials may make the ASD diagnosis depends on the plan\'s adopted ABA criteria. LCSW: no Meritain answer is published; ask whether the group’s ABA criteria accept an LCSW’s diagnosis.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) — ask which diagnosing credentials the group\'s ABA criteria accept.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not published by Meritain. Whether a named instrument (ADOS-2 or similar) is required depends on the plan\'s adopted criteria. Collect the instrument, date and score anyway.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'Meritain Medical Management (1-800-242-1199) — ask whether a specific diagnostic instrument is required for this group.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Plan-dependent. Meritain\'s precertification guidance says the provider calls to precertify, reviewers check the treatment plan "against standard quality of care guidelines," and members should "consult your benefits guide" for which services need it. Whether ABA needs a physician referral or order, precertification, or neither is set by the group\'s plan. Medical Management: 1-800-242-1199.',
        status: 'plan-dependent',
        cites: [{ title: 'Meritain Health — What is precertification and why do I need it?', url: 'https://www.meritain.com/what-is-precertification-and-why-do-i-need-it/' }],
        verifyVia: 'The plan document in the provider portal, or Meritain Medical Management (1-800-242-1199) — ask whether ABA needs a referral, an order or precertification for this group.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Not published by Meritain for ABA. Meritain\'s network page names telehealth among the care options on its Aetna networks, but whether any ABA code is payable by telehealth is a plan-document question.',
        status: 'unverified',
        cites: [{ title: 'Meritain Health — Network solutions', url: 'https://www.meritain.com/network-solutions/' }],
        verifyVia: 'Benefits verification on the specific group — ask which ABA codes, if any, are payable by telehealth and with which place-of-service code or modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Meritain publishes no decision clock, so the governing law decides. For a self-funded ERISA plan, a pre-service claim is decided "not later than 15 days after receipt of the claim by the plan." That can be extended once "for up to 15 days" for matters beyond the plan\'s control. Urgent care is decided within "72 hours after receipt of the claim." Governmental and church plans are outside ERISA and follow their own plan terms.',
        status: 'plan-dependent',
        cites: [
          { title: '29 CFR § 2560.503-1 — ERISA claims procedure (decision deadlines)', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' },
          { title: '29 U.S.C. § 1003 — ERISA coverage and exceptions (governmental and church plans)', url: 'https://www.govinfo.gov/content/pkg/USCODE-2024-title29/html/USCODE-2024-title29-chap18-subchapI-subtitleA-sec1003.htm' },
        ],
        verifyVia: 'Benefits verification: confirm the plan type (ERISA, governmental or church), and ask Meritain Medical Management how early a continued-service request may be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Between two commercial plans, including the birthday rule for a child covered by both parents, the order comes from the plan document\'s coordination-of-benefits terms, which Meritain administers but does not publish. Three federal rules hold regardless. Medicaid pays after other coverage: when third-party liability is established, the state "must reject the claim and return it to the provider." Congress intended "TRICARE be the secondary payer to all health benefit, insurance and third-party payer plans." CHAMPVA pays first only against Medicaid, IHS, state victims-of-crime programs and CHAMPVA supplements; otherwise "CHAMPVA will pay secondary."',
        status: 'plan-dependent',
        cites: [
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
          { title: 'VA — CHAMPVA Guidebook (PDF)', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
        verifyVia: 'The plan document\'s coordination-of-benefits section (Meritain provider portal), or the number on the ID card — ask the order-of-benefits rule for dependent children and the secondary-payment method.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Meritain Health cover ABA therapy?', a: 'It depends on the employer. Meritain administers self-funded employer plans, so the employer\'s plan document decides whether ABA is covered and whether it needs precertification. Meritain\'s own guidance tells members to consult their benefits guide. Registered providers can read the plan document in Meritain\'s provider portal.' },
      { q: 'Is Meritain Health the same as Aetna?', a: 'No. Meritain is a subsidiary of Aetna and CVS Health, and most of its plan sponsors (over 90%, per Meritain) use the Aetna Choice POS II network. It administers employer-funded plans rather than insuring them, though, and Aetna\'s ABA precertification form does not list Meritain among the plans it applies to. Confirm the group\'s medical policy rather than assuming Aetna\'s.' },
      { q: 'Does my state\'s autism mandate apply to a Meritain plan?', a: 'Often not directly. State autism mandates regulate insurance, and ERISA says a self-funded employer plan is not deemed an insurer for purposes of state insurance law. Governmental and church plans are outside ERISA and have to be checked separately. Find out the plan type before relying on a mandate.' },
    ],
  },

  'asr-health-benefits': {
    slug: 'asr-health-benefits',
    payer: 'ASR Health Benefits',
    state: 'US',
    kind: 'commercial',
    cardDesc:
      'Administrator of employer-funded health plans; verify ABA benefits for the employer group.',
    pill: 'Payer Guide - ASR Health Benefits',
    h1: 'ASR Health Benefits ABA coverage: the intake guide.',
    metaTitle:
      'ASR Health Benefits ABA Coverage - Employer Plans and Prior Auth',
    metaDescription:
      'Verify ASR Health Benefits ABA coverage by employer group, collect the plan document, and confirm diagnosis and prior-authorization requirements with ASR.',
    assessmentPA: {
      value:
        'Plan-dependent - confirm whether ABA assessment requires prior authorization for this employer group.',
      status: 'plan-dependent',
      cites: [
        {
          title: 'ASR Health Benefits - About Us',
          url: 'https://www.asrhealthbenefits.com/about-us/',
        },
        {
          title: 'ASR Health Benefits - Contact Us',
          url: 'https://www.asrhealthbenefits.com/contact-us/',
        },
      ],
      verifyVia:
        'Obtain the employer group plan document and confirm its ABA requirements with ASR Claims Department at (800) 968-2449 or (616) 957-1751.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value:
        'Plan-dependent - confirm whether ABA treatment requires prior authorization and who handles requests for this employer group.',
      status: 'plan-dependent',
      cites: [
        {
          title: 'ASR Health Benefits - About Us',
          url: 'https://www.asrhealthbenefits.com/about-us/',
        },
        {
          title: 'ASR Health Benefits - Contact Us',
          url: 'https://www.asrhealthbenefits.com/contact-us/',
        },
      ],
      verifyVia:
        'Obtain the employer group plan document and confirm its ABA requirements with ASR Claims Department at (800) 968-2449 or (616) 957-1751.',
      blocker: 'per-case',
    },
    dxRequired: {
      value:
        'Plan-dependent - the employer plan document and adopted medical policy determine the diagnosis requirement.',
      status: 'plan-dependent',
      cites: [
        {
          title: 'ASR Health Benefits - About Us',
          url: 'https://www.asrhealthbenefits.com/about-us/',
        },
        {
          title: 'ASR Health Benefits - Contact Us',
          url: 'https://www.asrhealthbenefits.com/contact-us/',
        },
      ],
      verifyVia:
        'Obtain the employer group plan document and confirm its ABA requirements with ASR Claims Department at (800) 968-2449 or (616) 957-1751.',
      blocker: 'per-case',
    },
    intro: [
      'ASR Health Benefits administers employer-funded health plans. In May 2026 it announced its new name, Health Alliance TPA by Henry Ford Health. The announcement says the name change does not change member coverage, benefits or provider networks. This guide keeps the ASR Health Benefits name used on existing cards and payer records.',
      'Verify ABA benefits for the specific employer group. The administrator name or network logo alone does not establish coverage, medical-necessity criteria or prior-authorization requirements.',
    ],
    atGlance: [
      {
        label: 'Administrator',
        value:
          'ASR Health Benefits; rebranding as Health Alliance TPA by Henry Ford Health',
      },
      {
        label: 'Provider claims and benefits',
        value: 'Claims Department: (800) 968-2449 / (616) 957-1751',
      },
      {
        label: 'ABA coverage and prior authorization',
        value:
          'Plan-dependent; confirm against the employer group plan document',
      },
    ],
    sections: [
      {
        h2: 'Start with the employer group',
        body: [
          'Collect the employer name and group number, then obtain the plan document. Confirm whether ABA is covered, which diagnoses qualify, and whether assessment and treatment need separate authorization. Record any age, hour, visit or dollar limits for this group.',
        ],
        cites: [
          {
            title: 'ASR Health Benefits - About Us',
            url: 'https://www.asrhealthbenefits.com/about-us/',
          },
          {
            title: 'ASR Health Benefits - Contact Us',
            url: 'https://www.asrhealthbenefits.com/contact-us/',
          },
        ],
      },
      {
        h2: 'Provider claims and benefits questions',
        body: [
          'ASR lists its Claims Department for provider claims or benefits questions: (800) 968-2449 or (616) 957-1751. These are not verified prior-authorization numbers. Ask which department or vendor handles ABA authorization for this employer group.',
          'Hours and portal: ASR’s contact page gives business hours of “8:00 a.m. to 4:30 p.m. EST” and a claims mailing address of ASR Health Benefits, PO Box 6392, Grand Rapids, MI 49516-6392. Its provider page lists two online features, “Verify Eligibility” and “Claims Inquiry,” behind a provider log-in at asrhealthbenefits.com. Providers without a log-in complete ASR’s request form on the same page.',
          'Authorization: ASR publishes no ABA policy or ABA authorization contact. Its medical cost-management page describes a Care Review program in which “Pre-certification is used to evaluate each employee’s treatment plan and the employee’s need for inpatient or outpatient care,” combining “medical expertise with nationally recognized criteria and treatment guidelines.” It does not name the criteria. Whether a group puts ABA through that pre-certification, and which criteria apply, comes from the employer’s plan document. Ask the Claims Department for the group.',
        ],
        cites: [
          {
            title: 'ASR Health Benefits - Contact Us',
            url: 'https://www.asrhealthbenefits.com/contact-us/',
          },
          {
            title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)',
            url: 'https://www.asrhealthbenefits.com/providers/',
          },
          {
            title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)',
            url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/',
          },
        ],
      },
      {
        h2: 'Confirm the network separately',
        body: [
          'ASR lists multiple provider networks. Confirm the network printed on the member card and participation for this plan; network participation does not establish which ABA policy the employer group uses.',
        ],
        cites: [
          {
            title: 'ASR Health Benefits - Home',
            url: 'https://www.asrhealthbenefits.com/',
          },
        ],
      },
    ],
    collect: [
      {
        title: 'Employer name and group number',
        desc: 'Use both to identify the employer plan whose ABA benefits must be checked.',
      },
      {
        title: 'Member ID and both sides of the card',
        desc: 'Capture the administrator, network and plan-specific contact details.',
      },
      {
        title: 'Plan document and ABA terms',
        desc: 'Obtain coverage, diagnosis, referral, prior-authorization, age and service-limit requirements for this employer group.',
      },
      {
        title: 'Plan funding and other coverage',
        desc: 'Confirm plan type and other insurance before relying on state coverage rules or deciding payer order.',
      },
    ],
    sources: [
      {
        title: 'ASR Health Benefits - About Us',
        url: 'https://www.asrhealthbenefits.com/about-us/',
      },
      {
        title: 'ASR Health Benefits - Contact Us',
        url: 'https://www.asrhealthbenefits.com/contact-us/',
      },
      {
        title:
          'ASR Health Benefits rebrands as Health Alliance TPA by Henry Ford Health',
        url: 'https://www.hap.org/news/2026/05/asr-health-benefits-rebrands-as-health-alliance-tpa-by-henry-ford-health',
      },
      {
        title: 'ASR Health Benefits - Home',
        url: 'https://www.asrhealthbenefits.com/',
      },
      {
        title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)',
        url: 'https://www.asrhealthbenefits.com/providers/',
      },
      {
        title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)',
        url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/',
      },
      { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. Any supervision requirement comes from the employer plan’s adopted criteria and state law.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: which ABA criteria the group uses and what supervision they require.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No rule on billing 97153 and 97155 for the same time is published.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: whether 97153 and 97155 may be billed for the same clock time on this plan.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No ABA unit or hour limit is published; any limit is in the group’s plan document.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: any daily, weekly, visit or dollar limit on ABA for this group.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No session-note standard is published.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: what documentation the group’s reviewers require on ABA session notes.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No place-of-service rule for ABA is published.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: which places of service are payable for ABA, including home and school.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No rule on whose NPI goes on technician-delivered ABA lines is published.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: whether technician services bill under the supervising BCBA and which modifiers are required.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      diagnosingProviders: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. Which credentials may make the ASD diagnosis is set by the group’s plan document. LCSW: no published answer.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: which diagnosing credentials the plan accepts, including whether an LCSW diagnosis counts.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No required diagnostic instrument is published.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: whether a specific instrument (ADOS-2 or similar) is required.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. No ABA telehealth rule is published.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: which ABA codes the plan pays by telehealth and which POS and modifier to use.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'ASR’s Care Review program says “Pre-certification is used to evaluate each employee’s treatment plan and the employee’s need for inpatient or outpatient care,” but ASR publishes no decision time frame. ASR administers employer-funded plans, so the plan document sets the review clock.',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: 'ASR Health Benefits - Medical Cost Management (Care Review pre-certification)', url: 'https://www.asrhealthbenefits.com/products-and-services/self-funded-health-plans/medical-cost-management/' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: whether ABA goes through Care Review pre-certification and how long a decision takes.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'ASR publishes no ABA policy; its provider and medical cost-management pages (read 2026-10-25) do not mention ABA or autism. The order of benefits is set by the plan document. If the child also has Medicaid, Medicaid pays last under federal law (42 CFR § 433.139).',
        status: 'plan-dependent',
        cites: [{ title: 'ASR Health Benefits - Providers (provider log-in: Verify Eligibility, Claims Inquiry)', url: 'https://www.asrhealthbenefits.com/providers/' }, { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' }],
        verifyVia: 'The employer group’s plan document, and ASR’s Claims Department at (800) 968-2449 or (616) 957-1751 (8:00 a.m.–4:30 p.m. EST). Ask: how the plan coordinates with other coverage and whether it pays primary.',
        blocker: 'per-case',
      },
      ageLimit: {
        value:
          'Plan-dependent - confirm any age limit in the employer plan document.',
        status: 'plan-dependent',
        cites: [
          {
            title: 'ASR Health Benefits - About Us',
            url: 'https://www.asrhealthbenefits.com/about-us/',
          },
          {
            title: 'ASR Health Benefits - Contact Us',
            url: 'https://www.asrhealthbenefits.com/contact-us/',
          },
        ],
        verifyVia:
          'Obtain the employer group plan document and confirm its ABA requirements with ASR Claims Department at (800) 968-2449 or (616) 957-1751.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Diagnosis recency has not been verified.',
        status: 'unverified',
        cites: [
          {
            title: 'ASR Health Benefits - About Us',
            url: 'https://www.asrhealthbenefits.com/about-us/',
          },
          {
            title: 'ASR Health Benefits - Contact Us',
            url: 'https://www.asrhealthbenefits.com/contact-us/',
          },
        ],
        verifyVia:
          'Ask ASR for the diagnosis recency requirement and the applicable group plan criteria.',
        blocker: 'document',
      },
      referral: {
        value:
          'Plan-dependent - confirm whether this employer group requires a physician referral or order for ABA.',
        status: 'plan-dependent',
        cites: [
          {
            title: 'ASR Health Benefits - About Us',
            url: 'https://www.asrhealthbenefits.com/about-us/',
          },
          {
            title: 'ASR Health Benefits - Contact Us',
            url: 'https://www.asrhealthbenefits.com/contact-us/',
          },
        ],
        verifyVia:
          'Obtain the employer group plan document and confirm its ABA requirements with ASR Claims Department at (800) 968-2449 or (616) 957-1751.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'How do providers check ASR eligibility and who handles ABA authorization?', a: 'Use the provider log-in at asrhealthbenefits.com for Verify Eligibility and Claims Inquiry, or call the Claims Department at (800) 968-2449 between 8:00 a.m. and 4:30 p.m. Eastern. ASR publishes no ABA policy. Its Care Review pre-certification uses unnamed “nationally recognized criteria,” and the employer’s plan document decides whether ABA goes through it.' },
      {
        q: 'Does ASR Health Benefits cover ABA?',
        a: 'Coverage depends on the employer group plan. Obtain its plan document and confirm ABA coverage, diagnosis requirements and authorization before scheduling services.',
      },
      {
        q: 'Is Health Alliance TPA the same administrator as ASR Health Benefits?',
        a: 'ASR announced its rebrand to Health Alliance TPA by Henry Ford Health in May 2026. The announcement says member coverage, benefits and provider networks are unchanged by the name change.',
      },
    ],
  },
  'humana': {
    slug: 'humana',
    cardDesc: 'Humana finished leaving employer group medical in 2025 — route a bare "Humana" card to Medicaid, Medicare Advantage or TRICARE East first.',
    family: 'humana',
    assessmentPA: {
      value: 'Depends on the Humana line — Healthy Horizons Medicaid plans set PA by state; ABA codes are not on Humana\'s Medicare Advantage/D-SNP PA list (eff. 7/1/2026); TRICARE East runs through Humana Military',
      status: 'plan-dependent',
      cites: [
        { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
        { title: 'Humana — Prior authorization lists (provider page)', url: 'https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists' },
      ],
      verifyVia: 'Identify the line of business from the card, then use the matching guide: the state Healthy Horizons guide, the TRICARE East (Humana Military) guide, or, for Medicare Advantage, Humana provider services via Availity to confirm ABA is a covered benefit at all.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Depends on the Humana line — state-specific for Healthy Horizons Medicaid; not on the Medicare Advantage/D-SNP PA list; TRICARE East under Humana Military',
      status: 'plan-dependent',
      cites: [
        { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
        { title: 'Humana — Prior authorization lists (provider page)', url: 'https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists' },
      ],
      verifyVia: 'Route by line of business first; the state Healthy Horizons PA list or the TRICARE East guide carries the operative rule.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Line-of-business dependent — Humana\'s medical coverage policy library carries ABA policies only for Medicaid (Oklahoma, South Carolina, Louisiana); no national or Medicare Advantage ABA policy is published',
      status: 'plan-dependent',
      cites: [
        { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
      ],
      verifyVia: 'The state Healthy Horizons guide for a Medicaid member; for any other Humana line, ask Humana provider services which criteria govern ABA on that plan.',
      blocker: 'per-case',
    },
    payer: 'Humana',
    state: 'US', kind: 'commercial',
    pill: 'Payer Guide · Humana',
    h1: 'Humana ABA coverage: which Humana is this?',
    metaTitle: 'Humana ABA Coverage & Prior Auth — Which Humana Plan Is It? | Carelu',
    metaDescription:
      'Humana finished exiting employer group commercial medical coverage in 2025. A Humana card on a child today usually means Medicaid (Healthy Horizons), Medicare Advantage, or TRICARE East via Humana Military. How intake should route a bare Humana card.',
    intro: [
      'A card that just says "Humana" no longer means what it used to. On Feb. 23, 2023, Humana announced it was leaving the Employer Group Commercial Medical Products business, "which includes all fully insured, self-funded and Federal Employee Health Benefit medical plans," phased over 18 to 24 months. Its FY2025 10-K confirms that "during 2025, we finalized our exit." So the first intake question on a Humana card is which Humana plan this is, not what Humana covers.',
      'What remains, per the 10-K: Medicare (individual and group Medicare Advantage, stand-alone drug plans, Medicare Supplement); Medicaid through state-based contracts; the military business, chiefly the TRICARE East Region contract; and specialty dental, vision, life and disability benefits. Each line handles ABA differently. This guide is the router for them.',
    ],
    atGlance: [
      { label: 'Employer group medical', value: 'Gone — exit announced Feb. 2023, finalized during 2025 (fully insured, self-funded and FEHB)' },
      { label: 'Remaining lines', value: 'Medicare Advantage, Medicare Supplement/PDP, Medicaid (state contracts), TRICARE East, specialty' },
      { label: 'Medicaid states (10-K)', value: 'FL, KY, IL, IN, LA, OH, OK, SC, VA, WI' },
      { label: 'Medicare Advantage PA list', value: 'No ABA codes (eff. 7/1/2026, rev. 9/1/2026)' },
      { label: 'ABA medical policy', value: 'Medicaid only (OK, SC, LA); no national or MA ABA policy' },
      { label: 'TRICARE East', value: 'Humana Military, T-5 contract since 1/1/2025 — use the TRICARE East guide' },
    ],
    sections: [
      {
        h2: 'Who a "Humana commercial" card actually belongs to now',
        cites: [
          { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
          { title: 'Humana — Humana to Exit Employer Group Commercial Medical Products Business (Feb. 23, 2023)', url: 'https://humana.gcs-web.com/news-releases/news-release-details/humana-exit-employer-group-commercial-medical-products-business' },
          { title: 'Humana — Commercial Summary of Medical Preauthorization and Notification List Changes (last updated Nov. 5, 2024) (PDF)', url: 'https://assets.humana.com/is/content/humana/Commercial%20SOCpdf' },
        ],
        body: [
          'In Humana\'s FY2025 10-K, the medical membership table has columns for individual and group Medicare Advantage, stand-alone PDP, Medicare Supplement, state-based contracts and military services. There is no commercial medical column. The only employer products Humana still lists are specialty ones: "dental, vision, life and disability to employer groups." A family that says their child has Humana through a parent\'s employer is therefore describing one of three things: a specialty card (dental or vision, which carries no ABA benefit), a group Medicare Advantage retiree card, or a card from a plan the employer has since moved to another carrier. Ask for the family\'s current medical card before running anything.',
          'Claims from the wind-down years can still come up. On Humana\'s last commercial list, ABA codes 97151–97158, 0362T and 0373T (with H0031, H0032, H2012, H2019 and 90889) were "removed from the preauthorization list eff. Aug. 9, 2024." Humana\'s provider site posts no commercial prior-authorization list after July 2024.',
        ],
      },
      {
        h2: 'Route by line of business',
        cites: [
          { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
          { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
          { title: 'Humana Military — Applied Behavior Analysis (ABA) provider FAQ (PDF)', url: 'https://assets.humana.com/is/content/humana/aba-provider-faqpdf-1' },
        ],
        body: [
          'Medicaid (Humana Healthy Horizons) is the most likely match for a child. The 10-K names Medicaid contracts in "Florida, Kentucky, Illinois, Indiana, Louisiana, Ohio, Oklahoma, South Carolina, Virginia and Wisconsin." Each is a state contract with its own ABA policy and PA list, so never read one state\'s rules across to another. This directory has Healthy Horizons guides for Florida, Ohio, Oklahoma and Virginia. Humana\'s medical coverage policy library carries its own ABA policies for Oklahoma, South Carolina and Louisiana Medicaid.',
          'TRICARE East is a different payer. Humana Military administers the T-5 East Region contract, which "commenced on January 1, 2025 and comprises 24 states, and Washington D.C." ABA there runs under the TRICARE Autism Care Demonstration, so use the TRICARE East (Humana Military) guide, not this one.',
          'Medicare Advantage covers people 65 and over and "some disabled persons under the age of 65," so it is rare on a child. Humana\'s coverage policy library lists no Medicare Advantage ABA policy.',
        ],
      },
      {
        h2: 'Medicare Advantage and D-SNP: what the PA list says',
        cites: [
          { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
        ],
        body: [
          'Humana\'s Medicare Advantage and D-SNP prior authorization list (effective July 1, 2026, revised Sept. 1, 2026) has a behavioral health category with two entries: partial hospitalization and transcranial magnetic stimulation. No ABA code (97151–97158, 0362T, 0373T) appears on it. That tells you ABA is not on the PA list. It does not tell you ABA is a covered Medicare Advantage benefit. The list itself says "certain services may not be covered under the member\'s plan" and points to an Advance Coverage Determination for services whose coverage is uncertain. It also notes that, from Jan. 1, 2026, CMS requires prior authorization decisions within 7 days for certain medical items and services.',
        ],
      },
      {
        h2: 'Will Humana authorize ABA retroactively?',
        cites: [
          { title: 'Humana — 2026 Provider Manual for physicians, hospitals and healthcare providers (773902ALL0725-A) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_773902ALL0725-A_2026_ProviderManual-Delegated_formattedpdf' },
        ],
        body: [
          'Humana’s 2026 Provider Manual sets the general rule. Prior authorization requests “should be made as soon as possible but at least 14 days in advance of the service date.” “If prior authorization is required and not obtained, it may result in reduction or denial of payment. Services provided without prior authorization also may be subject to retrospective review,” with clinical information supplied for a medical-necessity review. But “Elective ambulatory or inpatient services on Humana’s Prior Authorization and Notification List for which precertification did not occur before providing the service are not eligible for retrospective review.” Whether that bites for ABA depends on the line of business: check the PA list for the member’s plan, and for a Healthy Horizons Medicaid member use the state guide.',
        ],
      },
    ],
    collect: [
      { title: 'The product name on the card, verbatim', desc: '"Healthy Horizons" means a state Medicaid plan, a Medicare Advantage product name means Medicare, and a TRICARE marking means Humana Military. The bare word "Humana" is not enough to route.' },
      { title: 'State of residence', desc: 'Decides which Healthy Horizons contract and policy apply. Humana\'s Medicaid ABA rules are state-specific.' },
      { title: 'Whether the card is medical or specialty', desc: 'Humana still sells dental, vision, life and disability to employers. A specialty card carries no ABA benefit.' },
      { title: 'Where the coverage came from', desc: 'If the family says an employer, ask for the current medical card. Humana finished leaving employer group medical coverage in 2025.' },
      { title: 'Member ID and date of birth', desc: 'Needed for eligibility on whichever line the card turns out to be.' },
    ],
    sources: [
      { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
      { title: 'Humana — Humana to Exit Employer Group Commercial Medical Products Business (Feb. 23, 2023)', url: 'https://humana.gcs-web.com/news-releases/news-release-details/humana-exit-employer-group-commercial-medical-products-business' },
      { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
      { title: 'Humana — Prior authorization lists (provider page)', url: 'https://provider.humana.com/coverage-claims/prior-authorizations/prior-authorization-lists' },
      { title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' },
      { title: 'Humana — Commercial Summary of Medical Preauthorization and Notification List Changes (last updated Nov. 5, 2024) (PDF)', url: 'https://assets.humana.com/is/content/humana/Commercial%20SOCpdf' },
      { title: 'Humana — 2026 Provider Manual for physicians, hospitals and healthcare providers (773902ALL0725-A) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_773902ALL0725-A_2026_ProviderManual-Delegated_formattedpdf' },
      { title: 'Humana Military — Applied Behavior Analysis (ABA) provider FAQ (PDF)', url: 'https://assets.humana.com/is/content/humana/aba-provider-faqpdf-1' },
      { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
      { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
      { title: 'Humana — Provider publications (Humana Physician News, quarterly)', url: 'https://provider.humana.com/working-with-us/publications' },
      { title: 'TRICARE Operations Manual 6010.62-M (2021 ed.), Ch. 18 Sec. 3 — Autism Care Demonstration (Revision C-57, Jun 24, 2026)', url: 'https://manuals.dha.mil/View-Publication/TOT5/Revision/66/FileName/C18S3' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Humana publishes no national ABA supervision rule. Its coverage-policy library has ABA policies only for Oklahoma, South Carolina and Louisiana Medicaid, and those are state policies that must not be read across. Supervision rules come from the line of business: the state Healthy Horizons policy, or TRICARE for Humana Military.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'Route to the state Healthy Horizons guide or the TRICARE East guide once the line of business is known.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'No national Humana rule. Whether 97153 and 97155 may overlap is set by the state Medicaid program for Healthy Horizons members, or by TRICARE for Humana Military.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No national Humana rule. Unit ceilings come from the state Medicaid fee schedule and PA for Healthy Horizons members, or from TRICARE for Humana Military.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'No national Humana rule. Documentation standards follow the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'No national Humana rule. Payable settings follow the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No national Humana rule. Rendering-versus-billing NPI conventions follow the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Depends on the line. Healthy Horizons Medicaid follows the state\'s program. TRICARE follows the Autism Care Demonstration. Medicare Advantage covers people 65 and over and "some disabled persons under the age of 65," so it is rarely a child\'s plan. There is no national Humana age rule.',
        status: 'plan-dependent',
        cites: [
          { title: 'Humana Inc. — Form 10-K for fiscal year 2025 (SEC EDGAR)', url: 'https://www.sec.gov/Archives/edgar/data/49071/000004907126000009/hum-20251231.htm' },
          { title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' },
        ],
        verifyVia: 'Route by line of business, then read the age rule in the state Healthy Horizons guide or the TRICARE East guide.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No national Humana rule. Recency requirements are set by the state Medicaid ABA policy or by TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'No national Humana rule. Who may diagnose is set by the state Medicaid ABA policy or by TRICARE\'s ASD-diagnosing-provider rules. LCSW: no national Humana answer; check the state Medicaid guide, and note TRICARE does not accept an LCSW as an ASD diagnosing provider.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }, { title: 'TRICARE Operations Manual 6010.62-M (2021 ed.), Ch. 18 Sec. 3 — Autism Care Demonstration (Revision C-57, Jun 24, 2026)', url: 'https://manuals.dha.mil/View-Publication/TOT5/Revision/66/FileName/C18S3' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No national Humana rule. Required instruments are set by the state Medicaid ABA policy or by TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      referral: {
        value: 'Depends on the line. On Medicare Advantage HMO and PPO plans "the full list of prior authorization requirements applies," but no ABA code is on that list (eff. 7/1/2026). Medicaid referral and PA rules are state-specific, and TRICARE East follows TRICARE\'s rules through Humana Military.',
        status: 'plan-dependent',
        cites: [{ title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' }],
        verifyVia: 'Route by line of business; the state Healthy Horizons guide or the TRICARE East guide carries the referral rule.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'No national Humana rule. Telehealth ABA follows the state Medicaid program or TRICARE.',
        status: 'unverified',
        cites: [{ title: 'Humana — Medical Coverage Policies library, keyword search "behavior" (read 2026-10-07)', url: 'https://mcp.humana.com/tad/tad_new/Search.aspx?criteria=behavior&searchtype=freetext&policyType=medical' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East).',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Depends on the line. For Medicare Advantage, Humana\'s PA list notes that "effective Jan. 1, 2026, CMS requires prior authorization decisions within 7 days for certain medical items/services requests." Medicaid decision clocks are set by each state contract, and TRICARE by its own rules.',
        status: 'plan-dependent',
        cites: [{ title: 'Humana — Medicare Advantage and D-SNP Prior Authorization and Notification List (eff. 7/1/2026, rev. 9/1/2026) (PDF)', url: 'https://assets.humana.com/is/content/humana/FINAL_Medicare%20and%20DSNP%20Prior%20Authorization%20and%20Notification%20List%20-%207-1-2026pdf' }],
        verifyVia: 'The line-of-business guide (state Healthy Horizons or TRICARE East) for the decision clock that applies.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Depends on which Humana line is involved. Two federal rules decide most cases. A Healthy Horizons Medicaid plan pays after any other coverage: where third-party liability is established, the state "must reject the claim and return it to the provider." TRICARE, including TRICARE East via Humana Military, is intended to "be the secondary payer to all health benefit, insurance and third-party payer plans." Get the other plan\'s card before billing Humana.',
        status: 'plan-dependent',
        cites: [
          { title: '42 CFR § 433.139 — Medicaid payment of claims involving third party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR § 199.8 — TRICARE double coverage', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/part-199/section-199.8' },
        ],
        verifyVia: 'Benefits verification on each plan the child holds; confirm which is primary before the first claim.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Humana cover ABA therapy?', a: 'It depends on which Humana plan the child is on. Humana finished leaving employer group medical coverage in 2025. Its remaining lines are Medicaid (Healthy Horizons, state by state), Medicare Advantage, and TRICARE East via Humana Military, and each handles ABA under its own rules. Identify the line first.' },
      { q: 'Can my child still have Humana through a parent\'s employer?', a: 'Not as a medical plan. Humana announced in Feb. 2023 that it was leaving all employer group commercial medical products (fully insured, self-funded and FEHB) and finalized the exit during 2025. Humana still sells dental, vision, life and disability to employers, so an employer-issued Humana card today is most likely a specialty card with no ABA benefit. Ask for the family\'s current medical card.' },
      { q: 'Is Humana Healthy Horizons the same as Humana?', a: 'Healthy Horizons is Humana\'s Medicaid product, contracted state by state (FL, KY, IL, IN, LA, OH, OK, SC, VA and WI per Humana\'s 2025 10-K). Each state has its own ABA policy and PA list. Use the state Healthy Horizons guide, not this national one.' },
      { q: 'Will Humana back-date an ABA authorization?', a: 'Do not count on it. Humana’s 2026 Provider Manual asks for prior authorization at least 14 days ahead. Services on its Prior Authorization and Notification List that were not precertified before the service are not eligible for retrospective review. For other services, retrospective review is possible but not guaranteed.' },
    ],
  },
};

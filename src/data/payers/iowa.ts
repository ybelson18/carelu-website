import type { PayerConfig } from './types.js';

/* Iowa — ported from the LeadTrap vendored copy (backend/src/data/payer-guides/iowa.ts,
   Aug 2026, 4 guides) and re-verified against primary sources on 2026-09-24. Iowa HHS
   re-adopted its Medicaid rule chapters 77/78/79 effective 7/1/2026 (ARC 0314D-0316D),
   which renumbered the provider rule (77.26 -> 77.31) and the prior-authorization rule
   (79.8 -> 79.9); H.F. 330 (2025 Iowa Acts ch. 162) removed the autism mandate's age
   limits and dollar caps for plans issued or renewed on or after 1/1/2026. */
export const iowaPayers: Record<string, PayerConfig> = {
  'iowa-medicaid': {
    slug: 'iowa-medicaid',
    cardDesc: 'IA Health Link MCOs own ABA auth; RBT claims go out under the supervising LBA; Hawki excludes ABA; state ASP is the fallback.',
    assessmentPA: {
      value: 'Not published at the state level. Iowa routes every MCO member\'s prior authorization to the member\'s plan (441—79.9), and the state\'s ABA-specific informational letter (IL 1976, which Iowa Total Care cites as the governing guidance) could not be retrieved, so whether the 97151/97152 assessment itself needs PA is a per-plan answer',
      status: 'unverified',
      cites: [
        { title: 'Iowa Admin. Code r. 441—79.9 — Requests for prior authorization (ARC 0316D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
        { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Applied Behavioral Analysis', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
      ],
      verifyVia: 'Iowa Medicaid Informational Letter 1976 (Applied Behavior Analysis), referenced by the Iowa Total Care provider manual — not locatable in the IMPA letter archive by automated search; request it from Iowa Medicaid Provider Services (1-800-338-7909, imeproviderservices@dhs.state.ia.us) or via carelu.com/sources. For a specific member, check the MCO\'s own PA tool (Iowa Total Care Pre-Auth Check, Wellpoint PLUTO, Molina PA Codification List).',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Handled by the member\'s MCO, not the state: "For services provided through an MCO, the prior authorization request is submitted, reviewed, and authorized by the MCO" (441—79.9). All plans and fee-for-service share one uniform request form (470-5595). Whether a given ABA code needs PA sits on each plan\'s list; Iowa Total Care reviews ABA against CP.BH.104 in six-month authorization periods',
      status: 'plan-dependent',
      cites: [
        { title: 'Iowa Admin. Code r. 441—79.9 — Requests for prior authorization (ARC 0316D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
        { title: 'Iowa Medicaid Outpatient Prior Authorization Form 470-5595 (Rev. 12/25)', url: 'https://hhs.iowa.gov/media/6157/download?inline' },
        { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
      ],
      verifyVia: 'The member\'s MCO PA tool: Iowa Total Care Pre-Auth Check (iowatotalcare.com/providers/preauth-check.html), Wellpoint Precertification Lookup Tool (PLUTO), or Molina\'s PA Codification List; fee-for-service members: Iowa Medicaid Provider Services 1-800-338-7909.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'An autism spectrum disorder diagnosis, per Iowa Total Care\'s restatement of the state rule ("Claims billed for ABA therapy must have a primary diagnosis of autism spectrum disorder. Follow Iowa Medicaid guidelines"). The state\'s own ABA letter (IL 1976) that sets the diagnosis standard could not be read, so the diagnostic evidence Iowa Medicaid itself requires is not confirmed here',
      status: 'unverified',
      cites: [
        { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Applied Behavioral Analysis', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
      ],
      verifyVia: 'Iowa Medicaid Informational Letter 1976 (Applied Behavior Analysis) — request from Iowa Medicaid Provider Services (1-800-338-7909) or via carelu.com/sources.',
      blocker: 'document',
    },
    payer: 'Iowa Medicaid (IA Health Link)',
    state: 'IA', kind: 'state-medicaid',
    pill: 'Payer Guide · Iowa Medicaid',
    h1: 'Iowa Medicaid (IA Health Link) ABA coverage: the intake guide.',
    metaTitle: 'Iowa Medicaid (IA Health Link) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Iowa Medicaid covers ABA through IA Health Link managed care: the three MCOs that own prior authorization, why RBT claims go out under the supervising licensed behavior analyst, the Hawki exclusion, the 7/1/2024 fee schedule, telehealth rules, and the state Autism Support Program that catches children Medicaid and insurance both miss.',
    intro: [
      'Iowa delivers Medicaid ABA through IA Health Link, its statewide managed-care program, so authorization runs through the member\'s MCO (Iowa Total Care, Wellpoint Iowa, or Molina Healthcare of Iowa) rather than the state. Two structural features shape intake more than any coverage rule. First, Iowa enrolls registered behavior technicians as their own Medicaid provider class, but claims for a technician\'s work must be submitted by the supervising licensed behavior analyst, so the supervision relationship is a billing structure, not just a clinical one. Second, Iowa funds a third tier: when a child qualifies for ABA under neither Medicaid nor a private mandate, the state Autism Support Program can pay, which makes "which payer actually owns this child" the first intake question. One scope trap sits underneath all of it: ABA is a Medicaid and Iowa Health and Wellness Plan benefit but not a Hawki (CHIP) benefit.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — Medicaid and Iowa Health and Wellness Plan; NOT Hawki (CHIP)' },
      { label: 'MCOs', value: 'Iowa Total Care (Centene) · Wellpoint Iowa · Molina Healthcare of Iowa' },
      { label: 'Prior auth', value: 'MCO-administered (441—79.9); one uniform state form, 470-5595, for every plan and FFS' },
      { label: 'PA timing', value: '7 calendar days standard / 72 hours urgent; FFS requests undecided at 60 days are approved' },
      { label: 'Licensure', value: 'Behavior analysts and assistant behavior analysts licensed under Iowa Code ch. 154D' },
      { label: 'RBT billing', value: 'RBT is an enrolled provider class, but the supervising licensed behavior analyst submits the claim' },
      { label: 'Rates (per 15 min)', value: '97153: $17.16 (HN tech) / $28.59 (HO, HP) · 97151 & 97155 about $35.73–$36.81 (eff. 7/1/2024)' },
      { label: 'Third tier', value: 'State Autism Support Program — under 14, income at or below 500% FPL, no Medicaid or private ABA coverage' },
    ],
    sections: [
      {
        h2: 'Three payers, in a fixed order',
        body: [
          'Iowa treats ABA funding as a ladder, and the rungs are written into statute. Private coverage comes first, under the autism mandates at Iowa Code sections 514C.31 (large-group and non-state public-employee plans) and 514C.28 (State of Iowa employee plans). Medicaid covers the members it covers. The state Autism Support Program then catches the remainder: Iowa Code 225D.1 defines an eligible child as one "less than fourteen years of age who has been diagnosed with autism based on a diagnostic assessment of autism, is not otherwise eligible for coverage for applied behavioral analysis treatment or applied behavior analysis treatment under the medical assistance program, section 514C.28, section 514C.31, or other private insurance coverage, and whose household income does not exceed five hundred percent of the federal poverty level." Read the direction carefully: this is the Autism Support Program excluding children who have other coverage, not Medicaid excluding children who have insurance. Medicaid\'s ordinary third-party-liability rules decide the Medicaid-versus-commercial question instead.',
          'The program is still live in 2026. Iowa HHS lists the same gates on its program page: under 14 at application, a diagnosis "made by a child psychiatrist, developmental pediatrician, or a clinical psychologist within 24 months of the date of application," no Medicaid, no private ABA coverage, and household income at or below 500% of the federal poverty level. The statute caps the benefit at $36,000 a year and 24 months of treatment, lets a child who turns 14 mid-course finish, and requires graduated cost-sharing above 200% of poverty. Applications go to the program by email; the program phone line is (515) 725-3350.',
        ],
        cites: [
          { title: 'Iowa Code chapter 225D — Autism support program', url: 'https://www.legis.iowa.gov/docs/code/225D.pdf' },
          { title: 'Iowa HHS — Autism Support Program (eligibility and how to apply)', url: 'https://hhs.iowa.gov/family-community/community-integration/autism-support-program' },
          { title: 'Iowa Code § 514C.31 — Applied behavior analysis for treatment of autism spectrum disorder', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: 'Iowa Code § 514C.28 — Autism spectrum disorder coverage (State of Iowa employee plans)', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
        ],
      },
      {
        h2: 'Which Iowa Medicaid line the child is on',
        body: [
          'Iowa HHS\'s benefit comparison (Comm. 519, revised 03/2026) lists "Behavioral Health Intervention Services (BHIS), including applied behavior analysis" as Covered for Medicaid, Covered for the Iowa Health and Wellness Plan (residential treatment excepted), and "Not covered" for Hawki, Iowa\'s CHIP line. All three MCO manuals say the same thing: Wellpoint\'s September 2026 manual lists BHIS "including applied behavior analysis" under Noncovered Services: Hawki, Molina\'s 2026 manual carries the same row, and Iowa Total Care issued a provider alert correcting its manual because "for Hawki members, Iowa Medicaid does NOT have BHIS or ABA as a covered benefit."',
          'Most members are in managed care: "Most Iowa Medicaid members are enrolled in the Iowa Health Link managed care program," and "some Medicaid members, however, receive coverage through a Fee-for-Service model." The three health plans in 2026 are Iowa Total Care (1-833-404-1061), Molina Healthcare of Iowa (1-844-236-0894) and Wellpoint Iowa (1-833-731-2140). Members can switch plans within 90 days of enrollment and once a year at Annual Choice.',
        ],
        cites: [
          { title: 'Iowa HHS Comm. 519 — Comparison of Medicaid Basic Benefits Based on Eligibility Determination (03/2026)', url: 'https://hhs.iowa.gov/media/6643/download' },
          { title: 'Iowa HHS — Iowa Health Link (plans and contacts)', url: 'https://hhs.iowa.gov/programs/welcome-iowa-medicaid/iowa-health-link' },
          { title: 'Iowa Total Care — Provider Manual Update for BHIS and ABA (Hawki correction)', url: 'https://www.iowatotalcare.com/providers/provider-alerts/2022provider-manual-update-bhis-aba.html' },
        ],
      },
      {
        h2: 'Who may deliver ABA, and who may bill for it',
        body: [
          'Iowa Administrative Code 441—77.31 (renumbered from 77.26 when Iowa HHS re-adopted chapter 77 effective July 1, 2026) enrolls behavioral health providers in ten classes, three of which carry the ABA workforce: licensed behavior analysts, licensed assistant behavior analysts, and registered behavior technicians. The RBT class has a deliberately wide door: eligibility requires "a current certification from the behavior analyst certification board as a registered behavior technician; or a bachelor\'s degree." Iowa does not force BACB certification on every technician the way some states do.',
          'The billing rule is the one that surprises practices. An RBT "must provide treatment under the supervision of a behavior analyst or assistant behavior analyst licensed pursuant to Iowa Code chapter 154D. Claims for payment for such services must be submitted by the supervising licensed behavior analyst." Assistant behavior analysts are held to the same rule. The technician is an enrolled provider but not an independent biller. The fee schedule makes the credential visible on every line: Iowa Medicaid\'s ABA letter assigns HP to doctoral-level BCBAs, HO to master\'s-level BCBAs, and HN to "assistant behavior analyst, non-certified support staff, or registered behavior technician." Build the supervision roster and the claims mapping together at onboarding, because a correctly supervised technician still produces unpayable claims if the claim goes out under the wrong NPI or modifier.',
        ],
        cites: [
          { title: 'Iowa Admin. Code r. 441—77.31 — Behavioral health services providers (ARC 0314D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
          { title: 'Iowa Medicaid Informational Letter 2431-MC-FFS — ABA Code Update (eff. 4/1/2023)', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=497e2fa3-f199-4f95-bdad-461a28ff9d83' },
        ],
      },
      {
        h2: 'Prior authorization: the MCO decides, on the state\'s form and clock',
        body: [
          'Iowa\'s prior-authorization rule is now 441—79.9 (formerly 79.8; re-adopted effective July 1, 2026), and it opens by sending managed care away: it "governs requests for prior authorization for services not provided through an MCO. For services provided through an MCO, the prior authorization request is submitted, reviewed, and authorized by the MCO." For fee-for-service members, decisions on non-drug items and procedures "will be made according to the time frames set forth in 42 CFR 438.210(d)", and the rule keeps its backstop: "When Iowa Medicaid has not reached a decision on a request for prior authorization after 60 days from the date of receipt, the request will be approved." A denial produces a notice of decision mailed to the member within five working days, the request may be resubmitted for reconsideration with additional information, and the appeal route is now 441—Chapter 2506.',
          'Every plan uses the same paper. The uniform Outpatient Medicaid Prior Authorization Form (470-5595, Rev. 12/25) carries tick-boxes for Iowa Total Care, Wellpoint, Molina and fee-for-service, and prints the clock on its face: standard requests are decided "within 7 calendar days from receipt of all necessary information," and urgent requests "within 72 hours of receipt of request. 42 CFR §438.210." Behavioral health faxes are plan-specific: Iowa Total Care 1-844-908-1170, Wellpoint 1-844-451-2826, Molina through Availity or its UM fax. Fee-for-service requests go to Iowa Medicaid by fax at 515-725-1356, where the Quality Improvement Organization reviews medical necessity.',
        ],
        cites: [
          { title: 'Iowa Admin. Code r. 441—79.9 — Requests for prior authorization (ARC 0316D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
          { title: 'Iowa Medicaid Outpatient Prior Authorization Form 470-5595 (Rev. 12/25)', url: 'https://hhs.iowa.gov/media/6157/download?inline' },
          { title: 'Iowa HHS — Prior Authorization (uniform forms, FFS submission)', url: 'https://hhs.iowa.gov/medicaid/provider-services/covered-services-rates-and-payments/prior-authorization' },
        ],
      },
      {
        h2: 'Rates and telehealth',
        body: [
          'Iowa\'s ABA rates are published. Rule 441—79.1 sets ABA\'s basis of reimbursement as the fee schedule, and the live Provider Type 62 (Behavioral Health) schedule, read on September 24, 2026, still carries the rates Informational Letter 2613-MC-FFS set on July 1, 2024 (a 5% increase, funded by 2024 Iowa Acts H.F. 2698) with no end date: 97151 $35.73 (HO/HP); 97152 $17.16 (HN) or $35.73 (HO/HP); 97153 and 97154 $17.16 (HN) or $28.59 (HO/HP); 97155 $36.81 (HO/HP); 97156 $17.16 (HN) or $28.59 (HO/HP); 97157 and 97158 $8.39 (HO) or $8.90 (HP); and G9012 case management $28.59, all per 15 minutes. 0362T and 0373T do not appear on the schedule. The increase applies "only when the codes listed below are billed by Provider Type 62 (Behavioral Health)."',
          'Telehealth is broad. Iowa Medicaid\'s approved telehealth list (updated July 10, 2026) opens all eight codes, 97151 through 97158, as audio/video services with modifier 95 since January 1, 2024; none is allowed audio-only. Claims must carry place of service 02 or 10, and from December 1, 2025 Iowa pays a reduced site-of-service rate on telehealth lines where the fee schedule lists a factor-code X amount. The Type 62 schedule lists no X rate for the ABA codes. The MCOs can be stricter than the state list: see each plan\'s guide.',
        ],
        cites: [
          { title: 'Iowa Medicaid fee schedule — Provider Type 62 Behavioral Health (CSV, read 9/24/2026)', url: 'https://secureapp.dhs.state.ia.us/MedicaidFeeSched/C62.csv' },
          { title: 'Iowa Medicaid Informational Letter 2613-MC-FFS — ABA rate increase (eff. 7/1/2024)', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=f1f9aa1a-9f8e-45c2-bd0a-9a65df809ae6' },
          { title: 'Iowa Admin. Code r. 441—79.1 — Reimbursement bases (ABA: fee schedule)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
          { title: 'Iowa Medicaid Approved Telehealth Services list (updated 7/10/2026)', url: 'https://hhs.iowa.gov/media/13025/download?inline' },
          { title: 'Iowa Medicaid Telecommunication Technology Guide (updated 3/27/2026)', url: 'https://hhs.iowa.gov/media/17602/download?inline' },
        ],
      },
      {
        h2: 'What we could not verify, and where it lives',
        body: [
          'Iowa\'s rules do not define an ABA benefit of their own: neither chapter 78 nor the Behavioral Health Services and BHIS provider manuals contain ABA criteria. Iowa Total Care\'s manual points providers to "Iowa Medicaid guidelines published on Iowa HHS\'s Policy Clarification webpage" and to "Informational Letter IL1976". That letter, which should state the age range, diagnosis standard, referral and place-of-service rules, could not be located in the IMPA archive by automated search. Until it is read, those intake gates are marked unverified on this page, and each MCO\'s own published criteria (on the plan guides) are the working answer.',
        ],
        cites: [
          { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Applied Behavioral Analysis', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
          { title: 'Iowa Admin. Code ch. 441—78 — Amount, duration and scope of medical and remedial services (IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.78.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Which payer actually owns this child', desc: 'Commercial mandate, Medicaid, or the Autism Support Program. Iowa\'s three tiers have different front doors, and the ASP one closes at age 14.' },
      { title: 'Medicaid line: Medicaid, IHAWP or Hawki', desc: 'ABA is not a Hawki benefit. The eligibility line decides coverage before anything else does.' },
      { title: 'IA Health Link MCO name', desc: 'Iowa Total Care, Wellpoint Iowa, or Molina Healthcare of Iowa. The MCO owns prior authorization, not the state.' },
      { title: 'Other insurance', desc: 'Medicaid pays last. Iowa Total Care wants the primary payer\'s authorization decided first.' },
      { title: 'Supervising licensed behavior analyst', desc: 'RBT and LaBA services bill under the supervising LBA with the right HN/HO/HP modifier. Capture the supervision relationship at onboarding.' },
    ],
    sources: [
      { title: 'Iowa Admin. Code r. 441—77.31 — Behavioral health services providers (ARC 0314D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
      { title: 'Iowa Admin. Code ch. 441—79 (rules 79.1, 79.3, 79.9; IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
      { title: 'Iowa Medicaid Outpatient Prior Authorization Form 470-5595 (Rev. 12/25)', url: 'https://hhs.iowa.gov/media/6157/download?inline' },
      { title: 'Iowa HHS Comm. 519 — Comparison of Medicaid Basic Benefits (03/2026)', url: 'https://hhs.iowa.gov/media/6643/download' },
      { title: 'Iowa Medicaid Informational Letter 2431-MC-FFS — ABA Code Update', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=497e2fa3-f199-4f95-bdad-461a28ff9d83' },
      { title: 'Iowa Medicaid Informational Letter 2613-MC-FFS — ABA rate increase (eff. 7/1/2024)', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=f1f9aa1a-9f8e-45c2-bd0a-9a65df809ae6' },
      { title: 'Iowa Medicaid fee schedule — Provider Type 62 Behavioral Health', url: 'https://secureapp.dhs.state.ia.us/MedicaidFeeSched/C62.csv' },
      { title: 'Iowa Medicaid Approved Telehealth Services list (updated 7/10/2026)', url: 'https://hhs.iowa.gov/media/13025/download?inline' },
      { title: 'Iowa HHS — Iowa Health Link', url: 'https://hhs.iowa.gov/programs/welcome-iowa-medicaid/iowa-health-link' },
      { title: 'Iowa HHS — Autism Support Program', url: 'https://hhs.iowa.gov/family-community/community-integration/autism-support-program' },
      { title: 'Iowa Code chapter 225D — Autism support program', url: 'https://www.legis.iowa.gov/docs/code/225D.pdf' },
      { title: 'Iowa Code § 514C.28 — Autism spectrum disorder coverage', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
      { title: 'Iowa Code § 514C.31 — Applied behavior analysis for treatment of autism spectrum disorder', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      { title: '42 CFR 438.210 — Coverage and authorization of services (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
      { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Iowa sets the structure, not a ratio. A registered behavior technician "must provide treatment under the supervision of a behavior analyst or assistant behavior analyst licensed pursuant to Iowa Code chapter 154D," and a licensed assistant behavior analyst must hold current certification and provide "treatment under the supervision of a behavior analyst licensed pursuant to Iowa Code chapter 154D." No state rule or informational letter we could read sets a supervision percentage. The MCOs do: Iowa Total Care\'s CP.BH.104 wants protocol modification for at least two hours a week or 10% of direct hours, whichever is greater. See each plan guide.',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10) (ARC 0314D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Not stated by the state in billing terms. Iowa Medicaid\'s ABA letter reproduces the CPT descriptor for 97155 ("with protocol modification administered by physician or other QHP, which may include simultaneous direction of technician"), but no state rule or letter we could read says whether 97153 and 97155 both pay for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Iowa Medicaid Informational Letter 2431-MC-FFS — ABA Code Update (eff. 4/1/2023)', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=497e2fa3-f199-4f95-bdad-461a28ff9d83' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) and the member\'s MCO claims-editing policy; FFS: Iowa Medicaid Provider Services 1-800-338-7909.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'No state per-day or per-week ABA ceiling was found. The Type 62 fee schedule lists rates and modifiers but no unit limits, and chapter 78 carries no ABA section. Iowa Total Care caps planned treatment at six hours a day and 30 hours a week unless documentation justifies more (CP.BH.104).',
        status: 'unverified',
        cites: [
          { title: 'Iowa Medicaid fee schedule — Provider Type 62 Behavioral Health (CSV, read 9/24/2026)', url: 'https://secureapp.dhs.state.ia.us/MedicaidFeeSched/C62.csv' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) and each MCO\'s authorization letter, which states the approved units.',
        blocker: 'document',
      },
      noteSignature: {
        value:
          'The all-provider record rule governs. Every service record must include "the complete time of the service, including the beginning and ending time if the service is billed on a time-related basis," "the first and last name and professional credentials, if any, of the person providing the service," and "the signature of the person providing the service, or the initials of the person providing the service if a signature log indicates the person\'s identity." Failure to maintain records or to produce them "timely upon request shall result in claim denial or recoupment." For a timed ABA code, the technician who delivered the session signs the note.',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—79.3 — Maintenance of records by providers of service (IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
        ],
      },
      placeOfService: {
        value:
          'No state ABA place-of-service rule was found in the rules or letters we could read. What is set is telehealth coding: services delivered remotely must be on the approved list and billed with POS 02 (patient not at home) or POS 10 (patient at home).',
        status: 'unverified',
        cites: [
          { title: 'Iowa Medicaid Telecommunication Technology Guide (updated 3/27/2026)', url: 'https://hhs.iowa.gov/media/17602/download?inline' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) — request from Iowa Medicaid Provider Services 1-800-338-7909 or via carelu.com/sources.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'The supervising licensed behavior analyst. For registered behavior technicians and licensed assistant behavior analysts alike, "Claims for payment for such services must be submitted by the supervising licensed behavior analyst." The credential of the person who delivered the unit rides on the modifier: HP doctoral-level BCBA, HO master\'s-level BCBA, HN "assistant behavior analyst, non-certified support staff, or registered behavior technician". The rates differ by modifier, and the 7/1/2024 increase applies only when billed by Provider Type 62 (Behavioral Health).',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10) (ARC 0314D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
          { title: 'Iowa Medicaid Informational Letter 2431-MC-FFS — ABA Code Update (eff. 4/1/2023)', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=497e2fa3-f199-4f95-bdad-461a28ff9d83' },
          { title: 'Iowa Medicaid Informational Letter 2613-MC-FFS — ABA rate increase (eff. 7/1/2024)', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=f1f9aa1a-9f8e-45c2-bd0a-9a65df809ae6' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Not confirmed at the state level. Comm. 519 lists ABA as covered for Medicaid and the Iowa Health and Wellness Plan (which covers adults) without an age band, and Hawki as not covered. The age range of the ABA benefit itself sits in Iowa Medicaid\'s ABA letter, which could not be read. For comparison, the BHIS behavior-intervention and family-training services in 441—78.12 are covered only for members aged 20 or under, but ABA is not defined in that rule.',
        status: 'unverified',
        cites: [
          { title: 'Iowa HHS Comm. 519 — Comparison of Medicaid Basic Benefits (03/2026)', url: 'https://hhs.iowa.gov/media/6643/download' },
          { title: 'Iowa Admin. Code r. 441—78.12 — Behavioral health intervention (IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.78.pdf' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA); for a specific member, the MCO\'s ABA criteria (see the plan guides).',
        blocker: 'document',
      },
      dxRecency: {
        value:
          'No state recency window found. The only Iowa-published window in the ABA ladder belongs to the Autism Support Program, not Medicaid: its diagnosis must be made "within 24 months of the date of application." Iowa Total Care, under CP.BH.104, wants the comprehensive diagnostic evaluation within three years for a new start.',
        status: 'unverified',
        cites: [
          { title: 'Iowa HHS — Autism Support Program', url: 'https://hhs.iowa.gov/family-community/community-integration/autism-support-program' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) and the member\'s MCO ABA policy.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'Not stated in state rule for the Medicaid benefit. For the Autism Support Program, the diagnostic assessment must be by "a licensed child psychiatrist, developmental pediatrician, or clinical psychologist" (Iowa Code 225D.1).',
        status: 'unverified',
        cites: [
          { title: 'Iowa Code chapter 225D — Autism support program', url: 'https://www.legis.iowa.gov/docs/code/225D.pdf' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) and the member\'s MCO ABA policy.',
        blocker: 'document',
      },
      diagnosticTools: {
        value:
          'No state instrument requirement found. Iowa Total Care (CP.BH.104) requires at least one clinician tool (for example ADOS-2, ADI-R, CARS-2) and one parent tool, and Molina\'s policy requires at least one validated diagnostic tool.',
        status: 'unverified',
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) and the member\'s MCO ABA policy.',
        blocker: 'document',
      },
      referral: {
        value:
          'No state referral or order requirement for ABA was found. The all-provider record rule lists "physician orders and any prior authorizations required for Medicaid payment" among the record contents, which presumes an order exists only where one is required.',
        status: 'unverified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—79.3 — Maintenance of records (IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA) and the member\'s MCO ABA policy (Iowa Total Care requires a recommendation for ABA; Molina requires PCP documentation).',
        blocker: 'document',
      },
      telehealth: {
        value:
          'All eight ABA codes, 97151 through 97158, are on Iowa Medicaid\'s approved telehealth list as audio/video services (modifier 95), open since January 1, 2024. None is allowed audio-only (modifier 93). Remote services must be billed with POS 02 (not at home) or POS 10 (at home). From December 1, 2025, telehealth lines pay a site-of-service-reduced rate only where the fee schedule lists a factor-code X amount, and the Type 62 schedule lists none for ABA. The MCOs may still restrict which components they authorize remotely: Molina limits telehealth to caregiver training, supervision and indirect components.',
        status: 'verified',
        cites: [
          { title: 'Iowa Medicaid Approved Telehealth Services list (updated 7/10/2026)', url: 'https://hhs.iowa.gov/media/13025/download?inline' },
          { title: 'Iowa Medicaid Telecommunication Technology Guide (updated 3/27/2026)', url: 'https://hhs.iowa.gov/media/17602/download?inline' },
          { title: 'Iowa Medicaid fee schedule — Provider Type 62 Behavioral Health (CSV, read 9/24/2026)', url: 'https://secureapp.dhs.state.ia.us/MedicaidFeeSched/C62.csv' },
        ],
      },
      authTurnaround: {
        value:
          'Seven calendar days standard, 72 hours urgent, for every plan. The uniform state form 470-5595 prints the clock: standard requests are decided "within 7 calendar days from receipt of all necessary information"; urgent ones "within 72 hours of receipt of request. 42 CFR §438.210." That is the federal managed-care floor for rating periods starting on or after January 1, 2026 ("may not exceed 7 calendar days after receiving the request"). The fee-schedule side matches: 441—79.9 applies the 438.210(d) timeframes to non-drug FFS requests (the 24-hour clock in that rule is for prescription drugs only), and 42 CFR 440.230(e) independently binds the state agency to 7 days / 72 hours. Iowa keeps a backstop for FFS: "When Iowa Medicaid has not reached a decision on a request for prior authorization after 60 days from the date of receipt, the request will be approved." The clock runs from a complete request: the form warns "incomplete forms will be rejected."',
        status: 'verified',
        cites: [
          { title: 'Iowa Medicaid Outpatient Prior Authorization Form 470-5595 (Rev. 12/25)', url: 'https://hhs.iowa.gov/media/6157/download?inline' },
          { title: 'Iowa Admin. Code r. 441—79.9 — Requests for prior authorization (ARC 0316D, eff. 7/1/2026)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
          { title: '42 CFR 438.210(d) — Managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. Under 42 CFR 433.139, when the agency knows of probable third-party liability at the time the claim is filed, it "must reject the claim and return it to the provider" for a determination by the other payer. All three MCOs say the same in their own words: "Medicaid is always the payer of last resort" (Molina); "All other insurance, including Medicare, is always primary to Medicaid coverage" (Iowa Total Care). Iowa Total Care adds a front-end rule: "If a member has other primary insurance (including Medicare), all prior authorization requests must be submitted to and determined by the primary payer first." It will not coordinate when the primary denied for no authorization, and if the primary denies as non-covered or benefits exhausted, it expects its own authorization. Private coverage also comes before the state Autism Support Program, which serves only children with no Medicaid or private ABA coverage.',
        status: 'verified',
        cites: [
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: 'Iowa Total Care — Prior Authorization Check (primary payer first)', url: 'https://www.iowatotalcare.com/providers/preauth-check.html' },
          { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Third-Party Liability / COB', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
          { title: 'Molina Healthcare of Iowa — Medicaid 2026 Provider Manual (COB and TPL)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Medicaid-Provider-Manual-2026.ashx' },
          { title: 'Iowa Code chapter 225D — Autism support program', url: 'https://www.legis.iowa.gov/docs/code/225D.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Iowa Medicaid cover ABA therapy?', a: 'Yes, for Medicaid and Iowa Health and Wellness Plan members, not for Hawki (CHIP) members. Most members are in IA Health Link managed care, so the member\'s MCO (Iowa Total Care, Wellpoint Iowa, or Molina Healthcare of Iowa) administers prior authorization and utilization management.' },
      { q: 'Can a registered behavior technician bill Iowa Medicaid directly?', a: 'No. An RBT is an enrolled provider class under Iowa Admin. Code 441—77.31, but must work under the supervision of a licensed behavior analyst or assistant behavior analyst, and the rule requires that claims for those services be submitted by the supervising licensed behavior analyst, with the HN modifier.' },
      { q: 'How fast must an Iowa Medicaid plan decide an ABA authorization?', a: 'Within 7 calendar days of a complete standard request and 72 hours for an urgent one, under the uniform state form 470-5595 and the federal managed-care rule. For fee-for-service requests, Iowa Admin. Code 441—79.9 approves any request still undecided 60 days after receipt.' },
      { q: 'What does Iowa Medicaid pay for ABA?', a: 'Per 15 minutes, on the fee schedule effective 7/1/2024 and still current in September 2026: 97153 $17.16 by a technician (HN) or $28.59 by a BCBA (HO/HP); 97151 $35.73; 97155 $36.81; 97156 $17.16 or $28.59.' },
      { q: 'What if a child has no ABA coverage at all in Iowa?', a: 'The state Autism Support Program funds ABA for children under 14 with an autism diagnosis made within the previous 24 months by a child psychiatrist, developmental pediatrician, or clinical psychologist, whose household income is at or below 500% of the federal poverty level and who are not eligible for ABA through Medicaid or private insurance. It pays up to $36,000 a year for up to 24 months.' },
    ],
  },

  'iowa-total-care': {
    slug: 'iowa-total-care',
    family: 'centene',
    cardDesc: 'Centene IA Health Link plan; CP.BH.104 criteria, six-month auths, 6 hr/day–30 hr/wk soft cap, no ABA for Hawki.',
    assessmentPA: {
      value: 'Not published as a code-level rule. CP.BH.104 lists "Behavioral assessment" among the requested services it reviews, but Iowa Total Care publishes its PA requirements only through the Pre-Auth Check tool, so whether 97151/97152 need PA must be checked there',
      status: 'unverified',
      cites: [
        { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
      ],
      verifyVia: 'Iowa Total Care Prior Authorization Check Tool (iowatotalcare.com/providers/preauth-check.html) for 97151/97152, or Provider Services 1-833-404-1061.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required in practice: ABA is reviewed against CP.BH.104 initiation and continuation criteria in six-month authorization periods (CP.BH.105), submitted through the Secure Provider Web Portal or Availity, or by fax to Behavioral Health 1-844-908-1170 on state form 470-5595; outpatient behavioral health can be requested up to 30 days ahead',
      status: 'verified',
      cites: [
        { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
        { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Prior Authorization', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — confirmed ASD per the current DSM, with severity level documented, from a comprehensive diagnostic evaluation; ABA claims must carry a primary ASD diagnosis',
      status: 'verified',
      cites: [
        { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Applied Behavioral Analysis', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
      ],
    },
    payer: 'Iowa Total Care (Centene)',
    state: 'IA', kind: 'medicaid-mco', parent: 'Iowa Medicaid (IA Health Link)',
    pill: 'Payer Guide · Iowa Total Care',
    h1: 'Iowa Total Care ABA coverage (IA Health Link MCO).',
    metaTitle: 'Iowa Total Care (IA Health Link MCO) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Iowa Total Care administers Iowa Medicaid ABA: the CP.BH.104 criteria (evaluation recency, required diagnostic tools, 6-hour/30-hour intensity rule), the CP.BH.105 note checklist and 10% protocol-modification floor, six-month authorizations, the 7-day decision clock, and the Hawki exclusion.',
    intro: [
      'Iowa Total Care is Centene\'s IA Health Link plan, and it is the Iowa MCO whose ABA rules are most fully published. It posts two Centene clinical policies on its own policy page: CP.BH.104 (Applied Behavior Analysis) for medical necessity and CP.BH.105 (ABA Documentation Requirements) for the chart. Both were revised in February 2026 and both yield to the state: "when state Medicaid coverage provisions conflict with the coverage provisions in this clinical policy, state Medicaid coverage provisions take precedence." The plan\'s own manual defers too: ABA claims "must have a primary diagnosis of autism spectrum disorder" and must follow Iowa Medicaid guidelines. And the Hawki line is out entirely: Iowa Total Care corrected its manual in 2022 to say that "for Hawki members, Iowa Medicaid does NOT have BHIS or ABA as a covered benefit, so therefore it is not a covered benefit for Iowa Total Care."',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IA Health Link MCO (Centene)' },
      { label: 'Clinical rules', value: 'CP.BH.104 (medical necessity) + CP.BH.105 (documentation), both rev. 02/26; state Medicaid rules win any conflict' },
      { label: 'Hawki members', value: 'ABA and BHIS NOT covered' },
      { label: 'Evaluation recency', value: 'CDE within 3 years to start (3–5 years old needs a new diagnostic interview within 12 months); within 5 years to continue' },
      { label: 'Intensity', value: 'Up to 6 hrs/day and 30 hrs/week without extra justification; under 20 hrs/week if in school full-time' },
      { label: 'Protocol modification', value: '97155/H0032: at least 2 hrs/week or 10% of direct hours, no more than 20%' },
      { label: 'Prior auth', value: 'Portal/Availity, or BH fax 1-844-908-1170; decision in 7 calendar days' },
    ],
    sections: [
      {
        h2: 'What CP.BH.104 wants before treatment starts',
        body: [
          'The diagnosis must be a confirmed ASD per the current DSM "or an appropriate diagnosis as otherwise specified according to state-defined ABA criteria," established by "a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD, or a provider otherwise authorized under state law/regulation," with the severity level recorded. The comprehensive diagnostic evaluation has a shelf life: for a new start it must have "been conducted in the past three years," or, if it is three to five years old, a diagnostic interview/evaluation must have been done within 12 months of the request. Continuing treatment needs a CDE within five years. The CDE must rest on "at least one primary clinician tool and one parent/caregiver tool": a clinician tool such as STAT, ADI-R, CARS-2, ASRS, ADOS-2, EarliPoint, RITA-T or CSBS DP-ITC, and a parent tool such as M-CHAT-R/F, SCQ, ASSQ, CAST, SRS-2, POSI or CSBS DP ITC. Medical causes must have been ruled out.',
          'A recommendation for ABA from a qualified professional is required whenever an initial or updated CDE is required, and "may be included within the CDE." The behavioral assessment must be completed by a BCBA "no more than two months prior to the start of the initial treatment authorization," with direct measurement and at least one skills or maladaptive-behavior assessment (VB-MAPP, ABLLS-R, AFLS, PEAK, EFL and others; a Vineland alone is not enough). Every treatment-plan document must carry the signature, credentials and role of the responsible BCBA and the parent or guardian.',
        ],
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      {
        h2: 'Hours, protocol modification, and the caregiver',
        body: [
          'CP.BH.104 sizes hours to the child and names a soft ceiling: treatment should "not exceed six hours per day up to a total of 30 hours per week" unless documentation shows the child\'s needs "cannot be adequately or effectively addressed" at less, and hours should be "less than 20 hours per week if attending school full-time." Protocol modification (97155) must occur "for at least two hours per week or 10% of the direct service hours provided (whichever is greater), and no more than 20% of direct service hours." CP.BH.105 enforces it by recoupment: 97153/97154 units "for the entire six-month authorization period that are not supported by the requirements for protocol modification ... are subject to denial of payment or recoupment."',
          'Caregiver training is a gate, not a nicety: two to four caregiver goals with baseline data and mastery criteria, and a plan for "a minimum of two hours per month." At continuation, attendance below 80% of authorized hours needs a written justification, reassessment and an updated plan are due at least every six months, and limited progress must be met with documented plan changes.',
        ],
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
        ],
      },
      {
        h2: 'Submitting the request',
        body: [
          'Iowa Total Care prefers the Secure Provider Web Portal or Availity for behavioral health authorizations; the fallback is the state\'s uniform outpatient form 470-5595 faxed to Behavioral Health at 1-844-908-1170. Behavioral health outpatient services can be requested "up to 30 days in advance," and anything faxed or submitted after 8 a.m. to 6 p.m. Monday to Friday is processed the next business day. The plan decides standard requests within 7 calendar days and urgent ones within 72 hours, with a one-time extension of up to 14 calendar days when information is missing. Claims are due within 180 days of service (365 days from the primary payer\'s decision when Iowa Total Care is secondary).',
        ],
        cites: [
          { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Prior Authorization, Timely Filing', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
          { title: 'Iowa Total Care — Prior Authorization Check Tool', url: 'https://www.iowatotalcare.com/providers/preauth-check.html' },
        ],
      },
      {
        h2: 'The Hawki exclusion is the thing to check first',
        body: [
          'Iowa Total Care\'s September 2022 provider alert corrected pages 36–49 of its manual, which had shown BHIS and ABA as covered for Hawki members; that "was inaccurate." The state\'s March 2026 benefit comparison still lists BHIS "including applied behavior analysis" as not covered for Hawki. An Iowa Total Care member on the Medicaid line and one on the Hawki line have different ABA answers, and the card alone will not always tell you which.',
        ],
        cites: [
          { title: 'Iowa Total Care — Provider Manual Update for BHIS and ABA (Hawki correction)', url: 'https://www.iowatotalcare.com/providers/provider-alerts/2022provider-manual-update-bhis-aba.html' },
          { title: 'Iowa HHS Comm. 519 — Comparison of Medicaid Basic Benefits (03/2026)', url: 'https://hhs.iowa.gov/media/6643/download' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid line vs. Hawki', desc: 'ABA is not a Hawki benefit. The line decides coverage before anything else does.' },
      { title: 'Comprehensive diagnostic evaluation with its date', desc: 'Under 3 years old to start (or 3–5 years plus a diagnostic interview within 12 months), with one clinician tool and one parent tool named and scored.' },
      { title: 'Recommendation for ABA', desc: 'From the diagnosing physician, psychologist or other qualified professional. It can sit inside the CDE.' },
      { title: 'School schedule and IEP', desc: 'Full-time school means under 20 hours a week, and school-based plans have their own documentation list.' },
      { title: 'Caregiver availability', desc: 'Two to four caregiver goals and about two hours a month of caregiver training are expected.' },
    ],
    sources: [
      { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
      { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
      { title: 'Iowa Total Care — Clinical and payment policies', url: 'https://www.iowatotalcare.com/providers/resources/clinical-payment-policies.html' },
      { title: 'Iowa Total Care Provider Manual (Rev. 03/2026)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
      { title: 'Iowa Total Care — Prior Authorization Check Tool', url: 'https://www.iowatotalcare.com/providers/preauth-check.html' },
      { title: 'Iowa Total Care — Provider Manual Update for BHIS and ABA (Hawki correction)', url: 'https://www.iowatotalcare.com/providers/provider-alerts/2022provider-manual-update-bhis-aba.html' },
      { title: 'Iowa Admin. Code r. 441—77.31 — Behavioral health services providers', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Two layers. The state requires every RBT and assistant behavior analyst to work under a Chapter 154D-licensed behavior analyst (441—77.31). Iowa Total Care adds a floor measured through protocol modification: 97155 must occur "for at least two hours per week or 10% of the direct service hours provided (whichever is greater), and no more than 20% of direct service hours provided (unless clinical documentation justifies)," plus "at least monthly one-on-one service delivery with member/enrollee to develop new or modified protocol," rendered by the ABA supervisor and not by telehealth unless state guidelines allow. CP.BH.105 is explicit that "technician supervision only or team meetings do not constitute protocol modification."',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Implied but not stated as a billing rule. CP.BH.105 says "97155 may be used to demonstrate new or modified protocol to a technician with the member/enrollee present," which describes the analyst and technician working at the same time, but neither policy says in billing terms that 97153 and 97155 both pay for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
        ],
        verifyVia: 'Iowa Total Care Provider Services 1-833-404-1061 or your Provider Engagement Account Manager: ask whether 97153 and 97155 billed for overlapping time both pay.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'A clinical ceiling plus the national unit edits. CP.BH.104: treatment hours should "not exceed six hours per day up to a total of 30 hours per week" unless documentation of severity, escalating behavior, severe stereotypy or limited functional communication justifies more, and hours should be "less than 20 hours per week if attending school full-time." For per-code units, CP.BH.105 points outward: "Providers should reference the most recent version of ABA Coding Coalition for information on Medically Unlikely Edits (MUEs)," and CMS guidelines "should be used to determine the maximum units of service a provider can report ... during a single date of service."',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
        ],
      },
      noteSignature: {
        value:
          'The person who rendered the session signs, before the claim goes out. CP.BH.105: "Service activity notes for all services rendered are completed prior to claim submission" and include the "Signature of qualified rendering provider/technician," the exact start and end time, pauses with the time paused and resumed, location, code, who participated, and a session summary; a note written on a later day must give the creation date and the reason. Addenda need a reference to the original note, the completion date and the "legible name, signature, and credentials of rendering clinician/technician." A caregiver signature is recommended on caregiver-training notes, and treatment-plan documents must be signed by the responsible BCBA and the parent or guardian (CP.BH.104).',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Home, clinic, school and community are all contemplated, with conditions. CP.BH.104 requires the plan to state the "treatment setting with rationale for how the setting will maximize treatment outcomes," and a school-based plan must document hours, operationally defined target behaviors, when problem behaviors peak, replacement-behavior goals, a titration plan for reducing school services, and school-specific graphs. ABA is not medically necessary for "services that are otherwise covered under the Individuals with Disabilities Education Act (IDEA)" or when "in lieu of school, respite care, or other community-based settings." Every note must record the location of service (CP.BH.105).',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'The state rule follows the member into the plan: RBT and assistant-analyst services are claimed by "the supervising licensed behavior analyst" (441—77.31). Iowa Total Care\'s manual adds that behavioral health providers "must bill with credentialing modifiers to reflect the rates on the Iowa Medicaid Fee Schedules when applicable" (HN, HO, HP for ABA), and that ABA claims must carry a primary ASD diagnosis.',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Behavioral Health billing', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'No age criterion appears in CP.BH.104, CP.BH.105 or the Iowa Total Care manual; the Iowa Medicaid benefit\'s age range governs and could not be confirmed (see the Iowa Medicaid guide). Hawki members are excluded whatever their age.',
        status: 'unverified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
        verifyVia: 'Iowa Medicaid Informational Letter 1976 (ABA), or Iowa Total Care Provider Services 1-833-404-1061.',
        blocker: 'document',
      },
      dxRecency: {
        value:
          'Three years to start, five to continue. For treatment initiation the comprehensive diagnostic evaluation must have "been conducted in the past three years," or, if it is more than three and less than five years old, "a diagnostic interview/evaluation has been conducted within 12 months of the authorization request" covering a mental status exam, DSM diagnosis, history, risk, medical history and medications. For continuation, the CDE must be within the past five years, and a re-evaluation can be required sooner for a provisional diagnosis, no formal psychological evaluation, discrepant tool results, or a transition. The ABA behavioral assessment itself must be "completed no more than two months prior to the start of the initial treatment authorization."',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'A licensed physician, psychologist, "or other licensed professional with specialized training in diagnosis and treatment of ASD, or a provider otherwise authorized under state law/regulation" to diagnose autism. The evaluator\'s name, signature and credentials must appear on the report.',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Two instruments, one of each kind. The diagnosis must be "based on the CDE, including at least one primary clinician tool and one parent/caregiver tool." Clinician tools: STAT, ADI-R, CARS/CARS-2, ASRS, ADOS/ADOS-2, EarliPoint, RITA-T, CSBS DP-ITC, or other evidence-based tools case by case. Parent tools: M-CHAT/M-CHAT-R/F, SCQ, ASSQ, CAST, SRS-2 Parent Report, SWYC POSI, CSBS DP ITC, or others case by case. The report must list each test with scores and dates, based on direct observation and a caregiver interview.',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      referral: {
        value:
          'A recommendation for ABA, "made based on the member/enrollee\'s presenting symptoms by a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD," which "may be included within the CDE." It is "required when an initial or updated CDE is required."',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.104 — Applied Behavior Analysis (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      telehealth: {
        value:
          'The state list governs the codes: 97151–97158 by audio/video with modifier 95, POS 02 or 10, no audio-only. Iowa Total Care adds conditions in CP.BH.105: the platform must meet HIPAA privacy and security standards and "the rendering provider/technician had their camera turned on and functioning audio output/input," and the monthly one-on-one protocol-modification session must not be "delivered via telemedicine/telehealth unless allowed by state guidelines."',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
          { title: 'Iowa Medicaid Approved Telehealth Services list (updated 7/10/2026)', url: 'https://hhs.iowa.gov/media/13025/download?inline' },
        ],
      },
      authTurnaround: {
        value:
          'Iowa Total Care publishes its own clock, matching the 2026 federal floor: "Standard Non-Urgent — 7 calendar days"; "Expedited Preservice/Urgent — Outpatient: 72 hours," with "a one-time extension of up to 14 calendar days" when more information is needed. Requests sent after 8 a.m.–6 p.m. Monday to Friday "will be processed the next business day." Behavioral health outpatient services can be requested "up to 30 days in advance." Authorizations run in six-month periods (CP.BH.105), and the updated behavior assessment and treatment plan are due at least every six months, so start the reauthorization packet before the period ends.',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Prior Authorization Determination Timelines', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
          { title: 'Iowa Total Care CP.BH.105 — ABA Documentation Requirements (rev. 02/26)', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/policies/clinical-policies/CP.BH.105.pdf' },
          { title: '42 CFR 438.210(d) — Managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          '"Iowa Total Care, like all Medicaid programs, is always the payor of last resort," and "All other insurance, including Medicare, is always primary to Medicaid coverage." Two front-end rules matter for ABA. First, authorization: "If a member has other primary insurance (including Medicare), all prior authorization requests must be submitted to and determined by the primary payer first." Second, denials: the plan "will not coordinate benefits when the primary insurer denies for" no authorization, untimely filing or duplicates, and if the primary denies as non-covered or benefits exhausted, get Iowa Total Care\'s own authorization. File the primary EOB with the claim (without it the claim "will pend and/or deny"); two primary plans means a paper claim; and secondary claims are due within 365 days of the primary\'s final determination.',
        status: 'verified',
        cites: [
          { title: 'Iowa Total Care Provider Manual (Rev. 03/2026) — Third-Party Liability / COB, Timely Filing', url: 'https://www.iowatotalcare.com/content/dam/centene/iowa-total-care/PDF/2025_ITC_ProviderManual_FINAL_OB11849_031826_508.pdf' },
          { title: 'Iowa Total Care — Prior Authorization Check (primary payer first)', url: 'https://www.iowatotalcare.com/providers/preauth-check.html' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
      },
    },
    faq: [
      { q: 'Does Iowa Total Care cover ABA therapy?', a: 'For IA Health Link Medicaid and Iowa Health and Wellness Plan members, yes, as part of the Iowa Medicaid benefit, reviewed under Centene\'s CP.BH.104. For Hawki members, no: the plan confirmed that Iowa Medicaid does not carry BHIS or ABA on the Hawki line.' },
      { q: 'How recent must the autism evaluation be for Iowa Total Care?', a: 'Within three years to start ABA, or three to five years old with a diagnostic interview done within 12 months of the request. For continuing treatment, within five years. The ABA behavioral assessment must be no more than two months old at the start of the first authorization.' },
      { q: 'How many hours will Iowa Total Care authorize?', a: 'CP.BH.104 treats six hours a day and 30 hours a week as the level that needs no extra justification, and expects under 20 hours a week for a child in school full-time. More is possible with documented severity and a clinical rationale.' },
      { q: 'How do I submit an ABA authorization to Iowa Total Care?', a: 'Through the Secure Provider Web Portal or Availity, or by fax to Behavioral Health at 1-844-908-1170 on the state\'s uniform form 470-5595. Standard decisions come within 7 calendar days.' },
    ],
  },

  'wellpoint-iowa': {
    slug: 'wellpoint-iowa',
    family: 'anthem',
    cardDesc: 'IA Health Link MCO (formerly Amerigroup Iowa); Carelon behind BH, own Clinical UM Guidelines, BH outpatient fax 1-844-451-2826.',
    assessmentPA: {
      value: 'Not published — Wellpoint lists BHIS "including applied behavior analysis" as covered but "may require prior authorization"; code-level PA status sits in its Precertification Lookup Tool (PLUTO)',
      status: 'unverified',
      cites: [
        { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
      ],
      verifyVia: 'Wellpoint Precertification Lookup Tool (PLUTO) at provider.wellpoint.com/iowa-provider/resources/prior-authorization-requirements/prior-authorization-lookup for 97151/97152, or Provider Services 833-731-2143.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Wellpoint lists BHIS "including applied behavior analysis" as covered but "may require prior authorization"; behavioral health requests go by phone, fax (outpatient 1-844-451-2826) or Interactive Care Reviewer in Availity. The ABA code list and the ABA criteria document were not retrievable',
      status: 'unverified',
      cites: [
        { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
        { title: 'Wellpoint Iowa — Prior authorization requirements', url: 'https://www.provider.wellpoint.com/iowa-provider/resources/prior-authorization-requirements' },
      ],
      verifyVia: 'Wellpoint PLUTO lookup for 97153/97155/97156, or Provider Services 833-731-2143 (providernetworkia@wellpoint.com).',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Not published in a document we could read. Wellpoint applies its own Medical Policies and Clinical UM Guidelines to mental-health requests, but its Iowa guideline list does not name an ABA guideline',
      status: 'unverified',
      cites: [
        { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026) — Clinical Criteria', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
        { title: 'Wellpoint Iowa — Clinical UM Guidelines adopted (Nov. 2025 list)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_CAID_Nov25CUMG.pdf' },
      ],
      verifyVia: 'Email providernetworkia@wellpoint.com or call 833-731-2143 and ask which criteria document Wellpoint applies to ABA requests (the manual says criteria are available on request).',
      blocker: 'document',
    },
    payer: 'Wellpoint Iowa (formerly Amerigroup Iowa)',
    state: 'IA', kind: 'medicaid-mco', parent: 'Iowa Medicaid (IA Health Link)',
    pill: 'Payer Guide · Wellpoint Iowa',
    h1: 'Wellpoint Iowa ABA coverage (IA Health Link MCO).',
    metaTitle: 'Wellpoint Iowa (formerly Amerigroup) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Wellpoint Iowa administers Iowa Medicaid ABA under IA Health Link: the Carelon Behavioral Health relationship, where behavioral health prior authorizations go, the 7-day routine decision clock, the Hawki exclusion, and the Amerigroup name that still shows up on cards.',
    intro: [
      'Wellpoint Iowa is the IA Health Link plan formerly branded Amerigroup Iowa, and both names still circulate on member cards, in older documents and in clearinghouse directories. Its September 2026 provider manual lists behavioral health intervention services "including applied behavior analysis" as covered for Medicaid and Iowa Health and Wellness Plan members ("may require prior authorization") and as not covered for Hawki. Behind the plan sits Carelon Behavioral Health, "an independent company providing behavioral health management services on behalf of Wellpoint, Inc.," which handles behavioral health credentialing and provider service. What Wellpoint does not publish in a document we could open is its ABA medical-necessity criteria: the manual says mental-health requests are reviewed against "Wellpoint Medical Policies and Clinical Utilization Management Guidelines," but the Iowa guideline list names no ABA guideline.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IA Health Link MCO (Wellpoint, formerly Amerigroup Iowa)' },
      { label: 'Behavioral health', value: 'Carelon Behavioral Health manages BH on Wellpoint\'s behalf (credentialing, provider service)' },
      { label: 'Hawki members', value: 'BHIS including ABA NOT covered' },
      { label: 'Prior auth', value: 'Phone, fax or ICR in Availity; BH outpatient fax 1-844-451-2826' },
      { label: 'Decision time', value: 'Routine: within 7 calendar days' },
      { label: 'ABA criteria', value: 'Not published in documents we could read — ask the plan' },
    ],
    sections: [
      {
        h2: 'Where the request goes',
        body: [
          'Wellpoint "accepts prior authorization requests via phone, fax or Interactive Care Reviewer (ICR), a secure utilization management tool available in Availity." For Medicaid behavioral health, the plan\'s prior-authorization page gives an inpatient fax of 1-844-442-8016 and an outpatient fax of 1-844-451-2826; the state\'s uniform outpatient form 470-5595 lists the same outpatient number. The Precertification Lookup Tool (PLUTO) is the code-level answer. Claims go through Availity under payer ID WLPNT.',
          'Carelon\'s Iowa Medicaid quick reference guide routes Wellpoint behavioral health credentialing and provider demographic changes through Carelon\'s National Provider Service Line (1-800-397-1630) and customer service through 1-833-731-2143. Enrollment and verification run through Wellpoint.',
        ],
        cites: [
          { title: 'Wellpoint Iowa — Prior authorization requirements', url: 'https://www.provider.wellpoint.com/iowa-provider/resources/prior-authorization-requirements' },
          { title: 'Iowa Medicaid Outpatient Prior Authorization Form 470-5595 (Rev. 12/25)', url: 'https://hhs.iowa.gov/media/6157/download?inline' },
          { title: 'Carelon Behavioral Health — Provider Quick Reference Guide, Wellpoint, Inc. (Iowa Medicaid, 2/6/2024)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ia/provider-quick-reference-guide-caid-ia.pdf' },
        ],
      },
      {
        h2: 'What Wellpoint has not published about ABA',
        body: [
          'We could not find a Wellpoint Iowa ABA clinical guideline, unit cap, supervision standard or telehealth position in the provider manual, the Clinical UM Guideline list (Nov. 2025), or the plan\'s public pages. The manual says criteria are available on request (providernetworkia@wellpoint.com, 833-731-2143). Until that document is in hand, the state rules on the Iowa Medicaid guide are the working floor: the supervising licensed behavior analyst submits technician claims, the state telehealth list governs codes, and the record rule in 441—79.3 governs notes. Do not assume Wellpoint\'s ABA criteria in another state carry over to Iowa.',
        ],
        cites: [
          { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026) — Clinical Criteria', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
          { title: 'Wellpoint Iowa — Clinical UM Guidelines adopted (Nov. 2025 list)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_CAID_Nov25CUMG.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid line vs. Hawki', desc: 'Wellpoint\'s manual lists ABA as not covered for Hawki members.' },
      { title: 'Card brand: Wellpoint or Amerigroup', desc: 'Both names are live. Capture what the card says so the payer lookup matches.' },
      { title: 'Availity access for ICR', desc: 'The electronic route for authorizations. Set it up before the first request.' },
      { title: 'Supervising licensed behavior analyst', desc: 'Iowa\'s rule that RBT claims bill under the supervising LBA applies inside managed care too.' },
    ],
    sources: [
      { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
      { title: 'Wellpoint Iowa — Prior authorization requirements', url: 'https://www.provider.wellpoint.com/iowa-provider/resources/prior-authorization-requirements' },
      { title: 'Wellpoint Iowa — Behavioral health', url: 'https://www.provider.wellpoint.com/iowa-provider/patient-care/behavioral-health' },
      { title: 'Wellpoint Iowa — Clinical UM Guidelines adopted (Nov. 2025 list)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_CAID_Nov25CUMG.pdf' },
      { title: 'Carelon Behavioral Health — Provider Quick Reference Guide, Wellpoint, Inc. (Iowa Medicaid)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ia/provider-quick-reference-guide-caid-ia.pdf' },
      { title: 'Iowa Admin. Code r. 441—77.31 — Behavioral health services providers', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the state rule; Wellpoint\'s September 2026 manual publishes no ABA supervision standard of its own. Every RBT "must provide treatment under the supervision of a behavior analyst or assistant behavior analyst licensed pursuant to Iowa Code chapter 154D," and assistant behavior analysts work under a licensed behavior analyst. No supervision percentage is set at either level.',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
          { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
        ],
      },
      concurrentBilling: {
        value: 'Not published by Wellpoint or the state.',
        status: 'unverified',
        verifyVia: 'Wellpoint Provider Services 833-731-2143: ask whether 97153 and 97155 for overlapping time both pay.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published. The approved units are stated in each authorization.',
        status: 'unverified',
        verifyVia: 'The Wellpoint authorization letter, or Provider Services 833-731-2143.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Follows the state record rule; the Wellpoint manual publishes nothing ABA-specific. Each service record must show the beginning and ending time for time-based codes, the name and credentials of the person who provided the service, and "the signature of the person providing the service, or the initials ... if a signature log indicates the person\'s identity."',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—79.3 — Maintenance of records (IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
        ],
      },
      placeOfService: {
        value: 'Not published by Wellpoint for ABA.',
        status: 'unverified',
        verifyVia: 'Wellpoint Provider Services 833-731-2143, or the ABA criteria document Wellpoint provides on request.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'Follows the state rule, which Wellpoint does not modify in its manual: RBT and assistant-analyst services are claimed by "the supervising licensed behavior analyst," with the HN, HO or HP modifier that the Iowa fee schedule prices. Claims go through Availity, payer ID WLPNT.',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
          { title: 'Iowa Medicaid Informational Letter 2431-MC-FFS — ABA Code Update', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=497e2fa3-f199-4f95-bdad-461a28ff9d83' },
          { title: 'Carelon Behavioral Health — Provider Quick Reference Guide, Wellpoint, Inc. (Iowa Medicaid)', url: 'https://www.carelonbehavioralhealth.com/content/dam/digital/carelon/cbh-assets/documents/ia/provider-quick-reference-guide-caid-ia.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Not published by Wellpoint. Hawki members are excluded; the Iowa Medicaid benefit\'s age range could not be confirmed.',
        status: 'unverified',
        cites: [
          { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026)', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
        ],
        verifyVia: 'Wellpoint Provider Services 833-731-2143, or Iowa Medicaid Informational Letter 1976 (ABA).',
        blocker: 'document',
      },
      dxRecency: {
        value: 'Not published by Wellpoint.',
        status: 'unverified',
        verifyVia: 'The ABA criteria document Wellpoint provides on request (providernetworkia@wellpoint.com, 833-731-2143).',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Not published by Wellpoint.',
        status: 'unverified',
        verifyVia: 'The ABA criteria document Wellpoint provides on request (providernetworkia@wellpoint.com, 833-731-2143).',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not published by Wellpoint.',
        status: 'unverified',
        verifyVia: 'The ABA criteria document Wellpoint provides on request (providernetworkia@wellpoint.com, 833-731-2143).',
        blocker: 'document',
      },
      referral: {
        value: 'Not published by Wellpoint for ABA.',
        status: 'unverified',
        verifyVia: 'The ABA criteria document Wellpoint provides on request, or Provider Services 833-731-2143.',
        blocker: 'document',
      },
      telehealth: {
        value:
          'Follows the state list; Wellpoint\'s manual has no ABA telehealth rule of its own. Iowa Medicaid allows 97151–97158 by audio/video with modifier 95, POS 02 or 10, and no audio-only.',
        status: 'verified',
        cites: [
          { title: 'Iowa Medicaid Approved Telehealth Services list (updated 7/10/2026)', url: 'https://hhs.iowa.gov/media/13025/download?inline' },
          { title: 'Iowa Medicaid Telecommunication Technology Guide (updated 3/27/2026)', url: 'https://hhs.iowa.gov/media/17602/download?inline' },
        ],
      },
      authTurnaround: {
        value:
          'Routine requests: "the Medical Management department will make a determination as quickly as possible, but always within 7 calendar days of a routine request." Urgent: when more information is needed "the Medical Management team will submit a request within 24 hours," and the provider "will then have 48 hours to provide the additional clinical information." If a request arrives without enough clinical information, Wellpoint makes "at least one attempt" to get it; with no response, "the request will be reviewed with the information originally submitted and denied." The state form 470-5595 caps urgent decisions at 72 hours (42 CFR 438.210). No ABA reauthorization lead time is published.',
        status: 'verified',
        cites: [
          { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026) — Utilization Management', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
          { title: 'Iowa Medicaid Outpatient Prior Authorization Form 470-5595 (Rev. 12/25)', url: 'https://hhs.iowa.gov/media/6157/download?inline' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Bill the other plan first. "Providers must submit coordination of benefits (COB) claims to the primary carrier before submitting to Wellpoint," then submit the total billed charges with the primary\'s remittance advice or a letter explaining the denial; COB claims without one "will be denied with a directive to submit to the other healthcare program first." Wellpoint pays first and recovers later only for preventive pediatric services (including EPSDT) and certain child-support-enforced coverage unpaid after 30 days. Medicaid is payer of last resort under 42 CFR 433.139. The manual does not say whether Wellpoint\'s own ABA authorization is required when another plan is primary.',
        status: 'verified',
        cites: [
          { title: 'Wellpoint Iowa IA Health Link and Hawki Provider Manual (Sept. 1, 2026) — Coordination of Benefits', url: 'https://www.provider.wellpoint.com/docs/gpp/IA_WLP_CAID_ProviderManual.pdf?v=202608101953' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
      },
    },
    faq: [
      { q: 'Does Wellpoint Iowa cover ABA therapy?', a: 'Yes for IA Health Link Medicaid and Iowa Health and Wellness Plan members: its September 2026 manual lists behavioral health intervention services "including applied behavior analysis" as covered (may require prior authorization). Not for Hawki members.' },
      { q: 'Is Wellpoint Iowa the same as Amerigroup Iowa?', a: 'Yes. Wellpoint is the current brand for the plan formerly called Amerigroup Iowa, and both names still appear on cards and in payer directories.' },
      { q: 'Where do ABA authorizations go for Wellpoint Iowa?', a: 'By phone, by fax to the Medicaid behavioral health outpatient line 1-844-451-2826, or through Interactive Care Reviewer in Availity. Check PLUTO for which codes need authorization.' },
    ],
  },

  'molina-healthcare-iowa': {
    slug: 'molina-healthcare-iowa',
    family: 'molina',
    cardDesc: 'IA Health Link MCO; Molina policy MCP 482 (18 months+, >25 hr/wk scrutiny, telehealth for caregiver training/supervision only).',
    assessmentPA: {
      value: 'Not confirmed — Molina publishes its PA codes on a PA Codification List (updated quarterly) that could not be retrieved',
      status: 'unverified',
      cites: [
        { title: 'Molina Healthcare of Iowa — Authorizations (Medicaid)', url: 'https://www.molinahealthcare.com/providers/ia/medicaid/claims/priorauth.aspx' },
      ],
      verifyVia: 'Molina PA Codification List on the Molina Iowa Frequently Used Forms page, or the PA Lookup Tool (molinahealthcare.com/providers/ia/medicaid/palookup); Provider Services (844) 236-1464.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not confirmed at code level — the Molina Iowa manual lists BHIS "including applied behavior analysis" as covered and routes PA through Availity Essentials or UM fax (877) 319-6828; the PA Codification List that names the ABA codes could not be retrieved',
      status: 'unverified',
      cites: [
        { title: 'Molina Healthcare of Iowa — Medicaid 2026 Provider Manual', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Medicaid-Provider-Manual-2026.ashx' },
        { title: 'Molina Healthcare of Iowa — Authorizations (Medicaid)', url: 'https://www.molinahealthcare.com/providers/ia/medicaid/claims/priorauth.aspx' },
      ],
      verifyVia: 'Molina PA Codification List / PA Lookup Tool for 97153, 97155, 97156; Provider Services (844) 236-1464.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes — under Molina Clinical Policy 482, a DSM-5/DSM-5-TR ASD diagnosis made by a multidisciplinary team or qualified clinician using at least one validated diagnostic tool; Iowa Medicaid rules take precedence where they differ',
      status: 'verified',
      cites: [
        { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for Autism Spectrum Disorder (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
      ],
    },
    payer: 'Molina Healthcare of Iowa',
    state: 'IA', kind: 'medicaid-mco', parent: 'Iowa Medicaid (IA Health Link)',
    pill: 'Payer Guide · Molina Healthcare of Iowa',
    h1: 'Molina Healthcare of Iowa ABA coverage (IA Health Link MCO).',
    metaTitle: 'Molina Healthcare of Iowa (IA Health Link) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of Iowa administers Iowa Medicaid ABA: Molina Clinical Policy 482 (diagnosis, 18-month start age, the 25-hour high-intensity review, telehealth limits), Availity and fax submission, the 7-day decision clock in the 2026 manual, and the Hawki exclusion.',
    intro: [
      'Molina Healthcare of Iowa is the newest of the three IA Health Link plans. Its 2026 provider manual lists behavioral health intervention services "including applied behavior analysis" as covered for Medicaid and Iowa Health and Wellness Plan members and not covered for Hawki. For clinical criteria, the Iowa provider site sends providers to Molina\'s national Clinical Policy library, where Molina Clinical Policy 482 (Applied Behavioral Analysis for Autism Spectrum Disorder, approved June 10, 2026) sets the initiation, continuation and telehealth rules. That policy is national and says coverage "may be mandated by applicable legal requirements of a State," so where Iowa Medicaid\'s own ABA rules differ, the state wins.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'IA Health Link MCO (Molina Healthcare)' },
      { label: 'Hawki members', value: 'BHIS including ABA NOT covered' },
      { label: 'Clinical policy', value: 'Molina Clinical Policy 482 (approved 6/10/2026)' },
      { label: 'Start age', value: 'MCP 482: "ASD initiation age is 18 months or older"' },
      { label: 'High intensity', value: 'Over 25 direct hours/week needs extra documentation and 6-month reassessment' },
      { label: 'Prior auth route', value: 'Availity Essentials encouraged; UM fax (877) 319-6828; PA code list updated quarterly' },
      { label: 'Decision time', value: 'Standard: 7 calendar days; expedited: 72 hours (2026 manual)' },
    ],
    sections: [
      {
        h2: 'What Molina Clinical Policy 482 requires',
        body: [
          'Initiation requires a comprehensive assessment and a valid ASD diagnosis with every listed component: "ASD initiation age is 18 months or older"; "Documentation from the Member\'s primary care physician noting initial developmental concerns, screenings, referrals, and treatments provided"; DSM-5 or DSM-5-TR criteria including differentiation from Social Communication Disorder; a diagnosis "determined by a multidisciplinary team with expertise in diagnosing ASD utilizing at least ONE clinically validated tool (e.g. ... ADI-R, ADOS-2, CARS-2, or DISCO)"; adaptive assessments such as the Vineland or ABAS; and, where "a standardized diagnostic assessment is more than 24 months old, updated documentation must describe current ASD symptoms and functional impact." Screening instruments alone "do not independently establish" the diagnosis.',
          'The treatment plan must be developed by a BCBA or BCBA-D who "provides direct and consistent supervision" to BCaBAs and RBTs, must set reassessment intervals "AT LEAST every 6 months," and must document structured caregiver participation. Anything over 25 direct hours a week is "high intensity" and needs documented functional impairment, a reason the hours are necessary, a defined treatment period with planned tapering, and reassessment at least every six months.',
        ],
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for Autism Spectrum Disorder (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'Molina Healthcare of Iowa — Molina Clinical Policy (link to policy library)', url: 'https://www.molinahealthcare.com/providers/ia/medicaid/resources/Molina-Clinical-Policy.aspx' },
        ],
      },
      {
        h2: 'Authorization mechanics',
        body: [
          'Molina encourages Availity Essentials for authorizations and accepts the uniform state form by fax at the Molina Iowa UM line, (877) 319-6828. The older quick reference guide still hosted by Iowa HHS (June 2023) lists a different medical PA fax, (319) 774-1295; use the 2026 manual and the prior-authorization page instead. The list of codes that need PA is the PA Codification List, which Molina says is "customarily updated quarterly" with 30 days\' notice of new requirements; the July 2026 update, for example, changed drug codes only. The 2026 manual commits to decisions within seven calendar days of a complete standard request and 72 hours for an expedited one.',
        ],
        cites: [
          { title: 'Molina Healthcare of Iowa — Authorizations (Medicaid)', url: 'https://www.molinahealthcare.com/providers/ia/medicaid/claims/priorauth.aspx' },
          { title: 'Molina Healthcare of Iowa — Medicaid 2026 Provider Manual', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Medicaid-Provider-Manual-2026.ashx' },
          { title: 'Molina Healthcare of Iowa — PA Code Update, July 1, 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Provider-Notice_PA-Code-Updated-List_July-2026.ashx' },
          { title: 'Iowa HHS — Provider Quick Reference Guide, Molina Healthcare of Iowa (June 2023)', url: 'https://hhs.iowa.gov/media/7599/download' },
        ],
      },
    ],
    collect: [
      { title: 'PCP developmental-concern documentation', desc: 'MCP 482 wants the PCP\'s record of early concerns, screenings and referrals in the packet.' },
      { title: 'Diagnostic report and its age', desc: 'At least one validated tool (ADI-R, ADOS-2, CARS-2, DISCO). Over 24 months old needs an update on current symptoms.' },
      { title: 'Current-quarter PA code list', desc: 'Molina updates the PA Codification List quarterly. Check the ABA codes before each submission.' },
      { title: 'Medicaid line vs. Hawki', desc: 'ABA is not a Hawki benefit.' },
    ],
    sources: [
      { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
      { title: 'Molina Healthcare of Iowa — Medicaid 2026 Provider Manual', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Medicaid-Provider-Manual-2026.ashx' },
      { title: 'Molina Healthcare of Iowa — Authorizations (Medicaid)', url: 'https://www.molinahealthcare.com/providers/ia/medicaid/claims/priorauth.aspx' },
      { title: 'Molina Healthcare of Iowa — Molina Clinical Policy', url: 'https://www.molinahealthcare.com/providers/ia/medicaid/resources/Molina-Clinical-Policy.aspx' },
      { title: 'Iowa HHS — Provider Quick Reference Guide, Molina Healthcare of Iowa (June 2023)', url: 'https://hhs.iowa.gov/media/7599/download' },
      { title: 'Iowa Admin. Code r. 441—77.31 — Behavioral health services providers', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'No ratio, a duty. MCP 482 requires the plan be developed by a BCBA or BCBA-D who "provides direct and consistent supervision to Board-Certified Assistant Behavior Analyst (BCaBA) or Registered Behavior Technicians (RBTs) or another appropriately certified behavior technician as allowed by state mandate," and continuation requires caregiver training "with clinically appropriate supervision by a qualified behavioral analyst." Underneath, Iowa requires RBTs and assistant analysts to work under a Chapter 154D-licensed behavior analyst.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not published by Molina Iowa or the state.',
        status: 'unverified',
        verifyVia: 'Molina Provider Services (844) 236-1464: ask whether 97153 and 97155 for overlapping time both pay.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No daily cap; a weekly review threshold. Under MCP 482, "If proposed treatment intensity exceeds 25 direct hours per week," the request needs documented functional impairment, a reason the intensity is necessary, a defined treatment period with a reassessment date and planned tapering, and reassessment at least every six months. Intensity must be "chosen using a validated measurement tool (e.g., ... ATEC, SSIS, VB-MAPP)."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      noteSignature: {
        value:
          'Follows the state record rule; Molina\'s Iowa manual and MCP 482 add nothing ABA-specific. Each service record needs beginning and ending times for time-based codes, the provider\'s name and credentials, and "the signature of the person providing the service, or the initials ... if a signature log indicates the person\'s identity."',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—79.3 — Maintenance of records (IAC 9/2/26)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.79.pdf' },
        ],
      },
      placeOfService: {
        value:
          'MCP 482 requires a "documented description of service modalities and settings (e.g. home, clinic, community) consistent with the authorized treatment plan," and interventions must not be "intended to primarily address academic instruction or replace services required under an IEP." It sets no ban on any setting.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      billAsProvider: {
        value:
          'Follows the state rule, which Molina\'s Iowa manual does not modify: technician and assistant-analyst claims go out under "the supervising licensed behavior analyst," with the HN, HO or HP modifier. Molina payer ID MLNIA.',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code r. 441—77.31(9)-(10)', url: 'https://www.legis.iowa.gov/docs/iac/chapter/441.77.pdf' },
          { title: 'Iowa Medicaid Informational Letter 2431-MC-FFS — ABA Code Update', url: 'https://secureapp.dhs.state.ia.us/IMPA/Information/ViewDocument.aspx?viewdocument=497e2fa3-f199-4f95-bdad-461a28ff9d83' },
          { title: 'Iowa HHS — Provider Quick Reference Guide, Molina Healthcare of Iowa (June 2023)', url: 'https://hhs.iowa.gov/media/7599/download' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'A lower bound, no upper bound, in Molina\'s policy: "ASD initiation age is 18 months or older." Iowa Medicaid\'s own age range for the benefit could not be confirmed and would take precedence. Hawki members are excluded.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      dxRecency: {
        value:
          'Twenty-four months, soft. "If a standardized diagnostic assessment is more than 24 months old, updated documentation must describe current ASD symptoms and functional impact." An older diagnosis is not disqualifying, but it needs a current-status update.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      diagnosingProviders: {
        value:
          '"A qualified provider or multidisciplinary team with ASD expertise (e.g., clinical psychologists, developmental pediatrician, pediatric neurologist, psychiatrist, or other licensed clinicians permitted under applicable state law to diagnose ASD)." The diagnosis itself must be "determined by a multidisciplinary team with expertise in diagnosing ASD."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      diagnosticTools: {
        value:
          '"At least ONE clinically validated tool (e.g. Autism Diagnostic Interview-Revised [ADI-R], Autism Diagnostic Observation Schedule [ADOS-2], Childhood Autism Rating Scale [CARS-2], or Diagnostic Interview for Social and Communication Disorders [DISCO])," plus adaptive and functional assessments "(e.g., Vineland Adaptive Behavior Scales [VABS], Adaptive Behavior Assessment System [ABAS])" for baseline. Screening instruments "do not independently establish an Autism Spectrum diagnosis."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      referral: {
        value:
          'Not a referral as such, but a PCP document: the diagnostic packet must include "Documentation from the Member\'s primary care physician noting initial developmental concerns, screenings, referrals, and treatments provided," and continuation requires "ongoing primary care physician care coordination, well child visits, and appropriate follow up."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      telehealth: {
        value:
          'Narrower than the state list. The state allows 97151–97158 by audio/video (modifier 95, POS 02 or 10). MCP 482 limits telehealth to "caregiver training, coaching and supervision, or other indirect service components," used "in conjunction with in-person ABA services as part of a clinically justified hybrid service model documented in the authorized ABA treatment plan." Plan technician-delivered 97153 in person.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'Iowa Medicaid Approved Telehealth Services list (updated 7/10/2026)', url: 'https://hhs.iowa.gov/media/13025/download?inline' },
        ],
      },
      authTurnaround: {
        value:
          'The 2026 manual: for an expedited request "Molina will make a determination as promptly as the Member\'s health requires and no later than 72 hours after we receive the initial request"; "For a standard authorization request, Molina makes the determination and provides notification no later than seven (7) calendar days from the receipt of complete request." (The 2025 manual said 14 days; the 2026 edition reflects the federal rule for rating periods from January 1, 2026.) Molina gives 30 days\' notice before adding a service to the PA list. No ABA reauthorization lead time is published; MCP 482 requires reassessment at least every six months.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Iowa — Medicaid 2026 Provider Manual', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Medicaid-Provider-Manual-2026.ashx' },
          { title: '42 CFR 438.210(d) — Managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          '"Medicaid is always the payer of last resort." If another plan is liable, "Providers must bill the primary payer and submit a primary Explanation of Benefits (EOB) to Molina for secondary claim processing," and "Primary carrier payment information is required with the claim submission." Molina pays first and recovers later only for prenatal care, preventive pediatric care and EPSDT. The manual does not say whether Molina\'s ABA authorization is still needed when another plan is primary.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Iowa — Medicaid 2026 Provider Manual (COB and TPL)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ia/2026-Medicaid/News-and-Updates-Page/MHIA-Medicaid-Provider-Manual-2026.ashx' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of Iowa cover ABA therapy?', a: 'Yes for IA Health Link Medicaid and Iowa Health and Wellness Plan members; its 2026 manual lists behavioral health intervention services including applied behavior analysis as covered. Not for Hawki members.' },
      { q: 'What criteria does Molina use for ABA in Iowa?', a: 'Molina Clinical Policy 482 (approved June 10, 2026): start age 18 months or older, a DSM-5 diagnosis by a multidisciplinary team with at least one validated tool, PCP documentation, BCBA-developed plan, reassessment every six months, and extra review above 25 direct hours a week. Iowa Medicaid rules take precedence where they differ.' },
      { q: 'How do I submit a prior authorization to Molina Healthcare of Iowa?', a: 'Through Availity Essentials (encouraged) or by fax to the Molina Iowa UM line (877) 319-6828. Standard decisions come within seven calendar days of a complete request.' },
    ],
  },

  'wellmark-blue-cross-blue-shield-iowa': {
    slug: 'wellmark-blue-cross-blue-shield-iowa',
    family: 'bcbs',
    cardDesc: 'Iowa\'s Blue plan; ABA policy and auth list are behind a provider login, so the Iowa mandate (no age or dollar caps since 2026) is the public floor.',
    assessmentPA: {
      value: 'Not confirmed — Wellmark publishes pre-service review requirements by code in its Authorization Table, which we could not query for 97151/97152',
      status: 'unverified',
      verifyVia: 'Wellmark Authorization Table (wellmark.com/authtable) — search 97151 and 97152; or Wellmark Provider Services at the number on the member ID card.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not confirmed — the Wellmark Authorization Table and the Behavioral Health and Chemical Dependency section of the Provider Guide (Aug. 2026) hold the answer but were not retrievable. Iowa law lets mandated ABA coverage be "subject to care management provisions ... including prior authorization and prior approval"',
      status: 'unverified',
      cites: [
        { title: 'Iowa Code § 514C.31 — Applied behavior analysis for treatment of autism spectrum disorder', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      ],
      verifyVia: 'Wellmark Authorization Table (wellmark.com/authtable) for 97153/97155/97156, and the Behavioral Health and Chemical Dependency Provider Guide section (Aug. 2026) on Wellmark\'s provider site (login required).',
      blocker: 'document',
    },
    dxRequired: {
      value: 'An ASD diagnosis is the trigger for the state mandate (514C.31 covers ABA "for the treatment of autism spectrum disorder pursuant to a treatment plan"); Wellmark\'s own diagnostic criteria were not retrievable',
      status: 'plan-dependent',
      cites: [
        { title: 'Iowa Code § 514C.31 — Applied behavior analysis for treatment of autism spectrum disorder', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      ],
      verifyVia: 'Wellmark Behavioral Health and Chemical Dependency Provider Guide (Aug. 2026, provider login), or Wellmark Provider Services.',
      blocker: 'document',
    },
    payer: 'Wellmark Blue Cross and Blue Shield of Iowa',
    state: 'IA', kind: 'commercial',
    pill: 'Payer Guide · Wellmark · Iowa',
    h1: 'Wellmark Blue Cross and Blue Shield ABA coverage in Iowa: the intake guide.',
    metaTitle: 'Wellmark BCBS of Iowa ABA Coverage: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Wellmark Blue Cross and Blue Shield covers ABA for Iowa families: the Iowa autism mandate after H.F. 330 (no age limit and no dollar cap for plans issued or renewed from 1/1/2026), which Wellmark plans it reaches, Iowa\'s prior-authorization deadlines, behavior-analyst licensure, and what intake must verify because Wellmark\'s ABA policy sits behind a provider login.',
    intro: [
      'Wellmark Blue Cross and Blue Shield is Iowa\'s dominant commercial carrier, and for ABA it is also the least transparent one: its behavioral health provider guide and code-level authorization table are behind a provider login or a search form we could not query, and its public medical-policy index lists no ABA policy. So the public floor for a Wellmark family is the Iowa mandate itself, which changed on January 1, 2026: H.F. 330 (2025 Iowa Acts ch. 162) struck the mandate\'s age limits and dollar caps for large-group and public-employee plans issued or renewed on or after that date. The first intake question on every Wellmark card is therefore which kind of plan it is.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Mandated on large-group and public-employee plans; other plans per the plan document — verify per member' },
      { label: 'State mandate', value: 'Iowa Code § 514C.31 (large group, more than 50 FTEs, and non-state public employers) and § 514C.28 (State of Iowa employee plan)' },
      { label: 'Mandate age', value: 'No age limit for plans issued or renewed on/after 1/1/2026 (H.F. 330 struck under-19 and under-21 limits)' },
      { label: 'Mandate caps', value: 'None since 1/1/2026: H.F. 330 struck the $36,000/$25,000/$12,500 age-banded ABA maximums; no visit limits; § 514C.22 bars annual/lifetime limits on ASD benefits' },
      { label: 'Exempt from mandate', value: 'Individual and small-group (50 or fewer FTEs) plans are outside § 514C.31; self-funded ERISA plans (preempted)' },
      { label: 'Licensure', value: 'Licensed behavior analyst / assistant behavior analyst under Iowa Code ch. 154D (Board of Behavioral Health Professionals)' },
    ],
    sections: [
      {
        h2: 'The Iowa mandate after H.F. 330',
        body: [
          'Iowa Code section 514C.31 requires a "group policy, contract, or plan" to cover "applied behavior analysis provided by a practitioner to covered individuals for the treatment of autism spectrum disorder pursuant to a treatment plan" when it is issued to an employer that employed "more than fifty full-time equivalent employees" on at least half its working days in the prior year, or is a chapter 509A plan for public employees other than State of Iowa employees. State employees are covered separately by section 514C.28, which reaches both the diagnostic assessment and treatment of autism. Until 2026 both sections had age limits (under 19 and under 21) and dollar caps ($36,000 a year to age six, $25,000 for ages seven to 13 and $12,500 for ages 14 to 18 under 514C.31; a $36,000 CPI-indexed cap under 514C.28). H.F. 330 struck them for plans "delivered, issued for delivery, continued, or renewed in this state on or after January 1, 2026," and amended section 514C.22 so that a covered group plan "shall not impose an aggregate annual or lifetime limit on biologically based mental illness coverage benefits for autism spectrum disorder." Visit limits were already barred.',
          'What the mandate still allows: deductibles, copayments and coinsurance that apply to other medical services, and "care management provisions ... including prior authorization and prior approval." The practitioner must be a licensed physician, a licensed psychologist, or a behavior analyst licensed under chapter 154D, and the treatment plan must be developed by a licensed physician or psychologist after a comprehensive evaluation consistent with the American Academy of Pediatrics. The plan may review a treatment plan "not more than once every three months during the first year" and then no more than every six months, at its own cost, and "shall not change the provisions of a treatment plan until the completion of a review." The mandate does not reach individual policies or small-group plans (section 514C.22 makes ASD a covered biologically based mental illness for small-group plans that cover mental illness, but does not name ABA), and self-funded employer plans answer to ERISA.',
        ],
        cites: [
          { title: 'Iowa Code § 514C.31 — Applied behavior analysis for treatment of autism spectrum disorder (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: 'Iowa Code § 514C.28 — Autism spectrum disorder coverage (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
          { title: 'Iowa Code § 514C.22 — Biologically based mental illness coverage (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.22.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330) — Insurance coverage for treatment of autism spectrum disorder', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
      },
      {
        h2: 'What Wellmark publishes, and what it does not',
        body: [
          'Wellmark\'s public medical-policy index is an alphabetical list of medical policies; it contains no ABA policy. The page says InterQual criteria are used "to evaluate whether a medical procedure or equipment is medically necessary," and points to the Authorization Table as "your first stop in learning whether an authorization is required." Behavioral health rules live in the Behavioral Health and Chemical Dependency section of the Wellmark Provider Guide, updated August 2026, which is served from a provider-only location and returned no public copy. We therefore do not state Wellmark\'s ABA criteria, unit limits or telehealth rules on this page. Treat every clinical-policy question as a verification call, and cite the mandate when a plan subject to it applies an age or dollar limit.',
        ],
        cites: [
          { title: 'Wellmark — Medical policies for providers', url: 'https://www.wellmark.com/provider/medical-policies-authorizations/medical-policies' },
          { title: 'Wellmark — Provider Guide (section list and update dates)', url: 'https://www.wellmark.com/provider/resources/wellmark-provider-guide' },
          { title: 'Wellmark — Medical Authorization Table', url: 'https://www.wellmark.com/authtable/' },
        ],
      },
      {
        h2: 'Licensure and prior-authorization law in Iowa',
        body: [
          'Iowa licenses behavior analysts and assistant behavior analysts under Iowa Code chapter 154D, administered by the Board of Behavioral Health Professionals. A license is granted "upon submitting to the board proof of the applicant\'s current certification as a behavior analyst or behavior analyst-doctoral by a certifying entity" (the BACB or another NCCA- or ANSI-accredited body); assistant analysts must also show "ongoing supervision by a licensed behavior analyst." Technicians need no license: chapter 154D exempts "paraprofessional technicians who deliver applied behavior analysis services under the extended authority and direction of a licensed behavior analyst or licensed assistant behavior analyst," who must use titles such as "behavior technician."',
          'For fully insured plans, Iowa Code 514F.8 sets the prior-authorization clock: a determination "within forty-eight hours after receipt for urgent requests," "within ten calendar days after receipt for nonurgent requests," or fifteen days for complex cases or unusually high volume, with a receipt to the provider within 24 hours. An approved authorization is valid "for not less than ninety days," and a plan may not revoke or restrict it after the service has been delivered, except for listed reasons such as fraud, loss of coverage, or coordination of benefits. Self-funded plans follow the federal ERISA claims rule instead. Commercial ABA rates are negotiated in your Wellmark contract and are not published.',
        ],
        cites: [
          { title: 'Iowa Code chapter 154D — Behavioral science (§§ 154D.1, 154D.2A, 154D.4)', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
          { title: 'Iowa Code § 514F.8 — Prior authorizations (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Large group (more than 50 FTEs) or public employer: the mandate applies. Individual, small group or self-funded: the plan document decides.' },
      { title: 'Plan issue or renewal date', desc: 'The no-age-limit, no-dollar-cap rule applies to plans issued or renewed on or after 1/1/2026. An older plan year may still carry the old caps until renewal.' },
      { title: 'Treatment plan author', desc: 'Under § 514C.31 the treatment plan comes from a licensed physician or psychologist after a comprehensive evaluation.' },
      { title: 'Member ID and card photo', desc: 'Wellmark\'s ABA rules are not public, so the benefits call is the answer. Get the ID up front.' },
    ],
    sources: [
      { title: 'Iowa Code § 514C.31 — Applied behavior analysis for treatment of autism spectrum disorder', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      { title: 'Iowa Code § 514C.28 — Autism spectrum disorder coverage', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
      { title: 'Iowa Code § 514C.22 — Biologically based mental illness coverage', url: 'https://www.legis.iowa.gov/docs/code/514C.22.pdf' },
      { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
      { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
      { title: 'Iowa Code § 514F.8 — Prior authorizations', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
      { title: 'Iowa Admin. Code 191—38 — Coordination of benefits', url: 'https://www.legis.iowa.gov/docs/iac/chapter/191.38.pdf' },
      { title: 'Wellmark — Medical policies for providers', url: 'https://www.wellmark.com/provider/medical-policies-authorizations/medical-policies' },
      { title: 'Wellmark — Provider Guide', url: 'https://www.wellmark.com/provider/resources/wellmark-provider-guide' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'No Wellmark standard is public. The legal floor: technicians practice only "under the extended authority and direction of a licensed behavior analyst or licensed assistant behavior analyst" (Iowa Code 154D.4), and under § 514C.31 the covered "treatment plan" includes supervisory services. No ratio is set by statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code chapter 154D — Behavioral science (§ 154D.4 exemptions)', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'Wellmark Behavioral Health and Chemical Dependency Provider Guide (Aug. 2026, provider login) or your Wellmark contract.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not published publicly by Wellmark.',
        status: 'unverified',
        verifyVia: 'Wellmark Provider Services or the Behavioral Health and Chemical Dependency Provider Guide (provider login): ask whether 97153 and 97155 for overlapping time both pay.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Not published publicly. For plans issued or renewed on or after 1/1/2026 that are subject to § 514C.31 or § 514C.28, the mandate bars visit limits and dollar caps on ABA, but medical-necessity review still sets hours.',
        status: 'unverified',
        cites: [
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'The Wellmark authorization notice, or Wellmark Provider Services.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published publicly by Wellmark.',
        status: 'unverified',
        verifyVia: 'Wellmark Medical Records section of the Provider Guide (provider login) and your participation agreement.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Not published publicly by Wellmark. Iowa\'s mandates say coverage is not required "solely based on inclusion of the service in an individualized education program" (§ 514C.28) and do not affect obligations under an IFSP or IEP (§ 514C.31); they neither require nor bar school-setting ABA.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.28', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'The member\'s benefit document and Wellmark Provider Services.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Not published publicly by Wellmark. Under § 514C.31 the covered practitioner is a licensed physician, a licensed psychologist, or "a behavior analyst licensed pursuant to chapter 154D"; technicians are unlicensed paraprofessionals under chapter 154D, so their work is billed through the licensed analyst in practice. Confirm the rendering-NPI rule with Wellmark.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
        ],
        verifyVia: 'Wellmark Claims Filing Provider Guide section (May 2026, provider login) or Provider Services.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Depends on the plan. For large-group and non-state public-employee plans (§ 514C.31) and the State of Iowa employee plan (§ 514C.28) issued or renewed on or after January 1, 2026, the mandate has no age limit: H.F. 330 struck "under nineteen years of age" and "under twenty-one years of age." Plans renewed earlier keep the old limits until renewal. Individual, small-group and self-funded plans follow their plan documents.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
        verifyVia: 'Wellmark Provider Services: confirm group size, funding type and plan renewal date for the member.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Only the State of Iowa employee plan has a statutory rule: under § 514C.28 "the results of a diagnostic assessment of autism spectrum disorder shall be valid for a period of not less than twelve months, unless a licensed physician or licensed psychologist determines that a more frequent assessment is necessary." Wellmark\'s own rule for other plans is not public.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.28', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
        ],
        verifyVia: 'Wellmark Behavioral Health and Chemical Dependency Provider Guide (provider login) or Provider Services.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value:
          'For the State of Iowa employee plan, the diagnostic assessment is performed by "a licensed physician, licensed physician assistant, licensed psychologist, or licensed registered nurse practitioner" (§ 514C.28). Under § 514C.31 the treatment plan must come from a licensed physician or psychologist after a comprehensive evaluation. Wellmark\'s own diagnosing-provider rule is not public.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.28', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'Wellmark Provider Services.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not published publicly by Wellmark; Iowa statute names no instrument.',
        status: 'unverified',
        verifyVia: 'Wellmark Behavioral Health and Chemical Dependency Provider Guide (provider login) or Provider Services.',
        blocker: 'document',
      },
      referral: {
        value:
          'The mandate requires a treatment plan developed by a licensed physician or licensed psychologist "after a comprehensive evaluation or reevaluation" (§ 514C.31), which functions as the order. Whether Wellmark also requires a separate referral is not public.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'Wellmark Provider Services and the member\'s benefit document.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Not published publicly by Wellmark for ABA.',
        status: 'unverified',
        verifyVia: 'Wellmark Provider Services or the Behavioral Health and Chemical Dependency Provider Guide (provider login).',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Set by law, by funding type. Fully insured Wellmark plans follow Iowa Code 514F.8: a determination "within forty-eight hours after receipt for urgent requests," "within ten calendar days after receipt for nonurgent requests," or "within fifteen calendar days" for complex cases or unusually high volume, with a receipt to the provider within 24 hours; an approval is valid "for not less than ninety days" and cannot be revoked after the service is delivered except for listed reasons. The mandate also limits treatment-plan reviews to once every three months in the first year and once every six months after. Self-funded plans follow ERISA: a pre-service decision "not later than 15 days after receipt of the claim" (one 15-day extension) and 72 hours for urgent care.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514F.8 — Prior authorizations (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Wellmark Provider Services: ask whether the plan is fully insured or self-funded, and how far before expiry Wellmark wants the ABA reauthorization.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Iowa\'s COB rule governs fully insured plans: for a child whose parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan; or if both parents have the same birthday, the plan that has covered one of the parents the longest is the primary plan"; for divorced or separated parents, a court decree naming the responsible parent controls. Self-funded plans follow their plan document. If the child also has Medicaid, Wellmark pays first (Medicaid is payer of last resort under 42 CFR 433.139); TRICARE pays after Wellmark ("TRICARE last pay," 32 CFR 199.8) and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Iowa Admin. Code 191—38.15 — Rules for coordination of benefits', url: 'https://www.legis.iowa.gov/docs/iac/chapter/191.38.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    faq: [
      { q: 'Does Wellmark cover ABA therapy in Iowa?', a: 'For large-group (more than 50 FTEs) and public-employee plans, Iowa law requires ABA coverage for autism under Iowa Code § 514C.31 or § 514C.28. For individual, small-group and self-funded plans, the plan document decides. Wellmark\'s ABA policy is not public, so verify each member.' },
      { q: 'Does the Iowa autism mandate still have age limits or dollar caps?', a: 'Not for plans issued or renewed on or after January 1, 2026. H.F. 330 (2025) removed the under-19 and under-21 age limits and the $36,000 / $25,000 / $12,500 annual ABA maximums, and barred annual or lifetime limits on autism benefits. Plans that have not renewed since then may still apply the old caps until renewal.' },
      { q: 'How fast must Wellmark decide an ABA prior authorization?', a: 'For fully insured plans, Iowa Code 514F.8 requires 48 hours for urgent and 10 calendar days for non-urgent requests (15 for complex cases), and an approval lasts at least 90 days. Self-funded plans follow ERISA: 15 days, or 72 hours if urgent.' },
    ],
  },

  'aetna-iowa': {
    slug: 'aetna-iowa',
    family: 'aetna',
    cardDesc: 'Aetna national ABA guide + CPB 0554, layered on Iowa\'s mandate (no age or dollar caps from 1/1/2026).',
    assessmentPA: {
      value: 'Required — Aetna\'s behavioral health precertification list (eff. 8/1/2024) includes ABA codes 97151–97158, 0362T and 0373T',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }],
    },
    treatmentPA: {
      value: 'Required — precertification for 97151–97158, 0362T and 0373T; "To get ABA services precertified, call the number on the member\'s Aetna ID card"',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — a DSM-5 ASD diagnosis (ICD-10 F84.0, F84.3–F84.9) by an appropriate provider',
      status: 'verified',
      cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    payer: 'Aetna in Iowa',
    state: 'IA', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Iowa',
    h1: 'Aetna ABA coverage in Iowa: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Iowa: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Iowa families: the national ABA Medical Necessity Guide, precertification for every ABA code, the Iowa autism mandate after H.F. 330 (no age limit and no dollar cap from 1/1/2026), Iowa\'s prior-authorization deadlines, and behavior-analyst licensure.',
    intro: [
      'For an intake team in Iowa, an Aetna card means three layers at once: Aetna\'s national ABA criteria, Iowa\'s autism mandate (Iowa Code § 514C.31 for large-group and public-employee plans), and the plan\'s funding type, which decides whether the mandate applies at all. Aetna publishes no Iowa-specific ABA document, so the national criteria plus the mandate are the whole written picture.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Aetna\'s national ABA criteria' },
      { label: 'State mandate', value: 'Iowa Code § 514C.31 (large group, more than 50 FTEs, and non-state public employers) and § 514C.28 (State of Iowa employee plan)' },
      { label: 'Mandate age', value: 'No age limit for plans issued or renewed on/after 1/1/2026 (H.F. 330 struck under-19 and under-21 limits)' },
      { label: 'Mandate caps', value: 'None since 1/1/2026: H.F. 330 struck the $36,000/$25,000/$12,500 age-banded ABA maximums; no visit limits; § 514C.22 bars annual/lifetime limits on ASD benefits' },
      { label: 'Exempt from mandate', value: 'Individual and small-group (50 or fewer FTEs) plans are outside § 514C.31; self-funded ERISA plans (preempted)' },
      { label: 'Licensure', value: 'Licensed behavior analyst / assistant behavior analyst under Iowa Code ch. 154D (Board of Behavioral Health Professionals)' },
    ],
    sections: [
      {
        h2: 'The national criteria, applied in Iowa',
        body: [
          'Aetna\'s ABA Medical Necessity Guide requires "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9) obtained by an appropriate provider," services "provided directly or billed by the appropriately licensed provider," and "demonstration of functional impairment on a standardized scale of functioning in the past 12 months" such as the VABS-3, ABAS, VB-MAPP or ABLLS, at least one standard deviation below the mean or a significant risk of harm. The level of impairment must justify the hours requested. As a typical shape, comprehensive ABA runs 10–25 hours a week for children 0–7 years over one to two years; focused ABA is for "All ages" at 1–20 hours a week. Every ABA code, assessment included, is on Aetna\'s behavioral health precertification list.',
        ],
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        ],
      },
      {
        h2: 'The Iowa mandate after H.F. 330',
        body: [
          'Iowa Code § 514C.31 requires large-group plans (employers with more than 50 full-time-equivalent employees) and non-state public-employee plans to cover ABA "provided by a practitioner to covered individuals for the treatment of autism spectrum disorder pursuant to a treatment plan"; § 514C.28 does the same for the State of Iowa employee plan. For plans issued or renewed on or after January 1, 2026, H.F. 330 removed the old age limits (under 19; under 21) and dollar caps ($36,000 / $25,000 / $12,500 by age band; $36,000 for state employees) and added a bar on annual or lifetime limits for autism benefits (§ 514C.22). Cost sharing and "prior authorization and prior approval" are still allowed. Reviews of the treatment plan are limited to once every three months in the first year and every six months after, at the plan\'s cost. Individual, small-group and self-funded plans are outside the ABA mandate.',
        ],
        cites: [
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: 'Iowa Code § 514C.28 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
          { title: 'Iowa Code § 514C.22 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.22.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
      },
      {
        h2: 'Licensure and rates in Iowa',
        body: [
          'Iowa licenses behavior analysts under Iowa Code chapter 154D on proof of current BACB (or other accredited) certification; assistant analysts also need ongoing supervision by a licensed behavior analyst, and technicians are exempt paraprofessionals working under a licensed analyst\'s direction. Iowa is a licensure state, so Aetna\'s clause that services be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws)" points at the Iowa LBA. Aetna does not publish commercial ABA rates; they are negotiated in your participation agreement. For a benchmark, Iowa Medicaid pays $28.59 per 15 minutes for 97153 by a BCBA and $17.16 by a technician.',
        ],
        cites: [
          { title: 'Iowa Code chapter 154D — Behavioral science (§§ 154D.1, 154D.2A, 154D.4)', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
          { title: 'Iowa Medicaid fee schedule — Provider Type 62 Behavioral Health', url: 'https://secureapp.dhs.state.ia.us/MedicaidFeeSched/C62.csv' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Large group or public employer: the Iowa mandate applies. Individual, small group or self-funded: the plan document decides.' },
      { title: 'Plan renewal date', desc: 'No age or dollar caps apply to plans issued or renewed on or after 1/1/2026.' },
      { title: 'Adaptive measure within 12 months', desc: 'Aetna wants a standardized functioning score (VABS-3, ABAS, VB-MAPP or ABLLS) from the past 12 months.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, and the evaluation date.' },
    ],
    sources: [
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      { title: 'Iowa Code § 514C.28', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
      { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
      { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
      { title: 'Iowa Code § 514F.8 — Prior authorizations', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." The guide publishes no percentage or caseload cap. In Iowa, technicians practice only "under the extended authority and direction of a licensed behavior analyst or licensed assistant behavior analyst" (Iowa Code 154D.4).',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not published. Neither the ABA Medical Necessity Guide nor CPB 0554 says whether 97153 and 97155 pay for the same clock time.',
        status: 'unverified',
        verifyVia: 'Aetna provider services at the number on the member ID card, and your participation agreement\'s reimbursement terms.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published. Aetna\'s ABA documents set criteria and precertification but no per-day unit ceiling. Where Iowa\'s mandate applies (plans issued or renewed from 1/1/2026), visit limits and dollar caps on ABA are barred.',
        status: 'unverified',
        cites: [{ title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' }],
        verifyVia: 'The Aetna precertification approval, which states the authorized units.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published in Aetna\'s ABA materials.',
        status: 'unverified',
        verifyVia: 'The Aetna provider manual and your participation agreement\'s documentation clause.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Aetna publishes no ABA place-of-service list. The one boundary it states: "Aetna is not required provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act." Iowa\'s mandate likewise does not affect IEP or IFSP obligations (§ 514C.31). Whether ABA is payable in a school, the community or a group home is a benefit-document question.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'The member\'s benefit document and Aetna provider services.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          '"Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise." Iowa is a licensure state (chapter 154D), so the licensed behavior analyst is who this clause points at.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Aetna sets no upper age limit: comprehensive ABA is typically for ages 0–7, focused ABA for "All ages." The legal layer: plans subject to § 514C.31 or § 514C.28 that were issued or renewed on or after 1/1/2026 have no mandate age limit; plans renewed earlier keep the old limits (under 19; under 21) until renewal; individual, small-group and self-funded plans follow their plan documents.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
        verifyVia: 'Aetna precertification: confirm funding type, group size and renewal date.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Twelve months, on the functional measure rather than the diagnosis: "There is demonstration of functional impairment on a standardized scale of functioning in the past 12 months." The ASD diagnosis itself has no stated shelf life.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          'An "appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." F84.2 (Rett syndrome) is outside the listed codes.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosticTools: {
        value:
          'Adaptive-functioning instruments, not autism diagnostic instruments: "the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS," with impairment at least one standard deviation below the mean. No ADOS-2 or ADI-R requirement appears.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      referral: {
        value:
          'Aetna states no referral requirement. Where Iowa\'s mandate applies, the ABA must follow a treatment plan developed by a licensed physician or licensed psychologist after a comprehensive evaluation (§ 514C.31).',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
        ],
        verifyVia: 'Aetna precertification and the member\'s benefit document.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Not published in Aetna\'s ABA materials.',
        status: 'unverified',
        verifyVia: 'Aetna provider services and the member\'s benefit document: which ABA codes pay by telehealth, and with which POS code.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Aetna publishes no commercial decision clock of its own ("To get ABA services precertified, call the number on the member\'s Aetna ID card"). The legal clock depends on funding. Fully insured Iowa plans follow Iowa Code 514F.8: 48 hours urgent, 10 calendar days non-urgent, 15 days for complex cases, a receipt within 24 hours, and an approval valid for at least 90 days. Self-funded ERISA plans: a pre-service decision "not later than 15 days after receipt of the claim" (one 15-day extension), 72 hours urgent, and 24 hours for an urgent request to extend treatment made "at least 24 hours prior to the expiration."',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Iowa Code § 514F.8 — Prior authorizations (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Aetna precertification: ask whether the plan is fully insured or self-funded, and how far ahead Aetna wants the reauthorization.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Aetna: "We coordinate benefits as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member\'s plan." Many self-funded plans use "Maintenance of Benefits (MOB)" rather than the "100% Allowable" method, so a secondary payment can be smaller. Iowa\'s COB rule governs fully insured plans: for a child of married or cohabiting parents, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan." With Medicaid, Aetna pays first (42 CFR 433.139); TRICARE pays after ("TRICARE last pay," 32 CFR 199.8); "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Iowa Admin. Code 191—38.15 — Rules for coordination of benefits', url: 'https://www.legis.iowa.gov/docs/iac/chapter/191.38.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Iowa?', a: 'Yes, for autism under Aetna\'s national criteria, with precertification for every ABA code. Large-group and public-employee plans must cover ABA under Iowa Code § 514C.31 or § 514C.28; individual, small-group and self-funded plans follow their plan documents.' },
      { q: 'Does the Iowa autism mandate cap ABA hours or dollars?', a: 'Not for plans issued or renewed on or after January 1, 2026: H.F. 330 removed the age limits and the age-banded dollar maximums, and visit limits were already barred. Medical necessity still sets the hours.' },
      { q: 'What does Aetna pay for ABA in Iowa?', a: 'Commercial rates are negotiated in your participation agreement and not published. Iowa Medicaid\'s fee schedule ($28.59 per 15 minutes for 97153 by a BCBA; $17.16 by a technician) is a public benchmark.' },
    ],
  },

  'cigna-iowa': {
    slug: 'cigna-iowa',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 criteria; no PA on 97151/97152/0362T; 1–2 hrs supervision per 10 direct; Iowa mandate (no caps from 2026).',
    assessmentPA: {
      value: 'Not required — "Prior authorization is no longer required for assessment ... CPT codes 97151, 97152, or 0362T with a diagnosis of autism," if the provider is independently licensed or a BCBA and the policy covers ABA',
      status: 'verified',
      cites: [{ title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
    },
    treatmentPA: {
      value: 'Required — "Prior authorization is typically required for applied behavior analysis"; submit the ABA Prior Authorization Form after the assessment, ideally up to 30 days before or within two weeks after the start date',
      status: 'verified',
      cites: [
        { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — confirmed DSM-5-TR ASD (F84.0–F84.9 except F84.2 Rett syndrome), with the diagnosing clinician\'s name, credentials and licensure and the date of the most recent diagnosis',
      status: 'verified',
      cites: [{ title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna in Iowa',
    state: 'IA', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Iowa',
    h1: 'Cigna ABA coverage in Iowa: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Iowa: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna (Evernorth Behavioral Health) covers ABA for Iowa families: coverage policy EN0499, no prior authorization on assessments, supervision and data requirements, the Iowa autism mandate after H.F. 330, Iowa prior-authorization deadlines, and behavior-analyst licensure.',
    intro: [
      'Cigna\'s behavioral health benefits, ABA included, are managed by Evernorth Behavioral Health under coverage policy EN0499 (Intensive Behavioral Interventions, effective May 15, 2026). In Iowa that national policy sits on top of the state autism mandate for large-group and public-employee plans, and plan funding decides whether the mandate applies. Evernorth\'s administrative guidelines carry an Iowa regulatory addendum, but it covers contract terms (continuity of care, emergency services), not ABA criteria, and it does not apply to self-funded plans.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Evernorth/Cigna coverage policy EN0499' },
      { label: 'State mandate', value: 'Iowa Code § 514C.31 (large group, more than 50 FTEs, and non-state public employers) and § 514C.28 (State of Iowa employee plan)' },
      { label: 'Mandate age', value: 'No age limit for plans issued or renewed on/after 1/1/2026 (H.F. 330 struck under-19 and under-21 limits)' },
      { label: 'Mandate caps', value: 'None since 1/1/2026: H.F. 330 struck the $36,000/$25,000/$12,500 age-banded ABA maximums; no visit limits; § 514C.22 bars annual/lifetime limits on ASD benefits' },
      { label: 'Exempt from mandate', value: 'Individual and small-group (50 or fewer FTEs) plans are outside § 514C.31; self-funded ERISA plans (preempted)' },
      { label: 'Licensure', value: 'Licensed behavior analyst / assistant behavior analyst under Iowa Code ch. 154D (Board of Behavioral Health Professionals)' },
    ],
    sections: [
      {
        h2: 'EN0499, applied in Iowa',
        body: [
          'EN0499 requires a confirmed DSM-5-TR ASD diagnosis "by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice," with "the name, credentials, and type of licensure" of the diagnosing clinician and "the date on which the diagnosis was most recently made." The ABA assessment must be done by a BCBA, a Licensed Behavior Analyst or an independently licensed mental health clinician trained in ABA, using a reliable, valid, standardized instrument in its current edition (the policy\'s example: "must be the Vineland-3 vs. Vineland-II"), "completed within 60 days prior to the start of treatment," with baseline data from the same window. Case supervision must be "consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment," with at least one to two hours a week when direct treatment is ten hours or less.',
          'Assessments are easy to start: "Prior authorization is no longer required for assessment ... CPT codes 97151, 97152, or 0362T with a diagnosis of autism," provided the provider is independently licensed or a BCBA and the patient\'s policy covers ABA. Treatment then needs the ABA Prior Authorization Form; Evernorth encourages requests "up to 30 days in advance of or two weeks after the start date of service." The Autism Care Coordinator team is at 877.279.7603.',
        ],
        cites: [
          { title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Iowa mandate after H.F. 330',
        body: [
          'Iowa Code § 514C.31 requires large-group plans (employers with more than 50 full-time-equivalent employees) and non-state public-employee plans to cover ABA for autism under a treatment plan; § 514C.28 does the same for the State of Iowa employee plan. For plans issued or renewed on or after January 1, 2026, H.F. 330 removed the age limits and dollar caps and barred annual or lifetime limits on autism benefits (§ 514C.22). Cost sharing and prior authorization are still allowed; treatment-plan reviews are limited to once every three months in year one and every six months after. Individual, small-group and self-funded plans are outside the ABA mandate.',
        ],
        cites: [
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: 'Iowa Code § 514C.28 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
          { title: 'Iowa Code § 514C.22 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.22.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
      },
      {
        h2: 'Licensure and rates in Iowa',
        body: [
          'Iowa licenses behavior analysts under Iowa Code chapter 154D on proof of current BACB (or other accredited) certification; technicians are exempt paraprofessionals working under a licensed analyst\'s direction. Evernorth does not credential technicians: "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Commercial rates are negotiated in your Evernorth agreement, which lists the ABA services eligible for reimbursement.',
        ],
        cites: [
          { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
          { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Large group or public employer: the Iowa mandate applies. Individual, small group or self-funded: the plan document decides.' },
      { title: 'Diagnosis details', desc: 'Name, credentials and licensure type of the diagnosing clinician, and the date the diagnosis was most recently made.' },
      { title: 'Assessment timing', desc: 'The standardized assessment and baseline data must fall within 60 days before treatment starts.' },
      { title: 'Supervising BCBA or LBA', desc: 'Technician services bill under the supervising provider, and supervision must run one to two hours per ten hours of direct treatment.' },
    ],
    sources: [
      { title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
      { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      { title: 'Iowa Code § 514C.28', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
      { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
      { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
      { title: 'Iowa Code § 514F.8 — Prior authorizations', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Case supervision by a BCBA, LBA or independently licensed ABA-trained clinician: "Direct case supervision (occurs concurrently with the delivery of direct treatment ...) and indirect case supervision is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment." "When direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided." The supervisor\'s name and credentials must be documented.',
        status: 'verified',
        cites: [{ title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Allowed for the analyst-plus-technician pair only: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." ABA delivered "at the same time as any other treatment modality (e.g., ABA and speech therapy ...)" is not covered.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Not published as a per-day ceiling. EN0499 sizes intensity to "the severity of the impairments, goals of treatment, and/or response to treatment." Where Iowa\'s mandate applies (plans issued or renewed from 1/1/2026), visit limits and dollar caps on ABA are barred.',
        status: 'unverified',
        cites: [{ title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' }],
        verifyVia: 'The Evernorth authorization, or the Autism Care Coordinator team at 877.279.7603.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'No ABA-specific session-note signature rule is published in EN0499, the autism resource guide or the administrative guidelines.',
        status: 'unverified',
        verifyVia: 'Your Evernorth provider agreement and Evernorth Provider Services 800.926.2273.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Broad. EN0499: "ABA may be provided in any site medically necessary to address individual needs, such as" residential facilities, childcare facilities, homes, schools, transportation, community settings, clinics, vocational or other educational classes, and recreational and social environments. The limit is content, not location: "Services that are considered primarily educational or vocational in nature, or related to academic or work performance are not covered or reimbursable." In academic settings, documentation must show the provider stays in "line of sight, direct engagement" delivering ABA.',
        status: 'verified',
        cites: [{ title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On paper claims, "List only a BCBA or other licensed provider in box 33." 97151, 97155–97158 are billed by a BCBA-D, BCBA or licensed mental health provider; 97152–97154 may be provided by a BCaBA or technician but are billed by the BCBA-level or licensed provider.',
        status: 'verified',
        cites: [{ title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 sets no age limit. The legal layer: plans subject to § 514C.31 or § 514C.28 issued or renewed on or after 1/1/2026 have no mandate age limit; plans renewed earlier keep the old limits until renewal; individual, small-group and self-funded plans follow their plan documents.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
        verifyVia: 'Evernorth Autism Care Coordinator team 877.279.7603: confirm funding type, group size and renewal date.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No shelf life on the diagnosis, but its date must be supplied ("The date on which the diagnosis was most recently made"). The clock that matters is the ABA assessment: the standardized instrument must be "completed within 60 days prior to the start of treatment," and "Quantitative baseline data have been collected within 60 days prior to the start of treatment."',
        status: 'verified',
        cites: [{ title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"A healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice," with "the name, credentials, and type of licensure" provided.',
        status: 'verified',
        cites: [{ title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'No named autism diagnostic instrument. The ABA assessment must use "a reliable, valid, and standardized assessment instrument that measures the individual\'s functioning in the domains included in the diagnostic criteria for ASD," completed in its entirety, by a trained administrator, in its most current version ("must be the Vineland-3 vs. Vineland-II"), with dates, respondents and form type, and standardized scores and tables attached.',
        status: 'verified',
        cites: [{ title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'EN0499 states no referral requirement. Where Iowa\'s mandate applies, the ABA follows a treatment plan developed by a licensed physician or licensed psychologist after a comprehensive evaluation (§ 514C.31).',
        status: 'plan-dependent',
        cites: [{ title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' }],
        verifyVia: 'Evernorth Autism Care Coordinator team 877.279.7603 and the member\'s benefit document.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          '"All ABA CPT codes are covered telehealth services" (Evernorth autism resource guide), and EN0499 allows "in-person service delivery, telehealth, or a hybrid," chosen on the individual\'s characteristics, caregiver participation and environment. Services by telehealth must still meet the direct-treatment definition.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth/Cigna Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Evernorth asks for ABA requests "up to 30 days in advance of or two weeks after the start date of service"; a later request "may result in a retrospective review and could delay the determination for up to 30 days." The legal decision clock depends on funding: fully insured Iowa plans follow Iowa Code 514F.8 (48 hours urgent, 10 calendar days non-urgent, 15 days complex; approvals valid at least 90 days); self-funded plans follow ERISA (15 days, one 15-day extension; 72 hours urgent).',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth Behavioral Health — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Iowa Code § 514F.8 — Prior authorizations (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Evernorth Autism Care Coordinator team 877.279.7603: ask whether the plan is fully insured or self-funded.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Evernorth: "Dependent children of parents who are married and living together follow the \'birthday rule.\' The plan of the parent whose birthday falls earlier in the calendar year is primary"; divorced or separated parents follow the "custodial rule" and any court decree. Bill the primary first and submit the COB claim with the primary\'s payment or denial (paper COB claims need the EOP). Iowa\'s COB rule (191—38.15) says the same for fully insured plans. With Medicaid, Cigna pays first (42 CFR 433.139); TRICARE pays after ("TRICARE last pay," 32 CFR 199.8); "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026) — Coordination of benefits', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Iowa Admin. Code 191—38.15 — Rules for coordination of benefits', url: 'https://www.legis.iowa.gov/docs/iac/chapter/191.38.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Iowa?', a: 'Yes, for autism under Evernorth/Cigna coverage policy EN0499. Large-group and public-employee plans must cover ABA under Iowa\'s mandate; individual, small-group and self-funded plans follow their plan documents.' },
      { q: 'Does the ABA assessment need prior authorization with Cigna?', a: 'No. Evernorth no longer requires PA for 97151, 97152 or 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA. Treatment needs the ABA Prior Authorization Form.' },
      { q: 'How much supervision does Cigna expect?', a: 'One to two hours of case supervision per ten hours of direct treatment, and at least one to two hours a week when direct treatment is ten hours or less.' },
    ],
  },

  'unitedhealthcare-iowa': {
    slug: 'unitedhealthcare-iowa',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (1–2 hrs supervision per 10 direct), 32-unit 97153 daily edit, telehealth only for supervision/caregiver training; Iowa mandate.',
    assessmentPA: {
      value: 'Required — Optum\'s ABA FAQ: "All services require prior approval"; the Supplemental Clinical Criteria require PA for ABA unless contract or law says otherwise',
      status: 'verified',
      cites: [
        { title: 'Optum — Autism/ABA Frequently Asked Questions (BH3632, 10/2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
        { title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)"; in-network BH providers submit through Optum Forms on Provider Express or by fax/phone per the member ID card',
      status: 'verified',
      cites: [
        { title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: '2026 UnitedHealthcare Care Provider Administrative Guide', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — a DSM-5-TR ASD diagnosis (or other diagnosis required by governing law) by a state-licensed physician, psychologist or other qualified clinician, confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [{ title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'UnitedHealthcare in Iowa',
    state: 'IA', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Iowa',
    h1: 'UnitedHealthcare ABA coverage in Iowa: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Iowa: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare (Optum Behavioral Health) covers ABA for Iowa families: Optum\'s ABA clinical criteria and reimbursement policy (modifiers, the 32-unit 97153 daily edit, concurrent billing), telehealth limits, the Iowa autism mandate after H.F. 330, and Iowa prior-authorization deadlines.',
    intro: [
      'UnitedHealthcare\'s behavioral health benefits, ABA included, are administered by Optum. For an Iowa family that means Optum\'s Supplemental Clinical Criteria for ABA (policy BH803ABASCC, interim review April 2026) and its commercial ABA reimbursement policy, on top of Iowa\'s autism mandate where the plan is large-group or public-employee. Funding type decides whether the mandate applies.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Optum\'s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'Iowa Code § 514C.31 (large group, more than 50 FTEs, and non-state public employers) and § 514C.28 (State of Iowa employee plan)' },
      { label: 'Mandate age', value: 'No age limit for plans issued or renewed on/after 1/1/2026 (H.F. 330 struck under-19 and under-21 limits)' },
      { label: 'Mandate caps', value: 'None since 1/1/2026: H.F. 330 struck the $36,000/$25,000/$12,500 age-banded ABA maximums; no visit limits; § 514C.22 bars annual/lifetime limits on ASD benefits' },
      { label: 'Exempt from mandate', value: 'Individual and small-group (50 or fewer FTEs) plans are outside § 514C.31; self-funded ERISA plans (preempted)' },
      { label: 'Licensure', value: 'Licensed behavior analyst / assistant behavior analyst under Iowa Code ch. 154D (Board of Behavioral Health Professionals)' },
    ],
    sections: [
      {
        h2: 'Optum\'s criteria, applied in Iowa',
        body: [
          'Optum requires "a valid diagnosis of ASD (or other applicable diagnosis as required by governing laws)" from "a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis," with the DSM-5 diagnosis and severity level "confirmed and documented by the diagnosing clinician using at least one clinically validated tool," from screening tools such as the M-CHAT to formal diagnostic tools such as the ADI-R, ADOS-2 and DISCO. The ABA provider must be a BCBA or a licensed behavioral health clinician credentialed for ABA; technicians should be RBTs "or another appropriately certified behavior technician as allowable by state mandate." Direct case supervision "is required 1–2 hours for every 10 hours of direct treatment per week." ABA is not covered for "1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA)," though school coordination, teacher training and school observations are.',
        ],
        cites: [
          { title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Iowa mandate after H.F. 330',
        body: [
          'Iowa Code § 514C.31 requires large-group plans (employers with more than 50 full-time-equivalent employees) and non-state public-employee plans to cover ABA for autism under a treatment plan; § 514C.28 covers the State of Iowa employee plan. For plans issued or renewed on or after January 1, 2026, H.F. 330 removed the age limits and dollar caps and barred annual or lifetime limits on autism benefits (§ 514C.22). Cost sharing and prior authorization remain allowed; treatment-plan reviews are limited to once every three months in year one and every six months after. Individual, small-group and self-funded plans are outside the ABA mandate.',
        ],
        cites: [
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: 'Iowa Code § 514C.28 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
          { title: 'Iowa Code § 514C.22 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.22.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
      },
      {
        h2: 'Billing, licensure and rates',
        body: [
          'Optum\'s commercial ABA reimbursement policy (2022RP501A, updated June 2026) requires a credential modifier on every line: HM for an RBT, HN for a BCaBA, HO for a master\'s-level BCBA or licensed mental health provider, HP for a BCBA-D; only one per line. It allows up to 32 units a day of 97153, and 97153/97154 may be billed with 97155 concurrently "as long as the criteria in the descriptors of both codes are met." Iowa licenses behavior analysts under chapter 154D on proof of current BACB (or accredited) certification; technicians are exempt paraprofessionals working under a licensed analyst\'s direction. Commercial rates are negotiated and not published.',
        ],
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Iowa Code chapter 154D — Behavioral science', url: 'https://www.legis.iowa.gov/docs/code/154D.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding and group size', desc: 'Large group or public employer: the Iowa mandate applies. Individual, small group or self-funded: the plan document decides.' },
      { title: 'Diagnostic report with a validated tool', desc: 'Optum wants the DSM-5 diagnosis and severity confirmed with at least one clinically validated tool.' },
      { title: 'Technician credential', desc: 'Each claim line needs the rendering credential modifier (HM for RBT). Know who delivers each session.' },
      { title: 'Virtual-visits attestation', desc: 'Remote supervision and caregiver training need an Optum virtual-visits attestation first.' },
    ],
    sources: [
      { title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Autism/ABA Frequently Asked Questions (BH3632, 10/2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      { title: 'Optum Behavioral Health National Provider Network Manual (eff. 9/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
      { title: '2026 UnitedHealthcare Care Provider Administrative Guide', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
      { title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
      { title: 'Iowa Code § 514C.28', url: 'https://www.legis.iowa.gov/docs/code/514C.28.pdf' },
      { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
      { title: 'Iowa Code § 514F.8 — Prior authorizations', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians must be "under the applicable supervision of a BCBA or licensed behavioral health clinician," and Optum advises against parents serving as their own child\'s RBT.',
        status: 'verified',
        cites: [{ title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      concurrentBilling: {
        value:
          '"Q. Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." 97155 is only for direct work with the patient or directing a technician; treatment planning while the technician works is not billable. 97155 and 97156 on the same day must be separate, distinct times.',
        status: 'verified',
        cites: [{ title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      dailyLimits: {
        value:
          'Per-code daily maximums in the reimbursement policy: 97152 16 units (4 hours); 97153 32 units (8 hours); 97154 18 units; 97155 24 units (6 hours); 97156 and 97157 16 units each. "Optum allows 32 units per day for CPT code 97153. If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery."',
        status: 'verified',
        cites: [{ title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      noteSignature: {
        value:
          '"Provider signature is required on progress notes. Parent/guardian signatures are not required on progress notes." Each daily session note must include "place of service, start and stop time, who rendered the service, the specific service ..., who attended the session and interventions that occurred during the session."',
        status: 'verified',
        cites: [{ title: 'Optum — Autism/ABA Frequently Asked Questions (BH3632, 10/2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
      },
      placeOfService: {
        value:
          'Optum\'s ABA FAQ lists place-of-service codes 12 (home), 11 (clinic), 99 (community) and 02 (telehealth, "Only allowed for supervision and caregiver training"). In school, ABA is not covered for a "1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act," but "School ABA services do allow for coordination of services and would cover services such as teacher training, meetings with school personnel, and observations in the school setting."',
        status: 'verified',
        cites: [
          { title: 'Optum — Autism/ABA Frequently Asked Questions (BH3632, 10/2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Every line carries the rendering credential: "HM Modifier: ... a Registered Behavior Technician (RBT)"; "HN Modifier: ... a Board-Certified Assistant Behavior Analyst"; "HO modifier: ... Board Certified Behavior Analyst (BCBA) or a licensed mental health provider"; "HP modifier: ... BCBA-D or a licensed mental health provider." Only one provider-level modifier per line. The HM description notes "State regulatory requirements may supplement, modify or supersede this policy."',
        status: 'verified',
        cites: [{ title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Optum\'s criteria set no age limit. The legal layer: plans subject to § 514C.31 or § 514C.28 issued or renewed on or after 1/1/2026 have no mandate age limit; plans renewed earlier keep the old limits until renewal; individual, small-group and self-funded plans follow their plan documents.',
        status: 'plan-dependent',
        cites: [
          { title: 'Iowa Code § 514C.31 (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' },
          { title: '2025 Iowa Acts ch. 162 (H.F. 330)', url: 'https://www.legis.iowa.gov/docs/acts/2025/CH0162.pdf' },
        ],
        verifyVia: 'Optum ABA/Autism team at the behavioral health number on the member ID card: confirm funding type, group size and renewal date.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'No fixed window is published. The FAQ says members "need to have an updated DSM-5 diagnosis of Autism Spectrum Disorder to be eligible"; the criteria do not define "updated" in months.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum — Autism/ABA Frequently Asked Questions (BH3632, 10/2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
        verifyVia: 'The Optum ABA Care Advocate at authorization: ask how old a diagnostic evaluation may be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: '"A state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR."',
        status: 'verified',
        cites: [{ title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          '"At least one clinically validated tool (not an all-inclusive list)": first-level screening tools (ABC, CHAT/M-CHAT, CSBS-DP-IT Checklist, ASQ, AQ, CAST), second-level tools (CARS/CARS-2, RITA-T, STAT), or formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity must be set with a validated measurement tool such as ATEC, VB-MAPP, ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland or CFQL-2.',
        status: 'verified',
        cites: [{ title: 'Optum Supplemental Clinical Criteria — Applied Behavior Analysis (interim review 04/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'Optum\'s criteria state no referral requirement. Where Iowa\'s mandate applies, the ABA follows a treatment plan developed by a licensed physician or licensed psychologist after a comprehensive evaluation (§ 514C.31).',
        status: 'plan-dependent',
        cites: [{ title: 'Iowa Code § 514C.31', url: 'https://www.legis.iowa.gov/docs/code/514C.31.pdf' }],
        verifyVia: 'The member\'s benefit document; UnitedHealthcare plans that require referrals say so on the card.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Supervision and caregiver training only, after an attestation. POS 02 is "Only allowed for supervision and caregiver training," and "In order to provide supervision and family training services virtually, you must be an approved Optum virtual visits provider who has attested to meeting the requirements." Bill the in-person code (97155 or 97156) with POS 02 and tell the ABA Care Advocate at authorization.',
        status: 'verified',
        cites: [{ title: 'Optum — Autism/ABA Frequently Asked Questions (BH3632, 10/2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
      },
      authTurnaround: {
        value:
          'Optum publishes no commercial ABA decision clock; retrospective reviews are decided "within 30 calendar days of receipt of the request" and must be requested within 180 days of service. Fully insured Iowa plans follow Iowa Code 514F.8 (48 hours urgent, 10 calendar days non-urgent, 15 days complex; approvals valid at least 90 days). Self-funded plans follow ERISA (15 days, one 15-day extension; 72 hours urgent). For more units mid-authorization, call the ABA team with clinical rationale before the current approval expires.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum Behavioral Health National Provider Network Manual (eff. 9/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'Iowa Code § 514F.8 — Prior authorizations (Iowa Code 2026)', url: 'https://www.legis.iowa.gov/docs/code/514F.8.pdf' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'The Optum ABA/Autism team at the behavioral health number on the member ID card: ask whether the plan is fully insured or self-funded.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Optum: "You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first," and "If Optum is a secondary plan, you will be paid up to the Optum contracted rate," with no balance billing for the difference. Iowa\'s COB rule governs fully insured plans: the plan of the parent whose birthday falls earlier in the calendar year is primary for a child of married or cohabiting parents. With Medicaid, UnitedHealthcare pays first (42 CFR 433.139); TRICARE pays after ("TRICARE last pay," 32 CFR 199.8); "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Optum Behavioral Health National Provider Network Manual (eff. 9/1/2026) — Coordination of Benefits', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'Iowa Admin. Code 191—38.15 — Rules for coordination of benefits', url: 'https://www.legis.iowa.gov/docs/iac/chapter/191.38.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Iowa?', a: 'Yes, for autism under Optum\'s ABA criteria, with prior authorization. Large-group and public-employee plans must cover ABA under Iowa\'s mandate; individual, small-group and self-funded plans follow their plan documents.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare?', a: 'Only supervision (97155) and caregiver training (97156), billed with POS 02, and only after the provider completes Optum\'s virtual-visits attestation.' },
      { q: 'How many hours a day of 97153 will Optum pay?', a: 'Up to 32 units (8 hours) a day under the commercial ABA reimbursement policy; claims above that may be denied or recovered.' },
    ],
  },
};

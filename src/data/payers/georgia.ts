import type { PayerConfig } from './types.js';

export const georgiaPayers: Record<string, PayerConfig> = {
  'georgia-medicaid': {
    slug: 'georgia-medicaid',
    cardDesc: 'EPSDT under 21, Katie Beckett path, CMO landscape, PA packages.',
    assessmentPA: {
      value:
        'Required — a separate prior authorization for the behavioral assessment, requested in 3-month increments',
      status: 'verified',
      cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
    treatmentPA: {
      value:
        'Required — separate PA in 6-month increments; after the first treatment PA, each ongoing request is one consolidated PA carrying the treatment and reassessment codes',
      status: 'verified',
      cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
    dxRequired: {
      value:
        'Yes — an ASD diagnosis as defined in the current DSM, established before any PA is requested; claims need an F84.0, F84.2, F84.3, F84.5, F84.8 or F84.9 diagnosis code (EPSDT ABS benefit)',
      status: 'verified',
      cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
    payer: 'Georgia Medicaid',
    state: 'GA', kind: 'state-medicaid',
    intakeGates: {
      ageLimit: {
        value:
          'Under 21. The current DCH ASD manual (version date July 1, 2026) states it under General Eligibility: “Autism Spectrum Services are for individuals under the age of 21,” and the benefit is assessment and treatment “provided to Medicaid beneficiaries in accordance with the Early and Periodic Screening, Diagnostic and Treatment (EPSDT) Benefit and according to medical necessity.” Four further conditions sit alongside the age bound: Medicaid must be active on each date of service; “children must be able to participate in sessions”; the member “must exhibit behaviors that present as clinically significant health or safety risks to self or others or are behaviors that are significantly interfering with basic selfcare, communication, or social skills”; and members or caregivers “must be able to participate in ABS therapy and have the ability to implement ABS techniques in the home environment as instructed by their behavior analyst.”',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      dxRecency: {
        value:
          'Three clocks, none of them a fixed expiry on the diagnosis itself. Re-diagnosis: “a diagnostic re-evaluation to re-confirm diagnosis may be required” when the diagnosis is provisional, when “no formal neuropsychological evaluation was completed/conducted,” or when it is “more than 5 years from initial diagnosis and no evidence of ongoing assessment and treatment”; the re-evaluation “must include, at a minimum, 1 clinician observational assessment.” Behavioral assessment: it “must have been conducted/dated no more than two (2) months prior to the Treatment PA effective date,” and follow-up treatment PAs need “the results of a recent Behavioral Assessment (within 2 months).” Data: progress and probe data on a continued-treatment request “must not be more than two months older than the effective date of the requested prior authorization.” A diagnostic evaluation Medicaid did not pay for is accepted, and the manual puts no age limit on it.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Credential: “a documented diagnosis of ASD must be established by a licensed physician or psychologist, or other licensed professional as designated by the Medical Composite Board prior to completing a PA for Behavioral Assessment or Treatment Services,” and “the diagnosis must be made by a practitioner enabled by the OCGA practice acts to diagnose behavioral health/intellectual/developmental conditions.” The evaluation report must summarise each instrument, give the date completed with the tests administered and scores, and carry “the evaluator’s signature, name, and credentials” — “test forms alone are not acceptable.” Primary hearing deficits, primary speech disorder and heavy metal poisoning must be ruled out as causal. The July 2026 manual no longer carries the one-year ASD-experience requirement on the diagnostician that the January 2018 edition imposed.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      diagnosticTools: {
        value:
          'Two tools, one from each side, and it is now the state rule rather than a CMO one: a “minimum of two (2) assessment tools (1 primary clinician tool and 1 caregiver tool)” from DCH’s approved list, in an evaluation that uses “valid and reliable evaluation tools that conform to industry standards and include direct observation, parent/caregiver interviews, and standardized tools for the diagnosis of autism.” Clinician tools include ADOS-2, GARS-3, CARS-2 ST/HF, STAT, CSBS, TELE-ASD-PEDS, NODA, DISCO, RITA-T, ADEC, EarliPoint and Canvas Dx; caregiver tools include ADI-R, DISCO, CARS-QPC, GARS-3, SCQ, M-CHAT, SRS-2, ASRS, ABC and TASI, plus non-ASD-specific tools such as BASC, PDD-BI, PEDS:DM, ASQ-3, ASQ:SE2, CBRS, CDI and the CSBS-DP Infant-Toddler Checklist. CARS and GARS cannot count twice: using the clinician and caregiver versions of the same scale “requires a separate acceptable caregiver or clinician tool.” “School psychoeducational assessments are not acceptable for diagnostic evaluations.”',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      referral: {
        value:
          'Two separate gates, and only one of them is what intake usually means by “referral.” Clinically, ASD services “must be recommended by a licensed physician or other licensed practitioner of the healing arts acting within their scope of practice under state law” per 42 CFR 440.130(c), and “all ABS PAs must be requested by the enrolled QHCP” — a licensed physician, psychologist, BCBA-D or BCBA; BCaBAs and RBTs cannot serve as the QHCP. Administratively, the ordering, prescribing or referring practitioner’s NPI must appear on the claim — on the CMS-1500 “enter qualifiers to indicate if the claim has an ordering, referring, or prescribing provider to the left of the dotted line in box 17 (Ordering = DK; Referring = DN or Supervising = DQ)” — and that practitioner must be enrolled in Georgia Medicaid, or the claim denies. The treatment PA package also carries the IFSP/IEP where applicable.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      telehealth: {
        value:
          'Georgia publishes a real telehealth benefit for ABS, set out in the DCH Part II Telehealth Guidance (version date 10/1/2025), which carries its own ASD section. “Practitioners of ASD services can use telehealth to assess, diagnose and provide therapies to patients,” provided they hold a current Georgia medical or psychology licence or a valid ABA certification; Georgia Medicaid enrols BCBAs as QHCPs for this purpose. The guidance publishes a Category I code table for telehealth ABS — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, each in 15-minute units with the GT modifier and the U1–U5 practitioner-level modifier (U1 physician/psychiatrist, U2 psychologist or BCBA-D, U3 BCBA, U4 BCaBA, U5 RBT). On the claim, “the GT modifier is required as applicable, and/or the use of either POS 02 or POS 10,” where POS 02 is telehealth outside the patient’s home and POS 10 is telehealth in the patient’s home; CPT modifier 93 may be appended for audio-only services where appropriate. Prior authorization applies to telehealth ABS exactly as it does in person, and the ASD manual (July 2026) adds a front-end step: “If telehealth service delivery is requested for any CPT codes, completion of the Telehealth Readiness Checklist is required.” There is no 50-mile telehealth rule: DCH added a Georgia-or-within-50-miles note to the ASD manual’s “Telemed” location code in July 2024 and removed it the same quarter. The 50-mile test that remains is an enrollment rule (see who can bill).',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy — the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      authTurnaround: {
        value:
          'Federal law sets the ceiling, and Georgia\'s CMOs publish a faster clock. For fee-for-service members, the state must decide a standard prior authorization "in no case later than 7 calendar days after receiving the request" (beginning January 1, 2026). It may add up to 14 calendar days if the family or provider asks or the state needs more information. Expedited requests are due "no later than 72 hours." CMO members fall under the federal managed-care cap of 7 calendar days from receipt (42 CFR 438.210(d)), plus Georgia\'s prior-authorization law. That law applies to DCH\'s CMO contracts (O.C.G.A. 33-46-30): notice "within 7 calendar days of obtaining all necessary information," 72 hours for urgent, and "automatic authorization" when a deadline is missed. All three CMOs\' current manuals print a stricter standard: three business days for a standard request and 24 hours for an expedited one. For fee-for-service ABS, DCH\'s ASD manual (July 2026) tells providers to "allow up to 7 calendar days for the PA request to be reviewed and a decision issued," plus 10 more calendar days when supplemental documentation is sent to cure a technical or peer denial. Treatment PAs run in six-month increments and assessment PAs in three-month increments. Reauthorization lead time: requests "may be submitted up to 2 months before the PA\'s effective date," the reassessment may be done no more than 2 months before the next treatment period starts, and an effective date may be set up to 30 days before submission but never backdated further.',
        status: 'verified',
        cites: [
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'CareSource Georgia Medicaid Provider Manual (GA-MED-P-2890751a, July 2026)', url: 'https://www.caresource.com/documents/ga-provider-manual.pdf' },
          { title: 'Peach State Health Plan Provider Manual (April 2026)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/pdfs/GA-INT-11666%20Provider%20Handbook%20Update%202026%20FINAL%202_R.pdf' },
          { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' },
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
          { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Georgia Medicaid pays last. DCH\'s Part I manual (version date July 1, 2026): "other available third-party resources must be exhausted before Medicaid/PeachCare for Kids pays." Providers must file "with the appropriate primary health plan(s) prior to filing with Medicaid" and list the other insurers and their payments on the claim. Medicaid pays only the gap up to its own maximum allowable. Get Medicaid\'s own PA even when Medicaid is secondary. DCH\'s Part I manual: "Regardless of whether or not the primary plan has made any payment toward a service, when billing the secondary claim to Medicaid, you must follow the Medicaid policies and procedures for that particular Category of Service, including adherence to all policies/guidelines for pre- certification and pre-authorizations of services." A claim the primary plan denied because the provider did not follow its rules is not paid: DCH "will not reimburse the provider submitted charges denied by the primary plan because of the provider\'s failure to follow the primary plan\'s rules." So get the commercial PA as well. A service the primary plan does not cover, or where its annual or lifetime limits are exhausted, "is reimbursable up to the Medicaid/PeachCare for Kids maximum allowable amount." EPSDT exception: "A provider is not required to exhaust other health plan benefits with respect to claims for preventive and pediatric services including health check (also known as EPSDT)." The manual does not say whether ABS claims fall under it. TRICARE pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before Georgia Medicaid. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '42 U.S.C. 1396a(a)(25) — Medicaid third-party liability', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title42/html/USCODE-2023-title42-chap7-subchapXIX-sec1396a.htm' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'The member\'s CMO or the GAMMIS TPL unit (678-564-1162, option 3) — ask whether an ABS claim for a child under 21 is paid under the EPSDT exception without the primary EOB.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Georgia leaves the ratio to the BACB and sets an intensity guide instead. “Supervision” is direct clinical review for training or teaching by a physician, psychiatrist, BCBA-D or BCBA and “does not require the supervisor to be present at the work site”; supervisor and supervisee must each keep “a contemporaneous record of the date, duration, type, and brief summary of the pertinent activity for each supervision session,” producible on audit. Supervision of non-enrolled practitioners “must be performed in accordance with the supervision guidelines of the Behavior Analyst Certification Board and this policy manual,” and it “is not separately reimbursable as it is built into the direct service codes rates; however, ‘direction’ may be separately reimbursable” (as 97155). DCH’s treatment-plan guidance adds: “Supervision typically accounts for 10–20% of direct care hours. Any request exceeding 20% must be supported by a documented medical necessity.” Who supervises whom: physicians, psychologists, BCBA-Ds and BCBAs may supervise BCaBAs and RBTs; a BCaBA must be supervised by a physician, psychologist or BCBA/BCBA-D and may supervise RBTs; an RBT is supervised by a BCBA/BCBA-D or BCaBA and can never be the QHCP. The July 2026 manual no longer carries the six-supervisee caseload cap or the staffing attestation form of the 2018 edition.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, for direction. The manual defines “direction” as the QHP observing the technician implement the patient’s protocols and giving feedback, or demonstrating a new or modified protocol, and says it “should be reported and billed using code 97155… The technician’s time is separately reportable under 97153… Time reported and billed must be face-to-face time with the patient.” The limits: for 97155, “documentation of only supervision or documentation of services being performed at a time when the member is not present would not be appropriate,” and “97154 and 97158 should not be billed concurrently” — when the analyst joins a technician-led group to direct it, 97154 and 97155 are reported together; 97158 is for groups the analyst leads.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      dailyLimits: {
        value:
          'Georgia publishes a per-code daily ceiling in Appendix A of the ASD manual, headed “Daily Max Units per Procedure code as Mandated by CMS, effective 7/1/2021”: 97151 = 32, 97152 = 16, 97153 = 32, 97154 = 18, 97155 = 24, 97156 = 16, 97157 = 16, 97158 = 16, 0362T = 16, 0373T = 32 (15-minute units). Weekly intensity is set by the PA: treatment “typically range[s] from 10 to 30 hours per week,” and “requests exceeding 30 hours per week will undergo an enhanced authorization review.” Group sessions billed as 97154 need at least two and no more than eight participants.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      noteSignature: {
        value:
          'Whoever delivered the service writes and signs the note. For RBT- or BCaBA-rendered services such as 97153, “the RBT or BCaBA delivering the service is responsible for completing and signing the daily session or progress note, with clinical oversight provided by the supervising BCBA in accordance with BACB requirements.” Records must contain “progress notes that are legible, detailed, complete, signed and dated”; every signature must be “legible, original and belong to the person creating the signature” (with the name printed if illegible) and dated the actual date signed; rubber stamps are not accepted, and “Secure Electronic Signatures are acceptable” only as the Part I manual defines them. Records are documented in ‘real time’ and not back-dated; corrections take a single strike-through plus the corrector’s initials and date, never whiteout. The treatment plan carries the supervising BCBA/BCBA-D’s signature.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      placeOfService: {
        value:
          'Georgia prices by setting and regulates school delivery. Every ABS line carries a location modifier — U6 in-clinic, U7 out-of-clinic (“billable for delivery of ASD services in any location outside of your agency/clinic,” at a higher rate), GT telemedicine — alongside the practitioner-level modifier. School delivery is allowed but gated: a separate school plan is required “for all educational settings to include both public and private schools” (daycares and after-school programs only when services are provided under IDEA), with operationally defined target behaviors, behavior-reduction line graphs, a titration plan for fading school services, and the IEP, IFSP or 504 plan for a public-school student. School plans “should be accompanied with a treatment plan for services to also occur in either the home and/or clinic setting,” because treatment at school is limited to reducing problem behavior that blocks academic work; school-only services are an individual exception. Training school personnel is reimbursable only with the parent or guardian present, in person or virtually. The manual sets no group-home rule.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      billAsProvider: {
        value:
          'Group enrollment, with the supervising BCBA as the rendering provider for technician time. Practices that submit professional claims and have two or more individuals “must enroll as a group,” and physicians, psychologists, BCBA-Ds and BCBAs “must enroll as rendering providers linked to the group or facility.” “For RBT or BCaBA rendered services, such as 97153, the supervising BCBA must be identified as the rendering provider on the claim”; BCaBAs and RBTs “are not enrolled directly by the Division as providers because they are not considered independent practitioners,” and their services are claimed under the enrolled provider number of the QHCP and/or facility. There is no grace period: “Services delivered by individuals who are not fully credentialed or not enrolled in the Medical Assistance program are not billable.” To enroll, the practitioner “must reside in Georgia or within 50 miles of the Georgia border and must hold an active license issued by the Georgia BCBA Licensure Board.” Practitioner level rides as a modifier (U1 physician/psychiatrist, U2 psychologist or BCBA-D, U3 BCBA, U4 BCaBA, U5 RBT) plus the setting modifier (U6/U7/GT). The ordering, prescribing or referring practitioner’s NPI must be on the claim (CMS-1500 box 17: DK ordering, DN referring, DQ supervising) and enrolled in Georgia Medicaid, or the claim is denied.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
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
      { label: 'Diagnosis recency', value: 'Re-evaluation may be required 5+ years after diagnosis; behavioral assessment within 2 months of the treatment PA' },
      { label: 'Staff screening', value: 'GCIC+FBI fingerprints for licensed analysts; BACB 180-day check is the only technician-level screen' },
    ],
    sections: [
      {
        h2: 'Who qualifies',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'GA DCH — Katie Beckett / TEFRA', url: 'https://medicaid.georgia.gov/programs/all-programs/tefrakatie-beckett' }],
        body: [
          'Coverage applies to Medicaid members under age 21 with a documented DSM-5 ASD diagnosis established by a licensed physician, psychologist, or other qualifying professional using evidence-based tools — under the current DCH manual the diagnostic evaluation needs at least two instruments (one clinician tool such as ADOS-2 or CARS-2, plus one caregiver tool such as ADI-R or SRS-2), and a re-evaluation may be required when the diagnosis is more than five years old with no evidence of ongoing assessment and treatment. School psychoeducational assessments don\'t qualify.',
          'The detail most intake teams miss: families who "make too much for Medicaid" often still qualify through the Katie Beckett (TEFRA) deeming waiver — family income is ignored, and qualification is based on the child\'s level of care. It confers full Medicaid eligibility, which unlocks the ABA benefit. An online Katie Beckett application portal launched in April 2026. If your intake process turns away middle-income families without mentioning Katie Beckett, you\'re losing eligible families.',
        ],
      },
      {
        h2: 'Prior authorization',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'Peach State GA.CP.BH.504 (ASD services, rev. 10/25)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: '42 CFR 440.230(e) \u2014 Medicaid fee-for-service prior authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' }, { title: 'CareSource Georgia Medicaid Provider Manual (GA-MED-P-2890751a, July 2026)', url: 'https://www.caresource.com/documents/ga-provider-manual.pdf' }, { title: 'Peach State Health Plan Provider Manual (April 2026)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/pdfs/GA-INT-11666%20Provider%20Handbook%20Update%202026%20FINAL%202_R.pdf' }, { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' }],
        body: [
          'Everything is prior-authorized: one PA for the behavioral assessment, a separate PA for treatment, requested by the enrolled QHCP (licensed physician, psychologist, BCBA-D, or BCBA — BCaBAs and RBTs cannot serve as the QHCP). Assessment authorizations come in 3-month increments and treatment authorizations in 6-month increments; after the first treatment PA, every ongoing request goes in as one consolidated PA with both the treatment and the reassessment codes. Fee-for-service PAs go through the GAMMIS Medical Review Portal (reviewed by Alliant Health Solutions), while CMO members follow their plan\'s process.',
        ],
        list: [
          { title: 'The treatment PA package', desc: 'Diagnostic evaluation, Letter of Medical Necessity, descriptive behavioral-assessment results, proposed Plan of Care (with coordination of other services), updated data and progress summaries on renewals, IFSP if applicable, IEP optional (required for school-based services), prior hospitalization or out-of-home placement records if applicable, and the DCH Medicaid cover page (Appendix D).' },
          { title: 'Assessment recency', desc: 'The behavioral assessment must be dated no more than 2 months before the treatment PA effective date. A diagnostic evaluation Medicaid did not pay for is still accepted. The 8-hours-per-6-months cap on comprehensive assessments is CareSource\'s rule (MCD-MM-0212), not a DCH one.' },
          { title: 'Reauthorization every 6 months', desc: 'Requires a behavior assessment conducted within 2 months of the requested effective date, progress vs. prior goals (with graphs), and updated individualized goals.' },
          { title: 'Does the assessment PA take longer?', desc: 'No separate or longer decision clock is published for the assessment. The same clock governs every PA request: 7 calendar days for fee-for-service members (42 CFR 440.230(e), from 1/1/2026), and three business days in all three CMO manuals (extendable by 14 calendar days). What makes the start feel slow is the sequence: the assessment and treatment are "completed separately and authorized independently" (Peach State GA.CP.BH.504), so a new client needs two PAs back to back, assessment PA, then the assessment, then the treatment PA. DCH\'s ASD manual lets the behavioral assessment PA be requested "in 3-month increments", and requires the assessment to be dated no more than 2 months before the treatment PA effective date, so do not let a finished assessment sit.' },
        ],
      },
      {
        h2: 'The CMO landscape (and why it matters for intake)',
        cites: [{ title: 'GA DCH — Autism Spectrum Disorder program', url: 'https://medicaid.georgia.gov/programs/all-programs/autism-spectrum-disorder' }, { title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'Georgia Medicaid — Georgia Families Latest News (updated 4/23/2026)', url: 'https://medicaid.georgia.gov/programs/all-programs/georgia-families/georgia-families-latest-news' }],
        body: [
          'ABA is not carved out of managed care — most members are in a CMO (CareSource, Peach State, Amerigroup today), and each administers prior auth under its own policy aligned to the DCH manual. December 2024 awards went to CareSource, Humana, Molina, and UnitedHealthcare, but as of this review (9/27/2026) the re-procurement still has not gone live: per DCH\'s own "Georgia Families — Latest News" page (updated 4/23/2026), the procurement remains in the protest phase pending a Notice of Award, and DCH has extended the current CMO contracts — Amerigroup, CareSource, and Peach State — through June 30, 2027, with no go-live date yet announced for the 2024 awardees. Amerigroup and Peach State carry no other status change beyond that extension. For intake, the practical rule: always capture which CMO the family is enrolled in — it determines the PA process, forms, and timelines you\'ll be working against — and don\'t assume the new awardees are live until DCH announces a transition date.',
        ],
      },
      {
        h2: 'Billing basics your intake data feeds',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy — the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }],
        body: [
          'Georgia reimburses CPT 97151–97158, 0362T, and 0373T in 15-minute units, with practitioner-level modifiers (U1–U5) and setting modifiers — U6 in-clinic, U7 out-of-clinic at a higher rate, GT telehealth. Georgia is unusual in paying different rates by setting, which makes the family\'s preferred setting (home vs. center) an intake question with direct revenue implications. The 50-mile rule is about enrollment, not telehealth: to enroll, a practitioner must reside in Georgia or within 50 miles of the Georgia border and hold an active Georgia behavior-analyst licence. Telehealth follows DCH\'s Telehealth Guidance, and a PA that asks for telehealth needs the Telehealth Readiness Checklist.',
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        cites: [
          { title: 'Georgia HB 412 (2022) — O.C.G.A. Title 43, Ch. 7A', url: 'https://gov.georgia.gov/document/2022-signed-legislation/hb-412/download' },
          { title: 'Ga. Comp. R. & Regs. 75-5-.01 (licensure by certification)', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-75-5-.01' },
          { title: 'GA licensure application deadlines (secondary source)', url: 'https://www.appliedbehavioranalysisedu.org/georgia/' },
          { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
          { title: 'BACB RBT Handbook', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' },
        ],
        body: [
          'Georgia licensure is new and the deadlines have already passed. HB 412 created O.C.G.A. Title 43, Chapter 7A effective July 1, 2023: behavior analysts and assistant behavior analysts must now be licensed by the Georgia Behavior Analyst Licensing Board (under the Secretary of State), and unlicensed practice carries a $1,000 fine per violation. Every license applicant must clear a GCIC + FBI fingerprint record check at their own expense — filing the application is express consent. The Board required behavior analysts to file complete applications by September 30, 2025 and assistants by March 31, 2026; anyone who missed those dates may be treated as practicing without a license. (Sourcing caveat: those deadlines are confirmed on secondary sources — the Board\'s own pages on sos.ga.gov block automated retrieval — so verify current status with the Board directly.) Licenses run two years and require maintaining active BCBA/BCaBA certification.',
          'The Medicaid staffing structure runs through the QHCP. Only a licensed physician, psychologist, BCBA-D, or BCBA can be the enrolled QHCP. Practices with two or more clinicians enroll as a group, with each QHCP linked as a rendering provider, and to enroll a practitioner must reside in Georgia or within 50 miles of its border and hold an active Georgia licence. A BCaBA must be supervised by a physician, psychologist or BCBA/BCBA-D but may in turn supervise RBTs; an RBT can never be the QHCP. There is no grace period: services by anyone not fully credentialed at the billed practitioner level, or not enrolled, are not billable. The current DCH manual (July 2026) sets no caseload cap and no staffing attestation; supervision follows BACB rules, and DCH expects it to run at 10–20% of direct hours, with anything above 20% justified by documented medical necessity. Supervision doesn\'t require the supervisor on site, but both supervisor and supervisee must keep contemporaneous records of each session\'s date, duration, type, and content.',
          'At the technician level, Georgia is notably light on state screening: technicians are exempt from licensure (they must use nonprofessional titles like "behavior technician"), and neither the statute nor the current ASD manual (July 2026) imposes a state background-check, fingerprint, or registry mandate on them — the operative screen is the BACB\'s own: a criminal background check plus abuse-registry check within 180 days before the RBT application, with 5%-of-hours monthly supervision and at least two face-to-face contacts per month. Plan-level extras do bind: Peach State requires protocol modification (BCBA-level case direction) at ≥2 hours/week or 10% of direct service hours (whichever is greater), and 0373T sessions must include a BCBA onsite and immediately available. One honest gap: the ASD manual does not address staff-level exclusion screening — confirm OIG LEIE / SAM.gov cadence with DCH provider enrollment.',
        ],
      },
    ],
    collect: [
      { title: 'Medicaid ID + CMO', desc: 'Which plan the child is on (CareSource, Peach State, Amerigroup, or FFS) — it decides the whole PA path.' },
      { title: 'Diagnosis report + tools used', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, instruments used (one clinician tool plus one caregiver tool), and the date (a diagnosis more than 5 years old without ongoing treatment may need re-evaluation).' },
      { title: 'Katie Beckett status', desc: 'For non-Medicaid families: whether they\'ve applied, and a pointer to the online portal if not.' },
      { title: 'IEP / IFSP', desc: 'Required in the PA package when applicable; also flags school-setting rules.' },
      { title: 'Preferred setting & availability', desc: 'Home vs. center affects modifiers and rates; school attendance affects allowable weekly hours.' },
      { title: 'Other services in place', desc: 'Speech, OT, PT — the Plan of Care must document coordination.' },
    ],
    sources: [
      { title: 'GA DCH — Autism Spectrum Disorder program', url: 'https://medicaid.georgia.gov/programs/all-programs/autism-spectrum-disorder' },
      { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
      { title: 'GA DCH — Katie Beckett / TEFRA', url: 'https://medicaid.georgia.gov/programs/all-programs/tefrakatie-beckett' },
      { title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' },
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
      { q: 'Does a prior authorization for an ABA assessment take longer than one for treatment in Georgia?', a: 'Not by rule. No Georgia payer publishes a separate or longer decision clock for the assessment PA. Fee-for-service members get a decision within 7 calendar days (42 CFR 440.230(e), from January 1, 2026), and CareSource, Peach State and Amerigroup all print three business days for a standard request, extendable by 14 calendar days. The assessment stage takes longer in practice because it is a separate PA that must come first: the assessment and treatment are requested and authorized independently, so a new client waits for the assessment PA, the assessment itself, and then the treatment PA. Two rules keep the gap from growing: the clocks under Georgia\'s prior-authorization law run from receipt of all necessary information, so send a complete packet, and the assessment must be dated no more than 2 months before the treatment PA\'s effective date (DCH ASD manual). On commercial plans it varies by carrier: Cigna needs no PA for 97151, while Aetna precertifies it.' },
      { q: 'How long do Georgia Medicaid ABA authorizations last?', a: 'Treatment authorizations are issued in 6-month increments, with reauthorization requiring a recent assessment (within 2 months), documented progress, and updated goals.' },
    ],
  },

  'anthem-bcbs-georgia': {
    slug: 'anthem-bcbs-georgia',
    cardDesc: 'MCG B-806-T reviews (since 6/2024) + Ava\u2019s Law mandate; weekly-unit claims, parity, billing rules.',
    family: 'anthem',
    assessmentPA: {
      value:
        'Required — the assessment codes (97151, 97152, 0362T) are authorized, and from 1/1/2026 paid against weekly approved units',
      status: 'verified',
      cites: [{ title: 'Anthem Provider News (Georgia, Commercial) — Important changes to ABA claim processing, eff. 1/1/2026 (GABCBS-CM-096930-25)', url: 'https://providernews.anthem.com/georgia/articles/important-changes-to-applied-behavioral-analysis-claim-proce-27736' }, { title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }],
    },
    treatmentPA: {
      value:
        'Required — authorized in weekly approved units (from 1/1/2026); treatment plan reviewed or updated at least every 6 months',
      status: 'verified',
      cites: [{ title: 'Anthem Provider News (Georgia, Commercial) — Important changes to ABA claim processing, eff. 1/1/2026 (GABCBS-CM-096930-25)', url: 'https://providernews.anthem.com/georgia/articles/important-changes-to-applied-behavioral-analysis-claim-proce-27736' }, { title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
    },
    dxRequired: {
      value:
        'Not published — Anthem reviews commercial ABA against MCG B-806-T (licensed criteria) since 6/1/2024; the public resource guide states no diagnosis criterion',
      status: 'unverified',
      blocker: 'licensed',
      cites: [{ title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }, { title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      verifyVia:
        'MCG B-806-T (Behavioral Health Care, Applied Behavioral Analysis) is proprietary licensed criteria. Ask Anthem utilization management for the criteria applied to the request at authorization or peer-to-peer. The June 2025 ABA Provider Resource Guide states no ASD-diagnosis criterion; its only diagnosis reference is the record element “working diagnoses consistent with findings and test results.”',
    },
    payer: 'Anthem BCBS Georgia',
    state: 'GA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Anthem’s commercial ABA provider resource guide (June 2025) publishes no age criterion — it covers credentialing, coding, place of service, documentation and telehealth, not eligibility age. The age term that bites in Georgia comes from Ava’s Law, which requires state-regulated individual and group plans to cover ASD treatment for individuals 20 years of age or under. Two carve-outs and one federal override matter: employers with 10 or fewer employees are exempt, self-funded ERISA plans are preempted, and federal mental-health parity generally makes the mandate’s age and dollar caps hard to enforce against covered large-group plans — so an age-based decline on a large-group member is an escalation, not an answer.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Ava\'s Law — O.C.G.A. § 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' }],
        verifyVia:
          'Plan funding type and employer size first, then a live benefits verification. Any age term inside MCG B-806-T, the licensed criteria Anthem has used for commercial ABA reviews since 6/1/2024, is applied at authorization.',
      },
      dxRecency: {
        value:
          'Anthem’s ABA provider resource guide (June 2025) sets a treatment-plan clock rather than a diagnosis clock: “Documentation must show that the treatment plan was reviewed and/or updated at a min of every 6 months. Providers should review their guidelines if treatment plans are required more frequently.” It adds that standardized assessments are used “early in the course of treatment and at reviews during treatment thereafter,” but publishes no recency window on the ASD diagnostic evaluation and no re-diagnosis interval.',
        status: 'unverified',
        blocker: 'licensed',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }],
        verifyVia:
          'Any diagnosis-recency requirement sits in MCG B-806-T, the licensed criteria Anthem has applied to commercial ABA reviews since 6/1/2024 — ask Anthem utilization management at authorization.',
      },
      diagnosingProviders: {
        value:
          'The ABA provider resource guide (June 2025) lists who may RENDER ABA, not who may diagnose: “Approved service providers include psychiatrists (MDs), psychologists (PhDs), licensed clinical social workers (LCSWs), licensed professional counselors (LPCs), licensed marriage and family therapists (LMFTs) with special training and/or experience in applied behavior analysis, Board Certified Behavior Analysts (BCBA/BCBA-D), providers practicing under the direction and supervision of the BCBA, and other mental health service providers licensed or authorized by the state in which they practice and recognized by the affiliated health plan Anthem to be eligible for reimbursement.” Any diagnosing-provider requirement lives in Anthem’s medical-necessity criteria, which since 6/1/2024 are MCG B-806-T (licensed, not public). Georgia adds a licensure layer either way: HB 412 (2022) created O.C.G.A. Title 43, Chapter 7A, so the supervising analyst must hold a Georgia Behavior Analyst Licensing Board licence.',
        status: 'unverified',
        blocker: 'licensed',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }],
        verifyVia:
          'Ask Anthem utilization management which diagnosing credentials MCG B-806-T accepts, at authorization.',
      },
      diagnosticTools: {
        value:
          'Anthem names no required instrument. The June 2025 resource guide says only that “the use of standardized assessments and current clinical information facilitates consistent, systematic, and reliable evaluation early in the course of treatment and at reviews during treatment thereafter,” with the data used to document improvement. Which instruments satisfy Anthem’s medical-necessity review is not published.',
        status: 'unverified',
        blocker: 'licensed',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }],
        verifyVia:
          'Anthem utilization management at authorization — the review criteria (MCG B-806-T since 6/1/2024) are licensed and not public.',
      },
      referral: {
        value:
          'No referral precondition is published for ABA. The resource guide treats “physician orders” and “referrals” as elements that must be present in the medical record when they exist, not as an entry gate, and Anthem gates ABA through authorization instead — reviewed against MCG B-806-T since 6/1/2024, with claims paid against the weekly approved units from 1/1/2026. Whether the member’s specific plan requires a PCP referral is a benefit-design question.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }, { title: 'Anthem Provider News (Georgia, Commercial) — Important changes to ABA claim processing, eff. 1/1/2026 (GABCBS-CM-096930-25)', url: 'https://providernews.anthem.com/georgia/articles/important-changes-to-applied-behavioral-analysis-claim-proce-27736' }, { title: 'Ava\'s Law — O.C.G.A. § 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' }],
        verifyVia:
          'The member’s benefit document and Anthem provider services — ask whether a PCP referral is required in addition to the authorization.',
      },
      telehealth: {
        value:
          'Anthem publishes the place-of-service half outright but makes the code list plan- and state-specific. Telehealth POS codes for ABA are “10 = Telehealth (member located in home while receiving services)” and “02 = Telehealth (member located outside of home while receiving services),” all “Subject to the member’s coverage and reviews by the plan.” For which codes actually pay, the guide redirects: “Please visit our Virtual Visits reimbursement policy that outlines our standard rules. Allowed codes may vary. Refer to the Allowed virtual services in addition to CPT Appendix P to obtain codes that are eligible for reimbursement in your state.” So the POS mechanics are settled and the payable code set is not.',
        status: 'plan-dependent',
        blocker: 'document',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        verifyVia:
          'Anthem’s Virtual Visits reimbursement policy and the Georgia “Allowed virtual services” list, plus the member’s benefit document, before scheduling remote ABA.',
      },
      authTurnaround: {
        value:
          'It depends on how the plan is funded. A fully insured Anthem Blue Cross and Blue Shield plan sold in Georgia follows the Ensuring Transparency in Prior Authorization Act. A standard request gets notice "within 7 calendar days of obtaining all necessary information to make such authorization or adverse determination" (O.C.G.A. 33-46-26). Urgent requests get notice "no later than 72 hours after receiving all information needed" (33-46-27). A missed deadline means "automatic authorization" of the service (33-46-29), with a narrow de minimis exception. Both clocks start only once the plan has everything it needs, so send a complete packet. The Act also binds DCH contracts under the State Health Benefit Plan. A self-funded employer plan is governed by ERISA instead: "not later than 15 days after receipt of the claim," with one 15-day extension, and 72 hours for urgent care. No reauthorization lead time is published for Anthem Blue Cross and Blue Shield ABA in Georgia.',
        status: 'plan-dependent',
        cites: [
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
          { title: 'O.C.G.A. 33-46-26 — prior authorization notice within 7 calendar days (FindLaw)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-46-26/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with Anthem Blue Cross and Blue Shield: ask whether the plan is fully insured (Georgia prior-authorization law), self-funded (ERISA), or the State Health Benefit Plan, and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Georgia\'s coordination-of-benefits rule uses the birthday rule: "The benefits of the plan of the parent whose birthday falls earlier in a year are determined before those of the plan of the parent whose birthday falls later in that year." "Birthday" means month and day only. If the birthdays match, the plan that has covered the parent longer pays first. For separated or divorced parents, the order is the custodial parent\'s plan, then the step-parent\'s, then the non-custodial parent\'s, unless a court decree assigns health costs to one parent. That rule governs fully insured group plans. A self-funded employer plan sets its own order in its plan document. The Anthem Blue Cross and Blue Shield plan pays before Georgia Medicaid, which is payer of last resort and still wants its own ABS PA when secondary. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the Anthem Blue Cross and Blue Shield plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary."',
        status: 'plan-dependent',
        cites: [
          { title: 'Ga. Comp. R. & Regs. 120-2-48-.05 — Group Coordination of Benefits, order of benefits', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-120-2-48-.05' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Anthem Blue Cross and Blue Shield member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan, each parent\'s date of birth and any custody decree at intake.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Anthem’s commercial ABA guide (June 2025) — which names Georgia (Blue Cross Blue Shield Healthcare Plan of Georgia, Inc.) on its cover — defines supervision through what is billable rather than through a ratio: “A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician. Supervised or directed services billed with a QHP-performed procedure are subject to the Incident To Services and Billing reimbursement policy.” Approved ABA renderers include BCBA/BCBA-D and “providers practicing under the direction and supervision of the BCBA.” No percentage floor or caseload cap is published.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, on Anthem’s own terms: “A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician.” The permission is conditional on that simultaneous face-to-face direction — 97155 for analyst work away from the patient is outside it — and directed services fall under Anthem’s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      dailyLimits: {
        value:
          'No Anthem per-day ceiling is published; the guide defers to CMS. “ABA codes may have associated MUE limits”; Anthem administers NCCI edits under its Code and Clinical Editing Guidelines reimbursement policy, and “NCCI edits are revised to align with CMS MUE updates once published.” The binding limit is weekly: effective January 1, 2026, “reimbursement for Applied Behavioral Analysis (ABA) services will be based on weekly approved units rather than total authorized units” for 97151–97158, 0362T and 0373T. “Claims should reflect the units rendered within each week, up to the weekly medically necessary prior approval,” and claims over the weekly limit “will be adjusted accordingly or otherwise ineligible for reimbursement.”',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Anthem Provider News (Georgia, Commercial) — Important changes to ABA claim processing, eff. 1/1/2026 (GABCBS-CM-096930-25)', url: 'https://providernews.anthem.com/georgia/articles/important-changes-to-applied-behavioral-analysis-claim-proce-27736' }],
        verifyVia:
          'Which CMS MUE table (Practitioner vs. Medicaid NCCI) Anthem’s editor applies to a given Georgia product — confirm with Anthem provider services before modelling units.',
      },
      noteSignature: {
        value:
          'Anthem signs by author identification and puts a clock on it. Each entry in the medical record must include author identification of the physician or other QHP — “a handwritten signature, unique electronic identifier, or initials and rendering provider credentials” — entered at the time of service or shortly thereafter, which “should not exceed 30 days,” with the signature date within 30 days of the date of service. All documentation must be legible to someone other than the writer and must support the services billed on each unique date. For timed ABA codes the record must carry total treatment time in minutes plus start and stop times.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      placeOfService: {
        value:
          'Anthem publishes the POS code list for ABA outright: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member outside the home — all “Subject to the member’s coverage and reviews by the plan.” School and community are therefore codeable places of service, not excluded ones; group home is not listed.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        verifyVia:
          'Whether POS 03 school is payable on a specific Georgia member’s benefit — the code list is explicitly subject to plan review.',
      },
      billAsProvider: {
        value:
          'The supervising analyst goes in box 31. “ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form.” Credential level rides as a modifier: HM for less than bachelor’s level, HN bachelor’s level, HO master’s level.',
        status: 'verified',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
    },
    pill: 'Payer Guide · Anthem BCBS Georgia',
    h1: 'Anthem BCBS Georgia ABA coverage (+ Ava\'s Law).',
    metaTitle: 'Anthem BCBS Georgia ABA Coverage & Ava\'s Law: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross Blue Shield covers ABA in Georgia: MCG B-806-T medical-necessity reviews (since June 2024), weekly-unit claims, documentation and billing rules — plus how Ava\'s Law and parity protections apply.',
    intro: [
      'Anthem Blue Cross Blue Shield of Georgia has reviewed commercial ABA against MCG B-806-T (Behavioral Health Care, Applied Behavioral Analysis) since June 1, 2024, when it stopped using clinical guideline CG-BEH-02 for these reviews. That sits on top of Georgia\'s autism insurance mandate — Ava\'s Law. The combination matters: the criteria define what\'s medically necessary, while the mandate (and federal parity law) defines what plans must offer and which caps are actually enforceable. Intake teams that understand both catch coverage that others write off.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — reviewed against MCG B-806-T since 6/1/2024 (replaced CG-BEH-02)' },
      { label: 'State mandate', value: 'Ava\'s Law: state-regulated plans, age 20 and under' },
      { label: 'Claims', value: 'Paid against weekly approved units from 1/1/2026' },
      { label: 'Hour caps', value: 'None published; CMS MUEs per code (old CG-BEH-02 caps not confirmed)' },
      { label: 'Reauth', value: 'Treatment plan reviewed or updated at least every 6 months' },
      { label: 'Parity note', value: '$35K/year cap generally unenforceable vs. large groups (MHPAEA)' },
    ],
    sections: [
      {
        h2: 'Medical-necessity criteria',
        cites: [{ title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' }, { title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        body: [
          'Anthem announced that effective June 1, 2024 it "will transition from CG-BEH-02 (Adaptive Behavioral Treatment) and MCG W0153 (Behavioral Health Care Applied Behavioral Analysis), to MCG B-806-T Behavioral Health Care Applied Behavioral Analysis (Original MCG Guideline), for medical necessity/clinical appropriateness reviews." MCG criteria are licensed and not published, so the exact tests a Georgia commercial ABA request must pass cannot be reprinted here — ask Anthem for the criteria applied to your request at authorization or peer-to-peer. The parameters many providers remember from CG-BEH-02 — a 20-combined-hour cap on the initial behavior-identification assessment, a 40-hour weekly ceiling, up to 2 hours of protocol modification per 10 direct hours (at most 8 a week), and a standardized developmental assessment at least every 2 years — came from the retired guideline and are not confirmed as current Anthem rules.',
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
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }, { title: 'Anthem Provider News (Georgia, Commercial) — Important changes to ABA claim processing, eff. 1/1/2026 (GABCBS-CM-096930-25)', url: 'https://providernews.anthem.com/georgia/articles/important-changes-to-applied-behavioral-analysis-claim-proce-27736' }],
        list: [
          { title: 'Codes & modifiers', desc: '97151–97158 plus 0362T/0373T, with degree-level modifiers (HM/HN/HO). Technician-rendered services must show the supervising BCBA in Box 31 of the CMS-1500.' },
          { title: 'Concurrent billing', desc: '97155 alongside 97153 only when technician and QHP are both face-to-face and the QHP is directing.' },
          { title: 'Weekly units', desc: 'From January 1, 2026, claims are paid against the weekly approved units, not the total authorization; units above the weekly approval are adjusted or denied. No Anthem hour ceiling is published — CMS MUEs apply per code.' },
          { title: 'Documentation', desc: 'Timed codes need total minutes and start/stop times; notes entered within 30 days with signature and credentials; the treatment plan reviewed or updated at least every 6 months.' },
        ],
      },
      {
        h2: 'Reauthorization rhythm',
        cites: [{ title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
        body: [
          'Expect the treatment plan to be "reviewed and/or updated at a min of every 6 months" (more often if the plan’s own guidelines require it). Anthem’s guide stresses "systematic and repeated evaluation of developmental status," with standardized assessments "early in the course of treatment and at reviews during treatment thereafter" used to document improvement. Intake sets this clock: the baseline data collected at the start is what every future review gets measured against.',
        ],
      },
    ],
    collect: [
      { title: 'Member ID + plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) vs. small group (≤10 employees, exempt) — this determines what the plan owes.' },
      { title: 'Employer size', desc: 'Directly relevant to both the mandate and parity analysis.' },
      { title: 'Diagnosis + functional assessments', desc: 'ASD diagnosis from a qualified professional, plus any existing motor/language/social/adaptive assessments.' },
      { title: 'Age', desc: 'The mandate covers 20 and under; parity may extend practical coverage — flag edge cases for benefits verification.' },
      { title: 'Baseline data expectations', desc: 'Collect standardized baseline assessments from day one — Anthem expects them early in treatment and at every review.' },
    ],
    sources: [
      { title: 'Anthem BCBS — ABA Provider Resource Guide (Commercial; incl. Georgia), MULTI-BCBS-CM-084583-25-CPN83931, June 2025', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
      { title: 'Anthem Provider News (Georgia, Commercial) — MCG care guidelines 27th edition update, Feb. 1, 2024: CG-BEH-02 replaced by MCG B-806-T from 6/1/2024 (MULTI-BCBS-CM-047274-23)', url: 'https://providernews.anthem.com/georgia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem Provider News (Georgia, Commercial) — Important changes to ABA claim processing, eff. 1/1/2026 (GABCBS-CM-096930-25)', url: 'https://providernews.anthem.com/georgia/articles/important-changes-to-applied-behavioral-analysis-claim-proce-27736' },
      { title: 'Ava\'s Law — O.C.G.A. § 33-24-59.10', url: 'https://law.justia.com/codes/georgia/title-33/chapter-24/article-1/section-33-24-59-10/' },
      { title: 'Georgia Behavior Analyst Licensing Board', url: 'https://sos.ga.gov/georgia-behavior-analyst-licensing-board' },
    ],
    faq: [
      { q: 'Does Anthem BCBS Georgia cover ABA therapy?', a: 'Yes — Anthem reviews commercial ABA for medical necessity against MCG B-806-T, which replaced clinical guideline CG-BEH-02 for dates of service from June 1, 2024. Georgia\'s Ava\'s Law also mandates coverage in state-regulated plans for individuals 20 and under.' },
      { q: 'Does Anthem still use CG-BEH-02 for ABA in Georgia?', a: 'Not for commercial medical-necessity reviews. Anthem announced that for dates of service on or after June 1, 2024 it moved from CG-BEH-02 and MCG W0153 to MCG B-806-T. MCG criteria are licensed and not public, so ask Anthem for the criteria applied to your request. From January 1, 2026 Anthem also pays ABA claims against weekly approved units.' },
      { q: 'Is the $35,000 ABA cap in Ava\'s Law enforceable?', a: 'Against large-group plans covered by federal parity law, generally not — MHPAEA prohibits treatment limits on mental-health benefits that are stricter than medical/surgical benefits. Treat a payer applying the cap to a large-group member as a red flag to escalate.' },
      { q: 'Which plans are exempt from Ava\'s Law?', a: 'Self-funded ERISA plans (federal preemption) and employers with 10 or fewer employees. That\'s why intake should always capture the employer and funding type, not just the insurance card.' },
    ],
  },

  'caresource-georgia': {
    slug: 'caresource-georgia',
    cardDesc: 'MCD-MM-0212 (7/2026) defers to the DCH manual; in-house PA; reported 2026 rate cut.',
    family: 'caresource',
    assessmentPA: {
      value:
        'Required — behavioral assessment PA, reviewed in-house against the DCH ASD manual',
      status: 'verified',
      cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }],
    },
    treatmentPA: {
      value:
        'Required — treatment PA with a Plan of Care signed by the BCBA and the parent/guardian',
      status: 'verified',
      cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }],
    },
    dxRequired: {
      value:
        'Yes — DSM-5-TR ASD diagnosis, per the DCH ASD manual',
      status: 'verified',
      cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
    payer: 'CareSource (Georgia Medicaid CMO)',
    pill: 'Payer Guide · CareSource Georgia',
    h1: 'CareSource Georgia ABA coverage (GA Medicaid CMO).',
    metaTitle: 'CareSource Georgia Medicaid ABA (CMO) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CareSource administers ABA for Georgia Medicaid members — policy MCD-MM-0212 aligned to the DCH ASD manual, in-house medical review, DCH daily-unit limits, and a reported 2026 reimbursement cut.',
    state: 'GA', kind: 'medicaid-mco', parent: 'Georgia Medicaid',
    intakeGates: {
      ageLimit: {
        value:
          'Under 21, set by the state manual CareSource now points to. MCD-MM-0212 (eff. 7/1/2026) says eligibility conditions “can be located in section 701 of the ASD Services Manual,” and section 701 reads: “Autism Spectrum Services are for individuals under the age of 21.” The same section adds participation conditions that make caregiver availability an intake question: “children must be able to participate in sessions,” and members or caregivers “must be able to participate in ABS therapy and have the ability to implement ABS techniques in the home environment.” CareSource adds its own line: “Active parent/caregiver participation and involvement is required.”',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      dxRecency: {
        value:
          'No fixed expiry. CareSource defers the re-evaluation triggers to the DCH manual and sets a floor for the re-evaluation itself: “At a minimum, 1 clinician observational assessment must reconfirm the diagnosis. School psychoeducation assessments are not acceptable.” The DCH triggers are a provisional diagnosis, no formal neuropsychological evaluation, or “more than 5 years from initial diagnosis and no evidence of ongoing assessment and treatment.” On the assessment side CareSource’s own cap is “Comprehensive BAs are not to exceed 8 hours every 6 months unless additional justification is provided”; under the DCH manual the behavioral assessment PA runs in 3-month increments and the assessment must be dated no more than 2 months before the treatment PA effective date. Diagnostic evaluations should be “completed prior to requesting a review of medical necessity for behavioral assessment or treatment services.”',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      diagnosingProviders: {
        value:
          'CareSource no longer restates the credential list: MCD-MM-0212 (eff. 7/1/2026) says evaluations “should meet requirements listed in section 801 of the ASD Services Manual” and “should be comprehensive with multiple informants covering multiple domains.” Section 801 sets the rule: the diagnosis must be established by “a licensed physician or psychologist, or other licensed professional as designated by the Medical Composite Board,” and the report must include “the evaluator’s signature, name, and credentials.” Primary hearing deficits, primary speech disorder and heavy metal poisoning must be ruled out as causal.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      diagnosticTools: {
        value:
          'Two tools, one from each side, per the DCH manual CareSource points to: a “minimum of two (2) assessment tools (1 primary clinician tool and 1 caregiver tool)” from the approved list, in a report that summarises each instrument with the date completed and scores — “test forms alone are not acceptable.” CARS and GARS cannot count as both the clinician and the caregiver tool. A diagnostic re-evaluation needs at minimum one clinician observational assessment, and school psychoeducational assessments are not acceptable (MCD-MM-0212).',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      referral: {
        value:
          'The state structure, administered in-house. Under the DCH manual “All ABS PAs must be requested by the enrolled QHCP,” and CareSource requires that “an independent practitioner must conduct a BA and develop a POC before services are provided,” with the treatment record signed by the BCBA and the parent/guardian and submitted “at the time the QHCP requests a medical necessity review for behavioral assessment or treatment services.” The clinical recommendation requirement underneath is the Georgia Medicaid one: ASD services must be recommended by a licensed physician or other licensed practitioner of the healing arts acting within their scope of practice under state law (42 CFR 440.130(c)), and the ordering, prescribing or referring practitioner’s NPI must be on the claim and enrolled in Georgia Medicaid.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      telehealth: {
        value:
          'Allowed, with the state’s billing rules and a provider-judgement duty on top. MCD-MM-0212 (eff. 7/1/2026): “The ASD Services Manual publishes applicable codes, modifiers and allowable provider types. Additionally, Part II Policies and Procedures for Telehealth Guidance provides information for telehealth billing requirements, only billable if the provider is in GA or within 50 miles of the GA border when services are rendered. Telehealth services must be appropriate for the individual member and not used as the primary method of treatment.” Decisions must rest on current evidence and clinical consensus, weighing assessed needs, strengths, preferences and resources, with the same ethics as in-person care and attention to interstate licensure, state regulations and discomfort with technology; providers must have protocols for clinical appropriateness, such as risk assessment and safety planning. Under the DCH manual, a PA that requests telehealth for any code needs the Telehealth Readiness Checklist.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy — the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
        verifyVia:
          'The 50-mile clause specifically: neither DCH’s Telehealth Guidance (10/1/2025) nor the July 2026 ASD manual states it as a telehealth rule — DCH added a Georgia-or-within-50-miles note to the ASD manual’s “Telemed” location code in July 2024 and removed it the same quarter, and the 50-mile test that remains is an enrollment residency rule (ASD manual 601.1.2). Ask CareSource provider services whether it still applies the clause to claims.',
      },
      authTurnaround: {
        value:
          'CareSource\'s 2026 Georgia manual: "For standard prior authorization decisions, CareSource provides notice to the provider and member as expeditiously as the member\'s health condition requires, but no later than three business days after receipt of the request for service." "Urgent prior authorization decisions are made within 24 hours of receipt of the request for service." Either can be extended (14 calendar days for standard, 5 business days for expedited) if the member or provider asks, or CareSource justifies it to DCH. That is faster than the federal 7-calendar-day cap and Georgia\'s 7-day statute. Autism spectrum disorder PAs go through the GAMMIS centralized portal, not the CareSource portal. Timing for renewals, from the DCH ASD manual CareSource follows: treatment is authorized "in 6-month increments." The reassessment can be done once per 6-month period, "no more than 2 months prior to the effective date of the next treatment authorization." Its results must be dated "no more than 2 months prior to the treatment services PA effective date." Schedule the reassessment inside that two-month window before the current authorization ends.',
        status: 'verified',
        cites: [
          { title: 'CareSource Georgia Medicaid Provider Manual (GA-MED-P-2890751a, July 2026)', url: 'https://www.caresource.com/documents/ga-provider-manual.pdf' },
          { title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' },
          { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'CareSource follows "the federal regulations that Medicaid programs serve as the payer of last resort," and its ABA policy edition effective 1/1/2025 said: "When a member has other insurance, Medicaid is always the payer of last resort. CareSource will not pay more than the Medicaid rate totals for service. The primary payer must provide evidence of determinations for consideration of Medicaid coverage for services." The 7/1/2026 edition moved payment terms into a separate reimbursement policy (PY-1634) that is not publicly posted. Bill the commercial plan first. When CareSource is secondary, "the provider may submit for secondary payment within 90 calendar days of the primary carrier\'s EOP, but not more than 12 months from the date of service." A claim denied for missing COB information needs the primary EOB within the remaining timely-filing window. The manual publishes no pay-and-chase exception. Get Medicaid\'s own PA even when Medicaid is secondary. DCH\'s Part I manual: "Regardless of whether or not the primary plan has made any payment toward a service, when billing the secondary claim to Medicaid, you must follow the Medicaid policies and procedures for that particular Category of Service, including adherence to all policies/guidelines for pre- certification and pre-authorizations of services." TRICARE pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before Georgia Medicaid. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'CareSource Georgia Medicaid Provider Manual (GA-MED-P-2890751a, July 2026)', url: 'https://www.caresource.com/documents/ga-provider-manual.pdf' },
          { title: 'CareSource GA MCD-MM-0212, superseded edition eff. 1/1/2025', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20250101' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'CareSource defines supervision the DCH way — “the direct clinical review, for the purpose of training or teaching, by a physician, psychiatrist, BCBA-D, or BCBA” — and separates it from “direction,” the QHCP observing protocol implementation with the member and giving corrective feedback. It “reserves the right to request supervision documentation.” The rest is the DCH manual: supervision of non-enrolled practitioners follows BACB guidelines and “is not separately reimbursable as it is built into the direct service codes rates,” while direction may be billed as 97155; supervisor and supervisee each keep a contemporaneous record of every session; and DCH expects supervision at 10–20% of direct hours, with anything over 20% justified. A physician, psychologist, BCBA-D or BCBA may supervise BCaBAs and RBTs; a BCaBA must be supervised by a physician, psychologist or BCBA/BCBA-D and may supervise RBTs.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      concurrentBilling: {
        value:
          'CareSource’s current policy is silent and defers to the DCH manual, which answers it: direction is billed as 97155 and “the technician’s time is separately reportable under 97153,” but “time reported and billed must be face-to-face time with the patient,” and 97155 documentation of “only supervision” or of services when the member is not present is not appropriate. 97154 and 97158 may not be billed concurrently.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      dailyLimits: {
        value:
          'CareSource publishes no per-day unit ceiling of its own. MCD-MM-0212 (eff. 7/1/2026) says “Medical necessary will determine approved hours per week (eg, typically 10-30 hours)” and that “certain services may be allocated into 28-day periods and not eligible for carryover, even if an authorization is approved for 6 months.” Its payment terms moved to a separate reimbursement policy (PY-1634) that is not publicly posted. The DCH manual’s CMS daily maximums (97151 = 32, 97152 = 16, 97153 = 32, 97154 = 18, 97155 = 24, 97156–97158 = 16, 0362T = 16, 0373T = 32) are the state floor.',
        status: 'unverified',
        blocker: 'document',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
        verifyVia:
          'CareSource reimbursement policy PY-1634 (Applied Behavior Analysis for Autism Spectrum Disorder – Reimbursement Policy) via CareSource GA provider services or the provider portal, for whether CareSource edits beyond the DCH daily maximums.',
      },
      noteSignature: {
        value:
          'CareSource’s signature rule sits on the treatment record, not the daily note. MCD-MM-0212 (eff. 7/1/2026): the treatment record (plans of care, treatment plans, behavior support plans, functional assessments) “must be completed by the QHCP, signed by the BCBA and parent/ legal guardian (if minor age) or by the member, if applicable, and submitted to CareSource at the time the QHCP requests a medical necessity review.” The policy’s revision history records that the parent/guardian signature on daily progress notes before claims was removed on 3/12/2025. Daily notes follow the DCH manual: the RBT or BCaBA delivering the service completes and signs the daily session note under BCBA oversight; notes must be legible, complete, signed and dated with the actual date; rubber stamps are not accepted and secure electronic signatures are; records are kept in real time, never back-dated, and corrected by single strike-through with initials and date.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      placeOfService: {
        value:
          'MCD-MM-0212 (eff. 7/1/2026) describes ABA as provided “in centers or at home,” allows telehealth only when appropriate and “not used as the primary method of treatment,” and for school-based services notes that “DCH requires submission of a member’s IEP, IFSP or 504 if the provider is requesting school-based services,” pointing to section 804 of the DCH manual for school plans. Under that manual, school delivery needs a separate school plan alongside a home and/or clinic plan, and settings are billed U6 in-clinic, U7 out-of-clinic and GT telemedicine.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      billAsProvider: {
        value:
          'CareSource defers to the DCH manual: for RBT- or BCaBA-rendered services such as 97153, “the supervising BCBA must be identified as the rendering provider on the claim,” and non-enrolled practitioners’ services are claimed under the enrolled provider number of the QHCP and/or facility. Multi-clinician practices enroll as a group, with each QHCP linked as a rendering provider.',
        status: 'verified',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
    },
    intro: [
      'CareSource is one of the Georgia Medicaid care management organizations (CMOs) that administers the ABA benefit. Its ABA policy (MCD-MM-0212) is aligned to the Georgia DCH Part II ASD manual, but CareSource layers its own utilization-management process on top — so if a family carries CareSource, this is the guide that governs their authorization.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Georgia Medicaid CMO (managed care)' },
      { label: 'Policy', value: 'GA MCD-MM-0212 (eff. 7/1/2026), which defers to the DCH ASD manual' },
      { label: 'Prior auth', value: 'Required; in-house medical review against the DCH ASD manual' },
      { label: 'Docs', value: 'Plan of Care signed by the BCBA and parent/guardian at each review' },
      { label: 'Daily units', value: 'DCH CMS daily maximums are the floor (e.g., 97153 = 32/day)' },
      { label: '2026 rate', value: 'Reported cut to 80% of the GA Medicaid fee schedule for certain ABA providers (May 2026) — check your contract' },
      { label: 'Diagnosis recency', value: 'Eval within 5 years (DCH-aligned criteria)' },
    ],
    sections: [
      {
        h2: 'How CareSource administers the benefit',
        cites: [{ title: 'CareSource GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
        body: [
          'CareSource performs in-house prior authorization and medical review against the Georgia DCH ASD manual (its 7/1/2026 policy points to manual sections rather than restating them), and requires a Plan of Care signed by the BCBA and the parent/guardian with each medical-necessity review. Because it aligns to the DCH manual, the underlying clinical rules mirror Georgia Medicaid — but the submission path, forms, and timelines are CareSource\'s own.',
        ],
        list: [
          { title: 'Maximum daily units (MUE)', desc: 'The DCH manual\u2019s CMS daily maximums apply (CareSource\u2019s own payment policy, PY-1634, is not public): e.g., 97151=32, 97153=32, 97155=24, 97156=16 daily units — capture requested intensity by code.' },
          { title: 'Assessment cap', desc: 'Comprehensive behavioral assessments not to exceed 8 hours every 6 months unless additional justification is provided \u2014 CareSource\u2019s own rule (MCD-MM-0212); the DCH manual sets none.' },
        ],
      },
      {
        h2: 'The 2026 rate change',
        cites: [{ title: 'Behavioral Health Business — Georgia ABA providers brace for 20% rate cut from CareSource (Apr. 8, 2026; secondary source)', url: 'https://bhbusiness.com/2026/04/08/georgia-aba-providers-brace-for-20-rate-cut-from-caresource/' }],
        body: [
          'CareSource told Behavioral Health Business it had “recently notified certain providers in our Georgia network of adjustments to reimbursement for applied behavior analysis therapy services”; the reported term is 80% of the then-current Georgia Medicaid fee schedule from May 2026. The amendment went to providers individually and is not published, and neither edition of CareSource’s ABA policy mentions it, so confirm the rate in your own CareSource agreement before modelling revenue. It does not change coverage.',
        ],
      },
    ],
    collect: [
      { title: 'CareSource member ID', desc: 'Confirm the family is on CareSource (vs. another GA CMO or FFS) — it decides the whole PA path.' },
      { title: 'DSM-5 ASD diagnosis + tools', desc: 'Diagnosis, instruments used, and date, per the DCH manual requirements CareSource follows.' },
      { title: 'Treatment documentation', desc: 'The Plan of Care must be signed by the BCBA and the parent/guardian at each review — set the expectation at intake.' },
      { title: 'Requested units by code', desc: 'DCH daily maximums apply and some services run in 28-day periods without carryover, so plan requested intensity code by code.' },
    ],
    sources: [
      { title: 'CareSource — GA MCD-MM-0212 (ABA policy, eff. 7/1/2026)', url: 'https://www.caresource.com/documents/medicaid-ga-policy-medical-mm-0212-20260701' },
      { title: 'Behavioral Health Business — Georgia ABA providers brace for 20% rate cut from CareSource (Apr. 8, 2026; secondary source)', url: 'https://bhbusiness.com/2026/04/08/georgia-aba-providers-brace-for-20-rate-cut-from-caresource/' },
      { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
      { title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' },
    ],
    faq: [
      { q: 'Does CareSource Georgia cover ABA therapy?', a: 'Yes — CareSource administers the Georgia Medicaid ABA benefit under policy MCD-MM-0212, aligned to the DCH ASD manual, with in-house prior authorization and medical review. Members must be under 21 with an ASD diagnosis.' },
      { q: 'What changed with CareSource ABA reimbursement in 2026?', a: 'CareSource says it notified certain Georgia ABA providers of reimbursement adjustments; the reported term is 80% of the Georgia Medicaid fee schedule from May 2026. The amendment is not published, so check your own CareSource agreement. Coverage is unchanged.' },
      { q: 'How is CareSource different from Georgia Medicaid fee-for-service?', a: 'The clinical rules align to the DCH ASD manual, but CareSource runs its own PA/medical-review process and requires a Plan of Care signed by the BCBA and the parent/guardian with each review. Always confirm the member\'s plan at intake.' },
    ],
  },

  'peach-state-georgia': {
    slug: 'peach-state-georgia',
    cardDesc: 'GA.CP.BH.504; hour parameters + 80%-attendance rule; 0373T rules.',
    family: 'centene',
    assessmentPA: {
      value: 'Required — criteria based on the DCH ASD manual',
      status: 'verified',
      cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
    },
    treatmentPA: {
      value: 'Required — criteria based on the DCH ASD manual',
      status: 'verified',
      cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5 ASD per the DCH ASD manual',
      status: 'verified',
      cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
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
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      telehealth: {
        value:
          'GA.CP.BH.504 acknowledges telehealth as a modality — services “may be provided in various settings (e.g., home, clinic, school, community) and modalities (e.g., in-person, telehealth)” — but publishes no rule of its own: no code list, no modifier, no place-of-service guidance and no limit. The operative floor is the DCH Part II Telehealth Guidance (version date 10/1/2025), which does carry an ASD section: ABS codes 97151–97158, 0362T and 0373T are billable by telehealth in 15-minute units with the GT modifier and the U1–U5 practitioner-level modifier, on POS 02 (member outside the home) or POS 10 (member at home), with prior authorization unchanged.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }],
        verifyVia:
          'Peach State / Centene provider services for any plan-level telehealth restriction on ABS, since GA.CP.BH.504 is silent where its other criteria are explicit.',
      },
      authTurnaround: {
        value:
          'Peach State\'s April 2026 manual: "Prior Authorization decisions for nonurgent services shall be made within three (3) Business Days, or other established timeframe, of the request (generally submitted one week prior to the service or procedure)." It may add 14 calendar days if the member or provider asks, or Peach State justifies needing more information to DCH. The same paragraph later refers to "the original fourteen (14) day determination timeframe," so hold Peach State to three business days and escalate past that. Expedited decisions come "within twenty-four (24) clock hours," with notice "no later than 72 clock hours after receipt of the request for service." Renewals: the reassessment must be "completed at least every six months or no more than 2 months prior to the start of the initial treatment authorization." Its data and graphs must be dated "no more than two (2) months prior to the Treatment Services PA request effective date." Plan the reassessment inside the two months before the authorization ends, and submit about a week ahead.',
        status: 'verified',
        cites: [
          { title: 'Peach State Health Plan Provider Manual (April 2026)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/pdfs/GA-INT-11666%20Provider%20Handbook%20Update%202026%20FINAL%202_R.pdf' },
          { title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Peach State: "Medicaid is the payor of last resort, therefore Peach State Health Plan will make every effort to cost avoid claims or services that are subject to payment from a third party health insurance carrier." Providers "must bill the primary payor prior to billing Peach State Health Plan." Peach State then pays up to its allowable, including the member\'s commercial copay, coinsurance and deductible, but never more than it would have paid as primary. Secondary claims "must be received within 180 days of the date of the primary carrier\'s EOP, but never more than twelve (12) months from the month of service." Exception: "Cost avoidance applies to all covered services except claims for EPSDT." Peach State "utilizes the \'Pay and Chase\' approach as required" and "complies with Georgia Medicaid COB policies." The manual does not say whether ABA claims count as EPSDT claims. Get Medicaid\'s own PA even when Medicaid is secondary. DCH\'s Part I manual: "Regardless of whether or not the primary plan has made any payment toward a service, when billing the secondary claim to Medicaid, you must follow the Medicaid policies and procedures for that particular Category of Service, including adherence to all policies/guidelines for pre- certification and pre-authorizations of services." TRICARE pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before Georgia Medicaid. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'Peach State Health Plan Provider Manual (April 2026)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/pdfs/GA-INT-11666%20Provider%20Handbook%20Update%202026%20FINAL%202_R.pdf' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Peach State Provider Services (1-866-874-0633) — ask whether ABA claims for members under 21 count as "claims for EPSDT" under the cost-avoidance exception.',
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
        blocker: 'per-case',
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
        blocker: 'document',
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
        cites: [{ title: 'Peach State GA.CP.BH.504 (ASD services)', url: 'https://www.pshpgeorgia.com/content/dam/centene/peachstate/policies/clinical-policies/GA.CP.BH.504.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
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
      { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
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
    assessmentPA: {
      value: 'Required — CG-BEH-02 medical-necessity review',
      status: 'verified',
      cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
    treatmentPA: {
      value: 'Required — CG-BEH-02 medical-necessity review',
      status: 'verified',
      cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5 ASD per the DCH ASD manual',
      status: 'verified',
      cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
    },
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
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Note the vintage: the posted CG-BEH-02 is dated June 2018 (GAPEC-2437-18) and Amerigroup GA is operating under a DCH contract extension through 6/30/2027 — confirm the current guideline on the Amerigroup/Wellpoint provider portal.',
      },
      dxRecency: {
        value:
          'Amerigroup publishes no window of its own — CG-BEH-02 requires a diagnosis of ASD and goals “based on standardized assessments” but names no recency rule, and the March 2026 Georgia Medicaid provider manual adds none — so the Georgia Medicaid rule governs. A diagnostic re-evaluation may be required when the diagnosis is provisional, when no formal neuropsychological evaluation was done, or when it is “more than 5 years from initial diagnosis and no evidence of ongoing assessment and treatment,” and the behavioral assessment “must have been conducted/dated no more than two (2) months prior to the Treatment PA effective date.”',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Scope-of-practice based and deliberately broad: “a diagnosis of ASD has been made by a licensed medical professional or other qualified health care professional as is consistent with state licensing requirements.” The guideline separately requires documentation “that ABT services will be delivered by an appropriate provider who is licensed or certified according to applicable state laws and benefit plan requirements.” The Georgia floor is narrower and governs for Medicaid members: the diagnosis must be established by a licensed physician or psychologist, or another licensed professional designated by the Medical Composite Board, and made by a practitioner enabled by the Georgia practice acts to diagnose behavioral health, intellectual or developmental conditions.',
        status: 'verified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      diagnosticTools: {
        value:
          'CG-BEH-02 names no instrument. It requires that “assessments of motor, language, social, and adaptive functions have been completed” and that treatment-plan goals be “in objective and measurable terms based on standardized assessments.” Which instruments qualify is left to the Georgia Medicaid rule, which governs Amerigroup members: at least two tools, “1 primary clinician tool and 1 caregiver tool,” from DCH’s approved list (for example ADOS-2 or CARS-2 plus ADI-R or SRS-2), and school psychoeducational assessments are not acceptable.',
        status: 'verified',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }],
      },
      referral: {
        value:
          'CG-BEH-02 is a medical-necessity guideline and states no referral gate, so the Georgia Medicaid structure governs: ASD services must be recommended by a licensed physician or other licensed practitioner of the healing arts acting within their scope of practice under state law per 42 CFR 440.130(c); all ABS prior authorizations must be requested by the enrolled QHCP (a licensed physician, psychologist, BCBA-D or BCBA — never a BCaBA or RBT); and the ordering, prescribing or referring practitioner’s NPI must appear on the CMS-1500 in box 17 with the DK, DN or DQ qualifier and be enrolled in Georgia Medicaid, or the claim denies. Assessment and treatment are authorized separately — assessment in three-month increments, treatment in six.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
      },
      telehealth: {
        value:
          'CG-BEH-02 contains no telehealth provision, so the Georgia Medicaid floor governs: under the DCH Part II Telehealth Guidance (version date 10/1/2025), “practitioners of ASD services can use telehealth to assess, diagnose and provide therapies to patients,” and the guidance publishes the billable ABS telehealth codes — 97151–97158, 0362T and 0373T in 15-minute units with the GT modifier plus the U1–U5 practitioner-level modifier, on POS 02 (member outside the home) or POS 10 (member at home). Prior authorization applies to telehealth ABS exactly as in person.',
        status: 'verified',
        cites: [{ title: 'GA DCH \u2014 Part II Policies and Procedures for Telehealth Guidance, version date 10/1/2025 (hosted copy \u2014 the medicaid.georgia.gov download link serves a 2020 file and GAMMIS blocks automated access)', url: 'https://setrc.us/wp-content/uploads/2025/11/Telehealth-Guidance-Q4-October-2025.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Amerigroup/Wellpoint Georgia provider services for any plan-level restriction the posted 2018 guideline would not show.',
      },
      authTurnaround: {
        value:
          'Amerigroup\'s Georgia Medicaid manual: "Amerigroup will decide on pre-service nonurgent care services within three business days from when we receive the request for service," and providers are notified through Availity or the MMIS portal in the same three business days. It may add 14 calendar days if the member or provider asks, or Amerigroup justifies needing more information to DCH. Expedited requests are decided "within 24 clock hours from when we receive the request for service," with notice "no later than 72 hours from the receipt of the request." The manual publishes no reauthorization lead time for ABA. Its 30-days-before-expiry renewal rule covers medical injectable and pharmacy PAs only. The ABA guideline expects the treatment plan to be updated and resubmitted "in general, every 6 months."',
        status: 'verified',
        cites: [
          { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' },
          { title: 'Amerigroup GA Medicaid UM Guideline — Adaptive Behavioral Treatment for ASD', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' },
          { title: '42 CFR 438.210(d) — MCO authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
        ],
      },
      coordinationOfBenefits: {
        value:
          '"Amerigroup agrees that the Medicaid program will be the payer of last resort when third-party resources are available." When it knows of other coverage before paying, Amerigroup will reject the claim and redirect "the provider to bill the appropriate insurance carrier." When it learns later, it recovers after payment. "State-specific guidelines will be followed when Coordination of Benefits (COB) procedures are necessary." For COB, "the time frames for filing a claim will begin on the date that the third party documents resolution of the claim." The manual publishes no pay-and-chase exception. Get Medicaid\'s own PA even when Medicaid is secondary. DCH\'s Part I manual: "Regardless of whether or not the primary plan has made any payment toward a service, when billing the secondary claim to Medicaid, you must follow the Medicaid policies and procedures for that particular Category of Service, including adherence to all policies/guidelines for pre- certification and pre-authorizations of services." TRICARE pays only after other coverage "except in the case of a plan administered under title XIX" (Medicaid), so TRICARE goes before Georgia Medicaid. CHAMPVA is the reverse: "If you are eligible under Medicaid, CHAMPVA will pay first."',
        status: 'verified',
        cites: [
          { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
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
        blocker: 'per-case',
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
        blocker: 'document',
        cites: [{ title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
        verifyVia:
          'Amerigroup GA provider manual; Georgia DCH\u2019s standard \u2014 the writer signs and dates, real time, no back-dating \u2014 is the applicable floor.',
      },
      placeOfService: {
        value:
          'Amerigroup publishes no place-of-service rule for ABA — neither CG-BEH-02 nor its Georgia Medicaid provider manual (March 2026) addresses setting — so the Georgia Medicaid rule applies: U6 in-clinic, U7 out-of-clinic (any location outside the agency or clinic), GT telemedicine. School delivery is allowed only under a separate school plan (target behaviors, line graphs, a titration plan, and the IEP, IFSP or 504 plan for a public-school student) that sits alongside a home and/or clinic plan.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
      },
      billAsProvider: {
        value:
          'Amerigroup sets no rule of its own, so the Georgia Medicaid rule applies: for RBT- or BCaBA-rendered services such as 97153, “the supervising BCBA must be identified as the rendering provider on the claim”; BCaBAs and RBTs are not enrolled as providers, and their services are claimed under the enrolled QHCP’s and/or facility’s provider number, with the U1–U5 practitioner-level modifier and the U6/U7/GT setting modifier. Multi-clinician practices enroll as a group, with each QHCP linked as a rendering provider.',
        status: 'verified',
        cites: [{ title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' }, { title: 'Amerigroup Georgia Medicaid Provider Manual (GA-AGP-CD-PM-003925-26)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_ProviderManual.pdf' }, { title: 'Amerigroup GA Medicaid UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment for ASD)', url: 'https://provider.amerigroup.com/docs/gpp/GA_CAID_UMGuideline_AdaptiveBehavioralTreatmentAutismSpectrumDisorder.pdf?v=202101081602' }],
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
      { title: 'GA DCH — Part II Policies and Procedures for Autism Spectrum Disorder (ASD) Services, version date July 1, 2026 (GAMMIS)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/Handbooks/Autism%20Spectrum%20Disorder-Q3%20July%202026%2020260702131100.pdf' },
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
      value: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
    },
    payer: 'Aetna in Georgia',
    state: 'GA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Aetna publishes none. The ABA Medical Necessity Guide gives a “typical age range” of 0–7 years for comprehensive ABA and “all ages” for focused ABA — planning guidance, not a benefit boundary — and CPB 0554/0648 set no age criterion. The age term in Georgia comes from Ava’s Law, which reaches individuals 20 years of age or under on state-regulated plans, with employers of 10 or fewer employees exempt and self-funded ERISA plans preempted. Federal parity generally makes that age cap hard to enforce against covered large-group plans, so treat an age-based decline on a large-group member as an escalation rather than an answer.',
        status: 'plan-dependent',
        blocker: 'per-case',
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
        blocker: 'per-case',
        cites: [{ title: 'Aetna \u2014 Applied Behavior Analysis Medical Necessity Guide (\u00a92026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia:
          'The member’s benefit document and Aetna precertification at the number on the ID card — ask whether a PCP referral is required in addition to precertification.',
      },
      telehealth: {
        value:
          'Not published. Aetna’s ABA materials — CPB 0554, CPB 0648 and the ABA Medical Necessity Guide — say nothing about telehealth delivery of ABA: no code list, no place-of-service codes, no modifiers and no limits.',
        status: 'unverified',
        blocker: 'per-case',
        verifyVia:
          'Aetna’s telemedicine policy and provider services at the number on the member’s ID card — confirm which ABA codes pay by telehealth on that specific Georgia plan before scheduling remote sessions.',
      },
      authTurnaround: {
        value:
          'It depends on how the plan is funded. A fully insured Aetna plan sold in Georgia follows the Ensuring Transparency in Prior Authorization Act. A standard request gets notice "within 7 calendar days of obtaining all necessary information to make such authorization or adverse determination" (O.C.G.A. 33-46-26). Urgent requests get notice "no later than 72 hours after receiving all information needed" (33-46-27). A missed deadline means "automatic authorization" of the service (33-46-29), with a narrow de minimis exception. Both clocks start only once the plan has everything it needs, so send a complete packet. The Act also binds DCH contracts under the State Health Benefit Plan. A self-funded employer plan is governed by ERISA instead: "not later than 15 days after receipt of the claim," with one 15-day extension, and 72 hours for urgent care. No reauthorization lead time is published for Aetna ABA in Georgia.',
        status: 'plan-dependent',
        cites: [
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
          { title: 'O.C.G.A. 33-46-26 — prior authorization notice within 7 calendar days (FindLaw)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-46-26/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with Aetna: ask whether the plan is fully insured (Georgia prior-authorization law), self-funded (ERISA), or the State Health Benefit Plan, and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Georgia\'s coordination-of-benefits rule uses the birthday rule: "The benefits of the plan of the parent whose birthday falls earlier in a year are determined before those of the plan of the parent whose birthday falls later in that year." "Birthday" means month and day only. If the birthdays match, the plan that has covered the parent longer pays first. For separated or divorced parents, the order is the custodial parent\'s plan, then the step-parent\'s, then the non-custodial parent\'s, unless a court decree assigns health costs to one parent. That rule governs fully insured group plans. A self-funded employer plan sets its own order in its plan document. The Aetna plan pays before Georgia Medicaid, which is payer of last resort and still wants its own ABS PA when secondary. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the Aetna plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary."',
        status: 'plan-dependent',
        cites: [
          { title: 'Ga. Comp. R. & Regs. 120-2-48-.05 — Group Coordination of Benefits, order of benefits', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-120-2-48-.05' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Aetna member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan, each parent\'s date of birth and any custody decree at intake.',
        blocker: 'per-case',
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
        blocker: 'per-case',
        verifyVia:
          'Aetna precertification/provider services at the number on the member\u2019s ID card, and the plan\u2019s own reimbursement schedule \u2014 ask specifically whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
      },
      dailyLimits: {
        value:
          'Not published. Aetna\u2019s ABA documents set medical-necessity criteria and precertification requirements for 97151\u201397158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies.',
        status: 'unverified',
        blocker: 'per-case',
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
      },
      noteSignature: {
        value:
          'Not published in Aetna\u2019s ABA materials \u2014 no rule on who signs a session note or within what window.',
        status: 'unverified',
        blocker: 'document',
        verifyVia:
          'The Aetna provider manual and your participation agreement\u2019s documentation clause.',
      },
      placeOfService: {
        value:
          'Aetna does not publish a POS code list for ABA. The one place-of-service boundary it does state is the schools carve-out: pursuant to applicable law Aetna \u201cis not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act.\u201d That is a limit on paying for what the IEP owes, not a blanket ban on the school setting \u2014 and it yields to a stronger state mandate. Where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans.',
        status: 'plan-dependent',
        blocker: 'per-case',
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
      { title: 'Aetna \u2014 Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
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
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in Georgia',
    state: 'GA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 publishes no age limit — coverage turns on a confirmed DSM-5-TR ASD diagnosis and medical necessity, not on age. The age term in Georgia comes from Ava’s Law, which reaches individuals 20 years of age or under on state-regulated plans, with employers of 10 or fewer employees exempt and self-funded ERISA plans preempted; federal parity generally makes that cap hard to enforce against covered large-group plans.',
        status: 'plan-dependent',
        blocker: 'per-case',
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
        blocker: 'per-case',
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
      authTurnaround: {
        value:
          'It depends on how the plan is funded. A fully insured Cigna plan sold in Georgia follows the Ensuring Transparency in Prior Authorization Act. A standard request gets notice "within 7 calendar days of obtaining all necessary information to make such authorization or adverse determination" (O.C.G.A. 33-46-26). Urgent requests get notice "no later than 72 hours after receiving all information needed" (33-46-27). A missed deadline means "automatic authorization" of the service (33-46-29), with a narrow de minimis exception. Both clocks start only once the plan has everything it needs, so send a complete packet. The Act also binds DCH contracts under the State Health Benefit Plan. A self-funded employer plan is governed by ERISA instead: "not later than 15 days after receipt of the claim," with one 15-day extension, and 72 hours for urgent care. No reauthorization lead time is published for Cigna ABA in Georgia.',
        status: 'plan-dependent',
        cites: [
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
          { title: 'O.C.G.A. 33-46-26 — prior authorization notice within 7 calendar days (FindLaw)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-46-26/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with Cigna: ask whether the plan is fully insured (Georgia prior-authorization law), self-funded (ERISA), or the State Health Benefit Plan, and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Georgia\'s coordination-of-benefits rule uses the birthday rule: "The benefits of the plan of the parent whose birthday falls earlier in a year are determined before those of the plan of the parent whose birthday falls later in that year." "Birthday" means month and day only. If the birthdays match, the plan that has covered the parent longer pays first. For separated or divorced parents, the order is the custodial parent\'s plan, then the step-parent\'s, then the non-custodial parent\'s, unless a court decree assigns health costs to one parent. That rule governs fully insured group plans. A self-funded employer plan sets its own order in its plan document. The Cigna plan pays before Georgia Medicaid, which is payer of last resort and still wants its own ABS PA when secondary. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the Cigna plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary."',
        status: 'plan-dependent',
        cites: [
          { title: 'Ga. Comp. R. & Regs. 120-2-48-.05 — Group Coordination of Benefits, order of benefits', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-120-2-48-.05' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'Cigna member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan, each parent\'s date of birth and any custody decree at intake.',
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
          'Yes \u2014 and Evernorth writes it as an explicit carve-out from its general rule: \u201cOnly one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time).\u201d Both must be with the patient; analyst time away from the patient is not inside the exception.',
        status: 'verified',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published. The resource guide sets the code set (97151\u201397158, 0362T, 0373T only, all in 15-minute increments) but no per-day unit ceiling and no statement of which MUE table Evernorth applies.',
        status: 'unverified',
        blocker: 'per-case',
        cites: [{ title: 'Evernorth \u2014 Autism Resource Guide for behavioral health providers (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273.',
      },
      noteSignature: {
        value:
          'Not published in the autism resource guide \u2014 no rule on who signs a session note or when.',
        status: 'unverified',
        blocker: 'document',
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
      },
      placeOfService: {
        value:
          'Only the telehealth half is published: \u201call ABA CPT codes are covered telehealth services,\u201d subject to the Intensive Behavioral Interventions coverage policy (EN0499). The guide states no school, community or group-home rule.',
        status: 'unverified',
        blocker: 'per-case',
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
      value: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
    },
    payer: 'UnitedHealthcare / Optum in Georgia',
    state: 'GA', kind: 'commercial',
    intakeGates: {
      ageLimit: {
        value:
          'Optum’s ABA Supplemental Clinical Criteria publish no age limit — coverage turns on a valid ASD diagnosis and medical necessity. The age term in Georgia comes from Ava’s Law (individuals 20 years of age or under on state-regulated plans, with ≤10-employee groups exempt and self-funded ERISA plans preempted), and there is no Georgia entry in Optum’s ABA State Mandates criteria to add anything on top. Federal parity generally makes the mandate’s age cap hard to enforce against covered large-group plans.',
        status: 'plan-dependent',
        blocker: 'per-case',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum \u2014 ABA State Mandates supplemental criteria (BH 803ABA STM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Georgia Code \u00a7 33-24-59.10 (Ava\'s Law)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-24-59-10/' }],
        verifyVia:
          'Plan funding type and employer size, then a live benefits verification — the mandate, not the carrier criteria, is what carries the age term.',
      },
      dxRecency: {
        value:
          'Not published. The Supplemental Clinical Criteria require a valid DSM-5-TR ASD diagnosis confirmed with at least one clinically validated tool, but set no maximum age on that diagnosis and no re-diagnosis interval. What Optum does clock is the review cycle — continued-service reviews every 4–6 months, with an operational flag when utilization falls below 80% of authorized hours — and the documentation standard that assessment instruments be norm-referenced against age-matched peers and used to “assess developmental gains as a result of interventions,” which implies current rather than historical scores without naming a window.',
        status: 'unverified',
        blocker: 'per-case',
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
          'It depends on how the plan is funded. A fully insured UnitedHealthcare plan sold in Georgia follows the Ensuring Transparency in Prior Authorization Act. A standard request gets notice "within 7 calendar days of obtaining all necessary information to make such authorization or adverse determination" (O.C.G.A. 33-46-26). Urgent requests get notice "no later than 72 hours after receiving all information needed" (33-46-27). A missed deadline means "automatic authorization" of the service (33-46-29), with a narrow de minimis exception. Both clocks start only once the plan has everything it needs, so send a complete packet. The Act also binds DCH contracts under the State Health Benefit Plan. A self-funded employer plan is governed by ERISA instead: "not later than 15 days after receipt of the claim," with one 15-day extension, and 72 hours for urgent care. No reauthorization lead time is published for UnitedHealthcare ABA in Georgia.',
        status: 'plan-dependent',
        cites: [
          { title: 'Georgia SB 80 (2021) — O.C.G.A. 33-46-26, -27, -29, -30 (Ensuring Transparency in Prior Authorization Act)', url: 'https://gov.georgia.gov/document/2021-signed-legislation/sb-80/download' },
          { title: 'O.C.G.A. 33-46-26 — prior authorization notice within 7 calendar days (FindLaw)', url: 'https://codes.findlaw.com/ga/title-33-insurance/ga-code-sect-33-46-26/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification with UnitedHealthcare: ask whether the plan is fully insured (Georgia prior-authorization law), self-funded (ERISA), or the State Health Benefit Plan, and the plan\'s reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Between two parents\' group plans, Georgia\'s coordination-of-benefits rule uses the birthday rule: "The benefits of the plan of the parent whose birthday falls earlier in a year are determined before those of the plan of the parent whose birthday falls later in that year." "Birthday" means month and day only. If the birthdays match, the plan that has covered the parent longer pays first. For separated or divorced parents, the order is the custodial parent\'s plan, then the step-parent\'s, then the non-custodial parent\'s, unless a court decree assigns health costs to one parent. That rule governs fully insured group plans. A self-funded employer plan sets its own order in its plan document. The UnitedHealthcare plan pays before Georgia Medicaid, which is payer of last resort and still wants its own ABS PA when secondary. It also pays before TRICARE, which pays only after other coverage. When the child also has CHAMPVA, the UnitedHealthcare plan pays first: "If you have any other type of other health insurance, CHAMPVA will pay secondary."',
        status: 'plan-dependent',
        cites: [
          { title: 'Ga. Comp. R. & Regs. 120-2-48-.05 — Group Coordination of Benefits, order of benefits', url: 'https://www.law.cornell.edu/regulations/georgia/Ga-Comp-R-Regs-R-120-2-48-.05' },
          { title: 'GA DCH — Part I Policies and Procedures for Medicaid/PeachCare for Kids (version date July 1, 2026), 104.3 and 303 (GAMMIS copy retrieved via web.archive.org)', url: 'https://www.mmis.georgia.gov/portal/Portals/0/StaticContent/Public/ALL/HANDBOOKS/Part%201%20Policies%20and%20Procedures%20for%20Medicaid%20PeachCare%20for%20Kids%20Q3%20July%202026%2020260706155614.pdf' },
          { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage, Medicaid excepted', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
          { title: 'CHAMPVA Guidebook (updated Jan. 1, 2025) — Other Health Insurance', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/programguides/CHAMPVA-Guide.pdf' },
        ],
        verifyVia: 'UnitedHealthcare member services / benefits verification: confirm funding type and the COB order in the plan document, and collect the other parent\'s plan, each parent\'s date of birth and any custody decree at intake.',
        blocker: 'per-case',
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
          'Not addressed in the commercial ABA reimbursement policy \u2014 it sets codes, modifiers, units and concurrency but no place-of-service rule.',
        status: 'unverified',
        blocker: 'per-case',
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
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Georgia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Georgia\'s mandate (O.C.G.A. § 33-24-59.10 (Ava’s Law)) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Georgia autism mandate require?', a: 'Ava’s Law requires state-regulated accident and sickness plans (including the state employee health plan) to cover ASD treatment for individuals 20 years of age or under, with ABA nominally cappable at $35,000 per year — and no limits allowed on the number of visits. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Georgia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Georgia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },
};

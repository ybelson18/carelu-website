import type { PayerConfig } from './types.js';

export const nebraskaPayers: Record<string, PayerConfig> = {
  'nebraska-medicaid': {
    slug: 'nebraska-medicaid',
    cardDesc: 'Under 21 via EPSDT; ASD dx NOT required; deep Aug 2025 rate cuts (97153 → $18.70).',
    assessmentPA: {
      value: 'MCO-administered — the treatment MSD requires the assessment + treatment plan with the initial PA request; an IDI within 12 months must establish the need first',
      status: 'verified',
      cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
    },
    treatmentPA: {
      value: 'Required — via the member\'s MCO; PA duration is variable per medical necessity (no fixed statewide period); treatment plan reviewed at least every 90 days',
      status: 'verified',
      cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Provider Bulletin 25-02 — ABA Service Definitions (eff. Feb 7, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-02.pdf' }],
    },
    dxRequired: {
      value: 'No — ASD or a developmental or intellectual disability qualifies, when the ABA assessment establishes treatment need',
      status: 'verified',
      cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Provider Bulletin 26-06 — Updated Service Definition and Changes to Billing and Utilization of ABA Services (June 1, 2026; eff. July 1, 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2026-06.pdf' }],
    },
    payer: 'Nebraska Medicaid (Heritage Health)',
    state: 'NE', kind: 'state-medicaid',
    deliveryRules: {
      supervision: {
        value:
          'Nebraska sets a percentage, a monthly floor, a caseload cap and a corrective-action duty. "Direct supervision by observation of the technician must occur no less than 10% of direct service hours (97153/97154/97155) provided in a week. Supervision must be documented in progress notes. Failure to meet 10% of direct service hours must be documented, including the reason that the supervision did not take place and a corrective action plan." Note the base: the 10% is measured against 97153, 97154 and 97155 hours together, weekly — not against 97153 alone. Layered on top: "The supervisor must provide direct supervision by observation of the technician or LaBA in person for at least one hour per month," and "The treating LBA or psychologist must provide at least one hour of in-person, direct services to the individual receiving services at least monthly." An LBA "may not supervise more than 24 technicians." LaBA work runs under an LBA; RBT work under an LBA or a psychologist with ABA training; provisionally licensed psychologists under a licensed psychologist with ABA training.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not stated in billing terms, though the definitions read as if it happens. The telehealth rule allows 97155 by audiovisual telehealth only where "The individual is receiving 97153 services concurrently," and the supervision percentage is measured against "direct service hours (97153/97154/97155)" as a single weekly pool — both of which presume the analyst and the technician on the clock at the same time. But neither MSD says in terms that both codes may be billed for the same clock time. What Nebraska does prohibit by name is a different concurrency: "Services delivered concurrently (at the same time) as another treatment modality (i.e. ST, OT, PT)," and "Services delivered by 2 LBAs unless non-duplicative and clinically appropriate."',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
        verifyVia:
          'The member\'s Heritage Health MCO — Nebraska Total Care, Molina, or UnitedHealthcare Community Plan (Optum). Ask specifically whether 97155 pays alongside 97153 for the same clock time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Per day and per week, not per code. "Direct ABA service hours provided to the individual may not exceed 6 hours in a single day or a total of 20 hours per week," with "Additional daily or weekly treatment hours … requested in certain clinical circumstances for which clinical justification must be submitted for prior authorization and be approved." Two more numbers are published as staffing ratios rather than ceilings: 97151, 97153 and 97155 run 1:1, 97154 runs one technician to 2-5 children, 97158 one licensed clinician to 2-5, and 97156 one clinician to one family. Read the weekly figure alongside its neighbors rather than alone, because three different documents carry three different weekly numbers for three different things: the treatment MSD\'s 20 hours per week is the Medicaid rule; Neb. Rev. Stat. § 44-7,106 caps behavioral health treatment including ABA at 25 hours per week for state-regulated commercial plans, a different program entirely; and DHHS\'s public "Applied Behavior Analysis Facts" summary page still describes the policy as allowing up to 30 hours per week. Quote the one that matches the member\'s coverage, and do not treat the other two as contradicting it. No per-code MUE table is published.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }, { title: 'DHHS "Applied Behavior Analysis Facts" page', url: 'https://dhhs.ne.gov/Pages/Applied-Behavior-Analysis.aspx' }],
      },
      noteSignature: {
        value:
          'Nebraska says what a progress note must contain, sets the deadline by reference, and never names a session-note signer. Progress notes "must be completed within the time frame specified in the program\'s policies and procedures" and must substantiate each service through narrative description, "Include an accurate start and end time for the service," tie the service to plan goals and priorities, document participation and revision of goals, and record the individual\'s response "in the individual\'s own words if possible, if age and developmentally appropriate." Signatures attach to the other documents: the treatment plan must "Be approved and signed by the licensed clinician or supervisor if provisionally licensed" and carry the individual\'s or guardian\'s signature (a parent or guardian where the individual is under 19); the ABA assessment report "must be signed by the licensed clinicians who participated in the development of the report, including the supervising practitioner, when applicable"; and the discharge summary must "contain the signature of the supervising clinician and date of signature." Supervision itself must be documented in progress notes.',
        status: 'verified',
        cites: [{ title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      placeOfService: {
        value:
          'Community, home, office or clinic — and school is not yours to bill. The treatment MSD lists the allowable settings as "Community, Home, Office or Clinic," then carves the school out entirely: "ABA services are covered as part of the Medicaid school-based services program, and are the responsibility of the school as outlined in Nebraska Administrative Code Title 471, Chapter 25 and the Medicaid State Plan. Independent providers may not bill Medicaid directly for services provided at a school." The assessment MSD keeps School on its settings list under the same carve-out. Where ABA does run in an educational setting, "A school plan is required for all educational settings, to include both public and private schools" (not daycare or after-school), it must be included in the student\'s IEP, it must focus on reducing behaviors that impede academic engagement rather than on general skill acquisition, and it must be time-limited with a transition plan shifting instructional control to school staff. Excluded outright: "Services delivered in the school setting as a shadow, or an aide, or to provide general support to the child or youth," and training for school personnel. Group homes are not addressed.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
      },
      billAsProvider: {
        value:
          'Nebraska controls this through code-level provider eligibility rather than a modifier set. Licensed clinicians who may bill 97151 — and who render 97155, 97156 and 97158 — are a psychiatrist, physician, psychologist or provisionally licensed psychologist, each with training in ABA, or a Licensed Behavior Analyst. Technicians who may bill 97152, 97153 and 97154 under a licensed clinician\'s supervision are a Licensed assistant Behavior Analyst or a Registered Behavior Technician. Since January 1, 2025 every BCBA must be licensed as an LBA and every BCaBA as a LaBA, so the state license rather than the BACB certificate is what makes the claim payable, and RBT is enrolled as its own Medicaid provider type (85) on the fee schedule. Which NPI carries the claim line is not stated.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
        verifyVia:
          'The member\'s Heritage Health MCO for the rendering-provider field on ABA claims — the service definitions specify who may render each code, not which NPI goes in which claim field.',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'The service definitions put it in one line: "Age: 0-20" — the ABA treatment definition and the Behavior Identification Assessment definition carry the identical admission bound, which is the EPSDT under-21 benefit expressed as an age range. One carve-out runs straight past it: individuals receiving waiver services from the Division of Developmental Disabilities "may receive Applied Behavior Analysis Assessments (HCPCS codes 97151 and 97152), regardless of age," and for waiver recipients only the ABA assessment "may be recommended and used for non-ABA related purposes."',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
      },
      dxRecency: {
        value:
          'Twelve months, measured on the Initial Diagnostic Interview rather than on the autism diagnosis. An "Initial Diagnostic Interview (IDI) must be completed, if one has not been completed within the previous 12 months of admission to the service," and it "must establish the need for an Applied Behavior Analysis Behavior Identification Assessment (ABA assessment) and outline the needed services and resources for the individual to make progress toward desired behavior changes." The refresh rule is narrower than a re-diagnosis: where the clinical presentation has changed significantly inside those twelve months, "a licensed clinician who is able to diagnose and treat major mental illness within their professional competencies, must review the IDI to determine if the diagnosis and treatment, recovery, and rehabilitation plan are still applicable," and any new information is documented as an IDI addendum reflecting current functional status. So an older autism report does not block a family — a stale IDI does.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
      },
      diagnosingProviders: {
        value:
          'The IDI definition names the list, and it is a mental-health list rather than a developmental-pediatrics one. The IDI is performed by "A licensed practitioner who is able to diagnose and treat major mental illness within his/her scope of practice": Physician, Physician Assistant, APRN/NP, Psychologist, or LIMHP. It must carry a DSM (current version) diagnosis with recommendations for active treatment interventions, a comprehensive mental status exam, history and symptomatology consistent with DSM criteria, psychiatric treatment history, risk assessment, medical history and current medications. Nebraska\'s qualifying diagnosis is also wider than autism: ASD or a developmental or intellectual disability admits, when the ABA assessment establishes the need — so intake should not screen out a family for lacking an autism label.',
        status: 'verified',
        cites: [{ title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      diagnosticTools: {
        value:
          'No ASD diagnostic instrument is required — neither ADOS-2 nor ADI-R appears anywhere in the Nebraska definitions. The instruments Nebraska names are functional, and they sit inside the ABA assessment and the treatment plan rather than behind the diagnosis. The ABA assessment must include "Skills-based assessments" and "Standardized/norm-referenced or criterion-referenced assessments," plus preference assessments to identify reinforcers and risk assessments where behaviors are challenging, and its report must explain "data collection methodology including use of validated rating scales and tools." The treatment plan must carry "baseline and ongoing measurement of skills, when applicable, using norm-referenced / standardized assessment tools, for example Vineland, VB-MAPP, ABLLS" — and continued stay names Vineland-3, VB-MAPP and ABLLS as the preferred tools for demonstrating progress.',
        status: 'verified',
        cites: [{ title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      referral: {
        value:
          'No physician referral and no order is a condition of the benefit. The gate is the IDI plus the ABA assessment: the IDI "must establish the need" for the ABA Behavior Identification Assessment, the assessment "must be completed prior to the initiation of ABA treatment interventions," and both plus the Individualized Treatment, Rehabilitation, and Recovery Plan are submitted with the initial prior-authorization request to the member\'s Heritage Health MCO. What the MSD does require in the other direction is outbound referral: the ABA provider "must consult with, or refer, the individual to other health care providers for suspected or diagnosed comorbid medical, psychiatric, and psychological needs as needed." Plan-level policies can and do add a recommendation requirement on top — check the MCO.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
      },
      telehealth: {
        value:
          'Three codes, and the conditions are spelled out per code. 97155 with protocol modification "may be completed via audiovisual telehealth" only if "The individual is receiving 97153 services concurrently," the environment has been assessed as safe, caregivers have technology and a secure internet connection, the technology lets the supervisor see the session and give real-time feedback, the behavior "is not so severe as to need more than 1:1 support," technology-related distractions are planned for, and documentation justifies telehealth as "necessary and formative for the ABA treatment, and not solely for the convenience of the provider or the caregiver." 97156 carries the same list with active caregiver participation in place of the concurrent 97153. On the assessment side, 97151 may be delivered by audiovisual telehealth if caregivers are on-site and the child has "the basic prerequisite skills needed to attend the telehealth evaluation, such as the ability to sit independently at a computer or tablet for 8-10 minutes." Flatly excluded: "Other ABA treatment services (CPT 97153, 97154, 97158) cannot be provided via telehealth," and 97152 "cannot be completed via telehealth." The billing allowances themselves live on the Medicaid Mental Health and Substance Use fee schedule, where ABA telehealth rides modifier 95 with POS 02/10.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' }],
      },
      authTurnaround: {
        value:
          'Nebraska runs every ABA authorization through the member\'s Heritage Health MCO, and DHHS publishes no timeframe of its own. Its provider manual points to each MCO for "coverage and authorization processes." The federal managed-care floor therefore governs. Standard decisions are due "within state established time frames that may not exceed 7 calendar days after receiving the request for service" for rating periods starting on or after January 1, 2026; Heritage Health rates are certified by calendar year, so this applies to 2026. Expedited decisions are due "no later than 72 hours after receipt of the request for service." Either clock can be extended up to 14 more calendar days at the family\'s or provider\'s request, or when the plan justifies needing more information. The 2025–2026 quality review reports that DHHS\'s MCO contracts still said 14 days and recommends updating them to seven. The three plans\' 2026 manuals are not aligned: Nebraska Total Care and UnitedHealthcare Community Plan publish 7 calendar days, Molina still publishes 14. No statewide reauthorization lead time is published. The treatment plan must still be reviewed at least every 90 days.',
        status: 'verified',
        cites: [
          { title: '42 CFR 438.210(d) — Timeframe for decisions (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'Nebraska Medicaid Provider Manual (August 2026)', url: 'https://dhhs.ne.gov/Documents/Medicaid%20Provider%20Manual.pdf' },
          { title: 'Contract Year 2025–2026 External Quality Review Technical Report for Heritage Health (HSAG)', url: 'https://dhhs.ne.gov/Documents/Heritage%20Health%20Aggregate%20Report%20-%20Measurement%20Year%202025.pdf' },
          { title: 'Nebraska Heritage Health CY22 Rate Certification (calendar-year rating period)', url: 'https://dhhs.ne.gov/Grants%20and%20Contract%20Opportunity%20Docs/Attachment%2019%20-%20Nebraska%20Heritage%20Health%20CY22%20Certification%202021.11.04.pdf' },
        ],
        verifyVia:
          'The member\'s MCO for its current turnaround and any reauthorization lead time: Nebraska Total Care 1-844-385-2192, Molina 1-844-782-2678, UnitedHealthcare Community Plan / Optum 1-866-331-2243.',
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last, and Nebraska enforces it at the claim. "All third party resources available to a Medicaid client must be utilized for all or part of their medical costs before Medicaid. … Medicaid is the payor of last resort." Bill the child\'s commercial plan first. When it pays part or denies, send its EOB or valid denial with the Medicaid claim: "The dates of service on the third party documentation must match the dates of service on each claim." A Medicaid prior auth does not skip that step: "The provider must resolve all third party resources before Nebraska Medicaid can consider paying a claim regardless of whether Medicaid prior authorization has been given." File with Medicaid within 12 months of service even while the other plan is unresolved. "Waiver claims" are the only listed pay-first exception, and Nebraska publishes no pediatric-preventive pay-and-chase carve-out for ABA. You may not turn a family away because another payer might be liable. TRICARE pays before Medicaid, because its double-coverage rule excludes Medicaid. Whether the MCO also wants its own ABA prior auth when it is the secondary payer is not written in the state rules.',
        status: 'verified',
        cites: [
          { title: '471 NAC 3-005 — Third Party Resources (Cornell LII reproduction of the 2022 chapter)', url: 'https://www.law.cornell.edu/regulations/nebraska/471-Neb-Admin-Code-ch-3-SS-005' },
          { title: 'Nebraska Medicaid Provider Manual (August 2026), §5.4 Third Party Liability', url: 'https://dhhs.ne.gov/Documents/Medicaid%20Provider%20Manual.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
        ],
        verifyVia:
          'The member\'s MCO utilization-management line, to confirm whether it requires its own ABA prior authorization when a commercial plan is primary. None of the three plans\' manuals says.',
      },
    },
    pill: 'Payer Guide · Nebraska Medicaid',
    h1: 'Nebraska Medicaid (Heritage Health) ABA coverage: the intake guide.',
    metaTitle: 'Nebraska Medicaid (Heritage Health) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Nebraska Medicaid covers ABA under Heritage Health managed care — no strict autism-diagnosis requirement, the 12-month IDI recency rule, MCO prior authorization, the August 2025 rate cuts (97153 to $18.70), the 20-hour weekly cap, and LBA licensure.',
    intro: [
      'Nebraska Medicaid covers ABA for members under 21 through EPSDT, under a pair of Medicaid Service Definitions (MSDs) effective February 7, 2025 — and delivers it entirely through Heritage Health managed care, so every authorization runs through one of three MCOs: Nebraska Total Care, Molina, or UnitedHealthcare Community Plan (with ABA managed by Optum). Two things make Nebraska unusual. First, an autism diagnosis is not strictly required — a developmental or intellectual disability qualifies when the ABA assessment establishes need. Second, in August 2025 DHHS cut ABA rates roughly 28–79% by code after program spend exploded from $4.6M to $85M+ in four years, making Nebraska one of the lowest-paying ABA states in the country. Both facts should shape how a practice runs intake here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21 (ages 0–20), via EPSDT' },
      { label: 'Diagnosis', value: 'ASD NOT strictly required — developmental or intellectual disability qualifies' },
      { label: 'Diagnosis recency', value: 'Initial Diagnostic Interview (IDI) within the previous 12 months' },
      { label: 'Prior auth', value: 'MCO-administered — assessment + treatment plan filed with the initial PA request' },
      { label: 'Hour caps', value: '6 hrs/day, 20 hrs/week absent PA\'d justification — the treatment MSD was updated mid-2026 to state this cleanly; DHHS\'s public Facts page still shows the old "up to 30" language' },
      { label: 'Rates (per 15 min)', value: '97151 $38.16 · 97153 $18.70 · 97155 $22.72 · 97156 $26.06 (eff. 8/1/2025)' },
      { label: 'Licensure', value: 'NE LBA license mandatory for Medicaid BCBAs since 1/1/2025' },
      { label: 'Staff screening', value: 'No fingerprint tier for ABA enrollment — abuse-registry checks reach staff via the BACB\'s 180-day requirement, not a state mandate' },
    ],
    sections: [
      {
        h2: 'Who qualifies: broader than autism',
        body: [
          'Admission requires a diagnosis of ASD or a developmental or intellectual disability — plus significant functional impairment in at least two listed domains — when the need for ABA is established by the ABA behavior identification assessment. That makes Nebraska one of the states where intake should not turn away a family without an autism diagnosis: ask about developmental and intellectual disability diagnoses too. The gate that does apply universally is the Initial Diagnostic Interview: an IDI by a licensed clinician, completed within the previous 12 months, must establish the need for the ABA assessment (with an IDI addendum if the clinical presentation has changed). One additional carve-out worth knowing: DD-waiver recipients may receive ABA assessments (97151/97152) regardless of age, and even for non-ABA purposes — effective 7/1/2026, per DHHS Provider Bulletin 26-06, which directly confirms this rule (previously sourced here only by inference).',
        ],
        cites: [
          { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
          { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' },
          { title: 'Provider Bulletin 26-06 — Updated Service Definition and Changes to Billing and Utilization of ABA Services (June 1, 2026; eff. July 1, 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2026-06.pdf' },
        ],
      },
      {
        h2: 'The August 2025 rate cuts',
        body: [
          'Effective August 1, 2025, DHHS cut ABA reimbursement dramatically — roughly 28–79% by code per CASP\'s estimate — after program spend grew from $4.6M in 2020 to more than $85M in 2024, a >2,000% increase DHHS cites on its own ABA Facts page. The current schedule per 15-minute unit: 97151 assessment $38.16, 97153 direct treatment $18.70, 97155 protocol modification $22.72, 97156 family training $26.06 (also 97152 $25.88, 97154 $7.49, 97158 $12.05). Rates are credential-flat — no BCBA-versus-technician tier for the same code — and telehealth (modifier 95, POS 02/10) is allowed for 97151, 97155, and 97156 only. The cuts triggered a legislative interim study, a State Auditor attestation report, and the near-exit of the state\'s largest provider — but they remain fully in force: the SFY27 fee schedule effective July 1, 2026 carries the same numbers. DHHS also directs the Heritage Health MCOs to track this fee schedule (HPA 25-08), so there is no MCO rate refuge. For practices, Nebraska Medicaid volume is a margin question to model deliberately, not an afterthought.',
        ],
        cites: [
          { title: 'Provider Bulletin 25-14 — Applied Behavior Analysis Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
          { title: 'SFY27 Mental Health & Substance Use Fee Schedule (July 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Practitioner%20Fee%20Schedules/MHSUD%20SFY27%20Fee%20Schedule.xlsx' },
          { title: 'DHHS "Applied Behavior Analysis Facts" page', url: 'https://dhhs.ne.gov/Pages/Applied-Behavior-Analysis.aspx' },
          { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
        ],
      },
      {
        h2: 'Authorization, and the resolved 20-hour weekly cap',
        body: [
          'Prior authorization runs through the member\'s MCO. The treatment MSD requires the ABA assessment and treatment plan to be submitted with the initial prior authorization request, and Provider Bulletin 25-02 clarifies that PA duration is "based on medical necessity and therefore is variable in duration" — no fixed statewide authorization period. Separately from whatever the MCO authorizes, the treatment plan itself must be reviewed and updated at least every 90 days.',
          'On weekly intensity, a conflict this guide previously flagged has been resolved in the MSD\'s favor: as of this review, the current ABA treatment MSD text unambiguously caps direct service at "6 hours in a single day or a total of 20 hours per week" absent PA\'d clinical justification, with no alternate 30-hour language anywhere in the document. This guide previously tied that change to Provider Bulletin 26-06 via local reporting it could not independently confirm; DHHS Provider Bulletin 26-06 ("Updated Service Definition and Changes to Billing and Utilization of Applied Behavior Analysis Services," dated June 1, 2026, effective July 1, 2026, signed by DHHS Director Drew Gonshorowski) has since been located and read directly, and it confirms the change firsthand: the 2026 updated ABA MSDs carrying the clean 20-hour/week language (no 30-hour alternate) took effect July 1, 2026, following a provider-feedback period. DHHS\'s public-facing "ABA Facts" summary page has not caught up: it still describes the policy as allowing up to 30 hours per week (reconfirmed stale as of this review), so expect that page to read stale until DHHS updates it. Plan requests against the MSD\'s 20-hour text as the governing rule, and expect hours beyond 6/day or 20/week to require clinical justification through PA.',
        ],
        cites: [
          { title: 'ABA Medicaid Service Definition (treatment MSD) — current text confirms 20 hrs/week', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
          { title: 'Provider Bulletin 25-02 — ABA Service Definitions (eff. Feb 7, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-02.pdf' },
          { title: 'Provider Bulletin 26-06 — Updated Service Definition and Changes to Billing and Utilization of ABA Services (June 1, 2026; eff. July 1, 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2026-06.pdf' },
          { title: 'DHHS "Applied Behavior Analysis Facts" page (not yet updated to match the MSD)', url: 'https://dhhs.ne.gov/Pages/Applied-Behavior-Analysis.aspx' },
        ],
      },
      {
        h2: 'Compliance rules that decide reauthorization',
        body: [
          'Since January 1, 2025, every BCBA serving Nebraska Medicaid must hold a Nebraska Licensed Behavior Analyst (LBA) license (BCaBAs a LaBA license); an LBA may supervise at most 24 technicians, must directly observe at least 10% of weekly direct-service hours, and must personally deliver at least 1 hour per month of in-person direct service. Caregiver participation is a tracked compliance item: 1 hour per month when services run 10 or fewer hours/month, otherwise a 2–4 hour monthly minimum, with teachers countable for at most 25% of caregiver-training hours — services won\'t be denied solely for non-participation, but it factors into continued-stay review. Continued-stay progress must be demonstrated with Vineland-3, VB-MAPP, or ABLLS (the preferred tools), and discharge triggers include no progress over two consecutive authorization periods or more than 6 months without demonstrated progress. Also excluded from coverage: two concurrent LBAs (unless justified), shadow/aide services in schools, ABA concurrent with ST/OT/PT sessions, naps and recreation time, and services delivered by a legally responsible person. School-based ABA bills through the Medicaid school-based services program (471 NAC 25), not independent providers — confirmed directly by DHHS Provider Bulletin 26-06.',
        ],
        cites: [
          { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
          { title: 'Provider Bulletin 25-02 — ABA Service Definitions (eff. Feb 7, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-02.pdf' },
          { title: 'Provider Bulletin 26-06 — Updated Service Definition and Changes to Billing and Utilization of ABA Services (June 1, 2026; eff. July 1, 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2026-06.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'At the technician level, Nebraska is now a pure-BACB state. Under the treatment MSD, the only staff who may deliver 97153/97154 under a licensed clinician are RBTs with current BACB certification or Licensed assistant Behavior Analysts (LaBAs) — and PB 25-02 dropped the state\'s longstanding bachelor\'s-degree-plus-experience requirement for RBTs, leaving BACB certification plus individual Nebraska Medicaid enrollment (RBT is its own provider type, 85, on the fee schedule) as the whole state requirement. There is no state technician registry and no training hours beyond the BACB floor — which itself requires each RBT applicant to pass both a criminal background check and an abuse-registry check within 180 days of applying, attested by a certificant.',
          'Nebraska\'s enrollment screening is lighter on ABA than agencies often assume. Provider types are risk-tiered per 42 CFR 455: BCBA (type 83) screens at Moderate risk (federal database checks plus unannounced site visits), while BCaBA (84) and RBT (85) screen at Limited — no fingerprint-based criminal background check at enrollment unless a trigger (payment suspension for a credible fraud allegation, a $1,500+ overpayment, an exclusion within 10 years) escalates the provider to High risk. The registry checks that trip up multi-line agencies bind elsewhere: the annual Child/Adult Abuse and Neglect Central Registry, Sex Offender Registry, and NDEN checks attach to individual HCBS (waiver/PAS) and NEMT providers, not ABA provider types 83–85 — so for a standard ABA practice, abuse-registry screening reaches staff through the BACB\'s own 180-day check rather than a state mandate. Two caveats: DHHS states that enrolled providers "should also be screening their employees based on the services they provide," and an agency that also delivers waiver service lines inherits the HCBS checks for those staff.',
          'Supervision is where the staffing math binds. Since January 1, 2025, every Medicaid-serving BCBA must hold a Nebraska LBA license and every BCaBA a LaBA license under the Behavior Analyst Practice Act (Neb. Rev. Stat. §§ 38-4401 to 38-4414, with BACB certification as the licensure floor) — note the practice-act regulations (172 NAC 10) were still in draft on the DHHS licensure page, so confirm current application mechanics with the Licensure Unit. The MSD\'s floors: direct observation of each technician for no less than 10% of weekly direct-service hours, documented in progress notes (PB 25-02 describes required supervision as 10–20% — the same kind of document conflict as the hour caps, so staff to the higher reading for margin), at least 1 hour per month of in-person observation of each technician or LaBA, and no more than 24 technicians per LBA. Plan-level extras: since January 1, 2025 all three Heritage Health MCOs run credentialing through a single CVO, Verisys; Nebraska Total Care adds a credentialing application (or CAQH authorization), malpractice face sheet, five-year work history, cultural-competency training evidence, and re-credentialing at least every 36 months; and Optum (UHC\'s ABA network) layers staff-level rules on groups — supervising BCBAs with BACB supervisory certification, RBT (or equivalent national) certification for technicians, and $1M/$3M professional liability coverage.',
        ],
        cites: [
          { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
          { title: 'Provider Bulletin 25-02 — ABA Service Definitions (eff. Feb 7, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-02.pdf' },
          { title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' },
          { title: 'BACB RBT Handbook — eligibility, background check + abuse-registry check', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'DHHS Provider Screening Risk Levels (updated 3/22/2024)', url: 'https://dhhs.ne.gov/Documents/Provider%20Screening%20Risk%20Levels.pdf' },
          { title: 'DHHS — Medicaid Provider Screening and Enrollment Requirements', url: 'https://dhhs.ne.gov/Pages/Medicaid-Provider-Screening-and-Enrollment-Requirements.aspx' },
          { title: 'Nebraska Medicaid Provider Screening and Enrollment 2024 Newsletter (Maximus — registry checks for individual HCBS/NEMT providers)', url: 'https://www.nebraskamedicaidproviderenrollment.com/Documents/MaximusNewsletter2024.pdf' },
          { title: 'NE DHHS Licensure — Behavior Analyst (Behavior Analyst Practice Act; 172 NAC 10 draft)', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
          { title: 'Nebraska Total Care — Contracting and Credentialing (Verisys CVO eff. 1/1/2025)', url: 'https://www.nebraskatotalcare.com/providers/credentialing.html' },
          { title: 'Optum — NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Heritage Health MCO', desc: 'Nebraska Total Care, Molina, or UnitedHealthcare Community Plan — same state MSD rules, very different submission machinery.' },
      { title: 'Qualifying diagnosis', desc: 'ASD or a developmental/intellectual disability — don\'t screen out non-autism families; the ABA assessment establishes need.' },
      { title: 'IDI date and clinician', desc: 'The Initial Diagnostic Interview must be within the previous 12 months — if it\'s older, an updated IDI (or addendum) comes before the assessment.' },
      { title: 'Caregiver availability', desc: 'Monthly participation minimums (1–4 hrs depending on service volume) factor into continued-stay review — set expectations at intake.' },
      { title: 'Other therapy schedule', desc: 'ABA concurrent with ST/OT/PT is not covered — map the family\'s full schedule to avoid billing conflicts.' },
    ],
    sources: [
      { title: 'Provider Bulletin 25-02 — ABA Service Definitions (Jan 31, 2025; eff. Feb 7, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-02.pdf' },
      { title: 'Provider Bulletin 26-06 — Updated Service Definition and Changes to Billing and Utilization of ABA Services (June 1, 2026; eff. July 1, 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2026-06.pdf' },
      { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
      { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
      { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
      { title: 'DHHS "Applied Behavior Analysis Facts" page', url: 'https://dhhs.ne.gov/Pages/Applied-Behavior-Analysis.aspx' },
      { title: 'SFY27 Mental Health & Substance Use Fee Schedule (July 2026)', url: 'https://dhhs.ne.gov/Medicaid%20Practitioner%20Fee%20Schedules/MHSUD%20SFY27%20Fee%20Schedule.xlsx' },
      { title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' },
      { title: 'BACB RBT Handbook — eligibility, background check + abuse-registry check', url: 'https://www.bacb.com/rbt-handbook' },
      { title: 'DHHS Provider Screening Risk Levels (updated 3/22/2024)', url: 'https://dhhs.ne.gov/Documents/Provider%20Screening%20Risk%20Levels.pdf' },
      { title: 'DHHS — Medicaid Provider Screening and Enrollment Requirements', url: 'https://dhhs.ne.gov/Pages/Medicaid-Provider-Screening-and-Enrollment-Requirements.aspx' },
      { title: 'Nebraska Medicaid Provider Screening and Enrollment 2024 Newsletter (Maximus — registry checks for individual HCBS/NEMT providers)', url: 'https://www.nebraskamedicaidproviderenrollment.com/Documents/MaximusNewsletter2024.pdf' },
      { title: 'NE DHHS Licensure — Behavior Analyst (Behavior Analyst Practice Act; 172 NAC 10 draft)', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Nebraska Total Care — Contracting and Credentialing (Verisys CVO eff. 1/1/2025)', url: 'https://www.nebraskatotalcare.com/providers/credentialing.html' },
      { title: 'Optum — NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' },
      { title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' },
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
    ],
    faq: [
      { q: 'Does Nebraska Medicaid cover ABA therapy?', a: 'Yes — for members under 21 through EPSDT, administered entirely by the three Heritage Health MCOs under the state\'s ABA Medicaid Service Definitions (effective February 2025). Prior authorization runs through the member\'s MCO.' },
      { q: 'Is an autism diagnosis required for ABA under Nebraska Medicaid?', a: 'No — admission criteria accept ASD or a developmental or intellectual disability, when the ABA assessment establishes treatment need and there\'s significant functional impairment in at least two domains. An Initial Diagnostic Interview within the previous 12 months must establish the need.' },
      { q: 'What does Nebraska Medicaid pay for ABA?', a: 'Per 15-minute unit, effective August 1, 2025: 97151 $38.16, 97153 $18.70, 97155 $22.72, 97156 $26.06 — a roughly 28–79% cut by code from prior rates, still in force in the SFY27 fee schedule. Rates are credential-flat, and MCOs are directed to track the state schedule.' },
      { q: 'How many hours per week does Nebraska Medicaid allow?', a: 'The state\'s documents conflict: the ABA treatment MSD text caps direct service at 6 hours/day and 20 hours/week absent PA\'d clinical justification, while DHHS\'s own summaries (including PB 25-02) describe the policy as up to 30 hours/week. Requests above the caps need clinical justification through prior authorization either way.' },
    ],
  },

  'nebraska-total-care': {
    slug: 'nebraska-total-care',
    family: 'centene',
    cardDesc: 'Closest to the state baseline; OTR-based PA, documentation-heavy NE.CP.BH.105 policy.',
    treatmentPA: {
      value: 'Required — Outpatient Treatment Request (OTR) via the provider portal or fax 866-593-1955, with hours per code, titration/discharge plan, crisis plan, and coordination-of-care attempts',
      status: 'verified',
      cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }, { title: 'Nebraska Total Care — behavioral health forms (ABA Form, OTR tip sheets)', url: 'https://www.nebraskatotalcare.com/providers/resources/behavioral-health-forms.html' }],
    },
    dxRequired: {
      value: 'ASD per DSM-5-TR "or an appropriate diagnosis as otherwise specified according to state-defined ABA criteria" — mirrors the state\'s non-ASD pathway',
      status: 'verified',
      cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
    },
    assessmentPA: {
      value: 'Not published — NE.CP.BH.105 specifies what the behavior identification assessment package must contain (IDI + FBA with direct assessment and data analysis) but never states whether the assessment CPT codes themselves need PA; verify in the portal or with the plan before booking',
      status: 'unverified',
      verifyVia:
        'Nebraska Total Care\u2019s prior-authorization code list / Pre-Auth Check tool on provider.nebraskatotalcare.com \u2014 NE.CP.BH.105 sets the assessment package contents but not the code-level PA requirement.',
      blocker: 'document',
    },
    payer: 'Nebraska Total Care (Centene)',
    state: 'NE', kind: 'medicaid-mco', parent: 'Nebraska Medicaid (Heritage Health)',
    deliveryRules: {
      supervision: {
        value:
          'Follows the Nebraska Medicaid rule: direct supervision by observation of the technician at no less than 10% of weekly direct service hours (97153/97154/97155), documented in progress notes with a corrective action plan when missed; at least one hour a month of in-person observation of each technician or LaBA; at least one hour a month of in-person direct service by the treating LBA or psychologist; and no more than 24 technicians per LBA. NE.CP.BH.105 adds an expectation rather than a number — "A comprehensive infrastructure for case supervision by a behavior analyst of all assessments and treatment" — and publishes no ratio of its own.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not stated in billing terms, though the definitions read as if it happens. The telehealth rule allows 97155 by audiovisual telehealth only where "The individual is receiving 97153 services concurrently," and the supervision percentage is measured against "direct service hours (97153/97154/97155)" as a single weekly pool — both of which presume the analyst and the technician on the clock at the same time. But neither MSD says in terms that both codes may be billed for the same clock time. What Nebraska does prohibit by name is a different concurrency: "Services delivered concurrently (at the same time) as another treatment modality (i.e. ST, OT, PT)," and "Services delivered by 2 LBAs unless non-duplicative and clinically appropriate." Nebraska Total Care republishes no concurrency edit; NE.CP.BH.105 points providers to the ABA Coding Coalition and CMS for unit questions instead.',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
        verifyVia:
          'Nebraska Total Care provider services / the secure provider portal at provider.nebraskatotalcare.com.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Two answers stacked. The state sets the clinical ceiling: direct ABA "may not exceed 6 hours in a single day or a total of 20 hours per week," with more available on prior authorization and clinical justification. Nebraska Total Care answers the per-code question by pointing outward rather than publishing a table: "Providers should reference the most recent version of ABA Coding Coalition for information on Medically Unlikely Edits (MUEs), and related processes for code usage and descriptors. The Centers for Medicare & Medicaid Services guidelines should be used to determine the maximum units of service a provider can report under most circumstances during a single date of service." One hard plan number does exist, for group work: "The minimum number of participants in group adaptive treatment is two and the maximum amount is eight."',
        status: 'verified',
        cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      noteSignature: {
        value:
          'Nebraska Total Care is the one Heritage Health plan that names a session-note signer, and it is the person who delivered the service: every note must carry the "Rendering clinician/technician\'s name, credentials, and dated signature." The surrounding checklist is unusually granular — provider organization name at the top of each page, member name on every page, DOB or unique identifier, date of rendered service, date of note creation if different, "Time service was initiated (time in) and the time the service ended (time out)," "Pauses in services indicating the time the service was paused and the time it resumed," location of services, type/code of service, who else was present and their relationship, and a session summary. An addendum needs a clear reference to the note it supplements, the date completed, and a "Signature with credentials." One deadline is stated outright: "Completion of the treatment record prior to submission of a claim."',
        status: 'verified',
        cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
      },
      placeOfService: {
        value:
          'Community, home, office or clinic — and school is not yours to bill. The treatment MSD lists the allowable settings as "Community, Home, Office or Clinic," then carves the school out entirely: "ABA services are covered as part of the Medicaid school-based services program, and are the responsibility of the school as outlined in Nebraska Administrative Code Title 471, Chapter 25 and the Medicaid State Plan. Independent providers may not bill Medicaid directly for services provided at a school." The assessment MSD keeps School on its settings list under the same carve-out. Where ABA does run in an educational setting, "A school plan is required for all educational settings, to include both public and private schools" (not daycare or after-school), it must be included in the student\'s IEP, it must focus on reducing behaviors that impede academic engagement rather than on general skill acquisition, and it must be time-limited with a transition plan shifting instructional control to school staff. Excluded outright: "Services delivered in the school setting as a shadow, or an aide, or to provide general support to the child or youth," and training for school personnel. Group homes are not addressed. Nebraska Total Care publishes no Nebraska-specific ABA policy that deviates from this, and its own material was checked for one. Its own note checklist requires the "Location of services" on every session note, so the setting is an audited field here rather than a background fact.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
      },
      billAsProvider: {
        value:
          'Nebraska controls this through code-level provider eligibility rather than a modifier set. Licensed clinicians who may bill 97151 — and who render 97155, 97156 and 97158 — are a psychiatrist, physician, psychologist or provisionally licensed psychologist, each with training in ABA, or a Licensed Behavior Analyst. Technicians who may bill 97152, 97153 and 97154 under a licensed clinician\'s supervision are a Licensed assistant Behavior Analyst or a Registered Behavior Technician. Since January 1, 2025 every BCBA must be licensed as an LBA and every BCaBA as a LaBA, so the state license rather than the BACB certificate is what makes the claim payable, and RBT is enrolled as its own Medicaid provider type (85) on the fee schedule. Which NPI carries the claim line is not stated. NE.CP.BH.105 requires the rendering clinician or technician to be named with credentials on every note, but says nothing about which NPI carries the claim.',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
        verifyVia:
          'Nebraska Total Care provider services / the secure provider portal at provider.nebraskatotalcare.com.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Nebraska Medicaid rule: admission is "Age: 0-20" under both ABA service definitions, with DD-waiver recipients able to receive the ABA assessment codes (97151/97152) regardless of age. NE.CP.BH.105 is a documentation policy and states no age criterion of its own, and its footer is explicit that for Medicaid members "when state Medicaid coverage provisions conflict with the coverage provisions in this clinical policy, state Medicaid coverage provisions take precedence."',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
      },
      dxRecency: {
        value:
          'Follows the Nebraska Medicaid rule: an Initial Diagnostic Interview completed within the previous 12 months, with an IDI addendum where the clinical presentation has changed. Nebraska Total Care operationalizes rather than relaxes it — NE.CP.BH.105 requires the behavior identification assessment package to contain both the "Initial Diagnostic Interview (IDI)" and a "Functional Behavioral Assessment (FBA), including both of the following assessment techniques: Direct assessment; Data analysis."',
        status: 'verified',
        cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Two layers, and the plan\'s is the stricter one. The state routes the diagnosis through the IDI, performed by "A licensed practitioner who is able to diagnose and treat major mental illness within his/her scope of practice" — Physician, Physician Assistant, APRN/NP, Psychologist or LIMHP. NE.CP.BH.105 then requires "Confirmed autism spectrum disorder (ASD) diagnosis according to the Diagnostic and Statistical Manual of Mental Disorders (DSM-5 TR) criteria or an appropriate diagnosis as otherwise specified according to state-defined ABA criteria" — wording that deliberately preserves Nebraska\'s non-ASD pathway — plus a recommendation from a practitioner "qualified to diagnose ASD and recommend ABA."',
        status: 'verified',
        cites: [{ title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' }, { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }],
      },
      diagnosticTools: {
        value:
          'No ASD diagnostic instrument is required. What NE.CP.BH.105 requires instead is a battery inside the assessment: the IDI and an FBA with direct assessment and data analysis, plus "Administration of assessments, including but not limited to the following: Preference assessments; Standardized testing; Criterion-referenced testing; Functional Analysis." Behind it the state definitions ask for skills-based and standardized/norm-referenced or criterion-referenced assessments, with Vineland, VB-MAPP and ABLLS named for baseline and progress measurement.',
        status: 'verified',
        cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      referral: {
        value:
          'This is where Nebraska Total Care adds a gate the state does not have. NE.CP.BH.105 requires every ABA request to contain a "Recommendation for treatment with ABA by a physician, psychologist, social worker, or another appropriately licensed health care practitioner working within their scope of practice and who is qualified to diagnose ASD and recommend ABA." The state MSDs require no referral or order at all — their gate is the IDI plus the ABA assessment — so collect the recommendation for this plan specifically, not as a statewide habit.',
        status: 'verified',
        cites: [{ title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Nebraska Medicaid rule: audiovisual telehealth for 97155 (only while the individual is receiving 97153 concurrently), 97156, and the 97151 assessment, each under the conditions the service definitions spell out; 97152, 97153, 97154 and 97158 cannot be delivered by telehealth. NE.CP.BH.105 states no telehealth position of its own.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
        verifyVia:
          'Nebraska Total Care provider services / the secure provider portal at provider.nebraskatotalcare.com.',
      },
      authTurnaround: {
        value:
          'Nebraska Total Care publishes its own clock, and it matches the 2026 federal floor. "Preservice/non-urgent: Seven (7) calendar days"; "Preservice/Urgent: 72 hours"; "Concurrent review: 72 hours," with decisions made "as expeditiously as the member\'s health condition requires." The behavioral-health section says the same for the ABA request form (the OTR): "allow up to seven (7) calendar days to process non-urgent requests." Requests faxed or sent through the portal after 8 a.m.–5 p.m. CST, Monday to Friday, are "processed the next business day." Plan ahead, because nothing is backdated: "We will not retroactively certify routine services. The dates of the authorization request must correspond to the dates of expected services." An incomplete OTR "can result in authorization delays and/or denials." The plan publishes no ABA reauthorization lead time; its medical-side table asks five business days before elective outpatient services.',
        status: 'verified',
        cites: [
          { title: 'Nebraska Total Care 2026 Provider Manual (PROV16-NE-00025 rev 01/2026)', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/PDFs/ProviderRelations/NTC_10_Provider_Manual_03032025_01122026_Final_508.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          '"Nebraska Total Care is always the payer of last resort," and "Any other insurance, including Medicare, is always primary to Medicaid coverage." Bill the primary plan first. Then "submit a copy of the Explanation of Benefits (EOB) or Explanation of Payment (EOP), or rejection letter from the other insurance when the claim is filed." Without it the claim "will deny until this information is received." When a child has two primary plans ("Medicaid would be the third payer"), the claim "must be submitted on a paper claim," not by EDI or the portal. As secondary payer, claims are due "within 365 calendar days of the date of service" instead of 180. A third-party payment received after Nebraska Total Care has paid must be refunded within 30 calendar days, with the EOB. The manual does not say whether its own ABA prior auth is required when another plan is primary.',
        status: 'verified',
        cites: [
          { title: 'Nebraska Total Care 2026 Provider Billing Guide — Third Party Liability / Coordination of Benefits', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/PDFs/ProviderRelations/NTC_Provider_Billing_Guide_12152025_01132026_508.pdf' },
          { title: 'Nebraska Total Care 2026 Provider Manual (PROV16-NE-00025 rev 01/2026)', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/PDFs/ProviderRelations/NTC_10_Provider_Manual_03032025_01122026_Final_508.pdf' },
        ],
        verifyVia:
          'Nebraska Total Care Pre-Auth check tool or 1-844-385-2192: ask whether an OTR is still required for ABA when a commercial plan is primary.',
      },
    },
    pill: 'Payer Guide · Nebraska Total Care',
    h1: 'Nebraska Total Care ABA coverage (Heritage Health MCO).',
    metaTitle: 'Nebraska Total Care (Heritage Health MCO) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Nebraska Total Care (Centene) administers Nebraska Medicaid ABA — the NE.CP.BH.105 documentation policy, OTR-based prior authorization, IDI and FBA requirements in the assessment package, and why denial risk here is documentation-driven.',
    intro: [
      'Nebraska Total Care, Centene\'s Heritage Health plan, is the closest of the three MCOs to the state baseline: its Nebraska-specific policy NE.CP.BH.105 ("Applied Behavioral Analysis Documentation Requirements," rev. 06/2024) operationalizes the DHHS Medicaid Service Definitions rather than imposing distinct medical-necessity criteria — and its own footer says state Medicaid provisions take precedence in any conflict. What the plan adds is paperwork rigor: an OTR-based authorization workflow and a documentation checklist detailed enough that denial risk here is documentation-driven more than criteria-driven.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Heritage Health MCO (Centene)' },
      { label: 'Clinical rules', value: 'State MSDs, operationalized by NE.CP.BH.105 (documentation policy)' },
      { label: 'Prior auth', value: 'OTR process — ABA Form via portal or fax 866-593-1955' },
      { label: 'Assessment package', value: 'Must include the IDI and an FBA with direct assessment + data analysis' },
      { label: 'Group sessions', value: 'Group adaptive treatment: minimum 2, maximum 8 participants' },
      { label: 'Rates', value: 'Tracks the state fee schedule per DHHS direction (HPA 25-08)' },
    ],
    sections: [
      {
        h2: 'How Nebraska Total Care runs ABA authorization',
        body: [
          'ABA requests go through the Outpatient Treatment Request (OTR) process — the plan publishes an ABA Form and an ABA OTR Tip Sheet — submitted through the secure provider portal (provider.nebraskatotalcare.com) or by fax to 866-593-1955. The treatment plan must include hours requested per service with clinical justification, billing codes, a titration/discharge plan, a crisis plan, and documented coordination-of-care attempts down to dates, success, and contact names. On the front end, NE.CP.BH.105 requires the behavior identification assessment package to include the IDI and a functional behavior assessment with direct assessment and data analysis. One honest gap: we did not locate a published NTC statement that the assessment CPT codes themselves require PA — verify the assessment-PA question in the portal or with the plan before booking, rather than assuming either way.',
        ],
        cites: [
          { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' },
          { title: 'Nebraska Total Care — behavioral health forms (ABA Form, OTR tip sheets)', url: 'https://www.nebraskatotalcare.com/providers/resources/behavioral-health-forms.html' },
        ],
      },
      {
        h2: 'Documentation is the denial risk',
        body: [
          'The policy\'s documentation checklist is unusually granular: time in/out, pauses in service with resume times, even preferred-versus-legal name conventions. Paired with the plan\'s published tip-sheet suite (assessment/plans, caregiver training, coordination of care, transition planning), the signal is active chart auditing — build session-note templates to the checklist rather than remediating at audit. Clinically, the policy mirrors the state: it accepts a confirmed DSM-5-TR ASD diagnosis "or an appropriate diagnosis as otherwise specified according to state-defined ABA criteria," which preserves Nebraska\'s developmental/intellectual-disability pathway, and group adaptive treatment sessions must run with 2–8 participants. Rates track the state fee schedule per DHHS direction.',
        ],
        cites: [
          { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' },
          { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'IDI + FBA for the assessment package', desc: 'NE.CP.BH.105 requires both in the behavior identification assessment — line them up before submission.' },
      { title: 'Qualifying diagnosis', desc: 'ASD or the state\'s non-ASD pathway (developmental/intellectual disability) — the policy honors both.' },
      { title: 'Coordination-of-care log', desc: 'The OTR wants attempts with dates, outcome, and contact names — start the log at intake.' },
      { title: 'Crisis + titration/discharge plans', desc: 'Both are required treatment-plan elements — missing sections bounce requests.' },
    ],
    sources: [
      { title: 'NE.CP.BH.105 — Applied Behavioral Analysis Documentation Requirements', url: 'https://www.nebraskatotalcare.com/content/dam/centene/Nebraska/policies/clinical-policies/NE.CP.BH.105_Applied_Behavioral_Analysis_Documentation_Requirements_07022024_508.pdf' },
      { title: 'Nebraska Total Care — behavioral health forms', url: 'https://www.nebraskatotalcare.com/providers/resources/behavioral-health-forms.html' },
      { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
      { title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' },
      { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' },
      { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
    ],
    faq: [
      { q: 'Does Nebraska Total Care cover ABA therapy?', a: 'Yes — it administers the Nebraska Medicaid ABA benefit under the state Medicaid Service Definitions, with its NE.CP.BH.105 documentation policy layered on top. Its own policy says state provisions take precedence in any conflict.' },
      { q: 'How do I submit an ABA authorization to Nebraska Total Care?', a: 'Through the Outpatient Treatment Request (OTR) process — the ABA Form via the secure provider portal (provider.nebraskatotalcare.com) or fax 866-593-1955, with hours per code, clinical justification, titration/discharge and crisis plans, and coordination-of-care documentation.' },
      { q: 'Does the ABA assessment itself need PA at Nebraska Total Care?', a: 'The plan publishes no clear statewide statement that the assessment CPT codes require PA — the published policy focuses on what the assessment package must contain (IDI + FBA). Verify assessment-PA handling in the portal or with the plan before booking.' },
    ],
  },

  'molina-healthcare-nebraska': {
    slug: 'molina-healthcare-nebraska',
    family: 'molina',
    cardDesc: 'Newest MCO (2024); state-baseline rules, Availity intake, quarterly PA-list churn.',
    assessmentPA: {
      value: 'Not published for Nebraska — no Molina statement exists on whether the ABA assessment codes need PA; requirements live in the quarterly PA code-change lists and the PA look-up tool (Availity). Verify before booking; the state MSD requires the ABA assessment before treatment either way',
      status: 'unverified',
      verifyVia:
        'Molina Nebraska\u2019s current-quarter prior-authorization code-change PDF and the PA look-up tool on Availity Essentials \u2014 the code-level PA answer is published there, not in any ABA policy. Molina\u2019s PA code lists change quarterly, so re-check per cohort rather than per year.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — ABA treatment runs on prior authorization under the state MSD (ABA assessment + treatment plan filed with the initial request); Molina publishes no ABA-specific form, so submit via Availity Essentials (fax (833) 832-1015, phone (844) 782-2678) and re-check the current-quarter PA code list',
      status: 'verified',
      cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Molina NE Medicaid — prior authorization page (Availity, fax, phone, quarterly PA code changes)', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
    },
    dxRequired: {
      value: 'State MSD rules govern — ASD or a developmental or intellectual disability qualifies, with an IDI within the previous 12 months establishing the need; Molina publishes no Nebraska-specific diagnosis criteria',
      status: 'verified',
      cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
    },
    payer: 'Molina Healthcare of Nebraska',
    state: 'NE', kind: 'medicaid-mco', parent: 'Nebraska Medicaid (Heritage Health)',
    deliveryRules: {
      supervision: {
        value:
          'Follows the Nebraska Medicaid rule: direct supervision by observation of the technician at no less than 10% of weekly direct service hours (97153/97154/97155), documented in progress notes with a corrective action plan when missed; at least one hour a month of in-person observation of each technician or LaBA; at least one hour a month of in-person direct service by the treating LBA or psychologist; and no more than 24 technicians per LBA. Molina runs ABA utilization management in-house with Nebraska-licensed LBA care review clinicians, but publishes no supervision standard of its own.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      concurrentBilling: {
        value:
          'Not stated in billing terms, though the definitions read as if it happens. The telehealth rule allows 97155 by audiovisual telehealth only where "The individual is receiving 97153 services concurrently," and the supervision percentage is measured against "direct service hours (97153/97154/97155)" as a single weekly pool — both of which presume the analyst and the technician on the clock at the same time. But neither MSD says in terms that both codes may be billed for the same clock time. What Nebraska does prohibit by name is a different concurrency: "Services delivered concurrently (at the same time) as another treatment modality (i.e. ST, OT, PT)," and "Services delivered by 2 LBAs unless non-duplicative and clinically appropriate." Molina publishes nothing ABA-specific for Nebraska, so the state position is the only one on the record.',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
        verifyVia:
          'Molina Nebraska via Availity Essentials or the PA look-up tool, and the current-quarter PA code-change PDF — Molina\'s PA code lists change quarterly, so re-check per cohort rather than per year.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Nebraska Medicaid rule: direct ABA "may not exceed 6 hours in a single day or a total of 20 hours per week," with additional hours available on prior authorization and clinical justification; group work runs one technician to 2-5 children on 97154 and one licensed clinician to 2-5 on 97158. No per-code MUE table is published by the state, and Molina publishes none either — what Molina does publish is quarterly PA code-change PDFs, so unit handling is a quarterly re-check rather than a fixed table.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
        verifyVia:
          'Molina Nebraska via Availity Essentials or the PA look-up tool, and the current-quarter PA code-change PDF — Molina\'s PA code lists change quarterly, so re-check per cohort rather than per year.',
      },
      noteSignature: {
        value:
          'Nebraska says what a progress note must contain, sets the deadline by reference, and never names a session-note signer. Progress notes "must be completed within the time frame specified in the program\'s policies and procedures" and must substantiate each service through narrative description, "Include an accurate start and end time for the service," tie the service to plan goals and priorities, document participation and revision of goals, and record the individual\'s response "in the individual\'s own words if possible, if age and developmentally appropriate." Signatures attach to the other documents: the treatment plan must "Be approved and signed by the licensed clinician or supervisor if provisionally licensed" and carry the individual\'s or guardian\'s signature (a parent or guardian where the individual is under 19); the ABA assessment report "must be signed by the licensed clinicians who participated in the development of the report, including the supervising practitioner, when applicable"; and the discharge summary must "contain the signature of the supervising clinician and date of signature." Supervision itself must be documented in progress notes. Molina publishes no ABA-specific documentation policy for Nebraska.',
        status: 'verified',
        cites: [{ title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      placeOfService: {
        value:
          'Community, home, office or clinic — and school is not yours to bill. The treatment MSD lists the allowable settings as "Community, Home, Office or Clinic," then carves the school out entirely: "ABA services are covered as part of the Medicaid school-based services program, and are the responsibility of the school as outlined in Nebraska Administrative Code Title 471, Chapter 25 and the Medicaid State Plan. Independent providers may not bill Medicaid directly for services provided at a school." The assessment MSD keeps School on its settings list under the same carve-out. Where ABA does run in an educational setting, "A school plan is required for all educational settings, to include both public and private schools" (not daycare or after-school), it must be included in the student\'s IEP, it must focus on reducing behaviors that impede academic engagement rather than on general skill acquisition, and it must be time-limited with a transition plan shifting instructional control to school staff. Excluded outright: "Services delivered in the school setting as a shadow, or an aide, or to provide general support to the child or youth," and training for school personnel. Group homes are not addressed. Molina publishes no deviation from this.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      billAsProvider: {
        value:
          'Nebraska controls this through code-level provider eligibility rather than a modifier set. Licensed clinicians who may bill 97151 — and who render 97155, 97156 and 97158 — are a psychiatrist, physician, psychologist or provisionally licensed psychologist, each with training in ABA, or a Licensed Behavior Analyst. Technicians who may bill 97152, 97153 and 97154 under a licensed clinician\'s supervision are a Licensed assistant Behavior Analyst or a Registered Behavior Technician. Since January 1, 2025 every BCBA must be licensed as an LBA and every BCaBA as a LaBA, so the state license rather than the BACB certificate is what makes the claim payable, and RBT is enrolled as its own Medicaid provider type (85) on the fee schedule. Which NPI carries the claim line is not stated. Molina publishes no Nebraska ABA billing policy.',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
        verifyVia:
          'Molina Nebraska via Availity Essentials or the PA look-up tool, and the current-quarter PA code-change PDF — Molina\'s PA code lists change quarterly, so re-check per cohort rather than per year.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Nebraska Medicaid rule: admission is "Age: 0-20" under both ABA service definitions, with DD-waiver recipients able to receive the ABA assessment codes (97151/97152) regardless of age. Molina publishes no Nebraska-specific ABA clinical policy — its Nebraska Medicaid prior-authorization page sets only the machinery (Availity Essentials, fax (833) 832-1015, phone (844) 782-2678, a Behavioral Health Certification of Need form, and quarterly PA code-change PDFs), with no ABA criteria, caps or code rules on it.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      dxRecency: {
        value:
          'Follows the Nebraska Medicaid rule: an Initial Diagnostic Interview completed within the previous 12 months of admission must establish the need for the ABA assessment, with an IDI addendum where the clinical presentation has changed significantly inside that window. Molina publishes no Nebraska-specific ABA clinical policy — its Nebraska Medicaid prior-authorization page sets only the machinery (Availity Essentials, fax (833) 832-1015, phone (844) 782-2678, a Behavioral Health Certification of Need form, and quarterly PA code-change PDFs), with no ABA criteria, caps or code rules on it.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      diagnosingProviders: {
        value:
          'Follows the Nebraska Medicaid rule: the IDI is performed by "A licensed practitioner who is able to diagnose and treat major mental illness within his/her scope of practice" — Physician, Physician Assistant, APRN/NP, Psychologist or LIMHP — and the qualifying diagnosis is ASD or a developmental or intellectual disability. Molina publishes no Nebraska-specific ABA clinical policy — its Nebraska Medicaid prior-authorization page sets only the machinery (Availity Essentials, fax (833) 832-1015, phone (844) 782-2678, a Behavioral Health Certification of Need form, and quarterly PA code-change PDFs), with no ABA criteria, caps or code rules on it.',
        status: 'verified',
        cites: [{ title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      diagnosticTools: {
        value:
          'Follows the Nebraska Medicaid rule: no ASD diagnostic instrument is required; the ABA assessment must include skills-based and standardized/norm-referenced or criterion-referenced assessments, and the treatment plan must carry baseline and ongoing measurement "using norm-referenced / standardized assessment tools, for example Vineland, VB-MAPP, ABLLS." Molina publishes no Nebraska-specific ABA clinical policy — its Nebraska Medicaid prior-authorization page sets only the machinery (Availity Essentials, fax (833) 832-1015, phone (844) 782-2678, a Behavioral Health Certification of Need form, and quarterly PA code-change PDFs), with no ABA criteria, caps or code rules on it.',
        status: 'verified',
        cites: [{ title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      referral: {
        value:
          'Follows the Nebraska Medicaid rule: no referral or physician order is a condition of the benefit — the gate is the IDI establishing need plus the ABA assessment, filed with the treatment plan on the initial PA request. Molina publishes no Nebraska-specific ABA clinical policy — its Nebraska Medicaid prior-authorization page sets only the machinery (Availity Essentials, fax (833) 832-1015, phone (844) 782-2678, a Behavioral Health Certification of Need form, and quarterly PA code-change PDFs), with no ABA criteria, caps or code rules on it.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
      },
      telehealth: {
        value:
          'Follows the Nebraska Medicaid rule: audiovisual telehealth is available for 97155 (only while 97153 runs concurrently), 97156 and the 97151 assessment under the conditions the service definitions spell out, while 97152, 97153, 97154 and 97158 cannot be delivered remotely. Molina publishes no Nebraska-specific ABA clinical policy — its Nebraska Medicaid prior-authorization page sets only the machinery (Availity Essentials, fax (833) 832-1015, phone (844) 782-2678, a Behavioral Health Certification of Need form, and quarterly PA code-change PDFs), with no ABA criteria, caps or code rules on it.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' }],
        verifyVia:
          'Molina Nebraska via Availity Essentials or the PA look-up tool, and the current-quarter PA code-change PDF — Molina\'s PA code lists change quarterly, so re-check per cohort rather than per year.',
      },
      authTurnaround: {
        value:
          'Molina\'s 2026 Nebraska manual is out of date against federal law. Its table still reads "Prior Authorization Standard: 14 Calendar days" and "Prior Authorization Urgent: 72 hours." Heritage Health rating periods run by calendar year, so from January 1, 2026 the federal floor caps standard decisions at "7 calendar days after receiving the request for service." Expedited decisions stay at 72 hours, and either clock can be extended up to 14 calendar days. Hold Molina to seven days. Urgent requests must include "Supporting documentation … to justify the expedited request." After a denial, a peer-to-peer can be requested "within five (5) business days of the denial notification." Molina publishes no ABA reauthorization lead time.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Nebraska — Medicaid Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ne/EN/Provider-Manual-2026.ashx' },
          { title: '42 CFR 438.210(d) — Timeframe for decisions (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'Contract Year 2025–2026 External Quality Review Technical Report for Heritage Health (HSAG)', url: 'https://dhhs.ne.gov/Documents/Heritage%20Health%20Aggregate%20Report%20-%20Measurement%20Year%202025.pdf' },
        ],
        verifyVia:
          'Molina Nebraska Provider Services (844) 782-2678: confirm the standard turnaround it now applies and any ABA reauthorization lead time. Its manual still prints 14 days.',
      },
      coordinationOfBenefits: {
        value:
          '"Medicaid is always the payer of last resort," except for Indian Health Service, Ryan White and similar federal programs. "If third-party liability can be established, Providers must first bill the primary payer and submit a primary explanation of benefits (EOB) to Molina for secondary Claim processing," and "Primary carrier payment information is required with the Claim submission." Timely filing restarts: "the Provider must submit Claims to Molina within 180 calendar days after final determination by the primary payer." Molina "will not deny Provider Claims on the basis of untimely filing for Claims that involve coordination of services or subrogation." Molina pays the secondary amount "based on the state regulatory COB methodology." The manual does not say whether Molina\'s ABA prior auth is required when another plan is primary.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Nebraska — Medicaid Provider Manual 2026, Coordination of Benefits (COB) and Third-Party Liability (TPL)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ne/EN/Provider-Manual-2026.ashx' },
        ],
        verifyVia:
          'Molina Nebraska PA look-up tool on Availity Essentials or (844) 782-2678: ask whether ABA prior authorization is still required when a commercial plan is primary.',
      },
    },
    pill: 'Payer Guide · Molina Healthcare (NE)',
    h1: 'Molina Healthcare of Nebraska ABA coverage (Heritage Health MCO).',
    metaTitle: 'Molina Healthcare of Nebraska (Heritage Health) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of Nebraska administers Nebraska Medicaid ABA — the 2024 Heritage Health entrant, Availity Essentials submission, quarterly PA code-list changes, and what remains unpublished about its ABA-specific rules.',
    intro: [
      'Molina Healthcare of Nebraska is the newest Heritage Health MCO — it entered January 1, 2024, replacing Healthy Blue — and has the least Nebraska-specific published ABA infrastructure of the three plans. No Nebraska-specific ABA clinical policy has been published: Molina applies the state Medicaid Service Definitions plus its corporate behavioral-health criteria, so treat it as state-baseline clinically and expect the differentiation to be operational — Availity intake, corporate forms, and quarterly PA code-list churn.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Heritage Health MCO — entered 1/1/2024, replacing Healthy Blue' },
      { label: 'Clinical rules', value: 'State MSDs + Molina corporate BH criteria (no published NE ABA policy)' },
      { label: 'Submission', value: 'Availity Essentials (preferred), fax (833) 832-1015, phone (844) 782-2678' },
      { label: 'PA code lists', value: 'Change quarterly — re-verify ABA codes each quarter' },
      { label: 'ABA UM', value: 'In-house — Molina hires NE-based LBA care review clinicians' },
      { label: 'Rates', value: 'Tracks the state fee schedule per DHHS direction (HPA 25-08)' },
    ],
    sections: [
      {
        h2: 'What\'s published — and what isn\'t',
        body: [
          'Molina\'s Nebraska Medicaid PA page establishes the machinery: requests submit through Availity Essentials (preferred), by fax to (833) 832-1015, or by phone at (844) 782-2678, with a Behavioral Health Certification of Need for Services form published for BH services and quarterly PA code-change PDFs posted for the current year. What it does not establish is an ABA-specific rulebook: we found no published Nebraska statement on whether the ABA assessment codes need PA, and third-party descriptions of Molina\'s ABA treatment-PA specifics could not be verified against a Molina document. Practically: assume the state MSD rules govern clinically, confirm ABA code-level PA requirements through Availity or the plan\'s PA look-up tool before every new intake cohort, and re-check quarterly — the PA lists genuinely change.',
        ],
        cites: [
          { title: 'Molina NE Medicaid — prior authorization page (Availity, fax, phone, quarterly PA code changes)', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' },
        ],
      },
      {
        h2: 'Working with the newest plan',
        body: [
          'Molina took over from Healthy Blue on January 1, 2024 under a five-year contract (with a two-year option), alongside Nebraska Total Care and UnitedHealthcare. Its ABA utilization management is done in-house — the plan hires Nebraska-based "Care Review Clinician, ABA" roles requiring an LBA license — so expect clinical conversations with licensed analysts rather than a delegated vendor. Rates follow the state schedule per DHHS\'s Health Plan Advisory 25-08, the same as the other two MCOs. Given the thin published ABA surface, the operating posture at this plan is verify-first: every code, every quarter, in the portal.',
        ],
        cites: [
          { title: 'Healthcare Dive — Nebraska awards Medicaid managed care contracts (Molina, NTC, UHC; start 1/1/2024)', url: 'https://www.healthcaredive.com/news/Nebraska-Medicaid-managed-care/632712/' },
          { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Availity access confirmed', desc: 'Availity Essentials is the preferred PA channel — make sure registration covers Molina NE before the first request.' },
      { title: 'Current-quarter PA code list', desc: 'ABA code PA status can change quarterly — pull the latest PA code-change PDF or use the look-up tool.' },
      { title: 'Qualifying diagnosis + IDI', desc: 'State MSD rules govern: ASD or developmental/intellectual disability, with an IDI in the previous 12 months.' },
      { title: 'Certification of Need form', desc: 'Molina publishes a BH Certification of Need for Services form — have it in the submission packet.' },
    ],
    sources: [
      { title: 'Molina NE Medicaid — prior authorization page', url: 'https://www.molinahealthcare.com/providers/ne/medicaid/Claims/priorauth.aspx' },
      { title: 'Healthcare Dive — Nebraska Medicaid managed care awards (1/1/2024)', url: 'https://www.healthcaredive.com/news/Nebraska-Medicaid-managed-care/632712/' },
      { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
      { title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' },
      { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' },
      { title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' },
      { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
    ],
    faq: [
      { q: 'Does Molina Healthcare of Nebraska cover ABA therapy?', a: 'Yes — as a Heritage Health MCO it administers the Nebraska Medicaid ABA benefit under the state Medicaid Service Definitions. Molina publishes no Nebraska-specific ABA clinical policy, so the state rules plus corporate BH criteria govern.' },
      { q: 'Does Molina Nebraska require PA on ABA assessments?', a: 'No published Nebraska-specific answer exists — Molina\'s PA requirements live in quarterly code lists and its PA look-up tool. Verify the ABA codes in Availity or with the plan directly, and re-check each quarter.' },
      { q: 'How do I submit an ABA prior authorization to Molina Nebraska?', a: 'Availity Essentials is the preferred channel; fax (833) 832-1015 and phone (844) 782-2678 are the fallbacks. Include the state-required package — treatment plan, ABA assessment, and IDI.' },
    ],
  },

  'unitedhealthcare-community-plan-nebraska': {
    slug: 'unitedhealthcare-community-plan-nebraska',
    family: 'unitedhealthcare',
    cardDesc: 'ABA carved to Optum since 2017; all autism services need PA, two-step assessment→treatment auth.',
    assessmentPA: {
      value: 'Required — "All Autism Services require Prior Authorization"; written assessment request (treatment form marked as assessment) with the diagnostic evaluation / IDI / FBA attached',
      status: 'verified',
      cites: [{ title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }, { title: 'NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' }],
    },
    treatmentPA: {
      value: 'Required — for all services and additional units; medical necessity applies at initial and concurrent review',
      status: 'verified',
      cites: [{ title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
    },
    dxRequired: {
      value: 'State MSD rules govern — ASD or a developmental/intellectual disability qualifies; attach the diagnosing provider\'s evaluation to the request',
      status: 'verified',
      cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
    },
    payer: 'UnitedHealthcare Community Plan of Nebraska',
    state: 'NE', kind: 'medicaid-mco', parent: 'Nebraska Medicaid (Heritage Health)',
    deliveryRules: {
      supervision: {
        value:
          'Follows the Nebraska Medicaid rule: direct supervision by observation of the technician at no less than 10% of weekly direct service hours (97153/97154/97155), at least one hour a month of in-person observation of each technician or LaBA, at least one hour a month of in-person direct service by the treating LBA or psychologist, and no more than 24 technicians per LBA. Optum layers staff-level network rules on top rather than a competing ratio: supervising BCBAs must hold BACB supervisory certification, technicians need RBT (or equivalent national) certification with "appropriate training and supervision by BCBAs or licensed clinician," a BCBA or licensed clinician must provide program oversight and "performs skills assessments and provides direct supervision of behavior technician in joint sessions," and groups carry $1M/$3M professional liability cover.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not stated in billing terms, though the definitions read as if it happens. The telehealth rule allows 97155 by audiovisual telehealth only where "The individual is receiving 97153 services concurrently," and the supervision percentage is measured against "direct service hours (97153/97154/97155)" as a single weekly pool — both of which presume the analyst and the technician on the clock at the same time. But neither MSD says in terms that both codes may be billed for the same clock time. What Nebraska does prohibit by name is a different concurrency: "Services delivered concurrently (at the same time) as another treatment modality (i.e. ST, OT, PT)," and "Services delivered by 2 LBAs unless non-duplicative and clinically appropriate." Optum publishes no Nebraska-specific concurrency edit.',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
        verifyVia:
          'The Optum Care Advocate / the NE Heritage Health Medicaid Autism-ABA Program page on Provider Express.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Follows the Nebraska Medicaid rule: direct ABA "may not exceed 6 hours in a single day or a total of 20 hours per week," with more available on prior authorization and clinical justification; group work runs one technician to 2-5 children on 97154 and one licensed clinician to 2-5 on 97158. Optum publishes no Nebraska per-day unit table — and its commercial ABA reimbursement policy\'s per-day maximums are a different product and should not be assumed onto this plan. What binds in practice here is the authorization: medical necessity applies at initial and concurrent review, and additional units need their own PA.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
        verifyVia:
          'The Optum Care Advocate / the NE Heritage Health Medicaid Autism-ABA Program page on Provider Express.',
      },
      noteSignature: {
        value:
          'Nebraska says what a progress note must contain, sets the deadline by reference, and never names a session-note signer. Progress notes "must be completed within the time frame specified in the program\'s policies and procedures" and must substantiate each service through narrative description, "Include an accurate start and end time for the service," tie the service to plan goals and priorities, document participation and revision of goals, and record the individual\'s response "in the individual\'s own words if possible, if age and developmentally appropriate." Signatures attach to the other documents: the treatment plan must "Be approved and signed by the licensed clinician or supervisor if provisionally licensed" and carry the individual\'s or guardian\'s signature (a parent or guardian where the individual is under 19); the ABA assessment report "must be signed by the licensed clinicians who participated in the development of the report, including the supervising practitioner, when applicable"; and the discharge summary must "contain the signature of the supervising clinician and date of signature." Supervision itself must be documented in progress notes. Optum\'s Nebraska program material adds documentation expectations for the request packet — baseline and mastery criteria, transition and discharge plans, parent goals, supervision hours, coordination of care — but names no session-note signer or signing deadline.',
        status: 'verified',
        cites: [{ title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
      },
      placeOfService: {
        value:
          'Community, home, office or clinic — and school is not yours to bill. The treatment MSD lists the allowable settings as "Community, Home, Office or Clinic," then carves the school out entirely: "ABA services are covered as part of the Medicaid school-based services program, and are the responsibility of the school as outlined in Nebraska Administrative Code Title 471, Chapter 25 and the Medicaid State Plan. Independent providers may not bill Medicaid directly for services provided at a school." The assessment MSD keeps School on its settings list under the same carve-out. Where ABA does run in an educational setting, "A school plan is required for all educational settings, to include both public and private schools" (not daycare or after-school), it must be included in the student\'s IEP, it must focus on reducing behaviors that impede academic engagement rather than on general skill acquisition, and it must be time-limited with a transition plan shifting instructional control to school staff. Excluded outright: "Services delivered in the school setting as a shadow, or an aide, or to provide general support to the child or youth," and training for school personnel. Group homes are not addressed. Optum publishes no Nebraska-specific deviation; its Nebraska treatment requests do probe school hours, which is a scheduling question rather than a billable-setting one given the 471 NAC 25 carve-out.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
      },
      billAsProvider: {
        value:
          'Nebraska controls this through code-level provider eligibility rather than a modifier set. Licensed clinicians who may bill 97151 — and who render 97155, 97156 and 97158 — are a psychiatrist, physician, psychologist or provisionally licensed psychologist, each with training in ABA, or a Licensed Behavior Analyst. Technicians who may bill 97152, 97153 and 97154 under a licensed clinician\'s supervision are a Licensed assistant Behavior Analyst or a Registered Behavior Technician. Since January 1, 2025 every BCBA must be licensed as an LBA and every BCaBA as a LaBA, so the state license rather than the BACB certificate is what makes the claim payable, and RBT is enrolled as its own Medicaid provider type (85) on the fee schedule. Which NPI carries the claim line is not stated. Optum credentials the group and its staff through its own network process, and claims run on payer ID 87726 with 180-day timely filing, but which NPI carries technician-delivered 97153 is not stated.',
        status: 'unverified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
        verifyVia:
          'The Optum Care Advocate / the NE Heritage Health Medicaid Autism-ABA Program page on Provider Express.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Two documents, two numbers, and they are worth quoting separately rather than averaging. The state service definitions set admission at "Age: 0-20" (with DD-waiver recipients able to receive 97151/97152 regardless of age). Optum\'s own Nebraska Heritage Health program training states member eligibility as "Be younger than age 20" and "Be covered under Nebraska Heritage Health." The one-year gap is unresolved in the published material — for a 20-year-old member, confirm with the Care Advocate before scheduling rather than assuming either document wins.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' }],
        verifyVia:
          'The Optum Care Advocate / the NE Heritage Health Medicaid Autism-ABA Program page on Provider Express.',
      },
      dxRecency: {
        value:
          'Follows the Nebraska Medicaid rule: an Initial Diagnostic Interview within the previous 12 months must establish the need for the ABA assessment, with an addendum where the presentation has changed. Optum turns that into an attachment requirement: the written assessment request goes in with "the diagnostic evaluation, IDI, or FBA" attached, and treatment requests must carry the evaluation from the diagnosing provider.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
      },
      diagnosingProviders: {
        value:
          'Follows the Nebraska Medicaid rule: the IDI is performed by "A licensed practitioner who is able to diagnose and treat major mental illness within his/her scope of practice" — Physician, Physician Assistant, APRN/NP, Psychologist or LIMHP — with ASD or a developmental or intellectual disability as the qualifying diagnosis. Optum does not publish a Nebraska diagnostician list of its own; what it requires is the evaluation from the diagnosing provider in the request packet.',
        status: 'verified',
        cites: [{ title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' }, { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }],
      },
      diagnosticTools: {
        value:
          'Follows the Nebraska Medicaid rule: no ASD diagnostic instrument is mandated, and the instruments Nebraska names (Vineland, VB-MAPP, ABLLS) sit in the treatment plan and continued-stay review rather than behind the diagnosis. Optum\'s Nebraska program asks for the FBA or diagnostic evaluation in the packet and for a treatment plan with baseline and mastery criteria, but names no instrument.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' }],
      },
      referral: {
        value:
          'No referral or order is required by the state — the gate is the IDI plus the ABA assessment. Optum replaces it with an authorization gate that is stricter than the state\'s: "All Autism Services require Prior Authorization," including the initial assessment and its write-up time, requested in writing on the treatment request form marked as an assessment request with the diagnostic evaluation, IDI or FBA attached. Treatment is a second, separate authorization — families cannot start treatment on the assessment authorization alone.',
        status: 'verified',
        cites: [{ title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' }, { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }],
      },
      telehealth: {
        value:
          'Follows the Nebraska Medicaid rule: audiovisual telehealth is available for 97155 (only while 97153 runs concurrently), 97156 and the 97151 assessment under the conditions the service definitions spell out; 97152, 97153, 97154 and 97158 cannot be delivered remotely. Optum\'s Nebraska Heritage Health program material publishes no telehealth section of its own, and Optum\'s virtual-visits attestation requirement is documented on other lines of business rather than this one — do not assume it applies here without asking.',
        status: 'verified',
        cites: [{ title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' }, { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' }],
        verifyVia:
          'The Optum Care Advocate / the NE Heritage Health Medicaid Autism-ABA Program page on Provider Express.',
      },
      authTurnaround: {
        value:
          'UnitedHealthcare Community Plan\'s 2026 Nebraska manual sets the clocks, and Optum (United Behavioral Health) decides ABA requests. Non-urgent pre-service: "Within 5 working days of receipt of medical record information required but no longer than 7 calendar days of receipt of request." Urgent: "Within 72 hours of request receipt." Either can be extended up to 14 days at your or the family\'s request, or when more information is justified. Concurrent review: "Within 24 hours from receipt of the request," extended to 72 hours if the plan documents an attempt to get clinical information. Approvals are communicated within 24 hours of the decision; written denials go out within 2 business days. For lead time, the manual says to seek prior authorization for "Nonemergency admissions or outpatient services (except maternity) – at least 14 business days beforehand." Use that as the reauthorization window.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of Nebraska — 2026 Care Provider Manual, Chapter 4: Medical management', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NE-Care-Provider-Manual.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          '"UnitedHealthcare Community Plan is, by law, the payer of last resort for eligible members." You "must bill and obtain an explanation of benefits (EOB) from any other insurance or health care coverage resource before billing UnitedHealthcare Community Plan." Then "attach a copy of the EOB to the submitted claim"; it "must be complete to understand the paid amount or denial reason." For deadlines, the manual says: "Refer to your Agreement for third party claim submission deadlines." Benefits are coordinated "based on the member\'s benefit contract and applicable regulations." Neither the manual nor Optum\'s Nebraska ABA guides say whether Optum\'s ABA prior auth is required when a commercial plan is primary.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of Nebraska — 2026 Care Provider Manual, Chapter 11 (Third-party resources; Subrogation and COB)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NE-Care-Provider-Manual.pdf' },
        ],
        verifyVia:
          'Optum / UnitedHealthcare Community Plan 1-866-331-2243: ask whether ABA prior authorization is required when a commercial plan is primary, and what third-party claim deadline your Agreement sets.',
      },
    },
    pill: 'Payer Guide · UHC Community Plan (NE)',
    h1: 'UnitedHealthcare Community Plan of Nebraska ABA coverage (Heritage Health MCO).',
    metaTitle: 'UHC Community Plan Nebraska (Heritage Health) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan of Nebraska administers Medicaid ABA — the Optum-managed autism network since 2017, the two-step assessment/treatment authorization, portal and fax channels, and why concurrent review here has teeth.',
    intro: [
      'UnitedHealthcare Community Plan of Nebraska (UnitedHealthcare of the Midlands) administers the Heritage Health ABA benefit with the autism network carved to Optum Behavioral Health — an arrangement in place since January 1, 2017, with its own NE-specific program guide, training deck, forms, and fax lines. The state MSD coverage rules and state-directed rates apply, but Optum layers its own clinical criteria, a two-step assessment-then-treatment authorization workflow, and active utilization review on top — materially more process than the state baseline, and worth designing intake around.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Heritage Health MCO — ABA network managed by Optum since 1/1/2017' },
      { label: 'Prior auth', value: '"All Autism Services require Prior Authorization" — assessment included' },
      { label: 'Auth structure', value: 'Two-step: assessment auth first, then treatment auth — no treatment on the assessment auth alone' },
      { label: 'Submission', value: 'Optum ABA treatment-request portal; fax 1-888-541-6691' },
      { label: 'Benefits check', value: 'BH number on the member ID card or NMES line 1-800-642-6092' },
      { label: 'Claims', value: 'Payer ID 87726; 180-day timely filing' },
    ],
    sections: [
      {
        h2: 'The two-step Optum funnel',
        body: [
          'Optum\'s Nebraska program requires prior authorization for everything: the initial ABA assessment (including write-up time) needs a written request — the treatment request form marked as an assessment request — with the diagnostic evaluation, IDI, or FBA attached. Treatment is a second, separate authorization: families cannot start treatment on the assessment auth alone. Treatment requests must include the evaluation from the diagnosing provider plus a treatment plan with baseline and mastery criteria, a transition plan, discharge criteria, parent goals, supervision hours, and coordination of care — and medical necessity applies at both initial and concurrent review, with additional units requiring their own PA. Submissions go through Optum\'s online ABA treatment-request portal or fax 1-888-541-6691 (an older quick-reference guide lists 1-855-268-9392); claims run on payer ID 87726 with 180-day timely filing.',
        ],
        cites: [
          { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' },
          { title: 'NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' },
        ],
      },
      {
        h2: 'What intake should know about this plan',
        body: [
          'Optum runs the ABA network separately from the medical plan — verify benefits via the behavioral-health number on the member ID card or the NMES line at 1-800-642-6092, not the medical line. Per Optum\'s program documents, eligibility is described as members younger than 20 covered under Heritage Health. Treatment requests probe school hours and parent participation, and expect concurrent review to have teeth: ProPublica\'s 2024–2025 reporting on Optum strategy documents around ABA cost containment in Medicaid plans named Nebraska among focus states. Rates are not an Optum variable — DHHS\'s HPA 25-08 requires MCO ABA rates to reflect the revised state fee schedule effective August 1, 2025 — so the plan-specific work is process: clean two-step requests, complete treatment-plan elements, and progress data ready at every concurrent review.',
        ],
        cites: [
          { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' },
          { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
          { title: 'ProPublica — UnitedHealth limiting ABA access in Medicaid', url: 'https://www.propublica.org/article/unitedhealthcare-insurance-autism-denials-applied-behavior-analysis-medicaid' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnostic evaluation / IDI / FBA', desc: 'Must attach to the written assessment request — the two-step funnel starts with this packet.' },
      { title: 'BH number from the member card', desc: 'The ABA network is Optum, separate from medical — verify via the BH line or NMES 1-800-642-6092.' },
      { title: 'Parent goals + participation plan', desc: 'Treatment requests require parent goals and probe participation — capture commitment at intake.' },
      { title: 'School-hours picture', desc: 'Optum\'s treatment request asks about school hours — document the schedule before submission.' },
      { title: 'Progress data cadence', desc: 'Concurrent review is active here — baseline/mastery data ready at every review, not just reauthorization.' },
    ],
    sources: [
      { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' },
      { title: 'NE Heritage Health Medicaid Autism/ABA Program provider training (NE_4556)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/NE_4556_ABA-HeritageTrain.pdf' },
      { title: 'ABA Medicaid Service Definition (treatment MSD)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis.pdf' },
      { title: 'Health Plan Advisory 25-08 — ABA Rates (to Heritage Health MCOs)', url: 'https://dhhs.ne.gov/Guidance%20Docs/Health%20Plan%20Advisory%2025-08%20-%20Applied%20Behavior%20Analysis%20Rates.pdf' },
      { title: 'Initial Diagnostic Interview Medicaid Service Definition', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Initial%20Diagnostic%20Interview.pdf' },
      { title: 'ABA Behavior Identification Assessment MSD', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Applied%20Behavior%20Analysis%20Behavior%20Identification%20Assessment.pdf' },
      { title: 'Medicaid Requirements for Substance Use Disorder and Applied Behavior Analysis Services (umbrella staffing document)', url: 'https://dhhs.ne.gov/Behavioral%20Health%20Service%20Definitions/Medicaid%20Requirements%20for%20Substance%20Use%20Disorder%20and%20Applied%20Behavior%20Analysis%20Services.pdf' },
      { title: 'ProPublica — UnitedHealth limiting ABA access in Medicaid', url: 'https://www.propublica.org/article/unitedhealthcare-insurance-autism-denials-applied-behavior-analysis-medicaid' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Nebraska cover ABA?', a: 'Yes — it administers the Heritage Health ABA benefit under the state Medicaid Service Definitions, with the autism network managed by Optum Behavioral Health since 2017. All autism services, the assessment included, require prior authorization.' },
      { q: 'Does the ABA assessment need PA at UHC Community Plan of Nebraska?', a: 'Yes — the initial assessment needs a written request (the treatment request form marked as an assessment request) with the diagnostic evaluation, IDI, or FBA attached. Treatment is a second, separate authorization.' },
      { q: 'How do I submit an ABA authorization to UHC/Optum in Nebraska?', a: 'Through Optum\'s online ABA treatment-request portal or fax 1-888-541-6691, with the full treatment-plan package (baseline/mastery criteria, transition and discharge plans, parent goals, supervision hours, coordination of care). Claims use payer ID 87726 with 180-day timely filing.' },
    ],
  },

  'aetna-nebraska': {
    slug: 'aetna-nebraska',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Neb. Rev. Stat. § 44-7,106 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [{ title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' }, { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [{ title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
    },
    payer: 'Aetna in Nebraska',
    state: 'NE', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'Aetna sets a duty, not a number. Where a state mandate, plan document or contract allows services from someone neither state-licensed nor BACB-certified, "there must be supervision and direction of the unlicensed or non-certified providers in line with practice standards." The ABA Medical Necessity Guide publishes no supervision percentage, ratio or caseload cap — the operative standard is professional practice plus whatever the contract adds.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither the ABA Medical Necessity Guide nor Aetna\'s clinical policy bulletin on ABA addresses whether 97153 and 97155 may be billed for the same clock time; Aetna carries the concurrency question in its claim editing rather than in a public policy.',
        status: 'unverified',
        verifyVia:
          'Aetna precertification/provider services at the number on the member\'s ID card, and the plan\'s own reimbursement schedule — ask specifically whether 97155 pays alongside 97153 when analyst, technician and member are all face-to-face.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. Aetna\'s ABA documents set medical-necessity criteria and precertification requirements for 97151-97158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies.',
        status: 'unverified',
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published in Aetna\'s ABA materials — no rule on who signs a session note or within what window.',
        status: 'unverified',
        verifyVia:
          'The Aetna provider manual and your participation agreement\'s documentation clause.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Aetna does not publish a POS code list for ABA. The one place-of-service boundary it does state is the schools carve-out: pursuant to applicable law Aetna "is not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act." That is a limit on paying for what the IEP owes, not a blanket ban on the school setting — and it yields to a stronger state mandate. Where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans. In Nebraska the layer underneath is § 44-7,106 for state-regulated plans, and the plan document for a self-funded one — note that the state\'s own Medicaid rule sends school-based ABA to the Medicaid school-based services program (471 NAC 25) rather than to independent providers, which is a Medicaid rule and not a commercial one.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'The member\'s benefit document, and Aetna provider services for whether school-setting ABA is payable on that plan.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician. "Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise." The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians. Nebraska is a licensure state — LBA for BCBAs, LaBA for BCaBAs — so the licensed analyst is who the clause points at here.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Aetna sets no upper age limit in its national medical-necessity criteria. The ABA Medical Necessity Guide gives age only as clinical shape, not as a gate: comprehensive ABA carries a "typical age range" of 0-7 years at 10-25 hours a week for 1-2 years, while focused ABA is listed for "All ages" at 1-20 hours a week. The binding age question is the legal layer underneath: Nebraska\'s mandate (Neb. Rev. Stat. § 44-7,106) reaches individuals under 21 on state-regulated plans and caps behavioral health treatment including ABA at 25 hours per week to age 21; non-grandfathered individual and small-group ACA plans are exempt, and a self-funded ERISA plan answers to its own plan document. Establish funding type before quoting an age answer.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'The member\'s benefit document and Aetna precertification — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Twelve months, and it attaches to the functional measure rather than to the diagnosis. Aetna\'s medical-necessity criteria require that "There is demonstration of functional impairment on a standardized scale of functioning in the past 12 months," with the impairment at least one standard deviation below the population mean or representing a significant risk of harm to self or others. The ASD diagnosis itself carries no stated shelf life — so a family with an older diagnostic report is not blocked, but a stale adaptive score is.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          'A scope-of-practice test rather than a specialty list. Aetna requires "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9) obtained by an appropriate provider," and defines that as a "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice." Note the code range: F84.2 (Rett syndrome) sits outside the listed set, and ABA for diagnoses other than ASD is treated as experimental.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosticTools: {
        value:
          'Aetna names adaptive-functioning instruments, not autism diagnostic instruments. The medical-necessity criteria require demonstrated functional impairment "on a standardized scale of functioning in the past 12 months. For instance, the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS," and quality-of-care elements add "Repeated measurement with standardized measures to assess progress." No ADOS-2 or ADI-R requirement appears anywhere — the instrument Aetna asks for is the one that sizes the hours, and the level-of-impairment calculation is what justifies the number requested.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      referral: {
        value:
          'Not published. Aetna\'s ABA Medical Necessity Guide and its ABA clinical policy bulletin set a diagnosis requirement, a precertification requirement and a provider-licensure requirement, but state no referral or physician order as a condition of coverage. The gate that does exist is precertification itself — required for both the assessment and treatment.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'Aetna precertification/provider services at the number on the member\'s ID card, and the member\'s benefit document — ask whether the plan layers a referral requirement on behavioral health.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Not published. Aetna\'s ABA materials set medical-necessity criteria and precertification requirements for 97151-97158, 0362T and 0373T but say nothing about remote delivery, telehealth modifiers or place-of-service codes. One Nebraska-specific point does exist, and it sits in the statute rather than the carrier policy: § 44-7,106 requires that ABA be "provided or supervised by a nationally certified behavior analyst or licensed psychologist" and says so expressly of care delivered "in person or by telehealth," so remote delivery is contemplated by the mandate for state-regulated plans even where the carrier publishes no code list.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'Aetna provider services and the member\'s benefit document — confirm which ABA codes pay by telehealth and with which POS code before scheduling remote supervision or caregiver training.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Aetna publishes no commercial decision clock of its own: ABA "services require prior authorization. To get ABA services precertified, call the number on the member\'s Aetna ID card," and the manual sets no reauthorization lead time (none in the ABA Medical Necessity Guide or the ABA precert form either). The legal ceiling depends on funding. Nebraska fully insured plans are bound by LB 77 (operative January 1, 2026): a decision "within seventy-two hours after obtaining all necessary information" for urgent care and "within seven days after obtaining all necessary information" for nonurgent care (urgent tightens to 48 hours from January 1, 2028); "Health care services are deemed authorized if a utilization review agent fails to comply with the deadlines," the approval notice must state the authorization\'s duration or expiry date, and "prior authorization shall be valid for at least one year from the date the utilization review agent approves the prior authorization request." Self-funded ERISA plans are outside state law and follow 29 CFR 2560.503-1: a pre-service decision "not later than 15 days after receipt of the claim" (one 15-day extension), 72 hours for urgent care, and an urgent request to extend an approved course of treatment decided within 24 hours if made "at least 24 hours prior to the expiration."',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Nebraska LB 77 (2025) — Ensuring Transparency in Prior Authorization Act, slip law', url: 'https://nebraskalegislature.gov/FloorDocs/109/PDF/Slip/LB77.pdf' },
          { title: '29 CFR 2560.503-1(f)(2) — Group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Aetna precertification (number on the member ID card): ask whether the plan is fully insured or self-funded (which sets the legal clock) and how far before expiry Aetna wants the ABA reauthorization — Aetna publishes no lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Aetna: "We coordinate benefits as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member\'s plan" — the manual\'s order-of-benefits list includes the birthday rule for children whose parents are not separated or divorced. Nebraska\'s COB regulation (210 NAC 39) governs fully insured plans: for a child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan that has covered the parent longest); for divorced or separated parents a court decree naming the responsible parent controls. Self-funded plans follow their plan document instead, and Aetna notes many use "Maintenance of Benefits (MOB)" rather than the "100% Allowable" method most state laws require, so a secondary payment can be smaller. If the child also has Medicaid, this plan pays first: Medicaid is payer of last resort (42 CFR 433.139) — bill here, then send the EOB or denial to Medicaid, and get Medicaid\'s own prior auth too if the state requires it. TRICARE is secondary to this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Aetna Provider Manual (form 8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '210 NAC 39 — Nebraska Coordination of Benefits Regulation, §006.04(B)', url: 'https://doi.nebraska.gov/sites/default/files/doc/Chapter%2039.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    pill: 'Payer Guide · Aetna · Nebraska',
    h1: 'Aetna ABA coverage in Nebraska: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Nebraska: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Nebraska families — the national clinical policy, prior authorization, the Neb. Rev. Stat. § 44-7,106 mandate (under 21, the 25-hour weekly cap, exemptions), Nebraska behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Nebraska, an Aetna card means three layers at once: the carrier\'s national clinical policy, Nebraska\'s autism insurance mandate (Neb. Rev. Stat. § 44-7,106), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Neb. Rev. Stat. § 44-7,106 (LB 254, eff. 1/1/2015)' },
      { label: 'Mandate age', value: 'Under 21 (screening, diagnosis, and treatment of ASD)' },
      { label: 'Mandate caps', value: '25 hrs/week maximum benefit for behavioral health treatment incl. ABA' },
      { label: 'Exempt from mandate', value: 'Non-grandfathered individual/small-group ACA plans; self-funded ERISA (preempted)' },
      { label: 'Licensure', value: 'NE Licensed Behavior Analyst (DHHS Licensure Unit, 172 NAC 86)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Nebraska',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Nebraska is the legal floor underneath it: the state mandate below governs what state-regulated plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Nebraska.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Nebraska mandate: what it guarantees (and doesn\'t)',
        body: [
          'Nebraska\'s mandate (LB 254 of 2014, effective for policies delivered or renewed on or after January 1, 2015) requires coverage of screening, diagnosis, and treatment of ASD for individuals under 21 — with behavioral health treatment including ABA capped at a maximum benefit of 25 hours per week until age 21. No visit limits or less-favorable dollar limits or cost-sharing are otherwise permitted, non-BHT payments (OT/ST/PT, pharmacy, psychiatric care) cannot be applied against the cap, and the insurer may review treatment at most once every 6 months, at its own cost. ABA must be provided or supervised by a nationally certified behavior analyst or licensed psychologist, in person or by telehealth. The reach is narrower than it reads: the statute exempts non-grandfathered individual and small-group ACA plans required to include essential health benefits, so the mandate\'s practical territory is large-group and grandfathered plans — and while the statute\'s text reaches self-funded plans "to the extent not preempted," ERISA preemption still takes self-funded employer plans off the table. The 25-hour cap is also a quantitative limit whose enforceability against group plans is in tension with federal parity (MHPAEA) — treat that as an argument to raise, not a settled fact.',
        ],
        cites: [
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
        ],
      },
      {
        h2: 'No Nebraska-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no Nebraska-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That\'s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, the 25-hour cap\'s presence in the plan document) is where Nebraska-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Nebraska',
        body: [
          'Nebraska licenses behavior analysts under the Behavior Analyst Practice Act (Neb. Rev. Stat. § 38-4401 et seq., regulations at 172 NAC 86): the Licensed Behavior Analyst (LBA) credential for BCBAs and LaBA for BCaBAs, administered by the DHHS Licensure Unit with a Board of Behavior Analysts — and since January 1, 2025 the state\'s Medicaid program requires the license of every practicing BCBA, which has made LBA licensure the de facto floor for the market. On rates: Aetna does not publish commercial ABA fee schedules for Nebraska (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. When benchmarking, note that Nebraska\'s Medicaid fee schedule sits unusually low after the August 2025 cuts (97153 at $18.70 per 15 minutes), so commercial contracts here carry more of the margin than in most states.',
        ],
        cites: [
      { title: 'NE DHHS — Behavior Analyst licensure (Behavior Analyst Practice Act, 172 NAC 86)', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Large-group/grandfathered state-regulated (mandate applies) vs. small-group/individual ACA or self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — Aetna\'s commercial policy is ASD-only.' },
      { title: 'Requested weekly hours vs. the 25-hour cap', desc: 'Where the mandate governs, BHT including ABA caps at 25 hrs/week — plan intensity and any parity argument accordingly.' },
    ],
    sources: [
      { title: 'Aetna — Participating provider behavioral health precertification list (ABA: 97151–97158, 0362T, 0373T)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
      { title: 'NE DHHS — Behavior Analyst licensure page', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    faq: [
      { q: 'Does Aetna cover ABA therapy in Nebraska?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Nebraska\'s mandate (Neb. Rev. Stat. § 44-7,106) for state-regulated plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Nebraska autism mandate require?', a: 'Coverage of ASD screening, diagnosis, and treatment for individuals under 21, with behavioral health treatment including ABA capped at 25 hours per week — and insurer treatment reviews limited to once every 6 months. Non-grandfathered individual and small-group ACA plans are exempt, as are self-funded ERISA plans by preemption.' },
      { q: 'What does Aetna pay for ABA in Nebraska?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Nebraska\'s Medicaid schedule is an unusually low benchmark after the August 2025 cuts, so treat commercial rate-setting as a first-order contracting conversation.' },
    ],
  },

  'cigna-nebraska': {
    slug: 'cigna-nebraska',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the Neb. Rev. Stat. § 44-7,106 mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in Nebraska',
    state: 'NE', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'Evernorth DOES publish a supervision standard, in EN0499 — direct case supervision (the BCBA face-to-face with the individual alongside the RBT or BCaBA) plus indirect case supervision “is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment”, and “when direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided.” It is stated as a standard of care rather than a hard caseload cap, and supervisory services must match the CPT code descriptions.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions (Supervision / Direction of Treatment, p.5)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes — and Evernorth writes it as an explicit carve-out from its general rule: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." Both must be with the patient; analyst time away from the patient is not inside the exception.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published. The resource guide sets the code set (97151-97158, 0362T, 0373T only, all in 15-minute increments) but no per-day unit ceiling and no statement of which MUE table Evernorth applies.',
        status: 'unverified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 and your fee schedule.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published as a signature rule. EN0499 does make one documentation point that turns on signatures: the requirement to have the treatment plan / plan of care signed "does not apply to telehealth services, when applicable." Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Only the telehealth half is published: "all ABA CPT codes are covered telehealth services," subject to the Intensive Behavioral Interventions coverage policy (EN0499). The guide states no school, community or group-home rule. In Nebraska the layer underneath is § 44-7,106 for state-regulated plans, and the plan document for a self-funded one — note that the state\'s own Medicaid rule sends school-based ABA to the Medicaid school-based services program (471 NAC 25) rather than to independent providers, which is a Medicaid rule and not a commercial one.',
        status: 'unverified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 for school and community settings, plus the member\'s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Practically, the BCBA\'s credential is what the claim rides on for technician-delivered 97153. Nebraska adds a licensure floor on top: since 1/1/2025 the supervising analyst must hold the state LBA licence, not just BACB certification.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'EN0499 sets no age limit. The policy\'s medical-necessity criteria turn on diagnosis, assessment and treatment-plan content rather than on age, and its own definitions note only that assessment instruments must have established reliability and validity "for use with members of the population tested (e.g., age, language preference, etc.)." The binding age question is the legal layer underneath: Nebraska\'s mandate (Neb. Rev. Stat. § 44-7,106) reaches individuals under 21 on state-regulated plans and caps behavioral health treatment including ABA at 25 hours per week to age 21; non-grandfathered individual and small-group ACA plans are exempt, and a self-funded ERISA plan answers to its own plan document.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'The member\'s benefit document and Evernorth Provider Services at 800.926.2273 — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Evernorth dates the diagnosis without expiring it, and expires the assessment instead. The diagnosis package must carry "The name, credentials, and type of licensure of the individual who made the diagnosis" and "The date on which the diagnosis was most recently made" — but no maximum age for that date. Where recency does bite is the continued-treatment request: improvement must be demonstrated "with the use of a reliable, valid, and standardized assessment instrument completed no more than one year prior to the start date of the continued treatment request," against data collected within the previous six months of treatment.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'An independent-practice test, with two explicit disqualifiers. The diagnosis must be made "based on the criteria in the Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." What does not count: "educational identification or meeting educational eligibility for services related to autism through the [Individuals] with Disabilities Education Act may not meet criteria as a formal diagnosis of ASD," and a diagnosis termed "provisional," "proposed," "potential," "at risk of" or "rule out" is not confirmed. F84.2 (Rett syndrome) is excluded from the covered code range.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'No named instrument, but a strict standard for whichever one is used. The comprehensive ABA assessment must include "Administration of a reliable, valid, and standardized assessment instrument that measures the individual\'s functioning in the domains included in the diagnostic criteria for ASD in the DSM-5-TR" — social communication and social interaction, and restricted, repetitive patterns of behavior. The instrument must be completed in its entirety and as designed, be reliable and valid for the population tested, be administered and interpreted by someone trained to do so, be the most current version ("must be the Vineland-3 vs. Vineland-II"), assess current abilities, and record the date of administration, the respondent and the form type. Where someone other than the requesting provider administered it, the request must show documented collaboration with that professional and that the results correspond with the requesting provider\'s own direct observation.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'Not published as a requirement. EN0499 gates coverage on a confirmed DSM-5-TR diagnosis, a qualifying assessment and a compliant treatment plan, and Evernorth\'s front door is famously open on the assessment side — no prior authorization on 97151, 97152 or 0362T. Neither document states a referral or physician order as a condition.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 and the member\'s benefit document — referral rules, where they exist, are a plan-design feature rather than a policy feature.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'The most permissive telehealth position of the three national carriers, stated in one line: "All ABA CPT codes are covered telehealth services." EN0499 backs it structurally — "ABA treatment may be rendered via traditional in-person service delivery, telehealth, or a hybrid of in-person and telehealth service modalities," with the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. Two qualifications worth carrying into scheduling: telehealth delivery is one of the settings the policy expects treatment goals to address, and the requirement to have the treatment plan signed does not apply to telehealth services. No POS code list is published. One Nebraska-specific point does exist, and it sits in the statute rather than the carrier policy: § 44-7,106 requires that ABA be "provided or supervised by a nationally certified behavior analyst or licensed psychologist" and says so expressly of care delivered "in person or by telehealth," so remote delivery is contemplated by the mandate for state-regulated plans even where the carrier publishes no code list.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
      },
      authTurnaround: {
        value:
          'Cigna (Evernorth Behavioral Health) makes "coverage determinations in accordance with the time frames required under applicable law," and warns: "You must supply all information requested within the time frames specified … Failure to provide information within the time frames requested may result in nonpayment." ABA requests go to the Autism Utilization Management team. Lead time is published: "For ABA, we encourage providers to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days" — so file each reauthorization up to 30 days before the current one ends. Nebraska fully insured plans are bound by LB 77 (operative January 1, 2026): a decision "within seventy-two hours after obtaining all necessary information" for urgent care and "within seven days after obtaining all necessary information" for nonurgent care (urgent tightens to 48 hours from January 1, 2028); "Health care services are deemed authorized if a utilization review agent fails to comply with the deadlines," the approval notice must state the authorization\'s duration or expiry date, and "prior authorization shall be valid for at least one year from the date the utilization review agent approves the prior authorization request." Self-funded ERISA plans are outside state law and follow 29 CFR 2560.503-1: a pre-service decision "not later than 15 days after receipt of the claim" (one 15-day extension), 72 hours for urgent care, and an urgent request to extend an approved course of treatment decided within 24 hours if made "at least 24 hours prior to the expiration."',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, March 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Cigna Autism Resource Guide (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Nebraska LB 77 (2025) — Ensuring Transparency in Prior Authorization Act, slip law', url: 'https://nebraskalegislature.gov/FloorDocs/109/PDF/Slip/LB77.pdf' },
          { title: '29 CFR 2560.503-1(f)(2) — Group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Evernorth Behavioral Health / Cigna Autism Care Coordinator team, 877.279.7603: confirm whether the plan is fully insured or self-funded, which sets the legal decision clock.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Evernorth follows the NAIC order "subject to applicable law and the terms of the benefit plan": "The plan of the parent whose birthday falls earlier in the calendar year is primary … Only the month and day of birth are relevant" (same birthday: the longer-running plan); a court decree controls for divorced or separated parents, and with no decree the order is custodial parent, custodial parent\'s spouse, noncustodial parent, noncustodial parent\'s spouse. Nebraska\'s COB regulation (210 NAC 39) governs fully insured plans: for a child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan that has covered the parent longest); for divorced or separated parents a court decree naming the responsible parent controls. When Cigna is secondary, bill the primary first, then send the claim "along with a copy of the primary payer\'s EOP" (not needed if HIPAA-compliant COB data goes electronically to payer ID 62308). If the child also has Medicaid, this plan pays first: Medicaid is payer of last resort (42 CFR 433.139) — bill here, then send the EOB or denial to Medicaid, and get Medicaid\'s own prior auth too if the state requires it. TRICARE is secondary to this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, March 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: '210 NAC 39 — Nebraska Coordination of Benefits Regulation, §006.04(B)', url: 'https://doi.nebraska.gov/sites/default/files/doc/Chapter%2039.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    pill: 'Payer Guide · Cigna · Nebraska',
    h1: 'Cigna / Evernorth ABA coverage in Nebraska: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Nebraska: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Nebraska families — the national clinical policy, prior authorization, the Neb. Rev. Stat. § 44-7,106 mandate (under 21, the 25-hour weekly cap, exemptions), Nebraska behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Nebraska, a Cigna card means three layers at once: the carrier\'s national clinical policy, Nebraska\'s autism insurance mandate (Neb. Rev. Stat. § 44-7,106), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Neb. Rev. Stat. § 44-7,106 (LB 254, eff. 1/1/2015)' },
      { label: 'Mandate age', value: 'Under 21 (screening, diagnosis, and treatment of ASD)' },
      { label: 'Mandate caps', value: '25 hrs/week maximum benefit for behavioral health treatment incl. ABA' },
      { label: 'Exempt from mandate', value: 'Non-grandfathered individual/small-group ACA plans; self-funded ERISA (preempted)' },
      { label: 'Licensure', value: 'NE Licensed Behavior Analyst (DHHS Licensure Unit, 172 NAC 86)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Nebraska',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Nebraska is the legal floor underneath it: the state mandate below governs what state-regulated plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Nebraska.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Nebraska mandate: what it guarantees (and doesn\'t)',
        body: [
          'Nebraska\'s mandate (LB 254 of 2014, effective for policies delivered or renewed on or after January 1, 2015) requires coverage of screening, diagnosis, and treatment of ASD for individuals under 21 — with behavioral health treatment including ABA capped at a maximum benefit of 25 hours per week until age 21. No visit limits or less-favorable dollar limits or cost-sharing are otherwise permitted, non-BHT payments (OT/ST/PT, pharmacy, psychiatric care) cannot be applied against the cap, and the insurer may review treatment at most once every 6 months, at its own cost. ABA must be provided or supervised by a nationally certified behavior analyst or licensed psychologist, in person or by telehealth. The reach is narrower than it reads: the statute exempts non-grandfathered individual and small-group ACA plans required to include essential health benefits, so the mandate\'s practical territory is large-group and grandfathered plans — and while the statute\'s text reaches self-funded plans "to the extent not preempted," ERISA preemption still takes self-funded employer plans off the table. The 25-hour cap is also a quantitative limit whose enforceability against group plans is in tension with federal parity (MHPAEA) — treat that as an argument to raise, not a settled fact.',
        ],
        cites: [
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
        ],
      },
      {
        h2: 'No Nebraska-specific Cigna policy exists',
        body: [
          'We checked: the current EN0499 contains no Nebraska carve-out or mention — its state-mandate language cites New York only as an example — so Nebraska commercial members are handled under the standard national policy, subject to the § 44-7,106 mandate on state-regulated plans. That\'s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, the 25-hour cap\'s presence in the plan document) is where Nebraska-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Nebraska',
        body: [
          'Nebraska licenses behavior analysts under the Behavior Analyst Practice Act (Neb. Rev. Stat. § 38-4401 et seq., regulations at 172 NAC 86): the Licensed Behavior Analyst (LBA) credential for BCBAs and LaBA for BCaBAs, administered by the DHHS Licensure Unit with a Board of Behavior Analysts — and since January 1, 2025 the state\'s Medicaid program requires the license of every practicing BCBA, which has made LBA licensure the de facto floor for the market. On rates: Cigna does not publish commercial ABA fee schedules for Nebraska (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. When benchmarking, note that Nebraska\'s Medicaid fee schedule sits unusually low after the August 2025 cuts (97153 at $18.70 per 15 minutes), so commercial contracts here carry more of the margin than in most states.',
        ],
        cites: [
      { title: 'NE DHHS — Behavior Analyst licensure (Behavior Analyst Practice Act, 172 NAC 86)', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Large-group/grandfathered state-regulated (mandate applies) vs. small-group/individual ACA or self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — then book the assessment; EN0499 needs no assessment PA.' },
      { title: 'Requested weekly hours vs. the 25-hour cap', desc: 'Where the mandate governs, BHT including ABA caps at 25 hrs/week — plan intensity and any parity argument accordingly.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
      { title: 'NE DHHS — Behavior Analyst licensure page', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
    ],
    faq: [
      { q: 'Does Cigna cover ABA therapy in Nebraska?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Nebraska\'s mandate (Neb. Rev. Stat. § 44-7,106) for state-regulated plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Nebraska autism mandate require?', a: 'Coverage of ASD screening, diagnosis, and treatment for individuals under 21, with behavioral health treatment including ABA capped at 25 hours per week — and insurer treatment reviews limited to once every 6 months. Non-grandfathered individual and small-group ACA plans are exempt, as are self-funded ERISA plans by preemption.' },
      { q: 'What does Cigna pay for ABA in Nebraska?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Nebraska\'s Medicaid schedule is an unusually low benchmark after the August 2025 cuts, so treat commercial rate-setting as a first-order contracting conversation.' },
    ],
  },

  'unitedhealthcare-nebraska': {
    slug: 'unitedhealthcare-nebraska',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the Neb. Rev. Stat. § 44-7,106 mandate layer.',
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
    payer: 'UnitedHealthcare / Optum in Nebraska',
    state: 'NE', kind: 'commercial',
    deliveryRules: {
      supervision: {
        value:
          'Optum\'s commercial reimbursement policy publishes no supervision percentage or caseload cap — it refers providers to the ABA Coding Coalition for supervision requirements. What it does police is the boundary: "CPT codes 97153 and 97155 may not be billed for technician training," including training a technician new to the organization on a client\'s programming or on reassessment-driven goal changes. And 97155 "should be reported only for services where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient" — treatment planning is an indirect service and not separately reimbursable.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes, with a single-provider exclusion. "Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." So the concurrency has to be two people — technician on 97153, analyst on 97155 directing them with the patient present. Separately, 97155 and 97156 may both pay on the same date of service only if the services are separate, distinct and clearly documented; "a single provider can\'t bill for both simultaneously (e.g., in the same 15-minute block)."',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum publishes its own per-day table on top of CMS MUEs — maximum frequency per day: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs). MUEs otherwise apply per CMS guidance, and billing above 32 units/day of 97153 "may be subject to non-reimbursement or recovery." Time is counted on the CMS 15-minute rule (1 unit at ≥ 8 minutes, 2 at ≥ 23, and so on).',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      noteSignature: {
        value:
          'No signature rule is published, but the documentation burden is explicit where money turns on it: services billed on the same date must be "separate, distinct, and clearly documented in the progress notes," and if documentation does not clearly separate them the claim may be denied. Who signs, and within what window, is not stated.',
        status: 'unverified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
        verifyVia:
          'The UnitedHealthcare/Optum provider manual and your participation agreement\'s documentation clause.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'The commercial ABA reimbursement policy sets no place-of-service rule, and Optum\'s published ABA State Mandates document carries no Nebraska entry at all — so there is no carrier document answering where Nebraska commercial ABA is payable. Daily progress notes must record the place of service regardless. In Nebraska the layer underneath is § 44-7,106 for state-regulated plans, and the plan document for a self-funded one — note that the state\'s own Medicaid rule sends school-based ABA to the Medicaid school-based services program (471 NAC 25) rather than to independent providers, which is a Medicaid rule and not a commercial one.',
        status: 'unverified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'UnitedHealthcare provider services and the member\'s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\'s level), HN = BCaBA (bachelor\'s level), HO = BCBA or master\'s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: "Billing multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial." Indirect work has no code of its own — it is bundled into the direct-service code.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Optum\'s Supplemental Clinical Criteria set no age limit for ABA — coverage turns on a valid ASD diagnosis, a credentialed provider and demonstrated medical necessity, with age entering only through norm-referenced instruments that compare functioning "to age-matched neurotypical peers." The binding age question is the legal layer underneath: Nebraska\'s mandate (Neb. Rev. Stat. § 44-7,106) reaches individuals under 21 on state-regulated plans and caps behavioral health treatment including ABA at 25 hours per week to age 21; non-grandfathered individual and small-group ACA plans are exempt, and a self-funded ERISA plan answers to its own plan document. Optum\'s ABA State Mandates supplement carries no Nebraska entry, so nothing carrier-side modifies the age question here.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum ABA State Mandates — BH 803ABA STM12026 (eff. Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'The member\'s benefit document and Optum via Provider Express — funding type decides whether the state mandate or the plan document sets the age boundary.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Not published. Optum\'s ABA criteria require a valid DSM-5-TR diagnosis confirmed with at least one clinically validated tool but set no maximum age for the diagnostic evaluation. The recency Optum does police is progress rather than diagnosis: continued coverage looks for demonstrable progress within a 6-month window and for updated standardized adaptive measures with change scores.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum via Provider Express, or the Care Advocate handling the authorization — ask whether the plan applies a diagnostic-evaluation recency window at intake.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A licensure test with a diagnostic-competence qualifier: "A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR." The diagnosing clinician must also confirm and document the severity level. Once the diagnosis is confirmed, the ABA provider identified for the member must be a master\'s- or doctoral-level BCBA, a licensed behavioral health clinician who has attested to sufficient expertise and been credentialed for ABA, or a BCaBA or non-licensed individual working under direct supervision.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'Optum publishes the most explicit instrument list of any national carrier, and splits it three ways. The DSM-5 diagnosis and severity level must be confirmed "using at least one clinically validated tool (not an all-inclusive list)": first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT-Checklist, ASQ, AQ, CAST), second-level screeners (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools used as part of a comprehensive diagnostic evaluation — the Autism Diagnostic Interview-Revised (ADI), the Autism Diagnostic Observation Schedule (ADOS/ADOS-2), and the Diagnostic Interview for Social and Communication Disorders (DISCO). Separately, treatment intensity must be chosen against baseline measurement using at least one of ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, VABS or CFQL-2, individualized to the client rather than applied uniformly.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'Not published as a coverage condition. Optum gates ABA on prior authorization — "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)" — delivered as a two-step assessment-then-treatment workflow on Provider Express, with a valid diagnosis rather than a referral as the clinical trigger. What the criteria do require is coordination: documentation of communication with day care, preschool, school, early intervention and allied health providers to avoid duplication.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum via Provider Express and the member\'s benefit document — referral requirements, where they exist, are a plan-design feature.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Optum endorses telehealth without publishing a code list. Its ABA criteria point providers to the "Practice Parameters for Telehealth-Implementation of Applied Behavior Analysis, Second Edition" as the best-practice reference, describe telehealth guidelines as a resource "for designing, implementing, and operating ABA services delivered via telehealth in a broad range of clinical settings (e.g., home, clinic, school)," and set the boundary plainly: "The telehealth options presented are not intended to supplant in-person service; rather, they are intended to supplement the traditional in-person service delivery model." Which codes pay remotely, and with which place-of-service code, is not stated in the clinical criteria — and daily progress notes must record the place of service regardless. One Nebraska-specific point does exist, and it sits in the statute rather than the carrier policy: § 44-7,106 requires that ABA be "provided or supervised by a nationally certified behavior analyst or licensed psychologist" and says so expressly of care delivered "in person or by telehealth," so remote delivery is contemplated by the mandate for state-regulated plans even where the carrier publishes no code list.',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' }],
        verifyVia:
          'The Optum Care Advocate at authorization and Provider Express — Optum runs a virtual-visits attestation on some lines of business, so confirm approval status and the billing POS before scheduling remote 97155 or 97156.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'UnitedHealthcare publishes its own commercial clock: "Standard requests: up to 15 calendar days"; "Expedited requests: 72 hours"; "We may extend this time if we need additional information." Submit "at least 15 calendar days in advance, if possible, but … at least 5 business days before the planned service date." ABA requests route to Optum (Provider Express, AutismABA), where "All services require prior approval"; Optum\'s ABA FAQ says to request a continuation "no more than 30 days prior to the current approvals on file expiring" (that FAQ dates from October 2021). Nebraska fully insured plans are bound by LB 77 (operative January 1, 2026): a decision "within seventy-two hours after obtaining all necessary information" for urgent care and "within seven days after obtaining all necessary information" for nonurgent care (urgent tightens to 48 hours from January 1, 2028); "Health care services are deemed authorized if a utilization review agent fails to comply with the deadlines," the approval notice must state the authorization\'s duration or expiry date, and "prior authorization shall be valid for at least one year from the date the utilization review agent approves the prior authorization request." Self-funded ERISA plans are outside state law and follow 29 CFR 2560.503-1: a pre-service decision "not later than 15 days after receipt of the claim" (one 15-day extension), 72 hours for urgent care, and an urgent request to extend an approved course of treatment decided within 24 hours if made "at least 24 hours prior to the expiration." Where state law is stricter than UHC\'s 15 days, the law wins for fully insured members.',
        status: 'plan-dependent',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial), Ch. 7 and Ch. 10', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Autism/ABA FAQ (BH3632, October 2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: 'Nebraska LB 77 (2025) — Ensuring Transparency in Prior Authorization Act, slip law', url: 'https://nebraskalegislature.gov/FloorDocs/109/PDF/Slip/LB77.pdf' },
          { title: '29 CFR 2560.503-1(f)(2) — Group health plan claim decision timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Optum Behavioral Health (number on the member ID card): confirm whether the plan is fully insured or self-funded, which sets whether state law or UHC\'s 15-day ceiling governs.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'UnitedHealthcare: "COB is administered according to the member\'s benefit plan and in accordance with law. We accept secondary claims electronically," and "If COB caused a delay, you have 90 days from the date of the primary carrier Explanation of Benefits to submit." For ABA through Optum: "bill the primary insurance carrier first, then notify Optum of your findings"; Optum processes "using industry-wide coordination of benefits (COB) standards and in accordance with benefit contracts and applicable state laws." Nebraska\'s COB regulation (210 NAC 39) governs fully insured plans: for a child whose parents are married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (same birthday: the plan that has covered the parent longest); for divorced or separated parents a court decree naming the responsible parent controls. Self-funded plans follow their plan document. If another payer needs a UHC denial to pay, Optum\'s FAQ says to "Call the number on the back of the member\'s insurance card to request a denial." If the child also has Medicaid, this plan pays first: Medicaid is payer of last resort (42 CFR 433.139) — bill here, then send the EOB or denial to Medicaid, and get Medicaid\'s own prior auth too if the state requires it. TRICARE is secondary to this plan ("TRICARE shall be last pay," 32 CFR 199.8), and "CHAMPVA is the last payer to OHI" (38 CFR 17.276(d)).',
        status: 'verified',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (Commercial), Ch. 7 and Ch. 10', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'Optum Autism/ABA FAQ (BH3632, October 2021)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
          { title: '210 NAC 39 — Nebraska Coordination of Benefits Regulation, §006.04(B)', url: 'https://doi.nebraska.gov/sites/default/files/doc/Chapter%2039.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276(d) — CHAMPVA last payer to other health insurance (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
        ],
      },
    },
    pill: 'Payer Guide · UnitedHealthcare · Nebraska',
    h1: 'UnitedHealthcare / Optum ABA coverage in Nebraska: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Nebraska: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Nebraska families — the national clinical policy, prior authorization, the Neb. Rev. Stat. § 44-7,106 mandate (under 21, the 25-hour weekly cap, exemptions), Nebraska behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Nebraska, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Nebraska\'s autism insurance mandate (Neb. Rev. Stat. § 44-7,106), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Neb. Rev. Stat. § 44-7,106 (LB 254, eff. 1/1/2015)' },
      { label: 'Mandate age', value: 'Under 21 (screening, diagnosis, and treatment of ASD)' },
      { label: 'Mandate caps', value: '25 hrs/week maximum benefit for behavioral health treatment incl. ABA' },
      { label: 'Exempt from mandate', value: 'Non-grandfathered individual/small-group ACA plans; self-funded ERISA (preempted)' },
      { label: 'Licensure', value: 'NE Licensed Behavior Analyst (DHHS Licensure Unit, 172 NAC 86)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Nebraska',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Nebraska is the legal floor underneath it: the state mandate below governs what state-regulated plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. Notably, Optum\'s ABA State Mandates supplemental criteria document (BH 803ABA, January 2026) contains no Nebraska entry — so Nebraska commercial members get the standard Optum criteria, with the state mandate operating at the benefits layer rather than through carrier-modified clinical criteria. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Nebraska.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026; no Nebraska entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'The Nebraska mandate: what it guarantees (and doesn\'t)',
        body: [
          'Nebraska\'s mandate (LB 254 of 2014, effective for policies delivered or renewed on or after January 1, 2015) requires coverage of screening, diagnosis, and treatment of ASD for individuals under 21 — with behavioral health treatment including ABA capped at a maximum benefit of 25 hours per week until age 21. No visit limits or less-favorable dollar limits or cost-sharing are otherwise permitted, non-BHT payments (OT/ST/PT, pharmacy, psychiatric care) cannot be applied against the cap, and the insurer may review treatment at most once every 6 months, at its own cost. ABA must be provided or supervised by a nationally certified behavior analyst or licensed psychologist, in person or by telehealth. The reach is narrower than it reads: the statute exempts non-grandfathered individual and small-group ACA plans required to include essential health benefits, so the mandate\'s practical territory is large-group and grandfathered plans — and while the statute\'s text reaches self-funded plans "to the extent not preempted," ERISA preemption still takes self-funded employer plans off the table. The 25-hour cap is also a quantitative limit whose enforceability against group plans is in tension with federal parity (MHPAEA) — treat that as an argument to raise, not a settled fact.',
        ],
        cites: [
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Nebraska',
        body: [
          'A family saying "we have UnitedHealthcare" in Nebraska may actually be on the carrier\'s Medicaid plan — UnitedHealthcare Community Plan of Nebraska (Heritage Health), whose ABA network Optum has managed since 2017 — which follows the state Medicaid rules and the Optum Medicaid workflow, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
        cites: [
      { title: 'Optum NE Heritage Health ABA Quick Reference Guide (BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Nebraska',
        body: [
          'Nebraska licenses behavior analysts under the Behavior Analyst Practice Act (Neb. Rev. Stat. § 38-4401 et seq., regulations at 172 NAC 86): the Licensed Behavior Analyst (LBA) credential for BCBAs and LaBA for BCaBAs, administered by the DHHS Licensure Unit with a Board of Behavior Analysts — and since January 1, 2025 the state\'s Medicaid program requires the license of every practicing BCBA, which has made LBA licensure the de facto floor for the market. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Nebraska (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. When benchmarking, note that Nebraska\'s Medicaid fee schedule sits unusually low after the August 2025 cuts (97153 at $18.70 per 15 minutes), so commercial contracts here carry more of the margin than in most states.',
        ],
        cites: [
      { title: 'NE DHHS — Behavior Analyst licensure (Behavior Analyst Practice Act, 172 NAC 86)', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Large-group/grandfathered state-regulated (mandate applies) vs. small-group/individual ACA or self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Nebraska (Heritage Health Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis confirmed with a validated tool (ADI-R, ADOS-2, etc.) — Optum\'s criteria require it.' },
      { title: 'Requested weekly hours vs. the 25-hour cap', desc: 'Where the mandate governs, BHT including ABA caps at 25 hrs/week — plan intensity and any parity argument accordingly.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Neb. Rev. Stat. § 44-7,106 (full text)', url: 'https://nebraskalegislature.gov/laws/statutes.php?statute=44-7,106' },
      { title: 'NE DHHS — Behavior Analyst licensure page', url: 'https://dhhs.ne.gov/licensure/Pages/Behavior-Analyst.aspx' },
      { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Provider Bulletin 25-14 — ABA Rates (July 1, 2025)', url: 'https://dhhs.ne.gov/Medicaid%20Provider%20Bulletins/Provider%20Bulletin%2025-14.pdf' },
      { title: 'NE Heritage Health Medicaid ABA Program Quick Reference Guide (Optum BH4233)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/neaba/neNEMedicaidQRG.pdf' },
    ],
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Nebraska?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Nebraska\'s mandate (Neb. Rev. Stat. § 44-7,106) for state-regulated plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Nebraska autism mandate require?', a: 'Coverage of ASD screening, diagnosis, and treatment for individuals under 21, with behavioral health treatment including ABA capped at 25 hours per week — and insurer treatment reviews limited to once every 6 months. Non-grandfathered individual and small-group ACA plans are exempt, as are self-funded ERISA plans by preemption.' },
      { q: 'Does Optum have Nebraska-specific ABA criteria?', a: 'Not on the commercial side — Optum\'s ABA State Mandates supplement (BH 803ABA) has no Nebraska entry, so standard Optum criteria apply. On the Medicaid side it\'s the opposite: Optum runs a dedicated NE Heritage Health ABA program with its own forms and workflow — see the UHC Community Plan of Nebraska guide.' },
      { q: 'What does UnitedHealthcare pay for ABA in Nebraska?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Nebraska\'s Medicaid schedule is an unusually low benchmark after the August 2025 cuts, so treat commercial rate-setting as a first-order contracting conversation.' },
    ],
  },
};

import type { PayerConfig } from './types.js';

export const arizonaPayers: Record<string, PayerConfig> = {
  'arizona-ahcccs': {
    slug: 'arizona-ahcccs',
    cardDesc: 'Dual path: six ACC plans or DDD Health Plans; no autism dx required; tiered rates.',
    assessmentPA: 'Delegated to plans — the two largest (Mercy Care, UHC/Optum) require NO PA for 97151/97152; verify per plan',
    treatmentPA: 'Plan-level — Mercy Care: 97153–97158 with 6-month auths; UHC/Optum: all codes except 97151/97152',
    dxRequired: 'No — AMPM 320-S covers ASD "and/or other diagnoses as justified by medical necessity"',
    payer: 'AHCCCS (Arizona Medicaid)',
    state: 'AZ', kind: 'state-medicaid',
    pill: 'Payer Guide · AHCCCS',
    h1: 'AHCCCS (Arizona Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'AHCCCS (Arizona Medicaid) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How AHCCCS covers ABA under AMPM 320-S — the ACC-plan vs. DDD dual path, no autism-diagnosis requirement, plan-delegated prior authorization, credential-tiered physician-fee-schedule rates, A.R.S. § 32-2091 licensure, and the 2026 reform to watch.',
    intro: [
      'AHCCCS — the Arizona Health Care Cost Containment System — covers Behavior Analysis Services under Medical Policy Manual chapter AMPM 320-S, and it is one of the friendliest coverage baselines in our directory: no autism diagnosis is strictly required, and the state policy itself imposes no prior-authorization rules. But Arizona is a two-front-door state, and routing the family correctly is the first intake job: most members get ABA through one of six AHCCCS Complete Care (ACC) managed care plans, while ALTCS-eligible members with developmental disabilities get it through DES/DDD, which runs two statewide DDD Health Plans — Mercy Care DD and UnitedHealthcare Community Plan DD. Ask "ACC plan or DDD?" before anything else, because the payer, portal, and authorization pathway all hang on the answer.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — AMPM 320-S, for ASD and/or other diagnoses as justified by medical necessity' },
      { label: 'Structure', value: 'Dual path: six ACC plans, or DDD Health Plans (Mercy Care DD / UHCCP DD) for ALTCS-DD members' },
      { label: 'Diagnosis', value: 'No autism dx required — BHP recommendation based on assessment' },
      { label: 'Prior auth', value: 'Delegated to plans — Mercy Care and UHC/Optum skip PA on 97151/97152' },
      { label: 'Rates (per 15 min)', value: '97153: $17.91 HM · $21.32 HN · $23.69 HO/HP; 97155: $25.05–$37.28 (home ~10% more)' },
      { label: 'Licensure', value: 'Arizona-licensed behavior analyst (A.R.S. § 32-2091, Board of Psychologist Examiners)' },
      { label: 'Watch', value: 'AMPM 320-S rewrite in flight (2026) + March 2026 in-network provider terminations' },
      { label: 'Staff screening', value: 'AHCCCS FCBC hits owners/execs only — front-line staff get DPS cards via ADHS licensure (apply within 7 working days) and DDD Level One cards' },
    ],
    sections: [
      {
        h2: 'Two front doors: ACC plans vs. DDD',
        body: [
          'AMPM 320-S applies across every AHCCCS delivery system — ACC, ALTCS, DES/DDD, DCS/CMDP, the RBHA contracts, and fee-for-service tribal programs — but the operational path splits in two. Most children get ABA through their ACC plan: Arizona Complete Health-Complete Care Plan, Banner-University Family Care, Blue Cross Blue Shield of Arizona Health Choice, Mercy Care, Molina Healthcare, or UnitedHealthcare Community Plan (Care1st no longer exists — it merged into Arizona Complete Health, with northern-county members transferred in 2024). Children who are ALTCS-eligible through the Division of Developmental Disabilities — autism is a DDD qualifying-condition category — instead get physical and behavioral health including ABA through one of two statewide DDD Health Plans, Mercy Care DD or UHCCP DD. Over age 3, ALTCS approval is the gate to DDD-funded services. The intake question that routes everything: which card does the family hold, an ACC plan card or a DDD Health Plan card?',
        ],
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Available Health Plans list', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      {
        h2: 'No autism diagnosis required — and PA lives at the plans',
        body: [
          'AMPM 320-S states that Behavior Analysis Services are a covered benefit "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity" — Arizona is one of the states that does not strictly require an autism diagnosis for ABA. Services must be prescribed or recommended by a qualified Behavioral Health Professional based on assessment (the policy lists example instruments like the PDDBI, Brigance, and Vineland), and progress reports are required at minimum every 6 months with specified components. The state policy sets no prior-authorization rules of its own — PA is delegated to the contractors, and the two largest verified examples both skip PA on assessment: Mercy Care ("You don\'t need PA for adaptive behavior assessments: CPT codes 97151 and 97152") and UHC/Optum ("All ABA services require prior authorization except 97151 and 97152"). Treatment codes do require PA at those plans, on their own forms and cadences — see the per-plan guides. For the three plans with no published ABA policy (Banner, Health Choice, Molina), verify the current PA rules in the portal before quoting a start date.',
        ],
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      {
        h2: 'Rates: credential-tiered, and on the physician fee schedule',
        body: [
          'AHCCCS converted the ABA codes from by-report to fixed rates effective November 1, 2023, tiered by rendering credential via modifiers: HM = below bachelor\'s (BT/RBT level), HN = bachelor\'s (BCaBA), HO = master\'s (BCBA), HP = doctoral (BCBA-D). Per 15-minute unit: 97151 assessment pays $30.06 / $35.78 / $44.73 at the HN/HO/HP tiers; 97153 direct treatment pays $17.91 / $21.32 / $23.69 (HM/HN/HO-HP); 97155 protocol modification pays $25.05 / $29.82 / $37.28. Home delivery (POS 12) pays roughly a 10% premium on every code — 97153 at home runs $19.96–$26.43. Two traps: the 2023 rate notice did not set a rate for 97156 (family training) — check the AHCCCS physician fee schedule code lookup directly — and the 9715x codes are not on the Behavioral Health Outpatient fee schedule at all; they live on the physician fee schedule. Practices that look up "behavioral health rates" find nothing and assume ABA is unpriced — it isn\'t.',
        ],
        cites: [
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'AHCCCS — FY26 Behavioral Health Outpatient MCO fee schedule (9715x absent)', url: 'https://www.azahcccs.gov/PlansProviders/Downloads/FFSrates/Behavioral/FY26BHOP_MCO_10012025.xlsx' },
          { title: 'acuity.news — Arizona Medicaid ABA rates & AHCCCS reform 2026', url: 'https://acuity.news/regulation/arizona-medicaid-aba-reimbursement-ahcccs-reform-2026/' },
        ],
      },
      {
        h2: 'Watch: the 2026 reform and the March network disruption',
        body: [
          'Arizona ABA is mid-upheaval, and intake teams should track two live threads. First, AHCCCS is running a spending-driven ABA reform: proposed AMPM 320-S revisions previewed at April 15–16, 2026 webinars would make state licensure plus fingerprint clearance conditions of AHCCCS provider registration and change the PA process. As of this review (8/1/2026), the proposal has moved to AHCCCS\'s public comment portal (searchable as "AMPM Policy 320-S – Behavior Analysis Services"), but no adopted rule text, revised 320-S PDF, or finalized effective date has been published on azahcccs.gov — the two most recent 2026 AMPM revision transmittals (3/26/2026, 6/19/2026) still don\'t carry the licensure/fingerprint language, so today\'s rules still govern. Second, in March 2026 Mercy Care, Arizona Complete Health, and UnitedHealthcare each terminated network contracts with Action Behavior Centers and/or Centria — roughly 1,000 children lost in-network ABA at once, and 11 families sued AHCCCS to halt the terminations. For providers still in network, displaced families are actively seeking new placements: staff intake for that volume, and verify network status on every inbound rather than assuming last year\'s directory.',
        ],
        cites: [
          { title: 'AHCCCS — informational webinars on proposed ABA policy updates (4/3/2026)', url: 'https://www.azahcccs.gov/shared/News/GeneralNews/ABA_PolicyUpdates.html' },
          { title: 'azfamily — Nearly 1K Arizona children with autism to lose ABA therapy coverage (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'AMPM 320-S never says "RBT." A Behavior Technician is "a paraprofessional credentialed by a nationally recognized Behavior Analyst certification board or as specified in A.A.C. R9-10-101(39)" — meaning either a nationally certified tech (the RBT pathway) or an unlicensed Behavioral Health Technician working at a licensed health care institution under Behavioral Health Professional oversight. There is no state RBT registry; the Arizona-licensed Behavior Analyst (A.R.S. § 32-2091, Board of Psychologist Examiners) is responsible for all clinical direction and supervision, for training technicians, and for their compliance with the policy — and because 320-S sets no numeric supervision percentage of its own, the BACB\'s floor is the binding number for RBT-credentialed staff: 5% of monthly service hours, including two face-to-face contacts. ADHS outpatient-treatment-center rules (R9-10-1011) add that personnel providing behavioral health services must be at least 18, and if you staff the RBT pathway, the BACB baseline travels with it: a criminal background check plus an abuse-registry check, both completed within 180 days before the certification application, and — from January 1, 2026 — the new 40-hour curriculum (delivered over 5–180 days by trained BCBAs/BCaBAs), an updated competency assessment, and a 2-year recertification cycle.',
          'Now the part Arizona owners most often get backwards: fingerprint clearance cards. AHCCCS enrollment screening itself barely touches your staff — per PEP-902, the fingerprint-based criminal background check (run exclusively through Arizona DPS; FBI checks and out-of-state cards are not accepted) applies to "high-risk" provider types like 77 Behavioral Health Outpatient Clinic and IC Integrated Clinic, and only to individual high-risk providers, 5%+ direct or indirect owners, and the Directors/Executive Directors/CEOs/Presidents on the Corporation Commission listing; employees below that line are expressly exempt. But front-line staff need DPS cards anyway — the trigger is just elsewhere. Under A.R.S. § 36-425.03, all personnel, volunteers included, of a children\'s behavioral health program (behavioral health services to patients under 18 at an ADHS-licensed facility) must hold a valid fingerprint clearance card or apply within 7 working days of starting, and must certify on notarized forms that they are not awaiting trial on or convicted of the offenses listed in A.R.S. § 41-1758.03. Licensed behavior analysts carry their own card requirement as a condition of licensure (A.R.S. § 32-2091.02, effective January 1, 2022) — and the proposed 2026 AMPM rewrite would push licensure-plus-fingerprint into AHCCCS registration itself.',
          'The DDD side of the dual path layers on the heaviest screening. Qualified Vendors must hold Level One fingerprint clearance cards (A.R.S. § 41-1758.07) for all employee types except immediate relatives, add staff to the roster within 30 days of hire, and the OLCR tracking system re-validates every card against DPS every 24 hours — an expired card surfaces the next day, not at revalidation. DDD also screens staff against the APS Registry automatically every 24 hours, requires DCS Central Registry (child abuse/neglect) checks under A.R.S. § 8-804 for anyone providing direct service to children — with a Direct Service Position Form (DDD-1727A) completed before service pending results — and mandates monthly LEIE and SAM exclusion searches for all employees, contractors, and subcontractor staff, with results retained 5 years. New direct-care workers get 90 days to complete CPR, First Aid, and Article 9 training and cannot work alone with members until they do. Two gaps to confirm directly: AMPM 320-S is silent on TB tests or health screening for ABA staff (any such duty flows from the R9-10 article your ADHS license class sits under), and the ACC plans publish no staff screening beyond the state baseline — Mercy Care defers clinical standards to AHCCCS policy — so confirm plan-specific credentialing paperwork at contracting.',
        ],
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'BACB — RBT 2026 requirements transition guidance', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
          { title: 'Ariz. Admin. Code R9-10-1011 — Outpatient Treatment Centers, Behavioral Health Services', url: 'https://www.law.cornell.edu/regulations/arizona/Ariz-Admin-Code-SS-R9-10-1011' },
          { title: 'AHCCCS PEP-902 — Fingerprint-Based Criminal Background Check requirement', url: 'https://www.azahcccs.gov/PlansProviders/Downloads/apep/FCBC_OnePager.pdf' },
          { title: 'A.R.S. § 36-425.03 — Children\'s behavioral health programs; fingerprinting', url: 'https://www.azleg.gov/ars/36/00425-03.htm' },
          { title: 'A.R.S. § 32-2091.02 — Behavior analysts; licensure qualifications', url: 'https://www.azleg.gov/ars/32/02091-02.htm' },
          { title: 'DES/DDD — Staff Roster and Background Check Guide', url: 'https://des.az.gov/sites/default/files/media/Roster_and_BG_Check_Guide_110822.pdf' },
          { title: 'DES/DDD — Central Registry, LEIE and SAM background check requirements (8/7/2015)', url: 'https://des.az.gov/sites/default/files/central_registry_leie_sam_requirements.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'ACC plan vs. DDD enrollment', desc: 'The routing question — an ACC card and a DDD Health Plan card mean different payers, portals, and auth pathways.' },
      { title: 'Diagnosis (any qualifying)', desc: 'ASD or another diagnosis justified by medical necessity — Arizona doesn\'t gate ABA on an autism dx.' },
      { title: 'BHP recommendation + assessment', desc: 'A qualified Behavioral Health Professional must prescribe/recommend ABA based on assessment.' },
      { title: 'Rendering credential tier', desc: 'HM/HN/HO/HP modifiers set the rate — who delivers each code is a revenue decision.' },
      { title: 'Prior ABA provider', desc: 'Post-March-2026, many inbounds are displaced Action Behavior Centers / Centria families — capture the history and any active auths.' },
    ],
    sources: [
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'AHCCCS — Available Health Plans list', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
      { title: 'AHCCCS — informational webinars on proposed ABA policy updates (4/3/2026)', url: 'https://www.azahcccs.gov/shared/News/GeneralNews/ABA_PolicyUpdates.html' },
      { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
      { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
      { title: 'AHCCCS PEP-902 — Fingerprint-Based Criminal Background Check requirement', url: 'https://www.azahcccs.gov/PlansProviders/Downloads/apep/FCBC_OnePager.pdf' },
      { title: 'A.R.S. § 36-425.03 — Children\'s behavioral health programs; fingerprinting', url: 'https://www.azleg.gov/ars/36/00425-03.htm' },
      { title: 'A.R.S. § 32-2091.02 — Behavior analysts; licensure qualifications', url: 'https://www.azleg.gov/ars/32/02091-02.htm' },
      { title: 'Ariz. Admin. Code R9-10-1011 — Outpatient Treatment Centers, Behavioral Health Services', url: 'https://www.law.cornell.edu/regulations/arizona/Ariz-Admin-Code-SS-R9-10-1011' },
      { title: 'DES/DDD — Staff Roster and Background Check Guide', url: 'https://des.az.gov/sites/default/files/media/Roster_and_BG_Check_Guide_110822.pdf' },
      { title: 'DES/DDD — Central Registry, LEIE and SAM background check requirements (8/7/2015)', url: 'https://des.az.gov/sites/default/files/central_registry_leie_sam_requirements.pdf' },
      { title: 'BACB — RBT 2026 requirements transition guidance', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
      { title: 'AHCCCS — FY26 Behavioral Health Outpatient MCO fee schedule (9715x absent)', url: 'https://www.azahcccs.gov/PlansProviders/Downloads/FFSrates/Behavioral/FY26BHOP_MCO_10012025.xlsx' },
      { title: 'acuity.news — Arizona Medicaid ABA rates & AHCCCS reform 2026', url: 'https://acuity.news/regulation/arizona-medicaid-aba-reimbursement-ahcccs-reform-2026/' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'AMPM 320-S sets no age bound of its own. Behavior Analysis Services are covered "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity," and the policy applies across ACC, ALTCS E/PD, DCS/CMDP, DES/DDD, the RBHA contracts and fee-for-service programs without an age criterion. In practice children reach the benefit through EPSDT, and nothing in the policy text excludes adults — screen on medical necessity, not birthday.',
        status: 'verified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
      },
      dxRecency: {
        value:
          'None at the state level. AMPM 320-S imposes no recency clock on the diagnostic evaluation — and no autism diagnosis at all is strictly required. What must be current is the assessment: services are "prescribed or recommended in specific dosages, frequency, intensity, and duration by a qualified BHP as the result of an assessment of the member." Plan-level overlays can be stricter, so check the per-plan guide before telling a family an old evaluation still counts.',
        status: 'verified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
      },
      diagnosingProviders: {
        value:
          'AMPM 320-S gates on who recommends ABA, not on who diagnoses: services must be "prescribed or recommended... by a qualified BHP." A Behavioral Health Professional is defined as an individual licensed under A.R.S. Title 32, Chapter 33 whose scope allows independent behavioral health practice (or practice under direct supervision, except a licensed substance abuse technician); a psychiatrist (A.R.S. § 36-501); a psychologist (A.R.S. § 32-2061); a physician; a Behavior Analyst (A.R.S. § 32-2091); a registered nurse practitioner licensed as an adult psychiatric and mental health nurse; or a registered nurse with psychiatric-mental health certification or one year of behavioral health experience.',
        status: 'verified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
      },
      diagnosticTools: {
        value:
          'No single instrument is mandated. "Behavior Analysis Services shall be based upon assessment(s) that include Standardized and/or Non-standardized instruments through both direct and indirect methods." Standardized examples named in the policy: the Pervasive Developmental Disabilities Behavior Inventory, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales. Non-standardized examples: curriculum-referenced assessments and stimulus preference assessment procedures.',
        status: 'verified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
      },
      referral: {
        value:
          'A prescription or recommendation from a qualified Behavioral Health Professional, based on an assessment of the member, is the referral — AMPM 320-S requires nothing else and sets no prior-authorization rules of its own, leaving PA to the Contractors. The two largest plans both skip PA on the assessment codes: Mercy Care states no PA is needed for 97151 and 97152, and Optum\'s Arizona orientation states "All ABA services require prior authorization except 97151 and 97152."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
        ],
      },
      telehealth: {
        value:
          'AMPM 320-S permits telehealth delivery but does not price it: the individualized treatment plan must "identify the modality by which the service will be delivered (whether in person or via telehealth, or in-group or individual setting, or combination thereof)." Which 9715x codes are actually payable remotely, and with which place-of-service code or modifier, lives in the AHCCCS telehealth code set and the Behavioral Health Services Billing Matrix, neither of which we could retrieve at this review — azahcccs.gov returns 403 to automated fetching.',
        status: 'unverified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
        verifyVia:
          'The AHCCCS Telehealth code set and the Behavioral Health Services Billing Matrix on azahcccs.gov (both blocked to automated retrieval at this review), or the member\'s Contractor.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'A duty with no number attached. "Behavior Analysis Services shall be directed and overseen by Behavior Analysts and supported, where applicable, by Behavior Analysis Trainees and/or Behavior Technicians." The Behavior Analyst "is responsible for all aspects of clinical direction, supervision, and provider-level case management," for training Trainees and Technicians, for ensuring that "the extent, kind, and quality" of what they deliver matches their training and experience, and for their compliance with the policy and A.R.S. § 32-2091. A Behavior Analysis Trainee needs "direct and ongoing supervision consistent with the standards set by a nationally recognized Behavior Analyst certification board." AMPM 320-S publishes no supervision percentage and no caseload cap, so for RBT-credentialed staff the BACB floor is the operative number.',
        status: 'verified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
      },
      concurrentBilling: {
        value:
          'AMPM 320-S does not address whether 97153 and 97155 may be billed for the same clock time. The policy routes every coding question elsewhere: "Refer to the Behavioral Health Services Billing Matrix and Medical Coding Resources on the AHCCCS website for more information regarding required coding information, including covered settings, modifiers for Behavior Analysis Trainee billing, or other billing/coding information."',
        status: 'unverified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
        verifyVia:
          'The AHCCCS Behavioral Health Services Billing Matrix and Medical Coding Resources (azahcccs.gov blocked automated retrieval at this review), and the Contractor\'s own reimbursement policy.',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling appears in AMPM 320-S; the policy sets clinical content, not claim edits, and defers unit and coding questions to the Behavioral Health Services Billing Matrix. Dosage is set case by case — services are prescribed "in specific dosages, frequency, intensity, and duration" by the recommending BHP — so the binding ceiling in practice is the Contractor\'s authorization.',
        status: 'unverified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
        verifyVia:
          'The AHCCCS Behavioral Health Services Billing Matrix, and the member\'s Contractor for authorized units.',
      },
      noteSignature: {
        value:
          'AMPM 320-S sets a reporting cadence, not a signature rule. Progress reports are required "at minimum, every six months" and must include member identification; background information (family dynamics, school placement, cultural considerations, prenatal and/or developmental history, medical history, sensory, dietary and adaptive needs, sleep patterns, medications); assessment findings; outcomes (measurable objectives, progress toward goals, clinical recommendations, treatment dosage, family role and outcomes); and care coordination (transition statement and individualized discharge criteria). Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [{ title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' }],
        verifyVia:
          'The Contractor\'s provider manual and the AHCCCS AMPM documentation chapters; ADHS licensure rules (A.A.C. R9-10) for the health care institution\'s own record standards.',
      },
      placeOfService: {
        value:
          'AMPM 320-S requires the treatment plan to "specify the setting(s) in which services will be delivered" but publishes no payable-setting list, pointing instead to the Behavioral Health Services Billing Matrix "regarding required coding information, including covered settings." What is documented at the rate level is that setting changes the money: the November 2023 fixed-rate notice pays home delivery (POS 12) roughly 10% above the clinic rate on every ABA code.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
        ],
        verifyVia:
          'The AHCCCS Behavioral Health Services Billing Matrix for covered settings, and the Contractor for school- and community-based delivery.',
      },
      billAsProvider: {
        value:
          'The claim line has to say who actually delivered the service. AHCCCS pays credential-tiered rates through modifiers — HM below bachelor\'s (technician level), HN bachelor\'s, HO master\'s, HP doctoral — and AMPM 320-S points to the Behavioral Health Services Billing Matrix for "modifiers for Behavior Analysis Trainee billing." Whose NPI goes in the rendering field is set per Contractor: UnitedHealthcare Community Plan, for instance, requires the rendering provider\'s 10-digit NPI in box 24J, "must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does AHCCCS cover ABA therapy?', a: 'Yes — under AMPM 320-S, for members with autism spectrum disorder and/or other diagnoses as justified by medical necessity. Coverage runs through the member\'s ACC plan, or through a DDD Health Plan (Mercy Care DD or UHCCP DD) for ALTCS-DD members.' },
      { q: 'Does Arizona Medicaid require an autism diagnosis for ABA?', a: 'No — AMPM 320-S explicitly covers "other diagnoses as justified by medical necessity," and Optum\'s Arizona orientation states verbatim that an ASD diagnosis is not required for AHCCCS members. A qualified Behavioral Health Professional must still recommend the service based on assessment.' },
      { q: 'What does AHCCCS pay for ABA?', a: 'Fixed, credential-tiered rates since 11/1/2023: 97153 pays $17.91 (HM) / $21.32 (HN) / $23.69 (HO/HP) per 15-minute unit, with home delivery about 10% higher. The codes live on the physician fee schedule, not the behavioral-health outpatient one, and 97156 wasn\'t in the 2023 rate notice — look it up directly.' },
      { q: 'Which plans run AHCCCS ABA?', a: 'Six ACC plans — Arizona Complete Health, Banner-University Family Care, Blue Cross Blue Shield of Arizona Health Choice, Mercy Care, Molina, and UnitedHealthcare Community Plan — plus the two statewide DDD Health Plans (Mercy Care DD and UHCCP DD) for ALTCS-DD members. Prior-auth mechanics are plan-specific.' },
    ],
  },

  'mercy-care-arizona': {
    slug: 'mercy-care-arizona',
    family: 'aetna',
    cardDesc: 'No PA on 97151/97152; 6-month auths on its own ABA form; serves ACC + DDD + DCS books.',
    assessmentPA: 'Not required for 97151 and 97152 — explicit on the plan\'s ABA page',
    treatmentPA: 'Required for 97153–97158 — dedicated ABA PA form with clinical documentation; 6-month authorization periods',
    dxRequired: 'No — clinical criteria defer to AMPM 320-S: ASD and/or other diagnoses as justified by medical necessity',
    payer: 'Mercy Care (AZ)',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · Mercy Care',
    h1: 'Mercy Care ABA coverage (AHCCCS plan).',
    metaTitle: 'Mercy Care (Arizona AHCCCS) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Mercy Care administers Arizona AHCCCS ABA — no PA on assessment codes, 6-month treatment authorizations on the plan\'s ABA PA form, Aetna Medicaid administration, the ACC + DDD + DCS triple footprint, and the TPL/COB quirks.',
    intro: [
      'Mercy Care — administered by Aetna Medicaid Administrators LLC — is the widest single payer relationship in Arizona Medicaid ABA: it holds an ACC contract, the ACC-RBHA Central GSA contract, one of the two statewide DDD Health Plans (Mercy Care DD), and the DCS Comprehensive Health Plan for children in foster care. Clinically it runs no separate medical-necessity policy — its ABA page links AMPM 320-S as the criteria — but operationally it is distinct: an explicit no-PA rule on assessment codes, 6-month authorization blocks on its own ABA PA form, and third-party-liability quirks worth knowing before the first claim.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'ACC + ACC-RBHA Central + DDD Health Plan + DCS CHP (Aetna Medicaid administration)' },
      { label: 'Clinical rules', value: 'AMPM 320-S — the plan links the state policy as its criteria' },
      { label: 'Assessment PA', value: 'None — 97151 and 97152 explicitly need no PA' },
      { label: 'Treatment PA', value: 'Required for 97153–97158; 0362T/0373T are required billing codes' },
      { label: 'Auth periods', value: '6 months — matching AMPM 320-S\'s 6-month progress-report cadence' },
      { label: 'Portal', value: 'Availity, with a dedicated ABA PA form (initial + reauth)' },
    ],
    sections: [
      {
        h2: 'How Mercy Care runs ABA authorization',
        body: [
          'Assessments start without authorization — the plan\'s ABA page says directly that you don\'t need PA for adaptive behavior assessment codes 97151 and 97152 — so eligibility verification can flow straight into a booked assessment. Treatment codes 97153–97158 require PA, and payment may be denied for services delivered without it. Requests go on Mercy Care\'s dedicated ABA PA form (initial and reauthorization versions) with the required clinical documentation, through the Availity portal, and authorizations run 6 months at a time — deliberately aligned with AMPM 320-S\'s minimum 6-month progress-report requirement, so build the reauth packet from the progress report you already owe the state. The child and family team (CFT) — or adult recovery team — determines medically necessary services, so expect care-team coordination rather than a pure paper review.',
        ],
        cites: [
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
        ],
      },
      {
        h2: 'Three funnels, one payer — and the COB quirks',
        body: [
          'A Mercy Care contract touches three distinct member populations: ACC members, DDD/ALTCS members via Mercy Care DD, and foster-care children via the DCS Comprehensive Health Plan — one credentialing relationship, three intake funnels. Two billing quirks matter at intake. First, coordination of benefits: the 9715x CPT codes require billing primary insurance first when the member has other coverage (unless the service is non-covered or benefits are exhausted — noted on the PA form), while H/S/T-prefixed codes bypass COB internally. Second, the child-friendly exception: per AHCCCS instruction, approved children\'s services (18 and younger) are reimbursed at a primary level with post-adjudication reclamation — claims aren\'t denied for a missing primary EOB. And note the March 2026 network purge: Mercy Care terminated its Action Behavior Centers and Centria contracts, so displaced families are actively looking for in-network providers.',
        ],
        cites: [
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
        ],
      },
    ],
    collect: [
      { title: 'Which Mercy Care book', desc: 'ACC, Mercy Care DD (DDD/ALTCS), or DCS CHP (foster care) — same payer, different funnel and care team.' },
      { title: 'Diagnosis (any qualifying)', desc: 'AMPM 320-S criteria — no autism dx strictly required; then book the assessment, no PA needed.' },
      { title: 'Other insurance', desc: '9715x codes bill primary first when other coverage exists — capture COB status up front (children 18 and under are paid primary per AHCCCS instruction).' },
      { title: 'Prior provider + active auths', desc: 'Ex-Action Behavior Centers / Centria families may arrive mid-authorization — get the history.' },
    ],
    sources: [
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
      { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: AMPM 320-S sets no age bound of its own. Behavior Analysis Services are covered "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity," and the policy applies across ACC, ALTCS E/PD, DCS/CMDP, DES/DDD, the RBHA contracts and fee-for-service programs without an age criterion. In practice children reach the benefit through EPSDT, and nothing in the policy text excludes adults — screen on medical necessity, not birthday.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      dxRecency: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: None at the state level. AMPM 320-S imposes no recency clock on the diagnostic evaluation — and no autism diagnosis at all is strictly required. What must be current is the assessment: services are "prescribed or recommended in specific dosages, frequency, intensity, and duration by a qualified BHP as the result of an assessment of the member." Plan-level overlays can be stricter, so check the per-plan guide before telling a family an old evaluation still counts.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: AMPM 320-S gates on who recommends ABA, not on who diagnoses: services must be "prescribed or recommended... by a qualified BHP." A Behavioral Health Professional is defined as an individual licensed under A.R.S. Title 32, Chapter 33 whose scope allows independent behavioral health practice (or practice under direct supervision, except a licensed substance abuse technician); a psychiatrist (A.R.S. § 36-501); a psychologist (A.R.S. § 32-2061); a physician; a Behavior Analyst (A.R.S. § 32-2091); a registered nurse practitioner licensed as an adult psychiatric and mental health nurse; or a registered nurse with psychiatric-mental health certification or one year of behavioral health experience.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: No single instrument is mandated. "Behavior Analysis Services shall be based upon assessment(s) that include Standardized and/or Non-standardized instruments through both direct and indirect methods." Standardized examples named in the policy: the Pervasive Developmental Disabilities Behavior Inventory, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales. Non-standardized examples: curriculum-referenced assessments and stimulus preference assessment procedures.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      referral: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: a prescription or recommendation from a qualified Behavioral Health Professional, based on an assessment of the member. On top of that the plan states no prior authorization is needed for adaptive behavior assessment codes 97151 and 97152, while treatment codes 97153–97158 require PA on Mercy Care\'s own ABA PA form through Availity, in 6-month authorization blocks. The child and family team determines medically necessary services, so expect care-team coordination rather than a pure paper review.',
        status: 'verified',
        cites: [
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      telehealth: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: AMPM 320-S permits telehealth delivery but does not price it: the individualized treatment plan must "identify the modality by which the service will be delivered (whether in person or via telehealth, or in-group or individual setting, or combination thereof)." Which 9715x codes are actually payable remotely, and with which place-of-service code or modifier, lives in the AHCCCS telehealth code set and the Behavioral Health Services Billing Matrix, neither of which we could retrieve at this review — azahcccs.gov returns 403 to automated fetching.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
        verifyVia:
          'Mercy Care provider services / Availity, and the AHCCCS Telehealth code set (azahcccs.gov blocked automated retrieval at this review; mercycareaz.org returns 403).',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: A duty with no number attached. "Behavior Analysis Services shall be directed and overseen by Behavior Analysts and supported, where applicable, by Behavior Analysis Trainees and/or Behavior Technicians." The Behavior Analyst "is responsible for all aspects of clinical direction, supervision, and provider-level case management," for training Trainees and Technicians, for ensuring that "the extent, kind, and quality" of what they deliver matches their training and experience, and for their compliance with the policy and A.R.S. § 32-2091. A Behavior Analysis Trainee needs "direct and ongoing supervision consistent with the standards set by a nationally recognized Behavior Analyst certification board." AMPM 320-S publishes no supervision percentage and no caseload cap, so for RBT-credentialed staff the BACB floor is the operative number.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: AMPM 320-S does not address whether 97153 and 97155 may be billed for the same clock time. The policy routes every coding question elsewhere: "Refer to the Behavioral Health Services Billing Matrix and Medical Coding Resources on the AHCCCS website for more information regarding required coding information, including covered settings, modifiers for Behavior Analysis Trainee billing, or other billing/coding information."',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
        ],
        verifyVia:
          'Mercy Care provider services and the plan\'s ABA PA form / Availity; mercycareaz.org returned 403 to automated retrieval at this review, so plan-level specifics could not be re-read.',
      },
      dailyLimits: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: No per-day unit ceiling appears in AMPM 320-S; the policy sets clinical content, not claim edits, and defers unit and coding questions to the Behavioral Health Services Billing Matrix. Dosage is set case by case — services are prescribed "in specific dosages, frequency, intensity, and duration" by the recommending BHP — so the binding ceiling in practice is the Contractor\'s authorization.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
        ],
        verifyVia:
          'Mercy Care provider services and the plan\'s ABA PA form / Availity; mercycareaz.org returned 403 to automated retrieval at this review, so plan-level specifics could not be re-read.',
      },
      noteSignature: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: AMPM 320-S sets a reporting cadence, not a signature rule. Progress reports are required "at minimum, every six months" and must include member identification; background information (family dynamics, school placement, cultural considerations, prenatal and/or developmental history, medical history, sensory, dietary and adaptive needs, sleep patterns, medications); assessment findings; outcomes (measurable objectives, progress toward goals, clinical recommendations, treatment dosage, family role and outcomes); and care coordination (transition statement and individualized discharge criteria). Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
        ],
        verifyVia:
          'Mercy Care provider services and the plan\'s ABA PA form / Availity; mercycareaz.org returned 403 to automated retrieval at this review, so plan-level specifics could not be re-read.',
      },
      placeOfService: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: AMPM 320-S requires the treatment plan to "specify the setting(s) in which services will be delivered" but publishes no payable-setting list, pointing instead to the Behavioral Health Services Billing Matrix "regarding required coding information, including covered settings." What is documented at the rate level is that setting changes the money: the November 2023 fixed-rate notice pays home delivery (POS 12) roughly 10% above the clinic rate on every ABA code.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
        ],
        verifyVia:
          'Mercy Care provider services and the plan\'s ABA PA form / Availity; mercycareaz.org returned 403 to automated retrieval at this review, so plan-level specifics could not be re-read.',
      },
      billAsProvider: {
        value:
          'Follows the AHCCCS rule — Mercy Care runs no separate medical-necessity policy and links AMPM 320-S as its criteria: The claim line has to say who actually delivered the service. AHCCCS pays credential-tiered rates through modifiers — HM below bachelor\'s (technician level), HN bachelor\'s, HO master\'s, HP doctoral — and AMPM 320-S points to the Behavioral Health Services Billing Matrix for "modifiers for Behavior Analysis Trainee billing." Whose NPI goes in the rendering field is set per Contractor: UnitedHealthcare Community Plan, for instance, requires the rendering provider\'s 10-digit NPI in box 24J, "must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Mercy Care — ABA PA request form', url: 'https://www.mercycareaz.org/content/dam/mercycare/pdf/PAabarequest_ua.pdf' },
        ],
        verifyVia:
          'Mercy Care provider services and the plan\'s ABA PA form / Availity; mercycareaz.org returned 403 to automated retrieval at this review, so plan-level specifics could not be re-read.',
      },
    },
    faq: [
      { q: 'Does Mercy Care cover ABA therapy?', a: 'Yes — on AMPM 320-S criteria (the plan links the state policy directly). Assessment codes 97151/97152 need no PA; treatment codes 97153–97158 require PA on the plan\'s ABA form, in 6-month authorization periods.' },
      { q: 'Is Mercy Care the same as Aetna?', a: 'Mercy Care is administered by Aetna Medicaid Administrators LLC, so the machinery is Aetna\'s — but it\'s a Medicaid plan on AHCCCS rules, not Aetna\'s commercial CPB 0554 policy. A family saying "we have Aetna" in Phoenix may well be a Mercy Care member.' },
      { q: 'How long do Mercy Care ABA authorizations last?', a: 'Six months, matching the state\'s 6-month progress-report cadence — build reauthorization requests from the AMPM 320-S progress report.' },
    ],
  },

  'unitedhealthcare-community-plan-arizona': {
    slug: 'unitedhealthcare-community-plan-arizona',
    family: 'unitedhealthcare',
    cardDesc: 'Optum-run; PA on everything except 97151/97152; explicit "no ASD dx required" rule.',
    assessmentPA: 'Not required — "All ABA services require prior authorization except 97151 and 97152" (Optum AZ orientation)',
    treatmentPA: 'Required for all treatment codes — Provider Express online ABA Treatment Form or fax 1-888-541-6691',
    dxRequired: 'No — "ASD diagnosis is not required for ABA services for Arizona Medicaid members" (Optum AZ orientation, verbatim)',
    payer: 'UnitedHealthcare Community Plan of Arizona',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · UHC Community Plan (AZ)',
    h1: 'UnitedHealthcare Community Plan of Arizona ABA coverage (AHCCCS plan).',
    metaTitle: 'UHC Community Plan Arizona (AHCCCS) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers Arizona AHCCCS ABA through Optum — no PA on 97151/97152, the AZ Treatment Request Form documentation regime, the ACC + DDD dual membership, and AHCCCS registration mechanics.',
    intro: [
      'UnitedHealthcare Community Plan of Arizona runs its ABA benefit through Optum, with a dedicated AZ AHCCCS ABA Program on Provider Express — an Arizona-specific orientation, treatment request form, and quick reference guide, staffed by a dedicated Arizona autism clinical team. Like Mercy Care, it covers both Arizona funnels: it is an ACC plan and one of the two statewide DDD Health Plans ("DD by UHCCP"), plus an ALTCS contractor. The clinical posture matches the state baseline — no PA on assessment, no autism diagnosis required — but the paperwork is Optum-national in flavor, with Arizona-specific forms and a demanding treatment-request documentation list.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'ACC plan + statewide DDD Health Plan ("DD by UHCCP") + ALTCS; BH run by Optum' },
      { label: 'Assessment PA', value: 'None — all ABA codes require PA except 97151 and 97152' },
      { label: 'Treatment PA', value: 'Required — Provider Express ABA Treatment Form or fax 1-888-541-6691' },
      { label: 'Diagnosis', value: 'ASD diagnosis explicitly NOT required for Arizona Medicaid members' },
      { label: 'Portals', value: 'providerexpress.com (auth) + UHCprovider.com (claims); payer ID 03432' },
      { label: 'Claims deadline', value: '90 days from date of service' },
    ],
    sections: [
      {
        h2: 'The Optum layer: forms, documentation, concurrent review',
        body: [
          'Assessments (97151/97152) start without authorization; every other ABA code requires PA, submitted through the online ABA Treatment Form on Provider Express or by fax to 1-888-541-6691. The treatment request is where Optum\'s rigor lives — it must include baseline and mastery criteria, a transition plan, discharge criteria, a behavior-reduction/crisis plan, parent goals, and supervision hours, and goals must not be educational or academic in nature. Concurrent reviews weigh progress and medical necessity under Optum\'s Autism/ABA clinical policy, run by a dedicated Arizona autism team of licensed clinicians and BCBAs. The plan\'s fee schedule mirrors the AHCCCS structure — 9715x plus 0362T/0373T in 15-minute units with credential modifiers — though dollar amounts aren\'t published in the orientation. Note the operational split: authorizations live on Provider Express, claims on UHCprovider.com (payer ID 03432), with a 90-day filing deadline.',
        ],
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
        ],
      },
      {
        h2: 'Both funnels, and the registration mechanics',
        body: [
          'The orientation is explicit that UHC Community Plan is "the selected managed care administrator for Arizona AHCCCS Complete Care and AZ DD membership" — DD member cards say "DDD Health Plan by UHCCP" and carry Group AZDDD, versus AZHCCCS for ACC members. Same forms and rules, but confirm which book the member is in, since the DDD path comes with a different eligibility gate and bundled HCBS services. Registration mechanics that block claims if missed: the agency must be enrolled as AHCCCS provider type 77, BCBAs must be individually AHCCCS-registered, and the rendering provider\'s NPI (the BCBA or licensed clinician) goes in box 24J. And the diagnosis rule worth quoting in any dx-gate dispute: "ASD diagnosis is not required for ABA services for Arizona Medicaid members." Like the other big plans, UHC terminated Action Behavior Centers in the March 2026 network purge — expect displaced families.',
        ],
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
        ],
      },
    ],
    collect: [
      { title: 'ACC vs. DD membership', desc: 'Check the card — Group AZDDD ("DDD Health Plan by UHCCP") vs. AZHCCCS routes the eligibility conversation.' },
      { title: 'Diagnosis (any qualifying)', desc: 'No ASD dx required — capture whatever diagnosis and assessment supports medical necessity.' },
      { title: 'Treatment-request inputs', desc: 'Baseline/mastery criteria, transition + discharge plans, crisis plan, parent goals, supervision hours — collect early; goals can\'t be academic.' },
      { title: 'AHCCCS registration status', desc: 'Agency as provider type 77, BCBA individually registered, rendering NPI for box 24J — verify before the first claim.' },
    ],
    sources: [
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'UHC Community Plan — Arizona DDD program page', url: 'https://www.uhc.com/communityplan/arizona/plans/medicaid/developmental-disabilities' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Optum\'s Arizona eligibility list is membership-based, not age-based: the member must be covered under AHCCCS (Arizona Complete Care or the Developmentally Disabled program) and "diagnosed with a condition for which ABA-based therapy services are recognized as therapeutically appropriate, including autism spectrum disorder, by a qualified health care professional." No upper or lower age bound is published, and AMPM 320-S sets none either.',
        status: 'verified',
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      dxRecency: {
        value:
          'None published. Neither Optum\'s Arizona orientation nor AMPM 320-S puts a clock on the diagnostic evaluation; each clinical review instead asks for "confirmation member has an appropriate DSM-5 diagnosis that can benefit from ABA," current medications, concurrent services and school hours.',
        status: 'verified',
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          '"Diagnosed with a condition for which ABA-based therapy services are recognized as therapeutically appropriate, including autism spectrum disorder, by a qualified health care professional. ASD diagnosis is not required for ABA services for Arizona Medicaid members." That last sentence is the one to quote in any diagnosis-gate dispute.',
        status: 'verified',
        cites: [{ title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' }],
      },
      diagnosticTools: {
        value:
          'Optum\'s Arizona orientation names no required instrument — it asks each review to confirm an appropriate DSM-5 diagnosis. The instrument standard is the state\'s: AMPM 320-S requires assessments using standardized and/or non-standardized instruments through both direct and indirect methods, naming the PDDBI, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales as standardized examples.',
        status: 'verified',
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      referral: {
        value:
          'No physician referral is required; the gate is authorization. "All ABA services require prior authorization except 97151 and 97152" — assessment requests go through the online ABA Treatment Form on Provider Express, treatment requests through the same form or fax 1-888-541-6691. The treatment request must carry baseline and mastery criteria, a transition plan, discharge criteria, a behavior-reduction/crisis plan, parent goals, supervision and treatment-planning hours, relevant psychological information and coordination of care, and goals "must not be educational or academic in nature."',
        status: 'verified',
        cites: [{ title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' }],
      },
      telehealth: {
        value:
          'Not published. Optum\'s Arizona AHCCCS ABA orientation covers eligibility, authorization, documentation, coding and claims but says nothing about telehealth delivery of the ABA codes; AMPM 320-S permits telehealth as a treatment-plan modality without naming payable codes.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
        verifyVia:
          'Optum\'s Autism/Applied Behavior Analysis page on Provider Express and the Arizona autism clinical team, plus the AHCCCS telehealth code set.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Credentialing conditions rather than a ratio. For ABA/IBT groups Optum requires that "Behavior Technicians receive appropriate training and supervision by BCBAs or licensed clinician," that a "BCBA or licensed clinician on staff [provides] program oversight," and that a "BCBA or licensed clinician performs skills assessments and provides direct supervision of behavior technicians in joint sessions with client and family." Supervision hours must be itemised in the treatment request. No percentage or caseload cap is published, and AMPM 320-S sets none — so the BACB floor governs RBT-credentialed staff.',
        status: 'verified',
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Not addressed directly. The orientation\'s only concurrency rule is a pointer: "Providers are responsible for billing in accordance with nationally recognized CMS Correct Coding Initiative (CCI) standards," which is where the 97153/97155 same-time question is actually settled.',
        status: 'unverified',
        cites: [{ title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' }],
        verifyVia:
          'Optum provider services / the Arizona autism clinical team, and the CMS NCCI edits Optum says it follows.',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling is published for the Arizona Medicaid program; Optum points to CMS Correct Coding Initiative standards and enforces the authorization instead — "units exceed authorization" is one of the named coding reasons claims get denied, alongside missing unit counts.',
        status: 'unverified',
        cites: [{ title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' }],
        verifyVia:
          'Optum provider services; confirm authorized units per code before scheduling.',
      },
      noteSignature: {
        value:
          'No session-note signature rule is published in the Arizona orientation. What it does require at intake is a signed consent for billing using protected health information "including signature on file," informed consent for services, and a signed and dated Release of Information for each party granted access to PHI, with any refusal noted in the treatment record.',
        status: 'unverified',
        cites: [{ title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' }],
        verifyVia:
          'The UnitedHealthcare Community Plan of Arizona / Optum provider manual and your participation agreement.',
      },
      placeOfService: {
        value:
          'No payable-setting list is published. The orientation treats setting as a coding input — "Place of service (home or clinic)" is one of the factors that determines which code and rate applies — and AMPM 320-S requires the treatment plan to specify the settings in which services will be delivered.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
        verifyVia:
          'Optum provider services for school- and community-based delivery, and the AHCCCS Behavioral Health Services Billing Matrix for covered settings.',
      },
      billAsProvider: {
        value:
          'The supervisor carries the claim. "The rendering provider\'s 10-digit NPI is required in box 24J and must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)," and "Field 31 must have a rendering provider name. Rendering supervisor (BCBA/Licensed Clinician) will bill for all services by them or the BCaBAs/RBTs under the supervisory protocol." The agency must hold an AHCCCS registration number as provider type 77, BCBAs must be individually AHCCCS-registered, claims go on a Form 1500 to payer ID 03432, and when a provider is contracted as a group the payment is made to the group, not the individual.',
        status: 'verified',
        cites: [{ title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Arizona cover ABA?', a: 'Yes — through Optum\'s AZ AHCCCS ABA Program. Assessment codes 97151/97152 need no PA; all other ABA codes require authorization via Provider Express or fax, with a detailed treatment-request documentation list.' },
      { q: 'Does UHC require an autism diagnosis for AHCCCS ABA?', a: 'No — Optum\'s Arizona orientation states verbatim that an ASD diagnosis is not required for ABA services for Arizona Medicaid members. Medical necessity, supported by assessment, governs.' },
      { q: 'How do I submit an ABA authorization to UHC in Arizona?', a: 'The online ABA Treatment Form on providerexpress.com, or fax 1-888-541-6691. Claims go separately through UHCprovider.com (payer ID 03432) within 90 days of the date of service.' },
    ],
  },

  'arizona-complete-health': {
    slug: 'arizona-complete-health',
    family: 'centene',
    cardDesc: 'Centene\'s CP.BH.104 overlay: dx confirmation, 5-year eval recency, hour bands; every county.',
    assessmentPA: 'Not published as a standing rule — CP.BH.104 lists a behavioral assessment as a requestable service, but the plan\'s prior-authorization page works code by code, so run the 97151/97152 lookup before promising an auth-free assessment',
    treatmentPA: 'Required per CP.BH.104 — BCBA behavioral assessment + FBA or skills assessment + individualized plan; updated assessment and plan every 6 months',
    dxRequired: 'CP.BH.104 asks for a confirmed ASD dx — but defers to "state-defined ABA criteria," which in Arizona means non-ASD diagnoses qualify under AMPM 320-S; cite it',
    payer: 'Arizona Complete Health - Complete Care Plan',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · Arizona Complete Health',
    h1: 'Arizona Complete Health ABA coverage (AHCCCS plan).',
    metaTitle: 'Arizona Complete Health (AHCCCS) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Arizona Complete Health (Centene) administers AHCCCS ABA — corporate clinical policy CP.BH.104, the confirmed-diagnosis and 5-year eval-recency rules, hour-band guidance, the Care1st merger, and the statewide footprint.',
    intro: [
      'Arizona Complete Health - Complete Care Plan — Centene\'s Arizona vehicle — is the only ACC plan in every county, holds both the North and South GSA ACC-RBHA contracts, and absorbed Care1st\'s members in 2024. Unlike the plans that simply link AMPM 320-S, AzCH runs a genuinely distinct corporate clinical policy: CP.BH.104 "Applied Behavior Analysis" (last revised 12/24), which layers a confirmed-diagnosis expectation, a five-year evaluation-recency rule, and hour-band guidance on top of the state baseline. Knowing where the corporate policy yields to Arizona\'s rules is the intake skill for this plan.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'ACC in all counties + ACC-RBHA North & South GSAs (Centene)' },
      { label: 'Clinical rules', value: 'Centene CP.BH.104 (rev. 12/24) — a real overlay, deferring to state criteria where Arizona differs' },
      { label: 'Diagnosis recency', value: 'Comprehensive diagnostic evaluation within the past 5 years (CP.BH.104 — not a state rule)' },
      { label: 'Hour guidance', value: 'Focused ABA 10–25 hrs/wk; comprehensive 30–40; supervision 1–2 hrs per 10 direct' },
      { label: 'Reauth cadence', value: 'Updated behavior assessment + treatment plan every 6 months' },
      { label: 'UM', value: 'Centene Advanced Behavioral Health (in-house); azcompletehealth.com portal' },
    ],
    sections: [
      {
        h2: 'CP.BH.104: what the corporate policy requires',
        body: [
          'Initiation under CP.BH.104 requires medical stability, a behavioral assessment completed by a BCBA (or state-law equivalent) using record review, interviews, rating scales, and direct observation, plus an FBA — descriptive, traditional, or IISCA — or a skills assessment from a named list (VB-MAPP, ABLLS-R, AFLS, PEAK, SSIS, EFL, Socially Savvy), feeding an individualized treatment plan. Continuation requires an updated behavior assessment and updated treatment plan every 6 months (or more often if state-mandated), with progress data across settings. Intensity guidance comes as bands rather than hard caps: focused ABA at 10–25 hours/week, comprehensive ABA at 30–40 hours/week of direct treatment, and supervision at 1–2 hours per 10 direct hours (2 hours required below 10 hours/week). Whether AzCH operationally requires PA on the 97151 assessment for AHCCCS members isn\'t published as a single rule — the plan\'s prior-auth page works code-by-code, so run the lookup before promising an auth-free assessment.',
        ],
        cites: [
          { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
          { title: 'AzCH — prior authorization page', url: 'https://www.azcompletehealth.com/providers/resources/prior-authorization.html' },
        ],
      },
      {
        h2: 'Where the policy yields to Arizona — and the plan\'s footprint',
        body: [
          'CP.BH.104 asks for a confirmed ASD diagnosis (current DSM, confirmed via tools like the ADOS-2, ADI-R, or CARS-2) "or an appropriate diagnosis as otherwise specified according to state-defined ABA criteria" — and that escape clause is what reconciles the corporate policy with Arizona\'s no-ASD-required Medicaid rule. When the diagnosis is non-ASD, cite AMPM 320-S explicitly in the request rather than arguing the corporate criteria. Two more facts to hold: CP.BH.104\'s five-year evaluation-recency rule is a dx-recency gate the state policy does not impose, so check the evaluation date at intake; and the footprint is the state\'s largest — every county as an ACC plan, both ACC-RBHA GSAs, and the former Care1st membership (Apache, Coconino, Mohave, Navajo, Yavapai) transitioned in 2024. AzCH also terminated Action Behavior Centers in the March 2026 network purge, so displaced-family inbounds will carry this plan\'s card statewide.',
        ],
        cites: [
          { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
          { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
        ],
      },
    ],
    collect: [
      { title: 'Evaluation date', desc: 'CP.BH.104 wants the comprehensive diagnostic evaluation within 5 years — flag stale evals for re-evaluation early.' },
      { title: 'Diagnosis + confirming tools', desc: 'ASD confirmed via ADOS-2/ADI-R/CARS-2-style tools — or a non-ASD dx framed under AMPM 320-S\'s state criteria.' },
      { title: 'Assessment inputs', desc: 'BCBA assessment with FBA or a named skills assessment (VB-MAPP, ABLLS-R, etc.) — the initiation package is prescriptive.' },
      { title: 'Requested intensity vs. bands', desc: 'Fit requests to the 10–25 (focused) / 30–40 (comprehensive) hour bands, with supervision ratios in the plan.' },
    ],
    sources: [
      { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
      { title: 'AzCH — prior authorization page', url: 'https://www.azcompletehealth.com/providers/resources/prior-authorization.html' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'azfamily — Nearly 1K Arizona children lose in-network ABA (3/5/2026)', url: 'https://www.azfamily.com/2026/03/05/nearly-1k-arizona-children-with-autism-lose-aba-therapy-coverage/' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'CP.BH.104 carries no age criterion. The policy frames ASD as "typically a lifelong diagnosis... requiring treatment at any point in time," and says of Focused ABA that "it is not restricted by age, cognitive level, or co-occurring conditions." Arizona adds none either — AMPM 320-S sets no age bound.',
        status: 'verified',
        cites: [
          { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      dxRecency: {
        value:
          'Five years — and it is a plan rule, not a state one. CP.BH.104 requires that "a comprehensive diagnostic evaluation, as specified according to state-defined ABA criteria, has been conducted within the past five years," including a summary of how current symptoms affect functioning across settings (family, peer, school) in communication, socialization, restricted/repetitive behaviour and adaptive functioning. AMPM 320-S imposes no recency clock, so this is the gate that catches stale evaluations on this plan.',
        status: 'verified',
        cites: [
          { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          '"ABA is recommended by a qualified licensed health care provider working within their scope of practice and who is qualified to diagnose ASD." The diagnosis itself must be "a confirmed autism spectrum disorder (ASD) diagnosis, according to the most current version of the [DSM] criteria or an appropriate diagnosis as otherwise specified according to state-defined ABA criteria" — that second clause is what lets a non-ASD Arizona diagnosis through under AMPM 320-S.',
        status: 'verified',
        cites: [
          { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'CP.BH.104 names its instruments explicitly. The ASD diagnosis and severity level must be confirmed by one of: CHAT; M-CHAT/M-CHAT-R/F; STAT; SCQ; ASSQ; CAST; ADOS/ADOS-2; ADI-R; CARS/CARS-2; GARS-3; EarliPoint; SWYC-POSI; RITA-T; CSBS-ITC; or another evidence-based assessment reviewed case by case. The behavioral assessment then needs record review, interviews, rating scales and direct observation using continuous or discontinuous measurement, plus either an FBA (descriptive, traditional functional analysis, or IISCA) or a skills assessment from a named list — VB-MAPP, ABLLS-R, AFLS, PEAK, SSIS, EFL or Socially Savvy.',
        status: 'verified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
      },
      referral: {
        value:
          'No separate physician prescription is required — the recommendation from a qualified licensed health care provider qualified to diagnose ASD is the referral. What CP.BH.104 does demand up front is a completed behavioral assessment by a BCBA (or duly certified, licensed or registered equivalent under state law) feeding an individualized treatment plan, plus documented coordination of care with school, prescribers and any PT/OT/speech providers. Whether the plan requires PA on the 97151 assessment for AHCCCS members is not published as a standing rule — its prior-authorization page works code by code.',
        status: 'verified',
        cites: [
          { title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' },
          { title: 'AzCH — prior authorization page', url: 'https://www.azcompletehealth.com/providers/resources/prior-authorization.html' },
        ],
      },
      telehealth: {
        value:
          'Permitted, without a code list. CP.BH.104 states that ABA "services may be provided in various settings (e.g., home, clinic, school, community) and modalities (e.g., in-person, telehealth)," and devotes a section to CASP\'s Practice Parameters for Telehealth-Implementation of Applied Behavior Analysis: telehealth "is not intended to replace in person service, as it is intended to supplement the traditional in person service delivery model," with modality selected on the member\'s needs, preference, caregiver availability and environmental support — and "providers should refer to respective state allowances for telehealth services."',
        status: 'verified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'One to two hours of supervision per ten hours of direct treatment "is considered standard of care in most cases; two hours of supervision is required if direct treatment totals less than 10 hours per week." The policy also requires "a comprehensive infrastructure for case supervision by a behavior analyst of all assessments and treatment," and documentation at both initiation and every 6-month continuation that treatment "will be delivered or supervised by an ABA-credentialed professional."',
        status: 'verified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not addressed. CP.BH.104 is a medical-necessity policy; its CPT table is explicitly informational — "inclusion or exclusion of any codes does not guarantee coverage" — and it states no rule on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
        verifyVia:
          'Centene Advanced Behavioral Health / AzCH provider services and the plan\'s payment policies on azcompletehealth.com.',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling. CP.BH.104 works in weekly bands — focused ABA 10 to 25 hours per week of direct treatment, comprehensive ABA 30 to 40 — and requires the treatment plan to outline "hours of therapy per day... with the goal of increasing or decreasing the intensity of therapy as the member/enrollee\'s ability to tolerate and participate permits," justified by impairment level, symptom severity, treatment history and response, and taking account of the member\'s age, school attendance requirements and other daily activities.',
        status: 'verified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
      },
      noteSignature: {
        value:
          'Not published. CP.BH.104 requires an updated behavior assessment and treatment plan every six months (or more often where state-mandated) with qualitative and quantitative data gathered from providers, parents, teachers and other caregivers and collected in multiple settings, but says nothing about who signs a session note or when.',
        status: 'unverified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
        verifyVia:
          'The AzCH provider manual and your participation agreement\'s documentation clause.',
      },
      placeOfService: {
        value:
          'Settings are open, with two boundaries. ABA "services may be provided in various settings (e.g., home, clinic, school, community)," and data must be "collected in multiple settings, such as in a clinic, home, and school (as applicable)." The limits: ABA is not covered for services otherwise covered under IDEA — with the express carve-back that "unless restricted within a state Medicaid benefit, ABA services can occur in coordination with school services and transition plans" — and treatment is a discontinuation candidate when "services are in lieu of school, respite care, or other community-based settings of care."',
        status: 'verified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
      },
      billAsProvider: {
        value:
          'Not addressed. CP.BH.104 requires the behavioral assessment to be completed by a BCBA "or other duly certified, licensed, or registered equivalent provider (as defined by state law)" and treatment to be delivered or supervised by an ABA-credentialed professional, but it does not say whose NPI the claim goes out under.',
        status: 'unverified',
        cites: [{ title: 'Centene/AzCH — Clinical Policy CP.BH.104, Applied Behavior Analysis (rev. 12/24)', url: 'https://www.azcompletehealth.com/content/dam/centene/policies/behavioral-policies/CP.BH.104.pdf' }],
        verifyVia:
          'AzCH provider services and the plan\'s billing manual; the AHCCCS credential modifiers (HM/HN/HO/HP) still govern the rate tier.',
      },
    },
    faq: [
      { q: 'Does Arizona Complete Health cover ABA?', a: 'Yes — under Centene\'s clinical policy CP.BH.104 layered on the AHCCCS baseline: a BCBA behavioral assessment, an FBA or skills assessment, and an individualized treatment plan at initiation, with updates every 6 months.' },
      { q: 'Does Arizona Complete Health require an autism diagnosis?', a: 'CP.BH.104 asks for a confirmed ASD diagnosis, but its own text defers to "state-defined ABA criteria" — and Arizona\'s AMPM 320-S covers other diagnoses justified by medical necessity. For non-ASD cases, cite AMPM 320-S in the request.' },
      { q: 'Does Arizona Complete Health cap ABA hours?', a: 'No hard caps — CP.BH.104 uses guideline bands: 10–25 hours/week for focused ABA, 30–40 for comprehensive, with supervision at 1–2 hours per 10 direct hours.' },
      { q: 'What happened to Care1st?', a: 'Care1st no longer exists as a separate ACC plan — it merged into Arizona Complete Health, with northern-county members transitioned in 2024. Any "Care1st" card or listing is stale.' },
    ],
  },

  'banner-university-family-care': {
    slug: 'banner-university-family-care',
    cardDesc: 'State baseline + its own ABA PA form; specifics unpublished — verify in the Banner portal.',
    assessmentPA: 'Not published — unlike Mercy Care and UHC/Optum, Banner states no assessment-PA position publicly; confirm whether 97151/97152 need PA before booking',
    treatmentPA: 'Required — the plan publishes an ABA Prior Authorization Form; durations and specifics unpublished, verify in the portal',
    dxRequired: 'No distinct plan policy published — AMPM 320-S baseline applies (autism dx not strictly required)',
    payer: 'Banner-University Family Care',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · Banner-University Family Care',
    h1: 'Banner-University Family Care ABA coverage (AHCCCS plan).',
    metaTitle: 'Banner-University Family Care (AHCCCS) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Banner-University Family Care handles Arizona AHCCCS ABA — the AMPM 320-S state baseline, the plan\'s ABA Prior Authorization Form, the 10-county ACC + ALTCS footprint, and the specifics you\'ll need to verify in the Banner portal.',
    intro: [
      'Banner-University Family Care — the Banner Health / University of Arizona Health Plans entry — carries the second-largest ACC footprint (ten counties, including Maricopa and Pima) plus ALTCS contracts. Unlike Mercy Care, UHC, or Arizona Complete Health, Banner publishes no distinct ABA clinical policy: everything we can verify points to the AMPM 320-S state baseline plus the plan\'s own ABA Prior Authorization Form. That makes this a verify-in-the-portal plan — the state guide tells you the clinical rules; Banner\'s portal tells you the paperwork.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'ACC in 10 counties + ALTCS (Banner Health / UA Health Plans)' },
      { label: 'Clinical rules', value: 'No distinct published ABA policy — AMPM 320-S baseline' },
      { label: 'Treatment PA', value: 'Required — via Banner\'s ABA Prior Authorization Form' },
      { label: 'Assessment PA', value: 'Not published — verify whether 97151/97152 need PA before booking' },
      { label: 'Portal', value: 'bannerhealth.com/bhpprovider (Banner Health Plans provider portal)' },
      { label: 'Rates', value: 'Not published — AHCCCS physician fee schedule is the benchmark' },
    ],
    sections: [
      {
        h2: 'What\'s verified — and what to pull from the portal',
        body: [
          'Banner lists an "Applied Behavior Analysis (ABA) Prior Authorization Form" among its behavioral-health materials, which confirms treatment PA exists — but the plan publishes no ABA clinical policy, no assessment-PA rule, no authorization durations, and no hour guidance that we could verify. The honest operating assumption is the state baseline: AMPM 320-S clinical criteria (including the no-autism-dx-required rule and 6-month progress reports), with Banner\'s own form as the PA vehicle. Before quoting a family a start date, pull the current ABA PA form from the behavioral-health materials page at bannerhealth.com/bhpprovider and confirm directly with the plan whether assessment codes 97151/97152 require PA — the two largest Arizona plans skip it, but Banner\'s position isn\'t published.',
        ],
        cites: [
          { title: 'Banner Health Plans — behavioral health materials and forms (lists the ABA PA form)', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      {
        h2: 'Footprint',
        body: [
          'Banner-University Family Care operates as an ACC plan in Maricopa, Pinal, Cochise, Gila, Graham, Greenlee, La Paz, Pima, Santa Cruz, and Yuma counties, plus ALTCS in ten counties — the second-largest geographic reach after Arizona Complete Health. For intake, that means Banner cards show up across both metro Phoenix and southern Arizona; treat every one as an AMPM 320-S case with Banner-specific paperwork to confirm.',
        ],
        cites: [
          { title: 'AHCCCS — Available Health Plans list', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis (any qualifying)', desc: 'AMPM 320-S baseline — ASD or another diagnosis justified by medical necessity, with a BHP recommendation.' },
      { title: 'Current Banner ABA PA form', desc: 'Pull it from bannerhealth.com/bhpprovider before submitting — the specifics aren\'t published anywhere else.' },
      { title: 'Assessment-PA answer', desc: 'Confirm with the plan whether 97151/97152 need PA — unpublished, so don\'t assume the Mercy Care/UHC pattern.' },
      { title: 'County + plan line', desc: 'ACC vs. ALTCS membership — Banner holds both, on different rules.' },
    ],
    sources: [
      { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'AHCCCS — Available Health Plans list', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: AMPM 320-S sets no age bound of its own. Behavior Analysis Services are covered "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity," and the policy applies across ACC, ALTCS E/PD, DCS/CMDP, DES/DDD, the RBHA contracts and fee-for-service programs without an age criterion. In practice children reach the benefit through EPSDT, and nothing in the policy text excludes adults — screen on medical necessity, not birthday.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
      dxRecency: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: None at the state level. AMPM 320-S imposes no recency clock on the diagnostic evaluation — and no autism diagnosis at all is strictly required. What must be current is the assessment: services are "prescribed or recommended in specific dosages, frequency, intensity, and duration by a qualified BHP as the result of an assessment of the member." Plan-level overlays can be stricter, so check the per-plan guide before telling a family an old evaluation still counts.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: AMPM 320-S gates on who recommends ABA, not on who diagnoses: services must be "prescribed or recommended... by a qualified BHP." A Behavioral Health Professional is defined as an individual licensed under A.R.S. Title 32, Chapter 33 whose scope allows independent behavioral health practice (or practice under direct supervision, except a licensed substance abuse technician); a psychiatrist (A.R.S. § 36-501); a psychologist (A.R.S. § 32-2061); a physician; a Behavior Analyst (A.R.S. § 32-2091); a registered nurse practitioner licensed as an adult psychiatric and mental health nurse; or a registered nurse with psychiatric-mental health certification or one year of behavioral health experience.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: No single instrument is mandated. "Behavior Analysis Services shall be based upon assessment(s) that include Standardized and/or Non-standardized instruments through both direct and indirect methods." Standardized examples named in the policy: the Pervasive Developmental Disabilities Behavior Inventory, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales. Non-standardized examples: curriculum-referenced assessments and stimulus preference assessment procedures.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
      referral: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: A prescription or recommendation from a qualified Behavioral Health Professional, based on an assessment of the member, is the referral — AMPM 320-S requires nothing else and sets no prior-authorization rules of its own, leaving PA to the Contractors. The two largest plans both skip PA on the assessment codes: Mercy Care states no PA is needed for 97151 and 97152, and Optum\'s Arizona orientation states "All ABA services require prior authorization except 97151 and 97152."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
      telehealth: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: AMPM 320-S permits telehealth delivery but does not price it: the individualized treatment plan must "identify the modality by which the service will be delivered (whether in person or via telehealth, or in-group or individual setting, or combination thereof)." Which 9715x codes are actually payable remotely, and with which place-of-service code or modifier, lives in the AHCCCS telehealth code set and the Behavioral Health Services Billing Matrix, neither of which we could retrieve at this review — azahcccs.gov returns 403 to automated fetching.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
        verifyVia:
          'Banner Health Plans at bannerhealth.com/bhpprovider — pull the current ABA Prior Authorization Form and ask the plan directly; none of this is published at plan level.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: A duty with no number attached. "Behavior Analysis Services shall be directed and overseen by Behavior Analysts and supported, where applicable, by Behavior Analysis Trainees and/or Behavior Technicians." The Behavior Analyst "is responsible for all aspects of clinical direction, supervision, and provider-level case management," for training Trainees and Technicians, for ensuring that "the extent, kind, and quality" of what they deliver matches their training and experience, and for their compliance with the policy and A.R.S. § 32-2091. A Behavior Analysis Trainee needs "direct and ongoing supervision consistent with the standards set by a nationally recognized Behavior Analyst certification board." AMPM 320-S publishes no supervision percentage and no caseload cap, so for RBT-credentialed staff the BACB floor is the operative number.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: AMPM 320-S does not address whether 97153 and 97155 may be billed for the same clock time. The policy routes every coding question elsewhere: "Refer to the Behavioral Health Services Billing Matrix and Medical Coding Resources on the AHCCCS website for more information regarding required coding information, including covered settings, modifiers for Behavior Analysis Trainee billing, or other billing/coding information."',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
        verifyVia:
          'Banner Health Plans at bannerhealth.com/bhpprovider — pull the current ABA Prior Authorization Form and ask the plan directly; none of this is published at plan level.',
      },
      dailyLimits: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: No per-day unit ceiling appears in AMPM 320-S; the policy sets clinical content, not claim edits, and defers unit and coding questions to the Behavioral Health Services Billing Matrix. Dosage is set case by case — services are prescribed "in specific dosages, frequency, intensity, and duration" by the recommending BHP — so the binding ceiling in practice is the Contractor\'s authorization.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
        verifyVia:
          'Banner Health Plans at bannerhealth.com/bhpprovider — pull the current ABA Prior Authorization Form and ask the plan directly; none of this is published at plan level.',
      },
      noteSignature: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: AMPM 320-S sets a reporting cadence, not a signature rule. Progress reports are required "at minimum, every six months" and must include member identification; background information (family dynamics, school placement, cultural considerations, prenatal and/or developmental history, medical history, sensory, dietary and adaptive needs, sleep patterns, medications); assessment findings; outcomes (measurable objectives, progress toward goals, clinical recommendations, treatment dosage, family role and outcomes); and care coordination (transition statement and individualized discharge criteria). Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
        verifyVia:
          'Banner Health Plans at bannerhealth.com/bhpprovider — pull the current ABA Prior Authorization Form and ask the plan directly; none of this is published at plan level.',
      },
      placeOfService: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: AMPM 320-S requires the treatment plan to "specify the setting(s) in which services will be delivered" but publishes no payable-setting list, pointing instead to the Behavioral Health Services Billing Matrix "regarding required coding information, including covered settings." What is documented at the rate level is that setting changes the money: the November 2023 fixed-rate notice pays home delivery (POS 12) roughly 10% above the clinic rate on every ABA code.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
        verifyVia:
          'Banner Health Plans at bannerhealth.com/bhpprovider — pull the current ABA Prior Authorization Form and ask the plan directly; none of this is published at plan level.',
      },
      billAsProvider: {
        value:
          'Follows the AHCCCS rule — Banner publishes no distinct ABA clinical policy, only its own ABA Prior Authorization Form: The claim line has to say who actually delivered the service. AHCCCS pays credential-tiered rates through modifiers — HM below bachelor\'s (technician level), HN bachelor\'s, HO master\'s, HP doctoral — and AMPM 320-S points to the Behavioral Health Services Billing Matrix for "modifiers for Behavior Analysis Trainee billing." Whose NPI goes in the rendering field is set per Contractor: UnitedHealthcare Community Plan, for instance, requires the rendering provider\'s 10-digit NPI in box 24J, "must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Banner Health Plans — behavioral health materials and forms', url: 'https://www.bannerhealth.com/bhpprovider/resources/bh/materials' },
        ],
      },
    },
    faq: [
      { q: 'Does Banner-University Family Care cover ABA?', a: 'Yes — as an AHCCCS ACC plan it covers Behavior Analysis Services under AMPM 320-S. Treatment requires PA via Banner\'s ABA Prior Authorization Form; the plan publishes no distinct clinical policy beyond the state baseline.' },
      { q: 'Does Banner require PA for the ABA assessment?', a: 'Not published — unlike Mercy Care and UHC, Banner\'s assessment-PA position isn\'t stated publicly. Verify with the plan or the current PA form before booking an assessment as auth-free.' },
      { q: 'What does Banner pay for ABA?', a: 'Not published. Benchmark against the AHCCCS physician fee schedule (97153 at $17.91–$23.69 per 15-minute unit by credential tier); your contract is the source of truth.' },
    ],
  },

  'health-choice-arizona': {
    slug: 'health-choice-arizona',
    family: 'bcbs',
    cardDesc: 'Now officially "Blue Cross Blue Shield of Arizona Health Choice"; grid-driven PA, no published ABA policy.',
    assessmentPA: 'Not published as a standing rule — read the 97151/97152 rows in the current PA Guidelines grid on healthchoiceaz.com, or call the PA line 1-800-322-8670 / fax 480-760-4732',
    treatmentPA: 'Not published as a standing rule — the plan runs PA from frequently revised PA Guidelines grids rather than an ABA program document; check the 97153–97158 rows in the live grid',
    dxRequired: 'No distinct plan policy published — AMPM 320-S baseline applies (autism dx not strictly required)',
    payer: 'Blue Cross Blue Shield of Arizona Health Choice',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · BCBSAZ Health Choice',
    h1: 'Blue Cross Blue Shield of Arizona Health Choice ABA coverage (AHCCCS plan).',
    metaTitle: 'BCBSAZ Health Choice (AHCCCS, formerly Health Choice Arizona) ABA Coverage | Carelu',
    metaDescription:
      'How Blue Cross Blue Shield of Arizona Health Choice (formerly branded "Health Choice Arizona") handles AHCCCS ABA — the AMPM 320-S state baseline, the frequently-updated PA grids that answer the code-level questions, and the northern-Arizona footprint.',
    intro: [
      'Blue Cross Blue Shield of Arizona\'s Medicaid vehicle is officially branded "Blue Cross Blue Shield of Arizona Health Choice" — AHCCCS\'s own current health plan list (revised 6/30/2026) uses this full name, not the older "Health Choice Arizona" branding this guide previously used; the coverage and mechanics below are unaffected by the naming update. Its strongest presence is in northern Arizona (Apache, Coconino, Mohave, Navajo, Yavapai) plus Maricopa, Gila, and Pinal — post-Care1st-merger, it competes mainly with Arizona Complete Health in the north. It publishes no distinct ABA clinical policy; its operational tool is the PA grid, updated frequently (versions have shipped effective 1/2024 through 5/2026). That makes the current grid, not a policy PDF, the document that answers the 9715x questions for this plan.',
    ],
    atGlance: [
      { label: 'Plan name', value: 'Blue Cross Blue Shield of Arizona Health Choice (formerly "Health Choice Arizona")' },
      { label: 'Plan type', value: 'ACC — northern GSA counties + Maricopa, Gila, Pinal (BCBSAZ)' },
      { label: 'Clinical rules', value: 'No distinct published ABA policy — AMPM 320-S baseline' },
      { label: 'PA source of truth', value: 'The current PA grid on healthchoiceaz.com — updated several times a year' },
      { label: 'Assessment/treatment PA', value: 'Not published as a standing rule — check the grid rows for 97151–97158' },
      { label: 'PA contacts', value: 'Fax 480-760-4732 · phone 1-800-322-8670' },
      { label: 'Portal', value: 'providerportal.healthchoiceaz.com' },
    ],
    sections: [
      {
        h2: 'Grid-driven PA on a state-baseline plan',
        body: [
          'Health Choice runs prior authorization from PA Guidelines grids rather than a published ABA program document, and the grids revise often — at least seven versions between January 2024 and May 2026. We could not verify the current grid rows for 97151 or 97153–97158, so the intake rule for this plan is procedural: pull the newest grid from healthchoiceaz.com (or ask via the PA line, 1-800-322-8670 / fax 480-760-4732) and read the 9715x rows before booking. Clinically, assume the AMPM 320-S baseline — no strict autism-diagnosis requirement, BHP-recommended services, 6-month progress reports — since no evidence suggests Health Choice layers distinct criteria on top.',
        ],
        cites: [
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
      {
        h2: 'Footprint: the northern-Arizona play',
        body: [
          'Health Choice\'s ACC footprint centers on the five northern counties — Apache, Coconino, Mohave, Navajo, Yavapai — where, after Care1st folded into Arizona Complete Health, the practical plan choice is Health Choice vs. AzCH, plus its Maricopa/Gila/Pinal presence. Providers building northern-Arizona intake should have both plans\' machinery mapped, because families in those counties will split between exactly these two.',
        ],
        cites: [
          { title: 'AHCCCS — Available Health Plans list', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis (any qualifying)', desc: 'AMPM 320-S baseline — ASD or another diagnosis justified by medical necessity.' },
      { title: 'Current PA grid rows for 9715x', desc: 'The grid revises several times a year — check the live version, not a saved copy.' },
      { title: 'County', desc: 'Northern counties are a Health Choice / AzCH duopoly — confirm which of the two the family actually holds.' },
      { title: 'Portal access', desc: 'providerportal.healthchoiceaz.com for submissions; PA phone and fax as fallback.' },
    ],
    sources: [
      { title: 'AHCCCS — Available Health Plans list (lists "Blue Cross Blue Shield of Arizona Health Choice")', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
      { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: AMPM 320-S sets no age bound of its own. Behavior Analysis Services are covered "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity," and the policy applies across ACC, ALTCS E/PD, DCS/CMDP, DES/DDD, the RBHA contracts and fee-for-service programs without an age criterion. In practice children reach the benefit through EPSDT, and nothing in the policy text excludes adults — screen on medical necessity, not birthday.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
      dxRecency: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: None at the state level. AMPM 320-S imposes no recency clock on the diagnostic evaluation — and no autism diagnosis at all is strictly required. What must be current is the assessment: services are "prescribed or recommended in specific dosages, frequency, intensity, and duration by a qualified BHP as the result of an assessment of the member." Plan-level overlays can be stricter, so check the per-plan guide before telling a family an old evaluation still counts.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: AMPM 320-S gates on who recommends ABA, not on who diagnoses: services must be "prescribed or recommended... by a qualified BHP." A Behavioral Health Professional is defined as an individual licensed under A.R.S. Title 32, Chapter 33 whose scope allows independent behavioral health practice (or practice under direct supervision, except a licensed substance abuse technician); a psychiatrist (A.R.S. § 36-501); a psychologist (A.R.S. § 32-2061); a physician; a Behavior Analyst (A.R.S. § 32-2091); a registered nurse practitioner licensed as an adult psychiatric and mental health nurse; or a registered nurse with psychiatric-mental health certification or one year of behavioral health experience.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: No single instrument is mandated. "Behavior Analysis Services shall be based upon assessment(s) that include Standardized and/or Non-standardized instruments through both direct and indirect methods." Standardized examples named in the policy: the Pervasive Developmental Disabilities Behavior Inventory, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales. Non-standardized examples: curriculum-referenced assessments and stimulus preference assessment procedures.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
      referral: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: A prescription or recommendation from a qualified Behavioral Health Professional, based on an assessment of the member, is the referral — AMPM 320-S requires nothing else and sets no prior-authorization rules of its own, leaving PA to the Contractors. The two largest plans both skip PA on the assessment codes: Mercy Care states no PA is needed for 97151 and 97152, and Optum\'s Arizona orientation states "All ABA services require prior authorization except 97151 and 97152."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
      telehealth: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: AMPM 320-S permits telehealth delivery but does not price it: the individualized treatment plan must "identify the modality by which the service will be delivered (whether in person or via telehealth, or in-group or individual setting, or combination thereof)." Which 9715x codes are actually payable remotely, and with which place-of-service code or modifier, lives in the AHCCCS telehealth code set and the Behavioral Health Services Billing Matrix, neither of which we could retrieve at this review — azahcccs.gov returns 403 to automated fetching.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
        verifyVia:
          'The current PA guidelines grid on healthchoiceaz.com, or the PA line 1-800-322-8670 / fax 480-760-4732 — the grids revise several times a year, so read the live version.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: A duty with no number attached. "Behavior Analysis Services shall be directed and overseen by Behavior Analysts and supported, where applicable, by Behavior Analysis Trainees and/or Behavior Technicians." The Behavior Analyst "is responsible for all aspects of clinical direction, supervision, and provider-level case management," for training Trainees and Technicians, for ensuring that "the extent, kind, and quality" of what they deliver matches their training and experience, and for their compliance with the policy and A.R.S. § 32-2091. A Behavior Analysis Trainee needs "direct and ongoing supervision consistent with the standards set by a nationally recognized Behavior Analyst certification board." AMPM 320-S publishes no supervision percentage and no caseload cap, so for RBT-credentialed staff the BACB floor is the operative number.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: AMPM 320-S does not address whether 97153 and 97155 may be billed for the same clock time. The policy routes every coding question elsewhere: "Refer to the Behavioral Health Services Billing Matrix and Medical Coding Resources on the AHCCCS website for more information regarding required coding information, including covered settings, modifiers for Behavior Analysis Trainee billing, or other billing/coding information."',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
        verifyVia:
          'The current PA guidelines grid on healthchoiceaz.com, or the PA line 1-800-322-8670 / fax 480-760-4732 — the grids revise several times a year, so read the live version.',
      },
      dailyLimits: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: No per-day unit ceiling appears in AMPM 320-S; the policy sets clinical content, not claim edits, and defers unit and coding questions to the Behavioral Health Services Billing Matrix. Dosage is set case by case — services are prescribed "in specific dosages, frequency, intensity, and duration" by the recommending BHP — so the binding ceiling in practice is the Contractor\'s authorization.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
        verifyVia:
          'The current PA guidelines grid on healthchoiceaz.com, or the PA line 1-800-322-8670 / fax 480-760-4732 — the grids revise several times a year, so read the live version.',
      },
      noteSignature: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: AMPM 320-S sets a reporting cadence, not a signature rule. Progress reports are required "at minimum, every six months" and must include member identification; background information (family dynamics, school placement, cultural considerations, prenatal and/or developmental history, medical history, sensory, dietary and adaptive needs, sleep patterns, medications); assessment findings; outcomes (measurable objectives, progress toward goals, clinical recommendations, treatment dosage, family role and outcomes); and care coordination (transition statement and individualized discharge criteria). Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
        verifyVia:
          'The current PA guidelines grid on healthchoiceaz.com, or the PA line 1-800-322-8670 / fax 480-760-4732 — the grids revise several times a year, so read the live version.',
      },
      placeOfService: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: AMPM 320-S requires the treatment plan to "specify the setting(s) in which services will be delivered" but publishes no payable-setting list, pointing instead to the Behavioral Health Services Billing Matrix "regarding required coding information, including covered settings." What is documented at the rate level is that setting changes the money: the November 2023 fixed-rate notice pays home delivery (POS 12) roughly 10% above the clinic rate on every ABA code.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
        verifyVia:
          'The current PA guidelines grid on healthchoiceaz.com, or the PA line 1-800-322-8670 / fax 480-760-4732 — the grids revise several times a year, so read the live version.',
      },
      billAsProvider: {
        value:
          'Follows the AHCCCS rule — BCBSAZ Health Choice publishes no distinct ABA clinical policy, running prior authorization from frequently revised PA grids instead: The claim line has to say who actually delivered the service. AHCCCS pays credential-tiered rates through modifiers — HM below bachelor\'s (technician level), HN bachelor\'s, HO master\'s, HP doctoral — and AMPM 320-S points to the Behavioral Health Services Billing Matrix for "modifiers for Behavior Analysis Trainee billing." Whose NPI goes in the rendering field is set per Contractor: UnitedHealthcare Community Plan, for instance, requires the rendering provider\'s 10-digit NPI in box 24J, "must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Health Choice Arizona — PA guidelines (grids)', url: 'https://www.healthchoiceaz.com/providers/pa-guidelines' },
        ],
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Arizona Health Choice cover ABA?', a: 'Yes — as an AHCCCS ACC plan, on the AMPM 320-S baseline. It publishes no distinct ABA clinical policy; PA requirements live in its frequently-updated PA grids.' },
      { q: 'Does BCBSAZ Health Choice require PA for ABA codes?', a: 'Not published as a standing rule — check the current PA grid rows for 97151–97158 on healthchoiceaz.com, or call the PA line at 1-800-322-8670. Grids have revised at least seven times since early 2024.' },
      { q: 'Is Health Choice Arizona now Blue Cross Blue Shield of Arizona Health Choice?', a: 'Yes — AHCCCS\'s official health plan roster (revised 6/30/2026) lists it as "Blue Cross Blue Shield of Arizona Health Choice." It has been a BCBSAZ subsidiary since BCBSAZ acquired Steward Health Choice Arizona; the plan\'s AHCCCS contract, coverage, and mechanics are unchanged by the naming update.' },
    ],
  },

  'molina-healthcare-arizona': {
    slug: 'molina-healthcare-arizona',
    family: 'molina',
    cardDesc: 'Smallest ACC footprint (3 Phoenix-metro counties); no published ABA policy — verify by phone.',
    assessmentPA: 'Not published — verify the 97151/97152 rows in the current Prior Auth and Pre-Service Review Guide, or call Healthcare Services at (844) 782-2678',
    treatmentPA: 'Not published as a standing ABA rule — the mechanics run through Molina\'s Prior Auth and Pre-Service Review Guide, with PA initiated at (844) 782-2678 or fax (833) 832-1015 and Availity Essentials as the encouraged portal',
    dxRequired: 'No distinct plan policy published — AMPM 320-S baseline applies (autism dx not strictly required)',
    payer: 'Molina Healthcare of Arizona',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · Molina Healthcare (AZ)',
    h1: 'Molina Healthcare of Arizona ABA coverage (AHCCCS plan).',
    metaTitle: 'Molina Healthcare of Arizona (AHCCCS) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of Arizona handles AHCCCS ABA — the AMPM 320-S state baseline, the Prior Auth and Pre-Service Review Guide, Availity Essentials submission, and the three-county Phoenix-metro footprint.',
    intro: [
      'Molina Healthcare of Arizona is the newest and smallest ACC plan — it entered with the 2022 ACC awards and covers three counties (Maricopa, Gila, Pinal), making it Phoenix-metro-centric. Like Banner and Health Choice, it publishes no distinct ABA clinical policy: the honest picture is the AMPM 320-S state baseline, with Molina\'s Prior Auth and Pre-Service Review Guide and its Healthcare Services line as the operational front door. Every ABA specific for this plan should be verified directly before quoting it to a family.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'ACC in Maricopa, Gila, Pinal (entered with the 2022 awards)' },
      { label: 'Clinical rules', value: 'No distinct published ABA policy — AMPM 320-S baseline' },
      { label: 'PA initiation', value: 'Healthcare Services (844) 782-2678 or fax (833) 832-1015' },
      { label: 'Portal', value: 'Availity Essentials (encouraged for submissions)' },
      { label: 'Assessment/treatment PA', value: 'Not published — verify against the current Prior Auth Guide' },
      { label: 'Rates', value: 'Not published — AHCCCS physician fee schedule is the benchmark' },
    ],
    sections: [
      {
        h2: 'The state baseline, with plan mechanics to verify',
        body: [
          'Nothing we could verify shows Molina layering clinical criteria beyond AMPM 320-S — so the coverage conversation follows the state guide: no strict autism-diagnosis requirement, BHP-recommended services based on assessment, 6-month progress reports. The mechanics run through Molina\'s Prior Auth and Pre-Service Review Guide, with PA initiated via Healthcare Services at (844) 782-2678 or fax (833) 832-1015, and Availity Essentials as the encouraged submission portal. The guide\'s current ABA rows — including whether 97151/97152 need PA — are the thing to check on first contact, because none of it is published as a standing ABA rule.',
        ],
        cites: [
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis (any qualifying)', desc: 'AMPM 320-S baseline — ASD or another diagnosis justified by medical necessity.' },
      { title: 'Current Prior Auth Guide rows', desc: 'Verify the ABA code rows (97151–97158) in the live guide, or via (844) 782-2678, before promising timelines.' },
      { title: 'County', desc: 'Molina only operates in Maricopa, Gila, and Pinal — outside those, the card is another plan\'s.' },
      { title: 'Availity access', desc: 'Molina encourages Availity Essentials — have the workflow ready rather than defaulting to fax.' },
    ],
    sources: [
      { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'AHCCCS — Available Health Plans list', url: 'https://www.azahcccs.gov/Members/Downloads/Resources/ENGLISH_HealthPlanList.pdf' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: AMPM 320-S sets no age bound of its own. Behavior Analysis Services are covered "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity," and the policy applies across ACC, ALTCS E/PD, DCS/CMDP, DES/DDD, the RBHA contracts and fee-for-service programs without an age criterion. In practice children reach the benefit through EPSDT, and nothing in the policy text excludes adults — screen on medical necessity, not birthday.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
      dxRecency: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: None at the state level. AMPM 320-S imposes no recency clock on the diagnostic evaluation — and no autism diagnosis at all is strictly required. What must be current is the assessment: services are "prescribed or recommended in specific dosages, frequency, intensity, and duration by a qualified BHP as the result of an assessment of the member." Plan-level overlays can be stricter, so check the per-plan guide before telling a family an old evaluation still counts.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: AMPM 320-S gates on who recommends ABA, not on who diagnoses: services must be "prescribed or recommended... by a qualified BHP." A Behavioral Health Professional is defined as an individual licensed under A.R.S. Title 32, Chapter 33 whose scope allows independent behavioral health practice (or practice under direct supervision, except a licensed substance abuse technician); a psychiatrist (A.R.S. § 36-501); a psychologist (A.R.S. § 32-2061); a physician; a Behavior Analyst (A.R.S. § 32-2091); a registered nurse practitioner licensed as an adult psychiatric and mental health nurse; or a registered nurse with psychiatric-mental health certification or one year of behavioral health experience.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: No single instrument is mandated. "Behavior Analysis Services shall be based upon assessment(s) that include Standardized and/or Non-standardized instruments through both direct and indirect methods." Standardized examples named in the policy: the Pervasive Developmental Disabilities Behavior Inventory, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales. Non-standardized examples: curriculum-referenced assessments and stimulus preference assessment procedures.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
      referral: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: A prescription or recommendation from a qualified Behavioral Health Professional, based on an assessment of the member, is the referral — AMPM 320-S requires nothing else and sets no prior-authorization rules of its own, leaving PA to the Contractors. The two largest plans both skip PA on the assessment codes: Mercy Care states no PA is needed for 97151 and 97152, and Optum\'s Arizona orientation states "All ABA services require prior authorization except 97151 and 97152."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
      telehealth: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: AMPM 320-S permits telehealth delivery but does not price it: the individualized treatment plan must "identify the modality by which the service will be delivered (whether in person or via telehealth, or in-group or individual setting, or combination thereof)." Which 9715x codes are actually payable remotely, and with which place-of-service code or modifier, lives in the AHCCCS telehealth code set and the Behavioral Health Services Billing Matrix, neither of which we could retrieve at this review — azahcccs.gov returns 403 to automated fetching.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
        verifyVia:
          'Molina Healthcare Services at (844) 782-2678 or fax (833) 832-1015, and the current Prior Auth and Pre-Service Review Guide.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: A duty with no number attached. "Behavior Analysis Services shall be directed and overseen by Behavior Analysts and supported, where applicable, by Behavior Analysis Trainees and/or Behavior Technicians." The Behavior Analyst "is responsible for all aspects of clinical direction, supervision, and provider-level case management," for training Trainees and Technicians, for ensuring that "the extent, kind, and quality" of what they deliver matches their training and experience, and for their compliance with the policy and A.R.S. § 32-2091. A Behavior Analysis Trainee needs "direct and ongoing supervision consistent with the standards set by a nationally recognized Behavior Analyst certification board." AMPM 320-S publishes no supervision percentage and no caseload cap, so for RBT-credentialed staff the BACB floor is the operative number.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: AMPM 320-S does not address whether 97153 and 97155 may be billed for the same clock time. The policy routes every coding question elsewhere: "Refer to the Behavioral Health Services Billing Matrix and Medical Coding Resources on the AHCCCS website for more information regarding required coding information, including covered settings, modifiers for Behavior Analysis Trainee billing, or other billing/coding information."',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
        verifyVia:
          'Molina Healthcare Services at (844) 782-2678 or fax (833) 832-1015, and the current Prior Auth and Pre-Service Review Guide.',
      },
      dailyLimits: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: No per-day unit ceiling appears in AMPM 320-S; the policy sets clinical content, not claim edits, and defers unit and coding questions to the Behavioral Health Services Billing Matrix. Dosage is set case by case — services are prescribed "in specific dosages, frequency, intensity, and duration" by the recommending BHP — so the binding ceiling in practice is the Contractor\'s authorization.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
        verifyVia:
          'Molina Healthcare Services at (844) 782-2678 or fax (833) 832-1015, and the current Prior Auth and Pre-Service Review Guide.',
      },
      noteSignature: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: AMPM 320-S sets a reporting cadence, not a signature rule. Progress reports are required "at minimum, every six months" and must include member identification; background information (family dynamics, school placement, cultural considerations, prenatal and/or developmental history, medical history, sensory, dietary and adaptive needs, sleep patterns, medications); assessment findings; outcomes (measurable objectives, progress toward goals, clinical recommendations, treatment dosage, family role and outcomes); and care coordination (transition statement and individualized discharge criteria). Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
        verifyVia:
          'Molina Healthcare Services at (844) 782-2678 or fax (833) 832-1015, and the current Prior Auth and Pre-Service Review Guide.',
      },
      placeOfService: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: AMPM 320-S requires the treatment plan to "specify the setting(s) in which services will be delivered" but publishes no payable-setting list, pointing instead to the Behavioral Health Services Billing Matrix "regarding required coding information, including covered settings." What is documented at the rate level is that setting changes the money: the November 2023 fixed-rate notice pays home delivery (POS 12) roughly 10% above the clinic rate on every ABA code.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
        verifyVia:
          'Molina Healthcare Services at (844) 782-2678 or fax (833) 832-1015, and the current Prior Auth and Pre-Service Review Guide.',
      },
      billAsProvider: {
        value:
          'Follows the AHCCCS rule — Molina publishes no distinct ABA clinical policy, only its Prior Auth and Pre-Service Review Guide: The claim line has to say who actually delivered the service. AHCCCS pays credential-tiered rates through modifiers — HM below bachelor\'s (technician level), HN bachelor\'s, HO master\'s, HP doctoral — and AMPM 320-S points to the Behavioral Health Services Billing Matrix for "modifiers for Behavior Analysis Trainee billing." Whose NPI goes in the rendering field is set per Contractor: UnitedHealthcare Community Plan, for instance, requires the rendering provider\'s 10-digit NPI in box 24J, "must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'Molina Healthcare of Arizona — Prior Auth and Pre-Service Review Guide', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/az/Forms/MHAZ-Prior-Auth-and-Pre-Service-Review-Guide-508.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of Arizona cover ABA?', a: 'Yes — as an AHCCCS ACC plan on the AMPM 320-S baseline. Molina publishes no distinct ABA clinical policy; PA mechanics run through its Prior Auth and Pre-Service Review Guide and Availity Essentials.' },
      { q: 'Does Molina require PA for ABA in Arizona?', a: 'Its code-level ABA PA rules aren\'t published as a standing rule — verify against the current Prior Auth Guide or call Healthcare Services at (844) 782-2678 before booking.' },
      { q: 'Where does Molina operate in Arizona?', a: 'Three counties: Maricopa, Gila, and Pinal — the smallest ACC footprint, centered on Phoenix metro.' },
    ],
  },

  'arizona-ddd': {
    slug: 'arizona-ddd',
    cardDesc: 'The second funnel: ALTCS-DD members get ABA via Mercy Care DD or UHCCP DD, statewide.',
    assessmentPA: 'Follows the member\'s DDD Health Plan — Mercy Care DD and UHCCP DD both skip PA on 97151/97152',
    treatmentPA: 'Through the member\'s DDD Health Plan (Mercy Care DD or UHCCP DD), on the same ABA PA machinery as their ACC lines',
    dxRequired: 'No — AMPM 320-S applies; autism is a DDD qualifying-condition category, but ABA rides on medical necessity',
    payer: 'DES/DDD (Arizona Division of Developmental Disabilities)',
    state: 'AZ', kind: 'medicaid-mco', parent: 'AHCCCS (Arizona Medicaid)',
    pill: 'Payer Guide · Arizona DES/DDD',
    h1: 'Arizona DES/DDD ABA coverage (the ALTCS-DD path).',
    metaTitle: 'Arizona DES/DDD (ALTCS-DD) ABA Coverage & Health Plans | Carelu',
    metaDescription:
      'How ALTCS-DD members get ABA in Arizona — the DES/DDD second funnel, the two statewide DDD Health Plans (Mercy Care DD and UHCCP DD), the over-age-3 ALTCS gate, and the bundled habilitation/respite conversation.',
    intro: [
      'The Division of Developmental Disabilities (DES/DDD) is Arizona\'s second ABA funnel: ALTCS-eligible members with developmental disabilities get their physical and behavioral health — including ABA — not through an ACC plan but through one of two statewide DDD Health Plans, Mercy Care DD or UnitedHealthcare Community Plan DD (both effective October 2019). Clinically nothing changes — AMPM 320-S governs DES/DDD by its own terms — but structurally this is a separate eligibility gate and plan-choice flow, and routing a DDD family down the ACC path (or vice versa) burns weeks. Intake teams that ask the DDD question first route correctly.',
    ],
    atGlance: [
      { label: 'What it is', value: 'The ALTCS-DD path — DDD subcontracts health care to two statewide DDD Health Plans' },
      { label: 'The plans', value: 'Mercy Care DD and UHCCP DD ("DD by UHCCP") — member chooses; both statewide' },
      { label: 'Clinical rules', value: 'AMPM 320-S — identical to the ACC path' },
      { label: 'Eligibility gate', value: 'Over age 3, ALTCS approval is the gate to DDD-funded services; autism is a qualifying-condition category' },
      { label: 'Assessment PA', value: 'None at either DDD plan — same 97151/97152 rule as their ACC lines' },
      { label: 'Bundled services', value: 'DDD members also get habilitation and respite (HCBS) alongside ABA' },
    ],
    sections: [
      {
        h2: 'The dual path, from the DDD side',
        body: [
          'Children under 21 can get ABA either through their ACC plan under EPSDT or — if ALTCS/DDD-eligible — through a DDD Health Plan. Autism is a DDD qualifying-condition category, and over age 3 ALTCS approval is the gate to DDD-funded services (habilitation, respite, ABA). Once eligible, the family chooses between Mercy Care DD and UHCCP DD, and unlike the ACC side, both DDD Health Plans are statewide — county doesn\'t restrict DDD members the way ACC geographic service areas do. Authorization then runs through the chosen plan\'s ABA machinery, identical to its ACC line: no PA on 97151/97152 at either plan, treatment PA on their respective forms (Mercy Care\'s ABA PA form with 6-month auths; Optum\'s Provider Express Treatment Form for UHCCP DD). DDD ALTCS also maintains its own service-approval matrix on the LTSS side.',
        ],
        cites: [
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AZA United — navigating the systems of care (the ALTCS gate over age 3)', url: 'https://azaunited.org/blog/navigating-the-systems-of-care' },
        ],
      },
      {
        h2: 'Why the DDD conversation is different at intake',
        body: [
          'A DDD family isn\'t just an ABA inquiry — DDD members also receive habilitation and respite through home- and community-based services alongside ABA, a bundled-service conversation ACC-only families never have. Intake that recognizes a DDD card (UHCCP DD cards read "DDD Health Plan by UHCCP," Group AZDDD; Mercy Care DD is branded accordingly) can coordinate the ABA request with the family\'s DDD support coordinator instead of working blind. For families who look DDD-eligible but aren\'t enrolled, the ALTCS application is the long pole — flag it early, and run the ACC path in parallel where EPSDT coverage already exists.',
        ],
        cites: [
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'DDD enrollment + ALTCS status', desc: 'Enrolled DDD member, ALTCS application pending, or ACC-only — three different routes with different timelines.' },
      { title: 'Which DDD Health Plan', desc: 'Mercy Care DD or UHCCP DD — the choice sets the PA form, portal, and auth cadence.' },
      { title: 'Support coordinator contact', desc: 'DDD members have one — coordinate the ABA request with the existing service plan.' },
      { title: 'Other DDD services in place', desc: 'Habilitation and respite hours shape the realistic ABA schedule.' },
    ],
    sources: [
      { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
      { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
      { title: 'AZA United — navigating the systems of care', url: 'https://azaunited.org/blog/navigating-the-systems-of-care' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: AMPM 320-S sets no age bound of its own. Behavior Analysis Services are covered "for individuals with Autism Spectrum Disorder (ASD) and/or other diagnoses as justified by medical necessity," and the policy applies across ACC, ALTCS E/PD, DCS/CMDP, DES/DDD, the RBHA contracts and fee-for-service programs without an age criterion. In practice children reach the benefit through EPSDT, and nothing in the policy text excludes adults — screen on medical necessity, not birthday.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      dxRecency: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: None at the state level. AMPM 320-S imposes no recency clock on the diagnostic evaluation — and no autism diagnosis at all is strictly required. What must be current is the assessment: services are "prescribed or recommended in specific dosages, frequency, intensity, and duration by a qualified BHP as the result of an assessment of the member." Plan-level overlays can be stricter, so check the per-plan guide before telling a family an old evaluation still counts.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      diagnosingProviders: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: AMPM 320-S gates on who recommends ABA, not on who diagnoses: services must be "prescribed or recommended... by a qualified BHP." A Behavioral Health Professional is defined as an individual licensed under A.R.S. Title 32, Chapter 33 whose scope allows independent behavioral health practice (or practice under direct supervision, except a licensed substance abuse technician); a psychiatrist (A.R.S. § 36-501); a psychologist (A.R.S. § 32-2061); a physician; a Behavior Analyst (A.R.S. § 32-2091); a registered nurse practitioner licensed as an adult psychiatric and mental health nurse; or a registered nurse with psychiatric-mental health certification or one year of behavioral health experience.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      diagnosticTools: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: No single instrument is mandated. "Behavior Analysis Services shall be based upon assessment(s) that include Standardized and/or Non-standardized instruments through both direct and indirect methods." Standardized examples named in the policy: the Pervasive Developmental Disabilities Behavior Inventory, the Brigance Inventory of Early Development and the Vineland Adaptive Behavior Scales. Non-standardized examples: curriculum-referenced assessments and stimulus preference assessment procedures.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      referral: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: A prescription or recommendation from a qualified Behavioral Health Professional, based on an assessment of the member, is the referral — AMPM 320-S requires nothing else and sets no prior-authorization rules of its own, leaving PA to the Contractors. The two largest plans both skip PA on the assessment codes: Mercy Care states no PA is needed for 97151 and 97152, and Optum\'s Arizona orientation states "All ABA services require prior authorization except 97151 and 97152."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      telehealth: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: AMPM 320-S permits telehealth delivery but does not price it: the individualized treatment plan must "identify the modality by which the service will be delivered (whether in person or via telehealth, or in-group or individual setting, or combination thereof)." Which 9715x codes are actually payable remotely, and with which place-of-service code or modifier, lives in the AHCCCS telehealth code set and the Behavioral Health Services Billing Matrix, neither of which we could retrieve at this review — azahcccs.gov returns 403 to automated fetching.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
        verifyVia:
          'The member\'s DDD Health Plan — Mercy Care DD or UnitedHealthcare Community Plan DD — plus the DDD support coordinator on the service-plan side.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: A duty with no number attached. "Behavior Analysis Services shall be directed and overseen by Behavior Analysts and supported, where applicable, by Behavior Analysis Trainees and/or Behavior Technicians." The Behavior Analyst "is responsible for all aspects of clinical direction, supervision, and provider-level case management," for training Trainees and Technicians, for ensuring that "the extent, kind, and quality" of what they deliver matches their training and experience, and for their compliance with the policy and A.R.S. § 32-2091. A Behavior Analysis Trainee needs "direct and ongoing supervision consistent with the standards set by a nationally recognized Behavior Analyst certification board." AMPM 320-S publishes no supervision percentage and no caseload cap, so for RBT-credentialed staff the BACB floor is the operative number.',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
      concurrentBilling: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: AMPM 320-S does not address whether 97153 and 97155 may be billed for the same clock time. The policy routes every coding question elsewhere: "Refer to the Behavioral Health Services Billing Matrix and Medical Coding Resources on the AHCCCS website for more information regarding required coding information, including covered settings, modifiers for Behavior Analysis Trainee billing, or other billing/coding information."',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
        verifyVia:
          'The member\'s DDD Health Plan — Mercy Care DD or UnitedHealthcare Community Plan DD — plus the DDD support coordinator on the service-plan side.',
      },
      dailyLimits: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: No per-day unit ceiling appears in AMPM 320-S; the policy sets clinical content, not claim edits, and defers unit and coding questions to the Behavioral Health Services Billing Matrix. Dosage is set case by case — services are prescribed "in specific dosages, frequency, intensity, and duration" by the recommending BHP — so the binding ceiling in practice is the Contractor\'s authorization.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
        verifyVia:
          'The member\'s DDD Health Plan — Mercy Care DD or UnitedHealthcare Community Plan DD — plus the DDD support coordinator on the service-plan side.',
      },
      noteSignature: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: AMPM 320-S sets a reporting cadence, not a signature rule. Progress reports are required "at minimum, every six months" and must include member identification; background information (family dynamics, school placement, cultural considerations, prenatal and/or developmental history, medical history, sensory, dietary and adaptive needs, sleep patterns, medications); assessment findings; outcomes (measurable objectives, progress toward goals, clinical recommendations, treatment dosage, family role and outcomes); and care coordination (transition statement and individualized discharge criteria). Who signs a session note, and within what window, is not stated.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
        verifyVia:
          'The member\'s DDD Health Plan — Mercy Care DD or UnitedHealthcare Community Plan DD — plus the DDD support coordinator on the service-plan side.',
      },
      placeOfService: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: AMPM 320-S requires the treatment plan to "specify the setting(s) in which services will be delivered" but publishes no payable-setting list, pointing instead to the Behavioral Health Services Billing Matrix "regarding required coding information, including covered settings." What is documented at the rate level is that setting changes the money: the November 2023 fixed-rate notice pays home delivery (POS 12) roughly 10% above the clinic rate on every ABA code.',
        status: 'unverified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
        verifyVia:
          'The member\'s DDD Health Plan — Mercy Care DD or UnitedHealthcare Community Plan DD — plus the DDD support coordinator on the service-plan side.',
      },
      billAsProvider: {
        value:
          'Identical to the ACC path — AMPM 320-S applies to DES/DDD by its own terms, and authorization then runs through the member\'s chosen DDD Health Plan (Mercy Care DD or UHCCP DD) on that plan\'s ABA machinery: The claim line has to say who actually delivered the service. AHCCCS pays credential-tiered rates through modifiers — HM below bachelor\'s (technician level), HN bachelor\'s, HO master\'s, HP doctoral — and AMPM 320-S points to the Behavioral Health Services Billing Matrix for "modifiers for Behavior Analysis Trainee billing." Whose NPI goes in the rendering field is set per Contractor: UnitedHealthcare Community Plan, for instance, requires the rendering provider\'s 10-digit NPI in box 24J, "must be an active AHCCCS registered provider (The rendering provider is the BCBA/Licensed Clinician)."',
        status: 'verified',
        cites: [
          { title: 'AMPM 320-S — Behavior Analysis Services (AHCCCS)', url: 'https://www.azahcccs.gov/shared/Downloads/MedicalPolicyManual/300/320S.pdf' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
          { title: 'DES — DDD Health Plans information', url: 'https://des.az.gov/services/disabilities/developmental-disabilities/individuals-and-families/supports-and-services/ddd-health-plans-info' },
        ],
      },
    },
    faq: [
      { q: 'How do DDD members get ABA in Arizona?', a: 'Through their chosen DDD Health Plan — Mercy Care DD or UHCCP DD, both statewide — on the same AMPM 320-S clinical rules and the same plan-level ABA PA machinery as those plans\' ACC lines.' },
      { q: 'Can a child get ABA through an ACC plan instead of DDD?', a: 'Yes — children under 21 can get ABA via their ACC plan under EPSDT even without DDD. If the child is ALTCS/DDD-eligible, the DDD path adds bundled services (habilitation, respite); over age 3, ALTCS approval is the gate.' },
      { q: 'Does county matter for DDD members?', a: 'No — both DDD Health Plans are statewide, unlike ACC plans, which are restricted to geographic service areas.' },
    ],
  },

  'aetna-arizona': {
    slug: 'aetna-arizona',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + Steven\'s Law with its caps repealed by SB 1590 (2025).',
    assessmentPA: 'Required — precertification (form GR-69017-4), per Aetna\'s national CPB 0554 policy',
    treatmentPA: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
    dxRequired: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
    payer: 'Aetna in Arizona',
    state: 'AZ', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Arizona',
    h1: 'Aetna ABA coverage in Arizona: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Arizona: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Arizona families — the national clinical policy, prior authorization, Steven\'s Law with its dollar caps repealed by SB 1590 (2025), A.R.S. § 32-2091 behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Arizona, an Aetna card means three layers at once: the carrier\'s national clinical policy, Arizona\'s autism insurance mandate (Steven\'s Law, its dollar caps freshly repealed by SB 1590), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — plus one Arizona twist: Aetna also administers Mercy Care, so "we have Aetna" often means a Medicaid member.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Steven\'s Law (A.R.S. § 20-826.04 and three parallel sections)' },
      { label: 'Mandate caps', value: 'NONE — the $50K/$25K annual caps were repealed by SB 1590 (2025)' },
      { label: 'Mandate age', value: 'No explicit age limit remains — the age tiers lived in the repealed cap subsection' },
      { label: 'Exempt from mandate', value: 'Individual & small-employer policies; self-funded ERISA' },
      { label: 'Licensure', value: 'AZ Licensed Behavior Analyst (A.R.S. § 32-2091, Board of Psychologist Examiners)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Arizona',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Arizona is the legal floor underneath it: the state mandate below governs what fully-insured group plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Arizona.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Arizona mandate: Steven\'s Law, caps repealed',
        body: [
          'Steven\'s Law (HB 2847, 2008) lives in four parallel sections of the insurance code — A.R.S. §§ 20-826.04, 20-1057.11, 20-1402.03, and 20-1404.03 — covering state-regulated group coverage: large-group contracts, HMO plans, and group and blanket disability policies. Plans may not deny or limit treatment based solely on an autism spectrum disorder diagnosis, and may not exclude medically necessary behavioral therapy, which the statute defines to include ABA (discrete trial training, pivotal response training, intensive behavioral intervention), delivered or supervised by a licensed or certified provider. The headline change: SB 1590 (signed May 7, 2025) struck the dollar-cap subsection from all four sections — the old $50,000/year (under age 9) and $25,000/year (ages 9–16) behavioral-therapy maximums are repealed, taking the statute\'s only age tiers with them, and the ASD definition now tracks the current DSM. No annual dollar ceiling remains on any state-regulated group plan (federal parity had already made the caps largely unenforceable; SB 1590 cleaned the statute to match — do not treat the old $50K/$25K numbers as current). Exemptions: policies issued to an individual or small employer (those reach ABA via the ACA EHB benchmark instead), limited-benefit coverage, and self-funded ERISA plans. Ordinary cost sharing is still permitted.',
        ],
        cites: [
          { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
          { title: 'A.R.S. § 20-826.04 — current text (caps absent)', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
          { title: 'Autism Speaks — Arizona state-regulated insurance coverage', url: 'https://www.autismspeaks.org/arizona-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'Aetna Medicaid in Arizona: Mercy Care',
        body: [
          'A family saying "we have Aetna" in Arizona may actually be a Mercy Care member — Mercy Care is administered by Aetna Medicaid Administrators LLC and covers the largest Phoenix-metro Medicaid, DDD, and foster-care books. Mercy Care runs on AHCCCS rules (AMPM 320-S), not this commercial policy: no autism diagnosis required, no PA on assessment codes. Verify which line of business the card belongs to, and use the dedicated Mercy Care guide for the Medicaid plan. Aetna publishes no Arizona-specific commercial ABA policy or supplement — the national policy plus the state mandate is the whole commercial picture.',
        ],
        cites: [
          { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Arizona',
        body: [
          'Arizona requires a state license to practice behavior analysis — A.R.S. § 32-2091, administered by the Arizona Board of Psychologist Examiners (behavior analysts sit under the psychology board, not a standalone board) — and BCBA certification alone is not sufficient; AHCCCS itself defines "Behavior Analyst" as a person licensed under § 32-2091. On rates: Aetna does not publish commercial ABA fee schedules for Arizona (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against the AHCCCS fee schedule (97153 at $17.91–$23.69 per 15-minute unit by credential tier), remembering the ABA codes live on the AHCCCS physician fee schedule, not the behavioral-health one.',
        ],
        cites: [
          { title: 'A.R.S. § 32-2091 — behavior analyst licensure', url: 'https://www.azleg.gov/ars/32/02091.htm' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA (exempt) vs. individual/small-group (EHB benchmark) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Commercial Aetna vs. Mercy Care (Medicaid, Aetna-administered) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — the commercial policy is ASD-only.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
      { title: 'A.R.S. § 20-826.04 — current text', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
      { title: 'Autism Speaks — Arizona state-regulated insurance coverage', url: 'https://www.autismspeaks.org/arizona-state-regulated-insurance-coverage' },
      { title: 'A.R.S. § 32-2091 — behavior analyst licensure', url: 'https://www.azleg.gov/ars/32/02091.htm' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'Mercy Care — Applied Behavior Analysis provider page', url: 'https://www.mercycareaz.org/providers/applied-behavior-analysis.html' },
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Steven\'s Law now carries no explicit age limit: SB 1590 (signed May 7, 2025) struck the dollar-cap subsection from all four sections of the mandate, and the age tiers — under 9, and 9 through 16 — lived inside that subsection. Optum\'s own state-mandate entry describes the change as repealing "the maximum benefit limitations for behavioral therapy coverage for eligible persons who are 16 years old and younger." The carrier\'s national ABA policy adds no age bound of its own, so age comes from the benefit document, not the statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
          { title: 'A.R.S. § 20-826.04 — current text (caps absent)', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
      },
      dxRecency: {
        value:
          'Aetna puts the recency clock on the functional assessment, not the diagnosis: medical necessity requires "demonstration of functional impairment on a standardized scale of functioning in the past 12 months," and the impairment must be at least one standard deviation below the population mean or represent a significant risk of harm to self or others. The ABA Medical Necessity Guide sets no expiry on the ASD diagnosis itself.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"There is a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10/ F84.0; F84.3 - F84.9) obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." Note the code set the guide actually prints: F84.0 plus F84.3–F84.9, which leaves out F84.1 and F84.2.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      diagnosticTools: {
        value:
          'No diagnostic instrument is mandated; the named instruments sit on the functional-impairment test — "the Vineland Adaptive Behavior Scales 3 (VABS-3), the Adaptive Behavior Assessment Scale (ABAS), VB-MAPP or ABLLS" are given as examples of the standardized scale that must show impairment within the past 12 months.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required by the national guide — the gate is the diagnosis "obtained by an appropriate provider" plus precertification. The only prescription requirement Aetna publishes is its Maryland exhibit (COMAR 31.10.39), where the child\'s primary care or specialty physician must perform the evaluation and prescribe the treatment with specific goals; that exhibit does not reach plans outside Maryland.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
      telehealth: {
        value:
          'Not published. Aetna\'s ABA Medical Necessity Guide and CPB 0554 set medical-necessity criteria and precertification requirements but say nothing about which ABA codes may be delivered remotely, or with which place-of-service code.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
        verifyVia:
          'Aetna provider services at the number on the member\'s ID card, and the plan\'s telehealth/virtual-care policy — confirm before scheduling remote 97155 or 97156.',
      },
    },
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
      },
      dailyLimits: {
        value:
          'Not published. Aetna\'s ABA documents set medical-necessity criteria and precertification requirements for 97151–97158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies. The guide does publish typical intensity bands — comprehensive ABA 10–25 hours/week, focused ABA 1–20 hours/week — as clinical guidance, not claim edits.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'Aetna provider services; confirm before promising a family more than four hours a day of 97153.',
      },
      noteSignature: {
        value:
          'Not published in Aetna\'s ABA materials — no rule on who signs a session note or within what window.',
        status: 'unverified',
        verifyVia:
          'The Aetna provider manual and your participation agreement\'s documentation clause.',
      },
      placeOfService: {
        value:
          'Aetna does not publish a POS code list for ABA. The one place-of-service boundary it does state is the schools carve-out: pursuant to applicable law Aetna "is not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act." That is a limit on paying for what the IEP owes, not a blanket ban on the school setting — and it yields to a stronger state mandate. Where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'The member\'s benefit document, and Aetna provider services for whether school-setting ABA is payable on that plan.',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician. "Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise." The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Arizona?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Steven\'s Law for state-regulated group plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does Arizona still cap ABA benefits at $50,000 a year?', a: 'No — SB 1590 (signed May 7, 2025) repealed the $50,000/$25,000 annual behavioral-therapy caps from all four Steven\'s Law sections. No annual dollar ceiling remains on any state-regulated group plan.' },
      { q: 'What does Aetna pay for ABA in Arizona?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the AHCCCS physician fee schedule and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-arizona': {
    slug: 'cigna-arizona',
    family: 'cigna',
    cardDesc: 'EN0499 (no AZ carve-out) + Steven\'s Law with its caps repealed by SB 1590 (2025).',
    assessmentPA: 'Not required for assessment codes 97151, 97152, 0362T (per national policy EN0499)',
    treatmentPA: 'Required — assessment + treatment plan with the ABA PA form (EN0499)',
    dxRequired: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
    payer: 'Cigna / Evernorth in Arizona',
    state: 'AZ', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Arizona',
    h1: 'Cigna / Evernorth ABA coverage in Arizona: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Arizona: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Arizona families — national policy EN0499, prior authorization, Steven\'s Law with its dollar caps repealed by SB 1590 (2025), A.R.S. § 32-2091 licensure, and what intake should verify.',
    intro: [
      'For an intake team in Arizona, a Cigna card means three layers at once: the carrier\'s national clinical policy, Arizona\'s autism insurance mandate (Steven\'s Law, its dollar caps freshly repealed by SB 1590), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Steven\'s Law (A.R.S. § 20-826.04 and three parallel sections)' },
      { label: 'Mandate caps', value: 'NONE — the $50K/$25K annual caps were repealed by SB 1590 (2025)' },
      { label: 'Mandate age', value: 'No explicit age limit remains — the age tiers lived in the repealed cap subsection' },
      { label: 'Exempt from mandate', value: 'Individual & small-employer policies; self-funded ERISA' },
      { label: 'Licensure', value: 'AZ Licensed Behavior Analyst (A.R.S. § 32-2091, Board of Psychologist Examiners)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Arizona',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form — EN0499 expects a confirmed ASD diagnosis (F84.0–F84.9, Rett excluded) by an independently licensed professional, a current-version standardized assessment instrument (e.g., Vineland-3) administered within 60 days before treatment start, and an individualized plan with baseline data. That clinical policy is national — what changes in Arizona is the legal floor underneath it: the state mandate below governs what fully-insured group plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Arizona.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Arizona mandate: Steven\'s Law, caps repealed',
        body: [
          'Steven\'s Law (HB 2847, 2008) lives in four parallel sections of the insurance code — A.R.S. §§ 20-826.04, 20-1057.11, 20-1402.03, and 20-1404.03 — covering state-regulated group coverage: large-group contracts, HMO plans, and group and blanket disability policies. Plans may not deny or limit treatment based solely on an autism spectrum disorder diagnosis, and may not exclude medically necessary behavioral therapy, which the statute defines to include ABA (discrete trial training, pivotal response training, intensive behavioral intervention), delivered or supervised by a licensed or certified provider. The headline change: SB 1590 (signed May 7, 2025) struck the dollar-cap subsection from all four sections — the old $50,000/year (under age 9) and $25,000/year (ages 9–16) behavioral-therapy maximums are repealed, taking the statute\'s only age tiers with them, and the ASD definition now tracks the current DSM. No annual dollar ceiling remains on any state-regulated group plan (federal parity had already made the caps largely unenforceable; SB 1590 cleaned the statute to match — do not treat the old $50K/$25K numbers as current). Exemptions: policies issued to an individual or small employer (those reach ABA via the ACA EHB benchmark instead), limited-benefit coverage, and self-funded ERISA plans. Ordinary cost sharing is still permitted.',
        ],
        cites: [
          { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
          { title: 'A.R.S. § 20-826.04 — current text (caps absent)', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
          { title: 'Autism Speaks — Arizona state-regulated insurance coverage', url: 'https://www.autismspeaks.org/arizona-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No Arizona carve-out in EN0499',
        body: [
          'We checked: the current EN0499\'s state-mandate paragraph names only New York and Virginia — there is no Arizona carve-out, so Arizona fully-insured business runs on the standard EN0499 criteria, including the no-assessment-PA fast path and the 60-day assessment-instrument recency rule. Cigna publishes no Arizona-specific ABA policy or supplement, and it runs no AHCCCS Medicaid plan in Arizona. SB 1590\'s cap repeal still binds Cigna\'s Arizona-regulated group plans at the benefit level regardless of the clinical policy — so benefits verification (plan funding type, benefit terms) is where the Arizona-specific answers come from.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Arizona',
        body: [
          'Arizona requires a state license to practice behavior analysis — A.R.S. § 32-2091, administered by the Arizona Board of Psychologist Examiners (behavior analysts sit under the psychology board, not a standalone board) — and BCBA certification alone is not sufficient; AHCCCS itself defines "Behavior Analyst" as a person licensed under § 32-2091. On rates: Cigna does not publish commercial ABA fee schedules for Arizona (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against the AHCCCS fee schedule (97153 at $17.91–$23.69 per 15-minute unit by credential tier), remembering the ABA codes live on the AHCCCS physician fee schedule, not the behavioral-health one.',
        ],
        cites: [
          { title: 'A.R.S. § 32-2091 — behavior analyst licensure', url: 'https://www.azleg.gov/ars/32/02091.htm' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA (exempt) vs. individual/small-group (EHB benchmark) — it decides which rulebook governs.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report + assessment recency', desc: 'DSM-5 ASD diagnosis by an independently licensed professional, and a standardized instrument within 60 days of treatment start (EN0499).' },
      { title: 'Age', desc: 'Arizona\'s mandate now carries no explicit age limit — flag edge cases for the benefit analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
      { title: 'A.R.S. § 20-826.04 — current text', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
      { title: 'Autism Speaks — Arizona state-regulated insurance coverage', url: 'https://www.autismspeaks.org/arizona-state-regulated-insurance-coverage' },
      { title: 'A.R.S. § 32-2091 — behavior analyst licensure', url: 'https://www.azleg.gov/ars/32/02091.htm' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Steven\'s Law now carries no explicit age limit: SB 1590 (signed May 7, 2025) struck the dollar-cap subsection from all four sections of the mandate, and the age tiers — under 9, and 9 through 16 — lived inside that subsection. Optum\'s own state-mandate entry describes the change as repealing "the maximum benefit limitations for behavioral therapy coverage for eligible persons who are 16 years old and younger." The carrier\'s national ABA policy adds no age bound of its own, so age comes from the benefit document, not the statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
          { title: 'A.R.S. § 20-826.04 — current text (caps absent)', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
      },
      dxRecency: {
        value:
          'EN0499 puts no expiry on the ASD diagnosis — it requires only that the submission carry "the name, credentials, and type of licensure of the individual who made the diagnosis" and "the date on which the diagnosis was most recently made." The 60-day clocks run on the assessment instead: administration of the standardized assessment instrument must be completed within 60 days prior to the start of treatment, and quantitative baseline data must be collected within 60 days prior to the start of treatment.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"A confirmed diagnosis of autism spectrum disorder (ASD); (ICD-10-CM Diagnosis Codes F84.0 – F84.9, with the exception of F84.2, Rett syndrome) based on the criteria in the DSM-5-TR by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice." The ABA assessment itself is then performed by a BCBA, LBA, or an independently licensed mental health clinician with documented ABA training.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosticTools: {
        value:
          'EN0499 names no instrument but sets six tests the instrument must pass: it must be reliable, valid and standardized, measure functioning in the DSM-5-TR ASD domains (social communication/interaction; restricted, repetitive behavior), be completed in its entirety and as designed, have established reliability and validity for the population tested, be administered by someone trained to administer and interpret it, and be the most current version — "must be the Vineland-3 vs. Vineland-II." Date of administration, respondent and form type must be recorded.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'No referral or physician order is required. Prior authorization is not required on assessment codes 97151, 97152 or 0362T with an autism diagnosis "as long as the provider is independently licensed or a Board Certified Behavior Analyst (BCBA) and the patient\'s policy covers ABA services"; the authorization gate arrives at the treatment step, with the completed assessment and treatment plan.',
        status: 'verified',
        cites: [
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      telehealth: {
        value:
          '"All ABA CPT codes are covered telehealth services," subject to EN0499. The policy adds a documentation duty rather than a code restriction: where services are delivered "via telehealth modalities," the record must show the service still meets the definition of direct treatment/direct engagement "regardless of treatment location or modality" and is conducted per the treatment-plan goals.',
        status: 'verified',
        cites: [
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'One to two hours per ten hours of direct treatment. "Direct case supervision (occurs concurrently with the delivery of direct treatment to the individual and consists of BCBA face-to-face with the individual and either the Registered Behavior Technician or the Board Certified Assistant Behavior Analyst) and indirect case supervision is consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment." When direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided, and the supervisor\'s name and credentials must be documented.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Yes — and Evernorth writes it as an explicit carve-out from its general rule: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." Both must be with the patient; analyst time away from the patient is not inside the exception.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published. The resource guide sets the code set (97151–97158, 0362T and 0373T only, all in 15-minute increments) but no per-day unit ceiling and no statement of which MUE table Evernorth applies.',
        status: 'unverified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273.',
      },
      noteSignature: {
        value:
          'Not published in the autism resource guide — no rule on who signs a session note or when. EN0499 does require the name and credentials of the supervising and stakeholder-training providers to be documented, and dates of administration on every assessment instrument.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
      },
      placeOfService: {
        value:
          'No POS list is published. EN0499 requires the treatment plan to identify the "settings and environments where treatment will occur (e.g., home, clinic, school, community setting)" and to collect data corresponding to each location of service; for settings with competing behavioral expectations — "academic setting, vocational placement, services delivered via telehealth modalities" — the record must show the service still meets the direct-treatment definition. Which of those settings is payable is a benefit-document question.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
        verifyVia:
          'Evernorth Provider Services at 800.926.2273 for school and community settings, plus the member\'s benefit document.',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Practically, the BCBA\'s credential is what the claim rides on for technician-delivered 97153.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Arizona?', a: 'Yes — under national policy EN0499 for ASD (no Arizona carve-out exists), layered on Steven\'s Law for state-regulated group plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does Arizona still cap ABA benefits at $50,000 a year?', a: 'No — SB 1590 (signed May 7, 2025) repealed the $50,000/$25,000 annual behavioral-therapy caps from all four Steven\'s Law sections. No annual dollar ceiling remains on any state-regulated group plan.' },
      { q: 'What does Cigna pay for ABA in Arizona?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the AHCCCS physician fee schedule and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-arizona': {
    slug: 'unitedhealthcare-arizona',
    family: 'unitedhealthcare',
    cardDesc: 'BH803ABASCC + Optum\'s AZ state-mandate entry reflecting SB 1590\'s cap repeal.',
    assessmentPA: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
    treatmentPA: 'Required — step 2 (treatment auth); reviews every 4–6 months',
    dxRequired: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
    payer: 'UnitedHealthcare / Optum in Arizona',
    state: 'AZ', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Arizona',
    h1: 'UnitedHealthcare / Optum ABA coverage in Arizona: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Arizona: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Arizona families — the national clinical policy, prior authorization, Optum\'s Arizona state-mandate entry reflecting SB 1590\'s cap repeal, A.R.S. § 32-2091 licensure, and what intake should verify.',
    intro: [
      'For an intake team in Arizona, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Arizona\'s autism insurance mandate (Steven\'s Law, its dollar caps freshly repealed by SB 1590), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — and UHC is the one national carrier whose Optum criteria carry an explicit Arizona commercial entry.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Steven\'s Law (A.R.S. § 20-826.04 and three parallel sections)' },
      { label: 'Mandate caps', value: 'NONE — the $50K/$25K annual caps were repealed by SB 1590 (2025)' },
      { label: 'Mandate age', value: 'No explicit age limit remains — the age tiers lived in the repealed cap subsection' },
      { label: 'Exempt from mandate', value: 'Individual & small-employer policies; self-funded ERISA' },
      { label: 'Licensure', value: 'AZ Licensed Behavior Analyst (A.R.S. § 32-2091, Board of Psychologist Examiners)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Arizona',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months. That clinical policy is national — what changes in Arizona is the legal floor underneath it: the state mandate below governs what fully-insured group plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Arizona.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Arizona mandate: Steven\'s Law, caps repealed',
        body: [
          'Steven\'s Law (HB 2847, 2008) lives in four parallel sections of the insurance code — A.R.S. §§ 20-826.04, 20-1057.11, 20-1402.03, and 20-1404.03 — covering state-regulated group coverage: large-group contracts, HMO plans, and group and blanket disability policies. Plans may not deny or limit treatment based solely on an autism spectrum disorder diagnosis, and may not exclude medically necessary behavioral therapy, which the statute defines to include ABA (discrete trial training, pivotal response training, intensive behavioral intervention), delivered or supervised by a licensed or certified provider. The headline change: SB 1590 (signed May 7, 2025) struck the dollar-cap subsection from all four sections — the old $50,000/year (under age 9) and $25,000/year (ages 9–16) behavioral-therapy maximums are repealed, taking the statute\'s only age tiers with them, and the ASD definition now tracks the current DSM. No annual dollar ceiling remains on any state-regulated group plan (federal parity had already made the caps largely unenforceable; SB 1590 cleaned the statute to match — do not treat the old $50K/$25K numbers as current). Exemptions: policies issued to an individual or small employer (those reach ABA via the ACA EHB benchmark instead), limited-benefit coverage, and self-funded ERISA plans. Ordinary cost sharing is still permitted.',
        ],
        cites: [
          { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
          { title: 'A.R.S. § 20-826.04 — current text (caps absent)', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
          { title: 'Autism Speaks — Arizona state-regulated insurance coverage', url: 'https://www.autismspeaks.org/arizona-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'Optum\'s Arizona-specific criteria',
        body: [
          'Arizona has its own entry in Optum\'s ABA State Mandates supplemental criteria (BH803ABASTM12026, effective January 2026): for Arizona commercial plans, Optum operationalizes SB 1590 — the repeal of the maximum benefit limits for members 16 and under and the DSM-based ASD definition. In practice that means Optum\'s own criteria document already reflects the cap repeal, so a UM conversation that cites the old $50K/$25K numbers is out of date on both the statute and the carrier\'s paperwork.',
        ],
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM12026, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Arizona',
        body: [
          'A family saying "we have UnitedHealthcare" in Arizona may actually be on the carrier\'s Medicaid plan — UnitedHealthcare Community Plan of Arizona, which is both an ACC plan and one of the two statewide DDD Health Plans ("DD by UHCCP"), with ABA administered by Optum under AHCCCS rules: no autism diagnosis required, no PA on 97151/97152, its own AZ treatment-request forms. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
        cites: [
          { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Arizona',
        body: [
          'Arizona requires a state license to practice behavior analysis — A.R.S. § 32-2091, administered by the Arizona Board of Psychologist Examiners (behavior analysts sit under the psychology board, not a standalone board) — and BCBA certification alone is not sufficient; AHCCCS itself defines "Behavior Analyst" as a person licensed under § 32-2091. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Arizona (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Benchmark against the AHCCCS fee schedule (97153 at $17.91–$23.69 per 15-minute unit by credential tier), remembering the ABA codes live on the AHCCCS physician fee schedule, not the behavioral-health one.',
        ],
        cites: [
          { title: 'A.R.S. § 32-2091 — behavior analyst licensure', url: 'https://www.azleg.gov/ars/32/02091.htm' },
          { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured group (mandate applies) vs. self-funded ERISA (exempt) vs. individual/small-group (EHB benchmark) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Arizona (Medicaid/DDD) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis confirmed with a validated tool (ADI-R, ADOS-2, etc.), diagnosing provider and credentials, evaluation date.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM12026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
      { title: 'A.R.S. § 20-826.04 — current text', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
      { title: 'Autism Speaks — Arizona state-regulated insurance coverage', url: 'https://www.autismspeaks.org/arizona-state-regulated-insurance-coverage' },
      { title: 'A.R.S. § 32-2091 — behavior analyst licensure', url: 'https://www.azleg.gov/ars/32/02091.htm' },
      { title: 'Optum — Arizona AHCCCS Autism/ABA Program provider orientation (BH4129)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/azaba/azABA_Provider_Orient.pdf' },
      { title: 'AHCCCS — Final Public Notice, FFS rate changes 11/1/2023 (ABA codes)', url: 'https://www.azahcccs.gov/AHCCCS/Downloads/PublicNotices/rates/FinalPublicNotice_RateChanges_20231101_ABA.pdf' },
      { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Steven\'s Law now carries no explicit age limit: SB 1590 (signed May 7, 2025) struck the dollar-cap subsection from all four sections of the mandate, and the age tiers — under 9, and 9 through 16 — lived inside that subsection. Optum\'s own state-mandate entry describes the change as repealing "the maximum benefit limitations for behavioral therapy coverage for eligible persons who are 16 years old and younger." The carrier\'s national ABA policy adds no age bound of its own, so age comes from the benefit document, not the statute. Optum operationalises this in its own ABA State Mandates supplement, which carries an explicit Arizona Commercial entry.',
        status: 'plan-dependent',
        cites: [
          { title: 'SB 1590 — chaptered law (Laws 2025, ch. 142)', url: 'https://www.azleg.gov/legtext/57leg/1R/laws/0142.pdf' },
          { title: 'A.R.S. § 20-826.04 — current text (caps absent)', url: 'https://www.azleg.gov/ars/20/00826-04.htm' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
      },
      dxRecency: {
        value:
          'Optum\'s Supplemental Clinical Criteria set no recency clock on the ASD diagnosis. What they require instead is current assessment: the comprehensive diagnostic evaluation and functional assessment "form the basis for the treatment plan," baseline skills and norm-referenced measures must reflect the individual\'s "specific and current abilities," and continued coverage rides on documentation of movement from baseline at each 4–6 month review.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosingProviders: {
        value:
          '"A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to the diagnostic criteria based on the DSM-5-TR." The diagnosing clinician must also confirm and document the severity level.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'The DSM-5-TR diagnosis and severity level must be "confirmed and documented by the diagnosing clinician using at least one clinically validated tool," on a three-tier list: first-level screening (ABC, CHAT/M-CHAT, CSBS-DP-IT Checklist, ASQ, AQ, CAST), second-level screening (CARS/CARS-2, RITA-T, STAT) and formal diagnostic tools used in a comprehensive evaluation (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity must then be set against at least one validated measurement tool — ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, VABS or CFQL-2.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'No physician referral or order is required. The front door is Optum\'s two-step authorization on Provider Express — "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)" — with the diagnosis, the credentialed ABA provider and the assessment package standing in for a referral.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      telehealth: {
        value:
          'Optum publishes no ABA telehealth code list in the Supplemental Clinical Criteria; it points providers to CASP\'s Practice Parameters for Telehealth-Implementation of Applied Behavior Analysis, Second Edition, which it describes as a resource for ABA "delivered via telehealth in a broad range of clinical settings (e.g., home, clinic, school)" and as a supplement to, not a replacement for, in-person delivery.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'Optum/UnitedHealthcare provider services and the plan\'s telehealth reimbursement policy — confirm which ABA codes are payable remotely and with which POS before scheduling.',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Two numbers, from two documents. Clinically, "consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week," with technicians under the supervision of a BCBA or licensed behavioral health clinician and parents discouraged from serving as their own child\'s RBT. On the claim side, the commercial reimbursement policy polices the boundary rather than a ratio: "CPT codes 97153 and 97155 may not be billed for technician training," and 97155 "should be reported only for services where the QHP is either engaged directly with the patient or is directing a technician in implementing a modified protocol with the patient" — treatment planning is indirect and not separately reimbursable.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Yes, with a single-provider exclusion. "Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." So the concurrency has to be two people — technician on 97153, analyst on 97155 directing them with the patient present. Separately, 97155 and 97156 may both pay on the same date of service only if the services are separate, distinct and clearly documented in the progress notes.',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum publishes its own per-day table on top of CMS MUEs — maximum frequency per day: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs). MUEs otherwise apply per CMS guidance, and billing above 32 units/day of 97153 "may be subject to non-reimbursement or recovery."',
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
      },
      placeOfService: {
        value:
          'No POS code list is published. The clinical criteria draw the school line instead: ABA is not covered for "services that are not ABA therapy, such as 1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA)," while "school ABA services do allow for coordination of services and would cover services such as teacher training, meetings with school personnel, and observations in the school setting."',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'UnitedHealthcare/Optum provider services and the member\'s benefit document.',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\'s level), HN = BCaBA (bachelor\'s level), HO = BCBA or master\'s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: "Billing multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial."',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Arizona?', a: 'Yes — under Optum\'s national two-step authorization policy for ASD, layered on Steven\'s Law for state-regulated group plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'Does Arizona still cap ABA benefits at $50,000 a year?', a: 'No — SB 1590 (signed May 7, 2025) repealed the $50,000/$25,000 annual caps, and Optum\'s own Arizona state-mandate entry (effective January 2026) already reflects the repeal. No annual dollar ceiling remains on any state-regulated group plan.' },
      { q: 'What does UnitedHealthcare pay for ABA in Arizona?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the AHCCCS physician fee schedule and treat rate-setting as part of contracting.' },
    ],
  },
};

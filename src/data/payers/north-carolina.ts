import type { PayerConfig } from './types.js';

export const northCarolinaPayers: Record<string, PayerConfig> = {
  'north-carolina-medicaid': {
    slug: 'north-carolina-medicaid',
    cardDesc: 'RB-BHT under CCP 8F: PA on everything, tiered 180/90-day auths, published rates, HB 696 shakeup.',
    assessmentPA: {
      value: 'Required — PA for ALL RB-BHT services, including the assessment (CCP 8F)',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    treatmentPA: {
      value: 'Required — authorization length is TIERED by intensity: up to 180 calendar days at 16 hrs/week or fewer, but only up to 90 calendar days above 16 hrs/week (initial and reauth alike)',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'North Carolina Medicaid',
    state: 'NC', kind: 'state-medicaid',
    pill: 'Payer Guide · North Carolina Medicaid',
    h1: 'North Carolina Medicaid ABA coverage: the intake guide.',
    metaTitle: 'North Carolina Medicaid ABA (RB-BHT) Coverage, Rates & Prior Auth | Carelu',
    metaDescription:
      'How NC Medicaid covers ABA as Research-Based Behavioral Health Treatment (RB-BHT) under Clinical Coverage Policy 8F — prior authorization, tiered 180/90-day auth cycles, published fee-schedule rates, the HB 696 overhaul, and the Standard/Tailored plan landscape.',
    intro: [
      'North Carolina is one of the highest-demand ABA states in the country, and NC Medicaid covers ABA as "Research-Based Behavioral Health Treatment" (RB-BHT) under Clinical Coverage Policy 8F. The benefit is available in every delivery channel — NC Medicaid Direct, all five Standard Plans, all four Tailored Plans, and the new Children & Families Specialty Plan — and the plans must pay at least the state fee schedule. But 2025–2026 brought a rate cut and reversal, a major legislative overhaul (HB 696), and a rewritten Clinical Coverage Policy 8F that took effect August 1, 2026, so this is a market where staying current is part of the job.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — RB-BHT under CCP 8F; under 21 via EPSDT, adults 21+ via a 2021 SPA' },
      { label: 'Prior auth', value: 'Required for ALL RB-BHT services, assessment included' },
      { label: 'Auth periods', value: 'Tiered by intensity — up to 180 calendar days at ≤16 hrs/week; up to 90 calendar days at >16 hrs/week (CCP 8F §5.1)' },
      { label: 'Plan review', value: 'LQASP treatment plan reviewed ≥ every 6 months, rewritten annually' },
      { label: 'Rates (per 15 min)', value: '97151 $30.56 · 97153 $20.81 · 97155 $32.22 · 97156 $23.70' },
      { label: 'Watch', value: 'CCP 8F rewrite finalized & published, effective 8/1/2026 — telehealth removed for 97152/97153/97154, 97155 capped at 50% per 180 days' },
      { label: 'Diagnosis recency', value: 'Under-3 provisional dx must be confirmed within 6 months' },
      { label: 'Staff screening', value: 'BACB checks + G.S. 122C-80 criminal check + pre-hire HCPR registry check; RBT/ABAT within 120 days of hire — grace period also started 8/1/2026 for existing uncertified staff' },
    ],
    sections: [
      {
        h2: 'Who qualifies, and through which plan',
        body: [
          'RB-BHT is covered for members under 21 with an ASD diagnosis established using a scientifically validated diagnostic tool, via EPSDT — and, less well known, a State Plan Amendment effective July 1, 2021 extends RB-BHT coverage to adults 21 and older as well. For children under three, a provisional diagnosis is accepted at the time services begin, with a definitive diagnosis expected within six months — a detail worth capturing so young families aren\'t turned away prematurely.',
          'The benefit exists in every delivery channel: NC Medicaid Direct, the five Standard Plans (Healthy Blue, AmeriHealth Caritas, Carolina Complete Health, UnitedHealthcare Community Plan, WellCare), the four Tailored Plans (Alliance, Trillium, Vaya, Partners — launched July 1, 2024), and the Children & Families Specialty Plan for child-welfare-involved members (launched December 1, 2025). The clinical rules are 8F everywhere; each plan\'s guide below covers its submission mechanics and quirks.',
        ],
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT)', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Disability Rights NC — autism-related services in NC (incl. 2021 SPA)', url: 'https://disabilityrightsnc.org/resources/autism-related-services-in-nc/' },
          { title: 'NC Medicaid — Tailored Plans', url: 'https://medicaid.ncdhhs.gov/tailored-plans' },
        ],
      },
      {
        h2: 'Authorization & treatment plan',
        body: [
          'Prior authorization is required for all RB-BHT services — including the assessment. Authorization length is tiered by intensity, which is the detail most often missed: CCP §5.1 gives up to 180 calendar days for treatment plans of 16 hours or fewer per week, but only up to 90 calendar days when the plan exceeds 16 hours a week — so most comprehensive programmes reauthorise quarterly, not twice a year. The reauth must be submitted before the current authorization expires. The treatment plan must be written and reviewed at least every six months by a Licensed Qualified Autism Service Provider (LQASP), rewritten annually, and at least 10% of approved services should be directly observed by the LQASP. As with any long review cadence, the baseline data collected at intake is what every future review is measured against.',
        ],
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT)', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      {
        h2: 'Rates: published, cut, and restored',
        body: [
          'NC Medicaid publishes RB-BHT rates, and every plan — Standard, Tailored, or LME/MCO — must reimburse at no less than 100% of the state fee schedule unless the provider agrees otherwise, which makes the schedule an effective statewide floor. Current per-15-minute rates (effective 10/1/2025): 97151 $30.56, 97152 $61.73, 97153 $20.81, 97154 $11.37, 97155 $32.22, 97156 $23.70, 97157 $11.51. Know the recent history too: a 10% RB-BHT cut took effect October 1, 2025 during a budget shortfall, was reversed by the Governor\'s December 10, 2025 directive, and restored schedules posted January 5, 2026 — so any rate sheet dated fall 2025 is wrong in your favor.',
        ],
        cites: [
          { title: 'Alliance Health — Standard Rate Schedule (RB-BHT rates, eff. 10/1/2025)', url: 'https://www.alliancehealthplan.org/document-library/97251' },
          { title: 'NCDHHS — BH rate increases & the 100%-of-fee-schedule floor', url: 'https://medicaid.ncdhhs.gov/blog/2023/11/15/nc-medicaid-behavioral-health-services-rate-increases' },
          { title: 'Acuity News — NC ABA rates restored + HB 696 oversight', url: 'https://acuity.news/regulation/nc-medicaid-aba-rates-restored-hb696-oversight-2026/' },
        ],
      },
      {
        h2: 'HB 696: the 2026 overhaul',
        body: [
          'HB 696 (Session Law 2026-1, signed April 30, 2026) rewired NC Medicaid ABA, and the Clinical Coverage Policy 8F rewrite it directed has now been finalized and published, effective August 1, 2026 (Amended Date: August 1, 2026) — confirmed directly from NC Medicaid\'s live 8F policy page, corroborated by NC Medicaid\'s August 31, 2026 bulletin restating the new requirements for providers. The codified rules: assessments must be in-person (telehealth assessments aren\'t reimbursed absent a documented exception); telehealth is removed entirely — no documented-necessity exception remains — for the three paraprofessional-delivered codes 97152, 97153, and 97154; 97151 keeps telehealth eligibility with clinical justification; 97155 keeps telehealth but capped at a maximum of 50% of total 97155 billing per beneficiary per 180-calendar-day period; 97156/97157 keep their own separate telephonic/KX caregiver-access-barrier exception, unchanged; the 10% LQASP observation floor is codified; paraprofessionals must hold RBT or ABAT certification within 120 calendar days, and that grace-period clock started on August 1, 2026 for staff already employed but not yet certified, not just new hires — after the window, claims for non-certified paraprofessionals aren\'t reimbursed; no new out-of-state BCBA/QASP-supervisor enrollments, and effective August 2, 2026 all LQASPs/C-QPs must enroll as in-state providers; and plans above 16 hours/week move to a 90-day initial-and-reauthorization cadence (plans at or under 16 hours/week keep the existing 180-day cadence) — a step down from the monthly-reapproval-softened-to-quarterly compromise in the budget signed July 7, 2026. NC Medicaid\'s transition guidance is explicit that existing prior authorizations aren\'t affected: providers don\'t need to take any action on existing authorizations, and no action will be taken to reduce an existing PA\'s duration — the new 90-day cadence binds only future reauthorizations. One correction to flag: NC Health News reporting (7/15/2026, quoting DHHS) had described the telehealth LQASP supervision cap as 20%; the finalized policy sets it at 50%, not 20% — treat the 20% figure as superseded. That same reporting\'s ~40-mile-radius detail on the out-of-state supervisor restriction still isn\'t confirmed in the finalized policy text available to us, so continue to treat it as reported, not codified.',
        ],
        cites: [
          { title: 'Governor\'s office — HB 696 signing (4/30/2026)', url: 'https://governor.nc.gov/news/press-releases/2026/04/30/governor-stein-takes-action-one-bill' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
          { title: 'NC Health News — new ABA Medicaid rules (7/2026; 20% telehealth-cap figure superseded by the finalized 50%)', url: 'https://www.northcarolinahealthnews.org/2026/07/15/autism-aba-therapy-medicaid-new-rules/' },
          { title: 'NCTracks — CCP 8F public-comment notice (5/2026)', url: 'https://www.nctracks.nc.gov/content/public/providers/provider-communications/2026----Announcements/Public-Comment-Notice--Policy-8F---Research-Based-Behavioral-Health-Treatment-for-Autism-Spectrum-Disorder.html' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Start with the technician layer, because S.L. 2026-1 changed it: behavior technicians must be certified — RBT (BACB) or ABAT (QABA) — within 120 calendar days of their date of hire (or the agency\'s first Medicaid enrollment, whichever is later). The finalized CCP 8F, effective August 1, 2026, adds a specific wrinkle for the existing workforce: that same 120-day grace-period clock started running on August 1, 2026 for paraprofessional staff already on payroll but not yet certified, not only for new hires. New hires and existing staff alike may render services during the window under all required supervision, but the finalized policy is blunt about the consequence once the window closes: claims for non-certified paraprofessionals are not reimbursed. The BACB\'s own 2026 requirements have to fit inside that clock: a 40-hour training that must span at least 5 days, an initial competency assessment, an employer-run criminal background check plus a separate abuse-registry check completed within 180 days before the application (both reviewed by a BCBA-level Attesting Certificant who signs the attestation form), and the Pearson VUE exam — so start the packet on day one of employment, not day sixty.',
          'NC then stacks two state statutes on the BACB layer. G.S. 122C-80 requires a criminal history check for unlicensed hires at MH/DD/SA providers: a state check for applicants who\'ve lived in NC five-plus years, state plus national fingerprint-based check for more recent arrivals, with the check request submitted within five business days of the conditional offer (conditional employment pending results is allowed, and a relevant conviction is weighed for seriousness, recency, and nexus to the job — not automatically disqualifying). Separately, G.S. 131E-256 requires checking the Health Care Personnel Registry BEFORE hiring any unlicensed staff with direct access — community-based DD service providers are covered even without a 122C license — and each registry access must be noted in your business files. The fourth layer is agency-level: NCTracks screens the enrolling organization and its 5%+ owners under the federal risk-based rules (42 CFR Part 455), with fingerprint-based checks for high-risk categories — confirm your agency\'s current risk category with NCTracks provider enrollment, and note that managed-care contracting never substitutes for NCTracks enrollment.',
          'Supervisors need an NC license, not just a certification: behavior analysts license through the NC Behavior Analyst Licensure Board (G.S. Chapter 90, Article 43) — LBA (current BCBA or QBA) at a $250 application fee, LaBA (BCaBA or QASP-S) at $200, each plus a $14 criminal-background-check fee run through Castle Branch (package VN90) and a completed fingerprint record card, submitted via the board\'s Licensure Gateway portal. Direct Medicaid enrollment as a BCBA requires both the certification and the license (taxonomy 103K00000X). The S.L. 2026-1 supervision floors are now codified in the finalized CCP 8F (effective 8/1/2026): at least 10% of all paraprofessional-delivered services must involve LQASP observation and direction; for beneficiaries above 200 paraprofessional hours per 180-day period, LQASP hours must land between 10% and 20% of paraprofessional hours, documented in the treatment plan with deviations clinically justified; telehealth on 97155 is capped at a maximum of 50% of total 97155 billing per beneficiary per 180-calendar-day period; telehealth is removed entirely (no exception) for 97152, 97153, and 97154; and out-of-state BCBAs can no longer newly enroll — effective August 2, 2026, all LQASPs/C-QPs must enroll as in-state providers. Plan-level certification adds essentially nothing on top — Alliance\'s RB-BHT guidance and WellCare\'s WNC.CP.109 both defer to the state baseline — the plans\' real staffing exposure is agency certification reviews against DMH/DD/SAS standards and 10A NCAC 27G personnel files (job descriptions, supervision plans), not extra background checks.',
        ],
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
          { title: 'BACB — RBT Handbook (updated 6/2026)', url: 'https://www.bacb.com/wp-content/uploads/2025/08/RBTHandbook_260116-a.pdf' },
          { title: 'G.S. 122C-80 — criminal history record checks (MH/DD/SA providers)', url: 'https://codes.findlaw.com/nc/chapter-122c-mental-health-developmental-disabilities-and-substance-abuse-act-of-1985/nc-gen-st-sect-122c-80/' },
          { title: 'G.S. 131E-256 — Health Care Personnel Registry', url: 'https://codes.findlaw.com/nc/chapter-131e-health-care-facilities-and-services/nc-gen-st-sect-131e-256/' },
          { title: 'NCBALB — Requirements for Licensure', url: 'https://ncbehavioranalystboard.org/requirements-for-licensure/' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid ID & health plan', desc: 'Standard Plan, Tailored Plan, CFSP, or NC Medicaid Direct — it decides the portal, forms, and UM contacts.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Diagnosis, instrument, and date; for under-3, provisional-diagnosis status and the 6-month confirmation clock.' },
      { title: 'Service order', desc: 'Signed by an MD/DO/LP, based on an assessment, dated on/before service start, valid one year.' },
      { title: 'Assessment (in-person under HB 696)', desc: 'HB 696\'s in-person assessment requirement is law as of April 30, 2026 and is now codified in the finalized CCP 8F, effective August 1, 2026 — telehealth assessments aren\'t reimbursed absent a documented exception. Plan scheduling accordingly.' },
      { title: 'Supervisor credentials & location', desc: 'Out-of-state LQASP/C-QP enrollment closes August 2, 2026 — all must enroll as in-state providers. RBT/ABAT certification is mandatory for paraprofessionals; the 120-day grace period also started August 1, 2026 for existing uncertified staff, not just new hires.' },
    ],
    sources: [
      { title: 'NC Medicaid — 8F RB-BHT for ASD (policy page)', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd' },
      { title: 'NCDHHS — BH rate floor bulletin', url: 'https://medicaid.ncdhhs.gov/blog/2023/11/15/nc-medicaid-behavioral-health-services-rate-increases' },
      { title: 'Alliance Health — Standard Rate Schedule (RB-BHT)', url: 'https://www.alliancehealthplan.org/document-library/97251' },
      { title: 'Governor\'s office — HB 696 signing', url: 'https://governor.nc.gov/news/press-releases/2026/04/30/governor-stein-takes-action-one-bill' },
      { title: 'NC Health News — new ABA rules coverage (7/2026; 20% telehealth-cap figure superseded by the finalized 50%)', url: 'https://www.northcarolinahealthnews.org/2026/07/15/autism-aba-therapy-medicaid-new-rules/' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
      { title: 'BACB — RBT Handbook (updated 6/2026)', url: 'https://www.bacb.com/wp-content/uploads/2025/08/RBTHandbook_260116-a.pdf' },
      { title: 'G.S. 122C-80 — criminal history record checks', url: 'https://codes.findlaw.com/nc/chapter-122c-mental-health-developmental-disabilities-and-substance-abuse-act-of-1985/nc-gen-st-sect-122c-80/' },
      { title: 'G.S. 131E-256 — Health Care Personnel Registry', url: 'https://codes.findlaw.com/nc/chapter-131e-health-care-facilities-and-services/nc-gen-st-sect-131e-256/' },
      { title: 'NCBALB — Requirements for Licensure', url: 'https://ncbehavioranalystboard.org/requirements-for-licensure/' },
      { title: 'Alliance Health — Guidance for RB-BHT Providers', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
      { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
      { title: 'Disability Rights NC — autism-related services in NC (incl. 2021 SPA)', url: 'https://disabilityrightsnc.org/resources/autism-related-services-in-nc/' },
      { title: 'NC Medicaid — Tailored Plans', url: 'https://medicaid.ncdhhs.gov/tailored-plans' },
      { title: 'Acuity News — NC ABA rates restored + HB 696 oversight', url: 'https://acuity.news/regulation/nc-medicaid-aba-rates-restored-hb696-oversight-2026/' },
      { title: 'NCTracks — CCP 8F public-comment notice (5/2026)', url: 'https://www.nctracks.nc.gov/content/public/providers/provider-communications/2026----Announcements/Public-Comment-Notice--Policy-8F---Research-Based-Behavioral-Health-Treatment-for-Autism-Spectrum-Disorder.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No upper age bound in the policy. The 8/1/2026 rewrite struck the phrase "under 21 years of age" from the eligibility provision at subsection 2.1.2, and a 2021 State Plan Amendment extends RB-BHT to adults 21 and older. Under-21 beneficiaries additionally carry the EPSDT special provision (42 U.S.C. § 1396d(r)), under which limits on scope, amount, duration, frequency and location of service may be exceeded where documentation shows the service is medically necessary to correct or ameliorate the condition. At the bottom end, beneficiaries under three years of age at the time services begin may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dxRecency: {
        value: 'CCP 8F sets no expiry date on the ASD diagnosis itself — medical necessity requires a "current ASD diagnosis" recognised by the current edition of the DSM. Two clocks do run. A beneficiary who started under age three on a provisional diagnosis must have a non-provisional ASD diagnosis within six months of the provisional one, or the provider implements transition or discharge. And at least one adaptive behavior assessment must have been completed within the last 3 years. The provider must verify and hold documentation of a qualifying ASD diagnosis before initiating RB-BHT; services rendered without adequate diagnostic documentation are subject to denial, recoupment or termination.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosingProviders: {
        value: 'Non-provisional ASD diagnosis: a Licensed Psychologist (where an autism diagnosis is within their experience and competence under Article 18G of the Psychology Practice Act), a Licensed Psychological Associate with the required supervision, or a physician (MD or DO) acting within their legal NC scope. An evaluation by a Licensed School Psychologist that includes any or all of the required testing may be used to meet the diagnostic criteria where there is no clinical indication to repeat testing. A provisional diagnosis for an under-3 may additionally be made by a licensed clinician with at least a master’s degree who has completed the training and supervision to administer validated ASD instruments and for whom this is within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosticTools: {
        value: 'The non-provisional ASD diagnosis must be made with one of four named instruments (or later versions): Brief Observation of Symptoms of Autism (BOSA), Tele-ASD-Peds (TAP), ADOS-2, or CARS2-ST / CARS2-HF. Services may not be initiated on screening tools, educational determinations or informal clinical impressions alone. The authorization packet also needs a skills assessment using VB-MAPP, ABLLS-R or the ESDM Curriculum Checklist, a functional behavior assessment (or functional behavioral analysis at provider option) where challenging behaviors are targeted, and an adaptive behavior assessment completed within the last 3 years — VABS-3, ABAS-3 or DP-4. An alternative instrument may be substituted with clinical justification where the required one is not clinically indicated.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      referral: {
        value: 'Yes — a written service order completed and signed by a Licensed MD, Licensed DO or Licensed Psychologist working within scope, signed and dated with the date the service was ordered. It must be in place prior to or on the day the service is first provided, must rest on a behavioral, adaptive or functional assessment plus a treatment plan built from that assessment, and is valid for one year: medical necessity must be reconfirmed and services re-ordered annually from the date of the original order. 97151 and 97152 do not require a service order or treatment plan for prior approval; a service order must be in place before 97153, 97154, 97155, 97156 or 97157.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      telehealth: {
        value: 'Per code, under Attachment A of the 8/1/2026 policy. Telehealth billable with modifier GT: 97151, with clinical justification recorded in the treatment plan; and 97155, capped at a maximum of 50% of total 97155 billing per beneficiary per 180-calendar-day period, with clinical justification in the treatment plan if more telehealth units are needed. Not telehealth billable at all: 97152, 97153 and 97154. 97156 and 97157 are telehealth eligible and are additionally the only telephonic (audio-only, modifier KX) services, allowed where the caregiver’s physical or behavioral health status, or an access barrier such as transportation or technology, prevents in-person or telehealth participation. Telehealth and telephonic claims are filed with the provider’s usual place-of-service code, and delivery follows Clinical Coverage Policy 1-H.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      authTurnaround: {
        value: 'NC Medicaid Direct (fee-for-service): the state’s prior-approval page says Medicaid "will make every effort possible to make a decision within 15 business days of receipt of the request unless there is a more stringent requirement" — and a more stringent one now exists: since January 1, 2026, 42 CFR 440.230(e) requires state fee-for-service decisions within 7 calendar days for a standard request (extendable up to 14 calendar days when more information is needed) and 72 hours for an expedited one. Health plans (Standard, Tailored, CFSP): the federal managed-care ceiling is 7 calendar days standard for rating periods starting on or after January 1, 2026 — NC’s rating period starts July 1, so from July 1, 2026 — plus up to 14 extension days, and 72 hours expedited; the posted Standard Plan contract text still reads "no later than fourteen (14) calendar days following receipt of the request", and plan manuals vary (see each plan). Reauthorization: CCP 8F says "Reauthorization must be submitted prior to initial or concurrent authorization expiring" (every 180 days at ≤16 hrs/week, every 90 above), and NC Medicaid asks providers to "request authorization of a continuing services 10 calendar days before the end of the current authorization period" so services continue during any adverse-decision notice period.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Prior Approval and Due Process (modified 2/18/2026)', url: 'https://medicaid.ncdhhs.gov/providers/programs-and-services/prior-approval-and-due-process' },
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes (from 1/1/2026)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid Standard Plan contract, Amendment 17(18) — "Rating Period" defined as July 1 to June 30', url: 'https://medicaid.ncdhhs.gov/contract-30-190029-dhb-prepaid-health-plan-services-amendment-1718/open' },
          { title: 'NC Medicaid — Revised & Restated Standard Plan RFP #30-190029-DHB, §V.C.1.j (UM timeframes)', url: 'https://medicaid.ncdhhs.gov/contract-30-190029-dhb-prepaid-health-plan-services-rfp/download?attachment' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. "Medicaid is the \'payer of last resort\' by federal law" — Medicare and private carriers "must process a claim before Medicaid processes a claim." CCP 8F restates it for RB-BHT: providers "shall bill all other third-party payers, including Medicare, before submitting a claim for Medicaid reimbursement." Ask about other coverage before the first session; where it shows on the NCTracks record "the provider must bill the carrier before billing Medicaid" and must hold the primary carrier’s EOB with the payment or denial, then file with Medicaid within 180 days of that EOB date. A denial the provider caused with the other plan cannot be overridden at Medicaid — fix it with that carrier. Prior approval still applies: CCP 8F requires prior approval before rendering RB-BHT and makes no exception for members with other insurance. Pay-and-chase: health plans pay first and recover for EPSDT and, per the state’s plan billing guidance, "If a prior authorization is approved as EPSDT medical necessity, health plans should pay and chase for all claims related to this prior authorization"; RB-BHT codes are not on the TPL bypass list. Federal program order: TRICARE pays after all other health insurance except Medicaid (so TRICARE pays before Medicaid), and CHAMPVA pays first when the member is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Third-Party Liability Billing Guide (DMA-2046, June 2022)', url: 'https://medicaid.ncdhhs.gov/documents/files/third-party-liability-billing-manual-dma-2046/open' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — Managed Care Billing Guidance to Health Plans v36 (9/4/2026), §3.27 TPL', url: 'https://medicaid.ncdhhs.gov/health-plan-billing-guide-version-36/download?attachment=' },
          { title: '42 CFR 433.139 — payment of claims involving third-party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'At least ten percent of all services delivered by a paraprofessional must involve observation and direction of that paraprofessional by a Licensed Qualified Autism Service Provider (LQASP). For a beneficiary receiving more than 200 hours of paraprofessional-delivered RB-BHT in a 180-calendar-day period, the ratio of LQASP-delivered to paraprofessional-delivered hours must be no less than 1:10 (10%) and no more than 2:10 (20%), measured over the authorization period and documented in the treatment plan; any plan requesting a ratio outside that band needs written clinical justification. Incidental supervision — ensuring competent, ethical practice, adherence to employer policy, ongoing skill development and personal support — is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      concurrentBilling: {
        value: 'Yes, in one direction only. 97153 and 97154 may be billed concurrently with 97155 when the paraprofessional is delivering the direct service and an eligible provider is observing; 97155 may be billed concurrently with 97153 or 97154. A single rendering provider may not bill 97153 or 97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 carry no concurrent-billing allowance. Separately, a non-RB-BHT Medicaid service may not be billed at the same time as an RB-BHT service, though same-day delivery is allowable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dailyLimits: {
        value: 'CCP 8F publishes no per-day unit ceiling — every RB-BHT code bills in 15-minute units and Attachment A carries no daily maximum. The binding limits are per authorization period: treatment plans at 16 hours per week or fewer get up to 180 calendar days initial and reauthorize at least every 180 days, while plans above 16 hours per week get up to 90 calendar days and must be reviewed, modified and resubmitted at least every 90 days. Within a 180-day period, 97155 telehealth is capped at 50% of total 97155 billing, the LQASP-to-paraprofessional ratio band is 10–20% once paraprofessional hours pass 200, and a minimum of six caregiver training sessions must be completed. Hours spent in educational settings and receiving IEP services are excluded from the treatment-hour calculation.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      noteSignature: {
        value: 'The staff member who provides the service signs the written entry, and the signature documents credentials for a professional or a job title for a paraprofessional. Notably, an LQASP or Certified Qualified Professional is NOT required to countersign a service note written by staff who hold neither status. A full service note is required for each contact or intervention on each date of service, carrying beneficiary name, Medicaid ID, date, service name, type of contact, place of service, purpose against a treatment-plan goal, description of the intervention, duration with session time in and out, assessment of effectiveness with data collected, caregivers present, a plan-of-care or protocol modification note for 97155, and the signature, date and credentials or job title of the staff member — with the beneficiary name, Medicaid ID and record number on every page. The treatment plan itself must be signed and dated by the responsible LQASP and the person consenting to treatment before services are delivered.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      placeOfService: {
        value: 'Clinic, office, home, school and community settings are all payable, in any combination across the course of treatment, with the place-of-service decision documented in the treatment plan, made individually in collaboration with the family, and clinically justified for each location; where treatment starts in a structured clinic setting the goal is to advance into the beneficiary’s natural settings. Team members may not appear at a beneficiary’s place of work without prior permission. Services available through IDEA or other educational programs that duplicate or supplant the authorized treatment plan are not covered, nor is 1:1 support that substitutes for educational personnel. Telehealth and telephonic claims are filed with the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      billAsProvider: {
        value: 'A professional claim (CMS-1500 / 837P) billed through the beneficiary’s health plan or its dedicated vendor. Attachment B fixes who may render each code: 97151 by a physician, Licensed Psychologist / Licensed Psychological Associate or Licensed Behavior Analyst; 97152, 97153 and 97154 by a behavior technician under the direction of one of those practitioners or an LaBA, or by the practitioner directly; 97155 by a physician, psychologist, LBA or LaBA (non-licensed analysts only under required supervision); 97156 and 97157 by a physician, psychologist or LBA. Behavior technicians must be certified as an RBT (BACB) or ABAT (QABA) and produce evidence to the agency within 120 calendar days of hire or of the agency’s first Medicaid enrollment, whichever is later, and must stop rendering if they miss that window. The agency must be enrolled with NC Medicaid through NCTracks, and per NC Medicaid’s August 2026 reminder all LQASPs and C-QPs must enroll as in-state providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
        ],
      },
    },
    faq: [
      { q: 'Does North Carolina Medicaid cover ABA therapy?', a: 'Yes — as Research-Based Behavioral Health Treatment (RB-BHT) under Clinical Coverage Policy 8F, in every delivery channel (Medicaid Direct, Standard Plans, Tailored Plans, and the Children & Families Specialty Plan). All RB-BHT services require prior authorization, including the assessment.' },
      { q: 'What does NC Medicaid pay for ABA?', a: 'Published per-15-minute rates, effective 10/1/2025: 97151 $30.56, 97153 $20.81, 97155 $32.22, 97156 $23.70 — and every managed-care plan must pay at least 100% of the state fee schedule unless the provider agrees otherwise.' },
      { q: 'What does HB 696 change for ABA providers?', a: 'In-person assessments (telehealth assessments aren\'t reimbursed absent a documented exception); no new out-of-state BCBA/LQASP/C-QP supervisor enrollments, with all LQASPs/C-QPs required to enroll as in-state providers by August 2, 2026; RBT/ABAT certification for paraprofessionals, with a 120-day grace period that started August 1, 2026 for existing uncertified staff as well as new hires (claims for non-certified paraprofessionals aren\'t reimbursed after the window); telehealth removed entirely for 97152, 97153, and 97154; a 50% cap on telehealth for 97155 (per beneficiary, per 180-calendar-day period — not the 20% some earlier reporting described); a codified 10% LQASP observation floor; and a move to 90-day initial-and-reauthorization periods for plans above 16 hours/week. These provisions are codified in the rewritten Clinical Coverage Policy 8F, effective August 1, 2026. Existing prior authorizations aren\'t affected — no action is needed and no existing PA\'s duration will be reduced.' },
      { q: 'Can a young child start before a confirmed diagnosis?', a: 'For children under three, NC Medicaid accepts a provisional ASD diagnosis when services begin, with a definitive diagnosis expected within six months.' },
    ],
  },

  'healthy-blue-north-carolina': {
    slug: 'healthy-blue-north-carolina',
    family: 'anthem',
    cardDesc: 'Straight CCP 8F via Availity/ICR; RB-BHT exempt from network distance rules; CFSP sibling plan.',
    assessmentPA: {
      value: 'Required — per CCP 8F (all RB-BHT services PA\'d); submit via Availity Interactive Care Reviewer',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — tiered auth cycles per 8F: up to 180 calendar days at ≤16 hrs/week, up to 90 calendar days at >16 hrs/week',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'Healthy Blue (NC)',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · Healthy Blue (NC)',
    h1: 'Healthy Blue North Carolina ABA coverage (Standard Plan).',
    metaTitle: 'Healthy Blue NC (Medicaid Standard Plan) ABA / RB-BHT Coverage | Carelu',
    metaDescription:
      'How Healthy Blue administers NC Medicaid RB-BHT (ABA) — full adoption of Clinical Coverage Policy 8F, Availity/Interactive Care Reviewer submission, behavioral-health fax lines, and the Children & Families Specialty Plan distinction.',
    intro: [
      'Healthy Blue — the Anthem/Elevance Standard Plan — administers NC Medicaid\'s RB-BHT benefit by adopting the state Clinical Coverage Policies wholesale: no Healthy-Blue-specific ABA clinical criteria exist. That makes this a mechanics guide: where requests go, which fax lines answer, and one structural wrinkle — Blue Cross NC also operates the separate Children & Families Specialty Plan, so foster-care-involved children will show up under a different plan than standard Healthy Blue.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Medicaid Standard Plan (Anthem / Elevance)' },
      { label: 'Clinical rules', value: 'CCP 8F adopted as-is — no plan-specific ABA policy' },
      { label: 'Prior auth', value: 'Required per 8F; PA form + Precert Lookup Tool published' },
      { label: 'Submission', value: 'Availity Essentials / Interactive Care Reviewer' },
      { label: 'Network note', value: 'RB-BHT exempt from standard time/distance network rules' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'How Healthy Blue administers RB-BHT',
        body: [
          'The provider manual lists RB-BHT among covered behavioral-health services and adopts NC\'s Clinical Coverage Policies — so the whole clinical picture (PA on everything including assessment, the tiered 180/90-day authorization cadence, LQASP plan reviews) is the CCP 8F baseline covered in the state guide. Submissions run through Availity Essentials\' Interactive Care Reviewer; behavioral-health authorization fax lines are (844) 429-9636 for outpatient and (844) 439-3574 for inpatient, with provider services at (844) 594-5072. Use the plan\'s Precertification Lookup Tool to confirm code-level requirements before submitting.',
          'One provider-friendly detail from the manual: RB-BHT is explicitly exempt from the plan\'s standard network time/distance standards — an open-network posture that matters if you\'re expanding into new counties.',
        ],
        cites: [
          { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      {
        h2: 'The Children & Families Specialty Plan wrinkle',
        body: [
          'Since December 1, 2025, child-welfare-involved members are auto-enrolled in the statewide Children & Families Specialty Plan ("Healthy Blue Care Together"), also operated by Blue Cross NC — a separate plan from standard Healthy Blue with its own member IDs. For intake, this means a foster or kinship placement family saying "we have Healthy Blue" needs one more verification question before you pick the submission path.',
        ],
      },
    ],
    collect: [
      { title: 'Standard Healthy Blue vs. Care Together (CFSP)', desc: 'Child-welfare-involved members are on the specialty plan — confirm which ID the family holds.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per CCP 8F, with the MD/DO/LP service order.' },
      { title: 'County / region', desc: 'RB-BHT\'s network-rules exemption makes cross-county serving feasible — capture location anyway for scheduling.' },
    ],
    sources: [
      { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
      { title: 'Healthy Blue NC — prior authorization page', url: 'https://provider.healthybluenc.com/north-carolina-provider/prior-authorization' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule — a service order signed and dated by a Licensed MD, DO or Licensed Psychologist, in place on or before the first date of service, based on an assessment and treatment plan, valid one year. Healthy Blue adopts the state Clinical Coverage Policies wholesale and publishes no ABA-specific referral rule of its own; code-level requirements are confirmed in the plan’s Precertification Lookup Tool and requests go through Availity Essentials’ Interactive Care Reviewer.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      authTurnaround: {
        value: 'Healthy Blue’s manual (Blue Cross NC) sets behavioral health turnarounds tighter than the federal floor: routine initial requests are decided "within two business days of receipt of all necessary information but no later than 7 days from the request for services", and routine concurrent (continuing) requests "within one business day of obtaining all necessary information but no later than 7 days from the request for services." Expedited decisions come "no later than 72 hours after receipt of the request for service", and requests marked expedited that do not meet the federal urgency standard are downgraded to standard. RB-BHT is on the PA list. The manual gives no reauthorization lead time; CCP 8F requires the reauth before the current authorization expires (every 180 days at ≤16 hrs/week, every 90 above).',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Healthy Blue pays last: submit to the primary insurer first, then bill Healthy Blue the balance. It is the one NC plan that answers the secondary-PA question in writing: "Blue Cross NC does not require prior authorization (PA) when the member has OHI. However, a PA will be required if Healthy Blue becomes the primary payer for the service(s) rendered" — so if the commercial plan denies or exhausts ABA, get Healthy Blue’s PA before Healthy Blue becomes primary. Pay-and-chase (paid first, recovered later) is limited to prenatal care, preventive pediatric services "including Early and Periodic Screening, Diagnosis and Treatment (EPSDT) and well-baby screenings", and child-support cases; everything else is cost-avoided. Check other coverage in Availity, not NCTracks. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule: no per-day unit ceiling is published — the limits are per authorization period. Plans at or under 16 hours a week run 180-day initial and reauthorization cycles; plans above 16 hours a week run 90-day cycles. Within a 180-day period, 97155 telehealth is capped at 50% of 97155 billing and at least six caregiver training sessions are required. Educational-setting and IEP hours are excluded from the treatment-hour calculation.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule on covered settings (clinic, home, school, community, individually justified in the treatment plan). One plan-level note that matters for geography rather than the claim: the Healthy Blue provider manual exempts RB-BHT from the plan’s standard network time and distance standards.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Healthy Blue NC — Provider Manual', url: 'https://provider.healthybluenc.com/docs/gpp/NCNC_CAID_ProviderManual.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
    },
    faq: [
      { q: 'Does Healthy Blue NC cover ABA therapy?', a: 'Yes — Healthy Blue administers NC Medicaid\'s RB-BHT benefit by adopting Clinical Coverage Policy 8F: PA on all services including assessment, authorization cycles tiered by intensity (180 calendar days at ≤16 hrs/week, 90 days above), LQASP treatment-plan reviews.' },
      { q: 'How do I submit an RB-BHT authorization to Healthy Blue?', a: 'Via Availity Essentials\' Interactive Care Reviewer, or fax (844) 429-9636 for outpatient behavioral health. Check the Precertification Lookup Tool for code-level requirements first.' },
      { q: 'What is Healthy Blue Care Together?', a: 'The separate Children & Families Specialty Plan (launched December 2025) for child-welfare-involved members, also run by Blue Cross NC. Foster families\' "Healthy Blue" cards may actually be CFSP — verify before submitting.' },
    ],
  },

  'amerihealth-caritas-north-carolina': {
    slug: 'amerihealth-caritas-north-carolina',
    family: 'amerihealth',
    cardDesc: 'CCP 8F deference; NaviNet + PA Lookup Tool; thinnest public paper trail of the NC plans.',
    assessmentPA: {
      value: 'Required — per CCP 8F; confirm code-level rules in AmeriHealth\'s PA Lookup Tool',
      status: 'unverified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
      verifyVia: 'AmeriHealth Caritas NC Behavioral Health Utilization Management Guide + the plan\'s PA Lookup Tool. CCP 8F puts PA on every RB-BHT service including the assessment, but AmeriHealth removed PA from 240+ codes on 1/1/2025 and does not publish whether 9715x was included; the site blocks automated retrieval, so pull both from NaviNet or via carelu.com/sources.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — follows CCP 8F §5.1/5.1.1, which is TIERED by intensity: up to 180 calendar days at 16 hrs/week or fewer, but only up to 90 calendar days above 16 hrs/week, for the initial authorization and every reauthorization alike; UM at (888) 738-0004',
      status: 'unverified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
      verifyVia: 'AmeriHealth Caritas NC Behavioral Health Utilization Management Guide. NOTE: the ‘180-day cycles’ in this value predates the 8/1/2026 CCP 8F rewrite — §5.1 is now tiered (up to 180 calendar days at ≤16 hrs/week, up to 90 above it). Confirm the plan restates the tiering before relying on the flat 180-day figure.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'AmeriHealth Caritas North Carolina',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · AmeriHealth Caritas (NC)',
    h1: 'AmeriHealth Caritas North Carolina ABA coverage (Standard Plan).',
    metaTitle: 'AmeriHealth Caritas NC (Medicaid Standard Plan) ABA / RB-BHT Coverage | Carelu',
    metaDescription:
      'How AmeriHealth Caritas administers NC Medicaid RB-BHT (ABA) — deference to Clinical Coverage Policy 8F, the PA Lookup Tool and NaviNet workflow, UM contacts, and why its documents are best pulled manually.',
    intro: [
      'AmeriHealth Caritas North Carolina administers the RB-BHT benefit as a Standard Plan, mapping its coverage decisions to the state Clinical Coverage Policies — including 8F for ABA. Fair warning on sourcing: AmeriHealth\'s provider site is aggressively bot-protected, so this guide leans on the state baseline plus the plan\'s published contact points, and flags the two documents your team should pull manually from the portal.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Medicaid Standard Plan' },
      { label: 'Clinical rules', value: 'CCP 8F via the plan\'s Clinical Coverage Policy Reference Tool' },
      { label: 'Prior auth', value: 'Required per 8F; confirm codes in the PA Lookup Tool' },
      { label: 'UM contact', value: '(888) 738-0004' },
      { label: 'Portal', value: 'NaviNet + PA Lookup Tool at amerihealthcaritasnc.com' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'How AmeriHealth administers RB-BHT',
        body: [
          'The clinical rules are the CCP 8F baseline: PA on all RB-BHT services including the assessment, authorization cycles tiered by intensity (180 calendar days at ≤16 hrs/week, 90 days above), LQASP treatment-plan reviews at least every six months. AmeriHealth\'s own layer is a Clinical Coverage Policy Reference Tool mapping to the state policies, a Behavioral Health Utilization Management Guide (January 2025 edition), and a PA Lookup Tool for code-level checks. One thing to verify directly: AmeriHealth eliminated prior authorization on 240+ physical and behavioral-health codes effective January 1, 2025 — whether any 9715x codes made that list isn\'t publicly confirmed, so run your codes through the Lookup Tool rather than assuming.',
          'Because the plan\'s site blocks automated access, have your team download the current BH UM Guide and the PA Lookup results from the portal directly, and keep dated copies with your payer files.',
        ],
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'AmeriHealth Caritas NC — Behavioral Health UM Guide (pull manually; bot-blocked)', url: 'https://www.amerihealthcaritasnc.com/content/dam/amerihealth-caritas/acnc/pdf/provider/resources/utilization-management-guide.pdf.coredownload.inline.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Member ID + plan confirmation', desc: 'Standard AmeriHealth Caritas NC vs. other channels — verify at (888) 738-0004 if in doubt.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per CCP 8F, with the MD/DO/LP service order.' },
      { title: 'Code-level PA check', desc: 'Run the planned CPT codes through the PA Lookup Tool before promising timelines.' },
    ],
    sources: [
      { title: 'AmeriHealth Caritas NC — prior authorization resources (bot-blocked; access via portal)', url: 'https://www.amerihealthcaritasnc.com/provider/resources/physical-prior-auth' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      { title: 'AmeriHealth Caritas NC — Behavioral Health UM Guide (pull manually; bot-blocked)', url: 'https://www.amerihealthcaritasnc.com/content/dam/amerihealth-caritas/acnc/pdf/provider/resources/utilization-management-guide.pdf.coredownload.inline.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule: a service order signed and dated by a Licensed MD, DO or Licensed Psychologist, in place on or before the first date of service, based on a behavioral/adaptive/functional assessment and treatment plan, valid one year and re-ordered annually. 97151 and 97152 need no service order for prior approval; 97153–97157 do.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      authTurnaround: {
        value: 'AmeriHealth Caritas’ manual (Version 16, October 2025) says standard decisions come "no later than 14 calendar days after AmeriHealth Caritas North Carolina receives the request", extendable up to 14 more calendar days, and expedited decisions "no later than 72 hours after receipt of the request for service" (also extendable up to 14 calendar days); its BH UM Guide lists 14 calendar days as the expected determination time for RB-BHT under 8F. A missed deadline counts as an adverse benefit determination the family can appeal. The federal managed-care ceiling for rating periods starting on or after January 1, 2026 is 7 calendar days standard, which reaches NC plans from July 1, 2026 — newer than this manual edition, so expect 7 and confirm with ACNC UM. No reauthorization lead time is published; CCP 8F requires the reauth before the current authorization expires.',
        status: 'verified',
        cites: [
          { title: 'AmeriHealth Caritas NC — Provider Manual (Version 16, published 10/2/2025)', url: 'https://www.amerihealthcaritasnc.com/assets/pdf/provider/provider-manual.pdf' },
          { title: 'AmeriHealth Caritas NC — Behavioral Health UM Guide (Jan 2025)', url: 'https://www.amerihealthcaritasnc.com/content/dam/amerihealth-caritas/acnc/pdf/provider/resources/utilization-management-guide.pdf.coredownload.inline.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid Standard Plan contract, Amendment 17(18) — "Rating Period" defined as July 1 to June 30', url: 'https://medicaid.ncdhhs.gov/contract-30-190029-dhb-prepaid-health-plan-services-amendment-1718/open' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: 'ACNC pays last: "health care providers are required to bill the Primary Insurer first and obtain an Explanation of Benefits (EOB) or Claim Adjustment Reason Codes (CARC)" and claims carrying the primary EOB must reach ACNC "within 180 days of the date on the primary insurer\'s EOB." ACNC "will pay and then chase" for EPSDT, "Diagnostic and Treatment (Medical Necessity) after Early and Periodic Screening", and child support enforcement. The manual does not say whether its own prior authorization is still needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT and carves out no exception for members with other insurance, so get the plan’s authorization on file unless the plan confirms in writing that it is waived. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'AmeriHealth Caritas NC — Provider Manual (Version 16, published 10/2/2025)', url: 'https://www.amerihealthcaritasnc.com/assets/pdf/provider/provider-manual.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule: no per-day unit ceiling; limits are per authorization period (180-day cycles at or under 16 hours a week, 90-day cycles above it), with the 50% 97155 telehealth cap and the six-caregiver-training minimum per 180 days. AmeriHealth publishes no plan-specific ABA unit table; because the plan removed prior authorization from 240+ codes effective January 1, 2025 without publicly confirming whether any 9715x codes were included, run the planned codes through the plan’s PA Lookup Tool rather than assuming.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'AmeriHealth Caritas NC — Behavioral Health UM Guide (pull manually; bot-blocked)', url: 'https://www.amerihealthcaritasnc.com/content/dam/amerihealth-caritas/acnc/pdf/provider/resources/utilization-management-guide.pdf.coredownload.inline.pdf' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas NC cover ABA therapy?', a: 'Yes — as a Standard Plan it administers NC Medicaid\'s RB-BHT benefit under Clinical Coverage Policy 8F, with prior authorization per the state baseline. Confirm code-level rules in the plan\'s PA Lookup Tool.' },
      { q: 'How do I reach AmeriHealth Caritas NC utilization management?', a: 'UM runs at (888) 738-0004; the provider workflow uses NaviNet and the PA Lookup Tool at amerihealthcaritasnc.com. The January 2025 Behavioral Health UM Guide has the current details — pull it from the portal.' },
    ],
  },

  'carolina-complete-health': {
    slug: 'carolina-complete-health',
    family: 'centene',
    cardDesc: 'Explicit CCP 8F deference + an ABA treatment-request checklist; statewide since 4/1/2026 (absorbed WellCare NC).',
    assessmentPA: {
      value: 'Required — per CCP 8F, before rendering any RB-BHT service including assessment',
      status: 'verified',
      cites: [
        { title: 'Carolina Complete Health — behavioral health provider page', url: 'https://network.carolinacompletehealth.com/resources/behavioral-health.html' },
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    treatmentPA: {
      value: 'Required — submit with the ABA outpatient treatment request checklist via the provider portal',
      status: 'verified',
      cites: [
        { title: 'Carolina Complete Health — behavioral health provider page', url: 'https://network.carolinacompletehealth.com/resources/behavioral-health.html' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'Carolina Complete Health',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · Carolina Complete Health',
    h1: 'Carolina Complete Health ABA coverage (Standard Plan).',
    metaTitle: 'Carolina Complete Health (NC Medicaid) ABA / RB-BHT Coverage | Carelu',
    metaDescription:
      'How Carolina Complete Health administers NC Medicaid RB-BHT (ABA) — explicit deference to Clinical Coverage Policy 8F, the ABA outpatient treatment request checklist, portal submission, and its statewide footprint since absorbing WellCare of North Carolina.',
    intro: [
      'Carolina Complete Health — the physician-led Centene joint venture — administers RB-BHT with the cleanest policy posture of the Standard Plans: its behavioral-health page states outright that clinical requirements are detailed in Policy 8F on the state\'s Medicaid website. The plan\'s own contribution is operational: an ABA Outpatient Treatment Request Checklist that structures submissions. As of April 1, 2026, WellCare of North Carolina merged into Carolina Complete Health, extending the plan from its prior regional footprint to statewide availability — see the WellCare of North Carolina guide for the merger detail and the transition path for existing WellCare members.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Medicaid Standard Plan (Centene JV, physician-led)' },
      { label: 'Clinical rules', value: 'Explicit deference to CCP 8F' },
      { label: 'Prior auth', value: 'Required per 8F; ABA treatment-request checklist published' },
      { label: 'Portal', value: 'provider.carolinacompletehealth.com' },
      { label: 'Footprint', value: 'Statewide as of 4/1/2026 — absorbed WellCare of North Carolina' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'How CCH administers RB-BHT',
        body: [
          'Clinically, everything is CCP 8F: PA before rendering any RB-BHT service (assessment included), authorization cycles tiered by intensity (180 calendar days at ≤16 hrs/week, 90 days above), LQASP treatment-plan reviews. Requests go through the provider portal accompanied by the plan\'s ABA Outpatient Treatment Request Checklist — using it as your internal submission template removes back-and-forth. Behavioral health is integrated in-house (clinical training questions go to BH_training@centene.com), and provider services runs at (833) 552-3876, Monday–Saturday 7am–6pm. Carolina Complete Health became a statewide Standard Plan effective April 1, 2026, when WellCare of North Carolina merged into it — so eligibility should no longer be screened by county for this plan. Note also that Partners Health Management\'s Tailored Plan documentation cross-references CCH policies, reflecting shared Centene infrastructure.',
        ],
        cites: [
          { title: 'Carolina Complete Health — behavioral health provider page', url: 'https://network.carolinacompletehealth.com/resources/behavioral-health.html' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
        ],
      },
    ],
    collect: [
      { title: 'Member plan history', desc: 'Members transitioning from WellCare of North Carolina land here after the 4/1/2026 merger — confirm which card/ID the family currently holds.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per CCP 8F, with the MD/DO/LP service order.' },
      { title: 'Checklist items', desc: 'Build intake to pre-fill the plan\'s ABA treatment-request checklist.' },
    ],
    sources: [
      { title: 'Carolina Complete Health — behavioral health page (8F deference, checklist)', url: 'https://network.carolinacompletehealth.com/resources/behavioral-health.html' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule — an MD/DO/Licensed Psychologist service order, dated on or before the first service, assessment-based, valid one year. Carolina Complete Health states outright that the clinical requirements are detailed in Policy 8F on the state Medicaid website; its own layer is the ABA Outpatient Treatment Request Checklist that structures portal submissions.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Carolina Complete Health — behavioral health provider page', url: 'https://network.carolinacompletehealth.com/resources/behavioral-health.html' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      authTurnaround: {
        value: 'CCH’s 2026 manual (merged with WellCare NC on April 1, 2026) says standard decisions "will be made within fourteen (14) calendar days" and urgent/expedited ones "within seventy-two (72) hours of the receipt of the request"; concurrent reviews are decided within 72 hours of receiving the necessary information. It states the change as "Effective January 1, 2027": standard requests "within 7 calendar days, with a possible extension up to 14 calendar days." That date conflicts with the federal rule, which caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026, and NC’s rating period starts July 1, so the ceiling reaches NC plans from July 1, 2026 — confirm with CCH UM which clock it is running. Lead time: the manual asks for standard requests "at least fourteen (14) business days prior" to the service (another passage says 14 calendar days); CCP 8F requires the RB-BHT reauth before the current authorization expires.',
        status: 'verified',
        cites: [
          { title: 'Carolina Complete Health — Provider Manual 2026 (last updated 6/29/2026, state approved)', url: 'https://network.carolinacompletehealth.com/content/dam/centene/carolinacompletehealth/pdfs/CCHE_PRV15_Provider_Manual_2026.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid Standard Plan contract, Amendment 17(18) — "Rating Period" defined as July 1 to June 30', url: 'https://medicaid.ncdhhs.gov/contract-30-190029-dhb-prepaid-health-plan-services-amendment-1718/open' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: 'CCH is payer of last resort: bill the other insurer first and upload its EOB/EOP or rejection letter — without it "the claim will pend and/or deny until this information is received." Secondary claims are due within 365 calendar days of "the primary insurer\'s Explanation of Benefits/Remittance Advice date (whether the claim was paid or denied)." Check other coverage in CCH’s portal. Neither the provider nor the billing manual lists pay-and-chase services; the state’s plan billing guidance requires plans to pay and chase EPSDT and claims under a PA "approved as EPSDT medical necessity." The manual does not say whether its own prior authorization is still needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT and carves out no exception for members with other insurance, so get the plan’s authorization on file unless the plan confirms in writing that it is waived. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'Carolina Complete Health — Provider Manual 2026 (last updated 6/29/2026, state approved)', url: 'https://network.carolinacompletehealth.com/content/dam/centene/carolinacompletehealth/pdfs/CCHE_PRV15_Provider_Manual_2026.pdf' },
          { title: 'Carolina Complete Health — Provider Billing Manual (last updated 7/14/2026)', url: 'https://network.carolinacompletehealth.com/content/dam/centene/carolinacompletehealth/pdfs/CCH-Current-Provider-Billing-Manual.pdf' },
          { title: 'NC Medicaid — Managed Care Billing Guidance to Health Plans v36 (9/4/2026), §3.27 TPL', url: 'https://medicaid.ncdhhs.gov/health-plan-billing-guide-version-36/download?attachment=' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule: no per-day unit ceiling is published — the limits are per authorization period. Plans at or under 16 hours a week run 180-day initial and reauthorization cycles; plans above 16 hours a week run 90-day cycles. Within a 180-day period, 97155 telehealth is capped at 50% of 97155 billing and at least six caregiver training sessions are required. Educational-setting and IEP hours are excluded from the treatment-hour calculation.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
    },
    faq: [
      { q: 'Does Carolina Complete Health cover ABA therapy?', a: 'Yes — RB-BHT per NC Clinical Coverage Policy 8F, which the plan defers to explicitly. PA is required before any RB-BHT service, submitted through the provider portal with the plan\'s ABA treatment-request checklist.' },
      { q: 'Is Carolina Complete Health available statewide?', a: 'Yes, as of April 1, 2026 — it absorbed WellCare of North Carolina and now operates statewide as a Standard Plan, rather than the smaller regional footprint it held before the merger.' },
    ],
  },

  'unitedhealthcare-community-plan-north-carolina': {
    slug: 'unitedhealthcare-community-plan-north-carolina',
    family: 'unitedhealthcare',
    cardDesc: 'The Optum carve-out: separate assessment & treatment auths on Provider Express, own criteria.',
    assessmentPA: {
      value: 'Required — a SEPARATE Optum authorization for the assessment, distinct from treatment',
      status: 'verified',
      cites: [
        { title: 'Optum Provider Express — NC Medicaid ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaCAMediCal12.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — second authorization via Provider Express after the assessment',
      status: 'verified',
      cites: [
        { title: 'Optum Provider Express — NC Medicaid ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaCAMediCal12.html' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'UnitedHealthcare Community Plan of North Carolina',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · UHC Community Plan (NC)',
    h1: 'UnitedHealthcare Community Plan of North Carolina ABA coverage (Standard Plan).',
    metaTitle: 'UHC Community Plan NC (Medicaid) ABA / RB-BHT Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers NC Medicaid RB-BHT (ABA) — the Optum-run network since 2021, separate assessment and treatment authorizations on Provider Express, supplemental clinical criteria, and NCTracks enrollment.',
    intro: [
      'UnitedHealthcare Community Plan is the most operationally distinct of NC\'s Standard Plans for ABA: since July 1, 2021, Optum manages the RB-BHT network, which means a separate portal (Provider Express), a two-step authorization flow with distinct assessment and treatment requests, and UHC\'s own NC Medicaid supplemental clinical criteria layered on the CCP 8F floor. If your practice serves UHC members, treat this as its own workflow, not a variant of the others.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Medicaid Standard Plan (ABA network run by Optum since 7/2021)' },
      { label: 'Clinical rules', value: 'CCP 8F floor + UHC NC supplemental clinical criteria' },
      { label: 'Prior auth', value: 'Two separate auths: assessment first, then treatment' },
      { label: 'Portal', value: 'Provider Express (One Healthcare ID); support (866) 209-9320' },
      { label: 'Enrollment', value: 'NCTracks enrollment required before joining the Optum ABA network' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'The two-step Optum flow',
        body: [
          'Optum requires an authorization for the ABA assessment that is separate from the treatment authorization — the same structure as Optum\'s commercial ABA program, run here under NC Medicaid rules. Both submit through the Provider Express secure portal (One Healthcare ID), where the NC ABA quick-reference guide and provider orientation also live; portal support runs at (866) 209-9320 and network/provider relations at (877) 614-0484. Sequence intake accordingly: benefits check → assessment auth → assessment → treatment auth — with the state\'s 8F requirements (validated diagnostic tool, service order) satisfied before step one.',
          'Providers must be enrolled with NC Medicaid through NCTracks before they can join the Optum ABA network — a credentialing dependency worth building into any expansion timeline.',
        ],
        cites: [
          { title: 'Optum Provider Express — NC Medicaid ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaCAMediCal12.html' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
    ],
    collect: [
      { title: 'Member ID + plan confirmation', desc: 'UHC Community Plan members route through Optum — different portal and forms than every other NC plan.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per CCP 8F; needed before the assessment authorization.' },
      { title: 'Assessment scheduling window', desc: 'The two-step auth flow adds a cycle — set family expectations on timeline honestly.' },
      { title: 'NCTracks + Optum credentialing status', desc: 'Both enrollments must be in place before serving UHC members.' },
    ],
    sources: [
      { title: 'Optum Provider Express — NC Medicaid ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaCAMediCal12.html' },
      { title: 'UHC Community Plan NC — prior authorization page', url: 'https://www.uhcprovider.com/en/health-plans-by-state/north-carolina-health-plans/nc-comm-plan-home/nc-cp-prior-auth.html' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule for the service order itself — MD/DO/Licensed Psychologist, dated on or before the first service, valid one year — but the authorization flow is Optum’s: since July 1, 2021 Optum manages the plan’s ABA network and requires an authorization for the assessment that is separate from the treatment authorization, both submitted through Provider Express with a One Healthcare ID. Sequence intake as benefits check, assessment auth, assessment, treatment auth, with the 8F diagnosis and service order satisfied before step one.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Optum Provider Express — NC Medicaid ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaCAMediCal12.html' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      authTurnaround: {
        value: 'UHC Community Plan of NC’s 2026 manual already runs the 7-day clock: non-urgent pre-service decisions come "As quickly as the member\'s condition requires but no longer than 7 calendar days of request receipt", urgent/expedited "Within 72 hours of request receipt", concurrent review "Within 24 hours or next business day", and retrospective review within 30 calendar days of receiving all pertinent clinical information. The manual asks for non-emergency outpatient PA at least 14 business days ahead; RB-BHT (managed by Optum) needs PA on 97152–97157. CCP 8F requires the reauth before the current authorization expires.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of NC — 2026 Care Provider Manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NC-UHCCP-Care-Provider-Manual.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: '"UnitedHealthcare Community Plan is, by law, the payer of last resort": bill and obtain an EOB from the other coverage first, then submit to UHC with the complete EOB showing the paid amount or denial reason, "within 180 calendar days from the primary insurer\'s explanation of benefits/remittance advice date (whether the claim was paid or denied)." The manual lists no pay-and-chase services of its own; the state’s plan billing guidance requires plans to pay and chase EPSDT and claims under a PA "approved as EPSDT medical necessity." The manual does not say whether its own prior authorization is still needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT and carves out no exception for members with other insurance, so get the plan’s authorization on file unless the plan confirms in writing that it is waived. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of NC — 2026 Care Provider Manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/NC-UHCCP-Care-Provider-Manual.pdf' },
          { title: 'NC Medicaid — Managed Care Billing Guidance to Health Plans v36 (9/4/2026), §3.27 TPL', url: 'https://medicaid.ncdhhs.gov/health-plan-billing-guide-version-36/download?attachment=' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule: no per-day unit ceiling is published — the limits are per authorization period. Plans at or under 16 hours a week run 180-day initial and reauthorization cycles; plans above 16 hours a week run 90-day cycles. Within a 180-day period, 97155 telehealth is capped at 50% of 97155 billing and at least six caregiver training sessions are required. Educational-setting and IEP hours are excluded from the treatment-hour calculation.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule on rendering-provider eligibility and the professional CMS-1500/837P claim, with one credentialing dependency layered on: providers must be enrolled with NC Medicaid through NCTracks before they can join the Optum ABA network, and both enrolments must be in place before serving members.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Optum Provider Express — NC Medicaid ABA Program', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaCAMediCal12.html' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of NC cover ABA?', a: 'Yes — RB-BHT under the CCP 8F baseline, administered through Optum, which has managed the plan\'s ABA network since July 2021, with UHC\'s own supplemental clinical criteria on top.' },
      { q: 'How is UHC\'s NC authorization process different?', a: 'It\'s a two-step flow on Provider Express: a separate authorization for the assessment, then a second for treatment — unlike the single-request flow at most other NC plans.' },
      { q: 'What credentialing do I need for UHC NC ABA?', a: 'NC Medicaid enrollment via NCTracks first, then Optum ABA network credentialing — plan for both in your timeline.' },
    ],
  },

  'wellcare-north-carolina': {
    slug: 'wellcare-north-carolina',
    family: 'centene',
    cardDesc: 'MERGED into Carolina Complete Health effective 4/1/2026 — no longer a standalone Standard Plan.',
    assessmentPA: {
      value: 'Required — per CCP 8F baseline; confirm code-level PA in WellCare\'s Authorization Lookup Tool',
      status: 'unverified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy (historical)', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
      ],
      verifyVia: 'WellCare NC Medicaid Behavioral Health Authorization List / Authorization Lookup Tool. WNC.CP.109 deliberately lists no PA\'d codes and delegates code-level requirements to the lookup tool, which is not publicly retrievable. (Historical plan — WellCare NC merged into Carolina Complete Health 4/1/2026.)',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — WNC.CP.109 restates 8F: LQASP plan, review ≥ every 6 months',
      status: 'verified',
      cites: [
        { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy (historical)', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy (historical)', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'WellCare of North Carolina',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · WellCare (NC)',
    h1: 'WellCare of North Carolina: merged into Carolina Complete Health (4/1/2026).',
    metaTitle: 'WellCare NC → Carolina Complete Health Merger (4/1/2026) | Carelu',
    metaDescription:
      'WellCare of North Carolina merged into Carolina Complete Health effective April 1, 2026, and is no longer a standalone NC Medicaid Standard Plan. What changed, where WellCare members go now, and the plan\'s prior RB-BHT policy (WNC.CP.109) for reference.',
    intro: [
      'WellCare of North Carolina merged into Carolina Complete Health effective April 1, 2026 — it no longer exists as a standalone NC Medicaid Standard Plan. Members who previously carried a WellCare of NC card are now served by Carolina Complete Health; see that guide for current authorization mechanics and the plan\'s (now statewide) footprint. This page is kept for reference and for anyone still searching by the WellCare name — the clinical policy history below (WNC.CP.109, a near-verbatim restatement of CCP 8F) reflects how the plan operated before the merger.',
    ],
    atGlance: [
      { label: 'Plan status', value: 'MERGED into Carolina Complete Health effective April 1, 2026 — go to the Carolina Complete Health guide' },
      { label: 'Plan type (historical)', value: 'NC Medicaid Standard Plan (Centene)' },
      { label: 'Clinical rules (historical)', value: 'WNC.CP.109 — restated CCP 8F; state rules took precedence' },
      { label: 'Prior auth (historical)', value: 'Code-level PA via the Authorization Lookup Tool + BH auth list' },
      { label: 'Telehealth (historical)', value: 'Governed by separate policy WNC.CP.193' },
      { label: 'Rates (historical)', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'How WellCare administers RB-BHT',
        body: [
          'WNC.CP.109 mirrors 8F\'s criteria — under-21 coverage via EPSDT, a validated diagnostic tool, provisional diagnosis under age three with definitive diagnosis within six months, LQASP treatment plans reviewed at least every six months — and defers wholesale to CCP 8F Section 6.0 on provider qualifications. Rather than listing PA\'d codes in the policy, WellCare delegates code-level requirements to its Authorization Lookup Tool and Medicaid Behavioral Health Authorization List, so check your specific codes there before each submission cycle. Telehealth for RB-BHT is governed by a separate policy (WNC.CP.193), with telephonic parent training allowed only for documented caregiver health or access barriers — and the state\'s finalized CCP 8F, effective August 1, 2026, now tightens ABA telehealth further statewide: telehealth is removed entirely for 97152, 97153, and 97154, while 97155 is capped at 50% of billing per beneficiary per 180 days (historical note: WellCare of NC merged into Carolina Complete Health effective April 1, 2026, so this policy is kept for reference only).',
        ],
        cites: [
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
        ],
      },
    ],
    collect: [
      { title: 'Redirect to Carolina Complete Health', desc: 'WellCare of NC no longer exists as a standalone plan — route WellCare-branded inquiries to the Carolina Complete Health guide and workflow.' },
      { title: 'Code-level PA check (historical)', desc: 'The Authorization Lookup Tool was the source of truth for WellCare NC — no longer applicable post-merger.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per 8F; provisional-dx path documented for under-3s. This requirement carries over to Carolina Complete Health.' },
    ],
    sources: [
      { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
      { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy (historical)', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      dxRecency: {
        value: 'Historical. WNC.CP.109 mirrored the state rule — a validated diagnostic tool, and a provisional diagnosis under age three with a definitive diagnosis within six months. WellCare of North Carolina merged into Carolina Complete Health effective April 1, 2026, so the operative rule for these members is now the state rule as administered by Carolina Complete Health.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
          { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule: a service order signed and dated by a Licensed MD, DO or Licensed Psychologist, in place on or before the first date of service, based on a behavioral/adaptive/functional assessment and treatment plan, valid one year and re-ordered annually. 97151 and 97152 need no service order for prior approval; 97153–97157 do.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      telehealth: {
        value: 'Historical. WellCare governed RB-BHT telehealth through a separate policy, WNC.CP.193, allowing telephonic parent training only for documented caregiver health or access barriers. The state’s finalized CCP 8F (eff. 8/1/2026) now controls statewide: telehealth removed entirely for 97152, 97153 and 97154, 97155 capped at 50% of billing per beneficiary per 180 days, 97151 telehealth eligible with clinical justification, and 97156/97157 keeping the KX telephonic caregiver-barrier exception. WellCare of NC merged into Carolina Complete Health on April 1, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
          { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
        ],
      },
      authTurnaround: {
        value: 'WellCare of NC merged into Carolina Complete Health on April 1, 2026, and CCH’s rules govern dates of service from then on (standard 14 calendar days per its manual, which dates the 7-day change to January 1, 2027, against a federal 7-calendar-day ceiling that reaches NC plans from July 1, 2026; expedited 72 hours). For pre-merger dates of service, WellCare’s last manual said standard pre-service decisions "will not exceed 14 (14) calendar days" with a 14-day extension, expedited 72 hours, urgent concurrent 24 hours, and post-service 30 calendar days. CCP 8F requires the reauth before the current authorization expires; active WellCare authorizations transferred to CCH.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
          { title: 'Carolina Complete Health — Provider Manual 2026 (last updated 6/29/2026, state approved)', url: 'https://network.carolinacompletehealth.com/content/dam/centene/carolinacompletehealth/pdfs/CCHE_PRV15_Provider_Manual_2026.pdf' },
          { title: 'WellCare of North Carolina — 2025–2026 NC Medicaid Provider Manual (eff. 1/22/2026, pre-merger)', url: 'https://www.wellcarenc.com/content/dam/centene/wellcare/nc/pdfs/providers/NC_Medicaid_Provider_Manual_03_2026_R.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: 'For dates of service from April 1, 2026, bill Carolina Complete Health, which pays last: the other insurer first, then CCH with its EOB/EOP or rejection letter, within 365 calendar days of the primary EOB/RA date. For pre-merger claims, WellCare’s manual required "Any balance due after receipt of payment from the primary payer" to be submitted "with a copy of the primary payer\'s explanation of payment (EOP)", within 90 days of the primary EOB date, paid on lesser-of logic. Neither manual says whether the plan’s own PA is needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT with no exception for other insurance. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — WellCare NC and Carolina Complete Health merge April 1, 2026 (Provider Playbook)', url: 'https://medicaid.ncdhhs.gov/providers/provider-playbook-medicaid-managed-care/trending-topics/wellcare-north-carolina-and-carolina-complete-health-merge-april-1-2026' },
          { title: 'Carolina Complete Health — Provider Billing Manual (last updated 7/14/2026)', url: 'https://network.carolinacompletehealth.com/content/dam/centene/carolinacompletehealth/pdfs/CCH-Current-Provider-Billing-Manual.pdf' },
          { title: 'WellCare of North Carolina — 2025–2026 NC Medicaid Provider Manual (eff. 1/22/2026, pre-merger)', url: 'https://www.wellcarenc.com/content/dam/centene/wellcare/nc/pdfs/providers/NC_Medicaid_Provider_Manual_03_2026_R.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule: no per-day unit ceiling is published — the limits are per authorization period. Plans at or under 16 hours a week run 180-day initial and reauthorization cycles; plans above 16 hours a week run 90-day cycles. Within a 180-day period, 97155 telehealth is capped at 50% of 97155 billing and at least six caregiver training sessions are required. Educational-setting and IEP hours are excluded from the treatment-hour calculation.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'WellCare NC — WNC.CP.109 RB-BHT clinical policy', url: 'https://www.policies-wellcare.com/content/dam/centene/wellcare/nc/policies/clinical-policies/WNC.CP.109.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does WellCare of North Carolina still exist?', a: 'No — WellCare of North Carolina merged into Carolina Complete Health effective April 1, 2026, and is no longer a standalone NC Medicaid Standard Plan. Members and providers should use the Carolina Complete Health guide going forward.' },
      { q: 'What happened to WellCare NC members after the merger?', a: 'They are now served by Carolina Complete Health, which expanded from its prior regional footprint to a statewide Standard Plan as part of the merger.' },
    ],
  },

  'alliance-health-north-carolina': {
    slug: 'alliance-health-north-carolina',
    family: '',
    cardDesc: 'Tailored Plan publishing real rates + the strictest diagnostic-tool and service-order enforcement.',
    assessmentPA: {
      value: 'Required — per 8F, with Alliance\'s RB-BHT cover sheet accompanying service requests',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
      ],
    },
    treatmentPA: {
      value: 'Required — follows CCP 8F §5.1/5.1.1, which is TIERED by intensity: up to 180 calendar days at 16 hrs/week or fewer, but only up to 90 calendar days above 16 hrs/week, for the initial authorization and every reauthorization alike, through Alliance UM',
      status: 'unverified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
      verifyVia: 'Alliance Health\'s RB-BHT provider guidance, reissued for the 8/1/2026 CCP 8F. The flat ‘180-day cycles’ here is the pre-rewrite cadence; §5.1 is now tiered (up to 180 calendar days at ≤16 hrs/week, up to 90 above it). Confirm Alliance UM applies the tiering before quoting a reauth date to a family.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via ADI-R, ADOS-2, CARS-2, or TELE-ASD-PEDS; screeners alone rejected',
      status: 'verified',
      cites: [
        { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
      ],
    },
    payer: 'Alliance Health (NC Tailored Plan)',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · Alliance Health (NC)',
    h1: 'Alliance Health ABA coverage (NC Tailored Plan).',
    metaTitle: 'Alliance Health (NC Tailored Plan) ABA / RB-BHT Coverage & Rates | Carelu',
    metaDescription:
      'How Alliance Health administers NC Medicaid RB-BHT (ABA) — CCP 8F clinical rules, published fee-schedule rates, and the state\'s strictest documented enforcement on diagnostic instruments and service orders.',
    intro: [
      'Alliance Health is one of NC\'s four Tailored Plans, and for ABA providers it stands out on two fronts: it publishes an actual rate schedule (the clearest public confirmation of the state fee-schedule floor in action), and its February 2026 RB-BHT guidance enforces diagnostic-instrument and service-order requirements more explicitly than any other NC plan. Clinically it\'s straight CCP 8F — but its documentation bar is where referrals get screened out.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Tailored Plan (public LME/MCO)' },
      { label: 'Clinical rules', value: 'CCP 8F + operational RB-BHT guidance (Feb 2026)' },
      { label: 'Prior auth', value: 'Required per 8F, with Alliance\'s RB-BHT cover sheet' },
      { label: 'Diagnostic bar', value: 'ADI-R, ADOS-2, CARS-2, TELE-ASD-PEDS accepted; GARS/M-CHAT/SRS insufficient alone' },
      { label: 'Service order', value: 'MD/DO/LP-signed, assessment-based, valid 1 year, dated before start' },
      { label: 'Rates (per 15 min)', value: '97151 $30.56 · 97153 $20.81 · 97155 $32.22 · 97156 $23.70' },
    ],
    sections: [
      {
        h2: 'The documentation bar',
        body: [
          'Alliance\'s guidance names the acceptable ASD diagnostic instruments — ADI-R, ADOS-2, CARS-2, and TELE-ASD-PEDS — and explicitly rejects GARS, M-CHAT, and SRS as standalone diagnoses. It\'s equally specific on the service order: signed by an MD, DO, or licensed psychologist, based on a behavioral/adaptive/functional assessment, dated on or before the service start, valid one year — and a bare "medical necessity statement" does not qualify. Screen referral packets against both requirements at intake; sending families back for a qualifying diagnostic evaluation mid-authorization is where NC pipelines stall.',
        ],
        cites: [
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      {
        h2: 'Rates & submission',
        body: [
          'Alliance publishes its standard rate schedule outright — RB-BHT at the state fee-schedule levels, per 15-minute unit, effective 10/1/2025: 97151 $30.56, 97152 $61.73, 97153 $20.81, 97154 $11.37, 97155 $32.22, 97156 $23.70, 97157 $11.51 (noted as subject to LME/MCO funding). Authorization follows the 8F baseline — PA on everything, with authorization length tiered by intensity (180 calendar days at ≤16 hrs/week, 90 above) — and with the plan\'s fillable RB-BHT cover sheet accompanying service requests through Alliance UM. Alliance also participates as a Children & Families Specialty Plan network partner.',
        ],
        cites: [
          { title: 'Alliance Health — Standard Rate Schedule (RB-BHT)', url: 'https://www.alliancehealthplan.org/document-library/97251' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnostic instrument check', desc: 'Confirm the diagnosis used ADI-R, ADOS-2, CARS-2, or TELE-ASD-PEDS — screeners alone will be rejected.' },
      { title: 'Qualifying service order', desc: 'MD/DO/LP-signed, assessment-based, dated on/before start, within 1 year.' },
      { title: 'RB-BHT cover sheet', desc: 'Include Alliance\'s fillable cover sheet with every service request.' },
    ],
    sources: [
      { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
      { title: 'Alliance Health — Standard Rate Schedule', url: 'https://www.alliancehealthplan.org/document-library/97251' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      diagnosticTools: {
        value: 'Alliance enforces the diagnostic-instrument bar more explicitly than any other NC plan: its February 2026 RB-BHT guidance names ADI-R, ADOS-2, CARS-2 and TELE-ASD-PEDS as acceptable and rejects GARS, M-CHAT and SRS as standalone diagnoses. Note the state rule it sits on has since been rewritten — the finalized CCP 8F (eff. 8/1/2026) names BOSA, Tele-ASD-Peds, ADOS-2 and CARS2-ST/CARS2-HF, and does not list ADI-R — so screen referral packets against both lists and confirm the current Alliance guidance version before relying on ADI-R alone.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      referral: {
        value: 'Alliance is the strictest documented enforcer of the state service-order rule: signed by an MD, DO or licensed psychologist, based on a behavioral, adaptive or functional assessment, dated on or before the service start, valid one year — and a bare "medical necessity statement" does not qualify. Alliance’s fillable RB-BHT cover sheet accompanies each service request.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      authTurnaround: {
        value: 'Alliance’s provider manual (V.26, March 2026) sets standard authorization decisions at 14 calendar days and expedited at "72 hours of the request", each extendable by 14 calendar days, with retrospective reviews at 30 calendar days; "All timelines in this document refer to calendar days unless otherwise specified," and "Incomplete forms are not processed and will be returned to the requesting provider." The federal managed-care ceiling for rating periods starting on or after January 1, 2026 is 7 calendar days standard, which reaches NC plans from July 1, 2026 — after this manual edition, so expect 7 and confirm with Alliance UM. Continuing requests are due "on or before the last day of the previously authorized date of service"; CCP 8F requires the RB-BHT reauth before the current authorization expires.',
        status: 'verified',
        cites: [
          { title: 'Alliance Health — Tailored Plan/PIHP Provider Manual (V.26, revised March 2026)', url: 'https://www.alliancehealthplan.org/document-library/79431/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid Standard Plan contract, Amendment 17(18) — "Rating Period" defined as July 1 to June 30', url: 'https://medicaid.ncdhhs.gov/contract-30-190029-dhb-prepaid-health-plan-services-amendment-1718/open' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: '"Alliance Health is the payer of last resort. Providers are required to collect all third-party funds prior to submitting claims." Upload the other insurer’s RA/EOB into ACS with the claim (a $0-paid third-party claim needs the denial documentation), and "Only the remaining amount of the consumer responsibility under their insurance policy is reimbursable by Alliance Health when Medicaid is secondary coverage." If the other insurer pays later, send a replacement claim within 30 calendar days. Pay-and-chase: "EPSDT claims are paid by Medicaid as the primary payer; Alliance Health will seek recovery from any liable third party." State funds pay after Medicaid for state-funded services. The manual does not say whether its own prior authorization is still needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT and carves out no exception for members with other insurance, so get the plan’s authorization on file unless the plan confirms in writing that it is waived. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'Alliance Health — Tailored Plan/PIHP Provider Manual (V.26, revised March 2026)', url: 'https://www.alliancehealthplan.org/document-library/79431/' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule: no per-day unit ceiling is published — the limits are per authorization period. Plans at or under 16 hours a week run 180-day initial and reauthorization cycles; plans above 16 hours a week run 90-day cycles. Within a 180-day period, 97155 telehealth is capped at 50% of 97155 billing and at least six caregiver training sessions are required. Educational-setting and IEP hours are excluded from the treatment-hour calculation.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Alliance Health — Guidance for RB-BHT Providers (Feb 2026)', url: 'https://www.alliancehealthplan.org/provider-updates/guidance-for-rb-bht-providers/' },
        ],
      },
    },
    faq: [
      { q: 'Does Alliance Health cover ABA therapy?', a: 'Yes — as a Tailored Plan, Alliance administers RB-BHT under CCP 8F, paying the state fee-schedule rates (97153 at $20.81/15-min, 97155 at $32.22/15-min, effective 10/1/2025).' },
      { q: 'What diagnostic tools does Alliance accept for ABA?', a: 'ADI-R, ADOS-2, CARS-2, and TELE-ASD-PEDS. GARS, M-CHAT, and SRS are explicitly insufficient as standalone diagnoses — a common reason referral packets bounce.' },
      { q: 'What makes a valid service order for Alliance?', a: 'Signed by an MD, DO, or licensed psychologist; based on a behavioral, adaptive, or functional assessment; dated on or before the service start date; valid one year. A bare medical-necessity statement doesn\'t qualify.' },
    ],
  },

  'trillium-health-resources': {
    slug: 'trillium-health-resources',
    family: '',
    cardDesc: 'Tailored Plan with the best single reference doc: tiered 180/90-day TARs, adult coverage, GT/KX modifier rules.',
    assessmentPA: {
      value: 'Required — TAR (prior authorization) on all RB-BHT codes, telehealth included',
      status: 'verified',
      cites: [
        { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    treatmentPA: {
      value: 'Required — follows CCP 8F §5.1/5.1.1, which is TIERED by intensity: up to 180 calendar days at 16 hrs/week or fewer, but only up to 90 calendar days above 16 hrs/week, for the initial authorization and every reauthorization alike; reauth before the current authorization expires',
      status: 'unverified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
      verifyVia: 'Trillium\'s Medicaid Child BH Services Benefit Plan, next revision. This value\'s flat ‘up to 180 days each’ predates the 8/1/2026 CCP 8F rewrite — §5.1 is tiered (up to 180 calendar days at ≤16 hrs/week, up to 90 above it), and this guide\'s own prose already states the tiering. Reconcile the two before relying on either.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'Trillium Health Resources (NC Tailored Plan)',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · Trillium (NC)',
    h1: 'Trillium Health Resources ABA coverage (NC Tailored Plan).',
    metaTitle: 'Trillium Health Resources (NC Tailored Plan) ABA / RB-BHT Coverage | Carelu',
    metaDescription:
      'How Trillium Health Resources administers NC Medicaid RB-BHT (ABA) — its benefit-plan service definition citing CCP 8F, 180-day TAR cycles, adult coverage under the 2021 SPA, and telehealth modifier rules.',
    intro: [
      'Trillium Health Resources, an eastern-NC Tailored Plan, publishes the single best reference document of the four Tailored Plans: a Medicaid Child Behavioral Health Benefit Plan (revised July 2026) carrying a complete RB-BHT service definition that cites CCP 8F and the 2021 State Plan Amendment as its sources. Nothing in it is clinically distinct from the state baseline — which is exactly what makes it a reliable operational reference for TAR submissions.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Tailored Plan (public LME/MCO, eastern NC)' },
      { label: 'Clinical rules', value: 'CCP 8F via its benefit-plan service definition' },
      { label: 'Prior auth', value: 'TAR required on all codes 97151–97157, telehealth included' },
      { label: 'Auth periods', value: 'Tiered by intensity per CCP 8F §5.1/5.1.1 — up to 180 calendar days at ≤16 hrs/week, up to 90 above; renew before expiry' },
      { label: 'Ages', value: '"Children, Adolescents and Adults" — reflects the 21+ SPA coverage' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'How Trillium runs RB-BHT authorization',
        body: [
          'Every RB-BHT code (97151–97157) requires a TAR — prior authorization — including telephonic and telehealth delivery. The initial request needs the written assessment, diagnosis documentation from a validated tool, and the MD/DO/LP service order; treatment requests add a complete treatment plan signed by the LQASP and the legally responsible person, plus a discharge plan. Under the finalized CCP 8F (effective 8/1/2026), plans at or under 16 hours/week keep 180-day initial and reauthorization periods, while plans above 16 hours/week move to 90-day initial and reauthorization periods; reauth is due before the current one expires either way, and all services are subject to post-payment review. Existing prior authorizations aren\'t affected by the change — no action is needed, and no existing PA\'s duration will be reduced; the new 90-day cadence binds only future reauthorizations. Units run in 15-minute increments with no published unit caps.',
          'Telehealth mechanics, now finalized under CCP 8F effective August 1, 2026: telehealth is removed entirely — no documented-necessity exception — for the paraprofessional-delivered codes 97152, 97153, and 97154. 97151 retains telehealth eligibility with clinical justification, and 97155 retains it but capped at a maximum of 50% of total 97155 billing per beneficiary per 180-calendar-day period. 97156/97157 keep their own separate telephonic/KX caregiver-access-barrier exception, unchanged. LOCUS/CALOCUS is no longer required, but a standardized assessment tool is still expected.',
        ],
        cites: [
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
        ],
      },
    ],
    collect: [
      { title: 'Assessment + service order', desc: 'Written assessment, validated-tool diagnosis documentation, and the MD/DO/LP order — all required at the initial TAR.' },
      { title: 'Signatures', desc: 'Treatment plans need the LQASP and the legally responsible person\'s signatures.' },
      { title: 'Reauth calendar', desc: '180-day cycles for plans ≤16 hrs/week, 90-day cycles for plans >16 hrs/week (per the finalized CCP 8F, eff. 8/1/2026), with renewal due before expiry — put it on the calendar at intake.' },
      { title: 'Age', desc: 'Trillium\'s benefit plan covers adults too — don\'t screen out 21+ inquiries reflexively.' },
    ],
    sources: [
      { title: 'Trillium — Medicaid Child BH Services Benefit Plan', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule — no upper age bound. Trillium is explicit about it: its Medicaid Child Behavioral Health Benefit Plan lists RB-BHT for "Children, Adolescents and Adults," reflecting the 2021 State Plan Amendment that extended coverage past 21. Under-21 members carry EPSDT; under-3s may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule, enforced at the TAR: the initial request needs the written assessment, diagnosis documentation from a validated tool, and the MD/DO/Licensed Psychologist service order; treatment requests add a complete treatment plan signed by the LQASP and the legally responsible person, plus a discharge plan. Every RB-BHT code (97151–97157) requires a TAR, telehealth and telephonic delivery included.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Trillium’s July 2026 manual lists "7 calendar days for a routine request" and "72 hours for an expedited request" alongside timely responses to Treatment Authorization Requests (TARs), and says formal decisions are made only "when a complete request is received." Submit TARs "at least 7 days prior to the end date of the current authorization"; for RB-BHT the benefit plan adds "Reauth must be submitted prior to initial or concurrent auth expiring" (up to 180 days at 16 hours a week or fewer, up to 90 above). A service cannot be authorized "if requested more than 30 days in advance." The 7-day figure matches the federal managed-care ceiling for NC plans from July 1, 2026.',
        status: 'verified',
        cites: [
          { title: 'Trillium Health Resources — BH I/DD Tailored Plan/PIHP Provider Manual (eff. 7/20/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Provider-documents/Provider-Manual/Trillium-TP-Provider-Manual.pdf' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 8/31/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Trillium pays last, and it answers the secondary-auth question the opposite way to most plans: "The requested service cannot be authorized if the member has private insurance, and the provider should seek authorization from primary insurance source. Medicaid is the payor of last resort." So for a child with commercial coverage, get the ABA authorization from the commercial plan, "Bill all first - and third-party payers prior to submitting claims to Trillium", and record the other payer’s payment or denial on the claim (keep the EOB). Claims go to the primary insurer first, "then secondary insurance after the initial EOB has been received." Exceptions paid without TPL first include medical support enforcement (coverage through an absent parent) and "Preventive Pediatric Services including … EPSDT". Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 8/31/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: 'Trillium Health Resources — BH I/DD Tailored Plan/PIHP Provider Manual (eff. 7/20/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Provider-documents/Provider-Manual/Trillium-TP-Provider-Manual.pdf' },
          { title: 'Trillium — Claims Billing Guide 2026', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Provider-documents/Claims/Trillium-Claims-Billing-Guide.pdf' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule. Trillium states there are no published unit caps — units run in 15-minute increments — so the binding limits are the authorization periods: 180-day initial and reauthorization cycles at or under 16 hours a week, 90-day cycles above it, with reauthorization due before the current one expires and all services subject to post-payment review. Existing prior authorizations are unaffected by the change and none will be shortened.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
          { title: 'NC Medicaid — Updated reminder: RB-BHT service delivery requirements (8/31/2026)', url: 'https://medicaid.ncdhhs.gov/blog/2026/08/31/updated-reminder-requirements-research-based-behavioral-health-treatment-service-delivery-aug-31' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Trillium — Medicaid Child BH Services Benefit Plan (rev. 7/2026)', url: 'https://www.trilliumhealthresources.org/sites/default/files/docs/Benefit-Plans-Services-Definitions/Trillium-Medicaid-Child-BH-Benefit-Plan.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Trillium cover ABA therapy?', a: 'Yes — RB-BHT under CCP 8F, with a TAR (prior authorization) required for every code including telehealth delivery, in 180-day cycles (90-day for plans above 16 hours/week under the finalized 8F, effective 8/1/2026).' },
      { q: 'Does Trillium cover ABA for adults?', a: 'Its benefit plan lists RB-BHT for "Children, Adolescents and Adults," reflecting the 2021 State Plan Amendment that extended NC RB-BHT coverage past age 21.' },
      { q: 'Can Trillium ABA services be delivered by telehealth?', a: 'Only in part, under the finalized CCP 8F (effective 8/1/2026): telehealth is removed entirely for 97152, 97153, and 97154; 97151 keeps it with clinical justification; 97155 keeps it capped at 50% of billing per beneficiary per 180 days; 97156/97157 keep their separate telephonic/KX caregiver-barrier exception.' },
    ],
  },

  'vaya-health': {
    slug: 'vaya-health',
    family: '',
    cardDesc: 'Western-NC Tailored Plan; 8F via SARs to Vaya UM — key documents must be pulled manually.',
    assessmentPA: {
      value: 'Required — per 8F; Vaya publishes RB-BHT authorization guidelines (v2.0, eff. 9/2025) on its provider portal',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — service authorization requests (SARs) reviewed by Vaya UM against 8F medical necessity',
      status: 'verified',
      cites: [
        { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'Vaya Health (NC Tailored Plan)',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · Vaya Health (NC)',
    h1: 'Vaya Health ABA coverage (NC Tailored Plan).',
    metaTitle: 'Vaya Health (NC Tailored Plan) ABA / RB-BHT Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Vaya Health (Vaya Total Care) administers NC Medicaid RB-BHT (ABA) in western North Carolina — CCP 8F administration through SARs to Vaya UM, and which plan documents to pull from the provider portal.',
    intro: [
      'Vaya Health — operating the "Vaya Total Care" Tailored Plan across western North Carolina — administers RB-BHT as straight CCP 8F, with authorization running through service authorization requests (SARs) to Vaya\'s in-house UM team. Its provider-document library previously blocked automated access; as of this review its authorization guidelines are readable directly, and the code-level passthrough thresholds below are confirmed from Vaya\'s own document text rather than inferred.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Tailored Plan (public LME/MCO, western NC — "Vaya Total Care")' },
      { label: 'Clinical rules', value: 'CCP 8F; Vaya RB-BHT authorization guidelines v2.0 (eff. 9/2025)' },
      { label: 'Prior auth', value: 'Required — SARs to Vaya UM' },
      { label: 'UM contact', value: '(800) 893-6246 ext. 1513 · UM@vayahealth.com' },
      { label: 'Portal', value: 'providers.vayahealth.com' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor); Vaya publishes its own rate schedule' },
    ],
    sections: [
      {
        h2: 'How Vaya administers RB-BHT',
        body: [
          'The clinical picture is the CCP 8F baseline: PA on all services including the 97151 comprehensive assessment (which Vaya\'s guidelines designate as LQASP-billed), authorization cycles tiered by intensity (180 calendar days at ≤16 hrs/week, 90 days above), and LQASP treatment-plan reviews. SARs submit through the provider portal and are reviewed by Vaya UM against medical necessity and the clinical coverage policy.',
          'Vaya\'s "Authorization Guidelines: Medicaid RB-BHT Services for ASD" (v2.0, rev. 9/5/2025 — still current, no v2.1/2026 update found) sets specific passthrough thresholds worth building into intake: 97151 assessment requests up to 32 units per six months go through as notification-only, without a full SAR, while requests above 32 units need a complete SAR (service order, treatment plan, MD/DO/psychologist-validated ASD diagnosis). 97155 (protocol modification by a BCBA-LP) similarly passes through on notification alone up to a 1-hour-per-10-hours ratio against direct intervention (97153/97154); above that ratio it needs a full SAR for medical-necessity review. All other codes (97152, 97153, 97154, 97156, 97157) require a SAR plus FBA, treatment plan, and service order on both initial and concurrent requests. A companion document, "RB-BHT Guidance" (v1.0, rev. 5/1/2025), restates the CCP 8F service definitions and clarifies "Program Modification vs. Supervision" for 97155.',
        ],
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
          { title: 'Vaya Health — RB-BHT Guidance (v1.0, rev. 5/1/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/05/RB_BHT_Guidance_20250522.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Member county', desc: 'Vaya\'s footprint is western NC — confirm the county maps to Vaya before intake.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per CCP 8F, with the MD/DO/LP service order.' },
      { title: 'Unit thresholds', desc: '97151 ≤32 units/6mo and 97155 ≤1hr-per-10hrs ratio pass through on notification only — above either, a full SAR is required.' },
    ],
    sources: [
      { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
      { title: 'Vaya Health — RB-BHT Guidance (v1.0, rev. 5/1/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/05/RB_BHT_Guidance_20250522.pdf' },
      { title: 'Vaya Health — prior authorization page', url: 'https://providers.vayahealth.com/authorization-information/prior-authorization/' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule (MD/DO/Licensed Psychologist service order, assessment-based, dated on or before the start, valid one year), with Vaya-specific passthrough thresholds that decide whether a full service authorization request is needed: 97151 up to 32 units per six months passes through on notification alone, and above that needs a complete SAR carrying the service order, treatment plan and MD/DO/psychologist-validated ASD diagnosis. 97152, 97153, 97154, 97156 and 97157 always need a SAR with FBA, treatment plan and service order on both initial and concurrent requests.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Vaya: "Vaya will issue a decision and provide notice within 14 calendar days of receipt of the request", extendable up to 14 more calendar days, and expedited requests "within 72 hours following acceptance of an expedited request." When information is missing, providers "have up to three business days to submit any requested additional information" or the request is returned. Lead time is explicit: "Submit SARs at least 14 days before the end of the existing authorization … to avoid a gap in authorization or payment." The federal managed-care ceiling for rating periods starting on or after January 1, 2026 is 7 calendar days standard, which reaches NC plans from July 1, 2026 — after Vaya’s March 2026 manual, so expect 7 and confirm with Vaya UM. RB-BHT authorizations run 180 days at 16 hours a week or fewer, 90 above.',
        status: 'verified',
        cites: [
          { title: 'Vaya Health — prior authorization page', url: 'https://providers.vayahealth.com/authorization-information/prior-authorization/' },
          { title: 'Vaya Health — Provider Operations Manual v3.1 (3/5/2026)', url: 'https://providers.vayahealth.com/resources/vaya_provider_operations_manual_3-1_20260305/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid Standard Plan contract, Amendment 17(18) — "Rating Period" defined as July 1 to June 30', url: 'https://medicaid.ncdhhs.gov/contract-30-190029-dhb-prepaid-health-plan-services-amendment-1718/open' },
        ],
      },
      coordinationOfBenefits: {
        value: '"Medicaid is the payor of last resort. Providers are required to collect all first- and third-party funds prior to submitting claims to Vaya." Wait a reasonable time for the other payer, keep its RA/EOB or other proof of payment or denial, and bill Vaya only the remaining amount; such claims are due "within 180 days of the date you receive a remittance from a first- or second-party payor." Where the member also uses state-funded services, state funds pay last. The manual does not say whether its own prior authorization is still needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT and carves out no exception for members with other insurance, so get the plan’s authorization on file unless the plan confirms in writing that it is waived. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'Vaya Health — Provider Operations Manual v3.1 (3/5/2026)', url: 'https://providers.vayahealth.com/resources/vaya_provider_operations_manual_3-1_20260305/' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule (10% LQASP observation floor; 10–20% LQASP-to-paraprofessional ratio above 200 paraprofessional hours per 180 days). Vaya adds an authorization threshold on top: 97155 protocol modification by a BCBA-LP passes through on notification alone up to a ratio of one hour per ten hours of direct intervention (97153/97154); above that ratio it needs a full SAR for medical-necessity review.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule — no per-day unit ceiling, with limits set per authorization period. Vaya’s own thresholds are the practical ones at intake: 97151 up to 32 units per six months and 97155 up to a 1-hour-per-10-hours ratio against direct intervention pass through on notification, and anything above either needs a full SAR.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule: a professional CMS-1500/837P claim through the plan, with Attachment B fixing which provider type may render each code; behavior technicians must hold RBT or ABAT certification within 120 calendar days of hire or of the agency’s first Medicaid enrollment, and all LQASPs and C-QPs must enroll as in-state NC providers as of August 2, 2026.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Vaya Health — Authorization Guidelines: Medicaid RB-BHT Services for ASD (v2.0, rev. 9/5/2025)', url: 'https://providers.vayahealth.com/wp-content/uploads/2025/09/Authorization_Guidelines_Medicaid_RB_BHT_ASD.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Vaya Health cover ABA therapy?', a: 'Yes — as a Tailored Plan, Vaya administers RB-BHT under CCP 8F, with service authorization requests reviewed by its UM team ((800) 893-6246 ext. 1513, UM@vayahealth.com).' },
      { q: 'Does every Vaya ABA request need a full SAR?', a: 'No — 97151 assessment requests up to 32 units per 6 months and 97155 up to a 1-hour-per-10-hours ratio against direct intervention pass through on notification alone. Above either threshold, a complete SAR (service order, treatment plan, validated diagnosis) is required.' },
    ],
  },

  'partners-health-management': {
    slug: 'partners-health-management',
    family: '',
    cardDesc: 'Tailored Plan with the ALL-codes authorization: one auth covers every RB-BHT code via ProAuth.',
    assessmentPA: {
      value: 'Required — per adopted CCP 8F',
      status: 'verified',
      cites: [
        { title: 'Partners — Tailored Plan clinical coverage policies', url: 'https://www.partnersbhm.org/tailoredplan/providers/manuals-forms-and-policies/clinical-coverage-policies/' },
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    treatmentPA: {
      value: 'Required — one "ALL codes" authorization on the base code covers every RB-BHT code/modifier',
      status: 'verified',
      cites: [
        { title: 'Partners — ALL-codes authorization provider alert', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD via a validated diagnostic tool; under-3s may start on a provisional diagnosis',
      status: 'verified',
      cites: [
        { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
      ],
    },
    payer: 'Partners Health Management (NC Tailored Plan)',
    state: 'NC', kind: 'medicaid-mco', parent: 'North Carolina Medicaid',
    pill: 'Payer Guide · Partners (NC)',
    h1: 'Partners Health Management ABA coverage (NC Tailored Plan).',
    metaTitle: 'Partners Health Management (NC Tailored Plan) ABA / RB-BHT Coverage | Carelu',
    metaDescription:
      'How Partners Health Management administers NC Medicaid RB-BHT (ABA) — CCP 8F adoption, the provider-friendly ALL-codes authorization model in ProAuth, and the recoupment caveat that comes with it.',
    intro: [
      'Partners Health Management, a Tailored Plan, adopts NC\'s clinical coverage policies outright for medical-necessity decisions — 8F included — and runs the most provider-friendly authorization model in the state: since October 2023, RB-BHT authorizations issue as "ALL codes," meaning one authorization on the base code covers every RB-BHT service code and modifier combination, telehealth included. The flexibility is real; so is the caveat that billing outside the approved treatment plan risks recoupment.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'NC Tailored Plan (public LME/MCO)' },
      { label: 'Clinical rules', value: 'CCP 8F adopted for medical-necessity decisions' },
      { label: 'Prior auth', value: 'Required — single ALL-codes authorization per member' },
      { label: 'Portal', value: 'ProAuth (base code as Primary Procedure Code on Prescreen)' },
      { label: 'UM contact', value: 'UMQuestions@partnersbhm.org' },
      { label: 'Rates', value: '≥100% of the NC Medicaid fee schedule (state floor)' },
    ],
    sections: [
      {
        h2: 'The ALL-codes authorization model',
        body: [
          'Instead of code-by-code authorizations, Partners issues one authorization covering all RB-BHT codes and modifiers: submit via ProAuth entering the base code as the Primary Procedure Code on the Prescreen and selecting the Treatment Type from the dropdown; authorizations are then visible in both ProAuth and Alpha. Operationally this means clinical teams can flex between assessment, direct treatment, supervision, and parent training without new requests — but every billed unit must still trace to the approved treatment plan, because Partners pairs the flexibility with post-payment review and recoupment for out-of-plan billing.',
          'Partners also runs an Autism Services Learning Collaborative for its network ABA providers, and its Tailored Plan documentation cross-references Carolina Complete Health policies through a Centene infrastructure partnership.',
        ],
        cites: [
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
          { title: 'Partners — Tailored Plan clinical coverage policies (adopts 8F)', url: 'https://www.partnersbhm.org/tailoredplan/providers/manuals-forms-and-policies/clinical-coverage-policies/' },
        ],
      },
    ],
    collect: [
      { title: 'Treatment-plan alignment', desc: 'The ALL-codes auth only protects billing that matches the approved plan — keep the plan current as services shift.' },
      { title: 'ASD diagnosis + validated tool', desc: 'Per adopted CCP 8F, with the MD/DO/LP service order.' },
      { title: 'ProAuth setup', desc: 'Base code on the Prescreen, Treatment Type from the dropdown — train the intake/billing handoff on it once.' },
    ],
    sources: [
      { title: 'Partners — Tailored Plan clinical coverage policies', url: 'https://www.partnersbhm.org/tailoredplan/providers/manuals-forms-and-policies/clinical-coverage-policies/' },
      { title: 'Partners — ALL-codes authorization provider alert', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
      { title: 'NC Medicaid — Clinical Coverage Policy 8F', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the NC Medicaid rule: CCP 8F carries no upper age bound (the 8/1/2026 rewrite removed "under 21 years of age" from the eligibility provision), under-21 members carry the EPSDT special provision, and beneficiaries under three may start on a provisional diagnosis.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      dxRecency: {
        value: 'Follows the NC Medicaid rule: no expiry on the ASD diagnosis itself, but a provisional under-3 diagnosis must become non-provisional within six months, an adaptive behavior assessment must be under 3 years old, and diagnostic documentation must be verified and on file before services start.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the NC Medicaid rule: a non-provisional ASD diagnosis comes from a Licensed Psychologist, a supervised Licensed Psychological Associate, or a physician (MD or DO); a Licensed School Psychologist evaluation may be used where the required testing is included; a provisional under-3 diagnosis may also come from a trained master’s-level licensed clinician within scope.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      diagnosticTools: {
        value: 'Follows the NC Medicaid rule: the ASD diagnosis must use BOSA, Tele-ASD-Peds, ADOS-2, or CARS2-ST/CARS2-HF; screeners, educational determinations and informal impressions cannot start services. The packet also needs a skills assessment (VB-MAPP, ABLLS-R or ESDM Curriculum Checklist), an FBA where challenging behaviors are targeted, and an adaptive behavior assessment within 3 years (VABS-3, ABAS-3 or DP-4).',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      referral: {
        value: 'Follows the NC Medicaid rule: a service order signed and dated by a Licensed MD, DO or Licensed Psychologist, in place on or before the first date of service, based on a behavioral/adaptive/functional assessment and treatment plan, valid one year and re-ordered annually. 97151 and 97152 need no service order for prior approval; 97153–97157 do.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      telehealth: {
        value: 'Follows the NC Medicaid rule (Attachment A, eff. 8/1/2026): GT telehealth is billable for 97151 with clinical justification and for 97155 up to 50% of total 97155 billing per beneficiary per 180 days; telehealth is removed entirely for 97152, 97153 and 97154; 97156 and 97157 remain telehealth eligible and are the only KX telephonic services, on a documented caregiver health or access barrier.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      authTurnaround: {
        value: 'Partners’ operations manual: "Partners must decide and provide notice within 14 calendar days of receiving a standard request for authorization of service with a possible extension of an additional 14 calendar days", and within 72 hours for expedited requests (expedited concurrent within 24 hours). Its January 2026 bulletin says the CMS prior-authorization timeframes "have been postponed to July 1, 2026" — from then the federal ceiling is 7 calendar days standard, so expect 7 now and confirm with Partners UM. "Services are expected to be requested on or before the start date"; a request submitted more than 30 days before the start date is administratively denied. CCP 8F requires the RB-BHT reauth before the current authorization expires.',
        status: 'verified',
        cites: [
          { title: 'Partners Health Management — 2025-2026 Provider Operations Manual (rev. 20250623)', url: 'https://providers.partnersbhm.org/wp-content/uploads/partners-provider-operations-manual.pdf' },
          { title: 'Partners — Provider Communication Bulletin #172 (CMS prior-auth timeframes postponed to 7/1/2026)', url: 'https://providers.partnersbhm.org/provider-communication-bulletin-172/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization decision timeframes', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
        ],
      },
      coordinationOfBenefits: {
        value: '"Federal and state regulations require Medicaid to be the payer of last resort": Medicare and private carriers "must process the claim before Partners processes a Medicaid claim", and "Medicaid claims submitted without third-party information will be denied." Partners pays only the gap up to its contracted rate, and "will not pay for any service that could have been paid for by Medicare or other private insurance plans had the member or provider complied with the plan\'s requirements" — including failure to obtain the other plan’s prior approval — so follow the commercial plan’s ABA precert rules to the letter. Codes on Partners’ TPL/Medicare bypass list skip the other payer; no RB-BHT code is on it. The manual does not say whether its own prior authorization is still needed when it pays second; CCP 8F requires prior approval before rendering RB-BHT and carves out no exception for members with other insurance, so get the plan’s authorization on file unless the plan confirms in writing that it is waived. Under federal rules TRICARE pays before Medicaid and CHAMPVA pays first when the child is also Medicaid-eligible.',
        status: 'verified',
        cites: [
          { title: 'Partners Health Management — 2025-2026 Provider Operations Manual (rev. 20250623)', url: 'https://providers.partnersbhm.org/wp-content/uploads/partners-provider-operations-manual.pdf' },
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'TRICARE — Using Other Health Insurance (updated 10/17/2025)', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA Guidebook (updated 1/1/2025), CHAMPVA as secondary payer', url: 'https://www.va.gov/files/2025-12/CHAMPVA-Guidebook.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the NC Medicaid rule: at least 10% of paraprofessional-delivered services must involve LQASP observation and direction, and above 200 paraprofessional hours per 180 days the LQASP-to-paraprofessional ratio must sit between 10% and 20%, documented in the treatment plan with deviations clinically justified. Incidental supervision is not billable.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      concurrentBilling: {
        value: 'Follows the NC Medicaid rule: 97153 or 97154 may be billed concurrently with 97155 when a paraprofessional delivers the direct service under an eligible provider’s observation, but a single rendering provider may not bill 97153/97154 and 97155 simultaneously. 97151, 97152, 97156 and 97157 allow no concurrent billing, and non-RB-BHT services may not be billed for the same clock time.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      dailyLimits: {
        value: 'Follows the NC Medicaid rule — no per-day unit ceiling, limits set per authorization period. Partners’ own model is unusually permissive on codes: since October 2023 one authorization on the base code covers every RB-BHT code and modifier combination, telehealth included, submitted through ProAuth with the base code as Primary Procedure Code on the Prescreen. The flexibility is paired with post-payment review — every billed unit must trace to the approved treatment plan or face recoupment.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      noteSignature: {
        value: 'Follows the NC Medicaid rule: the staff member who delivered the service signs the note with credentials (professional) or job title (paraprofessional), and an LQASP or C-QP is not required to countersign a note written by non-LQASP/C-QP staff. A full note is required per contact per date of service with the elements listed in 8F subsection 5.5.1, and the treatment plan is signed and dated by the LQASP and the consenting party before services begin.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      placeOfService: {
        value: 'Follows the NC Medicaid rule: clinic, home, school and community settings are all payable in any combination, individually justified and documented in the treatment plan, with the goal of advancing toward natural settings. IDEA-duplicative school services are excluded, and telehealth or telephonic claims carry the provider’s usual place-of-service code.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
      billAsProvider: {
        value: 'Follows the NC Medicaid rule on rendering-provider eligibility, the professional claim and the 120-day RBT/ABAT certification clock. Partners issues authorizations as "ALL codes" on the base code, so the claim’s code and modifier can flex within the approved treatment plan without a new request — but billing outside that plan is recouped.',
        status: 'verified',
        cites: [
          { title: 'NC Medicaid — Clinical Coverage Policy 8F (RB-BHT), rewritten & published, Amended Date 8/1/2026', url: 'https://medicaid.ncdhhs.gov/8f-research-based-behavioral-health-treatment-rb-bht-autism-spectrum-disorder-asd/open' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
          { title: 'Partners — RB-BHT authorizations transition to ALL codes (provider alert)', url: 'https://providers.partnersbhm.org/authorizations-for-research-based-behavioral-health-treatment-transition-to-all-codes/' },
        ],
      },
    },
    faq: [
      { q: 'Does Partners Health Management cover ABA therapy?', a: 'Yes — as a Tailored Plan it adopts CCP 8F for RB-BHT medical-necessity decisions, with prior authorization required per the state baseline.' },
      { q: 'What is the ALL-codes authorization?', a: 'Since October 2023, one Partners authorization on the base code covers all RB-BHT codes and modifiers — no code-by-code requests. Billing must still match the approved treatment plan or risk recoupment.' },
      { q: 'How do I submit an RB-BHT authorization to Partners?', a: 'Through ProAuth: enter the base code as the Primary Procedure Code on the Prescreen, select the Treatment Type from the dropdown. Questions go to UMQuestions@partnersbhm.org.' },
    ],
  },

  'aetna-north-carolina': {
    slug: 'aetna-north-carolina',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the N.C.G.S. § 58-3-192 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'plan-dependent',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      ],
      verifyVia: 'The member\'s Aetna plan (benefits line on the card) — ask whether the group carries ABA precertification and what reauthorization interval it uses. The national behavioral-health precertification list carries ABA but the interval and any self-funded carve-out are set at group level.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    payer: 'Aetna in North Carolina',
    state: 'NC', kind: 'commercial',
    pill: 'Payer Guide · Aetna · North Carolina',
    h1: 'Aetna ABA coverage in North Carolina: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in North Carolina: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for North Carolina families — the national clinical policy, prior authorization, the N.C.G.S. § 58-3-192 mandate (ages, caps, exemptions), North Carolina behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in North Carolina, a Aetna card means three layers at once: the carrier\'s national clinical policy, North Carolina\'s autism insurance mandate (N.C.G.S. § 58-3-192), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'N.C.G.S. § 58-3-192' },
      { label: 'Mandate age', value: 'May be limited to 18 and younger (parity-limited)' },
      { label: 'Mandate caps', value: '$40,000/yr cap, CPI-indexed (parity-limited)' },
      { label: 'Exempt from mandate', value: 'Non-grandfathered individual/small group; self-funded ERISA' },
      { label: 'Licensure', value: 'NC Licensed Behavior Analyst (NCBALB, since 2023)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in North Carolina',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in North Carolina is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in North Carolina.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The North Carolina mandate: what it guarantees (and doesn\'t)',
        body: [
          'North Carolina’s mandate (effective July 2016) requires covered health benefit plans to cover “adaptive behavior treatment” — the statutory term; ABA itself isn’t named, but board certified behavior analysts are among the eight authorized provider categories, and treatment must be ordered by a licensed physician or licensed psychologist. Coverage may be limited to individuals 18 or younger and capped at $40,000/year (CPI-indexed from 2017). Two big carve-outs: the mandate does not apply to non-grandfathered individual and small-group plans (the ACA essential-health-benefits segment), and self-funded ERISA plans are exempt by preemption. The age and dollar limits are quantitative treatment limits of doubtful enforceability under MHPAEA for large-group plans.',
        ],
        cites: [
      { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
      { title: 'Autism Speaks — North Carolina state-regulated coverage', url: 'https://www.autismspeaks.org/north-carolina-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No North Carolina-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no North Carolina-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where North Carolina-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in North Carolina',
        body: [
          'North Carolina licenses behavior analysts under the Behavior Analyst Licensure Act (2021), with the NC Behavior Analyst Licensure Board accepting applications since July 2023 — ending the old regime where BCBAs worked under licensed-psychologist supervision. Commercial credentialing now runs on the LBA/LaBA license. On rates: Aetna does not publish commercial ABA fee schedules for North Carolina (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'North Carolina Behavior Analyst Licensure Board', url: 'https://ncbehavioranalystboard.org/' },
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
      { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
      { title: 'Autism Speaks — North Carolina state-regulated coverage', url: 'https://www.autismspeaks.org/north-carolina-state-regulated-insurance-coverage' },
      { title: 'North Carolina Behavior Analyst Licensure Board', url: 'https://ncbehavioranalystboard.org/' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no coverage age cap. The ABA medical necessity guide describes typical rather than limiting parameters: comprehensive ABA at 10–25 hours a week is typical for ages 0–7 over 1–2 years, while focused ABA at 1–20 hours a week is listed for all ages over 1–4 years. Where the member’s benefit plan or a state mandate carries an age term, that governs. North Carolina’s mandate permits coverage to be limited to individuals 18 or younger and capped at $40,000 a year (CPI-indexed from 2017) on fully insured plans — quantitative treatment limits of doubtful enforceability against large-group plans under MHPAEA. The mandate does not apply to non-grandfathered individual and small-group plans, and self-funded ERISA plans are exempt by preemption.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
        verifyVia: 'Live benefits verification on the member ID — establish fully insured vs. self-funded ERISA, then the plan’s own age and benefit terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Aetna puts no expiry on the ASD diagnosis itself, but it does run a 12-month clock on the functional evidence: medical necessity requires demonstration of functional impairment on a standardized scale of functioning in the past 12 months, at least one standard deviation below the population mean, or a significant risk of harm to self or others. Progress is then re-evaluated every six months.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A DSM-5 diagnosis of Autism Spectrum Disorder (ICD-10 F84.0, F84.3–F84.9) obtained by an appropriate provider — the medical necessity guide names a licensed psychologist or psychiatrist, a physician, or another health care professional qualified to diagnose mental health conditions within their scope of practice. CPB 0648 separately lists the professionals appropriate to an ASD evaluation: board certified behavior analyst, developmental pediatrician, neurologist, occupational therapist, physical therapist, primary care provider, psychiatrist, psychologist, and speech-language pathologist and audiologist.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the diagnostic instruments behind an ASD diagnosis: ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA medical necessity guide then requires a standardized measure of functioning administered within the past 12 months — it gives the Vineland Adaptive Behavior Scales 3, the Adaptive Behavior Assessment Scale, VB-MAPP and ABLLS as examples — with impairment at least one standard deviation below the population mean or representing a significant risk of harm.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral, order or prescription — the only prescription requirement in the medical necessity guide sits in its Maryland exhibit under COMAR 31.10.39, which does not reach NC. What Aetna requires nationally is precertification: its participating-provider behavioral health precertification list names all ten ABA codes — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T — and ABA precertification runs on form GR-69017-4 through Availity or the number on the member ID card. For a fully insured North Carolina plan the state mandate adds an ordering requirement the carrier policies do not: adaptive behavior treatment must be ordered by a licensed physician or licensed psychologist. The mandate does not reach non-grandfathered individual and small-group plans, and self-funded ERISA plans sit outside state insurance law entirely — establish plan funding type before relying on it.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
      },
      telehealth: {
        value: 'Not addressed. Neither CPB 0554, CPB 0648 nor the ABA medical necessity guide sets telehealth rules or place-of-service codes for ABA; the behavioral health provider manual covers telemedicine only as a member-facing Teladoc-style offering that self-insured plan sponsors may opt out of.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
        verifyVia: 'Availity, or the precertification line on the member ID card — ask which ABA codes Aetna will pay via telehealth on this specific plan, and with which POS code and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Aetna publishes no day counts of its own: its 2026 manual says "The timing of the review incorporates state, federal, CMS and NCQA requirements," and ABA services "require prior authorization" by calling the number on the member ID card. So the governing clock depends on funding. For a fully insured plan issued in North Carolina, G.S. 58-50-61(f) governs: "Prospective and concurrent determinations shall be communicated to the covered person\'s provider within three business days after the insurer obtains all necessary information" — the clock starts on complete information, not receipt, and the statute sets no separate faster clock for an urgent first decision (its expedited track is for appeals). In concurrent review "the insurer shall remain liable for health care services until the covered person has been notified of the noncertification." A self-funded employer plan sits outside state law and follows ERISA: a non-urgent pre-service decision "not later than 15 days after receipt of the claim by the plan", extendable once by up to 15 days; an urgent one within 72 hours; the clock starts when the request is filed, whether or not it is complete; and an urgent request to extend an approved course is decided within 24 hours if made "at least 24 hours prior to the expiration" of the current authorization.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Provider and behavioral health manual (June 2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'N.C. Gen. Stat. § 58-50-61 — utilization review (prospective/concurrent determinations)', url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_58/GS_58-50-61.html' },
          { title: '29 CFR 2560.503-1(f) — ERISA claims procedure: group health plan decision timeframes', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (a policy issued in the state) or a self-funded employer (ERISA) plan — that decides which clock applies — then ask the carrier’s behavioral health precert line its expected ABA turnaround and how early it wants the reauth.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'North Carolina’s COB rule for insured group plans (11 NCAC 12 .0514) sets the order: the plan covering the person as employee or subscriber pays before the plan covering them as a dependent; for a child of parents not separated, "the benefits of the Health Plan of the parent whose birthday falls earlier in a year are determined before those of the Health Plan of the parent whose birthday falls later" (same birthday: the longer-running plan first); for separated or divorced parents the custodial parent’s plan pays first, then the custodial parent’s spouse’s, then the non-custodial parent’s, unless a court decree the plan knows of assigns responsibility; Medicaid is expressly outside that rule. Self-funded plans follow their own plan document. Aetna says it coordinates "as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member\'s plan" (it names the NAIC birthday and divorced-parent rules); on a secondary claim, send the primary payer’s paid/denied data in the 837 COB loops. Government coverage sorts itself by federal rule: a commercial plan pays before TRICARE, which is secondary to every other health plan but "In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer"; CHAMPVA "is the last payer to OHI"; and Medicaid pays after all of them (42 CFR 433.139), so a child with commercial plus Medicaid needs this plan’s authorization and EOB before Medicaid will pay.',
        status: 'plan-dependent',
        cites: [
          { title: '11 NCAC 12 .0514 — coordination of benefits, order of benefit determination (readopted eff. 7/1/2020)', url: 'http://reports.oah.state.nc.us/ncac/title%2011%20-%20insurance/chapter%2012%20-%20life%20and%20health%20division/11%20ncac%2012%20.0514.pdf' },
          { title: 'Aetna — Provider and behavioral health manual (June 2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — Coordination of benefits billing tips', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/COB-billing-tips.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (secondary to other plans, primary to Medicaid)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276 — CHAMPVA is the last payer to other health insurance', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
          { title: '42 CFR 433.139 — payment of claims involving third-party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
        verifyVia: 'Collect both parents’ plans, dates of birth, and any custody decree at intake; confirm primary/secondary with each carrier’s COB unit (and whether the plan is self-funded) before the first claim.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope, unless state mandates, plan documents or contracts require otherwise. Where a mandate, plan document or contract does allow authorization for services not directly provided by such a person, there must be supervision and direction of the unlicensed or non-certified provider in line with practice standards. Aetna publishes no numeric supervision ratio.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies — CPB 0554, CPB 0648 and the ABA medical necessity guide are silent on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'Aetna provider services / the participating-provider agreement, or a written coding determination from Aetna Behavioral Health (BACABACases@Aetna.com).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Aetna publishes no per-day or per-week unit ceiling for ABA. Authorized hours are set from documented symptom severity using the medical necessity guide’s severity assessment, against typical intensities of 10–25 hours a week for comprehensive and 1–20 hours a week for focused programmes — typical, not cap. Progress is evaluated every six months and coverage ends on the guide’s improvement thresholds. North Carolina’s mandate permits coverage to be limited to individuals 18 or younger and capped at $40,000 a year (CPI-indexed from 2017) on fully insured plans — quantitative treatment limits of doubtful enforceability against large-group plans under MHPAEA. The mandate does not apply to non-grandfathered individual and small-group plans, and self-funded ERISA plans are exempt by preemption.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
      },
      noteSignature: {
        value: 'Not addressed. Aetna’s published ABA policies set treatment-plan content requirements — defined target behaviors, baseline measures, quantifiable progress criteria, generalization strategies, transition and titration planning — but do not specify who must sign a session note or by when.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual section on documentation and record retention.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-agnostic in Aetna’s guide, which notes only that where ABA is delivered in an inpatient, residential or partial hospitalization setting the medical necessity criteria for that level of care apply and no separate ABA authorization is needed. The guide expects collaboration and coordination with existing providers and the school district as applicable, and a treatment plan that tapers higher intensities toward supports from other sources such as school. Aetna’s statement that it will not deny coverage solely because services are in a child’s educational setting is a Maryland provision, not national, and Aetna is not required to provide services under an IEP or an IDEA obligation of a public school.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by the appropriately licensed provider: licensed behavior analysts in states with licensure laws, board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope — unless state mandates, plan documents or contracts require otherwise.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in North Carolina?', a: 'Yes — under the carrier\'s national policy for ASD, layered on North Carolina\'s mandate (N.C.G.S. § 58-3-192) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the North Carolina autism mandate require?', a: 'North Carolina’s mandate (effective July 2016) requires covered health benefit plans to cover “adaptive behavior treatment” — the statutory term; ABA itself isn’t named, but board certified behavior analysts are among the eight authorized provider categories, and treatment must be ordered by a licensed physician or licensed psychologist. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in North Carolina?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the North Carolina Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-north-carolina': {
    slug: 'cigna-north-carolina',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the N.C.G.S. § 58-3-192 mandate layer.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in North Carolina',
    state: 'NC', kind: 'commercial',
    pill: 'Payer Guide · Cigna · North Carolina',
    h1: 'Cigna / Evernorth ABA coverage in North Carolina: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in North Carolina: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for North Carolina families — the national clinical policy, prior authorization, the N.C.G.S. § 58-3-192 mandate (ages, caps, exemptions), North Carolina behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in North Carolina, a Cigna card means three layers at once: the carrier\'s national clinical policy, North Carolina\'s autism insurance mandate (N.C.G.S. § 58-3-192), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'N.C.G.S. § 58-3-192' },
      { label: 'Mandate age', value: 'May be limited to 18 and younger (parity-limited)' },
      { label: 'Mandate caps', value: '$40,000/yr cap, CPI-indexed (parity-limited)' },
      { label: 'Exempt from mandate', value: 'Non-grandfathered individual/small group; self-funded ERISA' },
      { label: 'Licensure', value: 'NC Licensed Behavior Analyst (NCBALB, since 2023)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in North Carolina',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in North Carolina is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in North Carolina.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The North Carolina mandate: what it guarantees (and doesn\'t)',
        body: [
          'North Carolina’s mandate (effective July 2016) requires covered health benefit plans to cover “adaptive behavior treatment” — the statutory term; ABA itself isn’t named, but board certified behavior analysts are among the eight authorized provider categories, and treatment must be ordered by a licensed physician or licensed psychologist. Coverage may be limited to individuals 18 or younger and capped at $40,000/year (CPI-indexed from 2017). Two big carve-outs: the mandate does not apply to non-grandfathered individual and small-group plans (the ACA essential-health-benefits segment), and self-funded ERISA plans are exempt by preemption. The age and dollar limits are quantitative treatment limits of doubtful enforceability under MHPAEA for large-group plans.',
        ],
        cites: [
      { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
      { title: 'Autism Speaks — North Carolina state-regulated coverage', url: 'https://www.autismspeaks.org/north-carolina-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'No North Carolina-specific Cigna policy exists',
        body: [
          'We checked: Cigna / Evernorth publishes no North Carolina-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where North Carolina-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in North Carolina',
        body: [
          'North Carolina licenses behavior analysts under the Behavior Analyst Licensure Act (2021), with the NC Behavior Analyst Licensure Board accepting applications since July 2023 — ending the old regime where BCBAs worked under licensed-psychologist supervision. Commercial credentialing now runs on the LBA/LaBA license. On rates: Cigna does not publish commercial ABA fee schedules for North Carolina (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'North Carolina Behavior Analyst Licensure Board', url: 'https://ncbehavioranalystboard.org/' },
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
      { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
      { title: 'Autism Speaks — North Carolina state-regulated coverage', url: 'https://www.autismspeaks.org/north-carolina-state-regulated-insurance-coverage' },
      { title: 'North Carolina Behavior Analyst Licensure Board', url: 'https://ncbehavioranalystboard.org/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap on ABA — its glossary, following CASP 2024, states that access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions." Age terms come from the member’s benefit plan document, which supersedes the coverage policy, and from any controlling state mandate. North Carolina’s mandate permits coverage to be limited to individuals 18 or younger and capped at $40,000 a year (CPI-indexed from 2017) on fully insured plans — quantitative treatment limits of doubtful enforceability against large-group plans under MHPAEA. The mandate does not apply to non-grandfathered individual and small-group plans, and self-funded ERISA plans are exempt by preemption.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team on 877.279.7603 — establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'EN0499 puts no expiry on the ASD diagnosis, but it requires the name, credentials and licensure type of the diagnosing clinician and the date on which the diagnosis was most recently made — and a diagnosis termed provisional, proposed, potential, at risk of or rule out is not a confirmed diagnosis, nor is IDEA educational identification. The recency clocks sit on the data instead: the standardized assessment instrument must have been administered within 60 days prior to the start of treatment, quantitative baseline data collected within 60 days prior to start, current data within 60 days of the authorization request, a standardized instrument completed no more than one year prior for continued treatment, and a fresh standardized assessment after any break in treatment greater than 60 calendar days.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The ASD diagnosis (ICD-10 F84.0–F84.9 except F84.2, Rett syndrome) must be made under DSM-5-TR criteria by a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice. The ABA assessment itself is performed by a Board Certified Behavior Analyst, a Licensed Behavior Analyst, or a mental health clinician licensed to practice independently who has documented training in ABA.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'EN0499 mandates no single named instrument. It requires a reliable, valid and standardized assessment instrument measuring the DSM-5-TR ASD domains — social communication and social interaction, and restricted, repetitive patterns of behavior, interests or activities — completed in its entirety and as designed, by someone trained to administer and interpret it, with reliability and validity established for the population tested, in the most current edition rather than an obsolete one (the policy’s own example: Vineland-3, not Vineland-II). The report must carry the date of administration, the respondent or participant name, the form type where applicable, and standardized scores and score tables or scoring grids.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      referral: {
        value: 'No referral, order or prescription is required under EN0499. Cigna’s notable front-door change is on authorization: per the Evernorth autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a BCBA and the member’s policy covers ABA — submit the claims and they are evaluated for payment. Treatment authorization requires the completed assessment and treatment plan attached to the Applied Behavior Analysis Prior Authorization Form. For a fully insured North Carolina plan the state mandate adds an ordering requirement the carrier policies do not: adaptive behavior treatment must be ordered by a licensed physician or licensed psychologist. The mandate does not reach non-grandfathered individual and small-group plans, and self-funded ERISA plans sit outside state insurance law entirely — establish plan funding type before relying on it.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
      },
      telehealth: {
        value: 'All ABA CPT codes are covered telehealth services per the Evernorth autism resource guide, and EN0499 allows delivery in person, via telehealth, or as a hybrid — the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. The requirement that the ABA provider remain in line of sight and close proximity to the individual expressly does not apply to telehealth services. Where treatment is delivered in settings with additional behavioral expectations, telehealth included, the plan must document that the service still meets the definition of direct treatment and direct engagement.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Evernorth (Cigna behavioral health) makes coverage determinations "in accordance with the time frames required under applicable law" and publishes no day counts; for ABA it asks providers "to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days." Assessment codes 97151, 97152 and 0362T no longer need PA with an autism diagnosis. So the governing clock depends on funding. For a fully insured plan issued in North Carolina, G.S. 58-50-61(f) governs: "Prospective and concurrent determinations shall be communicated to the covered person\'s provider within three business days after the insurer obtains all necessary information" — the clock starts on complete information, not receipt, and the statute sets no separate faster clock for an urgent first decision (its expedited track is for appeals). In concurrent review "the insurer shall remain liable for health care services until the covered person has been notified of the noncertification." A self-funded employer plan sits outside state law and follows ERISA: a non-urgent pre-service decision "not later than 15 days after receipt of the claim by the plan", extendable once by up to 15 days; an urgent one within 72 hours; the clock starts when the request is filed, whether or not it is complete; and an urgent request to extend an approved course is decided within 24 hours if made "at least 24 hours prior to the expiration" of the current authorization.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth Behavioral Health — Administrative Guidelines (March 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'N.C. Gen. Stat. § 58-50-61 — utilization review (prospective/concurrent determinations)', url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_58/GS_58-50-61.html' },
          { title: '29 CFR 2560.503-1(f) — ERISA claims procedure: group health plan decision timeframes', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (a policy issued in the state) or a self-funded employer (ERISA) plan — that decides which clock applies — then ask the carrier’s behavioral health precert line its expected ABA turnaround and how early it wants the reauth.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'North Carolina’s COB rule for insured group plans (11 NCAC 12 .0514) sets the order: the plan covering the person as employee or subscriber pays before the plan covering them as a dependent; for a child of parents not separated, "the benefits of the Health Plan of the parent whose birthday falls earlier in a year are determined before those of the Health Plan of the parent whose birthday falls later" (same birthday: the longer-running plan first); for separated or divorced parents the custodial parent’s plan pays first, then the custodial parent’s spouse’s, then the non-custodial parent’s, unless a court decree the plan knows of assigns responsibility; Medicaid is expressly outside that rule. Self-funded plans follow their own plan document. Evernorth spells the same order out: the employee/subscriber plan is "always considered the primary payer" over a dependent plan; married parents follow "the \'birthday rule\'"; divorced, separated or not-living-together parents follow the custodial rule (custodial parent, their spouse, non-custodial parent, their spouse) unless a court decree assigns it, and joint custody without a named parent falls back to the birthday rule. Paper COB claims need "a copy of the primary payer\'s explanation of payment (EOP)." Government coverage sorts itself by federal rule: a commercial plan pays before TRICARE, which is secondary to every other health plan but "In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer"; CHAMPVA "is the last payer to OHI"; and Medicaid pays after all of them (42 CFR 433.139), so a child with commercial plus Medicaid needs this plan’s authorization and EOB before Medicaid will pay.',
        status: 'plan-dependent',
        cites: [
          { title: '11 NCAC 12 .0514 — coordination of benefits, order of benefit determination (readopted eff. 7/1/2020)', url: 'http://reports.oah.state.nc.us/ncac/title%2011%20-%20insurance/chapter%2012%20-%20life%20and%20health%20division/11%20ncac%2012%20.0514.pdf' },
          { title: 'Evernorth Behavioral Health — Administrative Guidelines (March 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (secondary to other plans, primary to Medicaid)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276 — CHAMPVA is the last payer to other health insurance', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
          { title: '42 CFR 433.139 — payment of claims involving third-party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
        verifyVia: 'Collect both parents’ plans, dates of birth, and any custody decree at intake; confirm primary/secondary with each carrier’s COB unit (and whether the plan is self-funded) before the first claim.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision is performed by a BCBA, a Licensed Behavior Analyst, or a mental health professional licensed to practice independently with documented training in ABA. Direct case supervision — occurring concurrently with direct treatment, with the BCBA face-to-face with the individual and with either the RBT or the BCaBA — plus indirect case supervision runs at the generally accepted standard of care of one to two hours per ten hours of direct treatment. When direct treatment is 10 hours per week or less, a minimum of one to two hours per week of direct case supervision is provided. The name and credentials of the person providing supervision must be documented, and supervisory services must coincide with the AMA CPT code descriptions.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Only one provider can bill for a unit of time, with one exception: CPT codes 97153, 97154 and 97155 during direct supervision, when the BCBA or qualified health care professional directs the technician and both are face-to-face with the patient at the same time. Separately, ABA treatment is not covered or reimbursable when delivered to the same individual at the same time as any other treatment modality — the policy’s own examples are ABA and speech therapy, or ABA and occupational therapy.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      dailyLimits: {
        value: 'Cigna publishes no per-day unit ceiling. All ABA CPT codes bill in 15-minute increments, and all ABA services must be billed with 97151–97158, 0362T and 0373T only. The published limits are structural rather than daily: planned treatment intensity must reflect the severity of the impairments, the goals of treatment and the response to treatment across all settings, and case supervision sits at one to two hours per ten hours of direct treatment. 0362T and 0373T are each reported on a single technician’s face-to-face time, not the combined time of multiple technicians.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      noteSignature: {
        value: 'A separate written record is expected for each individual receiving ABA, corresponding with each service billed under its CPT code, carrying at least: the start date and time and end date and time for each service, the location of service delivery, the focus of service, a detailed description of the intervention conducted during the time of service, the individuals present, the specific service delivered (direct service, supervision, stakeholder training), and the name, credential where applicable, and signature of the ABA provider who rendered the service.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      placeOfService: {
        value: 'Treatment goals must be defined and measured across all settings and environments where treatment will occur — home, clinic, school, community — and quantitative data must be obtained and reported separately by location for each behavior and skill. Services considered primarily educational or vocational in nature, or related to academic or work performance, are not covered or reimbursable. Where services are delivered in environments that carry additional or alternative behavioral expectations (academic setting, vocational placement, telehealth), the plan must document that the service still meets the direct-treatment definition and is not replacing activities that belong to that setting.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff — their services must be billed under the supervising provider. On a CMS-1500 the rendering provider prints their name in box 31 and only a BCBA or other licensed provider is listed in box 33; electronic claims go to Evernorth payer ID 62308. Per the autism resource guide’s code table, 97152, 97153 and 97154 may be provided by a BCaBA or technician but billed only by a BCBA-D, BCBA or licensed mental health provider, while 97151, 97155, 97156, 97157, 97158, 0362T and 0373T are both provided and billed by a BCBA-D, BCBA or licensed mental health provider.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in North Carolina?', a: 'Yes — under the carrier\'s national policy for ASD, layered on North Carolina\'s mandate (N.C.G.S. § 58-3-192) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the North Carolina autism mandate require?', a: 'North Carolina’s mandate (effective July 2016) requires covered health benefit plans to cover “adaptive behavior treatment” — the statutory term; ABA itself isn’t named, but board certified behavior analysts are among the eight authorized provider categories, and treatment must be ordered by a licensed physician or licensed psychologist. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in North Carolina?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the North Carolina Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-north-carolina': {
    slug: 'unitedhealthcare-north-carolina',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the N.C.G.S. § 58-3-192 mandate layer.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
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
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      ],
    },
    payer: 'UnitedHealthcare / Optum in North Carolina',
    state: 'NC', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · North Carolina',
    h1: 'UnitedHealthcare / Optum ABA coverage in North Carolina: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in North Carolina: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for North Carolina families — the national clinical policy, prior authorization, the N.C.G.S. § 58-3-192 mandate (ages, caps, exemptions), North Carolina behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in North Carolina, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, North Carolina\'s autism insurance mandate (N.C.G.S. § 58-3-192), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'N.C.G.S. § 58-3-192' },
      { label: 'Mandate age', value: 'May be limited to 18 and younger (parity-limited)' },
      { label: 'Mandate caps', value: '$40,000/yr cap, CPI-indexed (parity-limited)' },
      { label: 'Exempt from mandate', value: 'Non-grandfathered individual/small group; self-funded ERISA' },
      { label: 'Licensure', value: 'NC Licensed Behavior Analyst (NCBALB, since 2023)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in North Carolina',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in North Carolina is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in North Carolina.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The North Carolina mandate: what it guarantees (and doesn\'t)',
        body: [
          'North Carolina’s mandate (effective July 2016) requires covered health benefit plans to cover “adaptive behavior treatment” — the statutory term; ABA itself isn’t named, but board certified behavior analysts are among the eight authorized provider categories, and treatment must be ordered by a licensed physician or licensed psychologist. Coverage may be limited to individuals 18 or younger and capped at $40,000/year (CPI-indexed from 2017). Two big carve-outs: the mandate does not apply to non-grandfathered individual and small-group plans (the ACA essential-health-benefits segment), and self-funded ERISA plans are exempt by preemption. The age and dollar limits are quantitative treatment limits of doubtful enforceability under MHPAEA for large-group plans.',
        ],
        cites: [
      { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
      { title: 'Autism Speaks — North Carolina state-regulated coverage', url: 'https://www.autismspeaks.org/north-carolina-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in North Carolina',
        body: [
          'A family saying “we have UnitedHealthcare” in North Carolina may actually be on the carrier’s Medicaid plan — UnitedHealthcare Community Plan of North Carolina — which follows the state Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in North Carolina',
        body: [
          'North Carolina licenses behavior analysts under the Behavior Analyst Licensure Act (2021), with the NC Behavior Analyst Licensure Board accepting applications since July 2023 — ending the old regime where BCBAs worked under licensed-psychologist supervision. Commercial credentialing now runs on the LBA/LaBA license. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for North Carolina (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'North Carolina Behavior Analyst Licensure Board', url: 'https://ncbehavioranalystboard.org/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of North Carolina (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
      { title: 'Autism Speaks — North Carolina state-regulated coverage', url: 'https://www.autismspeaks.org/north-carolina-state-regulated-insurance-coverage' },
      { title: 'North Carolina Behavior Analyst Licensure Board', url: 'https://ncbehavioranalystboard.org/' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Optum’s ABA Supplemental Clinical Criteria carry no age criterion — coverage turns on the member-specific benefit plan, which supersedes the guideline, and on any federal or state regulatory requirement that supersedes the benefits. North Carolina’s mandate permits coverage to be limited to individuals 18 or younger and capped at $40,000 a year (CPI-indexed from 2017) on fully insured plans — quantitative treatment limits of doubtful enforceability against large-group plans under MHPAEA. The mandate does not apply to non-grandfathered individual and small-group plans, and self-funded ERISA plans are exempt by preemption.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
        verifyVia: 'Provider Express benefits check under a One Healthcare ID, or the behavioral health number on the member ID card — establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The SCC set no expiry on the ASD diagnosis itself; what they require is that the DSM-5-TR diagnosis and severity level be confirmed and documented by the diagnosing clinician using validated tools. The clocks run on review instead: where there has been inadequate or no demonstrable progress with targeted symptoms or behaviors within a 6-month period, or goals have not been achieved within the estimated timeframes, the reasons must be assessed and interventions modified; and continued-service review specifically addresses utilization of prior-authorization-period hours below 80% over a 2-week period, which requires documented barriers.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws) must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such a diagnosis according to the DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'The SCC give a three-tier, explicitly non-exhaustive list and require the diagnosing clinician to confirm and document the DSM-5 diagnosis and severity level using at least one clinically validated tool. First-level screening tools: Autism Behavior Checklist, CHAT / M-CHAT, CSBS-DP-IT Checklist, Autism Screening Questionnaire, Autism Quotient, Childhood Autism Screening Test. Second-level screening tools: CARS and CARS-2, RITA-T, STAT. Formal diagnostic tools used as part of a comprehensive diagnostic evaluation: ADI-R, ADOS and ADOS-2, and DISCO. Treatment intensity must then be set from a baseline measured with at least one validated tool from a named list including ATEC, VB-MAPP, ABLLS and ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland and CFQL-2.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      referral: {
        value: 'The SCC require no separate physician referral or order; what they require is prior authorization for ABA, unless otherwise specified or mandated by contract or law. In practice UnitedHealthcare administers this as a two-step Optum flow on Provider Express — an authorization for the assessment, then a second for treatment — with continued-service reviews on the authorization cycle. For a fully insured North Carolina plan the state mandate adds an ordering requirement the carrier policies do not: adaptive behavior treatment must be ordered by a licensed physician or licensed psychologist. The mandate does not reach non-grandfathered individual and small-group plans, and self-funded ERISA plans sit outside state insurance law entirely — establish plan funding type before relying on it.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'N.C. Gen. Stat. § 58-3-192 (autism coverage mandate)', url: 'https://codes.findlaw.com/nc/chapter-58-insurance/nc-gen-st-sect-58-3-192/' },
        ],
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
        value: 'UHC’s 2026 commercial administrative guide says standard requests take "up to 15 calendar days" and expedited "72 hours", and asks for requests "at least 15 calendar days in advance, if possible, but must be submitted at least 5 business days before the planned service date"; ABA itself is authorized by Optum Behavioral Health, whose network manual publishes no prospective decision clock (retrospective requests are decided within 30 calendar days). So the governing clock depends on funding. For a fully insured plan issued in North Carolina, G.S. 58-50-61(f) governs: "Prospective and concurrent determinations shall be communicated to the covered person\'s provider within three business days after the insurer obtains all necessary information" — the clock starts on complete information, not receipt, and the statute sets no separate faster clock for an urgent first decision (its expedited track is for appeals). In concurrent review "the insurer shall remain liable for health care services until the covered person has been notified of the noncertification." A self-funded employer plan sits outside state law and follows ERISA: a non-urgent pre-service decision "not later than 15 days after receipt of the claim by the plan", extendable once by up to 15 days; an urgent one within 72 hours; the clock starts when the request is filed, whether or not it is complete; and an urgent request to extend an approved course is decided within 24 hours if made "at least 24 hours prior to the expiration" of the current authorization.',
        status: 'plan-dependent',
        cites: [
          { title: 'UnitedHealthcare — 2026 Care Provider Administrative Guide (Commercial, eff. 4/1/2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health — National Network Manual (eff. 9/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'N.C. Gen. Stat. § 58-50-61 — utilization review (prospective/concurrent determinations)', url: 'https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_58/GS_58-50-61.html' },
          { title: '29 CFR 2560.503-1(f) — ERISA claims procedure: group health plan decision timeframes', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification, ask whether the plan is fully insured (a policy issued in the state) or a self-funded employer (ERISA) plan — that decides which clock applies — then ask the carrier’s behavioral health precert line its expected ABA turnaround and how early it wants the reauth.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'North Carolina’s COB rule for insured group plans (11 NCAC 12 .0514) sets the order: the plan covering the person as employee or subscriber pays before the plan covering them as a dependent; for a child of parents not separated, "the benefits of the Health Plan of the parent whose birthday falls earlier in a year are determined before those of the Health Plan of the parent whose birthday falls later" (same birthday: the longer-running plan first); for separated or divorced parents the custodial parent’s plan pays first, then the custodial parent’s spouse’s, then the non-custodial parent’s, unless a court decree the plan knows of assigns responsibility; Medicaid is expressly outside that rule. Self-funded plans follow their own plan document. UHC says "COB is administered according to the member\'s benefit plan and in accordance with law"; Optum’s network manual tells providers to determine other coverage, "bill the primary insurance carrier first, then notify Optum of your findings," and says it applies industry-standard COB rules and state law. Government coverage sorts itself by federal rule: a commercial plan pays before TRICARE, which is secondary to every other health plan but "In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer"; CHAMPVA "is the last payer to OHI"; and Medicaid pays after all of them (42 CFR 433.139), so a child with commercial plus Medicaid needs this plan’s authorization and EOB before Medicaid will pay.',
        status: 'plan-dependent',
        cites: [
          { title: '11 NCAC 12 .0514 — coordination of benefits, order of benefit determination (readopted eff. 7/1/2020)', url: 'http://reports.oah.state.nc.us/ncac/title%2011%20-%20insurance/chapter%2012%20-%20life%20and%20health%20division/11%20ncac%2012%20.0514.pdf' },
          { title: 'UnitedHealthcare — 2026 Care Provider Administrative Guide (Commercial, eff. 4/1/2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health — National Network Manual (eff. 9/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (secondary to other plans, primary to Medicaid)', url: 'https://www.ecfr.gov/current/title-32/subtitle-A/chapter-VII/subchapter-M/part-199/section-199.8' },
          { title: '38 CFR 17.276 — CHAMPVA is the last payer to other health insurance', url: 'https://www.ecfr.gov/current/title-38/section-17.276' },
          { title: '42 CFR 433.139 — payment of claims involving third-party liability', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
        ],
        verifyVia: 'Collect both parents’ plans, dates of birth, and any custody decree at intake; confirm primary/secondary with each carrier’s COB unit (and whether the plan is self-funded) before the first claim.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards of care, direct case supervision is required at one to two hours for every ten hours of direct treatment per week. Technicians must be under the applicable supervision of a BCBA or a licensed behavioral health clinician and should be Registered Behavior Technicians or another appropriately certified behavior technician as allowable by state mandate. Optum adds that it is not recommended that parents serve in an RBT role, and that a BCBA acting in a supervisory role for a parent serving as RBT for their own child would violate the ethics code with a duty to self-report.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
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
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
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
        value: 'ABA must be provided at the least restrictive and most clinically appropriate level, with generalization and maintenance of skills outside the treatment environment into natural settings such as home and community forming part of the continued-service test. Not covered: services that are not ABA therapy, such as a 1:1 aide delivered simultaneously during classroom instruction, or services covered under IDEA. School-based ABA does allow coordination of services and covers teacher training, meetings with school personnel, and observations in the school setting, and the treatment plan is expected to coordinate with the school and any IFSP or IEP.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Once an ASD diagnosis is confirmed, a credentialed ABA provider is identified for the member: a master’s- or doctoral-level Board-Certified Behavior Analyst, or a licensed behavioral health clinician who has attested to sufficient expertise and been credentialed to provide ABA. A BCaBA or non-licensed individual works under the direct supervision of a BCBA or licensed behavioral health clinician who takes responsibility for the individual’s care, assisting in assessment or implementing a treatment plan developed by that BCBA or clinician.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in North Carolina?', a: 'Yes — under the carrier\'s national policy for ASD, layered on North Carolina\'s mandate (N.C.G.S. § 58-3-192) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the North Carolina autism mandate require?', a: 'North Carolina’s mandate (effective July 2016) requires covered health benefit plans to cover “adaptive behavior treatment” — the statutory term; ABA itself isn’t named, but board certified behavior analysts are among the eight authorized provider categories, and treatment must be ordered by a licensed physician or licensed psychologist. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in North Carolina?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the North Carolina Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },
};

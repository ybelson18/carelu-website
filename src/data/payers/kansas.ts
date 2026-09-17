import type { PayerConfig } from './types.js';

export const kansasPayers: Record<string, PayerConfig> = {
  'kansas-medicaid': {
    slug: 'kansas-medicaid',
    cardDesc: 'CCTS + IIS under EPSDT (not "ABA"); 3 MCOs, 6-month diagnosis rule, 50 h/yr + 25 h/wk limits.',
    assessmentPA: {
      value: 'Required — physician/licensed-practitioner recommendation + PA per KMAP Bulletin 17129; each MCO runs its own intake',
      status: 'verified',
      cites: [{ title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' }],
    },
    treatmentPA: {
      value: 'Required — CCTS soft limit 50 hrs/year, IIS initially authorized up to 25 hrs/week; MCO reauthorization at minimum every 6 months',
      status: 'verified',
      cites: [
        { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
        { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
        { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.x); both major MCOs require MD/licensed-psychologist validation within the last 6 months; EPSDT age 20 and under. Per KMAP Bulletin 26140 (eff. 11/1/2026), for members 20 and under the diagnosis must additionally come from a Kansas BSRB-licensed clinical psychologist or a qualified physician, documented against DSM criteria/severity with a validated tool (e.g., ADOS, CARS) — a 2-year grace period applies to members already diagnosed by a non-compliant provider.',
      status: 'plan-dependent',
      cites: [
        { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
        { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      ],
      verifyVia:
        'Unresolved conflict, not a missing document: KMAP Bulletin 26140 (reissued 8/31/2026, eff. 11/1/2026) says a member diagnosed by a qualified diagnostician is eligible for ABA "without the need for a re-evaluation" and with "no time limit," while Sunflower KS.CP.01 (last reviewed 06/2019) still requires an MD or licensed psychologist to have validated the diagnosis within the last 6 months. Ask the member\'s MCO (Sunflower, UnitedHealthcare/Optum or Healthy Blue) which rule its UM team applies at initial authorization.',
      blocker: 'per-case',
    },
    payer: 'KanCare (Kansas Medicaid)',
    state: 'KS', kind: 'state-medicaid',
    pill: 'Payer Guide · KanCare',
    h1: 'KanCare (Kansas Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'KanCare (Kansas Medicaid) ABA / Autism Services Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How KanCare (Kansas Medicaid) covers ABA under EPSDT as two services — CCTS and IIS — through three MCOs: prior authorization, the 6-month diagnosis-validation rule, the 50 hr/yr and 25 hr/wk soft limits, KMAP enrollment, and the honest rate picture.',
    intro: [
      'Kansas Medicaid doesn\'t call it ABA. Since January 1, 2017, the benefit lives in the State Plan under EPSDT as two "Autism Services": Consultative Clinical and Therapeutic Services (CCTS) — the BCBA-level tier covering assessment, treatment planning, supervision, and family training — and Intensive Individual Supports (IIS), the technician-level 1:1 tier. Understanding that vocabulary is half the intake battle, because authorizations, provider enrollment, and limits are all organized around the CCTS/IIS split. Delivery runs entirely through KanCare\'s managed care organizations — Sunflower Health Plan, UnitedHealthcare Community Plan, and (since January 1, 2025) Healthy Blue Kansas — with KMAP fee-for-service policy as the baseline underneath. Aetna Better Health of Kansas is gone: it lost the KanCare 3.0 contract and its members moved to Healthy Blue on 1/1/2025.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — as CCTS + IIS under EPSDT, members age 20 and under' },
      { label: 'Prior auth', value: 'Required — physician/practitioner recommendation + PA, per MCO' },
      { label: 'Hour limits', value: 'CCTS soft limit 50 hrs/year; IIS initial auth up to 25 hrs/week (more on medical necessity)' },
      { label: 'Diagnosis recency', value: 'ASD validation within the last 6 months (Sunflower + Optum/UHC rule)' },
      { label: 'Diagnosing credential (new 11/1/2026)', value: 'KMAP Bulletin 26140 — BSRB-licensed clinical psychologist or qualified physician, DSM criteria + validated tool (ADOS/CARS); 2-yr grace period for existing non-compliant diagnoses' },
      { label: 'Administered by', value: 'Sunflower, UHC Community Plan, Healthy Blue (all MCO, contracts 2025–2027)' },
      { label: 'Licensure', value: 'Kansas LBA/LaBA (BSRB) since 7/1/2016; every provider needs their own KMAP ID' },
      { label: 'Rates', value: 'Not reliably published — KMAP interactive lookup is the source of truth (last verified rate action 4/1/2019)' },
      { label: 'Staff screening', value: 'Five-part enrollment check: KBI + APS/CPS registries + Nurse Aide Registry + motor-vehicle screen (every CCTS/IIS applicant)' },
    ],
    sections: [
      {
        h2: 'Kansas doesn\'t call it ABA: CCTS + IIS',
        body: [
          'ABA moved from the old HCBS Autism waiver into the Medicaid State Plan under EPSDT effective January 1, 2017, split into two services. CCTS ("Autism Specialist Services," provider type 11, specialty 403) is the analyst tier — billed under 97151, 97152, 97155, and 97156 — and carries an approved soft limit of 50 hours per year. IIS (specialty 404) is the technician-delivered 1:1 tier billed under 97153, initially authorized up to 25 hours per week with additional hours available on medical necessity. Effective 7/1/2024 the billing map widened: CCTS may also bill 97153, 97154, and 97158, and IIS may also bill 97154. A separate small HCBS Autism waiver still exists for very young children.',
          'Kansas also has unusual non-certified provider pathways: CCTS can be delivered by a master\'s-level professional with a KDADS HCBS director letter plus state-approved training, and IIS by a non-RBT with a high-school diploma, 40 hours of ABA training, and a KDADS validation letter, supervised by a BCBA. But the credentialing bottleneck to plan around is KMAP enrollment: every group AND every individual provider — each BCBA and each RBT — must be screened and enrolled in KMAP with their own KMAP ID before any MCO can pay them, and each service location requires separate enrollment.',
        ],
        cites: [
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
          { title: 'UHC/Optum — Getting started: KanCare members diagnosed with ASD (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
        ],
      },
      {
        h2: 'The KanCare 3.0 MCO landscape',
        body: [
          'KanCare is comprehensive statewide managed care — effectively all ~458,000 beneficiaries sit with one of three MCOs under contracts running 1/1/2025 through 12/31/2027 (renewable to 2029): Sunflower Health Plan (Centene), UnitedHealthcare Community Plan (behavioral health via Optum), and Healthy Blue Kansas, the new entrant. Aetna Better Health of Kansas, which served KanCare 2019–2024, was not selected — its members auto-transitioned to Healthy Blue on 1/1/2025 unless they chose Sunflower or UHC. Any directory still listing Aetna Better Health as an active KanCare plan is stale. PA and payment run through the MCOs with KMAP FFS policy as the floor; a secondary source reports KanCare MCOs must pay in-network providers at least 100% of the FFS rate (we could not verify this against the contract itself).',
        ],
        cites: [
          { title: 'KDHE — KanCare MCO contract awards 2025–2027', url: 'https://www.kdhe.ks.gov/CivicAlerts.aspx?AID=1104' },
          { title: 'Kansas Action for Children — State selects companies to manage KanCare (Aetna → Healthy Blue transition)', url: 'https://www.kac.org/state_selects_companies_to_manage_kancare' },
        ],
      },
      {
        h2: 'Authorization & the 6-month diagnosis rule',
        body: [
          'At the state-policy level, CCTS — which includes the assessment function, now billed 97151 — requires a recommendation by a physician or other licensed practitioner and is subject to prior authorization; each MCO operates its own PA intake. The tripwire to design intake around is diagnosis recency: both Sunflower (KS.CP.01) and Optum/UHC (BH 803ABA Kansas entry) require that an MD or licensed psychologist has validated the ASD diagnosis via comprehensive diagnostic evaluation within the last 6 months at initial authorization — an unusually aggressive rule that means a two-year-old diagnostic report doesn\'t clear the gate. Reauthorization runs at minimum every 6 months (Optum layers a monthly provider progress review on top), and Sunflower adds its own Kansas-specific gate: a current Kan Be Healthy (EPSDT) screen within the past year. Capture diagnosis date and screening status at first contact, not at submission.',
          'KMAP Bulletin 26140, issued 8/12/2026 and reissued 8/31/2026, effective 11/1/2026, layers a credential requirement on top of that 6-month currency rule rather than replacing it: for members age 20 and under, the ASD diagnosis itself must come from a Kansas BSRB-licensed clinical psychologist or a qualified physician (family/general practice, neurology, psychiatry, pediatrics, and similar specialties), documented against DSM criteria and severity level using a validated diagnostic tool such as ADOS or CARS. Members already diagnosed by a non-compliant provider get a 2-year grace period before the new rule bites — worth flagging to families with an older diagnostician on file so a re-evaluation isn\'t a surprise at the 2028 mark.',
        ],
        cites: [
          { title: 'KMAP Bulletin 17129 — CCTS PA and practitioner-recommendation requirement', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (Kansas Medicaid section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      {
        h2: 'Rates: a 2019 anchor, not a current schedule',
        body: [
          'We won\'t quote current Kansas autism-services rates, because we couldn\'t verify them. The last public anchor is the CPT crosswalk effective 1/1/2019, which set 97151 at $17.50 per 15-minute unit — and that was then raised effective 4/1/2019 by a bulletin that did not publish the new amounts. Notably, the 7/1/2022 behavioral-health rate increase did NOT include the 9715x autism codes. The source of truth is the KMAP interactive fee-schedule lookup (Reference Codes on the KMAP portal); UHC/Optum explicitly commits to reimbursing at the Kansas Medicaid autism-services rates, so the KMAP lookup doubles as your MCO benchmark. Treat any dollar figure circulating for Kansas ABA as unverified until you\'ve pulled it from that lookup yourself.',
        ],
        cites: [
          { title: 'KMAP Bulletin 18259 — CPT crosswalk (0359T→97151 at $17.50/15 min, eff. 1/1/2019)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-18259.html' },
          { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (eff. 4/1/2019; amounts unpublished)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
          { title: 'KMAP Bulletin 22128 — BH rate increase 7/1/2022 (9715x not included)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-221280.html' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Kansas is one of the few states where RBT certification is genuinely optional for Medicaid work. Since April 3, 2020, IIS technicians (KMAP type 11, specialty 404, billing 97153) qualify one of two ways: hold an RBT certificate, or complete the state-equivalent pathway — age 18+, high-school diploma or equivalent, 40 hours of ABA training including 8 hours of supervised intervention work and 3 hours of ethics (plus at least 1 hour each in criterion-referenced assessment, social skills, parent training, and program development), an initial competency assessment, and an acceptance letter from the KDADS HCBS Autism Program Manager or HCBS Director. That letter is individually issued, so it adds onboarding lead time; either track requires annual training to stay qualified. Technicians don\'t need a BSRB license — K.S.A. 65-7503 expressly exempts autism specialists and IIS providers under the state autism program from behavior analyst licensure. If you hire on the RBT track, the BACB\'s own floor still applies: the 40-hour training completed over 5–180 days, a competency assessment within 90 days of applying, and both a criminal background check and an abuse-registry check passed within 180 days of application payment.',
          'The state layer is a five-part enrollment screening package. Under the same April 2020 policy, every individually enrolling CCTS and IIS applicant must demonstrate a clean background across checks of Kansas Bureau of Investigation (KBI) records, the Adult Protective Services and Child Protective Services registries, the Nurse Aide Registry, and a motor-vehicle screen — that last one is a Kansas oddity, so collect driving records at onboarding. The bulletins don\'t publish a re-check cadence, and the KMAP HCBS Autism manual (which reportedly also requires proof of background checks and insurance at enrollment) sits on a portal we couldn\'t reach during research — confirm current screening details with KMAP provider enrollment directly. Layer federal exclusion screening on top regardless: check every hire against the HHS-OIG LEIE (and SAM.gov) at hire and monthly, since employing an excluded individual draws civil monetary penalties.',
          'At the supervisor tier, licensure has been mandatory since July 1, 2016: practicing ABA in Kansas requires a Licensed Behavior Analyst — or a Licensed Assistant Behavior Analyst under LBA supervision — through the Behavioral Sciences Regulatory Board under K.S.A. 65-7501 et seq. CCTS enrollment (type 11, specialty 403) takes a BSRB-licensed BCBA, BCBA-D, or BCaBA, or — another Kansas-specific alternative — a master\'s-level professional with documented ASD experience, state-approved training, and a KDADS letter. IIS technicians must work under the direction of a BCBA or qualified CCTS practitioner, but no Kansas-specific observation percentage or tech-per-supervisor ratio appears in any accessible primary source — for RBT-certified staff, the BACB\'s 5%-of-hours monthly supervision minimum (two face-to-face contacts per month, one individual, one observing service delivery) is the operative floor. The BSRB\'s own site was unreachable during our research, so confirm renewal and CE specifics with the board. Plan-level, Optum/UHC adds the real extras: KanCare ABA providers must hold a KMAP ID, carry $1M-per-occurrence / $1M-aggregate professional liability coverage, and contract separately with Optum\'s Kansas ABA network — and KMAP itself warns that MCO implementation dates can lag state policy, so verify each MCO\'s rollout individually. The MCO documents we reviewed add no staff-level background checks beyond the state baseline.',
        ],
        cites: [
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
          { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
          { title: 'K.S.A. 65-7503 — behavior analyst licensure required; exemptions', url: 'https://www.ksrevisor.gov/statutes/chapters/ch65/065_075_0003.html' },
          { title: 'BACB RBT Handbook (updated 06/2026)', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'HHS-OIG Exclusions Program (LEIE)', url: 'https://oig.hhs.gov/exclusions/' },
          { title: 'Optum/UHC — KanCare Autism/ABA Program provider training (BH00698_10292024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ks-abaTraining.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'KanCare MCO', desc: 'Sunflower, UnitedHealthcare, or Healthy Blue — same CCTS/IIS baseline, different PA machinery. Anything saying "Aetna Better Health" is stale (moved to Healthy Blue 1/1/2025).' },
      { title: 'ASD diagnosis + date', desc: 'Diagnosing MD/psychologist, credentials, and the evaluation date — Sunflower and Optum require validation within the last 6 months, so an old report may need a refresh first.' },
      { title: 'Physician/practitioner recommendation', desc: 'The CCTS PA requires a recommendation by a physician or other licensed practitioner — chase it at intake.' },
      { title: 'Kan Be Healthy screen status', desc: 'Sunflower members need a current EPSDT screen within the past year (not the same as a well-child exam) — a silent auth-staller.' },
      { title: 'KMAP enrollment of rendering staff', desc: 'Each BCBA and each RBT needs their own KMAP ID (per service location) before any MCO can pay — confirm before quoting start dates.' },
    ],
    sources: [
      { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
      { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
      { title: 'KMAP Bulletin 18259 — Mental Health/Autism CPT crosswalk (eff. 1/1/2019)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-18259.html' },
      { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (eff. 4/1/2019)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
      { title: 'KMAP Bulletin 22128 — BH Services Rate Increase 7/1/2022', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-221280.html' },
      { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
      { title: 'KDHE — KanCare MCO contract awards 2025–2027', url: 'https://www.kdhe.ks.gov/CivicAlerts.aspx?AID=1104' },
      { title: 'KMAP fee schedules — interactive lookup (source of truth for current rates)', url: 'https://portal.kmap-state-ks.us/PublicPage/ProviderPricing/FeeSchedules' },
      { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
      { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
      { title: 'K.S.A. 65-7503 — behavior analyst licensure required; exemptions', url: 'https://www.ksrevisor.gov/statutes/chapters/ch65/065_075_0003.html' },
      { title: 'BACB RBT Handbook (updated 06/2026)', url: 'https://www.bacb.com/rbt-handbook' },
      { title: 'HHS-OIG Exclusions Program (LEIE)', url: 'https://oig.hhs.gov/exclusions/' },
      { title: 'Optum/UHC — KanCare Autism/ABA Program provider training (BH00698_10292024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ks-abaTraining.pdf' },
      { title: 'Kansas Action for Children — State selects companies to manage KanCare (Aetna → Healthy Blue transition)', url: 'https://www.kac.org/state_selects_companies_to_manage_kancare' },
      { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (Kansas Medicaid section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Age 20 and under. CCTS and IIS moved out of the Autism waiver into the State Plan effective January 1, 2017 "under the Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) provisions"; Bulletin 20147 describes them as covered "under the State Plan Services for EPSDT participants and Title XXI members"; and Bulletin 26140 fixes the diagnostician rule for "individuals aged 20 years and younger." Optum\'s Kansas Medicaid criteria state the bound outright: "the member is age 20 and under."',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      dxRecency: {
        value:
          'Two rules now point in opposite directions, and the newer one is the state\'s. KMAP Bulletin 26140 — reissued 8/31/2026 with its effective date moved from September 1 to November 1, 2026 — states that once an individual is diagnosed by a qualified diagnostician under that policy, "they are eligible for autism treatment, including applied behavioral analysis (ABA) therapy, without the need for a re-evaluation of their autism spectrum disorder diagnosis. There is also no time limit on how soon they begin autism treatment... following their diagnosis of autism spectrum disorder." Optum\'s current State Mandates supplement (July 2026) carries that language verbatim for Kansas Medicaid members and no longer states a 6-month validation rule; Sunflower\'s KS.CP.01, last reviewed 06/2019, still requires that an "MD or licensed psychologist has evaluated w/in last 6 months for current validation of Autism diagnosis." Members already in treatment who were diagnosed by a non-qualifying diagnostician have two years to obtain an updated diagnosis, which "does not necessarily need to involve a complete diagnostic evaluation."',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'Since KMAP Bulletin 26140, for members age 20 and younger the ASD diagnosis must come from a Kansas Behavioral Sciences Regulatory Board (BSRB) licensed clinical psychologist or a qualified physician, with a multidisciplinary approach preferred. The bulletin lists the qualifying provider type/specialty codes: 11/112 Psychologist, 31/316 Family Practitioner, 31/318 General Practitioner, 31/326 Neurologist, 31/339 Psychiatrist, 31/345 General Pediatrician (Developmental), 31/349 Exempt License Physician and 31/351 Indian Health Services. A qualifying BSRB clinical psychologist needs a doctoral degree in psychology or equivalent training plus two years of supervised experience delivering BSRB-approved psychological services; qualifying physicians — developmental/behavioral pediatricians, psychiatrists, neurologists and primary care physicians — need documented additional training in ASD diagnosis, which Optum notes "may be subject to periodic audit/inquiry."',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'The diagnostic evaluation must document DSM criteria and symptom severity level and must rest on "a validated ASD diagnostic assessment tool such as the Autism Diagnostic Observation Schedule (ADOS) or the Childhood Autism Rating Scale (CARS)." Screening tools — M-CHAT, ABC, ASSQ, RITA-T, STAT — "have clinical value in recognizing children at risk of having ASD, but the diagnosis of ASD must rest on validated diagnostic tools such as those listed above." Recommended additions: a cognitive evaluation using CAT/CLAMS, MSEL or Bayley (a school district\'s validated cognitive testing may be used), and an adaptive measure such as ABAS or Vineland.',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      referral: {
        value:
          'Required at the state level: "coverage requires that a recommendation be made by a physician or other licensed practitioner and is subject to a prior authorization (PA) process." MCOs add to it — Sunflower requires a "doctor recommendation of services/prescription/order to treat" inside the Autism Authorization Request packet, plus a current Kan Be Healthy (EPSDT) screen completed within the past year by a physician, APRN, PA or credentialed RN, which the policy is explicit is not the same thing as a well-child exam.',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
        ],
      },
      telehealth: {
        value:
          'No KMAP rule on telehealth delivery of CCTS or IIS could be retrieved. The bulletins that govern these services (17129, 19029, 20147, 21013, 26140) are silent on modality, and the provider manuals Bulletin 26140 points to — the Mental Health Fee-for-Service Provider Manual (pp. 8-47/8-48) and the Professional Fee-for-Service Provider Manual (pp. 8-11/8-12) — sit on portal.kmap-state-ks.us, which did not respond to repeated requests at this review.',
        status: 'unverified',
        cites: [{ title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' }],
        verifyVia:
          'The KMAP Mental Health and Professional Fee-for-Service Provider Manuals named in Bulletin 26140 (portal.kmap-state-ks.us was unreachable at this review), or the member\'s MCO — Sunflower, UnitedHealthcare/Optum or Healthy Blue.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Direction, not a ratio. IIS technicians (provider type 11, specialty 404) qualify either by "certification as a Registered Behavior Technician (RBT) under the supervision of a BCBA" or through the state-equivalent pathway — 18 or older, high-school diploma, 40 hours of ABA training including 8 hours of supervised intervention work and 3 hours of ethics plus at least one hour each of criterion reference, social skills training, parent training and program development, an initial competency assessment, and an acceptance letter signed by the KDADS HCBS Autism Waiver Program Manager or HCBS Director. Either way "this provider works under the direction of the BCBA or other Qualified CCTS Practitioner" and must "meet all annual training requirements as specified by certification." No Kansas observation percentage or technician-per-supervisor ratio appears in any accessible primary source, so the BACB\'s 5%-of-monthly-hours floor is the operative number for RBT-credentialed staff.',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
          { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
        ],
      },
      concurrentBilling: {
        value:
          'Not published. The KMAP bulletins set the code split — CCTS (type 11, specialty 403) bills 97151, 97152, 97155 and 97156, and since 7/1/2024 also 97153, 97154 and 97158; IIS (specialty 404) bills 97153 and since 7/1/2024 also 97154 — but state no rule on billing two codes for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
          { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
        ],
        verifyVia:
          'The KMAP Mental Health Fee-for-Service Provider Manual (portal.kmap-state-ks.us was unreachable at this review), and each MCO — Sunflower, Optum and Healthy Blue run their own claim editing.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'Kansas publishes annual and weekly soft limits, not per-day ceilings. "The approved State Plan soft limits for the Consultative Clinical and Therapeutic Services (CCTS) remain in effect at an annual amount of 50 hours. The approved State Plan soft limits for Intensive Individual Supports (IIS) also remain in effect with an initial authorization of up to 25 hours per week. For these services, additional hours can be authorized based on a demonstration that the medical necessity criteria are being met." On top of that, Optum\'s Kansas Medicaid criteria cap the individualized treatment plan at "no more than 40 hours per week."',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      noteSignature: {
        value:
          'No signature rule could be sourced. The MCO documents require a dated provider signature on the authorization request form rather than on the session note, and the KMAP provider manuals that would carry charting and signature standards sit on a portal that did not respond at this review.',
        status: 'unverified',
        cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
        verifyVia:
          'The KMAP Mental Health Fee-for-Service Provider Manual and the KMAP HCBS Autism manual (portal.kmap-state-ks.us unreachable at this review), plus each MCO\'s provider manual.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'No payable-setting list is published. The service definitions imply the settings — IIS "help the child acquire and maintain the skills needed to successfully function in the home and community" — but no KMAP bulletin names place-of-service codes or states whether school-based delivery is billable. Optum\'s Kansas Medicaid criteria do exclude "services provided in a PRTF/hospital setting" and any service "being provided in duplicate through any other source/setting."',
        status: 'unverified',
        cites: [
          { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
        verifyVia:
          'The KMAP Mental Health Fee-for-Service Provider Manual (portal unreachable at this review) and the member\'s MCO.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'Every individual bills under their own NPI, and every individual needs their own KMAP ID first. The group and the individual health care professionals "must be enrolled with KMAP and must have a KMAP ID to bill for Medicaid services. Your group must be enrolled and have a KMAP ID before your individual ABAs or RBTs can enroll," and "when you hire new ABAs or RBTs, you must enroll them through KMAP before you can bill Medicaid under the employee\'s NPI number." KMAP also requires a separate enrollment for each location from which services will be rendered. CCTS enrolls as provider type 11, specialty 403; IIS as 11/404.',
        status: 'verified',
        cites: [
          { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
          { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
        ],
      },
    },
    faq: [
      { q: 'Does KanCare (Kansas Medicaid) cover ABA therapy?', a: 'Yes — but Kansas doesn\'t label it ABA. It\'s covered under EPSDT for members age 20 and under as two services: CCTS (the BCBA tier, soft limit 50 hours/year) and IIS (the technician 1:1 tier, initially authorized up to 25 hours/week, more on medical necessity), with prior authorization through the member\'s MCO.' },
      { q: 'Which MCOs run KanCare autism services?', a: 'Sunflower Health Plan, UnitedHealthcare Community Plan (Optum behavioral health), and Healthy Blue Kansas — the new plan effective 1/1/2025. Aetna Better Health of Kansas lost its contract; its members moved to Healthy Blue on 1/1/2025.' },
      { q: 'How recent does the autism diagnosis need to be?', a: 'Both Sunflower and Optum/UHC require the ASD diagnosis to have been validated by an MD or licensed psychologist within the last 6 months at initial authorization — plan for a diagnostic refresh if the report is older.' },
      { q: 'Who is allowed to make the ASD diagnosis for KanCare members?', a: 'As of KMAP Bulletin 26140 (eff. 11/1/2026), for members age 20 and under the diagnosis must come from a Kansas BSRB-licensed clinical psychologist or a qualified physician, documented against DSM criteria/severity using a validated tool such as ADOS or CARS. This layers on top of the existing 6-month diagnosis-currency rule rather than replacing it; existing members diagnosed by a non-compliant provider get a 2-year grace period.' },
      { q: 'What does Kansas Medicaid pay for ABA?', a: 'Current rates aren\'t reliably published. The last public anchor is $17.50/15-minute unit for 97151 effective 1/1/2019, raised 4/1/2019 without published amounts; the 2022 BH increase skipped the 9715x codes. Pull current figures from the KMAP interactive fee-schedule lookup — the only source of truth.' },
    ],
  },

  'sunflower-health-plan-kansas': {
    slug: 'sunflower-health-plan-kansas',
    family: 'centene',
    cardDesc: 'Autism Auth Request Form, named assessment tools, 6-month dx rule, Kan Be Healthy screen gate.',
    assessmentPA: {
      value: 'Required — completed Autism Authorization Request Form with physician recommendation, diagnosis validated within 6 months, plus a standardized assessment and a skills-based assessment',
      status: 'verified',
      cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
    },
    treatmentPA: {
      value: 'Required — focused (10–25 h/wk) or comprehensive (25–40 h/wk) plans; 6-month continuation reviews and annual full reassessment; Kan Be Healthy screen within the past year',
      status: 'verified',
      cites: [
        { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
        { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD (F84.x per Sunflower\'s coding table), validated by an MD or licensed psychologist within the last 6 months; per KMAP Bulletin 26140 (eff. 11/1/2026), members 20 and under also need that diagnosis from a Kansas BSRB-licensed clinical psychologist or qualified physician using a validated tool (2-yr grace period for existing diagnoses)',
      status: 'plan-dependent',
      cites: [
        { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
        { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
      ],
      verifyVia:
        'Unresolved conflict, not a missing document: KMAP Bulletin 26140 (reissued 8/31/2026, eff. 11/1/2026) says a member diagnosed by a qualified diagnostician is eligible for ABA "without the need for a re-evaluation" and with "no time limit," while Sunflower KS.CP.01 (last reviewed 06/2019) still requires an MD or licensed psychologist to have validated the diagnosis within the last 6 months. Ask the member\'s MCO (Sunflower, UnitedHealthcare/Optum or Healthy Blue) which rule its UM team applies at initial authorization.',
      blocker: 'per-case',
    },
    payer: 'Sunflower Health Plan (KS)',
    state: 'KS', kind: 'medicaid-mco', parent: 'KanCare (Kansas Medicaid)',
    pill: 'Payer Guide · Sunflower Health Plan',
    h1: 'Sunflower Health Plan ABA coverage (KanCare MCO).',
    metaTitle: 'Sunflower Health Plan (KanCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Sunflower Health Plan (Centene) administers KanCare autism services — the Autism Authorization Request Form, named assessment instruments, the 6-month diagnosis-validation rule, the Kan Be Healthy screen gate, and 6-month continuation reviews.',
    intro: [
      'Sunflower Health Plan, Centene\'s KanCare plan, administers the CCTS/IIS autism-services benefit under its own clinical policy KS.CP.01 — which mirrors the state\'s 50 hours/year CCTS and 25 hours/week IIS soft limits but layers real plan-specific requirements on top: a dedicated Autism Authorization Request Form, named assessment instruments, the 6-month diagnosis-validation rule, and a uniquely Kansas gate — the Kan Be Healthy (EPSDT) screen. Two of those regularly stall authorizations silently, so both belong in the first intake conversation.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'KanCare MCO (Centene), contracted 2025–2027' },
      { label: 'Prior auth', value: 'Required — Autism Authorization Request Form + physician recommendation' },
      { label: 'Diagnosis recency', value: 'ASD validated by MD/licensed psychologist within the last 6 months' },
      { label: 'Kan Be Healthy gate', value: 'EPSDT screen within the past year required for Medicaid members' },
      { label: 'Hour tiers', value: 'Focused 10–25 h/wk, comprehensive 25–40 h/wk; state soft limits (50 h/yr CCTS, 25 h/wk IIS) underneath' },
      { label: 'Review cadence', value: '6-month continuations (updated skills assessment); annual full reassessment' },
    ],
    sections: [
      {
        h2: 'The authorization packet Sunflower actually wants',
        body: [
          'KS.CP.01 drives authorization off a fully completed Autism Authorization Request Form with a dated provider signature, and the packet is specific: a physician recommendation or prescription; the original autism diagnosis validated within the last 6 months by an MD or licensed psychologist; a criterion-referenced standardized assessment (Vineland-3, ADOS, CARS, ADI-R, GARS, or ASDS); and a skills-based assessment (VB-MAPP, ABLLS, AFLS, or ASRS). Treatment plans are classified focused (10–25 hours/week) or comprehensive (25–40 hours/week), against the state soft limits of 50 hours/year of CCTS and 25 hours/week of IIS — exceeding them takes additional documentation. Continuation reviews land every 6 months with an updated skills-based assessment; annual reviews require the full standardized-plus-skills battery. One caveat worth knowing: the posted policy version was last reviewed 06/2019, so confirm current requirements through the portal when stakes are high.',
          'A new state-level layer applies on top of that packet: KMAP Bulletin 26140, effective 11/1/2026, requires that for members 20 and under the ASD diagnosis itself come from a Kansas BSRB-licensed clinical psychologist or a qualified physician, documented against DSM criteria/severity using a validated diagnostic tool (e.g., ADOS, CARS). It doesn\'t replace the 6-month currency rule above — it adds a credential/tooling check on who made the diagnosis. Members already diagnosed by a non-compliant provider have a 2-year grace period.',
        ],
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      {
        h2: 'The Kan Be Healthy gate — and other intake tripwires',
        body: [
          'Medicaid members must have a current Kan Be Healthy (EPSDT) screen completed within the past year by a physician, APRN, PA, or credentialed RN — and the policy is explicit that this is not the same as a well-child exam (the requirement is waived for Ambetter members). Families often need a PCP visit before ABA can be approved, which makes screen status a day-one intake question rather than a submission-day discovery. Same story for the 6-month diagnosis-validation rule: if the diagnostic report is older, plan the refresh before the auth, not after the denial. Sunflower applies this same clinical policy across its KanCare, Medicare, and Ambetter lines, with state Medicaid provisions taking precedence on conflict; submission runs through Sunflower\'s standard secure portal/Availity PA channels — no dedicated ABA portal is named in the policy.',
        ],
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis date + diagnosing clinician', desc: 'Must be validated by an MD or licensed psychologist within the last 6 months — schedule the refresh early if it\'s stale.' },
      { title: 'Kan Be Healthy screen status', desc: 'EPSDT screen within the past year (not a well-child exam) — the silent auth-staller; route the family to their PCP if missing.' },
      { title: 'Physician recommendation/prescription', desc: 'Required in the Autism Authorization Request packet.' },
      { title: 'Assessment instruments on file', desc: 'One standardized (Vineland-3, ADOS, CARS, ADI-R, GARS, ASDS) + one skills-based (VB-MAPP, ABLLS, AFLS, ASRS).' },
      { title: 'Requested intensity tier', desc: 'Focused (10–25 h/wk) vs. comprehensive (25–40 h/wk); exceeding the state soft limits needs extra documentation.' },
    ],
    sources: [
      { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
      { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (state CCTS/IIS limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
      { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
      { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
      { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
      { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'KS.CP.01 sets no age criterion of its own — the bound comes from the benefit it administers. CCTS and IIS are State Plan services "under the Early and Periodic Screening, Diagnostic, and Treatment (EPSDT) provisions," and KMAP Bulletin 26140 fixes the diagnostician rule for "individuals aged 20 years and younger." The policy does require the treatment plan to consider "the member\'s age, school attendance requirements, and other daily activities" when setting hours.',
        status: 'verified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      dxRecency: {
        value:
          'Sunflower\'s own rule is six months: "Psychological evaluation – MD or licensed psychologist has evaluated w/in last 6 months for current validation of Autism diagnosis." Read it against the posted policy\'s vintage and against the newer state rule: the KS.CP.01 version on the plan\'s site was last reviewed 06/2019, while KMAP Bulletin 26140 (reissued 8/31/2026, effective 11/1/2026) states that a member diagnosed by a qualified diagnostician is eligible for ABA "without the need for a re-evaluation... [and] no time limit on how soon they begin autism treatment." The policy itself concedes the hierarchy: "for Medicaid members, when state Medicaid coverage provisions conflict with the coverage provisions in this clinical policy, state Medicaid coverage provisions take precedence."',
        status: 'verified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      diagnosingProviders: {
        value:
          'KS.CP.01 requires the diagnosis to have been validated by an MD or a licensed psychologist. Since KMAP Bulletin 26140, for members age 20 and younger the ASD diagnosis must come from a Kansas Behavioral Sciences Regulatory Board (BSRB) licensed clinical psychologist or a qualified physician, with a multidisciplinary approach preferred. The bulletin lists the qualifying provider type/specialty codes: 11/112 Psychologist, 31/316 Family Practitioner, 31/318 General Practitioner, 31/326 Neurologist, 31/339 Psychiatrist, 31/345 General Pediatrician (Developmental), 31/349 Exempt License Physician and 31/351 Indian Health Services. A qualifying BSRB clinical psychologist needs a doctoral degree in psychology or equivalent training plus two years of supervised experience delivering BSRB-approved psychological services; qualifying physicians — developmental/behavioral pediatricians, psychiatrists, neurologists and primary care physicians — need documented additional training in ASD diagnosis, which Optum notes "may be subject to periodic audit/inquiry."',
        status: 'verified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      diagnosticTools: {
        value:
          'Sunflower wants two assessments in the packet, each from a named list: a criterion-referenced standardized assessment — "Vineland-III, ADOS, CARS, ADI-R, GARS, ASDS" — and a skills-based assessment — "VB-MAPP, ABLLS, AFLS, ASRS." Continuation reviews at six months need an updated skills-based assessment; the annual review needs the full standardized-plus-skills battery. The diagnostic evaluation must document DSM criteria and symptom severity level and must rest on "a validated ASD diagnostic assessment tool such as the Autism Diagnostic Observation Schedule (ADOS) or the Childhood Autism Rating Scale (CARS)." Screening tools — M-CHAT, ABC, ASSQ, RITA-T, STAT — "have clinical value in recognizing children at risk of having ASD, but the diagnosis of ASD must rest on validated diagnostic tools such as those listed above." Recommended additions: a cognitive evaluation using CAT/CLAMS, MSEL or Bayley (a school district\'s validated cognitive testing may be used), and an adaptive measure such as ABAS or Vineland.',
        status: 'verified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      referral: {
        value:
          'Three documents, not one. KS.CP.01 requires a "doctor recommendation of services/prescription/order to treat"; a fully completed Autism Authorization Request Form "including dated provider signature"; and a current Kan Be Healthy (EPSDT) assessment "completed by a physician, APRN, PA or credentialed RN," within the past year, which the policy states explicitly is not the same assessment as a well-child exam (the Kan Be Healthy requirement does not apply to Ambetter members). Missing the screen is the quiet reason authorizations stall.',
        status: 'verified',
        cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
      },
      telehealth: {
        value:
          'Not addressed. KS.CP.01 covers initiation, continuation and annual review criteria, hour tiers and the required assessments, but says nothing about telehealth delivery of CCTS or IIS, and no KMAP telehealth rule for these services could be retrieved.',
        status: 'unverified',
        cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
        verifyVia:
          'Sunflower provider services and the Sunflower/Centene payment policies; the KMAP Mental Health Fee-for-Service Provider Manual was unreachable at this review.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'KS.CP.01 builds supervision into the hour count rather than into a ratio: focused plans run "10 – 25 hours per week including 1:1 direct and indirect, group, supervision and caregiving training," and comprehensive plans "25 - 40 hours per week inclusive of all 1:1 direct and indirect, group, supervision, and caregiver training." No supervision percentage or caseload cap is published, so the state floor governs — IIS technicians work under the direction of a BCBA or other qualified CCTS practitioner, and RBT-credentialed staff carry the BACB minimum.',
        status: 'verified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
        ],
      },
      concurrentBilling: {
        value:
          'Not addressed in KS.CP.01, and not published at state level either.',
        status: 'unverified',
        cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
        verifyVia:
          'Sunflower provider services and Centene\'s payment policies on sunflowerhealthplan.com; submissions run through the standard secure portal / Availity PA channels.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling. Sunflower works in weekly tiers against the state\'s soft limits: focused ABA 10–25 hours per week, comprehensive 25–40, with "soft limit or no more than 50 hours per year of BCBA/Autism Specialist and no more than 25 hours per week of 1:1 support. Additional documentation will be required to exceed those soft limits." Daily intensity is explicitly individualized: "hours of therapy per day are individualized with the goal of increasing or decreasing the intensity of therapy as the member\'s ability to tolerate and participate permits."',
        status: 'verified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
        ],
      },
      noteSignature: {
        value:
          'The only signature rule KS.CP.01 states sits on the authorization request, not the session note: each initial, 6-month continuation and annual request requires a "fully completed Autism Authorization request form (including dated provider signature)." Who signs a session note, and when, is not addressed.',
        status: 'unverified',
        cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
        verifyVia:
          'The Sunflower provider manual and your participation agreement\'s documentation clause.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'No payable-setting list is published. The policy assumes multiple settings — continuation data must reflect progress across the member\'s activities and the plan must weigh "school attendance requirements" — but names no place-of-service codes and states no school or community rule.',
        status: 'unverified',
        cites: [{ title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' }],
        verifyVia:
          'Sunflower provider services; the KMAP Mental Health Fee-for-Service Provider Manual was unreachable at this review.',
        blocker: 'document',
      },
      billAsProvider: {
        value:
          'Not addressed in KS.CP.01. The binding rule is the state\'s: every group and every individual — each BCBA and each RBT — must hold their own KMAP ID before an MCO can pay, with a separate enrollment for each service location, and new hires must be KMAP-enrolled before anything can be billed under their NPI.',
        status: 'unverified',
        cites: [
          { title: 'Sunflower KS.CP.01 — Applied Behavioral Analysis (clinical policy)', url: 'https://www.sunflowerhealthplan.com/content/dam/centene/sunflower/policies/clinical-policies/KS.CP.01-Applied-Behavioral-Analysis.pdf' },
          { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
        ],
        verifyVia:
          'Sunflower provider services for the plan\'s rendering/billing convention; KMAP enrollment governs who may appear on the claim.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Sunflower Health Plan cover ABA therapy?', a: 'Yes — as KanCare\'s CCTS/IIS autism-services benefit under EPSDT, with prior authorization via the Autism Authorization Request Form, a physician recommendation, and named standardized plus skills-based assessments.' },
      { q: 'What is the Kan Be Healthy requirement?', a: 'Sunflower requires Medicaid members to have a current Kan Be Healthy (EPSDT) screen completed within the past year by a physician, APRN, PA, or credentialed RN — explicitly not the same as a well-child exam. Missing it silently stalls the authorization.' },
      { q: 'How recent must the autism diagnosis be for Sunflower?', a: 'Validated within the last 6 months by an MD or licensed psychologist at initial authorization — build the diagnostic refresh into intake for families with older reports. As of KMAP Bulletin 26140 (eff. 11/1/2026), members 20 and under also need that diagnosis to come from a Kansas BSRB-licensed clinical psychologist or a qualified physician using a validated diagnostic tool; existing non-compliant diagnoses get a 2-year grace period.' },
      { q: 'How many ABA hours does Sunflower authorize?', a: 'Plans run focused (10–25 hours/week) or comprehensive (25–40 hours/week), on top of the state soft limits — 50 hours/year of CCTS and 25 hours/week of IIS — which can be exceeded with additional documentation.' },
    ],
  },

  'unitedhealthcare-community-plan-kansas': {
    slug: 'unitedhealthcare-community-plan-kansas',
    family: 'unitedhealthcare',
    cardDesc: 'Optum-run; 6-month dx rule, 40 h/wk plan ceiling, monthly progress reviews, KMAP-first credentialing.',
    assessmentPA: {
      value: 'Required — PA for CCTS and IIS reviewed after all requested documentation is submitted (Optum)',
      status: 'verified',
      cites: [{ title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
    },
    treatmentPA: {
      value: 'Required — individualized plan capped at 40 hrs/week; monthly progress review; formal treatment-plan renewal at minimum every 6 months',
      status: 'verified',
      cites: [
        { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD validated within the last 6 months by a licensed psychologist or MD via comprehensive diagnostic evaluation; member age 20 and under. Per KMAP Bulletin 26140 (eff. 11/1/2026), that diagnosis must additionally come from a Kansas BSRB-licensed clinical psychologist or a qualified physician using a validated diagnostic tool (2-yr grace period for existing diagnoses)',
      status: 'unverified',
      cites: [
        { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
      ],
      verifyVia:
        'Unresolved conflict, not a missing document: KMAP Bulletin 26140 (reissued 8/31/2026, eff. 11/1/2026) says a member diagnosed by a qualified diagnostician is eligible for ABA "without the need for a re-evaluation" and with "no time limit," while Sunflower KS.CP.01 (last reviewed 06/2019) still requires an MD or licensed psychologist to have validated the diagnosis within the last 6 months. Ask the member\'s MCO (Sunflower, UnitedHealthcare/Optum or Healthy Blue) which rule its UM team applies at initial authorization.',
      blocker: 'per-case',
    },
    payer: 'UnitedHealthcare Community Plan of Kansas',
    state: 'KS', kind: 'medicaid-mco', parent: 'KanCare (Kansas Medicaid)',
    pill: 'Payer Guide · UHC Community Plan (KS)',
    h1: 'UnitedHealthcare Community Plan of Kansas ABA coverage (KanCare MCO).',
    metaTitle: 'UHC Community Plan Kansas (KanCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan of Kansas (Optum) administers KanCare autism services — the Kansas-specific Optum criteria, 40 hr/week plan ceiling, 6-month diagnosis rule, monthly progress reviews, KMAP-first credentialing, and Kansas Medicaid rates.',
    intro: [
      'UnitedHealthcare Community Plan of Kansas runs the KanCare CCTS/IIS benefit through Optum Behavioral Health — and unlike most states, Optum publishes an explicit "For Kansas Medicaid member" section in its ABA State Mandates supplemental criteria, plus a Kansas-specific ABA onboarding guide. The Kansas overlay has teeth: a 40 hours/week ceiling on the individualized plan, the 6-month diagnosis-validation rule, monthly provider progress reviews (the strictest cadence among the three MCOs), and a written exclusion list. It also answers the rate question more directly than anyone: UHC commits to paying the Kansas Medicaid autism-services rates.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'KanCare MCO (incumbent, 2025–2027); BH run by Optum' },
      { label: 'Prior auth', value: 'Required for CCTS and IIS — reviewed once all documentation is in' },
      { label: 'Diagnosis recency', value: 'ASD validated within the last 6 months by licensed psychologist or MD; age 20 and under' },
      { label: 'Plan ceiling', value: 'No more than 40 hrs/week; state 50 h/yr CCTS + 25 h/wk IIS limits underneath' },
      { label: 'Review cadence', value: 'Monthly CCTS progress review; formal renewal at minimum every 6 months' },
      { label: 'Rates', value: 'Pays Kansas Medicaid autism-services rates (per KMAP Reference Codes lookup)' },
    ],
    sections: [
      {
        h2: 'The Kansas-specific Optum criteria',
        body: [
          'Optum\'s Kansas Medicaid entry codifies the state EPSDT framework with its own supplement: the member must be age 20 and under with an ASD diagnosis validated within the last 6 months by a licensed psychologist or MD via comprehensive diagnostic evaluation; identified deficits form the basis of an individualized treatment plan of no more than 40 hours per week; the CCTS provider reviews progress monthly; and a formal treatment-plan review and renewal request goes in at minimum every six months. The document also carries an explicit non-authorization list — speech/OT, vocational rehab, respite, recreational therapy, orientation & mobility, services delivered in PRTF or hospital settings, and duplicated services — worth screening against before a request goes out the door.',
          'Layered on top since KMAP Bulletin 26140 (eff. 11/1/2026): for members 20 and under, the ASD diagnosis itself must come from a Kansas BSRB-licensed clinical psychologist or a qualified physician, documented against DSM criteria/severity using a validated diagnostic tool such as ADOS or CARS. This is a credential/tooling add-on to — not a replacement for — the 6-month diagnosis-currency rule above, and existing members diagnosed by a non-compliant provider get a 2-year grace period.',
        ],
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (Kansas Medicaid section, annual review 11/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      {
        h2: 'Credentialing runs KMAP-first — and rates are the Medicaid schedule',
        body: [
          'You cannot start with Optum directly: providers complete KMAP enrollment first, and Optum then retrieves the application from KMAP to begin credentialing (about 60 days). CCTS credentialing requires both BACB certification proof AND the Kansas BSRB license number. Auth resources live on Provider Express; the contracting line is 1-877-614-0484 (ask for the Kansas ABA Network Manager), and the plan publishes a dedicated KanCare network contact (Carolan Wishall, 1-913-608-3064). On payment, the onboarding guide is unambiguous: "We\'ll reimburse you for services according to the Kansas Medicaid rates for autism services" — which makes the KMAP Reference Codes interactive lookup your rate sheet for this plan too.',
        ],
        cites: [
          { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis date + evaluator credentials', desc: 'Licensed psychologist or MD, comprehensive evaluation, within the last 6 months — the initial-auth gate.' },
      { title: 'Member age', desc: 'EPSDT scope is age 20 and under for the Kansas Medicaid criteria.' },
      { title: 'Requested hours vs. the 40 h/wk ceiling', desc: 'The individualized plan cannot exceed 40 hours/week; state CCTS/IIS soft limits apply underneath.' },
      { title: 'Concurrent services', desc: 'Screen against the exclusion list (speech/OT, respite, PRTF/hospital settings, duplicated services) before submitting.' },
      { title: 'KMAP + Optum credentialing status', desc: 'KMAP enrollment first, then Optum credentialing (~60 days); CCTS needs BACB proof + the BSRB license number.' },
    ],
    sources: [
      { title: 'Optum — ABA State Mandates supplemental criteria (Kansas Medicaid section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
      { title: 'KMAP fee schedules — interactive lookup (rate source)', url: 'https://portal.kmap-state-ks.us/PublicPage/ProviderPricing/FeeSchedules' },
      { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
      { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
      { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
      { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          '"The member is age 20 and under." Optum\'s Kansas Medicaid entry states the EPSDT bound outright, matching KMAP Bulletin 26140\'s scope of "individuals aged 20 years and younger."',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      dxRecency: {
        value:
          'Two rules now point in opposite directions, and the newer one is the state\'s. KMAP Bulletin 26140 — reissued 8/31/2026 with its effective date moved from September 1 to November 1, 2026 — states that once an individual is diagnosed by a qualified diagnostician under that policy, "they are eligible for autism treatment, including applied behavioral analysis (ABA) therapy, without the need for a re-evaluation of their autism spectrum disorder diagnosis. There is also no time limit on how soon they begin autism treatment... following their diagnosis of autism spectrum disorder." Optum\'s current State Mandates supplement (July 2026) carries that language verbatim for Kansas Medicaid members and no longer states a 6-month validation rule; Sunflower\'s KS.CP.01, last reviewed 06/2019, still requires that an "MD or licensed psychologist has evaluated w/in last 6 months for current validation of Autism diagnosis." Members already in treatment who were diagnosed by a non-qualifying diagnostician have two years to obtain an updated diagnosis, which "does not necessarily need to involve a complete diagnostic evaluation."',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      diagnosingProviders: {
        value:
          'Since KMAP Bulletin 26140, for members age 20 and younger the ASD diagnosis must come from a Kansas Behavioral Sciences Regulatory Board (BSRB) licensed clinical psychologist or a qualified physician, with a multidisciplinary approach preferred. The bulletin lists the qualifying provider type/specialty codes: 11/112 Psychologist, 31/316 Family Practitioner, 31/318 General Practitioner, 31/326 Neurologist, 31/339 Psychiatrist, 31/345 General Pediatrician (Developmental), 31/349 Exempt License Physician and 31/351 Indian Health Services. A qualifying BSRB clinical psychologist needs a doctoral degree in psychology or equivalent training plus two years of supervised experience delivering BSRB-approved psychological services; qualifying physicians — developmental/behavioral pediatricians, psychiatrists, neurologists and primary care physicians — need documented additional training in ASD diagnosis, which Optum notes "may be subject to periodic audit/inquiry." Optum adds that the evaluation must be a comprehensive diagnostic evaluation under K.S.A. 74-7501.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      diagnosticTools: {
        value:
          'The diagnostic evaluation must document DSM criteria and symptom severity level and must rest on "a validated ASD diagnostic assessment tool such as the Autism Diagnostic Observation Schedule (ADOS) or the Childhood Autism Rating Scale (CARS)." Screening tools — M-CHAT, ABC, ASSQ, RITA-T, STAT — "have clinical value in recognizing children at risk of having ASD, but the diagnosis of ASD must rest on validated diagnostic tools such as those listed above." Recommended additions: a cognitive evaluation using CAT/CLAMS, MSEL or Bayley (a school district\'s validated cognitive testing may be used), and an adaptive measure such as ABAS or Vineland.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      referral: {
        value:
          'No separate physician referral is named in Optum\'s Kansas criteria — the gate is authorization plus the qualifying diagnosis. "Prior authorization for these services will be reviewed after all requested documentation has been submitted," and "medical necessity for CCTS and IIS services must be met on an individual case-by-case basis." The state\'s own requirement of "a recommendation... by a physician or other licensed practitioner" sits underneath.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
        ],
      },
      telehealth: {
        value:
          'Not addressed. Optum\'s Kansas Medicaid entry sets diagnosis, treatment and exclusion criteria but is silent on telehealth modality, and no KMAP telehealth rule for CCTS/IIS could be retrieved.',
        status: 'unverified',
        cites: [{ title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum\'s Kansas ABA network team (contracting line 1-877-614-0484) and the Optum KanCare Provider Manual on Provider Express.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'IIS technicians "must be supervised by a BCBA" — Optum states it as a qualification condition alongside the RBT-or-KDADS-letter alternative. CCTS credentialing requires both BACB certification and the Kansas BSRB license number. No observation percentage or caseload ratio is published for Kansas; for RBT-credentialed staff the BACB floor applies.',
        status: 'verified',
        cites: [
          { title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' },
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
        ],
      },
      concurrentBilling: {
        value:
          'Not addressed in Optum\'s Kansas Medicaid criteria, which are clinical rather than reimbursement rules. Note that the per-day table and the 97153/97155 concurrency answer in Optum\'s commercial ABA reimbursement policy apply to commercial business, not to this Medicaid line.',
        status: 'unverified',
        cites: [{ title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia:
          'Optum\'s Kansas ABA network team (1-877-614-0484) and the Optum KanCare Provider Manual; the KMAP Mental Health Fee-for-Service Provider Manual was unreachable at this review.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'A weekly ceiling rather than a daily one: identified deficits "form the basis for an individualized treatment for no more than 40 hours per week," on top of the state soft limits of 50 hours a year of CCTS and an initial IIS authorization of up to 25 hours a week. Progress is reviewed by the CCTS provider monthly, with a formal treatment-plan review and renewal request "a minimum of every six months."',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
        ],
      },
      noteSignature: {
        value:
          'No session-note signature rule is published. Optum\'s KanCare training sets a chart-content standard instead — a complete biopsychosocial assessment, the diagnosis, the treatment request with specific long- and short-term goals, and ongoing risk assessments — and points to the Optum KanCare Provider Manual for the rest.',
        status: 'unverified',
        cites: [{ title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' }],
        verifyVia:
          'The Optum KanCare Provider Manual on Provider Express, and your participation agreement\'s documentation clause.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'No payable-setting list, but a written exclusion list: ABA (CCTS/IIS) "will not be authorized" for speech therapy, occupational therapy, vocational rehabilitation, supportive respite care, recreational therapy, orientation and mobility, "services provided in a PRTF/hospital setting," or services "being provided in duplicate through any other source/setting." Screen every request against it before submitting.',
        status: 'verified',
        cites: [{ title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      billAsProvider: {
        value:
          'Under the rendering individual\'s own NPI, after KMAP enrollment. "The group and individual health care professionals must be enrolled with KMAP and must have a KMAP ID to bill for Medicaid services. Your group must be enrolled and have a KMAP ID before your individual ABAs or RBTs can enroll," and "when you hire new ABAs or RBTs, you must enroll them through KMAP before you can bill Medicaid under the employee\'s NPI number." Each service location needs its own enrollment. You cannot start with Optum: providers complete KMAP enrollment first, and Optum then retrieves the application from KMAP to begin credentialing.',
        status: 'verified',
        cites: [{ title: 'UHC/Optum — KanCare ASD getting-started guide (BH00567_10102024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/ksABA/ksHowToAuth.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Kansas cover ABA?', a: 'Yes — the KanCare CCTS/IIS benefit under EPSDT for members age 20 and under, administered by Optum, with prior authorization on both service tiers and an individualized plan capped at 40 hours/week.' },
      { q: 'How is UHC different from the other KanCare MCOs?', a: 'It publishes explicit Kansas criteria: the 40 h/wk plan ceiling, monthly progress reviews (strictest cadence of the three), a written exclusion list, and a commitment to pay the Kansas Medicaid autism-services rates.' },
      { q: 'Who can make the ASD diagnosis for a UHC Kansas Medicaid member?', a: 'Since KMAP Bulletin 26140 (eff. 11/1/2026), for members 20 and under, a Kansas BSRB-licensed clinical psychologist or a qualified physician, documented against DSM criteria/severity using a validated diagnostic tool (e.g., ADOS, CARS) — on top of the existing 6-month diagnosis-currency rule. Existing non-compliant diagnoses get a 2-year grace period.' },
      { q: 'How do I join the UHC KanCare ABA network?', a: 'Enroll in KMAP first — Optum retrieves your application from KMAP to start credentialing (~60 days). CCTS credentialing requires BACB certification proof plus your Kansas BSRB license number; contracting line 1-877-614-0484.' },
    ],
  },

  'healthy-blue-kansas': {
    slug: 'healthy-blue-kansas',
    family: 'anthem',
    cardDesc: 'Newest MCO (1/1/2025, absorbed Aetna members); Availity intake, own autism-testing form, thin public policy.',
    assessmentPA: {
      value: 'Required — dedicated Autism Spectrum Disorder Testing request form (KSHB-CD-066296-24), which flags whether the request is to access ABA services',
      status: 'verified',
      cites: [
        { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
        { title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — via Availity (preferred), phone, or BH outpatient fax 1-866-852-8978; hour rules and review cadence not published — verify in the portal',
      status: 'verified',
      cites: [{ title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' }],
    },
    dxRequired: {
      value: 'Yes — ASD, under the KanCare CCTS/IIS benefit. Healthy Blue publishes no diagnosis rule of its own, so the KMAP-wide rule binds: per Bulletin 26140 (reissued 8/31/2026, effective 11/1/2026), members 20 and under must be diagnosed by a Kansas BSRB-licensed clinical psychologist or a qualified physician, documented against DSM criteria and severity level using a validated tool such as ADOS or CARS, with a 2-year grace period for members already diagnosed by a non-qualifying provider',
      status: 'verified',
      cites: [
        { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
        { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
      ],
    },
    payer: 'Healthy Blue Kansas',
    state: 'KS', kind: 'medicaid-mco', parent: 'KanCare (Kansas Medicaid)',
    pill: 'Payer Guide · Healthy Blue Kansas',
    h1: 'Healthy Blue Kansas ABA coverage (KanCare MCO).',
    metaTitle: 'Healthy Blue Kansas (KanCare) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Healthy Blue Kansas — the KanCare MCO that replaced Aetna Better Health on 1/1/2025 — handles autism services: Availity prior authorization, the ASD testing request form, Anthem-platform mechanics, and what isn\'t publicly published yet.',
    intro: [
      'Healthy Blue Kansas is the newest KanCare MCO, live January 1, 2025 as a three-way collaboration of Blue Cross and Blue Shield of Kansas, Blue Cross and Blue Shield of Kansas City, and Anthem/Elevance — which is why its provider machinery is Anthem-platform (Availity) even though it isn\'t a plain Elevance subsidiary. It matters for intake because it absorbed most Aetna Better Health of Kansas members automatically at launch, so a large block of ABA cases changed payers at once. Honesty note up front: of the three KanCare MCOs, Healthy Blue publishes the least ABA-specific policy — no Kansas hour rules or review cadence appear on its public pages — so the state CCTS/IIS baseline plus portal verification is the working rulebook.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'KanCare MCO — new 1/1/2025 (BCBSKS + BCBS Kansas City + Anthem/Elevance JV)' },
      { label: 'Aetna transition', value: 'Absorbed most Aetna Better Health members 1/1/2025; continuity-of-care auths honored at transition' },
      { label: 'Prior auth', value: 'Required — Availity preferred; BH outpatient fax 1-866-852-8978' },
      { label: 'Assessment form', value: 'Dedicated ASD Testing request form (KSHB-CD-066296-24)' },
      { label: 'Hour rules', value: 'Not published — state soft limits (50 h/yr CCTS, 25 h/wk IIS) are the KanCare baseline' },
      { label: 'Clinical guidelines', value: 'Anthem/Elevance UM guideline library on healthybluekansas.com' },
    ],
    sections: [
      {
        h2: 'What\'s verified about Healthy Blue\'s ABA process',
        body: [
          'Prior authorization submits through Availity (Patient Registration > Authorizations & Referrals), or by phone or fax — behavioral-health outpatient fax 1-866-852-8978 (inpatient 1-866-852-8976) — and the site hosts a Prior Authorization Lookup Tool for code-level questions. Autism and psychological testing use distinct paper forms: the Autism Spectrum Disorder Testing request (KSHB-CD-066296-24) versus the psychological-testing form (KSHB-CD-066293-24) — using the wrong one delays the assessment auth. The autism form includes whether the request is to access ABA services, and the plan\'s site indicates ABA therapy requires prior authorization (ABA line 877-563-9347). Clinical criteria come from the Anthem/Elevance UM guideline library published on the plan site; internal Anthem BH staff run UM — no external ABA vendor was identified on the pages we reviewed.',
        ],
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' },
        ],
      },
      {
        h2: 'What isn\'t published — and the Aetna transition',
        body: [
          'We found no published Kansas-specific ABA hour caps, review cadence, or diagnosis-recency rule for Healthy Blue — the biggest verification gap among the three MCOs. Until the plan publishes more, work from the KanCare baseline (CCTS 50 hours/year, IIS 25 hours/week initial, state PA requirement) and confirm specifics through Availity or the ABA line before promising families a timeline. One state-level rule does bind here regardless of what Healthy Blue itself has published: KMAP Bulletin 26140 (eff. 11/1/2026) requires that for members 20 and under, the ASD diagnosis come from a Kansas BSRB-licensed clinical psychologist or a qualified physician, using a validated diagnostic tool — a KMAP-wide EPSDT rule, not an MCO-specific one, so it applies to Healthy Blue members too even though the plan has no Healthy-Blue-branded page stating so. On the transition: Aetna Better Health of Kansas served KanCare 2019–2024 and was not selected for the 2025–2027 contracts; its members auto-moved to Healthy Blue on 1/1/2025 (with an extended MCO-change deadline of 4/4/2025), and continuity-of-care authorization honoring applied at the switch. Any family or directory record still pointing at Aetna Better Health belongs here now — or at Sunflower or UHC if they actively switched.',
        ],
        cites: [
          { title: 'Kansas Action for Children — State selects companies to manage KanCare (Aetna → Healthy Blue)', url: 'https://www.kac.org/state_selects_companies_to_manage_kancare' },
          { title: 'KDHE — KanCare MCO contract awards 2025–2027', url: 'https://www.kdhe.ks.gov/CivicAlerts.aspx?AID=1104' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
    ],
    collect: [
      { title: 'Prior-payer history', desc: 'Ex-Aetna Better Health families landed here 1/1/2025 — check for transition-honored auths and stale card details.' },
      { title: 'The right testing form', desc: 'ASD testing uses KSHB-CD-066296-24, not the psychological-testing form (KSHB-CD-066293-24) — the wrong form delays the assessment auth.' },
      { title: 'ASD diagnosis + physician recommendation', desc: 'The state CCTS PA baseline applies; collect the diagnostic report and practitioner recommendation up front.' },
      { title: 'Portal-verified specifics', desc: 'Hour caps and review cadence aren\'t published — confirm per case via Availity or the ABA line 877-563-9347.' },
    ],
    sources: [
      { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
      { title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' },
      { title: 'BCBSKS — Healthy Blue collaboration announcement (JV structure)', url: 'https://www.bcbsks.com/news-release/new-healthy-blue-collaboration-aims-offer-kansans-trusted-local-medicaid-solution-2024' },
      { title: 'Kansas Action for Children — KanCare 3.0 selection and Aetna transition', url: 'https://www.kac.org/state_selects_companies_to_manage_kancare' },
      { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (issued 8/12/2026; reissued 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
      { title: 'KDHE — KanCare MCO contract awards 2025–2027', url: 'https://www.kdhe.ks.gov/CivicAlerts.aspx?AID=1104' },
      { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
      { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
      { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
      { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'Healthy Blue publishes no Kansas-specific ABA rule on this point — its public prior-authorization pages and its ASD testing form carry none — so the KanCare state floor governs: CCTS and IIS are State Plan services under EPSDT, and KMAP Bulletin 26140 fixes the diagnostician rule for "individuals aged 20 years and younger."',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      dxRecency: {
        value:
          'Healthy Blue publishes no Kansas-specific ABA rule on this point — its public prior-authorization pages and its ASD testing form carry none — so the KanCare state floor governs: KMAP Bulletin 26140 — reissued 8/31/2026 with its effective date moved from September 1 to November 1, 2026 — states that once an individual is diagnosed by a qualified diagnostician under that policy, "they are eligible for autism treatment, including applied behavioral analysis (ABA) therapy, without the need for a re-evaluation of their autism spectrum disorder diagnosis. There is also no time limit on how soon they begin autism treatment... following their diagnosis of autism spectrum disorder." Optum\'s current State Mandates supplement (July 2026) carries that language verbatim for Kansas Medicaid members and no longer states a 6-month validation rule; Sunflower\'s KS.CP.01, last reviewed 06/2019, still requires that an "MD or licensed psychologist has evaluated w/in last 6 months for current validation of Autism diagnosis." Members already in treatment who were diagnosed by a non-qualifying diagnostician have two years to obtain an updated diagnosis, which "does not necessarily need to involve a complete diagnostic evaluation."',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      diagnosingProviders: {
        value:
          'Healthy Blue publishes no Kansas-specific ABA rule on this point — its public prior-authorization pages and its ASD testing form carry none — so the KanCare state floor governs: Since KMAP Bulletin 26140, for members age 20 and younger the ASD diagnosis must come from a Kansas Behavioral Sciences Regulatory Board (BSRB) licensed clinical psychologist or a qualified physician, with a multidisciplinary approach preferred. The bulletin lists the qualifying provider type/specialty codes: 11/112 Psychologist, 31/316 Family Practitioner, 31/318 General Practitioner, 31/326 Neurologist, 31/339 Psychiatrist, 31/345 General Pediatrician (Developmental), 31/349 Exempt License Physician and 31/351 Indian Health Services. A qualifying BSRB clinical psychologist needs a doctoral degree in psychology or equivalent training plus two years of supervised experience delivering BSRB-approved psychological services; qualifying physicians — developmental/behavioral pediatricians, psychiatrists, neurologists and primary care physicians — need documented additional training in ASD diagnosis, which Optum notes "may be subject to periodic audit/inquiry."',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
        ],
      },
      diagnosticTools: {
        value:
          'At state level: The diagnostic evaluation must document DSM criteria and symptom severity level and must rest on "a validated ASD diagnostic assessment tool such as the Autism Diagnostic Observation Schedule (ADOS) or the Childhood Autism Rating Scale (CARS)." Screening tools — M-CHAT, ABC, ASSQ, RITA-T, STAT — "have clinical value in recognizing children at risk of having ASD, but the diagnosis of ASD must rest on validated diagnostic tools such as those listed above." Recommended additions: a cognitive evaluation using CAT/CLAMS, MSEL or Bayley (a school district\'s validated cognitive testing may be used), and an adaptive measure such as ABAS or Vineland. The plan\'s own ASD Testing request form (KSHB-CD-066296-24) asks which rating scales were administered before the testing request — ASRS, SCQ, SRS, MCHAT, CARS, GARS, GADS or other — and which assessment components were completed: psychiatric and medical history, clinical interview with the patient, interview with family members, direct observation, medical evaluation with hearing and vision screening, developmental screening evaluation by a physician or psychologist, evaluation by a speech-language pathologist, structured developmental and social history, consultation with school or other important persons, review of academic records/IEP, brief inventories and rating scales, and pertinent family history. The date of the diagnostic interview must be given.',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 26140 — ASD diagnosis credential requirement (UPDATED 8/31/2026, eff. 11/1/2026)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-26140.html' },
          { title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' },
        ],
      },
      referral: {
        value:
          'State floor plus the plan\'s form discipline. KMAP requires "a recommendation... by a physician or other licensed practitioner" and prior authorization; Healthy Blue routes requests through Availity Essentials (Patient Registration > Authorizations & Referrals), by phone, or by behavioral-health outpatient fax 1-866-852-8978, and ASD testing must go on the dedicated ASD Testing request form (KSHB-CD-066296-24) rather than the psychological-testing form — the form itself asks "Is this a request to access ABA services?" and carries a provider signature and date.',
        status: 'verified',
        cites: [
          { title: 'KMAP Bulletin 17129 — Additional State Plan Services (CCTS/IIS under EPSDT, eff. 1/1/2017)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-17129.html' },
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' },
        ],
      },
      telehealth: {
        value:
          'Not published for ABA. The plan\'s ASD Testing request form does ask whether "services [are] being rendered in person or via telehealth," which shows telehealth is contemplated for the testing, but Healthy Blue publishes no telehealth rule for the CCTS/IIS codes and no KMAP rule could be retrieved.',
        status: 'unverified',
        cites: [{ title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' }],
        verifyVia:
          'Healthy Blue\'s ABA line at 877-563-9347, or Availity Essentials; the KMAP Mental Health Fee-for-Service Provider Manual was unreachable at this review.',
        blocker: 'document',
      },
    },
    deliveryRules: {
      supervision: {
        value:
          'Healthy Blue publishes no Kansas-specific ABA rule on this point — its public prior-authorization pages and its ASD testing form carry none — so the KanCare state floor governs: IIS technicians hold an RBT certificate "under the supervision of a BCBA" or qualify through the KDADS-letter pathway, and work "under the direction of the BCBA or other Qualified CCTS Practitioner." No Kansas percentage or caseload ratio is published.',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'KMAP Bulletin 20147 — Autism CCTS & IIS provider qualification changes (eff. 4/3/2020)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-20147.html' },
          { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
        ],
      },
      concurrentBilling: {
        value:
          'Not published — neither by Healthy Blue nor at state level.',
        status: 'unverified',
        cites: [{ title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' }],
        verifyVia:
          'Healthy Blue\'s Prior Authorization Lookup Tool and ABA line 877-563-9347, or Availity; the KMAP manuals were unreachable at this review.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'Healthy Blue publishes no Kansas-specific ABA rule on this point — its public prior-authorization pages and its ASD testing form carry none — so the KanCare state floor governs: CCTS carries an annual soft limit of 50 hours and IIS an initial authorization of up to 25 hours per week, with additional hours available on a demonstration of medical necessity. No per-day unit ceiling is published at either level.',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'KMAP Bulletin 19029 — Rate Increase for Autism Services (CCTS 50 h/yr, IIS 25 h/wk limits)', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-19029.html' },
        ],
      },
      noteSignature: {
        value:
          'Not published. The only signature Healthy Blue requires in its ABA-adjacent paperwork is the provider signature and date on the ASD Testing request form.',
        status: 'unverified',
        cites: [{ title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' }],
        verifyVia:
          'The Healthy Blue Kansas provider manual and the Anthem/Elevance UM guideline library on healthybluekansas.com.',
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Not published — neither by Healthy Blue nor at state level.',
        status: 'unverified',
        cites: [{ title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' }],
        verifyVia:
          'Healthy Blue\'s ABA line 877-563-9347 and the Prior Authorization Lookup Tool.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Healthy Blue publishes no Kansas-specific ABA rule on this point — its public prior-authorization pages and its ASD testing form carry none — so the KanCare state floor governs: every group and every individual needs their own KMAP ID before an MCO can pay, with a separate enrollment for each service location. On Healthy Blue\'s own forms the distinction is drawn between the professional administering the service, the provider NPI and tax ID, and the billing facility/group NPI and tax ID.',
        status: 'verified',
        cites: [
          { title: 'Healthy Blue Kansas — Prior Authorization Requirements', url: 'https://www.healthybluekansas.com/provider/state-federal/resources/prior-authorization-requirements' },
          { title: 'KMAP Bulletin 21013 — CCTS/IIS provider enrollment clarification', url: 'https://www.sunflowerhealthplan.com/newsroom/kmap-21013.html' },
          { title: 'Healthy Blue KS — ASD Testing request form (KSHB-CD-066296-24)', url: 'https://www.healthybluekansas.com/content/dam/digital/healthyblue/documents/provider/ks/behavioral-health/KSHB-CD-066296-24-SRS66052%20BH%20Autism%20Testing%20Request%20Form_FINAL_v2%20FILLABLE.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Healthy Blue Kansas cover ABA therapy?', a: 'Yes — it administers the KanCare CCTS/IIS autism-services benefit under EPSDT, with prior authorization via Availity, phone, or fax. Plan-specific hour rules aren\'t published, so the state baseline plus portal verification governs.' },
      { q: 'What happened to Aetna Better Health of Kansas members?', a: 'Aetna lost its KanCare contract; members auto-transitioned to Healthy Blue on 1/1/2025 (extended change deadline 4/4/2025) with continuity-of-care authorizations honored. Any listing showing Aetna Better Health as an active KanCare MCO is outdated.' },
      { q: 'How do I submit an ABA authorization to Healthy Blue Kansas?', a: 'Availity is preferred (Patient Registration > Authorizations & Referrals); behavioral-health outpatient fax is 1-866-852-8978, and the plan lists an ABA line at 877-563-9347. Assessment requests use the dedicated ASD Testing form KSHB-CD-066296-24.' },
    ],
  },

  'aetna-kansas': {
    slug: 'aetna-kansas',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the K.S.A. 40-2,194 mandate layer; no KanCare plan anymore.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'unverified',
      cites: [
        { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
      verifyVia:
        'Aetna CPB 0554 / CPB 0648 and the ABA Medical Necessity Guide. The substantive rule — ASD only, ABA for other diagnoses considered experimental — is sourced, but the code range printed here is NOT: the Medical Necessity Guide states "(ICD-10/ F84.0; F84.3 - F84.9)", which omits F84.1 and F84.2. Confirm the governing code set with Aetna before relying on "F84.0-F84.9".',
      blocker: 'document',
    },
    payer: 'Aetna in Kansas',
    state: 'KS', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Kansas',
    h1: 'Aetna ABA coverage in Kansas: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Kansas: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Kansas families — the national clinical policy, prior authorization, the K.S.A. 40-2,194 mandate (under-12 age limit, hour caps, exemptions), Kansas behavior-analyst licensure, and the Aetna Better Health exit.',
    intro: [
      'For an intake team in Kansas, an Aetna card means three layers at once: the carrier\'s national clinical policy, Kansas\'s autism insurance mandate (K.S.A. 40-2,194), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — plus one Kansas-specific correction worth making early: Aetna no longer runs a Medicaid plan in Kansas.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'K.S.A. 40-2,194 — large group (51+) only' },
      { label: 'Mandate age', value: 'Under age 12 only' },
      { label: 'Mandate caps', value: '1,300 hrs/yr × 4 yrs (dx by age 5), else 520 hrs/yr — exceedable with prior approval; parity-questioned' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA; small employers (2–50) via waiver; limited-benefit plans' },
      { label: 'Licensure', value: 'KS Licensed Behavior Analyst (BSRB), required since 7/1/2016' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Kansas',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — we found no Kansas-specific Aetna ABA policy, form, or supplement — so what changes in Kansas is the legal floor underneath it: the state mandate below governs what fully-insured large-group plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Kansas.',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Kansas mandate: what it guarantees (and doesn\'t)',
        body: [
          'Kansas\'s mandate, K.S.A. 40-2,194, is one of the narrower ones in our directory. It reaches large-group policies, service-corporation contracts, fraternal benefit societies, and HMOs (issued/renewed after 1/1/2015; grandfathered plans from 1/1/2016), and 2023\'s SB 24 redefined "large employer" down to 51+ employees. Coverage is limited to covered individuals under age 12, and ABA carries hour-based caps: 1,300 hours/year for 4 years for a child diagnosed between birth and age 5, otherwise 520 hours/year until age 12 — though plans may exceed the caps with prior approval when medically necessary, the statute\'s own escape valve. Day care, facility-based, and school-based services are excluded; after 7/1/2016 ABA under the mandate must be delivered by providers licensed or exempt under the ABA licensure act. Small employers (2–50) can obtain a waiver by showing a 2.5%+ premium increase, self-funded ERISA plans sit outside the statute entirely, and a member diagnosed under any DSM edition cannot be forced into re-evaluation upon DSM revision. Advocacy analysis (not a regulator determination) treats the under-12 age limit and hour caps as unenforceable quantitative limits under MHPAEA for parity-covered plans — so treat cap-based denials as appealable, not final.',
        ],
        cites: [
          { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
          { title: '2023 Session Laws Ch. 3, SB 24 (employer-size amendment)', url: 'https://sos.ks.gov/publications/sessionlaws/2023/Chapter-03-SB-24.html' },
          { title: 'Autism Legal Resource Center — Kansas (parity analysis)', url: 'https://www.autismlegalresourcecenter.com/resources/autism-healthcare-info/kansas/' },
        ],
      },
      {
        h2: 'Aetna Better Health of Kansas is gone',
        body: [
          'Unlike many states, "we have Aetna" in Kansas cannot mean Medicaid anymore: Aetna Better Health of Kansas served KanCare from 2019 to 2024, lost the KanCare 3.0 contract, and its members auto-transitioned to Healthy Blue Kansas on January 1, 2025. Any directory, card, or family memory pointing at Aetna Better Health of Kansas is stale — route those inquiries to the Healthy Blue Kansas guide (or Sunflower/UHC if the family actively switched). Every Aetna card you see in Kansas today is commercial.',
        ],
        cites: [
          { title: 'Kansas Action for Children — Aetna not renewed for KanCare 3.0', url: 'https://www.kac.org/state_selects_companies_to_manage_kancare' },
        ],
      },
      {
        h2: 'Licensure & rates in Kansas',
        body: [
          'Kansas has required licensure for practicing behavior analysts since July 1, 2016: the Licensed Behavior Analyst (LBA) and Licensed Assistant Behavior Analyst (LaBA) credentials under the applied behavior analysis licensure act (K.S.A. 65-7501 et seq.), administered by the Behavioral Sciences Regulatory Board and keyed to BACB certification — and the mandate itself conditions ABA coverage on licensed or exempt providers, so licensure is a coverage requirement, not just a credentialing one. On rates: Aetna does not publish commercial ABA fee schedules for Kansas (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The usual Medicaid benchmark is also unusually opaque here: current KanCare autism-services rates are only available through the KMAP interactive fee-schedule lookup, so pull them there before a rate negotiation.',
        ],
        cites: [
          { title: 'K.S.A. 65-7502 — ABA licensure act definitions', url: 'https://ksrevisor.gov/statutes/chapters/ch65/065_075_0002.html' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured large group (mandate applies) vs. self-funded ERISA (exempt) vs. small group (waiver-eligible) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Aetna Better Health of Kansas no longer exists — anything Medicaid-flavored belongs to Healthy Blue (or Sunflower/UHC) now.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age + diagnosis age', desc: 'The mandate\'s under-12 limit and its 1,300-vs-520 hour tiers key off age at diagnosis — flag edge cases for parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
      { title: '2023 Session Laws Ch. 3, SB 24', url: 'https://sos.ks.gov/publications/sessionlaws/2023/Chapter-03-SB-24.html' },
      { title: 'K.S.A. 65-7502 — ABA licensure act definitions', url: 'https://ksrevisor.gov/statutes/chapters/ch65/065_075_0002.html' },
      { title: 'Kansas Action for Children — Aetna → Healthy Blue transition', url: 'https://www.kac.org/state_selects_companies_to_manage_kancare' },
      { title: 'Autism Legal Resource Center — Kansas (parity analysis)', url: 'https://www.autismlegalresourcecenter.com/resources/autism-healthcare-info/kansas/' },
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'K.S.A. 40-2,194 limits the mandate to covered individuals under age 12, on fully-insured large-group coverage only (51+ employees since 2023\'s SB 24), with ABA capped at 1,300 hours a year for four years for a child diagnosed between birth and age 5 and 520 hours a year otherwise — caps a plan may exceed with prior approval when medically necessary. Advocacy analysis (not a regulator determination) treats the under-12 limit and the hour caps as unenforceable quantitative treatment limits under MHPAEA for parity-covered plans, so treat an age- or cap-based denial as appealable rather than final. The carrier\'s national ABA policy sets no age bound of its own.',
        status: 'plan-dependent',
        cites: [
          { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
          { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
        blocker: 'per-case',
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
        blocker: 'per-case',
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
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. Aetna\'s ABA documents set medical-necessity criteria and precertification requirements for 97151–97158, 0362T and 0373T, but no per-day unit ceiling and no statement of which MUE table applies. The guide does publish typical intensity bands — comprehensive ABA 10–25 hours/week, focused ABA 1–20 hours/week — as clinical guidance, not claim edits.',
        status: 'unverified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
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
        blocker: 'document',
      },
      placeOfService: {
        value:
          'Aetna does not publish a POS code list for ABA. The one place-of-service boundary it does state is the schools carve-out: pursuant to applicable law Aetna "is not required [to] provide services to a child under an individualized education program or any obligation imposed on a public school by the Individuals with Disabilities Education Act." That is a limit on paying for what the IEP owes, not a blanket ban on the school setting — and it yields to a stronger state mandate. Where ABA is payable in a school, in the community or in a group home is a benefit-document question on Aetna plans.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
        verifyVia:
          'The member\'s benefit document, and Aetna provider services for whether school-setting ABA is payable on that plan.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'The claim carries the analyst, not the technician. "Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope of practice definition, unless state mandates, plan documents or contracts require otherwise." The escape clause matters: a state mandate or your contract can move the line, so confirm before enrolling technicians.',
        status: 'verified',
        cites: [{ title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Kansas?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Kansas\'s mandate (K.S.A. 40-2,194) for fully-insured large-group plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Kansas autism mandate require?', a: 'For large-group (51+) fully-insured plans: coverage for members under 12, with ABA capped at 1,300 hours/year for 4 years when diagnosed by age 5, otherwise 520 hours/year — exceedable with prior approval when medically necessary. Federal parity analysis questions whether the age limit and hour caps are enforceable, so treat cap denials as appealable.' },
      { q: 'Is Aetna a KanCare (Medicaid) plan in Kansas?', a: 'Not anymore — Aetna Better Health of Kansas lost the KanCare 3.0 contract and its members moved to Healthy Blue Kansas on 1/1/2025. Aetna cards in Kansas today are commercial.' },
      { q: 'What does Aetna pay for ABA in Kansas?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. The Medicaid benchmark is only available via the KMAP interactive fee-schedule lookup, so pull current figures there before contracting conversations.' },
    ],
  },

  'cigna-kansas': {
    slug: 'cigna-kansas',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the K.S.A. 40-2,194 mandate layer; no Kansas carve-out.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
    },
    payer: 'Cigna / Evernorth in Kansas',
    state: 'KS', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Kansas',
    h1: 'Cigna / Evernorth ABA coverage in Kansas: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Kansas: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Kansas families — the national clinical policy, prior authorization, the K.S.A. 40-2,194 mandate (under-12 age limit, hour caps, exemptions), Kansas behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Kansas, a Cigna card means three layers at once: the carrier\'s national clinical policy, Kansas\'s autism insurance mandate (K.S.A. 40-2,194), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'K.S.A. 40-2,194 — large group (51+) only' },
      { label: 'Mandate age', value: 'Under age 12 only' },
      { label: 'Mandate caps', value: '1,300 hrs/yr × 4 yrs (dx by age 5), else 520 hrs/yr — exceedable with prior approval; parity-questioned' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA; small employers (2–50) via waiver; limited-benefit plans' },
      { label: 'Licensure', value: 'KS Licensed Behavior Analyst (BSRB), required since 7/1/2016' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Kansas',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Kansas is the legal floor underneath it: the state mandate below governs what fully-insured large-group plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Kansas.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Kansas mandate: what it guarantees (and doesn\'t)',
        body: [
          'Kansas\'s mandate, K.S.A. 40-2,194, is one of the narrower ones in our directory. It reaches large-group policies, service-corporation contracts, fraternal benefit societies, and HMOs (issued/renewed after 1/1/2015; grandfathered plans from 1/1/2016), and 2023\'s SB 24 redefined "large employer" down to 51+ employees. Coverage is limited to covered individuals under age 12, and ABA carries hour-based caps: 1,300 hours/year for 4 years for a child diagnosed between birth and age 5, otherwise 520 hours/year until age 12 — though plans may exceed the caps with prior approval when medically necessary, the statute\'s own escape valve. Day care, facility-based, and school-based services are excluded; after 7/1/2016 ABA under the mandate must be delivered by providers licensed or exempt under the ABA licensure act. Small employers (2–50) can obtain a waiver by showing a 2.5%+ premium increase, self-funded ERISA plans sit outside the statute entirely, and a member diagnosed under any DSM edition cannot be forced into re-evaluation upon DSM revision. Advocacy analysis (not a regulator determination) treats the under-12 age limit and hour caps as unenforceable quantitative limits under MHPAEA for parity-covered plans — so treat cap-based denials as appealable, not final.',
        ],
        cites: [
          { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
          { title: '2023 Session Laws Ch. 3, SB 24 (employer-size amendment)', url: 'https://sos.ks.gov/publications/sessionlaws/2023/Chapter-03-SB-24.html' },
          { title: 'Autism Legal Resource Center — Kansas (parity analysis)', url: 'https://www.autismlegalresourcecenter.com/resources/autism-healthcare-info/kansas/' },
        ],
      },
      {
        h2: 'No Kansas-specific Cigna policy exists',
        body: [
          'We checked the current EN0499 line by line: it contains no Kansas entry and no Kansas carve-out — the national criteria apply in Kansas, subject to the standard proviso that state law and the plan contract can override. Cigna also operates no Medicaid plan in Kansas, so a Cigna card here is always commercial. That makes benefits verification (plan funding type, mandate applicability, benefit limits) the place Kansas-specific answers come from, not a carrier document.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (full text checked for a Kansas entry)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Kansas',
        body: [
          'Kansas has required licensure for practicing behavior analysts since July 1, 2016: the Licensed Behavior Analyst (LBA) and Licensed Assistant Behavior Analyst (LaBA) credentials under the applied behavior analysis licensure act (K.S.A. 65-7501 et seq.), administered by the Behavioral Sciences Regulatory Board and keyed to BACB certification — and the mandate itself conditions ABA coverage on licensed or exempt providers, so licensure is a coverage requirement, not just a credentialing one. On rates: Cigna does not publish commercial ABA fee schedules for Kansas (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The usual Medicaid benchmark is also unusually opaque here: current KanCare autism-services rates are only available through the KMAP interactive fee-schedule lookup, so pull them there before a rate negotiation.',
        ],
        cites: [
          { title: 'K.S.A. 65-7502 — ABA licensure act definitions', url: 'https://ksrevisor.gov/statutes/chapters/ch65/065_075_0002.html' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured large group (mandate applies) vs. self-funded ERISA (exempt) vs. small group (waiver-eligible) — it decides which rulebook governs.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age + diagnosis age', desc: 'The mandate\'s under-12 limit and its 1,300-vs-520 hour tiers key off age at diagnosis — flag edge cases for parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
      { title: '2023 Session Laws Ch. 3, SB 24', url: 'https://sos.ks.gov/publications/sessionlaws/2023/Chapter-03-SB-24.html' },
      { title: 'K.S.A. 65-7502 — ABA licensure act definitions', url: 'https://ksrevisor.gov/statutes/chapters/ch65/065_075_0002.html' },
      { title: 'Autism Legal Resource Center — Kansas (parity analysis)', url: 'https://www.autismlegalresourcecenter.com/resources/autism-healthcare-info/kansas/' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'K.S.A. 40-2,194 limits the mandate to covered individuals under age 12, on fully-insured large-group coverage only (51+ employees since 2023\'s SB 24), with ABA capped at 1,300 hours a year for four years for a child diagnosed between birth and age 5 and 520 hours a year otherwise — caps a plan may exceed with prior approval when medically necessary. Advocacy analysis (not a regulator determination) treats the under-12 limit and the hour caps as unenforceable quantitative treatment limits under MHPAEA for parity-covered plans, so treat an age- or cap-based denial as appealable rather than final. The carrier\'s national ABA policy sets no age bound of its own.',
        status: 'plan-dependent',
        cites: [
          { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
        blocker: 'per-case',
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
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published in the autism resource guide — no rule on who signs a session note or when. EN0499 does require the name and credentials of the supervising and stakeholder-training providers to be documented, and dates of administration on every assessment instrument.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia:
          'The Evernorth Behavioral Health provider administrative guide and your participation agreement.',
        blocker: 'document',
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
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Under the supervising provider, because the technician cannot be credentialed: "Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Practically, the BCBA\'s credential is what the claim rides on for technician-delivered 97153.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Kansas?', a: 'Yes — under the carrier\'s national EN0499 policy for ASD (no prior auth on assessment codes; PA at the treatment step), layered on Kansas\'s mandate (K.S.A. 40-2,194) for fully-insured large-group plans. Self-funded plans are exempt from the mandate, so verify funding type first.' },
      { q: 'What does the Kansas autism mandate require?', a: 'For large-group (51+) fully-insured plans: coverage for members under 12, with ABA capped at 1,300 hours/year for 4 years when diagnosed by age 5, otherwise 520 hours/year — exceedable with prior approval when medically necessary. Federal parity analysis questions the age limit and hour caps, so treat cap denials as appealable.' },
      { q: 'What does Cigna pay for ABA in Kansas?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. The Medicaid benchmark exists only via the KMAP interactive fee-schedule lookup.' },
    ],
  },

  'unitedhealthcare-kansas': {
    slug: 'unitedhealthcare-kansas',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the K.S.A. 40-2,194 mandate layer.',
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
    payer: 'UnitedHealthcare / Optum in Kansas',
    state: 'KS', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Kansas',
    h1: 'UnitedHealthcare / Optum ABA coverage in Kansas: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Kansas: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Kansas families — the national clinical policy, prior authorization, the K.S.A. 40-2,194 mandate (under-12 age limit, hour caps, exemptions), Kansas behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Kansas, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Kansas\'s autism insurance mandate (K.S.A. 40-2,194), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order — and because UHC also runs a KanCare MCO, sorting commercial from Medicaid is the very first step.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'K.S.A. 40-2,194 — large group (51+) only' },
      { label: 'Mandate age', value: 'Under age 12 only' },
      { label: 'Mandate caps', value: '1,300 hrs/yr × 4 yrs (dx by age 5), else 520 hrs/yr — exceedable with prior approval; parity-questioned' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA; small employers (2–50) via waiver; limited-benefit plans' },
      { label: 'Licensure', value: 'KS Licensed Behavior Analyst (BSRB), required since 7/1/2016' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Kansas',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Kansas is the legal floor underneath it: the state mandate below governs what fully-insured large-group plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Kansas.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Kansas mandate: what it guarantees (and doesn\'t)',
        body: [
          'Kansas\'s mandate, K.S.A. 40-2,194, is one of the narrower ones in our directory. It reaches large-group policies, service-corporation contracts, fraternal benefit societies, and HMOs (issued/renewed after 1/1/2015; grandfathered plans from 1/1/2016), and 2023\'s SB 24 redefined "large employer" down to 51+ employees. Coverage is limited to covered individuals under age 12, and ABA carries hour-based caps: 1,300 hours/year for 4 years for a child diagnosed between birth and age 5, otherwise 520 hours/year until age 12 — though plans may exceed the caps with prior approval when medically necessary, the statute\'s own escape valve. Day care, facility-based, and school-based services are excluded; after 7/1/2016 ABA under the mandate must be delivered by providers licensed or exempt under the ABA licensure act. Small employers (2–50) can obtain a waiver by showing a 2.5%+ premium increase, self-funded ERISA plans sit outside the statute entirely, and a member diagnosed under any DSM edition cannot be forced into re-evaluation upon DSM revision. Advocacy analysis (not a regulator determination) treats the under-12 age limit and hour caps as unenforceable quantitative limits under MHPAEA for parity-covered plans — so treat cap-based denials as appealable, not final.',
        ],
        cites: [
          { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
          { title: '2023 Session Laws Ch. 3, SB 24 (employer-size amendment)', url: 'https://sos.ks.gov/publications/sessionlaws/2023/Chapter-03-SB-24.html' },
          { title: 'Autism Legal Resource Center — Kansas (parity analysis)', url: 'https://www.autismlegalresourcecenter.com/resources/autism-healthcare-info/kansas/' },
        ],
      },
      {
        h2: 'Optum\'s Kansas entry is a Medicaid entry',
        body: [
          'Optum\'s ABA State Mandates supplemental criteria document does contain an explicit Kansas section — but it is a "For Kansas Medicaid member" section, codifying the KanCare CCTS/IIS rules (age 20 and under, 6-month diagnosis validation, 40 hours/week plan ceiling, monthly progress reviews, 6-month renewals, and an exclusion list). It governs UnitedHealthcare Community Plan of Kansas members, not commercial ones — commercial Kansas members follow the national Supplemental Clinical Criteria. Knowing the distinction keeps a Medicaid rule from being argued (in either direction) on a commercial case.',
        ],
        cites: [
          { title: 'Optum — ABA State Mandates supplemental criteria (Kansas Medicaid section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Kansas',
        body: [
          'A family saying "we have UnitedHealthcare" in Kansas may actually be on the carrier\'s Medicaid plan — UnitedHealthcare Community Plan of Kansas, a KanCare MCO with behavioral health run by Optum — which follows the state\'s CCTS/IIS Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in Kansas',
        body: [
          'Kansas has required licensure for practicing behavior analysts since July 1, 2016: the Licensed Behavior Analyst (LBA) and Licensed Assistant Behavior Analyst (LaBA) credentials under the applied behavior analysis licensure act (K.S.A. 65-7501 et seq.), administered by the Behavioral Sciences Regulatory Board and keyed to BACB certification — and the mandate itself conditions ABA coverage on licensed or exempt providers, so licensure is a coverage requirement, not just a credentialing one. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Kansas (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. The usual Medicaid benchmark is also unusually opaque here: current KanCare autism-services rates are only available through the KMAP interactive fee-schedule lookup, so pull them there before a rate negotiation.',
        ],
        cites: [
          { title: 'K.S.A. 65-7502 — ABA licensure act definitions', url: 'https://ksrevisor.gov/statutes/chapters/ch65/065_075_0002.html' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured large group (mandate applies) vs. self-funded ERISA (exempt) vs. small group (waiver-eligible) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Kansas (KanCare Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis confirmed with a validated tool, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age + diagnosis age', desc: 'The mandate\'s under-12 limit and its 1,300-vs-520 hour tiers key off age at diagnosis — flag edge cases for parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates supplemental criteria (Kansas Medicaid section)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
      { title: '2023 Session Laws Ch. 3, SB 24', url: 'https://sos.ks.gov/publications/sessionlaws/2023/Chapter-03-SB-24.html' },
      { title: 'K.S.A. 65-7502 — ABA licensure act definitions', url: 'https://ksrevisor.gov/statutes/chapters/ch65/065_075_0002.html' },
      { title: 'Autism Legal Resource Center — Kansas (parity analysis)', url: 'https://www.autismlegalresourcecenter.com/resources/autism-healthcare-info/kansas/' },
      { title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value:
          'K.S.A. 40-2,194 limits the mandate to covered individuals under age 12, on fully-insured large-group coverage only (51+ employees since 2023\'s SB 24), with ABA capped at 1,300 hours a year for four years for a child diagnosed between birth and age 5 and 520 hours a year otherwise — caps a plan may exceed with prior approval when medically necessary. Advocacy analysis (not a regulator determination) treats the under-12 limit and the hour caps as unenforceable quantitative treatment limits under MHPAEA for parity-covered plans, so treat an age- or cap-based denial as appealable rather than final. The carrier\'s national ABA policy sets no age bound of its own. Optum\'s ABA State Mandates supplement does carry a Kansas section, but it is a "For Kansas Medicaid member" section governing UnitedHealthcare Community Plan of Kansas — it does not reach commercial members.',
        status: 'plan-dependent',
        cites: [
          { title: 'K.S.A. 40-2,194 (Kansas Revisor of Statutes)', url: 'https://ksrevisor.gov/statutes/chapters/ch40/040_002_0194.html' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
        verifyVia:
          'Benefits verification on the specific plan — funding type first, then the ABA benefit terms.',
        blocker: 'per-case',
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
        blocker: 'per-case',
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
        blocker: 'document',
      },
      placeOfService: {
        value:
          'No POS code list is published. The clinical criteria draw the school line instead: ABA is not covered for "services that are not ABA therapy, such as 1:1 aid delivered simultaneously during classroom instruction, or services covered under the Individuals with Disabilities Education Act (IDEA)," while "school ABA services do allow for coordination of services and would cover services such as teacher training, meetings with school personnel, and observations in the school setting."',
        status: 'plan-dependent',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia:
          'UnitedHealthcare/Optum provider services and the member\'s benefit document.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'One provider-level modifier per line, matching whoever actually rendered the service: HM = Registered Behavior Technician (less than bachelor\'s level), HN = BCaBA (bachelor\'s level), HO = BCBA or master\'s-level licensed clinician, HP = BCBA-D or doctoral-level licensed clinician. A billable ABA-supervisor service is billed with the applicable CPT code plus HO. Stacking level modifiers is a denial risk: "Billing multiple provider-level modifiers (HN, HM, HO, HP) on the same service line same service and same DOS is not appropriate and may result in claim denial."',
        status: 'verified',
        cites: [{ title: 'Optum — Applied Behavior Analysis (ABA) Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Kansas?', a: 'Yes — under Optum\'s national two-step authorization policy for ASD, layered on Kansas\'s mandate (K.S.A. 40-2,194) for fully-insured large-group plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Kansas autism mandate require?', a: 'For large-group (51+) fully-insured plans: coverage for members under 12, with ABA capped at 1,300 hours/year for 4 years when diagnosed by age 5, otherwise 520 hours/year — exceedable with prior approval when medically necessary. Federal parity analysis questions the age limit and hour caps, so treat cap denials as appealable.' },
      { q: 'Does Optum have Kansas-specific ABA criteria?', a: 'Yes, but only for Medicaid: its State Mandates supplement carries a "For Kansas Medicaid member" section (KanCare CCTS/IIS rules). Commercial Kansas members follow the national Supplemental Clinical Criteria.' },
      { q: 'What does UnitedHealthcare pay for ABA in Kansas?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. The Medicaid benchmark exists only via the KMAP interactive fee-schedule lookup.' },
    ],
  },
};

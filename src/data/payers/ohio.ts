import type { PayerConfig } from './types.js';

export const ohioPayers: Record<string, PayerConfig> = {
  'ohio-medicaid': {
    slug: 'ohio-medicaid',
    cardDesc: 'OAC 5160-34: all-PA ABA, 6-month reviews, published rates, and the OhioRISE carve-out myth.',
    assessmentPA: 'Required — PA on all covered ABA codes under the current rule (a pending rewrite would exempt the first 10 assessment hours per 180 days)',
    treatmentPA: 'Required — with medical-necessity review at baseline and every 6 months',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
    payer: 'Ohio Medicaid',
    state: 'OH', kind: 'state-medicaid',
    pill: 'Payer Guide · Ohio Medicaid',
    h1: 'Ohio Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Ohio Medicaid ABA Coverage, Rates & Prior Authorization Guide | Carelu',
    metaDescription:
      'How Ohio Medicaid covers ABA (adaptive behavior services) under OAC 5160-34-02 — prior authorization, 6-month reviews, published fee-schedule rates by credential tier, COBA/BCBA credentialing, and why OhioRISE never pays for ABA.',
    intro: [
      'Ohio Medicaid covers ABA — "adaptive behavior services" — for the assessment and treatment of autism spectrum disorder under Ohio Administrative Code rule 5160-34-02. Ohio runs heavily through its Next Generation managed-care plans, several of which layer genuinely distinct clinical policies on the state rule, so the per-plan guides below matter more here than in most states. Two facts worth knowing cold: OhioRISE (Aetna) never pays for ABA — the member\'s MCO does, even for OhioRISE-enrolled youth — and ODM has a pending rewrite of the ABA chapter that would loosen assessment PA.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — adaptive behavior services for ASD (OAC 5160-34-02)' },
      { label: 'Prior auth', value: 'Required for all covered ABA codes (current rule)' },
      { label: 'Reviews', value: 'Medical necessity at baseline, then every 6 months' },
      { label: 'Rates (per 15 min)', value: '97153 $16.04 (RBT) · 97155 $27.28 · 97151 $30.49 (COBA/BCBA tier)' },
      { label: 'Credentialing', value: 'COBA or BCBA/BCBA-D as independent practitioner; ODM Provider Type 19' },
      { label: 'OhioRISE', value: 'Does NOT pay ABA — bill the member\'s MCO (or FFS), always' },
      { label: 'Staff screening', value: 'COBA: BCI + FBI fingerprint check (OAC 4783-4-03) · RBTs: BACB background + abuse-registry check within 180 days' },
    ],
    sections: [
      {
        h2: 'Coverage & the state rule',
        body: [
          'OAC rule 5160-34-02 covers adaptive behavior services for the assessment and treatment of ASD, with prior authorization required for all covered ABA codes at both initial and ongoing stages and medical-necessity review at baseline and at least every six months. The ASD diagnosis must come from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria. Independent practitioners are Certified Ohio Behavior Analysts (COBA, under ORC Chapter 4783) or BACB BCBAs/BCBA-Ds, enrolled with ODM as Provider Type 19, Specialty 190; BCaBAs and RBTs work under supervision.',
          'Watch the pending rewrite: ODM has drafted new rules 5160-34-01 through -03 that would, among other changes, require assessment PA only beyond 10 hours per 180 days and remove specific diagnostic-condition requirements. The broken codes.ohio.gov citation flagged in earlier reviews now has a documented cause: per ODM\'s own 7/30/2026 provider stakeholder presentation, the ABA rule package was paused in 2025 for reevaluation — a mix of state budget pressure, national scrutiny of ABA spending, and state OIG audit findings elsewhere citing improper-payment takebacks ($56.5M in Indiana, $17.3M in Massachusetts, $18.5M in Wisconsin, $42.6M in Colorado, cited by ODM for context on why ABA rules are under review nationally). The chapter is under active revision again, with provider comments on the current draft due 8/5/2026, but no JCARR (Joint Committee on Agency Rule Review) filing exists yet — it remains pre-filing, not adopted law, so nothing below has changed. codes.ohio.gov\'s live page for rule 5160-34-02 still returns "no rule number corresponds" as of this review, and the entire 5160-34 chapter is still missing from the Title 5160 master chapter index; confirm current rule status with Rules@Medicaid.Ohio.gov or JCARR before relying on the codes.ohio.gov citation below.',
          'Forward-looking only — DRAFT, NOT YET ADOPTED, do not treat as current policy: draft rule 5160-34-01 would require full RBT certification (dropping today\'s exam-eligible pathway), CARF or Joint Commission organizational accreditation, and a dedicated ABA provider type. Draft rule 5160-34-03 would introduce a two-tier intensity structure — Comprehensive (10–25 hrs/week) vs. Focused (1–20 hrs/week) — restrict eligibility to ASD only, require a diagnosing/referring practitioner who is independent of (not employed by) the ABA provider, require 4 hours/month of parent participation, and explicitly ban billing ABA under non-ABA/behavioral-health codes. None of this governs coverage today; re-check when (and if) the chapter files with JCARR.',
        ],
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02 (URL currently returns "no rule number corresponds" — verify before relying on it)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'ODM — draft ABA rule package (5160-34-01/-02/-03 + fee appendix)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — Provider Stakeholder Office Hours: ABA Proposed Rule Review (7/30/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
        ],
      },
      {
        h2: 'Rates: tiered by credential',
        body: [
          'ODM\'s ABA fee schedule pays per 15-minute unit by practitioner tier. Current maximum payment amounts: 97151 assessment $30.49 at the independent-practitioner tier (COBA/BCBA/BCBA-D) and $22.67 at the BCaBA tier; 97153 direct treatment $16.04 (RBT tier); 97155 protocol modification $27.28 / $20.63; 97156 family training $30.09 / $22.37; group codes and 0362T/0373T ($33.54) have their own lines. MCO-contracted rates are negotiated, with the ODM schedule as the reference point. These amounts come from ODM\'s rule filing labeled "current maximum payment amount" — confirm the in-force appendix to 5160-34-02 when modeling revenue precisely.',
        ],
        cites: [
          { title: 'ODM — ABA rule package with Appendix A fee schedule', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
      },
      {
        h2: 'The OhioRISE carve-out myth',
        body: [
          'A recurring point of confusion in Ohio: OhioRISE — the Aetna-run specialty plan for youth with complex behavioral-health needs — does not cover ABA. ODM\'s Mixed Services Protocol states explicitly that claims for ABA services (97151–97158, 0362T, 0373T) for ASD are the responsibility of the member\'s Medicaid MCO or fee-for-service, even when the youth is enrolled in OhioRISE. If an intake team hears "we\'re on OhioRISE," the follow-up question is which MCO holds the medical benefit — that\'s who authorizes and pays for ABA.',
        ],
        cites: [
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Ohio layers no separate technician license or state registry on top of the BACB — behavior technicians are RBTs, so the BACB\'s own bar is the employee-level floor: applicants must be at least 18 with a high-school education, complete the 40-hour training and initial competency assessment, and pass both a criminal background check and an abuse-registry check no more than 180 days before applying (the BACB itself doesn\'t require fingerprinting). The pending rule rewrite (draft 5160-34-01) would formalize this — defining the RBT as a BACB-certified paraprofessional under close, ongoing supervision of a COBA, BCBA, or BCBA-D — and would add a 90-day "exam-eligible RBT" window: a technician who has finished the coursework and competency assessment could render supervised services for 90 days from exam eligibility, documented on form ODM 10391, then must be certified or stop rendering. As of the May 2025 clearance package that chapter was still marked draft and not yet filed — hire to the BACB requirements today and re-check when it files.',
          'Screening runs at two levels, and it pays to keep them straight. At the supervisor level, COBA applicants must complete a fingerprint-based BCI criminal-records check that includes an FBI check (OAC 4783-4-03) — the Board of Psychology accepts results only directly from BCI, won\'t issue the certificate without acceptable results, and the applicant bears the cost (the board doesn\'t currently publish COBA application fees in a retrievable form — confirm directly). At the organization level, OAC 5160-1-17.8 runs the database battery at enrollment and revalidation: the provider and every 5%-or-greater owner or managing agent are screened against the HHS-OIG exclusion list, SAM, the Medicare Exclusion Database, other states\' Medicaid termination lists, the ODH nurse aide registry, and the DODD abuser registry — a hit disqualifies the provider agreement (the appendix assigning ABA Provider Type 19\'s screening risk level wasn\'t retrievable; high-risk types add owner fingerprinting). One trap: Ohio\'s ARCS registry-check mandates (OAC 5123-2-02) bind DODD-system and waiver staff, not state-plan ABA — no Ohio rule mandates employee-level fingerprints for state-plan-only RBTs, so the BACB 180-day check plus mirroring the OIG/SAM exclusion checks on all staff is the operative standard.',
          'Supervision is where Ohio is unusual: OAC 4783-6-02 requires the COBA to build a written supervision plan into each client\'s treatment plan — naming every supervisee, their relationship to the client, and their responsibilities, with the amount and type of training and supervision specified — and mandates consultation before plan initiation and before any modification plus periodic direct observation, but sets no fixed ratio; frequency and intensity are the COBA\'s documented judgment, and client assessment, treatment-plan development, and efficacy review can never be delegated. The quantitative floor comes from the plans instead: Optum/UHC\'s Ohio Medicaid criteria (effective 7/1/2026) require 1–2 hours of direct case supervision per 10 hours of direct treatment per week, citing CASP standards, and CareSource\'s MM-0028 requires supervision records retained 5 years (COBAs) or 7 years (BCBAs/RBTs) after supervision ends — with claims tied to documentation discrepancies subject to recoupment. Staff to the strictest contracted plan, not the state rule.',
        ],
        cites: [
          { title: 'BACB — RBT Handbook (background-check and supervision requirements)', url: 'https://www.bacb.com/rbt-handbook' },
          { title: 'ODM — draft ABA rule package (5160-34-01/-02/-03 + fee appendix)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-4-03 (COBA criminal records check)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-03' },
          { title: 'Ohio Administrative Code — rule 5160-1-17.8 (provider screening)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-5160-1-17-8' },
          { title: 'Ohio Administrative Code — rule 5123-2-02 (DODD background investigations)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-5123-2-02' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
          { title: 'Optum/UHC Community Plan — Ohio Medicaid supplemental clinical criteria (eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — Ohio Medicaid ABA policy (MM-0028, eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
    ],
    collect: [
      { title: 'Member ID & Next Gen MCO', desc: 'CareSource, Buckeye, Molina, Anthem, UHC, AmeriHealth Caritas, or Humana — several run materially different ABA policies.' },
      { title: 'OhioRISE status + underlying MCO', desc: 'OhioRISE never pays ABA — identify the MCO that does.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'The comprehensive diagnostic evaluation, the licensed clinician who completed it, and the date — some MCOs restrict which specialties qualify.' },
      { title: 'Rendering practitioner tier', desc: 'COBA/BCBA vs. BCaBA vs. RBT determines the rate line — staffing is a revenue decision.' },
      { title: 'Review cadence', desc: 'Baseline and 6-month medical-necessity reviews — the intake baseline sets the terms.' },
    ],
    sources: [
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
      { title: 'ODM — ABA rule package + Appendix A fee schedule (draft filing)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'ODM — Provider Stakeholder Office Hours: ABA Proposed Rule Review (7/30/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
      { title: 'ODM — OhioRISE Mixed Services Protocol', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
      { title: 'Ohio Medicaid Managed Care Health Plan Comparison (2026) — confirms current 7-plan roster', url: 'https://ohfiles.blob.core.windows.net/public/OhioMHWebsite/Documents/Ohio%20Medicaid%20Managed%20Care%20Health%20Plan%20Comparison%202026.pdf' },
      { title: 'CareSource — Ohio Medicaid ABA policy (MM-0028, eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
      { title: 'CareSource — Ohio Medicaid ABA reimbursement policy (PY-1638, eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
      { title: 'BACB — RBT Handbook (background-check and supervision requirements)', url: 'https://www.bacb.com/rbt-handbook' },
      { title: 'Ohio Administrative Code — rule 4783-4-03 (COBA criminal records check)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-03' },
      { title: 'Ohio Administrative Code — rule 5160-1-17.8 (provider screening)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-5160-1-17-8' },
      { title: 'Ohio Administrative Code — rule 5123-2-02 (DODD background investigations)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-5123-2-02' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'Optum/UHC Community Plan — Ohio Medicaid supplemental clinical criteria (eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
      { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
      { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
      { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No age bound could be verified at the state level. OAC 5160-34-02 covers adaptive behavior services for the assessment and treatment of ASD without an age term we could read, and Ohio’s ABA benefit runs through the Next Generation MCOs, whose manuals frame under-21 services under EPSDT — Anthem’s Ohio Medicaid provider manual states that medically necessary services for members under 21 may exceed adult plan limits. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02; the member’s MCO for how it applies EPSDT to ABA.',
      },
      dxRecency: {
        value: 'Ohio’s state rule requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no recency window we could verify. In practice the recency rules in Ohio are plan-level and they differ sharply: CareSource requires a provider letter documenting DSM symptoms within the past year where the evaluation is more than 24 months old, while Buckeye accepts a comprehensive diagnostic evaluation conducted within the past five years. Screen against the member’s MCO, not the state rule. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the state rule; the member’s MCO policy for the operative window (MM-0028 for CareSource, CP.BH.104 for Buckeye).',
      },
      diagnosingProviders: {
        value: 'The ASD diagnosis must come from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria. Optum’s Ohio Medicaid supplemental criteria, which defer to the Ohio Administrative Code on practitioner requirements, restate the same bar: a valid ASD diagnosis issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such a diagnosis under DSM-5-TR. Several MCOs narrow it further — CareSource restricts the diagnosis to a child or adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      diagnosticTools: {
        value: 'The state rule names no diagnostic instrument — it requires DSM-5-TR criteria demonstrated through a comprehensive diagnostic evaluation and leaves instrument choice to the evaluator. Ohio’s instrument requirements are therefore plan-level: CareSource requires ADOS, ADI-R or CARS-2; Optum, for UnitedHealthcare Community Plan, requires at least one clinically validated screening tool plus one formal diagnostic tool (ADI-R, ADOS or ADOS-2, or DISCO). codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for whether the in-force rule names instruments; otherwise the member’s MCO ABA policy.',
      },
      referral: {
        value: 'No Medicaid-side referral or service-order requirement could be verified. Ohio’s ordering requirement — services prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a pediatric clinical nurse specialist or certified nurse practitioner — sits in the commercial insurance mandate at R.C. 3923.84, which governs insured plans, not Medicaid. Forward-looking and NOT law: ODM’s paused draft 5160-34-03 would require a diagnosing or referring practitioner independent of (not employed by) the ABA provider; that package is pre-filing with no JCARR filing, so it governs nothing today. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'ODM — Provider Stakeholder Office Hours: ABA Proposed Rule Review (7/30/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov or JCARR for the in-force rule; the member’s MCO PA packet for what it actually requires with the request.',
      },
      telehealth: {
        value: 'No per-code state telehealth rule for ABA could be verified. What is published at the plan level: Optum’s Ohio Medicaid criteria state that ABA is available through telehealth under guidelines effective June 2018, conditioned on the member having the basic and advanced prerequisite skills to benefit, a caregiver willing and able to support telehealth, and a thorough provider assessment of the environment and safety concerns — with the session note required to indicate when a service was delivered by telehealth. CareSource covers parent training and supervision by telehealth, and 1:1 ABA by telehealth only when medically necessary under a documented service-delivery plan. ODM’s own Telehealth Services guidance for managed care entities and the Telehealth Billing Guidelines set the underlying rules.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
        verifyVia: 'ODM Telehealth Services: Guidelines for Managed Care Entities and the ODM Telehealth Billing Guidelines, plus the member’s MCO — confirm which ABA codes are payable by telehealth and with which modifier.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Ohio is unusual in setting no fixed ratio at the state level. OAC 4783-6-02 requires the Certified Ohio Behavior Analyst to build a written supervision plan into each client’s treatment plan — naming every supervisee, their relationship to the client and their responsibilities, with the amount and type of training and supervision specified — and mandates consultation before plan initiation and before any modification plus periodic direct observation, while leaving frequency and intensity to the COBA’s documented judgment. Client assessment, treatment-plan development and efficacy review can never be delegated. The quantitative floors come from the plans instead: Optum’s Ohio Medicaid criteria (eff. 7/1/2026) require 1–2 hours of direct case supervision per 10 hours of direct treatment per week, citing CASP; Buckeye’s CP.BH.104 puts 97155 at a minimum of 2 hours a week or 10% of direct hours, whichever is greater, capped at 20% unless justified; and CareSource requires supervision records retained 5 years for COBAs or 7 years for BCBAs and RBTs. Staff to the strictest contracted plan, not the state rule.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and none of the Ohio Medicaid MCO policies we could read states one. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force rule; otherwise a written coding determination from the member’s MCO (CareSource UM (800) 488-0134, Buckeye UM (800) 224-1991).',
      },
      dailyLimits: {
        value: 'No state-level per-day unit ceiling could be verified; Ohio’s daily limits are plan-level and worth knowing individually. CareSource’s reimbursement policy PY-1638 applies the CMS MUE maxima — 97151 at 32, 97153 at 32, 97155 at 24 and 97156 at 16 daily units, among others — and caps behavioral assessments at roughly 6–10 hours per 6-month period without justification. Buckeye’s CP.BH.104 sets 6 hours a day and 30 hours a week as the ceiling absent detailed clinical justification, with under 20 hours a week expected for children attending school full-time. Anthem applies the CG-BEH-02 family parameters of up to 40 hours a week. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force state rule; the member’s MCO reimbursement policy for the operative daily maxima.',
      },
      noteSignature: {
        value: 'No state-level session-note signature rule could be verified. The plan-level standards are concrete: Optum’s Ohio Medicaid criteria require the clinician’s signature, date of signature and credentials on the service note, with the clinician credentialed to provide everything documented, evidence of clinical supervision where required, and an explicit indication when a service was delivered by telehealth; the initial individualized treatment plan must be signed and dated by the responsible staff member and the supervising clinician (or carry documentation of clinical supervision), and every review must be signed and dated by the staff member completing it and the supervising clinician. CareSource adds an anti-boilerplate rule — generic copy-pasted symptom language is not sufficient documentation — and, distinctively, requires treatment records to reach the plan before claims: claims are not accepted without accompanying treatment documentation. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force state rule; otherwise the member’s MCO documentation policy.',
      },
      placeOfService: {
        value: 'No state-level place-of-service rule for ABA could be verified. The boundary that is confirmed is the school one, from the managed-care side: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03, and Optum separately excludes ABA that is really a 1:1 aide delivered simultaneously during classroom instruction or a service covered under IDEA — while allowing school-based coordination, teacher training, meetings with school personnel and observation in the school setting. Buckeye adds an expectation of under 20 hours a week for children attending school full time. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force state rule; the member’s MCO for POS codes it will accept on ABA claims.',
      },
      billAsProvider: {
        value: 'Independent practitioners are Certified Ohio Behavior Analysts (COBA, under ORC Chapter 4783) or BACB BCBAs and BCBA-Ds, enrolled with ODM as Provider Type 19, Specialty 190; BCaBAs and RBTs work under supervision. Optum’s Ohio Medicaid criteria add the claim-level detail: COBA providers must be enrolled with Ohio Medicaid as Provider Type 19, Specialty Type 190 and hold a National Provider Identifier for both the rendering provider and the group provider, and a provider not enrolled with Medicaid needs a single case agreement. The routing rule that trips Ohio intake teams is separate and firm: OhioRISE does not pay for ABA — ODM’s Mixed Services Protocol assigns claims for 97151–97158, 0362T and 0373T to the member’s Medicaid MCO or fee-for-service even when the youth is enrolled in OhioRISE.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Ohio Medicaid cover ABA therapy?', a: 'Yes — as adaptive behavior services for ASD under OAC 5160-34-02, with prior authorization on all covered ABA codes and medical-necessity reviews at baseline and every six months.' },
      { q: 'Does OhioRISE cover ABA?', a: 'No — ODM\'s Mixed Services Protocol assigns ABA claims to the member\'s Medicaid MCO (or FFS) even for OhioRISE-enrolled youth. Always identify the underlying MCO.' },
      { q: 'What does Ohio Medicaid pay for ABA?', a: 'Per 15-minute unit by credential tier: 97153 at $16.04 (RBT), 97155 at $27.28 and 97151 at $30.49 at the COBA/BCBA tier, with lower BCaBA-tier amounts. MCO rates are contractual against this benchmark.' },
      { q: 'Who can provide ABA under Ohio Medicaid?', a: 'Independent practitioners are COBAs (Ohio Board of Psychology, ORC 4783) or BCBAs/BCBA-Ds enrolled as ODM Provider Type 19, Specialty 190; BCaBAs and RBTs deliver under supervision.' },
    ],
  },

  'caresource-ohio': {
    slug: 'caresource-ohio',
    family: 'caresource',
    cardDesc: 'The strictest OH policy: named diagnostician specialties, ADOS/ADI-R/CARS-2, docs-before-claims.',
    assessmentPA: 'Required — medical-necessity review on all ABA at baseline; assessments capped ~6–10 hrs per 6 months without justification',
    treatmentPA: 'Required — 6-month cycles; treatment records must reach CareSource BEFORE claims are accepted',
    dxRequired: 'Yes \u2014 ASD from a child/adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician (ADOS/ADI-R/CARS-2)',
    payer: 'CareSource Ohio',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · CareSource (OH)',
    h1: 'CareSource Ohio ABA coverage (Next Gen MCO).',
    metaTitle: 'CareSource Ohio Medicaid ABA Coverage & Prior Auth (MM-0028) | Carelu',
    metaDescription:
      'How CareSource administers Ohio Medicaid ABA under policy MM-0028 — restricted diagnostician specialties, required diagnostic instruments, MUE daily-unit limits, the documentation-before-claims rule, and 6-month reviews.',
    intro: [
      'CareSource is the dominant Ohio Medicaid plan in our data, and its ABA policy (MM-0028, current version effective 9/1/2026 — the prior 7/1/2025 version was archived 8/31/2026) is materially stricter than the state rule: it names which specialties may diagnose, which instruments count, and how many assessment hours are reasonable. As of the 9/1/2026 update, the MUE daily-unit table and the "no documentation, no payment" claims rule now live in a companion reimbursement policy, PY-1638 (same effective date) — the figures are unchanged, they just moved documents. If a family carries CareSource, these two policies are the gate.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO' },
      { label: 'Policy', value: 'OH MCD-MM-0028 (eff. 9/1/2026), citing MCG B-806-T; + companion reimbursement policy PY-1638 (eff. 9/1/2026)' },
      { label: 'Diagnostician', value: 'Child/adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician' },
      { label: 'Instruments', value: 'ADOS, ADI-R, or CARS-2; evals >24 months old need a symptom letter' },
      { label: 'Claims rule', value: 'Treatment records BEFORE claims — no docs, no payment' },
      { label: 'Discontinuation', value: 'No meaningful progress across two successive 6-month periods' },
      { label: 'Diagnosis recency', value: 'Eval >24 months old needs a current-symptoms letter' },
    ],
    sections: [
      {
        h2: 'The diagnosis bar — narrower than the state\'s',
        body: [
          'Where the state rule accepts any licensed clinician qualified to diagnose autism, MM-0028 restricts the diagnosis to a child/adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician, using a standardized instrument — ADOS, ADI-R, or CARS-2. If the evaluation is more than 24 months old, a provider letter documenting DSM symptoms within the past year is required. Screening referral packets against these names and instruments at intake prevents the most common CareSource denial.',
        ],
        cites: [
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      {
        h2: 'Authorization, units, and the docs-before-claims rule',
        body: [
          'All ABA services get medical-necessity review at baseline and every 6 months, with continuation requests documenting progress against baseline using the same measurement tools. Behavioral assessments should generally not exceed 6–10 hours per 6-month period without justification. The 9/1/2026 MM-0028 update adds two operational details: a continuation request filed after a temporary break in services (e.g., summer, vacation) must be filed as a continuation, not a new initial request; and progress notes now face more explicit anti-boilerplate requirements — generic, copy-pasted symptom language is no longer sufficient documentation.',
          'CareSource split its daily-unit and claims-documentation rules out of MM-0028 into a new companion reimbursement policy, PY-1638, effective the same day (9/1/2026) — the prior MM-0028 (eff. 7/1/2025) that carried these rules was archived 8/31/2026. The substance is unchanged, just relocated: daily units still follow the CMS MUE maxima — 97151 at 32, 97153 at 32, 97155 at 24, 97156 at 16 daily units, among others — and the operational standout survives verbatim: treatment records must be submitted to CareSource prior to claim submission — "claims will not be accepted without accompanying treatment documentation." UM runs at (800) 488-0134 via the CareSource Provider Portal.',
          'Other texture worth knowing: telehealth covers parent training and supervision, with 1:1 ABA via telehealth only when medically necessary under a documented service-delivery plan; and the discontinuation trigger is no meaningful progress across two successive 6-month authorization periods. One rule narrowed in PY-1638: CareSource will no longer reimburse H0036 for ABA whenever a designated ABA CPT code is usable — the older blanket acceptance of H0036 (CPST) billing from certified CBHCs in lieu of ABA CPT codes no longer holds.',
        ],
        cites: [
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — Ohio Medicaid prior authorization list', url: 'https://www.caresource.com/documents/ohio-medicaid-prior-authorization-list/' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnostician specialty + instrument', desc: 'Must be one of the four named specialties using ADOS, ADI-R, or CARS-2 — screen before submission.' },
      { title: 'Evaluation date', desc: '>24 months old triggers the symptom-documentation letter requirement.' },
      { title: 'Documentation pipeline', desc: 'Treatment records precede claims — build the handoff so billing never waits on notes.' },
      { title: 'Progress measurement plan', desc: 'Continuations must reuse baseline measurement tools — lock them in at the start.' },
    ],
    sources: [
      { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
      { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
      { title: 'CareSource — Ohio Medicaid prior authorization list', url: 'https://www.caresource.com/documents/ohio-medicaid-prior-authorization-list/' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dxRecency: {
        value: 'CareSource sets the clearest recency rule in Ohio: where the diagnostic evaluation is more than 24 months old, a provider letter documenting DSM symptoms within the past year is required. Continuation requests must document progress against baseline using the same measurement tools, and a request filed after a temporary break in services (summer, vacation) must be filed as a continuation, not a new initial request.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      diagnosingProviders: {
        value: 'Narrower than the state framework: MM-0028 restricts the ASD diagnosis to a child or adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician — where the state rule accepts any licensed clinician qualified to diagnose autism. Screening referral packets against those four specialties at intake prevents the most common CareSource denial.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      diagnosticTools: {
        value: 'MM-0028 requires the diagnosis to rest on a standardized instrument, and names three: ADOS, ADI-R, or CARS-2.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      referral: {
        value: 'No Medicaid-side referral or service-order requirement could be verified for this plan or for the state framework. Ohio’s ordering requirement — a psychologist trained in autism, a developmental pediatrician, or a pediatric clinical nurse specialist or certified nurse practitioner — lives in the commercial insurance mandate at R.C. 3923.84, not in Medicaid.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      telehealth: {
        value: 'Telehealth covers parent training and supervision. One-to-one ABA by telehealth is allowed only when medically necessary under a documented service-delivery plan.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework (OAC 4783-6-02: a written supervision plan in each client’s treatment plan, consultation before initiation and modification, periodic direct observation, no fixed ratio). CareSource’s own addition is on records: supervision records must be retained 5 years for COBAs or 7 years for BCBAs and RBTs after supervision ends, and claims tied to documentation discrepancies are subject to recoupment.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'CareSource publishes real per-day maxima, moved from MM-0028 into companion reimbursement policy PY-1638 effective 9/1/2026 with the figures unchanged: daily units follow the CMS MUE maxima — 97151 at 32, 97153 at 32, 97155 at 24 and 97156 at 16 daily units, among others. Behavioral assessments should generally not exceed 6–10 hours per 6-month period without justification, and all ABA carries medical-necessity review at baseline and every 6 months, with discontinuation triggered by no meaningful progress across two successive 6-month authorization periods.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
      },
      noteSignature: {
        value: 'The operational standout in Ohio: treatment records must be submitted to CareSource prior to claim submission — "claims will not be accepted without accompanying treatment documentation." MM-0028 adds explicit anti-boilerplate requirements on progress notes: generic, copy-pasted symptom language is no longer sufficient documentation.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      billAsProvider: {
        value: 'Follows the Ohio Medicaid framework (COBA or BACB BCBA/BCBA-D as the independent practitioner, ODM Provider Type 19 Specialty 190, BCaBAs and RBTs under supervision; OhioRISE never pays ABA). One rule narrowed in PY-1638: CareSource will no longer reimburse H0036 for ABA whenever a designated ABA CPT code is usable, so the older blanket acceptance of H0036 (CPST) billing from certified CBHCs in lieu of ABA CPT codes no longer holds.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does CareSource Ohio cover ABA therapy?', a: 'Yes — under policy MM-0028 (eff. 9/1/2026) plus its companion reimbursement policy PY-1638, with medical-necessity review on all ABA at baseline and every 6 months. Its requirements are stricter than the state rule on diagnostician specialty, instruments, and documentation.' },
      { q: 'Who can diagnose autism for CareSource Ohio ABA?', a: 'A child/adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician, using ADOS, ADI-R, or CARS-2 — narrower than the state baseline.' },
      { q: 'Why did CareSource reject our claim?', a: 'A distinctive rule, now sited in reimbursement policy PY-1638: treatment documentation must be submitted before claims. Claims without accompanying treatment records are not accepted — check the documentation pipeline first.' },
      { q: 'Does CareSource Ohio still accept H0036 in lieu of ABA CPT codes?', a: 'Not as a blanket rule anymore. As of PY-1638 (eff. 9/1/2026), CareSource will not reimburse H0036 for ABA when a designated ABA CPT code is usable — confirm which code applies before billing.' },
    ],
  },

  'buckeye-health-plan': {
    slug: 'buckeye-health-plan',
    family: 'centene',
    cardDesc: 'In-network assessments PA-free; CP.BH.104 hour parameters (6/day, 30/wk) and school rules.',
    assessmentPA: 'Not required in-network — 97151/97152 need PA for out-of-network only (plan form)',
    treatmentPA: 'Required — 97153–97158 via the Autism Services PA form with IDI/FBA, schedule, parent-training plan, IEP',
    dxRequired: 'Yes \u2014 autism diagnosis; CDE accepted within the past 5 years',
    payer: 'Buckeye Health Plan (OH)',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · Buckeye Health Plan',
    h1: 'Buckeye Health Plan ABA coverage (Next Gen MCO).',
    metaTitle: 'Buckeye Health Plan (Ohio Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Buckeye Health Plan administers Ohio Medicaid ABA — no PA on in-network assessments, Centene policy CP.BH.104 hour parameters, the Autism Services PA form package, and school-attendance expectations.',
    intro: [
      'Buckeye Health Plan (Centene) runs Ohio Medicaid ABA under Centene\'s corporate clinical policy CP.BH.104 — and offers the most intake-friendly front door of Ohio\'s stricter plans: in-network assessment codes 97151 and 97152 require no prior authorization (PA applies out-of-network only). The treatment side is where Centene\'s structure bites, with explicit hour parameters and a documentation package that rewards preparation.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO (Centene)' },
      { label: 'Policy', value: 'CP.BH.104 (rev. 2/2026) + CP.BH.105 documentation requirements' },
      { label: 'Assessment PA', value: 'None in-network; out-of-network only (97151, 97152)' },
      { label: 'Hour parameters', value: '≤6 hrs/day, ≤30 hrs/wk unless justified; <20 hrs/wk for full-time students' },
      { label: 'Supervision', value: '97155 ≥2 hrs/wk or 10% of direct hours; max 20% unless justified' },
      { label: 'Diagnosis window', value: 'CDE accepted within the past 5 years' },
      { label: 'Diagnosis recency', value: 'CDE accepted within the past 5 years' },
    ],
    sections: [
      {
        h2: 'The treatment-request package',
        body: [
          'Treatment PA (97153–97158) runs through Buckeye\'s Autism Services Prior Authorization Request Form, which wants the individual diagnostic interview or FBA, objective testing results, a description of coordination with other services, the proposed schedule with rendering provider type per session, a parent-training plan, and a copy of the IEP or IFSP. The form also requires an HSPP-or-physician attestation of active participation in the treatment plan. Requests fax to (866) 694-3649 (UM phone (800) 224-1991); retrospective dates aren\'t processed on the standard form and route to a separate fax. The pre-auth check tool on buckeyehealthplan.com answers code-level questions.',
        ],
        cites: [
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
      },
      {
        h2: 'Hour parameters and school expectations',
        body: [
          'CP.BH.104 sets the numbers: treatment should not exceed 6 hours/day and 30 hours/week without detailed clinical justification (severity or escalation criteria, with BCBA and guardian signatures), and the policy expects under 20 hours/week for children attending school full-time — comprehensive ABA is framed as 30–40 hours/week for the cases that warrant it. Protocol modification (97155) should run at least 2 hours/week or 10% of direct hours (whichever is greater), capped at 20% unless justified. The comprehensive diagnostic evaluation is accepted if conducted within the past five years.',
        ],
        cites: [
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Network status', desc: 'In-network assessments skip PA entirely — confirm contracting before promising the fast path.' },
      { title: 'School schedule', desc: 'Full-time students face the <20 hrs/week expectation — capture attendance honestly.' },
      { title: 'IEP / IFSP copy', desc: 'Required in the treatment package — request it at intake, not at submission.' },
      { title: 'Physician/HSPP engagement', desc: 'The attestation of active participation needs a named, willing clinician.' },
    ],
    sources: [
      { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
      { title: 'Buckeye — Autism Services PA Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
      { title: 'Buckeye — clinical & payment policies index', url: 'https://www.buckeyehealthplan.com/providers/resources/clinical-payment-policies.html' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dxRecency: {
        value: 'Buckeye accepts the comprehensive diagnostic evaluation if it was conducted within the past five years — the most generous window of the Ohio plans, and worth knowing against CareSource’s 24-month letter trigger.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Follows the Ohio Medicaid framework: the ASD diagnosis comes from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      referral: {
        value: 'No referral or service order is required, but the treatment package is prescriptive: treatment PA (97153–97158) runs through Buckeye’s Autism Services Prior Authorization Request Form, which wants the individual diagnostic interview or FBA, objective testing results, a description of coordination with other services, the proposed schedule with the rendering provider type per session, a parent-training plan, and a copy of the IEP or IFSP — plus an HSPP-or-physician attestation of active participation in the treatment plan. In-network assessment codes 97151 and 97152 need no prior authorization at all; PA applies out-of-network only.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found; ODM’s Telehealth Services guidance for managed care entities and the Telehealth Billing Guidelines set the underlying rules.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Buckeye publishes a numeric floor the state rule does not: protocol modification (97155) should run at least 2 hours a week or 10% of direct hours, whichever is greater, capped at 20% unless justified. The OAC 4783-6-02 COBA supervision-plan requirements still apply underneath.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'CP.BH.104 sets the numbers: treatment should not exceed 6 hours a day and 30 hours a week without detailed clinical justification — severity or escalation criteria, with BCBA and guardian signatures — and the policy expects under 20 hours a week for children attending school full time, with comprehensive ABA framed as 30–40 hours a week for the cases that warrant it.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      placeOfService: {
        value: 'CP.BH.104 ties intensity to school attendance rather than naming payable settings: under 20 hours a week is expected for children attending school full time, and the treatment package requires a copy of the IEP or IFSP. The Ohio Medicaid School Program boundary still applies — the MCO is not responsible for services provided through MSP.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Follows the Ohio Medicaid framework: independent practitioners are Certified Ohio Behavior Analysts (ORC Chapter 4783) or BACB BCBAs and BCBA-Ds enrolled with ODM as Provider Type 19, Specialty 190, with BCaBAs and RBTs delivering under supervision. The routing rule holds everywhere in Ohio: OhioRISE does not pay for ABA — ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Buckeye Health Plan cover ABA therapy?', a: 'Yes — under Centene\'s CP.BH.104 policy. In-network assessments (97151, 97152) need no prior authorization; treatment codes require PA via the Autism Services form.' },
      { q: 'What are Buckeye\'s ABA hour limits?', a: 'No more than 6 hours/day and 30 hours/week without detailed clinical justification, and under 20 hours/week expected for full-time students. Protocol modification runs 2 hrs/week or 10% of direct hours, capped at 20% unless justified.' },
      { q: 'How current must the autism diagnosis be for Buckeye?', a: 'The comprehensive diagnostic evaluation is accepted if conducted within the past 5 years.' },
    ],
  },

  'molina-healthcare-ohio': {
    slug: 'molina-healthcare-ohio',
    assessmentPA: 'Required per the plan’s PA list under the OAC 5160-34 framework; the code-level list is not publicly retrievable — confirm in Availity Essentials, the sole PA channel since 1/1/2026',
    treatmentPA: 'Required — submitted through Availity Essentials only; Molina discontinued fax PA submissions in Ohio effective 1/1/2026',
    family: 'molina',
    cardDesc: 'Tracks state ABA policy; Availity-only PA since 1/2026 — key documents best pulled via portal.',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
    payer: 'Molina Healthcare of Ohio',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · Molina (OH)',
    h1: 'Molina Healthcare of Ohio ABA coverage (Next Gen MCO).',
    metaTitle: 'Molina Healthcare of Ohio Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of Ohio administers Medicaid ABA — state-policy-aligned criteria, the January 2026 move to Availity-only prior authorization, and the contacts and checks worth confirming in the portal.',
    intro: [
      'Molina Healthcare of Ohio administers the Medicaid ABA benefit in line with the state framework — no distinct Molina ABA clinical policy has surfaced publicly — with the plan-specific story being workflow: effective January 1, 2026, Molina discontinued fax PA submissions in Ohio, making Availity Essentials the sole authorization channel. A sourcing note: Molina\'s site blocks automated access, so verify plan-level specifics in Availity or by phone rather than relying on cached summaries.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO' },
      { label: 'Clinical rules', value: 'State OAC 5160-34 framework — no distinct Molina ABA policy found' },
      { label: 'Prior auth', value: 'Required for ABA per the plan\'s PA list' },
      { label: 'Submission', value: 'Availity Essentials ONLY since 1/1/2026 (fax discontinued)' },
      { label: 'BH auth line', value: '(855) 322-4081 (confirm current number in the portal)' },
      { label: 'Rates', value: 'Contracted; ODM fee schedule is the benchmark' },
    ],
    sections: [
      {
        h2: 'How Molina runs ABA authorization',
        body: [
          'Clinically, expect the OAC 5160-34 baseline: PA on covered ABA codes, DSM-5-TR diagnosis via comprehensive evaluation, and 6-month medical-necessity reviews. Operationally, the January 2026 change matters most — all prior authorization requests go through Availity Essentials, with fax submissions no longer accepted in Ohio. Because Molina\'s public site is inaccessible to automated tools (and some cached numbers may be stale), confirm the current PA code list and behavioral-health contacts inside Availity or via the plan\'s provider line before building SOPs around them. The OhioRISE rule applies here as everywhere: ABA for an OhioRISE-enrolled Molina member still bills to Molina.',
        ],
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization information (access via portal; site blocks automated retrieval)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
      },
    ],
    collect: [
      { title: 'Availity access', desc: 'The only PA channel since January 2026 — make sure the team\'s registration and payer connection are live.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'Comprehensive evaluation per the state baseline.' },
      { title: 'Current PA code list', desc: 'Pull it from Availity each quarter — the public site can\'t be relied on for updates.' },
    ],
    sources: [
      { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      diagnosingProviders: {
        value: 'Follows the Ohio Medicaid framework: the ASD diagnosis comes from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      referral: {
        value: 'No referral or service order requirement is published, and Molina has no distinct Ohio ABA clinical policy — expect the OAC 5160-34 baseline. The plan-specific fact that matters is the channel: effective January 1, 2026 Molina discontinued fax prior-authorization submissions in Ohio, making Availity Essentials the sole authorization channel. Because Molina’s public site blocks automated access, confirm the current PA code list inside Availity rather than relying on cached summaries.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found; ODM’s Telehealth Services guidance for managed care entities and the Telehealth Billing Guidelines set the underlying rules.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework, which sets no fixed ratio: OAC 4783-6-02 requires the COBA to write a supervision plan into each client’s treatment plan, consult before plan initiation and modification, and observe directly on a periodic basis, with frequency left to documented clinical judgment and assessment, plan development and efficacy review non-delegable. No plan-specific numeric ratio was found for this MCO — note that other Ohio plans do publish one (Optum 1–2 hours per 10 direct hours weekly; Buckeye 97155 at 10–20% of direct hours).',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'No plan-specific per-day unit table found, and no state-level ceiling could be verified. Other Ohio MCOs publish real numbers (CareSource applies the CMS MUE maxima; Buckeye caps at 6 hours a day and 30 hours a week absent justification), so run the codes through this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      billAsProvider: {
        value: 'Follows the Ohio Medicaid framework: independent practitioners are Certified Ohio Behavior Analysts (ORC Chapter 4783) or BACB BCBAs and BCBA-Ds enrolled with ODM as Provider Type 19, Specialty 190, with BCaBAs and RBTs delivering under supervision. The routing rule holds everywhere in Ohio: OhioRISE does not pay for ABA — ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of Ohio cover ABA therapy?', a: 'Yes — under the Ohio Medicaid framework (OAC 5160-34), with prior authorization required on ABA services. No distinct Molina clinical policy layers on top.' },
      { q: 'How do I submit an ABA authorization to Molina Ohio?', a: 'Through Availity Essentials — Molina discontinued fax PA submissions in Ohio effective January 1, 2026.' },
    ],
  },

  'anthem-ohio-medicaid': {
    slug: 'anthem-ohio-medicaid',
    assessmentPA: 'Not published — the assessment-versus-treatment PA split is not stated for Ohio Medicaid; run the codes through the PA lookup tool at providers.anthem.com/oh per case and submit via Availity Essentials / Interactive Care Reviewer',
    family: 'anthem',
    cardDesc: 'CG-BEH-02 adopted on top of the state rule; Availity/ICR, EPSDT framing in the provider manual.',
    treatmentPA: 'Required — UM requests via Availity Essentials / Interactive Care Reviewer',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
    payer: 'Anthem BCBS Ohio (Medicaid)',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · Anthem (OH Medicaid)',
    h1: 'Anthem Ohio Medicaid ABA coverage (Next Gen MCO).',
    metaTitle: 'Anthem Ohio Medicaid ABA Coverage & Prior Auth (CG-BEH-02) | Carelu',
    metaDescription:
      'How Anthem administers Ohio Medicaid ABA — the adopted CG-BEH-02 adaptive behavioral treatment guideline on top of OAC 5160-34, Availity/ICR submission, and EPSDT framing for under-21 members.',
    intro: [
      'Anthem Blue Cross and Blue Shield administers Ohio Medicaid ABA by adopting its corporate Clinical UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment) on top of the state rule — the same guideline family it applies in Georgia and elsewhere, bringing hour parameters and supervision ratios the state rule doesn\'t specify. The provider manual frames ASD services for under-21 members squarely under EPSDT: medically necessary services can exceed adult plan limits.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO' },
      { label: 'Clinical rules', value: 'CG-BEH-02 adopted (per the plan\'s Clinical UM Guidelines list)' },
      { label: 'Prior auth', value: 'Via Availity Essentials / Interactive Care Reviewer' },
      { label: 'Hour parameters', value: 'CG-BEH-02 family: ≤40 hrs/wk; ~2 hrs protocol modification per 10 direct' },
      { label: 'EPSDT', value: 'Under-21 services may exceed adult limits when medically necessary' },
      { label: 'OhioRISE', value: 'Inpatient psych routes to OhioRISE — ABA stays with Anthem' },
    ],
    sections: [
      {
        h2: 'How Anthem administers the benefit',
        body: [
          'Anthem\'s Ohio Medicaid Clinical UM Guidelines list confirms CG-BEH-02 (and CG-BEH-15 for activity therapy) as the adopted criteria for adaptive behavioral treatment, layered on the OAC 5160-34 baseline. The CG-BEH-02 family of guidelines carries the familiar Anthem parameters — total requested treatment at or under 40 hours/week, protocol modification around 2 hours per 10 direct hours — though the Ohio-specific published delta is thinner than at CareSource or Buckeye, so verify current hour rules in the guideline text or the PA lookup tool at providers.anthem.com/oh before finalizing a request. UM submissions run through Availity Essentials\' Interactive Care Reviewer, per the October 2025 provider manual, which also confirms the EPSDT framing and that under-21 inpatient psychiatric care routes to OhioRISE while ABA remains Anthem\'s responsibility.',
        ],
        cites: [
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'PA lookup check', desc: 'The assessment-vs-treatment PA split isn\'t published — run the codes through the lookup tool per case.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'Comprehensive evaluation per the state baseline.' },
      { title: 'Requested hours + justification', desc: 'CG-BEH-02\'s hour parameters reward requests framed against severity and history.' },
      { title: 'OhioRISE status', desc: 'Psychiatric services may route to OhioRISE, but ABA bills to Anthem — keep the paths straight.' },
    ],
    sources: [
      { title: 'Anthem OH Medicaid — Clinical UM Guidelines list', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
      { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No state-level age bound could be verified, but Anthem’s Ohio Medicaid provider manual (10/2025) frames ASD services for members under 21 squarely under EPSDT: medically necessary services can exceed adult plan limits. Under-21 inpatient psychiatric care routes to OhioRISE while ABA remains Anthem’s responsibility.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      diagnosingProviders: {
        value: 'Follows the Ohio Medicaid framework: the ASD diagnosis comes from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      referral: {
        value: 'No referral or service order requirement is published on the Medicaid side. Anthem adopts Clinical UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment), with CG-BEH-15 for activity therapy, on top of the OAC 5160-34 baseline, and utilization-management requests run through Availity Essentials’ Interactive Care Reviewer. The assessment-versus-treatment PA split is not published — run the codes through the PA lookup tool at providers.anthem.com/oh per case.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found; ODM’s Telehealth Services guidance for managed care entities and the Telehealth Billing Guidelines set the underlying rules.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework (OAC 4783-6-02 COBA supervision plan, consultation before initiation and modification, periodic direct observation, no fixed ratio), with the CG-BEH-02 family’s parameter of roughly 2 hours of protocol modification per 10 direct hours layered on. Confirm the current guideline text before relying on the ratio.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'Anthem applies the CG-BEH-02 family parameters on top of the state framework: total requested treatment at or under 40 hours a week, with protocol modification around 2 hours per 10 direct hours. The Ohio-specific published delta is thinner than at CareSource or Buckeye, so verify the current hour rules in the guideline text or the PA lookup tool at providers.anthem.com/oh before finalising a request.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
        ],
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      billAsProvider: {
        value: 'Follows the Ohio Medicaid framework: independent practitioners are Certified Ohio Behavior Analysts (ORC Chapter 4783) or BACB BCBAs and BCBA-Ds enrolled with ODM as Provider Type 19, Specialty 190, with BCaBAs and RBTs delivering under supervision. The routing rule holds everywhere in Ohio: OhioRISE does not pay for ABA — ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Anthem Ohio Medicaid cover ABA therapy?', a: 'Yes — under its adopted CG-BEH-02 adaptive behavioral treatment guideline on top of OAC 5160-34, submitted via Availity\'s Interactive Care Reviewer, with EPSDT protections for under-21 members.' },
      { q: 'Does OhioRISE change anything for Anthem ABA members?', a: 'Inpatient psychiatric care for under-21s routes to OhioRISE, but ABA always stays with Anthem (per ODM\'s mixed-services protocol) — bill the MCO, not OhioRISE.' },
    ],
  },

  'unitedhealthcare-community-plan-ohio': {
    slug: 'unitedhealthcare-community-plan-ohio',
    family: 'unitedhealthcare',
    cardDesc: 'Optum\'s OH supplemental criteria: 80% utilization trigger, tool lists, Provider Type 19 detail.',
    assessmentPA: 'Per the state rule — Optum\'s OH criteria defer to OAC for practitioner and PA requirements',
    treatmentPA: 'Required — reviews per auth period; utilization below 80% over 2 weeks triggers barrier documentation',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD with a validated screener AND a formal tool (ADOS/ADI-R/DISCO)',
    payer: 'UnitedHealthcare Community Plan of Ohio',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · UHC Community Plan (OH)',
    h1: 'UnitedHealthcare Community Plan of Ohio ABA coverage (Next Gen MCO).',
    metaTitle: 'UHC Community Plan Ohio Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers Ohio Medicaid ABA — Optum\'s Ohio supplemental clinical criteria, the 80% utilization review trigger, diagnostic tool requirements, and Provider Type 19 credentialing.',
    intro: [
      'UnitedHealthcare Community Plan of Ohio runs ABA through Optum Behavioral Health under a dedicated Ohio Medicaid supplemental clinical criteria document (effective July 2026) — which defers to the Ohio Administrative Code on eligibility and PA structure while adding Optum\'s own UM texture: a utilization trigger at 80% of authorized hours, explicit diagnostic-tool requirements, and supervision expectations. Operationally, everything lives on Provider Express.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO (BH via Optum)' },
      { label: 'Clinical rules', value: 'Optum OH supplemental criteria (BH803OH012026.E) over the OAC baseline' },
      { label: 'Diagnosis', value: 'DSM-5-TR + ≥1 validated screener AND ≥1 formal tool (ADOS, ADI-R, DISCO)' },
      { label: 'Utilization trigger', value: '<80% of authorized hours over 2 weeks → barrier documentation' },
      { label: 'Supervision', value: '1–2 hrs case supervision per 10 direct-treatment hours weekly' },
      { label: 'Portal', value: 'Provider Express — Ohio Medicaid ABA Program page' },
    ],
    sections: [
      {
        h2: 'What Optum\'s Ohio criteria add',
        body: [
          'The supplemental criteria require a DSM-5-TR diagnosis from a state-licensed physician, psychologist, or qualified clinician using at least one validated screening tool plus one formal diagnostic instrument (ADOS, ADI-R, or DISCO). There\'s no numeric hour cap — requested hours must be justified by impairment, severity, and history — but continued-treatment reviews specifically scrutinize utilization below 80% of authorized hours over any two-week period, requiring documented barriers. Direct case supervision follows the CASP-based expectation of 1–2 hours per 10 hours of direct treatment weekly. Telehealth is available for ABA with member prerequisite-skill and caregiver-support conditions. Non-Medicaid-enrolled providers need a single case agreement.',
          'Credentialing is unusually explicit: COBA providers enroll with Ohio Medicaid as Provider Type 19, Specialty 190, with NPIs for both rendering and group, then join the Optum network via the Provider Express Ohio Medicaid ABA Program page.',
        ],
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Diagnosis + both tools', desc: 'A validated screener and a formal instrument (ADOS/ADI-R/DISCO) — confirm both exist before the request.' },
      { title: 'Realistic availability', desc: 'The 80%-utilization trigger makes honest scheduling a review-survival issue.' },
      { title: 'Optum + ODM enrollment', desc: 'Provider Type 19/Specialty 190 with rendering and group NPIs, plus Optum network status.' },
      { title: 'Caregiver capacity', desc: 'Telehealth eligibility and treatment design both hinge on documented caregiver support.' },
    ],
    sources: [
      { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dxRecency: {
        value: 'No recency requirement on the ASD diagnosis itself. The clocks run on review: inadequate or no demonstrable progress within a 6-month period, or goals unmet within the estimated timeframes, triggers assessment of the reasons and modification of interventions — and continued-service review specifically addresses utilization of prior-authorization-period hours below 80% over a 2-week period, which requires documented barriers and a plan to address them.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Optum’s Ohio Medicaid supplemental criteria (eff. 7/1/2026) defer to the Ohio Administrative Code on practitioner requirements and restate the bar: a valid diagnosis of ASD, or other applicable diagnosis as required by governing laws, must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such a diagnosis according to DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Stricter than the state framework, and the strictest instrument rule of the Ohio plans: the DSM-5 diagnosis and severity level must be confirmed and documented by the diagnosing clinician using at least one clinically validated screening tool AND one formal diagnostic tool. Named first-level screeners include the Autism Behavior Checklist, CHAT / M-CHAT, CSBS-DP-IT Checklist, Autism Screening Questionnaire, Autism Quotient and Childhood Autism Screening Test; second-level screeners include CARS and CARS-2, RITA-T and STAT; formal diagnostic tools are ADI-R, ADOS and ADOS-2, and DISCO. Treatment intensity must then be set from a baseline measured with a validated tool from a named list including ATEC, VB-MAPP, ABLLS and ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland and CFQL-2.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      referral: {
        value: 'Optum’s Ohio criteria defer to the Ohio Administrative Code for the list of eligible practitioners and prior-authorization requirements, and add no separate referral or physician order. A provider not enrolled with Ohio Medicaid needs a single case agreement before serving members. Everything runs through Provider Express and the Ohio Medicaid ABA Program page.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      telehealth: {
        value: 'ABA is available through telehealth under the guidelines effective June 2018, with three conditions Optum states explicitly: the member needs certain basic and advanced prerequisite skills to benefit from telehealth, the caregiver must be willing and able to support it, and the provider must complete a thorough assessment of the environment and address any safety concerns. The service note must indicate when a service was provided via telehealth. Optum points providers to the CASP telehealth practice parameters for additional guidance.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards of care, direct case supervision is required at 1–2 hours for every 10 hours of direct treatment per week. Technicians must be under the applicable supervision of a BCBA or licensed behavioral health clinician and should be RBTs or another appropriately certified behavior technician as allowable by state mandate; Optum notes it is not recommended that parents serve in an RBT role. The OAC 4783-6-02 COBA supervision-plan requirements apply underneath.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'No numeric hour cap — the number of service hours requested must be justified by the member’s documented clinical need against level of impairment, symptom severity, treatment history and response. The operative review trigger runs the other way: utilization below 80% of authorized hours over any two-week period is scrutinised at continued-service review and requires documented barriers, which makes honest scheduling a review-survival issue.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      noteSignature: {
        value: 'Optum sets a concrete standard: the service note carries the clinician’s signature, date of signature and credentials, with the clinician credentialed to provide everything documented, plus evidence of clinical supervision as required and an explicit indication when a service was provided via telehealth. Documentation may be narrative or structured (checklists) provided all required elements are captured. The initial individualized treatment plan must be signed and dated by the responsible staff member and the supervising clinician, or carry documentation of clinical supervision, and every review must be signed and dated by the staff member completing it and the supervising clinician. A termination treatment summary is due within 30 days after a client is determined inactive.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA therapy, such as a 1:1 aide delivered simultaneously during classroom instruction, or services covered under IDEA. School-based ABA does allow coordination of services and covers teacher training, meetings with school personnel and observations in the school setting, and the treatment plan is expected to coordinate with the school and any IFSP or IEP. Separately, the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03. Generalization into natural settings such as home and community forms part of the continued-service test.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Certified Ohio Behavior Analyst providers must be enrolled with Ohio Medicaid as Provider Type 19, Specialty Type 190 and hold a National Provider Identifier for both the rendering provider and the group provider, then join the Optum network through the Provider Express Ohio Medicaid ABA Program page. A provider not enrolled with Medicaid needs a single case agreement. Once an ASD diagnosis is confirmed the credentialed ABA provider is a master’s- or doctoral-level BCBA, or a licensed behavioral health clinician credentialed for ABA, with BCaBAs and non-licensed technicians working under that person’s direct supervision. OhioRISE never pays ABA — the claim goes to UnitedHealthcare Community Plan.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Ohio cover ABA?', a: 'Yes — through Optum under Ohio-specific supplemental clinical criteria that defer to the OAC on eligibility and PA while adding Optum\'s UM requirements (diagnostic tools, supervision ratios, the 80% utilization trigger).' },
      { q: 'What happens if a family uses fewer hours than authorized?', a: 'Utilization below 80% of authorized hours over a two-week period triggers scrutiny at continued-treatment review, with barrier documentation required — request hours the family can actually attend.' },
      { q: 'How do I credential for UHC Ohio ABA?', a: 'Enroll with Ohio Medicaid as Provider Type 19, Specialty 190 (rendering + group NPIs), then join the Optum network via Provider Express\'s Ohio Medicaid ABA Program page.' },
    ],
  },

  'amerihealth-caritas-ohio': {
    slug: 'amerihealth-caritas-ohio',
    assessmentPA: 'Required before ABA begins, per the state framework; code-level detail is not publicly retrievable — pull the current behavioral-health PA guidance from NaviNet',
    treatmentPA: 'Required — 6-month authorization periods, requested through the Jiva UM system via NaviNet; UM at (833) 735-7700, with initial decisions commonly reported at 10–14 business days',
    family: 'amerihealth',
    cardDesc: 'State-rule-driven UM; NaviNet/Jiva workflow — thinnest public ABA paper trail of the OH plans.',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
    payer: 'AmeriHealth Caritas Ohio',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · AmeriHealth Caritas (OH)',
    h1: 'AmeriHealth Caritas Ohio ABA coverage (Next Gen MCO).',
    metaTitle: 'AmeriHealth Caritas Ohio Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How AmeriHealth Caritas Ohio administers Medicaid ABA — state-rule-driven criteria, the NaviNet/Jiva authorization workflow, UM contacts, and what to verify directly in the portal.',
    intro: [
      'AmeriHealth Caritas Ohio — the newest of Ohio\'s Next Generation plans — publishes no distinct ABA clinical policy, so expect utilization management driven by the state rule (OAC 5160-34). Like its North Carolina sibling, the plan\'s site blocks automated access, which makes its portal the source of truth: this guide covers the verified structure and flags what to confirm directly.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO (newest entrant)' },
      { label: 'Clinical rules', value: 'State OAC 5160-34 framework — no distinct plan policy found' },
      { label: 'Prior auth', value: 'Required before ABA begins; 6-month auth periods' },
      { label: 'UM contact', value: '(833) 735-7700' },
      { label: 'Portal', value: 'Jiva via NaviNet' },
      { label: 'Decision time', value: 'Initial authorizations reported at 10–14 business days' },
    ],
    sections: [
      {
        h2: 'How AmeriHealth Caritas runs ABA authorization',
        body: [
          'The clinical baseline is the state rule: PA on ABA services, DSM-5-TR diagnosis via comprehensive evaluation, 6-month review cycles. Authorization requests flow through the Jiva UM system via NaviNet, with UM at (833) 735-7700 and initial authorization decisions commonly reported at 10–14 business days — a timeline to set family expectations against. Approved intensities in the 10–40 hours/week range track clinical necessity per the state framework. Because the plan\'s public documents can\'t be pulled programmatically, download the current behavioral-health PA guidance from the portal and re-check it quarterly; the OhioRISE rule applies as everywhere — ABA bills to AmeriHealth Caritas, never to OhioRISE.',
        ],
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization (access via portal; site blocks automated retrieval)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
      },
    ],
    collect: [
      { title: 'NaviNet/Jiva access', desc: 'The working authorization channel — confirm registration before the first case.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'Comprehensive evaluation per the state baseline.' },
      { title: 'Timeline expectations', desc: '10–14 business days for initial decisions — communicate it to families up front.' },
    ],
    sources: [
      { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      diagnosingProviders: {
        value: 'Follows the Ohio Medicaid framework: the ASD diagnosis comes from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      referral: {
        value: 'No referral or service order requirement is published, and AmeriHealth Caritas Ohio publishes no distinct ABA clinical policy — expect utilization management driven by the OAC 5160-34 framework. Authorization requests flow through the Jiva UM system via NaviNet, with UM at (833) 735-7700; initial authorization decisions are commonly reported at 10–14 business days and authorization periods run 6 months. Because the plan’s public documents cannot be pulled programmatically, download the current behavioral-health PA guidance from the portal and re-check it quarterly.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found; ODM’s Telehealth Services guidance for managed care entities and the Telehealth Billing Guidelines set the underlying rules.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework, which sets no fixed ratio: OAC 4783-6-02 requires the COBA to write a supervision plan into each client’s treatment plan, consult before plan initiation and modification, and observe directly on a periodic basis, with frequency left to documented clinical judgment and assessment, plan development and efficacy review non-delegable. No plan-specific numeric ratio was found for this MCO — note that other Ohio plans do publish one (Optum 1–2 hours per 10 direct hours weekly; Buckeye 97155 at 10–20% of direct hours).',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'No plan-specific per-day unit table found, and no state-level ceiling could be verified. Other Ohio MCOs publish real numbers (CareSource applies the CMS MUE maxima; Buckeye caps at 6 hours a day and 30 hours a week absent justification), so run the codes through this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      billAsProvider: {
        value: 'Follows the Ohio Medicaid framework: independent practitioners are Certified Ohio Behavior Analysts (ORC Chapter 4783) or BACB BCBAs and BCBA-Ds enrolled with ODM as Provider Type 19, Specialty 190, with BCaBAs and RBTs delivering under supervision. The routing rule holds everywhere in Ohio: OhioRISE does not pay for ABA — ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas Ohio cover ABA therapy?', a: 'Yes — under the Ohio Medicaid framework, with prior authorization before services begin and 6-month authorization periods, managed through Jiva via NaviNet.' },
      { q: 'How long do AmeriHealth Caritas Ohio ABA authorizations take?', a: 'Initial decisions are commonly reported at 10–14 business days — plan family communication accordingly.' },
    ],
  },

  'humana-healthy-horizons-ohio': {
    slug: 'humana-healthy-horizons-ohio',
    family: 'humana',
    cardDesc: 'Cleanest all-codes PA statement in Ohio; state-policy criteria plus Availity logistics.',
    assessmentPA: 'Required — the PA list covers every ABA code (97151–97158, 0362T, 0373T), assessments included',
    treatmentPA: 'Required — same list; unauthorized services face retrospective review and financial penalties',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
    payer: 'Humana Healthy Horizons in Ohio',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · Humana Healthy Horizons (OH)',
    h1: 'Humana Healthy Horizons in Ohio ABA coverage (Next Gen MCO).',
    metaTitle: 'Humana Healthy Horizons Ohio Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Humana Healthy Horizons administers Ohio Medicaid ABA — prior authorization on every ABA code per its PA list, in-house behavioral UM, Availity submission, and the retrospective-review penalty for skipping PA.',
    intro: [
      'Humana Healthy Horizons in Ohio administers ABA on the state clinical framework with the cleanest all-codes PA statement of the seven plans: its prior-authorization list (effective January 2026) names every ABA code — 97151 through 97158, 0362T, and 0373T — with no assessment exemption. There\'s no distinct Humana clinical policy layered on top; what the plan adds is in-house behavioral UM, Availity logistics, and a sharp consequence for skipping the process.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO' },
      { label: 'Clinical rules', value: 'State OAC 5160-34 framework — no distinct plan ABA policy' },
      { label: 'Prior auth', value: 'Every ABA code on the PA list (eff. 1/1/2026), assessments included' },
      { label: 'Skip-PA consequence', value: 'Retrospective medical-necessity review + financial penalties' },
      { label: 'Submission', value: 'Availity Essentials; provider line (877) 856-5707' },
      { label: 'UM', value: 'In-house Humana behavioral health' },
    ],
    sections: [
      {
        h2: 'How Humana runs ABA authorization',
        body: [
          'The PA and notification list is unambiguous: "Applied behavioral analysis (ABA) therapy" covers 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T, and 0373T — so unlike Buckeye (or the DMAS-style structures elsewhere), the assessment itself needs authorization before the first appointment, and intake should sequence accordingly. Services rendered without PA are subject to retrospective medical-necessity review and financial penalties, which converts a skipped authorization into a revenue write-off risk. Submissions run through Availity Essentials (registration at 800-AVAILITY), with the Ohio provider line at (877) 856-5707. Clinical criteria follow the state framework — DSM-5-TR diagnosis, 6-month reviews — and the OhioRISE rule holds: ABA bills to Humana, never to OhioRISE.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
      },
    ],
    collect: [
      { title: 'Assessment PA first', desc: 'Unlike some plans, the assessment needs authorization — build it into the intake sequence.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'Comprehensive evaluation per the state baseline.' },
      { title: 'Authorization before service', desc: 'The retrospective-review penalty makes "start now, authorize later" a losing bet.' },
    ],
    sources: [
      { title: 'Humana Healthy Horizons OH — PA and notification list', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
      { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      diagnosingProviders: {
        value: 'Follows the Ohio Medicaid framework: the ASD diagnosis comes from a documented comprehensive diagnostic evaluation by a licensed physician, psychologist, or other clinician qualified to diagnose autism, demonstrating DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      referral: {
        value: 'No referral or service order requirement is published, and Humana layers no distinct ABA clinical policy on the state framework. What it does publish is the cleanest all-codes prior-authorization statement in Ohio: the PA and notification list effective January 1, 2026 puts "Applied behavioral analysis (ABA) therapy" against 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, with no assessment exemption — so the assessment itself needs authorization before the first appointment. Services rendered without PA are subject to retrospective medical-necessity review and financial penalties. Submissions run through Availity Essentials; the Ohio provider line is (877) 856-5707.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found; ODM’s Telehealth Services guidance for managed care entities and the Telehealth Billing Guidelines set the underlying rules.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework, which sets no fixed ratio: OAC 4783-6-02 requires the COBA to write a supervision plan into each client’s treatment plan, consult before plan initiation and modification, and observe directly on a periodic basis, with frequency left to documented clinical judgment and assessment, plan development and efficacy review non-delegable. No plan-specific numeric ratio was found for this MCO — note that other Ohio plans do publish one (Optum 1–2 hours per 10 direct hours weekly; Buckeye 97155 at 10–20% of direct hours).',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      dailyLimits: {
        value: 'No plan-specific per-day unit table found, and no state-level ceiling could be verified. Other Ohio MCOs publish real numbers (CareSource applies the CMS MUE maxima; Buckeye caps at 6 hours a day and 30 hours a week absent justification), so run the codes through this plan’s portal rather than assuming. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov refused connection on every attempt this cycle and the 5160-34 chapter is still missing from the Title 5160 index, so the in-force rule text could not be read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Note also that ODM’s rewritten 5160-34 package is paused and pre-filing, not adopted, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
      },
      billAsProvider: {
        value: 'Follows the Ohio Medicaid framework: independent practitioners are Certified Ohio Behavior Analysts (ORC Chapter 4783) or BACB BCBAs and BCBA-Ds enrolled with ODM as Provider Type 19, Specialty 190, with BCaBAs and RBTs delivering under supervision. The routing rule holds everywhere in Ohio: OhioRISE does not pay for ABA — ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 5160-34-02', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-34-02' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in Ohio cover ABA?', a: 'Yes — on the state clinical framework, with prior authorization required on every ABA code including assessments, submitted via Availity Essentials.' },
      { q: 'What happens if we deliver ABA without a Humana authorization?', a: 'The service is subject to retrospective medical-necessity review and financial penalties — treat authorization-before-service as non-negotiable.' },
    ],
  },

  'aetna-ohio': {
    slug: 'aetna-ohio',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Ohio R.C. § 3923.84 mandate layer.',
    assessmentPA: 'Required — precertification (form GR-69017-4), per Aetna\'s national CPB 0554 policy',
    treatmentPA: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
    dxRequired: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
    payer: 'Aetna in Ohio',
    state: 'OH', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Ohio',
    h1: 'Aetna ABA coverage in Ohio: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Ohio: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Ohio families — the national clinical policy, prior authorization, the Ohio R.C. § 3923.84 mandate (ages, caps, exemptions), Ohio behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Ohio, a Aetna card means three layers at once: the carrier\'s national clinical policy, Ohio\'s autism insurance mandate (Ohio R.C. § 3923.84), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Ohio R.C. § 3923.84' },
      { label: 'Mandate age', value: 'Service floors apply under age 14' },
      { label: 'Mandate caps', value: 'Floors, not caps: ≥20 hrs/wk ABA-inclusive intervention' },
      { label: 'Exempt from mandate', value: 'Limited-benefit policy types; self-funded ERISA' },
      { label: 'Licensure', value: 'Certified Ohio Behavior Analyst (COBA, Board of Psychology)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Ohio',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Ohio is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Ohio.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Ohio mandate: what it guarantees (and doesn\'t)',
        body: [
          'Ohio’s mandate (HB 463, 2017; R.C. 3923.84, with § 1751.84 for HMOs) sets service floors for insureds under age 14 rather than caps: at least 20 hours/week of “clinical therapeutic intervention” — explicitly defined to include applied behavior analysis — plus 20 visits/year each for speech and OT and 30 outpatient mental-health visits/year. Mandated ABA must be provided by or under the supervision of a Certified Ohio Behavior Analyst (or licensed psychologist/counselor/social worker/MFT), and since a March 2025 amendment, clinical nurse specialists and certified nurse practitioners can also prescribe or order ASD services. Dollar limits and cost-sharing can’t be less favorable than substantially all medical/surgical benefits; self-funded ERISA plans are exempt by preemption, and carriers in practice authorize on medical necessity rather than the statutory hour counts.',
        ],
        cites: [
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
      },
      {
        h2: 'No Ohio-specific Aetna policy exists',
        body: [
          'We checked: Aetna publishes no Ohio-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Ohio-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      {
        h2: 'Licensure & rates in Ohio',
        body: [
          'Ohio’s COBA certificate (ORC Chapter 4783, Ohio Board of Psychology, with a direct BCBA pathway) is baked into the mandate itself — R.C. 3923.84 conditions mandated ABA on COBA-supervised delivery — so COBA status is a commercial coverage requirement in Ohio, not just a Medicaid credentialing detail. On rates: Aetna does not publish commercial ABA fee schedules for Ohio (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
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
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no coverage age cap. The ABA medical necessity guide describes typical rather than limiting parameters: comprehensive ABA at 10–25 hours a week is typical for ages 0–7 over 1–2 years, while focused ABA at 1–20 hours a week is listed for all ages over 1–4 years. Where the member’s benefit plan or a state mandate carries an age term, that governs. Ohio sets a floor rather than a cap: R.C. 3923.84 requires at least 20 hours a week of clinical therapeutic intervention for an insured under age fourteen and says the section "shall not be construed as limiting benefits that are otherwise available." Non-grandfathered individual and small-group plans and limited-benefit policies are carved out by name, and self-funded ERISA plans are exempt by preemption.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
        verifyVia: 'Live benefits verification on the member ID — establish fully insured vs. self-funded ERISA, then the plan’s own age and benefit terms.',
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
        value: 'Aetna’s national ABA policies require no physician referral, order or prescription — the only prescription requirement in the medical necessity guide sits in its Maryland exhibit under COMAR 31.10.39, which does not reach OH. What Aetna requires nationally is precertification: its participating-provider behavioral health precertification list names all ten ABA codes — 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T — and ABA precertification runs on form GR-69017-4 through Availity or the number on the member ID card. For a fully insured Ohio plan the state mandate adds an ordering requirement the carrier policies do not: R.C. 3923.84 makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specialising in pediatric health. Prior authorization is written into the mandate as the other condition of coverage. Non-grandfathered individual and small-group plans are carved out, and self-funded ERISA plans sit outside state insurance law.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
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
      },
      dailyLimits: {
        value: 'Aetna publishes no per-day or per-week unit ceiling for ABA. Authorized hours are set from documented symptom severity using the medical necessity guide’s severity assessment, against typical intensities of 10–25 hours a week for comprehensive and 1–20 hours a week for focused programmes — typical, not cap. Progress is evaluated every six months and coverage ends on the guide’s improvement thresholds. Ohio sets a floor rather than a cap: R.C. 3923.84 requires at least 20 hours a week of clinical therapeutic intervention for an insured under age fourteen and says the section "shall not be construed as limiting benefits that are otherwise available." Non-grandfathered individual and small-group plans and limited-benefit policies are carved out by name, and self-funded ERISA plans are exempt by preemption.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
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
      { q: 'Does Aetna cover ABA therapy in Ohio?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Ohio\'s mandate (Ohio R.C. § 3923.84) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Ohio autism mandate require?', a: 'Ohio’s mandate (HB 463, 2017; R.C. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Ohio?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Ohio Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-ohio': {
    slug: 'cigna-ohio',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the Ohio R.C. § 3923.84 mandate layer.',
    assessmentPA: 'Not required for assessment codes 97151, 97152, 0362T (per national policy EN0499)',
    treatmentPA: 'Required — assessment + treatment plan with the ABA PA form (EN0499)',
    dxRequired: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499',
    payer: 'Cigna / Evernorth in Ohio',
    state: 'OH', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Ohio',
    h1: 'Cigna / Evernorth ABA coverage in Ohio: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Ohio: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Ohio families — the national clinical policy, prior authorization, the Ohio R.C. § 3923.84 mandate (ages, caps, exemptions), Ohio behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Ohio, a Cigna card means three layers at once: the carrier\'s national clinical policy, Ohio\'s autism insurance mandate (Ohio R.C. § 3923.84), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Ohio R.C. § 3923.84' },
      { label: 'Mandate age', value: 'Service floors apply under age 14' },
      { label: 'Mandate caps', value: 'Floors, not caps: ≥20 hrs/wk ABA-inclusive intervention' },
      { label: 'Exempt from mandate', value: 'Limited-benefit policy types; self-funded ERISA' },
      { label: 'Licensure', value: 'Certified Ohio Behavior Analyst (COBA, Board of Psychology)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Ohio',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Ohio is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Ohio.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Ohio mandate: what it guarantees (and doesn\'t)',
        body: [
          'Ohio’s mandate (HB 463, 2017; R.C. 3923.84, with § 1751.84 for HMOs) sets service floors for insureds under age 14 rather than caps: at least 20 hours/week of “clinical therapeutic intervention” — explicitly defined to include applied behavior analysis — plus 20 visits/year each for speech and OT and 30 outpatient mental-health visits/year. Mandated ABA must be provided by or under the supervision of a Certified Ohio Behavior Analyst (or licensed psychologist/counselor/social worker/MFT), and since a March 2025 amendment, clinical nurse specialists and certified nurse practitioners can also prescribe or order ASD services. Dollar limits and cost-sharing can’t be less favorable than substantially all medical/surgical benefits; self-funded ERISA plans are exempt by preemption, and carriers in practice authorize on medical necessity rather than the statutory hour counts.',
        ],
        cites: [
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
      },
      {
        h2: 'No Ohio-specific Cigna policy exists',
        body: [
          'We checked: Cigna / Evernorth publishes no Ohio-specific ABA policy, form, or supplement — the national policy plus the state mandate is the whole picture. That’s worth knowing in itself: it means benefits verification (plan funding type, mandate applicability, benefit limits) is where Ohio-specific answers come from, not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Ohio',
        body: [
          'Ohio’s COBA certificate (ORC Chapter 4783, Ohio Board of Psychology, with a direct BCBA pathway) is baked into the mandate itself — R.C. 3923.84 conditions mandated ABA on COBA-supervised delivery — so COBA status is a commercial coverage requirement in Ohio, not just a Medicaid credentialing detail. On rates: Cigna does not publish commercial ABA fee schedules for Ohio (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
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
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap on ABA — its glossary, following CASP 2024, states that access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions." Age terms come from the member’s benefit plan document, which supersedes the coverage policy, and from any controlling state mandate. Ohio sets a floor rather than a cap: R.C. 3923.84 requires at least 20 hours a week of clinical therapeutic intervention for an insured under age fourteen and says the section "shall not be construed as limiting benefits that are otherwise available." Non-grandfathered individual and small-group plans and limited-benefit policies are carved out by name, and self-funded ERISA plans are exempt by preemption.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team on 877.279.7603 — establish fully insured vs. self-funded ERISA first.',
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
        value: 'No referral, order or prescription is required under EN0499. Cigna’s notable front-door change is on authorization: per the Evernorth autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a BCBA and the member’s policy covers ABA — submit the claims and they are evaluated for payment. Treatment authorization requires the completed assessment and treatment plan attached to the Applied Behavior Analysis Prior Authorization Form. For a fully insured Ohio plan the state mandate adds an ordering requirement the carrier policies do not: R.C. 3923.84 makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specialising in pediatric health. Prior authorization is written into the mandate as the other condition of coverage. Non-grandfathered individual and small-group plans are carved out, and self-funded ERISA plans sit outside state insurance law.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
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
      { q: 'Does Cigna cover ABA therapy in Ohio?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Ohio\'s mandate (Ohio R.C. § 3923.84) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Ohio autism mandate require?', a: 'Ohio’s mandate (HB 463, 2017; R.C. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Ohio?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Ohio Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-ohio': {
    slug: 'unitedhealthcare-ohio',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the Ohio R.C. § 3923.84 mandate layer.',
    assessmentPA: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
    treatmentPA: 'Required — step 2 (treatment auth); reviews every 4–6 months',
    dxRequired: 'Yes \u2014 DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
    payer: 'UnitedHealthcare / Optum in Ohio',
    state: 'OH', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Ohio',
    h1: 'UnitedHealthcare / Optum ABA coverage in Ohio: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Ohio: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Ohio families — the national clinical policy, prior authorization, the Ohio R.C. § 3923.84 mandate (ages, caps, exemptions), Ohio behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Ohio, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Ohio\'s autism insurance mandate (Ohio R.C. § 3923.84), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Ohio R.C. § 3923.84' },
      { label: 'Mandate age', value: 'Service floors apply under age 14' },
      { label: 'Mandate caps', value: 'Floors, not caps: ≥20 hrs/wk ABA-inclusive intervention' },
      { label: 'Exempt from mandate', value: 'Limited-benefit policy types; self-funded ERISA' },
      { label: 'Licensure', value: 'Certified Ohio Behavior Analyst (COBA, Board of Psychology)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Ohio',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Ohio is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Ohio.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Ohio mandate: what it guarantees (and doesn\'t)',
        body: [
          'Ohio’s mandate (HB 463, 2017; R.C. 3923.84, with § 1751.84 for HMOs) sets service floors for insureds under age 14 rather than caps: at least 20 hours/week of “clinical therapeutic intervention” — explicitly defined to include applied behavior analysis — plus 20 visits/year each for speech and OT and 30 outpatient mental-health visits/year. Mandated ABA must be provided by or under the supervision of a Certified Ohio Behavior Analyst (or licensed psychologist/counselor/social worker/MFT), and since a March 2025 amendment, clinical nurse specialists and certified nurse practitioners can also prescribe or order ASD services. Dollar limits and cost-sharing can’t be less favorable than substantially all medical/surgical benefits; self-funded ERISA plans are exempt by preemption, and carriers in practice authorize on medical necessity rather than the statutory hour counts.',
        ],
        cites: [
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
      },
      {
        h2: 'Optum\'s Ohio-specific criteria',
        body: [
          'Ohio has its own entries in Optum’s ABA State Mandates supplemental criteria: for Ohio fully-insured members (effective March 2025), ASD screening, diagnosis, and treatment may also be performed, prescribed, or ordered by clinical nurse specialists and certified nurse practitioners — mirroring the 2025 amendment to the state mandate and widening who can generate a qualifying order.',
        ],
        cites: [
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Ohio',
        body: [
          'A family saying “we have UnitedHealthcare” in Ohio may actually be on the carrier’s Medicaid plan — UnitedHealthcare Community Plan of Ohio — which follows the state Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in Ohio',
        body: [
          'Ohio’s COBA certificate (ORC Chapter 4783, Ohio Board of Psychology, with a direct BCBA pathway) is baked into the mandate itself — R.C. 3923.84 conditions mandated ABA on COBA-supervised delivery — so COBA status is a commercial coverage requirement in Ohio, not just a Medicaid credentialing detail. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Ohio (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Ohio (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Optum’s ABA Supplemental Clinical Criteria carry no age criterion — coverage turns on the member-specific benefit plan, which supersedes the guideline, and on any federal or state regulatory requirement that supersedes the benefits. Ohio sets a floor rather than a cap: R.C. 3923.84 requires at least 20 hours a week of clinical therapeutic intervention for an insured under age fourteen and says the section "shall not be construed as limiting benefits that are otherwise available." Non-grandfathered individual and small-group plans and limited-benefit policies are carved out by name, and self-funded ERISA plans are exempt by preemption. Ohio matters here: the SCC’s own benefit considerations list "Ohio Fully Insured" and "Ohio Medicaid" among the lines of business for which the ABA State Mandates document supplies state-mandated criteria that control where they conflict with this document.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
        verifyVia: 'Provider Express benefits check under a One Healthcare ID, or the behavioral health number on the member ID card — establish fully insured vs. self-funded ERISA first.',
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
        value: 'The SCC require no separate physician referral or order; what they require is prior authorization for ABA, unless otherwise specified or mandated by contract or law. In practice UnitedHealthcare administers this as a two-step Optum flow on Provider Express — an authorization for the assessment, then a second for treatment — with continued-service reviews on the authorization cycle. For a fully insured Ohio plan the state mandate adds an ordering requirement the carrier policies do not: R.C. 3923.84 makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specialising in pediatric health. Prior authorization is written into the mandate as the other condition of coverage. Non-grandfathered individual and small-group plans are carved out, and self-funded ERISA plans sit outside state insurance law. Ohio matters here: the SCC’s own benefit considerations list "Ohio Fully Insured" and "Ohio Medicaid" among the lines of business for which the ABA State Mandates document supplies state-mandated criteria that control where they conflict with this document.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
      },
      telehealth: {
        value: 'Not addressed. The ABA Supplemental Clinical Criteria set no telehealth rules, place-of-service codes or modality limits for ABA; telehealth terms for a commercial member come from the plan’s own telehealth policy rather than from this guideline.',
        status: 'unverified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
        verifyVia: 'Provider Express (Clinical Resources → ABA Information) or the behavioral health number on the member ID card — ask which ABA codes are payable by telehealth on this plan and with which POS code.',
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
        value: 'Not addressed. The ABA Supplemental Clinical Criteria are a medical-necessity document and say nothing about billing 97153 and 97155 for the same clock time; direct case supervision is defined as occurring concurrently with direct treatment, but the reimbursement consequence is not stated there.',
        status: 'unverified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
        verifyVia: 'Optum Provider Express National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
      },
      dailyLimits: {
        value: 'The SCC set no numeric hour cap — the number of service hours requested must be justified by the member’s documented clinical need according to level of impairment, symptom severity, treatment history and response, at the least restrictive and most clinically appropriate level. The operative review trigger runs the other way: utilization below 80% of prior-authorization-period hours over a two-week period is specifically addressed at continued-service review and requires documentation of barriers and how they will be addressed.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      noteSignature: {
        value: 'Not addressed. The ABA Supplemental Clinical Criteria specify what must be documented for coverage — progress by targeted symptom and behavior, standardized and norm-referenced measures, caregiver involvement, barriers — but not who must sign a session note or within what time.',
        status: 'unverified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
        verifyVia: 'Optum Provider Express National Network Manual (documentation standards) and the participating-provider agreement.',
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
      { q: 'Does UnitedHealthcare cover ABA therapy in Ohio?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Ohio\'s mandate (Ohio R.C. § 3923.84) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Ohio autism mandate require?', a: 'Ohio’s mandate (HB 463, 2017; R.C. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Ohio?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Ohio Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'anthem-bcbs-ohio': {
    slug: 'anthem-bcbs-ohio',
    payer: 'Anthem BCBS Ohio',
    state: 'OH', kind: 'commercial',
    family: 'anthem',
    cardDesc: '20 hrs/week is a floor, not a cap; individual and small-group plans are carved out; COBA required.',
    assessmentPA: 'Yes — ABA is precertified as a category; Anthem\'s Ohio list names no individual CPT codes, so request assessment and treatment together',
    treatmentPA: 'Yes — responsible party Anthem; weekly approved units since January 1, 2026',
    dxRequired: 'Yes — and the statute requires the services to be prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a pediatric CNS/CNP',
    pill: 'Payer Guide · Anthem BCBS · Ohio',
    h1: 'Anthem BCBS Ohio ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Ohio ABA Coverage & Prior Auth: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Ohio: why R.C. 3923.84\'s 20 hours a week is a floor not a cap, the individual and small-group carve-out, COBA licensure, the annual review ceiling, and the January 2026 weekly-unit change.',
    intro: [
      'Ohio\'s autism mandate is usually described backwards. R.C. 3923.84 does not cap ABA at 20 hours a week — it requires at least that much for an insured under age fourteen, and the same section says explicitly that it "shall not be construed as limiting benefits that are otherwise available to an insured under a policy." Ohio sets floors, not ceilings, and a clinic quoting "Ohio\'s 20-hour cap" to a family is giving away hours it is entitled to ask for.',
      'The harder Ohio fact is who the mandate does not reach. The statute carves out non-grandfathered individual and small group plans entirely, alongside Medicare supplement, accident-only, specified-disease, hospital indemnity, disability income, long-term care and other limited-benefit policies. For a family on a marketplace or small-employer plan the ABA benefit rides on the ACA essential-health-benefits benchmark rather than on 3923.84 — and self-funded ERISA plans sit outside state insurance law altogether, answering to federal parity. Which bucket the plan falls in is the first thing benefits verification has to settle.',
    ],
    atGlance: [
      { label: 'Who reviews ABA', value: 'Anthem — responsible party on its own Ohio precert list' },
      { label: 'Submit via', value: 'Availity Essentials → Authorizations and Referrals (preferred since 9/1/2025)' },
      { label: 'State mandate', value: 'R.C. 3923.84 (and R.C. 1751.84 for health insuring corporations)' },
      { label: 'The 20 hours', value: 'A FLOOR for insureds under 14 — not a cap; benefits above it are not limited' },
      { label: 'Carved out', value: 'Non-grandfathered individual and small group plans; limited-benefit policies' },
      { label: 'Prior auth', value: 'Written into the mandate itself — coverage is contingent on it' },
      { label: 'Review ceiling', value: 'Insurer may review the treatment plan annually' },
      { label: 'Licensure', value: 'Certified Ohio Behavior Analyst (COBA), State Board of Psychology' },
    ],
    sections: [
      {
        h2: 'Floors, not caps — and who is left out',
        cites: [
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
          { title: 'Ohio Rev. Code § 1751.84 — health insuring corporations', url: 'https://codes.ohio.gov/ohio-revised-code/section-1751.84' },
        ],
        body: [
          'R.C. 3923.84 requires each individual and group sickness and accident policy delivered, issued for delivery or renewed in Ohio to cover the screening, diagnosis and treatment of autism spectrum disorder. R.C. 1751.84 is its twin for health insuring corporations, with identical substance. What the statute then sets out are minimums for an insured under the age of fourteen: twenty visits per year each for speech and language therapy and occupational therapy performed by a licensed therapist; twenty hours per week of clinical therapeutic intervention provided by or under the supervision of an appropriately licensed, certified or registered professional under a health treatment plan; and thirty outpatient mental or behavioral health visits per year for consultation, assessment, treatment-plan development or oversight by a licensed psychologist, a licensed physician including a psychiatrist, or a clinical nurse specialist or certified nurse practitioner.',
          'Two clauses stop those numbers becoming ceilings. Subsection (C)(1) says the section "shall not be construed as limiting benefits that are otherwise available to an insured under a policy." Subsection (A) says coverage is not subject to dollar limits, deductibles or coinsurance less favourable to the insured than those applying to substantially all medical and surgical benefits under the policy. So the 20 hours is the statutory floor for the under-14 cohort, and the actual authorization is a medical-necessity conversation that can and often should go higher.',
          'The exclusion sentence is the one to read out loud at intake: nothing in the section applies "to nongrandfathered plans in the individual and small group markets or to medicare supplement, accident-only, specified disease, hospital indemnity, disability income, long-term care, or other limited benefit hospital insurance policies." That is a large slice of the Ohio market. Those plans may still cover ABA — through the ACA essential-health-benefits benchmark or plan design — but not because 3923.84 says so, and the mandate arguments on this page will not move them.',
        ],
      },
      {
        h2: 'Prior authorization is in the statute, and so is the review ceiling',
        cites: [
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
        body: [
          'Unusually, Ohio writes prior authorization into the mandate rather than leaving it to the carrier. Subsection (C)(2) says a policy "shall stipulate that coverage provided under this section be contingent upon both of the following: (a) The covered individual receiving prior authorization for the services in question; (b) The services in question being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a clinical nurse specialist or certified nurse practitioner specializing in pediatric health." The nurse-practitioner and clinical-nurse-specialist pathway is new — Senate Bill 196 added it effective March 20, 2025, which widens the pool of clinicians who can legitimately order ABA in Ohio.',
          'The counterweight is subsection (D): outside inpatient services, an insurer "may review the treatment plan annually, unless the insurer and the insured\'s treating physician, clinical nurse specialist, certified nurse practitioner, or psychologist agree that a more frequent review is necessary," and the insurer covers the cost of obtaining any review or treatment plan. Annual is a generous statutory ceiling by the standards of this directory — Virginia\'s is 12 months, Missouri\'s is six. On a fully insured Ohio plan, an Anthem reviewer asking for an off-cycle treatment-plan update is asking for something the statute does not entitle them to without your agreement.',
        ],
      },
      {
        h2: 'Who reviews the authorization at Anthem',
        cites: [
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
          { title: 'Anthem Ohio — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/ohio/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27235' },
          { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
        ],
        body: [
          'Anthem\'s Ohio commercial entity is Community Insurance Company, and Ohio shares one precertification list with Indiana, Kentucky, Missouri and Wisconsin. Under behavioral health services that list includes, for OH, IN and KY Blues products, applied behavioral analysis among the services requiring preapproval — with the responsible party given as Anthem. A separate row reads "Treatment for autism spectrum disorder — Anthem." Since September 1, 2025 the preferred channel has been Availity Essentials: log in, select Authorizations and Referrals, then the Patient Registration tab.',
          'Two Carelon names cause confusion in Ohio and neither should send an ABA request anywhere new. Carelon Medical Benefits Management handles imaging, bariatrics, cardiovascular, genetic testing, musculoskeletal, oncology, sleep, radiation therapy and rehabilitative services — its published numbers are for those programmes, not ABA. And Anthem\'s March 2025 notice about delegating work to Carelon Health, Inc. is explicitly about care management, meaning case management and disease management: the notice itself says all contracts, policies and procedures remain unchanged, and that existing phone numbers, emails, websites and portals will not change. It says nothing about prior authorization, utilization management or ABA. Carelon Behavioral Health is separately a utilization-management vendor acting on the health plan\'s behalf in Ohio and took assignment of Ohio behavioral health provider contracts in 2023 — but from the clinic\'s side, the January 2026 precertification list names Anthem and the submission channel is Anthem\'s Availity.',
          'One nuance that can save a whole workup: on Anthem National Accounts business, "precertification for ABA is recommended and applies unless the group specifically opts out of clinical review for this benefit. Retrospective review is allowed." Customized precertification approaches for individual employer groups are described as common in National Accounts. If the card says National Accounts, make the call before you build the file.',
        ],
      },
      {
        h2: 'COBA: Ohio\'s own credential, and where Anthem\'s guide is too loose',
        cites: [
          { title: 'Ohio Rev. Code § 4783.02 — practice of applied behavior analysis', url: 'https://codes.ohio.gov/ohio-revised-code/section-4783.02' },
          { title: 'Ohio Rev. Code § 4783.04 — certificate application', url: 'https://codes.ohio.gov/ohio-revised-code/section-4783.04' },
          { title: 'Ohio Board of Psychology — Certified Ohio Behavior Analyst applicants', url: 'https://psychology.ohio.gov/licensing-and-renewal/getting-licensed-sa/certified-ohio-behavior-analyst' },
        ],
        body: [
          'Ohio does not license "behavior analysts" — it certifies Certified Ohio Behavior Analysts through the State Board of Psychology. Applicants must demonstrate current BACB certification as a board certified behavior analyst, or completion of equivalent requirements plus a psychometrically valid examination from a nationally accredited credentialing organization. R.C. 4783.02 makes it unlawful to engage in the practice of applied behavior analysis in Ohio without that certificate, or to hold yourself out as a COBA without it.',
          'The exemptions define the technician tier. The chapter does not apply to "an individual practicing applied behavior analysis who is supervised by a certified Ohio behavior analyst and acting under the authority and direction of that certified Ohio behavior analyst," nor to "the delivery of interventions by a direct care provider or family member to implement components of an applied behavior analysis treatment plan." Ohio, in other words, does not separately license RBT-level staff; they work under the COBA\'s authority. Chapter 4732 psychologists and Chapter 4757 counselors, social workers and marriage and family therapists are also exempt within their training.',
          'The mismatch to watch: Anthem\'s multi-state ABA provider resource guide lists approved service providers broadly — psychiatrists, psychologists, LCSWs, LPCs, LMFTs with ABA training, BCBAs, people working under BCBA direction, and other state-licensed mental health providers. Ohio\'s insurance statute is narrower, requiring ABA to be provided by or under the supervision of a certified Ohio behavior analyst, a Chapter 4732 psychologist, or a Chapter 4757 counselor, social worker or marriage and family therapist. In Ohio a BCBA needs the COBA; credential to the statute.',
        ],
      },
      {
        h2: 'Weekly approved units from January 1, 2026',
        cites: [
          { title: 'Anthem Ohio — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/ohio/articles/streamlined-aba-claim-process-starts-january-1-2026-27879' },
          { title: 'Anthem — MCG care guidelines 27th edition update (Ohio, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/ohio/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
        ],
        body: [
          'Effective January 1, 2026, Anthem reimburses ABA in Ohio on weekly approved units rather than total authorized units. Claims should reflect units rendered within each week up to the weekly medically necessary limit approved by prior approval; units above it are ineligible for reimbursement and will be adjusted. The affected codes are the full set — 97151, 97152, 0362T, 97153, 97154, 97155, 97156, 97157, 97158 and 0373T, each per 15 minutes. That article is the closest thing to a code-level public statement of what Anthem Ohio commercial authorizes, since the precertification list itself names ABA only as a category.',
          'Alongside it, note the criteria change. Anthem told Ohio commercial providers that effective June 1, 2024 it would transition from CG-BEH-02 (Adaptive Behavioral Treatment) and MCG W0153 to MCG B-806-T, Behavioral Health Care Applied Behavioral Analysis, for medical necessity and clinical appropriateness reviews. If your templates or a denial letter still reference CG-BEH-02, they are out of date. MCG guidelines are proprietary and unpublished, so leverage comes from a complete, data-anchored treatment plan rather than from quoting criteria back.',
        ],
      },
    ],
    collect: [
      { title: 'Market segment, first', desc: 'Non-grandfathered individual and small group plans are carved out of R.C. 3923.84 entirely, and self-funded ERISA plans are outside state law. Large-group fully insured is where the mandate actually bites — establish which before you cite any of it.' },
      { title: 'Child\'s age relative to 14', desc: 'The statutory service floors — 20 hours a week of clinical therapeutic intervention, 20 speech and 20 OT visits, 30 outpatient behavioral health visits — apply to an insured under the age of fourteen. Above 14 the mandate\'s floors drop away, though the parity and non-limiting clauses remain.' },
      { title: 'The ordering clinician', desc: 'Ohio requires the services to be prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a clinical nurse specialist or certified nurse practitioner specializing in pediatric health. The nurse pathway was added in March 2025 and widens your options — capture who wrote the order and their credential.' },
      { title: 'COBA certificate numbers', desc: 'Covered ABA must be provided by or under the supervision of a Certified Ohio Behavior Analyst (or a Chapter 4732 psychologist or Chapter 4757 clinician). A BACB certificant without the COBA cannot practise in Ohio.' },
      { title: 'Realistic weekly schedule', desc: 'Weekly approved units since January 2026 make the family\'s sustainable weekly availability a billing constraint, not just a scheduling one.' },
      { title: 'Whether the plan is a National Account', desc: 'On National Accounts, ABA precertification applies unless the group opted out of clinical review, and retrospective review is allowed. One call can change how much front-loading the case needs.' },
    ],
    sources: [
      { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
      { title: 'Ohio Rev. Code § 1751.84 — health insuring corporations', url: 'https://codes.ohio.gov/ohio-revised-code/section-1751.84' },
      { title: 'Ohio Rev. Code § 4783.02 — practice of applied behavior analysis', url: 'https://codes.ohio.gov/ohio-revised-code/section-4783.02' },
      { title: 'Ohio Rev. Code § 4783.04 — certificate application', url: 'https://codes.ohio.gov/ohio-revised-code/section-4783.04' },
      { title: 'Ohio Board of Psychology — Certified Ohio Behavior Analyst applicants', url: 'https://psychology.ohio.gov/licensing-and-renewal/getting-licensed-sa/certified-ohio-behavior-analyst' },
      { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
      { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
      { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
      { title: 'Anthem Ohio — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/ohio/articles/streamlined-aba-claim-process-starts-january-1-2026-27879' },
      { title: 'Anthem Ohio — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/ohio/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27235' },
      { title: 'Anthem — MCG care guidelines 27th edition update (Ohio, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/ohio/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem Ohio — delegation of care management to Carelon Health, Inc. (March 2025)', url: 'https://providernews.anthem.com/ohio/articles/anthem-will-delegate-care-management-to-carelon-health-inc-24327' },
    ],
    deliveryRules: {
      supervision: {
        value: 'Anthem publishes no numeric supervision ratio for Ohio. What it does publish is a staffing rule with teeth: ABA delivered by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other qualified health care professional in box 31 of the CMS-1500, with degree-level modifiers HM, HN and HO identifying the rendering staff level. Ohio then narrows who the supervisor can be \u2014 R.C. 3923.84 conditions mandated ABA on delivery by or under the supervision of a Certified Ohio Behavior Analyst, a Chapter 4732 psychologist, or a Chapter 4757 counselor, social worker or marriage and family therapist, and R.C. 4783.02 exempts technician-level staff from certification only while they are supervised by and acting under the authority and direction of a COBA. A BACB certificant without the COBA cannot supervise in Ohio.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide \u2014 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ohio Rev. Code \u00a7 3923.84 \u2014 coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
          { title: 'Ohio Rev. Code \u00a7 4783.02 \u2014 practice of applied behavior analysis', url: 'https://codes.ohio.gov/ohio-revised-code/section-4783.02' },
        ],
      },
      concurrentBilling: {
        value: 'A physician or other QHP billing 97155 can add 97153 only if both the technician and the QHP are face-to-face with the patient at the same time and the QHP is directing the technician. Supervised or directed services billed alongside a QHP-performed procedure are also subject to Anthem\'s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      dailyLimits: {
        value: 'Anthem publishes no Ohio-specific per-day unit ceiling. From January 1, 2026 the binding limit is the weekly approved units on the authorization — units above the approved weekly figure are ineligible for reimbursement and adjusted. ABA codes may separately carry CMS MUE limits, administered as NCCI edits under Anthem\'s Code and Clinical Editing Guidelines reimbursement policy. Note that the state mandate\'s 20 hours per week for insureds under 14 is a statutory floor, not a ceiling.',
        status: 'verified',
        cites: [
          { title: 'Anthem Ohio — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/ohio/articles/streamlined-aba-claim-process-starts-january-1-2026-27879' },
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
      },
      noteSignature: {
        value: 'Each medical-record entry must carry author identification — handwritten signature, unique electronic identifier, or initials — plus rendering provider credentials. Entries are expected at the time of service or shortly thereafter and should not exceed 30 days, with a signature date within 30 days of the date of service. Timed codes require total treatment minutes plus start and stop times. Treatment plans must show review or update at least every 6 months; separately, Ohio law lets the insurer review the treatment plan annually, and no more often without the treating clinician\'s agreement.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
      },
      placeOfService: {
        value: 'POS codes Anthem names for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — each subject to the member\'s coverage and plan review.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      billAsProvider: {
        value: 'ABA delivered by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS-1500, with degree-level modifiers HM, HN and HO identifying the rendering staff level. In Ohio the supervising clinician must be a Certified Ohio Behavior Analyst, a Chapter 4732 psychologist, or a Chapter 4757 counselor, social worker or marriage and family therapist; technician-level staff are exempt from certification only while acting under a COBA\'s authority and direction.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
          { title: 'Ohio Rev. Code § 4783.02 — practice of applied behavior analysis', url: 'https://codes.ohio.gov/ohio-revised-code/section-4783.02' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem publishes no age cap for ABA in Ohio. What the statute does is set floors for a defined cohort: R.C. 3923.84 requires at least twenty hours a week of clinical therapeutic intervention, twenty speech and twenty occupational therapy visits a year, and thirty outpatient mental or behavioral health visits a year for an insured under the age of fourteen. Above fourteen those floors drop away, but the non-limiting clause at subsection (C)(1) and the parity clause at subsection (A) remain, so an over-14 request is a medical-necessity conversation rather than a coverage exclusion. The mandate itself does not reach non-grandfathered individual and small group plans, and self-funded ERISA plans sit outside state insurance law entirely.',
        status: 'plan-dependent',
        cites: [
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
        verifyVia: 'Benefits verification on the member ID — settle the market segment first (large-group fully insured, individual or small group, or self-funded ERISA), then the plan’s own age and benefit terms.',
      },
      dxRecency: {
        value: 'Not published. Anthem moved Ohio commercial ABA reviews from CG-BEH-02 and MCG W0153 to MCG B-806-T effective June 1, 2024, and MCG guidelines are proprietary and unpublished, so any diagnosis-recency expectation lives inside criteria the clinic cannot read. The one statutory cadence that is public runs the other way: outside inpatient services the insurer may review the treatment plan annually, and no more often without the treating clinician’s agreement.',
        status: 'unverified',
        cites: [
          { title: 'Anthem — MCG care guidelines 27th edition update (Ohio, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/ohio/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
        verifyVia: 'A pre-service call to Anthem behavioral health (or a peer-to-peer) asking what MCG B-806-T expects on the age of the diagnostic evaluation — a denial letter still citing CG-BEH-02 is working from a retired document.',
      },
      diagnosingProviders: {
        value: 'Ohio writes this into the mandate rather than leaving it to the carrier. R.C. 3923.84(C)(2)(b) makes coverage contingent on the services being "prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a clinical nurse specialist or certified nurse practitioner specializing in pediatric health." The nurse pathway is recent — Senate Bill 196 added it effective March 20, 2025 — and it widens the pool of clinicians who can legitimately order ABA in Ohio. Capture who wrote the order and their credential at intake.',
        status: 'verified',
        cites: [
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
      },
      diagnosticTools: {
        value: 'Not published. Neither R.C. 3923.84 nor Anthem’s Ohio precertification list or ABA provider resource guide names a diagnostic instrument, and the operative medical-necessity criteria — MCG B-806-T since June 1, 2024 — are proprietary and unpublished. Leverage in Ohio therefore comes from a complete, data-anchored treatment plan rather than from quoting instrument criteria back.',
        status: 'unverified',
        cites: [
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Anthem — MCG care guidelines 27th edition update (Ohio, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/ohio/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
        ],
        verifyVia: 'A pre-service call or peer-to-peer with Anthem behavioral health asking which instruments MCG B-806-T expects behind the ASD diagnosis.',
      },
      referral: {
        value: 'Yes — and unusually it is statutory rather than contractual. R.C. 3923.84(C)(2) makes coverage contingent on both prior authorization and the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a pediatric clinical nurse specialist or certified nurse practitioner. On the carrier side, Anthem’s precertification list for Ohio (shared with Indiana, Kentucky, Missouri and Wisconsin, updated January 1, 2026) lists applied behavioral analysis under behavioral health services with Anthem as the responsible party, and a separate row for treatment of autism spectrum disorder; since September 1, 2025 the preferred channel is Availity Essentials. One National Accounts nuance can change the whole workup: precertification for ABA "is recommended and applies unless the group specifically opts out of clinical review for this benefit," and retrospective review is allowed — if the card says National Accounts, call before building the file.',
        status: 'verified',
        cites: [
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
          { title: 'Anthem National Accounts 2026 standard prior authorization requirements', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/general/ANA_SPL.pdf' },
        ],
      },
      telehealth: {
        value: 'Anthem treats telehealth as a place of service rather than a code restriction: its ABA provider resource guide names POS 10 for telehealth with the member at home and POS 02 for telehealth with the member elsewhere, alongside 12 home, 11 office or clinic, 99 community and 03 school — each subject to the member’s coverage and plan review. No Ohio-specific per-code telehealth limit is published. Since January 1, 2026 the reimbursement constraint that matters in Ohio is weekly rather than modal: claims must reflect units rendered within each week up to the weekly medically necessary limit approved on the prior approval, across 97151, 97152, 0362T, 97153, 97154, 97155, 97156, 97157, 97158 and 0373T.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Anthem Ohio — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/ohio/articles/streamlined-aba-claim-process-starts-january-1-2026-27879' },
        ],
      },
    },
    faq: [
      { q: 'Does Ohio cap ABA at 20 hours a week?', a: 'No — that is the most common misreading of R.C. 3923.84. Twenty hours a week of clinical therapeutic intervention is the minimum the statute requires for an insured under age fourteen, and the same section says it "shall not be construed as limiting benefits that are otherwise available to an insured under a policy." Ask for what is medically necessary; the 20 hours is the floor you can insist on, not the ceiling you must accept.' },
      { q: 'Which Ohio plans are exempt from the autism mandate?', a: 'Non-grandfathered plans in the individual and small group markets are carved out by name, along with Medicare supplement, accident-only, specified disease, hospital indemnity, disability income, long-term care and other limited-benefit policies. Self-funded ERISA plans sit outside state insurance law entirely. Those members may still have an ABA benefit, but not because of R.C. 3923.84.' },
      { q: 'Who can order ABA in Ohio?', a: 'The statute makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect on March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specializing in pediatric health. Prior authorization is likewise written into the mandate as a condition of coverage.' },
      { q: 'Does a BCBA need an Ohio credential?', a: 'Yes. Ohio requires a Certified Ohio Behavior Analyst certificate from the State Board of Psychology to practise applied behavior analysis, and the COBA application itself requires current BACB certification. Staff working under a COBA\'s authority and direction, and family members implementing a plan, are exempt from certification — Ohio does not separately license technicians.' },
      { q: 'How often can Anthem re-review an Ohio ABA treatment plan?', a: 'Outside inpatient services the statute lets the insurer review the treatment plan annually, unless the insurer and the treating physician, clinical nurse specialist, certified nurse practitioner or psychologist agree more frequent review is necessary — and the insurer covers the cost of obtaining the review or plan.' },
      { q: 'Which criteria does Anthem apply to ABA in Ohio?', a: 'MCG B-806-T. Anthem notified Ohio commercial providers that effective June 1, 2024 it would move from CG-BEH-02 and MCG W0153 to MCG B-806-T for medical-necessity and clinical-appropriateness reviews. MCG guidelines are proprietary and unpublished, so a denial letter still citing CG-BEH-02 is working from a retired document.' },
    ],
  },
};

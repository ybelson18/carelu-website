import type { PayerConfig } from './types.js';

export const ohioPayers: Record<string, PayerConfig> = {
  'ohio-medicaid': {
    slug: 'ohio-medicaid',
    cardDesc: 'OAC 5160-34: all-PA ABA, 6-month reviews, published rates, and the OhioRISE carve-out myth.',
    assessmentPA: {
      value: 'Required — PA on all covered ABA codes under the current rule (a pending rewrite would exempt the first 10 assessment hours per 180 days)',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — with medical-necessity review at baseline and every 6 months',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
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
      { label: 'Rates (per 15 min)', value: 'No in-force published ABA schedule; ODM’s unfiled draft lists 97153 $16.04 (RBT) · 97155 $27.28 · 97151 $30.49 (COBA/BCBA tier)' },
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
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — draft ABA rule package (5160-34-01/-02/-03 + fee appendix)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — Provider Stakeholder Office Hours: ABA Proposed Rule Review (7/30/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
        ],
      },
      {
        h2: 'Rates: what Ohio Medicaid pays for 97153 and the other ABA codes',
        body: [
          'Ohio Medicaid has no in-force, published ABA rate table to quote. ODM’s main non-institutional fee schedule (Appendix DD to OAC 5160-1-60, revised January 1, 2026) has no rows for 97151–97158, 0362T or 0373T, and the ABA rule chapter 5160-34 is not in the Ohio Administrative Code (codes.ohio.gov, rechecked October 7, 2026). The only ODM table for these codes is Appendix A to the draft rule 5160-34-03 in package ERF188422B, headed “Fee schedule for Applied Behavior Analysis” with a “current maximum payment amount” column, on pages marked “DRAFT - NOT YET FILED”: 97153 (RBT) $16.04 per 15-minute unit; 97151 $30.49 (independent practitioner: COBA/BCBA/BCBA-D) or $22.67 (BCaBA); 97152 $17.00; 97154 $7.61; 97155 $27.28 / $20.63; 97156 $30.09 / $22.37; 97157 and 97158 $14.46 / $10.62; 0362T and 0373T $33.54. Treat those as ODM’s draft figures and confirm the amount on a paid fee-for-service remittance or with ODM before modelling revenue.',
          'Most members are in an MCO, which pays under its own provider contract, and no Ohio MCO publishes its ABA rates. House Bill 453 (introduced September 15, 2025; in the House Insurance Committee since October 1, 2025) would set MCO payment rates for 97151–97158 at “one hundred per cent of the fee-for-service rate” for fiscal year 2027 and require commercial payers to pay at least 100% of the Medicaid fee schedule. It is a pending bill, not law.',
        ],
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01 and 5160-34-03 with Appendix A fee schedule; marked “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — Appendix DD to OAC 5160-1-60, non-institutional fee schedule (updates for 1/1/2026, XLSX)', url: 'https://dam.assets.ohio.gov/raw/upload/medicaid.ohio.gov/Providers/FeeScheduleRates/OutpatientHospital/5160-1-60-_App_DD-_Updates_for_01_01_2026-_FINAL.xlsx' },
          { title: 'codes.ohio.gov — Chapter 5160-34 lookup (“No Ohio Administrative Code rule number corresponds,” checked October 7, 2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/chapter-5160-34' },
          { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
          { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
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
      {
        h2: 'Is Ohio Medicaid\'s ABA network open to new providers?',
        body: [
          'Ohio has no ABA-specific enrollment moratorium we can cite, and the front door is centralized. Certified Ohio Behavior Analysts are on the list of practitioners for whom “credentialing by ODM is mandatory” (OAC 5160-1-42), through ODM’s CAQH-based process with recredentialing every 36 months. Contracting is still per plan: AmeriHealth Caritas Ohio’s January 2026 manual tells providers to start contracting with each MCO while enrolling and being credentialed at ODM, that the plan interest can be flagged in ODM’s PNM system when applying, and that a provider is not participating until both credentialing and contracting are complete. Whether a given MCO’s ABA panel is open is that plan’s contracting decision. One policy signal: ODM paused its ABA rule rewrite in 2025 citing budget shortfalls and national concern over ABA growth and spending, and its draft would create an ABA-specific organizational provider type — a draft that governs nothing yet.',
        ],
        cites: [
          { title: 'OAC 5160-1-42 — Medicaid provider credentialing (COBAs credentialed by ODM)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-42' },
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026), enrollment, credentialing and contracting', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
          { title: 'ODM — ABA provider stakeholder presentation (7/30/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
        ],
      },
      {
        h2: 'Ohio Medicaid ABA claims: filing deadline, referring provider, payment clock and EVV',
        body: [
          'Filing deadline: a fee-for-service claim is timely if ODM receives it within 365 days of the date the service was provided, and a denied claim resubmitted for payment has the same 365 days from the date of service; underpaid claims should be adjusted within 365 days too (OAC 5160-1-19(D)). Paper claims are not accepted. The Medicaid MCOs’ manuals apply the same 365-day limit by reference to this rule.',
          'Rendering, supervising and referring providers: “Claims for items and services that necessitate a rendering or supervising provider, order, prescription, referral, or certification will be denied if” they do not carry that provider’s NPI and legal name, or the provider has no active Medicaid provider agreement (5160-1-19(C)).',
          'Ordering/referring NPI from January 1, 2027: ODM’s April 20, 2026 memo to the managed care entities sets “an enforcement date of January 1, 2027,” after which “any pending or new day claims containing NPI ORP errors must be denied by the MCE,” and the ORP provider must be “an actively enrolled provider.” ODM is building “a single list of services subject to ORP” for managed care and fee-for-service alike; until it posts that list, the memo names the services that need an ordering or referring NPI (DME, imaging and radiology, laboratory and skilled therapies; consultation codes 99242–99255; home health, private duty nursing, hospice and transportation; and, for ODBH-certified agencies, lab and certain RN/LPN services). ABA is not on that interim list, so check ODM’s final list before January 2027.',
          'Payment clock: federal rules require ODM to pay 90% of clean practitioner claims within 30 days of receipt and 99% within 90 days (42 CFR 447.45(d)).',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt.',
        ],
        cites: [
          { title: 'ODM Office of Managed Care memo — Updated Guidance on Ordering, Referring, and Prescribing (ORP) Requirements (April 20, 2026; enforcement Jan. 1, 2027)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ManagedCare/PolicyGuidance/2026_04_ORP_Requirements_Memo_clean.pdf' },
          { title: 'OAC 5160-1-19 — Claim submission and payment (timely filing), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
          { title: '42 CFR 447.45(d) — timely processing of Medicaid fee-for-service claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-447.45' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
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
      { title: 'ODM Office of Managed Care memo — Updated Guidance on Ordering, Referring, and Prescribing (ORP) Requirements (April 20, 2026; enforcement Jan. 1, 2027)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ManagedCare/PolicyGuidance/2026_04_ORP_Requirements_Memo_clean.pdf' },
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
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
      { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
      { title: 'OAC 5160-1-18 — Telehealth', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-18' },
      { title: 'OAC 5160-1-42 — Medicaid provider credentialing', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-42' },
      { title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
      { title: 'OAC 5160-1-19 — Claim submission and payment (timely filing), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
      { title: '42 CFR 447.45(d) — timely processing of Medicaid fee-for-service claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-447.45' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
      { title: 'Ohio Department of Medicaid — News for Providers (index of ODM Press provider bulletins and notices)', url: 'https://managedcare.medicaid.ohio.gov/news/news-for-providers' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No age bound could be verified at the state level. OAC 5160-34-02 covers adaptive behavior services for the assessment and treatment of ASD without an age term we could read, and Ohio’s ABA benefit runs through the Next Generation MCOs, whose manuals frame under-21 services under EPSDT — Anthem’s Ohio Medicaid provider manual states that medically necessary services for members under 21 may exceed adult plan limits. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02; the member’s MCO for how it applies EPSDT to ABA.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'Ohio’s state rule requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no recency window we could verify. In practice the recency rules in Ohio are plan-level and they differ sharply: CareSource requires a provider letter documenting DSM symptoms within the past year where the evaluation is more than 24 months old, while Buckeye accepts a comprehensive diagnostic evaluation conducted within the past five years. Screen against the member’s MCO, not the state rule. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the state rule; the member’s MCO policy for the operative window (MM-0028 for CareSource, CP.BH.104 for Buckeye).',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'No in-force Ohio Medicaid rule names who may diagnose ASD for ABA: OAC 5160-34-02 is not on codes.ohio.gov, and ODM’s unfiled draft defines a comprehensive diagnostic evaluation but names no diagnosing credential. The plans set their own bars: Optum’s Ohio Medicaid criteria (UnitedHealthcare Community Plan) require a valid ASD diagnosis issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such a diagnosis under DSM-5-TR, and CareSource (MM-0028) accepts a diagnosis made by a child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician. An LCSW is not named by either. What is coming: ODM’s July 30, 2026 proposed-rule review says the draft 5160-34-03 would make eligible to diagnose “a psychologist, psychologist assistant under supervision of a psychologist, pediatrician, primary care or independently licensed clinician with a scope of practice that includes diagnosing ASD using standardized tools,” and would require the diagnostic assessment and ABA referral to come from a practitioner “independent of (not employed by) the ABA treatment provider.” That is a proposal, not the rule in force.',
        status: 'verified',
        cites: [
          { title: 'ODM — Provider Stakeholder Office Hours: ABA proposed rule review (July 30, 2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      diagnosticTools: {
        value: 'The state rule names no diagnostic instrument — it requires DSM-5-TR criteria demonstrated through a comprehensive diagnostic evaluation and leaves instrument choice to the evaluator. Ohio’s instrument requirements are therefore plan-level: CareSource requires ADOS, ADI-R or CARS-2; Optum, for UnitedHealthcare Community Plan, requires at least one clinically validated screening tool plus one formal diagnostic tool (ADI-R, ADOS or ADOS-2, or DISCO). codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for whether the in-force rule names instruments; otherwise the member’s MCO ABA policy.',
        blocker: 'document',
      },
      referral: {
        value: 'No Medicaid-side referral or service-order requirement could be verified. Ohio’s ordering requirement — services prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a pediatric clinical nurse specialist or certified nurse practitioner — sits in the commercial insurance mandate at R.C. 3923.84, which governs insured plans, not Medicaid. Forward-looking and NOT law: ODM’s paused draft 5160-34-03 would require a diagnosing or referring practitioner independent of (not employed by) the ABA provider; that package is pre-filing with no JCARR filing, so it governs nothing today. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — Provider Stakeholder Office Hours: ABA Proposed Rule Review (7/30/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov or JCARR for the in-force rule; the member’s MCO PA packet for what it actually requires with the request.',
        blocker: 'document',
      },
      telehealth: {
        value: 'No per-code state telehealth rule for ABA could be verified. What is published at the plan level: Optum’s Ohio Medicaid criteria state that ABA is available through telehealth under guidelines effective June 2018, conditioned on the member having the basic and advanced prerequisite skills to benefit, a caregiver willing and able to support telehealth, and a thorough provider assessment of the environment and safety concerns — with the session note required to indicate when a service was delivered by telehealth. CareSource covers parent training and supervision by telehealth, and 1:1 ABA by telehealth only when medically necessary under a documented service-delivery plan. ODM’s own Telehealth Billing Guidelines (fee-for-service, dates of service on or after 1/1/2026, under OAC 5160-1-18) do not list any ABA code — 97151–97158, 0362T or 0373T — in their telehealth-eligible code tables, and behavior analysts are not among the practitioner types they name as eligible to render telehealth; OAC 5160-1-18 does let payment extend to “other practitioners” and “other services if specifically authorized in rule,” which would be the ABA rule we cannot read. The same guidelines say the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.” So whether 97151 (assessment) or 97155 (supervision) may be delivered remotely for an Ohio Medicaid member is, today, a question for the member’s MCO. ODM’s general fee-for-service telehealth claim rules (effective 1/1/2026) also differ from most payers’: “In most cases, the ‘GT’ modifier is required,” the place of service reported “must be the location of the practitioner,” and “telehealth place of service codes 02 and 10 will not be accepted on claims where Medicaid is the primary payer unless stated otherwise in provider specific billing guidelines.” The guidelines add that the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.”',
        status: 'unverified',
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
          { title: 'OAC 5160-1-18 — Telehealth', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-18' },
        ],
        verifyVia: 'ODM Telehealth Services: Guidelines for Managed Care Entities and the ODM Telehealth Billing Guidelines, plus the member’s MCO — confirm which ABA codes are payable by telehealth and with which modifier.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Two layers. The statute covers ODM and its designees, including the MCOs: for requests submitted electronically, they must “respond to all prior authorization requests within forty-eight hours for urgent care services, or ten calendar days for any prior authorization request that is not for an urgent care service, of the time the request is received” (R.C. 5160.34). An incomplete request must get a reply naming “the specific additional information that is required.” Stricter rules now override the 10 days. For MCO members (most ABA families), OAC 5160-26-03.1 has required 7 calendar days standard and 48 hours expedited since 1/1/2026. For fee-for-service requests, the federal rule caps standard decisions at 7 calendar days and expedited at 72 hours from 1/1/2026 (42 CFR 440.230(e)). Together: 7 calendar days standard, 48 hours urgent. An adverse decision can be reconsidered: ODM decides “within ten calendar days of receipt,” or within 48 hours for urgent care services (OAC 5160-1-31). None of the rules read here sets an ABA reauthorization lead time.',
        status: 'verified',
        cites: [
          { title: 'R.C. 5160.34 — Ohio Medicaid prior authorization requirements', url: 'https://codes.ohio.gov/ohio-revised-code/section-5160.34' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes, from 1/1/2026 (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
          { title: 'OAC 5160-1-31 — Medicaid prior authorization (eff. 6/30/2024)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-31' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Ohio Medicaid pays last. OAC 5160-1-08: “The medicaid program must be the last payer to receive and adjudicate the claim,” and the provider must get the other insurer’s details from the family and “bill the insurance company prior to billing ODM.” Ask about other coverage at every visit, whether or not the Medicaid card shows it. ODM pays only after “reasonable measures”: a remittance from the other payer showing a valid reason for non-payment; three submissions within ninety days and no reply within ninety days of the last one; a partial payment with its remittance; or written proof from the other payer that the service is not covered. Valid reasons include “the service is not covered,” charges applied to the deductible or copays, and a benefit maximum reached. Payment “will not exceed the medicaid maximum payment for the service … less all third party payments.” Exception: “Medicaid pays before any TPL and medicare for preventive pediatric services identified in 42 C.F.R. 433.139.” Medicaid also pays before the children with medical handicaps program and the crime-victims reparations program. Neither 5160-1-08 nor the PA rule (5160-1-31) exempts a secondary Medicaid claim from Ohio Medicaid prior authorization.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-1-08 — Medicaid coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-08' },
          { title: 'OAC 5160-1-31 — Medicaid prior authorization (eff. 6/30/2024)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-31' },
        ],
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
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and none of the Ohio Medicaid MCO policies we could read states one. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force rule; otherwise a written coding determination from the member’s MCO (CareSource UM (800) 488-0134, Buckeye UM (800) 224-1991).',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'The per-day ceiling is a claim edit, not an ABA rule. Ohio’s claim-submission rule says claims “should be submitted pursuant to the national correct coding initiative” (OAC 5160-1-19(B)), and the CMS Medicaid NCCI practitioner MUE table active 10/1–12/31/2026 sets 97151 at 32 units, 97152 at 16, 97153 at 32, 97154 at 18, 97155 at 24, 97156 at 16, 97157 at 16, 97158 at 16, 0362T at 16 and 0373T at 32 units per date of service. No in-force Ohio ABA rule sets an hours-per-day or hours-per-week cap that we can read: codes.ohio.gov still returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-checked 10/25/2026) and ODM’s draft rewrite (ERF188422B, “DRAFT — NOT FOR FILING”) does not govern, so any weekly ceiling comes from the prior authorization itself. Managed care plans set their own limits — see each plan’s guide.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
          { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
        ],
      },
      noteSignature: {
        value: 'No state-level session-note signature rule could be verified. The plan-level standards are concrete: Optum’s Ohio Medicaid criteria require the clinician’s signature, date of signature and credentials on the service note, with the clinician credentialed to provide everything documented, evidence of clinical supervision where required, and an explicit indication when a service was delivered by telehealth; the initial individualized treatment plan must be signed and dated by the responsible staff member and the supervising clinician (or carry documentation of clinical supervision), and every review must be signed and dated by the staff member completing it and the supervising clinician. CareSource adds an anti-boilerplate rule — generic copy-pasted symptom language is not sufficient documentation — and, distinctively, requires treatment records to reach the plan before claims: claims are not accepted without accompanying treatment documentation. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force state rule; otherwise the member’s MCO documentation policy.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No state-level place-of-service rule for ABA could be verified. The boundary that is confirmed is the school one, from the managed-care side: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03, and Optum separately excludes ABA that is really a 1:1 aide delivered simultaneously during classroom instruction or a service covered under IDEA — while allowing school-based coordination, teacher training, meetings with school personnel and observation in the school setting. Buckeye adds an expectation of under 20 hours a week for children attending school full time. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
        verifyVia: 'Rules@Medicaid.Ohio.gov for the in-force state rule; the member’s MCO for POS codes it will accept on ABA claims.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. Optum’s Ohio Medicaid criteria (UnitedHealthcare Community Plan) say COBA providers “must be enrolled with Ohio Medicaid as Provider Type 19, Specialty Type 190” with an NPI for both the rendering and the group provider, and that a provider not enrolled with Medicaid needs a single case agreement. One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — Provider Stakeholder Office Hours: ABA proposed rule review (July 30, 2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/BH/provider/Presentations/7.30_ABA_Presentation.pdf' },
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Ohio Medicaid cover ABA therapy?', a: 'Yes — as adaptive behavior services for ASD under OAC 5160-34-02, with prior authorization on all covered ABA codes and medical-necessity reviews at baseline and every six months.' },
      { q: 'Does OhioRISE cover ABA?', a: 'No — ODM\'s Mixed Services Protocol assigns ABA claims to the member\'s Medicaid MCO (or FFS) even for OhioRISE-enrolled youth. Always identify the underlying MCO.' },
      { q: 'What does Ohio Medicaid pay for ABA?', a: 'No in-force schedule is published. ODM’s only ABA rate table is in its unfiled draft rule (ERF188422B): per 15-minute unit, 97153 at $16.04 (RBT), 97155 at $27.28 and 97151 at $30.49 at the COBA/BCBA tier, with lower BCaBA-tier amounts. MCOs pay their own contracted rates, which are not published.' },
      { q: 'Who can provide ABA under Ohio Medicaid?', a: 'Independent practitioners are COBAs (Ohio Board of Psychology, ORC 4783) or BCBAs/BCBA-Ds enrolled as ODM Provider Type 19, Specialty 190; BCaBAs and RBTs deliver under supervision.' },
      { q: 'Is Ohio Medicaid accepting new ABA providers?', a: 'There is no ABA enrollment moratorium we can cite. Behavior analysts (COBAs) are credentialed once, centrally, by ODM under OAC 5160-1-42, but you still contract with each MCO separately, and whether a plan\'s ABA panel is open is its own decision. Start MCO contracting while your ODM enrollment and credentialing are in process.' },
      { q: 'What does Ohio Medicaid pay for 97153?', a: 'There is no in-force published rate to quote. ODM’s main fee schedule (Appendix DD, revised 1/1/2026) has no ABA rows, and the ABA rule chapter 5160-34 is not in the Ohio Administrative Code. ODM’s only table is the appendix to its unfiled draft rule (ERF188422B), which lists 97153 at $16.04 per 15-minute unit (RBT) under a “current maximum payment amount” heading on pages marked “DRAFT - NOT YET FILED.” MCOs pay their own contracted rates and do not publish them. House Bill 453 would set MCO ABA rates at 100% of the fee-for-service rate for fiscal year 2027, but it is still in committee.' },
      { q: 'What is Ohio Medicaid’s timely filing limit for ABA claims?', a: '365 days from the date of service, including resubmissions of denied claims (OAC 5160-1-19). The Ohio Medicaid MCOs apply the same 365 days.' },
      { q: 'Does Ohio Medicaid require the referring or supervising provider on the claim?', a: 'Yes, when the service needs one: ODM denies claims that lack the NPI and legal name of the required rendering, supervising, ordering, referring or certifying provider, or where that provider has no active Medicaid agreement (OAC 5160-1-19(C)).' },
      { q: 'Does Ohio Medicaid require EVV for ABA?', a: 'No. OAC 5160-32-01 limits EVV to listed waiver services and state-plan home health, private duty nursing and RN visits; ABA is not included, and telehealth services are exempt.' },
    ],
  },

  'caresource-ohio': {
    slug: 'caresource-ohio',
    family: 'caresource',
    cardDesc: 'The strictest OH policy: named diagnostician specialties, ADOS/ADI-R/CARS-2, docs-before-claims.',
    assessmentPA: {
      value: 'Required — medical-necessity review on all ABA at baseline; assessments capped ~6–10 hrs per 6 months without justification',
      status: 'verified',
      cites: [
        { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
      ],
    },
    treatmentPA: {
      value: 'Required — 6-month cycles; treatment records must reach CareSource BEFORE claims are accepted',
      status: 'verified',
      cites: [
        { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 ASD from a child/adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician (ADOS/ADI-R/CARS-2)',
      status: 'verified',
      cites: [
        { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
      ],
    },
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
      {
        h2: 'CareSource Ohio ABA claims: filing deadline, payment clock, disputes and EVV',
        body: [
          'Filing deadline: claims and corrected claims “should be submitted within 365 days of the date of service or discharge.” Payment: unless the provider contract sets another schedule, CareSource must pay or deny 90% of clean claims within 21 calendar days of receipt, 99% within 60 calendar days and 100% of all claims within 90 calendar days.',
          'Claim disputes (any provider disagreement with a claim decision): “within 12 months from the date of service or 60 calendar days after the payment, denial or partial denial of a timely claim submission, whichever is later.” Appeals of medical-necessity decisions must be received within 60 calendar days of the denial.',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt.',
        ],
        cites: [
          { title: 'CareSource — Ohio Medicaid Provider Manual (OH-MED-P-1745200d)', url: 'https://www.caresource.com/documents/oh-provider-manual.pdf' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
        ],
      },
      {
        h2: 'Reauthorization: what a CareSource continuation request must contain',
        body: [
          'Continuation requests are due every six months, and a request after a temporary break (summer, vacation, a change in school hours) must be filed as a continuation, not a new initial request. MM-0028 (effective 9/1/2026) requires either (a) a persisting definitive ASD diagnosis with symptoms that will benefit from treatment in at least two settings, a treatment plan with “an updated progress report with assessment scores that note improvement and member response to treatment from baseline … using the same mode(s) of measurement utilized for baseline measurements” and a plan to step intensity down, and caregivers who are involved and progressing; or (b) where progress was inadequate within six months, the documented reasons and the changes made (techniques, caregiver training, time on targets, barriers, new co-existing disorders, revised goals). Discontinuation follows when there is no meaningful progress across two successive six-month periods on standardized assessments. Neither MM-0028 nor PY-1638 requires graphs — the requirement is comparable assessment scores against baseline — and PY-1638 pays telemedicine “in the same manner and subject to the same limits as in-person” delivery.',
        ],
        cites: [
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
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
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'CareSource Ohio — Updates & Announcements, Medicaid (provider notices archive)', url: 'https://www.caresource.com/oh/providers/tools-resources/updates-announcements/medicaid/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'CareSource sets the clearest recency rule in Ohio: where the diagnostic evaluation is more than 24 months old, a provider letter documenting DSM symptoms within the past year is required. Continuation requests must document progress against baseline using the same measurement tools, and a request filed after a temporary break in services (summer, vacation) must be filed as a continuation, not a new initial request.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      diagnosingProviders: {
        value: 'Narrower than the state framework: MM-0028 restricts the ASD diagnosis to a child or adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician — where the state rule accepts any licensed clinician qualified to diagnose autism. Screening referral packets against those four specialties at intake prevents the most common CareSource denial.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      diagnosticTools: {
        value: 'MM-0028 requires the diagnosis to rest on a standardized instrument, and names three: ADOS, ADI-R, or CARS-2.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      referral: {
        value:
          'No referral or physician order appears in CareSource\'s own ABA policy. OH MCD-MM-0028 (eff. 9/1/2026), read in full, lists what initiation needs: a definitive primary ASD diagnosis from a child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician; ADOS, ADI-R or CARS-2 results; and, if the evaluation is over 24 months old, a provider letter on DSM symptoms in the past year. It names no ordering or referring practitioner, no order form and no validity period. Ohio\'s ordering requirement (psychologist trained in autism, developmental pediatrician, or pediatric CNS/CNP) is in the commercial mandate at R.C. 3923.84, not Medicaid, and the in-force Medicaid ABA rule text could not be read. So whether CareSource will ask for a referral is a question for the plan. Ask its behavioral health UM line before the first request whether a PCP or diagnosing-provider referral must be attached.',
        status: 'unverified',
        cites: [
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
        verifyVia: 'CareSource Ohio behavioral health utilization management (provider portal or the number on the member ID card): "Do you require a referral or physician order for ABA, and from whom?" Rules@Medicaid.Ohio.gov or JCARR for the in-force OAC 5160-34-02.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Telehealth covers parent training and supervision. One-to-one ABA by telehealth is allowed only when medically necessary under a documented service-delivery plan.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      authTurnaround: {
        value:
          'CareSource’s Ohio Medicaid manual matches the rule: “Standard Pre-Service — 7 calendar days from receipt of the request,” with one extension of up to 14 calendar days for lack of information if the member asks. Urgent pre-service decisions come in “48 hours from receipt of request.” No ABA reauthorization lead time is published in the manual. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'CareSource — Ohio Medicaid Provider Manual', url: 'https://www.caresource.com/documents/oh-provider-manual.pdf' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'CareSource coordinates by subtracting “the primary payment from the lessor of the primary carrier allowable or the Medicaid allowable. If the member’s primary insurer pays a provider equal to or more than CareSource’s fee schedule for a covered service, CareSource will not pay the additional amount.” When CareSource is secondary, submit within 365 calendar days of the date of service. If a claim is denied for missing COB information, send the primary payer’s EOB within the rest of the timely-filing period, or within 90 calendar days of the primary EOB date if that period has passed. The manual does not say whether CareSource’s ABA authorization is still needed when a commercial plan pays first. Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'CareSource — Ohio Medicaid Provider Manual', url: 'https://www.caresource.com/documents/oh-provider-manual.pdf' },
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
        ],
        verifyVia: 'CareSource Provider Services: whether a CareSource ABA authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'OAC 4783-6-02 sets the Ohio supervision frame for COBAs: “The certified Ohio behavior analyst shall develop a supervision plan as a part of each client treatment plan,” naming every supervisee, with consultation before initiation and modification and periodic direct observation, and no fixed ratio. CareSource’s PY-1638 (eff. 9/1/2026) adds that “RBTs must obtain ongoing supervision for a minimum of 5% of the hours spent providing ABA services per month,” that RBT supervisors “must hold BCBA or BCaBA certification,” and that “Supervision documentation must be maintained for a minimum of 5 years following the termination of supervision.”',
        status: 'verified',
        cites: [
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'CareSource defers to the federal edit table: PY-1638 (eff. 9/1/2026) says “CareSource complies with the Centers for Medicare and Medicaid Services (CMS) medically unlikely edit (MUE) table. If CMS updates the MUE list, the update will take precedence over this policy.” The CMS Medicaid practitioner MUE table effective 10/1/2026 sets 97151 at 32, 97153 at 32, 97155 at 24 and 97156 at 16 units per date of service. Behavior identification assessments are “generally, not to exceed 6-10 hours every 6 months unless additional justification is provided,” and MM-0028 requires medical-necessity review “initially with a baseline and then every 6 months,” with titration or discontinuation when the member does not show meaningful progress “for 2 successive 6- month authorization periods.”',
        status: 'verified',
        cites: [
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'CMS — Medicaid NCCI MUE table, practitioner services (effective 10/1/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
        ],
      },
      noteSignature: {
        value: 'The operational standout in Ohio: treatment records must be submitted to CareSource prior to claim submission — "claims will not be accepted without accompanying treatment documentation." MM-0028 adds explicit anti-boilerplate requirements on progress notes: generic, copy-pasted symptom language is no longer sufficient documentation.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
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
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD-MM-0028 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-medical-mm-0028-20260901' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. CareSource’s own rules: PY-1638 (eff. 9/1/2026) requires billing “at the appropriate practitioner level (ie, modifiers)”, and says “CareSource will not reimburse H0036 if the provider is able to use designated ABA codes.” One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'CareSource — OH MCD reimbursement policy PY-1638 (eff. 9/1/2026)', url: 'https://www.caresource.com/documents/medicaid-oh-policy-reimburse-py-1638-20260901' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does CareSource Ohio cover ABA therapy?', a: 'Yes — under policy MM-0028 (eff. 9/1/2026) plus its companion reimbursement policy PY-1638, with medical-necessity review on all ABA at baseline and every 6 months. Its requirements are stricter than the state rule on diagnostician specialty, instruments, and documentation.' },
      { q: 'Who can diagnose autism for CareSource Ohio ABA?', a: 'A child/adolescent psychiatrist, psychologist, child neurologist, or developmental pediatrician, using ADOS, ADI-R, or CARS-2 — narrower than the state baseline.' },
      { q: 'Why did CareSource reject our claim?', a: 'A distinctive rule, now sited in reimbursement policy PY-1638: treatment documentation must be submitted before claims. Claims without accompanying treatment records are not accepted — check the documentation pipeline first.' },
      { q: 'Does CareSource Ohio still accept H0036 in lieu of ABA CPT codes?', a: 'Not as a blanket rule anymore. As of PY-1638 (eff. 9/1/2026), CareSource will not reimburse H0036 for ABA when a designated ABA CPT code is usable — confirm which code applies before billing.' },
      { q: 'What is CareSource Ohio’s timely filing limit for ABA claims?', a: '365 days from the date of service; claim disputes within 12 months of the date of service or 60 calendar days after the payment or denial, whichever is later (CareSource Ohio provider manual).' },
      { q: 'What documents does CareSource Ohio need to start ABA?', a: 'Under OH MCD-MM-0028 (eff. 9/1/2026): a definitive primary ASD diagnosis from a child and adolescent psychiatrist, psychologist, child neurologist or developmental pediatrician, with ADOS, ADI-R or CARS-2 results. If the evaluation is more than 24 months old, add a provider letter describing DSM symptoms present in the past year. Then a BCBA behavior assessment (generally 6 to 10 hours per six months). The initial treatment plan must be signed by the parent or guardian and the BCBA and include biopsychosocial history, medications and prescriber, school hours with any IEP or 504 plan (required for consideration), prior ABA history and all behavioral health diagnoses. Medical necessity is reviewed at the start and every six months.' },
      { q: 'Does CareSource Ohio require graphs for an ABA reauthorization?', a: 'No graph requirement appears in MM-0028 or PY-1638. Every six months the continuation needs an updated progress report with assessment scores showing change from baseline using the same measures, a plan to step intensity down, and evidence of caregiver involvement — or, if progress stalled, the reasons and the treatment changes.' },
    ],
  },

  'buckeye-health-plan': {
    slug: 'buckeye-health-plan',
    family: 'centene',
    cardDesc: 'In-network assessments PA-free; CP.BH.104 hour parameters (6/day, 30/wk) and school rules.',
    assessmentPA: {
      value: 'Not required in-network — 97151/97152 need PA for out-of-network only (plan form)',
      status: 'verified',
      cites: [
        { title: 'Buckeye — Autism Services PA Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — 97153–97158 via the Autism Services PA form with IDI/FBA, schedule, parent-training plan, IEP',
      status: 'verified',
      cites: [
        { title: 'Buckeye — Autism Services PA Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 autism diagnosis; CDE accepted within the past 5 years',
      status: 'verified',
      cites: [
        { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
      ],
    },
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
      {
        h2: 'Buckeye ABA claims: filing deadline, disputes and EVV',
        body: [
          'Filing deadline: “Providers will have 365 days to timely file a claim, including any timely filing exceptions, in accordance with Ohio Administrative Code (OAC) rule 5160-1-19”; unless the provider agreement says otherwise, clean claims (initial, corrected and voided) must be submitted within 365 days of the date of service. Claim disputes (any provider disagreement with a claim decision): “within 12 months from the date of service or 60 calendar days after the payment, denial or partial denial of a timely claim submission, whichever is later.” Pre-service provider appeals are due within 60 calendar days of the notice of adverse action.',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt.',
          'Payment clock: Buckeye’s 2026 provider manual defines a clean claim but prints no payment timeframe or check-run schedule, so the state contract standard governs: ODM’s managed care provider agreement (Rev. 12/2025, App. L §10) requires every Ohio MCO — unless the MCO and the provider agreed an alternative payment schedule in the provider contract — to pay or deny 90% of clean claims within 21 calendar days of receipt, 99% within 60 calendar days and 100% of all claims within 90 calendar days; behavioral health claims are measured as their own category, and the standard applies to network and out-of-network providers alike. The same agreement requires the MCO to accept claims for 365 calendar days from the date of service under OAC 5160-1-19 (App. K §5a).',
        ],
        cites: [
          { title: 'Buckeye Health Plan — Medicaid Provider Manual 2026 (amended 1/6/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/Manuals/Buckeye_Provider%20Manual_BHP%20MEDICAID%20Provider%20Manual%202026_FINAL_amd%201.6.26_R.pdf' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
        ],
      },
      {
        h2: 'Reauthorization: what Buckeye’s continuation review requires (graphs on behavior goals)',
        body: [
          'CP.BH.104 (last revised 02/26) continues ABA when behavior concerns are not worsened by treatment and all of the following are documented: an updated behavior assessment at least every six months that meets the initial-assessment standard — including results “to include visual representations [graphs, tables, grids] as appropriate”; the percentage of scheduled sessions completed and caregiver participation, with justification when attendance falls below 80% of authorized hours; two to four performance-based caregiver training goals with baseline data and mastery criteria and documented family participation (ideally at least two hours a month); documented coordination of care with schools and other therapists; and an updated treatment plan at least every six months whose behavior-reduction goals include “baseline data, operational definition/topography of behavior, treatment strategies and graphs,” plus a titration plan with progress over the prior authorization period. So Buckeye expects graphs on behavior-reduction goals and graphs, tables or grids in the assessment results.',
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
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'Buckeye — Medicaid Provider Manual 2026 (amended 1/6/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/Manuals/Buckeye_Provider%20Manual_BHP%20MEDICAID%20Provider%20Manual%202026_FINAL_amd%201.6.26_R.pdf' },
      { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
      { title: 'Buckeye Health Plan — Provider Update Newsletter (running log of provider notices)', url: 'https://www.buckeyehealthplan.com/providers/provider-communications/provider-update-newsletter.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'Buckeye accepts the comprehensive diagnostic evaluation if it was conducted within the past five years — the most generous window of the Ohio plans, and worth knowing against CareSource’s 24-month letter trigger.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Buckeye’s CP.BH.104: “The documented diagnosis of ASD is established by a licensed physician, psychologist, or other licensed professional with specialized training in diagnosis and treatment of ASD, or a provider otherwise authorized under state law/regulation.” No in-force Ohio Medicaid rule adds a credential list (OAC 5160-34-02 is not on codes.ohio.gov).',
        status: 'verified',
        cites: [
          { title: 'Buckeye Health Plan — Clinical Policy CP.BH.104, Applied Behavior Analysis', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      referral: {
        value: 'No referral or service order is required, but the treatment package is prescriptive: treatment PA (97153–97158) runs through Buckeye’s Autism Services Prior Authorization Request Form, which wants the individual diagnostic interview or FBA, objective testing results, a description of coordination with other services, the proposed schedule with the rendering provider type per session, a parent-training plan, and a copy of the IEP or IFSP — plus an HSPP-or-physician attestation of active participation in the treatment plan. In-network assessment codes 97151 and 97152 need no prior authorization at all; PA applies out-of-network only.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      telehealth: {
        value:
          'Buckeye’s ABA policy (CP.BH.104, last revised 02/26) allows telehealth as a modality: services “may be provided in various settings (e.g., home, clinic, school, community) and modalities (e.g., in-person, telehealth).” It quotes the CASP telehealth parameters that telehealth “is not intended to replace in person service” but to supplement it, says modality should be chosen on the member’s needs, caregiver availability and environmental support, and tells providers to “refer to respective state allowances for telehealth services.” It names no ABA codes. ODM’s 2026 Telehealth Billing Guidelines list no ABA code as telehealth-eligible, and say the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.” Before billing a remote 97151 or 97155, confirm with Buckeye which codes, modifier and place of service it accepts.',
        status: 'verified',
        cites: [{ title: 'Buckeye Health Plan — CP.BH.104 Applied Behavior Analysis (last revised 02/26)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' }, { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' }],
      },
      authTurnaround: {
        value:
          'Buckeye’s 2026 Medicaid manual: standard (non-urgent pre-service) determinations are made “no later than 7 calendar days after Buckeye receives the request for service.” Expedited determinations: “no later than 48 hours after Buckeye receives the request,” with provider attestation of urgency. Lead time: “Standard prior authorization requests should be submitted for medical necessity review at least five (5) business days before the scheduled service delivery date or as soon as the need for service is identified.” No separate ABA reauthorization lead time is published. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'Buckeye Health Plan — Medicaid Provider Manual 2026 (amended 1/6/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/Manuals/Buckeye_Provider%20Manual_BHP%20MEDICAID%20Provider%20Manual%202026_FINAL_amd%201.6.26_R.pdf' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Buckeye’s 2026 manual publishes no COB procedure of its own beyond asking providers to “obtain and report to Buckeye information regarding other insurance coverage,” so the state MCO rule governs. Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
          { title: 'Buckeye Health Plan — Medicaid Provider Manual 2026 (amended 1/6/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/Manuals/Buckeye_Provider%20Manual_BHP%20MEDICAID%20Provider%20Manual%202026_FINAL_amd%201.6.26_R.pdf' },
        ],
        verifyVia: 'Buckeye Provider Services: whether a Buckeye ABA authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Buckeye publishes a numeric floor the state rule does not: protocol modification (97155) should run at least 2 hours a week or 10% of direct hours, whichever is greater, capped at 20% unless justified. The OAC 4783-6-02 COBA supervision-plan requirements still apply underneath.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'CP.BH.104 sets the numbers: treatment should not exceed 6 hours a day and 30 hours a week without detailed clinical justification — severity or escalation criteria, with BCBA and guardian signatures — and the policy expects under 20 hours a week for children attending school full time, with comprehensive ABA framed as 30–40 hours a week for the cases that warrant it.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
        ],
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'CP.BH.104 ties intensity to school attendance rather than naming payable settings: under 20 hours a week is expected for children attending school full time, and the treatment package requires a copy of the IEP or IFSP. The Ohio Medicaid School Program boundary still applies — the MCO is not responsible for services provided through MSP.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
          { title: 'Buckeye — CP.BH.104 Applied Behavior Analysis (rev. 2/2026)', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/policies/clinical-policies/CP.BH.104.pdf' },
          { title: 'Buckeye — Autism Services Prior Authorization Request Form', url: 'https://www.buckeyehealthplan.com/content/dam/centene/Buckeye/WebsitePDFs/BehavioralHealthEducation/Medicaid-ABA-OTR-P-Form-508-6-28-23.pdf' },
        ],
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. The plan publishes no ABA billing-provider rule of its own that we could read. One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Buckeye Health Plan cover ABA therapy?', a: 'Yes — under Centene\'s CP.BH.104 policy. In-network assessments (97151, 97152) need no prior authorization; treatment codes require PA via the Autism Services form.' },
      { q: 'What are Buckeye\'s ABA hour limits?', a: 'No more than 6 hours/day and 30 hours/week without detailed clinical justification, and under 20 hours/week expected for full-time students. Protocol modification runs 2 hrs/week or 10% of direct hours, capped at 20% unless justified.' },
      { q: 'How current must the autism diagnosis be for Buckeye?', a: 'The comprehensive diagnostic evaluation is accepted if conducted within the past 5 years.' },
      { q: 'What is Buckeye’s timely filing limit for ABA claims?', a: '365 days from the date of service, per OAC 5160-1-19; claim disputes within 12 months of the date of service or 60 days after the payment or denial, whichever is later (Buckeye provider manual 2026).' },
      { q: 'How fast does Buckeye pay a clean ABA claim?', a: 'Buckeye’s manual prints no payment timeframe, so ODM’s MCO contract standard applies unless your provider contract sets another schedule: 90% of clean claims paid or denied within 21 calendar days of receipt, 99% within 60 and all claims within 90. No weekly submission cutoff is published.' },
      { q: 'Does Buckeye require graphs for an ABA reauthorization?', a: 'Yes for behavior-reduction goals: CP.BH.104 requires the updated treatment plan’s behavior-reduction goals to include baseline data, definitions, strategies and graphs, and the six-monthly behavior assessment to present results with graphs, tables or grids as appropriate. Attendance below 80% of authorized hours must be justified.' },
    ],
  },

  'molina-healthcare-ohio': {
    slug: 'molina-healthcare-ohio',
    assessmentPA: {
      value: 'Required per the plan’s PA list under the OAC 5160-34 framework; the code-level list is not publicly retrievable — confirm in Availity Essentials, the sole PA channel since 1/1/2026',
      status: 'unverified',
      verifyVia: 'Molina Healthcare of Ohio\'s Medicaid prior-authorization code list — portal-gated, and molinahealthcare.com 403s to automated retrieval. Pull it from Availity Essentials (Molina\'s sole PA channel in Ohio since 1/1/2026) or via carelu.com/sources; the state floor behind it is OAC 5160-34-02, itself unreachable.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — submitted through Availity Essentials only; Molina discontinued fax PA submissions in Ohio effective 1/1/2026',
      status: 'unverified',
      verifyVia: 'Molina Healthcare of Ohio\'s Medicaid prior-authorization code list and behavioral-health PA guidance, via Availity Essentials or carelu.com/sources — the plan\'s public site blocks automated retrieval.',
      blocker: 'document',
    },
    family: 'molina',
    cardDesc: 'Tracks state ABA policy; Availity-only PA since 1/2026 — key documents best pulled via portal.',
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
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
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization information (access via portal; site blocks automated retrieval)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
      },
      {
        h2: 'Does Molina require EVV for ABA in Ohio?',
        body: [
          'No. Ohio’s EVV rule, OAC 5160-32-01, lists the services subject to EVV — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities, Molina included, responsible for applying it. ABA is not on the list, and services delivered by telehealth are exempt.',
        ],
        cites: [
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
        ],
      },
      {
        h2: 'Molina Ohio ABA claims: filing deadline and payment clock',
        body: [
          'Molina’s own Ohio provider manual could not be retrieved this review (the manual page no longer links a readable PDF), so these are the state contract terms every Ohio MCO, Molina included, signs: ODM’s managed care provider agreement (Rev. 12/2025, App. L §10) requires every Ohio MCO — unless the MCO and the provider agreed an alternative payment schedule in the provider contract — to pay or deny 90% of clean claims within 21 calendar days of receipt, 99% within 60 calendar days and 100% of all claims within 90 calendar days; behavioral health claims are measured as their own category, and the standard applies to network and out-of-network providers alike. The same agreement requires the MCO to accept claims for 365 calendar days from the date of service under OAC 5160-1-19 (App. K §5a). Under OAC 5160-1-19 a denied claim resubmitted for payment has the same 365 days from the date of service, and a claim delayed by a third-party payer’s recovery is timely within 180 days of that recovery. Your Molina provider contract can set a different payment schedule, and Molina may publish its own corrected-claim and secondary-claim windows — confirm them with Molina before relying on the state terms.',
        ],
        cites: [
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
          { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
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
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
      { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
      { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
      { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
      { title: 'Molina Healthcare of Ohio — Provider communications (newsletters and bulletins archive)', url: 'https://www.molinahealthcare.com/providers/oh/communications' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'No in-force Ohio Medicaid rule names who may diagnose ASD for ABA: OAC 5160-34-02 is not on codes.ohio.gov, and ODM’s unfiled draft defines a comprehensive diagnostic evaluation but names no diagnosing credential. The plan publishes no diagnosing-credential rule of its own that we could read.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
        verifyVia: 'Plan utilization management / provider services: ask which credentials the plan accepts for the ASD diagnosis behind an ABA request.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      referral: {
        value: 'No referral or service order requirement is published, and Molina has no distinct Ohio ABA clinical policy — expect ODM’s general rules (the draft OAC 5160-34 ABA rules are not in force). The plan-specific fact that matters is the channel: effective January 1, 2026 Molina discontinued fax prior-authorization submissions in Ohio, making Availity Essentials the sole authorization channel. Because Molina’s public site blocks automated access, confirm the current PA code list inside Availity rather than relying on cached summaries.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found. ODM’s 2026 Telehealth Billing Guidelines (fee-for-service, under OAC 5160-1-18) list no ABA code — 97151–97158, 0362T, 0373T — as telehealth-eligible and do not name behavior analysts among eligible telehealth practitioners, while saying the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.” So remote assessment (97151) or supervision (97155) is not established in any document we could read for this plan; ask before scheduling it.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' }, { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' }],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Molina’s 2026 Ohio Medicaid manual: “Standard requests must be made as soon as medically indicated, within a maximum of 7 calendar days after receipt of the request.” Expedited requests are decided “within 48 hours (including weekends and holidays) following receipt of the validated request.” No ABA reauthorization lead time is published. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Ohio — 2026 Medicaid Provider Manual (March 2026 addendum)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/oh/medicaid/manual/MHO-Medicaid-2026-Manual-508.pdf' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Molina’s manual: “Medicaid is the payer of last resort. Commercial, private and governmental carriers must be billed prior to billing Molina … with the exception of EPSDT/Healthchek Services. EPSDT services are processed as primary and then Molina follows the Third Party Liability process.” Primary carrier payment information is required on the claim. Two of Molina’s listed “extenuating circumstances” let a provider file a clinical claim dispute without prior authorization: a retroactive COB change that makes Molina primary, and a service that “is not an included benefit in the primary insurance coverage.” The manual does not say whether ABA for a child counts as an EPSDT/Healthchek service for the pay-first exception. Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of Ohio — 2026 Medicaid Provider Manual (March 2026 addendum)', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/oh/medicaid/manual/MHO-Medicaid-2026-Manual-508.pdf' },
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
        ],
        verifyVia: 'Molina Provider Services (855-322-4079): whether ABA claims for a child with commercial coverage are paid first under the EPSDT/Healthchek exception, and whether a Molina authorization is needed when the commercial plan pays.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework, which sets no fixed ratio: OAC 4783-6-02 requires the COBA to write a supervision plan into each client’s treatment plan, consult before plan initiation and modification, and observe directly on a periodic basis, with frequency left to documented clinical judgment and assessment, plan development and efficacy review non-delegable. No plan-specific numeric ratio was found for this MCO — note that other Ohio plans do publish one (Optum 1–2 hours per 10 direct hours weekly; Buckeye 97155 at 10–20% of direct hours).',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Molina publishes no Ohio ABA per-day unit table we could find (its current Ohio provider manual could not be retrieved — the manual page no longer links a readable PDF). The state rule it works under: ODM’s managed care provider agreement requires every MCO to “implement claims edits (e.g., … National Correct Coding Initiative [NCCI]) at the direction of ODM” (App. K §5c), and OAC 5160-1-19(B) has claims submitted pursuant to NCCI. The CMS Medicaid NCCI practitioner MUE table active 10/1–12/31/2026 sets 97151 at 32 units, 97152 at 16, 97153 at 32, 97154 at 18, 97155 at 24, 97156 at 16, 97157 at 16, 97158 at 16, 0362T at 16 and 0373T at 32 units per date of service. Those are claim edits; the weekly ceiling is whatever the prior authorization approves.',
        status: 'unverified',
        cites: [
          { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
          { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
        ],
        verifyVia: 'Molina Ohio provider services (number on the member card) or the Availity portal: ask whether Molina applies any ABA unit limit beyond the Medicaid NCCI MUEs and whether units are authorized per week.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Molina OH — prior authorization page (verify via portal)', url: 'https://www.molinahealthcare.com/members/oh/en-US/mem/medicaid/overvw/care/prior-authorizations.aspx' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. The plan publishes no ABA billing-provider rule of its own that we could read. One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of Ohio cover ABA therapy?', a: 'Yes — under the Ohio Medicaid framework (OAC 5160-34), with prior authorization required on ABA services. No distinct Molina clinical policy layers on top.' },
      { q: 'How do I submit an ABA authorization to Molina Ohio?', a: 'Through Availity Essentials — Molina discontinued fax PA submissions in Ohio effective January 1, 2026.' },
      { q: 'What is Molina Ohio’s timely filing limit and payment time for ABA claims?', a: 'ODM’s MCO contract requires Molina to accept claims for 365 calendar days from the date of service and to pay or deny 90% of clean claims within 21 calendar days, 99% within 60 and all within 90, unless your provider contract sets another schedule. Molina’s own manual could not be read, so confirm its corrected-claim and secondary-claim windows with Molina.' },
    ],
  },

  'anthem-ohio-medicaid': {
    slug: 'anthem-ohio-medicaid',
    assessmentPA: {
      value: 'Not published — the assessment-versus-treatment PA split is not stated for Ohio Medicaid; run the codes through the PA lookup tool at providers.anthem.com/oh per case and submit via Availity Essentials / Interactive Care Reviewer',
      status: 'unverified',
      verifyVia: 'Anthem\'s Ohio Medicaid PA lookup tool at providers.anthem.com/oh, per code and per member, with the answer taken in writing before submitting through Availity Essentials / Interactive Care Reviewer. Anthem publishes no assessment-versus-treatment PA split for Ohio Medicaid, so this is settled case by case, not by a document.',
      blocker: 'per-case',
    },
    family: 'anthem',
    cardDesc: 'CG-BEH-02 adopted on top of the state rule; Availity/ICR, EPSDT framing in the provider manual.',
    treatmentPA: {
      value: 'Required — UM requests via Availity Essentials / Interactive Care Reviewer',
      status: 'unverified',
      verifyVia: 'Anthem OH Medicaid provider manual + the plan\'s Clinical UM Guidelines list — neither states the ABA authorization span or code set; request the current behavioral-health UM guidance from Anthem provider services or via carelu.com/sources.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
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
      { label: 'Hour parameters', value: 'Not published for Anthem Ohio Medicaid — confirm with Anthem UM' },
      { label: 'EPSDT', value: 'Under-21 services may exceed adult limits when medically necessary' },
      { label: 'OhioRISE', value: 'Inpatient psych routes to OhioRISE — ABA stays with Anthem' },
    ],
    sections: [
      {
        h2: 'How Anthem administers the benefit',
        body: [
          'Anthem\'s Ohio Medicaid Clinical UM Guidelines list confirms CG-BEH-02 (and CG-BEH-15 for activity therapy) as the adopted criteria for adaptive behavioral treatment, layered on ODM’s general rules (the draft OAC 5160-34 ABA rules are not in force). No hour parameters (weekly ceiling, protocol-modification ratio) could be sourced to a current Anthem Ohio document, and the Ohio-specific published delta is thinner than at CareSource or Buckeye, so confirm hour rules with Anthem UM or the PA lookup tool at providers.anthem.com/oh before finalizing a request. UM submissions run through Availity Essentials\' Interactive Care Reviewer, per the October 2025 provider manual, which also confirms the EPSDT framing and that under-21 inpatient psychiatric care routes to OhioRISE while ABA remains Anthem\'s responsibility.',
        ],
        cites: [
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
      {
        h2: 'Anthem Ohio Medicaid ABA claims: filing deadline, taxonomy, disputes and EVV',
        body: [
          'Filing deadline: “Providers will have 365 days to timely file a claim, including any timely filing exceptions, in accordance with Ohio Administrative Code (OAC) rule 5160-1-19”; when other insurance is primary, the clock runs from the primary plan’s explanation of payment. All claims are electronic.',
          'Taxonomy: claims must show the billing provider’s name, address and “taxonomy code, as certified with Ohio Medicaid,” and the rendering provider’s NPI and taxonomy code as certified with Ohio Medicaid; missing or invalid numbers “may result in nonpayment.”',
          'Disputes and appeals: a claim reconsideration filed more than 365 calendar days from the date of service or 60 calendar days from the EOP, whichever is later, is untimely. Utilization-management denials: reconsideration within 30 calendar days, peer-to-peer within 7, and a provider appeal within 60 calendar days of the initial determination.',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt.',
          'Payment clock: “Anthem will make every effort to finalize a clean electronic claim submission within 21 calendar days from the date the claim is received.” The contract floor behind that: ODM’s managed care provider agreement (Rev. 12/2025, App. L §10) requires every Ohio MCO — unless the MCO and the provider agreed an alternative payment schedule in the provider contract — to pay or deny 90% of clean claims within 21 calendar days of receipt, 99% within 60 calendar days and 100% of all claims within 90 calendar days; behavioral health claims are measured as their own category, and the standard applies to network and out-of-network providers alike. The same agreement requires the MCO to accept claims for 365 calendar days from the date of service under OAC 5160-1-19 (App. K §5a). Corrections Anthem requests must come back as a corrected claim through ODM’s fiscal intermediary within 365 days from the date of service, and when other insurance pays first the 365-day clock runs from the other carrier’s explanation of payment — Anthem needs the primary carrier’s remittance advice or denial letter with the claim.',
        ],
        cites: [
          { title: 'Anthem Blue Cross and Blue Shield — Ohio Medicaid Managed Care Provider Manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'PA lookup check', desc: 'The assessment-vs-treatment PA split isn\'t published — run the codes through the lookup tool per case.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'Comprehensive evaluation per the state baseline.' },
      { title: 'Requested hours + justification', desc: 'Frame requested hours against severity and history; Anthem Ohio publishes no hour parameters of its own, so ask UM what it applies.' },
      { title: 'OhioRISE status', desc: 'Psychiatric services may route to OhioRISE, but ABA bills to Anthem — keep the paths straight.' },
    ],
    sources: [
      { title: 'Anthem OH Medicaid — Clinical UM Guidelines list', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
      { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
      { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
      { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
      { title: 'Anthem Ohio — Provider News (index of articles and monthly newsletters, Medicaid and commercial)', url: 'https://providernews.anthem.com/ohio' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No state-level age bound could be verified, but Anthem’s Ohio Medicaid provider manual (10/2025) frames ASD services for members under 21 squarely under EPSDT: medically necessary services can exceed adult plan limits. Under-21 inpatient psychiatric care routes to OhioRISE while ABA remains Anthem’s responsibility.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'No in-force Ohio Medicaid rule names who may diagnose ASD for ABA: OAC 5160-34-02 is not on codes.ohio.gov, and ODM’s unfiled draft defines a comprehensive diagnostic evaluation but names no diagnosing credential. The plan publishes no diagnosing-credential rule of its own that we could read.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
        verifyVia: 'Plan utilization management / provider services: ask which credentials the plan accepts for the ASD diagnosis behind an ABA request.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      referral: {
        value: 'No referral or service order requirement is published on the Medicaid side. Anthem adopts Clinical UM Guideline CG-BEH-02 (Adaptive Behavioral Treatment), with CG-BEH-15 for activity therapy, on top of ODM’s general rules (the draft OAC 5160-34 ABA rules are not in force), and utilization-management requests run through Availity Essentials’ Interactive Care Reviewer. The assessment-versus-treatment PA split is not published — run the codes through the PA lookup tool at providers.anthem.com/oh per case.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found. ODM’s 2026 Telehealth Billing Guidelines (fee-for-service, under OAC 5160-1-18) list no ABA code — 97151–97158, 0362T, 0373T — as telehealth-eligible and do not name behavior analysts among eligible telehealth practitioners, while saying the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.” So remote assessment (97151) or supervision (97155) is not established in any document we could read for this plan; ask before scheduling it.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' }, { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' }],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Anthem’s Ohio Medicaid manual, citing OAC 5160-26-03.1 and R.C. 5160.34: “For non-urgent pre-service requests: 7 calendar days. For urgent pre-service requests: 48 hours,” both counted from receipt of the request. If Anthem decides a request marked urgent is not urgent, it becomes an elective request and the provider is told. No ABA reauthorization lead time is published. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross and Blue Shield — Ohio Medicaid Managed Care Provider Manual', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Anthem is explicit that its own PA drops away on secondary claims: “No authorization is required for coordination of benefit (COB) claims.” Bill the primary carrier first, then send Anthem a claim for total billed charges with the primary carrier’s remittance advice, or a third-party letter explaining the denial. COB claims without one of these “will be mailed back.” Timely filing runs from the date of the other carrier’s explanation of payment (the manual’s table also says within 365 days of the date of service). Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross and Blue Shield — Ohio Medicaid Managed Care Provider Manual', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework (OAC 4783-6-02 COBA supervision plan, consultation before initiation and modification, periodic direct observation, no fixed ratio). No Anthem Ohio document we could read adds a protocol-modification or supervision ratio of its own, so none is stated here — confirm with Anthem UM before relying on any ratio.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Anthem’s Ohio Medicaid provider manual (10/2025) publishes no ABA per-day unit table, and its Clinical UM Guidelines list only names CG-BEH-02 as the adopted criteria. The state rule it works under: ODM’s managed care provider agreement requires every MCO to “implement claims edits (e.g., … National Correct Coding Initiative [NCCI]) at the direction of ODM” (App. K §5c), and OAC 5160-1-19(B) has claims submitted pursuant to NCCI. The CMS Medicaid NCCI practitioner MUE table active 10/1–12/31/2026 sets 97151 at 32 units, 97152 at 16, 97153 at 32, 97154 at 18, 97155 at 24, 97156 at 16, 97157 at 16, 97158 at 16, 0362T at 16 and 0373T at 32 units per date of service. Those are claim edits; the weekly ceiling is whatever the prior authorization approves.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
          { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
        ],
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Anthem OH Medicaid — Clinical UM Guidelines list (CG-BEH-02)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_FEB23CUMG.pdf' },
          { title: 'Anthem OH Medicaid — provider manual (10/2025)', url: 'https://providers.anthem.com/docs/gpp/OH_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. The plan publishes no ABA billing-provider rule of its own that we could read. One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Anthem Ohio Medicaid cover ABA therapy?', a: 'Yes — under its adopted CG-BEH-02 adaptive behavioral treatment guideline on top of OAC 5160-34, submitted via Availity\'s Interactive Care Reviewer, with EPSDT protections for under-21 members.' },
      { q: 'Does OhioRISE change anything for Anthem ABA members?', a: 'Inpatient psychiatric care for under-21s routes to OhioRISE, but ABA always stays with Anthem (per ODM\'s mixed-services protocol) — bill the MCO, not OhioRISE.' },
      { q: 'Does Anthem Ohio Medicaid require taxonomy on ABA claims?', a: 'Yes. Show the billing and rendering providers’ taxonomy codes as certified with Ohio Medicaid; missing or invalid numbers may result in nonpayment (Anthem Ohio Medicaid provider manual).' },
      { q: 'How fast does Anthem Ohio Medicaid pay a clean ABA claim?', a: 'Anthem says it makes every effort to finalize a clean electronic claim within 21 calendar days of receipt; ODM’s MCO contract requires 90% of clean claims within 21 calendar days, 99% within 60 and all claims within 90, unless your provider contract sets another schedule. Secondary (COB) claims are due within 365 days counted from the primary carrier’s explanation of payment.' },
    ],
  },

  'unitedhealthcare-community-plan-ohio': {
    slug: 'unitedhealthcare-community-plan-ohio',
    family: 'unitedhealthcare',
    cardDesc: 'Optum\'s OH supplemental criteria: 80% utilization trigger, tool lists, Provider Type 19 detail.',
    assessmentPA: {
      value: 'Per the state rule — Optum\'s OH criteria defer to OAC for practitioner and PA requirements',
      status: 'unverified',
      cites: [
        { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
      ],
      verifyVia: 'OAC 5160-34-02 — Optum\'s Ohio Medicaid criteria defer to the state rule for practitioner and PA requirements, but that rule does not exist in force: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) and the chapter is missing from the Title 5160 index. Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — reviews per auth period; utilization below 80% over 2 weeks triggers barrier documentation',
      status: 'verified',
      cites: [
        { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD with a validated screener AND a formal tool (ADOS/ADI-R/DISCO)',
      status: 'verified',
      cites: [
        { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
      ],
    },
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
      {
        h2: 'UnitedHealthcare Community Plan of Ohio ABA claims: filing deadline, disputes and EVV',
        body: [
          'Filing deadline: “Providers have 365 days to file a claim, including any timely filing exceptions, in accordance with Ohio Administrative Code (OAC) rule 5160-1-19.” Claim disputes (any provider disagreement with a claim decision): “within 12 months from the date of service or 60 calendar days after the payment, denial or partial denial of a timely claim submission, whichever is later.” A provider appeal of a denied prior authorization may be filed within 60 calendar days of the initial notice of action; UnitedHealthcare answers within 10 calendar days (48 hours if urgent).',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt.',
          'Payment clock: the 2026 Ohio care provider manual prints no payment timeframe or check-run schedule, so the state contract standard governs: ODM’s managed care provider agreement (Rev. 12/2025, App. L §10) requires every Ohio MCO — unless the MCO and the provider agreed an alternative payment schedule in the provider contract — to pay or deny 90% of clean claims within 21 calendar days of receipt, 99% within 60 calendar days and 100% of all claims within 90 calendar days; behavioral health claims are measured as their own category, and the standard applies to network and out-of-network providers alike. The same agreement requires the MCO to accept claims for 365 calendar days from the date of service under OAC 5160-1-19 (App. K §5a). When other coverage is primary, bill it first and submit its explanation of benefits or remittance advice with the claim; timeliness is counted from the date on the other carrier’s correspondence.',
        ],
        cites: [
          { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Ohio Medicaid', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/OH-Care-Provider-Manual.pdf' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
        ],
      },
      {
        h2: 'Reauthorization: what Optum’s Ohio Medicaid continued-service review requires',
        body: [
          'Optum’s Ohio Medicaid supplemental clinical criteria (effective 7/1/2026) require, at each continued-treatment review, that progress be “assessed and documented for each targeted symptom and behavior … including the same modes of measurement that were utilized for baseline measurement,” expressed as rates and percentages of mastered programs and targets, change scores on outcome measures, updated standardized adaptive measures and change scores on skills-based assessments, with progress also documented on a norm-referenced adaptive-functioning assessment; caregiver involvement where applicable; and, where progress stalled within a six-month period, the reasons and the treatment changes. The criteria ask for comparable measured data, not graphs as such.',
        ],
        cites: [
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
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
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
      { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Ohio Medicaid', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/OH-Care-Provider-Manual.pdf' },
      { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
      { title: 'UnitedHealthcare Community Plan of Ohio — State news, bulletins and alerts (provider home page list)', url: 'https://www.uhcprovider.com/en/health-plans-by-state/ohio-health-plans/oh-comm-plan-home.html' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'No recency requirement on the ASD diagnosis itself. The clocks run on review: inadequate or no demonstrable progress within a 6-month period, or goals unmet within the estimated timeframes, triggers assessment of the reasons and modification of interventions — and continued-service review specifically addresses utilization of prior-authorization-period hours below 80% over a 2-week period, which requires documented barriers and a plan to address them.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Optum’s Ohio Medicaid supplemental criteria (eff. 7/1/2026) defer to the Ohio Administrative Code on practitioner requirements and restate the bar: a valid diagnosis of ASD, or other applicable diagnosis as required by governing laws, must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such a diagnosis according to DSM-5-TR criteria.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Stricter than the state framework, and the strictest instrument rule of the Ohio plans: the DSM-5 diagnosis and severity level must be confirmed and documented by the diagnosing clinician using at least one clinically validated screening tool AND one formal diagnostic tool. Named first-level screeners include the Autism Behavior Checklist, CHAT / M-CHAT, CSBS-DP-IT Checklist, Autism Screening Questionnaire, Autism Quotient and Childhood Autism Screening Test; second-level screeners include CARS and CARS-2, RITA-T and STAT; formal diagnostic tools are ADI-R, ADOS and ADOS-2, and DISCO. Treatment intensity must then be set from a baseline measured with a validated tool from a named list including ATEC, VB-MAPP, ABLLS and ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland and CFQL-2.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      referral: {
        value: 'Optum’s Ohio criteria defer to the Ohio Administrative Code for the list of eligible practitioners and prior-authorization requirements, and add no separate referral or physician order. A provider not enrolled with Ohio Medicaid needs a single case agreement before serving members. Everything runs through Provider Express and the Ohio Medicaid ABA Program page.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      telehealth: {
        value: 'ABA is available through telehealth under the guidelines effective June 2018, with three conditions Optum states explicitly: the member needs certain basic and advanced prerequisite skills to benefit from telehealth, the caregiver must be willing and able to support it, and the provider must complete a thorough assessment of the environment and address any safety concerns. The service note must indicate when a service was provided via telehealth. Optum points providers to the CASP telehealth practice parameters for additional guidance. Optum, which manages the behavioral benefit, adds a claim rule across all lines of business including Medicaid/Community Plan: every behavioral health telehealth claim must carry POS 02 (member not at home) or POS 10 (member at home), and claims billed with only a telehealth modifier are not reimbursed (Telehealth Billing Quick Reference Guide, September 2025).',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'UHC’s 2026 Ohio Medicaid manual: UHC “responds to prior authorization requests: Urgent services – within 48 hours … Nonurgent services – within 7 calendar days. This time period begins once we receive the request with all required information.” So an incomplete packet delays the start. The same manual’s UM table lists older figures (non-urgent “within 5 working days of receipt of medical record information required but no longer than 14 calendar days”; urgent “within 3 days”). The state rule of 7 days and 48 hours governs. No ABA reauthorization lead time is published. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Ohio Medicaid', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/OH-Care-Provider-Manual.pdf' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'UHC’s manual: “UnitedHealthcare Community Plan is, by law, the payer of last resort for eligible members. Therefore, you must bill and obtain an EOB from any other insurance or health care coverage resource before billing.” Attach a complete EOB that shows the paid amount or denial reason. The manual does not say whether UHC’s authorization is still needed when a commercial plan pays first. Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Ohio Medicaid', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/OH-Care-Provider-Manual.pdf' },
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
        ],
        verifyVia: 'UHC Community Plan of Ohio Provider Services (1-800-600-9007): whether a UHC/Optum ABA authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards of care, direct case supervision is required at 1–2 hours for every 10 hours of direct treatment per week. Technicians must be under the applicable supervision of a BCBA or licensed behavioral health clinician and should be RBTs or another appropriately certified behavior technician as allowable by state mandate; Optum notes it is not recommended that parents serve in an RBT role. The OAC 4783-6-02 COBA supervision-plan requirements apply underneath.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Ohio Administrative Code — rule 4783-6-02 (COBA supervision responsibilities)', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-6-02' },
        ],
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No numeric hour cap — the number of service hours requested must be justified by the member’s documented clinical need against level of impairment, symptom severity, treatment history and response. The operative review trigger runs the other way: utilization below 80% of authorized hours over any two-week period is scrutinised at continued-service review and requires documented barriers, which makes honest scheduling a review-survival issue.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      noteSignature: {
        value: 'Optum sets a concrete standard: the service note carries the clinician’s signature, date of signature and credentials, with the clinician credentialed to provide everything documented, plus evidence of clinical supervision as required and an explicit indication when a service was provided via telehealth. Documentation may be narrative or structured (checklists) provided all required elements are captured. The initial individualized treatment plan must be signed and dated by the responsible staff member and the supervising clinician, or carry documentation of clinical supervision, and every review must be signed and dated by the staff member completing it and the supervising clinician. A termination treatment summary is due within 30 days after a client is determined inactive.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA therapy, such as a 1:1 aide delivered simultaneously during classroom instruction, or services covered under IDEA. School-based ABA does allow coordination of services and covers teacher training, meetings with school personnel and observations in the school setting, and the treatment plan is expected to coordinate with the school and any IFSP or IEP. Separately, the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03. Generalization into natural settings such as home and community forms part of the continued-service test.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
          { title: 'Optum — Ohio Medicaid Supplemental Clinical Criteria (BH803OH012026.E, eff. 7/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/optumLOCG/ohlocg/ohMedcadLOCG.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Certified Ohio Behavior Analyst providers must be enrolled with Ohio Medicaid as Provider Type 19, Specialty Type 190 and hold a National Provider Identifier for both the rendering provider and the group provider, then join the Optum network through the Provider Express Ohio Medicaid ABA Program page. A provider not enrolled with Medicaid needs a single case agreement. Once an ASD diagnosis is confirmed the credentialed ABA provider is a master’s- or doctoral-level BCBA, or a licensed behavioral health clinician credentialed for ABA, with BCaBAs and non-licensed technicians working under that person’s direct supervision. OhioRISE never pays ABA — the claim goes to UnitedHealthcare Community Plan.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
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
      { q: 'What is UnitedHealthcare Community Plan of Ohio’s timely filing limit for ABA?', a: '365 days, per OAC 5160-1-19; claim disputes within 12 months of the date of service or 60 calendar days after the payment or denial, whichever is later (UnitedHealthcare Community Plan Ohio manual).' },
      { q: 'How fast does UnitedHealthcare Community Plan of Ohio pay a clean claim?', a: 'The plan’s manual prints no payment timeframe, so ODM’s MCO contract standard applies unless your provider contract sets another schedule: 90% of clean claims paid or denied within 21 calendar days of receipt, 99% within 60 and all within 90. Secondary claims need the primary payer’s EOB.' },
      { q: 'Does UnitedHealthcare Community Plan of Ohio require graphs for an ABA reauthorization?', a: 'Optum’s Ohio Medicaid criteria require progress for every target measured the same way as baseline — mastery rates, change scores and an updated norm-referenced adaptive assessment — but do not specifically require graphs.' },
    ],
  },

  'amerihealth-caritas-ohio': {
    slug: 'amerihealth-caritas-ohio',
    assessmentPA: {
      value: 'Required before ABA begins, per the state framework; code-level detail is not publicly retrievable — pull the current behavioral-health PA guidance from NaviNet',
      status: 'unverified',
      verifyVia: 'AmeriHealth Caritas Ohio\'s BH prior-authorization page and January 2026 manual list "Behavioral Analysis Therapy for Autism Spectrum Disorder" as requiring prior authorization but publish no code-level list, so whether 97151/97152 are included is not stated — ask UM at 1-833-735-7700 or check the searchable PA tool; the state rule behind it (OAC 5160-34-02) is itself unreachable.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — "Behavioral Analysis Therapy for Autism Spectrum Disorder" is on AmeriHealth Caritas Ohio\'s list of behavioral health services requiring prior authorization. Submit online through Jiva via the NaviNet portal, by fax to 1-833-329-6411, or by phone to UM at 1-833-735-7700 (8 a.m.-5 p.m. weekdays; 1-833-764-7700 after hours). The plan publishes no ABA authorization-period length. Decision clock: the January 2026 manual says standard decisions come “no later than 10 calendar days after AmeriHealth Caritas Ohio receives the request” (expedited: 48 hours), but OAC 5160-26-03.1 (eff. 1/1/2026) binds Ohio MCOs to “no later than seven calendar days following receipt of the request for service”',
      status: 'verified',
      cites: [{ title: 'AmeriHealth Caritas Ohio — Behavioral health prior authorizations', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth.html' }, { title: 'AmeriHealth Caritas Ohio — Provider Manual (January 2026, version six)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' }, { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' }],
    },
    family: 'amerihealth',
    cardDesc: 'State-rule-driven UM; NaviNet/Jiva workflow — thinnest public ABA paper trail of the OH plans.',
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
    payer: 'AmeriHealth Caritas Ohio',
    state: 'OH', kind: 'medicaid-mco', parent: 'Ohio Medicaid',
    pill: 'Payer Guide · AmeriHealth Caritas (OH)',
    h1: 'AmeriHealth Caritas Ohio ABA coverage (Next Gen MCO).',
    metaTitle: 'AmeriHealth Caritas Ohio Medicaid ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How AmeriHealth Caritas Ohio administers Medicaid ABA — state-rule-driven criteria, the NaviNet/Jiva authorization workflow, UM contacts, and what to verify directly in the portal.',
    intro: [
      'AmeriHealth Caritas Ohio — the newest of Ohio\'s Next Generation plans — publishes no distinct ABA clinical policy, so expect utilization management driven by the state rule (OAC 5160-34). Its public pages name ABA as a prior-authorization service and give the submission channels, but publish no code-level list or authorization-period length, so the NaviNet portal and the UM line remain the source of truth for those: this guide covers the verified structure and flags what to confirm directly.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Ohio Next Generation MCO (newest entrant)' },
      { label: 'Clinical rules', value: 'State OAC 5160-34 framework — no distinct plan policy found' },
      { label: 'Prior auth', value: 'Required — ABA is on the BH prior-auth list (period length not published)' },
      { label: 'UM contact', value: '(833) 735-7700 · PA fax (833) 329-6411' },
      { label: 'Portal', value: 'Jiva via NaviNet' },
      { label: 'Decision time', value: '7 calendar days standard / 48 hours expedited (OAC 5160-26-03.1); plan manual still prints 10 calendar days' },
      { label: 'Fee schedule', value: 'Contracted rates, not published; out-of-network pays 75% of the applicable fee schedule' },
    ],
    sections: [
      {
        h2: 'How AmeriHealth Caritas runs ABA authorization',
        body: [
          'The clinical baseline is the state rule: PA on ABA services, DSM-5-TR diagnosis via comprehensive evaluation, 6-month review cycles. Authorization requests flow through the Jiva UM system via NaviNet, with UM at (833) 735-7700 and a standard decision due “no later than seven calendar days following receipt of the request for service” under OAC 5160-26-03.1 (effective 1/1/2026) — the plan’s January 2026 manual still prints “no later than 10 calendar days,” so 7 is the binding outer limit and 48 hours applies to expedited requests. Approved intensities in the 10–40 hours/week range track clinical necessity per the state framework. Because the plan\'s public documents can\'t be pulled programmatically, download the current behavioral-health PA guidance from the portal and re-check it quarterly; the OhioRISE rule applies as everywhere — ABA bills to AmeriHealth Caritas, never to OhioRISE.',
        ],
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas Ohio — Behavioral health prior authorizations', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth.html' },
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (January 2026, version six)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
        ],
      },
      {
        h2: 'What is AmeriHealth Caritas Ohio\'s fee schedule for ABA?',
        body: [
          'AmeriHealth Caritas Ohio publishes no ABA rate table. In-network ABA pays at the rate in your contract with the plan; ask your Provider Network Account Executive for it. The manual does publish the out-of-network rate: “For providers who are not contracted with AmeriHealth Caritas Ohio, reimbursement for covered services will be made at seventy-five percent (75%) of the applicable fee schedule amount,” for non-emergent services. Out-of-network services, emergencies aside, also need prior authorization. Ohio Medicaid’s own ABA rates are in the Ohio Medicaid guide.',
        ],
        cites: [
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
        ],
      },
      {
        h2: 'Is AmeriHealth Caritas Ohio\'s ABA network open?',
        body: [
          'A provider is “not considered participating (and therefore [is] not eligible to provide services to members) until both credentialing and contracting have been completed.” Credentialing is centralized at ODM: Certified Ohio Behavior Analysts are credentialed by ODM under OAC 5160-1-42. The plan contract is separate. The manual recommends starting MCO contracting while you enroll and are credentialed at ODM, and you can mark AmeriHealth Caritas Ohio as a plan of interest in ODM’s PNM system, which sends your data to the plan to begin contracting. The plan publishes nothing saying whether its ABA panel is open or closed; ask Provider Services at 1-833-644-6001.',
        ],
        cites: [
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
          { title: 'OAC 5160-1-42 — Medicaid provider credentialing', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-42' },
        ],
      },
      {
        h2: 'AmeriHealth Caritas Ohio ABA claims: filing deadline, taxonomy, disputes and EVV',
        body: [
          'Filing deadline: “Providers will have 365 days to timely file a claim, including any timely filing exceptions, in accordance with Ohio Administrative Code (OAC) rule 5160-1-19”; original claims must be received within 365 days of the date of service. Claims rejected for missing or invalid provider or member data do not count as received.',
          'Taxonomy: the required claim data include the NPI of the ordering, rendering and prescribing physician and the “NPI and Taxonomy.” Claim disputes (any provider disagreement with a claim decision): “within 12 months from the date of service or 60 calendar days after the payment, denial or partial denial of a timely claim submission, whichever is later.”',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt.',
          'Corrected and secondary claims: a corrected claim “must be submitted within 180 days of the paid claim date,” with the original claim number and the correct frequency code; claims carrying a primary insurer’s EOB “must be submitted within 180 days of the date the other insurer paid on the claim.” Payment clock: the manual defines a clean claim but prints no payment timeframe, so the state contract standard governs: ODM’s managed care provider agreement (Rev. 12/2025, App. L §10) requires every Ohio MCO — unless the MCO and the provider agreed an alternative payment schedule in the provider contract — to pay or deny 90% of clean claims within 21 calendar days of receipt, 99% within 60 calendar days and 100% of all claims within 90 calendar days; behavioral health claims are measured as their own category, and the standard applies to network and out-of-network providers alike. The same agreement requires the MCO to accept claims for 365 calendar days from the date of service under OAC 5160-1-19 (App. K §5a).',
        ],
        cites: [
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'NaviNet/Jiva access', desc: 'The working authorization channel — confirm registration before the first case.' },
      { title: 'ASD diagnosis (DSM-5-TR)', desc: 'Comprehensive evaluation per the state baseline.' },
      { title: 'Timeline expectations', desc: 'Standard decisions due within 7 calendar days of receipt (OAC 5160-26-03.1), 48 hours if expedited — communicate it to families up front.' },
    ],
    sources: [
      { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
      { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
      { title: 'OAC 5160-1-42 — Medicaid provider credentialing', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-42' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
      { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
      { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
      { title: 'AmeriHealth Caritas Ohio — Alerts and Newsletters (provider alerts and newsletter archive)', url: 'https://www.amerihealthcaritasoh.com/provider/newsletters-and-updates' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'No in-force Ohio Medicaid rule names who may diagnose ASD for ABA: OAC 5160-34-02 is not on codes.ohio.gov, and ODM’s unfiled draft defines a comprehensive diagnostic evaluation but names no diagnosing credential. The plan publishes no diagnosing-credential rule of its own that we could read.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
        verifyVia: 'Plan utilization management / provider services: ask which credentials the plan accepts for the ASD diagnosis behind an ABA request.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      referral: {
        value: 'No referral or service order requirement is published, and AmeriHealth Caritas Ohio publishes no distinct ABA clinical policy — expect utilization management driven by ODM’s general rules (the draft OAC 5160-34 ABA rules are not in force). Authorization requests flow through the Jiva UM system via NaviNet, with UM at (833) 735-7700; standard decisions are due “no later than seven calendar days following receipt of the request for service” under OAC 5160-26-03.1 (the plan’s January 2026 manual still prints 10 calendar days), and authorization periods run 6 months. Because the plan’s public documents cannot be pulled programmatically, download the current behavioral-health PA guidance from the portal and re-check it quarterly.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (January 2026, version six)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
        ],
      },
      telehealth: {
        value:
          'No ABA-specific telehealth rule from the plan. Its January 2026 manual restates the OAC 5160-1-18 list of practitioners eligible to render telehealth — physicians, psychologists, behavioral health practitioners, therapists and others, plus “other practitioners if specifically authorized by ODM” — without naming behavior analysts, and says services that need prior authorization need it “whether they are delivered in-person or via telehealth” (ABA is on that list). ODM’s 2026 Telehealth Billing Guidelines list no ABA code among telehealth-eligible services and say the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.” Whether 97151 assessment or 97155 supervision may be done remotely for this plan’s members is therefore a question for its UM line.',
        status: 'unverified',
        cites: [{ title: 'AmeriHealth Caritas Ohio — Provider Manual (v6, January 2026)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' }, { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' }],
        verifyVia: 'AmeriHealth Caritas Ohio UM at 1-833-735-7700 or Provider Services at 1-833-644-6001 — ask which ABA codes (97151, 97155, 97156) it pays by telehealth, with which modifier and place of service.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'AmeriHealth Caritas Ohio’s January 2026 manual still prints the older standard clock: notice “no later than 10 calendar days after AmeriHealth Caritas Ohio receives the request,” extendable up to 14 calendar days. Expedited decisions: “no later than 48 hours after receipt of the request for service.” The manual points to OAC 5160-26-03.1, which has required 7 calendar days for standard decisions since 1/1/2026, so 7 days is the binding outer limit. No ABA reauthorization lead time is published. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (January 2026, version six)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'AmeriHealth Caritas Ohio’s manual: “before billing AmeriHealth Caritas Ohio when there is a Primary Insurer, healthcare providers are required to bill the Primary Insurer first and obtain an Explanation of Benefits (EOB) statement.” Then bill the balance with the EOB attached, within 180 days of the date the other insurer paid. Pay-first exception: providers “are not required to bill the third party” first when “the claim is for preventive pediatric services (including EPSDT/Healthchek) that are covered by the Medicaid program.” The plan then recovers from the other payer. The manual does not say whether ABA qualifies, or whether its own authorization is needed when a commercial plan pays first. Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'AmeriHealth Caritas Ohio — Provider Manual (January 2026, version six)', url: 'https://www.amerihealthcaritasoh.com/content/dam/amerihealth-caritas/acoh/pdf/provider/provider-manual.pdf' },
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
        ],
        verifyVia: 'AmeriHealth Caritas Ohio Provider Services (1-833-644-6001): whether ABA claims fall under the EPSDT/Healthchek pay-first exception, and whether a plan authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework, which sets no fixed ratio: OAC 4783-6-02 requires the COBA to write a supervision plan into each client’s treatment plan, consult before plan initiation and modification, and observe directly on a periodic basis, with frequency left to documented clinical judgment and assessment, plan development and efficacy review non-delegable. No plan-specific numeric ratio was found for this MCO — note that other Ohio plans do publish one (Optum 1–2 hours per 10 direct hours weekly; Buckeye 97155 at 10–20% of direct hours).',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'AmeriHealth Caritas Ohio’s provider manual (January 2026) publishes no ABA per-day unit table. The state rule it works under: ODM’s managed care provider agreement requires every MCO to “implement claims edits (e.g., … National Correct Coding Initiative [NCCI]) at the direction of ODM” (App. K §5c), and OAC 5160-1-19(B) has claims submitted pursuant to NCCI. The CMS Medicaid NCCI practitioner MUE table active 10/1–12/31/2026 sets 97151 at 32 units, 97152 at 16, 97153 at 32, 97154 at 18, 97155 at 24, 97156 at 16, 97157 at 16, 97158 at 16, 0362T at 16 and 0373T at 32 units per date of service. Those are claim edits; the weekly ceiling is whatever the prior authorization approves.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
          { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
        ],
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'AmeriHealth Caritas OH — BH prior authorization page (verify via portal)', url: 'https://www.amerihealthcaritasoh.com/provider/resources/behavioral-prior-auth' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. The plan publishes no ABA billing-provider rule of its own that we could read. One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas Ohio cover ABA therapy?', a: 'Yes — under the Ohio Medicaid framework. "Behavioral Analysis Therapy for Autism Spectrum Disorder" is on the plan\'s prior-authorization list; submit through Jiva via NaviNet, fax 1-833-329-6411, or call UM at 1-833-735-7700. The plan does not publish its authorization-period length.' },
      { q: 'How long do AmeriHealth Caritas Ohio ABA authorizations take?', a: 'Standard decisions are due “no later than seven calendar days following receipt of the request for service” under OAC 5160-26-03.1 (effective 1/1/2026), and expedited decisions within 48 hours. The plan’s January 2026 provider manual still prints “no later than 10 calendar days” — treat 7 as the binding outer limit.' },
      { q: 'What does AmeriHealth Caritas Ohio pay for ABA?', a: 'No ABA rate table is published. In-network rates are in your plan contract. A non-contracted provider is paid 75% of the applicable fee schedule amount for covered non-emergent services, and out-of-network care needs prior authorization.' },
      { q: 'Can I join AmeriHealth Caritas Ohio\'s network as an ABA provider?', a: 'You need ODM enrollment and credentialing (centralized at ODM for behavior analysts) plus a separate contract with the plan, and you are not participating until both are done. Start contracting while ODM processes your enrollment. Ask Provider Services at 1-833-644-6001 whether the ABA panel has openings.' },
      { q: 'What is AmeriHealth Caritas Ohio’s timely filing limit for ABA claims?', a: '365 days from the date of service; claim disputes within 12 months of the date of service or 60 calendar days after the payment or denial, whichever is later (AmeriHealth Caritas Ohio provider manual, January 2026).' },
      { q: 'What are AmeriHealth Caritas Ohio’s corrected-claim and secondary-claim deadlines?', a: 'Original claims within 365 days of the date of service; corrected claims within 180 days of the paid claim date; claims with a primary insurer’s EOB within 180 days of the date the other insurer paid. Payment follows ODM’s contract standard: 90% of clean claims within 21 calendar days, 99% within 60, all within 90, unless your contract says otherwise.' },
    ],
  },

  'humana-healthy-horizons-ohio': {
    slug: 'humana-healthy-horizons-ohio',
    family: 'humana',
    cardDesc: 'Cleanest all-codes PA statement in Ohio; state-policy criteria plus Availity logistics.',
    assessmentPA: {
      value: 'Required — the PA list covers every ABA code (97151–97158, 0362T, 0373T), assessments included',
      status: 'verified',
      cites: [
        { title: 'Humana Healthy Horizons OH — PA and notification list', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — same list; unauthorized services face retrospective review and financial penalties',
      status: 'verified',
      cites: [
        { title: 'Humana Healthy Horizons OH — PA and notification list', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
      ],
    },
    dxRequired: {
      value: 'Yes \u2014 DSM-5-TR ASD per OAC 5160-34-02',
      status: 'unverified',
      verifyVia: 'OAC 5160-34-02 does not exist as an in-force rule: codes.ohio.gov returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026), the chapter is absent from the Title 5160 index, and ODM’s draft rewrite (ERF188422B) is still marked “DRAFT — NOT FOR FILING” with no JCARR filing (per ODM’s 7/30/2026 stakeholder presentation). Confirm current practice with Rules@Medicaid.Ohio.gov or JCARR, or the member’s MCO.',
      blocker: 'document',
    },
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
      {
        h2: 'Humana Healthy Horizons in Ohio ABA claims: filing deadline, payment, taxonomy, disputes and EVV',
        body: [
          'Filing deadline: “Claims must be submitted within 365 days from the date of service or discharge date”; corrected claims within 365 days of the date of service or 180 days from the date Medicare or the other insurer paid. Payment: Humana pays 90% of clean claims within 21 calendar days of receipt, 99% within 60 and 100% within 90.',
          'Taxonomy: claims need “Billing and rendering taxonomy codes that match the ODM Master Provider List (MPL),” and billing and rendering addresses that match the MPL. Claim disputes (any provider disagreement with a claim decision): “within 12 months from the date of service or 60 calendar days after the payment, denial or partial denial of a timely claim submission, whichever is later.” Humana resolves a claim dispute within 15 business days.',
          'EVV does not apply to ABA in Ohio. OAC 5160-32-01 lists the services subject to Ohio’s EVV program — named waiver services in the home care, MyCare, PASSPORT and developmental-disability waivers, plus state-plan home health, private duty nursing and RN assessment and consultation — and makes managed care entities responsible for applying it; ABA is not on the list, and services delivered by telehealth are exempt. Humana’s own EVV list names home health, nursing, therapy and personal-care codes (G0156, G0299, G0300, T1000–T1003, S5125, T1019, T2025, G0151–G0153), not ABA codes.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons in Ohio — 2026 Provider Manual', url: 'https://assets.humana.com/is/content/humana/2025_OH_Provider_Manualpdf' },
          { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
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
      { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
      { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' },
      { title: 'OAC 5160-32-01 — Electronic visit verification: programs and services subject to EVV, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-32-01' },
      { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
      { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
      { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
      { title: 'Humana Healthy Horizons in Ohio — Communications and Network Notices (notices grouped by year)', url: 'https://provider.humana.com/medicaid/ohio-medicaid/communications-network-notices' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Follows the Ohio Medicaid framework, which publishes no verifiable age bound for ABA; under-21 members carry EPSDT protections through the MCO. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dxRecency: {
        value: 'No plan-specific recency rule found — the Ohio Medicaid framework requires a documented comprehensive diagnostic evaluation demonstrating DSM-5-TR criteria but publishes no verifiable window. Note that two Ohio MCOs do set one (CareSource: a symptom letter where the evaluation is over 24 months old; Buckeye: a CDE within 5 years), so do not assume this plan is silent — confirm in its portal. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'No in-force Ohio Medicaid rule names who may diagnose ASD for ABA: OAC 5160-34-02 is not on codes.ohio.gov, and ODM’s unfiled draft defines a comprehensive diagnostic evaluation but names no diagnosing credential. The plan publishes no diagnosing-credential rule of its own that we could read.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
        ],
        verifyVia: 'Plan utilization management / provider services: ask which credentials the plan accepts for the ASD diagnosis behind an ABA request.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No plan-specific instrument list found, and the state framework names none. Other Ohio MCOs do publish lists (CareSource: ADOS, ADI-R or CARS-2; Optum for UHC Community Plan: one validated screener plus one formal tool), so confirm in this plan’s portal rather than assuming. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      referral: {
        value: 'No referral or service order requirement is published, and Humana layers no distinct ABA clinical policy on the state framework. What it does publish is the cleanest all-codes prior-authorization statement in Ohio: the PA and notification list effective January 1, 2026 puts "Applied behavioral analysis (ABA) therapy" against 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T, with no assessment exemption — so the assessment itself needs authorization before the first appointment. Services rendered without PA are subject to retrospective medical-necessity review and financial penalties. Submissions run through Availity Essentials; the Ohio provider line is (877) 856-5707.',
        status: 'verified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
      },
      telehealth: {
        value: 'No plan-specific ABA telehealth rule found. ODM’s 2026 Telehealth Billing Guidelines (fee-for-service, under OAC 5160-1-18) list no ABA code — 97151–97158, 0362T, 0373T — as telehealth-eligible and do not name behavior analysts among eligible telehealth practitioners, while saying the MCOs “cover the same telehealth services as in fee-for-service but may have different billing requirements.” So remote assessment (97151) or supervision (97155) is not established in any document we could read for this plan; ask before scheduling it.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' }, { title: 'ODM — Telehealth Billing Guidelines (FFS, DOS on or after 1/1/2026)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/Billing/BillingInstructions/Telehealth_Billing_Guidelines_updates_for_2026_final.pdf' }],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Humana’s 2026 Ohio manual still prints the older standard clock: notice “no later than 10 calendar days following receipt of the request for service.” Expedited and urgent behavioral health decisions come “no later than 48 hours after receipt,” and concurrent decisions within three calendar days. OAC 5160-26-03.1 has required 7 calendar days for standard decisions since 1/1/2026, so 7 days is the binding outer limit. No ABA reauthorization lead time is published. Ohio’s MCO rule sets the clock. For a standard request the MCO “must provide notice to the provider and member as expeditiously as the member’s health condition requires but no later than seven calendar days following receipt of the request for service,” extendable by up to fourteen calendar days (an MCO-requested extension needs ODM’s prior approval). An expedited decision is due “no later than forty-eight hours after receipt of the request for service” (OAC 5160-26-03.1, effective 1/1/2026). The 48 hours is stricter than the federal 72-hour managed-care cap.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-26-03.1 — MCO utilization management and authorization timeframes (eff. 1/1/2026)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-03.1' },
          { title: 'Humana Healthy Horizons in Ohio — 2026 Provider Manual', url: 'https://assets.humana.com/is/content/humana/2025_OH_Provider_Manualpdf' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Humana’s Ohio manual: “Humana Healthy Horizons in Ohio collects COB information for our members … Medicaid programs are the payer of last resort.” A COB claim needs the primary carrier’s remittance or payment information. When Humana is secondary, it recommends submitting “within 180 days from the other insurance payment date.” Its timely-filing limit is “at least 90 days from the date of the remittance advice” of the other payer. If a claim is denied for missing COB information, send the primary remittance within the rest of the initial timely-filing period. The manual does not say whether Humana’s authorization is still needed when a commercial plan pays first. Ohio’s MCO rule: “The MCE is the payer of last resort when a member has third party resources available.” Providers must “take reasonable measures to obtain all third party payments and file claims with all TPPs prior to billing the MCE.” That means a remittance from the other payer showing a valid non-payment reason (service not covered, applied to the deductible or copay, benefit maximum reached), a partial payment with its remittance, or no response within ninety days of submitting to the other payer. The MCO pays at most its allowed amount minus the other payments, and must allow at least ninety days from the other payer’s remittance to file. Exception: “The MCE, except SPBM, pays first for preventive pediatric services before seeking reimbursement from any liable third party.” Children in the custody of a county children’s services agency are exempt from TPL cooperation (OAC 5160-26-09.1).',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Ohio — 2026 Provider Manual', url: 'https://assets.humana.com/is/content/humana/2025_OH_Provider_Manualpdf' },
          { title: 'OAC 5160-26-09.1 — MCO third party recovery and coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-26-09.1' },
        ],
        verifyVia: 'Humana Healthy Horizons in Ohio Provider Services: whether a Humana ABA authorization is required when a commercial plan pays first.',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Follows the Ohio framework, which sets no fixed ratio: OAC 4783-6-02 requires the COBA to write a supervision plan into each client’s treatment plan, consult before plan initiation and modification, and observe directly on a periodic basis, with frequency left to documented clinical judgment and assessment, plan development and efficacy review non-delegable. No plan-specific numeric ratio was found for this MCO — note that other Ohio plans do publish one (Optum 1–2 hours per 10 direct hours weekly; Buckeye 97155 at 10–20% of direct hours).',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not resolved. No state-level rule on billing 97153 and 97155 for the same clock time could be verified, and this plan publishes none. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Humana’s 2026 Ohio provider manual publishes no ABA per-day unit table. The state rule it works under: ODM’s managed care provider agreement requires every MCO to “implement claims edits (e.g., … National Correct Coding Initiative [NCCI]) at the direction of ODM” (App. K §5c), and OAC 5160-1-19(B) has claims submitted pursuant to NCCI. The CMS Medicaid NCCI practitioner MUE table active 10/1–12/31/2026 sets 97151 at 32 units, 97152 at 16, 97153 at 32, 97154 at 18, 97155 at 24, 97156 at 16, 97157 at 16, 97158 at 16, 0362T at 16 and 0373T at 32 units per date of service. Those are claim edits; the weekly ceiling is whatever the prior authorization approves.',
        status: 'verified',
        cites: [
          { title: 'OAC 5160-1-19 — Submission of medicaid claims (eff. 2/1/2023), codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-19' },
          { title: 'ODM — Ohio Medicaid Provider Agreement for Managed Care Organization (Rev. 12/2025): App. K §5 claims, App. L §10 prompt pay', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Providers/ProviderTypes/Managed%20Care/Provider%20Agreements/2025_12_MCO_Final.pdf' },
          { title: 'CMS — Medicaid NCCI MUE edits, practitioner services (2026 Q4, active 10/1–12/31/2026)', url: 'https://www.cms.gov/files/zip/medicaid-ncci-2026-q4-mue-edits-practitioner-services.zip' },
        ],
      },
      noteSignature: {
        value: 'No plan-specific session-note signature standard found, and none could be verified at state level. codes.ohio.gov now returns “No Ohio Administrative Code rule number corresponds to ‘5160-34’” (re-confirmed 10/25/2026) rather than refusing the connection, and the chapter remains absent from the Title 5160 index, so no in-force rule text exists to read — confirm with Rules@Medicaid.Ohio.gov or JCARR. Per ODM’s 7/30/2026 provider stakeholder presentation, the rewrite was paused in 2025 for reevaluation (budget pressure, national ABA-spend scrutiny, other-state audit findings) and the draft (ERF188422B) still carries a “DRAFT — NOT FOR FILING” header and no JCARR filing, so draft content does not govern.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'No plan-specific place-of-service rule found. The confirmed Ohio boundary is the school one: the MCO is not responsible for payment of services provided through the Medicaid School Program under OAC Chapter 5160-35, 5160-35-04 and 5160-26-03.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”, so OAC 5160-34-02 is not an in-force rule)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'Humana Healthy Horizons OH — PA and notification list (eff. 1/1/2026)', url: 'https://assets.humana.com/is/content/humana/OH%20MCD%20PAL%20Dpdf' },
        ],
        verifyVia: 'This plan’s provider portal or behavioral health UM line; Rules@Medicaid.Ohio.gov or JCARR for the in-force text of OAC 5160-34-02.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'No in-force Ohio Medicaid ABA rule says who may bill: codes.ohio.gov has no OAC 5160-34-02 (re-checked 10/25/2026), and ODM’s July 2026 ABA presentation says the rule work was paused in 2025. ODM’s unfiled draft 5160-34-01 would make COBAs (R.C. Chapter 4783) and BACB BCBAs/BCBA-Ds the independent practitioners, with BCaBAs and RBTs as dependent providers under their supervision, and plans a separate ABA organizational provider type. The plan publishes no ABA billing-provider rule of its own that we could read. One routing rule is firm and verified: OhioRISE does not pay for ABA; ODM’s Mixed Services Protocol assigns ABA claims to the member’s MCO or fee-for-service even for OhioRISE-enrolled youth.',
        status: 'unverified',
        cites: [
          { title: 'ODM — draft ABA rule package ERF188422B (5160-34-01/-02/-03; “DRAFT - NOT YET FILED”)', url: 'https://dam.assets.ohio.gov/image/upload/medicaid.ohio.gov/Stakeholders,%20Partners/LegalandContracts/Rules/ERF188422B.pdf' },
          { title: 'ODM — OhioRISE Mixed Services Protocol (4/1/2025)', url: 'https://dam.assets.ohio.gov/image/upload/v1743449666/managedcare.medicaid.ohio.gov/OhioRISE/OhioRISE_Mixed_Services_Protocol_20250401.pdf' },
        ],
        verifyVia: 'ODM Provider Network Management (PNM) enrollment for ABA rendering and billing providers, or the plan’s provider services: confirm the provider type/specialty and NPIs the plan requires on ABA claims.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in Ohio cover ABA?', a: 'Yes — on the state clinical framework, with prior authorization required on every ABA code including assessments, submitted via Availity Essentials.' },
      { q: 'What happens if we deliver ABA without a Humana authorization?', a: 'The service is subject to retrospective medical-necessity review and financial penalties — treat authorization-before-service as non-negotiable.' },
      { q: 'Does Humana Healthy Horizons in Ohio require taxonomy on ABA claims?', a: 'Yes. Billing and rendering taxonomy codes must match the ODM Master Provider List (Humana Ohio provider manual, 2026). Claims are due within 365 days of the date of service.' },
    ],
  },

  'aetna-ohio': {
    slug: 'aetna-ohio',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Ohio R.C. § 3923.84 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
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
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
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
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else — its 10/14/2026 review names Down syndrome without an ASD co-morbidity, and “all other non-ASD indications.” Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Ohio is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Ohio.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna — Applied Behavior Analysis Medical Necessity Guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
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
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
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
      {
        h2: 'How fast must Aetna pay an ABA claim in Ohio, and is there a rate floor?',
        body: [
          'Payment clock: Ohio’s prompt-pay law (R.C. 3901.381) requires a third-party payer to pay or deny a claim on the standard form within 30 days of receipt, or within 45 days when it needs supporting documentation (and it must ask for that documentation within 30 days); a materially deficient claim must be flagged within 15 days. An electronic claim is presumed received 24 hours after submission. A self-funded employer plan may sit outside Ohio insurance law, so confirm the funding type first.',
          'Ohio sets no minimum commercial rate for ABA today. House Bill 453, introduced September 15, 2025 and sitting in the House Insurance Committee since October 1, 2025, would require third-party payers to pay ABA assessment and treatment codes “at not less than one hundred per cent of the medicaid fee schedule,” but it is a pending bill, not law.',
          'Filing deadline: Aetna’s provider manual (edition 6/26) prints no numeric filing limit for original, corrected or secondary claims. It defines a clean claim as one “received in a timely manner” with all CMS-1500 data elements, and a claim that involves coordination of benefits is not a clean claim — so the filing window is the one in your Aetna participation agreement, and that is where to look before a deadline passes.',
        ],
        cites: [
          { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
          { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
          { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
          { title: 'Aetna Provider Manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        ],
      },
      {
        h2: 'Aetna reauthorization, supervision and the code set',
        body: [
          'Reauthorization: Aetna’s ABA medical necessity guide evaluates progress “every six months.” Each request must show a functional impairment on a standardized scale in the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS are the examples), a treatment plan whose target behaviors have recorded baseline levels and “quantifiable criteria for progress,” and either documentation that the frequency of the target behavior improved or, if it did not, documentation of treatment modification, added assessment or expert consultation; the level of impairment must justify the hours requested. Coverage ends on the guide’s thresholds — two or more standard deviations of improvement in multiple domains (one or more for a focused plan), or less than one standard deviation in all domains across successive authorization periods. The guide asks for objective, quantified data; it does not require graphs.',
          'Supervision: “additional authorization may be provided for QHP protocol modification and direction at 1 to 2 hours per 10 hours of treatment by protocol,” plus caregiver training. Aetna sets no cap on the number of technicians one behavior analyst may supervise.',
          'Code set: CPB 0554 lists the ABA codes as CPT 97151–97158 with 0362T and 0373T. Neither CPB 0554 nor the medical necessity guide lists a HCPCS H-code (H0031, H0032, H2019) for ABA, so whether your Aetna contract pays one is a question for Aetna, not something its policies grant.',
        ],
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
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
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
      { title: 'Ohio Admin. Code 4783-4-01 — COBA requirements', url: 'https://www.law.cornell.edu/regulations/ohio/Ohio-Admin-Code-4783-4-01' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
      { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
      { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
      { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna Provider Manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
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
        value:
          'Aetna\'s Telemedicine and Direct Patient Contact Payment Policy lists the ABA codes it pays by telehealth, by line of business. On commercial plans the eligible codes are 97151 (the assessment), 97153, 97155 (protocol modification, the code for BCBA direction of the technician), 97156 and 97157, billed with modifier GT, 95 or FR; 97152, 97154 and 97158 are checked for Medicare Advantage only. The posted policy shows a last review of June 2021, so treat the list as perishable. The behavioral health provider manual describes telemedicine (under a Teladoc heading) that Aetna Behavioral Health offers to all commercial fully insured members and to self-insured plan sponsors unless they opt out.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table: Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' }, { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' }],
        verifyVia: 'Aetna provider services or Availity — confirm the payment policy is still current and that the member\'s plan carries a telehealth benefit before scheduling remote hours.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'For insured Ohio plans the state clock is faster than the federal floor. When the request is submitted electronically, the insurer “shall respond to all prior authorization requests within forty-eight hours for urgent care services, or ten calendar days for any prior authorization request that is not for an urgent care service, of the time the request is received” (R.C. 3923.041 for sickness-and-accident insurers and public employee benefit plans; R.C. 1751.72 for health insuring corporations). An incomplete request must get a reply naming the missing information. Plans outside those statutes, such as a self-funded private employer plan, are held to the federal floor: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1). The same floor applies to non-grandfathered individual and marketplace plans (45 CFR 147.136). Aetna’s behavioral health provider manual publishes no decision timeframe.',
        status: 'plan-dependent',
        cites: [
          { title: 'R.C. 3923.041 — prior authorization: sickness and accident insurers and public employee benefit plans', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.041' },
          { title: 'R.C. 1751.72 — prior authorization: health insuring corporations', url: 'https://codes.ohio.gov/ohio-revised-code/section-1751.72' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
          { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
        ],
        verifyVia: 'Aetna Behavioral Health precertification (number on the member ID card): whether the plan is insured in Ohio (R.C. 3923.041 / 1751.72 apply), self-funded (ERISA floor) or grandfathered; the plan’s own standard and urgent turnaround for ABA; and how far ahead of expiry a reauthorization must be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Ohio’s COB rule sets the order for a child on both parents’ plans: “The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”; if the birthdays match, the plan that has covered a parent longer goes first. For parents who are divorced, separated or not living together, a court decree assigning health costs controls. Without one, the order is the custodial parent’s plan, then the custodial parent’s spouse’s, then the non-custodial parent’s, then the non-custodial parent’s spouse’s (OAC 3901-8-01). That rule governs contracts issued in Ohio. Whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Ohio Medicaid “must be the last payer” (OAC 5160-1-08). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If this plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: 'OAC 3901-8-01 — Coordination of benefits (order of benefit determination)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-3901-8-01' },
          { title: 'OAC 5160-1-08 — Medicaid coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-08' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured and issued in Ohio (OAC 3901-8-01 order applies) or self-funded (the plan document’s COB clause applies).',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists where behavior analysis is within their scope, unless state mandates, plan documents or contracts require otherwise. Where a mandate, plan document or contract does allow authorization for services not directly provided by such a person, there must be supervision and direction of the unlicensed or non-certified provider in line with practice standards. Aetna publishes no numeric supervision ratio. Aetna’s medical necessity guide does authorize the analyst’s time against a ratio: QHP protocol modification and direction “at 1 to 2 hours per 10 hours of treatment by protocol”; it sets no cap on the number of technicians per analyst.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies — CPB 0554, CPB 0648 and the ABA medical necessity guide are silent on billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 10/14/2026)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'Aetna provider services / the participating-provider agreement, or a written coding determination from Aetna Behavioral Health (BACABACases@Aetna.com).',
        blocker: 'per-case',
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
      { q: 'Does Aetna cover ABA therapy in Ohio?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Ohio\'s mandate (Ohio R.C. § 3923.84) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Ohio autism mandate require?', a: 'Ohio’s mandate (HB 463, 2017; R.C. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Ohio?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Ohio Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How fast must Aetna pay an ABA claim in Ohio?', a: 'On a plan subject to Ohio law, within 30 days of receiving a claim on the standard form, or 45 days when it needs supporting documentation; a materially deficient claim must be flagged within 15 days (R.C. 3901.381).' },
      { q: 'Is there a minimum rate for 97153 on Aetna plans in Ohio?', a: 'No. Ohio law sets no commercial ABA rate floor; rates come from your contract. House Bill 453 (introduced September 2025, still in the House Insurance Committee) would require commercial plans to pay at least 100% of the Ohio Medicaid fee schedule, but it is not law.' },
      { q: 'What documents does Aetna need for an ABA authorization in Ohio?', a: 'Aetna\'s precertification form GR-69017-4 (7-26), which replaced its other ABA forms from August 1, 2026 (Maryland and Massachusetts excepted), lists them. It asks for the current DSM diagnosis code and the diagnosing provider\'s name and credentials, plus hours by code (assessment codes per authorization period, treatment codes per week) and any hours during class. Supporting documents: "Results of a standardized assessment (i.e. Vineland, ABAS, VB-MAPP) completed within the past 12 months," with the IQ if available. Add a time-limited treatment plan with baselines and measurable targets, FBA or skills-assessment results, data showing severity justifies the hours, measurable caregiver goals, titration and discharge criteria, and coordination with other providers. Start the request on Availity or by phone and attach the form and records.' },
      { q: 'What is Aetna’s timely filing limit for ABA claims in Ohio?', a: 'Aetna’s provider manual publishes no number: a clean claim must be “received in a timely manner,” and the actual window (original, corrected and secondary claims) is set in your Aetna agreement. Ohio’s prompt-pay law then gives Aetna 30 days to pay or deny a clean claim on the standard form (45 days when it needs supporting documentation).' },
      { q: 'Does Aetna require graphs for an ABA reauthorization?', a: 'Aetna’s ABA medical necessity guide reviews progress every six months and requires quantified baseline and progress data, a standardized functional scale from the past 12 months, and documentation of improvement (or of treatment changes when there is none). It does not require the data to be graphed.' },
    ],
  },

  'cigna-ohio': {
    slug: 'cigna-ohio',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the Ohio R.C. § 3923.84 mandate layer.',
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
      {
        h2: 'How fast must Cigna pay an ABA claim in Ohio, and is there a rate floor?',
        body: [
          'Payment clock: Ohio’s prompt-pay law (R.C. 3901.381) requires a third-party payer to pay or deny a claim on the standard form within 30 days of receipt, or within 45 days when it needs supporting documentation (and it must ask for that documentation within 30 days); a materially deficient claim must be flagged within 15 days. An electronic claim is presumed received 24 hours after submission. A self-funded employer plan may sit outside Ohio insurance law, so confirm the funding type first.',
          'Ohio sets no minimum commercial rate for ABA today. House Bill 453, introduced September 15, 2025 and sitting in the House Insurance Committee since October 1, 2025, would require third-party payers to pay ABA assessment and treatment codes “at not less than one hundred per cent of the medicaid fee schedule,” but it is a pending bill, not law.',
          'Filing deadline: Cigna’s behavioral benefits, ABA included, are administered by Evernorth Behavioral Health, whose administrative guidelines (September 2026) “will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement.” Exceptions: a longer state-law limit applies; a coordination-of-benefits claim gets 90 days from the primary payer’s processing date on its EOB or EOP; Medicaid-secondary claims get three years; and a timely claim returned for more information restarts its 90 days on the date of the request. The guidelines’ Ohio regulatory addendum adds that, under R.C. 3901.388(A), an underpayment appeal or adjustment request must reach Evernorth within two years of the payment or explanation of payment.',
        ],
        cites: [
          { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
          { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
          { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
          { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
        ],
      },
      {
        h2: 'Cigna reauthorization, telehealth billing and the code set',
        body: [
          'Reauthorization: EN0499’s continued-treatment criteria require an updated treatment plan; “quantitative baseline, interim and current data” with the dates they were collected, for every behavior and skill, across all settings; current data collected no more than 60 days before the start date of the continued-treatment request and no more than 60 days before the request is received; data showing “ongoing and sustained progress”; a reliable, valid, standardized assessment completed no more than one year before the request; a documented barriers plan when progress is not shown; a fresh standardized assessment after any break in treatment longer than 60 calendar days; and dated quantitative data on stakeholder (caregiver) training. EN0499 asks for dated quantitative data, not graphs — the policy never uses the word — so a graph is a presentation choice, while the dated numbers are mandatory.',
          'Telehealth billing: “All ABA CPT codes are covered telehealth services” (autism resource guide). On the claim, Evernorth’s administrative guidelines (September 2026) call for “Modifier 95 in Field 24-D to specify telehealth” and “02 for Place of Service in Field 24-B”; a provider delivers virtual sessions after attesting to the telehealth specialty on Evernorth’s Attested Specialty Form. Neither document requires the authorization itself to name telehealth.',
          'Code set: “All ABA services must be billed with CPT codes 97151–97158, 0362T, and 0373T ONLY,” in 15-minute units — HCPCS H-codes (H0031, H0032, H2019, H2014) are not accepted for ABA. Supervision: one to two hours of case supervision per ten hours of direct treatment, with at least one to two hours a week when direct treatment is ten hours a week or less; EN0499 sets no cap on how many technicians one BCBA may supervise.',
        ],
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
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
      { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
      { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
      { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
      { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
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
        value: 'No referral, order or prescription is required under EN0499. Cigna’s notable front-door change is on authorization: per the Evernorth autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a BCBA and the member’s policy covers ABA — submit the claims and they are evaluated for payment. Treatment authorization requires the completed assessment and treatment plan attached to the Applied Behavior Analysis Prior Authorization Form. For a fully insured Ohio plan the state mandate adds an ordering requirement the carrier policies do not: R.C. 3923.84 makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specialising in pediatric health. Prior authorization is written into the mandate as the other condition of coverage. Non-grandfathered individual and small-group plans are carved out, and self-funded ERISA plans sit outside state insurance law.',
        status: 'verified',
        cites: [
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
        ],
      },
      telehealth: {
        value: 'All ABA CPT codes are covered telehealth services per the Evernorth autism resource guide, and EN0499 allows delivery in person, via telehealth, or as a hybrid — the modality chosen on individual characteristics, the treatment plan, caregiver participation, environment, evidence of efficacy and safety, and technological requirements. The requirement that the ABA provider remain in line of sight and close proximity to the individual expressly does not apply to telehealth services. Where treatment is delivered in settings with additional behavioral expectations, telehealth included, the plan must document that the service still meets the definition of direct treatment and direct engagement. On the claim, Evernorth’s administrative guidelines (September 2026) call for modifier 95 in field 24-D and place of service 02 in field 24-B; the authorization need not name telehealth.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Behavioral Health Administrative Guidelines (September 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
          { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'For insured Ohio plans the state clock is faster than the federal floor. When the request is submitted electronically, the insurer “shall respond to all prior authorization requests within forty-eight hours for urgent care services, or ten calendar days for any prior authorization request that is not for an urgent care service, of the time the request is received” (R.C. 3923.041 for sickness-and-accident insurers and public employee benefit plans; R.C. 1751.72 for health insuring corporations). An incomplete request must get a reply naming the missing information. Plans outside those statutes, such as a self-funded private employer plan, are held to the federal floor: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1). The same floor applies to non-grandfathered individual and marketplace plans (45 CFR 147.136).',
        status: 'plan-dependent',
        cites: [
          { title: 'R.C. 3923.041 — prior authorization: sickness and accident insurers and public employee benefit plans', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.041' },
          { title: 'R.C. 1751.72 — prior authorization: health insuring corporations', url: 'https://codes.ohio.gov/ohio-revised-code/section-1751.72' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
        ],
        verifyVia: 'Evernorth Behavioral Health / Cigna (number on the member ID card): whether the plan is insured in Ohio (R.C. 3923.041 / 1751.72 apply), self-funded (ERISA floor) or grandfathered; the plan’s own standard and urgent turnaround for ABA; and how far ahead of expiry a reauthorization must be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Ohio’s COB rule sets the order for a child on both parents’ plans: “The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”; if the birthdays match, the plan that has covered a parent longer goes first. For parents who are divorced, separated or not living together, a court decree assigning health costs controls. Without one, the order is the custodial parent’s plan, then the custodial parent’s spouse’s, then the non-custodial parent’s, then the non-custodial parent’s spouse’s (OAC 3901-8-01). That rule governs contracts issued in Ohio. Whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Ohio Medicaid “must be the last payer” (OAC 5160-1-08). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If this plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: 'OAC 3901-8-01 — Coordination of benefits (order of benefit determination)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-3901-8-01' },
          { title: 'OAC 5160-1-08 — Medicaid coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-08' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured and issued in Ohio (OAC 3901-8-01 order applies) or self-funded (the plan document’s COB clause applies).',
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
      { q: 'Does Cigna cover ABA therapy in Ohio?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Ohio\'s mandate (Ohio R.C. § 3923.84) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Ohio autism mandate require?', a: 'Ohio’s mandate (HB 463, 2017; R.C. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Ohio?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Ohio Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How fast must Cigna pay an ABA claim in Ohio?', a: 'On a plan subject to Ohio law, within 30 days of receiving a claim on the standard form, or 45 days when it needs supporting documentation; a materially deficient claim must be flagged within 15 days (R.C. 3901.381).' },
      { q: 'Is there a minimum rate for 97153 on Cigna plans in Ohio?', a: 'No. Ohio law sets no commercial ABA rate floor; rates come from your contract. House Bill 453 (introduced September 2025, still in the House Insurance Committee) would require commercial plans to pay at least 100% of the Ohio Medicaid fee schedule, but it is not law.' },
      { q: 'What documents does Cigna (Evernorth) need for ABA in Ohio?', a: 'EN0499 (effective 5/15/2026) requires a confirmed DSM-5-TR ASD diagnosis from an independently licensed clinician whose scope includes diagnosis. The record must give "the name, credentials, and type of licensure" of the diagnosing clinician and "the date on which the diagnosis was most recently made." A provisional or rule-out diagnosis, or an IDEA educational identification, does not count. For treatment, the BCBA\'s assessment must use a current-edition standardized instrument, completed in full and administered "within 60 days prior to the start of treatment," with score tables. The treatment plan\'s goals must match the deficits it found.' },
      { q: 'What is Cigna’s timely filing limit for ABA claims in Ohio?', a: 'Evernorth (Cigna’s behavioral administrator) considers claims submitted within 90 days of the date of service unless your provider agreement or a longer state-law limit says otherwise; secondary (COB) claims get 90 days from the primary payer’s EOB, and a claim returned for more information restarts the 90 days on the request date. Underpayment appeals in Ohio are due within two years of the payment.' },
      { q: 'Does Cigna require graphs for an ABA reauthorization?', a: 'No — EN0499 requires dated quantitative baseline, interim and current data for every target, with current data no more than 60 days old, plus a standardized assessment from the past year; it never requires the data to be graphed. Graphs are a common way to present it.' },
      { q: 'How do I bill ABA telehealth to Cigna, and are H-codes accepted?', a: 'All ABA CPT codes are covered by telehealth; bill modifier 95 with place of service 02 after attesting to the telehealth specialty with Evernorth. Only CPT 97151–97158, 0362T and 0373T are accepted for ABA — no H-codes.' },
    ],
  },

  'unitedhealthcare-ohio': {
    slug: 'unitedhealthcare-ohio',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the Ohio R.C. § 3923.84 mandate layer.',
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
      {
        h2: 'UnitedHealthcare (Optum) ABA claims in Ohio: filing deadline, payment, appeals and rate floor',
        body: [
          'Optum, which runs UnitedHealthcare’s commercial behavioral network, sets the claim rules in its National Network Manual (effective September 1, 2026): “All information necessary to process claims must be received by Optum no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan,” and corrections should be made within 90 days of initial receipt. Clean claims with any required authorization are “generally” paid within 45 calendar days, or as state law requires. To contest a claim or authorization decision on a commercial plan, request a reconsideration first and then an appeal; the two steps together allow 12 months unless state law or the participation agreement says otherwise. A non-urgent prior-authorization appeal can be filed within 180 days.',
          'Payment clock: Ohio’s prompt-pay law (R.C. 3901.381) requires a third-party payer to pay or deny a claim on the standard form within 30 days of receipt, or within 45 days when it needs supporting documentation (and it must ask for that documentation within 30 days); a materially deficient claim must be flagged within 15 days. An electronic claim is presumed received 24 hours after submission. A self-funded employer plan may sit outside Ohio insurance law, so confirm the funding type first.',
          'Ohio sets no minimum commercial rate for ABA today. House Bill 453, introduced September 15, 2025 and sitting in the House Insurance Committee since October 1, 2025, would require third-party payers to pay ABA assessment and treatment codes “at not less than one hundred per cent of the medicaid fee schedule,” but it is a pending bill, not law.',
        ],
        cites: [
          { title: 'Optum Behavioral Health — National Network Manual (published July 1, 2026; effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
          { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
          { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
        ],
      },
      {
        h2: 'UnitedHealthcare (Optum) reauthorization, supervision and telehealth billing',
        body: [
          'Reauthorization: with each clinical review for continued ABA, Optum’s supplemental clinical criteria require updated documentation that progress “is assessed and documented for each targeted symptom and behavior … including the same modes of measurement that were utilized for baseline measurement,” reported as the rate and percentage of mastered programs and targets, change scores on outcome measures, updated standardized adaptive measures and change scores on skills-based assessments, with movement from baseline shown on validated, norm-referenced assessments; caregiver involvement where applicable; and, when progress is inadequate within a six-month period, the reasons and the treatment changes made. Use below 80% of authorized hours over a two-week period is addressed at review. The criteria ask for measured, comparable data, not graphs specifically; Optum’s CPT FAQ treats time spent on data analysis and graphs as treatment planning bundled into the direct-service codes.',
          'Supervision: Optum’s ABA CPT FAQ says “in general, we see 2 hours for every 10 hours of direct Behavior Technician hours,” and a request above that 2:10 ratio needs a clinical rationale; no cap on the number of technicians per BCBA is published.',
          'Telehealth billing and code set: only 97155, 97156 and 97157 may be delivered by telehealth, by an attested Optum virtual-visits provider; Optum requires every behavioral health telehealth claim to carry POS 02 or POS 10 — “Optum will not reimburse for services billed with only telehealth modifiers 93, 95, FQ, GQ or GT” — and the FAQ asks providers to alert the Optum ABA Care Advocate that services will be virtual when completing the authorization. The commercial reimbursement policy bills ABA under CPT 97151–97158, 0362T and 0373T with a credential modifier; no HCPCS H-code is on it.',
        ],
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
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
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
      { title: 'Optum Behavioral Health — National Network Manual (published July 1, 2026; effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
      { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
      { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
      { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
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
        value: 'The SCC require no separate physician referral or order; what they require is prior authorization for ABA, unless otherwise specified or mandated by contract or law. In practice UnitedHealthcare administers this as a two-step Optum flow on Provider Express — an authorization for the assessment, then a second for treatment — with continued-service reviews on the authorization cycle. For a fully insured Ohio plan the state mandate adds an ordering requirement the carrier policies do not: R.C. 3923.84 makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specialising in pediatric health. Prior authorization is written into the mandate as the other condition of coverage. Non-grandfathered individual and small-group plans are carved out, and self-funded ERISA plans sit outside state insurance law. Ohio matters here: the SCC’s own benefit considerations list "Ohio Fully Insured" and "Ohio Medicaid" among the lines of business for which the ABA State Mandates document supplies state-mandated criteria that control where they conflict with this document.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Ohio Rev. Code § 3923.84 (autism coverage mandate)', url: 'https://codes.findlaw.com/oh/title-xxxix-insurance/oh-rev-code-sect-3923-84/' },
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
        value:
          'For insured Ohio plans the state clock is faster than the federal floor. When the request is submitted electronically, the insurer “shall respond to all prior authorization requests within forty-eight hours for urgent care services, or ten calendar days for any prior authorization request that is not for an urgent care service, of the time the request is received” (R.C. 3923.041 for sickness-and-accident insurers and public employee benefit plans; R.C. 1751.72 for health insuring corporations). An incomplete request must get a reply naming the missing information. Plans outside those statutes, such as a self-funded private employer plan, are held to the federal floor: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1). The same floor applies to non-grandfathered individual and marketplace plans (45 CFR 147.136).',
        status: 'plan-dependent',
        cites: [
          { title: 'R.C. 3923.041 — prior authorization: sickness and accident insurers and public employee benefit plans', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.041' },
          { title: 'R.C. 1751.72 — prior authorization: health insuring corporations', url: 'https://codes.ohio.gov/ohio-revised-code/section-1751.72' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
        ],
        verifyVia: 'Optum Behavioral Health (number on the member ID card): whether the plan is insured in Ohio (R.C. 3923.041 / 1751.72 apply), self-funded (ERISA floor) or grandfathered; the plan’s own standard and urgent turnaround for ABA; and how far ahead of expiry a reauthorization must be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Ohio’s COB rule sets the order for a child on both parents’ plans: “The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”; if the birthdays match, the plan that has covered a parent longer goes first. For parents who are divorced, separated or not living together, a court decree assigning health costs controls. Without one, the order is the custodial parent’s plan, then the custodial parent’s spouse’s, then the non-custodial parent’s, then the non-custodial parent’s spouse’s (OAC 3901-8-01). That rule governs contracts issued in Ohio. Whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Ohio Medicaid “must be the last payer” (OAC 5160-1-08). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If this plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: 'OAC 3901-8-01 — Coordination of benefits (order of benefit determination)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-3901-8-01' },
          { title: 'OAC 5160-1-08 — Medicaid coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-08' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured and issued in Ohio (OAC 3901-8-01 order applies) or self-funded (the plan document’s COB clause applies).',
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
      { q: 'Does UnitedHealthcare cover ABA therapy in Ohio?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Ohio\'s mandate (Ohio R.C. § 3923.84) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Ohio autism mandate require?', a: 'Ohio’s mandate (HB 463, 2017; R.C. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Ohio?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Ohio Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
      { q: 'What is UnitedHealthcare’s timely filing limit for ABA in Ohio?', a: 'Optum’s National Network Manual: 90 calendar days from the date of service unless state law, the plan or your agreement allows longer; reconsideration and appeal together within 12 months.' },
      { q: 'Is there a minimum rate for 97153 on UnitedHealthcare plans in Ohio?', a: 'No. Ohio law sets no commercial ABA rate floor; rates come from your contract. House Bill 453 (introduced September 2025, still in the House Insurance Committee) would require commercial plans to pay at least 100% of the Ohio Medicaid fee schedule, but it is not law.' },
      { q: 'What documents does UnitedHealthcare (Optum) need for ABA in Ohio?', a: 'Optum\'s ABA Supplemental Clinical Criteria require a valid DSM-5-TR ASD diagnosis from a state-licensed physician, psychologist or other qualified licensed clinician. The diagnosing clinician confirms the diagnosis and severity level "using at least one clinically validated tool," such as the ADOS-2, ADI-R or CARS-2. The ABA provider then completes its own behavioral assessment with baseline measurement on at least one validated tool (for example the VB-MAPP, ABLLS-R, AFLS or Vineland) and builds the treatment plan from it. "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)." The criteria set no expiry on the diagnosis.' },
      { q: 'Does UnitedHealthcare (Optum) require graphs for an ABA reauthorization?', a: 'Optum requires progress measured the same way as baseline for every target — mastery rates, change scores and updated standardized adaptive measures — but does not specifically require graphs. Telehealth (97155, 97156, 97157 only) must be billed with POS 02 or 10, and flagged to the Optum care advocate at authorization.' },
    ],
  },

  'anthem-bcbs-ohio': {
    slug: 'anthem-bcbs-ohio',
    payer: 'Anthem BCBS Ohio',
    state: 'OH', kind: 'commercial',
    family: 'anthem',
    cardDesc: '20 hrs/week is a floor, not a cap; individual and small-group plans are carved out; COBA required.',
    assessmentPA: {
      value: 'Yes — ABA is precertified as a category; Anthem\'s Ohio list names no individual CPT codes, so request assessment and treatment together',
      status: 'verified',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Yes — responsible party Anthem; weekly approved units since January 1, 2026',
      status: 'verified',
      cites: [
        { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        { title: 'Anthem Ohio — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/ohio/articles/streamlined-aba-claim-process-starts-january-1-2026-27879' },
      ],
    },
    dxRequired: {
      value: 'Yes — and the statute requires the services to be prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or a pediatric CNS/CNP',
      status: 'verified',
      cites: [
        { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
      ],
    },
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
      {
        h2: 'How fast must Anthem pay an ABA claim in Ohio, and is there a rate floor?',
        body: [
          'Payment clock: Ohio’s prompt-pay law (R.C. 3901.381) requires a third-party payer to pay or deny a claim on the standard form within 30 days of receipt, or within 45 days when it needs supporting documentation (and it must ask for that documentation within 30 days); a materially deficient claim must be flagged within 15 days. An electronic claim is presumed received 24 hours after submission. A self-funded employer plan may sit outside Ohio insurance law, so confirm the funding type first.',
          'Ohio sets no minimum commercial rate for ABA today. House Bill 453, introduced September 15, 2025 and sitting in the House Insurance Committee since October 1, 2025, would require third-party payers to pay ABA assessment and treatment codes “at not less than one hundred per cent of the medicaid fee schedule,” but it is a pending bill, not law.',
          'Filing deadline: Anthem’s 2026 Ohio commercial provider manual (effective August 1, 2026) prints no number — “Claims must be submitted within the timely filing timeframe specified in the Provider or Facility Agreement,” claims filed after it “will be denied” unless proof of timely filing (a computer-printed filing date, a fax confirmation, or an accepted clearinghouse report) is shown, and “any rejected Claims must be corrected and resubmitted within the timely filing period.” Corrections go in as a full replacement claim (frequency code 7), and a secondary claim on paper must carry the primary carrier’s EOB.',
        ],
        cites: [
          { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
          { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
          { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
          { title: 'Anthem Blue Cross and Blue Shield — 2026 Ohio Commercial Provider Manual (eff. 8/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_OH_00014.pdf' },
        ],
      },
      {
        h2: 'BlueCard: treating an Anthem Ohio member from another state\'s Blue network',
        body: [
          'BlueCard is the program that lets an Anthem Ohio member be treated by a Blue-contracted provider in another state. Anthem\'s BlueCard Provider Manual defines it as "a national program that enables members of one BCBS Plan to obtain healthcare service benefits while traveling or living in another BCBS Plan\'s service area." It works through each provider\'s own local plan: "The program lets you submit claims for patients from other BCBS Plans, domestic and international, to your local BCBS Plan. Your local BCBS Plan is your sole contact for claims payment, adjustments and issue resolution."',
          'So for a practice contracted with another Blue, such as CareFirst in Maryland, treating an Anthem Ohio member, the claim goes to your local Blue, not to Anthem. The manual\'s worked example: "the provider ... files a claim locally," and the local plan "forwards the claim to [the member\'s plan] that adjudicates the claim according to the member\'s benefits and the provider\'s arrangement with" the local plan. Put the member\'s full ID, including the three-character prefix, on the claim. "Claims with incorrect or missing prefixes and member identification numbers cannot be processed." Network status comes from your contract with your local Blue, matched to the member\'s product. A PPO member must see a BlueCard PPO provider "if they want to access PPO in-network benefits."',
          'Prior authorization stays with the home plan, Anthem. Anthem\'s out-of-area tool (anthem.com, Prior Authorization, "Medical Policy and Prior Authorization for Blue Plans," entered with the member\'s alpha prefix) shows its general precertification rules. The BlueCard manual gives the routes: Electronic Provider Access through your own local Blue\'s portal, which forwards you to the home plan\'s pre-service review tool; a HIPAA 278 transaction; or 1-800-676-BLUE (2583), asking for the utilization review area, which has a Behavioral Health option. ABA is on Anthem\'s commercial precertification list, so obtain it from Anthem before services start. The manual reminds providers that the member is technically "responsible for obtaining pre-certification/preauthorization for out-patient services from their BCBS Plan," and most practices get it for them. Anthem\'s Ohio provider manual adds that appeals of pre-certification decisions for BlueCard members are "the responsibility of the Blue Plan, insuring or administering benefits" (the home plan).',
        ],
        cites: [
          { title: 'Anthem — The BlueCard Program Provider Manual (eff. 1/1/2022; current edition in the Ohio provider manual library)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_MO_OH_WI_00004.pdf' },
          { title: 'Anthem Blue Cross and Blue Shield — 2026 Ohio Commercial Provider Manual (eff. 8/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_OH_00014.pdf' },
          { title: 'Anthem and CDHP products Precertification/Prior Authorization List — IN, KY, MO, OH, WI (updated January 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/Central_Blues_CDHP_PA_List.pdf' },
        ],
      },
      {
        h2: 'Anthem reauthorization, code set and documentation rules',
        body: [
          'Reauthorization: Anthem’s ABA provider resource guide (June 2025) sets no reauthorization data list and no graph requirement; medical necessity is decided against the clinical criteria named on Anthem’s precertification list for the member’s product, so what a continued-review packet must show — and whether progress must be graphed — is the reviewer’s call. Ask the Anthem behavioral health reviewer at the initial request what data, measures and format the next review will need. What the guide does fix is documentation: every record entry must be complete, dated and signed with credentials, entered at or shortly after the service and not later than 30 days, with the signature dated within 30 days of the date of service.',
          'Code set and supervision: the guide lists the ABA Category I CPT codes 97151–97158 and Category III 0362T and 0373T, and tells providers to bill industry-standard CPT, HCPCS or revenue codes and to check the provider contract for any specific billing requirement — it lists no HCPCS H-code for ABA. Claims carry a licensure modifier (HM, HN or HO) and, for technician-delivered services, the supervising BCBA or other QHP in box 31. A QHP billing 97155 may add 97153 only when both are face to face with the patient and the QHP is directing the technician; no supervision ratio or technician cap is published.',
        ],
        cites: [
          { title: 'Anthem — ABA provider resource guide (MULTI-BCBS-CM-084583-25, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
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
      { title: 'Ohio Rev. Code 3901.381 — third-party payer claim payment deadlines, codes.ohio.gov', url: 'https://codes.ohio.gov/ohio-revised-code/section-3901.381' },
      { title: 'Ohio House Bill 453 (136th General Assembly), as introduced — ABA coverage and payment rates', url: 'https://search-prod.lis.state.oh.us/api/v2/general_assembly_136/legislation/hb453/00_IN/html/' },
      { title: 'Ohio Legislature — HB 453 status (introduced 9/15/2025; referred to House Insurance 10/1/2025)', url: 'https://www.legislature.ohio.gov/legislation/136/hb453/status' },
      { title: 'Anthem — The BlueCard Program Provider Manual (eff. 1/1/2022; current edition in the Ohio provider manual library)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_MO_OH_WI_00004.pdf' },
      { title: 'Anthem Blue Cross and Blue Shield — 2026 Ohio Commercial Provider Manual (eff. 8/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/manuals/PM_OH_00014.pdf' },
      { title: 'Anthem Ohio — Provider News (index of articles and monthly newsletters)', url: 'https://providernews.anthem.com/ohio' },
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
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published. Anthem moved Ohio commercial ABA reviews from CG-BEH-02 and MCG W0153 to MCG B-806-T effective June 1, 2024, and MCG guidelines are proprietary and unpublished, so any diagnosis-recency expectation lives inside criteria the clinic cannot read. The one statutory cadence that is public runs the other way: outside inpatient services the insurer may review the treatment plan annually, and no more often without the treating clinician’s agreement.',
        status: 'unverified',
        cites: [
          { title: 'Anthem — MCG care guidelines 27th edition update (Ohio, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/ohio/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
          { title: 'Ohio Rev. Code § 3923.84 — coverage for autism spectrum disorder', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.84' },
        ],
        verifyVia: 'A pre-service call to Anthem behavioral health (or a peer-to-peer) asking what MCG B-806-T expects on the age of the diagnostic evaluation — a denial letter still citing CG-BEH-02 is working from a retired document.',
        blocker: 'document',
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
        blocker: 'document',
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
      authTurnaround: {
        value:
          'For insured Ohio plans the state clock is faster than the federal floor. When the request is submitted electronically, the insurer “shall respond to all prior authorization requests within forty-eight hours for urgent care services, or ten calendar days for any prior authorization request that is not for an urgent care service, of the time the request is received” (R.C. 3923.041 for sickness-and-accident insurers and public employee benefit plans; R.C. 1751.72 for health insuring corporations). An incomplete request must get a reply naming the missing information. Plans outside those statutes, such as a self-funded private employer plan, are held to the federal floor: pre-service decisions “not later than 15 days after receipt of the claim,” one 15-day extension, and urgent care “not later than 72 hours after receipt” (29 CFR 2560.503-1). The same floor applies to non-grandfathered individual and marketplace plans (45 CFR 147.136).',
        status: 'plan-dependent',
        cites: [
          { title: 'R.C. 3923.041 — prior authorization: sickness and accident insurers and public employee benefit plans', url: 'https://codes.ohio.gov/ohio-revised-code/section-3923.041' },
          { title: 'R.C. 1751.72 — prior authorization: health insuring corporations', url: 'https://codes.ohio.gov/ohio-revised-code/section-1751.72' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '45 CFR 147.136 — internal claims and appeals, group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/section-147.136' },
        ],
        verifyVia: 'Anthem Blue Cross and Blue Shield / Carelon Behavioral Health (number on the member ID card): whether the plan is insured in Ohio (R.C. 3923.041 / 1751.72 apply), self-funded (ERISA floor) or grandfathered; the plan’s own standard and urgent turnaround for ABA; and how far ahead of expiry a reauthorization must be filed.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Ohio’s COB rule sets the order for a child on both parents’ plans: “The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”; if the birthdays match, the plan that has covered a parent longer goes first. For parents who are divorced, separated or not living together, a court decree assigning health costs controls. Without one, the order is the custodial parent’s plan, then the custodial parent’s spouse’s, then the non-custodial parent’s, then the non-custodial parent’s spouse’s (OAC 3901-8-01). That rule governs contracts issued in Ohio. Whether a self-funded employer plan follows it or its own plan document’s COB clause is a question for that plan. Public coverage pays after this plan. Ohio Medicaid “must be the last payer” (OAC 5160-1-08). TRICARE “pays after all other health insurance, except for” Medicaid. CHAMPVA “is always the secondary payer, except to Medicaid.” If this plan denies because its rules were not followed, including its prior authorization, TRICARE “may also deny the claim.” So get this plan’s authorization even when a public program is secondary.',
        status: 'plan-dependent',
        cites: [
          { title: 'OAC 3901-8-01 — Coordination of benefits (order of benefit determination)', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-3901-8-01' },
          { title: 'OAC 5160-1-08 — Medicaid coordination of benefits', url: 'https://codes.ohio.gov/ohio-administrative-code/rule-5160-1-08' },
          { title: 'TRICARE — Using Other Health Insurance', url: 'https://www.tricare.mil/Plans/OHI' },
          { title: 'VA — CHAMPVA: Information for Outpatient Providers (IB 10-1587, updated 9/20/2023)', url: 'https://www.va.gov/COMMUNITYCARE/docs/pubfiles/factsheets/FactSheet_01-20.pdf' },
        ],
        verifyVia: 'Ask the family for both parents’ cards and birth dates, and ask the employer or HR whether each plan is fully insured and issued in Ohio (OAC 3901-8-01 order applies) or self-funded (the plan document’s COB clause applies).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Ohio cap ABA at 20 hours a week?', a: 'No — that is the most common misreading of R.C. 3923.84. Twenty hours a week of clinical therapeutic intervention is the minimum the statute requires for an insured under age fourteen, and the same section says it "shall not be construed as limiting benefits that are otherwise available to an insured under a policy." Ask for what is medically necessary; the 20 hours is the floor you can insist on, not the ceiling you must accept.' },
      { q: 'Which Ohio plans are exempt from the autism mandate?', a: 'Non-grandfathered plans in the individual and small group markets are carved out by name, along with Medicare supplement, accident-only, specified disease, hospital indemnity, disability income, long-term care and other limited-benefit policies. Self-funded ERISA plans sit outside state insurance law entirely. Those members may still have an ABA benefit, but not because of R.C. 3923.84.' },
      { q: 'Who can order ABA in Ohio?', a: 'The statute makes coverage contingent on the services being prescribed or ordered by a psychologist trained in autism, a developmental pediatrician, or — since Senate Bill 196 took effect on March 20, 2025 — a clinical nurse specialist or certified nurse practitioner specializing in pediatric health. Prior authorization is likewise written into the mandate as a condition of coverage.' },
      { q: 'Does a BCBA need an Ohio credential?', a: 'Yes. Ohio requires a Certified Ohio Behavior Analyst certificate from the State Board of Psychology to practise applied behavior analysis, and the COBA application itself requires current BACB certification. Staff working under a COBA\'s authority and direction, and family members implementing a plan, are exempt from certification — Ohio does not separately license technicians.' },
      { q: 'How often can Anthem re-review an Ohio ABA treatment plan?', a: 'Outside inpatient services the statute lets the insurer review the treatment plan annually, unless the insurer and the treating physician, clinical nurse specialist, certified nurse practitioner or psychologist agree more frequent review is necessary — and the insurer covers the cost of obtaining the review or plan.' },
      { q: 'Which criteria does Anthem apply to ABA in Ohio?', a: 'MCG B-806-T. Anthem notified Ohio commercial providers that effective June 1, 2024 it would move from CG-BEH-02 and MCG W0153 to MCG B-806-T for medical-necessity and clinical-appropriateness reviews. MCG guidelines are proprietary and unpublished, so a denial letter still citing CG-BEH-02 is working from a retired document.' },
      { q: 'How fast must Anthem pay an ABA claim in Ohio?', a: 'On a plan subject to Ohio law, within 30 days of receiving a claim on the standard form, or 45 days when it needs supporting documentation; a materially deficient claim must be flagged within 15 days (R.C. 3901.381).' },
      { q: 'Is there a minimum rate for 97153 on Anthem plans in Ohio?', a: 'No. Ohio law sets no commercial ABA rate floor; rates come from your contract. House Bill 453 (introduced September 2025, still in the House Insurance Committee) would require commercial plans to pay at least 100% of the Ohio Medicaid fee schedule, but it is not law.' },
      { q: 'I am a provider contracted with CareFirst (or another Blue plan outside Ohio). Can I treat an Anthem Ohio member under BlueCard?', a: 'Yes, if the member\'s product gives you network benefits through your local Blue contract. File the claim with your own local Blue plan, with the member\'s three-character prefix. Your local plan sends it to Anthem, which adjudicates it on the member\'s benefits and your local contract. Get ABA precertification from Anthem as the home plan, through Electronic Provider Access in your local Blue\'s portal or by calling 1-800-676-BLUE. Anthem\'s alpha-prefix router on anthem.com shows its general precertification rules. Precertification appeals go to Anthem, and claim questions go to your local Blue.' },
      { q: 'What is the BlueCard policy for Anthem Ohio members?', a: 'BlueCard sends an out-of-area claim through the treating provider\'s local Blue plan, which routes it to Anthem as the member\'s home plan. Anthem decides benefits and precertification, and the local plan pays the provider under its own contract. When an Ohio provider treats another Blue plan\'s member, Anthem Ohio is the local plan: "Submit all BCBS claims to your local Anthem Plan," and the member\'s plan decides precertification.' },
      { q: 'What is Anthem’s timely filing limit for ABA claims in Ohio?', a: 'Anthem’s Ohio commercial provider manual sets no number of its own: the deadline is the one in your provider agreement, rejected claims must be corrected and resubmitted inside that same window, and corrections go in as replacement claims (frequency code 7). Ohio’s prompt-pay law gives Anthem 30 days to pay or deny a clean claim on the standard form.' },
      { q: 'Does Anthem require graphs for an ABA reauthorization?', a: 'Anthem’s ABA provider resource guide sets no graph or data-format requirement for reviews — ask the Anthem behavioral health reviewer what the next review needs. It does require dated, signed documentation entered within 30 days, and lists only CPT 97151–97158, 0362T and 0373T for ABA.' },
    ],
  },
};

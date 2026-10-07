import type { PayerConfig, PayerSource } from './types.js';

/* Maine — researched October 2026 from primary sources only.
   MaineCare rules (10-144 C.M.R. ch. 101) were read as the Secretary of State’s Word files with
   plain curl and a browser user agent; maine.gov DHHS bulletin pages also answer plain curl
   (r.jina.ai gets a Cloudflare challenge there). The MaineCare fee schedule host
   (mainecare.maine.gov, Health PAS) failed TLS verification to curl, returned a SharePoint error
   to r.jina.ai and a 503 to WebFetch, so no Section 28 rate is published here. Maine statutes
   were read on legislature.maine.gov (data extracted 10/20/2025, per the Revisor’s page footer). */

const S: Record<string, PayerSource> = {
  mbm: { title: 'Maine Secretary of State — 10-144 C.M.R. ch. 101, MaineCare Benefits Manual (chapter index)', url: 'https://www.maine.gov/sos/cec/rules/10/ch101.htm' },
  s28: { title: 'MaineCare Benefits Manual, Ch. II, Section 28 — Adaptive Behavior Services for Children (eff. April 29, 2026, filing 2026-101)', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/c2s028-2026-101%20NEW.docx' },
  s65: { title: 'MaineCare Benefits Manual, Ch. II, Section 65 — Behavioral Health Services (eff. April 28, 2026, filing 2026-095; corrections May 2026)', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/c2s065-2026-095-NSC.docx' },
  s7: { title: 'MaineCare Benefits Manual, Ch. I, Section 7 — Children’s Behavioral Health Services Global Rule (eff. April 14, 2026, filing 2026-087)', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/c1s007-2026-087%20NEW%20%28Non-EMR%29.docx' },
  s4: { title: 'MaineCare Benefits Manual, Ch. I, Section 4 — Telehealth Services (amended Nov. 6, 2023; accessibility check July 2025)', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/c1s004%20-%20JUL%202025.docx' },
  s1: { title: 'MaineCare Benefits Manual, Ch. I, Section 1 — General Administrative Policies and Procedures (1.07 TPL, 1.10 claims, 1.14 prior authorization, 1.23 provider appeals)', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/c1s001.docx' },
  adopt28: { title: 'MaineCare Notice of Agency Rulemaking Adoption — Ch. II Section 28 adopted, Ch. II and Ch. III Section 28 repealed (Apr. 29, 2026)', url: 'https://www.maine.gov/dhhs/oms/providers/provider-bulletins/mainecare-notice-agency-rulemaking-adoption-mainecare-benefits-manual-chapter-ii-section-28' },
  saLaunch: { title: 'MaineCare provider bulletin — Single Assessment Launch on Feb. 2 (referrals go to Acentra) (Feb. 2, 2026)', url: 'https://www.maine.gov/dhhs/oms/providers/provider-bulletins/single-assessment-launch-feb-2-referral-link-non-bh-providers-2026-02-02' },
  grid: { title: 'Acentra Health Maine — ASO MaineCare Funded Service Grid (July 1, 2026)', url: 'https://me.acentra.com/wp-content/uploads/sites/35/2026/06/MaineCare-Funded-Service-Grid-20260701-1.pdf' },
  cola: { title: 'MaineCare provider bulletin — Cost-of-Living Adjustments for Sections 2 … 28 … 96, 1.0% eff. Jan. 1, 2026 (Dec. 1, 2025)', url: 'https://www.maine.gov/dhhs/oms/providers/provider-bulletins/mainecare-cost-living-adjustments-colas-sections-2-12-13-17-18-19-20-21-26-28-29-60-65-90' },
  st2768: { title: '24-A M.R.S. § 2768 — Coverage for the diagnosis and treatment of autism spectrum disorders (individual policies)', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec2768.html' },
  st2847T: { title: '24-A M.R.S. § 2847-T — Coverage for the diagnosis and treatment of autism spectrum disorders (group policies)', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec2847-T.html' },
  st4259: { title: '24-A M.R.S. § 4259 — Coverage for the diagnosis and treatment of autism spectrum disorders (HMO contracts)', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec4259.html' },
  pl597: { title: 'P.L. 2013, c. 597 — An Act To Amend Insurance Coverage for Diagnosis of Autism Spectrum Disorders (age 5 → 10; applies from Jan. 1, 2015)', url: 'https://legislature.maine.gov/legis/bills/bills_126th/chapters/PUBLIC597.asp' },
  st4316: { title: '24-A M.R.S. § 4316 — Coverage for telehealth services', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec4316.html' },
  st4304: { title: '24-A M.R.S. § 4304 — Utilization review (prior authorization timeframes)', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec4304.html' },
  st4303: { title: '24-A M.R.S. § 4303 — Plan requirements (sub-§ 2 credentialing, 2-A payment during credentialing, 10 retrospective denials)', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec4303.html' },
  st2436: { title: '24-A M.R.S. § 2436 — Interest on overdue payments (30-day claim payment)', url: 'https://legislature.maine.gov/statutes/24-A/title24-Asec2436.html' },
  ch790: { title: 'Bureau of Insurance Rule 02-031 ch. 790 — Procedures for Resolving Coordination of Benefits Disputes', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/content/assets/031c790.doc' },
  t32: { title: 'Maine Revised Statutes, Title 32 (Professions and Occupations) — chapter list (no behavior-analyst chapter; ch. 141 is Professional Land Surveyors)', url: 'https://legislature.maine.gov/statutes/32/title32ch0sec0.html' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Maine not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  anthemMEPA: { title: 'Anthem BCBS — Maine Precertification/Prior Authorization List, Commercial (ME-BCBS-CM-014614-26, July 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/ME_PA_List.pdf' },
  anthemRG: { title: 'Anthem BCBS — Applied Behavior Analysis Provider Resource Guide (multi-state incl. Maine, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Maryland exhibit only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (Network Participation Criteria, 8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines incl. Maine Regulatory Addendum (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH803ABASTM, effective July 2026; Maine not listed)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated June 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  hpMNG: { title: 'Point32Health MNG — Applied Behavioral Analysis (ABA) for Commercial Products and Tufts Health Direct (eff. July 1, 2026)', url: 'https://wwwassets.point32health.org/documents/aba-commercial-iq-comm-mng' },
  hpPP: { title: 'Point32Health Payment Policy — Applied Behavioral Analysis (ABA) Services (rev. 05/2026)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-aba-services-pp' },
  hpTele: { title: 'Point32Health Payment Policy — Telehealth/Telemedicine (rev. 07/2026; ME behavioral health paid at 100%)', url: 'https://www.point32health.org/documents/telehealth-ent-pp' },
  hpForm: { title: 'Point32Health — Applied Behavioral Analysis Prior Authorization Form (rev. 9/2025; code grid for NH, ME, RI commercial)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-form' },
};

/* ---- Shared Maine commercial layer (same facts on every commercial guide) ---- */
const ME_MANDATE_BODY =
  'Maine’s autism mandate is written three times, once for each kind of contract: 24-A M.R.S. § 2768 for individual health insurance, § 2847-T for group policies, and § 4259 for individual and group HMO contracts. The operative text is the same in all three. The plan "must provide coverage for autism spectrum disorders for an individual covered under a policy or contract who is 10 years of age or under." It must cover "any assessments, evaluations or tests by a licensed physician or licensed psychologist to diagnose whether an individual has an autism spectrum disorder," and must cover treatment "when it is determined by a licensed physician or licensed psychologist that the treatment is medically necessary," with ongoing medical necessity demonstrable "at least annually." It "may not include any limits on the number of visits," but it "may limit coverage for applied behavior analysis to $36,000 per year" (the group and HMO versions add "to the extent allowed by federal law"), and payments for unrelated care may not count toward that cap. ABA is covered as a habilitative or rehabilitative service, and "To be eligible for coverage, applied behavior analysis must be provided by a person professionally certified by a national board of behavior analysts or performed under the supervision of" such a person. The mandate does not change a school’s obligations under an IEP or IFSP. The age ceiling was 5 until P.L. 2013, c. 597 raised it to 10 for policies issued or renewed from January 1, 2015. Two practical consequences: a child turns out of the mandate at 11, after which ABA depends on the plan’s own terms; and the mandate binds fully insured plans regulated in Maine, not self-funded employer plans, which answer to ERISA and their plan documents.';

const ME_LICENSURE_BODY =
  'Maine does not license behavior analysts. The BACB’s U.S. licensure table, which lists every state with a behavior-analyst licensure law and its board, does not include Maine, and Title 32 of the Maine Revised Statutes (professions and occupations) has no behavior-analyst chapter (chapter 141, sometimes cited for this, is the professional land surveyors chapter). The working credential is BACB certification, which the mandate itself requires for whoever provides or supervises ABA. Maine’s credentialing statute still helps: under 24-A M.R.S. § 4303(2)(D) a carrier must decide a completed credentialing application "within 60 days," must review a new application within 30 days and return an incomplete one "with a comprehensive list of all corrections needed," and "may not require that a provider have a home address within the State." Under § 4303(2-A), once credentials are granted the carrier pays claims for services rendered "from the date a complete application for credentialing is submitted," though you may not submit those claims until the carrier tells you the credentialing outcome and effective date. Commercial ABA rates are negotiated and unpublished, and the MaineCare ABA rate (Section 28, H2021 U1 HK) sits on a fee schedule we could not retrieve this month.';

const ME_CLAIMS_BODY =
  'Maine’s prompt-pay law, 24-A M.R.S. § 2436, makes a health claim "payable within 30 days after proof of loss is received"; a claim "neither disputed nor paid within 30 days is overdue" and bears interest at 1½% a month. A provider may submit a claim to every carrier that may be liable, primary and secondary, at the same time, and each must pay or deny "within 30 calendar days after the carrier has received all information needed," whether or not the other carrier has acted. A claim the carrier rejects for not using the standard claim form cannot be billed to the family; fix and resubmit it. After payment, § 4303(10) bars a carrier from retrospectively denying a paid claim more than 12 months after payment unless it gives the reason in writing and the claim falls within narrow exceptions (up to 36 months for duplicate payment, services not delivered, adjustment with another insurer or legal action; beyond that only for fraud or Medicaid/Medicare/CHIP claims). Appeals of an adverse treatment decision must be heard by a clinical peer who was not involved in the first decision (§ 4304(7)). The timely-filing limit itself is a contract term, not a statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured Maine plans, 24-A M.R.S. §§ 2768, 2847-T and 4259 require autism coverage for a covered person "10 years of age or under" and allow ABA to be capped at $36,000 a year; from age 11 the plan’s own terms decide. Self-funded ERISA plans are outside the statute.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Maine plan, the mandate covers treatment "when it is determined by a licensed physician or licensed psychologist that the treatment is medically necessary," and the plan may require that physician or psychologist to demonstrate ongoing medical necessity "at least annually." Self-funded ERISA plans sit outside the statute.';

const ME_TELEHEALTH_TAIL =
  ' For a fully insured Maine plan, 24-A M.R.S. § 4316 says a carrier "may not deny coverage on the basis that the health care service is provided through telehealth if the health care service would be covered if it were provided through in-person consultation," that "Prior authorization is required for telehealth services only if prior authorization is required for the corresponding covered health care service," and that "An in-person consultation prior to the delivery of services through telehealth is not required." Coverage may not be limited "on the basis of geography, location or distance for travel," and the carrier may not add telehealth-only credentialing. Self-funded employer plans are outside the statute.';

const authTurnaround = (carrier: string) =>
  `Depends on how the plan is funded. Fully insured Maine plans fall under 24-A M.R.S. § 4304(2): a provider’s prior-authorization request for a nonemergency service "must be answered by a carrier within 72 hours or 2 business days, whichever is less." The same clock restarts when the carrier asks for more information (from receipt of it) or says outside consultation is needed. "If a carrier does not grant or deny a request for prior authorization within the time frames required under this subsection, the request for prior authorization by the provider is granted." Once approved, the carrier "may not retrospectively deny coverage or payment for the originally approved service" absent fraudulent or materially incorrect information, and may not deny the claim when the service is delivered within 14 days before or after the approved date. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension. ${carrier} publishes no Maine-specific ABA turnaround or reauthorization lead time.`;

const coordinationOfBenefits = (carrier: string) =>
  `Maine lets a provider bill every potentially liable carrier at once: under 24-A M.R.S. § 2436(1-A) each carrier, primary or secondary, must pay or deny "within 30 calendar days after the carrier has received all information needed to pay or deny the claim whether or not another carrier with which it is attempting to coordinate has acted." If two carriers cannot agree on the order of benefits within 30 days of having everything they need, Bureau of Insurance Rule ch. 790 says they "shall immediately pay the claim in equal shares" and settle up afterward, with neither paying more than it would have as primary. We did not find Maine’s order-of-benefit (birthday-rule) text this month, so ask the carriers which plan is primary. If the child also has MaineCare, ${carrier} pays first: "MaineCare is the payer of last resort," and a medical-necessity denial from the commercial plan must be appealed before MaineCare will consider the claim (MaineCare Benefits Manual Ch. I, § 1.07-3). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).`;

const cobVerify = (carrier: string) =>
  `Ask ${carrier} at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan follows its own order), and record every other coverage the child has, including MaineCare.`;

const COB_CITES = [S.st2436, S.ch790, S.s1, S.cfr433, S.tricare, S.champva];

export const mainePayers: Record<string, PayerConfig> = {
  'maine-medicaid': {
    slug: 'maine-medicaid',
    cardDesc: 'MaineCare is fee-for-service: ABA is a Section 28 benefit under 21, gated by Acentra’s Single Assessment and prior auth, billed H2021 U1 HK.',
    assessmentPA: {
      value: 'There is no separate assessment code to authorize: Section 28 bills ABA only as H2021 U1 HK and lists no 97151–97158 codes. Eligibility comes first from the state’s Single Assessment (completed by Acentra’s clinicians for MaineCare), and the BCBA’s in-person comprehensive assessment is due within 30 days after the provider receives the initial service authorization',
      status: 'verified',
      cites: [S.s28, S.s7, S.saLaunch, S.grid],
    },
    treatmentPA: {
      value: 'Yes. "All services in this Section require prior authorization by the Department or its Authorized Entity"; Acentra’s July 2026 grid lists Section 28 ABA for prior-authorization review with a 90-day initial authorization and continued-stay periods of up to 180 days',
      status: 'verified',
      cites: [S.s28, S.grid],
    },
    dxRequired: {
      value: 'Yes for the standard path: ASD (DSM criteria) or Rett syndrome diagnosed by a licensed physician or psychologist experienced in neurodevelopmental disorders, plus a significant functional impairment on the ABAS or Vineland within 12 months. Section 28 also has a path for other neurodevelopmental conditions after less intensive treatment has failed, and an at-risk path for children under 6',
      status: 'verified',
      cites: [S.s28],
    },
    payer: 'MaineCare (Maine Medicaid)',
    state: 'ME', kind: 'state-medicaid',
    pill: 'Payer Guide · MaineCare',
    h1: 'MaineCare ABA coverage: the intake guide.',
    metaTitle: 'MaineCare (Maine Medicaid) ABA Coverage, Section 28 & Prior Auth Guide | Carelu',
    metaDescription:
      'How MaineCare covers ABA: the April 2026 Section 28 Adaptive Behavior Services rule for children under 21, the Single Assessment run by Acentra, prior authorization, H2021 U1 HK billing, EVV, supervision and telehealth limits, and no state behavior-analyst license.',
    intro: [
      'MaineCare, Maine’s Medicaid program run by the DHHS Office of MaineCare Services, has no risk-based managed care plans for ABA: the state authorizes and pays providers directly. ABA lives in Chapter II, Section 28 of the MaineCare Benefits Manual, which was rewritten from scratch effective April 29, 2026 as "Adaptive Behavior Services for Children." The old Section 28 ("Rehabilitative and Community Support Services for Children with Cognitive Impairments and Functional Limitations") and its Chapter III rate section were repealed the same day, so older guidance that cites them is out of date.',
      'Two gates come before any ABA hour is paid. The child must qualify through the Single Assessment, a statewide eligibility review for medium- and high-intensity children’s behavioral health services that Acentra Health’s licensed clinicians complete for MaineCare, and the provider must then get prior authorization through Acentra. Acentra is the state’s administrative services organization, not a health plan: the card, the rules and the payment are all MaineCare’s.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: Section 28 Adaptive Behavior Services for members under 21' },
      { label: 'Structure', value: 'Fee-for-service; no MCOs. Acentra Health (ASO) runs the Single Assessment and prior authorization' },
      { label: 'Rule', value: 'MBM Ch. II § 28, Adaptive Behavior Services for Children (eff. 4/29/2026); Ch. III § 28 repealed' },
      { label: 'Eligibility', value: 'Under 21 + Level 2 or higher on ECSII/CALOCUS-CASII/LOCUS + ASD or Rett dx + ABAS/Vineland impairment within 12 months' },
      { label: 'Billing code', value: 'H2021 U1 HK per 15 min (group: add UN/UP/UQ); school-related ABA H2021 U2 HK' },
      { label: 'Rates', value: 'On the MaineCare fee schedule (not retrieved); +1.0% COLA from 1/1/2026' },
      { label: 'Who may deliver', value: 'Direct care staff with BHP certification or the RBT credential, supervised by a BCBA or licensed psychologist' },
      { label: 'EVV', value: 'Required for community providers' },
      { label: 'Licensure', value: 'None: Maine does not license behavior analysts' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: Section 28, not a health plan',
        body: [
          'MaineCare’s ABA benefit is Section 28, Adaptive Behavior Services for Children, adopted effective April 29, 2026. It covers two services: Adaptive Skills Training and Applied Behavior Analysis, which "are duplicative of each other and cannot be delivered concurrently to a Member." ABA is "an evidence-based treatment service … based on the principles of behavior analysis," and may include discrete trial training, behavioral skills training, incidental teaching, functional communication training and parent training (which "cannot be the primary focus"). Functional behavior assessments, care coordination with other providers and analysis of progress data "may only be delivered by a supervisor." The adoption notice says the Department repealed the old Section 28 and the Chapter III Section 28 allowances because they "contain outdated, ambiguous, and inaccurate provisions," and wrote the new rule partly to comply with Maine’s settlement agreement with the U.S. Department of Justice.',
          'Section 65 (Behavioral Health Services) is not the ABA benefit, but it carries a related program: the Developmental Disability and Behavioral Health Intensive Outpatient Program (DD/BH-IOP) for children and adults with ASD or an intellectual disability and serious problem behaviors. It must "utilize Applied Behavior Analysis (ABA) principles," including an FBA completed by a BCBA and a positive behavior support plan, at a minimum of three hours a day, three days a week, delivered in person with prior authorization.',
        ],
        cites: [S.s28, S.adopt28, S.s65, S.mbm],
      },
      {
        h2: 'The front door: Single Assessment, then prior authorization through Acentra',
        body: [
          'Eligibility for Section 28 community services "is determined through the Single Assessment" under the Children’s Behavioral Health Services Global Rule (Ch. I, Section 7). The Single Assessment combines the age-appropriate level-of-care tool (ECSII for ages 0–5, CALOCUS-CASII for 6–18, LOCUS for 18–20), a review of diagnoses and past treatment records, an interview with the child and family, and, where needed, a diagnostic evaluation or functional assessment. Section 28 then requires a score of Level 2 or higher on that tool, plus the service-specific criteria. MaineCare launched the process on February 2, 2026: "referrals submitted through the external link go to Acentra. Acentra’s licensed clinicians complete the assessment and determine eligibility on behalf of OMS." Providers already on Acentra’s Atrezzo portal, and case managers, submit Single Assessment requests there; others use the Single Assessment Referral Link. Questions go to Agreement.CBHS@maine.gov or Acentra at 866-521-0027, option 3.',
          'Referrals come through "a Department-approved referral form from healthcare providers, school staff, and responsible state employees"; families can ask any of them to refer, and "Children may self-direct themselves to a Single Assessment." After the family chooses a service, the case manager (or the Department or Acentra) refers to the provider of the family’s choice, and the Department or Acentra "will approve prior authorizations for any service a Child is found eligible for following the Single Assessment." The rule also bars denying behavioral health services because of complex needs, significant medical needs, or a need for services up to 24 hours a day. School-related ABA delivered by a school under an IEP or IFSP needs no Single Assessment, but its prior-authorization request must include the IEP or IFSP.',
        ],
        cites: [S.s28, S.s7, S.saLaunch, S.grid],
      },
      {
        h2: 'Staffing, supervision, documentation and EVV',
        body: [
          'Community providers need MaineCare enrollment, program approval from the Office of Behavioral Health, and a current behavioral health organization license under 10-144 C.M.R. ch. 123. ABA direct care staff must be 18 or older with a high school diploma and either hold Behavioral Health Professional (BHP) certification (or earn it within six months of hire) or "Have Registered Behavior Technician (RBT) certification through the Behavior Analyst Certification Board at the time of hire." Supervisors of ABA staff must be "A BCBA; or A duly licensed psychologist with training and/or experience in behavioral analytic principles." Staff delivering 20 or more hours a week get at least four hours of supervision a month; fewer hours are prorated, with a one-hour monthly minimum.',
          'The supervisor completes an in-person comprehensive assessment within 30 days of the initial service authorization and updates it at least annually. The individual treatment plan is due within 30 days of the start of services, reviewed "at least every ninety (90) days," signed and dated by each staff member involved and by the legal guardian, and copied to the family within 10 days of signature. Every progress note must carry the name, signature and credentials of a staff member who delivered the service, the date, time, location and staff-to-member ratio, family participation, interventions and the child’s response. Community providers must use electronic visit verification (the state system is free, or a compatible system of their own) under the 21st Century Cures Act. Services between 8 p.m. and 6 a.m. are not covered without Department or Acentra approval.',
        ],
        cites: [S.s28],
      },
      {
        h2: 'Billing, rates and claims',
        body: [
          'Section 28 is paid fee-for-service in 15-minute units. Community ABA bills H2021 with modifiers U1 HK (individual), adding UN for a group of two, UP for three and UQ for four to eight; school-related ABA bills H2021 U2 HK with the same group modifiers. "Providers may only bill for the time that direct care staff spend delivering covered services": the rate "account[s] for the full cost of the supervisor," and supervisor time is billable only when the supervisor is standing in as direct care staff. The specific rates are on the MaineCare provider fee schedule on the Health PAS portal, not in the rule; each January 1 the Department applies a cost-of-living adjustment tied to the Maine minimum wage, and MaineCare’s bulletin set the January 1, 2026 COLA for Section 28 at 1.0%. We could not open the fee schedule this month, so no dollar rate is quoted here.',
          'Claims must be filed correctly within one year of the date of service (or one year from the other carrier’s EOB, or from the date eligibility was granted). A provider aggrieved by a MaineCare decision may request an informal review "within sixty (60) calendar days from the date of receipt of that decision," before any administrative hearing; a member must request a hearing within 60 calendar days of the notice.',
        ],
        cites: [S.s28, S.cola, S.s1],
      },
      {
        h2: 'Can a BCBA licensed in another state treat a MaineCare member, including by telehealth?',
        body: [
          'Maine has no behavior-analyst license, so there is no Maine license to obtain; the BACB’s licensure table does not list Maine and Title 32 has no behavior-analyst chapter. The gates are MaineCare’s own: the agency must be an enrolled MaineCare provider, and a community provider needs Office of Behavioral Health program approval and a Maine behavioral health organization license before delivering Section 28 services. ABA supervision must come from a BCBA or a licensed psychologist. On telehealth, Section 28 is narrow: direct care staff "must deliver services in-person," except when "unforeseen and uncontrollable circumstances prevent in-person service delivery, such as unplanned Member travel, Family illness, and inclement weather"; supervisors of ABA "may deliver Functional Behavior Assessments, Parent Training, and supervision and oversight of direct care staff" by telehealth; treatment team meetings may be remote. The supervisor’s comprehensive assessment must be in person. Under Ch. I, Section 4 the member’s site "must be physically located in the United States," and interactive telehealth claims carry modifier GT (93 for telephonic).',
        ],
        cites: [S.s28, S.s4, S.bacbLic, S.t32],
      },
    ],
    collect: [
      { title: 'MaineCare ID', desc: 'Confirm active MaineCare on the date of service; there are no health plans to route to.' },
      { title: 'Single Assessment status', desc: 'Has the child been referred to, or found eligible through, the Single Assessment (Acentra)? Without it, community Section 28 services cannot be authorized.' },
      { title: 'Diagnostic report', desc: 'ASD (or Rett) diagnosis by a licensed physician or psychologist experienced in neurodevelopmental disorders.' },
      { title: 'ABAS or Vineland within 12 months', desc: 'Current edition, showing the composite or domain scores Section 28 requires.' },
      { title: 'Other insurance', desc: 'MaineCare pays last; a commercial medical-necessity denial must be appealed before MaineCare will consider the claim.' },
      { title: 'IEP or IFSP', desc: 'Needed for school-related Section 28 services, and useful to separate school ABA from community ABA (they are not duplicative).' },
    ],
    sources: [S.s28, S.adopt28, S.s7, S.saLaunch, S.grid, S.s65, S.s4, S.s1, S.cola, S.mbm, S.bacbLic, S.t32, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'ABA direct care staff must be supervised by "A BCBA; or A duly licensed psychologist with training and/or experience in behavioral analytic principles." Staff delivering 20 or more hours of direct service a week must receive at least four hours of supervision a month; staff with fewer hours get a prorated amount, minimum one hour a month. Functional behavior assessments, care coordination and progress-data analysis may be delivered only by a supervisor.',
        status: 'verified',
        cites: [S.s28],
      },
      concurrentBilling: {
        value: 'Effectively no: "Providers may only bill for the time that direct care staff spend delivering covered services," the direct-care rate "account[s] for the full cost of the supervisor," and supervisor time is billable only when the supervisor is delivering direct services in the absence of the usual staff. Adaptive Skills Training and ABA cannot be delivered concurrently.',
        status: 'verified',
        cites: [S.s28],
      },
      dailyLimits: {
        value: 'Section 28 sets no daily or weekly unit cap; hours are set by prior authorization against the treatment plan. Acentra’s grid lists a 90-day initial authorization period and continued-stay periods of up to 180 days for community ABA. Services between 8 p.m. and 6 a.m. are not covered unless a supervisor finds them clinically indicated and the Department or Acentra approves. Two-to-one staffing needs its own prior authorization.',
        status: 'verified',
        cites: [S.s28, S.grid],
      },
      noteSignature: {
        value: 'At least one staff member who delivered the service must document a progress note with "Their name, signature, and credentials," the date, time, location and staff-to-member ratio, family participation, interventions and the member’s response. The ITP carries the dated signatures of each staff person who completed it and of the legal guardian; the comprehensive assessment carries the supervisor’s dated signature. Section 28 sets no deadline for signing a session note.',
        status: 'verified',
        cites: [S.s28],
      },
      placeOfService: {
        value: 'Community providers deliver services "in the most clinically appropriate home and community setting," including the member’s home, a provider’s office or a school, but "cannot refuse to deliver services in a Member’s home" without Department approval and "cannot primarily deliver services in a provider’s office or a School." School-related ABA is delivered by an enrolled School Provider under an IEP or IFSP during school hours (H2021 U2 HK) and is not duplicative of community ABA. Section 28 is not available to a member in a residential treatment facility or institution, except school-related services.',
        status: 'verified',
        cites: [S.s28],
      },
      billAsProvider: {
        value: 'The enrolled Section 28 provider agency bills H2021 U1 HK for direct care staff time only. MaineCare’s general rule defines a rendering provider as an individual who "does not bill MaineCare directly," and says "Certain providers will be required to use rendering provider NPI in accordance with the appropriate billing instructions." Section 28 does not say whether Section 28 claims must carry an individual rendering NPI.',
        status: 'unverified',
        cites: [S.s28, S.s1],
        verifyVia: 'MaineCare billing instructions for Section 28 (CMS-1500) on the Health PAS portal (mainecare.maine.gov), or MaineCare Provider Services: ask whether the RBT/BHP or the BCBA must appear as rendering provider.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. Section 28 eligibility requires members "be under the age of twenty-one (21)," and the Global Rule defines a Child as a MaineCare member under 21.',
        status: 'verified',
        cites: [S.s28, S.s7],
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself, but the ABAS or Vineland functional assessment must be from "within the past twelve (12) months," and providers must re-administer the same type of functional assessment annually for utilization review.',
        status: 'verified',
        cites: [S.s28],
      },
      diagnosingProviders: {
        value: 'A "duly licensed physician or psychologist with experience in diagnosing neurodevelopmental disorders" for ASD or Rett syndrome. The alternative path (another neurodevelopmental condition) needs a licensed physician or psychologist to document the condition and find ABA medically necessary; the under-6 at-risk path needs a licensed physician.',
        status: 'verified',
        cites: [S.s28],
      },
      diagnosticTools: {
        value: 'No ASD diagnostic instrument is named. Section 28 requires the current Adaptive Behavior Assessment System or Vineland Adaptive Behavior Scale, administered per its publisher’s guidelines, showing a composite at least 2 SD below average, or 1.5 SD below with a 2 SD communication or social domain score. The Single Assessment uses ECSII (0–5), CALOCUS-CASII (6–18) or LOCUS (18–20), and Section 28 needs Level 2 or higher.',
        status: 'verified',
        cites: [S.s28, S.s7],
      },
      referral: {
        value: 'Yes, to the Single Assessment: referrals come through "a Department-approved referral form from healthcare providers, school staff, and responsible state employees," families can ask any of them to refer, and children may self-direct to the assessment. Medical providers without Atrezzo use the Single Assessment Referral Link; Atrezzo users and case managers submit in Atrezzo. No physician prescription is required by Section 28. School-related services need the IEP or IFSP instead.',
        status: 'verified',
        cites: [S.s7, S.saLaunch, S.s28],
      },
      telehealth: {
        value: 'Limited. Direct care staff "must deliver services in-person," except when "unforeseen and uncontrollable circumstances prevent in-person service delivery, such as unplanned Member travel, Family illness, and inclement weather." Supervisors of ABA may deliver functional behavior assessments, parent training, and supervision and oversight of direct care staff by telehealth, and treatment team meetings may be remote; the supervisor’s comprehensive assessment must be in person. Telehealth follows Ch. I, Section 4: bill the underlying service with modifier GT (interactive) or 93 (telephonic), with the member located in the United States.',
        status: 'verified',
        cites: [S.s28, S.s4],
      },
      authTurnaround: {
        value: 'MaineCare’s own rule: absent urgency, the Department or its Authorized Entity "will make a decision to authorize or deny the request for PA within thirty (30) days of the receipt of the completed request … or services will be considered authorized," and a PA may run up to 12 months. Federal law is now stricter: since January 1, 2026 the state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" (extendable by up to 14 days) and an expedited one within 72 hours. Acentra’s grid sets a 90-day initial authorization for community ABA.',
        status: 'verified',
        cites: [S.s1, S.cfr440, S.grid],
      },
      coordinationOfBenefits: {
        value: '"MaineCare is the payer of last resort." Providers must pursue any third-party resource first, show the other carrier’s EOB, and "If a claim has been denied by a member’s third party payer for services deemed as not medically necessary, the provider must appeal the decision of the third party payer before billing MaineCare," then submit the denial and appeal result. Claims involving other insurance must be filed within one year of the other carrier’s EOB; if the family will not cooperate, MaineCare may be billed after 90 days.',
        status: 'verified',
        cites: [S.s1, S.cfr433],
      },
    },
    faq: [
      { q: 'Does MaineCare cover ABA therapy?', a: 'Yes, for members under 21, under MaineCare Benefits Manual Chapter II, Section 28 (Adaptive Behavior Services for Children, effective April 29, 2026). The child must qualify through the Single Assessment and the provider needs prior authorization.' },
      { q: 'Does MaineCare use managed care plans for ABA?', a: 'No. MaineCare authorizes and pays ABA directly. Acentra Health is the state’s administrative services organization: its clinicians complete the Single Assessment and it handles prior authorization, but it is not a health plan.' },
      { q: 'What code does MaineCare use for ABA?', a: 'H2021 with modifiers U1 HK for community ABA (add UN, UP or UQ for groups of two, three, or four to eight), and H2021 U2 HK for school-related ABA, in 15-minute units. Section 28 lists no 97151–97158 codes.' },
      { q: 'What does MaineCare pay for ABA?', a: 'The rate is on the MaineCare provider fee schedule (Health PAS portal), not in the rule; Section 28 received a 1.0% cost-of-living increase on January 1, 2026. The rate covers the supervisor’s cost, so supervisor time is not billed separately.' },
      { q: 'Can MaineCare ABA be done by telehealth?', a: 'Only partly. RBTs and other direct care staff must work in person except in unforeseen circumstances such as illness or bad weather. The supervising BCBA may do functional behavior assessments, parent training and staff supervision by telehealth, but the initial comprehensive assessment must be in person.' },
      { q: 'Does a BCBA need a Maine license?', a: 'No. Maine does not license behavior analysts. MaineCare requires ABA staff to be supervised by a BCBA or a licensed psychologist, and community agencies need MaineCare enrollment, Office of Behavioral Health approval and a Maine behavioral health organization license.' },
      { q: 'Does EVV apply to ABA in Maine?', a: 'Yes. Section 28 requires community providers to use electronic visit verification, either the free Maine DHHS system or a compatible system of their own.' },
    ],
  },

  'anthem-bcbs-maine': {
    slug: 'anthem-bcbs-maine',
    family: 'anthem',
    cardDesc: 'Maine’s Blue plan: ABA is on the Maine precert list, reviewed by Anthem Behavioral Health; billing rules from Anthem’s ABA resource guide.',
    assessmentPA: {
      value: 'Applied behavior analysis is on Anthem’s Maine precertification list (July 2026), reviewed by Anthem through Behavioral Health at 800-755-0851. The Maine list names the service, not individual codes, so confirm whether 97151/97152 need their own request',
      status: 'plan-dependent',
      cites: [S.anthemMEPA],
      verifyVia: 'Anthem Behavioral Health, 800-755-0851, or the number on the member’s card: ask whether the assessment codes 97151 and 97152 need precertification on this product.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes: "Applied behavior analysis (ABA)" is on the Maine precertification list under behavioral health services, reviewed by Anthem; contact Behavioral Health at 800-755-0851',
      status: 'verified',
      cites: [S.anthemMEPA],
    },
    dxRequired: {
      value: 'Yes for the mandate (autism spectrum disorder is the covered condition under 24-A M.R.S. §§ 2768, 2847-T and 4259); Anthem’s ABA resource guide describes ABA as treatment for autism spectrum disorder. Anthem’s Maine documents do not publish its medical-necessity criteria',
      status: 'plan-dependent',
      cites: [S.st2847T, S.anthemRG, S.anthemMEPA],
      verifyVia: 'Anthem Behavioral Health, 800-755-0851: ask which clinical criteria apply and what diagnostic documentation they require.',
      blocker: 'per-case',
    },
    payer: 'Anthem Blue Cross and Blue Shield (Maine)',
    state: 'ME', kind: 'commercial',
    pill: 'Payer Guide · Anthem BCBS · Maine',
    h1: 'Anthem BCBS Maine ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Maine ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Maine: the Maine precertification list, billing and documentation rules from Anthem’s ABA resource guide, Maine’s autism mandate (age 10 and under, $36,000 ABA cap allowed), and credentialing without a state license.',
    intro: [
      'In Maine, Anthem Blue Cross and Blue Shield is the trade name of Anthem Health Plans of Maine, Inc. Two Anthem documents govern ABA here: the Maine Precertification/Prior Authorization List (July 2026), which puts applied behavior analysis under Anthem’s own behavioral health review, and the multi-state ABA Provider Resource Guide, which names Maine among its states and sets coding, supervision and documentation rules.',
      'Under both sits Maine’s autism mandate, which reaches fully insured plans and only children 10 and under. Establish funding type and the child’s age on every benefits check.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on fully insured plans under the Maine mandate (age 10 and under); otherwise per plan document' },
      { label: 'Who reviews ABA', value: 'Anthem Behavioral Health, 800-755-0851' },
      { label: 'State mandate', value: '24-A M.R.S. § 2768 (individual), § 2847-T (group), § 4259 (HMO)' },
      { label: 'Mandate age', value: '10 years of age or under (raised from 5 by P.L. 2013, c. 597, from 1/1/2015)' },
      { label: 'Mandate caps', value: 'Plans may cap ABA at $36,000 per year; no visit limits allowed' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: Maine does not license behavior analysts; the mandate requires national-board (BACB) certification or supervision' },
      { label: 'Fee schedule', value: 'Not public — paid per your Anthem provider contract' },
    ],
    sections: [
      {
        h2: 'Precertification in Maine',
        body: [
          'Anthem’s Maine Precertification/Prior Authorization List (ME-BCBS-CM-014614-26, July 2026) lists, under behavioral health services, inpatient admissions, partial hospital and intensive outpatient programs, intensive in-home services, TMS and "Applied behavior analysis (ABA)," with Anthem as the reviewer and the instruction "Contact Behavioral Health, Inc. at 800-755-0851." It adds that prior authorization requirements for psychological testing and outpatient services "vary by product and plan." On HMO plans "It is the participating physician’s or care provider’s responsibility" to obtain prior authorization, and the request "must come from the care provider or facility rendering the service"; without it, "the claim payment may be reduced or denied by the Plan and the member must be held harmless." On PPO plans the network provider is responsible, while a BlueCard or non-participating provider leaves it to the member.',
        ],
        cites: [S.anthemMEPA],
      },
      {
        h2: 'Billing and documentation rules from the ABA resource guide',
        body: [
          'Anthem’s ABA Provider Resource Guide (June 2025) names Maine among its states. Approved providers include psychiatrists, psychologists, LCSWs, LPCs and LMFTs with ABA training, BCBAs and BCBA-Ds, "providers practicing under the direction and supervision of the BCBA," and other state-recognized mental health providers. A QHP billing 97155 "can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Technician services "must show the supervising BCBA or other QHP in box 31." Record start and stop times, sign within 30 days of the date of service, and update the treatment plan at least every 6 months. Anthem applies NCCI medically unlikely edits to ABA codes and lists POS 12 (home), 11 (office), 99 (community), 03 (school), and 10 and 02 (telehealth).',
        ],
        cites: [S.anthemRG],
      },
      {
        h2: 'The Maine mandate: what it guarantees',
        body: [ME_MANDATE_BODY],
        cites: [S.st2768, S.st2847T, S.st4259, S.pl597],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [ME_LICENSURE_BODY],
        cites: [S.bacbLic, S.t32, S.st4303, S.st2847T, S.s28],
      },
      {
        h2: 'Claims in Maine: payment timing, retro denials and appeals',
        body: [ME_CLAIMS_BODY + ' Anthem’s resource guide also points to its Documentation Standards and Code and Clinical Editing reimbursement policies; it does not state a filing limit, so use the one in your Anthem agreement.'],
        cites: [S.st2436, S.st4303, S.st4304, S.anthemRG],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Maine mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The Maine mandate covers children 10 and under; from 11 the plan’s own terms decide.' },
      { title: 'HMO or PPO', desc: 'On HMO plans the rendering provider must obtain prior authorization; on PPO plans the network provider does.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis by a licensed physician or psychologist, with the date and clinician.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, MaineCare (pays last), TRICARE or CHAMPVA.' },
    ],
    sources: [S.anthemMEPA, S.anthemRG, S.st2768, S.st2847T, S.st4259, S.pl597, S.st4304, S.st4316, S.st4303, S.st2436, S.ch790, S.bacbLic, S.t32, S.erisa, S.s1],
    deliveryRules: {
      supervision: {
        value: 'Anthem publishes no numeric supervision ratio. It recognizes "providers practicing under the direction and supervision of the BCBA," and allows 97153 alongside 97155 only when the QHP and technician are both face-to-face with the patient and the QHP is directing the technician. The Maine mandate requires ABA to be provided by, or supervised by, a person certified by a national board of behavior analysts.',
        status: 'verified',
        cites: [S.anthemRG, S.st2847T],
      },
      concurrentBilling: {
        value: '"A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Supervised services billed with a QHP procedure fall under Anthem’s Incident To reimbursement policy.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      dailyLimits: {
        value: 'No Anthem-specific daily cap is published. "ABA codes may have associated MUE limits," and Anthem administers NCCI edits as CMS updates them. Authorized hours are set per precertification. The Maine mandate bars visit limits but allows a $36,000 annual ABA cap.',
        status: 'verified',
        cites: [S.anthemRG, S.st2847T],
      },
      noteSignature: {
        value: 'Each entry must identify its author (signature, electronic identifier or initials, with credentials). Documentation is expected "at the time of service, or shortly thereafter and should not exceed 30 days," with a "Signature date within 30 days of the date of service." Start and stop times are required for timed codes.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      placeOfService: {
        value: 'POS codes Anthem lists for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth in the home, 02 telehealth outside the home, all "Subject to the member’s coverage and reviews by the plan." The Maine mandate does not change a school’s IEP or IFSP obligations.',
        status: 'verified',
        cites: [S.anthemRG, S.st2847T],
      },
      billAsProvider: {
        value: '"ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form."',
        status: 'verified',
        cites: [S.anthemRG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem publishes no ABA age limit in its Maine documents.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemMEPA, S.st2768, S.st2847T, S.st4259],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded, then the plan’s own age terms for a child 11 or older.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published in Anthem’s Maine documents.',
        status: 'unverified',
        cites: [S.anthemMEPA, S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-755-0851: ask what diagnostic documentation and dates the review expects.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Anthem’s Maine documents do not say. For a fully insured plan, the mandate covers diagnostic "assessments, evaluations or tests by a licensed physician or licensed psychologist."',
        status: 'plan-dependent',
        cites: [S.anthemMEPA, S.st2847T],
        verifyVia: 'Anthem Behavioral Health, 800-755-0851.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The resource guide stresses "standardized assessments and current clinical information" for tracking progress but names no diagnostic instrument.',
        status: 'unverified',
        cites: [S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-755-0851.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Anthem’s Maine list requires precertification from the rendering provider (HMO) or network provider (PPO), not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.anthemMEPA, S.st2847T],
      },
      telehealth: {
        value: 'Anthem lists POS 10 (telehealth in the member’s home) and 02 (telehealth elsewhere) for ABA, subject to coverage, and refers to its Virtual Visits reimbursement policy, where "Allowed codes may vary."' + ME_TELEHEALTH_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemRG, S.st4316],
        verifyVia: 'Anthem Virtual Visits reimbursement policy and the member’s benefits: confirm which ABA codes are allowed by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: authTurnaround('Anthem'),
        status: 'plan-dependent',
        cites: [S.st4304, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Maine-regulated) or self-funded (ERISA), and what reauthorization lead time Anthem expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: coordinationOfBenefits('Anthem'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: cobVerify('Anthem'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem require prior authorization for ABA in Maine?', a: 'Yes. Applied behavior analysis is on Anthem’s Maine precertification list (July 2026), reviewed by Anthem Behavioral Health at 800-755-0851. Requirements can vary by product, so check the member’s card.' },
      { q: 'Does Maine cap ABA benefits?', a: 'The mandate lets fully insured plans cap ABA at $36,000 a year and covers children 10 and under; it bars limits on the number of visits. Self-funded plans follow their own documents.' },
      { q: 'Can a BCBA and RBT both bill for the same time with Anthem?', a: 'Yes, 97155 with 97153, but only when both are face-to-face with the patient at the same time and the BCBA is directing the technician.' },
      { q: 'How fast must Anthem decide an ABA authorization in Maine?', a: 'For a fully insured Maine plan, within 72 hours or 2 business days, whichever is less; a request not decided in time is granted by law. Self-funded plans follow federal ERISA timelines (15 days for pre-service requests).' },
    ],
  },

  'aetna-maine': {
    slug: 'aetna-maine',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert on all ten ABA codes + Maine’s autism mandate (age 10 and under, $36,000 ABA cap allowed).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024); CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [S.aetnaPrecert, S.aetnaCPB],
    },
    treatmentPA: {
      value: 'Required: 97153–97158, 0362T and 0373T are on the precertification list; the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask what reauthorization interval it uses for ABA.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: ASD only (F84.0, F84.3–F84.9); Aetna considers ABA experimental for other diagnoses',
      status: 'verified',
      cites: [S.aetnaCPB, S.aetnaGuide],
    },
    payer: 'Aetna in Maine',
    state: 'ME', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Maine',
    h1: 'Aetna ABA coverage in Maine: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Maine: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Maine families: the national medical necessity guide, precertification on all ABA codes, Maine’s autism mandate (age 10 and under, $36,000 ABA cap allowed), credentialing without a state license, and what intake should verify.',
    intro: [
      'For an intake team in Maine, an Aetna card means three layers: Aetna’s national ABA policy, Maine’s autism mandate in Title 24-A, and the plan’s funding type, which decides whether the mandate applies at all. Maine’s mandate is narrower than most: it reaches children 10 and under and lets plans cap ABA at $36,000 a year. This guide stacks the layers in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national policy' },
      { label: 'State mandate', value: '24-A M.R.S. § 2768 (individual), § 2847-T (group), § 4259 (HMO)' },
      { label: 'Mandate age', value: '10 years of age or under (raised from 5 by P.L. 2013, c. 597, from 1/1/2015)' },
      { label: 'Mandate caps', value: 'Plans may cap ABA at $36,000 per year; no visit limits allowed' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: Maine does not license behavior analysts; the mandate requires national-board (BACB) certification or supervision' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Maine',
        body: [
          'Aetna covers ABA for autism spectrum disorder and, under CPB 0554 (last reviewed November 26, 2025), "considers ABA experimental, investigational, or unproven for all other non-ASD indications." Its medical necessity guide (©2026) requires a DSM-5 ASD diagnosis "obtained by an appropriate provider," services billed by the appropriately licensed or certified provider, functional impairment on a standardized scale from the past 12 months at least one standard deviation below the mean (or a significant risk of harm), and a measurable treatment plan. Its only state exhibit is Maryland’s, so the national criteria apply in Maine unchanged. The behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T.',
        ],
        cites: [S.aetnaCPB, S.aetnaGuide, S.aetnaPrecert],
      },
      {
        h2: 'The Maine mandate: what it guarantees',
        body: [ME_MANDATE_BODY],
        cites: [S.st2768, S.st2847T, S.st4259, S.pl597],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [ME_LICENSURE_BODY],
        cites: [S.bacbLic, S.t32, S.st4303, S.st2847T, S.s28],
      },
      {
        h2: 'What is Aetna’s fee schedule for ABA?',
        body: [
          'Aetna publishes no ABA rate table. Its provider manual (6/26) treats payment as a contract term: the "rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and where a provider has both an intermediary contract and a direct agreement, "your direct Aetna rates will apply unless we specifically notify you otherwise." Even when a member’s benefits run out, the provider "cannot charge them more than the contracted rate." Get the rates from your Aetna agreement or Aetna provider services.',
        ],
        cites: [S.aetnaOM],
      },
      {
        h2: 'Claims in Maine: payment timing, retro denials and appeals',
        body: [ME_CLAIMS_BODY],
        cites: [S.st2436, S.st4303, S.st4304],
      },
      {
        h2: 'Can a BCBA licensed in another state treat an Aetna member in Maine?',
        body: [
          'Maine issues no behavior-analyst license, so there is no Maine license to add; the mandate asks for national-board (BACB) certification or supervision by a certificant. Aetna’s guide names the billing credential as a licensed behavior analyst "in states with behavior analyst licensure laws," a BCBA, or a licensed psychologist, and its network criteria require that "All BCBAs, BCaBAs and paraprofessionals must meet state requirements. If state requirements are not defined, all BCBAs, BCaBAs and paraprofessionals must meet Aetna standards." For telehealth, Aetna’s provider manual says providers "must act within the scope of their license and ensure that they have the proper licensure based on state requirements." Maine’s telehealth law for insured plans keys eligibility to "acting within the scope of the provider’s license" and bars telehealth-only credentialing. Check your home state’s rules on serving clients located in Maine.',
        ],
        cites: [S.aetnaGuide, S.aetnaNPC, S.aetnaOM, S.st4316, S.bacbLic],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Maine mandate applies) vs. self-funded ERISA (plan document governs). Ask for the employer and check the card.' },
      { title: 'Child’s age', desc: 'The Maine mandate covers children 10 and under; from 11 the plan’s own terms decide.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
      { title: 'Other coverage', desc: 'Second parent’s plan, MaineCare (pays last), TRICARE or CHAMPVA.' },
    ],
    sources: [S.aetnaCPB, S.aetnaCPB648, S.aetnaGuide, S.aetnaPrecert, S.aetnaOM, S.aetnaNPC, S.st2768, S.st2847T, S.st4259, S.pl597, S.st4304, S.st4316, S.st4303, S.st2436, S.ch790, S.bacbLic, S.t32, S.erisa, S.s1],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s guide: services must be provided directly or billed by licensed behavior analysts (where states license them), BCBAs, or licensed psychologists where ABA is within scope, unless mandates, plan documents or contracts say otherwise, with supervision of others "in line with practice standards." Aetna’s Network Participation Criteria (5/26) set the technician tier: "A minimum of one hour of face-to-face supervision is required of the unlicensed or noncertified paraprofessional by a BCBA or licensed psychologist (or behavioral health professional) for each 10 hours of applied behavior analysis," and "the supervisor must be onsite with the child at least one hour a month." The Maine mandate requires ABA to be provided by, or supervised by, a national-board certificant.',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide, S.st2847T],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, CPB 0648, the medical necessity guide).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours follow the guide’s severity assessment, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps); progress is evaluated every six months. A fully insured Maine plan may cap ABA at $36,000 a year but may not limit visits.',
        status: 'verified',
        cites: [S.aetnaGuide, S.st2847T],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; when treatment is in an inpatient, residential or partial hospitalization setting, that level of care’s criteria apply and no separate ABA authorization is needed. The guide expects coordination "with existing providers and/or the school district." The Maine mandate leaves a school’s IEP and IFSP obligations untouched.',
        status: 'verified',
        cites: [S.aetnaGuide, S.st2847T],
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by the appropriately licensed or certified provider (licensed behavior analyst where a state licenses them, BCBA, or licensed psychologist where in scope), unless mandates, plan documents or contracts say otherwise. Maine has no behavior-analyst license, so the BCBA is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.bacbLic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no age cap; the guide lists typical, not limiting, age ranges.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.st2768, S.st2847T, S.st4259],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own age terms for a child 11 or older.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment shown on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." For a fully insured Maine plan, the mandate covers diagnostic testing by a licensed physician or licensed psychologist.',
        status: 'verified',
        cites: [S.aetnaGuide, S.st2847T],
      },
      diagnosticTools: {
        value: 'CPB 0648 names the Autism Diagnostic Interview-Revised (ADI-R), ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral; what they require is precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.st2847T],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and that providers must have "the proper licensure based on state requirements." Aetna’s posted Telemedicine payment policy, which carries the ABA code table, shows a last review of June 2021, so we do not restate its code list here.' + ME_TELEHEALTH_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.st4316],
        verifyVia: 'Availity or the precertification line on the card: ask whether the plan is fully insured in Maine or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: authTurnaround('Aetna'),
        status: 'plan-dependent',
        cites: [S.st4304, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Maine-regulated) or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: coordinationOfBenefits('Aetna'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: cobVerify('Aetna'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Maine?', a: 'Yes, under its national policy for ASD, with Maine’s autism mandate layered on for fully insured plans (children 10 and under, ABA cap of $36,000 a year allowed). Self-funded employer plans follow their own documents.' },
      { q: 'What does the Maine autism mandate require?', a: 'Fully insured plans must cover diagnosis and medically necessary treatment of autism, including ABA by or under a national-board certified behavior analyst, for children 10 and under, with no visit limits; plans may cap ABA at $36,000 a year.' },
      { q: 'Does the Aetna ABA assessment need prior authorization in Maine?', a: 'Yes. 97151 and 97152 are on Aetna’s behavioral health precertification list along with every other ABA code.' },
      { q: 'What does Aetna pay for ABA in Maine?', a: 'Aetna publishes no ABA rates. Its provider manual says payment follows the rates and compensation under your agreement, so the numbers are in your Aetna participation agreement.' },
      { q: 'Does Aetna require RBT certification for ABA technicians?', a: 'Aetna’s network criteria do not require the RBT credential by name: technicians may be paraprofessionals supervised by a BCBA or licensed psychologist, with at least 1 hour of face-to-face supervision per 10 hours of ABA and the supervisor onsite with the child at least 1 hour a month. Maine sets no technician license.' },
    ],
  },

  'cigna-maine': {
    slug: 'cigna-maine',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Maine’s autism mandate (age 10 and under); no PA on assessment codes; Evernorth’s Maine addendum.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA (Cigna autism resource guide); EN0499 sets no PA rule itself',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    treatmentPA: {
      value: 'Required: after the assessment and treatment plan, submit the Applied Behavior Analysis Prior Authorization Form; Evernorth encourages requests up to 30 days before, or two weeks after, the start date',
      status: 'verified',
      cites: [S.cignaARG],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Maine',
    state: 'ME', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Maine',
    h1: 'Cigna / Evernorth ABA coverage in Maine: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Maine: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Maine families: national policy EN0499, no PA on assessments, Evernorth’s Maine regulatory addendum, Maine’s autism mandate (age 10 and under, $36,000 ABA cap allowed), and what intake should verify.',
    intro: [
      'For an intake team in Maine, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, Maine’s autism mandate in Title 24-A, and the plan’s funding type. Many Cigna members are on self-funded employer plans, which the Maine mandate does not reach, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: '24-A M.R.S. § 2768 (individual), § 2847-T (group), § 4259 (HMO)' },
      { label: 'Mandate age', value: '10 years of age or under (raised from 5 by P.L. 2013, c. 597, from 1/1/2015)' },
      { label: 'Mandate caps', value: 'Plans may cap ABA at $36,000 per year; no visit limits allowed' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: Maine does not license behavior analysts; the mandate requires national-board (BACB) certification or supervision' },
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement; fee questions to Evernorth Provider Services, 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Maine',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, "Prior authorization is no longer required for assessment … codes 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst … and the patient’s policy covers ABA services." Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. EN0499 and the resource guide contain no Maine-specific criteria, so the national criteria apply. Evernorth’s September 2026 Administrative Guidelines carry a Maine Regulatory Addendum that applies to insured (not self-funded) business and repeats Maine’s 12-month limit on retrospective denials of paid claims.',
        ],
        cites: [S.en0499, S.cignaARG, S.ebhAdmin],
      },
      {
        h2: 'The Maine mandate: what it guarantees',
        body: [ME_MANDATE_BODY],
        cites: [S.st2768, S.st2847T, S.st4259, S.pl597],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [ME_LICENSURE_BODY],
        cites: [S.bacbLic, S.t32, S.st4303, S.st2847T, S.s28],
      },
      {
        h2: 'What is Cigna’s fee schedule for ABA?',
        body: [
          'Cigna publishes no ABA rate table. Evernorth’s Administrative Guidelines (September 2026) say the Provider Agreement terms "include the reimbursement rates applicable to covered services," and tell ABA providers: "For your fee schedule and a listing of autism spectrum disorder–related services eligible for reimbursement, refer to Exhibit A in your Provider Agreement." Fee questions go to Provider Services at 800.926.2273. Virtual services carry modifier 95, which Evernorth says "will not change the reimbursement." Non-credentialed technicians are paid only through the supervising provider’s claim.',
        ],
        cites: [S.ebhAdmin, S.cignaARG],
      },
      {
        h2: 'Claims in Maine: payment timing, retro denials and appeals',
        body: [ME_CLAIMS_BODY + ' Evernorth’s own filing limit: it "will only consider claims submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement," with exceptions including a longer limit under state law; electronic claims use payer ID 62308.'],
        cites: [S.st2436, S.st4303, S.st4304, S.ebhAdmin, S.cignaARG],
      },
      {
        h2: 'Can a BCBA licensed in another state treat a Cigna member in Maine?',
        body: [
          'Maine issues no behavior-analyst license, so there is no Maine license to add. Evernorth’s Administrative Guidelines say "Providers must meet all state requirements to provide virtual behavioral services, including any licenses and certifications," and that providers who meet the telehealth specialty requirements "may deliver services virtually with no additional credentialing" after filing the Attested Specialty Form. Maine’s telehealth law for insured plans keys eligibility to "acting within the scope of the provider’s license" and bars telehealth-only credentialing. Check your home state’s rules on serving clients located in Maine.',
        ],
        cites: [S.ebhAdmin, S.st4316, S.bacbLic],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Maine mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The Maine mandate covers children 10 and under; from 11 the plan’s own terms decide.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, MaineCare (pays last), TRICARE or CHAMPVA.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.st2768, S.st2847T, S.st4259, S.pl597, S.st4304, S.st4316, S.st4303, S.st2436, S.ch790, S.bacbLic, S.t32, S.erisa, S.s1],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training. Direct plus indirect case supervision runs at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week of direct case supervision.',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T. A fully insured Maine plan may cap ABA at $36,000 a year but may not limit visits.',
        status: 'verified',
        cites: [S.cignaARG, S.st2847T],
      },
      noteSignature: {
        value: 'Each service record must include, among other elements, the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: '"Services that are considered primarily educational or vocational in nature, or related to academic or work performance are not covered or reimbursable." EN0499 lists academic and vocational placements among settings with their own behavioral expectations, so ABA there must still be direct treatment. The Maine mandate leaves school IEP and IFSP obligations untouched.',
        status: 'verified',
        cites: [S.en0499, S.st2847T],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On a CMS-1500, "List only a BCBA or other licensed provider in box 33"; electronic claims use payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.st2768, S.st2847T, S.st4259],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team on 877.279.7603: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but a provisional, rule-out or school-only identification doesn’t count. The clocks run on data: the standardized instrument within 60 days before treatment, baseline data within 60 days, and current data within 60 days of a continued-treatment request.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics" within scope, applying DSM-5-TR criteria.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be standardized, complete and the current edition (the policy’s example: "must be the Vineland-3 vs. Vineland-II").',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis; treatment needs the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.st2847T],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" per the autism resource guide, and EN0499 allows in-person, telehealth or hybrid delivery; the line-of-sight requirement "does not apply to telehealth services." Evernorth bills virtual services with modifier 95.' + ME_TELEHEALTH_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.ebhAdmin, S.st4316],
      },
      authTurnaround: {
        value: authTurnaround('Cigna/Evernorth') + ' Evernorth’s resource guide warns that a late ABA request "may result in a retrospective review and could delay the determination for up to 30 days."',
        status: 'plan-dependent',
        cites: [S.st4304, S.erisa, S.cignaARG],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Maine-regulated) or self-funded (ERISA), and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: coordinationOfBenefits('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: cobVerify('Cigna/Evernorth'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Maine?', a: 'Yes, under national policy EN0499 for ASD, with Maine’s autism mandate layered on for fully insured plans (children 10 and under). Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in Maine?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA. PA starts at treatment.' },
      { q: 'Does a BCBA need a Maine license to bill Cigna?', a: 'Maine issues no behavior-analyst license, and Evernorth accepts a BCBA as an ABA billing provider. Technicians are not credentialed and are billed under the supervising provider.' },
      { q: 'What does Cigna pay for ABA in Maine?', a: 'Cigna publishes no ABA rates. Evernorth says your fee schedule and the list of reimbursable autism services are in Exhibit A of your Provider Agreement; call Evernorth Provider Services (800.926.2273) with fee questions.' },
    ],
  },

  'unitedhealthcare-maine': {
    slug: 'unitedhealthcare-maine',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + Maine’s autism mandate (age 10 and under); no Maine state supplement; telehealth limited to 97155–97157.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless otherwise specified or mandated by contract or law',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; continued-service review examines use of authorized hours (below 80% over two weeks must be explained). The review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval will be set on this member’s ABA authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD diagnosed by a state-licensed physician, psychologist or other qualified state-licensed clinician, confirmed with a validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Maine',
    state: 'ME', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Maine',
    h1: 'UnitedHealthcare / Optum ABA coverage in Maine: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Maine: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Maine families: Optum’s ABA criteria and prior authorization, the three-code telehealth rule, Maine’s autism mandate (age 10 and under, $36,000 ABA cap allowed), and what intake should verify.',
    intro: [
      'For an intake team in Maine, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, Maine’s autism mandate in Title 24-A, and the plan’s funding type. MaineCare has no managed care plans, so a UHC card in Maine is commercial (or Medicare), never Medicaid.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: '24-A M.R.S. § 2768 (individual), § 2847-T (group), § 4259 (HMO)' },
      { label: 'Mandate age', value: '10 years of age or under (raised from 5 by P.L. 2013, c. 597, from 1/1/2015)' },
      { label: 'Mandate caps', value: 'Plans may cap ABA at $36,000 per year; no visit limits allowed' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: Maine does not license behavior analysts; the mandate requires national-board (BACB) certification or supervision' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential level (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Maine',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)," and continued-service review addresses use "below 80% over a 2-week period." Optum’s ABA State Mandates supplement (effective July 2026) has entries for Arizona, California, Connecticut, Florida, Indiana, Kansas, Kentucky, Maryland, Massachusetts, New Jersey, New York, Ohio, Pennsylvania and Virginia; Maine is not among them, so no Maine-specific Optum criteria modify the commercial policy. MaineCare is fee-for-service with no health plans.',
        ],
        cites: [S.optumSCC, S.optumSM, S.s28],
      },
      {
        h2: 'The Maine mandate: what it guarantees',
        body: [ME_MANDATE_BODY],
        cites: [S.st2768, S.st2847T, S.st4259, S.pl597],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [ME_LICENSURE_BODY],
        cites: [S.bacbLic, S.t32, S.st4303, S.st2847T, S.s28],
      },
      {
        h2: 'What is UnitedHealthcare’s fee schedule for ABA?',
        body: [
          'UnitedHealthcare publishes no ABA rate table; Optum pays from the contract. Optum’s National Network Manual (effective Sept. 1, 2026) defines the "Fee Maximum" as "The maximum amount a participating provider may be paid for a specific health care service provided to a member," adding that "Reimbursement to clinicians is based upon licensure rather than degree." Optum’s commercial ABA Reimbursement Policy (2022RP501A, updated June 2026) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed mental health provider, HP for doctoral level, and it bundles indirect work into the direct-service codes. Ask Optum network management for your rate sheet.',
        ],
        cites: [S.optumNNM, S.optumReimb],
      },
      {
        h2: 'Claims in Maine: payment timing, retro denials and appeals',
        body: [ME_CLAIMS_BODY + ' Optum’s own filing limit: claims information "must be received by Optum no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan." Its network manual lists separate Maine Regulatory Requirements.'],
        cites: [S.st2436, S.st4303, S.st4304, S.optumNNM],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Maine mandate applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Child’s age', desc: 'The Maine mandate covers children 10 and under; from 11 the plan’s own terms decide.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2 and others). Optum asks for the instrument.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, MaineCare (pays last), TRICARE or CHAMPVA.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumNNM, S.optumReimb, S.st2768, S.st2847T, S.st4259, S.pl597, S.st4304, S.st4316, S.st4303, S.st2436, S.ch790, S.bacbLic, S.t32, S.erisa, S.s1, S.s28],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate," and Optum does not recommend parents serving as their own child’s RBT.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      concurrentBilling: {
        value: 'Not addressed. The SCC define direct case supervision as happening during direct treatment but do not state the billing consequence.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual and the participating-provider agreement, or a written coding determination from Optum.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap in the SCC. At continued-service review, use of authorized hours below 80% over a two-week period must be explained with barriers and a plan. A fully insured Maine plan may cap ABA at $36,000 a year but may not limit visits.',
        status: 'verified',
        cites: [S.optumSCC, S.st2847T],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA. Telehealth claims must carry POS 02 or 10, which "should reflect the location of the member, not the provider."',
        status: 'verified',
        cites: [S.optumSCC, S.optumTele],
      },
      billAsProvider: {
        value: 'Each claim line carries the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed mental health provider), HP (doctoral level), per Optum’s commercial ABA Reimbursement Policy; reimbursement "is based upon licensure rather than degree."',
        status: 'verified',
        cites: [S.optumReimb, S.optumNNM],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.st2768, S.st2847T, S.st4259],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with validated tools. Use below 80% of authorized hours over two weeks triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'The diagnosis "must be issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool; the SCC list formal diagnostic tools including the ADI-R, ADOS/ADOS-2 and DISCO, alongside screening instruments.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.st2847T],
      },
      telehealth: {
        value: 'Three codes. Optum’s Telehealth Billing guide (updated September 2025), commercial: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." So the 97151 assessment and technician 97153 are not on Optum’s list. Bill POS 10 (home) or 02 (elsewhere); Optum "will not reimburse for services billed with only telehealth modifiers." The SCC add that telehealth options "are not intended to supplant in-person service; rather, they are intended to supplement" it.' + ME_TELEHEALTH_TAIL + ' Ask Optum how it applies the three-code list to a fully insured Maine plan.',
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.st4316],
      },
      authTurnaround: {
        value: authTurnaround('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.st4304, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Maine-regulated) or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: coordinationOfBenefits('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: cobVerify('UnitedHealthcare/Optum'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Maine?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Maine’s autism mandate layered on for fully insured plans (children 10 and under). Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have Maine-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) does not list Maine, so the standard national criteria apply.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in Maine?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157 by telehealth, billed POS 10 or 02. Fully insured Maine plans are also subject to 24-A M.R.S. § 4316, which bars denying a covered service only because it is delivered by telehealth, so ask Optum how it applies the list to your plan.' },
      { q: 'What does UnitedHealthcare pay for ABA in Maine?', a: 'Optum publishes no ABA rates. You are paid up to the Fee Maximum in your agreement, with a credential modifier on each line (HM RBT, HN BCaBA, HO BCBA, HP doctoral).' },
      { q: 'Is UnitedHealthcare a MaineCare plan?', a: 'No. MaineCare pays providers directly, fee-for-service; there are no MaineCare health plans for ABA.' },
    ],
  },

  'harvard-pilgrim-maine': {
    slug: 'harvard-pilgrim-maine',
    family: 'point32',
    cardDesc: 'Point32Health’s Maine commercial plan: PA on all ABA codes via InterQual (MNG eff. 7/1/2026), ME behavioral telehealth paid at 100%.',
    assessmentPA: {
      value: 'Yes: 97151 and 97152 require prior authorization for Harvard Pilgrim commercial products (MNG effective July 1, 2026)',
      status: 'verified',
      cites: [S.hpMNG],
    },
    treatmentPA: {
      value: 'Yes: 97153–97158, 0362T and 0373T require prior authorization; request through HPHConnect’s InterQual questionnaire, with clinical notes uploaded or faxed to 800-232-0816',
      status: 'verified',
      cites: [S.hpMNG],
    },
    dxRequired: {
      value: 'Yes: a definitive ASD diagnosis, ICD-10 F84.0, F84.3, F84.5, F84.8 or F84.9 (the Down syndrome codes apply to Massachusetts products only)',
      status: 'verified',
      cites: [S.hpMNG],
    },
    payer: 'Harvard Pilgrim Health Care (Maine)',
    state: 'ME', kind: 'commercial',
    pill: 'Payer Guide · Harvard Pilgrim · Maine',
    h1: 'Harvard Pilgrim ABA coverage in Maine: the intake guide.',
    metaTitle: 'Harvard Pilgrim ABA Coverage in Maine: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Harvard Pilgrim Health Care (Point32Health) covers ABA in Maine: the July 2026 InterQual-based guideline, prior authorization on every ABA code, what it won’t pay for, telehealth at 100%, and Maine’s autism mandate (age 10 and under, $36,000 ABA cap allowed).',
    intro: [
      'Harvard Pilgrim Health Care, part of Point32Health, sells commercial plans in Maine. One medical necessity guideline covers ABA for Harvard Pilgrim and Tufts Health Plan commercial products, and its reference list cites Maine’s autism statute (24-A M.R.S. § 2768). It relies on InterQual criteria, which are licensed, so the decision logic is not public. What is public: which codes need authorization, which diagnoses qualify, how to submit, and what Point32Health will not pay for.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for a definitive ASD diagnosis, per the Point32Health commercial MNG' },
      { label: 'Criteria', value: 'InterQual (licensed), via HPHConnect questionnaire; MNG effective 7/1/2026' },
      { label: 'State mandate', value: '24-A M.R.S. § 2768 (individual), § 2847-T (group), § 4259 (HMO)' },
      { label: 'Mandate age', value: '10 years of age or under (raised from 5 by P.L. 2013, c. 597, from 1/1/2015)' },
      { label: 'Mandate caps', value: 'Plans may cap ABA at $36,000 per year; no visit limits allowed' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: Maine does not license behavior analysts; the mandate requires national-board (BACB) certification or supervision' },
      { label: 'Fee schedule', value: 'Not public — paid at your contracted rates and fee schedule (Point32Health ABA payment policy)' },
    ],
    sections: [
      {
        h2: 'The Point32Health guideline, applied in Maine',
        body: [
          'The Point32Health guideline "Applied Behavioral Analysis (ABA) for Commercial Products and Tufts Health Direct" (effective July 1, 2026) applies to Harvard Pilgrim commercial products, marks prior authorization "Yes," and lists 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T. Harvard Pilgrim requests go through the automated InterQual questionnaire on HPHConnect, with clinical notes uploaded there or faxed to 800-232-0816; the criteria can be viewed in HPHConnect or through the commercial Provider Service Center at 800-708-4414. Outside Massachusetts, the guideline says to use the "Autism Spectrum Disorder Services Prior Authorization Request Form." Since March 1, 2026, for members aged 13–20 the plan "will not use the age-related ‘Limited Evidence’. Age alone will not initiate secondary review." Point32Health’s ABA authorization form carries a code grid for Harvard Pilgrim and Tufts commercial products in NH, ME and RI, requested in units per six-month period.',
          'The payment policy (rev. 05/2026) lists what Point32Health does not pay for: recreational therapy, respite, "Services provided in a school setting that are covered by the educational system’s special education resources as part of the individual education plan (IEP)," escorting a member to another therapy, "Services provided by an immediate family member," vocational rehabilitation, and unproven treatments such as facilitated communication. For self-insured groups, "coverage may vary depending on the terms of the benefit document."',
        ],
        cites: [S.hpMNG, S.hpPP, S.hpForm],
      },
      {
        h2: 'The Maine mandate: what it guarantees',
        body: [ME_MANDATE_BODY],
        cites: [S.st2768, S.st2847T, S.st4259, S.pl597],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [ME_LICENSURE_BODY],
        cites: [S.bacbLic, S.t32, S.st4303, S.st2847T, S.s28],
      },
      {
        h2: 'What is Harvard Pilgrim’s fee schedule for ABA?',
        body: [
          'Harvard Pilgrim publishes no ABA rate table. Point32Health’s ABA payment policy (rev. 05/2026) says: "Providers are reimbursed according to the applicable contracted rates and fee schedules." Its telehealth payment policy (rev. 07/2026) pays Maine behavioral health telehealth at 100% of the applicable fee schedule, the same as in person (Maine medical telehealth is listed at 80%). Get your rates from your Harvard Pilgrim agreement or the Provider Service Center (800-708-4414).',
        ],
        cites: [S.hpPP, S.hpTele],
      },
      {
        h2: 'Claims in Maine: payment timing, retro denials and appeals',
        body: [ME_CLAIMS_BODY + ' Point32Health’s ABA documents do not state a filing limit; use the one in your Harvard Pilgrim agreement.'],
        cites: [S.st2436, S.st4303, S.st4304, S.hpPP],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Maine mandate applies) vs. self-insured (benefit document governs).' },
      { title: 'Child’s age', desc: 'The Maine mandate covers children 10 and under; from 11 the plan’s own terms decide.' },
      { title: 'ICD-10 code', desc: 'F84.0, F84.3, F84.5, F84.8 or F84.9. F84.2 (Rett) is not on the list.' },
      { title: 'HPHConnect access', desc: 'The InterQual questionnaire runs there; register before the first request.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, MaineCare (pays last), TRICARE or CHAMPVA.' },
    ],
    sources: [S.hpMNG, S.hpPP, S.hpTele, S.hpForm, S.st2768, S.st2847T, S.st4259, S.pl597, S.st4304, S.st4316, S.st4303, S.st2436, S.ch790, S.bacbLic, S.t32, S.erisa, S.s1],
    deliveryRules: {
      supervision: {
        value: 'Point32Health requires InterQual’s "Applied Behavior Analysis (ABA) Program-Applied Behavior Analysis Supervision" subset for supervision requests, but the criteria inside it are licensed and not published. The Maine mandate requires ABA to be provided by, or supervised by, a national-board certificant.',
        status: 'unverified',
        cites: [S.hpMNG, S.st2847T],
        verifyVia: 'HPHConnect (Researched → InterQual link) shows the criteria to registered providers; or the commercial Provider Service Center, 800-708-4414.',
        blocker: 'licensed',
      },
      concurrentBilling: {
        value: 'The MNG and payment policy do not address billing 97153 and 97155 for the same time. The payment policy refuses payment where the ABA provider only escorts the member to another therapy.',
        status: 'unverified',
        cites: [S.hpMNG, S.hpPP],
        verifyVia: 'Point32Health General Coding and Claims Editing payment policy, or the commercial Provider Service Center, 800-708-4414.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No ABA-specific cap is in the MNG or ABA payment policy, which point to a separate Maximum Units payment policy. The authorization form requests units per six-month period, not per week.',
        status: 'unverified',
        cites: [S.hpPP, S.hpForm],
        verifyVia: 'Point32Health Maximum Units payment policy (point32health.org, Payment policies).',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Not addressed in the ABA MNG or payment policy.',
        status: 'unverified',
        cites: [S.hpMNG, S.hpPP],
        verifyVia: 'Harvard Pilgrim provider manual (documentation standards) or the commercial Provider Service Center, 800-708-4414.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not paid: "Services provided in a school setting that are covered by the educational system’s special education resources as part of the individual education plan (IEP)," and services "primarily educational in nature." The InterQual subsets include consultation with school personnel. No other setting restriction is published.',
        status: 'verified',
        cites: [S.hpPP, S.hpMNG],
      },
      billAsProvider: {
        value: 'Point32Health pays ABA "rendered by appropriately credentialed providers" at contracted rates and does not pay "Services provided by an immediate family member." The authorization form asks for the agency NPI and the BCBA’s NPI, and "will not approve the request if completed by a non-BCBA provider." No rule is published on whose NPI a technician’s service is billed under.',
        status: 'unverified',
        cites: [S.hpPP, S.hpForm],
        verifyVia: 'Harvard Pilgrim commercial Provider Service Center, 800-708-4414, or your provider agreement.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The MNG sets no age cap, and since March 1, 2026 age alone does not trigger secondary review for members 13–20.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.hpMNG, S.st2768, S.st2847T, S.st4259],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-insured, then the benefit document’s age terms for a child 11 or older.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published; any recency expectation sits in the licensed InterQual criteria.',
        status: 'unverified',
        cites: [S.hpMNG],
        verifyVia: 'HPHConnect InterQual criteria view, or Provider Service Center, 800-708-4414.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'The MNG requires "a definitive diagnosis" of ASD but does not name who may make it. For a fully insured Maine plan, the mandate covers diagnostic testing by a licensed physician or licensed psychologist.',
        status: 'plan-dependent',
        cites: [S.hpMNG, S.st2847T],
        verifyVia: 'HPHConnect InterQual criteria view, or Provider Service Center, 800-708-4414.',
        blocker: 'licensed',
      },
      diagnosticTools: {
        value: 'Not published; any instrument requirement sits in the licensed InterQual subsets ("Initial Applied Behavior Analysis Assessment" and the ABA Program subsets).',
        status: 'unverified',
        cites: [S.hpMNG],
        verifyVia: 'HPHConnect InterQual criteria view, or Provider Service Center, 800-708-4414.',
        blocker: 'licensed',
      },
      referral: {
        value: 'The MNG requires prior authorization, not a physician referral; HMO referral rules for the member’s product are not addressed in the ABA documents.' + MANDATE_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.hpMNG, S.st2847T],
        verifyVia: 'Harvard Pilgrim Member Services, 888-333-4742, or Provider Service Center, 800-708-4414: ask whether the member’s product needs a PCP referral for ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Covered under Point32Health’s Telehealth/Telemedicine payment policy (rev. 07/2026), which applies to Harvard Pilgrim commercial products and pays "medically necessary telehealth/telemedicine services consistent with applicable state mandates" when the service is clinically appropriate as a substitute for in-person care, the patient is present and consents, both locations are documented and the platform is HIPAA compliant. Commercial claims use POS 02 or 10 with modifier 93, 95 or GT, and Maine behavioral health telehealth is paid at 100% of the fee schedule. The ABA documents publish no ABA telehealth code list.' + ME_TELEHEALTH_TAIL,
        status: 'verified',
        cites: [S.hpTele, S.st4316, S.hpMNG],
      },
      authTurnaround: {
        value: authTurnaround('Harvard Pilgrim'),
        status: 'plan-dependent',
        cites: [S.st4304, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Maine-regulated) or self-funded (ERISA), and what reauthorization lead time Harvard Pilgrim expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: coordinationOfBenefits('Harvard Pilgrim'),
        status: 'plan-dependent',
        cites: COB_CITES,
        verifyVia: cobVerify('Harvard Pilgrim'),
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Harvard Pilgrim cover ABA in Maine?', a: 'Yes, for members with a definitive ASD diagnosis, under Point32Health’s commercial ABA guideline (effective July 1, 2026), with prior authorization on every ABA code.' },
      { q: 'What criteria does Harvard Pilgrim use for ABA?', a: 'InterQual, through an automated questionnaire on HPHConnect. The criteria are licensed; registered providers can view them in HPHConnect.' },
      { q: 'Does Harvard Pilgrim pay for ABA by telehealth in Maine?', a: 'Its telehealth payment policy pays medically necessary telehealth when it is an appropriate substitute for in-person care, billed POS 02 or 10 with modifier 93, 95 or GT, at 100% of the fee schedule for behavioral health in Maine. No ABA code list is published, so confirm codes at authorization.' },
      { q: 'What does Harvard Pilgrim pay for ABA in Maine?', a: 'Point32Health pays ABA “according to the applicable contracted rates and fee schedules” and publishes no ABA rate table.' },
    ],
  },
};

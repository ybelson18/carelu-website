import type { PayerConfig, PayerSource } from './types.js';

/* District of Columbia — researched October 2026 from primary sources only.
   Access notes: code.dccouncil.gov, dhcf.dc.gov, dcregs.dc.gov, the plans’ sites and the national
   carrier policies all answered plain curl with a browser user agent. Three things did not:
   (1) www.dc-medicaid.com (the DC Medicaid portal that hosts the ASD fee schedule) returns a
   Cloudflare "Suspected Phishing" interstitial to curl and to r.jina.ai alike; (2) the codified text of
   29 DCMR Chapter 110 (Medicaid ASD services) — dcregs lists the chapter heading but no sections, so the
   SPA is the controlling document we could read; (3) CareFirst’s Medical Policy Reference Manual lives
   on secure.compliance360.com (SAI360), which returns "Permission Denied" / a JS shell, so CareFirst
   policy 3.01.015 and operating procedure 8.01.011A were read only through CareFirst’s own update
   notices and provider-manual chapters. medicaid.gov SPA PDFs 403 to curl; r.jina.ai read SPA 23-0009.
   AmeriHealth Caritas DC’s code-level PA answers come from the plan’s public lookup tool
   (priorauthlookup.amerihealthcaritas.com, planname=acdc), queried 10/7/2026. */

const S: Record<string, PayerSource> = {
  spa: { title: 'DC State Plan Amendment 23-0009 — Autism Spectrum Disorder services under EPSDT (approved Aug. 25, 2023; effective Oct. 1, 2023)', url: 'https://www.medicaid.gov/medicaid/spa/downloads/DC-23-0009.pdf' },
  t2335: { title: 'DHCF Transmittal 23-35 — Public Notice of Submission of State Plan Amendment, Autism Spectrum Disorder (Aug. 18, 2023)', url: 'https://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/publication/attachments/Transmittal%2023-35%20-%20Public%20Notice%20of%20Submission%20of%20State%20Plan%20Amendment%20%E2%80%93%20Autism%20Spectrum%20Disorder%20%282%29.pdf' },
  mcac: { title: 'DHCF Medical Care Advisory Committee — SPA, Waiver and Rule Report (June 2024): 29 DCMR Chapter 110 ASD rulemaking status', url: 'https://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/page_content/attachments/MCAC%20SPA%20Waiver%20Rule%20Report%20June24.pdf' },
  dcmr110: { title: 'DCRegs — 29 DCMR Chapter 110, Medicaid Reimbursable Autism Spectrum Disorder Services (chapter listing)', url: 'https://www.dcregs.dc.gov/Common/DCMR/RuleList.aspx?ChapterNum=29-110' },
  mcps: { title: 'DHCF — Medicaid Managed Care Plans (MCPs): AmeriHealth Caritas DC, MedStar Family Choice DC, HSCSN (CASSIP)', url: 'https://dhcf.dc.gov/page/medicaid-managed-care-plans-mcps' },
  t2619: { title: 'DHCF Transmittal 26-19 (rev.) — Managed Care Plan Transition: Wellpoint DC enrollees to AmeriHealth Caritas DC (Aug. 6, 2026)', url: 'https://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/publication/attachments/Transmittal%2026-19%20%28rev.%29%20-%20Managed%20Care%20Plan%20Transition.pdf' },
  mcoContract: { title: 'DHCF — DC Healthy Families Managed Care Contract CW99929 (public version, as of April 1, 2023)', url: 'https://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/page_content/attachments/MCP%20Contract%20PUBLIC.pdf' },
  teleGuide: { title: 'DHCF — Telemedicine Provider Guidance (January 2023, Transmittal 23-11)', url: 'https://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/page_content/attachments/Telemedicine%20Provider%20Guidance_January%202023%20-%20Transmittal%2023-11.pdf' },
  evv: { title: 'DHCF — Electronic Visit Verification (EVV)', url: 'https://dhcf.dc.gov/page/electronic-visit-verification-evv' },
  t2508: { title: 'DHCF Transmittal 25-08 — Prior Authorization Updates (names Comagine Health as DC’s QIO)', url: 'https://dhcf.dc.gov/sites/default/files/dc/sites/dhcf/publication/attachments/Transmittal%2025-08%20-%20Prior%20Authorization%20Updates%20for%20General%20Hospitals%20and%20Nursing%20Home%20Placements.pdf' },
  dcMedicaidPortal: { title: 'DC Medicaid web portal — fee schedule inquiry (where SPA 23-0009 says ASD fees are published)', url: 'https://www.dc-medicaid.com/dcwebportal/nonsecure/feeScheduleInquiry' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  dc3271: { title: 'D.C. Code § 31-3271 — Definitions (habilitative services; "congenital or genetic birth defect" includes autism)', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3271' },
  dc3272: { title: 'D.C. Code § 31-3272 — Coverage of habilitative services for children under 21 (D.C. Law 16-198)', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3272' },
  hbx: { title: 'DC Health Benefit Exchange Authority — Executive Board Resolution on EHB standards (Mar. 22, 2013): habilitative category includes ABA for ASD', url: 'https://hbx.dc.gov/sites/default/files/dc/sites/Health%20Benefit%20Exchange%20Authority/publication/attachments/Resolution-EHBandPlanOfferingStandardsmk_0.pdf' },
  dc3132: { title: 'D.C. Code § 31-3132 — Prompt payment (30-day clean claim; 180-day minimum filing window)', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3132' },
  dc3133: { title: 'D.C. Code § 31-3133 — Retroactive denial of reimbursement', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3133' },
  dc3862: { title: 'D.C. Code § 31-3862 — Telehealth: private reimbursement', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3862' },
  dc3863: { title: 'D.C. Code § 31-3863 — Telehealth: Medicaid reimbursement', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3863' },
  dc3875_03: { title: 'D.C. Code § 31-3875.03 — Prior authorization decision timeframes (Prior Authorization Reform Amendment Act of 2023)', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3875.03' },
  dc3875_04: { title: 'D.C. Code § 31-3875.04 — Length of prior authorization', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3875.04' },
  dc3875_05: { title: 'D.C. Code § 31-3875.05 — Prior authorization appeals', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3875.05' },
  dc3875_07: { title: 'D.C. Code § 31-3875.07 — Continuity of care (honor a prior plan’s approval for 60 days)', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/31-3875.07' },
  dc1202_11: { title: 'D.C. Code § 3-1202.11 — Board of Psychology (regulates the practice of behavior analysis; D.C. Law 25-191)', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/3-1202.11' },
  dc1207_71: { title: 'D.C. Code § 3-1207.71 — Behavior analyst licensure: eligibility and education', url: 'https://code.dccouncil.gov/us/dc/council/code/sections/3-1207.71' },
  dcPsy: { title: 'DC Health — Psychology Licensing (Board of Psychology page)', url: 'https://dchealth.dc.gov/service/psychology-licensing' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (District of Columbia: 2024, DC Board of Psychology)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  acdcPM: { title: 'AmeriHealth Caritas DC — 2026 Provider Manual (revised September 2026)', url: 'https://www.amerihealthcaritasdc.com/content/dam/amerihealth-caritas/acdc/pdf/provider/manual.pdf.coredownload.inline.pdf' },
  acdcLookup: { title: 'AmeriHealth Caritas DC — Prior Authorization Lookup Tool (code results queried 10/7/2026)', url: 'https://www.amerihealthcaritasdc.com/provider/resources/prior-authorization-lookup-tool' },
  acdcPA: { title: 'AmeriHealth Caritas DC — Prior authorization (provider page)', url: 'https://www.amerihealthcaritasdc.com/provider/resources/prior-auth' },
  mfcQAG: { title: 'MedStar Family Choice DC — Quick Authorization Guide, DC Healthy Families (effective 08/15/2026)', url: 'https://www.medstarfamilychoicedc.com/-/media/project/mho/mfcdc/preauth_um/quick-authorization-guide-dc-healthy-families-plan_8-15-2026_web_excludingdrugs.pdf' },
  mfcPM: { title: 'MedStar Family Choice DC — DC Healthy Families Provider Manual (October 2025)', url: 'https://www.medstarfamilychoicedc.com/-/media/project/mho/mfcdc/provider-manual/mfc-dc-october-2025-provider-manual-102225.pdf' },
  mfcUM: { title: 'MedStar Family Choice DC — Utilization management (provider page)', url: 'https://www.medstarfamilychoicedc.com/providers/utilization-management' },
  hscsnPM: { title: 'HSCSN — Provider Manual (updated January 2026)', url: 'https://hscsnhealthplan.org/sites/default/files/2026-01/hscsn-provider-manual-january-2026-508C.pdf' },
  hscsnCodes: { title: 'HSCSN — ABA Billing Codes Change letter (Oct. 21, 2022; codes effective Oct. 1, 2022)', url: 'https://www.hscsnhealthplan.org/sites/default/files/HSCSN%20Update%20to%20ABA%20Authorized%20Codes.pdf' },
  hscsnNews: { title: 'HSCSN — Provider Newsletter, November 2024 (BCaBA direct services; 12 units of ABA evaluation)', url: 'https://www.hscsnhealthplan.org/sites/default/files/2024-11/Provider-Newsletter-November-2024-508.pdf' },
  hscsnEval: { title: 'HSCSN — Provider Request for ABA Evaluation form (8/9/2023)', url: 'https://www.hscsnhealthplan.org/sites/default/files/hscsn-provider-request-for-%20ABA-Evaluation-%208-9-23.2.pdf' },
  hscsnAmend: { title: 'HSCSN — Amendment to Provider Participation Agreement (ABA technician bachelor’s-degree requirement removed)', url: 'https://hscsnhealthplan.org/sites/default/files/aba_provider_contract_change_notice.pdf' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; Exhibit A covers Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025, PCOMM-2025-225)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, effective July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumNNM: { title: 'Optum National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  cfMPU0126: { title: 'CareFirst — Medical Policy Update, January 2026 (3.01.015 Autism Spectrum Disorder, eff. 3/1/2026; DC § 31-3272 pointer)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/medical-policy-update-january-2026.pdf' },
  cfMPU1224: { title: 'CareFirst — Medical Policy Update, December 2024 (8.01.011A Habilitative Services, MD and DC Mandates, revised)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/medical-policy-update-december-2024.pdf' },
  cfPre: { title: 'CareFirst — Pre-Cert/Pre-Auth (In-Network): BlueChoice HMO and PPO lists, PAL tool', url: 'https://provider.carefirst.com/providers/medical/in-network-precertification-preauthorization.page' },
  cfMedPol: { title: 'CareFirst — Medical Policy Reference Manual (portal page)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
  cfCh2: { title: 'CareFirst Provider Manual, Chapter 2: Product Descriptions (FEP services requiring prior authorization)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-2-product-descriptions.pdf' },
  cfCh3: { title: 'CareFirst Provider Manual, Chapter 3: Provider Network Requirements / Administrative Functions (credentialing; payment policy index)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-3-administrative-functions.pdf' },
  cfCh5: { title: 'CareFirst Provider Manual, Chapter 5: Claims, Billing and Payments', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-5-claims-billing-and-payments.pdf' },
  cfCh7: { title: 'CareFirst Provider Manual, Chapter 7: Care Management (UM criteria incl. MCG Behavioral Health Care Guidelines)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-7-care-management.pdf' },
};

/* ---- Shared District of Columbia commercial layer (same facts on every commercial guide) ---- */
const DC_MANDATE_BODY =
  'The District’s autism coverage rule is a habilitative-services statute, not a stand-alone ABA law. D.C. Code § 31-3272 (D.C. Law 16-198, 2007) requires a health insurer to "Provide coverage of habilitative services for children under the age of 21 years and may do so through a managed care system." Section 31-3271 defines habilitative services as "services, including occupational therapy, physical therapy, and speech therapy, for the treatment of a child with a congenital or genetic birth defect to enhance the child’s ability to function," and says a congenital or genetic birth defect "includes: (A) Autism or an autism spectrum disorder." Denying a habilitative request because the condition is not a birth defect is, by statute, an adverse decision. The coverage "shall not be more restrictive than coverage provided for any other illness, condition, or disorder" for deductibles, durational or dollar limits, visit or treatment limits, and cost sharing. An insurer does not have to pay for habilitative services "actually delivered through early intervention or school services." The statute itself never names applied behavior analysis. ABA is named in the District’s essential-health-benefit standard: the DC Health Benefit Exchange Authority’s March 22, 2013 resolution defines the habilitative category as services that help a person "keep, learn or improve skills and functioning for daily living, including, but not limited, to applied behavioral analysis (ABA) for the treatment of autism spectrum disorder." CareFirst’s own ASD policy (3.01.015, updated for March 1, 2026) points DC members to § 31-3272 for mandated coverage. Two exclusions matter in Washington especially: the statute’s definition of a health benefit plan excludes "federal employee health plans, pursuant to contracts with the United States government" and Medicare coverage, and self-funded employer plans answer to ERISA rather than District insurance law.';

const DC_LICENSURE_BODY =
  'The District now licenses behavior analysts, but recently. D.C. Law 25-191 (effective July 19, 2024) gave the Board of Psychology the job of regulating "the practice of behavior analysis" and added a licensed behavior analyst seat to the Board (D.C. Code § 3-1202.11). Under § 3-1207.71 the Board licenses a person who completes a criminal background check, holds "a current certification issued by the Behavior Analyst Certification Board," and has a master’s or higher from a BACB-accredited program, with the education requirement waived for anyone certified by the BACB on or before July 19, 2024. The Mayor was to issue licensure rules (ethics code, education and clinical training, exam, continuing education) within one year. The BACB’s licensure table lists the District (2024, DC Board of Psychology). As of October 2026, though, DC Health’s Board of Psychology page links regulations for psychologists and psychology associates only and shows no behavior-analyst rule or application, so confirm with DC Health whether licenses are being issued before you tell a BCBA they need one. Carriers have not caught up either: CareFirst’s credentialing list still names "Licensed Board-Certified Behavior Analyst (Maryland and Virginia only)" and requires a practitioner to be "licensed in the state where the member receives the service." For telehealth or a BCBA based outside the District, plan on meeting the licensure rule of the place where the child is: DHCF’s telemedicine guidance applies that rule to Medicaid, and ask each commercial plan how it applies it. On rates: commercial ABA rates are negotiated and unpublished. DC Medicaid publishes its ASD fees on the dc-medicaid.com portal, which we could not open.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured District plan, D.C. Code § 31-3272 sets no referral or treatment-plan requirement of its own; it lets the insurer deliver habilitative coverage "through a managed care system," which § 31-3271 defines as review and preauthorization of the treatment plan. Federal employee plans and self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured District plans, D.C. Code § 31-3272 requires habilitative coverage (autism included) for children under 21, with no dollar or visit cap allowed beyond what applies to other conditions. Federal employee plans and self-funded ERISA plans are outside the statute, so funding type decides whether that binds.';

const DC_COMMERCIAL_TURNAROUND = (carrier: string) =>
  'Depends on how the plan is funded. Plans regulated by the District fall under the Prior Authorization Reform Amendment Act of 2023 (D.C. Code ch. 38F). Once it has all required information, a utilization review entity must decide and notify "within … 3 business days of receiving the request via electronic portal or 5 business days of receiving the request via mail, telephone, or facsimile" (24 hours for urgent services), and a request not answered in time "shall be deemed approved." Before an adverse determination it must tell the provider that medical necessity is being questioned and offer a chance to add information. An approval is valid "for at least one year," an approval for a chronic condition stays valid "for as long as medically reasonable and necessary," and it may not be revoked if care is provided within 45 business days. The family gets at least 15 calendar days to appeal. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," with one 15-day extension. ' + carrier + ' publishes no District-specific ABA turnaround or reauthorization lead time.';

const DC_COMMERCIAL_COB = (carrier: string) =>
  'For a child on two plans, the order of benefits comes from the plans’ coordination-of-benefits provisions; we did not read a District COB regulation, so ask ' + carrier + ' which plan is primary. When a child changes plans mid-treatment, D.C. Code § 31-3875.07 makes a District-regulated plan "honor an approval granted by a previous utilization review entity for at least the initial 60 days" of new coverage. If the child also has DC Medicaid, ' + carrier + ' pays first: Medicaid pays after other coverage (42 CFR 433.139), and DC’s Medicaid plans require the primary’s EOB with the claim. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270). If a payer later retracts payment because another carrier was primary, § 31-3133 limits that clawback to 18 months and gives you 180 days to bill the right carrier.';

const DC_COMMERCIAL_TELE =
  ' For a District-regulated plan, D.C. Code § 31-3862 says an insurer "may not deny coverage for a healthcare service on the basis that the service is provided through telehealth if the same service would be covered when delivered in person," must reimburse it, and may review telehealth appropriateness only "in the same manner" as in-person care; cost sharing cannot exceed the in-person amount. The statute names no ABA codes, POS or modifiers, and self-funded and federal employee plans are outside it.';

export const districtOfColumbiaPayers: Record<string, PayerConfig> = {
  'district-of-columbia-medicaid': {
    slug: 'district-of-columbia-medicaid',
    cardDesc: 'ABA is an EPSDT benefit under SPA 23-0009 (since 10/1/2023); most children are in AmeriHealth Caritas DC, MedStar Family Choice DC or HSCSN.',
    assessmentPA: {
      value: 'Not stated for fee-for-service. SPA 23-0009 requires the treatment plan, with the screening and diagnostic evaluation, to go to DHCF "for review and prior approval," but it does not separate the 97151 assessment. Managed-care plans differ: AmeriHealth Caritas DC requires PA on 97151, HSCSN does not (12 units a year)',
      status: 'unverified',
      cites: [S.spa, S.acdcLookup, S.hscsnPM],
      verifyVia: 'DHCF Health Care Delivery Management Administration, (202) 442-5988, or the DC Medicaid provider portal (dc-medicaid.com): ask whether 97151 needs authorization for a fee-for-service child. For managed-care children, ask the child’s plan.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. The ASD treatment plan must "Be submitted to DHCF every six (6) months for review and prior approval, along with the screening, diagnostic evaluation, and supporting clinical documentation" (SPA 23-0009). Managed-care children get authorization from their plan',
      status: 'verified',
      cites: [S.spa, S.mcps],
    },
    dxRequired: {
      value: 'Yes. ASD services treat conditions "associated with ASD, as defined in the most recent edition" of the DSM, and the treatment plan is written "After an ASD diagnosis is determined through a diagnostic evaluation" (SPA 23-0009)',
      status: 'verified',
      cites: [S.spa],
    },
    payer: 'District of Columbia Medicaid',
    state: 'DC', kind: 'state-medicaid',
    pill: 'Payer Guide · District of Columbia Medicaid',
    h1: 'District of Columbia Medicaid ABA coverage: the intake guide.',
    metaTitle: 'DC Medicaid ABA Coverage, Prior Auth & Provider Rules Guide | Carelu',
    metaDescription:
      'How District of Columbia Medicaid (DHCF) covers ABA: an EPSDT benefit for children under 21 under State Plan Amendment 23-0009, treatment plans approved every six months, who may diagnose and deliver ABA, the managed care plans (AmeriHealth Caritas DC, MedStar Family Choice DC, HSCSN), telehealth billing, and claims rules.',
    intro: [
      'District of Columbia Medicaid has covered applied behavior analysis since October 1, 2023, when CMS approved State Plan Amendment 23-0009. The amendment added Autism Spectrum Disorder services to EPSDT for beneficiaries under 21: screening, a diagnostic evaluation, a treatment plan, and treatment services that include "Applied Behavior Analysis (ABA) Therapy." It also made BACB-certified staff (BCBAs, BCBA-Ds, BCaBAs and RBTs) eligible to deliver Medicaid ABA for the first time.',
      'The card decides almost everything else. DHCF says more than 90% of the roughly 100,000 DC Medicaid beneficiaries under 21 are in managed care. DC Healthy Families children are in AmeriHealth Caritas DC or MedStar Family Choice DC; children in the SSI-linked CASSIP program are in Health Services for Children with Special Needs (HSCSN). Wellpoint DC (formerly Amerigroup DC) left the program on August 1, 2026, and its members were moved to AmeriHealth Caritas DC. Each plan runs its own ABA authorization, so the first intake question is which plan is on the card.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as an EPSDT ASD treatment service for beneficiaries under 21 (SPA 23-0009, effective 10/1/2023)' },
      { label: 'Structure', value: 'Managed care for 90%+ of children: AmeriHealth Caritas DC, MedStar Family Choice DC (DC Healthy Families), HSCSN (CASSIP); fee-for-service for the rest' },
      { label: 'Prior approval (FFS)', value: 'Treatment plan to DHCF every 6 months with the screening and diagnostic evaluation' },
      { label: 'Who may deliver ABA', value: 'Psychologist, LICSW, SLP/audiologist, BCBA, BCBA-D; BCaBA under a BCBA/BCBA-D; RBT under a BCBA, BCBA-D or BCaBA' },
      { label: 'Who may diagnose', value: 'Physician, PA, psychologist, psychology associate, LPC, LICSW or APRN, using a validated tool' },
      { label: 'Telehealth billing', value: 'GT (video) or 93 (audio-only); POS 10 home, 03 school, 02 other (DHCF guidance)' },
      { label: 'Licensure', value: 'DC licenses behavior analysts under the Board of Psychology (D.C. Law 25-191, 2024); confirm with DC Health that licenses are being issued' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: the ASD services benefit in the State Plan',
        body: [
          'SPA 23-0009 describes ASD services as "services necessary to screen, diagnose, and treat behavioral, social interaction, communication, and physical conditions associated with ASD," available "to Medicaid beneficiaries under the age of twenty-one (21)." They are covered as preventive services under 42 CFR 440.130(c), so they "must be recommended by a physician or other licensed practitioner of the healing arts within his or her scope of practice." The benefit has four steps: screening; a diagnostic evaluation, which "shall be completed using a validated assessment tool or instrument" and must say whether evidence-based ASD services are medically necessary; a treatment plan; and treatment services, which are ABA therapy and psychological services. DHCF’s public notice (Transmittal 23-35) also lists physical, occupational and speech therapy among ASD treatment services identified in a plan.',
          'The treatment plan is the gate. It must be reviewed every six months, be individualized, list measurable long-, intermediate- and short-term goals, name each service with "the recommended amount, frequency, and setting and duration," state outcome measures and how often progress is reported, identify the providers responsible, and "Be submitted to DHCF every six (6) months for review and prior approval, along with the screening, diagnostic evaluation, and supporting clinical documentation." DHCF also wrote companion regulations, 29 DCMR Chapter 110 ("Medicaid Reimbursable Autism Spectrum Disorder Services"); its June 2024 rule report says the final rule was headed to the Mayor’s office, but DCRegs shows the chapter with no codified sections, so the SPA is the document we could read.',
        ],
        cites: [S.spa, S.t2335, S.mcac, S.dcmr110],
      },
      {
        h2: 'Who may diagnose, write the plan and deliver ABA',
        body: [
          'Diagnostic evaluations may be completed by a physician (including a psychiatrist), a physician assistant under a physician’s supervision, a psychologist, a psychology associate under a psychologist’s supervision, a licensed professional counselor, an LICSW, or an APRN. The treatment plan can be written by that diagnosing provider or by the treating practitioner the child is referred to, with a multidisciplinary team where needed.',
          'ABA therapy may be delivered by a psychologist, an LICSW, a speech-language pathologist or audiologist, or a BACB-certified practitioner: a BCBA or BCBA-D, "who must also comply with the District’s Medicaid screening and enrollment requirements"; an RBT "working under the supervision of a BCBA, BCBA-D, or BCaBA"; or a BCaBA "working under the supervision of a BCBA or BCBA-D." The SPA sets no numeric supervision ratio. Every ASD practitioner must also meet "the District’s statutory and regulatory licensing and scope of practice requirements, or the applicable scope of practice or professional practices act within the jurisdiction where services are provided."',
        ],
        cites: [S.spa, S.dc1207_71],
      },
      {
        h2: 'The managed care plans, and the 2026 Wellpoint transition',
        body: [
          'DHCF contracts with two plans for DC Healthy Families, AmeriHealth Caritas DC and MedStar Family Choice DC, and with HSCSN for CASSIP, the program for children and young adults who receive or qualify for SSI. The plans maintain networks, authorize and pay for covered services and run appeals, but DHCF reminds them that children under 21 are entitled to EPSDT, "which requires coverage of all medically necessary services available under federal Medicaid law." Each plan publishes its own ABA rules: AmeriHealth Caritas DC requires PA on 97151, 97153 and 97155; MedStar lists "ABA Services" as needing prior authorization; HSCSN lets families use 12 units of ABA evaluation a year without PA but authorizes treatment.',
          'Wellpoint DC enrollees were auto-assigned to AmeriHealth Caritas DC on August 1, 2026, and may switch to MedStar until January 31, 2027. Transmittal 26-19 (rev.) says referrals and prior authorizations issued before August 1, 2026 stay valid through October 31, 2026 "whether or not the provider is contracted with AmeriHealth or MedStar," and that District law requires carriers to honor a prior carrier’s authorizations for at least 60 days. If you served a former Wellpoint child, request a new authorization from the receiving plan before the transition period ends.',
        ],
        cites: [S.mcps, S.t2619, S.acdcLookup, S.mfcQAG, S.hscsnPM],
      },
      {
        h2: 'Claims, telehealth and EVV',
        body: [
          'The DC Healthy Families contract requires each plan to accept claims "no later than three hundred sixty-five (365) days from date of service," to pay or deny 90% of clean claims within 30 days under the District’s prompt pay law (with interest if not), and 99% within 90 days. Plans must have providers bill "using the same format and coding instructions as required for the Medicaid FFS programs." Members can appeal an adverse benefit determination within 60 calendar days of the notice. The contract also says a child’s IEP or IFSP is not treated as third-party coverage.',
          'D.C. Code § 31-3863 requires Medicaid to cover services "appropriately delivered through telehealth if the same services would be covered when delivered in person." DHCF’s telemedicine guidance applies to fee-for-service and managed care alike: bill as you would in person, add modifier GT for video or 93 for audio-only, and use POS 10 when the child is at home, 03 at a DC public or charter school, or 02 elsewhere (with the originating site’s NPI). Providers must be licensed where the service is rendered, and outside the District must meet the licensure rules "of the jurisdiction where the patient is physically located." No DHCF document we read lists which ABA codes may be delivered remotely. DHCF’s EVV page describes EVV for personal care and home health services; it does not mention ABA.',
        ],
        cites: [S.mcoContract, S.dc3863, S.teleGuide, S.evv],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'AmeriHealth Caritas DC, MedStar Family Choice DC, HSCSN (CASSIP), or fee-for-service. A former Wellpoint DC card means the child moved to AmeriHealth on 8/1/2026.' },
      { title: 'Diagnostic evaluation', desc: 'ASD diagnosis by a physician, PA, psychologist, psychology associate, LPC, LICSW or APRN, completed with a validated tool.' },
      { title: 'Screening and recommendation', desc: 'The screening result and the physician or other licensed practitioner’s recommendation for ASD services; both go to DHCF with the plan.' },
      { title: 'Treatment plan', desc: 'Goals, service amount, frequency, setting and duration, outcome measures and responsible providers; renewed every six months.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first; Medicaid and its plans pay last.' },
      { title: 'Age', desc: 'ASD services cover beneficiaries under 21 (HSCSN enrolls through age 25).' },
    ],
    sources: [S.spa, S.t2335, S.mcac, S.dcmr110, S.mcps, S.t2619, S.mcoContract, S.teleGuide, S.dc3863, S.evv, S.cfr440, S.cfr438, S.cfr433, S.dc1207_71, S.dc1202_11, S.bacbLic, S.dcMedicaidPortal],
    deliveryRules: {
      supervision: {
        value: 'No numeric ratio is published. SPA 23-0009 lets an RBT deliver ABA "under the supervision of a BCBA, BCBA-D, or BCaBA" and a BCaBA "under the supervision of a BCBA or BCBA-D."',
        status: 'verified',
        cites: [S.spa],
      },
      concurrentBilling: {
        value: 'Not addressed in the SPA. Billing rules for ABA codes would sit in 29 DCMR Chapter 110 or DHCF billing guidance, neither of which we could read.',
        status: 'unverified',
        cites: [S.spa, S.dcmr110],
        verifyVia: 'DHCF Health Care Delivery Management Administration, (202) 442-5988, or the DC Medicaid provider billing manual on dc-medicaid.com: ask whether 97153 and 97155 may be billed for the same time.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'The SPA sets no unit limit; amounts are set per child in the treatment plan DHCF approves every six months. Fee-schedule unit maximums are on dc-medicaid.com, which we could not open.',
        status: 'unverified',
        cites: [S.spa, S.dcMedicaidPortal],
        verifyVia: 'DC Medicaid fee schedule inquiry (dc-medicaid.com) for the ABA codes’ maximum units, or DHCF, (202) 442-5988.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Not addressed in the SPA. DHCF’s telemedicine guidance requires services billed as telemedicine to show the modifier and POS on the claim and in documentation, but no source read says who signs an ABA session note or by when.',
        status: 'unverified',
        cites: [S.spa, S.teleGuide],
        verifyVia: 'DHCF or 29 DCMR Chapter 110 (when its codified text is available on dcregs.dc.gov).',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The SPA requires the treatment plan to state each service’s "setting" but restricts none. For telehealth, DHCF’s guidance uses POS 10 (home), 03 (DC public or charter school) and 02 (other). The SPA’s separate School-Based Health benefit covers IEP/IFSP services billed by DCPS and charter schools.',
        status: 'unverified',
        cites: [S.spa, S.teleGuide],
        verifyVia: 'DHCF, (202) 442-5988: ask whether home, clinic, school and community settings are all payable for ABA outside the school-based program.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'BCBAs and BCBA-Ds must "comply with the District’s Medicaid screening and enrollment requirements" (SPA 23-0009); the SPA does not say whether RBT and BCaBA services are billed under the supervising BCBA’s NPI.',
        status: 'unverified',
        cites: [S.spa],
        verifyVia: 'DHCF provider enrollment or the DC Medicaid provider portal: ask which NPI goes in the rendering field for RBT services.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. "ASD services are available to Medicaid beneficiaries under the age of twenty-one (21)" (SPA 23-0009).',
        status: 'verified',
        cites: [S.spa],
      },
      dxRecency: {
        value: 'The SPA sets no age limit on the diagnostic evaluation; the clock it does set is the treatment plan, reviewed and resubmitted to DHCF every six months with the screening and diagnostic evaluation.',
        status: 'unverified',
        cites: [S.spa],
        verifyVia: 'DHCF, (202) 442-5988: ask whether an older diagnostic evaluation is accepted with an initial or renewal treatment plan.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'Physician (including psychiatrist), physician assistant under a physician, psychologist, psychology associate under a psychologist, licensed professional counselor, LICSW, or APRN (SPA 23-0009, the "diagnosing providers").',
        status: 'verified',
        cites: [S.spa],
      },
      diagnosticTools: {
        value: 'No instrument is named. The diagnostic evaluation is "a comprehensive review of a child’s cognitive, speech language, behavioral, fine motor, adaptive, and social functioning" and "shall be completed using a validated assessment tool or instrument." Screening uses "a screening tool that is supported by clinical best practices or emerging best practices."',
        status: 'verified',
        cites: [S.spa],
      },
      referral: {
        value: 'Yes. ASD services "must be recommended by a physician or other licensed practitioner of the healing arts within his or her scope of practice," and after screening "a referral may be made" by a qualified screener (physician, PA, psychologist, psychology associate, LPC, LICSW or APRN) for the diagnostic evaluation.',
        status: 'verified',
        cites: [S.spa],
      },
      telehealth: {
        value: 'Covered on the same basis as in person (D.C. Code § 31-3863). DHCF’s guidance applies to fee-for-service and managed care: bill as in person with modifier GT (video) or 93 (audio-only) and POS 10 (home), 03 (school) or 02 (other); the provider must be licensed where the service is rendered, or where the patient is if outside the District. No DHCF source read lists which ABA codes may be delivered remotely.',
        status: 'verified',
        cites: [S.dc3863, S.teleGuide],
      },
      authTurnaround: {
        value: 'DHCF publishes no ABA decision timeframe. The federal fee-for-service floor applies: since January 1, 2026 a state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" (extendable 14 days) and an expedited one within 72 hours. Managed-care children follow their plan; federal law caps standard plan decisions at 7 calendar days for rating periods starting on or after January 1, 2026, though DC’s 2023 plan contract still prints 14.',
        status: 'verified',
        cites: [S.cfr440, S.cfr438, S.mcoContract],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last (42 CFR 433.139). The DC Healthy Families contract makes each plan identify and collect from other coverage, and says plans "shall not consider an enrolled child with an Individualized Education Plan (IEP) or an Individualized Service Family Plan (IFSP) to be an Enrollee with third party liability." Bill the commercial plan first and follow its ABA authorization rules.',
        status: 'verified',
        cites: [S.cfr433, S.mcoContract],
      },
    },
    faq: [
      { q: 'Does DC Medicaid cover ABA therapy?', a: 'Yes. Since October 1, 2023, State Plan Amendment 23-0009 covers ABA as an ASD treatment service for beneficiaries under 21. Most children get it through AmeriHealth Caritas DC, MedStar Family Choice DC or HSCSN.' },
      { q: 'Can an RBT or BCaBA deliver DC Medicaid ABA?', a: 'Yes. The SPA lists RBTs working under a BCBA, BCBA-D or BCaBA, and BCaBAs working under a BCBA or BCBA-D. BCBAs and BCBA-Ds must enroll with DC Medicaid.' },
      { q: 'Who can diagnose autism for DC Medicaid ABA?', a: 'A physician, physician assistant, psychologist, psychology associate, licensed professional counselor, LICSW or APRN, using a validated assessment tool.' },
      { q: 'Can a BCBA licensed in another state treat a DC Medicaid child, including by telehealth?', a: 'DHCF requires providers to be licensed for the jurisdiction where the service is rendered, and for services outside the District, the licensure rules where the patient is located. The District began licensing behavior analysts in 2024 under the Board of Psychology; check with DC Health whether a DC license is being issued and required, and enroll with DC Medicaid either way.' },
      { q: 'What happened to Wellpoint DC (Amerigroup) members?', a: 'They were moved to AmeriHealth Caritas DC on August 1, 2026 (they can switch to MedStar until January 31, 2027). Wellpoint authorizations issued before August 1 are honored through October 31, 2026; request a new authorization from the new plan before then.' },
      { q: 'What does DC Medicaid pay for ABA?', a: 'DHCF says ASD fees are published on the DC Medicaid portal (dc-medicaid.com). We could not open it, so get the current rates from the portal or DHCF. Managed care plans pay contracted rates.' },
    ],
  },

  'amerihealth-caritas-district-of-columbia': {
    slug: 'amerihealth-caritas-district-of-columbia',
    family: 'amerihealth',
    cardDesc: 'The larger DC Healthy Families plan (took Wellpoint DC’s members 8/1/2026): PA on 97151, 97153 and 97155 per its lookup tool.',
    assessmentPA: {
      value: 'Yes. The plan’s Prior Authorization Lookup Tool answers for 97151: "Yes, prior authorization is required," submitted through NaviNet or by fax to 1-202-408-1031. 97152 and 0362T return "not on the DC Medicaid Fee Schedule and prior authorization is required"',
      status: 'verified',
      cites: [S.acdcLookup],
    },
    treatmentPA: {
      value: 'Yes for 97153 and 97155 (and 0373T, flagged not on the DC Medicaid fee schedule). 97154, 97156, 97157 and 97158 return "No, prior authorization is not required if the service is performed in an outpatient setting, you are a participating provider and this is on your provider contract"',
      status: 'verified',
      cites: [S.acdcLookup],
    },
    dxRequired: {
      value: 'Yes. The plan publishes no ABA criteria of its own in its manual, so the state rule applies: ASD services follow "an ASD diagnosis … determined through a diagnostic evaluation" (SPA 23-0009)',
      status: 'verified',
      cites: [S.acdcPM, S.spa],
    },
    payer: 'AmeriHealth Caritas District of Columbia',
    state: 'DC', kind: 'medicaid-mco', parent: 'District of Columbia Medicaid (DC Healthy Families)',
    pill: 'Payer Guide · AmeriHealth Caritas · District of Columbia',
    h1: 'AmeriHealth Caritas DC ABA coverage: the intake guide.',
    metaTitle: 'AmeriHealth Caritas DC ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How AmeriHealth Caritas District of Columbia handles ABA for DC Healthy Families children: code-level prior authorization from its lookup tool, the Wellpoint DC transition, decision timeframes, claims and what intake should collect.',
    intro: [
      'AmeriHealth Caritas DC is one of the two DC Healthy Families plans DHCF lists, and since August 1, 2026 it also holds the former Wellpoint DC (Amerigroup) members. Its September 2026 provider manual does not mention ABA at all; the working rules for ABA sit in the plan’s online Prior Authorization Lookup Tool, which gives a code-by-code answer.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under DC Medicaid’s EPSDT ASD benefit for members under 21' },
      { label: 'Prior auth', value: 'Required: 97151, 97152, 97153, 97155, 0362T, 0373T. Not required (participating, outpatient, on contract): 97154, 97156, 97157, 97158' },
      { label: 'Submit via', value: 'NaviNet, or fax 1-202-408-1031 / 1-877-759-6216; UM 202-408-4823 or 1-800-408-7510' },
      { label: 'Retro auths', value: 'Not routinely approved for non-emergent services from Nov. 1, 2026' },
      { label: 'Decision clock', value: 'Manual: 14 calendar days standard, 72 hours expedited; federal cap is 7 days from 1/1/2026 rating periods' },
      { label: 'Network', value: 'Credentialing: dcprovidernetwork@amerihealthcaritasdc.com, 877-759-6186' },
    ],
    sections: [
      {
        h2: 'Prior authorization, code by code',
        body: [
          'We queried the plan’s public lookup tool for every ABA code on October 7, 2026. 97151 (behavior identification assessment), 97153 (technician treatment) and 97155 (protocol modification) return "Yes, prior authorization is required," with requests and clinical documentation through NaviNet or by fax to 1-202-408-1031. 97152, 0362T and 0373T return "This code is not on the DC Medicaid Fee Schedule and prior authorization is required." 97154, 97156, 97157 and 97158 return no PA "if the service is performed in an outpatient setting, you are a participating provider and this is on your provider contract," with plan and benefit limits applying. The tool calls its results general information, "not a guarantee of coverage or authorization." Non-participating providers need PA for everything.',
          'Two timing rules matter. The lookup page warns that "Effective November 1, 2026, AmeriHealth Caritas DC will no longer routinely approve retrospective authorization requests for non-emergent services rendered before an authorization request is submitted and approved," so request before the first session. And for children who came from Wellpoint DC, DHCF’s transition notice makes AmeriHealth honor treatment Wellpoint authorized before August 1, 2026 through October 31, 2026, and honor other plans’ authorizations for at least 60 days.',
        ],
        cites: [S.acdcLookup, S.acdcPA, S.t2619],
      },
      {
        h2: 'Decision timeframes, appeals and claims',
        body: [
          'The manual says AmeriHealth must decide a standard request "no later than 14 calendar days after AmeriHealth Caritas DC receives the request" (extendable 14 days) and an expedited one within 72 hours. Federal rules have since tightened the standard limit to 7 calendar days for rating periods beginning on or after January 1, 2026. Members, or a provider acting for them, appeal within 60 calendar days of the notice. AmeriHealth is "the payer of last resort": bill other coverage first. Claims follow DHCF’s contract with every DC Healthy Families plan: filed within 365 days of service, 90% of clean claims paid or denied within 30 days.',
        ],
        cites: [S.acdcPM, S.cfr438, S.mcoContract],
      },
    ],
    collect: [
      { title: 'Member ID and plan', desc: 'Confirm AmeriHealth Caritas DC on the date of service; former Wellpoint DC members moved here on 8/1/2026.' },
      { title: 'Diagnostic evaluation', desc: 'ASD diagnosis by a DC-qualified diagnosing provider using a validated tool (state rule).' },
      { title: 'Treatment plan', desc: 'Needed for the 97153/97155 authorization; DC’s rule is a six-month plan with measurable goals and hours.' },
      { title: 'Prior plan’s authorization', desc: 'Wellpoint or MedStar authorizations are honored for a transition period; capture the approval letter.' },
      { title: 'Other insurance', desc: 'The plan pays last; bill the primary first.' },
    ],
    sources: [S.acdcLookup, S.acdcPA, S.acdcPM, S.mcps, S.t2619, S.spa, S.mcoContract, S.teleGuide, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule of its own. The state rule applies: an RBT works under a BCBA, BCBA-D or BCaBA, and a BCaBA under a BCBA or BCBA-D (SPA 23-0009), with no numeric ratio.',
        status: 'verified',
        cites: [S.acdcPM, S.spa],
      },
      concurrentBilling: {
        value: 'Not addressed in the provider manual or the lookup tool.',
        status: 'unverified',
        cites: [S.acdcPM, S.acdcLookup],
        verifyVia: 'AmeriHealth Caritas DC Provider Services or your Provider Network Account Executive: ask whether 97153 and 97155 may be billed for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The plan publishes no ABA unit limit; the lookup tool says "Member plan and benefit limits may apply" for codes without PA.',
        status: 'unverified',
        cites: [S.acdcLookup],
        verifyVia: 'AmeriHealth Caritas DC UM, 202-408-4823 or 1-800-408-7510: ask how ABA units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual publishes no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.acdcPM],
        verifyVia: 'AmeriHealth Caritas DC Provider Services, or the documentation terms in your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The lookup tool’s no-PA answers apply only "if the service is performed in an outpatient setting"; the plan publishes no other ABA setting rule.',
        status: 'unverified',
        cites: [S.acdcLookup],
        verifyVia: 'AmeriHealth Caritas DC UM: ask which POS codes it pays for ABA in the home, clinic, school and community.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The manual publishes no ABA-specific rendering or supervising-provider rule. DHCF’s contract requires plans to use the same billing format and coding as fee-for-service Medicaid.',
        status: 'unverified',
        cites: [S.acdcPM, S.mcoContract],
        verifyVia: 'AmeriHealth Caritas DC credentialing (dcprovidernetwork@amerihealthcaritasdc.com, 877-759-6186): ask whether RBTs are billed under the supervising BCBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The plan covers ABA within DC Medicaid’s EPSDT ASD benefit, available to beneficiaries under 21 (SPA 23-0009).',
        status: 'verified',
        cites: [S.spa, S.mcps],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.acdcPM, S.spa],
        verifyVia: 'AmeriHealth Caritas DC UM, 202-408-4823: ask how recent the diagnostic evaluation must be for an initial request.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'The plan publishes nothing different, so the state list applies: physician, PA, psychologist, psychology associate, LPC, LICSW or APRN (SPA 23-0009).',
        status: 'verified',
        cites: [S.acdcPM, S.spa],
      },
      diagnosticTools: {
        value: 'The plan names no instrument; the state requires the diagnostic evaluation to use "a validated assessment tool or instrument" (SPA 23-0009).',
        status: 'verified',
        cites: [S.acdcPM, S.spa],
      },
      referral: {
        value: 'The plan publishes nothing ABA-specific; the state requires ASD services to be "recommended by a physician or other licensed practitioner of the healing arts" (SPA 23-0009).',
        status: 'verified',
        cites: [S.acdcPM, S.spa],
      },
      telehealth: {
        value: 'The plan publishes no ABA telehealth rule, so DHCF’s guidance applies (it covers Medicaid managed care): same coverage as in person under D.C. Code § 31-3863, modifier GT (video) or 93 (audio-only), POS 10 home, 03 school or 02 other. No ABA telehealth code list was found.',
        status: 'verified',
        cites: [S.teleGuide, S.dc3863, S.acdcPM],
      },
      authTurnaround: {
        value: 'The manual says standard decisions come "no later than 14 calendar days" after receipt (plus up to 14), expedited within 72 hours. Federal law caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'plan-dependent',
        cites: [S.acdcPM, S.cfr438],
        verifyVia: 'AmeriHealth Caritas DC UM, 202-408-4823: ask whether the 7-day federal limit applies to your request.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '"As a Medicaid plan, AmeriHealth Caritas District of Columbia is the payer of last resort," and payments may be recovered if other coverage is found. Bill the primary insurer first.',
        status: 'verified',
        cites: [S.acdcPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas DC require prior authorization for the ABA assessment?', a: 'Yes. Its lookup tool says 97151 requires prior authorization, submitted through NaviNet or by fax to 1-202-408-1031.' },
      { q: 'Which ABA codes need PA with AmeriHealth Caritas DC?', a: '97151, 97152, 97153, 97155, 0362T and 0373T. The tool says 97154, 97156, 97157 and 97158 do not, for a participating provider in an outpatient setting with the code on its contract.' },
      { q: 'I treated a Wellpoint DC child. What now?', a: 'Wellpoint members moved to AmeriHealth Caritas DC on August 1, 2026. Wellpoint authorizations are honored through October 31, 2026; request a new authorization from AmeriHealth before then and join its network (dcprovidernetwork@amerihealthcaritasdc.com, 877-759-6186).' },
      { q: 'Will AmeriHealth Caritas DC approve an authorization after services start?', a: 'Not routinely. From November 1, 2026 the plan says it will no longer routinely approve retrospective requests for non-emergent services, so get the authorization first.' },
    ],
  },

  'medstar-family-choice-district-of-columbia': {
    slug: 'medstar-family-choice-district-of-columbia',
    family: 'medstar-family-choice',
    cardDesc: 'DC Healthy Families plan whose Quick Authorization Guide lists "ABA Services" as prior authorization required.',
    assessmentPA: {
      value: 'Treat as yes, but confirm: the Quick Authorization Guide (eff. 8/15/2026) lists "ABA Services — Prior Authorization Required" with no code-level split, so it does not say whether 97151 is included',
      status: 'unverified',
      cites: [S.mfcQAG],
      verifyVia: 'MedStar Family Choice DC Utilization Management, 855-798-4244 (BH fax 202-243-6320): ask whether 97151 needs authorization.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Yes. "ABA Services" appear under "Exceptions Requiring Prior Authorization" with "Prior Authorization Required" in the Quick Authorization Guide (effective 08/15/2026)',
      status: 'verified',
      cites: [S.mfcQAG],
    },
    dxRequired: {
      value: 'Yes. The plan publishes no ABA criteria of its own, so the state rule applies: ASD services follow "an ASD diagnosis … determined through a diagnostic evaluation" (SPA 23-0009)',
      status: 'verified',
      cites: [S.mfcPM, S.spa],
    },
    payer: 'MedStar Family Choice District of Columbia',
    state: 'DC', kind: 'medicaid-mco', parent: 'District of Columbia Medicaid (DC Healthy Families)',
    pill: 'Payer Guide · MedStar Family Choice · District of Columbia',
    h1: 'MedStar Family Choice DC ABA coverage: the intake guide.',
    metaTitle: 'MedStar Family Choice DC ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How MedStar Family Choice DC handles ABA for DC Healthy Families children: prior authorization for ABA services, the UM line and fax, 14-day decisions, claims within 365 days, coordination of benefits and what intake should collect.',
    intro: [
      'MedStar Family Choice DC is the second of the two DC Healthy Families plans DHCF lists. Its October 2025 provider manual does not mention ABA, but its Quick Authorization Guide (effective August 15, 2026) does: ABA services sit on the short list of in-network outpatient services that need prior authorization.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under DC Medicaid’s EPSDT ASD benefit for members under 21' },
      { label: 'Prior auth', value: 'Required for "ABA Services" (Quick Authorization Guide, eff. 8/15/2026)' },
      { label: 'Submit via', value: 'UM 855-798-4244; behavioral health fax 202-243-6320' },
      { label: 'Decision clock', value: 'Manual: 14 calendar days standard; federal cap is 7 days from 1/1/2026 rating periods' },
      { label: 'Claims', value: 'Within 365 days; EDI payer ID RP062; clean claims paid in 30 days' },
      { label: 'Network', value: 'Provider Relations: MFCDC-ProviderRelations@MedStar.net, 800-261-3371' },
    ],
    sections: [
      {
        h2: 'Prior authorization and how requests are reviewed',
        body: [
          'The Quick Authorization Guide says in-network outpatient services need no authorization "unless included below under the ‘Exceptions Requiring Prior Authorization’ section," and the first exception listed is "ABA Services: Prior Authorization Required." All out-of-network services need authorization. The manual says requests go by phone or fax with clinical information, codes must match what is requested and billed, and the UM line is 855-798-4244, with behavioral health requests faxed to 202-243-6320. Its listed criteria include InterQual, Medicare and Medicaid guidelines and DHCF contract requirements; it names no ABA-specific criteria.',
          'Standard pre-service decisions come "no later than 14 calendar days of receipt," and "The final decision cannot take longer than 14 days, regardless whether all clinical information has been received." Federal rules have since capped standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026. A provider can discuss a denial with the medical director through the UM line; members appeal within 60 calendar days of the notice.',
        ],
        cites: [S.mfcQAG, S.mfcPM, S.mfcUM, S.cfr438],
      },
      {
        h2: 'Claims and other insurance',
        body: [
          'Claims are due "within 365 days from the date of service," on a CMS-1500 or UB-04, with the mandatory data elements of DC fee-for-service; MedStar applies NCCI edits. Electronic claims use payer ID RP062; paper claims go to MedStar Family Choice DC, DC Claims Processing Center, P.O. Box 211702, Eagan, MN 55121. Clean claims are paid within 30 days under the District’s Prompt Payment Act, with interest of 1.5% (days 31–60), 2% (61–120) and 2.5% after. When a child has other insurance, bill it first and send MedStar the claim with the primary remittance, including the denial reason, "within 180 calendar days of the primary remittance date."',
        ],
        cites: [S.mfcPM],
      },
    ],
    collect: [
      { title: 'Member ID and plan', desc: 'Confirm MedStar Family Choice DC on the date of service.' },
      { title: 'Diagnostic evaluation', desc: 'ASD diagnosis by a DC-qualified diagnosing provider using a validated tool (state rule).' },
      { title: 'Treatment plan and codes', desc: 'Codes on the request must match what is billed; DC’s rule is a six-month plan with measurable goals and hours.' },
      { title: 'Other insurance', desc: 'Bill the primary first; MedStar needs the primary remittance within 180 days.' },
    ],
    sources: [S.mfcQAG, S.mfcPM, S.mfcUM, S.mcps, S.t2619, S.spa, S.teleGuide, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule of its own. The state rule applies: an RBT works under a BCBA, BCBA-D or BCaBA, and a BCaBA under a BCBA or BCBA-D (SPA 23-0009), with no numeric ratio.',
        status: 'verified',
        cites: [S.mfcPM, S.spa],
      },
      concurrentBilling: {
        value: 'Not addressed in the manual or the Quick Authorization Guide; MedStar applies CMS NCCI edits to claims.',
        status: 'unverified',
        cites: [S.mfcPM],
        verifyVia: 'MedStar Family Choice DC Claims, 800-261-3371, or Provider Relations: ask whether 97153 and 97155 may be billed for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The plan publishes no ABA unit limit; units are set per authorization.',
        status: 'unverified',
        cites: [S.mfcPM, S.mfcQAG],
        verifyVia: 'MedStar Family Choice DC UM, 855-798-4244.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual publishes no ABA session-note signature rule; it requires all billed codes to be supported by the medical record.',
        status: 'unverified',
        cites: [S.mfcPM],
        verifyVia: 'MedStar Family Choice DC Provider Relations, 800-261-3371.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule.',
        status: 'unverified',
        cites: [S.mfcPM],
        verifyVia: 'MedStar Family Choice DC UM: ask which POS codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The manual publishes no ABA rendering-provider rule (it requires NP and PA claims under the NP’s or PA’s own name).',
        status: 'unverified',
        cites: [S.mfcPM],
        verifyVia: 'MedStar Family Choice DC Provider Relations (MFCDC-ProviderRelations@MedStar.net): ask whether RBTs are billed under the supervising BCBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The plan covers ABA within DC Medicaid’s EPSDT ASD benefit (SPA 23-0009).',
        status: 'verified',
        cites: [S.spa, S.mcps],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.mfcPM, S.spa],
        verifyVia: 'MedStar Family Choice DC UM, 855-798-4244.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'The plan publishes nothing different, so the state list applies: physician, PA, psychologist, psychology associate, LPC, LICSW or APRN (SPA 23-0009).',
        status: 'verified',
        cites: [S.mfcPM, S.spa],
      },
      diagnosticTools: {
        value: 'The plan names no instrument; the state requires "a validated assessment tool or instrument" (SPA 23-0009).',
        status: 'verified',
        cites: [S.mfcPM, S.spa],
      },
      referral: {
        value: 'The plan publishes nothing ABA-specific; the state requires ASD services to be recommended by a physician or other licensed practitioner (SPA 23-0009).',
        status: 'verified',
        cites: [S.mfcPM, S.spa],
      },
      telehealth: {
        value: 'MedStar says it "will cover and reimburse healthcare services delivered through Telemedicine in accordance with District regulations." DHCF’s guidance (which covers managed care) applies: modifier GT (video) or 93 (audio-only), POS 10 home, 03 school or 02 other. No ABA telehealth code list was found.',
        status: 'verified',
        cites: [S.mfcPM, S.teleGuide],
      },
      authTurnaround: {
        value: 'The manual: standard decisions "no later than 14 calendar days of receipt," and the final decision "cannot take longer than 14 days." Federal law caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'plan-dependent',
        cites: [S.mfcPM, S.cfr438],
        verifyVia: 'MedStar Family Choice DC UM, 855-798-4244.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Other insurance "must be billed as the primary payor"; MedStar pays as secondary within its allowable amount, and the claim with the primary remittance must arrive within 180 calendar days of the primary remittance date. Members are not billed copays or deductibles.',
        status: 'verified',
        cites: [S.mfcPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does MedStar Family Choice DC require prior authorization for ABA?', a: 'Yes. Its Quick Authorization Guide lists ABA Services as prior authorization required. It does not split out the 97151 assessment, so confirm that code with UM at 855-798-4244.' },
      { q: 'How long does MedStar Family Choice DC take to decide?', a: 'Its manual says standard decisions take no more than 14 calendar days. Federal rules now cap standard Medicaid managed care decisions at 7 days for rating periods starting in 2026.' },
      { q: 'What is the timely filing limit?', a: '365 days from the date of service. Secondary claims with the primary insurer’s remittance are due within 180 days of that remittance.' },
    ],
  },

  'hscsn-district-of-columbia': {
    slug: 'hscsn-district-of-columbia',
    family: 'hscsn',
    cardDesc: 'DC’s CASSIP plan for children with SSI (birth to 26): 12 ABA evaluation units a year with no PA; treatment authorized in 14 days.',
    assessmentPA: {
      value: 'No, within limits. "ABA Evaluations (CPT Code 97151) do not require prior authorization. HSCSN will allow 12 units of ABA evaluations within a 12-month period"; more units need PA (provider manual, January 2026)',
      status: 'verified',
      cites: [S.hscsnPM, S.hscsnNews],
    },
    treatmentPA: {
      value: 'Yes. "ABA initial and ongoing therapy services require prior authorization"; the ABA provider sends its evaluation report and recommendations to HSCSN UM (UM@hschealth.org, fax 202-721-7190)',
      status: 'verified',
      cites: [S.hscsnPM],
    },
    dxRequired: {
      value: 'Not stated by HSCSN, which covers ABA on medical necessity and imposes "no benefit and/or age limit." The DC Medicaid State Plan ties ABA to an ASD diagnosis; ask HSCSN whether it authorizes ABA for other conditions',
      status: 'unverified',
      cites: [S.hscsnPM, S.spa],
      verifyVia: 'HSCSN Utilization Management (UM@hschealth.org, 202-721-7190): ask which diagnoses it accepts for ABA.',
      blocker: 'per-case',
    },
    payer: 'Health Services for Children with Special Needs (HSCSN)',
    state: 'DC', kind: 'medicaid-mco', parent: 'District of Columbia Medicaid (CASSIP)',
    pill: 'Payer Guide · HSCSN · District of Columbia',
    h1: 'HSCSN ABA coverage: the intake guide.',
    metaTitle: 'HSCSN (DC CASSIP) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How HSCSN, the District of Columbia’s CASSIP plan for children and young adults with SSI, covers ABA: 12 evaluation units a year without PA, treatment authorization, BCaBA and RBT roles, telehealth codes, claims and what intake should collect.',
    intro: [
      'Health Services for Children with Special Needs (HSCSN) is the plan DHCF contracts with for the Child and Adolescent Supplemental Security Income Program (CASSIP). It serves children and young adults "from birth to 26" who receive SSI or have SSI-eligible conditions, and each enrollee has a care manager. HSCSN publishes more ABA detail than any other DC plan: its January 2026 manual, a 2024 newsletter and a 2022 billing letter together set the evaluation allowance, who may deliver care and which codes to bill.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes; "no benefit and/or age limit on ABA services," subject to medical necessity' },
      { label: 'Evaluation', value: '97151: no PA for 12 units per rolling 12 months; PCPs can refer directly to in-network ABA providers' },
      { label: 'Treatment PA', value: 'Required; UM@hschealth.org or fax 202-721-7190; decision within 14 calendar days' },
      { label: 'Codes', value: '97151, 97153, 97155 (replaced H0031/H2019 on 10/1/2022)' },
      { label: 'Staff', value: 'BCBA; BCaBA (direct care since 8/17/2024) and RBT under BCBA supervision' },
      { label: 'Telehealth', value: '97153 or 97155 with modifier GT on the claim' },
      { label: 'Claims', value: '365 days from service; COB claims within 180 days of the primary’s payment' },
    ],
    sections: [
      {
        h2: 'Evaluation, authorization and treatment schedules',
        body: [
          'Since September 2, 2024, HSCSN enrollees can use "twelve (12) units of ABA Evaluations with a rolling 12-month period as a covered benefit," and PCPs "can refer directly to HSCSN in-network ABA providers for an ABA Evaluation." Once the benefit is used up and a clinical need remains, the provider uses the "HSCSN Provider Request for ABA Evaluation" form, which an MD or NP completes and which asks about the behaviors to be addressed and, for children under 4, early intervention (attach the IFSP) or, from age 4, the IEP.',
          'Treatment always needs prior authorization. The ABA provider "submits their written evaluation report and recommendations for therapy to the HSCSN UM Department," treatment schedules must be in the report and ongoing plans, and "The treatment schedules should not disrupt regular school attendance for a school-age enrollee." Families and providers hear back "within the standard HSCSN review timeframe of fourteen (14) calendar days." Services must come from HSCSN participating providers. HSCSN does not cover ABA during hours a child attends an HSCSN-funded summer program.',
        ],
        cites: [S.hscsnNews, S.hscsnEval, S.hscsnPM],
      },
      {
        h2: 'Staffing, codes and telehealth',
        body: [
          'HSCSN’s ABA policy (UM_21) now lets a BCaBA "provide direct ABA care in a role similar to a Registered Behavioral Technician (RBT)," supervised by a BCBA (effective August 17, 2024; groups send staffing changes to C6@hschealth.org). A contract amendment removed the requirement that an ABA technician hold at least a bachelor’s degree, while keeping all license and certification rules.',
          'HSCSN’s October 2022 letter set the codes: 97151 replaced H0031, 97153 replaced H2019 HN and 97155 replaced H2019 HO. Under that letter "Telehealth is covered using 97153 or 97155," with the GT modifier on the claim (authorization letters omit it); "97155 is only authorized for direct treatment by a BCBA"; "97155 and 97153 cannot be billed at the same time"; and "Supervision will not be authorized separately." The letter predates the 2024 evaluation change, so confirm its other terms are still current.',
        ],
        cites: [S.hscsnPM, S.hscsnNews, S.hscsnAmend, S.hscsnCodes],
      },
      {
        h2: 'Claims, other insurance and appeals',
        body: [
          'HSCSN accepts claims "no later than three hundred and sixty-five (365) days from the date of service," pays 90% of clean claims within 30 days and 99% within 90, and owes interest under the District’s Prompt Payment Act (1.5%, then 2%, then 2.5%). As a Medicaid plan it pays last: bill other coverage first, attach the EOB, and file within 180 days of the primary’s payment (still within 365 days of service). Claim payments or denials can be appealed in writing within 90 days; an adverse benefit determination is appealed within 60 calendar days.',
        ],
        cites: [S.hscsnPM],
      },
    ],
    collect: [
      { title: 'CASSIP eligibility', desc: 'Confirm HSCSN enrollment (SSI or SSI-eligible, under 26) on the date of service.' },
      { title: 'PCP referral', desc: 'PCPs can refer directly to in-network ABA providers for the evaluation.' },
      { title: 'Evaluation units used', desc: '12 units per rolling 12 months without PA; check with Customer Care, 202-467-2737.' },
      { title: 'IFSP or IEP', desc: 'The ABA evaluation request form asks for the IFSP (under 4) or IEP (4 and older), or why there is none.' },
      { title: 'School schedule', desc: 'Treatment schedules must not disrupt school attendance.' },
      { title: 'Other insurance', desc: 'Bill the primary first and attach its EOB.' },
    ],
    sources: [S.hscsnPM, S.hscsnNews, S.hscsnCodes, S.hscsnEval, S.hscsnAmend, S.mcps, S.spa, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'BCaBAs and RBTs deliver direct care under a BCBA (UM_21, as summarized in the January 2026 manual); "Supervision will not be authorized separately" (2022 billing letter). No numeric ratio is published.',
        status: 'verified',
        cites: [S.hscsnPM, S.hscsnCodes],
      },
      concurrentBilling: {
        value: '"97155 and 97153 cannot be billed at the same time," and "97155 is only authorized for direct treatment by a BCBA" (HSCSN billing letter, October 2022).',
        status: 'verified',
        cites: [S.hscsnCodes],
      },
      dailyLimits: {
        value: 'Evaluation: 12 units of 97151 per rolling 12 months without PA. Treatment hours are set per authorization; HSCSN says there is "no benefit and/or age limit on ABA services."',
        status: 'verified',
        cites: [S.hscsnPM, S.hscsnNews],
      },
      noteSignature: {
        value: 'HSCSN publishes no session-note signature rule for ABA.',
        status: 'unverified',
        cites: [S.hscsnPM],
        verifyVia: 'HSCSN Provider Relations, (202) 467-2737, or UM policy UM_21.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Treatment schedules "should not disrupt regular school attendance for a school-age enrollee," ABA is not covered while the child is in an HSCSN summer program, and telehealth is billed with GT. No other setting rule is published.',
        status: 'verified',
        cites: [S.hscsnPM, S.hscsnCodes],
      },
      billAsProvider: {
        value: 'HSCSN credentials ABA staff by group (send practitioner lists to C6@hschealth.org) but publishes no rule on whose NPI goes in the rendering field for RBT or BCaBA services.',
        status: 'unverified',
        cites: [S.hscsnNews, S.hscsnPM],
        verifyVia: 'HSCSN Credentialing, C6@hschealth.org or (202) 495-7526.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'HSCSN enrolls children and young adults "from birth to 26" and states "There is no benefit and/or age limit on ABA services." DC Medicaid’s State Plan ASD benefit is written for beneficiaries under 21, so for an enrollee aged 21–25 confirm coverage with HSCSN.',
        status: 'plan-dependent',
        cites: [S.hscsnPM, S.spa],
        verifyVia: 'HSCSN UM, UM@hschealth.org: confirm ABA coverage for an enrollee 21 or older.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated by HSCSN.',
        status: 'unverified',
        cites: [S.hscsnPM],
        verifyVia: 'HSCSN UM, UM@hschealth.org or 202-721-7190.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by HSCSN. The ABA evaluation request form (used once the 12 units are exhausted) must be completed by an ordering MD or NP.',
        status: 'unverified',
        cites: [S.hscsnEval, S.hscsnPM],
        verifyVia: 'HSCSN UM: ask who may make the diagnosis it relies on.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'Not stated by HSCSN.',
        status: 'unverified',
        cites: [S.hscsnPM],
        verifyVia: 'HSCSN UM, UM@hschealth.org.',
        blocker: 'per-case',
      },
      referral: {
        value: 'PCPs "can refer directly to HSCSN in-network ABA providers for an ABA Evaluation"; extra evaluation units need the provider request form signed by an MD or NP.',
        status: 'verified',
        cites: [S.hscsnNews, S.hscsnEval],
      },
      telehealth: {
        value: '"Telehealth is covered using 97153 or 97155"; claims carry the GT modifier although authorization letters do not (2022 billing letter). DHCF’s guidance adds POS 10 home, 03 school or 02 other.',
        status: 'verified',
        cites: [S.hscsnCodes, S.teleGuide],
      },
      authTurnaround: {
        value: 'HSCSN responds "within the standard HSCSN review timeframe of fourteen (14) calendar days." Federal law caps standard decisions at 7 calendar days for rating periods starting on or after January 1, 2026.',
        status: 'plan-dependent',
        cites: [S.hscsnPM, S.cfr438],
        verifyVia: 'HSCSN UM, 202-721-7190.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'HSCSN is "the payer of last resort when the enrollee has other insurance coverage." Bill the other carrier first, attach the EOB or EOMB, and file within 180 days of the primary’s payment and within 365 days of service; claims without the EOB are denied.',
        status: 'verified',
        cites: [S.hscsnPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does HSCSN require prior authorization for the ABA evaluation?', a: 'No, up to 12 units of 97151 in a rolling 12 months. PCPs can refer directly to in-network ABA providers. More units need the HSCSN Provider Request for ABA Evaluation form.' },
      { q: 'Can a BCaBA deliver ABA to HSCSN members?', a: 'Yes. Since August 17, 2024 BCaBAs can provide direct care in a role like an RBT, supervised by a BCBA.' },
      { q: 'Can ABA be delivered by telehealth for HSCSN?', a: 'HSCSN’s billing letter covers telehealth for 97153 and 97155, billed with the GT modifier.' },
      { q: 'Is there an age limit on HSCSN ABA?', a: 'HSCSN says there is no benefit or age limit on ABA, and it enrolls members up to age 26. Confirm coverage for a member over 21, since the state’s ASD benefit is written for under 21.' },
    ],
  },

  'aetna-district-of-columbia': {
    slug: 'aetna-district-of-columbia',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide + precert on all ten codes + D.C. Code § 31-3272 habilitative mandate (under 21).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: 97151–97158, 0362T and 0373T are on the precertification list; the reauthorization interval is set by the plan, with progress evaluated every six months',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): confirm ABA precertification and the reauthorization interval.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider; ABA for non-ASD indications is experimental (CPB 0554)',
      status: 'verified',
      cites: [S.aetnaGuide, S.aetnaCPB],
    },
    payer: 'Aetna in the District of Columbia',
    state: 'DC', kind: 'commercial',
    pill: 'Payer Guide · Aetna · District of Columbia',
    h1: 'Aetna ABA coverage in the District of Columbia: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Washington, DC: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for District of Columbia families: the national medical necessity guide, precertification, D.C. Code § 31-3272 (habilitative coverage under 21), the federal-employee and self-funded exclusions, DC licensure, prompt pay and what intake should verify.',
    intro: [
      'For an intake team in Washington, an Aetna card means three layers: Aetna’s national ABA criteria, the District’s habilitative-services mandate in D.C. Code § 31-3272, and the plan’s funding type. In the District, check one more thing than usual: federal employee plans are outside the DC statute.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      { label: 'State mandate', value: 'D.C. Code §§ 31-3271–31-3272 (habilitative services incl. autism; D.C. Law 16-198) + DC EHB benchmark naming ABA' },
      { label: 'Mandate age', value: 'Under 21' },
      { label: 'Mandate caps', value: 'None allowed beyond those for other conditions (parity on deductibles, dollar, visit and durational limits)' },
      { label: 'Exempt from mandate', value: 'Federal employee health plans, Medicare, and self-funded ERISA employer plans' },
      { label: 'Licensure', value: 'DC Board of Psychology licenses behavior analysts (D.C. Law 25-191, 2024); confirm licenses are being issued' },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in the District',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis by an appropriate provider, services provided or billed by an appropriately licensed or certified provider, functional impairment on a standardized scale in the past 12 months (at least one standard deviation below the mean, or significant risk of harm), and a measurable plan with transition and discharge criteria; hours follow a severity grid. CPB 0554 makes ABA experimental for non-ASD indications. Aetna’s behavioral health precertification list names all ten ABA codes. The guide’s only state exhibit is for Maryland ("Other state laws and regulations may apply in other states"), so no District-specific criteria change the policy. DHCF lists no Aetna Medicaid plan in the District.',
        ],
        cites: [S.aetnaGuide, S.aetnaCPB, S.aetnaPrecert, S.mcps],
      },
      {
        h2: 'The District mandate: what it guarantees',
        body: [DC_MANDATE_BODY],
        cites: [S.dc3271, S.dc3272, S.hbx, S.cfMPU0126, S.erisa],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [DC_LICENSURE_BODY],
        cites: [S.dc1202_11, S.dc1207_71, S.bacbLic, S.dcPsy, S.cfCh3, S.teleGuide],
      },
      {
        h2: 'Claims: prompt pay and filing deadlines in the District',
        body: [
          'D.C. Code § 31-3132 makes an insurer pay a clean claim "within 30 days after the receipt," with interest of 1.5% a month from day 31, 2% from day 61 and 2.5% after day 120, unless it disputes the claim in writing within 30 days and pays any undisputed part. It must allow at least 180 days from the date of service to file. An electronic claim is presumed received within 24 hours. Retroactive denials are limited to 6 months after payment (18 months for coordination-of-benefits cases). Aetna’s provider manual (6/26) ties payment to "the rates and compensation under your agreement," and members cannot be charged more than the contracted rate. Self-funded plans follow their own plan terms.',
        ],
        cites: [S.dc3132, S.dc3133, S.aetnaOM],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured DC plan (§ 31-3272 applies), federal employee plan, or self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'From the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'School and EI services', desc: 'DC law does not make insurers pay for habilitative services delivered through early intervention or school.' },
    ],
    sources: [S.aetnaGuide, S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.dc3271, S.dc3272, S.hbx, S.dc3132, S.dc3133, S.dc3862, S.dc3875_03, S.dc3875_07, S.dc1202_11, S.dc1207_71, S.bacbLic, S.erisa, S.mcps],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s participation criteria (5/26): ABA services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board"; supervised staff may be a BCaBA or a paraprofessional; at least "one hour of face-to-face supervision" per "10 hours of applied behavior analysis" by a paraprofessional, plus the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements."',
        status: 'verified',
        cites: [S.aetnaNPC, S.aetnaGuide],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA documents (the medical necessity guide, CPB 0554).',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaCPB],
        verifyVia: 'Aetna provider services or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day cap. Typical intensities in the guide are 10–25 hours a week for comprehensive and 1–20 for focused ABA (typical, not limits); QHP protocol modification may be authorized at 1 to 2 hours per 10 hours of treatment.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed in Aetna’s ABA documents.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your Aetna participation agreement and the Aetna Behavioral Health provider manual’s documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The guide is setting-neutral for outpatient ABA and expects coordination with the school district. D.C. Code § 31-3272 does not require insurers to pay for habilitative services "actually delivered through early intervention or school services."',
        status: 'verified',
        cites: [S.aetnaGuide, S.dc3272],
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (where a state licenses them), BCBAs, or licensed psychologists with ABA in scope, unless mandates, plan documents or contracts say otherwise.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; it lists typical age ranges only.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.dc3272, S.dc3271],
        verifyVia: 'Live benefits verification: establish fully insured DC, federal employee or self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but impairment must be shown on a standardized scale "in the past 12 months."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure (VABS-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA documents require precertification of all ten ABA codes, not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.dc3272, S.dc3271],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26) says Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers must have "the proper licensure based on state requirements." Aetna’s current ABA telehealth code list was not available to us.' + DC_COMMERCIAL_TELE,
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.dc3862],
        verifyVia: 'Availity or the precertification line on the card: ask which ABA codes, POS and modifier Aetna pays by telehealth for this plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: DC_COMMERCIAL_TURNAROUND('Aetna'),
        status: 'plan-dependent',
        cites: [S.dc3875_03, S.dc3875_04, S.dc3875_05, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is regulated by the District or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DC_COMMERCIAL_COB('Aetna'),
        status: 'plan-dependent',
        cites: [S.dc3875_07, S.dc3133, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Washington, DC?', a: 'Yes, under its national ABA guide for ASD. Fully insured DC plans must also cover habilitative services for autism for children under 21 under D.C. Code § 31-3272. Federal employee and self-funded plans follow their own terms.' },
      { q: 'Does the DC autism mandate cap ABA hours or dollars?', a: 'No. § 31-3272 bars limits on habilitative coverage that are more restrictive than those for other conditions. Its age limit is under 21.' },
      { q: 'How fast must Aetna pay a clean claim in DC?', a: 'Within 30 days under D.C. Code § 31-3132, with interest after that, and insurers must give you at least 180 days to file. Self-funded plans follow their own terms.' },
      { q: 'Does Aetna require RBT certification for technicians?', a: 'Aetna’s network criteria allow BCBA-supervised paraprofessionals, with at least 1 hour of face-to-face supervision per 10 hours of ABA and the supervisor onsite 1 hour a month, and require staff to meet state requirements.' },
    ],
  },

  'cigna-district-of-columbia': {
    slug: 'cigna-district-of-columbia',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + D.C. Code § 31-3272 habilitative mandate; no PA on assessment codes.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: after the assessment, submit the treatment plan on the Applied Behavior Analysis Prior Authorization Form; requests are encouraged up to 30 days before the start date',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD under DSM-5-TR, made by an independently licensed professional whose board puts diagnosis in scope (EN0499)',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in the District of Columbia',
    state: 'DC', kind: 'commercial',
    pill: 'Payer Guide · Cigna · District of Columbia',
    h1: 'Cigna / Evernorth ABA coverage in the District of Columbia: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Washington, DC: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for District of Columbia families: EN0499, no PA on assessments, D.C. Code § 31-3272 (habilitative coverage under 21), federal-employee and self-funded exclusions, DC licensure, prompt pay and what intake should verify.',
    intro: [
      'For an intake team in Washington, a Cigna card means Evernorth’s national ABA policy EN0499 with the autism resource guide, the District’s habilitative-services mandate in D.C. Code § 31-3272, and the plan’s funding type. Many Cigna members are on self-funded employer plans, which sit outside the DC statute, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499 (eff. 5/15/2026)' },
      { label: 'State mandate', value: 'D.C. Code §§ 31-3271–31-3272 (habilitative services incl. autism; D.C. Law 16-198) + DC EHB benchmark naming ABA' },
      { label: 'Mandate age', value: 'Under 21' },
      { label: 'Mandate caps', value: 'None allowed beyond those for other conditions (parity on deductibles, dollar, visit and durational limits)' },
      { label: 'Exempt from mandate', value: 'Federal employee health plans, Medicare, and self-funded ERISA employer plans' },
      { label: 'Licensure', value: 'DC Board of Psychology licenses behavior analysts (D.C. Law 25-191, 2024); confirm licenses are being issued' },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth Provider Agreement; Provider Services 800.926.2273' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in the District',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is not required for assessment codes 97151, 97152 and 0362T with an autism diagnosis "as long as the provider is independently licensed or a Board Certified Behavior Analyst" and the policy covers ABA; treatment needs the Applied Behavior Analysis Prior Authorization Form with the completed assessment and plan. Cigna encourages requests up to 30 days ahead; a late request can trigger retrospective review taking up to 30 days. Neither document mentions the District, so the national criteria apply. DHCF lists no Cigna Medicaid plan in the District.',
        ],
        cites: [S.en0499, S.cignaARG, S.mcps],
      },
      {
        h2: 'The District mandate: what it guarantees',
        body: [DC_MANDATE_BODY],
        cites: [S.dc3271, S.dc3272, S.hbx, S.cfMPU0126, S.erisa],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [DC_LICENSURE_BODY],
        cites: [S.dc1202_11, S.dc1207_71, S.bacbLic, S.dcPsy, S.cfCh3, S.teleGuide],
      },
      {
        h2: 'Claims: Evernorth’s 90-day rule meets DC’s 180-day floor',
        body: [
          'Evernorth’s Administrative Guidelines (September 2026) set a 90-day filing limit but list an exception where "Applicable state law provides for a longer timely filing limit in which case that time limit will apply." D.C. Code § 31-3132 requires a District-regulated insurer to allow "a minimum of 180 days from the date a covered service is rendered" and to pay clean claims within 30 days, with interest of 1.5% a month from day 31, 2% from day 61 and 2.5% after day 120. A self-funded plan is not bound by the District statute, so file within 90 days when in doubt. Rates are in "Exhibit A in your Provider Agreement"; virtual services carry modifier 95, which Evernorth says "will not change the reimbursement."',
        ],
        cites: [S.ebhAdmin, S.dc3132],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured DC plan (§ 31-3272 applies), federal employee plan, or self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, and the date of the most recent diagnosis.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'School and EI services', desc: 'DC law does not make insurers pay for habilitative services delivered through early intervention or school.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.dc3271, S.dc3272, S.hbx, S.dc3132, S.dc3133, S.dc3862, S.dc3875_03, S.dc3875_07, S.dc1202_11, S.dc1207_71, S.bacbLic, S.erisa, S.mcps],
    deliveryRules: {
      supervision: {
        value: 'Direct and indirect case supervision at "one to two hours per ten hours of direct treatment"; when direct treatment is 10 hours a week or less, at least one to two hours a week of direct case supervision (EN0499).',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes are 15-minute units and ABA must be billed only with 97151–97158, 0362T and 0373T.',
        status: 'verified',
        cites: [S.cignaARG],
      },
      noteSignature: {
        value: 'EN0499 requires each service to be documented, including the name, credential and signature of the rendering provider.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'EN0499 asks for goals and data for each setting where treatment occurs; primarily educational services are not covered. D.C. Code § 31-3272 does not require payment for habilitative services delivered through early intervention or school.',
        status: 'verified',
        cites: [S.en0499, S.dc3272],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." On paper claims list "only a BCBA or other licensed provider in box 33"; electronic payer ID 62308.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age."' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.dc3272, S.dc3271],
        verifyVia: 'Live benefits verification: establish fully insured DC, federal employee or self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made. The standardized instrument and baseline data must be within 60 days before treatment starts.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice," applying DSM-5-TR.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated; the assessment must use "a reliable, valid, and standardized assessment instrument," with dates and scores reported.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral. Assessments need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.dc3272, S.dc3271],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (autism resource guide); bill with modifier 95, which "will not change the reimbursement" (Evernorth Administrative Guidelines).' + DC_COMMERCIAL_TELE,
        status: 'verified',
        cites: [S.cignaARG, S.ebhAdmin, S.dc3862],
      },
      authTurnaround: {
        value: DC_COMMERCIAL_TURNAROUND('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.dc3875_03, S.dc3875_04, S.dc3875_05, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is regulated by the District or self-funded (ERISA), and what reauthorization lead time Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DC_COMMERCIAL_COB('Cigna/Evernorth'),
        status: 'plan-dependent',
        cites: [S.dc3875_07, S.dc3133, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna/Evernorth at benefits verification for the coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Washington, DC?', a: 'Yes, under EN0499 for ASD. Fully insured DC plans must also cover habilitative services for autism for children under 21 under D.C. Code § 31-3272. Self-funded and federal employee plans follow their own terms.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in DC?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'What is Cigna’s timely filing limit for DC claims?', a: 'Evernorth’s default is 90 days, but it defers to a longer state limit, and D.C. Code § 31-3132 requires at least 180 days for District-regulated plans. Self-funded plans may hold you to 90.' },
      { q: 'What does Cigna pay for ABA in DC?', a: 'Cigna publishes no ABA rates. Your fee schedule is Exhibit A of your Evernorth Provider Agreement; call Provider Services at 800.926.2273.' },
    ],
  },

  'unitedhealthcare-district-of-columbia': {
    slug: 'unitedhealthcare-district-of-columbia',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + D.C. Code § 31-3272 habilitative mandate; no DC entry in Optum’s state mandates supplement.',
    assessmentPA: {
      value: 'Required: Optum’s ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless "otherwise specified or mandated by contract or law"; they do not exempt the assessment',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; continued-service review examines use of authorized hours below 80% over a two-week period. The review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval applies to this authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5-TR ASD diagnosis by a state-licensed physician, psychologist or other qualified licensed clinician, confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in the District of Columbia',
    state: 'DC', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · District of Columbia',
    h1: 'UnitedHealthcare / Optum ABA coverage in the District of Columbia: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Washington, DC: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for District of Columbia families: Optum’s ABA criteria, three-code telehealth list, credential modifiers, D.C. Code § 31-3272 (habilitative coverage under 21), DC licensure, prompt pay and what intake should verify.',
    intro: [
      'For an intake team in Washington, a UnitedHealthcare card means Optum Behavioral Health’s national ABA criteria, the District’s habilitative-services mandate in D.C. Code § 31-3272, and the plan’s funding type. UnitedHealthcare is not one of the District’s Medicaid plans, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'D.C. Code §§ 31-3271–31-3272 (habilitative services incl. autism; D.C. Law 16-198) + DC EHB benchmark naming ABA' },
      { label: 'Mandate age', value: 'Under 21' },
      { label: 'Mandate caps', value: 'None allowed beyond those for other conditions (parity on deductibles, dollar, visit and durational limits)' },
      { label: 'Exempt from mandate', value: 'Federal employee health plans, Medicare, and self-funded ERISA employer plans' },
      { label: 'Licensure', value: 'DC Board of Psychology licenses behavior analysts (D.C. Law 25-191, 2024); confirm licenses are being issued' },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, by credential (HM/HN/HO/HP modifiers)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in the District',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (interim review April 2026): prior authorization, a diagnosis confirmed with a validated tool, direct case supervision of 1–2 hours per 10 hours of treatment, and continued-service review that looks hard at use below 80% of authorized hours. Optum’s ABA State Mandates supplement (effective July 2026) has entries for Arizona, California, Connecticut, Florida, Maryland, Massachusetts, Ohio, Pennsylvania and Virginia, plus New Jersey and New York Medicaid, but none for the District, so no DC-specific criteria modify the commercial policy. DHCF lists no UnitedHealthcare Medicaid plan in the District.',
        ],
        cites: [S.optumSCC, S.optumSM, S.mcps],
      },
      {
        h2: 'The District mandate: what it guarantees',
        body: [DC_MANDATE_BODY],
        cites: [S.dc3271, S.dc3272, S.hbx, S.cfMPU0126, S.erisa],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [DC_LICENSURE_BODY],
        cites: [S.dc1202_11, S.dc1207_71, S.bacbLic, S.dcPsy, S.cfCh3, S.teleGuide],
      },
      {
        h2: 'Claims and the credential modifiers',
        body: [
          'Optum’s National Network Manual (effective Sept. 1, 2026) defines the Fee Maximum as "The maximum amount a participating provider may be paid for a specific health care service provided to a member" and says "Reimbursement to clinicians is based upon licensure rather than degree." Its commercial ABA Reimbursement Policy (2022RP501A) puts the credential on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA, HP for a doctoral-level provider, with indirect work bundled into the direct codes. For fully insured District plans, D.C. Code § 31-3132 requires payment of clean claims within 30 days (interest after) and at least 180 days to file.',
        ],
        cites: [S.optumNNM, S.optumReimb, S.dc3132],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured DC plan (§ 31-3272 applies), federal employee plan, or self-funded ERISA.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others).' },
      { title: 'Staff credentials', desc: 'Each line carries HM (RBT), HN (BCaBA), HO (BCBA) or HP (BCBA-D).' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumTele, S.optumReimb, S.optumNNM, S.dc3271, S.dc3272, S.hbx, S.dc3132, S.dc3133, S.dc3862, S.dc3875_03, S.dc3875_07, S.dc1202_11, S.dc1207_71, S.bacbLic, S.erisa, S.mcps],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Optum does not recommend parents serving as their own child’s RBT.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      concurrentBilling: {
        value: 'Not addressed in the SCC or the reimbursement policy.',
        status: 'unverified',
        cites: [S.optumSCC, S.optumReimb],
        verifyVia: 'Optum Provider Express support or your participating-provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; hours must match documented need. Use below 80% of authorized hours over two weeks must be explained at review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed in the SCC.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum National Network Manual documentation standards and your participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA. D.C. Code § 31-3272 likewise excludes habilitative services delivered through early intervention or school.',
        status: 'verified',
        cites: [S.optumSCC, S.dc3272],
      },
      billAsProvider: {
        value: 'Each claim line carries the rendering credential: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (doctoral level); indirect services are bundled into direct codes (2022RP501A).',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.dc3272, S.dc3271],
        verifyVia: 'Provider Express benefits check: establish fully insured DC, federal employee or self-funded first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; the DSM-5 diagnosis and severity level must be confirmed with a validated tool, and progress is reviewed during continued-service review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A "state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.dc3272, S.dc3271],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (September 2025), commercial: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157," with POS 02 or 10 required. The SCC say telehealth is "not intended to supplant in-person service." Ask Optum how it applies the three-code list to a District-regulated plan.' + DC_COMMERCIAL_TELE,
        status: 'verified',
        cites: [S.optumTele, S.optumSCC, S.dc3862],
      },
      authTurnaround: {
        value: DC_COMMERCIAL_TURNAROUND('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.dc3875_03, S.dc3875_04, S.dc3875_05, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is regulated by the District or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DC_COMMERCIAL_COB('UnitedHealthcare/Optum'),
        status: 'plan-dependent',
        cites: [S.dc3875_07, S.dc3133, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Washington, DC?', a: 'Yes, under Optum’s national ABA criteria for ASD. Fully insured DC plans must also cover habilitative services for autism for children under 21 under D.C. Code § 31-3272.' },
      { q: 'Does Optum have DC-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) has no District of Columbia entry.' },
      { q: 'Can ABA be delivered by telehealth with UnitedHealthcare in DC?', a: 'Optum’s commercial telehealth guide allows only 97155, 97156 and 97157, billed POS 02 or 10. DC law bars denying a covered service only because it is delivered by telehealth for District-regulated plans, so ask Optum how it applies the list.' },
      { q: 'Is UnitedHealthcare a DC Medicaid plan?', a: 'No. DC Medicaid’s plans are AmeriHealth Caritas DC and MedStar Family Choice DC, plus HSCSN for CASSIP.' },
    ],
  },

  'carefirst-district-of-columbia': {
    slug: 'carefirst-district-of-columbia',
    family: 'bcbs',
    cardDesc: 'The District’s Blue plan (GHMSI/BlueChoice): ABA on the HMO prior-auth list (3.01.015), habilitative pre-service review on PPO; MCG for behavioral health.',
    assessmentPA: {
      value: 'Not stated separately. CareFirst’s BlueChoice HMO list requires authorization for "Applied Behavioral Analysis (ABA) (3.01.015)" and its PPO list requires pre-service review for "Habilitative Services (8.01.011A)," without separating the 97151 assessment; code-level answers are in the portal’s PAL tool',
      status: 'unverified',
      cites: [S.cfPre],
      verifyVia: 'CareFirst Provider Portal → Prior Auth/Notifications → Prior Authorization Lookup (PAL) tool, entering 97151 for the member, or 1-866-773-2884 (1-866-PRE-AUTH).',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. BlueChoice HMO: "Applied Behavioral Analysis (ABA) (3.01.015)" requires prior authorization; PPO: "Habilitative Services (8.01.011A)" requires pre-service review; FEP Standard, Basic and Blue Focus: ABA requires prior authorization. CareFirst says the lists "may vary based on account contracts"',
      status: 'verified',
      cites: [S.cfPre, S.cfCh2],
    },
    dxRequired: {
      value: 'ABA sits under Medical Policy 3.01.015 (Autism Spectrum Disorder), effective 3/1/2026, whose DC benefit note points to § 31-3272. The policy’s criteria text sits in CareFirst’s SAI360 policy portal, which we could not open',
      status: 'unverified',
      cites: [S.cfMPU0126, S.cfMedPol],
      verifyVia: 'CareFirst Medical Policy Reference Manual (provider.carefirst.com → Medical Policy), policy 3.01.015, or 1-866-773-2884.',
      blocker: 'document',
    },
    payer: 'CareFirst BlueCross BlueShield (District of Columbia)',
    state: 'DC', kind: 'commercial',
    pill: 'Payer Guide · CareFirst BCBS · District of Columbia',
    h1: 'CareFirst BlueCross BlueShield ABA coverage in the District of Columbia: the intake guide.',
    metaTitle: 'CareFirst BCBS ABA Coverage in Washington, DC: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How CareFirst BlueCross BlueShield covers ABA in the District of Columbia: Medical Policy 3.01.015, the habilitative-services procedure 8.01.011A, HMO, PPO and FEP prior authorization, credentialing without a recognized DC license, claims rules, and D.C. Code § 31-3272.',
    intro: [
      'CareFirst BlueCross BlueShield is the Blue plan for Washington, D.C., Maryland and Northern Virginia; in the District its business name covers Group Hospitalization and Medical Services, Inc. (GHMSI) and CareFirst BlueChoice. Two CareFirst documents govern ABA: Medical Policy 3.01.015 (Autism Spectrum Disorder), updated for March 1, 2026 with a pointer to D.C. Code § 31-3272 for DC members, and Operating Procedure 8.01.011A (Habilitative Services, MD and DC Mandates). CareFirst also administers the Federal Employee Program, which matters in Washington: FEP plans are outside the DC statute but list ABA among services needing prior authorization.',
      'We could read CareFirst’s update notices, prior-authorization lists and provider-manual chapters, but not the full text of the two policies, which sit behind CareFirst’s SAI360 policy portal. Where a rule depends on that text, this guide says so and points to where to confirm it.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under Medical Policy 3.01.015 and the member’s contract; DC fully insured plans also fall under § 31-3272' },
      { label: 'Prior auth', value: 'BlueChoice HMO: ABA (3.01.015); PPO: Habilitative Services (8.01.011A) pre-service review; FEP: ABA. Check PAL or 1-866-773-2884' },
      { label: 'State mandate', value: 'D.C. Code §§ 31-3271–31-3272 (habilitative services incl. autism; D.C. Law 16-198) + DC EHB benchmark naming ABA' },
      { label: 'Mandate age', value: 'Under 21' },
      { label: 'Mandate caps', value: 'None allowed beyond those for other conditions (parity on deductibles, dollar, visit and durational limits)' },
      { label: 'Exempt from mandate', value: 'Federal employee health plans (incl. FEP), Medicare, and self-funded ERISA employer plans' },
      { label: 'Licensure', value: 'DC Board of Psychology licenses behavior analysts (2024), but CareFirst’s credentialing list names licensed BCBAs in MD and VA only' },
      { label: 'Fee schedule', value: 'Not public — rates are in your CareFirst agreement; claims due within 365 days' },
    ],
    sections: [
      {
        h2: 'Prior authorization: HMO, PPO and FEP',
        body: [
          'CareFirst’s in-network precertification page lists, for BlueChoice HMO members, "Behavioral Health and Substance Use Disorder (Milliman Care Guidelines)" and "Applied Behavioral Analysis (ABA) (3.01.015)" among services requiring authorization; for PPO members, "Habilitative Services (8.01.011A)" is on the pre-service review list. Its provider manual lists ABA as requiring prior authorization under FEP Standard and Basic Option and FEP Blue Focus. CareFirst warns the lists "may vary based on account contracts and should be verified by contacting 1-866-773-2884," and code-level answers are in the Prior Authorization Lookup (PAL) tool inside the provider portal. CareFirst’s care-management chapter lists MCG Behavioral Health Care Guidelines among its review criteria.',
          'The January 2026 policy update to 3.01.015 (effective March 1, 2026) made no change in coverage but added that member contracts take precedence over clinical criteria, that coverage "may be subject to state specific mandates," and that for the District "please refer to § 31–3272." It also added the PAL tool and 1-866-PRE-AUTH as the route for prior-authorization requirements. Operating Procedure 8.01.011A was revised in December 2024.',
        ],
        cites: [S.cfPre, S.cfCh2, S.cfCh7, S.cfMPU0126, S.cfMPU1224],
      },
      {
        h2: 'Credentialing and billing in the District',
        body: [
          'CareFirst contracts with "independently practicing licensed healthcare practitioners," who must be "licensed in the state where the member receives the service" and practice within its Maryland, DC and Northern Virginia service area. Its list of eligible professionals names "Licensed Board-Certified Behavior Analyst (Maryland and Virginia only)," so a BCBA practicing in the District should ask CareFirst how it credentials DC behavior analysts now that the District licenses them. CareFirst’s payment-policy index lists PP CO 020.01, "Limited Licensed Providers," as covering "Assistant Behavior Analysts and Registered Behavior Technicians"; we could not open the policy text. Claims "must be submitted within 365 days from the date of service," and billing and rendering NPIs are required on every claim.',
        ],
        cites: [S.cfCh3, S.cfCh5],
      },
      {
        h2: 'The District mandate: what it guarantees',
        body: [DC_MANDATE_BODY],
        cites: [S.dc3271, S.dc3272, S.hbx, S.cfMPU0126, S.erisa],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [DC_LICENSURE_BODY],
        cites: [S.dc1202_11, S.dc1207_71, S.bacbLic, S.dcPsy, S.cfCh3, S.teleGuide],
      },
    ],
    collect: [
      { title: 'Product and funding type', desc: 'BlueChoice HMO, PPO, FEP, or a self-funded group; the PA route and the mandate both depend on it.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis, diagnosing clinician and date; CareFirst’s criteria sit in policy 3.01.015 and MCG.' },
      { title: 'Treatment plan', desc: 'Goals and requested hours for the HMO authorization or PPO pre-service review.' },
      { title: 'Rendering clinician’s license', desc: 'CareFirst requires licensure where the member receives care; confirm how it credentials DC BCBAs.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, DC Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.cfPre, S.cfCh2, S.cfCh3, S.cfCh5, S.cfCh7, S.cfMPU0126, S.cfMPU1224, S.cfMedPol, S.dc3271, S.dc3272, S.hbx, S.dc3132, S.dc3133, S.dc3862, S.dc3875_03, S.dc3875_07, S.dc1202_11, S.dc1207_71, S.bacbLic, S.erisa],
    deliveryRules: {
      supervision: {
        value: 'CareFirst’s supervision terms for technicians sit in Payment Policy PP CO 020.01 (Limited Licensed Providers, covering assistant behavior analysts and RBTs), whose text we could not open.',
        status: 'unverified',
        cites: [S.cfCh3],
        verifyVia: 'CareFirst Payment Policy Reference Manual (provider.carefirst.com → Payment Policy), PP CO 020.01, or CareFirst Provider Service.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not stated in the CareFirst documents we could read.',
        status: 'unverified',
        cites: [S.cfCh5],
        verifyVia: 'CareFirst Payment Policy Reference Manual or Provider Service.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'Not stated in the CareFirst documents we could read; hours are set per authorization.',
        status: 'unverified',
        cites: [S.cfPre],
        verifyVia: 'Medical Policy 3.01.015 / Operating Procedure 8.01.011A, or 1-866-773-2884.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Not stated in the CareFirst documents we could read.',
        status: 'unverified',
        cites: [S.cfCh5],
        verifyVia: 'Your CareFirst agreement and the Medical Policy Reference Manual.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not stated in the CareFirst documents we could read. D.C. Code § 31-3272 does not require payment for habilitative services delivered through early intervention or school.',
        status: 'unverified',
        cites: [S.cfPre, S.dc3272],
        verifyVia: 'Medical Policy 3.01.015 or CareFirst Provider Service: ask which POS codes it pays for ABA.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Billing and rendering NPIs are required on all claims (provider manual ch. 5). How RBT and BCaBA services are billed is set by PP CO 020.01, which we could not open.',
        status: 'unverified',
        cites: [S.cfCh5, S.cfCh3],
        verifyVia: 'CareFirst Payment Policy PP CO 020.01, or CareFirst Provider Service: ask whose NPI goes in the rendering field for RBT services in the District.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Not stated in the CareFirst documents we could read; 3.01.015 points DC members to § 31-3272.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.cfMPU0126, S.dc3272, S.dc3271],
        verifyVia: 'Live benefits verification: establish product and funding type, then the contract’s habilitative and ABA terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not stated in the documents we could read; behavioral health review uses MCG guidelines, which are licensed.',
        status: 'unverified',
        cites: [S.cfPre, S.cfCh7],
        verifyVia: 'CareFirst, 1-866-773-2884: ask what diagnostic documentation and dates it expects.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Not stated in the documents we could read; set in policy 3.01.015 and MCG.',
        status: 'unverified',
        cites: [S.cfMPU0126, S.cfCh7],
        verifyVia: 'CareFirst Medical Policy 3.01.015 or 1-866-773-2884.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated in the documents we could read; MCG criteria are licensed.',
        status: 'unverified',
        cites: [S.cfCh7],
        verifyVia: 'CareFirst, 1-866-773-2884.',
        blocker: 'licensed',
      },
      referral: {
        value: 'CareFirst requires authorization (HMO) or pre-service review (PPO) rather than a referral rule in the documents we read.' + MANDATE_REFERRAL_TAIL,
        status: 'plan-dependent',
        cites: [S.cfPre, S.dc3272, S.dc3271],
        verifyVia: 'CareFirst, 1-866-773-2884: ask whether the member’s product needs a PCP referral for ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'CareFirst’s ABA telehealth rules sit in its payment policies, which we could not open.' + DC_COMMERCIAL_TELE,
        status: 'plan-dependent',
        cites: [S.dc3862, S.cfCh3],
        verifyVia: 'CareFirst Provider Service: ask which ABA codes, POS and modifier it pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: DC_COMMERCIAL_TURNAROUND('CareFirst'),
        status: 'plan-dependent',
        cites: [S.dc3875_03, S.dc3875_04, S.dc3875_05, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is regulated by the District, FEP or self-funded, and what reauthorization lead time CareFirst expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: DC_COMMERCIAL_COB('CareFirst'),
        status: 'plan-dependent',
        cites: [S.dc3875_07, S.dc3133, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask CareFirst at benefits verification for the coordination-of-benefits order and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does CareFirst require prior authorization for ABA in DC?', a: 'Yes. ABA (policy 3.01.015) is on the BlueChoice HMO authorization list, habilitative services (8.01.011A) need pre-service review on PPO, and FEP plans require prior authorization for ABA. Check codes in the PAL tool or at 1-866-773-2884.' },
      { q: 'Does the DC mandate apply to a federal employee’s CareFirst plan?', a: 'No. D.C. Code § 31-3271 excludes federal employee health plans. FEP plans still list ABA as needing prior authorization, so follow the FEP rules.' },
      { q: 'Can a DC-based BCBA join CareFirst’s network?', a: 'CareFirst requires practitioners to be licensed where the member receives care, and its credentialing list names licensed BCBAs in Maryland and Virginia only. The District began licensing behavior analysts in 2024, so ask CareFirst credentialing how it handles DC BCBAs.' },
      { q: 'What is CareFirst’s timely filing limit?', a: '365 days from the date of service, per CareFirst’s provider manual.' },
    ],
  },
};

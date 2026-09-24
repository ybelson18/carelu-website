import type { PayerConfig, PayerSource } from './types.js';

/* New Hampshire — researched September 2026 from primary sources only.
   gencourt.state.nh.us and nhmmis.nh.gov return a 403 "Web Page Blocked" to direct
   automated fetches; every statute, rule and NH MMIS document below was read in full
   through the https://r.jina.ai/<url> text proxy. dhhs.nh.gov behaves the same way. */

const S: Record<string, PayerSource> = {
  heW500: { title: 'N.H. Admin. Rules He-W 500 — Medical Assistance (He-W 506, 530, 546 EPSDT, 589 Medicaid to Schools)', url: 'https://www.gencourt.state.nh.us/rules/state_agencies/he-w500.html' },
  fee: { title: 'NH MMIS — 2026 Fee Schedule, Covered Procedures Report with SA Requirements (as of 07-24-2026)', url: 'https://nhmmis.nh.gov/portals/wps/wcm/connect/4a6d9e2c-f8af-407e-86f8-6378c7e79ad8/2026+Fee+Schedule+-+Covered+Procedures+Report+with+SA+Requirements+as+of+07-24-2026.pdf?MOD=AJPERES&CVID=p.9ZszB' },
  form272A: { title: 'NH Medicaid Form 272A — Request for Service Authorization for ABA Services (FFS only, 07/2023)', url: 'https://nhmmis.nh.gov/portals/wps/wcm/connect/86db7821-8bab-4983-af3c-23ee32ed1795/272A+ABA+FFS+ABA+Services+07.2023.pdf?MOD=AJPERES&CVID=pzd8t5p' },
  saInstr: { title: 'NH Medicaid — Service Authorization Requirements, FFS Authorization Form Instructions (07/01/2023)', url: 'https://nhmmis.nh.gov/portals/wps/wcm/connect/cfb10baa-0c2d-4ee3-9561-98800ef579ce/Instructions+Fee-for-Service+Authorization+Forms+07.2023.pdf?MOD=AJPERES&CVID=oDviiov' },
  nonPrimary: { title: 'NH Medicaid — Non-Primary Payer Claim Billing Requirements (updated May 23, 2023)', url: 'https://nhmmis.nh.gov/portals/wps/wcm/connect/9d07a0a4-82af-46c4-b758-d1a911bd9753/NH+Medicaid+Non-Primary+Claim+Billing+Requirements.pdf?MOD=AJPERES&CVID=oywGTyK' },
  mmisDocs: { title: 'NH MMIS — Documents and Forms (FFS service authorizations, fee schedules)', url: 'https://nhmmis.nh.gov/portals/wps/portal/DocumentsandForms' },
  mcm: { title: 'NH DHHS — Medicaid Care Management (the three Medicaid health plans)', url: 'https://www.dhhs.nh.gov/programs-services/medicaid/medicaid-care-management' },
  rsa417E: { title: 'RSA 417-E:1–2 — Coverage for biologically-based mental illnesses; treatment of pervasive developmental disorder or autism', url: 'https://www.gencourt.state.nh.us/rsa/html/XXXVII/417-E/417-E-mrg.htm' },
  hb569: { title: 'HB 569 (2010), Laws 2010 ch. 363 — as enacted, with the original ABA dollar caps', url: 'https://gc.nh.gov/legislation/2010/HB0569.html' },
  rsa420J: { title: 'RSA 420-J — Managed Care Law (420-J:3-b, 420-J:4 credentialing, 420-J:6 utilization review, 420-J:8-c)', url: 'https://www.gencourt.state.nh.us/rsa/html/XXXVII/420-J/420-J-mrg.htm' },
  ins1904: { title: 'N.H. Admin. Rules Ins 1904 — Group Coordination of Benefits (Ins 1904.05 order of benefits)', url: 'https://www.gencourt.state.nh.us/rules/state_agencies/ins1900.html' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (New Hampshire not listed)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  acnhPM: { title: 'AmeriHealth Caritas New Hampshire — Provider Manual (published June 2026)', url: 'https://www.amerihealthcaritasnh.com/content/dam/amerihealth-caritas/acnh/pdf/provider/provider-manual.pdf.coredownload.inline.pdf' },
  acnhPA: { title: 'AmeriHealth Caritas New Hampshire — Prior Authorization lookup tool', url: 'https://www.amerihealthcaritasnh.com/provider/resources/prior-auth' },
  nhhfPM: { title: 'NH Healthy Families — Provider Manual (January 2026)', url: 'https://www.nhhealthyfamilies.com/content/dam/centene/NH%20Healthy%20Families/Medicaid/pdfs/NHHF_Provider_Manual_January_2026_CLEAN_version.pdf' },
  nhhfPP07: { title: 'NH Healthy Families Payment Policy NH.PP.07 — Applied Behavioral Analysis (eff. 5/1/2019)', url: 'https://www.nhhealthyfamilies.com/content/dam/centene/NH%20Healthy%20Families/Medicaid/pdfs/Applied-Behavioral-Analysis-Policy-NH-PP-07.pdf' },
  nhhfTip: { title: 'NH Healthy Families — Transition of ABA Services to Behavioral Health Platform, Billing Tip Sheet (eff. 6/1/2024)', url: 'https://www.nhhealthyfamilies.com/content/dam/centene/NH%20Healthy%20Families/Medicaid/pdfs/NHHF_Ambetter_ABA_Transition.pdf' },
  nhhfPreAuth: { title: 'NH Healthy Families — Medicaid Pre-Auth Check (code lookup)', url: 'https://www.nhhealthyfamilies.com/providers/preauth-check/medicaid-pre-auth.html' },
  wsForm: { title: 'WellSense — Applied Behavioral Analysis Prior Authorization Form, New Hampshire (updated 11/14/2025)', url: 'https://www.wellsense.org/hubfs/Forms/Provider_Forms/Applied_Behavioral_Analysis_Prior_Authorization_Form_NH.pdf' },
  wsMatrix: { title: 'WellSense — Behavioral Health Prior Authorization/Notification Requirements, NH (effective 07/01/2026)', url: 'https://www.wellsense.org/hubfs/Provider/Prior%20Authorization/Behavioral_Health_Prior_Auth_Matrix_NH.pdf' },
  wsPM: { title: 'WellSense — New Hampshire Provider Manual (effective December 1, 2025; 2026 posting)', url: 'https://www.wellsense.org/hubfs/Provider/Provider%20Manual/NH_Provider_Manual_2026.pdf' },
  wsBH: { title: 'WellSense — Behavioral health (where to submit claims: Carelon vs. WellSense by date of service)', url: 'https://www.wellsense.org/providers/behavioral-health' },
  wsPA: { title: 'WellSense — Prior authorization (forms and portal)', url: 'https://www.wellsense.org/providers/prior-authorization' },
  anthemRG: { title: 'Anthem BCBS — Applied Behavior Analysis Provider Resource Guide (multi-state incl. New Hampshire, June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
  anthemNHPA: { title: 'Anthem BCBS — New Hampshire Precertification/Prior Authorization List (updated 7/1/26)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/NH_PA_List.pdf' },
  hpMNG: { title: 'Point32Health MNG — Applied Behavioral Analysis (ABA) for Commercial Products and Tufts Health Direct (eff. July 1, 2026)', url: 'https://wwwassets.point32health.org/documents/aba-commercial-iq-comm-mng' },
  hpPP: { title: 'Point32Health Payment Policy — Applied Behavioral Analysis (ABA) Services (rev. 05/2026)', url: 'https://www.point32health.org/documents/applied-behavioral-analysis-aba-services-pp' },
  hpNews: { title: 'Point32Health — Applied behavioral analysis policy and coverage updates (Oct 2025, eff. 1/1/2026)', url: 'https://www.point32health.org/provider/applied-behavioral-analysis-policy-and-coverage-updates-102025' },
  aetnaCPB: { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaBHPM: { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
};

/* ---- Shared New Hampshire commercial layer (same facts on every commercial guide) ---- */
const NH_MANDATE_BODY =
  'New Hampshire’s autism mandate sits inside its mental-illness parity statute. RSA 417-E:1 requires every insurer, nonprofit health service corporation and HMO issuing or renewing accident or health coverage in the state to cover "pervasive developmental disorder or autism" on terms "no less extensive than the coverage provided for any other type of health care for physical illness." RSA 417-E:2 then defines the treatment: "applied behavioral analysis, necessary to produce socially significant improvements in human behavior or to prevent loss of attained skill or function," plus pharmaceuticals, psychiatric, APRN, psychologist and social-work services, and speech, occupational and physical therapy. Two conditions bind ABA specifically. It "must be provided by a person professionally certified by the national Behavior Analyst Certification Board or performed under the supervision of" one. And the insurer "may require submission of a treatment plan, including the frequency and duration of treatment," signed by the primary care provider or a listed specialist (child psychiatrist, developmental-behavioral pediatrician, child neurologist, or a psychologist trained in child psychology), updated "no more frequently than on a semi-annual basis." Coverage "shall not be denied on the basis that services are habilitative in nature." The age and dollar question has changed since enactment: HB 569 as passed in 2010 let a policy "limit coverage for applied behavior analysis to $36,000 per year for children 0 to 12 years of age, and $27,000 from ages 13 to 21." That paragraph does not appear in the current RSA 417-E:2, whose source note lists amendments in 2011 and 2022, and no other age or dollar limit appears in the section. Autism Speaks’ New Hampshire summary (last updated December 2019) still describes the caps, so expect some plan documents and benefit summaries to lag. The mandate reaches fully insured plans only; self-funded employer plans answer to ERISA and federal parity.';

const NH_LICENSURE_BODY =
  'New Hampshire does not license behavior analysts. The BACB’s state licensure table (updated 2026) lists no New Hampshire law or board, and the practical credential is therefore BACB certification, which the mandate itself requires. That shapes credentialing in two ways. First, carriers credential BCBAs on certification rather than a state license number, even where a form asks for one (WellSense’s New Hampshire ABA form has a "BCBA license #" field). Second, the state credentialing clock in RSA 420-J:4 does help: a carrier must tell you an application is incomplete within 15 business days and must "act upon and finalize the credentialing process within 30 calendar days" of a clean and complete application for primary care physicians and mental health providers (45 days for specialists). The statute does not say which bucket a BCBA falls in, so ask. The provisional-pay rule in RSA 420-J:8-c is keyed to "a valid license from the respective state licensing board," which New Hampshire BCBAs do not hold, so do not plan on being paid before credentialing completes. On rates: commercial ABA rates are negotiated and unpublished. RSA 417-E:1, V-b requires carriers’ contracts to pay mental health and substance use treatment services, on average, at least as favorably as non-hospital primary care, measured against relative Medicare reimbursement; the statute does not say whether ABA codes are in that comparison. The public benchmark is the NH Medicaid fee-for-service schedule, which is low (97153 $17.79 and 97155 $16.43 per 15-minute unit).';


const MANDATE_REFERRAL_TAIL =
  ' For a fully insured New Hampshire plan, RSA 417-E:2, II lets the insurer require a treatment plan, with frequency and duration, signed by the primary care provider or a listed specialist, updated no more than every six months. Self-funded ERISA plans sit outside the statute.';

const MANDATE_AGE_TAIL =
  ' For fully insured New Hampshire plans, the current RSA 417-E:2 carries no age or dollar limit on ABA (the 2010 caps of $36,000 a year for ages 0–12 and $27,000 for 13–21 are no longer in the text). Self-funded ERISA plans are outside the statute, so plan funding type decides whether that binds.';

export const newHampshirePayers: Record<string, PayerConfig> = {
  'new-hampshire-medicaid': {
    slug: 'new-hampshire-medicaid',
    cardDesc: 'ABA is an EPSDT benefit (under 21), carved in to three MCOs; FFS needs Form 272A and publishes low rates.',
    assessmentPA: {
      value: 'Fee-for-service: yes. 97151 is flagged SA "Y" on the 2026 NH MMIS fee schedule (the TM-modifier line is "N"). Managed-care members: ask the member’s health plan',
      status: 'verified',
      cites: [S.fee, S.saInstr],
    },
    treatmentPA: {
      value: 'Fee-for-service: yes for 97153, 97155 and 97156 (Form 272A to DHHS Medicaid Medical Services); 97154 and 0373T are flagged SA "N". MCO members go to their plan',
      status: 'verified',
      cites: [S.fee, S.form272A, S.saInstr],
    },
    dxRequired: {
      value: 'Yes. NH’s rule text covers ABA "for individuals with the following diagnoses: (1) Autism spectrum disorder; or (2) Pervasive developmental disability" (He-W 589.04(ag), the Medicaid to Schools rule); the FFS request form requires the diagnosis written out, not coded',
      status: 'verified',
      cites: [S.heW500, S.form272A],
    },
    payer: 'New Hampshire Medicaid',
    state: 'NH', kind: 'state-medicaid',
    pill: 'Payer Guide · New Hampshire Medicaid',
    h1: 'New Hampshire Medicaid ABA coverage: the intake guide.',
    metaTitle: 'New Hampshire Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How New Hampshire Medicaid covers ABA: an EPSDT benefit for children under 21, delivered mostly through three managed care plans (AmeriHealth Caritas NH, NH Healthy Families, WellSense), with a fee-for-service Form 272A path, published FFS rates, and no state behavior-analyst license.',
    intro: [
      'New Hampshire Medicaid covers applied behavior analysis as part of EPSDT, the federal benefit for Medicaid members under 21. The state’s own rules say so in one line: ABA "is covered through the EPSDT benefit pursuant to He-W 546." We found no separate ABA program rule for home and clinic services in the He-W 500 Medicaid rules. The practical consequence is that the family’s card decides almost everything. Members enrolled in Medicaid Care Management belong to one of three health plans (AmeriHealth Caritas New Hampshire, NH Healthy Families, or WellSense Health Plan), and the plan handles ABA authorization, credentialing and payment. Only members who are not in managed care use the state’s fee-for-service path, where DHHS approves ABA on Form 272A.',
      'For an agency trying to get into the New Hampshire Medicaid market, three facts matter up front. You need a New Hampshire Medicaid enrollment and a contract with each health plan you want referrals from; the state does not license behavior analysts, so BACB certification is the credential every payer checks; and the only published ABA rates (the fee-for-service schedule) are low, so model the plans’ contracted rates before you commit staff.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, through EPSDT for members under 21' },
      { label: 'Structure', value: 'Carved in to managed care: three MCOs (AmeriHealth Caritas NH, NH Healthy Families, WellSense); FFS for non-enrolled members' },
      { label: 'FFS prior auth', value: 'Form 272A to DHHS; SA required on 97151, 97153, 97155, 97156' },
      { label: 'FFS rates (per 15 min)', value: '97151/97155/97156 $16.43 · 97153 $17.79 · 97154 $6.50 · 0373T $35.58 (2026 fee schedule)' },
      { label: 'Who may deliver', value: 'BCBA; BCaBA, RBT or rehabilitative assistant under BCBA supervision (He-W 589.04(ah), the Medicaid to Schools rule)' },
      { label: 'Licensure', value: 'None: NH does not license behavior analysts; BACB certification governs' },
      { label: 'Other insurance', value: 'Medicaid pays last; bill the commercial plan first and follow its PA rules' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: EPSDT, then the member’s health plan',
        body: [
          'New Hampshire’s Medicaid rules define ABA as "a treatment modality that employs the process of systematically applying interventions based on the principles of learning theory to improve socially significant behaviors, and is covered through the EPSDT benefit pursuant to He-W 546." EPSDT under He-W 546 covers "all recipients under the age of 21," and services beyond ordinary limits are covered when medically necessary with prior authorization. That definition lives in He-W 589, the Medicaid to Schools rule, which is also the only place the state writes down ABA’s covered diagnoses (autism spectrum disorder or pervasive developmental disability), its provider types, and who must recommend it. We found no separate He-W rule for ABA delivered in homes and clinics.',
          'DHHS lists three Medicaid Care Management health plans: AmeriHealth Caritas New Hampshire, NH Healthy Families (Centene), and Well Sense Health Plan. ABA is inside those contracts, not carved out: AmeriHealth Caritas New Hampshire lists "Early and Periodic Screening, Diagnostic and Treatment Services including Applied Behavioral Analysis Coverage" as a covered service, and WellSense and NH Healthy Families both run their own ABA authorization. The state’s fee-for-service instructions make the split explicit: "If the Member is enrolled in a Managed Care Organizations (MCO) they do not have Fee-for-Service Medicaid as secondary insurance. Contact the MCO directly for SA requirements and use their Standard Authorization form." So the first intake question is which plan is on the card.',
        ],
        cites: [S.heW500, S.mcm, S.acnhPM, S.saInstr],
      },
      {
        h2: 'Fee-for-service: Form 272A, the SA list, and the published rates',
        body: [
          'Members not enrolled in a health plan go through DHHS. Form 272A, "Request for Service Authorization for ABA Services (Fee-for-Service (FFS) Program Only - Not for Managed Care program use)," goes by encrypted email to ServiceAuthorizationFFS@dhhs.nh.gov or fax to (603) 314-8101. It asks for the diagnosis in words, any alternate insurance, the performing therapist’s and requesting facility’s Medicaid IDs, and for each code the hours per week, total units and dates. The packet must include the physician’s order, clinical notes supporting medical necessity (therapy care plan, progress notes, and a "Face to Face PCP visit note within one year"), goals and objectives, and a letter of medical necessity, with the ABA provider certifying the services are "medically necessary and cost effective." Incomplete requests are held 30 days, not denied; once DHHS approves, the fiscal agent has "up to three business days" to create the authorization.',
          'Which codes need that authorization is set by the fee schedule’s SA column. On the 2026 Covered Procedures Report (run July 24, 2026) the ABA lines are: 97151 $16.43 (SA Y, max 32 units), 97153 $17.79 (SA Y, 32), 97154 $6.50 (SA N, 18; priced from 9/1/2025), 97155 $16.43 (SA Y, 24), 97156 $16.43 (SA Y, 32), and 0373T $35.58 (SA N, 32), all per 15-minute unit and, except 97154, priced since 7/1/2023. 97151 and 97153 also carry a TM-modifier line at the same rate with no SA and an 8-unit maximum. 97152, 97157, 97158 and 0362T do not appear on the schedule. These are the only published ABA rates in the state and a floor, not a guide, for plan negotiations.',
        ],
        cites: [S.form272A, S.saInstr, S.fee, S.mmisDocs],
      },
      {
        h2: 'Staffing and credentialing: no state license, BACB certification everywhere',
        body: [
          'New Hampshire has no behavior analyst licensing law; the BACB’s licensure table does not list the state. The Medicaid rules therefore key ABA staffing to BACB credentials. He-W 589.04(ah) says ABA "shall be provided by" a BCBA "appropriately certified by the national Behavior Analyst Certification Board, and if supervising others, have a supervisory certification," or by a rehabilitation assistant, a board certified assistant behavior analyst, or a registered behavior technician "under the appropriate supervision of" that BCBA. It sets no numeric supervision ratio. ABA must also be "recommended by a licensed clinician who has experience in the diagnosis and treatment of autism spectrum disorder" who is a physician, psychologist, or a nurse practitioner or physician’s associate specializing in developmental medicine. In the schools program BCBAs are "performing-only" providers attached to an enrolled school provider.',
          'For network entry, plan on three separate applications: New Hampshire Medicaid provider enrollment through NH MMIS (Form 272A asks for the performing therapist’s Medicaid ID as well as the facility’s), then credentialing with each health plan. AmeriHealth Caritas New Hampshire states it notifies mental health providers of its credentialing decision within 30 calendar days of a clean and complete application (effective January 1, 2026); WellSense lists "applied behavioral analysts" among the practitioner types it credentials; NH Healthy Families enrolls new ABA providers through its Behavioral Health Provider Specialty Profile.',
        ],
        cites: [S.heW500, S.bacbLic, S.form272A, S.acnhPM, S.wsPM, S.nhhfTip],
      },
    ],
    collect: [
      { title: 'Which Medicaid card', desc: 'AmeriHealth Caritas NH, NH Healthy Families, WellSense, or fee-for-service. The plan owns authorization, credentialing and payment.' },
      { title: 'Written diagnosis', desc: 'Autism spectrum disorder (or PDD). Form 272A asks for it in words, not codes.' },
      { title: 'Physician’s order + PCP visit note', desc: 'FFS needs a signed physician’s order and a face-to-face PCP visit note from within the past year.' },
      { title: 'Other insurance', desc: 'Commercial coverage is billed first and its PA rules must be followed; Medicaid only picks up what is left.' },
      { title: 'Age', desc: 'EPSDT covers members under 21. No adult ABA benefit was found.' },
    ],
    sources: [S.heW500, S.mcm, S.form272A, S.saInstr, S.fee, S.mmisDocs, S.nonPrimary, S.acnhPM, S.wsPM, S.nhhfTip, S.bacbLic, S.cfr440, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'No numeric ratio is published. The only written NH Medicaid ABA staffing rule, He-W 589.04(ah), requires a BCBA with a BACB supervisory certification when supervising, and lets a rehabilitation assistant, BCaBA or RBT deliver ABA "under the appropriate supervision of" that BCBA. It appears in the Medicaid to Schools rule; no separate supervision rule for home or clinic ABA was found.',
        status: 'verified',
        cites: [S.heW500],
      },
      concurrentBilling: {
        value: 'Not addressed in any NH Medicaid source read. The fee schedule lists 97153 and 97155 as separate lines with separate SA flags but says nothing about billing them for the same clock time.',
        status: 'unverified',
        cites: [S.fee],
        verifyVia: 'NH Medicaid Provider Relations, (603) 223-4774 or (866) 291-1674, or the NH MMIS provider-specific billing manual (Volume II) for the ABA provider type.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'The 2026 fee schedule’s maximum-units column lists: 97151, 32; 97153, 32; 97154, 18; 97155, 24; 97156, 32; 0373T, 32; and 8 on the TM-modifier lines for 97151 and 97153. Authorized amounts beyond that are set per request on Form 272A (hours per week, total units, dates of service).',
        status: 'verified',
        cites: [S.fee, S.form272A],
      },
      noteSignature: {
        value: 'Form 272A must be signed by the ABA provider, certifying the services are "medically necessary and cost effective," and needs a signed physician’s order and letter of medical necessity. EPSDT providers must keep supporting records under He-W 520. No NH Medicaid source read says who signs each session note or by when.',
        status: 'unverified',
        cites: [S.form272A, S.saInstr, S.heW500],
        verifyVia: 'NH MMIS General Billing Manual Volume I (record-keeping) and the provider-specific Volume II, via nhmmis.nh.gov; or NH Medicaid Provider Relations, (866) 291-1674.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'School-based ABA is billed through the Medicaid to Schools program (He-W 589), where the school district is the enrolled provider and the BCBA is a "performing-only" provider. The fee schedule carries separate TM-modifier lines for 97151 and 97153 with no SA. No NH Medicaid source read restricts home, clinic or community settings.',
        status: 'verified',
        cites: [S.heW500, S.fee],
      },
      billAsProvider: {
        value: 'Form 272A asks for both the performing therapist’s Medicaid ID and the requesting facility’s Medicaid ID, so the rendering clinician is enrolled, not just the agency. In the schools program, BCBAs are "performing-only" providers that Medicaid "does not allow to independently enroll" and must be affiliated with an enrolled school provider.',
        status: 'verified',
        cites: [S.form272A, S.heW500],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. ABA is covered "through the EPSDT benefit," and EPSDT covers "all recipients under the age of 21" (He-W 546.02). No adult ABA benefit was found.',
        status: 'verified',
        cites: [S.heW500],
      },
      dxRecency: {
        value: 'No diagnosis recency rule was found. The dated requirement on the FFS path is the PCP: Form 272A needs a "Face to Face PCP visit note within one year."',
        status: 'verified',
        cites: [S.form272A],
      },
      diagnosingProviders: {
        value: 'No NH Medicaid source read names who may make the ASD diagnosis. He-W 589.04(aj) names who must recommend ABA: a licensed clinician experienced in diagnosing and treating ASD who is a physician, psychologist, or a nurse practitioner or physician’s associate specializing in developmental medicine.',
        status: 'unverified',
        cites: [S.heW500],
        verifyVia: 'DHHS Medicaid Medical Services (ServiceAuthorizationFFS@dhhs.nh.gov) for FFS members, or the member’s health plan for MCO members.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'No named diagnostic instrument appears in any NH Medicaid source read. He-W 546 covers developmental screening "with a standardized validated tool of the provider’s choice," but says nothing about the ASD diagnostic tool.',
        status: 'unverified',
        cites: [S.heW500],
        verifyVia: 'DHHS Medicaid Medical Services (ServiceAuthorizationFFS@dhhs.nh.gov) or the member’s health plan.',
        blocker: 'document',
      },
      referral: {
        value: 'Yes. ABA must be "recommended by a licensed clinician" (physician, psychologist, or developmental-medicine NP or PA) under He-W 589.04(aj), and the FFS Form 272A packet must include a signed physician’s order, a letter of medical necessity, and a PCP face-to-face visit note from within one year.',
        status: 'verified',
        cites: [S.heW500, S.form272A, S.saInstr],
      },
      telehealth: {
        value: 'Not addressed in any NH Medicaid ABA source read (Form 272A, the SA instructions, the fee schedule, He-W 546 or He-W 589).',
        status: 'unverified',
        cites: [S.form272A, S.fee],
        verifyVia: 'NH Medicaid Provider Relations, (866) 291-1674, or the member’s health plan: ask which ABA codes are payable by telehealth and with which POS code.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'The state publishes no ABA decision timeframe. The federal fee-for-service floor applies: since January 1, 2026 the state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" (extendable by up to 14 days) and an expedited one "in no case later than 72 hours." On the state side, an incomplete request gets a request for more information, not a denial, and is held 30 days; after approval the fiscal agent "has up to three business days to create and mail the SA." Managed-care members follow their plan’s clock (42 CFR 438.210(d): 7 calendar days for rating periods starting on or after January 1, 2026).',
        status: 'verified',
        cites: [S.cfr440, S.saInstr, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last. "All third party obligations shall be exhausted before medicaid is billed, in accordance with 42 CFR 433.139" (He-W 546.10), and Form 272A adds that "Providers are expected to follow all third party payors requirements for payment." Medicaid pays the lesser of the patient responsibility or the difference between the primary payment and the Medicaid allowed amount, and pays nothing if the patient responsibility is zero. Denials "due to incorrect billing, non-eligible provider, or lack of medical necessity must be resolved with the primary payer, not billed to NH Medicaid," so be in the commercial network and get its ABA authorization. A primary denial for a non-covered service can be billed to Medicaid with the EOB. Keep the Medicaid SA in place too: an SA is "not a guarantee of payment."',
        status: 'verified',
        cites: [S.heW500, S.form272A, S.nonPrimary, S.cfr433],
      },
    },
    faq: [
      { q: 'Does New Hampshire Medicaid cover ABA therapy?', a: 'Yes, for members under 21 through EPSDT. Most children are in one of three health plans (AmeriHealth Caritas NH, NH Healthy Families, WellSense), which authorize and pay for ABA; members not in a plan use DHHS’s fee-for-service Form 272A.' },
      { q: 'Is ABA carved out of New Hampshire’s Medicaid managed care?', a: 'No. ABA is inside the managed care contracts: the state’s FFS instructions send MCO members to their plan for authorization, and each plan runs its own ABA prior authorization.' },
      { q: 'What does New Hampshire Medicaid pay for ABA?', a: 'The 2026 fee-for-service schedule pays, per 15-minute unit: 97151, 97155 and 97156 $16.43; 97153 $17.79; 97154 $6.50; 0373T $35.58. The health plans pay contracted rates, which are not published.' },
      { q: 'Does a BCBA need a New Hampshire license?', a: 'No. New Hampshire does not license behavior analysts. Medicaid, the plans and the commercial mandate all rely on BACB certification (BCBA, BCaBA, RBT).' },
    ],
  },

  'amerihealth-caritas-new-hampshire': {
    slug: 'amerihealth-caritas-new-hampshire',
    family: 'amerihealth',
    cardDesc: 'NH Medicaid MCO that lists ABA under EPSDT; PA rules sit in a lookup tool, and its manual still prints a 14-day clock.',
    assessmentPA: {
      value: 'Not stated in the provider manual: its prior-authorization list does not name ABA, and code-level rules live in the online lookup tool',
      status: 'unverified',
      cites: [S.acnhPM, S.acnhPA],
      verifyVia: 'AmeriHealth Caritas NH Prior Authorization Lookup Tool (amerihealthcaritasnh.com → Provider → Prior Authorization) or the UM line, 1-833-472-2264: check 97151 and 97152.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not stated in the provider manual; check each treatment code in the lookup tool',
      status: 'unverified',
      cites: [S.acnhPM, S.acnhPA],
      verifyVia: 'AmeriHealth Caritas NH Prior Authorization Lookup Tool or UM, 1-833-472-2264 (fax 1-833-469-2264): check 97153–97158, 0362T and 0373T.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. The plan covers ABA as part of NH Medicaid’s EPSDT benefit and publishes nothing different, so the state rule applies: ABA "for individuals with" autism spectrum disorder or pervasive developmental disability (He-W 589.04(ag))',
      status: 'verified',
      cites: [S.acnhPM, S.heW500],
    },
    payer: 'AmeriHealth Caritas New Hampshire',
    state: 'NH', kind: 'medicaid-mco', parent: 'New Hampshire Medicaid (Medicaid Care Management)',
    pill: 'Payer Guide · AmeriHealth Caritas · New Hampshire',
    h1: 'AmeriHealth Caritas New Hampshire ABA coverage: the intake guide.',
    metaTitle: 'AmeriHealth Caritas New Hampshire ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How AmeriHealth Caritas New Hampshire covers ABA for NH Medicaid members: EPSDT coverage under 21, where the prior-authorization rules actually live, credentialing timelines, turnaround, and what intake should collect.',
    intro: [
      'AmeriHealth Caritas New Hampshire is one of the three Medicaid Care Management plans DHHS lists. Its June 2026 provider manual names "Early and Periodic Screening, Diagnostic and Treatment Services including Applied Behavioral Analysis Coverage" as a covered service, so ABA for its members goes through the plan, not the state. What the manual does not do is spell out ABA’s prior-authorization rules; those sit in the plan’s online lookup tool.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, as part of EPSDT for members under 21' },
      { label: 'Prior auth', value: 'Not listed in the manual; check codes in the online lookup tool' },
      { label: 'Submit via', value: 'NaviNet (Medical Authorizations) or UM 1-833-472-2264' },
      { label: 'Decision clock', value: 'Manual prints 14 calendar days; federal rule is 7 for rating periods from 1/1/2026' },
      { label: 'Credentialing', value: 'Decision within 30 calendar days for mental health providers (eff. 1/1/2026)' },
      { label: 'Licensure', value: 'None in NH; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'The manual’s covered-services list includes EPSDT "including Applied Behavioral Analysis Coverage," and for members under 21 it defines medical necessity by the EPSDT standard: any service in section 1905(a) of the Social Security Act "regardless of whether such service is covered under the Medicaid state plan, if that service is necessary to correct or ameliorate" a condition. The manual’s list of services requiring prior authorization names psychological and neuropsychological testing, partial hospitalization and intensive outpatient, but does not name ABA, and it points to the online Prior Authorization Lookup Tool for "the most up-to-date list." Treat the lookup tool as the source for each ABA code rather than reading the manual’s silence as "no PA." Requests go through NaviNet’s Medical Authorizations workflow, by phone to 1-833-472-2264, or by fax to 1-833-469-2264; non-participating providers need prior authorization for everything.',
        ],
        cites: [S.acnhPM, S.acnhPA],
      },
      {
        h2: 'Credentialing and network entry',
        body: [
          'AmeriHealth Caritas New Hampshire says applicants will be notified of the credentialing decision "within 30 calendar days for PCPs and mental health providers (eff. January 1, 2026), and within 45 calendar days for specialty providers, of receipt of a clean and complete application," and new contracts receive a welcome letter within 30 business days of execution. For new members already in treatment, the plan covers a condition "currently being treated or a prior authorization has been issued for 60 calendar days after the member’s effective date," which protects a family that switches into the plan mid-course. New Hampshire does not license behavior analysts, so expect credentialing to rest on BACB certification.',
        ],
        cites: [S.acnhPM, S.bacbLic],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm AmeriHealth Caritas NH (not FFS or another plan) on the date of service.' },
      { title: 'Diagnosis', desc: 'Autism spectrum disorder or PDD, the state’s covered ABA diagnoses.' },
      { title: 'Other insurance', desc: 'The plan is payer of last resort; bill the primary first and attach its EOB within 60 days.' },
      { title: 'Current authorizations', desc: 'New members get 60 days of continuity for ongoing treatment; capture any prior plan’s authorization.' },
    ],
    sources: [S.acnhPM, S.acnhPA, S.mcm, S.heW500, S.cfr438, S.cfr433, S.bacbLic],
    deliveryRules: {
      supervision: {
        value: 'The plan publishes no ABA supervision rule of its own. The state rule applies: He-W 589.04(ah) requires a BCBA with a BACB supervisory certification when supervising, and lets a BCaBA, RBT or rehabilitation assistant deliver ABA under that BCBA’s "appropriate supervision," with no numeric ratio.',
        status: 'verified',
        cites: [S.acnhPM, S.heW500],
      },
      concurrentBilling: {
        value: 'Not addressed in the provider manual, and the state publishes no rule either.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH Provider Services, 1-888-599-1479, or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The manual publishes no ABA unit or hour limit.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH UM, 1-833-472-2264: ask how ABA units are authorized and whether NH Medicaid’s fee-schedule unit maximums apply.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual publishes no ABA session-note signature rule.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH Provider Services, 1-888-599-1479, or the documentation standards in your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The manual publishes no ABA setting rule. At the state level, school-based ABA is billed by school districts under the Medicaid to Schools program (He-W 589).',
        status: 'unverified',
        cites: [S.acnhPM, S.heW500],
        verifyVia: 'AmeriHealth Caritas NH Provider Services, 1-888-599-1479: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The manual publishes no ABA-specific rendering or supervising-provider billing rule.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH Provider Network Account Executive: ask whether RBTs are billed under the supervising BCBA’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The plan covers ABA within EPSDT, which covers members under 21 (He-W 546.02).',
        status: 'verified',
        cites: [S.acnhPM, S.heW500],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH UM, 1-833-472-2264: ask how recent the diagnostic evaluation must be for an initial ABA request.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by the plan. The state rule names who must recommend ABA (physician, psychologist, or developmental-medicine NP or PA; He-W 589.04(aj)), not who may diagnose.',
        status: 'unverified',
        cites: [S.acnhPM, S.heW500],
        verifyVia: 'AmeriHealth Caritas NH UM, 1-833-472-2264.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH UM, 1-833-472-2264: ask which instruments it expects with the initial request.',
        blocker: 'per-case',
      },
      referral: {
        value: 'The plan publishes nothing different from the state, where ABA must be "recommended by a licensed clinician who has experience in the diagnosis and treatment of autism spectrum disorder" (physician, psychologist, or developmental-medicine NP or PA; He-W 589.04(aj)).',
        status: 'verified',
        cites: [S.acnhPM, S.heW500],
      },
      telehealth: {
        value: 'The manual publishes no ABA telehealth rule.',
        status: 'unverified',
        cites: [S.acnhPM],
        verifyVia: 'AmeriHealth Caritas NH Provider Services, 1-888-599-1479: ask which ABA codes are payable by telehealth and with which POS code.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The June 2026 manual still says standard decisions are due "no later than 14 calendar days after AmeriHealth Caritas New Hampshire receives the request" (plus up to 14 more), expedited within 72 hours, and urgent extensions of an ongoing course within 24 hours if asked at least 24 hours before it ends. Federal law has since tightened the standard limit: for rating periods starting on or after January 1, 2026, it "may not exceed 7 calendar days." The manual also says decisions not made on time "constitute a denial" that can be appealed.',
        status: 'plan-dependent',
        cites: [S.acnhPM, S.cfr438],
        verifyVia: 'AmeriHealth Caritas NH UM, 1-833-472-2264: confirm whether the 7-day federal standard applies to your request’s rating period.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: '"Medicaid HMOs, such as AmeriHealth Caritas New Hampshire, are always the payer of last resort." Bill the primary insurer first and submit its EOB "within 60 days of the date on the primary insurer’s EOB." The exception is preventive pediatric services (including EPSDT), which may be billed to the plan first while it pursues the other payer; the manual does not say whether it treats ABA as preventive.',
        status: 'verified',
        cites: [S.acnhPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas New Hampshire cover ABA?', a: 'Yes. Its provider manual lists EPSDT "including Applied Behavioral Analysis Coverage" for members under 21.' },
      { q: 'Does AmeriHealth Caritas NH require prior authorization for ABA?', a: 'The manual’s PA list doesn’t name ABA and points to the online lookup tool for the current list. Check each ABA code there before starting services.' },
      { q: 'How long does credentialing take?', a: 'The plan says it notifies mental health providers of the decision within 30 calendar days of a clean and complete application (effective January 1, 2026).' },
    ],
  },

  'nh-healthy-families': {
    slug: 'nh-healthy-families',
    family: 'centene',
    cardDesc: 'Centene’s NH Medicaid plan: ABA runs on the behavioral health platform (payer ID 68068) with PA via OTR form or portal.',
    assessmentPA: {
      value: 'Not stated for 97151 in the plan’s published ABA documents; check the code in the Pre-Auth Check tool',
      status: 'unverified',
      cites: [S.nhhfPP07, S.nhhfPreAuth],
      verifyVia: 'NH Healthy Families Medicaid Pre-Auth Check (enter 97151) or Utilization Management, 1-866-769-3085.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes. "ABA treatment must be billed under the qualified rendering provider and will continue to require prior authorization" (NH.PP.07); request it on the Outpatient Treatment Request form or the behavioral health portal',
      status: 'verified',
      cites: [S.nhhfPP07, S.nhhfTip],
    },
    dxRequired: {
      value: 'Yes. The plan publishes no ABA diagnosis rule of its own, so the state rule applies: ABA "for individuals with" autism spectrum disorder or pervasive developmental disability (He-W 589.04(ag))',
      status: 'verified',
      cites: [S.nhhfPP07, S.heW500],
    },
    payer: 'NH Healthy Families',
    state: 'NH', kind: 'medicaid-mco', parent: 'New Hampshire Medicaid (Medicaid Care Management)',
    pill: 'Payer Guide · NH Healthy Families · New Hampshire',
    h1: 'NH Healthy Families ABA coverage: the intake guide.',
    metaTitle: 'NH Healthy Families ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How NH Healthy Families (Centene) covers ABA for New Hampshire Medicaid members: the behavioral health billing platform and payer ID, prior authorization, the codes it pays, turnaround, and what intake should collect.',
    intro: [
      'NH Healthy Families is Centene’s New Hampshire Medicaid plan (underwritten by Granite State Health Plan, Inc.) and one of the three plans DHHS lists. Its ABA rules are spread across three documents: a 2019 payment policy that set the codes and kept prior authorization, a 2024 tip sheet that moved ABA onto the behavioral health platform, and the January 2026 provider manual that sets the decision clock.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for NH Medicaid members (EPSDT, under 21)' },
      { label: 'Treatment PA', value: 'Required (NH.PP.07); Outpatient Treatment Request form or BH portal' },
      { label: 'Claims', value: 'Behavioral health platform, payer ID 68068, for dates of service from 6/1/2024' },
      { label: 'Codes paid (NH.PP.07)', value: '97151 assessment (up to 32 units), 97153, 97155, 97156; no bundled H2019' },
      { label: 'Decision clock', value: '7 calendar days standard, 72 hours expedited' },
      { label: 'Licensure', value: 'None in NH; BACB certification governs' },
    ],
    sections: [
      {
        h2: 'Codes, prior authorization and the behavioral health platform',
        body: [
          'Payment policy NH.PP.07 (effective May 1, 2019) ended the old bundled H2019 rate and pays ABA in "three (3) distinct components of ABA therapy: direct treatment, supervision, and parent training": 97153 direct treatment, 97155 supervision of a technician, 97156 parent training, plus 97151 for the initial assessment or reassessment, whose maximum rose "from 8 units (2 hours) to 32 units (8) hours." The same policy says "ABA treatment must be billed under the qualified rendering provider and will continue to require prior authorization."',
          'Since June 1, 2024, ABA is adjudicated on the behavioral health platform: Medicaid ABA claims go to payer ID 68068 (Ambetter marketplace ABA to 68069). Prior authorization goes on the Outpatient Treatment Request form or through the behavioral health portal, and new ABA providers enroll with the Behavioral Health Provider Specialty Profile. Existing authorizations were converted without re-authorization.',
        ],
        cites: [S.nhhfPP07, S.nhhfTip],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Medicaid (not the Ambetter marketplace product, which uses a different payer ID).' },
      { title: 'Diagnosis', desc: 'Autism spectrum disorder or PDD.' },
      { title: 'Treatment plan for the OTR', desc: 'Direct treatment, supervision and parent-training hours, which map to 97153, 97155 and 97156.' },
      { title: 'Other insurance', desc: 'The plan is payer of last resort; tell it if the family won’t help identify other coverage.' },
    ],
    sources: [S.nhhfPP07, S.nhhfTip, S.nhhfPM, S.nhhfPreAuth, S.mcm, S.heW500, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'NH.PP.07 treats 97155 as "Supervision of a Technician" but sets no ratio, and the plan publishes no other supervision rule. The state rule applies: a BCBA with BACB supervisory certification supervises BCaBAs, RBTs and rehabilitation assistants, with no numeric ratio (He-W 589.04(ah)).',
        status: 'verified',
        cites: [S.nhhfPP07, S.heW500],
      },
      concurrentBilling: {
        value: 'Not addressed. NH.PP.07 lists 97153 and 97155 as separate components without saying whether they may be billed for the same clock time.',
        status: 'unverified',
        cites: [S.nhhfPP07],
        verifyVia: 'NH Healthy Families Provider Services, 1-866-769-3085, or your Provider Engagement Account Manager.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The only published unit limit is on the assessment: 97151 initial assessment or reassessment up to 32 units (8 hours), raised from 8 units in line with BACB guidance and CMS medically unlikely edits. Treatment units are set by the authorization.',
        status: 'verified',
        cites: [S.nhhfPP07],
      },
      noteSignature: {
        value: 'NH.PP.07 states "Documentation Requirements: Not Applicable," and the provider manual publishes no ABA session-note rule.',
        status: 'unverified',
        cites: [S.nhhfPP07, S.nhhfPM],
        verifyVia: 'NH Healthy Families Provider Services, 1-866-769-3085, or the documentation terms in your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The plan publishes no ABA setting rule. At the state level, school-based ABA is billed by school districts under the Medicaid to Schools program (He-W 589).',
        status: 'unverified',
        cites: [S.nhhfPP07, S.heW500],
        verifyVia: 'NH Healthy Families Provider Services, 1-866-769-3085: ask which place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: '"ABA treatment must be billed under the qualified rendering provider" (NH.PP.07). ABA claims go to the behavioral health platform, payer ID 68068 for Medicaid.',
        status: 'verified',
        cites: [S.nhhfPP07, S.nhhfTip],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The plan covers ABA within NH Medicaid’s EPSDT benefit, which covers members under 21 (He-W 546.02); it publishes no different age rule.',
        status: 'verified',
        cites: [S.heW500, S.nhhfPP07],
      },
      dxRecency: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.nhhfPP07],
        verifyVia: 'NH Healthy Families Utilization Management, 1-866-769-3085.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Not stated by the plan. The state rule names who must recommend ABA (physician, psychologist, or developmental-medicine NP or PA; He-W 589.04(aj)), not who may diagnose.',
        status: 'unverified',
        cites: [S.nhhfPP07, S.heW500],
        verifyVia: 'NH Healthy Families Utilization Management, 1-866-769-3085.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'Not stated by the plan or the state.',
        status: 'unverified',
        cites: [S.nhhfPP07],
        verifyVia: 'NH Healthy Families Utilization Management, 1-866-769-3085: ask which instruments it expects with the OTR.',
        blocker: 'per-case',
      },
      referral: {
        value: 'The plan publishes nothing different from the state, where ABA must be "recommended by a licensed clinician who has experience in the diagnosis and treatment of autism spectrum disorder" (physician, psychologist, or developmental-medicine NP or PA; He-W 589.04(aj)).',
        status: 'verified',
        cites: [S.nhhfPP07, S.heW500],
      },
      telehealth: {
        value: 'The plan’s ABA documents set no telehealth rule.',
        status: 'unverified',
        cites: [S.nhhfPP07, S.nhhfPM],
        verifyVia: 'NH Healthy Families Provider Services, 1-866-769-3085: ask which ABA codes are payable by telehealth and with which POS code.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Standard requests: "the decision and notification will be made no more than seven (7) calendar days from receipt of the request (unless an extension is requested)." Urgent pre-service requests: 72 hours. Supply clinical information promptly: "Failure to submit necessary clinical information within forty-eight (48) hours of the request can result in an administrative denial." Routine requests should go in "at least five calendar days before the scheduled service delivery date"; out-of-network requests need 10 calendar days.',
        status: 'verified',
        cites: [S.nhhfPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: '"NH Healthy Families is always the payer of last resort." Providers must make reasonable efforts to identify other coverage (individual, group, employer, self-funded or commercial) and tell the plan if the family won’t cooperate. If other coverage is found after services, the plan "will coordinate with the provider to pay any claims that may have been denied for payment due to third party liability."',
        status: 'verified',
        cites: [S.nhhfPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does NH Healthy Families cover ABA?', a: 'Yes, for New Hampshire Medicaid members. It pays 97151, 97153, 97155 and 97156 and requires prior authorization for ABA treatment.' },
      { q: 'Where do I send NH Healthy Families ABA claims?', a: 'To the behavioral health platform: payer ID 68068 for Medicaid, for dates of service on or after June 1, 2024.' },
      { q: 'How fast does NH Healthy Families decide an ABA authorization?', a: 'Within 7 calendar days for standard requests and 72 hours for urgent ones, per its January 2026 provider manual.' },
    ],
  },

  'wellsense-new-hampshire': {
    slug: 'wellsense-new-hampshire',
    cardDesc: 'NH Medicaid MCO with its own NH ABA form: 3-month initial, 6-month continued, units per period, BCBA signs.',
    assessmentPA: {
      value: 'Yes. The initial evaluation needs its own approval: "Request for initial evaluation," pages 1–3 of the NH ABA form plus the comprehensive diagnostic evaluation',
      status: 'verified',
      cites: [S.wsForm, S.wsMatrix],
    },
    treatmentPA: {
      value: 'Yes. "Prior authorization required" for NH Medicaid ABA (matrix eff. 7/1/2026); continued services requested for up to 6 months on pages 1–6 of the form, units per period',
      status: 'verified',
      cites: [S.wsMatrix, S.wsForm, S.wsPM],
    },
    dxRequired: {
      value: 'Yes. The initial request needs a "Comprehensive diagnostic evaluation completed by a neurologist, pediatrician, psychiatrist, psychologist, or other licensed physician experienced in autism"',
      status: 'verified',
      cites: [S.wsForm],
    },
    payer: 'WellSense Health Plan (New Hampshire)',
    state: 'NH', kind: 'medicaid-mco', parent: 'New Hampshire Medicaid (Medicaid Care Management)',
    pill: 'Payer Guide · WellSense · New Hampshire',
    h1: 'WellSense New Hampshire ABA coverage: the intake guide.',
    metaTitle: 'WellSense New Hampshire ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How WellSense Health Plan covers ABA for New Hampshire Medicaid members: its New Hampshire ABA prior authorization form, the codes and authorization periods, the 7-day decision clock, credentialing, and what intake should collect.',
    intro: [
      'WellSense Health Plan (listed by DHHS as Well Sense Health Plan) is one of New Hampshire’s three Medicaid Care Management plans. It is also the most explicit of the three about ABA: a New Hampshire-specific ABA prior authorization form, a behavioral health authorization matrix that marks ABA "Prior authorization required," and a provider manual that names "applied behavioral analysts" among the practitioners it credentials. The same company also sells NH Clarity marketplace plans; this guide covers the Medicaid product.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for NH Medicaid members (EPSDT, under 21)' },
      { label: 'Prior auth', value: 'Required: initial evaluation, then continued services' },
      { label: 'Periods', value: 'Initial up to 3 months; continued up to 6 months; request units per period, not per week' },
      { label: 'Medicaid codes on form', value: '97151, 97153, 97154, 97155, 97156' },
      { label: 'Submit via', value: 'HealthTrio provider portal (preferred) or fax 857-264-2670' },
      { label: 'Decision clock', value: '7 calendar days standard, 72 hours urgent' },
    ],
    sections: [
      {
        h2: 'The New Hampshire ABA form',
        body: [
          'WellSense’s "Applied Behavioral Analysis Prior Authorization Form, New Hampshire" (updated November 14, 2025) runs in two steps. A "Request for initial evaluation" is pages 1–3 plus the "Comprehensive diagnostic evaluation completed by a neurologist, pediatrician, psychiatrist, psychologist, or other licensed physician experienced in autism." A "Request for continued services" is pages 1–6: prior ABA providers, school and community services, parent participation, coordination with the PCP, behavioral health, school and occupational therapy providers, medications, and a goals table (or an attached treatment plan with the same content), signed by the treating BCBA. "For initial request, you may request services for 3-month timeframe. For continued services, you may request services for 6-month timeframe." Units are requested for the whole period: "Please do NOT request units per week."',
          'The Medicaid code list on the form is 97151, 97153, 97154, 97155 and 97156; 97152, 97157 and 97158 appear only in the NH Clarity and Medicare section. The form asks for the agency NPI and tax ID, the BCBA’s NPI and "BCBA license #" (New Hampshire issues none, so expect to give the BACB certification number and confirm with the plan). Submit through the HealthTrio provider portal, which WellSense says can return real-time decisions, or fax 857-264-2670.',
        ],
        cites: [S.wsForm, S.wsPA, S.wsMatrix],
      },
      {
        h2: 'Criteria, credentialing and the behavioral health vendor change',
        body: [
          'WellSense’s July 2026 behavioral health matrix says the plan uses InterQual criteria (the 2026 sets from June 1, 2026), ASAM or internal medical policies, and for ABA refers New Hampshire Medicaid members to its medical policy "for additional requirements." That policy sits on WellSense’s PolicyTech site, which did not load for automated retrieval. Behavioral health claims also moved in-house: for New Hampshire Medicaid, dates of service through November 30, 2025 went to Carelon and dates of service from December 1, 2025 go to WellSense (inpatient excepted), so older Carelon-era billing instructions no longer apply. On credentialing, the provider manual lists "applied behavioral analysts" among the practitioners WellSense credentials when they are "permitted to practice independently under New Hampshire law."',
        ],
        cites: [S.wsMatrix, S.wsPM, S.wsBH],
      },
    ],
    collect: [
      { title: 'Comprehensive diagnostic evaluation', desc: 'From a neurologist, pediatrician, psychiatrist, psychologist or other licensed physician experienced in autism. Attach it to the initial request.' },
      { title: 'Prior and current services', desc: 'Other ABA providers, school and community services, OT/PT/speech, and medications all go on the continued-services pages.' },
      { title: 'Care-coordination contacts', desc: 'PCP, behavioral health provider and school contacts with dates of communication.' },
      { title: 'Other insurance', desc: 'WellSense pays after the primary; you have 120 days from the primary’s determination to bill it.' },
    ],
    sources: [S.wsForm, S.wsMatrix, S.wsPM, S.wsPA, S.wsBH, S.mcm, S.heW500, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'WellSense publishes no New Hampshire ABA supervision ratio; the form only requires naming the BCBA "who will perform/supervise services." The state rule applies: a BCBA with BACB supervisory certification supervises BCaBAs, RBTs and rehabilitation assistants, with no numeric ratio (He-W 589.04(ah)).',
        status: 'verified',
        cites: [S.wsForm, S.heW500],
      },
      concurrentBilling: {
        value: 'Not addressed in the NH form, the matrix or the provider manual.',
        status: 'unverified',
        cites: [S.wsForm, S.wsPM],
        verifyVia: 'WellSense ABA medical policy on PolicyTech (bostonmedicalcenter.policytech.com, public site 61882) or the Prior Authorization Department, 877-957-1300.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No daily or weekly cap is published. Units are authorized per period: up to 3 months on an initial request and 6 months on continued services, and the form says "Please do NOT request units per week. Instead request units per authorization period."',
        status: 'verified',
        cites: [S.wsForm],
      },
      noteSignature: {
        value: 'The PA form must be signed by the treating BCBA. WellSense publishes no rule on who signs individual session notes.',
        status: 'unverified',
        cites: [S.wsForm, S.wsPM],
        verifyVia: 'WellSense ABA medical policy on PolicyTech or Provider Services, 877-957-1300.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not addressed in the NH form or manual; the form does ask whether the child receives "special services at school or in the community." At the state level, school-based ABA is billed by school districts under He-W 589.',
        status: 'unverified',
        cites: [S.wsForm, S.heW500],
        verifyVia: 'WellSense ABA medical policy on PolicyTech or Provider Services, 877-957-1300.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'The form captures both the agency NPI and the BCBA’s NPI and names the BCBA "who will perform/supervise services," but WellSense publishes no rule on whose NPI a technician’s claim goes out under.',
        status: 'unverified',
        cites: [S.wsForm],
        verifyVia: 'WellSense Provider Services, 877-957-1300, or your provider agreement.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 for NH Medicaid ABA: the benefit is EPSDT, which covers members under 21 (He-W 546.02). WellSense’s NH documents set no different ABA age rule.',
        status: 'verified',
        cites: [S.heW500, S.wsForm],
      },
      dxRecency: {
        value: 'The form requires a comprehensive diagnostic evaluation but states no maximum age for it.',
        status: 'unverified',
        cites: [S.wsForm],
        verifyVia: 'WellSense ABA medical policy on PolicyTech or the Prior Authorization Department, 877-957-1300.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'A neurologist, pediatrician, psychiatrist, psychologist, or other licensed physician experienced in autism must complete the comprehensive diagnostic evaluation.',
        status: 'verified',
        cites: [S.wsForm],
      },
      diagnosticTools: {
        value: 'The form names no instrument; it asks for a comprehensive diagnostic evaluation and, for continued services, a goals table with current level of functioning.',
        status: 'unverified',
        cites: [S.wsForm],
        verifyVia: 'WellSense ABA medical policy on PolicyTech or the Prior Authorization Department, 877-957-1300.',
        blocker: 'document',
      },
      referral: {
        value: 'No separate physician order is asked for on the form; the gate is the comprehensive diagnostic evaluation from a listed physician or psychologist. At the state level, ABA must be "recommended by a licensed clinician" experienced in ASD (He-W 589.04(aj)).',
        status: 'verified',
        cites: [S.wsForm, S.heW500],
      },
      telehealth: {
        value: 'WellSense covers telemedicine generally, with modifiers listed in its telemedicine policy, but publishes no ABA-specific telehealth rule.',
        status: 'unverified',
        cites: [S.wsPM],
        verifyVia: 'WellSense telemedicine policy on wellsense.org and the ABA medical policy on PolicyTech: check which ABA codes and modifiers apply.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'Medicaid standard pre-service requests: "Written notification to the member and provider within 7 calendar days of the receipt of request." Urgent or expedited pre-service and concurrent requests: 72 hours. The clock runs from receipt, not from a complete file, so send the full packet the first time.',
        status: 'verified',
        cites: [S.wsPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'When other coverage is primary, providers must "Pursue payment from all other liable parties prior to submitting claims to WellSense," then bill any secondary balance with the other carrier’s payment or denial details for each line. Medicaid claims must reach WellSense within 120 days of the primary payer’s determination (90 days for NH Clarity).',
        status: 'verified',
        cites: [S.wsPM, S.cfr433],
      },
    },
    faq: [
      { q: 'Does WellSense require prior authorization for ABA in New Hampshire?', a: 'Yes, both for the initial evaluation and for continued services, on its New Hampshire ABA form or through the HealthTrio portal.' },
      { q: 'How long is a WellSense NH ABA authorization?', a: 'Up to 3 months for an initial request and 6 months for continued services, with units requested for the whole period rather than per week.' },
      { q: 'Who can diagnose for a WellSense ABA request?', a: 'A neurologist, pediatrician, psychiatrist, psychologist, or other licensed physician experienced in autism, via a comprehensive diagnostic evaluation.' },
    ],
  },

  'anthem-bcbs-new-hampshire': {
    slug: 'anthem-bcbs-new-hampshire',
    family: 'anthem',
    cardDesc: 'New Hampshire’s Blue plan: every ABA code is on the NH precert list, reviewed by Anthem BH on MCG criteria.',
    assessmentPA: {
      value: 'Yes: 97151 and 97152 are on the New Hampshire precertification list (updated 7/1/26), reviewed by Anthem on MCG criteria; Anthem notes requirements "vary by product and plan"',
      status: 'verified',
      cites: [S.anthemNHPA],
    },
    treatmentPA: {
      value: 'Yes: 97153–97158, 0362T and 0373T are all on the NH precertification list; call Behavioral Health at 800-755-0851',
      status: 'verified',
      cites: [S.anthemNHPA],
    },
    dxRequired: {
      value: 'Yes for the mandate (autism is the covered condition under RSA 417-E); Anthem’s own diagnosis criteria sit in licensed MCG guidelines',
      status: 'plan-dependent',
      cites: [S.rsa417E, S.anthemNHPA],
      verifyVia: 'Anthem Behavioral Health, 800-755-0851: ask which MCG guideline applies and what diagnostic documentation it requires.',
      blocker: 'licensed',
    },
    payer: 'Anthem Blue Cross and Blue Shield New Hampshire',
    state: 'NH', kind: 'commercial',
    pill: 'Payer Guide · Anthem BCBS · New Hampshire',
    h1: 'Anthem BCBS New Hampshire ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS New Hampshire ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in New Hampshire: the NH precertification list, MCG criteria, billing rules from Anthem’s ABA resource guide, New Hampshire’s RSA 417-E autism mandate (no current caps), and credentialing without a state license.',
    intro: [
      'In New Hampshire, Anthem Blue Cross and Blue Shield is Anthem Health Plans of New Hampshire, Inc., with HMO plans underwritten by Matthew Thornton Health Plan, Inc. Two Anthem documents govern ABA here: the New Hampshire precertification list, which puts every ABA code under Anthem’s own behavioral health review, and the multi-state ABA Provider Resource Guide, which names New Hampshire among its states and sets the coding, supervision and documentation rules.',
      'Under both sits New Hampshire’s autism mandate for fully insured plans. Establish funding type on every benefits check: self-funded employer plans administered by Anthem answer to their own plan documents and ERISA, not RSA 417-E.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, on fully insured plans under the NH mandate; self-funded plans per plan document' },
      { label: 'Who reviews ABA', value: 'Anthem Behavioral Health, 800-755-0851, on MCG criteria' },
      { label: 'State mandate', value: 'RSA 417-E:1, III(h) + RSA 417-E:2 (HB 569, Laws 2010 ch. 363)' },
      { label: 'Mandate age', value: 'No age limit in the current statute (the 2010 law let plans cap ABA by age band, 0–12 and 13–21; that paragraph is gone)' },
      { label: 'Mandate caps', value: 'None in the current text; the 2010 caps ($36,000/yr ages 0–12, $27,000/yr ages 13–21) no longer appear in RSA 417-E:2' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: NH does not license behavior analysts; the mandate requires BACB certification or BACB-certificant supervision' },
    ],
    sections: [
      {
        h2: 'Precertification in New Hampshire',
        body: [
          'Anthem’s New Hampshire Precertification/Prior Authorization List (updated July 1, 2026) lists 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T. For each, the reviewer is "Anthem" (not Carelon, which handles therapy and imaging on the same list), the criteria are "MCG Guidelines," and the instruction is "Contact Behavioral Health at 800-755-0851," with the caveat that requirements "vary by product and plan. Contact the number on the member’s ID card to verify requirements and eligibility." On HMO plans the rendering provider must request precertification; on PPO plans the network provider is responsible, while a BlueCard or non-participating provider leaves that to the member.',
        ],
        cites: [S.anthemNHPA],
      },
      {
        h2: 'Billing and documentation rules from the ABA resource guide',
        body: [
          'Anthem’s ABA Provider Resource Guide (June 2025) covers New Hampshire. Approved providers include psychiatrists, psychologists, LCSWs, LPCs and LMFTs with ABA training, BCBAs and BCBA-Ds, "providers practicing under the direction and supervision of the BCBA," and other state-recognized mental health providers. A QHP billing 97155 "can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Technician services "must show the supervising BCBA or other QHP in box 31." Record start and stop times, sign within 30 days of the date of service, and update the treatment plan at least every 6 months. Anthem applies NCCI medically unlikely edits to ABA codes and lists POS 12 (home), 11 (office), 99 (community), 03 (school), and 10 and 02 (telehealth).',
        ],
        cites: [S.anthemRG],
      },
      {
        h2: 'The New Hampshire mandate: what it guarantees',
        body: [NH_MANDATE_BODY],
        cites: [S.rsa417E, S.hb569],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [NH_LICENSURE_BODY],
        cites: [S.bacbLic, S.rsa420J, S.rsa417E, S.fee, S.wsForm],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (RSA 417-E applies) vs. self-funded ERISA (plan document governs). Ask for the employer and check the card.' },
      { title: 'HMO or PPO', desc: 'On HMO plans the rendering provider must obtain precertification; on PPO plans the network provider does.' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis, diagnosing clinician and date. Anthem’s MCG criteria decide what else is needed.' },
      { title: 'Signed treatment plan', desc: 'RSA 417-E:2 lets the insurer require one signed by the PCP or a listed specialist, with frequency and duration.' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.anthemNHPA, S.anthemRG, S.rsa417E, S.hb569, S.rsa420J, S.ins1904, S.bacbLic, S.erisa, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Anthem publishes no numeric supervision ratio. It recognizes "providers practicing under the direction and supervision of the BCBA," and allows 97153 alongside 97155 only when the QHP and technician are both face-to-face with the patient and the QHP is directing the technician. The NH mandate itself requires ABA to be provided by, or "under the supervision of," a BACB certificant.',
        status: 'verified',
        cites: [S.anthemRG, S.rsa417E],
      },
      concurrentBilling: {
        value: '"A physician or other QHP billing for 97155 can only add code 97153 if both the technician and QHP are face-to-face with the patient at the same time and the QHP is directing the technician." Supervised services billed with a QHP procedure fall under Anthem’s Incident To reimbursement policy.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      dailyLimits: {
        value: 'No Anthem-specific daily cap is published. "ABA codes may have associated MUE limits," and Anthem administers NCCI edits, updated as CMS publishes new medically unlikely edits. Authorized hours are set per precertification.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      noteSignature: {
        value: 'Each entry must identify its author (signature, electronic identifier or initials, with credentials). Documentation is expected "at the time of service, or shortly thereafter and should not exceed 30 days," with a "Signature date within 30 days of the date of service." Start and stop times are required for timed codes.',
        status: 'verified',
        cites: [S.anthemRG],
      },
      placeOfService: {
        value: 'POS codes Anthem lists for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth in the home, 02 telehealth outside the home, all "Subject to the member’s coverage and reviews by the plan." RSA 417-E:2 does not change any obligation of a school district to provide IEP services.',
        status: 'verified',
        cites: [S.anthemRG, S.rsa417E],
      },
      billAsProvider: {
        value: '"ABA therapy performed by therapy assistants/behavioral technicians/paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS claim form."',
        status: 'verified',
        cites: [S.anthemRG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Anthem publishes no ABA age limit in its New Hampshire documents.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.anthemNHPA, S.rsa417E, S.hb569],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Not published in Anthem’s NH documents; the review uses MCG guidelines, which are licensed and not public.',
        status: 'unverified',
        cites: [S.anthemNHPA],
        verifyVia: 'Anthem Behavioral Health, 800-755-0851: ask what diagnostic documentation and dates MCG review expects.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value: 'Not published in Anthem’s NH documents; set by the licensed MCG guideline and the plan.',
        status: 'unverified',
        cites: [S.anthemNHPA, S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-755-0851.',
        blocker: 'licensed',
      },
      diagnosticTools: {
        value: 'The resource guide stresses "standardized assessments and current clinical information" for tracking progress but names no diagnostic instrument; the MCG criteria are licensed.',
        status: 'unverified',
        cites: [S.anthemRG],
        verifyVia: 'Anthem Behavioral Health, 800-755-0851.',
        blocker: 'licensed',
      },
      referral: {
        value: 'Anthem’s NH documents require precertification from the rendering provider (HMO) or network provider (PPO), not a physician referral.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.anthemNHPA, S.rsa417E],
      },
      telehealth: {
        value: 'Anthem lists POS 10 (telehealth in the member’s home) and 02 (telehealth elsewhere) for ABA, subject to coverage, and refers to its Virtual Visits reimbursement policy, where "Allowed codes may vary."',
        status: 'plan-dependent',
        cites: [S.anthemRG],
        verifyVia: 'Anthem Virtual Visits reimbursement policy and the member’s benefits: confirm which ABA codes are allowed by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Hampshire plans fall under RSA 420-J:6. For requests sent through the carrier’s electronic prior-authorization process, a non-urgent decision is due "within 7 calendar days of obtaining all information necessary to make the determination"; for paper or fax requests the limit is 14 calendar days; urgent requests are decided within 72 hours. Any request for more information must come within 7 calendar days of the request date, and information supplied in a peer-to-peer counts. A missed deadline means the request "shall be considered approved." Once approved, the carrier may not revoke or limit it "if care is provided within 60 business days" of the approval, and a peer-to-peer must be offered within 2 business days of a request. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. Anthem publishes no New Hampshire-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.rsa420J, S.erisa],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Hampshire-regulated) or self-funded (ERISA), whether you are submitting electronically, and what reauthorization lead time Anthem expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two group plans, New Hampshire follows the birthday rule: when parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (Ins 1904.05(d)(2)); for separated parents a court decree controls, and otherwise the custodial parent’s plan pays first. That rule binds group plans regulated by the state; a self-funded plan sets its own order. When both plans require precertification, RSA 420-J:3-b says the member "shall obtain pre-certification from the primary plan," and the secondary plan "shall not refuse payment for such services solely on the basis that the services were not pre-certified by the secondary plan" (it can still apply its own criteria). If the child also has NH Medicaid, Anthem pays first: Medicaid is payer of last resort (42 CFR 433.139), and NH Medicaid will not pay a balance the primary denied for "incorrect billing, non-eligible provider, or lack of medical necessity." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [S.ins1904, S.rsa420J, S.cfr433, S.nonPrimary, S.tricare, S.champva],
        verifyVia:
          'Ask Anthem at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem require prior authorization for ABA in New Hampshire?', a: 'Yes. All ABA codes (97151–97158, 0362T, 0373T) are on Anthem’s New Hampshire precertification list, reviewed by Anthem Behavioral Health (800-755-0851) on MCG criteria, though requirements can vary by product.' },
      { q: 'Does New Hampshire cap ABA benefits?', a: 'Not in the current law. The 2010 statute allowed caps of $36,000 a year (ages 0–12) and $27,000 (13–21), but that paragraph no longer appears in RSA 417-E:2. Self-funded plans follow their own documents.' },
      { q: 'Can a BCBA and RBT both bill for the same time with Anthem?', a: 'Yes, 97155 with 97153, but only when both are face-to-face with the patient at the same time and the BCBA is directing the technician.' },
    ],
  },

  'harvard-pilgrim-new-hampshire': {
    slug: 'harvard-pilgrim-new-hampshire',
    family: 'point32',
    cardDesc: 'Point32Health’s NH commercial plan: PA on all ABA codes via InterQual (MNG eff. 7/1/2026); H0031/H0032 dropped.',
    assessmentPA: {
      value: 'Yes: 97151 and 97152 require prior authorization for Harvard Pilgrim commercial products (MNG effective July 1, 2026)',
      status: 'verified',
      cites: [S.hpMNG],
    },
    treatmentPA: {
      value: 'Yes: 97153–97158, 0362T and 0373T require prior authorization; request via HPHConnect’s InterQual questionnaire or fax 800-232-0816',
      status: 'verified',
      cites: [S.hpMNG, S.hpNews],
    },
    dxRequired: {
      value: 'Yes: a definitive ASD diagnosis, ICD-10 F84.0, F84.3, F84.5, F84.8 or F84.9 (Down syndrome is a Massachusetts-only addition)',
      status: 'verified',
      cites: [S.hpMNG],
    },
    payer: 'Harvard Pilgrim Health Care (New Hampshire)',
    state: 'NH', kind: 'commercial',
    pill: 'Payer Guide · Harvard Pilgrim · New Hampshire',
    h1: 'Harvard Pilgrim ABA coverage in New Hampshire: the intake guide.',
    metaTitle: 'Harvard Pilgrim ABA Coverage in New Hampshire: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Harvard Pilgrim Health Care (Point32Health) covers ABA in New Hampshire: the July 2026 InterQual-based medical necessity guideline, prior authorization on every ABA code, what it won’t pay for, New Hampshire’s RSA 417-E mandate, and credentialing without a state license.',
    intro: [
      'Harvard Pilgrim Health Care, part of Point32Health, sells commercial plans in New Hampshire. Since January 1, 2026, one medical necessity guideline covers ABA for Harvard Pilgrim and Tufts Health Plan commercial products in Massachusetts, Maine, New Hampshire and Rhode Island. It relies on InterQual criteria, which are licensed, so the decision logic itself is not public. What is public: which codes need authorization, which diagnoses qualify, how to submit, and what Point32Health will not pay for.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for a definitive ASD diagnosis, per the Point32Health commercial MNG' },
      { label: 'Criteria', value: 'InterQual (licensed), via HPHConnect questionnaire; MNG effective 7/1/2026' },
      { label: 'State mandate', value: 'RSA 417-E:1, III(h) + RSA 417-E:2 (HB 569, Laws 2010 ch. 363)' },
      { label: 'Mandate age', value: 'No age limit in the current statute (the 2010 law let plans cap ABA by age band, 0–12 and 13–21; that paragraph is gone)' },
      { label: 'Mandate caps', value: 'None in the current text; the 2010 caps ($36,000/yr ages 0–12, $27,000/yr ages 13–21) no longer appear in RSA 417-E:2' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: NH does not license behavior analysts; the mandate requires BACB certification or BACB-certificant supervision' },
    ],
    sections: [
      {
        h2: 'The Point32Health guideline, applied in New Hampshire',
        body: [
          'Point32Health’s October 2025 notice replaced its ABA guideline for commercial plans effective January 1, 2026, and said the new version "will apply for Rhode Island Commercial products in addition to those in MA, ME, and NH." The current edition, "Applied Behavioral Analysis (ABA) for Commercial Products and Tufts Health Direct" (effective July 1, 2026), marks prior authorization "Yes" and lists 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T for Harvard Pilgrim commercial products. Harvard Pilgrim requests go through the automated InterQual questionnaire on HPHConnect, with clinical notes uploaded there or faxed to 800-232-0816; outside Massachusetts, use the "Autism Spectrum Disorder Services Prior Authorization Request Form." Two 2026 changes matter for billing: "For Harvard Pilgrim Commercial plans, HCPCS codes H0031 and H0032 will no longer be covered," and for members aged 13–20 the plan "will not use the age-related ‘Limited Evidence’. Age alone will not initiate secondary review" (effective March 1, 2026). Down syndrome coverage without an ASD diagnosis applies to Massachusetts products only.',
          'The payment policy (revised May 2026) lists what Point32Health does not pay for: recreational therapy, respite, "Services provided in a school setting that are covered by the educational system’s special education resources as part of the individual education plan (IEP)," escorting a member to another therapy, "Services provided by an immediate family member," vocational rehabilitation, and unproven treatments such as facilitated communication. For self-insured groups, "coverage may vary depending on the terms of the benefit document."',
        ],
        cites: [S.hpNews, S.hpMNG, S.hpPP],
      },
      {
        h2: 'The New Hampshire mandate: what it guarantees',
        body: [NH_MANDATE_BODY],
        cites: [S.rsa417E, S.hb569],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [NH_LICENSURE_BODY],
        cites: [S.bacbLic, S.rsa420J, S.rsa417E, S.fee, S.wsForm],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (RSA 417-E applies) vs. self-insured (benefit document governs).' },
      { title: 'ICD-10 code', desc: 'F84.0, F84.3, F84.5, F84.8 or F84.9. F84.2 (Rett) is not on the list.' },
      { title: 'HPHConnect access', desc: 'The InterQual questionnaire runs there; register before the first request.' },
      { title: 'School services', desc: 'Services covered by the school’s special education resources under an IEP are not paid.' },
      { title: 'Other coverage', desc: 'Second parent’s plan (birthday rule), Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.hpMNG, S.hpPP, S.hpNews, S.rsa417E, S.hb569, S.rsa420J, S.ins1904, S.bacbLic, S.erisa, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Point32Health requires InterQual’s "Applied Behavior Analysis (ABA) Program-Applied Behavior Analysis Supervision" subset for supervision requests, but the criteria inside it are licensed and not published.',
        status: 'unverified',
        cites: [S.hpMNG],
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
        value: 'No ABA-specific cap is in the MNG or ABA payment policy, which point to a separate Maximum Units payment policy.',
        status: 'unverified',
        cites: [S.hpPP],
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
        value: 'Not paid: "Services provided in a school setting that are covered by the educational system’s special education resources as part of the individual education plan (IEP)," and services "primarily educational in nature." Point32Health’s InterQual subsets include consultation with school personnel. No other setting restriction is published.',
        status: 'verified',
        cites: [S.hpPP, S.hpMNG],
      },
      billAsProvider: {
        value: 'Point32Health pays ABA "rendered by appropriately credentialed providers" at contracted rates and does not pay "Services provided by an immediate family member." It publishes no rule on whose NPI a technician’s service is billed under.',
        status: 'unverified',
        cites: [S.hpPP],
        verifyVia: 'Harvard Pilgrim commercial Provider Service Center, 800-708-4414, or your provider agreement.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The MNG sets no age cap, and since March 1, 2026 age alone does not trigger secondary review for members 13–20.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.hpMNG, S.rsa417E, S.hb569],
        verifyVia: 'Live benefits verification: establish fully insured vs. self-insured, then the benefit document’s age terms.',
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
        value: 'Not published; the MNG requires "a definitive diagnosis" of ASD but does not name who may make it.',
        status: 'unverified',
        cites: [S.hpMNG],
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
        cites: [S.hpMNG, S.rsa417E],
        verifyVia: 'Harvard Pilgrim Member Services, 888-333-4742, or Provider Service Center, 800-708-4414: ask whether the member’s product needs a PCP referral for ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Not addressed in the ABA MNG or payment policy.',
        status: 'unverified',
        cites: [S.hpMNG, S.hpPP],
        verifyVia: 'Point32Health telehealth payment policy (point32health.org, Payment policies) or the Provider Service Center, 800-708-4414.',
        blocker: 'document',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Hampshire plans fall under RSA 420-J:6. For requests sent through the carrier’s electronic prior-authorization process, a non-urgent decision is due "within 7 calendar days of obtaining all information necessary to make the determination"; for paper or fax requests the limit is 14 calendar days; urgent requests are decided within 72 hours. Any request for more information must come within 7 calendar days of the request date, and information supplied in a peer-to-peer counts. A missed deadline means the request "shall be considered approved." Once approved, the carrier may not revoke or limit it "if care is provided within 60 business days" of the approval, and a peer-to-peer must be offered within 2 business days of a request. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. Harvard Pilgrim publishes no New Hampshire-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.rsa420J, S.erisa],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Hampshire-regulated) or self-funded (ERISA), whether you are submitting electronically, and what reauthorization lead time Harvard Pilgrim expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two group plans, New Hampshire follows the birthday rule: when parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (Ins 1904.05(d)(2)); for separated parents a court decree controls, and otherwise the custodial parent’s plan pays first. That rule binds group plans regulated by the state; a self-funded plan sets its own order. When both plans require precertification, RSA 420-J:3-b says the member "shall obtain pre-certification from the primary plan," and the secondary plan "shall not refuse payment for such services solely on the basis that the services were not pre-certified by the secondary plan" (it can still apply its own criteria). If the child also has NH Medicaid, Harvard Pilgrim pays first: Medicaid is payer of last resort (42 CFR 433.139), and NH Medicaid will not pay a balance the primary denied for "incorrect billing, non-eligible provider, or lack of medical necessity." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [S.ins1904, S.rsa420J, S.cfr433, S.nonPrimary, S.tricare, S.champva],
        verifyVia:
          'Ask Harvard Pilgrim at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Harvard Pilgrim cover ABA in New Hampshire?', a: 'Yes, for members with a definitive ASD diagnosis, under Point32Health’s commercial ABA guideline (effective July 1, 2026), with prior authorization on every ABA code.' },
      { q: 'What criteria does Harvard Pilgrim use for ABA?', a: 'InterQual, through an automated questionnaire on HPHConnect. The criteria are licensed; registered providers can view them in HPHConnect.' },
      { q: 'Does Harvard Pilgrim pay H0031 or H0032 for ABA?', a: 'No. Since January 1, 2026 those codes are no longer covered for Harvard Pilgrim commercial plans.' },
    ],
  },

  'aetna-new-hampshire': {
    slug: 'aetna-new-hampshire',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + New Hampshire’s RSA 417-E mandate layer.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024); CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [S.aetnaPrecert, S.aetnaCPB],
    },
    treatmentPA: {
      value: 'Required: precertification on form GR-69017-4 via Availity or phone; the reauthorization interval is set by the plan',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask whether the group carries ABA precertification and what reauthorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: ASD only (F84.0, F84.3–F84.9); ABA for other diagnoses is considered experimental',
      status: 'verified',
      cites: [S.aetnaCPB, S.aetnaGuide],
    },
    payer: 'Aetna in New Hampshire',
    state: 'NH', kind: 'commercial',
    pill: 'Payer Guide · Aetna · New Hampshire',
    h1: 'Aetna ABA coverage in New Hampshire: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in New Hampshire: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for New Hampshire families: the national clinical policy, precertification, New Hampshire’s RSA 417-E autism mandate (no current age or dollar caps), credentialing without a state license, and what intake should verify.',
    intro: [
      'For an intake team in New Hampshire, an Aetna card means three layers: Aetna’s national clinical policy, New Hampshire’s autism mandate in RSA 417-E, and the plan’s funding type, which decides whether the mandate applies at all. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'RSA 417-E:1, III(h) + RSA 417-E:2 (HB 569, Laws 2010 ch. 363)' },
      { label: 'Mandate age', value: 'No age limit in the current statute (the 2010 law let plans cap ABA by age band, 0–12 and 13–21; that paragraph is gone)' },
      { label: 'Mandate caps', value: 'None in the current text; the 2010 caps ($36,000/yr ages 0–12, $27,000/yr ages 13–21) no longer appear in RSA 417-E:2' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: NH does not license behavior analysts; the mandate requires BACB certification or BACB-certificant supervision' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Hampshire',
        body: [
          'Aetna covers ABA for autism spectrum disorder under CPB 0554 (with CPB 0648 for ASD) and considers ABA experimental for other diagnoses. Its behavioral health precertification list names all ten ABA codes, 97151 through 97158, 0362T and 0373T, and ABA precertification runs on form GR-69017-4 through Availity or the number on the card. We checked Aetna’s ABA medical necessity guide: its state exhibits do not include New Hampshire, so the national criteria apply unchanged. Aetna runs no New Hampshire Medicaid plan.',
        ],
        cites: [S.aetnaCPB, S.aetnaCPB648, S.aetnaPrecert, S.aetnaGuide],
      },
      {
        h2: 'The New Hampshire mandate: what it guarantees',
        body: [NH_MANDATE_BODY],
        cites: [S.rsa417E, S.hb569],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [NH_LICENSURE_BODY],
        cites: [S.bacbLic, S.rsa420J, S.rsa417E, S.fee, S.wsForm],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (RSA 417-E applies) vs. self-funded ERISA (plan document governs). Ask for the employer and check the card.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date. Aetna’s policy is ASD-only.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (for example Vineland-3).' },
      { title: 'Signed treatment plan', desc: 'RSA 417-E:2 lets the insurer require one signed by the PCP or a listed specialist.' },
    ],
    sources: [S.aetnaCPB, S.aetnaCPB648, S.aetnaGuide, S.aetnaPrecert, S.aetnaBHPM, S.rsa417E, S.hb569, S.rsa420J, S.ins1904, S.bacbLic, S.erisa],
    deliveryRules: {
      supervision: {
        value: 'Services must be provided directly or billed by licensed behavior analysts (in states with licensure laws), board-certified behavior analysts, or licensed psychologists where ABA is within scope, unless mandates, plan documents or contracts say otherwise; where others deliver services, there must be supervision "in line with practice standards." Aetna publishes no numeric ratio. The NH mandate requires ABA to be provided by, or supervised by, a BACB certificant.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rsa417E],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA policies (CPB 0554, CPB 0648, the medical necessity guide).',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap is published. Hours come from the guide’s severity assessment, with typical intensities of 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps). Progress is re-evaluated every six months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content requirements but not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide, S.aetnaBHPM],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual section on documentation.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-neutral in Aetna’s guide; inpatient, residential or partial hospitalization settings use that level of care’s criteria. Aetna expects coordination with the school and is not required to provide services under an IEP. RSA 417-E:2 likewise leaves school districts’ IEP obligations untouched.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rsa417E],
      },
      billAsProvider: {
        value: 'Services must be provided directly or billed by the appropriately licensed or certified provider (licensed behavior analyst where a state licenses them, BCBA, or licensed psychologist where in scope), unless mandates, plan documents or contracts say otherwise. New Hampshire has no behavior-analyst license, so the BCBA is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.bacbLic],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no age cap; the guide describes typical, not limiting, age ranges.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.rsa417E, S.hb569],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment shown on a standardized scale administered in the past 12 months (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis by an appropriate provider: a licensed psychologist or psychiatrist, a physician, or another professional qualified to diagnose within scope. CPB 0648 lists the professionals appropriate to an ASD evaluation, from developmental pediatricians and neurologists to psychologists and speech-language pathologists.',
        status: 'verified',
        cites: [S.aetnaGuide, S.aetnaCPB648],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale. The ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA policies require no physician referral or prescription; what they require is precertification of all ten ABA codes, on form GR-69017-4 through Availity or the number on the card.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.rsa417E],
      },
      telehealth: {
        value: 'Not addressed in CPB 0554, CPB 0648 or the ABA medical necessity guide.',
        status: 'unverified',
        cites: [S.aetnaCPB, S.aetnaGuide],
        verifyVia: 'Availity or the precertification line on the card: ask which ABA codes Aetna pays by telehealth on this plan, with which POS and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Hampshire plans fall under RSA 420-J:6. For requests sent through the carrier’s electronic prior-authorization process, a non-urgent decision is due "within 7 calendar days of obtaining all information necessary to make the determination"; for paper or fax requests the limit is 14 calendar days; urgent requests are decided within 72 hours. Any request for more information must come within 7 calendar days of the request date, and information supplied in a peer-to-peer counts. A missed deadline means the request "shall be considered approved." Once approved, the carrier may not revoke or limit it "if care is provided within 60 business days" of the approval, and a peer-to-peer must be offered within 2 business days of a request. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. Aetna publishes no New Hampshire-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.rsa420J, S.erisa],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Hampshire-regulated) or self-funded (ERISA), whether you are submitting electronically, and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two group plans, New Hampshire follows the birthday rule: when parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (Ins 1904.05(d)(2)); for separated parents a court decree controls, and otherwise the custodial parent’s plan pays first. That rule binds group plans regulated by the state; a self-funded plan sets its own order. When both plans require precertification, RSA 420-J:3-b says the member "shall obtain pre-certification from the primary plan," and the secondary plan "shall not refuse payment for such services solely on the basis that the services were not pre-certified by the secondary plan" (it can still apply its own criteria). If the child also has NH Medicaid, Aetna pays first: Medicaid is payer of last resort (42 CFR 433.139), and NH Medicaid will not pay a balance the primary denied for "incorrect billing, non-eligible provider, or lack of medical necessity." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [S.ins1904, S.rsa420J, S.cfr433, S.nonPrimary, S.tricare, S.champva],
        verifyVia:
          'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in New Hampshire?', a: 'Yes, under its national policy for ASD, with New Hampshire’s RSA 417-E mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'What does the New Hampshire autism mandate require?', a: 'Coverage of autism treatment including ABA by or under a BACB-certified provider, on terms no less extensive than physical illness, without denial because services are habilitative. The current statute carries no age or dollar cap.' },
      { q: 'What does Aetna pay for ABA in New Hampshire?', a: 'Commercial rates are negotiated and not published. The only public benchmark is NH Medicaid’s fee-for-service schedule (97153 $17.79 per 15 minutes).' },
    ],
  },

  'cigna-new-hampshire': {
    slug: 'cigna-new-hampshire',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + New Hampshire’s RSA 417-E mandate layer; no PA on assessment codes.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA (Cigna autism resource guide); EN0499 sets no PA rule itself',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    treatmentPA: {
      value: 'Required: completed assessment and treatment plan attached to the ABA Prior Authorization Form',
      status: 'verified',
      cites: [S.cignaARG, S.en0499],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in New Hampshire',
    state: 'NH', kind: 'commercial',
    pill: 'Payer Guide · Cigna · New Hampshire',
    h1: 'Cigna / Evernorth ABA coverage in New Hampshire: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in New Hampshire: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for New Hampshire families: national policy EN0499, no PA on assessments, New Hampshire’s RSA 417-E autism mandate (no current age or dollar caps), credentialing without a state license, and what intake should verify.',
    intro: [
      'For an intake team in New Hampshire, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 with the Cigna autism resource guide, New Hampshire’s autism mandate in RSA 417-E, and the plan’s funding type, which decides whether the mandate applies. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      { label: 'State mandate', value: 'RSA 417-E:1, III(h) + RSA 417-E:2 (HB 569, Laws 2010 ch. 363)' },
      { label: 'Mandate age', value: 'No age limit in the current statute (the 2010 law let plans cap ABA by age band, 0–12 and 13–21; that paragraph is gone)' },
      { label: 'Mandate caps', value: 'None in the current text; the 2010 caps ($36,000/yr ages 0–12, $27,000/yr ages 13–21) no longer appear in RSA 417-E:2' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: NH does not license behavior analysts; the mandate requires BACB certification or BACB-certificant supervision' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Hampshire',
        body: [
          'Cigna, through Evernorth Behavioral Health, covers ABA under EN0499 (effective May 15, 2026). Per the autism resource guide, prior authorization is no longer required for assessment codes 97151, 97152 and 0362T with an autism diagnosis, as long as the provider is independently licensed or a BCBA and the plan covers ABA. Treatment needs the completed assessment and treatment plan on the ABA Prior Authorization Form. A full-text check of EN0499 and the resource guide found no mention of New Hampshire, so the national criteria apply. Cigna runs no New Hampshire Medicaid plan.',
        ],
        cites: [S.en0499, S.cignaARG],
      },
      {
        h2: 'The New Hampshire mandate: what it guarantees',
        body: [NH_MANDATE_BODY],
        cites: [S.rsa417E, S.hb569],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [NH_LICENSURE_BODY],
        cites: [S.bacbLic, S.rsa420J, S.rsa417E, S.fee, S.wsForm],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (RSA 417-E applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification.' },
      { title: 'Diagnosis report', desc: 'Diagnosing clinician’s name, credentials and licensure type, plus the date of the most recent diagnosis. Provisional or rule-out diagnoses don’t count.' },
      { title: 'Standardized assessment timing', desc: 'Instrument administered within 60 days before treatment starts.' },
      { title: 'Signed treatment plan', desc: 'RSA 417-E:2 lets the insurer require one signed by the PCP or a listed specialist.' },
    ],
    sources: [S.en0499, S.cignaARG, S.rsa417E, S.hb569, S.rsa420J, S.ins1904, S.bacbLic, S.erisa],
    deliveryRules: {
      supervision: {
        value: 'Case supervision is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health professional with ABA training. Direct plus indirect case supervision runs at one to two hours per ten hours of direct treatment; at 10 hours a week or less, at least one to two hours a week of direct case supervision. The supervisor’s name and credentials must be documented.',
        status: 'verified',
        cites: [S.en0499],
      },
      concurrentBilling: {
        value: 'Only one provider may bill for a unit of time, except 97153, 97154 and 97155 during direct supervision, when the BCBA or QHP directs the technician and both are face-to-face with the patient at the same time. ABA delivered at the same time as another treatment (speech or occupational therapy, for example) is not reimbursable.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      dailyLimits: {
        value: 'No per-day cap is published. All ABA codes bill in 15-minute units and only with 97151–97158, 0362T and 0373T; intensity must reflect severity, goals and response to treatment.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      noteSignature: {
        value: 'Each service needs its own record with start and end date and time, location, focus, a description of the intervention, who was present, the service type, and the name, credential and signature of the provider who rendered it.',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Goals and data are reported separately for each setting (home, clinic, school, community). Primarily educational or vocational services are not covered, and services in academic or vocational settings must still meet the direct-treatment definition.',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: 'Evernorth does not credential non-licensed or non-certified staff; their services are billed under the supervising provider. On a CMS-1500 the rendering provider signs box 31 and only a BCBA or other licensed provider goes in box 33; electronic claims use payer ID 62308. 97152, 97153 and 97154 may be provided by a BCaBA or technician but billed only by a BCBA-D, BCBA or licensed mental health provider.',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap; it says access to focused intervention "should not be restricted by age." Age terms come from the benefit plan and any controlling mandate.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.rsa417E, S.hb569],
        verifyVia: 'Live benefits verification, or the Evernorth Autism Care Coordinator team on 877.279.7603: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request needs the date it was most recently made, and a provisional, rule-out or school-only identification doesn’t count. The clocks run on data: standardized instrument within 60 days before treatment, baseline data within 60 days, current data within 60 days of the request, a standardized instrument no more than a year old for continued treatment, and a new one after any break over 60 days.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose board considers diagnosis within scope, applying DSM-5-TR criteria. The ABA assessment itself is by a BCBA, a Licensed Behavior Analyst, or an independently licensed mental health clinician with ABA training.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated, but it must be reliable, valid and standardized, measure both DSM-5-TR ASD domains, be completed in full by a trained administrator, and be the current edition (the policy’s example: Vineland-3, not Vineland-II), with dates, respondent and standardized scores reported.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no referral or prescription. Assessments 97151, 97152 and 0362T need no PA with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the assessment and plan on the ABA PA form.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.en0499, S.rsa417E],
      },
      telehealth: {
        value: 'All ABA CPT codes are covered telehealth services per the autism resource guide, and EN0499 allows in-person, telehealth or hybrid delivery chosen on clinical factors. The line-of-sight requirement does not apply to telehealth.',
        status: 'verified',
        cites: [S.cignaARG, S.en0499],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Hampshire plans fall under RSA 420-J:6. For requests sent through the carrier’s electronic prior-authorization process, a non-urgent decision is due "within 7 calendar days of obtaining all information necessary to make the determination"; for paper or fax requests the limit is 14 calendar days; urgent requests are decided within 72 hours. Any request for more information must come within 7 calendar days of the request date, and information supplied in a peer-to-peer counts. A missed deadline means the request "shall be considered approved." Once approved, the carrier may not revoke or limit it "if care is provided within 60 business days" of the approval, and a peer-to-peer must be offered within 2 business days of a request. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. Cigna/Evernorth publishes no New Hampshire-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.rsa420J, S.erisa],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Hampshire-regulated) or self-funded (ERISA), whether you are submitting electronically, and what reauthorization lead time Cigna/Evernorth expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two group plans, New Hampshire follows the birthday rule: when parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (Ins 1904.05(d)(2)); for separated parents a court decree controls, and otherwise the custodial parent’s plan pays first. That rule binds group plans regulated by the state; a self-funded plan sets its own order. When both plans require precertification, RSA 420-J:3-b says the member "shall obtain pre-certification from the primary plan," and the secondary plan "shall not refuse payment for such services solely on the basis that the services were not pre-certified by the secondary plan" (it can still apply its own criteria). If the child also has NH Medicaid, Cigna/Evernorth pays first: Medicaid is payer of last resort (42 CFR 433.139), and NH Medicaid will not pay a balance the primary denied for "incorrect billing, non-eligible provider, or lack of medical necessity." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [S.ins1904, S.rsa420J, S.cfr433, S.nonPrimary, S.tricare, S.champva],
        verifyVia:
          'Ask Cigna/Evernorth at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in New Hampshire?', a: 'Yes, under national policy EN0499 for ASD, with New Hampshire’s RSA 417-E mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does the Cigna ABA assessment need prior authorization in New Hampshire?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA. PA starts at treatment.' },
      { q: 'Does a BCBA need a New Hampshire license to bill Cigna?', a: 'New Hampshire issues no behavior-analyst license, and Cigna accepts a BCBA as the billing credential for ABA.' },
    ],
  },

  'unitedhealthcare-new-hampshire': {
    slug: 'unitedhealthcare-new-hampshire',
    family: 'unitedhealthcare',
    cardDesc: 'Optum criteria (BH803ABASCC) + New Hampshire’s RSA 417-E mandate; no NH state supplement, no NH Medicaid plan.',
    assessmentPA: {
      value: 'Required: the ABA Supplemental Clinical Criteria require prior authorization for ABA "unless otherwise specified or mandated by contract or law"; UnitedHealthcare runs it as a two-step Optum flow, assessment first',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required: second step (treatment authorization); the review interval is set per authorization',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express support at (866) 209-9320: ask what review interval will be set on this member’s ABA treatment authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: DSM-5-TR ASD confirmed by the diagnosing clinician with at least one validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in New Hampshire',
    state: 'NH', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · New Hampshire',
    h1: 'UnitedHealthcare / Optum ABA coverage in New Hampshire: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in New Hampshire: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for New Hampshire families: Optum’s ABA criteria and two-step authorization, New Hampshire’s RSA 417-E autism mandate (no current age or dollar caps), credentialing without a state license, and what intake should verify.',
    intro: [
      'For an intake team in New Hampshire, a UnitedHealthcare card means three layers: Optum Behavioral Health’s national ABA criteria, New Hampshire’s autism mandate in RSA 417-E, and the plan’s funding type, which decides whether the mandate applies. UnitedHealthcare is not one of New Hampshire’s three Medicaid plans, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: 'RSA 417-E:1, III(h) + RSA 417-E:2 (HB 569, Laws 2010 ch. 363)' },
      { label: 'Mandate age', value: 'No age limit in the current statute (the 2010 law let plans cap ABA by age band, 0–12 and 13–21; that paragraph is gone)' },
      { label: 'Mandate caps', value: 'None in the current text; the 2010 caps ($36,000/yr ages 0–12, $27,000/yr ages 13–21) no longer appear in RSA 417-E:2' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans (outside state insurance law)' },
      { label: 'Licensure', value: 'None: NH does not license behavior analysts; the mandate requires BACB certification or BACB-certificant supervision' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in New Hampshire',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health under the ABA Supplemental Clinical Criteria (BH803ABASCC; interim review April 2026): prior authorization for ABA, assessment first and treatment second on Provider Express, with continued-service review looking hard at use below 80% of authorized hours. Optum’s ABA State Mandates supplement lists Arizona, California, Connecticut, Florida, Massachusetts, New Jersey, New York, Ohio and Pennsylvania; New Hampshire is not there, so no New Hampshire-specific criteria modify the commercial policy. UnitedHealthcare does not hold a New Hampshire Medicaid contract (DHHS lists AmeriHealth Caritas, NH Healthy Families and WellSense).',
        ],
        cites: [S.optumSCC, S.optumSM, S.mcm],
      },
      {
        h2: 'The New Hampshire mandate: what it guarantees',
        body: [NH_MANDATE_BODY],
        cites: [S.rsa417E, S.hb569],
      },
      {
        h2: 'Credentialing, licensure and rates',
        body: [NH_LICENSURE_BODY],
        cites: [S.bacbLic, S.rsa420J, S.rsa417E, S.fee, S.wsForm],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (RSA 417-E applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification on Provider Express.' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADI-R, ADOS-2 and others). Optum asks for the instrument.' },
      { title: 'Signed treatment plan', desc: 'RSA 417-E:2 lets the insurer require one signed by the PCP or a listed specialist.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.mcm, S.rsa417E, S.hb569, S.rsa420J, S.ins1904, S.bacbLic, S.erisa],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, direct case supervision is required at 1–2 hours for every 10 hours of direct treatment per week. Technicians work under a BCBA or licensed behavioral health clinician and should be RBTs or otherwise certified. Optum does not recommend parents serving as their own child’s RBT.',
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
        value: 'No numeric cap. Requested hours must be justified by documented clinical need at the least restrictive appropriate level. At continued-service review, use below 80% of authorized hours over a two-week period must be explained with barriers and a plan.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed. The SCC set what must be documented for coverage, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Provider Express National Network Manual (documentation standards) and the participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level. Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination (teacher training, meetings, observations) is covered.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'A credentialed ABA provider is a master’s- or doctoral-level BCBA or a licensed behavioral health clinician credentialed for ABA; a BCaBA or non-licensed staff member works under that provider’s direct supervision, implementing the plan the provider wrote.',
        status: 'verified',
        cites: [S.optumSCC],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'The SCC carry no age criterion; the member’s benefit plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.rsa417E, S.hb569],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using validated tools. Progress is reassessed over 6-month periods, and use below 80% of authorized hours triggers review.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist, or other state-licensed clinician qualified to diagnose under DSM-5-TR.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool, from a non-exhaustive three-tier list: first-level screens (M-CHAT and others), second-level screens (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity is set from a baseline measure such as VB-MAPP, ABLLS-R, Vineland or SRS.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral; the SCC require prior authorization, run as a two-step Optum flow on Provider Express.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.rsa417E],
      },
      telehealth: {
        value: 'The SCC now point to CASP’s telehealth practice parameters and say telehealth options "are not intended to supplant in-person service; rather, they are intended to supplement" it. They publish no code list or POS rule.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Provider Express or the behavioral health number on the card: ask which ABA codes are payable by telehealth on this plan and with which POS code.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured New Hampshire plans fall under RSA 420-J:6. For requests sent through the carrier’s electronic prior-authorization process, a non-urgent decision is due "within 7 calendar days of obtaining all information necessary to make the determination"; for paper or fax requests the limit is 14 calendar days; urgent requests are decided within 72 hours. Any request for more information must come within 7 calendar days of the request date, and information supplied in a peer-to-peer counts. A missed deadline means the request "shall be considered approved." Once approved, the carrier may not revoke or limit it "if care is provided within 60 business days" of the approval, and a peer-to-peer must be offered within 2 business days of a request. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1 instead: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. UnitedHealthcare/Optum publishes no New Hampshire-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.rsa420J, S.erisa],
        verifyVia:
          'At benefits verification ask whether the plan is fully insured (New Hampshire-regulated) or self-funded (ERISA), whether you are submitting electronically, and what reauthorization lead time UnitedHealthcare/Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'For a child on two group plans, New Hampshire follows the birthday rule: when parents are married or living together, "the plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (Ins 1904.05(d)(2)); for separated parents a court decree controls, and otherwise the custodial parent’s plan pays first. That rule binds group plans regulated by the state; a self-funded plan sets its own order. When both plans require precertification, RSA 420-J:3-b says the member "shall obtain pre-certification from the primary plan," and the secondary plan "shall not refuse payment for such services solely on the basis that the services were not pre-certified by the secondary plan" (it can still apply its own criteria). If the child also has NH Medicaid, UnitedHealthcare/Optum pays first: Medicaid is payer of last resort (42 CFR 433.139), and NH Medicaid will not pay a balance the primary denied for "incorrect billing, non-eligible provider, or lack of medical necessity." TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).',
        status: 'plan-dependent',
        cites: [S.ins1904, S.rsa420J, S.cfr433, S.nonPrimary, S.tricare, S.champva],
        verifyVia:
          'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule), and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in New Hampshire?', a: 'Yes, under Optum’s national ABA criteria for ASD, with New Hampshire’s RSA 417-E mandate layered on for fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'Does Optum have New Hampshire-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement does not list New Hampshire, so the standard national criteria and two-step authorization apply.' },
      { q: 'Is UnitedHealthcare a New Hampshire Medicaid plan?', a: 'No. New Hampshire’s Medicaid plans are AmeriHealth Caritas New Hampshire, NH Healthy Families and WellSense.' },
    ],
  },
};

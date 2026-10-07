import type { PayerConfig, PayerSource } from './types.js';

/* Oregon — researched October 2026 from primary sources only.
   secure.sos.state.or.us (Oregon Administrative Rules) sits behind an F5 bot wall to curl and
   r.jina.ai was itself behind a Cloudflare challenge on 2026-10-07; every OAR below was read in
   full on the official SOS rule page through WebFetch. ORS chapters were read on
   oregonlegislature.gov (plain curl). The OHA behavioral health fee schedule and the HERC
   Prioritized List files were located through the oregon.gov SharePoint REST API (the pages
   render their file lists in JavaScript) and downloaded directly. eCFR sections were read through
   the ecfr.gov renderer API (the human pages are JavaScript shells). */

const S: Record<string, PayerSource> = {
  oar0760: { title: 'OAR 410-172-0760 — Applied Behavior Analysis (OHA, eff. 01/09/2025)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-172-0760' },
  oar0770: { title: 'OAR 410-172-0770 — Individual Eligibility for Applied Behavioral Analysis Treatment (OHA, DMAP 12-2017)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-172-0770' },
  oar0650: { title: 'OAR 410-172-0650 — Prior Authorization, Medicaid behavioral health (OHA, eff. 06/21/2022)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-172-0650' },
  oar0620: { title: 'OAR 410-172-0620 — Documentation Standards, Medicaid behavioral health (OHA, eff. 6/26/2015)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-172-0620' },
  oar0850: { title: 'OAR 410-172-0850 — Telemedicine for Behavioral Health (OHA, DMAP 67-2018)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-172-0850' },
  oar3835: { title: 'OAR 410-141-3835 — CCO Service Authorization (OHA, eff. 07/01/2026)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-141-3835' },
  oar3565: { title: 'OAR 410-141-3565 — Managed Care Entity Billing (OHA, eff. 01/01/2025)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-141-3565' },
  oar1300: { title: 'OAR 410-120-1300 — Timely Submission of Claims (OHA fee-for-service)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-120-1300' },
  oar1280: { title: 'OAR 410-120-1280 — Billing (third-party resources; OHA as payer of last resort)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=410-120-1280' },
  fee: { title: 'OHA — OHP Fee-for-Service Behavioral Health Fee Schedule, Applied Behavior Analysis tab (update published 7/1/2026)', url: 'https://www.oregon.gov/oha/HSD/OHP/DataReportsDocs/bh-fee-schedule0726.xlsx' },
  feePage: { title: 'OHA — OHP Fee-for-Service Fee Schedule page', url: 'https://www.oregon.gov/oha/HSD/OHP/Pages/Fee-Schedule.aspx' },
  gn: { title: 'HERC — Prioritized List Guideline Notes, 10/1/2026 (Guideline Note 75 ABA for ASD, Line 192; Guideline Note 126 ABA for self-injurious behavior, Line 436)', url: 'https://www.oregon.gov/oha/HPA/DSI-HERC/PrioritizedList/10-1-2026GL.txt' },
  herc: { title: 'HERC — Prioritized List of Health Services (funded lines 1–470 through December 31, 2026)', url: 'https://www.oregon.gov/oha/HPA/DSI-HERC/Pages/Prioritized-List.aspx' },
  epsdt: { title: 'OHA — EPSDT Provider Guide (March 2026)', url: 'https://www.oregon.gov/oha/HSD/OHP/Tools/EPSDT-Provider-Guide.pdf' },
  acentra: { title: 'OHP Open Card Care Coordination Program (Acentra Health, OHA contractor) — Utilization Management: Checklist for ABA Requests', url: 'https://ohpcc.acentra.com/utilization-management/' },
  policyBHS: { title: 'OHA — Behavioral Health Services provider guidelines (ABA quick links and authorization contacts)', url: 'https://www.oregon.gov/oha/hsd/ohp/pages/policy-bhs.aspx' },
  plans: { title: 'OHA — Coordinated Care Organization (CCO) Plans (CCO list by county, read from the page’s CCO Plan Details list)', url: 'https://www.oregon.gov/oha/HSD/OHP/Pages/Plans.aspx' },
  lane: { title: 'OHA — Lane County CCO Transition: Reminder for Members (updated 03/23/2026)', url: 'https://www.oregon.gov/oha/HSD/OHP/Tools/Lane-County-Transition-Member-Reminder-EN.pdf' },
  ors743A: { title: 'ORS chapter 743A — ORS 743A.058 (telemedicine), 743A.168 (behavioral health parity), 743A.190 (pervasive developmental disorder), and Oregon Laws 2013, ch. 771, §2 (ABA mandate, compiled as a note after ORS 743A.264)', url: 'https://www.oregonlegislature.gov/bills_laws/ors/ors743A.html' },
  ors743B: { title: 'ORS chapter 743B — ORS 743B.423 (utilization review), 743B.450 (prompt payment), 743B.452 (interest)', url: 'https://www.oregonlegislature.gov/bills_laws/ors/ors743B.html' },
  ors676: { title: 'ORS 676.802–676.830 — Applied behavior analysis: Behavior Analysis Regulatory Board, licensure, interventionist registration, titles, health plan credentialing', url: 'https://www.oregonlegislature.gov/bills_laws/ors/ors676.html' },
  oar824lic: { title: 'OAR 824-030-0010 — Licensing of Behavior Analyst (eff. 2/1/2023)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=824-030-0010' },
  oar824sup: { title: 'OAR 824-040-0010 — Training and Supervision of registered behavior analysis interventionists (eff. 2/1/2018)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=824-040-0010' },
  oar824def: { title: 'OAR 824-010-0005 — Definitions (declarant; direct supervision incl. remote supervision) (eff. 10/21/2022)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=824-010-0005' },
  oar824rbai: { title: 'OAR 824-030-0040 — Registration of a Behavior Analysis Interventionist (eff. 3/28/2024)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=824-030-0040' },
  hlo: { title: 'Oregon Health Licensing Office — Behavior Analysis Regulatory Board', url: 'https://www.oregon.gov/oha/PH/HLO/Pages/Board-Behavior-Analysis-Regulatory.aspx' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Oregon: 2013, OR Behavior Analysis Regulatory Board)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  oar836: { title: 'OAR 836-020-0785 — Rules for Coordination of Benefits (order of benefit determination; eff. 1/1/2014)', url: 'https://secure.sos.state.or.us/oard/view.action?ruleNumber=836-020-0785' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-42?part=438&section=438.210' },
  cfr440: { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-42?part=440&section=440.230' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-42?part=433&section=433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-29?part=2560&section=2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer (eCFR)', url: 'https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-38?part=17&section=17.270' },
  // CCOs
  psABA: { title: 'PacificSource Clinical Guideline — Applied Behavioral Analysis (ABA), Commercial and Medicaid (Oregon Medicaid section; Ops approval 3/2026, next review 1/1/2027)', url: 'https://pacificsource.com/media/24381' },
  psNews: { title: 'PacificSource — ABA treatment services and neuropsychological and psychological testing will require prior authorization (Sept. 29, 2023; eff. 1/1/2024)', url: 'https://pacificsource.com/article/aba-treatment-services-and-neuropsychological-and-psychological-testing-will-require-prior' },
  trilAuth: { title: 'Trillium Community Health Plan — Medicaid (OHP) Service Authorization Handbook: Authorization or Denial of Covered Services', url: 'https://www.trilliumohp.com/content/dam/centene/trillium/ProviderResources/ProviderManuals/TrilliumMedPrvdrOhpAuth.pdf' },
  trilTip: { title: 'Trillium Community Health Plan — Applied Behavioral Analysis Outpatient Treatment Request Checklist', url: 'https://www.trilliumohp.com/content/dam/centene/trillium/ProviderResources/ProviderForms/OR-ABA-Request-Tip-sheet.pdf' },
  trilPM: { title: 'Trillium Community Health Plan — Provider Manual 2026', url: 'https://www.trilliumohp.com/content/dam/centene/trillium/ProviderResources/ProviderManuals/ProviderManual%202026_FINAL_R.pdf' },
  trilRes: { title: 'Trillium Community Health Plan — Provider forms and resources', url: 'https://www.trilliumohp.com/providers/resources/forms-resources.html' },
  coUM: { title: 'CareOregon — Behavioral Health Utilization Management Procedure Handbook for Health Share, CPCCO and JCC members (last revised July 2026)', url: 'http://www.careoregon.org/docs/default-source/providers/behavioral-health/post-10-1-forms-and-docs/behavioral-health-utilization-management-handbook.pdf?sfvrsn=d1ad1eb5_9' },
  coBHPM: { title: 'CareOregon — Behavioral Health Metro Area Provider Manual for Health Share members (last revised April 2026)', url: 'https://www.careoregon.org/docs/default-source/providers/behavioral-health/post-10-1-forms-and-docs/behavioral-health-provider-manual.pdf?sfvrsn=dfcac6c_14' },
  hsBH: { title: 'Health Share of Oregon Partners — Behavioral Health Resources (CareOregon/Health Share guidelines)', url: 'https://partners.healthshareoregon.org/behavioral-health-resources' },
  jccForms: { title: 'Jackson Care Connect — Forms and policies (provider)', url: 'https://jacksoncareconnect.org/providers/provider-resources/forms-and-policies' },
  cpForms: { title: 'Columbia Pacific CCO — Forms and policies (provider)', url: 'https://colpachealth.org/providers/provider-support/forms-and-policies' },
  abaForm: { title: 'JCC/CPCCO — Treatment Authorization Form, Applied Behavioral Analysis Services (2019 form; CareOregon BH UM)', url: 'https://jacksoncareconnect.org/docs/jacksoncareconnectorglibraries/providers/bh/jcc-cpcco-aba-request-form-2019.pdf?sfvrsn=5b429eb5_1' },
  ihnPAL: { title: 'InterCommunity Health Network CCO — 2026 Prior Approval List', url: 'https://samhealthplans.org/wp-content/uploads/sites/3/2026-prior-approval-list-ihn-cco.pdf' },
  ihnCodes: { title: 'IHN Prior Authorization List Code List (effective January 1, 2026)', url: 'https://samhealthplans.org/wp-content/uploads/sites/3/2026-Prior-Auth-CPT-or-HCPCS-Codes-IHN-CCO-Providers.pdf' },
  ihnUM: { title: 'Samaritan Health Plans — Utilization Management and Service Authorization Handbook (2025)', url: 'https://samhealthplans.org/utilization-management-and-service-authorization-handbook?type=pdf' },
  ihnBH: { title: 'Samaritan Health Plans — Behavioral health providers (IHN-CCO directed payments incl. ABA minimum fee schedule)', url: 'https://samhealthplans.org/providers/behavioral-health-providers/' },
  ihnAuth: { title: 'Samaritan Health Plans — Authorizations (IHN-CCO prior approval lists and forms)', url: 'https://samhealthplans.org/providers/care-management/authorizations/' },
  uhaFAQ: { title: 'Umpqua Health Alliance — Prior Authorizations, Behavioral Health: Frequently Asked Questions (February 2026)', url: 'https://www.umpquahealth.com/form/behavioral-health-prior-authorization-provider-faq' },
  ahPM: { title: 'Advanced Health — Provider Manual 2026–2027 (Rev. 3.2026)', url: 'https://advancedhealth.b-cdn.net/wp-content/uploads/2025/12/26-27-Provider-Manual-20260414-1.pdf' },
  ahBH: { title: 'Advanced Health — Behavioral Health Authorization Request form and instructions (Rev. 10/25)', url: 'https://advancedhealth.b-cdn.net/wp-content/uploads/2025/12/MH-BH-AUTH-FORM-10.14.25.pdf' },
  ahRes: { title: 'Advanced Health — Provider resources (forms and manuals)', url: 'https://advancedhealth.com/providers/resources/' },
  chaPM: { title: 'Cascade Health Alliance — Provider Manual (revised 5/2026)', url: 'https://www.cascadehealthalliance.com/media/1a2062f7ef9f4b5f81ca4b78c0d6f592/provider-manual-2026-03.pdf' },
  chaGrid: { title: 'Cascade Health Alliance — Behavioral Health (BH) Auth Grid (revision date 6/24/2026)', url: 'https://www.cascadehealthalliance.com/media/7d5f9172bf6e4bac931e7c7dee354bf4/auth-grid-bh-62426.pdf' },
  eoPM: { title: 'Eastern Oregon CCO — Provider Manual 2026 (incl. GOBHI Applied Behavior Analysis program)', url: 'https://www.eocco.com/-/media/EOCCO/PDFs/provider_manual.pdf' },
  eoPA: { title: 'EOCCO Prior Authorization List — September 2026', url: 'https://www.eocco.com/-/media/EOCCO/PDFs/priorauth.pdf' },
  eoBH: { title: 'EOCCO — Behavioral Health Authorization Form (GOBHI utilization management)', url: 'https://www.eocco.com/-/media/EOCCO/PDFs/providers/behavioral_auth.pdf' },
  eoAuth: { title: 'EOCCO — Referrals and authorizations (provider)', url: 'https://www.eocco.com/providers/referral-auths' },
  ycPA: { title: 'Yamhill Community Care — Prior Authorizations (provider guidelines, policies and forms)', url: 'https://yamhillcco.org/for-providers/guidelines-policies-and-forms/prior-authorizations/' },
  ycABA: { title: 'Yamhill Community Care — ABA Prior Authorization Request and ABA Authorization Request Addendum (form dated 05/28/2024)', url: 'https://yamhillcco.org/wp-content/uploads/2025/11/YCCO-ABA-PA-Form-3-Fillable-Form.pdf' },
  ycList: { title: 'Yamhill Community Care — PA list, active and termed codes, as of 01.29.2026 (Behavioral Health tab)', url: 'https://yamhillcco.org/wp-content/uploads/2026/03/YCCO-PA-list-active-and-termed-as-of-01.29.2026-1.xlsx' },
  acDP: { title: 'AllCare CCO — Behavioral Health Provider Directed Payment Increase (2025 guidance; ABA minimum fee schedule)', url: 'https://www.allcarehealth.com/media/6210/2023accco-bh-provider-directed-payment-increase.pdf' },
  // Commercial
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026; state exhibit for Maryland only)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  aetnaTele: { title: 'Aetna — Telemedicine and Direct Patient Contact Payment Policy (ABA code table, Commercial vs. Medicare columns; posted policy shows last review June 2021)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pdf/telemedicine.pdf' },
  aetnaCPB648: { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
  en0499: { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines incl. Oregon Regulatory Addendum (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumSM: { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA STM72026, July 2026; no Oregon entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated June 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum Behavioral Health National Provider Network Manual (BH02330, published July 1, 2026, effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  regBH18: { title: 'Regence Medical Policy BH18 — Applied Behavior Analysis for the Treatment of Autism Spectrum Disorder (version read: effective 8/1/2025, last review June 2025; it notes a revision effective 11/1/2026)', url: 'https://beonbrand.getbynder.com/m/e4646f415eb7f4eb/' },
  regBH33: { title: 'Regence Medical Policy BH33 — ABA Initial Assessment for the Treatment of Autism Spectrum Disorder', url: 'https://beonbrand.getbynder.com/m/8360cc45444cab46/' },
};

/* ---- Shared Oregon state facts ---- */
const OR_FEE_LINE =
  'OHA’s fee-for-service behavioral health fee schedule (update published 7/1/2026) pays, per 15-minute unit: 97151 $20.85, 97152 $19.81, 97153 $14.70, 97154 $13.72, 97155 $32.07, 97156 $32.07 and 97157 $8.68 (rates effective 7/1/2024). 97158, 0362T and 0373T do not appear on the schedule.';

const OR_MANDATE_BODY =
  'Oregon’s ABA mandate is not in the numbered ORS. It is section 2 of chapter 771, Oregon Laws 2013 (SB 365), printed as a note after ORS 743A.264 and set to be repealed January 2, 2030. It requires a health benefit plan to cover screening for and diagnosis of autism spectrum disorder "by a licensed neurologist, pediatric neurologist, developmental pediatrician, psychiatrist or psychologist, who has experience or training in the diagnosis of autism spectrum disorder," and "medically necessary treatment for autism spectrum disorder and the management of care, for an individual who begins treatment before nine years of age." Treatment "includes applied behavior analysis for up to 25 hours per week," and the section "applies to coverage for up to 25 hours per week of applied behavior analysis for an individual if the coverage is first requested when the individual is under nine years of age." It is not a ceiling: the section "does not limit coverage for any services that are otherwise available" under ORS 743A.168 or 743A.190, including ABA "for more than 25 hours per week" or ABA first requested at age nine or older. ORS 743A.168, Oregon’s behavioral health parity law, requires group and non-grandfathered individual plans to cover medically necessary behavioral health treatment "at the same level as, and subject to limitations no more restrictive than," other medical conditions; ORS 743A.190 separately requires coverage of medically necessary services for a child under 18 diagnosed with a pervasive developmental disorder. Under the 2013 law an insurer may require prior authorization "for coverage of a maximum of 25 hours per week" of ABA recommended in a treatment plan approved by one of the listed professionals, "as long as the insurer makes a prior authorization determination no later than 30 calendar days after receiving the request," may require an updated treatment plan "not more than once every six months," and must continue approved ABA while the child "continues to make progress toward the majority of the goals" and it remains medically necessary. It does not require coverage of services under an IEP, services by a family or household member, or "telemedicine" (a separate statute, ORS 743A.058, now requires telemedicine coverage generally). Covered settings include "the individual’s home or a licensed health care facility" or a setting approved by the licensed provider. The mandate reaches state-regulated plans only; self-funded employer plans answer to ERISA and federal parity.';

const OR_LICENSURE_BODY =
  'Oregon licenses behavior analysts. ORS 676.806 creates the Behavior Analysis Regulatory Board within the Health Licensing Office; under ORS 676.810 it licenses behavior analysts and assistant behavior analysts (a fingerprint-based records check is required, and BACB certification may be), and under ORS 676.815 the Office registers behavior analysis interventionists, who must be 18, hold a diploma or equivalent, pass the fingerprint check, complete "at least 40 hours of professional training," and "receive ongoing training and supervision" by a licensed behavior analyst, licensed assistant behavior analyst or licensed health care professional. A provisional interventionist registration must issue within five business days of a complete application. Only licensees and registrants may use the titles "licensed behavior analyst," "licensed assistant behavior analyst" or "registered behavior analysis interventionist." OAR 824-040-0010 sets the interventionist supervision floor: direct and indirect supervision "for at least 5 percent of the interventionist’s service hours," with direct supervision at least once per calendar month. What that means for an out-of-state BCBA: the Oregon license rule (OAR 824-030-0010) has no reciprocity, temporary-permit or telehealth exemption; it asks applicants for "an affidavit of licensure from any state where the individual holds or has held a license." The payers’ own definitions point the same way. The commercial mandate defines ABA as provided by an Oregon-licensed health care professional, a behavior analyst or assistant licensed under ORS 676.810, or a registered interventionist; OHP pays directly only a Licensed Behavior Analyst, a licensed health care professional, or a declarant; and the telemedicine statute defines a "health professional" as one "licensed, certified or registered in this state." So plan on an Oregon license before treating an Oregon member, including by telehealth. The Health Licensing Office says it does not give individualized advice on how the law applies to a practice. ORS 676.830 lets each health plan set its own ABA credentialing requirements.';

const OR_CLAIMS_BODY =
  'Claims timing in Oregon’s commercial market is set by statute. ORS 743B.450 requires an insurer to "pay a clean claim or deny the claim not later than 30 days after the date on which the insurer receives the claim" (or within 30 days of receiving requested additional information), and ORS 743B.452 adds "simple interest of 12 percent per annum" on late payments. For utilization review, ORS 743B.423 generally requires a determination on a non-emergency request "no later than two business days after receipt," but the ABA mandate lets an insurer take up to 30 calendar days on an ABA prior authorization "notwithstanding ORS 743B.423." Approved treatment (other than drugs) is binding for the later of its reasonable duration or "Sixty days after the date that the treatment begins," and an insurer must give participating providers 60 days’ notice before adding new utilization review requirements. Self-funded employer plans follow ERISA instead.';

const OR_MANDATE_ROW = 'Oregon Laws 2013, ch. 771, §2 (SB 365; ABA mandate, compiled after ORS 743A.264, repeal date Jan. 2, 2030) + ORS 743A.168 parity + ORS 743A.190';
const OR_AGE_ROW = 'The ABA section applies when coverage is first requested before age 9 (treatment begun before 9); it does not limit ABA otherwise owed under ORS 743A.168 parity at older ages. ORS 743A.190 covers children under 18 with a pervasive developmental disorder';
const OR_CAPS_ROW = 'No dollar cap. The 2013 section covers ABA up to 25 hours/week and lets insurers require PA up to that level (decision within 30 days); hours above 25 are not limited by the section';
const OR_EXEMPT_ROW = 'Self-funded ERISA employer plans (outside state insurance law); IEP services, family-member services and DHS/OHA services are excluded from the 2013 section';
const OR_LIC_ROW = 'Yes: Behavior Analysis Regulatory Board (HLO) licenses behavior analysts and assistant behavior analysts and registers interventionists (ORS 676.802–676.830)';

const MANDATE_AGE_TAIL =
  ' For a fully insured Oregon plan, the 2013 ABA section (ch. 771, §2) applies to ABA first requested before age nine, up to 25 hours a week, and says it does not limit ABA otherwise owed under ORS 743A.168 parity (including at older ages or above 25 hours). Self-funded ERISA plans are outside the statute, so the funding type decides whether this binds.';

const MANDATE_REFERRAL_TAIL =
  ' For a fully insured Oregon plan, the 2013 ABA section lets the insurer require an individualized treatment plan approved by a licensed neurologist, pediatric neurologist, developmental pediatrician, psychiatrist or psychologist, updated no more than once every six months, and a re-diagnosis by one of them if the original diagnosis was made by someone else. Self-funded ERISA plans sit outside the statute.';

const OR_TELE_TAIL =
  ' For a fully insured Oregon plan, ORS 743A.058 requires coverage of a health service delivered by telemedicine when the plan covers it in person, it is medically necessary, and it can be "safely and effectively provided using telemedicine"; the plan may not impose different prior authorization requirements or restrict originating sites, and must pay "the same reimbursement" as in person. The statute defines a "health professional" as one licensed, certified or registered in Oregon. Self-funded employer plans are outside it.';

const OR_COB_COMMERCIAL =
  'For a child on two state-regulated group plans, Oregon’s coordination-of-benefits rule follows the birthday rule: for parents married or living together, "The plan of the parent whose birthday falls earlier in the calendar year is the primary plan" (OAR 836-020-0785); for separated parents a court decree controls when the plan knows of it, and otherwise the custodial parent’s plan pays first, then the custodial parent’s spouse’s, then the non-custodial parent’s. A self-funded plan sets its own order. If the child also has OHP, the commercial plan pays first: OHA "shall be the payer of last resort" and providers "shall make reasonable efforts to obtain payment first from other resources" (OAR 410-120-1280; 42 CFR 433.139). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const OR_AUTH_COMMERCIAL =
  'Depends on how the plan is funded. For a fully insured Oregon plan, the ABA mandate lets the insurer require prior authorization of up to 25 hours a week of ABA "as long as the insurer makes a prior authorization determination no later than 30 calendar days after receiving the request, notwithstanding ORS 743B.423"; for other utilization review ORS 743B.423 requires a decision "no later than two business days after receipt," with the same two business days to ask for missing information. An approved treatment is binding for the later of its reasonable duration or 60 days after it begins. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours.';

/* ---- Shared CCO inheritance facts (state floor, written only where the CCO publishes nothing different) ---- */
const STATE_SUPERVISION =
  'OHA does not pay assistant behavior analysts or registered behavior analysis interventionists directly (OAR 410-172-0760(4)); they work under a directly payable Licensed Behavior Analyst, licensed health care professional or declarant. The licensing rule sets the interventionist supervision floor: direct and indirect supervision "for at least 5 percent of the interventionist’s service hours," including direct supervision at least once per calendar month, by a licensed behavior analyst, licensed assistant behavior analyst or licensed health care professional (OAR 824-040-0010). Direct supervision may be remote if it is synchronous audio and video (OAR 824-010-0005).';

const STATE_TELE =
  'The state rule applies: "For purposes of behavioral health services, the Authority shall provide coverage for telemedicine services to the same extent that the services would be covered if they were provided in person" (OAR 410-172-0850(5)), using synchronous two-way video (telephone and e-mail only where HERC guidelines allow). OHA’s behavioral health fee schedule lists modifier GT ("Via Interactive Simultaneous Audio and Video Telecommunication Systems") as an allowable modifier on every ABA code it prices, 97151 through 97157, including the 97151 assessment and 97155 protocol modification.';

const STATE_REFERRAL =
  'Yes. Before services, OAR 410-172-0770(1)(k) requires "A referral for ABA treatment with or without specification of hours or intensity" that includes the diagnosis and a copy of the evaluation, from a physician, psychologist, or nurse practitioner or physician associate specializing in developmental medicine who has experience diagnosing and treating autism (OAR 410-172-0760(1)).';

const STATE_COB =
  'Medicaid pays last. OHA must be "the payer of last resort," and "Providers shall make reasonable efforts to obtain payment first from other resources" (OAR 410-120-1280; 42 CFR 433.139). Bill the commercial plan first and follow its authorization rules.';

export const oregonPayers: Record<string, PayerConfig> = {
  'oregon-medicaid': {
    slug: 'oregon-medicaid',
    cardDesc: 'OHP covers ABA (HERC Line 192, Guideline Note 75) mostly through 12 CCOs; FFS needs PA on treatment codes but not on 97151/97152, and rates are published.',
    assessmentPA: {
      value: 'Fee-for-service (open card): no. OHA’s fee schedule says "Except for 97151 and 97152, all ABA codes require prior authorization"; both assessment codes are managed by retrospective review. CCO members: ask the member’s CCO',
      status: 'verified',
      cites: [S.fee],
    },
    treatmentPA: {
      value: 'Fee-for-service: yes for 97153–97157 (fee schedule "PA"). The request needs the OAR 410-172-0770 evaluation, a referral from a qualified practitioner and a treatment plan (OAR 410-172-0650(4)(h)); authorizations last no more than 12 months',
      status: 'verified',
      cites: [S.fee, S.oar0650, S.acentra],
    },
    dxRequired: {
      value: 'Yes. An ASD diagnosis "listed on the ASD line" of HERC’s Prioritized List (Line 192, Guideline Note 75), or stereotyped movement disorder with self-injurious behavior due to a neurodevelopmental disorder (Guideline Note 126), from an evaluation meeting OAR 410-172-0770',
      status: 'verified',
      cites: [S.oar0770, S.gn],
    },
    payer: 'Oregon Health Plan (Medicaid)',
    state: 'OR', kind: 'state-medicaid',
    pill: 'Payer Guide · Oregon Health Plan (Medicaid)',
    h1: 'Oregon Health Plan (Medicaid) ABA coverage: the intake guide.',
    metaTitle: 'Oregon Health Plan (OHP) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Oregon Health Plan covers ABA: OAR 410-172-0760/0770 and HERC Guideline Note 75, coverage through coordinated care organizations (CCOs) or open card, the FFS prior-authorization split (no PA for 97151/97152), published FFS rates, and Oregon behavior-analyst licensure.',
    intro: [
      'Oregon Health Plan covers applied behavior analysis for autism spectrum disorder and for stereotyped movement disorder with self-injurious behavior. The rules are short and specific: OAR 410-172-0760 says who may recommend and deliver ABA, OAR 410-172-0770 lists what the diagnostic evaluation must contain, and HERC’s Prioritized List places ABA (CPT 97151–97158) on funded Line 192 under Guideline Note 75. Most members are enrolled in a coordinated care organization (CCO), which authorizes and pays for ABA; members with open card (fee-for-service) OHP go through OHA and its contractor.',
      'For an agency entering the OHP market, three things matter first. Every clinician who bills directly must hold an Oregon behavior-analysis license (or another Oregon health license whose scope includes ABA); the intake packet is heavier than most states’, because OHA wants a physical exam and a hearing test on file before ABA starts; and the open-card rates are published, so you can model them against each CCO’s contract.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: ASD (Line 192, Guideline Note 75) and stereotyped movement disorder with self-injurious behavior (Guideline Note 126)' },
      { label: 'Structure', value: 'Mostly through 12 CCOs (14 county-based plan listings on OHA’s CCO page); open card (FFS) through OHA' },
      { label: 'FFS prior auth', value: 'None for 97151/97152 (retrospective review); PA for 97153–97157' },
      { label: 'FFS rates (per 15 min)', value: '97151 $20.85 · 97152 $19.81 · 97153 $14.70 · 97154 $13.72 · 97155/97156 $32.07 · 97157 $8.68 (schedule published 7/1/2026)' },
      { label: 'Who bills directly', value: 'Licensed Behavior Analyst, licensed health care professional, or declarant; BCaBAs and interventionists do not' },
      { label: 'Licensure', value: OR_LIC_ROW },
      { label: 'Other insurance', value: 'OHP pays last; bill the commercial plan first' },
    ],
    sections: [
      {
        h2: 'Where ABA sits: the Prioritized List, OAR 410-172, and the member’s CCO',
        body: [
          'OHP covers condition–treatment pairs on HERC’s Prioritized List, funded through line 470 until December 31, 2026. Guideline Note 75 puts ABA, "represented by CPT codes 97151-97158," on Line 192 AUTISM SPECTRUM DISORDERS. For children 1–12 it includes early intensive behavioral intervention "for up to six months" at a time, with ongoing coverage "based on demonstrated progress towards meaningful predefined objectives" measured on a standardized multimodal assessment no more often than every six months; less intensive ABA (parent training, play-based and joint-attention interventions) is covered when intensive ABA is not indicated, with six-month initial coverage. For members 13 and older, "Intensive ABA is not included on this line," but targeted ABA for problem behaviors is. Guideline Note 126 adds targeted ABA for self-injurious behavior on Line 436.',
          'Two rules soften the age split. OAR 410-172-0770(3) says "Services in excess of the HERC Prioritized List coverage guidance or guideline notes shall be provided when medically appropriate for a particular individual, including individuals age 13 and older," and lists factors such as severity, how recently the diagnosis was made, and comorbidities. And for members under 21, OHA’s EPSDT Provider Guide (March 2026) says OHA, CCOs and providers "Cannot use the Prioritized List, coverage guidance or guideline notes to determine coverage broadly or for an entire age group or population under EPSDT."',
          'Most members belong to a CCO. OHA lists 12 CCOs serving the state by county; PacificSource Community Solutions left Lane County after 2025, and most of its Lane members moved to Trillium Community Health Plan on February 1, 2026. OHA’s behavioral health page sends CCO authorization questions to the CCO and open-card ABA questions to OHA’s contractor.',
        ],
        cites: [S.gn, S.herc, S.oar0770, S.epsdt, S.plans, S.lane, S.policyBHS],
      },
      {
        h2: 'The front door: evaluation, referral and the open-card request',
        body: [
          'Before ABA starts, OAR 410-172-0770 requires an evaluation by a physician, psychologist, or developmental-medicine nurse practitioner or physician associate experienced in autism, documenting: an ASD diagnosis on the Prioritized List’s ASD line; "results from a standardized, validated tool, such as the Autism Diagnostic Observation Schedule (ADOS)"; the DSM-5 core features; a parent or caregiver interview; a review of medical records; direct observation; developmental status "using validated assessments ... such as the Vineland" (which the ABA provider may supply); a comprehensive medical exam (a well-child exam counts if within one year for ages 1–6 or two years for ages 6–18); and a hearing test within one year for ages 2–5 or two years for ages 6–18. The exam and hearing test "must be completed before starting ABA but may not be allowed to delay or interrupt ABA services." It ends with a referral for ABA, with or without hours.',
          'For open-card members, OHA’s care-coordination contractor (Acentra Health) lists the steps: a specialist evaluates and recommends ABA, the PCP or specialist refers, and "ABA provider submits prior auth request to OHP by faxing to 503-378-5814 or can load request into MMIS themselves," with the EDMS cover sheet; e-mailed requests are not accepted, and "an assessment that refers to a doctor that gave a child a diagnosis of autism is not enough. There must be a documented diagnosis and order from the physician." OHA’s own behavioral health page gives OR1915i@kepro.com for fee-for-service ABA authorizations. Retroactive authorization is possible only in limited cases, requested within 90 days of service (OAR 410-172-0650(6)).',
        ],
        cites: [S.oar0770, S.oar0760, S.oar0650, S.acentra, S.policyBHS],
      },
      {
        h2: 'Rates, staffing and licensure',
        body: [
          OR_FEE_LINE + ' The schedule lists rendering provider types per code: 97151 BCBA, physician, psychologist or a legislatively approved licensed health care professional; 97152–97154 add BCaBA and BAI (behavior analysis interventionist); 97155–97157 allow BCBA, BCaBA and the licensed professionals. Every ABA line allows modifier GT for telehealth. CCOs set their own contracted rates; at least one CCO (InterCommunity Health Network) publishes that it keeps ABA rates no lower than the OHA fee-for-service rate under OHA’s behavioral health directed payment.',
          'Direct payment goes only to a Licensed Behavior Analyst, a licensed health care professional whose scope includes ABA, or an individual holding a declaration of practice; licensed assistant behavior analysts and registered interventionists "are not eligible for direct payment" (OAR 410-172-0760(3)–(4)). ' + OR_LICENSURE_BODY,
        ],
        cites: [S.fee, S.ihnBH, S.oar0760, S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.ors743A],
      },
      {
        h2: 'Claims operations: timely filing, payment and other insurance',
        body: [
          'Open-card claims "must be filed within 12 months of the date of service," and a denied claim filed on time may be resubmitted within 18 months (OAR 410-120-1300). CCO claims run on a shorter clock: OAR 410-141-3565 sets initial claims "within no more than 120 days of the date of service" (365 days for exceptions including retroactive eligibility, Medicare as primary and third-party liability) and requires CCOs to "pay or deny at least 90 percent of valid claims within 30 days of receipt and at least 99 percent of valid claims within 90 days of receipt." A provider enrolled with OHA bills under its OHA provider number or NPI, and using a billing provider does not relieve "the performing provider’s responsibility for the truth and accuracy of submitted information" (OAR 410-120-1280). We did not find an OHA statement applying electronic visit verification to ABA; ask OHA Provider Services (800-336-6016).',
        ],
        cites: [S.oar1300, S.oar3565, S.oar1280, S.fee],
      },
    ],
    collect: [
      { title: 'Which OHP coverage', desc: 'The CCO on the card (or open card). The CCO owns authorization, network and payment.' },
      { title: 'Diagnostic evaluation', desc: 'Must meet OAR 410-172-0770: ADOS-type tool, DSM-5 core features, caregiver interview, record review, direct observation, developmental status (e.g., Vineland).' },
      { title: 'Referral / order', desc: 'From a physician, psychologist, or developmental-medicine NP/PA experienced in autism. A report that merely mentions a diagnosis is not enough.' },
      { title: 'Physical exam + hearing test', desc: 'Well-child exam within 1 year (ages 1–6) or 2 years (6–18); hearing test within 1 year (2–5) or 2 years (6–18). Needed before ABA starts.' },
      { title: 'Other insurance', desc: 'Commercial coverage pays first; OHP is the payer of last resort.' },
    ],
    sources: [S.oar0760, S.oar0770, S.oar0650, S.oar0620, S.oar0850, S.fee, S.feePage, S.gn, S.herc, S.epsdt, S.acentra, S.policyBHS, S.plans, S.lane, S.oar3835, S.oar3565, S.oar1300, S.oar1280, S.ors676, S.oar824lic, S.oar824sup, S.oar824def, S.hlo, S.bacbLic, S.cfr440, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: STATE_SUPERVISION,
        status: 'verified',
        cites: [S.oar0760, S.oar824sup, S.oar824def],
      },
      concurrentBilling: {
        value: 'Not addressed in any OHA ABA source read (OAR 410-172-0650/0760/0770, the fee schedule). The fee schedule lists 97153 and 97155 as separate PA codes but says nothing about billing them for the same clock time.',
        status: 'unverified',
        cites: [S.fee, S.oar0760],
        verifyVia: 'OHA Provider Services, 800-336-6016 or DMAP.ProviderServices@odhsoha.oregon.gov, or the OHP professional billing instructions.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No unit or hour cap is published: the fee schedule has no maximum-units column for ABA. Guideline Note 75 says "The evidence does not lead to a direct determination of optimal intensity" (EIBI studies ranged 15–40 hours a week; effective less-intensive interventions usually ran up to 16 hours a week), and OAR 410-172-0770(3) requires services beyond the guideline note when medically appropriate. Hours are set per authorization.',
        status: 'verified',
        cites: [S.fee, S.gn, S.oar0770],
      },
      noteSignature: {
        value: 'OAR 410-172-0620(4): "The record shall be annotated each time a service is provided and be signed or initialed by the individual providing the service." Records must show the service, its extent, the dates and "the individual who provided the service." The rule sets no signing deadline.',
        status: 'verified',
        cites: [S.oar0620],
      },
      placeOfService: {
        value: 'Not addressed in the OHA ABA rules read: OAR 410-172-0760/0770 and Guideline Note 75 name no permitted or excluded settings.',
        status: 'unverified',
        cites: [S.oar0760, S.oar0770, S.gn],
        verifyVia: 'OHA Provider Services, 800-336-6016: ask which place-of-service codes OHP accepts for ABA (home, clinic, community, school).',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Only a Licensed Behavior Analyst, a licensed health care professional whose scope includes ABA, or a declarant is "eligible for direct payment"; licensed assistant behavior analysts and registered interventionists are not (OAR 410-172-0760(3)–(4)). The fee schedule nonetheless lists BCaBA and BAI as rendering provider types on 97152–97154 (BCaBA also on 97155–97157), so their services are billed under an enrolled, directly payable provider. Claims carry the OHA provider number or NPI (OAR 410-120-1280).',
        status: 'verified',
        cites: [S.oar0760, S.fee, S.oar1280],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No upper age limit in OAR 410-172-0760/0770. Guideline Note 75 covers intensive ABA for ages 1–12 and only targeted ABA from 13, but OAR 410-172-0770(3) requires services beyond the guideline note when medically appropriate "including individuals age 13 and older," and under 21 the EPSDT guide bars using guideline notes "to determine coverage broadly or for an entire age group."',
        status: 'verified',
        cites: [S.oar0770, S.gn, S.epsdt],
      },
      dxRecency: {
        value: 'No recency rule for the ASD evaluation itself. The dated items are the physical exam (within 1 year for ages 1–6, 2 years for 6–18) and the hearing test (within 1 year for ages 2–5, 2 years for 6–18), which must be done before ABA starts but may not delay it (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.oar0770],
      },
      diagnosingProviders: {
        value: 'A licensed physician, psychologist, or nurse practitioner or physician associate specializing in developmental medicine, experienced in diagnosing and treating autism (OAR 410-172-0770(1), referring to 0760(1)). For stereotyped movement disorder with self-injury, a licensed practitioner trained or experienced in that condition.',
        status: 'verified',
        cites: [S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: '"Documentation of and results from a standardized, validated tool, such as the Autism Diagnostic Observation Schedule (ADOS)," plus developmental status on validated assessments "such as the Vineland" (OAR 410-172-0770(1)(b), (g)). Ongoing six-month assessments must use "standardized, validated and reliable assessment tools" (OAR 410-172-0760(5)).',
        status: 'verified',
        cites: [S.oar0770, S.oar0760],
      },
      referral: {
        value: STATE_REFERRAL + ' OHA’s contractor adds: "There must be a documented diagnosis and order from the physician."',
        status: 'verified',
        cites: [S.oar0770, S.oar0760, S.acentra],
      },
      telehealth: {
        value: STATE_TELE,
        status: 'verified',
        cites: [S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'OHA’s ABA rules set no decision clock. The federal fee-for-service floor applies: since January 1, 2026 the state agency must decide a standard request "in no case later than 7 calendar days after receiving the request" (extendable 14 days) and an expedited one within 72 hours (42 CFR 440.230(e)). CCO members follow OAR 410-141-3835: standard notice "no later than seven (7) calendar days following receipt," expedited within 72 hours, one 14-day extension.',
        status: 'verified',
        cites: [S.cfr440, S.oar3835, S.cfr438],
      },
      coordinationOfBenefits: {
        value: STATE_COB + ' OHA may pay once the provider has waited 30 days from submitting a clean claim to the other payer without payment (OAR 410-120-1280).',
        status: 'verified',
        cites: [S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Oregon Health Plan cover ABA therapy?', a: 'Yes, for autism spectrum disorder (Prioritized List Line 192, Guideline Note 75) and for stereotyped movement disorder with self-injurious behavior (Guideline Note 126). Most members get it through their CCO; open-card members go through OHA.' },
      { q: 'Does OHP require prior authorization for the ABA assessment?', a: 'Not for open-card members: OHA’s fee schedule exempts 97151 and 97152 from prior authorization (retrospective review). 97153–97157 need PA. CCOs set their own rules, so check the member’s CCO.' },
      { q: 'What does OHP pay for ABA?', a: 'The open-card schedule (published 7/1/2026) pays per 15 minutes: 97151 $20.85, 97152 $19.81, 97153 $14.70, 97154 $13.72, 97155 and 97156 $32.07, 97157 $8.68. CCOs pay contracted rates.' },
      { q: 'Does a BCBA need an Oregon license, and can a BCBA licensed in another state treat an OHP member by telehealth?', a: 'Oregon licenses behavior analysts through the Behavior Analysis Regulatory Board. OHP pays directly only a Licensed Behavior Analyst, a licensed health care professional, or a declarant, and the Oregon license rule has no reciprocity or telehealth exemption. Get an Oregon license before treating an Oregon member, including by telehealth.' },
      { q: 'Can OHP ABA be delivered by telehealth?', a: 'Yes. OAR 410-172-0850 covers behavioral health telemedicine "to the same extent" as in person, and OHA’s fee schedule allows modifier GT on every ABA code from 97151 to 97157.' },
      { q: 'What is the timely filing limit for OHP ABA claims?', a: 'Open card: 12 months from the date of service (OAR 410-120-1300). CCOs: 120 days from the date of service, or 365 days in listed exceptions such as other insurance (OAR 410-141-3565).' },
      { q: 'Does OHP cover ABA for teenagers?', a: 'Yes, case by case. Guideline Note 75 limits intensive ABA to ages 1–12, but OAR 410-172-0770(3) requires more when medically appropriate, including at 13 and older, and under 21 EPSDT bars age-group-wide denials.' },
    ],
  },

  'health-share-of-oregon': {
    slug: 'health-share-of-oregon',
    family: 'health-share',
    cardDesc: 'Portland-metro CCO; CareOregon runs its behavioral health UM: PA for the ABA assessment and treatment, ADOS/CARS-2, Medical Director review at 13+ or over 25 hours.',
    assessmentPA: {
      value: 'Yes. CareOregon’s BH UM handbook requires an ABA assessment authorization with clinical documentation showing the diagnosis and tool; for Health Share members it may be submitted with "TBD Behavioral Health Provider" as the rendering provider',
      status: 'verified',
      cites: [S.coUM],
    },
    treatmentPA: {
      value: 'Yes, via CareOregon Connect or fax, with a comprehensive treatment plan; units are requested for a six-month authorization by CPT code',
      status: 'verified',
      cites: [S.coUM, S.coBHPM],
    },
    dxRequired: {
      value: 'Yes: ASD or Stereotypic Movement Disorder diagnosed by an MD, DO, PhD or PsyD using ADOS or CARS-2 (or an educational diagnosis by one of them); other diagnoses go to Medical Director review',
      status: 'verified',
      cites: [S.coUM],
    },
    payer: 'Health Share of Oregon',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Health Share of Oregon',
    h1: 'Health Share of Oregon ABA coverage: the intake guide.',
    metaTitle: 'Health Share of Oregon ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Health Share of Oregon (Clackamas, Multnomah, Washington) covers ABA for OHP members: CareOregon behavioral health authorization for the assessment and treatment, diagnosis and tool requirements, Medical Director review triggers, 7-day decisions, and 120-day timely filing.',
    intro: [
      'Health Share of Oregon is the OHP coordinated care organization for Clackamas, Multnomah and Washington counties. Its specialty behavioral health benefit, ABA included, is administered by CareOregon: CareOregon’s Behavioral Health Utilization Management Procedure Handbook (July 2026) covers "members of Health Share of Oregon," and its Metro Area provider manual governs claims for Health Share behavioral health services.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules and Guideline Note 75' },
      { label: 'Service area', value: 'Clackamas, Multnomah and Washington counties' },
      { label: 'Prior auth', value: 'Assessment and treatment; six-month treatment authorizations' },
      { label: 'Review triggers', value: 'Age 13+ or more than 25 hours/week → CareOregon Medical Director' },
      { label: 'Decision clock', value: '7 calendar days standard, 72 hours expedited' },
      { label: 'Timely filing', value: '120 calendar days from date of service' },
    ],
    sections: [
      {
        h2: 'Who runs ABA for Health Share members',
        body: [
          'Health Share’s partner site points behavioral health providers to CareOregon’s guidelines, which "provide guidance for serving CareOregon/Health Share members." CareOregon’s Metro Area Behavioral Health Provider Manual (April 2026) lists Applied Behavioral Analysis among services that require a prior authorization from CareOregon, and since October 1, 2025 non-contracted providers also need one to start or continue ABA. Authorizations, eligibility and claims for Health Share behavioral health run through CareOregon Connect.',
        ],
        cites: [S.hsBH, S.coBHPM, S.coUM],
      },
      {
        h2: 'Authorization: what CareOregon asks for',
        body: [
          'CareOregon uses its practice guidelines with Guideline Note 75. ABA requires a diagnosis of ASD or Stereotypic Movement Disorder "by an MD, DO, PhD, or PsyD" using the ADOS, the CARS-2, or "An educational diagnosis conducted by an MD, DO, PhD, or PsyD"; other diagnoses need secondary review. "Authorization requests for members age 13 or older, or requests exceeding 25 treatment hours of service per week, require secondary review by a CareOregon Medical Director." Assessment requests carry the diagnosis and tool. Treatment requests must include a comprehensive plan: measurable goals with baseline data and dates, graphs, medical concerns, family and custody information, language and interpreter needs, barriers to treatment, the diagnosing clinician’s credentials and date of diagnosis, school and Early Intervention services, at least two measurable caregiver goals, prior ABA providers, all assessment data, and units for the full six-month authorization by CPT code. CareOregon decides standard requests within 7 calendar days and expedited ones within 72 hours. BH UM: 503-416-3404.',
        ],
        cites: [S.coUM],
      },
      {
        h2: 'Claims and other insurance',
        body: [
          'CareOregon requires valid behavioral health claims "within 120 calendar days of the date of service," with exceptions for retroactive eligibility and when Medicare or another third party is primary. Medicaid is the payer of last resort: providers "must bill all other insurance resources before billing Medicaid." The OHP rates and licensure rules in the Oregon Health Plan guide apply; Health Share and CareOregon contract their own rates.',
        ],
        cites: [S.coBHPM, S.oar3565],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Health Share (not another CCO or open card) on the date of service.' },
      { title: 'Diagnosis with tool', desc: 'ASD or Stereotypic Movement Disorder by an MD, DO, PhD or PsyD using ADOS or CARS-2; record the clinician’s credentials and date of diagnosis.' },
      { title: 'Age and hours', desc: 'Age 13+ or more than 25 hours a week triggers Medical Director review: prepare the justification.' },
      { title: 'School and other services', desc: 'IEP / Early Intervention, speech and OT hours, and any prior ABA providers.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; Medicaid is the payer of last resort.' },
    ],
    sources: [S.coUM, S.coBHPM, S.hsBH, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt, S.gn],
    deliveryRules: {
      supervision: {
        value: 'CareOregon’s handbook and manual publish no ABA supervision ratio of their own, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.coUM, S.oar0760, S.oar824sup, S.oar824def],
      },
      concurrentBilling: {
        value: 'Not addressed in CareOregon’s BH UM handbook or Metro BH provider manual; OHA publishes no rule either.',
        status: 'unverified',
        cites: [S.coUM, S.coBHPM],
        verifyVia: 'CareOregon Provider Customer Service, 800-224-4840 (option 3), or your CareOregon provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap, but requests "exceeding 25 treatment hours of service per week" require CareOregon Medical Director review, and units are requested for the whole six-month authorization by CPT code.',
        status: 'verified',
        cites: [S.coUM],
      },
      noteSignature: {
        value: 'CareOregon says documentation standards for its provider types are "available upon request" from cqssupport@careoregon.org. The OHP floor is OAR 410-172-0620(4): each service note "signed or initialed by the individual providing the service."',
        status: 'plan-dependent',
        cites: [S.coBHPM, S.oar0620],
        verifyVia: 'E-mail cqssupport@careoregon.org for CareOregon’s documentation standards for ABA providers.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Not addressed in CareOregon’s ABA guidance; the treatment plan must list school and Early Intervention services, but no setting rule is stated.',
        status: 'unverified',
        cites: [S.coUM],
        verifyVia: 'CareOregon BH UM, 503-416-3404: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'CareOregon publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment; assistant behavior analysts and interventionists are not (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.coUM, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age cap, but requests for members 13 or older require CareOregon Medical Director review. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.coUM, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'No recency rule; the treatment plan must give the diagnosing clinician’s credentials and the date of diagnosis for every listed diagnosis. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770).',
        status: 'verified',
        cites: [S.coUM, S.oar0770],
      },
      diagnosingProviders: {
        value: 'An MD, DO, PhD or PsyD.',
        status: 'verified',
        cites: [S.coUM],
      },
      diagnosticTools: {
        value: 'ADOS or CARS-2 (or an educational diagnosis by an MD, DO, PhD or PsyD).',
        status: 'verified',
        cites: [S.coUM],
      },
      referral: {
        value: 'CareOregon’s handbook adds no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.coUM, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'CareOregon’s ABA guidance publishes no telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.coUM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Standard requests "no later than 7 calendar days from receipt," expedited within 72 hours, and up to 14 more days when requested or when more information is needed. Reductions of ongoing services get at least 10 calendar days’ written notice.',
        status: 'verified',
        cites: [S.coUM, S.oar3835],
      },
      coordinationOfBenefits: {
        value: '"As Medicaid is the payer of last resort," providers "must bill all other insurance resources before billing Medicaid," and claims where Medicare or another third party is primary are an exception to the 120-day filing limit.',
        status: 'verified',
        cites: [S.coBHPM, S.oar1280],
      },
    },
    faq: [
      { q: 'Who authorizes ABA for Health Share of Oregon members?', a: 'CareOregon’s behavioral health utilization management team, through CareOregon Connect or fax (BH UM 503-416-3404).' },
      { q: 'Does Health Share require prior authorization for the ABA assessment?', a: 'Yes. Submit the diagnosis and the ADOS or CARS-2 results; for Health Share members the request may list "TBD Behavioral Health Provider" as the rendering provider.' },
      { q: 'When does a Health Share ABA request go to a Medical Director?', a: 'When the member is 13 or older, when more than 25 hours a week are requested, or when the diagnosis is something other than ASD or Stereotypic Movement Disorder.' },
      { q: 'What is the timely filing limit for Health Share behavioral health claims?', a: '120 calendar days from the date of service, with exceptions for retroactive eligibility and when another payer is primary.' },
    ],
  },

  'trillium-community-health-plan-oregon': {
    slug: 'trillium-community-health-plan-oregon',
    family: 'centene',
    cardDesc: 'Centene CCO for Lane and the Portland tri-county area: code-level PA tool, an ABA request checklist, 7-day decisions and 180-day dispute window.',
    assessmentPA: {
      value: 'Not stated in a document we could read: Trillium points to its real-time Pre-Authorization Check Tool for code-level rules. Its ABA checklist expects assessment units to be requested and asks for rationale above "the market standard of 8-10 hours for assessment/reassessment"',
      status: 'unverified',
      cites: [S.trilAuth, S.trilTip],
      verifyVia: 'Trillium Pre-Authorization Check Tool (trilliumohp.com → Providers) for 97151 and 97152, or Trillium Provider Services, 877-600-5472.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes: ABA treatment goes through Trillium’s prior-authorization process with its Applied Behavioral Analysis Outpatient Treatment Request Checklist (initial and ongoing requests)',
      status: 'verified',
      cites: [S.trilTip, S.trilAuth],
    },
    dxRequired: {
      value: 'Yes: Trillium’s checklist asks for a "Comprehensive diagnostic evaluation (typically within 0-5 years) indicating diagnosis eligible for ABA treatment," and its handbook reviews coverage first against the Prioritized List (ASD on Line 192 under OHP rules)',
      status: 'verified',
      cites: [S.trilTip, S.trilAuth, S.oar0770],
    },
    payer: 'Trillium Community Health Plan (Oregon)',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Trillium Community Health Plan · Oregon',
    h1: 'Trillium Community Health Plan ABA coverage in Oregon: the intake guide.',
    metaTitle: 'Trillium Community Health Plan (Oregon) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Trillium Community Health Plan covers ABA for OHP members in Lane, Clackamas, Multnomah and Washington counties: its ABA request checklist, the PA check tool, 7-day decisions, peer-to-peer timing, and claims dispute deadlines.',
    intro: [
      'Trillium Community Health Plan (Centene) is the OHP CCO for Lane County and one of two CCOs in Clackamas, Multnomah and Washington counties, plus parts of Douglas and Linn. Most Lane County members who were with PacificSource moved to Trillium on February 1, 2026. Trillium publishes an ABA request checklist and a service authorization handbook; code-level prior-authorization rules sit in its online PA check tool.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules; coverage reviewed first against the Prioritized List' },
      { label: 'Service area', value: 'Lane, Clackamas, Multnomah, Washington; parts of Douglas and Linn' },
      { label: 'Prior auth', value: 'Treatment: yes (ABA request checklist). Assessment: check the PA tool' },
      { label: 'Decision clock', value: '7 calendar days standard, 72 hours urgent' },
      { label: 'Peer-to-peer', value: 'Request within 48 hours / 2 business days of the notice' },
      { label: 'Claim disputes', value: '180 calendar days from the Explanation of Payment' },
    ],
    sections: [
      {
        h2: 'Authorization: the checklist and the handbook',
        body: [
          'Trillium’s Service Authorization Handbook says its "Pre-Authorization (PA) Check Tool ... indicates if an item or service currently requires prior authorization," and that determinations are "based on review of Oregon Health Plan (OHP) coverage, first regarding the funding per the Prioritized List, and then evaluated for medical appropriateness." Symptom codes "will not result in authorization approval," so use a condition code. Services must be furnished in no less amount, duration and scope than under OHP fee-for-service.',
          'For an initial ABA request, the checklist asks for the diagnostic evaluation and ABA recommendation, social, developmental and medical history, prior and current services (Early Intervention, IEP, OT, PT, speech), requested codes and dates, a proposed weekly schedule including school and naps, age-appropriate assessment data (VB-MAPP, ABLLS-R, AFLS, EFL and others), measurable goals with mastery criteria, operational definitions and baselines for behaviors targeted for reduction (with an FBA and BIP), caregiver-training goals, crisis, generalization and transition plans, a parent signature and the provider signature. Ongoing requests add progress on prior goals, barriers, attendance for member and caregivers, and how hours will be titrated. Assessment or reassessment above "the market standard of 8-10 hours" needs member-specific rationale.',
        ],
        cites: [S.trilAuth, S.trilTip],
      },
      {
        h2: 'Decisions, appeals and claims',
        body: [
          'Non-urgent pre-service decisions are made "within 7 calendar days of receipt of the request," with one extension of up to 14 days; urgent decisions within 72 hours. "Practitioners have 48 hours or 2 business days from date of notice to request peer-to-peer discussion." Trillium’s 2026 provider manual sets the claim-side deadline: "All corrected claims, requests for redetermination, or claim disputes must be received within 180 calendar days from the date of the Explanation of Payment." For initial claims, OHA’s CCO billing rule sets 120 days from the date of service (365 days for exceptions such as other insurance).',
        ],
        cites: [S.trilAuth, S.trilPM, S.oar3565],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Trillium on the date of service; Lane members moved from PacificSource on 2/1/2026.' },
      { title: 'Diagnostic evaluation', desc: 'Comprehensive evaluation, typically within 0–5 years, plus the ABA recommendation; must also meet OAR 410-172-0770.' },
      { title: 'Schedule and other services', desc: 'Weekly schedule with school, naps and other therapies; IEP and Early Intervention status.' },
      { title: 'Caregiver sign-off', desc: 'Parent signature showing participation in and understanding of the plan.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.trilAuth, S.trilTip, S.trilPM, S.trilRes, S.plans, S.lane, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt],
    deliveryRules: {
      supervision: {
        value: 'Trillium’s ABA checklist and handbook publish no supervision ratio, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.trilTip, S.trilAuth, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in Trillium’s ABA checklist, authorization handbook or 2026 provider manual.',
        status: 'unverified',
        cites: [S.trilTip, S.trilPM],
        verifyVia: 'Trillium Provider Services, 877-600-5472, or your Trillium participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap is published. Assessment or reassessment above 8–10 hours needs rationale, and a request must explain any gap between hours requested and the member’s availability.',
        status: 'verified',
        cites: [S.trilTip],
      },
      noteSignature: {
        value: 'Trillium’s checklist requires the caregiver’s and the provider’s signature on the treatment plan but no session-note rule. The OHP floor applies: each service note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.trilTip, S.oar0620],
      },
      placeOfService: {
        value: 'Not addressed beyond the checklist’s request for a full weekly schedule (school, other therapies) and school-transition planning for members in full-time ABA.',
        status: 'unverified',
        cites: [S.trilTip],
        verifyVia: 'Trillium Provider Services, 877-600-5472: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Trillium publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.trilTip, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Trillium publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.trilTip, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'Trillium’s checklist asks for a comprehensive diagnostic evaluation "typically within 0-5 years"; ongoing requests should include updated diagnostic testing if previously requested.',
        status: 'verified',
        cites: [S.trilTip],
      },
      diagnosingProviders: {
        value: 'Trillium asks for a recommendation "from a qualified provider" without naming types, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism (OAR 410-172-0770(1), 0760(1)).',
        status: 'verified',
        cites: [S.trilTip, S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'Trillium names treatment-planning tools (VB-MAPP, ABLLS-R, AFLS, EFL) but no diagnostic instrument, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status on assessments such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.trilTip, S.oar0770],
      },
      referral: {
        value: 'Trillium’s checklist asks for the ABA recommendation "from a qualified provider, if required." ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.trilTip, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'Trillium’s ABA documents publish no telehealth rule of their own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.trilTip, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Non-urgent pre-service decisions within 7 calendar days of receipt; urgent within 72 hours; one extension of up to 14 days. Peer-to-peer must be requested within 48 hours or 2 business days of the notice.',
        status: 'verified',
        cites: [S.trilAuth, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'Trillium’s documents read add nothing ABA-specific, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.trilPM, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Trillium cover ABA for OHP members in Lane County?', a: 'Yes. Trillium is the CCO for Lane County; most former PacificSource Lane members moved to Trillium on February 1, 2026.' },
      { q: 'What does Trillium need for an initial ABA request?', a: 'Its ABA checklist: diagnostic evaluation and recommendation, history, prior services, codes and dates, weekly schedule, assessment data, measurable goals, FBA/BIP for reduction targets, caregiver goals, crisis, generalization and transition plans, and parent and provider signatures.' },
      { q: 'How long does Trillium have to decide an ABA authorization?', a: '7 calendar days for standard requests and 72 hours for urgent ones, with one possible 14-day extension.' },
      { q: 'How long do I have to dispute a Trillium claim?', a: '180 calendar days from the date of the Explanation of Payment, for corrected claims, redeterminations and disputes.' },
    ],
  },

  'pacificsource-community-solutions-oregon': {
    slug: 'pacificsource-community-solutions-oregon',
    family: 'pacificsource',
    cardDesc: 'CCO for Central Oregon, Columbia Gorge and Marion-Polk with a written Medicaid ABA policy: no PA for 97151 up to 32 units, six-month treatment PAs.',
    assessmentPA: {
      value: 'Not for a standard assessment: PA "is not required if CPT code 97151 is billed for 32 or fewer units (8 hours or less)"; above 32 units, PA and MD review. 97152 above 16 units in 6 months goes to medical necessity review',
      status: 'verified',
      cites: [S.psABA],
    },
    treatmentPA: {
      value: 'Yes: "Prior Authorization is required for ABA services," requested in increments of up to six months; over 40 hours a week needs MD review',
      status: 'verified',
      cites: [S.psABA, S.psNews],
    },
    dxRequired: {
      value: 'Yes: an ASD diagnosis "listed on the ASD line" of the Prioritized List, or Stereotypic Movement Disorder with Self-Injurious Behavior; ABA is "experimental, investigational, or unproven" for other diagnoses',
      status: 'verified',
      cites: [S.psABA],
    },
    payer: 'PacificSource Community Solutions (Oregon)',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · PacificSource Community Solutions · Oregon',
    h1: 'PacificSource Community Solutions ABA coverage: the intake guide.',
    metaTitle: 'PacificSource Community Solutions (OHP) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How PacificSource Community Solutions covers ABA for OHP members in Central Oregon, the Columbia Gorge and Marion-Polk: its written Medicaid ABA policy, the 32-unit assessment threshold, six-month authorizations, MD review triggers, and what intake should collect.',
    intro: [
      'PacificSource Community Solutions is the OHP CCO for Central Oregon (Crook, Deschutes, Jefferson and northern Klamath), the Columbia Gorge (Hood River, Wasco) and Marion-Polk. It did not renew its Lane County contract after 2025. Unlike most CCOs, it publishes a written ABA clinical guideline with a separate Oregon Medicaid section, which says it "follows Guideline Notes 75 and 126 of the OHP Prioritized List of Health Services and OARs 410-172-0650, 410-172-0760, and 410-172-0770."',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: ASD and Stereotypic Movement Disorder with Self-Injurious Behavior' },
      { label: 'Service areas', value: 'Central Oregon, Columbia Gorge, Marion-Polk (Lane County ended after 2025)' },
      { label: 'Assessment PA', value: 'None for 97151 up to 32 units (8 hours); PA + MD review above that' },
      { label: 'Treatment PA', value: 'Required, up to six months per request' },
      { label: 'MD review', value: 'Over 40 hours/week of treatment, or over 32 units of 97151' },
      { label: 'Submit via', value: 'InTouch (preferred) or fax' },
    ],
    sections: [
      {
        h2: 'The Medicaid ABA policy',
        body: [
          'PacificSource’s guideline (operations approval March 2026, next review January 2027) sets the Medicaid rules. The assessment must be recommended and referred by a practitioner described in OAR 410-172-0760: a physician, psychologist, or developmental-medicine nurse practitioner or physician associate experienced in autism (or, for stereotyped movement disorder, a licensed practitioner trained in it). "For an initial assessment for ABA services, a prior authorization (PA) is not required if CPT code 97151 is billed for 32 or fewer units (8 hours or less)"; more than 32 units requires PA and MD review with the diagnosis and documentation of the intensity requested. 97152 supports but does not replace the QHP assessment, and requests above 16 units in six months need justification.',
          'Treatment requests run in increments of up to six months, with a 32-unit limit on 97151 per authorization. Coverage follows Guideline Notes 75 and 126 and the OARs, including an ASD diagnosis on the HERC ASD line and a treatment plan with a functional assessment from a licensed health care professional, a licensed behavior analyst or assistant behavior analyst, or a declarant. "Requests for over 40 hours per week of treatment require MD review." PacificSource announced in 2023 that, from January 1, 2024, its plans require prior authorization for 97151–97158, 0362T and 0373T, submitted through InTouch (preferred) or by fax.',
        ],
        cites: [S.psABA, S.psNews],
      },
    ],
    collect: [
      { title: 'Member ID and region', desc: 'Confirm PacificSource Community Solutions (Central Oregon, Columbia Gorge or Marion-Polk). Lane members are now with Trillium.' },
      { title: 'Referral', desc: 'From a physician, psychologist, or developmental-medicine NP/PA experienced in autism (OAR 410-172-0760).' },
      { title: 'Diagnosis', desc: 'ASD on the HERC ASD line, or Stereotypic Movement Disorder with Self-Injurious Behavior.' },
      { title: 'Treatment plan with functional assessment', desc: 'From an Oregon-licensed behavior analyst or other qualified licensee; requested in up to six-month increments.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.psABA, S.psNews, S.plans, S.lane, S.oar0760, S.oar0770, S.oar0650, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt, S.gn],
    deliveryRules: {
      supervision: {
        value: 'PacificSource’s commercial criteria require treatment "supervised and managed by a Board-Certified Behavior Analyst (BCBA)"; its Medicaid section adds no ratio, so the OHP rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.psABA, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in PacificSource’s ABA guideline.',
        status: 'unverified',
        cites: [S.psABA],
        verifyVia: 'PacificSource Community Solutions Provider Services (number on the member card) or your participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: '97151: up to 32 units per authorization without MD review (no PA at all for an initial assessment of 32 units or fewer); 97152 above 16 units in six months goes to review; treatment over 40 hours a week requires MD review. The commercial section states "ABA cannot exceed 40 hours (4,160 combined units) a week" (as printed).',
        status: 'verified',
        cites: [S.psABA],
      },
      noteSignature: {
        value: 'The guideline points to PacificSource’s Documentation Requirements for Health Practitioners policy (member identification, participants, problem list, measurable progress, treatment provided, follow-up plan) but sets no signature rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.psABA, S.oar0620],
      },
      placeOfService: {
        value: 'Not addressed in PacificSource’s ABA guideline.',
        status: 'unverified',
        cites: [S.psABA],
        verifyVia: 'PacificSource Community Solutions Provider Services: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'PacificSource publishes no rendering-provider rule; its Medicaid treatment plans must come from a licensed health care professional, licensed behavior analyst or assistant, or declarant. The OHP payment rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.psABA, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age limit in the Medicaid section; coverage follows Guideline Note 75 (intensive ABA for ages 1–12, targeted ABA from 13) and OAR 410-172-0770, which requires services beyond the guideline note when medically appropriate "including individuals age 13 and older." Under 21, EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.psABA, S.gn, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'PacificSource sets no recency rule. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.psABA, S.oar0770],
      },
      diagnosingProviders: {
        value: 'For Medicaid, the OAR 410-172-0760 practitioners: a physician, psychologist, or nurse practitioner or physician associate specializing in developmental medicine, experienced in autism.',
        status: 'verified',
        cites: [S.psABA, S.oar0760],
      },
      diagnosticTools: {
        value: 'The Medicaid section incorporates OAR 410-172-0770: a standardized, validated tool such as the ADOS and developmental status on assessments such as the Vineland. (The commercial section lists STAT, ADOS-2, ADI-R, CARS-2 and GARS-3.)',
        status: 'verified',
        cites: [S.psABA, S.oar0770],
      },
      referral: {
        value: 'Yes: ABA services must be "recommended and referred by a licensed practitioner as outlined in OAR 410-172-0760."',
        status: 'verified',
        cites: [S.psABA, S.oar0760],
      },
      telehealth: {
        value: 'PacificSource’s ABA guideline publishes no telehealth rule. ' + STATE_TELE,
        status: 'verified',
        cites: [S.psABA, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'PacificSource publishes no ABA-specific clock in its guideline. The CCO rule applies: notice "no later than seven (7) calendar days following receipt," expedited within 72 hours, one 14-day extension (OAR 410-141-3835).',
        status: 'verified',
        cites: [S.psABA, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'PacificSource’s ABA guideline adds nothing on other insurance, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.psABA, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does PacificSource Community Solutions require prior authorization for the ABA assessment?', a: 'Not if 97151 is billed for 32 units (8 hours) or fewer. Above 32 units it needs PA and MD review.' },
      { q: 'How long are PacificSource ABA authorizations?', a: 'Requests can be made in increments of up to six months.' },
      { q: 'Does PacificSource still cover OHP members in Lane County?', a: 'No. PacificSource did not renew its Lane County CCO contract after 2025; most Lane members moved to Trillium on February 1, 2026.' },
    ],
  },

  'jackson-care-connect': {
    slug: 'jackson-care-connect',
    family: 'careoregon',
    cardDesc: 'Jackson County CCO (CareOregon): ABA assessments approved without clinical documentation; treatment PA with a full plan; 7-day decisions.',
    assessmentPA: {
      value: 'An authorization is submitted, but CareOregon approves ABA assessment requests for JCC members "without the requirement of clinical documentation" (submit via Connect)',
      status: 'verified',
      cites: [S.coUM],
    },
    treatmentPA: {
      value: 'Yes, via CareOregon Connect or fax, with a comprehensive treatment plan and units for a six-month authorization; JCC also posts an ABA treatment authorization form',
      status: 'verified',
      cites: [S.coUM, S.jccForms, S.abaForm],
    },
    dxRequired: {
      value: 'Yes: ASD or Stereotypic Movement Disorder diagnosed by an MD, DO, PhD or PsyD using ADOS or CARS-2 (or an educational diagnosis by one of them)',
      status: 'verified',
      cites: [S.coUM],
    },
    payer: 'Jackson Care Connect',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Jackson Care Connect',
    h1: 'Jackson Care Connect ABA coverage: the intake guide.',
    metaTitle: 'Jackson Care Connect ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Jackson Care Connect covers ABA for OHP members in Jackson County: CareOregon behavioral health authorization, assessments approved without clinical documentation, treatment plan requirements, Medical Director review triggers and 7-day decisions.',
    intro: [
      'Jackson Care Connect is a CareOregon-affiliated OHP CCO for Jackson County. CareOregon’s Behavioral Health Utilization Management Procedure Handbook (July 2026) covers JCC members and carries a JCC- and Columbia Pacific-specific ABA rule: "Due to a smaller region and provider network, ABA assessment authorization requests ... are approved without the requirement of clinical documentation."',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules and Guideline Note 75' },
      { label: 'Service area', value: 'Jackson County' },
      { label: 'Assessment', value: 'Submit via Connect; approved without clinical documentation' },
      { label: 'Treatment PA', value: 'Required; six-month authorizations by CPT code' },
      { label: 'Review triggers', value: 'Age 13+ or more than 25 hours/week → Medical Director' },
      { label: 'Decision clock', value: '7 calendar days standard, 72 hours expedited' },
    ],
    sections: [
      {
        h2: 'Authorization through CareOregon',
        body: [
          'CareOregon applies its practice guidelines with Guideline Note 75. Treatment requests go through CareOregon Connect or fax with a documented ASD or Stereotypic Movement Disorder diagnosis (by an MD, DO, PhD or PsyD using ADOS, CARS-2, or an educational diagnosis) and a comprehensive plan: measurable goals with baseline data and graphs, medical concerns, family, custody and language information, barriers, the diagnosing clinician’s credentials and date of diagnosis, school and Early Intervention services, at least two measurable caregiver goals, prior ABA providers, assessment data, and units for the full six-month authorization. Members 13 or older and requests above 25 hours a week go to a CareOregon Medical Director. Standard decisions come within 7 calendar days, expedited within 72 hours. BH UM: 503-416-3404.',
          'JCC’s forms page still posts a 2019 "Treatment Authorization Form - Applied Behavioral Analysis Services," which asks for the assessment, goals, frequency, duration, prognosis and a caregiver participation signature. That form says determinations "will be made within 14 days"; the July 2026 handbook and OAR 410-141-3835 set 7 calendar days, so go by the handbook.',
        ],
        cites: [S.coUM, S.jccForms, S.abaForm, S.oar3835],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Jackson Care Connect (AllCare CCO also serves Jackson County).' },
      { title: 'Diagnosis with tool', desc: 'ASD or Stereotypic Movement Disorder by an MD, DO, PhD or PsyD using ADOS or CARS-2.' },
      { title: 'Caregiver participation', desc: 'JCC’s ABA form asks the caregiver to sign a participation commitment.' },
      { title: 'Age and hours', desc: 'Age 13+ or more than 25 hours a week triggers Medical Director review.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.coUM, S.jccForms, S.abaForm, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt],
    deliveryRules: {
      supervision: {
        value: 'CareOregon publishes no ABA supervision ratio, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.coUM, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in CareOregon’s BH UM handbook or JCC’s ABA form.',
        status: 'unverified',
        cites: [S.coUM, S.abaForm],
        verifyVia: 'CareOregon Provider Customer Service, 800-224-4840 (option 3), or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; requests above 25 treatment hours a week require Medical Director review, and units are requested per six-month authorization by CPT code.',
        status: 'verified',
        cites: [S.coUM],
      },
      noteSignature: {
        value: 'CareOregon’s handbook sets no session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.coUM, S.oar0620],
      },
      placeOfService: {
        value: 'Not addressed; the treatment plan must list school and Early Intervention services, but no setting rule is stated.',
        status: 'unverified',
        cites: [S.coUM],
        verifyVia: 'CareOregon BH UM, 503-416-3404: ask which settings and place-of-service codes JCC pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'CareOregon publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.coUM, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age cap; requests for members 13 or older require Medical Director review. OHP rules require ABA beyond Guideline Note 75 when medically appropriate, including at 13 and older, and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.coUM, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'No recency rule; the plan must give the diagnosing clinician’s credentials and date of diagnosis. JCC’s ABA form asks for the date of diagnosis and whether it is provisional.',
        status: 'verified',
        cites: [S.coUM, S.abaForm],
      },
      diagnosingProviders: {
        value: 'An MD, DO, PhD or PsyD.',
        status: 'verified',
        cites: [S.coUM],
      },
      diagnosticTools: {
        value: 'ADOS or CARS-2 (or an educational diagnosis by an MD, DO, PhD or PsyD).',
        status: 'verified',
        cites: [S.coUM],
      },
      referral: {
        value: 'CareOregon adds no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.coUM, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'CareOregon’s ABA guidance publishes no telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.coUM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Standard requests within 7 calendar days of receipt, expedited within 72 hours, up to 14 more days on extension (CareOregon handbook, July 2026). The older JCC/CPCCO ABA form still prints "within 14 days."',
        status: 'verified',
        cites: [S.coUM, S.abaForm, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'CareOregon’s handbook adds nothing on other insurance for JCC, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.coUM, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Jackson Care Connect require prior authorization for the ABA assessment?', a: 'Submit an authorization through CareOregon Connect, but CareOregon approves JCC assessment requests without requiring clinical documentation.' },
      { q: 'How fast does JCC decide an ABA request?', a: 'CareOregon’s July 2026 handbook sets 7 calendar days for standard requests and 72 hours for expedited ones. The older JCC ABA form’s 14-day figure is out of date.' },
      { q: 'Who reviews JCC ABA requests for teenagers?', a: 'A CareOregon Medical Director reviews requests for members 13 or older and requests above 25 hours a week.' },
    ],
  },

  'columbia-pacific-cco': {
    slug: 'columbia-pacific-cco',
    family: 'careoregon',
    cardDesc: 'Clatsop/Columbia/Tillamook CCO (CareOregon): ABA assessments approved without clinical documentation; treatment PA; 7-day decisions.',
    assessmentPA: {
      value: 'An authorization is submitted, but CareOregon approves ABA assessment requests for CPCCO members "without the requirement of clinical documentation" (submit via Connect)',
      status: 'verified',
      cites: [S.coUM],
    },
    treatmentPA: {
      value: 'Yes, via CareOregon Connect or fax, with a comprehensive treatment plan and units for a six-month authorization; CPCCO also posts an ABA treatment authorization form',
      status: 'verified',
      cites: [S.coUM, S.cpForms],
    },
    dxRequired: {
      value: 'Yes: ASD or Stereotypic Movement Disorder diagnosed by an MD, DO, PhD or PsyD using ADOS or CARS-2 (or an educational diagnosis by one of them)',
      status: 'verified',
      cites: [S.coUM],
    },
    payer: 'Columbia Pacific CCO',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Columbia Pacific CCO',
    h1: 'Columbia Pacific CCO ABA coverage: the intake guide.',
    metaTitle: 'Columbia Pacific CCO ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Columbia Pacific CCO covers ABA for OHP members in Clatsop, Columbia and Tillamook counties: CareOregon behavioral health authorization, assessments approved without clinical documentation, treatment plan requirements and 7-day decisions.',
    intro: [
      'Columbia Pacific CCO (CPCCO) is a CareOregon-affiliated OHP CCO for Clatsop, Columbia and Tillamook counties. CareOregon’s Behavioral Health Utilization Management Procedure Handbook (July 2026) covers CPCCO members, and CPCCO’s forms page links that handbook and an ABA treatment authorization form.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules and Guideline Note 75' },
      { label: 'Service area', value: 'Clatsop, Columbia and Tillamook counties' },
      { label: 'Assessment', value: 'Submit via Connect; approved without clinical documentation' },
      { label: 'Treatment PA', value: 'Required; six-month authorizations by CPT code' },
      { label: 'Review triggers', value: 'Age 13+ or more than 25 hours/week → Medical Director' },
      { label: 'Decision clock', value: '7 calendar days standard, 72 hours expedited' },
    ],
    sections: [
      {
        h2: 'Authorization through CareOregon',
        body: [
          'The rules are the same CareOregon rules that apply in Jackson County. Assessment authorizations for CPCCO members are "approved without the requirement of clinical documentation" because of the smaller region and provider network. Treatment requests need a documented ASD or Stereotypic Movement Disorder diagnosis by an MD, DO, PhD or PsyD using ADOS, CARS-2 or an educational diagnosis, and a comprehensive plan with baseline data and graphs, caregiver goals, school and Early Intervention services, the diagnosing clinician’s credentials and date of diagnosis, prior ABA providers, assessment data and six-month units by code. Members 13 or older and requests over 25 hours a week go to a CareOregon Medical Director. Standard decisions within 7 calendar days, expedited within 72 hours. BH UM: 503-416-3404.',
          'CPCCO’s posted ABA form is the 2019 JCC/CPCCO treatment authorization form, which still prints a 14-day determination window; the July 2026 handbook and OAR 410-141-3835 set 7 calendar days.',
        ],
        cites: [S.coUM, S.cpForms, S.abaForm, S.oar3835],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Columbia Pacific CCO on the date of service.' },
      { title: 'Diagnosis with tool', desc: 'ASD or Stereotypic Movement Disorder by an MD, DO, PhD or PsyD using ADOS or CARS-2.' },
      { title: 'Caregiver participation', desc: 'The ABA form asks the caregiver to sign a participation commitment.' },
      { title: 'Age and hours', desc: 'Age 13+ or more than 25 hours a week triggers Medical Director review.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.coUM, S.cpForms, S.abaForm, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt],
    deliveryRules: {
      supervision: {
        value: 'CareOregon publishes no ABA supervision ratio, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.coUM, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in CareOregon’s BH UM handbook or the CPCCO ABA form.',
        status: 'unverified',
        cites: [S.coUM, S.abaForm],
        verifyVia: 'CareOregon Provider Customer Service, 800-224-4840 (option 3), or your provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap; requests above 25 treatment hours a week require Medical Director review, and units are requested per six-month authorization by CPT code.',
        status: 'verified',
        cites: [S.coUM],
      },
      noteSignature: {
        value: 'CareOregon’s handbook sets no session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.coUM, S.oar0620],
      },
      placeOfService: {
        value: 'Not addressed in CareOregon’s ABA guidance.',
        status: 'unverified',
        cites: [S.coUM],
        verifyVia: 'CareOregon BH UM, 503-416-3404: ask which settings and place-of-service codes CPCCO pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'CareOregon publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.coUM, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'No age cap; requests for members 13 or older require Medical Director review. OHP rules require ABA beyond Guideline Note 75 when medically appropriate, including at 13 and older, and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.coUM, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'No recency rule; the plan must give the diagnosing clinician’s credentials and date of diagnosis.',
        status: 'verified',
        cites: [S.coUM],
      },
      diagnosingProviders: {
        value: 'An MD, DO, PhD or PsyD.',
        status: 'verified',
        cites: [S.coUM],
      },
      diagnosticTools: {
        value: 'ADOS or CARS-2 (or an educational diagnosis by an MD, DO, PhD or PsyD).',
        status: 'verified',
        cites: [S.coUM],
      },
      referral: {
        value: 'CareOregon adds no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.coUM, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'CareOregon’s ABA guidance publishes no telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.coUM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Standard requests within 7 calendar days of receipt, expedited within 72 hours, up to 14 more days on extension (CareOregon handbook, July 2026).',
        status: 'verified',
        cites: [S.coUM, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'CareOregon’s handbook adds nothing on other insurance for CPCCO, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.coUM, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Columbia Pacific CCO require prior authorization for the ABA assessment?', a: 'Submit an authorization through CareOregon Connect; CareOregon approves CPCCO assessment requests without requiring clinical documentation.' },
      { q: 'Who handles Columbia Pacific ABA authorizations?', a: 'CareOregon’s behavioral health utilization management team (503-416-3404).' },
    ],
  },

  'intercommunity-health-network-cco': {
    slug: 'intercommunity-health-network-cco',
    family: 'ihn-cco',
    cardDesc: 'Benton/Lincoln/Linn CCO (Samaritan): every ABA code including 97151 on the 2026 PA code list; ABA rates kept at or above OHA FFS.',
    assessmentPA: {
      value: 'Yes: IHN’s 2026 Prior Authorization Code List puts 97151 and 97152 under "Applied Behavioral therapy (ABA) services," and the 2026 Prior Approval List requires prior approval for ABA services',
      status: 'verified',
      cites: [S.ihnCodes, S.ihnPAL],
    },
    treatmentPA: {
      value: 'Yes: 97153–97157 (and 99366/99368) are on the same 2026 code list',
      status: 'verified',
      cites: [S.ihnCodes, S.ihnPAL],
    },
    dxRequired: {
      value: 'Yes. IHN reviews against the Prioritized List, guideline notes and OARs and publishes no ABA criteria of its own, so the OHP rule applies: ASD on the HERC ASD line or stereotyped movement disorder with self-injury (OAR 410-172-0770)',
      status: 'verified',
      cites: [S.ihnUM, S.oar0770, S.gn],
    },
    payer: 'InterCommunity Health Network CCO (IHN-CCO)',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · InterCommunity Health Network CCO',
    h1: 'InterCommunity Health Network CCO ABA coverage: the intake guide.',
    metaTitle: 'InterCommunity Health Network CCO (IHN) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How IHN-CCO covers ABA for OHP members in Benton, Lincoln and Linn counties: prior approval for every ABA code including the assessment, review criteria, decision timeframes, and its ABA minimum fee schedule.',
    intro: [
      'InterCommunity Health Network CCO (IHN-CCO), administered by Samaritan Health Plans, serves OHP members in Benton, Lincoln and Linn counties. Its 2026 Prior Approval List names "Applied behavioral therapy (ABA) services," and its 2026 code list spells out the codes, so the assessment needs approval here.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules' },
      { label: 'Service area', value: 'Benton, Lincoln and Linn counties' },
      { label: 'Prior auth', value: 'All ABA codes, 97151–97157 (plus 99366/99368), per the 2026 code list' },
      { label: 'Review criteria', value: 'Prioritized List, guideline notes, OARs, plan policies, MCG' },
      { label: 'Rates', value: 'ABA fee schedule kept no lower than OHA’s FFS behavioral health rate (directed payment)' },
      { label: 'Decision clock', value: 'Handbook (2025) prints 14 days; OAR 410-141-3835 now sets 7' },
    ],
    sections: [
      {
        h2: 'Prior approval and review criteria',
        body: [
          'IHN-CCO’s 2026 Prior Approval List includes "Applied behavioral therapy (ABA) services," and the IHN Prior Authorization List Code List (effective January 1, 2026) lists under that heading 97151, 97152, 97153, 97154, 97155, 97156 and 97157, plus the team-conference codes 99366 and 99368. Samaritan’s Utilization Management and Service Authorization Handbook (2025) lists its criteria sources: the OHA Prioritized List, guideline notes, Oregon Administrative Rules, statutes, Samaritan coverage policies and MCG guidelines. That handbook prints IHN-CCO timeframes of 14 days standard and 72 hours expedited; OAR 410-141-3835, effective July 1, 2026, requires CCO notice within 7 calendar days for standard requests.',
          'On rates, Samaritan’s behavioral health provider page says that under OHA’s 2023 directed payment IHN-CCO "will adopt/maintain the fee schedule for A&D Residential, Applied Behavior Analysis and Mental Health Children’s Wraparound services at no lower than the OHA State Plan Medicaid Behavioral Health Fee-For-Service fee schedule rate in effect at the date of service," and that its contracts carry "lesser of billed charges" language, so bill at a rate that captures any increase. ' + OR_FEE_LINE,
        ],
        cites: [S.ihnPAL, S.ihnCodes, S.ihnUM, S.oar3835, S.ihnBH, S.fee],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm IHN-CCO (Benton, Lincoln or Linn county) on the date of service.' },
      { title: 'Prior approval for the assessment', desc: '97151 and 97152 are on IHN’s 2026 PA code list: request approval before assessing.' },
      { title: 'Diagnostic evaluation and referral', desc: 'Meets OAR 410-172-0770; referral from a physician, psychologist, or developmental-medicine NP/PA.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.ihnPAL, S.ihnCodes, S.ihnUM, S.ihnBH, S.ihnAuth, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt, S.gn],
    deliveryRules: {
      supervision: {
        value: 'IHN publishes no ABA supervision rule, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.ihnPAL, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in IHN’s prior approval list, code list or UM handbook.',
        status: 'unverified',
        cites: [S.ihnCodes, S.ihnUM],
        verifyVia: 'Samaritan Health Plans provider services for IHN-CCO, or your IHN-CCO contract.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'IHN publishes no ABA unit or hour limit.',
        status: 'unverified',
        cites: [S.ihnCodes, S.ihnUM],
        verifyVia: 'Samaritan Health Plans care management (IHN-CCO authorizations): ask how ABA units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'IHN publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.ihnUM, S.oar0620],
      },
      placeOfService: {
        value: 'IHN publishes no ABA setting rule.',
        status: 'unverified',
        cites: [S.ihnCodes],
        verifyVia: 'Samaritan Health Plans provider services for IHN-CCO: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'IHN publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.ihnCodes, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'IHN publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.ihnUM, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'IHN publishes no recency rule. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.ihnUM, S.oar0770],
      },
      diagnosingProviders: {
        value: 'IHN publishes nothing different, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism (OAR 410-172-0770(1), 0760(1)).',
        status: 'verified',
        cites: [S.ihnUM, S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'IHN publishes nothing different, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status on assessments such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.ihnUM, S.oar0770],
      },
      referral: {
        value: 'IHN adds no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.ihnUM, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'IHN publishes no ABA telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.ihnUM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Samaritan’s 2025 UM handbook prints IHN-CCO timeframes of 72 hours expedited and 14 days standard. OAR 410-141-3835 (effective July 1, 2026) requires CCO notice "no later than seven (7) calendar days following receipt," so expect 7.',
        status: 'plan-dependent',
        cites: [S.ihnUM, S.oar3835],
        verifyVia: 'Samaritan Health Plans care management for IHN-CCO: confirm the current standard decision timeframe.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'IHN’s documents read add nothing ABA-specific, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.ihnUM, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does IHN-CCO require prior authorization for the ABA assessment?', a: 'Yes. IHN’s 2026 code list includes 97151 and 97152 under ABA services, so request approval before the assessment.' },
      { q: 'What does IHN-CCO pay for ABA?', a: 'Contracted rates, which IHN says it keeps no lower than the OHA fee-for-service behavioral health rate for ABA. The OHA open-card rate for 97153 is $14.70 per 15 minutes.' },
    ],
  },

  'umpqua-health-alliance': {
    slug: 'umpqua-health-alliance',
    family: 'umpqua-health',
    cardDesc: 'Douglas County CCO: ABA on its behavioral health PA list with six-month authorizations; InterQual plus the Prioritized List; 90-day retro window.',
    assessmentPA: {
      value: 'Not settled by the FAQ: it lists Applied Behavior Analysis among behavioral health services requiring PA, and code-level rules sit in the online Prior Authorization Grid',
      status: 'unverified',
      cites: [S.uhaFAQ],
      verifyVia: 'Umpqua Health Alliance Prior Authorization Grid (umpquahealth.com/prior_authorizations) for 97151 and 97152, or 541-672-1685 / PriorAuthorizations@umpquahealth.com.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Yes: ABA is listed as an in-network behavioral health service requiring PA, authorized for six months at a time',
      status: 'verified',
      cites: [S.uhaFAQ],
    },
    dxRequired: {
      value: 'Yes. Umpqua reviews against the Prioritized List and its guideline notes (with InterQual) and publishes no ABA criteria of its own, so the OHP rule applies: ASD on the HERC ASD line or stereotyped movement disorder with self-injury (OAR 410-172-0770)',
      status: 'verified',
      cites: [S.uhaFAQ, S.oar0770, S.gn],
    },
    payer: 'Umpqua Health Alliance',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Umpqua Health Alliance',
    h1: 'Umpqua Health Alliance ABA coverage: the intake guide.',
    metaTitle: 'Umpqua Health Alliance ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Umpqua Health Alliance covers ABA for OHP members in Douglas County: ABA on the behavioral health prior-authorization list, six-month authorizations, CIM portal submission, review criteria, retro requests and other-insurance rules.',
    intro: [
      'Umpqua Health Alliance is the OHP CCO for Douglas County (except a few ZIP codes served by other CCOs). Its behavioral health prior-authorization FAQ (February 2026) lists Applied Behavior Analysis among the services that need prior authorization even in network, with six-month authorization periods.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules' },
      { label: 'Service area', value: 'Douglas County (not ZIPs 97441, 97467, 97473)' },
      { label: 'Prior auth', value: 'ABA requires PA, in network and out; six-month authorizations' },
      { label: 'Submit via', value: 'CIM provider portal (in network); fax 541-677-5881 (out of network)' },
      { label: 'Retro requests', value: 'Reviewed up to 90 days from the date of service' },
      { label: 'Decision clock', value: 'Per OAR 410-141-3835 (7 days standard, 72 hours expedited)' },
    ],
    sections: [
      {
        h2: 'Prior authorization at Umpqua',
        body: [
          'The FAQ says "No PA required for in-network Behavioral Health services unless listed," and lists Applied Behavior Analysis with ECT, TMS and intensive in-home treatment; all out-of-network requests need PA. ECT, ABA and TMS are authorized for six months. In-network providers submit through the CIM portal; out-of-network providers fax the UHA PA form with documentation to 541-677-5881. A single case agreement is needed only to be paid above the Oregon Medicaid behavioral health fee schedule; without a stated rate, a PA "will be reviewed and evaluated at DMAP rates." Retro requests are reviewed "up to 90 days from the date of service."',
          'Umpqua reviews requests against the Prioritized List and its guideline notes, InterQual, the OARs, UpToDate and its clinical practice guidelines, and decides within OAR 410-141-3835’s timeframes; a decision not made in time "shall constitute a denial." When Umpqua is the secondary payer, "a PA is not required if the primary insurance authorization guidelines are met."',
        ],
        cites: [S.uhaFAQ, S.oar3835, S.plans],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Umpqua Health Alliance; some Douglas ZIP codes are served by AllCare or Trillium.' },
      { title: 'Diagnostic evaluation and referral', desc: 'Meets OAR 410-172-0770; referral from a physician, psychologist, or developmental-medicine NP/PA.' },
      { title: 'Rate expectation', desc: 'Requests without a stated rate are reviewed at the OHA (DMAP) rate; ask for an SFA/SCA if you need more.' },
      { title: 'Other insurance', desc: 'If commercial is primary and its auth rules are met, Umpqua does not require its own PA.' },
    ],
    sources: [S.uhaFAQ, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt, S.gn],
    deliveryRules: {
      supervision: {
        value: 'Umpqua publishes no ABA supervision rule, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in Umpqua’s behavioral health PA FAQ.',
        status: 'unverified',
        cites: [S.uhaFAQ],
        verifyVia: 'Umpqua Health Alliance provider services, or your UHA participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Umpqua publishes no ABA unit or hour cap; ABA is authorized in six-month periods and reviewed with InterQual and the guideline notes.',
        status: 'unverified',
        cites: [S.uhaFAQ],
        verifyVia: 'Umpqua prior authorizations, 541-672-1685: ask how ABA units are set within the six-month authorization.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Umpqua publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0620],
      },
      placeOfService: {
        value: 'Umpqua publishes no ABA setting rule.',
        status: 'unverified',
        cites: [S.uhaFAQ],
        verifyVia: 'Umpqua provider services: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Umpqua publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Umpqua publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'Umpqua publishes no recency rule. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0770],
      },
      diagnosingProviders: {
        value: 'Umpqua publishes nothing different, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism (OAR 410-172-0770(1), 0760(1)).',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'Umpqua publishes nothing different, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status on assessments such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0770],
      },
      referral: {
        value: 'Umpqua adds no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'Umpqua publishes no ABA telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.uhaFAQ, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Umpqua decides within OAR 410-141-3835’s timeframes, and a decision not reached in time "shall constitute a denial." The rule sets notice within 7 calendar days for standard requests and 72 hours for expedited, with one 14-day extension.',
        status: 'verified',
        cites: [S.uhaFAQ, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'When Umpqua is secondary, "a PA is not required if the primary insurance authorization guidelines are met" (pharmacy claims over $50 excepted). ' + STATE_COB,
        status: 'verified',
        cites: [S.uhaFAQ, S.oar1280],
      },
    },
    faq: [
      { q: 'Does Umpqua Health Alliance require prior authorization for ABA?', a: 'Yes. ABA is on its behavioral health PA list, in network and out, with six-month authorizations. Check the PA Grid for the assessment codes.' },
      { q: 'What if Umpqua is the secondary insurance?', a: 'Umpqua does not require its own PA when the primary insurer’s authorization guidelines are met.' },
      { q: 'Can I get a retro authorization from Umpqua?', a: 'Umpqua reviews retro requests up to 90 days from the date of service; later requests go through the provider appeal process.' },
    ],
  },

  'eastern-oregon-cco': {
    slug: 'eastern-oregon-cco',
    family: 'eocco',
    cardDesc: '12-county eastern Oregon CCO (Moda/GOBHI): every ABA code 97151–97158 on the September 2026 PA list; GOBHI runs an ABA program with a PCP-prescription front door.',
    assessmentPA: {
      value: 'Yes: EOCCO’s Prior Authorization List (September 2026) lists 97151 through 97158 "Applied Behavior Analysis for Autism Spectrum Disorder"',
      status: 'verified',
      cites: [S.eoPA],
    },
    treatmentPA: {
      value: 'Yes: the same list covers 97153–97158; behavioral health authorization requests go to GOBHI by fax (541-296-1036) or secure e-mail (um@gobhi.org)',
      status: 'verified',
      cites: [S.eoPA, S.eoBH],
    },
    dxRequired: {
      value: 'Yes: before services start, GOBHI’s ABA program needs a "Diagnosis from a medical professional (MD, FNP, Psychiatrist with experience in the diagnosis of ASD in children)"',
      status: 'verified',
      cites: [S.eoPM],
    },
    payer: 'Eastern Oregon CCO (EOCCO)',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Eastern Oregon CCO',
    h1: 'Eastern Oregon CCO ABA coverage: the intake guide.',
    metaTitle: 'Eastern Oregon CCO (EOCCO) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Eastern Oregon CCO covers ABA for OHP members in 12 eastern Oregon counties: prior authorization for every ABA code, GOBHI’s ABA program and its diagnosis, prescription and screening requirements, 7-day decisions and 120-day timely filing.',
    intro: [
      'Eastern Oregon Coordinated Care Organization (EOCCO) serves OHP members in Baker, Gilliam, Grant, Harney, Lake, Malheur, Morrow, Sherman, Umatilla, Union, Wallowa and Wheeler counties. Moda Health administers the plan; Greater Oregon Behavioral Health, Inc. (GOBHI) handles behavioral health authorizations and runs an Applied Behavior Analysis program for children with autism.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes: GOBHI’s ABA program for children with ASD, under OHP rules' },
      { label: 'Service area', value: '12 eastern Oregon counties' },
      { label: 'Prior auth', value: 'All ABA codes, 97151–97158 (September 2026 list)' },
      { label: 'Front door', value: 'Diagnosis (MD, FNP or psychiatrist), PCP prescription, well-child visits, hearing and vision screening' },
      { label: 'Decision clock', value: '7 calendar days (plus up to 14)' },
      { label: 'Timely filing', value: '120 days from the date of service' },
    ],
    sections: [
      {
        h2: 'GOBHI’s ABA program and the authorization path',
        body: [
          'EOCCO’s 2026 provider manual describes "GOBHI’s Applied Behavior Analysis (ABA) Program," which "offers comprehensive medically necessary ABA treatment services to children diagnosed with Autism Spectrum Disorder (ASD)," with parent coaching and 1:1 teaching. Before services start it requires: "1. Diagnosis from a medical professional (MD, FNP, Psychiatrist with experience in the diagnosis of ASD in children); 2. Primary Care Physician writes prescription for ABA therapy; and 3. Collect necessary documentation: well child visits, audio and vision screening, diagnosis paperwork." Referrals "can be made by any provider and/or individual" through gobhi.org/applied-behavior-analysis; GOBHI then reports waitlist placement or schedules the initial assessment.',
          'EOCCO’s Prior Authorization List (September 2026) includes 97151, 97152, 97153, 97154, 97155, 97156, 97157 and 97158. Behavioral health authorization requests go to GOBHI by fax to 541-296-1036 or secure e-mail to um@gobhi.org with the assessment, treatment plan and progress notes. EOCCO notifies providers of an approval, denial or need for information "within 7 calendar days of receipt of the request," with up to 14 more days when justified. Retroactive authorization requires the request "within ninety (90) days of the date of service." Claims must be received "within 120 days of the date of service," with listed exceptions.',
        ],
        cites: [S.eoPM, S.eoPA, S.eoBH, S.eoAuth],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm EOCCO on the date of service.' },
      { title: 'Diagnosis', desc: 'From an MD, FNP or psychiatrist experienced in diagnosing ASD in children; also meet OAR 410-172-0770.' },
      { title: 'PCP prescription', desc: 'GOBHI requires the primary care physician to prescribe ABA.' },
      { title: 'Well-child, hearing and vision', desc: 'Well-child visit records plus audio and vision screening.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.eoPM, S.eoPA, S.eoBH, S.eoAuth, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt],
    deliveryRules: {
      supervision: {
        value: 'EOCCO and GOBHI publish no ABA supervision ratio, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.eoPM, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in EOCCO’s provider manual or PA list.',
        status: 'unverified',
        cites: [S.eoPM],
        verifyVia: 'GOBHI utilization management, 541-298-2101, or EOCCO provider services (888-788-9821).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'EOCCO publishes no ABA unit or hour limit.',
        status: 'unverified',
        cites: [S.eoPM, S.eoPA],
        verifyVia: 'GOBHI utilization management, 541-298-2101: ask how ABA units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'EOCCO publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.eoPM, S.oar0620],
      },
      placeOfService: {
        value: 'EOCCO publishes no ABA setting rule.',
        status: 'unverified',
        cites: [S.eoPM],
        verifyVia: 'GOBHI ABA program (gobhi.org/applied-behavior-analysis): ask which settings it serves and pays.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'EOCCO publishes no ABA rendering-provider rule; its BH authorization form asks for the provider’s billing NPI. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.eoBH, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'GOBHI describes the program as serving children with ASD but states no age cut-off. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.eoPM, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'No recency rule for the diagnosis. GOBHI asks for well-child visit records and audio and vision screening; the OHP rule dates the physical exam (1 year for ages 1–6, 2 years for 6–18) and hearing test (1 year for 2–5, 2 years for 6–18).',
        status: 'verified',
        cites: [S.eoPM, S.oar0770],
      },
      diagnosingProviders: {
        value: 'An MD, FNP or psychiatrist "with experience in the diagnosis of ASD in children" (GOBHI). OHP’s rule lists a physician, psychologist, or developmental-medicine NP or PA (OAR 410-172-0770(1)).',
        status: 'verified',
        cites: [S.eoPM, S.oar0770],
      },
      diagnosticTools: {
        value: 'EOCCO names no instrument, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status on assessments such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.eoPM, S.oar0770],
      },
      referral: {
        value: 'Yes: the "Primary Care Physician writes prescription for ABA therapy." Referrals to the program can come from any provider or individual through gobhi.org.',
        status: 'verified',
        cites: [S.eoPM],
      },
      telehealth: {
        value: 'EOCCO’s current documents publish no ABA telehealth rule of their own (its posted telemedicine overview dates from 2020). ' + STATE_TELE,
        status: 'verified',
        cites: [S.eoPM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'EOCCO notifies providers of an approval, denial or need for more information "within 7 calendar days of receipt of the request," and may take 14 more calendar days with justification to OHA.',
        status: 'verified',
        cites: [S.eoPM, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'EOCCO’s manual adds only that it will seek a refund when a third-party carrier paid, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.eoPM, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Who provides ABA for Eastern Oregon CCO members?', a: 'GOBHI runs an ABA program for EOCCO children with autism; referrals go through gobhi.org/applied-behavior-analysis.' },
      { q: 'Does EOCCO require prior authorization for ABA?', a: 'Yes. Its September 2026 Prior Authorization List includes every ABA code from 97151 to 97158.' },
      { q: 'What does EOCCO need before ABA starts?', a: 'A diagnosis from an MD, FNP or psychiatrist experienced with ASD in children, a PCP prescription for ABA, well-child visit records, and audio and vision screening.' },
    ],
  },

  'yamhill-community-care': {
    slug: 'yamhill-community-care',
    family: 'yamhill-community-care',
    cardDesc: 'Yamhill County CCO: PA on 97151–97156, 97158, 0362T, 0373T; its own ABA PA form caps the initial 97151 at 32 units and asks for program setting.',
    assessmentPA: {
      value: 'Yes: YCCO’s PA list (as of 1/29/2026) carries 97151, 97152 and 0362T as active "Applied Behavioral Analysis" codes, and its ABA form has an "Initial Assessment" request type (97151 up to 32 units initial, 24 for reassessment)',
      status: 'verified',
      cites: [S.ycList, S.ycABA],
    },
    treatmentPA: {
      value: 'Yes: 97153–97156, 97158 and 0373T are on the PA list; requests use the YCCO ABA PA form with a complete treatment plan (97157 is not on the list)',
      status: 'verified',
      cites: [S.ycList, S.ycABA],
    },
    dxRequired: {
      value: 'Yes. The ABA form asks for ICD-10 codes with "diagnostic evaluation, treatment plan, and recent progress notes by qualified professional" and cites OAR 410-172-0770; the OHP rule requires ASD on the HERC ASD line or stereotyped movement disorder with self-injury',
      status: 'verified',
      cites: [S.ycABA, S.oar0770],
    },
    payer: 'Yamhill Community Care (YCCO)',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Yamhill Community Care',
    h1: 'Yamhill Community Care ABA coverage: the intake guide.',
    metaTitle: 'Yamhill Community Care (YCCO) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Yamhill Community Care covers ABA for OHP members in Yamhill County and parts of Polk and Washington: which ABA codes need prior authorization, its ABA PA form and unit limits, supervision expectations, and what intake should collect.',
    intro: [
      'Yamhill Community Care Organization (YCCO) serves OHP members in Yamhill County and some ZIP codes in Polk and Washington counties. It publishes an ABA-specific prior-authorization form and a code-level PA list.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules' },
      { label: 'Service area', value: 'Yamhill County; parts of Polk and Washington' },
      { label: 'Prior auth', value: '97151–97156, 97158, 0362T, 0373T (PA list as of 1/29/2026)' },
      { label: 'Assessment units', value: '97151 up to 32 units initial, 24 for reassessment' },
      { label: 'Submit via', value: 'CIM portal, or fax the ABA PA form to 503-850-9398' },
      { label: 'Decision clock', value: 'Per OAR 410-141-3835 (7 days standard, 72 hours expedited)' },
    ],
    sections: [
      {
        h2: 'Prior authorization at YCCO',
        body: [
          'YCCO’s PA list (active and termed codes as of January 29, 2026) shows 0362T, 0373T, 97151, 97152, 97153, 97154, 97155, 97156 and 97158 as "Applied Behavioral Analysis" codes requiring PA since January 1, 2022, with no termination date; the list notes the Prioritized List can require review for other codes too. Since November 15, 2025, "Providers are required to initiate all referral and PA requests," through the CIM portal or by fax. Non-participating providers must request prior authorization for all services.',
          'The YCCO ABA Prior Authorization Request (fax 503-850-9398) asks for requesting and servicing provider NPIs and whether each holds an active DMAP (OHP) number, ICD-10 codes with the diagnostic evaluation, treatment plan and recent progress notes, and an addendum used "for both initial and concurrent requests" with the program setting (home, facility/clinic, school, other) and hours per week. 97151 is "up to 32 units for initial, up to 24 units for reassessment," with more allowed only with documentation under OAR 410-172-0770(1); 97152, 0362T and 0373T need clinical justification. Non-contracted providers need an out-of-network exception and must say whether they accept DMAP rates.',
        ],
        cites: [S.ycList, S.ycPA, S.ycABA],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm YCCO; some Polk and Washington ZIP codes belong to it.' },
      { title: 'Diagnostic evaluation', desc: 'Attach the evaluation (meeting OAR 410-172-0770), treatment plan and recent progress notes.' },
      { title: 'DMAP numbers', desc: 'Requesting and servicing providers’ OHP enrollment status is asked on the form.' },
      { title: 'Program setting and hours', desc: 'Home, clinic, school or other, with hours per week by code.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.ycPA, S.ycABA, S.ycList, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt],
    deliveryRules: {
      supervision: {
        value: 'YCCO’s ABA form describes 97153 as technician treatment "receiving 1 hour of supervision for every 5 to 10 hours of direct treatment." The state floor also applies: interventionists supervised at least 5 percent of service hours, with direct supervision monthly (OAR 824-040-0010); assistant behavior analysts and interventionists are not directly payable (OAR 410-172-0760(4)).',
        status: 'verified',
        cites: [S.ycABA, S.oar824sup, S.oar0760],
      },
      concurrentBilling: {
        value: 'Not addressed in YCCO’s ABA form or PA page, beyond describing 97155 as usable "for Direction of Technician (Supervision) face-to-face with one patient."',
        status: 'unverified',
        cites: [S.ycABA],
        verifyVia: 'YCCO Customer Service, 855-722-8205, or your YCCO provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: '97151 up to 32 units for an initial assessment and 24 for a reassessment; requests above that need documentation. Treatment units are requested by hours per day, days per week or hours per week on the addendum; no weekly cap is stated.',
        status: 'verified',
        cites: [S.ycABA],
      },
      noteSignature: {
        value: 'YCCO publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.ycABA, S.oar0620],
      },
      placeOfService: {
        value: 'The ABA addendum asks for the program setting: home, facility/clinic, school or other. It does not exclude any setting.',
        status: 'verified',
        cites: [S.ycABA],
      },
      billAsProvider: {
        value: 'The form lists requesting provider, servicing provider and servicing facility, each with TIN, NPI and DMAP status. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.ycABA, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'YCCO publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.ycABA, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'YCCO sets no recency rule; it wants "recent progress notes." The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.ycABA, S.oar0770],
      },
      diagnosingProviders: {
        value: 'YCCO asks for an evaluation "by qualified professional" and cites OAR 410-172-0770, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism.',
        status: 'verified',
        cites: [S.ycABA, S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'YCCO names assessment tools for treatment planning (VB-MAPP, ABLLS-R, FBA, functional analysis) but no diagnostic instrument, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.ycABA, S.oar0770],
      },
      referral: {
        value: 'YCCO adds no referral rule beyond its form’s PCP field and the OAR 410-172-0770 citation, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.ycABA, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'YCCO publishes no ABA telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.ycPA, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'YCCO cites OAR 410-141-3835 for its authorization process and publishes no shorter clock: notice within 7 calendar days for standard requests and 72 hours for expedited, with one 14-day extension.',
        status: 'verified',
        cites: [S.ycPA, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'YCCO’s ABA documents add nothing on other insurance, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.ycPA, S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Yamhill Community Care require prior authorization for the ABA assessment?', a: 'Yes. 97151 and 97152 are on YCCO’s PA list; the initial 97151 is limited to 32 units unless documented need supports more.' },
      { q: 'How do I submit an ABA request to YCCO?', a: 'Through the CIM portal or by faxing the YCCO ABA PA form with its addendum and a complete treatment plan to 503-850-9398. Providers must start every request themselves.' },
    ],
  },

  'cascade-health-alliance': {
    slug: 'cascade-health-alliance',
    family: 'cascade-health-alliance',
    cardDesc: 'Klamath County CCO: ABA for ASD needs PA every 6 months on 97151–97156 (BH auth grid, 6/24/2026); 7-day decisions; 120-day filing.',
    assessmentPA: {
      value: 'Yes: CHA’s BH Auth Grid (6/24/2026) requires "PA every 6 months for codes: 97151, 97152, 97153, 97154, 97155, 97156"',
      status: 'verified',
      cites: [S.chaGrid],
    },
    treatmentPA: {
      value: 'Yes: same grid row, PA every six months for 97153–97156',
      status: 'verified',
      cites: [S.chaGrid],
    },
    dxRequired: {
      value: 'Yes: the grid row is "Applied Behavioral Analysis (ABA) for Autism Spectrum Disorder (ASD)"; CHA publishes no other ABA criteria, so OHP’s evaluation rule (OAR 410-172-0770) applies',
      status: 'verified',
      cites: [S.chaGrid, S.oar0770],
    },
    payer: 'Cascade Health Alliance',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Cascade Health Alliance',
    h1: 'Cascade Health Alliance ABA coverage: the intake guide.',
    metaTitle: 'Cascade Health Alliance ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Cascade Health Alliance covers ABA for OHP members in Klamath County: six-month prior authorizations on 97151–97156, decision timeframes, timely filing, payment standards and other-insurance rules.',
    intro: [
      'Cascade Health Alliance (CHA) is the OHP CCO for most of Klamath County. Its behavioral health authorization grid lists ABA for autism spectrum disorder as requiring prior authorization every six months.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, under OHP rules' },
      { label: 'Service area', value: 'Klamath County (listed ZIP codes)' },
      { label: 'Prior auth', value: 'Every 6 months for 97151–97156' },
      { label: 'Decision clock', value: '7 days standard, 72 hours urgent' },
      { label: 'Timely filing', value: '120 days (365 when CHA is secondary)' },
      { label: 'Payment', value: '90% of valid claims in 30 days, 99% in 90' },
    ],
    sections: [
      {
        h2: 'Authorization and claims at CHA',
        body: [
          'CHA’s Behavioral Health Auth Grid (revision 6/24/2026) lists "Applied Behavioral Analysis (ABA) for Autism Spectrum Disorder (ASD)" as "YES," with "PA every 6 months for codes: 97151, 97152, 97153, 97154, 97155, 97156"; 97157 and 97158 are not named. The grid tells providers to check MMIS for eligibility first, and says authorization "does not guarantee reimbursement." CHA’s provider manual (revised 5/2026) sets prior-authorization decisions at "Standard: 7days" and "Urgent: 72 hours," lists the licensed assistant behavior analyst among credentialed practitioner types, and encourages use of the provider portal.',
          'Claims must be received "within 120 days from the date of service per OAR 410-141-3565 (1)," or within 365 days when CHA is secondary. CHA "pays or denies at least 90 percent of valid claims within 30 days of receipt and at least 99 percent of valid claims within 90 days." "CHA is always payor of last resort": bill other coverage first, attach the primary EOP, and submit within 365 days of the primary’s processing date; CHA pays the Medicaid allowable minus the primary’s payment.',
        ],
        cites: [S.chaGrid, S.chaPM],
      },
    ],
    collect: [
      { title: 'Member ID and eligibility', desc: 'CHA asks providers to check MMIS for eligibility and benefit coverage before services.' },
      { title: 'Diagnostic evaluation and referral', desc: 'Meets OAR 410-172-0770; referral from a physician, psychologist, or developmental-medicine NP/PA.' },
      { title: 'Six-month plan', desc: 'Authorizations run six months; plan reauthorization before they lapse.' },
      { title: 'Other insurance', desc: 'CHA pays last; attach the primary EOP.' },
    ],
    sources: [S.chaGrid, S.chaPM, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt],
    deliveryRules: {
      supervision: {
        value: 'CHA publishes no ABA supervision rule, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.chaPM, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in CHA’s BH auth grid or provider manual.',
        status: 'unverified',
        cites: [S.chaGrid, S.chaPM],
        verifyVia: 'CHA Provider Services, 541-883-2947.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'CHA publishes no ABA unit or hour limit; authorizations run six months.',
        status: 'unverified',
        cites: [S.chaGrid],
        verifyVia: 'CHA Provider Services, 541-883-2947: ask how ABA units are set within the six-month authorization.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'CHA publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.chaPM, S.oar0620],
      },
      placeOfService: {
        value: 'CHA publishes no ABA setting rule.',
        status: 'unverified',
        cites: [S.chaGrid],
        verifyVia: 'CHA Provider Services, 541-883-2947: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'CHA publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.chaPM, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'CHA publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials (CHA’s grid notes MD review for EPSDT members).',
        status: 'verified',
        cites: [S.chaGrid, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'CHA publishes no recency rule. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.chaGrid, S.oar0770],
      },
      diagnosingProviders: {
        value: 'CHA publishes nothing different, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism (OAR 410-172-0770(1), 0760(1)).',
        status: 'verified',
        cites: [S.chaGrid, S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'CHA publishes nothing different, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.chaGrid, S.oar0770],
      },
      referral: {
        value: 'CHA adds no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.chaGrid, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'CHA publishes no ABA telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.chaPM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Prior authorizations: "Standard: 7days," "Urgent: 72 hours"; CHA may extend a standard decision by up to 14 calendar days when the member or provider requests it.',
        status: 'verified',
        cites: [S.chaPM, S.oar3835],
      },
      coordinationOfBenefits: {
        value: '"CHA is always payor of last resort. Bill all prior resources (third-party liability, or TPL) before billing CHA." Include the primary EOP and file within 365 days of the primary’s processing date; CHA pays the Medicaid allowable minus the primary’s payment, and nothing more if the primary paid at least that much.',
        status: 'verified',
        cites: [S.chaPM, S.oar1280],
      },
    },
    faq: [
      { q: 'Does Cascade Health Alliance require prior authorization for ABA?', a: 'Yes. Its BH auth grid requires PA every six months for 97151 through 97156, including the assessment.' },
      { q: 'What is CHA’s timely filing limit?', a: '120 days from the date of service, or 365 days when CHA is the secondary payer.' },
    ],
  },

  'advanced-health': {
    slug: 'advanced-health',
    family: 'advanced-health',
    cardDesc: 'Coos and Curry County CCO: ABA requests go on its Behavioral Health Authorization form; 7-day decisions; 120-day timely filing.',
    assessmentPA: {
      value: 'Not stated per code. Advanced Health’s Behavioral Health Authorization Request lists ABA as a request type (with inpatient, residential and out-of-network visits), but no published list says whether 97151/97152 need it',
      status: 'unverified',
      cites: [S.ahBH, S.ahPM],
      verifyVia: 'Advanced Health Medical Management, 541-269-7400: ask whether 97151 and 97152 need authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'ABA is one of four request types on Advanced Health’s BH Authorization Request (fax 541-269-7147, with a BH assessment and treatment plan); the form also says in-network outpatient visits need no PA, so confirm which ABA codes need it',
      status: 'unverified',
      cites: [S.ahBH],
      verifyVia: 'Advanced Health Medical Management, 541-269-7400: confirm which ABA codes require authorization.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. Advanced Health publishes no ABA criteria of its own and reviews coverage against the Prioritized List, so the OHP rule applies: ASD on the HERC ASD line or stereotyped movement disorder with self-injury (OAR 410-172-0770)',
      status: 'verified',
      cites: [S.ahPM, S.oar0770, S.gn],
    },
    payer: 'Advanced Health',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · Advanced Health',
    h1: 'Advanced Health ABA coverage: the intake guide.',
    metaTitle: 'Advanced Health (Coos & Curry) ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Advanced Health covers ABA for OHP members in Coos and Curry counties: its behavioral health authorization form, decision timeframes, timely filing, other-insurance rules, and the OHP rules it applies.',
    intro: [
      'Advanced Health is the OHP CCO for Coos and Curry counties. It publishes no ABA-specific policy, but its Behavioral Health Authorization Request form (rev. 10/25) names ABA as a request type, and its 2026–2027 provider manual sets the authorization and claims rules.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules' },
      { label: 'Service area', value: 'Coos and Curry counties' },
      { label: 'Authorization', value: 'BH Authorization Request (ABA box), fax 541-269-7147' },
      { label: 'Decision clock', value: '7 calendar days standard (plus up to 14)' },
      { label: 'Timely filing', value: '120 days; 365 days for listed exceptions' },
      { label: 'Other insurance', value: 'Advanced Health is payer of last resort' },
    ],
    sections: [
      {
        h2: 'Authorization and claims at Advanced Health',
        body: [
          'Advanced Health’s Behavioral Health Authorization Request asks providers to "Mark one" of Hospital Inpatient, Residential, ABA or Out of Network OP visit, and to fax it to Medical Management at 541-269-7147 with a behavioral health treatment plan, assessment and supporting documentation; the instructions add that "In-network providers do not require prior authorization for outpatient visits." The provider manual (2026–2027, rev. 3.2026) says Advanced Health processes standard authorization requests "no later than 7 calendar days following receipt of the request," extendable by up to 14 days, and that "An authorization may be required if Advanced Health is secondary to primary health coverage," with Advanced Health as "a payer of last resort unless the Member also has Indian Health coverage."',
          'Claims must reach Advanced Health "within 120 days from the date of service," or within 365 days for pregnancy, retroactive eligibility, secondary/tertiary claims and other approved delays.',
        ],
        cites: [S.ahBH, S.ahPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Advanced Health (Coos or Curry county) on the date of service.' },
      { title: 'BH assessment and treatment plan', desc: 'Required with the BH Authorization Request.' },
      { title: 'Diagnostic evaluation and referral', desc: 'Meets OAR 410-172-0770; referral from a physician, psychologist, or developmental-medicine NP/PA.' },
      { title: 'Other insurance', desc: 'Bill the primary first; Advanced Health may still require an authorization as secondary.' },
    ],
    sources: [S.ahBH, S.ahPM, S.ahRes, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt, S.gn],
    deliveryRules: {
      supervision: {
        value: 'Advanced Health publishes no ABA supervision rule, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.ahPM, S.oar0760, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in Advanced Health’s provider manual or BH authorization form.',
        status: 'unverified',
        cites: [S.ahPM, S.ahBH],
        verifyVia: 'Advanced Health provider services (providerservices@advancedhealth.com) or your participation agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Advanced Health publishes no ABA unit or hour limit.',
        status: 'unverified',
        cites: [S.ahPM],
        verifyVia: 'Advanced Health Medical Management, 541-269-7400: ask how ABA units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Advanced Health publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.ahPM, S.oar0620],
      },
      placeOfService: {
        value: 'Advanced Health publishes no ABA setting rule.',
        status: 'unverified',
        cites: [S.ahPM],
        verifyVia: 'Advanced Health provider services: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Advanced Health publishes no ABA rendering-provider rule; its form asks for the performing provider and NPI. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.ahBH, S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Advanced Health publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.ahPM, S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'Advanced Health publishes no recency rule. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.ahPM, S.oar0770],
      },
      diagnosingProviders: {
        value: 'Advanced Health publishes nothing different, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism (OAR 410-172-0770(1), 0760(1)).',
        status: 'verified',
        cites: [S.ahPM, S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'Advanced Health publishes nothing different, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.ahPM, S.oar0770],
      },
      referral: {
        value: 'Advanced Health adds no ABA referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.ahPM, S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'Advanced Health publishes no ABA telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.ahPM, S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'Standard authorization requests "no later than 7 calendar days following receipt of the request," extendable by up to 14 additional days when more information is needed or on request.',
        status: 'verified',
        cites: [S.ahPM, S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'Advanced Health is "a payer of last resort unless the Member also has Indian Health coverage," may still require an authorization when it is secondary, and needs no PA when Medicare is primary and covers the service. Secondary claims may be filed within 365 days.',
        status: 'verified',
        cites: [S.ahPM, S.oar1280],
      },
    },
    faq: [
      { q: 'Does Advanced Health cover ABA?', a: 'Yes, under OHP rules. ABA requests go on its Behavioral Health Authorization Request, faxed to Medical Management at 541-269-7147.' },
      { q: 'What is Advanced Health’s timely filing limit?', a: '120 days from the date of service, or 365 days for exceptions such as secondary claims and retroactive eligibility.' },
    ],
  },

  'allcare-cco': {
    slug: 'allcare-cco',
    family: 'allcare',
    cardDesc: 'Southern Oregon CCO (Curry, Jackson, Josephine, south Douglas): no ABA policy published; ABA paid at least the OHA FFS rate; OHP rules apply.',
    assessmentPA: {
      value: 'Not published: AllCare posts no ABA prior-authorization list or policy on its public site (its site search returns no ABA document)',
      status: 'unverified',
      cites: [S.acDP],
      verifyVia: 'AllCare CCO provider portal or customer service (888-460-0185): ask whether 97151/97152 need prior authorization.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Not published on AllCare’s public site; OHP allows CCOs to require PA for ABA treatment',
      status: 'unverified',
      cites: [S.acDP, S.oar3835],
      verifyVia: 'AllCare CCO provider portal or customer service (888-460-0185): ask which ABA codes need prior authorization and how to submit.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes. AllCare publishes no ABA criteria of its own, so the OHP rule applies: ASD on the HERC ASD line or stereotyped movement disorder with self-injury, from an evaluation meeting OAR 410-172-0770',
      status: 'verified',
      cites: [S.oar0770, S.gn],
    },
    payer: 'AllCare CCO',
    state: 'OR', kind: 'medicaid-mco', parent: 'Oregon Health Plan (Coordinated Care Organizations)',
    pill: 'Payer Guide · AllCare CCO',
    h1: 'AllCare CCO ABA coverage: the intake guide.',
    metaTitle: 'AllCare CCO ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How AllCare CCO covers ABA for OHP members in Curry, Jackson, Josephine and southern Douglas counties: what AllCare publishes (an ABA minimum-rate commitment), what it does not, and the OHP rules that apply.',
    intro: [
      'AllCare CCO serves OHP members in Curry, Jackson and Josephine counties and two southern Douglas County ZIP codes. Its public site publishes no ABA policy, prior-authorization list or provider manual we could find, so the OHP rules carry most of this guide. What AllCare does publish is its behavioral health directed-payment notice, which commits to paying ABA at least the OHA fee-for-service rate.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, under OHP rules (CCOs cover the Prioritized List)' },
      { label: 'Service area', value: 'Curry, Jackson, Josephine; Douglas ZIPs 97410 and 97442' },
      { label: 'Prior auth', value: 'Not published; ask AllCare' },
      { label: 'ABA rates', value: 'At least the OHA FFS State Plan rate (directed payment)' },
      { label: 'Decision clock', value: 'OAR 410-141-3835: 7 days standard, 72 hours expedited' },
      { label: 'Timely filing', value: 'OAR 410-141-3565: 120 days (365 for exceptions)' },
    ],
    sections: [
      {
        h2: 'What AllCare publishes, and what applies by default',
        body: [
          'AllCare’s behavioral health directed-payment notice (2025 guidance) says OHA’s minimum fee schedule directed payment "will require BH providers in A&D Residential, Applied Behavior Analysis, MH Children’s Wraparound to be paid at least the FFS State Plan fee schedule rate," and that ABA is among the services eligible for the culturally and linguistically specific services add-on (22% of the OHP fee schedule for non-rural and 27% for rural qualifying providers). ' + OR_FEE_LINE,
          'We found no AllCare ABA policy, PA list or provider manual on its public site, so the OHP rules apply: the OAR 410-172-0770 evaluation and referral, Guideline Note 75, CCO authorization notice within 7 calendar days (OAR 410-141-3835), and claims within 120 days of the date of service (OAR 410-141-3565). Ask AllCare which ABA codes need authorization before you start.',
        ],
        cites: [S.acDP, S.fee, S.plans, S.oar0770, S.gn, S.oar3835, S.oar3565],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm AllCare CCO (Jackson County members may instead have Jackson Care Connect).' },
      { title: 'Authorization rules', desc: 'AllCare publishes none for ABA: call before the assessment.' },
      { title: 'Diagnostic evaluation and referral', desc: 'Meets OAR 410-172-0770; referral from a physician, psychologist, or developmental-medicine NP/PA.' },
      { title: 'Other insurance', desc: 'Bill commercial coverage first; OHP is the payer of last resort.' },
    ],
    sources: [S.acDP, S.plans, S.oar0760, S.oar0770, S.oar0620, S.oar0850, S.fee, S.oar3835, S.oar3565, S.oar824sup, S.oar1280, S.epsdt, S.gn],
    deliveryRules: {
      supervision: {
        value: 'AllCare publishes no ABA supervision rule, so the state rule applies. ' + STATE_SUPERVISION,
        status: 'verified',
        cites: [S.oar0760, S.oar824sup, S.oar824def],
      },
      concurrentBilling: {
        value: 'Not published by AllCare; OHA publishes no rule either.',
        status: 'unverified',
        cites: [S.acDP],
        verifyVia: 'AllCare CCO provider services (888-460-0185) or your AllCare contract.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Not published by AllCare; OHA’s fee schedule sets no ABA unit maximum.',
        status: 'unverified',
        cites: [S.fee],
        verifyVia: 'AllCare CCO utilization management (888-460-0185): ask how ABA units are authorized.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'AllCare publishes no ABA session-note rule. The OHP floor applies: each note "signed or initialed by the individual providing the service" (OAR 410-172-0620(4)).',
        status: 'verified',
        cites: [S.oar0620],
      },
      placeOfService: {
        value: 'Not published by AllCare.',
        status: 'unverified',
        cites: [S.acDP],
        verifyVia: 'AllCare CCO provider services: ask which settings and place-of-service codes it pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'AllCare publishes no ABA rendering-provider rule. The OHP rule applies: only a Licensed Behavior Analyst, licensed health care professional or declarant is eligible for direct payment (OAR 410-172-0760(3)–(4)).',
        status: 'verified',
        cites: [S.oar0760],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'AllCare publishes no age limit. OHP rules require ABA beyond Guideline Note 75 when medically appropriate "including individuals age 13 and older," and under 21 EPSDT bars age-group-wide denials.',
        status: 'verified',
        cites: [S.oar0770, S.epsdt],
      },
      dxRecency: {
        value: 'No AllCare rule. The OHP rule dates only the physical exam and hearing test (OAR 410-172-0770(1)(h)–(i)).',
        status: 'verified',
        cites: [S.oar0770],
      },
      diagnosingProviders: {
        value: 'AllCare publishes nothing different, so the OHP rule applies: a physician, psychologist, or developmental-medicine NP or PA experienced in autism (OAR 410-172-0770(1), 0760(1)).',
        status: 'verified',
        cites: [S.oar0770, S.oar0760],
      },
      diagnosticTools: {
        value: 'AllCare publishes nothing different, so the OHP rule applies: a standardized, validated tool such as the ADOS plus developmental status such as the Vineland (OAR 410-172-0770(1)(b), (g)).',
        status: 'verified',
        cites: [S.oar0770],
      },
      referral: {
        value: 'AllCare publishes no referral rule of its own, so the OHP rule applies. ' + STATE_REFERRAL,
        status: 'verified',
        cites: [S.oar0770, S.oar0760],
      },
      telehealth: {
        value: 'AllCare publishes no ABA telehealth rule of its own. ' + STATE_TELE,
        status: 'verified',
        cites: [S.oar0850, S.fee],
      },
      authTurnaround: {
        value: 'AllCare publishes no ABA clock, so the CCO rule applies: notice "no later than seven (7) calendar days following receipt," expedited within 72 hours, one 14-day extension (OAR 410-141-3835).',
        status: 'verified',
        cites: [S.oar3835],
      },
      coordinationOfBenefits: {
        value: 'AllCare publishes nothing ABA-specific, so the state rule applies. ' + STATE_COB,
        status: 'verified',
        cites: [S.oar1280, S.cfr433],
      },
    },
    faq: [
      { q: 'Does AllCare CCO cover ABA?', a: 'Yes, as an OHP CCO it covers ABA under OHP rules, and it commits to paying ABA providers at least the OHA fee-for-service rate. It publishes no ABA-specific policy, so ask AllCare about authorization before starting.' },
      { q: 'What does AllCare pay for ABA?', a: 'At least the OHA fee-for-service State Plan rate under OHA’s directed payment; for example 97153 at $14.70 per 15 minutes on the July 2026 schedule.' },
    ],
  },

  'aetna-oregon': {
    slug: 'aetna-oregon',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide and precert list + Oregon’s 2013 ABA mandate (under 9 at first request, up to 25 hrs/wk) and ORS 743A.168 parity.',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: precertification via Availity or the number on the card; progress is re-evaluated every six months; the authorization interval is set per case',
      status: 'plan-dependent',
      cites: [S.aetnaPrecert, S.aetnaGuide],
      verifyVia: 'The member’s Aetna plan (benefits line on the card): ask what authorization interval it uses.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) obtained by an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Oregon',
    state: 'OR', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Oregon',
    h1: 'Aetna ABA coverage in Oregon: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Oregon: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Oregon families: the national ABA medical necessity guide and precertification, Oregon’s 2013 ABA mandate and ORS 743A.168 parity, Oregon behavior-analyst licensure, prompt-pay and PA timelines, and what intake should verify.',
    intro: [
      'For an intake team in Oregon, an Aetna card means three layers: Aetna’s national ABA criteria, Oregon’s ABA mandate (section 2 of chapter 771, Oregon Laws 2013) together with the ORS 743A.168 parity law, and the plan’s funding type, which decides whether state law applies at all.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA guide' },
      { label: 'State mandate', value: OR_MANDATE_ROW },
      { label: 'Mandate age', value: OR_AGE_ROW },
      { label: 'Mandate caps', value: OR_CAPS_ROW },
      { label: 'Exempt from mandate', value: OR_EXEMPT_ROW },
      { label: 'Licensure', value: OR_LIC_ROW },
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Oregon',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis "obtained by an appropriate provider," services "provided directly or billed by the appropriately licensed provider," functional impairment on a standardized scale "in the past 12 months" (Vineland-3, ABAS, VB-MAPP or ABLLS) at least one standard deviation below the mean or a significant risk of harm, and a treatment plan with measurable targets, titration and discharge criteria; progress is evaluated every six months. Its only state exhibit is Maryland’s, so Oregon plans get the national criteria plus Oregon law. Aetna’s behavioral health precertification list names all ten ABA codes, 97151–97158, 0362T and 0373T; requests go through Availity.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert],
      },
      {
        h2: 'The Oregon mandate: what it guarantees',
        body: [OR_MANDATE_BODY],
        cites: [S.ors743A],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [OR_LICENSURE_BODY],
        cites: [S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.ors743A, S.oar0760],
      },
      {
        h2: 'Claims, prior-authorization clocks and rates',
        body: [
          OR_CLAIMS_BODY,
          'Aetna publishes no ABA rate table. Its provider manual (6/26) says "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and that where you have both an intermediary contract and a direct agreement "your direct Aetna rates will apply unless we specifically notify you otherwise." For a public benchmark, Oregon’s OHP fee-for-service schedule pays 97153 at $14.70 per 15 minutes.',
        ],
        cites: [S.ors743B, S.ors743A, S.erisa, S.aetnaOM, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Oregon law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Age at first ABA request', desc: 'The 2013 ABA section covers ABA first requested before age 9; older children rely on ORS 743A.168 parity.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'Aetna wants one from the past 12 months (e.g., Vineland-3, ABAS, VB-MAPP, ABLLS).' },
      { title: 'Oregon license numbers', desc: 'Behavior analyst license and interventionist registrations for the treating team.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.aetnaTele, S.aetnaCPB648, S.ors743A, S.ors743B, S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.oar836, S.oar1280, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s Network Participation Criteria (5/26): ABA "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," supervised staff may be a BCaBA "or a paraprofessional," and Aetna requires "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis," with the supervisor "onsite with the child at least one hour a month." "All BCBAs, BCaBAs and paraprofessionals must meet state requirements," which in Oregon include licensure or interventionist registration and the 5 percent supervision floor in OAR 824-040-0010.',
        status: 'verified',
        cites: [S.aetnaNPC, S.oar824sup, S.ors676],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA guide or precertification list.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, the participating-provider agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week cap. Typical intensities are 10–25 hours a week for comprehensive and 1–20 for focused programs (typical, not caps), with authorized hours tied to the guide’s severity table and QHP protocol modification at 1–2 hours per 10 hours of technician treatment. For a fully insured Oregon plan, the 2013 mandate section covers up to 25 hours a week (first requested before age 9) and does not limit hours above that owed under ORS 743A.168.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ors743A],
      },
      noteSignature: {
        value: 'Not addressed. Aetna sets treatment-plan content, not who signs a session note or by when.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide is setting-neutral for outpatient ABA; inpatient, residential or partial hospitalization use that level of care’s criteria. For fully insured Oregon plans, the mandate covers treatment "in the individual’s home or a licensed health care facility" or a setting approved by the licensed provider, and does not require coverage of services under an IEP.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ors743A],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope. Oregon licenses behavior analysts, so the Oregon-licensed behavior analyst (or other Oregon licensee with ABA in scope) is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ors676],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s guide sets no age cap; its age ranges are typical, not limiting.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.ors743A],
        verifyVia: 'Live benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s own terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself, but medical necessity requires functional impairment on a standardized scale administered in the past 12 months.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'An appropriate provider: a licensed psychologist or psychiatrist, physician, or other professional qualified to diagnose within scope. For fully insured Oregon plans the mandate covers diagnosis by a licensed neurologist, pediatric neurologist, developmental pediatrician, psychiatrist or psychologist experienced in ASD, and lets the insurer require re-diagnosis by one of them.',
        status: 'verified',
        cites: [S.aetnaGuide, S.ors743A],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale; the ABA guide requires a standardized functional measure from the past 12 months (Vineland-3, ABAS, VB-MAPP or ABLLS as examples).',
        status: 'verified',
        cites: [S.aetnaCPB648, S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s national ABA documents require no physician referral; they require precertification of all ten ABA codes.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.aetnaGuide, S.ors743A],
      },
      telehealth: {
        value: 'Aetna’s Telemedicine and Direct Patient Contact Payment Policy checks these ABA codes in the Commercial column, billed with GT, 95 or FR: 97151, 97153, 97155, 97156 and 97157; 97152, 97154 and 97158 are checked for Medicare only. The posted policy shows a last review of June 2021, so treat the list as perishable.' + OR_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaTele, S.ors743A],
        verifyVia: 'Availity or the precertification line: ask whether the plan is fully insured in Oregon or self-funded, and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: OR_AUTH_COMMERCIAL + ' Aetna publishes no Oregon-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.ors743A, S.ors743B, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Oregon-regulated) or self-funded (ERISA), and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: OR_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.oar836, S.oar1280, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the member’s coordination-of-benefits order (and whether a self-funded plan uses the birthday rule).',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Oregon?', a: 'Yes, for ASD under its national ABA guide, with Oregon’s ABA mandate and ORS 743A.168 parity layered on for state-regulated plans. Self-funded employer plans follow their own documents.' },
      { q: 'What does Oregon’s autism mandate require?', a: 'The 2013 law requires coverage of ASD diagnosis and of medically necessary treatment, including ABA up to 25 hours a week, when ABA is first requested before age 9. It does not limit ABA owed under the ORS 743A.168 parity law at older ages or higher hours.' },
      { q: 'How fast must an Oregon insurer decide an ABA prior authorization?', a: 'Within 30 calendar days under the ABA mandate (other utilization review decisions are due within 2 business days under ORS 743B.423). Self-funded ERISA plans have 15 days for pre-service claims.' },
      { q: 'How fast must Aetna pay a clean claim in Oregon?', a: 'ORS 743B.450 requires payment or denial of a clean claim within 30 days of receipt, with 12 percent annual interest on late payments under ORS 743B.452 (fully insured plans).' },
      { q: 'Can a BCBA licensed in another state treat an Aetna member in Oregon by telehealth?', a: 'Oregon licenses behavior analysts and its license rule has no telehealth or reciprocity exemption; the mandate and the telemedicine statute both key on Oregon licensure. Get an Oregon license first, and confirm Aetna credentialing.' },
    ],
  },

  'cigna-oregon': {
    slug: 'cigna-oregon',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 (eff. 5/15/2026) + Oregon’s 2013 ABA mandate and ORS 743A.168 parity; Oregon addendum sets 90-day credentialing.',
    assessmentPA: {
      value: 'Plan-dependent: Evernorth says "Prior authorization is typically required for applied behavior analysis," and EN0499 sets separate medical-necessity criteria for the assessment',
      status: 'plan-dependent',
      cites: [S.ebhAdmin, S.en0499],
      verifyVia: 'The behavioral health number on the member’s card: ask whether 97151/97152 need prior authorization on this plan.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Typically required: requests go to Evernorth’s Autism Utilization Management team; benefit coverage "varies by plan and state mandates"',
      status: 'plan-dependent',
      cites: [S.ebhAdmin, S.en0499],
      verifyVia: 'The behavioral health number on the card: confirm ABA prior authorization and the review interval for this plan.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a confirmed DSM-5-TR ASD diagnosis (F84.0–F84.9 except F84.2 Rett syndrome) with the diagnosing clinician’s name, credentials and the date it was most recently made',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Oregon',
    state: 'OR', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Oregon',
    h1: 'Cigna / Evernorth ABA coverage in Oregon: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Oregon: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Oregon families: coverage policy EN0499, Evernorth’s Oregon regulatory addendum, Oregon’s 2013 ABA mandate and ORS 743A.168 parity, Oregon licensure, and what intake should verify.',
    intro: [
      'For an intake team in Oregon, a Cigna card means Evernorth Behavioral Health’s ABA policy (EN0499, effective May 15, 2026), Oregon’s ABA mandate and parity law, and the plan’s funding type. Evernorth’s administrative guidelines include an Oregon regulatory addendum that changes credentialing and precertification terms for Oregon providers.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Evernorth EN0499' },
      { label: 'State mandate', value: OR_MANDATE_ROW },
      { label: 'Mandate age', value: OR_AGE_ROW },
      { label: 'Mandate caps', value: OR_CAPS_ROW },
      { label: 'Exempt from mandate', value: OR_EXEMPT_ROW },
      { label: 'Licensure', value: OR_LIC_ROW },
      { label: 'Fee schedule', value: 'Not public — Exhibit A of your Evernorth provider agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Oregon',
        body: [
          'EN0499 covers ABA for a confirmed ASD diagnosis made by "a healthcare professional who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice," with the diagnosing clinician’s credentials and the date of the most recent diagnosis. The assessment must be done by a BCBA, Licensed Behavior Analyst or independently licensed clinician trained in ABA using a current, standardized instrument completed in its entirety; for treatment, the instrument must have been administered "within 60 days prior to the start of treatment," with baseline data collected in the same window. Case supervision runs at "one to two hours per ten hours of direct treatment," with at least one to two hours a week when treatment is 10 hours or less. ABA for non-ASD indications is not medically necessary, and ABA "delivered to the same individual, at the same time as any other treatment modality" is not covered.',
          'Evernorth’s administrative guidelines (September 2026) say prior authorization "is typically required" for ABA and that requests usually go to its Autism Utilization Management team. The Oregon Regulatory Addendum adds: credentialing decisions "no later than ninety (90) days after receiving a complete application," averaging no more than 60 days; payment under ORS 743B.450 and 743B.452; and coordination of benefits under OAR 836-020-0770 to 0801. The addendum does not apply to self-funded plans.',
        ],
        cites: [S.en0499, S.ebhAdmin],
      },
      {
        h2: 'The Oregon mandate: what it guarantees',
        body: [OR_MANDATE_BODY],
        cites: [S.ors743A],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [OR_LICENSURE_BODY],
        cites: [S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.ors743A, S.oar0760],
      },
      {
        h2: 'Claims, prior-authorization clocks and rates',
        body: [
          OR_CLAIMS_BODY,
          'Evernorth publishes no ABA rate table: its guidelines send providers to "Exhibit A in your Provider Agreement" for the fee schedule and eligible ABA codes. For a public benchmark, Oregon’s OHP fee-for-service schedule pays 97153 at $14.70 per 15 minutes.',
        ],
        cites: [S.ors743B, S.ors743A, S.erisa, S.ebhAdmin, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Oregon law and the Evernorth Oregon addendum apply) vs. self-funded ERISA.' },
      { title: 'Diagnosis details', desc: 'Name, credentials and licensure of the diagnosing clinician and the date the diagnosis was most recently made.' },
      { title: 'Recent standardized assessment', desc: 'Administered within 60 days before treatment starts, with baseline data from the same window.' },
      { title: 'Other therapies schedule', desc: 'Cigna will not pay ABA delivered at the same time as speech or OT.' },
      { title: 'Oregon license numbers', desc: 'Behavior analyst license and interventionist registrations for the team.' },
    ],
    sources: [S.en0499, S.ebhAdmin, S.ors743A, S.ors743B, S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.oar836, S.oar1280, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, LBA or independently licensed clinician with ABA training, with direct and indirect supervision "consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment," and at least one to two hours a week of direct case supervision when direct treatment is 10 hours a week or less. Direct case supervision means the BCBA is face to face with the patient and the RBT or BCaBA during treatment. In Oregon the interventionist must also be registered and supervised for at least 5 percent of service hours (OAR 824-040-0010).',
        status: 'verified',
        cites: [S.en0499, S.oar824sup],
      },
      concurrentBilling: {
        value: 'EN0499 bars ABA "delivered to the same individual, at the same time as any other treatment modality (e.g., ABA and speech therapy, or ABA and occupational therapy)," and defines direct case supervision as occurring concurrently with technician treatment, but does not say whether 97155 and 97153 may both be billed for the same minutes.',
        status: 'unverified',
        cites: [S.en0499],
        verifyVia: 'Evernorth Behavioral Health provider services or your provider agreement: ask whether 97155 may be billed concurrently with 97153.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No numeric cap: "The planned intensity of treatment reflects the severity of the impairments, goals of treatment, and/or response to treatment." Services by multiple ABA agencies in the same authorization period are not medically necessary unless coordination is documented.',
        status: 'verified',
        cites: [S.en0499],
      },
      noteSignature: {
        value: 'EN0499’s session documentation must include the location, focus and description of the intervention, who was present, the specific service, and the "Name, credential (if applicable), and signature of ABA provider who rendered the service."',
        status: 'verified',
        cites: [S.en0499],
      },
      placeOfService: {
        value: 'Treatment may span home, clinic, school and community, with data reported separately by setting; ABA may not replace or replicate the setting’s own responsibilities (classroom aide, 1:1 teacher, tutor). Educational or vocational services are not covered. For fully insured Oregon plans, the mandate covers treatment at home, in a licensed facility, or in a setting the licensed provider approves, and excludes IEP services.',
        status: 'verified',
        cites: [S.en0499, S.ors743A],
      },
      billAsProvider: {
        value: 'EN0499 requires the assessment and supervision to come from a BCBA, Licensed Behavior Analyst or independently licensed mental health clinician with documented ABA training, with the supervisor’s name and credentials documented. It does not state whose NPI goes on technician lines.',
        status: 'unverified',
        cites: [S.en0499],
        verifyVia: 'Evernorth Behavioral Health provider services or Exhibit A of your agreement: ask whether RBT services bill under the supervising BCBA’s or the group’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.ors743A],
        verifyVia: 'Benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the plan’s terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'The request must give "The date on which the diagnosis was most recently made," and the standardized assessment and baseline data must be from within 60 days before treatment starts.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional licensed to practice independently whose licensure board considers diagnosis within scope. For fully insured Oregon plans the mandate covers diagnosis by a licensed neurologist, pediatric neurologist, developmental pediatrician, psychiatrist or psychologist experienced in ASD.',
        status: 'verified',
        cites: [S.en0499, S.ors743A],
      },
      diagnosticTools: {
        value: 'A reliable, valid, standardized instrument measuring the DSM-5-TR ASD domains, completed in its entirety, in its current version ("must be the Vineland-3 vs. Vineland-II"), with date, respondent and form type.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'EN0499 requires no physician referral; Evernorth requires prior authorization in most cases.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.en0499, S.ebhAdmin, S.ors743A],
      },
      telehealth: {
        value: 'EN0499 allows services "delivered via telehealth modalities" if they still meet its definition of direct treatment, and drops the line-of-sight requirement for telehealth; it publishes no ABA telehealth code list.' + OR_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.ors743A],
        verifyVia: 'Evernorth Behavioral Health provider services: ask which ABA codes, POS and modifiers it pays by telehealth on this plan.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: OR_AUTH_COMMERCIAL + ' Under Evernorth’s Oregon addendum, a coverage and medical-necessity precertification is binding if obtained no more than 30 days before the service, and an eligibility precertification if obtained no more than five business days before.',
        status: 'plan-dependent',
        cites: [S.ors743A, S.ors743B, S.erisa, S.ebhAdmin],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Oregon-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: OR_COB_COMMERCIAL + ' Evernorth’s Oregon addendum adds that if plans cannot agree on the order within 30 days of having the information, they pay the claim in equal shares.',
        status: 'plan-dependent',
        cites: [S.oar836, S.ebhAdmin, S.oar1280, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Cigna at benefits verification for the member’s coordination-of-benefits order.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Oregon?', a: 'Yes, for ASD under Evernorth’s EN0499, with Oregon’s ABA mandate and ORS 743A.168 parity applying to state-regulated plans.' },
      { q: 'How long does Cigna/Evernorth take to credential an Oregon ABA provider?', a: 'Its Oregon addendum commits to a decision no later than 90 days after a complete application, averaging no more than 60 days.' },
      { q: 'Does Cigna require session notes to be signed?', a: 'Yes. EN0499 requires each session note to include the name, credential and signature of the ABA provider who rendered the service.' },
      { q: 'Can a BCBA licensed in another state treat a Cigna member in Oregon by telehealth?', a: 'Oregon licenses behavior analysts and its license rule has no telehealth or reciprocity exemption; get an Oregon license, then credential with Evernorth.' },
    ],
  },

  'unitedhealthcare-oregon': {
    slug: 'unitedhealthcare-oregon',
    family: 'unitedhealthcare',
    cardDesc: 'Optum ABA criteria (BH803ABASCC) + Oregon’s 2013 ABA mandate and ORS 743A.168 parity; no Oregon state supplement; telehealth limited to 97155–97157.',
    assessmentPA: {
      value: 'Required: the Optum ABA Supplemental Clinical Criteria say "Prior authorization is required for ABA" unless otherwise specified or mandated by contract or law',
      status: 'verified',
      cites: [S.optumSCC],
    },
    treatmentPA: {
      value: 'Required; continued treatment is re-reviewed with updated documentation, and under-use below 80% of authorized hours is examined',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Optum Provider Express or the behavioral health number on the card: ask what review interval applies to this authorization.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: a DSM-5-TR ASD diagnosis by a state-licensed physician, psychologist or other qualified clinician, confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare / Optum in Oregon',
    state: 'OR', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Oregon',
    h1: 'UnitedHealthcare / Optum ABA coverage in Oregon: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Oregon: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Oregon families: Optum’s ABA criteria and reimbursement policy, telehealth limits, Oregon’s 2013 ABA mandate and ORS 743A.168 parity, Oregon licensure, and what intake should verify.',
    intro: [
      'For an intake team in Oregon, a UnitedHealthcare card usually means Optum Behavioral Health administers ABA under its national Supplemental Clinical Criteria, with Oregon’s ABA mandate and parity law layered on for state-regulated plans. UnitedHealthcare is not one of Oregon’s OHP coordinated care organizations, so a UHC card here is commercial (or Medicare).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA Supplemental Clinical Criteria' },
      { label: 'State mandate', value: OR_MANDATE_ROW },
      { label: 'Mandate age', value: OR_AGE_ROW },
      { label: 'Mandate caps', value: OR_CAPS_ROW },
      { label: 'Exempt from mandate', value: OR_EXEMPT_ROW },
      { label: 'Licensure', value: OR_LIC_ROW },
      { label: 'Fee schedule', value: 'Not public — Optum pays up to the “Fee Maximum” in your agreement, with credential modifiers (HM/HN/HO/HP)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Oregon',
        body: [
          'Optum’s ABA Supplemental Clinical Criteria (interim review April 2026) require prior authorization, a DSM-5-TR ASD diagnosis confirmed "using at least one clinically validated tool" (screens such as M-CHAT, second-level tools such as CARS-2, RITA-T, STAT, and formal tools such as ADI-R, ADOS-2 and DISCO), and a credentialed ABA provider (a master’s- or doctoral-level BCBA or a credentialed licensed clinician, with BCaBAs and technicians under direct supervision). Treatment intensity is set from a baseline tool such as VB-MAPP, ABLLS-R, AFLS or Vineland, and "direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Optum’s ABA State Mandates supplement (July 2026) has no Oregon entry, so the national criteria apply with Oregon law on top.',
        ],
        cites: [S.optumSCC, S.optumSM],
      },
      {
        h2: 'The Oregon mandate: what it guarantees',
        body: [OR_MANDATE_BODY],
        cites: [S.ors743A],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [OR_LICENSURE_BODY],
        cites: [S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.ors743A, S.oar0760],
      },
      {
        h2: 'Claims, coding and rates',
        body: [
          OR_CLAIMS_BODY,
          'Optum’s commercial ABA Reimbursement Policy (updated June 2026) requires a credential modifier on every line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a BCBA-D or doctoral-level licensee; indirect work has no separate code and is bundled. It lists maximum units per day (97151 32, 97152 16, 97153 32, 97154 18, 97155 24, 97156–97158 16, 0362T 16, 0373T 32). Optum’s network manual defines the "Fee Maximum" as "The maximum amount a participating provider may be paid for a specific health care service," and says "Reimbursement to clinicians is based upon licensure rather than degree." For a public benchmark, Oregon’s OHP fee-for-service schedule pays 97153 at $14.70 per 15 minutes.',
        ],
        cites: [S.ors743B, S.ors743A, S.erisa, S.optumReimb, S.optumNNM, S.fee],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Oregon law applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis with a validated tool', desc: 'DSM-5-TR ASD and severity level, confirmed with a validated tool (ADOS-2, ADI-R, CARS-2 and others).' },
      { title: 'Baseline measurement', desc: 'VB-MAPP, ABLLS-R, AFLS, Vineland or similar to justify intensity.' },
      { title: 'Credential per staff member', desc: 'Each claim line needs the right modifier (HM RBT, HN BCaBA, HO BCBA, HP BCBA-D) plus Oregon licensure/registration.' },
    ],
    sources: [S.optumSCC, S.optumSM, S.optumReimb, S.optumTele, S.optumNNM, S.ors743A, S.ors743B, S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.oar836, S.oar1280, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'Consistent with CASP standards, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week. Technicians work under a BCBA or licensed behavioral health clinician and should be RBTs or otherwise certified "as allowable by state mandate"; Optum does not recommend parents serving as their own child’s RBT. In Oregon, interventionists must also be registered and supervised for at least 5 percent of service hours (OAR 824-040-0010).',
        status: 'verified',
        cites: [S.optumSCC, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Allowed with limits. Optum’s reimbursement policy: "Can I report 97153 or 97154 with 97155 concurrently? A. Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." 97155 and 97156 may be billed the same day only at different times.',
        status: 'verified',
        cites: [S.optumReimb],
      },
      dailyLimits: {
        value: 'Per-day maximums in the reimbursement policy: 97151 32 units, 97152 16, 97153 32, 97154 18, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 16, 0373T 32. No weekly hour cap; hours must be justified by documented clinical need, and use below 80% of authorized hours over two weeks is reviewed.',
        status: 'verified',
        cites: [S.optumReimb, S.optumSCC],
      },
      noteSignature: {
        value: 'Not addressed. The criteria and reimbursement policy set what must be documented, not who signs a session note or when.',
        status: 'unverified',
        cites: [S.optumSCC, S.optumReimb],
        verifyVia: 'Optum National Network Manual documentation standards and your participating-provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'ABA is provided at the least restrictive, most clinically appropriate level and "should not be restricted to specific settings." Not covered: services that are not ABA, "such as 1:1 aid delivered simultaneously during classroom instruction," or services covered under IDEA; school coordination (teacher training, meetings, observations) is covered.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      billAsProvider: {
        value: 'Every line carries the rendering credential: HM (RBT), HN (BCaBA), HO (BCBA or master’s-level licensed clinician), HP (BCBA-D or doctoral-level licensee); 97151 and 97155–97158 allow HN, HO or HP only. Optum notes state requirements "may supplement, modify or supersede" the HM definition, so Oregon interventionist registration applies.',
        status: 'verified',
        cites: [S.optumReimb, S.ors676],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria carry no age criterion; the member’s plan governs.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.ors743A],
        verifyVia: 'Provider Express benefits check or the behavioral health number on the card: establish fully insured vs. self-funded ERISA first.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis; it must be confirmed with severity level using a validated tool. Progress is reviewed over six-month periods.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosingProviders: {
        value: 'A state-licensed physician, psychologist or other state-licensed clinician qualified to diagnose under DSM-5-TR. For fully insured Oregon plans the mandate covers diagnosis by a licensed neurologist, pediatric neurologist, developmental pediatrician, psychiatrist or psychologist experienced in ASD.',
        status: 'verified',
        cites: [S.optumSCC, S.ors743A],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool from a non-exhaustive list: first-level screens (ABC, M-CHAT and others), second-level tools (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools (ADI-R, ADOS/ADOS-2, DISCO).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'No separate physician referral in Optum’s criteria; prior authorization is required.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.ors743A],
      },
      telehealth: {
        value: 'Optum’s Telehealth Billing guide (September 2025), commercial plans: "For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157." Claims must carry POS 02 or POS 10. So the 97151 assessment and 97153 technician time are not on Optum’s commercial telehealth list.' + OR_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumTele, S.ors743A],
        verifyVia: 'Optum Provider Express support: for a fully insured Oregon plan, ask how Optum applies its three-code list alongside ORS 743A.058.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: OR_AUTH_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.ors743A, S.ors743B, S.erisa],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Oregon-regulated) or self-funded (ERISA), and what reauthorization lead time Optum expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: OR_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.oar836, S.oar1280, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the member’s coordination-of-benefits order.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Oregon?', a: 'Yes, under Optum’s national ABA criteria for ASD, with Oregon’s ABA mandate and ORS 743A.168 parity applying to state-regulated plans.' },
      { q: 'Does Optum have Oregon-specific ABA criteria?', a: 'No. Optum’s ABA State Mandates supplement (July 2026) has no Oregon entry.' },
      { q: 'Can 97153 and 97155 be billed at the same time with UnitedHealthcare?', a: 'Yes, by different people: Optum allows 97153 or 97154 concurrently with 97155 when both code descriptors are met, but a single QHP may not report both for the same time.' },
      { q: 'Which ABA codes can be done by telehealth with UnitedHealthcare?', a: 'On commercial plans Optum allows only 97155, 97156 and 97157, billed with POS 02 or 10. Fully insured Oregon plans are also subject to ORS 743A.058.' },
      { q: 'Is UnitedHealthcare an Oregon Health Plan CCO?', a: 'No. OHP is delivered by coordinated care organizations such as Health Share, Trillium and PacificSource Community Solutions.' },
    ],
  },

  'regence-bluecross-blueshield-of-oregon': {
    slug: 'regence-bluecross-blueshield-of-oregon',
    family: 'bcbs',
    cardDesc: 'Oregon’s dominant Blue: Regence BH18/BH33 (prescription, ITP, standardized assessment) on contracts subject to preauthorization + Oregon’s mandate and parity law.',
    assessmentPA: {
      value: 'Plan-dependent: BH33 sets medical-necessity criteria for the initial assessment, but Regence’s ABA policies apply only "to member contracts that are subject to preauthorization"; check the member’s preauthorization list',
      status: 'plan-dependent',
      cites: [S.regBH33, S.regBH18],
      verifyVia: 'Regence’s preauthorization list for the member contract (Availity) or the number on the card: ask whether 97151/97152 need preauthorization.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Plan-dependent: required on contracts subject to ABA preauthorization; continuation documents go in within five business days before the authorization ends (and no more than 30 days before)',
      status: 'plan-dependent',
      cites: [S.regBH18],
      verifyVia: 'Regence’s preauthorization list for the member contract (Availity) or the behavioral health number on the card.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes: ASD diagnosed by a qualified treating health care professional "as defined by state law," with ABA recommended or prescribed by one experienced in ASD',
      status: 'verified',
      cites: [S.regBH18, S.regBH33],
    },
    payer: 'Regence BlueCross BlueShield of Oregon',
    state: 'OR', kind: 'commercial',
    pill: 'Payer Guide · Regence BlueCross BlueShield of Oregon',
    h1: 'Regence BlueCross BlueShield of Oregon ABA coverage: the intake guide.',
    metaTitle: 'Regence BlueCross BlueShield of Oregon ABA Coverage: Prior Auth Guide | Carelu',
    metaDescription:
      'How Regence BlueCross BlueShield of Oregon covers ABA: medical policies BH18 and BH33, the prescription and individualized treatment plan requirements, standardized assessments, continuation timing, Oregon’s ABA mandate and parity law, and Oregon licensure.',
    intro: [
      'Regence BlueCross BlueShield of Oregon applies two medical policies to ABA: BH18 for treatment and BH33 for the initial assessment. Both name "Oregon’s Mental Health Parity Act (ORS 743.168) effective August 8, 2014" as their Oregon benefit basis (the parity law now numbered ORS 743A.168), and both apply only where the member contract is subject to preauthorization for ABA.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, under BH18/BH33 and Oregon parity' },
      { label: 'State mandate', value: OR_MANDATE_ROW },
      { label: 'Mandate age', value: OR_AGE_ROW },
      { label: 'Mandate caps', value: OR_CAPS_ROW },
      { label: 'Exempt from mandate', value: OR_EXEMPT_ROW },
      { label: 'Licensure', value: OR_LIC_ROW },
      { label: 'Fee schedule', value: 'Not public — Regence pays contracted rates; OHP FFS (97153 $14.70) is the public benchmark' },
    ],
    sections: [
      {
        h2: 'The Regence rulebook, applied in Oregon',
        body: [
          'BH33 covers the initial assessment when ASD has been diagnosed by a qualified treating professional "(e.g. pediatrician, pediatric neurologist, developmental pediatrician, psychologist), as defined by state law," the symptoms impair functioning to the point of a safety risk or inability to join age-appropriate activities, and ABA is recommended or prescribed by such a professional. BH18 then requires an individualized treatment plan prepared by a provider certified to provide ABA, with targeted behaviors, current functioning measured by objective measurements "and at least one standardized assessment," evidence-based techniques, caregiver training, clinical justification for days, hours and supervision, and measurable discharge goals. Continuation requires measurable progress, objective measurements at least every six months and standardized assessments annually.',
          'For review Regence wants the diagnosis, a "Written recommendation, clinical order, or prescription for ABA services," the ITP with requested units, CPT codes and date range, and, for a member switching agencies, the most recent date of service with the previous ABA provider and the reason for discharge. Continuation documents are due "within five business days prior to the end of a current authorization (and no more than 30 days prior to the end of the authorization period)." The version we read (effective August 1, 2025) notes a revised BH18 effective November 1, 2026, which we did not retrieve.',
        ],
        cites: [S.regBH33, S.regBH18],
      },
      {
        h2: 'The Oregon mandate: what it guarantees',
        body: [OR_MANDATE_BODY],
        cites: [S.ors743A],
      },
      {
        h2: 'Licensure and out-of-state BCBAs',
        body: [OR_LICENSURE_BODY],
        cites: [S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.ors743A, S.oar0760],
      },
      {
        h2: 'Claims and prior-authorization clocks',
        body: [OR_CLAIMS_BODY],
        cites: [S.ors743B, S.ors743A, S.erisa],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Oregon law applies) vs. self-funded ERISA; and whether the contract is subject to ABA preauthorization.' },
      { title: 'Prescription', desc: 'Written recommendation, clinical order or prescription for ABA from the diagnosing/treating professional.' },
      { title: 'Standardized assessment', desc: 'At least one (e.g., SRS-2, Vineland-3, ABAS-3); curriculum tools like VB-MAPP support planning.' },
      { title: 'Prior ABA provider', desc: 'Last date of service and reason for discharge, if switching agencies.' },
      { title: 'Oregon license numbers', desc: 'Behavior analyst license and interventionist registrations for the team.' },
    ],
    sources: [S.regBH18, S.regBH33, S.ors743A, S.ors743B, S.ors676, S.oar824lic, S.oar824sup, S.hlo, S.bacbLic, S.oar836, S.oar1280, S.erisa, S.cfr433, S.tricare, S.champva, S.fee],
    deliveryRules: {
      supervision: {
        value: 'BCBAs and BCBA-Ds are independently qualified; BCaBAs "must work under the supervision of a BCBA or BCBA-D"; behavior technicians and RBTs "must be under the ongoing supervision of a BCBA, BCBA-D, or qualified supervisor," all per the BACB code. The ITP must justify the hours per week of direct face-to-face supervision. In Oregon, interventionists must also be registered and supervised for at least 5 percent of service hours (OAR 824-040-0010).',
        status: 'verified',
        cites: [S.regBH18, S.oar824sup],
      },
      concurrentBilling: {
        value: 'Not addressed in the BH18 version we read (effective 8/1/2025). A revised BH18 takes effect November 1, 2026; we did not retrieve its text.',
        status: 'unverified',
        cites: [S.regBH18],
        verifyVia: 'Regence medical policy BH18 effective 11/1/2026 (Regence provider medical policy library), or Regence provider services.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No numeric cap. Requested intensity needs clinical justification based on individual need, "must not be based solely on diagnosis, caregiver availability, or scheduling preferences," and "excessive hours" of supervision, assessment, social skills or parent training need justification.',
        status: 'verified',
        cites: [S.regBH18],
      },
      noteSignature: {
        value: 'Not addressed in BH18 or BH33.',
        status: 'unverified',
        cites: [S.regBH18],
        verifyVia: 'Regence provider manual (documentation standards) or your Regence participation agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'BH18 sets no setting rule but treats ABA used "for educational, vocational or custodial purposes" as not medically necessary. For fully insured Oregon plans, the mandate covers treatment at home, in a licensed facility, or in a setting approved by the licensed provider, and excludes IEP services.',
        status: 'plan-dependent',
        cites: [S.regBH18, S.ors743A],
        verifyVia: 'Regence provider services: confirm which places of service the member’s contract pays for ABA.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'BH18 says the ITP must come from a treating provider "certified to provide ABA therapy," which "include a qualified Lead Behavior Analysis Therapist (LBAT)," but does not say whose NPI goes on technician lines.',
        status: 'unverified',
        cites: [S.regBH18],
        verifyVia: 'Regence provider services or your agreement: ask whether RBT services bill under the supervising behavior analyst’s or the group’s NPI.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'BH18 and BH33 set no age limit.' + MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.regBH18, S.ors743A],
        verifyVia: 'Benefits verification on the member ID: establish fully insured vs. self-funded ERISA, then the contract’s terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis. Continued ABA requires objective measurements of goals at least every six months and standardized assessments annually.',
        status: 'verified',
        cites: [S.regBH18],
      },
      diagnosingProviders: {
        value: 'A qualified treating health care professional "(e.g. pediatrician, pediatric neurologist, developmental pediatrician, psychologist), as defined by state law." For fully insured Oregon plans the mandate lists a licensed neurologist, pediatric neurologist, developmental pediatrician, psychiatrist or psychologist experienced in ASD, and lets the insurer require re-diagnosis by one of them.',
        status: 'verified',
        cites: [S.regBH33, S.ors743A],
      },
      diagnosticTools: {
        value: 'No named diagnostic instrument. BH18 requires current functioning measured with objective measurements and at least one standardized assessment (examples: SRS-2, Vineland-3, ABAS-3, SSIS, BRIEF-2, PDDBI); curriculum-based tools such as VB-MAPP, ABLLS-R and AFLS guide planning.',
        status: 'verified',
        cites: [S.regBH18],
      },
      referral: {
        value: 'Yes: a "Written recommendation, clinical order, or prescription for ABA services" from a qualified treating professional experienced in ASD.' + MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.regBH18, S.regBH33, S.ors743A],
      },
      telehealth: {
        value: 'BH18 and BH33 publish no ABA telehealth rule.' + OR_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.regBH18, S.ors743A],
        verifyVia: 'Regence provider services: ask which ABA codes, POS and modifiers it pays by telehealth on this contract.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: OR_AUTH_COMMERCIAL + ' Regence asks for continuation documents within five business days before the authorization ends.',
        status: 'plan-dependent',
        cites: [S.ors743A, S.ors743B, S.erisa, S.regBH18],
        verifyVia: 'At benefits verification ask whether the plan is fully insured (Oregon-regulated) or self-funded (ERISA).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: OR_COB_COMMERCIAL,
        status: 'plan-dependent',
        cites: [S.oar836, S.oar1280, S.cfr433, S.tricare, S.champva],
        verifyVia: 'Ask Regence at benefits verification for the member’s coordination-of-benefits order.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Regence BlueCross BlueShield of Oregon cover ABA?', a: 'Yes, for ASD under medical policies BH18 and BH33, which cite Oregon’s mental health parity law; Oregon’s ABA mandate also applies to state-regulated plans.' },
      { q: 'Does Regence require a prescription for ABA?', a: 'Yes. It asks for a written recommendation, clinical order or prescription for ABA from a qualified treating professional experienced in ASD.' },
      { q: 'What does Regence need when a child switches ABA agencies?', a: 'BH18 asks for the most recent date of service with the previous ABA provider and the reason for discharge, along with the new treatment plan.' },
      { q: 'When should a Regence ABA reauthorization be submitted?', a: 'Within five business days before the current authorization ends, and no more than 30 days before.' },
    ],
  },
};

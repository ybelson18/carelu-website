import type { PayerConfig, PayerSource } from './types.js';

/* Louisiana — researched October 2026 from primary sources only.
   lamedicaid.com presents an incomplete TLS chain to automated clients; the ABA manual
   chapter and fee schedule were read in full through the https://r.jina.ai/<url> proxy.
   legis.la.gov statutes were read directly (Law.aspx?d=<id>). aetnabetterhealth.com
   returns an Akamai 403 on www for Louisiana pages and PDFs, even via jina; the same DAM
   files download from its es./ch. subdomains, which are the URLs cited below. The
   Louisiana Behavior Analyst Board site (lababoard.org) sits behind a captcha wall and
   could not be read. UnitedHealthcare Community Plan left Healthy Louisiana on
   March 31, 2026 (IB 26-3), so it has no Medicaid guide here; Healthy Blue leaves on
   December 31, 2026 (IB 26-12). */

const S: Record<string, PayerSource> = {
  msm: { title: 'LDH Medicaid Services Manual, Chapter 4: Applied Behavior Analysis (issued 08/22/25)', url: 'https://www.lamedicaid.com/provweb1/Providermanuals/manuals/ABA/ABA.pdf' },
  fee: { title: 'Louisiana Medicaid Applied Behavioral Analysis Fee Schedule (dates of service on or after July 1, 2022)', url: 'https://www.lamedicaid.com/provweb1/fee_schedules/ABA_FS_Current.pdf' },
  plans: { title: 'Healthy Louisiana — View health plans (current plan choices)', url: 'https://www.myplan.healthy.la.gov/en/compare-plans' },
  plansContact: { title: 'Healthy Louisiana — Contacting your health or dental plan', url: 'https://www.myplan.healthy.la.gov/en/contacting-your-health-or-dental-plan' },
  t2027: { title: 'LDH — Medicaid Health Plan Transition 2027 (Healthy Blue exit)', url: 'https://www.ldh.la.gov/medicaid/medicaid2027' },
  ib2612: { title: 'LDH Informational Bulletin 26-12 — Important Information Regarding Healthy Blue Transition (September 1, 2026)', url: 'https://ldh.la.gov/assets/docs/BayouHealth/Informational_Bulletins/2026/IB26-12.pdf' },
  ib2603: { title: 'LDH Informational Bulletin 26-3 — Important Information Regarding UnitedHealthcare Transition (January 14, 2026)', url: 'https://ldh.la.gov/assets/docs/BayouHealth/Informational_Bulletins/2026/IB26-03.pdf' },
  uhcLA: { title: 'UnitedHealthcare Community Plan of Louisiana — provider home (exit notice effective April 1, 2026)', url: 'https://www.uhcprovider.com/en/health-plans-by-state/louisiana-health-plans/la-comm-plan-home.html' },
  evv: { title: 'LDH — Electronic Visit Verification (EVV)', url: 'https://www.ldh.la.gov/medicaid/electronic-visit-verification' },
  rs1050: { title: 'La. R.S. 22:1050 — Coverage of diagnosis and treatment of autism spectrum disorders in individuals under 21', url: 'https://legis.la.gov/Legis/Law.aspx?d=507890' },
  rs3702: { title: 'La. R.S. 37:3702 — Behavior analysts: definitions (LBA, SCABA, registered line technician)', url: 'https://legis.la.gov/Legis/Law.aspx?d=860902' },
  rs3704: { title: 'La. R.S. 37:3704 — Louisiana Behavior Analyst Board: powers and duties (temporary licensure, reciprocity)', url: 'https://legis.la.gov/Legis/Law.aspx?d=860904' },
  rs3706: { title: 'La. R.S. 37:3706 — Qualifications of applicants for licensed behavior analyst', url: 'https://legis.la.gov/Legis/Law.aspx?d=860906' },
  rs3708: { title: 'La. R.S. 37:3708 — Registration of line technicians', url: 'https://legis.la.gov/Legis/Law.aspx?d=860907' },
  rs3715: { title: 'La. R.S. 37:3715 — Persons and practices not affected', url: 'https://legis.la.gov/Legis/Law.aspx?d=860915' },
  rs3716: { title: 'La. R.S. 37:3716 — Penalties (unlicensed practice of behavior analysis)', url: 'https://legis.la.gov/Legis/Law.aspx?d=860916' },
  rs3718: { title: 'La. R.S. 37:3718 — Termination of the behavior analyst chapter (July 1, 2028)', url: 'https://legis.la.gov/Legis/Law.aspx?d=860918' },
  rs12233: { title: 'La. R.S. 40:1223.3 — Telehealth Access Act: definitions', url: 'https://legis.la.gov/Legis/Law.aspx?d=964868' },
  rs12234: { title: 'La. R.S. 40:1223.4 — Telehealth; rulemaking required (out-of-state provider licensing or registration)', url: 'https://legis.la.gov/Legis/Law.aspx?d=964869' },
  rs1821: { title: 'La. R.S. 22:1821 — Payment of claims; prospective review; telehealth reimbursement by insurers', url: 'https://legis.la.gov/Legis/Law.aspx?d=508988' },
  rs1832: { title: 'La. R.S. 22:1832 — Standards for receipt and processing of nonelectronic claims', url: 'https://legis.la.gov/Legis/Law.aspx?d=509004' },
  rs1833: { title: 'La. R.S. 22:1833 — Standards for receipt and processing of electronic claims', url: 'https://legis.la.gov/Legis/Law.aspx?d=509008' },
  rs1836: { title: 'La. R.S. 22:1836 — Coordination of benefits', url: 'https://legis.la.gov/Legis/Law.aspx?d=509014' },
  bacbLic: { title: 'BACB — U.S. Licensure of Behavior Analysts (Louisiana: 2013, Louisiana Behavior Analyst Board)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
  cfr438: { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' },
  cfr433: { title: '42 CFR 433.139 — Medicaid third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' },
  erisa: { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
  tricare: { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' },
  champva: { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
  abhPol: { title: 'Aetna Better Health of Louisiana — Policy 7000.11, Applied Behavior Analysis (prior authorization; eff. 01/20/2022)', url: 'https://es.aetnabetterhealth.com/content/dam/aetna/medicaid/louisiana/providers/pdf/abhla_policy_a_la_applied_behavior_analysis.pdf' },
  abhNotice: { title: 'Aetna Better Health of Louisiana — Provider Network Notification: Applied Behavioral Analysis Policy (enforced 5/8/2022)', url: 'https://es.aetnabetterhealth.com/content/dam/aetna/medicaid/louisiana/providers/pdf/abhla_aba_policy_update_notification.pdf' },
  abhCDE: { title: 'Aetna Better Health of Louisiana — Healthcare Professional Guidelines for Comprehensive Diagnostic Evaluations for ABA Services', url: 'https://ch.aetnabetterhealth.com/content/dam/aetna/medicaid/louisiana/providers/pdf/abhla_ABA_Guidelines.pdf' },
  abhPM: { title: 'Aetna Better Health of Louisiana — Provider Manual (LA-22-10-02, revised 11-09-2023; LDH-posted copy)', url: 'https://www.ldh.la.gov/assets/medicaid/MCPP/11.20.23/822_ABH_2023_ABHLA_Provider_Manual_LDH_Submission.pdf' },
  aclaHB: { title: 'AmeriHealth Caritas Louisiana — Provider Manual (published September 2026)', url: 'https://www.amerihealthcaritasla.com/pdf/provider/resources/manual/handbook.pdf' },
  aclaCCP: { title: 'AmeriHealth Caritas Louisiana — Clinical Policy CCP.4040, Applied Behavior Analysis (reviewed 3/2024; LDH-posted copy)', url: 'https://www.ldh.la.gov/assets/medicaid/MCPP/9.5.24/506_ACLA_ccp4040_applied_behavior_analysis_final.pdf' },
  aclaAlert: { title: 'AmeriHealth Caritas Louisiana — Provider Alert: ABA Prior Authorization Form (November 19, 2025)', url: 'https://www.amerihealthcaritasla.com/content/dam/amerihealth-caritas/acla/pdf/provider/newsletters/2025/112025-provider-alert-aba-authorization-form.pdf.coredownload.inline.pdf' },
  hbPM: { title: 'Healthy Blue Louisiana — Medicaid Provider Manual (April 2026 posting)', url: 'https://provider.healthybluela.com/docs/gpp/LA_CAID_ProviderManual.pdf?v=202604141511' },
  hbPAL: { title: 'Healthy Blue Louisiana — Prior Authorization List (as of 07/06/2026)', url: 'https://provider.healthybluela.com/docs/gpp/LA_HBPAlist.pdf?v=202607202015' },
  hbWeekly: { title: 'Healthy Blue — Streamlined ABA claim process: weekly approved units (LAHB-CD-097207-25, state-approved copy posted by LDH 2/20/2026)', url: 'https://ldh.la.gov/assets/medicaid/MCPP/2_20_26/LAHB-CD-097207-25-CPN96709_EXPRESS-ABA-Claim-Processing_STATE_APP.pdf' },
  humCLI: { title: 'Humana Healthy Horizons in Louisiana — Medical Coverage Policy LA.CLI.022, Applied Behavior Analysis (eff. 02/11/2026)', url: 'https://assets.humana.com/is/content/humana/LACLI022%20Applied%20Behavioral%20Analysis%20LA%20ed%2002112026pdf' },
  humForm: { title: 'Humana Healthy Horizons in Louisiana — Applied Behavioral Analysis (ABA) Authorization form', url: 'https://assets.humana.com/is/content/humana/FINAL_316907LA0923-M_3576_LA_PROV_ABA_PA_Form_LAHLRVMENpdf' },
  humPM: { title: 'Humana Healthy Horizons in Louisiana — Provider Manual 2026 (v1.0)', url: 'https://assets.humana.com/is/content/humana/2026-1-14_LA_Provider%20Manual_2026_v1.0pdf' },
  lhccUM49: { title: 'Louisiana Healthcare Connections — LA.UM.49, Outpatient Applied Behavior Analysis Medical Necessity Criteria', url: 'https://www.louisianahealthconnect.com/content/dam/centene/louisiana-health-connect/policies/clinical-policies/LA.UM.49_Outpatient_Applied_Behavior_Analysis_Medical_Necessity_Criteria.pdf' },
  lhccUniform: { title: 'Louisiana Healthcare Connections — Uniform ABA Prior Authorization Form Now Available (11/17/25)', url: 'https://www.louisianahealthconnect.com/newsroom/uniform-aba-prior-authorization-form-now-available.html' },
  lhccForm: { title: 'Uniform (all-MCO) Applied Behavioral Analysis Authorization form, Louisiana Healthcare Connections copy (11/2025)', url: 'https://www.louisianahealthconnect.com/content/dam/centene/louisiana-health-connect/pdfs/medicaid-provider/LHCC%20ALL%20MCO%20ABA%20AUTH%20FORM%20112025.pdf' },
  lhccPA: { title: 'Louisiana Healthcare Connections — Prior Authorization (provider resources)', url: 'https://louisianahealthconnect.com/providers/resources/prior-authorization.html' },
  aetnaGuide: { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026, 7244850-01-01)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
  aetnaPrecert: { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
  aetnaNPC: { title: 'Aetna — Provider and facility participation criteria (8100606-01-01, 5/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/network-participation-criteria-document.pdf' },
  aetnaOM: { title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, 6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
  en0499: { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
  cignaARG: { title: 'Cigna / Evernorth autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
  ebhAdmin: { title: 'Evernorth Behavioral Health Administrative Guidelines (PCOMM-2026-191, September 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' },
  optumSCC: { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC; annual review 8/2025, interim review 4/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
  optumReimb: { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
  optumTele: { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
  optumNNM: { title: 'Optum National Network Manual (BH02330)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
  labPol: { title: 'Louisiana Blue Medical Policy 00816 — Applied Behavior Analysis for Autism Spectrum Disorder (current effective 05/01/2026)', url: 'https://providers.lablue.com/-/media/Files/Providers/00816%2020260501%20Applied%20Behavior%20Analysis%20for%20Autism%20Spectrum%20Disorder%20pdf.pdf' },
  labFAQ: { title: 'Louisiana Blue — Behavioral Health Authorizations FAQs (18NW4041, 12/25)', url: 'https://providers.lablue.com/-/media/Files/Providers/2025-12%20Behavioral%20Health%20Auth%20FAQs%20pdf.pdf' },
  labAut: { title: 'Louisiana Blue Member Provider Policy & Procedure Manual, Section 5.5 Autism (current as of January 2026)', url: 'https://providers.lablue.com/resources/-/media/Files/Providers/Facility%20Manual/2026/Facility%20Manual%20Section%2055%20Autism%20pdf.pdf' },
  labBH: { title: 'Louisiana Blue Member Provider Policy & Procedure Manual, Section 5.6 Behavioral Health (current as of January 2026)', url: 'https://providers.lablue.com/resources/-/media/Files/Providers/Facility%20Manual/2026/Facility%20Manual%20Section%2056%20Behavioral%20Health%20pdf.pdf' },
  labClaims: { title: 'Louisiana Blue Member Provider Policy & Procedure Manual, Section 7 Claims Submission (2026)', url: 'https://providers.lablue.com/resources/-/media/Files/Providers/Facility%20Manual/2026/Facility%20Manual%20Section%207%20Claims%20Submission%20pdf.pdf' },
};

/* ---- Shared Louisiana Medicaid facts (state rule an MCO inherits when it publishes nothing of its own) ---- */
const LA_MCD_SUPERVISION =
  'Louisiana Medicaid sets the ratio in the ABA manual chapter: supervision "shall be approved on a 2:10 basis; that is two hours of supervision for every ten hours of therapy," part of it "must be done in the presence of the beneficiary" and the CaBA or registered line technician (RLT), and it "will not be approved if the licensed supervising professional is delivering the direct therapy." The licensed supervising professional "shall supervise no more than 24 technicians a day" (more if a CaBA is on the team) and "no more than 10 CaBAs." If technician services are in the plan, supervision by a licensed behavior analyst must be part of it.';

const LA_MCD_CONCURRENT =
  'Yes. The LDH manual says: "One-on-one supervision may by be conducted and billed simultaneously and concurrently with one-on-one therapeutic behavioral services. Supervision can only occur when a non-licensed professional is providing the therapeutic behavioral services." In practice that is 97155 alongside 97153 when an RLT or CaBA is delivering the session.';

const LA_MCD_NOTES =
  'Start and stop times are required "for every code billed" (at the start of the session, after any break of 12 minutes or more, and on a switch of billing code). "The person delivering the service must sign, date, and include their credentials in the documentation for each day and distinct session," and the daily log must also carry the "Name, signature, and credentials for supervising BCBA who is also rendering provider for billing." For an RLT session, recorded data can replace the narrative. Records are kept at least six years.';

const LA_MCD_POS =
  'Services "must be provided in a natural setting (e.g., home and community-based settings, including clinics and school)," and school-based ABA by ABA providers is allowed. A treatment plan that puts services in a school "will not be approved until an IEP is provided" to the MCO. Sessions at a "non-ABA facility" (any place other than the home that does not offer ABA as a primary service) need an addendum explaining why they cannot happen at home or at the ABA facility. A change of setting mid-authorization needs a treatment-plan addendum.';

const LA_MCD_BILLAS =
  'The supervisor. "When billing for ABA services, the rendering provider on the claim form must be the provider that provided supervision for those services and signed documentation indicating that they supervised the services being billed for on the claim," and "Payment for services must be billed by the licensed professional" (an LBA, licensed psychologist or licensed medical psychologist). RLTs are not billed as rendering providers.';

const LA_MCD_AGE =
  'Under 21. ABA is covered for "Medicaid beneficiaries under 21 years of age" who meet the manual’s criteria.';

const LA_MCD_DX_RECENCY =
  'No expiry. "MCOs shall not deny services based solely on the age of the CDE," and "The CDE only needs to be included in the first PA request per member per provider." The MCO "shall deny service if no CDE exists," and if it asks for a new CDE it "shall not deny or delay available ABA services while waiting for a CDE." A family that switches ABA providers needs the CDE sent again with the new provider’s first request.';

const LA_MCD_DIAGNOSERS =
  'A qualified health care professional (QHCP). Pediatricians may diagnose using the MCHAT-R/F and clinical judgment (a score of 8 or more lets them diagnose independently; 3–7 means a follow-up interview, then diagnose or refer). The subspecialists are a pediatric neurologist, developmental pediatrician, psychologist or medical psychologist, psychiatrist, a pediatrician working with a qualified interdisciplinary team, a nurse practitioner supervised by one of those specialists, or a licensed SLP, LCSW or LPC whose scope includes ASD differential diagnosis and who has two years of diagnostic experience or works under a QHCP who co-signs the CDE.';

const LA_MCD_TOOLS =
  'No named instrument is required. The CDE must include a clinical history, direct observation, record review, a DSM-5 (or current edition) diagnosis, the rationale for referral or non-referral to ABA, and recommendations. Only when screening is borderline or the diagnosis or need is unclear must it add autism-specific, general psychopathology, cognitive/developmental and adaptive-behavior assessments. Pediatricians may diagnose on the MCHAT-R/F.';

const LA_MCD_REFERRAL =
  'Yes: a prescription for ABA "ordered by a QHCP," but "If there is a recommendation in the comprehensive diagnostic evaluation (CDE) for ABA therapy, a separate prescription is not needed." The behavior treatment plan must name the child’s PCP, be sent to the PCP, and progress notes go to the PCP every six months with each renewal.';

const LA_MCD_TELEHEALTH =
  'Yes, with prior authorization. The LDH manual lists 97151–97158 as codes that "can be performed via telehealth," with reimbursement rules otherwise unchanged; services must be "rendered or directed by a RLT, LBA, or CaBA" over "an interactive audio/visual telecommunications system." Reassessments and treatment plans may be done remotely "only if the same standard of care can be met," and RLT supervision "may be conducted via telehealth in lieu of the LBA/CaBA being physically present." 0362T and 0373T are not on the telehealth list.';

const LA_MCD_COB =
  'Medicaid pays last (42 CFR 433.139). The LDH manual lets the MCO "bypass the prior authorization (PA) process and acknowledge the PA granted by the primary insurer" when another insurer covers ABA. The MCOs tightened this in November 2025: with the new uniform ABA form, if the primary insurance covers ABA, "Medicaid will remain the payor of last resort, and the authorization will be placed in a pending status until primary coverage is confirmed," so send the primary insurer’s approval or denial with the Medicaid request.';

const LA_MCD_TURNAROUND_FED =
  'Federal law caps a Medicaid managed care standard authorization decision at 7 calendar days for rating periods starting on or after January 1, 2026 (one 14-day extension allowed).';

/* ---- Shared Louisiana commercial layer ---- */
const LA_MANDATE_BODY =
  'Louisiana’s autism mandate is La. R.S. 22:1050. Any "health coverage plan" issued, delivered or renewed in the state on or after January 1, 2014 must "provide coverage for the diagnosis and treatment of autism spectrum disorders in individuals less than twenty-one years of age," and the definition of a health coverage plan reaches insurance policies, HMO and PPO contracts, group plans and the Office of Group Benefits programs (state employees). Treatment includes habilitative care, defined to include applied behavior analysis, plus pharmacy, psychiatric, psychological and therapy care, but only care "prescribed, provided, or ordered" by "a physician or psychologist who shall be licensed in this state and who shall supervise provision of such care." Coverage may not be limited by visit count and may carry ordinary copays and deductibles, but it "shall be subject to a maximum benefit of thirty-six thousand dollars per year," and payments for unrelated care do not count toward that cap. An ABA provider must be BACB-certified or able to document equivalent education, training and supervised experience. Plans may review treatment against medical-necessity criteria "based in part on evidence of continued improvement," with appeal rights under R.S. 22:1121 et seq. The statute does not apply to individually underwritten guaranteed-renewable policies or limited-benefit policies, and self-funded employer plans answer to ERISA rather than state insurance law. legis.la.gov notes its text is current through the 2025 First Extraordinary Session.';

const LA_LICENSURE_BODY =
  'Louisiana licenses behavior analysts (La. R.S. 37:3701 et seq.; the BACB lists Louisiana’s law as enacted in 2013). The Louisiana Behavior Analyst Board issues three credentials: the licensed behavior analyst (LBA, master’s degree plus a nationally accredited exam and a Louisiana jurisprudence exam), the state-certified assistant behavior analyst (SCABA, bachelor’s level, practicing under an LBA), and the registered line technician (RLT, 18 or older with a high school diploma, registered with the board by the supervising LBA and renewed every year). It is a misdemeanor for anyone not licensed, certified or registered "to engage in the practice of behavior analysis," and to "employ as a line technician, a line technician who is not registered." Licensed psychologists may provide ABA within their training. Out-of-state BCBAs: BACB certification alone does not authorize practice in Louisiana. The board may make rules for temporary licensure and for reciprocity from states with standards "at least as stringent," and the Telehealth Access Act (R.S. 40:1223.4) requires each licensing board to provide by rule for "Licensing or registration of out-of-state healthcare providers who seek to furnish healthcare services via telehealth to persons at originating sites in Louisiana." We could not open the board’s own rules (its website is behind a captcha), so confirm the current telehealth or temporary-licensure route with the board before a remote BCBA treats a Louisiana child. The chapter is scheduled to terminate on July 1, 2028 unless the legislature extends it. On rates: commercial ABA rates are negotiated and unpublished; the public benchmark is the Louisiana Medicaid fee schedule (97153 $12.50 and 97155 $22.50 per 15 minutes), which Medicaid MCOs must pay at least.';

const LA_PROMPT_PAY =
  'Louisiana’s prompt-pay law covers contracted providers of fully insured plans: an electronic clean claim "shall be paid, denied, or pended not more than twenty-five days" after receipt (R.S. 22:1833), a paper clean claim filed within 45 days of service within 45 days (60 days if filed later or resubmitted) (R.S. 22:1832), and a late payment carries "a late payment adjustment equal to twelve percent per annum." An issuer may elect a single 30-day standard by notice to the commissioner, and it gets the same window to audit a paid claim that it gives you to file one. These sections do not apply to the Office of Group Benefits, and self-funded ERISA plans are outside them.';

const LA_MANDATE_AGE_TAIL =
  ' For a fully insured Louisiana plan, R.S. 22:1050 requires autism coverage for individuals "less than twenty-one years of age," subject to "a maximum benefit of thirty-six thousand dollars per year." Self-funded ERISA plans, individually underwritten guaranteed-renewable policies and limited-benefit policies are outside the statute.';

const LA_MANDATE_REFERRAL_TAIL =
  ' For a fully insured Louisiana plan, R.S. 22:1050(G)(11) covers autism treatment "prescribed, provided, or ordered" by "a physician or psychologist who shall be licensed in this state and who shall supervise provision of such care," so keep that order on file. Self-funded ERISA plans sit outside the statute.';

const LA_TELE_TAIL =
  ' For a fully insured Louisiana plan, R.S. 22:1821(F)(2) makes services by telehealth subject to the insurer’s "utilization review criteria and requirements" and voids policy terminology "that either discriminates against or prohibits" telehealth. The clinician still needs Louisiana authority to practice: the behavior analyst licensing law applies, and R.S. 40:1223.4 tells each board to license or register out-of-state providers serving patients located in Louisiana. Self-funded employer plans are outside the state insurance statute.';

const LA_AUTH_TAIL =
  'Depends on how the plan is funded. Self-funded employer (ERISA) plans follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent care within 72 hours. For fully insured Louisiana plans whose contract requires prospective review, R.S. 22:1821(D)(3) treats an answer within "two working days" of the provider’s request as not unreasonable, and says a longer delay "may be considered unreasonable depending on the circumstances"; that section governs the insurer’s liability for unreasonable delay rather than setting a hard deadline.';

const LA_COB_BODY =
  'For a child on two plans, ask both carriers for the order of benefits; Louisiana’s commissioner sets the order by regulation (R.S. 22:1836(B)), which we did not read. What the statute does say: no plan may call itself "always excess" or "always secondary" outside those rules, a plan may not reduce benefits because the child could have enrolled in another plan, and a plan may not "pend, delay, or deny payment" to a provider "solely on the basis of the insured’s failure" to report other coverage (a contracted provider must pass along any coordination-of-benefits information it gets). If the child also has Louisiana Medicaid, the commercial plan pays first: Medicaid is payer of last resort (42 CFR 433.139), and since November 2025 the Medicaid plans hold ABA authorizations as pending until you send the primary insurer’s determination. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is the last payer (38 CFR 17.270).';

const LA_MANDATE_ROWS = [
  { label: 'State mandate', value: 'La. R.S. 22:1050 (Acts 2008, No. 648, as amended through Acts 2012, No. 208)' },
  { label: 'Mandate age', value: 'Under 21' },
  { label: 'Mandate caps', value: '$36,000 per year maximum benefit; no visit limits' },
  { label: 'Exempt from mandate', value: 'Self-funded ERISA employer plans; individually underwritten guaranteed-renewable and limited-benefit policies (R.S. 22:1050(H))' },
  { label: 'Licensure', value: 'Yes: Louisiana Behavior Analyst Board licenses LBAs, certifies SCABAs and registers line technicians (R.S. 37:3701 et seq.)' },
];

export const louisianaPayers: Record<string, PayerConfig> = {
  'louisiana-medicaid': {
    slug: 'louisiana-medicaid',
    cardDesc: 'ABA for under-21s, run entirely through the Healthy Louisiana MCOs; two-step PA, 2:10 supervision, published state floor rates.',
    assessmentPA: {
      value: 'Yes. "Services for “Behavior Identification Assessment” must be prior authorized by the beneficiary’s MCO," as must 97152 and 0362T; the first request must include the comprehensive diagnostic evaluation (CDE)',
      status: 'verified',
      cites: [S.msm],
    },
    treatmentPA: {
      value: 'Yes. A second authorization covers treatment and must include the CDE, the behavior treatment plan and the IEP (plus the waiver plan pages if the child is on a waiver); each authorization lasts no more than 180 days',
      status: 'verified',
      cites: [S.msm],
    },
    dxRequired: {
      value: 'A qualifying diagnosis, not ASD only: the child must be diagnosed by a QHCP "with a condition for which ABA-based therapy services are recognized as therapeutically appropriate, including autism spectrum disorder," after a CDE',
      status: 'verified',
      cites: [S.msm, S.abhCDE],
    },
    payer: 'Louisiana Medicaid (Healthy Louisiana)',
    state: 'LA', kind: 'state-medicaid',
    pill: 'Payer Guide · Louisiana Medicaid',
    h1: 'Louisiana Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Louisiana Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Louisiana Medicaid covers ABA: a State Plan benefit for members under 21 delivered through the Healthy Louisiana plans, the CDE and two-step prior authorization, 2:10 supervision, the published ABA fee schedule, telehealth codes, and the 2026 plan exits.',
    intro: [
      'Louisiana Medicaid covers applied behavior analysis under the Medicaid State Plan for members under 21, and Chapter 4 of the Medicaid Services Manual (issued August 22, 2025) is the rulebook. One sentence in it decides the workflow: "ABA services are provided through Managed Care Organizations (MCOs)." There is no fee-for-service ABA path to bill; every request, authorization and claim goes to the child’s Healthy Louisiana plan, and the plans follow the state manual closely.',
      'Two things changed in 2026. UnitedHealthcare Community Plan left Healthy Louisiana on March 31, 2026, and Healthy Blue leaves on December 31, 2026; its members pick or are assigned a new plan from January 1, 2027. From then the plans are Aetna Better Health, AmeriHealth Caritas Louisiana, Humana Healthy Horizons in Louisiana and Louisiana Healthcare Connections. And since November 2025 the plans use one uniform ABA authorization form and hold ABA requests for children with other insurance until the primary insurer’s decision arrives.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, State Plan benefit for members under 21' },
      { label: 'Structure', value: 'Carved in to Healthy Louisiana MCOs: Aetna Better Health, AmeriHealth Caritas, Humana Healthy Horizons, Louisiana Healthcare Connections; Healthy Blue through 12/31/2026' },
      { label: 'Prior auth', value: 'Two steps: assessment, then treatment; each authorization 180 days maximum' },
      { label: 'Diagnosis', value: 'CDE by a qualified health care professional; any condition ABA treats, including ASD' },
      { label: 'Rates (per 15 min)', value: '97151 $25.00 · 97153 $12.50 · 97155/97156 $22.50 · 97152 $11.00 · 0362T/0373T $23.00 (eff. 7/1/2022; MCO floor)' },
      { label: 'Supervision', value: '2 hours per 10 hours of therapy; supervisor is the rendering provider on the claim' },
      { label: 'Licensure', value: 'LBA licensed by the Louisiana Behavior Analyst Board (or licensed psychologist); CaBAs certified, RLTs registered' },
    ],
    sections: [
      {
        h2: 'Who qualifies, and the comprehensive diagnostic evaluation',
        body: [
          'ABA is available to Medicaid members under 21 who show behavior excesses or deficits "that significantly interfere with home or community activities (e.g., aggression, self-injury, elopement, etc.)," have been diagnosed by a qualified health care professional (QHCP) with a condition ABA is recognized to treat, "including autism spectrum disorder," have had a comprehensive diagnostic evaluation (CDE) by a QHCP, and have a prescription from a QHCP (not needed when the CDE recommends ABA). Aetna Better Health’s guidance for evaluators puts the consequence plainly: "Unlike many private health plans, the Louisiana Medicaid program does NOT require that the eligible member be diagnosed with autism or ASD," and does not require specific instruments such as the ADOS or Vineland.',
          'The CDE needs a clinical history with the caregiver, direct observation, a record review, a DSM-5 diagnosis, a rationale for referring or not referring to ABA, and recommendations. Pediatricians can diagnose on the MCHAT-R/F; the other QHCPs are pediatric neurologists, developmental pediatricians, psychologists, psychiatrists, team-based pediatricians, supervised nurse practitioners and experienced SLPs, LCSWs or LPCs. The CDE never goes stale on its own: plans "shall not deny services based solely on the age of the CDE," and if a plan wants a new one it must arrange it and keep services going meanwhile.',
        ],
        cites: [S.msm, S.abhCDE],
      },
      {
        h2: 'Prior authorization: two requests, 180 days each',
        body: [
          'All ABA must be prior authorized by the child’s MCO, in two steps. First the provider asks to conduct a functional assessment and write the behavior treatment plan, attaching the CDE (only on the first request per member per provider). Then a separate request asks for treatment, with the CDE, the treatment plan, the IEP, and the waiver Plan Profile Table and schedule if the child is on a waiver and services overlap. Reassessments happen at least every six months, and no assessment or treatment authorization runs longer than 180 days. Services delivered without authorization are not paid, except for retroactive eligibility. The treatment plan must show the weekly hours and locations, the direct observation, parent training goals and the PCP’s contact details; LDH’s plan-of-care template in Appendix D is optional, but its content is not. If a request is not approved as asked, the provider can request reconsideration from the MCO. Families may change ABA providers every 180 days, sooner for good cause.',
          'Since November 2025 the plans accept one uniform ABA authorization form. It asks whether there is a primary payer, whether the child is in school and whether an IEP exists, and it lists everything to attach for an initial assessment, initial treatment and continued treatment.',
        ],
        cites: [S.msm, S.lhccForm, S.lhccUniform, S.aclaAlert],
      },
      {
        h2: 'The ABA fee schedule',
        body: [
          'Louisiana Medicaid publishes one ABA fee schedule, effective for dates of service on or after July 1, 2022, and the manual makes it a floor for the plans: "MCO reimbursement rates shall be no less than the rates published" there. Per 15-minute unit: 97151 $25.00 (TF line $20.00); 97152 $11.00; 0362T $23.00; 97153 $12.50; 0373T $23.00; 97154 $4.50; 97155 $22.50 (TF $17.50); 97156 $22.50 (TF $17.50); 97157 $9.00 (TF $7.00); 97158 $10.00 (TF $7.50). The schedule’s columns are LBA, SCABA and technician, and modifiers mark the credential of the person delivering the service (HN bachelor’s level, TF intermediate level of care). Parents trained in ABA are not paid to treat their own child in place of an RLT, though a parent employed by an ABA provider can be.',
        ],
        cites: [S.fee, S.msm],
      },
      {
        h2: 'Staffing, licensure and out-of-state BCBAs',
        body: [
          'Medicaid ABA must be provided by, or supervised by, a behavior analyst "currently licensed by the Louisiana Behavior Analyst Board," or a licensed psychologist or medical psychologist. To enroll, an LBA needs $1,000,000/$3,000,000 professional liability coverage, a clean BCBA or BCBA-D certification and license, and a criminal background check (renewed every five years). CaBAs must be certified by the board and supervised under a written agreement; RLTs must be registered with the board and supervised by an LBA, with background checks at hire. Providers send each MCO a list of their RLTs at enrollment and every quarter.',
          'A BCBA licensed only in another state cannot treat a Louisiana Medicaid member: the manual requires the Louisiana license, and state law makes unlicensed practice of behavior analysis a misdemeanor. Louisiana’s Telehealth Access Act tells each board to set up licensing or registration for out-of-state providers serving patients located in Louisiana; the board’s rule could not be read for this guide, so ask the board which route applies.',
        ],
        cites: [S.msm, S.rs3716, S.rs12234, S.bacbLic],
      },
      {
        h2: 'Claims: timely filing, payment, appeals and EVV',
        body: [
          'Each plan sets its own claims rules within its LDH contract. The plans’ current manuals agree on a 365-day filing limit from the date of service (AmeriHealth Caritas Louisiana, Humana Healthy Horizons, Healthy Blue, Aetna Better Health). AmeriHealth Caritas Louisiana’s manual states the contract’s payment standard: 90% of clean claims paid or denied within 15 calendar days and all of them within 30. Provider claim disputes go first to the plan as an independent review reconsideration within 180 days of the remittance advice, then to LDH’s independent review within 60 days of the plan’s decision; a member appeal of a denied authorization is due within 60 calendar days of the notice. LDH’s electronic visit verification program covers personal care and home health services; ABA is not among the services it names.',
        ],
        cites: [S.aclaHB, S.humPM, S.hbPM, S.abhPM, S.evv],
      },
      {
        h2: '2026 plan changes: UnitedHealthcare and Healthy Blue exits',
        body: [
          'UnitedHealthcare’s participation in Louisiana Medicaid ended March 31, 2026, and its members moved to other plans on April 1, 2026. Healthy Blue ends its contract December 31, 2026. Its members have a special enrollment period from October 15 to November 16, 2026 and are otherwise auto-assigned, with new plans starting January 1, 2027. For ABA families the key rule is continuity: "HBL prior authorizations will be honored for up to 60 days (or through the authorization end date, whichever occurs first) by the receiving MCO," which may not deny solely because the provider is out of network. Providers must submit new requests to the new plan before that window closes, and Healthy Blue keeps paying claims through its 365-day filing window. Providers contracted only with Healthy Blue should contract with at least one of the four remaining plans.',
        ],
        cites: [S.ib2603, S.uhcLA, S.ib2612, S.t2027],
      },
    ],
    collect: [
      { title: 'Which plan is on the card', desc: 'Aetna Better Health, AmeriHealth Caritas, Humana Healthy Horizons, Louisiana Healthcare Connections, or Healthy Blue (through 12/31/2026). Check MEVS/REVS on each date of service.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'From a QHCP, with a DSM-5 diagnosis and an ABA recommendation (or a separate prescription). No expiry date applies.' },
      { title: 'IEP', desc: 'Required with the treatment request; school-based ABA is not approved until the plan has it. If unavailable, explain why.' },
      { title: 'Waiver status', desc: 'If the child is on a waiver, the Plan Profile Table and schedule page from the plan of care, via the waiver support coordinator.' },
      { title: 'PCP name and contact', desc: 'Must appear on every treatment plan; the PCP gets the plan and six-month progress notes.' },
      { title: 'Other insurance', desc: 'The primary insurer’s ABA approval or denial; Medicaid plans hold the authorization pending until they see it.' },
    ],
    sources: [S.msm, S.fee, S.plans, S.plansContact, S.ib2612, S.ib2603, S.t2027, S.uhcLA, S.lhccForm, S.lhccUniform, S.abhCDE, S.aclaHB, S.humPM, S.hbPM, S.abhPM, S.evv, S.rs3716, S.rs12234, S.bacbLic, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: LA_MCD_SUPERVISION,
        status: 'verified',
        cites: [S.msm],
      },
      concurrentBilling: {
        value: LA_MCD_CONCURRENT,
        status: 'verified',
        cites: [S.msm],
      },
      dailyLimits: {
        value: 'The LDH manual publishes no daily unit cap. Hours are set per authorization from the treatment plan’s weekly schedule, and each authorization runs no more than 180 days. Plans may apply their own unit logic: Healthy Blue has told providers it will pay ABA against weekly approved units.',
        status: 'plan-dependent',
        cites: [S.msm, S.hbWeekly],
        verifyVia: 'The member’s MCO utilization management line: ask how ABA units are authorized (weekly or total) and which unit edits its claims system applies.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: LA_MCD_NOTES,
        status: 'verified',
        cites: [S.msm],
      },
      placeOfService: {
        value: LA_MCD_POS,
        status: 'verified',
        cites: [S.msm],
      },
      billAsProvider: {
        value: LA_MCD_BILLAS,
        status: 'verified',
        cites: [S.msm],
      },
    },
    intakeGates: {
      ageLimit: {
        value: LA_MCD_AGE,
        status: 'verified',
        cites: [S.msm],
      },
      dxRecency: {
        value: LA_MCD_DX_RECENCY,
        status: 'verified',
        cites: [S.msm],
      },
      diagnosingProviders: {
        value: LA_MCD_DIAGNOSERS,
        status: 'verified',
        cites: [S.msm],
      },
      diagnosticTools: {
        value: LA_MCD_TOOLS,
        status: 'verified',
        cites: [S.msm, S.abhCDE],
      },
      referral: {
        value: LA_MCD_REFERRAL,
        status: 'verified',
        cites: [S.msm],
      },
      telehealth: {
        value: LA_MCD_TELEHEALTH,
        status: 'verified',
        cites: [S.msm],
      },
      authTurnaround: {
        value: 'The LDH ABA manual sets no clock of its own. The plans’ manuals print the contract standard: standard outpatient requests decided within 2 business days of receiving the needed information and no later than 7 calendar days after the request, extendable by 14 days; expedited requests within 72 hours. ' + LA_MCD_TURNAROUND_FED,
        status: 'verified',
        cites: [S.aclaHB, S.humPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: LA_MCD_COB,
        status: 'verified',
        cites: [S.cfr433, S.msm, S.lhccUniform],
      },
    },
    faq: [
      { q: 'Does Louisiana Medicaid cover ABA therapy?', a: 'Yes, for members under 21, through the child’s Healthy Louisiana plan. The child needs a comprehensive diagnostic evaluation from a qualified health care professional and a diagnosis ABA is recognized to treat; autism is the usual one but not the only one.' },
      { q: 'Is ABA carved out of Louisiana Medicaid managed care?', a: 'No. The LDH manual says ABA services are provided through the MCOs, and every request and claim goes to the child’s plan. There is no fee-for-service ABA billing path.' },
      { q: 'What does Louisiana Medicaid pay for ABA?', a: 'The state fee schedule (effective July 1, 2022) pays per 15 minutes: 97151 $25.00, 97152 $11.00, 97153 $12.50, 97154 $4.50, 97155 and 97156 $22.50, 97157 $9.00, 97158 $10.00, 0362T and 0373T $23.00, with lower TF-modifier lines. Plans must pay at least these rates.' },
      { q: 'Can a BCBA licensed in another state treat a Louisiana Medicaid child, including by telehealth?', a: 'Not on a BCBA certificate or another state’s license alone. Medicaid requires a behavior analyst licensed by the Louisiana Behavior Analyst Board (or a licensed psychologist), and state law makes unlicensed practice a misdemeanor. Louisiana law tells the board to provide a licensing or registration route for out-of-state telehealth providers; ask the board which applies.' },
      { q: 'Does a CDE expire for Louisiana Medicaid ABA?', a: 'No. Plans may not deny services based solely on the age of the CDE, and it only has to be sent with the first request to each provider. A plan that wants a new one must arrange it without pausing services.' },
      { q: 'What happens to ABA authorizations when Healthy Blue ends?', a: 'Healthy Blue leaves Medicaid on December 31, 2026. The new plan must honor Healthy Blue authorizations for up to 60 days or until they end, whichever comes first, even if the provider is out of network. Submit a new request to the new plan before then.' },
    ],
  },

  'aetna-better-health-louisiana': {
    slug: 'aetna-better-health-louisiana',
    family: 'aetna',
    cardDesc: 'Healthy Louisiana plan that applies the LDH ABA manual plus MCG criteria (Policy 7000.11); ABA telehealth on POS 02/10 with modifier 95.',
    assessmentPA: {
      value: 'Yes. Policy 7000.11: "Services for “Behavior Identification Assessment” must be prior authorized by Aetna Better Health," as must the supporting assessments',
      status: 'verified',
      cites: [S.abhPol],
    },
    treatmentPA: {
      value: 'Yes. "ABA requires prior authorization," with the CDE and behavior treatment plan; requests are reviewed against the LDH manual and MCG’s ABA guideline (B-806-T), with the LDH manual winning any conflict',
      status: 'verified',
      cites: [S.abhPol],
    },
    dxRequired: {
      value: 'A qualifying diagnosis, not ASD only: a condition "for which ABA-based therapy services are recognized as therapeutically appropriate, including autism spectrum disorder," after a CDE; the plan’s evaluator guidance says Louisiana Medicaid "does NOT require" an autism diagnosis',
      status: 'verified',
      cites: [S.abhPol, S.abhCDE],
    },
    payer: 'Aetna Better Health of Louisiana',
    state: 'LA', kind: 'medicaid-mco', parent: 'Louisiana Medicaid (Healthy Louisiana)',
    pill: 'Payer Guide · Aetna Better Health · Louisiana',
    h1: 'Aetna Better Health of Louisiana ABA coverage: the intake guide.',
    metaTitle: 'Aetna Better Health of Louisiana ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Aetna Better Health of Louisiana covers ABA for Medicaid members under 21: Policy 7000.11 and MCG criteria, the CDE rules, telehealth billing (POS 02/10, modifier 95), claims through Availity, and what intake should collect.',
    intro: [
      'Aetna Better Health of Louisiana is one of the Healthy Louisiana plans, and it will remain one after Healthy Blue leaves in 2027. Its ABA rules are the state’s: the plan says it "is aligned with the Louisiana Department of Health’s (LDH) Medicaid Services Manual," and its ABA prior-authorization policy (7000.11) repeats the manual’s requirements. What it adds is a second layer of criteria, MCG’s ABA guideline, applied where the manual is silent.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, members under 21 with a qualifying CDE' },
      { label: 'Prior auth', value: 'Assessment and treatment, per Policy 7000.11 (LDH manual + MCG B-806-T)' },
      { label: 'Criteria', value: 'LDH manual first; MCG where it is silent' },
      { label: 'Telehealth', value: '97151–97158 with POS 02 or 10 and modifier 95' },
      { label: 'Timely filing', value: '365 days from date of service; 180 days to resubmit' },
      { label: 'Contact', value: 'Provider Services 1-855-242-0802; LAProvider@AETNA.com' },
    ],
    sections: [
      {
        h2: 'Prior authorization and criteria',
        body: [
          'Policy 7000.11 (effective January 20, 2022, enforced from May 8, 2022) defines how the plan authorizes ABA. It restates the LDH requirements: a CDE by a qualified health care professional before any request, prior authorization of the behavior identification assessment and supporting assessments, reassessment at least every six months, authorization periods of no more than 180 days, and a behavior treatment plan with the LDH template’s content. For medical necessity, "In addition to the LDH ABA Provider Manual, the primary medical necessity criteria used to authorize ABA services is 25th Edition MCG Applied Behavioral Analysis ORG: B-806-T (BHG). In instances where the criteria differ, Aetna Better Health follows the LDH ABA Provider Manual guidelines." MCG asks, among other things, for serious dysfunction in daily living, individualized treatment intensity, and family engagement. Only the behavioral health medical director can deny or reduce an ABA request, and a denial letter offers a peer-to-peer.',
          'The plan’s guidance for evaluators adds two practical points: the CDE’s author must be in network (or on a single case agreement) to bill for it, and extra psychological or neuropsychological testing codes (96121, 96130–96139) need prior approval with an explanation of why they are necessary.',
        ],
        cites: [S.abhPol, S.abhNotice, S.abhCDE],
      },
      {
        h2: 'Telehealth and claims',
        body: [
          'The plan’s provider manual (revised November 2023, the latest copy we could open) covers ABA by telehealth for new and established patients: 97151 through 97158 may be delivered remotely with reimbursement otherwise unchanged, billed with place of service 02 (not home) or 10 (home) "based on the member’s location at the time of service" and "appended with modifier -95." An existing authorization does not need an addendum to switch to telehealth; new patients still need authorization, and RLT supervision may be remote. Claims go through Availity (Office Ally) or to P.O. Box 982962, El Paso, TX 79998-2962, within 365 days of the date of service, with 180 days to resubmit after an adverse determination; the plan pays ABA from the Louisiana Medicaid fee schedule.',
        ],
        cites: [S.abhPM, S.abhCDE],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Aetna Better Health of Louisiana is the plan on the date of service.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'From a qualified health care professional; any condition ABA treats qualifies, not only ASD.' },
      { title: 'IEP and waiver pages', desc: 'IEP with the treatment request; waiver Plan Profile Table and schedule if applicable.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; send the primary insurer’s ABA decision.' },
    ],
    sources: [S.abhPol, S.abhNotice, S.abhCDE, S.abhPM, S.msm, S.fee, S.lhccUniform, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The plan’s policy repeats the state’s staffing rule (technician services require supervision by a licensed behavior analyst in the treatment plan) and publishes no ratio of its own, so the LDH manual’s ratio applies. ' + LA_MCD_SUPERVISION,
        status: 'verified',
        cites: [S.abhPol, S.msm],
      },
      concurrentBilling: {
        value: 'The plan publishes no ABA concurrent-billing rule of its own and says it is aligned with the LDH manual, which allows it. ' + LA_MCD_CONCURRENT,
        status: 'verified',
        cites: [S.abhNotice, S.msm],
      },
      dailyLimits: {
        value: 'No ABA unit cap is published by the plan or the LDH manual; hours come from the authorized treatment plan, and MCG asks that intensity be "individualized and designed to meet needs of patient."',
        status: 'plan-dependent',
        cites: [S.abhPol, S.msm],
        verifyVia: 'Aetna Better Health of Louisiana BH utilization management, 1-855-242-0802: ask how units are authorized and edited.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The plan publishes no ABA note rule of its own and says it follows the LDH manual. ' + LA_MCD_NOTES,
        status: 'verified',
        cites: [S.abhNotice, S.msm],
      },
      placeOfService: {
        value: 'The plan publishes no setting rule of its own beyond the telehealth POS codes (02 and 10). ' + LA_MCD_POS,
        status: 'verified',
        cites: [S.abhPM, S.msm],
      },
      billAsProvider: {
        value: 'The plan publishes no ABA-specific rendering rule and says it follows the LDH manual. ' + LA_MCD_BILLAS,
        status: 'verified',
        cites: [S.abhNotice, S.msm],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: "ABA is a covered service for members under the age of 21" who meet the state criteria.',
        status: 'verified',
        cites: [S.abhPol, S.abhCDE],
      },
      dxRecency: {
        value: 'The plan sets no recency rule, so the state’s applies. ' + LA_MCD_DX_RECENCY,
        status: 'verified',
        cites: [S.abhPol, S.msm],
      },
      diagnosingProviders: {
        value: 'The plan’s current evaluator guidance lists the same QHCPs as the LDH manual. ' + LA_MCD_DIAGNOSERS,
        status: 'verified',
        cites: [S.abhCDE, S.msm],
      },
      diagnosticTools: {
        value: 'None required by name. The plan tells evaluators that Louisiana Medicaid "does NOT require specific assessments (such as the Autism Diagnostic Observation Schedule or the Vineland Adaptive Behavior Scales)"; extra testing is for unclear cases and needs prior approval under codes 96121 and 96130–96139.',
        status: 'verified',
        cites: [S.abhCDE],
      },
      referral: {
        value: 'A prescription "ordered by a qualified health care professional," satisfied by a CDE that recommends ABA. The CDE’s author must be in network or on a single case agreement to bill the plan for the evaluation.',
        status: 'verified',
        cites: [S.abhPol, S.abhCDE, S.msm],
      },
      telehealth: {
        value: 'Yes. 97151–97158 may be delivered by telehealth for new or established patients, billed with POS 02 (member not at home) or 10 (member at home) and modifier 95; an existing authorization needs no addendum, and RLT supervision may be done remotely by the LBA or CaBA. Services must be "rendered or directed by" an RLT, LBA or CaBA over interactive audio/video.',
        status: 'verified',
        cites: [S.abhPM, S.msm],
      },
      authTurnaround: {
        value: 'The plan’s manual says PA criteria must be available online or within 24 hours of a request and denial notices go to the provider in writing within 3 days of the decision; it does not print an ABA decision clock that we could find. ' + LA_MCD_TURNAROUND_FED,
        status: 'plan-dependent',
        cites: [S.abhPM, S.cfr438],
        verifyVia: 'Aetna Better Health of Louisiana UM, 1-855-242-0802: ask the standard turnaround for an ABA request and how far ahead to submit a reauthorization.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'The plan’s manual: "the Medicaid program by law is intended to be the payer of last resort," and other coverage must pay first; third-party-liability claims share the 365-day filing limit. ' + LA_MCD_COB,
        status: 'verified',
        cites: [S.abhPM, S.cfr433, S.msm, S.lhccUniform],
      },
    },
    faq: [
      { q: 'Does Aetna Better Health of Louisiana require prior authorization for ABA?', a: 'Yes, for the assessment and for treatment, under Policy 7000.11. Requests are judged against the LDH ABA manual and MCG’s ABA guideline, with the LDH manual controlling where they differ.' },
      { q: 'Does my child need an autism diagnosis for ABA through Aetna Better Health of Louisiana?', a: 'No. Louisiana Medicaid covers ABA for any condition ABA is recognized to treat, including autism, after a comprehensive diagnostic evaluation. The plan’s own guidance says so.' },
      { q: 'How is ABA telehealth billed to Aetna Better Health of Louisiana?', a: 'Codes 97151–97158 with place of service 02 or 10 (by where the child is) and modifier 95. An existing authorization does not need an addendum.' },
    ],
  },

  'amerihealth-caritas-louisiana': {
    slug: 'amerihealth-caritas-louisiana',
    family: 'amerihealth',
    cardDesc: 'Healthy Louisiana plan whose ABA policy CCP.4040 mirrors the LDH manual; 2-business-day / 7-day PA clock, 365-day filing.',
    assessmentPA: {
      value: 'Yes. "Services for “Behavior Identification Assessment” must be prior authorized by AmeriHealth Caritas Louisiana," as must the supporting assessments (CCP.4040)',
      status: 'verified',
      cites: [S.aclaCCP],
    },
    treatmentPA: {
      value: 'Yes. Covered ABA must be "Prior authorized by AmeriHealth Caritas Louisiana"; authorization periods do not exceed 180 days. Use the ABA authorization form posted under Forms',
      status: 'verified',
      cites: [S.aclaCCP, S.aclaAlert, S.aclaHB],
    },
    dxRequired: {
      value: 'A qualifying diagnosis after a CDE by a QHCP; the plan publishes nothing narrower than the state rule, which covers conditions "for which ABA-based therapy services are recognized as therapeutically appropriate, including autism spectrum disorder"',
      status: 'verified',
      cites: [S.aclaCCP, S.msm],
    },
    payer: 'AmeriHealth Caritas Louisiana',
    state: 'LA', kind: 'medicaid-mco', parent: 'Louisiana Medicaid (Healthy Louisiana)',
    pill: 'Payer Guide · AmeriHealth Caritas · Louisiana',
    h1: 'AmeriHealth Caritas Louisiana ABA coverage: the intake guide.',
    metaTitle: 'AmeriHealth Caritas Louisiana ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How AmeriHealth Caritas Louisiana covers ABA for Medicaid members under 21: clinical policy CCP.4040, the two-step authorization, 2:10 supervision, telehealth codes, PA turnaround, claims deadlines and disputes.',
    intro: [
      'AmeriHealth Caritas Louisiana is one of the Healthy Louisiana plans that remain after the 2026 exits. Its ABA clinical policy, CCP.4040, is the LDH manual chapter almost word for word, and its September 2026 provider manual adds the operational detail: how fast it decides, how long you have to file, and how disputes work.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, members ages 0–20 with a qualifying CDE' },
      { label: 'Prior auth', value: 'Assessment and treatment (CCP.4040); 180-day maximum' },
      { label: 'Decision clock', value: '2 business days after documentation for 80% of requests; all within 7 calendar days' },
      { label: 'Timely filing', value: '365 calendar days; 180 days to resubmit a denied claim' },
      { label: 'Supervision', value: '2 hours per 10 hours of therapy' },
      { label: 'Contact', value: 'Provider Services 1-888-922-0007' },
    ],
    sections: [
      {
        h2: 'Coverage and prior authorization',
        body: [
          'CCP.4040 covers ABA that is medically necessary, prior authorized by the plan, and delivered under the member’s behavior treatment plan, provided by or under the supervision of a Louisiana-licensed behavior analyst, licensed psychologist or medical psychologist, who bills for the services. It lists the same qualified health care professionals and CDE contents as the LDH manual, requires prior authorization of the behavior identification assessment and supporting assessments, limits authorizations to 180 days, and sets the 2:10 supervision ratio. In November 2025 the plan posted its ABA authorization form (the uniform form used by all the plans) under Provider Resources, Forms, and recommends NaviNet for submissions.',
        ],
        cites: [S.aclaCCP, S.aclaAlert, S.lhccUniform],
      },
      {
        h2: 'Turnaround, claims and disputes',
        body: [
          'The September 2026 provider manual sets the clocks. Non-urgent prior authorizations: 80% "Within two (2) business days of receiving appropriate documentation," and "All standard Service Authorization shall be made no later than seven (7) Calendar Days following receipt of the request," extendable by up to 14 days; expedited requests within 72 hours. Claims, including those with a primary carrier’s EOB, are due within 365 calendar days of service; corrected or resubmitted claims within 180 days of the denial; retro-enrolled members allow 365 days from service or 180 days from the linkage date, whichever is later. The plan states it processes 90% of clean claims within 15 calendar days and all within 30. Claim disputes start with an independent review reconsideration within 180 days of the remittance advice (resolved within 45 days), then LDH independent review within 60 days. Members may appeal a denial within 60 calendar days of the notice.',
        ],
        cites: [S.aclaHB],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm AmeriHealth Caritas Louisiana on the date of service.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'From a QHCP, recommending ABA or with a separate QHCP prescription.' },
      { title: 'IEP and waiver pages', desc: 'IEP with the treatment request; waiver Plan Profile Table and schedule if applicable.' },
      { title: 'Other insurance', desc: 'The plan is payer of last resort; claims with a primary EOB still have to arrive within 365 days of service.' },
    ],
    sources: [S.aclaCCP, S.aclaHB, S.aclaAlert, S.lhccUniform, S.msm, S.fee, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'CCP.4040 adopts the state ratio: supervision "shall be approved on a 2:10 basis," part of it in the presence of the member and the CaBA or RLT, not approved when the supervisor is delivering direct therapy, and no more than 24 technicians a day or 10 CaBAs per licensed professional.',
        status: 'verified',
        cites: [S.aclaCCP],
      },
      concurrentBilling: {
        value: 'Yes. CCP.4040: "One on one supervision may by be conducted and billed simultaneously and concurrently with one-on-one therapeutic behavioral services. Supervision can only occur when a non-licensed professional is providing the therapeutic behavioral services."',
        status: 'verified',
        cites: [S.aclaCCP],
      },
      dailyLimits: {
        value: 'Neither CCP.4040 nor the provider manual publishes an ABA unit cap; hours come from the authorized weekly schedule, and authorizations run no more than 180 days.',
        status: 'plan-dependent',
        cites: [S.aclaCCP, S.aclaHB],
        verifyVia: 'AmeriHealth Caritas Louisiana BH utilization management or Provider Services, 1-888-922-0007: ask how ABA units are authorized and edited.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'CCP.4040 and the manual add no note rule of their own, so the LDH manual applies. ' + LA_MCD_NOTES,
        status: 'verified',
        cites: [S.aclaCCP, S.msm],
      },
      placeOfService: {
        value: 'CCP.4040 requires the treatment plan to name the location (home, clinic, school, camp) and an addendum if it changes; the LDH manual otherwise governs. ' + LA_MCD_POS,
        status: 'verified',
        cites: [S.aclaCCP, S.msm],
      },
      billAsProvider: {
        value: '"Payment for services must be billed by the licensed professional" (CCP.4040). The LDH manual adds that the rendering provider on the claim must be the supervisor who signed the documentation. The plan’s ABA billing specifics sit in its Claim Filing Instructions, which we did not read.',
        status: 'verified',
        cites: [S.aclaCCP, S.msm, S.aclaHB],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: the manual lists "Applied Behavior Analysis (ABA) Ages 0-20."',
        status: 'verified',
        cites: [S.aclaHB, S.aclaCCP],
      },
      dxRecency: {
        value: 'The plan publishes no recency rule, so the state’s applies. ' + LA_MCD_DX_RECENCY,
        status: 'verified',
        cites: [S.aclaCCP, S.msm],
      },
      diagnosingProviders: {
        value: 'CCP.4040 lists pediatric neurologists, developmental pediatricians, psychologists (including medical psychologists), psychiatrists, team-based pediatricians, nurse practitioners supervised by those specialists, and licensed SLPs, LCSWs or LPCs approved by the plan’s medical director whose scope includes ASD differential diagnosis and who have two years’ experience or work under a QHCP who signs the CDE.',
        status: 'verified',
        cites: [S.aclaCCP],
      },
      diagnosticTools: {
        value: 'CCP.4040 names no required instrument. The CDE needs history, direct observation, record review, a DSM-5 diagnosis and an ABA rationale; autism-specific, psychopathology, cognitive and adaptive assessments are added only when results are borderline or unclear.',
        status: 'verified',
        cites: [S.aclaCCP],
      },
      referral: {
        value: 'The plan publishes nothing different from the state. ' + LA_MCD_REFERRAL,
        status: 'verified',
        cites: [S.aclaCCP, S.msm],
      },
      telehealth: {
        value: 'Yes, with prior authorization. The manual lists 97151–97158 as telehealth-eligible; services must be "rendered or directed by an RLT, LBA, or CaBA" over interactive audio/video, and reassessments can be remote only if the same standard of care can be met. It points to the Claim Filing Instructions for billing (POS and modifier not stated in the manual).',
        status: 'verified',
        cites: [S.aclaHB],
      },
      authTurnaround: {
        value: 'Non-urgent: 80% within 2 business days of receiving the documentation, all within 7 calendar days of the request (extendable up to 14 days); expedited within 72 hours. That matches the federal 7-day cap for rating periods from January 1, 2026.',
        status: 'verified',
        cites: [S.aclaHB, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'The manual says the plan is "the “payer of last resort” on all claims submitted," and claims with the primary carrier’s EOB must still arrive within 365 days of the date of service. ' + LA_MCD_COB,
        status: 'verified',
        cites: [S.aclaHB, S.cfr433, S.msm, S.lhccUniform],
      },
    },
    faq: [
      { q: 'Does AmeriHealth Caritas Louisiana cover ABA?', a: 'Yes, for members ages 0–20 with a comprehensive diagnostic evaluation from a qualified health care professional, under clinical policy CCP.4040.' },
      { q: 'How fast does AmeriHealth Caritas Louisiana decide ABA requests?', a: 'Its September 2026 manual says 80% of non-urgent requests within 2 business days of receiving documentation and all within 7 calendar days of the request; expedited requests within 72 hours.' },
      { q: 'What is the timely filing limit for AmeriHealth Caritas Louisiana?', a: '365 calendar days from the date of service, 180 days to resubmit a denied claim, and later deadlines for retroactively enrolled members.' },
    ],
  },

  'healthy-blue-louisiana': {
    slug: 'healthy-blue-louisiana',
    family: 'anthem',
    cardDesc: 'Leaving Healthy Louisiana 12/31/2026: all ABA codes need precert via Availity or fax; new plans honor its PAs up to 60 days.',
    assessmentPA: {
      value: 'Yes. "All ABA services require prior authorization," and the July 2026 PA list marks 97151 and 97152 "Precertification is Required" for Medicaid',
      status: 'verified',
      cites: [S.hbPM, S.hbPAL],
    },
    treatmentPA: {
      value: 'Yes: 97153–97158, 0362T and 0373T are on the PA list; request through Availity or fax 844-432-6028, or call 844-521-6942',
      status: 'verified',
      cites: [S.hbPM, S.hbPAL],
    },
    dxRequired: {
      value: 'A qualifying diagnosis after a CDE: the manual’s ABA population is individuals "diagnosed with a condition for which ABA-based therapy services are recognized as therapeutically appropriate by a qualified healthcare professional"',
      status: 'verified',
      cites: [S.hbPM],
    },
    payer: 'Healthy Blue (Louisiana Medicaid)',
    state: 'LA', kind: 'medicaid-mco', parent: 'Louisiana Medicaid (Healthy Louisiana)',
    pill: 'Payer Guide · Healthy Blue · Louisiana',
    h1: 'Healthy Blue Louisiana ABA coverage: the intake guide.',
    metaTitle: 'Healthy Blue Louisiana ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Healthy Blue covers ABA for Louisiana Medicaid members under 21 until it leaves Healthy Louisiana on December 31, 2026: precertification of every ABA code, weekly units, claims, and how authorizations carry over to the new plan.',
    intro: [
      'Healthy Blue (Community Care Health Plan of Louisiana, a Blue Cross Blue Shield licensee) is a Healthy Louisiana plan until December 31, 2026, when its Medicaid contract ends. Its members can choose a new plan from October 15 to November 16, 2026, or will be assigned one, starting January 1, 2027. Until then it covers ABA under the LDH manual with every ABA code on its precertification list.',
      'For an ABA agency the transition is the main event. The receiving plan must honor Healthy Blue authorizations for up to 60 days or until they end, and you must have a new request in with the new plan before that window closes.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, members under 21, through December 31, 2026' },
      { label: 'Prior auth', value: 'All ABA codes (97151–97158, 0362T, 0373T)' },
      { label: 'Submit via', value: 'Availity, fax 844-432-6028, or 844-521-6942 (ABA team 844-406-2389)' },
      { label: 'Units', value: 'Paid against weekly approved units (2026 notice)' },
      { label: 'Timely filing', value: '365 days from the date of service, honored through run-out' },
      { label: 'After 12/31/2026', value: 'New plan honors Healthy Blue PAs up to 60 days or to their end date' },
    ],
    sections: [
      {
        h2: 'ABA under Healthy Blue',
        body: [
          'Healthy Blue’s provider manual (April 2026 posting) gives ABA its own chapter. Its network includes licensed psychologists and medical psychologists, behavior analysts licensed by the Louisiana Behavior Analyst Board, certified assistant behavior analysts and registered line technicians, serving members under 21 with a CDE, a qualifying diagnosis and a QHCP prescription. Member records must hold the CDE and its components, and the licensed professional must "conduct monthly meetings with family members." The plan "follows the Louisiana Medicaid Applied Behavioral Analysis Fee Schedule." "All ABA services require prior authorization," by phone (844-521-6942, any time), on the provider website or Availity, or by fax to 844-432-6028; the ABA team’s line is 844-406-2389. The July 2026 PA list shows precertification required for every ABA code for Medicaid members.',
          'A state-approved Healthy Blue notice tells providers that ABA "reimbursement will be based on weekly approved units rather than total authorized units," and that "Claims submitted with units exceeding the weekly limit will be considered ineligible for reimbursement." The copy LDH posted (February 2026) leaves the effective date blank, so ask the plan whether it applies to your dates of service.',
        ],
        cites: [S.hbPM, S.hbPAL, S.hbWeekly],
      },
      {
        h2: 'Leaving Healthy Louisiana: what happens to ABA authorizations',
        body: [
          'LDH’s Informational Bulletin 26-12 (September 1, 2026) sets the transition rules. "HBL prior authorizations will be honored for up to 60 days (or through the authorization end date, whichever occurs first) by the receiving MCO," and the receiving plan "is prohibited from denying prior authorization solely on the basis of the provider being an out-of-network provider." Providers must submit concurrent or new requests to the new plan before the Healthy Blue authorization ends or within 60 days, whichever is first. MEVS shows new plan assignments by November 23, 2026 for dates of service from January 1, 2027. Healthy Blue keeps processing claims through the 365-day timely filing allowance, handles disputes and medical-necessity decisions for services before January 1, 2027, and keeps its provider call center open through June 30, 2028. Providers contracted only with Healthy Blue should contract with one or more of the four remaining plans.',
        ],
        cites: [S.ib2612, S.t2027],
      },
    ],
    collect: [
      { title: 'Member ID and plan for 2027', desc: 'Confirm Healthy Blue for dates through 12/31/2026, and which plan the child chose or was assigned for 1/1/2027 (MEVS shows it by 11/23/2026).' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'Required in the record; resend it with the first request to the new plan.' },
      { title: 'Current authorization end date', desc: 'The new plan honors it for up to 60 days or to its end date; diary the new request before then.' },
      { title: 'Other insurance', desc: 'Medicaid pays last; send the primary insurer’s ABA decision.' },
    ],
    sources: [S.hbPM, S.hbPAL, S.hbWeekly, S.ib2612, S.t2027, S.msm, S.fee, S.lhccUniform, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'The manual says ABA is "rendered by an ABA assistant or technician under the supervision of a board-certified behavior analyst" and publishes no ratio of its own; it points providers to the LDH manual, whose ratio applies. ' + LA_MCD_SUPERVISION,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      concurrentBilling: {
        value: 'Healthy Blue publishes no ABA concurrent-billing rule and refers providers to the LDH manual, which allows it. ' + LA_MCD_CONCURRENT,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      dailyLimits: {
        value: 'Healthy Blue pays ABA against weekly approved units: claims "should reflect the units rendered within each week, up to the weekly medically necessary limit," and units over the weekly limit are not reimbursed. The filed notice leaves the effective date blank.',
        status: 'plan-dependent',
        cites: [S.hbWeekly],
        verifyVia: 'Healthy Blue Provider Services, 844-521-6942: confirm the effective date of weekly-unit billing and each authorization’s weekly units.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The manual sets record contents (CDE, treatment plan, monthly family meetings) but no signature rule of its own, so the LDH manual applies. ' + LA_MCD_NOTES,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      placeOfService: {
        value: 'The plan publishes no setting rule of its own and refers to the LDH manual. ' + LA_MCD_POS,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      billAsProvider: {
        value: 'The plan publishes no ABA rendering rule of its own and refers to the LDH manual. ' + LA_MCD_BILLAS,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: the ABA network serves "Adolescents and children under 21 years of age."',
        status: 'verified',
        cites: [S.hbPM],
      },
      dxRecency: {
        value: 'The plan publishes no recency rule, so the state’s applies. ' + LA_MCD_DX_RECENCY,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      diagnosingProviders: {
        value: 'The plan requires a CDE "performed by a qualified health care professional (QHCP)" and does not list them, so the LDH list applies. ' + LA_MCD_DIAGNOSERS,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      diagnosticTools: {
        value: 'No named instrument. When the diagnosis or need is unclear, the CDE must add autism-specific, psychopathology, cognitive and adaptive-behavior assessments, as appropriate.',
        status: 'verified',
        cites: [S.hbPM],
      },
      referral: {
        value: 'The network serves members "who have a prescription for ABA-based therapy services ordered by a qualified healthcare professional"; under the state rule a CDE that recommends ABA serves as that prescription.',
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      telehealth: {
        value: 'Healthy Blue’s ABA chapter publishes no telehealth rule of its own and refers to the LDH manual. ' + LA_MCD_TELEHEALTH,
        status: 'verified',
        cites: [S.hbPM, S.msm],
      },
      authTurnaround: {
        value: 'We found no ABA decision clock in Healthy Blue’s manual. ' + LA_MCD_TURNAROUND_FED + ' After December 31, 2026, the receiving plan must honor Healthy Blue authorizations for up to 60 days.',
        status: 'plan-dependent',
        cites: [S.cfr438, S.ib2612],
        verifyVia: 'Healthy Blue Provider Services, 844-521-6942, or the ABA team, 844-406-2389: ask the standard ABA turnaround.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Healthy Blue publishes nothing different from the state rule. ' + LA_MCD_COB,
        status: 'verified',
        cites: [S.cfr433, S.msm, S.lhccUniform],
      },
    },
    faq: [
      { q: 'Is Healthy Blue leaving Louisiana Medicaid?', a: 'Yes. Healthy Blue’s Medicaid contract ends December 31, 2026. Members can pick a new plan from October 15 to November 16, 2026, or are assigned one, effective January 1, 2027.' },
      { q: 'What happens to my child’s Healthy Blue ABA authorization in 2027?', a: 'The new plan must honor it for up to 60 days or until it ends, whichever is first, even if your ABA provider is out of its network. The provider must send a new request to the new plan before then.' },
      { q: 'Does Healthy Blue require prior authorization for ABA?', a: 'Yes, for every ABA code, including the 97151 assessment. Submit through Availity, by fax to 844-432-6028, or by phone at 844-521-6942.' },
    ],
  },

  'humana-healthy-horizons-louisiana': {
    slug: 'humana-healthy-horizons-louisiana',
    family: 'humana',
    cardDesc: 'Healthy Louisiana plan; ABA policy LA.CLI.022 tracks the LDH manual; PA via Availity or fax 1-833-974-0059.',
    assessmentPA: {
      value: 'Yes. LA.CLI.022: a PA request "must be submitted by the ABA provider to conduct a functional assessment and to develop a behavior treatment plan," with the CDE',
      status: 'verified',
      cites: [S.humCLI],
    },
    treatmentPA: {
      value: 'Yes. A separate authorization request for treatment must include the CDE, behavior treatment plan and IEP (or an explanation); submit on the ABA authorization form via Availity or fax 1-833-974-0059',
      status: 'verified',
      cites: [S.humCLI, S.humForm],
    },
    dxRequired: {
      value: 'A qualifying diagnosis: members "Diagnosed with a condition for which ABA-based therapy services are recognized as therapeutically appropriate, including but not limited to Autism Spectrum Disorder (ASD), by a QHCP"',
      status: 'verified',
      cites: [S.humCLI],
    },
    payer: 'Humana Healthy Horizons in Louisiana',
    state: 'LA', kind: 'medicaid-mco', parent: 'Louisiana Medicaid (Healthy Louisiana)',
    pill: 'Payer Guide · Humana Healthy Horizons · Louisiana',
    h1: 'Humana Healthy Horizons in Louisiana ABA coverage: the intake guide.',
    metaTitle: 'Humana Healthy Horizons in Louisiana ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Humana Healthy Horizons in Louisiana covers ABA for Medicaid members under 21: coverage policy LA.CLI.022, two-step authorization, the uniform ABA form, PA turnaround, ABA quality reviews and claims deadlines.',
    intro: [
      'Humana Healthy Horizons in Louisiana (Humana Health Benefit Plan of Louisiana) joined Healthy Louisiana in 2023 and is one of the four plans that remain in 2027. Its ABA coverage policy, LA.CLI.022 (effective February 11, 2026), follows the LDH manual section by section, and its 2026 provider manual adds the authorization clock and an ABA quality-monitoring program that reviews treatment records.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, members under 21 with a qualifying CDE' },
      { label: 'Prior auth', value: 'Two steps (assessment, then treatment); 180-day maximum' },
      { label: 'Submit via', value: 'Availity (preferred) or fax 1-833-974-0059' },
      { label: 'Decision clock', value: '2 business days after information, no more than 7 calendar days' },
      { label: 'Timely filing', value: '365 calendar days from the date of service' },
      { label: 'Audits', value: 'ABA quality monitoring reviews of treatment records' },
    ],
    sections: [
      {
        h2: 'Coverage and authorization',
        body: [
          'LA.CLI.022 covers ABA for members under 21 with interfering behaviors, a qualifying diagnosis by a QHCP, a CDE and a QHCP prescription (not needed when the CDE recommends ABA). Authorization is "a two-fold process": first the functional assessment and treatment plan, with the CDE (needed only on the first request per member per provider), then treatment, with the CDE, treatment plan, IEP and waiver plan pages. A school-based plan "will not be approved until a copy of the IEP is provided," and if Humana asks for a new CDE it "will not delay the available ABA services awaiting completion of the CDE." Requests go on Humana’s copy of the uniform ABA authorization form, which asks whether there is a primary payor and lists the attachments, through Availity or by fax to 1-833-974-0059.',
        ],
        cites: [S.humCLI, S.humForm],
      },
      {
        h2: 'Turnaround, claims and quality reviews',
        body: [
          'The 2026 provider manual commits to deciding "Standard outpatient service prior authorization requests within 2 business days of obtaining appropriate medical information not to exceed 7 calendar days of receipt of request," with a possible 14-day extension, expedited requests within 72 hours, and retrospective reviews within 30 days of receiving the records. Claims are due within 365 calendar days of the date of service. Humana runs ABA quality monitoring, on site and by desk review, checking the CDE, the ABA prescription or referral, the qualifying diagnosis, the treatment plan, progress notes, care coordination and discharge planning, so keep those documents in every chart.',
        ],
        cites: [S.humPM],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Humana Healthy Horizons in Louisiana on the date of service.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'From a QHCP with a DSM-5 or DSM-5-TR diagnosis and an ABA recommendation.' },
      { title: 'IEP', desc: 'Required with the treatment request, or a written reason it is unavailable; school-based plans wait for it.' },
      { title: 'Other insurance', desc: 'The authorization form asks about a primary payor; send its ABA decision.' },
    ],
    sources: [S.humCLI, S.humForm, S.humPM, S.msm, S.fee, S.lhccUniform, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'LA.CLI.022 adopts the state ratio: "Supervision shall be approved on a 2:10 basis, that is two hours of supervision for every ten hours of therapy," part of it in the presence of the member and the CaBA or RLT, not when the supervisor is delivering direct therapy, and no more than 24 technicians a day or 10 CaBAs.',
        status: 'verified',
        cites: [S.humCLI],
      },
      concurrentBilling: {
        value: 'Yes. LA.CLI.022: "One on one supervision may by be conducted and billed simultaneously and concurrently with one-on-one therapeutic behavioral services," and only when a non-licensed professional is delivering the services.',
        status: 'verified',
        cites: [S.humCLI],
      },
      dailyLimits: {
        value: 'LA.CLI.022 publishes no unit cap; authorizations may not exceed 180 days, and hours come from the treatment plan’s weekly schedule.',
        status: 'plan-dependent',
        cites: [S.humCLI],
        verifyVia: 'Humana Healthy Horizons in Louisiana Provider Services, 1-800-448-3810: ask how ABA units are authorized and edited.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Humana’s quality reviews check progress notes, but its policy and manual set no signature rule of their own, so the LDH manual applies. ' + LA_MCD_NOTES,
        status: 'verified',
        cites: [S.humPM, S.msm],
      },
      placeOfService: {
        value: 'Services "must be provided in a natural setting (e.g., home and community-based settings, including clinics and school)," school-based ABA is allowed, school plans need the IEP first, and sessions at a non-ABA facility need an addendum explaining why they cannot happen at home or at the ABA facility.',
        status: 'verified',
        cites: [S.humCLI],
      },
      billAsProvider: {
        value: '"Payment for these services must be billed by the licensed professional" (LA.CLI.022). The LDH manual adds that the rendering provider on the claim must be the supervisor who signed the documentation.',
        status: 'verified',
        cites: [S.humCLI, S.msm],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 ("Under 21 years of age" is the first coverage criterion).',
        status: 'verified',
        cites: [S.humCLI],
      },
      dxRecency: {
        value: 'No expiry is stated. The CDE is needed only on the first request per member per provider, "All CDEs completed by QHCPs will be reviewed," and a plan-requested new CDE does not delay services. A new provider must submit a CDE with its first request.',
        status: 'verified',
        cites: [S.humCLI],
      },
      diagnosingProviders: {
        value: 'Pediatricians using the MCHAT-R/F (independently at a score of 8 or more), or a pediatric neurologist, developmental pediatrician, psychologist or medical psychologist, psychiatrist, team-based pediatrician, supervised nurse practitioner, or a licensed SLP, LCSW or LPC with ASD diagnostic scope and two years’ experience (or a QHCP’s co-signature).',
        status: 'verified',
        cites: [S.humCLI],
      },
      diagnosticTools: {
        value: 'None required by name beyond the pediatrician’s MCHAT-R/F. The CDE needs a DSM-5 or DSM-5-TR diagnosis, history, observation and record review; autism-specific, psychopathology, cognitive and adaptive assessments are added when screening is borderline or unclear.',
        status: 'verified',
        cites: [S.humCLI],
      },
      referral: {
        value: 'A prescription for ABA "ordered by a QHCP," but "If there is a recommendation in the CDE for ABA therapy, a separate prescription is not needed." Progress notes go to the PCP every 6 months and the PCP is copied on all treatment plans.',
        status: 'verified',
        cites: [S.humCLI],
      },
      telehealth: {
        value: 'LA.CLI.022 does not address ABA telehealth; Humana’s manual says it covers services by telehealth when Medicaid program policy indicates them, and the LDH manual does. ' + LA_MCD_TELEHEALTH,
        status: 'verified',
        cites: [S.humPM, S.msm],
      },
      authTurnaround: {
        value: 'Standard outpatient requests within 2 business days of obtaining the needed medical information, no more than 7 calendar days after the request (extendable up to 14 days); expedited within 72 hours; retrospective reviews within 30 days of receiving records.',
        status: 'verified',
        cites: [S.humPM, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Humana’s manual says it collects other-coverage information because “Medicaid programs are the payer of last resort,” and its ABA form asks whether there is a primary payor. ' + LA_MCD_COB,
        status: 'verified',
        cites: [S.humPM, S.humForm, S.cfr433, S.msm, S.lhccUniform],
      },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in Louisiana cover ABA?', a: 'Yes, for members under 21 with a qualifying diagnosis (autism or another condition ABA treats), a comprehensive diagnostic evaluation and a QHCP prescription or CDE recommendation.' },
      { q: 'Where do I send a Humana Louisiana ABA authorization?', a: 'Through Availity (preferred) or by fax to 1-833-974-0059, on Humana’s ABA authorization form with the CDE, treatment plan and IEP.' },
      { q: 'How quickly does Humana Healthy Horizons in Louisiana decide?', a: 'Within 2 business days of getting the information it needs, and no later than 7 calendar days after the request, unless extended.' },
    ],
  },

  'louisiana-healthcare-connections': {
    slug: 'louisiana-healthcare-connections',
    family: 'centene',
    cardDesc: 'Centene’s Healthy Louisiana plan: ABA reviewed in-house (formerly Magellan) under LA.UM.49; uniform ABA form via portal or fax.',
    assessmentPA: {
      value: 'Yes. LA.UM.49: the behavior identification assessment "must be prior authorized by LHCC," as must the supporting assessments; the initial assessment is authorized once, for up to 180 days',
      status: 'verified',
      cites: [S.lhccUM49],
    },
    treatmentPA: {
      value: 'Yes. Submit the uniform ABA authorization form with the CDE and treatment plan through the provider portal (preferred) or fax 1-888-725-0101 to LHCC’s Applied Behavioral Analysis Department',
      status: 'verified',
      cites: [S.lhccForm, S.lhccUM49],
    },
    dxRequired: {
      value: 'A qualifying diagnosis after a CDE: LHCC "will follow the guidelines published in the" LDH ABA manual, which covers conditions ABA is recognized to treat, including ASD',
      status: 'verified',
      cites: [S.lhccUM49, S.msm],
    },
    payer: 'Louisiana Healthcare Connections',
    state: 'LA', kind: 'medicaid-mco', parent: 'Louisiana Medicaid (Healthy Louisiana)',
    pill: 'Payer Guide · Louisiana Healthcare Connections',
    h1: 'Louisiana Healthcare Connections ABA coverage: the intake guide.',
    metaTitle: 'Louisiana Healthcare Connections ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Louisiana Healthcare Connections covers ABA for Medicaid members under 21: LA.UM.49 and the LDH manual, the uniform ABA authorization form, the end of Magellan review, COB pending rules, and turnaround.',
    intro: [
      'Louisiana Healthcare Connections (LHCC, a Centene plan) is one of the four Healthy Louisiana plans continuing into 2027. Its ABA policy, LA.UM.49, says simply that LHCC "will follow the guidelines published in the Louisiana Department of Health (LDH) Applied Behavior Analysis Provider Manual," and attaches it. ABA reviews used to run through Magellan; LHCC’s November 2025 notice says the process "may differ from what you experienced previously with Magellan," and the uniform ABA form now goes to LHCC’s own ABA department.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, members under 21 with a qualifying CDE' },
      { label: 'Prior auth', value: 'Assessment (once, initial) and treatment; 180-day maximum' },
      { label: 'Submit via', value: 'Provider portal (preferred) or fax 1-888-725-0101' },
      { label: 'Decision clock', value: 'Most routine requests in 2 business days; up to 7 calendar days' },
      { label: 'Other insurance', value: 'Authorization pends until the primary insurer’s decision is received' },
      { label: 'Contact', value: 'Provider Services 1-866-595-8133' },
    ],
    sections: [
      {
        h2: 'Prior authorization and the uniform form',
        body: [
          'LA.UM.49 adopts the LDH manual’s coverage, CDE, treatment-plan and supervision rules. It treats the assessment slightly more tightly than the current manual: "This is for the initial assessment only. The initial assessment will be authorized only once," for up to 180 days, with extra assessments at the plan’s discretion. LHCC’s November 17, 2025 notice introduced the uniform ABA Prior Authorization Form built with the other plans. Its checklist for an initial treatment request includes the CDE, a treatment plan with measurable goals and parent training, the proposed schedule with provider types, a dated IEP or IFSP, waiver pages, objective testing, coordination with other providers, and individualized titration and discharge plans; continued requests add objective progress data. Submit it through the provider portal or by fax to 1-888-725-0101.',
        ],
        cites: [S.lhccUM49, S.lhccUniform, S.lhccForm],
      },
      {
        h2: 'Other insurance and turnaround',
        body: [
          'The November 2025 notice changed how LHCC handles children with commercial coverage: "Historically, ABA authorizations were administratively approved even when a member had a primary payor. Moving forward, we will follow the standard Coordination of Benefits (COB) process." If the primary covers ABA, "the authorization will be placed in a pending status until primary coverage is confirmed," so send the primary insurer’s approval or denial with the request. LHCC asks for standard requests "at least seven business days before the scheduled service delivery date," processes most routine authorizations "within two business days," and says requests needing more information or medical director review may take "up to 7 calendar days."',
        ],
        cites: [S.lhccUniform, S.lhccPA],
      },
    ],
    collect: [
      { title: 'Member ID', desc: 'Confirm Louisiana Healthcare Connections on the date of service.' },
      { title: 'Comprehensive diagnostic evaluation', desc: 'From a QHCP; the uniform form also asks for a referral from the diagnosing provider with estimated duration of care.' },
      { title: 'IEP or IFSP', desc: 'Dated copy, if the child has one; the form asks whether services happen at school.' },
      { title: 'Primary insurer decision', desc: 'Required when the child has other coverage; without it the authorization stays pending.' },
    ],
    sources: [S.lhccUM49, S.lhccUniform, S.lhccForm, S.lhccPA, S.msm, S.fee, S.cfr438, S.cfr433],
    deliveryRules: {
      supervision: {
        value: 'LA.UM.49 follows and attaches the LDH manual, whose ratio applies. ' + LA_MCD_SUPERVISION,
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      concurrentBilling: {
        value: 'LHCC follows the LDH manual, which allows it. ' + LA_MCD_CONCURRENT,
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      dailyLimits: {
        value: 'No unit cap is published; LHCC’s form requests units per week and in total for each code, and authorizations run no more than 180 days.',
        status: 'plan-dependent',
        cites: [S.lhccForm, S.lhccUM49],
        verifyVia: 'LHCC Provider Services, 1-866-595-8133: ask how weekly and total units are enforced on claims.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'LHCC follows the LDH manual. ' + LA_MCD_NOTES,
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      placeOfService: {
        value: 'LA.UM.49: services "must be provided in a natural setting (e.g., home and community-based settings, including clinics and school)," and school-based ABA is allowed. The LDH manual adds the IEP requirement for school plans and the non-ABA-facility addendum.',
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      billAsProvider: {
        value: 'LA.UM.49: "Payment for services must be billed by the licensed professional." The uniform form is signed by the rendering provider, who attests that all staff have the required training. The LDH manual adds that the rendering provider on the claim must be the supervisor who signed the documentation.',
        status: 'verified',
        cites: [S.lhccUM49, S.lhccForm, S.msm],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21: LA.UM.49 notes LDH covers ABA "for recipients under the age of 21."',
        status: 'verified',
        cites: [S.lhccUM49],
      },
      dxRecency: {
        value: 'LHCC follows the LDH manual. ' + LA_MCD_DX_RECENCY,
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      diagnosingProviders: {
        value: 'LA.UM.49’s own QHCP list is the older version: pediatric neurologist, developmental pediatrician, psychologist or medical psychologist, psychiatrist, or another licensed individual approved by the plan’s medical director with ASD diagnostic scope and two years’ experience. The current LDH manual, which the policy says it follows, adds pediatricians using the MCHAT-R/F, team-based pediatricians and supervised nurse practitioners.',
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      diagnosticTools: {
        value: 'No instrument is required for the diagnosis, but the uniform form asks initial assessment requests for "comprehensive diagnostic information including standardized measures" and initial treatment requests for "Objective testing showing significant behavioral deficit" and the functional assessment tool used, with baseline data.',
        status: 'verified',
        cites: [S.lhccForm, S.lhccUM49],
      },
      referral: {
        value: 'The uniform form asks for the CDE and a "Prescription for ABA ordered by a QHCP if ABA is not recommended in CDE," plus a referral from the diagnosing provider with estimated duration of care for an initial assessment. LHCC otherwise requires no paper referral to in-network specialists.',
        status: 'verified',
        cites: [S.lhccForm, S.lhccPA],
      },
      telehealth: {
        value: 'LHCC publishes no ABA telehealth rule of its own and follows the LDH manual. ' + LA_MCD_TELEHEALTH,
        status: 'verified',
        cites: [S.lhccUM49, S.msm],
      },
      authTurnaround: {
        value: 'Submit standard requests at least 7 business days before services start; most routine authorizations are processed within 2 business days, and those needing more information or medical director review within 7 calendar days. That matches the federal 7-day cap for rating periods from January 1, 2026.',
        status: 'verified',
        cites: [S.lhccPA, S.cfr438],
      },
      coordinationOfBenefits: {
        value: 'Since November 2025: "If a member’s primary insurance covers ABA services, Medicaid will remain the payor of last resort, and the authorization will be placed in a pending status until primary coverage is confirmed." Send the primary insurer’s determination (approval or denial) with the request.',
        status: 'verified',
        cites: [S.lhccUniform, S.cfr433],
      },
    },
    faq: [
      { q: 'Does Louisiana Healthcare Connections still use Magellan for ABA?', a: 'Its November 2025 notice moved ABA requests to a uniform form sent to LHCC’s own ABA department and warns the process may differ from what providers knew under Magellan.' },
      { q: 'Why is my LHCC ABA authorization pending?', a: 'If the child has other insurance that covers ABA, LHCC holds the authorization until you send the primary insurer’s approval or denial. Medicaid pays last.' },
      { q: 'How far ahead should I request ABA from LHCC?', a: 'At least 7 business days before services start. Most routine requests are processed within 2 business days; complex ones can take up to 7 calendar days.' },
    ],
  },

  'aetna-louisiana': {
    slug: 'aetna-louisiana',
    family: 'aetna',
    cardDesc: 'Aetna’s national ABA guide and BH precert list + Louisiana’s R.S. 22:1050 mandate (under 21, $36,000/yr cap).',
    assessmentPA: {
      value: 'Required: all ten ABA codes, 97151 included, are on Aetna’s behavioral health precertification list (eff. 8/1/2024)',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    treatmentPA: {
      value: 'Required: 97153–97158, 0362T and 0373T are on the precertification list; most requests go through Availity',
      status: 'verified',
      cites: [S.aetnaPrecert],
    },
    dxRequired: {
      value: 'Yes: a DSM-5 ASD diagnosis (F84.0, F84.3–F84.9) by an appropriate provider',
      status: 'verified',
      cites: [S.aetnaGuide],
    },
    payer: 'Aetna in Louisiana',
    state: 'LA', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Louisiana',
    h1: 'Aetna ABA coverage in Louisiana: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Louisiana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Louisiana families: the national medical necessity guide, precertification of every ABA code, Louisiana’s R.S. 22:1050 autism mandate (under 21, $36,000 a year), licensed behavior analysts, prompt pay, and what intake should verify.',
    intro: [
      'For an intake team in Louisiana, an Aetna card means three layers: Aetna’s national ABA criteria, Louisiana’s autism mandate in R.S. 22:1050, and the plan’s funding type, which decides whether the mandate applies. Aetna Better Health of Louisiana, the Medicaid plan, has its own guide.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Aetna’s national ABA medical necessity guide' },
      ...LA_MANDATE_ROWS,
      { label: 'Fee schedule', value: 'Not public — Aetna pays the contracted rate in your participation agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Louisiana',
        body: [
          'Aetna’s ABA medical necessity guide (©2026) requires a DSM-5 ASD diagnosis from an appropriate provider, services "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists," functional impairment on a standardized scale administered in the past 12 months, a measurable treatment plan with titration and discharge criteria, and hours that match the documented severity; progress is reviewed every six months. Its only state exhibit is Maryland, so Louisiana plans get the national criteria plus whatever state law requires. The behavioral health precertification list (effective August 1, 2024) names all ten ABA codes.',
        ],
        cites: [S.aetnaGuide, S.aetnaPrecert],
      },
      {
        h2: 'The Louisiana mandate: what it guarantees',
        body: [LA_MANDATE_BODY],
        cites: [S.rs1050],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [LA_LICENSURE_BODY],
        cites: [S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.bacbLic, S.fee],
      },
      {
        h2: 'Claims: prompt pay in Louisiana',
        body: [
          LA_PROMPT_PAY + ' Aetna publishes no ABA rate table: its provider manual says "The rates and compensation under your agreement are subject to the Aetna coding/claim edit policies," and a member cannot be charged "more than the contracted rate."',
        ],
        cites: [S.rs1832, S.rs1833, S.aetnaOM],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (R.S. 22:1050 applies) vs. self-funded ERISA (plan document governs). Ask for the employer and check the card.' },
      { title: 'Child’s age and benefits used', desc: 'The mandate covers under-21s up to $36,000 a year; ask how much of the year’s autism benefit is used.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Standardized functional measure', desc: 'From the past 12 months (for example Vineland-3, ABAS, VB-MAPP or ABLLS).' },
      { title: 'Louisiana prescriber', desc: 'The mandate covers treatment ordered by a Louisiana-licensed physician or psychologist.' },
    ],
    sources: [S.aetnaGuide, S.aetnaPrecert, S.aetnaNPC, S.aetnaOM, S.rs1050, S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.rs1821, S.rs1832, S.rs1833, S.rs1836, S.bacbLic, S.fee, S.erisa, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Aetna’s participation criteria (5/26): ABA services "must be provided directly or supervised by individuals licensed by the state or certified by the Behavior Analyst Certification Board," with "A minimum of one hour of face-to-face supervision" of an unlicensed or noncertified paraprofessional "for each 10 hours of applied behavior analysis" and the supervisor "onsite with the child at least one hour a month." Staff "must meet state requirements," and in Louisiana that means a licensed LBA and registered line technicians (R.S. 37:3708, 37:3716).',
        status: 'verified',
        cites: [S.aetnaNPC, S.rs3708, S.rs3716],
      },
      concurrentBilling: {
        value: 'Not addressed in Aetna’s published ABA guide, precertification list or participation criteria.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna provider services, your participation agreement, or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day cap is published. Hours follow the guide’s severity grid; typical intensity is 10–25 hours a week for comprehensive and 1–20 for focused programs (not caps), with QHP protocol modification at "1 to 2 hours per 10 hours of treatment by protocol." For fully insured Louisiana plans the mandate allows no visit limits but a $36,000 annual benefit cap.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rs1050],
      },
      noteSignature: {
        value: 'Not addressed in Aetna’s published ABA documents, which set treatment-plan content but not session-note signatures.',
        status: 'unverified',
        cites: [S.aetnaGuide],
        verifyVia: 'Your Aetna participation agreement and the Aetna Behavioral Health provider manual’s documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Aetna’s guide sets no outpatient setting restriction; ABA delivered in an inpatient, residential or partial hospitalization setting is reviewed under that level of care’s criteria instead.',
        status: 'plan-dependent',
        cites: [S.aetnaGuide],
        verifyVia: 'Aetna Behavioral Health at precertification: confirm the places of service the plan pays for ABA, including school.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where in scope. Louisiana licenses behavior analysts, so the LBA (or a licensed psychologist) is the billing credential.',
        status: 'verified',
        cites: [S.aetnaGuide, S.rs3702],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national guide sets no age cap; it describes typical, not limiting, age ranges.' + LA_MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaGuide, S.rs1050],
        verifyVia: 'Live benefits verification on the member ID: fully insured vs. self-funded, then the plan’s autism age and dollar terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the ASD diagnosis itself, but medical necessity requires functional impairment on a standardized scale "in the past 12 months" (at least one standard deviation below the mean) or a significant risk of harm.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)."',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      diagnosticTools: {
        value: 'The guide names functional measures, not diagnostic instruments: a standardized scale from the past 12 months such as VABS-3, ABAS, VB-MAPP or ABLLS.',
        status: 'verified',
        cites: [S.aetnaGuide],
      },
      referral: {
        value: 'Aetna’s ABA documents require precertification of all ten ABA codes, not a physician referral.' + LA_MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.aetnaPrecert, S.rs1050],
      },
      telehealth: {
        value: 'Aetna’s provider manual (6/26): Aetna Behavioral Health "offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self-insured plan sponsors opt out," and providers "must act within the scope of their license and ensure that they have the proper licensure based on state requirements." Aetna’s current ABA telehealth code list was not published in a document we could read.' + LA_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.aetnaOM, S.rs1821, S.rs12234],
        verifyVia: 'Availity or the precertification line: ask whether the plan is fully insured or self-funded (and opted out of telehealth), and which ABA codes, POS and modifier Aetna pays by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: LA_AUTH_TAIL + ' Aetna publishes no Louisiana-specific ABA turnaround or reauthorization lead time.',
        status: 'plan-dependent',
        cites: [S.erisa, S.rs1821],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded and what reauthorization lead time Aetna expects.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: LA_COB_BODY,
        status: 'plan-dependent',
        cites: [S.rs1836, S.cfr433, S.lhccUniform, S.tricare, S.champva],
        verifyVia: 'Ask Aetna at benefits verification for the coordination-of-benefits order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Louisiana?', a: 'Yes, for autism spectrum disorder under Aetna’s national criteria, with Louisiana’s R.S. 22:1050 mandate on fully insured plans. Self-funded employer plans follow their own documents.' },
      { q: 'What does the Louisiana autism mandate require?', a: 'Fully insured plans must cover diagnosis and treatment of autism, including ABA, for people under 21, with no visit limits, up to $36,000 a year. Treatment must be ordered by a Louisiana-licensed physician or psychologist.' },
      { q: 'Can a BCBA licensed in another state treat an Aetna member in Louisiana by telehealth?', a: 'Aetna requires providers to hold the licensure their state requires, and Louisiana licenses behavior analysts; practicing without a Louisiana license is a misdemeanor. Ask the Louisiana Behavior Analyst Board about its out-of-state telehealth route.' },
      { q: 'How fast must Aetna pay a clean ABA claim in Louisiana?', a: 'For fully insured plans, Louisiana law requires electronic clean claims to be paid, denied or pended within 25 days (paper within 45), with 12% a year interest when late. Self-funded plans are outside the statute.' },
    ],
  },

  'cigna-louisiana': {
    slug: 'cigna-louisiana',
    family: 'cigna',
    cardDesc: 'Evernorth EN0499 + autism resource guide (no PA on assessment codes) + Louisiana’s R.S. 22:1050 mandate.',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [S.cignaARG],
    },
    treatmentPA: {
      value: 'Required: attach the completed assessment and treatment plan to the ABA Prior Authorization Form; "Prior authorization is typically required for applied behavior analysis"',
      status: 'verified',
      cites: [S.cignaARG, S.ebhAdmin],
    },
    dxRequired: {
      value: 'Yes: ASD (F84.0–F84.9 except F84.2 Rett) under DSM-5-TR criteria, with the diagnosing clinician’s name, credentials and the date of the most recent diagnosis',
      status: 'verified',
      cites: [S.en0499],
    },
    payer: 'Cigna / Evernorth in Louisiana',
    state: 'LA', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Louisiana',
    h1: 'Cigna / Evernorth ABA coverage in Louisiana: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Louisiana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Louisiana families: policy EN0499, no PA on assessment codes, treatment PA, Louisiana’s R.S. 22:1050 autism mandate (under 21, $36,000 a year), licensed behavior analysts, and what intake should verify.',
    intro: [
      'For an intake team in Louisiana, a Cigna card means three layers: Evernorth’s national ABA policy EN0499 and the Cigna autism resource guide, Louisiana’s autism mandate in R.S. 22:1050, and the plan’s funding type. Many Cigna members are on self-funded employer plans, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per national policy EN0499' },
      ...LA_MANDATE_ROWS,
      { label: 'Fee schedule', value: 'Not public — your ABA fee schedule is Exhibit A of your Evernorth Provider Agreement' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Louisiana',
        body: [
          'Evernorth authorizes ABA under EN0499 (effective May 15, 2026) "unless contractual requirements or federal or state law requires the use of other specifically identified clinical criteria." The autism resource guide says prior authorization "is no longer required for assessment" codes 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA; treatment needs the ABA Prior Authorization Form with the assessment and treatment plan, ideally requested up to 30 days ahead (late requests become retrospective reviews that can take up to 30 days). EN0499 requires an ASD diagnosis by an independently licensed clinician with diagnostic scope, a standardized assessment administered within 60 days before treatment starts, baseline data from the same window, and case supervision of 1–2 hours per 10 hours of direct treatment. Neither document mentions Louisiana.',
        ],
        cites: [S.en0499, S.cignaARG],
      },
      {
        h2: 'The Louisiana mandate: what it guarantees',
        body: [LA_MANDATE_BODY],
        cites: [S.rs1050],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [LA_LICENSURE_BODY],
        cites: [S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.bacbLic, S.fee],
      },
      {
        h2: 'Claims: filing limits and prompt pay',
        body: [
          'Evernorth’s administrative guidelines (September 2026) consider claims "submitted within 90 days of the date of service or as otherwise defined in your Provider Agreement," unless "Applicable state law provides for a longer timely filing limit." Electronic claims use payer ID 62308. ' + LA_PROMPT_PAY,
        ],
        cites: [S.ebhAdmin, S.cignaARG, S.rs1832, S.rs1833],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (R.S. 22:1050 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis report', desc: 'DSM-5-TR ASD diagnosis with the clinician’s name, credentials, licensure type and the date it was most recently made.' },
      { title: 'Standardized assessment', desc: 'Current edition (for example Vineland-3), completed in full within 60 days before treatment starts.' },
      { title: 'Louisiana prescriber', desc: 'The mandate covers treatment ordered by a Louisiana-licensed physician or psychologist.' },
      { title: 'Other coverage', desc: 'Second parent’s plan, Medicaid, TRICARE or CHAMPVA.' },
    ],
    sources: [S.en0499, S.cignaARG, S.ebhAdmin, S.rs1050, S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.rs1821, S.rs1832, S.rs1833, S.rs1836, S.bacbLic, S.fee, S.erisa, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, LBA or independently licensed clinician trained in ABA, "consistent with the general accepted standard of care of one to two hours per ten hours of direct treatment," and at least 1–2 hours a week of direct supervision when direct treatment is 10 hours a week or less; the supervisor’s name and credentials must be documented. In Louisiana, technicians must also be registered line technicians (R.S. 37:3708).',
        status: 'verified',
        cites: [S.en0499, S.rs3708],
      },
      concurrentBilling: {
        value: '"Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [S.cignaARG],
      },
      dailyLimits: {
        value: 'No daily unit cap is published in EN0499 or the resource guide; intensity must reflect severity, goals and response to treatment. For fully insured Louisiana plans the mandate allows no visit limits but a $36,000 annual cap.',
        status: 'plan-dependent',
        cites: [S.en0499, S.rs1050],
        verifyVia: 'Evernorth Autism Care Coordinator team, 877.279.7603, or your provider agreement: ask about unit edits.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed in EN0499 or the autism resource guide.',
        status: 'unverified',
        cites: [S.en0499, S.cignaARG],
        verifyVia: 'The Evernorth Behavioral Health Administrative Guidelines (documentation standards) or your provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'EN0499 accepts home, clinic, school and community settings but, where services happen in a setting with its own expectations (an academic setting, a vocational placement, telehealth), the record must show direct treatment for ASD symptoms and that ABA is "not utilized to replace or replicate" the setting’s own staff (classroom aide, 1:1 teacher, tutor, respite). Data must be reported separately by setting.',
        status: 'verified',
        cites: [S.en0499],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider."',
        status: 'verified',
        cites: [S.cignaARG],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age limit.' + LA_MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.en0499, S.rs1050],
        verifyVia: 'Live benefits verification: fully insured vs. self-funded, then the plan’s autism age and dollar terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but the request must give "The date on which the diagnosis was most recently made," and the standardized ABA assessment must be administered within 60 days before treatment starts.',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice."',
        status: 'verified',
        cites: [S.en0499],
      },
      diagnosticTools: {
        value: 'A reliable, valid, standardized instrument covering the DSM-5-TR ASD domains, completed in full, in its current edition ("must be the Vineland-3 vs. Vineland-II"), with the date, respondent and form type recorded.',
        status: 'verified',
        cites: [S.en0499],
      },
      referral: {
        value: 'Evernorth requires prior authorization of treatment, not a physician referral.' + LA_MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.cignaARG, S.rs1050],
      },
      telehealth: {
        value: 'The resource guide says "All ABA CPT codes are covered telehealth services," and EN0499 allows in-person, telehealth or hybrid delivery chosen on the child’s needs.' + LA_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.cignaARG, S.en0499, S.rs1821, S.rs12234],
        verifyVia: 'The number on the member’s card: confirm the plan’s telehealth benefit and the POS/modifier Evernorth wants.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Evernorth asks for ABA requests "up to 30 days in advance of or two weeks after the start date of service"; a late request may become a retrospective review taking up to 30 days. ' + LA_AUTH_TAIL,
        status: 'plan-dependent',
        cites: [S.cignaARG, S.erisa, S.rs1821],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, and the expected turnaround.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: LA_COB_BODY,
        status: 'plan-dependent',
        cites: [S.rs1836, S.cfr433, S.lhccUniform, S.tricare, S.champva],
        verifyVia: 'Ask Evernorth at benefits verification for the coordination-of-benefits order and record all other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna require prior authorization for an ABA assessment in Louisiana?', a: 'No, for 97151, 97152 and 0362T with an autism diagnosis when the provider is independently licensed or a BCBA and the plan covers ABA. Treatment needs the ABA Prior Authorization Form.' },
      { q: 'Does Louisiana cap ABA benefits?', a: 'For fully insured plans, R.S. 22:1050 covers autism treatment for people under 21 up to $36,000 a year, with no visit limits. Self-funded plans follow their own documents.' },
      { q: 'Can a BCBA and technician bill the same time with Cigna?', a: 'Yes for 97155 with 97153 or 97154, when the BCBA directs the technician and both are face-to-face with the patient. Otherwise only one provider bills a unit of time.' },
    ],
  },

  'unitedhealthcare-louisiana': {
    slug: 'unitedhealthcare-louisiana',
    family: 'unitedhealthcare',
    cardDesc: 'UHC commercial ABA runs through Optum: PA, credential modifiers, a 3-code telehealth list, plus Louisiana’s R.S. 22:1050 mandate.',
    assessmentPA: {
      value: 'Optum’s criteria say "Prior authorization is required for ABA" unless contract or law says otherwise, without separating the 97151 assessment from treatment',
      status: 'plan-dependent',
      cites: [S.optumSCC],
      verifyVia: 'Provider Express / Optum Behavioral Health at the number on the card: ask whether 97151 and 97152 need their own authorization on this plan.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required: "Prior authorization is required for ABA *(unless otherwise specified or mandated by contract or law)" under Optum’s ABA supplemental clinical criteria',
      status: 'verified',
      cites: [S.optumSCC],
    },
    dxRequired: {
      value: 'Yes: "A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws)" by a state-licensed physician, psychologist or other qualified clinician, confirmed with a validated tool',
      status: 'verified',
      cites: [S.optumSCC],
    },
    payer: 'UnitedHealthcare in Louisiana',
    state: 'LA', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Louisiana',
    h1: 'UnitedHealthcare ABA coverage in Louisiana: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Louisiana: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare covers ABA for Louisiana families through Optum: prior authorization, credential modifiers, concurrent billing, the commercial telehealth code list, Louisiana’s R.S. 22:1050 mandate (under 21, $36,000 a year), and what intake should verify.',
    intro: [
      'UnitedHealthcare commercial plans manage behavioral health, including ABA, through Optum. In Louisiana that means Optum’s ABA criteria and reimbursement policy, Louisiana’s autism mandate for fully insured plans, and, as always, the funding type. UnitedHealthcare Community Plan is no longer a Louisiana Medicaid option (it left on March 31, 2026).',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD, per Optum’s ABA supplemental clinical criteria' },
      ...LA_MANDATE_ROWS,
      { label: 'Fee schedule', value: 'Not public — contracted rates; Optum’s reimbursement policy sets codes, modifiers and daily maximums' },
    ],
    sections: [
      {
        h2: 'Optum’s ABA rules, applied in Louisiana',
        body: [
          'Optum’s ABA supplemental clinical criteria (interim review April 2026) require prior authorization and an ASD diagnosis by a state-licensed physician, psychologist or other qualified clinician, confirmed with at least one validated tool. The provider must be a master’s- or doctoral-level BCBA or a credentialed licensed clinician, with BCaBAs and technicians under their supervision; technicians "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate," which in Louisiana means a registered line technician. Optum’s commercial ABA reimbursement policy (updated June 2026) requires a credential modifier on each line: HM for an RBT, HN for a BCaBA, HO for a master’s-level BCBA or licensed clinician, HP for a BCBA-D. It allows 97153 or 97154 with 97155 concurrently when both code descriptors are met, but a single QHP may not bill them concurrently, and sets per-day maximums (97153 32 units, 97155 24, 97151 32, 97156 16). Neither document mentions Louisiana.',
        ],
        cites: [S.optumSCC, S.optumReimb],
      },
      {
        h2: 'The Louisiana mandate: what it guarantees',
        body: [LA_MANDATE_BODY],
        cites: [S.rs1050],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and rates',
        body: [LA_LICENSURE_BODY],
        cites: [S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.bacbLic, S.fee],
      },
      {
        h2: 'Claims: filing limits, telehealth billing and prompt pay',
        body: [
          'Optum’s network manual wants claims "no more than 90 calendar days from the date of service, or as allowed by state or federal law or the member’s specific benefit plan." Telehealth claims must carry POS 02 or 10 (by where the member is); for commercial ABA, telehealth "is only allowed for these 3 CPT codes: 97155, 97156 or 97157." ' + LA_PROMPT_PAY,
        ],
        cites: [S.optumNNM, S.optumTele, S.rs1832, S.rs1833],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (R.S. 22:1050 applies) vs. self-funded ERISA (plan document governs).' },
      { title: 'Diagnosis report', desc: 'ASD diagnosis by a licensed clinician, with the validated tool used (ADOS-2, ADI-R, CARS-2, M-CHAT and similar).' },
      { title: 'Staff credentials', desc: 'Each line needs the credential modifier (HM, HN, HO, HP); technicians must be registered line technicians in Louisiana.' },
      { title: 'Louisiana prescriber', desc: 'The mandate covers treatment ordered by a Louisiana-licensed physician or psychologist.' },
    ],
    sources: [S.optumSCC, S.optumReimb, S.optumTele, S.optumNNM, S.rs1050, S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.rs1821, S.rs1832, S.rs1833, S.rs1836, S.bacbLic, S.fee, S.erisa, S.cfr433, S.tricare, S.champva, S.ib2603],
    deliveryRules: {
      supervision: {
        value: 'BCaBAs and technicians work "under the direct supervision of a BCBA or licensed behavioral health clinician"; technicians should be RBTs "or another appropriately certified behavior technician as allowable by state mandate." Optum publishes no numeric ratio in these criteria. Louisiana requires line technicians to be registered with the board by their supervising LBA.',
        status: 'verified',
        cites: [S.optumSCC, S.rs3708],
      },
      concurrentBilling: {
        value: '"Can I report 97153 or 97154 with 97155 concurrently? Yes, as long as the criteria in the descriptors of both codes are met. A single QHP may not report 97153 or 97154 with 97155 concurrently." 97155 and 97156 on the same day must be separate, distinct and at different times.',
        status: 'verified',
        cites: [S.optumReimb],
      },
      dailyLimits: {
        value: 'Optum’s per-day maximums: 97151 32 units, 97152 16, 97153 32, 97154 18, 97155 24, 97156 16, 97157 16, 97158 16, 0362T 16, 0373T 32; claims over 32 units of 97153 a day may be denied or recovered. Fully insured Louisiana plans also carry the mandate’s $36,000 annual cap.',
        status: 'verified',
        cites: [S.optumReimb, S.rs1050],
      },
      noteSignature: {
        value: 'Not addressed in Optum’s ABA criteria or reimbursement policy beyond requiring that same-day 97155 and 97156 be clearly separated in progress notes.',
        status: 'unverified',
        cites: [S.optumReimb],
        verifyVia: 'The Optum National Network Manual documentation standards or your Optum agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Optum’s ABA documents read for this guide set no in-person setting restriction; for telehealth, claims need POS 02 or 10 and only 97155, 97156 and 97157 are allowed.',
        status: 'plan-dependent',
        cites: [S.optumSCC, S.optumTele],
        verifyVia: 'Optum Behavioral Health at authorization: confirm which places of service (home, clinic, school, community) the plan pays.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Each line carries the credential of the person delivering it: HM (RBT), HN (BCaBA), HO (master’s-level BCBA or licensed clinician), HP (BCBA-D); supervisors bill their own services with HO. 0362T and 0373T take no modifier.',
        status: 'verified',
        cites: [S.optumReimb],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s ABA criteria set no age limit.' + LA_MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumSCC, S.rs1050],
        verifyVia: 'Live benefits verification: fully insured vs. self-funded, then the plan’s autism age and dollar terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Optum’s criteria do not set a recency window for the diagnosis.',
        status: 'unverified',
        cites: [S.optumSCC],
        verifyVia: 'Optum Behavioral Health at authorization: ask how recent the diagnostic evaluation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: '"a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis," who documents the DSM-5 diagnosis and severity level.',
        status: 'verified',
        cites: [S.optumSCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool: screening tools such as M-CHAT or CSBS-DP-IT, second-level tools such as CARS-2, RITA-T or STAT, or formal diagnostic tools such as ADI-R, ADOS-2 or DISCO (the list is not exhaustive).',
        status: 'verified',
        cites: [S.optumSCC],
      },
      referral: {
        value: 'Optum requires prior authorization, not a physician referral.' + LA_MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.optumSCC, S.rs1050],
      },
      telehealth: {
        value: 'For UnitedHealthcare commercial plans, Optum allows ABA telehealth "only" for 97155, 97156 and 97157, and every telehealth claim needs POS 02 or POS 10; modifiers alone are not paid.' + LA_TELE_TAIL,
        status: 'plan-dependent',
        cites: [S.optumTele, S.rs1821, S.rs12234],
        verifyVia: 'Optum Behavioral Health: confirm the plan’s telehealth benefit and whether a fully insured Louisiana plan pays other ABA codes by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: LA_AUTH_TAIL + ' Optum publishes no Louisiana-specific ABA turnaround.',
        status: 'plan-dependent',
        cites: [S.erisa, S.rs1821],
        verifyVia: 'At benefits verification ask whether the plan is fully insured or self-funded, and Optum’s expected turnaround and reauthorization lead time.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: LA_COB_BODY,
        status: 'plan-dependent',
        cites: [S.rs1836, S.cfr433, S.lhccUniform, S.tricare, S.champva],
        verifyVia: 'Ask UnitedHealthcare/Optum at benefits verification for the coordination-of-benefits order and record all other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Who manages ABA for UnitedHealthcare in Louisiana?', a: 'Optum Behavioral Health, under its ABA supplemental clinical criteria and commercial ABA reimbursement policy.' },
      { q: 'Which ABA codes can be billed by telehealth to UnitedHealthcare?', a: 'For commercial plans Optum lists only 97155, 97156 and 97157, with POS 02 or 10. Fully insured Louisiana plans are also subject to the state telehealth statute, so confirm with Optum.' },
      { q: 'Is UnitedHealthcare still a Louisiana Medicaid plan?', a: 'No. UnitedHealthcare Community Plan left Healthy Louisiana on March 31, 2026; its members moved to other plans on April 1, 2026.' },
    ],
  },

  'blue-cross-blue-shield-louisiana': {
    slug: 'blue-cross-blue-shield-louisiana',
    family: 'bcbs',
    cardDesc: 'Louisiana Blue: ABA authorized in-house since 2026 (no more Lucet) via iLinkBlue; policy 00816; 21+ investigational; LBA/SCABA/RLT modifiers.',
    assessmentPA: {
      value: 'ABA services require authorization, but the 2026 manual no longer describes a separate initial-assessment request (the 2025 manual did, under Lucet)',
      status: 'unverified',
      cites: [S.labAut, S.labFAQ],
      verifyVia: 'Louisiana Blue ABA Utilization Review Department, 1-800-821-2745: ask whether 97151 needs its own authorization before the treatment request.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required: "Authorization is required for Applied Behavioral Analysis services"; submit the ABA Treatment Request Form through iLinkBlue (Louisiana providers) or by fax to 1-800-363-9170 (out-of-state providers)',
      status: 'verified',
      cites: [S.labAut, S.labFAQ, S.labPol],
    },
    dxRequired: {
      value: 'Yes: policy 00816 covers ABA "for individuals with autism spectrum disorder (ASD)" when its criteria are met',
      status: 'verified',
      cites: [S.labPol],
    },
    payer: 'Blue Cross and Blue Shield of Louisiana (Louisiana Blue)',
    state: 'LA', kind: 'commercial',
    pill: 'Payer Guide · Louisiana Blue · Louisiana',
    h1: 'Blue Cross and Blue Shield of Louisiana ABA coverage: the intake guide.',
    metaTitle: 'Blue Cross Blue Shield of Louisiana ABA Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Louisiana Blue (Blue Cross and Blue Shield of Louisiana and HMO Louisiana) covers ABA: medical policy 00816, in-house authorization since 2026, school-setting rules, billing modifiers for LBAs, SCABAs and RLTs, concurrent billing, and the R.S. 22:1050 mandate.',
    intro: [
      'Blue Cross and Blue Shield of Louisiana, now branded Louisiana Blue, is the state’s dominant commercial carrier, with HMO Louisiana as its subsidiary. Since January 1, 2026 it manages behavioral health authorizations, including ABA, itself; Lucet no longer does. Its ABA medical policy, 00816 (current version effective May 1, 2026), applies to every product it administers or underwrites unless a contract says otherwise.',
      'Two Louisiana-specific points stand out: the policy treats ABA for people 21 and older as investigational, and the billing rules use Louisiana’s own credential tiers (LBA, SCABA, registered line technician) rather than BACB titles.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes, for ASD under 21 per policy 00816; most policies cover autism, some individual and self-funded plans differ' },
      { label: 'Who reviews ABA', value: 'Louisiana Blue (in-house since 1/1/2026); ABA Utilization Review 1-800-821-2745' },
      ...LA_MANDATE_ROWS,
      { label: 'Fee schedule', value: 'Not public — contracted rates; Louisiana Blue applies the member’s autism maximum to claims with a primary autism diagnosis' },
    ],
    sections: [
      {
        h2: 'Authorization and policy 00816',
        body: [
          'Louisiana Blue’s January 2026 manual: "Authorization is required for Applied Behavioral Analysis services," submitted through the Louisiana Blue Authorizations application in iLinkBlue, and "all reviews and authorizations related to the diagnosis and treatment of autism are handled by Louisiana Blue." Both initial and concurrent requests need the ABA Treatment Request Form; out-of-state providers fax (1-800-363-9170). Policy 00816 asks for standardized outcome measures (Vineland, VB-MAPP or similar), clinical and treatment history, skill, behavior and caregiver goals with graphed baseline data, direct observations in one or more settings, and transition and discharge plans; continued requests add progress data and an explanation of unmet goals. Services are expected to fade over successive authorizations, and "repeated 35-hour authorizations for CPT 97153" are not routinely approved without clear justification. InterQual behavioral health criteria may supplement the review. Non-urgent requests can take up to 15 days (most within five) and urgent ones up to 72 hours.',
          'Some Louisiana Blue policies "do not cover Autism and some cover with different maximum benefit limitations," and autism benefits "do not apply for some individual policies and may vary for self-funded groups and BlueCard members," so verify benefits in iLinkBlue first.',
        ],
        cites: [S.labAut, S.labFAQ, S.labPol],
      },
      {
        h2: 'ABA in schools',
        body: [
          'Policy 00816 allows ABA entirely at school or in a hybrid with other settings, with limits: registered line technicians "should be trained and certified in ABA therapy and preferably have at least 6 months of experience"; their role "does not include academic instruction or educational services"; school ABA "should generally not exceed 6 hours per day" without clear documentation; and the RLT should be present only during identified high-support periods, supported by interviews with teachers and school staff. The record must show ongoing collaboration with, and training of, school personnel.',
        ],
        cites: [S.labPol],
      },
      {
        h2: 'Billing: modifiers and concurrent services',
        body: [
          'The January 2026 behavioral health billing section sets the credential rules. An LBA "Can bill directly" with modifier TG. A SCABA "Cannot bill directly" and is billed "through the supervising LBA" with modifier TF; an RLT with a bachelor’s degree is billed through the supervising LBA with HN, and an RLT without one with no modifier. Missing modifiers can get a claim returned or denied. Concurrent billing is allowed when both services are delivered simultaneously and the record says so: 97155 with 97153 (technician face-to-face, 97155 directing the technician) and 97155 with 97154. Claims with a primary autism diagnosis count toward the member’s autism maximum. Claims must be filed within 15 months of service, or the period in the member’s contract.',
        ],
        cites: [S.labBH, S.labClaims],
      },
      {
        h2: 'The Louisiana mandate: what it guarantees',
        body: [LA_MANDATE_BODY],
        cites: [S.rs1050],
      },
      {
        h2: 'Licensure, out-of-state BCBAs and prompt pay',
        body: [LA_LICENSURE_BODY, LA_PROMPT_PAY],
        cites: [S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.bacbLic, S.fee, S.rs1832, S.rs1833],
      },
    ],
    collect: [
      { title: 'Plan type and autism benefit', desc: 'Louisiana Blue, HMO Louisiana, FEP, BlueCard or self-funded; check autism coverage and the annual maximum in iLinkBlue.' },
      { title: 'Child’s age', desc: 'Under 21: the mandate applies to fully insured plans, and policy 00816 treats ABA at 21+ as investigational.' },
      { title: 'Standardized outcome measures', desc: 'Vineland, VB-MAPP or another age-appropriate tool, with graphed baseline data for skills, behaviors and caregiver goals.' },
      { title: 'School plan', desc: 'If ABA is at school: the high-support periods, teacher interviews and expected hours per day.' },
      { title: 'Louisiana prescriber', desc: 'The mandate covers treatment ordered by a Louisiana-licensed physician or psychologist.' },
    ],
    sources: [S.labPol, S.labFAQ, S.labAut, S.labBH, S.labClaims, S.rs1050, S.rs3702, S.rs3706, S.rs3708, S.rs3715, S.rs3716, S.rs3704, S.rs12234, S.rs3718, S.rs1821, S.rs1832, S.rs1833, S.rs1836, S.bacbLic, S.fee, S.erisa, S.cfr433, S.tricare, S.champva],
    deliveryRules: {
      supervision: {
        value: 'Louisiana Blue publishes no numeric ratio. SCABAs and RLTs "Cannot bill directly" and are billed through the supervising LBA, and the school rules expect RLTs to be trained and certified in ABA, preferably with 6 months’ experience. State law requires RLTs to be registered by their supervising LBA.',
        status: 'verified',
        cites: [S.labBH, S.labPol, S.rs3708],
      },
      concurrentBilling: {
        value: '"Concurrent billing will be allowed as follows when both services are administered simultaneously": 97155 with 97153 (technician face-to-face, 97155 directing the technician for protocol modification) and 97155 with 97154. The record must show both were simultaneous.',
        status: 'verified',
        cites: [S.labBH],
      },
      dailyLimits: {
        value: 'No daily unit cap is published, but school-setting ABA "should generally not exceed 6 hours per day," and consecutive authorizations at the highest intensity (for example repeated 35-hour 97153 authorizations) are not routinely approved. Claims with a primary autism diagnosis count toward the member’s autism maximum.',
        status: 'verified',
        cites: [S.labPol, S.labBH],
      },
      noteSignature: {
        value: 'Not addressed in policy 00816 or the manual sections read, beyond requiring the record to show simultaneous delivery when concurrent codes are billed.',
        status: 'unverified',
        cites: [S.labPol, S.labBH],
        verifyVia: 'Louisiana Blue provider manual documentation standards or the ABA Utilization Review Department, 1-800-821-2745.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'School is allowed (entirely or hybrid) under policy 00816’s school criteria: RLT present only in high-support periods, no academic instruction, generally no more than 6 hours a day, documented collaboration with school staff. Other settings follow the authorization.',
        status: 'verified',
        cites: [S.labPol],
      },
      billAsProvider: {
        value: 'LBA bills directly with modifier TG; SCABA services are billed through the supervising LBA with TF; RLT services through the supervising LBA with HN (bachelor’s degree) or no modifier (no bachelor’s).',
        status: 'verified',
        cites: [S.labBH],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Policy 00816 considers ABA for "individuals who are 21 years of age and older with autism spectrum disorder to be investigational."' + LA_MANDATE_AGE_TAIL,
        status: 'plan-dependent',
        cites: [S.labPol, S.rs1050],
        verifyVia: 'iLinkBlue coverage check: confirm the member’s autism benefit, age terms and annual maximum.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Policy 00816 sets no recency rule for the diagnosis.',
        status: 'unverified',
        cites: [S.labPol],
        verifyVia: 'Louisiana Blue ABA Utilization Review Department, 1-800-821-2745.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Policy 00816 does not name who may diagnose. For fully insured plans, the mandate covers treatment prescribed or ordered by a Louisiana-licensed physician or psychologist.',
        status: 'unverified',
        cites: [S.labPol, S.rs1050],
        verifyVia: 'Louisiana Blue ABA Utilization Review Department, 1-800-821-2745.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'The policy names outcome measures, not diagnostic instruments: "Standardized outcome measures (e.g., Vineland, VB MAPP, or other age-appropriate assessments)" at initiation and each continuation.',
        status: 'verified',
        cites: [S.labPol],
      },
      referral: {
        value: 'Louisiana Blue requires authorization with its ABA Treatment Request Form, not a referral; the authorization records a "Referred By" and "Referred To" provider, which can be the same.' + LA_MANDATE_REFERRAL_TAIL,
        status: 'verified',
        cites: [S.labFAQ, S.labPol, S.rs1050],
      },
      telehealth: {
        value: 'Louisiana Blue sends providers to Section 5.37 Telemedicine/Telehealth of its Professional Provider Office Manual for ABA telehealth, which we did not read.' + LA_TELE_TAIL,
        status: 'unverified',
        cites: [S.labBH, S.rs1821, S.rs12234],
        verifyVia: 'Louisiana Blue Professional Provider Office Manual, Section 5.37 (lablue.com/providers → Resources → Manuals).',
        blocker: 'document',
      },
      authTurnaround: {
        value: '"For nonurgent services, Louisiana Blue has up to 15 days to complete but will be completed as soon as possible. Most are completed within five days." Urgent cases: up to 72 hours, most within 24.',
        status: 'verified',
        cites: [S.labFAQ],
      },
      coordinationOfBenefits: {
        value: LA_COB_BODY,
        status: 'plan-dependent',
        cites: [S.rs1836, S.cfr433, S.lhccUniform, S.tricare, S.champva],
        verifyVia: 'Check coverage in iLinkBlue and ask Louisiana Blue for the coordination-of-benefits order; record all other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Cross Blue Shield of Louisiana still use Lucet for ABA?', a: 'No. Since January 1, 2026 Louisiana Blue manages behavioral health authorizations, including ABA, itself. Submit through the Louisiana Blue Authorizations application in iLinkBlue.' },
      { q: 'Does Louisiana Blue cover ABA for adults?', a: 'Its policy 00816 treats ABA for people 21 and older with autism as investigational, and the state mandate covers under-21s only.' },
      { q: 'How do I bill RLT and SCABA services to Louisiana Blue?', a: 'Through the supervising LBA: SCABA with modifier TF, RLT with a bachelor’s degree with HN, RLT without one with no modifier. The LBA bills directly with TG.' },
      { q: 'Can ABA be delivered at school under Louisiana Blue?', a: 'Yes, under policy 00816’s limits: the technician is there for identified high-support periods, does no academic teaching, and school ABA generally stays under 6 hours a day.' },
    ],
  },
};

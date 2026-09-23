import type { PayerConfig, PayerSource } from './types.js';

/* ================================================================
   HAWAII — ported 2026-09-24 from the LeadTrap product copy
   (backend/src/data/payer-guides/hawaii.ts, written August 2026) and
   re-verified against primary sources read 2026-09-23/24.
   Structure worth knowing before reading the guides:
   - Med-QUEST files ABA under "Intensive Behavioral Therapy" (IBT). The
     governing document is provider memo QI-2431 / FFS 24-13 (Dec 31, 2024),
     not an administrative rule. medquest.hawaii.gov returns HTTP 522 to
     direct clients; the memo was read via web.archive.org/web/2026id_/,
     and the memo index via r.jina.ai (QI-2431 is still the current ABA memo).
   - QUEST Integration (QI) plans: AlohaCare, HMSA, Kaiser Permanente,
     ʻOhana Health Plan, UnitedHealthcare Community Plan. ʻOhana LEAVES
     QUEST on December 31, 2026 (QI-2608; ʻOhana provider FAQ, Aug 2026).
   - Commercial mandate: Luke’s Law (Act 235, SLH 2015) — HRS § 431:10A-133
     for insurers, a parallel chapter 432 article 1 section for mutual
     benefit societies (HMSA), and HRS § 432D-23 for HMOs (Kaiser).
     Under-14 coverage, $25,000/yr ABA cap for ages 13 and under.
   - Behavior-analyst licensure: HRS chapter 465D (DCCA).
   Plain "Hawaii" (no okina) in payer names on purpose: the LeadTrap
   payer resolver splits Hawai‘i into "hawai i".
   ================================================================ */

// ---- Med-QUEST sources ----
const MQ_MEMO: PayerSource = { title: 'Med-QUEST memo QI-2431 / FFS 24-13 (Dec 31, 2024) — Coverage of IBT for children under 21 with ASD: Guidelines for ABA (Attachments A–C)', url: 'https://medquest.hawaii.gov/content/dam/formsanddocuments/provider-memos/qi-memos/qi-memos-2024/QI-2431,%20FFS%2024-13%20Replaces%20QI-2301,%20FFS%2023-01%20Coverage%20of%20IBT%20for%20treatment%20of%20children%20under%2021%20years%20of%20age%20with%20ASD_Guidelines%20for%20ABA._FINAL%20(part%201)%20-%20signed.pdf' };
const MQ_INDEX: PayerSource = { title: 'Med-QUEST — provider memo index (QI-2431 still the current ABA memo, checked 9/23/2026)', url: 'https://medquest.hawaii.gov/en/plans-providers/provider-memo.html' };
const MQ_PRES: PayerSource = { title: 'Med-QUEST / Milliman — ABA policy and rates updates presentation (Oct 30, 2024)', url: 'https://medquest.hawaii.gov/content/dam/formsanddocuments/plans-and-providers/fee-for-service/20241030%20-%20ABA%20Policy%20and%20Rates%20Updates%20Presentation.pdf' };
const MQ_FAQ: PayerSource = { title: 'Med-QUEST — 2024 ABA FAQ on the QI-memo updates (Dec 13, 2024)', url: 'https://medquest.hawaii.gov/content/dam/formsanddocuments/plans-and-providers/fee-for-service/2024%20ABA%20FAQ.pdf' };
const MQ_TELE: PayerSource = { title: 'Med-QUEST memo QI-2527 / FFS 25-12 / CCS-2509 — Telehealth Implementation (Dec 8, 2025)', url: 'https://medquest.hawaii.gov/content/dam/formsanddocuments/provider-memos/qi-memos/qi-memos-2025/QI-2527%20FFS%2025-12%20CCS-2509%20%20Telehealth%20Implementation%20-%20signed.pdf' };
const MQ_AA: PayerSource = { title: 'Med-QUEST memo QI-2608 — Auto-assignment algorithm for QI members, March 1, 2026 to Dec 31, 2028 (ʻOhana not renewing from Jan 1, 2027)', url: 'https://medquest.hawaii.gov/content/dam/formsanddocuments/provider-memos/qi-memos/qi-memos-2026/QI-2608%20Auto%20Assignment%20draft%20memo%20update.pt_jf_RS%20lp%20ad%20m%20(part%201)%20-%20signed.pdf' };
const MQ_FEES: PayerSource = { title: 'Med-QUEST — Fee schedules page (ABA Rate Study tab)', url: 'https://medquest.hawaii.gov/en/plans-providers/fee-for-service/fee-schedules.html' };

// ---- Plan sources ----
const AC_MP37: PayerSource = { title: 'AlohaCare Medical Policy MP-37 — Applied Behavior Analysis (ABA) Services (QUEST; eff. 3/22/2026, rev. 5/8/2026)', url: 'https://www.alohacare.org/userfiles/2026%20Updates/Other/321-MP-37_ABA%20Policy%20-%20Applied%20Behavior%20Analysis%20Services%20(003).pdf' };
const AC_PA: PayerSource = { title: 'AlohaCare — Prior Authorization Lookup Tool (QUEST; 97151–97158, 0362T, 0373T checked 9/23/2026)', url: 'https://www.alohacare.org/PriorAuth/' };
const AC_MAN: PayerSource = { title: 'AlohaCare QUEST (Medicaid) Provider Manual (9/10/2025)', url: 'https://www.alohacare.org/userfiles/2025%20Updates/2025%20Provider%20Publications%20and%20docs/Quest%20Provider%20Manual_9.10.25%20.pdf' };
const AC_AUTH: PayerSource = { title: 'AlohaCare — Provider authorization page', url: 'https://www.alohacare.org/Providers/Authorization' };
const OH_PA: PayerSource = { title: 'ʻOhana Health Plan — CMS-0057-F Prior Authorization Requirements, CCS & QI (list effective 12/31/2025)', url: 'https://www.ohanahealthplan.com/content/dam/centene/wellcare/hi/pdfs/provider/HI_OhanaHP_Medicaid_CCS_QI_PriorAuthReq_R.pdf' };
const OH_EXIT: PayerSource = { title: 'ʻOhana Health Plan — QUEST program transition FAQ for providers (approved 8/14/2026)', url: 'https://www.ohanahealthplan.com/content/dam/centene/wellcare/hi/pdfs/provider/HI_Caid_Provider_Information_Letter_2026_R.pdf' };
const OH_AUTH: PayerSource = { title: 'ʻOhana Health Plan — Medicaid authorizations page', url: 'https://www.ohanahealthplan.com/providers/medicaid/authorizations.html' };
const OH_BH: PayerSource = { title: 'ʻOhana Health Plan — Medicaid behavioral health provider page (BH prior-authorization list)', url: 'https://www.ohanahealthplan.com/providers/medicaid/behavioral-health.html' };
const OH_QRG: PayerSource = { title: 'ʻOhana Health Plan — QUEST Provider Quick Reference Guide (2026)', url: 'https://www.ohanahealthplan.com/content/dam/centene/wellcare/hi/pdfs/provider/HI_Caid_Quest_Provider_Quick_Reference_Guide_2026_R.pdf' };
const UHCCP_PA: PayerSource = { title: 'UnitedHealthcare Community Plan of Hawaii — Prior authorization requirements (effective June 1, 2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/hi/prior-authorization/HI-UHCCP-Prior-Authorization-Effective-6-1-2026.pdf' };
const UHCCP_MAN: PayerSource = { title: 'UnitedHealthcare Community Plan — 2026 Care Provider Manual, Hawai‘i QUEST', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/HI-Care-Provider-Manual.pdf' };
const OPT_HI: PayerSource = { title: 'Optum Provider Express — Hawaii QUEST ABA Program page', url: 'https://public.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/autismABA2/abaHI.html' };
const OPT_HI_ORIENT: PayerSource = { title: 'Optum — Hawaii QUEST Integration ABA Provider Orientation (BH4131, 05/2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/hiABA/hiABAOrientation.pdf' };
const OPT_HI_QRG: PayerSource = { title: 'Optum — QUEST Integration Health Plan ABA Program Quick Reference Guide (BH4051, 04/2022)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/hiABA/hiABAQRG.pdf' };
const OPT_SCC: PayerSource = { title: 'Optum Behavioral Health — Supplemental Clinical Criteria: Applied Behavior Analysis (annual review Aug 2025, interim Apr 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' };
const HMSA_QI_PRECERT: PayerSource = { title: 'HMSA Provider Resource Center — QUEST Integration: Services that Require Precertification (ABA added 11/19/2021)', url: 'https://prc.hmsa.com/s/article/QUEST-Integration-Services-that-Require-Precertification-1' };
const HMSA_QI_PROC: PayerSource = { title: 'HMSA Provider Resource Center — QUEST Integration: Precertification – Medical', url: 'https://prc.hmsa.com/s/article/QUEST-Integration-Precertification-Medical' };
const HMSA_COMM_PRECERT: PayerSource = { title: 'HMSA Provider Resource Center — Services That Require Precertification (commercial; rev. 2/20/2026)', url: 'https://prc.hmsa.com/s/article/Services-That-Require-Precertification' };
const HMSA_POLICIES: PayerSource = { title: 'HMSA Provider Resource Center — Medical Policies (moved to hmsa.policytransparency.com 5/4/2026)', url: 'https://prc.hmsa.com/s/article/Medical-Policies-CURRENT' };
const HMSA_PT: PayerSource = { title: 'HMSA policy transparency site (Cohere) — medical necessity policies and prior-authorization list', url: 'https://hmsa.policytransparency.com/' };
const HMSA_HB: PayerSource = { title: 'HMSA QUEST Member Handbook (effective April 2026)', url: 'https://hmsa.com/content/assets/member-handbook-quest.pdf' };
const KP_MAN: PayerSource = { title: 'Kaiser Permanente Hawaii — QUEST Provider Manual (KP25-013)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/hi/ever/quest-integration-provider-manual-en.pdf' };
const KP_QI: PayerSource = { title: 'Kaiser Permanente Hawaii — Community Provider Portal: QUEST Integration', url: 'https://healthy.kaiserpermanente.org/hawaii/community-providers/quest-integration' };
const KP_AUTH: PayerSource = { title: 'Kaiser Permanente Hawaii — Community Provider Portal: Authorizations', url: 'https://healthy.kaiserpermanente.org/hawaii/community-providers/authorizations' };

// ---- Commercial carrier sources ----
const AET_0554: PayerSource = { title: 'Aetna CPB 0554 — Applied Behavior Analysis (last review 11/26/2025)', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' };
const AET_0648: PayerSource = { title: 'Aetna CPB 0648 — Autism Spectrum Disorders (last review 10/02/2025)', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' };
const AET_GUIDE: PayerSource = { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' };
const AET_PRECERT: PayerSource = { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' };
const AET_BHMAN: PayerSource = { title: 'Aetna — Behavioral Health Provider Manual', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh-provider-manual.pdf' };
const CIG_EN0499: PayerSource = { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' };
const CIG_ARG: PayerSource = { title: 'Cigna / Evernorth autism resource guide for behavioral health providers (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' };

// ---- Hawaii statutes ----
const HRS_133: PayerSource = { title: 'HRS § 431:10A-133 — Autism benefits and coverage; notice; definitions (Luke’s Law; current text, archived 8/10/2026)', url: 'https://www.capitol.hawaii.gov/hrscurrent/Vol09_Ch0431-0435H/HRS0431/HRS_0431-0010A-0133.htm' };
const SB791: PayerSource = { title: 'S.B. 791 C.D. 1 (2015), enacted as Act 235 — Luke’s Law: §§ 3–6 add the insurer, mutual-benefit-society and HMO autism sections', url: 'https://www.capitol.hawaii.gov/session2015/bills/SB791_CD1_.htm' };
const HRS_465D2: PayerSource = { title: 'HRS § 465D-2 — Behavior analysts: definitions', url: 'https://www.capitol.hawaii.gov/hrscurrent/Vol10_Ch0436-0474/HRS0465D/HRS_0465D-0002.htm' };
const HRS_465D7: PayerSource = { title: 'HRS § 465D-7 — Behavior analysts: exemptions (am. L 2023, c 167)', url: 'https://www.capitol.hawaii.gov/hrscurrent/Vol10_Ch0436-0474/HRS0465D/HRS_0465D-0007.htm' };
const HRS_465D8: PayerSource = { title: 'HRS § 465D-8 — Behavior analysts: application for licensure', url: 'https://www.capitol.hawaii.gov/hrscurrent/Vol10_Ch0436-0474/HRS0465D/HRS_0465D-0008.htm' };
const HRS_432E5: PayerSource = { title: 'HRS § 432E-5 — Complaints and appeals procedure for enrollees', url: 'https://www.capitol.hawaii.gov/hrscurrent/Vol09_Ch0431-0435H/HRS0432E/HRS_0432E-0005.htm' };

// ---- Federal ----
const CFR_438_210: PayerSource = { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-438/subpart-D/section-438.210' };
const CFR_440_230: PayerSource = { title: '42 CFR 440.230(e) — State Medicaid agency prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' };
const CFR_433_139: PayerSource = { title: '42 CFR 433.139 — Medicaid payment of claims involving third-party liability (eCFR)', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-D/section-433.139' };
const CFR_2560: PayerSource = { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' };
const CFR_147_136: PayerSource = { title: '45 CFR 147.136 — Internal claims and appeals for group and individual coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-147/section-147.136' };
const USC_1079: PayerSource = { title: '10 U.S.C. 1079(i)(1) — TRICARE pays after other coverage except Medicaid', url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title10/html/USCODE-2023-title10-subtitleA-partII-chap55-sec1079.htm' };
const CFR_17_270: PayerSource = { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' };

const MEDICAID_PARENT = 'Hawaii Medicaid (Med-QUEST / QUEST Integration)';

/* The Hawaii commercial mandate layer, repeated on every commercial guide
   because the chat reads mandate caps from each one. */
const HI_MANDATE_GLANCE = [
  { label: 'State mandate', value: 'Luke’s Law — HRS § 431:10A-133 (insurers), a parallel HRS ch. 432 art. 1 section (mutual benefit societies such as HMSA), HRS § 432D-23 (HMOs such as Kaiser); Act 235, 2015' },
  { label: 'Mandate age', value: 'Individuals under fourteen years of age' },
  { label: 'Mandate caps', value: 'ABA capped at $25,000 per year for children ages thirteen and under; cost-sharing no less favorable than for substantially all medical services' },
  { label: 'Exempt from mandate', value: 'Self-funded employer (ERISA) plans; disability, accident-only, Medicare, Medicare supplement, student accident and health, dental-only and vision-only policies, and policies or renewals of six months or less' },
  { label: 'Licensure', value: 'Yes — HRS ch. 465D licensed behavior analyst (DCCA): passed BCBA exam + active BCBA/BCBA-D; RBTs and BCaBAs exempt when working under a licensed behavior analyst' },
];

const HI_MANDATE_SECTION = {
  h2: 'The Hawaii mandate: Luke’s Law',
  body: [
    'Hawaii’s autism mandate is Luke’s Law, Act 235 of 2015. It added the same autism section three times — to the insurance code as HRS § 431:10A-133, to chapter 432 for mutual benefit societies (HMSA’s chapter), and, through HRS § 432D-23, to HMO contracts — so every state-regulated carrier in Hawaii carries it. The text is narrow by current standards. Policies issued or renewed after January 1, 2016 must cover the diagnosis and treatment of autism for "individuals under fourteen years of age," and applied behavior analysis "shall be subject to a maximum benefit of $25,000 per year for services for children ages thirteen and under." Payments for anything other than ABA do not count toward that cap, and cost-sharing may be "no less favorable" than for substantially all medical services.',
    'The statute also sets rules intake should know: treatment requests "shall include a treatment plan," and the carrier may review the plan and medical necessity at its discretion; treatment must be "prescribed or ordered" by a licensed physician, psychiatrist, psychologist, licensed clinical social worker or registered nurse practitioner; coverage excludes custodial care, services by family or household members, experimental treatment and "services provided outside of the State"; network autism providers must clear state and federal criminal background checks; and a child diagnosed under an older DSM edition "may be required to undergo repeat evaluation" when a new edition is published. Exempt: self-funded employer plans (not state-regulated insurance) and disability, accident-only, Medicare, Medicare supplement, student, dental-only and vision-only policies and policies of six months or less. Whether a $25,000 annual ABA dollar limit can still be applied to a given plan alongside federal parity rules is a plan-level question; the statute text itself has not been amended since 2015.',
  ],
  cites: [HRS_133, SB791],
};

const HI_LICENSURE_SECTION = {
  h2: 'Licensure in Hawaii',
  body: [
    'Hawaii licenses behavior analysts under HRS chapter 465D, run by the Department of Commerce and Consumer Affairs. A license requires having passed the BCBA examination and maintaining active BACB status as a BCBA or BCBA-D (HRS § 465D-8). Section 465D-7 exempts, among others, BCaBAs practicing "under the direction of a licensed behavior analyst," RBTs who directly implement ABA "under the direction of a licensed behavior analyst or a licensed psychologist," licensed psychologists and their supervisees, and graduate students and people accruing BACB experience hours under a licensed behavior analyst. Luke’s Law then limits covered autism treatment to providers "licensed by a state licensure board," so the supervising analyst on a commercial claim needs the Hawaii license, not just BACB certification.',
  ],
  cites: [HRS_465D8, HRS_465D7, HRS_465D2, HRS_133],
};

export const hawaiiPayers: Record<string, PayerConfig> = {
  'hawaii-medicaid': {
    slug: 'hawaii-medicaid',
    cardDesc: 'Med-QUEST / QUEST Integration. Hawaii calls ABA Intensive Behavioral Therapy; memo QI-2431 / FFS 24-13 sets the benefit, each QI plan runs the authorization.',
    assessmentPA: {
      value: 'Plan-dependent — the memo says assessment and treatment-goal formulation "may require PA from the QI plan." AlohaCare and ʻOhana list 97151 and 97152 as prior-authorization codes; the diagnostic evaluation itself needs no PA',
      status: 'plan-dependent',
      cites: [MQ_MEMO, AC_PA, OH_PA],
      verifyVia: 'The member’s QUEST Integration plan (AlohaCare, HMSA, Kaiser, ʻOhana or UnitedHealthcare Community Plan via Optum) — ask whether 97151/97152 need prior authorization before the first assessment session.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — "PA is required for reimbursement of services provided under the treatment plan"; requested in hours per week for up to 26 weeks, with the continuation request due at least two weeks before the approved period ends',
      status: 'verified',
      cites: [MQ_MEMO],
    },
    dxRequired: {
      value: 'Yes — an ASD diagnosis by a developmental-behavioral pediatrician, developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist or other licensed practitioner with ASD expertise; a suspected-ASD child may get a trial of up to 26 weeks of ABA before a definitive diagnosis',
      status: 'verified',
      cites: [MQ_MEMO],
    },
    payer: MEDICAID_PARENT,
    state: 'HI', kind: 'state-medicaid',
    pill: 'Payer Guide · Hawaii Medicaid',
    h1: 'Hawaii Medicaid (Med-QUEST) ABA coverage: the intake guide.',
    metaTitle: 'Hawaii Medicaid (Med-QUEST / QUEST Integration) ABA Coverage Guide | Carelu',
    metaDescription:
      'How Hawaii Medicaid covers ABA through Med-QUEST and the QUEST Integration plans — the Intensive Behavioral Therapy framing, memo QI-2431 / FFS 24-13, who may diagnose, the 26-week trial before diagnosis, supervision and concurrent-billing rules, FFS rates, and ʻOhana’s exit from QUEST on December 31, 2026.',
    intro: [
      'Hawaii runs Medicaid as Med-QUEST and delivers almost all of it through QUEST Integration (QI), a single managed-care program whose plans are AlohaCare, HMSA, Kaiser Permanente, ʻOhana Health Plan and UnitedHealthcare Community Plan. Two things make Hawaii intake different from the mainland. The vocabulary is its own: Med-QUEST issues its ABA guidance under the heading Intensive Behavioral Therapy, so a search for "ABA policy" misses the document that governs. And the operative document is a numbered provider memo rather than an administrative rule — QI-2431 / FFS 24-13, dated December 31, 2024, which replaced QI-2301 / FFS 23-01 and is still the current ABA memo on Med-QUEST’s index.',
      'The memo is specific. It names who may diagnose, allows up to a 26-week trial of ABA before a definitive diagnosis, lets plans require PA for the assessment, requires PA for treatment in hours per week for up to 26 weeks, sets supervision at one to two hours per ten RBT hours, allows 97153 and 97155 to be billed concurrently, makes Medicaid secondary to all other insurance, and publishes FFS rates. The plan network is also changing: ʻOhana Health Plan leaves QUEST on December 31, 2026, and its members move to another plan on January 1, 2027.',
    ],
    atGlance: [
      { label: 'Program', value: 'Med-QUEST Division; managed care delivered as QUEST Integration (QI)' },
      { label: 'Hawaii’s term', value: 'Intensive Behavioral Therapy (IBT) — ABA is the IBT modality the memo governs' },
      { label: 'Governing memo', value: 'QI-2431 / FFS 24-13 (Dec 31, 2024), replacing QI-2301 / FFS 23-01' },
      { label: 'Covers ABA?', value: 'Yes — EPSDT, members under 21 with ASD (or a suspected-ASD trial of up to 26 weeks)' },
      { label: 'QI plans', value: 'AlohaCare · HMSA · Kaiser Permanente · ʻOhana (leaving 12/31/2026) · UnitedHealthcare Community Plan (ABA via Optum)' },
      { label: 'Prior auth', value: 'Treatment: required, hours/week for up to 26 weeks. Assessment: "may require PA" — plan-by-plan' },
      { label: 'Supervision', value: '1–2 hours per 10 RBT service hours, at least 1 direct; direct supervision ≥ 5% of BCaBA and RBT hours' },
      { label: 'FFS rates (per 15 min)', value: '97153 $17.66 · 97155 LBA $35.94 · 97156 LBA $46.20 · 97151 $28.52 (Attachment C, revised 12/2024; CY2025 funding — confirm 2026)' },
    ],
    sections: [
      {
        h2: 'The document that governs, and what it is called',
        body: [
          'Med-QUEST issues ABA guidance to the QI plans and to fee-for-service through paired provider memos. The current pair is QI-2431 and FFS 24-13, dated December 31, 2024, titled "Coverage of Intensive Behavioral Therapy (IBT) for Treatment of Children Under 21 Years of Age with Autism Spectrum Disorder (ASD): Guidelines for Applied Behavioral Analysis (ABA)." It restates the EPSDT duty — QI plans must provide medically necessary IBT, "which include ABA, for children under 21 years of age" — and attaches three documents: the access guideline (Attachment A), a process flow chart (Attachment B), and FFS codes and rates (Attachment C). The guideline says it aligns with the current CASP practice guidelines for funders, and that ABA "is not a long-term service and support (LTSS), respite, or home and community-based service (HCBS)."',
          'Because the guidance is issued to plans rather than adopted as a rule, it changes by memo number. As of September 23, 2026 the Med-QUEST memo index still lists QI-2431 as the current ABA memo; the separate telehealth memo was reissued as QI-2527 on December 8, 2025.',
        ],
        cites: [MQ_MEMO, MQ_INDEX],
      },
      {
        h2: 'From screening to treatment: who does what',
        body: [
          'Screening happens at the PCP’s EPSDT visits and needs no PA. The diagnosis "shall be made by" a developmental behavioral pediatrician, developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist, or another licensed practitioner with specialized expertise in ASD, using "evidence-based assessments." The diagnostic evaluation needs no PA, "but QI health plans may require a referral from the PCP," and extra psychological testing may need PA. If the diagnosing provider suspects ASD but needs more evaluation, the child "may qualify for up to a 26-week trial of ABA prior to diagnosis," with extensions possible; the request carries the working diagnoses (for example developmental delay or a language disorder) and documentation of the delays.',
          'The initial assessment and treatment plan are done by a diagnosing provider or a licensed behavior analyst (BCBA or BCBA-D), and "may require PA from the QI plan." The rendering provider submits the assessment and treatment plan to the plan "for PA before treatment begins." The plan must include each goal with a standardized measurement system (VB-MAPP and ABLLS-R are the examples), an anticipated timeline and hours per goal, and confirmation that services come from a provider licensed and actively enrolled in Hawaii Medicaid. Interim progress assessments are due at least every 26 weeks, and the continuation request is due "at least two weeks before the end of the approved treatment period." Plans may ask for them more often.',
        ],
        cites: [MQ_MEMO],
      },
      {
        h2: 'Which plan the member is on decides who authorizes',
        body: [
          'Med-QUEST sets the benefit; each QI plan runs its own authorization "established (MQD reviewed and approved) policy for PA," so the plan name is a required intake field. What the plans publish differs. AlohaCare issued its own ABA medical policy, MP-37, effective March 22, 2026, and its PA lookup requires authorization for every ABA code including 97151. ʻOhana’s PA list covers 97151 through 97158. UnitedHealthcare Community Plan sends ABA to Optum through Provider Express. HMSA lists ABA therapy on its QUEST precertification list. Kaiser Permanente authorizes outside-provider services through its Authorization and Referral Management department.',
          'ʻOhana Health Plan is leaving. Med-QUEST’s March 4, 2026 auto-assignment memo says ʻOhana "does not intend to renew its QI contract beginning January 1, 2027" and stopped new auto-assignments to it, cutting the number of plans from five to four in Honolulu and Maui counties and from four to three in Hawaiʻi and Kauaʻi counties. ʻOhana’s provider FAQ sets a special open enrollment of October 1–20, 2026, with new plans starting January 1, 2027 under QUEST transition-of-care rules. For an ʻOhana family starting ABA now, plan for a change of payer in January.',
        ],
        cites: [MQ_MEMO, AC_MP37, AC_PA, OH_PA, UHCCP_PA, HMSA_QI_PRECERT, KP_MAN, MQ_AA, OH_EXIT],
      },
      {
        h2: 'Rates and billing rules',
        body: [
          'Attachment C (revised 12/2024) publishes the FFS ABA rates "as of 2025," per 15 minutes: 97151 (LBA, HO) $28.52; 97152 (BCaBA, HN) $20.24; 0362T (LBA) $54.71; 97153 $17.66 (the HM RBT rate; Med-QUEST’s December 2024 FAQ lets LBAs and BCaBAs bill 97153 at that rate); 97155 LBA $35.94 and BCaBA $20.24; 97156 LBA $46.20 and BCaBA $25.01; group codes 97154, 97157 and 97158 paid per member or family by group size (modifiers UN through US); 0373T LBA $35.94, BCaBA $20.24, RBT $17.66. The rates came from the 2023 Milliman rate study, and Med-QUEST’s October 2024 presentation said the legislature funded them for calendar year 2025 only, with 2026 subject to a new appropriation. We did not find a later ABA rate memo, so confirm the current FFS schedule before quoting. QI plans "may reimburse providers ... at rates higher than" FFS; plan rates are negotiated.',
          'Billing rules in the memo: payment goes to the licensed practitioner or the agency that employs or contracts with them; a rendering provider bills one member at a time except for group services; and when several providers treat a member at once, only one may bill — except that 97153 (RBT under an LBA) and 97155 (LBA, or BCaBA under an LBA) may be billed concurrently when both codes’ criteria are met and they carry different modifiers. Not covered: custodial care, a member who is not medically stable, services by family or household members, treatment delivered as LTSS, HCBS or respite, experimental treatment, and "services provided outside of the State."',
        ],
        cites: [MQ_MEMO, MQ_FAQ, MQ_PRES, MQ_FEES],
      },
    ],
    collect: [
      { title: 'Which QUEST Integration plan', desc: 'AlohaCare, HMSA, Kaiser, ʻOhana or UnitedHealthcare Community Plan. The plan runs authorization; ʻOhana members change plans on January 1, 2027.' },
      { title: 'ASD diagnosis, who made it, and age', desc: 'Must come from one of the memo’s diagnosing provider types. The benefit is under 21. A suspected-ASD child can start a 26-week trial with the working diagnosis and documentation of delays.' },
      { title: 'PCP referral if the plan requires one', desc: 'The diagnostic evaluation needs no PA, but a QI plan may require a PCP referral.' },
      { title: 'Other insurance', desc: 'Medicaid is secondary to all other coverage — bill any commercial plan first.' },
      { title: 'School and state-agency services', desc: 'DOE provides school ABA under the IEP; EIP covers ages 0–3; the I/DD waiver runs alongside. The plan coordinates, and the provider must document no duplication.' },
    ],
    sources: [MQ_MEMO, MQ_INDEX, MQ_PRES, MQ_FAQ, MQ_TELE, MQ_AA, MQ_FEES, OH_EXIT, AC_MP37, CFR_438_210, CFR_440_230, CFR_433_139],
    deliveryRules: {
      supervision: {
        value: 'The licensed behavior analyst (BCBA-D or BCBA) supervises BCaBAs and RBTs and is responsible for clinical direction, supervision and case management. Case supervision "generally consists of at least one to two hours for every 10 hours of all RBT service hours with at least one of the two hours being direct supervision," direct supervision "must always be provided at least 5% of all BCaBA and RBT service delivery hours," and supervision of unlicensed staff must meet current BACB guidelines.',
        status: 'verified',
        cites: [MQ_MEMO],
      },
      concurrentBilling: {
        value: 'Allowed for 97153 and 97155 only. When several rendering providers treat a member at the same time only one may bill, but "an exception is made to allow concurrent billing for procedure codes 97153 and 97155" when both codes’ criteria are met and they carry different modifiers: 97153 by an RBT under an LBA, 97155 by an LBA or by a BCaBA under an LBA. Med-QUEST’s December 2024 FAQ declined requests to allow other concurrent pairs.',
        status: 'verified',
        cites: [MQ_MEMO, MQ_FAQ],
      },
      dailyLimits: {
        value: 'The memo sets no per-day or per-week unit cap. Hours are requested per week for up to 26 weeks and approved plan by plan; extra hours may be requested for school-aged members when school is not in session. Plans set their own review thresholds (AlohaCare MP-37 needs "strong clinical justification" above 30–40 hours a week), and Med-QUEST’s rate-study meetings recorded that one MCO had a much lower assessment-hours limit.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, AC_MP37, MQ_PRES],
        verifyVia: 'The member’s QI plan — ask for its weekly-hour review threshold and any assessment-unit limit before submitting.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'The memo sets no session-note signature rule. It requires treatment plans and progress assessments with goal data and confirmation that the rendering provider is licensed and enrolled. Plans set the note rules: AlohaCare requires start/stop times and the signatures of the rendering RBT or BCaBA and the supervising LBA.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, AC_MP37],
        verifyVia: 'The member’s QI plan provider manual or ABA policy (AlohaCare MP-37; the other plans’ provider services lines).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Services go where they address the behaviors found in the assessment — "a clinic, member’s home, or other community settings," named in the treatment plan. In school, the Department of Education provides educationally necessary ABA under the IDEA and the IEP, and the QI plan coordinates services outside school. Services outside Hawaii are not covered. Telehealth follows the separate MQD telehealth memo.',
        status: 'verified',
        cites: [MQ_MEMO, MQ_TELE],
      },
      billAsProvider: {
        value: 'For services by an LBA, BCaBA or RBT, the QI plan "shall reimburse the licensed practitioner or agency that contracts with or employs" them. Rendering providers must be licensed in Hawaii, enrolled in Hawaii Medicaid and BACB-certified, and BCaBAs and RBTs must work under an LBA. Claims carry credential modifiers: HO (LBA), HN (BCaBA), HM (RBT), and UN–US for group size; physicians and other QHPs doing assessment or treatment use AF, AH, TD or AJ.',
        status: 'verified',
        cites: [MQ_MEMO],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The memo covers EPSDT-eligible members "under 21 years of age" with ASD; the Early Intervention Program serves ages 0–3 alongside the QI plan, which still provides comprehensive ABA.',
        status: 'verified',
        cites: [MQ_MEMO],
      },
      dxRecency: {
        value: 'No recency window. The memo asks for an ASD diagnosis but sets no maximum age for it; a qualified rendering provider "may request a re-evaluation of the ASD diagnosis" if the child’s presentation no longer seems to meet the criteria.',
        status: 'verified',
        cites: [MQ_MEMO],
      },
      diagnosingProviders: {
        value: 'Developmental behavioral pediatrician, developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist, or "other licensed practitioner with specialized expertise in ASD" (APRNs and LCSWs bill with TD and AJ modifiers). Plans may narrow this — AlohaCare’s MP-37 lists only the first six.',
        status: 'verified',
        cites: [MQ_MEMO, AC_MP37],
      },
      diagnosticTools: {
        value: 'No instrument named: diagnosing providers must "use evidence-based assessments." The treatment plan must track each goal with a standardized measurement system such as VB-MAPP or ABLLS-R. Plans may add requirements — AlohaCare requires ADOS-2, CARS-2 or ADI-R.',
        status: 'verified',
        cites: [MQ_MEMO, AC_MP37],
      },
      referral: {
        value: 'No PA for the diagnostic evaluation, but "QI health plans may require a referral from the PCP." After diagnosis, the diagnosing provider refers the child to a rendering provider, and the plan must help find one on request.',
        status: 'plan-dependent',
        cites: [MQ_MEMO],
        verifyVia: 'The member’s QI plan — ask whether a PCP referral is needed for the diagnostic evaluation and for ABA.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'The ABA memo defers to MQD’s telehealth policy, QI-2527 (Dec 8, 2025): audio-video telehealth billed with modifier 95, GT or GQ, by providers eligible to bill Hawaii Medicaid, for services appropriate to the modality. ABA codes are not on the suggested-code list, though "other codes may also be billed." A provider that cannot offer in-person care must tell the family, each time, that they have a right to it. Place of service and plan limits are set by each QI plan; Optum’s 2022 UnitedHealthcare Community Plan orientation, for example, allowed only 97155 and 97156 by BCBAs, billed with POS 02.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, MQ_TELE, OPT_HI_ORIENT],
        verifyVia: 'The member’s QI plan — ask which ABA codes it pays via telehealth, with which modifier and POS.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Each QI plan decides ABA PAs, so the federal managed-care limit applies: for rating periods starting on or after January 1, 2026, standard decisions within "7 calendar days after receiving the request for service" (extendable by up to 14 days) and expedited decisions within 72 hours. FFS is held to the same 7-day/72-hour limit under 440.230(e). The memo adds the ABA timing: send the continuation request at least two weeks before the approved period ends, and the plan "must evaluate and determine the PA in a timely fashion so that there are no breaks in medically necessary services." Some plan manuals still print the old 14-day standard (AlohaCare, September 2025).',
        status: 'verified',
        cites: [CFR_438_210, CFR_440_230, MQ_MEMO, AC_MAN],
      },
      coordinationOfBenefits: {
        value: 'Medicaid pays last: the memo says "Medicaid is secondary to all other insurance coverage," and families and providers "should check with their QI health plan on coordination of benefits." Bill the commercial plan first (for a child under 14 on a state-regulated plan, Luke’s Law applies there). The memo does not say whether the QI plan’s own PA is still needed when it pays second; AlohaCare, for one, requires an appeal of most primary denials before it will review. TRICARE pays after other coverage except Medicaid, so Medicaid pays last there too; CHAMPVA is the last payer after other health insurance.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, AC_MAN, USC_1079, CFR_17_270],
        verifyVia: 'Ask the QI plan whether it requires its own ABA prior authorization when it is the secondary payer, and what primary-plan documentation it needs.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Hawaii Medicaid cover ABA therapy?', a: 'Yes. Med-QUEST covers ABA as Intensive Behavioral Therapy under memo QI-2431 / FFS 24-13 for members under 21 with ASD, delivered through the member’s QUEST Integration plan. A child with suspected ASD may get a trial of up to 26 weeks before a definitive diagnosis.' },
      { q: 'Why does Hawaii call it Intensive Behavioral Therapy?', a: 'IBT is the heading Med-QUEST files the benefit under; the memo’s subtitle is "Guidelines for Applied Behavioral Analysis." Searching Hawaii Medicaid documents for "ABA" alone can miss it.' },
      { q: 'Does the ABA assessment need prior authorization?', a: 'It depends on the plan. The memo says assessment "may require PA from the QI plan." AlohaCare and ʻOhana list 97151 and 97152 as PA codes. The diagnostic evaluation needs no PA, though a plan may want a PCP referral.' },
      { q: 'What happens to ʻOhana Health Plan members?', a: 'ʻOhana leaves QUEST on December 31, 2026. Members choose a new plan in a special open enrollment (October 1–20, 2026) or are assigned one, and the new plan starts January 1, 2027 under QUEST transition-of-care rules.' },
    ],
  },

  alohacare: {
    slug: 'alohacare',
    cardDesc: 'QUEST Integration plan, Medicaid-only and Hawaii-based. Has its own ABA policy (MP-37, 2026) and requires PA on every ABA code, including 97151.',
    assessmentPA: {
      value: 'Required — AlohaCare’s PA lookup lists 97151, 97152 and 0362T as "Prior Auth Required: YES" for QUEST (checked 9/23/2026); the diagnostic evaluation itself needs no PA',
      status: 'verified',
      cites: [AC_PA, AC_MP37],
    },
    treatmentPA: {
      value: 'Required for all treatment services (97153–97158, 0373T); the initial request includes the diagnostic evaluation, baseline assessments and a treatment plan signed by an LBA; re-authorization every 26 weeks with progress reports',
      status: 'verified',
      cites: [AC_MP37, AC_PA],
    },
    dxRequired: {
      value: 'Yes — DSM-5 ASD with early developmental symptoms AND a standardized diagnostic tool (ADOS-2, CARS-2 or ADI-R), made by a developmental-behavioral or developmental pediatrician, pediatrician, neurologist, psychologist or psychiatrist',
      status: 'verified',
      cites: [AC_MP37],
    },
    payer: 'AlohaCare (QUEST Integration)',
    state: 'HI', kind: 'medicaid-mco', parent: MEDICAID_PARENT,
    pill: 'Payer Guide · AlohaCare',
    h1: 'AlohaCare ABA coverage (QUEST Integration).',
    metaTitle: 'AlohaCare (QUEST Integration) ABA Coverage & Prior Authorization | Carelu',
    metaDescription:
      'How AlohaCare administers Hawaii’s Med-QUEST ABA benefit — its 2026 ABA medical policy MP-37, prior authorization on every ABA code including 97151, the ADOS-2/CARS-2/ADI-R diagnosis rule, supervision and concurrent-billing conditions, and documentation requirements.',
    intro: [
      'AlohaCare is a Hawaii-based, Medicaid-focused QUEST Integration plan. The benefit is Med-QUEST’s — memo QI-2431 / FFS 24-13, for members under 21 with ASD — but since March 22, 2026 AlohaCare has its own ABA medical policy, MP-37, which is stricter than the memo in places: the diagnosis must rest on a standardized tool (ADOS-2, CARS-2 or ADI-R), the diagnosing-provider list is shorter, and requests above 30–40 hours a week need strong justification. MP-37 says that where it conflicts with Med-QUEST guidance, "MQD guidance prevails." AlohaCare’s PA lookup requires authorization for every ABA code, including the 97151 assessment.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'QUEST Integration plan (Hawaii-based, Medicaid-focused)' },
      { label: 'Benefit source', value: 'Med-QUEST memo QI-2431 / FFS 24-13; AlohaCare MP-37 (eff. 3/22/2026, rev. 5/8/2026)' },
      { label: 'Assessment PA', value: 'Required — 97151, 97152, 0362T all "YES" in the PA lookup' },
      { label: 'Treatment PA', value: 'Required — every 26 weeks, treatment plan signed by an LBA' },
      { label: 'Diagnosis', value: 'DSM-5 ASD + ADOS-2, CARS-2 or ADI-R' },
      { label: 'Hours', value: 'Above 30–40 hrs/week needs strong clinical justification; 40 hrs is not automatic' },
      { label: 'Medical necessity criteria', value: 'MP-37 for ABA; MCG for other services' },
    ],
    sections: [
      {
        h2: 'MP-37: AlohaCare’s own ABA policy',
        body: [
          'MP-37 covers ABA under EPSDT for members under 21 when all its criteria are met. Eligibility needs a DSM-5 ASD diagnosis "including documentation of early developmental symptoms AND standardized diagnostic evaluation tools (i.e., ADOS-2, CARS-2, ADI-R)," made by a developmental-behavioral pediatrician, developmental pediatrician, pediatrician, neurologist, psychologist or psychiatrist. That list is shorter than the memo’s, which also allows "other licensed practitioner with specialized expertise in ASD"; MP-37 says MQD guidance governs where the two conflict, so raise it with AlohaCare if the diagnosis came from someone else. The treatment plan is written by a licensed behavior analyst and must include a functional behavioral assessment with operational definitions, baseline data for every goal area, the clinical reason for the requested intensity, a parent-training plan, a safety plan when needed, generalization strategies, and a titration (step-down) plan. It is updated at least every 26 weeks.',
          'Limits: 40 hours a week "is not automatically approved," and anything above 30–40 hours needs documented severe needs, a clinical reason, a step-down timeline and evidence of progress. Not covered: services that duplicate DOE, HCBS or custodial supports; services by family or household members; custodial care; experimental treatment; unsupervised services; telehealth used inappropriately (for example with no caregiver present when one is needed for safety); and services outside Hawaii without prior authorization.',
        ],
        cites: [AC_MP37, MQ_MEMO],
      },
      {
        h2: 'Authorization mechanics',
        body: [
          'AlohaCare’s PA lookup, which the plan calls the most current source, lists 97151 through 97158, 0362T and 0373T as prior-authorization codes for QUEST, effective since 2018–2019 and confirmed on September 23, 2026. The diagnostic evaluation (for example 90791) needs no authorization. Requests go on the Request for Authorization and Notification form. AlohaCare reviews against its own policies and "nationally developed clinical criteria (such as MCG ...)," and asks for missing information twice before denying: within 2 days and then 7 days for a standard request.',
          'Timing: the September 2025 provider manual still prints the 14-calendar-day standard (plus a 14-day extension) and 72 hours for expedited requests. The federal managed-care rule has required 7 calendar days for standard decisions since rating periods starting January 1, 2026, so hold AlohaCare to that. AlohaCare’s published 2025 metrics show an average standard turnaround of 107 hours and a median of 28 hours.',
        ],
        cites: [AC_PA, AC_AUTH, AC_MAN, CFR_438_210],
      },
    ],
    collect: [
      { title: 'AlohaCare member ID and QUEST enrollment', desc: 'Confirm QUEST Integration enrollment and that AlohaCare is the assigned plan.' },
      { title: 'Diagnostic report with the standardized tool', desc: 'MP-37 wants ADOS-2, CARS-2 or ADI-R results and documented early symptoms, from one of its six diagnosing-provider types.' },
      { title: 'Assessment authorization before the first session', desc: '97151 and 97152 need AlohaCare PA — don’t schedule the assessment first.' },
      { title: 'Treatment plan pieces', desc: 'FBA, baseline for every goal, parent-training plan, titration plan, and a reason for the intensity requested (especially above 30 hours).' },
      { title: 'Other insurance', desc: 'AlohaCare pays last; most primary-plan denials must be appealed before it will review.' },
    ],
    sources: [AC_MP37, AC_PA, AC_MAN, AC_AUTH, MQ_MEMO, CFR_438_210, CFR_433_139],
    deliveryRules: {
      supervision: {
        value: 'LBA supervision of RBTs and BCaBAs must meet current BACB and MQD requirements. For RBTs, at least 5% of total service hours must be supervised by an LBA and documented, including direct observation with the member, ongoing case review and feedback, and records of supervision in the clinical file. MQD’s memo sets the wider standard: 1–2 hours of case supervision per 10 RBT hours, at least one of them direct.',
        status: 'verified',
        cites: [AC_MP37, MQ_MEMO],
      },
      concurrentBilling: {
        value: '97153 and 97155 may be billed concurrently only when an RBT or BCaBA is delivering 97153, the LBA is at the same time delivering 97155 with "actively performing medically necessary protocol modification," and the member needs real-time modification. Not allowed when the LBA is only observing or documentation doesn’t separate the two. Required: separate notes for each code, the clinical reason, the LBA’s modification activity, start/stop times for both, and supporting data.',
        status: 'verified',
        cites: [AC_MP37],
      },
      dailyLimits: {
        value: 'No per-day unit cap is published. Intensity must be individualized: 40 hours a week "is not automatically approved," and requests above 30–40 hours a week need documented severe needs, a clinical reason, a step-down timeline and evidence of progress.',
        status: 'verified',
        cites: [AC_MP37],
      },
      noteSignature: {
        value: 'Records must show date, time, duration and location of each service, the goals targeted and the member’s response, progress data, start/stop times for time-based codes, "signatures of rendering provider (RBT/BCaBA) and supervising LBA," and supervision documentation meeting BACB and MQD standards. The initial treatment plan must be signed by an LBA.',
        status: 'verified',
        cites: [AC_MP37],
      },
      placeOfService: {
        value: 'Settings follow the memo — clinic, home or community, as named in the treatment plan. Not covered: services that duplicate DOE, HCBS or custodial supports, and services outside Hawaii without prior authorization. Telehealth is covered when consistent with MQD and BACB standards.',
        status: 'verified',
        cites: [AC_MP37, MQ_MEMO],
      },
      billAsProvider: {
        value: 'Bill with the CPT/HCPCS codes and modifiers in MQD Attachment C (QI-2431). An RBT works only under LBA supervision "and cannot bill independently"; a BCaBA works only under LBA supervision. The LBA must hold a Hawaii license and be credentialed with Medicaid. Payment goes to the licensed practitioner or the agency that employs or contracts with them.',
        status: 'verified',
        cites: [AC_MP37, MQ_MEMO],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — MP-37 eligibility 2.1: "Member is under 21 years of age."',
        status: 'verified',
        cites: [AC_MP37],
      },
      dxRecency: {
        value: 'No recency window in MP-37 or the MQD memo. MP-37 does require a diagnostic evaluation with the initial request and progress reports every 26 weeks.',
        status: 'verified',
        cites: [AC_MP37, MQ_MEMO],
      },
      diagnosingProviders: {
        value: 'Developmental behavioral pediatrician, developmental pediatrician, pediatrician, neurologist, psychologist or psychiatrist. The MQD memo also allows another licensed practitioner with ASD expertise, and MP-37 says MQD guidance governs if the two conflict.',
        status: 'verified',
        cites: [AC_MP37, MQ_MEMO],
      },
      diagnosticTools: {
        value: 'Required: DSM-5 criteria plus documented early developmental symptoms AND standardized diagnostic evaluation tools — ADOS-2, CARS-2 or ADI-R. The treatment plan then needs an FBA and baseline data for every goal area.',
        status: 'verified',
        cites: [AC_MP37],
      },
      referral: {
        value: 'No PCP referral is needed for in-network specialty care: the provider manual says specialty services "do not require a referral if the services are provided by an in-network/participating provider within the member’s home island." ABA is controlled by prior authorization, and the diagnostic evaluation needs no authorization.',
        status: 'verified',
        cites: [AC_MAN, AC_PA, AC_MP37],
      },
      telehealth: {
        value: 'MP-37 covers "Telehealth ABA consistent with MQD and BACB standards" and denies inappropriate use, for example no caregiver present when one is needed for safety. It does not list which codes may be delivered remotely; MQD’s QI-2527 requires audio-video with modifier 95, GT or GQ.',
        status: 'plan-dependent',
        cites: [AC_MP37, MQ_TELE],
        verifyVia: 'AlohaCare Provider Services (808) 973-1650 / 1-800-434-1002 — ask which ABA codes it pays via telehealth and with which POS.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The September 2025 manual prints 14 calendar days (plus up to 14) for standard decisions and 72 hours for expedited ones, and treats a request as denied for missing information if nothing arrives within 14 calendar days (72 hours if expedited) after two requests. The federal limit for rating periods from January 1, 2026 is 7 calendar days (extendable by 14) and 72 hours expedited. Continuation requests are due at least two weeks before the period ends (MQD memo). AlohaCare’s 2025 average standard turnaround was 107 hours.',
        status: 'verified',
        cites: [AC_MAN, CFR_438_210, MQ_MEMO, AC_AUTH],
      },
      coordinationOfBenefits: {
        value: 'AlohaCare "is always considered the payer of last resort." Bill the primary carrier first and send AlohaCare the claim with the primary EOB. Primary-plan denials must be appealed first, except denials for eligibility or non-covered services, and AlohaCare pays up to its own allowance minus the primary payment. The manual does not say whether AlohaCare PA is waived when it pays second, so get it. TRICARE pays after other coverage except Medicaid; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [AC_MAN, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'AlohaCare Provider Services — confirm whether ABA PA is still required when AlohaCare is secondary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does AlohaCare cover ABA therapy?', a: 'Yes — under EPSDT for members under 21 with ASD, following Med-QUEST memo QI-2431 and AlohaCare’s own ABA policy MP-37 (effective March 22, 2026).' },
      { q: 'Does AlohaCare require prior authorization for the ABA assessment?', a: 'Yes. AlohaCare’s PA lookup lists 97151, 97152 and 0362T as prior-authorization codes for QUEST. The diagnostic evaluation needs none.' },
      { q: 'What diagnosis documentation does AlohaCare want?', a: 'A DSM-5 ASD diagnosis with documented early symptoms and a standardized tool — ADOS-2, CARS-2 or ADI-R — from a developmental-behavioral or developmental pediatrician, pediatrician, neurologist, psychologist or psychiatrist.' },
    ],
  },

  hmsa: {
    slug: 'hmsa',
    family: 'bcbs',
    // pVerify spells this "Hawaii Medical Service Assoc (HMSA)" - abbreviated.
    // "Association" spelled out would NOT match it.
    cardDesc: 'Hawaii’s Blue Cross Blue Shield licensee. Runs QUEST Integration and commercial lines; ABA is on both precertification lists.',
    assessmentPA: {
      value: 'Unverified — HMSA lists "Applied Behavior Analysis Therapy for Treatment of Autism Spectrum Disorder" on its precertification lists, but whether 97151 itself needs precertification is in the code-level list and policy we could not open',
      status: 'unverified',
      cites: [HMSA_QI_PRECERT, HMSA_COMM_PRECERT],
      verifyVia: 'HMSA’s prior authorization list (PAL) at hmsa.policytransparency.com (opening it requires accepting HMSA’s terms of use), or the precertification unit at (808) 948-6464 / 1-800-344-6122.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — "Applied Behavior Analysis Therapy for Treatment of Autism Spectrum Disorder" is on both the QUEST Integration and commercial precertification lists; HMSA uses an ABA Precertification Request Form (updated 8/2025)',
      status: 'verified',
      cites: [HMSA_QI_PRECERT, HMSA_COMM_PRECERT, HMSA_POLICIES],
    },
    dxRequired: {
      value: 'QUEST line: ASD per Med-QUEST memo QI-2431. Commercial: ASD per Luke’s Law ("most recent edition" of the DSM). HMSA’s own ABA medical policy (effective 9/1/2025) could not be read',
      status: 'plan-dependent',
      cites: [MQ_MEMO, HRS_133, HMSA_POLICIES],
      verifyVia: 'HMSA medical policy "Applied Behavior Analysis for Treatment of Autism Spectrum Disorder" (eff. 9/1/2025) at hmsa.policytransparency.com — gated behind a terms-of-use acceptance.',
      blocker: 'document',
    },
    payer: 'Hawaii Medical Service Assoc (HMSA) - Blue Cross Blue Shield of Hawaii',
    state: 'HI', kind: 'commercial',
    pill: 'Payer Guide · HMSA · Hawaii',
    h1: 'HMSA ABA coverage in Hawaii (QUEST Integration and commercial).',
    metaTitle: 'HMSA (Blue Cross Blue Shield of Hawaii) ABA Coverage & Precertification | Carelu',
    metaDescription:
      'How HMSA handles ABA across its QUEST Integration Medicaid line and its commercial plans — why the line matters more than the carrier, ABA on HMSA’s precertification lists, Luke’s Law (under 14, $25,000/yr ABA cap), Hawaii licensure, and what remains unverified.',
    intro: [
      'HMSA — the Hawaii Medical Service Association — is Hawaii’s Blue Cross Blue Shield licensee, a mutual benefit society that runs both a QUEST Integration Medicaid line and commercial plans. For ABA intake the line matters more than the carrier: a QUEST member’s ABA benefit is Med-QUEST’s (memo QI-2431, under 21), while a commercial member’s is the plan’s own, sitting on top of Luke’s Law — which for mutual benefit societies is the chapter 432 counterpart of HRS § 431:10A-133 (under 14, $25,000 a year for ABA). Establish the line before anything else.',
      'HMSA says "precertification" where most payers say prior authorization. ABA therapy is on both its QUEST and commercial precertification lists. Its ABA medical policy (effective September 1, 2025) and code-level prior-authorization list moved in May 2026 to a policy transparency site that requires accepting HMSA’s terms of use before it opens, so we have not read them and this guide does not state HMSA’s code-level or clinical specifics.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — QUEST line under Med-QUEST memo QI-2431 (under 21); commercial line under the plan and Luke’s Law' },
      ...HI_MANDATE_GLANCE,
      { label: 'Lines of business', value: 'QUEST Integration (Medicaid) and commercial (plus FEP)' },
      { label: 'Precertification', value: 'ABA therapy on both the QUEST and commercial precertification lists; ABA Precertification Request Form (8/2025)' },
    ],
    sections: [
      {
        h2: 'The line decides the rulebook',
        body: [
          'An HMSA QUEST member gets the Med-QUEST ABA benefit administered by HMSA: under 21, ASD diagnosis per the memo, treatment prior-authorized in hours per week for up to 26 weeks, supervision at 1–2 hours per 10 RBT hours, Medicaid secondary to other coverage. HMSA added "Applied Behavior Analysis Therapy for Treatment of Autism Spectrum Disorder" to its QUEST precertification list on November 19, 2021. Requests go on the HMSA precertification form by fax to (808) 944-5611 or through HHIN+, and HMSA decides "within the timeliness standards established by the National Committee for Quality Assurance (NCQA)." For QUEST, the federal managed-care limit — 7 calendar days standard, 72 hours expedited — applies.',
          'An HMSA commercial member is governed by the plan document, Luke’s Law (if the plan is fully insured and the child is under 14) and HMSA’s commercial precertification list, which also names ABA. The HMSA QUEST member handbook (April 2026) says EPSDT autism services "include all medically necessary intensive behavioral therapy and applied behavioral analysis." Its ABA medical policy (effective 9/1/2025) sets the clinical criteria for both lines but could not be read here.',
        ],
        cites: [HMSA_QI_PRECERT, HMSA_QI_PROC, HMSA_COMM_PRECERT, HMSA_HB, MQ_MEMO, CFR_438_210],
      },
      HI_MANDATE_SECTION,
      HI_LICENSURE_SECTION,
      {
        h2: 'What is unverified',
        body: [
          'Not yet read: HMSA’s ABA medical policy and its code-level prior-authorization list — both now at hmsa.policytransparency.com, which asks users to accept HMSA’s medical policy terms of use before it shows content, so we did not open them. So the following are unknown here: whether 97151 itself is precertified, HMSA’s clinical criteria and diagnostic-tool requirements, hour thresholds, telehealth rules, and whether behavioral health is handled in-house. Note for maintainers: pVerify spells this payer "Hawaii Medical Service Assoc (HMSA)" and the payer name matches that spelling on purpose; a separate "BCBS of Hawaii" row in that directory is not covered by this name.',
        ],
        cites: [HMSA_POLICIES, HMSA_PT],
      },
    ],
    collect: [
      { title: 'QUEST or commercial', desc: 'The most important HMSA question — it decides whether the Med-QUEST benefit (under 21) or the plan plus Luke’s Law (under 14, $25,000/yr ABA) applies.' },
      { title: 'Fully insured or self-funded (commercial)', desc: 'Self-funded employer plans are outside Luke’s Law; get the group number and employer name.' },
      { title: 'Child’s age', desc: 'Luke’s Law covers children under 14; the QUEST benefit runs to 21.' },
      { title: 'Treatment order and plan', desc: 'Luke’s Law requires a treatment plan with each request and covers care prescribed or ordered by a physician, psychiatrist, psychologist, LCSW or registered nurse practitioner.' },
      { title: 'Whether the referrer said "precertification"', desc: 'HMSA’s word for prior authorization.' },
    ],
    sources: [HMSA_QI_PRECERT, HMSA_QI_PROC, HMSA_COMM_PRECERT, HMSA_POLICIES, HMSA_PT, HMSA_HB, MQ_MEMO, HRS_133, SB791, HRS_465D7, HRS_465D8, CFR_438_210, CFR_2560, CFR_147_136],
    deliveryRules: {
      supervision: {
        value: 'QUEST line: MQD memo — 1–2 hours of case supervision per 10 RBT hours, at least one direct, and direct supervision at least 5% of BCaBA and RBT hours. Commercial line: HMSA’s ABA medical policy sets it and could not be read; Hawaii law lets RBTs and BCaBAs practice only under a licensed behavior analyst’s direction.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, HRS_465D7, HMSA_POLICIES],
        verifyVia: 'HMSA ABA medical policy (eff. 9/1/2025) at hmsa.policytransparency.com, or HMSA Provider Services (808) 948-6330.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'QUEST line: the MQD memo allows 97153 and 97155 concurrently when both codes’ criteria are met and they carry different modifiers. Commercial: not verified.',
        status: 'plan-dependent',
        cites: [MQ_MEMO],
        verifyVia: 'HMSA ABA medical policy / billing guidance at hmsa.policytransparency.com, or HMSA Provider Services (808) 948-6330.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'QUEST line: no memo cap; hours are approved per week for up to 26 weeks. Commercial: Luke’s Law caps ABA at $25,000 a year for children 13 and under on fully insured plans; any HMSA hour or unit limits are in the unread policy.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, HRS_133],
        verifyVia: 'HMSA benefits verification on the member ID, plus HMSA’s ABA policy at hmsa.policytransparency.com.',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Not verified. Neither HMSA precertification article sets session-note signature rules; HMSA’s ABA policy may.',
        status: 'unverified',
        cites: [HMSA_QI_PROC],
        verifyVia: 'HMSA ABA medical policy at hmsa.policytransparency.com, or HMSA Provider Services (808) 948-6330.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'QUEST line: clinic, home or community per the MQD memo, with school ABA provided by DOE under the IEP; not covered outside Hawaii. Commercial: Luke’s Law excludes "services provided outside of the State" and does not reduce any IEP or IFSP obligation. HMSA’s own setting rules are unread.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, HRS_133],
        verifyVia: 'HMSA ABA medical policy at hmsa.policytransparency.com.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'QUEST line: payment goes to the licensed practitioner or employing agency, with HO/HN/HM credential modifiers (MQD memo). Commercial: Luke’s Law covers treatment only from an autism service provider "licensed by a state licensure board," and network providers must clear state and federal background checks. HMSA’s credentialing and billing-provider rules are unread.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, HRS_133],
        verifyVia: 'HMSA Provider Services (808) 948-6330, or HMSA’s ABA policy at hmsa.policytransparency.com.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'QUEST line: under 21 (MQD memo). Commercial: Luke’s Law covers "individuals under fourteen years of age" on fully insured plans; a plan may cover older children, and self-funded plans set their own terms.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, HRS_133],
        verifyVia: 'HMSA benefits verification — confirm line of business, funding type and the plan’s ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No recency window in the MQD memo or Luke’s Law. Luke’s Law lets a carrier require a repeat evaluation when a new DSM edition is published. HMSA’s own policy is unread.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, HRS_133],
        verifyVia: 'HMSA ABA medical policy at hmsa.policytransparency.com.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'QUEST line: the MQD memo’s list (developmental-behavioral or developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist, other licensed ASD-expert practitioner). Commercial: not verified.',
        status: 'plan-dependent',
        cites: [MQ_MEMO],
        verifyVia: 'HMSA ABA medical policy at hmsa.policytransparency.com.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'QUEST line: "evidence-based assessments," with VB-MAPP or ABLLS-R-type goal measurement (MQD memo). HMSA’s own instrument requirements are unread.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'HMSA ABA medical policy at hmsa.policytransparency.com.',
        blocker: 'document',
      },
      referral: {
        value: 'Commercial: Luke’s Law covers treatment "prescribed or ordered" by a licensed physician, psychiatrist, psychologist, licensed clinical social worker or registered nurse practitioner, with a treatment plan required on each request. QUEST: the MQD memo lets plans require a PCP referral for the diagnostic evaluation. HMSA’s precertification request asks for "physician’s orders."',
        status: 'verified',
        cites: [HRS_133, MQ_MEMO, HMSA_QI_PROC],
      },
      telehealth: {
        value: 'Not verified for ABA. QUEST members fall under MQD’s telehealth memo QI-2527 (audio-video, modifier 95/GT/GQ); HMSA lists its telehealth billing guidance at prc.hmsa.com/s/article/Telehealth, which was not read for ABA codes.',
        status: 'unverified',
        cites: [MQ_TELE],
        verifyVia: 'HMSA Provider Resource Center telehealth article, or HMSA Provider Services (808) 948-6820 — ask which ABA codes are payable via telehealth.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'QUEST line: HMSA decides "within the timeliness standards established by ... NCQA," and the federal managed-care limit applies — 7 calendar days standard (for rating periods from January 1, 2026; extendable by 14) and 72 hours expedited. Commercial group plans: 29 CFR 2560.503-1 through 45 CFR 147.136 — pre-service decisions "not later than 15 days," one 15-day extension, urgent within 72 hours. We found no Hawaii statute setting a shorter initial-decision deadline; HRS § 432E-5 sets internal appeals at 72 hours (expedited) and 60 days.',
        status: 'plan-dependent',
        cites: [HMSA_QI_PROC, CFR_438_210, CFR_2560, CFR_147_136, HRS_432E5],
        verifyVia: 'HMSA precertification unit (808) 948-6464 / 1-800-344-6122 — confirm line of business and the turnaround HMSA commits to.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'QUEST line: Medicaid is secondary to all other insurance (MQD memo). Commercial: order is set by the plans’ COB provisions; we found no Hawaii rule fixing birthday-rule order, so ask. If the child also has QUEST, HMSA commercial pays first and QUEST last; get HMSA precertification even then. TRICARE pays after other coverage except Medicaid; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'HMSA benefits verification — record every other coverage and ask HMSA which plan is primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does HMSA cover ABA therapy?', a: 'On the QUEST line HMSA administers the Med-QUEST ABA benefit for members under 21 with ASD. On fully insured commercial plans Luke’s Law requires coverage for children under 14, with ABA capped at $25,000 a year for ages 13 and under. ABA therapy is on both HMSA precertification lists.' },
      { q: 'What is precertification at HMSA?', a: 'HMSA’s word for prior authorization. QUEST requests go by fax to (808) 944-5611 or through HHIN+; the precertification unit is at (808) 948-6464.' },
      { q: 'Is HMSA the same as Blue Cross Blue Shield of Hawaii?', a: 'Yes — HMSA is Hawaii’s Blue Cross Blue Shield licensee.' },
    ],
  },

  'ohana-health-plan': {
    slug: 'ohana-health-plan',
    family: 'centene',
    cardDesc: 'QUEST Integration plan run by WellCare (Centene). LEAVES QUEST on Dec 31, 2026 — members move to another plan Jan 1, 2027. PA on 97151–97158.',
    assessmentPA: {
      value: 'Required — ʻOhana’s CMS-0057-F prior-authorization list (effective 12/31/2025) names "ABA Services 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158"',
      status: 'verified',
      cites: [OH_PA],
    },
    treatmentPA: {
      value: 'Required — 97153–97158 on the same list; submit through the WellCare provider portal or by fax',
      status: 'verified',
      cites: [OH_PA, OH_AUTH],
    },
    dxRequired: {
      value: 'Follows Med-QUEST memo QI-2431 (ASD, under 21, the memo’s diagnosing-provider list); an ʻOhana-specific ABA clinical guideline could not be checked',
      status: 'unverified',
      cites: [MQ_MEMO],
      verifyVia: 'ʻOhana Clinical Coverage Guidelines list (ohanahealthplan.com/providers/tools/clinical-guidelines.html — client-rendered, did not load), or Provider Services 1-888-846-4262.',
      blocker: 'document',
    },
    payer: 'Ohana Health Plan (WellCare of Hawaii)',
    state: 'HI', kind: 'medicaid-mco', parent: MEDICAID_PARENT,
    pill: 'Payer Guide · ʻOhana Health Plan',
    h1: 'ʻOhana Health Plan ABA coverage (QUEST Integration).',
    metaTitle: 'ʻOhana Health Plan (WellCare) QUEST Integration ABA Coverage | Carelu',
    metaDescription:
      'How ʻOhana Health Plan, WellCare’s Hawaii QUEST Integration plan, handles ABA — prior authorization on 97151–97158, the Med-QUEST benefit it delivers, and its exit from QUEST on December 31, 2026, with members moving to a new plan on January 1, 2027.',
    intro: [
      'ʻOhana Health Plan is WellCare’s (Centene’s) QUEST Integration plan in Hawaii, and it is leaving. Med-QUEST’s March 4, 2026 memo QI-2608 says ʻOhana "does not intend to renew its QI contract beginning January 1, 2027," and ʻOhana’s provider FAQ confirms members move to another QUEST plan on January 1, 2027, after a special open enrollment on October 1–20, 2026. Until then ʻOhana delivers the Med-QUEST ABA benefit (memo QI-2431: under 21, ASD) and prior-authorizes every ABA code from 97151 through 97158.',
      'Note the spelling: the plan writes its name with a leading ʻokina. pVerify lists it as "Ohana Health Plan (WellCare of Hawaii)", and the payer name follows that spelling.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'QUEST Integration plan (WellCare / Centene)' },
      { label: 'Status', value: 'Leaves QUEST December 31, 2026; members on a new plan January 1, 2027' },
      { label: 'Benefit source', value: 'Med-QUEST memo QI-2431 / FFS 24-13 (IBT / ABA)' },
      { label: 'Prior auth', value: 'Required on 97151–97158 (list effective 12/31/2025)' },
      { label: 'Claims run-out', value: 'Services through 12/31/2026 must be billed by 12/31/2027' },
    ],
    sections: [
      {
        h2: 'The exit, and what it means for an ABA case',
        body: [
          'ʻOhana’s FAQ (approved August 14, 2026): members were to be notified in early September; the special open enrollment runs October 1–20, 2026; members who don’t choose are assigned; enrollment and transition-of-care files move to the new plans from mid-November; new coverage starts January 1, 2027. Providers should keep treating ʻOhana members through December 31, 2026. On prior authorizations, "Existing QUEST transition of care policies will apply," and members "may continue receiving those services through their new health plan without prior authorization and regardless of provider network status, consistent with applicable QUEST transition of care requirements." Claims for services through December 31, 2026 are due by December 31, 2027, and the call center stays open through then.',
          'For intake: an ʻOhana family starting ABA this fall should know which plan they are moving to. Get ʻOhana’s authorization for the current period, check your contract with the family’s new plan, and plan the first reauthorization with the new plan in mind.',
        ],
        cites: [OH_EXIT, MQ_AA],
      },
      {
        h2: 'Authorization while ʻOhana is the plan',
        body: [
          'ʻOhana’s CMS-0057-F prior-authorization list (effective 12/31/2025) names ABA Services 97151 through 97158, and separately lists neuropsychological and psychological testing (96112–96146). The fastest route is the WellCare provider portal; fax is also accepted, and phone only for urgent requests, which are decided within 72 hours. ʻOhana’s published 2025 QUEST metrics show 97.8% of standard requests approved, with an average of 3 days and a median of 1. The clinical rules come from Med-QUEST’s memo: diagnosis by the memo’s listed providers, a treatment plan with standardized goal measurement, 26-week periods, supervision at 1–2 hours per 10 RBT hours, and concurrent 97153/97155 billing allowed.',
        ],
        cites: [OH_PA, OH_AUTH, MQ_MEMO],
      },
    ],
    collect: [
      { title: 'Which plan the family is moving to', desc: 'ʻOhana coverage ends December 31, 2026. Ask which plan they picked in the October 1–20 enrollment, or which one they were assigned.' },
      { title: 'ʻOhana member ID and QUEST enrollment', desc: 'Confirm ʻOhana is the assigned plan for the dates you are treating.' },
      { title: 'ASD diagnosis and age', desc: 'The Med-QUEST benefit is for members under 21 with ASD, diagnosed by one of the memo’s listed providers.' },
      { title: 'Assessment authorization', desc: '97151 and 97152 are on ʻOhana’s PA list — get the authorization before the assessment.' },
    ],
    sources: [OH_EXIT, OH_PA, OH_AUTH, OH_BH, OH_QRG, MQ_AA, MQ_MEMO, MQ_INDEX, CFR_438_210, CFR_433_139],
    deliveryRules: {
      supervision: {
        value: 'ʻOhana publishes no ABA supervision rule of its own that we could find; the MQD memo sets it: 1–2 hours of case supervision per 10 RBT hours, at least one direct, direct supervision at least 5% of BCaBA and RBT hours, per BACB guidelines.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'ʻOhana Clinical Coverage Guidelines (client-rendered list did not load), or Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'The MQD memo allows 97153 and 97155 concurrently when both codes’ criteria are met and they carry different modifiers. Med-QUEST’s 2024 rate-study meetings recorded that "one MCO allows billing for RBT + BCBA concurrent services; other MCOs do not" — confirm ʻOhana’s edit.',
        status: 'unverified',
        cites: [MQ_MEMO, MQ_PRES],
        verifyVia: 'ʻOhana Provider Services 1-888-846-4262 — ask whether its claim edits allow 97153 + 97155 for the same time.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No ʻOhana unit cap published; hours are authorized per request. The MQD memo sets no daily cap and approves hours per week for up to 26 weeks.',
        status: 'unverified',
        cites: [MQ_MEMO, OH_PA],
        verifyVia: 'ʻOhana utilization management through the WellCare provider portal or 1-888-846-4262.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not verified — neither the MQD memo nor ʻOhana’s published authorization material sets session-note signature rules.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'ʻOhana provider manual or Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Per the MQD memo: clinic, home or community settings named in the treatment plan; school ABA through DOE under the IEP; nothing outside Hawaii. No ʻOhana-specific setting rule found.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'ʻOhana Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
      billAsProvider: {
        value: 'Per the MQD memo: payment goes to the licensed practitioner or employing agency, with HO/HN/HM modifiers. ʻOhana requires provider and facility NPIs on authorization requests; its own ABA billing rules were not found.',
        status: 'unverified',
        cites: [MQ_MEMO, OH_AUTH],
        verifyVia: 'ʻOhana Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — the Med-QUEST benefit ʻOhana delivers (MQD memo). ʻOhana coverage itself ends December 31, 2026.',
        status: 'verified',
        cites: [MQ_MEMO, OH_EXIT],
      },
      dxRecency: {
        value: 'No recency window in the MQD memo; no ʻOhana rule found.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'ʻOhana Clinical Coverage Guidelines or Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
      diagnosingProviders: {
        value: 'MQD memo list: developmental-behavioral or developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist, or other licensed practitioner with ASD expertise. No ʻOhana variation found.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'ʻOhana Clinical Coverage Guidelines or Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
      diagnosticTools: {
        value: 'MQD memo: "evidence-based assessments," no instrument named. No ʻOhana requirement found.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'ʻOhana Clinical Coverage Guidelines or Provider Services 1-888-846-4262.',
        blocker: 'document',
      },
      referral: {
        value: 'The MQD memo lets plans require a PCP referral for the diagnostic evaluation. ʻOhana’s behavioral health page lists psychiatric and psychological evaluations as not needing prior authorization; ABA itself is controlled by PA.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, OH_BH, OH_PA],
        verifyVia: 'ʻOhana Provider Services 1-888-846-4262 — ask whether a PCP referral is required.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'MQD’s telehealth memo QI-2527 applies (audio-video, modifier 95/GT/GQ); ʻOhana is listed there as the contact for plan billing rules. No ʻOhana ABA telehealth rule found.',
        status: 'unverified',
        cites: [MQ_TELE],
        verifyVia: 'ʻOhana Provider Services 1-888-846-4262.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Expedited requests: "a determination within 72 hours" (ʻOhana). Standard: the federal managed-care limit of 7 calendar days for rating periods from January 1, 2026 (extendable by 14). ʻOhana’s 2025 QUEST standard average was 3 days, median 1. Continuation requests are due at least two weeks before the period ends (MQD memo).',
        status: 'verified',
        cites: [OH_AUTH, CFR_438_210, OH_PA, MQ_MEMO],
      },
      coordinationOfBenefits: {
        value: 'Medicaid is secondary to all other insurance (MQD memo), so ʻOhana pays after any commercial plan. Whether ʻOhana requires its own PA when secondary is not stated. TRICARE pays after other coverage except Medicaid; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'ʻOhana Provider Services 1-888-846-4262 — confirm PA requirements when ʻOhana is secondary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Is ʻOhana Health Plan leaving QUEST?', a: 'Yes. ʻOhana leaves the QUEST program on December 31, 2026. Members pick a new plan during the October 1–20, 2026 special open enrollment or are assigned one, and new coverage starts January 1, 2027. QUEST transition-of-care rules let ongoing services continue with the new plan.' },
      { q: 'Does ʻOhana require prior authorization for ABA?', a: 'Yes — its prior-authorization list names 97151 through 97158, including the 97151 assessment.' },
      { q: 'Is ʻOhana Health Plan the same as WellCare?', a: 'Yes — it is WellCare’s Hawaii plan, part of Centene. Payer directories list it as "Ohana Health Plan (WellCare of Hawaii)".' },
    ],
  },

  'unitedhealthcare-community-plan-hawaii': {
    slug: 'unitedhealthcare-community-plan-hawaii',
    family: 'unitedhealthcare',
    cardDesc: 'QUEST Integration plan. ABA is managed by Optum (United Behavioral Health) since 2016 — authorizations through Provider Express or fax.',
    assessmentPA: {
      value: 'Conflicting sources — Optum’s 2022 Hawaii QUEST orientation says "Prior authorization not required for assessments," its 2022 quick reference guide says "All autism services require prior authorization," and the live Provider Express page offers assessment authorizations',
      status: 'unverified',
      cites: [OPT_HI_ORIENT, OPT_HI_QRG, OPT_HI],
      verifyVia: 'Optum Hawaii QUEST ABA team via Provider Express or 1-888-980-8728 — ask whether 97151/97152 need authorization before the assessment.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — Optum manages the ABA benefit; submit the Treatment Authorization Request through Provider Express or by fax (1-888-541-6691), with the assessment results',
      status: 'verified',
      cites: [UHCCP_PA, OPT_HI, OPT_HI_QRG],
    },
    dxRequired: {
      value: 'Yes — a documented DSM-5 ASD diagnosis, under 21, QUEST Integration coverage (Optum eligibility criteria); trial ABA for suspected ASD with qualifying diagnoses such as global developmental delay or language disorders',
      status: 'verified',
      cites: [OPT_HI_ORIENT, MQ_MEMO],
    },
    payer: 'UnitedHealthcare Community Plan of Hawaii',
    state: 'HI', kind: 'medicaid-mco', parent: MEDICAID_PARENT,
    pill: 'Payer Guide · UnitedHealthcare Community Plan · Hawaii',
    h1: 'UnitedHealthcare Community Plan of Hawaii ABA coverage (QUEST Integration).',
    metaTitle: 'UnitedHealthcare Community Plan of Hawaii (QUEST) ABA Coverage | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan of Hawaii handles the Med-QUEST ABA benefit — Optum (United Behavioral Health) manages ABA through Provider Express, treatment authorizations, the conflicting guidance on assessment PA, claims to payer ID 87726, and telehealth rules.',
    intro: [
      'UnitedHealthcare Community Plan is a QUEST Integration plan, and its ABA benefit is run by Optum, not the medical plan. Optum’s Hawaii QUEST ABA page says United Behavioral Health, operating as Optum, "assumed management of the Medicaid autism program benefits for Hawaii QUEST Integration members" from January 1, 2016. The plan’s June 2026 PA list sends ABA to Optum: "For ABA Therapy, submit by fax or Provider Express." The 2026 Hawai‘i QUEST provider manual lists Optum (providerexpress.com, payer ID 87726) for behavioral health eligibility, claims, benefits, authorization and appeals. Benefits verification and authorization go to Optum, not the medical line.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'QUEST Integration plan (UnitedHealthcare Community Plan)' },
      { label: 'Behavioral health', value: 'Optum (United Behavioral Health) manages ABA since Jan 1, 2016 — providerexpress.com' },
      { label: 'Benefit source', value: 'Med-QUEST memo QI-2431 / FFS 24-13 (IBT / ABA)' },
      { label: 'Treatment PA', value: 'Required — Provider Express portal or fax 1-888-541-6691' },
      { label: 'Assessment PA', value: 'Conflicting Optum documents — confirm before scheduling' },
      { label: 'Claims', value: 'Payer ID 87726; CMS-1500; 365-day filing' },
    ],
    sections: [
      {
        h2: 'Optum runs the ABA benefit',
        body: [
          'Both network and out-of-network providers manage ABA in the Provider Express secure portal (a One Healthcare ID is required): verify coverage, request ABA assessment and treatment authorizations, send more information, and track status. Optum’s Hawaii orientation sets eligibility as under 21, covered by QUEST Integration, with a documented DSM-5 ASD diagnosis. It allows a trial of ABA for suspected ASD (qualifying diagnoses include global developmental delay, social communication disorder and language disorders). It asks for the continuation request at least two weeks before the period ends. Medical necessity is judged against Optum’s ABA clinical criteria.',
          'On the assessment the Optum documents disagree. The 2022 orientation says "Prior authorization not required for assessments (but referral may be required from the PCP)." The 2022 quick reference guide says "All autism services require prior authorization," and the live portal page lists "Request ABA assessment and treatment authorizations." Confirm before booking 97151. Credentialing (2022): BCBAs need active BACB certification, state licensure, 6 months of supervised ABA experience and $1M/$1M liability; groups need a BCBA on staff and RBT-level technicians.',
        ],
        cites: [OPT_HI, OPT_HI_ORIENT, OPT_HI_QRG, OPT_SCC, UHCCP_PA, UHCCP_MAN],
      },
    ],
    collect: [
      { title: 'Optum benefits check', desc: 'Verify ABA eligibility in Provider Express or through the behavioral health number on the card — not the medical line.' },
      { title: 'QUEST enrollment confirmation', desc: 'Confirm QUEST Integration enrollment and that UnitedHealthcare Community Plan is the assigned plan.' },
      { title: 'ASD diagnosis and age', desc: 'Documented DSM-5 ASD, under 21. For suspected ASD, the working diagnosis for a trial period.' },
      { title: 'Assessment authorization status', desc: 'Optum’s documents conflict on 97151 — ask before the assessment.' },
    ],
    sources: [OPT_HI, OPT_HI_ORIENT, OPT_HI_QRG, OPT_SCC, UHCCP_PA, UHCCP_MAN, MQ_MEMO, MQ_TELE, CFR_438_210, CFR_433_139],
    deliveryRules: {
      supervision: {
        value: 'Optum’s ABA criteria (applied to this program) require direct case supervision of 1–2 hours for every 10 hours of direct treatment per week, consistent with CASP — the same ratio as the MQD memo, which adds direct supervision of at least 5% of BCaBA and RBT hours. Technicians work under a BCBA or licensed clinician; Optum’s Hawaii credentialing expects a BCBA to directly supervise technicians in joint sessions.',
        status: 'verified',
        cites: [OPT_SCC, MQ_MEMO, OPT_HI_ORIENT],
      },
      concurrentBilling: {
        value: 'The MQD memo allows 97153 and 97155 concurrently when both codes’ criteria are met and they carry different modifiers. Optum’s Hawaii material does not address it, and Med-QUEST’s 2024 rate-study meetings noted that plans differed on allowing concurrent RBT + BCBA billing.',
        status: 'unverified',
        cites: [MQ_MEMO, MQ_PRES],
        verifyVia: 'Optum Hawaii QUEST ABA team, 1-888-980-8728 — ask whether claims for 97153 + 97155 at the same time pay.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No published per-day or per-week cap; Optum authorizes hours against its ABA criteria per request. The MQD memo sets no cap.',
        status: 'unverified',
        cites: [OPT_SCC, MQ_MEMO],
        verifyVia: 'Optum Care Advocate at authorization.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Optum’s ABA criteria require daily progress notes with place of service, start and stop times, who delivered the service, the service type, who attended, the interventions, and the credentials of those present, plus all supervision documentation. No signature timing rule is stated.',
        status: 'verified',
        cites: [OPT_SCC],
      },
      placeOfService: {
        value: 'Settings per the MQD memo — clinic, home or community named in the treatment plan; school ABA by DOE under the IEP; nothing outside Hawaii. Optum asks how many hours a week the child is in school and wants coordination with the IEP; goals "must not be educational or academic in nature."',
        status: 'verified',
        cites: [MQ_MEMO, OPT_HI_ORIENT],
      },
      billAsProvider: {
        value: 'Optum’s 2022 Hawaii orientation: "Rendering supervisor (BCBA/BCBA-D) will bill for all services under the supervisory protocol," with the rendering provider named in field 31; payment goes to the group when contracted as a group. Claims go on the CMS-1500 to payer ID 87726, within 365 days. The MQD memo’s HO/HN/HM credential modifiers apply to Hawaii Medicaid ABA.',
        status: 'verified',
        cites: [OPT_HI_ORIENT, OPT_HI_QRG, MQ_MEMO],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 (Optum Hawaii eligibility criteria and the MQD memo). The 2026 plan manual: children "younger than 21 years of age who have an autism spectrum disorder diagnosis may receive applied behavior analysis."',
        status: 'verified',
        cites: [OPT_HI_ORIENT, UHCCP_MAN, MQ_MEMO],
      },
      dxRecency: {
        value: 'No recency window stated by Optum’s Hawaii material or the MQD memo. Optum’s ABA criteria want the DSM-5 diagnosis and severity level confirmed and documented by the diagnosing clinician.',
        status: 'verified',
        cites: [OPT_HI_ORIENT, OPT_SCC, MQ_MEMO],
      },
      diagnosingProviders: {
        value: 'MQD memo list (developmental-behavioral or developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist, other licensed ASD-expert practitioner). Optum’s criteria: a state-licensed physician, psychologist or other state-licensed clinician qualified to diagnose.',
        status: 'verified',
        cites: [MQ_MEMO, OPT_SCC],
      },
      diagnosticTools: {
        value: 'Optum’s ABA criteria require the diagnosis and severity to be confirmed "using at least one clinically validated tool" — screening tools (e.g., M-CHAT), second-level tools (CARS-2, STAT, RITA-T) or formal diagnostic tools (ADI-R, ADOS-2, DISCO). The MQD memo asks for evidence-based assessments.',
        status: 'verified',
        cites: [OPT_SCC, MQ_MEMO],
      },
      referral: {
        value: 'Optum’s 2022 orientation: for assessments, "referral may be required from the PCP." The 2026 plan manual says behavioral health referrals to Optum need no PCP referral.',
        status: 'plan-dependent',
        cites: [OPT_HI_ORIENT, UHCCP_MAN],
        verifyVia: 'Optum Hawaii QUEST ABA team, 1-888-980-8728.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Optum’s 2022 Hawaii orientation: BCBAs only (for HI QUEST) may deliver ABA supervision and caregiver training by telehealth after attesting as an Optum virtual-visits provider — bill 97155 or 97156 with place of service 02. MQD memo QI-2527 governs telehealth generally (audio-video, modifier 95/GT/GQ).',
        status: 'verified',
        cites: [OPT_HI_ORIENT, MQ_TELE],
      },
      authTurnaround: {
        value: 'The federal managed-care limit applies: 7 calendar days for standard decisions (rating periods from January 1, 2026; extendable by 14) and 72 hours expedited. Continuation requests are due at least two weeks before the approved period ends (MQD memo and Optum orientation).',
        status: 'verified',
        cites: [CFR_438_210, MQ_MEMO, OPT_HI_ORIENT],
      },
      coordinationOfBenefits: {
        value: 'Medicaid is secondary to all other insurance (MQD memo), so the plan pays after any commercial coverage. The 2026 manual says UnitedHealthcare applies coordination-of-benefits rules. Whether Optum requires its own ABA authorization when secondary is not stated. TRICARE pays after other coverage except Medicaid; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, UHCCP_MAN, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'Optum Hawaii QUEST ABA team, 1-888-980-8728 — confirm PA when secondary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Hawaii cover ABA therapy?', a: 'Yes — as a QUEST Integration plan it delivers the Med-QUEST ABA benefit for members under 21 with ASD, managed by Optum (United Behavioral Health) since 2016.' },
      { q: 'Does Optum administer ABA for this plan?', a: 'Yes. The plan’s PA list says "For ABA Therapy, submit by fax or Provider Express," and the provider manual lists Optum for behavioral health authorizations and claims (payer ID 87726).' },
      { q: 'Does the assessment need prior authorization?', a: 'Optum’s documents conflict — its 2022 orientation says no, its 2022 quick reference guide says all autism services need PA. Confirm with Optum before the assessment.' },
    ],
  },

  'kaiser-permanente-hawaii': {
    slug: 'kaiser-permanente-hawaii',
    family: 'kaiser',
    cardDesc: 'Kaiser Permanente QUEST Integration plan. Integrated model — most care in-house; outside ABA providers need an ARM authorization. ABA rules undocumented publicly.',
    assessmentPA: {
      value: 'Unverified — Kaiser’s QUEST manual routes any outside-provider service through its Authorization and Referral Management (ARM) department, but publishes no ABA-specific code list',
      status: 'unverified',
      cites: [KP_MAN, KP_AUTH],
      verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330 / 1-800-651-2237, or Authorization and Referral Management.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required for outside providers — "When services or items from an outside provider are needed, an authorization request is submitted and processed through" ARM; referrals are authorized "for specific services, including frequency and duration"',
      status: 'verified',
      cites: [KP_MAN],
    },
    dxRequired: {
      value: 'Yes — the QUEST manual describes EPSDT intensive behavioral therapy "including applied behavioral analysis (ABA) for the treatment of children with an ASD diagnosis"; the diagnosing rules come from Med-QUEST memo QI-2431',
      status: 'verified',
      cites: [KP_MAN, MQ_MEMO],
    },
    payer: 'Kaiser Permanente Hawaii (QUEST Integration)',
    state: 'HI', kind: 'medicaid-mco', parent: MEDICAID_PARENT,
    pill: 'Payer Guide · Kaiser Permanente · Hawaii',
    h1: 'Kaiser Permanente Hawaii ABA coverage (QUEST Integration).',
    metaTitle: 'Kaiser Permanente Hawaii (QUEST Integration) ABA Coverage | Carelu',
    metaDescription:
      'How Kaiser Permanente Hawaii delivers the Med-QUEST ABA benefit as a QUEST Integration plan — its integrated, mostly in-house model, authorization of outside providers through ARM, and the ABA details Kaiser does not publish.',
    intro: [
      'Kaiser Permanente is one of Hawaii’s QUEST Integration plans. It is built differently from the others: its QUEST manual says Kaiser "provides most services through its own hospital and clinics" and through Hawaii Permanente Medical Group, with contracted outside providers accounting for "only 2% of all services." For a Kaiser QUEST child, ABA is the Med-QUEST EPSDT benefit — the manual names intensive behavioral therapy "including applied behavioral analysis (ABA)" for children with ASD — but an outside ABA agency needs a Kaiser authorization through Authorization and Referral Management (ARM). Kaiser publishes no ABA-specific policy, code list or hour rules that we could find, so most plan-level fields are marked unverified.',
      'Kaiser’s commercial HMO plans in Hawaii are also under Luke’s Law through HRS § 432D-23 (under 14, $25,000 a year for ABA). This guide covers the QUEST line.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'QUEST Integration plan (integrated Kaiser Permanente model)' },
      { label: 'Benefit source', value: 'Med-QUEST memo QI-2431 / FFS 24-13 (IBT / ABA), EPSDT under 21' },
      { label: 'Outside providers', value: 'Authorized through Kaiser’s Authorization and Referral Management (ARM)' },
      { label: 'Retro authorizations', value: 'Not processed, except narrow exceptions (e.g., members transferring from another QUEST plan)' },
      { label: 'ABA specifics', value: 'No published ABA policy or code list — confirm with the QUEST office' },
    ],
    sections: [
      {
        h2: 'An integrated plan: authorization runs through ARM',
        body: [
          'Kaiser’s QUEST manual: when services from an outside provider are needed, "an authorization request is submitted and processed through Kaiser Permanente’s Authorization and Referral Management Department (ARM)," and the Kaiser Physician-in-Charge makes the final review of out-of-plan requests, "including Behavioral Health." Referrals are authorized "for specific services, including frequency and duration of treatment," and anything beyond needs a new authorization. PA "must be obtained before service is rendered," and "No retroactive requests will be processed," except for newborns, state retroactive enrollments, certain discharges, and "when members transition to Kaiser from another QUEST health plan" — which matters for ʻOhana families moving on January 1, 2027.',
          'The benefit follows Med-QUEST’s memo: under 21, the memo’s diagnosing providers, a treatment plan with standardized goal measurement, 26-week periods, supervision at 1–2 hours per 10 RBT hours, Medicaid secondary to other coverage. The memo lists Kaiser’s Health Coordination line as (808) 432-5330.',
        ],
        cites: [KP_MAN, MQ_MEMO, KP_QI],
      },
    ],
    collect: [
      { title: 'Kaiser QUEST member ID', desc: 'Confirm QUEST Integration enrollment with Kaiser.' },
      { title: 'Kaiser referral / ARM authorization', desc: 'An outside ABA agency needs an authorization for specific services, frequency and duration before starting — no retro authorizations.' },
      { title: 'ASD diagnosis and age', desc: 'Under 21, diagnosed by one of the Med-QUEST memo’s provider types (often inside Kaiser).' },
      { title: 'Transferring from ʻOhana?', desc: 'Members moving from another QUEST plan are an exception to Kaiser’s no-retro rule; transition-of-care rules apply.' },
    ],
    sources: [KP_MAN, KP_QI, KP_AUTH, MQ_MEMO, MQ_TELE, CFR_438_210, CFR_433_139, HRS_133, SB791],
    deliveryRules: {
      supervision: {
        value: 'No Kaiser-specific rule published; the MQD memo sets it: 1–2 hours of case supervision per 10 RBT hours, at least one direct, direct supervision at least 5% of BCaBA and RBT hours.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330, or the Kaiser contracted-provider agreement.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'The MQD memo allows 97153 and 97155 concurrently when both codes’ criteria are met and they carry different modifiers. No Kaiser billing rule published.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser claims / Community Medical Services (808) 432-7529.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Kaiser authorizes specific services with frequency and duration; no published ABA unit cap. The MQD memo sets no cap.',
        status: 'unverified',
        cites: [KP_MAN, MQ_MEMO],
        verifyVia: 'The ARM authorization itself.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published by Kaiser or the MQD memo.',
        status: 'unverified',
        cites: [KP_MAN],
        verifyVia: 'Kaiser contracted-provider agreement or Community Medical Services (808) 432-7529.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Per the MQD memo: clinic, home or community named in the treatment plan; school ABA by DOE under the IEP; nothing outside Hawaii. No Kaiser-specific rule published.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Per the MQD memo: payment to the licensed practitioner or employing agency, with HO/HN/HM modifiers. Kaiser’s own contracted-provider billing rules were not found.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser claims / Community Medical Services (808) 432-7529.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — EPSDT; Kaiser’s manual describes the ABA benefit for children with ASD, and the MQD memo sets the under-21 limit.',
        status: 'verified',
        cites: [KP_MAN, MQ_MEMO],
      },
      dxRecency: {
        value: 'No recency window in the MQD memo; no Kaiser rule found.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'MQD memo list: developmental-behavioral or developmental pediatrician, neurologist, pediatrician, psychiatrist, psychologist, or other licensed practitioner with ASD expertise. No Kaiser variation published.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'MQD memo: "evidence-based assessments," no instrument named. No Kaiser requirement published.',
        status: 'unverified',
        cites: [MQ_MEMO],
        verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Yes for outside providers: external referrals are "generated in Kaiser’s electronic medical record" for ARM to review, and the authorization names the services, frequency and duration.',
        status: 'verified',
        cites: [KP_MAN],
      },
      telehealth: {
        value: 'MQD memo QI-2527 applies (audio-video, modifier 95/GT/GQ); it lists Kaiser’s community-provider portal as the contact for plan rules. No Kaiser ABA telehealth rule found.',
        status: 'unverified',
        cites: [MQ_TELE],
        verifyVia: 'Kaiser customer service / MCSA department 800-966-5955.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The federal managed-care limit applies: 7 calendar days standard (rating periods from January 1, 2026; extendable by 14) and 72 hours expedited. Kaiser’s manual says each authorization step is tracked against "the allowable timeframes as described in the QUEST contract." No retro authorizations except narrow exceptions.',
        status: 'verified',
        cites: [CFR_438_210, KP_MAN],
      },
      coordinationOfBenefits: {
        value: 'Medicaid is secondary to all other insurance (MQD memo). Kaiser’s manual does not set out ABA-specific COB. TRICARE pays after other coverage except Medicaid; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'Kaiser Permanente QUEST office (808) 432-5330.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Kaiser Permanente Hawaii QUEST cover ABA?', a: 'Yes — its QUEST manual describes EPSDT intensive behavioral therapy, including ABA, for children with an ASD diagnosis, under the Med-QUEST benefit for members under 21.' },
      { q: 'Can an outside ABA agency treat a Kaiser QUEST child?', a: 'Only with a Kaiser authorization through Authorization and Referral Management, naming the services, frequency and duration. Kaiser does not process retro authorizations except in narrow cases, including members transferring from another QUEST plan.' },
    ],
  },

  'aetna-hawaii': {
    slug: 'aetna-hawaii',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + Hawaii’s Luke’s Law (under 14, $25K/yr ABA).',
    assessmentPA: {
      value: 'Required — precertification per Aetna’s behavioral health precertification list (eff. 8/1/2024), which names 97151 and 97152 among the ABA codes; CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [AET_PRECERT, AET_0554],
    },
    treatmentPA: {
      value: 'Required — all ABA codes (97151–97158, 0362T, 0373T) on the precertification list; progress re-evaluated every six months',
      status: 'verified',
      cites: [AET_PRECERT, AET_GUIDE],
    },
    dxRequired: {
      value: 'Yes — DSM-5 ASD (F84.0, F84.3–F84.9); ABA for non-ASD indications is experimental',
      status: 'verified',
      cites: [AET_GUIDE, AET_0554],
    },
    payer: 'Aetna in Hawaii',
    state: 'HI', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Hawaii',
    h1: 'Aetna ABA coverage in Hawaii: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Hawaii: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Hawaii families — the national clinical policy, precertification on every ABA code, Luke’s Law (under 14, $25,000/yr ABA cap, exemptions), Hawaii behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For a Hawaii intake team, an Aetna card means three layers: Aetna’s national ABA policy, Hawaii’s autism mandate (Luke’s Law, HRS § 431:10A-133), and the plan’s funding type, which decides whether the mandate applies. Aetna runs no QUEST plan in Hawaii, and we found no Hawaii-specific Aetna ABA policy — the national documents plus the state law are the whole picture.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Aetna’s national policy' },
      ...HI_MANDATE_GLANCE,
    ],
    sections: [
      {
        h2: 'The national policy, applied in Hawaii',
        body: [
          'Aetna covers ABA for autism spectrum disorder under CPB 0554 (with CPB 0648 for ASD) and its ABA medical necessity guide, and considers ABA "experimental, investigational, or unproven" for Down syndrome without ASD and for all other non-ASD indications. The guide requires a DSM-5 ASD diagnosis by an appropriate provider, functional impairment on a standardized scale within the past 12 months, and a treatment plan with defined targets, baselines, generalization and titration. Progress is evaluated every six months. The behavioral health precertification list names all ten ABA codes.',
        ],
        cites: [AET_0554, AET_0648, AET_GUIDE, AET_PRECERT],
      },
      HI_MANDATE_SECTION,
      HI_LICENSURE_SECTION,
      {
        h2: 'Rates',
        body: [
          'Aetna does not publish commercial ABA fee schedules for Hawaii; rates are set in your participating-provider agreement. Med-QUEST’s published FFS ABA rates (97153 at $17.66 per 15 minutes for 2025) are a public reference point, not a commercial floor.',
        ],
        cites: [MQ_MEMO],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Luke’s Law applies) or self-funded employer plan (exempt). Get the employer and group number.' },
      { title: 'Child’s age', desc: 'Luke’s Law covers children under 14, with ABA capped at $25,000 a year for ages 13 and under. Older children depend on the plan.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, who made it, and date — Aetna covers ABA for ASD only.' },
      { title: 'Recent standardized functioning measure', desc: 'Aetna wants impairment on a standardized scale (Vineland-3, ABAS, VB-MAPP or ABLLS) within the past 12 months.' },
      { title: 'Treatment order', desc: 'Luke’s Law covers treatment prescribed or ordered by a physician, psychiatrist, psychologist, LCSW or registered nurse practitioner.' },
    ],
    sources: [AET_0554, AET_0648, AET_GUIDE, AET_PRECERT, AET_BHMAN, HRS_133, SB791, HRS_465D7, HRS_465D8, CFR_2560, CFR_147_136, HRS_432E5],
    deliveryRules: {
      supervision: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where ABA is in scope, unless state mandates, plan documents or contracts say otherwise; where others deliver services, "there must be supervision and direction" in line with practice standards. Aetna publishes no numeric ratio. In Hawaii, RBTs and BCaBAs may practice only under a licensed behavior analyst’s direction (HRS § 465D-7).',
        status: 'verified',
        cites: [AET_GUIDE, HRS_465D7],
      },
      concurrentBilling: {
        value: 'Not addressed in CPB 0554, CPB 0648 or the ABA medical necessity guide.',
        status: 'unverified',
        cites: [AET_0554, AET_GUIDE],
        verifyVia: 'Aetna provider services or your participating-provider agreement.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day or per-week unit cap. The guide gives typical intensities — comprehensive ABA 10–25 hours a week, focused ABA 1–20 hours a week — as typical, not limits. On fully insured Hawaii plans Luke’s Law caps ABA at $25,000 a year for children 13 and under.',
        status: 'verified',
        cites: [AET_GUIDE, HRS_133],
      },
      noteSignature: {
        value: 'Not addressed — Aetna’s ABA documents set treatment-plan content, not session-note signature rules.',
        status: 'unverified',
        cites: [AET_GUIDE, AET_BHMAN],
        verifyVia: 'The participating-provider agreement and the Aetna Behavioral Health Provider Manual documentation section.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Outpatient ABA is setting-agnostic in Aetna’s guide, which expects coordination with the school district as applicable. Luke’s Law excludes "services provided outside of the State" and does not reduce IEP or IFSP obligations.',
        status: 'verified',
        cites: [AET_GUIDE, HRS_133],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by the appropriately licensed provider" — licensed behavior analysts in licensure states, BCBAs, or licensed psychologists in scope. Hawaii licenses behavior analysts (HRS ch. 465D), and Luke’s Law covers treatment only from a provider "licensed by a state licensure board."',
        status: 'verified',
        cites: [AET_GUIDE, HRS_465D8, HRS_133],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s policies set no age cap. Luke’s Law requires coverage only for "individuals under fourteen years of age" on fully insured plans; beyond 13, coverage depends on the plan. Self-funded plans are outside the statute.',
        status: 'plan-dependent',
        cites: [AET_GUIDE, HRS_133],
        verifyVia: 'Benefits verification on the member ID — funding type, then the plan’s own ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but functional impairment must be shown on a standardized scale "in the past 12 months," and progress is re-evaluated every six months. Luke’s Law lets a carrier ask for a repeat evaluation when a new DSM edition is published.',
        status: 'verified',
        cites: [AET_GUIDE, HRS_133],
      },
      diagnosingProviders: {
        value: 'DSM-5 ASD "obtained by an appropriate provider (i.e. licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice)." CPB 0648 lists professionals appropriate for ASD evaluation, from developmental pediatricians and neurologists to psychologists and SLPs.',
        status: 'verified',
        cites: [AET_GUIDE, AET_0648],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale for the diagnosis; the ABA guide requires a standardized functioning measure (Vineland-3, ABAS, VB-MAPP or ABLLS) within 12 months showing impairment at least one standard deviation below the mean, or significant risk of harm.',
        status: 'verified',
        cites: [AET_0648, AET_GUIDE],
      },
      referral: {
        value: 'Aetna’s national policies need no physician referral; they need precertification on all ABA codes. For fully insured Hawaii plans, Luke’s Law covers treatment "prescribed or ordered" by a licensed physician, psychiatrist, psychologist, LCSW or registered nurse practitioner, and each request must include a treatment plan.',
        status: 'verified',
        cites: [AET_PRECERT, AET_GUIDE, HRS_133],
      },
      telehealth: {
        value: 'Not addressed in Aetna’s ABA policies.',
        status: 'unverified',
        cites: [AET_0554, AET_GUIDE],
        verifyVia: 'Availity or the precertification number on the ID card — ask which ABA codes are payable via telehealth and with which POS/modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Depends on funding. Group plans (fully insured through 45 CFR 147.136, self-funded directly) follow 29 CFR 2560.503-1: pre-service decisions "not later than 15 days," one 15-day extension, urgent within 72 hours. We found no Hawaii statute setting a shorter initial-decision deadline for fully insured plans; HRS § 432E-5 sets internal appeals at 72 hours expedited and 60 days.',
        status: 'plan-dependent',
        cites: [CFR_2560, CFR_147_136, HRS_432E5],
        verifyVia: 'Ask Aetna at benefits verification for its precertification turnaround and continuation lead time for this plan.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Order is set by the plans’ COB provisions; we found no Hawaii rule fixing it, so ask Aetna which plan is primary (and whether the birthday rule applies). If the child also has QUEST, Aetna pays first and Medicaid last — get Aetna precertification even so. TRICARE pays after this plan; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'Aetna benefits verification — record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Hawaii?', a: 'Yes — for ASD under Aetna’s national policy, with precertification on every ABA code. Fully insured Hawaii plans also carry Luke’s Law: coverage for children under 14, with ABA capped at $25,000 a year for ages 13 and under.' },
      { q: 'What does Hawaii’s autism mandate require?', a: 'Luke’s Law (HRS § 431:10A-133) requires state-regulated plans to cover autism diagnosis and treatment for individuals under 14, with ABA subject to a $25,000 annual maximum for children 13 and under. Self-funded employer plans are exempt.' },
      { q: 'What does Aetna pay for ABA in Hawaii?', a: 'Commercial rates are negotiated in your provider agreement and not published.' },
    ],
  },

  'cigna-hawaii': {
    slug: 'cigna-hawaii',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Hawaii’s Luke’s Law (under 14, $25K/yr ABA).',
    assessmentPA: {
      value: 'Not required for 97151, 97152 and 0362T with an autism diagnosis, when the provider is independently licensed or a BCBA and the policy covers ABA (Cigna autism resource guide)',
      status: 'verified',
      cites: [CIG_ARG],
    },
    treatmentPA: {
      value: 'Required — after the assessment and treatment plan, submit the Applied Behavior Analysis Prior Authorization Form; Cigna suggests requesting up to 30 days before or two weeks after the start date',
      status: 'verified',
      cites: [CIG_ARG, CIG_EN0499],
    },
    dxRequired: {
      value: 'Yes — confirmed ASD (F84.0–F84.9, excluding F84.2 Rett syndrome) per DSM-5-TR, with the diagnoser’s name, credentials, licensure and the date of the most recent diagnosis',
      status: 'verified',
      cites: [CIG_EN0499],
    },
    payer: 'Cigna / Evernorth in Hawaii',
    state: 'HI', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Hawaii',
    h1: 'Cigna / Evernorth ABA coverage in Hawaii: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Hawaii: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Hawaii families — EN0499 criteria, no prior authorization on assessment codes, prior authorization for treatment, telehealth for all ABA codes, Luke’s Law (under 14, $25,000/yr ABA cap), and Hawaii licensure.',
    intro: [
      'A Cigna card in Hawaii means Evernorth’s national ABA policy (EN0499, effective May 15, 2026), Cigna’s autism resource guide for billing and authorization, and Hawaii’s Luke’s Law for fully insured plans. We found no Hawaii-specific Cigna ABA policy. Cigna’s assessment rule helps intake: with an autism diagnosis, the assessment codes need no prior authorization.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD (excluding Rett syndrome), per EN0499' },
      ...HI_MANDATE_GLANCE,
    ],
    sections: [
      {
        h2: 'The national policy, applied in Hawaii',
        body: [
          'EN0499 covers an ABA assessment and treatment for a confirmed ASD diagnosis (F84.0–F84.9, except F84.2 Rett syndrome) made under DSM-5-TR by a professional licensed to practice independently with diagnosis in scope. It requires the diagnoser’s name, credentials and licensure and "the date on which the diagnosis was most recently made." The assessment must be done by a BCBA, licensed behavior analyst, or independently licensed mental health clinician trained in ABA, using a standardized instrument completed in full. Case supervision must match the standard of "one to two hours per ten hours of direct treatment," with at least one to two hours a week when direct treatment is 10 hours or less. Continued treatment needs a standardized assessment completed no more than a year before the continuation start date.',
          'The resource guide (March 2025): no PA for 97151, 97152 or 0362T with an autism diagnosis, when the provider is independently licensed or a BCBA; treatment needs the ABA PA form; all ABA codes are covered by telehealth; only one provider may bill a unit of time except 97153, 97154 and 97155 during direct supervision; and Evernorth does not credential unlicensed or uncertified staff, whose services are billed under the supervising provider.',
        ],
        cites: [CIG_EN0499, CIG_ARG],
      },
      HI_MANDATE_SECTION,
      HI_LICENSURE_SECTION,
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (Luke’s Law applies) or self-funded employer plan (exempt).' },
      { title: 'Child’s age', desc: 'Luke’s Law covers children under 14, with ABA capped at $25,000 a year for ages 13 and under.' },
      { title: 'Diagnosis details', desc: 'Name, credentials and licensure of the diagnoser and the date of the most recent diagnosis — EN0499 asks for all of them. Rett syndrome (F84.2) is excluded.' },
      { title: 'Treatment order', desc: 'Luke’s Law covers treatment prescribed or ordered by a physician, psychiatrist, psychologist, LCSW or registered nurse practitioner.' },
    ],
    sources: [CIG_EN0499, CIG_ARG, HRS_133, SB791, HRS_465D7, HRS_465D8, CFR_2560, CFR_147_136, HRS_432E5],
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, LBA or independently licensed mental health professional trained in ABA, consistent with "one to two hours per ten hours of direct treatment"; at least one to two hours a week of direct case supervision when direct treatment is 10 hours a week or less; the supervisor’s name and credentials documented.',
        status: 'verified',
        cites: [CIG_EN0499],
      },
      concurrentBilling: {
        value: 'Only one provider may bill for a unit of time, "with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)."',
        status: 'verified',
        cites: [CIG_ARG],
      },
      dailyLimits: {
        value: 'No per-day unit cap in EN0499 or the resource guide; hours are authorized on medical necessity. On fully insured Hawaii plans Luke’s Law caps ABA at $25,000 a year for children 13 and under.',
        status: 'verified',
        cites: [CIG_EN0499, HRS_133],
      },
      noteSignature: {
        value: 'EN0499 requires documentation of the specific service delivered and the supervisor’s name and credentials, but sets no session-note signature rule.',
        status: 'unverified',
        cites: [CIG_EN0499],
        verifyVia: 'Evernorth Provider Services 800-926-2273 or the provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'EN0499 expects treatment across the settings where behaviors occur (including academic settings and telehealth); all ABA codes are covered by telehealth. Luke’s Law excludes "services provided outside of the State."',
        status: 'verified',
        cites: [CIG_EN0499, CIG_ARG, HRS_133],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider." Bill only 97151–97158, 0362T and 0373T. In Hawaii the supervising analyst needs an HRS ch. 465D license, and Luke’s Law covers treatment only from a state-licensed provider.',
        status: 'verified',
        cites: [CIG_ARG, HRS_465D8, HRS_133],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age cap. Luke’s Law requires coverage only for children under 14 on fully insured plans; beyond 13 it depends on the plan, and self-funded plans are outside the statute.',
        status: 'plan-dependent',
        cites: [CIG_EN0499, HRS_133],
        verifyVia: 'Benefits verification — funding type and the plan’s ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry, but Cigna wants "the date on which the diagnosis was most recently made," and continued treatment needs a standardized assessment completed no more than one year before the continuation start date.',
        status: 'verified',
        cites: [CIG_EN0499],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice."',
        status: 'verified',
        cites: [CIG_EN0499],
      },
      diagnosticTools: {
        value: 'No diagnostic instrument named; the ABA assessment must use a reliable, valid, standardized instrument covering the DSM-5-TR ASD domains, completed in full, with standardized scores provided.',
        status: 'verified',
        cites: [CIG_EN0499],
      },
      referral: {
        value: 'Cigna’s policies need no referral; they need prior authorization for treatment. Luke’s Law covers treatment "prescribed or ordered" by a licensed physician, psychiatrist, psychologist, LCSW or registered nurse practitioner, with a treatment plan on each request.',
        status: 'verified',
        cites: [CIG_ARG, HRS_133],
      },
      telehealth: {
        value: '"All ABA CPT codes are covered telehealth services" (Cigna autism resource guide); EN0499 allows in-person, telehealth or hybrid delivery.',
        status: 'verified',
        cites: [CIG_ARG, CIG_EN0499],
      },
      authTurnaround: {
        value: 'Group plans follow 29 CFR 2560.503-1 (directly or through 45 CFR 147.136): pre-service decisions "not later than 15 days," one 15-day extension, urgent within 72 hours. Cigna warns that a late request may go to retrospective review and delay the decision "for up to 30 days." We found no shorter Hawaii initial-decision statute; HRS § 432E-5 sets internal appeals at 72 hours expedited and 60 days.',
        status: 'plan-dependent',
        cites: [CFR_2560, CFR_147_136, CIG_ARG, HRS_432E5],
        verifyVia: 'Cigna Autism Care Coordinator team 877-279-7603.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Order is set by the plans’ COB provisions; ask Cigna which plan is primary. If the child also has QUEST, Cigna pays first and Medicaid last. TRICARE pays after this plan; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'Cigna benefits verification — record every other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Hawaii?', a: 'Yes — for ASD (excluding Rett syndrome) under EN0499. Fully insured Hawaii plans also carry Luke’s Law: coverage for children under 14, ABA capped at $25,000 a year for ages 13 and under.' },
      { q: 'Does Cigna require prior authorization for the ABA assessment?', a: 'No — 97151, 97152 and 0362T need no prior authorization with an autism diagnosis, when the provider is independently licensed or a BCBA. Treatment does.' },
      { q: 'Does Cigna pay for ABA by telehealth?', a: 'Cigna’s autism resource guide says all ABA CPT codes are covered telehealth services.' },
    ],
  },

  'unitedhealthcare-hawaii': {
    slug: 'unitedhealthcare-hawaii',
    family: 'unitedhealthcare',
    cardDesc: 'UnitedHealthcare commercial in Hawaii — Optum behavioral health, Optum ABA criteria, and Luke’s Law (under 14, $25K/yr ABA).',
    assessmentPA: {
      value: 'Plan-dependent — Optum’s ABA criteria state "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)"; whether the assessment codes are included varies by plan',
      status: 'plan-dependent',
      cites: [OPT_SCC],
      verifyVia: 'Optum via providerexpress.com or the behavioral health number on the member card — ask about 97151/97152.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — "Prior authorization is required for ABA (unless otherwise specified or mandated by contract or law)" (Optum ABA clinical criteria)',
      status: 'verified',
      cites: [OPT_SCC],
    },
    dxRequired: {
      value: 'Yes — ASD (or another diagnosis required by governing law) issued by a state-licensed physician, psychologist or other qualified licensed clinician under DSM-5-TR, confirmed with at least one clinically validated tool',
      status: 'verified',
      cites: [OPT_SCC],
    },
    payer: 'UnitedHealthcare / Optum in Hawaii',
    state: 'HI', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Hawaii',
    h1: 'UnitedHealthcare ABA coverage in Hawaii (commercial).',
    metaTitle: 'UnitedHealthcare / Optum Commercial ABA Coverage in Hawaii | Carelu',
    metaDescription:
      'How UnitedHealthcare commercial plans handle ABA in Hawaii — Optum’s ABA clinical criteria, prior authorization, diagnostic-tool and supervision rules, Luke’s Law (under 14, $25,000/yr ABA cap), and why self-funded plans may sit outside it.',
    intro: [
      'UnitedHealthcare’s commercial ABA coverage in Hawaii runs on Optum: behavioral health is administered by Optum, and medical necessity is judged against Optum’s ABA clinical criteria (reviewed August 2025, interim review April 2026). We found no Hawaii-specific UnitedHealthcare commercial ABA policy; Optum’s Hawaii ABA page covers the QUEST (Medicaid) program, not commercial plans. The Hawaii layer is Luke’s Law for fully insured plans. Self-funded employer plans are governed by their plan documents, so check funding first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per Optum’s ABA clinical criteria (behavioral health via Optum)' },
      ...HI_MANDATE_GLANCE,
    ],
    sections: [
      {
        h2: 'Optum’s criteria, Hawaii’s mandate',
        body: [
          'Optum’s ABA criteria require a valid ASD diagnosis "issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis" under DSM-5-TR, with diagnosis and severity confirmed by at least one clinically validated tool (screening tools such as M-CHAT, second-level tools such as CARS-2, or formal tools such as ADI-R and ADOS-2). Treatment is delivered by a BCBA or credentialed licensed clinician, with technicians — preferably RBTs — under supervision. Direct case supervision is "1–2 hours for every 10 hours of direct treatment per week." Daily notes must record place of service, start and stop times, who delivered and who attended, interventions and credentials. Optum says it does not recommend parents serving as RBTs for their own child.',
          'The first question is funding: a self-funded employer plan administered by UnitedHealthcare follows its plan document, and Luke’s Law does not reach it. For fully insured plans, the mandate below applies.',
        ],
        cites: [OPT_SCC],
      },
      HI_MANDATE_SECTION,
      HI_LICENSURE_SECTION,
    ],
    collect: [
      { title: 'Fully insured or self-funded', desc: 'Decides whether Luke’s Law applies at all.' },
      { title: 'Group number and employer name', desc: 'Needed to establish funding type and verify ABA benefits through Optum.' },
      { title: 'Diagnosis with a validated tool', desc: 'Optum wants the DSM-5 diagnosis and severity confirmed with at least one clinically validated tool.' },
      { title: 'Child’s age', desc: 'Luke’s Law covers children under 14, with ABA capped at $25,000 a year for ages 13 and under.' },
    ],
    sources: [OPT_SCC, HRS_133, SB791, HRS_465D7, HRS_465D8, CFR_2560, CFR_147_136, HRS_432E5],
    deliveryRules: {
      supervision: {
        value: '"Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week." Technicians must be under a BCBA or licensed behavioral health clinician; in Hawaii, RBTs and BCaBAs practice only under a licensed behavior analyst’s direction (HRS § 465D-7).',
        status: 'verified',
        cites: [OPT_SCC, HRS_465D7],
      },
      concurrentBilling: {
        value: 'Not addressed in Optum’s ABA clinical criteria.',
        status: 'unverified',
        cites: [OPT_SCC],
        verifyVia: 'UnitedHealthcare / Optum reimbursement policy for the plan, or Optum provider services.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day unit cap in Optum’s criteria; hours are set by medical necessity and may go up or down with response to treatment. On fully insured Hawaii plans Luke’s Law caps ABA at $25,000 a year for children 13 and under.',
        status: 'verified',
        cites: [OPT_SCC, HRS_133],
      },
      noteSignature: {
        value: 'Daily progress notes must include place of service, start and stop time, who rendered the service, the service type, who attended, interventions, and the licensure or credentials of those present; supervision documentation is required. No signature timing rule stated.',
        status: 'verified',
        cites: [OPT_SCC],
      },
      placeOfService: {
        value: 'Optum’s criteria allow clinic, home, school and telehealth delivery (citing CASP telehealth guidance) at the least restrictive appropriate level, with IEP coordination. Luke’s Law excludes "services provided outside of the State."',
        status: 'verified',
        cites: [OPT_SCC, HRS_133],
      },
      billAsProvider: {
        value: 'Care is delivered by a BCBA or a credentialed licensed clinician, with BCaBAs and technicians under their supervision. In Hawaii the supervising analyst needs an HRS ch. 465D license, and Luke’s Law covers treatment only from a state-licensed provider. Plan-specific billing-provider rules are in the reimbursement policy.',
        status: 'verified',
        cites: [OPT_SCC, HRS_465D8, HRS_133],
      },
    },
    intakeGates: {
      ageLimit: {
        value: 'Optum’s criteria set no age cap. Luke’s Law requires coverage only for children under 14 on fully insured plans; beyond 13 it depends on the plan, and self-funded plans are outside the statute.',
        status: 'plan-dependent',
        cites: [OPT_SCC, HRS_133],
        verifyVia: 'Optum benefits verification — funding type and the plan’s ABA age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry stated; continued coverage needs current progress data and documentation through each authorization period. Luke’s Law lets a carrier ask for a repeat evaluation when a new DSM edition is published.',
        status: 'verified',
        cites: [OPT_SCC, HRS_133],
      },
      diagnosingProviders: {
        value: 'A "state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis."',
        status: 'verified',
        cites: [OPT_SCC],
      },
      diagnosticTools: {
        value: 'At least one clinically validated tool confirming diagnosis and severity — screening (ABC, M-CHAT, CSBS-DP-IT, ASQ, AQ, CAST), second-level (CARS-2, RITA-T, STAT) or formal diagnostic (ADI-R, ADOS-2, DISCO).',
        status: 'verified',
        cites: [OPT_SCC],
      },
      referral: {
        value: 'Optum requires prior authorization, not a referral. Luke’s Law covers treatment "prescribed or ordered" by a licensed physician, psychiatrist, psychologist, LCSW or registered nurse practitioner, with a treatment plan on each request.',
        status: 'verified',
        cites: [OPT_SCC, HRS_133],
      },
      telehealth: {
        value: 'Optum’s criteria point to the CASP telehealth practice parameters and treat telehealth as a supplement to in-person care; which ABA codes pay via telehealth depends on the plan.',
        status: 'plan-dependent',
        cites: [OPT_SCC],
        verifyVia: 'Optum provider services / the plan’s telehealth reimbursement policy.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Group plans follow 29 CFR 2560.503-1 (directly or through 45 CFR 147.136): pre-service decisions "not later than 15 days," one 15-day extension, urgent within 72 hours. We found no shorter Hawaii initial-decision statute; HRS § 432E-5 sets internal appeals at 72 hours expedited and 60 days.',
        status: 'plan-dependent',
        cites: [CFR_2560, CFR_147_136, HRS_432E5],
        verifyVia: 'Optum at authorization — confirm turnaround and continuation lead time for the plan.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Order is set by the plans’ COB provisions; ask which plan is primary. If the child also has QUEST, UnitedHealthcare pays first and Medicaid last. TRICARE pays after this plan; CHAMPVA pays last.',
        status: 'plan-dependent',
        cites: [MQ_MEMO, CFR_433_139, USC_1079, CFR_17_270],
        verifyVia: 'Optum benefits verification — record every other coverage.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA in Hawaii?', a: 'Yes, under Optum’s ABA clinical criteria, with behavioral health administered by Optum. Fully insured plans also carry Luke’s Law: coverage for children under 14, ABA capped at $25,000 a year for ages 13 and under.' },
      { q: 'Does Luke’s Law apply to every UnitedHealthcare plan?', a: 'No. Self-funded employer plans follow their plan documents, not state insurance mandates, so check funding type first.' },
    ],
  },
};

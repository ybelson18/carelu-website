import type { PayerConfig } from './types.js';

export const virginiaPayers: Record<string, PayerConfig> = {
  'virginia-medicaid': {
    slug: 'virginia-medicaid',
    cardDesc: 'EPSDT under 21; NO auth on assessment codes, per-code unit SAs, licensure-tiered rates.',
    assessmentPA: {
      value: 'Not required — assessment codes 97151, 97152, 0362T need no service authorization',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — all treatment hours; units itemized per CPT code (eff. 10/15/2025)',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
      ],
    },
    dxRequired: {
      value: 'NO \u2014 not autism-restricted, and not category-restricted either. DMAS Appendix D admits a youth under 21 who meets criteria for a primary ICD diagnosis correlating to a DSM diagnosis, OR who has a provisional psychiatric diagnosis developed by an LMHP when no definitive diagnosis has been made, plus at least two functional-impairment criteria. The ABA criteria name no diagnostic category list and never mention autism',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA), Admission Criteria p.24', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    payer: 'Virginia Medicaid (DMAS)',
    state: 'VA', kind: 'state-medicaid',
    pill: 'Payer Guide · Virginia Medicaid',
    h1: 'Virginia Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Virginia Medicaid (DMAS) ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Virginia Medicaid (DMAS) covers ABA under EPSDT — no service authorization on assessment codes, per-code unit requests since October 2025, licensure-tiered fee-schedule rates, Acentra Health authorization, and the Cardinal Care MCO landscape.',
    intro: [
      'Virginia Medicaid, administered by DMAS, covers ABA for children under 21 through the EPSDT benefit — historically labeled "Behavioral Therapy" and now documented as ABA in the Mental Health Services manual\'s Appendix D. The structure is one of the more intake-friendly in our directory: assessment codes need no service authorization at all, so with an ASD diagnosis in hand you can book the assessment immediately. The rigor arrives at the treatment authorization, which since October 2025 must itemize units per CPT code. All five Cardinal Care MCOs run on the identical DMAS criteria and standardized forms — their guides below cover the per-plan mechanics.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21, via EPSDT (no hard hour cap)' },
      { label: 'Assessment auth', value: 'NONE — 97151, 97152, 0362T need no service authorization' },
      { label: 'Treatment auth', value: 'Required — units per CPT code (eff. 10/15/2025, new DMAS form)' },
      { label: '20-hr threshold', value: 'Requests ≥20 hrs/week need an individualized activity schedule' },
      { label: 'Rates (per 15 min)', value: '97153: $15.00 tech · $23.48 LABA · $46.63 LBA (licensure tiers)' },
      { label: 'FFS auth vendor', value: 'Acentra Health — access via DMAS MES portal SSO (“FFS Service Authorization” tile) since 6/1/2026; MCOs run their own UM' },
      { label: 'PA turnaround (CMS rule)', value: 'Since 1/1/2026: 72 hrs expedited / 7 days standard (extendable to 14) — FFS + all Cardinal Care MCOs' },
      { label: 'Staff screening', value: 'RBT NOT required — unlicensed techs under LBA/LABA supervision (18VAC85-150)' },
    ],
    sections: [
      {
        h2: 'The intake-friendly part: no authorization on assessments',
        body: [
          'DMAS requires no service authorization for the assessment codes — 97151, 97152, and 0362T — a fact confirmed both in the Mental Health Services manual\'s Appendix D and in the fee file\'s own PA flags. For intake, that means the sequence can be: verify eligibility → book the assessment immediately → build the treatment request from the assessment. One post-pandemic constraint: initial assessments must be conducted in person.',
        ],
        cites: [
          { title: 'DMAS — MHS manual Appendix D (rev. 7/2025)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      {
        h2: 'Treatment authorization',
        body: [
          'All treatment hours require service authorization with a predetermined number of units for each treatment procedure code. Effective for dates of service October 15, 2025 and later, requests — fee-for-service and every Cardinal Care MCO alike — must itemize units per ABA CPT code on the new DMAS standardized preservice form (no more bundling under 97155), so intake and clinical planning need to align on requested intensity code by code. Requests at or above 20 hours/week (80 units) must include an individualized schedule of activities, and continued-stay requests need an updated ISP plus graphical progress data. There is no hard hour cap — EPSDT medical necessity governs. Fee-for-service authorizations still run on Acentra Health\'s Atrezzo Next Generation (ANG) system, but the access path changed: DMAS added an "FFS Service Authorization" tile inside its Medicaid Enterprise System (MES) provider portal effective April 27, 2026, direct login to Atrezzo continued only through May 31, 2026, and effective June 1, 2026 every provider must reach FFS service authorizations through MES single sign-on and that tile rather than a direct Atrezzo/Kepro login (portal.kepro.com/Login/Login is retired for this purpose). DMAS\'s bulletin describes the access mechanism for FFS service authorizations generally rather than naming behavioral health/ABA specifically, but the change applies across all FFS service types, ABA included. MCO members continue to follow their plan\'s own process.',
        ],
        cites: [
          { title: 'DMAS bulletin — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
          { title: 'DMAS — MHS manual Appendix D (rev. 7/2025)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS bulletin — new single sign-on requirement for FFS service authorization requests on the Acentra ANG platform (accessed 9/1/2026)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/new-single-sign-requirement-ffs-service-authorization-requests-acentra-ang-platform' },
        ],
      },
      {
        h2: 'New: hard CMS prior-authorization turnaround deadlines (eff. 1/1/2026)',
        body: [
          'Effective January 1, 2026, the CMS Interoperability and Prior Authorization Final Rule imposes hard decision deadlines on prior-authorization requests — covering behavioral health/ABA — for DMAS FFS and every Cardinal Care MCO alike: 72 hours for expedited requests, and 7 calendar days for standard requests. The 7-day standard clock can extend to 14 days only if the member or provider requests the extension, or if DMAS/the MCO needs additional evidence and the extension is in the member\'s interest. Build these deadlines into your follow-up cadence — a standard ABA treatment-authorization request sitting past 7 days with no extension notice is worth escalating rather than assuming it\'s normal.',
        ],
        cites: [
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update (accessed 9/1/2026)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
        ],
      },
      {
        h2: 'Rates: tiered by licensure, not setting',
        body: [
          'Virginia\'s fee schedule pays by practitioner licensure tier, flagged with modifiers: no modifier = technician, HN = Licensed Assistant Behavior Analyst (LABA), TF = LMHP, HO = Licensed Behavior Analyst (LBA). Per 15-minute unit (effective 12/1/2021 and still current in the July 2026 fee file): 97153 direct treatment pays $15.00 at the technician tier, $23.48 LABA, $39.40 LMHP, and $46.63 LBA; assessment and QHP codes (97151, 97155, 97156) pay $23.48 / $39.40 / $46.63 at the LABA / LMHP / LBA tiers. Who renders the service is therefore a first-order revenue variable in Virginia. One trap when reading the raw fee file: it also carries generic physician-fee rows for 97151 and 97156 at a few dollars per unit — those are the non-ABA schedule lines, not the ABA program rates.',
        ],
        cites: [
          { title: 'DMAS — procedure fee files (CPT), source of ABA rates', url: 'https://www.dmas.virginia.gov/for-providers/rates-and-rate-setting/procedure-fee-files-cpt-codes/' },
          { title: 'DMAS — ABA billing guidance (modifier tiers)', url: 'https://virginiaaba.org/wp-content/uploads/2021/11/ABA-Billing-Guidance-from-DMAS-Nov21.pdf' },
        ],
      },
      {
        h2: 'The Cardinal Care MCO landscape',
        body: [
          'Cardinal Care is the unified brand for Virginia Medicaid managed care, and a new single managed-care contract took effect July 1, 2025 — the same date Molina exited Virginia Medicaid (contract terminated 6/30/2025) and Humana Healthy Horizons entered, absorbing Molina\'s members. The five active MCOs — Aetna Better Health, Anthem HealthKeepers Plus, Humana Healthy Horizons, Sentara Community Plan, and UnitedHealthcare Community Plan — all apply the identical DMAS criteria and standardized ABA forms, so the per-plan differences are operational: portals, fax lines, credentialing paths, and UHC\'s Optum carve-out. Providers in every MCO network must also keep their DMAS PRSS enrollment current, and only Board of Medicine-licensed LBAs/LABAs can provide ABA within scope.',
        ],
        cites: [
          { title: 'VirginiaABA — July 1, 2025 Medicaid changes (Molina exit, Humana entry)', url: 'https://virginiaaba.org/july-1st-medicaid-changes-what-providers-need-to-know/' },
          { title: 'VirginiaABA — October 2025 Medicaid changes (per-code SAs)', url: 'https://virginiaaba.org/october-2025-medicaid-changes-what-providers-need-to-know/' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Virginia does not require the RBT credential. Technician-level Medicaid ABA is delivered by unlicensed personnel working under a Licensed Behavior Analyst (LBA) or Licensed Assistant Behavior Analyst (LABA) per the Board of Medicine\'s supervision rules (18VAC85-150), and there is no state technician registry — DMAS classifies staff simply as licensed or unlicensed. Scope limits still bind: technicians may give input but cannot develop, review, or update the ISP (an LBA/LABA/LMHP task), and cannot render or bill parent/family training. If you staff with RBTs voluntarily, the BACB floor travels with the credential — age 18+, high-school education, the 40-hour training, a competency assessment, a criminal background check plus abuse-registry check within the 180 days before applying, and ongoing supervision of at least 5% of monthly service hours. VirginiaABA\'s guidance also holds that technicians must be W-2 employees paid for indirect time (supervision, data analysis), not 1099 contractors — association guidance we couldn\'t trace to a DMAS document, but worth pricing into the staffing model.',
          'The screening picture is unusual: ABA agencies sit outside DBHDS licensure (the pre-2012 DBHDS outpatient ABA license became unnecessary once the Board of Medicine took over individual licensure), so Virginia\'s barrier-crime regime — Va. Code § 37.2-416\'s CCRE/FBI checks and DSS child-abuse-registry searches — does not bind an ABA-only agency; it applies only if you separately hold a DBHDS license for other services. Employee-level checks instead arrive through the BACB (for RBT-certified hires) and through MCO contracts: Anthem HealthKeepers Plus\'s provider manual (effective 7/1/2026) requires OIG LEIE exclusion screening before hiring or contracting with any individual, periodic re-checks of current employees and contractors, and immediate reporting of any exclusion — the federal rule behind it (42 CFR 1001.1901) bars payment for anything an excluded person furnishes. At the entity level, Medicaid enrollment consent covers criminal background checks, with fingerprinting only if DMAS or CMS designates the provider high categorical risk (42 CFR 455.434); ABA is not on the federal high-risk provider list, but DMAS\'s risk-category assignment for ABA isn\'t published — confirm at enrollment. Revalidation runs at least every five years via PRSS.',
          'Supervisor licensure runs through the Board of Medicine under Va. Code § 54.1-2957.16: LBA requires current BCBA certification, LABA requires current BCaBA plus documented supervision by an LBA. The supervision floors are qualitative, not ratio-based — 18VAC85-150-120 makes the LBA ultimately responsible for care under his supervision, requires a written supervisory agreement with each LABA, and sets formal LABA supervision at no less than one hour at least every four weeks (informal phone/email contact doesn\'t count), with no numeric supervisor-to-technician ratio or percent-of-hours observation floor in the licensure regulation itself. DMAS, however, sets its own frequency floors in Appendix D, and they bind regardless: the LBA, LABA or LMHP must \u201cobserve the youth and supervise services monthly,\u201d with that supervision documented in the record as a review of progress notes and data plus dialogue with supervised staff, and \u201csupervision of unlicensed staff shall occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist,\u201d evidenced by the licensed supervisor\u2019s contemporaneously dated signature. Treat those two cadences \u2014 monthly on the youth, twice monthly on unlicensed staff \u2014 as the audit standard. Two billing consequences: supervision without the client present isn\'t separately billable (technician rates were built to include it), and each LBA must be individually enrolled in MES and credentialed with each Cardinal Care MCO you accept — a per-supervisor, per-plan administrative load. Two items we couldn\'t verify directly: the current Appendix D\'s own staffing text (host unreachable at review) and the LBA continuing-education renewal rule (18VAC85-150-100) — confirm both with DMAS provider enrollment and the Board.',
        ],
        cites: [
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'VirginiaABA — For Medicaid Providers (FAQ)', url: 'https://virginiaaba.org/resources/for-behavior-analysts/for-medicaid-providers/' },
          { title: '18VAC85-150-120 — supervisory responsibilities', url: 'https://www.law.cornell.edu/regulations/virginia/18VAC85-150-120' },
          { title: '18VAC85-150-130 — supervision of unlicensed personnel', url: 'https://law.lis.virginia.gov/admincode/title18/agency85/chapter150/section130/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
          { title: 'Va. Code § 37.2-416 — DBHDS barrier-crime background checks', url: 'https://law.lis.virginia.gov/vacode/title37.2/chapter4/section37.2-416/' },
          { title: 'Anthem HealthKeepers Plus — provider manual (eff. 7/1/2026, exclusion screening)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ProviderManual.pdf' },
          { title: 'BACB — RBT Handbook (2026)', url: 'https://www.bacb.com/wp-content/uploads/2025/08/RBTHandbook_260116-a.pdf' },
          { title: '42 CFR 455.434 — criminal background checks', url: 'https://www.law.cornell.edu/cfr/text/42/455.434' },
        ],
      },
    ],
    collect: [
      { title: 'Member ID & Cardinal Care MCO', desc: 'Aetna, Anthem, Humana, Sentara, or UHC (or FFS) — same clinical rules, different submission machinery.' },
      { title: 'ASD diagnosis', desc: 'Diagnosis, the qualified professional who made it, and the date — then book the assessment; no auth needed.' },
      { title: 'Units per CPT code', desc: 'The treatment request itemizes intensity code by code — align intake and clinical planning early.' },
      { title: 'Weekly schedule (if ≥20 hrs)', desc: 'Requests at 80+ units/week need an individualized activity schedule.' },
      { title: 'Rendering practitioner tier', desc: 'LBA vs. LABA vs. technician determines the rate — staffing is a revenue decision.' },
    ],
    sources: [
      { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
      { title: 'DMAS — procedure fee files (CPT)', url: 'https://www.dmas.virginia.gov/for-providers/rates-and-rate-setting/procedure-fee-files-cpt-codes/' },
      { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
      { title: 'DMAS — service authorization (Acentra Health)', url: 'https://www.dmas.virginia.gov/for-providers/service-authorization/' },
      { title: 'DMAS bulletin — new single sign-on requirement for FFS service authorization requests on the Acentra ANG platform', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/new-single-sign-requirement-ffs-service-authorization-requests-acentra-ang-platform' },
      { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
      { title: 'VirginiaABA — For Medicaid Providers (FAQ)', url: 'https://virginiaaba.org/resources/for-behavior-analysts/for-medicaid-providers/' },
      { title: '18VAC85-150-120 — supervisory responsibilities', url: 'https://www.law.cornell.edu/regulations/virginia/18VAC85-150-120' },
      { title: '18VAC85-150-130 — supervision of unlicensed personnel', url: 'https://law.lis.virginia.gov/admincode/title18/agency85/chapter150/section130/' },
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
      { title: 'Va. Code § 37.2-416 — DBHDS barrier-crime background checks', url: 'https://law.lis.virginia.gov/vacode/title37.2/chapter4/section37.2-416/' },
      { title: 'Anthem HealthKeepers Plus — provider manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ProviderManual.pdf' },
      { title: 'BACB — RBT Handbook (2026)', url: 'https://www.bacb.com/wp-content/uploads/2025/08/RBTHandbook_260116-a.pdf' },
      { title: '42 CFR 455.434 — criminal background checks', url: 'https://www.law.cornell.edu/cfr/text/42/455.434' },
      { title: 'VirginiaABA — July 1, 2025 Medicaid changes (Molina exit, Humana entry)', url: 'https://virginiaaba.org/july-1st-medicaid-changes-what-providers-need-to-know/' },
      { title: 'VirginiaABA — October 2025 Medicaid changes (per-code SAs)', url: 'https://virginiaaba.org/october-2025-medicaid-changes-what-providers-need-to-know/' },
      { title: 'DMAS — ABA billing guidance (modifier tiers)', url: 'https://virginiaaba.org/wp-content/uploads/2021/11/ABA-Billing-Guidance-from-DMAS-Nov21.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Three separate floors. The LBA, LABA or LMHP must at a minimum observe the youth and supervise services monthly, with supervision documented as a review of progress notes and data plus dialogue with supervised staff about progress and the effectiveness of the ISP. Supervision of unlicensed staff must occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist, demonstrated by the contemporaneously dated signature of the licensed supervisor. Clinical supervision is required for services rendered by an LABA, LMHP-R, LMHP-RP or LMHP-S, consistent with the scope of practice set by the applicable Virginia Department of Health Professions board — on the nature of supervision DMAS defers to that board and to the BACB. Supervision time without the individual present is not billable; the technician rates were built to include it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: '18VAC85-150-120 — supervisory responsibilities', url: 'https://www.law.cornell.edu/regulations/virginia/18VAC85-150-120' },
        ],
      },
      concurrentBilling: {
        value:
          'Appendix D publishes the combinations that may be billed at the same time: 97152 with 97151 (except 97152 HN together with 97151 HN); 97153 with 97155 (except 97153 HN together with 97155 HN) — DMAS adds that 97155 and 97153 may be billed together for supervision activities when the QHP is directing the technician in delivering treatment and the QHP, technician and youth are all present; 97154 and 97158 at the same time for different youth in the same group, with identical professional-level modifiers; 97153 at the same time for two technicians when the reason is documented in a service-authorized ISP; and services with the youth alongside family or group family training when delivered by different qualified staff. What is barred: an additional technician-level code alongside 97158 or 97154. Separately, ABA may not be authorized concurrently with Intensive In-Home, Mental Health Skill Building, Psychosocial Rehabilitation, Partial Hospitalization or Assertive Community Treatment, though short-term authorization overlaps are allowed during transitions.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling. Assessment codes 97151, 97152 and 0362T carry no service authorization and no unit limit, but may only be billed as part of an initial assessment or a full reassessment. Since dates of service 10/15/2025 every treatment code is authorized with its own predetermined number of units rather than bundled under 97155. Requests at or above 20 hours (80 units) a week must include an individualized schedule of activities that distinguishes therapeutic from recreational time — a general schedule of clinic-based activities is not sufficient. Group sizes follow CPT guidelines. In Residential Treatment Services settings, including therapeutic group homes and PRTFs, the payable ABA set narrows to 97151, 97154 (with modifier HN, HO or TF only), 97155, 97156 and 97157.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
        ],
      },
      noteSignature: {
        value:
          'Documentation must carry the initial assessment completed by the LBA, LABA or LMHP including the assessment instruments used, dates of service and face-to-face contacts, staff and participant names, and staff credentials and signatures. Treatment progress must be documented through daily data collection plus a weekly summary note, with graphical analysis of goals and objectives for those dates of service. Supervision is demonstrated by the contemporaneously dated signature of the licensed supervisor. The ISP must be reviewed at least every 30 calendar days — a progress note satisfies the review if it documents the discussion, any alterations, and the individual\'s response; the individual\'s signature is not required, and the 30-day review is held for audit rather than submitted.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      placeOfService: {
        value:
          'ABA may be provided in home or community settings where the targeted behaviors are likely to occur, and in clinic settings — the setting must be justified in the ISP. School is the constrained one: ABA may only be provided in the school setting when the purpose is observation and collaboration by the QHP related to behavior and skill acquisition, not direct therapy, and only when authorized by the school, the parent and the provider and included in the ISP. Technician-level codes may not be billed for school observation and collaboration, and DMAS interprets school as any education setting, private or public; additional school ABA may be available under school health services through the local education agency. Services rendered primarily by a relative or guardian who is legally responsible for the youth\'s care are not covered.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'ABA providers must be enrolled with DMAS under the ABA provider types (PCT 156 or 456 with PS 903; PCT 020 or 023; PCT 256 with PS 104), licensed by the applicable Virginia Department of Health Professions board, and credentialed with the youth\'s Medicaid MCO for managed-care members. Every CPT code is billed with the staff modifier that identifies the professional providing the service: HN for an LABA, HO for an LBA, TF for an LMHP. QHP-level codes must be provided by an LBA or LMHP, with an LABA able to act as a QHP as determined by the supervising LBA under 18VAC85-150-120, and LMHP-Rs, LMHP-RPs and LMHP-Ss with completed ABA education and training able to provide them under the supervising LMHP. Technician-level codes may be delivered by an LMHP-R/RP/S under supervision, an LABA under an LBA, personnel supervised by an LBA or LABA under 18VAC85-150-10 et seq., personnel supervised by a Licensed Clinical Psychologist under § 54.1-3614, or by an LBA or LMHP acting as the technician — LBAs may bill technician-level codes with the appropriate modifier. Unlicensed personnel include but are not limited to RBTs; Virginia does not require the RBT credential.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '18VAC85-150-120 — supervisory responsibilities', url: 'https://www.law.cornell.edu/regulations/virginia/18VAC85-150-120' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21 — Appendix D\'s ABA admission criteria state it as the first requirement, and the benefit rides EPSDT, so there is no hard hour cap beneath it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        ],
      },
      dxRecency: {
        value:
          'No recency window on the diagnosis. Appendix D admits on a current primary ICD diagnosis correlating to a DSM diagnosis, or on a provisional psychiatric diagnosis developed by an LMHP where no definitive diagnosis has been made — and DMAS states there is no timeframe for the use of a provisional psychiatric diagnosis, expecting the LBA to follow up with the youth\'s physician or other LMHPs as more information is gathered. What must stay current is the assessment: it is reviewed and updated at least annually by the LBA, LABA or LMHP, and continued-stay criteria test symptoms within the past 30 days.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'Two different questions, and Appendix D answers both. The diagnosis: the youth must currently meet criteria for a primary ICD diagnosis that correlates to a DSM diagnosis, or have a provisional psychiatric diagnosis as developed by an LMHP — Appendix D does not restrict the benefit to autism or name a specialty list of diagnosing clinicians. The ABA assessment: it must be completed by an LBA, LABA or LMHP acting within scope (an LMHP-R, LMHP-RP or LMHP-S with completed education and training in ABA may complete it under the supervising LMHP), conducted in person with the youth and the family or caregivers, and an assessment completed by an LABA may be used only for ABA, not as a Comprehensive Needs Assessment for other services.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'The initial assessment must include a functional assessment using validated tools, completed by the LBA, LABA or LMHP within scope, and documentation must describe any assessment tools used. DMAS publishes no approved list — the QHP may use clinical judgement to choose the best assessments for the youth — so what is audited is that a validated instrument was used and named, not which one.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      referral: {
        value:
          'No physician order. DMAS retired the requirement for an order or letter recommending services signed by a physician, nurse practitioner or physician assistant — what replaced it is a notification duty: the QHP must notify the youth\'s primary care physician that the child is receiving ABA, providers must communicate the results of the assessment and treatment planning to the PCP, and care coordination with the PCP must be documented in the youth\'s record.',
        status: 'verified',
        cites: [
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        ],
      },
      telehealth: {
        value:
          'Initial assessments must be conducted in person with the youth and the family or caregivers. Beyond that, coverage of services delivered by telemedicine is governed by the Telehealth Services Supplement to the Mental Health Services manual, and the use of telemedicine must be documented in the ISP submitted with both the initial and the continued-stay authorization. Care coordination, data analysis and treatment-plan activities billed under 97151 or 97155 do not have to be provided face to face. MCO-contracted providers must consult their contracted MCO for that plan\'s telehealth policies.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Standard (non-urgent) requests: decided within 7 calendar days of receipt; expedited: within 72 hours — in force since January 1, 2026 for DMAS FFS (Acentra) and every Cardinal Care MCO alike. The standard clock can extend by up to 14 calendar days if the member or provider requests it, or if the extension is justified in the member\'s interest to obtain more medical evidence; expedited applies when the standard timeframe "could seriously jeopardize the member\'s life, physical or mental health, or ability to attain, maintain, or regain maximum function." Before the rule the standard limit was 14 days. When to submit: Appendix D says providers "shall submit service authorization requests by the requested start date of services. If submitted after the required time-frame, the begin date of authorization will be based on the date of receipt" — and the DMAS bulletin adds that days/units not submitted timely are denied. Assessment codes need no authorization, so the clock matters for treatment and every continued-stay request.',
        status: 'verified',
        cites: [
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 440.230(e) — Medicaid FFS prior-authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. DMAS: "The provider must bill other insurance as primary," and "The member can keep private health insurance and still be covered by Medicaid. The other insurance plan pays first." For ABA specifically, the Project BRAVO FAQ answers the secondary-claim question directly: "All claims must first be submitted [to] the youth\'s commercial plan before being submitted to the youth\'s Medicaid MCO for secondary coverage consideration." The Medicaid claim must still reach DMAS within 12 months of the date of service even while you wait on the primary, and a claim flagged as having other coverage with no TPL payment needs the EOB/denial attached. Appendix D makes payment for every non-assessment ABA service conditional on service authorization ("Services other than assessment (97151, 97152 and 0362T) must be service authorized by the FFS service authorization contractor or MCO") and names no exemption for a secondary claim, so get the Medicaid authorization even when the commercial plan pays first. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid. Federal law lets a state pay first and chase the third party for claims for preventive pediatric services, "including early and periodic screening, diagnosis and treatment services"; DMAS\'s mental health billing chapter publishes no such exception for ABA, so bill the commercial plan first.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Chapter V, Billing Instructions (rev. 12/5/2025)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-12/MHS%20-%20Chapter%205%20%28updated%2012.5.25%29_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    faq: [
      { q: 'Does Virginia Medicaid cover ABA therapy?', a: 'Yes — for members under 21 with autism, under the EPSDT benefit, with no hard hour cap. Assessment codes need no service authorization; all treatment hours are authorized with units itemized per CPT code.' },
      { q: 'Does the ABA assessment need prior authorization in Virginia?', a: 'No — 97151, 97152, and 0362T require no service authorization under DMAS rules (confirmed in the manual and the fee file\'s PA flags). Treatment codes do.' },
      { q: 'What does Virginia Medicaid pay for ABA?', a: 'Licensure-tiered rates per 15-minute unit: 97153 pays $15.00 (technician), $23.48 (LABA), $39.40 (LMHP), or $46.63 (LBA); assessment and QHP codes pay the LABA/LMHP/LBA tiers. Modifiers HN/TF/HO flag the tier.' },
      { q: 'Which MCOs run Virginia Medicaid ABA?', a: 'Aetna Better Health, Anthem HealthKeepers Plus, Humana Healthy Horizons (which replaced Molina on July 1, 2025), Sentara Community Plan, and UnitedHealthcare Community Plan — all on identical DMAS criteria and forms.' },
      { q: 'How do I log in to submit a Virginia Medicaid FFS ABA service authorization?', a: 'As of June 1, 2026, through DMAS\'s Medicaid Enterprise System (MES) provider portal single sign-on and its "FFS Service Authorization" tile — direct login to Acentra\'s Atrezzo portal (portal.kepro.com) was retired for this purpose after May 31, 2026. MCO members still submit through their own plan\'s portal.' },
      { q: 'How fast must Virginia Medicaid decide an ABA prior-authorization request?', a: 'Under the CMS Interoperability and Prior Authorization Final Rule (effective 1/1/2026), DMAS FFS and every Cardinal Care MCO must decide expedited requests within 72 hours and standard requests within 7 calendar days — extendable to 14 days only if the member/provider requests it, or DMAS/the MCO needs more evidence in the member\'s interest.' },
    ],
  },

  'aetna-better-health-virginia': {
    slug: 'aetna-better-health-virginia',
    family: 'aetna',
    cardDesc: 'DMAS forms/criteria via Availity; the auth lives on the LBA\'s NPI — changes need a new auth.',
    assessmentPA: {
      value: 'Not required — DMAS rule: assessment codes 97151, 97152, 0362T need no service authorization',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — DMAS standardized initial/continued-stay forms via Availity or fax (833) 757-1583',
      status: 'verified',
      cites: [
        { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
      ],
    },
    dxRequired: {
      value: 'NO \u2014 not autism-restricted, and not category-restricted either. DMAS Appendix D admits a youth under 21 who meets criteria for a primary ICD diagnosis correlating to a DSM diagnosis, OR who has a provisional psychiatric diagnosis developed by an LMHP when no definitive diagnosis has been made, plus at least two functional-impairment criteria. The ABA criteria name no diagnostic category list and never mention autism',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA), Admission Criteria p.24', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    payer: 'Aetna Better Health of Virginia',
    state: 'VA', kind: 'medicaid-mco', parent: 'Virginia Medicaid (DMAS)',
    pill: 'Payer Guide · Aetna Better Health (VA)',
    h1: 'Aetna Better Health of Virginia ABA coverage (Cardinal Care MCO).',
    metaTitle: 'Aetna Better Health of Virginia ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Aetna Better Health administers Virginia Medicaid ABA — DMAS standardized forms and criteria, Availity submission, the NPI-matching authorization rule, and credentialing via DMAS PRSS.',
    intro: [
      'Aetna Better Health of Virginia administers the Cardinal Care ABA benefit on DMAS\'s standardized forms and criteria — Aetna\'s national commercial ABA policy (CPB 0554) does not apply here. The plan-specific layer is operational, and one rule dominates it: the authorization is tied to the rendering LBA/LMHP\'s NPI, and changing the rendering provider closes the existing auth and requires a new one. Staff turnover is an authorization event at this plan.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Cardinal Care MCO (Aetna Medicaid)' },
      { label: 'Clinical rules', value: 'DMAS criteria + standardized MHS ABA forms (not CPB 0554)' },
      { label: 'Assessment auth', value: 'None — DMAS assessment codes are auth-free' },
      { label: 'Submission', value: 'Availity (preferred) or fax (833) 757-1583' },
      { label: 'NPI rule', value: 'Auth tied to the rendering LBA/LMHP NPI; changes need a NEW auth' },
      { label: 'Appeals', value: 'Peer-to-peer reconsideration within 7 calendar days of denial' },
    ],
    sections: [
      {
        h2: 'How Aetna Better Health runs ABA authorization',
        body: [
          'Treatment requests use the DMAS standardized MHS ABA initial and continued-stay forms, submitted through Availity (the plan\'s preferred channel) or by fax to (833) 757-1583, with the DMAS rules — per-code units, the 20-hour activity-schedule threshold — applying as everywhere in Cardinal Care. Details that bounce submissions: signature-font e-signatures are rejected on SA forms, and a blank discharge-date field counts as an incomplete submission. After a medical-necessity denial, the peer-to-peer reconsideration window is 7 calendar days — short enough that intake should flag denials to clinical leadership same-day.',
          'The NPI-matching rule deserves process design: the authorization lives on the supervising LBA/LMHP\'s NPI and must match the claim\'s rendering NPI, no exceptions. When a case transfers between supervisors, request the new authorization before the transition, not after the first denied claim.',
        ],
        cites: [
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      {
        h2: 'Credentialing & billing basics',
        body: [
          'Enroll with DMAS through the PRSS portal and select Aetna, then email the plan\'s provider-relations team (AetnaBetterHealth-VAProviderRelations@Aetna.com) to trigger credentialing. Telehealth follows state policy (GT modifier). Timely filing runs 365 days, EDI payer ID 128VA.',
        ],
        cites: [
          { title: 'Aetna Better Health VA — prior authorization page', url: 'https://www.aetnabetterhealth.com/virginia/providers/prior-authorization.html' },
        ],
      },
    ],
    collect: [
      { title: 'Supervising LBA/LMHP NPI', desc: 'The auth binds to it — track it per case, and treat supervisor changes as authorization events.' },
      { title: 'ASD diagnosis', desc: 'Then book the assessment — no authorization needed on assessment codes.' },
      { title: 'Complete SA forms', desc: 'Wet-style signatures and filled discharge-date fields — the two known bounce reasons.' },
      { title: 'Units per CPT code', desc: 'Per the DMAS 10/15/2025 rule, intensity is requested code by code.' },
    ],
    sources: [
      { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
      { title: 'Aetna Better Health VA — prior authorization page', url: 'https://www.aetnabetterhealth.com/virginia/providers/prior-authorization.html' },
      { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
      { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: three separate floors. The LBA, LABA or LMHP must at a minimum observe the youth and supervise services monthly, with supervision documented as a review of progress notes and data plus dialogue with supervised staff about progress and the effectiveness of the ISP. Supervision of unlicensed staff must occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist, demonstrated by the contemporaneously dated signature of the licensed supervisor. Clinical supervision is required for services rendered by an LABA, LMHP-R, LMHP-RP or LMHP-S, consistent with the scope of practice set by the applicable Virginia Department of Health Professions board — on the nature of supervision DMAS defers to that board and to the BACB. Supervision time without the individual present is not billable; the technician rates were built to include it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: Appendix D publishes the combinations that may be billed at the same time: 97152 with 97151 (except 97152 HN together with 97151 HN); 97153 with 97155 (except 97153 HN together with 97155 HN) — DMAS adds that 97155 and 97153 may be billed together for supervision activities when the QHP is directing the technician in delivering treatment and the QHP, technician and youth are all present; 97154 and 97158 at the same time for different youth in the same group, with identical professional-level modifiers; 97153 at the same time for two technicians when the reason is documented in a service-authorized ISP; and services with the youth alongside family or group family training when delivered by different qualified staff. What is barred: an additional technician-level code alongside 97158 or 97154. Separately, ABA may not be authorized concurrently with Intensive In-Home, Mental Health Skill Building, Psychosocial Rehabilitation, Partial Hospitalization or Assertive Community Treatment, though short-term authorization overlaps are allowed during transitions.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no per-day unit ceiling. Assessment codes 97151, 97152 and 0362T carry no service authorization and no unit limit, but may only be billed as part of an initial assessment or a full reassessment. Since dates of service 10/15/2025 every treatment code is authorized with its own predetermined number of units rather than bundled under 97155. Requests at or above 20 hours (80 units) a week must include an individualized schedule of activities that distinguishes therapeutic from recreational time — a general schedule of clinic-based activities is not sufficient. Group sizes follow CPT guidelines. In Residential Treatment Services settings, including therapeutic group homes and PRTFs, the payable ABA set narrows to 97151, 97154 (with modifier HN, HO or TF only), 97155, 97156 and 97157.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      noteSignature: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: documentation must carry the initial assessment completed by the LBA, LABA or LMHP including the assessment instruments used, dates of service and face-to-face contacts, staff and participant names, and staff credentials and signatures. Treatment progress must be documented through daily data collection plus a weekly summary note, with graphical analysis of goals and objectives for those dates of service. Supervision is demonstrated by the contemporaneously dated signature of the licensed supervisor. The ISP must be reviewed at least every 30 calendar days — a progress note satisfies the review if it documents the discussion, any alterations, and the individual\'s response; the individual\'s signature is not required, and the 30-day review is held for audit rather than submitted. On Aetna Better Health\'s own SA forms, signature-font e-signatures are rejected and a blank discharge-date field counts as an incomplete submission; after a medical-necessity denial, the peer-to-peer reconsideration window is 7 calendar days.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA may be provided in home or community settings where the targeted behaviors are likely to occur, and in clinic settings — the setting must be justified in the ISP. School is the constrained one: ABA may only be provided in the school setting when the purpose is observation and collaboration by the QHP related to behavior and skill acquisition, not direct therapy, and only when authorized by the school, the parent and the provider and included in the ISP. Technician-level codes may not be billed for school observation and collaboration, and DMAS interprets school as any education setting, private or public; additional school ABA may be available under school health services through the local education agency. Services rendered primarily by a relative or guardian who is legally responsible for the youth\'s care are not covered.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA providers must be enrolled with DMAS under the ABA provider types (PCT 156 or 456 with PS 903; PCT 020 or 023; PCT 256 with PS 104), licensed by the applicable Virginia Department of Health Professions board, and credentialed with the youth\'s Medicaid MCO for managed-care members. Every CPT code is billed with the staff modifier that identifies the professional providing the service: HN for an LABA, HO for an LBA, TF for an LMHP. QHP-level codes must be provided by an LBA or LMHP, with an LABA able to act as a QHP as determined by the supervising LBA under 18VAC85-150-120, and LMHP-Rs, LMHP-RPs and LMHP-Ss with completed ABA education and training able to provide them under the supervising LMHP. Technician-level codes may be delivered by an LMHP-R/RP/S under supervision, an LABA under an LBA, personnel supervised by an LBA or LABA under 18VAC85-150-10 et seq., personnel supervised by a Licensed Clinical Psychologist under § 54.1-3614, or by an LBA or LMHP acting as the technician — LBAs may bill technician-level codes with the appropriate modifier. Unlicensed personnel include but are not limited to RBTs; Virginia does not require the RBT credential. Aetna Better Health layers one plan rule on top that drives practice design: the authorization lives on the rendering LBA/LMHP\'s NPI and must match the claim\'s rendering NPI, with no exceptions — changing the rendering provider closes the existing authorization and requires a new one, so a supervisor transfer is an authorization event, not just a staffing one.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: under 21 — Appendix D\'s ABA admission criteria state it as the first requirement, and the benefit rides EPSDT, so there is no hard hour cap beneath it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      dxRecency: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no recency window on the diagnosis. Appendix D admits on a current primary ICD diagnosis correlating to a DSM diagnosis, or on a provisional psychiatric diagnosis developed by an LMHP where no definitive diagnosis has been made — and DMAS states there is no timeframe for the use of a provisional psychiatric diagnosis, expecting the LBA to follow up with the youth\'s physician or other LMHPs as more information is gathered. What must stay current is the assessment: it is reviewed and updated at least annually by the LBA, LABA or LMHP, and continued-stay criteria test symptoms within the past 30 days.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: two different questions, and Appendix D answers both. The diagnosis: the youth must currently meet criteria for a primary ICD diagnosis that correlates to a DSM diagnosis, or have a provisional psychiatric diagnosis as developed by an LMHP — Appendix D does not restrict the benefit to autism or name a specialty list of diagnosing clinicians. The ABA assessment: it must be completed by an LBA, LABA or LMHP acting within scope (an LMHP-R, LMHP-RP or LMHP-S with completed education and training in ABA may complete it under the supervising LMHP), conducted in person with the youth and the family or caregivers, and an assessment completed by an LABA may be used only for ABA, not as a Comprehensive Needs Assessment for other services.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: the initial assessment must include a functional assessment using validated tools, completed by the LBA, LABA or LMHP within scope, and documentation must describe any assessment tools used. DMAS publishes no approved list — the QHP may use clinical judgement to choose the best assessments for the youth — so what is audited is that a validated instrument was used and named, not which one.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      referral: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no physician order. DMAS retired the requirement for an order or letter recommending services signed by a physician, nurse practitioner or physician assistant — what replaced it is a notification duty: the QHP must notify the youth\'s primary care physician that the child is receiving ABA, providers must communicate the results of the assessment and treatment planning to the PCP, and care coordination with the PCP must be documented in the youth\'s record.',
        status: 'verified',
        cites: [
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      telehealth: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: initial assessments must be conducted in person with the youth and the family or caregivers. Beyond that, coverage of services delivered by telemedicine is governed by the Telehealth Services Supplement to the Mental Health Services manual, and the use of telemedicine must be documented in the ISP submitted with both the initial and the continued-stay authorization. Care coordination, data analysis and treatment-plan activities billed under 97151 or 97155 do not have to be provided face to face. MCO-contracted providers must consult their contracted MCO for that plan\'s telehealth policies. Aetna Better Health adds that telehealth follows state policy with the GT modifier.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Aetna Better Health VA — ABA provider collaboration deck', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_applied_behavioral_analysis_providers.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Virginia Medicaid rule, applied by Aetna Better Health of Virginia: since January 1, 2026 DMAS requires FFS and every Cardinal Care MCO to decide standard (non-urgent) requests within 7 calendar days of receipt and expedited requests within 72 hours; the 7-day clock can extend up to 14 calendar days if the member or provider asks, or if the extra time is justified in the member\'s interest to obtain more medical evidence. Aetna\'s own manual (contract year July 2025–June 2026) still prints the older table — non-urgent preservice "no more than 14 calendar days from receipt of the request," urgent preservice 72 hours/3 calendar days — but that table applies "Unless otherwise required by DMAS," and DMAS has required 7 days since 1/1/2026. Timing from Appendix D: submit treatment requests (initial and continued stay) by the requested start date — "If submitted after the required time-frame, the begin date of authorization will be based on the date of receipt," so a late reauthorization leaves an unpaid gap.',
        status: 'verified',
        cites: [
          { title: 'Aetna Better Health of Virginia — Provider Manual (contract year 7/1/2025–6/30/2026)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_provider_manual.pdf' },
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. Aetna\'s manual: "By law, Medicaid is the payor of last resort… Aetna Better Health shall be used as a source of payment for covered services only after all other sources of payment have been exhausted." Bill the commercial plan first; the Aetna claim must arrive within 365 days of the primary carrier\'s remittance-advice date, with a copy of the primary RA and disposition detail attached. On authorization the manual says two things — "If other insurance is the primary payer before Aetna Better Health, prior authorization of a service is required," and, in the COB section, "If the claim is processed as secondary by Aetna Better Health, then that payer\'s authorization rules are applied." The safe reading for ABA: get Aetna\'s service authorization as well as the commercial plan\'s. DMAS\'s ABA FAQ is explicit that claims go to the commercial plan before the MCO for secondary consideration. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Aetna Better Health of Virginia — Provider Manual (contract year 7/1/2025–6/30/2026)', url: 'https://www.aetnabetterhealth.com/content/dam/aetna/medicaid/virginia/provider/pdf/abhva_provider_manual.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna Better Health of Virginia cover ABA?', a: 'Yes — on DMAS\'s EPSDT criteria and standardized forms (Aetna\'s commercial CPB 0554 policy doesn\'t apply). Assessment codes need no authorization; treatment codes do, via Availity or fax.' },
      { q: 'What happens if our supervising BCBA changes mid-authorization?', a: 'The authorization is tied to the rendering LBA/LMHP\'s NPI — a change closes the existing auth and requires a new one. Request it before the transition to avoid denied claims.' },
      { q: 'How do I join Aetna Better Health VA\'s network?', a: 'Enroll with DMAS via the PRSS portal, select Aetna, then email AetnaBetterHealth-VAProviderRelations@Aetna.com to start credentialing.' },
    ],
  },

  'anthem-healthkeepers-plus': {
    slug: 'anthem-healthkeepers-plus',
    family: 'anthem',
    cardDesc: 'DMAS forms via Availity/ICR; publishes the clearest code/modifier/POS grid in Virginia.',
    assessmentPA: {
      value: 'Not required — published grid confirms no SA on 97151, 97152, 0362T',
      status: 'verified',
      cites: [
        { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
      ],
    },
    treatmentPA: {
      value: 'Required — 97153–97158, 0373T on DMAS standardized forms; ≥20 hrs/wk needs the activity schedule',
      status: 'verified',
      cites: [
        { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        { title: 'Anthem VA — ABA initial SA request form', url: 'https://providers.anthem.com/docs/gpp/VA_CCC_BH_ABA_InitialStay.pdf?v=202301010312' },
      ],
    },
    dxRequired: {
      value: 'NO \u2014 not autism-restricted, and not category-restricted either. DMAS Appendix D admits a youth under 21 who meets criteria for a primary ICD diagnosis correlating to a DSM diagnosis, OR who has a provisional psychiatric diagnosis developed by an LMHP when no definitive diagnosis has been made, plus at least two functional-impairment criteria. The ABA criteria name no diagnostic category list and never mention autism',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA), Admission Criteria p.24', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    payer: 'Anthem HealthKeepers Plus (VA)',
    state: 'VA', kind: 'medicaid-mco', parent: 'Virginia Medicaid (DMAS)',
    pill: 'Payer Guide · Anthem HealthKeepers Plus',
    h1: 'Anthem HealthKeepers Plus ABA coverage (Cardinal Care MCO).',
    metaTitle: 'Anthem HealthKeepers Plus (VA Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Anthem HealthKeepers Plus administers Virginia Medicaid ABA — DMAS standardized forms and criteria, the published code/modifier/POS grid, telehealth and school place-of-service rules, and Availity submission.',
    intro: [
      'Anthem HealthKeepers Plus administers Virginia\'s Cardinal Care ABA benefit on the DMAS standardized forms — its own initial SA form carries the DMAS header and admission criteria verbatim. What Anthem uniquely contributes is clarity: a published code/modifier/place-of-service grid that answers the billing questions other plans leave to trial and error, including telehealth combinations and school-setting rules.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Cardinal Care MCO (HealthKeepers, Inc.)' },
      { label: 'Clinical rules', value: 'DMAS criteria + standardized forms, verbatim' },
      { label: 'Assessment auth', value: 'None — grid confirms 97151, 97152, 0362T auth-free' },
      { label: 'Submission', value: 'Availity Essentials / Interactive Care Reviewer' },
      { label: 'Telehealth', value: 'GT combos payable on 97151, 97153, 97155, 97156 et al.' },
      { label: 'School setting', value: 'POS 03 allowed for 97151, 97155, 97156' },
    ],
    sections: [
      {
        h2: 'The grid worth bookmarking',
        body: [
          'Anthem\'s February 2023 provider bulletin publishes the full ABA code/modifier/place-of-service grid: no service authorization on 97151, 97152, and 0362T; SA required on 97153–97158 and 0373T; GT telehealth combinations payable on the assessment, direct-treatment, and family-training codes; and school as an allowed place of service (POS 03) for 97151, 97155, and 97156 — useful for IEP-adjacent care coordination. The initial SA form requires an LMHP-level attestation signature and a listing of all ABA or behavior-therapy treatment episodes from the past 12 months across all providers — so prior-treatment history is an intake question, not a billing afterthought.',
        ],
        cites: [
          { title: 'Anthem VA — ABA requirements bulletin (code/modifier/POS grid)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
          { title: 'Anthem VA — ABA initial SA request form (DMAS standardized)', url: 'https://providers.anthem.com/docs/gpp/VA_CCC_BH_ABA_InitialStay.pdf?v=202301010312' },
        ],
      },
      {
        h2: 'Submission mechanics',
        body: [
          'Behavioral-health authorizations submit digitally through Availity Essentials\' Interactive Care Reviewer; provider services runs at (800) 901-0020. The DMAS rules apply unchanged: per-code unit requests since October 2025, the ≥20-hours/week activity-schedule requirement (stated on Anthem\'s own form), and the under-21 EPSDT scope in effect since December 2021.',
        ],
        cites: [
          { title: 'Anthem VA — provider news: ABA authorization submission changes', url: 'https://providernews.anthem.com/virginia/articles/important-changes-to-applied-behavioral-analysis-aba-authori-26746' },
        ],
      },
    ],
    collect: [
      { title: 'Prior ABA episodes (12 months)', desc: 'The initial SA form requires them across all providers — ask at intake.' },
      { title: 'ASD diagnosis', desc: 'Then book the assessment — no authorization needed on assessment codes.' },
      { title: 'Setting preferences', desc: 'School delivery is billable for select codes (POS 03) — capture the school picture.' },
      { title: 'LMHP attestation', desc: 'The initial SA needs an LMHP/LMHP-R/S/RP signature — line it up before submission.' },
    ],
    sources: [
      { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
      { title: 'Anthem VA — ABA initial SA request form', url: 'https://providers.anthem.com/docs/gpp/VA_CCC_BH_ABA_InitialStay.pdf?v=202301010312' },
      { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      { title: 'Anthem VA — provider news: ABA authorization submission changes', url: 'https://providernews.anthem.com/virginia/articles/important-changes-to-applied-behavioral-analysis-aba-authori-26746' },
      { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
      { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: three separate floors. The LBA, LABA or LMHP must at a minimum observe the youth and supervise services monthly, with supervision documented as a review of progress notes and data plus dialogue with supervised staff about progress and the effectiveness of the ISP. Supervision of unlicensed staff must occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist, demonstrated by the contemporaneously dated signature of the licensed supervisor. Clinical supervision is required for services rendered by an LABA, LMHP-R, LMHP-RP or LMHP-S, consistent with the scope of practice set by the applicable Virginia Department of Health Professions board — on the nature of supervision DMAS defers to that board and to the BACB. Supervision time without the individual present is not billable; the technician rates were built to include it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: Appendix D publishes the combinations that may be billed at the same time: 97152 with 97151 (except 97152 HN together with 97151 HN); 97153 with 97155 (except 97153 HN together with 97155 HN) — DMAS adds that 97155 and 97153 may be billed together for supervision activities when the QHP is directing the technician in delivering treatment and the QHP, technician and youth are all present; 97154 and 97158 at the same time for different youth in the same group, with identical professional-level modifiers; 97153 at the same time for two technicians when the reason is documented in a service-authorized ISP; and services with the youth alongside family or group family training when delivered by different qualified staff. What is barred: an additional technician-level code alongside 97158 or 97154. Separately, ABA may not be authorized concurrently with Intensive In-Home, Mental Health Skill Building, Psychosocial Rehabilitation, Partial Hospitalization or Assertive Community Treatment, though short-term authorization overlaps are allowed during transitions.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      dailyLimits: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no per-day unit ceiling. Assessment codes 97151, 97152 and 0362T carry no service authorization and no unit limit, but may only be billed as part of an initial assessment or a full reassessment. Since dates of service 10/15/2025 every treatment code is authorized with its own predetermined number of units rather than bundled under 97155. Requests at or above 20 hours (80 units) a week must include an individualized schedule of activities that distinguishes therapeutic from recreational time — a general schedule of clinic-based activities is not sufficient. Group sizes follow CPT guidelines. In Residential Treatment Services settings, including therapeutic group homes and PRTFs, the payable ABA set narrows to 97151, 97154 (with modifier HN, HO or TF only), 97155, 97156 and 97157.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      noteSignature: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: documentation must carry the initial assessment completed by the LBA, LABA or LMHP including the assessment instruments used, dates of service and face-to-face contacts, staff and participant names, and staff credentials and signatures. Treatment progress must be documented through daily data collection plus a weekly summary note, with graphical analysis of goals and objectives for those dates of service. Supervision is demonstrated by the contemporaneously dated signature of the licensed supervisor. The ISP must be reviewed at least every 30 calendar days — a progress note satisfies the review if it documents the discussion, any alterations, and the individual\'s response; the individual\'s signature is not required, and the 30-day review is held for audit rather than submitted. Anthem\'s initial SA request form additionally requires an LMHP-level attestation signature (LMHP, LMHP-R, LMHP-S or LMHP-RP).',
        status: 'verified',
        cites: [
          { title: 'Anthem VA — ABA initial SA request form', url: 'https://providers.anthem.com/docs/gpp/VA_CCC_BH_ABA_InitialStay.pdf?v=202301010312' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA may be provided in home or community settings where the targeted behaviors are likely to occur, and in clinic settings — the setting must be justified in the ISP. School is the constrained one: ABA may only be provided in the school setting when the purpose is observation and collaboration by the QHP related to behavior and skill acquisition, not direct therapy, and only when authorized by the school, the parent and the provider and included in the ISP. Technician-level codes may not be billed for school observation and collaboration, and DMAS interprets school as any education setting, private or public; additional school ABA may be available under school health services through the local education agency. Services rendered primarily by a relative or guardian who is legally responsible for the youth\'s care are not covered. Anthem\'s published grid allows school as a place of service (POS 03) for 97151, 97155 and 97156 — the assessment, protocol-modification and family-training codes, consistent with the DMAS observation-and-collaboration boundary.',
        status: 'verified',
        cites: [
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA providers must be enrolled with DMAS under the ABA provider types (PCT 156 or 456 with PS 903; PCT 020 or 023; PCT 256 with PS 104), licensed by the applicable Virginia Department of Health Professions board, and credentialed with the youth\'s Medicaid MCO for managed-care members. Every CPT code is billed with the staff modifier that identifies the professional providing the service: HN for an LABA, HO for an LBA, TF for an LMHP. QHP-level codes must be provided by an LBA or LMHP, with an LABA able to act as a QHP as determined by the supervising LBA under 18VAC85-150-120, and LMHP-Rs, LMHP-RPs and LMHP-Ss with completed ABA education and training able to provide them under the supervising LMHP. Technician-level codes may be delivered by an LMHP-R/RP/S under supervision, an LABA under an LBA, personnel supervised by an LBA or LABA under 18VAC85-150-10 et seq., personnel supervised by a Licensed Clinical Psychologist under § 54.1-3614, or by an LBA or LMHP acting as the technician — LBAs may bill technician-level codes with the appropriate modifier. Unlicensed personnel include but are not limited to RBTs; Virginia does not require the RBT credential.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: under 21 — Appendix D\'s ABA admission criteria state it as the first requirement, and the benefit rides EPSDT, so there is no hard hour cap beneath it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      dxRecency: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no recency window on the diagnosis. Appendix D admits on a current primary ICD diagnosis correlating to a DSM diagnosis, or on a provisional psychiatric diagnosis developed by an LMHP where no definitive diagnosis has been made — and DMAS states there is no timeframe for the use of a provisional psychiatric diagnosis, expecting the LBA to follow up with the youth\'s physician or other LMHPs as more information is gathered. What must stay current is the assessment: it is reviewed and updated at least annually by the LBA, LABA or LMHP, and continued-stay criteria test symptoms within the past 30 days.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: two different questions, and Appendix D answers both. The diagnosis: the youth must currently meet criteria for a primary ICD diagnosis that correlates to a DSM diagnosis, or have a provisional psychiatric diagnosis as developed by an LMHP — Appendix D does not restrict the benefit to autism or name a specialty list of diagnosing clinicians. The ABA assessment: it must be completed by an LBA, LABA or LMHP acting within scope (an LMHP-R, LMHP-RP or LMHP-S with completed education and training in ABA may complete it under the supervising LMHP), conducted in person with the youth and the family or caregivers, and an assessment completed by an LABA may be used only for ABA, not as a Comprehensive Needs Assessment for other services.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: the initial assessment must include a functional assessment using validated tools, completed by the LBA, LABA or LMHP within scope, and documentation must describe any assessment tools used. DMAS publishes no approved list — the QHP may use clinical judgement to choose the best assessments for the youth — so what is audited is that a validated instrument was used and named, not which one.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
        ],
      },
      referral: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no physician order. DMAS retired the requirement for an order or letter recommending services signed by a physician, nurse practitioner or physician assistant — what replaced it is a notification duty: the QHP must notify the youth\'s primary care physician that the child is receiving ABA, providers must communicate the results of the assessment and treatment planning to the PCP, and care coordination with the PCP must be documented in the youth\'s record. Anthem\'s initial SA form adds a history question that is an intake question, not a billing one: it requires a listing of all ABA or behavior-therapy treatment episodes from the past 12 months across all providers, plus an LMHP-level attestation signature.',
        status: 'verified',
        cites: [
          { title: 'Anthem VA — ABA initial SA request form', url: 'https://providers.anthem.com/docs/gpp/VA_CCC_BH_ABA_InitialStay.pdf?v=202301010312' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        ],
      },
      telehealth: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: initial assessments must be conducted in person with the youth and the family or caregivers. Beyond that, coverage of services delivered by telemedicine is governed by the Telehealth Services Supplement to the Mental Health Services manual, and the use of telemedicine must be documented in the ISP submitted with both the initial and the continued-stay authorization. Care coordination, data analysis and treatment-plan activities billed under 97151 or 97155 do not have to be provided face to face. MCO-contracted providers must consult their contracted MCO for that plan\'s telehealth policies. Anthem publishes the combinations: GT telehealth pairings are payable on 97151, 97153, 97155 and 97156 among others on its ABA code/modifier/place-of-service grid.',
        status: 'verified',
        cites: [
          { title: 'Anthem VA — ABA requirements bulletin (Feb 2023)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ABARequirements.pdf?v=202302021327' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Virginia Medicaid rule, applied by Anthem HealthKeepers Plus: since January 1, 2026 DMAS requires FFS and every Cardinal Care MCO to decide standard (non-urgent) requests within 7 calendar days of receipt and expedited requests within 72 hours; the 7-day clock can extend up to 14 calendar days if the member or provider asks, or if the extra time is justified in the member\'s interest to obtain more medical evidence. Anthem\'s own manual (effective July 1, 2026) states the same numbers: "Standard authorization decisions are made within seven calendar days following receipt of the request for service," and "Expedited / urgent authorization decisions are made within 72 hours," with behavioral health non-urgent preservice at 7 calendar days in its timeliness table. Timing from Appendix D: submit treatment requests (initial and continued stay) by the requested start date — "If submitted after the required time-frame, the begin date of authorization will be based on the date of receipt," so a late reauthorization leaves an unpaid gap.',
        status: 'verified',
        cites: [
          { title: 'Anthem HealthKeepers Plus — Provider Manual (effective July 1, 2026)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ProviderManual.pdf' },
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. Anthem\'s manual: "Providers must submit coordination of benefits (COB) claims to the primary carrier before submitting to HealthKeepers, Inc." — then bill Anthem the total charges with the primary carrier\'s remittance advice or a letter explaining the denial; COB claims without one are returned "with a request to submit to the other healthcare program first," and COB filing time frames start on the date of the primary payer\'s determination. Where Anthem learns of other coverage it rejects the claim and redirects you, except in its listed pay-and-chase cases — "When the services are for preventive pediatric care, including EPSDT," and a child whose primary coverage comes through an absent parent (if unpaid 100 days after service). The manual does not say whether ABA falls in the EPSDT pay-and-chase group, and DMAS\'s ABA FAQ says claims go to the commercial plan first, so bill primary first. Appendix D makes payment for every non-assessment ABA service conditional on service authorization ("Services other than assessment (97151, 97152 and 0362T) must be service authorized by the FFS service authorization contractor or MCO") and names no exemption for a secondary claim, so get the Medicaid authorization even when the commercial plan pays first. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Anthem HealthKeepers Plus — Provider Manual (effective July 1, 2026)', url: 'https://providers.anthem.com/docs/gpp/VA_CAID_ProviderManual.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    faq: [
      { q: 'Does Anthem HealthKeepers Plus cover ABA?', a: 'Yes — Virginia\'s Cardinal Care ABA benefit on DMAS criteria and standardized forms: no authorization on assessment codes, SA on treatment codes 97153–97158 and 0373T, submitted via Availity\'s Interactive Care Reviewer.' },
      { q: 'Does Anthem HealthKeepers Plus cover ABA by telehealth or in schools?', a: 'Its published grid pays GT telehealth combinations on 97151, 97153, 97155, and 97156, and allows school as a place of service (POS 03) for 97151, 97155, and 97156.' },
    ],
  },

  'humana-healthy-horizons-virginia': {
    slug: 'humana-healthy-horizons-virginia',
    family: 'humana',
    cardDesc: 'Virginia\'s newest MCO (7/2025, ex-Molina members); DMAS forms, one PA-list quirk on 0362T.',
    assessmentPA: {
      value: 'Not required for 97151/97152 (off the PA list) — but Humana\'s list does flag 0362T, unlike DMAS',
      status: 'verified',
      cites: [
        { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — 97153–97158, 0373T per the plan\'s PA list (eff. 7/1/2025), on DMAS standardized forms',
      status: 'verified',
      cites: [
        { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
      ],
    },
    dxRequired: {
      value: 'NO \u2014 not autism-restricted, and not category-restricted either. DMAS Appendix D admits a youth under 21 who meets criteria for a primary ICD diagnosis correlating to a DSM diagnosis, OR who has a provisional psychiatric diagnosis developed by an LMHP when no definitive diagnosis has been made, plus at least two functional-impairment criteria. The ABA criteria name no diagnostic category list and never mention autism',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA), Admission Criteria p.24', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    payer: 'Humana Healthy Horizons in Virginia',
    state: 'VA', kind: 'medicaid-mco', parent: 'Virginia Medicaid (DMAS)',
    pill: 'Payer Guide · Humana Healthy Horizons (VA)',
    h1: 'Humana Healthy Horizons in Virginia ABA coverage (Cardinal Care MCO).',
    metaTitle: 'Humana Healthy Horizons Virginia ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Humana Healthy Horizons administers Virginia Medicaid ABA — the July 2025 entry replacing Molina, DMAS standardized forms, the PA list\'s 0362T quirk, and credentialing for the new network.',
    intro: [
      'Humana Healthy Horizons is Virginia\'s newest Cardinal Care MCO: it entered July 1, 2025, the day after DMAS terminated Molina\'s contract, and absorbed Molina\'s members automatically. Like the other four plans it runs ABA on DMAS criteria and standardized forms — but as a new plan it comes with fresh credentialing, transition-honored authorizations, and one genuine quirk on its PA list worth knowing.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Cardinal Care MCO — entered 7/1/2025, replacing Molina' },
      { label: 'Clinical rules', value: 'DMAS criteria + standardized service-specific forms' },
      { label: 'Assessment auth', value: '97151/97152 PA-free; 0362T IS on Humana\'s PA list (plan quirk)' },
      { label: 'Transition', value: 'Molina members auto-moved; prior auths honored ≥30 days post-transition' },
      { label: 'BH contact', value: 'VA_BH_Medicaid@humana.com; Availity portal' },
      { label: 'Access standard', value: 'BH appointment within 5 business days of coverage determination' },
    ],
    sections: [
      {
        h2: 'The transition, and what it means for intake',
        body: [
          'Former Molina members transitioned to Humana automatically on July 1, 2025 (with a 90-day plan-change window through September 30, 2025), and existing service authorizations were honored for at least 30 days past the transition. By now any Molina-era authorization has cycled through Humana\'s own process — but member cards, portal registrations, and stale directory listings can still say Molina, so verify plan identity on every "Molina" inquiry. Providers contract and credential through VA_BH_Medicaid@humana.com, keeping DMAS PRSS enrollment current, and the plan\'s behavioral-health access standard commits to an appointment within 5 business days of a coverage-criteria determination.',
        ],
        cites: [
          { title: 'VirginiaABA — July 1, 2025 Medicaid changes', url: 'https://virginiaaba.org/july-1st-medicaid-changes-what-providers-need-to-know/' },
          { title: 'Humana Healthy Horizons VA — BH provider resource guide', url: 'https://assets.humana.com/is/content/humana/VA_BH_Provider_Resource_Guidepdf' },
        ],
      },
      {
        h2: 'The PA list, including the 0362T quirk',
        body: [
          'Humana\'s Virginia PA and notification list (effective 7/1/2025) requires prior authorization on 97153–97158 and 0373T, with 97151 and 97152 correctly PA-free per the DMAS baseline. The quirk: the list also flags 0362T — a code DMAS treats as an authorization-free assessment code — as PA-required. If your assessments use 0362T for Humana members, request the authorization rather than litigating the discrepancy on the back end, and note the DMAS rule in the request.',
        ],
        cites: [
          { title: 'Humana Healthy Horizons VA — PA and notification list (eff. 7/1/2025)', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan identity on "Molina" inquiries', desc: 'Molina exited 6/30/2025 — those members are Humana now; verify the current card.' },
      { title: 'ASD diagnosis', desc: 'Then book the assessment — 97151/97152 need no authorization (0362T does, per Humana\'s list).' },
      { title: 'Units per CPT code', desc: 'The DMAS 10/15/2025 per-code rule applies to Humana requests.' },
      { title: 'Credentialing status', desc: 'New network — confirm your contracting/credentialing is complete before quoting start dates.' },
    ],
    sources: [
      { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
      { title: 'Humana Healthy Horizons VA — BH provider resource guide', url: 'https://assets.humana.com/is/content/humana/VA_BH_Provider_Resource_Guidepdf' },
      { title: 'VirginiaABA — July 1, 2025 Medicaid changes', url: 'https://virginiaaba.org/july-1st-medicaid-changes-what-providers-need-to-know/' },
      { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
      { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: three separate floors. The LBA, LABA or LMHP must at a minimum observe the youth and supervise services monthly, with supervision documented as a review of progress notes and data plus dialogue with supervised staff about progress and the effectiveness of the ISP. Supervision of unlicensed staff must occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist, demonstrated by the contemporaneously dated signature of the licensed supervisor. Clinical supervision is required for services rendered by an LABA, LMHP-R, LMHP-RP or LMHP-S, consistent with the scope of practice set by the applicable Virginia Department of Health Professions board — on the nature of supervision DMAS defers to that board and to the BACB. Supervision time without the individual present is not billable; the technician rates were built to include it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: Appendix D publishes the combinations that may be billed at the same time: 97152 with 97151 (except 97152 HN together with 97151 HN); 97153 with 97155 (except 97153 HN together with 97155 HN) — DMAS adds that 97155 and 97153 may be billed together for supervision activities when the QHP is directing the technician in delivering treatment and the QHP, technician and youth are all present; 97154 and 97158 at the same time for different youth in the same group, with identical professional-level modifiers; 97153 at the same time for two technicians when the reason is documented in a service-authorized ISP; and services with the youth alongside family or group family training when delivered by different qualified staff. What is barred: an additional technician-level code alongside 97158 or 97154. Separately, ABA may not be authorized concurrently with Intensive In-Home, Mental Health Skill Building, Psychosocial Rehabilitation, Partial Hospitalization or Assertive Community Treatment, though short-term authorization overlaps are allowed during transitions.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      dailyLimits: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no per-day unit ceiling. Assessment codes 97151, 97152 and 0362T carry no service authorization and no unit limit, but may only be billed as part of an initial assessment or a full reassessment. Since dates of service 10/15/2025 every treatment code is authorized with its own predetermined number of units rather than bundled under 97155. Requests at or above 20 hours (80 units) a week must include an individualized schedule of activities that distinguishes therapeutic from recreational time — a general schedule of clinic-based activities is not sufficient. Group sizes follow CPT guidelines. In Residential Treatment Services settings, including therapeutic group homes and PRTFs, the payable ABA set narrows to 97151, 97154 (with modifier HN, HO or TF only), 97155, 97156 and 97157. Humana\'s PA list matches DMAS on 97151 and 97152 being authorization-free but adds 0362T to its PA list — request the authorization and note the DMAS rule in the request rather than litigating it on the back end.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
        ],
      },
      noteSignature: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: documentation must carry the initial assessment completed by the LBA, LABA or LMHP including the assessment instruments used, dates of service and face-to-face contacts, staff and participant names, and staff credentials and signatures. Treatment progress must be documented through daily data collection plus a weekly summary note, with graphical analysis of goals and objectives for those dates of service. Supervision is demonstrated by the contemporaneously dated signature of the licensed supervisor. The ISP must be reviewed at least every 30 calendar days — a progress note satisfies the review if it documents the discussion, any alterations, and the individual\'s response; the individual\'s signature is not required, and the 30-day review is held for audit rather than submitted.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      placeOfService: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA may be provided in home or community settings where the targeted behaviors are likely to occur, and in clinic settings — the setting must be justified in the ISP. School is the constrained one: ABA may only be provided in the school setting when the purpose is observation and collaboration by the QHP related to behavior and skill acquisition, not direct therapy, and only when authorized by the school, the parent and the provider and included in the ISP. Technician-level codes may not be billed for school observation and collaboration, and DMAS interprets school as any education setting, private or public; additional school ABA may be available under school health services through the local education agency. Services rendered primarily by a relative or guardian who is legally responsible for the youth\'s care are not covered.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      billAsProvider: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA providers must be enrolled with DMAS under the ABA provider types (PCT 156 or 456 with PS 903; PCT 020 or 023; PCT 256 with PS 104), licensed by the applicable Virginia Department of Health Professions board, and credentialed with the youth\'s Medicaid MCO for managed-care members. Every CPT code is billed with the staff modifier that identifies the professional providing the service: HN for an LABA, HO for an LBA, TF for an LMHP. QHP-level codes must be provided by an LBA or LMHP, with an LABA able to act as a QHP as determined by the supervising LBA under 18VAC85-150-120, and LMHP-Rs, LMHP-RPs and LMHP-Ss with completed ABA education and training able to provide them under the supervising LMHP. Technician-level codes may be delivered by an LMHP-R/RP/S under supervision, an LABA under an LBA, personnel supervised by an LBA or LABA under 18VAC85-150-10 et seq., personnel supervised by a Licensed Clinical Psychologist under § 54.1-3614, or by an LBA or LMHP acting as the technician — LBAs may bill technician-level codes with the appropriate modifier. Unlicensed personnel include but are not limited to RBTs; Virginia does not require the RBT credential.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: under 21 — Appendix D\'s ABA admission criteria state it as the first requirement, and the benefit rides EPSDT, so there is no hard hour cap beneath it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      dxRecency: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no recency window on the diagnosis. Appendix D admits on a current primary ICD diagnosis correlating to a DSM diagnosis, or on a provisional psychiatric diagnosis developed by an LMHP where no definitive diagnosis has been made — and DMAS states there is no timeframe for the use of a provisional psychiatric diagnosis, expecting the LBA to follow up with the youth\'s physician or other LMHPs as more information is gathered. What must stay current is the assessment: it is reviewed and updated at least annually by the LBA, LABA or LMHP, and continued-stay criteria test symptoms within the past 30 days.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: two different questions, and Appendix D answers both. The diagnosis: the youth must currently meet criteria for a primary ICD diagnosis that correlates to a DSM diagnosis, or have a provisional psychiatric diagnosis as developed by an LMHP — Appendix D does not restrict the benefit to autism or name a specialty list of diagnosing clinicians. The ABA assessment: it must be completed by an LBA, LABA or LMHP acting within scope (an LMHP-R, LMHP-RP or LMHP-S with completed education and training in ABA may complete it under the supervising LMHP), conducted in person with the youth and the family or caregivers, and an assessment completed by an LABA may be used only for ABA, not as a Comprehensive Needs Assessment for other services.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: the initial assessment must include a functional assessment using validated tools, completed by the LBA, LABA or LMHP within scope, and documentation must describe any assessment tools used. DMAS publishes no approved list — the QHP may use clinical judgement to choose the best assessments for the youth — so what is audited is that a validated instrument was used and named, not which one. One Humana deviation matters at the assessment step: unlike DMAS, Humana\'s own PA and notification list (eff. 7/1/2025) flags 0362T as prior-authorization-required, so a team-based assessment for a Humana member needs an authorization the state rule would not require.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
        ],
      },
      referral: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no physician order. DMAS retired the requirement for an order or letter recommending services signed by a physician, nurse practitioner or physician assistant — what replaced it is a notification duty: the QHP must notify the youth\'s primary care physician that the child is receiving ABA, providers must communicate the results of the assessment and treatment planning to the PCP, and care coordination with the PCP must be documented in the youth\'s record. Humana\'s behavioral-health access standard commits to an appointment within 5 business days of a coverage-criteria determination.',
        status: 'verified',
        cites: [
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Humana Healthy Horizons VA — BH provider resource guide', url: 'https://assets.humana.com/is/content/humana/VA_BH_Provider_Resource_Guidepdf' },
        ],
      },
      telehealth: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: initial assessments must be conducted in person with the youth and the family or caregivers. Beyond that, coverage of services delivered by telemedicine is governed by the Telehealth Services Supplement to the Mental Health Services manual, and the use of telemedicine must be documented in the ISP submitted with both the initial and the continued-stay authorization. Care coordination, data analysis and treatment-plan activities billed under 97151 or 97155 do not have to be provided face to face. MCO-contracted providers must consult their contracted MCO for that plan\'s telehealth policies.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Humana Healthy Horizons VA — PA and notification list', url: 'https://assets.humana.com/is/content/humana/VA%20Medicaid%20PALpdf' },
        ],
      },
      authTurnaround: {
        value:
          'Virginia Medicaid rule, applied by Humana Healthy Horizons in Virginia: since January 1, 2026 DMAS requires FFS and every Cardinal Care MCO to decide standard (non-urgent) requests within 7 calendar days of receipt and expedited requests within 72 hours; the 7-day clock can extend up to 14 calendar days if the member or provider asks, or if the extra time is justified in the member\'s interest to obtain more medical evidence. Humana\'s manual text says the same ("not to exceed 7 calendar days following receipt of the request"; expedited "no later than 72 hours after receipt"), though its summary tables still print 14 calendar days for nonurgent preservice — the 7-day DMAS rule controls. Timing from Appendix D: submit treatment requests (initial and continued stay) by the requested start date — "If submitted after the required time-frame, the begin date of authorization will be based on the date of receipt," so a late reauthorization leaves an unpaid gap.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Virginia — Cardinal Care Provider Manual (2025)', url: 'https://assets.humana.com/is/content/humana/VA_Provider_Manualpdf' },
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. Humana\'s manual: "Claims should be submitted to a patient\'s TPL coverage for payment before submitting to Humana. Humana reduces its payments based on TPL coverage payments made for covered services," and "All claims that involve other insurance must be accompanied by an explanation of benefits (EOB) or a remittance advice (RA) that clearly states how the claim was paid or the reason for denial." Providers are required to identify TPL coverage and should ask members for all insurance at the time of service; Humana\'s COB records can be checked on Availity. Humana\'s manual publishes no secondary-payer authorization exemption. Appendix D makes payment for every non-assessment ABA service conditional on service authorization ("Services other than assessment (97151, 97152 and 0362T) must be service authorized by the FFS service authorization contractor or MCO") and names no exemption for a secondary claim, so get the Medicaid authorization even when the commercial plan pays first. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Humana Healthy Horizons in Virginia — Cardinal Care Provider Manual (2025)', url: 'https://assets.humana.com/is/content/humana/VA_Provider_Manualpdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    faq: [
      { q: 'Does Humana Healthy Horizons in Virginia cover ABA?', a: 'Yes — it administers the Cardinal Care ABA benefit on DMAS criteria and standardized forms, having entered Virginia on July 1, 2025 as Molina\'s replacement.' },
      { q: 'What happened to Molina members in Virginia?', a: 'DMAS terminated Molina\'s contract effective June 30, 2025; members auto-transitioned to Humana with a 90-day plan-change window and authorizations honored at least 30 days. Verify plan identity on any inquiry that mentions Molina.' },
      { q: 'Does Humana require PA on ABA assessments?', a: 'Not on 97151/97152 — but unlike DMAS, its PA list flags 0362T as PA-required. Request the auth for 0362T rather than assuming the state rule carries.' },
    ],
  },

  'sentara-community-plan': {
    slug: 'sentara-community-plan',
    family: '',
    cardDesc: 'First to post the new DMAS units-per-code form; dedicated BCBA-change workflow, PAL lookup tool.',
    assessmentPA: {
      value: 'Not required — DMAS rule; Sentara\'s ABA forms cover treatment codes only',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
      ],
    },
    treatmentPA: {
      value: 'Required — new DMAS preservice form (posted for DOS 9/1/2025+); fax (844) 895-3231',
      status: 'verified',
      cites: [
        { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        { title: 'Sentara — BH authorization fax numbers and forms update (eff. 8/1/2025)', url: 'https://www.sentarahealthplans.com/en/providers/updates/behavioral-health-authorization-fax-numbers-and-forms' },
      ],
    },
    dxRequired: {
      value: 'NO \u2014 not autism-restricted, and not category-restricted either. DMAS Appendix D admits a youth under 21 who meets criteria for a primary ICD diagnosis correlating to a DSM diagnosis, OR who has a provisional psychiatric diagnosis developed by an LMHP when no definitive diagnosis has been made, plus at least two functional-impairment criteria. The ABA criteria name no diagnostic category list and never mention autism',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA), Admission Criteria p.24', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    payer: 'Sentara Community Plan (VA)',
    state: 'VA', kind: 'medicaid-mco', parent: 'Virginia Medicaid (DMAS)',
    pill: 'Payer Guide · Sentara Community Plan',
    h1: 'Sentara Community Plan ABA coverage (Cardinal Care MCO).',
    metaTitle: 'Sentara Community Plan (VA Medicaid) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Sentara Community Plan (formerly Optima/Virginia Premier) administers Virginia Medicaid ABA — the new DMAS units-per-code preservice form, fax and portal channels, the BCBA change-request workflow, and the PAL lookup tool.',
    intro: [
      'Sentara Community Plan — the Cardinal Care MCO formed from Optima Family Care and Virginia Premier — runs ABA as a pure pass-through of DMAS forms and criteria, and it was the first plan to post the new DMAS units-per-code preservice form (for dates of service September 1, 2025 onward, ahead of the statewide October 15 mandate). Its plan-specific value is workflow tooling: dedicated fax lines, a PA lookup tool, and a standing BCBA change-request form that most plans lack.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Cardinal Care MCO (ex-Optima Family Care / Virginia Premier)' },
      { label: 'Clinical rules', value: 'DMAS criteria + standardized forms, verbatim' },
      { label: 'Assessment auth', value: 'None — DMAS assessment codes are auth-free' },
      { label: 'Submission', value: 'Provider portal or BH fax (844) 895-3231 / (757) 963-9620' },
      { label: 'Supervisor changes', value: 'Dedicated BCBA Change Request Form (upd. 3/2026)' },
      { label: 'PA lookup', value: 'pal.sentarahealthplans.com' },
    ],
    sections: [
      {
        h2: 'How Sentara runs ABA authorization',
        body: [
          'Treatment requests use the DMAS preservice service-authorization form — the units-per-code version Sentara posted for dates of service September 1, 2025 and after — plus the matching continued-stay form. The form itself embeds the DMAS rules: units requested per CPT code, and the 20-hours/80-units threshold that triggers the individualized activity schedule. Its worked example models 2 hours/day × 5 days × 24 weeks — roughly 6-month authorization spans as the norm. Non-urgent behavioral-health authorizations fax to (844) 895-3231 or (757) 963-9620 (effective August 2025); behavioral-health provider services runs at (757) 552-7174 / (800) 648-8420, and the PAL lookup tool at pal.sentarahealthplans.com answers code-level questions.',
          'Two housekeeping notes: directory entries under "Optima" are stale — it\'s all Sentara Community Plan under Cardinal Care now — and supervisor changes have their own administrative workflow via the BCBA Change Request Form (updated March 2026), so a supervising-BCBA transition is paperwork, not a new authorization battle.',
        ],
        cites: [
          { title: 'Sentara — BH prior authorization forms for government plans', url: 'https://www.sentarahealthplans.com/en/providers/claims-authorizations/authorizations/behavioral-health/government' },
          { title: 'Sentara — DMAS ABA preservice SA request form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
          { title: 'Sentara — BH authorization fax numbers and forms update (eff. 8/1/2025)', url: 'https://www.sentarahealthplans.com/en/providers/updates/behavioral-health-authorization-fax-numbers-and-forms' },
        ],
      },
    ],
    collect: [
      { title: 'ASD diagnosis', desc: 'Then book the assessment — no authorization needed on assessment codes.' },
      { title: 'Units per CPT code', desc: 'Sentara\'s form is the units-per-code template — plan intensity code by code.' },
      { title: 'Weekly schedule (if ≥20 hrs)', desc: 'The 80-unit threshold triggers the activity-schedule requirement, embedded in the form.' },
      { title: 'Supervising BCBA on file', desc: 'Use the BCBA Change Request Form when supervision changes — don\'t let claims hit a stale name.' },
    ],
    sources: [
      { title: 'Sentara — BH prior authorization forms (government plans)', url: 'https://www.sentarahealthplans.com/en/providers/claims-authorizations/authorizations/behavioral-health/government' },
      { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
      { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
      { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
      { title: 'Sentara — BH authorization fax numbers and forms update (eff. 8/1/2025)', url: 'https://www.sentarahealthplans.com/en/providers/updates/behavioral-health-authorization-fax-numbers-and-forms' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: three separate floors. The LBA, LABA or LMHP must at a minimum observe the youth and supervise services monthly, with supervision documented as a review of progress notes and data plus dialogue with supervised staff about progress and the effectiveness of the ISP. Supervision of unlicensed staff must occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist, demonstrated by the contemporaneously dated signature of the licensed supervisor. Clinical supervision is required for services rendered by an LABA, LMHP-R, LMHP-RP or LMHP-S, consistent with the scope of practice set by the applicable Virginia Department of Health Professions board — on the nature of supervision DMAS defers to that board and to the BACB. Supervision time without the individual present is not billable; the technician rates were built to include it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: Appendix D publishes the combinations that may be billed at the same time: 97152 with 97151 (except 97152 HN together with 97151 HN); 97153 with 97155 (except 97153 HN together with 97155 HN) — DMAS adds that 97155 and 97153 may be billed together for supervision activities when the QHP is directing the technician in delivering treatment and the QHP, technician and youth are all present; 97154 and 97158 at the same time for different youth in the same group, with identical professional-level modifiers; 97153 at the same time for two technicians when the reason is documented in a service-authorized ISP; and services with the youth alongside family or group family training when delivered by different qualified staff. What is barred: an additional technician-level code alongside 97158 or 97154. Separately, ABA may not be authorized concurrently with Intensive In-Home, Mental Health Skill Building, Psychosocial Rehabilitation, Partial Hospitalization or Assertive Community Treatment, though short-term authorization overlaps are allowed during transitions.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      dailyLimits: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no per-day unit ceiling. Assessment codes 97151, 97152 and 0362T carry no service authorization and no unit limit, but may only be billed as part of an initial assessment or a full reassessment. Since dates of service 10/15/2025 every treatment code is authorized with its own predetermined number of units rather than bundled under 97155. Requests at or above 20 hours (80 units) a week must include an individualized schedule of activities that distinguishes therapeutic from recreational time — a general schedule of clinic-based activities is not sufficient. Group sizes follow CPT guidelines. In Residential Treatment Services settings, including therapeutic group homes and PRTFs, the payable ABA set narrows to 97151, 97154 (with modifier HN, HO or TF only), 97155, 97156 and 97157. Sentara was the first plan to post the DMAS units-per-code preservice form, for dates of service 9/1/2025 onward, ahead of the statewide 10/15/2025 mandate; its worked example models 2 hours a day across 5 days for 24 weeks, which puts roughly 6-month authorization spans as the practical norm.',
        status: 'verified',
        cites: [
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
        ],
      },
      noteSignature: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: documentation must carry the initial assessment completed by the LBA, LABA or LMHP including the assessment instruments used, dates of service and face-to-face contacts, staff and participant names, and staff credentials and signatures. Treatment progress must be documented through daily data collection plus a weekly summary note, with graphical analysis of goals and objectives for those dates of service. Supervision is demonstrated by the contemporaneously dated signature of the licensed supervisor. The ISP must be reviewed at least every 30 calendar days — a progress note satisfies the review if it documents the discussion, any alterations, and the individual\'s response; the individual\'s signature is not required, and the 30-day review is held for audit rather than submitted.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      placeOfService: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA may be provided in home or community settings where the targeted behaviors are likely to occur, and in clinic settings — the setting must be justified in the ISP. School is the constrained one: ABA may only be provided in the school setting when the purpose is observation and collaboration by the QHP related to behavior and skill acquisition, not direct therapy, and only when authorized by the school, the parent and the provider and included in the ISP. Technician-level codes may not be billed for school observation and collaboration, and DMAS interprets school as any education setting, private or public; additional school ABA may be available under school health services through the local education agency. Services rendered primarily by a relative or guardian who is legally responsible for the youth\'s care are not covered.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      billAsProvider: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA providers must be enrolled with DMAS under the ABA provider types (PCT 156 or 456 with PS 903; PCT 020 or 023; PCT 256 with PS 104), licensed by the applicable Virginia Department of Health Professions board, and credentialed with the youth\'s Medicaid MCO for managed-care members. Every CPT code is billed with the staff modifier that identifies the professional providing the service: HN for an LABA, HO for an LBA, TF for an LMHP. QHP-level codes must be provided by an LBA or LMHP, with an LABA able to act as a QHP as determined by the supervising LBA under 18VAC85-150-120, and LMHP-Rs, LMHP-RPs and LMHP-Ss with completed ABA education and training able to provide them under the supervising LMHP. Technician-level codes may be delivered by an LMHP-R/RP/S under supervision, an LABA under an LBA, personnel supervised by an LBA or LABA under 18VAC85-150-10 et seq., personnel supervised by a Licensed Clinical Psychologist under § 54.1-3614, or by an LBA or LMHP acting as the technician — LBAs may bill technician-level codes with the appropriate modifier. Unlicensed personnel include but are not limited to RBTs; Virginia does not require the RBT credential. Sentara runs supervisor changes as paperwork rather than a new authorization: it maintains a dedicated BCBA Change Request Form (updated 3/2026), which is the opposite of the NPI-matching rule at Aetna Better Health.',
        status: 'verified',
        cites: [
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: under 21 — Appendix D\'s ABA admission criteria state it as the first requirement, and the benefit rides EPSDT, so there is no hard hour cap beneath it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      dxRecency: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no recency window on the diagnosis. Appendix D admits on a current primary ICD diagnosis correlating to a DSM diagnosis, or on a provisional psychiatric diagnosis developed by an LMHP where no definitive diagnosis has been made — and DMAS states there is no timeframe for the use of a provisional psychiatric diagnosis, expecting the LBA to follow up with the youth\'s physician or other LMHPs as more information is gathered. What must stay current is the assessment: it is reviewed and updated at least annually by the LBA, LABA or LMHP, and continued-stay criteria test symptoms within the past 30 days.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: two different questions, and Appendix D answers both. The diagnosis: the youth must currently meet criteria for a primary ICD diagnosis that correlates to a DSM diagnosis, or have a provisional psychiatric diagnosis as developed by an LMHP — Appendix D does not restrict the benefit to autism or name a specialty list of diagnosing clinicians. The ABA assessment: it must be completed by an LBA, LABA or LMHP acting within scope (an LMHP-R, LMHP-RP or LMHP-S with completed education and training in ABA may complete it under the supervising LMHP), conducted in person with the youth and the family or caregivers, and an assessment completed by an LABA may be used only for ABA, not as a Comprehensive Needs Assessment for other services.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: the initial assessment must include a functional assessment using validated tools, completed by the LBA, LABA or LMHP within scope, and documentation must describe any assessment tools used. DMAS publishes no approved list — the QHP may use clinical judgement to choose the best assessments for the youth — so what is audited is that a validated instrument was used and named, not which one.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      referral: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no physician order. DMAS retired the requirement for an order or letter recommending services signed by a physician, nurse practitioner or physician assistant — what replaced it is a notification duty: the QHP must notify the youth\'s primary care physician that the child is receiving ABA, providers must communicate the results of the assessment and treatment planning to the PCP, and care coordination with the PCP must be documented in the youth\'s record.',
        status: 'verified',
        cites: [
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      telehealth: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: initial assessments must be conducted in person with the youth and the family or caregivers. Beyond that, coverage of services delivered by telemedicine is governed by the Telehealth Services Supplement to the Mental Health Services manual, and the use of telemedicine must be documented in the ISP submitted with both the initial and the continued-stay authorization. Care coordination, data analysis and treatment-plan activities billed under 97151 or 97155 do not have to be provided face to face. MCO-contracted providers must consult their contracted MCO for that plan\'s telehealth policies.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'Sentara — DMAS ABA preservice SA form (DOS 9/1/2025+)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/c4fe04b9052647fb8655708609cc9e7f?v=4adf8dd1' },
        ],
      },
      authTurnaround: {
        value:
          'Virginia Medicaid rule, applied by Sentara Community Plan: since January 1, 2026 DMAS requires FFS and every Cardinal Care MCO to decide standard (non-urgent) requests within 7 calendar days of receipt and expedited requests within 72 hours; the 7-day clock can extend up to 14 calendar days if the member or provider asks, or if the extra time is justified in the member\'s interest to obtain more medical evidence. Sentara\'s 2026 manual states the same: standard decisions "not to exceed seven calendar days following receipt of the request for service," expedited "no later than 72 hours after receipt of the request." Timing from Appendix D: submit treatment requests (initial and continued stay) by the requested start date — "If submitted after the required time-frame, the begin date of authorization will be based on the date of receipt," so a late reauthorization leaves an unpaid gap.',
        status: 'verified',
        cites: [
          { title: 'Sentara Health Plans — Virginia Medicaid Program Provider Manual (2026)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/166702e707ad4460995f61992a6be8e0?v=2c7ff490' },
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. Sentara\'s manual: "If a Sentara Health Plans program member is identified as having a commercial product, the provider must send the initial claim to the commercial plan for payment… Medicaid is always the payor of last resort." Sentara is the one Virginia MCO that writes down the secondary-authorization rule: "Sentara Health Plans does not require service authorization when acting as the secondary payer except" when the primary payer does not cover the service, or the member has exhausted the primary\'s benefit — in either case Sentara becomes the primary payer and its service authorization is required. So: covered by the commercial plan → the commercial plan\'s authorization, no Sentara SA; commercial plan excludes ABA or the benefit is used up → Sentara SA before services. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'Sentara Health Plans — Virginia Medicaid Program Provider Manual (2026)', url: 'https://shc-p-001.sitecorecontenthub.cloud/api/public/content/166702e707ad4460995f61992a6be8e0?v=2c7ff490' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    faq: [
      { q: 'Does Sentara Community Plan cover ABA?', a: 'Yes — Virginia\'s Cardinal Care ABA benefit on DMAS criteria and forms: no authorization on assessment codes, treatment authorized with units per CPT code on the new DMAS preservice form.' },
      { q: 'Is Optima Family Care the same as Sentara Community Plan?', a: 'Yes — Optima Family Care and Virginia Premier merged into Sentara Community Plan under the Cardinal Care rebrand. Anything still labeled Optima is stale.' },
      { q: 'How do I change the supervising BCBA on a Sentara authorization?', a: 'Use the plan\'s dedicated BCBA Change Request Form (updated March 2026) — a standing administrative workflow rather than a new authorization.' },
    ],
  },

  'unitedhealthcare-community-plan-virginia': {
    slug: 'unitedhealthcare-community-plan-virginia',
    family: 'unitedhealthcare',
    cardDesc: 'DMAS criteria with ABA carved to Optum: Provider Express submission, separate credentialing.',
    assessmentPA: {
      value: 'Not required — DMAS rule; assessment codes are auth-free',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — DMAS service-specific forms, submitted via fax or Provider Express (not the standard UHC PA tool)',
      status: 'verified',
      cites: [
        { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        { title: 'UHC Community Plan VA — PA requirements (eff. 3/1/2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/va/prior-authorization-and-notification/VA-UHCCP-Prior-Authorization-Effective-3-1-2025.pdf' },
      ],
    },
    dxRequired: {
      value: 'NO \u2014 not autism-restricted, and not category-restricted either. DMAS Appendix D admits a youth under 21 who meets criteria for a primary ICD diagnosis correlating to a DSM diagnosis, OR who has a provisional psychiatric diagnosis developed by an LMHP when no definitive diagnosis has been made, plus at least two functional-impairment criteria. The ABA criteria name no diagnostic category list and never mention autism',
      status: 'verified',
      cites: [
        { title: 'DMAS — MHS manual Appendix D (ABA), Admission Criteria p.24', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      ],
    },
    payer: 'UnitedHealthcare Community Plan of Virginia',
    state: 'VA', kind: 'medicaid-mco', parent: 'Virginia Medicaid (DMAS)',
    pill: 'Payer Guide · UHC Community Plan (VA)',
    h1: 'UnitedHealthcare Community Plan of Virginia ABA coverage (Cardinal Care MCO).',
    metaTitle: 'UHC Community Plan Virginia (Cardinal Care) ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How UnitedHealthcare Community Plan administers Virginia Medicaid ABA — DMAS criteria and service-specific forms with the behavioral benefit carved to Optum, Provider Express submission, and separate credentialing.',
    intro: [
      'UnitedHealthcare Community Plan of Virginia applies the same DMAS criteria and service-specific forms as every Cardinal Care MCO — its provider manual says so directly — but routes the work through Optum Behavioral Health. ABA is the one service its PA list steers away from the standard UHC authorization tool: submissions go by fax or through Optum\'s Provider Express portal, and ABA credentialing runs through the Optum network rather than UHC medical.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Cardinal Care MCO (BH administered by Optum)' },
      { label: 'Clinical rules', value: 'DMAS criteria + service-specific forms (not Optum\'s national ABA guideline)' },
      { label: 'Assessment auth', value: 'None — DMAS assessment codes are auth-free' },
      { label: 'Submission', value: 'Fax or Provider Express — not the standard UHC PA&N tool' },
      { label: 'Credentialing', value: 'Optum network via providerexpress.com, plus DMAS PRSS' },
      { label: 'Phone', value: '(844) 284-0146' },
    ],
    sections: [
      {
        h2: 'The Optum layer on a DMAS base',
        body: [
          'The 2026 provider manual is explicit that all mental-health services — ABA included — require registration or authorization using a DMAS service-specific form, which keeps the clinical criteria identical statewide; Optum\'s national ABA guideline does not override the Virginia rules. What Optum changes is the plumbing: the Cardinal Care PA requirements list (effective March 2025) singles ABA out for submission "via fax or Provider Express," bypassing the standard UHC Provider Portal PA&N tool, and ABA providers credential through Optum\'s network at providerexpress.com (plus mandatory DMAS PRSS enrollment). No referral is needed for outpatient behavioral health, and the manual publishes urgent-versus-standard authorization turnaround tables worth setting family expectations against.',
        ],
        cites: [
          { title: 'UHC Community Plan VA — PA requirements (eff. 3/1/2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/va/prior-authorization-and-notification/VA-UHCCP-Prior-Authorization-Effective-3-1-2025.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual (BH chapter)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'ASD diagnosis', desc: 'Then book the assessment — no authorization needed on assessment codes.' },
      { title: 'Units per CPT code', desc: 'DMAS\'s per-code rule applies; submit on the DMAS service-specific form.' },
      { title: 'Optum credentialing status', desc: 'ABA runs on the Optum network — separate from UHC medical, plus DMAS PRSS.' },
      { title: 'Submission channel', desc: 'Fax or Provider Express for ABA — not the standard UHC PA&N tool.' },
    ],
    sources: [
      { title: 'UHC Community Plan VA — PA requirements (eff. 3/1/2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/va/prior-authorization-and-notification/VA-UHCCP-Prior-Authorization-Effective-3-1-2025.pdf' },
      { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
      { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
      { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
      { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: three separate floors. The LBA, LABA or LMHP must at a minimum observe the youth and supervise services monthly, with supervision documented as a review of progress notes and data plus dialogue with supervised staff about progress and the effectiveness of the ISP. Supervision of unlicensed staff must occur at least twice a month by the LBA, LABA or Licensed Clinical Psychologist, demonstrated by the contemporaneously dated signature of the licensed supervisor. Clinical supervision is required for services rendered by an LABA, LMHP-R, LMHP-RP or LMHP-S, consistent with the scope of practice set by the applicable Virginia Department of Health Professions board — on the nature of supervision DMAS defers to that board and to the BACB. Supervision time without the individual present is not billable; the technician rates were built to include it.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      concurrentBilling: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: Appendix D publishes the combinations that may be billed at the same time: 97152 with 97151 (except 97152 HN together with 97151 HN); 97153 with 97155 (except 97153 HN together with 97155 HN) — DMAS adds that 97155 and 97153 may be billed together for supervision activities when the QHP is directing the technician in delivering treatment and the QHP, technician and youth are all present; 97154 and 97158 at the same time for different youth in the same group, with identical professional-level modifiers; 97153 at the same time for two technicians when the reason is documented in a service-authorized ISP; and services with the youth alongside family or group family training when delivered by different qualified staff. What is barred: an additional technician-level code alongside 97158 or 97154. Separately, ABA may not be authorized concurrently with Intensive In-Home, Mental Health Skill Building, Psychosocial Rehabilitation, Partial Hospitalization or Assertive Community Treatment, though short-term authorization overlaps are allowed during transitions.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      dailyLimits: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no per-day unit ceiling. Assessment codes 97151, 97152 and 0362T carry no service authorization and no unit limit, but may only be billed as part of an initial assessment or a full reassessment. Since dates of service 10/15/2025 every treatment code is authorized with its own predetermined number of units rather than bundled under 97155. Requests at or above 20 hours (80 units) a week must include an individualized schedule of activities that distinguishes therapeutic from recreational time — a general schedule of clinic-based activities is not sufficient. Group sizes follow CPT guidelines. In Residential Treatment Services settings, including therapeutic group homes and PRTFs, the payable ABA set narrows to 97151, 97154 (with modifier HN, HO or TF only), 97155, 97156 and 97157.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — ABA service authorization update (eff. 10/15/2025)', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/service-authorization-update-applied-behavior-analysis-aba-effective-october-15-2025' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      noteSignature: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: documentation must carry the initial assessment completed by the LBA, LABA or LMHP including the assessment instruments used, dates of service and face-to-face contacts, staff and participant names, and staff credentials and signatures. Treatment progress must be documented through daily data collection plus a weekly summary note, with graphical analysis of goals and objectives for those dates of service. Supervision is demonstrated by the contemporaneously dated signature of the licensed supervisor. The ISP must be reviewed at least every 30 calendar days — a progress note satisfies the review if it documents the discussion, any alterations, and the individual\'s response; the individual\'s signature is not required, and the 30-day review is held for audit rather than submitted.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA may be provided in home or community settings where the targeted behaviors are likely to occur, and in clinic settings — the setting must be justified in the ISP. School is the constrained one: ABA may only be provided in the school setting when the purpose is observation and collaboration by the QHP related to behavior and skill acquisition, not direct therapy, and only when authorized by the school, the parent and the provider and included in the ISP. Technician-level codes may not be billed for school observation and collaboration, and DMAS interprets school as any education setting, private or public; additional school ABA may be available under school health services through the local education agency. Services rendered primarily by a relative or guardian who is legally responsible for the youth\'s care are not covered.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: ABA providers must be enrolled with DMAS under the ABA provider types (PCT 156 or 456 with PS 903; PCT 020 or 023; PCT 256 with PS 104), licensed by the applicable Virginia Department of Health Professions board, and credentialed with the youth\'s Medicaid MCO for managed-care members. Every CPT code is billed with the staff modifier that identifies the professional providing the service: HN for an LABA, HO for an LBA, TF for an LMHP. QHP-level codes must be provided by an LBA or LMHP, with an LABA able to act as a QHP as determined by the supervising LBA under 18VAC85-150-120, and LMHP-Rs, LMHP-RPs and LMHP-Ss with completed ABA education and training able to provide them under the supervising LMHP. Technician-level codes may be delivered by an LMHP-R/RP/S under supervision, an LABA under an LBA, personnel supervised by an LBA or LABA under 18VAC85-150-10 et seq., personnel supervised by a Licensed Clinical Psychologist under § 54.1-3614, or by an LBA or LMHP acting as the technician — LBAs may bill technician-level codes with the appropriate modifier. Unlicensed personnel include but are not limited to RBTs; Virginia does not require the RBT credential. The plan\'s Cardinal Care PA requirements list singles ABA out for submission via fax or Optum\'s Provider Express rather than the standard UHC Provider Portal PA and notification tool, and ABA providers credential through the Optum network at providerexpress.com in addition to mandatory DMAS PRSS enrolment. No referral is needed for outpatient behavioral health.',
        status: 'verified',
        cites: [
          { title: 'UHC Community Plan VA — PA requirements (eff. 3/1/2025)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/commplan/va/prior-authorization-and-notification/VA-UHCCP-Prior-Authorization-Effective-3-1-2025.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: under 21 — Appendix D\'s ABA admission criteria state it as the first requirement, and the benefit rides EPSDT, so there is no hard hour cap beneath it. UnitedHealthcare\'s 2026 provider manual is explicit that all mental-health services including ABA require registration or authorization using a DMAS service-specific form, and Optum\'s national ABA guideline does not override the Virginia rules — Optum is the plumbing, not a second rulebook.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      dxRecency: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no recency window on the diagnosis. Appendix D admits on a current primary ICD diagnosis correlating to a DSM diagnosis, or on a provisional psychiatric diagnosis developed by an LMHP where no definitive diagnosis has been made — and DMAS states there is no timeframe for the use of a provisional psychiatric diagnosis, expecting the LBA to follow up with the youth\'s physician or other LMHPs as more information is gathered. What must stay current is the assessment: it is reviewed and updated at least annually by the LBA, LABA or LMHP, and continued-stay criteria test symptoms within the past 30 days. UnitedHealthcare\'s 2026 provider manual is explicit that all mental-health services including ABA require registration or authorization using a DMAS service-specific form, and Optum\'s national ABA guideline does not override the Virginia rules — Optum is the plumbing, not a second rulebook.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      diagnosingProviders: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: two different questions, and Appendix D answers both. The diagnosis: the youth must currently meet criteria for a primary ICD diagnosis that correlates to a DSM diagnosis, or have a provisional psychiatric diagnosis as developed by an LMHP — Appendix D does not restrict the benefit to autism or name a specialty list of diagnosing clinicians. The ABA assessment: it must be completed by an LBA, LABA or LMHP acting within scope (an LMHP-R, LMHP-RP or LMHP-S with completed education and training in ABA may complete it under the supervising LMHP), conducted in person with the youth and the family or caregivers, and an assessment completed by an LABA may be used only for ABA, not as a Comprehensive Needs Assessment for other services. UnitedHealthcare\'s 2026 provider manual is explicit that all mental-health services including ABA require registration or authorization using a DMAS service-specific form, and Optum\'s national ABA guideline does not override the Virginia rules — Optum is the plumbing, not a second rulebook.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: the initial assessment must include a functional assessment using validated tools, completed by the LBA, LABA or LMHP within scope, and documentation must describe any assessment tools used. DMAS publishes no approved list — the QHP may use clinical judgement to choose the best assessments for the youth — so what is audited is that a validated instrument was used and named, not which one. UnitedHealthcare\'s 2026 provider manual is explicit that all mental-health services including ABA require registration or authorization using a DMAS service-specific form, and Optum\'s national ABA guideline does not override the Virginia rules — Optum is the plumbing, not a second rulebook.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      referral: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: no physician order. DMAS retired the requirement for an order or letter recommending services signed by a physician, nurse practitioner or physician assistant — what replaced it is a notification duty: the QHP must notify the youth\'s primary care physician that the child is receiving ABA, providers must communicate the results of the assessment and treatment planning to the PCP, and care coordination with the PCP must be documented in the youth\'s record. UnitedHealthcare\'s 2026 provider manual is explicit that all mental-health services including ABA require registration or authorization using a DMAS service-specific form, and Optum\'s national ABA guideline does not override the Virginia rules — Optum is the plumbing, not a second rulebook.',
        status: 'verified',
        cites: [
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      telehealth: {
        value:
          'Follows the Virginia Medicaid (DMAS) rule: initial assessments must be conducted in person with the youth and the family or caregivers. Beyond that, coverage of services delivered by telemedicine is governed by the Telehealth Services Supplement to the Mental Health Services manual, and the use of telemedicine must be documented in the ISP submitted with both the initial and the continued-stay authorization. Care coordination, data analysis and treatment-plan activities billed under 97151 or 97155 do not have to be provided face to face. MCO-contracted providers must consult their contracted MCO for that plan\'s telehealth policies. UnitedHealthcare\'s 2026 provider manual is explicit that all mental-health services including ABA require registration or authorization using a DMAS service-specific form, and Optum\'s national ABA guideline does not override the Virginia rules — Optum is the plumbing, not a second rulebook.',
        status: 'verified',
        cites: [
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'UHC Community Plan of Virginia — 2026 provider manual', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Virginia Medicaid rule, applied by UnitedHealthcare Community Plan of Virginia: since January 1, 2026 DMAS requires FFS and every Cardinal Care MCO to decide standard (non-urgent) requests within 7 calendar days of receipt and expedited requests within 72 hours; the 7-day clock can extend up to 14 calendar days if the member or provider asks, or if the extra time is justified in the member\'s interest to obtain more medical evidence. UHC\'s 2026 manual states "Standard – As soon as the member\'s health condition requires, not to exceed 7 calendar days following the request for service" and expedited "no later than 72 hours" — but its behavioral health authorization table still lists 14 calendar days for non-urgent pre-service; the DMAS 7-day rule controls. Timing from Appendix D: submit treatment requests (initial and continued stay) by the requested start date — "If submitted after the required time-frame, the begin date of authorization will be based on the date of receipt," so a late reauthorization leaves an unpaid gap.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of Virginia — Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
          { title: 'DMAS bulletin — Interoperability and Prior Authorization Final Rule implementation update', url: 'https://vamedicaid.dmas.virginia.gov/bulletin/interoperability-and-prior-authorization-final-rule-implementation-update' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value:
          'Medicaid pays last. UHC\'s manual: "UnitedHealthcare Community Plan is, by law, the payer of last resort for eligible members. Therefore, you must bill and obtain an explanation of benefits (EOB) from any other insurance or health care coverage resource before billing UnitedHealthcare Community Plan," and "When billing UnitedHealthcare Community Plan, submit the primary payer\'s Explanation of Benefits or remittance advice with the claim." Third-party claim deadlines are set in your Agreement. The manual publishes no secondary-payer authorization exemption. Appendix D makes payment for every non-assessment ABA service conditional on service authorization ("Services other than assessment (97151, 97152 and 0362T) must be service authorized by the FFS service authorization contractor or MCO") and names no exemption for a secondary claim, so get the Medicaid authorization even when the commercial plan pays first. TRICARE and CHAMPVA both pay ahead of Medicaid: TRICARE rules state "Medicaid is not a double coverage plan. In any double coverage situation involving Medicaid, CHAMPUS is always the primary payer," and CHAMPVA "assumes primary payer status" over Medicaid.',
        status: 'verified',
        cites: [
          { title: 'UnitedHealthcare Community Plan of Virginia — Care Provider Manual (2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/comm-plan/VA-UHCCP-Care-Provider-Manual.pdf' },
          { title: 'DMAS — Project BRAVO ABA FAQ', url: 'https://www.dmas.virginia.gov/media/4271/project-bravo-services-faqs-aba.pdf' },
          { title: 'DMAS — MHS manual Appendix D (ABA)', url: 'https://vamedicaid.dmas.virginia.gov/sites/default/files/2025-07/MHS%20-%20Appendix%20D%20(updated%207.17.25)_Final.pdf' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.272 — CHAMPVA benefit limitations; Medicaid exception (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.272' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare Community Plan of Virginia cover ABA?', a: 'Yes — on DMAS criteria and service-specific forms, with the behavioral benefit administered by Optum. Assessment codes need no authorization; treatment authorizations go by fax or Provider Express.' },
      { q: 'Do I use the standard UHC portal for Virginia ABA authorizations?', a: 'No — the plan\'s PA list routes ABA specifically to fax or Optum\'s Provider Express, unlike its other services.' },
      { q: 'What credentialing does UHC Virginia ABA require?', a: 'Optum behavioral-network credentialing via providerexpress.com plus DMAS PRSS enrollment — a different path than UHC medical.' },
    ],
  },

  'aetna-virginia': {
    slug: 'aetna-virginia',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + the Va. Code § 38.2-3418.17 mandate layer.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'unverified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
      verifyVia: 'Aetna\'s Virginia participating-provider precertification list via Availity. CPB 0554 (read in full 9/17/2026) contains no precertification or prior-authorization language at all — it is a coverage/medical-necessity bulletin — so the “precertification required, form GR-69017-4” answer cannot be sourced to it.',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'unverified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
      verifyVia: 'Aetna\'s Virginia participating-provider precertification list via Availity. CPB 0554 (read in full 9/17/2026) contains no precertification or prior-authorization language at all — it is a coverage/medical-necessity bulletin — so the “precertification required, form GR-69017-4” answer cannot be sourced to it.',
      blocker: 'document',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only (F84.0\u2013F84.9); ABA for other diagnoses considered experimental',
      status: 'verified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    payer: 'Aetna in Virginia',
    state: 'VA', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Virginia',
    h1: 'Aetna ABA coverage in Virginia: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Virginia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Virginia families — the national clinical policy, prior authorization, the Va. Code § 38.2-3418.17 mandate (ages, caps, exemptions), Virginia behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Virginia, a Aetna card means three layers at once: the carrier\'s national clinical policy, Virginia\'s autism insurance mandate (Va. Code § 38.2-3418.17), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Va. Code § 38.2-3418.17' },
      { label: 'Mandate age', value: 'Any age (since 1/1/2020, HB 2577)' },
      { label: 'Mandate caps', value: '$35,000/yr ABA cap in statute (parity-limited)' },
      { label: 'Exempt from mandate', value: 'Short-term/limited policies; self-funded ERISA' },
      { label: 'Licensure', value: 'VA Licensed Behavior Analyst (Board of Medicine)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Virginia',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Virginia is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Aetna guide; this page covers what changes in Virginia.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Virginia mandate: what it guarantees (and doesn\'t)',
        body: [
          'Virginia’s mandate covers individual and group policies and HMO plans, and since January 1, 2020 it applies at any age — the old age caps were removed by 2019’s HB 2577. ABA is subject to an annual maximum benefit of $35,000 unless the insurer elects more (still in the current statute), must be provided or supervised by a behavior analyst licensed by the Board of Medicine, and the prescriber must be independent of the ABA provider. Self-funded ERISA plans are exempt by preemption, and the $35K cap is a quantitative limit of doubtful MHPAEA enforceability for large-group plans.',
        ],
        cites: [
      { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Autism Speaks — Virginia state-regulated coverage', url: 'https://www.autismspeaks.org/virginia-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'Aetna Medicaid in Virginia',
        body: [
          'A family saying “we have Aetna” in Virginia may actually be on the carrier’s Medicaid plan — Aetna Better Health of Virginia — which follows the state Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in Virginia',
        body: [
          'Virginia requires a Board of Medicine license to practice as a behavior analyst (Va. Code § 54.1-2957.16, built on BACB certification) — and the mandate itself conditions ABA coverage on delivery or supervision by a licensed behavior analyst, so licensure is a coverage requirement, not just a credentialing one. On rates: Aetna does not publish commercial ABA fee schedules for Virginia (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. Aetna Better Health of Virginia (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Autism Speaks — Virginia state-regulated coverage', url: 'https://www.autismspeaks.org/virginia-state-regulated-insurance-coverage' },
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
      { title: '18VAC85-150-120 — supervisory responsibilities', url: 'https://www.law.cornell.edu/regulations/virginia/18VAC85-150-120' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'CPB 0554 sets no supervision ratio. In Virginia the binding floor is licensure plus the mandate: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Virginia Board of Medicine (Va. Code § 54.1-2957.16), so licensure is a coverage requirement, not merely a credentialing one, and the Board\'s rules at 18VAC85-150-120 make the LBA ultimately responsible for care under supervision and require a written supervisory agreement with each LABA.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
          { title: '18VAC85-150-120 — supervisory responsibilities', url: 'https://www.law.cornell.edu/regulations/virginia/18VAC85-150-120' },
        ],
      },
      concurrentBilling: {
        value:
          'Not addressed in CPB 0554 or CPB 0648; concurrent-billing edits live in Aetna\'s reimbursement and code-editing policies rather than its clinical bulletins.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
        verifyVia: 'Aetna\'s commercial reimbursement/code-editing policies via Availity, or provider relations.',
        blocker: 'document',
      },
      dailyLimits: {
        value:
          'No per-day unit ceiling is published. Virginia bars visit limits outright but keeps a dollar cap: ABA is subject to a $35,000 annual maximum benefit unless the insurer elects to provide more — a quantitative treatment limit whose enforceability against a large-group plan is a parity question worth raising rather than conceding.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'A live benefits verification — whether the plan actually applies the $35,000 maximum, and any plan-level limits outside the mandate.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not addressed in CPB 0554 or CPB 0648.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
        verifyVia: 'Aetna provider relations or the participating-provider agreement — the clinical bulletins carry no documentation or signature standard.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'CPB 0554 describes ABA as evaluating observable behavior within relevant settings including the home, school and community but sets no place-of-service restriction; CPB 0648 notes many Aetna plans exclude coverage of educational services and may exclude developmental or intelligence testing in educational settings, making the school boundary a benefit-exclusion question.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
        verifyVia: 'A live benefits verification — the educational-services exclusion is written into the plan document, not the clinical policy.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Not addressed in Aetna\'s clinical bulletins, but Virginia constrains who the claim can rest on: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Aetna\'s national policy sets no age limit. Any age. Virginia\'s mandate has applied to individuals of any age since 1/1/2020 — 2019\'s HB 2577 removed the old age-2 floor as well as the upper limit — for individual and group policies and HMO contracts, extended to the individual and small group markets for policies delivered, issued, reissued or extended on or after 1/1/2021. ABA remains subject to a $35,000 annual maximum benefit unless the insurer elects more, with no visit limits; as a quantitative treatment limit on a mental-health benefit that cap is a live parity question for large-group plans rather than a settled rule. Self-funded ERISA plans sit outside the statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'A live benefits verification — funding type decides whether the mandate applies at all.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Neither CPB 0554 nor CPB 0648 states a recency window on the ASD diagnosis, and the Virginia mandate sets none. What Virginia does date is review: the insurer may review the treatment plan not more than once every 12 months absent agreement with the treating physician or psychologist — twice as generous as Aetna\'s usual roughly 6-month reauthorization cadence, on plans the statute reaches.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'Aetna precertification (form GR-69017-4) via Availity, and the plan document for any plan-specific evaluation-currency rule.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'CPB 0648 requires the evaluation to be performed by the appropriate certified or licensed health care professional, naming board certified behavior analyst, developmental pediatrician, neurologist, occupational therapist, physical therapist, primary care provider, psychiatrist, psychologist, and speech-language pathologist/audiologist. Virginia narrows it. Virginia writes the gate into the benefit itself: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider. The treatment plan is defined as one developed by a licensed physician or licensed psychologist following a comprehensive evaluation or reevaluation performed consistently with the most recent clinical report or recommendation of the AAP or AACAP, and treatment must be prescribed or ordered by a licensed physician or psychologist who determines it medically necessary. A referral written by a clinician inside your own practice can fail the independence test.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
      diagnosticTools: {
        value:
          'CPB 0648 names the instruments it treats as medically necessary components of testing for the diagnosis of pervasive developmental disorders: the ADI-R, the ADOS-2, the CARS-2 and the Asperger Syndrome Diagnostic Scale. It does not say whether all four or a subset are required. The Virginia statute names no instrument but requires the comprehensive evaluation behind the treatment plan to be performed consistently with the most recent AAP or AACAP clinical report or recommendation.',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
      referral: {
        value:
          'Yes, and it is statutory rather than a carrier rule: treatment must be prescribed or ordered by a licensed physician or licensed psychologist who determines the care medically necessary, and that prescribing practitioner must be independent of the ABA provider. The insurer may review the treatment plan not more than once every 12 months unless the insurer and the individual\'s licensed physician or psychologist agree more frequent review is necessary, with the cost of any such review covered under the policy. Aetna separately requires precertification on form GR-69017-4 for both assessment and treatment.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        ],
      },
      telehealth: {
        value:
          'Neither CPB 0554 nor CPB 0648 addresses telehealth delivery of ABA, and the Virginia mandate is silent on modality.',
        status: 'unverified',
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
        verifyVia: 'Aetna provider services or the plan document — CPB 0554 and CPB 0648 are silent on remote delivery of ABA codes.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Virginia plans: Virginia\'s utilization-review statute requires the entity to "communicate its utilization review decision no later than two business days after receipt by the entity of all information necessary to complete the review" — the clock starts only once the file is complete. Self-funded (ERISA) plans are excluded from that article and follow the federal claims rule instead: a pre-service decision within 15 days of receipt (one 15-day extension allowed, with notice; if the extension is for missing information you get at least 45 days to supply it) and an urgent-care decision within 72 hours; a request to extend an ongoing course of treatment that is urgent is decided within 24 hours if made at least 24 hours before the current authorization expires. Aetna\'s office manual and ABA medical-necessity guide publish no ABA-specific decision clock.',
        status: 'plan-dependent',
        cites: [
          { title: 'Va. Code § 32.1-137.9 — utilization review standards (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.9/' },
          { title: 'Va. Code § 32.1-137.8 — application; ERISA-exempt plans excluded (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.8/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'Benefits verification: ask whether the plan is fully insured (Virginia UR statute applies) or self-funded ERISA (federal 15-day/72-hour rule), and the carrier\'s turnaround for its behavioral health reviewer.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Aetna states it coordinates "as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member\'s plan," using the NAIC order-of-benefit rules — including the "Dependent Child/Parents Not Separated or Divorced Rule (Birthday Rule)" and the separated/divorced rule. Many self-funded plans use maintenance of benefits, where the secondary plan pays nothing if the primary paid at least what it would have. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last. When the child has two parents\' plans, the plan\'s own coordination-of-benefits provision decides the order — a self-funded plan writes its own rules. For Virginia HMO contracts, 14VAC5-211-80 lets the plan coordinate but says it "shall not be relieved of its duty to provide a covered health care service" because of other coverage, must "provide or arrange for the service first and then, at its option, seek coordination of benefits," and "Until a coordination of benefits determination is made, the enrollee shall not be held liable."',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Office manual for health care professionals (coordination of benefits)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: '14VAC5-211-80 — HMO coordination of benefits (Virginia LIS)', url: 'https://law.lis.virginia.gov/admincode/title14/agency5/chapter211/section80/' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
        ],
        verifyVia: 'Benefits verification with each plan: which is primary for the child (order-of-benefits rule, custody/court order), and whether the secondary plan needs its own authorization.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Virginia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Virginia\'s mandate (Va. Code § 38.2-3418.17) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Virginia autism mandate require?', a: 'Virginia’s mandate covers individual and group policies and HMO plans, and since January 1, 2020 it applies at any age — the old age caps were removed by 2019’s HB 2577. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Aetna pay for ABA in Virginia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Virginia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-virginia': {
    slug: 'cigna-virginia',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + the Va. Code § 38.2-3418.17 mandate layer.',
    payer: 'Cigna / Evernorth in Virginia',
    assessmentPA: {
      value: 'Depends on funding type — EN0499\'s no-PA-on-97151/97152/0362T fast path reaches self-funded (ASO) plans only; Virginia fully-insured business is carved out of EN0499, so the plan document and the state mandate govern',
      status: 'plan-dependent',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
      verifyVia: 'A live benefits verification of funding type. EN0499 states verbatim that “Virginia fully insured business is not subject to this coverage policy,” so for a fully-insured member the plan document and the mandate govern. Note also that EN0499 (read in full 9/17/2026) states no prior-authorization requirement for any ABA code — the no-PA-on-assessment fast path comes from Cigna\'s precertification list, not from EN0499.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — for self-funded plans, the completed assessment plus a treatment plan on Cigna\'s ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule); for fully-insured Virginia plans confirm the authorization requirement against the plan document',
      status: 'plan-dependent',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
      verifyVia: 'A live benefits verification of funding type. EN0499 states verbatim that “Virginia fully insured business is not subject to this coverage policy,” so for a fully-insured member the plan document and the mandate govern. Note also that EN0499 (read in full 9/17/2026) states no prior-authorization requirement for any ABA code — the no-PA-on-assessment fast path comes from Cigna\'s precertification list, not from EN0499.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes \u2014 ASD only; Rett syndrome (F84.2) excluded under EN0499. Virginia separately requires the prescribing practitioner to be a licensed physician or psychologist independent of the ABA provider',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      ],
    },
    state: 'VA', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Virginia',
    h1: 'Cigna / Evernorth ABA coverage in Virginia: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Virginia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Virginia families — the national clinical policy, prior authorization, the Va. Code § 38.2-3418.17 mandate (ages, caps, exemptions), Virginia behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Virginia, a Cigna card means three layers at once: the carrier\'s national clinical policy, Virginia\'s autism insurance mandate (Va. Code § 38.2-3418.17), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order. One Virginia-sized caveat up front: Cigna’s national EN0499 policy explicitly does not apply to Virginia fully-insured business, so the usual no-assessment-PA fast path can’t be assumed until you know the plan’s funding type.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Va. Code § 38.2-3418.17' },
      { label: 'Mandate age', value: 'Any age (since 1/1/2020, HB 2577)' },
      { label: 'Mandate caps', value: '$35,000/yr ABA cap in statute (parity-limited)' },
      { label: 'Exempt from mandate', value: 'Short-term/limited policies; self-funded ERISA' },
      { label: 'Licensure', value: 'VA Licensed Behavior Analyst (Board of Medicine)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Virginia',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Virginia is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Virginia.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Virginia mandate: what it guarantees (and doesn\'t)',
        body: [
          'Virginia’s mandate covers individual and group policies and HMO plans, and since January 1, 2020 it applies at any age — the old age caps were removed by 2019’s HB 2577. ABA is subject to an annual maximum benefit of $35,000 unless the insurer elects more (still in the current statute), must be provided or supervised by a behavior analyst licensed by the Board of Medicine, and the prescriber must be independent of the ABA provider. Self-funded ERISA plans are exempt by preemption, and the $35K cap is a quantitative limit of doubtful MHPAEA enforceability for large-group plans.',
        ],
        cites: [
      { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Autism Speaks — Virginia state-regulated coverage', url: 'https://www.autismspeaks.org/virginia-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'The Virginia carve-out: EN0499 does not apply to fully-insured plans',
        body: [
          'The current EN0499 states verbatim that Virginia fully-insured business is not subject to the policy. For fully-insured Cigna members in Virginia, coverage terms come from the plan document and the state mandate — not Cigna’s national IBI criteria — while self-funded (ASO) plans still follow EN0499. Practically: for a Virginia Cigna family, don’t assume the no-assessment-PA fast path or any other EN0499 rule until benefits verification confirms which regime the plan sits under.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Virginia',
        body: [
          'Virginia requires a Board of Medicine license to practice as a behavior analyst (Va. Code § 54.1-2957.16, built on BACB certification) — and the mandate itself conditions ABA coverage on delivery or supervision by a licensed behavior analyst, so licensure is a coverage requirement, not just a credentialing one. On rates: Cigna does not publish commercial ABA fee schedules for Virginia (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
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
      { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Autism Speaks — Virginia state-regulated coverage', url: 'https://www.autismspeaks.org/virginia-state-regulated-insurance-coverage' },
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Under EN0499 (self-funded plans): case supervision by a BCBA, LBA, or independently licensed mental health professional with documented ABA training, with direct plus indirect case supervision at one to two hours per ten hours of direct treatment, and a minimum of one to two hours a week of direct case supervision where direct treatment is 10 hours a week or less. In Virginia the mandate adds a coverage condition regardless of funding: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
      concurrentBilling: {
        value:
          'EN0499 defines concurrent billing as multiple providers billing for the same patient at the same time regardless of funding source, and flatly excludes ABA delivered to the same individual at the same time as any other treatment modality (ABA and speech therapy, or ABA and occupational therapy). ABA delivered by multiple provider organizations in the same authorization period is not medically necessary unless additional documented conditions are met. For fully-insured Virginia members that policy does not apply, so claim editing follows the plan document.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia: 'A live benefits verification — Virginia fully-insured business is carved out of EN0499, so concurrent-billing edits come from the plan document and Cigna reimbursement policy.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'No per-day or per-week unit ceiling is published. EN0499 defines treatment intensity as direct ABA treatment hours per week, excluding case supervision and caregiver training, set on medical necessity independent of the individual\'s outside schedule or prior utilization. Virginia bars visit limits outright but keeps a $35,000 annual maximum benefit on ABA unless the insurer elects more — a quantitative treatment limit whose enforceability against a large-group plan is a parity question.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'A live benefits verification — whether the plan applies the $35,000 maximum, and any plan-level limits.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Under EN0499 each session record must carry the start date and time, end date and time, location of service delivery, focus of service, a detailed description of the intervention, the individuals present, the specific service delivered, and the name, credential where applicable, and signature of the ABA provider who rendered the service. For fully-insured Virginia members that policy does not bind; the plan document does.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia: 'A live benefits verification — Virginia fully-insured business is carved out of EN0499.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Under EN0499, ABA may be delivered in residential facilities, childcare facilities, homes, schools, transportation, community settings, clinics, vocational or educational classes, and recreational and social environments when medically necessary — but services primarily educational or vocational in nature, or related to academic or work performance, are not covered, and ABA may not replace or replicate activities that are the responsibility of the setting (classroom aide, 1:1 teacher, tutor, vocational coach, respite). For fully-insured Virginia members the plan document governs instead.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia: 'A live benefits verification — Virginia fully-insured business is carved out of EN0499.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'EN0499 governs who may render and supervise but publishes no rendering-versus-supervising NPI rule. In Virginia the mandate does constrain the claim: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Virginia is the one state EN0499 carves out — the policy states that Virginia fully-insured business is not subject to it. For a fully-insured Virginia member the plan document and the state mandate govern; for self-funded (ASO) plans EN0499 still applies, so funding type decides which rulebook you are reading. Under EN0499 there is no age limit — the gate is a confirmed ASD diagnosis. Any age. Virginia\'s mandate has applied to individuals of any age since 1/1/2020 — 2019\'s HB 2577 removed the old age-2 floor as well as the upper limit — for individual and group policies and HMO contracts, extended to the individual and small group markets for policies delivered, issued, reissued or extended on or after 1/1/2021. ABA remains subject to a $35,000 annual maximum benefit unless the insurer elects more, with no visit limits; as a quantitative treatment limit on a mental-health benefit that cap is a live parity question for large-group plans rather than a settled rule. Self-funded ERISA plans sit outside the statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'A live benefits verification — fully-insured Virginia business is outside EN0499, so the plan document and the mandate control.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Virginia is the one state EN0499 carves out — the policy states that Virginia fully-insured business is not subject to it. For a fully-insured Virginia member the plan document and the state mandate govern; for self-funded (ASO) plans EN0499 still applies, so funding type decides which rulebook you are reading. EN0499 sets no recency window on the ASD diagnosis itself, but requires the date the diagnosis was most recently made to be supplied and the standardized ABA assessment instrument to have been administered within the 60 days before treatment starts. The Virginia mandate sets no recency rule but caps insurer-initiated treatment-plan review at once every 12 months.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'A live benefits verification — the 60-day assessment-currency rule binds only self-funded plans reading EN0499.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'Virginia is the one state EN0499 carves out — the policy states that Virginia fully-insured business is not subject to it. For a fully-insured Virginia member the plan document and the state mandate govern; for self-funded (ASO) plans EN0499 still applies, so funding type decides which rulebook you are reading. Under EN0499: a confirmed ASD diagnosis (F84.0-F84.9, excluding F84.2 Rett syndrome) against DSM-5-TR criteria by a health care professional licensed to practise independently whose licensure board considers diagnostics within scope, with the name, credentials and licensure type of the diagnosing clinician provided. Under the Virginia mandate the standard is narrower. Virginia writes the gate into the benefit itself: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider. The treatment plan is defined as one developed by a licensed physician or licensed psychologist following a comprehensive evaluation or reevaluation performed consistently with the most recent clinical report or recommendation of the AAP or AACAP, and treatment must be prescribed or ordered by a licensed physician or psychologist who determines it medically necessary. A referral written by a clinician inside your own practice can fail the independence test.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
      diagnosticTools: {
        value:
          'Virginia is the one state EN0499 carves out — the policy states that Virginia fully-insured business is not subject to it. For a fully-insured Virginia member the plan document and the state mandate govern; for self-funded (ASO) plans EN0499 still applies, so funding type decides which rulebook you are reading. EN0499 requires a reliable, valid and standardized assessment instrument measuring the DSM-5-TR ASD domains, completed in its entirety and as designed, with reliability and validity established for the population tested, administered and interpreted by someone trained to do so, in the most current version (Vineland-3, not Vineland-II), reported with the date of administration, the respondent and the form type. The Virginia statute names no instrument but requires the comprehensive evaluation behind the treatment plan to follow the most recent AAP or AACAP clinical report or recommendation.',
        status: 'verified',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
      referral: {
        value:
          'Yes, and it is statutory rather than a carrier rule: treatment must be prescribed or ordered by a licensed physician or licensed psychologist who determines the care medically necessary, and that prescribing practitioner must be independent of the ABA provider. The insurer may review the treatment plan not more than once every 12 months unless the insurer and the individual\'s licensed physician or psychologist agree more frequent review is necessary, with the cost of any such review covered under the policy. EN0499 itself imposes no referral requirement — for self-funded plans the gate is the independent-licensure diagnosis plus a full ABA assessment by a BCBA, LBA, or independently licensed mental health clinician with documented ABA training.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      telehealth: {
        value:
          'Virginia is the one state EN0499 carves out — the policy states that Virginia fully-insured business is not subject to it. For a fully-insured Virginia member the plan document and the state mandate govern; for self-funded (ASO) plans EN0499 still applies, so funding type decides which rulebook you are reading. EN0499 treats ABA as deliverable in person, by telehealth, or as a hybrid, with the line-of-sight and close-proximity requirement on direct treatment expressly not applying to telehealth. The Virginia mandate is silent on modality.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        verifyVia: 'A live benefits verification — for fully-insured Virginia members the plan document, not EN0499, sets modality terms.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Virginia plans: Virginia\'s utilization-review statute requires the entity to "communicate its utilization review decision no later than two business days after receipt by the entity of all information necessary to complete the review" — the clock starts only once the file is complete. Self-funded (ERISA) plans are excluded from that article and follow the federal claims rule instead: a pre-service decision within 15 days of receipt (one 15-day extension allowed, with notice; if the extension is for missing information you get at least 45 days to supply it) and an urgent-care decision within 72 hours; a request to extend an ongoing course of treatment that is urgent is decided within 24 hours if made at least 24 hours before the current authorization expires. Cigna\'s ABA policy (EN0499) publishes no decision clock; what it dates is the reauthorization packet — continued-treatment requests need current data "collected within no more than 60 days prior to the start date of the continued treatment request," so collect progress data inside that window.',
        status: 'plan-dependent',
        cites: [
          { title: 'Va. Code § 32.1-137.9 — utilization review standards (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.9/' },
          { title: 'Va. Code § 32.1-137.8 — application; ERISA-exempt plans excluded (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.8/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Cigna EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
        verifyVia: 'Benefits verification: ask whether the plan is fully insured (Virginia UR statute applies) or self-funded ERISA (federal 15-day/72-hour rule), and the carrier\'s turnaround for its behavioral health reviewer.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Cigna\'s ABA documents publish no coordination-of-benefits rule; order of benefits follows the plan document. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last. When the child has two parents\' plans, the plan\'s own coordination-of-benefits provision decides the order — a self-funded plan writes its own rules. For Virginia HMO contracts, 14VAC5-211-80 lets the plan coordinate but says it "shall not be relieved of its duty to provide a covered health care service" because of other coverage, must "provide or arrange for the service first and then, at its option, seek coordination of benefits," and "Until a coordination of benefits determination is made, the enrollee shall not be held liable."',
        status: 'plan-dependent',
        cites: [
          { title: '14VAC5-211-80 — HMO coordination of benefits (Virginia LIS)', url: 'https://law.lis.virginia.gov/admincode/title14/agency5/chapter211/section80/' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
        ],
        verifyVia: 'Benefits verification with each plan: which is primary for the child (order-of-benefits rule, custody/court order), and whether the secondary plan needs its own authorization.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Virginia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Virginia\'s mandate (Va. Code § 38.2-3418.17) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Virginia autism mandate require?', a: 'Virginia’s mandate covers individual and group policies and HMO plans, and since January 1, 2020 it applies at any age — the old age caps were removed by 2019’s HB 2577. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does Cigna pay for ABA in Virginia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Virginia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-virginia': {
    slug: 'unitedhealthcare-virginia',
    family: 'unitedhealthcare',
    cardDesc: 'Optum Supplemental Clinical Criteria (BH803ABASCC) + the Va. Code § 38.2-3418.17 mandate layer.',
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
    payer: 'UnitedHealthcare / Optum in Virginia',
    state: 'VA', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Virginia',
    h1: 'UnitedHealthcare / Optum ABA coverage in Virginia: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Virginia: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Virginia families — the national clinical policy, prior authorization, the Va. Code § 38.2-3418.17 mandate (ages, caps, exemptions), Virginia behavior-analyst licensure, and what intake should verify.',
    intro: [
      'For an intake team in Virginia, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Virginia\'s autism insurance mandate (Va. Code § 38.2-3418.17), and the plan\'s funding type deciding which of the two actually binds. This guide stacks them in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Va. Code § 38.2-3418.17' },
      { label: 'Mandate age', value: 'Any age (since 1/1/2020, HB 2577)' },
      { label: 'Mandate caps', value: '$35,000/yr ABA cap in statute (parity-limited)' },
      { label: 'Exempt from mandate', value: 'Short-term/limited policies; self-funded ERISA' },
      { label: 'Licensure', value: 'VA Licensed Behavior Analyst (Board of Medicine)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Virginia',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months and an operational flag when utilization falls below 80% of authorized hours. That clinical policy is national — what changes in Virginia is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Virginia.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The Virginia mandate: what it guarantees (and doesn\'t)',
        body: [
          'Virginia’s mandate covers individual and group policies and HMO plans, and since January 1, 2020 it applies at any age — the old age caps were removed by 2019’s HB 2577. ABA is subject to an annual maximum benefit of $35,000 unless the insurer elects more (still in the current statute), must be provided or supervised by a behavior analyst licensed by the Board of Medicine, and the prescriber must be independent of the ABA provider. Self-funded ERISA plans are exempt by preemption, and the $35K cap is a quantitative limit of doubtful MHPAEA enforceability for large-group plans.',
        ],
        cites: [
      { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Autism Speaks — Virginia state-regulated coverage', url: 'https://www.autismspeaks.org/virginia-state-regulated-insurance-coverage' },
        ],
      },
      {
        h2: 'Optum\'s Virginia-specific criteria',
        body: [
          'Virginia has its own entry in Optum’s ABA State Mandates supplemental criteria: for Virginia commercial fully-insured HMO and insurance plans (effective July 2022), Optum adopts the Virginia statutory definitions of “autism spectrum disorder” and “medically necessary” in place of its standard criteria — so for fully-insured members, the statute’s definitions, not Optum’s defaults, control the medical-necessity conversation.',
        ],
        cites: [
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Virginia',
        body: [
          'A family saying “we have UnitedHealthcare” in Virginia may actually be on the carrier’s Medicaid plan — UnitedHealthcare Community Plan of Virginia — which follows the state Medicaid rules, not this commercial policy. Verify which line of business the card belongs to, and use the dedicated guide for the Medicaid plan.',
        ],
      },
      {
        h2: 'Licensure & rates in Virginia',
        body: [
          'Virginia requires a Board of Medicine license to practice as a behavior analyst (Va. Code § 54.1-2957.16, built on BACB certification) — and the mandate itself conditions ABA coverage on delivery or supervision by a licensed behavior analyst, so licensure is a coverage requirement, not just a credentialing one. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Virginia (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement, so treat rate expectations as a contracting conversation, not a lookup.',
        ],
        cites: [
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial vs. UnitedHealthcare Community Plan of Virginia (Medicaid) — different rules, different guide.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
      { title: 'Age', desc: 'Where the mandate carries age terms, flag edge cases for the parity analysis rather than turning families away.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Autism Speaks — Virginia state-regulated coverage', url: 'https://www.autismspeaks.org/virginia-state-regulated-insurance-coverage' },
      { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
      { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Consistent with CASP standards of care, direct case supervision is required at 1 to 2 hours for every 10 hours of direct treatment per week. Technicians must work under the applicable supervision of a BCBA or licensed behavioral health clinician and should be RBTs or another appropriately certified behavior technician as allowable by state mandate; a BCaBA or non-licensed individual works under the direct supervision of a BCBA or licensed behavioral health clinician who takes responsibility for the individual\'s care. In Virginia the mandate makes licensure a coverage condition: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
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
        value: 'Optum’s commercial ABA reimbursement policy (2022RP501A, updated June 2026) sets a maximum frequency per day for every code: 97151 32 units (8 hrs), 97152 16 (4 hrs), 97153 32 (8 hrs), 97154 18 (4.5 hrs), 97155 24 (6 hrs), 97156 16 (4 hrs), 97157 16 (4 hrs), 97158 16 (4 hrs), 0362T 16 (4 hrs), 0373T 32 (8 hrs) — and “If a provider bills in excess of 32 units per day, claims may be subject to non-reimbursement or recovery.” The ABA CPT FAQ confirms “For our commercial ABA program MUE’s apply.” There is no weekly hour cap: hours are authorized on documented clinical need, approved units can be shifted among codes within a cluster, and utilization below 80% of authorized hours over a two-week period is addressed at review. Virginia bars visit limits outright but keeps a $35,000 annual ABA maximum unless the insurer elects more — a quantitative treatment limit whose enforceability against a large-group plan is a parity question.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
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
        value:
          'ABA must be provided at the least restrictive, most clinically appropriate level. The school boundary is explicit: ABA is not covered for services that are not ABA therapy, such as a 1:1 aide delivered simultaneously during classroom instruction, or for services covered under IDEA — but school ABA does cover coordination of services, including teacher training, meetings with school personnel, and observations in the school setting, and the treatment plan must be coordinated with the school and any applicable IFSP or IEP.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      billAsProvider: {
        value:
          'Optum defines who may render — a master\'s- or doctoral-level BCBA, a licensed behavioral health clinician attested and credentialed to provide ABA, or a BCaBA or non-licensed technician under the direct supervision of one of those — but publishes no rendering-versus-supervising NPI rule. In Virginia the mandate constrains the claim anyway: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Optum\'s national criteria set no age bound, and for Virginia there is a state-specific overlay that matters: for Virginia commercial fully-insured HMO and insurance plans (effective July 2022), Optum adopts the Virginia statutory definitions of autism spectrum disorder and medically necessary in place of its standard criteria. Any age. Virginia\'s mandate has applied to individuals of any age since 1/1/2020 — 2019\'s HB 2577 removed the old age-2 floor as well as the upper limit — for individual and group policies and HMO contracts, extended to the individual and small group markets for policies delivered, issued, reissued or extended on or after 1/1/2021. ABA remains subject to a $35,000 annual maximum benefit unless the insurer elects more, with no visit limits; as a quantitative treatment limit on a mental-health benefit that cap is a live parity question for large-group plans rather than a settled rule. Self-funded ERISA plans sit outside the statute.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
      dxRecency: {
        value:
          'Optum sets no recency window on the ASD diagnosis; currency is tested on the treatment side through continued-service reviews every 4 to 6 months against updated standardized, norm-referenced adaptive measures. Virginia separately caps insurer-initiated treatment-plan review at once every 12 months on plans the mandate reaches.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
      diagnosingProviders: {
        value:
          'Optum requires a valid ASD diagnosis (or other applicable diagnosis required by governing law) issued by a state licensed physician, psychologist, or other state licensed clinician qualified to make that diagnosis under DSM-5-TR criteria, with the DSM-5 diagnosis and severity level confirmed and documented by the diagnosing clinician — and for Virginia fully-insured members it adopts the statute\'s own definitions. Virginia writes the gate into the benefit itself: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider. The treatment plan is defined as one developed by a licensed physician or licensed psychologist following a comprehensive evaluation or reevaluation performed consistently with the most recent clinical report or recommendation of the AAP or AACAP, and treatment must be prescribed or ordered by a licensed physician or psychologist who determines it medically necessary. A referral written by a clinician inside your own practice can fail the independence test.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — ABA State Mandates supplemental criteria (BH 803ABA, Jan 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — behavior analyst licensure (official)', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
        ],
      },
      diagnosticTools: {
        value:
          'At least one clinically validated tool must confirm the diagnosis and severity level. Optum groups them: first-level screeners (ABC, CHAT/M-CHAT, CSBS-DP-IT, ASQ, AQ, CAST), second-level screeners and diagnostic aids (CARS/CARS-2, RITA-T, STAT), and formal diagnostic tools used in a comprehensive diagnostic evaluation (ADI-R, ADOS/ADOS-2, DISCO). Treatment intensity must separately be set from at least one validated measurement tool — ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland (VABS) or CFQL-2 — plus norm-referenced instruments comparing the individual to age-matched neurotypical peers. The Virginia statute adds that the comprehensive evaluation behind the treatment plan must follow the most recent AAP or AACAP clinical report or recommendation.',
        status: 'verified',
        cites: [
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
      referral: {
        value:
          'Yes, and it is statutory rather than a carrier rule: treatment must be prescribed or ordered by a licensed physician or licensed psychologist who determines the care medically necessary, and that prescribing practitioner must be independent of the ABA provider. The insurer may review the treatment plan not more than once every 12 months unless the insurer and the individual\'s licensed physician or psychologist agree more frequent review is necessary, with the cost of any such review covered under the policy. Optum itself imposes no referral requirement; prior authorization is the gate, as a two-step process on Provider Express with the assessment authorized first and then treatment.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (official — Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      telehealth: {
        value: 'Three codes, after an attestation. Optum’s Telehealth Billing guide (updated September 2025) is explicit for commercial plans: “For ABA services, telehealth is only allowed for these 3 CPT codes: 97155, 97156 or 97157” — virtual supervision of technicians and family training — so technician-delivered 97153 is not payable by telehealth. The provider must first be “an approved Optum virtual visits provider who has attested” (the virtual-visits attestation on Provider Express) and must tell the ABA Care Advocate at authorization. Bill the in-person code with the member’s location as the place of service: POS 10 when the member is at home, POS 02 anywhere else (the older ABA CPT FAQ says POS 02; the 2025 guide requires one of the two on every behavioral-health telehealth claim, and POS 11 or a telehealth modifier alone is not paid). Optum’s criteria add that telehealth is “not intended to supplant in-person service.” The Virginia mandate is silent on modality.',
        status: 'verified',
        cites: [
          { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Virginia plans: Virginia\'s utilization-review statute requires the entity to "communicate its utilization review decision no later than two business days after receipt by the entity of all information necessary to complete the review" — the clock starts only once the file is complete. Self-funded (ERISA) plans are excluded from that article and follow the federal claims rule instead: a pre-service decision within 15 days of receipt (one 15-day extension allowed, with notice; if the extension is for missing information you get at least 45 days to supply it) and an urgent-care decision within 72 hours; a request to extend an ongoing course of treatment that is urgent is decided within 24 hours if made at least 24 hours before the current authorization expires. UnitedHealthcare\'s commercial administrative guide states its own review times — "Standard requests: up to 15 calendar days" and "Expedited requests: 72 hours" — and asks that requests be submitted "at least 15 calendar days in advance, if possible," and no later than 5 business days before the planned service. ABA reviews run through Optum Behavioral Health.',
        status: 'plan-dependent',
        cites: [
          { title: 'Va. Code § 32.1-137.9 — utilization review standards (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.9/' },
          { title: 'Va. Code § 32.1-137.8 — application; ERISA-exempt plans excluded (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.8/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (commercial)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
        ],
        verifyVia: 'Benefits verification: ask whether the plan is fully insured (Virginia UR statute applies) or self-funded ERISA (federal 15-day/72-hour rule), and the carrier\'s turnaround for its behavioral health reviewer.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'UnitedHealthcare: "COB is administered according to the member\'s benefit plan and in accordance with law," and Optum, which administers the behavioral health benefit, puts the burden on the provider: "You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first, then notify Optum of your findings." If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last. When the child has two parents\' plans, the plan\'s own coordination-of-benefits provision decides the order — a self-funded plan writes its own rules. For Virginia HMO contracts, 14VAC5-211-80 lets the plan coordinate but says it "shall not be relieved of its duty to provide a covered health care service" because of other coverage, must "provide or arrange for the service first and then, at its option, seek coordination of benefits," and "Until a coordination of benefits determination is made, the enrollee shall not be held liable."',
        status: 'plan-dependent',
        cites: [
          { title: '2026 UnitedHealthcare Care Provider Administrative Guide (commercial)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' },
          { title: 'Optum Behavioral Health — National Network Manual (effective Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' },
          { title: '14VAC5-211-80 — HMO coordination of benefits (Virginia LIS)', url: 'https://law.lis.virginia.gov/admincode/title14/agency5/chapter211/section80/' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
        ],
        verifyVia: 'Benefits verification with each plan: which is primary for the child (order-of-benefits rule, custody/court order), and whether the secondary plan needs its own authorization.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Virginia?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Virginia\'s mandate (Va. Code § 38.2-3418.17) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Virginia autism mandate require?', a: 'Virginia’s mandate covers individual and group policies and HMO plans, and since January 1, 2020 it applies at any age — the old age caps were removed by 2019’s HB 2577. See the mandate section above for ages, caps, and exemptions — and remember federal parity limits how hard the numeric caps can be enforced against group plans.' },
      { q: 'What does UnitedHealthcare pay for ABA in Virginia?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against the Virginia Medicaid fee schedule where one exists, and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale. On plans the Virginia mandate reaches, the insurer may review the treatment plan not more than once every 12 months unless the insurer and the child’s physician or psychologist agree to more often.' },
    ],
  },

  'anthem-bcbs-virginia': {
    slug: 'anthem-bcbs-virginia',
    payer: 'Anthem BCBS Virginia',
    state: 'VA', kind: 'commercial',
    family: 'anthem',
    cardDesc: 'Every ABA code is on the precert list; criteria differ HMO vs PPO; $35K ABA cap still in statute.',
    assessmentPA: {
      value: 'Yes — 97151 is its own row on both Virginia precert lists, so the assessment is separately authorized',
      status: 'verified',
      cites: [
        { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        { title: 'Virginia Local Precertification/Prior Authorization List — PPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-S2374-DISTRO-VA-PA-PPO-List.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Yes — 97153-97158, 0362T and 0373T all listed; responsible party Anthem',
      status: 'verified',
      cites: [
        { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        { title: 'Virginia Local Precertification/Prior Authorization List — PPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-S2374-DISTRO-VA-PA-PPO-List.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — and Virginia requires an independent prescriber: a licensed physician or psychologist, independent of the ABA provider',
      status: 'verified',
      cites: [
        { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      ],
    },
    pill: 'Payer Guide · Anthem BCBS · Virginia',
    h1: 'Anthem BCBS Virginia ABA coverage: the intake guide.',
    metaTitle: 'Anthem BCBS Virginia ABA Coverage & Prior Auth: Intake Guide | Carelu',
    metaDescription:
      'How Anthem Blue Cross and Blue Shield covers ABA in Virginia: every ABA code on the precert list, different criteria for HMO/EPO vs PPO, the § 38.2-3418.17 mandate and its $35,000 ABA cap, Board of Medicine licensure, and the Northern Virginia service-area gap.',
    intro: [
      'Virginia is the most legible of Anthem\'s commercial states for an ABA intake team, because Anthem publishes the code-level answer. Its two Virginia precertification lists — one for HMO and EPO, one for PPO, both updated September 1, 2026 — name 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T as individual rows, each with Anthem as the responsible party. That means the assessment is separately authorized, and it means nothing is routed to a delegated vendor.',
      'It also means the product type on the card changes the rulebook. On the HMO/EPO list the criteria column for every ABA row reads "Anthem Applied Behavioral Analysis"; on the PPO list it reads "MCG Guidelines." The force of the requirement differs too: HMO services "require prior approval and will not be eligible for reimbursement if rendered without the appropriate prior authorization," while on EPO and PPO prior approval is "highly recommended" and skipping it triggers a pre-payment claim review that may end in denial. Establish product and funding type before anything else — self-funded ERISA plans are outside Virginia\'s mandate and answer to federal parity instead.',
    ],
    atGlance: [
      { label: 'Who reviews ABA', value: 'Anthem — responsible party on every ABA row of both Virginia lists' },
      { label: 'Criteria', value: 'HMO/EPO: "Anthem Applied Behavioral Analysis" · PPO: MCG Guidelines' },
      { label: 'Assessment', value: '97151 is separately listed — authorize it in its own right' },
      { label: 'State mandate', value: 'Va. Code § 38.2-3418.17' },
      { label: 'Mandate age', value: 'Any age since January 1, 2020 — the old age-2 floor and age ceiling are both gone' },
      { label: 'ABA cap', value: '$35,000/yr annual maximum still in the statute; no visit limits' },
      { label: 'Review ceiling', value: 'Insurer may review the treatment plan not more than once every 12 months' },
      { label: 'Licensure', value: 'BCBA licensed by the Virginia Board of Medicine — both, not either' },
    ],
    sections: [
      {
        h2: 'The precert lists: what is on them, and how HMO differs from PPO',
        cites: [
          { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
          { title: 'Virginia Local Precertification/Prior Authorization List — PPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-S2374-DISTRO-VA-PA-PPO-List.pdf' },
        ],
        body: [
          'Both Virginia lists carry a responsible-party column, and for all ten ABA codes it reads Anthem. Carelon Medical Benefits Management appears throughout both documents — it owns imaging, genetic testing, musculoskeletal, oncology and the rehabilitative-therapy codes such as 97140, 97150 and 97161 — but never an ABA code. Carelon Behavioral Health does not appear in either list at all. Send an ABA request to providerportal.com and it lands with a vendor that does not handle it.',
          'The criteria split is the detail most guides miss. Every ABA row on the HMO/EPO list points to a criteria set Anthem calls "Anthem Applied Behavioral Analysis." Every ABA row on the PPO list points to "MCG Guidelines" instead — consistent with Anthem\'s move to MCG B-806-T for ABA reviews in June 2024. Neither criteria set is published, so what you can control is the completeness of the submission.',
          'Submission mechanics, from the lists themselves: request prior authorization through Availity, and for mental health and substance use disorder prior authorizations call 800-755-0851, staffed 24/7. For non-urgent requests, submit all required clinical information 14 calendar days before the proposed service where possible. The ordering or rendering provider is responsible for completing the prior-authorization process. Since September 1, 2025 Availity Essentials has been Anthem\'s stated preferred channel for behavioral health authorizations.',
        ],
      },
      {
        h2: 'The Virginia mandate: any age, a $35,000 ABA cap, no small-employer escape',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        body: [
          'Virginia\'s mandate binds insurers issuing expense-incurred hospital, medical and surgical or major medical policies, corporations issuing subscription contracts, and HMOs, and it extends to state employee coverage and to local-government, teacher and retiree coverage. Since January 1, 2020 it applies to individuals "of any age" — note that the change removed not just the upper age limit but the old age-2 floor as well, so a very young child is squarely inside the mandate.',
          'The cap is still there. Subsection K reads: "Coverage for applied behavior analysis under this section will be subject to an annual maximum benefit of $35,000, unless the insurer, corporation, or health maintenance organization elects to provide coverage in a greater amount." Separately, the statute says coverage "will not be subject to any visit limits." The $35,000 figure is a quantitative treatment limit on a mental-health benefit, which makes its enforceability against a large-group plan a live parity question rather than a settled fact — a plan applying it hard is worth escalating, not accepting on sight.',
          'What Virginia does not have is a small-employer carve-out. The current text contains no employee-count threshold anywhere; the opposite is true, since subsection G expressly extended the mandate to the individual and small group markets for policies delivered, issued for delivery, reissued or extended on or after January 1, 2021. The real exclusions are narrow: short-term travel, accident-only, limited or specified-disease policies; short-term non-renewable policies of not more than six months; and Medicare-eligible policies. There is also a one-year actuarial waiver an insurer may claim, with the Commissioner of Insurance\'s approval, if behavioral-health-treatment costs exceeded one percent of premiums over the experience period. Self-funded ERISA plans are outside the statute by omission — it reaches insurers, subscription-contract corporations and HMOs, not employers who fund their own benefits.',
        ],
      },
      {
        h2: 'Three gates Virginia writes into the benefit itself',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
        list: [
          { title: 'An independent prescriber', desc: 'Covered ABA is "applied behavior analysis when provided or supervised by a board certified behavior analyst who shall be licensed by the Board of Medicine. The prescribing practitioner shall be independent of the provider of applied behavior analysis." A referral written by a clinician inside your own practice can fail this test — capture who ordered it, and their relationship to you.' },
          { title: 'A physician- or psychologist-authored treatment plan', desc: 'The statute defines the treatment plan as one developed by a licensed physician or licensed psychologist following a comprehensive evaluation or reevaluation performed consistently with the most recent clinical report or recommendation of the AAP or AACAP. Treatment must likewise be prescribed or ordered by a licensed physician or psychologist who determines the care medically necessary.' },
          { title: 'A 12-month review ceiling', desc: 'The insurer may review the treatment plan "not more than once every 12 months unless the insurer … and the individual\'s licensed physician or licensed psychologist agree that a more frequent review is necessary," and the cost of any such review is covered under the policy. Virginia\'s ceiling is twice as generous as Missouri\'s six months — worth knowing when an Anthem reviewer asks for an off-cycle update on a fully insured plan.' },
        ],
      },
      {
        h2: 'Licensure: BCBA and Board of Medicine, not either/or',
        cites: [
          { title: 'Va. Code § 54.1-2957.16 — licensure of behavior analysts', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
          { title: 'Virginia Board of Medicine — Behavior Analyst', url: 'https://www.dhp.virginia.gov/Boards/Medicine/AbouttheBoard/RegulatedProfessions/BehaviorAnalyst/' },
        ],
        body: [
          'Virginia makes it unlawful to practise as, or hold oneself out as, a behavior analyst or assistant behavior analyst without a licence from the Board of Medicine, which issues the titles Licensed Behavior Analyst and Licensed Assistant Behavior Analyst. Licensure is layered on top of national certification: the application requires documentation of current BACB certification as a Board Certified Behavior Analyst (or Board Certified Assistant Behavior Analyst), and an assistant must document supervision by a licensed behavior analyst under the Board\'s requirements. The regulations sit at 18VAC85-150, under the authority of §§ 54.1-2400 and 54.1-2957.16.',
          'This is where Anthem\'s own multi-state guidance can mislead. Its ABA provider resource guide lists a broad set of approved service providers — psychiatrists, psychologists, LCSWs, LPCs, LMFTs with ABA training, BCBAs, people working under BCBA direction, and "other mental health service providers licensed or authorized by the state in which they practice." In Virginia the insurance statute narrows that considerably: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine. Credential to the statute, not to the guide.',
        ],
      },
      {
        h2: 'The Northern Virginia gap, and the January 2026 weekly-unit change',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Anthem Virginia — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/virginia/articles/streamlined-aba-claim-process-starts-january-1-2026-27882' },
        ],
        body: [
          'Anthem\'s Virginia entity is Anthem Health Plans of Virginia, Inc., and its own boilerplate is precise about geography: Anthem and its affiliate HealthKeepers, Inc. "serve all of Virginia except for the City of Fairfax, the Town of Vienna, and the area east of State Route 123." Anthem\'s commercial prior-authorization page puts it more colloquially — Virginia "excluding the Northern Virginia suburbs of Washington, D.C." So a family in Fairfax City, Vienna, or east of Route 123 who says they have "Anthem" or "Blue Cross" needs a second question about which Blue plan, because it is not this one and none of the rules on this page govern them.',
          'The other current change: effective January 1, 2026, Anthem reimburses ABA on weekly approved units rather than total authorized units. Claims should reflect units rendered within each week up to the weekly medically necessary limit as approved by prior approval, and units above it are ineligible for reimbursement and get adjusted. The affected code set is all ten. Together with the 14-calendar-day lead time on non-urgent requests, that makes a realistic weekly schedule an intake question with direct billing consequences.',
        ],
      },
    ],
    collect: [
      { title: 'Product type and funding type', desc: 'HMO, EPO or PPO changes both the criteria set and whether precert is mandatory or merely "highly recommended" with pre-payment review. Fully insured vs self-funded ERISA changes whether the mandate applies at all.' },
      { title: 'City and whether east of Route 123', desc: 'Anthem Virginia does not serve the City of Fairfax, the Town of Vienna, or the area east of State Route 123. Ask early; it saves a wasted file.' },
      { title: 'The independent prescriber', desc: 'Virginia requires the prescribing practitioner to be independent of the ABA provider. Record the ordering physician or psychologist and confirm they are not part of your organization.' },
      { title: 'A physician- or psychologist-authored treatment plan', desc: 'The statute defines the treatment plan as one developed by a licensed physician or psychologist following an AAP- or AACAP-consistent comprehensive evaluation. Ask for the evaluation, not just the diagnosis line.' },
      { title: 'Board of Medicine licence numbers', desc: 'Covered ABA needs a BCBA who is also licensed by the Virginia Board of Medicine. Capture the licence number, not only the BACB certificant ID.' },
      { title: 'Realistic weekly schedule and a 14-day lead time', desc: 'Weekly approved units since January 2026, and Anthem asks for non-urgent clinical information 14 calendar days before the proposed service. Build both into the intake timeline.' },
    ],
    sources: [
      { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
      { title: 'Virginia Local Precertification/Prior Authorization List — PPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-S2374-DISTRO-VA-PA-PPO-List.pdf' },
      { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
      { title: 'Va. Code § 54.1-2957.16 — licensure of behavior analysts', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
      { title: 'Virginia Board of Medicine — Behavior Analyst', url: 'https://www.dhp.virginia.gov/Boards/Medicine/AbouttheBoard/RegulatedProfessions/BehaviorAnalyst/' },
      { title: '18VAC85-150-10 — behavior analyst regulations, definitions', url: 'https://law.lis.virginia.gov/admincode/title18/agency85/chapter150/section10/' },
      { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
      { title: 'Anthem — Treatment Plan Request Form for Autism Spectrum Disorders (commercial, December 2025)', url: 'https://www.anthembluecross.com/content/dam/digital/docs/anthembluecross/provider/commercial/forms/NY_BH_00001.pdf' },
      { title: 'Anthem — MCG care guidelines 27th edition update (Virginia, Commercial, Feb 1 2024)', url: 'https://providernews.anthem.com/virginia/articles/mcg-care-guidelines-27th-edition-update-17867-17867' },
      { title: 'Anthem Virginia — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/virginia/articles/streamlined-aba-claim-process-starts-january-1-2026-27882' },
      { title: 'Anthem Virginia — submit behavioral health authorizations through Availity Essentials', url: 'https://providernews.anthem.com/virginia/articles/streamline-your-workflow-submit-behavioral-health-authorizat-27236' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Anthem publishes no numeric supervision ratio for Virginia, and neither criteria set its ABA rows point to — Anthem Applied Behavioral Analysis for HMO/EPO, MCG Guidelines for PPO — is published. What does bind is statutory: covered ABA must be provided or supervised by a board certified behavior analyst who is licensed by the Virginia Board of Medicine, making licensure a coverage condition rather than only a credentialing one, and the Board\'s regulations at 18VAC85-150 make the licensed behavior analyst responsible for care rendered under that supervision, with an assistant behavior analyst required to document supervision by an LBA. Anthem\'s own ABA provider resource guide reflects the structure on the claim side: work by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other QHP, with HM, HN and HO identifying the rendering staff level.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Va. Code § 54.1-2957.16 — licensure of behavior analysts', url: 'https://law.lis.virginia.gov/vacode/title54.1/chapter29/section54.1-2957.16/' },
          { title: '18VAC85-150-10 — behavior analyst regulations, definitions', url: 'https://law.lis.virginia.gov/admincode/title18/agency85/chapter150/section10/' },
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'A physician or other QHP billing 97155 can add 97153 only if both the technician and the QHP are face-to-face with the patient at the same time and the QHP is directing the technician. Supervised or directed services billed alongside a QHP-performed procedure are also subject to Anthem\'s Incident To Services and Billing reimbursement policy.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      dailyLimits: {
        value: 'No per-day unit ceiling is published for Virginia. Every ABA code carries its own precertification row, and from January 1, 2026 reimbursement runs on weekly approved units — units rendered above the approved weekly limit are ineligible and adjusted. ABA codes may separately carry CMS MUE limits, administered as NCCI edits under Anthem\'s Code and Clinical Editing Guidelines reimbursement policy.',
        status: 'verified',
        cites: [
          { title: 'Virginia Local Precertification/Prior Authorization List — PPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-S2374-DISTRO-VA-PA-PPO-List.pdf' },
          { title: 'Anthem Virginia — Streamlined ABA claim process starts January 1, 2026', url: 'https://providernews.anthem.com/virginia/articles/streamlined-aba-claim-process-starts-january-1-2026-27882' },
        ],
      },
      noteSignature: {
        value: 'Each medical-record entry must carry author identification — handwritten signature, unique electronic identifier, or initials — plus rendering provider credentials. Entries are expected at the time of service or shortly thereafter and should not exceed 30 days, with a signature date within 30 days of the date of service. Timed codes require total treatment minutes plus start and stop times. Treatment plans must show review or update at least every 6 months; separately, Virginia law caps insurer-initiated plan review at once every 12 months absent agreement with the treating physician or psychologist.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
      placeOfService: {
        value: 'POS codes Anthem names for ABA: 12 home, 11 office/clinic, 99 community, 03 school, 10 telehealth with the member at home, 02 telehealth with the member elsewhere — each subject to the member\'s coverage and plan review.',
        status: 'verified',
        cites: [{ title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' }],
      },
      billAsProvider: {
        value: 'ABA delivered by therapy assistants, behavior technicians or paraprofessionals must show the supervising BCBA or other QHP in box 31 of the CMS-1500, with degree-level modifiers HM, HN and HO identifying the rendering staff level. In Virginia the supervising analyst must additionally be a board certified behavior analyst licensed by the Virginia Board of Medicine, and the prescribing practitioner must be independent of the ABA provider.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
        ],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Any age. Virginia\'s mandate has applied to individuals of any age since 1/1/2020 — 2019\'s HB 2577 removed the old age-2 floor as well as the upper limit — for individual and group policies and HMO contracts, extended to the individual and small group markets for policies delivered, issued, reissued or extended on or after 1/1/2021. ABA remains subject to a $35,000 annual maximum benefit unless the insurer elects more, with no visit limits; as a quantitative treatment limit on a mental-health benefit that cap is a live parity question for large-group plans rather than a settled rule. Self-funded ERISA plans sit outside the statute. Anthem\'s own Virginia precertification lists carry no age column for the ABA rows.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        ],
      },
      dxRecency: {
        value:
          'No recency window is published. Neither Virginia\'s statute nor Anthem\'s Virginia precertification lists date the diagnosis, and neither of the two criteria sets the lists point to — Anthem Applied Behavioral Analysis for HMO and EPO, MCG Guidelines for PPO — is published. What Virginia does date is review: the insurer may review the treatment plan not more than once every 12 months unless the insurer and the individual\'s licensed physician or psychologist agree more frequent review is necessary.',
        status: 'unverified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        ],
        verifyVia: 'Anthem behavioral health prior authorization at 800-755-0851 or via Availity — the criteria sets behind the ABA rows (Anthem Applied Behavioral Analysis; MCG B-806-T) are not published.',
        blocker: 'licensed',
      },
      diagnosingProviders: {
        value:
          'Virginia writes the gate into the benefit itself: covered ABA must be provided or supervised by a board certified behavior analyst licensed by the Board of Medicine, and the prescribing practitioner must be independent of the ABA provider. The treatment plan is defined as one developed by a licensed physician or licensed psychologist following a comprehensive evaluation or reevaluation performed consistently with the most recent clinical report or recommendation of the AAP or AACAP, and treatment must be prescribed or ordered by a licensed physician or psychologist who determines it medically necessary. A referral written by a clinician inside your own practice can fail the independence test. This is where Anthem\'s own multi-state ABA provider resource guide can mislead: it lists a broad approved set including psychiatrists, psychologists, LCSWs, LPCs, LMFTs with ABA training, BCBAs and people working under BCBA direction. In Virginia the statute is the narrower and controlling standard — credential to the statute, not to the guide.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
        ],
      },
      diagnosticTools: {
        value:
          'No instrument list is published for Virginia. The statute names none; it requires the treatment plan to follow a comprehensive evaluation or reevaluation performed consistently with the most recent clinical report or recommendation of the AAP or AACAP. Anthem\'s HMO/EPO and PPO criteria sets for ABA are not published, so what you can control is the completeness of the submission.',
        status: 'unverified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        ],
        verifyVia: 'Anthem behavioral health prior authorization at 800-755-0851 or via Availity — neither the Anthem Applied Behavioral Analysis criteria nor MCG B-806-T is published.',
        blocker: 'licensed',
      },
      referral: {
        value:
          'Yes, and it is statutory rather than a carrier rule: treatment must be prescribed or ordered by a licensed physician or licensed psychologist who determines the care medically necessary, and that prescribing practitioner must be independent of the ABA provider. The insurer may review the treatment plan not more than once every 12 months unless the insurer and the individual\'s licensed physician or psychologist agree more frequent review is necessary, with the cost of any such review covered under the policy. Anthem layers its own process on top: prior authorization is requested through Availity, the mental health and substance use prior-authorization line is 800-755-0851 staffed 24/7, and for non-urgent requests all required clinical information should be submitted 14 calendar days before the proposed service. The ordering or rendering provider is responsible for completing the prior-authorization process. On HMO products services rendered without prior authorization are not eligible for reimbursement; on EPO and PPO prior approval is highly recommended and skipping it triggers a pre-payment claim review that may end in denial.',
        status: 'verified',
        cites: [
          { title: 'Va. Code § 38.2-3418.17 (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title38.2/chapter34/section38.2-3418.17/' },
          { title: 'Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        ],
      },
      telehealth: {
        value:
          'Anthem names the telehealth places of service for ABA directly: POS 10 for telehealth with the member at home and POS 02 for telehealth with the member elsewhere, each subject to the member\'s coverage and plan review, alongside POS 12 home, 11 office/clinic, 99 community and 03 school.',
        status: 'verified',
        cites: [
          { title: 'Anthem ABA Provider Resource Guide — 11-state commercial (June 2025)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/aba-provider-resource-guide-abcbs.pdf' },
        ],
      },
      authTurnaround: {
        value:
          'Depends on how the plan is funded. Fully insured Virginia plans: Virginia\'s utilization-review statute requires the entity to "communicate its utilization review decision no later than two business days after receipt by the entity of all information necessary to complete the review" — the clock starts only once the file is complete. Self-funded (ERISA) plans are excluded from that article and follow the federal claims rule instead: a pre-service decision within 15 days of receipt (one 15-day extension allowed, with notice; if the extension is for missing information you get at least 45 days to supply it) and an urgent-care decision within 72 hours; a request to extend an ongoing course of treatment that is urgent is decided within 24 hours if made at least 24 hours before the current authorization expires. Anthem\'s Virginia precertification lists add a submission lead time: "For non-urgent requests, submit all required clinical information 14 calendar days before the proposed service when possible."',
        status: 'plan-dependent',
        cites: [
          { title: 'Va. Code § 32.1-137.9 — utilization review standards (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.9/' },
          { title: 'Va. Code § 32.1-137.8 — application; ERISA-exempt plans excluded (Virginia LIS)', url: 'https://law.lis.virginia.gov/vacode/title32.1/chapter5/section32.1-137.8/' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure (eCFR)', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'Anthem Virginia Local Precertification/Prior Authorization List — HMO & EPO (updated September 1, 2026)', url: 'https://www.anthem.com/content/dam/digital/docs/provider/commercial/guides/VA-BCBS-CM-DISTRO_VA_HMO_PA_List.pdf' },
        ],
        verifyVia: 'Benefits verification: ask whether the plan is fully insured (Virginia UR statute applies) or self-funded ERISA (federal 15-day/72-hour rule), and the carrier\'s turnaround for its behavioral health reviewer.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Anthem\'s Virginia ABA documents publish no coordination-of-benefits rule; order of benefits follows the plan document. If the child also has TRICARE, this plan pays first — TRICARE is the secondary payer to other health insurance under its double-coverage rule (Medicaid is the only coverage it pays ahead of). CHAMPVA likewise pays last: "In double coverage situations, CHAMPVA would be the last payer." If the child also has Medicaid, this plan is primary and Medicaid pays last. When the child has two parents\' plans, the plan\'s own coordination-of-benefits provision decides the order — a self-funded plan writes its own rules. For Virginia HMO contracts, 14VAC5-211-80 lets the plan coordinate but says it "shall not be relieved of its duty to provide a covered health care service" because of other coverage, must "provide or arrange for the service first and then, at its option, seek coordination of benefits," and "Until a coordination of benefits determination is made, the enrollee shall not be held liable."',
        status: 'plan-dependent',
        cites: [
          { title: '14VAC5-211-80 — HMO coordination of benefits (Virginia LIS)', url: 'https://law.lis.virginia.gov/admincode/title14/agency5/chapter211/section80/' },
          { title: '32 CFR 199.8 — TRICARE double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-32/section-199.8' },
          { title: '38 CFR 17.270 — CHAMPVA definitions, double coverage (eCFR)', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
          { title: '42 CFR 433.139 — Medicaid third-party liability, payment of claims (eCFR)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
        ],
        verifyVia: 'Benefits verification with each plan: which is primary for the child (order-of-benefits rule, custody/court order), and whether the secondary plan needs its own authorization.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem BCBS Virginia require prior authorization for ABA?', a: 'Yes, and for every code. Anthem\'s Virginia HMO/EPO and PPO precertification lists name 97151 through 97158 plus 0362T and 0373T as individual rows with Anthem as the responsible party. On HMO, services without prior authorization are not eligible for reimbursement; on EPO and PPO, prior approval is "highly recommended" and skipping it triggers a pre-payment claim review that may end in denial.' },
      { q: 'Is the 97151 assessment separately authorized in Virginia?', a: 'Yes. It appears as its own row on both Virginia lists rather than being folded into a treatment authorization, so request it in its own right.' },
      { q: 'Is there still a $35,000 ABA cap in Virginia?', a: 'The statute still carries it: Va. Code § 38.2-3418.17(K) subjects ABA to an annual maximum benefit of $35,000 unless the insurer elects to provide more, while separately barring visit limits. As a quantitative treatment limit on a mental-health benefit, its enforceability against a large-group plan is a parity question worth raising rather than conceding.' },
      { q: 'What age does the Virginia autism mandate cover?', a: 'Any age, for policies delivered, issued for delivery, reissued or extended on or after January 1, 2020. The amendment removed the old lower bound of age two as well as the upper limit.' },
      { q: 'Does Anthem cover all of Virginia?', a: 'No. Anthem and its affiliate HealthKeepers, Inc. serve all of Virginia except the City of Fairfax, the Town of Vienna, and the area east of State Route 123. A family in that Northern Virginia sliver holding a Blue card is on a different plan.' },
      { q: 'Who is allowed to deliver covered ABA in Virginia?', a: 'A board certified behavior analyst who is also licensed by the Virginia Board of Medicine, or someone under that person\'s supervision — and the practitioner prescribing the ABA must be independent of the ABA provider. Anthem\'s multi-state ABA guide lists a broader set of approved providers; in Virginia the statute is the narrower and controlling standard.' },
    ],
  },
};

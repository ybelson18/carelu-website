import type { PayerConfig } from './types.js';

export const californiaPayers: Record<string, PayerConfig> = {
  'medi-cal-california-medicaid': {
    slug: 'medi-cal-california-medicaid',
    cardDesc: 'BHT for under-21s regardless of diagnosis, via the county Medi-Cal plan; no hour caps; Regional Center pays last.',
    assessmentPA: {
      value: 'Plan-dependent — no state document makes the behavior-analytic assessment itself PA-exempt or PA-required; the State Plan attaches prior authorization to the treatment plan, so each Medi-Cal plan sets its own rule for 97151',
      status: 'plan-dependent',
      cites: [
        { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
        { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
        { title: 'DHCS APL 26-008 — Interoperability Final Rules, Including Prior Authorization Requirements (5/12/2026)', url: 'https://www.dhcs.ca.gov/file/apl-26-008-pdf/' },
      ],
      verifyVia: 'The member’s Medi-Cal plan (its BHT prior-authorization list or provider manual — APL 26-008 requires every plan to publish "A list of all items and services that require Prior Authorization"); for fee-for-service members, the Medi-Cal Provider Manual TAR/SAR section.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — BHT is delivered "under a prior authorized behavioral treatment plan"; services without authorization are not paid, and the plan is reviewed at least every six months with a new authorization to continue',
      status: 'verified',
      cites: [
        { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
        { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
      ],
    },
    dxRequired: {
      value: 'No — BHT is covered for under-21s "regardless of diagnosis, based upon a recommendation of a licensed physician or a licensed psychologist"; an ASD diagnosis is not a prerequisite',
      status: 'verified',
      cites: [
        { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
        { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      ],
    },
    payer: 'Medi-Cal (California Medicaid)',
    state: 'CA', kind: 'state-medicaid',
    pill: 'Payer Guide · Medi-Cal (California)',
    h1: 'Medi-Cal ABA (Behavioral Health Treatment) coverage: the intake guide.',
    metaTitle: 'Medi-Cal ABA (BHT) Coverage, Prior Auth & Regional Centers | Carelu',
    metaDescription:
      'How Medi-Cal covers ABA as Behavioral Health Treatment (BHT) for members under 21 — no autism diagnosis required, the county Medi-Cal plan as primary payer, the Regional Center as payer of last resort, no hour caps, the QAS staffing tiers, DDS-based fee-for-service rates, and the 2026 prior-auth clocks.',
    intro: [
      'California calls ABA "Behavioral Health Treatment" (BHT), and Medi-Cal covers it as an EPSDT benefit for every member under 21 for whom a licensed physician or psychologist recommends it — "regardless of diagnosis." For the vast majority of families the payer is not DHCS directly but their county Medi-Cal managed care plan: APL 23-010 makes the plan "the primary Provider of Medically Necessary BHT services," responsible for filling whatever the school district or Regional Center does not. Regional Centers (the Department of Developmental Services system under the Lanterman Act) sit last in line: they will not buy a service Medi-Cal or private insurance should cover. The practical upshot for intake: find out which Medi-Cal plan the child is enrolled in, get the physician or psychologist recommendation, and route there first.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — BHT for members under 21, "regardless of diagnosis," on a physician/psychologist recommendation' },
      { label: 'Who pays', value: 'The county Medi-Cal plan (MCP) for managed-care members; DHCS fee-for-service or a Regional Center for FFS members' },
      { label: 'Regional Centers', value: 'Payer of last resort — need a Medi-Cal or insurance denial for children 3+ (W&I 4659)' },
      { label: 'Assessment auth', value: 'Set by each plan — no state rule on 97151' },
      { label: 'Treatment auth', value: 'Required — prior-authorized treatment plan, reviewed at least every 6 months' },
      { label: 'Hour caps', value: 'Prohibited — "caps on number of hours" banned; no cuts for school hours' },
      { label: 'Parent participation', value: 'Cannot be required as a condition of BHT' },
      { label: 'FFS rates', value: 'Usual & customary, else DDS regional-center rate models (BA $141–$164/hr, BT $67–$79/hr eff. 7/1/2026)' },
      { label: 'Licensure', value: 'None — California has no behavior analyst license; the QAS provider/professional/paraprofessional tiers govern' },
    ],
    sections: [
      {
        h2: 'Coverage: under 21, a recommendation instead of a diagnosis',
        body: [
          'The State Plan (Limitations on Attachment 3.1-A, effective January 1, 2025) covers BHT "as medically necessary services for Medi-Cal members under 21 years of age, regardless of diagnosis, based upon a recommendation of a licensed physician or a licensed psychologist." APL 23-010 frames it the same way: coverage "includes children diagnosed with autism spectrum disorder (ASD) and children for whom a licensed physician, surgeon, or psychologist determines that BHT services … are Medically Necessary, regardless of diagnosis." The APL\'s eligibility criteria add that the member must be medically stable and not need 24-hour medical or nursing monitoring. Intake should collect the recommendation letter first; a full diagnostic report helps but is not the gate.',
          'The benefit is broad by design. "Blanket limitations or restrictions on benefits and services, such as caps on number of hours, are prohibited," plans "must not reduce the number of Medically Necessary BHT hours … by the hours the Member spends at school," and plans "cannot require participation by parents/guardians" (guardians must be permitted to take part). Excluded: respite, day care, recreational and educational services, custodial care, services delivered by a parent, and services in a "non-conventional setting, including, but not limited to, resorts, spas, and camps."',
        ],
        cites: [
          { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      {
        h2: 'Medi-Cal plan vs. Regional Center vs. school: who pays first',
        body: [
          'Managed-care members (about 12.8 million people across all Medi-Cal medical plans in August 2026): BHT is the plan\'s responsibility. APL 23-010 says "MCPs have primary responsibility for ensuring that EPSDT members receive all Medically Necessary BHT services," and "When services provided by a LEA or RC do not fulfill all of the Member\'s medical need for BHT services, the MCP must authorize any remaining Medically Necessary services." A service only counts as duplicative if the other entity\'s service "is currently being provided, is the same type of service (e.g., ABA), addresses the same deficits, and is directed to equivalent goals." Plans "must not rely on LEA programs to be the primary Provider," and if plan-approved BHT is written into an IEP, the plan "is solely financially responsible" for it "until such time that the IEP is amended."',
          'Fee-for-service members: the Provider Manual gives them "a choice to receive BHT services either through their local Regional Centers or directly through enrolled Medi-Cal fee-for-service providers who bill DHCS," the Regional Center route being funded through an interagency agreement between DHCS and DDS.',
          'Regional Centers: under the Lanterman Act they "shall not purchase any service that would otherwise be available from Medi-Cal, … private insurance, or a health care service plan" when the family qualifies for that coverage, and for consumers three and older they will not buy medical services without "documentation of a Medi-Cal, private insurance, or a health care service plan denial" (W&I 4659). They can pay while coverage is pursued or on appeal. A family whose Regional Center service coordinator is "working on ABA" still belongs at the Medi-Cal plan first.',
        ],
        cites: [
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
          { title: 'Welfare & Institutions Code § 4659 — Regional Center use of generic resources', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=4659' },
          { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
        ],
      },
      {
        h2: 'The plan landscape: which Medi-Cal plan is the child in?',
        body: [
          'Every California county runs one of five plan models: County Organized Health System (one public plan for the county — 34 counties, e.g. CalOptima in Orange and Partnership HealthPlan across the north), Two-Plan (a local initiative plus a commercial plan — 14 counties, e.g. L.A. Care and Health Net in Los Angeles), Geographic Managed Care (Sacramento and San Diego, several plans), Single Plan (Alameda, Contra Costa, Imperial) and Regional (Amador, Calaveras, Inyo, Mono, Tuolumne). Kaiser Permanente has held a direct DHCS contract since January 2024 and appears across roughly 30 counties.',
          'By August 2026 enrollment, the largest plans are L.A. Care Health Plan (2.08 million), Health Net Community Solutions (about 1.44 million), Inland Empire Health Plan (1.37 million), Kaiser Permanente (1.26 million), Partnership HealthPlan of California (847,000), CalOptima Health (773,000), Anthem Blue Cross Partnership Plan (745,000) and Molina Healthcare of California (462,000) — each has its own guide in this directory. The rest: Central California Alliance for Health, CalViva Health (Fresno/Kings/Madera, administered with Health Net), Kern Health Systems, Health Plan of San Joaquin, Alameda Alliance for Health, Community Health Group, Santa Clara Family Health Plan, Contra Costa Health Plan, CenCal Health, Gold Coast Health Plan, Blue Shield of California Promise Health Plan, San Francisco Health Plan, Health Plan of San Mateo, Community Health Plan of Imperial Valley and Mountain Valley Health Plan. Aetna Better Health of California left Medi-Cal on January 1, 2024; neither Aetna, Cigna nor UnitedHealthcare runs a Medi-Cal plan in 2026.',
        ],
        cites: [
          { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
          { title: 'DHCS — Medi-Cal Plans with Medi-Medi Plans in 2026 (county landscape, Sept 2025)', url: 'https://www.dhcs.ca.gov/file/2026-medi-medi-plan-list-pdf/' },
        ],
      },
      {
        h2: 'Staffing: the QAS tiers, and no license',
        body: [
          'California has no behavior analyst license — it does not appear on the BACB\'s licensure table. In Medi-Cal, staffing runs on the qualified autism service (QAS) tiers in State Plan Supplement 6 (effective January 1, 2026). A QAS Provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board, that is accredited by the National Commission for Certifying Agencies") or a licensed practitioner (physician, psychologist, MFT, LCSW, LPCC, educational psychologist, OT, PT, SLP, audiologist). A QAS Professional works "supervised by a qualified autism service provider": BCaBAs, Behavior Management Assistants, registered associates (ACSW, AMFT, APCC) and psychological associates. A QAS Paraprofessional — the technician tier — is supervised by a provider or professional and qualifies with a high-school diploma plus 30 hours of competency-based training designed by a BCBA and six months of experience, or an associate degree plus six months. No RBT credential is required, and no state document sets a supervision ratio.',
          'SB 402 (Stats. 2025, ch. 413, effective January 1, 2026) moved the QAS definitions into a new Business & Professions Code chapter (§§ 4999.200–4999.202) and added QAS providers and professionals to the telehealth provider definition — but it did not create a license.',
        ],
        cites: [
          { title: 'Medi-Cal State Plan — Supplement 6 to Att. 3.1-A, BHT Services Chart (TN CA-26-0012, eff. 1/1/2026)', url: 'https://www.dhcs.ca.gov/file/supplement-6-to-attachment-3-1-a-pdf/' },
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB402' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
        ],
      },
      {
        h2: 'Rates: fee-for-service pays DDS regional-center rates',
        body: [
          'Medi-Cal does not price fee-for-service BHT on a DHCS CPT-unit schedule for behavior analysts. State Plan Attachment 4.19-B (pp. 89–90, effective January 1, 2025) pays behavior analysts, associate behavior analysts, behavior management assistants and behavioral technicians their "usual and customary rate" if they have one, and otherwise "the Department of Developmental Services (DDS) Fee Schedules methodology" — the DDS rate-reform models, set per regional center, paid at "90% of the rate study benchmark, with the opportunity to earn the remaining 10% through the Quality Incentive Program." The DDS files effective July 1, 2026 put the Behavior Analyst hourly full rate between $141.11 (e.g. Eastern Los Angeles, South Central Los Angeles, Westside) and $164.17 (East Bay, San Andreas), and the Behavior Technician-Paraprofessional between $67.22 and $78.50 — the 90% base is what is paid before quality incentives. How DHCS converts those hourly rates into 15-minute CPT units on a claim is not stated in the pages read. Medi-Cal plan rates are contract rates; no DHCS BHT directed payment or minimum fee schedule for plans was found.',
        ],
        cites: [
          { title: 'Medi-Cal State Plan — Att. 4.19-B pp. 89–90, BHT reimbursement methodology (TN 24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/attachment-4-19-b-pages-89-90-pdf/' },
          { title: 'DDS — Rate Reform: Complete Rate Models by Regional Center (rates eff. 7/1/2026)', url: 'https://www.dds.ca.gov/rc/vendor-provider/rate-reform/rate-models/' },
        ],
      },
    ],
    collect: [
      { title: 'Which Medi-Cal plan', desc: 'The plan name on the card (L.A. Care, Health Net, IEHP, Kaiser, CalOptima …) — or fee-for-service. The plan, not DHCS, authorizes BHT for managed-care members.' },
      { title: 'Physician or psychologist recommendation', desc: 'A licensed physician/surgeon or psychologist’s written recommendation that BHT is medically necessary — required even without an autism diagnosis.' },
      { title: 'Regional Center status', desc: 'Is the child a Regional Center client? The RC pays only after Medi-Cal and private insurance — capture the service coordinator’s name for coordination.' },
      { title: 'Other coverage', desc: 'Any employer plan, TRICARE or CHAMPVA pays before Medi-Cal — collect it, because the Medi-Cal plan will want the primary’s denial or EOB.' },
      { title: 'School services / IEP', desc: 'Any ABA in the IEP — plans cannot count school hours against BHT, but they coordinate to avoid true duplication.' },
    ],
    sources: [
      { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
      { title: 'Medi-Cal State Plan — Supplement 6 to Att. 3.1-A, BHT Services Chart (TN CA-26-0012, eff. 1/1/2026)', url: 'https://www.dhcs.ca.gov/file/supplement-6-to-attachment-3-1-a-pdf/' },
      { title: 'Medi-Cal State Plan — Att. 4.19-B pp. 89–90, BHT reimbursement methodology (TN 24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/attachment-4-19-b-pages-89-90-pdf/' },
      { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
      { title: 'Medi-Cal Provider Manual — Telehealth Modalities (tele mod), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=telemod.pdf' },
      { title: 'DHCS APL 23-007 — Telehealth Services Policy (4/10/2023)', url: 'https://www.dhcs.ca.gov/file/apl23-007-pdf/' },
      { title: 'DHCS APL 21-011 (Revised 8/31/2022) — Grievance and Appeals Requirements', url: 'https://www.dhcs.ca.gov/file/apl21-011-pdf/' },
      { title: 'DHCS APL 26-008 — Interoperability Final Rules, Including Prior Authorization Requirements (5/12/2026)', url: 'https://www.dhcs.ca.gov/file/apl-26-008-pdf/' },
      { title: 'DHCS APL 22-027 — Cost Avoidance and Post-Payment Recovery for Other Health Coverage', url: 'https://www.dhcs.ca.gov/file/apl22-027-pdf/' },
      { title: 'Welfare & Institutions Code § 4659 — Regional Center use of generic resources', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=4659' },
      { title: 'Welfare & Institutions Code § 14124.90 — Medi-Cal payer of last resort', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=14124.90' },
      { title: 'DDS — Rate Reform: Complete Rate Models by Regional Center (rates eff. 7/1/2026)', url: 'https://www.dds.ca.gov/rc/vendor-provider/rate-reform/rate-models/' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The State Plan covers BHT "for Medi-Cal members under 21 years of age" and APL 23-010 is titled "Responsibilities for Behavioral Health Treatment Coverage for Members Under the Age of 21." No minimum age is set, and neither document creates an adult BHT benefit.',
        status: 'verified',
        cites: [
          { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      dxRecency: {
        value: 'No state recency rule — no diagnosis is required at all, only a physician or psychologist recommendation, and neither APL 23-010, the State Plan nor the fee-for-service manual puts an age on that recommendation. California’s 2026 ban on requiring a rediagnosis (H&S 1374.73(c)) does not reach Medi-Cal: § 1374.73(e)(2) excludes "A health care service plan contract in the Medi-Cal program." Any recency expectation is the individual plan’s.',
        status: 'plan-dependent',
        cites: [
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'The member’s Medi-Cal plan BHT authorization form or UM line — ask how recent the physician/psychologist recommendation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'The gate is a recommendation, not a diagnosis, and it must come from "a licensed physician or a licensed psychologist" (State Plan, 2025) — APL 23-010 says "a licensed physician, surgeon, or psychologist," and its first eligibility criterion is that the member "Has a recommendation from a licensed physician, surgeon, or psychologist that evidence-based BHT services are Medically Necessary."',
        status: 'verified',
        cites: [
          { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      diagnosticTools: {
        value: 'None named by the state. APL 23-010 requires plans to "use current clinical criteria and guidelines," to ensure independent review if they use InterQual, and to "disclose the specific criteria on which any denial of authorization is based" — so the instruments a plan expects are set by its own UM criteria.',
        status: 'plan-dependent',
        cites: [
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
        verifyVia: 'The member’s Medi-Cal plan BHT policy or UM criteria (plans must disclose the criteria behind any denial); some plans use licensed InterQual criteria.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Yes — a written recommendation from a licensed physician/surgeon or psychologist that BHT is medically necessary is the front door (APL 23-010 eligibility criterion 1; State Plan item 13c). No validity period is stated at the state level. Treatment then runs under a plan-approved behavioral treatment plan.',
        status: 'verified',
        cites: [
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
          { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
        ],
      },
      telehealth: {
        value: 'Medi-Cal has no BHT-specific telehealth code list. The general rule (Provider Manual "Telehealth Modalities"; APL 23-007) lets any covered code be delivered by telehealth when the distant-site provider "believes that the Medi-Cal covered benefits or services being provided are clinically appropriate," with modifier 95 (video) or 93 (audio-only), POS 02 or 10, documented consent, an offer of in-person care, and payment parity. The provider must meet B&P 2290.5(a)(3), which SB 402 amended from January 1, 2026 to include "A qualified autism service provider certified by a national entity" and "a qualified autism service professional" — QAS paraprofessionals (the technicians who deliver 97153) are not on that list, so whether technician-delivered 97153 by telehealth is payable is not settled in any state document.',
        status: 'plan-dependent',
        cites: [
          { title: 'Medi-Cal Provider Manual — Telehealth Modalities (tele mod), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=telemod.pdf' },
          { title: 'DHCS APL 23-007 — Telehealth Services Policy (4/10/2023)', url: 'https://www.dhcs.ca.gov/file/apl23-007-pdf/' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB402' },
        ],
        verifyVia: 'The member’s Medi-Cal plan BHT/telehealth policy — ask specifically whether 97153 delivered remotely by a paraprofessional is payable, and which POS/modifier to use.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Medi-Cal plans: APL 21-011 remains the operative letter (APL 26-008 says "For information on authorization timeframes and noticing requirements, see APL 21-011"): standard prospective and concurrent decisions in "no longer than five business days from the MCP’s receipt of information reasonably necessary," not to exceed 14 calendar days from receipt of the request, and expedited decisions within 72 hours. For rating periods starting on or after January 1, 2026, 42 CFR 438.210(d)(1) caps standard decisions at state time frames that "may not exceed 7 calendar days after receiving the request for service" — APL 26-008 acknowledges CMS-0057-F "changed the timeframe" without restating a number, so plan against 5 business days and never more than 7 calendar days. Fee-for-service: 42 CFR 440.230(e) requires standard decisions "in no case later than 7 calendar days" and expedited within 72 hours from January 1, 2026. Reauthorization: the treatment plan must be reviewed "no less than once every six months," with new authorization to continue.',
        status: 'verified',
        cites: [
          { title: 'DHCS APL 21-011 (Revised 8/31/2022) — Grievance and Appeals Requirements', url: 'https://www.dhcs.ca.gov/file/apl21-011-pdf/' },
          { title: 'DHCS APL 26-008 — Interoperability Final Rules, Including Prior Authorization Requirements (5/12/2026)', url: 'https://www.dhcs.ca.gov/file/apl-26-008-pdf/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: '42 CFR 440.230(e) — Medicaid fee-for-service prior authorization timeframes (from 1/1/2026)', url: 'https://www.ecfr.gov/current/title-42/section-440.230' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Medi-Cal pays after other coverage and before the Regional Center. W&I 14124.90: DHCS "shall be the payer of last resort," and "Providers shall seek reimbursement from available third-party health coverage before billing the Medi-Cal program." APL 22-027: members "with OHC must utilize their OHC for covered services prior to utilizing their Medi-Cal benefits," and a plan will not pay where the record shows other coverage "unless the Provider presents proof that all sources of payment have been exhausted" — a denial, an EOB showing non-coverage, or proof of billing with "no response for 90 days." Providers may not refuse a covered service because of other coverage. TRICARE pays ahead of Medi-Cal (10 U.S.C. 1079(i)(1) exempts "a plan administered under title XIX"). The Regional Center comes last (W&I 4659). Whether a Medi-Cal plan wants its own BHT authorization while it is secondary is not stated in APL 22-027 or 23-010 — ask the plan.',
        status: 'verified',
        cites: [
          { title: 'Welfare & Institutions Code § 14124.90 — Medi-Cal payer of last resort', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=14124.90' },
          { title: 'DHCS APL 22-027 — Cost Avoidance and Post-Payment Recovery for Other Health Coverage', url: 'https://www.dhcs.ca.gov/file/apl22-027-pdf/' },
          { title: 'Welfare & Institutions Code § 4659 — Regional Center use of generic resources', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=4659' },
          { title: '42 CFR 433.139 — Payment of claims (third-party liability)', url: 'https://www.ecfr.gov/current/title-42/section-433.139' },
          { title: '10 U.S.C. 1079 — TRICARE pays after other coverage except Medicaid', url: 'https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title10-section1079&num=0&edition=prelim' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'The State Plan sets tiers, not ratios. QAS Professionals are "supervised by a qualified autism service provider"; QAS Paraprofessionals are supervised by a QAS provider or professional; only QAS Providers (BCBA or licensed practitioner — the fee-for-service manual adds that a licensed practitioner needs "twelve semester units in ABA and … two years of experience") assess and develop the treatment plan, which must be reviewed at least every six months. The treatment plan itself must list the hours of "observation and direction" (APL 23-010). No state document sets a supervision percentage or ratio; each plan applies its own.',
        status: 'plan-dependent',
        cites: [
          { title: 'Medi-Cal State Plan — Supplement 6 to Att. 3.1-A, BHT Services Chart (TN CA-26-0012, eff. 1/1/2026)', url: 'https://www.dhcs.ca.gov/file/supplement-6-to-attachment-3-1-a-pdf/' },
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
        verifyVia: 'The member’s Medi-Cal plan BHT provider manual or policy — supervision ratios are plan-set.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not addressed. APL 23-010, the State Plan and the fee-for-service BHT manual set no rule on billing 97153 and 97155 for the same clock time; the only same-day restriction in the manual is that S5110 and S5111 may not both be billed on the same date for the same member.',
        status: 'unverified',
        cites: [
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
        ],
        verifyVia: 'The member’s Medi-Cal plan billing manual or provider services line; for fee-for-service, Medi-Cal claim edits via the Telephone Service Center.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No hour caps — by rule. APL 23-010: "Blanket limitations or restrictions on benefits and services, such as caps on number of hours, are prohibited," and plans "must not reduce the number of Medically Necessary BHT hours … by the hours the Member spends at school." No per-day unit ceiling is published in the state documents; any claim-level unit edits are the plan’s (or CA-MMIS’s for fee-for-service).',
        status: 'verified',
        cites: [
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      noteSignature: {
        value: 'No BHT session-note signature rule in the state documents. The fee-for-service manual lists documentation elements only for S5110/S5111 (date and duration, "Name and credentials of the provider," family members trained, goals, method, response, link to the plan), and says telehealth documentation "should be the same as for a comparable in-person service."',
        status: 'unverified',
        cites: [
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
          { title: 'Medi-Cal Provider Manual — Telehealth Modalities (tele mod), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=telemod.pdf' },
        ],
        verifyVia: 'The member’s Medi-Cal plan provider manual (documentation standards) or its BHT provider contract.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Home, clinic, community and school. The State Plan: BHT is "designed to be delivered in the home, a clinic, and other community settings." APL 23-010 requires the treatment plan to list services "in each community setting … including on-site at school or during remote school sessions," hours "proportionate to the Member’s medical need … in each setting," and bars plans from limiting BHT "on the basis of school attendance." Excluded: a "non-conventional setting, including, but not limited to, resorts, spas, and camps" — though the November 2025 fee-for-service manual’s exclusion names only "resorts and spas," so camps are no longer excluded for FFS members.',
        status: 'verified',
        cites: [
          { title: 'Medi-Cal State Plan — Limitations on Att. 3.1-A, item 13c BHT (TN CA-24-0031, eff. 1/1/2025)', url: 'https://www.dhcs.ca.gov/file/limitations-to-attachment-3-1-a-pdf/' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Fee-for-service: the enrolled QAS Provider or Community-Based Organization bills; individual staff are not enrolled — "Enrolled QAS Providers and Community-Based Organizations (CBOs) do not need to report QAS Providers, QAS Professionals or QAS Paraprofessionals in Medi-Cal’s online enrollment portal. This applies to QAS Providers and CBOs serving Medi-Cal members in fee-for-service and managed care," though a current roster must be available to DHCS. 97153 and 97154 "may be provided by QAS Paraprofessionals." Billable codes are 97151–97158 (modifiers U7, 99), 99366/99368, H0031, H0032, H2012, H2014, H2019, S5110 and S5111 — 0362T and 0373T are not on the fee-for-service BHT list. Rendering-NPI conventions for managed-care claims are set by each plan.',
        status: 'verified',
        cites: [
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Medi-Cal cover ABA therapy?', a: 'Yes — as Behavioral Health Treatment (BHT) for members under 21, "regardless of diagnosis," when a licensed physician or psychologist recommends it. Managed-care members get it through their county Medi-Cal plan.' },
      { q: 'Does my child need an autism diagnosis for Medi-Cal ABA?', a: 'No. The State Plan and APL 23-010 require a recommendation from a licensed physician or psychologist that BHT is medically necessary, not an ASD diagnosis.' },
      { q: 'Should we go through the Regional Center or Medi-Cal for ABA?', a: 'Medi-Cal first. The Medi-Cal plan is the primary BHT payer; Regional Centers are payer of last resort and, for children 3 and older, won’t fund ABA without a Medi-Cal or insurance denial (W&I 4659). Fee-for-service Medi-Cal members may choose either route.' },
      { q: 'Can Medi-Cal cap ABA hours or cut them for school time?', a: 'No. APL 23-010 prohibits "caps on number of hours" and bars plans from reducing medically necessary hours by the time the child spends at school.' },
      { q: 'Does California license behavior analysts?', a: 'No. California has no behavior analyst license; BCBAs practice as qualified autism service providers on national certification, with QAS professionals and paraprofessionals working under their supervision.' },
    ],
  },

  'la-care-health-plan-california': {
    slug: 'la-care-health-plan-california',
    family: '',
    cardDesc: 'Largest Medi-Cal plan (2.08M); BHT in-house via the ASD Program, H-codes on form LA5480, no autism dx required.',
    assessmentPA: {
      value: 'Required — the FBA is requested on form LA5480 as "H0032 for initial ABA assessment ONLY," up to 12 hours (48 units); "Do not schedule services until authorization is obtained"',
      status: 'verified',
      cites: [
        { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — BHT needs a "recommendation from a licensed physician or licensed psychologist, and prior authorization from L.A. Care"; direct service (H2019), supervision (H0031) and parent education (S5111) are requested as hours per month on LA5480, with reports on L.A. Care’s mandatory BHT reporting template',
      status: 'verified',
      cites: [
        { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
        { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
        { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
      ],
    },
    dxRequired: {
      value: 'No — "a diagnosis of autism or autism spectrum disorder is no longer required for children 0-21"; "A formal recommendation or prescription for ABA from a licensed psychologist or physician is a requirement"',
      status: 'verified',
      cites: [
        { title: 'L.A. Care — BHT Coverage for Members Under 21 (PCP flyer PL1757, 11/23)', url: 'https://www.lacare.org/sites/default/files/pl1757_bht_pcp_flyer_202311_0.pdf' },
        { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
      ],
    },
    payer: 'L.A. Care Health Plan (Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · L.A. Care Health Plan',
    h1: 'L.A. Care Health Plan ABA coverage (Medi-Cal).',
    metaTitle: 'L.A. Care Medi-Cal ABA (BHT) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How L.A. Care Health Plan covers Medi-Cal Behavioral Health Treatment (ABA) in Los Angeles County — the in-house ASD Program, no autism diagnosis required, form LA5480 and its H-code grid (H0032 = assessment here), the 12-hour FBA cap, the mandatory reporting template, and how Plan Partner members differ.',
    intro: [
      'L.A. Care Health Plan is the Los Angeles County local initiative and the largest Medi-Cal plan in the state — 2,078,171 members in August 2026. For its directly enrolled Medi-Cal members, BHT is run in-house: "BHT services are provided through L.A. Care’s directly contracted BHT network," not through the member’s medical group and not through Carelon (which handles mild-to-moderate mental health for Medi-Cal and BHT only for L.A. Care’s commercial lines). L.A. Care also has two Medi-Cal Plan Partners — Anthem Blue Cross and Blue Shield of California Promise Health Plan — whose members may carry a different card; check which plan manages the child before submitting.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Local initiative, Two-Plan model (Los Angeles County); Plan Partners: Anthem Blue Cross, Blue Shield Promise' },
      { label: 'Who runs BHT', value: 'L.A. Care’s own BH ASD Program (not the IPA, not Carelon) for direct Medi-Cal members' },
      { label: 'Diagnosis', value: 'Not required — physician/surgeon/psychologist recommendation' },
      { label: 'Assessment auth', value: 'Yes — H0032 on LA5480, up to 12 hours (48 units)' },
      { label: 'Codes', value: 'HCPCS: H0032 assessment, H0031 supervision, H2019 direct, S5111 parent education, H2014 group' },
      { label: 'Submit via', value: 'Fax LA5480 to (213) 438-5054; BHT line 1-888-347-2264; ASDbenefit@lacare.org' },
    ],
    sections: [
      {
        h2: 'How a BHT request works at L.A. Care',
        body: [
          'A PCP or family starts it: PCPs call 888-347-2264 or email ASDBenefit@lacare.org, or ask the "patient, parent, or caregiver to contact L.A. Care BHT team directly." The authorization form LA5480 (May 2026) says "All 4 criteria must be met for approval" — the member is under 21, has a licensed physician/surgeon/psychologist recommendation "with documentation demonstrating medical necessity," is medically stable with documentation, and needs no 24-hour or ICF-ID care. The functional behavior assessment is "H0032 for initial ABA assessment ONLY," up to "12hours total (48 units) across modifiers." Treatment is requested as hours per month: H2019 direct service (HN/HC/HP modifiers by tier), H0031-HP case supervision (with an optional second tier), S5111-HP for parent education programs, H2014 social skills group only if contracted. HN-level staff need a transcript and attestation. FBA, progress and closing reports must use L.A. Care’s mandatory BHT Reporting Template, which tracks the first appointment offered after FBA approval against a 10-day timeline.',
          'Watch the codes: L.A. Care uses H0032 for the assessment and H0031 for supervision — the reverse of IEHP and CalOptima. Never copy a code grid across plans. The form linked from L.A. Care’s BH Resources page (LA5480 10/25) is a dead link; use the 05/26 version from the Provider Manuals page.',
        ],
        cites: [
          { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
          { title: 'L.A. Care — BHT Coverage for Members Under 21 (PCP flyer PL1757, 11/23)', url: 'https://www.lacare.org/sites/default/files/pl1757_bht_pcp_flyer_202311_0.pdf' },
          { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Which plan manages the child', desc: 'L.A. Care direct vs. a Plan Partner card (Anthem Blue Cross, Blue Shield Promise) — the BHT process differs.' },
      { title: 'Recommendation with documentation', desc: 'From a licensed physician, surgeon or psychologist, showing medical necessity — no autism diagnosis needed.' },
      { title: 'Medical stability note', desc: 'LA5480 requires documentation (e.g. a physician note) that the child is medically stable.' },
      { title: 'Staff credentials for HN tier', desc: 'Transcript and attestation for bachelor’s-level (HN) staff.' },
      { title: 'Other coverage', desc: 'Commercial insurance pays first; L.A. Care needs the primary’s RA or denial for secondary claims.' },
    ],
    sources: [
      { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
      { title: 'L.A. Care — 2026 Universal Provider Manual Errata v3 (9/23/2026)', url: 'https://www.lacare.org/sites/default/files/la8085_upm_errata_list_v3_20260923.pdf' },
      { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
      { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
      { title: 'L.A. Care — BHT Coverage for Members Under 21 (PCP flyer PL1757, 11/23)', url: 'https://www.lacare.org/sites/default/files/pl1757_bht_pcp_flyer_202311_0.pdf' },
      { title: 'L.A. Care — Behavioral Health Services (provider page)', url: 'https://www.lacare.org/providers/tools/behavioral-health-services' },
      { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21 — "L.A. Care covers BHT for all Members under 21 years of age"; the PCP flyer says "0-21." No minimum age.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
          { title: 'L.A. Care — BHT Coverage for Members Under 21 (PCP flyer PL1757, 11/23)', url: 'https://www.lacare.org/sites/default/files/pl1757_bht_pcp_flyer_202311_0.pdf' },
        ],
      },
      dxRecency: {
        value: 'L.A. Care publishes no age limit on the recommendation (checked LA5480, the reporting template and the 2026 manual), and APL 23-010 sets none. Its reporting template requires skills-assessment results "Updated results required annually" and preference assessments every six months.',
        status: 'plan-dependent',
        cites: [
          { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
        verifyVia: 'L.A. Care BHT Department (1-888-347-2264 / ASDbenefit@lacare.org) — how recent the recommendation must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A licensed physician, surgeon or psychologist — the 2026 manual says "licensed physician or licensed psychologist" in one section and "licensed physician, surgeon, or psychologist" in the BHT chapter.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
          { title: 'L.A. Care — 2026 Universal Provider Manual Errata v3 (9/23/2026)', url: 'https://www.lacare.org/sites/default/files/la8085_upm_errata_list_v3_20260923.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'None required for the recommendation. For the FBA and progress reports the template asks for skills assessments "(e.g., VB-MAPP, Vineland, AFFLS, PEAK, etc.)," a preference assessment, and a functional or ABC analysis "Required for all target behaviors being addressed."',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
        ],
      },
      referral: {
        value: 'A PCP or the family can start it — PCPs call 888-347-2264 or email ASDBenefit@lacare.org, or have the "patient, parent, or caregiver … contact L.A. Care BHT team directly"; supporting documents (CDE, EPSDT results, recommendation) go by fax to 213-438-5054. BHT does not go through the member’s medical group or IPA.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — BHT Coverage for Members Under 21 (PCP flyer PL1757, 11/23)', url: 'https://www.lacare.org/sites/default/files/pl1757_bht_pcp_flyer_202311_0.pdf' },
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
        ],
      },
      telehealth: {
        value: 'No BHT-specific rule. L.A. Care’s general telehealth section requires a participating provider, disallows telehealth "when the Member and participating Provider are in the same physical location," and excludes "texting, facsimile or email only." Beyond that the Medi-Cal telehealth rule applies, which does not settle technician-delivered 97153/H2019 by video.',
        status: 'plan-dependent',
        cites: [
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
          { title: 'Medi-Cal Provider Manual — Telehealth Modalities (tele mod), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=telemod.pdf' },
        ],
        verifyVia: 'L.A. Care BHT Department (1-888-347-2264) — which BHT codes it will authorize by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'L.A. Care’s 2026 manual counts days from receipt (day 0) but publishes numeric decision times only for its D-SNP line, so the state rule governs its Medi-Cal BHT requests: APL 21-011 — standard decisions within five business days of receiving the information reasonably necessary, never more than 14 calendar days, and 72 hours expedited — capped from January 1, 2026 at 7 calendar days by 42 CFR 438.210(d). Separately, L.A. Care tracks the provider’s first appointment offer within 10 days of FBA approval. Reauthorization: the treatment plan is reviewed at least every six months (APL 23-010).',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
          { title: 'DHCS APL 21-011 (Revised 8/31/2022) — Grievance and Appeals Requirements', url: 'https://www.dhcs.ca.gov/file/apl21-011-pdf/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
          { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value: 'When another payer is primary, "Providers must follow the primary payor’s billing rules"; secondary claims go to L.A. Care within 180 calendar days of the primary’s determination with its RA or denial, and L.A. Care pays cost-sharing "up to the lower amount of its fee schedule or the Medicare/other insurance-allowed amount." Medi-Cal is payer of last resort (APL 22-027). L.A. Care does not say whether its own BHT authorization is required when commercial insurance is primary — ask the BHT Department.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — 2026 Universal Provider Manual (LA4289)', url: 'https://www.lacare.org/sites/default/files/la4289_upm_202512.pdf' },
          { title: 'DHCS APL 22-027 — Cost Avoidance and Post-Payment Recovery for Other Health Coverage', url: 'https://www.dhcs.ca.gov/file/apl22-027-pdf/' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision is authorized separately — H0031-HP required, with an optional second tier (HC for BCaBA/master’s, HN for bachelor’s). L.A. Care publishes no supervision ratio.',
        status: 'plan-dependent',
        cites: [
          { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
        ],
        verifyVia: 'L.A. Care BHT Department or your BHT provider contract.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not published — no L.A. Care rule on billing supervision (H0031) and direct service (H2019) for the same clock time; note L.A. Care authorizes HCPCS codes, not 97153/97155.',
        status: 'unverified',
        cites: [
          { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
        ],
        verifyVia: 'Your L.A. Care BHT contract or Provider Solutions (866-522-2736).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'The only published cap is on the assessment: "up to 12hours total (48 units)." No daily or weekly treatment cap is published — treatment is requested as hours per month — and APL 23-010 prohibits hour caps.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      noteSignature: {
        value: 'Reports (FBA, progress, closing) need a "Qualified Autism Service Provider Signature," credentials and date, plus a statement that the report "has been thoroughly discussed with client’s parent(s)" and the parent’s agreement or disagreement. No session-note rule is published.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
        ],
      },
      placeOfService: {
        value: 'Treatment "is typically conducted in children’s homes for hours a day and in other community settings" (PCP flyer); the reporting template has school sections (IEP, coordination with the school) and a "Location(s) of Services" field. The state rule underneath (APL 23-010) covers home, clinic, community and school.',
        status: 'verified',
        cites: [
          { title: 'L.A. Care — BHT Coverage for Members Under 21 (PCP flyer PL1757, 11/23)', url: 'https://www.lacare.org/sites/default/files/pl1757_bht_pcp_flyer_202311_0.pdf' },
          { title: 'L.A. Care — Behavioral Health Treatment Reporting Template (PL6030, 09/25)', url: 'https://www.lacare.org/sites/default/files/la6030_lac_bht_reporting_template_202509.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      billAsProvider: {
        value: 'Rendering level rides on the modifier: HP (BCBA-D/BCBA/licensed master’s), HC (BCaBA or master’s), HN (bachelor’s), HQ (group). The form captures the requesting and servicing organization; no NPI or enrollment rule is published.',
        status: 'plan-dependent',
        cites: [
          { title: 'L.A. Care — BHT/ABA Authorization Request Form LA5480 (05/26)', url: 'https://www.lacare.org/sites/default/files/la5480_bht_authorization_form_202605.pdf' },
        ],
        verifyVia: 'Your L.A. Care BHT contract — rendering vs. billing NPI for technician time.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does L.A. Care cover ABA therapy?', a: 'Yes — as Behavioral Health Treatment for Medi-Cal members under 21. No autism diagnosis is needed; a licensed physician, surgeon or psychologist must recommend it, and L.A. Care must authorize it.' },
      { q: 'How do I request ABA from L.A. Care?', a: 'Fax form LA5480 (05/26) with the recommendation and documentation to (213) 438-5054, or call the BHT team at 1-888-347-2264. The FBA is requested as H0032, up to 12 hours.' },
      { q: 'Does the member’s medical group handle ABA?', a: 'No. For L.A. Care’s direct Medi-Cal members, BHT goes through L.A. Care’s own BHT network, not the IPA. Members on a Plan Partner card (Anthem Blue Cross, Blue Shield Promise) may follow that plan’s process.' },
    ],
  },

  'health-net-community-solutions-california': {
    slug: 'health-net-community-solutions-california',
    family: 'centene',
    cardDesc: 'Health Net + CalViva Medi-Cal; new policy CA.CP.BH.104 (4/20/2026): 6 h/day–30 h/wk cap, 12-month dx eval, 6-month auths.',
    assessmentPA: {
      value: 'Required — ABA is "Authorized by the Behavioral Health Team" on the Medi-Cal PA list, and the PA form lists H0031 or 97151/97152/0362T by hours per authorization period; CA.CP.BH.104 treats the behavioral assessment as its own request',
      status: 'verified',
      cites: [
        { title: 'Health Net — Prior Authorization Requirements, California Medi-Cal (eff. 7/9/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/prior-authorization-requirements---medi-cal.html' },
        { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
        { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — PA form plus an updated treatment plan before services; initiation needs a behavioral assessment within two months, a diagnostic evaluation within 12 months and a plan "valid for six months"; addendums are no longer accepted (a change needs a new full request, and the old auth is ended)',
      status: 'verified',
      cites: [
        { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        { title: 'Health Net Medi-Cal Provider Manual — Autism Spectrum Disorders (updated 4/30/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/benefits/autism-spectrum-disorders-medi-cal.html' },
      ],
    },
    dxRequired: {
      value: 'No autism diagnosis — a physician or licensed clinical psychologist recommendation "regardless of diagnosis" — but initiation requires a diagnostic evaluation with a current DSM diagnosis within 12 months, so some diagnosis is expected',
      status: 'verified',
      cites: [
        { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
      ],
    },
    payer: 'Health Net Community Solutions (Medi-Cal) / CalViva Health',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · Health Net Medi-Cal',
    h1: 'Health Net Community Solutions ABA coverage (Medi-Cal, incl. CalViva Health).',
    metaTitle: 'Health Net Medi-Cal & CalViva ABA (BHT) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Health Net Community Solutions and CalViva Health cover Medi-Cal Behavioral Health Treatment (ABA) — policy CA.CP.BH.104 (April 2026), the 6-hour/30-hour intensity threshold, 12-month diagnostic evaluation and 2-month assessment clocks, 10% protocol-modification floor, the no-addendum rule, telehealth limits and ABA@healthnet.com submission.',
    intro: [
      'Health Net Community Solutions is the commercial-plan side of the Two-Plan model in Los Angeles (1.07 million members) and several Central Valley counties, one of the Sacramento GMC plans, and a Regional-model plan — about 1.43 million Medi-Cal members in August 2026. It also administers CalViva Health, the local initiative for Fresno, Kings and Madera (406,000 members), which "contracts with Health Net Community Solutions, Inc. to provide and arrange for network services." For both, BHT goes to Health Net’s in-house Behavioral Health Autism Center, and since April 20, 2026 its medical-necessity criteria are Health Net’s own Medi-Cal policy CA.CP.BH.104, which replaced the CASP criteria.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Medi-Cal commercial plan (Two-Plan counties incl. Los Angeles), GMC Sacramento, Regional counties; administers CalViva Health' },
      { label: 'Criteria', value: 'CA.CP.BH.104 (eff. 4/20/2026) + documentation policy CA.CP.BH.105' },
      { label: 'Diagnosis', value: 'Not ASD-specific — recommendation "regardless of diagnosis"; diagnostic evaluation within 12 months' },
      { label: 'Intensity threshold', value: '6 hours/day, 30 hours/week unless documentation justifies more' },
      { label: 'Supervision floor', value: 'Protocol modification ≥ 2 h/week or 10% of direct hours (≤ 20% unless justified)' },
      { label: 'Reauthorization', value: 'Every 6 months; attendance under 80% needs justification' },
      { label: 'Submit via', value: 'ABA@healthnet.com or fax 855-427-4798; BH Provider Services 844-966-0298' },
    ],
    sections: [
      {
        h2: 'Health Net’s Medi-Cal ABA criteria (April 2026)',
        body: [
          'CA.CP.BH.104 applies APL 23-010 with Health Net’s own clocks. The recommendation comes from "A licensed physician or licensed clinical psychologist … regardless of diagnosis" (Health Net’s referral form is "encouraged"); where there is no diagnosis or a non-autism diagnosis, "the recommendation/referral form must be less than one year old." Initiation needs a behavioral assessment "completed no more than two months prior to the start of the initial treatment authorization, by the current rendering provider," a diagnostic interview or evaluation "within 12 months of the authorization request" (DSM diagnosis, mental status, history, risk), and a treatment plan "valid for six months" with crisis, school-based, titration and transition plans. Treatment hours should "not exceed six hours per day up to a total of 30 hours per week" unless "clinical documentation justifies additional hours," and "The number of medically necessary BHT hours may not be reduced based on time spent in school." Protocol modification must be "at least two hours per week or 10% of the direct service hours provided, whichever is greater." Reauthorization is every six months; "If attendance falls below 80% of the authorized hours," supporting documentation is required.',
          'Mechanics: send the ABA PA form (24-992 for Health Net, 24-990 for CalViva) and treatment plan to the Behavioral Health Autism Center at ABA@healthnet.com or fax 855-427-4798. "Addendums to existing authorizations can no longer be accommodated" — for a change, submit a new full request (start date = when the change is needed, end date = current auth end) with a clinical-rationale letter, and "the existing authorization will be ended." Families without a provider can be contacted by an Autism Center utilization review clinician, or call Behavioral Health at 888-935-5966 for in-network providers.',
        ],
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
          { title: 'Health Net provider notice 26-196 — Updated ABA Medical Necessity Criteria for Medi-Cal', url: 'https://providerlibrary.healthnetcalifornia.com/news/26-196-updated-aba-medical-necessity-criteria-for-medi-cal--effe.html' },
          { title: 'Health Net Medi-Cal Provider Manual — Autism Spectrum Disorders (updated 4/30/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/benefits/autism-spectrum-disorders-medi-cal.html' },
          { title: 'Health Net — ABA Recommendation and Referral Form (24-989)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500231-ABA-Referral-Form-MCL.pdf' },
          { title: 'CalViva Health — ABA Prior Authorization Request Form (24-990)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500232-ABA-Prior-Auth-Request-Form-CVH.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Recommendation under a year old', desc: 'From an MD/DO or licensed clinical psychologist — must be less than one year old when there is no autism diagnosis.' },
      { title: 'Diagnostic evaluation within 12 months', desc: 'DSM diagnosis, mental status and history — required for initiation.' },
      { title: 'Fresh behavioral assessment', desc: 'Completed within two months of the requested start by the provider who will treat.' },
      { title: 'Planned hours and school schedule', desc: 'Over 6 h/day or 30 h/week needs documentation; school hours cannot reduce BHT, but services "in lieu of school" for age 6+ are a discontinuation ground.' },
      { title: 'Other coverage', desc: 'Primary insurance billed first; if it does not cover ABA, Health Net’s authorization applies.' },
    ],
    sources: [
      { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
      { title: 'Health Net CA.CP.BH.105 — ABA Documentation Requirements (rev. 7/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.105.pdf' },
      { title: 'Health Net provider notice 26-196 — Updated ABA Medical Necessity Criteria for Medi-Cal', url: 'https://providerlibrary.healthnetcalifornia.com/news/26-196-updated-aba-medical-necessity-criteria-for-medi-cal--effe.html' },
      { title: 'Health Net — Prior Authorization Requirements, California Medi-Cal (eff. 7/9/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/prior-authorization-requirements---medi-cal.html' },
      { title: 'Health Net Medi-Cal Provider Manual — Autism Spectrum Disorders (updated 4/30/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/benefits/autism-spectrum-disorders-medi-cal.html' },
      { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
      { title: 'CalViva Health — ABA Prior Authorization Request Form (24-990)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500232-ABA-Prior-Auth-Request-Form-CVH.pdf' },
      { title: 'Health Net — ABA Recommendation and Referral Form (24-989)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500231-ABA-Referral-Form-MCL.pdf' },
      { title: 'Health Net Medi-Cal — Coordination of Benefits Overview (updated 12/18/2024)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/coordination-benefits/overview-medi-cal.html' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: '"Member/enrollee is < 21 years old and medically stable" (CA.CP.BH.104). No minimum age.',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
      dxRecency: {
        value: 'Two clocks: with no diagnosis or a non-autism diagnosis, "the recommendation/referral form must be less than one year old," and the diagnostic interview/evaluation must be "within 12 months of the authorization request." The behavioral assessment must be no more than two months before the initial authorization, and updated assessments are due "at least every six months."',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'The recommendation comes from a physician (MD/DO) or licensed clinical psychologist (PsyD/PhD) — Health Net’s referral form "must be completed by a physician or licensed psychologist." The policy does not separately specify who writes the diagnostic evaluation.',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
          { title: 'Health Net — ABA Recommendation and Referral Form (24-989)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500231-ABA-Referral-Form-MCL.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No instrument is mandated for the diagnosis. The treatment assessment must include direct observation and at least one of an FBA (descriptive FBA, traditional FA, IISCA) or a skills assessment (VB-MAPP, ABLLS-R, AFLS, PEAK, EFL, SSIS, Socially Savvy, other); "If the Vineland … or … ABAS is used as a skills assessment, an additional, direct skills assessment is required."',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
      referral: {
        value: 'The physician or psychologist completes the ABA referral form and gives it "to the parent/caregiver or their chosen in-network ABA provider," or sends it to ABA@healthnet.com / fax 855-427-4798; no PCP or medical-group referral is needed — members "do not need to contact their primary care physician (PCP), participating physician group (PPG)… to request a referral for mental health care services."',
        status: 'verified',
        cites: [
          { title: 'Health Net — ABA Recommendation and Referral Form (24-989)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500231-ABA-Referral-Form-MCL.pdf' },
          { title: 'Health Net Medi-Cal Provider Manual — Behavioral Health Overview (updated 12/5/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/benefits/behavioral-health/overview-medi-cal.html' },
        ],
      },
      telehealth: {
        value: 'Allowed under the DHCS telehealth rules, but CA.CP.BH.105 limits the required monthly protocol-modification contact (97155/H0032): "Synchronous audio/visual telehealth services are permissible only when the member/enrollee has a documented access barrier (e.g., geographic limitations, provider shortages, or documented parent/caregiver hardship)," with the modality, rationale and an unobstructed real-time view documented and rendering staff’s "camera turned on." CA.CP.BH.104 treats telehealth as a supplement "to the traditional in person service delivery model."',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.105 — ABA Documentation Requirements (rev. 7/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.105.pdf' },
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Health Net publishes no number; it "has adopted the timeliness standards approved by the Industry Collaboration Effort (ICE) and … NCQA." The state rule sets the ceiling for Medi-Cal plans: APL 21-011 — standard decisions within five business days of receiving the information reasonably necessary, never more than 14 calendar days, 72 hours expedited — and, from January 1, 2026, 42 CFR 438.210(d) caps standard decisions at 7 calendar days. Reauthorization every six months.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health Net Medi-Cal — Requirements for Notification of UM Decisions (updated 7/4/2024)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/denial-notification/requirements-notification-utilization-management-decisions.html' },
          { title: 'DHCS APL 21-011 (Revised 8/31/2022) — Grievance and Appeals Requirements', url: 'https://www.dhcs.ca.gov/file/apl21-011-pdf/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
        verifyVia: 'The ICE "Medi-Cal UM Timeliness Standards" (iceforhealth.org), or Health Net BH Provider Services 844-966-0298.',
        blocker: 'document',
      },
      coordinationOfBenefits: {
        value: '"Medi-Cal is always the payer of last resort, including Medicare and TRICARE." Bill the primary first, then Health Net with the EOB within 180 days, with proof of exhaustion (denial or EOB showing non-coverage); payment is capped at Medi-Cal limits less the other payment. On authorization: "Where a benefit is not covered by the member’s primary insurance and the service is covered and requires authorization by Health Net Medi-Cal, an out-of-network provider may leverage a letter of agreement (LOA)" — so Health Net’s authorization applies when the primary does not cover ABA. Whether it is required when the primary does cover ABA is not stated.',
        status: 'verified',
        cites: [
          { title: 'Health Net Medi-Cal — Coordination of Benefits Overview (updated 12/18/2024)', url: 'https://providerlibrary.healthnetcalifornia.com/medi-cal/provider-manual/coordination-benefits/overview-medi-cal.html' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Protocol modification (97155/H0032/0373T) must be "at least two hours per week or 10% of the direct service hours provided, whichever is greater" (one to two hours a week is acceptable under 10 direct hours), and "no more than 20% of direct service hours provided (unless clinical documentation justifies)"; at least monthly one-on-one protocol development with the member; consistently falling below 10% "will trigger an individualized clinical documentation review." Parent training "ideally for a minimum of two hours per month"; parent participation "encouraged but not required."',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
          { title: 'Health Net CA.CP.BH.105 — ABA Documentation Requirements (rev. 7/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.105.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'No explicit same-clock-time rule. CA.CP.BH.105 says "97155 may be used to demonstrate new or modified protocol to a technician with the member/enrollee present," and "Technician supervision only or team meetings do not constitute protocol modification"; it defers MUEs to the ABA Coding Coalition and CMS.',
        status: 'unverified',
        cites: [
          { title: 'Health Net CA.CP.BH.105 — ABA Documentation Requirements (rev. 7/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.105.pdf' },
        ],
        verifyVia: 'Health Net BH Provider Services 844-966-0298 or its claims payment policy — whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'Treatment hours should "not exceed six hours per day up to a total of 30 hours per week" unless "clinical documentation justifies additional hours" (high-intensity behaviors or significant deficits) — a documentation threshold rather than a hard cap, since APL 23-010 prohibits hour caps. Hours may not be reduced for school time; MUEs follow the ABA Coding Coalition/CMS.',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
          { title: 'Health Net CA.CP.BH.105 — ABA Documentation Requirements (rev. 7/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.105.pdf' },
        ],
      },
      noteSignature: {
        value: 'Service notes are completed "prior to claim submission," with the organization name, member name on each page, DOB, exact start and end time, pauses, location, code, "Signature and credential of qualified rendering provider/technician," and a clinical summary; late notes carry the creation date and an explanation. Treatment plans need a "HIPAA compliant signature, credentials, and role" — "Parent/guardian signature is preferred but not required."',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.105 — ABA Documentation Requirements (rev. 7/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.105.pdf' },
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
      placeOfService: {
        value: 'The plan must justify each setting — "home, school (onsite or remote), or community-based settings" — and school services need a detailed school-based plan (rationale, schedule, IEP justification, titration, LEA coordination). Services "in lieu of school (member/enrollees age six or older)" are a ground for discontinuation.',
        status: 'verified',
        cites: [
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The PA form captures the group name and TIN and the case supervisor’s NPI. Rendering tiers: QAS provider (BCBA), QAS professional (associate behavior analyst, BMA, psychological associate, AMFT, ACSW, APCC under supervision) and QAS paraprofessional. Health Net publishes no statement on PAVE enrollment.',
        status: 'verified',
        cites: [
          { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
          { title: 'Health Net CA.CP.BH.104 — Applied Behavior Analysis (Medi-Cal), eff. 4/20/2026', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CA.CP.BH.104.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Health Net Medi-Cal (and CalViva) cover ABA?', a: 'Yes — Behavioral Health Treatment for members under 21 on a physician or licensed clinical psychologist recommendation, regardless of diagnosis, reviewed by Health Net’s Behavioral Health Autism Center under policy CA.CP.BH.104.' },
      { q: 'Is there an hour cap on Health Net Medi-Cal ABA?', a: 'Not a hard cap. CA.CP.BH.104 expects no more than 6 hours a day and 30 hours a week unless clinical documentation justifies more, and hours cannot be reduced for school time.' },
      { q: 'How do I change hours on a Health Net ABA authorization?', a: 'Submit a new complete PA request with a letter explaining the clinical reason — addendums are no longer accepted, and the existing authorization is ended.' },
    ],
  },

  'inland-empire-health-plan-california': {
    slug: 'inland-empire-health-plan-california',
    family: '',
    cardDesc: 'Riverside/San Bernardino LI (1.37M); BHT in-house via portal, 6-month units, 2:10 supervision, H0031 = FBA.',
    assessmentPA: {
      value: 'Required — "All BHT services provided by the BHT Provider under this policy require prior authorization"; the FBA is H0031, requested through the IEHP Provider Portal on a physician or psychologist’s formal request',
      status: 'verified',
      cites: [
        { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
        { title: 'IEHP UM Authorization Guideline UM_BH 08 — Behavioral Health Treatment (rev. 11/25/2024)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-resources/um-criteria/behavior-health/2024/20241125%20-UM_BH%2008%20-Behavioral%20Health%20Treatment%20(BHT)%20Criteria.pdf' },
        { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — through the Provider Portal "BH Referral Request," in units for a 6-month period (hours/week × 4 × 26), with IEHP’s mandatory 6-Month and Exit Progress Report template; more hours need an addendum with a fully updated treatment plan',
      status: 'verified',
      cites: [
        { title: 'IEHP — Behavioral Health Treatment (BHT) Reminders (notice, 3/31/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/03---march/20250331%20-%20Behavioral%20Health%20Treatment%20(BHT)%20Reminders.pdf' },
        { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
      ],
    },
    dxRequired: {
      value: 'No — "IEHP provides medically necessary Behavioral Health Treatment (BHT) services for all Members that meet criteria, even without a diagnosis of autism spectrum disorder (ASD)"',
      status: 'verified',
      cites: [
        { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
      ],
    },
    payer: 'Inland Empire Health Plan (IEHP, Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · Inland Empire Health Plan',
    h1: 'Inland Empire Health Plan (IEHP) ABA coverage (Medi-Cal).',
    metaTitle: 'IEHP Medi-Cal ABA (BHT) Coverage & Prior Auth Guide | Carelu',
    metaDescription:
      'How Inland Empire Health Plan covers Medi-Cal Behavioral Health Treatment (ABA) in Riverside and San Bernardino counties — in-house BHT through the provider portal, no autism diagnosis required, 6-month unit requests, 2-per-10 supervision, the H-code grid (H0031 = FBA here), school services with PA, and the transition at 21.',
    intro: [
      'Inland Empire Health Plan is the local initiative for Riverside and San Bernardino counties — 1,366,393 Medi-Cal members in August 2026, the third-largest plan in the state (Molina is the other plan in both counties). "IEHP provides and covers all medically necessary Behavioral Health Treatment (BHT) services" itself: authorizations go through IEHP Behavioral Health on its Provider Portal, not the member’s IPA, under a Behavioral Health Agreement with rates in its Attachment B. IEHP’s policy text (MC_12K3) is the 2024 version; IEHP’s 2025 summary of changes lists it as unchanged and the 2026 summary as a minor wording update.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Local initiative, Two-Plan model (Riverside, San Bernardino)' },
      { label: 'Who runs BHT', value: 'IEHP Behavioral Health (not the IPA)' },
      { label: 'Diagnosis', value: 'Not required — physician/surgeon/psychologist recommendation' },
      { label: 'Assessment auth', value: 'Yes — H0031 FBA via the Provider Portal' },
      { label: 'Treatment auth', value: '6-month unit requests on the portal; mandatory progress-report template' },
      { label: 'Supervision', value: 'Up to 2 hours per 10 hours of direct treatment (H0032)' },
      { label: 'First appointment', value: 'Initial assessment offered within 10 business days of approval' },
    ],
    sections: [
      {
        h2: 'IEHP’s BHT rules',
        body: [
          'IEHP’s evaluation criteria (UM_BH 08) need an ASD diagnosis, suspected ASD, or a determination that BHT is medically necessary; medical stability; and "a formal request from a physician or psychologist requesting BHT Services that outlines the member excesses and/or deficits of behaviors that significantly interfere with home or community activities." Everything is authorized: H0031 for the FBA, H2019 for one-to-one direct service, H0032 for supervision and parent training (no modifier for a mid-tier supervisor, HO/HP for a BCBA), H2014 for social skills groups and S5111 for multi-family caregiver groups. Requests go through the portal "BH Referral Request" in 6-month units ("# of hours per week x 4 units x 26 weeks = Qty"), and units must match the treatment plan, which must use IEHP’s "ABA (BHT) 6-Month and Exit Progress Report Template" with all 11 APL 23-010 elements. School services go in the treatment plan and are allowed "if there is prior authorization from IEHP and the school agrees," including private and charter schools.',
          'Two access rules for providers: the initial assessment appointment "must be offered within ten (10) business days of authorization being approved," and "Authorizations for BHT will not extend past the Member’s 21st birthday" — within 60 days of it the provider "must initiate the transition process to an alternative funding source (e.g., Regional Center, County Services, or Department of Rehabilitation)." Revised treatment plans are faxed to IEHP BH at 909-890-5763; Provider Call Center 909-890-2054.',
        ],
        cites: [
          { title: 'IEHP UM Authorization Guideline UM_BH 08 — Behavioral Health Treatment (rev. 11/25/2024)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-resources/um-criteria/behavior-health/2024/20241125%20-UM_BH%2008%20-Behavioral%20Health%20Treatment%20(BHT)%20Criteria.pdf' },
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
          { title: 'IEHP — Behavioral Health Treatment (BHT) Reminders (notice, 3/31/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/03---march/20250331%20-%20Behavioral%20Health%20Treatment%20(BHT)%20Reminders.pdf' },
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
          { title: 'IEHP — 2026 Medi-Cal Provider Manual Summary of Changes (11/17/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-manual/2026/summary-of-changes/2026%20Summary%20of%20Changes_11-17-25.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Physician or psychologist request', desc: 'A formal request describing the behavioral excesses/deficits that interfere at home or in the community — no autism diagnosis needed.' },
      { title: 'Medical stability', desc: 'IEHP’s criteria require the child to be medically stable.' },
      { title: 'Signed ROI and family agreement', desc: 'The portal attests to a verified member-signed ROI and member agreement (explain exceptions in free text).' },
      { title: 'School plans', desc: 'School-based hours need IEHP authorization and the school’s agreement.' },
      { title: 'Age', desc: 'Authorizations stop at 21 — start transition planning 60 days before.' },
    ],
    sources: [
      { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
      { title: 'IEHP UM Authorization Guideline UM_BH 08 — Behavioral Health Treatment (rev. 11/25/2024)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-resources/um-criteria/behavior-health/2024/20241125%20-UM_BH%2008%20-Behavioral%20Health%20Treatment%20(BHT)%20Criteria.pdf' },
      { title: 'IEHP — Behavioral Health Treatment (BHT) Reminders (notice, 3/31/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/03---march/20250331%20-%20Behavioral%20Health%20Treatment%20(BHT)%20Reminders.pdf' },
      { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
      { title: 'IEHP — 2026 Medi-Cal Provider Manual Summary of Changes (11/17/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-manual/2026/summary-of-changes/2026%20Summary%20of%20Changes_11-17-25.pdf' },
      { title: 'IEHP 2024 Medi-Cal Provider Manual — Chapter 14, Utilization Management', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/14%20-%20UTILIZATION%20MANAGEMENT_01-01-24%20REDLINE.pdf' },
      { title: 'IEHP 2024 Medi-Cal Provider Manual — Chapter 20, Claims Processing', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/approved/20%20-%20CLAIMS%20PROCESSING_01-01-24%20APPROVED.pdf' },
      { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21: "Authorizations for BHT will not extend past the Member’s 21st birthday," and within 60 days of it the provider "must initiate the transition process to an alternative funding source (e.g., Regional Center, County Services, or Department of Rehabilitation)." No minimum age.',
        status: 'verified',
        cites: [
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
        ],
      },
      dxRecency: {
        value: 'IEHP publishes no age limit on the recommendation or diagnosis (checked MC_12K3, UM_BH 08 and the 2025 BHT notices), and APL 23-010 sets none; the treatment plan must be "revised and modified every six months."',
        status: 'plan-dependent',
        cites: [
          { title: 'IEHP UM Authorization Guideline UM_BH 08 — Behavioral Health Treatment (rev. 11/25/2024)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-resources/um-criteria/behavior-health/2024/20241125%20-UM_BH%2008%20-Behavioral%20Health%20Treatment%20(BHT)%20Criteria.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
        verifyVia: 'IEHP Provider Call Center (909-890-2054) — how recent the physician or psychologist request must be.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A "licensed physician, surgeon or psychologist" (MC_12K3); UM_BH 08 says "physician or psychologist."',
        status: 'verified',
        cites: [
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
          { title: 'IEHP UM Authorization Guideline UM_BH 08 — Behavioral Health Treatment (rev. 11/25/2024)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-resources/um-criteria/behavior-health/2024/20241125%20-UM_BH%2008%20-Behavioral%20Health%20Treatment%20(BHT)%20Criteria.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'IEHP names no required instrument; the treatment plan must include assessment "dates, scores, descriptions and assessment summaries."',
        status: 'plan-dependent',
        cites: [
          { title: 'IEHP — Behavioral Health Treatment (BHT) Reminders (notice, 3/31/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/03---march/20250331%20-%20Behavioral%20Health%20Treatment%20(BHT)%20Reminders.pdf' },
        ],
        verifyVia: 'IEHP Behavioral Health (909-890-2054) — whether a particular adaptive or skills instrument is expected in the FBA.',
        blocker: 'per-case',
      },
      referral: {
        value: 'The requirement is a formal request from a physician or psychologist describing the behaviors that interfere at home or in the community; PCPs, IPAs and BH providers route it through IEHP’s portal BH web forms. No separate PCP referral route is specified for BHT.',
        status: 'verified',
        cites: [
          { title: 'IEHP UM Authorization Guideline UM_BH 08 — Behavioral Health Treatment (rev. 11/25/2024)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/provider-resources/um-criteria/behavior-health/2024/20241125%20-UM_BH%2008%20-Behavioral%20Health%20Treatment%20(BHT)%20Criteria.pdf' },
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
        ],
      },
      telehealth: {
        value: 'IEHP publishes no BHT telehealth rule (MC_12K3’s reference to "virtual school sessions" is about the school setting); the Medi-Cal telehealth rule applies, which does not settle technician-delivered direct service by video.',
        status: 'plan-dependent',
        cites: [
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
          { title: 'Medi-Cal Provider Manual — Telehealth Modalities (tele mod), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=telemod.pdf' },
        ],
        verifyVia: 'IEHP Behavioral Health (909-890-2054) — which BHT codes it will authorize by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'IEHP’s routine Medi-Cal decision times sit in an attachment ("UM Timeliness Standards – Medi-Cal") that could not be retrieved; its UM chapter allows extension "by up to fourteen (14) calendar days" and urgent decisions "within seventy-two (72) hours," and IEHP treats ABA as routine (expedited is for loss of life or limb or a delayed transition from acute or skilled care). The state ceiling applies: APL 21-011 (five business days, 14 calendar days maximum) and, from January 1, 2026, 42 CFR 438.210(d) (7 calendar days). Reauthorization: 6-month periods, requested before the authorization expires.',
        status: 'unverified',
        cites: [
          { title: 'IEHP 2024 Medi-Cal Provider Manual — Chapter 14, Utilization Management', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/14%20-%20UTILIZATION%20MANAGEMENT_01-01-24%20REDLINE.pdf' },
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
          { title: 'DHCS APL 21-011 (Revised 8/31/2022) — Grievance and Appeals Requirements', url: 'https://www.dhcs.ca.gov/file/apl21-011-pdf/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
        verifyVia: 'IEHP attachment "UM Timeliness Standards – Medi-Cal" (IEHP provider manual Section 14, now in its C360 policy search) or the IEHP Provider Call Center 909-890-2054.',
        blocker: 'document',
      },
      coordinationOfBenefits: {
        value: '"Medi-Cal Members with Other Health Coverage (OHC) must utilize their OHC for covered services prior to accessing their Medi-Cal benefits"; IEHP does not process claims when the eligibility record shows OHC (other than codes A or N) "unless the Provider presents proof that all sources of payment have been exhausted," and payment "will not exceed the Member’s OHC cost sharing amount." IEHP does not say whether its own BHT authorization is needed while it is secondary. (Source: IEHP’s 2024 claims chapter.)',
        status: 'verified',
        cites: [
          { title: 'IEHP 2024 Medi-Cal Provider Manual — Chapter 20, Claims Processing', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/approved/20%20-%20CLAIMS%20PROCESSING_01-01-24%20APPROVED.pdf' },
          { title: 'DHCS APL 22-027 — Cost Avoidance and Post-Payment Recovery for Other Health Coverage', url: 'https://www.dhcs.ca.gov/file/apl22-027-pdf/' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: '"H0032 and H0032-HO/HP will be approved for up to two hours of case supervision for every 10 hours of direct treatment" (20%); more needs individualized clinical justification. The ratio applies to H2019 + H2014 combined and to H0032 + H0032-HO combined. A bachelor’s-level mid-tier supervisor needs "twelve semester units in Applied Behavior Analysis (ABA) and one year of experience"; a BCaBA can bill H0032, H2019 and H2014.',
        status: 'verified',
        cites: [
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'IEHP’s FAQ says H2019 and H0032 "may be billed separately," a supervisor may bill H0032 without a technician present, and H0032 may be billed more than once a day with documentation for each session — but it does not say whether H0032 and H2019 may overlap in the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
        ],
        verifyVia: 'IEHP Provider Call Center 909-890-2054 — whether supervision and direct service may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No daily or weekly cap on direct hours. S5111 group caregiver training is at most one session a day and "may not be requested in units"; H2014 groups need two or more members; and IEHP "will not reduce the number of medically necessary BHT hours … by the hours the Member spends at school."',
        status: 'verified',
        cites: [
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
        ],
      },
      noteSignature: {
        value: 'IEHP publishes no note-signature rule beyond documentation for each session and required exit reports and exit letters.',
        status: 'unverified',
        cites: [
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
        ],
        verifyVia: 'Your IEHP Behavioral Health Agreement, or IEHP’s current MC_12K3 text in its C360 policy search.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Home or community-based settings, including clinics; school "if there is prior authorization from IEHP and the school agrees," including private and charter schools, with hours across settings "proportionate to the Member’s medical need for BHT services in each setting."',
        status: 'verified',
        cites: [
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Codes by tier: H0031 FBA; H2019 one-to-one direct; H0032 supervision (no modifier = mid-tier, HO/HP = BCBA); H2014 social skills (any level); S5111 group caregiver training. BHT is delivered by QAS providers, professionals and paraprofessionals per the State Plan; rates are in Attachment B of the Behavioral Health Agreement. IEHP publishes no NPI or PAVE rule.',
        status: 'verified',
        cites: [
          { title: 'IEHP — Behavioral Health Treatment (BHT) Reminders (notice, 3/31/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/03---march/20250331%20-%20Behavioral%20Health%20Treatment%20(BHT)%20Reminders.pdf' },
          { title: 'IEHP — BHT Provider FAQs (notice, 9/16/2025)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services-rd/en/documents/providers/plan-updates/provider_notices/2025/09---september/20250916%20-%20BHT%20Provider%20FAQ.pdf' },
          { title: 'IEHP Medi-Cal Provider Policy MC_12K3 — Behavioral Health Treatment (2024 chapter 12)', url: 'https://www.providerservices.iehp.org/content/dam/provider-services/en/documents/providers/provider-manual/2024/medi-cal/redline/12%20-%20COORDINATION%20OF%20CARE_03-28-24_REDLINE_.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does IEHP cover ABA therapy?', a: 'Yes — as Behavioral Health Treatment for Medi-Cal members under 21, "even without a diagnosis of autism spectrum disorder," on a formal request from a physician or psychologist.' },
      { q: 'How do I request ABA from IEHP?', a: 'Through the IEHP Provider Portal "BH Referral Request" — H0031 for the FBA, then 6-month unit requests for treatment on IEHP’s progress-report template.' },
      { q: 'How much supervision does IEHP authorize?', a: 'Up to two hours of case supervision (H0032) per 10 hours of direct treatment; more needs clinical justification.' },
    ],
  },

  'caloptima-health-california': {
    slug: 'caloptima-health-california',
    family: '',
    cardDesc: 'Orange County COHS; strict recommendation rules (no LMFT/LCSW/NP alone), Vineland-3 required, PAVE enrollment.',
    assessmentPA: {
      value: 'Required — the FBA is requested on the BHT Authorization Request Form (or the provider portal) with a recommendation that meets policy GG.1548’s document rules',
      status: 'verified',
      cites: [
        { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        { title: 'CalOptima Health — BHT Authorization Request Form (BHT-ARF)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/bb9b1cb1ddd2488abb6234820a58d2dc?v=6a735958' },
      ],
    },
    treatmentPA: {
      value: 'Required — BHT-ARF or portal with the FBA, treatment plan on CalOptima’s unalterable template (signed by a BCBA or licensed practitioner), diagnostic evaluation and coordination records; units "typically 6 months"; continued-treatment requests no more than 30 days before the authorization ends',
      status: 'verified',
      cites: [
        { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        { title: 'CalOptima Health — BHT Authorization Request Form (BHT-ARF)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/bb9b1cb1ddd2488abb6234820a58d2dc?v=6a735958' },
        { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
      ],
    },
    dxRequired: {
      value: 'No autism diagnosis ("including those with or without a diagnosis of ASD"), but the recommendation and the diagnosis must come "from the same physician/surgeon/clinical psychologist and all within the same document"',
      status: 'verified',
      cites: [
        { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
      ],
    },
    payer: 'CalOptima Health (Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · CalOptima Health',
    h1: 'CalOptima Health ABA coverage (Medi-Cal, Orange County).',
    metaTitle: 'CalOptima Health Medi-Cal ABA (BHT) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How CalOptima Health covers Medi-Cal Behavioral Health Treatment (ABA) in Orange County — in-house BHT outside the health networks, policy GG.1548’s strict recommendation rules, the required Vineland-3, the H-code grid (H0031 = FBA), 10–20% supervision, PAVE enrollment, and 7-calendar-day decisions.',
    intro: [
      'CalOptima Health is the County Organized Health System for Orange County — the only Medi-Cal plan there, with 772,737 members in August 2026. "CalOptima Health administers BHT services, including ABA, for Medi-Cal members" through its Behavioral Health Integration department; BHT is the one EPSDT service that does not go to the member’s health network. Its policy GG.1548 (revised May 1, 2026) is unusually precise about what counts as a valid recommendation, so most avoidable denials here are paperwork denials.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'County Organized Health System — sole Medi-Cal plan in Orange County' },
      { label: 'Who runs BHT', value: 'CalOptima Health Behavioral Health (not the health network)' },
      { label: 'Recommendation', value: 'MD/surgeon or licensed clinical psychologist only — not LMFT, LCSW, LPCC, educational psychologist; NP/PA only with MD co-signature' },
      { label: 'Required tool', value: 'Vineland-3 for every treatment plan and reporting period' },
      { label: 'Decision clock', value: '7 calendar days (max 14), 72 hours expedited; FBA offered within 10 business days' },
      { label: 'Submit via', value: 'BHT-ARF to fax 714-954-2300 or the provider portal; BH line 855-877-3885' },
    ],
    sections: [
      {
        h2: 'What a valid CalOptima recommendation looks like',
        body: [
          'GG.1548 spells it out. The recommendation must carry the full name and credentials of a licensed physician, surgeon or licensed clinical psychologist — it "cannot be an educational psychologist or master’s level clinician/practitioner (LMFT, LCSW, LPCC, PA, NP, etc.)," though an NP or PA recommendation works with an MD signature. The recommendation and diagnosis must come "from the same physician/surgeon/clinical psychologist and all within the same document," on letterhead, a prescription pad, a psych testing report or an EHR record, with a date, a second member identifier and a signature (wet, electronic, digital or scanned). Wording matters: "Applied Behavior Analysis (ABA), Behavioral Health Treatment (BHT), ABA therapy, ABA treatment, ABA or BHT, Behavior or Behavioral Therapy and Behavioral Analysis" are accepted, and "ABA evaluation wording is acceptable only for FBA request."',
          'Then: request the FBA on the BHT-ARF (H0031) or the provider portal; the treatment plan must use CalOptima’s template ("All fields and items on the template cannot be altered or removed"), include the Vineland-3 ("The Vineland-3 Adaptive Behavior Scale is required"), meet the APL 23-010 elements and be signed by a BCBA or licensed practitioner. Units run "typically 6 months," and continued-treatment requests go in no more than 30 calendar days before the last covered date. Providers must be CalOptima-contracted and — per the 2026 policy — enrolled in Medi-Cal through PAVE; the 2023 FAQ’s statement that ABA groups have "no pathway for Medi-Cal enrollment" is superseded.',
        ],
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
          { title: 'CalOptima Health — BHT Authorization Request Form (BHT-ARF)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/bb9b1cb1ddd2488abb6234820a58d2dc?v=6a735958' },
          { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
          { title: 'CalOptima Health Provider Manual (September 2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/dfb55018403942c29e96ed08aaae05d3?v=07622d8f' },
        ],
      },
    ],
    collect: [
      { title: 'Recommendation from the right clinician', desc: 'MD/surgeon or licensed clinical psychologist; NP/PA only with an MD signature; LMFT/LCSW/LPCC/educational psychologist not accepted.' },
      { title: 'Diagnosis in the same document', desc: 'The recommendation and diagnosis must come from the same clinician in one dated, signed document with the accepted ABA/BHT wording.' },
      { title: 'Vineland-3', desc: 'Required for the treatment plan and each reporting period.' },
      { title: 'Current providers', desc: 'Speech, OT, PT, PCP and school (LEA) communications go with the request.' },
      { title: 'Other coverage', desc: 'CalOptima pays last; bill the other plan first.' },
    ],
    sources: [
      { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
      { title: 'CalOptima Health — BHT Authorization Request Form (BHT-ARF)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/bb9b1cb1ddd2488abb6234820a58d2dc?v=6a735958' },
      { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
      { title: 'CalOptima Health Provider Manual (September 2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/dfb55018403942c29e96ed08aaae05d3?v=07622d8f' },
      { title: 'CalOptima Health — BHT Access to Care Form', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/a74842e3a92441d3abd31ef61437a596?v=b92ded3f' },
      { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21 (GG.1548). No minimum age.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        ],
      },
      dxRecency: {
        value: 'The recommendation must be dated, but GG.1548 sets no maximum age for it, and APL 23-010 sets none either.',
        status: 'plan-dependent',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
        verifyVia: 'CalOptima Health Behavioral Health (855-877-3885) — whether an older recommendation will be accepted.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'A licensed physician, surgeon or licensed clinical psychologist. Explicitly excluded: educational psychologists and master’s-level clinicians (LMFT, LCSW, LPCC); PAs and NPs only with an MD co-signature.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        ],
      },
      diagnosticTools: {
        value: '"The Vineland-3 Adaptive Behavior Scale is required" for treatment plans, with ABAS, DAYC, VB-MAPP and ABLLS as optional supplements; adaptive testing is needed for new plans "and for every reporting period." No instrument is mandated for the diagnosis itself.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
          { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
        ],
      },
      referral: {
        value: 'The family calls CalOptima Health Behavioral Health (855-877-3885, 24/7), and a contracted provider "will obtain all medical necessity information from the member and submit a request"; PCPs direct members to the same line. BHT does not go through the member’s health network — the manual routes every other EPSDT service there "except for BHT." To switch providers, the member calls the BH line and the new provider submits a new authorization.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Provider Manual (September 2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/dfb55018403942c29e96ed08aaae05d3?v=07622d8f' },
          { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
        ],
      },
      telehealth: {
        value: 'No BHT-specific rule. CalOptima’s general Medi-Cal telehealth rules: documented consent before first use, services must meet the code’s definition, audio-only and video must be offered, the in-person option preserved, and providers enrolled in Medi-Cal — the state rule, which does not settle technician-delivered direct service by video.',
        status: 'plan-dependent',
        cites: [
          { title: 'CalOptima Health Provider Manual (September 2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/dfb55018403942c29e96ed08aaae05d3?v=07622d8f' },
          { title: 'Medi-Cal Provider Manual — Telehealth Modalities (tele mod), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=telemod.pdf' },
        ],
        verifyVia: 'CalOptima Health Behavioral Health (855-877-3885) — which BHT codes it will authorize by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Routine: "Seven calendar days from receipt of the information reasonably necessary to render a decision … but no longer than 14 calendar days from the receipt of the request," extendable by 14 days; expedited "no later than 72 hours"; "Any decision delayed beyond the time limits is considered a denial." On the provider side, the FBA must be offered within 10 business days of the FBA authorization start (tracked on the BHT Access to Care Form). Reauthorization: the plan is reviewed at least every six months, and continued-treatment requests go in no more than 30 days before the authorization ends.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Provider Manual (September 2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/dfb55018403942c29e96ed08aaae05d3?v=07622d8f' },
          { title: 'CalOptima Health — BHT Access to Care Form', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/a74842e3a92441d3abd31ef61437a596?v=b92ded3f' },
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        ],
      },
      coordinationOfBenefits: {
        value: '"State law requires CalOptima Health to be the payer of last resort when Other Health Coverage (OHC) is identified." Bill the other coverage first; "CalOptima Health’s reimbursement is the difference between the CalOptima Health allowable amount and the OHC carrier payment," and CalOptima is "not liable for OHC-covered services if the recipient elects to seek treatment from a provider not authorized by the OHC." It does not say whether a BHT-ARF is still needed when the other plan is primary — ask.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Provider Manual (September 2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/dfb55018403942c29e96ed08aaae05d3?v=07622d8f' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'CalOptima’s 2023 FAQ (not restated in the 2026 policy): supervision is authorized "at a rate that falls between 10–20% of weekly direct paraprofessional services hours"; up to 90% of supervision by a BMA is accepted "if oversight is documented"; at most 20% of supervision hours per six months (minimum 3, maximum 8 hours) may be indirect.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
        ],
      },
      concurrentBilling: {
        value: 'Partly addressed: "Can H0032 HO and H0032 HN be billed at the same time for the same member? No, CalOptima Health does not allow for providing the same services by multiple providers for the same member on the same day." No rule is published on supervision (H0032) overlapping direct service (H2019).',
        status: 'unverified',
        cites: [
          { title: 'CalOptima Health — BHT and ABA Providers FAQ (v1, 1/6/2023)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/efd407fb7cbe458fa8b665cf286fcc06?v=84dadc68' },
        ],
        verifyVia: 'CalOptima Health Behavioral Health (855-877-3885) or Provider Relations (714-246-8600) — whether H0032 and H2019 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No daily or weekly caps are published, and "Decreasing the amount and duration of services is prohibited if the therapies are Medically Necessary."',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        ],
      },
      noteSignature: {
        value: 'Treatment plans need a BCBA or licensed practitioner signature and date (wet, electronic, digital or scanned). Session documentation follows CalOptima’s medical-records policy GG.1603, which was not read.',
        status: 'unverified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        ],
        verifyVia: 'CalOptima Health Policy GG.1603 (Medical Records Maintenance) via caloptima.org/en/policy-documents.',
        blocker: 'document',
      },
      placeOfService: {
        value: '"Home or community-based setting, including clinics," and school when clinically indicated, with hours proportionate per setting; CalOptima is primary for BHT "on-site at school or during remote school sessions."',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
        ],
      },
      billAsProvider: {
        value: 'QAS provider organizations, individuals and CBOs "must apply for enrollment in the Medi-Cal program through … PAVE" (GG.1548, 2026), and must be CalOptima-contracted and credentialed (every three years), with a roster of all providers and paraprofessionals. The BHT-ARF captures NPI, TIN and Medi-Cal ID; its codes are H0031, H0032-HN (non-BCBA), H0032-HO (BCBA), H2014, H2019, S5108 and S5110.',
        status: 'verified',
        cites: [
          { title: 'CalOptima Health Policy GG.1548 — Authorization and Monitoring of BHT Services (rev. 5/1/2026)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/0d314641f2bb498ab36e9cfa9edb2d03?v=b5a3e682' },
          { title: 'CalOptima Health — BHT Authorization Request Form (BHT-ARF)', url: 'https://cop-p-001.sitecorecontenthub.cloud/api/public/content/bb9b1cb1ddd2488abb6234820a58d2dc?v=6a735958' },
        ],
      },
    },
    faq: [
      { q: 'Does CalOptima Health cover ABA therapy?', a: 'Yes — Behavioral Health Treatment for Medi-Cal members under 21 in Orange County, with or without an autism diagnosis, run by CalOptima’s own Behavioral Health department.' },
      { q: 'Who can write the ABA recommendation for CalOptima?', a: 'A licensed physician, surgeon or licensed clinical psychologist — in one dated, signed document that also carries the diagnosis. LMFTs, LCSWs, LPCCs and educational psychologists are not accepted, and NP/PA recommendations need an MD signature.' },
      { q: 'How fast does CalOptima decide?', a: 'Seven calendar days for routine requests (no more than 14) and 72 hours for expedited ones; a missed deadline counts as a denial.' },
    ],
  },

  'anthem-blue-cross-partnership-plan-california': {
    slug: 'anthem-blue-cross-partnership-plan-california',
    family: 'anthem',
    cardDesc: 'Anthem Medi-Cal in 15 counties + L.A. Care subcontract; ABA precert via Availity or fax; recommendation, not dx.',
    assessmentPA: {
      value: 'Required through the authorization request — Anthem’s Medi-Cal treatment-plan request form covers "initial assessment requests when requesting only 97151/97152 and 0362T," with a diagnostic evaluation, recommendation form, MD progress note or letter "recommending ABA"',
      status: 'verified',
      cites: [
        { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — ABA is "precertification"; 97153/97154/97155/97158/0373T are requested per week and 97156/97157 per authorization period; the treatment plan "should be dated within 30 days of start date"',
      status: 'verified',
      cites: [
        { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
      ],
    },
    dxRequired: {
      value: 'No — Anthem asks for a physician or licensed psychologist recommendation and confirms the diagnosis only "if identified," matching APL 23-010’s "regardless of diagnosis"',
      status: 'verified',
      cites: [
        { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        { title: 'Anthem Blue Cross — BHT/ABA/Autism Services Recommendation Form (Medi-Cal)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_Forms_ABAReferral.pdf' },
        { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      ],
    },
    payer: 'Anthem Blue Cross Partnership Plan (Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · Anthem Blue Cross Medi-Cal',
    h1: 'Anthem Blue Cross Partnership Plan ABA coverage (Medi-Cal).',
    metaTitle: 'Anthem Blue Cross Medi-Cal ABA (BHT) Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Anthem Blue Cross Partnership Plan handles Medi-Cal Behavioral Health Treatment (ABA) — the recommendation-not-diagnosis gate, precertification for assessment and treatment through Availity or fax 855-473-7902, the 30-day treatment-plan rule, 2:10 supervision language and its 7-calendar-day decision clock.',
    intro: [
      'Anthem Blue Cross Partnership Plan is Anthem’s Medi-Cal plan: about 745,000 members as prime contractor across 15 counties in August 2026 (Sacramento, Fresno, Tulare, Santa Clara, Kern, San Francisco and the small Regional-model counties among them), plus the members Anthem serves in Los Angeles County under its subcontract with L.A. Care. It follows the state BHT rules closely — a physician or psychologist recommendation opens the door, no autism diagnosis is required — and routes everything, assessment included, through a single precertification form.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Medi-Cal managed care plan — commercial plan in Two-Plan counties, GMC Sacramento, Regional counties; L.A. Care subcontractor' },
      { label: 'Assessment auth', value: 'Yes — 97151/97152/0362T on the ASD Treatment Plan Request Form' },
      { label: 'Treatment auth', value: 'Yes — precertification; plan dated within 30 days of start' },
      { label: 'Diagnosis', value: 'Not required — recommendation from a physician or licensed psychologist; dx "if identified"' },
      { label: 'Submit via', value: 'Availity Essentials (preferred) or fax 855-473-7902' },
      { label: 'Decision clock', value: '7 calendar days (up to 14), 72 hours urgent — per the July 2026 manual' },
    ],
    sections: [
      {
        h2: 'One form for assessment and treatment',
        body: [
          'Anthem’s Medi-Cal manual says "requests for precertification for ABA should be submitted via fax to 855-473-7902," and the May 2026 Treatment Plan Request Form names Availity Essentials "our preferred method," with the fax as fallback. The same form handles "initial assessment requests when requesting only 97151/97152 and 0362T" — attach a diagnostic evaluation, Anthem’s Recommendation Form, an MD progress note, or a letter confirming "the member’s diagnosis, if identified, and recommending ABA." Treatment requests list 97153, 97154, 97155, 97158 and 0373T per week and 97156/97157 per authorization period, and the plan "should be dated within 30 days of start date." Progress is shown with baseline and updated assessments (the form suggests Vineland, VB-MAPP, ABLLS-R) and cumulative graphs.',
          'Separate from ABA: ASD psychological testing has its own authorization form, to be approved "prior to rendering services." Members can self-refer to network behavioral health providers — "Members do not have to contact Anthem for a referral" — and a family without an agency can be sent to Anthem BH case management via the same fax.',
        ],
        cites: [
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
          { title: 'Anthem Blue Cross — Request for Authorization: ASD Testing (Feb 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_BHAutismTestingForms.pdf' },
          { title: 'Anthem Blue Cross California — Behavioral Health (provider page)', url: 'https://providers.anthem.com/california-provider/patient-care/behavioral-health' },
        ],
      },
      {
        h2: 'What Anthem does not publish',
        body: [
          'No ABA-specific clinical guideline is named for Medi-Cal — Anthem’s UM policy lists Anthem medical and clinical guidelines, MCG (licensed) and Carelon guidelines as its criteria families, available "upon request." Its California behavioral health reimbursement policy page reads "Coming soon," so there is no published rule on concurrent billing or unit edits. Contact details also drift between documents (BH UM 888-831-2246 in the manual, "California Medi-Cal Intake department at 800-407-4627" on the form; Medi-CalBHUM@Anthem.com vs. Medi-calBHUM@wellpoint.com) — record which one gave you an answer.',
        ],
        cites: [
          { title: 'Anthem CA_UMXX_118 — Utilization Management Decision and Screening Criteria (rev. 4/18/2024)', url: 'https://mss.anthem.com/california-medicaid/ca_umxx_118.pdf' },
          { title: 'Anthem Blue Cross California — Prior Authorization Requirements (provider page)', url: 'https://providers.anthem.com/california-provider/claims/prior-authorization-requirements' },
        ],
      },
    ],
    collect: [
      { title: 'Recommendation or evaluation', desc: 'Anthem Recommendation Form, diagnostic evaluation, MD note or letter recommending ABA — from a physician or licensed psychologist.' },
      { title: 'Plan identity', desc: 'Anthem as prime plan vs. L.A. Care member assigned to Anthem — the card decides whose rules and portal apply.' },
      { title: 'Treatment plan date', desc: 'Must be within 30 days of the requested start date.' },
      { title: 'Other coverage', desc: 'OHC must be billed first; Anthem wants the primary’s RA, EOB or denial on the claim.' },
    ],
    sources: [
      { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
      { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
      { title: 'Anthem Blue Cross — BHT/ABA/Autism Services Recommendation Form (Medi-Cal)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_Forms_ABAReferral.pdf' },
      { title: 'Anthem Blue Cross — Request for Authorization: ASD Testing (Feb 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_BHAutismTestingForms.pdf' },
      { title: 'Anthem CA_UMXX_117 — Decision and Notification Timeframes (rev. 2/8/2024)', url: 'https://mss.anthem.com/california-medicaid/ca_umxx_117.pdf' },
      { title: 'Anthem CA_UMXX_118 — Utilization Management Decision and Screening Criteria (rev. 4/18/2024)', url: 'https://mss.anthem.com/california-medicaid/ca_umxx_118.pdf' },
      { title: 'Anthem CA_PCXX_009 — EPSDT Requirements for Members Under 21 (rev. 12/19/2023)', url: 'https://mss.anthem.com/california-medicaid/ca_pcxx_009.pdf' },
      { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21. The manual’s covered-services grid lists "Applied behavioral analysis (ABA) for members under 21 years of age," and Anthem’s EPSDT policy places ABA under the BHT benefit.',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
          { title: 'Anthem CA_PCXX_009 — EPSDT Requirements for Members Under 21 (rev. 12/19/2023)', url: 'https://mss.anthem.com/california-medicaid/ca_pcxx_009.pdf' },
        ],
      },
      dxRecency: {
        value: 'Anthem publishes no age limit on the diagnosis or recommendation — its request form and recommendation form carry no recency field, and APL 23-010 sets none. The one date rule is on the treatment plan: it "should be dated within 30 days of start date."',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
          { title: 'Anthem Blue Cross — BHT/ABA/Autism Services Recommendation Form (Medi-Cal)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_Forms_ABAReferral.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      diagnosingProviders: {
        value: 'The recommendation or evaluation must come from "a physician, licensed psychologist, or allowable qualified healthcare care provider (QHCP) per state regulations" (request form); the Recommendation Form itself says "A physician or licensed psychologist should complete this form."',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
          { title: 'Anthem Blue Cross — BHT/ABA/Autism Services Recommendation Form (Medi-Cal)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_Forms_ABAReferral.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'None mandated for ABA eligibility. The ASD testing authorization form treats brief screening measures as "an expected part of a routine and complete diagnostic process," and the treatment request suggests "Baseline and updated assessments (for example, Vineland, VB Mapp, ABLLS-R)" for progress.',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross — Request for Authorization: ASD Testing (Feb 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_BHAutismTestingForms.pdf' },
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        ],
      },
      referral: {
        value: 'No PCP referral: "Behavioral health providers can be accessed directly by Anthem members. Members do not have to contact Anthem for a referral," and "Members may self-refer to any behavioral healthcare provider in the Anthem network." What is required is the physician/psychologist recommendation, which "The rendering BHT/ABA provider will submit … with a preauthorization request."',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross California — Behavioral Health (provider page)', url: 'https://providers.anthem.com/california-provider/patient-care/behavioral-health' },
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
          { title: 'Anthem Blue Cross — BHT/ABA/Autism Services Recommendation Form (Medi-Cal)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_Forms_ABAReferral.pdf' },
        ],
      },
      telehealth: {
        value: 'General rule only: "Utilizing telehealth does not require prior authorization," and Anthem pays live video, audio-only and asynchronous telehealth with the appropriate modifier. For ABA the request form’s place-of-service boxes read "Telehealth (if allowed)" — Anthem publishes no list of which ABA codes it will pay remotely.',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        ],
        verifyVia: 'Anthem Medi-Cal BH UM (888-831-2246) at the time of the request — ask which ABA codes are approved for telehealth on this authorization.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Anthem’s two documents disagree. The July 2026 manual’s BH timeliness table: routine requests "7 calendar days and up to 14 calendar days when additional information is required," urgent pre-service "Within 72 hours." The older UM policy CA_UMXX_117 (reviewed 2/8/2024) says "within five (5) business days … but no longer than 14 calendar days." Plan against the stricter of the two, and against the state rule (5 business days under APL 21-011, never more than 7 calendar days under 42 CFR 438.210(d) from 2026). Reauthorization: the treatment plan is reviewed at least every six months (APL 23-010).',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
          { title: 'Anthem CA_UMXX_117 — Decision and Notification Timeframes (rev. 2/8/2024)', url: 'https://mss.anthem.com/california-medicaid/ca_umxx_117.pdf' },
          { title: 'DHCS APL 21-011 (Revised 8/31/2022) — Grievance and Appeals Requirements', url: 'https://www.dhcs.ca.gov/file/apl21-011-pdf/' },
          { title: '42 CFR 438.210(d) — Medicaid managed care authorization timeframes', url: 'https://www.ecfr.gov/current/title-42/section-438.210' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Anthem follows the Medi-Cal cost-avoidance rule: "If the requested service is covered by the OHC, providers are to instruct the member to seek the service from the OHC carrier," and Anthem "will not process a claim for a member whose Eligibility Record indicates OHC (other than a code F) unless the provider presents proof that all sources of payment have been exhausted"; COB claims without the other carrier’s RA, EOB or denial are "mailed back." "Medicaid is the payer of last resort." Anthem does not say whether its own ABA precertification is needed while it is secondary — get it anyway and confirm with UM.',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
          { title: 'DHCS APL 22-027 — Cost Avoidance and Post-Payment Recovery for Other Health Coverage', url: 'https://www.dhcs.ca.gov/file/apl22-027-pdf/' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Anthem’s request form describes 97153 as delivered "under the direction of physician/QHCP, receiving 2 hours of supervision for every 10 hours of direct treatment," asks for the supervising BCBA (or other QHCP) and has the signer attest that "any paraprofessional under my supervision has the appropriate education and training."',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed. No Anthem California Medi-Cal document read sets a rule on 97153 and 97155 in the same clock time, and its California behavioral health reimbursement policy library is marked "Coming soon."',
        status: 'unverified',
        cites: [
          { title: 'Anthem Blue Cross California — Behavioral Health (provider page)', url: 'https://providers.anthem.com/california-provider/patient-care/behavioral-health' },
        ],
        verifyVia: 'Anthem California Medicaid reimbursement policies in Availity, or Anthem Medi-Cal provider services (866-398-1922).',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No Anthem hour cap is published; direct codes are authorized per week on the request form, and APL 23-010 prohibits "caps on number of hours." Claim-level unit edits (MUEs) are not addressed in the documents read.',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
        verifyVia: 'Anthem Medi-Cal provider services or the Availity claim-edit tools — ask whether unit edits apply to 97153/97155 per day.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not addressed in the Anthem ABA documents beyond the provider signature and license on the request form.',
        status: 'unverified',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
        ],
        verifyVia: 'Anthem policy CA_QMXX_045 "Medical Record Documentation and Confidentiality Standards" on mss.anthem.com (not read this cycle).',
        blocker: 'document',
      },
      placeOfService: {
        value: 'The request form’s setting boxes are Home, Clinic, "School (if allowed)," "Telehealth (if allowed)" and Other. The state rule underneath (APL 23-010) covers home, clinic, community and school settings and bars limiting BHT on school attendance.',
        status: 'verified',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      billAsProvider: {
        value: 'The request form collects the agency’s TIN and NPI and, separately, the "BCBA or rendering care provider" TIN and NPI; the manual says behavioral health services are billed "using behavioral health CPT® codes" to Anthem. No rule on whose NPI goes on a technician’s line is published.',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross — Treatment Plan Request Form for Autism Spectrum Disorders, Medi-Cal (May 2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ASDTreatmentRequestForm.pdf' },
          { title: 'Anthem Blue Cross Medi-Cal Managed Care Provider Manual (eff. 7/1/2026)', url: 'https://providers.anthem.com/docs/gpp/california-provider/CA_CAID_ProviderManual.pdf' },
        ],
        verifyVia: 'Your Anthem Medi-Cal participation agreement or provider services — confirm rendering vs. billing NPI for technician-delivered 97153.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem Blue Cross Medi-Cal cover ABA?', a: 'Yes — for members under 21 as Behavioral Health Treatment, on a recommendation from a physician or licensed psychologist; an autism diagnosis is confirmed only "if identified."' },
      { q: 'Does the ABA assessment need prior authorization with Anthem Medi-Cal?', a: 'Yes. Anthem runs the assessment (97151/97152/0362T) through the same ASD Treatment Plan Request Form as treatment, via Availity or fax 855-473-7902.' },
      { q: 'How fast does Anthem Medi-Cal decide an ABA request?', a: 'Its July 2026 manual says 7 calendar days (up to 14 if information is missing) and 72 hours for urgent requests; an older policy says 5 business days. Plan on the shorter clock.' },
    ],
  },

  'molina-healthcare-california': {
    slug: 'molina-healthcare-california',
    family: 'molina',
    cardDesc: 'Own ABA department + case managers; PA on 97153–97158/0373T; clinical policy stricter than the state APL.',
    assessmentPA: {
      value: 'Not on the code list — the Q2 2026 PA Code Matrix lists 97153–97158 and 0373T but not 97151, 97152 or 0362T; however Molina’s ABA department coordinates the FBA and "will work with the ABA provider to get authorization in place," so confirm per case',
      status: 'plan-dependent',
      cites: [
        { title: 'Molina Healthcare — Medicaid Prior Auth (PA) Code Matrix, eff. Q2 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/PA-Code-Matrix.ashx' },
        { title: 'Molina Healthcare of California — California PA Code Exceptions, eff. Q2 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/PA-Code-Exceptions.ashx' },
        { title: 'Molina Healthcare of California — Applied Behavior Analysis Services & ABA Referral Form', url: 'https://www.molinahealthcare.com/providers/ca/medicaid/forms/~/media/Molina/PublicWebsite/PDF/providers/ca/applied-behavior-analysis-referral-form.pdf' },
      ],
      verifyVia: 'Molina’s PA Look-Up Tool or Availity Essentials for 97151/97152/0362T, or the Molina ABA department (PedsCA@molinahealthcare.com) — keep the answer with the case.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Required — ABA is on Molina’s 2026 pre-service review list and the Q2 2026 code matrix (97153–97158, 0373T); the referral form says "ABA services REQUIRE prior authorization"; reassessment at least every 6 months',
      status: 'verified',
      cites: [
        { title: 'Molina Healthcare — Medicaid Pre-Service Review Guide, eff. 1/1/2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-PA-Guide-Request-Form-Medicaid.ashx' },
        { title: 'Molina Healthcare — Medicaid Prior Auth (PA) Code Matrix, eff. Q2 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/PA-Code-Matrix.ashx' },
        { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
      ],
    },
    dxRequired: {
      value: 'Molina’s own policy says yes — "a valid diagnosis of Autism Spectrum Disorder (ASD)" made with at least one validated tool such as ADOS-2 — which is stricter than APL 23-010’s "regardless of diagnosis"; for a non-ASD child with a physician recommendation, cite the APL',
      status: 'verified',
      cites: [
        { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
        { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      ],
    },
    payer: 'Molina Healthcare of California (Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · Molina Healthcare (CA)',
    h1: 'Molina Healthcare of California ABA coverage (Medi-Cal).',
    metaTitle: 'Molina Healthcare of California Medi-Cal ABA Coverage & Prior Auth | Carelu',
    metaDescription:
      'How Molina Healthcare of California covers Medi-Cal Behavioral Health Treatment (ABA) — its in-house ABA department and case managers, PA on 97153–97158/0373T, Clinical Policy 482’s ASD, age and telehealth limits that go beyond the state APL, and a 7-calendar-day decision clock.',
    intro: [
      'Molina Healthcare of California is the Medi-Cal plan for about 462,000 members as prime contractor (August 2026) — San Diego and Sacramento in the Geographic Managed Care model, and Riverside and San Bernardino as the commercial plan alongside IEHP — plus members it serves in Los Angeles under L.A. Care. Molina runs "its own Applied Behavior Analysis (ABA) department": referrals come in through a case manager who matches the family to a provider. The catch for intake is Molina’s enterprise ABA clinical policy (No. 482, June 2026), which asks for things the state letter does not — an ASD diagnosis made with a validated tool, an 18-month age floor, telehealth only for indirect work — so know where the state rule sits before a denial arrives.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Medi-Cal plan — GMC San Diego/Sacramento, commercial plan in Riverside/San Bernardino, L.A. Care subcontractor' },
      { label: 'Assessment auth', value: '97151/97152/0362T not on the Q2 2026 PA matrix — the ABA department coordinates the FBA' },
      { label: 'Treatment auth', value: 'Required — 97153–97158 and 0373T' },
      { label: 'Diagnosis', value: 'Molina policy wants ASD + validated tool; state APL says "regardless of diagnosis"' },
      { label: 'Referral', value: 'MD or clinical psychologist who saw the child within 12 months → PedsCA@molinahealthcare.com / fax 855-297-3010' },
      { label: 'Decision clock', value: '7 calendar days (up to 14), 72 hours expedited' },
      { label: 'Telehealth', value: 'Policy 482 limits it to caregiver training, supervision and other indirect work' },
    ],
    sections: [
      {
        h2: 'Front door: Molina’s ABA department',
        body: [
          'Molina’s ABA program page and referral form send new families through Molina itself: an MD or licensed clinical psychologist "who has seen the member within the last 12 months" completes the ABA Referral Form (with "most recent clinicals (within 1 year)"), and it goes to PedsCA@molinahealthcare.com or fax (855) 297-3010. "A Molina Case Manager will contact the family … and connect them with the most appropriate provider," and a comprehensive diagnostic evaluation can be coordinated the same way. Molina "will work with the ABA provider to get authorization in place" for the functional behavior assessment. For every other request, "Molina strongly recommends the use of the Availity Essentials portal to submit ALL prior authorization requests"; the behavioral health pre-service form has an "Applied Behavioral Analysis" box, PA fax (800) 811-4804, PA phone (844) 557-8434.',
        ],
        cites: [
          { title: 'Molina Healthcare of California — Applied Behavior Analysis Services & ABA Referral Form', url: 'https://www.molinahealthcare.com/providers/ca/medicaid/forms/~/media/Molina/PublicWebsite/PDF/providers/ca/applied-behavior-analysis-referral-form.pdf' },
          { title: 'Molina Healthcare — Medicaid Pre-Service Review Guide, eff. 1/1/2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-PA-Guide-Request-Form-Medicaid.ashx' },
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
        ],
      },
      {
        h2: 'Where Molina’s policy goes beyond the state letter',
        body: [
          'Clinical Policy No. 482 (last approved June 10, 2026) is Molina’s national ABA policy, and several of its criteria are stricter than DHCS APL 23-010: it requires "a valid diagnosis of Autism Spectrum Disorder (ASD)" made by a multidisciplinary team "utilizing at least ONE clinically validated tool"; sets "ASD initiation age is 18 months or older"; wants updated documentation "If a standardized diagnostic assessment is more than 24 months old"; limits telehealth to "caregiver training, coaching and supervision, or other indirect service components"; and adds a high-intensity documentation burden above 25 direct hours a week. The state letter requires only a physician or psychologist recommendation "regardless of diagnosis," sets no minimum age and prohibits hour caps — and the policy itself notes that "coverage may be mandated by applicable legal requirements of a State." When a Molina Medi-Cal denial rests on one of those extra criteria, APL 23-010 is the citation for the appeal.',
        ],
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
    ],
    collect: [
      { title: 'Recent physician/psychologist referral', desc: 'Molina’s referral form must come from an MD or clinical psychologist who saw the child in the last 12 months.' },
      { title: 'Diagnostic report with the tool named', desc: 'Policy 482 looks for ADOS-2, ADI-R, CARS-2 or DISCO — update documentation if the assessment is over 24 months old.' },
      { title: 'County', desc: 'Molina is prime plan in San Diego, Sacramento, Riverside and San Bernardino; in L.A. the card may say L.A. Care.' },
      { title: 'Other coverage', desc: 'Primary insurance is billed first; Molina wants the primary EOB for secondary processing.' },
    ],
    sources: [
      { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
      { title: 'Molina Healthcare — Medicaid Pre-Service Review Guide, eff. 1/1/2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-PA-Guide-Request-Form-Medicaid.ashx' },
      { title: 'Molina Healthcare — Medicaid Prior Auth (PA) Code Matrix, eff. Q2 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/PA-Code-Matrix.ashx' },
      { title: 'Molina Healthcare of California — California PA Code Exceptions, eff. Q2 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/PA-Code-Exceptions.ashx' },
      { title: 'Molina Healthcare of California — Applied Behavior Analysis Services & ABA Referral Form', url: 'https://www.molinahealthcare.com/providers/ca/medicaid/forms/~/media/Molina/PublicWebsite/PDF/providers/ca/applied-behavior-analysis-referral-form.pdf' },
      { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
      { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21 for Medi-Cal BHT — the manual lists "Be under 21 years of age." Molina’s Clinical Policy 482 adds a floor, "ASD initiation age is 18 months or older," that APL 23-010 does not contain; EPSDT and the APL set no minimum age, so a younger child with a recommendation is still covered under the state rule.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      dxRecency: {
        value: 'Two clocks. Policy 482: "If a standardized diagnostic assessment is more than 24 months old, updated documentation must describe current ASD symptoms and functional impact." The ABA Referral Form: the referring MD or clinical psychologist must have seen the member "within the last 12 months," with "most recent clinicals (within 1 year)."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'Molina Healthcare of California — Applied Behavior Analysis Services & ABA Referral Form', url: 'https://www.molinahealthcare.com/providers/ca/medicaid/forms/~/media/Molina/PublicWebsite/PDF/providers/ca/applied-behavior-analysis-referral-form.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'Policy 482 accepts "clinical psychologists, developmental pediatrician, pediatric neurologist, psychiatrist, or other licensed clinicians permitted under applicable state law to diagnose ASD," working as a multidisciplinary team, plus "Documentation from the Member’s primary care physician noting initial developmental concerns." The referral forms are signed by an "M.D. or Licensed Clinical Psychologist."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'Molina Healthcare of California — Applied Behavior Analysis Services & ABA Referral Form', url: 'https://www.molinahealthcare.com/providers/ca/medicaid/forms/~/media/Molina/PublicWebsite/PDF/providers/ca/applied-behavior-analysis-referral-form.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Policy 482 requires at least one of ADI-R, ADOS-2, CARS-2 or DISCO, plus adaptive measures such as Vineland or ABAS; screening instruments "do not independently establish" a diagnosis.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      referral: {
        value: 'Yes — the ABA Referral Form from an MD or licensed clinical psychologist goes to Molina’s ABA department (PedsCA@molinahealthcare.com, fax 855-297-3010), and a Molina case manager connects the family to a provider. In-network specialist referrals otherwise need no PA; non-participating providers need approval for all services.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of California — Applied Behavior Analysis Services & ABA Referral Form', url: 'https://www.molinahealthcare.com/providers/ca/medicaid/forms/~/media/Molina/PublicWebsite/PDF/providers/ca/applied-behavior-analysis-referral-form.pdf' },
          { title: 'Molina Healthcare — Medicaid Pre-Service Review Guide, eff. 1/1/2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-PA-Guide-Request-Form-Medicaid.ashx' },
        ],
      },
      telehealth: {
        value: 'Restrictive. Policy 482: "Telehealth is limited to caregiver training, coaching and supervision, or other indirect service components," used "in conjunction with in-person ABA services" and "not used solely for convenience, access, geographic distance, or provider preference." The manual’s general rule pays covered telehealth "at the same rate whether provided in person or through telehealth." Expect direct 97153 by telehealth to be denied.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Molina’s 2026 manual: "Prior authorization decisions are completed within seven calendar days for standard requests, and within 72 hours for expedited requests. Timeframes for standard requests may be extended up to fourteen days." Denials are communicated "within one business day of making the denial decision." Reassessment runs "AT LEAST every 6 months" under Policy 482.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
          { title: 'Molina Healthcare — Medicaid Pre-Service Review Guide, eff. 1/1/2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-PA-Guide-Request-Form-Medicaid.ashx' },
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      coordinationOfBenefits: {
        value: '"Medicaid is always the payer of last resort." Providers "must bill the primary payer and submit a primary explanation of benefits (EOB) to Molina for secondary Claim processing," paid under "the state regulatory COB methodology." Molina pays prenatal and "preventive pediatric care (EPSDT)" first and recovers afterwards — whether that pay-and-chase reaches BHT is not spelled out. Molina does not say whether its own ABA PA is needed while it is secondary; obtain it and confirm with the PA line (844-557-8434).',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
          { title: 'DHCS APL 22-027 — Cost Avoidance and Post-Payment Recovery for Other Health Coverage', url: 'https://www.dhcs.ca.gov/file/apl22-027-pdf/' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Policy 482: the treatment plan is "developed by a Board-Certified Behavior Analyst (BCBA) or BCBA-Doctoral (BCBA-D)," who "provides direct and consistent supervision" to BCaBAs and RBTs; delegated delivery does "not reduce or replace required direct involvement of the supervising behavioral analyst." Molina publishes no numeric supervision ratio.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in the 2026 manual, the PA code matrix or Policy 482; the state documents are silent too.',
        status: 'unverified',
        cites: [
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
        ],
        verifyVia: 'Molina California Medi-Cal claims/coding policies via Availity, or Molina provider services.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No cap. Policy 482 adds documentation for "high intensity services: If proposed treatment intensity exceeds 25 direct hours per week" — why goals cannot be met with fewer hours, and a taper plan — which is a documentation trigger, not a ceiling; APL 23-010 prohibits "caps on number of hours."',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      noteSignature: {
        value: 'Not found in Molina’s BHT-specific text.',
        status: 'unverified',
        cites: [
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
        ],
        verifyVia: 'The medical-record standards section of the Molina 2026 Medi-Cal provider manual (not reviewed for BHT specifics this cycle).',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Policy 482 requires a "Documented description of service modalities and settings (e.g. home, clinic, community)"; the state rule underneath (APL 23-010) adds school, including remote school sessions, and bars limiting BHT on school attendance.',
        status: 'verified',
        cites: [
          { title: 'Molina Clinical Policy No. 482 — Applied Behavioral Analysis for ASD (approved 6/10/2026)', url: 'https://www.molinaclinicalpolicy.com/molinaclinicalpolicy/-/media/Molina/PublicWebsite/PDF/Common/Molina-Clinical-Policy/Applied-Behavioral-Analysis-for-Autism-Spectrum-Disorder_R.ashx' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      billAsProvider: {
        value: 'Molina’s manual publishes rendering-level modifiers for BHT, with the tiers "as defined in the California Health and Safety Code § 1374.73": AH licensed clinician (QAS Provider), HP BCBA-D, HO BCBA (QAS Providers), HN associates — psych associate, AMFT, ACSW, APCC (QAS Professional) — and HM unlicensed/uncertified staff (QAS Paraprofessional). The request form captures requesting and servicing provider NPI/TIN.',
        status: 'verified',
        cites: [
          { title: 'Molina Healthcare of California Medi-Cal Provider Manual 2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-CA-MEDI-CAL-PROVIDER-MANUAL.pdf' },
          { title: 'Molina Healthcare — Medicaid Pre-Service Review Guide, eff. 1/1/2026', url: 'https://www.molinahealthcare.com/-/media/Molina/PublicWebsite/PDF/Providers/ca/Medicaid/2026-PA-Guide-Request-Form-Medicaid.ashx' },
        ],
      },
    },
    faq: [
      { q: 'Does Molina Healthcare of California cover ABA?', a: 'Yes — for Medi-Cal members under 21. Molina runs its own ABA department; a physician or clinical psychologist referral goes to PedsCA@molinahealthcare.com and a case manager connects the family to a provider.' },
      { q: 'Does Molina Medi-Cal require an autism diagnosis for ABA?', a: 'Molina’s Clinical Policy 482 asks for one, made with a validated tool such as ADOS-2. The state rule (APL 23-010) covers BHT "regardless of diagnosis" on a physician or psychologist recommendation — cite it if a non-ASD request is denied.' },
      { q: 'Can ABA be done by telehealth with Molina?', a: 'Only the indirect parts under Policy 482 — caregiver training, supervision and similar — alongside in-person services. Direct technician sessions by telehealth are likely to be denied.' },
    ],
  },

  'kaiser-permanente-medi-cal-california': {
    slug: 'kaiser-permanente-medi-cal-california',
    family: 'kaiser',
    cardDesc: 'Direct DHCS contract since 2024; entry only through a Kaiser physician referral; KP authorization even when secondary.',
    assessmentPA: {
      value: 'Required — as a Kaiser authorization/referral, not a provider-initiated request: for outside providers "Prior authorization is required as a condition of payment for any inpatient and outpatient services (excluding emergency services)"',
      status: 'verified',
      cites: [
        { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
        { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — BHT must be "prescribed by a licensed doctor or psychologist, approved by us, and provided in a way that follows the approved treatment plan"; the provider receives a written Authorization for Medical Care listing visits and duration, and anything beyond it needs prior approval',
      status: 'verified',
      cites: [
        { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
        { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
      ],
    },
    dxRequired: {
      value: 'No in Southern California — KP’s SCAL Medi-Cal BHT criteria cover members with ASD, suspected ASD, and members without an ASD diagnosis, but a non-ASD member’s BHT must be "Provided by a licensed provider acting within the scope of their licensure"; no Northern California criteria were found',
      status: 'plan-dependent',
      cites: [
        { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
        { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
      ],
      verifyVia: 'KP Northern California Medi-Cal BHT UM criteria (kp.org/UM, region-gated) or NCAL Member Services 1-855-839-7613 — the NCAL twin of the SCAL criteria document returns 404.',
      blocker: 'document',
    },
    payer: 'Kaiser Permanente (Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · Kaiser Permanente Medi-Cal',
    h1: 'Kaiser Permanente Medi-Cal ABA coverage: the intake guide.',
    metaTitle: 'Kaiser Permanente Medi-Cal ABA (BHT) Coverage & Referrals | Carelu',
    metaDescription:
      'How Kaiser Permanente covers Medi-Cal Behavioral Health Treatment (ABA) under its direct DHCS contract — entry only through a Kaiser physician referral, written Authorizations for Medical Care, the SCAL rule that non-ASD BHT needs a licensed provider, 5-business-day decisions, and KP authorization even when other insurance pays first.',
    intro: [
      'Kaiser Permanente has contracted directly with DHCS since January 1, 2024 and served about 1.26 million Medi-Cal members across 32 counties in August 2026 — the fourth-largest Medi-Cal plan in the state. For an ABA agency, Kaiser works differently from every other plan in this directory: there is no provider-initiated prior-authorization request. A Kaiser physician refers the child, Kaiser issues a written Authorization for Medical Care to a contracted BHT provider, and the provider works inside the visits and dates on that paper. A Kaiser Medi-Cal family who calls an agency directly needs to be sent back to their Kaiser pediatrician or behavioral health department first.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'Medi-Cal plan under a direct DHCS contract (since 1/1/2024), Northern and Southern California regions' },
      { label: 'Entry', value: 'Kaiser physician referral → written Authorization for Medical Care; no self-referral to outside ABA' },
      { label: 'Assessment / treatment auth', value: 'Both inside the KP authorization; extensions via the referring physician' },
      { label: 'Diagnosis', value: 'Not required (SCAL) — but non-ASD BHT must be delivered by a licensed provider' },
      { label: 'Decision clock', value: '5 business days (H&S 1367.01(h)(1)); 72 hours expedited' },
      { label: 'Other insurance', value: 'Seek the primary’s authorization AND keep KP’s' },
    ],
    sections: [
      {
        h2: 'Entry runs through a Kaiser physician',
        body: [
          'The 2026 Medi-Cal member handbook covers BHT "for members under 21 years old through the Medi-Cal for Kids and Teens benefit," when it is "prescribed by a licensed doctor or psychologist, approved by us, and provided in a way that follows the approved treatment plan." Outside providers need "a referral or pre-approval." Kaiser’s Northern California provider manual explains the mechanics: a Plan Physician "may refer a Member to a non-plan Provider when the Member requires covered services … not available in Plan or cannot be provided in a timely manner," the provider receives "a written Authorization for Medical Care communication" stating "the level and scope of services authorized, and the number of visits and/or duration of treatment," and "Any additional services beyond the scope of the authorization must have prior approval … contact the referring physician." Kaiser’s Medi-Cal quick-reference guide adds that Regional Centers "refer Medi-Cal Members needing Autism Spectum Disorder (ASD)/Applied Behavioral Analysis (ABA) Services to their PCP."',
        ],
        cites: [
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
          { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
          { title: 'KP — Contracted Provider Quick Reference Guide to Medi-Cal Managed Care (NCAL, 2026 supplement)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/quick-reference-guide-to-the-managed-medi-cal-program-as-of-en.pdf' },
        ],
      },
      {
        h2: 'The non-autism path needs a licensed clinician',
        body: [
          'Kaiser Southern California’s Medi-Cal BHT criteria cover BHT "for members with an ASD diagnosis, or where following formal assessment there is suspicion of ASD that is not yet diagnosed," and separately for members without an ASD diagnosis — consistent with the state’s "regardless of diagnosis" rule. But for the non-ASD path the service must be "Provided by a licensed provider acting within the scope of their licensure," so the usual BCBA-plus-technician team fits only the ASD or suspected-ASD path. The document is labelled "UM Criteria 2024" and still cites APL 19-014, which APL 23-010 superseded; no Northern California equivalent could be retrieved.',
        ],
        cites: [
          { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
    ],
    collect: [
      { title: 'Kaiser referral status', desc: 'Has a Kaiser physician referred for BHT? If not, send the family to their KP pediatrician or behavioral health first.' },
      { title: 'Authorization for Medical Care', desc: 'Visits, duration and expiration date — work only inside it; extensions go back through the referring physician.' },
      { title: 'Diagnosis status', desc: 'ASD / suspected ASD vs. no ASD — the non-ASD path in SCAL requires a licensed clinician to deliver the service.' },
      { title: 'Region', desc: 'Northern vs. Southern California — authorization hubs, contacts and criteria differ.' },
      { title: 'Other coverage', desc: 'Get the primary plan’s authorization and keep Kaiser’s.' },
    ],
    sources: [
      { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
      { title: 'KP — Contracted Provider Quick Reference Guide to Medi-Cal Managed Care (NCAL, 2026 supplement)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/quick-reference-guide-to-the-managed-medi-cal-program-as-of-en.pdf' },
      { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
      { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
      { title: 'KP — Coordination of Benefits and Medi-Cal Cost Avoidance (provider letter, Oct 2025)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/coordination-of-benefits-and-medi-cal-cost-avoidance-en-2026.pdf' },
      { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
      { title: 'KP NCAL — Provider Authorizations FAQ', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/provider-authorizations-faq-en.pdf' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Under 21: "We cover behavioral health treatment ("BHT") services for members under 21 years old through the Medi-Cal for Kids and Teens benefit."',
        status: 'verified',
        cites: [
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
        ],
      },
      dxRecency: {
        value: 'No recency rule published — the 2026 handbook, the Medi-Cal quick-reference guide and the SCAL BHT criteria were checked, and APL 23-010 sets none either. The operative date is the expiration on Kaiser’s Authorization for Medical Care.',
        status: 'verified',
        cites: [
          { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
          { title: 'DHCS APL 23-010 (Revised 11/22/2023) — BHT Coverage for Members Under 21', url: 'https://www.dhcs.ca.gov/file/apl23-010-pdf/' },
        ],
      },
      diagnosingProviders: {
        value: 'The recommendation comes from "a licensed physician, surgeon or psychologist" (SCAL criteria); the handbook says BHT must be "prescribed by a licensed doctor or psychologist." In practice the assessment runs through Kaiser: "If a developmental disability is suspected, the Medi-Cal Member may seek assessment and diagnosis via PCP or Regional Center."',
        status: 'verified',
        cites: [
          { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
          { title: 'KP — Contracted Provider Quick Reference Guide to Medi-Cal Managed Care (NCAL, 2026 supplement)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/quick-reference-guide-to-the-managed-medi-cal-program-as-of-en.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'None named — the SCAL criteria refer only to a "formal assessment," and the handbook and quick-reference guide name no instrument.',
        status: 'verified',
        cites: [
          { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
        ],
      },
      referral: {
        value: 'Yes, and it is the whole front door. Plan Physicians refer to a non-plan provider when the service is "not available in Plan or cannot be provided in a timely manner"; outside referrals are "managed at the local facility level," and out-of-network services need "a referral or pre-approval." An ABA agency cannot accept a Kaiser Medi-Cal family on its own — the family must be referred by a Kaiser physician and the agency must receive the written authorization.',
        status: 'verified',
        cites: [
          { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
        ],
      },
      telehealth: {
        value: 'General rule only: "Providers may provide Telehealth services to its Medi-Cal Members" after assessing appropriateness and documenting verbal or written consent. Kaiser publishes no BHT-specific telehealth rule; what is payable remotely follows the scope of the individual authorization.',
        status: 'plan-dependent',
        cites: [
          { title: 'KP — Contracted Provider Quick Reference Guide to Medi-Cal Managed Care (NCAL, 2026 supplement)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/quick-reference-guide-to-the-managed-medi-cal-program-as-of-en.pdf' },
        ],
        verifyVia: 'The Referral Questions number on the Kaiser Authorization for Medical Care — ask whether the authorized BHT codes may be delivered by telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'The 2026 handbook: "Under Health and Safety Code Section 1367.01(h)(1), The Permanente Medical Group has five business days from when they get the information reasonably needed to decide" (Southern California states the same 5 business days); expedited decisions "no later than 72 hours." Reauthorization: authorized services must be rendered "before the authorization expires," and the treatment plan is reviewed at least every six months.',
        status: 'verified',
        cites: [
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
          { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Kaiser’s cost-avoidance letter makes contractors "responsible for identifying the primary payor, seeking authorization from the primary payor (if authorization is required), and billing the appropriate party." "If a Medi-Cal Member has active OHC and the requested service is covered by the OHC, you must instruct the member to seek the service through the OHC carrier," but "you must not refuse to provide covered services to Medi-Cal Members as authorized by Kaiser Permanente." Every prior-authorized service needs its authorization number on the claim — so keep Kaiser’s authorization even when Kaiser is secondary.',
        status: 'verified',
        cites: [
          { title: 'KP — Coordination of Benefits and Medi-Cal Cost Avoidance (provider letter, Oct 2025)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/coordination-of-benefits-and-medi-cal-cost-avoidance-en-2026.pdf' },
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'No ratio published. The handbook says the plan is developed by a qualified BHT provider and "may be administered by a qualified BHT provider, qualified BHT service professional, or qualified BHT service paraprofessional" — the state QAS tiers — and the SCAL criteria require a licensed provider for the non-ASD path.',
        status: 'plan-dependent',
        cites: [
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
          { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
        ],
        verifyVia: 'Your Kaiser BHT provider agreement — supervision expectations are contract terms.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not addressed in any public Kaiser document read.',
        status: 'unverified',
        cites: [
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
        ],
        verifyVia: 'Your Kaiser BHT provider contract/billing guide (not public) or the Kaiser claims line on the authorization.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No caps: BHT is "not limited based on school attendance or other categorical exclusions" (quick-reference guide). Units and duration are whatever each Authorization for Medical Care states.',
        status: 'verified',
        cites: [
          { title: 'KP — Contracted Provider Quick Reference Guide to Medi-Cal Managed Care (NCAL, 2026 supplement)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/quick-reference-guide-to-the-managed-medi-cal-program-as-of-en.pdf' },
          { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
        ],
      },
      noteSignature: {
        value: 'Not addressed in the public Kaiser documents read.',
        status: 'unverified',
        cites: [
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
        ],
        verifyVia: 'The record-keeping section of your Kaiser provider agreement.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'SCAL criteria: "Deliver BHT services in a home or community-based setting, including clinics. Any portion … provided in school must be clinically indicated as well as proportioned." The quick-reference guide excludes "BHT services delivered in schools that are Individuals with Disabilities Education Act (IDEA) funded."',
        status: 'verified',
        cites: [
          { title: 'KFHP-SCAL — UM Criteria for BHT Services for Medi-Cal Members under EPSDT (UM Criteria 2024)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management/bht-epsdt-um-criteria-medi-cal-scal-en.pdf' },
          { title: 'KP — Contracted Provider Quick Reference Guide to Medi-Cal Managed Care (NCAL, 2026 supplement)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/quick-reference-guide-to-the-managed-medi-cal-program-as-of-en.pdf' },
        ],
      },
      billAsProvider: {
        value: 'Only Kaiser-contracted, Medi-Cal-enrolled providers, with the plan "developed by a Medi-Cal Network Provider who is a qualified BHT provider"; claims must carry the Kaiser authorization number. No rule on whose NPI goes on technician lines is published.',
        status: 'plan-dependent',
        cites: [
          { title: 'Kaiser Permanente Medi-Cal Member Handbook — 2026 Combined EOC (Northern and Southern California)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/medicaid/evidence-of-coverage-medi-cal-2026.pdf' },
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
        ],
        verifyVia: 'Your Kaiser BHT provider agreement — rendering vs. billing NPI for technician time.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Can we start ABA with a Kaiser Medi-Cal family who calls us directly?', a: 'Not until Kaiser authorizes it. A Kaiser physician must refer for BHT and Kaiser must issue a written Authorization for Medical Care to your agency; send the family to their Kaiser pediatrician or behavioral health first.' },
      { q: 'Does Kaiser Medi-Cal require an autism diagnosis for ABA?', a: 'Not in Southern California’s criteria, which cover ASD, suspected ASD and non-ASD members — but for a child without ASD the service must be delivered by a licensed clinician.' },
      { q: 'How long does Kaiser take to decide?', a: 'Five business days from receiving the information reasonably needed (H&S 1367.01(h)(1)), and 72 hours for expedited requests.' },
    ],
  },

  'partnership-healthplan-of-california': {
    slug: 'partnership-healthplan-of-california',
    family: '',
    cardDesc: 'COHS for 24 northern counties; BHT reviewed in-house (not Carelon); TAR for assessment and treatment; ROI with every request.',
    assessmentPA: {
      value: 'Required — "A Treatment Authorization Request (TAR) will be required for all BHT services," and the BHT fax cover has a separate Assessment TAR box',
      status: 'verified',
      cites: [
        { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        { title: 'Partnership — Behavioral Health Therapy (BHT) Fax Cover Sheet', url: 'https://edge.sitecorecloud.io/partnershipae75-partnership4b61-production30f9-46fc/media/Project/partnership-sites/partnershiphp/files/PDF/BHTFaxCover.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — initial and reauthorization TARs with the treatment plan (and goal progress on reauth), plus the BCBA’s functional behavior assessment; plan reviewed at least every six months',
      status: 'verified',
      cites: [
        { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        { title: 'Partnership — Behavioral Health Therapy (BHT) Fax Cover Sheet', url: 'https://edge.sitecorecloud.io/partnershipae75-partnership4b61-production30f9-46fc/media/Project/partnership-sites/partnershiphp/files/PDF/BHTFaxCover.pdf' },
      ],
    },
    dxRequired: {
      value: 'Policy says no ("regardless of diagnosis," with ASD, ADHD, bipolar and schizophrenia as examples) — but the TAR needs "Medical or mental health diagnosis" and the fax cover’s assessment box asks for a CDE "confirming ASD diagnosis"; some diagnosis must be on the TAR',
      status: 'verified',
      cites: [
        { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        { title: 'Partnership — Behavioral Health Therapy (BHT) Fax Cover Sheet', url: 'https://edge.sitecorecloud.io/partnershipae75-partnership4b61-production30f9-46fc/media/Project/partnership-sites/partnershiphp/files/PDF/BHTFaxCover.pdf' },
      ],
    },
    payer: 'Partnership HealthPlan of California (Medi-Cal)',
    state: 'CA', kind: 'medicaid-mco', parent: 'Medi-Cal (California Medicaid)',
    pill: 'Payer Guide · Partnership HealthPlan of California',
    h1: 'Partnership HealthPlan of California ABA coverage (Medi-Cal).',
    metaTitle: 'Partnership HealthPlan of California ABA (BHT) Coverage & TARs | Carelu',
    metaDescription:
      'How Partnership HealthPlan of California covers Medi-Cal Behavioral Health Treatment (ABA) across 24 northern counties — BHT reviewed in-house rather than by Carelon, TARs for assessment and treatment, the yearly release of information, the 12-month documentation rule, and 7-calendar-day decisions.',
    intro: [
      'Partnership HealthPlan of California is the County Organized Health System for 24 northern counties — from Del Norte and Humboldt down through Marin, Sonoma, Napa, Solano and Yolo, and since 2024 Butte, Placer, Nevada, Sutter, Yuba and the rest of the northern valley — with about 847,000 Medi-Cal members in August 2026. In a COHS county there is no other Medi-Cal plan to choose, so every managed-care child there is a Partnership member. Mental health is delegated to Carelon Behavioral Health, but BHT is not: Partnership’s own Health Services Department reviews every BHT Treatment Authorization Request.',
    ],
    atGlance: [
      { label: 'Plan type', value: 'County Organized Health System — sole Medi-Cal plan in 24 northern counties' },
      { label: 'Who reviews BHT', value: 'Partnership itself (Carelon handles mental health only)' },
      { label: 'Assessment auth', value: 'Yes — Assessment TAR' },
      { label: 'Treatment auth', value: 'Yes — initial and reauthorization TARs with the treatment plan' },
      { label: 'Release of information', value: 'Signed ROI with every BHT submission; valid one calendar year' },
      { label: 'Submit via', value: 'Online Services portal (preferred) or fax (707) 863-4118 with the BHT cover sheet' },
      { label: 'Decision clock', value: '7 calendar days (up to 14); 72 hours urgent' },
    ],
    sections: [
      {
        h2: 'What goes in a Partnership BHT TAR',
        body: [
          'Policy MCUP3126 (reviewed April 8, 2026) requires a TAR for all BHT. The TAR must include the "Medical or mental health diagnosis," the "Length and severity of the condition," a history and physical "including mental status, development status and/or any form of comprehensive diagnostic testing," and "The Functional Behavioral assessment conducted by a Board Certified Behavior Analyst." A signed release of information must accompany "any BHT related clinical documentation or TAR"; it is "valid for one calendar year from the date of signature," and "Failure to do so may result in a delay of service." If the documentation is missing "OR the information is beyond twelve months, Partnership may make a one-time allowance to approve a single visit in order to fulfill TAR requirements." The BHT fax cover has three boxes — Assessment TAR (with a CDE and the ROI), Initial BHT services TAR (treatment plan), Reauthorization TAR (treatment plan with goal progress).',
          'Submission: "Electronic submission will allow for more expedient processing. If online submission is not possible, the TAR may be submitted via fax (707) 863 - 4118." Retro TARs must arrive "within fifteen (15) business days of the date of service," or within 60 calendar days of a primary insurer’s denial.',
        ],
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
          { title: 'Partnership MCUP3041 — Treatment Authorization Request (TAR) Review Process (reviewed 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850203' },
          { title: 'Partnership — Behavioral Health Therapy (BHT) Fax Cover Sheet', url: 'https://edge.sitecorecloud.io/partnershipae75-partnership4b61-production30f9-46fc/media/Project/partnership-sites/partnershiphp/files/PDF/BHTFaxCover.pdf' },
        ],
      },
      {
        h2: 'Regional Center transitions and school gaps',
        body: [
          'Partnership states it "is the primary Provider of medically necessary BHT services" and must fill gaps the school district leaves; it "must not assume that BHT services included in a Member’s IEP/IHSP/IFSP are actively being provided by the LEA." A child moving from a Regional Center automatically generates a continuity-of-care request, and continuity with an out-of-network BHT provider can run up to 12 months when the member saw that provider in the prior six months — paid at no less than "the established Medi-Cal Fee for Service (FFS) rate for the applicable BHT service." Members turning 21 get a transition plan toward community agencies or the Regional Center.',
        ],
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
    ],
    collect: [
      { title: 'Signed release of information', desc: 'Required with every BHT TAR or clinical document; renew yearly.' },
      { title: 'Recommendation + diagnosis', desc: 'Physician/psychologist recommendation and whatever diagnosis applies — the TAR needs one even though policy says "regardless of diagnosis."' },
      { title: 'Records under 12 months old', desc: 'H&P, diagnostic testing, the BCBA’s FBA — older records only earn a one-time single visit.' },
      { title: 'Regional Center history', desc: 'Transitions from an RC trigger continuity of care — capture the current provider.' },
      { title: 'Other coverage', desc: 'Primary insurer billed first; attach its EOB/RA.' },
    ],
    sources: [
      { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
      { title: 'Partnership MCUP3041 — Treatment Authorization Request (TAR) Review Process (reviewed 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850203' },
      { title: 'Partnership MCUP3041 Attachment A — Partnership TAR Requirements (rev. 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850202' },
      { title: 'Partnership — Behavioral Health Therapy (BHT) Fax Cover Sheet', url: 'https://edge.sitecorecloud.io/partnershipae75-partnership4b61-production30f9-46fc/media/Project/partnership-sites/partnershiphp/files/PDF/BHTFaxCover.pdf' },
      { title: 'Partnership MCUP3113 — Telehealth Services (reviewed 2/11/2026)', url: 'https://public.powerdms.com/PHC/documents/1850086' },
      { title: 'Partnership CLPM-32 — Other Primary Coverage (9/1/2025)', url: 'https://public.powerdms.com/PHC/documents/3548960' },
      { title: 'Partnership CLPM-13 — Partnership Medi-Cal Reimbursement', url: 'https://public.powerdms.com/PHC/documents/3548941' },
      { title: 'Partnership MPCR303 — Applied Behavioral Health and SUD Provider Credentialing', url: 'https://public.powerdms.com/PHC/documents/1849967' },
      { title: 'Partnership MPBP8003 — Mental Health Services (reviewed 6/10/2026; Carelon delegation)', url: 'https://public.powerdms.com/PHC/documents/3443929' },
      { title: 'CHHS Open Data — Medi-Cal Managed Care Enrollment Report (August 2026)', url: 'https://data.chhs.ca.gov/dataset/medi-cal-managed-care-enrollment-report' },
    ],
    intakeGates: {
      ageLimit: {
        value: '"Be under 21 years of age" (MCUP3126); members approaching 21 get a transition plan toward providers, community agencies or the Regional Center.',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      dxRecency: {
        value: 'A soft 12-month rule: "If the above documentation is not available OR the information is beyond twelve months, Partnership may make a one-time allowance to approve a single visit in order to fulfill TAR requirements."',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      diagnosingProviders: {
        value: 'The recommendation must come from "a licensed physician, surgeon or psychologist" stating BHT is medically necessary "regardless of diagnosis"; the functional behavior assessment must be "conducted by a Board Certified Behavior Analyst."',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      diagnosticTools: {
        value: 'None named — the TAR needs "any form of comprehensive diagnostic testing." UM uses the policy’s own criteria, "current clinical criteria and guidelines," and (generally) InterQual.',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
          { title: 'Partnership MCUP3041 — Treatment Authorization Request (TAR) Review Process (reviewed 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850203' },
        ],
      },
      referral: {
        value: 'No PCP referral form is required for BHT: the TAR is "to be submitted by the provider performing these services," and the fax cover also accepts a "Referral for BHT services for review." What is required is the physician/surgeon/psychologist recommendation and the signed ROI.',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3041 Attachment A — Partnership TAR Requirements (rev. 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850202' },
          { title: 'Partnership — Behavioral Health Therapy (BHT) Fax Cover Sheet', url: 'https://edge.sitecorecloud.io/partnershipae75-partnership4b61-production30f9-46fc/media/Project/partnership-sites/partnershiphp/files/PDF/BHTFaxCover.pdf' },
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      telehealth: {
        value: 'Partnership’s telehealth policy lets covered CPT/HCPCS services, "subject to any existing treatment authorization requirements," be delivered by telehealth when clinically appropriate, with documented consent, POS 02/10 and modifier 95 (video) or 93 (audio-only); MCUP3126 contemplates BHT "on-site at school or during remote school sessions." No BHT-specific restriction (e.g. on technician-delivered 97153) is published.',
        status: 'plan-dependent',
        cites: [
          { title: 'Partnership MCUP3113 — Telehealth Services (reviewed 2/11/2026)', url: 'https://public.powerdms.com/PHC/documents/1850086' },
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
        verifyVia: 'Partnership Health Services (BHT TAR review) — ask on the TAR whether remote 97153 is approved for this member.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'MCUP3041: non-urgent pre-service decisions "within seven (7) calendar days from the receipt of the request, but no later than 14 calendar days"; urgent pre-service "within 72 hours"; a TAR lacking clinical information "may be deferred/pended up to 14 calendar days." Retro TARs within 15 business days of service. Reauthorization: the treatment plan is reviewed "no less than once every six months," and the ROI must be renewed yearly.',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3041 — Treatment Authorization Request (TAR) Review Process (reviewed 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850203' },
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      coordinationOfBenefits: {
        value: '"The primary carrier must be billed first … A copy of the EOB or RA from the primary carrier should be attached … Partnership /Medi-Cal is always the payer of the last resort." Partnership accepts retro TARs "within 60 calendar days of a denial from the primary insurance carrier" — which means it still expects its own authorization when it ends up paying behind another plan.',
        status: 'verified',
        cites: [
          { title: 'Partnership CLPM-32 — Other Primary Coverage (9/1/2025)', url: 'https://public.powerdms.com/PHC/documents/3548960' },
          { title: 'Partnership MCUP3041 — Treatment Authorization Request (TAR) Review Process (reviewed 8/12/2026)', url: 'https://public.powerdms.com/PHC/documents/1850203' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: '"Partnership only credentials Licensed Medical Professionals or BACB® certified providers … Providers who are not licensed or BACB® certified may only provide ABA services while under the supervision of a Partnership credentialed provider," and "BCaBA providers must work under the supervision of a Partnership credentialed BCBA." No numeric supervision ratio is published.',
        status: 'verified',
        cites: [
          { title: 'Partnership MPCR303 — Applied Behavioral Health and SUD Provider Credentialing', url: 'https://public.powerdms.com/PHC/documents/1849967' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in MCUP3126 or MCUP3041. Partnership’s claims manual says it "follows State of California Medi-Cal Provider Manual unless otherwise stated" — and the state BHT manual is itself silent on 97153 with 97155 in the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'Partnership — Claims Manual (Section 3 policies index)', url: 'https://www.partnershiphp.org/providers/policies/section3' },
          { title: 'Medi-Cal Provider Manual — Behavioral Health Treatment (bht), Nov 2025', url: 'https://mcweb.apps.prd.cammis.medi-cal.ca.gov/file/manual?fn=bht.pdf' },
        ],
        verifyVia: 'Partnership Claims Department or provider relations — ask whether 97153 and 97155 may be billed for the same minutes.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No caps: "Blanket limitations or restrictions on benefits and services, such as caps on number of hours, are prohibited" (MCUP3126).',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      noteSignature: {
        value: 'Not addressed in the BHT policy.',
        status: 'unverified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
        verifyVia: 'Partnership’s medical-record standards policy (not read this cycle) on partnershiphp.org / PowerDMS.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'MCUP3126: the provider "Delivers BHT services in a home or community-based setting, including clinics," with any school-based hours "proportionate to the Member’s medical need," including on-site at school or during remote school sessions.',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
        ],
      },
      billAsProvider: {
        value: 'BHT must be delivered by a QAS Provider, Professional or Paraprofessional meeting the State Plan; Partnership credentials BCBA, BCBA-D and BCaBA (re-credentialing every 36 months), and "Individual unlicensed ABA therapists must submit to a criminal background check by Partnership" (group-employed unlicensed staff need a background check too). Contracted rates sit in each provider’s Partnership contract; non-contracted providers are paid "the State of California Medi-Cal fee-for-service rates."',
        status: 'verified',
        cites: [
          { title: 'Partnership MCUP3126 — Behavioral Health Treatment (BHT) for Members Under 21 (reviewed 4/8/2026)', url: 'https://public.powerdms.com/PHC/documents/1850144' },
          { title: 'Partnership MPCR303 — Applied Behavioral Health and SUD Provider Credentialing', url: 'https://public.powerdms.com/PHC/documents/1849967' },
          { title: 'Partnership CLPM-13 — Partnership Medi-Cal Reimbursement', url: 'https://public.powerdms.com/PHC/documents/3548941' },
        ],
      },
    },
    faq: [
      { q: 'Does Partnership HealthPlan cover ABA?', a: 'Yes — as Behavioral Health Treatment for Medi-Cal members under 21 in its 24 northern counties, reviewed by Partnership itself (not Carelon) through Treatment Authorization Requests.' },
      { q: 'What does Partnership need with a BHT request?', a: 'A signed release of information (valid one year), a physician/surgeon/psychologist recommendation, a diagnosis, the H&P and diagnostic testing, and a BCBA’s functional behavior assessment — records older than 12 months only earn a one-time single visit.' },
      { q: 'How fast does Partnership decide a BHT TAR?', a: 'Within 7 calendar days of receipt (up to 14 if information is missing), and within 72 hours for urgent requests.' },
    ],
  },

  'kaiser-permanente-california': {
    slug: 'kaiser-permanente-california',
    family: 'kaiser',
    cardDesc: 'Closed HMO: BHT only by Kaiser physician referral (NCAL via PDCP/Catalight); 12-month auths; H&S 1374.73 mandate.',
    assessmentPA: {
      value: 'Required as a Kaiser referral, not a provider-filed PA — "a Plan Physician must refer you before you can get Behavioral Health Treatment for Autism Spectrum Disorder"; in Northern California a partner agency then books a 1–2 hour BHT assessment under a written Kaiser authorization',
      status: 'verified',
      cites: [
        { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
        { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
        { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required as a Kaiser authorization — treatment runs only under a written Authorization for Medical Care to an in-network agency; "Any additional services beyond the scope of the authorization must have prior approval"; NCAL BHT is "typically done for 12 months at a time" with mid-point and end reviews',
      status: 'verified',
      cites: [
        { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
        { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
      ],
    },
    dxRequired: {
      value: 'ASD is the standard entry — the benefit is "Behavioral Health Treatment for Autism Spectrum Disorder" — though the EOC definition extends to other mental health conditions "when this treatment is clinically indicated"',
      status: 'verified',
      cites: [
        { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
      ],
    },
    payer: 'Kaiser Permanente (California commercial)',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · Kaiser Permanente · California',
    h1: 'Kaiser Permanente ABA coverage in California: the intake guide.',
    metaTitle: 'Kaiser Permanente ABA (BHT) Coverage in California: Referrals & Mandate | Carelu',
    metaDescription:
      'How Kaiser Permanente covers ABA (Behavioral Health Treatment) for California commercial members — the Plan Physician referral that replaces prior auth, the NCAL PDCP and Catalight partner network, 12-month authorizations, the H&S § 1374.73 mandate (no age or dollar caps, no rediagnosis), and what intake should do instead of collecting a card.',
    intro: [
      'Kaiser Permanente is California’s largest commercial health plan and a closed, integrated HMO — which changes the intake script completely. A Kaiser family cannot bring their child to an outside ABA agency and have the agency file for authorization: "a Plan Physician must refer you before you can get Behavioral Health Treatment for Autism Spectrum Disorder." In Northern California that referral goes to Kaiser’s Pediatric Developmental Care Coordination Program (PDCP), which places the child with a partner agency (chiefly Catalight Care Services). The right first step for a Kaiser caller is "ask your Kaiser pediatrician for a BHT referral," not "send us your card." Underneath, Kaiser Foundation Health Plan is a DMHC-licensed plan, so California’s autism mandate binds its fully insured business.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — Behavioral Health Treatment for ASD, by Plan Physician referral only' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'Kaiser entry', value: 'Plan Physician referral → NCAL: PDCP → partner agency (mainly Catalight) → written authorization' },
      { label: 'Authorization span', value: 'NCAL: typically 12 months, reviewed mid-point and at the end' },
    ],
    sections: [
      {
        h2: 'How a Kaiser child actually gets to ABA',
        body: [
          'The 2026 EOC puts BHT among the few mental health services that need a referral: "a Plan Physician must refer you before you can get Behavioral Health Treatment for Autism Spectrum Disorder." Kaiser’s Northern California physician site walks through the path: "Your child’s doctor will send a referral to the PDCP for a BHT evaluation"; a partner agency — the primary partner is Catalight Care Services — calls to book an initial 1–2 hour assessment that "will determine whether BHT is an appropriate treatment"; then "a comprehensive treatment assessment with a BHT provider from a partner agency in the network." Families can name a prior provider and Kaiser will "determine if your provider is an authorized network provider." BHT "is typically done for 12 months at a time," with progress reviewed "in the middle and at the end of each period." For the contracted agency the NCAL provider manual is blunt: "Prior authorization is required as a condition of payment," services arrive as a written "Authorization for Medical Care," and anything more goes back through "the referring physician."',
          'Kaiser’s March 2026 member notice on prior authorization does not list BHT — "The Health Plan does not require prior authorization once members are referred to a service" — because the gate is the Medical Group referral and authorization, not a Health Plan UM review. Southern California publishes no equivalent BHT pathway page or professional provider manual; ask SCAL Behavioral Health UM (1-866-465-7296) or the SCAL network team (SCAL-BH-Panel@kp.org).',
        ],
        cites: [
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
          { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
          { title: 'Kaiser Permanente — Utilization Management Process notice (March 2026, NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management-process-ca.pdf' },
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO, including Kaiser Foundation Health Plan, and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." And every plan must keep "an adequate network" of qualified autism service providers. Exempt: self-funded ERISA employer plans (outside state law), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies. Kaiser also administers self-funded employer plans (its "Self-Funded Provider Manual Administered by KPIC"); those answer to ERISA, not § 1374.73.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." Kaiser’s contracts require BHT "in accordance with the requirements set forth in California Health and Safety Code Section 1374.73." Kaiser publishes no BHT fee schedule; rates are negotiated in the Kaiser (or, in NCAL, Catalight network) agreement. Member cost share is per day: since 2018 Kaiser collects "one member cost share ‘per day’ for any combination of individual or group visits."',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'KP NCAL HMO Provider Manual 2026 — Section 12, Additional Service Specific Information (§ 12.7 ASD Services)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-additional-service-specific-information-en.pdf' },
          { title: 'KP SCAL — Notice on BHT/ABA Cost Share Collection and Classification', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/cost-share-collection-and-classification-behavorial-health-notice-en.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Kaiser referral', desc: 'Has the child’s Kaiser doctor referred for BHT (NCAL: to PDCP)? If not, that is the family’s first call — an outside agency cannot start without it.' },
      { title: 'Fully insured vs. self-funded', desc: 'Kaiser Foundation Health Plan (DMHC, mandate applies) vs. a self-funded employer plan administered by Kaiser (ERISA).' },
      { title: 'Region', desc: 'Northern vs. Southern California — the placement pathway and contacts differ.' },
      { title: 'Prior diagnosis', desc: 'Regional Center or school evaluations — Kaiser may reassess at entry, but from 2026 cannot require a rediagnosis to keep coverage.' },
      { title: 'Authorization letter', desc: 'Visits, dates and expiration — agencies work only inside the written Authorization for Medical Care.' },
    ],
    sources: [
      { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
      { title: 'Kaiser Permanente — Utilization Management Process notice (March 2026, NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management-process-ca.pdf' },
      { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
      { title: 'TPMG My Doctor Online (NCAL) — Evaluation for ASD in Children', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/evaluation-for-autism-spectrum-disorder-in-children-2259863' },
      { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
      { title: 'KP NCAL HMO Provider Manual 2026 — Section 12, Additional Service Specific Information (§ 12.7 ASD Services)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-additional-service-specific-information-en.pdf' },
      { title: 'KP SCAL — Notice on BHT/ABA Cost Share Collection and Classification', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/cost-share-collection-and-classification-behavorial-health-notice-en.pdf' },
      { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
      { title: 'DMHC — licensed health plan list', url: 'https://wpso.dmhc.ca.gov/hpsearch/viewall.aspx' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'None. No age limit appears in the EOC’s BHT definition or benefit, and H&S § 1374.73 sets no age or dollar cap for fully insured plans. Self-funded employer plans that Kaiser administers follow their own plan document.',
        status: 'verified',
        cites: [
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      dxRecency: {
        value: 'Kaiser publishes no recency rule; it decides at entry whether an outside diagnosis is enough: "Tell your child’s doctor if your child already had an ASD evaluation outside of Kaiser Permanente, such as with the Regional Center or a school district. They’ll let you know if any additional assessment is needed." For contracts issued, amended or renewed on or after January 1, 2026, § 1374.73(c) bars requiring a rediagnosis "to maintain coverage" — utilization review is still allowed.',
        status: 'plan-dependent',
        cites: [
          { title: 'TPMG My Doctor Online (NCAL) — Evaluation for ASD in Children', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/evaluation-for-autism-spectrum-disorder-in-children-2259863' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'The child’s Kaiser referring physician (NCAL: PDCP) — whether the outside evaluation is accepted or a Kaiser assessment is needed first.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Kaiser diagnoses in-house or through its own evaluators: "The evaluation will be done through a Kaiser Permanente Developmental Pediatrics Department or ASD center, or with one of our qualified community providers," with "a licensed clinician, such as a physician, psychologist, or mental health therapist"; community evaluators "send your evaluation to a Kaiser Permanente clinician, who’ll refer you for other needed services." The EOC requires BHT "prescribed by a Plan Physician, or … developed by a Plan Provider who is a psychologist."',
        status: 'verified',
        cites: [
          { title: 'TPMG My Doctor Online (NCAL) — Evaluation for ASD in Children', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/evaluation-for-autism-spectrum-disorder-in-children-2259863' },
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No required instrument is published. Kaiser’s NCAL evaluation page describes structured play-based observation "using a standard set of activities" plus questionnaires; Kaiser posts no BHT/ABA UM criteria in either region’s criteria index.',
        status: 'unverified',
        cites: [
          { title: 'TPMG My Doctor Online (NCAL) — Evaluation for ASD in Children', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/evaluation-for-autism-spectrum-disorder-in-children-2259863' },
        ],
        verifyVia: 'The evaluating Kaiser department (Developmental Pediatrics / ASD center) — the instruments are internal Kaiser clinical practice.',
        blocker: 'per-case',
      },
      referral: {
        value: 'Required: "a Plan Physician must refer you before you can get Behavioral Health Treatment for Autism Spectrum Disorder" (unlike most Kaiser mental health care, which needs no referral). NCAL: "Your child’s doctor will send a referral to the PDCP for a BHT evaluation." Non-plan providers are used only when Kaiser cannot meet access standards — then "we will offer to refer you to a Non-Plan Provider." This also satisfies the statute’s requirement that BHT be prescribed by a physician or developed by a psychologist.',
        status: 'verified',
        cites: [
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
        ],
      },
      telehealth: {
        value: 'BHT is "Most often … provided in the home environment, but sometimes is done at a BHT center, in the community, or as a phone or video appointment" (NCAL), and the EOC covers telehealth visits "if the Services would have been covered … if provided in person." No CPT-level list of which ABA codes Kaiser pays remotely is published; that sits in the individual authorization.',
        status: 'plan-dependent',
        cites: [
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
          { title: 'Health & Safety Code § 1374.14 — telehealth coverage and payment parity', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.14' },
        ],
        verifyVia: 'The Referral Questions number on the Kaiser Authorization for Medical Care — ask which authorized codes may be delivered by video.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Kaiser’s March 2026 UM notice: "A decision will be made no later than five (5) business days after receiving your provider’s request … Decisions about urgent services will be made no later than 72 hours" — the H&S § 1367.01(h) floor, which also requires the decision to reach the requesting provider within 24 hours. Self-funded employer plans Kaiser administers follow 29 CFR 2560.503-1 instead (15 days pre-service, one 15-day extension, 72 hours urgent). Reauthorization: NCAL authorizations typically run 12 months with a mid-point review; the statute requires treatment-plan review at least every six months.',
        status: 'verified',
        cites: [
          { title: 'Kaiser Permanente — Utilization Management Process notice (March 2026, NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/notice/utilization-management-process-ca.pdf' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
        ],
      },
      coordinationOfBenefits: {
        value: 'For providers: "Authorization from KP is required even when KP is the secondary payor," and contractors identify the primary payer, seek its authorization, and bill the right party; as secondary, Kaiser pays "up to the primary payer’s allowable, not to exceed what KP would have paid as a primary payer." The DMHC floor (28 CCR 1300.67.13) sets the order between two parents’ plans — the employee’s plan before the dependent plan, then the parent "whose date of birth, excluding year of birth, occurs earlier in a calendar year" for non-separated parents — and excludes Medi-Cal from "Plan," so Medi-Cal pays last. TRICARE pays after Kaiser (10 U.S.C. 1079(i)(1)); CHAMPVA is "the last payer" (38 CFR 17.270(b)). A group EOC’s own COB clause can vary — confirm per member.',
        status: 'verified',
        cites: [
          { title: 'KP Northern California HMO Provider Manual 2026 — Section 4, Utilization Management', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-utilization-management-and-resource-management-en.pdf' },
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
          { title: '28 CCR § 1300.67.13 — Coordination of benefits (DMHC plans)', url: 'https://www.law.cornell.edu/regulations/california/28-CCR-1300.67.13' },
          { title: '10 U.S.C. 1079 — TRICARE pays after other coverage except Medicaid', url: 'https://www.law.cornell.edu/uscode/text/10/1079' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Kaiser adds no numeric ratio. Contracted providers deliver BHT "in accordance with the requirements set forth in California Health and Safety Code Section 1374.73, including providing Services under a treatment plan described and administered by Qualified Autism Service Providers, Qualified Autism Service Professionals and/or Qualified Autism Service Paraprofessionals," with documentary evidence on request. NCAL describes a "3-tier treatment model" — a supervising professional writes the plan, behavior technicians implement it — and for group BHT "Parent training and involvement are required." (Kaiser’s documents still cite the pre-2026 subsection numbers of § 1374.73.)',
        status: 'verified',
        cites: [
          { title: 'KP NCAL HMO Provider Manual 2026 — Section 12, Additional Service Specific Information (§ 12.7 ASD Services)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-additional-service-specific-information-en.pdf' },
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
        ],
      },
      concurrentBilling: {
        value: 'Not published — no Kaiser document addresses billing 97153 and 97155 for the same clock time.',
        status: 'unverified',
        cites: [
          { title: 'KP NCAL HMO Provider Manual 2026 — Section 12, Additional Service Specific Information (§ 12.7 ASD Services)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-additional-service-specific-information-en.pdf' },
        ],
        verifyVia: 'Your Kaiser (or NCAL Catalight network) provider agreement, or Kaiser Member Services Contact Center for providers (888) 576-6789.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No unit or hour caps are published; hours are set in each authorization. Member cost share is per day: since 2018 Kaiser treats BHT as a program and collects "one member cost share ‘per day’ for any combination of individual or group visits," equal to the individual-visit cost share (the 2026 Gold 80 HMO shows BHT at "No charge").',
        status: 'plan-dependent',
        cites: [
          { title: 'KP SCAL — Notice on BHT/ABA Cost Share Collection and Classification', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/cost-share-collection-and-classification-behavorial-health-notice-en.pdf' },
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
        ],
        verifyVia: 'The Kaiser Authorization for Medical Care (hours and units per authorization).',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Not published in any public Kaiser document read.',
        status: 'unverified',
        cites: [
          { title: 'KP NCAL HMO Provider Manual 2026 — Section 12, Additional Service Specific Information (§ 12.7 ASD Services)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/ncal/ever/hmo-additional-service-specific-information-en.pdf' },
        ],
        verifyVia: 'Your Kaiser or Catalight provider agreement (documentation standards).',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Home, BHT center, community, and phone or video — "Most often BHT is provided in the home environment" (NCAL); the EOC also covers BHT during a covered hospital or SNF stay. School is not mentioned by Kaiser. Statute: the plan may not limit coverage because services "could be covered by … special education or an individualized education program" (§ 1374.72(h)), though the treatment plan may not be used for "educational services" (§ 1374.73).',
        status: 'verified',
        cites: [
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
          { title: 'Kaiser Permanente 2026 Combined Membership Agreement / EOC — Gold 80 HMO (NCAL + SCAL)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/health-plan-documents/eoc/ca/individual-family/2026/on-gold-80-ca-en.pdf' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
        ],
      },
      billAsProvider: {
        value: 'Not published for BHT. Claims for prior-authorized services must carry the authorization number; in NCAL Kaiser places BHT through partner agencies (primarily Catalight Care Services, a network manager of 100+ providers), so a small agency’s contract may be with Catalight rather than Kaiser. The NCAL billing & payment section is image-only.',
        status: 'unverified',
        cites: [
          { title: 'KP Southern California HMO Provider Manual 2026 (rev. 10-25)', url: 'https://healthy.kaiserpermanente.org/content/dam/kporg/final/documents/community-providers/scal/ever/hmo-provider-manual-2026-en-scal.pdf' },
          { title: 'TPMG My Doctor Online (NCAL) — Interventions and Services for Children With ASD', url: 'https://mydoctor.kaiserpermanente.org/ncal/structured-content/interventions-and-services-for-children-with-autism-spectrum-disorder-asd-2263667' },
        ],
        verifyVia: 'KP NCAL "Billing and Payment" provider manual section (image PDF — needs a human read: healthy.kaiserpermanente.org …/ncal/ever/hmo-billing-and-payment-en.pdf), Catalight contracting, or SCAL-BH-Panel@kp.org.',
        blocker: 'document',
      },
    },
    faq: [
      { q: 'Does Kaiser Permanente cover ABA therapy in California?', a: 'Yes — as Behavioral Health Treatment for autism, but only by referral from a Kaiser physician. In Northern California the referral goes to Kaiser’s PDCP, which places the child with a partner agency.' },
      { q: 'Can we take a Kaiser family directly?', a: 'Only once Kaiser has referred the child and issued a written authorization to your agency. Send new Kaiser families to their Kaiser pediatrician for a BHT referral first.' },
      { q: 'What does the California autism mandate require?', a: 'H&S § 1374.73 / Ins. Code § 10144.51 require fully insured plans to cover behavioral health treatment, including ABA, for autism — with no age or dollar caps, a treatment plan reviewed at least every six months, and (from 2026) no forced rediagnosis to keep coverage. Self-funded ERISA plans and Medi-Cal plans are exempt.' },
      { q: 'Does California license behavior analysts?', a: 'No. BCBAs practice as qualified autism service providers on national certification; technicians are unlicensed QAS paraprofessionals working under supervision.' },
    ],
  },

  'blue-shield-of-california': {
    slug: 'blue-shield-of-california',
    family: 'bcbs',
    cardDesc: 'Magellan out 1/1/2026 — Blue Shield manages ABA itself; PA on assessment + treatment; BSC3.01; 2:10 supervision ceiling.',
    assessmentPA: {
      value: 'Required — 97151, 97152 and 0362T are on the Blue Shield prior authorization list (eff. 9/1/2026), and policy BSC3.01 says "The provider must request authorization for the initial assessment"; more than 20 assessment hours needs a written justification',
      status: 'verified',
      cites: [
        { title: 'Blue Shield of California — Prior Authorization List (eff. 9/1/2026)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/BSC-Prior-Auth-List.pdf' },
        { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required for DMHC-regulated commercial HMO/PPO/EPO and, since 1/1/2026, self-funded and Shared Advantage plans (97153–97158, 0373T); but the July 2026 manual says CDI-regulated Blue Shield products need PA only for non-emergency MH/SUD admissions — check the card',
      status: 'plan-dependent',
      cites: [
        { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
        { title: 'Blue Shield of California — Prior Authorization List (eff. 9/1/2026)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/BSC-Prior-Auth-List.pdf' },
      ],
      verifyVia: 'The member ID card (DMHC plan vs. CDI-regulated Blue Shield of California Life & Health policy) plus the AuthAccel "does this need auth" lookup or Provider Customer Service (800) 541-6652.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — ASD (DSM-5-TR) or pervasive developmental disorder, diagnosed "by a licensed, qualified health care provider … using clinical observations or validated assessment tools"',
      status: 'verified',
      cites: [
        { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
      ],
    },
    payer: 'Blue Shield of California',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · Blue Shield of California',
    h1: 'Blue Shield of California ABA coverage: the intake guide.',
    metaTitle: 'Blue Shield of California ABA Coverage, Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Blue Shield of California covers ABA — the January 2026 move from Magellan to in-house management, prior authorization for assessment and treatment via AuthAccel or fax, medical policy BSC3.01, the 2:10 supervision ceiling, 5-business-day decisions, and the H&S § 1374.73 mandate layer.',
    intro: [
      'Blue Shield of California (California Physicians’ Service, a DMHC-licensed plan) is one of the state’s two Blue plans — separate from Anthem Blue Cross. The operational headline for 2026: Magellan is gone. Since January 1, 2026, Blue Shield manages behavioral health for its commercial HMO and PPO members directly, "including Applied Behavioral Analysis (ABA)," and took over ABA for self-funded and Shared Advantage plans too. Old Magellan faxes and portals are wrong for 2026 dates of service.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD/PDD under policy BSC3.01 and the state mandate' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'Who manages ABA', value: 'Blue Shield itself since 1/1/2026 (Magellan/HAI-CA before)' },
      { label: 'Submit via', value: 'AuthAccel (or Availity); fax (844) 742-1155, urgent (844) 729-1416; BH (877) 263-9952' },
    ],
    sections: [
      {
        h2: 'Blue Shield’s ABA rules in 2026',
        body: [
          'Blue Shield’s October 2025 provider webinar announced it "will begin directly managing Behavioral Health services members enrolled in commercial HMO and PPO plans … including Applied Behavioral Analysis (ABA)," replacing its mental health service administrator, Human Affairs International of California (Magellan); requests for dates of service from January 1, 2026 "must be submitted to Blue Shield, and will no longer be accepted by Magellan." The July 2026 provider manual confirms it. Policy BSC3.01 (effective December 1, 2025) still says ABA "must be prior authorized by Blue Shield’s mental health service administrator" — that wording is out of date.',
          'BSC3.01 requires an ASD or PDD diagnosis, a requested assessment ("The provider must request authorization for the initial assessment," with hours per CPT code and "A list of standardized assessments"; over 20 hours needs a "detailed explanation"), and for continued care "either an initial assessment or reassessment within the prior 12 months" plus baseline-versus-current data. Supervision is capped rather than floored: "no more than 2 hours of supervision for every ten (10) hours of direct service" unless a higher ratio is shown medically necessary. Hours "spent in educational settings and receiving IEP services should not be included in the calculation of treatment hours." Blue Shield applies nonprofit-association (SB 855) criteria for fully insured reviews, naming CASP’s ABA Practice Guidelines for ABA. For HMO members ABA is carved out of medical-group delegation — Blue Shield, not the IPA, authorizes and pays. Federal Employee Program members have their own form and rules.',
        ],
        cites: [
          { title: 'Blue Shield — Transitioning Behavioral Health Services Management to Blue Shield (provider webinar, Oct 21, 2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/Transitioning-Behavioral-Health-Services-Management-to-Blue-Shield-of-California-October-2025.pdf' },
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
          { title: 'Blue Shield HMO IPA/Medical Group Procedures Manual, July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A12060-HMO-Manual.pdf' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." And every plan must keep "an adequate network" of qualified autism service providers. Exempt: self-funded ERISA employer plans (outside state law), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." Blue Shield "expects all network providers to comply with the changes made via SB 805." Blue Shield publishes no commercial ABA fee schedule; rates are negotiated in the participating agreement.',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan type on the card', desc: 'DMHC plan (HMO/PPO — PA required) vs. CDI-regulated Blue Shield Life & Health policy vs. self-funded/ASO vs. FEP — each routes differently.' },
      { title: 'Diagnosis report', desc: 'ASD (DSM-5-TR) or PDD from a licensed, qualified provider, with the tools or observations used.' },
      { title: 'Physician or psychologist prescription', desc: 'The mandate requires BHT prescribed by a physician or developed by a psychologist — collect it even though BSC3.01 says a BCBA "could prescribe."' },
      { title: 'Assessment within 12 months', desc: 'Continued care needs an assessment or reassessment in the prior 12 months.' },
      { title: 'Other coverage', desc: 'Birthday rule between parents; Blue Shield pays before TRICARE/CHAMPVA and Medi-Cal.' },
    ],
    sources: [
      { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
      { title: 'Blue Shield — Prior Authorization Request Form, Applied Behavioral Analysis (Commercial, 12/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/forms/PA-ABA.pdf' },
      { title: 'Blue Shield of California — Prior Authorization List (eff. 9/1/2026)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/BSC-Prior-Auth-List.pdf' },
      { title: 'Blue Shield — Transitioning Behavioral Health Services Management to Blue Shield (provider webinar, Oct 21, 2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/Transitioning-Behavioral-Health-Services-Management-to-Blue-Shield-of-California-October-2025.pdf' },
      { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
      { title: 'Blue Shield HMO IPA/Medical Group Procedures Manual, July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A12060-HMO-Manual.pdf' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'None. BSC3.01 sets no age criterion, and its rationale (quoting CASP) says comprehensive ABA "should not be limited by age." H&S § 1374.73 / Ins. § 10144.51 contain no age cap for fully insured plans; a self-funded plan’s own document governs.',
        status: 'verified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      dxRecency: {
        value: 'No expiry on the diagnosis in BSC3.01 or the request form; what is dated is the ABA assessment — continued care needs "an initial assessment or reassessment within the prior 12 months," and adaptive testing "should be administered every six (6) to twelve (12) months." For contracts issued or renewed on or after January 1, 2026, § 1374.73(c) bars requiring a rediagnosis to maintain coverage.',
        status: 'verified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      diagnosingProviders: {
        value: 'A "licensed, qualified health care provider" — BSC3.01’s initial-evaluation text gives examples: "an appropriate provider (e.g., pediatrician, pediatric neurologist, developmental pediatrician, psychologist)." No closed list.',
        status: 'verified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No instrument is required for the diagnosis, which rests on "clinical observations or validated assessment tools." For the ABA assessment BSC3.01 expects standardized tools — "ABAS, Bayley or Vineland" for adaptive baseline, "QABF, FAST, FACT" for function — and the request form asks for the instruments (e.g. "Vineland, BRIEF, SSIS, SR-2, ADOS-2, TOPL-2, ABAS-3").',
        status: 'verified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
          { title: 'Blue Shield — Prior Authorization Request Form, Applied Behavioral Analysis (Commercial, 12/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/forms/PA-ABA.pdf' },
        ],
      },
      referral: {
        value: 'Blue Shield publishes no separate PCP referral requirement for commercial ABA; for HMO members, ABA is on the list of services Blue Shield (not the IPA/medical group) authorizes and pays. The statute still requires BHT "prescribed by a physician and surgeon" or "developed by a psychologist" — BSC3.01’s note that "A board-certified behavioral analyst (BCBA) could prescribe ABA treatment" sits oddly with that, so collect the physician or psychologist prescription.',
        status: 'plan-dependent',
        cites: [
          { title: 'Blue Shield HMO IPA/Medical Group Procedures Manual, July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A12060-HMO-Manual.pdf' },
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'Blue Shield Behavioral Health (877) 263-9952 — ask whether the member’s HMO EOC needs a PCP referral before the ABA request.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'Telehealth is a place-of-service choice on the ABA request form (alongside office, home and community), so it is authorized code by code; Blue Shield’s general claim rule is "For Telehealth HIPAA compliant video services, use Modifier 95 in 24d and place of service 02 in 24b." H&S § 1374.14 requires telehealth coverage and payment on the same basis as in person. No ABA-specific list of telehealth-eligible codes is published.',
        status: 'plan-dependent',
        cites: [
          { title: 'Blue Shield — Prior Authorization Request Form, Applied Behavioral Analysis (Commercial, 12/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/forms/PA-ABA.pdf' },
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
          { title: 'Health & Safety Code § 1374.14 — telehealth coverage and payment parity', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.14' },
        ],
        verifyVia: 'The Blue Shield authorization — confirm which codes (e.g. 97155/97156) are approved for telehealth.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Published: "Blue Shield has a five business day turnaround time on all standard prior authorization requests" (ABA form); the July 2026 manual adds "Urgent: Within 72 hours" — urgent requests need an MD signature and "Scheduling issues do not meet the definition of an urgent request." That matches H&S § 1367.01(h). Self-funded groups sit under ERISA (29 CFR 2560.503-1: 15 days pre-service, one 15-day extension, 72 hours urgent) as the outer limit. Reauthorization: continued care needs an assessment or reassessment within the prior 12 months; the statute requires plan review at least every six months.',
        status: 'verified',
        cites: [
          { title: 'Blue Shield — Prior Authorization Request Form, Applied Behavioral Analysis (Commercial, 12/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/forms/PA-ABA.pdf' },
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Blue Shield’s manual: the employee plan pays before the dependent plan; for children of married parents "the group health plan of the parent, whose date of birth (month and day) occurs earlier in the year is primary"; a court decree controls where it applies, otherwise custodial parent, then the custodial parent’s spouse, then the non-custodial parent (joint custody with no decree uses the birthday rule). "Medi-Cal is considered a payor of last resort." With TRICARE or CHAMPVA, "Blue Shield is always the primary payor for covered services" — and those programs will not pay for services denied for breaking Blue Shield’s rules ("non-authorized, out-of-network"), so get Blue Shield’s authorization first.',
        status: 'verified',
        cites: [
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
          { title: '28 CCR § 1300.67.13 — Coordination of benefits (DMHC plans)', url: 'https://www.law.cornell.edu/regulations/california/28-CCR-1300.67.13' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'A ceiling, not a floor: "Hours for supervision should either be no more than 2 hours of supervision for every ten (10) hours of direct service or have information to support why a higher ratio is medically necessary" (BSC3.01). Staff qualifications follow the QAS definitions, and Blue Shield "expects all network providers to comply with the changes made via SB 805."',
        status: 'verified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed — BSC3.01, the ABA form and both 2026 manuals publish no 97153/97155 same-clock-time rule; BSC3.01 only reproduces the 97155 descriptor ("may include simultaneous direction of technician").',
        status: 'unverified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
        ],
        verifyVia: 'Blue Shield Provider Customer Service (800) 541-6652, or claims payment policies on Provider Connection (login).',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day unit cap or MUE table for ABA is published. Hours are authorized by CPT code per treatment plan; BSC3.01 says intensity rests on medical necessity "independent of the patient’s schedule," and school/IEP hours are not counted against treatment hours.',
        status: 'unverified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
        ],
        verifyVia: 'The authorization letter (hours per code); claim edits are behind the Provider Connection login.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'No rule on who signs ABA session notes or when. BSC3.01 requires records that track "the intensity of services as well as the locations where those services are provided," with treatment changes documented "in consultation with the BACB supervisor."',
        status: 'unverified',
        cites: [
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
        ],
        verifyVia: 'Blue Shield provider agreement / medical-record standards on Provider Connection.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'The ABA request form offers Office, Home, Telehealth, Community setting and Other; BSC3.01 describes ABA across "clinics, schools, homes, and communities," says home-based services "must be obtained from participating providers," and covers BHT "in the outpatient setting only." School-based ABA is not expressly excluded; the treatment plan may not be used for "Educational services."',
        status: 'verified',
        cites: [
          { title: 'Blue Shield — Prior Authorization Request Form, Applied Behavioral Analysis (Commercial, 12/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/forms/PA-ABA.pdf' },
          { title: 'Blue Shield Medical Policy BSC3.01 — BHT for ASD or PDD (eff. 12/1/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/medical-policies/Behavioral-Health-TX-Autism-Spectrum-Disorders.pdf' },
        ],
      },
      billAsProvider: {
        value: 'The ABA form collects a requesting QAS provider and a separate "Servicing/rendering QAS provider" (name, group, TIN, NPI); the manual requires the rendering provider’s NPI in blocks 24J and 33 and taxonomy in 24I, or claims "may not be accepted." Whether a technician is listed as rendering or billed under the supervising QAS provider is not stated for ABA.',
        status: 'plan-dependent',
        cites: [
          { title: 'Blue Shield — Prior Authorization Request Form, Applied Behavioral Analysis (Commercial, 12/2025)', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/forms/PA-ABA.pdf' },
          { title: 'Blue Shield Independent Physician and Provider Manual (PPO / direct HMO), July 2026', url: 'https://www.blueshieldca.com/content/dam/bsca/en/provider/docs/7-26-A11421-IPP-Manual.pdf' },
        ],
        verifyVia: 'Your Blue Shield provider agreement and the Blue Shield BH network/credentialing team — whether technicians are enrolled or billed under the supervisor.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Blue Shield of California cover ABA therapy?', a: 'Yes — for ASD or PDD under medical policy BSC3.01 and California’s autism mandate, with prior authorization for both the assessment and treatment on DMHC-regulated plans.' },
      { q: 'Does Magellan still handle Blue Shield ABA?', a: 'No. Since January 1, 2026, Blue Shield manages ABA itself for commercial HMO, PPO, self-funded and Shared Advantage plans. Use AuthAccel, fax (844) 742-1155 (urgent (844) 729-1416), or Blue Shield Behavioral Health at (877) 263-9952.' },
      { q: 'How fast does Blue Shield decide an ABA request?', a: 'Five business days for standard requests and 72 hours for urgent ones, per Blue Shield’s ABA form and 2026 manual — the H&S § 1367.01 floor.' },
      { q: 'What does the California autism mandate require?', a: 'Fully insured plans must cover behavioral health treatment, including ABA, for autism with no age or dollar caps, a treatment plan reviewed at least every six months, and — from 2026 — no forced rediagnosis to keep coverage. Self-funded ERISA and Medi-Cal plans are exempt.' },
    ],
  },

  'anthem-blue-cross-california': {
    slug: 'anthem-blue-cross-california',
    family: 'anthem',
    cardDesc: 'PA on every ABA code; fully insured reviewed on AACAP criteria (SB 855), self-funded on licensed MCG B-806-T.',
    assessmentPA: {
      value: 'Required — 97151, 97152 and 0362T are on Anthem’s California PPO precertification list (eff. 9/1/2026) with Anthem as the responsible party; "Although most services do not require preauthorization, ABA services do"',
      status: 'verified',
      cites: [
        { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
        { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — 97153–97158, 0373T and the H-codes (H0031/H0032/H0046/H2012/H2014/H2019) are all on the list; "ABA services are authorized by CPT® code … Any codes billed without authorization are not allowed." The PPO list does not cover HMO or BlueCard members',
      status: 'verified',
      cites: [
        { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
        { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — autism; Anthem’s ABA claim tips say "Use autism spectrum diagnosis," and the mandate covers BHT "for pervasive developmental disorder or autism"',
      status: 'verified',
      cites: [
        { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      ],
    },
    payer: 'Anthem Blue Cross (California commercial)',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · Anthem Blue Cross · California',
    h1: 'Anthem Blue Cross ABA coverage in California: the intake guide.',
    metaTitle: 'Anthem Blue Cross ABA Coverage in California: Prior Auth & Mandate | Carelu',
    metaDescription:
      'How Anthem Blue Cross covers ABA for California commercial members — precertification on every ABA code, AACAP criteria for fully insured plans vs. MCG B-806-T for self-funded, submission via Availity ICR or fax, the DMHC/CDI split under one brand, and the H&S § 1374.73 mandate.',
    intro: [
      'Anthem Blue Cross is two regulated entities under one brand — Blue Cross of California (a DMHC-licensed health care service plan) and Anthem Blue Cross Life and Health Insurance Company (CDI-regulated) — plus self-funded employer groups it only administers. For ABA the brand behaves consistently: every ABA code needs precertification, and Anthem’s own behavioral health team (not Carelon) reviews it. What changes with the funding type is the rulebook: fully insured California plans are reviewed on American Academy of Child and Adolescent Psychiatry (AACAP) criteria to comply with SB 855, while self-funded plans use licensed MCG guideline B-806-T. Anthem Blue Cross is a separate company from Blue Shield of California.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for autism, under the state mandate on fully insured plans' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'Criteria', value: 'Fully insured: AACAP (SB 855) · Self-funded (ASO): MCG B-806-T (licensed)' },
      { label: 'Submit via', value: 'Interactive Care Reviewer on Availity, or fax 866-582-2287; UM 800-274-7767' },
    ],
    sections: [
      {
        h2: 'Anthem’s ABA rules in California',
        body: [
          'Anthem’s California PPO precertification list (updated August 24, 2026, effective September 1, 2026) lists every ABA code — 97151–97158, 0362T, 0373T, H0031, H0032, H0046, H2012, H2014 and H2019 — with Anthem as the responsible party and "Contact Behavioral Health at the number on the member’s ID card." Its criteria column reads "American Academy of Child and Adolescent Psychiatry (AACAP)," with the comment "California Self-insured (ASO) benefit plans use MCG B-806-T Applied Behavioral Analysis." That is Anthem’s answer to SB 855’s requirement that fully insured plans use nonprofit-association criteria. Anthem’s national adaptive-behavior guideline (CG-BEH-02) is not on its California guideline index and is not cited for California. The list applies to "local fully-insured Anthem members and select members who are covered under self-insured (ASO) benefit plans" — not to HMO, BlueCard (out-of-state Blue cards follow the home plan), Medicare, Medicaid or FEP.',
          'Anthem’s behavioral health group guide adds: "Always obtain authorization prior to rendering ABA services"; "ABA services are authorized by CPT® code, and claims will be processed by CPT code"; units must be whole numbers; and "Include the individual NPI of the rendering provider." Submit through Interactive Care Reviewer on Availity or "fill out the Adaptive Behavioral Treatment Request and fax the completed form to 866-582-2287." Some Anthem plans carve mental health out to another company — the ID card says so.',
        ],
        cites: [
          { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
          { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." And every plan must keep "an adequate network" of qualified autism service providers. Exempt: self-funded ERISA employer plans (outside state law), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." Anthem’s H-code descriptors mirror those tiers (H2012 by a QAS provider, H0046 by a QAS professional, H2019 by a QAS paraprofessional, H0032 for supervision). Anthem publishes no ABA fee schedule; rates sit in the Commercial Behavioral Health and ABA Group Agreement, and Anthem says it is currently accepting requests to join from ABA providers.',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Entity and funding', desc: 'Blue Cross of California (DMHC) vs. Anthem Blue Cross Life and Health (CDI) vs. self-funded ASO — it decides the criteria (AACAP vs. MCG) and whether the mandate applies.' },
      { title: 'HMO or out-of-state Blue?', desc: 'The PPO list excludes HMO and BlueCard — HMO members go through their authorization path, BlueCard members follow the home plan.' },
      { title: 'Autism diagnosis', desc: 'Anthem bills ABA on an autism diagnosis.' },
      { title: 'Physician or psychologist prescription', desc: 'The mandate requires BHT prescribed by a physician or developed by a psychologist.' },
      { title: 'Rendering NPIs', desc: 'Claims need the individual NPI of the rendering provider.' },
    ],
    sources: [
      { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
      { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
      { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
      { title: 'Insurance Code § 10123.135 — utilization review timelines (CDI)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.135' },
      { title: 'DMHC — licensed health plan list', url: 'https://wpso.dmhc.ca.gov/hpsearch/viewall.aspx' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No age limit on fully insured plans: Anthem’s California PA list and BH guide carry no age cap, and H&S § 1374.73 / Ins. § 10144.51 contain none. Self-funded (ASO) plans follow their own plan document and the licensed MCG B-806-T guideline.',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'Benefits verification on the member ID — fully insured vs. self-funded, then the employer plan’s own terms for ASO groups.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'Anthem publishes no California recency rule of its own. For fully insured contracts issued, amended or renewed on or after January 1, 2026, the plan "shall not require an enrollee previously diagnosed … to receive a rediagnosis to maintain coverage" and may not delay existing treatment waiting for one (H&S § 1374.73(c) / Ins. § 10144.51(c)); utilization review is still allowed. Self-funded plans run on licensed MCG criteria.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
        ],
        verifyVia: 'Anthem UM (800-274-7767) at the ICR request; for self-funded plans the answer sits in MCG B-806-T.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value: 'Anthem California names no diagnosing-provider list. The statutory floor for fully insured plans: BHT must be "prescribed by a physician and surgeon" or "developed by a psychologist" (§ 1374.73(d)(1)(A)).',
        status: 'unverified',
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'Anthem UM 800-274-7767 — how the AACAP-based review treats the diagnosing clinician; self-funded plans apply licensed MCG B-806-T.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value: 'No Anthem California requirement for a specific instrument (ADOS-2 etc.) was found in any published document.',
        status: 'unverified',
        cites: [
          { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        ],
        verifyVia: 'Self-funded plans: MCG B-806-T (licensed, not publishable); fully insured: the Adaptive Behavioral Treatment Request checklist in Availity or Anthem UM 800-274-7767.',
        blocker: 'licensed',
      },
      referral: {
        value: 'No Anthem referral or order requirement for PPO ABA was found; the statute’s requirement that BHT be prescribed by a physician or developed by a psychologist works as the order. HMO members may route through their medical group — confirm on the card.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'DMHC — Types of Plans', url: 'https://www.dmhc.ca.gov/HealthCareinCalifornia/TypesofPlans.aspx' },
        ],
        verifyVia: 'The behavioral health number on the member ID card — for HMO members, whether BH is retained by Anthem or delegated to a medical group.',
        blocker: 'per-case',
      },
      telehealth: {
        value: 'No Anthem California ABA telehealth policy was found (its reimbursement policy library sits behind Availity). The statutory floor: DMHC plans must cover services "appropriately delivered through telehealth services on the same basis and to the same extent" as in person and pay the same rate (H&S § 1374.14; Ins. § 10123.855 for CDI policies). BCBAs and QAS professionals are telehealth providers under B&P § 2290.5; technicians are not named.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health & Safety Code § 1374.14 — telehealth coverage and payment parity', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.14' },
          { title: 'Insurance Code § 10123.855 — telehealth (CDI)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.855' },
        ],
        verifyVia: 'Anthem California commercial reimbursement policy "Telehealth" in Availity (Payer Spaces > Anthem > Policies), and which 971xx codes may be remote at the ICR request.',
        blocker: 'document',
      },
      authTurnaround: {
        value: 'Anthem California publishes no figure of its own, so the regulator’s clock applies. DMHC plans: H&S § 1367.01(h) — decisions "not to exceed five business days" from receipt of the information reasonably necessary, 72 hours when urgent, the provider told within 24 hours of the decision. CDI policies: Ins. § 10123.135(h), the same 5 business days / 72 hours. Self-funded (ASO) plans: 29 CFR 2560.503-1 — pre-service decisions "not later than 15 days after receipt of the claim," one 15-day extension, urgent within 72 hours. Reauthorization: the statute requires the treatment plan be reviewed at least every six months; the authorized date span is on the ICR approval.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: 'Insurance Code § 10123.135 — utilization review timelines (CDI)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.135' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification ask whether the plan is DMHC, CDI or self-funded, then confirm the precertification turnaround with Anthem UM (800-274-7767).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'No Anthem California ABA-specific COB rule. The regulator floor: DMHC plans follow 28 CCR § 1300.67.13 and CDI policies 10 CCR § 2232.56 — the employee’s plan before the dependent’s; for a child of non-separated parents, the plan of the parent whose birthday falls earlier in the calendar year; then court decree, custodial parent, stepparent, non-custodial parent. Medi-Cal is excluded from COB and pays last. TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is "the last payer" (38 CFR 17.270(b)). BlueCard members are routed to their home plan. Self-funded plans use their own plan document.',
        status: 'plan-dependent',
        cites: [
          { title: '28 CCR § 1300.67.13 — Coordination of benefits (DMHC plans)', url: 'https://www.law.cornell.edu/regulations/california/28-CCR-1300.67.13' },
          { title: '10 CCR § 2232.56 — Order of benefit determination (CDI)', url: 'https://www.law.cornell.edu/regulations/california/10-CCR-2232.56' },
          { title: '10 U.S.C. 1079 — TRICARE pays after other coverage except Medicaid', url: 'https://www.law.cornell.edu/uscode/text/10/1079' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'Ask Anthem at benefits verification for the member’s COB order, and record every other coverage the child has.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Anthem California publishes no supervision ratio. Its H-code descriptors encode the QAS tiers — H0031 assessment/plan by a "Qualified Autism Service Provider (licensed clinician or Board Certified Behavioral Analyst (BCBA))," H0032 "supervision of a Qualified Autism Service Professional or Paraprofessional by a Qualified Autism Service Provider," H0046 direct treatment by a QAS professional, H2019 by a QAS paraprofessional. The statute requires only supervision meeting "professionally recognized standards of practice."',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross — Local PPO Precertification/Prior Authorization List, California Commercial (eff. 9/1/2026)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_PPO_PA_List.pdf' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
        ],
        verifyVia: 'Anthem California Facility and Professional Provider Manual (Availity-gated) or the ABA group agreement.',
        blocker: 'document',
      },
      concurrentBilling: {
        value: 'Not addressed in any public Anthem California document.',
        status: 'unverified',
        cites: [
          { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        ],
        verifyVia: 'Anthem California commercial reimbursement policies (Availity) and the group agreement’s fee schedule exhibit.',
        blocker: 'document',
      },
      dailyLimits: {
        value: 'No per-day cap published; units are limited to what is authorized per CPT code, and "billings with units that include fractions or decimals cannot be processed."',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        ],
        verifyVia: 'The ICR authorization (units per code) and Anthem’s reimbursement policy on MUEs in Availity.',
        blocker: 'per-case',
      },
      noteSignature: {
        value: 'Nothing published by Anthem California on who signs ABA session notes or when.',
        status: 'unverified',
        cites: [
          { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        ],
        verifyVia: 'Anthem California provider manual (Availity-gated) or the ABA group agreement.',
        blocker: 'document',
      },
      placeOfService: {
        value: 'Nothing published by Anthem California on ABA settings. The statute: the treatment plan may not be used "for … respite, daycare, or educational services" (§ 1374.73), but the plan "shall not limit benefits … on the basis that those services should be or could be covered by … special education or an individualized education program" (§ 1374.72(h)).',
        status: 'plan-dependent',
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
        ],
        verifyVia: 'Anthem UM at the ICR request — whether school-setting hours are approvable for this member.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'Anthem’s guide: "Include the individual NPI of the rendering provider" (CMS-1500, payer ID 47198), with ABA contracted under the Commercial Behavioral Health and ABA Group Agreement and credentialing via CAQH ProView. For SB 855 supervised associates: "We do not directly contract with these provider types; however, they can render services to members if the supervising licensed provider is contracted with Anthem. The claim form should only include the licensed, contracted provider information." Whether technicians appear as rendering on ABA claims is not stated.',
        status: 'plan-dependent',
        cites: [
          { title: 'Anthem Blue Cross — Behavioral Health Guide: Commercial BH and ABA Group Agreement (CABC-CM-082371-25)', url: 'https://www.anthem.com/content/dam/digital/docs/anthembluecross/provider/commercial/guides/CA_BHG_Groups.pdf' },
        ],
        verifyVia: 'Anthem provider services or the ABA group agreement — whether RBT/paraprofessional time is billed under the BCBA or the group.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Anthem Blue Cross cover ABA therapy in California?', a: 'Yes — for autism, with precertification on every ABA code. Fully insured plans are reviewed on AACAP criteria to comply with SB 855; self-funded employer plans use MCG guideline B-806-T.' },
      { q: 'How do I request ABA authorization from Anthem Blue Cross?', a: 'Through Interactive Care Reviewer on Availity, or by faxing the Adaptive Behavioral Treatment Request to 866-582-2287. UM questions: 800-274-7767.' },
      { q: 'What does the California autism mandate require?', a: 'Fully insured plans must cover behavioral health treatment, including ABA, for autism with no age or dollar caps, a treatment plan reviewed at least every six months, and — from 2026 — no forced rediagnosis to keep coverage. Self-funded ERISA and Medi-Cal plans are exempt.' },
    ],
  },

  'health-net-california': {
    slug: 'health-net-california',
    family: 'centene',
    cardDesc: 'Leaving CA group market (plans end ~2/28/2027); in-house BH Autism Center; CASP criteria; PA via ABA@healthnet.com.',
    assessmentPA: {
      value: 'Required — the California Commercial PA list (eff. 7/1/2026) marks ABA "Authorized by the Behavioral Health Team" for HMO/POS, Ambetter HMO, POS tiers and PPO, and the ABA PA form carries 97151/97152 hours per authorization period',
      status: 'verified',
      cites: [
        { title: 'Health Net — Prior Authorization Requirements, California Commercial (eff. 7/1/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/prior-authorization-requirements---hmo-ppo-epo-hsp.html' },
        { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — "ABA treating practitioners are required to submit a prior authorization request form along with an updated treatment plan to Health Net prior to delivering ABA services"; addendums are no longer accepted, so any change needs a new complete request (the old auth is ended)',
      status: 'verified',
      cites: [
        { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
        { title: 'Health Net — Prior Authorization Requirements, California Commercial (eff. 7/1/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/prior-authorization-requirements---hmo-ppo-epo-hsp.html' },
        { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD confirmed on Health Net’s "Confirmation of Diagnosis" form, which "must be completed by a physician or licensed psychologist" with the most recent face-to-face evaluation attached',
      status: 'verified',
      cites: [
        { title: 'Health Net — Confirmation of Diagnosis: ASD form (24-993)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500235-ABA-ASD-Eval-Form-COMM.pdf' },
      ],
    },
    payer: 'Health Net of California (commercial)',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · Health Net · California',
    h1: 'Health Net ABA coverage in California: the intake guide.',
    metaTitle: 'Health Net California ABA Coverage, Prior Auth & Group Exit | Carelu',
    metaDescription:
      'How Health Net of California covers ABA for commercial members — the 2026–2027 exit from California group coverage, the in-house Behavioral Health Autism Center, CASP criteria, the ASD confirmation form, prior auth via ABA@healthnet.com, the no-addendum rule, and the H&S § 1374.73 mandate.',
    intro: [
      'Health Net of California (a Centene company) is a DMHC-licensed plan whose HMO/POS products fall under California’s autism mandate; its PPO policies are written through Health Net Life Insurance Company. The headline for intake: Health Net "has decided to discontinue offering commercial group health plans in California." All small-business and large-group plans are affected, "Many commercial group policies are expected to end February 28, 2027," and "Prior authorizations issued by Health Net may not transfer to a new carrier." Medi-Cal, Ambetter (Covered California) and Medicare continue. Any employer-group Health Net family starting ABA now needs a plan for the switch.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, under the state mandate' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'Group market exit', value: 'Employer group plans expected to end ~2/28/2027; auths may not transfer; Ambetter continues' },
      { label: 'Submit via', value: 'ABA@healthnet.com or fax 855-427-4798 (Health Net Behavioral Health Autism Center)' },
    ],
    sections: [
      {
        h2: 'Health Net’s ABA rules — and its exit from group coverage',
        body: [
          'Health Net now administers behavioral health itself — "Health Net manages inpatient and outpatient treatment for behavioral health" — and ABA requests go to the "Health Net Behavioral Health Autism Center" at ABA@healthnet.com or fax 855-427-4798 (BH provider services 844-966-0298). The front door is the Confirmation of Diagnosis form, completed by a physician or licensed psychologist with the most recent face-to-face evaluation; then the ABA PA form with the treatment plan, naming the case supervisor, proposed start and end dates and hours per code (97151–97158, 0362T/0373T, and H-codes). "Addendums to existing authorizations can no longer be accommodated": to change hours or dates, submit a new complete request with a letter explaining why, and the existing authorization "will be ended." For commercial ABA decisions, "the Council for Autism Services Providers ABA Professional Guidelines are used" — Health Net’s ABA-named clinical policies (CA.CP.BH.104/105) are Medi-Cal-only and do not apply to commercial members.',
          'One conflict to know: the PPO manual page (October 2025) still describes a notification model for the first six months, while the July 2026 commercial PA list marks ABA as PA-required for PPO too — treat PA as required. And the group exit: notices began September 1, 2026; ask every employer-group family for their plan end date and replacement carrier, because a new carrier means a new authorization.',
        ],
        cites: [
          { title: 'Health Net — Commercial Group Exit and Transition Information (updated 9/22/2026)', url: 'https://www.healthnet.com/content/healthnet/en_us/commercial-group-transition.html' },
          { title: 'Health Net — Provider Commercial Group Transition FAQ (updated 9/11/2026)', url: 'https://www.healthnet.com/content/healthnet/en_us/providers/commercial-group-transition.html' },
          { title: 'Health Net HMO Provider Manual — Behavioral Health Overview (updated 12/31/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/behavioral-health/overview-epo-hmo-hsp-ppo.html' },
          { title: 'Health Net — Clinical Criteria for Medical Management Decision Making (updated 12/18/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/utilization-management/clinical-criteria-for-medical-management-decision-making-medicar.html' },
          { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
          { title: 'Health Net PPO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/ppo/provider-manual/benefits/autism-spectrum-disorders-ppo.html' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." And every plan must keep "an adequate network" of qualified autism service providers. Exempt: self-funded ERISA employer plans (outside state law), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." Health Net publishes no commercial ABA fee schedule; rates are negotiated in the provider agreement (contract questions: DNBHC@healthnet.com).',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'Health Net — Behavioral Health Contact Information (updated 4/10/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/contacts/behavioral-health-contact-information-.html' },
        ],
      },
    ],
    collect: [
      { title: 'Group or individual plan', desc: 'Employer-group Health Net plans are ending (~2/28/2027) — get the end date and the replacement carrier; Ambetter (Covered California) continues.' },
      { title: 'Confirmation of Diagnosis form', desc: 'Completed by a physician or licensed psychologist, with the most recent face-to-face evaluation and the tool used.' },
      { title: 'Treatment plan + supervisor', desc: 'The PA form needs the case supervisor’s name, credentials and NPI, start/end dates and hours per code.' },
      { title: 'Fully insured vs. self-funded', desc: 'Self-funded groups Health Net administers are outside the state mandate.' },
      { title: 'Other coverage', desc: 'Birthday rule between parents; Health Net pays before TRICARE/CHAMPVA and Medi-Cal.' },
    ],
    sources: [
      { title: 'Health Net — Commercial Group Exit and Transition Information (updated 9/22/2026)', url: 'https://www.healthnet.com/content/healthnet/en_us/commercial-group-transition.html' },
      { title: 'Health Net — Prior Authorization Requirements, California Commercial (eff. 7/1/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/prior-authorization-requirements---hmo-ppo-epo-hsp.html' },
      { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
      { title: 'Health Net — Confirmation of Diagnosis: ASD form (24-993)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500235-ABA-ASD-Eval-Form-COMM.pdf' },
      { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
      { title: 'Health Net PPO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/ppo/provider-manual/benefits/autism-spectrum-disorders-ppo.html' },
      { title: 'Health Net — Clinical Criteria for Medical Management Decision Making (updated 12/18/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/utilization-management/clinical-criteria-for-medical-management-decision-making-medicar.html' },
      { title: 'Health Net — Order of Benefit Determination (COB)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/coordination-benefits/order-of-benefit-determination.html' },
      { title: 'Centene/Health Net CP.BH.500 — Behavioral Health Treatment Documentation Requirements (rev. 4/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CP.BH.500.pdf' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No age limit. Health Net publishes no commercial ABA age cap (its under-21 ABA policies are Medi-Cal only), and H&S § 1374.73 / Ins. § 10144.51 contain none for fully insured plans.',
        status: 'verified',
        cites: [
          { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      dxRecency: {
        value: 'Health Net wants "a copy of the member’s most recent face-to-face evaluation" with the diagnosis form but sets no maximum age for it. Its manual restates the 2026 rule: a member "is not required to obtain a rediagnosis" to keep BHT coverage, and coverage "cannot be discontinued or delayed while waiting for a rediagnosis"; utilization review is still allowed.',
        status: 'verified',
        cites: [
          { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
          { title: 'Health Net — Confirmation of Diagnosis: ASD form (24-993)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500235-ABA-ASD-Eval-Form-COMM.pdf' },
        ],
      },
      diagnosingProviders: {
        value: 'A physician or licensed psychologist: the diagnosis form "must be completed by a physician or licensed psychologist," recording the diagnosis date, whether ABA is recommended, and the signer’s license type and number.',
        status: 'verified',
        cites: [
          { title: 'Health Net — Confirmation of Diagnosis: ASD form (24-993)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500235-ABA-ASD-Eval-Form-COMM.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No single instrument is mandated. The diagnosis form asks which tool confirmed it from a checklist — CHAT, M-CHAT/M-CHAT-R/F, STAT, SCQ, ASSQ, CAST, KADI, ADOS/ADOS-2, ADI-R, CARS/CARS-2, GARS-3, or "Other valid form of approved evidence-based assessment" — a list that mixes screeners with diagnostic instruments.',
        status: 'verified',
        cites: [
          { title: 'Health Net — Confirmation of Diagnosis: ASD form (24-993)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500235-ABA-ASD-Eval-Form-COMM.pdf' },
        ],
      },
      referral: {
        value: 'No PCP referral: "Behavioral health services can be accessed directly by parents or by referral from any treating physician," and members may contact Health Net "without a referral from their primary care physician (PCP) or participating physician group (PPG)." The gate is the physician/psychologist diagnosis form (which records "ABA recommended: Yes/No") plus PA.',
        status: 'verified',
        cites: [
          { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
          { title: 'Health Net — Obtaining Behavioral Health or Substance Abuse Care (updated 12/31/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/behavioral-health/obtaining-behavioral-health-substance-abuse-care.html' },
        ],
      },
      telehealth: {
        value: 'No ABA-specific telehealth code list for commercial. Health Net’s general rule: POS 02 or 10 "accepted when used correctly," modifier 95 (synchronous) or GQ (asynchronous), payment parity, and no telehealth for services that "Require the in-person presence of the patient." Which ABA codes are approvable remotely is decided on the authorization.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health Net — Telehealth Billing Requirement (updated 9/30/2024)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/claims-provider-reimbursement/telehealth-billing-requirement-hmo-medicare-medi-cal-.html' },
        ],
        verifyVia: 'Health Net Behavioral Health Autism Center (844-966-0298) — whether 97155/97156 (or 97153) by telehealth are approvable on this authorization.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Health Net’s direct-network PA page: "For HMO, allow five business days for routine … and 72 hours for expedited"; the PA list asks for routine requests "At least five calendar days before" service. That matches the DMHC floor, H&S § 1367.01(h) (5 business days from receipt of the information reasonably necessary; 72 hours urgent), and Ins. § 10123.135(h) for CDI policies. Self-funded groups follow 29 CFR 2560.503-1 (15 days pre-service, one 15-day extension, 72 hours urgent). Reauthorization: the PPO page says the provider must "review it once every six months," and continued care "after the initial six months" needs a new request.',
        status: 'verified',
        cites: [
          { title: 'Health Net — Prior Authorization Process for Direct Network Providers', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/prior-authorizations/prior-authorization-process-direct-network-practitioners.html' },
          { title: 'Health Net — Prior Authorization Requirements, California Commercial (eff. 7/1/2026)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/prior-authorization-requirements---hmo-ppo-epo-hsp.html' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: 'Health Net PPO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/ppo/provider-manual/benefits/autism-spectrum-disorders-ppo.html' },
        ],
      },
      coordinationOfBenefits: {
        value: 'Health Net’s COB order: a plan without a COB provision pays first; the subscriber’s plan before the dependent’s; for a dependent child, the plan of the subscriber "whose birthday is earlier in a calendar year is the primary carrier" (including parents living together who never married, but not divorced or separated parents — for them a court decree, then custodial parent, stepparent, non-custodial parent; joint custody uses the birthday rule). "If one plan is an individual plan, not a group plan, both plans pay as primary. The payments do not coordinate." TRICARE/CHAMPVA: "The plan is primary in all instances when a member is covered by TRICARE or CHAMPVA." Medi-Cal pays last, and the plan may not limit coverage because a public program could pay (H&S § 1374.72(h)).',
        status: 'verified',
        cites: [
          { title: 'Health Net — Order of Benefit Determination (COB)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/coordination-benefits/order-of-benefit-determination.html' },
          { title: 'Health Net — COB: TRICARE/CHAMPVA', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/coordination-benefits/tricare-champva.html' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'No commercial ratio is published. The PA form requires the "Case supervisor name and credentials" and NPI; the manual restates the statute (treatment administered by a QAS provider, a professional "employed and supervised by the QASP," or a supervised paraprofessional); and UM runs on CASP guidelines, which carry their own supervision recommendations.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
          { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
        ],
        verifyVia: 'Your Health Net provider agreement (DNBHC@healthnet.com) — any supervision ratio is a contract term.',
        blocker: 'per-case',
      },
      concurrentBilling: {
        value: 'Not published for commercial members; do not borrow the Medi-Cal policies CA.CP.BH.104/105.',
        status: 'unverified',
        cites: [
          { title: 'Health Net — Clinical Criteria for Medical Management Decision Making (updated 12/18/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/utilization-management/clinical-criteria-for-medical-management-decision-making-medicar.html' },
        ],
        verifyVia: 'Health Net BH Provider Services 844-966-0298, or Health Net payment policies for code-pair edits.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No commercial per-day cap is published; units are authorized as hours per week or month per code. Claim-level code editing sits in Health Net’s "Claims Coding Policies › Code Editing," which was not read for ABA values.',
        status: 'unverified',
        cites: [
          { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
        ],
        verifyVia: 'Health Net provider library — Claims Coding Policies › Code Editing (providerlibrary.healthnetcalifornia.com/hmo/provider-manual/claims-coding-policies/code-editing.html).',
        blocker: 'document',
      },
      noteSignature: {
        value: 'Centene policy CP.BH.500, listed on Health Net’s Commercial & Medi-Cal policy index (rev. April 2026), requires every behavioral health record entry to be "dated and signed/authenticated (including licensure and/or certification) by the rendering provider prior to submission of the claim," with "Exact start and stop times of the service"; "Billed units not fully supported by documentation may be subject to payment denial or recoupment."',
        status: 'verified',
        cites: [
          { title: 'Centene/Health Net CP.BH.500 — Behavioral Health Treatment Documentation Requirements (rev. 4/2026)', url: 'https://www.healthnet.com/content/dam/centene/healthnet/pdfs/general/ca/policies/CP.BH.500.pdf' },
        ],
      },
      placeOfService: {
        value: 'No commercial setting restriction is published. Health Net "does not provide coverage for educational services (except for ABA services for Health Net commercial members diagnosed with ASDs when coverage is mandated by the state)"; the statute bars limiting coverage because services could be covered by "special education or an individualized education program" (§ 1374.72(h)). Home, clinic or community settings are approved per the treatment plan.',
        status: 'plan-dependent',
        cites: [
          { title: 'Health Net HMO Provider Manual — Autism Spectrum Disorders (updated 10/20/2025)', url: 'https://providerlibrary.healthnetcalifornia.com/hmo/provider-manual/benefits/autism-spectrum-disorders-hmo.html' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
        ],
        verifyVia: 'Ask on the PA whether school-setting hours are approvable for this member.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value: 'The PA form collects the group’s name and TIN plus the case supervisor’s NPI; the statute requires QAS professionals and paraprofessionals to be employed by the QAS provider or an entity employing them. Health Net publishes no rule on whether the technician or the supervising BCBA is the rendering provider on 97153.',
        status: 'unverified',
        cites: [
          { title: 'Health Net — ABA Prior Authorization Request Form (24-992)', url: 'https://providerlibrary.healthnetcalifornia.com/content/dam/centene/healthnet/pdfs/providerlibrary/500234-ABA-Prior-Auth-Request-Form-MCL.pdf' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
        ],
        verifyVia: 'Your Health Net provider agreement or BH Provider Services 844-966-0298.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Health Net cover ABA therapy in California?', a: 'Yes — for ASD under California’s mandate, with prior authorization through the Health Net Behavioral Health Autism Center (ABA@healthnet.com, fax 855-427-4798).' },
      { q: 'Is Health Net leaving California?', a: 'Its commercial employer-group business is: many group plans are expected to end February 28, 2027, and Health Net says its prior authorizations "may not transfer" to the new carrier. Medi-Cal, Ambetter (Covered California) and Medicare continue.' },
      { q: 'Can I add hours to an existing Health Net ABA authorization?', a: 'Not by addendum. Health Net requires a new, complete PA request covering all codes, with a letter explaining the clinical reason; the existing authorization is ended.' },
    ],
  },

  'aetna-california': {
    slug: 'aetna-california',
    family: 'aetna',
    cardDesc: 'CPB 0554 + ABA MN guide; CA state supplement drops outpatient BH PA on fully insured plans — confirm for ABA.',
    assessmentPA: {
      value: 'Unresolved for fully insured California plans — Aetna’s national documents require precertification for all ten ABA codes, but its California state supplement says that from 3/1/2024 outpatient behavioral health on fully insured commercial plans "will no longer require prior authorization" without naming ABA; self-funded plans stay on the national rule',
      status: 'plan-dependent',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
        { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      ],
      verifyVia: 'Aetna precertification 1-888-632-3862 (commercial) or Availity "Authorization (Precertification) Add" for the specific member — ask whether the 3/1/2024 California outpatient-BH PA removal covers 97151–97158/0362T/0373T, and keep the reference number.',
      blocker: 'per-case',
    },
    treatmentPA: {
      value: 'Same conflict as the assessment — national precertification (form GR-69017-4, 7-26 version) vs. the California fully insured outpatient-BH carve-out; progress re-evaluated every six months, with a repeat validated assessment every 6–12 months',
      status: 'plan-dependent',
      cites: [
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
      verifyVia: 'Aetna precertification 1-888-632-3862 or Availity for the member — whether ABA treatment needs precertification on this plan and the authorization span.',
      blocker: 'per-case',
    },
    dxRequired: {
      value: 'Yes — ASD only (DSM-5; ICD-10 F84.0, F84.3–F84.9 in the medical necessity guide); CPB 0554 calls ABA experimental for non-ASD indications',
      status: 'verified',
      cites: [
        { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      ],
    },
    payer: 'Aetna in California',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · Aetna · California',
    h1: 'Aetna ABA coverage in California: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in California: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for California families — the national clinical policy and medical necessity guide, the conflicting California supplement on outpatient behavioral health prior auth, the H&S § 1374.73 / Ins. § 10144.51 mandate (no age or dollar caps, no rediagnosis), California’s no-licensure QAS framework, and what intake should verify.',
    intro: [
      'For a California intake team an Aetna card means three layers: Aetna’s national ABA policy (CPB 0554, CPB 0648 and the ABA medical necessity guide), California’s autism mandate, and the plan’s funding type deciding which binds. California adds a fourth wrinkle: Aetna’s own state supplement says outpatient behavioral health on fully insured plans no longer needs prior authorization, while its national ABA documents still require precertification — so confirm per member. Aetna runs no Medi-Cal plan in 2026: Aetna Better Health of California stopped operating on January 1, 2024.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy and the state mandate' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'California PA quirk', value: 'State supplement: no PA for outpatient BH on fully insured plans since 3/1/2024 — national ABA precert list says otherwise; confirm' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in California',
        body: [
          'Aetna covers ABA for autism spectrum disorder under CPB 0554 (with CPB 0648 for ASD) and its ABA medical necessity guide, and considers ABA experimental for other indications. Nationally, the behavioral health precertification list names all ten ABA codes (97151–97158, 0362T, 0373T), and form GR-69017-4 — the 7-26 version, which "Effective August 1, 2026 … replaces all other" ABA precertification forms — carries the clinical detail; it excludes only Maryland and Massachusetts. The guide has no California exhibit (Maryland is the only state exhibit) and Aetna’s CPB state-deviation page has no California entry for CPB 0554 or 0648.',
          'The California supplement (7/26) is where it gets complicated: "Beginning on March 1, 2024, behavioral health services performed on an outpatient basis to any fully insured commercial HMO, PPO, EPO, IFP or student health plan will no longer require prior authorization. All inpatient behavioral health services will require prior authorization." It neither names nor carves out ABA, while the June 2026 provider manual still says "Applied behavior analysis (ABA) services require prior authorization." Until Aetna settles it, call precertification for each fully insured member and keep the reference number. The supplement also tells HMO members assigned to a medical group or IPA to "follow the precertification process established by their medical group or IPA."',
        ],
        cites: [
          { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna — CPB state deviations', url: 'https://www.aetna.com/health-care-professionals/cpb-state-deviations.html' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." Aetna publishes no California-specific ABA criteria set; for a fully insured member, ask which criteria the review used. SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." Exempt: self-funded ERISA employer plans (outside state law), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." For Aetna that means BACB certification: its manual requires "national certification … from the Behavior Analyst Certification Board (BACB), or the practitioner must be licensed as a behavior analyst in the state in which they practice." Aetna publishes no California ABA fee schedule; rates are contract-negotiated (fee-schedule requests via Availity, 1-888-632-3862 for 10 codes or fewer, or FeeSchedule@aetna.com).',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies; California PA carve-out may apply) vs. self-funded ERISA (national precert rule, mandate does not bind).' },
      { title: 'Medical group / IPA', desc: 'Aetna HMO members assigned to a medical group follow that group’s precertification process.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date — Aetna’s policy is ASD-only.' },
      { title: 'Standardized functioning measure', desc: 'Vineland-3, ABAS, VB-MAPP or ABLLS within the past 12 months.' },
      { title: 'Physician or psychologist prescription', desc: 'The California mandate keys covered BHT to a physician prescription or a psychologist-developed plan.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
      { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
      { title: 'Aetna — CPB state deviations', url: 'https://www.aetna.com/health-care-professionals/cpb-state-deviations.html' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'Aetna’s national ABA policies set no age cap; the medical necessity guide’s table is "Typical" (comprehensive ABA for ages 0–7, focused ABA for all ages), and "If there is a discrepancy between this guideline and a member’s plan of benefits, the benefits plan will govern." For fully insured California plans, H&S § 1374.73 / Ins. § 10144.51 contain no age or dollar limit; self-funded ERISA plans are outside the statute.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'Live benefits verification on the member ID (Availity) — fully insured vs. self-funded, then the plan’s own age terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis itself; the clock runs on functioning — medical necessity requires "demonstration of functional impairment on a standardized scale of functioning in the past 12 months," at least one standard deviation below the mean or a significant risk of harm, and form GR-69017-4 adds re-evaluation "every 6 months" and "a repeat validated assessment … every 6-12 months." On fully insured California plans renewed on or after January 1, 2026, § 1374.73(c) bars requiring a rediagnosis to maintain coverage.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      diagnosingProviders: {
        value: 'A DSM-5 ASD diagnosis "obtained by an appropriate provider" — the guide names a "licensed psychologist/psychiatrist, physician or other health care professional qualified to diagnose mental health conditions within their scope of practice"; CPB 0648 lists professionals appropriate to ASD evaluation (BCBA, developmental pediatrician, neurologist, OT, PT, primary care provider, psychiatrist, psychologist, SLP and audiologist). Aetna’s California-only record-review items add "If member is 0-6 years of age, there is documentation of screening for autism spectrum disorder."',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'CPB 0648 names ADI-R, ADOS-2, CARS-2 and the Asperger Syndrome Diagnostic Scale for the diagnosis; the guide requires a standardized functioning measure within the past 12 months, such as the Vineland-3, ABAS, VB-MAPP or ABLLS; GR-69017-4 also asks for "the member’s IQ, if available."',
        status: 'verified',
        cites: [
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
        ],
      },
      referral: {
        value: 'Aetna’s national ABA documents require no physician referral or order — the guide’s only prescription language is the Maryland exhibit. Precertification (where it applies) is provider-initiated via Availity or the precertification line; GR-69017-4 supplies the clinical detail and "can’t [be used] to initiate a new precertification request." The California supplement routes HMO members in a medical group or IPA through that group’s process. The California mandate itself keys covered BHT to a physician prescription or a psychologist-developed plan on fully insured plans.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      telehealth: {
        value: 'No ABA-specific rule. Aetna’s manual: "Aetna Behavioral Health offers telehealth services to all commercial fully insured members and to all commercial self-insured plan sponsors, unless those self- insured plan sponsors opt out," acting "within the scope of their license"; CPB 0554, CPB 0648 and the ABA guide are silent. California law (H&S § 1374.14) requires fully insured plans to cover telehealth on the same basis as in person.',
        status: 'unverified',
        cites: [
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Health & Safety Code § 1374.14 — telehealth coverage and payment parity', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.14' },
        ],
        verifyVia: 'Aetna Behavioral Health (1-888-632-3862) or Availity — which ABA codes are payable by telehealth on this plan, and with which POS and modifier.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Aetna publishes no ABA-specific clock ("The timing of the review incorporates state, federal, … and … NCQA requirements"), so the regulator’s applies. DMHC plans: H&S § 1367.01(h) — "not to exceed five business days" from receipt of the information reasonably necessary, 72 hours urgent. CDI policies: Ins. § 10123.135(h), the same. Self-funded ERISA plans: 29 CFR 2560.503-1 — pre-service "not later than 15 days after receipt of the claim," one 15-day extension, urgent within 72 hours. Reauthorization: progress is evaluated every six months.',
        status: 'plan-dependent',
        cites: [
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: 'Insurance Code § 10123.135 — utilization review timelines (CDI)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.135' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification ask whether the plan is DMHC, CDI or self-funded, then confirm the turnaround with Aetna precertification (1-888-632-3862).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'No Aetna ABA-specific COB rule was read. The California floor: DMHC plans follow 28 CCR § 1300.67.13 and CDI policies 10 CCR § 2232.56 — the employee’s plan before the dependent’s; for a child of non-separated parents, the plan of the parent whose birthday falls earlier in the calendar year; then court decree, custodial parent, stepparent, non-custodial parent. If the child also has Medi-Cal, this plan pays first — Medi-Cal is payer of last resort (W&I § 14124.90) and the plan may not limit coverage because Medicaid could pay (H&S § 1374.72(h)). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is "the last payer" (38 CFR 17.270(b)). Self-funded plans use their plan document.',
        status: 'plan-dependent',
        cites: [
          { title: '28 CCR § 1300.67.13 — Coordination of benefits (DMHC plans)', url: 'https://www.law.cornell.edu/regulations/california/28-CCR-1300.67.13' },
          { title: '10 CCR § 2232.56 — Order of benefit determination (CDI)', url: 'https://www.law.cornell.edu/regulations/california/10-CCR-2232.56' },
          { title: 'Welfare & Institutions Code § 14124.90 — Medi-Cal payer of last resort', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=14124.90' },
          { title: '10 U.S.C. 1079 — TRICARE pays after other coverage except Medicaid', url: 'https://www.law.cornell.edu/uscode/text/10/1079' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'Ask Aetna at benefits verification for the member’s COB order (and whether a self-funded plan uses the birthday rule); Aetna’s COB billing tips document was not re-read this cycle.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Services must be "provided directly or billed by licensed behavior analysts (in states with behavior analyst licensure laws), board-certified behavior analysts, or licensed psychologists" where ABA is in scope, with "supervision and direction of the unlicensed or non-certified providers in line with practice standards." The current guide also sizes supervision: "additional authorization may be provided for QHP protocol modification and direction at 1 to 2 hours per 10 hours of treatment by protocol, as well as authorization for caregiver training." California has no behavior analyst license, so BACB certification is the credential.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Not addressed in CPB 0554, CPB 0648, the ABA guide, the precertification form or the provider manuals.',
        status: 'unverified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
        ],
        verifyVia: 'The participating-provider agreement or a written coding determination from Aetna Behavioral Health.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value: 'No per-day unit cap. Hours are sized by the guide’s severity table — per domain (maladaptive behavior, social communication, self-care): none 0, mild 1–4, moderate 4–7, severe 7–10 hours a week — which "can be used as a guide," plus 1–2 hours of protocol modification per 10; typical intensity is 10–25 hours a week comprehensive, 1–20 focused. Coverage ends on the guide’s improvement thresholds (e.g. "improvement of two or more standard deviations in multiple domains"). On fully insured California plans the statute bars dollar or visit caps.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      noteSignature: {
        value: 'No ABA session-note signature rule. Aetna’s California-only record requirements add "the patient’s preferred language" and, if not English, an "offer of a qualified interpreter and, if interpretation services are declined, the enrollee’s refusal," and for pediatric ASD members "documentation of collaboration, consultation and/or continuity of care."',
        status: 'unverified',
        cites: [
          { title: 'Aetna Provider Manual (6/26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' },
          { title: 'Aetna Provider Manual State Supplement (7/26) — California section', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/ProviderManual-StateSpplmt.pdf' },
        ],
        verifyVia: 'The participating-provider agreement and Aetna’s documentation standards — who must sign ABA session notes and by when.',
        blocker: 'per-case',
      },
      placeOfService: {
        value: 'Setting-agnostic for outpatient ABA, with coordination "with existing providers and/or the school district" and tapering toward supports such as school. CPB 0648: "Many Aetna plans exclude coverage of educational services. For example, speech therapy or ABA services during class would be excluded," and GR-69017-4 asks whether hours are requested during class. On fully insured California plans, H&S § 1374.72(h) bars limiting coverage because services could be covered by "special education or an individualized education program."',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
        ],
      },
      billAsProvider: {
        value: 'Services must be "provided directly or billed by" the appropriately licensed or BACB-certified provider unless a mandate, plan document or contract says otherwise; the precertification form captures the provider group TIN or PIN and network status. The national precertification list also applies to the Sutter Health | Aetna joint-venture plans in California.',
        status: 'verified',
        cites: [
          { title: 'Aetna — Applied behavior analysis medical necessity guide (©2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
          { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification (GR-69017-4, 7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
          { title: 'Aetna — Participating provider behavioral health precertification list (eff. 8/1/2024)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in California?', a: 'Yes — for autism under Aetna’s national policy, with California’s mandate (H&S § 1374.73 / Ins. § 10144.51) on fully insured plans. Self-funded employer plans are exempt from the mandate, so verify funding type first.' },
      { q: 'Does Aetna require prior authorization for ABA in California?', a: 'Nationally yes, but Aetna’s California supplement says outpatient behavioral health on fully insured plans has not required prior authorization since March 1, 2024, without mentioning ABA. Call Aetna precertification (1-888-632-3862) for each member and keep the reference number.' },
      { q: 'Does Aetna have a Medi-Cal plan in California?', a: 'No. Aetna Better Health of California stopped operating on January 1, 2024; Medi-Cal ABA runs through the county Medi-Cal plan.' },
    ],
  },

  'cigna-california': {
    slug: 'cigna-california',
    family: 'cigna',
    cardDesc: 'EN0499 (no CA carve-out) + autism resource guide + the H&S § 1374.73 mandate; no PA on in-network assessment.',
    assessmentPA: {
      value: 'Not required for standard in-network requests — "Prior authorization is no longer required for assessment … 97151, 97152, or 0362T with a diagnosis of autism, as long as the provider is independently licensed or a Board Certified Behavior Analyst® and the patient’s policy covers ABA services"; out-of-network assessment needs a network-exception request',
      status: 'verified',
      cites: [
        { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — "Evernorth® Behavioral Health (Evernorth) requires prior authorization for the applied behavior analysis (ABA) level of care"; authorizations are written monthly on 97155 and interchangeable with 97153–97158/0373T (weekly hours × 4.33)',
      status: 'verified',
      cites: [
        { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
        { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD, F84.0–F84.9 except F84.2 (Rett syndrome), under DSM-5-TR; "provisional" or "rule out" diagnoses do not count',
      status: 'verified',
      cites: [
        { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna in California',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · Cigna · California',
    h1: 'Cigna ABA coverage in California: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in California: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for California families — coverage policy EN0499, no prior auth on in-network assessment, monthly treatment authorizations, the July 2026 form changes, the H&S § 1374.73 / Ins. § 10144.51 mandate (no age or dollar caps, no rediagnosis), and California’s no-licensure QAS framework.',
    intro: [
      'For a California intake team a Cigna card means Evernorth Behavioral Health’s national ABA policy (EN0499), California’s autism mandate, and the plan’s funding type deciding which binds. Cigna publishes no California-specific ABA rules: EN0499 carves out only Virginia fully insured business, and Evernorth’s California-specific nonprofit criteria (LOCUS, CALOCUS-CASII) cover mental health levels of care, not ABA. Cigna runs no Medi-Cal plan.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per EN0499 and the state mandate' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'Submit via', value: 'ABA@Evernorth.com (preferred) or fax 860.687.9230; Autism Care Coordinators 877.279.7603' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in California',
        body: [
          'Evernorth bases ABA decisions "on the Intensive Behavioral Interventions - (EN0499) coverage policy unless contractual requirements or federal or state law requires the use of other specifically identified clinical criteria." EN0499 (effective May 15, 2026) names no California exception. In-network assessments (97151, 97152, 0362T) need no prior authorization; treatment does. The July 2026 ABA form adds: submit to "ABA@Evernorth.com (preferred) or fax it to 860.687.9230"; authorizations are "written on a per month basis with CPT code 97155 and can be interchanged with ongoing treatment codes 97153–97158 and 0373T," with weekly hours multiplied by 4.33; and assessments such as the AFLS, Essential for Living and PEAK "do not, on their own, sufficiently demonstrate medical necessity." Evernorth’s California criteria page lists LOCUS and CALOCUS-CASII for mental health levels of care; ABA is not on it, and Evernorth "complies with state specific laws, as written."',
        ],
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
          { title: 'Evernorth — Medical Necessity Criteria listing (California LOCUS/CALOCUS-CASII)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/medicalNecessityListing.html' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." Cigna publishes no California-specific ABA criteria set; for a fully insured member, ask which criteria the review used. SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." Exempt: self-funded ERISA employer plans (outside state law), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." Cigna does not publish commercial ABA rates; they are negotiated — contact your provider relations representative.',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate applies) vs. self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Diagnosis details', desc: 'Diagnosing clinician’s name, credentials and licensure, and the date the diagnosis was most recently made — no "provisional" or "rule out."' },
      { title: 'Current assessment', desc: 'A standardized instrument within 60 days of the requested start (Vineland-3, not Vineland-II); AFLS/EFL/PEAK alone are not enough.' },
      { title: 'Physician or psychologist prescription', desc: 'The California mandate keys covered BHT to a physician prescription or a psychologist-developed plan.' },
      { title: 'Other coverage', desc: 'Birthday rule between parents; Cigna pays before Medi-Cal, TRICARE and CHAMPVA.' },
    ],
    sources: [
      { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
      { title: 'Evernorth — BH Resource Guide: Prior Authorizations and Billing (03/26)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/authorization-and-billing-resource.pdf' },
      { title: 'Evernorth — Medical Necessity Criteria listing (California LOCUS/CALOCUS-CASII)', url: 'https://static.evernorth.com/assets/evernorth/provider/resourceLibrary/behavioralResources/medicalNecessityListing.html' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'EN0499 sets no age limit — its glossary says focused intervention access "should not be restricted by age, cognitive level, diagnosis, or co-occurring conditions." For fully insured California plans, H&S § 1374.73 / Ins. § 10144.51 contain no age or dollar limit; self-funded plans follow their plan document.',
        status: 'plan-dependent',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'Benefits verification (Procedure Code Benefit Tool on Provider.Evernorth.com) — fully insured vs. self-funded, then the plan’s own terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis, but EN0499 wants the date it was most recently made and runs tight clocks on data: an assessment instrument "completed within 60 days prior to the start" of treatment, baseline and current data within 60 days, a standardized instrument not "more than one year prior" for continued treatment, and a new assessment after "any break in treatment greater than 60 calendar days." On fully insured California plans renewed on or after January 1, 2026, § 1374.73(c) bars requiring a rediagnosis to maintain coverage.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      diagnosingProviders: {
        value: 'A healthcare professional "who is licensed to practice independently and whose licensure board considers diagnostics to be within their scope of practice" (EN0499); the PA form offers medical doctor, licensed psychologist or other.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'No single diagnostic instrument is named; EN0499 requires a reliable, valid, standardized, current-edition instrument covering the DSM-5-TR domains ("must be the Vineland-3 vs. Vineland-II"). The July 2026 form: assessments that do not meet this standard "will no longer be considered sufficient" — the AFLS, Essential for Living and PEAK "do not, on their own, sufficiently demonstrate medical necessity."',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
        ],
      },
      referral: {
        value: 'No referral, order or prescription in EN0499, the autism resource guide or the PA form — the treatment prior authorization is the front door. On fully insured California plans the mandate keys covered BHT to a physician prescription or a psychologist-developed plan, so collect one.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      telehealth: {
        value: 'Broad: "All ABA CPT codes are covered telehealth services" (autism resource guide); EN0499 allows in-person, telehealth or hybrid delivery, and its line-of-sight supervision rule "does not apply to telehealth services."',
        status: 'verified',
        cites: [
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      authTurnaround: {
        value: 'Cigna publishes no decision clock for ABA; it asks for requests "up to 30 days in advance of or two weeks after the start date of service," warning that a late request "may result in a retrospective review and could delay the determination for up to 30 days." The regulator’s clock applies: DMHC plans, H&S § 1367.01(h) — "not to exceed five business days" from receipt of the information reasonably necessary, 72 hours urgent; CDI policies, Ins. § 10123.135(h), the same; self-funded ERISA plans, 29 CFR 2560.503-1 — 15 days pre-service, one 15-day extension, 72 hours urgent.',
        status: 'plan-dependent',
        cites: [
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: 'Insurance Code § 10123.135 — utilization review timelines (CDI)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.135' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification ask whether the plan is DMHC, CDI or self-funded, then confirm the turnaround with the Evernorth Autism Care Coordinator team (877.279.7603).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'No Cigna ABA-specific COB rule was read. The California floor: DMHC plans follow 28 CCR § 1300.67.13 and CDI policies 10 CCR § 2232.56 — the employee’s plan before the dependent’s; for a child of non-separated parents, the plan of the parent whose birthday falls earlier in the calendar year; then court decree, custodial parent, stepparent, non-custodial parent. If the child also has Medi-Cal, this plan pays first (W&I § 14124.90) and may not limit coverage because Medicaid could pay (H&S § 1374.72(h)). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is "the last payer" (38 CFR 17.270(b)). Self-funded plans use their plan document.',
        status: 'plan-dependent',
        cites: [
          { title: '28 CCR § 1300.67.13 — Coordination of benefits (DMHC plans)', url: 'https://www.law.cornell.edu/regulations/california/28-CCR-1300.67.13' },
          { title: '10 CCR § 2232.56 — Order of benefit determination (CDI)', url: 'https://www.law.cornell.edu/regulations/california/10-CCR-2232.56' },
          { title: 'Welfare & Institutions Code § 14124.90 — Medi-Cal payer of last resort', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=14124.90' },
          { title: '10 U.S.C. 1079 — TRICARE pays after other coverage except Medicaid', url: 'https://www.law.cornell.edu/uscode/text/10/1079' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
        verifyVia: 'Cigna Provider Services (800.926.2273) at benefits verification — the member’s COB order and any other coverage on file.',
        blocker: 'per-case',
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Case supervision by a BCBA, LBA or independently licensed mental health professional with ABA training at "one to two hours per ten hours of direct treatment," and a minimum of 1–2 hours a week when direct treatment is 10 hours a week or less; the supervisor’s name and credentials must be documented. The PA form separates "97155 – Direct Supervision of RBT" from "97155 – 1:1 Treatment by BCBA."',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed for direct supervision: "Only one provider can bill for a unit of time, with the exception of CPT codes 97153, 97154, and 97155 (direct supervision when the BCBA/qualified health care provider directs the technician and both are face-to-face with the patient at the same time)." ABA is not reimbursable "at the same time as any other treatment modality (e.g., ABA and speech therapy …)."',
        status: 'verified',
        cites: [
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      dailyLimits: {
        value: 'No per-day cap; ABA is billed in 15-minute units on 97151–97158/0362T/0373T only, and authorizations are monthly (weekly hours × 4.33). On fully insured California plans the statute bars dollar or visit caps.',
        status: 'verified',
        cites: [
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
        ],
      },
      noteSignature: {
        value: 'Each service record must include the "Name, credential (if applicable), and signature of ABA provider who rendered the service," start and end date-time, location, focus, intervention, individuals present and service type (EN0499).',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      placeOfService: {
        value: 'Goals and data are reported per setting (home, clinic, school, community); primarily educational or vocational services are not covered. The PA form requires, "for each individual setting," staff proximity, the intervention, hours in that setting, frequency of learning opportunities, the clinical rationale, goal data and caregiver goals. On fully insured California plans, H&S § 1374.72(h) bars limiting coverage because an IEP or special education could provide the service.',
        status: 'verified',
        cites: [
          { title: 'Evernorth Coverage Policy EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
          { title: 'Evernorth — Applied Behavior Analysis Prior Authorization Form (rev. July 2026)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/applied-behavior-analysis.pdf' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
        ],
      },
      billAsProvider: {
        value: '"Evernorth does not credential nonlicensed/noncertified staff. Services for these staff members must be billed under the supervising provider"; on the CMS-1500, box 31 is the rendering provider and box 33 lists "only a BCBA or other licensed provider" (payer ID 62308). 97152/97153/97154 may be delivered by a BCaBA or technician but are billed by a BCBA-D, BCBA or licensed mental health provider.',
        status: 'verified',
        cites: [
          { title: 'Cigna — Autism resource guide (March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in California?', a: 'Yes — for autism under Evernorth policy EN0499, with California’s mandate on fully insured plans. Self-funded employer plans are exempt from the mandate, so verify funding type first.' },
      { q: 'Does Cigna require prior authorization for the ABA assessment?', a: 'Not for standard in-network requests (97151, 97152, 0362T) when the provider is a BCBA or independently licensed and the plan covers ABA. Treatment requires prior authorization via ABA@Evernorth.com or fax 860.687.9230.' },
      { q: 'Does Cigna have California-specific ABA rules?', a: 'No. EN0499 carves out only Virginia fully insured plans; Evernorth’s California criteria list covers mental health levels of care, not ABA. California’s mandate and SB 855 still apply to fully insured plans.' },
    ],
  },

  'unitedhealthcare-california': {
    slug: 'unitedhealthcare-california',
    family: 'unitedhealthcare',
    cardDesc: 'Optum BH; CASP guidelines posted as CA commercial ABA criteria; State Mandates entry bars IEP/Medicaid offsets.',
    assessmentPA: {
      value: 'Required — "All services require prior approval"; assessments are requested online through Optum’s ABA assessment portal, and Optum’s criteria require PA for ABA "(unless otherwise specified or mandated by contract or law)"',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum — Autism Network Commercial Solo/Agency Provider QRG (BH3865)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaQRG.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — California providers request treatment by phone with the ABA clinical team (1-866-830-0325) or through Provider Express; "most treatment reviews are required every 4-6 months depending on the account/state law," with continued-care calls no more than 30 days before the current approval expires',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum — Autism Network Commercial Solo/Agency Provider QRG (BH3865)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaQRG.pdf' },
        { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 5/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — "A valid diagnosis of ASD (or other applicable diagnosis as required by governing laws)," DSM-5-TR, from a state-licensed clinician with severity confirmed on at least one validated tool; California’s mandate entry covers "pervasive developmental disorder or autism"',
      status: 'verified',
      cites: [
        { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      ],
    },
    payer: 'UnitedHealthcare in California',
    state: 'CA', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · California',
    h1: 'UnitedHealthcare ABA coverage in California: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in California: Optum Prior Auth & Mandate | Carelu',
    metaDescription:
      'How UnitedHealthcare covers ABA for California families through Optum Behavioral Health — the CASP guidelines posted as California commercial ABA criteria, Optum’s California state-mandate entry (no IEP or Medicaid offsets, associate-level QAS professionals), phone-based treatment requests, concurrent 97153/97155 billing, and the H&S § 1374.73 mandate.',
    intro: [
      'UnitedHealthcare commercial behavioral health — ABA included — is managed by Optum, and in California by U.S. Behavioral Health Plan, California, doing business as OptumHealth Behavioral Solutions of California, a DMHC-licensed specialty plan. California is one of the few states where Optum publishes its own ABA criteria: Provider Express lists "California Commercial – Applied Behavior Analysis" as the Council of Autism Service Providers (CASP) ABA Practice Guidelines, and Optum’s ABA State Mandates document carries a California entry that overrides parts of the national criteria. UnitedHealthcare runs no Medi-Cal plan in 2026.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD/PDD, via Optum Behavioral Health' },
      { label: 'State mandate', value: 'Cal. Health & Safety Code § 1374.73 (DMHC plans) / Ins. Code § 10144.51 (CDI policies)' },
      { label: 'Mandate age', value: 'No age limit in the statute' },
      { label: 'Mandate caps', value: 'None — no annual, lifetime, dollar or visit cap; parity with medical benefits (§ 1374.72)' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; Medi-Cal plan contracts; specialized plans without mental health coverage; accident-only, specified-disease, hospital-indemnity and Medicare supplement policies' },
      { label: 'Licensure', value: 'None — no California behavior analyst license; QAS provider/professional/paraprofessional tiers (B&P §§ 4999.200–4999.202)' },
      { label: 'California criteria', value: 'CASP ABA Practice Guidelines (3rd ed.) posted as CA commercial ABA criteria + Optum’s CA State Mandates entry' },
      { label: 'Requests', value: 'Assessment: online portal · Treatment: ABA clinical team 1-866-830-0325 or Provider Express' },
    ],
    sections: [
      {
        h2: 'Optum’s California layer',
        body: [
          'Provider Express’s "State-Specific Clinical Criteria" — criteria "used to make medical necessity determinations … when there are explicit mandates or contractual requirements outside of the Criteria above" — list "California Commercial – Applied Behavior Analysis: The Council of Autism Service Providers (CASP) Applied Behavior Analysis Practice Guidelines for the Treatment of Autism Spectrum Disorder" (3rd ed., 2024). Separately, Optum’s national ABA criteria say California Commercial’s State Mandates entry applies "along with this set of criteria," and "To the extent this criteria conflicts with applicable state-mandated criteria, the state-mandated criteria controls." Optum’s documents do not say outright which set is the working test for a given member — ask at the first review.',
          'The California entry in Optum’s ABA State Mandates document (BH 803ABA STM72026, effective July 2026) says a plan "shall not limit benefits or coverage for medically necessary services on the basis that those services should be or could be covered by a public entitlement program, including, but not limited to, special education or an individualized education program, Medicaid," and that BHT "is administered by a qualified autism service professional to include a psychological associate, an associate marriage and family therapist, an associate clinical social worker, or an associate professional clinical counselor." For California commercial members that overrides the national exclusion of IDEA-covered services — a school IEP alone is not a reason to deny. CASP’s guidelines add that intensity decisions "should not be based on the length of time receiving treatment and/or the age of the individual," and "Evidence of failure at a lower level of service intensity should not be required to access a higher intensity of care."',
        ],
        cites: [
          { title: 'Optum Provider Express — Guidelines/Policies (State-Specific Clinical Criteria)', url: 'https://www.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/guidelines-policies.html' },
          { title: 'CASP ABA Practice Guidelines for the Treatment of ASD, 3rd ed. (posted by Optum as California Commercial ABA criteria)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/CA/ca_hpc_aba_guidelines.pdf' },
          { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'The California mandate: what it guarantees (and doesn’t)',
        body: [
          'California’s mandate is Health & Safety Code § 1374.73 for DMHC-regulated health care service plans (every HMO and many PPO/EPO products) and Insurance Code § 10144.51, its word-for-word twin for CDI-regulated insurance policies. Enacted by SB 946 in 2011 with a sunset, made permanent by AB 796 in 2016 and last amended by SB 402 (effective January 1, 2026), it requires every plan covering hospital, medical or surgical care to cover "behavioral health treatment for pervasive developmental disorder or autism" — defined to include "applied behavior analysis and evidence-based behavior intervention programs" — "in the same manner and … subject to the same requirements" as mental health parity under § 1374.72. The statute has no age limit and no dollar or visit cap. Treatment must be "prescribed by a physician and surgeon" or "developed by a psychologist," follow a treatment plan with measurable goals "reviewed no less than once every six months" by the qualified autism service provider, and may not be used for "respite, daycare, or educational services." Plans may still use "case management, network providers, utilization review techniques, prior authorization, copayments, or other cost sharing."',
          'Three newer layers matter at intake. SB 855 (§§ 1374.72, 1374.721; Ins. §§ 10144.5, 10144.52) requires medical-necessity decisions under "generally accepted standards," using the criteria of "the nonprofit professional association for the relevant clinical specialty," supplied "at no cost" — and bars limiting coverage because services "should be or could be covered by a public entitlement program, including … special education or an individualized education program, Medicaid." SB 402 (carrying AB 951) says a contract issued, amended or renewed on or after January 1, 2026 "shall not require an enrollee previously diagnosed with pervasive developmental disorder or autism to receive a rediagnosis to maintain coverage" and "shall not discontinue or delay existing treatment while waiting for a rediagnosis." And every plan must keep "an adequate network" of qualified autism service providers. Exempt: self-funded ERISA employer plans (outside state law — the California-specific Optum criteria likely do not reach them), Medi-Cal plan contracts, specialized plans that do not deliver mental health services, and — for CDI policies — accident-only, specified-disease, hospital-indemnity and Medicare supplement policies.',
        ],
        cites: [
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
          { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
          { title: 'Health & Safety Code § 1374.72 — mental health parity (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.72' },
          { title: 'Health & Safety Code § 1374.721 — nonprofit-association UM criteria (SB 855)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.721' },
          { title: 'AB 796 (2016) — deletes the mandate sunset', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201520160AB796' },
          { title: 'SB 402 (Stats. 2025, ch. 413) — chaptered text', url: 'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB402' },
        ],
      },
      {
        h2: 'Licensure & rates in California',
        body: [
          'California has no behavior analyst license — it is absent from the BACB’s licensure table, and SB 402’s new Business & Professions Code chapter (§§ 4999.200–4999.202) is definitional only. A qualified autism service (QAS) provider is a BCBA ("certified by a national entity, such as the Behavior Analyst Certification Board") or a listed California licensee; a QAS professional (BCaBA-level behavior service providers under 17 CCR § 54342, or — since SB 805 — associate MFTs, ACSWs, APCCs and psychological associates) works under the provider’s supervision; and a QAS paraprofessional — the technician — is "an unlicensed and uncertified individual" supervised "at a level of clinical supervision that meets professionally recognized standards of practice." Optum still expects 1:1 technicians to hold an RBT, BCAT or ABAT credential (or an approved alternative) and credentials BCBAs with six months’ supervised ABA experience. Optum publishes no commercial ABA fee schedule; request yours from the Provider Service Line (1-877-614-0484).',
        ],
        cites: [
          { title: 'Business & Professions Code § 4999.200 — Qualified autism service provider (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.200' },
          { title: 'Business & Professions Code § 4999.202 — Qualified autism service paraprofessional (SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=4999.202' },
          { title: 'BACB — U.S. Licensure of Behavior Analysts (California absent; checked September 2026)', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — Autism Network Commercial Solo/Agency Provider QRG (BH3865)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaQRG.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured California plan (mandate + Optum’s California criteria) vs. self-funded ERISA (national Optum criteria).' },
      { title: 'Updated DSM-5 diagnosis', desc: 'Optum wants a current DSM-5 ASD diagnosis — an old Asperger’s or PDD-NOS label needs updating — with the diagnosing clinician and date.' },
      { title: 'School and IEP details', desc: 'School type, hours and IEP information are asked on school-based requests; an IEP is not a reason to deny for California commercial members.' },
      { title: 'Physician or psychologist prescription', desc: 'The California mandate keys covered BHT to a physician prescription or a psychologist-developed plan.' },
      { title: 'Other coverage', desc: 'Birthday rule between parents; UHC pays before Medi-Cal, TRICARE and CHAMPVA.' },
    ],
    sources: [
      { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'CASP ABA Practice Guidelines for the Treatment of ASD, 3rd ed. (posted by Optum as California Commercial ABA criteria)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/CA/ca_hpc_aba_guidelines.pdf' },
      { title: 'Optum Provider Express — Guidelines/Policies (State-Specific Clinical Criteria)', url: 'https://www.providerexpress.com/content/ope-provexpr/us/en/clinical-resources/guidelines-policies.html' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 5/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
      { title: 'Optum — Autism Network Commercial Solo/Agency Provider QRG (BH3865)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaQRG.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
      { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
      { title: 'Insurance Code § 10144.51 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10144.51' },
      { title: 'BACB — U.S. Licensure of Behavior Analysts', url: 'https://www.bacb.com/u-s-licensure-of-behavior-analysts/' },
    ],
    intakeGates: {
      ageLimit: {
        value: 'No age criterion in Optum’s national ABA criteria, its California mandate entry or the CASP guidelines (decisions "should not be based on … the age of the individual"). H&S § 1374.73 / Ins. § 10144.51 contain no age or dollar limit for fully insured plans; self-funded plans follow their plan document.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'CASP ABA Practice Guidelines for the Treatment of ASD, 3rd ed. (posted by Optum as California Commercial ABA criteria)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/CA/ca_hpc_aba_guidelines.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
        verifyVia: 'Benefits verification on the member ID — fully insured vs. self-funded, then the plan’s own terms.',
        blocker: 'per-case',
      },
      dxRecency: {
        value: 'No expiry on the diagnosis. Optum: "Updated evaluations may target specific skill deficits and are not required to be comprehensive unless there is a question about an individual’s autism spectrum disorder diagnosis"; the request checklist asks for the diagnosing clinician and date. On fully insured California plans renewed on or after January 1, 2026, § 1374.73(c) bars requiring a rediagnosis to maintain coverage.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 5/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      diagnosingProviders: {
        value: '"A state licensed physician, psychologist, or other state licensed clinician qualified to make such diagnosis according to … DSM-5-TR" (Optum criteria). Psychologist diagnostic testing is billed under Optum’s general behavioral health network, not the autism contract.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      diagnosticTools: {
        value: 'Optum’s three-tier, non-exhaustive list: screening (ABC, CHAT/M-CHAT, CSBS-DP-IT, ASQ, AQ, CAST), second-level (CARS/CARS-2, RITA-T, STAT), formal diagnostic (ADI-R, ADOS/ADOS-2, DISCO), plus baseline and intensity tools (ATEC, VB-MAPP, ABLLS/ABLLS-R, AFLS, PEAK, SSIS, RBS-R, SRS, Vineland, CFQL-2).',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      referral: {
        value: 'No physician referral or order in Optum’s criteria or FAQ; coordination with the diagnosing physician or psychologist is expected. On fully insured California plans the mandate keys covered BHT to a physician prescription or a psychologist-developed plan, so collect one.',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Health & Safety Code § 1374.73 (as amended by SB 402, eff. 1/1/2026)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1374.73' },
        ],
      },
      telehealth: {
        value: 'Supervision and family training by video are payable once the provider is "an approved Optum virtual visits provider who has attested," billed on 97155 or 97156 with POS 02 (POS 10 is listed for telehealth in the member’s home). Optum’s criteria point to CASP’s telehealth parameters — telehealth is "not intended to supplant in-person service" — and the CASP guidelines allow in-person, telehealth or hybrid delivery. Whether technician-delivered 97153 is payable remotely is not stated.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'CASP ABA Practice Guidelines for the Treatment of ASD, 3rd ed. (posted by Optum as California Commercial ABA criteria)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/CA/ca_hpc_aba_guidelines.pdf' },
        ],
        verifyVia: 'Optum ABA clinical team 1-866-830-0325 — whether 97153 by telehealth is approvable and whether POS 10 applies to 97155/97156.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value: 'Optum publishes no ABA decision clock; continued-care requests go in "no more than 30 days prior to the current approvals on file expiring," and reviews run every 4–6 months. The regulator’s clock applies: DMHC plans (including Optum’s California entity), H&S § 1367.01(h) — "not to exceed five business days" from receipt of the information reasonably necessary, 72 hours urgent; CDI policies, Ins. § 10123.135(h), the same; self-funded ERISA plans, 29 CFR 2560.503-1 — 15 days pre-service, one 15-day extension, 72 hours urgent.',
        status: 'plan-dependent',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Health & Safety Code § 1367.01 — utilization review timelines', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=HSC&sectionNum=1367.01' },
          { title: 'Insurance Code § 10123.135 — utilization review timelines (CDI)', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=10123.135' },
          { title: '29 CFR 2560.503-1 — ERISA claims procedure', url: 'https://www.ecfr.gov/current/title-29/section-2560.503-1' },
        ],
        verifyVia: 'At benefits verification ask whether the plan is DMHC, CDI or self-funded, then confirm the turnaround with the Optum ABA clinical team (1-866-830-0325).',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value: 'Optum’s FAQ: if the member has no ABA benefit on one plan, "Call the number on the back of the member’s insurance card to request a denial" for the secondary carrier. Its California mandate entry bars limiting coverage because services "could be covered by a public entitlement program, including … Medicaid" — so UHC pays ahead of Medi-Cal, which is payer of last resort (W&I § 14124.90). Between two parents’ plans, California’s regulators apply the birthday rule (28 CCR § 1300.67.13; 10 CCR § 2232.56). TRICARE pays after this plan (10 U.S.C. 1079(i)(1)); CHAMPVA is "the last payer" (38 CFR 17.270(b)).',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: '28 CCR § 1300.67.13 — Coordination of benefits (DMHC plans)', url: 'https://www.law.cornell.edu/regulations/california/28-CCR-1300.67.13' },
          { title: 'Welfare & Institutions Code § 14124.90 — Medi-Cal payer of last resort', url: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=14124.90' },
          { title: '10 U.S.C. 1079 — TRICARE pays after other coverage except Medicaid', url: 'https://www.law.cornell.edu/uscode/text/10/1079' },
          { title: '38 CFR 17.270 — CHAMPVA is the last payer', url: 'https://www.ecfr.gov/current/title-38/section-17.270' },
        ],
      },
    },
    deliveryRules: {
      supervision: {
        value: 'Optum’s April 2026 criteria: "Consistent with CASP standards of care, direct case supervision is required 1–2 hours for every 10 hours of direct treatment per week"; the FAQ says requests above 2:10 need a clinical rationale. Technicians "should be registered behavior technicians (RBT) or another appropriately certified behavior technician as allowable by state mandate," and BCaBAs may supervise as BCBA extenders. For California, Optum’s mandate entry lets associate-level QAS professionals administer treatment, and CASP says funders "should not restrict case supervision to the established minimum."',
        status: 'verified',
        cites: [
          { title: 'Optum — ABA Supplemental Clinical Criteria (BH803ABASCC, interim review 4/21/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
          { title: 'CASP ABA Practice Guidelines for the Treatment of ASD, 3rd ed. (posted by Optum as California Commercial ABA criteria)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/CA/ca_hpc_aba_guidelines.pdf' },
        ],
      },
      concurrentBilling: {
        value: 'Allowed: "When supervision is provided, you may bill concurrently for both Supervisors and Behavior Technicians, billing with 97153 and 97155" — the same for 97154 with 97155, and 97153 with 97156 are "separate and distinct services" that "may be billed concurrently." Team meetings are billable only as supervision with the member, supervisor and technician present.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        ],
      },
      dailyLimits: {
        value: '"For our commercial ABA program MUE’s apply, per the CMS guidelines … Optum allows 32 units per day of 97151." No weekly hour cap in the criteria — hours are justified by clinical need, and CASP says intensity is "independent of the patient’s schedule of activities outside of treatment." Two technicians on the same day combine onto one 97153 line; one copay per date of service.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'CASP ABA Practice Guidelines for the Treatment of ASD, 3rd ed. (posted by Optum as California Commercial ABA criteria)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/ourNetworkMain/welcomeNtwk/CA/ca_hpc_aba_guidelines.pdf' },
        ],
      },
      noteSignature: {
        value: '"Provider signature is required on progress notes. Parent/guardian signatures are not required." Daily notes carry place of service, start and stop time, who rendered, the service, who attended, interventions and credentials; Optum’s June 2026 documentation protocol adds "The date of signature must reflect the date the note is finalized," with late entries following late-entry rules, and 97155 notes must name the technician and any protocol modification.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
        ],
      },
      placeOfService: {
        value: 'POS 12 home, 11 clinic, 99 community, 03 school, 10/02 telehealth. School-based requests need school type, hours, IEP information and goals. Nationally Optum excludes a 1:1 aide during class and IDEA-covered services, but for California commercial members its State Mandates entry bars limiting coverage because services "could be covered by … special education or an individualized education program," and "the state-mandated criteria controls."',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — ABA Request for Services Checklist QRG (BH00853-25, 5/2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/BH00853-25-QRG_ABAQRG.pdf' },
          { title: 'Optum — ABA State Mandates (BH 803ABA STM72026, eff. July 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      billAsProvider: {
        value: 'CMS-1500 only, EDI payer ID 87726, timely filing within 90 days of the date of service; provider-level modifiers HO (BCBA), HP (BCBA-D), HN (BCaBA) and HM (behavior technician); any credentialed supervisor under the group contract may bill.',
        status: 'verified',
        cites: [
          { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
          { title: 'Optum — Autism Network Commercial Solo/Agency Provider QRG (BH3865)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaQRG.pdf' },
        ],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in California?', a: 'Yes — through Optum Behavioral Health, for autism, with prior authorization on every ABA service. Fully insured California plans also fall under the state mandate and Optum’s California-specific criteria.' },
      { q: 'Can UHC deny ABA because the child has an IEP?', a: 'Not on that basis alone for California commercial members: Optum’s California State Mandates entry and H&S § 1374.72(h) bar limiting coverage because special education, an IEP or Medicaid could provide the service.' },
      { q: 'Does UnitedHealthcare have a Medi-Cal plan in California?', a: 'No — no UnitedHealthcare Medi-Cal plan operates in any county in 2026. Medi-Cal ABA runs through the county Medi-Cal plan.' },
    ],
  },
};

import type { PayerConfig } from './types.js';

export const marylandPayers: Record<string, PayerConfig> = {
  'maryland-medicaid': {
    slug: 'maryland-medicaid',
    cardDesc: 'EPSDT under 21, FFS via Carelon BHASO — the 9 HealthChoice MCOs never touch ABA.',
    assessmentPA: {
      value: 'Required — ALL ABA services need prior authorization from Carelon (BHASO); a Comprehensive Diagnostic Evaluation with confirmed ASD must precede the 97151 assessment',
      status: 'verified',
      cites: [
        { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
        { title: 'MDH Applied Behavior Analysis program page', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/pages/home.aspx' },
      ],
    },
    treatmentPA: {
      value: 'Required — authorizations valid a maximum of 180 days; reassessment + new PA every 180 days on the state Treatment Plan Template, via ProviderConnect',
      status: 'verified',
      cites: [
        { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
        { title: 'MDH Applied Behavior Analysis program page', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/pages/home.aspx' },
      ],
    },
    dxRequired: {
      value: 'Yes — confirmed ASD (F84.0, F84.5, F84.8, F84.9) via a Comprehensive Diagnostic Evaluation by a QHCP',
      status: 'verified',
      cites: [
        { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
      ],
    },
    payer: 'Maryland Medicaid (Medical Assistance)',
    state: 'MD', kind: 'state-medicaid',
    pill: 'Payer Guide · Maryland Medicaid',
    h1: 'Maryland Medicaid ABA coverage: the intake guide.',
    metaTitle: 'Maryland Medicaid ABA Coverage, Rates & Prior Auth Guide | Carelu',
    metaDescription:
      'How Maryland Medicaid covers ABA under EPSDT — the fee-for-service carve-out run by Carelon Behavioral Health (not the HealthChoice MCOs), 180-day authorizations via ProviderConnect, the February 2026 fee schedule, and COMAR requirements.',
    intro: [
      'Maryland Medicaid covers ABA for children under 21 through the EPSDT benefit under COMAR 10.09.28 — and its structure is the simplest in our directory once you see it: there is exactly one pipeline. ABA (like all specialty behavioral health) is carved OUT of the nine HealthChoice MCOs and paid fee-for-service by the state through its Behavioral Health Administrative Services Organization (BHASO), Carelon Behavioral Health of Maryland. Whatever MCO card the family carries — Aetna Better Health, Priority Partners, Kaiser, UnitedHealthcare Community Plan — every authorization and every claim goes to Carelon, never to the plan. One credentialing path, one UM vendor, one statewide fee schedule (refreshed February 1, 2026), zero MCO variation.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — under 21, via EPSDT (benefit since Jan 1, 2017)' },
      { label: 'Administered by', value: 'Carelon Behavioral Health (BHASO) — carved out of ALL nine HealthChoice MCOs' },
      { label: 'Prior auth', value: 'Required on every ABA service; auths valid max 180 days' },
      { label: 'Diagnosis', value: 'Confirmed ASD (F84.0/.5/.8/.9) via Comprehensive Diagnostic Evaluation by a QHCP' },
      { label: 'Diagnosis recency', value: 'An old CDE is accepted, with one exception: diagnosed before age 3 yrs 1 mo AND 2+ years ago → Clinical Confirmation Form + QHCP visit note from the last 6 months' },
      { label: 'ABA referral', value: 'Required from a QHCP, dated within the last 6 months (Carelon Maryland Medicaid ABA Referral Form)' },
      { label: 'Rates (per 15 min, eff. 2/1/2026)', value: '97153: $24.41 BCBA · $20.91 BCaBA · $19.17 RBT/BT; 97151/97155: $38.34' },
      { label: 'Portals', value: 'Carelon ProviderConnect (auths) · Availity Essentials (claims)' },
      { label: 'Telehealth floor (eff. 4/1/2026)', value: '97155, 97156/-U2, 97157: min. 25% in person, up to 75% telehealth (PT 60-26)' },
      { label: 'Staff screening', value: 'CJIS background check for every enrolled individual (via ePREP) + OIG exclusion checks of all staff every 30 days' },
    ],
    sections: [
      {
        h2: 'The carve-out: the family\'s MCO card doesn\'t matter',
        body: [
          'The MDH ABA Provider Manual states it directly: ABA services are covered and reimbursed by the Medical Assistance fee-for-service program through its BHASO, Carelon Behavioral Health. MDH\'s HealthChoice pages say the same thing from the other side — specialty behavioral health is carved out of managed care, and the state pays providers directly. The practical consequences for intake: never route an ABA eligibility or authorization question to an MCO (Aetna Better Health, Priority Partners, MedStar, Wellpoint, or any of the nine); run benefits checks against Medicaid eligibility and Carelon, not the plan on the card; and expect parents to be confused by this — the MCO card is what they hold, but for ABA it\'s irrelevant. Providers enroll with Maryland Medicaid via ePREP and then register with the BHASO — that single path covers the whole state. (Carelon replaced Optum Maryland as the ASO; anything still pointing at Optum Maryland is stale.)',
        ],
        cites: [
          { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
          { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
          { title: 'Carelon Behavioral Health of Maryland — ABA providers', url: 'https://maryland.carelonbh.com/aba-providers/' },
        ],
      },
      {
        h2: 'Maryland\'s ABA rulebook: which documents govern, and Carelon\'s eligibility test',
        body: [
          'Maryland Medicaid ABA is governed by a short stack of documents. The regulations are COMAR 10.09.28 (Applied Behavioral Analysis Services), COMAR 10.09.36 (general provider participation) and COMAR 10.09.49 (telehealth), which the MDH ABA Provider Manual (effective February 1, 2026) names as its legal authority. The manual carries the enrollment, documentation, clinic and school rules and the fee schedule. MDH transmittals change the rules between manual editions: PT 42-26 (combination of services, H2012 retired) and PT 60-26 (the 25% in-person floor for telehealth-eligible codes from April 1, 2026). Carelon, the BHASO, publishes the working documents: the ABA Medically Necessary Criteria, the ABA Authorization Guide, the Authorization Grid, the state Treatment Plan Template with the Telehealth Readiness Checklist, the ABA Referral Form, the Clinical Confirmation Form and the PBHS Provider Manual. Commercial plans in Maryland follow a different rulebook: Insurance § 15-835 and COMAR 31.10.39 (see the Aetna, Cigna, UnitedHealthcare and CareFirst Maryland guides).',
          'Carelon\'s preauthorization criteria require all five of the following: the participant is under 21; has a DSM-5 ASD diagnosis from a QHCP (developmental pediatrician, pediatric neurologist, child psychiatrist, independently licensed clinical psychologist, pediatrician, neuropsychologist or nurse practitioner with ASD training); has "an ABA referral/recommendation no older than 6 months"; has maladaptive behaviors or skill deficits attributable to ASD causing significant impairment in personal care, psychological, vocational, educational or social functioning, or communication; and "can be adequately and safely maintained in their home environment" without needing a more intensive level of care. The manual states the same gate in fewer words: under 21, living in a home/community setting, with confirmed ASD, and referred by a QHCP. Carelon will not authorize vocational or recreational services, respite, custodial care, travel, other educational services, or anything that duplicates a service the child already gets from another program or in school.',
          'An old diagnosis is accepted. The CDE has no expiry date. The one exception is set by the Clinical Confirmation Form (CCF). Carelon\'s criteria and Authorization Guide say: "If the participant was diagnosed before age 3 and 1 month and it has been more than two years since the initial diagnosis," submit a CCF "along with a copy of the QHCP visit notes dated within the last six months from the date the form was completed." The CCF itself states the trigger as "younger than 3 years old at the time of ASD diagnosis AND two years or more have passed." On the CCF, a QHCP re-confirms the DSM-5 criteria after a face-to-face evaluation within the past six months. What does go stale is the referral: it must be no older than 6 months at the initial assessment request, whatever the age of the CDE. One more rule for a family switching agencies: if the child already has an active authorization with another ABA provider, a new initial assessment needs a Continuity of Care Form plus a parent or guardian note naming the change and the last day of services with the current provider.',
        ],
        cites: [
          { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
          { title: 'Carelon Maryland — ABA Medically Necessary Criteria (updated 10/22/25)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Medically-Necessary-Criteria.pdf' },
          { title: 'Carelon Maryland — ABA Authorization Guide: Initial, Concurrent, and Addendum Requirements', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Authorization-Guide-Requirements.pdf' },
          { title: 'Carelon Maryland — ABA Services Clinical Confirmation Form (CCF)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Services-Clinical-Confirmation-Form.pdf' },
          { title: 'Carelon Maryland — Maryland Medicaid ABA Referral Form', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/Maryland-Medicaid-ABA-Referral-Form.pdf' },
          { title: 'PT 42-26 — ABA combination-of-service update + H2012 discontinuation', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT42-26_Updates_to_ABA_Combination_of_Service_Rules__and_Discontinuation_of_H2012.pdf' },
          { title: 'PT 60-26 — ABA Transmittal No. 9: Updates to ABA Telehealth (eff. 4/1/2026)', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT60-26_Updates_to_ABA_Telehealth.pdf' },
        ],
      },
      {
        h2: 'The authorization pipeline: CDE → assessment → 180-day cycles',
        body: [
          'All ABA services require prior authorization from the BHASO — the assessment included. The gate before everything is the Comprehensive Diagnostic Evaluation (CDE): a QHCP (developmental pediatrician, pediatrician, pediatric neurologist, child psychiatrist, clinical psychologist, neuropsychologist, or nurse practitioner) must complete a CDE with direct observation, caregiver interview, and developmental history, confirming the ASD diagnosis and referring for ABA. Only then can a psychologist, BCBA-D, or BCBA complete the 97151 assessment and treatment plan. Treatment authorizations run a maximum of 180 days; every cycle requires a reassessment (capped at 12 units / 3 hours per request unless more is justified) and a new PA on the state\'s Treatment Plan Template — biopsychosocial information, skill-acquisition goals, a behavior intervention plan, parent goals, and generalization, fading, discharge, and crisis plans. Requesting telehealth for 97155, 97156, or 97157 requires the Telehealth Readiness Checklist. Auths submit through Carelon\'s ProviderConnect; claims go through Availity Essentials; the ABA line is (800) 888-1965.',
          'Two documentation rules to design intake around: depending on the child\'s age at diagnosis and how long ago it was made, Carelon may require a Clinical Confirmation Form from a QHCP confirming the child still meets ASD criteria — so capture the diagnosis date, not just the diagnosis. And services must be home/community-based: clinic delivery needs individualized justification under COMAR 10.09.28.05C, participants over 6 are expected to be in school with an IEP, an RBT/BT may not serve as a 1:1 school aide, and school-based ABA is short-term and clinically justified only.',
        ],
        cites: [
          { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
          { title: 'MDH Applied Behavior Analysis program page', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/pages/home.aspx' },
        ],
      },
      {
        h2: 'The February 2026 fee schedule (and what just changed)',
        body: [
          'The manual effective February 1, 2026 carries the current statewide fee schedule, tiered by credential per 15-minute unit: 97151 assessment pays $38.34 (psychologist/BCBA-D/BCBA, daily max 32 units); 97153 direct treatment pays $24.41 at the BCBA tier, $20.91 BCaBA, and $19.17 RBT/BT (daily max 32 units); 97155 protocol modification pays $38.34 (daily max 24 units, GT modifier for remote direction of a technician); and 97156 parent training pays $20.91 without the child present versus $38.34 with the child present, billed 97156-U2 (daily max 16 units). Also on the schedule: 97152 at $19.17, group codes 97154/97158, family-group 97157 at $12.91, and 0362T/0373T at $52.28.',
          'Two structural changes landed with this schedule. H2012 (ABA treatment planning) was discontinued effective February 1, 2026 — treatment planning folds into 97151 and care coordination into 97156, with existing H2012 auths honored through their end dates. And PT 42-26 (ABA Transmittal No. 8) loosened the combination-of-services rules effective January 1, 2026: ABA may now be billed same-date with other behavioral health services except 96156/96158/96159 and ECT, and Carelon is auto-reprocessing previously denied combination claims — if you ate those denials in 2025, watch for the reprocess.',
        ],
        cites: [
          { title: 'MDH ABA Provider Manual — fee schedule pp. 15–16 (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
          { title: 'PT 42-26 — ABA combination-of-service update + H2012 discontinuation', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT42-26_Updates_to_ABA_Combination_of_Service_Rules__and_Discontinuation_of_H2012.pdf' },
        ],
      },
      {
        h2: 'Workforce & billing rules worth knowing',
        body: [
          'Only ABA groups, psychologists, BCBA-Ds, and BCBAs can bill directly — BCaBAs, RBTs, and BTs render under them. Maryland has an unusual workforce on-ramp: Behavior Technicians can enroll in Medicaid before earning RBT certification (specialty code 325), with a 90-day grace period to submit RBT proof. Licensed psychologists may render and bill ABA with an attestation (40 coursework hours in behavior analysis plus 1,500 supervised hours including ASD experience). Supervision has a hard floor — direction of BCaBA/RBT/BT staff must equal at least 10% of technician direct-service hours, and remote direction requires MDH/BHASO approval. Telehealth (GT modifier) is allowed only for direct supervision (97155), parent training (97156/97156-U2), and group parent training (97157) — direct 97153 treatment is not on the telehealth list at all. And as of April 1, 2026, those three telehealth-eligible codes carry a new in-person floor: PT 60-26 ("ABA Transmittal No. 9," issued February 27, 2026) ends 100%-telehealth delivery for 97155, 97156/97156-U2, and 97157 — at least 25% of the service must now be rendered in person, with up to 75% allowed via telehealth, superseding the older PT 11-22 telehealth-continuation guidance. And Maryland is a payment-in-full program: providers may not balance-bill participants for covered or denied services.',
        ],
        cites: [
          { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
          { title: 'PT 60-26 — ABA Transmittal No. 9: Updates to ABA Telehealth (eff. 4/1/2026)', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT60-26_Updates_to_ABA_Telehealth.pdf' },
        ],
      },
      {
        h2: 'Staffing & credentialing: who you can hire, and what they must clear',
        body: [
          'Maryland\'s defining staffing rule: every individual who renders ABA — psychologist, BCBA-D, BCBA, BCaBA, RBT, and even not-yet-certified BTs — enrolls with Maryland Medicaid individually through ePREP, on top of the group\'s own enrollment. The technician floor is codified in state regulation, not just BACB policy: under COMAR 10.09.28.02, an RBT must be 18 or older, hold current BACB registration, hold a high school diploma or national equivalent (a copy attaches to the ePREP application), and work under a documented supervisory relationship with a licensed psychologist, licensed BCBA-D, or licensed BCBA. There is no separate Maryland RBT license or state technician registry — the binding credential is BACB certification plus individual Medicaid enrollment. The pre-certification BT on-ramp (specialty code 325, license number \'BT\', 90-day expiration) covered above has one hiring trap: the 90-day grace period attaches to the person, not your company — a BT who used part of it at a prior employer doesn\'t restart the clock with you. Underneath all of this sits the BACB\'s own floor: RBT applicants must pass a criminal background check and abuse-registry check within 180 days of paying for the certification application, confirmed by the RBT Supervisor or Requirements Coordinator, and effective January 1, 2026 the 40-hour training must follow the updated 2026 curriculum, delivered by active BCBAs/BCaBAs who\'ve completed the BACB\'s 8-hour supervision training.',
          'State screening runs through two instruments, and both are yours to manage. First, the CJIS criminal background check: COMAR 10.09.28.02 makes a completed Criminal Justice Information System background check a condition of participation for the group and each enrolled individual — it\'s completed as part of ePREP enrollment, using the CJIS Private Party Petition form from the Department of Public Safety and Correctional Services (DPSCS). There\'s no separate fingerprint clearance card system for ABA staff; fingerprint-based CHRC obligations attach to licensure applicants (behavior analysts), while unlicensed staff clear through Medicaid enrollment. Second, ongoing exclusion screening: the provider manual makes agencies responsible for OIG exclusion checks of ALL staff who touch the Medicaid program — direct service or administrative support — every 30 days, with documentation maintained; failure to screen is subject to disciplinary action. Enrolled providers must also be sanction-free — no current sanctions or disciplinary actions from licensing authorities, Medicare, Maryland Medical Assistance, or other federally funded programs.',
          'At the supervisor tier, Maryland has required licensure since January 2015: anyone practicing behavior analysis needs a Licensed Behavior Analyst (LBA) license from the Board of Professional Counselors and Therapists — current BCBA/BCBA-D certification, a master\'s or higher from a BACB-accredited/approved program, and a criminal history records check obtained before applying; the license renews every 2 years with a fresh CHRC at each renewal (and the board moves to online-only applications June 20, 2026). For Medicaid, supervisors need both the LBA license and current BACB certification (a licensed psychologist with the ABA attestation is the alternative). The supervision floors that bind your staffing model: direction of a technician (BCaBA/RBT/BT) must equal at least 10% of the technician\'s direct-service hours AND be performed in person at least 25% of the time (COMAR 10.09.28.04) — with remote direction requiring MDH or BHASO approval, and 0362T requiring the supervisor onsite. The BACB\'s 5%-monthly RBT supervision minimum (two face-to-face contacts, one individual) layers underneath. One structural mercy: because ABA runs through a single BHASO, there is no plan-by-plan credentialing — enroll each person via ePREP (applications reviewed by MDH, not the ASO), then register once with Carelon for ProviderConnect/Availity access; Carelon publishes no separate staff-credentialing standard beyond the state\'s, though it does require sentinel-event reporting (including any sexual activity between a staff member and a participant) within 24 hours.',
        ],
        cites: [
          { title: 'COMAR 10.09.28.02 — Provider Qualifications and Conditions for Participation', url: 'https://www.law.cornell.edu/regulations/maryland/COMAR-10-09-28-02' },
          { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
          { title: 'COMAR 10.09.28.04 — Covered Services (direction of a technician)', url: 'http://mdrules.elaws.us/comar/10.09.28.04' },
          { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
          { title: 'COMAR 10.58.16.06 — Renewal (behavior analysts)', url: 'https://regs.maryland.gov/us/md/exec/comar/10.58.16.06' },
          { title: 'BACB RBT Handbook', url: 'https://assets.bacb.com/wp-content/uploads/2022/01/RBTHandbook_230622-a.pdf' },
          { title: 'BACB — RBT Requirements During the 2026 Transition (upd. 08/2025)', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
        ],
      },
    ],
    collect: [
      { title: 'Medicaid eligibility — not the MCO', desc: 'Verify Medical Assistance eligibility and route everything to Carelon; the HealthChoice MCO on the card is irrelevant for ABA.' },
      { title: 'CDE report + referral', desc: 'The Comprehensive Diagnostic Evaluation by a QHCP, with the confirmed ASD code (F84.0/.5/.8/.9) and the referral for ABA.' },
      { title: 'Diagnosis date + child\'s age at diagnosis', desc: 'Diagnosed before age 3 yrs 1 mo and 2+ years ago means Carelon needs a Clinical Confirmation Form plus a QHCP visit note from the last 6 months.' },
      { title: 'Referral date', desc: 'The QHCP\'s ABA referral or recommendation must be no older than 6 months when the assessment is requested (Carelon ABA Referral Form).' },
      { title: 'Current ABA provider, if any', desc: 'If another agency holds an active authorization, a new assessment needs a Continuity of Care Form plus a parent note naming the switch and the last day with the current provider.' },
      { title: 'Home/community setting picture', desc: 'Services must be home/community-based — clinic delivery needs individualized COMAR justification; capture where care will actually happen.' },
      { title: 'School status (age 6+)', desc: 'Participants over 6 should be in school with an IEP; school-based ABA is short-term only and an RBT can\'t be a 1:1 aide.' },
    ],
    sources: [
      { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026) — incl. fee schedule', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
      { title: 'MDH Applied Behavior Analysis program page', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/pages/home.aspx' },
      { title: 'PT 42-26 — ABA combination-of-service update + H2012 discontinuation', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT42-26_Updates_to_ABA_Combination_of_Service_Rules__and_Discontinuation_of_H2012.pdf' },
      { title: 'PT 60-26 — ABA Transmittal No. 9: Updates to ABA Telehealth (eff. 4/1/2026)', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT60-26_Updates_to_ABA_Telehealth.pdf' },
      { title: 'Carelon Maryland — ABA Medically Necessary Criteria (updated 10/22/25)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Medically-Necessary-Criteria.pdf' },
      { title: 'Carelon Maryland — ABA Authorization Guide: Initial, Concurrent, and Addendum Requirements', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Authorization-Guide-Requirements.pdf' },
      { title: 'Carelon Maryland — ABA Services Clinical Confirmation Form (CCF)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Services-Clinical-Confirmation-Form.pdf' },
      { title: 'Carelon Maryland — Maryland Medicaid ABA Referral Form', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/Maryland-Medicaid-ABA-Referral-Form.pdf' },
      { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
      { title: 'MDH HealthChoice home page', url: 'https://health.maryland.gov/mmcp/healthchoice/pages/home.aspx' },
      { title: 'Carelon Behavioral Health of Maryland — ABA providers', url: 'https://maryland.carelonbh.com/aba-providers/' },
      { title: 'COMAR 10.09.28.02 — Provider Qualifications and Conditions for Participation', url: 'https://www.law.cornell.edu/regulations/maryland/COMAR-10-09-28-02' },
      { title: 'COMAR 10.09.28.04 — Covered Services (direction of a technician)', url: 'http://mdrules.elaws.us/comar/10.09.28.04' },
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
      { title: 'COMAR 10.58.16.06 — Renewal (behavior analysts)', url: 'https://regs.maryland.gov/us/md/exec/comar/10.58.16.06' },
      { title: 'BACB RBT Handbook', url: 'https://assets.bacb.com/wp-content/uploads/2022/01/RBTHandbook_230622-a.pdf' },
      { title: 'BACB — RBT Requirements During the 2026 Transition (upd. 08/2025)', url: 'https://www.bacb.com/wp-content/uploads/2025/07/RBT-2026-Requirements_250723-a.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Direction of a BCaBA, RBT or BT with protocol modification is performed by a psychologist, BCBA-D or BCBA and \u201cmust be performed on an ongoing basis, equal to at least 10 percent of the amount of hours that the BCaBA, RBT, or BT is providing direct ABA services to the participant, or group of participants.\u201d COMAR 10.09.28.04 adds that at least 25 percent of that direction be performed in person, and remote direction requires approval from MDH or the BHASO. For 0362T and 0373T the psychologist/BCBA-D/BCBA must be onsite \u2014 defined on the fee schedule as \u201cimmediately available and interruptible to provide assistance and direction.\u201d Every rendering individual, technicians included, must also be enrolled with Maryland Medicaid through ePREP.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'COMAR 10.09.28.04 \u2014 Covered Services (direction of a technician)', url: 'http://mdrules.elaws.us/comar/10.09.28.04' }],
      },
      concurrentBilling: {
        value:
          'Not resolved for ABA-to-ABA pairs. The ABA Provider Manual sets a 10 percent direction floor and requires that direction be delivered while the technician is treating, but neither it nor COMAR 10.09.28.04 states in terms that 97155 and 97153 may be billed for the same clock time. What Maryland did publish is the other kind of concurrency: PT 42-26 loosened the combination-of-services rules effective January 1, 2026 so that ABA may be billed on the same date as other behavioral health services except 96156, 96158, 96159 and ECT, with Carelon auto-reprocessing previously denied combination claims. The manual separately bars \u201cservices that duplicate a service that a participant is receiving under another medical care program.\u201d',
        status: 'unverified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'PT 42-26 \u2014 ABA combination-of-service update + H2012 discontinuation', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT42-26_Updates_to_ABA_Combination_of_Service_Rules__and_Discontinuation_of_H2012.pdf' }],
        verifyVia: 'Carelon Behavioral Health of Maryland, ABA line (800) 888-1965 (Option 1 then Option 4) \u2014 ask whether 97155 pays alongside 97153 for the same clock time, and whether the answer changed with PT 42-26.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Maryland publishes an explicit per-day unit ceiling on every ABA code, in the fee schedule at the back of the provider manual (15-minute units): 97151, 97152, 0362T and 97153 at 32 units per day; 97155 and 0373T at 24; 97154 and 97156/97156-U2 at 16; 97157 and 97158 at 10. Group codes carry their own size limits \u2014 97154 and 97158 are limited to 2\u20138 ABA participants, 97157 to 2\u20138 families. The reassessment is separately capped: a maximum of 12 units (three hours) authorized per treatment request, with more available if the standard 12 are used before the end of the authorization for clinical need.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
      },
      noteSignature: {
        value:
          'The manual lists what each service note must contain and closes it with the signature rule: \u201ca legible signature, along with the printed or typed name of the individual providing care, with the appropriate title.\u201d The rest of the required record is consent to treatment from the participant or parent/guardian; the location, date, start time and end time of the service; a brief description of the service with reference to the treatment plan; a description of the participant\'s behaviors or symptoms in measurable terms; and a description of the parent or caregiver\'s participation including their name, relationship, date and time \u2014 or documented consent to be absent. No co-signature requirement and no signing deadline are stated, and services \u201crendered but not documented in accordance with COMAR 10.09.28.04\u201d may not be billed.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'COMAR 10.09.28.04 \u2014 Covered Services (direction of a technician)', url: 'http://mdrules.elaws.us/comar/10.09.28.04' }],
      },
      placeOfService: {
        value:
          'Home and community first. Under COMAR 10.09.28.05C \u201cABA services shall be delivered in a home or community setting, including a clinic, when medically necessary,\u201d and a clinic-based request must carry an individualized rationale, a plan for transitioning care into the home/community, the objectives targeted in each setting, a description of caregiver involvement, and the anticipated schedule of hours across settings. School is narrower still: it \u201cis not the standard model of the Maryland Medicaid ABA benefit,\u201d is short-term and must be clinically justified, an RBT/BT \u201cmay not serve as a 1:1 educational aide,\u201d and the plan needs an observation narrative, a fading plan, evidence of no duplication and a copy of the IEP. After age 6 participants should be in school with an IEP. Not payable anywhere: services in a 24-hour, 365-day residential program funded with federal, State or local government funds; vocationally- or recreationally-based services; respite; and travel to and from the site of service.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
      },
      billAsProvider: {
        value:
          'The Program reimburses only an ABA group or an individual ABA provider \u2014 psychologist, BCBA-D or BCBA. \u201cBCaBAs, RBTs and BTs rendering ABA services cannot bill directly to the Maryland Medical Assistance Program and receive reimbursement,\u201d so technician-delivered 97153 goes out under the enrolled group or supervising analyst. Claims bill on the CMS-1500 or the 837P and go to the BHASO, not to the participant\'s HealthChoice MCO. Every rendering individual still enrolls with Maryland Medicaid separately through ePREP, including not-yet-certified BTs on specialty code 325.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'COMAR 10.09.28.02 \u2014 Provider Qualifications and Conditions for Participation', url: 'https://www.law.cornell.edu/regulations/maryland/COMAR-10-09-28-02' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Under 21. The manual states that since January 1, 2017 MDH covers medically necessary ABA \u201cfor Medicaid enrolled participants under the age of 21,\u201d and that \u201cABA services are only available under the Early Periodic Screening, Diagnosis, and Treatment (EPSDT) program,\u201d which itself runs to under 21. There is no lower age bound and no hour, dollar or lifetime cap on the benefit. One age-linked expectation rather than a limit: after 6 years old, participants should be in school with an IEP.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
      },
      dxRecency: {
        value:
          'No fixed expiry on the Comprehensive Diagnostic Evaluation, so an old CDE is accepted, with one defined exception. The manual defines the Clinical Confirmation Form (CCF) as \u201ca form to be completed by a QHCP to confirm a participant continues to meet the criteria for Autism Spectrum Disorder.\u201d Carelon\'s ABA Medically Necessary Criteria and Authorization Guide set the trigger: \u201cIf the participant was diagnosed before age 3 and 1 month and it has been more than two years since the initial diagnosis,\u201d a CCF is required \u201calong with a copy of the QHCP visit notes dated within the last six months.\u201d The CCF form states it as younger than 3 at diagnosis AND two years or more since. It is needed at the initial assessment request and at initial and concurrent treatment requests. Separately, the ABA referral or recommendation must be no older than 6 months. Capture the diagnosis date, the child\'s age at diagnosis and the referral date at intake.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'Carelon Maryland — ABA Medically Necessary Criteria (updated 10/22/25)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Medically-Necessary-Criteria.pdf' }, { title: 'Carelon Maryland — ABA Authorization Guide: Initial, Concurrent, and Addendum Requirements', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Authorization-Guide-Requirements.pdf' }, { title: 'Carelon Maryland — ABA Services Clinical Confirmation Form (CCF)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Services-Clinical-Confirmation-Form.pdf' }],
      },
      diagnosingProviders: {
        value:
          'A closed list of seven. The ASD diagnosis must be made by a qualified health care professional (QHCP) \u201cwith training and experience to diagnose ASD\u201d: a developmental pediatrician, a pediatrician, a pediatric neurologist, a child psychiatrist, a clinical psychologist, a neuropsychologist, or a nurse practitioner. The ABA assessment that follows is a separate role and a separate credential \u2014 only a licensed psychologist, BCBA-D or BCBA may complete it and write the treatment plan.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
      },
      diagnosticTools: {
        value:
          'Maryland names no specific instrument. The manual requires the QHCP to diagnose \u201cthrough the use of a comprehensive diagnostic evaluation (CDE) and with the help of validated instruments\u201d without listing which, and then specifies the CDE by its components instead: a direct observation of the participant outlining behaviors consistent with DSM-5 criteria; interviews with the parent or caregiver; documentation of developmental history, psychosocial history and current functioning across major domains of development; and a statement identifying the presenting diagnosis (F84.0, F84.5, F84.8 or F84.9). Build intake around those four components rather than around a named tool.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
      },
      referral: {
        value:
          'Required, and it is part of the CDE rather than a separate note. The QHCP\'s comprehensive diagnostic evaluation must result \u201cin a referral for ABA therapy services,\u201d and the BHASO \u201cwill only authorize ABA services if a QHCP completes a CDE and prescribes medically necessary ABA services.\u201d Access to the benefit additionally requires that the participant be under 21, reside in a home/community setting and carry a confirmed ASD diagnosis. Carelon adds a freshness rule: the preauthorization criteria require \u201can ABA referral/recommendation no older than 6 months,\u201d and the Authorization Guide asks for a \u201cRecommendation, referral, or prescription (RX) for ABA\u201d dated 6 months or less with the initial assessment request. Carelon\'s Maryland Medicaid ABA Referral Form must be completed by one of the seven QHCP types and records the referring provider\'s NPI. Every ABA service is prior-authorized by Carelon \u2014 assessment included \u2014 and authorizations run a maximum of 180 days.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'Carelon Maryland — ABA Medically Necessary Criteria (updated 10/22/25)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Medically-Necessary-Criteria.pdf' }, { title: 'Carelon Maryland — ABA Authorization Guide: Initial, Concurrent, and Addendum Requirements', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/ABA-Authorization-Guide-Requirements.pdf' }, { title: 'Carelon Maryland — Maryland Medicaid ABA Referral Form', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/Maryland-Medicaid-ABA-Referral-Form.pdf' }],
      },
      telehealth: {
        value:
          'A short list, and no longer a full-time option. Only three services may be rendered by two-way audio-visual telehealth: direct supervision of a BCaBA/RBT/BT (97155), parent training (97156 and 97156-U2) and group parent training (97157). Direct 97153 treatment is not on the telehealth list at all, and \u201cservices rendered by mail or telephone\u201d are expressly non-billable, so audio-only is out. Bill with the GT modifier and Place of Service 11, and attach the Telehealth Readiness Checklist to the treatment plan \u2014 a required element for any 97155, 97156 or 97157 telehealth request since October 16, 2023. Effective April 1, 2026, PT 60-26 ends 100 percent telehealth delivery for those three codes: at least 25 percent must be rendered in person, with up to 75 percent by telehealth. Telehealth that does not meet COMAR 10.09.49 may not be billed.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'PT 60-26 \u2014 ABA Transmittal No. 9: Updates to ABA Telehealth (eff. 4/1/2026)', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT60-26_Updates_to_ABA_Telehealth.pdf' }],
      },
      authTurnaround: {
        value:
          'Carelon, the state’s BHASO, decides every ABA request on its published clock: “Prospective - Non-Urgent … Within 7 calendar days” and “Prospective - Urgent … Within 72 hours (3 days),” while a non-urgent concurrent (continuing-care) request “reverts to prospective.” The operational rule is the submission lead time: Carelon’s Authorization Grid asks for ABA initial and concurrent requests “30 CD in advance,” with backdating tolerated only as an exception, up to 20 calendar days. Authorizations run a maximum of 180 days, and a reassessment plus a new PA is required before each one ends — so put the reauth packet on the calendar a month ahead of expiry. One discrepancy to know about: the grid (turnaround section last revised 8/14/25) still lists ABA turnaround as “14 CD”; the PBHS manual’s 7-calendar-day rule is newer (Chapter 5 revised August 2026) and matches the federal standard for state Medicaid agencies since January 1, 2026 (42 CFR 440.230(e)).',
        status: 'verified',
        cites: [{ title: 'Carelon Maryland PBHS Provider Manual (version 5, August 2026), §5 Authorizations', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/carelon-maryland-pbhs-provider-manual.pdf' }, { title: 'Carelon Maryland — Authorization Grid & Submission Guidelines (revised 6/22/26)', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/Authorization-Parameters.pdf' }, { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'eCFR — 42 CFR 440.230(e), prior authorization timeframes for state Medicaid agencies', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-440/subpart-B/section-440.230' }],
      },
      coordinationOfBenefits: {
        value:
          '“Medicaid is always the payer of last resort.” Verify other coverage in EVS at intake. When commercial insurance is primary: “Submit the claim to the commercial carrier first and within the commercial carrier’s timely filing requirements,” then submit to Carelon “within 12 months of the first date of service or 120 days of the commercial carrier’s EOB, whichever is later,” with the primary payment or EOB attached — claims without it deny (“Primary insurance information or EOB required”). Maryland’s big simplifier: “Preauthorization is not required when Carelon is paying as secondary.” Carelon pays the difference between the commercial payment and the Medicaid allowed amount, and the family may not be billed for the gap between charges and what the two payers paid.',
        status: 'verified',
        cites: [{ title: 'Carelon Maryland PBHS Provider Manual (version 5, August 2026), §16.07 Coordination of Benefits', url: 'https://s18637.pcdn.co/wp-content/uploads/sites/75/carelon-maryland-pbhs-provider-manual.pdf' }],
      },
    },
    faq: [
      { q: 'Does Maryland Medicaid cover ABA therapy?', a: 'Yes — for children under 21 with a confirmed ASD diagnosis, under the EPSDT benefit (COMAR 10.09.28). Every ABA service requires prior authorization from Carelon Behavioral Health, the state\'s BHASO, with authorizations running up to 180 days.' },
      { q: 'Which Maryland Medicaid MCO should we contact for ABA?', a: 'None of them. ABA is carved out of all nine HealthChoice MCOs and paid fee-for-service through Carelon. Authorizations go through ProviderConnect, claims through Availity — the MCO on the family\'s card never touches ABA.' },
      { q: 'What does Maryland Medicaid pay for ABA?', a: 'Per the fee schedule effective February 1, 2026: 97153 direct treatment pays $24.41/15-min unit at the BCBA tier, $20.91 BCaBA, $19.17 RBT/BT; 97151 assessment and 97155 pay $38.34; 97156 parent training pays $20.91 without the child present or $38.34 with (billed 97156-U2).' },
      { q: 'Is an autism diagnosis required for Maryland Medicaid ABA?', a: 'Yes — a confirmed ASD diagnosis (F84.0, F84.5, F84.8, or F84.9) made through a Comprehensive Diagnostic Evaluation by a qualified health care provider, plus a referral. Depending on the child\'s age at diagnosis and time elapsed, a Clinical Confirmation Form may also be required.' },
      { q: 'What Maryland guidelines govern Medicaid ABA?', a: 'COMAR 10.09.28 (ABA services), 10.09.36 (provider participation) and 10.09.49 (telehealth); the MDH ABA Provider Manual (eff. Feb 1, 2026) with its fee schedule; MDH transmittals PT 42-26 and PT 60-26; and Carelon\'s ABA Medically Necessary Criteria, Authorization Guide, Treatment Plan Template, Referral Form and Clinical Confirmation Form. Commercial plans follow Insurance § 15-835 and COMAR 31.10.39 instead.' },
      { q: 'Who is eligible for ABA through Carelon (Maryland Medicaid)?', a: 'A Medicaid participant under 21, with a DSM-5 ASD diagnosis from a QHCP, an ABA referral no older than 6 months, maladaptive behaviors or skill deficits from ASD that significantly impair functioning, and who can be safely maintained at home without a more intensive level of care. Services must be home/community-based (clinic needs justification).' },
      { q: 'Is a referral required for Maryland Medicaid ABA?', a: 'Yes. The CDE must result in a referral for ABA from a QHCP, and Carelon requires the referral or recommendation to be no older than 6 months when the initial assessment is requested. Carelon publishes a Maryland Medicaid ABA Referral Form for it.' },
      { q: 'Does Carelon accept an old CDE (diagnostic evaluation)?', a: 'Yes. The CDE does not expire. The exception: if the child was diagnosed before age 3 years 1 month and more than two years have passed, Carelon requires a Clinical Confirmation Form from a QHCP plus visit notes from the last six months. The referral, unlike the CDE, must be 6 months old or less.' },
      { q: 'Can a new agency assess a child who already has ABA with another Maryland Medicaid provider?', a: 'Yes, when clinically appropriate. Carelon\'s Authorization Guide asks for a Continuity of Care Form plus a parent or guardian note outlining the change of ABA providers and the last day of services with the current provider, sent to MDH.ABACareCoordinatorsFAX@carelon.com or by phone at 1-800-888-1965.' },
      { q: 'Can Maryland Medicaid ABA be delivered 100% by telehealth?', a: 'Not for 97155 (RBT/BCaBA/BT supervision), 97156/97156-U2 (parent training), or 97157 (group parent training) — effective April 1, 2026, PT 60-26 ("ABA Transmittal No. 9") requires at least 25% of those three services to be rendered in person, with up to 75% allowed via telehealth. Direct 97153 treatment was never on the telehealth list at all.' },
    ],
  },

  'carefirst-maryland': {
    slug: 'carefirst-maryland',
    family: 'bcbs',
    cardDesc: 'Maryland\'s dominant Blue plan: Medical Policy 3.01.015 + Operating Procedure 8.01.011A, ABA preauthorized, RBTs billed under the supervising licensed BCBA.',
    assessmentPA: {
      value: 'Not stated separately for the assessment. CareFirst\'s policies say "Adaptive Behavioral Treatment (ABT) must be preauthorized" and "Applied behavioral analysis (ABA) services and habilitative diagnoses must be preauthorized," but neither separates the 97151 assessment from treatment. Check 97151 in the Prior Authorization Look-up (PAL) tool before scheduling.',
      status: 'unverified',
      cites: [
        { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
        { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
      ],
      verifyVia: 'CareFirst Provider Portal → Prior Auth/Notifications → Prior Authorization Look-up (PAL) tool, entering 97151 for the member, or 1-866-773-2884 (1-866-PRE-AUTH).',
      blocker: 'document',
    },
    treatmentPA: {
      value: 'Required. Medical Policy 3.01.015: "Adaptive Behavioral Treatment (ABT) must be preauthorized." Operating Procedure 8.01.011A: "Prior authorization is required for Applied Behavioral Analysis (ABA) and habilitative services for Maryland members." Submit through the CareFirst Provider Portal (Prior Auth/Notifications) or call 1-866-773-2884. Habilitative Services (8.01.011A) is on CareFirst\'s published PPO pre-service review list.',
      status: 'verified',
      cites: [
        { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
        { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
        { title: 'CareFirst — Pre-Cert/Pre-Auth (In-Network)', url: 'https://provider.carefirst.com/providers/medical/in-network-precertification-preauthorization.page' },
      ],
    },
    dxRequired: {
      value: 'Yes. ABT, including ABA, is medically necessary only when the "Individual has confirmed diagnosis of autism spectrum disorder (ASD) from a qualified healthcare provider," and ABT "is considered not medically necessary for all other non-autism spectrum disorder (non-ASD) indications."',
      status: 'verified',
      cites: [
        { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
      ],
    },
    payer: 'CareFirst BlueCross BlueShield (Maryland)',
    state: 'MD', kind: 'commercial',
    pill: 'Payer Guide · CareFirst BCBS · Maryland',
    h1: 'CareFirst BlueCross BlueShield ABA coverage in Maryland: the intake guide.',
    metaTitle: 'CareFirst BCBS ABA Coverage in Maryland: Prior Auth, RBT & Mandate Guide | Carelu',
    metaDescription:
      'How CareFirst BlueCross BlueShield covers ABA in Maryland: Medical Policy 3.01.015, the habilitative-services operating procedure 8.01.011A, prior authorization, how RBT and BCaBA services are billed under the supervising licensed BCBA, the Maryland mandate\'s 25/10-hour floors, and what intake should verify.',
    intro: [
      'CareFirst BlueCross BlueShield is the Blue plan for Maryland, Washington, D.C. and Northern Virginia, and the commercial card a Maryland ABA agency sees most. Two CareFirst documents govern ABA: Medical Policy 3.01.015 (Autism Spectrum Disorder), which sets the medical-necessity criteria and says ABA must be preauthorized, and Medical Policy Operating Procedure 8.01.011A (Habilitative Services, MD and DC Mandates), which carries Maryland\'s hour floors. A third, Payment Policy PP CO 020.01, answers the question agencies ask most: CareFirst does not contract with RBTs directly, but pays for their services when a licensed BCBA supervises and bills. As with every Maryland commercial plan, the funding type decides whether the state mandate applies at all.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per CareFirst Medical Policy 3.01.015 (Adaptive Behavioral Treatment, incl. ABA)' },
      { label: 'State mandate', value: 'Md. Ins. § 15-835 + COMAR 31.10.39.03 (habilitative services)' },
      { label: 'Mandate age', value: 'Through at least the month the enrollee turns 19; hour floors span 18 months–18 years' },
      { label: 'Mandate floors', value: 'No denial solely on hours up to 25 hrs/wk (18 mo–5 yrs) or 10 hrs/wk (6–18); no dollar cap' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; early-intervention/school-delivered services' },
      { label: 'Licensure', value: 'MD Licensed Behavior Analyst (Board of Professional Counselors & Therapists)' },
      { label: 'Prior auth', value: 'Required for ABA (3.01.015, 8.01.011A); PAL tool or 1-866-PRE-AUTH' },
      { label: 'RBTs / BCaBAs', value: 'Not contracted directly; services paid when supervised by a licensed BCBA and billed under that BCBA\'s name and provider number (PP CO 020.01)' },
      { label: 'BCBA rate basis', value: '75% of CareFirst\'s base physician fee schedule (PP CO 020.01); actual amounts are in your contract' },
    ],
    sections: [
      {
        h2: 'The medical policy: 3.01.015 and what it requires',
        body: [
          'Medical Policy 3.01.015 (last reviewed 12/01/2025, effective 3/1/2026) covers "Adaptive Behavioral Treatment (ABT), including Applied Behavioral Analysis (ABA) and Developmental Relationship Based Intervention (DRBI)," as medically necessary when all four criteria are met: a confirmed ASD diagnosis from a qualified healthcare provider; treatment "provided by an appropriately trained, certified or licensed health care professional" using a systematic approach based on ABA and/or DRBI principles; treatment that targets the core deficits of ASD as set out in the DSM-5; and services rendered appropriately in type, frequency, extent, site and duration and "expected to result in meaningful and measurable improvements." ABT is not medically necessary for any non-ASD indication. The services needed to make the ASD diagnosis are themselves medically necessary.',
          'The policy adds two benefit limits. ABA benefits "apply only to eligible members under a contract\'s habilitative benefit," so check the member\'s contract. And "Benefits are not provided for diagnostic or treatment services related to learning, curriculum planning, educational achievement or special education programs," which the policy assigns to the school system under IDEA or a 504 plan. The January 2026 policy update also added a pointer to Md. Insurance § 15-835 for Maryland members. CareFirst\'s own utilization management relies on MCG Health Behavioral Health Care Guidelines alongside the Medical Policy Reference Manual.',
        ],
        cites: [
          { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
          { title: 'CareFirst — January 2026 Medical Policy Update (3.01.015 entry)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/medical-policy-update-january-2026.pdf' },
          { title: 'CareFirst Provider Manual, Chapter 7: Care Management (Utilization Management criteria)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-7-care-management.pdf' },
        ],
      },
      {
        h2: 'Prior authorization and the documentation CareFirst can ask for',
        body: [
          'Both CareFirst documents require ABA to be preauthorized. Operating Procedure 8.01.011A says "Applied behavioral analysis (ABA) services and habilitative diagnoses must be preauthorized," and Habilitative Services is on CareFirst\'s published list of services needing pre-service review for PPO members. Requests go through the CareFirst Provider Portal (Prior Auth/Notifications tab, where the PAL tool shows code-level requirements) or 1-866-773-2884 (1-866-PRE-AUTH). Neither policy separates the 97151 assessment from treatment, so check the assessment code in PAL.',
          'If CareFirst asks, you must make available for annual review: a brief medical history; a written evaluation establishing baseline data with objective tests and measurements where possible; a plan of treatment listing diagnosis, short- and long-term goals, procedures, visits per week, estimated duration and the "date of last certification by referring physician"; and progress notes documenting improvement or changes to the plan. Build intake to capture the referring physician and the date of that physician\'s last certification.',
        ],
        cites: [
          { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
          { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
          { title: 'CareFirst — Pre-Cert/Pre-Auth (In-Network)', url: 'https://provider.carefirst.com/providers/medical/in-network-precertification-preauthorization.page' },
        ],
      },
      {
        h2: 'Technicians: does CareFirst require RBT certification?',
        body: [
          'CareFirst does not credential or contract with technicians at all. Payment Policy PP CO 020.01 (Limited Licensed Providers) states: "CareFirst currently does not contract directly with physician assistants, assistant behavior analysts, and registered behavior technicians." Their services are "eligible for reimbursement when rendered under the supervision of a physician or licensed board-certified behavior analyst as required by local licensing agencies and submitted under that supervising physician\'s or licensed board-certified behavior analyst\'s name and provider number." No extra modifier distinguishes the technician, and the allowance is based on the supervising BCBA\'s fee schedule.',
          'So CareFirst\'s own documents name the technician as a registered behavior technician and tie payment to supervision "as required by local licensing agencies." They do not separately require RBT certification for someone working under a licensed BCBA. The medical policy requires treatment by "an appropriately trained, certified or licensed health care professional," and COMAR 31.10.39.03E lets a Maryland carrier limit payment to people "licensed, certified, or otherwise authorized" under the Health Occupations Article. Whether a claim for an uncertified technician would be paid is not stated anywhere. Treat RBT certification as the safe standard and confirm with CareFirst before billing uncertified staff.',
          'At the supervisor level, CareFirst credentials "Licensed Board-Certified Behavior Analyst (Maryland and Virginia only)" as an eligible professional provider type, and the practitioner "must be licensed in the state where the member receives the service" within CareFirst\'s service area (Maryland, Washington, D.C. and Northern Virginia). Credentialing runs through CAQH ProView plus the CareFirst questionnaire.',
        ],
        cites: [
          { title: 'CareFirst Payment Policy PP CO 020.01 — Limited Licensed Providers, Professional (last review 5/6/2025)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' },
          { title: 'CareFirst Provider Manual, Chapter 3: Provider Network Requirements (Credentialing)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-3-administrative-functions.pdf' },
          { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' },
          { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
        ],
      },
      {
        h2: 'The Maryland mandate as CareFirst applies it',
        body: [
          'Operating Procedure 8.01.011A carries the Maryland mandate into CareFirst\'s rules. For children "until the end of the month in which the insured or enrollee turns 19 years of age," habilitative benefits are provided "under all contracts that follow Maryland state mandates," do not count toward any therapy maximum, and include ABA "for at least the following hours": a minimum of 25 hours a week from 18 months to 6 years, and a minimum of 10 hours a week from 6 until the month the child turns 19. That matches COMAR 31.10.39.03D, which bars denial based solely on hours at or under those levels and allows more when medically necessary. COMAR 31.10.39.03 also lets a carrier require a comprehensive evaluation by the PCP or a specialty physician, a prescription with specific treatment goals, and an annual review by the prescriber. It bars denying ABA as experimental or investigational, and bars denying payment because a treatment goal places services in the child\'s educational setting.',
          'The statute reaches insurers, nonprofit health service plans and HMOs issuing or delivering contracts in Maryland (§ 15-835(b)). It does not require reimbursement for services delivered through early intervention or schools (§ 15-835(c)(2)). Self-funded employer plans administered by CareFirst are not bound by it, and CareFirst notes that non-local accounts such as NASCO and the Federal Employee Program "may differ from our local determinations." For Washington, D.C. contracts, 8.01.011A records a separate mandate covering habilitative services including ABA at all ages in non-grandfathered individual and small-group plans.',
        ],
        cites: [
          { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
          { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
          { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' },
          { title: 'CareFirst — January 2026 Medical Policy Update', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/medical-policy-update-january-2026.pdf' },
        ],
      },
      {
        h2: 'Billing, rates, and the CareFirst Medicaid card',
        body: [
          'Claims for technician and BCaBA services go out under the supervising licensed BCBA\'s name and provider number (PP CO 020.01). Operating Procedure 8.01.011A says habilitative services should be reported with the Category I CPT code plus modifier 96 (habilitative services), effective 1/1/2018. CareFirst applies CMS National Correct Coding Initiative edits, both procedure-to-procedure pairs and Medically Unlikely Edits, to professional claims (PP CO 090.01). Claims must be filed within 365 days of the date of service. On rates, CareFirst publishes no ABA fee schedule. PP CO 020.01 says a BCBA is paid 75% of CareFirst\'s base physician fee schedule, but the dollar amounts are in your contract. Maryland Medicaid\'s published fee schedule is the public benchmark to negotiate against.',
          'A family with CareFirst BlueCross BlueShield Community Health Plan Maryland is on a Medicaid HealthChoice MCO, and Maryland carves ABA out of every HealthChoice MCO. Authorizations and claims for those children go to Carelon Behavioral Health under the Maryland Medicaid rules, not to CareFirst. Use the Maryland Medicaid guide for them.',
        ],
        cites: [
          { title: 'CareFirst Payment Policy PP CO 020.01 — Limited Licensed Providers, Professional (last review 5/6/2025)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' },
          { title: 'CareFirst Payment Policy PP CO 090.01 — NCCI Editing, Professional, DME Supplier and Facility (last review 4/15/2026)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' },
          { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
          { title: 'CareFirst Provider Manual, Chapter 5: Claims, Billing and Payments', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-5-claims-billing-and-payments.pdf' },
          { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type and product', desc: 'Fully insured Maryland contract (mandate and hour floors apply), self-funded employer plan (exempt), FEP or a NASCO national account (may differ from CareFirst\'s local policies), or CareFirst Community Health Plan Maryland (Medicaid, so ABA goes to Carelon).' },
      { title: 'BlueChoice HMO referral', desc: 'If the card is BlueChoice HMO (not Open Access or BlueChoice Advantage), get the PCP\'s written or standing referral. BlueChoice referrals last up to 120 days and three visits unless standing.' },
      { title: 'Diagnosis report', desc: 'A confirmed ASD diagnosis from a qualified healthcare provider, with the diagnosing clinician\'s name, credential and evaluation date.' },
      { title: 'Prescription with goals + referring physician', desc: 'COMAR lets the carrier require a prescription with specific treatment goals from the PCP or a specialty physician, reviewed yearly. CareFirst\'s treatment-plan documentation asks for the date of the referring physician\'s last certification.' },
      { title: 'Supervising BCBA', desc: 'Technician and BCaBA services bill under a CareFirst-credentialed licensed BCBA\'s name and provider number, so assign one before the first session.' },
      { title: 'Other coverage', desc: 'Any second commercial plan or Medicaid. Secondary claims to CareFirst need the primary carrier\'s EOB.' },
    ],
    sources: [
      { title: 'CareFirst Medical Policy Reference Manual (3.01.015 Autism Spectrum Disorder; 8.01.011A Habilitative Services; 2.01.072A Telemedicine)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' },
      { title: 'CareFirst Payment Policy Reference Manual (PP CO 020.01 Limited Licensed Providers; PP CO 090.01 NCCI Editing; PP CO 200.02 Telemedicine Services)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' },
      { title: 'CareFirst — January 2026 Medical Policy Update', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/medical-policy-update-january-2026.pdf' },
      { title: 'CareFirst — Pre-Cert/Pre-Auth (In-Network)', url: 'https://provider.carefirst.com/providers/medical/in-network-precertification-preauthorization.page' },
      { title: 'CareFirst Provider Manual, Chapter 2: Product Descriptions', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-2-product-descriptions.pdf' },
      { title: 'CareFirst Provider Manual, Chapter 3: Provider Network Requirements (Credentialing)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-3-administrative-functions.pdf' },
      { title: 'CareFirst Provider Manual, Chapter 5: Claims, Billing and Payments', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-5-claims-billing-and-payments.pdf' },
      { title: 'CareFirst Provider Manual, Chapter 7: Care Management', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-7-care-management.pdf' },
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
      { title: 'Md. Insurance Article § 15-10B-06 — private review agent determinations', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-10B-06&enactments=false' },
      { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' },
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
      { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'CareFirst\'s rule is about who supervises and bills, not a numeric ratio. PP CO 020.01: services by assistant behavior analysts or registered behavior technicians are "eligible for reimbursement when rendered under the supervision of a physician or licensed board-certified behavior analyst as required by local licensing agencies and submitted under that supervising physician\'s or licensed board-certified behavior analyst\'s name and provider number." CareFirst credentials the licensed BCBA (Maryland and Virginia) but not the technician. CareFirst publishes no supervision-hours ratio. The ratio you work to is the BACB\'s and Maryland licensure\'s, not a CareFirst figure.',
        status: 'verified',
        cites: [{ title: 'CareFirst Payment Policy PP CO 020.01 — Limited Licensed Providers, Professional (last review 5/6/2025)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' }, { title: 'CareFirst Provider Manual, Chapter 3: Provider Network Requirements (Credentialing)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-3-administrative-functions.pdf' }],
      },
      concurrentBilling: {
        value:
          'Not published for ABA. CareFirst applies CMS NCCI procedure-to-procedure edits to professional claims (PP CO 090.01). When both codes of an edit pair are billed for the same member on the same date, the column-two code is denied unless a clinically appropriate modifier is reported. Neither the medical policy nor the payment policies say whether 97155 may be billed alongside 97153 for the same clock time.',
        status: 'unverified',
        cites: [{ title: 'CareFirst Payment Policy PP CO 090.01 — NCCI Editing, Professional, DME Supplier and Facility (last review 4/15/2026)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' }],
        verifyVia: 'CareFirst provider services or the Provider Portal: ask whether 97155 pays when billed for the same clock time as 97153 on this member\'s plan, and whether an NCCI edit applies to the pair.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'CareFirst applies the CMS Medically Unlikely Edits to professional claims. PP CO 090.01 defines an MUE as "the maximum number of units to be reported for a code by the same provider/supplier for the same member on the same date of service," and says distinct-service modifiers "should not be included to bypass an MUE." CareFirst publishes no ABA-specific unit table of its own. The per-code daily ceilings are the CMS practitioner MUE values, and the authorization sets the hours.',
        status: 'verified',
        cites: [{ title: 'CareFirst Payment Policy PP CO 090.01 — NCCI Editing, Professional, DME Supplier and Facility (last review 4/15/2026)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' }],
      },
      noteSignature: {
        value:
          'No session-note signature rule is published. What CareFirst does publish is the record it can request for annual review: a brief medical history; a written evaluation establishing baseline data; a treatment plan listing diagnosis, short- and long-term goals, procedures, visits per week, estimated duration and the date of last certification by the referring physician; and progress notes documenting improvement or changes. Records requested for billing verification are due within 15 days.',
        status: 'unverified',
        cites: [{ title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }, { title: 'CareFirst Payment Policy PP CO 020.01 — Limited Licensed Providers, Professional (last review 5/6/2025)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' }],
        verifyVia: 'CareFirst provider services: ask who must sign technician session notes (the RBT, the supervising BCBA, or both) and by when, since claims go out under the BCBA.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Two rules pull against each other, and funding type decides between them. Medical Policy 3.01.015 excludes "diagnostic or treatment services related to learning, curriculum planning, educational achievement or special education programs" as the school system\'s responsibility under IDEA or a 504 plan. Operating Procedure 8.01.011A, in its D.C. mandate section, says benefits may not be provided to a child under an individualized education program or other IDEA obligation of a public school. For a fully insured Maryland contract, COMAR 31.10.39.03F says a carrier "may not deny payment for habilitative services if a treatment goal identifies the location of the habilitative services as the child\'s educational setting," though it need not cover services owed under an IEP. Telehealth is billed with POS 02 or 10.',
        status: 'plan-dependent',
        cites: [{ title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }, { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }, { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' }],
        verifyVia: 'Benefits check on the member\'s plan: confirm funding type, then ask which places of service are payable for ABA and whether a school-setting goal is covered.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Under the supervising licensed BCBA. PP CO 020.01: technician and assistant-behavior-analyst services are "submitted under that supervising physician\'s or licensed board-certified behavior analyst\'s name and provider number"; "services rendered do not require additional modifiers to distinguish between provider types," and "allowances will be based on the fee schedule for the supervising physician or licensed board-certified behavior analyst." A BCBA\'s allowance is 75% of CareFirst\'s base physician fee schedule. Operating Procedure 8.01.011A asks that habilitative services carry CPT modifier 96 (effective 1/1/2018).',
        status: 'verified',
        cites: [{ title: 'CareFirst Payment Policy PP CO 020.01 — Limited Licensed Providers, Professional (last review 5/6/2025)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' }, { title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }],
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Medical Policy 3.01.015 sets no age limit. For contracts that follow Maryland mandates, Operating Procedure 8.01.011A covers habilitative services including ABA "for children until the end of the month in which the insured or enrollee turns 19 years of age," with the 25-hour (18 months to 6) and 10-hour (6 to 19) weekly floors. D.C. mandate contracts cover ABA at all ages. Self-funded plans follow their own plan document.',
        status: 'plan-dependent',
        cites: [{ title: 'CareFirst Medical Policy Operating Procedure 8.01.011A — Habilitative Services (MD and DC Mandates) (rev. 4/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }, { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }],
        verifyVia: 'Benefits check (Provider Portal or the number on the card): confirm whether the plan follows Maryland mandates (fully insured Maryland contract) or is self-funded, and any age limit on the habilitative benefit.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'CareFirst publishes no recency rule for the diagnostic evaluation. The currency requirements that exist sit on the prescription. COMAR 31.10.39.03 lets a carrier require an annual review by the prescribing PCP or specialty physician. CareFirst\'s treatment-plan documentation asks for the "date of last certification by referring physician." Capture both the evaluation date and the physician\'s most recent certification date.',
        status: 'unverified',
        cites: [{ title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }, { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' }],
        verifyVia: 'CareFirst prior authorization (PAL tool or 1-866-PRE-AUTH): ask whether an evaluation of this age will be accepted, or whether an updated evaluation or physician re-certification is needed.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A "qualified healthcare provider." Medical Policy 3.01.015 requires a "confirmed diagnosis of autism spectrum disorder (ASD) from a qualified healthcare provider" and does not list which credentials qualify. On a fully insured Maryland contract, COMAR 31.10.39.03 lets the carrier require a comprehensive evaluation by the child\'s primary care provider or a specialty physician.',
        status: 'verified',
        cites: [{ title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }, { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. Medical Policy 3.01.015 requires a confirmed ASD diagnosis but names no diagnostic tool or score. Its annual-review documentation asks for "a written evaluation that establishes the physical baseline data utilizing objective tests and measurements, where possible."',
        status: 'unverified',
        cites: [{ title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }],
        verifyVia: 'CareFirst prior authorization (1-866-PRE-AUTH): ask whether a specific instrument is expected behind the diagnosis before scheduling testing.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'Two separate things. First, the product: BlueChoice HMO members need a written PCP referral for office services not rendered by the PCP. A written referral lasts "a maximum of 120 days and limited to three visits," and members with long-term conditions can get a standing referral. BlueChoice Open Access, BlueChoice Advantage and PPO (BluePreferred) members need no specialist referral. Second, the mandate: on a fully insured Maryland contract, COMAR 31.10.39.03 lets the carrier require a prescription with specific treatment goals from the PCP or a specialty physician, plus annual review by that prescriber. CareFirst\'s documentation list asks for the date of the referring physician\'s last certification.',
        status: 'plan-dependent',
        cites: [{ title: 'CareFirst Provider Manual, Chapter 2: Product Descriptions', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-2-product-descriptions.pdf' }, { title: 'COMAR 31.10.39.03 — Utilization Review Criteria for Treatment of Autism and Autism Spectrum Disorders', url: 'https://regs.maryland.gov/us/md/exec/comar/31.10.39.03' }, { title: 'CareFirst Medical Policy 3.01.015 — Autism Spectrum Disorder (ASD) (eff. 3/1/2026), Medical Policy Reference Manual', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }],
        verifyVia: 'Read the product off the card (BlueChoice HMO vs. Open Access/Advantage vs. PPO). For BlueChoice HMO, confirm whether ABA falls under a standing referral.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'CareFirst\'s telemedicine billing rules are published, but no ABA code list is. PP CO 200.02 requires modifier GT or 95 for synchronous audio-video, POS 02 (not in the patient\'s home) or 10 (in the patient\'s home), and says services by telemedicine "must meet all the coding components of a face-to-face visit." "CareFirst will only cover audio-only calls where mandated by law." For fully insured Maryland members that means E/M codes at in-person rates, not ABA codes. Neither PP CO 200.02 nor Medical Policy 2.01.072A says which of 97151–97158 may be delivered remotely.',
        status: 'plan-dependent',
        cites: [{ title: 'CareFirst Payment Policy PP CO 200.02 — Telemedicine Services, Professional (rev. 12/31/2025)', url: 'https://provider.carefirst.com/providers/medical/payment-policy.page' }, { title: 'CareFirst Medical Policy Operating Procedure 2.01.072A — Telemedicine (Unified Communications) (eff. 6/1/2025)', url: 'https://provider.carefirst.com/providers/medical/medical-policy.page' }],
        verifyVia: 'CareFirst prior authorization: ask which ABA codes (97151–97158) are approved for telehealth on this member\'s plan before requesting them with GT/95.',
        blocker: 'per-case',
      },
      authTurnaround: {
        value:
          'CareFirst\'s manual says "Request review timelines vary, and are based on applicable NCQA, state and federal requirements." For a fully insured Maryland contract, the state clock is Insurance § 15-10B-06. Initial non-emergency determinations are due "within 2 working days after receipt of the information necessary to make the determination." Requests for additional services within an existing treatment plan are due within 1 working day. If information is missing, CareFirst must say what is needed within 3 calendar days. A determination not made within the time limits "shall be deemed approved." The same section requires acceptance of Maryland\'s uniform treatment plan form for mental and emotional disorder services. Self-funded plans follow federal rules and the plan document instead.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article § 15-10B-06 — private review agent determinations', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-10B-06&enactments=false' }, { title: 'CareFirst Provider Manual, Chapter 7: Care Management', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-7-care-management.pdf' }],
        verifyVia: 'Confirm funding type on the benefits check. For a self-funded plan, ask CareFirst for that plan\'s UM decision timeframes.',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'CareFirst applies COB "whenever a member covered under a CareFirst contract is also eligible for health insurance benefits through another insurance company or Medicare." As primary, it pays per the member\'s contract. As secondary, its standard method pays the lesser of the balance up to the provider\'s full charge, or what CareFirst would have paid as primary minus the other carrier\'s payment. "Claims for secondary benefits must be accompanied by the explanation of benefits from the primary carrier." Group contracts may coordinate differently. Which parent\'s plan is primary is not set out in the manual.',
        status: 'plan-dependent',
        cites: [{ title: 'CareFirst Provider Manual, Chapter 5: Claims, Billing and Payments (Coordination of Benefits)', url: 'https://provider.carefirst.com/carefirst-resources/provider/pdf/provider-manual-chapter-5-claims-billing-and-payments.pdf' }],
        verifyVia: 'Eligibility response in the CareFirst Provider Portal for an other-insurance record. Collect both parents\' plans and birth dates at intake and ask CareFirst which is primary.',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does CareFirst cover ABA therapy in Maryland?', a: 'Yes, for autism spectrum disorder. Medical Policy 3.01.015 covers Adaptive Behavioral Treatment, including ABA, when the child has a confirmed ASD diagnosis from a qualified healthcare provider, treatment is by an appropriately trained, certified or licensed professional, it targets core ASD deficits, and it is expected to produce measurable improvement. On fully insured Maryland contracts the habilitative mandate adds floors of 25 hrs/week (18 months–5) and 10 hrs/week (6–18).' },
      { q: 'Does CareFirst require RBT certification for ABA technicians?', a: 'CareFirst does not credential technicians at all. Payment Policy PP CO 020.01 says it does not contract directly with assistant behavior analysts or registered behavior technicians. Their services are paid when rendered under the supervision of a licensed BCBA "as required by local licensing agencies" and billed under that BCBA\'s name and provider number. CareFirst\'s documents do not state a separate certification rule for technicians, so RBT certification is the safe standard. Confirm with CareFirst before billing uncertified staff.' },
      { q: 'Does CareFirst require prior authorization for ABA?', a: 'Yes. Medical Policy 3.01.015 says ABT "must be preauthorized," and Operating Procedure 8.01.011A says ABA services and habilitative diagnoses must be preauthorized. Submit through the CareFirst Provider Portal or 1-866-773-2884, and check the 97151 assessment code in the PAL tool, since the policies do not treat it separately.' },
      { q: 'Which CareFirst medical policy covers ABA?', a: 'Medical Policy 3.01.015, Autism Spectrum Disorder (ASD), effective 3/1/2026, for medical necessity. Medical Policy Operating Procedure 8.01.011A, Habilitative Services (MD and DC Mandates), for the Maryland mandate and its hour floors. Payment Policy PP CO 020.01, Limited Licensed Providers, for how technician services are billed. The old policy 3.01.006 (Pervasive Developmental Disorders) is retired.' },
      { q: 'What does CareFirst pay for ABA?', a: 'CareFirst publishes no ABA fee schedule. PP CO 020.01 says a BCBA is paid 75% of CareFirst\'s base physician fee schedule, and technician services are allowed at the supervising BCBA\'s rate. The dollar amounts are in your participating-provider agreement. Use Maryland Medicaid\'s published fee schedule as the public benchmark.' },
    ],
  },

  'aetna-maryland': {
    slug: 'aetna-maryland',
    family: 'aetna',
    cardDesc: 'CPB 0554 (ABA) + CPB 0648 (ASD) + Maryland\'s habilitative-services mandate with 25/10-hr floors.',
    assessmentPA: {
      value: 'Required — precertification (form GR-69017-4), per Aetna\'s behavioral health precertification list (eff. 8/1/2024) — CPB 0554 itself sets no precertification rule',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — precertification; reauthorization commonly ~6 months (verify per plan)',
      status: 'verified',
      cites: [
        { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
        { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only (F84.0–F84.9); ABA for other diagnoses considered experimental',
      status: 'unverified',
      cites: [
        { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
        { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
      ],
      verifyVia: 'Two Aetna documents disagree on the code range and a human must settle which governs an ABA review: CPB 0554 and CPB 0648 both list "ICD-10 codes covered if selection criteria are met: F84.0 - F84.9", while the Applied behavior analysis medical necessity guide — the guideline Aetna’s behavioral-health reviewers apply — states "a DSM-V diagnosis of Autism Spectrum Disorder (ICD-10: F84.0; F84.3 - F84.9)" in both its quality-of-care elements and its medical-necessity criteria, which leaves out F84.2 (Rett syndrome). The ASD-only half of the claim is not in doubt; the range is.',
      blocker: 'document',
    },
    payer: 'Aetna in Maryland',
    state: 'MD', kind: 'commercial',
    pill: 'Payer Guide · Aetna · Maryland',
    h1: 'Aetna ABA coverage in Maryland: the intake guide.',
    metaTitle: 'Aetna ABA Coverage in Maryland: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Aetna covers ABA for Maryland families — the national clinical policy, prior authorization, Maryland\'s habilitative services mandate (Md. Ins. § 15-835 + COMAR 31.10.39.03 with 25/10 hour floors), Maryland LBA licensure, and what intake should verify.',
    intro: [
      'For an intake team in Maryland, an Aetna card means three layers at once: the carrier\'s national clinical policy, Maryland\'s habilitative-services mandate (Md. Code Ann., Insurance § 15-835, implemented by COMAR 31.10.39.03), and the plan\'s funding type deciding which of the two actually binds. Maryland\'s mandate is unusual — it carries hour FLOORS below which ABA can\'t be denied. This guide stacks the layers in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Aetna policy' },
      { label: 'State mandate', value: 'Md. Ins. § 15-835 + COMAR 31.10.39.03 (habilitative services)' },
      { label: 'Mandate age', value: 'Through at least the month the enrollee turns 19; hour floors span 18 months–18 years' },
      { label: 'Mandate floors', value: 'No denial solely on hours up to 25 hrs/wk (18 mo–5 yrs) or 10 hrs/wk (6–18); no dollar cap' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; early-intervention/school-delivered services' },
      { label: 'Licensure', value: 'MD Licensed Behavior Analyst (Board of Professional Counselors & Therapists)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Maryland',
        body: [
          'Aetna covers ABA for autism spectrum disorder under its national clinical policy CPB 0554 (paired with CPB 0648 for ASD), and considers ABA experimental for anything else. Precertification is required for both the assessment and treatment — form GR-69017-4, submitted via Availity or phone — with reauthorization commonly on a roughly 6-month cadence. That clinical policy is national — what changes in Maryland is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. One Maryland-specific caution: there are indications in Aetna\'s ABA materials that Maryland-regulated plans get distinct medical-necessity handling and that the standard ABA precert form may not apply to Maryland — we could not verify the primary documents, so confirm the correct Maryland submission path with Aetna or in Availity before filing rather than assuming the national form.',
        ],
        cites: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
        ],
      },
      {
        h2: 'The Maryland mandate: hour floors, not caps',
        body: [
          'Maryland has no standalone "autism mandate" — ABA is covered as a habilitative service for children with ASD under Insurance § 15-835, with the ABA-specific rules in COMAR 31.10.39.03 (effective April 3, 2014). The statute requires Maryland-regulated insurers, nonprofit health service plans, and HMOs to cover habilitative services until at least the end of the month the enrollee turns 19. The COMAR layer is where the teeth are: ABA may not be denied solely on the basis of prescribed hours up to 25 hours/week for ages 18 months through 5 years and up to 10 hours/week for ages 6 through 18 — with additional hours authorized when medically necessary — and ABA may not be denied as experimental or investigational. There is no dollar cap. The entry requirements: a comprehensive evaluation, a prescription with treatment goals from the PCP or a specialty physician, and annual review by the prescriber — so the prescription and its renewal date are intake data. Carriers aren\'t required to reimburse services delivered through early intervention or the schools, and self-funded ERISA plans are exempt — for those, MHPAEA parity is the fallback lever, and the hour floors don\'t apply.',
        ],
        cites: [
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
      { title: 'Optum BH803ABA State Mandates — quotes COMAR 31.10.39.03 criteria incl. the 25/10 hour floors', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'Aetna Medicaid in Maryland: the card that doesn\'t matter for ABA',
        body: [
          'A family saying "we have Aetna" in Maryland may be on Aetna Better Health of Maryland, a HealthChoice MCO — but unlike other states, that changes nothing for ABA. Maryland carves ABA (and all specialty behavioral health) out of the MCOs entirely: authorizations and claims go to Carelon Behavioral Health, the state\'s BHASO, under the Medicaid fee-for-service rules. If the card is Aetna Better Health, use our Maryland Medicaid guide and route everything to Carelon — Aetna\'s Medicaid plan never touches ABA.',
        ],
        cites: [
      { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
        ],
      },
      {
        h2: 'Licensure & rates in Maryland',
        body: [
          'Maryland has required licensure to practice behavior analysis since January 2015: the Licensed Behavior Analyst (LBA) credential, administered by the Behavior Analyst Advisory Committee of the State Board of Professional Counselors and Therapists (Health Occupations Title 17, Subtitle 6A; COMAR 10.58.16), built on current BACB certification, a qualifying master\'s degree, and a criminal-history check. The mandate\'s COMAR criteria likewise expect licensed delivery. On rates: Aetna does not publish commercial ABA fee schedules for Maryland (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Maryland\'s Medicaid fee schedule (effective February 1, 2026 — e.g., 97153 at $24.41/15-min BCBA tier) is the public benchmark to negotiate against.',
        ],
        cites: [
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate + hour floors apply) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'Line of business', desc: 'Commercial Aetna vs. Aetna Better Health of Maryland (Medicaid) — Medicaid ABA goes to Carelon, not Aetna at all.' },
      { title: 'ABA prescription + goals', desc: 'COMAR requires a prescription with treatment goals from the PCP or a specialty physician, reviewed annually — capture the prescriber and date.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
    ],
    sources: [
      { title: 'Aetna CPB 0554 — Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' },
      { title: 'Aetna CPB 0648 — Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' },
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
      { title: 'Optum BH803ABA State Mandates — COMAR 31.10.39.03 criteria (corroborating text)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
      { title: 'MDH HealthChoice \u2014 Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
      { title: 'Aetna — Participating provider behavioral health precertification list (eff. Aug. 1, 2024) (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/healthcare-professionals/documents-forms/bh_precert_list.pdf' },
      { title: 'Aetna — Outpatient BH ABA Treatment Request: Required Information for Precertification, form GR-69017-4 (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' },
      { title: 'Aetna — Applied behavior analysis medical necessity guide (PDF)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/health-care-professionals/applied-behavioral-analysis-necessity-guide.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Practitioners delivering ABA under CPB 0554 need BACB national certification or state behavior-analyst licensure, with unlicensed staff working under supervision per practice standards. In Maryland that licensure floor is concrete: the Licensed Behavior Analyst credential from the Board of Professional Counselors and Therapists has been required to practice behavior analysis since January 2015, and the mandate\'s COMAR criteria likewise expect licensed delivery. Aetna publishes no numeric supervision ratio for ABA.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }, { title: 'MDH Board of Professional Counselors & Therapists \u2014 Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' }],
      },
      concurrentBilling: {
        value:
          'Not published. Neither CPB 0554 nor CPB 0648 states whether 97155 and 97153 may be billed for the same clock time; Aetna handles code-pair questions through claim-editing and reimbursement policy rather than through the clinical policy bulletin.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Availity Essentials for the plan\'s reimbursement and claim-editing policies, or the provider-services number on the member\'s card. Ask specifically about 97153 billed alongside 97155.',
        blocker: 'per-case',
      },
      billAsProvider: {
        value:
          'Not published for ABA. CPB 0554 sets who may deliver the service (BACB-certified or state-licensed behavior analysts, with unlicensed staff supervised) but does not state whose NPI carries a technician-delivered 97153 claim, and no Maryland-specific Aetna ABA form or supplement exists.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Aetna provider services or Availity \u2014 confirm the rendering-versus-billing NPI convention and any required degree-level modifiers before the first claim. Note the guide\'s standing Maryland caution: confirm the correct Maryland precertification submission path rather than assuming the national form.',
        blocker: 'per-case',
      },
      dailyLimits: {
        value:
          'Not published. CPB 0554 lists the covered ABA codes but sets no per-day unit ceiling, and Aetna publishes no ABA-specific MUE table. The operative ceiling is the precertification itself, which requires requested hours to be listed code by code \u2014 so the authorization, not a policy, is what bounds the day. CPB 0648 references intensive-intervention research norms of 25 hours a week, 12 months a year as clinical context rather than as a limit.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'The authorization letter itself, plus Availity Essentials for the plan\'s claim-editing and reimbursement policies. Ask whether CMS MUE limits are applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      noteSignature: {
        value:
          'Not published. CPB 0554 and CPB 0648 set coverage criteria and precertification content; neither states what a session note must contain, who signs it, or by when.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Aetna provider services or Availity \u2014 ask for the documentation standard applied at audit, and keep to the precertification form\'s own data elements in the meantime.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. What CPB 0554 does make a submission requirement is adjacent and useful: the precertification form asks for concurrent services \u2014 PT, OT, speech and school services \u2014 plus how care is coordinated across them, so the school picture is data Aetna collects even though it publishes no school-versus-home rule.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA and whether school-based delivery is excluded.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Two answers, and plan funding type picks between them. The carrier\'s national ABA policy states no age limit. Maryland\'s habilitative-services mandate does: for Maryland-regulated insurers, nonprofit health service plans and HMOs, habilitative services must be covered \u201cuntil at least the end of the month the enrollee turns 19,\u201d and COMAR 31.10.39.03 pins its no-denial hour floors to age bands \u2014 up to 25 hours/week for ages 18 months through 5 years and up to 10 hours/week for ages 6 through 18, with more when medically necessary. Self-funded ERISA plans are exempt from all of it, so establish funding type before quoting either bound.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether the plan is Maryland-regulated (an insurer, nonprofit health service plan or HMO, which the habilitative-services mandate and COMAR 31.10.39.03 age bands reach) or a self-funded ERISA plan (exempt). If it is self-funded, ask what age limit and weekly hour limit the plan document sets for ABA before you quote either bound to the family.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Aetna publishes no recency rule for the ASD diagnostic evaluation. The only currency requirement that binds a fully-insured Maryland plan sits on the prescription rather than the diagnosis: COMAR 31.10.39.03 requires annual review by the prescribing PCP or specialty physician. Capture the evaluation date anyway \u2014 the precertification package asks for it.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }],
        verifyVia: 'The precertification call or Availity, when submitting form GR-69017-4 \u2014 ask whether an evaluation of this age will be accepted for this plan.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'The diagnosis must come from a provider qualified to diagnose within their scope \u2014 a licensed psychologist, psychiatrist or physician. Aetna\'s precertification form (GR-69017-4, effective 1/1/2026) asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials, so the diagnosing clinician\'s name and credential are submission data, not background.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Aetna CPB 0648 \u2014 Autism Spectrum Disorders', url: 'https://www.aetna.com/cpb/medical/data/600_699/0648.html' }],
      },
      diagnosticTools: {
        value:
          'No instrument is named. CPB 0554 does not require or reference a specific diagnostic tool, and the precertification form asks for the DSM-5 diagnosis code, the diagnosing provider and their credentials rather than for an instrument and score. Where a Maryland-regulated plan applies the mandate, COMAR 31.10.39.03 asks for a comprehensive evaluation without naming instruments either.',
        status: 'unverified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Aetna precertification (Availity or the number on the card) \u2014 ask whether a specific instrument is expected for this plan before scheduling testing.',
        blocker: 'per-case',
      },
      referral: {
        value:
          'On a fully-insured Maryland plan, yes \u2014 and it is a prescription, not a note. COMAR 31.10.39.03 conditions the mandated benefit on a comprehensive evaluation, a prescription with treatment goals from the PCP or a specialty physician, and annual review by the prescriber. Capture the prescriber and the prescription date at intake, and diary the annual renewal: a lapsed prescription is a coverage problem, not a paperwork one. Self-funded ERISA plans are outside the mandate, and for those the carrier\'s own authorization requirements are the only gate.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm funding type first. On a Maryland-regulated plan, capture the prescriber and prescription date and diary the annual prescriber review COMAR 31.10.39.03 requires. On a self-funded ERISA plan, ask the carrier whether it requires a referral or prescription at all, since the mandate does not reach it and only the carrier’s own authorization rules apply.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'Aetna covers telehealth for 97151, 97153, 97155, 97156 and 97157 \u2014 97152 is excluded \u2014 billed with GT, 95 or FR modifiers per its telemedicine payment policy. Treat the answer as perishable: Aetna announced it would end ABA telehealth coverage in late 2023 and rescinded the change within weeks, so confirm the current position on every benefits check rather than reusing last quarter\'s answer. Note that this is the carrier rule; Maryland\'s Medicaid telehealth floor (25 percent in person on 97155/97156/97157) is a different program and does not apply to a commercial Aetna plan.',
        status: 'verified',
        cites: [{ title: 'Aetna CPB 0554 \u2014 Applied Behavior Analysis', url: 'https://www.aetna.com/cpb/medical/data/500_599/0554.html' }],
      },
      authTurnaround: {
        value:
          'Aetna requires prior authorization for ABA but publishes no decision clock of its own, and its national ABA request form says “Don’t use this form for Maryland and Massachusetts” — in Maryland the treatment plan goes on the state uniform form. The clock depends on how the plan is funded. If the child’s plan is fully insured in Maryland, Insurance §15-10B-06 sets the clock: an initial request is decided “within 2 working days after receipt of the information necessary to make the determination,” “additional visits or days of care submitted as part of an existing course of treatment or treatment plan within 1 working day,” emergency requests within 24 hours, and a reviewer missing information must say so within 3 calendar days. Maryland’s teeth: “If a private review agent fails to make a determination within the time limits required under this section, the request shall be deemed approved.” Mental-health treatment plans must be accepted on the MIA uniform treatment plan form. If the employer self-funds, ERISA’s floor applies instead: pre-service decisions “not later than 15 days after receipt of the claim” (one 15-day extension allowed), urgent claims within 72 hours. Aetna publishes no reauth lead time; Maryland lets carriers require “An annual review by the prescribing primary care provider or specialty physician.”',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Code, Insurance §15-10B-06 — private review agent determinations', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-10B-06&enactments=false' }, { title: 'eCFR — 29 CFR 2560.503-1(f)(2), ERISA claims procedure timeframes', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' }, { title: 'Aetna Outpatient Behavioral Health — ABA Treatment Request form GR-69017-4 (7-26)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/pharmacy-insurance/healthcare-professional/documents/outpatient-behavioral-health-BH-ABA-assessment-precert.pdf' }, { title: 'COMAR 31.10.39.03 — habilitative services utilization review', url: 'https://www.law.cornell.edu/regulations/maryland/COMAR-31-10-39-03' }],
        verifyVia: 'the member services or behavioral health number on the ID card — ask whether the plan is fully insured (and in which state) or self-funded, and for its UM decision timeframes',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Aetna says: “We coordinate benefits as allowed by state or federal law following the National Associations of Insurance Commissioners (NAIC) guidelines. If there is no applicable law, then we coordinate according to the member’s plan,” and its order of benefits includes the “Dependent Child/Parents Not Separated or Divorced Rule (Birthday Rule)” — the parent whose birthday falls earlier in the year is primary. Maryland has not yet adopted a COB regulation: the Insurance Administration says contract COB provisions “have historically been reviewed for consistency with the NAIC Model, but the Model has not been formally adopted to date,” and its draft COMAR 31.10.53 (comments closed August 2026) would codify the NAIC birthday rule (“The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”) and exclude Medicaid from the definition of a plan — so Maryland Medicaid always pays after the commercial plan. Self-funded plans often use Maintenance of Benefits when secondary. Bill the primary first and send its EOB with the secondary claim.',
        status: 'plan-dependent',
        cites: [{ title: 'Aetna Health Care Professional Toolkit / provider manual (8102800-01-01, June 2026)', url: 'https://www.aetna.com/content/dam/aetna/pdfs/aetnacom/health-care-professionals/office_manual_hcp.pdf' }, { title: 'Maryland Insurance Administration — Regulatory Activity (NAIC COB model not yet adopted)', url: 'https://insurance.maryland.gov/Pages/newscenter/RegulatoryActivity.aspx' }, { title: 'MIA draft COMAR 31.10.53 Coordination of Benefits (posted July 2026)', url: 'https://insurance.maryland.gov/Documents/newscenter/legislativeinformation/3.10.53-Draft-712026.pdf' }],
        verifyVia: 'the carrier’s eligibility response (Availity or the ID-card number) for an other-insurance record, and both parents’ birth dates and custody arrangements at intake; a self-funded plan follows its own plan document',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Aetna cover ABA therapy in Maryland?', a: 'Yes — under the carrier\'s national policy for ASD, layered on Maryland\'s habilitative-services mandate (Md. Ins. § 15-835 + COMAR 31.10.39.03) for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Maryland mandate require for ABA?', a: 'For fully-insured plans: coverage of habilitative services through at least the month the enrollee turns 19, no denial of ABA solely on prescribed hours up to 25 hrs/week (ages 18 months–5) or 10 hrs/week (ages 6–18), no experimental/investigational denials, and no dollar cap — entered via a comprehensive evaluation plus a physician prescription reviewed annually.' },
      { q: 'What does Aetna pay for ABA in Maryland?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against Maryland Medicaid\'s February 2026 fee schedule and treat rate-setting as part of contracting.' },
    ],
  },

  'cigna-maryland': {
    slug: 'cigna-maryland',
    family: 'cigna',
    cardDesc: 'EN0499 + autism resource guide + Maryland\'s habilitative-services mandate with 25/10-hr floors.',
    assessmentPA: {
      value: 'Not required for assessment codes 97151, 97152, 0362T (per Cigna\'s autism resource guide — EN0499 itself states no prior-authorization rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — assessment + treatment plan with the ABA PA form (see Cigna\'s autism resource guide; EN0499 sets the clinical criteria, not the PA rule)',
      status: 'verified',
      cites: [
        { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — ASD only; Rett syndrome (F84.2) excluded under EN0499',
      status: 'verified',
      cites: [
        { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      ],
    },
    payer: 'Cigna / Evernorth in Maryland',
    state: 'MD', kind: 'commercial',
    pill: 'Payer Guide · Cigna · Maryland',
    h1: 'Cigna / Evernorth ABA coverage in Maryland: the intake guide.',
    metaTitle: 'Cigna ABA Coverage in Maryland: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How Cigna / Evernorth covers ABA for Maryland families — the national clinical policy, prior authorization, Maryland\'s habilitative services mandate (Md. Ins. § 15-835 + COMAR 31.10.39.03 with 25/10 hour floors), Maryland LBA licensure, and what intake should verify.',
    intro: [
      'For an intake team in Maryland, a Cigna card means three layers at once: the carrier\'s national clinical policy, Maryland\'s habilitative-services mandate (Md. Code Ann., Insurance § 15-835, implemented by COMAR 31.10.39.03), and the plan\'s funding type deciding which of the two actually binds. Maryland\'s mandate is unusual — it carries hour FLOORS below which ABA can\'t be denied. This guide stacks the layers in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national Cigna policy' },
      { label: 'State mandate', value: 'Md. Ins. § 15-835 + COMAR 31.10.39.03 (habilitative services)' },
      { label: 'Mandate age', value: 'Through at least the month the enrollee turns 19; hour floors span 18 months–18 years' },
      { label: 'Mandate floors', value: 'No denial solely on hours up to 25 hrs/wk (18 mo–5 yrs) or 10 hrs/wk (6–18); no dollar cap' },
      { label: 'Exempt from mandate', value: 'Self-funded ERISA plans; early-intervention/school-delivered services' },
      { label: 'Licensure', value: 'MD Licensed Behavior Analyst (Board of Professional Counselors & Therapists)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Maryland',
        body: [
          'Cigna (through Evernorth Behavioral Health) covers ABA for autism under national policy EN0499 with one of the friendliest front doors in the industry: no prior authorization on assessment codes 97151, 97152, and 0362T. The rigor arrives at the treatment step, which requires the completed assessment plus a treatment plan with Cigna\'s ABA PA form. That clinical policy is national — what changes in Maryland is the legal floor underneath it: the state mandate below governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our Cigna / Evernorth guide; this page covers what changes in Maryland.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
        ],
      },
      {
        h2: 'The Maryland mandate: hour floors, not caps',
        body: [
          'Maryland has no standalone "autism mandate" — ABA is covered as a habilitative service for children with ASD under Insurance § 15-835, with the ABA-specific rules in COMAR 31.10.39.03 (effective April 3, 2014). The statute requires Maryland-regulated insurers, nonprofit health service plans, and HMOs to cover habilitative services until at least the end of the month the enrollee turns 19. The COMAR layer is where the teeth are: ABA may not be denied solely on the basis of prescribed hours up to 25 hours/week for ages 18 months through 5 years and up to 10 hours/week for ages 6 through 18 — with additional hours authorized when medically necessary — and ABA may not be denied as experimental or investigational. There is no dollar cap. The entry requirements: a comprehensive evaluation, a prescription with treatment goals from the PCP or a specialty physician, and annual review by the prescriber — so the prescription and its renewal date are intake data. Carriers aren\'t required to reimburse services delivered through early intervention or the schools, and self-funded ERISA plans are exempt — for those, MHPAEA parity is the fallback lever, and the hour floors don\'t apply.',
        ],
        cites: [
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
      { title: 'Optum BH803ABA State Mandates — quotes COMAR 31.10.39.03 criteria incl. the 25/10 hour floors', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'No Maryland-specific Cigna policy exists',
        body: [
          'We checked the current EN0499 (effective May 15, 2026) in full: it contains no Maryland entry, carve-out, or state-specific exhibit — only the generic clause that a controlling federal or state coverage mandate supersedes the policy. So for fully-insured Cigna members in Maryland, the § 15-835 / COMAR 31.10.39 protections layer directly on top of the national policy without any Cigna-published Maryland supplement, and benefits verification (funding type, mandate applicability) is where Maryland-specific answers come from — not a carrier document.',
        ],
        cites: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions (eff. 5/15/2026)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Maryland',
        body: [
          'Maryland has required licensure to practice behavior analysis since January 2015: the Licensed Behavior Analyst (LBA) credential, administered by the Behavior Analyst Advisory Committee of the State Board of Professional Counselors and Therapists (Health Occupations Title 17, Subtitle 6A; COMAR 10.58.16), built on current BACB certification, a qualifying master\'s degree, and a criminal-history check. The mandate\'s COMAR criteria likewise expect licensed delivery. On rates: Cigna does not publish commercial ABA fee schedules for Maryland (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Maryland\'s Medicaid fee schedule (effective February 1, 2026 — e.g., 97153 at $24.41/15-min BCBA tier) is the public benchmark to negotiate against.',
        ],
        cites: [
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (mandate + hour floors apply) vs. self-funded ERISA (exempt) — it decides which rulebook governs. Ask for the employer and check the card.' },
      { title: 'ABA prescription + goals', desc: 'COMAR requires a prescription with treatment goals from the PCP or a specialty physician, reviewed annually — capture the prescriber and date.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report', desc: 'DSM-5 ASD diagnosis, diagnosing provider and credentials, evaluation date.' },
    ],
    sources: [
      { title: 'Evernorth EN0499 — Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' },
      { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' },
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
      { title: 'Optum BH803ABA State Mandates — COMAR 31.10.39.03 criteria (corroborating text)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Assessment and case supervision must come from a BCBA, a licensed behavior analyst, or an independently licensed clinician with documented ABA training, with direct supervision at the standard 1\u20132 hours per 10 hours of direct treatment. Evernorth does not credential non-licensed staff. In Maryland the supervising analyst must additionally hold the state Licensed Behavior Analyst credential, required to practice behavior analysis since January 2015.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'MDH Board of Professional Counselors & Therapists \u2014 Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' }],
      },
      concurrentBilling: {
        value:
          'Restrictive, and the restriction is about other therapies as much as about ABA codes. EN0499 does not cover ABA delivered at the same time as another therapy (speech, OT) to the same child, and only one provider may bill a unit of time, with the standard supervision exceptions. Where a family is transitioning between ABA agencies, overlapping authorization periods require documented coordination between the agencies \u2014 so the outgoing provider\'s details belong on the intake form.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      noteSignature: {
        value:
          'Every session note needs the date, start and end times, location, focus, a detailed description of the intervention, the persons present, the service type, and the rendering provider\'s name, credential and signature. No countersignature requirement and no signing deadline are published.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      billAsProvider: {
        value:
          'Evernorth does not credential non-licensed staff, so RBT-delivered services bill under the supervising provider. The treatment plan must name a credentialed supervisor.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      dailyLimits: {
        value:
          'Not published as a per-day unit ceiling. EN0499 bounds the day from a different direction: ABA is not covered when delivered at the same time as another therapy to the same child, and only one provider can bill a unit of time, with the standard supervision exceptions. Requested intensity is set in the treatment plan and authorized on the ABA PA form rather than against a published cap.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'The treatment authorization itself, and Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask whether any per-day MUE is applied to ABA codes on this plan.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Not published as a payable-settings list. Two sourced facts bear on setting nonetheless: the treatment plan must carry dated baseline data per setting, so settings are declared and measured rather than assumed; and every session note must record the location. Whether a given setting is payable is a plan-benefit question.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
        verifyVia: 'Benefits verification on the specific plan \u2014 ask which places of service are payable for ABA, and whether school-based delivery is excluded before you write school goals.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Two answers, and plan funding type picks between them. The carrier\'s national ABA policy states no age limit. Maryland\'s habilitative-services mandate does: for Maryland-regulated insurers, nonprofit health service plans and HMOs, habilitative services must be covered \u201cuntil at least the end of the month the enrollee turns 19,\u201d and COMAR 31.10.39.03 pins its no-denial hour floors to age bands \u2014 up to 25 hours/week for ages 18 months through 5 years and up to 10 hours/week for ages 6 through 18, with more when medically necessary. Self-funded ERISA plans are exempt from all of it, so establish funding type before quoting either bound.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether the plan is Maryland-regulated (an insurer, nonprofit health service plan or HMO, which the habilitative-services mandate and COMAR 31.10.39.03 age bands reach) or a self-funded ERISA plan (exempt). If it is self-funded, ask what age limit and weekly hour limit the plan document sets for ABA before you quote either bound to the family.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Cigna\'s recency rule attaches to the standardized assessment rather than to the diagnosis itself, and it is tight. Initiation requires a standardized, validated instrument in its current edition administered within 60 days before treatment start. Continued treatment needs an updated plan with current data no more than 60 days old, a repeat standardized assessment within a year, and a re-assessment after any break in service longer than 60 days. If the family\'s most recent testing is older than 60 days, plan to administer during your assessment window \u2014 which Cigna lets you open without prior authorization.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      diagnosingProviders: {
        value:
          'EN0499 as quoted in this guide sets the credential bar for who performs the ABA assessment and supervises the case \u2014 an independently licensed provider or a BCBA \u2014 rather than naming who may make the ASD diagnosis. The diagnosis itself must be a DSM-5-TR autism spectrum diagnosis, with Rett syndrome (F84.2) excluded.',
        status: 'unverified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }, { title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
        verifyVia: 'Evernorth Behavioral Health provider services (the behavioral health number on the member\'s card) \u2014 ask which diagnosing credentials EN0499 accepts before you rely on a diagnosis from a non-doctoral clinician.',
        blocker: 'per-case',
      },
      diagnosticTools: {
        value:
          'A standardized, validated instrument in its current edition \u2014 the policy gives Vineland-3 as the example rather than a closed list \u2014 administered within 60 days before treatment start, with the deficits it measures mapped to DSM-5-TR ASD domains and carried through into the treatment plan\'s goals. Continued treatment requires a repeat standardized assessment within a year.',
        status: 'verified',
        cites: [{ title: 'Evernorth EN0499 \u2014 Intensive Behavioral Interventions', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/en_mm_0499_coveragepositioncriteria_intensive_behavioral_interventions.pdf' }],
      },
      referral: {
        value:
          'On a fully-insured Maryland plan, yes \u2014 and it is a prescription, not a note. COMAR 31.10.39.03 conditions the mandated benefit on a comprehensive evaluation, a prescription with treatment goals from the PCP or a specialty physician, and annual review by the prescriber. Capture the prescriber and the prescription date at intake, and diary the annual renewal: a lapsed prescription is a coverage problem, not a paperwork one. Self-funded ERISA plans are outside the mandate, and for those the carrier\'s own authorization requirements are the only gate.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm funding type first. On a Maryland-regulated plan, capture the prescriber and prescription date and diary the annual prescriber review COMAR 31.10.39.03 requires. On a self-funded ERISA plan, ask the carrier whether it requires a referral or prescription at all, since the mandate does not reach it and only the carrier’s own authorization rules apply.',
        blocker: 'per-case',
      },
      telehealth: {
        value:
          'The most permissive position in this directory: Cigna\'s March 2025 autism resource guide states that all ABA CPT codes are covered telehealth services, with the delivery model \u2014 in person, telehealth or hybrid \u2014 chosen on the individual\'s needs. Maryland adds nothing here for a commercial plan; the 25 percent in-person floor in PT 60-26 is a Medicaid rule and does not reach a Cigna commercial member.',
        status: 'verified',
        cites: [{ title: 'Cigna autism resource guide (Mar 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }],
      },
      authTurnaround: {
        value:
          'Evernorth (Cigna’s behavioral arm) makes “coverage determinations in accordance with the time frames required under applicable law,” so the clock depends on how the plan is funded. If the child’s plan is fully insured in Maryland, Insurance §15-10B-06 sets the clock: an initial request is decided “within 2 working days after receipt of the information necessary to make the determination,” “additional visits or days of care submitted as part of an existing course of treatment or treatment plan within 1 working day,” emergency requests within 24 hours, and a reviewer missing information must say so within 3 calendar days. Maryland’s teeth: “If a private review agent fails to make a determination within the time limits required under this section, the request shall be deemed approved.” Mental-health treatment plans must be accepted on the MIA uniform treatment plan form. If the employer self-funds, ERISA’s floor applies instead: pre-service decisions “not later than 15 days after receipt of the claim” (one 15-day extension allowed), urgent claims within 72 hours. Evernorth’s own lead time: “For ABA, we encourage providers to request authorizations up to 30 days in advance of or two weeks after the start date of service. A delay in request may result in a retrospective review and could delay the determination for up to 30 days.”',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' }, { title: 'Evernorth Behavioral Health — Autism resource guide (PCOMM-2025-225, March 2025)', url: 'https://static.cigna.com/assets/chcp/pdf/coveragePolicies/medical/autism-resource-guide.pdf' }, { title: 'Md. Code, Insurance §15-10B-06 — private review agent determinations', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-10B-06&enactments=false' }, { title: 'eCFR — 29 CFR 2560.503-1(f)(2), ERISA claims procedure timeframes', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' }],
        verifyVia: 'the Evernorth Autism Care Coordinator team (877-279-7603) or the ID-card number — ask whether the plan is fully insured in Maryland or self-funded',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'Evernorth follows “the National Association of Insurance Commissioners guidelines about the industry standard of order of benefit determination subject to applicable law and the terms of the benefit plan.” For a child of married parents living together, “The plan of the parent whose birthday falls earlier in the calendar year is primary to the plan of the parent whose birthday falls later in the year” (same birthday: the plan in effect longer); for separated or divorced parents, a court decree first, then the custodial parent’s plan, the custodial parent’s spouse’s, the non-custodial parent’s, and that parent’s spouse’s. Bill the primary first, then Cigna (payer ID 62308, or paper with the primary’s EOB). Maryland has not yet adopted a COB regulation: the Insurance Administration says contract COB provisions “have historically been reviewed for consistency with the NAIC Model, but the Model has not been formally adopted to date,” and its draft COMAR 31.10.53 (comments closed August 2026) would codify the NAIC birthday rule (“The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”) and exclude Medicaid from the definition of a plan — so Maryland Medicaid always pays after the commercial plan.',
        status: 'plan-dependent',
        cites: [{ title: 'Evernorth Behavioral Health Administrative Guidelines (March 2026, PCOMM-2026-191)', url: 'https://static.evernorth.com/assets/evernorth/provider/pdf/resourceLibrary/behavioral/ebh-provider-admin-guide.pdf' }, { title: 'Maryland Insurance Administration — Regulatory Activity (NAIC COB model not yet adopted)', url: 'https://insurance.maryland.gov/Pages/newscenter/RegulatoryActivity.aspx' }, { title: 'MIA draft COMAR 31.10.53 Coordination of Benefits (posted July 2026)', url: 'https://insurance.maryland.gov/Documents/newscenter/legislativeinformation/3.10.53-Draft-712026.pdf' }],
        verifyVia: 'the carrier’s eligibility response (Availity or the ID-card number) for an other-insurance record, and both parents’ birth dates and custody arrangements at intake; a self-funded plan follows its own plan document',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does Cigna cover ABA therapy in Maryland?', a: 'Yes — under the carrier\'s national policy for ASD (EN0499, with no PA on assessment codes), layered on Maryland\'s habilitative-services mandate for fully-insured plans. Self-funded employer plans are exempt from the mandate, so always verify plan funding type first.' },
      { q: 'What does the Maryland mandate require for ABA?', a: 'For fully-insured plans: coverage of habilitative services through at least the month the enrollee turns 19, no denial of ABA solely on prescribed hours up to 25 hrs/week (ages 18 months–5) or 10 hrs/week (ages 6–18), no experimental/investigational denials, and no dollar cap — entered via a comprehensive evaluation plus a physician prescription reviewed annually.' },
      { q: 'What does Cigna pay for ABA in Maryland?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against Maryland Medicaid\'s February 2026 fee schedule and treat rate-setting as part of contracting.' },
    ],
  },

  'unitedhealthcare-maryland': {
    slug: 'unitedhealthcare-maryland',
    family: 'unitedhealthcare',
    cardDesc: 'Optum BH803ABASCC + a published Maryland State Mandates entry adopting the COMAR 25/10-hr floors.',
    assessmentPA: {
      value: 'Required — step 1 of Optum\'s two-step authorization (assessment auth via Provider Express)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    treatmentPA: {
      value: 'Required — a separate treatment authorization after the assessment. “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law,” and continued-care requests go in “no more than 30 days prior to the current approvals on file expiring” (Optum ABA CPT FAQ)',
      status: 'verified',
      cites: [
        { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    dxRequired: {
      value: 'Yes — DSM-5-TR ASD confirmed with a validated tool (ADI-R, ADOS-2, etc.)',
      status: 'verified',
      cites: [
        { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      ],
    },
    payer: 'UnitedHealthcare / Optum in Maryland',
    state: 'MD', kind: 'commercial',
    pill: 'Payer Guide · UnitedHealthcare · Maryland',
    h1: 'UnitedHealthcare / Optum ABA coverage in Maryland: the intake guide.',
    metaTitle: 'UnitedHealthcare ABA Coverage in Maryland: Prior Auth & Mandate Guide | Carelu',
    metaDescription:
      'How UnitedHealthcare / Optum covers ABA for Maryland families — the national clinical policy, prior authorization, Optum\'s published Maryland state-mandate criteria (COMAR 31.10.39.03 with 25/10 hour floors), Maryland LBA licensure, and what intake should verify.',
    intro: [
      'For an intake team in Maryland, a UnitedHealthcare card means three layers at once: the carrier\'s national clinical policy, Maryland\'s habilitative-services mandate (Md. Code Ann., Insurance § 15-835, implemented by COMAR 31.10.39.03), and the plan\'s funding type deciding which of the two actually binds. UnitedHealthcare is the carrier that makes the Maryland layer easiest to enforce: Optum publishes a Maryland entry in its ABA State Mandates criteria that adopts the COMAR rules — hour floors included — for fully-insured plans. This guide stacks the layers in order.',
    ],
    atGlance: [
      { label: 'Covers ABA?', value: 'Yes — for ASD, per the national UnitedHealthcare policy' },
      { label: 'State mandate', value: 'Md. Ins. § 15-835 + COMAR 31.10.39.03 (habilitative services)' },
      { label: 'Mandate age', value: 'Through at least the month the enrollee turns 19; hour floors span 18 months–18 years' },
      { label: 'Mandate floors', value: 'No denial solely on hours up to 25 hrs/wk (18 mo–5 yrs) or 10 hrs/wk (6–18); no dollar cap' },
      { label: 'Optum MD criteria', value: 'Published — BH803ABA State Mandates applies COMAR 31.10.39.03 to MD fully-insured plans' },
      { label: 'Licensure', value: 'MD Licensed Behavior Analyst (Board of Professional Counselors & Therapists)' },
    ],
    sections: [
      {
        h2: 'The national policy, applied in Maryland',
        body: [
          'UnitedHealthcare administers ABA through Optum Behavioral Health as a two-step authorization on the Provider Express portal — assessment authorized first, then treatment — under Optum\'s Supplemental Clinical Criteria, with continued-service reviews every 4–6 months. That clinical policy is national — what changes in Maryland is the legal floor underneath it: the state mandate governs what fully-insured plans must cover, while self-funded employer plans answer to ERISA and federal parity instead. Plan funding type is therefore the first fact to establish on every benefits check. The full national policy breakdown lives in our UnitedHealthcare / Optum guide; this page covers what changes in Maryland.',
        ],
        cites: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      {
        h2: 'Optum\'s Maryland-specific criteria: COMAR, in the carrier\'s own document',
        body: [
          'Maryland has its own entry in Optum\'s ABA State Mandates supplemental criteria (BH803ABA): for fully-insured policies in Maryland, Optum directs reviewers to use the COMAR 31.10.39.03 criteria (April 3, 2014) in place of its standard medical-necessity rules. The document reproduces the Maryland requirements — comprehensive evaluation, physician prescription with treatment goals and annual prescriber review, the no-denial floors of 25 hours/week for ages 18 months–5 years and 10 hours/week for ages 6–18 (with more when medically necessary), school allowed as a service location (though not as an IEP/IDEA obligation), licensed delivery, and the rule that ABA may not be denied as experimental. Once the mandated benefits are exhausted, Optum reverts to its standard medical-necessity policy. For intake, this is leverage: on a fully-insured UHC plan, an hours reduction below the floors contradicts the carrier\'s own published criteria — cite the state-mandates document, not just the regulation.',
        ],
        cites: [
      { title: 'Optum BH803ABA — ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
        ],
      },
      {
        h2: 'The Maryland mandate underneath',
        body: [
          'The legal base: Maryland has no standalone autism mandate — ABA rides on the habilitative-services mandate, Insurance § 15-835, which requires Maryland-regulated insurers, nonprofit health service plans, and HMOs to cover habilitative services until at least the end of the month the enrollee turns 19, with the ABA-specific medical-necessity rules delegated to the Insurance Commissioner\'s regulation, COMAR 31.10.39.03. Carriers aren\'t required to reimburse services delivered through early intervention or the schools, and self-funded ERISA plans are exempt — for those members the Optum Maryland entry doesn\'t apply either, and MHPAEA parity is the fallback lever.',
        ],
        cites: [
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
        ],
      },
      {
        h2: 'UnitedHealthcare Medicaid in Maryland: the card that doesn\'t matter for ABA',
        body: [
          'A family saying "we have UnitedHealthcare" in Maryland may be on UnitedHealthcare Community Plan, a HealthChoice MCO — but that changes nothing for ABA. Maryland carves ABA out of the MCOs entirely: authorizations and claims go to Carelon Behavioral Health, the state\'s BHASO, under the Medicaid fee-for-service rules — use our Maryland Medicaid guide. One historical wrinkle worth knowing: Optum Maryland was the state\'s previous behavioral-health ASO before Carelon took over, so legacy Optum-branded Maryland ABA manuals still circulate — they are stale; Carelon\'s ProviderConnect is the current pipeline.',
        ],
        cites: [
      { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
      { title: 'MDH HealthChoice MCO Comparison Chart (UHC Community Plan roster entry)', url: 'https://health.maryland.gov/mmcp/healthchoice/Documents/hc-mco-comparison-chart.pdf' },
        ],
      },
      {
        h2: 'Licensure & rates in Maryland',
        body: [
          'Maryland has required licensure to practice behavior analysis since January 2015: the Licensed Behavior Analyst (LBA) credential, administered by the Behavior Analyst Advisory Committee of the State Board of Professional Counselors and Therapists (Health Occupations Title 17, Subtitle 6A; COMAR 10.58.16), built on current BACB certification, a qualifying master\'s degree, and a criminal-history check. On rates: UnitedHealthcare does not publish commercial ABA fee schedules for Maryland (none of the national carriers do) — rates are contract-negotiated and live in your participating-provider agreement. Maryland\'s Medicaid fee schedule (effective February 1, 2026 — e.g., 97153 at $24.41/15-min BCBA tier) is the public benchmark to negotiate against.',
        ],
        cites: [
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
        ],
      },
    ],
    collect: [
      { title: 'Plan funding type', desc: 'Fully insured (COMAR floors + Optum\'s MD criteria apply) vs. self-funded ERISA (exempt) — it decides which rulebook governs.' },
      { title: 'Line of business', desc: 'Commercial UHC vs. UnitedHealthcare Community Plan (Medicaid) — Medicaid ABA goes to Carelon, not UHC/Optum at all.' },
      { title: 'ABA prescription + goals', desc: 'COMAR requires a prescription with treatment goals from the PCP or a specialty physician, reviewed annually — capture the prescriber and date.' },
      { title: 'Member ID + card photo', desc: 'Enough to run a live benefits verification — the only reliable answer on limits and cost-sharing.' },
      { title: 'Diagnosis report + testing', desc: 'DSM-5-TR ASD diagnosis confirmed with a validated tool (ADI-R, ADOS-2, etc.) — Optum asks for the instrument.' },
    ],
    sources: [
      { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
      { title: 'Optum BH803ABA — ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' },
      { title: 'Md. Insurance Article § 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' },
      { title: 'MDH HealthChoice — Behavioral Health Coverage (carve-out)', url: 'https://health.maryland.gov/mmcp/healthchoice/Pages/BehavioralHealthCoverage.aspx' },
      { title: 'MDH Board of Professional Counselors & Therapists — Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' },
      { title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' },
      { title: 'MDH HealthChoice MCO Comparison Chart (UHC Community Plan roster entry)', url: 'https://health.maryland.gov/mmcp/healthchoice/Documents/hc-mco-comparison-chart.pdf' },
      { title: 'Optum — FAQ: Autism/ABA Using CPT Codes (BH00083-24-FAQ, 01/2024)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaCPT-FAQs.pdf' },
      { title: 'Optum — ABA Reimbursement Policy, Commercial (2022RP501A, updated 06/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/reimbPolicies/abaReimburs2020s.pdf' },
      { title: 'Optum — Telehealth Billing Quick Reference Guide (BH01511, updated September 2025)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/home/Telehealth_Billing_Guide_Updates.pdf' },
      { title: 'Optum — Medical Records Documentation for Reviews of ABA Services (BH02325, 6/1/2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/OBHS_ABA_Services_Documentation_Protocols.pdf' },
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum\'s Supplemental Clinical Criteria set supervision at 1\u20132 hours per 10 hours of direct treatment, with a floor of at least one hour of 97155 per case per month. In Maryland the supervising analyst must additionally hold the state Licensed Behavior Analyst credential, required to practice behavior analysis since January 2015.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'MDH Board of Professional Counselors & Therapists \u2014 Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' }],
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
          { title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' },
        ],
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered, which makes the school and IEP picture a coverage question rather than a background one. Optum\'s Maryland State Mandates entry goes further in the member\'s favour for fully-insured plans \u2014 it reproduces COMAR\'s allowance of school as a service location, while keeping IDEA/IEP obligations outside the benefit.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
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
      billAsProvider: {
        value:
          'Not published in the Supplemental Clinical Criteria. Optum authorizes by code cluster and names a QHP services cluster (97155\u201397158) distinct from the direct-care cluster (97153, 97154), which implies a credential split on the rendering line but does not state whose NPI carries a technician-delivered 97153 claim or which degree-level modifiers apply.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services or the authorization letter on Provider Express \u2014 confirm the rendering-versus-billing NPI convention and any required modifiers before the first claim.',
        blocker: 'per-case',
      },
    },
    intakeGates: {
      ageLimit: {
        value:
          'Two answers, and plan funding type picks between them. The carrier\'s national ABA policy states no age limit. Maryland\'s habilitative-services mandate does: for Maryland-regulated insurers, nonprofit health service plans and HMOs, habilitative services must be covered \u201cuntil at least the end of the month the enrollee turns 19,\u201d and COMAR 31.10.39.03 pins its no-denial hour floors to age bands \u2014 up to 25 hours/week for ages 18 months through 5 years and up to 10 hours/week for ages 6 through 18, with more when medically necessary. Self-funded ERISA plans are exempt from all of it, so establish funding type before quoting either bound.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — ask whether the plan is Maryland-regulated (an insurer, nonprofit health service plan or HMO, which the habilitative-services mandate and COMAR 31.10.39.03 age bands reach) or a self-funded ERISA plan (exempt). If it is self-funded, ask what age limit and weekly hour limit the plan document sets for ABA before you quote either bound to the family.',
        blocker: 'per-case',
      },
      dxRecency: {
        value:
          'Optum publishes no recency rule for the ASD diagnosis in its Supplemental Clinical Criteria as cited here; what it does set is a review cadence downstream \u2014 continued-service reviews every 4\u20136 months requiring updated standardized adaptive measures and progress measured the same way as baseline.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services or the assessment-authorization request on Provider Express \u2014 ask whether an evaluation of this age will be accepted before scheduling.',
        blocker: 'per-case',
      },
      diagnosingProviders: {
        value:
          'A DSM-5-TR autism spectrum diagnosis from a state-licensed physician, psychologist, or other qualified clinician. Optum asks for the diagnosing clinician and the instrument at the assessment-authorization step, so both are intake fields.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      diagnosticTools: {
        value:
          'The diagnosis must be confirmed with at least one clinically validated tool. Optum names first-level instruments \u2014 the ADI-R, the ADOS-2 and the DISCO \u2014 and accepts second-level tools including the CARS-2, the RITA-T and the STAT. Capture which instrument was used, by whom and when; \u201cdiagnosed by Dr. X\u201d without a named tool is the most common reason an Optum assessment request stalls.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      referral: {
        value:
          'On a fully-insured Maryland plan, yes \u2014 and it is a prescription, not a note. COMAR 31.10.39.03 conditions the mandated benefit on a comprehensive evaluation, a prescription with treatment goals from the PCP or a specialty physician, and annual review by the prescriber. Capture the prescriber and the prescription date at intake, and diary the annual renewal: a lapsed prescription is a coverage problem, not a paperwork one. Self-funded ERISA plans are outside the mandate, and for those the carrier\'s own authorization requirements are the only gate.',
        status: 'plan-dependent',
        cites: [{ title: 'Md. Insurance Article \u00a7 15-835 (Maryland General Assembly)', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-835&enactments=false' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
        verifyVia: 'Benefits verification on the specific plan, via the payer portal or the number on the member’s card — confirm funding type first. On a Maryland-regulated plan, capture the prescriber and prescription date and diary the annual prescriber review COMAR 31.10.39.03 requires. On a self-funded ERISA plan, ask the carrier whether it requires a referral or prescription at all, since the mandate does not reach it and only the carrier’s own authorization rules apply.',
        blocker: 'per-case',
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
          'UHC notifies coverage decisions “within the time required by law,” so the clock depends on how the plan is funded. If the child’s plan is fully insured in Maryland, Insurance §15-10B-06 sets the clock: an initial request is decided “within 2 working days after receipt of the information necessary to make the determination,” “additional visits or days of care submitted as part of an existing course of treatment or treatment plan within 1 working day,” emergency requests within 24 hours, and a reviewer missing information must say so within 3 calendar days. Maryland’s teeth: “If a private review agent fails to make a determination within the time limits required under this section, the request shall be deemed approved.” Mental-health treatment plans must be accepted on the MIA uniform treatment plan form. If the employer self-funds, ERISA’s floor applies instead: pre-service decisions “not later than 15 days after receipt of the claim” (one 15-day extension allowed), urgent claims within 72 hours. Optum (UHC’s behavioral arm) sets the reauth window: call the ABA/Autism queue “no more than 30 days prior to the current approvals on file expiring,” with all clinical information ready; retrospective reviews take up to 30 calendar days.',
        status: 'plan-dependent',
        cites: [{ title: '2026 UnitedHealthcare Care Provider Administrative Guide (eff. April 1, 2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' }, { title: 'Md. Code, Insurance §15-10B-06 — private review agent determinations', url: 'https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gin&section=15-10B-06&enactments=false' }, { title: 'eCFR — 29 CFR 2560.503-1(f)(2), ERISA claims procedure timeframes', url: 'https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XXV/subchapter-F/part-2560/section-2560.503-1' }, { title: 'Optum — FAQ Autism/ABA Using CPT Codes', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }, { title: 'Optum National Network Manual (eff. Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' }],
        verifyVia: 'the member services or behavioral health number on the ID card — ask whether the plan is fully insured (and in which state) or self-funded, and for its UM decision timeframes',
        blocker: 'per-case',
      },
      coordinationOfBenefits: {
        value:
          'UHC administers COB “according to the member’s benefit plan and in accordance with law.” Optum: “You are responsible for determining if the member has other insurance coverage. If so, you should bill the primary insurance carrier first, then notify Optum of your findings”; as secondary, payment goes up to Optum’s contracted rate and you may not balance-bill. Maryland has not yet adopted a COB regulation: the Insurance Administration says contract COB provisions “have historically been reviewed for consistency with the NAIC Model, but the Model has not been formally adopted to date,” and its draft COMAR 31.10.53 (comments closed August 2026) would codify the NAIC birthday rule (“The plan of the parent whose birthday falls earlier in the calendar year is the primary plan”) and exclude Medicaid from the definition of a plan — so Maryland Medicaid always pays after the commercial plan.',
        status: 'plan-dependent',
        cites: [{ title: '2026 UnitedHealthcare Care Provider Administrative Guide (eff. April 1, 2026)', url: 'https://www.uhcprovider.com/content/dam/provider/docs/public/admin-guides/2026-UHC-Administrative-Guide.pdf' }, { title: 'Optum National Network Manual (eff. Sept. 1, 2026)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/adminResourcesMain/netwmanual/NNManual.pdf' }, { title: 'Maryland Insurance Administration — Regulatory Activity (NAIC COB model not yet adopted)', url: 'https://insurance.maryland.gov/Pages/newscenter/RegulatoryActivity.aspx' }, { title: 'MIA draft COMAR 31.10.53 Coordination of Benefits (posted July 2026)', url: 'https://insurance.maryland.gov/Documents/newscenter/legislativeinformation/3.10.53-Draft-712026.pdf' }],
        verifyVia: 'the carrier’s eligibility response (Availity or the ID-card number) for an other-insurance record, and both parents’ birth dates and custody arrangements at intake; a self-funded plan follows its own plan document',
        blocker: 'per-case',
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Maryland?', a: 'Yes — under Optum\'s national two-step authorization policy for ASD, and for fully-insured Maryland plans Optum\'s own State Mandates document applies the COMAR 31.10.39.03 criteria, including the 25 and 10 hour/week no-denial floors. Self-funded employer plans follow the standard national policy instead.' },
      { q: 'What does the Maryland mandate require for ABA?', a: 'For fully-insured plans: habilitative-services coverage through at least the month the enrollee turns 19, no denial of ABA solely on prescribed hours up to 25 hrs/week (ages 18 months–5) or 10 hrs/week (ages 6–18), no experimental/investigational denials, and no dollar cap — entered via a comprehensive evaluation plus a physician prescription reviewed annually. Optum reproduces these criteria in its own published document.' },
      { q: 'What does UnitedHealthcare pay for ABA in Maryland?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against Maryland Medicaid\'s February 2026 fee schedule and treat rate-setting as part of contracting.' },
      { q: 'How often does UnitedHealthcare (Optum) reauthorize ABA?', a: 'Optum, which manages UnitedHealthcare’s behavioral health benefits, says “At a minimum, most treatment reviews are required every 4-6 months depending on the account/state law.” Call in the continued-care request “no more than 30 days prior to the current approvals on file expiring,” with updated progress data measured the same way as baseline and updated standardized measures. There is no fixed reassessment frequency (“There is no required frequency at which an assessment must take place”) — ask for reassessment hours inside the treatment request. If more hours are needed mid-authorization, call the ABA team with a clinical rationale.' },
    ],
  },
};

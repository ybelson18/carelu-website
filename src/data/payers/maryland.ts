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
      { label: 'Diagnosis recency', value: 'No fixed expiry — but a Clinical Confirmation Form may be required, depending on age at diagnosis and time since' },
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
      { title: 'Diagnosis date + child\'s age at diagnosis', desc: 'Determines whether Carelon will require a Clinical Confirmation Form before authorizing.' },
      { title: 'Home/community setting picture', desc: 'Services must be home/community-based — clinic delivery needs individualized COMAR justification; capture where care will actually happen.' },
      { title: 'School status (age 6+)', desc: 'Participants over 6 should be in school with an IEP; school-based ABA is short-term only and an RBT can\'t be a 1:1 aide.' },
    ],
    sources: [
      { title: 'MDH ABA Provider Manual (eff. Feb 1, 2026) — incl. fee schedule', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' },
      { title: 'MDH Applied Behavior Analysis program page', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/pages/home.aspx' },
      { title: 'PT 42-26 — ABA combination-of-service update + H2012 discontinuation', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT42-26_Updates_to_ABA_Combination_of_Service_Rules__and_Discontinuation_of_H2012.pdf' },
      { title: 'PT 60-26 — ABA Transmittal No. 9: Updates to ABA Telehealth (eff. 4/1/2026)', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT60-26_Updates_to_ABA_Telehealth.pdf' },
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
          'No fixed expiry date on the Comprehensive Diagnostic Evaluation \u2014 but there is a conditional re-confirmation. The manual defines a Clinical Confirmation Form as \u201ca form to be completed by a QHCP to confirm a participant continues to meet the criteria for Autism Spectrum Disorder,\u201d and notes that \u201cthe need for the form is dependent on age of participant at time of ASD diagnosis and amount of time since that diagnosis was given.\u201d So capture the diagnosis date and the child\'s age at diagnosis at intake, not just the diagnosis: those two facts decide whether Carelon will ask for a CCF before authorizing.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
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
          'Required, and it is part of the CDE rather than a separate note. The QHCP\'s comprehensive diagnostic evaluation must result \u201cin a referral for ABA therapy services,\u201d and the BHASO \u201cwill only authorize ABA services if a QHCP completes a CDE and prescribes medically necessary ABA services.\u201d Access to the benefit additionally requires that the participant be under 21, reside in a home/community setting and carry a confirmed ASD diagnosis. Every ABA service is prior-authorized by Carelon \u2014 assessment included \u2014 and authorizations run a maximum of 180 days.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }],
      },
      telehealth: {
        value:
          'A short list, and no longer a full-time option. Only three services may be rendered by two-way audio-visual telehealth: direct supervision of a BCaBA/RBT/BT (97155), parent training (97156 and 97156-U2) and group parent training (97157). Direct 97153 treatment is not on the telehealth list at all, and \u201cservices rendered by mail or telephone\u201d are expressly non-billable, so audio-only is out. Bill with the GT modifier and Place of Service 11, and attach the Telehealth Readiness Checklist to the treatment plan \u2014 a required element for any 97155, 97156 or 97157 telehealth request since October 16, 2023. Effective April 1, 2026, PT 60-26 ends 100 percent telehealth delivery for those three codes: at least 25 percent must be rendered in person, with up to 75 percent by telehealth. Telehealth that does not meet COMAR 10.09.49 may not be billed.',
        status: 'verified',
        cites: [{ title: 'MDH ABA Provider Manual (eff. Feb 1, 2026)', url: 'https://health.maryland.gov/mmcp/epsdt/ABA/Documents/ABA%20Provider%20Manual%202_1_26%20(2).pdf' }, { title: 'PT 60-26 \u2014 ABA Transmittal No. 9: Updates to ABA Telehealth (eff. 4/1/2026)', url: 'https://health.maryland.gov/mmcp/provider/Documents/transmittals/PT60-26_Updates_to_ABA_Telehealth.pdf' }],
      },
    },
    faq: [
      { q: 'Does Maryland Medicaid cover ABA therapy?', a: 'Yes — for children under 21 with a confirmed ASD diagnosis, under the EPSDT benefit (COMAR 10.09.28). Every ABA service requires prior authorization from Carelon Behavioral Health, the state\'s BHASO, with authorizations running up to 180 days.' },
      { q: 'Which Maryland Medicaid MCO should we contact for ABA?', a: 'None of them. ABA is carved out of all nine HealthChoice MCOs and paid fee-for-service through Carelon. Authorizations go through ProviderConnect, claims through Availity — the MCO on the family\'s card never touches ABA.' },
      { q: 'What does Maryland Medicaid pay for ABA?', a: 'Per the fee schedule effective February 1, 2026: 97153 direct treatment pays $24.41/15-min unit at the BCBA tier, $20.91 BCaBA, $19.17 RBT/BT; 97151 assessment and 97155 pay $38.34; 97156 parent training pays $20.91 without the child present or $38.34 with (billed 97156-U2).' },
      { q: 'Is an autism diagnosis required for Maryland Medicaid ABA?', a: 'Yes — a confirmed ASD diagnosis (F84.0, F84.5, F84.8, or F84.9) made through a Comprehensive Diagnostic Evaluation by a qualified health care provider, plus a referral. Depending on the child\'s age at diagnosis and time elapsed, a Clinical Confirmation Form may also be required.' },
      { q: 'Can Maryland Medicaid ABA be delivered 100% by telehealth?', a: 'Not for 97155 (RBT/BCaBA/BT supervision), 97156/97156-U2 (parent training), or 97157 (group parent training) — effective April 1, 2026, PT 60-26 ("ABA Transmittal No. 9") requires at least 25% of those three services to be rendered in person, with up to 75% allowed via telehealth. Direct 97153 treatment was never on the telehealth list at all.' },
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
      value: 'Required — step 2 (treatment auth); reviews every 4–6 months',
      status: 'verified',
      cites: [
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
    ],
    deliveryRules: {
      supervision: {
        value:
          'Optum\'s Supplemental Clinical Criteria set supervision at 1\u20132 hours per 10 hours of direct treatment, with a floor of at least one hour of 97155 per case per month. In Maryland the supervising analyst must additionally hold the state Licensed Behavior Analyst credential, required to practice behavior analysis since January 2015.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'MDH Board of Professional Counselors & Therapists \u2014 Behavior Analyst License', url: 'https://health.maryland.gov/bopc/pages/analysts.aspx' }],
      },
      concurrentBilling: {
        value:
          'Permitted in three named pairs: supervision alongside direct care (97153 + 97155), group oversight (97154 + 97155), and parent training alongside direct care (97153 + 97156). Not covered at all: team meetings without the member present, 1:1 classroom aides, and services owed under IDEA.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
      },
      dailyLimits: {
        value:
          'Optum does not authorize against a per-day unit ceiling; it authorizes in four code clusters \u2014 assessment (97151, 97152), direct care (97153, 97154), multi-staff (0362T, 0373T) and QHP services (97155\u201397158) \u2014 and units flex within a cluster without a new authorization. The number that actually bites runs the other way: utilization below 80 percent of authorized hours over a two-week window draws scrutiny at review.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'The authorization letter itself on Provider Express, and Optum provider services \u2014 ask whether any per-day MUE applies to this plan on top of the cluster structure.',
        blocker: 'per-case',
      },
      placeOfService: {
        value:
          'Optum\'s exclusions are the operative setting rule: team meetings without the member, 1:1 classroom aides, and any service owed under IDEA are not covered, which makes the school and IEP picture a coverage question rather than a background one. Optum\'s Maryland State Mandates entry goes further in the member\'s favour for fully-insured plans \u2014 it reproduces COMAR\'s allowance of school as a service location, while keeping IDEA/IEP obligations outside the benefit.',
        status: 'verified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }, { title: 'Optum BH803ABA \u2014 ABA State Mandates supplemental criteria (Maryland entry)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/guidelines/scc/ABA_SCC_SM.pdf' }],
      },
      noteSignature: {
        value:
          'Not published in the Supplemental Clinical Criteria. What Optum specifies is the review packet rather than the session note: continued-service reviews every 4\u20136 months want progress documented per targeted behavior using the same measurement methods as baseline, mastered-program rates, change scores and updated standardized adaptive measures. Who signs an individual session note, and by when, is not stated.',
        status: 'unverified',
        cites: [{ title: 'Optum ABA Supplemental Clinical Criteria (BH803ABASCC)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaSCC.pdf' }],
        verifyVia: 'Optum provider services, or your Provider Express network manager \u2014 ask for the documentation standard applied at audit.',
        blocker: 'per-case',
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
        value:
          'Gated on the provider, not just the code. Tele-supervision and virtual family training require the provider to be an approved Optum virtual-visits provider with a completed attestation on Provider Express, and the authorization itself must note virtual delivery. Optum frames telehealth as a supplement to in-person care rather than a replacement for it, so a request built mostly on remote hours should expect pushback.',
        status: 'verified',
        cites: [{ title: 'Optum ABA FAQ (Provider Express)', url: 'https://public.providerexpress.com/content/dam/ope-provexpr/us/pdfs/clinResourcesMain/autismABA/abaFAQ.pdf' }],
      },
    },
    faq: [
      { q: 'Does UnitedHealthcare cover ABA therapy in Maryland?', a: 'Yes — under Optum\'s national two-step authorization policy for ASD, and for fully-insured Maryland plans Optum\'s own State Mandates document applies the COMAR 31.10.39.03 criteria, including the 25 and 10 hour/week no-denial floors. Self-funded employer plans follow the standard national policy instead.' },
      { q: 'What does the Maryland mandate require for ABA?', a: 'For fully-insured plans: habilitative-services coverage through at least the month the enrollee turns 19, no denial of ABA solely on prescribed hours up to 25 hrs/week (ages 18 months–5) or 10 hrs/week (ages 6–18), no experimental/investigational denials, and no dollar cap — entered via a comprehensive evaluation plus a physician prescription reviewed annually. Optum reproduces these criteria in its own published document.' },
      { q: 'What does UnitedHealthcare pay for ABA in Maryland?', a: 'Commercial ABA rates are not published — they are negotiated in your participating-provider agreement. Benchmark against Maryland Medicaid\'s February 2026 fee schedule and treat rate-setting as part of contracting.' },
    ],
  },
};

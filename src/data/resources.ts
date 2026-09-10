/* ================================================================
   RESOURCE / BoFu PAGE CONFIGS
   Intent-matched articles for the small-but-real keyword cluster
   (aba waitlist management, client intake process, intake forms,
   intake drop-off). Add a page by adding an object + it's live at
   /resources/<slug> and should be added to sitemap.xml + llms.txt.
   ================================================================ */

export interface ResourceListItem { title: string; desc: string }
export interface ResourceSection {
  h2: string;
  body?: string[];          // paragraphs
  list?: ResourceListItem[]; // optional card list under the paragraphs
  table?: ResourceTable;    // optional wide data table under the paragraphs
  rules?: ResourceRule[];   // optional when/then rule list
  downloads?: ResourceDownload[]; // optional template packs for this section
}
export interface ResourceFaq { q: string; a: string }
/* A downloadable file: the page-level `download` card, or per-section
   template packs rendered under that section's table. */
export interface ResourceDownload { label: string; file: string; blurb: string }
/* Generic data table for a section. `chipCol` renders that column as a
   status pill (Always / Usually / Conditional / Rare, Required / Not
   required / Varies); a row's `href` links its first cell. */
export interface ResourceTableRow { cells: string[]; href?: string }
export interface ResourceTable {
  cols: string[];
  rows: ResourceTableRow[];
  chipCol?: number;
  note?: string;
  minWidth?: number;
}
/* Templated "show this document when…" rules. */
export interface ResourceRule { when: string; then: string }
export interface ResourceCompareRow { step: string; manual: string; carelu: string }
export interface ResourceConfig {
  slug: string;
  pill: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ResourceSection[];
  download?: ResourceDownload;
  faq: ResourceFaq[];
  // Optional "manual benchmark vs Carelu" comparison, rendered near the end.
  compareTitle?: string;
  compareIntro?: string;
  compare?: ResourceCompareRow[];
  ctaHeadline: string;
  ctaSub: string;
}

export const resources: Record<string, ResourceConfig> = {
  'aba-waitlist-management': {
    slug: 'aba-waitlist-management',
    pill: 'Guide · Waitlist Management',
    h1: 'ABA waitlist management: keep families engaged, not waiting.',
    metaTitle: 'ABA Waitlist Management: The Complete Guide | Carelu',
    metaDescription:
      'How ABA providers keep waitlisted families engaged, verified, and ready to start — instead of losing them to the first competitor with an opening. Free checklist included.',
    intro: [
      'Most ABA waitlists are where families go to disappear. A parent calls, gets told "we\'ll reach out when a spot opens," and then hears nothing for weeks. By the time you call back, they\'ve started with another provider — because every family on your waitlist is on three other waitlists too.',
      'Waitlist management isn\'t a spreadsheet problem. It\'s a communication and readiness problem: the providers who convert their waitlist treat it as a pipeline of families being actively prepared to start, not a queue of names waiting their turn.',
    ],
    sections: [
      {
        h2: 'Why ABA waitlists leak',
        body: [
          'Between diagnosis and first session, a family is at their most motivated — and their most impatient. Industry drop-off between first inquiry and first appointment commonly runs 40–85%. Three leaks account for almost all of it:',
        ],
        list: [
          { title: 'Silence', desc: 'No touchpoint between "you\'re on the list" and "a spot opened." Families read silence as rejection and keep shopping.' },
          { title: 'Unreadiness', desc: 'A spot opens, but the family\'s insurance was never verified and documents were never collected — so the opening sits empty for weeks while paperwork catches up.' },
          { title: 'Stale data', desc: 'By the time you call, the phone number changed, availability changed, or the child already started elsewhere. Nobody knew, because nobody asked.' },
        ],
      },
      {
        h2: 'What good waitlist management looks like',
        body: [
          'The goal is simple to state: when a spot opens, the next family should be able to start within days, not weeks. That takes four habits:',
        ],
        list: [
          { title: 'Verify eligibility at intake, not at opening', desc: 'Run insurance verification the day a family joins the waitlist. Families who won\'t clear benefits shouldn\'t age on your list for months first.' },
          { title: 'Collect documents up front', desc: 'Diagnosis report, insurance card, consents, availability — gather them while motivation is highest, the week the family first reaches out.' },
          { title: 'Touch every family on a cadence', desc: 'A short check-in every 2–3 weeks: position update, document nudges, availability confirmation. It keeps data fresh and tells families you haven\'t forgotten them.' },
          { title: 'Rank by readiness, not just date', desc: 'The next spot should go to the family who is verified, documented, and schedulable — order of arrival matters, but readiness decides who can actually start.' },
        ],
      },
      {
        h2: 'The metrics that matter',
        body: [
          'If you track nothing else, track these four: waitlist-to-start conversion rate (what share of waitlisted families ever begin services), time from opening to first session, share of the list that is "start-ready" (verified + documented), and contact freshness (when each family was last touched). A healthy list is above 60% start-ready with no family untouched for more than a month.',
        ],
      },
      {
        h2: 'Where automation fits',
        body: [
          'Everything above is rote, repetitive, and time-sensitive — which is exactly what front-office staff don\'t have hours for, and exactly what software does well. An AI intake platform like Carelu answers every new inquiry instantly, verifies insurance up front, collects documents while the family is motivated, and keeps every waitlisted family warm with automatic check-ins — so when a spot opens, the next family is ready to start, not ready to be chased.',
        ],
      },
    ],
    download: {
      label: 'Download the free ABA intake checklist (PDF)',
      file: '/downloads/aba-intake-checklist.pdf',
      blurb: 'Every step from first contact to first session — printable, and free to adapt for your practice.',
    },
    faq: [
      {
        q: 'How long is a typical ABA waitlist?',
        a: 'Anywhere from weeks to over a year depending on region and staffing. Length matters less than leakage: a six-month list that stays engaged converts better than a six-week list that goes silent.',
      },
      {
        q: 'How often should we contact waitlisted families?',
        a: 'Every two to three weeks, briefly. Confirm availability, nudge missing documents, and share their status. Less than monthly and families assume they\'ve been forgotten.',
      },
      {
        q: 'Should we verify insurance before or after a spot opens?',
        a: 'Before — the day they join the list. Verification at opening adds weeks of delay to every start and lets ineligible families age on the list.',
      },
    ],
    ctaHeadline: 'Your waitlist, working itself.',
    ctaSub: 'Carelu keeps every waitlisted family verified, documented, and warm — automatically. See it live on your own intake.',
  },

  'aba-client-intake-process': {
    slug: 'aba-client-intake-process',
    pill: 'Guide · Intake Process',
    h1: 'The ABA client intake process, step by step.',
    metaTitle: 'ABA Client Intake Process: Step-by-Step Guide | Carelu',
    metaDescription:
      'The complete ABA intake process — from first contact to first session — with benchmarks, a full document library with state-by-state requirements, and templated rules for when to ask for each document.',
    intro: [
      'Intake is the funnel every ABA practice lives or dies by, and most practices have never mapped theirs. A family reaches out; days or weeks later they either start services with you — or with whoever answered first. Everything between those two moments is the intake process.',
      'Here is the full sequence, what belongs at each step, and where families are most likely to disappear — followed by the full document library: every document an ABA intake might need, how often it is really required, what changes state to state, and the conditions that decide whether a family should ever be asked for it.',
    ],
    sections: [
      {
        h2: 'Step 1 — First contact (the first five minutes)',
        body: [
          'A parent calls, chats, texts, or submits a form — usually after contacting several providers in one sitting. Speed decides this step: families overwhelmingly start with the provider who responds first with something substantive. Answer instantly, capture the essentials (child\'s age, diagnosis status, insurance, zip code, availability), and set the expectation for what happens next. If first response takes longer than a few minutes — or the call hits voicemail — assume a competitor has them.',
        ],
      },
      {
        h2: 'Step 2 — Qualification & insurance verification',
        body: [
          'Verify benefits before anything else moves: payer, plan, ABA coverage, deductible status, and whether you\'re in network. Practices that verify up front stop wasting assessment slots on families who can\'t clear benefits — and stop losing eligible families to the multi-week "we\'re checking your insurance" black hole. Target: verification complete within 24–48 hours of first contact.',
        ],
      },
      {
        h2: 'Step 3 — Documents & consents',
        body: [
          'The diagnosis report, insurance card, intake packet, and consent signatures. This is the step where momentum goes to die — long PDF packets, printer-and-scanner requests, and week-long email silences. Collect digitally, in small pieces, with automatic reminders. A family should be able to finish the packet on their phone the same week they first called.',
        ],
      },
      {
        h2: 'Step 4 — Assessment scheduling',
        body: [
          'Book the initial assessment while the family is engaged — ideally on the very first interaction, contingent on verification clearing. Every additional day between "you qualify" and a scheduled date measurably increases no-shows and dropouts.',
        ],
      },
      {
        h2: 'Step 5 — Authorization & onboarding',
        body: [
          'After the assessment: submit the auth request, track it against payer timelines, and keep the family informed while they wait. Then convert the authorization into a real schedule — team assignment, session times, and a clear first-day experience. Silence during the auth wait is the last big drop-off point; a weekly one-line status update largely eliminates it.',
        ],
      },
      {
        h2: 'The benchmarks to hold yourself to',
        list: [
          { title: 'First response', desc: 'Under 5 minutes, any hour a family might reach out — including evenings and weekends, when a large share of inquiries arrive.' },
          { title: 'Insurance verified', desc: 'Within 24–48 hours of first contact.' },
          { title: 'Documents complete', desc: 'Within one week of first contact.' },
          { title: 'Inquiry to first appointment', desc: 'Under two weeks wherever auth timelines allow. Every week added costs measurable conversion.' },
        ],
      },
      {
        h2: 'The documents: what to collect, and how often you really need it',
        body: [
          'Ask ten practices for their intake packet and you get ten different stacks of paper, but the underlying set is remarkably consistent. What differs is which documents apply to which family, and that is the part most packets get wrong: everyone is asked for everything, so most families are asked for things they do not have and do not need.',
          'The tables below are the full set, grouped the way an intake form should be grouped. "How often needed" is the honest frequency across payers and states, not a policy claim about any one plan. The trigger column is the condition that should decide whether a family ever sees the question at all.',
        ],
        table: {
          cols: ['Document', 'What it is for', 'How often needed', 'Ask for it when'],
          chipCol: 2,
          minWidth: 860,
          rows: [
            { cells: ['Insurance card, front and back', 'Member ID, group number, the payer name families often get wrong, and the behavioral-health number printed on the reverse.', 'Always', 'Every insured family, at first contact. Hide the whole block for private pay.'] },
            { cells: ['Consent to treat / service agreement', 'The legal authority to assess and treat, and the terms of service.', 'Always', 'Before the assessment. Signed by whoever holds consent authority, which is not always the caller.'] },
            { cells: ['Notice of privacy practices acknowledgement', 'Documents that HIPAA privacy practices were provided to the family.', 'Always', 'With the consent packet. Acknowledgement only, never a gate on scheduling.'] },
            { cells: ['Communication consent (email and text)', 'Permission to send reminders, status updates, and document requests.', 'Always', 'At first contact, before any automated follow-up runs.'] },
            { cells: ['Financial responsibility acknowledgement', 'Deductible, coinsurance, private-pay rates, and no-show terms in writing.', 'Always', 'After verification returns real cost-share numbers, not before.'] },
            { cells: ['Release of information', 'Lets you exchange records with the diagnosing clinician, the pediatrician, the school, and other therapies.', 'Usually', 'The moment a family names an outside provider you will need records from.'] },
            { cells: ['Photo ID of the responsible party', 'Confirms who is signing and who the plan lists as the subscriber.', 'Conditional', 'When the subscriber is not the child’s parent, or the names on the card and the intake do not match.'] },
          ],
        },
        downloads: [
          {
            label: 'Consent & authorization templates (PDF)',
            file: '/downloads/aba-consent-packet-templates.pdf',
            blurb: 'Five one-page templates: consent to treat and service agreement, privacy acknowledgement, communication consent for email and text, financial responsibility, and a release of information. Bracketed placeholders throughout — swap in your practice and use them.',
          },
        ],
      },
      {
        h2: 'Clinical documents',
        body: [
          'This group decides whether the child is eligible and whether the authorization gets approved. It is also where intake stalls: the evaluation lives in a parent’s email from eighteen months ago, or with a diagnosing clinician who has not answered a records request in three weeks.',
        ],
        table: {
          cols: ['Document', 'What it is for', 'How often needed', 'Ask for it when'],
          chipCol: 2,
          minWidth: 860,
          rows: [
            { cells: ['Comprehensive diagnostic evaluation', 'The report the payer actually reads: diagnosing clinician and credentials, instrument used, date, and severity level.', 'Always', 'Every family. It is the single most-requested document in ABA intake and the most common reason a start slips.'] },
            { cells: ['Diagnosis letter or script', 'A short signed statement of the diagnosis, accepted in place of a full evaluation by some programs.', 'Conditional', 'In states and plans that accept a physician or psychologist statement instead of a full evaluation.'] },
            { cells: ['Physician referral or written order for ABA', 'An independent referral that is itself the eligibility gate in several states, separate from the diagnosis.', 'Conditional', 'Wherever the state or plan gates the benefit on a referral. Pair it with a way to request it from the doctor directly.'] },
            { cells: ['Standardized instrument scoring reports', 'Complete scoring reports (adaptive behavior and behavior-rating scales) that some plans require inside the authorization package.', 'Conditional', 'When the payer names the instruments. Usually your own assessment produces these, occasionally the outside evaluator’s.'] },
            { cells: ['Medical history and current medications', 'Clinical intake, safety planning, and coordination with prescribers.', 'Usually', 'Before the assessment for every family; treat as required for center-based placements.'] },
            { cells: ['Recent physical exam or well-child form', 'Licensing and program requirements for a child attending a center.', 'Conditional', 'Center-based and school-based placements only. Never ask an in-home family for it.'] },
            { cells: ['Immunization record', 'Required where the site is licensed as a childcare or day facility.', 'Conditional', 'Center-based placements, in states where the site license requires it.'] },
            { cells: ['Other therapy documentation (speech, OT, PT)', 'The plan of care has to document coordination with everything else the child receives.', 'Usually', 'Once a family names another active therapy. Ask for the provider’s name first, the document second.'] },
            { cells: ['Prior ABA records: discharge summary, last treatment plan, prior authorization', 'Shows hours already used against annual or lifetime caps and can save a duplicate assessment.', 'Conditional', 'When the family says the child has had ABA before, including a program they left.'] },
          ],
        },
        downloads: [
          {
            label: 'Records request templates (PDF)',
            file: '/downloads/aba-records-request-templates.pdf',
            blurb: 'Four templates for the documents you do not have yet: a records request to the diagnosing clinician, a fax cover sheet, a referral and order request for the physician to sign and return, and a short diagnosis confirmation form.',
          },
        ],
      },
      {
        h2: 'Coverage documents',
        body: [
          'Most of this group should be invisible to most families. Each row is triggered by something the family already told you during verification, which is why asking for all of it up front reads as bureaucratic and costs completion.',
        ],
        table: {
          cols: ['Document', 'What it is for', 'How often needed', 'Ask for it when'],
          chipCol: 2,
          minWidth: 860,
          rows: [
            { cells: ['Medicaid ID or eligibility letter', 'Which program the child is on decides the entire authorization path.', 'Conditional', 'When a family names Medicaid but cannot produce a card.'] },
            { cells: ['Managed-care plan enrollment letter', 'Names the plan administering the benefit. Families frequently name the wrong one.', 'Conditional', 'In states where Medicaid runs through multiple managed-care plans.'] },
            { cells: ['Secondary insurance card', 'A second plan changes verification, the billing order, and often the family’s out-of-pocket entirely.', 'Conditional', 'Only after a family answers yes to "any other coverage?" Never show it by default.'] },
            { cells: ['Coordination of benefits form', 'Payers hold claims until coordination of benefits is on file.', 'Conditional', 'Same trigger as the secondary card, and any time verification flags an unresolved other-coverage record.'] },
            { cells: ['Waiver or state program paperwork', 'Funds services outside the medical benefit, or covers what the plan will not.', 'Conditional', 'When the family names a waiver or program, or where the state pathway effectively requires one.'] },
            { cells: ['Denial or appeal letters', 'Tells you what a payer already refused, and why, before you request the same thing.', 'Rare', 'When a family reports a previous denial, at this practice or another.'] },
            { cells: ['Employer plan documents (summary of benefits)', 'Self-funded employer plans are not bound by state autism mandates.', 'Rare', 'Only when verification comes back ambiguous on funding type.'] },
          ],
        },
      },
      {
        h2: 'Consent and custody: who is allowed to sign',
        body: [
          'The quietest source of rework in ABA intake is a signed consent from someone without the authority to sign it. Ask about the household structure early and let the answer decide which of these appear.',
        ],
        table: {
          cols: ['Document', 'What it is for', 'How often needed', 'Ask for it when'],
          chipCol: 2,
          minWidth: 860,
          rows: [
            { cells: ['Custody order or parenting plan', 'Establishes which parent can consent to treatment and receive records.', 'Conditional', 'When the family reports separated or divorced parents, or two households on the intake.'] },
            { cells: ['Guardianship or conservatorship order', 'Names the person who can legally sign for an adult client or a court-supervised minor.', 'Conditional', 'When the client is 18 or older, or the family reports an appointed guardian.'] },
            { cells: ['Foster placement letter or agency consent authority', 'Says who may consent for a child in state custody, which is rarely the person calling.', 'Conditional', 'When a caregiver or caseworker reports foster care or state custody.'] },
            { cells: ['Power of attorney or authorized representative form', 'Lets someone other than a parent sign paperwork and speak to the plan.', 'Rare', 'When the person completing intake is neither parent nor guardian.'] },
          ],
        },
        downloads: [
          {
            label: 'Consent authority templates (PDF)',
            file: '/downloads/aba-consent-authority-templates.pdf',
            blurb: 'Three templates for the households where the person calling may not be the person who can sign: a consent authority attestation, an authorized representative designation, and a foster care and agency consent record.',
          },
        ],
      },
      {
        h2: 'Setting documents: home, center, school, telehealth',
        body: [
          'Where services happen decides this whole group. A single question about setting, asked early, removes six to eight irrelevant document requests from most families’ forms.',
        ],
        table: {
          cols: ['Document', 'What it is for', 'How often needed', 'Ask for it when'],
          chipCol: 2,
          minWidth: 860,
          rows: [
            { cells: ['IEP, IFSP, or 504 plan', 'Belongs in the authorization package in several states, and sets the school hours you cannot double-count.', 'Conditional', 'School-age or early-intervention children, and any school-based placement.'] },
            { cells: ['School schedule or enrollment verification', 'Several states weigh school hours against the ABA hours you request.', 'Conditional', 'School-age children in states that count school hours.'] },
            { cells: ['School district authorization', 'Permission to be in the building and to deliver billable hours there.', 'Conditional', 'School-based settings only.'] },
            { cells: ['Telehealth consent', 'A separate consent from the general consent to treat in most states.', 'Conditional', 'Only when telehealth is on the service list for that family.'] },
            { cells: ['Home address verification and safety attestation', 'Who is in the home, access, pets, and anything a technician should know before the first visit.', 'Conditional', 'In-home services only.'] },
            { cells: ['Electronic visit verification acknowledgement', 'Visit verification is mandatory for home and community Medicaid services.', 'Conditional', 'In-home and community services billed to Medicaid.'] },
            { cells: ['Photo, video, and recording release', 'Session recording for supervision and clinical review, telehealth recording, and any marketing use.', 'Usually', 'With the consent packet, as an opt-in. Never a condition of starting.'] },
            { cells: ['Transportation or community outing permission', 'Consent for community-based programming away from the home or center.', 'Rare', 'Community settings only.'] },
          ],
        },
        downloads: [
          {
            label: 'Setting consent templates (PDF)',
            file: '/downloads/aba-setting-consent-templates.pdf',
            blurb: 'Four templates that should only ever reach some families: telehealth consent, photo and recording release with separate opt-ins per use, an in-home safety and access agreement, and community outing permission.',
          },
        ],
      },
      {
        h2: 'Templated conditions: when to show a document, and when to hide it',
        body: [
          'A document request is a question, and every question a family does not need is a chance to abandon the form. These are the conditions worth templating once and reusing across every form you run. Each one reads the same way: a fact you already have, and what it should do to the packet.',
        ],
        rules: [
          {
            when: 'The family is in a state that does not gate ABA on an autism diagnosis',
            then: 'Do not ask for the autism report. Ask for the most recent comprehensive evaluation instead, and keep the family qualified while it is missing.',
          },
          {
            when: 'The state or plan gates the benefit on a physician referral or written order',
            then: 'Show the referral upload, and behind it a "my doctor has it" path that collects the practice name, phone, and fax so your team can request it directly.',
          },
          {
            when: 'The family answers that they do not have a diagnosis yet',
            then: 'Hide the diagnosis upload entirely and route to the evaluation path: who diagnoses in their area, what the wait looks like, and a referral out if you do not test in house. Never dead-end the form.',
          },
          {
            when: 'The evaluation is older than the state or plan recency window',
            then: 'Treat the document as missing, not present. Date every clinical document at upload and re-ask when the clock has run out.',
          },
          {
            when: 'The family is paying privately',
            then: 'Hide the insurance card, secondary card, coordination of benefits, and program paperwork. Show the fee agreement and payment authorization instead.',
          },
          {
            when: 'The family names a second insurance',
            then: 'Show the secondary card and the coordination of benefits form. Both stay hidden for everyone else.',
          },
          {
            when: 'The caregiver reports two households, or the parents’ last names differ from the child’s',
            then: 'Show the custody order or parenting plan, and ask which parent holds consent authority before sending anything to sign.',
          },
          {
            when: 'The client is 18 or older',
            then: 'Replace the parental consent block with client consent, and show guardianship or power of attorney only when the family reports an appointed guardian.',
          },
          {
            when: 'The child is in foster care or state custody',
            then: 'Show the placement letter and collect the agency contact who holds consent authority. Suppress the parent-signature consents that person cannot legally sign.',
          },
          {
            when: 'Services will be delivered in a school',
            then: 'Show the IEP or 504, the school schedule, and the district authorization together, with the school contact block. All four stay hidden for home and center families.',
          },
          {
            when: 'Services will be delivered in the home',
            then: 'Show address verification, the safety and pets attestation, and the visit-verification acknowledgement. Hide the center-only medical forms.',
          },
          {
            when: 'Telehealth is on the service list',
            then: 'Show the telehealth consent. Otherwise it never appears.',
          },
          {
            when: 'The child has received ABA before',
            then: 'Ask for the discharge summary, the last treatment plan, and the prior authorization letter, and record hours already used against annual or lifetime caps.',
          },
          {
            when: 'The document arrives through another channel, or in the wrong slot',
            then: 'Stop asking for it. File it by what it actually is, use it for verification and the authorization packet, and take the question off the family’s screen.',
          },
          {
            when: 'The document is required but the family does not have it on their phone right now',
            then: 'Let them finish the rest of intake and chase the document in follow-up. A required document should never be the reason a family abandons the form.',
          },
        ],
      },
      {
        h2: 'What changes from state to state',
        body: [
          'Three things vary by state, and they are the three that decide whether a family can start: whether an autism diagnosis is the gate at all, whether an independent physician referral or order is required alongside it, and how fresh the evaluation has to be. School documentation is a fourth, in the states that weigh school hours against requested ABA hours.',
          'The pattern worth internalizing: the states that do not require an autism diagnosis usually replace it with something stricter about the evaluation or the referral. "No diagnosis needed" almost never means "no document needed."',
        ],
        table: {
          cols: ['State', 'Autism diagnosis', 'What actually gates the start there'],
          chipCol: 1,
          minWidth: 780,
          rows: [
            { cells: ['Arizona', 'Not required', 'The state behavior-analysis policy covers autism and other diagnoses justified by medical necessity, so a family without a diagnosis is not automatically out. Commercial plans still want the report, and some plan criteria look for an evaluation within the past five years.'], href: '/payers/arizona-ahcccs' },
            { cells: ['Colorado', 'Not required', 'Three separate doorways open the benefit, but a signed comprehensive evaluation within the past twelve months is the real gate, and school hour counts have to ride along with pediatric requests.'], href: '/payers/colorado-medicaid' },
            { cells: ['Florida', 'Not required', 'The gate is a physician referral plus a written order plus a comprehensive diagnostic evaluation. Complete adaptive-behavior and behavior-rating scoring reports attach to every request, and school-based hours need the IEP or 504.'], href: '/payers/florida-medicaid' },
            { cells: ['Georgia', 'Required', 'A DSM-5 autism diagnosis from a qualified professional. Evaluations are read on a five-year window with tighter recency on assessments, and the IEP or IFSP belongs in the authorization package when one exists.'], href: '/payers/georgia-medicaid' },
            { cells: ['Indiana', 'Required', 'Autism established by a doctoral-level psychologist, physician, or advanced practice clinician, plus a physician referral and an assessment that includes an adaptive-behavior scale. Evaluations carry a one-year freshness expectation.'], href: '/payers/indiana-medicaid' },
            { cells: ['Kansas', 'Required', 'Diagnosis validated by a physician or licensed psychologist within the last six months, and from September 2026 it has to come from a state-licensed clinical psychologist or qualified physician using a validated tool, with a grace period for existing diagnoses.'], href: '/payers/kansas-medicaid' },
            { cells: ['Maryland', 'Required', 'A confirmed diagnosis through a comprehensive diagnostic evaluation by a qualified health-care professional. Fee-for-service families route through a separate administrator, so ask which one before promising a timeline.'], href: '/payers/maryland-medicaid' },
            { cells: ['Massachusetts', 'Required', 'A comprehensive DSM-aligned assessment by a licensed diagnostician. From January 2026 fully-insured plans also cover a sole Down syndrome diagnosis, so those families should not be turned away at the door.'], href: '/payers/masshealth-massachusetts-medicaid' },
            { cells: ['Missouri', 'Varies', 'Autism by a licensed physician or psychologist for the standard benefit, but children can qualify with other diagnoses under the pediatric early-and-periodic benefit when medically necessary.'], href: '/payers/missouri-medicaid' },
            { cells: ['Nebraska', 'Varies', 'Autism or a documented developmental or intellectual disability qualifies. Either way the diagnosing provider’s evaluation attaches to the request.'], href: '/payers/nebraska-medicaid' },
            { cells: ['New Jersey', 'Required', 'A diagnosis from a physician or psychologist, but a full comprehensive diagnostic evaluation is not required, so a signed diagnosis statement is enough to keep a family moving.'], href: '/payers/new-jersey-medicaid' },
            { cells: ['New Mexico', 'Varies', 'A diagnosis within three years of the referral, or a documented at-risk pathway for very young children. Adult clients need confirmation within the last three years from a qualifying practitioner.'], href: '/payers/new-mexico-medicaid' },
            { cells: ['New York', 'Required', 'The under-21 baseline governs, and some plans want the evaluation authenticated by a state-licensed clinician and re-validated annually, which is a recurring document, not a one-time upload.'], href: '/payers/new-york-medicaid' },
            { cells: ['North Carolina', 'Required', 'The diagnosis has to be established with a validated diagnostic instrument. Screening tools alone are rejected, and very young children may start on a provisional diagnosis.'], href: '/payers/north-carolina-medicaid' },
            { cells: ['Ohio', 'Required', 'A diagnosis from a child psychiatrist, psychologist, child neurologist, or developmental pediatrician, with evaluations accepted inside a five-year window.'], href: '/payers/ohio-medicaid' },
            { cells: ['Tennessee', 'Varies', 'Autism or another qualifying diagnosis can support the benefit, and the managed-care plans share one universal request form, so the packet is unusually consistent across plans.'], href: '/payers/tenncare-tennessee-medicaid' },
            { cells: ['Texas', 'Required', 'The diagnosis has to be made or reconfirmed within the past three years and paired with a signed prescriber referral, and it has to come from a developmental pediatrician, neurologist, psychiatrist, licensed psychologist, or a diagnostic team.'], href: '/payers/texas-medicaid' },
            { cells: ['Utah', 'Required', 'A written diagnosis using evidence-based standardized measures, and the completed diagnostic tool itself has to travel with the first authorization request.'], href: '/payers/utah-medicaid' },
            { cells: ['Virginia', 'Required', 'A diagnosis from a qualified professional, with a licensed-clinician attestation signature on the initial service-authorization form.'], href: '/payers/virginia-medicaid' },
          ],
          note: 'Reviewed September 2026, focused on each state’s Medicaid pathway, where variation is widest. Commercial plans are more uniform and mostly require an autism diagnosis regardless of state. Rules move constantly, so verify against the plan before turning any of this into a required field on your form.',
        },
      },
      {
        h2: 'How to template this in your own intake form',
        body: [
          'Everything above collapses into six rules. Build them once and every form you run afterwards inherits them.',
        ],
        list: [
          { title: 'One slot per document, never one packet', desc: 'A single "upload your paperwork" field produces a folder nobody can bill from. Name each document, and know which slot a file landed in.' },
          { title: 'Condition on facts you already hold', desc: 'State, payer, age, setting, and who holds consent are all known before the document page. Every one of them should be able to hide a question.' },
          { title: 'Date the document, not just its presence', desc: 'Recency windows are the most-missed rule in ABA intake. A stored evaluation that has aged past the payer’s window is a missing document, and your form should treat it as one.' },
          { title: 'Give every gate a fallback', desc: 'For each required document, offer the "I do not have it" path that collects what your team needs to go get it: the clinician, the practice, the phone, the fax.' },
          { title: 'Accept documents from any channel', desc: 'Families send the card by text, the evaluation by email, and the referral by whatever their doctor’s office uses. File by what the document is, and stop asking once it arrives.' },
          { title: 'Let families continue without it', desc: 'Keep the requirement visible, keep chasing it after the fact, but never let a missing PDF end the intake. The family who abandons the form at the document page does not come back.' },
        ],
        downloads: [
          {
            label: 'Document requirements worksheet (PDF)',
            file: '/downloads/aba-document-requirements-worksheet.pdf',
            blurb: 'Two working pages: one to record what a state and payer actually require, and one to turn that into the when/then rules your intake form runs on.',
          },
        ],
      },
    ],
    download: {
      label: 'Download the free ABA intake checklist (PDF)',
      file: '/downloads/aba-intake-checklist.pdf',
      blurb: 'The full process on one printable page — use it to map your own funnel and find your leaks.',
    },
    compareTitle: 'The same steps — done for you, in a fraction of the time.',
    compareIntro: 'Those benchmarks assume a fully-staffed team hitting every step on time. Carelu holds the whole sequence to the fast end of the range automatically, around the clock — so the delays that lose families never happen.',
    compare: [
      { step: 'First response', manual: 'Under 5 min — if someone is available', carelu: 'Instant, 24/7, on every channel' },
      { step: 'Insurance verification', manual: '24–48 hours, staff by phone', carelu: 'At first contact, automatically' },
      { step: 'Documents & consents', manual: '~1 week, with staff chasing', carelu: 'Same session, chased automatically' },
      { step: 'Which documents to ask for', manual: 'One packet, same for every family', carelu: 'Only what the state, payer, and setting require' },
      { step: 'Assessment scheduling', manual: 'After verification clears', carelu: 'Booked in the first conversation' },
      { step: 'Inquiry → first appointment', manual: 'Under 2 weeks (the goal)', carelu: 'Days — no waiting on callbacks' },
    ],
    faq: [
      {
        q: 'How long should ABA intake take?',
        a: 'From first contact to first appointment: under two weeks where authorization timelines allow. The paperwork itself rarely needs more than a few days — the delay is almost always waiting on responses.',
      },
      {
        q: 'Where do most families drop out of intake?',
        a: 'At the very start (no response, or a voicemail) and during document collection. Both are solved by speed and small, digital, phone-friendly steps with automatic follow-up.',
      },
      {
        q: 'Can the intake process be automated?',
        a: 'Most of it — first response, qualification, insurance verification, document collection, reminders, and scheduling are all rote and time-sensitive. That\'s exactly what Carelu automates, with your team handling the conversations that need a human.',
      },
      {
        q: 'Which documents does every ABA intake need?',
        a: 'Five are close to universal: the insurance card front and back, the comprehensive diagnostic evaluation, consent to treat, the privacy acknowledgement, and communication consent. Everything else — referrals, custody paperwork, school plans, secondary coverage, setting-specific forms — should be conditional on something the family already told you.',
      },
      {
        q: 'Do we need an autism diagnosis before starting ABA?',
        a: 'It depends on the state and the payer, and getting this wrong turns away families who would have qualified. Several state Medicaid programs open the benefit on medical necessity, functional impairment, or a physician referral rather than an autism diagnosis, while commercial plans almost always require one. Where a diagnosis is not required, expect a stricter rule about the evaluation or the referral in its place.',
      },
      {
        q: 'What should happen when a family does not have the diagnosis report?',
        a: 'Never end the form. Let them finish everything else, collect who diagnosed the child (or route them to evaluation if nobody has), and chase the document in follow-up. Losing the family at the upload page costs far more than a document that arrives three days late.',
      },
      {
        q: 'How long is a document good for?',
        a: 'Recency windows vary from six months to five years depending on state and plan, and they are the most-missed rule in ABA intake. Store the date of every clinical document, not just the file, and treat one that has aged past the payer\'s window as missing.',
      },
    ],
    ctaHeadline: 'Intake that runs itself.',
    ctaSub: 'Carelu answers every family instantly, verifies insurance, collects the documents, and books the assessment — end to end.',
  },

  'aba-intake-forms': {
    slug: 'aba-intake-forms',
    pill: 'Guide · Intake Forms',
    h1: 'ABA intake forms: what to include (+ free template).',
    metaTitle: 'ABA Intake Forms: What to Include + Free Template | Carelu',
    metaDescription:
      'Everything an ABA intake packet should cover — client and caregiver details, insurance, clinical history, availability, and consents — plus a free printable template.',
    intro: [
      'A good intake form collects everything your clinical and billing teams need to start services — without exhausting a family that is already stretched thin. Most packets fail in one of two directions: so short that staff spend a week chasing missing details, or so long that parents abandon them halfway.',
      'Here\'s what actually belongs in an ABA intake packet, section by section — and a free template you can adapt.',
    ],
    sections: [
      {
        h2: 'The seven sections every packet needs',
        list: [
          { title: '1 · Client information', desc: 'Child\'s legal name, date of birth, address, primary language, school/daycare placement.' },
          { title: '2 · Caregiver & contacts', desc: 'Parent/guardian names, relationship, phone, email, preferred contact method and times, emergency contact.' },
          { title: '3 · Insurance & funding', desc: 'Payer, member and group IDs, subscriber details, secondary coverage, and a photo of the card — enough to run verification without a follow-up call.' },
          { title: '4 · Diagnosis & clinical history', desc: 'Diagnosis, date, diagnosing provider, and the report itself; current and past therapies (ABA, OT, speech); medications; medical conditions relevant to care.' },
          { title: '5 · Goals & concerns', desc: 'What the family most wants help with, in their own words — behaviors of concern, safety issues, skills to build. This is clinical gold for the assessment.' },
          { title: '6 · Availability & logistics', desc: 'Days and times the child is available, preferred setting (home, center, school), transportation constraints.' },
          { title: '7 · Consents & policies', desc: 'Consent to treat, HIPAA acknowledgment, release of information for records requests, financial policy, and cancellation policy — each a separate signature.' },
        ],
      },
      {
        h2: 'The mistakes that kill completion',
        list: [
          { title: 'One giant PDF', desc: 'A 15-page packet emailed as an attachment gets printed, half-finished, and lost. Break it into short digital steps a parent can finish on a phone.' },
          { title: 'Asking twice', desc: 'If the family gave a detail on the first call, it should be pre-filled in the packet. Every repeated question erodes trust.' },
          { title: 'No follow-up', desc: 'Most incomplete packets just need a nudge. Automatic reminders at day 2 and day 5 recover a large share of stalled families.' },
          { title: 'Collecting everything before saying anything', desc: 'Don\'t gate a first conversation behind the full packet. Qualify with five questions, then collect the rest while verification runs in parallel.' },
        ],
      },
      {
        h2: 'Paper, PDF, or digital?',
        body: [
          'Digital, always — with paper as the exception for families who need it. Digital forms can be completed on a phone, validated as they\'re filled (no missing member IDs), fed straight into your systems without retyping, and chased automatically when they stall. Whatever tool you use, it must be HIPAA-compliant with a BAA — intake data is PHI from the first field.',
        ],
      },
      {
        h2: 'Beyond the form',
        body: [
          'The form is one step of a larger funnel — what happens around it (response speed, verification, reminders, scheduling) decides whether the family ever reaches a first session. Carelu turns the whole packet into a conversation: families answer naturally by chat, phone, or text; the record fills itself; and nothing is ever asked twice.',
        ],
      },
    ],
    download: {
      label: 'Download the free ABA intake form template (PDF)',
      file: '/downloads/aba-intake-form-template.pdf',
      blurb: 'All seven sections, ready to print or rebuild in your forms tool. Free to adapt for your practice.',
    },
    faq: [
      {
        q: 'How long should an ABA intake form be?',
        a: 'Long enough to cover the seven core sections, short enough to finish in 15–20 minutes on a phone. Anything the family already told you should be pre-filled.',
      },
      {
        q: 'Do intake forms need to be HIPAA-compliant?',
        a: 'Yes. Intake responses are PHI, so the collection tool needs HIPAA compliance and a signed BAA — a standard web-form builder without one doesn\'t qualify.',
      },
      {
        q: 'Can I use this template as-is?',
        a: 'Yes — it\'s free to use and adapt. Have your compliance or legal reviewer confirm the consent language matches your state and payer requirements.',
      },
    ],
    ctaHeadline: 'Forms that fill themselves.',
    ctaSub: 'Carelu collects the whole packet conversationally — phone, chat, or text — and never asks a family the same question twice.',
  },

  'aba-intake-drop-off': {
    slug: 'aba-intake-drop-off',
    pill: 'Guide · Intake Drop-Off',
    h1: 'ABA intake drop-off: why families disappear, and the fix.',
    metaTitle: 'ABA Intake Drop-Off: Why Families Disappear (and the Fix) | Carelu',
    metaDescription:
      'ABA providers lose 40–85% of families between first inquiry and first session. Where the drop-off happens, why, and the playbook for fixing each leak.',
    intro: [
      'Run the numbers on your own funnel and the result is usually a shock: of every ten families who reach out, somewhere between four and eight never make it to a first session. That\'s not a marketing problem — those families already found you, chose to contact you, and then fell out of a process you control.',
      'Drop-off clusters at four specific moments. Here\'s each one, why it happens, and what fixes it.',
    ],
    sections: [
      {
        h2: 'Leak 1 — The unanswered first contact',
        body: [
          'A large share of inquiries arrive after hours, on weekends, or while your coordinator is on another call. A parent who reaches voicemail doesn\'t leave a message and wait — they dial the next provider on their list. This is the single largest leak in most funnels, and the least visible: the families lost here never appear in your CRM at all.',
          'The fix: answer every channel, instantly, at every hour. Whether that\'s staffing or software, "first to respond" is the strongest predictor of who the family starts with.',
        ],
      },
      {
        h2: 'Leak 2 — The verification black hole',
        body: [
          'The family had a great first call — then heard nothing for two weeks while someone got around to checking benefits. From the parent\'s side, the process simply stopped. The fix: run insurance verification within 24–48 hours of first contact, and tell the family exactly what\'s happening while they wait. Silence, not the wait itself, is what loses them.',
        ],
      },
      {
        h2: 'Leak 3 — The paperwork stall',
        body: [
          'A 15-page packet lands in an inbox, gets half-finished on a Sunday night, and dies. No reminder ever comes. The fix: small digital steps a parent can finish on a phone, pre-filled with everything they\'ve already told you, with automatic nudges on day 2 and day 5. Most stalled packets just need a tap on the shoulder.',
        ],
      },
      {
        h2: 'Leak 4 — The long wait to start',
        body: [
          'Verified, documented families still evaporate when the gap to a first appointment stretches from days into months. Some wait is structural (staffing, auths) — but unmanaged wait is fatal. The fix is the waitlist playbook: rank by readiness, touch every family every 2–3 weeks, and fill every opening from a start-ready pool within days.',
        ],
      },
      {
        h2: 'The compounding math',
        body: [
          'These leaks multiply. Answer 70% of inquiries, verify 80% of those, complete packets with 75%, and start 80% of the remainder — and you\'re admitting only a third of the families who wanted you. Fix each leak to 95% and the same inquiry volume yields more than double the admissions, with zero additional marketing spend. That\'s why intake, not lead generation, is usually an ABA practice\'s cheapest growth lever.',
        ],
      },
      {
        h2: 'What fixing it takes',
        body: [
          'Every leak has the same shape: a rote, time-sensitive task that a busy human didn\'t get to in time. Which is why the durable fix is rarely "try harder" — it\'s making the first response, verification, document collection, reminders, and waitlist touches happen automatically, with your team focusing on the conversations that actually need a person. That\'s precisely what Carelu was built to do.',
        ],
      },
    ],
    download: {
      label: 'Download the free ABA intake checklist (PDF)',
      file: '/downloads/aba-intake-checklist.pdf',
      blurb: 'Map your own funnel against the full process and find where your families are leaking.',
    },
    faq: [
      {
        q: 'What is a normal intake conversion rate for ABA?',
        a: 'Many practices convert only 15–60% of inquiries into started clients. Well-run funnels — instant response, fast verification, digital paperwork, managed waitlists — reach 80%+.',
      },
      {
        q: 'What\'s the single highest-impact fix?',
        a: 'Answering every inquiry instantly, around the clock. It\'s the largest leak, the least visible, and the one fix that improves every downstream step.',
      },
      {
        q: 'How do I measure my own drop-off?',
        a: 'Count four numbers each month: inquiries, verified families, completed packets, and first sessions. The step with the biggest percentage fall is your leak — fix that one first.',
      },
    ],
    ctaHeadline: 'Stop the leaks.',
    ctaSub: 'Carelu answers instantly, verifies fast, chases every document, and keeps every family warm — so the families who found you actually start with you.',
  },
};

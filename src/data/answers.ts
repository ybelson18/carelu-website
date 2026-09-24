/* ================================================================
   ANSWER PAGE CONFIGS
   One page per question an ABA owner asks an AI assistant ("ABA CPT
   codes explained", "best ABA intake software", "how can AI help my ABA
   practice"). Same renderer and shape as resources.ts / growth.ts, and
   the same house rules as the growth cluster (see growth.ts header):
   method first, no named partner/client/competitor, no invented
   benchmark. Every page ends on a `carelu` block for its use case.

   Rates quoted here come from the payer directory's verified VOB rate
   layer (src/data/payers/vob/*) — re-check there before editing a number.
   ================================================================ */

import type { ResourceConfig } from './resources';

export const answerResources: Record<string, ResourceConfig> = {

  /* ============================================================
     ABA CPT CODES
     ============================================================ */
  'aba-cpt-codes': {
    slug: 'aba-cpt-codes',
    pill: 'Guide · Billing & Payers',
    h1: 'ABA CPT codes 97151–97158 explained: who bills each one, and what Medicaid pays.',
    metaTitle: 'ABA CPT Codes 97151–97158 Explained (2026), with Medicaid Rates by State | Carelu',
    metaDescription:
      'Every ABA billing code in plain language: 97151, 97152, 97153, 97154, 97155, 97156, 97157, 97158, 0362T and 0373T. Who can render each, how 15-minute units work, daily unit limits, concurrent billing, credential modifiers, and current Medicaid rates for 97153 and 97155 in 15 states.',
    answer:
      'ABA is billed with ten codes in 15-minute units: 97151 (BCBA assessment), 97152 and 0362T (supporting assessment), 97153 (technician 1:1 therapy, most billed hours), 97154/97158 (group), 97155 (BCBA protocol modification), 97156/97157 (parent training) and 0373T (severe behavior). Medicaid pays 97153 from about $12 to $24 per unit depending on the state.',
    updated: '2026-09-23',
    intro: [
      'ABA is billed with ten codes: eight Category I CPT codes (97151–97158) and two Category III codes (0362T and 0373T) for severe destructive behavior. They took effect January 1, 2019, and replaced the old temporary set. Every code is billed in 15-minute units.',
      'The codes split along two lines, and once you see them the whole set makes sense. The first is assessment versus treatment. The second is who is in the room: a technician working from a protocol, or a qualified healthcare professional (usually a BCBA) who can change the protocol. After that, the only other questions are one patient or a group, and whether the caregiver is the person being taught.',
      'This page walks through each code, then covers the rules that decide whether a claim actually pays: units, daily limits, concurrent billing, credential modifiers and prior authorization. It ends with current Medicaid rates by state, taken from our payer directory.',
    ],
    sections: [
      {
        h2: 'The ten ABA codes at a glance',
        body: [
          '"QHP" is the qualified healthcare professional: a BCBA, a licensed behavior analyst, or another licensed professional allowed by the payer and state. "Technician" is usually an RBT, though some states and payers accept other credentials.',
        ],
        table: {
          cols: ['Code', 'What it is', 'Who renders it', 'Patient'],
          rows: [
            { cells: ['97151', 'Behavior identification assessment: the initial or re-assessment, scoring, report and treatment plan', 'QHP', 'One patient (and caregivers)'] },
            { cells: ['97152', 'Supporting assessment: technician-run data collection that feeds the QHP’s assessment', 'Technician, directed by QHP', 'One patient'] },
            { cells: ['0362T', 'Supporting assessment for severe destructive behavior', 'Two or more technicians, QHP on site', 'One patient'] },
            { cells: ['97153', 'Adaptive behavior treatment by protocol: the direct 1:1 therapy hours', 'Technician, directed by QHP', 'One patient'] },
            { cells: ['97154', 'Group adaptive behavior treatment by protocol', 'Technician, directed by QHP', '2–8 patients'] },
            { cells: ['97155', 'Treatment with protocol modification: the QHP working with the child, often directing the technician', 'QHP', 'One patient'] },
            { cells: ['97156', 'Family adaptive behavior treatment guidance: parent training', 'QHP', 'Caregivers (child present or not)'] },
            { cells: ['97157', 'Multiple-family group guidance', 'QHP', 'Up to 8 families, child not present'] },
            { cells: ['97158', 'Group treatment with protocol modification', 'QHP', '2–8 patients'] },
            { cells: ['0373T', 'Treatment with protocol modification for severe destructive behavior', 'Two or more technicians, QHP on site', 'One patient'] },
          ],
          minWidth: 720,
        },
      },
      {
        h2: 'Assessment codes: 97151, 97152 and 0362T',
        body: [
          '97151 covers the BCBA’s assessment work: observing the child, interviewing caregivers, running standardized tools, scoring and interpretation, and writing the report and treatment plan. It is the one ABA code that includes time without the child present, since writing the plan counts. Most payers require a prior authorization for it, cap the units per assessment, and allow a re-assessment roughly every six months to renew treatment. Some states pay it differently: Colorado Medicaid pays 97151 as one flat amount per assessment, billable once every 365 days, instead of per unit.',
          '97152 is the technician’s part of an assessment, for example running a preference assessment or collecting baseline data while the BCBA directs. 0362T is the version for severe destructive behavior. It needs the QHP on site, two or more technicians, and an environment set up for the child’s behavior. It is billed per 15 minutes of technician time, and not every state covers it.',
          'Whether assessment codes need a prior auth varies a lot. Virginia Medicaid, for example, needs no authorization for 97151, 97152 or 0362T, while most commercial plans want one before the first unit. Check the specific plan before scheduling, not after.',
        ],
      },
      {
        h2: 'Treatment codes: 97153 through 97158 and 0373T',
        body: [
          '97153 is the bulk of every ABA practice’s revenue: the technician delivering direct 1:1 therapy from the BCBA’s protocol. The hours a family is authorized for are almost always 97153 hours, and the gap between authorized and delivered 97153 units is where most practices leak money.',
          '97155 is the BCBA working face to face with the child and adjusting the protocol, often while directing the technician in the same session. It is also the code for most direct supervision. 97156 is parent training, with or without the child present. Payers increasingly treat it as a required part of the plan, not an optional one.',
          'The group codes, 97154, 97157 and 97158, cover social-skills groups, multi-family parent groups and group sessions with a BCBA modifying the protocol. Most payers cap groups at eight. 0373T is the severe-behavior treatment code, with the same on-site-QHP, two-technician structure as 0362T.',
        ],
      },
      {
        h2: 'Units: the 15-minute rule',
        body: [
          'Every ABA code is a 15-minute unit. Under the CPT time convention, you can bill a unit once you pass the midpoint, meaning 8 minutes of a 15-minute unit. Some payers follow the CMS rule of adding up all timed minutes in a day and dividing instead. Either way, bill the minutes you documented, not the minutes you scheduled. Session notes need start and stop times that support the units on the claim.',
          'There is also a daily ceiling. Many plans apply the CMS medically unlikely edits (MUEs) for ABA: 97151 and 97153 at 32 units a day (8 hours), 0373T at 32, 97155 at 24, 97154 at 18, and 97152, 97156, 97157, 97158 and 0362T at 16. A claim over the ceiling usually denies outright, even when the hours were authorized. Some plans set tighter per-day limits of their own, and those win.',
        ],
      },
      {
        h2: 'Concurrent billing: 97153 and 97155 at the same time',
        body: [
          'The most common billing question in ABA is whether the technician’s 97153 and the BCBA’s 97155 can both be billed for the same minutes, when the BCBA is in the session directing the technician.',
          'The CPT descriptors allow it: 97155 explicitly "may include simultaneous direction of a technician," and each person bills their own code. What the payer allows is a separate question, and the answers differ. Some plans pay both lines when both people are face to face with the child and the BCBA is directing. Some pay only the BCBA line. Some say nothing, which is not the same as permission. One person can never bill 97153 and 97155 for the same minutes.',
          'Our payer guides record a concurrent-billing answer for each plan where the plan publishes one, and mark it "not published" where it doesn’t. When it’s unpublished, ask the plan in writing before you build a supervision model around it.',
        ],
      },
      {
        h2: 'Credential modifiers: HM, HN, HO, HP and state U-codes',
        body: [
          'Many Medicaid programs, and some commercial plans, pay the same code at different rates depending on who delivered it. The level is reported with a modifier. The common set is HM (less than a bachelor’s, typically an RBT), HN (bachelor’s level, typically a BCaBA), HO (master’s level, typically a BCBA) and HP (doctoral level). Some states use their own U-modifiers instead. Indiana uses U1–U3, and New Mexico uses U1 through U9 across its practitioner levels.',
          'The spread is large. In Virginia Medicaid, 97155 pays $23.48 per unit from a licensed assistant behavior analyst and $46.63 from a licensed behavior analyst. A missing or wrong modifier either denies the claim or quietly pays it at the lowest level, so modifier logic belongs in your billing setup, not in someone’s memory. Telehealth adds its own modifier (95 or GT), and a few plans don’t pay certain codes by telehealth at all.',
        ],
      },
      {
        h2: 'Prior authorization: what gets approved, and when',
        body: [
          'Almost every payer authorizes ABA in two steps. First the assessment (97151, sometimes with 97152), then a treatment authorization built from the assessment’s plan: a number of 97153 hours per week, plus 97155 and 97156 units, usually for six months. Renewal needs a re-assessment and progress data.',
          'The front end of this is intake, and it is where most delays start. The assessment auth usually needs the diagnosis report, sometimes a physician referral or order, and in some states a diagnosis from a specific kind of clinician or one issued within a set time frame. A missing diagnostic report can hold up the first unit by weeks. Our records-request guide, linked below, covers how to shorten that.',
        ],
      },
      {
        h2: 'What Medicaid pays for 97153 and 97155, by state',
        body: [
          'Medicaid is the one payer type that publishes its ABA rates. Commercial rates are contract-specific and never public. The table shows the published fee-for-service or state benchmark rate per 15-minute unit. Where a state pays by credential, both ends of the range are shown. Managed care plans in most states pay at or above the state schedule by contract, but confirm with each plan. Each row links to that state’s full payer guide and sources.',
        ],
        table: {
          cols: ['State Medicaid', '97153 (per unit)', '97155 (per unit)', 'Schedule effective'],
          rows: [
            { cells: ['Arizona (AHCCCS)', '$17.91–$23.69 office, by credential', '$25.05–$37.28 office, by credential', 'Nov 2023'], href: '/payers/arizona-ahcccs' },
            { cells: ['Colorado', '$17.20', '$25.80', 'Oct 2025'], href: '/payers/colorado-medicaid' },
            { cells: ['Florida', '$12.26', '$19.17 (lead analyst)', 'Jan 2025'], href: '/payers/florida-medicaid' },
            { cells: ['Indiana', '$16.04', '$20.54 (BCaBA) / $25.97 (BCBA)', 'Apr 2026'], href: '/payers/indiana-medicaid' },
            { cells: ['Maryland', '$19.17 (RBT) – $24.41 (BCBA)', '$38.34', 'Feb 2026'], href: '/payers/maryland-medicaid' },
            { cells: ['Massachusetts (MassHealth)', '$16.37', '$30.73', 'Oct 2024'], href: '/payers/masshealth-massachusetts-medicaid' },
            { cells: ['Missouri', '$16.37 (RBT) / $20.13 (BCaBA, BCBA)', 'By credential', 'Jul 2024'], href: '/payers/missouri-medicaid' },
            { cells: ['Nebraska', '$18.70', '$22.72', 'Aug 2025'], href: '/payers/nebraska-medicaid' },
            { cells: ['New Jersey', '$15.00', '$21.25', 'Feb 2022'], href: '/payers/new-jersey-medicaid' },
            { cells: ['New Mexico', '$19.85 (BT) – $38.02', '$39.69 (BCBA) – $55.55', 'Jan 2025'], href: '/payers/new-mexico-medicaid' },
            { cells: ['New York', '$14.45', '$19.26', 'Apr 2026'], href: '/payers/new-york-medicaid' },
            { cells: ['North Carolina', '$20.81', '$32.22', 'Oct 2025'], href: '/payers/north-carolina-medicaid' },
            { cells: ['Texas', '$14.50', '$20.08 (HN) / $25.10 (HO)', 'Sep 2025'], href: '/payers/texas-medicaid' },
            { cells: ['Utah', '$19.67', '$37.51', 'Jul 2026'], href: '/payers/utah-medicaid' },
            { cells: ['Virginia', '$15.00 (technician)', '$23.48 (LABA) – $46.63 (LBA)', 'Dec 2021'], href: '/payers/virginia-medicaid' },
          ],
          note: 'Per 15-minute unit, from each state’s published Medicaid fee schedule as recorded in the Carelu payer directory. Rates change; the linked guide carries the source document and the date we last checked it. Tennessee and Georgia do not publish a public ABA schedule, so they are not listed.',
          minWidth: 720,
        },
      },
      {
        h2: 'The five reasons ABA claims deny most often',
        list: [
          { title: 'No authorization, or the wrong one', desc: 'Units billed outside the authorized dates, above the authorized count, or under a code the authorization did not include. Track authorized against used units per code, every week.' },
          { title: 'Eligibility changed', desc: 'The family’s coverage lapsed, changed plans or moved to a Medicaid managed care plan mid-authorization. Re-verify eligibility monthly, not only at intake.' },
          { title: 'Credential or modifier mismatch', desc: 'A technician not yet certified or enrolled, a missing HM/HN/HO/HP modifier, or a rendering provider not credentialed with that plan.' },
          { title: 'Daily unit ceilings', desc: 'A long day that exceeds the plan’s per-day limit for the code, even though the weekly hours were authorized.' },
          { title: 'Documentation that doesn’t support the units', desc: 'Session notes without start and stop times, without the targets worked on, or signed late. These denials come back on audit, sometimes months later.' },
        ],
      },
    ],
    faq: [
      { q: 'What is CPT code 97153?', a: '97153 is adaptive behavior treatment by protocol: direct 1:1 ABA therapy delivered by a technician (usually an RBT) under the direction of a BCBA or other qualified professional, billed in 15-minute units. It accounts for most of an ABA practice’s billed hours.' },
      { q: 'What is the difference between 97153 and 97155?', a: '97153 is the technician delivering therapy from an existing protocol. 97155 is the BCBA or other qualified professional working face to face with the child and modifying the protocol, which can include directing the technician in the same session. 97155 pays more and is often the code for direct supervision.' },
      { q: 'Can 97153 and 97155 be billed at the same time?', a: 'The CPT descriptors allow it when the technician and the BCBA are both face to face with the child and the BCBA is directing the technician, with each person billing their own code. Whether the payer pays both lines varies by plan. Some do, some pay only one line, and many don’t publish a rule. One person can never bill both codes for the same minutes.' },
      { q: 'How many units of 97153 can be billed per day?', a: 'Many plans apply the CMS medically unlikely edit of 32 units (8 hours) per day for 97153. The authorization sets the weekly total, and some plans set a lower per-day limit of their own.' },
      { q: 'Is 97151 billed per unit or per assessment?', a: 'Per 15-minute unit in most states and plans, with an authorized number of units per assessment. A few Medicaid programs pay it differently. Colorado, for example, pays a flat amount per assessment, once every 365 days.' },
      { q: 'What are 0362T and 0373T?', a: 'They are Category III codes for children with severe destructive behavior: 0362T for the supporting assessment and 0373T for treatment with protocol modification. Both need the qualified professional on site, two or more technicians, and a setting customized to the child’s behavior. Coverage varies by state.' },
    ],
    carelu: {
      h2: 'How Carelu gets a family to the first billable unit',
      body: [
        'Nothing on this page bills until a family is enrolled, verified and authorized. Carelu handles everything before the first unit: it answers the family, checks the payer’s rules for that state, verifies benefits and collects the documents the assessment authorization needs. Your team starts with an authorizable case instead of a phone number.',
        'Claims, coding and the authorization itself stay with your billing team and your practice management system. Carelu’s job is to make sure what reaches them is complete.',
      ],
      list: [
        { title: 'Benefits checked during intake', desc: 'Eligibility, ABA coverage, in-network status and referral requirements are verified automatically while the family is still in the conversation, before any staff time is spent.' },
        { title: 'Payer rules applied per state', desc: 'Diagnosis requirements, referral and order rules and assessment prior-auth rules from our payer directory are built into intake, so each family is asked for exactly what their plan and state require.' },
        { title: 'The authorization packet, collected', desc: 'Diagnosis report, insurance card front and back, signed consents and releases, gathered by text or on a phone-friendly intake form, with each signed document saved as a PDF in the family’s packet.' },
        { title: 'Handed to your system', desc: 'The verified, documented case goes to your coordinator’s queue and into CentralReach, Rethink, Aloha or your CRM, ready for the assessment auth.' },
      ],
    },
    compareTitle: 'Getting to the first authorized unit, by hand and with Carelu',
    compare: [
      { step: 'Benefits check', manual: 'Queued after intake, often days later', carelu: 'Verified automatically during the first conversation' },
      { step: 'Payer rules', manual: 'Coordinator remembers each plan’s diagnosis and referral rules', carelu: 'State and payer rules built into intake' },
      { step: 'Diagnosis report', manual: 'Family asked to email it; follow-up by phone', carelu: 'Uploaded by text or on the form, with reminders until it arrives' },
      { step: 'Consents and releases', manual: 'Paper or PDF packet, signed at the first visit', carelu: 'E-signed on a phone, a PDF generated for each document' },
      { step: 'Handoff to billing', manual: 'Re-typed into the practice management system', carelu: 'Pushed to your queue and your practice management system or CRM' },
    ],
    related: [
      { slug: '/payers', label: 'The payer directory', blurb: 'ABA coverage, prior-auth and diagnosis rules for 260+ plans across 27 states.' },
      { slug: 'aba-records-request', label: 'Records requests', blurb: 'Getting the diagnostic report fast enough to file the assessment auth.' },
      { slug: 'aba-client-intake-process', label: 'The ABA intake process', blurb: 'Every step from first contact to first session, with state-by-state requirements.' },
      { slug: 'aba-intake-metrics', label: 'The numbers to watch', blurb: 'Verification turnaround and days to start, alongside the rest of the scoreboard.' },
    ],
    ctaHeadline: 'Every billable unit starts with a family who finished intake.',
    ctaSub: 'Carelu answers every family, applies the payer’s rules, verifies benefits and collects the authorization packet, so your billing team starts with complete cases.',
  },

  /* ============================================================
     BEST ABA INTAKE SOFTWARE
     ============================================================ */
  'best-aba-intake-software': {
    slug: 'best-aba-intake-software',
    pill: 'Buyer’s Guide · Intake Software',
    h1: 'Best ABA intake software in 2026: how to choose, and what to test before you buy.',
    metaTitle: 'Best ABA Intake Software (2026): A Buyer’s Guide for ABA Providers | Carelu',
    metaDescription:
      'The four kinds of tools ABA practices use for intake (practice-management intake modules, general CRMs, answering services and AI intake platforms), what each is good at, the twelve questions to ask any vendor, and a two-week test that shows whether a tool actually moves families to first session.',
    answer:
      'The best one fixes the step where your families get lost, so pull 60 days of inquiries and mark where each family stopped. Families who never reach a person need 24/7 answering on every channel; families who stall on documents need guided digital intake with follow-up. Test any tool on a slice of real traffic for two weeks before you buy.',
    updated: '2026-09-23',
    intro: [
      'When an ABA owner asks for "the best intake software," they usually mean one of four different kinds of product, and the best choice depends on where families are getting lost. A practice that loses families at the first phone call needs something different from one that loses them waiting on the diagnostic report.',
      'So this guide doesn’t rank vendors. It explains the four categories, what each one actually does, the questions that separate a demo from a working system, and a two-week test to run before you sign. Carelu is one of these tools, and its pitch is at the end. The method works whatever you buy.',
    ],
    sections: [
      {
        h2: 'Start with where families get lost, not with features',
        body: [
          'ABA intake has six steps: the family reaches out, someone answers, you qualify them (area, payer, age, diagnosis status), they complete documents, benefits are verified, and a first session is scheduled. Industry drop-off between first inquiry and first appointment commonly runs 40–85%, and almost every practice has one or two steps that cause most of it.',
          'Before any demo, pull the last 60 days of inquiries and mark where each family stopped. If most never reached a person, you have an answering problem. If most qualified but never sent documents, you have a completion problem. If most were verified and still didn’t start, you have a scheduling or staffing problem that no intake software will fix. Buy for the step that is losing the most families.',
        ],
      },
      {
        h2: 'The four kinds of ABA intake software',
        list: [
          { title: 'Intake modules inside practice-management / EHR systems', desc: 'The intake or "lead" feature built into the system you already use for scheduling, clinical data and billing. Strong: one record from inquiry to claim, no integration. Weak: it’s a form and a status list. It stores families but doesn’t answer them, chase them or verify them, and families have to come to it.' },
          { title: 'General CRMs', desc: 'Sales CRMs adapted for intake. Strong: pipelines, task queues, email and text sequences, reporting. Weak: they are built for sales, not care. HIPAA coverage depends on the plan and the BAA, payer and diagnosis rules must be built by hand, and someone still has to have every conversation.' },
          { title: 'Answering services and call centers', desc: 'People who answer the phone when you can’t. Strong: a human voice at 10pm. Weak: most take a message rather than doing intake, cover only the phone and not chat, text or forms, and hand you a list to call back in the morning, when the family may already have booked elsewhere.' },
          { title: 'AI intake platforms', desc: 'Software that has the intake conversation itself on phone, chat, text and forms, qualifies, collects documents and verifies benefits, then hands the case to your team. Strong: covers all channels, 24/7, and finishes the work instead of logging it. Weak: quality varies widely, and a bad one frustrates families. Test it hard (see the two-week test below).' },
        ],
      },
      {
        h2: 'Twelve questions to ask every vendor',
        body: [
          'A demo shows the happy path. These questions show what happens to a real family on a real Tuesday night.',
        ],
        list: [
          { title: '1. What happens to a call, chat or text at 9pm on a Saturday?', desc: 'In our research, 48% of family contacts arrive outside business hours. "It goes to voicemail" and "we send an email" are not coverage.' },
          { title: '2. Which channels are covered: phone, website chat, text, web forms, fax referrals?', desc: 'Families use whichever is closest. A tool that covers only one channel leaves the others to your staff.' },
          { title: '3. How does it qualify: service area, payer, age, diagnosis?', desc: 'Ask to see it turn away a family outside your area politely, and route a family with no diagnosis to an evaluation path. 22% of families reach out before a diagnosis.' },
          { title: '4. Are payer rules built in per state, or do we configure them?', desc: 'Diagnosis requirements, referral orders and prior-auth rules differ by state and plan. Someone has to maintain them.' },
          { title: '5. Does it verify benefits, and when?', desc: 'During intake, or as a task for staff later? What does it check: eligibility only, or ABA coverage and network status too?' },
          { title: '6. How do families send documents?', desc: 'Portal login, email attachment, text photo, on-form upload? Every login you add costs you completions.' },
          { title: '7. Can a family finish intake on a phone, and pick up where they left off?', desc: 'Most parents will do this in a pediatrician’s waiting room, not at a desk.' },
          { title: '8. Are consents e-signed, and where do the signed documents end up?', desc: 'You want each signed document as a PDF in the family’s record, not a checkbox in a database.' },
          { title: '9. What does follow-up look like for a family that stalls?', desc: 'Only 2% of providers in our research run any automated re-engagement. Ask what message a family gets on day 1, 3 and 7 when their diagnosis report is missing.' },
          { title: '10. Does it separate job applicants from families?', desc: 'In our research, 40% of captured website leads were job seekers. They distort every metric unless they’re filtered.' },
          { title: '11. Does it integrate with our practice-management system and CRM?', desc: 'Ask for the exact fields that sync, in which direction, and how often.' },
          { title: '12. HIPAA, BAA, SOC 2?', desc: 'A signed BAA is the minimum. Ask for the SOC 2 report, not a badge.' },
        ],
      },
      {
        h2: 'The two-week test',
        body: [
          'Don’t decide from a demo. Run the tool on a slice of real traffic, such as one location, one channel or after-hours only, for two weeks, and compare it against the same slice from the previous two weeks.',
          'Measure four things: the share of inquiries answered within five minutes, the share that complete qualification, the share that submit documents, and the median time from first contact to verified. If the tool doesn’t move the step you bought it for, it doesn’t matter how good the demo was. Also call it yourself, pretending to be a stressed parent with a vague question and the wrong insurance card. That tells you more than any feature list.',
        ],
      },
      {
        h2: 'What it costs you to keep doing it by hand',
        body: [
          'The alternative to intake software is usually a coordinator and a shared inbox, and that setup has a cost that doesn’t show up on an invoice: every family who reached voicemail, waited overnight for a callback, or never sent the diagnosis report. Our free intake leak calculator (linked below) turns your monthly inquiry count into a dollar figure for that.',
        ],
      },
    ],
    faq: [
      { q: 'What is the best intake software for an ABA clinic?', a: 'It depends on where your families get lost. If they never reach a person, you need something that answers every channel 24/7. If they qualify but never finish documents, you need guided digital intake and follow-up. If you only need a record from inquiry to claim, the intake module in your practice-management system may be enough. Pull 60 days of inquiries, find the step losing the most families, and buy for that step.' },
      { q: 'Is a CRM enough for ABA intake?', a: 'A CRM tracks families and can send sequences, but it doesn’t have the conversation, qualify against payer rules, collect documents or verify benefits. Someone still does that work by hand. Check the HIPAA coverage and BAA on the specific plan before storing family data.' },
      { q: 'Should an ABA practice use an answering service or AI intake?', a: 'An answering service puts a person on the phone after hours but usually takes a message. AI intake completes the intake across phone, chat, text and forms and verifies benefits, then hands your team a finished case. Test either on after-hours traffic for two weeks and compare the share of families who reach the documents step.' },
      { q: 'What should ABA intake software cost?', a: 'Compare the price to the value of the families it recovers, not to the cost of a coordinator. One additional started client a month usually covers most intake tools many times over. Our intake leak calculator estimates that figure from your own volume.' },
      { q: 'Does ABA intake software need to be HIPAA compliant?', a: 'Yes. Intake collects protected health information: diagnosis, insurance and the child’s details. The vendor must sign a BAA, and you should ask for their SOC 2 report.' },
    ],
    carelu: {
      h2: 'Where Carelu fits: the AI intake platform built for ABA',
      body: [
        'Carelu is the fourth kind of tool on this list, built only for ABA and behavioral-health intake. It has the intake conversation itself, on every channel and at any hour, and hands your coordinators families who are qualified, documented and verified. It works alongside your practice-management system and CRM rather than replacing them.',
        'Your team still decides who to admit, schedules the assessment and builds the trust only people can build. Carelu does the repetitive work before that.',
      ],
      list: [
        { title: 'Every channel, 24/7, in English and Spanish', desc: 'Phone (an AI voice agent), website chat, text and web forms are answered in seconds, including the 48% of contacts that arrive outside business hours.' },
        { title: 'Qualified in the first conversation', desc: 'Service area, payer, age and diagnosis status are checked on the spot. Families outside your area are turned away kindly, and families without a diagnosis get your evaluation path.' },
        { title: 'Intake that gets finished', desc: 'A phone-friendly intake prefilled from the conversation, e-signed consents with a PDF for every signed document, uploads by text, resume where they left off, and follow-up until the packet is complete.' },
        { title: 'Benefits verified up front', desc: 'Eligibility, ABA coverage, network status and referral requirements are checked during intake, with each state’s payer rules built in.' },
        { title: 'One queue, your systems', desc: 'Routing by location or state, job seekers separated from families, and integrations with CentralReach, Rethink, Aloha, Salesforce, HubSpot and more. HIPAA compliant, SOC 2 Type II, BAA signed.' },
      ],
    },
    compareTitle: 'The four kinds of intake software, side by side',
    compareIntro: 'How each category handles the six steps, and where Carelu sits.',
    compare: [
      { step: 'Answers the family', manual: 'PM module and CRM: no. Answering service: phone only, takes a message', carelu: 'Phone, chat, text and forms, 24/7, in seconds' },
      { step: 'Qualifies', manual: 'Staff, by hand, from a payer and ZIP list', carelu: 'Area, payer, age and diagnosis checked in the conversation' },
      { step: 'Collects documents', manual: 'Form or portal; families finish or they don’t', carelu: 'Guided intake, uploads by text, follow-up until complete' },
      { step: 'Verifies benefits', manual: 'Staff task, often days later', carelu: 'Automatically, during intake' },
      { step: 'Follows up', manual: 'CRM sequences if someone builds them', carelu: 'Per family, per missing item, until they respond or opt out' },
      { step: 'Record of truth', manual: 'PM module: yes. Others: another system to reconcile', carelu: 'Syncs to your practice-management system and CRM' },
    ],
    related: [
      { slug: 'ai-for-aba-practices', label: 'AI for ABA practices', blurb: 'Where AI helps an ABA practice grow, and where it shouldn’t be used.' },
      { slug: 'aba-intake-drop-off', label: 'Where families disappear', blurb: 'The four leaks between first inquiry and first session.' },
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'The four coverage options compared, and how to measure them.' },
      { slug: 'aba-intake-metrics', label: 'The numbers to watch', blurb: 'The scoreboard for your two-week test.' },
      { slug: '/carelu-vs-crm', label: 'Carelu vs. a CRM', blurb: 'What a CRM does for intake, and what it leaves to your staff.' },
      { slug: '/tools/intake-leak-calculator', label: 'Intake leak calculator', blurb: 'What the families you lose today are worth per year.' },
    ],
    ctaHeadline: 'Test it on your own after-hours traffic.',
    ctaSub: 'See Carelu handle a live ABA intake end to end: answered, qualified, documented and verified, then run it on a slice of your own traffic.',
  },

  /* ============================================================
     AI FOR ABA PRACTICES
     ============================================================ */
  'ai-for-aba-practices': {
    slug: 'ai-for-aba-practices',
    pill: 'Guide · AI in ABA',
    h1: 'How AI can help an ABA practice grow, and where it shouldn’t be used.',
    metaTitle: 'AI for ABA Practices: What Works, What Doesn’t, and How to Start | Carelu',
    metaDescription:
      'A practical guide to AI in ABA practices: AI receptionists and intake, insurance verification, document collection, follow-up, marketing and admin, plus the clinical decisions AI should stay out of, and the HIPAA guardrails every tool must meet.',
    answer:
      'AI helps most in the front office: answering every inquiry 24/7, qualifying families, completing intake, verifying benefits and following up on missing documents, where 48% of contacts arrive after hours and only 2% of providers run automated re-engagement. It shouldn’t make clinical decisions like medical necessity, hours or treatment plans, and any tool touching family data needs a signed BAA.',
    updated: '2026-09-23',
    intro: [
      'Most of the work that decides whether an ABA practice grows isn’t clinical. It’s answering the phone at 8:40pm, checking whether a plan covers ABA, chasing a diagnostic report, and reminding a family for the third time that one signature is missing. That is repetitive, rule-bound and time-sensitive, which is exactly what current AI does well.',
      'The clinical work is different: assessment, programming, supervision and the relationship with the family. AI can help around it, but it shouldn’t make those decisions. This guide covers where AI earns its place in an ABA practice, where it doesn’t, and how to adopt it without putting families or compliance at risk.',
    ],
    sections: [
      {
        h2: 'Where AI helps most: the front office',
        body: [
          'The front office is where ABA practices lose the most families and have the least slack. In our research across 120 ABA providers, 48% of family contacts arrived outside business hours, and only 2% of providers ran any automated re-engagement at all. Both of those are problems AI can solve today.',
        ],
        list: [
          { title: 'Answering every inquiry', desc: 'An AI voice agent, chat and text that respond in seconds, at any hour, in English and Spanish. It answers the parent’s actual question (do you take my plan, do you serve my town, do I need a diagnosis) instead of taking a message.' },
          { title: 'Qualifying', desc: 'Checking service area, payer, age and diagnosis status in the first conversation, so coordinators spend time on families you can actually serve and families you can’t get a clear, kind answer right away.' },
          { title: 'Completing intake', desc: 'Guiding a parent through the intake packet on their phone, prefilled from what they already said, with e-signed consents and document uploads, so the coordinator reviews a finished packet instead of assembling one.' },
          { title: 'Verifying benefits', desc: 'Running eligibility and ABA benefit checks automatically during intake, and applying each state’s and payer’s diagnosis and referral rules.' },
          { title: 'Following up', desc: 'Sending the right next message to each family based on what is actually missing, whether that’s the diagnosis report, the insurance card back or a signature, until they respond or opt out.' },
        ],
      },
      {
        h2: 'Should you use an AI receptionist or an answering service?',
        body: [
          'An answering service puts a human on the line after hours, which is better than voicemail. But most answering services take a message, cover only the phone, and hand you a callback list in the morning. By then the parent has usually contacted two other practices.',
          'An AI receptionist built for ABA intake does the intake itself on every channel: it qualifies, starts the packet and verifies benefits, then passes the family to your coordinator the next morning. The question to ask is not "human or AI" but "does the family finish the call closer to a first session?" Test both on your after-hours traffic and measure how many families reach the documents step.',
          'One rule applies either way: be honest with families. The AI should say what it is, hand off to a person whenever the family asks or the situation calls for it, and never pretend to be a named staff member.',
        ],
      },
      {
        h2: 'Other good uses: marketing and admin',
        list: [
          { title: 'Measuring marketing by started clients', desc: 'Tying each started client back to the ad, referral source or page that brought them in, so you cut spend on channels that bring leads but not starts.' },
          { title: 'Writing and updating content', desc: 'Drafting location pages, payer FAQs and referral-partner one-pagers, with a person checking every clinical and payer claim before it goes live.' },
          { title: 'Recruiting', desc: 'Screening RBT and BCBA applicants and scheduling interviews quickly, and keeping job seekers out of the family pipeline (40% of captured website leads in our research were job seekers).' },
          { title: 'Summaries and admin', desc: 'Summarizing long calls and email threads, drafting routine letters and flagging expiring authorizations and credentials.' },
        ],
      },
      {
        h2: 'Where AI should not be used',
        body: [
          'Some decisions have to stay with licensed people. Whether a child needs ABA and how many hours, what goes into the treatment plan, how a program changes, and whether a family is clinically appropriate for your services are all clinical judgments. AI can prepare the information, but a BCBA makes the call.',
          'The same applies to telling families things that sound like clinical or coverage promises. An AI can say what a plan’s published rules are and that benefits verified as active. It should not promise a family a number of hours, a start date or that a claim will be paid.',
        ],
      },
      {
        h2: 'The guardrails every AI tool must meet',
        list: [
          { title: 'A signed BAA', desc: 'Any tool that sees a child’s name, diagnosis or insurance is handling PHI. No BAA, no family data. This includes general-purpose AI chat tools your staff might paste notes into.' },
          { title: 'Security you can verify', desc: 'Ask for a SOC 2 Type II report, not a badge on a website.' },
          { title: 'Consent for texts and calls', desc: 'Automated texts need documented consent and a working opt-out. Follow-up must stop when a family says stop.' },
          { title: 'A person behind the bot', desc: 'Clear handoff to a human, on request and for anything sensitive, with the full conversation attached so the family never has to repeat themselves.' },
          { title: 'A record of everything', desc: 'Every conversation, answer and signed document saved to the family’s record, so you can audit what was said.' },
        ],
      },
      {
        h2: 'How to start',
        body: [
          'Start where the loss is biggest and the risk is lowest, which for most practices is after-hours response. Put AI on nights and weekends for two weeks, keep your team on business hours, and compare how many families reach the documents step in each group. If after-hours families now convert close to daytime families, extend it to overflow during the day, then to follow-up and verification. Adding one step at a time keeps each change measurable.',
        ],
      },
    ],
    faq: [
      { q: 'How can AI help an ABA practice grow?', a: 'Mostly in the front office: answering every inquiry 24/7 on phone, chat and text, qualifying families by area, payer and diagnosis, completing intake and consents on a phone, verifying insurance benefits and following up on missing documents. These are the steps where ABA practices lose most families, and they are repetitive and rule-bound, which is where AI works well.' },
      { q: 'Is it safe to use AI with ABA families’ information?', a: 'Only with a vendor that signs a BAA and can show a SOC 2 Type II report. Never paste family information into general-purpose AI tools that don’t have a BAA with your practice.' },
      { q: 'Will an AI receptionist replace my intake coordinator?', a: 'It shouldn’t. The AI does the repetitive work (answering, qualifying, collecting, verifying, reminding), and your coordinator handles the conversations that need a person and builds the relationship. Most practices use it to let the same team admit more families.' },
      { q: 'Do parents mind talking to AI?', a: 'Parents mostly mind waiting. An assistant that answers at 10pm, knows whether you take their plan and lets them start intake right away beats voicemail. Be transparent that it’s AI, and hand off to a person whenever they ask.' },
      { q: 'Can AI make clinical decisions in ABA?', a: 'No. Medical necessity, hours, treatment plans and program changes are decisions for a BCBA or other qualified professional. AI can gather and organize the information that goes into those decisions.' },
    ],
    carelu: {
      h2: 'How Carelu puts AI to work in your front office',
      body: [
        'Carelu is AI built for one job: getting ABA families from first contact to a verified, documented, schedulable case, on every channel and at any hour. It covers the front-office work described on this page and stays out of the clinical work.',
        'Your coordinators keep the conversations that need a person. Carelu hands them families who are already qualified and verified, with the full conversation attached.',
      ],
      list: [
        { title: 'An AI receptionist on every channel', desc: 'Phone, website chat, text and forms, answered in seconds, 24/7, in English and Spanish, with a clear handoff to your team whenever a family asks.' },
        { title: 'Intake, qualification and verification', desc: 'Area, payer, age and diagnosis checked in the first conversation. Intake completed on a phone with e-signed consents. Benefits verified with each state’s payer rules applied.' },
        { title: 'Follow-up that knows what’s missing', desc: 'Text and email flows per family and per missing item, with consent handling and opt-outs, until the packet is complete.' },
        { title: 'Measured by started clients', desc: 'Answer rate, speed to contact, completion and cost per started client by channel, so you can see the lift for yourself.' },
        { title: 'The guardrails, included', desc: 'HIPAA compliant, SOC 2 Type II, and a BAA with every provider. Every conversation and signed document is saved to the family’s record.' },
      ],
    },
    compareTitle: 'The front office, by hand and with Carelu',
    compare: [
      { step: 'After-hours inquiry', manual: 'Voicemail or a message for the morning', carelu: 'Answered in seconds; intake started that night' },
      { step: 'Qualification', manual: 'Coordinator checks area and payer lists by hand', carelu: 'Checked in the first conversation' },
      { step: 'Intake packet', manual: 'Emailed PDF; finished or abandoned', carelu: 'Completed on a phone, prefilled, e-signed' },
      { step: 'Benefits', manual: 'Verification call, days later', carelu: 'Verified automatically during intake' },
      { step: 'Follow-up', manual: 'Whoever remembers', carelu: 'Per family, per missing item, until done or opted out' },
    ],
    related: [
      { slug: 'best-aba-intake-software', label: 'Choosing intake software', blurb: 'The four kinds of tools, twelve questions and a two-week test.' },
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'Why taking a message is not coverage.' },
      { slug: 'aba-follow-up-sequences', label: 'Follow-up sequences', blurb: 'What to send, when, and what never to automate.' },
      { slug: 'how-to-grow-an-aba-practice', label: 'How to grow an ABA practice', blurb: 'The five channels and the operations layer they all depend on.' },
      { slug: '/research/the-intake-gap', label: 'The Intake Gap (our research)', blurb: '185,054 family conversations across 120 ABA providers.' },
    ],
    ctaHeadline: 'Put AI where your families are getting lost.',
    ctaSub: 'Carelu answers, qualifies, completes intake and verifies benefits for every ABA family, 24/7, so your team spends its time on the families who are ready to start.',
  },
};

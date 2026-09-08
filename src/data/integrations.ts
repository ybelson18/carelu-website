/* ================================================================
   INTEGRATION PAGE CONFIGS (/integrations/:slug)
   Partnership pages for the platforms ABA providers already run.
   Carelu is the intake layer that CONNECTS to these systems — it
   answers, qualifies, and verifies families, then delivers complete
   records into the platform. These platforms are partners in the
   funnel, never competitors; every page is written so their teams
   would be glad to read it. Third-party descriptions stay at
   category level with a verify-with-the-vendor note.
   ================================================================ */

export interface IntegrationStep { title: string; desc: string }
export interface IntegrationRow { job: string; where: string }
export interface IntegrationFaq { q: string; a: string }
export interface IntegrationConfig {
  slug: string;
  name: string;           // platform name
  pill: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  whatItIs: string;       // fair, public-information description
  whatCareluAdds: string; // the intake layer, framed additively
  flow: IntegrationStep[]; // how the integration works, start to finish
  rows: IntegrationRow[];  // who runs which job — positive framing
  faq: IntegrationFaq[];
  ctaSub?: string;        // overrides the default demo CTA subline ("deliver the finished record into X")
}

export const integrations: Record<string, IntegrationConfig> = {
  'salesforce': {
    slug: 'salesforce',
    name: 'Salesforce',
    pill: 'Integration · Salesforce',
    h1: 'Carelu + Salesforce: intake done, records delivered into your CRM.',
    metaTitle: 'Salesforce Integration — AI Intake That Fills Your CRM | Carelu',
    metaDescription:
      'Carelu connects with Salesforce: it answers every family instantly, completes intake, verifies insurance, collects documents, and delivers admitted clients into Salesforce as complete, mapped records — no re-keying.',
    intro: [
      'If Salesforce is where your organization runs, Carelu makes the intake side of it real. Salesforce is built to hold the pipeline; Carelu is built to fill it. It answers every family the moment they reach out, completes intake conversationally, verifies insurance, gathers documents and consents, and then delivers the admitted family into Salesforce as a complete, mapped record. Your team opens Salesforce to work that is already done.',
    ],
    whatItIs:
      'Salesforce is the market-leading enterprise CRM — customizable objects and pipelines, automation with Flow, reporting, and a vast app ecosystem. Health-focused editions add care-coordination and patient-relationship tooling. Powerful and configurable; it requires setup and administration to operate. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake layer in front of Salesforce: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection with automatic follow-up; and waitlist nurture. Every admitted family lands in Salesforce with the full record, source, and consents attached — mapped to your fields, not a generic export.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The record lands in Salesforce', desc: 'The complete intake syncs into your Salesforce objects with field-level mapping. Stage changes flow through as the family moves, so reports stay true.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Pipeline, accounts, automation & reporting across the organization', where: 'Salesforce' },
      { job: 'Territory, ownership & enterprise workflows', where: 'Salesforce' },
    ],
    faq: [
      { q: 'Does Carelu replace Salesforce?', a: 'No — they\'re complementary. Salesforce is your system of record across the organization; Carelu is the intake layer in front of it. Carelu can also serve as the intake CRM for teams without one, but if you run Salesforce, keep it.' },
      { q: 'How does Carelu connect to Salesforce?', a: 'Carelu delivers each completed intake into Salesforce with field-level mapping to your standard or custom objects, and supports webhooks for custom flows. Onboarding maps Carelu\'s intake fields — family, child, insurance, documents, consents, source — to the Salesforce fields your team already reports on.' },
      { q: 'Which Salesforce fields does Carelu fill?', a: 'Whatever your intake record needs: contact details, the child\'s information, diagnosis status, insurance and verification results, uploaded documents, consent records, lead source and campaign, and the current intake stage. Mappings are set once and applied to every record.' },
      { q: 'We have a security review. Is the integration HIPAA-appropriate?', a: 'Yes. Carelu is HIPAA-compliant and SOC 2 Type II, signs a BAA, and connects to Salesforce directly — no consumer automation tools carrying PHI in between. Your security team can review the data flow before anything is connected.' },
    ],
  },
  'centralreach': {
    slug: 'centralreach',
    name: 'CentralReach',
    pill: 'Integration · CentralReach',
    h1: 'Carelu + CentralReach: intake, delivered into your EHR.',
    metaTitle: 'CentralReach Integration — AI Intake That Feeds Your EHR | Carelu',
    metaDescription:
      'Carelu connects with CentralReach: it answers every family instantly, completes intake, verifies insurance, and delivers admitted clients into CentralReach as complete, verified records — no re-keying.',
    intro: [
      'CentralReach is the system of record for a huge share of the ABA industry — and if it\'s yours, Carelu makes it stronger. Carelu sits at the very front of your funnel: it answers every family the moment they reach out, completes intake conversationally, verifies insurance, and then delivers the admitted client into CentralReach as a complete record. Your clinical and billing teams start from a verified file, not a sticky note.',
    ],
    whatItIs:
      'CentralReach is an EHR and practice-management suite built for ABA and related therapies — clinical data collection, scheduling, billing and revenue cycle, reporting, and enterprise workflows. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the layer in front: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection; and waitlist nurture. Every admitted family lands in CentralReach ready to schedule and bill.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The record lands in CentralReach', desc: 'The complete, verified intake syncs into your system of record. Nothing re-keyed, nothing lost in the handoff.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Clinical data, scheduling, billing, RCM', where: 'CentralReach' },
      { job: 'Reporting, compliance & enterprise workflows', where: 'CentralReach' },
    ],
    faq: [
      { q: 'Does Carelu replace CentralReach?', a: 'No — they\'re complementary. CentralReach is the system of record for delivering care; Carelu is the intake layer in front of it. Together they cover the funnel end to end: Carelu converts inquiries into admitted clients, CentralReach runs their care.' },
      { q: 'How does Carelu connect to CentralReach?', a: 'Carelu integrates with leading CRMs and EMRs, CentralReach included, plus webhooks for custom flows — so completed intakes land in your system of record automatically, with the full record attached.' },
      { q: 'What changes for our team day to day?', a: 'New families are answered, verified, and documented before your team touches the file. Coordinators stop chasing packets and start families; clinical and billing teams open CentralReach to records that are already complete.' },
    ],
  },

  'rethink-behavioral-health': {
    slug: 'rethink-behavioral-health',
    name: 'Rethink Behavioral Health',
    pill: 'Integration · Rethink',
    h1: 'Carelu + Rethink: every family answered, every record delivered.',
    metaTitle: 'Rethink Behavioral Health Integration — AI Intake Layer | Carelu',
    metaDescription:
      'Carelu connects with Rethink Behavioral Health: instant 24/7 response to every family, conversational intake and insurance verification, and complete records delivered into your platform.',
    intro: [
      'Rethink Behavioral Health gives ABA organizations a broad platform — clinical tools, practice management, and RCM. Carelu makes that investment work harder by filling it: every inquiry answered in seconds around the clock, every family verified and documented, and every admitted client delivered into your platform ready to schedule and bill.',
    ],
    whatItIs:
      'Rethink Behavioral Health is a behavioral-health technology platform spanning clinical and treatment tools, practice management, and RCM services for ABA and related providers. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the inquiry-to-admission pipeline: 24/7 answering across phone, chat, form, and text; up-front insurance verification; automated document collection and reminders; and waitlist nurture — with finished intakes flowing into your platform.',
    flow: [
      { title: 'A family reaches out', desc: 'Any channel, any hour — Carelu responds instantly, so no inquiry waits for the front desk to open.' },
      { title: 'Carelu qualifies & verifies', desc: 'The essentials captured and insurance verified while motivation is highest.' },
      { title: 'Documents collect themselves', desc: 'Consents, cards, and reports gathered in small conversational steps with automatic nudges.' },
      { title: 'The record lands in your platform', desc: 'Admitted clients arrive in Rethink complete and verified — no double entry.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Insurance verification at first contact', where: 'Carelu' },
      { job: 'Automated document collection & reminders', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Clinical tools, practice management, RCM', where: 'Rethink' },
      { job: 'Staff training & clinical content', where: 'Rethink' },
    ],
    faq: [
      { q: 'Is Carelu an alternative to Rethink?', a: 'No — they solve different halves of the same funnel. Rethink runs clinical and operational work for the clients you have; Carelu converts new inquiries into admitted clients and hands them to your platform.' },
      { q: 'Can Carelu feed intake data into Rethink?', a: 'Carelu integrates with leading CRMs and EMRs and offers webhooks, so completed intakes land in your system of record automatically.' },
      { q: 'Where does the integration pay off first?', a: 'After-hours and overflow response — 41% of family inquiries arrive outside business hours. Carelu catches them instantly, and your platform receives families who would otherwise never have made it in.' },
    ],
  },

  'aloha-aba': {
    slug: 'aloha-aba',
    name: 'Aloha ABA',
    pill: 'Integration · Aloha ABA',
    h1: 'Carelu + Aloha ABA: the front office for your practice system.',
    metaTitle: 'Aloha ABA Integration — AI Intake for Your Practice System | Carelu',
    metaDescription:
      'Carelu works alongside Aloha ABA: it answers every family 24/7, runs intake and insurance verification up front, and delivers admitted clients into your practice-management system with complete records.',
    intro: [
      'If Aloha ABA runs your practice — scheduling, billing, claims — Carelu runs the funnel that fills it. Every family who calls, chats, texts, or submits a form gets answered in seconds, any hour of the day. By the time a family reaches your practice system, they\'re verified, documented, and ready to schedule.',
    ],
    whatItIs:
      'Aloha ABA is a practice-management platform built for ABA providers — scheduling, billing and claims, data collection, and day-to-day practice operations. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the pre-admission front office: instant 24/7 response on every channel, qualification and insurance verification at first contact, conversational document collection, and waitlist nurture — feeding your practice system complete, verified families.',
    flow: [
      { title: 'A family reaches out', desc: 'Carelu answers instantly on phone, chat, form, or text — nights, weekends, and lunch rushes included.' },
      { title: 'Carelu qualifies & verifies', desc: 'Insurance details captured and benefits verified before the family ages in a queue.' },
      { title: 'Documents collect themselves', desc: 'The packet becomes a conversation — completed on a phone, chased automatically when it stalls.' },
      { title: 'The family arrives ready', desc: 'Admitted clients land in your practice system with the complete intake record — ready to schedule and bill.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Scheduling, billing & claims', where: 'Aloha ABA' },
      { job: 'Session data & practice operations', where: 'Aloha ABA' },
    ],
    faq: [
      { q: 'Does Carelu replace Aloha ABA?', a: 'No — Aloha-style platforms manage the practice; Carelu is the intake layer in front. Carelu answers, qualifies, and admits families, then hands complete records to the system that runs your practice.' },
      { q: 'Does Carelu integrate with practice-management systems?', a: 'Yes — Carelu connects to leading CRMs and EMRs and supports webhooks, so admitted families arrive in your system of record without re-keying.' },
      { q: 'What does Carelu add if we already have practice management?', a: 'The pre-admission funnel: 24/7 instant response, up-front verification, automated document collection, and waitlist nurture — the window where our research shows 40–85% of families are lost.' },
    ],
  },

  'chorus': {
    slug: 'chorus',
    name: 'Chorus',
    pill: 'Integration · Chorus',
    h1: 'Carelu + Chorus: full intake, straight into revenue cycle.',
    metaTitle: 'Chorus Integration — AI Intake Into Your RCM Platform | Carelu',
    metaDescription:
      'Carelu connects with Chorus: it answers every family, completes intake, and gathers the documentation Chorus needs — so eligibility, claims, and revenue cycle run on a clean, verified record from day one.',
    intro: [
      'Chorus automates the revenue side of autism care — eligibility, remittances, patient responsibility, and claims. Carelu sits one step earlier, at the family\'s very first hello: it answers every inquiry, completes intake, and captures the insurance and clinical details cleanly, so the record that flows into Chorus is complete and verified before a single claim is built. Front office and revenue cycle, working off the same trusted data.',
    ],
    whatItIs:
      'Chorus is a modular, cloud-native revenue-cycle-management platform for behavioral health and autism care — eligibility verification, remits, patient-pay, and claims — with FHIR/X12 interoperability that connects to existing EHR and billing systems. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the front office in front of the revenue cycle: 24/7 answering across phone, chat, form, and text; qualification and up-front benefits capture; and conversational collection of the insurance details and documents that claims depend on — so Chorus starts every family with clean, complete data.',
    flow: [
      { title: 'A family reaches out', desc: 'Any channel, any hour — Carelu answers in seconds and starts the intake conversation.' },
      { title: 'Carelu captures clean insurance data', desc: 'Payer, member and group IDs, card images, and diagnosis details — collected accurately up front, not reconstructed later.' },
      { title: 'Documents & consents collect themselves', desc: 'Everything the record needs, gathered conversationally with automatic follow-up.' },
      { title: 'Chorus runs the revenue cycle', desc: 'The verified record flows into Chorus, so eligibility, claims, and remits work off accurate data from day one.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & up-front benefits capture', where: 'Carelu' },
      { job: 'Insurance detail & document collection', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Eligibility, remits & claims processing', where: 'Chorus' },
      { job: 'Patient responsibility & revenue cycle', where: 'Chorus' },
    ],
    faq: [
      { q: 'Does Carelu replace Chorus?', a: 'No — they cover different stages. Carelu runs the front office (answering, intake, document capture); Chorus runs the revenue cycle (eligibility, claims, remits). Together, revenue cycle starts from a clean, verified intake record.' },
      { q: 'How does Carelu connect to Chorus?', a: 'Carelu integrates with leading systems and supports webhooks, and Chorus is built for interoperability (FHIR/X12) — so verified intake data flows into the revenue cycle without re-keying.' },
      { q: 'Why does clean intake matter for RCM?', a: 'Most claim denials trace back to bad or missing intake data — wrong member IDs, unverified benefits, missing documentation. Carelu captures it accurately at first contact, so Chorus works off data that\'s right the first time.' },
    ],
  },
  'hubspot': {
    slug: 'hubspot',
    name: 'HubSpot',
    pill: 'Integration · HubSpot',
    h1: 'Carelu + HubSpot: intake done, contacts and deals kept true.',
    metaTitle: 'HubSpot Integration — AI Intake That Fills Your CRM | Carelu',
    metaDescription:
      'Carelu connects with HubSpot: it answers every family instantly, completes intake, verifies insurance, and syncs contacts and deals with property mapping and correct original source — no re-keying.',
    intro: [
      'HubSpot is where a lot of growing practices run marketing and sales, and Carelu keeps it honest. Carelu answers every family the moment they reach out, completes intake conversationally, verifies insurance, and syncs the result into HubSpot as a contact and deal with the properties your team reports on. Stage changes flow through as the family moves, and the original source is set the way HubSpot expects, so attribution reports stay true.',
    ],
    whatItIs:
      'HubSpot is an all-in-one CRM spanning marketing, sales, and service — contacts, deals, pipelines, email automation, forms, live chat, and reporting, known for ease of use. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake layer in front of HubSpot: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection; and waitlist nurture. Two-way contact and deal sync with property mapping, plus HubSpot\'s Original Traffic Source filled from the campaign and referrer Carelu captured.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The record lands in HubSpot', desc: 'Contact and deal created or updated with mapped properties and the correct original source. Stage changes keep syncing as the family moves.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Marketing campaigns, email automation & website tooling', where: 'HubSpot' },
      { job: 'Cross-team pipelines, contacts & reporting', where: 'HubSpot' },
    ],
    faq: [
      { q: 'Does Carelu replace HubSpot?', a: 'No — they\'re complementary. HubSpot stays your CRM and marketing hub; Carelu is the intake layer in front of it that turns inquiries into admitted families and keeps HubSpot updated.' },
      { q: 'What syncs between Carelu and HubSpot?', a: 'Contacts and deals, with property mapping set during onboarding: family and child details, insurance and verification results, documents and consents, source and campaign, and intake stage. Updates flow as the family moves through intake.' },
      { q: 'Will our attribution reports still work?', a: 'Yes. Carelu derives HubSpot\'s Original Traffic Source from the UTM and referrer it captured on the family\'s first visit and writes it the way HubSpot expects, so source reports match reality instead of showing everything as "Offline".' },
    ],
  },

  'zoho-crm': {
    slug: 'zoho-crm',
    name: 'Zoho CRM',
    pill: 'Integration · Zoho CRM',
    h1: 'Carelu + Zoho CRM: intake done, leads delivered into Zoho.',
    metaTitle: 'Zoho CRM Integration — AI Intake That Fills Your CRM | Carelu',
    metaDescription:
      'Carelu connects with Zoho CRM: it answers every family instantly, completes intake, verifies insurance, and creates and updates Zoho leads and contacts with the full record attached.',
    intro: [
      'Zoho CRM gives practices a lot of CRM for the money, and Carelu makes sure it fills up. Carelu answers every family the moment they reach out, completes intake conversationally, verifies insurance, and creates the lead or contact in Zoho with the complete record attached. As the family moves through intake, Zoho stays current without anyone re-keying.',
    ],
    whatItIs:
      'Zoho CRM is a broad, affordable CRM suite — leads, contacts, deals, workflow automation, email, and reporting, part of the wider Zoho application family. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake layer in front of Zoho: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection; and waitlist nurture. Leads and contacts are created and updated in Zoho with field mapping set once during onboarding.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The record lands in Zoho', desc: 'Lead or contact created with mapped fields and the full intake attached. Updates keep flowing as the stage changes.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Contacts, deals, workflows & email across the business', where: 'Zoho CRM' },
      { job: 'Reporting and the wider Zoho suite', where: 'Zoho CRM' },
    ],
    faq: [
      { q: 'Does Carelu replace Zoho CRM?', a: 'No — Zoho stays your CRM. Carelu is the intake layer in front of it, doing the answering, verifying, and document collection, then keeping Zoho updated.' },
      { q: 'What does Carelu write into Zoho?', a: 'Leads and contacts with mapped fields: family and child details, insurance and verification results, documents and consents, source, and intake stage. Mappings are configured once during onboarding.' },
      { q: 'What changes for our team day to day?', a: 'New families are answered, verified, and documented before anyone opens Zoho. Coordinators work the pipeline from records that are already complete.' },
    ],
  },

  'monday': {
    slug: 'monday',
    name: 'monday.com',
    pill: 'Integration · monday.com',
    h1: 'Carelu + monday.com: every family becomes a complete item on your board.',
    metaTitle: 'monday.com Integration — AI Intake That Fills Your Board | Carelu',
    metaDescription:
      'Carelu connects with monday.com: it answers every family instantly, completes intake, verifies insurance, and creates items on the board and group you choose with columns filled from the intake.',
    intro: [
      'Plenty of practices run intake on a monday.com board, and Carelu keeps that board full and accurate. Carelu answers every family the moment they reach out, completes intake conversationally, verifies insurance, and creates an item on the board and group you choose with columns filled from the intake. As the stage changes, the item updates — nobody drags cards or retypes a phone number.',
    ],
    whatItIs:
      'monday.com is a flexible work-management platform — boards, groups, items, and columns that teams shape into pipelines, task lists, and workflows, with automations and dashboards on top. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake layer in front of monday.com: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection; and waitlist nurture. Each family arrives as an item with mapped columns on the board and group you pick.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The item lands on your board', desc: 'Created in the board and group you chose, columns filled from the intake, updated as the family moves.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Boards, automations & team workflows', where: 'monday.com' },
      { job: 'Dashboards and cross-team work management', where: 'monday.com' },
    ],
    faq: [
      { q: 'Which board do families go to?', a: 'Whichever you choose — during onboarding you pick the board and group, and map Carelu\'s intake fields to the columns on it. Different locations or programs can route to different boards.' },
      { q: 'Does Carelu replace monday.com?', a: 'No. monday.com stays the place your team manages work; Carelu is the intake layer in front of it that does the answering, verifying, and collecting, then keeps the board current.' },
      { q: 'What happens when a family\'s status changes?', a: 'The item updates. Stage, verification results, and collected documents flow through as the family moves, so the board reflects reality without manual upkeep.' },
    ],
  },

  'clickup': {
    slug: 'clickup',
    name: 'ClickUp',
    pill: 'Integration · ClickUp',
    h1: 'Carelu + ClickUp: intake done, tasks created with every field filled.',
    metaTitle: 'ClickUp Integration — AI Intake That Fills Your Lists | Carelu',
    metaDescription:
      'Carelu connects with ClickUp: it answers every family instantly, completes intake, verifies insurance, and creates tasks in the list you choose with custom fields populated from the intake.',
    intro: [
      'If your coordinators live in ClickUp, Carelu meets them there. Carelu answers every family the moment they reach out, completes intake conversationally, verifies insurance, and creates a task in the list you choose with custom fields populated from the intake. Your team works from ClickUp as usual, on records that are already complete.',
    ],
    whatItIs:
      'ClickUp is an all-in-one work and task platform — spaces, lists, tasks, custom fields, and views, with automations, docs, and dashboards layered on. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake layer in front of ClickUp: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection; and waitlist nurture. Each family arrives as a task with custom fields mapped from the intake.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The task lands in ClickUp', desc: 'Created in the list you chose with custom fields filled, then updated as the family moves through intake.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Lists, assignments, automations & team workflows', where: 'ClickUp' },
      { job: 'Docs, dashboards and cross-team work', where: 'ClickUp' },
    ],
    faq: [
      { q: 'Which list do families go to?', a: 'The one you choose during onboarding, where Carelu\'s intake fields are mapped to your custom fields. Different locations or programs can route to different lists.' },
      { q: 'Does Carelu replace ClickUp?', a: 'No. ClickUp stays where your team manages work; Carelu is the intake layer in front of it that does the answering, verifying, and collecting, then keeps the task current.' },
      { q: 'What changes for our team day to day?', a: 'Tasks arrive complete. Coordinators stop chasing packets and retyping details and start families from ClickUp instead.' },
    ],
  },

  'gohighlevel': {
    slug: 'gohighlevel',
    name: 'GoHighLevel',
    pill: 'Integration · GoHighLevel',
    h1: 'Carelu + GoHighLevel: intake done, contacts delivered into your pipeline.',
    metaTitle: 'GoHighLevel Integration — AI Intake That Fills Your Pipeline | Carelu',
    metaDescription:
      'Carelu connects with GoHighLevel: it answers every family instantly, completes intake, verifies insurance, and pushes contacts and opportunities into your sub-account with tags and pipeline stage.',
    intro: [
      'Practices and the agencies that serve them run a lot on GoHighLevel, and Carelu plugs into it cleanly. Carelu answers every family the moment they reach out, completes intake conversationally, verifies insurance, and pushes the contact and opportunity into your GoHighLevel sub-account with tags and pipeline stage set — ready for the automations you already run.',
    ],
    whatItIs:
      'GoHighLevel is an all-in-one marketing and CRM platform popular with agencies and the businesses they serve — contacts, pipelines, opportunities, funnels, and automation workflows, organized in sub-accounts. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake layer in front of GoHighLevel: 24/7 instant response on phone, chat, form, and text; qualification and insurance verification at first contact; conversational document and consent collection; and waitlist nurture. Contacts and opportunities arrive in your sub-account with tags and stage set from the intake.',
    flow: [
      { title: 'A family reaches out', desc: 'Phone, chat, web form, or text — any hour. Carelu answers in seconds, in English or Spanish.' },
      { title: 'Carelu qualifies & verifies', desc: 'Diagnosis status, location, availability, and insurance — verified up front, while the family is engaged.' },
      { title: 'Documents collect themselves', desc: 'Insurance cards, diagnosis reports, consents — gathered conversationally with automatic follow-up on anything missing.' },
      { title: 'The contact lands in GoHighLevel', desc: 'Contact and opportunity created in your sub-account with tags and pipeline stage, triggering the workflows you already built.' },
    ],
    rows: [
      { job: 'Answering new families 24/7, on every channel', where: 'Carelu' },
      { job: 'Qualification & insurance verification at first contact', where: 'Carelu' },
      { job: 'Document & consent collection with automatic follow-up', where: 'Carelu' },
      { job: 'Waitlist nurture & re-engagement', where: 'Carelu' },
      { job: 'Pipelines, funnels & marketing automation', where: 'GoHighLevel' },
      { job: 'Sub-account and agency workflows', where: 'GoHighLevel' },
    ],
    faq: [
      { q: 'Does Carelu replace GoHighLevel?', a: 'No — GoHighLevel stays your CRM and automation hub. Carelu is the intake layer in front of it that does the answering, verifying, and collecting, then hands the contact over with tags and stage set.' },
      { q: 'Can our existing GoHighLevel workflows react to Carelu?', a: 'Yes. Because Carelu sets tags and pipeline stage on the contact and opportunity, the triggers you already use fire as they would for any other lead.' },
      { q: 'We\'re an agency managing several practices. Does that work?', a: 'Yes. Each practice connects to its own sub-account, so contacts land where that practice\'s team works.' },
    ],
  },

  'callrail': {
    slug: 'callrail',
    name: 'CallRail',
    pill: 'Integration · CallRail',
    h1: 'Carelu + CallRail: every call becomes a lead, recorded on the profile.',
    metaTitle: 'CallRail Integration — Every Tracked Call Becomes a Lead | Carelu',
    metaDescription:
      'Carelu connects with CallRail: every tracked call is recorded and transcribed, matched to the family\'s profile or created as a new lead automatically, and logged on the timeline — so you can review calls at scale.',
    intro: [
      'Phone calls are where most ABA intake actually happens, and where the least gets written down. Connect CallRail and none of it is lost. Every call CallRail tracks lands in Carelu: recorded, transcribed, and matched to the family who called. If the caller is new, Carelu creates the lead automatically. If they already exist, the call is recorded on their profile alongside every chat, form, and email — so anyone on your team can open a family and hear exactly what was said.',
      'The result is maximum context on every family and a complete picture of how your intake organization performs on the phone. Review calls at scale, see who is converting and who is losing families, and coach from real conversations instead of memory.',
    ],
    whatItIs:
      'CallRail is call-tracking and lead-engagement software — tracking numbers per campaign and channel, call recording, transcription, and attribution that shows which marketing produced which calls. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the intake record behind every call: the caller matched to an existing family or created as a new lead automatically, the recording and transcript logged on the profile timeline, and the call sitting beside every other touchpoint. Reporting and Ask AI then cover the phone too — call volume, outcomes, and what families are actually asking — so you can review calls at scale.',
    flow: [
      { title: 'A family calls a tracked number', desc: 'CallRail records the call and tells Carelu the moment it ends — no one has to do anything.' },
      { title: 'Carelu finds the family', desc: 'The caller is matched by phone number to an existing lead. New callers become new leads automatically, with source and campaign from CallRail attached.' },
      { title: 'The call lands on the profile', desc: 'Recording and transcript are logged on the family\'s timeline next to every chat, form, and email, ready to play back.' },
      { title: 'You review at scale', desc: 'Every call is searchable and reportable across the practice — outcomes, questions asked, follow-ups owed — with full context on each family.' },
    ],
    rows: [
      { job: 'Creating or matching the lead for every caller', where: 'Carelu' },
      { job: 'Recording and transcript on the family\'s profile timeline', where: 'Carelu' },
      { job: 'Reviewing calls, outcomes & follow-ups across the practice', where: 'Carelu' },
      { job: 'Tracking numbers, call routing & recording', where: 'CallRail' },
      { job: 'Which campaign or channel produced the call', where: 'CallRail' },
    ],
    faq: [
      { q: 'How does the connection work?', a: 'You paste Carelu\'s webhook address into CallRail and your CallRail API key into Carelu. From then on every completed call is sent to Carelu automatically. No developer needed.' },
      { q: 'What happens when someone calls who isn\'t in Carelu yet?', a: 'Carelu creates the lead automatically from the call, with the phone number, recording, transcript, and the campaign CallRail attributed it to. Your team picks up from a complete record instead of a missed-call log.' },
      { q: 'Will calls get attached to the wrong family?', a: 'Calls attach only on an exact phone-number match. When a caller looks like they might be an existing family under a different number, Carelu flags a possible match for a person to confirm — it never merges on a guess.' },
      { q: 'Do we still need Carelu\'s phone agent if we use CallRail?', a: 'They do different jobs. CallRail tracks and records calls your team answers; Carelu\'s phone agent answers calls itself, 24/7. Many practices run both: the agent takes the calls no one can, and CallRail makes sure every human-answered call is captured too.' },
    ],
    ctaSub: 'See a tracked call land on a family\'s profile — recorded, transcribed, and ready to review.',
  },

  'google-calendar': {
    slug: 'google-calendar',
    name: 'Google Calendar',
    pill: 'Integration · Google Calendar',
    h1: 'Carelu + Google Calendar: the assessment booked in the same conversation.',
    metaTitle: 'Google Calendar Integration — Assessments Booked During Intake | Carelu',
    metaDescription:
      'Carelu connects with Google Calendar: it reads your team\'s working hours and open slots, offers times to qualified families, and books the assessment straight onto the right calendar.',
    intro: [
      'The moment a family is qualified is the moment they are most likely to book. Carelu connects to Google Calendar so that moment isn\'t lost to a callback. It reads your team\'s working hours and open slots, offers times the family can actually take, and books the assessment straight onto the right calendar — with the family\'s details attached, in the same conversation that qualified them.',
    ],
    whatItIs:
      'Google Calendar is the scheduling layer of Google Workspace — shared calendars, availability, invitations, and time-zone handling for teams. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the booking conversation: working hours and buffers you set, availability read live from the calendar, times offered to the family in plain language, and the appointment created with the intake attached. Rescheduling and reminders happen in the same thread.',
    flow: [
      { title: 'A family is qualified', desc: 'Carelu has answered, verified insurance, and confirmed the family is a fit — while they are still engaged.' },
      { title: 'Carelu reads availability', desc: 'Working hours, buffers, and open slots come from the connected calendar, in the practice\'s time zone.' },
      { title: 'The family picks a time', desc: 'Carelu offers real options in the conversation and confirms the one they choose.' },
      { title: 'The assessment lands on the calendar', desc: 'The event is created on the right calendar with the family\'s details, and the family gets confirmation and reminders.' },
    ],
    rows: [
      { job: 'Offering times and confirming the booking in the conversation', where: 'Carelu' },
      { job: 'Reminders, rescheduling & no-show follow-up', where: 'Carelu' },
      { job: 'Attaching the intake record to the appointment', where: 'Carelu' },
      { job: 'Team calendars, availability & invitations', where: 'Google Calendar' },
      { job: 'The schedule your clinicians already live in', where: 'Google Calendar' },
    ],
    faq: [
      { q: 'Which calendar does Carelu book onto?', a: 'The one you connect and choose during setup — a shared assessments calendar or an individual clinician\'s. Working hours and buffers are set in Carelu, and availability is read live from Google.' },
      { q: 'Can families reschedule?', a: 'Yes. They reply in the same conversation and Carelu offers new times, moves the event, and sends updated confirmation.' },
      { q: 'We use Outlook, not Google. What are our options?', a: 'Microsoft Outlook calendar booking is in progress. Until it ships, Carelu can collect availability preferences and hand the booking to your team.' },
    ],
    ctaSub: 'See Carelu qualify a family and book their assessment onto your calendar in one conversation.',
  },

  'gmail': {
    slug: 'gmail',
    name: 'Gmail',
    pill: 'Integration · Gmail & Google Workspace',
    h1: 'Carelu + Gmail: follow-ups sent from the address families already trust.',
    metaTitle: 'Gmail Integration — Follow-Ups From Your Own Address | Carelu',
    metaDescription:
      'Connect a coordinator\'s Google account and Carelu sends follow-ups, intake links, and document requests from that address. Send-only access; Carelu never reads the inbox.',
    intro: [
      'A follow-up from a stranger\'s address gets ignored. One from the coordinator a family already spoke to gets opened. Connect a Google account and Carelu sends its follow-ups, resume links, and document requests from that address — so every message carries your name, lands in the inbox, and reads like it came from your team, because it did.',
    ],
    whatItIs:
      'Gmail is the email service inside Google Workspace, used by many practices for their staff mailboxes. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu writes and sends the email: follow-ups timed to where the family is in intake, links to resume an unfinished form, requests for missing documents, and appointment details — from the connected coordinator\'s address. Access is send-only; Carelu never reads or stores the inbox.',
    flow: [
      { title: 'Connect a Google account', desc: 'A coordinator signs in with Google once. Carelu asks only for permission to send, plus the address and display name.' },
      { title: 'Carelu drafts the follow-up', desc: 'Written for where the family is — an unfinished form, a missing insurance card, a scheduled assessment.' },
      { title: 'It sends from your address', desc: 'The family sees the coordinator\'s name and address, and replies go straight to that inbox.' },
      { title: 'Every send is on the record', desc: 'Each email shows in the family\'s activity timeline, so the team sees what was sent and when.' },
    ],
    rows: [
      { job: 'Writing and timing follow-ups, links & document requests', where: 'Carelu' },
      { job: 'Recording every send on the family\'s timeline', where: 'Carelu' },
      { job: 'Delivering from the coordinator\'s address', where: 'Gmail' },
      { job: 'Replies and the inbox itself', where: 'Gmail' },
    ],
    faq: [
      { q: 'Can Carelu read our email?', a: 'No. The connection uses a send-only scope. Carelu can send messages from the connected address; it cannot read, search, or store the inbox.' },
      { q: 'Do we have to use Gmail?', a: 'No. Practices without Google Workspace get sending set up on their own domain, with SPF, DKIM, and DMARC in place, so messages still carry the practice\'s name.' },
      { q: 'Who decides what gets sent?', a: 'You do. Follow-up sequences and templates are configured per practice, and each send is visible on the family\'s activity timeline.' },
    ],
    ctaSub: 'See Carelu follow up with a family from your own address and bring them back to finish intake.',
  },

  'meta-ads': {
    slug: 'meta-ads',
    name: 'Meta Ads',
    pill: 'Integration · Meta Ads',
    h1: 'Carelu + Meta Ads: cost per admitted family, not cost per click.',
    metaTitle: 'Meta Ads Integration — Ad Spend Attributed to Admitted Families | Carelu',
    metaDescription:
      'Connect your Facebook and Instagram ad accounts and Carelu lines up daily spend against the families each campaign produced — through qualification, verification, and admission.',
    intro: [
      'Meta shows you clicks and leads. It can\'t show you which of those families had accepted insurance, finished their documents, and were admitted. Connect your ad accounts and Carelu closes that gap: daily spend is pulled in and lined up against the sessions, leads, and admitted families each campaign produced, so reporting shows what a family actually costs — not what a click does.',
    ],
    whatItIs:
      'Meta Ads is the advertising platform for Facebook and Instagram — campaigns, ad sets, audiences, budgets, and lead forms, managed in Ads Manager. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds the other half of the funnel: the families those ads produced, answered and qualified 24/7, with source and campaign captured at first contact. Spend from connected ad accounts joins the pipeline in Reporting, so every campaign is judged by admitted families.',
    flow: [
      { title: 'Connect your ad accounts', desc: 'Sign in with Meta once and choose the ad accounts to include.' },
      { title: 'Spend arrives daily', desc: 'Carelu pulls campaign spend each day and keeps it alongside the pipeline.' },
      { title: 'Families are matched to campaigns', desc: 'Source and campaign are captured when the family first reaches out, on any channel.' },
      { title: 'Reporting shows the real cost', desc: 'Cost per lead, per qualified family, and per admitted family — by campaign, by month, by location.' },
    ],
    rows: [
      { job: 'Answering and qualifying every family the ads produce', where: 'Carelu' },
      { job: 'Capturing source and campaign at first contact', where: 'Carelu' },
      { job: 'Cost per qualified and admitted family in Reporting', where: 'Carelu' },
      { job: 'Campaigns, audiences, creative & budgets', where: 'Meta Ads' },
      { job: 'Ad delivery and platform-side metrics', where: 'Meta Ads' },
    ],
    faq: [
      { q: 'Does Carelu manage our ads?', a: 'No. You or your agency run the campaigns in Ads Manager. Carelu connects to the ad accounts to read spend and attribute it to the families that came through.' },
      { q: 'What does Carelu access?', a: 'Read access to the ad accounts you choose, used to pull daily spend. Carelu does not change campaigns, audiences, or budgets.' },
      { q: 'Does this work with Meta lead forms and with our website?', a: 'Families are attributed whether they arrive through a landing page, a chat, a form, or a call, as long as the source is captured at first contact — which Carelu does on every channel.' },
    ],
    ctaSub: 'See the pipeline with ad spend attached and find out what an admitted family really costs you.',
  },

  'google-ads': {
    slug: 'google-ads',
    name: 'Google Ads',
    pill: 'Integration · Google Ads',
    h1: 'Carelu + Google Ads: every dollar followed to an admitted family.',
    metaTitle: 'Google Ads Integration — Spend Attributed to Admitted Families | Carelu',
    metaDescription:
      'Connect your Google Ads account and Carelu pulls campaign spend daily and attributes it to the sessions, leads, and admitted families it generated.',
    intro: [
      'Search ads bring families who are looking right now — and a lot of budget that\'s hard to tie to admissions. Connect your Google Ads account and Carelu pulls campaign spend in daily and attributes it to the sessions, leads, and admitted families it generated. Reporting stops at the number that matters: what it costs to admit a family from each campaign.',
    ],
    whatItIs:
      'Google Ads is Google\'s advertising platform — search, display, and video campaigns with keywords, bidding, budgets, and conversion tracking. (Based on public information; verify current capabilities with the vendor.)',
    whatCareluAdds:
      'Carelu adds what happens after the click: the family answered and qualified 24/7, source and campaign captured at first contact, and spend from the connected account joined to the pipeline in Reporting — cost per lead, per qualified family, per admitted family.',
    flow: [
      { title: 'Connect your Google Ads account', desc: 'Sign in with Google once and choose the customer accounts to include.' },
      { title: 'Spend arrives daily', desc: 'Carelu pulls campaign spend each day and keeps it alongside the pipeline.' },
      { title: 'Families are matched to campaigns', desc: 'Source and campaign are captured when the family first reaches out, on any channel.' },
      { title: 'Reporting shows the real cost', desc: 'Cost per lead, per qualified family, and per admitted family — by campaign, by month, by location.' },
    ],
    rows: [
      { job: 'Answering and qualifying every family the ads produce', where: 'Carelu' },
      { job: 'Capturing source and campaign at first contact', where: 'Carelu' },
      { job: 'Cost per qualified and admitted family in Reporting', where: 'Carelu' },
      { job: 'Keywords, bidding, creative & budgets', where: 'Google Ads' },
      { job: 'Ad delivery and platform-side metrics', where: 'Google Ads' },
    ],
    faq: [
      { q: 'Does Carelu manage our campaigns?', a: 'No. You or your agency run them in Google Ads. Carelu connects to read spend and attribute it to the families that came through.' },
      { q: 'What does Carelu access?', a: 'Read access to the customer accounts you choose, used to pull daily spend. Carelu does not change keywords, bids, or budgets.' },
      { q: 'Can we see this per location or per campaign?', a: 'Yes. Reporting breaks cost per lead, qualified family, and admitted family down by campaign, month, and location.' },
    ],
    ctaSub: 'See the pipeline with ad spend attached and find out what an admitted family really costs you.',
  },

  'webhooks': {
    slug: 'webhooks',
    name: 'Webhooks',
    pill: 'Integration · Webhooks',
    h1: 'Carelu + webhooks: every record, delivered to any system you run.',
    metaTitle: 'Webhooks — Send Every Intake Record to Any System | Carelu',
    metaDescription:
      'Carelu sends every lead, stage change, or completed intake as JSON to any HTTPS endpoint, with a mapped payload and full delivery history. PHI goes directly to your system, never through a consumer automation tool.',
    intro: [
      'Not every system has a logo on an integrations page, and it shouldn\'t have to. Carelu sends every lead, stage change, or completed intake as JSON to any HTTPS endpoint you give it — a custom EHR, an internal database, a data warehouse, or a vendor with an API. The payload is mapped to the fields your system expects, every delivery is logged, and protected health information goes directly from Carelu to you.',
    ],
    whatItIs:
      'A webhook is an HTTPS endpoint your system exposes to receive data as events happen. Most modern platforms, in-house tools, and integration layers can accept one.',
    whatCareluAdds:
      'Carelu adds the event stream and the mapping: choose which events to send, map intake fields to your payload with placeholders, and review a delivery history with the response your system returned. It is built for HIPAA — PHI travels directly to your endpoint under a BAA, with no consumer automation tool in between.',
    flow: [
      { title: 'Choose the events', desc: 'New lead, stage change, completed intake, or all of them — per campaign or across the practice.' },
      { title: 'Map the payload', desc: 'Intake fields — family, child, insurance, documents, consents, source, stage — placed into the JSON shape your system expects.' },
      { title: 'Carelu delivers', desc: 'Each event is posted to your endpoint as it happens, with a full record of the request and the response.' },
      { title: 'You see every delivery', desc: 'A delivery history shows what was sent, when, and what your system answered — so integration issues are visible, not silent.' },
    ],
    rows: [
      { job: 'Answering, qualifying, verifying & collecting documents', where: 'Carelu' },
      { job: 'Mapping fields and delivering each event with history', where: 'Carelu' },
      { job: 'Keeping PHI on a direct, BAA-covered path', where: 'Carelu' },
      { job: 'Receiving the record and acting on it', where: 'Your system' },
    ],
    faq: [
      { q: 'Why not Zapier or Make?', a: 'Consumer automation tools sit in the middle of the data path and are rarely covered by a BAA, which makes them a poor place for protected health information. Carelu posts directly to your endpoint instead. Read more on our Zapier and Make HIPAA risk page.' },
      { q: 'What does the payload contain?', a: 'Whatever you map: family and child details, insurance and verification results, uploaded documents, consent records, lead source and campaign, and intake stage. Placeholders put each field where your system expects it.' },
      { q: 'What if our system rejects a delivery?', a: 'The response is recorded in the delivery history — status and body — so your team or ours can see exactly what the receiving system said and fix the mapping.' },
    ],
    ctaSub: 'Tell us what your system expects and see a completed intake arrive in it.',
  },
};

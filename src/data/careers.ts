/* Open roles on /careers. Each entry renders at /careers/<slug> via
   CareersRolePage. Adding a role = entry here + App.tsx route +
   sitemap.xml + llms.txt. */

export interface CareerRole {
  slug: string;
  title: string;
  team: string;
  where: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  intro: string;
  facts: { k: string; v: string }[];
  doing: { title: string; desc: string }[];
  lookingFor: string[];
  niceToHave: string[];
  applyNote: string;
}

const NYC_FACTS = (team: string) => [
  { k: 'Location', v: 'New York City, in office' },
  { k: 'Salary', v: '$120K – $160K' },
  { k: 'Equity', v: '0.1% – 0.3%' },
  { k: 'Team', v: team },
];

export const ROLES: CareerRole[] = [
  {
    slug: 'solutions-engineer',
    title: 'Solutions Engineer',
    team: 'Solutions',
    where: 'New York City · In office',
    seoTitle: 'Solutions Engineer — Careers at Carelu, New York',
    seoDescription: 'Join Carelu in New York City. We are bringing AI to the behavioral healthcare front office. Hiring a Solutions Engineer: $120K–$160K, 0.1%–0.3% equity, in office.',
    tagline: 'Bring AI to the front office of behavioral healthcare. Forward-deployed, customer-facing and technical, with tons of autonomy.',
    intro: 'Carelu helps healthcare providers turn inquiries into completed intakes and get people ready to start care, with AI conversations, intake forms, document collection, signatures, follow-ups and connections to the systems providers already use. As a forward-deployed Solutions Engineer you bring world-class go-to-market workflows to providers so they can deliver care faster. High impact, tons of autonomy.',
    facts: NYC_FACTS('Solutions'),
    doing: [
      { title: 'Meet customers all day', desc: 'You run kickoffs and working sessions with the people who run ABA and behavioral health front offices: CEOs, intake directors, coordinators. You map how inquiries come in, how their team handles intake and where things get stuck, until you know exactly how a family gets from first call to first session.' },
      { title: 'Turn workflows into software', desc: 'You take a clinic’s intake packet, payer rules, state requirements and routing, and build them into Carelu: qualification rules, forms, document requests, phone agents, follow-ups and handoffs that do the work their team does by hand today.' },
      { title: 'Wire into their stack', desc: 'Salesforce, HubSpot, Zoho, monday.com, GoHighLevel, RingCentral, fax lines, EHRs. You set up the integrations, map fields and make sure every lead, document and status update lands in the right place in both directions.' },
      { title: 'Get them live, then make them faster', desc: 'You own the path from signed contract to go-live: test the full process with the customer, troubleshoot what breaks, get their team comfortable with it, and keep tuning once it is running so families get into care faster.' },
      { title: 'Make it repeatable', desc: 'You turn what worked for one customer into templates and documentation, so the next implementation ships faster and better.' },
      { title: 'Shape the product', desc: 'You sit closest to customers, so you bring recurring needs and problems straight back to product and engineering, and you see them ship.' },
    ],
    lookingFor: [
      'You want to hit the ground running. You would rather ship something for a customer this week than plan it for next quarter.',
      'You are comfortable in front of customers and you earn their confidence by understanding their business better than they expect. You ask good questions and explain a technical setup in plain language.',
      'You are technical enough to build. You can read an API doc, work with webhooks, map data between systems, write a prompt that holds up on a live call, and debug what breaks.',
      'You have configured HubSpot, Salesforce or a similar CRM (pipelines, fields, workflows, automation) and you have used n8n, Make, Zapier or similar tools to connect systems.',
      'You like autonomy. You can run several customer projects at once and own each one end to end, with a small, very talented team behind you.',
    ],
    niceToHave: [
      'Experience in go-to-market, solutions, implementation, RevOps or forward-deployed roles.',
      'Basic JavaScript, Python or SQL.',
      'Experience with healthcare operations or patient intake.',
    ],
    applyNote: 'Send a note with your LinkedIn or resume and something you have built.',
  },
  {
    slug: 'implementation-engineer',
    title: 'Implementation Engineer',
    team: 'Solutions',
    where: 'New York City · In office',
    seoTitle: 'Implementation Engineer — Careers at Carelu, New York',
    seoDescription: 'Join Carelu in New York City. Own customer implementations end to end: intake workflows, CRM integrations and automation for healthcare providers. $120K–$160K, 0.1%–0.3% equity, in office.',
    tagline: 'Own customer implementations from the first workflow conversation to launch. CRM, automation and AI, for healthcare providers.',
    intro: 'Carelu helps healthcare providers turn inquiries into completed intakes and get people ready to start care. We bring together AI conversations, intake forms, document collection, signatures, follow-ups and connections to the systems providers already use. You will work directly with providers to understand how their teams operate, then configure Carelu, connect their existing systems and automate the work they handle by hand today. If you have built workflows in HubSpot or Salesforce, connected tools together, and find yourself trying platforms like Clay because you are curious what you can build, this could be a good fit.',
    facts: NYC_FACTS('Solutions'),
    doing: [
      { title: 'Understand each customer’s process', desc: 'Meet with providers to map out how inquiries come in, how their teams handle intake, and where things get stuck.' },
      { title: 'Build intake workflows', desc: 'Configure qualification rules, forms, document requests, follow-ups, routing and handoffs around each customer’s needs.' },
      { title: 'Connect their systems', desc: 'Set up CRM integrations, map fields, and make sure information and status updates move correctly between Carelu and the tools customers already use.' },
      { title: 'Automate repetitive work', desc: 'Build workflows that cut manual data entry, trigger the right next steps and keep every intake moving.' },
      { title: 'Own testing and launch', desc: 'Test the full process, troubleshoot issues, help customers get comfortable with the setup, and make sure it works in practice, not just on paper.' },
      { title: 'Make implementations repeatable', desc: 'Create templates and documentation that help the team deliver better setups faster, and bring recurring customer needs back to product and engineering.' },
    ],
    lookingFor: [
      'Experience in RevOps, sales operations, GTM engineering, CRM implementation, solutions engineering or technical consulting.',
      'Hands-on experience configuring HubSpot, Salesforce or a similar CRM, including pipelines, fields, workflows and automation.',
      'Systems or automations you have personally built and can walk us through.',
      'Familiarity with n8n, Make, Zapier or similar platforms, and comfort with APIs, webhooks and integrations.',
      'Strong communication. You ask good questions, understand what a customer needs, and explain a technical setup in plain language.',
      'Curiosity about AI and new tools, plus the patience to troubleshoot until things work reliably.',
      'The ability to run several customer projects at once and follow through from requirements to a working setup.',
    ],
    niceToHave: [
      'Experience at a HubSpot or Salesforce implementation agency or a RevOps consultancy.',
      'Familiarity with Clay and other sales automation tools.',
      'Basic JavaScript, Python or SQL.',
      'Experience with healthcare operations or patient intake.',
    ],
    applyNote: 'Send your LinkedIn or resume. If you have a CRM implementation, workflow or automation you are proud of, include a short description or walkthrough. We would love to see how you think.',
  },
];

export const roleBySlug = (slug: string | undefined) => ROLES.find(r => r.slug === slug);

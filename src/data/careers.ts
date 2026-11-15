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
    seoDescription: 'Join Carelu in New York City as a Solutions Engineer. Own customer implementations end to end: intake workflows, CRM integrations and automation for healthcare providers. $120K–$160K, 0.1%–0.3% equity, in office.',
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

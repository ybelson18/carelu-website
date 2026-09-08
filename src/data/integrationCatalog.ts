/* ================================================================
   INTEGRATION CATALOG (/integrations)
   Every system Carelu connects to, grouped by category. Deep-dive
   pages live in integrations.ts (href → /integrations/:slug);
   comparison pages in crms.ts (href → /carelu-vs-:slug). Items
   without a page render as cards without a link. Keep this list
   truthful to what the product ships — "Coming soon" is the only
   allowed status for anything not live.
   ================================================================ */

export interface CatalogItem {
  name: string;
  blurb: string;            // one or two sentences, additive framing
  href?: string;            // deep-dive or comparison page
  linkLabel?: string;       // defaults to "Learn more"
  status?: 'Coming soon';
  featured?: boolean;       // larger card at the top of its group
  logo?: string;            // /logos/<file>; items with a logo appear on the homepage wall
  logoWidth?: number;       // rendered width on the homepage wall (px) — evens out marks vs wordmarks
  hideFromWall?: boolean;   // has a logo for the directory but no place on the homepage wall
}

export interface CatalogGroup {
  id: string;
  title: string;
  lead: string;             // one line under the group title
  items: CatalogItem[];
}

export const integrationCatalog: CatalogGroup[] = [
  {
    id: 'crm',
    title: 'CRMs & pipelines',
    lead: 'Carelu does the intake and delivers each complete family record into the CRM your team already works in — or serves as the CRM itself.',
    items: [
      {
        name: 'Salesforce',
        logoWidth: 57,
        logo: '/logos/salesforce.svg',
        blurb: 'Every admitted family lands in Salesforce as a complete, mapped record — contact, child, insurance, documents, consents, source, and stage. Field-level mapping to standard or custom objects.',
        href: '/integrations/salesforce',
        linkLabel: 'See the integration',
        featured: true,
      },
      {
        name: 'HubSpot',
        logoWidth: 109,
        logo: '/logos/hubspot.svg',
        blurb: 'Two-way contact and deal sync with property mapping. Carelu also fills HubSpot\'s Original Traffic Source from the campaign and referrer it captured, so attribution reports stay honest.',
        href: '/integrations/hubspot',
        linkLabel: 'See the integration',
      },
      {
        name: 'Zoho CRM',
        logoWidth: 86,
        logo: '/logos/zoho-crm.svg',
        blurb: 'Leads and contacts created and updated in Zoho as families move through intake, with the full record attached.',
        href: '/integrations/zoho-crm',
        linkLabel: 'See the integration',
      },
      {
        name: 'monday.com',
        logoWidth: 62,
        logo: '/logos/monday.svg',
        blurb: 'Each family becomes an item on the board and group you choose, with columns filled from the intake and updated as the stage changes.',
        href: '/integrations/monday',
        linkLabel: 'See the integration',
      },
      {
        name: 'ClickUp',
        logoWidth: 44,
        logo: '/logos/clickup.svg',
        blurb: 'Intakes arrive as tasks in the list you pick, custom fields populated, so coordinators work from ClickUp without re-keying anything.',
        href: '/integrations/clickup',
        linkLabel: 'See the integration',
      },
      {
        name: 'GoHighLevel',
        logoWidth: 120,
        logo: '/logos/gohighlevel.svg',
        blurb: 'Contacts and opportunities pushed into your GoHighLevel sub-account with tags and pipeline stage, ready for the automations you already run.',
        href: '/integrations/gohighlevel',
        linkLabel: 'See the integration',
      },
    ],
  },
  {
    id: 'ehr',
    title: 'Practice management, EHR & revenue cycle',
    lead: 'Carelu sits in front of the system that runs care and billing, and hands it a verified, complete file on day one.',
    items: [
      {
        name: 'CentralReach',
        logoWidth: 120,
        logo: '/logos/centralreach.svg',
        blurb: 'Admitted clients delivered into CentralReach as complete, verified records — ready to schedule and bill, with nothing re-keyed.',
        href: '/integrations/centralreach',
        linkLabel: 'See the integration',
      },
      {
        name: 'Rethink Behavioral Health',
        logoWidth: 120,
        logo: '/logos/rethink-behavioral-health.svg',
        blurb: 'Instant response, verification, and documents up front; the finished intake flows into Rethink for clinical and billing work.',
        href: '/integrations/rethink-behavioral-health',
        linkLabel: 'See the integration',
      },
      {
        name: 'Aloha ABA',
        logoWidth: 120,
        logo: '/logos/aloha-aba.png',
        blurb: 'Carelu answers and admits families 24/7, then delivers the complete record into Aloha for scheduling and billing.',
        href: '/integrations/aloha-aba',
        linkLabel: 'See the integration',
      },
      {
        name: 'Chorus',
        logoWidth: 99,
        logo: '/logos/chorus.png',
        blurb: 'Clean, verified insurance data captured at intake feeds Chorus\'s revenue-cycle platform — eligibility, claims, and remits start from a correct record.',
        href: '/integrations/chorus',
        linkLabel: 'See the integration',
      },
    ],
  },
  {
    id: 'calls',
    title: 'Call tracking',
    lead: 'Every tracked call becomes a lead in Carelu, with the recording and transcript on the family\'s profile.',
    items: [
      {
        name: 'CallRail',
        logo: '/logos/callrail.svg',
        logoWidth: 100,
        blurb: 'Every call CallRail tracks lands in Carelu: recorded, transcribed, matched to the family\'s profile or created as a new lead automatically, so you can review calls at scale with full context.',
        href: '/integrations/callrail',
        linkLabel: 'See the integration',
      },
    ],
  },
  {
    id: 'scheduling',
    title: 'Scheduling & calendars',
    lead: 'Qualified families book their assessment inside the same conversation.',
    items: [
      {
        name: 'Google Calendar',
        logoWidth: 44,
        logo: '/logos/google-calendar.svg',
        blurb: 'Carelu reads your team\'s working hours and open slots, offers times, and books the assessment straight onto the right calendar.',
        href: '/integrations/google-calendar',
        linkLabel: 'See the integration',
      },
      {
        name: 'Microsoft Outlook',
        logoWidth: 49,
        logo: '/logos/microsoft-outlook.svg',
        blurb: 'Outlook and Microsoft 365 calendar booking is in progress.',
        status: 'Coming soon',
      },
    ],
  },
  {
    id: 'email',
    title: 'Email',
    lead: 'Follow-ups and intake links go out from addresses families recognize.',
    items: [
      {
        name: 'Gmail',
        logoWidth: 52,
        logo: '/logos/gmail.svg',
        blurb: 'Connect a coordinator\'s Google account and Carelu sends follow-ups, resume links, and document requests from that address. Send-only scope; Carelu never reads the inbox.',
        href: '/integrations/gmail',
        linkLabel: 'See the integration',
      },
      {
        name: 'Your own domain',
        blurb: 'Sending set up on your practice\'s domain with SPF, DKIM, and DMARC in place, so every message lands in the inbox and carries your name.',
      },
    ],
  },
  {
    id: 'ads',
    title: 'Advertising & traffic',
    lead: 'Spend and sessions join the pipeline, so reporting shows cost per admitted family, not cost per click.',
    items: [
      {
        name: 'Meta',
        logoWidth: 104,
        logo: '/logos/meta-ads.svg',
        blurb: 'Connect Facebook and Instagram ad accounts. Daily spend lines up against the families each campaign produced, all the way to admission.',
        href: '/integrations/meta-ads',
        linkLabel: 'See the integration',
      },
      {
        name: 'Google Ads',
        logoWidth: 47,
        logo: '/logos/google-ads.svg',
        blurb: 'Campaign spend pulled in daily and attributed to the sessions, leads, and admitted families it generated.',
        href: '/integrations/google-ads',
        linkLabel: 'See the integration',
      },
      {
        name: 'Your website',
        blurb: 'Chat, intake forms, and visitor tracking install with one script on any site — WordPress, Webflow, Squarespace, Wix, or custom-built.',
      },
    ],
  },
  {
    id: 'custom',
    title: 'Data & custom connections',
    lead: 'If your system isn\'t listed above, it almost certainly still works.',
    items: [
      {
        name: 'Webhooks',
        hideFromWall: true,
        logo: '/logos/webhooks.svg',
        blurb: 'Send every lead, stage change, or completed intake as JSON to any endpoint, with a mapped payload and full delivery history. Built for HIPAA: PHI goes directly to your system, never through a consumer automation tool.',
        href: '/integrations/webhooks',
        linkLabel: 'See the integration',
      },
      {
        name: 'Email delivery',
        blurb: 'Route each new lead or completed intake to an inbox or distribution list, formatted and complete.',
      },
      {
        name: 'CSV export',
        blurb: 'Export any view of the pipeline, with the columns you chose, for spreadsheets, audits, or migrations.',
      },
    ],
  },
];

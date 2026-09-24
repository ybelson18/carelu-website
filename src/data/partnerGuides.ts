/* Partner guides rendered at /guides/:slug (unlisted, noindex).
   Strings may carry inline <b>/<i> only. Keep client-facing copy free of
   em dashes. Button and tab names are the literal on-screen wording. */

export type GuideBlock = {
  title?: string;
  path?: string[];
  body?: string[];
  steps?: string[];
  table?: { head: string[]; rows: string[][] };
  example?: string;
  ask?: string;
};

export type GuideSection = { id: string; title: string; intro?: string; blocks: GuideBlock[] };

export type Guide = { clinic: string; title: string; lede: string; updated: string; sections: GuideSection[] };

const totalCare: Guide = {
  clinic: 'Total Care ABA',
  title: 'How to run intake in Carelu',
  lede:
    'Everything we set up together on our call: where your leads land, how a family moves through your pipeline, and where to change the intake form, your states, and who gets which lead. Every step names the exact button to click.',
  updated: 'September 24, 2026',
  sections: [
    {
      id: 'getting-around',
      title: 'Getting around',
      intro: 'Carelu has no sidebar. Everything lives in the bar floating at the bottom of the screen.',
      blocks: [
        {
          table: {
            head: ['Button', 'What it is for'],
            rows: [
              ['Home', 'Your priorities for today and your open tasks.'],
              ['Opportunities', 'Every family who reached out, as a table or as your pipeline board. You will spend most of your day here.'],
              ['Outreach', 'Follow-up flows: the texts and emails that go out when a family goes quiet.'],
              ['Forms', 'Your intake form, your website form, and your Service Areas (states, insurance, evaluations).'],
              ['Reporting', 'How many families came in, qualified, and started, and where they came from.'],
              ['Settings', 'Your team (Users &amp; Roles), branding, phone numbers, and the chat widget installation.'],
            ],
          },
        },
      ],
    },
    {
      id: 'leads',
      title: 'Finding your leads',
      intro: 'Every family, from every source (your website form, the chat, phone calls, and the intake form), lands in Opportunities.',
      blocks: [
        {
          title: 'Table or pipeline',
          path: ['Opportunities', 'Table View / Pipeline View'],
          body: [
            '<b>Table View</b> is a spreadsheet of every family. <b>Pipeline View</b> shows the same families as cards in columns, one column per stage.',
            'Click any row or card to open that family in the side panel. The web address changes to that lead, so you can copy it and send it to a teammate.',
          ],
        },
        {
          title: 'Filter and search',
          path: ['Opportunities', 'Search leads...'],
          body: ['Search by name, email, or phone. Next to the search box you can filter by <b>Status</b>, <b>Source</b>, <b>State</b>, and <b>Flow</b>.'],
          example: 'Coordinators usually filter to their own state. Filter by <b>State</b>, then save it as a view (below) so it opens that way every time.',
        },
        {
          title: 'Save a view',
          path: ['Opportunities', 'New view'],
          steps: [
            'Set the filters and columns you want.',
            'Click <b>New view</b> and give it a name, like "Arizona" or "My families".',
            'Views are shared with the whole team by default. To keep one to yourself, open its menu and pick <b>Who can see</b> → <b>Only people I pick</b>.',
          ],
        },
        {
          title: 'Add or hide columns',
          path: ['Opportunities', 'Add Column'],
          body: [
            'The <b>Add Column</b> cell at the right end of the table header opens every field we collect, including every intake form answer. Search for the one you want and click it.',
            'To hide a column, click its header and choose <b>Hide</b>.',
          ],
        },
        {
          title: 'Add a family by hand',
          path: ['Opportunities', 'Add Lead'],
          body: ['For a referral that came in by fax or a walk-in. Fill in what you have and click <b>Create Lead</b>. You can then send them the intake form (see "Sending the intake form").'],
        },
        {
          title: 'Download a spreadsheet',
          path: ['Opportunities', 'Actions', 'CSV', 'Download CSV'],
          body: ['Pick the fields under <b>Fields to Export</b>. To export just a few families, tick their rows and use <b>Export</b> → <b>Export to CSV</b> in the bar that appears.'],
        },
      ],
    },
    {
      id: 'pipeline',
      title: 'Your pipeline',
      intro: 'On our call we agreed on four stages. Carelu stops at CS: prior authorization and everything after it stay in your existing process for now.',
      blocks: [
        {
          table: {
            head: ['Stage', 'What it means'],
            rows: [
              ['New Referral', 'A family reached out and we have not sent them the intake packet yet.'],
              ['Packet Sent', 'The family qualified for your services and has the intake link.'],
              ['Evaluation', 'The family has no autism diagnosis on file yet, or asked for help getting one. In New Mexico, and in the North Carolina ZIP codes near Jacksonville and New Bern, you evaluate in-house. Everywhere else they go to an outside evaluator.'],
              ['CS', 'The intake is complete and a diagnosis is on file. The case goes to billing (MBH).'],
            ],
          },
        },
        {
          title: 'Move a family to another stage',
          path: ['Opportunities', 'open a family', 'status pill next to the name'],
          body: [
            'Click the colored pill next to the parent\'s name and pick the new stage. In <b>Pipeline View</b> you can also drag the card to another column.',
            'A stage you set by hand is never overwritten by Carelu.',
          ],
          ask: 'We set your stage names for you. To rename a stage or add one, email us: stages are not editable from your account yet.',
        },
      ],
    },
    {
      id: 'working-a-lead',
      title: 'Working a family',
      intro: 'Clicking a family opens a side panel with everything about them.',
      blocks: [
        {
          title: 'What is in the panel',
          table: {
            head: ['Part', 'What you find there'],
            rows: [
              ['Patient Profile', 'Parent and child details, insurance, diagnosis, school, and every answer from the forms.'],
              ['Record', 'Who the family is assigned to, and when you last contacted them. Change the assignee here.'],
              ['Generated PDFs', 'The full intake packet as one PDF (<b>Intake PDF</b> → <b>Download</b>).'],
              ['Activity tab', 'Every call, text, email, chat, and internal note, newest first.'],
              ['Documents tab', 'Everything the family uploaded (insurance card, diagnosis report) and every signed consent, under <b>Release forms</b>.'],
              ['Insurance tab', 'The benefits check: eligibility, ABA coverage, prior-auth rules, and the card images.'],
              ['Tasks tab', 'To-dos for this family.'],
            ],
          },
        },
        {
          title: 'Leave an internal note',
          path: ['open a family', 'Activity', 'Add an internal note...', 'Add Note'],
          body: ['Notes are only visible to your team, never to the family. Only the person who wrote a note can edit it.'],
        },
        {
          title: 'Reassign a family',
          path: ['open a family', 'Record', 'Assignee'],
          body: ['Pick the coordinator. They are added to the lead summary email from then on.'],
        },
      ],
    },
    {
      id: 'intake-link',
      title: 'Sending the intake form',
      blocks: [
        {
          title: 'Email a family their link',
          path: ['open a family', 'envelope icon next to "Patient Profile"'],
          body: [
            'Click the envelope. If the family started the form, the email lets them pick up exactly where they left off. If they finished, it lets them review or update their answers. Click it again to resend.',
          ],
        },
        {
          title: 'Your shareable link',
          path: ['Forms', 'View intake'],
          body: [
            '<b>View intake</b> opens your live intake form. That page\'s web address is the link you can put in an email signature, a text, or on your website. Each family who opens it starts their own form.',
          ],
        },
        {
          title: 'Families who stop halfway',
          path: ['Forms', 'Intake', 'Unfinished intakes'],
          body: ['Carelu emails a reminder to finish, with a link back to where they stopped, about three hours after a family leaves the form. Nobody on your team has to chase it.'],
        },
      ],
    },
    {
      id: 'intake-form',
      title: 'Changing the intake form',
      intro: 'Your intake is built from your own packet: the same questions and the same documents, rewritten so a parent can finish it on a phone and sign once.',
      blocks: [
        {
          title: 'Edit a question',
          path: ['Forms', 'Intake', 'Intake pages', 'Edit page'],
          steps: [
            'Each card under <b>Intake pages</b> is one page of the form, in order. Click <b>Edit page</b>.',
            'Click a question to open <b>Edit Question</b>. Change the <b>Label</b> (what the parent reads) or the <b>Options (one per line)</b>.',
            'Tick <b>Required field</b> if the family cannot move on without answering.',
            'Click <b>View intake</b> to see the change the way a family will.',
          ],
        },
        {
          title: 'Add a question',
          path: ['Forms', 'Intake', 'Edit page', 'Add Question'],
          body: ['Pick a <b>Type</b> (short answer, dropdown, yes/no, date, upload, and so on), write the <b>Label</b>, and save.'],
        },
        {
          title: 'Show a question only in some states',
          path: ['Edit Question', 'Question visibility', 'pencil', 'State Visibility'],
          body: [
            'Pick the states that should see the question. Carelu uses the state the family typed, not their internet location.',
          ],
          example:
            'Your Maine questions (pickup people, sunscreen, medication on site, the Maine handbook) only show to Maine families. The Parent Handbook names only the family\'s own state director.',
        },
        {
          title: 'Consent documents',
          path: ['Forms', 'Intake', 'Edit page', 'a Consent Document question'],
          body: [
            'Each release is a <b>Consent Document</b> question. Edit the text under <b>Document content</b>. For Spanish you can let Carelu translate it, paste your own translation, or leave it in English.',
            'The family signs once at the end of the stack. Every signed document becomes its own PDF, shows in the family\'s <b>Documents</b> tab, and is included in the intake packet.',
          ],
          ask: 'Consents are legal documents. If you want to change one, send us the new wording and we will update it and check it signs correctly.',
        },
        {
          title: 'What we changed after our call',
          table: {
            head: ['Change', 'Where it is'],
            rows: [
              ['New page: <b>School and current services</b>. Asks if the child gets ABA now (and from whom), and their school, address, phone, and a school contact.', 'Intake, right before the consents'],
              ['<b>School release</b>, naming the school and school contact. Optional, only shown when the child attends school.', 'Consent stack, after the Release of Information'],
              ['<b>Provider Choice Letter</b>, naming the family\'s current ABA provider. Only shown when the child gets ABA now.', 'Consent stack, after Provider Selection'],
              ['<b>How should we reach you?</b> Preferred contact method and best time to call.', 'Second part of the form'],
              ['Availability: at least 15 hours a week. Arizona families pick weekdays only.', 'Availability question'],
              ['<b>Clinic</b> option names the nearest clinic by drive time, like "Jacksonville Clinic". Families never pick from a list.', 'Where would you like services?'],
            ],
          },
        },
      ],
    },
    {
      id: 'service-areas',
      title: 'Your states, insurance, and evaluations',
      intro: 'Service Areas is where Carelu learns who you can serve. The intake form, the website chat, and the phone agent all read from it, so a change here changes all three.',
      blocks: [
        {
          path: ['Forms', 'Service areas'],
          body: ['Click a state to open it. Every change saves on its own.'],
        },
        {
          title: 'Insurance',
          path: ['Service areas', 'a state', 'State Insurance Configuration'],
          body: [
            'Each carrier is <b>In-Network</b>, <b>Case-by-Case</b> (the family qualifies but your team reviews), or <b>Not Accepted</b> (the family is told kindly you cannot take their plan).',
            'Under <b>Insurance not on the list</b> choose what happens when a family types a plan you have not listed.',
          ],
        },
        {
          title: 'Families without a diagnosis',
          path: ['Service areas', 'a state', 'Diagnosis & Evaluation'],
          body: [
            'For <b>Families who stay with insurance</b>, pick <b>Qualify</b>, <b>Review case-by-case</b>, or <b>Disqualify</b>. All of your states are set to <b>Qualify</b>: the family is told they are pre-approved and pointed toward an evaluation.',
            'Under evaluations, choose <b>We evaluate in-house</b> or <b>Refer out for diagnosis</b> and list the evaluators with <b>Add provider</b>. Use <b>Add exception</b> when only part of a state is in-house.',
          ],
          example:
            '<b>New Mexico</b> is in-house statewide. <b>North Carolina</b> is in-house for the 54 ZIP codes within an hour\'s drive of your Jacksonville and New Bern offices. Families there are not asked if they want evaluation help; they go straight to you.',
        },
        {
          title: 'Where you serve',
          path: ['Service areas', 'a state', 'Coverage Area'],
          body: ['<b>Statewide coverage</b>, or <b>Specific zip codes only</b> with <b>Bulk add ZIPs</b> to paste a list. Add or change offices under <b>Clinic Locations</b> → <b>Add Clinic</b>.'],
          ask: 'Opening a new clinic (like Tooele) changes which families see a clinic option. Send us the address and we will redraw the drive-time areas.',
        },
        {
          title: 'Age and payment',
          path: ['Service areas', 'a state', 'Age Range Accepted / Payment Methods Accepted'],
          body: ['Set the ages you serve and whether you take self-pay families.'],
        },
      ],
    },
    {
      id: 'routing',
      title: 'Who gets which family',
      blocks: [
        {
          title: 'Assignment rules',
          path: ['Opportunities', 'Actions', 'Assignment', 'Add rule'],
          steps: [
            'Choose when the rule applies: <b>Always</b>, <b>AI prompt</b> (describe it in words, like "families in Arizona"), or <b>Column rules</b> (exact matches, like State is Georgia).',
            'Under <b>Assign to...</b> pick one coordinator, or several. With several, families rotate between them in turn.',
            'Rules are checked from the top. The first one that matches wins.',
          ],
          example:
            'Each state has its own rule sending families to that state\'s coordinator. The coordinator is added to the lead summary email automatically. Spanish-speaking families will go to Annie in every state once the language rule turns on.',
        },
      ],
    },
    {
      id: 'follow-ups',
      title: 'Follow-up flows',
      intro: 'A flow is the series of texts and emails a family gets when they go quiet.',
      blocks: [
        {
          title: 'Build a flow',
          path: ['Outreach', 'Flows', 'New flow'],
          steps: [
            'Choose <b>Follow-up</b> (families who have not finished) or <b>Recovery</b> (families who went cold).',
            'Click <b>Add a step</b> and pick <b>Text</b>, <b>Email</b>, or <b>Phone call</b>, and when it goes out.',
            'Write it yourself, or choose <b>Let the AI write it</b>.',
          ],
          body: [
            'In your wording, <b>{{parent}}</b>, <b>{{child}}</b>, <b>{{owner}}</b> (the assigned coordinator), <b>{{clinic}}</b>, and <b>{{link}}</b> (the family\'s own intake link) fill in for each family.',
          ],
        },
        {
          title: 'Timing and review',
          path: ['Outreach', 'a flow', 'Settings'],
          body: [
            '<b>Review first</b> holds each message until someone on your team approves it; <b>Auto-send</b> sends on schedule. Set <b>Quiet hours</b> and <b>Skip weekends</b> here.',
            'Replies come from the assigned coordinator\'s own email and number when they have one connected.',
          ],
        },
      ],
    },
    {
      id: 'website-form',
      title: 'Your website form',
      blocks: [
        {
          path: ['Forms', 'Website forms'],
          body: [
            'We built a website form that matches the one on your homepage. Change its look under <b>Appearance</b>, and its fields under <b>Advanced</b> → <b>Layout &amp; fields</b>.',
            '<b>Embed Code</b> gives your web team the snippet to paste on your site.',
          ],
          ask: 'Your site still sends its form to Salesforce, so our form is not live on your homepage yet. When your web team is ready, we will send them the snippet and help them swap it in.',
        },
      ],
    },
    {
      id: 'team',
      title: 'Adding your team',
      blocks: [
        {
          path: ['Settings', 'Users & Roles'],
          body: ['See everyone on your account here. A new coordinator signs up with an invite link and sets their own password. Once they join, they show up in <b>Assign to...</b> and in the Assignee picker.'],
          ask: 'Send us the new coordinator\'s name, email, and state, and we will send the invite link and add them to your assignment rules.',
        },
      ],
    },
  ],
};

export const GUIDES: Record<string, Guide> = {
  'total-care': totalCare,
};

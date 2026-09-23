/* ================================================================
   GROWTH / PRACTICE-BUILDING PAGE CONFIGS
   The "how do I grow my ABA practice" cluster: one pillar page plus
   a spoke per channel and per operational discipline. Same renderer
   and same shape as src/data/resources.ts (ResourcePage reads both
   through src/data/allResources.ts).

   House rules for this cluster:
   - Method first. A reader who never becomes a customer should still
     leave with something they can run on Monday.
   - Carelu appears at the end of a page, in the compare table and the
     CTA, not in every paragraph.
   - No partner, client or competitor is ever named.
   - Numbers come from the published cohort (src/data/intake_gap_stats.json,
     /research/the-intake-gap) or are stated as ranges. Never invent a
     precise benchmark.

   Add a page by adding an object + it's live at /resources/<slug>, then
   add it to sitemap.xml and llms.txt.
   ================================================================ */

import type { ResourceConfig } from './resources';

export const growthResources: Record<string, ResourceConfig> = {

  /* ============================================================
     PILLAR
     ============================================================ */
  'how-to-grow-an-aba-practice': {
    slug: 'how-to-grow-an-aba-practice',
    pill: 'Playbook · Practice Growth',
    h1: 'How to grow an ABA practice: five channels, and the one thing they all depend on.',
    metaTitle: 'How to Grow an ABA Practice: The Complete Playbook | Carelu',
    metaDescription:
      'The five channels that bring families to an ABA practice — Google Ads, Meta, SEO, physician referrals, and the families you already have — what each one is good at, where each one leaks, and the operational work that decides whether any of it converts.',
    answer:
      'Fix operations before buying demand: answer every inquiry fast on every channel, qualify instantly and get documents finished, then grow through Google Ads, Meta, SEO, referrals and the families you already have. Demand isn’t the constraint (the median provider’s inquiries grew 35% year over year), but 48% of family contacts arrive outside business hours, when most practices are a voicemail.',
    updated: '2026-09-23',
    intro: [
      'Growing an ABA practice is two separate problems that get talked about as one. The first is getting families to raise their hand. The second is not losing them between the hand-raise and the first session. Almost everything written about ABA growth is about the first problem, and almost all the lost revenue is in the second.',
      'That matters because the two problems have wildly different costs. Doubling your inquiry volume means doubling ad spend, or years of referral relationship-building. Doubling the share of inquiries that turn into started clients usually means fixing four or five specific operational failures — and it costs nothing in media.',
      'The market is not the constraint. In our published research, the median provider in a 37-provider same-store cohort saw family demand grow 35% year over year across 13 months of monthly counts. Families are finding ABA providers. What happens after they do is where practices diverge.',
      'This is the whole playbook: the five channels that actually produce ABA families, what each is good at, the structural catch inside each one, and the shared operational layer that decides whether any of them pay off.',
    ],
    sections: [
      {
        h2: 'The growth equation',
        body: [
          'Every ABA practice runs the same multiplication, whether or not anyone writes it down:',
          'Inquiries × answered × qualified × documents completed × verified × started. Miss on any term and the whole product shrinks, which is why practices with identical marketing budgets in the same city admit wildly different numbers of children.',
          'Work the terms in the order they cost you money. Answering is free and multiplies everything downstream. Qualification is cheap. Documents are a process problem. Only when those are solid does buying more inquiries make sense — before that, more spend just means more families falling through the same holes, at a higher price per hole.',
        ],
        list: [
          { title: 'Inquiries', desc: 'Volume from all five channels. The only term most practices actively manage, and the most expensive one to move.' },
          { title: 'Answered', desc: 'The share of inquiries that reach a human, or something that behaves like one, before the family moves on. Almost half of contacts arrive outside business hours.' },
          { title: 'Qualified', desc: 'Right service area, workable payer, age in band, diagnosis status known. Getting this wrong wastes staff hours on families you can never serve — and, worse, turns away families you could.' },
          { title: 'Documents completed', desc: 'Intake packet, consents, insurance card, diagnostic report, releases. The quiet killer: a family that says yes and then never finishes the paperwork.' },
          { title: 'Verified', desc: 'Benefits checked early enough that nobody discovers a coverage problem after the family has emotionally committed.' },
          { title: 'Started', desc: 'A first session on the calendar. Everything before this is unpaid work.' },
        ],
      },
      {
        h2: 'What 185,054 family conversations say about ABA demand',
        body: [
          'Before choosing channels, it helps to know what demand actually looks like. These figures come from our published research: 185,054 family conversations and 29,021 captured leads across 120 ABA provider organizations in 48 states, aggregated and de-identified.',
          'Demand is growing. The median provider in a 37-provider same-store cohort saw inquiry volume rise 35% year over year. It is concentrated: Georgia and North Carolina alone account for 27% of it. It is mostly Medicaid: 46% of families who named a payer were on Medicaid. And it arrives when offices are closed: 48% of conversations start outside business hours. The typical provider captures a median of about 24 leads a month, with the busiest tenth above 127.',
          'One pattern stands out for growth. Providers whose intake feeds their CRM grew about 6.5% a month, against 0.9% for those whose intake didn’t, roughly seven times faster. That is a correlation, not proof, but it points the same way as everything else on this page: growth follows the operational layer.',
        ],
        table: {
          cols: ['State', 'Share of national demand', 'Most-named payers'],
          rows: [
            { cells: ['Georgia', '13.6%', 'Medicaid 33% · Peach State 14% · CareSource 13%'] },
            { cells: ['North Carolina', '13.3%', 'Medicaid 43% · BCBS 11% · Trillium 8%'] },
            { cells: ['Indiana', '9.1%', 'Medicaid 39% · Anthem 26% · CareSource 10%'] },
            { cells: ['Virginia', '6.4%', 'Medicaid 31% · Anthem 24% · Aetna 9%'] },
            { cells: ['Tennessee', '6.4%', 'TennCare 26% · BlueCare 19% · Wellpoint 16%'] },
            { cells: ['Ohio', '5.0%', 'CareSource 37% · Medicaid 12% · UnitedHealthcare 10%'] },
            { cells: ['Arizona', '4.9%', 'Mercy Care / AHCCCS 39% · UnitedHealthcare 27% · BCBS 12%'] },
            { cells: ['Utah', '4.7%', 'Medicaid 40% · Select Health 21% · BCBS 10%'] },
            { cells: ['New Jersey', '4.2%', 'UnitedHealthcare 25% · Medicaid 20% · Aetna 19%'] },
            { cells: ['Colorado', '3.7%', 'Medicaid 67% · Cigna 6% · UnitedHealthcare 6%'] },
            { cells: ['New York', '3.2%', 'Medicaid 46% · Fidelis 20% · BCBS 9%'] },
            { cells: ['Florida', '3.1%', 'Sunshine / Ambetter 25% · Medicaid 20% · Aetna 14%'] },
          ],
          note: 'Source: Carelu Research, "The Intake Gap" (2026). Payer shares are of families in that state who named a payer; "Medicaid" means Medicaid named without a specific plan.',
          minWidth: 620,
        },
      },
      {
        h2: 'Channel 1 — Google Ads: the highest intent, the least exclusivity',
        body: [
          'A parent typing "aba therapy near me" is the most valuable lead in the category. They have decided to act, they are looking right now, and they are within a few taps of contacting someone. You are buying that moment, and you are paying a premium for it.',
          'The catch is that the click is not exclusive. That parent opens four or five tabs and contacts several practices in the same sitting. You are not really competing on ad copy or landing-page design; you are competing on who calls back first with a real answer. A perfectly optimized campaign feeding a phone that rings out is a machine for funding your competitors.',
        ],
      },
      {
        h2: 'Channel 2 — Meta: reach far beyond search, intent far below it',
        body: [
          'Meta reaches the parent who has not typed anything yet — the one who has been quietly worried for six months and has never once searched for "ABA." That audience is many times larger than the in-market search audience, and it is cheaper to reach. For a growing practice, it is often the only way to add real volume quickly.',
          'The catch is the mirror image of Google’s. The intent is borrowed, not owned. A parent who fills a form in eight seconds because a video caught them at a traffic light has not decided anything. That interest decays in minutes. Meta rewards practices that can convert attention immediately and punishes practices that treat a lead form as something to work through tomorrow morning.',
        ],
      },
      {
        h2: 'Channel 3 — SEO and AI answers: slow, compounding, increasingly conversational',
        body: [
          'Search is where families go when they are ready to compare, and it keeps producing after you stop paying. The work is unglamorous: a genuinely useful page per location, per payer, and per stage of the journey, plus a Google Business Profile that is actually maintained.',
          'Reviews belong in this channel and deserve more attention than they get. They move the map results, they are what a parent actually reads when comparing you with two other clinics, and they are one of the few quality signals an AI assistant can read about you. The practice in your market with sixty reviews is rarely better than you; it asked.',
          'What has changed is that a growing share of these questions never reach a results page at all. Parents ask an assistant "who does ABA in my county and takes my plan," and get a synthesized answer. Pages that answer one question completely, in plain language, with the specifics an assistant can quote, are the ones that get surfaced. Pages written to hit a keyword density are not.',
        ],
      },
      {
        h2: 'Channel 4 — Physician, school and diagnostician referrals',
        body: [
          'Referred families are the best families you will ever get: pre-qualified, usually diagnosed, and arriving with trust already transferred from someone they believe. They also cost nothing per lead.',
          'The catch is that referral relationships die from silence, not from competition. A referral coordinator sends three children to you, hears nothing back about any of them, and quietly starts sending to the practice that confirms receipt the same day. Referral growth is a follow-through discipline dressed up as a sales activity.',
        ],
      },
      {
        h2: 'Channel 5 — The families you already have',
        body: [
          'The cheapest growth in most practices is sitting in a spreadsheet. Families who inquired and were never reached. Families told to call back when they have a diagnosis. Families who stalled halfway through a packet. Families on a waitlist who assume they have been forgotten. Discharged clients whose needs changed. Siblings.',
          'This list is usually worth more than a quarter of ad spend, and almost nobody works it, because nobody owns it. It is also the fastest thing on this page to act on — a structured pass over the last twelve months of dead leads reliably surfaces families who are still looking, at no media cost whatsoever.',
        ],
      },
      {
        h2: 'What every channel converges on: speed and coverage',
        body: [
          'Across a cohort of 120 ABA and behavioral-health providers and 185,000 family conversations, 48% of family contacts arrived outside business hours. Whatever channel a family came from, roughly half of them are reaching out at night, on a weekend, or during a lunch break — the exact moments when most practices are a voicemail greeting.',
          'The widely cited lead-response research says the same thing in a different way: the odds of ever connecting with an inbound lead fall off a cliff between five minutes and thirty, and the provider who responds first wins a disproportionate share. In ABA, where a family is frequently contacting several practices in one sitting, that effect is stronger, not weaker.',
          'This is why speed is not a nice-to-have layered on top of a channel strategy. It is the multiplier that determines what every channel is worth. Buying more inquiries before fixing response is the single most common and most expensive mistake in ABA growth.',
        ],
      },
      {
        h2: 'The order of operations',
        body: [
          'If you do these in order, each step makes the next one cheaper.',
        ],
        rules: [
          { when: 'Before you spend another dollar on ads', then: 'Measure your answer rate and median time to first human contact — including nights and weekends. If the number embarrasses you, fix that first; it costs nothing in media and lifts every channel at once.' },
          { when: 'Once every inquiry gets answered', then: 'Fix qualification. Know instantly whether a family is in your service area, on a payer you take, and in your age band — and know what you do with the ones who are not, instead of turning them away.' },
          { when: 'Once qualification is instant', then: 'Fix documents. Short digital steps, prefilled with what the family already told you, finishable on a phone, with automatic nudges. Paperwork stalls are the largest silent leak after the unanswered first call.' },
          { when: 'Once families complete intake', then: 'Turn on demand. Start with the channel closest to intent — search — then add Meta once you can convert a cold lead within minutes.' },
          { when: 'Once demand is running', then: 'Build referrals in parallel. They are slow to start and compound for years, and they make you resilient to rising ad costs.' },
          { when: 'Always', then: 'Work the families you already have. Every month, every stalled and disqualified and waitlisted family gets a touch until they tell you to stop.' },
        ],
      },
      {
        h2: 'The scoreboard',
        body: [
          'Growth conversations go in circles when nobody has numbers. Four numbers, reviewed monthly, will end most of the arguing: inquiries by channel, share answered within five minutes, share that completed intake, and share that started care — plus cost per started client, not cost per lead, for anything you pay for.',
          'Cost per lead is the metric that makes bad channels look good. A channel producing cheap leads that never start is more expensive than a channel producing costly leads that do.',
        ],
      },
    ],
    download: {
      label: 'Download the free ABA intake checklist (PDF)',
      file: '/downloads/aba-intake-checklist.pdf',
      blurb: 'Map your own funnel end to end and find the term in the growth equation that is costing you the most.',
    },
    faq: [
      {
        q: 'What is the fastest way to grow an ABA practice?',
        a: 'Fix response before buying demand. Most practices already receive more inquiries than they convert, and roughly half of those inquiries arrive outside business hours. Answering every inquiry quickly, on every channel, lifts the yield of every marketing dollar you are already spending and costs nothing in media.',
      },
      {
        q: 'Should I start with Google Ads or Meta ads?',
        a: 'Google, if you can only do one. Search captures families who have already decided to act, so it converts at a far higher rate per click. Add Meta once you can reliably respond to a cold lead within minutes — Meta produces volume, but that volume decays fast and punishes slow follow-up.',
      },
      {
        q: 'How much should an ABA practice spend on marketing?',
        a: 'Budget against cost per started client and payback period, not a percentage of revenue. Work out what one admitted child is worth over their expected course of care, then spend up to a fraction of that to acquire one. Practices with weak intake conversion should spend less and fix intake first, because every leak multiplies the true acquisition cost.',
      },
      {
        q: 'How do I get more ABA referrals from pediatricians?',
        a: 'Make referring easy and make the loop visible. Accept referrals by fax, email, and phone without a portal signup; acknowledge every referral the same day; and report back when the child is evaluated and when they start. Offices refer to whoever they trust to follow through, and silence is what ends the relationship.',
      },
      {
        q: 'Why do we get plenty of leads but few new clients?',
        a: 'Almost always one of four leaks: inquiries that were never answered (especially after hours), families who waited days for insurance verification, packets that were started and abandoned, or a wait to start that no one managed. Measure the drop between each stage and fix the largest fall first. There is a fifth cause — the wrong families arriving in the first place — but it is usually not the biggest one, and it has a specific signature: you call within minutes and still hear back from very few of them, and very few of the ones who do respond are in your area, on a payer you take, or in your age band. That pattern points at channel targeting, not at intake. Without it, assume the leak is operational.',
      },
    ],
    carelu: {
      h2: 'How Carelu runs the operational layer under every channel',
      body: [
        'The order of operations on this page starts with the terms that cost nothing in media: answering, qualifying, documents, verification, and working the families you already have. Those are the terms Carelu runs, the same way for a search call, a Meta form, or a pediatrician referral.',
        'Channel strategy, referral relationships and clinical care are still yours. Carelu makes sure the families those efforts produce are answered, qualified and moved forward, so buying more inquiries adds starts and not just leaks.',
      ],
      list: [
        { title: 'Answered, on every channel', desc: 'Phone, website chat, text and web forms answered within seconds, 24/7, in English and Spanish. That covers the 48% of contacts that arrive outside business hours.' },
        { title: 'Qualified in the first conversation', desc: 'Service area by ZIP or drive time, payer, age and diagnosis status. Out-of-area families and payers you don’t take are turned away politely, and families without a diagnosis are routed to an evaluation path.' },
        { title: 'Documents and verification, up front', desc: 'A hosted intake finishable on a phone, e-signed consents, and automatic insurance eligibility and ABA benefits checks before staff time is spent.' },
        { title: 'The families you already have', desc: 'Follow-up flows by text and email for every stalled, waiting or unfinished family, until they respond or opt out. Only 2% of providers run any automated re-engagement.' },
        { title: 'The scoreboard', desc: 'Answer rate, speed to contact, intake completion, conversion and cost per started client by channel and source, with Google Ads, Meta Ads, CallRail and your CRM connected.' },
      ],
    },
    compareTitle: 'The operational layer, by hand and with Carelu',
    compareIntro:
      'Every channel on this page ends at the same place: a family reaching out, and someone needing to respond well, immediately, at any hour. That work is identical whether the family came from a search ad, a Facebook video, or a pediatrician.',
    compare: [
      { step: 'First response', manual: 'Business hours only; voicemail nights and weekends, when ~48% of contacts arrive', carelu: 'Answered in seconds on phone, chat, text and forms, 24/7' },
      { step: 'Qualification', manual: 'Coordinator checks the service-area list and payer list by hand', carelu: 'Area, payer, age and diagnosis status confirmed during the first conversation' },
      { step: 'Intake', manual: 'Packet emailed; family finishes it or does not', carelu: 'Guided digital intake, prefilled from the conversation, finishable on a phone' },
      { step: 'Insurance', manual: 'Verification queued, often days later', carelu: 'Eligibility checked up front, before staff time is spent' },
      { step: 'Follow-up', manual: 'Whoever remembers, whenever they remember', carelu: 'Contextual sequences per family, per stage, until they respond or opt out' },
      { step: 'Measurement', manual: 'Lead counts in a spreadsheet, no channel truth', carelu: 'Answer rate, speed, conversion and cost per started client by channel' },
    ],
    related: [
      { slug: '/research/the-intake-gap', label: 'The Intake Gap (our research)', blurb: '185,054 family conversations across 120 ABA providers. The source for the numbers on this page.' },
      { slug: 'google-ads-for-aba', label: 'Google Ads for ABA', blurb: 'The highest-intent lead in the category, and why the auction is not where you win it.' },
      { slug: 'meta-ads-for-aba', label: 'Meta ads for ABA', blurb: 'Reaching parents before they search, and converting borrowed intent before it cools.' },
      { slug: 'seo-for-aba-practices', label: 'SEO and AI search', blurb: 'The pages that rank, and what changes when a parent asks an assistant instead.' },
      { slug: 'aba-pediatrician-referrals', label: 'Pediatrician referrals', blurb: 'How to earn a referral stream, and the follow-through that keeps it.' },
      { slug: 'aba-intake-metrics', label: 'The numbers to watch', blurb: 'Eight metrics that explain why a practice is not growing.' },
      { slug: 'aba-intake-drop-off', label: 'Where families disappear', blurb: 'The four leaks between first inquiry and first session.' },
    ],
    ctaHeadline: 'Growth is an operations problem wearing a marketing costume.',
    ctaSub: 'Carelu answers every family instantly on every channel, qualifies them, completes intake, verifies benefits, and follows up like a person — so the families your marketing already produces actually start with you.',
  },

  /* ============================================================
     PAID — META
     ============================================================ */
  'meta-ads-for-aba': {
    slug: 'meta-ads-for-aba',
    pill: 'Playbook · Meta Ads',
    h1: 'Meta ads for ABA: buying attention the family never went looking for.',
    metaTitle: 'Meta (Facebook & Instagram) Ads for ABA Therapy: The Playbook | Carelu',
    metaDescription:
      'How ABA practices use Meta ads to reach parents before they ever search — what to run, why lead quality looks worse than it is, and the five-minute follow-up discipline that decides whether any of it converts.',
    answer:
      'Meta ads work for ABA when you respond within minutes: they reach parents before they ever search, but that borrowed intent decays fast. Text within a minute, call within five, qualify area, payer, age and diagnosis in the first exchange, give undiagnosed families an evaluation path, and judge the channel on cost per started client, not cost per lead.',
    updated: '2026-09-17',
    intro: [
      'Meta is the best tool in the category for one specific job: reaching the parent who has not searched for anything yet. A mother who has been worried about her two-year-old for months, who has googled "speech delay" twice at midnight and never once typed the word "ABA," is unreachable on search. She is very reachable on Instagram.',
      'That is an enormous audience, and it is cheap relative to search. It is also the reason Meta has a reputation for junk leads in ABA. Both things are true, and they have the same cause: you are interrupting someone rather than answering them. Everything below follows from that one fact.',
    ],
    sections: [
      {
        h2: 'What Meta is actually good at',
        body: [
          'Meta does three things no other ABA channel does well. It creates demand instead of harvesting it, reaching families before they know a service category exists. It scales in days rather than quarters, which makes it the practical answer when a new location opens with empty schedules. And it targets geography precisely, which matters enormously when your service area is four counties and not a state.',
          'It is also the channel where the message does the most work. On search, the parent brings the intent and your ad just has to be there. On Meta, your creative has to produce the intent from scratch.',
        ],
      },
      {
        h2: 'The structural catch: borrowed intent decays',
        body: [
          'A search lead decided to contact you. A Meta lead was persuaded to, in about eight seconds, while doing something else. That difference does not make the lead worthless, but it does mean the interest is on loan and it is already evaporating when the form submits.',
          'Practically, this shows up in three ways. Meta leads answer the phone at a lower rate than search leads. A larger share are outside your service area or on a payer you do not take, because they were not filtering for you the way a searcher was. And a much larger share have no diagnosis yet, because you reached them earlier in the journey — which is an opportunity, not a defect, as long as you have somewhere to send them.',
          'The failure mode is a practice that runs Meta, judges it on the same yardstick as search, concludes the leads are garbage, and turns it off. Usually the leads were fine and the follow-up was six hours late.',
          'There is a test that separates the two, and it is worth running before touching the ad account. Call within minutes for a couple of weeks. If families answer and most of them qualify, the targeting is fine and the old follow-up was the problem. Only when both halves fail — almost nobody responds to a five-minute call, and almost none of the few who do are in your area, on your payers, or in your age band — is the channel genuinely bringing the wrong families, and then the fix is geography, creative and audience rather than anything downstream.',
        ],
      },
      {
        h2: 'Targeting: less clever than you want it to be',
        body: [
          'Health-related interest targeting is restricted on Meta, and you should not plan around reaching "parents interested in autism." Nor should you want to: audiences built on sensitive inferences are both unreliable and a bad look for a healthcare provider.',
          'What works is unglamorous. Tight geography around each clinic or service radius, not the whole state. Broad parent-aged demographics, and let the delivery system find responders. Lookalikes built from families who actually started care, not from everyone who filled a form. And exclusions for current clients and recent converters so you stop paying to reach people you already serve.',
        ],
        list: [
          { title: 'Geography first', desc: 'Radius or county targeting that matches the area you can genuinely serve, including drive time. Paying to reach families you will have to turn away is the most common Meta waste in ABA.' },
          { title: 'Broad over narrow', desc: 'Give the delivery system room. Over-layered targeting on a small local audience raises costs and starves learning.' },
          { title: 'Lookalikes from starts', desc: 'Seed from admitted families, not raw leads. Optimizing toward form-fillers optimizes toward people who fill forms.' },
          { title: 'Creative as targeting', desc: 'A video that opens with the specific worry — an 18-month-old who stopped babbling, a four-year-old who melts down at every transition — self-selects the right audience better than any interest setting.' },
        ],
      },
      {
        h2: 'Creative that works for ABA',
        body: [
          'Speak to the worry, not the modality. Parents at this stage do not know what ABA is, and "evidence-based applied behavior analysis" means nothing to them. "Is my child just a late talker?" means everything.',
          'Show real people and real rooms. Stock photography of smiling children reads as an ad; a therapist in your actual clinic reads as a place. Name the geography out loud, because a parent scrolling has no idea you are local until you tell them. State the payer situation plainly if you take Medicaid or the dominant commercial plan in your market, since that single fact removes the biggest objection before it forms.',
          'And be careful with tone. Content that implies something is wrong with a child performs badly and, more importantly, is the wrong thing to put in front of a frightened parent. The best-performing ABA creative is reassuring and concrete: here is what the first step looks like, here is how long it takes, here is who you would talk to.',
        ],
      },
      {
        h2: 'Instant forms versus landing pages — and the middle path',
        body: [
          'Instant forms produce the most leads and the weakest ones, because friction is near zero and so is commitment. Landing pages produce fewer, better leads, because a parent who clicks through and reads has spent something. Both are defensible, and the choice depends entirely on what happens next.',
          'The middle path is better than either: an instant form with two or three qualifying questions — ZIP or county, insurance, child’s age — followed immediately by a thank-you step that offers the real next action. Not "we will be in touch." A link that starts actual intake, or a button that calls you now. The moment of highest intent is the second after they submit, and almost every practice wastes it on a confirmation message.',
          'Whatever you choose, do not send a cold Meta lead a fifteen-page PDF packet. It will not come back.',
        ],
      },
      {
        h2: 'The first five minutes decide everything',
        body: [
          'This is the whole channel. A Meta lead contacted an hour later behaves like a stranger; contacted in two minutes, they behave like someone who just raised their hand, because they did.',
          'The discipline that works: a text within sixty seconds that names the child and the practice, a call within five minutes from a local number, and a fallback sequence of several attempts across text and phone over the following week rather than one voicemail and a shrug. Ads run at 10pm and on Sundays — 48% of family contacts in our published cohort arrive outside business hours — so any coverage plan that stops at 5pm is throwing away roughly half of what you paid for.',
          'Speed alone is not enough, though. The first contact has to advance the family, not just greet them: confirm you serve their area, confirm the payer, get the intake started while you have their attention, and if there is no diagnosis yet, hand them the evaluation path instead of a dead end.',
        ],
      },
      {
        h2: 'Measure the channel correctly or you will kill it by accident',
        body: [
          'Meta looks bad on cost per lead compared with nothing, and great compared with search. It looks bad on lead-to-contact rate. It can look excellent on cost per started client — which is the only number that matters. Judge the channel on admitted children and be honest about the lag: an ABA family sourced in March may not start until May, and a 30-day reporting window will tell you to turn off the thing that is working.',
          'Feed conversions back. Meta optimizes toward whatever you tell it success looks like, so if the only signal it receives is "form submitted," it will find you excellent form submitters. Sending back the later events — qualified, intake completed, started care — retrains delivery toward families who become clients. This is the single highest-leverage account change most ABA advertisers have never made.',
        ],
      },
      {
        h2: 'Compliance sanity checks',
        body: [
          'You are a healthcare provider advertising to families about a child’s development, which means the ordinary rules deserve real attention. Do not upload client lists as custom audiences without a defensible legal basis. Keep protected health information out of ad platforms entirely. Make sure any form that collects a phone number carries clear consent language for calls and texts, with an opt-out honored everywhere. And if a third-party pixel sits on a page where families enter health information, know exactly what it is collecting.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do Facebook and Instagram ads work for ABA therapy?',
        a: 'Yes, for reach and for reaching families earlier in the journey than search can. They work poorly as a lead-collection exercise judged on cost per lead. The practices that succeed on Meta respond within minutes, qualify during the first conversation, and have a defined path for families who do not yet have a diagnosis.',
      },
      {
        q: 'Why are Meta leads for ABA lower quality than Google leads?',
        a: 'Because you interrupted them rather than answering them. A Meta lead never searched for ABA, so more of them are outside your service area, on a payer you do not take, or without a diagnosis yet. That is inherent to the channel, and it is manageable with instant qualification and an evaluation referral path — not by blaming the leads.',
      },
      {
        q: 'Instant forms or a landing page?',
        a: 'Instant forms with two or three qualifying questions, followed by an immediate next step on the thank-you screen, outperform both plain instant forms and most landing pages — provided you respond within minutes. If you cannot respond fast, a landing page with more friction will produce fewer and slightly better leads.',
      },
      {
        q: 'How fast do I have to respond to a Meta lead?',
        a: 'Minutes, not hours. Text within a minute and call within five. Because ads run around the clock and roughly half of family contacts arrive outside business hours, the response plan has to cover nights and weekends or it only works for half the leads you buy.',
      },
      {
        q: 'What should a Meta ad for an ABA clinic actually say?',
        a: 'Name the worry in a parent’s own words, name the place, and name the next step. Avoid clinical jargon and avoid implying something is wrong with the child. Stating that you take the dominant local plan or Medicaid removes the largest objection before the parent forms it.',
      },
    ],
    carelu: {
      h2: 'How Carelu works a Meta lead in the first five minutes',
      body: [
        'This page comes down to one discipline: reach the parent while the borrowed intent is still there, and make that first contact move them forward. Carelu does both the moment the form submits, including at 10pm and on Sundays when your ads are still running.',
        'The account is still yours: creative, geography, audiences and budget. Carelu makes sure the leads those choices produce are judged on how they actually convert, not on how late someone called them.',
      ],
      list: [
        { title: 'Worked the moment it lands', desc: 'Meta Ads connects to Carelu, so a lead form is answered by text within seconds and the conversation continues on phone, text or chat, whichever the parent prefers.' },
        { title: 'Qualified without a screening call', desc: 'Service area by ZIP or drive time, payer, age and diagnosis status confirmed in the first exchange. Families you can’t serve are turned away politely instead of left waiting.' },
        { title: 'A path for families without a diagnosis', desc: 'Meta reaches parents early, and 22% of families reach out before a diagnosis. They are routed to an evaluation path and kept in touch, not dead-ended.' },
        { title: 'Intake started while intent is high', desc: 'The family gets a link to a phone-friendly intake prefilled from the conversation, and follow-up flows by text and email keep going until they respond or opt out.' },
        { title: 'Judged on starts, not leads', desc: 'Reporting shows speed to contact, intake completion, conversion and cost per started client by source, so you can see what each campaign actually produces.' },
      ],
    },
    compareTitle: 'A Meta lead, by hand and with Carelu',
    compareIntro:
      'The ad account is the easy half. What decides whether Meta is profitable for an ABA practice is what happens in the twenty minutes after a form submits — including at 9pm on a Saturday.',
    compare: [
      { step: 'Lead arrives', manual: 'Email notification into a shared inbox; seen next business morning', carelu: 'Meta Lead Ads flow straight in and are worked the moment they land' },
      { step: 'First touch', manual: 'A call attempt hours later; voicemail; no text', carelu: 'Text in seconds, conversation continues on the channel the parent prefers' },
      { step: 'Qualifying', manual: 'Coordinator checks area and payer manually, later', carelu: 'County, payer, age and diagnosis status confirmed in the first exchange' },
      { step: 'No diagnosis yet', manual: '"Call us back when you have one" — lead lost', carelu: 'Routed to the evaluation path for that state and plan, then kept warm' },
      { step: 'After hours', manual: 'Roughly half of leads wait until morning', carelu: 'Answered at the moment they arrive, any hour' },
      { step: 'Reporting', manual: 'Cost per lead only', carelu: 'Cost per started client by campaign, with later events fed back to Meta' },
    ],
    related: [
      { slug: '/research/the-intake-gap', label: 'The Intake Gap (our research)', blurb: '185,054 family conversations across 120 ABA providers. The source for the numbers on this page.' },
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'All five channels and the operational layer they share.' },
      { slug: 'google-ads-for-aba', label: 'Google Ads for ABA', blurb: 'The other paid channel, and why it behaves nothing like this one.' },
      { slug: 'aba-evaluation-referrals', label: 'Families without a diagnosis', blurb: 'What to do with the largest segment Meta will send you.' },
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'Ads run at night. Decide what happens when they do.' },
    ],
    ctaHeadline: 'Meta leads are not bad. They are perishable.',
    ctaSub: 'Carelu answers every Meta lead the second it lands — texts, calls, qualifies, starts intake, and routes undiagnosed families to an evaluation path — at 2pm and at 2am.',
  },

  /* ============================================================
     PAID — GOOGLE
     ============================================================ */
  'google-ads-for-aba': {
    slug: 'google-ads-for-aba',
    pill: 'Playbook · Google Ads',
    h1: 'Google Ads for ABA: everyone bids on the same parent. The winner answers first.',
    metaTitle: 'Google Ads for ABA Therapy: What Actually Wins the Click | Carelu',
    metaDescription:
      'Campaign structure, negative keywords, landing pages and call tracking for ABA practices on Google Ads — plus the response discipline that decides which of the five providers that parent contacted actually gets the child.',
    answer:
      'Google Ads bring the highest-intent ABA families, but the click isn’t exclusive: the same parent contacts several practices in one sitting, and whoever answers first with a real answer usually wins. Run a few tightly themed campaigns, add negatives for job and training searches, use call tracking, and cover nights and weekends, when 48% of family contacts arrive.',
    updated: '2026-09-17',
    intro: [
      'Search is the highest-intent channel in ABA and the most expensive. A parent typing "aba therapy near me" or "autism services accepting medicaid" has already decided to act. You are not persuading anyone; you are being present at the moment of action, and every competent competitor in your market is trying to be present too.',
      'Which produces the defining feature of this channel: the click is not exclusive. The same parent will contact several practices in one sitting, frequently in the same ten minutes. The auction decides who gets seen. Something else entirely decides who gets the child.',
    ],
    sections: [
      {
        h2: 'What you are actually buying',
        body: [
          'You are buying a place in a comparison, not a customer. That reframing changes what you optimize. Ad copy and bid strategy determine how many parents reach you. Response speed, coverage and intake quality determine what share of those you convert — and the second set of levers is usually further from optimal than the first.',
          'It also changes how you read your own numbers. A campaign producing plenty of calls and few clients is rarely a targeting problem. It is usually a phone problem.',
        ],
      },
      {
        h2: 'Campaign structure that does not waste money',
        body: [
          'Keep it boring. A small number of tightly themed campaigns, separated by the thing that changes your economics: location, service line, and payer language.',
        ],
        list: [
          { title: 'Core service terms', desc: '"aba therapy near me," "autism therapy [city]," "applied behavior analysis [county]." Phrase and exact match. This is the money, and it deserves its own budget rather than sharing with experiments.' },
          { title: 'Payer-qualified terms', desc: '"aba therapy that takes medicaid," "[plan name] autism coverage." Lower volume, far higher conversion, and it pre-filters the objection that kills most ABA inquiries. Worth more budget than most accounts give it: in our research, 46% of families reported Medicaid as their payer, so this is the median family rather than a niche.' },
          { title: 'Diagnosis-stage terms', desc: '"autism evaluation near me," "how to get my child tested." High volume, no diagnosis yet. Only run these if you have a real evaluation path or in-house testing — otherwise you are paying to say no.' },
          { title: 'Branded', desc: 'Cheap, high-converting, and worth owning so a competitor does not sit above your own name. Keep it in a separate campaign or it will flatter every other metric you look at.' },
          { title: 'Location separation', desc: 'One campaign per clinic or service radius when the economics differ by site. Averaged geography hides the location that is quietly losing money.' },
        ],
      },
      {
        h2: 'Negative keywords are half the job',
        body: [
          'ABA search is polluted with traffic that will never become a client, and an unmanaged account spends a serious share of budget on it. Build the negative list before you launch and revisit search terms weekly for the first two months.',
          'The recurring offenders: employment and training searches ("rbt certification," "bcba salary," "aba jobs," "rbt training"), academic and definitional searches ("what is applied behavior analysis," "aba vs speech therapy," "aba criticism"), searches for other meanings of the acronym entirely, insurance-only searches with no service intent, and out-of-area cities that share a name with somewhere you serve.',
          'Employment traffic is the big one, and it is bigger than most teams believe — in many practices a large share of what arrives through the website is not a family at all, but an RBT or behavior tech looking for work. A practice that is also hiring should run recruitment as a separate campaign with its own budget and its own queue, not let applicants eat a clinical acquisition budget and clinical intake hours.',
        ],
      },
      {
        h2: 'The landing page rules',
        body: [
          'Match the promise in the ad, exactly. A click on "ABA therapy in [county] accepting Medicaid" should land on a page that names the county and the plan in the first screen, not a generic homepage that makes the parent hunt.',
          'Then remove every step between interest and contact. A tracked phone number at the top, tappable on mobile, where most of this traffic lives. An intake that begins on the page itself rather than a "contact us" form that promises a callback. Clear statements of service area, ages served, and payers accepted, because those three facts are what the parent is comparing across their open tabs. No PDF packet download. No portal registration.',
          'One more thing most practices miss: say what happens next and when. "Someone will call you within the hour, including evenings" converts better than any testimonial on the page.',
        ],
      },
      {
        h2: 'Call tracking, or you are flying blind',
        body: [
          'Most ABA search conversions are phone calls, which means the important half of your performance data lives outside the ad platform by default. Without call tracking you cannot tell which keywords produce calls that become clients, and you certainly cannot tell how many of those calls rang out.',
          'Dynamic numbers per campaign or per source, recordings and transcripts where consent rules allow, and one number that matters more than the rest: the share of paid calls that were actually answered. In most first audits, that number is the finding.',
        ],
      },
      {
        h2: 'You are buying nights and weekends whether you meant to or not',
        body: [
          'Ads serve around the clock, and families search when they finally have a free moment — after dinner, after bedtime, on Sunday. In our published cohort of 120 providers and 185,000 conversations, 48% of family contacts arrived outside business hours.',
          'There are two honest responses. Restrict ad scheduling to the hours you can genuinely answer, and accept that you have conceded the busiest window in the category to competitors. Or cover the hours the ads run. Dayparting is the cheaper fix and the smaller business. What does not work is running 24/7 ads into a voicemail box and calling the leads low quality.',
        ],
      },
      {
        h2: 'Qualify without interrogating',
        body: [
          'The first conversation has four jobs: confirm the service area, confirm the payer, confirm the child’s age, and find out whether there is a diagnosis yet. Done well, it takes ninety seconds and feels like help. Done badly, it feels like a screening call and the parent hangs up and calls the next tab.',
          'Lead with what you can do. "We serve that county and we do take that plan — let me get the first piece of this started for you while we talk" is qualification. "What insurance do you have?" as the opening line is an obstacle course.',
        ],
      },
      {
        h2: 'What to measure',
        body: [
          'Three numbers per campaign: cost per started client, share of calls answered, and median time to first human contact. Conversion tracking should fire on outcomes further down the funnel than a form submission — import the later events so smart bidding optimizes toward families who actually start.',
          'Expect lag and plan for it. ABA acquisition-to-start commonly runs weeks, so judging a campaign on a 14-day window will make you cancel the thing that works.',
        ],
      },
    ],
    faq: [
      {
        q: 'How much do Google Ads cost for an ABA practice?',
        a: 'Clicks in this category are expensive because intent is high and several practices compete for the same local searches; costs vary widely by market and by how many providers bid locally. Rather than benchmarking cost per click, track cost per started client — a market with costly clicks and fast response can be cheaper per admitted child than a market with cheap clicks and slow follow-up.',
      },
      {
        q: 'What negative keywords should an ABA practice add?',
        a: 'Start with employment and training terms (rbt certification, bcba salary, aba jobs, rbt training), academic and definitional terms (what is aba, aba vs speech therapy), unrelated meanings of the acronym, and out-of-area place names. Employment traffic is usually the single largest source of wasted spend for clinics that are also hiring.',
      },
      {
        q: 'Should ABA ads run 24/7?',
        a: 'Only if someone or something can answer 24/7. Roughly half of family contacts arrive outside business hours, so around-the-clock ads into a voicemail box pay to send families to competitors. If you cannot cover those hours, restrict ad scheduling to the hours you can answer.',
      },
      {
        q: 'Do I need call tracking?',
        a: 'Yes. Most conversions in this category are phone calls, so without call tracking you cannot attribute clients to keywords or campaigns, and you cannot see your unanswered-call rate — which is frequently the biggest problem in the account.',
      },
      {
        q: 'Should I bid on autism evaluation searches?',
        a: 'Only if you can do something with those families — in-house testing, or a real referral path to diagnosticians with known waits and payers. Otherwise you are paying premium prices to tell parents to come back in nine months, and most of them will not.',
      },
    ],
    carelu: {
      h2: 'How Carelu answers the search call you paid for',
      body: [
        'On this page, the auction decides who gets seen and something else decides who gets the child: who answers first, with a real answer. Carelu is that answer, on the first ring and in the first ninety seconds, at every hour the ads are running.',
        'Campaign structure, negatives, landing pages and bids stay with you and your agency. Carelu covers the other half of the account: the calls and forms those clicks produce, and the numbers that show which of them become clients.',
      ],
      list: [
        { title: 'Every call answered', desc: 'An AI voice agent picks up every paid call, 24/7, in English and Spanish. The 48% of contacts that arrive after hours don’t reach voicemail.' },
        { title: 'Qualification that feels like help', desc: 'Service area, payer, age and diagnosis status are resolved in the first conversation, leading with what you can do. Families without a diagnosis are routed to an evaluation path.' },
        { title: 'Intake at the peak of intent', desc: 'Web forms and chats are answered within seconds, and intake starts during that first contact, with insurance eligibility and ABA benefits checked automatically.' },
        { title: 'Job seekers kept out of the family queue', desc: 'Carelu separates applicants from families on your website. 40% of captured website leads are job seekers, and they shouldn’t use up clinical intake hours.' },
        { title: 'Cost per started client, by source', desc: 'With Google Ads and CallRail connected, reporting shows answer rate, speed to contact and cost per started client by channel and source.' },
      ],
    },
    compareTitle: 'A search call, by hand and with Carelu',
    compareIntro:
      'Two practices in the same market can run near-identical campaigns and admit very different numbers of children. The difference shows up after the click.',
    compare: [
      { step: 'Call arrives', manual: 'Rings the front desk; goes to voicemail if busy or after hours', carelu: 'Answered on the first ring, every hour of the week' },
      { step: 'Web form arrives', manual: 'Email to a shared inbox, answered when someone gets to it', carelu: 'Answered in seconds, conversation continues by text' },
      { step: 'Qualifying', manual: 'Interrogation, or no qualification until much later', carelu: 'Area, payer, age and diagnosis status resolved in the first ninety seconds' },
      { step: 'Intake', manual: 'Packet promised, emailed later that day', carelu: 'Intake begins during the first contact, while intent is at its peak' },
      { step: 'Attribution', manual: 'Calls unattributed; keyword performance unknown', carelu: 'Calls tracked to source with answer rate and cost per started client' },
      { step: 'Follow-up', manual: 'One voicemail, then the lead goes cold', carelu: 'Multi-touch sequence across text and phone until they respond or opt out' },
    ],
    related: [
      { slug: '/research/the-intake-gap', label: 'The Intake Gap (our research)', blurb: '185,054 family conversations across 120 ABA providers. The source for the numbers on this page.' },
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'Where paid search fits among the five channels.' },
      { slug: 'meta-ads-for-aba', label: 'Meta ads for ABA', blurb: 'The volume channel, and why it needs a different response plan.' },
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'Half your paid traffic arrives when the office is closed.' },
      { slug: 'aba-intake-metrics', label: 'The numbers to watch', blurb: 'Answer rate and speed to contact, the two metrics that explain a bad account.' },
    ],
    ctaHeadline: 'You already paid for the click. Answer the call.',
    ctaSub: 'Carelu picks up every call, chat and form instantly, qualifies the family, starts intake on the spot, and tells you what each keyword is really costing you per started client.',
  },

  /* ============================================================
     ORGANIC — SEO + AI ANSWERS
     ============================================================ */
  'seo-for-aba-practices': {
    slug: 'seo-for-aba-practices',
    pill: 'Playbook · SEO & AI Search',
    h1: 'SEO for ABA practices — and what changes when parents ask an AI instead.',
    metaTitle: 'SEO for ABA Practices (and AI Search) | Carelu',
    metaDescription:
      'The pages that actually rank for ABA searches, why Google Business Profile outranks your website for "near me," and how to be the practice an AI assistant names when a parent asks who takes their plan.',
    answer:
      'Maintain a Google Business Profile per location, build real location and payer pages, and make asking for reviews a habit, since local signals decide "near me" searches. To be named by AI assistants, answer one question per page in plain sentences, state the specifics (counties, payers, ages, waits) as facts, and keep your name, address and phone consistent everywhere.',
    updated: '2026-09-17',
    intro: [
      'Search is the only ABA channel that keeps producing after you stop paying, and the only one where the asset compounds. It is also the slowest, which is why most practices start it, get impatient at month three, and quietly abandon a half-built site.',
      'Two things make ABA search unusual. Almost all of it is local, so a maintained Google Business Profile often matters more than the website it links to. And a growing share of these questions are now answered without a results page at all, by an assistant that reads a handful of sources and writes a paragraph. Optimizing for that reader is different work than optimizing for a ranking.',
    ],
    sections: [
      {
        h2: 'The three kinds of ABA search',
        body: [
          'Every query a parent types falls into one of three buckets, and they want completely different pages.',
        ],
        list: [
          { title: 'Ready to act', desc: '"aba therapy near me," "autism services [city]." Highest intent, most competitive, and largely decided by local signals — profile, reviews, proximity — rather than by article quality.' },
          { title: 'Qualifying', desc: '"does medicaid cover aba in [state]," "[plan] autism coverage," "aba therapy that takes [payer]." Lower volume, extremely high conversion. The parent has decided on the service and is now filtering for who can serve them.' },
          { title: 'Worried but early', desc: '"is my 2 year old speech delayed," "signs of autism in toddlers," "how do I get my child evaluated." Enormous volume, no service intent yet. The parent does not know ABA exists. This is where you earn trust months before the decision.' },
        ],
      },
      {
        h2: 'The pages worth building',
        body: [
          'A small number of genuinely useful pages beats a large number of thin ones, and thin location pages are the most common self-inflicted wound in this category. A page per city that differs only by a find-and-replace does not rank and does not convert.',
          'Build a real page per location: the actual address, the counties and ZIPs you serve, the ages you take, the payers accepted there, the current wait, the people who work there, and directions a parent would actually use. Build a page per payer for the plans that dominate your market — in our research 46% of families reported Medicaid, so these are not niche pages — stating plainly what that plan requires: diagnosis, referral, prior authorization. That is what the parent is trying to find out. And build a handful of stage-of-journey explainers for the worried-but-early searches, written to help rather than to convert.',
          'The test for any page: would a parent who found this by accident be glad they did? If not, no amount of structure will save it.',
        ],
      },
      {
        h2: 'Google Business Profile is the highest-return hour in local ABA SEO',
        body: [
          'For "near me" searches, the map results sit above everything and are driven by the profile, not the site. An hour spent on the profile routinely outperforms a month spent on blog posts.',
          'Get the category right, list service areas honestly, add real photos of the actual space, keep hours accurate — and treat "open" as a promise that someone answers, because a parent who calls during listed hours and reaches voicemail has learned something about you. Answer the Q&A section yourself with the questions families actually ask: which insurance, what ages, how long is the wait. Every location gets its own profile, and the name, address and phone must match your website and every directory exactly.',
        ],
      },
      {
        h2: 'Reviews are the ranking factor you can actually influence',
        body: [
          'Of everything on this page, reviews are where a practice can move fastest and where most leave the most on the table. Everything else here is a project. Reviews are a habit, and the habit pays three times over.',
          'They move local rankings, which decides whether you appear in the map results at all. They move parents, who read reviews more carefully in this category than in almost any other — they are choosing who will spend twenty hours a week with their child, and they cannot evaluate your clinical model, so they read what other parents said instead. And they increasingly move the AI answers, because public review volume, recency and substance are close to the only third-party quality signal an assistant can actually read about a local provider.',
          'Three properties matter, roughly in this order. Recency, because a wall of five-star reviews from three years ago reads as a practice that used to be good. Volume relative to the other practices in your city, because parents compare. And specificity — a review that names a therapist and describes a change in a child is worth ten that say "great place."',
          'The gap in ABA is enormous, and it is not a quality gap. Most clinics have a handful of reviews. The practice in your market with sixty is not sixty times better than you. They asked, and you did not.',
        ],
      },
      {
        h2: 'The only reason you do not have more reviews is that nobody asks',
        body: [
          'Every practice knows it should collect reviews. The reason it does not happen is always the same: asking feels awkward, no one owns it, and the moment passes. The fix is to stop treating it as a favor someone remembers and make it a step in a process, with a trigger, an owner, and a script.',
        ],
        rules: [
          { when: 'Choosing the moment', then: 'Ask after a visible win — a first progress report, a goal met, a parent who says something warm in a session. Never at intake, when the family has received nothing yet, and never in the same breath as a billing conversation.' },
          { when: 'Choosing who asks', then: 'The person with the relationship: the BCBA or the coordinator the family already trusts. An ask from a name they recognize converts several times better than one from the practice in the abstract.' },
          { when: 'Making it one tap', then: 'A text with a direct link straight to the review form. An email telling a parent to search for you on Google loses most of them between the intent and the typing.' },
          { when: 'Following up', then: 'Ask once, then send one reminder a few days later. The reminder collects roughly as many reviews as the original ask, and almost nobody sends it.' },
          { when: 'Who to ask', then: 'Everyone. Do not screen families first, route happy ones to the public profile and unhappy ones to a private form — review gating violates platform policies, risks the profile, and the negative reviews you avoid are worth reading anyway.' },
          { when: 'What never to offer', then: 'Anything of value in exchange. In healthcare an incentive for a review is not merely a platform violation, and a gift card is not worth the exposure.' },
          { when: 'Responding', then: 'Reply to every review, including the difficult ones, in language that never confirms or denies that someone is a client. A public reply acknowledging a specific child’s care is a privacy problem however kindly it is meant. Thank, offer a private channel, and stop.' },
        ],
      },
      {
        h2: 'Make the ask automatic',
        body: [
          'A timed, repeatable, slightly awkward message is exactly the kind of work that should not depend on anyone remembering, which is why this is worth putting into a system rather than onto a person.',
          'Carelu can run the ask for you: a review request sent by text at the moment you choose in the family’s journey, from the same place that runs the rest of your follow-ups, with the link in the message and one reminder if there is no response. The same conversation history that makes those follow-ups sound human is what lets the ask reference the child by name and land as a message from your practice rather than a broadcast.',
          'The practices that end up with sixty reviews are not the ones that tried harder. They are the ones for whom asking stopped being a decision.',
        ],
      },
      {
        h2: 'What changes when an assistant answers instead of a results page',
        body: [
          'A parent who asks an assistant "who does ABA therapy in my county and takes my insurance" gets a synthesized answer drawn from a few sources. There is no blue-link list to climb. You are either in the answer or invisible.',
          'What gets a practice into those answers is not mysterious, but it is different from classic SEO. Assistants favor pages that answer one question completely and unambiguously, in plain sentences, with the specifics stated as facts rather than implied — the counties, the payers, the ages, the waits. They favor consistency across the web, because contradictory hours or addresses across directories make a source unreliable. They lean on the aggregators and directories they already trust, so your presence in payer directories and local listings matters more, not less. And they reward structure: clear headings that mirror real questions, FAQ markup, organization and location data that machines can read without guessing.',
          'The practical instruction is almost old-fashioned. Write the page as an answer to a question a parent asked out loud, put the facts in sentences instead of in a graphic, and make every page state plainly who it is for and where it applies.',
        ],
      },
      {
        h2: 'Write for the question, not the keyword',
        body: [
          'Keyword-density writing produces pages that read like they were written for a machine, and the machines now prefer pages written for people. Title a page with the question. Answer it in the first two sentences. Then earn the rest of the page.',
          'This also happens to be the format a parent scanning four tabs at 11pm can actually use, which is why it converts as well as it ranks.',
        ],
      },
      {
        h2: 'The catch nobody mentions',
        body: [
          'SEO does not deliver clients. It delivers a phone call, usually at an inconvenient hour, from a parent who is also calling three other practices they found the same way. Everything you invested in ranking is settled in the next ten minutes by whether someone picks up and can answer whether you take their plan.',
          'Practices that rank well and answer badly have built an expensive referral service for their competitors.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does SEO take for an ABA practice?',
        a: 'Local profile work can move within weeks. Site and content work usually takes several months to compound, and payer-specific pages often produce their first inquiries faster than broad service pages because competition for them is thinner.',
      },
      {
        q: 'What is the single highest-impact SEO task for a clinic?',
        a: 'The Google Business Profile for each location: correct category, honest service areas, real photos, accurate hours, answered Q&A, and a steady flow of reviews. For "near me" searches it sits above the organic results and is the main thing a parent sees.',
      },
      {
        q: 'How do I get my ABA practice mentioned by AI assistants?',
        a: 'Answer real questions completely and plainly on pages dedicated to them, state the specifics as facts (counties served, payers accepted, ages, waits), keep your name, address and phone consistent everywhere, use FAQ and organization structured data, and make sure you appear in the payer directories and local listings assistants already treat as reliable.',
      },
      {
        q: 'How do I get more Google reviews for my ABA clinic?',
        a: 'Make the ask a step in a process rather than a favor someone remembers: trigger it after a visible win such as a first progress report or a goal met, have the person the family already trusts send it, put a direct link in a text rather than asking them to search, and send one reminder a few days later. Ask every family, not just the happy ones, and automate the trigger so it stops depending on anyone remembering.',
      },
      {
        q: 'Should we only ask happy families for reviews?',
        a: 'No. Screening families and routing only the happy ones to your public profile is review gating — it violates platform policies and puts the profile at risk. Ask everyone at the same point in the journey. Steady, recent reviews from real families outperform a curated handful, and the critical ones tell you something worth knowing.',
      },
      {
        q: 'How should we respond to a negative review?',
        a: 'Reply publicly, promptly, and without confirming or denying that the person is a client — acknowledging a specific child\'s care in a public reply is a privacy problem however kindly meant. Thank them, state generally how you handle concerns, and offer a direct phone number or email to continue privately.',
      },
      {
        q: 'Do reviews affect whether AI assistants recommend us?',
        a: 'They help. Public review volume, recency and substance are among the few third-party quality signals an assistant can read about a local provider, so they feed the answer alongside your own pages, your listings and the directories you appear in.',
      },
      {
        q: 'Are location pages worth building?',
        a: 'Real ones, yes. Templated pages that differ only by city name tend not to rank and do not convert. A location page should carry the address, service area, payers, ages, wait time and staff for that site — facts a parent could not get from any other page.',
      },
      {
        q: 'Should we blog?',
        a: 'Only with a purpose. A handful of thorough, genuinely useful explainers aimed at worried-but-early searches outperform a weekly post written for volume, and they are far more likely to be cited by an assistant answering a parent’s question.',
      },
    ],
    carelu: {
      h2: 'How Carelu answers the families your rankings send',
      body: [
        'Everything on this page earns you one thing: a parent contacting you, often in the evening, while they check three other practices they found the same way. Carelu makes sure that contact gets the answer the parent was looking for: whether you serve their town, whether you take their plan, and what happens next.',
        'The ranking work is still yours: the location and payer pages, the Business Profile, and the habit of asking for reviews. Carelu makes sure what that work earns doesn’t end in a voicemail box.',
      ],
      list: [
        { title: 'The evening "near me" call', desc: 'Answered live by an AI voice agent at any hour, in English or Spanish, along with website chat, text and web forms.' },
        { title: '"Do you serve my town?"', desc: 'Service area is resolved by ZIP or drive time the same way every time, and out-of-area families are turned away politely.' },
        { title: '"Do you take my plan?"', desc: 'Payer rules for each state are built in, and insurance eligibility and ABA benefits are checked automatically during intake.' },
        { title: 'The weekend web form', desc: 'Answered within seconds, with a phone-friendly intake started before the parent opens the next tab.' },
      ],
    },
    compareTitle: 'The call that SEO earns you, by hand and with Carelu',
    compareIntro:
      'Organic search sends families at the hours they are free, which is rarely between nine and five. What happens on that call is the return on every hour spent ranking.',
    compare: [
      { step: 'Evening "near me" call', manual: 'Voicemail; the parent calls the next result', carelu: 'Answered live, at any hour' },
      { step: '"Do you take my plan?"', manual: 'Callback promised after someone checks', carelu: 'Answered in the conversation, with eligibility verified up front' },
      { step: '"Do you serve my town?"', manual: 'Depends who answers and what they remember', carelu: 'Service area resolved by county and ZIP, consistently' },
      { step: 'Weekend web form', manual: 'Read Monday morning', carelu: 'Answered in seconds and intake started' },
      { step: 'Review requests', manual: 'Asked occasionally, by whoever remembers, if at all', carelu: 'Sent by text at the moment you choose, with a reminder — and a reply to every review' },
    ],
    related: [
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'Where organic search fits among the five channels.' },
      { slug: 'google-ads-for-aba', label: 'Google Ads for ABA', blurb: 'Buying the same intent while the organic asset is still compounding.' },
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'Organic search sends families at night. Decide what happens then.' },
      { slug: 'aba-pediatrician-referrals', label: 'Pediatrician referrals', blurb: 'The other channel that compounds, and costs nothing per lead.' },
    ],
    ctaHeadline: 'Ranking is the easy part.',
    ctaSub: 'Carelu answers the calls, chats and forms your search work earns — instantly, at every hour — confirms area and coverage, starts intake before the parent opens the next tab, and asks every family for the review that brings the next one.',
  },

  /* ============================================================
     REFERRALS — PHYSICIANS, SCHOOLS, DIAGNOSTICIANS
     ============================================================ */
  'aba-pediatrician-referrals': {
    slug: 'aba-pediatrician-referrals',
    pill: 'Playbook · Referrals',
    h1: 'How to get pediatricians to refer to your ABA practice — and keep referring.',
    metaTitle: 'How to Get ABA Referrals from Pediatricians and Schools | Carelu',
    metaDescription:
      'Referred families are pre-qualified, usually diagnosed, and free. Here is who to approach, what to say, what to leave behind, and the follow-through loop that decides whether a first referral becomes a steady stream.',
    answer:
      'Lead with what you take (ages, counties, payers and current wait), make referring one step by fax, email or phone with no portal, and build the relationship with the referral coordinator as well as the physician. Then close the loop: acknowledge every referral the same day, tell the office when you reach the family, and report the outcome and start date.',
    updated: '2026-09-17',
    intro: [
      'A referred family is the best lead an ABA practice can get. They arrive with a diagnosis or a clear path to one, they have been told by someone they trust that you are the right place, and they cost nothing per lead. A practice with three or four reliably referring offices has a floor under its census that no ad account can provide.',
      'Referral relationships also fail in a specific, predictable way, and it is almost never because a competitor out-sold you. It is because an office referred three children, heard nothing back about any of them, and stopped. Referral growth is a follow-through discipline that looks like a sales activity.',
    ],
    sections: [
      {
        h2: 'Know who you are actually talking to',
        body: [
          'Practices spend months trying to get lunch with a physician when the person who decides where referrals go is the referral coordinator or the medical assistant who processes them. The physician chooses a category of care. The coordinator chooses the name on the form, usually from a short list of who is easiest to deal with.',
          'Build the relationship with both. The physician needs to trust your clinical quality. The coordinator needs to know you answer the phone, take their patient’s insurance, and will not send the family back to them confused.',
        ],
        list: [
          { title: 'Pediatricians and family medicine', desc: 'The largest single source. Often the first professional a worried parent tells.' },
          { title: 'Developmental pediatricians, psychologists, neurologists', desc: 'Fewer offices, much higher volume per office, and families arrive already diagnosed.' },
          { title: 'Speech and occupational therapists', desc: 'Frequently the first to notice, they see the child weekly, and they refer both directions. Chronically underworked as a channel.' },
          { title: 'Schools and early intervention', desc: 'Not a medical referral, but the strongest local signal a parent gets. Relationships here compound quietly for years.' },
          { title: 'Payer care managers', desc: 'On some plans they hold a list of in-network providers and steer families directly. Ask how to get on it.' },
        ],
      },
      {
        h2: 'The outreach that works',
        body: [
          'Lead with what you take, not with who you are. An office does not need your philosophy of care; it needs to know, in one glance, whether you can help the patient sitting in front of them. Ages served. Counties and ZIPs. Payers accepted, named specifically. Current wait to evaluation and to start. Whether you do in-home, in-clinic, in-school. How to refer, in one step.',
          'That is a one-page leave-behind, and it should be updated when the facts change. A stale wait time on a sheet from last spring is worse than no sheet, because the first time you cannot take a patient you promised to take, you have spent the relationship.',
          'The visit itself is short and specific. Ask what happens today when they identify a child who might need ABA: who do they send to, what goes wrong, what do they never hear back about. Then solve exactly that. Most offices will describe the same two frustrations — nobody tells them what happened, and the family comes back weeks later still waiting.',
        ],
      },
      {
        h2: 'The loop that keeps the referrals coming',
        body: [
          'This is the whole discipline, and it is four touches.',
        ],
        rules: [
          { when: 'A referral arrives', then: 'Acknowledge it the same day, back to the referring office, by name and by child. Even "received, we are contacting the family today" is more than most practices ever send.' },
          { when: 'You reach the family', then: 'Tell the office you made contact, or tell them you could not. An office that learns its patient was never reached will forgive you once if you say so.' },
          { when: 'The child is evaluated or admitted', then: 'Close the loop with the outcome and the start date. This is the touch that converts a one-off referral into a habit.' },
          { when: 'You cannot serve the family', then: 'Say so immediately and say where else to go. Declining fast and helpfully earns more future referrals than accepting slowly.' },
          { when: 'Quarterly', then: 'Send the office a short summary: how many children they sent, how many started, current wait, any change in payers or areas. Almost nobody does this, and it is remembered.' },
        ],
      },
      {
        h2: 'Make it mechanically easy to refer',
        body: [
          'Every step of friction loses referrals to whoever has fewer steps. Accept referrals the way the office already works — fax, secure email, a phone call, a simple web form — and never require a portal signup to send you a patient.',
          'Publish a single referral phone number that a human answers, and make sure the fax line is monitored like an inbox rather than a machine someone checks on Fridays. Give them a one-field referral form, not a clinical intake packet. The office’s job is to hand over the child; the intake is your job, and pushing your paperwork onto their staff is the fastest way to be removed from a list.',
        ],
      },
      {
        h2: 'Records: get them right the first time',
        body: [
          'Most referral relationships fray over records requests rather than over care. You need the evaluation or diagnostic report to authorize services; the office needs a valid release before it can send anything; and the request that arrives is frequently missing the details their staff need to even locate the chart.',
          'Requests that come back fast name the child exactly as the office files them, name the parent or guardian and their relationship to the child, specify which document is wanted and over what date range, and carry a release that plainly identifies who may receive the information. This is worth getting right as an operational habit, and it has its own playbook.',
        ],
      },
      {
        h2: 'Track referrals like a channel',
        body: [
          'If you cannot say how many children each office sent last quarter and how many started, you cannot tell a productive relationship from a polite one. Record the referral source on every lead, report on it monthly, and let it direct where the next visit goes.',
          'The pattern that shows up almost every time: a small number of offices produce most referrals, several produce one and then stopped, and the ones that stopped are usually recoverable with a single honest call about what went wrong.',
        ],
      },
    ],
    download: {
      label: 'Download the free ABA records request templates (PDF)',
      file: '/downloads/aba-records-request-templates.pdf',
      blurb: 'The request letters and release language that get diagnostic reports back from a referring office without a second round trip.',
    },
    faq: [
      {
        q: 'How do I get pediatricians to refer patients to my ABA practice?',
        a: 'Make it obvious what you take — ages, counties, payers, current wait — make referring a single step by fax, email or phone with no portal, and close the loop on every referral: acknowledge the same day, report contact with the family, and report the outcome. Offices refer to whoever they trust to follow through.',
      },
      {
        q: 'Who actually decides where referrals go?',
        a: 'Usually the referral coordinator or medical assistant, not the physician. The physician decides that a child needs ABA; the staff member processing the referral decides which practice to name, generally based on who is easiest to work with.',
      },
      {
        q: 'What should be on an ABA referral one-pager?',
        a: 'Ages served, counties and ZIPs, payers accepted by name, current wait to evaluation and to start, service settings (home, clinic, school), and exactly how to refer with a phone number and fax. Keep it current — an out-of-date wait time costs more credibility than no sheet at all.',
      },
      {
        q: 'How fast should we respond to a referral?',
        a: 'Acknowledge to the referring office the same day and contact the family within hours. Referred families are not exclusive either; many were given two or three names.',
      },
      {
        q: 'What if we cannot take the referred family?',
        a: 'Say so immediately and point them somewhere useful. A fast, helpful decline preserves the relationship; a slow one where the family drifts back to the office confused is what ends it.',
      },
    ],
    carelu: {
      h2: 'How Carelu follows through on every referral',
      body: [
        'Referral relationships die from silence, and the silence is almost always operational: the family wasn’t reached quickly, the release wasn’t signed, nobody knew where the child stood. Carelu takes that follow-through off your coordinators’ plates.',
        'The relationship itself stays human. The visits, the one-page leave-behind, and the call to the office telling them their patient started all come from your team. Carelu makes sure you always have something good to tell them.',
      ],
      list: [
        { title: 'The family reached fast', desc: 'A referred family who calls, texts or fills a form is answered within seconds, 24/7. Referrals that arrive through a connected form or webhook go straight into the same queue.' },
        { title: 'Qualified and verified up front', desc: 'Area, payer, age and diagnosis status are confirmed in the first conversation, and eligibility and ABA benefits are checked during intake, so a family you can’t serve hears it right away.' },
        { title: 'The release signed with intake', desc: 'The release of information is e-signed inside the hosted intake and saved as a PDF in the family’s packet, ready before your team needs it.' },
        { title: 'Status per family, routed to the right person', desc: 'Each referral goes to the right coordinator by state or ZIP and has a status in one live queue, so you always know what to tell the referring office.' },
        { title: 'Referrals as a channel', desc: 'Reporting shows conversion by source, so you can see which offices produce started clients.' },
      ],
    },
    compareTitle: 'A referral, by hand and with Carelu',
    compareIntro:
      'Referral programs rarely fail at the visit. They fail in the weeks afterwards, in the follow-through nobody has time for.',
    compare: [
      { step: 'Referral arrives by fax', manual: 'Sits on a machine until someone checks it', carelu: 'Faxes, emails and forms land in one queue and are worked immediately' },
      { step: 'Acknowledgement to the office', manual: 'Rarely sent', carelu: 'Same-day confirmation back to the referring office' },
      { step: 'Contacting the family', manual: 'Within a few days, if the queue allows', carelu: 'Contacted within minutes, on the channel they use' },
      { step: 'Records and releases', manual: 'Chased by phone, often incomplete and returned', carelu: 'Release captured with intake; requests go out complete the first time' },
      { step: 'Closing the loop', manual: 'The office never hears the outcome', carelu: 'Status tracked per referral and reportable per office' },
      { step: 'Source reporting', manual: 'Nobody knows which office produces starts', carelu: 'Referrals by source, with started-client counts' },
    ],
    related: [
      { slug: 'aba-records-request', label: 'Records requests that come back', blurb: 'Releases, recipients and the details that stop a second round trip.' },
      { slug: 'pediatrician-referral-contacts', label: 'Pediatrician contact directory', blurb: 'Referral contacts by state, ready to work through.' },
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'How referrals sit alongside paid and organic demand.' },
      { slug: 'aba-evaluation-referrals', label: 'Families without a diagnosis', blurb: 'The referrals that arrive one step too early.' },
    ],
    ctaHeadline: 'Referrals die in the silence after them.',
    ctaSub: 'Carelu takes referrals in by fax, email and phone, contacts the family within minutes, chases the records, and keeps the referring office informed — so the next one comes too.',
  },

  /* ============================================================
     RECORDS + ROI
     ============================================================ */
  'aba-records-request': {
    slug: 'aba-records-request',
    pill: 'Guide · Records & Releases',
    h1: 'Records requests that actually come back: releases, recipients, and the details that decide.',
    metaTitle: 'ABA Records Requests and ROIs: How to Get Reports Back Fast | Carelu',
    metaDescription:
      'Why diagnostic reports stall an ABA start, what makes a release valid under HIPAA, when one general ROI can cover a class of recipients, and the details that get a request fulfilled on the first attempt.',
    answer:
      'Send a complete request to the right desk, with a HIPAA release that states the information, discloser, recipient, purpose, expiration, signature and right to revoke. The recipient can be a clearly identified class, so one release signed at intake can cover the pediatrician, psychologist and school. Chase at day three and day seven, and ask the family to check their patient portal.',
    updated: '2026-09-17',
    intro: [
      'A surprising share of ABA starts are not waiting on clinical capacity or on an authorization. They are waiting on a PDF sitting in another organization’s chart — an evaluation report, a diagnostic letter, a school assessment — that nobody has successfully asked for.',
      'Records work looks like administrative trivia and behaves like a growth constraint. A request that is missing one detail gets set aside by a records clerk with a hundred others, and nobody tells you it was set aside. Two weeks later a family who was ready to start is still waiting, and has begun to wonder whether you are competent.',
      'The fix is unglamorous and highly learnable: send complete requests, to the right desk, with a release that plainly authorizes the disclosure — and then chase them on a schedule rather than when someone remembers.',
    ],
    sections: [
      {
        h2: 'Why records stall a start',
        body: [
          'Most payers will not authorize ABA without documentation of the diagnosis, and many have rules about how recent it must be and what tool produced it. The family rarely has that report. They remember an appointment eighteen months ago at a hospital clinic, they may have been handed a summary they have since lost, and the actual document lives with the evaluating provider.',
          'So the sequence is: get a release signed, identify who holds the record, ask correctly, and follow up until it arrives. Each of those steps is where practices lose days.',
        ],
      },
      {
        h2: 'What makes a release valid',
        body: [
          'A HIPAA-compliant authorization has required elements, and missing one is the most common reason a records department refuses to act. Whatever form you use, it must contain each of these in a way a stranger can read without interpretation.',
        ],
        table: {
          cols: ['Element', 'What it means in practice', 'Status'],
          minWidth: 640,
          chipCol: 2,
          rows: [
            { cells: ['Description of the information', 'Specific, not "all records" — e.g. "psychological evaluation and diagnostic report, 2024–present"', 'Required'] },
            { cells: ['Who is disclosing', 'The organization that holds the record, named as they are known', 'Required'] },
            { cells: ['Who may receive it', 'The name, or other specific identification, of the person(s) or class of persons receiving the information', 'Required'] },
            { cells: ['Purpose', '"At the request of the individual" is acceptable; treatment coordination is clearer', 'Required'] },
            { cells: ['Expiration', 'A date or an event — an open-ended release is not valid', 'Required'] },
            { cells: ['Signature and date', 'The individual, or a personal representative with authority to sign', 'Required'] },
            { cells: ['Right to revoke', 'A statement of the right to revoke in writing, and any exceptions', 'Required'] },
            { cells: ['Authority of the signer', 'If not the patient, the basis of authority — parent, guardian, custodial documentation', 'Conditional'] },
          ],
          note: 'This is a working summary, not legal advice. Confirm your forms with your own compliance reviewer, and note that some states and some record types — psychotherapy notes, substance use, HIV status — carry stricter rules than HIPAA alone.',
        },
      },
      {
        h2: 'The recipient can be a class of people, not one named provider',
        body: [
          'This is the single most useful and least known point in records work, and it removes a chase that most intake teams run every week.',
          'HIPAA does not require that every individual recipient be named. It requires that the authorization identify the name, or other specific identification, of the person or persons — or the class of persons — who may receive the information. A general release is therefore acceptable as long as the class of recipients is clearly identified.',
          'In practice that means categories such as "Primary Care Physicians," "School Personnel," or "Treating Providers involved in the client’s care" are generally appropriate. Written that way, one release signed at intake can cover the pediatrician, the diagnosing psychologist, the school, and the speech therapist — instead of a new signature, a new email, and a new three-day delay for each one.',
          'Two cautions. Keep the class genuinely identifiable: "anyone" is not a class. And remember that the receiving organization gets to decide whether it is satisfied, so a small number of hospital systems will insist on a named recipient on their own form regardless. Build for the general release and keep the specific one ready.',
        ],
      },
      {
        h2: 'Identify the child the way the other office files them',
        body: [
          'A records clerk is matching your request against a chart in a system you cannot see. Anything that makes matching ambiguous turns your request into a callback, and a callback becomes a pile.',
          'Send more identifying detail than feels necessary, not less.',
        ],
        rules: [
          { when: 'Naming the child', then: 'Full legal name as the other office would have registered it, plus any name the family commonly uses, plus date of birth. A child enrolled under a hyphenated or maternal surname is the classic stall.' },
          { when: 'Naming the requester', then: 'The parent or guardian’s full name and their relationship to the child — and, where custody is not straightforward, the documentation that establishes authority to sign.' },
          { when: 'Naming the document', then: 'Exactly what you want, in their vocabulary: "the diagnostic evaluation report," not "records." Include the approximate date or date range of service, and the evaluating clinician if known.' },
          { when: 'Naming yourself', then: 'Practice name, NPI, a direct fax and phone, and a named person who can answer questions. A request from an anonymous fax number is easy to deprioritize.' },
          { when: 'Stating the purpose', then: 'Continuity of care and insurance authorization for ABA services, so the urgency is visible rather than implied.' },
        ],
        downloads: [
          {
            label: 'Records request templates (PDF)',
            file: '/downloads/aba-records-request-templates.pdf',
            blurb: 'Request letters and release language covering the elements above, with bracketed placeholders to fill in.',
          },
          {
            label: 'Consent authority templates (PDF)',
            file: '/downloads/aba-consent-authority-templates.pdf',
            blurb: 'Who may sign for a child, and the documentation to collect when custody is shared or contested.',
          },
        ],
      },
      {
        h2: 'Send it to the right desk',
        body: [
          'Large organizations have a health information management department, and a request faxed to the clinic front desk may never reach it. Small practices are the opposite: the front desk is the records department, and a formal request addressed to HIM will confuse them.',
          'Two minutes on the phone before sending saves a week. Ask where releases should go, whether they have their own form they prefer, what fax or portal they use, and roughly how long fulfilment takes. Record the answer against that organization so nobody has to ask again — a referral-source record that carries the right fax number and the right form is worth more than any template.',
        ],
      },
      {
        h2: 'Chase on a schedule, not on a memory',
        body: [
          'Assume nothing arrives on its own. A workable rhythm is a confirmation call two to three days after sending to verify receipt and legibility, a follow-up at day seven, and an escalation in the second week to a supervisor or, where appropriate, a reminder that individuals have a right of access to their own records within defined timeframes.',
          'Keep the family informed while this happens, and give them a parallel path: many parents can pull the report themselves from a patient portal in a few minutes, which is frequently faster than any institutional route. Asking them to look is not an admission of failure; it is often the fastest single move available.',
          'And log everything — when it was sent, to whom, by what channel, what came back. Records chases that live in one coordinator’s memory stop the day that coordinator is out.',
        ],
      },
      {
        h2: 'Collect the release at the right moment',
        body: [
          'The easiest release to obtain is the one signed while the parent is already filling out intake and motivated to move. The hardest is the one you go back for three days later, when you have discovered you need it and their enthusiasm has cooled.',
          'Put a properly drafted general release in the intake packet itself, written to cover the classes of recipients you predictably need, and capture it electronically so it can be attached to an outgoing request the same minute a gap is identified.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does a HIPAA release have to name each individual provider?',
        a: 'No. HIPAA requires the authorization to identify the name or other specific identification of the person or persons, or the class of persons, who may receive the information. A general release is acceptable where the class of recipients is clearly identified — for example "Primary Care Physicians," "School Personnel," or "Treating Providers involved in the client’s care." Some organizations will still insist on their own form with a named recipient.',
      },
      {
        q: 'Why do records requests come back unfulfilled?',
        a: 'Most often the child could not be matched to a chart, the signer’s authority was unclear, the release was missing a required element such as an expiration date, the requested document was described too vaguely, or it went to the wrong desk. Every one of those is preventable on the first attempt.',
      },
      {
        q: 'How long should a records request take?',
        a: 'Fulfilment timeframes vary by organization and by state, and access rules give individuals a right to their own records within defined limits. Practically, plan on days rather than hours, chase at day three and day seven, and give the family a parallel route through their patient portal.',
      },
      {
        q: 'Who can sign a release for a child?',
        a: 'Generally a parent or legal guardian acting as the personal representative. Shared custody, foster placement, grandparent caregivers and court orders all change the answer, so collect documentation of authority at intake rather than discovering the problem when a request is refused.',
      },
      {
        q: 'Can we ask the family to get the report instead?',
        a: 'Yes, and it is frequently the fastest route. Many evaluation reports are downloadable from a patient portal in minutes. Ask in parallel with your own request rather than instead of it.',
      },
    ],
    carelu: {
      h2: 'How Carelu handles releases and missing reports',
      body: [
        'Records work has two sides. One is the family: the release, the authority to sign, and the report they may be able to pull from a portal in minutes. The other is the organization holding the chart. Carelu runs the family side from the first day of intake, so your team never has to go back for a signature.',
        'The request to the other organization, the call to find the right desk, and the escalation in week two stay with your coordinators. They start that work with a signed release on file and a clear list of what is still missing.',
      ],
      list: [
        { title: 'The release, signed at the right moment', desc: 'The release of information is e-signed inside the hosted intake, while the parent is motivated, and generated as a PDF in the family’s packet the moment it is signed.' },
        { title: 'Knowing what the payer will need', desc: 'Diagnosis requirements and prior-auth rules for each state and payer are built in from Carelu’s payer directory, so your team knows what to ask for before an authorization is refused.' },
        { title: 'The family’s parallel path', desc: 'Families can upload the evaluation report by text or on the intake form, often the fastest route when the report is in a patient portal.' },
        { title: 'Chased on a schedule', desc: 'Follow-up flows by text and email ask for missing documents until they arrive or the family opts out, and every family’s status sits in one live queue.' },
      ],
    },
    compareTitle: 'Records work, by hand and with Carelu',
    compareIntro:
      'Nothing here is difficult. All of it is a rote, time-sensitive task that a busy coordinator does not get to — which is exactly the category of work that should not depend on someone remembering.',
    compare: [
      { step: 'Getting the release signed', manual: 'Chased days later, by email, once a gap is found', carelu: 'Signed as part of intake, electronically, before it is needed' },
      { step: 'Knowing what is missing', manual: 'Discovered when authorization is refused', carelu: 'Required documents tracked per family and per payer rule' },
      { step: 'Sending the request', manual: 'Retyped each time; details missed', carelu: 'Complete request assembled from the record, sent by fax or email' },
      { step: 'Following up', manual: 'When someone remembers', carelu: 'Scheduled chases at day three and day seven, escalated automatically' },
      { step: 'Keeping the family posted', manual: 'Silence while they wait', carelu: 'Family updated at each step, with a portal path offered in parallel' },
      { step: 'Institutional memory', manual: 'Lives in one coordinator’s head', carelu: 'Right fax, right form, right desk stored against each organization' },
    ],
    related: [
      { slug: 'aba-pediatrician-referrals', label: 'Pediatrician referrals', blurb: 'The relationships these requests run through.' },
      { slug: 'aba-client-intake-process', label: 'The full intake process', blurb: 'Every document an ABA start requires, and when to ask for it.' },
      { slug: 'aba-evaluation-referrals', label: 'Families without a diagnosis', blurb: 'When there is no report to request yet.' },
      { slug: 'aba-intake-forms', label: 'Intake forms that get finished', blurb: 'Where the release belongs in the packet.' },
    ],
    ctaHeadline: 'The start is waiting on a PDF.',
    ctaSub: 'Carelu captures the release during intake, tracks what each payer requires, sends complete requests, and chases them on a schedule — so the report arrives before the family loses patience.',
  },

  /* ============================================================
     THE UNDIAGNOSED FAMILY
     ============================================================ */
  'aba-evaluation-referrals': {
    slug: 'aba-evaluation-referrals',
    pill: 'Playbook · Pre-Diagnosis Families',
    h1: 'The family has no diagnosis yet. That is the beginning of the conversation, not the end.',
    metaTitle: 'ABA Leads Without a Diagnosis: Evaluation Referrals That Convert | Carelu',
    metaDescription:
      'Families who reach out before a diagnosis are the largest segment most ABA practices throw away. How to check your own payer rules, build an evaluation path, and own the months of waiting so the family starts with you.',
    answer:
      'Don’t send them away: 22% of families reach out before a diagnosis, and some payers don’t require one, so check each payer’s rule in each state first. Then give the family an evaluation path (named evaluators with payers and wait times, plus early intervention for under-threes), check in every three to four weeks, and make starting a single step when the report arrives.',
    updated: '2026-09-17',
    intro: [
      'Ask a coordinator what happens when a parent calls without a diagnosis and you will usually hear a version of the same sentence: "We tell them to come back once they have one." It is said without embarrassment, because it sounds like the correct clinical answer.',
      'It is also the most expensive sentence in the practice. You paid to reach that family. They chose you. And you handed them back to a system with evaluation waits that commonly run from several months to well over a year, during which they will talk to a dozen other people, at least one of whom will be a practice that stayed in touch.',
      'This is not a rare case. In our published research across 120 provider organizations and 185,000 family conversations, 22% of families reached out before receiving a diagnosis. Better than one in five. It is the largest recoverable segment in most ABA funnels, and working it costs almost nothing.',
    ],
    sections: [
      {
        h2: 'Where the family actually is',
        body: [
          'A parent contacting you pre-diagnosis is somewhere on a path that takes months and that nobody is guiding them through. They noticed something. They may have raised it with a pediatrician who said to wait and see. Possibly there has been a screening. Somewhere ahead is an evaluation appointment with a long queue, then a report, then insurance, then a provider.',
          'They are not shopping. They are lost. The practice that gives them a map is the practice they remember when the report finally arrives.',
        ],
      },
      {
        h2: 'First, check whether you actually need the diagnosis',
        body: [
          'Practices routinely turn away families under a rule that does not apply to them. Diagnosis requirements are set per payer and per state, not by ABA as a field, and they vary more than most teams assume.',
          'Some Medicaid programs require a confirmed DSM-5-TR autism diagnosis produced by a specified tool. Some accept a provisional diagnosis for young children so treatment can start while confirmation proceeds. At least one state’s behavior-analysis benefit does not require an autism diagnosis at all, operating instead on a physician referral and order with a comprehensive diagnostic evaluation. Commercial plans differ again, and several care about the recency of the diagnosis rather than only its existence.',
          'Before writing any policy about undiagnosed families, write down the actual rule for each of your top payers in each state you serve. A meaningful number of "we cannot help you yet" conversations turn out to be avoidable.',
        ],
      },
      {
        h2: 'Build an evaluation path and name it out loud',
        body: [
          'A referral to "a developmental pediatrician" is not help. A specific name, with a wait time and a payer, is help.',
          'Assemble, per service area: several diagnosing providers you have actually verified, what each one takes, roughly how long their queue is, and whether they do telehealth evaluation. Add the state’s early intervention program for under-threes, which is free and which parents are routinely never told about. Keep it current enough to be worth handing over — a stale wait time damages the trust the list was supposed to build.',
          'If you evaluate in-house, this is one of the strongest things you can say in any ad, on any page, and to any referring office. It collapses the longest delay in the journey, and most competitors cannot match it.',
        ],
      },
      {
        h2: 'Own the waiting period',
        body: [
          'This is the part that actually wins the family, and it is almost never done. From the moment they leave your first conversation to the moment a report exists, a practice can be either the organization that helped or the organization that said no.',
          'A workable rhythm: capture the evaluation appointment date if there is one, and if there is not, help them get one. Check in every three or four weeks, not with "just following up" but with something useful — a reminder of what to bring, a note about what the report will need to say for insurance, an update on your own wait. Ask for the report in the week it is expected rather than a month later. And make sure that when it arrives, starting with you is a single step, not a fresh intake.',
          'Every one of those touches is a scheduled task rather than a judgment call, which is exactly why they get missed in practices that rely on someone remembering, and exactly why they are easy to automate.',
        ],
      },
      {
        h2: 'What to say in the first conversation',
        body: [
          'Three things, in this order. That you believe them and what they are describing is worth evaluating. What the actual path looks like, with names and rough timelines, so the fog lifts. And that you will stay with them through it, with a specific next contact rather than an open invitation to call back.',
          'Avoid two failure modes. Do not diagnose, or imply one, in a sales conversation — you are not qualified to in that setting and it is harmful. And do not promise a start date that depends on a report nobody has seen.',
        ],
      },
      {
        h2: 'Reminders that fire whether or not anyone remembers',
        body: [
          'The operational core of this page is unremarkable: a set of dated tasks per family that survive staff turnover, vacations, and busy weeks. Evaluation date approaching. Evaluation date passed, ask how it went. Report expected this week. Ninety days with no movement, check whether the family still wants care.',
          'Practices that keep these in a coordinator’s head lose them within a month. Practices that keep them in a shared spreadsheet lose them within a quarter. The families in this segment convert on a timescale long enough that only a system survives it.',
        ],
      },
      {
        h2: 'Count it as a channel',
        body: [
          'Track pre-diagnosis families as their own cohort, with their own conversion rate and their own time to start. The number will be worse than your diagnosed cohort and far better than zero, which is what it is worth today in most practices.',
          'It also tells you something about your marketing: if a large share of your paid leads arrive without a diagnosis, that is not a lead-quality problem to complain about. It is a signal about which channels reach families early, and an argument for building the evaluation path properly rather than turning the channel off.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does ABA always require an autism diagnosis?',
        a: 'No. Requirements are set per payer and per state. Many Medicaid programs require a confirmed DSM-5-TR diagnosis from a validated tool, some allow a provisional diagnosis for young children, and at least one state benefit runs on a physician referral and order without an autism-diagnosis requirement. Check the rule for each payer in each state you serve before turning a family away.',
      },
      {
        q: 'What should we do with leads who have no diagnosis?',
        a: 'Give them a specific evaluation path — named diagnosing providers with payers and wait times, plus early intervention for under-threes — then stay in contact every three to four weeks until the report exists, and make starting with you a single step when it does.',
      },
      {
        q: 'How long are autism evaluation waits?',
        a: 'They vary widely by region and provider, and commonly run from several months to over a year. That length is precisely why the waiting period is worth owning: the family will speak to many people during it, and the practice that stayed useful is the one they come back to.',
      },
      {
        q: 'Should we advertise on evaluation-related searches?',
        a: 'Only if you have a real path for those families — in-house testing or a verified referral list. Otherwise you are paying premium prices to say no. With a path, these searches are among the best available, because you reach families before any competitor is talking to them.',
      },
      {
        q: 'Is it worth keeping pre-diagnosis families in the CRM?',
        a: 'Yes, as their own cohort with scheduled touches. They convert at a lower rate and over a longer horizon than diagnosed families, which still makes them far more valuable than the zero they are worth when told to call back later.',
      },
    ],
    carelu: {
      h2: 'How Carelu keeps pre-diagnosis families with you',
      body: [
        '22% of families reach out before a diagnosis. This page turns that from a "call us back" into a path, and nearly every step on that path is a scheduled task. Carelu does those tasks: it checks whether the diagnosis is required at all, sends the family down an evaluation path, and stays in touch through the months of waiting.',
        'The clinical side stays human. Your team builds and vets the evaluator list, and nobody diagnoses in a sales conversation. Carelu makes sure the family is still with you when the report arrives.',
      ],
      list: [
        { title: 'The real rule, before anyone says no', desc: 'Diagnosis requirements are built in for each state and payer, so families who would qualify without a diagnosis are not turned away by habit.' },
        { title: 'An evaluation path, not a dead end', desc: 'Families without a diagnosis are routed to an evaluation path in the first conversation, on phone, chat, text or form, in English or Spanish.' },
        { title: 'Intake done while they wait', desc: 'The family completes intake now, with e-signed consents and insurance verified. When the report exists, they upload it by text or on the form and pick up where they left off.' },
        { title: 'Months of follow-up that actually happen', desc: 'Follow-up flows by text and email keep in touch through the waiting months, until the family responds or opts out.' },
      ],
    },
    compareTitle: 'The pre-diagnosis family, by hand and with Carelu',
    compareIntro:
      'Nothing on this page requires clinical judgment. It requires that a long list of small, dated follow-ups actually happen over six to twelve months.',
    compare: [
      { step: 'First conversation', manual: '"Call us back when you have a diagnosis"', carelu: 'Diagnosis requirement checked against that state and payer before anyone says no' },
      { step: 'Evaluation referral', manual: 'A general suggestion to see a specialist', carelu: 'Named local evaluators matched to the family’s plan, area and language' },
      { step: 'The waiting months', manual: 'Silence; the family drifts', carelu: 'Scheduled check-ins every few weeks with something useful each time' },
      { step: 'Report arrives', manual: 'Nobody knows unless the family calls', carelu: 'Asked for in the week it is due, then collected and filed' },
      { step: 'Starting', manual: 'A fresh intake from the beginning', carelu: 'Intake already complete; the report closes the last gap' },
      { step: 'Visibility', manual: 'Segment invisible in reporting', carelu: 'Tracked as a cohort with its own conversion rate and time to start' },
    ],
    related: [
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'Where this cohort sits in the growth equation.' },
      { slug: 'meta-ads-for-aba', label: 'Meta ads for ABA', blurb: 'The channel that will send you the most families at this stage.' },
      { slug: 'aba-follow-up-sequences', label: 'Follow-up that reads human', blurb: 'What to actually say across six months of waiting.' },
      { slug: 'aba-records-request', label: 'Records requests', blurb: 'Getting the report the week it exists.' },
    ],
    ctaHeadline: 'The longest wait in this field is also the longest opportunity.',
    ctaSub: 'Carelu checks the real diagnosis rule for that state and plan, routes the family to an evaluation path, and keeps them warm through every month of waiting — so they start with you.',
  },

  /* ============================================================
     FOLLOW-UP
     ============================================================ */
  'aba-follow-up-sequences': {
    slug: 'aba-follow-up-sequences',
    pill: 'Playbook · Follow-Up',
    h1: 'ABA follow-up that does not read like a robot wrote it.',
    metaTitle: 'ABA Follow-Up Sequences That Get Replies | Carelu',
    metaDescription:
      'Why "Thank you for your inquiry, someone will be in touch" loses families, what a follow-up that earns a reply actually contains, and the cadence, channels and guardrails behind a sequence that works.',
    answer:
      'Reply within minutes on the family’s own channel with a message that names the child, their area and plan, and asks one specific question. Then call the same day with a text, alternate touches on days 2, 4, 7 and 12, move to a monthly hold after about two weeks of silence, and stop instantly on an opt-out or a human reply.',
    updated: '2026-09-17',
    intro: [
      'A parent contacts five ABA practices in one evening. Four send the same automated line: thank you for your inquiry, we appreciate you reaching out, someone will be in touch shortly. The fifth sends a message that names their son, mentions the county they live in, notes the plan they said they had, and asks one specific question.',
      'It is not a close call. The fifth practice gets the reply, and frequently gets the child — not because their care is better, but because they were the only one who appeared to have read what the parent wrote.',
      'The sameness is not an accident. Most practices never changed the default greeting that shipped with whatever tool sends it, which means a parent contacting several providers in one evening frequently receives near-identical words from all of them. When most of a market opens with the same sentence, writing one real sentence is a competitive advantage available to anyone.',
      'Templated acknowledgements are not worthless; they beat silence. But they occupy the moment of highest intent with a message that communicates nothing, and they are the easiest thing in a practice to fix.',
    ],
    sections: [
      {
        h2: 'What the parent is actually doing',
        body: [
          'They are comparing. Not clinical models, which they cannot evaluate, but signals of competence and care, which they can. Response speed is one. Whether the reply engages with their particular situation is the other, and it is the stronger of the two.',
          'A parent who wrote three sentences about a four-year-old who has stopped sleeping and receives a form letter has learned that nobody read the three sentences. Everything else on your website arguing that you treat every child as an individual is now contradicted by evidence.',
        ],
      },
      {
        h2: 'The anatomy of a follow-up that earns a reply',
        body: [
          'Six elements, none of which require creative writing.',
        ],
        list: [
          { title: 'Their specifics, early', desc: 'The child’s name, their age, the town or county, the plan. Proof of reading, in the first line, before anything else.' },
          { title: 'Something they said, reflected', desc: 'The concern in their own words. "You mentioned the transitions at daycare have been hard" outperforms every value proposition ever written.' },
          { title: 'One specific ask', desc: 'Not "let us know if you have questions." A single question that is easy to answer on a phone: "Is Thursday morning or Friday afternoon better for a ten-minute call?"' },
          { title: 'The next step in their language', desc: 'What happens next, how long it takes, and what you need from them — without the words intake, authorization, or eligibility.' },
          { title: 'A person’s name', desc: 'Sent by someone, signed by someone, replyable to someone. Practice-name-only messages read as broadcasts.' },
          { title: 'The channel they used', desc: 'If they texted, text back. If they filled a web form on a phone at 10pm, a text will be read and an email will not.' },
        ],
      },
      {
        h2: 'Cadence: fast, then patient',
        body: [
          'The first touch is the one that matters most, and it is measured in minutes. After that the job changes from speed to persistence, and persistence is where most practices quit early — a single voicemail and no further contact is the norm, and it is why so many funnels show a large pool of leads that were "contacted" and never spoken to.',
        ],
        rules: [
          { when: 'Within minutes of the inquiry', then: 'A real response on their channel that names their child and confirms you serve their area and plan, or asks the one question needed to find out.' },
          { when: 'Same day, if no reply', then: 'A call from a local number, plus a short text saying who called and why. A missed call with no context is ignored; a missed call with a text is returned.' },
          { when: 'Day 2 and day 4', then: 'Alternate channel and change the ask. Vary what you offer: a time to talk, an answer to the coverage question, the intake link.' },
          { when: 'Day 7 and day 12', then: 'Keep going. Most practices have stopped by now, which is exactly why these touches connect.' },
          { when: 'After roughly two weeks of silence', then: 'Move to a monthly hold rather than dropping them. Circumstances change: a diagnosis arrives, a plan changes at renewal, another provider falls through.' },
          { when: 'Always', then: 'Stop immediately on an opt-out, and stop the sequence the moment a human conversation starts. Nothing undoes a good call like an automated nudge arriving the next morning.' },
        ],
      },
      {
        h2: 'Write for the stage, not the template',
        body: [
          'A family waiting on an evaluation, a family with a half-finished packet, and a family whose authorization is pending need three different messages, and sending them the same nudge is how a sequence starts feeling like spam.',
          'Segment by the thing that is actually blocking the start. Missing document: ask for that document, with a link, and say what it unlocks. Waiting on evaluation: reference the appointment date. Verified and waiting for a slot: tell them where they are and when you expect movement. In every case the message should carry a fact only your practice could know.',
        ],
      },
      {
        h2: 'What should never be automated',
        body: [
          'Bad news. Clinical questions. Anything to a family who has expressed frustration. Anything to a family in crisis. A sequence that keeps cheerfully nudging a parent who wrote back upset does more damage than no follow-up at all.',
          'The rule worth enforcing in software: any inbound reply pauses everything automated on that family until a human has looked.',
        ],
      },
      {
        h2: 'Guardrails',
        body: [
          'Follow-up in healthcare is governed, and the constraints are not onerous but they are real. Capture consent for calls and texts at the point of contact, with language a parent can understand, and honor an opt-out everywhere at once. Respect quiet hours. Keep clinical detail out of unsecured channels — a text can say who is calling and why without naming a diagnosis.',
          'And keep an audit trail of what was sent, when, to whom, and on what consent. It protects the practice, and it is the same log that tells you which sequences are working.',
        ],
      },
      {
        h2: 'How to tell if the sequence is any good',
        body: [
          'Reply rate per touch, not open rate. The share of leads that ever reach a live conversation. The number of touches before the average connection, which is almost always higher than the number your team makes. And the opt-out rate, which is the honest measure of whether your follow-up feels like help or like pressure.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many times should we follow up with an ABA lead?',
        a: 'More than once, which is where most practices stop. A workable pattern is an immediate response, a same-day call with a text, alternating touches on days 2, 4, 7 and 12, then a monthly hold rather than a drop. Stop instantly on an opt-out, and pause everything automated as soon as a human conversation begins.',
      },
      {
        q: 'Is text or email better for following up with parents?',
        a: 'Text, by a wide margin, for parents of young children — provided you have consent and keep clinical detail out of it. Email works for documents and summaries. Best practice is to answer on whatever channel the family used.',
      },
      {
        q: 'What is wrong with an automated "thank you for your inquiry" message?',
        a: 'Nothing, except that it spends the moment of highest intent saying nothing. It is better than silence and far worse than a reply that names the child, confirms the service area and plan, and asks one specific question.',
      },
      {
        q: 'Can automated follow-up sound personal?',
        a: 'Only if it is built from the family’s own record rather than from a template with merge fields. The difference a parent notices is whether the message contains something that could only be true of them — their county, their plan, the concern they described — not whether a name was inserted into a greeting.',
      },
      {
        q: 'When should follow-up stop?',
        a: 'On opt-out, immediately and permanently. On a clear "we started elsewhere," with a short note that the door is open. Otherwise move to a low-frequency hold instead of deleting the family, because diagnoses arrive and plans change.',
      },
    ],
    carelu: {
      h2: 'How Carelu runs follow-up for every family, at every stage',
      body: [
        'Every practice knows the pattern on this page: reply fast, reply on their channel, write for the stage the family is actually in, and keep going past day three. Only 2% of providers run any automated re-engagement at all. Carelu runs it for every family, without anyone having to remember.',
        'The messages that should never be automated stay with your team: bad news, clinical questions, and families who are frustrated or in crisis. Carelu handles the persistence so your coordinators have time for those conversations.',
      ],
      list: [
        { title: 'The first reply, in seconds', desc: 'Every family is answered within seconds on the channel they used, whether phone, website chat, text or web form, in English or Spanish.' },
        { title: 'A message per stage', desc: 'Follow-up flows run per family and per stage, so a missing document, an unfinished intake and a family waiting to start each get their own message.' },
        { title: 'Persistence past day three', desc: 'Flows keep going by text and email until the family responds or opts out, not one voicemail and done.' },
        { title: 'Consent guardrails', desc: 'Follow-up runs within the family’s consent, and an opt-out is honored.' },
      ],
    },
    compareTitle: 'Follow-up, by hand and with Carelu',
    compareIntro:
      'Every practice knows what good follow-up looks like. What they lack is the twenty hours a week it would take to write it by hand, for every family, forever.',
    compare: [
      { step: 'First reply', manual: 'Template acknowledgement, or nothing until morning', carelu: 'Written from the conversation, in minutes, on their channel' },
      { step: 'Personalization', manual: 'Merge fields in a generic body', carelu: 'Built from the family’s own record — child, area, plan, what they said' },
      { step: 'Persistence', manual: 'One voicemail, then the lead goes cold', carelu: 'Multi-touch sequence across text and phone until they respond or opt out' },
      { step: 'Segmentation', manual: 'One sequence for everyone', carelu: 'Different message per stage and per blocker' },
      { step: 'Human handoff', manual: 'Automation keeps firing mid-conversation', carelu: 'Automated touches pause the moment a person replies' },
      { step: 'Compliance', manual: 'Consent tracked informally, opt-outs missed', carelu: 'Consent and opt-out enforced across every channel, with an audit trail' },
    ],
    related: [
      { slug: '/research/the-intake-gap', label: 'The Intake Gap (our research)', blurb: '185,054 family conversations across 120 ABA providers. The source for the numbers on this page.' },
      { slug: 'aba-intake-drop-off', label: 'Where families disappear', blurb: 'The four leaks follow-up is meant to plug.' },
      { slug: 'aba-evaluation-referrals', label: 'Families without a diagnosis', blurb: 'The cohort that needs the longest sequence.' },
      { slug: 'aba-waitlist-management', label: 'Waitlist management', blurb: 'Keeping start-ready families warm for months.' },
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'How follow-up multiplies every channel above it.' },
    ],
    ctaHeadline: 'Send the message the other four practices did not.',
    ctaSub: 'Carelu writes every follow-up from the family’s own conversation — their child, their county, their plan, their words — and keeps going until they answer or ask you to stop.',
  },

  /* ============================================================
     MEASUREMENT
     ============================================================ */
  'aba-intake-metrics': {
    slug: 'aba-intake-metrics',
    pill: 'Playbook · Metrics',
    h1: 'The eight numbers that explain why your ABA practice is not growing.',
    metaTitle: 'ABA Intake Metrics: The 8 Numbers That Matter | Carelu',
    metaDescription:
      'Speed to first contact, answer rate, qualified rate, packet completion, verification turnaround, inquiry-to-start and cost per started client — what to measure in an ABA practice, where each number hides, and how to review it weekly.',
    answer:
      'Track eight: inquiries by channel, answer rate, speed to first contact, after-hours share, qualified rate with reasons, intake completion, verification turnaround, and inquiry to started with days to start, plus cost per started client. Start with answer rate and speed to contact; many practices convert only 15–60% of inquiries, while well-run funnels reach 80%+.',
    updated: '2026-09-17',
    intro: [
      '"We get plenty of leads, they just do not convert" is the most common sentence in ABA growth conversations and the least useful, because it contains no number. Plenty compared with what? Do not convert at which step?',
      'Almost every practice that says this has a specific, findable leak, and almost none of them can point to it, because the funnel is measured at the ends — inquiries at the top, starts at the bottom — and not at the joints in between.',
      'Eight numbers will locate the leak. None require new software to start counting, and the first two usually end the argument by themselves.',
    ],
    sections: [
      {
        h2: 'The eight',
        body: [
          'Track these monthly at minimum, weekly if you are actively fixing something. Segment every one of them by channel, because averages hide the channel that is quietly failing.',
        ],
        table: {
          cols: ['Metric', 'What it actually means', 'Where it hides'],
          minWidth: 720,
          rows: [
            { cells: ['Inquiries by channel', 'Every first contact, on every channel, including calls that rang out', 'Calls that never became a record; the true denominator is always larger than the CRM says'] },
            { cells: ['Answer rate', 'Share of inbound contacts that reached a human or a real response', 'Phone system reports, not the CRM. Missed calls leave no CRM trace at all'] },
            { cells: ['Speed to first contact', 'Median and 90th percentile time to a real response, not an autoresponder', 'The median flatters you; the 90th percentile is where lost families live'] },
            { cells: ['After-hours share', 'Contacts arriving outside business hours', 'Timestamps. In our cohort this ran at 48% of family contacts'] },
            { cells: ['Qualified rate, and why not', 'Share that fit area, payer, age and diagnosis rules — with reasons recorded', 'Disqualification reasons are usually not captured, so nobody can see the pattern'] },
            { cells: ['Intake completion', 'Share of started packets that get finished', 'Stalls partway through; the abandoned step tells you which question is killing it'] },
            { cells: ['Verification turnaround', 'Hours from first contact to a benefits answer', 'Queues in another team’s inbox, invisible to intake'] },
            { cells: ['Inquiry to started, and days to start', 'The number that pays the bills, plus how long it took', 'Requires connecting first contact to a scheduled first session — the link most systems break'] },
          ],
          note: 'Add one financial metric on top: cost per started client by channel. Cost per lead is the number that makes weak channels look strong.',
        },
      },
      {
        h2: 'The two nobody tracks',
        body: [
          'First: who picks up. Answer rate by person and by hour is uncomfortable to look at and enormously informative. It is rarely a performance problem and almost always a coverage problem — a single coordinator cannot answer a call while on another call, and the pattern shows up as a hole at the same hours every week.',
          'Second: what happened to the families you never reached. In most practices this is the largest cohort in the funnel and the least examined. They are not lost causes; they are people who were called once at a bad moment. Counting them is what makes the case for a real follow-up sequence.',
        ],
      },
      {
        h2: 'Telling a lead-quality problem from an intake problem',
        body: [
          'Every practice with weak conversion eventually argues about this, and the argument is settled by two numbers rather than by opinion.',
          'Bad qualification — the wrong families arriving at all — is real, and it comes from the channel: geography set wider than you can serve, keywords that attract the curious rather than the ready, creative that speaks to no one in particular. But it is usually not the biggest thing wrong, and diagnosing it when the truth is a slow phone call sends a practice off to rebuild ad campaigns while the actual leak keeps running.',
          'It has a distinctive signature. You call within minutes of the inquiry, and still very few families respond at all — and of the ones who do, very few turn out to be in your service area, on a payer you take, or in your age band. Both halves have to be true. If families answer when you call promptly, the channel is doing its job. If they qualify once you reach them, the channel is doing its job. Either one on its own points back at operations.',
          'When the signature is genuinely there, the fix is in the channel and nowhere else: tighten geography to the area you can actually serve, cut the search terms that bring browsers, rebuild lookalikes from families who started care rather than from everyone who filled a form, and say the payers and ages you take out loud in the creative so families self-select before they ever contact you.',
        ],
      },
      {
        h2: 'Connect the ad channels or you are optimizing blind',
        body: [
          'If your ad platforms only know about form submissions, they will optimize toward people who submit forms. Feeding the later outcomes back — qualified, intake completed, started care — retrains delivery toward families who become clients, and it is the highest-leverage change most ABA advertisers have never made.',
          'Three practical requirements. Keep the source on the record from first contact through to start, so a started client can be traced to a keyword or a campaign. Track calls, because in this category most paid conversions are phone calls and they are invisible by default. And account for lag: an ABA family sourced in March may start in May, so a 30-day window will tell you to switch off the channel that is working.',
        ],
      },
      {
        h2: 'Read the funnel as a multiplication',
        body: [
          'Write your own numbers in a row and multiply them. Answer 70% of inquiries, qualify 80% of those, complete packets with 75%, and start 80% of the remainder, and you are admitting about a third of the families who wanted you.',
          'Now raise each of those to 95% and the same inquiry volume produces more than double the admissions, with no additional marketing spend. This is why intake, not lead generation, is usually the cheapest growth lever available — and why the multiplication is worth doing on a whiteboard in front of the whole team once a quarter.',
        ],
      },
      {
        h2: 'The systems being connected is itself a signal',
        body: [
          'One finding from our own fleet is worth stating carefully, because it is the strongest association in the dataset and the easiest to over-read. Across 117 ABA providers over 13 months, those whose intake fed their CRM grew about 6.5% per month, against 0.9% for those whose intake did not — roughly a sevenfold difference.',
          'That is observational, and correlation is not causation: practices organized enough to connect their systems tend to do many other things well, and the connection is probably as much a symptom of discipline as a cause of growth. It is still the clearest line in the data, and the mechanism is not mysterious. When intake, phones and ads all write to the same record, every number on this page can actually be computed — and a practice that can see its funnel fixes it.',
        ],
      },
      {
        h2: 'The weekly twenty minutes',
        body: [
          'A short standing review beats a beautiful dashboard nobody opens. Four questions: how many inquiries came in and from where; how many did we fail to answer; which families are stuck and on what; and what is the single biggest fall between two adjacent steps.',
          'Then fix one thing. Practices that review weekly and change one process a month outperform practices that commission a quarterly analysis, every time.',
        ],
      },
      {
        h2: 'Benchmarks, honestly',
        body: [
          'Published drop-off between first inquiry and first appointment commonly runs 40–85%, and many practices convert only 15–60% of inquiries into started clients. Well-run funnels — instant response, fast verification, digital paperwork, managed waitlists — reach 80%+.',
          'Treat these as orientation, not as a target. Your own trend line month over month is worth more than any industry average, because it is the only comparison that controls for your market, your payers, and your capacity.',
        ],
      },
    ],
    download: {
      label: 'Download the free ABA intake checklist (PDF)',
      file: '/downloads/aba-intake-checklist.pdf',
      blurb: 'Walk your funnel stage by stage and write your own numbers next to each step.',
    },
    faq: [
      {
        q: 'What is a good intake conversion rate for an ABA practice?',
        a: 'Many practices convert 15–60% of inquiries into started clients, and drop-off between first inquiry and first session commonly runs 40–85%. Well-run funnels reach 80%+. Your own month-over-month trend matters more than any benchmark, because it controls for your market and capacity.',
      },
      {
        q: 'What should we measure first?',
        a: 'Answer rate and median time to first human contact, segmented by hour of day. They are the cheapest to fix, they multiply every other stage, and in most practices the first honest look at them settles the debate about where the problem is.',
      },
      {
        q: 'Is our problem lead quality or our intake?',
        a: 'Run one test: call within minutes for two weeks. If families answer and most of them qualify, the channel is fine and the problem is downstream. It is genuinely a lead-quality problem only when both halves fail — very few respond even to an immediate call, and very few of those who do are in your service area, on a payer you take, or in your age band. That is the less common case, and the fix for it lives in channel targeting rather than in intake.',
      },
      {
        q: 'How do I track which ad channel produced a client?',
        a: 'Keep the source attached to the lead record from first contact through to first session, use call tracking so phone conversions are attributable, and feed the downstream events back to the ad platforms. Allow for the lag between inquiry and start when judging a channel.',
      },
      {
        q: 'Why do missed calls not show up in our CRM?',
        a: 'Because a call that rang out never created a record. The CRM can only count families who reached someone, which is why answer rate has to come from the phone system and why most practices underestimate their true inquiry volume.',
      },
      {
        q: 'Cost per lead or cost per started client?',
        a: 'Cost per started client, always. Cost per lead rewards channels that produce volume regardless of whether those families can be served or ever start, and it is the main reason practices keep funding channels that lose money.',
      },
    ],
    carelu: {
      h2: 'How Carelu measures your intake funnel for you',
      body: [
        'Most of the eight numbers on this page are hard to get for one reason: phones, forms, intake and the CRM were never connected, so the joints of the funnel go unmeasured. With Carelu, first contact, qualification, intake and verification all happen in one place, so the numbers come straight from the work.',
        'Reading the numbers, and choosing the one thing to fix this month, is still your team’s weekly twenty minutes. Carelu makes sure the numbers are there when you sit down.',
      ],
      list: [
        { title: 'Answer rate and speed to contact', desc: 'Measured across phone, website chat, text and web forms, because Carelu is the first response on all of them.' },
        { title: 'Qualification on the record', desc: 'Service area, payer, age and diagnosis status are captured in the first conversation, so qualification is written down, not remembered.' },
        { title: 'Completion, conversion and cost', desc: 'Intake completion, conversion and cost per started client by channel and source, with Google Ads, Meta Ads and CallRail connected.' },
        { title: 'A clean denominator', desc: 'Job seekers are separated from families on your website, and they make up 40% of captured website leads, so they don’t inflate your inquiry count.' },
        { title: 'Your systems connected', desc: 'Leads and status flow into CentralReach, Rethink, Aloha, Salesforce, HubSpot or Zoho, or anywhere else by webhook.' },
      ],
    },
    compareTitle: 'Knowing your numbers, by hand and with Carelu',
    compareIntro:
      'Most of these metrics are not hard to compute. They are hard to compute repeatedly, from systems that were never connected to each other.',
    compare: [
      { step: 'Counting inquiries', manual: 'CRM records only; missed calls invisible', carelu: 'Every call, chat, form and fax counted, answered or not' },
      { step: 'Speed to contact', manual: 'Not measured', carelu: 'Median and 90th percentile, by channel and by hour' },
      { step: 'Disqualification reasons', manual: 'Rarely recorded', carelu: 'Captured in the conversation and reportable' },
      { step: 'Attribution', manual: 'Breaks between ad click and first session', carelu: 'Source carried from first contact to started client' },
      { step: 'Reporting effort', manual: 'A manual export and a spreadsheet each month', carelu: 'Live, and answerable in plain language' },
    ],
    related: [
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'The equation these numbers describe.' },
      { slug: 'aba-intake-drop-off', label: 'Where families disappear', blurb: 'The four leaks behind a bad number.' },
      { slug: 'google-ads-for-aba', label: 'Google Ads for ABA', blurb: 'Feeding these events back into the auction.' },
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'The hours behind your worst answer rate.' },
    ],
    ctaHeadline: 'You cannot fix the step you cannot see.',
    ctaSub: 'Carelu counts every inquiry on every channel, times every response, records why families were disqualified, and ties started clients back to the campaign that produced them.',
  },

  /* ============================================================
     AFTER HOURS
     ============================================================ */
  'after-hours-intake-coverage': {
    slug: 'after-hours-intake-coverage',
    pill: 'Playbook · After Hours',
    h1: 'Half the families who contact you are not doing it during business hours.',
    metaTitle: 'After-Hours Intake Coverage for ABA Practices | Carelu',
    metaDescription:
      'In a cohort of 120 providers and 185,000 family conversations, 48% of contacts arrived outside business hours. What parents do when they reach voicemail, the real options for covering those hours, and what coverage has to do beyond taking a message.',
    answer:
      'About half: in a cohort of 120 providers and roughly 185,000 family conversations, 48% of contacts arrived outside business hours. Parents who reach voicemail usually call the next practice, so real coverage has to tell them whether you serve their area and take their plan and start intake on the spot, not just take a message.',
    updated: '2026-09-17',
    intro: [
      'Across 120 ABA and behavioral-health providers and roughly 185,000 family conversations, 48% of family contacts arrived outside business hours. Not a rounding error, and not an edge case. Half the demand.',
      'That number has an obvious explanation. A parent of a child who needs ABA is not free at eleven on a Tuesday morning. They are free after bedtime, on a lunch break, on Sunday afternoon — and that is when they finally do the thing they have been putting off for weeks.',
      'Which means the most consequential question in ABA intake is not what your team says on a call. It is what happens when nobody is there — and the answer matters more each year, because in the same research the median provider in a same-store cohort saw demand grow 35% year over year. A fixed-size gap in coverage loses a growing number of families.',
    ],
    sections: [
      {
        h2: 'What a parent actually does at 8pm',
        body: [
          'They do not leave a voicemail. They hang up and try the next practice on the list they are working through, and the one after that, until somebody answers. If nobody answers, a good share of them do not try again the next day — the moment of resolve passes, and calling strangers about your child is hard enough once.',
          'This is why after-hours loss is invisible. These families never enter your CRM, never appear in a report, and never show up in the conversation about why growth is flat. The only evidence is a gap in the timestamps.',
        ],
      },
      {
        h2: 'What voicemail communicates',
        body: [
          'Put yourself on the other end. A parent has spent months working up to this call. They get a recorded greeting and an invitation to leave a message. What they learn, fairly or not, is that reaching this organization is going to be difficult — and they are about to hand that organization their child for twenty hours a week.',
          'The same applies to a web form that promises a response within one business day. It is honest and it is a competitive liability, because "one business day" on a Friday night means Monday, and Monday is three practices too late.',
        ],
      },
      {
        h2: 'The four ways to cover the hours',
        body: [
          'Every practice picks one of these, including the ones that have never discussed it.',
        ],
        table: {
          cols: ['Option', 'What it really costs', 'What a parent gets'],
          minWidth: 700,
          rows: [
            { cells: ['Voicemail and a web form', 'Nothing up front; roughly half your inquiry demand', 'A recording, and a reason to call the next practice'] },
            { cells: ['Staff rotation or on-call', 'Real money and real goodwill; hard to sustain, worse to recruit for', 'A person — on the nights the rotation holds'] },
            { cells: ['Answering service', 'Modest and predictable', 'A courteous message-taker who cannot answer whether you take their plan'] },
            { cells: ['Coverage that can actually transact', 'More than a message service, less than headcount', 'Answers about area and coverage, and intake started on the spot'] },
          ],
          note: 'The distinction that matters is not human versus automated. It is whether the family gets an answer or gets a promise of one.',
        },
      },
      {
        h2: 'Taking a message is not coverage',
        body: [
          'This is where most after-hours projects fail. A service that collects a name and number and emails it to the office has moved the delay, not removed it. The parent still does not know the three things they called to find out — whether you serve their area, whether you take their insurance, and how long the wait is — and they will keep calling other practices until someone tells them.',
          'Real coverage answers those questions at the moment they are asked, and then advances the family: confirm the area, confirm the payer, start the intake while intent is at its peak, book the next step, and route a family with no diagnosis toward evaluation instead of a dead end. Everything a good coordinator would do at 2pm needs to happen at 9pm, or the coverage is theatre.',
        ],
      },
      {
        h2: 'Weekends, holidays, and the lunch hour',
        body: [
          'After-hours is usually discussed as nights, but the pattern is wider. Weekends are heavy, because that is when two parents can talk it through together. Holidays and school breaks produce spikes, as does the week after a pediatrician visit. And the daily lunch hour is a hole in most practices: it is precisely when working parents make personal calls, and precisely when the front desk is down to one person or none.',
          'Whatever coverage you build, check it against your own timestamps rather than against assumptions. The specific holes vary by market more than people expect.',
        ],
      },
      {
        h2: 'The internal objection, answered',
        body: [
          'Someone will say that families who are serious will call back. Some will. The question is what share, and whether you are willing to concede the rest to whichever competitor picked up — and in a market where several practices bid on the same search terms, "we will get them tomorrow" is a bet against arithmetic.',
          'The related objection is that after-hours contacts are lower quality. They are not; they are the same families, contacting you at the only time they are free. What is true is that they are less patient, because they are making the call in a narrow window they had to carve out.',
        ],
      },
      {
        h2: 'How to measure whether it is working',
        body: [
          'Three numbers. The share of contacts arriving outside business hours, which tells you the size of the prize. The answer rate inside those hours specifically. And the conversion rate of after-hours contacts compared with business-hours contacts — if the first is materially worse, your coverage is taking messages rather than doing the work.',
          'Watch the third one over a full quarter. When after-hours conversion approaches business-hours conversion, the coverage is real.',
        ],
      },
    ],
    faq: [
      {
        q: 'What share of ABA inquiries arrive after hours?',
        a: 'In our published cohort of 120 providers and roughly 185,000 family conversations, 48% of family contacts arrived outside business hours. The pattern is driven by when parents of young children are actually free — evenings, weekends and lunch breaks.',
      },
      {
        q: 'Do parents leave a voicemail?',
        a: 'Mostly not. They hang up and call the next provider. Families lost this way never create a record, which is why after-hours loss is usually absent from the conversation about why growth is flat.',
      },
      {
        q: 'Is an answering service enough?',
        a: 'It is better than voicemail and short of coverage. A message service cannot tell a parent whether you serve their county or take their plan, so the family keeps calling other practices while your message sits in an inbox until morning.',
      },
      {
        q: 'Should we just restrict our ads to business hours?',
        a: 'It is a legitimate choice if you genuinely cannot cover the hours — better to spend the budget where you can respond. Understand the trade: you are conceding the busiest window in the category, including most weekend demand, to competitors who can answer.',
      },
      {
        q: 'Are after-hours leads lower quality?',
        a: 'No. They are the same families contacting you at the only time they are free. They are less patient, because the window they carved out is narrow, which makes response speed matter more rather than less.',
      },
    ],
    carelu: {
      h2: 'How Carelu covers nine at night',
      body: [
        'This page draws the line between taking a message and coverage that does the work. Carelu is the second kind. At 9pm it does what a good coordinator would do at 2pm: answer the parent’s three questions, move the family forward, and route a family with no diagnosis toward evaluation.',
        'Your team still owns the morning: the scheduling call, the harder questions, and the families who asked for a person. The difference is that they start with qualified families who have already begun intake, not a stack of voicemails.',
      ],
      list: [
        { title: 'Answered live, any hour', desc: 'An AI voice agent answers every call, and website chat, text and web forms are answered within seconds, in English and Spanish. That covers the 48% of contacts that arrive after hours.' },
        { title: 'The three questions, answered', desc: 'Service area by ZIP or drive time and payer accepted are confirmed in the conversation, with insurance eligibility and ABA benefits checked automatically during intake.' },
        { title: 'Intake started on the spot', desc: 'A phone-friendly intake prefilled from the conversation, with e-signed consents and uploads by text, that the family can resume later.' },
        { title: 'Monday is a queue, not a stack', desc: 'Each family is routed to the right coordinator by state or ZIP and shows up in one live queue with its status.' },
        { title: 'Proof it is working', desc: 'Answer rate, speed to contact and conversion by channel show whether after-hours families are converting, not just being logged.' },
      ],
    },
    compareTitle: 'Nine at night, by hand and with Carelu',
    compareIntro:
      'The test of a coverage plan is not whether something happens when a family calls at nine at night. It is whether the family gets what they would have gotten at two in the afternoon.',
    compare: [
      { step: 'The call at 9pm', manual: 'Voicemail; most parents hang up', carelu: 'Answered live' },
      { step: '"Do you take my insurance?"', manual: 'Unanswerable until morning', carelu: 'Answered in the conversation, with eligibility checked' },
      { step: '"Do you serve my area?"', manual: 'Unanswerable until morning', carelu: 'Resolved by county and ZIP on the spot' },
      { step: 'Starting intake', manual: 'Waits for a callback that may not connect', carelu: 'Started while the parent is still on the line' },
      { step: 'Sunday web form', manual: 'Read Monday, answered Monday afternoon', carelu: 'Answered in seconds' },
      { step: 'Monday morning', manual: 'A stack of messages, hours of callbacks, many unreachable', carelu: 'A queue of qualified families with intake already underway' },
    ],
    related: [
      { slug: 'how-to-grow-an-aba-practice', label: 'The full growth playbook', blurb: 'Why coverage multiplies every channel you run.' },
      { slug: 'google-ads-for-aba', label: 'Google Ads for ABA', blurb: 'You are buying these hours whether or not you meant to.' },
      { slug: 'aba-intake-metrics', label: 'The numbers to watch', blurb: 'Measuring the hours you are losing.' },
      { slug: 'aba-intake-drop-off', label: 'Where families disappear', blurb: 'The unanswered first contact, and the three leaks after it.' },
    ],
    ctaHeadline: 'The families you are missing are calling right now.',
    ctaSub: 'Carelu answers every call, chat, text and form at any hour — confirms area and coverage, starts intake, and hands your team a qualified family in the morning instead of a voicemail.',
  },

  /* ============================================================
     WHO ANSWERS THE PHONE
     ============================================================ */
  'who-should-answer-aba-intake-calls': {
    slug: 'who-should-answer-aba-intake-calls',
    pill: 'Playbook · Intake & Trust',
    h1: 'Who should answer your ABA intake line: a coordinator, a BCBA, or the owner?',
    metaTitle: 'Who Should Answer the Phone at an ABA Practice? Intake Coordinator vs. BCBA vs. Owner | Carelu',
    metaDescription:
      'Speed is table stakes in ABA intake, but trust is what wins the family. Who should take the first call (an intake coordinator, a BCBA, the owner or an answering service), what each one is good at, and how the fastest-growing practices split the job so every family is answered instantly and talks to a clinician early.',
    answer:
      'Split the job. A stable intake layer (a system plus a coordinator) should answer every inquiry instantly at any hour, qualify the family and start paperwork, and a BCBA or the owner should then have a real conversation with every qualified family, ideally the same day. Speed gets you into the conversation; trust wins the family.',
    updated: '2026-09-23',
    intro: [
      'Most ABA practices decide who answers the phone by default. Whoever sits at the front desk takes the calls, the calls go to voicemail when that person is busy, and the BCBAs stay in sessions. That setup treats the first call as admin work. It isn’t: it is the first time a worried parent decides whether to trust you with their child.',
      'ABA intake has two jobs, and they need different people. The first is speed and stability: answer every family immediately, qualify them and get the paperwork moving. That part is table stakes. Every practice needs it, and it has to work at 9pm on a Saturday. The second is trust: a real conversation with someone who understands the child. That part is how you win, because families contact several providers at once and usually start with whoever made them feel understood first.',
      'Among the providers we work with, the ones that grow fastest share a pattern. A BCBA or the owner talks to the family early, often on the first day, while the intake layer underneath answers every inquiry instantly and handles everything else. This playbook explains why that works and how to set it up without burning out your clinicians.',
    ],
    sections: [
      {
        h2: 'What the first contact really looks like',
        body: [
          'Before deciding who answers, look at who is calling and when. These numbers come from our published research across 185,054 family conversations with 120 ABA providers in 48 states, aggregated and de-identified.',
        ],
        list: [
          { title: '48% arrive outside business hours', desc: 'Nearly half of families reach out in the evening, overnight or on weekends, when neither your front desk nor your BCBAs are at work. Whoever "answers the phone" has to include something that works at those hours.' },
          { title: '22% have no diagnosis yet', desc: 'More than one family in five is still at the "is something wrong with my child?" stage. They need guidance on the path to evaluation, and that is a clinical conversation, not a form.' },
          { title: 'The median child is 6, and 27% are 10 or older', desc: 'Many parents have already been through early intervention, school evaluations or another provider. They ask specific, experienced questions, and they can tell quickly whether the person on the line understands their child.' },
          { title: '40% of website leads are job seekers', desc: 'A large share of what arrives is RBT and BCBA applicants, not families. If a clinician is the first line, they spend a lot of their time on the wrong calls.' },
          { title: 'Only about a quarter of website chats become a lead', desc: 'At the median provider, roughly one website conversation in four ends with contact details captured. The rest leave without anyone knowing who they were.' },
        ],
      },
      {
        h2: 'Speed is table stakes. Trust is the game.',
        body: [
          'Families shop in parallel. A parent who gets a diagnosis on Tuesday afternoon typically contacts three or four providers that evening. Whoever answers first gets the first conversation, which is why speed matters so much: a practice that calls back the next morning often isn’t in the running anymore.',
          'But answering first only gets you into the conversation. It doesn’t win it. What the parent is really deciding is whether this practice will be good for their child, and whether they trust the people there. Waitlists, payer rules and paperwork are similar across practices. The feeling of "these people get my kid" is not.',
          'So the goal isn’t to choose between speed and trust. It’s to make speed automatic so the people who build trust can spend their time building it.',
        ],
      },
      {
        h2: 'The four options, honestly compared',
        list: [
          { title: 'Intake coordinator', desc: 'Strong: consistent process, knows the payer list, keeps paperwork moving, cheaper than a clinician. Weak: can’t answer clinical questions with authority ("will ABA help with his meltdowns?"), is one person with lunch breaks and sick days, and works business hours. Coordinators are essential, but on their own they make the first call feel like registration.' },
          { title: 'BCBA', desc: 'Strong: instant credibility. A BCBA can explain what the assessment involves, what the first month looks like and what progress might mean for this child. Weak: every hour on the phone is an hour not supervising or billing, calls interrupt sessions, and nobody wants a BCBA spending the morning on job applicants and out-of-area families.' },
          { title: 'The owner', desc: 'Strong: the most trust and urgency in the building. Owners care about every family, know every exception and can make decisions on the spot. Weak: doesn’t scale past a few dozen families a month, and the practice becomes dependent on one person’s phone. Great at the beginning, and a bottleneck later.' },
          { title: 'Answering service', desc: 'Strong: a human voice outside business hours. Weak: usually takes a message, knows nothing about your payers or service area, and builds no relationship. The parent still waits until morning for a real answer.' },
        ],
      },
      {
        h2: 'What the fastest-growing practices do: split the job',
        body: [
          'The practices that grow fastest don’t pick one of the four. They separate the stable layer from the relationship layer and staff each one differently.',
          'The stable layer answers every inquiry within seconds, on every channel and at every hour. It qualifies the family (service area, payer, age, diagnosis status), starts intake and checks benefits. It should behave the same way on a Saturday night as on a Tuesday morning. This is work for a system plus a coordinator, and it should never depend on whether a clinician is free.',
          'The relationship layer is a real conversation with a BCBA or the owner, as early as possible, for every family who qualifies. It is not a registration call. It is fifteen minutes about the child. Because the stable layer has already filtered out job seekers, out-of-area families and unaccepted plans, the clinician’s time goes only to families you can actually serve.',
        ],
      },
      {
        h2: 'How to run the trust call',
        list: [
          { title: 'Call the same day', desc: 'Set a rule: every qualified family hears from a BCBA or the owner the same business day, or by the next morning for after-hours inquiries. The first practice to have a real conversation usually wins.' },
          { title: 'Come prepared', desc: 'The clinician should read the intake summary first and never ask a question the family already answered. "I saw that Liam just turned four and his pediatrician mentioned speech" beats "So, how old is your child?"' },
          { title: 'Talk about the child, not the paperwork', desc: 'Ask what a hard day looks like at home. Explain what the assessment involves and what the first month of services looks like. Leave insurance and forms to the intake layer, which is already handling them.' },
          { title: 'Be honest about timing', desc: 'If there is a waitlist or a pending authorization, say so and explain what happens meanwhile. Families forgive a wait they understand, not one they discover.' },
          { title: 'End with one concrete next step', desc: 'An assessment date, a document still needed, or a call-back time. Never end with "we’ll be in touch."' },
          { title: 'Protect clinical time', desc: 'Give BCBAs two short call blocks a day instead of taking calls between sessions. With the stable layer running, those blocks are enough.' },
        ],
      },
      {
        h2: 'Pre-diagnosis families need the relationship most',
        body: [
          'The 22% of families who reach out before a diagnosis are the easiest to lose and among the most loyal once you help them. They are confused, often scared, and have been told to "get an evaluation" without anyone explaining how. A ten-minute conversation with a BCBA about what an evaluation involves, who does them locally, and what the family can do while they wait is often the moment that family decides to stay with you through the months ahead. Our guide to pre-diagnosis families covers the evaluation path in detail.',
        ],
      },
      {
        h2: 'What to measure',
        list: [
          { title: 'Time to first response', desc: 'From inquiry to first reply, on every channel, including nights and weekends. This is the stable layer’s number. It should be measured in seconds or minutes, not hours.' },
          { title: 'Time to first clinical conversation', desc: 'From inquiry to the BCBA or owner call. This is the relationship layer’s number. Aim for the same day.' },
          { title: 'Share of qualified families who talk to a clinician before the assessment', desc: 'If this is low, your clinicians are only meeting families at the assessment, and many families never get that far.' },
          { title: 'Inquiry to first session, by who made the first call', desc: 'Compare families whose first real conversation was with a clinician to those who only spoke with admin. That comparison shows whether the trust call is worth the time.' },
        ],
      },
    ],
    faq: [
      { q: 'Who should answer the phone at an ABA clinic?', a: 'Split the job. A stable intake layer (a system plus an intake coordinator) should answer every inquiry instantly at any hour, qualify the family and start paperwork. Then a BCBA or the owner should have a real conversation with every qualified family, ideally the same day. Speed gets you into the conversation; trust wins the family.' },
      { q: 'Should BCBAs answer intake calls?', a: 'BCBAs shouldn’t answer every call. Many are job seekers, out-of-area families or plans you don’t accept. They should call every qualified family early, in scheduled call blocks, with the intake summary in front of them. That makes the best use of their credibility without cutting into billable time.' },
      { q: 'Should the owner of an ABA practice answer the phone?', a: 'In the early stage, often yes. Owners build trust faster than anyone and can make decisions on the spot. As volume grows, the owner should move from answering every call to calling qualified families, then hand that role to BCBAs, while an intake layer handles speed and qualification.' },
      { q: 'How fast should an ABA practice respond to a new inquiry?', a: 'Within minutes, at any hour. Families contact several providers at once, and 48% of contacts in our research arrive outside business hours. The first real conversation with a clinician should follow the same day.' },
      { q: 'Is an answering service enough for ABA intake?', a: 'Usually not. Most answering services take a message without qualifying the family, checking coverage or starting intake, and build no relationship. The parent still waits until morning, often after contacting other providers.' },
    ],
    carelu: {
      h2: 'How Carelu runs the stable layer so your clinicians can build trust',
      body: [
        'Carelu is the stable layer from this playbook. It answers every family in seconds on every channel, qualifies them and starts intake, at any hour. Your BCBAs and owner only talk to families you can serve, and they start that call already knowing the child.',
        'The trust call stays human, and it should. Carelu makes sure it happens with the right families, early, and with nothing left for the clinician to ask twice.',
      ],
      list: [
        { title: 'Every family answered instantly', desc: 'An AI voice agent, website chat, text and web forms respond within seconds, 24/7, in English and Spanish, including the 48% of contacts that arrive after hours.' },
        { title: 'Only qualified families reach your clinicians', desc: 'Service area, payer, age and diagnosis status are checked in the first conversation. Job seekers are separated from families, and out-of-area families get a kind, clear answer.' },
        { title: 'Routed to the right person', desc: 'Each qualified family is routed to the BCBA, owner or coordinator you choose by location or state, and appears in one live queue with its status.' },
        { title: 'A summary before the call', desc: 'The clinician sees the full conversation and intake answers before dialing, so the trust call is about the child, not about re-asking questions.' },
        { title: 'Paperwork kept out of the conversation', desc: 'Intake, e-signed consents, document uploads and benefits verification run in the background, with follow-up until the packet is complete.' },
      ],
    },
    compareTitle: 'The first 24 hours, by hand and with Carelu',
    compare: [
      { step: '9pm inquiry', manual: 'Voicemail; callback next morning', carelu: 'Answered in seconds, qualified and intake started' },
      { step: 'Filtering', manual: 'Coordinator sorts families, job seekers and out-of-area calls by hand', carelu: 'Done in the first conversation' },
      { step: 'Clinician’s first call', manual: 'Often only at the assessment, if the family gets that far', carelu: 'Same day, with qualified families only' },
      { step: 'Call preparation', manual: 'Clinician re-asks the basics', carelu: 'Full conversation and intake summary attached' },
      { step: 'Paperwork', manual: 'Discussed on the call, finished later or never', carelu: 'Running in the background, with follow-up until complete' },
    ],
    related: [
      { slug: 'after-hours-intake-coverage', label: 'After-hours coverage', blurb: 'Why taking a message is not coverage.' },
      { slug: 'aba-evaluation-referrals', label: 'Families without a diagnosis', blurb: 'The 22% who reach out first, and how to keep them.' },
      { slug: 'aba-intake-metrics', label: 'The numbers to watch', blurb: 'Speed to contact and inquiry-to-start, measured weekly.' },
      { slug: 'how-to-grow-an-aba-practice', label: 'How to grow an ABA practice', blurb: 'The five channels, and the operations layer they all depend on.' },
      { slug: '/research/the-intake-gap', label: 'The Intake Gap (our research)', blurb: '185,054 family conversations across 120 ABA providers.' },
    ],
    ctaHeadline: 'Answer every family instantly. Let your clinicians win them.',
    ctaSub: 'Carelu answers, qualifies and starts intake for every ABA family at any hour, and hands your BCBAs and owner the families worth a same-day call.',
  },

};

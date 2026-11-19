import Anthropic from '@anthropic-ai/sdk';
import { DIRECTORY, SYSTEM, retrieve } from './ask.js';
import { check, record, costOf } from './_askGuard.js';
import { json, requireConfig, isResponse, getRepoFileText, commitFiles } from './sources/_shared.js';
import { calendlyReady, openSlots, book, whenEt, pickOffers } from './_calendly.js';
import type { PayerUpdateSubscriber } from './payer-updates.js';

/* ================================================================
   POST /api/payer-reply — answers a reply to a payer updates email.

   The payers@carelu.com mailbox runs a small Google Apps Script
   (docs/payer-reply-apps-script.gs) that hands each new reply here:
     { from, subject, body }   body = the new text, quoted part removed
   and gets back what to do with it:
     { status: 'answered', html, text }  -> script replies in the thread
     { status: 'not_covered', reason, html, text }
                                         -> script replies "we don't know yet, we're adding it to the
                                            next guide" and copies the team; the question is logged like
                                            an unanswered Ask question, so the Sunday payer routine
                                            researches it and adds it to the guides
     { status: 'answered', reason: 'demo request', html, text }
                                         -> they asked for a demo: a fixed reply with the
                                            book-a-demo link (never model-written), team copied
     { status: 'needs_human', reason }   -> script forwards it to the team
     { status: 'no_question', reason }   -> script only files it

   Answers come only from the payer directory (same retrieval and
   rules as the Ask box on /payers), with primary-source links. If the
   guides do not cover the question, the agent does not guess.
   Anyone replying to a payer updates email gets an answer (list
   subscribers and people we invited, like the AIS East invite), with
   the same per-sender daily limits as the Ask box. The agent never
   describes Carelu itself: a demo ask gets the booking link, any other
   question about Carelu goes to a person.

   Demos: when CALENDLY_TOKEN is set, a demo ask gets 3 real open times
   from the /demo page's Calendly event (not a link). When they reply
   with a time that is open, it is booked through Calendly, which sends
   the calendar invite. A time that is not open gets fresh options.
   The model only picks which listed time they meant; the times, the
   booking and every word about it are ours. Without the token, a demo
   ask gets the booking link.

   Slack: every reply posts to #marketing (who wrote, what they said,
   what we did); a demo request posts to #sales instead. Same two-variable
   workflow payload as api/leads.ts: { email, source }.
   ================================================================ */

export const config = { maxDuration: 60 };

const SITE = 'https://carelu.com';
const SUBS_FILE = 'payer-updates.json';
const EMAIL_RE = /[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const SALES_SLACK = process.env.SLACK_SALES_WEBHOOK_URL ?? '';
const MARKETING_SLACK = process.env.SLACK_MARKETING_WEBHOOK_URL ?? '';
const WHAT_WE_DID: Record<string, string> = {
  answered: 'answered from the payer guides',
  not_covered: 'partly answered; the rest is being added to the guides',
  needs_human: 'needs a person, forwarded to the team',
  no_question: 'nothing to answer, filed',
  demo: 'sent the book-a-demo link',
  demo_offer: 'offered open demo times',
  booked: 'BOOKED the demo; Calendly sent the invite',
};

/** One Slack ping per reply. Demo asks go to sales (falling back to
    marketing so a missing var never loses the lead); the rest to marketing.
    The workflows render only `email` and `source`, so the story goes in source. */
async function notify(opts: { sender: string; from: string; subject: string; text: string; status: string; reason?: string; answer?: string; demo?: boolean }): Promise<void> {
  const webhook = (opts.demo && SALES_SLACK) || MARKETING_SLACK;
  if (!webhook) return;
  const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);
  const source = [
    `${opts.status === 'booked' ? 'DEMO BOOKED' : opts.demo ? 'DEMO REQUEST' : 'Payer updates reply'} from ${opts.sender || opts.from}`,
    `Subject: ${opts.subject}`,
    `They wrote: ${clip(opts.text.replace(/\s+/g, ' '), 600)}`,
    `What we did: ${WHAT_WE_DID[opts.status] ?? opts.status}${opts.reason ? ` (${opts.reason})` : ''}`,
    opts.answer ? `Our reply: ${clip(opts.answer.replace(/\s+/g, ' '), 500)}` : '',
  ].filter(Boolean).join(' | ');
  try {
    await fetch(webhook, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: opts.from, source }) });
  } catch (err) {
    console.error('payer-reply: slack notify failed (non-fatal)', err);
  }
}

const EMAIL_RULES = `
You are now answering an EMAIL. Someone replied to a Carelu payer updates email (the every-two-weeks email of payer changes, or our invite to join it). Their reply is below.

First decide which case this is, and put it on the very first line, exactly one of:
STATUS: ANSWERED
STATUS: NOT_COVERED <payer + state + fact we are missing>
STATUS: DEMO
STATUS: BOOK <time>
STATUS: NEEDS_HUMAN <short reason>
STATUS: NO_QUESTION <short reason>

- NO_QUESTION: thanks, out-of-office, an auto-reply, "unsubscribe", or anything with nothing to answer.
- DEMO: they ask for a demo, a call, a meeting, to see Carelu, or to talk to someone about using Carelu, and ask no payer question, and they did not pick a time that is in OPEN DEMO TIMES. Write nothing after the STATUS line; the reply (open times or a booking link) is added for you.
- BOOK <time>: they clearly pick or propose ONE time for the demo that is listed in OPEN DEMO TIMES (for example "Tuesday at 11 works", "the first one", "let's do Wed 2pm"). Put that time's UTC value exactly as listed, e.g. STATUS: BOOK 2026-11-24T16:00:00.000Z. Never pick a time they did not choose. If what they asked for is not listed, or it is ambiguous, use DEMO instead. Write nothing after the STATUS line; the booking and the confirmation are done for you. Never say yourself that anything is booked.
- NEEDS_HUMAN: they ask for something a person must handle (pricing, a partnership, a complaint, changing their subscription, help with one specific member or claim, anything sensitive), or ANY question about Carelu itself (what it does, features, integrations, customers, security, contracts, how it works). You know nothing verified about Carelu the company, so never describe it, never promise anything on its behalf, and never answer questions about it.
- NOT_COVERED: a payer question (including "please add payer X") where the directory and excerpts do not hold a verified answer to all of it. Never guess to avoid this.
- ANSWERED: every question in the email is answered from the directory and excerpts, with sources.
- If they ask a payer question AND ask for a demo, answer the payer question (ANSWERED or NOT_COVERED) and put the line DEMO: YES right under the STATUS line; the booking link is added for you. Do not write about the demo yourself.

For NOT_COVERED, after the STATUS line write the email body the same way, but: first answer whatever part the directory does cover (with sources). Then say plainly that we don't have a verified answer to the rest yet, name exactly what that is, and that we're adding it to our next guide update and looking it up now. Never state an unverified fact, even as a hint.

For ANSWERED and NOT_COVERED, after the STATUS line write the email body only (no subject, no greeting line with a name you are not sure of, no sign-off; those are added for you):
- Start with "Hi," on its own line, then answer each question directly in the first sentence, then only the detail their team needs.
- Same citation rules as always: a markdown link to the primary source for each fact, then a "Read more:" line with guide links. Use full links: guide paths start with ${SITE}/payers/.
- Plain, warm, short. No headings, no tables, no em dashes. Short paragraphs; a short "- " list only when comparing several payers or states.
- End with the one-line reminder to verify against the payer's live policy for the specific member.`;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function absolute(url: string): string {
  return url.startsWith('/') ? `${SITE}${url}` : url;
}

/** The small markdown the model writes (links, bold, "- " lists, paragraphs) as email HTML. */
function toHtml(md: string): string {
  const inline = (s: string) => escapeHtml(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, u) => `<a href="${absolute(u).replace(/&amp;/g, '&')}" style="color:#3F6E35;">${t}</a>`)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  const blocks = md.trim().split(/\n\s*\n/);
  return blocks.map((b) => {
    const lines = b.split('\n');
    if (lines.every((l) => /^\s*[-*] /.test(l))) {
      return `<ul style="margin:0 0 14px 0;padding-left:20px;">${lines.map((l) => `<li style="margin:0 0 6px 0;">${inline(l.replace(/^\s*[-*] /, ''))}</li>`).join('')}</ul>`;
    }
    return `<p style="margin:0 0 14px 0;">${lines.map(inline).join('<br>')}</p>`;
  }).join('\n');
}

/** Markdown links as "text (url)" for the plain-text part. */
function toText(md: string): string {
  return md.trim().replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t, u) => `${t} (${absolute(u)})`).replace(/\*\*([^*]+)\*\*/g, '$1');
}

const SIGN_HTML = `<p style="margin:18px 0 0 0;">Carelu Payer Updates<br><span style="color:#6B675E;font-size:13px;">Answered by the Carelu payer assistant from our payer guides, each fact linked to its source. A person on our team reads every reply; just write back if anything is unclear.</span></p>`;
const DEMO_URL = `${SITE}/demo?utm_source=payer-updates&utm_medium=email-reply&utm_campaign=demo`;
const DEMO_HTML = `<p style="margin:0 0 14px 0;">You can book a time with our team here: <a href="${DEMO_URL}" style="color:#3F6E35;font-weight:600;">Book a demo with Carelu</a>.</p>`;
const DEMO_TEXT = `You can book a time with our team here: ${DEMO_URL}`;
const DEMO_SIGN_HTML = `<p style="margin:18px 0 0 0;">Carelu<br><span style="color:#6B675E;font-size:13px;">A person on our team reads every reply; just write back if anything is unclear.</span></p>`;
const DEMO_SIGN_TEXT = `\n\nCarelu\nA person on our team reads every reply; just write back if anything is unclear.`;
const DEMO_OFFERS_FILE = 'payer-demo-offers.json';
const P = (t: string) => `<p style="margin:0 0 14px 0;">${t}</p>`;
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function offerBlock(times: string[], lead: string): { html: string; text: string } {
  const list = times.map(whenEt);
  return {
    html: P(esc(lead)) + `<ul style="margin:0 0 14px 0;padding-left:20px;">${list.map((t) => `<li style="margin:0 0 6px 0;"><strong>${t}</strong></li>`).join('')}</ul>`
      + P(`Just reply with the one that works for you and we&rsquo;ll send over a calendar invite. If none of these work, you can pick any open time <a href="${DEMO_URL}" style="color:#3F6E35;font-weight:600;">here</a>.`),
    text: `${lead}\n\n${list.map((t) => `- ${t}`).join('\n')}\n\nJust reply with the one that works for you and we'll send over a calendar invite. If none of these work, you can pick any open time here: ${DEMO_URL}`,
  };
}

const wrap = (inner: string) => `<div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#1A2E1F;">${inner}</div>`;

const SIGN_TEXT = `\n\nCarelu Payer Updates\nAnswered by the Carelu payer assistant from our payer guides, each fact linked to its source. A person on our team reads every reply; just write back if anything is unclear.`;

export async function POST(request: Request): Promise<Response> {
  if (!process.env.ANTHROPIC_API_KEY) return json({ error: 'not configured' }, 503);

  let body: { from?: unknown; subject?: unknown; body?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ error: 'bad request' }, 400);
  }
  const sender = typeof body.from === 'string' ? body.from.slice(0, 200) : '';
  const from = (sender.match(EMAIL_RE)?.[0] ?? '').toLowerCase();
  const subject = typeof body.subject === 'string' ? body.subject.slice(0, 300) : '';
  const text = typeof body.body === 'string' ? body.body.trim().slice(0, 4000) : '';
  if (!from) return json({ error: 'no sender' }, 400);
  if (!text) return json({ status: 'no_question', reason: 'empty reply' });
  const ping = (status: string, extra: { reason?: string; answer?: string; demo?: boolean } = {}) =>
    notify({ sender, from, subject, text, status, ...extra });

  // Only people on the list get an automatic answer; anyone else goes to a person.
  const cfg = requireConfig();
  if (isResponse(cfg)) return cfg;
  let subs: PayerUpdateSubscriber[] = [];
  try {
    subs = JSON.parse(await getRepoFileText(cfg.token, SUBS_FILE)) as PayerUpdateSubscriber[];
  } catch (err) {
    if ((err as { status?: number }).status !== 404) throw err;
  }
  // Subscribers and people we invited (e.g. the AIS East invite) both get answers.
  const sub = subs.find((s) => s.email.toLowerCase() === from);

  // Same daily limits and spend cap as the Ask box, counted per subscriber.
  const ip = `email:${from}`;
  const verdict = await check(ip, from);
  if (!verdict.ok) {
    await ping('needs_human', { reason: `ask limit: ${verdict.reason}` });
    return json({ status: 'needs_human', reason: `ask limit: ${verdict.reason}` });
  }

  // Demo booking context: real open times, and what we already offered them.
  const displayName = sender.replace(/<[^>]*>/, '').replace(/["']/g, '').trim();
  const first = displayName && !displayName.includes('@') ? displayName.split(/\s+/)[0] : '';
  const inviteeName = displayName && !displayName.includes('@') ? displayName : from.split('@')[0];
  const hi = first ? `Hi ${first},` : 'Hi,';
  const slots = calendlyReady() ? await openSlots() : null;
  let offers: Record<string, { offered: string[]; at: string }> = {};
  if (slots) {
    try {
      offers = JSON.parse(await getRepoFileText(cfg.token, DEMO_OFFERS_FILE));
    } catch (err) {
      if ((err as { status?: number }).status !== 404) console.error('payer-reply: offers read failed', err);
    }
  }
  const offeredBefore = offers[from]?.offered ?? [];
  const saveOffers = async (times: string[]) => {
    offers[from] = { offered: times, at: new Date().toISOString() };
    await commitFiles(cfg.token, [{ path: DEMO_OFFERS_FILE, content: JSON.stringify(offers, null, 1) + '\n' }], `payer-reply: demo times offered to ${from.split('@')[1] ?? 'someone'}`)
      .catch((err) => console.error('payer-reply: offers save failed', err));
  };
  const scheduling = slots
    ? `\n\n<demo_scheduling>\nAll times Eastern. OPEN DEMO TIMES (UTC value = what it is):\n${slots.slice(0, 80).map((t) => `${t} = ${whenEt(t)}`).join('\n')}\n${offeredBefore.length ? `Times we offered this person earlier, in this order:\n${offeredBefore.map((t, i) => `${i + 1}. ${t} = ${whenEt(t)}`).join('\n')}` : 'We have not offered this person times yet.'}\n</demo_scheduling>`
    : '';

  const question = `Subject: ${subject}\nTheir states on the list: ${sub ? sub.states.join(', ') : 'not on the list yet'}\n\n${text}`;
  const chunks = retrieve(`${subject} ${text}`.slice(0, 2000), undefined, 10);
  const excerpts = chunks.length === 0
    ? 'No relevant excerpts found for this question.'
    : chunks.map((c, i) =>
        `[Excerpt ${i + 1}] ${c.payer}${c.state ? ` (${c.state})` : ''} — ${c.title}\nGuide page: /payers/${c.slug}\nSources: ${c.sources.map((s) => `${s.title} <${s.url}>`).join(' | ')}\n${c.text}`
      ).join('\n\n');

  const client = new Anthropic();
  const msg = await client.messages.create({
    model: 'claude-opus-5-5',
    max_tokens: 8000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'medium' },
    system: [
      { type: 'text', text: SYSTEM },
      { type: 'text', text: `<directory>\n${DIRECTORY}\n</directory>`, cache_control: { type: 'ephemeral' } },
      { type: 'text', text: EMAIL_RULES },
    ],
    messages: [{ role: 'user', content: `<excerpts>\n${excerpts}\n</excerpts>${scheduling}\n\n<email>\n${question}\n</email>` }],
  });

  const out = msg.content.filter((b): b is Anthropic.TextBlock => b.type === 'text').map((b) => b.text).join('').trim();
  const cost = costOf(msg.usage);
  console.log('payer-reply usage', JSON.stringify({ from, cost: Math.round(cost * 10000) / 10000, stop: msg.stop_reason }));

  const m = out.match(/^STATUS:\s*(ANSWERED|NOT_COVERED|DEMO|BOOK|NEEDS_HUMAN|NO_QUESTION)\b[ \t]*(.*)$/m);
  if (msg.stop_reason === 'refusal' || !m) {
    await ping('needs_human', { reason: 'assistant could not answer' });
    return json({ status: 'needs_human', reason: 'assistant could not answer' });
  }
  // Everything below about demos is fixed text, never model-written,
  // so nothing about Carelu or the booking is made up.
  const offerReply = async (lead: string, reason: string) => {
    const times = slots ? pickOffers(slots.filter((t) => !offeredBefore.includes(t)).length >= 3 ? slots.filter((t) => !offeredBefore.includes(t)) : slots) : [];
    if (times.length === 0) {
      await ping('demo', { demo: true, reason });
      return json({
        status: 'answered', reason: 'demo request',
        html: wrap(`${P(esc(hi))}${P('Thanks for reaching out!')}${DEMO_HTML}${DEMO_SIGN_HTML}`),
        text: `${hi}\n\nThanks for reaching out!\n\n${DEMO_TEXT}${DEMO_SIGN_TEXT}`,
      });
    }
    await saveOffers(times);
    const b = offerBlock(times, lead);
    await ping('demo_offer', { demo: true, reason, answer: b.text });
    return json({ status: 'answered', reason: 'demo request', html: wrap(`${P(esc(hi))}${b.html}${DEMO_SIGN_HTML}`), text: `${hi}\n\n${b.text}${DEMO_SIGN_TEXT}` });
  };
  if (m[1] === 'DEMO') return offerReply("We'd be happy to show you. Here are a few times that are open (Eastern time):", 'asked for a demo');
  if (m[1] === 'BOOK') {
    const pick = (m[2].match(/\d{4}-\d{2}-\d{2}T[\d:.]+Z/) ?? [''])[0];
    const iso = pick ? new Date(pick).toISOString() : '';
    if (!slots || !iso || !slots.includes(iso)) {
      return offerReply("Sorry, that time isn't open. Here are a few that are (Eastern time):", `asked for ${pick || 'a time'} that is not open`);
    }
    const booked = await book(iso, inviteeName, from);
    if (!booked) {
      return offerReply("Sorry, that time just got taken. Here are a few others that are open (Eastern time):", `booking ${iso} failed`);
    }
    delete offers[from];
    await commitFiles(cfg.token, [{ path: DEMO_OFFERS_FILE, content: JSON.stringify(offers, null, 1) + '\n' }], 'payer-reply: demo booked')
      .catch((err) => console.error('payer-reply: offers save failed', err));
    const when = whenEt(iso);
    await ping('booked', { demo: true, reason: `${when} Eastern, invite to ${from}` });
    return json({
      status: 'answered', reason: 'demo request',
      html: wrap(`${P(esc(hi))}${P(`You&rsquo;re all set for <strong>${when}</strong> Eastern. A calendar invite is on its way to ${esc(from)}.`)}${P('Talk soon!')}${DEMO_SIGN_HTML}`),
      text: `${hi}\n\nYou're all set for ${when} Eastern. A calendar invite is on its way to ${from}.\n\nTalk soon!${DEMO_SIGN_TEXT}`,
    });
  }
  const status = m[1].toLowerCase() as 'answered' | 'not_covered' | 'needs_human' | 'no_question';
  if (status === 'needs_human' || status === 'no_question') {
    await ping(status, { reason: m[2].trim() });
    return json({ status, reason: m[2].trim() || status });
  }

  let answer = out.slice(out.indexOf(m[0]) + m[0].length).trim();
  const wantsDemo = /^DEMO:\s*YES\b.*$/im.test(answer);
  answer = answer.replace(/^DEMO:\s*YES\b.*$\n?/im, '').trim();
  if (answer.length < 40) {
    await ping('needs_human', { reason: 'answer came back empty' });
    return json({ status: 'needs_human', reason: 'answer came back empty' });
  }
  let demoHtml = DEMO_HTML, demoText = DEMO_TEXT;
  if (wantsDemo && slots) {
    const times = pickOffers(slots);
    if (times.length) {
      await saveOffers(times);
      const b = offerBlock(times, "And we'd be happy to show you Carelu. Here are a few times that are open (Eastern time):");
      demoHtml = b.html; demoText = b.text;
    }
  }
  await ping(status, { reason: [m[2].trim(), wantsDemo ? 'they also asked for a demo' : ''].filter(Boolean).join('; '), answer: toText(answer) + (wantsDemo ? `\n\n${demoText}` : ''), demo: wantsDemo });

  // Logged like an Ask box question: the classifier marks a not-covered one
  // with what is missing, and the Sunday payer routine researches those gaps.
  await record({ ip, email: from, emailSource: 'given', page: 'email-reply', question: text, answer }, cost)
    .catch((err) => console.error('payer-reply: record failed', err));

  return json({
    status,
    reason: [m[2].trim(), wantsDemo ? 'plus demo request' : ''].filter(Boolean).join(', '),
    html: wrap(`${toHtml(answer)}${wantsDemo ? demoHtml : ''}${SIGN_HTML}`),
    text: toText(answer) + (wantsDemo ? `\n\n${demoText}` : '') + SIGN_TEXT,
  });
}

import Anthropic from '@anthropic-ai/sdk';
import { DIRECTORY, SYSTEM, retrieve } from './ask.js';
import { check, record, costOf } from './_askGuard.js';
import { json, requireConfig, isResponse, getRepoFileText } from './sources/_shared.js';
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
   ================================================================ */

export const config = { maxDuration: 60 };

const SITE = 'https://carelu.com';
const SUBS_FILE = 'payer-updates.json';
const EMAIL_RE = /[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;

const EMAIL_RULES = `
You are now answering an EMAIL. Someone replied to a Carelu payer updates email (the every-two-weeks email of payer changes, or our invite to join it). Their reply is below.

First decide which case this is, and put it on the very first line, exactly one of:
STATUS: ANSWERED
STATUS: NOT_COVERED <payer + state + fact we are missing>
STATUS: DEMO
STATUS: NEEDS_HUMAN <short reason>
STATUS: NO_QUESTION <short reason>

- NO_QUESTION: thanks, out-of-office, an auto-reply, "unsubscribe", or anything with nothing to answer.
- DEMO: they ask for a demo, a call, a meeting, to see Carelu, or to talk to someone about using Carelu, and ask no payer question. Write nothing after the STATUS line; the reply with the booking link is added for you.
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
  const from = (typeof body.from === 'string' ? body.from.match(EMAIL_RE)?.[0] ?? '' : '').toLowerCase();
  const subject = typeof body.subject === 'string' ? body.subject.slice(0, 300) : '';
  const text = typeof body.body === 'string' ? body.body.trim().slice(0, 4000) : '';
  if (!from) return json({ error: 'no sender' }, 400);
  if (!text) return json({ status: 'no_question', reason: 'empty reply' });

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
  if (!verdict.ok) return json({ status: 'needs_human', reason: `ask limit: ${verdict.reason}` });

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
    messages: [{ role: 'user', content: `<excerpts>\n${excerpts}\n</excerpts>\n\n<email>\n${question}\n</email>` }],
  });

  const out = msg.content.filter((b): b is Anthropic.TextBlock => b.type === 'text').map((b) => b.text).join('').trim();
  const cost = costOf(msg.usage);
  console.log('payer-reply usage', JSON.stringify({ from, cost: Math.round(cost * 10000) / 10000, stop: msg.stop_reason }));

  const m = out.match(/^STATUS:\s*(ANSWERED|NOT_COVERED|DEMO|NEEDS_HUMAN|NO_QUESTION)\b[ \t]*(.*)$/m);
  if (msg.stop_reason === 'refusal' || !m) return json({ status: 'needs_human', reason: 'assistant could not answer' });
  if (m[1] === 'DEMO') {
    // Fixed text, never model-written, so nothing about Carelu is made up.
    return json({
      status: 'answered', reason: 'demo request',
      html: wrap(`<p style="margin:0 0 14px 0;">Hi,</p><p style="margin:0 0 14px 0;">Thanks for reaching out!</p>${DEMO_HTML}${DEMO_SIGN_HTML}`),
      text: `Hi,\n\nThanks for reaching out!\n\n${DEMO_TEXT}${DEMO_SIGN_TEXT}`,
    });
  }
  const status = m[1].toLowerCase() as 'answered' | 'not_covered' | 'needs_human' | 'no_question';
  if (status === 'needs_human' || status === 'no_question') return json({ status, reason: m[2].trim() || status });

  let answer = out.slice(out.indexOf(m[0]) + m[0].length).trim();
  const wantsDemo = /^DEMO:\s*YES\b.*$/im.test(answer);
  answer = answer.replace(/^DEMO:\s*YES\b.*$\n?/im, '').trim();
  if (answer.length < 40) return json({ status: 'needs_human', reason: 'answer came back empty' });

  // Logged like an Ask box question: the classifier marks a not-covered one
  // with what is missing, and the Sunday payer routine researches those gaps.
  await record({ ip, email: from, emailSource: 'given', page: 'email-reply', question: text, answer }, cost)
    .catch((err) => console.error('payer-reply: record failed', err));

  return json({
    status,
    reason: [m[2].trim(), wantsDemo ? 'plus demo request' : ''].filter(Boolean).join(', '),
    html: wrap(`${toHtml(answer)}${wantsDemo ? DEMO_HTML : ''}${SIGN_HTML}`),
    text: toText(answer) + (wantsDemo ? `\n\n${DEMO_TEXT}` : '') + SIGN_TEXT,
  });
}

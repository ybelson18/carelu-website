import { STATE_META } from '../src/data/payers/types.js';

/* ================================================================
   The confirmation email a person gets right after joining the
   payer updates list (sent by /api/payer-updates). Same look as the
   every-two-weeks email (api/payer-digest.ts). Underscore-prefixed so
   Vercel does not turn this into a route.
   ================================================================ */

const SITE = 'https://carelu.com';
const STATE_NAME: Record<string, string> = Object.fromEntries([...STATE_META.map((s) => [s.code, s.name]), ['US', 'National plans']]);
const TOPIC_LABEL: Record<string, string> = { intake: 'Intake', clinical: 'Clinical care', billing: 'Billing & ops' };

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** One recent change, as written by /api/payer-recent. */
export interface RecentItem { st: string; slug: string; category: string; headline: string; detail: string; suggestion: string }

export function renderWelcome(
  states: string[], topics: string[], unsubscribeUrl: string, postal: string, recent: RecentItem[] = []
): { subject: string; html: string; text: string } {
  const names = states.map((s) => STATE_NAME[s] ?? s);
  const stateList = names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}` : names[0];
  const topicNames = topics.map((t) => TOPIC_LABEL[t] ?? t);
  const subject = `You're on the Carelu payer updates list`;

  const SERIF = `'Instrument Serif','Times New Roman',Georgia,serif`;
  const SANS = `'DM Sans',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif`;
  const DEEP = '#1A2E1F';
  const BODY = '#3A3833';
  const MUTED = '#6B675E';
  const LINK = '#3F6E35';
  const CREAM = '#FAF8F3';
  const SAGE = '#F0F5EE';
  const LIME = '#D4F25C';
  const LINE = '#E7E4DC';
  const utm = 'utm_source=payer-updates&utm_medium=email&utm_campaign=welcome';
  const LOGO = 'https://carelu.com/carelu-logo.png';
  const table = (inner: string, style = 'border-collapse:collapse;') => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${style}">${inner}</table>`;
  const pill = (t: string) => `<span style="display:inline-block;margin:0 6px 8px 0;padding:5px 12px;border-radius:100px;background-color:${SAGE};font-family:${SANS};font-size:13px;font-weight:600;color:${LINK};">${esc(t)}</span>`;
  const recentRow = (i: RecentItem, k: number) => `<tr><td style="padding:22px 0;${k ? `border-top:1px solid ${LINE};` : ''}">
          ${pill(STATE_NAME[i.st] ?? i.st)}
          <div style="padding-top:4px;font-family:${SANS};font-size:17px;font-weight:600;line-height:1.4;color:${DEEP};">${esc(i.headline)}</div>
          <div style="padding-top:6px;font-family:${SANS};font-size:15px;line-height:1.65;color:${BODY};">${esc(i.detail)}</div>
          ${i.suggestion ? `<div style="margin-top:14px;padding:2px 0 2px 16px;border-left:3px solid ${LIME};">
            <div style="font-family:${SANS};font-size:13px;font-weight:600;color:${DEEP};">What this may mean for you</div>
            <div style="padding-top:4px;font-family:${SANS};font-size:15px;line-height:1.65;color:${BODY};">${esc(i.suggestion)}</div>
          </div>` : ''}
          <div style="padding-top:14px;"><a href="${SITE}/payers/${encodeURIComponent(i.slug)}?${utm}" style="font-family:${SANS};font-size:14px;font-weight:600;color:${LINK};text-decoration:none;">Read the full guide &rarr;</a></div>
        </td></tr>`;
  const recentBlock = recent.length ? `
      ${table(`<tr><td style="padding:40px 4px 12px 4px;">
          <div style="font-family:${SERIF};font-size:30px;line-height:1.15;letter-spacing:-0.01em;color:${DEEP};">What changed recently in ${names.length > 2 ? 'your states' : esc(stateList)}</div>
          <div style="padding-top:6px;font-family:${SANS};font-size:14px;line-height:1.55;color:${MUTED};">No need to wait for the first email. Here's what changed in the last 30 days.</div>
        </td></tr>`)}
      ${table(`<tr><td style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:2px 28px;">
          ${table(recent.map(recentRow).join(''))}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;')}` : '';

  const step = (n: number, title: string, body: string) => `<tr><td style="padding:16px 0;${n > 1 ? `border-top:1px solid ${LINE};` : ''}">
          ${table(`<tr>
            <td width="38" valign="top"><div style="width:26px;height:26px;border-radius:50%;background-color:${LIME};text-align:center;font-family:${SANS};font-size:13px;font-weight:700;line-height:26px;color:${DEEP};">${n}</div></td>
            <td valign="top">
              <div style="font-family:${SANS};font-size:16px;font-weight:600;line-height:1.4;color:${DEEP};">${title}</div>
              <div style="padding-top:4px;font-family:${SANS};font-size:15px;line-height:1.6;color:${BODY};">${body}</div>
            </td></tr>`)}
        </td></tr>`;

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>${esc(subject)}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
@media (max-width: 620px) { .hero-pad { padding: 44px 22px 40px 22px !important; } .hero-h { font-size: 38px !important; } }
</style></head>
<body style="margin:0;padding:0;background-color:${CREAM};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">You'll get what changed for payers in ${esc(stateList)}, every two weeks.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${CREAM};">
<tr><td align="center" style="padding:28px 12px 40px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;background-color:${CREAM};color:${BODY};font-family:${SANS};">
  <tr><td style="padding:0;">

      ${table(`<tr><td style="padding:0 4px 20px 4px;"><a href="${SITE}?${utm}"><img src="${LOGO}" width="74" height="32" alt="Carelu" style="display:block;border:0;width:74px;height:auto;"></a></td></tr>`)}

      <!-- HERO -->
      ${table(`<tr><td bgcolor="#8FB2BF" background="https://carelu.com/hero-sky-1920.jpg" style="background-color:#8FB2BF;background-image:url('https://carelu.com/hero-sky-1920.jpg');background-size:cover;background-position:center 30%;background-repeat:no-repeat;border-radius:22px;">
          ${table(`<tr><td align="center" class="hero-pad" style="padding:56px 40px 50px 40px;background:linear-gradient(180deg,rgba(0,0,0,0.30) 0%,rgba(0,0,0,0.12) 60%,rgba(0,0,0,0.04) 100%);border-radius:22px;">
              <div class="hero-h" style="font-family:${SERIF};font-weight:400;font-size:46px;line-height:1.05;letter-spacing:-0.01em;color:#FFFFFF;text-shadow:0 2px 28px rgba(0,0,0,0.32);">You're on the list</div>
              <div style="padding-top:14px;max-width:440px;margin:0 auto;font-family:${SANS};font-size:16px;line-height:1.6;color:rgba(255,255,255,0.95);text-shadow:0 1px 2px rgba(0,0,0,0.3),0 2px 14px rgba(0,0,0,0.35);">Thanks for joining the Carelu payer updates list. Here's what you signed up for.</div>
            </td></tr>`)}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;')}

      <!-- WHAT YOU PICKED -->
      ${table(`<tr><td style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:24px 28px 18px 28px;">
          <div style="font-family:${SANS};font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${MUTED};">Your states</div>
          <div style="padding-top:10px;">${names.map(pill).join('')}</div>
          <div style="padding-top:10px;font-family:${SANS};font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:${MUTED};">Your topics</div>
          <div style="padding-top:10px;">${topicNames.map(pill).join('')}</div>
          <div style="padding-top:4px;font-family:${SANS};font-size:14px;line-height:1.6;color:${MUTED};"><a href="${SITE}/payers?${utm}#payer-updates" style="color:${LINK};font-weight:600;text-decoration:none;">Change your states or topics &rarr;</a></div>
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:16px;')}

      ${recentBlock}

      <!-- WHAT HAPPENS NEXT -->
      ${table(`<tr><td style="padding:40px 4px 12px 4px;">
          <div style="font-family:${SERIF};font-size:30px;line-height:1.15;letter-spacing:-0.01em;color:${DEEP};">What happens next</div>
        </td></tr>`)}
      ${table(`<tr><td style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:6px 28px;">
          ${table(
            step(1, 'One email every two weeks', `What changed for payers in ${esc(stateList)}: prior auth, codes, rates, documents and policy updates, each linked to the payer's own source. If nothing changed, we skip it.`) +
            step(2, 'What it may mean for your team', 'Every change comes with a short note on what it may mean for your intake, clinical or billing team.') +
            step(3, 'Questions? Just reply', "Reply to any of our emails with a payer question, and we're happy to answer it. Every answer comes from our payer guides with a link to the source."),
          )}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;')}

      <!-- DIRECTORY -->
      ${table(`<tr><td align="center" style="background-color:${DEEP};border-radius:22px;padding:44px 36px 42px 36px;">
          <div style="font-family:${SERIF};font-weight:400;font-size:32px;line-height:1.12;color:${CREAM};">Don't want to wait?</div>
          <div style="padding-top:12px;max-width:420px;margin:0 auto;font-family:${SANS};font-size:15px;line-height:1.65;color:rgba(250,248,243,0.82);">The Carelu payer directory has a guide for every major payer in ${names.length > 3 ? 'your states' : esc(stateList)}, and you can ask it any payer question.</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate;margin:24px auto 0 auto;">
            <tr><td style="background-color:${LIME};border-radius:100px;"><a href="${SITE}/payers?${utm}" style="display:inline-block;padding:13px 26px;font-family:${SANS};font-size:14px;font-weight:600;color:${DEEP};text-decoration:none;white-space:nowrap;">Open the directory &rarr;</a></td></tr>
          </table>
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:36px;')}

      <!-- BOOK A DEMO -->
      ${table(`<tr><td align="center" style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:30px 28px;">
          <div style="font-family:${SERIF};font-weight:400;font-size:24px;line-height:1.2;color:${DEEP};">See Carelu run your intake</div>
          <div style="padding-top:8px;max-width:400px;margin:0 auto;font-family:${SANS};font-size:14px;line-height:1.6;color:${MUTED};">A short walkthrough with our team, built around your states and payers.</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate;margin:20px auto 0 auto;">
            <tr><td style="background-color:${DEEP};border-radius:100px;"><a href="${SITE}/demo?${utm}&utm_content=book-demo" style="display:inline-block;padding:13px 26px;font-family:${SANS};font-size:14px;font-weight:600;color:${CREAM};text-decoration:none;white-space:nowrap;">Book a demo with Carelu &rarr;</a></td></tr>
          </table>
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:16px;')}

      <!-- FOOTER -->
      ${table(`<tr><td align="center" style="padding:32px 24px 0 24px;">
          <a href="${SITE}?${utm}"><img src="${LOGO}" width="60" height="26" alt="Carelu" style="display:block;border:0;width:60px;height:auto;margin:0 auto;opacity:0.85;"></a>
          <div style="padding-top:16px;font-family:${SANS};font-size:12px;line-height:1.7;color:${MUTED};">
            You get this because you joined the payer updates list on carelu.com.<br>
            <a href="${SITE}/payers?${utm}#payer-updates" style="color:${DEEP};">Change your states or topics</a> &nbsp;&middot;&nbsp; <a href="${unsubscribeUrl}" style="color:${MUTED};">Unsubscribe</a>${postal ? `<br>${esc(postal)}` : ''}
          </div>
        </td></tr>`)}

  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;

  const text = [
    "You're on the Carelu payer updates list. Thanks for joining.",
    '', `Your states: ${names.join(', ')}`, `Your topics: ${topicNames.join(', ')}`,
    `Change them: ${SITE}/payers#payer-updates`,
    ...(recent.length ? ['', 'WHAT CHANGED RECENTLY (LAST 30 DAYS)', ...recent.map((i) => `- [${STATE_NAME[i.st] ?? i.st}] ${i.headline}\n  ${i.detail}${i.suggestion ? `\n  What this may mean for you: ${i.suggestion}` : ''}\n  ${SITE}/payers/${i.slug}`)] : []),
    '', 'WHAT HAPPENS NEXT',
    `1. One email every two weeks with what changed for payers in ${stateList}, each change linked to the payer's own source. If nothing changed, we skip it.`,
    '2. Every change comes with a short note on what it may mean for your team.',
    "3. Questions? Reply to any of our emails with a payer question, and we're happy to answer it.",
    '', `Don't want to wait? Open the payer directory: ${SITE}/payers`,
    `Book a demo with Carelu: ${SITE}/demo?${utm}&utm_content=book-demo`,
    '', `Unsubscribe: ${unsubscribeUrl}`, ...(postal ? [postal] : []),
  ].join('\n');

  return { subject, html, text };
}

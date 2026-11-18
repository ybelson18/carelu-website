/* ================================================================
   Carelu payer updates: answer replies automatically.

   Lives in the payers@carelu.com Gmail (script.google.com, signed in
   as payers@). Every 5 minutes it looks for new replies to a payer
   updates email and hands each one to https://www.carelu.com/api/payer-reply.

   - answered     -> replies in the same thread, from payers@, and
                     sends COPY_TO a copy of the question and answer
   - needs_human  -> forwards the email to COPY_TO ("Needs you: ...")
   - no_question  -> files it (thanks, out of office, etc.)

   Every handled email gets a label under "Payer replies" and is marked
   read, so it is never answered twice.

   Install: paste this file into a new Apps Script project, run
   setup() once and approve the Gmail access. That's it.
   ================================================================ */

const API = 'https://www.carelu.com/api/payer-reply';
const COPY_TO = 'yoni@leadtrap.com';
const LABELS = {
  answered: 'Payer replies/Answered',
  needs_human: 'Payer replies/Needs a person',
  no_question: 'Payer replies/No question',
};

function setup() {
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('checkReplies').timeBased().everyMinutes(5).create();
  Object.values(LABELS).forEach(label);
  checkReplies();
}

function label(name) {
  return GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
}

/** The new text only: drop the quoted email below "On ... wrote:" or ">" lines. */
function newText(body) {
  const cut = body.search(/^(On .+wrote:|-{2,} ?Original Message|From: .*payers@carelu\.com|>)/m);
  return (cut >= 0 ? body.slice(0, cut) : body).trim();
}

function isAutomatic(msg) {
  const auto = (msg.getHeader('Auto-Submitted') || 'no').toLowerCase();
  const prec = (msg.getHeader('Precedence') || '').toLowerCase();
  return auto !== 'no' || /bulk|junk|list/.test(prec) || /mailer-daemon|postmaster|no-?reply/i.test(msg.getFrom());
}

function checkReplies() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;
  try {
    const me = Session.getActiveUser().getEmail().toLowerCase();
    const threads = GmailApp.search('in:inbox is:unread subject:"payer updates" newer_than:7d -label:payer-replies', 0, 20);
    threads.forEach((thread) => {
      const msgs = thread.getMessages();
      const msg = msgs[msgs.length - 1];
      if (msg.getFrom().toLowerCase().includes(me)) return;
      handle(thread, msg);
    });
  } finally {
    lock.releaseLock();
  }
}

function handle(thread, msg) {
  let result;
  if (isAutomatic(msg)) {
    result = { status: 'no_question', reason: 'automatic email' };
  } else {
    try {
      const res = UrlFetchApp.fetch(API, {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify({ from: msg.getFrom(), subject: msg.getSubject(), body: newText(msg.getPlainBody()) }),
        muteHttpExceptions: true,
      });
      result = res.getResponseCode() === 200 ? JSON.parse(res.getContentText()) : { status: 'needs_human', reason: 'answer service error ' + res.getResponseCode() };
    } catch (err) {
      result = { status: 'needs_human', reason: 'answer service error: ' + err };
    }
  }

  const question = newText(msg.getPlainBody());
  if (result.status === 'answered') {
    msg.reply(result.text, { htmlBody: result.html, name: 'Carelu Payer Updates' });
    GmailApp.sendEmail(COPY_TO, 'Answered: ' + msg.getSubject(),
      'From: ' + msg.getFrom() + '\n\nTheir question:\n' + question + '\n\n---- Our answer ----\n\n' + result.text,
      { name: 'Carelu Payer Updates' });
  } else if (result.status === 'needs_human') {
    msg.forward(COPY_TO, {
      subject: 'Needs you: ' + msg.getSubject(),
      htmlBody: '<p><b>Not answered automatically:</b> ' + (result.reason || '') + '<br>Reply to them from payers@carelu.com.</p><hr>' + msg.getBody(),
    });
  }
  thread.addLabel(label(LABELS[result.status] || LABELS.needs_human));
  thread.addLabel(label('Payer replies'));
  thread.markRead();
}

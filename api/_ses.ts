import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

/* ================================================================
   Amazon SES (LeadTrap's AWS account) for carelu.com mail.
   Underscore-prefixed so Vercel does not turn this into a route.

   Vercel refuses env names starting with AWS_, so the credentials
   live under PAYER_SES_*. Region defaults to us-east-1.
   ================================================================ */

export function sesClient(): SESv2Client | null {
  const accessKeyId = process.env.PAYER_SES_ACCESS_KEY_ID ?? '';
  const secretAccessKey = process.env.PAYER_SES_SECRET_ACCESS_KEY ?? '';
  if (!accessKeyId || !secretAccessKey) return null;
  return new SESv2Client({
    region: process.env.PAYER_SES_REGION || 'us-east-1',
    credentials: { accessKeyId, secretAccessKey },
  });
}

export async function sendEmail(
  ses: SESv2Client,
  m: { from: string; to: string; subject: string; html: string; text: string; unsubscribeUrl?: string }
): Promise<void> {
  await ses.send(new SendEmailCommand({
    FromEmailAddress: m.from,
    Destination: { ToAddresses: [m.to] },
    Content: {
      Simple: {
        Subject: { Data: m.subject, Charset: 'UTF-8' },
        Body: { Html: { Data: m.html, Charset: 'UTF-8' }, Text: { Data: m.text, Charset: 'UTF-8' } },
        // One-click unsubscribe (RFC 8058): Gmail and Yahoo show an
        // "Unsubscribe" button and POST to this URL.
        ...(m.unsubscribeUrl
          ? {
              Headers: [
                { Name: 'List-Unsubscribe', Value: `<${m.unsubscribeUrl}>` },
                { Name: 'List-Unsubscribe-Post', Value: 'List-Unsubscribe=One-Click' },
              ],
            }
          : {}),
      },
    },
  }));
}

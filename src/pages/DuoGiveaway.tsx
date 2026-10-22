import DemoModalHost from '../components/DemoModal';
import { Nav } from './Landing';
import { useSeo } from '../hooks/useSeo';

/* ================================================================
   iPHONE DUO GIVEAWAY — referral reward terms
   Text adapted from "Carelu Referral Reward Agreement" (Oct 22, 2026)
   as read-only promotion terms: no signature block or fill-in record.
   Plain legal document page, same layout as /terms; not in the nav.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const MUTED = 'rgba(43,42,38,0.72)';

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400,
      color: INK, letterSpacing: '-0.02em', margin: '44px 0 14px',
    }}>{children}</h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, margin: '0 0 14px' }}>{children}</p>;
}

function B({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: INK, fontWeight: 600 }}>{children}</strong>;
}

const SUMMARY = [
  'Introduce a business to Carelu between October 22 and November 30, 2026.',
  'The business tells us you referred them, by text or email, before our first call or within 5 days after it.',
  'They sign up within 60 days of our first conversation.',
  'Once they become a client and make their first payment, you get an iPhone Duo or $1,500 cash, your choice.',
  'Every referral after your first that qualifies earns $1,500 cash.',
];

export default function DuoGiveaway() {
  useSeo({
    title: 'iPhone Duo Giveaway Terms — Carelu',
    description: 'Terms for the Carelu referral giveaway: introduce a business that becomes a paying Carelu client and receive an iPhone Duo or $1,500 cash.',
    canonical: '/duo-giveaway',
  });
  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <DemoModalHost />
      <Nav base="/carelu" />

      <main style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(140px, 16vw, 190px) clamp(20px, 5vw, 40px) 90px' }}>
        {/* Apple's iPhone Duo hero, white backdrop keyed to our sky (public/sky.png); unfolds once, then stays open. */}
        <div style={{
          background: '#fff', border: '1px solid rgba(43,42,38,0.1)', borderRadius: 14,
          overflow: 'hidden', margin: '0 0 36px',
        }}>
          <video
            src="/iphone-duo-open.mp4" poster="/iphone-duo-open-poster.jpg"
            autoPlay muted playsInline preload="auto" width={1932} height={1280}
            aria-label="iPhone Duo unfolding in two hands"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 54px)', fontWeight: 400,
          color: INK, letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0,
        }}>
          iPhone Duo Giveaway
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(43,42,38,0.55)', margin: '14px 0 0' }}>
          Referral reward terms &middot; LeadTrap, Inc. dba Carelu &middot; Last updated: October 22, 2026
        </p>

        <div style={{
          background: '#fff', border: '1px solid rgba(43,42,38,0.1)', borderRadius: 14,
          padding: '22px 26px', margin: '36px 0 8px',
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: INK, margin: '0 0 12px' }}>
            The short version
          </p>
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            {SUMMARY.map((li) => (
              <li key={li} style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, marginBottom: 6 }}>{li}</li>
            ))}
          </ol>
          <p style={{ fontSize: 13, color: 'rgba(43,42,38,0.55)', lineHeight: 1.6, margin: '12px 0 0' }}>
            The full terms below control. This summary is for convenience only.
          </p>
        </div>

        <H2>Who runs this promotion</H2>
        <P>
          This promotion is run by LeadTrap, Inc., doing business as Carelu, 169 Madison Avenue, Suite 62431, New York,
          NY 10016 (&ldquo;Carelu&rdquo;). The person who makes a referral is the &ldquo;Referrer.&rdquo; These terms set
          out the conditions for earning an iPhone Duo or a cash reward by referring a business that becomes a paying
          Carelu client. The promotion starts on October 22, 2026.
        </P>

        <H2>1. Eligible business referral</H2>
        <P>
          Referrer may introduce a business interested in purchasing Carelu services (&ldquo;Referred Business&rdquo;).
          This promotion concerns a business becoming a customer of Carelu; it does not compensate referrals of individual
          patients or families for clinical services.
        </P>

        <H2>2. First conversation and signup deadline</H2>
        <P>
          Carelu&rsquo;s first substantive two-way conversation with the Referred Business about purchasing Carelu
          services (&ldquo;First Conversation&rdquo;) must occur on or after October 22, 2026 and no later than 11:59 p.m.
          New York time on November 30, 2026. A conversation may occur by telephone, video, in person, text, or email.
          An unanswered outreach message alone does not constitute the First Conversation.
        </P>
        <P>
          The Referred Business must sign up within 60 calendar days after the First Conversation. Signup means
          execution of Carelu&rsquo;s client services agreement by the Referred Business and acceptance by Carelu. A
          timely signup may occur after November 30, 2026.
        </P>

        <H2>3. Express identification of the Referrer</H2>
        <P>
          The Referred Business must explicitly tell Carelu that Referrer referred it, identifying Referrer by name or
          other information sufficient in the sole discretion of Carelu to identify Referrer. The acknowledgment must be
          made by text or by email. Referrer&rsquo;s own statement alone does not satisfy this requirement.
        </P>
        <P>
          Carelu must receive the acknowledgment before, during, or no later than five calendar days after
          Carelu&rsquo;s first telephone or video call with the Referred Business (&ldquo;First Call&rdquo;). An
          acknowledgment received before the First Call qualifies without an additional five-day lookback restriction.
          The First Call may be different from the First Conversation.
        </P>
        <P>
          If the Referred Business identifies more than one Referrer, then an amount of money equal to the minimum cost
          of purchasing an iPhone Duo will be apportioned and the pro-rata portion will be paid in cash to each Referrer.
        </P>
        <P>
          Notwithstanding anything to the contrary, if the Referred Business was already a client or customer of, or
          already in discussions with, Carelu, as reasonably demonstrated by Carelu, no iPhone Duo will be due or
          required to be provided by Carelu. It is the responsibility of the Referrer to verify whether Carelu has an
          existing relationship with a potential Referred Business.
        </P>

        <H2>4. When the reward is earned</H2>
        <P>
          The reward is earned only after all requirements above are met, Carelu has officially accepted and designated
          the Referred Business as a client, and Carelu has received that client&rsquo;s first payment for Carelu
          services. An introduction, trial, proposal, or signed agreement without client acceptance and payment does not
          by itself earn the reward. The 60-day deadline applies to signup; there is no separate deadline for first
          payment or official client designation.
        </P>

        <H2>5. Reward and delivery</H2>
        <P>
          For Referrer&rsquo;s first qualifying referral, Carelu will provide Referrer, at Referrer&rsquo;s election,
          either one new iPhone Duo, without charging Referrer for the device, or $1,500 in cash instead of the device.
          Exact manufacturer model, storage, configuration, and approximate retail value of the iPhone Duo shall be
          determined by Carelu in its sole discretion.
        </P>
        <P>
          For each additional qualifying referral after the first, Carelu will pay Referrer $1,500 in cash. No additional
          iPhone Duo will be provided. References in these terms to delivering or providing an iPhone Duo apply equally
          to any cash reward, which will be paid within the same timeframe and subject to the same conditions.
        </P>
        <P>
          Carelu will deliver the reward within ten business days or, if the model of iPhone Duo selected by Carelu is
          unavailable or only available at extra expense, as soon as reasonably practicable after it is earned and
          Referrer provides the necessary delivery details, provided that if the Referred Business cancels or materially
          and adversely changes the terms of its purchase of Carelu services prior to payment, no iPhone Duo will be due
          or required to be provided by Carelu. Delivery shipping costs shall be borne by Carelu.
        </P>
        <P>
          Activation, service plans, accessories, and any taxes or required tax reporting on any reward are the sole
          responsibility of the Referrer. Carelu shall not be required to pay for or otherwise participate in the foregoing actions and items.
          If the specified device is unavailable, Carelu and Referrer must agree in writing to an alternative; these
          terms do not authorize unilateral substitution.
        </P>

        <H2>6. Verification and records</H2>
        <P>
          Carelu will maintain the dates of the First Conversation, First Call, signup, official client acceptance, and
          first payment, together with the Referred Business&rsquo;s acknowledgment. A call acknowledgment may be
          documented in contemporaneous notes; no call recording is required. Either party may provide relevant emails,
          texts, or other records to resolve a discrepancy. Carelu will provide Referrer written confirmation when the
          reward is earned or a written explanation of any unmet condition, which shall be binding on and accepted by
          the Referrer.
        </P>

        <H2>7. Referral conduct</H2>
        <P>
          Referrer may not bind Carelu or make promises on its behalf. Referrer will accurately describe the promotion
          and clearly disclose the potential referral reward when recommending Carelu. Referrer will obtain any required
          employer authorization and comply with applicable law. Referral communications should contain business contact
          information only, without patient records or protected health information.
        </P>
        <P>
          Referrer must not violate any laws or regulations regarding kickbacks or otherwise, or violate any policies
          and practices of their employer, in connection with this promotion. If Referrer introduces their own employer,
          Referrer must first disclose these terms to that employer and obtain its written consent for Referrer to
          receive an iPhone Duo for the introduction. That consent must be shared with Carelu as a condition of
          receiving an iPhone Duo.
        </P>

        <H2>8. Administration and governing terms</H2>
        <P>
          Questions and notices should be sent to Carelu at{' '}
          <a href="mailto:legal@leadtrap.com" style={{ color: INK }}>legal@leadtrap.com</a>. Carelu and Referrer will first
          attempt in good faith to resolve eligibility or delivery disputes using the referral records. These terms are
          governed by New York law, with jurisdiction in the courts of the State of New York in the borough of Manhattan.
        </P>
        <P>
          These terms may be amended only in writing accepted by both Carelu and the Referrer. <B>Expiration of the
          November 30, 2026 referral window does not eliminate the opportunity to complete the 60-day signup period or
          receive a reward after the remaining conditions are met.</B>
        </P>
      </main>

      <footer style={{ borderTop: '1px solid rgba(43,42,38,0.08)', padding: '28px 0' }}>
        <div style={{
          maxWidth: 760, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <a href="/carelu" style={{ textDecoration: 'none' }}>
            <img src="/carelu-logo.svg" alt="Carelu" style={{ height: 22, width: 'auto', display: 'block', opacity: 0.85 }} />
          </a>
          <span style={{ fontSize: 12.5, color: 'rgba(43,42,38,0.5)' }}>
            © {new Date().getFullYear()} LeadTrap, Inc.
          </span>
        </div>
      </footer>
    </div>
  );
}

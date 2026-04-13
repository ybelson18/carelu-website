import SectionLabel from './SectionLabel';

export default function ReferralAutomation() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Referral Automation</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 16px' }}>
        Every referral.<br />Every channel. Handled.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 56px', maxWidth: 560 }}>
        Referrals come in from everywhere — fax, email, phone, portals. Carelu catches every one, qualifies the patient, gathers missing info from families, and drives them through intake automatically.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 12 }}>
        {['Fax', 'Email', 'Phone', 'Chat', 'Form'].map((ch) => (
          <div key={ch} style={{ textAlign: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', border: '1px solid #f0f0f0' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div style={{ fontSize: 11, color: '#888' }}>{ch}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginBottom: 12, color: '#ccc', fontSize: 20 }}>↓</div>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span style={{ display: 'inline-block', background: '#1a1a1a', color: '#fff', fontSize: 12, fontWeight: 600, padding: '6px 16px', borderRadius: 999 }}>Carelu AI</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 48 }}>
        {[
          { step: '01', title: 'Referral received', desc: 'A referral arrives via fax, email, phone, or portal. Carelu captures it instantly — no manual data entry.' },
          { step: '02', title: 'Qualify & verify', desc: 'AI extracts patient details, checks insurance eligibility in real time, and flags missing information.' },
          { step: '03', title: 'Reach out to the family', desc: 'Carelu contacts the family via SMS, email, or phone to collect missing documents, consents, and schedule preferences.' },
          { step: '04', title: 'Complete intake', desc: 'Once everything is collected and verified, the case is marked intake-ready and handed off to your clinical team.' },
        ].map((s) => (
          <div key={s.step} style={{ background: '#fafafa', borderRadius: 16, padding: '28px 24px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#bbb', marginBottom: 10 }}>{s.step}</div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' }}>{s.title}</h4>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { value: '85%', desc: 'Of referrals completed without staff intervention' },
          { value: '< 48 hrs', desc: 'Avg. time from referral to intake-ready' },
          { value: '0', desc: 'Referrals lost or forgotten' },
        ].map((s) => (
          <div key={s.value} style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#7c3aed', fontStyle: 'italic', letterSpacing: '-0.5px' }}>{s.value}</div>
            <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

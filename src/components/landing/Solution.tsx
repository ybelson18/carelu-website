import SectionLabel from './SectionLabel';

export default function Solution() {
  return (
    <section style={{
      padding: '100px 32px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <SectionLabel>The Solution</SectionLabel>
      <p style={{
        fontSize: 18,
        color: '#555',
        lineHeight: 1.7,
        margin: '0 0 56px',
        maxWidth: 560,
      }}>
        Carelu replaces your entire intake workflow with one AI-powered platform — from first contact to admitted patient, across every channel, fully automated and compliant.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          { value: '24/7', title: 'AI-Native Intake', desc: 'Conversational AI guides families through the entire intake — no forms, no friction, no waiting.' },
          { value: '<30s', title: 'Instant Eligibility', desc: 'Insurance verified, coverage confirmed, and compliance-ready documentation generated in real time.' },
          { value: '95%', title: 'Zero Drop-Off', desc: 'Automated follow-up and document collection ensure no family falls through the cracks.' },
          { value: '3\u00d7', title: 'Revenue Acceleration', desc: 'Faster admissions means faster billing cycles. Turn demand into revenue, not missed opportunities.' },
        ].map((card) => (
          <div key={card.title} style={{
            background: '#fafafa',
            borderRadius: 16,
            padding: '32px 28px',
            border: '1px solid #f0f0f0',
            transition: 'box-shadow 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#e5e5e5'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f0f0f0'; }}
          >
            <div style={{ fontSize: 36, fontWeight: 800, color: '#7c3aed', letterSpacing: '-1px', marginBottom: 12 }}>
              {card.value}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>{card.title}</span>
            </div>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <a href="#every-channel" style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          See how it works across every channel
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}

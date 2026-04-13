import SectionLabel from './SectionLabel';

export default function Platform() {
  return (
    <section id="platform" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Platform</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 12px' }}>
        Everything your<br />front office needs.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 56px', maxWidth: 520 }}>
        One AI system that replaces five fragmented tools — and actually finishes what it starts.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { title: 'Conversational Intake', desc: 'Families engage through natural chat — no forms, no friction. Carelu meets them where they are, 24/7, in English and Spanish.' },
          { title: 'Voice + Chat + Web', desc: 'Whether a parent calls, texts, or fills out a form on your site, Carelu handles it seamlessly across every channel.' },
          { title: 'Real-Time Eligibility', desc: "Insurance is verified instantly. Carelu checks coverage, confirms in-network status, and flags issues before your team ever sees the case." },
          { title: 'Document Collection', desc: 'Insurance cards (front + back), autism diagnosis reports, consent forms — collected conversationally without a single email attachment.' },
          { title: 'Automated Follow-Up', desc: "Missing a document? Carelu follows up automatically via text and email until the case is complete. No human chasing required." },
          { title: 'Provider Dashboard', desc: 'Your team sees every case in real-time: status, documents collected, eligibility result, and readiness score — all in one place.' },
        ].map((f) => (
          <div key={f.title} style={{
            background: '#fafafa', borderRadius: 16, padding: '32px 28px', border: '1px solid #f0f0f0',
            transition: 'box-shadow 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#e5e5e5'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#f0f0f0'; }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

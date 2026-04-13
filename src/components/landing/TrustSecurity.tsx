import SectionLabel from './SectionLabel';

export default function TrustSecurity() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Trust & Security</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 56px' }}>
        Built for healthcare.<br />Secured like it.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          { title: 'HIPAA Compliant', desc: 'BAAs signed with every provider. PHI encrypted at rest and in transit.' },
          { title: 'SOC 2 Type II', desc: 'Enterprise-grade security controls audited annually by independent assessors.' },
          { title: 'Payer-Compliant Language', desc: 'All patient-facing communication is built to meet insurance provider guidelines — reducing claim denials and documentation flags.' },
          { title: 'US-Based Infrastructure', desc: 'All data stored in HIPAA-eligible US data centers. No offshore processing.' },
        ].map((card) => (
          <div key={card.title} style={{ background: '#fafafa', borderRadius: 16, padding: '32px 24px', border: '1px solid #f0f0f0' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px' }}>{card.title}</h3>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import SectionLabel from './SectionLabel';

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>How It Works</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 12px' }}>
        From conversation<br />to care readiness.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 64px', maxWidth: 480 }}>
        One continuous system replaces your entire fragmented stack.
      </p>

      {/* Illustration */}
      <div style={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #f5f3ff 100%)',
        borderRadius: 20, padding: '48px 32px', marginBottom: 64, textAlign: 'center',
      }}>
        <div style={{
          background: '#fff', borderRadius: 16, padding: '24px 32px',
          display: 'inline-flex', alignItems: 'center', gap: 16,
          boxShadow: '0 8px 32px rgba(124, 58, 237, 0.08)',
        }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 18 }}>👩</span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a' }}>Carelu</div>
            <div style={{ fontSize: 12, color: '#7c3aed' }}>active ●</div>
          </div>
          <div style={{ marginLeft: 24 }}>
            <div style={{ fontSize: 14, color: '#555' }}>Collecting paperwork...</div>
            <div style={{ background: '#f5f3ff', height: 4, borderRadius: 2, marginTop: 8, width: 160 }}>
              <div style={{ background: 'linear-gradient(90deg, #7c3aed, #a78bfa)', height: 4, borderRadius: 2, width: '70%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {[
          { num: '01', title: 'Engage', desc: 'Families connect instantly through chat, phone, or form — on their terms, 24/7.' },
          { num: '02', title: 'Qualify', desc: 'Real-time eligibility check based on insurance, diagnosis, and location.' },
          { num: '03', title: 'Collect', desc: 'Insurance cards, diagnosis docs, consent forms — collected conversationally.', highlight: true },
          { num: '04', title: 'Follow Up', desc: 'Missing info? Carelu follows up automatically until the case is complete.' },
          { num: '05', title: 'Hand Off', desc: 'Your team gets a fully prepared, intake-ready case. No starting from scratch.' },
        ].map((step) => (
          <div key={step.num} style={{
            display: 'grid', gridTemplateColumns: '60px 180px 1fr', gap: 24, alignItems: 'center',
            padding: '24px 0', borderBottom: '1px solid #f0f0f0',
          }}>
            <span style={{ fontSize: 14, color: '#ccc', fontWeight: 500 }}>{step.num}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: step.highlight ? '#7c3aed' : '#1a1a1a' }}>{step.title}</span>
            <span style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>{step.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

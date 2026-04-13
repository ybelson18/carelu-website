import SectionLabel from './SectionLabel';

export default function WhoItsFor() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Who It's For</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 56px' }}>
        Built for the people<br />who need it most.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { title: 'ABA Providers', bullets: ['Multi-location practices drowning in intake volume', 'Teams spending more time on paperwork than care', 'High family drop-off before first appointment'] },
          { title: 'Behavioral Health Groups', bullets: ['Outpatient clinics with complex intake requirements', 'Organizations scaling across states and payers', 'Teams managing multiple referral sources'] },
          { title: 'Families', bullets: ["Parents who don't know where to start", 'Caregivers overwhelmed by forms and phone calls', 'Families who need help — not another voicemail'] },
        ].map((card) => (
          <div key={card.title} style={{ background: '#fafafa', borderRadius: 16, padding: '36px 28px', border: '1px solid #f0f0f0' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1a1a1a', margin: '0 0 16px' }}>{card.title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {card.bullets.map((b) => (
                <li key={b} style={{ fontSize: 13, color: '#888', marginBottom: 10, display: 'flex', alignItems: 'start', gap: 8, lineHeight: 1.5 }}>
                  <span style={{ color: '#7c3aed', fontWeight: 700, marginTop: 1 }}>+</span> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

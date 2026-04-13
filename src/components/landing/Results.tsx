import SectionLabel from './SectionLabel';

export default function Results() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Results</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 56px' }}>
        The numbers<br />speak clearly.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {[
          { value: '3x', title: 'More intakes completed per month', desc: 'Providers using Carelu convert 3x more inbound inquiries into completed intakes.' },
          { value: '< 10 min', title: 'Average time to intake-ready', desc: 'What used to take days of phone tag and email chains now happens in a single conversation.' },
          { value: '85%', title: 'Family completion rate', desc: 'When the process is easy, families finish. No more 70% drop-off rates.' },
          { value: '0', title: 'Manual follow-ups needed', desc: 'Carelu handles every nudge, reminder, and document request automatically.' },
        ].map((s) => (
          <div key={s.title} style={{ background: '#fafafa', borderRadius: 16, padding: '36px 32px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: 40, fontWeight: 800, color: '#7c3aed', fontStyle: 'italic', letterSpacing: '-1px', marginBottom: 8 }}>{s.value}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 6 }}>{s.title}</div>
            <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

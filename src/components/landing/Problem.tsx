import SectionLabel from './SectionLabel';

export default function Problem() {
  return (
    <section id="problem" style={{
      padding: '100px 32px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginBottom: 64 }}>
        <div>
          <SectionLabel>The Problem</SectionLabel>
          <h2 style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.08,
            letterSpacing: '-1.5px',
            margin: 0,
          }}>
            The front door is broken.
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, margin: '0 0 20px' }}>
            In behavioral health — especially ABA — families don't know where to start. They avoid calling because it's personal and overwhelming. Forms are long and fragmented. Follow-up is manual and slow.
          </p>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, margin: 0 }}>
            There's massive demand, but the system can't convert it into actual care.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { value: '70%', desc: 'of families drop off before intake is completed' },
          { value: '5+', desc: 'fragmented tools used by the average intake team' },
          { value: 'Days', desc: 'of manual follow-up for every single case' },
        ].map((stat) => (
          <div key={stat.value} style={{
            background: '#fafafa',
            borderRadius: 16,
            padding: '36px 32px',
            border: '1px solid #f0f0f0',
          }}>
            <div style={{ fontSize: 42, fontWeight: 800, color: '#7c3aed', letterSpacing: '-1px', marginBottom: 8 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 14, color: '#888', lineHeight: 1.5 }}>{stat.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

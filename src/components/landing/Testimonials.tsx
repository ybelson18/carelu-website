import SectionLabel from './SectionLabel';

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Voices</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 56px' }}>
        From providers<br />and families.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {[
          { quote: "We were losing families every single day. They'd call, we'd send forms, and then... silence. Carelu changed that completely. Now families finish intake before we even pick up the phone.", name: 'Dr. Sarah Mitchell', role: 'Clinical Director, Bright Horizons ABA' },
          { quote: "Our intake coordinator used to spend 80% of her day chasing missing documents. With Carelu, she spends that time actually helping families get started with care.", name: 'James Torres', role: 'Operations Manager, Spectrum Care Partners' },
          { quote: "I was so nervous about calling. I didn't even know where to start. But the chat walked me through everything — insurance, diagnosis docs, all of it. My son started therapy two weeks later.", name: 'Maria L.', role: 'Parent' },
        ].map((t) => (
          <div key={t.name} style={{ background: '#fafafa', borderRadius: 16, padding: '32px 28px', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 24px', flex: 1 }}>"{t.quote}"</p>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}>{t.name}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import SectionLabel from './SectionLabel';

export default function TheShift() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>The Shift</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 56px' }}>
        Lead capture<br />→ care readiness.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#fafafa', borderRadius: 16, padding: '36px 32px', border: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 16 }}>Without Carelu</div>
          <p style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 500, margin: '0 0 20px', lineHeight: 1.6 }}>
            Lead → wait → call → send forms → chase → <span style={{ color: '#e67e22', fontStyle: 'italic' }}>maybe</span> intake
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Fragmented tools: forms, DocuSign, email, CRM, phone', 'Intake teams chasing incomplete leads', 'Families drop off → slow and confusing'].map((item) => (
              <li key={item} style={{ fontSize: 13, color: '#888', marginBottom: 8, display: 'flex', alignItems: 'start', gap: 8, lineHeight: 1.5 }}>
                <span style={{ color: '#ccc' }}>○</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ background: '#faf8ff', borderRadius: 16, padding: '36px 32px', border: '1px solid #ede9fe' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#7c3aed', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 16 }}>With Carelu</div>
          <p style={{ fontSize: 16, color: '#1a1a1a', fontWeight: 500, margin: '0 0 20px', lineHeight: 1.6 }}>
            Conversation → qualification → intake → <span style={{ color: '#7c3aed', fontStyle: 'italic' }}>readiness</span>
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['One continuous AI-powered system', 'Team picks up fully prepared cases', 'Families guided with zero friction'].map((item) => (
              <li key={item} style={{ fontSize: 13, color: '#555', marginBottom: 8, display: 'flex', alignItems: 'start', gap: 8, lineHeight: 1.5 }}>
                <span style={{ color: '#7c3aed', fontWeight: 700 }}>+</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

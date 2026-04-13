import SectionLabel from './SectionLabel';

export default function FamilyExperience() {
  return (
    <section style={{ padding: '100px 32px', backgroundColor: '#fafafa' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionLabel>The Family Experience</SectionLabel>
        <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 12px' }}>
          10 minutes.<br />Intake complete.
        </h2>
        <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 56px', maxWidth: 520 }}>
          Here's what it actually looks like when a family reaches out to a Carelu-powered provider.
        </p>

        <div style={{ position: 'relative' }}>
          {[
            { time: '0 min', title: 'Family reaches out', desc: 'A parent visits your website, sends a text, or calls your number. Carelu responds instantly — no hold music, no voicemail.', color: '#f5f3ff' },
            { time: '2 min', title: 'Conversation begins', desc: "Carelu asks the right questions in a warm, human tone: child's name, age, diagnosis, location, and what kind of help they're looking for.", color: '#f5f3ff' },
            { time: '5 min', title: 'Insurance verified', desc: 'The family shares their insurance info. Carelu verifies coverage in real time and confirms the provider is in-network — before anyone picks up a phone.', color: '#f5f3ff' },
            { time: '8 min', title: 'Documents collected', desc: 'Insurance card photos (front & back), autism diagnosis documentation, and consent forms — all collected within the same conversation. No portals, no email chains.', color: '#f5f3ff' },
            { time: '10 min', title: 'Case ready', desc: 'Your intake team receives a fully prepared case with all documents, eligibility confirmed, and family details organized. They pick up where the AI left off.', color: '#7c3aed' },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
              <div style={{
                width: 56, minWidth: 56, height: 32, borderRadius: 999,
                background: step.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 600,
                color: i === 4 ? '#fff' : '#7c3aed',
              }}>
                {step.time}
              </div>
              <div style={{ flex: 1, background: '#fff', borderRadius: 16, padding: '24px 28px', border: '1px solid #f0f0f0' }}>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px' }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

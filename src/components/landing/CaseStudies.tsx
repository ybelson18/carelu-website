import SectionLabel from './SectionLabel';

export default function CaseStudies() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Case Studies</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 12px' }}>
        Real providers.<br />Real results.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 56px', maxWidth: 520 }}>
        See how behavioral health organizations are using Carelu to get more families into care — faster and with less manual work.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#fafafa', borderRadius: 20, padding: '40px 36px', border: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#7c3aed', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 20 }}>ABA Provider — Southeast US</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', margin: '0 0 16px' }}>Bright Horizons ABA</h3>
          <blockquote style={{ fontSize: 15, color: '#555', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 16px', borderLeft: '3px solid #7c3aed', paddingLeft: 16 }}>
            "We were losing 60% of families before they ever completed intake. Carelu brought that number under 15% in the first month."
          </blockquote>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#7c3aed', margin: '0 0 24px' }}>— Maria C., Clinical Director</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[{ value: '3.2×', label: 'More completed intakes' }, { value: '48 hrs', label: 'Avg. time to intake-ready' }, { value: '92%', label: 'Family satisfaction' }].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: 12, padding: '16px 12px', textAlign: 'center', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#7c3aed', letterSpacing: '-0.5px' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#fafafa', borderRadius: 20, padding: '40px 36px', border: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#7c3aed', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 20 }}>Multi-Site Behavioral Health — Midwest</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a1a', margin: '0 0 16px' }}>Pathways Behavioral Group</h3>
          <blockquote style={{ fontSize: 15, color: '#555', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 16px', borderLeft: '3px solid #7c3aed', paddingLeft: 16 }}>
            "Our coordinators were drowning in phone tag and faxes. Carelu handled 80% of the follow-up automatically — our team finally has time to focus on clinical work."
          </blockquote>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#7c3aed', margin: '0 0 24px' }}>— James T., VP of Operations</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[{ value: '74%', label: 'Less staff follow-up' }, { value: '2.8×', label: 'Referral conversion' }, { value: '340+', label: 'Families in 90 days' }].map((s) => (
              <div key={s.label} style={{ background: '#fff', borderRadius: 12, padding: '16px 12px', textAlign: 'center', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#7c3aed', letterSpacing: '-0.5px' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

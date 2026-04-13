import Logo from '../Logo';

export default function Hero() {
  return (
    <section style={{
      padding: '80px 32px 60px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            marginBottom: 20,
            fontSize: 12,
            fontWeight: 600,
            color: '#7c3aed',
            textTransform: 'uppercase' as const,
            letterSpacing: '1.5px',
          }}>
            ✦ The Care Entry Platform for Behavioral Health
          </div>
          <h1 style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            margin: '0 0 24px',
          }}>
            No families lost between contact and care.
          </h1>
          <p style={{
            fontSize: 17,
            color: '#666',
            lineHeight: 1.65,
            margin: '0 0 36px',
            maxWidth: 440,
          }}>
            Admit more patients, reduce staff workload, and accelerate revenue — with the AI-native platform built specifically for behavioral health providers.
          </p>
          <a
            href="#cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 15,
              fontWeight: 600,
              color: '#fff',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
              padding: '16px 32px',
              borderRadius: 14,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(124, 58, 237, 0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(124, 58, 237, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.25)';
            }}
          >
            Request a Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Right — Intake flow visual */}
        <div style={{
          background: '#fafafa',
          borderRadius: 20,
          border: '1px solid #eee',
          padding: 32,
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
        }}>
          {/* Intake */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 16 }}>Intake</div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '16px 12px', marginBottom: 8, border: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 8 }}>Lucas M.</div>
              {['Insurance accepted', 'Zip code covered', 'Diagnosis on file', 'Age eligible'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#666', marginBottom: 4 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Documentation */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 16 }}>Documentation</div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '16px 12px', border: '1px solid #f0f0f0' }}>
              {['Insurance card', 'Diagnosis report', 'Consent form'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#666', marginBottom: 6 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={i < 2 ? '#7c3aed' : '#ccc'} strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Follow-Up */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: 16 }}>Follow-Up</div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '16px 12px', border: '1px solid #f0f0f0' }}>
              {['Intake started', 'SMS nudge sent', 'Case complete'].map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#666', marginBottom: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: i === 2 ? '#7c3aed' : '#ddd', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust logos */}
      <div style={{ marginTop: 64, textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#bbb', textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 24 }}>
          Trusted by behavioral health providers nationwide and thousands of families every day
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, alignItems: 'center', opacity: 0.35 }}>
          {['BridgeCare', 'Sunrise Care', 'Golden Care', 'Total Health', 'Momentum', 'BridgeCare'].map((name, i) => (
            <span key={i} style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.3px' }}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

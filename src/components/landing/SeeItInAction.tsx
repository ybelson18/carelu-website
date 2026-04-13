import { useState } from 'react';
import SectionLabel from './SectionLabel';

const tabs = [
  {
    id: 'intake',
    label: 'Intake',
    content: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 32, maxWidth: 520, margin: '0 auto', border: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ fontSize: 11, color: '#999', marginLeft: 8 }}>carelu.ai / bright-horizons / chat</span>
        </div>
        {[
          { from: 'carelu', text: "Hi! Welcome to Bright Horizons ABA. I'm here to help get your child started with care. What's your child's name?" },
          { from: 'user', text: "His name is Lucas. He's 4." },
          { from: 'carelu', text: 'Great to meet Lucas! Does he have an autism spectrum diagnosis?' },
          { from: 'user', text: 'Yes, he was diagnosed last year.' },
          { from: 'carelu', text: 'Thank you. And what insurance do you have? I can check coverage right now.' },
          { from: 'user', text: 'Blue Cross Blue Shield of Florida' },
          { from: 'carelu', verified: true, text: '✓ BCBS FL verified — Lucas is eligible for ABA services and your provider is in-network. No referral needed. Let\'s get the paperwork started!' },
        ].map((msg, i) => (
          <div key={i} style={{ marginBottom: 12, display: 'flex', flexDirection: 'column', alignItems: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
            {msg.from === 'carelu' && <div style={{ fontSize: 10, fontWeight: 600, color: '#7c3aed', marginBottom: 4, textTransform: 'uppercase' as const }}>Carelu</div>}
            <div style={{
              background: msg.from === 'user' ? 'linear-gradient(135deg, #7c3aed, #a78bfa)' : msg.verified ? '#f5f3ff' : '#fff',
              color: msg.from === 'user' ? '#fff' : msg.verified ? '#7c3aed' : '#333',
              borderRadius: 12, padding: '10px 14px', fontSize: 13, lineHeight: 1.55, maxWidth: '80%',
              border: msg.from === 'user' || msg.verified ? 'none' : '1px solid #f0f0f0',
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'documentation',
    label: 'Documentation',
    content: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 32, maxWidth: 520, margin: '0 auto', border: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ fontSize: 11, color: '#999', marginLeft: 8 }}>carelu.ai / bright-horizons / documents</span>
        </div>
        <div style={{ background: '#7c3aed', height: 6, borderRadius: 3, marginBottom: 24, width: '65%', marginInline: 'auto' }} />
        {[
          { name: 'Insurance card — front', done: true },
          { name: 'Insurance card — back', done: true },
          { name: 'Autism diagnosis report', done: true },
          { name: 'Consent for treatment', done: false },
        ].map((doc) => (
          <div key={doc.name} style={{ background: '#fff', borderRadius: 12, padding: '14px 18px', marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span style={{ fontSize: 13, color: '#1a1a1a', fontWeight: 500 }}>{doc.name}</span>
            </div>
            {doc.done && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'followup',
    label: 'Follow-Up',
    content: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 32, maxWidth: 520, margin: '0 auto', border: '1px solid #f0f0f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ fontSize: 11, color: '#999', marginLeft: 8 }}>carelu.ai / bright-horizons / case-timeline</span>
        </div>
        {[
          { icon: '💬', text: 'Family started intake via chat', time: 'Day 0, 3:12 PM', highlight: false },
          { icon: '📄', text: 'Insurance verified, 3 of 5 documents collected', time: 'Day 0, 3:18 PM', highlight: false },
          { icon: '📩', text: 'SMS sent: "Hi Maria, we just need Lucas\'s diagnosis report to finish up."', time: 'Day 1, 9:00 AM', highlight: true },
          { icon: '📄', text: 'Maria uploaded diagnosis report via text', time: 'Day 1, 11:42 AM', highlight: false },
          { icon: '⏰', text: 'Reminder: HIPAA authorization still needed', time: 'Day 2, 8:00 AM', highlight: false },
        ].map((event, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: event.highlight ? '#7c3aed' : '#fff',
              border: event.highlight ? 'none' : '1px solid #f0f0f0',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0,
            }}>
              {event.highlight ? '📩' : event.icon}
            </div>
            <div style={{
              flex: 1, background: event.highlight ? '#fef3c7' : '#fff',
              borderRadius: 12, padding: '12px 16px',
              border: '1px solid ' + (event.highlight ? '#fde68a' : '#f0f0f0'),
            }}>
              <div style={{ fontSize: 13, color: '#1a1a1a', lineHeight: 1.5, marginBottom: 4 }}>{event.text}</div>
              <div style={{ fontSize: 11, color: '#999' }}>⏱ {event.time}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function SeeItInAction() {
  const [active, setActive] = useState('intake');
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>See It In Action</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 12px' }}>
        Intake. Documents.<br />Follow-up. Done.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 480 }}>
        Watch how Carelu handles the entire journey from first contact to intake-ready — automatically.
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 40 }}>
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setActive(t.id)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 999,
            border: active === t.id ? 'none' : '1px solid #ddd',
            background: active === t.id ? '#1a1a1a' : '#fff',
            color: active === t.id ? '#fff' : '#555',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>
            {t.label}
          </button>
        ))}
      </div>
      {tab.content}
    </section>
  );
}

import { useState } from 'react';
import SectionLabel from './SectionLabel';

const channels = [
  {
    id: 'chat',
    label: 'Chat',
    title: 'AI-Powered Chat',
    desc: 'Families start a conversation on your website and Carelu guides them through the entire intake — collecting details, verifying insurance, and gathering documents — all in a natural, warm dialogue.',
    bullets: ['24/7 availability', 'Embedded on your site', 'English & Spanish', 'Conversational document upload'],
    mockup: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 24, border: '1px solid #f0f0f0', maxWidth: 300 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#7c3aed', marginBottom: 4 }}>Carelu</div>
        <div style={{ fontSize: 12, color: '#999', marginBottom: 12 }}>4:23 PM</div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#333', marginBottom: 8, lineHeight: 1.5, border: '1px solid #f0f0f0' }}>
          Hi! I'm here to help get your child started with ABA therapy. What's their name?
        </div>
        <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#fff', marginBottom: 8, marginLeft: 40, lineHeight: 1.5 }}>
          Emma, she's 5 years old.
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#333', marginBottom: 8, lineHeight: 1.5, border: '1px solid #f0f0f0' }}>
          Nice to meet Emma! Let me check your insurance coverage right now. What's your provider?
        </div>
        <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', borderRadius: 12, padding: '10px 14px', fontSize: 13, color: '#fff', marginBottom: 8, marginLeft: 40 }}>
          Aetna
        </div>
        <div style={{ background: '#f5f3ff', borderRadius: 12, padding: '10px 14px', fontSize: 12, color: '#7c3aed', lineHeight: 1.5 }}>
          ✓ Aetna verified — Emma is covered for ABA services. Let's collect a few documents to get her started!
        </div>
      </div>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    title: 'Voice AI',
    desc: "When a parent calls, Carelu's Voice AI answers instantly — no hold music, no voicemail. It conducts the same intake workflow over the phone, with real-time eligibility checks and follow-up scheduling.",
    bullets: ['Instant pickup', 'Real-time insurance verification', 'Natural voice interaction', 'Warm handoff to humans'],
    mockup: (
      <div style={{ background: '#fafafa', borderRadius: 20, padding: 24, border: '1px solid #f0f0f0', maxWidth: 260, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#f5f3ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.43a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a' }}>Incoming Call</div>
          <div style={{ fontSize: 12, color: '#888' }}>Bright Horizons ABA</div>
        </div>
        {[
          { text: '"Hi, I\'m calling about ABA for my son..."', user: true },
          { text: 'Carelu AI answers instantly — no hold' },
          { text: 'Collects child info & insurance details' },
          { text: 'Verifies eligibility in real time' },
          { text: 'Schedules follow-up or hands off to team' },
        ].map((step, i) => (
          <div key={i} style={{
            background: step.user ? 'linear-gradient(135deg, #7c3aed, #a78bfa)' : '#fff',
            color: step.user ? '#fff' : '#555',
            borderRadius: 10,
            padding: '8px 12px',
            fontSize: 11,
            marginBottom: 6,
            lineHeight: 1.4,
            border: step.user ? 'none' : '1px solid #f0f0f0',
          }}>
            {step.text}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'sms',
    label: 'SMS',
    title: 'Text Messaging',
    desc: 'Families can text your intake number and complete the entire process over SMS. Carelu sends links for document uploads, collects consent via text, and follows up automatically if anything\'s missing.',
    bullets: ['Two-way texting', 'Automated reminders', 'Photo uploads for insurance cards', 'No app download needed'],
    mockup: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 24, border: '1px solid #f0f0f0', maxWidth: 280 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 4 }}>Messages</div>
        <div style={{ fontSize: 11, color: '#999', marginBottom: 16 }}>+1 (555) 012-3456</div>
        <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', borderRadius: 12, padding: '10px 14px', fontSize: 12, color: '#fff', marginBottom: 8, marginLeft: 40, lineHeight: 1.5 }}>
          Hi, I need help getting my daughter into ABA therapy
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: '10px 14px', fontSize: 12, color: '#333', lineHeight: 1.5, border: '1px solid #f0f0f0' }}>
          Hi! I'd love to help. What's your daughter's name and age?
        </div>
      </div>
    ),
  },
  {
    id: 'forms',
    label: 'Forms',
    title: 'Web Forms',
    desc: 'Already have intake forms on your site? Carelu integrates with your existing forms and turns static submissions into active cases — automatically triggering qualification, follow-up, and document collection.',
    bullets: ['Works with existing forms', 'No form rebuilding needed', 'Auto-triggers intake workflow', 'Captures partial submissions'],
    mockup: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 24, border: '1px solid #f0f0f0', maxWidth: 300 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>New Patient Intake Form</div>
        <div style={{ fontSize: 11, color: '#999', marginBottom: 16 }}>brighthorizonsaba.com/intake</div>
        {[
          { label: "CHILD'S NAME", value: 'Lucas Rivera' },
          { label: 'DATE OF BIRTH', value: '03/15/2021' },
          { label: 'INSURANCE PROVIDER', value: 'Cigna' },
          { label: 'MEMBER ID', value: 'CIG-8827441' },
        ].map((field) => (
          <div key={field.label} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.5px', marginBottom: 4 }}>{field.label}</div>
            <div style={{ fontSize: 13, color: '#1a1a1a', paddingBottom: 6, borderBottom: '1px solid #eee' }}>{field.value}</div>
          </div>
        ))}
        <div style={{ background: '#f5f3ff', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: '#7c3aed', lineHeight: 1.5, marginTop: 8 }}>
          ✓ Form submitted → Carelu activated. Insurance verification started, follow-up queued for missing diagnosis docs.
        </div>
      </div>
    ),
  },
  {
    id: 'fax',
    label: 'Fax',
    title: 'Fax Integration',
    desc: "Referrals and documents still come by fax — especially from physicians and schools. Carelu ingests incoming faxes, extracts key data using AI, and creates intake cases automatically.",
    bullets: ['Auto-reads faxed referrals', 'Creates cases from fax', 'Extracts patient data via AI', 'Bridges paper to digital'],
    mockup: (
      <div style={{ background: '#fafafa', borderRadius: 16, padding: 24, border: '1px solid #f0f0f0', maxWidth: 300 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>Incoming Fax</div>
        <div style={{ fontSize: 11, color: '#999', marginBottom: 16 }}>From: Dr. Patel's Office — Pediatric Referral</div>
        <div style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 12, fontSize: 12, color: '#555', lineHeight: 1.6, background: '#fff' }}>
          <div style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>REFERRAL FOR ABA SERVICES</div>
          Patient: Jaylen Thompson, DOB 06/22/2020<br/>
          Dx: Autism Spectrum Disorder F84.0<br/>
          Insurance: Medicaid — FL #3847391
        </div>
        <div style={{ fontSize: 12, color: '#7c3aed', fontStyle: 'italic' }}>AI extracting data...</div>
      </div>
    ),
  },
];

export default function EveryChannel() {
  const [active, setActive] = useState('chat');
  const channel = channels.find((c) => c.id === active)!;

  return (
    <section id="every-channel" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Every Channel</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 16px' }}>
        However they<br />reach you.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 36px', maxWidth: 520 }}>
        Families don't all communicate the same way. Carelu meets them on every channel — chat, phone, text, forms, even fax — and runs the same intelligent intake on all of them.
      </p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 48 }}>
        {channels.map((ch) => (
          <button
            key={ch.id}
            onClick={() => setActive(ch.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 18px', borderRadius: 999,
              border: active === ch.id ? 'none' : '1px solid #ddd',
              background: active === ch.id ? '#1a1a1a' : '#fff',
              color: active === ch.id ? '#fff' : '#555',
              fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {ch.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3 style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a', margin: '0 0 12px', letterSpacing: '-0.5px' }}>{channel.title}</h3>
          <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, margin: '0 0 24px' }}>{channel.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {channel.bullets.map((b) => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#555' }}>
                <span style={{ color: '#7c3aed', fontWeight: 700 }}>+</span> {b}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>{channel.mockup}</div>
      </div>
    </section>
  );
}

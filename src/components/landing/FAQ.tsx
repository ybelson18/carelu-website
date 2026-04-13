import { useState } from 'react';
import SectionLabel from './SectionLabel';

const faqs = [
  { q: 'How does Carelu handle sensitive health information?', a: 'All data is encrypted at rest and in transit. We sign BAAs with every provider, are SOC 2 Type II audited, and store all data in HIPAA-eligible US data centers. Carelu was built from the ground up for healthcare compliance.' },
  { q: 'Does Carelu replace my intake team?', a: 'No — Carelu handles the repetitive, time-consuming parts of intake (eligibility checks, document collection, follow-ups) so your team can focus on clinical work and complex cases. Think of it as a 24/7 intake assistant that hands off fully prepared cases.' },
  { q: 'How long does implementation take?', a: 'Most providers are live within 1–2 weeks. We handle setup, configure your insurance rules, customize the conversation flow, and train your team. No engineering resources required on your end.' },
  { q: 'What channels does Carelu support?', a: 'Chat (embedded on your website), phone (Voice AI), SMS/text, web forms, and fax. Families can start on one channel and continue on another — Carelu keeps everything in sync.' },
  { q: 'Can Carelu verify insurance in real time?', a: 'Yes. Carelu checks eligibility, confirms in-network status, and verifies coverage for specific service codes — all within the conversation, in under 30 seconds.' },
  { q: "What happens when the AI can't handle something?", a: "Carelu gracefully escalates to your team with full context — everything collected so far, the family's preferences, and a summary of where the conversation left off. No information is lost." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 16px' }}>
            Questions you might have.
          </h2>
          <p style={{ fontSize: 15, color: '#888', lineHeight: 1.6 }}>
            If you don't see your answer here, reach out — we're happy to talk.
          </p>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '20px 0', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left',
              }}>
                <span style={{ fontSize: 15, fontWeight: 500, color: '#1a1a1a', paddingRight: 16 }}>{faq.q}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round"
                  style={{ flexShrink: 0, transition: 'transform 0.2s', transform: openIndex === i ? 'rotate(45deg)' : 'none' }}>
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {openIndex === i && (
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ fontSize: 14, color: '#888', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

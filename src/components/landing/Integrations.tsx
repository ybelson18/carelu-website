import SectionLabel from './SectionLabel';

export default function Integrations() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionLabel>Integrations</SectionLabel>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: '#1a1a1a', lineHeight: 1.08, letterSpacing: '-1.5px', margin: '0 0 12px' }}>
        Replace your CRM.<br />Or work alongside it.
      </h2>
      <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: '0 0 56px', maxWidth: 540 }}>
        Carelu can be your all-in-one intake system — or plug right into the CRM, EHR, and practice management tools you already use. Either way, your data flows exactly where it needs to go.
      </p>
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>CRM Integrations</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 12 }}>
          {[
            { name: 'Salesforce', color: '#ede9fe' },
            { name: 'Zoho CRM', color: '#fce4ec' },
            { name: 'Monday.com', color: '#f5f3ff' },
            { name: 'ClickUp', color: '#f3e5f5' },
            { name: 'HubSpot', color: '#fff3e0' },
            { name: 'Pipedrive', color: '#e0f7fa' },
          ].map((crm) => (
            <div key={crm.name} style={{ background: crm.color, borderRadius: 10, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{crm.name}</span>
              <span style={{ fontSize: 11, color: '#888' }}>2-way sync</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#999', marginTop: 12 }}>+ dozens more via API & Zapier</p>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>Practice Management & EHR</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 12 }}>
          {['CentralReach', 'Rethink', 'Availity', 'Office Ally', 'Kareo', 'TherapyNotes', 'DrChrono', 'SimplePractice'].map((name) => (
            <div key={name} style={{ background: '#fafafa', borderRadius: 10, padding: '10px 20px', fontSize: 13, fontWeight: 500, color: '#555', border: '1px solid #f0f0f0' }}>{name}</div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#999', marginTop: 12 }}>+ more coming soon</p>
      </div>
    </section>
  );
}

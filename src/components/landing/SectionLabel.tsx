export default function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{
      fontSize: 12,
      fontWeight: 600,
      color: '#7c3aed',
      textTransform: 'uppercase' as const,
      letterSpacing: '1.5px',
      marginBottom: 16,
    }}>
      {children}
    </div>
  );
}

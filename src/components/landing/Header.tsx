import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0,0,0,0.04)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '16px 32px',
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={32} />
          <span style={{ fontSize: 18, fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.3px' }}>Carelu</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Problem', 'Platform', 'How It Works', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#555',
                textDecoration: 'none',
                letterSpacing: '-0.1px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#1a1a1a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; }}
            >
              {item}
            </a>
          ))}
          <a
            href="#cta"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#fff',
              backgroundColor: '#1a1a1a',
              padding: '10px 22px',
              borderRadius: 999,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1a1a1a'; }}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}

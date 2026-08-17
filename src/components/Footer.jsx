import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#000000', color: '#ffffff', padding: '36px 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: '#ffffff', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            HA
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#ffffff' }}>
            Harsha Aradhyula
          </span>
          <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
            • AI & ML Undergraduate
          </span>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
          © {new Date().getFullYear()} Harsha Aradhyula. Built with React.
        </div>

        <button
          onClick={scrollToTop}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#ffffff',
            border: 'none',
            color: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-sm)',
          }}
          title="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

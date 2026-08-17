import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Mail, ArrowRight, Code } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { IconGithub, IconLinkedin } from './SocialIcons';

export default function CommandMenu({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { title: 'View Selected Work / Projects', section: '#work', icon: Code, badge: 'Section' },
    { title: 'View Technical Skills', section: '#skills', icon: FileText, badge: 'Section' },
    { title: 'View Work Experience', section: '#experience', icon: FileText, badge: 'Section' },
    { title: 'Contact / Send Message', section: '#contact', icon: Mail, badge: 'Section' },
    { title: 'Open GitHub Profile', url: PROFILE_DATA.socials.github, icon: IconGithub, badge: 'External' },
    { title: 'Open LinkedIn Profile', url: PROFILE_DATA.socials.linkedin, icon: IconLinkedin, badge: 'External' },
    { title: `Send Email to ${PROFILE_DATA.email}`, url: `mailto:${PROFILE_DATA.email}`, icon: Mail, badge: 'Email' },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action) => {
    onClose();
    if (action.section) {
      const el = document.querySelector(action.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '120px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '580px',
          background: '#0d0f17',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          color: '#ffffff',
          overflow: 'hidden',
        }}
      >
        {/* Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', gap: '12px' }}>
          <Search size={18} color="#9ca3af" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or search section... (Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontFamily: 'var(--font-body)',
            }}
          />
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#9ca3af', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '340px', overflowY: 'auto', padding: '12px' }}>
          {filtered.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
              No matching commands found.
            </div>
          ) : (
            filtered.map((action, idx) => {
              const IconComp = action.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelect(action)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                    marginBottom: '4px',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <IconComp size={16} color="#f97316" />
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{action.title}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', color: '#9ca3af', fontFamily: 'var(--font-mono)' }}>
                      {action.badge}
                    </span>
                    <ArrowRight size={14} color="#9ca3af" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

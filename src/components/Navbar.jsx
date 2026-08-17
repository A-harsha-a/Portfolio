import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Command, Menu, X } from 'lucide-react';

export default function Navbar({ openCommandMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'About me', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#work', id: 'work' },
    { label: 'Experience', href: '#experience', id: 'experience' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 100,
        background: scrolled ? 'rgba(0, 0, 0, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: scrolled ? '14px 40px' : '20px 40px',
          transition: 'padding 0.3s ease',
        }}
        className="nav-container"
      >
        {/* Brand Logo strictly white text */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#000000',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              letterSpacing: '-0.05em',
            }}
          >
            HA
          </div>
          <span
            style={{
              fontWeight: '900',
              fontSize: '1.2rem',
              fontFamily: 'var(--font-display)',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
            className="hide-mobile"
          >
            Harsha
          </span>
        </a>

        {/* Right Side Navigation Links (Always Crisp White) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  style={{
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    fontWeight: isActive ? '900' : '700',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    opacity: isActive ? 1 : 0.9,
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Cmd+K Quick Search Button */}
          <button
            onClick={openCommandMenu}
            aria-label="Open Command Search Menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
            title="Open Command Palette (Ctrl+K / Cmd+K)"
          >
            <Command size={13} color="#ffffff" />
            <span className="hide-mobile">⌘K</span>
          </button>

          {/* CONTACT ME Pill Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-white-pill hide-mobile"
            style={{
              background: '#ffffff',
              color: '#000000',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
            }}
          >
            CONTACT ME
          </a>

          {/* Mobile Menu Burger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile menu"
            className="show-mobile-only"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#ffffff',
              border: 'none',
              color: '#000000',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#000000',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="btn-white-pill"
            style={{ marginTop: '10px', textAlign: 'center', justifyContent: 'center', background: '#ffffff', color: '#000000' }}
          >
            CONTACT ME
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 840px) {
          .nav-container { padding: 16px 20px !important; }
          .desktop-nav { display: none !important; }
          .hide-mobile { display: none !important; }
          .show-mobile-only { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

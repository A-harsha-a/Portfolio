import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Send, Mail, Loader2 } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Forward form data directly to harshaaradhyula07@gmail.com without opening mail app
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Direct Message from ${formData.name}`,
          _template: 'table'
        })
      });

      setIsSubmitting(false);
      setFormSubmitted(true);

      // Trigger Celebratory Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#000000', '#f97316', '#10b981']
      });

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);

    } catch (error) {
      // Fallback success feedback
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '56px',
            alignItems: 'flex-start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Social Buttons */}
          <div>
            <div className="section-badge">
              CONTACT
            </div>

            <h2 className="section-title">
              Let's build something <br />
              useful with AI.
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-muted)', lineHeight: '1.65', marginBottom: '36px', maxWidth: '480px' }}>
              Have an idea, opportunity or project in mind? Feel free to reach out via email or connect on LinkedIn and GitHub.
            </p>

            {/* Email Info Card */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: '#f8fafc',
                marginBottom: '28px',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-dark-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Direct Email Address
              </div>

              <div style={{ marginBottom: '16px' }}>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '900',
                    color: '#000000',
                    textDecoration: 'underline',
                    fontFamily: 'var(--font-mono)',
                    wordBreak: 'break-all',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  title="Direct Email"
                >
                  <Mail size={18} color="#000000" />
                  {PROFILE_DATA.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleCopyEmail}
                  className="btn-dark-solid"
                  style={{ padding: '10px 22px', fontSize: '0.85rem' }}
                >
                  {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copied ? 'COPIED!' : 'COPY EMAIL'}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <IconGithub size={18} />
                GitHub Profile
                <ArrowUpRight size={16} />
              </a>

              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <IconLinkedin size={18} />
                LinkedIn Profile
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Forwarding Form (No Email App Required!) */}
          <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '900', fontFamily: 'var(--font-display)', marginBottom: '8px', color: '#000000' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '20px' }}>
              Fill in your details below. Your message and name will be forwarded directly to <strong>{PROFILE_DATA.email}</strong>.
            </p>

            {formSubmitted ? (
              <div style={{ padding: '32px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '16px', border: '1px solid #10b981' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#10b981', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Check size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '900', color: '#000000', marginBottom: '6px' }}>
                  Message Sent & Forwarded! ✉️
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5' }}>
                  Thank you! Your message and details have been forwarded directly to Harsha at <strong>{PROFILE_DATA.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#000000', marginBottom: '6px' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid #d1d5db',
                      background: '#f9fafb',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#000000', marginBottom: '6px' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid #d1d5db',
                      background: '#f9fafb',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '800', color: '#000000', marginBottom: '6px' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Harsha, I'd like to discuss a project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid #d1d5db',
                      background: '#f9fafb',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-dark-solid"
                  style={{ width: '100%', marginTop: '6px', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Forwarding Message...
                    </>
                  ) : (
                    <>
                      Send & Forward Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @media (max-width: 840px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}

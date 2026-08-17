import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '44px' }}>
          <div className="section-badge">
            EXPERIENCE
          </div>
          <h2 className="section-title">
            Work Experience
          </h2>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '32px',
                background: '#f8fafc',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '900', fontFamily: 'var(--font-display)', color: '#000000', marginBottom: '2px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1rem', fontWeight: '800', color: '#4b5563' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: '#000000',
                      color: '#ffffff',
                      fontWeight: '700',
                      fontFamily: 'var(--font-mono)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Calendar size={13} />
                    {exp.period}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dark-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p style={{ fontSize: '1rem', color: 'var(--text-dark-muted)', lineHeight: '1.6', marginBottom: '20px' }}>
                {exp.summary}
              </p>

              {/* Concise Bullet Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.925rem', color: '#000000', lineHeight: '1.5' }}>
                    <CheckCircle2 size={16} color="#000000" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { Code, Bot, Database, Layers, Cpu, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const categoryIcons = {
    'Programming': Code,
    'Generative AI': Bot,
    'RAG & Vector Search': Database,
    'Frameworks': Layers,
    'AI / ML': Cpu,
    'Databases': Database,
    'Tools': Wrench,
  };

  return (
    <section id="skills" className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-badge">
              SKILLS & EXPERTISE
            </div>
            <h2 className="section-title">
              Technical Stack & Domain Knowledge
            </h2>
          </div>

          <div style={{ maxWidth: '440px' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
              Grouped tools and frameworks derived from real project implementations and hands-on internship experience.
            </p>
          </div>
        </div>

        {/* Grouped Skills Grid with Modern Styling */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {SKILLS_CATEGORIES.map((cat, idx) => {
            const IconComponent = categoryIcons[cat.name] || Code;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '28px',
                  background: '#f8fafc',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  {/* Category Header with Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: '#000000',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={18} />
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: '900', fontFamily: 'var(--font-display)', color: '#000000' }}>
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skill Badge Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: '800',
                          padding: '7px 14px',
                          borderRadius: '10px',
                          background: '#ffffff',
                          border: '1px solid rgba(0, 0, 0, 0.12)',
                          color: '#000000',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                        }}
                      >
                        <CheckCircle size={13} color="#10b981" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

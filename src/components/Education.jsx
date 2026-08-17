import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-badge">
            EDUCATION
          </div>
          <h2 className="section-title">
            Academic Degree & Schooling
          </h2>
        </div>

        {/* Education Timeline Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '18px',
                padding: '24px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#000000', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={18} />
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '9999px', background: '#f3f4f6', color: '#4b5563', fontFamily: 'var(--font-mono)' }}>
                    {edu.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#000000', marginBottom: '4px', lineHeight: '1.3' }}>
                  {edu.degree}
                </h3>

                <div style={{ fontSize: '0.875rem', color: '#4b5563', fontWeight: '700', marginBottom: '6px' }}>
                  {edu.institution}
                </div>

                <div style={{ fontSize: '0.825rem', color: 'var(--text-dark-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '14px' }}>
                  <MapPin size={13} />
                  {edu.location}
                </div>
              </div>

              {(edu.score || edu.status) && (
                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-dark-muted)', fontWeight: '600' }}>Grade / Status:</span>
                  <span style={{ fontWeight: '800', color: '#000000', fontFamily: 'var(--font-mono)' }}>
                    {edu.score || edu.status}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

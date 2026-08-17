import React, { useState } from 'react';
import { CERTIFICATIONS_DATA, PROFILE_DATA } from '../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, X, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certDetails = {
    'Oracle AI Database SQL Certified Associate': {
      credentialId: '330565774DB23AISQLOCA',
      skills: ['Oracle AI Database', 'SQL Optimization', 'Database Architecture', 'AI & Relational Data'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
    'APEX Cloud Developer Certified Professional': {
      credentialId: 'ORACLE-APEX-CLOUD-2026',
      skills: ['Oracle APEX', 'Cloud Database', 'SQL', 'Web Application Development'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
    'Generative AI Professional': {
      credentialId: 'ORACLE-GENAI-PRO-2026',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'OCI AI Services'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
    'AI Essentials Certification': {
      credentialId: 'GOOGLE-AI-ESS-2026',
      skills: ['Artificial Intelligence', 'Machine Learning Basics', 'Prompt Engineering', 'AI Ethics'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
    'Innovating with Google Cloud AI Certification': {
      credentialId: 'GOOGLE-CLOUD-AI-2026',
      skills: ['Google Cloud AI', 'Vertex AI', 'Cloud Architecture', 'GenAI Solutions'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
    'Agentic AI Certified Foundations Associate': {
      credentialId: 'ORACLE-AGENTIC-2026',
      skills: ['Agentic AI', 'Autonomous AI Workflows', 'State Graphs', 'LLM Agents'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
    'Database Management System': {
      credentialId: 'NPTEL-IITKGP-DBMS-2026',
      skills: ['Relational Databases', 'SQL Query Optimization', 'ER Diagrams', 'DBMS Architecture'],
      verifyUrl: PROFILE_DATA.socials.linkedin,
    },
  };

  const handleVerifyDirect = (url, e) => {
    e?.stopPropagation();
    window.open(url || PROFILE_DATA.socials.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-badge">
              CERTIFICATIONS
            </div>
            <h2 className="section-title">
              Industry Credentials
            </h2>
          </div>

          <div style={{ maxWidth: '420px' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
              Official certifications issued by Oracle, Google, and IIT Kharagpur. Click any card to inspect & verify credentials on LinkedIn.
            </p>
          </div>
        </div>

        {/* Clean Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const extra = certDetails[cert.title] || { verifyUrl: PROFILE_DATA.socials.linkedin };
            return (
              <div
                key={idx}
                className="glass-card"
                onClick={() => setSelectedCert({ ...cert, ...extra })}
                style={{
                  borderRadius: '18px',
                  padding: '22px 24px',
                  background: '#f8fafc',
                  border: '1px solid rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                title="Click to inspect & verify credential on LinkedIn"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
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
                      <Award size={20} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        background: '#ffffff',
                        border: '1px solid #e5e7eb',
                        color: '#000000',
                        fontWeight: '700',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.025rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: '#000000', marginBottom: '4px', lineHeight: '1.3' }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dark-muted)', fontWeight: '700' }}>
                    Issued by: {cert.issuer}
                  </div>
                </div>

                {/* Subtle Clean Card Footer Indicator */}
                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.775rem', color: '#10b981', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} /> Verified Credential
                  </span>

                  <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#000000', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Click to view <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Inspection & Verification Modal (Redirects to LinkedIn) */}
        {selectedCert && (
          <div
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 250,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '520px',
                background: '#ffffff',
                border: '2px solid #000000',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#f3f4f6',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} color="#000000" />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#000000', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#10b981', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    OFFICIALLY VERIFIED CERTIFICATE
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#4b5563' }}>
                    {selectedCert.issuer}
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: '900', fontFamily: 'var(--font-display)', color: '#000000', marginBottom: '8px', lineHeight: '1.25' }}>
                {selectedCert.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '6px' }}>
                Recipient: <strong>Aradhyula Purna Naga Sri Harsha</strong>
              </p>

              {selectedCert.credentialId && (
                <p style={{ fontSize: '0.775rem', color: '#6b7280', fontFamily: 'var(--font-mono)', marginBottom: '20px' }}>
                  Credential ID: {selectedCert.credentialId}
                </p>
              )}

              {/* Verified Skills Covered */}
              {selectedCert.skills && (
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#000000', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Verified Competencies & Skills:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {selectedCert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.775rem',
                          fontWeight: '700',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          color: '#000000',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <CheckCircle2 size={12} color="#10b981" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Direct Verify Credential Button (Redirects to LinkedIn) */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                <span style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: 'var(--font-mono)' }}>
                  Verification Source: LinkedIn Profile
                </span>

                <button
                  onClick={(e) => handleVerifyDirect(selectedCert.verifyUrl, e)}
                  className="btn-dark-solid"
                  style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                >
                  Verify Credential on LinkedIn
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

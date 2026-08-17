import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Terminal, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Personal Story obeying Human Writing Rules */}
          <div>
            <div className="section-badge">
              ABOUT ME
            </div>

            <h2 className="section-title">
              Aradhyula Purna Naga Sri Harsha
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.05rem', color: 'var(--text-dark-muted)', lineHeight: '1.7' }}>
              <p>
                I'm <strong>Aradhyula Purna Naga Sri Harsha</strong>, an AI & ML undergraduate student at R.M.D Engineering College, spending most of my time building practical applications around LLMs, RAG pipelines, and agentic workflows.
              </p>

              <p>
                Rather than focusing only on theory, I build functional tools — structuring prompt templates, configuring vector databases (ChromaDB, Qdrant), and orchestrating multi-step state graph execution using LangChain and LangGraph.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Stats Card */}
          <div className="glass-card" style={{ padding: '32px', borderRadius: '20px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '900', fontFamily: 'var(--font-display)', marginBottom: '20px', color: '#000000', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '12px' }}>
              Quick Info
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e7eb', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <User size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Full Name</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#000000' }}>Aradhyula Purna Naga Sri Harsha</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e7eb', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Education</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#000000' }}>B.Tech in AI & ML (2024 – 2028)</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-dark-muted)' }}>R.M.D Engineering College, Chennai</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e7eb', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Terminal size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Recent Experience</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#000000' }}>Gen AI with Agentic AI Intern</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-dark-muted)' }}>Nacre Software Services Pvt. Ltd.</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e5e7eb', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-dark-muted)', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#000000' }}>Bapatla, AP / Chennai, TN, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

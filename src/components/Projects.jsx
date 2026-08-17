import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { PROJECTS_DATA } from '../data/portfolioData';
import ProjectVisuals from './ProjectVisuals';
import Works3DBackground from './Works3DBackground';
import { IconGithub } from './SocialIcons';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Generative AI', 'Agentic AI', 'RAG', 'LLM / Data Analysis'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      {/* 3D Wireframe Cubes Background */}
      <Works3DBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="section-badge">
              PROJECTS
            </div>
            <h2 className="section-title">
              Featured AI Projects
            </h2>
          </div>

          <div style={{ maxWidth: '420px' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-dark-muted)', lineHeight: '1.6', marginBottom: '12px' }}>
              Real-world AI applications exploring Generative AI, RAG pipelines, agentic workflows, and tabular data analysis.
            </p>
            <a
              href="https://github.com/A-harsha-a"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#000000',
                fontWeight: '800',
                fontSize: '0.9rem',
                textDecoration: 'none',
              }}
            >
              View GitHub Profile
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: isActive ? '2px solid #000000' : '1px solid #d1d5db',
                  background: isActive ? '#000000' : '#ffffff',
                  color: isActive ? '#ffffff' : '#000000',
                  fontWeight: isActive ? '800' : '600',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '28px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={5}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  height: '100%',
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    borderRadius: '20px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between',
                    background: '#f8fafc',
                    cursor: 'pointer',
                    position: 'relative',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div>
                    {/* Header Badge & Date */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          background: '#000000',
                          color: '#ffffff',
                          fontWeight: '700',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {project.category}
                      </span>

                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dark-muted)', fontFamily: 'var(--font-mono)' }}>
                        {project.date}
                      </span>
                    </div>

                    {/* Software UI Visual Preview */}
                    <div style={{ marginBottom: '20px' }}>
                      <ProjectVisuals visualType={project.visualType} />
                    </div>

                    {/* Title */}
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-display)', marginBottom: '8px', lineHeight: '1.3', display: 'flex', alignItems: 'center', gap: '8px', color: '#000000' }}>
                      <span>{project.title}</span>
                      <ExternalLink size={18} color="#000000" style={{ flexShrink: 0 }} />
                    </h3>

                    {/* Description */}
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Footer Link Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#000000',
                        fontSize: '0.85rem',
                        fontWeight: '800',
                      }}
                    >
                      <IconGithub size={16} />
                      View Repository on GitHub
                    </span>

                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: '#000000',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </a>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .projects-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}

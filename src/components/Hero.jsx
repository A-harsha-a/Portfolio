import React, { useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import { ArrowUpRight, Copy, Check, Sparkles, Bot, Database } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { IconGithub, IconLinkedin } from './SocialIcons';
import WavingCharacter3D from './WavingCharacter3D';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const focusAreas = [
    {
      title: 'Generative AI',
      icon: Sparkles,
      tag: 'LLMs & Gemini APIs',
      desc: 'Developing context-aware conversational assistants with zero-latency multi-turn dialogue memory.',
    },
    {
      title: 'RAG Pipelines',
      icon: Database,
      tag: 'ChromaDB & Semantic Search',
      desc: 'Architecting end-to-end document retrieval systems with semantic chunking to eliminate hallucinations.',
    },
    {
      title: 'Agentic Workflows',
      icon: Bot,
      tag: 'LangGraph State Graphs',
      desc: 'Designing cyclic multi-step execution graphs with conditional routing and dynamic tool calling.',
    },
  ];

  // Automatic Tab Cycler every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % focusAreas.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [focusAreas.length]);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        background: '#030712',
      }}
    >
      {/* Split Screen Grid */}
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          minHeight: '100vh',
          position: 'relative',
        }}
        className="hero-split-grid"
      >
        {/* Left Side: Clean Executive Off-White Tomasz Gajda Layout */}
        <div
          style={{
            background: '#e5e7eb',
            clipPath: 'polygon(0 0, 100% 0, 86% 100%, 0 100%)',
            padding: '140px 60px 80px 80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 2,
            position: 'relative',
          }}
          className="hero-left-pane"
        >
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#047857',
              fontSize: '0.775rem',
              fontWeight: '800',
              fontFamily: 'var(--font-mono)',
              width: 'fit-content',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            AVAILABLE FOR GEN AI & AGENTIC AI ROLES
          </div>

          {/* Small Greeting */}
          <div
            style={{
              fontSize: '1.35rem',
              fontWeight: '700',
              color: '#4b5563',
              marginBottom: '6px',
              fontFamily: 'var(--font-display)',
            }}
          >
            Hi, I am
          </div>

          {/* Full Name Display Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.4vw, 4.1rem)',
              fontWeight: '900',
              lineHeight: '1.06',
              letterSpacing: '-0.04em',
              marginBottom: '10px',
              color: '#000000',
            }}
          >
            Aradhyula Purna Naga Sri Harsha
          </h1>

          {/* Role Label */}
          <div
            style={{
              fontSize: '1.15rem',
              fontWeight: '800',
              color: '#4b5563',
              marginBottom: '18px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            AI & ML Undergraduate • Gen AI & Agentic AI Intern
          </div>

          {/* Capability Focus Pills (Automatically Cycling) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {focusAreas.map((area, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    border: '1px solid #d1d5db',
                    background: isActive ? '#000000' : '#ffffff',
                    color: isActive ? '#ffffff' : '#000000',
                    fontWeight: '800',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive ? '0 4px 14px rgba(0, 0, 0, 0.2)' : 'none',
                  }}
                >
                  ⚡ {area.title}
                </button>
              );
            })}
          </div>

          {/* Professional Narrative & Dynamic Technical Description Box */}
          <div
            style={{
              padding: '18px 22px',
              borderRadius: '16px',
              background: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              marginBottom: '32px',
              maxWidth: '540px',
              transition: 'all 0.3s ease',
            }}
          >
            <p style={{ fontSize: '0.975rem', color: '#374151', lineHeight: '1.65', fontWeight: '500', marginBottom: '10px' }}>
              AI & ML undergraduate engineer with hands-on internship experience building scalable Generative AI applications, Retrieval-Augmented Generation (RAG) pipelines, and agentic state workflows using Python, LangChain, LangGraph, and Gemini APIs.
            </p>
            <div style={{ fontSize: '0.775rem', fontWeight: '800', color: '#ea580c', fontFamily: 'var(--font-mono)', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '8px', transition: 'all 0.3s ease' }}>
              ✦ {focusAreas[activeTab].tag}: {focusAreas[activeTab].desc}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a
              href="#work"
              className="btn-dark-solid"
              style={{
                background: '#000000',
                color: '#ffffff',
              }}
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn-outline-dark"
              style={{
                borderColor: '#000000',
                color: '#000000',
              }}
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Minimalist Square Social Buttons (@ | GitHub | LinkedIn) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ background: '#ffffff', color: '#000000', border: '1px solid #d1d5db' }}
              title={`Send Email directly to ${PROFILE_DATA.email}`}
            >
              @
            </a>

            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ background: '#ffffff', color: '#000000', border: '1px solid #d1d5db' }}
              title="GitHub Profile"
            >
              <IconGithub size={20} />
            </a>

            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ background: '#ffffff', color: '#000000', border: '1px solid #d1d5db' }}
              title="LinkedIn Profile"
            >
              <IconLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Pitch-Black Dark Background with Edge-to-Edge 3D Particle Stage */}
        <div
          style={{
            background: '#030712',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          className="hero-right-pane"
        >
          <WavingCharacter3D />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-left-pane {
            clip-path: none !important;
            padding: 120px 24px 60px 24px !important;
          }
          .hero-right-pane {
            min-height: 520px !important;
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

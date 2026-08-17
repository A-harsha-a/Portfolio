import React, { useState, useEffect, useRef } from 'react';
import coderAvatarImg from '../assets/harsha_coder_avatar.png';

export default function WavingCharacter3D() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Full-Pane Edge-to-Edge 3D Particle Constellation Canvas Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth || window.innerWidth * 0.45;
      canvas.height = container.offsetHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create 55 Floating 3D Particle Nodes across full pane width & height
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1.2,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      color: Math.random() > 0.4 ? '#818cf8' : '#38bdf8',
    }));

    let time = 0;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Constellation Lines across full pane
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.28 - dist / 400})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Render Floating 3D Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const pulseRadius = p.radius + Math.sin(time * 3 + p.x) * 0.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 2. Mouse Parallax Tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * -18;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        perspective: '1200px',
        background: '#030712',
      }}
    >
      {/* 1. Mouse-Following Edge-to-Edge Backlight Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translate(${mousePos.x * 5}px, ${mousePos.y * -5}px)`,
          width: '100%',
          maxWidth: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 75%)',
          animation: 'backlightGlowPulse 4s ease-in-out infinite alternate',
          filter: 'blur(35px)',
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'transform 0.1s linear',
        }}
      />

      {/* 2. Full-Pane Rotating Conic Light Rays */}
      <div
        className="animate-light-rays"
        style={{
          position: 'absolute',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(99, 102, 241, 0.15) 45deg, transparent 90deg, rgba(56, 189, 248, 0.15) 180deg, transparent 270deg)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* 3. Full-Pane Edge-to-Edge Constellation Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* 4. Full-Pane Rotating Orbital Rings */}
      <div
        className="animate-orbit-ring"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1.5px dashed rgba(129, 140, 248, 0.3)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Harsha Animated Coder Avatar Stage with 3D Parallax Tilt */}
      <div
        style={{
          position: 'relative',
          width: '380px',
          height: '380px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transition: 'transform 0.15s cubic-bezier(0.1, 1, 0.1, 1)',
        }}
      >
        {/* Floating Executive Status Badge (Directly on Top Right of Avatar Card) */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-15px',
            padding: '12px 18px',
            borderRadius: '18px',
            background: 'rgba(15, 23, 42, 0.95)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.85), 0 0 25px rgba(56, 189, 248, 0.3)',
            zIndex: 10,
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
            <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }} />
            <span style={{ fontWeight: '900', fontSize: '0.9rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
              AI & ML Engineer
            </span>
          </div>
          <div style={{ fontSize: '0.775rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
            Gen AI Intern @ Nacre Services
          </div>
        </div>

        {/* Glassmorphic Frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 55px rgba(99, 102, 241, 0.45)',
            background: '#090d16',
          }}
        >
          {/* Animated Coder Avatar Image Sitting at MacBook */}
          <img
            src={coderAvatarImg}
            alt="Harsha Animated Coder Avatar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              animation: 'gentleSubtleScale 5s ease-in-out infinite alternate',
            }}
          />

          {/* Vignette Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(3, 7, 18, 0.85) 0%, transparent 45%, rgba(3, 7, 18, 0.15) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      <style>{`
        .animate-orbit-ring {
          animation: spin3DOrbit 22s linear infinite;
        }

        .animate-light-rays {
          animation: spin3DOrbit 16s linear infinite;
        }

        @keyframes backlightGlowPulse {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }

        @keyframes spin3DOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gentleSubtleScale {
          0% { transform: scale(1); }
          100% { transform: scale(1.03); }
        }
      `}</style>
    </div>
  );
}

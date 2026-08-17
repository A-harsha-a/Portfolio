import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeDBackground from './components/ThreeDBackground';
import CommandMenu from './components/CommandMenu';

export default function App() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Interactive 3D Particle Background Canvas */}
      <ThreeDBackground />

      {/* Cmd + K Command Menu Modal */}
      <CommandMenu isOpen={commandMenuOpen} onClose={() => setCommandMenuOpen(false)} />

      {/* Header Navigation */}
      <Navbar openCommandMenu={() => setCommandMenuOpen(true)} />

      {/* Main Portfolio Content */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import CustomCursor from './components/layout/CustomCursor.jsx';
import ParticleField from './components/3d/ParticleField.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import TechStack from './components/sections/TechStack.jsx';
import AIWorkflow from './components/sections/AIWorkflow.jsx';
import Education from './components/sections/Education.jsx';
import Certificates from './components/sections/Certificates.jsx';
import Contact from './components/sections/Contact.jsx';
import { useLenis } from './hooks/useLenis.js';

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#031b15] text-[#fffaf0]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-glow-1 -left-48 top-20" />
        <div className="aurora-glow-2 -right-56 top-[38rem]" />
        <div className="absolute inset-0 opacity-[.12]" style={{backgroundImage:"radial-gradient(rgba(232,201,139,.25) 0.6px, transparent 0.6px)",backgroundSize:"28px 28px"}} />
      </div>
      <ParticleField />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Certificates />
        <About />
        <Projects />
        <TechStack />
        <AIWorkflow />
        <Education />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Nafiya PM · NAAFI.DEV</p>
        <p className="mt-2 font-mono text-[10px] tracking-widest text-emerald-400/70">DESIGNED WITH CURIOSITY · BUILT WITH PURPOSE</p>
      </footer>
    </div>
  );
}

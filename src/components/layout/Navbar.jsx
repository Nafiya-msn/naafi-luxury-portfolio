import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'AI Workflow', href: '#ai-workflow' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['about', 'projects', 'tech', 'ai-workflow', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 sm:py-4' : 'py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-[#06251b]/85 backdrop-blur-xl border border-[#d8b66d]/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e6c27b] to-[#9d783d] p-[1px] shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#06251b] rounded-xl flex items-center justify-center">
                  <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f0d79e] to-[#c99a4e] text-lg">
                    N
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-white text-base leading-tight group-hover:text-[#e2bd75] transition-colors">
                  NAAFI<span className="text-[#e2bd75]">.DEV</span>
                </span>
                <span className="text-[10px] font-mono text-[#e2bd75]/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Dubai, UAE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-[#f0d79e] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full -z-10"
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Desktop Right CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <MagneticButton
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f0d18f] to-[#c89b4b] text-[#10251b] font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all"
              >
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#031b15]/96 lg:hidden flex flex-col justify-between p-8 pt-28"
          >
            <div className="flex flex-col gap-5">
              <span className="text-xs font-mono text-[#e2bd75] tracking-widest uppercase">
                // NAVIGATION
              </span>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="text-2xl sm:text-3xl font-display font-bold text-slate-300 hover:text-[#e2bd75] transition-colors flex items-center justify-between group"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-[#e2bd75]" />
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-[#e2bd75]" />
                <span>Dubai, United Arab Emirates (UTC+4)</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-4 text-center rounded-xl bg-gradient-to-r from-[#f0d18f] to-[#c89b4b] text-[#10251b] font-bold font-heading text-sm tracking-wide uppercase shadow-[0_0_25px_rgba(16,185,129,0.4)]"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

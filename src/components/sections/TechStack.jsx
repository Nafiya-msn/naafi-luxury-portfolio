import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Atom, 
  Cpu, 
  Network, 
  Database, 
  Wind, 
  Layers, 
  GitBranch, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Terminal,
  Globe
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { skillCategories } from '../../data/skills';

// Icon mapping helper
const iconMap = {
  Code2,
  Palette,
  FileCode2,
  Atom,
  Cpu,
  Network,
  Database,
  Wind,
  Layers,
  GitBranch,
  Github,
  Sparkles,
  Zap,
  Globe,
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('all');

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const displayedSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter((skill) => skill.categoryId === activeTab);

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'styling', label: 'Styling & Systems' },
    { id: 'tooling', label: 'DevOps & Git' },
    { id: 'delivery', label: 'Motion & Delivery' },
  ];

  return (
    <section id="tech" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="// 03. CORE TECHNOLOGIES"
          title="Engineered With Modern,"
          highlight="Battle-Tested Tools."
          subtitle="A comprehensive toolkit spanning pixel-perfect frontend engineering, robust backend runtimes, NoSQL databases, and strict version control."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'text-slate-400 hover:text-white bg-white/[0.03] border border-white/10 hover:border-emerald-500/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTechTab"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full -z-10"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {displayedSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="glass-card rounded-2xl p-6 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: skill.color }}
                  />

                  <div>
                    {/* Header with Icon and Level badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                        style={{
                          backgroundColor: `${skill.color}15`,
                          color: skill.color,
                          border: `1px solid ${skill.color}35`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Title & Role */}
                    <h4 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {skill.name}
                    </h4>
                    <div className="text-xs font-mono text-slate-400 mb-3">
                      {skill.experience}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">
                      {skill.categoryTitle.split(' ')[0]}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Zap className="w-3 h-3 text-emerald-400" /> Production
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Architectural Principles Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 rounded-3xl glass-card border border-emerald-500/20 bg-gradient-to-r from-emerald-950/20 via-transparent to-cyan-950/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                Architecture Standard: Separation of Concerns & Clean Code
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Every project enforces modular folder structures, decoupled state machines, reusable design components, and comprehensive Git history.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
              Built through real projects
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

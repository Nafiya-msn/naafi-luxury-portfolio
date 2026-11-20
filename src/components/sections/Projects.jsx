import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight, Utensils, BookOpen, Activity, Flame, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard3D from '../3d/ProjectCard3D';
import MagneticButton from '../ui/MagneticButton';
import { projects } from '../../data/projects';

// Custom visual simulation renders for each project preview
function ProjectPreviewDisplay({ theme }) {
  if (theme === 'culinary') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-[#0c1626] via-[#08101e] to-[#040810] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Mock Navigation Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-white tracking-wider">Restaurant<span className="text-emerald-400">Pro</span></span>
              <span className="block text-[9px] font-mono text-slate-400">Fine Dining & Reservation</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
              Live Order Flow
            </span>
          </div>
        </div>

        {/* Mock Interactive Menu Cards in Hero */}
        <div className="grid grid-cols-2 gap-3 my-4 relative z-10">
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-colors">
            <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-emerald-950 to-teal-900/60 mb-2.5 flex items-center justify-center text-emerald-300">
              <span className="text-2xl">🥩</span>
            </div>
            <div className="text-xs font-heading font-semibold text-white">Truffle Wagyu Glaze</div>
            <div className="flex items-center justify-between mt-1 text-[11px] font-mono">
              <span className="text-emerald-400 font-bold">$48.00</span>
              <span className="text-slate-400 text-[10px]">Chef's Special</span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 transition-colors">
            <div className="w-full h-16 rounded-xl bg-gradient-to-tr from-cyan-950 to-sky-900/60 mb-2.5 flex items-center justify-center text-cyan-300">
              <span className="text-2xl">🍣</span>
            </div>
            <div className="text-xs font-heading font-semibold text-white">Hamachi Crudo</div>
            <div className="flex items-center justify-between mt-1 text-[11px] font-mono">
              <span className="text-cyan-400 font-bold">$34.00</span>
              <span className="text-slate-400 text-[10px]">Artisanal</span>
            </div>
          </div>
        </div>

        {/* Mock Live Order Summary Footer */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-[11px] font-mono relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Table #14 Reserved</span>
          </div>
          <span className="text-emerald-300 font-semibold">Sub-second Sync</span>
        </div>
      </div>
    );
  }

  if (theme === 'linguistic') {
    return (
      <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-[#081326] via-[#050e1c] to-[#030710] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
        {/* Cyan Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Mock Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-white tracking-wider">Islamic<span className="text-cyan-400">Sarf</span></span>
              <span className="block text-[9px] font-mono text-slate-400">Morphological Grammar Engine</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
              Pattern Explorer
            </span>
          </div>
        </div>

        {/* Mock Arabic Conjugation Matrix */}
        <div className="my-4 space-y-2 relative z-10">
          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] text-[10px] font-mono text-slate-400">
            <span>Root: ف - ع - ل (Fa-'a-la)</span>
            <span className="text-cyan-400">Tense: Past (الماضي)</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/30">
              <div className="text-lg font-bold text-cyan-300 font-serif" dir="rtl">فَعَلَ</div>
              <div className="text-[9px] font-mono text-slate-400 mt-1">3rd Person Sing. M</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="text-lg font-bold text-white font-serif" dir="rtl">فَعَلَا</div>
              <div className="text-[9px] font-mono text-slate-400 mt-1">3rd Person Dual M</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="text-lg font-bold text-white font-serif" dir="rtl">فَعَلُوا</div>
              <div className="text-[9px] font-mono text-slate-400 mt-1">3rd Person Plural M</div>
            </div>
          </div>
        </div>

        {/* Morphological Inflection Indicator */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-[11px] font-mono relative z-10">
          <span className="text-slate-400">Algorithmic Derivation:</span>
          <span className="text-cyan-300 font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400" /> 14 Verb Conjugations
          </span>
        </div>
      </div>
    );
  }

  // Wellness / Diet Planner
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-[#081524] via-[#05101d] to-[#030810] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden group">
      {/* Sky Blue Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mock Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-bold text-xs text-white tracking-wider">Diet<span className="text-sky-400">Planner</span></span>
            <span className="block text-[9px] font-mono text-slate-400">Biometric Calorie & Macro Engine</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-sky-500/15 text-[10px] font-mono text-sky-300 border border-sky-500/30 flex items-center gap-1">
            <Flame className="w-3 h-3 text-amber-400" />
            TDEE Active
          </span>
        </div>
      </div>

      {/* Macro Telemetry Rings & Bars */}
      <div className="my-4 grid grid-cols-3 gap-2 text-center relative z-10">
        <div className="p-3 rounded-xl bg-white/[0.04] border border-sky-500/30">
          <div className="text-xs font-mono text-slate-400">PROTEIN</div>
          <div className="text-base font-mono font-bold text-sky-400 mt-1">165g</div>
          <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-sky-400 h-full w-[85%]" />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.04] border border-emerald-500/30">
          <div className="text-xs font-mono text-slate-400">CARBS</div>
          <div className="text-base font-mono font-bold text-emerald-400 mt-1">210g</div>
          <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-emerald-400 h-full w-[70%]" />
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.04] border border-amber-500/30">
          <div className="text-xs font-mono text-slate-400">FATS</div>
          <div className="text-base font-mono font-bold text-amber-400 mt-1">62g</div>
          <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
            <div className="bg-amber-400 h-full w-[60%]" />
          </div>
        </div>
      </div>

      {/* Daily Goal Telemetry */}
      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between text-[11px] font-mono relative z-10">
        <span className="text-slate-400">Daily Calorie Target:</span>
        <span className="text-sky-300 font-semibold flex items-center gap-1.5">
          2,150 kcal <span className="text-[10px] text-emerald-400">(-350 deficit)</span>
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="// 02. FEATURED CASE STUDIES"
          title="Flagship Projects,"
          highlight="Zero Placeholders."
          subtitle="Explore fully deployed, production-grade applications built with precision architecture, clean state management, and modern interactive aesthetics."
        />

        {/* Project Cards Stream */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard3D accent={project.accent}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    
                    {/* Left: Interactive App Mockup Preview (5 Cols) */}
                    <div className="lg:col-span-5">
                      <ProjectPreviewDisplay theme={project.previewTheme} />
                    </div>

                    {/* Right: Project Details & Specifications (7 Cols) */}
                    <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                      <div>
                        
                        {/* Meta header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span
                            className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border"
                            style={{
                              backgroundColor: `${project.accent}15`,
                              borderColor: `${project.accent}40`,
                              color: project.accent,
                            }}
                          >
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            0{index + 1} // CASE STUDY
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-emerald-400/90 mb-4 font-medium">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Key Highlights Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2
                                className="w-4 h-4 flex-shrink-0 mt-0.5"
                                style={{ color: project.accent }}
                              />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology Stack Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>

                      {/* Bottom Metrics Bar & CTAs */}
                      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        
                        {/* Stats Strip */}
                        <div className="flex items-center gap-4 sm:gap-6">
                          {project.stats.map((stat, sIdx) => (
                            <div key={sIdx}>
                              <div className="text-sm sm:text-base font-mono font-bold text-white">
                                {stat.value}
                              </div>
                              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                          <MagneticButton
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-heading font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                          >
                            Live Demo
                            <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                          </MagneticButton>

                          <MagneticButton
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/[0.05] border border-white/15 text-slate-300 hover:text-white hover:border-emerald-400/50 transition-colors"
                            aria-label={`View ${project.title} source on GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </MagneticButton>
                        </div>

                      </div>

                    </div>

                  </div>
                </ProjectCard3D>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, MapPin, Sparkles, Code2, Braces, Cpu, Layers3 } from 'lucide-react';

const reveal = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section id="home" className="hero-shell hero-v2 relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:min-h-[790px] lg:pb-20 lg:pt-32">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-ribbon" aria-hidden="true" />
      <div className="hero-v2-sweep" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.02fr_.98fr] lg:gap-14">
        <div className="hero-copy relative z-20 order-2 text-center lg:order-1 lg:py-8 lg:text-left">
          <motion.div initial={{opacity:0,y:18,filter:'blur(8px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:.8}}
            className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em]">
            <span className="hero-live-dot"/><Sparkles className="h-4 w-4"/> Open to junior developer opportunities
          </motion.div>
          <motion.p initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.12}}
            className="mb-4 text-base font-medium text-[var(--muted)]">Hello, I’m <span className="hero-name">Nafiya PM</span></motion.p>
          <motion.h1 initial={{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{duration:.85,delay:.2}}
            className="portfolio-display hero-title text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-7xl lg:text-[5.15rem]">
            I build digital<br/><span className="hero-title-accent">experiences.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.32}}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg lg:mx-0">
            Full Stack Developer focused on thoughtful interfaces, useful products and clean, responsive web experiences.
          </motion.p>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.42}}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" onClick={(e)=>{e.preventDefault();scrollTo('#projects')}} className="hero-primary inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold">
              Explore my work <ArrowUpRight className="ml-2 h-4 w-4"/>
            </a>
            <a href="/Nafiya-PM-CV.pdf" className="hero-secondary inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold">
              Download CV <Download className="ml-2 h-4 w-4"/>
            </a>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.62,duration:.6}}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <a aria-label="GitHub" href="https://github.com/Nafiya-msn" target="_blank" rel="noreferrer" className="social-link"><Github/></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/nafiya-pm-03901a447" target="_blank" rel="noreferrer" className="social-link"><Linkedin/></a>
            <span className="ml-2 inline-flex items-center gap-2 text-xs text-[var(--muted)]"><MapPin className="h-3.5 w-3.5"/> Dubai, UAE</span>
          </motion.div>
          <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{delay:.72,duration:.6}}
            className="hero-code-note mt-9 mx-auto flex max-w-[390px] items-center gap-3 rounded-2xl px-4 py-3 text-left lg:mx-0">
            <span className="hero-code-icon"><Code2 className="h-5 w-5"/></span>
            <span><b className="block text-xs">Curious by design</b><small className="text-[11px] text-[var(--muted)]">Learning, building and improving every day.</small></span>
            <span className="ml-auto text-[10px] font-mono text-[var(--accent)]">N / 01</span>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0,scale:.92,x:24}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1,delay:.16}}
          className="hero-photo-stage hero-photo-stage-v2 relative order-1 mx-auto block w-full max-w-[540px] lg:order-2">
          <div className="hero-photo-orbit hero-photo-orbit-one" aria-hidden="true"/>
          <div className="hero-photo-orbit hero-photo-orbit-two" aria-hidden="true"/>
          <div className="hero-photo-index"><span>PROFILE / 2026</span><span>01 — 04</span></div>
          <div className="photo-backplate absolute inset-[6%_2%_0_10%] rounded-[2.2rem]" />
          <motion.div animate={{y:[0,-7,0],rotate:[0,.35,0]}} transition={{duration:7,repeat:Infinity,ease:'easeInOut'}} className="photo-frame photo-frame-v2 relative overflow-hidden rounded-[2rem]">
            <img src="/images/nafiya-workspace.png" alt="Nafiya PM working at her laptop" width="900" height="1125" loading="eager" fetchPriority="high" decoding="async" className="hero-work-photo hero-work-photo-v2 block w-full object-cover"/>
            <div className="photo-caption photo-caption-v2 absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div><span className="mb-2 block text-[9px] font-bold uppercase tracking-[.25em]">The person behind the code</span><strong className="portfolio-display text-2xl sm:text-3xl">Nafiya PM</strong></div>
              <span className="rounded-full border border-white/30 bg-black/25 px-3 py-2 text-[10px] font-semibold backdrop-blur-md">Full Stack Developer</span>
            </div>
          </motion.div>
          <motion.div animate={{y:[0,-11,0],rotate:[0,2,0]}} transition={{duration:5.8,repeat:Infinity,ease:'easeInOut'}}
            className="photo-float-card hero-float-top absolute -left-2 top-[17%] flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-7">
            <span className="photo-float-mark"><Braces className="h-5 w-5"/></span><span className="text-xs font-semibold leading-5">Thoughtful UI<br/>and clean code</span>
          </motion.div>
          <motion.div animate={{y:[0,9,0],rotate:[0,-1.5,0]}} transition={{duration:6.4,repeat:Infinity,ease:'easeInOut'}}
            className="photo-float-card photo-float-card-bottom hero-float-bottom absolute -right-1 bottom-[13%] rounded-2xl px-4 py-3 sm:-right-6">
            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[.2em] text-[var(--muted)]"><Cpu className="h-3.5 w-3.5"/> Core stack</span>
            <strong className="mt-1 block text-xs">React · JavaScript · MERN</strong>
          </motion.div>
          <motion.div animate={{rotate:360}} transition={{duration:24,repeat:Infinity,ease:'linear'}} className="hero-orbit-token absolute right-[2%] top-[7%]"><Layers3 className="h-5 w-5"/></motion.div>
          <div className="hero-photo-footnote"><span>CREATIVE DEVELOPMENT</span><span>BASED IN DUBAI, UAE</span></div>
        </motion.div>
      </div>
      <button onClick={()=>scrollTo('#certificates')} className="hero-scroll mx-auto mt-9 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.25em]">
        Scroll to explore <ArrowDownRight className="h-4 w-4"/>
      </button>
    </section>
  );
}

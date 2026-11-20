import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Sparkles, Terminal, Cpu, ArrowUpRight, Workflow, ShieldCheck, WandSparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { aiWorkflow } from '../../data/aiTools';

const iconMap = { Bot, Brain, Sparkles, Terminal, Cpu };
const stages = [
  { n: '01', title: 'Explore', detail: 'Understand the brief, user needs and constraints before writing code.' },
  { n: '02', title: 'Prototype', detail: 'Use AI tools to explore approaches and accelerate repetitive setup.' },
  { n: '03', title: 'Build & verify', detail: 'Implement, inspect the output, test interactions and refine the result.' },
];

export default function AIWorkflow() {
  const [active, setActive] = useState(aiWorkflow[0]?.id);
  const selected = aiWorkflow.find(t => t.id === active) || aiWorkflow[0];
  return (
    <section id="ai-workflow" className="ai-lab relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="ai-lab-grid" aria-hidden="true"/><div className="ai-lab-stamp">EXPERIMENT / LEARN / REFINE</div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading tag="CHAPTER / 04 — MY TOOLKIT" title="A thoughtful" highlight="AI-assisted workflow." subtitle="I use AI as a practical development assistant — to explore ideas, understand errors and move through iterations faster. The final code and decisions still need my review." />
        <div className="ai-process-rail mt-14">{stages.map((s,i)=><motion.div key={s.n} className="ai-process-step" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}}><span>{s.n}</span><div><h3>{s.title}</h3><p>{s.detail}</p></div></motion.div>)}</div>
        <div className="ai-console-layout mt-14">
          <div className="ai-tool-list"><div className="ai-list-label"><Workflow size={15}/> TOOLS I EXPLORE</div>{aiWorkflow.map((tool,i)=>{const Icon=iconMap[tool.icon]||Bot;return <button key={tool.id} onClick={()=>setActive(tool.id)} className={`ai-tool-tab ${active===tool.id?'is-active':''}`}><span className="ai-tool-index">0{i+1}</span><span className="ai-tool-icon"><Icon size={19}/></span><span className="ai-tool-name">{tool.name}</span><ArrowUpRight size={16}/></button>})}</div>
          <div className="ai-tool-detail"><div className="ai-detail-top"><span>SELECTED TOOL / WORKSPACE</span><span className="ai-live-dot">IN MY WORKFLOW</span></div>
            <AnimatePresence mode="wait">{selected && <motion.div key={selected.id} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.25}} className="ai-detail-body"><div className="ai-detail-icon">{React.createElement(iconMap[selected.icon]||Bot,{size:28})}</div><p className="ai-detail-category">{selected.category}</p><h3>{selected.name}</h3><p className="ai-detail-description">{selected.description}</p><div className="ai-detail-badge">{selected.badge}</div>{selected.practices?.length>0&&<div className="ai-practice-list">{selected.practices.map((p,i)=><div key={i}><span>0{i+1}</span>{p}</div>)}</div>}</motion.div>}</AnimatePresence>
            <div className="ai-detail-foot"><ShieldCheck size={16}/><span>AI supports the process; I review and validate the result.</span></div>
          </div>
        </div>
        <div className="ai-lab-footer"><WandSparkles size={17}/><span>Curious by nature. Careful with the output.</span></div>
      </div>
    </section>
  );
}

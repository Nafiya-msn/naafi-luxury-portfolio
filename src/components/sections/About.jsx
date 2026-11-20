import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Code2, Compass, Layers3, MapPin, Sparkles, Terminal, Workflow } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const chapters = [
  { n: '01', title: 'Design-minded development', text: 'I enjoy turning a clear idea into an interface that feels intuitive, responsive and considered.', icon: Compass, tags: ['Responsive UI', 'Interaction design', 'Accessibility'] },
  { n: '02', title: 'From interface to application', text: 'I build with JavaScript and React, and explore the full application flow through APIs, server logic and databases.', icon: Layers3, tags: ['React', 'Node.js', 'MongoDB'] },
  { n: '03', title: 'Always learning by building', text: 'Personal projects help me practise new tools, solve real problems and strengthen my development workflow.', icon: Terminal, tags: ['Project-based learning', 'Git', 'Deployment'] },
];

export default function About() {
  return (
    <section id="about" className="about-chapter relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="about-orbit" aria-hidden="true" /><div className="about-index">CHAPTER / 01</div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading tag="A LITTLE ABOUT MY APPROACH" title="Curiosity, shaped" highlight="into useful things." subtitle="I’m Nafiya — a developer who cares about thoughtful interfaces, clean implementation and the details that make digital products easier to use." />
        <div className="about-editorial-grid mt-16">
          <motion.aside initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-side-note">
            <span className="about-monogram">N.</span>
            <p className="about-side-kicker">THE DEVELOPER'S NOTE</p>
            <h3>Good technology should feel simple to the person using it.</h3>
            <div className="about-location"><MapPin size={15}/> Dubai, United Arab Emirates</div>
            <div className="about-note-line" />
            <span className="about-note-foot">OPEN TO JUNIOR WEB DEVELOPMENT OPPORTUNITIES</span>
          </motion.aside>
          <div className="about-chapters">
            {chapters.map((item, i) => { const Icon = item.icon; return (
              <motion.article key={item.n} className="about-chapter-row" initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .12, duration: .65 }}>
                <div className="about-chapter-number">{item.n}</div>
                <div className="about-chapter-content"><div className="about-chapter-title"><Icon size={19}/><h3>{item.title}</h3></div><p>{item.text}</p><div className="about-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                <ArrowDownRight className="about-row-arrow" size={22}/>
              </motion.article>
            )})}
          </div>
        </div>
        <motion.div className="about-bottom-statement" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><Sparkles size={18}/><span>Learn with intention. Build with care. Keep improving.</span><Code2 size={18}/></motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, ArrowUpRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { educationData } from '../../data/education';

export default function Education() {
  return (
    <section id="education" className="education-atlas relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="education-coordinate" aria-hidden="true">N / 25.2048° N · 55.2708° E</div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading tag="CHAPTER / 05 — LEARNING RECORD" title="The foundations" highlight="behind the work." subtitle="A learning path built through formal study, focused training and hands-on project practice." />
        <div className="education-atlas-grid mt-16">
          <div className="education-axis"><span>LEARNING PATH</span><div className="education-axis-line"><i/><i/></div><span>CONTINUOUS</span></div>
          <div className="education-records">
            {educationData.map((item,index)=>{const isBca=index===0;const Icon=isBca?GraduationCap:Award;return <motion.article key={item.degree} className={`education-record ${isBca?'education-record-primary':'education-record-secondary'}`} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.65,delay:index*.16}}>
              <div className="education-record-top"><span className="education-record-no">RECORD 0{index+1}</span><span className="education-record-period"><CalendarDays size={14}/>{item.period}</span></div>
              <div className="education-record-main"><div className="education-record-icon"><Icon size={27}/></div><div className="min-w-0"><p className="education-record-badge">{item.badge}</p><h3>{item.degree}</h3><p className="education-institution">{item.institution}</p></div></div>
              <p className="education-description">{isBca?'Currently pursuing my undergraduate degree, building a foundation in computing and software concepts.': 'Completed the Full Stack Web Development (MERN) course with a Restaurant Management System project.'}</p>
              <div className="education-focus"><span>AREAS OF STUDY</span><div>{item.keyFocusAreas.slice(0,4).map((f,i)=><span key={f}><CheckCircle2 size={13}/>{f}</span>)}</div></div>
              <div className="education-record-bottom"><span>{isBca?'UNDERGRADUATE · IN PROGRESS':'COMPLETED · AUGUST 2026'}</span><BookOpen size={16}/></div>
            </motion.article>})}
          </div>
        </div>
      </div>
    </section>
  );
}

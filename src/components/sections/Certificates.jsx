import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const items = [
  {
    title: 'Illinois Tech Certified',
    issuer: 'Illinois Institute of Technology · Entri Elevate',
    detail: 'A digital credential displayed on my Credly profile.',
    image: '/certificates/illinois-tech-credly-badge.png',
    action: 'View on Credly',
    href: 'https://www.credly.com/users/nafiya-pm',
    badge: 'Verified on Credly',
  },
  {
    title: 'Full Stack Web Development (MERN)',
    issuer: 'Entri',
    detail: 'Successfully completed the Full Stack Web Development (MERN) course with a Restaurant Management System project.',
    image: '/certificates/nafiya-full-stack-web-development-certificate.pdf',
    action: 'View Certificate',
    href: '/certificates/nafiya-full-stack-web-development-certificate.pdf',
    badge: 'August 2026',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative px-5 pb-24 pt-10 sm:px-8 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="mb-9 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.24em] text-[#dfbb70]">
            <Award className="h-4 w-4"/> Credentials & milestones
          </div>
          <h2 className="portfolio-display text-3xl text-[#fff8eb] sm:text-4xl">My Certificates & Achievements</h2>
          <p className="mt-3 text-sm text-[#b9cbbf] sm:text-base">Certifications that validate my skills and learning journey.</p>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item,i)=>(
            <motion.article key={item.title} initial={{opacity:0,y:26}} whileInView={{opacity:1,y:0}}
              viewport={{once:true,amount:.2}} transition={{duration:.6,delay:i*.12}}
              whileHover={{y:-5}} className="glass-card flex flex-col items-center gap-6 rounded-[26px] p-6 sm:flex-row sm:p-7">
              <div className="flex h-52 w-full shrink-0 items-center justify-center rounded-2xl border border-[#d9bd80]/20 bg-[#f7f3e9] p-5 sm:h-52 sm:w-40">
                {i===0 ? <img src={item.image} alt="Illinois Tech Certified Entri Elevate badge" className="max-h-full max-w-full object-contain"/> :
                  <div className="flex h-full w-full flex-col items-center justify-center text-center text-[#4b3820]">
                    <div className="mb-3 rounded-full border border-[#c59a4e] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#9a6c27]">Entri</div>
                    <div className="portfolio-display text-xl leading-tight text-[#a77a2e]">Certificate<br/>of Completion</div>
                    <div className="my-3 h-px w-16 bg-[#c59a4e]"/>
                    <div className="text-xs font-bold tracking-wide">NAFIYA PM</div>
                    <div className="mt-2 text-[9px]">Full Stack Web Development (MERN)</div>
                  </div>}
              </div>
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <h3 className="portfolio-display text-xl font-semibold leading-snug text-[#fff7e8]">{item.title}</h3>
                <p className="mt-2 text-xs font-medium text-[#dfbd79]">{item.issuer}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-[10px] font-medium text-emerald-200">
                  <ShieldCheck className="h-3.5 w-3.5"/>{item.badge}
                </span>
                <p className="mt-3 text-sm leading-6 text-[#c3d2c8]">{item.detail}</p>
                <a href={item.href} target="_blank" rel="noreferrer"
                  className="gold-button mt-5 inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold">
                  {item.action}<ExternalLink className="h-3.5 w-3.5"/>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

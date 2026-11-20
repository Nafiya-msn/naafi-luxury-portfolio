import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Linkedin, Github, MessageCircle, MapPin, Send, MoveUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  const [copied,setCopied]=useState(false);
  const email='nafianas98@gmail.com';
  const links=[
    {label:'LinkedIn',hint:'Professional profile',href:'https://www.linkedin.com/in/nafiya-pm-03901a447',Icon:Linkedin},
    {label:'GitHub',hint:'Code & repositories',href:'https://github.com/Nafiya-msn',Icon:Github},
    {label:'WhatsApp',hint:'Start a conversation',href:'https://wa.me/?text='+encodeURIComponent('Hi Nafiya, I viewed your portfolio and would like to connect.'),Icon:MessageCircle},
  ];
  const copy=async()=>{try{await navigator.clipboard.writeText(email);setCopied(true);setTimeout(()=>setCopied(false),2200)}catch{window.location.href=`mailto:${email}`}};
  return (
    <section id="contact" className="contact-terminal relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8">
      <div className="contact-terminal-lines" aria-hidden="true"/><div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading tag="CHAPTER / 06 — THE NEXT CONVERSATION" title="Have a good idea?" highlight="Let’s talk." subtitle="I’m open to junior web development opportunities and conversations about building useful digital experiences." />
        <div className="contact-terminal-shell mt-16">
          <div className="contact-terminal-bar"><div className="contact-window-dots"><i/><i/><i/></div><span>NAAFI.DEV / CONTACT</span><span className="contact-terminal-status">● AVAILABLE FOR OPPORTUNITIES</span></div>
          <div className="contact-terminal-content">
            <motion.div className="contact-big-message" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><span className="contact-eyebrow">YOUR NEXT DEVELOPER CONNECTION</span><h3>Let’s make<br/><em>something matter.</em></h3><p>Have a role, a project idea or simply want to connect? Choose a channel and say hello.</p><div className="contact-location"><MapPin size={16}/> Dubai, UAE <span>·</span> Open to opportunities</div></motion.div>
            <div className="contact-channel-stack">
              <button className="contact-email-card" onClick={copy}><span className="contact-channel-icon"><Mail size={21}/></span><span className="contact-channel-copy"><small>DIRECT EMAIL</small><strong>{email}</strong></span><span className="contact-copy-action">{copied?<Check size={18}/>:<Copy size={18}/>}</span></button>
              {links.map(({label,hint,href,Icon},i)=><motion.a key={label} href={href} target="_blank" rel="noreferrer" className="contact-social-row" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.1}}><span className="contact-channel-icon"><Icon size={20}/></span><span className="contact-channel-copy"><strong>{label}</strong><small>{hint}</small></span><MoveUpRight size={18}/></motion.a>)}
              <a className="contact-cta" href={`mailto:${email}?subject=${encodeURIComponent('Opportunity for Nafiya PM')}`}><span><Send size={16}/> START A CONVERSATION</span><ArrowUpRight size={20}/></a>
            </div>
          </div>
          <div className="contact-terminal-foot"><span>THANK YOU FOR VISITING</span><span>BUILT WITH CURIOSITY <b>✳</b> NAAFI.DEV</span></div>
        </div>
      </div>
    </section>
  );
}

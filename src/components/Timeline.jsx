import React,{useState,useEffect,useRef} from 'react';
import {journey} from '../data/profile.js';
const logoFiles={'Calibo AI Academy · India':'calibo.png','KIA India':'kia.png','Codeyoung':'codeyoung.png','KL University · Data Science specialization':'kl.png','Bapatla Engineering College':'bapatla.png'};
export default function Timeline({education=false}){
 const items=education?journey.slice(3):journey.slice(0,3);
 const [index,setIndex]=useState(0);const root=useRef(null);
 useEffect(()=>{
  if(!root.current)return;
  const nodes=root.current.querySelectorAll('[data-step]');
  const obs=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setIndex(Number(entry.target.dataset.step));},{rootMargin:'-35% 0px -35% 0px',threshold:.15});
  nodes.forEach(n=>obs.observe(n));return()=>obs.disconnect();
 },[education]);
 useEffect(()=>{
  const section=root.current;
  if(!section)return;
  const track=section.querySelector('.story-track');
  let frame=0;
  const update=()=>{
   frame=0;
   const bounds=track.getBoundingClientRect();
   const viewport=window.innerHeight;
   const progress=Math.max(0,Math.min(1,(viewport*.64-bounds.top)/Math.max(1,bounds.height)));
   track.style.setProperty('--story-progress',(progress*100).toFixed(2)+'%');
   section.style.setProperty('--clock-turn',(progress*400).toFixed(1)+'deg');
   section.style.setProperty('--clock-turn-small',(progress*112).toFixed(1)+'deg');
  };
  const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)};
  update();
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  return()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);if(frame)cancelAnimationFrame(frame)};
 },[education]);
 return <section ref={root} id={education?'education':'journey'} className={'story-section '+(education?'academic':'professional')}>
  <div className="story-sticky"><span className="eyebrow">{education?'02 / EDUCATION':'01 / PROFESSIONAL EXPERIENCE'}</span><h2>{education?'An engineering foundation.':'The journey so far.'}</h2><div className="story-visual-clock story-static-clock" aria-hidden="true"><span className="clock-face"><i className="clock-hand"/><i className="clock-minute"/><b>✦</b></span><small>THE JOURNEY CONTINUES</small></div><div key={index} className="story-year">{items[index].year}</div><div className="story-progress">{items.map((j,i)=><button key={i} aria-label={j.org} aria-current={index===i?'step':undefined} onClick={()=>root.current.querySelector(`[data-step="${i}"]`)?.scrollIntoView({behavior:'smooth',block:'center'})}>{String(i+1).padStart(2,'0')}</button>)}</div></div>
  <div className="story-track">{items.map((j,i)=><article data-step={i} key={j.title} className={'story-entry '+(i===index?'active':'')+' '+(j.current?'current-role':'')}>
   <span className="story-pin"/><div className="story-logo" aria-label={`${j.org} identity mark`}>{logoFiles[j.org]?<img src={'/logos/'+logoFiles[j.org]} alt={j.org+' logo'} loading="lazy"/>:j.logo||j.org.split(' ')[0]}</div><div className="story-meta"><span className="eyebrow">{j.date}</span>{j.current&&<span className="now-badge">● CURRENT</span>}</div>
   <h3>{j.title}</h3><p className="org">{j.org}</p><ul>{j.points.map(t=><li key={t}>{t}</li>)}</ul>
  </article>)}</div>
 </section>
}

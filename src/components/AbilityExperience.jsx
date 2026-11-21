import React,{useEffect,useState} from 'react';
import AbilityCard from './AbilityCard.jsx';
export default function AbilityExperience(){
 const [progress,setProgress]=useState(0);
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){setProgress(100);return;}
 const start=performance.now();let id;
 const tick=(now)=>{const t=Math.min(1,(now-start)/1850);const eased=1-Math.pow(1-t,2.5);setProgress(Math.min(100,Math.round(eased*100)));if(t<1)id=requestAnimationFrame(tick)};
 id=requestAnimationFrame(tick);return()=>cancelAnimationFrame(id);
 },[]);
 return <div className="ability-experience">
 {progress<100?<div className="ability-entry" aria-live="polite"><div className="ability-entry-orbit" aria-hidden="true"><span className="robot-ring"/><span className="robot-core">✳</span><span className="robot-ring ring-two"/></div><span className="eyebrow">INITIALIZING ABILITY CARD</span><strong>{String(progress).padStart(3,'0')}<small> / 100</small></strong><div className="ability-entry-track"><i style={{width:progress+'%'}}/></div></div>:<div className="ability-reveal"><AbilityCard/></div>}
 </div>;
}

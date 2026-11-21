import React,{useEffect,useState} from 'react';

/**
 * 2-stage opening:
 * 1) short 2-second percentage counter
 * 2) existing editorial reveal sequence
 */
export default function OpeningSequence(){
 const [phase,setPhase]=useState('count');
 const [count,setCount]=useState(0);
 const [typed,setTyped]=useState('');
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
   setCount(100);
   setPhase('main');
   return;
  }
  let raf=0;
  const start=performance.now();
  const step=(now)=>{
   const t=Math.min(1,(now-start)/2000);
   const eased=t<.94 ? 1-Math.pow(1-t/.94,2.0) : 1;
   setCount(Math.round(eased*100));
   setTyped('LOADING YOUR EXPERIENCE'.slice(0,Math.min(23,Math.floor(t*28))));
   if(t<1) raf=requestAnimationFrame(step);
   else {
    setCount(100);
    setTimeout(()=>setPhase('main'),90);
   }
  };
  raf=requestAnimationFrame(step);
  return ()=>cancelAnimationFrame(raf);
 },[]);

 return <div className={`opening-sequence ${phase==='count'?'is-counting':'is-main'}`} role="status" aria-label="Opening Madhu's portfolio">
   {phase==='count' ? (
    <div className="opening-count-wrap">
      <div className="opening-topline"><span>PORTFOLIO / 2026</span><span>AI · ML · DATA</span></div>
      <div className="opening-count-center">
        <div className="opening-intelligence-orbit" aria-hidden="true">
          <svg viewBox="0 0 130 130" className="opening-network-svg"><circle cx="65" cy="65" r="47" className="opening-orbit-ring"/><circle cx="65" cy="65" r="32" className="opening-orbit-inner"/><path d="M40 49 L63 35 L88 52 L82 86 L53 89 L40 49 M63 35 L53 89 M40 49 L82 86 M88 52 L53 89" className="opening-network-lines"/><circle cx="40" cy="49" r="4"/><circle cx="63" cy="35" r="3.5"/><circle cx="88" cy="52" r="4"/><circle cx="82" cy="86" r="3.5"/><circle cx="53" cy="89" r="4"/></svg>
          <span className="opening-orbit-dot"/>
        </div>
        <span className="opening-count-kicker">MADHU / PORTFOLIO</span>
        <span className="opening-count-typing" aria-hidden="true">{typed}<i className="typing-caret"/></span>
        <strong className="opening-count-value">{String(count).padStart(3,'0')}<small>%</small></strong>
        <div className="opening-count-track" aria-hidden="true"><i style={{width:`${count}%`}}/></div>
        <span className="opening-count-hint">DESIGN · INTELLIGENCE · ENGINEERING</span>
      </div>
      <div className="opening-bottom"><span>AI ENGINEERING</span><span>MACHINE LEARNING</span><span>DATA</span></div>
    </div>
   ) : (
    <>
      <div className="opening-topline"><span>PORTFOLIO / 2026</span><span>AI · ML · DATA</span></div>
      <div className="opening-center">
        <div className="opening-reveal opening-eyebrow">A PERSONAL PORTFOLIO</div>
        <h1 className="opening-name"><span className="opening-first">KUNCHALA</span><span className="opening-second">VENKATA MADHU<span className="opening-period">.</span></span></h1>
        <div className="opening-subline"><span className="opening-subline-rule"/><span>Intelligence, built with purpose.</span></div>
      </div>
      <div className="opening-bottom"><span>AI ENGINEERING</span><span>MACHINE LEARNING</span><span>DATA</span></div>
      <div className="opening-curtain opening-curtain-top" aria-hidden="true"/>
      <div className="opening-curtain opening-curtain-bottom" aria-hidden="true"/>
    </>
   )}
 </div>
}

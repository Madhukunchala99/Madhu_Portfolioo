import React,{useEffect,useRef,useState} from 'react';
/** Damped, pointer-draggable hanging bulb. Click toggles the existing V4 theme. */
export default function HangingBulb({onActivate}) {
 const ref=useRef(null),p=useRef({angle:0,velocity:0,dragging:false,x:0,startX:0,moved:false}),[lit,setLit]=useState(false),[hover,setHover]=useState(false);
 useEffect(()=>{const el=ref.current;let frame;let prev=performance.now();const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const step=t=>{const dt=Math.min((t-prev)/16.667,2);prev=t;const s=p.current;
 if(!s.dragging){s.velocity+=(-.018*s.angle)*dt;s.velocity*=Math.pow(.969,dt);s.angle+=s.velocity*dt;}
 if(el)el.style.setProperty('--swing',`${Math.max(-28,Math.min(28,s.angle))}deg`);
 frame=requestAnimationFrame(step);};if(!reduced)frame=requestAnimationFrame(step);
 return()=>cancelAnimationFrame(frame)},[]);
 const down=e=>{p.current.dragging=true;p.current.x=e.clientX;p.current.startX=e.clientX;p.current.moved=false;e.currentTarget.setPointerCapture(e.pointerId)};
 const move=e=>{const s=p.current;if(!s.dragging)return;const dx=e.clientX-s.x;s.angle=Math.max(-28,Math.min(28,s.angle+dx*.28));s.velocity=dx*.1;s.x=e.clientX;if(Math.abs(e.clientX-s.startX)>7)s.moved=true};
 const up=e=>{p.current.dragging=false;if(e.currentTarget.hasPointerCapture?.(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId)};
 const activate=()=>{if(p.current.moved){p.current.moved=false;return;}p.current.velocity+=p.current.angle>0?-1.6:1.6;setLit(x=>!x);onActivate?.()};
 return <button type="button" className={'hanging-bulb '+(lit?'lit ':'')+(hover?'hover-glow':'')} ref={ref} aria-label="Pull the hanging bulb to switch theme" title="Pull to swing · Click to switch theme" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerEnter={()=>{setHover(true);p.current.velocity+=p.current.angle>0?-1.4:1.4}} onPointerLeave={()=>setHover(false)} onClick={activate}>
 <span className="bulb-pendulum"><span className="bulb-cord"/><span className="bulb-neck"/><span className="bulb-glass"><span className="bulb-filament"/><span className="bulb-highlight"/></span><span className="bulb-glow"/></span>
 </button>;
}

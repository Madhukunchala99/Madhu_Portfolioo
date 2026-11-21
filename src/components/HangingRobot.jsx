import React,{useEffect,useRef,useState} from 'react';
/** Small damped pendulum; pointer and keyboard accessible, does not replace V4 layout. */
export default function HangingRobot({onActivate}){
 const root=useRef(null), physics=useRef({angle:0,velocity:0,dragging:false,previousX:0}),[awake,setAwake]=useState(false);
 useEffect(()=>{let frame;const p=physics.current;let last=performance.now();const animate=t=>{const dt=Math.min((t-last)/16.67,2);last=t;
 if(!p.dragging){p.velocity+=(-.022*p.angle)*dt;p.velocity*=Math.pow(.965,dt);p.angle+=p.velocity*dt;}
 if(root.current)root.current.style.setProperty('--robot-angle',`${Math.max(-32,Math.min(32,p.angle))}deg`);frame=requestAnimationFrame(animate);};
 if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)frame=requestAnimationFrame(animate);
 return()=>cancelAnimationFrame(frame);},[]);
 const down=e=>{physics.current.dragging=true;physics.current.previousX=e.clientX;e.currentTarget.setPointerCapture(e.pointerId);setAwake(true)};
 const move=e=>{if(!physics.current.dragging)return;const p=physics.current;const delta=e.clientX-p.previousX;p.angle=Math.max(-32,Math.min(32,p.angle+delta*.38));p.velocity=delta*.09;p.previousX=e.clientX};
 const up=e=>{physics.current.dragging=false;if(e.currentTarget.hasPointerCapture?.(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId)};
 return <button type="button" className={'hanging-robot '+(awake?'awake':'')} ref={root} aria-label="Swing the AI robot or press to switch theme" title="Drag the AI charm · Click to change theme" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerEnter={()=>{physics.current.velocity+=1.7;setAwake(true)}} onClick={onActivate}>
 <span className="robot-string"/><span className="robot-pivot"><span className="robot-head"><span className="robot-antenna"/><span className="robot-eyes"><i/><i/></span><span className="robot-mouth"/></span><span className="robot-body"><i/><b>AI</b><i/></span><span className="robot-feet"><i/><i/></span></span>
 </button>;
}

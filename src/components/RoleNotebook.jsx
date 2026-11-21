import React,{useEffect,useRef,useState} from 'react';
const labels=['AI Engineer','ML Engineer','Data Analyst','Data Engineer'];
export default function RoleNotebook(){
 const [index,setIndex]=useState(0),[flipping,setFlipping]=useState(false);
 const reduced=useRef(false); const t=useRef(null);
 useEffect(()=>{reduced.current=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const interval=window.setInterval(()=>{
  if(reduced.current){setIndex(i=>(i+1)%labels.length);return;}
  setFlipping(true);
  t.current=window.setTimeout(()=>{setIndex(i=>(i+1)%labels.length);setFlipping(false)},1140);
 },4400);
 return()=>{clearInterval(interval);clearTimeout(t.current)};
 },[]);
 return <div className={'notebook-v4 notebook-refined notebook-premium'+(flipping?' is-flipping':'')} aria-label={'Current professional role: '+labels[index]}>
  <div className="notebook-shadow-page" aria-hidden="true"/>
  <div className="notebook-leaf-stack" aria-hidden="true"><i/><i/><i/></div>
  <div className="notebook-paper notebook-under" aria-hidden="true"><span>{labels[(index+1)%4]}</span></div>
  <div className={'notebook-paper notebook-top '+(flipping?'turning':'')}>
   <span className="notebook-front">{labels[index]}</span>
   <span className="notebook-reverse" aria-hidden="true">{labels[index]}</span>
  </div>
  <div className="notebook-spine" aria-hidden="true">{Array.from({length:13},(_,i)=><i key={i}/>)}</div>
  <div className="notebook-index" aria-hidden="true">{String(index+1).padStart(2,'0')} <span>/ 04</span></div>
 </div>;
}

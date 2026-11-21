import React,{useState} from 'react';
import {credentials} from '../data/profile.js';
const entries=[
 {id:'AWS',name:'AWS Certified Cloud Practitioner',issuer:'Amazon Web Services',image:'/logos/aws.png',type:'Professional certification'},
 {id:'SN',name:'ServiceNow Certified System Administrator',issuer:'ServiceNow',image:'/logos/servicenow.png',type:'Professional certification'},
 {id:'PY',name:'Python Course Certificate',issuer:'Udemy',image:null,type:'Course completion'},
 {id:'TBD',name:'Additional credential',issuer:'Future certification',image:null,type:'To be added after verification'},
];
export default function CertificateShowcase(){
 const [active,setActive]=useState(null);
 const close=()=>setActive(null);
 return <>
  <section className="credentials hackathon-section reveal" id="hackathons">
   <div className="section-top"><span className="eyebrow">HACKATHONS / TEAMWORK</span><span className="micro">Real projects, meaningful challenges</span></div>
   <h2>Ideas put <i>into action.</i></h2>
   <div className="credential-grid credential-grid-v4 hackathon-grid">
    <button type="button" className="credential-tile" onClick={()=>setActive({id:'M26',name:'MANTHAN Mini AI Hackathon — Participant',issuer:'Calibo AI Academy',image:'/logos/calibo.png',type:'Participation · 31 Oct 2026',realCert:true})}>
     <img src="/logos/calibo.png" className="credential-asset" alt="Calibo AI Academy logo"/><span className="credential-issuer">MANTHAN 2026</span><small>Participant · Team HACK HORIZON</small><h3>Quick-Commerce Delivery Intelligence</h3><span className="micro">✳ TAP TO EXPLORE ↗</span>
    </button>
    <button type="button" className="credential-tile" onClick={()=>setActive({id:'L',name:'Lumens Hackathon — Runner-up',issuer:'Lumens',image:'/logos/lumens.png',type:'Runner-up recognition',recognition:true})}>
     <img src="/logos/lumens.png" className="credential-asset" alt="Lumens logo"/><span className="credential-issuer">LUMENS HACKATHON</span><small>Runner-up</small><h3>Subscription Management System</h3><span className="micro">✳ TAP TO EXPLORE ↗</span>
    </button>
   </div>
  </section>
  <section className="credentials reveal" id="certifications">
   <div className="section-top"><span className="eyebrow">RECOGNITION / CREDENTIALS</span><span className="micro">Select a card to explore</span></div>
   <h2>Milestones in <i>motion.</i></h2>
   <div className="credential-grid credential-grid-v4">{entries.map(e=><button type="button" className="credential-tile" key={e.id} onClick={()=>setActive(e)}>
    {e.image?<img src={e.image} className="credential-asset" alt={e.issuer+' logo'}/>:<span className="credential-mark">{e.id==='PY'?'Udemy':'+'}</span>}
    <span className="credential-issuer">{e.issuer}</span><small>{e.type}</small><h3>{e.name}</h3><span className="micro">✳ TAP TO EXPLORE ↗</span>
   </button>)}</div>
  </section>
  {active&&<div role="presentation" className="certificate-overlay" onClick={close}><div className="certificate-panel" role="dialog" aria-modal="true" aria-label={active.name} onClick={e=>e.stopPropagation()}>
   <button className="certificate-close" onClick={close} aria-label="Close certificate details">×</button>
   <div className="cert-confetti" aria-hidden="true">✶ ✦ ✶ ✦ ✶</div>
   {active.image&&<img className="cert-detail-logo" src={active.image} alt={active.issuer+' logo'}/>}
   {active.realCert?<><span className="eyebrow">ORIGINAL PARTICIPATION CERTIFICATE</span><img className="certificate-preview" src="/certificates/manthan-preview.png" alt="Original MANTHAN 2026 participation certificate"/><a href="/certificates/manthan-original.pdf" target="_blank" rel="noreferrer" className="secondary">View official PDF ↗</a></>:
    <><div className="cert-seal">{active.recognition?'RUNNER-UP':active.id==='TBD'?'PENDING':active.id==='PY'?'COMPLETED':'CERTIFIED'}<span>✦</span></div><span className="eyebrow">{active.issuer}</span><h2>{active.name}</h2><p>{active.recognition?'Self-designed portfolio recognition card, not an official Lumens certificate. Project: MERN-based Subscription Management System.':'Credential listed from the supplied profile; original verification document has not been uploaded. For the placeholder, no credential is claimed.'}</p></>}
   <button className="secondary" onClick={close}>Back to portfolio</button>
  </div></div>}
 </>;
}

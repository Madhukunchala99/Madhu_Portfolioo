import React,{useState} from 'react';
import {profile} from '../data/profile.js';
export default function ContactWizard(){
 const [step,setStep]=useState(0),[kind,setKind]=useState('Job opportunity'),[role,setRole]=useState('AI / ML'),[details,setDetails]=useState({name:'',email:'',message:''}),[status,setStatus]=useState(''),[busy,setBusy]=useState(false);
 const options=[['Job opportunity','Project collaboration','Networking','Other'],['AI / ML','Data analytics','Data engineering','Other']];
 async function submit(e){e.preventDefault();if(step<2){setStep(step+1);return;}setStatus('');
  // Netlify Forms only works on the deployed site; local development falls back to the visitor's email app.
  const host=window.location.hostname;
  if(host==='localhost'||host==='127.0.0.1'||host==='[::1]'||host.endsWith('.local')){
   const subject=kind+' — '+role;const body=`Name: ${details.name}\nReply to: ${details.email}\nEnquiry type: ${kind}\nArea of interest: ${role}\n\n${details.message}`;
   window.location.href=`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
   setStatus('Your email application should open with the message prepared. Press Send in your email app.');return;
  }
  setBusy(true);
  try{
   const honeypot=e.currentTarget.elements['bot-field']?.value||'';
   const body=new URLSearchParams({'form-name':'portfolio-contact',name:details.name,email:details.email,'enquiry-type':kind,'area-of-interest':role,message:details.message,'bot-field':honeypot});
   // POST to the static form definition so the SPA fallback redirect never intercepts the submission.
   const res=await fetch('/__forms.html',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()});
   if(!res.ok)throw new Error(`Form server returned ${res.status}`);
   setStatus('Thanks! Your message was submitted to the portfolio inbox.');
   setStep(0);setKind('Job opportunity');setRole('AI / ML');setDetails({name:'',email:'',message:''});
  }catch(err){setStatus('Could not submit automatically. Please use the email link below.');}
  finally{setBusy(false)}
 }
 return <form className="wizard" name="portfolio-contact" onSubmit={submit}><p hidden aria-hidden="true"><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></p><div className="wizard-progress">{[0,1,2].map(i=><span key={i} className={i<=step?'filled':''}/>)}</div><h2>{['What brings you here?','What should we explore?','Tell me about yourself.'][step]}</h2><p className="micro">STEP {step+1} OF 3</p>{step<2?<fieldset><legend>{step===0?'Choose your inquiry':'Area of interest'}</legend>{options[step].map(x=><label className="wizard-option" key={x}><input type="radio" name="choice" checked={(step===0?kind:role)===x} onChange={()=>step===0?setKind(x):setRole(x)}/>{x}</label>)}</fieldset>:<div className="wizard-fields"><label>Name<input required value={details.name} autoComplete="name" onChange={e=>setDetails({...details,name:e.target.value})}/></label><label>Email<input type="email" required value={details.email} autoComplete="email" onChange={e=>setDetails({...details,email:e.target.value})}/></label><label>Message<textarea rows="4" required value={details.message} onChange={e=>setDetails({...details,message:e.target.value})}/></label><small>Netlify deployment: submitted to Netlify Forms. Local development: opens your email application. Enable email notifications in Netlify to receive messages in Gmail.</small></div>}
 <div className="wizard-actions"><button type="button" disabled={!step} onClick={()=>setStep(step-1)}>← Back</button><button className="primary" disabled={busy} type="submit">{step===2?(busy?'Sending…':'Send message'):'Next'} →</button></div>
 {status&&<div className="form-feedback" role="status">{status} <a href={`mailto:${profile.email}`}>Email directly ↗</a></div>}
 </form>
}

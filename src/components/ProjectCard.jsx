import React,{useState} from 'react';

/** Each artwork is a distinct, locally generated SVG visual. These are thematic editorial covers,
 * not fabricated screenshots or model-result visualizations. */
export default function ProjectCard({p,index}){
 const [open,setOpen]=useState(false);
 return <article className="project-row project-v4" id={'project-'+p.id}>
   <div className="project-preview project-preview-v4" data-kind={p.id}>
    <span className="micro">SELECTED CASE / {String(index+1).padStart(2,'0')}</span>
    {(p.repo||p.live)?<a className="project-image-link" href={p.repo||p.live} target="_blank" rel="noreferrer" title={`Open ${p.title} on GitHub`}><img className="project-cover" src={p.id==='delivery'?'/projects/covers/delivery.webp':`/projects/covers/${p.id}.svg`} alt={`Original themed cover illustration for ${p.title}`} loading="lazy"/></a>:<button type="button" className="project-image-link" onClick={()=>setOpen(v=>!v)} aria-label={`Show details for ${p.title}`}><img className="project-cover" src={`/projects/covers/${p.id}.svg`} alt={`Original themed cover illustration for ${p.title}`} loading="lazy"/></button>}
    <div className="preview-label">{p.title}<span>↗</span></div>
    <small>Editorial illustration · {p.id==='delivery'?'live dashboard available':'not a project screenshot'}</small>
   </div>
   <div className="project-copy">
    <span className="eyebrow">{p.status}</span>
    <h3>{p.repo?<a href={p.repo} target="_blank" rel="noreferrer">{p.title} ↗</a>:p.title}</h3><p>{p.problem}</p>
    {p.metric&&<div className="metric">{p.metric}</div>}
    <div className="project-facts"><span>WHAT I BUILT</span><p>{p.method}</p><span>WHY IT MATTERS</span><p>{p.impact}</p></div>
    <p className="micro project-stack">{p.tech}</p>
    <div className="link-row">
     {p.repo?<a href={p.repo} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`}>View GitHub ↗</a>:<button type="button" className="text-button" onClick={()=>setOpen(v=>!v)}>{open?'Hide project details −':'Project details +'} </button>}
     {p.live&&<a href={p.live} target="_blank" rel="noreferrer">Launch live site ↗</a>}
     <button className="text-button project-more" type="button" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?'Less info −':'More info +'} </button>
    </div>
    {open&&<div className="project-expanded"><strong>Project overview</strong><p>{p.problem} {p.method} {p.impact}</p>{!p.repo&&<p>Specific public repository URL is not verified yet. Visit the GitHub profile for other published projects: <a href="https://github.com/Madhukunchala99" target="_blank" rel="noreferrer">GitHub profile ↗</a>.</p>}</div>}
   </div>
 </article>
}

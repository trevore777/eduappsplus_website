import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../../../data/caseStudies";

export function generateStaticParams(){ return caseStudies.map(study => ({slug: study.slug})); }

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <>
    <header className="siteHeader compactHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/">Home</Link><Link href="/case-studies">Case Studies</Link><a href="mailto:inquiries@eduappsplus.com.au">Start a Project</a></nav></div>
      <div className="hero caseHero"><span className="eyebrow">{study.category} · {study.status}</span><h1>{study.name}</h1><p>{study.summary}</p></div>
    </div></header>
    <main><div className="wrap narrow">
      <section className="caseSection"><h2>The problem</h2><p>{study.problem}</p></section>
      <section className="caseSection"><h2>The solution</h2><p>{study.solution}</p></section>
      <section className="caseSection"><h2>Key features</h2><div className="featureList">{study.features.map(feature => <div className="featureItem" key={feature}>✓ {feature}</div>)}</div></section>
      <section className="caseSection"><h2>Technology & capability</h2><div className="techList">{study.tech.map(item => <span className="techChip" key={item}>{item}</span>)}</div><p className="capabilityStatement">{study.capability}</p></section>
      {study.liveUrl && <section className="caseSection"><h2>See the prototype</h2><p>This project has a public version available to explore.</p><a className="primaryButton inlineButton" href={study.liveUrl} target="_blank" rel="noreferrer">Open {study.name} ↗</a></section>}
      <section className="ctaPanel"><div><span className="eyebrow">Your project</span><h2>Could an app solve a problem for you?</h2><p>Send through the idea or workflow you would like to improve. It can be an early concept or an existing application that needs work.</p></div><a className="primaryButton" href={`mailto:inquiries@eduappsplus.com.au?subject=${encodeURIComponent(`App enquiry after viewing ${study.name}`)}`}>Send an Enquiry</a></section>
      <p className="backLink"><Link href="/case-studies">← Back to all case studies</Link></p>
    </div></main>
    <footer>EDU Apps Plus · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a></footer>
  </>;
}

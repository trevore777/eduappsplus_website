import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../../../data/caseStudies";

export function generateStaticParams(){ return caseStudies.map(study => ({slug: study.slug})); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.seoTitle || `${study.name} Case Study | EDU Apps Plus`,
    description: study.seoDescription || study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: study.seoTitle || `${study.name} Case Study | EDU Apps Plus`,
      description: study.seoDescription || study.summary,
      url: `https://www.eduappsplus.com.au/case-studies/${study.slug}`,
      type: "article"
    }
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <>
    <header className="siteHeader compactHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/">Home</Link><Link href="/case-studies">Case Studies</Link><Link href="/guides">Guides</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="hero caseHero"><span className="eyebrow">{study.category} · {study.status}</span><h1>{study.name}</h1><p>{study.summary}</p></div>
    </div></header>
    <main><div className="wrap narrow">
      <section className="caseSection"><h2>The problem</h2><p>{study.problem}</p></section>
      <section className="caseSection"><h2>The solution</h2><p>{study.solution}</p></section>
      <section className="caseSection"><h2>Key features</h2><div className="featureList">{study.features.map(feature => <div className="featureItem" key={feature}>✓ {feature}</div>)}</div></section>
      <section className="caseSection"><h2>Technology & capability</h2><div className="techList">{study.tech.map(item => <span className="techChip" key={item}>{item}</span>)}</div><p className="capabilityStatement">{study.capability}</p></section>
      {study.related?.length > 0 && <section className="caseSection"><h2>Related services & guides</h2><p>Explore the development approach and practical guidance behind projects like this one.</p><div className="featureList">{study.related.map(item => <div className="featureItem" key={item.href}><Link className="textLink" href={item.href}>{item.label} →</Link></div>)}</div></section>}
      {study.liveUrl && <section className="caseSection"><h2>See the application</h2><p>This project has a public version available to explore.</p><a className="primaryButton inlineButton" href={study.liveUrl} target="_blank" rel="noreferrer">Open {study.name} ↗</a></section>}
      <section className="ctaPanel"><div><span className="eyebrow">Your project</span><h2>Could an app solve a similar problem for you?</h2><p>Send through the idea, spreadsheet or workflow you would like to improve. It can be an early concept or an existing application that needs work.</p></div><Link className="primaryButton" href={`/enquire?caseStudy=${encodeURIComponent(study.name)}`}>Discuss a Similar Project</Link></section>
      <p className="backLink"><Link href="/case-studies">← Back to all case studies</Link> · <Link href="/guides">Browse Guides & Resources →</Link></p>
    </div></main>
    <footer>EDU Apps Plus · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a></footer>
  </>;
}

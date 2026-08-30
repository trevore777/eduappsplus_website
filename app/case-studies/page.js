import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export const metadata = {
  title: "App Development Case Studies",
  description: "See custom software projects built by EDU Apps Plus across education, small business, AI, APIs, payments, databases and live event applications.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage(){
  return <>
    <header className="siteHeader compactHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link href="/have-an-idea">Have an Idea?</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="hero caseHero"><span className="eyebrow">Selected work</span><h1>Custom software case studies.</h1><p>Practical applications built around real education, business and specialist workflow problems.</p></div>
    </div></header>
    <main><section className="commercialSection"><div className="wrap">
      <div className="caseGrid">{caseStudies.map(study => <article className="caseCard" key={study.slug}><div><span className="badge">{study.category}</span><span className="statusLabel">{study.status}</span></div><h2>{study.name}</h2><p>{study.summary}</p><div className="capability">{study.capability}</div><Link className="textLink" href={`/case-studies/${study.slug}`}>Read case study →</Link></article>)}</div>
    </div></section></main>
    <footer>EDU Apps Plus · Custom App & Software Development · <Link href="/">Home</Link></footer>
  </>;
}

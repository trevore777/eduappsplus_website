import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export const metadata = { title: "Case Studies | EDU Apps Plus" };

export default function CaseStudiesPage() {
  return <>
    <header className="siteHeader compactHeader">
      <div className="wrap">
        <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/">Home</Link><Link href="/case-studies">Case Studies</Link><a href="mailto:inquiries@eduappsplus.com.au">Start a Project</a></nav></div>
        <div className="hero"><span className="eyebrow">Selected work</span><h1>Case Studies</h1><p>Practical applications built around real problems, workflows and ideas.</p></div>
      </div>
    </header>
    <main><div className="wrap">
      <div className="caseGrid">
        {caseStudies.map(study => <article className="caseCard" key={study.slug}>
          <div><span className="badge">{study.category}</span><span className="statusLabel">{study.status}</span></div>
          <h2>{study.name}</h2><p>{study.summary}</p><div className="capability">{study.capability}</div>
          <Link className="textLink" href={`/case-studies/${study.slug}`}>Read case study →</Link>
        </article>)}
      </div>
      <section className="ctaPanel"><div><span className="eyebrow">Have an idea?</span><h2>Tell me what you want the app to do.</h2><p>You do not need a technical specification. Start with the problem, process or idea and we can work from there.</p></div><a className="primaryButton" href="mailto:inquiries@eduappsplus.com.au?subject=App%20Development%20Enquiry">Start a Project</a></section>
    </div></main>
    <footer>EDU Apps Plus · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a></footer>
  </>;
}

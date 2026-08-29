import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export const metadata = { title: "Case Studies | EDU Apps Plus" };

export default function CaseStudiesPage() {
  return <>
    <header className="siteHeader portfolioHeader">
      <div className="wrap">
        <div className="top">
          <Link className="brand" href="/">EDU APPS+</Link>
          <nav className="mainNav">
            <Link href="/#what-i-build">What I Build</Link>
            <Link className="activeNav" href="/case-studies">Case Studies</Link>
            <Link href="/#about">About</Link>
            <Link className="navCta solidNavCta" href="/enquire">Start a Project</Link>
          </nav>
        </div>
        <div className="portfolioHero">
          <span className="eyebrow">Selected work</span>
          <h1>Case Studies</h1>
          <p>Real applications. Real impact. Built for real users.</p>
        </div>
      </div>
    </header>

    <main className="portfolioMain">
      <div className="wrap">
        <div className="filterPills" aria-label="Project categories">
          <span className="filterPill activePill">All Projects</span>
          <span className="filterPill">Education</span>
          <span className="filterPill">Business</span>
          <span className="filterPill">Lifestyle</span>
          <span className="filterPill">AI / Automation</span>
          <span className="filterPill">Mobile</span>
        </div>

        <div className="portfolioGrid">
          {caseStudies.map(study => <article className={`portfolioCard project-${study.slug}`} key={study.slug}>
            <div className="projectVisual" aria-hidden="true">
              <div className="visualBrand">E+</div>
              <div className="visualCopy">
                <span>{study.category}</span>
                <strong>{study.name}</strong>
                <small>{study.status}</small>
              </div>
            </div>
            <div className="portfolioCardBody">
              <div className="portfolioMeta"><span className="badge">{study.category}</span><span className="statusLabel">{study.status}</span></div>
              <h2>{study.name}</h2>
              <p>{study.summary}</p>
              <div className="cardActions">
                {study.liveUrl && <a className="viewAppButton" href={study.liveUrl} target="_blank" rel="noreferrer">View App ↗</a>}
                <Link className="similarButton" href={`/enquire?project=${study.slug}`}>Start a Similar Project</Link>
              </div>
              <Link className="caseStudyLink" href={`/case-studies/${study.slug}`}>Read full case study →</Link>
            </div>
          </article>)}
        </div>

        <section className="ctaPanel portfolioCta">
          <div><span className="eyebrow">Have an idea?</span><h2>Tell me what you want the app to do.</h2><p>You do not need a technical specification. Start with the problem, process or idea and we can work from there.</p></div>
          <Link className="primaryButton" href="/enquire">Start a Project</Link>
        </section>
      </div>
    </main>
    <footer>EDU Apps Plus · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a></footer>
  </>;
}

import Link from "next/link";
import { caseStudies } from "../data/caseStudies";

export const dynamic = "force-dynamic";

export default function Home(){
  return <>
    <header className="siteHeader">
      <div className="wrap">
        <div className="top">
          <Link className="brand" href="/">EDU APPS+</Link>
          <nav className="mainNav"><a href="#services">What I Build</a><Link href="/case-studies">Case Studies</Link><a href="#about">About</a><a className="navCta" href="mailto:inquiries@eduappsplus.com.au?subject=App%20Development%20Enquiry">Start a Project</a></nav>
        </div>
        <div className="commercialHero">
          <span className="eyebrow">Custom software development</span>
          <h1>Practical software.<br/>Real problems.<br/>Simple solutions.</h1>
          <p>EDU Apps Plus develops custom web, AI and mobile applications around the way people actually work — from an early idea or manual process through to a working prototype and deployed application.</p>
          <div className="heroActions"><Link className="primaryButton" href="/case-studies">View Case Studies</Link><a className="secondaryButton" href="mailto:inquiries@eduappsplus.com.au?subject=App%20Development%20Enquiry">Discuss Your App Idea</a></div>
        </div>
      </div>
    </header>

    <main>
      <section className="commercialSection" id="services"><div className="wrap">
        <span className="eyebrow dark">What I build</span><h2 className="largeHeading">From idea to working application.</h2>
        <div className="serviceGrid">
          <div className="serviceCard"><h3>Web Applications</h3><p>Purpose-built applications, dashboards, databases, authentication, workflows and responsive interfaces.</p></div>
          <div className="serviceCard"><h3>AI & API Integration</h3><p>Add practical AI features or connect existing applications to external services and data.</p></div>
          <div className="serviceCard"><h3>Mobile Apps</h3><p>Native Apple applications using Swift and SwiftUI, including GPS, audio and device capabilities.</p></div>
          <div className="serviceCard"><h3>Existing App Improvements</h3><p>Fix bugs, add features, improve workflows, review security and move prototypes toward production.</p></div>
        </div>
      </div></section>

      <section className="commercialSection altSection"><div className="wrap">
        <div className="sectionIntro"><div><span className="eyebrow dark">Selected work</span><h2 className="largeHeading">Case studies</h2></div><Link className="textLink" href="/case-studies">View all case studies →</Link></div>
        <div className="caseGrid homeCases">{caseStudies.map(study => <article className="caseCard" key={study.slug}><div><span className="badge">{study.category}</span><span className="statusLabel">{study.status}</span></div><h3>{study.name}</h3><p>{study.summary}</p><div className="capability">{study.capability}</div><Link className="textLink" href={`/case-studies/${study.slug}`}>Read case study →</Link></article>)}</div>
      </div></section>

      <section className="commercialSection" id="about"><div className="wrap aboutGrid">
        <div><span className="eyebrow dark">About EDU Apps Plus</span><h2 className="largeHeading">Software built around the problem.</h2></div>
        <div className="aboutCopy"><p>EDU Apps Plus develops practical software for education, small business and specialist workflows. Projects range from focused prototypes to database-backed platforms, AI integrations and native mobile applications.</p><p>The starting point does not need to be a detailed technical specification. Often it is simply a process that takes too long, an idea that needs testing, or an existing application that needs to work better.</p></div>
      </div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Have an app idea?</span><h2>Tell me the problem you want to solve.</h2><p>Send a short description of your idea, existing workflow or application. We can work out the technical details from there.</p><p className="emailLine">inquiries@eduappsplus.com.au</p></div><a className="primaryButton" href="mailto:inquiries@eduappsplus.com.au?subject=App%20Development%20Enquiry">Start a Project</a></div></div></section>
    </main>
    <footer>EDU Apps Plus · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a> · <a href="/admin/login">App Manager</a></footer>
  </>;
}

import Link from "next/link";
import { caseStudies } from "../data/caseStudies";

export const dynamic = "force-dynamic";

export default function Home(){
  return <>
    <header className="siteHeader">
      <div className="wrap">
        <div className="top">
          <Link className="brand" href="/">EDU APPS+</Link>
          <nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link href="/guides">Guides</Link><Link href="/case-studies">Our Work</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav>
        </div>
        <div className="commercialHero">
          <span className="eyebrow">Custom app & software development · Gold Coast, Queensland</span>
          <h1>Turn an idea or business problem into a working application.</h1>
          <p>EDU Apps Plus develops custom web, AI and mobile applications for schools, small businesses and individuals across the Gold Coast, Queensland and Australia — from early ideas and manual processes through to working prototypes and deployed software.</p>
          <div className="heroActions"><Link className="primaryButton" href="/have-an-idea">I Have an App Idea</Link><Link className="secondaryButton" href="/case-studies">View Case Studies</Link></div>
        </div>
      </div>
    </header>

    <main>
      <section className="commercialSection" id="services"><div className="wrap">
        <span className="eyebrow dark">Custom software development</span><h2 className="largeHeading">Software built around the problem you need to solve.</h2>
        <div className="serviceGrid">
          <div className="serviceCard"><h3>Custom App Development</h3><p>Turn an early concept, manual process or existing prototype into a practical web or mobile application.</p><Link className="textLink" href="/app-development">Explore app development →</Link></div>
          <div className="serviceCard"><h3>Education Apps</h3><p>Assessment, student evidence, learning tools, teacher workflows, dashboards and AI-supported education software.</p><Link className="textLink" href="/education-apps">Explore education apps →</Link></div>
          <div className="serviceCard"><h3>Small Business Apps</h3><p>Ordering, payments, job tracking, customer workflows and software that replaces repetitive spreadsheet-based processes.</p><Link className="textLink" href="/small-business-apps">Explore business apps →</Link></div>
          <div className="serviceCard"><h3>AI, APIs & Existing Apps</h3><p>Add practical AI features, connect external services, fix bugs, improve workflows and move an existing app toward production.</p><Link className="textLink" href="/app-development">See development capabilities →</Link></div>
        </div>
      </div></section>

      <section className="commercialSection altSection"><div className="wrap">
        <div className="sectionIntro"><div><span className="eyebrow dark">Selected work</span><h2 className="largeHeading">Real applications solving real problems.</h2></div><Link className="textLink" href="/case-studies">View all case studies →</Link></div>
        <div className="caseGrid homeCases">{caseStudies.map(study => <article className="caseCard" key={study.slug}><div><span className="badge">{study.category}</span><span className="statusLabel">{study.status}</span></div><h3>{study.name}</h3><p>{study.summary}</p><div className="capability">{study.capability}</div><Link className="textLink" href={`/case-studies/${study.slug}`}>Read case study →</Link></article>)}</div>
      </div></section>

      <section className="commercialSection"><div className="wrap aboutGrid">
        <div><span className="eyebrow dark">Guides & resources</span><h2 className="largeHeading">Research your app idea before you build.</h2></div>
        <div className="aboutCopy"><p>Read practical guides about app development costs, choosing between web and mobile apps, adding AI, replacing spreadsheets with software and developing custom tools for schools.</p><p><Link className="textLink" href="/guides">Browse all guides →</Link></p></div>
      </div></section>

      <section className="commercialSection altSection" id="about"><div className="wrap aboutGrid">
        <div><span className="eyebrow dark">About EDU Apps Plus</span><h2 className="largeHeading">You do not need a technical specification to start.</h2></div>
        <div className="aboutCopy"><p>EDU Apps Plus develops practical software for education, small business and specialist workflows. Projects range from focused prototypes to database-backed platforms, AI integrations and native mobile applications.</p><p>The starting point can simply be a process that takes too long, a spreadsheet that has become difficult to manage, an idea that needs testing, or an existing application that needs to work better.</p><p><Link className="textLink" href="/have-an-idea">See how an app idea becomes a project →</Link></p></div>
      </div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Have an app idea?</span><h2>Tell us the problem you want to solve.</h2><p>Send a short description of your idea, existing workflow or application. We can work out the technical details from there.</p><p className="emailLine">inquiries@eduappsplus.com.au</p></div><Link className="primaryButton" href="/enquire">Discuss Your Idea</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Custom App & Software Development · Gold Coast, Queensland, Australia · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a> · <a href="/admin/login">App Manager</a></footer>
  </>;
}

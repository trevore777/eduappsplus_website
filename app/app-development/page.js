import Link from "next/link";

export const metadata = {
  title: "Custom App Development Gold Coast",
  description: "Custom app and software development for businesses, schools and individuals on the Gold Coast and across Australia. Turn an idea or manual process into a practical working application.",
  alternates: { canonical: "/app-development" },
};

export default function AppDevelopmentPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link href="/case-studies">Our Work</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="commercialHero"><span className="eyebrow">Custom app development</span><h1>Turn your idea into a working application.</h1><p>EDU Apps Plus designs and develops practical web, AI and mobile applications for people who have a business problem, workflow or app idea but do not necessarily have a technical specification.</p><div className="heroActions"><Link className="primaryButton" href="/enquire">Discuss Your App Idea</Link><Link className="secondaryButton" href="/case-studies">See Examples</Link></div></div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap"><span className="eyebrow dark">What can be built</span><h2 className="largeHeading">Custom software built around your problem.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>Web Applications</h3><p>Responsive applications with dashboards, databases, authentication, forms, workflows and reporting.</p></div>
        <div className="serviceCard"><h3>AI Features</h3><p>Practical AI tools for analysis, feedback, automation, content assistance and workflow support.</p></div>
        <div className="serviceCard"><h3>API Integrations</h3><p>Connect your application to external services such as payments, music platforms, maps, weather data or other business systems.</p></div>
        <div className="serviceCard"><h3>Existing App Improvements</h3><p>Fix bugs, add features, improve usability, strengthen security and move an existing prototype toward production.</p></div>
      </div></div></section>

      <section className="commercialSection altSection"><div className="wrap aboutGrid"><div><span className="eyebrow dark">How it works</span><h2 className="largeHeading">You bring the idea. We work out the technology.</h2></div><div className="aboutCopy"><p>The process can begin with a simple conversation about the problem you want to solve. From there the idea can be shaped into a clear first version, built as a prototype, tested and then developed further as needed.</p><p>Projects can range from a focused internal tool through to a database-backed platform used by customers, staff, students or clients.</p></div></div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Have an app idea?</span><h2>You do not need to know how to build it.</h2><p>Describe what you want the application to do and the problem it should solve.</p></div><Link className="primaryButton" href="/enquire">Start a Conversation</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Gold Coast, Queensland · <Link href="/">Home</Link></footer>
  </>;
}

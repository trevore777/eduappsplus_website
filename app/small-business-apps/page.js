import Link from "next/link";

export const metadata = {
  title: "Small Business App Developer Gold Coast",
  description: "Custom small business software and app development on the Gold Coast. Replace spreadsheets, manual processes and disconnected tools with practical web applications.",
  alternates: { canonical: "/small-business-apps" },
};

export default function SmallBusinessAppsPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/case-studies">Our Work</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="commercialHero"><span className="eyebrow">Small business software</span><h1>Custom apps for the jobs spreadsheets and generic software cannot handle.</h1><p>EDU Apps Plus builds focused applications for small businesses that need a better way to manage orders, jobs, payments, customer workflows, internal processes or specialist services.</p><div className="heroActions"><Link className="primaryButton" href="/enquire">Discuss Your Business App</Link><Link className="secondaryButton" href="/case-studies">See Business Examples</Link></div></div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap"><span className="eyebrow dark">Common projects</span><h2 className="largeHeading">Replace manual work with software built for your business.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>Ordering & Payments</h3><p>Online ordering, payment integration, queues, customer updates and simple operational dashboards.</p></div>
        <div className="serviceCard"><h3>Job & Workflow Tracking</h3><p>Track jobs, stages, costs, dates, staff actions and customer progress in one purpose-built system.</p></div>
        <div className="serviceCard"><h3>Customer Portals</h3><p>Give customers a simple place to submit information, follow progress, receive updates or access services.</p></div>
        <div className="serviceCard"><h3>System Integration</h3><p>Connect payments, maps, APIs, databases, email and other services so information does not need to be re-entered manually.</p></div>
      </div></div></section>

      <section className="commercialSection altSection"><div className="wrap aboutGrid"><div><span className="eyebrow dark">A practical starting point</span><h2 className="largeHeading">Show us the process that wastes your time.</h2></div><div className="aboutCopy"><p>You do not need to arrive with a finished app specification. A spreadsheet, paper form, awkward workflow or repeated customer problem is often the best place to begin.</p><p>A first version can focus on the most valuable part of the process, prove the idea, and then grow as the business needs it.</p></div></div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Business process slowing you down?</span><h2>Tell us what you want to make simpler.</h2><p>We can work from the current process and turn it into a practical software solution.</p></div><Link className="primaryButton" href="/enquire">Start a Conversation</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Small Business Software · Gold Coast · <Link href="/">Home</Link></footer>
  </>;
}

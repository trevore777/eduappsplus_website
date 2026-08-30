import Link from "next/link";

export const metadata = {
  title: "How Much Does a Small Business App Cost? | EDU Apps Plus",
  description: "A practical guide to small business app development costs in Australia, including what affects price, how to control scope and when custom software makes sense.",
  alternates: { canonical: "/small-business-app-cost" },
};

const costFactors = [
  ["Users & accounts", "A public tool with no login is simpler than software with customers, staff, administrators and different permission levels."],
  ["Data & databases", "Saving customers, jobs, orders, evidence, documents or reporting data adds database design, validation, backup and security requirements."],
  ["Payments & integrations", "Connecting Square, Stripe, Spotify, weather services, email, AI or another business system requires API integration and testing."],
  ["Workflow complexity", "A simple calculator or form is very different from a multi-stage workflow involving approvals, dashboards, notifications and reporting."],
  ["Design & devices", "The number of screens, custom interface requirements and support for phones, tablets and desktops affect development and testing."],
  ["Hosting & ongoing support", "Production software may require hosting, domains, databases, storage, monitoring, backups and occasional maintenance after launch."],
];

export default function SmallBusinessAppCostPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="commercialHero"><span className="eyebrow">Small business app development</span><h1>How much does it cost to develop a small business app?</h1><p>The useful answer depends on what the application needs to do. A focused web app solving one business problem can be very different in scope from a multi-user platform with payments, databases, AI and external integrations.</p><div className="heroActions"><Link className="primaryButton" href="/enquire">Discuss My App</Link><Link className="secondaryButton" href="/case-studies">See Real Projects</Link></div></div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap narrow"><span className="eyebrow dark">Start with scope</span><h2 className="largeHeading">There is no meaningful one-price-fits-all figure.</h2><div className="aboutCopy"><p>When a business asks how much an app costs, the first step is to define the problem rather than count screens. Two applications that look similar can require very different work behind the interface.</p><p>For example, an app that displays information may be relatively straightforward. Add customer accounts, live orders, payment processing, staff dashboards, database records and automated notifications and it becomes a substantially different system.</p><p>A sensible quote therefore starts with the smallest version that creates real value for the business. This is often called a minimum viable product or MVP, although the important word is <strong>viable</strong>: it still needs to solve the core problem properly.</p></div></div></section>

      <section className="commercialSection altSection"><div className="wrap"><span className="eyebrow dark">What affects cost?</span><h2 className="largeHeading">Six factors that change the amount of development work.</h2><div className="serviceGrid">{costFactors.map(([title,text]) => <div className="serviceCard" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="commercialSection"><div className="wrap aboutGrid"><div><span className="eyebrow dark">Web app or mobile app?</span><h2 className="largeHeading">A web application can often reduce the cost of a first version.</h2></div><div className="aboutCopy"><p>Many small businesses assume they need separate iPhone and Android apps. In practice, a responsive web application can often provide the required experience on phones, tablets and computers from a single application.</p><p>A web app can be especially suitable for ordering systems, internal workflows, job tracking, dashboards, customer portals, forms and business tools. Native mobile development becomes more important when the application requires particular device capabilities, App Store distribution or a strongly mobile-specific experience.</p><p>The right platform should follow the business requirement rather than being decided before the problem is understood.</p></div></div></section>

      <section className="commercialSection altSection"><div className="wrap narrow"><span className="eyebrow dark">Controlling the budget</span><h2 className="largeHeading">Build the valuable part first.</h2><div className="aboutCopy"><p>One of the most effective ways to control software development cost is to divide features into <strong>must have</strong>, <strong>useful later</strong> and <strong>nice to have</strong>. The first release concentrates on the workflow that produces the business benefit.</p><p>Once real customers or staff use that version, their feedback provides much better evidence for the next development decision. A feature that seemed essential during planning may prove unnecessary, while a small improvement may have a large impact on daily use.</p><p>This staged approach also makes it easier to understand ongoing costs such as hosting, database storage, third-party API charges and support before the system becomes unnecessarily large.</p></div></div></section>

      <section className="commercialSection"><div className="wrap"><span className="eyebrow dark">When does custom software make sense?</span><h2 className="largeHeading">When the way your business works does not fit an off-the-shelf product.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>Repeated manual work</h3><p>Staff repeatedly copy information between forms, spreadsheets, emails or separate systems.</p></div>
        <div className="serviceCard"><h3>A unique customer workflow</h3><p>Your ordering, booking, service or communication process is an important part of how the business operates.</p></div>
        <div className="serviceCard"><h3>Disconnected systems</h3><p>Information needs to move between a database, payment service, API, AI service or another platform.</p></div>
        <div className="serviceCard"><h3>A new business idea</h3><p>The application itself is part of a new service, product or customer experience that does not already exist.</p></div>
      </div></div></section>

      <section className="commercialSection altSection"><div className="wrap narrow"><span className="eyebrow dark">Before asking for a quote</span><h2 className="largeHeading">Five questions worth answering.</h2><div className="aboutCopy"><p><strong>1. Who will use the app?</strong> Customers, staff, managers, students, teachers or several user groups?</p><p><strong>2. What problem does it solve?</strong> Describe what happens now and what you want to improve.</p><p><strong>3. What must the first version do?</strong> Focus on the smallest workflow that would make the application genuinely useful.</p><p><strong>4. What does it need to connect to?</strong> Existing databases, payments, APIs, websites or other services can affect the technical approach.</p><p><strong>5. What would success look like?</strong> Saving staff time, increasing orders, reducing errors, improving customer service or enabling a completely new service?</p><p>If you can answer those questions, you have enough information to begin a useful development discussion. If you are still at an earlier stage, read <Link className="textLink" href="/have-an-idea">I Have an App Idea — Where Do I Start?</Link></p></div></div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Get a clearer idea of scope</span><h2>Tell us what you want the app to achieve.</h2><p>EDU Apps Plus develops practical custom applications for small businesses, education and individual ideas. Start with the problem and the first useful version can be scoped from there.</p></div><Link className="primaryButton" href="/enquire">Discuss My Project</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Custom App Development · <Link href="/">Home</Link></footer>
  </>;
}

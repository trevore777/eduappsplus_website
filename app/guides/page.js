import Link from "next/link";

export const metadata = {
  title: "App Development Guides & Resources | EDU Apps Plus",
  description: "Practical guides on app development, AI, education software, small business apps, replacing spreadsheets and choosing between web and mobile apps.",
  alternates: { canonical: "/guides" },
};

const guides = [
  {
    category: "Getting Started",
    title: "I Have an App Idea — Where Do I Start?",
    description: "A practical first-step guide to turning an idea into a useful first version, including scope, preparation and what to discuss with a developer.",
    href: "/have-an-idea",
  },
  {
    category: "Cost & Planning",
    title: "How Much Does It Cost to Develop a Small Business App?",
    description: "Understand the factors that affect development cost, how to control scope and when custom software is worth considering.",
    href: "/small-business-app-cost",
  },
  {
    category: "Choosing a Platform",
    title: "Web App vs Mobile App — Which Should I Build?",
    description: "Compare web and native mobile applications across cost, installation, device features, updates, offline use and development approach.",
    href: "/web-app-vs-mobile-app",
  },
  {
    category: "Artificial Intelligence",
    title: "How Can AI Be Added to My Business App?",
    description: "Explore practical AI integrations for summarising, drafting, classification, search, data extraction and workflow assistance.",
    href: "/ai-for-business-apps",
  },
  {
    category: "Business Automation",
    title: "Can Custom Software Replace My Spreadsheets?",
    description: "Learn when a spreadsheet-based process should become a database-backed application with workflows, permissions, dashboards and automation.",
    href: "/replace-spreadsheets-with-software",
  },
  {
    category: "Education Software",
    title: "How Can Custom Software Help Schools and Teachers?",
    description: "See how purpose-built software can support assessment, student evidence, learning tools, teacher workflows, placements and classroom visibility.",
    href: "/custom-software-for-schools",
  },
];

export default function GuidesPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top">
        <Link className="brand" href="/">EDU APPS+</Link>
        <nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link href="/case-studies">Our Work</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav>
      </div>
      <div className="commercialHero">
        <span className="eyebrow">Guides & resources</span>
        <h1>Practical guides for turning an idea or workflow into software.</h1>
        <p>Use these guides to understand development options, costs, AI integration, education software and when a manual process may be ready for a custom application.</p>
        <div className="heroActions"><Link className="primaryButton" href="/have-an-idea">Start With an App Idea</Link><Link className="secondaryButton" href="/enquire">Discuss a Project</Link></div>
      </div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap">
        <div className="sectionIntro"><div><span className="eyebrow dark">Development resources</span><h2 className="largeHeading">Choose the question closest to where you are now.</h2></div></div>
        <div className="caseGrid">
          {guides.map((guide) => <article className="caseCard" key={guide.href}>
            <div><span className="badge">{guide.category}</span></div>
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <Link className="textLink" href={guide.href}>Read guide →</Link>
          </article>)}
        </div>
      </div></section>

      <section className="commercialSection altSection"><div className="wrap aboutGrid">
        <div><span className="eyebrow dark">Not sure where to begin?</span><h2 className="largeHeading">Start with the problem, not the technology.</h2></div>
        <div className="aboutCopy"><p>You do not need to know whether you need a web app, mobile app, database, API or AI integration before starting a conversation. The useful starting point is what people currently have to do and what you want to make easier, faster or possible.</p><p>If you already have a spreadsheet, prototype, existing app or manual process, that can often provide enough information to begin scoping a first version.</p><p><Link className="textLink" href="/have-an-idea">Read the app idea guide →</Link></p></div>
      </div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Have a project in mind?</span><h2>Turn the research into a practical next step.</h2><p>Send a short description of the idea, workflow or existing system. EDU Apps Plus can help work out the technical approach from there.</p></div><Link className="primaryButton" href="/enquire">Discuss Your Project</Link></div></div></section>
    </main>

    <footer>EDU Apps Plus · App Development Guides & Resources · <Link href="/">Home</Link></footer>
  </>;
}

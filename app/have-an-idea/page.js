import Link from "next/link";

export const metadata = {
  title: "I Have an App Idea — Where Do I Start? | EDU Apps Plus",
  description: "Have an app idea but not sure where to start? Learn how to turn an idea into a practical first version, what it may cost, what to prepare, and how EDU Apps Plus can help.",
  alternates: { canonical: "/have-an-idea" },
};

const faq = [
  ["Do I need a complete specification before talking to a developer?", "No. A useful starting point is simply the problem you want to solve, who will use the app and what you would like them to be able to do. The technical specification can be developed from there."],
  ["Should I build every feature in the first version?", "Usually not. A smaller first version is easier to test with real users and helps identify which features genuinely matter before more time and money are committed."],
  ["Can an app connect to services I already use?", "Often, yes. Web applications can integrate with APIs and services such as payment systems, databases, AI tools, music platforms, weather data and other business systems when suitable access is available."],
  ["Do I need an iPhone or Android app?", "Not necessarily. Many ideas are better suited to a responsive web application that works on phones, tablets and computers without requiring an App Store download."],
  ["Can you help if I already have a spreadsheet, prototype or existing app?", "Yes. An existing workflow, spreadsheet, sketch, website or prototype can be a very useful starting point for understanding what should be kept, improved or automated."],
];

export default function HaveAnIdeaPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="commercialHero"><span className="eyebrow">I have an app idea — where do I start?</span><h1>You do not need to be a programmer to turn an idea into an app.</h1><p>If you know the problem you want to solve, who the app is for, or what you wish an existing process could do better, you already have enough to start shaping a useful first version.</p><div className="heroActions"><Link className="primaryButton" href="/enquire">Tell Us Your Idea</Link><Link className="secondaryButton" href="/case-studies">See Real App Projects</Link></div></div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap narrow"><span className="eyebrow dark">Start with the problem</span><h2 className="largeHeading">An app idea does not need to begin with technology.</h2><div className="aboutCopy"><p>Many useful applications begin with a very ordinary frustration: information is spread across spreadsheets, staff repeat the same manual task, customers have difficulty ordering or booking, teachers need a clearer workflow, or an existing service does not quite fit the way people actually work.</p><p>Before deciding on programming languages, databases or mobile platforms, describe the problem in plain English. Who experiences it? What do they do now? Where is time being wasted or information being lost? What would a better experience look like?</p><p>Those answers help a developer work out whether the solution should be a web app, mobile app, internal business tool, education platform, AI-assisted workflow or something simpler.</p></div></div></section>

      <section className="commercialSection altSection"><div className="wrap"><span className="eyebrow dark">From idea to launch</span><h2 className="largeHeading">A practical path from concept to working software.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>1. Describe the idea</h3><p>Explain the problem, the people who will use the application and the outcome you want. A rough sketch or existing process is useful, but not essential.</p></div>
        <div className="serviceCard"><h3>2. Define the first version</h3><p>Separate essential features from ideas that can wait. This creates a minimum useful product that can be built and tested without unnecessary complexity.</p></div>
        <div className="serviceCard"><h3>3. Build a prototype</h3><p>Create a working version of the important screens and workflow. Early testing often reveals improvements that are difficult to see in a written specification.</p></div>
        <div className="serviceCard"><h3>4. Develop, test & launch</h3><p>Refine the interface, add databases or integrations, test the workflow and security, and deploy the application so real users can access it.</p></div>
      </div></div></section>

      <section className="commercialSection"><div className="wrap aboutGrid"><div><span className="eyebrow dark">What should I prepare?</span><h2 className="largeHeading">A few sentences can be enough.</h2></div><div className="aboutCopy"><p>You do not need a formal software brief. Write down who will use the app, what they currently do, what is frustrating or inefficient, and what a successful result would look like.</p><p>If you have an existing spreadsheet, paper form, website, workflow diagram, sketch or prototype, include it. Examples of other apps you like can also help explain the experience you have in mind.</p><p>It is also useful to identify anything the application may need to connect to, such as an existing database, payment provider, API, AI service or third-party platform.</p></div></div></section>

      <section className="commercialSection altSection"><div className="wrap narrow"><span className="eyebrow dark">Cost and scope</span><h2 className="largeHeading">How much does it cost to turn an app idea into a working product?</h2><div className="aboutCopy"><p>There is no useful single price for an app before its scope is understood. Cost is influenced by the number of user types, screens and workflows; whether accounts and permissions are required; database complexity; integrations with external services; payments; AI features; reporting; and the amount of testing and deployment work involved.</p><p>The most effective way to control cost is usually to identify the smallest version that solves the core problem. Once that version is working, additional features can be prioritised using feedback from real users rather than assumptions.</p><p>For a small business, school or individual with an idea, this staged approach can be more practical than commissioning a large application specification before anything has been tested.</p></div></div></section>

      <section className="commercialSection"><div className="wrap"><span className="eyebrow dark">Examples</span><h2 className="largeHeading">Different ideas need different kinds of applications.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>Education software</h3><p>Assessment evidence, teacher workflows, student learning tools, placement management and classroom applications.</p><Link className="textLink" href="/education-apps">Explore education app development →</Link></div>
        <div className="serviceCard"><h3>Small business software</h3><p>Ordering, payments, customer workflows, job tracking and custom systems that replace repetitive manual processes.</p><Link className="textLink" href="/small-business-apps">Explore small business apps →</Link></div>
        <div className="serviceCard"><h3>API & connected applications</h3><p>Applications that connect with services such as Spotify, weather data, payment providers or other platforms through APIs.</p><Link className="textLink" href="/case-studies">View case studies →</Link></div>
        <div className="serviceCard"><h3>AI-assisted workflows</h3><p>Practical uses of AI inside an application, such as feedback, analysis, document processing or workflow assistance.</p><Link className="textLink" href="/app-development">See app development capabilities →</Link></div>
      </div></div></section>

      <section className="commercialSection altSection"><div className="wrap narrow"><span className="eyebrow dark">Common questions</span><h2 className="largeHeading">Questions people ask before building an app.</h2>{faq.map(([q,a]) => <div className="caseSection" key={q}><h2>{q}</h2><p>{a}</p></div>)}</div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Have an idea?</span><h2>Describe it in plain English.</h2><p>Tell EDU Apps Plus what you want to improve, who will use it and what you would like the application to achieve. That is enough to begin the technical conversation.</p></div><Link className="primaryButton" href="/enquire">Discuss My App Idea</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Custom App Development · <Link href="/">Home</Link></footer>
  </>;
}

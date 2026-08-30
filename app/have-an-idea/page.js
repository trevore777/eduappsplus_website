import Link from "next/link";

export const metadata = {
  title: "I Have an App Idea — Where Do I Start?",
  description: "Have an app idea but not sure where to start? EDU Apps Plus helps turn early ideas into a clear prototype, development plan and working web or mobile application.",
  alternates: { canonical: "/have-an-idea" },
};

export default function HaveAnIdeaPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="commercialHero"><span className="eyebrow">Have an app idea?</span><h1>You do not need to be a programmer to get started.</h1><p>If you know the problem you want to solve, who the app is for, or what you wish an existing process could do better, that is enough to begin shaping a useful first version.</p><div className="heroActions"><Link className="primaryButton" href="/enquire">Tell Us Your Idea</Link><Link className="secondaryButton" href="/case-studies">See What Has Been Built</Link></div></div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap"><span className="eyebrow dark">From idea to launch</span><h2 className="largeHeading">A simple path from concept to working software.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>1. Idea</h3><p>Explain the problem, the users and what you would like the app to achieve.</p></div>
        <div className="serviceCard"><h3>2. Scope</h3><p>Identify the smallest useful first version and the features that matter most.</p></div>
        <div className="serviceCard"><h3>3. Prototype</h3><p>Build a working version that can be reviewed and tested before unnecessary complexity is added.</p></div>
        <div className="serviceCard"><h3>4. Develop & Launch</h3><p>Refine the workflow, connect required services, test the application and deploy it for real users.</p></div>
      </div></div></section>

      <section className="commercialSection altSection"><div className="wrap aboutGrid"><div><span className="eyebrow dark">What to send</span><h2 className="largeHeading">A few sentences can be enough.</h2></div><div className="aboutCopy"><p>Useful starting information includes who will use the app, what they currently do, what is frustrating or inefficient, and what a successful result would look like.</p><p>You can also send an existing spreadsheet, sketch, website, workflow or prototype if you already have one. Technical terminology is not required.</p></div></div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Ready to explore it?</span><h2>Tell us the idea in plain English.</h2><p>We will use that as the starting point for the technical conversation.</p></div><Link className="primaryButton" href="/enquire">Discuss My Idea</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Custom App Development · <Link href="/">Home</Link></footer>
  </>;
}

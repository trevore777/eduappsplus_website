import Link from "next/link";

export const metadata = {
  title: "Education App Development Australia",
  description: "Custom education software and app development for schools, teachers and training organisations. Build assessment, evidence, workflow, learning and AI-supported tools.",
  alternates: { canonical: "/education-apps" },
};

export default function EducationAppsPage() {
  return <>
    <header className="siteHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/small-business-apps">Small Business Apps</Link><Link href="/case-studies">Our Work</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="commercialHero"><span className="eyebrow">Education software development</span><h1>Custom apps for schools, teachers and learning workflows.</h1><p>EDU Apps Plus develops practical education software around real classroom and school processes — including assessment, evidence collection, student workflows, dashboards, AI feedback and teacher administration.</p><div className="heroActions"><Link className="primaryButton" href="/enquire">Discuss an Education App</Link><Link className="secondaryButton" href="/case-studies">View Education Work</Link></div></div>
    </div></header>

    <main>
      <section className="commercialSection"><div className="wrap"><span className="eyebrow dark">Built for education</span><h2 className="largeHeading">Software that fits the way schools actually work.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>Assessment & Evidence</h3><p>Student submissions, evidence capture, monitoring, feedback, declarations, dashboards and teacher review workflows.</p></div>
        <div className="serviceCard"><h3>Learning Applications</h3><p>Interactive workbooks, guided learning tools, lesson resources and student-facing applications.</p></div>
        <div className="serviceCard"><h3>Teacher Workflow Tools</h3><p>Reduce repetitive administration with purpose-built forms, dashboards, tracking and reporting tools.</p></div>
        <div className="serviceCard"><h3>AI in Education</h3><p>Add controlled AI assistance for feedback, review, planning, support and analysis where it genuinely improves the workflow.</p></div>
      </div></div></section>

      <section className="commercialSection altSection"><div className="wrap aboutGrid"><div><span className="eyebrow dark">Practical development</span><h2 className="largeHeading">Start with the classroom problem.</h2></div><div className="aboutCopy"><p>An education app does not need to begin as a large software project. A recurring classroom problem, cumbersome spreadsheet or manual process can be enough to define a useful first version.</p><p>The goal is to create software that teachers and students can actually use, test it in a realistic workflow and improve it from there.</p></div></div></section>

      <section className="commercialSection"><div className="wrap"><div className="ctaPanel"><div><span className="eyebrow">Education app idea?</span><h2>Describe the teaching or workflow problem.</h2><p>We can turn that problem into a prototype and a practical development plan.</p></div><Link className="primaryButton" href="/enquire">Start a Conversation</Link></div></div></section>
    </main>
    <footer>EDU Apps Plus · Education Software Development · <Link href="/">Home</Link></footer>
  </>;
}

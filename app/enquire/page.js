import Link from "next/link";
import { Suspense } from "react";
import EnquiryForm from "../../components/EnquiryForm";

export const metadata = {
  title: "Discuss Your App Idea | EDU Apps Plus",
  description: "Have an app idea, spreadsheet process, school workflow or existing software project? Tell EDU Apps Plus what you want to make easier. No technical specification required.",
  alternates: { canonical: "/enquire" },
};

export default function EnquirePage(){
  return <>
    <header className="siteHeader compactHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/app-development">App Development</Link><Link href="/education-apps">Education Apps</Link><Link href="/small-business-apps">Small Business Apps</Link><Link href="/case-studies">Our Work</Link><Link href="/guides">Guides</Link></nav></div>
      <div className="hero caseHero"><span className="eyebrow">Start with the problem</span><h1>Tell us what you would like to make easier.</h1><p>You do not need to know the technology, write a specification or even know whether you need a web app, mobile app or AI. Describe the idea or current process in your own words.</p></div>
    </div></header>
    <main>
      <section className="commercialSection"><div className="wrap enquiryLayout">
        <div className="enquiryIntro"><span className="eyebrow dark">About 60 seconds to start</span><h2 className="largeHeading">A simple explanation is enough.</h2><p>Tell us what happens now and what you wish worked better. That might be an app idea, a spreadsheet that has become difficult to manage, a school workflow, a small-business process or an existing application that needs improvement.</p>
          <div className="contactCard"><strong>Good things to send</strong><p>“We do this manually and want to automate it.”</p><p>“I have an idea for an app but do not know where to start.”</p><p>“We have a spreadsheet that several staff need to use.”</p><p>“Our existing app needs this new feature.”</p></div>
          <p><strong>Not ready to enquire?</strong><br/><Link className="textLink" href="/guides">Browse the Guides & Resources →</Link></p>
          <div className="contactCard"><strong>Prefer email?</strong><a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a><p>Gold Coast, Queensland · Projects across Australia welcome</p></div>
        </div>
        <Suspense fallback={<div className="enquiryForm"><p>Loading enquiry form…</p></div>}><EnquiryForm/></Suspense>
      </div></section>

      <section className="commercialSection altSection"><div className="wrap"><span className="eyebrow dark">What happens next?</span><h2 className="largeHeading">From a short enquiry to a clearer project.</h2><div className="serviceGrid">
        <div className="serviceCard"><h3>1. You explain the problem</h3><p>Use normal language. Existing spreadsheets, screenshots, sketches or examples can help later, but are not required to start.</p></div>
        <div className="serviceCard"><h3>2. We clarify the first version</h3><p>The goal is to identify the users, the core workflow and the smallest useful version rather than immediately adding every possible feature.</p></div>
        <div className="serviceCard"><h3>3. We discuss the approach</h3><p>Once the scope is clearer, we can discuss the appropriate technology, development approach and practical next steps.</p></div>
      </div></div></section>

      <section className="commercialSection"><div className="wrap narrow"><span className="eyebrow dark">No obligation to have it figured out</span><h2 className="largeHeading">Questions are part of the development process.</h2><div className="aboutCopy"><p>Many useful software projects begin with a non-technical problem: too much repeated administration, information spread across several places, a customer process that could be simpler, or an idea for a service that does not yet exist.</p><p>If you are still deciding what to build, start with <Link className="textLink" href="/have-an-idea">I Have an App Idea — Where Do I Start?</Link> or look through the <Link className="textLink" href="/case-studies">case studies</Link> for examples of the kinds of problems custom software can solve.</p></div></div></section>
    </main>
    <footer>EDU Apps Plus · Custom App & Software Development · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a></footer>
  </>;
}

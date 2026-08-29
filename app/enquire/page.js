import Link from "next/link";
import EnquiryForm from "../../components/EnquiryForm";

export const metadata={title:"Start a Project | EDU Apps Plus",description:"Tell EDU Apps Plus about your app idea, workflow problem or existing application."};

export default function EnquirePage(){
  return <>
    <header className="siteHeader compactHeader"><div className="wrap">
      <div className="top"><Link className="brand" href="/">EDU APPS+</Link><nav className="mainNav"><Link href="/">Home</Link><Link href="/case-studies">Case Studies</Link><Link className="navCta" href="/enquire">Start a Project</Link></nav></div>
      <div className="hero caseHero"><span className="eyebrow">Project enquiry</span><h1>Tell me what you want to build.</h1><p>You do not need a finished specification. Start with the problem, workflow or idea and the technical details can be worked out from there.</p></div>
    </div></header>
    <main><section className="commercialSection"><div className="wrap enquiryLayout">
      <div className="enquiryIntro"><span className="eyebrow dark">Start a conversation</span><h2 className="largeHeading">A few details are enough to begin.</h2><p>Use the form to outline what you need. This could be a brand-new app, an existing system that needs improvement, a manual process you want to streamline, or an idea you want turned into a prototype.</p><div className="contactCard"><strong>Email</strong><a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a><p>Gold Coast, Queensland · Remote projects welcome</p></div></div>
      <EnquiryForm/>
    </div></section></main>
    <footer>EDU Apps Plus · <a href="mailto:inquiries@eduappsplus.com.au">inquiries@eduappsplus.com.au</a></footer>
  </>;
}

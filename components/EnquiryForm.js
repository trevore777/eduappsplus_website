"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EnquiryForm(){
  const searchParams=useSearchParams();
  const caseStudy=searchParams.get("caseStudy") || "";
  const [status,setStatus]=useState("");

  function submitEnquiry(event){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const name=String(form.get("name")||"").trim();
    const email=String(form.get("email")||"").trim();
    const organisation=String(form.get("organisation")||"").trim();
    const projectType=String(form.get("projectType")||"").trim();
    const stage=String(form.get("stage")||"").trim();
    const details=String(form.get("details")||"").trim();
    const helpful=String(form.get("helpful")||"").trim();

    if(!name || !email || !details){
      setStatus("Please complete your name, email address and a short description of your idea or problem.");
      return;
    }

    const subject=caseStudy ? `Project enquiry from ${name} — similar to ${caseStudy}` : `Project enquiry from ${name}`;
    const body=[
      `Name: ${name}`,
      `Email: ${email}`,
      `Business / organisation: ${organisation || "Not supplied"}`,
      `Project type: ${projectType || "Not sure yet"}`,
      `Project stage: ${stage || "Not supplied"}`,
      caseStudy ? `Case study of interest: ${caseStudy}` : null,
      "",
      "Idea / problem to solve:",
      details,
      "",
      "Anything else that may help:",
      helpful || "Not supplied"
    ].filter(Boolean).join("\n");

    setStatus("Your email application will open with your project enquiry prepared. Review it, then press Send.");
    window.location.href=`mailto:inquiries@eduappsplus.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="enquiryForm" onSubmit={submitEnquiry}>
    {caseStudy && <div className="formStatus"><strong>Interested in something similar to {caseStudy}?</strong><br/>Tell us what you would like your version to do.</div>}
    <div className="row">
      <div><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" required /></div>
      <div><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
    </div>
    <div><label htmlFor="organisation">Business, school or organisation <span>(optional)</span></label><input id="organisation" name="organisation" autoComplete="organization" /></div>
    <div className="row">
      <div><label htmlFor="projectType">What best describes your project?</label><select id="projectType" name="projectType" defaultValue=""><option value="">I am not sure yet</option><option>I have an app idea</option><option>I want to replace a spreadsheet or manual process</option><option>I need a school / education application</option><option>I need a small business application</option><option>I want to add AI</option><option>I want to connect an API or external service</option><option>I have an existing app that needs work</option></select></div>
      <div><label htmlFor="stage">Where are you up to?</label><select id="stage" name="stage" defaultValue=""><option value="">Select if you know</option><option>Just an idea</option><option>I have notes, drawings or a spreadsheet</option><option>I have a prototype</option><option>I already have a working app</option><option>I need help deciding</option></select></div>
    </div>
    <div><label htmlFor="details">In your own words, what would you like to make easier? *</label><textarea id="details" name="details" required placeholder="For example: We currently track our jobs in a spreadsheet. I want staff to log in, update each job and let customers see the current status." /></div>
    <div><label htmlFor="helpful">Anything else that may help? <span>(optional)</span></label><textarea id="helpful" name="helpful" placeholder="You can mention a deadline, existing website/app, approximate budget, users, or anything else you think is relevant. It is completely fine if you do not know these details yet." /></div>
    <div className="formFooter"><button className="submitButton" type="submit">Prepare My Enquiry</button><span className="formHint">No technical specification required. This prepares an email for you to review and send.</span></div>
    {status && <p className="formStatus" role="status">{status}</p>}
  </form>;
}

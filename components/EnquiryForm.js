"use client";

import { useState } from "react";

export default function EnquiryForm(){
  const [status,setStatus]=useState("");

  function submitEnquiry(event){
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const name=String(form.get("name")||"").trim();
    const email=String(form.get("email")||"").trim();
    const organisation=String(form.get("organisation")||"").trim();
    const projectType=String(form.get("projectType")||"").trim();
    const existingApp=String(form.get("existingApp")||"").trim();
    const timeframe=String(form.get("timeframe")||"").trim();
    const budget=String(form.get("budget")||"").trim();
    const details=String(form.get("details")||"").trim();

    if(!name || !email || !details){
      setStatus("Please complete your name, email address and project description.");
      return;
    }

    const subject=`App development enquiry from ${name}`;
    const body=[
      `Name: ${name}`,
      `Email: ${email}`,
      `Business / organisation: ${organisation || "Not supplied"}`,
      `Project type: ${projectType || "Not supplied"}`,
      `Existing app: ${existingApp || "Not supplied"}`,
      `Target timeframe: ${timeframe || "Not supplied"}`,
      `Approximate budget: ${budget || "Not supplied"}`,
      "",
      "Project idea / problem to solve:",
      details
    ].join("\n");

    setStatus("Your email application will open with the enquiry prepared for inquiries@eduappsplus.com.au.");
    window.location.href=`mailto:inquiries@eduappsplus.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="enquiryForm" onSubmit={submitEnquiry}>
    <div className="row">
      <div><label htmlFor="name">Name *</label><input id="name" name="name" required /></div>
      <div><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required /></div>
    </div>
    <div className="row">
      <div><label htmlFor="organisation">Business / organisation</label><input id="organisation" name="organisation" /></div>
      <div><label htmlFor="projectType">What are you looking to build?</label><select id="projectType" name="projectType" defaultValue=""><option value="">Select an option</option><option>Web application</option><option>Mobile / iPhone app</option><option>AI or API integration</option><option>Improve an existing app</option><option>Not sure yet</option></select></div>
    </div>
    <div className="row">
      <div><label htmlFor="existingApp">Do you already have an app?</label><select id="existingApp" name="existingApp" defaultValue=""><option value="">Select an option</option><option>No — this is a new idea</option><option>Yes — it needs improvements</option><option>I have a prototype</option></select></div>
      <div><label htmlFor="timeframe">Target timeframe</label><select id="timeframe" name="timeframe" defaultValue=""><option value="">Select an option</option><option>As soon as practical</option><option>Within 1 month</option><option>1–3 months</option><option>3+ months</option><option>Just exploring the idea</option></select></div>
    </div>
    <div><label htmlFor="budget">Approximate budget (optional)</label><input id="budget" name="budget" placeholder="For example: $1,000–$3,000, or not sure yet" /></div>
    <div><label htmlFor="details">What problem would you like the app to solve? *</label><textarea id="details" name="details" required placeholder="Describe the idea, current process, problem or feature you have in mind. You do not need a technical specification." /></div>
    <div className="formFooter"><button className="submitButton" type="submit">Prepare Project Enquiry</button><span className="formHint">Enquiries are addressed to inquiries@eduappsplus.com.au.</span></div>
    {status && <p className="formStatus" role="status">{status}</p>}
  </form>;
}

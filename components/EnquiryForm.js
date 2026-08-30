"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EnquiryForm(){
  const searchParams=useSearchParams();
  const caseStudy=searchParams.get("caseStudy") || "";
  const [status,setStatus]=useState("");
  const [submitting,setSubmitting]=useState(false);
  const [sent,setSent]=useState(false);
  const [submittedName,setSubmittedName]=useState("");

  async function submitEnquiry(event){
    event.preventDefault();
    if(submitting) return;

    const formElement=event.currentTarget;
    const form=new FormData(formElement);
    const payload={
      name:String(form.get("name")||"").trim(),
      email:String(form.get("email")||"").trim(),
      organisation:String(form.get("organisation")||"").trim(),
      projectType:String(form.get("projectType")||"").trim(),
      stage:String(form.get("stage")||"").trim(),
      details:String(form.get("details")||"").trim(),
      helpful:String(form.get("helpful")||"").trim(),
      website:String(form.get("website")||"").trim(),
      caseStudy
    };

    if(!payload.name || !payload.email || !payload.details){
      setStatus("Please complete your name, email address and a short description of your idea or problem.");
      return;
    }

    setSubmitting(true);
    setStatus("Sending your enquiry…");

    try {
      const response=await fetch("/api/enquiry",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)
      });
      const result=await response.json().catch(()=>({}));

      if(!response.ok){
        throw new Error(result.error || "We could not send your enquiry.");
      }

      setSubmittedName(payload.name);
      setSent(true);
      setStatus("");
      formElement.reset();
      window.scrollTo({top:Math.max(0,formElement.getBoundingClientRect().top + window.scrollY - 120),behavior:"smooth"});
    } catch(error){
      setStatus(error.message || "We could not send your enquiry. Please email inquiries@eduappsplus.com.au.");
    } finally {
      setSubmitting(false);
    }
  }

  if(sent){
    return <div className="enquiryForm" role="status" aria-live="polite">
      <div style={{textAlign:"center",padding:"18px 0 8px"}}>
        <div aria-hidden="true" style={{width:"64px",height:"64px",borderRadius:"50%",display:"grid",placeItems:"center",margin:"0 auto 18px",background:"#e7f7ee",fontSize:"32px",fontWeight:"700"}}>✓</div>
        <span className="eyebrow dark">Enquiry received</span>
        <h2 className="largeHeading" style={{marginTop:"10px"}}>Thanks{submittedName ? `, ${submittedName}` : ""}. Your message is on its way.</h2>
        <p style={{maxWidth:"650px",margin:"14px auto 0"}}>Your project enquiry has been sent directly to EDU Apps Plus. We will review what you have described and reply using the email address you supplied.</p>
      </div>
      <div className="serviceGrid" style={{marginTop:"28px"}}>
        <div className="serviceCard"><h3>1. We review your idea</h3><p>We look at the problem, users and outcome you described rather than expecting you to provide a technical specification.</p></div>
        <div className="serviceCard"><h3>2. We reply by email</h3><p>We can clarify the requirements, discuss practical options and identify the most useful first version of the application.</p></div>
        <div className="serviceCard"><h3>3. We decide the next step</h3><p>If the project is a good fit, the next step may be a discussion, prototype, scope or development plan.</p></div>
      </div>
      <div className="formFooter" style={{marginTop:"28px",justifyContent:"center",gap:"14px",flexWrap:"wrap"}}>
        <Link className="primaryButton" href="/case-studies">View Case Studies</Link>
        <Link className="secondaryButton" href="/guides">Browse Guides</Link>
        <Link className="textLink" href="/">Return Home</Link>
      </div>
      <p className="formHint" style={{textAlign:"center",marginTop:"22px"}}>If you need to add something important, you can email inquiries@eduappsplus.com.au and mention the enquiry you just submitted.</p>
    </div>;
  }

  return <form className="enquiryForm" onSubmit={submitEnquiry}>
    {caseStudy && <div className="formStatus"><strong>Interested in something similar to {caseStudy}?</strong><br/>Tell us what you would like your version to do.</div>}
    <div aria-hidden="true" style={{position:"absolute",left:"-9999px",width:"1px",height:"1px",overflow:"hidden"}}><label htmlFor="website">Website</label><input id="website" name="website" tabIndex="-1" autoComplete="off" /></div>
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
    <div className="formFooter"><button className="submitButton" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send Enquiry"}</button><span className="formHint">Your enquiry is sent directly from this website. No email application is required.</span></div>
    {status && <p className="formStatus" role="status">{status}</p>}
    {status && status.includes("email inquiries@eduappsplus.com.au") && <p><a className="textLink" href="mailto:inquiries@eduappsplus.com.au">Email inquiries@eduappsplus.com.au →</a></p>}
  </form>;
}

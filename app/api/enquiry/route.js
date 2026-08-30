import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 4000) {
  return String(value || "").trim().slice(0, max);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function row(label, value) {
  return `<tr><td style="padding:8px 12px;font-weight:700;vertical-align:top;border-bottom:1px solid #e5e7eb;">${escapeHtml(label)}</td><td style="padding:8px 12px;vertical-align:top;border-bottom:1px solid #e5e7eb;">${escapeHtml(value || "Not supplied")}</td></tr>`;
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot field: real visitors never see or complete this.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const organisation = clean(body.organisation, 200);
    const projectType = clean(body.projectType, 200);
    const stage = clean(body.stage, 200);
    const details = clean(body.details, 5000);
    const helpful = clean(body.helpful, 5000);
    const caseStudy = clean(body.caseStudy, 200);

    if (!name || !email || !details) {
      return NextResponse.json({ error: "Please provide your name, email address and project description." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Enquiry email failed: RESEND_API_KEY is not configured.");
      return NextResponse.json({ error: "Online enquiries are temporarily unavailable. Please email inquiries@eduappsplus.com.au." }, { status: 503 });
    }

    const to = process.env.ENQUIRY_TO_EMAIL || "inquiries@eduappsplus.com.au";
    const from = process.env.ENQUIRY_FROM_EMAIL || "EDU Apps Plus Website <website@eduappsplus.com.au>";
    const subject = caseStudy
      ? `Website enquiry from ${name} — similar to ${caseStudy}`
      : `Website project enquiry from ${name}`;

    const text = [
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
      helpful || "Not supplied",
    ].filter((item) => item !== null).join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#111827;">
        <h1 style="font-size:24px;margin-bottom:8px;">New EDU Apps Plus project enquiry</h1>
        <p style="margin-top:0;color:#4b5563;">Submitted directly through eduappsplus.com.au.</p>
        <table style="width:100%;border-collapse:collapse;margin:24px 0;">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Business / organisation", organisation)}
          ${row("Project type", projectType || "Not sure yet")}
          ${row("Project stage", stage)}
          ${caseStudy ? row("Case study of interest", caseStudy) : ""}
        </table>
        <h2 style="font-size:18px;">Idea / problem to solve</h2>
        <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(details)}</p>
        <h2 style="font-size:18px;">Anything else that may help</h2>
        <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(helpful || "Not supplied")}</p>
      </div>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!response.ok) {
      const providerError = await response.text();
      console.error("Resend enquiry error:", response.status, providerError);
      return NextResponse.json({ error: "We could not send your enquiry. Please try again or email inquiries@eduappsplus.com.au." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json({ error: "We could not send your enquiry. Please try again or email inquiries@eduappsplus.com.au." }, { status: 500 });
  }
}

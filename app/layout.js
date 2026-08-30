import "./globals.css";

const siteUrl = "https://www.eduappsplus.com.au";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EDU Apps Plus | Custom App & Software Developer Gold Coast",
    template: "%s | EDU Apps Plus"
  },
  description: "Custom app and software development on the Gold Coast, Queensland. EDU Apps Plus helps schools, small businesses and individuals turn ideas and manual processes into practical web, AI and mobile applications.",
  keywords: [
    "app developer Gold Coast",
    "software developer Gold Coast",
    "custom app development Queensland",
    "small business app developer",
    "education app developer",
    "web application developer",
    "AI app development",
    "turn app idea into reality"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "EDU Apps Plus | Custom App & Software Development",
    description: "Turn an idea, workflow or business problem into a practical web, AI or mobile application.",
    url: siteUrl,
    siteName: "EDU Apps Plus",
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "EDU Apps Plus | Custom App & Software Development",
    description: "Custom software for education, small business and specialist workflows."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EDU Apps Plus",
  url: siteUrl,
  email: "inquiries@eduappsplus.com.au",
  description: "Custom web, AI and mobile application development for education, small business and specialist workflows.",
  areaServed: [
    { "@type": "City", name: "Gold Coast" },
    { "@type": "State", name: "Queensland" },
    { "@type": "Country", name: "Australia" }
  ],
  knowsAbout: [
    "Custom software development",
    "Web application development",
    "Education software",
    "Small business software",
    "AI integration",
    "API integration",
    "Database applications",
    "Swift and SwiftUI applications"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

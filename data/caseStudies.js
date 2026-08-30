export const caseStudies = [
  {
    slug: "student-evidence",
    name: "Student Evidence",
    category: "Education Platform",
    status: "Live application",
    seoTitle: "Student Evidence — Custom Education Assessment Software",
    seoDescription: "Case study of a custom education platform for student evidence, assessment workflows, teacher dashboards, real-time progress monitoring and AI-assisted review.",
    summary: "A full-stack assessment and learning platform that helps teachers monitor student progress, capture evidence and support assessment workflows.",
    problem: "Teachers need a practical way to see student progress while work is happening, retain evidence of development and manage assessment without relying on disconnected documents and systems.",
    solution: "Student Evidence brings student writing, draft history, teacher monitoring, assessment workflows and AI-assisted review into one database-backed platform.",
    features: ["Teacher and student dashboards", "Authentication and user roles", "Real-time activity monitoring", "Automatic draft history and progress evidence", "AI-assisted assessment workflows", "Cloud file storage and PDF workflows"],
    tech: ["Node.js", "Express", "PostgreSQL", "AWS", "S3", "AI integration"],
    capability: "Full-stack development, PostgreSQL, AWS, dashboards, authentication, real-time monitoring and AI",
    related: [
      { href: "/education-apps", label: "Education App Development" },
      { href: "/custom-software-for-schools", label: "How Custom Software Helps Schools" },
      { href: "/ai-for-business-apps", label: "Adding AI to Applications" }
    ],
    liveUrl: "https://student-evidence.eduappsplus.com.au/"
  },
  {
    slug: "pracpath",
    name: "PracPath",
    category: "Workflow Platform",
    status: "In development",
    seoTitle: "PracPath — Custom Placement & Mentor Workflow Software",
    seoDescription: "Case study of a multi-user placement management platform connecting students and mentors through scheduling, evidence, planning and review workflows.",
    summary: "A multi-user platform designed to support professional placements by connecting students and mentors through structured planning, evidence and review workflows.",
    problem: "Professional placements involve schedules, mentor/student communication, evidence and sign-off processes that can become fragmented across multiple systems.",
    solution: "PracPath provides a shared workflow where participants can plan placement activities, record progress and complete mentor/mentee processes in one application.",
    features: ["Mentor and student accounts", "Placement schedules", "Shared workflow and progress tracking", "Lesson and activity planning", "Review and finalisation processes", "Role-based application views"],
    tech: ["React", "Node.js", "Database workflows", "Authentication"],
    capability: "Multi-user workflow and platform development",
    related: [
      { href: "/education-apps", label: "Education App Development" },
      { href: "/custom-software-for-schools", label: "Custom Software for Schools & Teachers" },
      { href: "/app-development", label: "Custom App Development" }
    ],
    liveUrl: "https://pracpath-mentor-pst-pi.vercel.app/"
  },
  {
    slug: "kofta-delights",
    name: "Kofta Delights",
    category: "Small Business",
    status: "Working application",
    seoTitle: "Kofta Delights — Custom Small Business Ordering App",
    seoDescription: "Case study of a custom small-business food ordering application with mobile ordering, payments, operational queues and customer pickup workflows.",
    summary: "A small-business food ordering application designed around real stall operations, customer ordering, payments and pickup workflow.",
    problem: "A mobile food business needs ordering and payment to be fast for customers while keeping the operational queue simple for the person preparing orders.",
    solution: "Kofta Delights combines menu selection, ordering, payment integration and an operational order queue in a mobile-friendly application.",
    features: ["Mobile-friendly menu and ordering", "Cart and checkout workflow", "Payment integration", "Order queue", "Pickup workflow", "Operational wait-time support"],
    tech: ["Web application", "Payment APIs", "Responsive UI", "Order workflow"],
    capability: "Real small-business application, ordering, payments and operations",
    related: [
      { href: "/small-business-apps", label: "Small Business App Development" },
      { href: "/small-business-app-cost", label: "Small Business App Cost Guide" },
      { href: "/web-app-vs-mobile-app", label: "Web App vs Mobile App" }
    ],
    liveUrl: "https://kofta-delights.vercel.app/"
  },
  {
    slug: "friends-hot-50",
    name: "Friends Hot 50",
    category: "Music & Events",
    status: "Working prototype",
    seoTitle: "Friends Hot 50 — Spotify API & Live Event App",
    seoDescription: "Case study of a custom live event application using Spotify OAuth, playback tracking, API integration, countdown logic and live event functionality.",
    summary: "A live social music countdown application that connects with Spotify and turns a shared playlist into an event with automatic tracking and prize moments.",
    problem: "A group music countdown needs to follow what Spotify actually plays while keeping the upcoming order hidden and recording countdown positions automatically.",
    solution: "Friends Hot 50 connects to Spotify, monitors playback and records unique songs into a live countdown experience with milestone prizes and event controls.",
    features: ["Spotify OAuth integration", "Automatic playback tracking", "Live countdown", "Prize milestones", "Event dashboard", "Shared party experience"],
    tech: ["Node.js", "Express", "Spotify API", "SQLite", "AWS", "WebSockets / live updates"],
    capability: "Spotify/API integration and live event functionality",
    related: [
      { href: "/app-development", label: "Custom App & API Development" },
      { href: "/web-app-vs-mobile-app", label: "Web App vs Mobile App" },
      { href: "/have-an-idea", label: "Turn an App Idea Into a Project" }
    ],
    liveUrl: "https://hot50.eduappsplus.com.au/"
  },
  {
    slug: "fishfinder-helper",
    name: "Fishfinder Helper",
    category: "Specialist Tool",
    status: "Live prototype",
    seoTitle: "Fishfinder Helper — Specialist Web App Prototype",
    seoDescription: "Case study showing how specialist knowledge can become a focused, mobile-friendly custom web application and practical user tool.",
    summary: "A practical fishing companion designed to help users understand fishfinder information and make better use of marine electronics on the water.",
    problem: "Fishfinder and sonar displays provide a large amount of technical information that can be difficult for occasional users to interpret confidently.",
    solution: "Fishfinder Helper presents guidance in a simpler, accessible application so users can better understand their equipment and apply that information while fishing.",
    features: ["Specialist fishing guidance", "Mobile-friendly interface", "Practical reference information", "Simple user-focused workflow"],
    tech: ["Web application", "Responsive UI", "Vercel"],
    capability: "Turning specialist knowledge into a simple purpose-built application",
    related: [
      { href: "/have-an-idea", label: "I Have an App Idea — Where Do I Start?" },
      { href: "/app-development", label: "Custom App Development" },
      { href: "/web-app-vs-mobile-app", label: "Web App vs Mobile App" }
    ],
    liveUrl: "https://fishfinder-helper.vercel.app/"
  }
];

export function getCaseStudy(slug) {
  return caseStudies.find((study) => study.slug === slug);
}

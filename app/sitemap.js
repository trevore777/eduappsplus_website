import { caseStudies } from "../data/caseStudies";

const baseUrl = "https://www.eduappsplus.com.au";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/app-development",
    "/education-apps",
    "/small-business-apps",
    "/small-business-app-cost",
    "/web-app-vs-mobile-app",
    "/ai-for-business-apps",
    "/have-an-idea",
    "/case-studies",
    "/enquire",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/enquire" ? 0.7 : 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}

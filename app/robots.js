export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/admin/"],
    },
    sitemap: "https://www.eduappsplus.com.au/sitemap.xml",
    host: "https://www.eduappsplus.com.au",
  };
}

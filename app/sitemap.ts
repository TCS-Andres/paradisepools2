import type { MetadataRoute } from "next";

// TODO CONFIRM DOMAIN: placeholder production domain for the site.
const SITE_URL = "https://paradisepoolsfl.com";

// Single-page site, so the sitemap has one canonical entry.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

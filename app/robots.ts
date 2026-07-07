import type { MetadataRoute } from "next";

// TODO CONFIRM DOMAIN: placeholder production domain for the site.
const SITE_URL = "https://paradisepoolsfl.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

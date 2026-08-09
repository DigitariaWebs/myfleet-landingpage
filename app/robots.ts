import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Per-agency pairing bridges (/pair/<agency-uuid>). No SEO value, and
      // indexing them would publish agency identifiers. Also carries
      // robots: noindex in its own metadata and is absent from the sitemap.
      disallow: "/pair/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

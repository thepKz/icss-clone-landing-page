import type { MetadataRoute } from "next";
import { SITE_CANONICAL_ORIGIN } from "@/lib/site-canonical";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CANONICAL_ORIGIN}/sitemap.xml`,
  };
}

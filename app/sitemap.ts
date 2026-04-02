import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { INDEXED_STATIC_PATHS } from "@/lib/indexed-routes";
import { SITE_CANONICAL_ORIGIN } from "@/lib/site-canonical";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CANONICAL_ORIGIN;
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = INDEXED_STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/articles/${a.slug}`,
    lastModified: new Date(`${a.date}T12:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...articleEntries];
}

import type { MetadataRoute } from "next";
import { COMPANIES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/companies", priority: 0.9 },
    { path: "/sustainability", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/fraud-alert", priority: 0.6 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE.url}${r.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r.priority,
    })),
    ...COMPANIES.map((c) => ({
      url: `${SITE.url}/companies/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

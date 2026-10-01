import type { MetadataRoute } from "next";
import { site } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

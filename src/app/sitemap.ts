import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://megagaraj.az";
  const pages = ["", "/xidmetler/ppf", "/qiymetler", "/isler", "/elaqe", "/blog"];
  return pages.map((p) => ({ url: base + p, lastModified: new Date() }));
}

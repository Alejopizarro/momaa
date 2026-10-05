import type { MetadataRoute } from "next";
import { routing } from "../../routing";
import { projects } from "@/data/projects";
import { getAllNewsArticles } from "@/data/news";

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://momaa.es";
const locales = routing.locales;

/** Builds the hreflang alternates map for a given locale-less path, e.g. "/news/my-slug" */
function alternatesFor(path: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
  );
  return {
    languages: { ...languages, "x-default": `${SITE_URL}/${routing.defaultLocale}${path}` },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newsArticles = getAllNewsArticles();
  const entries: MetadataRoute.Sitemap = [];

  // Home — highest priority
  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      changeFrequency: "weekly",
      priority: 1,
      alternates: alternatesFor(""),
    });
  }

  // News listing
  entries.push(
    ...locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/news`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      alternates: alternatesFor("/news"),
    })),
  );

  // News articles — prioritized above project pages
  for (const article of newsArticles) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}/news/${article.slug}`,
        lastModified: article.publishedDate,
        changeFrequency: "monthly",
        priority: 0.85,
        alternates: alternatesFor(`/news/${article.slug}`),
      });
    }
  }

  // Projects listing
  entries.push(
    ...locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/projects`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: alternatesFor("/projects"),
    })),
  );

  // Project detail pages
  for (const project of projects) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}/projects/${project.id}`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesFor(`/projects/${project.id}`),
      });
    }
  }

  // About
  entries.push(
    ...locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/about`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: alternatesFor("/about"),
    })),
  );

  // Contact
  entries.push(
    ...locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/contact`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
      alternates: alternatesFor("/contact"),
    })),
  );

  return entries;
}

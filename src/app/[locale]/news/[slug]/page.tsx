import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../../../../routing";
import { getAllNewsArticles, getNewsArticle } from "@/data/news";
import { ShareButtons } from "@/components/atoms/ShareButtons";

type Locale = (typeof routing.locales)[number];

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://momaa.es";
const OG_LOCALE: Record<Locale, string> = { es: "es_ES", en: "en_US" };

export function generateStaticParams() {
  const slugs = getAllNewsArticles().map((a) => a.slug);
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const lang = params.locale as "es" | "en";
  const article = getNewsArticle(params.slug);
  if (!article) return {};

  const title = article.metaTitle[lang];
  const description = article.metaDescription[lang];
  const url = `${SITE_URL}/${params.locale}/news/${article.slug}`;
  const imageUrl = `${SITE_URL}${article.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es/news/${article.slug}`,
        en: `${SITE_URL}/en/news/${article.slug}`,
        "x-default": `${SITE_URL}/es/news/${article.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "MoMaA Architects",
      locale: OG_LOCALE[params.locale],
      publishedTime: article.publishedDate,
      images: [{ url: imageUrl, width: 1200, height: 675, alt: article.title[lang] }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function NewsArticlePage({
  params,
}: {
  params: { locale: Locale; slug: string };
}) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const article = getNewsArticle(slug);
  if (!article) notFound();

  const lang = locale as "es" | "en";
  const title = article.title[lang];
  const category = article.category[lang];
  const url = `${SITE_URL}/${locale}/news/${article.slug}`;
  const imageUrl = `${SITE_URL}${article.image}`;

  const articleBody = article.content
    .filter((block) => block.type === "paragraph" || block.type === "quote")
    .map((block) => block[lang])
    .join("\n\n");

  const displayDate = new Date(`${article.publishedDate}T00:00:00`).toLocaleDateString(
    lang === "es" ? "es-ES" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: title,
        description: article.metaDescription[lang],
        articleBody,
        image: [imageUrl],
        datePublished: article.publishedDate,
        dateModified: article.publishedDate,
        inLanguage: lang,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: {
          "@type": "Organization",
          name: "MoMaA Architects",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "MoMaA Architects",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo-momaa.svg`,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: lang === "es" ? "Inicio" : "Home",
            item: `${SITE_URL}/${locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: lang === "es" ? "Noticias" : "News",
            item: `${SITE_URL}/${locale}/news`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero imagen */}
      <div
        className="relative w-full bg-[#1a1a1a]"
        style={{ height: "60vh", minHeight: "360px" }}
      >
        <Image
          src={article.image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="absolute top-0 left-0 right-0 pt-20 px-8 md:px-16"
        >
          <ol className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60">
            <li>
              <Link href={`/${locale}`} className="hover:text-white transition-colors duration-200">
                {lang === "es" ? "Inicio" : "Home"}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/${locale}/news`} className="hover:text-white transition-colors duration-200">
                {lang === "es" ? "Noticias" : "News"}
              </Link>
            </li>
          </ol>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#E8572A] font-bold mb-3">
            {category} · {displayDate}
          </p>
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl text-white leading-tight max-w-4xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left — meta/share */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-28">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Categoría" : "Category"}
                </p>
                <p className="text-sm font-bold text-[#111111] uppercase tracking-wider">
                  {category}
                </p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Fecha" : "Date"}
                </p>
                <p className="text-sm text-[#111111]">{displayDate}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Autor" : "Author"}
                </p>
                <p className="text-sm text-[#111111]">MoMaA Architects</p>
              </div>

              {article.sources && article.sources.length > 0 && (
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-3">
                    {lang === "es" ? "En los medios" : "In the media"}
                  </p>
                  <ul className="space-y-2">
                    {article.sources.map((source, i) => (
                      <li key={i}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-2 text-[11px] text-black/50 hover:text-[#E8572A] transition-colors duration-200"
                        >
                          {source.label}
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="shrink-0">
                            <path
                              d="M2 6h8M6 2l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="square"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ShareButtons title={title} lang={lang} />
            </div>
          </div>

          {/* Right — body */}
          <div className="lg:col-span-2 space-y-8">
            {article.content.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-base md:text-lg text-black/65 leading-relaxed font-light"
                  >
                    {block[lang]}
                  </p>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote key={i} className="border-l-2 border-[#E8572A] pl-6 py-1">
                    <p className="text-base md:text-lg text-black/70 leading-relaxed italic font-light">
                      &ldquo;{block[lang]}&rdquo;
                    </p>
                    {block.cite && (
                      <cite className="block mt-3 text-[10px] uppercase tracking-[0.3em] text-black/35 not-italic">
                        {block.cite[lang]}
                      </cite>
                    )}
                  </blockquote>
                );
              }

              return (
                <div key={i}>
                  {block.heading && (
                    <h2 className="font-display text-lg md:text-xl text-[#111111] uppercase tracking-wide mb-5 pb-3 border-b border-black/10">
                      {block.heading[lang]}
                    </h2>
                  )}
                  <ul className="space-y-3">
                    {block.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3">
                        {block.style === "checklist" ? (
                          <span
                            aria-hidden="true"
                            className="mt-[3px] w-[14px] h-[14px] shrink-0 border border-black/25"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="mt-[10px] w-[5px] h-[5px] shrink-0 rounded-full bg-[#E8572A]"
                          />
                        )}
                        <span className="text-sm md:text-base text-black/65 leading-relaxed font-light">
                          {item[lang]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-black/8 px-8 md:px-16 py-10">
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-black/40 hover:text-[#111111] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M12 7H2M6 2L1 7l5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </svg>
          {lang === "es" ? "Volver a todas las noticias" : "Back to all news"}
        </Link>
      </div>
    </main>
  );
}

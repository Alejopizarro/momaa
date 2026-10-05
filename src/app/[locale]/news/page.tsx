import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../../routing";
import { getAllNewsArticles } from "@/data/news";

type Locale = (typeof routing.locales)[number];

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://momaa.es";

const PAGE_COPY = {
  es: {
    sectionLabel: "Noticias",
    title: "Últimas noticias",
    readMore: "Leer más",
    metaTitle: "Noticias | MoMaA Architects",
    metaDescription:
      "Últimas noticias, proyectos y novedades del estudio de arquitectura MoMaA en Marbella y la Costa del Sol.",
  },
  en: {
    sectionLabel: "News",
    title: "Latest news",
    readMore: "Read more",
    metaTitle: "News | MoMaA Architects",
    metaDescription:
      "Latest news, projects and updates from MoMaA — architecture studio in Marbella and the Costa del Sol.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const lang = params.locale as "es" | "en";
  const copy = PAGE_COPY[lang];
  const url = `${SITE_URL}/${params.locale}/news`;

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es/news`,
        en: `${SITE_URL}/en/news`,
        "x-default": `${SITE_URL}/es/news`,
      },
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url,
      type: "website",
      siteName: "MoMaA Architects",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function NewsPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  setRequestLocale(locale);

  const lang = locale as "es" | "en";
  const copy = PAGE_COPY[lang];
  const articles = getAllNewsArticles();

  return (
    <main className="bg-white min-h-screen pt-16">
      {/* Page hero */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 border-b border-black/8">
        <p className="section-label mb-6">{copy.sectionLabel}</p>
        <h1 className="heading-section text-[#111111]">{copy.title}</h1>
      </div>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="flex flex-col divide-y divide-black/8">
          {articles.map((article) => {
            const displayDate = new Date(
              `${article.publishedDate}T00:00:00`,
            ).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            return (
              <Link
                key={article.slug}
                href={`/${locale}/news/${article.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-6 md:gap-12 py-10 md:py-14 hover:bg-surface transition-colors duration-300 -mx-8 md:-mx-16 px-8 md:px-16"
              >
                {/* Thumbnail + meta */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
                    <Image
                      src={article.image}
                      alt={article.title[lang]}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <div className="flex md:flex-col justify-between md:justify-start gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E8572A]">
                      {article.category[lang]}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-black/30">
                      {displayDate}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-[#111111] uppercase leading-tight mb-5 group-hover:text-[#E8572A] transition-colors duration-200">
                    {article.title[lang]}
                  </h2>
                  <p className="text-sm md:text-base text-black/50 leading-relaxed max-w-2xl font-light">
                    {article.excerpt[lang]}
                  </p>
                </div>

                {/* Read more arrow */}
                <div className="hidden md:flex items-start pt-1">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#E8572A] transition-colors duration-200 whitespace-nowrap">
                    {copy.readMore}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7h12M8 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

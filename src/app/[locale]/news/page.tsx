import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '../../../../routing'

type Locale = (typeof routing.locales)[number]

interface Article {
  id: string
  category: string
  date: string
  title: string
  excerpt: string
  href: string
}

export const metadata: Metadata = {
  title: 'News | MoMaA Architects',
  description: 'Latest news and projects from MoMaA — architecture studio in Marbella.',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default async function NewsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const { locale } = params
  setRequestLocale(locale)

  const t = await getTranslations('blog')
  const articles = t.raw('articles') as Article[]
  const lang = locale as 'es' | 'en'

  const labels = {
    es: { sectionLabel: 'Noticias', title: 'Últimas noticias', readMore: t('readMore') },
    en: { sectionLabel: 'News', title: 'Latest news', readMore: t('readMore') },
  }[lang]

  return (
    <main className="bg-white min-h-screen pt-16">

      {/* Page hero */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 border-b border-black/8">
        <p className="section-label mb-6">{labels.sectionLabel}</p>
        <h1 className="heading-section text-[#111111]">{labels.title}</h1>
      </div>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="flex flex-col divide-y divide-black/8">
          {articles.map((article, i) => (
            <a
              key={article.id}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 py-10 md:py-14 hover:bg-surface transition-colors duration-300 -mx-8 md:-mx-16 px-8 md:px-16"
            >
              {/* Index + meta */}
              <div className="flex md:flex-col justify-between md:justify-start gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E8572A]">
                  {article.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-black/30">
                  {article.date}
                </span>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-[#111111] uppercase leading-tight mb-5 group-hover:text-[#E8572A] transition-colors duration-200">
                  {article.title}
                </h2>
                <p className="text-sm md:text-base text-black/50 leading-relaxed max-w-2xl font-light">
                  {article.excerpt}
                </p>
              </div>

              {/* Read more arrow */}
              <div className="hidden md:flex items-start pt-1">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 group-hover:text-[#E8572A] transition-colors duration-200 whitespace-nowrap">
                  {labels.readMore}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}

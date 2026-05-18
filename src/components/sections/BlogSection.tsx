import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { SectionLabel } from '@/components/atoms/SectionLabel'

interface Article {
  id: string
  category: string
  date: string
  title: string
  excerpt: string
  href: string
}

export function BlogSection() {
  const t = useTranslations('blog')
  const locale = useLocale()
  const articles = t.raw('articles') as Article[]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <SectionLabel>{t('sectionLabel')}</SectionLabel>
            <h2 className="heading-section text-[#111111]">{t('sectionTitle')}</h2>
          </div>
          <Link
            href={`/${locale}/noticias`}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40 hover:text-[#E8572A] transition-colors duration-200 shrink-0"
          >
            {t('viewAll')}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
            </svg>
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-surface p-8 hover:bg-white hover:shadow-sm transition-all duration-300"
              style={{ borderTop: '2px solid #E8572A' }}
            >
              {/* Category + date */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8572A]">
                  {article.category}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-black/40">
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl text-[#111111] leading-tight mb-4">
                {article.title}
              </h3>

              {/* Excerpt — line-clamp via inline style for Tailwind v3 compatibility */}
              <p
                className="text-sm text-black/50 leading-relaxed flex-1"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {article.excerpt}
              </p>

              {/* Read more */}
              <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#E8572A] group-hover:underline">
                {t('readMore')}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

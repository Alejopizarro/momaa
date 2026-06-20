'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { SectionLabel } from '@/components/atoms/SectionLabel'

export interface InstagramPost {
  url: string
  description: string
}

interface InstagramGridProps {
  posts: InstagramPost[]
  /** Number of columns to display. Defaults to the number of posts (max 4). */
  columns?: 1 | 2 | 3 | 4
  sectionLabel?: string
  title?: string
  followUrl?: string
}

function isReel(url: string): boolean {
  return url.includes('/reel/')
}

function renderDescription(text: string) {
  return text.split(/(\s+)/).map((part, i) => {
    const trimmed = part.trim()
    if (trimmed.startsWith('#')) {
      return (
        <span key={i} className="text-[#E8572A]">
          {part}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
)

function InstagramCard({ post }: { post: InstagramPost }) {
  const [expanded, setExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const reel = isReel(post.url)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px', threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Once the blockquote is in the DOM, ask Instagram to process it.
  // Works whether the script was already loaded or is still loading
  // (the onLoad on <Script> handles the initial batch; this handles lazy additions).
  useEffect(() => {
    if (!mounted) return
    const win = window as typeof window & { instgrm?: { Embeds: { process(): void } } }
    win.instgrm?.Embeds.process()
  }, [mounted])

  return (
    <div
      ref={cardRef}
      className="flex flex-col bg-white border border-black/[0.08] hover:border-[#E8572A] transition-colors duration-500"
    >
      {/* Card header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06]">
        <div className="flex items-center gap-2.5">
          <InstagramIcon className="text-[#E8572A]" />
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/40">
            momaa_architects
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-black/30">
          {reel ? (
            <>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                <polygon points="0,0 9,5 0,10" />
              </svg>
              Reel
            </>
          ) : (
            'Publicación'
          )}
        </span>
      </div>

      {/* Embed area */}
      <div className="w-full overflow-hidden flex-1">
        {mounted ? (
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={post.url}
            data-instgrm-version="14"
            style={{
              background: '#fff',
              border: '0',
              borderRadius: '0',
              boxShadow: 'none',
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%',
              minWidth: '100%',
              padding: '0',
              width: '99%',
            }}
          />
        ) : (
          <div
            className="w-full bg-[#f7f5f2] flex flex-col items-center justify-center gap-3"
            style={{ minHeight: '420px' }}
          >
            <InstagramIcon className="text-black/15" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20">
              Cargando
            </span>
          </div>
        )}
      </div>

      {/* Description with expandable hashtags */}
      <div className="px-5 pt-4 pb-5 border-t border-black/[0.06]">
        <p
          className="text-[12.5px] text-black/55 leading-relaxed font-sans"
          style={
            !expanded
              ? {
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }
              : {}
          }
        >
          {renderDescription(post.description)}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2.5 inline-flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-[0.25em] text-black/30 hover:text-[#E8572A] transition-colors duration-200 cursor-pointer"
          aria-label={expanded ? 'Ocultar descripción completa' : 'Ver descripción completa'}
        >
          {expanded ? 'Ver menos' : 'Ver más'}
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          >
            <path
              d="M1.5 3.5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const gridColClasses: Record<1 | 2 | 3 | 4, string> = {
  1: 'grid-cols-1 max-w-lg mx-auto',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function InstagramGrid({
  posts,
  columns,
  sectionLabel = 'Instagram',
  title = 'Síguenos en Instagram',
  followUrl,
}: InstagramGridProps) {
  const cols = ((columns ?? Math.min(posts.length, 4)) as 1 | 2 | 3 | 4)

  return (
    <section className="section-padding bg-white">
      {/* Load Instagram embed script once per page */}
      <Script
        src="//www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          const win = window as typeof window & { instgrm?: { Embeds: { process(): void } } }
          win.instgrm?.Embeds.process()
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <SectionLabel>{sectionLabel}</SectionLabel>
            <h2 className="heading-section text-[#111111]">{title}</h2>
          </div>
          {followUrl && (
            <a
              href={followUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-black/40 hover:text-[#E8572A] transition-colors duration-200 shrink-0"
            >
              Seguir en Instagram
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Responsive grid */}
        <div className={`grid ${gridColClasses[cols]} gap-6 md:gap-8`}>
          {posts.map((post, i) => (
            <InstagramCard key={i} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

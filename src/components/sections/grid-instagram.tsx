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
    if (part.trim().startsWith('#')) {
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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
)

function CardSkeleton() {
  return (
    <div className="flex flex-col bg-[#f7f5f2]" style={{ minHeight: 500 }}>
      <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/[0.05] flex-shrink-0">
        <div className="w-9 h-9 rounded-full skeleton-shimmer flex-shrink-0" />
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="skeleton-shimmer h-2 w-28" />
          <div className="skeleton-shimmer h-1.5 w-20" />
        </div>
        <div className="skeleton-shimmer h-7 w-20 flex-shrink-0" />
      </div>
      <div className="flex-1 skeleton-shimmer" style={{ minHeight: 340 }} />
      <div className="flex items-center gap-3 px-4 py-3 border-t border-black/[0.05] flex-shrink-0">
        <div className="skeleton-shimmer w-5 h-5" />
        <div className="skeleton-shimmer w-5 h-5" />
        <div className="skeleton-shimmer w-5 h-5" />
        <div className="skeleton-shimmer w-5 h-5 ml-auto" />
      </div>
      <div className="px-4 pb-4 flex-shrink-0 flex flex-col gap-2 pt-2">
        <div className="skeleton-shimmer h-2 w-16" />
        <div className="skeleton-shimmer h-2 w-full" />
        <div className="skeleton-shimmer h-2 w-3/4" />
      </div>
    </div>
  )
}

function InstagramCard({ post, index }: { post: InstagramPost; index: number }) {
  const [visible, setVisible] = useState(false)
  const [embedReady, setEmbedReady] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const embedWrapRef = useRef<HTMLDivElement>(null)
  const reel = isReel(post.url)

  // Mount embed lazily when card approaches viewport
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px', threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Ask embed.js to process any new blockquotes
  useEffect(() => {
    if (!visible) return
    const win = window as typeof window & { instgrm?: { Embeds: { process(): void } } }
    win.instgrm?.Embeds.process()
  }, [visible])

  // Watch for embed.js to replace blockquote with iframe → crossfade skeleton out
  useEffect(() => {
    const wrap = embedWrapRef.current
    if (!wrap || !visible) return
    const mo = new MutationObserver(() => {
      if (wrap.querySelector('iframe')) {
        setEmbedReady(true)
        mo.disconnect()
      }
    })
    mo.observe(wrap, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [visible])

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col bg-white overflow-hidden transition-[border-color,box-shadow] duration-500 hover:shadow-[0_12px_48px_rgba(232,87,42,0.10)] ${
        visible ? 'animate-fadeInUp' : 'opacity-0'
      }`}
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        ...(visible ? { animationDelay: `${index * 90}ms` } : {}),
      }}
    >
      {/* Animated orange accent bar */}
      <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#E8572A] transition-[width] duration-500 ease-in-out z-20" />

      {/* Card header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06]">
        <div className="flex items-center gap-2.5">
          <InstagramIcon className="text-[#E8572A]" />
          <span className="text-[8.5px] font-black uppercase tracking-[0.35em] text-black/35">
            momaa_architects
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[8.5px] font-black uppercase tracking-[0.3em] text-black/25">
            {reel ? (
              <>
                <svg width="8" height="9" viewBox="0 0 9 10" fill="currentColor">
                  <polygon points="0,0 9,5 0,10" />
                </svg>
                Reel
              </>
            ) : (
              'Post'
            )}
          </span>
          <span className="text-[8px] font-black text-black/15 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Embed area — height driven by embed.js, not by us */}
      <div ref={embedWrapRef} className="relative w-full">
        {/*
          Skeleton: in normal flow (gives height) while embed not ready.
          Becomes absolute overlay (no height impact) while fading out.
        */}
        <div
          className={`z-10 transition-opacity duration-700 ${
            embedReady
              ? 'opacity-0 pointer-events-none absolute inset-0'
              : 'opacity-100 relative'
          }`}
        >
          <CardSkeleton />
        </div>

        {/*
          Blockquote wrapper: kept out of flow (absolute + opacity-0) while skeleton
          is showing, so it doesn't contribute to card height yet.
          Once embedReady, becomes part of normal flow at its natural height.
        */}
        <div className={embedReady ? 'relative' : 'absolute inset-0 opacity-0 overflow-hidden'}>
          {visible && (
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
          )}
        </div>
      </div>

      {/* Description footer */}
      <div className="px-5 pt-4 pb-5 border-t border-black/[0.06]">
        <p
          className="text-[12px] text-black/50 leading-relaxed font-sans"
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
          className="mt-2.5 inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-black/30 hover:text-[#E8572A] transition-colors duration-200 cursor-pointer"
          aria-label={expanded ? 'Ocultar descripción completa' : 'Ver descripción completa'}
        >
          {expanded ? 'Ver menos' : 'Ver más'}
          <svg
            width="8"
            height="8"
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
              className="group/link inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-black/40 hover:text-[#E8572A] transition-colors duration-200 shrink-0"
            >
              Seguir en Instagram
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-200 group-hover/link:translate-x-1"
              >
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
            <InstagramCard key={i} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

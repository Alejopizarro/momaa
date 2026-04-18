'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Build alternate locale path
  const alternatePath = pathname.replace(`/${locale}`, locale === 'es' ? '/en' : '/es')
  const alternateLocale = locale === 'es' ? 'EN' : 'ES'
  const currentLocaleLabel = locale === 'es' ? 'ES' : 'EN'

  const navLinks = [
    { href: `/${locale}#proyectos`, label: t('proyectos') },
    { href: `/${locale}#sobre-nosotros`, label: t('sobreNosotros') },
    { href: `/${locale}#servicios`, label: t('servicios') },
    { href: `/${locale}#contacto`, label: t('contacto') },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-[100]"
      style={{
        background: scrolled ? 'rgba(13, 13, 13, 0.75)' : 'rgba(13, 13, 13, 0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0)',
        transition: 'background 500ms ease, backdrop-filter 500ms ease, -webkit-backdrop-filter 500ms ease, border-color 500ms ease',
      }}
    >
      <div className="container-momaa h-20 md:h-24 flex items-center justify-between">
        {/* Left: logo + links */}
        <div className="flex items-center gap-12 lg:gap-16">
          <Link href={`/${locale}`} className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter text-white hover:text-primary transition-colors duration-200">
            MoMaA
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: locale + CTA */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Language switcher */}
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-r border-white/10 pr-6 md:pr-8">
            <span className="text-primary">{currentLocaleLabel}</span>
            <span className="text-white/20">/</span>
            <Link
              href={alternatePath}
              className="text-white/30 hover:text-white transition-colors duration-200"
            >
              {alternateLocale}
            </Link>
          </div>

          {/* CTA */}
          <Link
            href={`/${locale}#contacto`}
            className={cn(
              'bg-primary text-black px-6 md:px-8 py-3',
              'text-[10px] font-black uppercase tracking-widest',
              'hover:bg-white transition-colors duration-200 active:scale-95',
              'hidden sm:inline-flex items-center'
            )}
          >
            {t('cta')}
          </Link>

          {/* Mobile menu placeholder — expand in future */}
          <button className="lg:hidden text-white/70 hover:text-white p-2" aria-label="Menu">
            <svg width="22" height="14" fill="none" viewBox="0 0 22 14">
              <path d="M1 1h20M1 7h20M1 13h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Icon } from '@/components/atoms/Icon'

export function Footer() {
  const t = useTranslations('footer')
  const nav = useTranslations('nav')
  const locale = useLocale()

  const navLinks = [
    { href: `/${locale}#proyectos`, label: nav('proyectos') },
    { href: `/${locale}#sobre-nosotros`, label: nav('sobreNosotros') },
    { href: `/${locale}#servicios`, label: nav('servicios') },
    { href: `/${locale}#contacto`, label: nav('contacto') },
  ]

  const specialties: string[] = t.raw('specialtyItems') as string[]

  return (
    <footer className="bg-[#111111] pt-24 md:pt-32 pb-12">
      <div className="container-momaa">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20 md:mb-28">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center mb-8" aria-label="MoMaA">
              <img
                src="/logo-momaa.svg"
                alt="MoMaA"
                className="h-7 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              {t('tagline')}
            </p>
            <div className="flex gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-[#E8572A] transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-[#E8572A] transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-8">
              {t('nav')}
            </h5>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#E8572A] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-8">
              {t('specialties')}
            </h5>
            <ul className="space-y-5">
              {specialties.map((item) => (
                <li key={item}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-8">
              {t('contactTitle')}
            </h5>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Icon name="location_on" className="text-[#E8572A] mt-0.5" size="sm" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-loose">
                  Urb. La Capellania, Parcela nº20<br />29602 Marbella, Málaga
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="call" className="text-[#E8572A]" size="sm" />
                <a
                  href="tel:+34655584801"
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#E8572A] transition-colors duration-200"
                >
                  +34 655 584 801
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="mail" className="text-[#E8572A]" size="sm" />
                <a
                  href="mailto:andres@momaa.es"
                  className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#E8572A] transition-colors duration-200"
                >
                  andres@momaa.es
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-10 flex flex-col md:flex-row justify-between items-center gap-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/25">
            {t('copyright')}
          </p>
          <div className="flex gap-10">
            <Link
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-white/25 hover:text-[#E8572A] transition-colors duration-200"
            >
              {t('privacy')}
            </Link>
            <Link
              href="#"
              className="text-[10px] font-bold uppercase tracking-widest text-white/25 hover:text-[#E8572A] transition-colors duration-200"
            >
              {t('legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

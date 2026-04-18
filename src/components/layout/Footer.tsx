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
    <footer className="bg-black pt-24 md:pt-32 pb-12 border-t border-white/5">
      <div className="container-momaa">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20 md:mb-28">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-8">
              <span className="font-display text-4xl font-extrabold tracking-tighter text-white">MoMaA</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              {t('tagline')}
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">
              {t('nav')}
            </h5>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">
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
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8">
              {t('contactTitle')}
            </h5>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Icon name="location_on" className="text-primary mt-0.5" size="sm" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-loose">
                  Urb. La Capellania, Parcela nº20<br />29602 Marbella, Málaga
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="call" className="text-primary" size="sm" />
                <a href="tel:+34655584801" className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors">
                  +34 655 584 801
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="mail" className="text-primary" size="sm" />
                <a href="mailto:andres@momaa.es" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                  andres@momaa.es
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
            {t('copyright')}
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">
              {t('privacy')}
            </Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">
              {t('legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

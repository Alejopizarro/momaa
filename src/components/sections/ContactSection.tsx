import { useTranslations } from 'next-intl'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { Icon } from '@/components/atoms/Icon'
import { Button } from '@/components/atoms/Button'

export function ContactSection() {
  const t = useTranslations('contact')
  const projectTypes: string[] = t.raw('projectTypes') as string[]

  return (
    <section id="contacto" className="section-padding bg-surface">
      <div className="container-momaa">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: form */}
          <div>
            <SectionLabel>{t('sectionLabel')}</SectionLabel>
            <h2 className="heading-section text-white mb-12">
              {t('sectionTitle')}
            </h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={t('namePlaceholder')}
                  className="w-full bg-bg border border-white/10 text-white placeholder-white/25 px-5 py-4 text-sm focus:border-primary focus:outline-none transition-colors duration-200"
                />
                <input
                  type="email"
                  placeholder={t('emailPlaceholder')}
                  className="w-full bg-bg border border-white/10 text-white placeholder-white/25 px-5 py-4 text-sm focus:border-primary focus:outline-none transition-colors duration-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder={t('phonePlaceholder')}
                  className="w-full bg-bg border border-white/10 text-white placeholder-white/25 px-5 py-4 text-sm focus:border-primary focus:outline-none transition-colors duration-200"
                />
                <select className="w-full bg-bg border border-white/10 text-white/50 px-5 py-4 text-sm focus:border-primary focus:outline-none transition-colors duration-200 appearance-none">
                  <option value="" disabled selected>{t('projectType')}</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-surface text-white">{type}</option>
                  ))}
                </select>
              </div>

              <textarea
                rows={5}
                placeholder={t('messagePlaceholder')}
                className="w-full bg-bg border border-white/10 text-white placeholder-white/25 px-5 py-4 text-sm focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
              />

              <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                {t('submit')}
              </Button>
            </form>
          </div>

          {/* Right: contact info */}
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-white/40 text-base leading-relaxed max-w-sm mb-12">
                {t('subtitle')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Icon name="location_on" className="text-primary mt-0.5" size="md" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-1">Estudio</p>
                    <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line">{t('address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="call" className="text-primary mt-0.5" size="md" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-1">Teléfono</p>
                    <a href={`tel:${t('phone1').replace(/\s/g, '')}`} className="text-sm text-white hover:text-primary transition-colors block">
                      {t('phone1')}
                    </a>
                    <a href={`tel:${t('phone2').replace(/\s/g, '')}`} className="text-sm text-white hover:text-primary transition-colors block">
                      {t('phone2')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="mail" className="text-primary mt-0.5" size="md" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-1">Email</p>
                    <a href={`mailto:${t('email')}`} className="text-sm text-white/60 hover:text-primary transition-colors">
                      {t('email')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent bar */}
            <div className="bg-primary p-8 md:p-10">
              <p className="font-display text-2xl md:text-3xl text-black font-bold leading-tight tracking-tight">
                Marbella · Costa del Sol · España · Portugal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

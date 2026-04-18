import { useTranslations } from 'next-intl'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { Icon } from '@/components/atoms/Icon'

interface ServiceItem {
  icon: string
  title: string
  body: string
}

export function ServicesSection() {
  const t = useTranslations('services')
  const items: ServiceItem[] = t.raw('items') as ServiceItem[]

  return (
    <section id="servicios" className="section-padding bg-bg">
      <div className="container-momaa">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionLabel>{t('sectionLabel')}</SectionLabel>
            <h2 className="heading-section text-white">{t('sectionTitle')}</h2>
          </div>
          <p className="text-white/40 max-w-xs text-[11px] uppercase tracking-widest leading-loose">
            {t('subtitle')}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-10 md:p-12 bg-bg border border-white/5 hover:border-primary/25 transition-all duration-500 group"
            >
              <Icon name={item.icon} className="text-primary mb-10 block" size="xl" />
              <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider mb-5 group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

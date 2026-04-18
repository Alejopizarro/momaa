import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { SectionLabel } from '@/components/atoms/SectionLabel'
import { Tag } from '@/components/atoms/Tag'
import { Icon } from '@/components/atoms/Icon'
import { Button } from '@/components/atoms/Button'

// Project images mapping (use momaa.es images)
const projectImages: Record<string, string> = {
  'casa-allure': 'https://momaa.es/wp-content/uploads/elementor/thumbs/Alberquilla-ouko05lp9golx19gacsaup5ngv2lcc1v10rjc2xs92.jpg',
  'consistorial': 'https://momaa.es/wp-content/uploads/elementor/thumbs/Estructura-visata-la-concha-ovhu96c3ggvxydi28tovu25lbhy3awd1opqhtqrb5y.jpg',
  'the-deck': 'https://momaa.es/wp-content/uploads/elementor/thumbs/Imagen-axometrica-ovhu96c3ggvxydi28tovu25lbhy3awd1opqhtqrb5y.jpg',
  'villa-ocean': 'https://momaa.es/wp-content/uploads/elementor/thumbs/15-oukoftkv624nf2i8t4kgequ7w1utmq8t6k6va3pkjq.jpg',
  'las-joyas': 'https://momaa.es/wp-content/uploads/elementor/thumbs/Vivienda-Alicates-Playa-ovhu979xnax89zgp3c3iejx1wvtgilgs0udzb0pwzq.jpg',
  'villa-alberquilla': 'https://momaa.es/wp-content/uploads/elementor/thumbs/IMG_8225-2-ouko1cu9zubsr3in9vh51e8usl5h6etiiyrvet5oau.jpg',
}

interface ProjectItem {
  id: string
  title: string
  location: string
  category: string
  year: string
}

export function FeaturedProjects() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const items: ProjectItem[] = t.raw('items') as ProjectItem[]

  return (
    <section id="proyectos" className="bg-bg">
      {/* Grid 3 columns - top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface">
        {items.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale} viewLabel={t('viewProject')} />
        ))}
      </div>

      {/* Grid 3 columns - bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface mt-px">
        {items.slice(3, 6).map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale} viewLabel={t('viewProject')} />
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center py-16 md:py-20 container-momaa">
        <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-between">
          <div>
            <SectionLabel>{t('sectionLabel')}</SectionLabel>
            <h2 className="heading-section text-white">{t('sectionTitle')}</h2>
          </div>
          <Button as="link" href={`/${locale}/proyectos`} variant="outline" size="lg">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  locale,
  viewLabel,
}: {
  project: ProjectItem
  locale: string
  viewLabel: string
}) {
  const imgSrc = projectImages[project.id] ?? projectImages['villa-ocean']

  return (
    <Link
      href={`/${locale}/proyectos/${project.id}`}
      className="group relative overflow-hidden block"
      style={{ aspectRatio: '3/4' }}
    >
      <img
        src={imgSrc}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-[1200ms] scale-105 group-hover:scale-100"
      />
      <div className="absolute inset-0 card-overlay opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <Tag className="mb-4">{project.category}</Tag>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-1">
            {project.title}
          </h3>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.25em]">
            {project.location} · {project.year}
          </p>
        </div>

        <div className="mt-7 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <span className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
            {viewLabel}
            <Icon name="arrow_right_alt" size="sm" />
          </span>
        </div>
      </div>
    </Link>
  )
}

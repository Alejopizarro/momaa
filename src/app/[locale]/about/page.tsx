import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '../../../../routing'
import { founders, team, collaborators } from '@/data/team'

type Locale = (typeof routing.locales)[number]

export const metadata: Metadata = {
  title: 'About Us | MoMaA Architects',
  description: 'MoMaA — Architecture studio in Marbella founded in 2016. Meet the team behind our residential, urban planning and interior design projects on the Costa del Sol.',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function AboutPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const { locale } = params
  setRequestLocale(locale)

  const lang = locale as 'es' | 'en'

  const labels = {
    es: {
      sectionLabel: 'Sobre Nosotros',
      title: 'El estudio',
      subtitle: 'Estudio de arquitectura en Marbella especializado en diseño residencial, urbanismo e interiorismo desde el año 2000 en la Costa del Sol.',
      founders: 'Fundadores',
      team: 'Equipo',
      collaborators: 'Equipo Colaborador',
      collaboratorsSubtitle: 'Un conjunto de profesionales de distintas disciplinas con quienes trabajamos para dar la mejor respuesta a cada proyecto.',
    },
    en: {
      sectionLabel: 'About Us',
      title: 'The Studio',
      subtitle: 'Architecture studio in Marbella specialising in residential design, urban planning and interior design since 2000 on the Costa del Sol.',
      founders: 'Founders',
      team: 'Team',
      collaborators: 'Collaborative Team',
      collaboratorsSubtitle: 'A network of professionals across different disciplines with whom we work to deliver the best response to every project.',
    },
  }[lang]

  return (
    <main className="bg-white min-h-screen pt-16">

      {/* Page hero */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24 border-b border-black/8">
        <p className="section-label mb-6">{labels.sectionLabel}</p>
        <h1 className="heading-section text-[#111111] mb-6">{labels.title}</h1>
        <p className="text-base md:text-lg text-black/45 max-w-2xl leading-relaxed font-light">
          {labels.subtitle}
        </p>
      </div>

      {/* Founders */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-12">
          {labels.founders}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/8">
          {founders.map((member) => (
            <div key={member.name} className="bg-white pr-0 md:pr-16 pb-12 md:pb-0">
              <div className="mb-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8572A] font-bold">
                  {member.role[lang]}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#111111] uppercase mb-6">
                {member.name}
              </h2>
              <p className="text-sm md:text-base text-black/55 leading-relaxed font-light">
                {member.bio[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-black/8 max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-12">
          {labels.team}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {team.map((member) => (
            <div key={member.name}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8572A] font-bold block mb-2">
                {member.role[lang]}
              </span>
              <h3 className="font-display text-base md:text-lg text-[#111111] uppercase mb-4 leading-tight">
                {member.name}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed font-light">
                {member.bio[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborative team */}
      <section className="border-t border-black/8 bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
          <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4">
            {labels.collaborators}
          </p>
          <p className="text-sm text-black/40 mb-10 max-w-xl leading-relaxed">
            {labels.collaboratorsSubtitle}
          </p>
          <p className="text-sm text-black/55 leading-loose max-w-4xl">
            {collaborators[lang]}
          </p>
        </div>
      </section>

    </main>
  )
}

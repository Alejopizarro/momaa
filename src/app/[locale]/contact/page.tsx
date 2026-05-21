import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '../../../../routing'

type Locale = (typeof routing.locales)[number]

export const metadata: Metadata = {
  title: 'Contact | MoMaA Architects',
  description: 'Contact MoMaA — Architecture studio in Marbella. Andrés M. Mateo, architect. Urbanización La Capellanía, Marbella.',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function ContactPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const { locale } = params
  setRequestLocale(locale)

  const lang = locale as 'es' | 'en'

  const labels = {
    es: {
      sectionLabel: 'Contacto',
      title: 'Hablemos de tu proyecto',
      subtitle: 'Estamos disponibles para atenderte y resolver cualquier consulta sobre tu proyecto.',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      address: 'Estudio',
      social: 'Redes sociales',
      addressText: 'Urbanización La Capellanía\nParcela nº 20\n29602 Marbella, Málaga',
    },
    en: {
      sectionLabel: 'Contact',
      title: "Let's talk about your project",
      subtitle: 'We are available to assist you and answer any questions about your project.',
      email: 'Email',
      phone: 'Phone',
      address: 'Studio',
      social: 'Social media',
      addressText: 'Urbanización La Capellanía\nPlot nº 20\n29602 Marbella, Málaga',
    },
  }[lang]

  return (
    <main className="bg-white min-h-screen pt-16">

      {/* Page hero */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20 border-b border-black/8">
        <p className="section-label mb-6">{labels.sectionLabel}</p>
        <h1 className="heading-section text-[#111111] mb-4">{labels.title}</h1>
        <p className="text-base text-black/45 max-w-xl leading-relaxed font-light">
          {labels.subtitle}
        </p>
      </div>

      {/* Contact info — con padding consistente */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Left — contact info */}
          <div className="flex flex-col gap-10">

            {/* Contact person */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-3">
                {lang === 'es' ? 'Arquitecto responsable' : 'Lead Architect'}
              </p>
              <p className="font-display text-xl md:text-2xl text-[#111111] uppercase tracking-wide">
                Andrés M. Mateo Fernández
              </p>
            </div>

            {/* Emails */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4">
                {labels.email}
              </p>
              <div className="flex flex-col gap-3">
                <a href="mailto:andres@momaa.es" className="text-sm text-[#111111] hover:text-[#E8572A] transition-colors duration-200 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8572A] flex-shrink-0" />
                  andres@momaa.es
                </a>
                <a href="mailto:andres@coamalaga.es" className="text-sm text-[#111111] hover:text-[#E8572A] transition-colors duration-200 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black/20 flex-shrink-0" />
                  andres@coamalaga.es
                </a>
              </div>
            </div>

            {/* Phones */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4">
                {labels.phone}
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+34655584801" className="text-sm text-[#111111] hover:text-[#E8572A] transition-colors duration-200 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E8572A] flex-shrink-0" />
                  +34 655 584 801
                </a>
                <a href="tel:+34655481948" className="text-sm text-[#111111] hover:text-[#E8572A] transition-colors duration-200 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-black/20 flex-shrink-0" />
                  +34 655 481 948
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4">
                {labels.address}
              </p>
              <p className="text-sm text-black/60 leading-loose whitespace-pre-line">
                {labels.addressText}
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-4">
                {labels.social}
              </p>
              <a
                href="https://www.instagram.com/momaa_architects/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-[#111111] hover:text-[#E8572A] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @momaa_architects
              </a>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div className="h-[320px] sm:h-[400px] lg:h-auto lg:min-h-[600px]">
            <iframe
              title="MoMaA Studio — Urbanización La Capellanía, Marbella"
              src="https://maps.google.com/maps?q=Urbanización+La+Capellanía,+Marbella,+Málaga,+España&output=embed&z=15"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

    </main>
  )
}

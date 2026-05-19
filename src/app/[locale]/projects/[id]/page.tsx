import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '../../../../../routing'

type Locale = (typeof routing.locales)[number]

const PROJECT_IDS = [
  'casa-allure',
  'consistorial',
  'the-deck',
  'villa-ocean',
  'las-joyas',
  'villa-alberquilla',
]

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROJECT_IDS.map((id) => ({ locale, id }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; id: string }
}): Promise<Metadata> {
  return {
    title: `${params.id} | MoMaA Architects`,
  }
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function ProjectPage({
  params,
}: {
  params: { locale: Locale; id: string }
}) {
  const { locale, id } = params
  setRequestLocale(locale)

  if (!PROJECT_IDS.includes(id)) notFound()

  return (
    <main className="pt-16 min-h-screen bg-white">
      {/* Project detail components go here — id: {id} */}
    </main>
  )
}

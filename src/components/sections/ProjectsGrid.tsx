'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLocale } from 'next-intl'
import { projects, type Project, type ProjectCategory } from '@/data/projects'

const PLACEHOLDER_IMAGES = [
  '/momaa-hero-1.jpg',
  '/momaa-hero-2.jpg',
  '/momaa-hero-3.jpg',
  '/momaa-hero-4.jpg',
  '/momaa-hero-5.jpg',
  '/momaa-hero-6.jpg',
]

const PAGE_SIZE = 10

function getImage(project: Project): string {
  if (project.image) return project.image
  const index = projects.indexOf(project) % PLACEHOLDER_IMAGES.length
  return PLACEHOLDER_IMAGES[index]
}

interface Translations {
  filterAll: string
  filterResidencial: string
  filterPublico: string
  filterUrbanismo: string
  filterInteriorismo: string
  filterEducacional: string
  loadMore: string
}

interface FilterButton {
  value: ProjectCategory | 'all'
  label: string
}

export function ProjectsGrid({ translations }: { translations: Translations }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filters: FilterButton[] = [
    { value: 'all',             label: translations.filterAll },
    { value: 'Residencial',     label: translations.filterResidencial },
    { value: 'Espacio Público', label: translations.filterPublico },
    { value: 'Urbanismo',       label: translations.filterUrbanismo },
    { value: 'Interiorismo',    label: translations.filterInteriorismo },
    { value: 'Educacional',     label: translations.filterEducacional },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const visibleProjects = filteredProjects.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProjects.length

  function handleFilterChange(value: ProjectCategory | 'all') {
    setActiveFilter(value)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section className="bg-white">
      {/* Filter bar */}
      <div className="pb-10">
        <div className="flex flex-wrap gap-x-1 gap-y-2 border-b border-black/10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilterChange(f.value)}
              className={`text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-2 border-b-2 -mb-px transition-colors duration-200 ${
                activeFilter === f.value
                  ? 'border-[#E8572A] text-[#E8572A]'
                  : 'border-transparent text-black/40 hover:text-black'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center pt-12 pb-4">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="text-[11px] font-black uppercase tracking-[0.3em] px-12 py-4 border border-black/20 text-black hover:bg-black hover:text-white transition-all duration-200"
          >
            {translations.loadMore}
            <span className="ml-3 text-black/30 group-hover:text-white/30">
              ({filteredProjects.length - visibleCount})
            </span>
          </button>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const locale = useLocale()
  const imgSrc = getImage(project)

  return (
    <Link
      href={`/${locale}/projects/${project.id}`}
      className="relative block overflow-hidden aspect-square bg-black"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imgSrc}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover transition-transform duration-700 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-opacity duration-[400ms] ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ background: 'rgba(0,0,0,0.75)' }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#E8572A] font-bold mb-3">
          {project.category}
        </span>
        <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-3">
          {project.title}
        </h3>
        <span className="text-[11px] uppercase tracking-widest text-white/50">
          {project.year}
        </span>
      </div>
    </Link>
  )
}

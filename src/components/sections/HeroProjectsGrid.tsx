'use client'

import Image from 'next/image'
import { useState } from 'react'
import { projects } from '@/data/projects'

const PLACEHOLDER_IMAGES = [
  '/momaa-hero-1.jpg',
  '/momaa-hero-2.jpg',
  '/momaa-hero-3.jpg',
  '/momaa-hero-4.jpg',
  '/momaa-hero-5.jpg',
  '/momaa-hero-6.jpg',
]

const getImage = (index: number) => PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]

// Los 24 proyectos más recientes (ya ordenados por año desc en projects.ts)
const HERO_PROJECTS = projects.slice(0, 24)

interface HeroProjectsGridProps {
  translations: {
    viewProject: string
  }
}

export function HeroProjectsGrid({ translations: _ }: HeroProjectsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-black w-full"
    >
      {HERO_PROJECTS.map((project, index) => (
        <div
          key={project.id}
          className="relative overflow-hidden cursor-pointer aspect-[4/3]"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
        >
          {/* Imagen de fondo */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              hoveredIndex === index ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Image
              src={getImage(index)}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
              className="object-cover"
            />
          </div>

          {/* Overlay oscuro — celdas inactivas cuando otra está en hover */}
          {hoveredIndex !== null && hoveredIndex !== index && (
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 z-10" />
          )}

          {/* Contenido hover — celda activa: fondo blanco + texto */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-300 z-20 p-4 text-center ${
              hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8572A] font-bold mb-2">
              {project.category}
            </span>
            <h3 className="font-display text-xs md:text-sm lg:text-base text-black leading-tight mb-1">
              {project.title}
            </h3>
            <span className="text-xs text-black/40 uppercase tracking-widest">
              {project.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

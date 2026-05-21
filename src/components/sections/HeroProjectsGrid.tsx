"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "next-intl";
import { projects, type Project } from "@/data/projects";

const PLACEHOLDER_IMAGES = [
  "/momaa-hero-1.jpg",
  "/momaa-hero-2.jpg",
  "/momaa-hero-3.jpg",
  "/momaa-hero-4.jpg",
  "/momaa-hero-5.jpg",
  "/momaa-hero-6.jpg",
];

const getImage = (project: Project, index: number): string =>
  project.image ?? PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];

// Los 15 proyectos con ficha de detalle aparecen primero en el hero
const FEATURED_IDS = [
  "rehabilitacion-consistorial-marbella",
  "the-deck-benahavis",
  "casa-allure-marbella",
  "el-trapiche-casa-8",
  "apartamento-atico-bahia-marbella",
  "fuente-bautismal-san-pedro",
  "villa-monte-mayor-benahavis",
  "49-viviendas-casares",
  "las-joyas-estepona",
  "bungalow-los-monteros",
  "piscina-solarium-alicates-playas",
  "cubierta-pabellon-carlos-cabezas",
  "casa-l-nueva-andalucia",
  "santa-maria-golf-casa-11",
  "bungalow-caribplaya",
];

const featuredProjects = FEATURED_IDS.map((id) =>
  projects.find((p) => p.id === id),
).filter((p): p is NonNullable<typeof p> => p !== undefined);

const remainingProjects = projects.filter((p) => !FEATURED_IDS.includes(p.id));

// lg: 4 cols × 4 filas = 16 | mobile: 2 cols × 5 filas = 10
const HERO_PROJECTS = [...featuredProjects, ...remainingProjects].slice(0, 16);

interface HeroProjectsGridProps {
  translations: {
    viewProject: string;
  };
}

export function HeroProjectsGrid({ translations: _ }: HeroProjectsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const locale = useLocale();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-black w-full">
      {HERO_PROJECTS.map((project, index) => (
        <Link
          key={project.id}
          href={`/${locale}/projects/${project.id}`}
          className={`relative block overflow-hidden h-[50vw] lg:h-[28vw] ${index >= 10 ? "hidden lg:block" : ""}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image
            src={getImage(project, index)}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className={`object-cover transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-0" : "opacity-100"
            }`}
          />

          <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-white transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
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
        </Link>
      ))}
    </div>
  );
}

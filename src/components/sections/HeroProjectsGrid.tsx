"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { projects, getTitle, type Project } from "@/data/projects";

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
  "the-deck-benahavis",
  "casa-allure-marbella",
  "el-trapiche-casa-8",
  "villa-monte-mayor-benahavis",
  "apartamento-atico-bahia-marbella",
  "fuente-bautismal-san-pedro",
  "49-viviendas-casares",
  "rehabilitacion-consistorial-marbella",
  "las-joyas-estepona",
  "bungalow-los-monteros",
  "piscina-solarium-alicates-playas",
  "cubierta-pabellon-carlos-cabezas",
  "casa-l-nueva-andalucia",
  "santa-maria-golf-casa-11",
  "bungalow-caribplaya",
  "villa-ocean",
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
  const t = useTranslations("projectsPage");
  const catLabel: Record<string, string> = {
    Residencial: t("filterResidencial"),
    "Espacio Público": t("filterPublico"),
    Urbanismo: t("filterUrbanismo"),
    Interiorismo: t("filterInteriorismo"),
    Educacional: t("filterEducacional"),
  };

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
            alt={getTitle(project, locale)}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            quality={90}
            className={`object-cover transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-0" : "opacity-100"
            }`}
            style={{ filter: 'contrast(1.08) saturate(0.82) brightness(0.97)' }}
          />

          {/* Tono unificado — mix-blend-mode multiply da un tono cálido neutro a todas las fotos */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'rgba(30, 22, 14, 0.18)',
              mixBlendMode: 'multiply',
            }}
          />

          <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center bg-white transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8572A] font-bold mb-2">
              {catLabel[project.category] ?? project.category}
            </span>
            <h3 className="font-display text-xs md:text-sm lg:text-base text-black leading-tight mb-1">
              {getTitle(project, locale)}
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

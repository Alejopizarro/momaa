"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "next-intl";
import { projects, getTitle, type Project, type ProjectCategory } from "@/data/projects";
import { Icon } from "@/components/atoms/Icon";

const PLACEHOLDER_IMAGES = [
  "/momaa-hero-1.jpg",
  "/momaa-hero-2.jpg",
  "/momaa-hero-3.jpg",
  "/momaa-hero-4.jpg",
  "/momaa-hero-5.jpg",
  "/momaa-hero-6.jpg",
];

const PAGE_SIZE = 10;

const FEATURED_IDS = [
  "rehabilitacion-consistorial-marbella",
  "the-deck-benahavis",
  "casa-allure-marbella",
  "las-joyas-estepona",
  "el-trapiche-casa-8",
  "apartamento-atico-bahia-marbella",
  "fuente-bautismal-san-pedro",
  "villa-monte-mayor-benahavis",
  "49-viviendas-casares",
  "bungalow-los-monteros",
  "piscina-solarium-alicates-playas",
  "cubierta-pabellon-carlos-cabezas",
  "casa-l-nueva-andalucia",
  "santa-maria-golf-casa-11",
  "bungalow-caribplaya",
  "villa-ocean",
];

// Proyectos con ficha propia primero, resto después
const sortedProjects = [
  ...FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
    (p): p is Project => p !== undefined,
  ),
  ...projects.filter((p) => !FEATURED_IDS.includes(p.id)),
];

function getImage(project: Project): string {
  if (project.image) return project.image;
  const index = projects.indexOf(project) % PLACEHOLDER_IMAGES.length;
  return PLACEHOLDER_IMAGES[index];
}

interface Translations {
  filterAll: string;
  filterResidencial: string;
  filterPublico: string;
  filterUrbanismo: string;
  filterInteriorismo: string;
  filterEducacional: string;
  loadMore: string;
  viewProject: string;
}

function categoryLabel(category: ProjectCategory, t: Translations): string {
  const map: Record<ProjectCategory, string> = {
    Residencial: t.filterResidencial,
    "Espacio Público": t.filterPublico,
    Urbanismo: t.filterUrbanismo,
    Interiorismo: t.filterInteriorismo,
    Educacional: t.filterEducacional,
  };
  return map[category] ?? category;
}

interface FilterButton {
  value: ProjectCategory | "all";
  label: string;
}

export function ProjectsGrid({ translations }: { translations: Translations }) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all",
  );
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filters: FilterButton[] = [
    { value: "all", label: translations.filterAll },
    { value: "Residencial", label: translations.filterResidencial },
    { value: "Espacio Público", label: translations.filterPublico },
    { value: "Urbanismo", label: translations.filterUrbanismo },
    { value: "Interiorismo", label: translations.filterInteriorismo },
    { value: "Educacional", label: translations.filterEducacional },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  function handleFilterChange(value: ProjectCategory | "all") {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
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
                  ? "border-[#E8572A] text-[#E8572A]"
                  : "border-transparent text-black/40 hover:text-black"
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
          <ProjectCard
            key={project.id}
            project={project}
            viewLabel={translations.viewProject}
            translations={translations}
          />
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
  );
}

function ProjectCard({
  project,
  viewLabel,
  translations,
}: {
  project: Project;
  viewLabel: string;
  translations: Translations;
}) {
  const locale = useLocale();
  const imgSrc = getImage(project);

  return (
    <Link
      href={`/${locale}/projects/${project.id}`}
      className="group relative overflow-hidden block aspect-square bg-black"
    >
      <Image
        src={imgSrc}
        alt={getTitle(project, locale)}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={90}
        className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 card-overlay" />

      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest bg-[#E8572A] text-white">
            {categoryLabel(project.category, translations)}
          </span>
          <h3 className="font-display text-xl md:text-2xl text-white mb-1 uppercase leading-tight">
            {getTitle(project, locale)}
          </h3>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.25em]">
            {project.year}
          </p>
        </div>

        <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <span className="flex items-center gap-2 text-[#E8572A] text-[10px] font-black uppercase tracking-widest">
            {viewLabel}
            <Icon name="arrow_right_alt" size="sm" />
          </span>
        </div>
      </div>
    </Link>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";
import { type Project } from "@/data/projects";
import {
  featuredProjects,
  getFeaturedProjectImage,
} from "@/data/featured-projects";

// Placeholder copy until real per-project descriptions are provided.
const PLACEHOLDER_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export function FeaturedProjectsII() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="proyectos" className="bg-white pb-24 md:pb-32">
      {/* Desktop: every card gets the same subtle scroll-in scale, size stays
          uniform otherwise — the image only grows and reveals detail on hover.
          Hovering one row dims the others so it reads as the spotlighted one. */}
      <div className="hidden md:flex md:flex-col gap-2 max-w-[1800px] mx-auto px-6 md:px-12 pt-24">
        {featuredProjects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            locale={locale}
            viewLabel={t("viewProject")}
            priority={index === 0}
            dimmed={hoveredId !== null && hoveredId !== project.id}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        ))}
        <div className="flex justify-center pt-10">
          <Button as="link" href={`/${locale}/projects`} variant="outline" size="md">
            {t("viewAll")}
          </Button>
        </div>
      </div>

      {/* Mobile: stacked cards, simple fade-in on scroll into view */}
      <div className="flex flex-col gap-[3px] md:hidden px-6 pt-24">
        {featuredProjects.map((project, index) => (
          <MobileProjectCard
            key={project.id}
            project={project}
            locale={locale}
            viewLabel={t("viewProject")}
            priority={index === 0}
          />
        ))}
        <div className="flex justify-center pt-10">
          <Button as="link" href={`/${locale}/projects`} variant="outline" size="md">
            {t("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  locale,
  viewLabel,
  priority,
  dimmed,
  onHoverStart,
  onHoverEnd,
}: {
  project: Project;
  locale: string;
  viewLabel: string;
  priority: boolean;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        animate={{ opacity: dimmed ? 0.4 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        <Link
          href={`/${locale}/projects/${project.id}`}
          className="group flex items-center justify-center gap-10 lg:gap-16 py-8 transition-transform duration-500 ease-out hover:scale-[1.06]"
        >
          {/* Left: title + category/year, fixed width so the image stays centered */}
          <div className="w-64 lg:w-72 flex-shrink-0 text-right">
            <h3 className="font-display text-xl lg:text-2xl text-[#111111] uppercase mb-2">
              {project.title}
            </h3>
            <p className="text-black/40 text-[10px] uppercase tracking-[0.25em]">
              {project.category} — {project.year}
            </p>
          </div>

          {/* Center: image — grows with the whole row on hover */}
          <div className="relative flex-shrink-0 w-[380px] lg:w-[440px] aspect-[3/2] overflow-hidden">
            <Image
              src={getFeaturedProjectImage(project)}
              alt={project.title}
              fill
              className="object-cover"
              sizes="440px"
              quality={90}
              priority={priority}
            />
          </div>

          {/* Right: description + CTA, revealed on hover */}
          <div className="w-64 lg:w-72 flex-shrink-0 opacity-0 -translate-x-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
            <p className="text-black/60 text-sm leading-relaxed mb-6">
              {PLACEHOLDER_DESCRIPTION}
            </p>
            <span className="flex items-center gap-2 text-[#E8572A] text-[10px] font-black uppercase tracking-widest w-fit">
              {viewLabel}
              <Icon name="arrow_right_alt" size="sm" />
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function MobileProjectCard({
  project,
  locale,
  viewLabel,
  priority,
}: {
  project: Project;
  locale: string;
  viewLabel: string;
  priority: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        href={`/${locale}/projects/${project.id}`}
        className="relative block w-full overflow-hidden aspect-[4/5]"
      >
        <Image
          src={getFeaturedProjectImage(project)}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
          priority={priority}
        />
        <div className="absolute inset-0 card-overlay" />

        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <span className="inline-block px-3 py-1 mb-3 text-[10px] font-black uppercase tracking-widest bg-[#E8572A] text-white w-fit">
            {project.category}
          </span>
          <h3 className="font-display text-2xl text-white mb-1 uppercase">
            {project.title}
          </h3>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-4">
            {project.year}
          </p>
          <span className="flex items-center gap-2 text-[#E8572A] text-[10px] font-black uppercase tracking-widest">
            {viewLabel}
            <Icon name="arrow_right_alt" size="sm" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

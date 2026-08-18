"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";
import { type Project, getDescription } from "@/data/projects";
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
  const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

  return (
    <section id="proyectos" className="bg-white pb-8 md:pb-16">
      <h2 className="font-display text-4xl uppercase text-[#111111] text-left md:text-center max-w-[1800px] mx-auto px-6 md:px-12 pt-24">
        {t("sectionTitle")}
      </h2>

      {/* Desktop: every card gets the same subtle scroll-in scale, size stays
          uniform otherwise — the image only grows and reveals detail on hover.
          Hovering one row dims the others so it reads as the spotlighted one. */}
      <div className="hidden md:flex md:flex-col gap-2 max-w-[1800px] mx-auto px-6 md:px-12">
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
          <Button
            as="link"
            href={`/${locale}/projects`}
            variant="outline"
            size="md"
          >
            {t("viewAll")}
          </Button>
        </div>
      </div>

      {/* Mobile: same structure as desktop rows, stacked vertically and
          left-aligned. No scale/hover — the description fades in and out
          as the card enters/leaves the viewport. */}
      <div className="flex flex-col divide-y divide-black/10 md:hidden px-6 pt-12">
        {featuredProjects.map((project, index) => (
          <MobileProjectCard
            key={project.id}
            project={project}
            locale={locale}
            viewLabel={t("viewProject")}
            priority={index === 0}
            isActive={activeMobileId === project.id}
            onActivate={() => setActiveMobileId(project.id)}
            onDeactivate={() =>
              setActiveMobileId((current) =>
                current === project.id ? null : current,
              )
            }
          />
        ))}
        <div className="flex justify-center pt-10">
          <Button
            as="link"
            href={`/${locale}/projects`}
            variant="outline"
            size="md"
          >
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
              {getDescription(project, locale) ?? PLACEHOLDER_DESCRIPTION}
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
  isActive,
  onActivate,
  onDeactivate,
}: {
  project: Project;
  locale: string;
  viewLabel: string;
  priority: boolean;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  return (
    <motion.div
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
      onViewportEnter={onActivate}
      onViewportLeave={onDeactivate}
    >
      <Link
        href={`/${locale}/projects/${project.id}`}
        className="block w-full py-8 text-left"
      >
        {/* Category/year + title, left-aligned, always visible */}
        <div className="mb-4">
          <p className="text-black/40 text-[10px] uppercase tracking-[0.25em] mb-2">
            {project.category} — {project.year}
          </p>
          <h3 className="font-display text-xl text-[#111111] uppercase">
            {project.title}
          </h3>
        </div>

        {/* Image — static, no scale/hover effect */}
        <div className="relative w-full aspect-[3/2] overflow-hidden">
          <Image
            src={getFeaturedProjectImage(project)}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
            priority={priority}
          />
        </div>

        {/* Description + CTA — closed (collapsed) by default, opens when
            this card becomes the active one, which closes whichever card
            was open before it */}
        <motion.div
          initial={false}
          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="pt-6">
            <p className="text-black/60 text-sm leading-relaxed mb-6">
              {getDescription(project, locale) ?? PLACEHOLDER_DESCRIPTION}
            </p>
            <span className="flex items-center gap-2 text-[#E8572A] text-[10px] font-black uppercase tracking-widest w-fit">
              {viewLabel}
              <Icon name="arrow_right_alt" size="sm" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

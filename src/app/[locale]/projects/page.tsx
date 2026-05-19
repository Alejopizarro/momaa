import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "../../../../routing";
import { HeroProjectsGrid } from "@/components/sections/HeroProjectsGrid";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

type Locale = (typeof routing.locales)[number];

export const metadata: Metadata = {
  title: "Projects | MoMaA Architects",
  description:
    "All MoMaA projects — residential architecture, urban planning and interior design on the Costa del Sol.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default async function ProjectsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations("projectsPage");

  const translations = {
    filterAll: t("filterAll"),
    filterResidencial: t("filterResidencial"),
    filterPublico: t("filterPublico"),
    filterUrbanismo: t("filterUrbanismo"),
    filterInteriorismo: t("filterInteriorismo"),
    filterEducacional: t("filterEducacional"),
    viewProject: t("viewProject"),
    loadMore:    t("loadMore"),
  };

  return (
    <>
      {/* Hero grid — full width, sin max-width ni padding lateral */}
      <div className="pt-16">
        <HeroProjectsGrid
          translations={{ viewProject: translations.viewProject }}
        />
      </div>

      {/* Resto de la página — título + filtros + grid completo */}
      <div className="bg-white py-8 md:py-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-black/10">
          <h1 className="heading-section text-[#111111] mb-4">{t("title")}</h1>
          <p className="text-base text-black/45 max-w-xl leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid con filtros */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10">
          <ProjectsGrid translations={translations} />
        </div>
      </div>
    </>
  );
}

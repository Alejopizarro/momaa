import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "../../../../routing";
import { HeroProjectsGrid } from "@/components/sections/HeroProjectsGrid";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { InstagramGrid } from "@/components/sections/grid-instagram";

type Locale = (typeof routing.locales)[number];

const INSTAGRAM_POSTS = [
  {
    url: "https://www.instagram.com/reel/DZC0jXYIcls/?igsh=ZHMyNHE0bmoxZjVo",
    description:
      "Estamos finalizando!! Enorabuena a todo el equipo de crear esta vivienda unifamiliar de arquitectura contemporánea de estilo mediterráneo. El diseño destaca por una geometría limpia, un marcado juego de líneas horizontales y una integración directa con el espacio exterior.\nGracias\nAndres M. Mateo\nwww.momaa.es\n#ArquitecturaYPaisaje #momaa #architecture #MarbellaArquitectura #marbella",
  },
  {
    url: "https://www.instagram.com/reel/DY7O5tWoeV3/?igsh=enN0Y3dyeWhsaDl6",
    description:
      "Entramos en la recta final de las obras del Centro de Tecnificación de Gimnasia Rítmica en Marbella. Nos llena de orgullo dar los últimos retoques a este lienzo arquitectónico que pronto se llenará de vida, música y vuelo. La cuenta atrás ha comenzado!!!!\nwww.momaa.es\n#ArquitecturaPoetica #DiseñoYMovimiento #MarbellaArquitectura #EspaciosVivos #GeometriaYLuz FinDeObra",
  },
];

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
  const tIg = await getTranslations("instagram");

  const translations = {
    filterAll: t("filterAll"),
    filterResidencial: t("filterResidencial"),
    filterPublico: t("filterPublico"),
    filterUrbanismo: t("filterUrbanismo"),
    filterInteriorismo: t("filterInteriorismo"),
    filterEducacional: t("filterEducacional"),
    viewProject: t("viewProject"),
    loadMore: t("loadMore"),
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
      <InstagramGrid
        posts={INSTAGRAM_POSTS}
        columns={2}
        sectionLabel={tIg("sectionLabel")}
        title={tIg("latestProjects")}
        followUrl="https://www.instagram.com/momaa_architects?utm_source=qr&igsh=aGF2cnNiNjZ3dDFw"
      />
    </>
  );
}

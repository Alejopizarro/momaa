import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "../../../../routing";
import { HeroProjectsGrid } from "@/components/sections/HeroProjectsGrid";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { InstagramGrid } from "@/components/sections/grid-instagram";

type Locale = (typeof routing.locales)[number];

const INSTAGRAM_POSTS = [
  {
    url: "https://www.instagram.com/reel/DLhRmhLIRLW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    description:
      "Hoy compartimos un recorrido por la escuela que terminamos de construir en el año 2020 🏫 Un proyecto que marcó una etapa importante en nuestro camino como arquitectos pensado para acompañar el crecimiento y el aprendizaje de los niños que cada día la habitan. Nos orgullece saber que sigue siendo un espacio vivo, donde se forma el futuro. #architecture #momaa #britishschoolmarbella #bism #gkcreativestudiosmarbella",
  },
  {
    url: "https://www.instagram.com/reel/DY27y_So8_x/?igsh=Z2N0YzhxYWhocW0=",
    description:
      "Desde el estudio momaa marbella, presentamos nuestros dos pabellones polivalentes en El Calvario. Diseñados desde el respeto al entorno, estos volúmenes se mimetizan con el parque desde el respeto absoluto al entorno.\nA través de materiales honestos y diseño armónico, la sostenibilidad es el eje de este proyecto. Dos piezas que respiran, captan la luz y se integran en el paisaje como si siempre hubieran estado allí.\nwww.momaa.es\n#MOMAAarquitectura #AyuntamientodeMarbella #ElCalvario #ArquitecturaYPaisaje #IntegracionPaisajistica #PabellonPolivalente #ArquitecturaSostenible #DiseñoPasivo #Archilovers",
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

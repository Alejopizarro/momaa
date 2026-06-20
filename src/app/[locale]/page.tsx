import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../routing";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { InstagramGrid } from "@/components/sections/grid-instagram";

type Locale = (typeof routing.locales)[number];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

const INSTAGRAM_POSTS_2 = [
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

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProjects />
      <InstagramGrid
        posts={INSTAGRAM_POSTS}
        columns={2}
        sectionLabel="Instagram"
        title="Síguenos en Instagram"
        followUrl="https://www.instagram.com/momaa_architects?utm_source=qr&igsh=aGF2cnNiNjZ3dDFw"
      />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <InstagramGrid
        posts={INSTAGRAM_POSTS_2}
        columns={2}
        sectionLabel="Instagram"
        title="Últimos proyectos"
        followUrl="https://www.instagram.com/momaa_architects?utm_source=qr&igsh=aGF2cnNiNjZ3dDFw"
      />
      {/* <ContactSection /> */}
    </>
  );
}

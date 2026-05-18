import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";

// Project images mapping
const projectImages: Record<string, string> = {
  "casa-allure":
    "https://momaa.es/wp-content/uploads/elementor/thumbs/Alberquilla-ouko05lp9golx19gacsaup5ngv2lcc1v10rjc2xs92.jpg",
  consistorial:
    "https://momaa.es/wp-content/uploads/elementor/thumbs/Estructura-visata-la-concha-ovhu96c3ggvxydi28tovu25lbhy3awd1opqhtqrb5y.jpg",
  "the-deck":
    "https://momaa.es/wp-content/uploads/elementor/thumbs/Imagen-axometrica-ovhu96c3ggvxydi28tovu25lbhy3awd1opqhtqrb5y.jpg",
  "villa-ocean":
    "https://momaa.es/wp-content/uploads/elementor/thumbs/15-oukoftkv624nf2i8t4kgequ7w1utmq8t6k6va3pkjq.jpg",
  "las-joyas":
    "https://momaa.es/wp-content/uploads/elementor/thumbs/Vivienda-Alicates-Playa-ovhu979xnax89zgp3c3iejx1wvtgilgs0udzb0pwzq.jpg",
  "villa-alberquilla":
    "https://momaa.es/wp-content/uploads/elementor/thumbs/IMG_8225-2-ouko1cu9zubsr3in9vh51e8usl5h6etiiyrvet5oau.jpg",
};

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
}

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const items: ProjectItem[] = t.raw("items") as ProjectItem[];

  return (
    <section id="proyectos" className="bg-white pb-24 md:pb-32">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <SectionLabel>{t("sectionLabel")}</SectionLabel>
            <h2 className="heading-section text-[#111111]">
              {t("sectionTitle")}
            </h2>
          </div>
          <Button
            as="link"
            href={`/${locale}/proyectos`}
            variant="outline"
            size="md"
          >
            {t("viewAll")}
          </Button>
        </div>
      </div>

      {/* Asymmetric grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Row 1: 2/3 + 1/3 */}
        <div className="flex flex-col md:flex-row gap-[3px] mb-[3px]">
          <div className="w-full md:w-2/3">
            <ProjectCard
              project={items[0]}
              locale={locale}
              viewLabel={t("viewProject")}
            />
          </div>
          <div className="w-full md:w-1/3">
            <ProjectCard
              project={items[1]}
              locale={locale}
              viewLabel={t("viewProject")}
            />
          </div>
        </div>

        {/* Row 2: 1/3 + 2/3 */}
        <div className="flex flex-col md:flex-row gap-[3px] mb-[3px]">
          <div className="w-full md:w-1/3">
            <ProjectCard
              project={items[2]}
              locale={locale}
              viewLabel={t("viewProject")}
            />
          </div>
          <div className="w-full md:w-2/3">
            <ProjectCard
              project={items[3]}
              locale={locale}
              viewLabel={t("viewProject")}
            />
          </div>
        </div>

        {/* Row 3: 1/2 + 1/2 */}
        <div className="flex flex-col md:flex-row gap-[3px]">
          <div className="w-full md:w-1/2">
            <ProjectCard
              project={items[4]}
              locale={locale}
              viewLabel={t("viewProject")}
            />
          </div>
          <div className="w-full md:w-1/2">
            <ProjectCard
              project={items[5]}
              locale={locale}
              viewLabel={t("viewProject")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  locale,
  viewLabel,
}: {
  project: ProjectItem;
  locale: string;
  viewLabel: string;
}) {
  const imgSrc = projectImages[project.id] ?? projectImages["villa-ocean"];

  return (
    <Link
      href={`/${locale}/proyectos/${project.id}`}
      className="group relative overflow-hidden block"
      style={{ height: "480px" }}
    >
      <img
        src={imgSrc}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 card-overlay" />

      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          {/* Category tag — no border radius, naranja sólido */}
          <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest bg-[#E8572A] text-white">
            {project.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-1 uppercase">
            {project.title}
          </h3>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.25em]">
            {project.location} · {project.year}
          </p>
        </div>

        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <span className="flex items-center gap-2 text-[#E8572A] text-[10px] font-black uppercase tracking-widest">
            {viewLabel}
            <Icon name="arrow_right_alt" size="sm" />
          </span>
        </div>
      </div>
    </Link>
  );
}

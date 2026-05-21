import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { Icon } from "@/components/atoms/Icon";
import { Button } from "@/components/atoms/Button";
import { projects, type Project } from "@/data/projects";

const FEATURED_IDS = [
  "rehabilitacion-consistorial-marbella",
  "the-deck-benahavis",
  "casa-allure-marbella",
  "las-joyas-estepona",
  "cubierta-pabellon-carlos-cabezas",
  "el-trapiche-casa-8",
];

const PLACEHOLDER_IMAGES = [
  "/momaa-hero-1.jpg",
  "/momaa-hero-2.jpg",
  "/momaa-hero-3.jpg",
  "/momaa-hero-4.jpg",
  "/momaa-hero-5.jpg",
  "/momaa-hero-6.jpg",
];

const featuredProjects = FEATURED_IDS.map((id) =>
  projects.find((p) => p.id === id),
).filter((p): p is Project => p !== undefined);

function getImage(project: Project): string {
  if (project.image) return project.image;
  const idx = projects.indexOf(project);
  return PLACEHOLDER_IMAGES[idx % PLACEHOLDER_IMAGES.length];
}

export function FeaturedProjects() {
  const t = useTranslations("projects");
  const locale = useLocale();

  const [p0, p1, p2, p3, p4, p5] = featuredProjects;

  return (
    <section id="proyectos" className="bg-white pb-24 md:pb-32">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <SectionLabel>{t("sectionLabel")}</SectionLabel>
            <h2 className="heading-section text-[#111111]">{t("sectionTitle")}</h2>
          </div>
          <Button as="link" href={`/${locale}/projects`} variant="outline" size="md">
            {t("viewAll")}
          </Button>
        </div>
      </div>

      {/* Asymmetric grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Row 1: 2/3 + 1/3 */}
        <div className="flex flex-col md:flex-row gap-[3px] mb-[3px]">
          <div className="w-full md:w-2/3">
            {p0 && <ProjectCard project={p0} locale={locale} viewLabel={t("viewProject")} />}
          </div>
          <div className="w-full md:w-1/3">
            {p1 && <ProjectCard project={p1} locale={locale} viewLabel={t("viewProject")} />}
          </div>
        </div>

        {/* Row 2: 1/3 + 2/3 */}
        <div className="flex flex-col md:flex-row gap-[3px] mb-[3px]">
          <div className="w-full md:w-1/3">
            {p2 && <ProjectCard project={p2} locale={locale} viewLabel={t("viewProject")} />}
          </div>
          <div className="w-full md:w-2/3">
            {p3 && <ProjectCard project={p3} locale={locale} viewLabel={t("viewProject")} />}
          </div>
        </div>

        {/* Row 3: 1/2 + 1/2 */}
        <div className="flex flex-col md:flex-row gap-[3px]">
          <div className="w-full md:w-1/2">
            {p4 && <ProjectCard project={p4} locale={locale} viewLabel={t("viewProject")} />}
          </div>
          <div className="w-full md:w-1/2">
            {p5 && <ProjectCard project={p5} locale={locale} viewLabel={t("viewProject")} />}
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
  project: Project;
  locale: string;
  viewLabel: string;
}) {
  return (
    <Link
      href={`/${locale}/projects/${project.id}`}
      className="group relative overflow-hidden block"
      style={{ height: "480px" }}
    >
      <Image
        src={getImage(project)}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
        quality={90}
      />
      <div className="absolute inset-0 card-overlay" />

      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
        <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest bg-[#E8572A] text-white">
            {project.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-1 uppercase">
            {project.title}
          </h3>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.25em]">
            {project.year}
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

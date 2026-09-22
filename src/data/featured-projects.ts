import { projects, type Project } from "@/data/projects";
import { getProjectDetail } from "@/data/project-details";

export const FEATURED_PROJECT_IDS = [
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

export const featuredProjects = FEATURED_PROJECT_IDS.map((id) =>
  projects.find((p) => p.id === id),
).filter((p): p is Project => p !== undefined);

export function getFeaturedProjectImage(project: Project): string {
  const detail = getProjectDetail(project.id);
  if (detail?.image) return detail.image;
  if (project.image) return project.image;
  const idx = projects.indexOf(project);
  return PLACEHOLDER_IMAGES[idx % PLACEHOLDER_IMAGES.length];
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../../../../routing";
import { projects } from "@/data/projects";
import { getProjectDetail } from "@/data/project-details";
import { ShareButtons } from "@/components/atoms/ShareButtons";

const PLACEHOLDER_IMAGES = [
  "/momaa-hero-1.jpg",
  "/momaa-hero-2.jpg",
  "/momaa-hero-3.jpg",
  "/momaa-hero-4.jpg",
  "/momaa-hero-5.jpg",
  "/momaa-hero-6.jpg",
];

type Locale = (typeof routing.locales)[number];

// Helper compartido por generateMetadata y ProjectPage
function resolveHeroImage(id: string): string {
  const detail = getProjectDetail(id);
  const project = projects.find((p) => p.id === id);
  const index = projects.findIndex((p) => p.id === id);
  return (
    detail?.image ??
    project?.image ??
    PLACEHOLDER_IMAGES[Math.max(0, index) % PLACEHOLDER_IMAGES.length]
  );
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, id: p.id })),
  );
}

function GallerySlot({
  src,
  alt,
  className = "",
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return <div className={`${className} bg-[#e8e4e0]`} />;
  }
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; id: string };
}): Promise<Metadata> {
  const lang = params.locale as "es" | "en";
  const detail = getProjectDetail(params.id);
  const title = detail ? detail.title[lang] : params.id;
  const description = detail?.body[lang][0] ?? "";
  const image = resolveHeroImage(params.id);

  return {
    title: `${title} | MoMaA Architects`,
    description,
    openGraph: {
      title: `${title} | MoMaA Architects`,
      description,
      images: [{ url: image, width: 1200, height: 800, alt: title }],
      type: "article",
      siteName: "MoMaA Architects",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MoMaA Architects`,
      description,
      images: [image],
    },
  };
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function ProjectPage({
  params,
}: {
  params: { locale: Locale; id: string };
}) {
  const { locale, id } = params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const detail = getProjectDetail(id);
  const lang = locale as "es" | "en";

  // Proyecto sin página de detalle — placeholder genérico
  if (!detail) {
    return (
      <main className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#E8572A] mb-4">
            {project.category}
          </p>
          <h1 className="heading-section text-[#111111] mb-8">
            {project.title}
          </h1>
          <Link
            href={`/${locale}/projects`}
            className="text-[10px] uppercase tracking-[0.3em] text-black/40 hover:text-[#111111] transition-colors"
          >
            ← {lang === "es" ? "Volver a proyectos" : "Back to projects"}
          </Link>
        </div>
      </main>
    );
  }

  const title = detail.title[lang];
  const body = detail.body[lang];
  const disciplines = detail.disciplines[lang];
  const category = detail.category[lang];
  const externalLabel = detail.externalLabel?.[lang];

  const heroImage = resolveHeroImage(id);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero imagen — full width, 70vh */}
      <div
        className="relative w-full bg-[#1a1a1a]"
        style={{ height: "70vh", minHeight: "400px" }}
      >
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay gradient bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Back link */}
        <div className="absolute top-0 left-0 right-0 pt-20 px-8 md:px-16">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M10 6H2M5 2L1 6l4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
              />
            </svg>
            {lang === "es" ? "Proyectos" : "Projects"}
          </Link>
        </div>

        {/* Title overlay bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#E8572A] font-bold mb-3">
            {category} · {detail.year}
          </p>
          <h1 className="font-display text-2xl md:text-4xl lg:text-5xl text-white leading-tight max-w-3xl uppercase">
            {title}
          </h1>
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left — metadata */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sticky top-28">
              {/* Studio */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Estudio" : "Studio"}
                </p>
                <p className="text-sm font-bold text-[#111111] uppercase tracking-wider">
                  {detail.studio}
                </p>
              </div>

              {/* Architects */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Arquitectos" : "Architects"}
                </p>
                {detail.architects.map((name) => (
                  <p
                    key={name}
                    className="text-sm text-[#111111] leading-relaxed"
                  >
                    {name}
                  </p>
                ))}
              </div>

              {/* Location */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Ubicación" : "Location"}
                </p>
                <p className="text-sm text-[#111111]">{detail.location}</p>
              </div>

              {/* Year */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Año" : "Year"}
                </p>
                <p className="text-sm text-[#111111]">{detail.year}</p>
              </div>

              {/* Disciplines */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30 mb-2">
                  {lang === "es" ? "Disciplinas" : "Disciplines"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {disciplines.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] uppercase tracking-widest border border-black/15 px-3 py-1 text-black/60"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* External link */}
              {detail.externalUrl && (
                <div className="pt-4">
                  <a
                    href={detail.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8572A] hover:text-[#d14820] transition-colors duration-200"
                  >
                    {externalLabel}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </a>
                </div>
              )}

              {/* Share */}
              <ShareButtons title={title} lang={lang} />
            </div>
          </div>

          {/* Right — body text */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-black/65 leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {(() => {
        // Construye los slots: imagen principal + adicionales, máximo 4 visibles
        const allImages = [heroImage, ...(detail.images ?? [])];
        const visibleSlots: (string | null)[] = Array.from(
          { length: 4 },
          (_, i) => allImages[i] ?? null,
        );
        const hasMore = allImages.length > 4;
        const extraCount = allImages.length - 4;

        return (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              {/* Header galería */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-[9px] uppercase tracking-[0.4em] text-black/30">
                  {lang === "es" ? "Galería" : "Gallery"}
                </p>
                {hasMore && (
                  <a
                    href={detail.externalUrl ?? "#"}
                    target={detail.externalUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8572A] hover:text-[#d14820] transition-colors duration-200"
                  >
                    {lang === "es"
                      ? `Ver todo (${extraCount + 4})`
                      : `See all (${extraCount + 4})`}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h8M6 2l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </a>
                )}
              </div>

              {/* Grid asimétrico 2 filas */}
              <div className="flex flex-col gap-[3px]">
                {/* Fila 1: 2/3 + 1/3 */}
                <div className="flex flex-col md:flex-row gap-[3px]">
                  <GallerySlot
                    src={visibleSlots[0]}
                    alt={`${title} 1`}
                    className="w-full md:w-2/3 h-[56vw] md:h-[380px]"
                  />
                  <GallerySlot
                    src={visibleSlots[1]}
                    alt={`${title} 2`}
                    className="w-full md:w-1/3 h-[56vw] md:h-[380px]"
                  />
                </div>

                {/* Fila 2: 1/3 + 2/3 */}
                <div className="flex flex-col md:flex-row gap-[3px]">
                  <GallerySlot
                    src={visibleSlots[2]}
                    alt={`${title} 3`}
                    className="w-full md:w-1/3 h-[56vw] md:h-[380px]"
                  />
                  <GallerySlot
                    src={visibleSlots[3]}
                    alt={`${title} 4`}
                    className="w-full md:w-2/3 h-[56vw] md:h-[380px]"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Bottom nav */}
      <div className="border-t border-black/8 px-8 md:px-16 py-10">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-black/40 hover:text-[#111111] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M12 7H2M6 2L1 7l5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </svg>
          {lang === "es"
            ? "Volver a todos los proyectos"
            : "Back to all projects"}
        </Link>
      </div>
    </main>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  lang: "es" | "en";
}

function Slot({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={alt}
      className={`${className} relative overflow-hidden block cursor-zoom-in`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </button>
  );
}

export function ProjectGallery({ images, title, lang }: ProjectGalleryProps) {
  const visibleImages = images.slice(0, 4);
  const hasMore = images.length > 4;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, close, showPrev, showNext]);

  if (images.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header galería */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-[9px] uppercase tracking-[0.4em] text-black/30">
            {lang === "es" ? "Galería" : "Gallery"}
          </p>
          {hasMore && (
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8572A] hover:text-[#d14820] transition-colors duration-200"
            >
              {lang === "es" ? `Ver todo (${images.length})` : `See all (${images.length})`}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Grid asimétrico, adaptado al número de imágenes visibles (1 a 4) */}
        <div className="flex flex-col gap-[3px]">
          {visibleImages.length === 1 && (
            <Slot
              src={visibleImages[0]}
              alt={`${title} 1`}
              className="w-full h-[70vw] md:h-[520px]"
              onClick={() => setLightboxIndex(0)}
            />
          )}

          {visibleImages.length === 2 && (
            <div className="flex flex-col md:flex-row gap-[3px]">
              <Slot
                src={visibleImages[0]}
                alt={`${title} 1`}
                className="w-full md:w-2/3 h-[56vw] md:h-[420px]"
                onClick={() => setLightboxIndex(0)}
              />
              <Slot
                src={visibleImages[1]}
                alt={`${title} 2`}
                className="w-full md:w-1/3 h-[56vw] md:h-[420px]"
                onClick={() => setLightboxIndex(1)}
              />
            </div>
          )}

          {visibleImages.length === 3 && (
            <>
              <div className="flex flex-col md:flex-row gap-[3px]">
                <Slot
                  src={visibleImages[0]}
                  alt={`${title} 1`}
                  className="w-full md:w-2/3 h-[56vw] md:h-[380px]"
                  onClick={() => setLightboxIndex(0)}
                />
                <Slot
                  src={visibleImages[1]}
                  alt={`${title} 2`}
                  className="w-full md:w-1/3 h-[56vw] md:h-[380px]"
                  onClick={() => setLightboxIndex(1)}
                />
              </div>
              <Slot
                src={visibleImages[2]}
                alt={`${title} 3`}
                className="w-full h-[56vw] md:h-[380px]"
                onClick={() => setLightboxIndex(2)}
              />
            </>
          )}

          {visibleImages.length >= 4 && (
            <>
              {/* Fila 1: 2/3 + 1/3 */}
              <div className="flex flex-col md:flex-row gap-[3px]">
                <Slot
                  src={visibleImages[0]}
                  alt={`${title} 1`}
                  className="w-full md:w-2/3 h-[56vw] md:h-[380px]"
                  onClick={() => setLightboxIndex(0)}
                />
                <Slot
                  src={visibleImages[1]}
                  alt={`${title} 2`}
                  className="w-full md:w-1/3 h-[56vw] md:h-[380px]"
                  onClick={() => setLightboxIndex(1)}
                />
              </div>

              {/* Fila 2: 1/3 + 2/3 */}
              <div className="flex flex-col md:flex-row gap-[3px]">
                <Slot
                  src={visibleImages[2]}
                  alt={`${title} 3`}
                  className="w-full md:w-1/3 h-[56vw] md:h-[380px]"
                  onClick={() => setLightboxIndex(2)}
                />
                <Slot
                  src={visibleImages[3]}
                  alt={`${title} 4`}
                  className="w-full md:w-2/3 h-[56vw] md:h-[380px]"
                  onClick={() => setLightboxIndex(3)}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={lang === "es" ? "Cerrar" : "Close"}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors duration-200"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4l16 16M20 4L4 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label={lang === "es" ? "Anterior" : "Previous"}
              className="absolute left-2 md:left-8 text-white/70 hover:text-white transition-colors duration-200 p-2"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 4L7 12l8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          )}

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${title} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label={lang === "es" ? "Siguiente" : "Next"}
              className="absolute right-2 md:right-8 text-white/70 hover:text-white transition-colors duration-200 p-2"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 4l8 8-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          )}

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/50">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
}

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/atoms/Button";

const SLIDES = ["/momaa-hero-5.jpg", "/momaa-hero-3.jpg", "/momaa-hero-1.jpg"];
const AUTOPLAY_MS = 3000;
const FADE_MS = 700;

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgressKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  return (
    <header
      className="flex flex-col md:flex-row w-full"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Left / Top: text on white */}
      <div className="relative bg-surface flex items-center h-1/2 md:h-full w-full md:w-1/2">
        <div className="w-full px-8 sm:px-12 md:px-16 lg:px-20 pt-16 md:pt-20">
          <div className="max-w-xl">
            <h1 className="heading-display text-[#111111] mb-6 md:mb-8 text-4xl md:text-5xl lg:text-6xl">
              {t("title1")} <br />
              <em className="text-[#E8572A] not-italic">{t("title2")}</em>
            </h1>

            <p className="text-base md:text-lg text-black/50 max-w-md mb-10 font-light leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                as="link"
                href={`/${locale}#proyectos`}
                variant="primary"
                size="lg"
              >
                {t("ctaPrimary")}
              </Button>
              <Button
                as="link"
                href={`/${locale}#sobre-nosotros`}
                variant="outline"
                size="lg"
                className="bg-white"
              >
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right / Bottom: carousel */}
      <div
        className="relative overflow-hidden h-1/2 md:h-full w-full md:w-1/2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: i === current ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
              transitionTimingFunction: "ease-in-out",
              zIndex: i === current ? 1 : 0,
            }}
          >
            <img
              src={src}
              alt={`MoMaA arquitectura slide ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}

        {/* Progress indicators */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative w-10 h-[2px] bg-white/20 overflow-hidden"
              aria-label={`Ir al slide ${i + 1}`}
            >
              {i === current && (
                <span
                  key={progressKey}
                  className="absolute inset-y-0 left-0 bg-[#E8572A] animate-progress"
                />
              )}
              {i < current && <span className="absolute inset-0 bg-white/40" />}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

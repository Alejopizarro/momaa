import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/atoms/Button";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <header className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://momaa.es/wp-content/uploads/elementor/thumbs/00-oukofnxu11wxheqfq24ozs9gbqmmcjmf5s9yefxxl2.jpg"
          alt="MoMaA arquitectura de autor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container-momaa py-20 md:py-32">
        <div className="max-w-5xl">
          <h1 className="heading-display text-white mb-8 tracking-tight leading-none text-4xl md:text-6xl lg:text-7xl">
            {t("title1")} <br />
            <em className="text-primary not-italic">{t("title2")}</em>
          </h1>

          <p className="text-lg md:text-2xl text-white/55 max-w-2xl mb-12 font-light leading-relaxed">
            {t("subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
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
            >
              {t("ctaSecondary")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/25 [writing-mode:vertical-lr]">
          {t("scroll")}
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </header>
  );
}

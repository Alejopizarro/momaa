import { setRequestLocale } from "next-intl/server";
import { routing } from "../../../routing";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

type Locale = (typeof routing.locales)[number];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// En Next.js 14 params NO es una Promise — es un objeto síncrono
export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturedProjects />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      {/* <ContactSection /> */}
    </>
  );
}

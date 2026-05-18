"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { Icon } from "@/components/atoms/Icon";

interface AccordionItem {
  title: string;
  body: string;
}

export function AboutSection() {
  const t = useTranslations("about");
  const items: AccordionItem[] = t.raw("items") as AccordionItem[];
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sobre-nosotros" className="section-padding bg-white">
      <div className="container-momaa">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center px-6 md:px-12">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://momaa.es/wp-content/uploads/2019/11/momaa-sobre-nosotros-1.jpg"
                alt="MoMaA estudio de arquitectura"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating badge — naranja, texto blanco */}
            <div className="absolute -bottom-6 -right-0 md:-right-6 bg-[#E8572A] p-8 md:p-12">
              <span className="font-display text-5xl md:text-6xl text-white block tracking-tight mb-1">
                {t("stat")}
              </span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                {t("statLabel")}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <SectionLabel>{t("sectionLabel")}</SectionLabel>
            <h2 className="heading-section text-[#111111] mb-12">
              {t("sectionTitle")}
            </h2>

            {/* Accordion */}
            <div>
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group py-7"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex items-center justify-between w-full text-left cursor-pointer"
                    aria-expanded={openIndex === i}
                  >
                    <h3
                      className={`text-lg md:text-xl font-display transition-colors duration-200 ${
                        openIndex === i
                          ? "text-[#E8572A]"
                          : "text-black/40 group-hover:text-[#111111]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <Icon
                      name={openIndex === i ? "remove" : "add"}
                      className={
                        openIndex === i ? "text-[#E8572A]" : "text-black/20"
                      }
                      size="sm"
                    />
                  </button>

                  {openIndex === i && (
                    <p className="mt-5 text-black/50 text-base leading-relaxed max-w-xl">
                      {item.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

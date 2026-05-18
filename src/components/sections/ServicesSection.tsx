import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { Icon } from "@/components/atoms/Icon";

interface ServiceItem {
  icon: string;
  title: string;
  body: string;
}

export function ServicesSection() {
  const t = useTranslations("services");
  const items: ServiceItem[] = t.raw("items") as ServiceItem[];

  return (
    <section id="servicios" className="section-padding bg-surface">
      <div className="container-momaa ">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col  md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <SectionLabel>{t("sectionLabel")}</SectionLabel>
              <h2 className="heading-section text-[#111111]">
                {t("sectionTitle")}
              </h2>
            </div>
            <p className="text-black/40 max-w-xs text-[11px] uppercase tracking-widest leading-loose">
              {t("subtitle")}
            </p>
          </div>

          {/* Cards grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e0ddd9]">
            {items.map((item) => (
              <div
                key={item.title}
                className="p-10 md:p-12 bg-white group border border-black/[0.08] hover:border-[#E8572A] hover:shadow-[0_4px_20px_rgba(232,87,42,0.08)] transition-all duration-500"
              >
                <Icon
                  name={item.icon}
                  className="text-[#E8572A] mb-10 block"
                  size="xl"
                />
                <h3 className="font-display text-base md:text-lg text-[#111111] uppercase tracking-wider mb-5">
                  {item.title}
                </h3>
                <p className="font-sans text-black/45 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

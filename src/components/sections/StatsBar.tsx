import { useTranslations } from 'next-intl'

interface StatData {
  value: string
  label: string
}

export function StatsBar() {
  const t = useTranslations('stats')
  const items: StatData[] = t.raw('items') as StatData[]

  return (
    <section className="bg-[#111111]">
      <div className="container-momaa">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center text-center px-8 py-10 ${
                i === 1 ? 'border-x border-white/10' : ''
              }`}
            >
              <span className="font-display text-5xl md:text-6xl font-bold text-[#E8572A] mb-2 tracking-tight">
                {item.value}
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useTranslations } from 'next-intl'
import { StatItem } from '@/components/atoms/StatItem'

interface StatData {
  value: string
  label: string
}

export function StatsBar() {
  const t = useTranslations('stats')
  const items: StatData[] = t.raw('items') as StatData[]

  return (
    <section className="border-y border-white/5 bg-surface">
      <div className="container-momaa">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <StatItem
              key={item.label}
              value={item.value}
              label={item.label}
              bordered={i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

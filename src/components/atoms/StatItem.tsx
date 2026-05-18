import { cn } from '@/lib/utils'

interface StatItemProps {
  value: string
  label: string
  className?: string
  bordered?: boolean
}

export function StatItem({ value, label, className, bordered }: StatItemProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center px-8 py-10',
        bordered && 'border-x border-white/10',
        className
      )}
    >
      <span className="font-display text-5xl md:text-6xl font-bold text-[#E8572A] mb-2 tracking-tight">
        {value}
      </span>
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
    </div>
  )
}

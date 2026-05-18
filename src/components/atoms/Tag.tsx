import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'solid'
}

export function Tag({ children, className, variant = 'default' }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest',
        variant === 'default'
          ? 'border border-[#E8572A]/50 text-[#E8572A]'
          : 'bg-[#E8572A] text-white',
        className
      )}
    >
      {children}
    </span>
  )
}

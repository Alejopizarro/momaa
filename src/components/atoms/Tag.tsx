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
          ? 'border border-primary/50 text-primary'
          : 'bg-primary text-black',
        className
      )}
    >
      {children}
    </span>
  )
}

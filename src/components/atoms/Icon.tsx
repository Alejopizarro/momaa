import { cn } from '@/lib/utils'

interface IconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
  xl: 'text-5xl',
}

export function Icon({ name, className, size = 'md' }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined select-none', sizeMap[size], className)}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}

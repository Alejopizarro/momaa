import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button'
  href?: never
}

interface LinkProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'link'
  href: string
}

type Props = ButtonProps | LinkProps

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#E8572A] text-white hover:bg-[#d14820] active:scale-95',
  outline:
    'border border-black/20 text-black hover:bg-black hover:text-white',
  ghost:
    'text-[#E8572A] hover:text-[#d14820]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-6 py-2.5 text-[10px]',
  md: 'px-10 py-4 text-[10px]',
  lg: 'px-14 py-5 text-[11px]',
}

const baseClasses =
  'inline-flex items-center justify-center font-black uppercase tracking-[0.3em] transition-all duration-200 select-none cursor-pointer'

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: Props) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (props.as === 'link') {
    const { as: _, href, ...rest } = props as LinkProps
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { as: _, ...rest } = props as ButtonProps
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

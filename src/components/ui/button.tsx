import React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'outline' | 'link'
}

export function Button({
  className,
  variant = 'default',
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    default: 'bg-primary-200 text-white hover:bg-primary-100',
    secondary: 'bg-accent text-primary-600 hover:bg-secondary',
    outline: 'border border-white bg-transparent hover:border-white/50',
    link: 'text-primary underline-offset-4 hover:underline'
  }

  return (
    <button
      className={cn(
        'text-sm rounded-md px-3.5 py-2.5 inline-flex items-center cursor-pointer',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

import React from 'react'

const variants = {
  primary: 'bg-amber text-ink shadow-glow hover:scale-[1.02]',
  secondary: 'bg-surface-raised text-slate-200 border border-surface-border hover:border-mint/50 hover:text-mint',
  ghost: 'text-slate-300 hover:text-amber',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

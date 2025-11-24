'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonV2Props {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  target?: '_blank' | '_self'
  rel?: string
}

export default function ButtonV2({
  variant = 'primary',
  children,
  onClick,
  href,
  className = '',
  target,
  rel,
}: ButtonV2Props) {
  const baseStyles =
    'inline-block px-6 py-4 font-bold transition-all duration-200 cursor-pointer text-center'

  const variantStyles = {
    primary:
      'bg-[var(--color-primary)] text-white rounded-[var(--radius-full)] hover:bg-white hover:text-[var(--color-primary)] border-[3px] border-transparent hover:border-[var(--color-primary)]',
    secondary:
      'bg-[var(--color-foreground)] text-white rounded-[var(--radius-full)] hover:bg-white hover:text-[var(--color-foreground)] border-[3px] border-transparent hover:border-[var(--color-foreground)]',
  }

  const shadowStyles = {
    primary: 'shadow-[var(--shadow-primary)]',
    secondary: 'shadow-[var(--shadow-md)]',
  }

  const MotionComponent = motion.div

  // Déterminer si le bouton doit être en full width
  const isFullWidth = className.includes('w-full')
  const wrapperClass = isFullWidth ? 'block w-full' : 'inline-block'

  if (href) {
    return (
      <MotionComponent
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={wrapperClass}
      >
        <Link
          href={href}
          className={`${baseStyles} ${variantStyles[variant]} ${shadowStyles[variant]} ${className}`}
          target={target}
          rel={rel}
        >
          {children}
        </Link>
      </MotionComponent>
    )
  }

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={wrapperClass}
    >
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${shadowStyles[variant]} ${className}`}
      >
        {children}
      </button>
    </MotionComponent>
  )
}

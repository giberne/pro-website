'use client'

import { motion } from 'framer-motion'
import { type ButtonHTMLAttributes, type ReactNode, useState } from 'react'
import { useTheme } from 'next-themes'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver'> {
  variant?: 'primary' | 'outline' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { theme } = useTheme()

  // Styles de base (border radius 10px selon style-guide)
  const baseStyles = 'relative inline-flex items-center justify-center rounded-2xl font-semibold overflow-hidden font-sans inner-highlight'

  // Variantes de style avec effets d'ombre et de lumière AU HOVER UNIQUEMENT
  const variantStyles = {
    // Primary: Fond avec gradient et ombre au hover
    primary:
      'bg-gradient-to-br from-black to-black/90 text-white transition-shadow duration-300 dark:from-white dark:to-white/90 dark:text-black',

    // Outline: Bordure avec glassmorphism et ombre au hover
    outline:
      'border-2 border-black/20 bg-white/40 text-black backdrop-blur-sm transition-all duration-300 dark:border-white/20 dark:bg-black/40 dark:text-white',

    // CTA: Style premium avec ombre au hover
    cta: 'border-2 border-black/30 bg-gradient-to-br from-white/60 to-white/40 text-black backdrop-blur-md transition-all duration-300 dark:border-white/30 dark:from-black/60 dark:to-black/40 dark:text-white',
  }

  // Tailles
  const sizeStyles = {
    sm: 'px-3 py-2 text-xs sm:px-4 sm:py-2',
    md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4',
  }

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
      style={{
        boxShadow: isHovered
          ? variant === 'primary'
            ? theme === 'dark'
              ? '0 10px 40px rgba(255, 255, 255, 0.3)'
              : '0 10px 40px rgba(0, 0, 0, 0.3)'
            : theme === 'dark'
              ? '0 8px 32px rgba(255, 255, 255, 0.2)'
              : '0 8px 32px rgba(0, 0, 0, 0.15)'
          : '0 0 0 rgba(0, 0, 0, 0)',
      }}
    >
      {/* Effet de lumière qui apparaît au hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent dark:from-white/20"
      />

      {/* Ombre lumineuse en dark mode (au hover uniquement) */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl blur-xl dark:bg-white/20"
      />

      {/* Contenu du bouton */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

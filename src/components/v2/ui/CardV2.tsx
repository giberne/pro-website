'use client'

import { motion } from 'framer-motion'

interface CardV2Props {
  variant?: 'upper' | 'upper-sm' | 'ground' | 'under'
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

export default function CardV2({
  variant = 'upper',
  children,
  className = '',
  hoverable = false,
}: CardV2Props) {
  const variantClass: Record<string, string> = {
    upper: 'card-upper',
    'upper-sm': 'card-upper-sm',
    ground: 'card-ground',
    under: 'card-under',
  }

  const selectedClass = variantClass[variant]

  if (!hoverable) {
    return <div className={`${selectedClass} ${className}`}>{children}</div>
  }

  return (
    <motion.div
      className={`${selectedClass} ${className}`}
      whileHover={{
        y: -5,
        boxShadow: 'var(--shadow-primary)',
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

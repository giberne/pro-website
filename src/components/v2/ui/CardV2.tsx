'use client'

import { motion } from 'framer-motion'

interface CardV2Props {
  variant?: 'upper' | 'ground' | 'under'
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
  const variantClass = {
    upper: 'card-upper',
    ground: 'card-ground',
    under: 'card-under',
  }[variant]

  if (!hoverable) {
    return <div className={`${variantClass} ${className}`}>{children}</div>
  }

  return (
    <motion.div
      className={`${variantClass} ${className}`}
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

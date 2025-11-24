'use client'

import { motion } from 'framer-motion'

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
}

export default function TabButton({
  isActive,
  onClick,
  children,
}: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: isActive
          ? 'var(--color-bg-under)'
          : 'var(--color-bg-upper)',
        boxShadow: isActive ? 'var(--inner-shadow)' : 'var(--shadow-md)',
        borderColor: isActive ? 'var(--color-primary)' : 'transparent',
      }}
      transition={{ duration: 0.2 }}
      className="w-14 h-14 rounded-[var(--radius-sm)] border-[3px] font-bold flex items-center justify-center text-2xl"
      style={{
        fontFamily: 'var(--font-chivo-mono)',
        color: isActive ? 'var(--color-primary)' : 'var(--color-muted)',
      }}
    >
      {children}
    </motion.button>
  )
}

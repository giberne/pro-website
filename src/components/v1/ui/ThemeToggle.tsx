'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  inHeader?: boolean
}

export function ThemeToggle({ inHeader = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollY } = useScroll()

  // Opacité du texte : disparaît entre 0 et 200px de scroll
  const labelOpacity = useTransform(scrollY, [0, 200], [1, 0])

  // Évite les problèmes d'hydratation SSR/Client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Placeholder pour éviter layout shift pendant le chargement
    return <div className="h-10 w-10" />
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      className="relative flex flex-col items-center gap-2"
      aria-label="Toggle theme"
    >
      {/* Effet de halo lumineux qui apparaît au hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="pointer-events-none absolute -inset-4 rounded-full bg-black/5 blur-xl dark:bg-white/10"
      />

      {/* Icône avec drop shadow progressif */}
      <motion.div
        animate={{
          filter: isHovered
            ? theme === 'dark'
              ? 'drop-shadow(0 0 8px rgba(255,255,255,0.4))'
              : 'drop-shadow(0 0 8px rgba(0,0,0,0.3))'
            : theme === 'dark'
              ? 'drop-shadow(0 0 0px rgba(255,255,255,0))'
              : 'drop-shadow(0 0 0px rgba(0,0,0,0))'
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative z-10"
      >
        {theme === 'dark' ? (
          <Sun className="h-6 w-6 text-white sm:h-7 sm:w-7" />
        ) : (
          <Moon className="h-6 w-6 text-black sm:h-7 sm:w-7" />
        )}
      </motion.div>

      {/* Label du mode actuel - disparaît lors du scroll si pas dans header */}
      {!inHeader && (
        <motion.span
          style={{ opacity: labelOpacity }}
          className="relative z-10 font-mono text-sm tracking-wider text-muted"
        >
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </motion.span>
      )}
    </motion.button>
  )
}

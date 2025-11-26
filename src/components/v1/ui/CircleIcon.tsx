'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

interface CircleIconProps {
  label: string
  variant: 'triple' | 'double' | 'full'
  onClick?: () => void
  disableScrollAnimation?: boolean
}

export default function CircleIcon({ label, variant, onClick, disableScrollAnimation = false }: CircleIconProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { scrollY } = useScroll()

  // Opacité des cercles : disparaissent entre 200px et 500px de scroll (sauf si désactivé)
  const circleOpacity = useTransform(scrollY, [200, 500], [1, 0])

  return (
    <motion.div
      style={{ opacity: disableScrollAnimation ? 1 : circleOpacity }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`flex flex-col items-center gap-4 ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Conteneur du cercle avec animation */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      >
        {/* Effet de halo lumineux avec animation progressive */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="absolute -inset-4 rounded-full bg-black/10 blur-2xl dark:bg-white/20"
        />
        {variant === 'triple' && (
          <>
            {/* Anneau extérieur avec ombre */}
            <div className="absolute inset-0 rounded-full border-5 border-black shadow-depth-2 dark:border-white" />

            {/* Anneau intermédiaire avec ombre */}
            <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border-5 border-black shadow-depth-1 dark:border-white" />

            {/* Cercle central plein avec ombre et effet de brillance */}
            <div className="absolute left-1/2 top-1/2 h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-depth-1 dark:bg-white" />
          </>
        )}

        {variant === 'double' && (
          <>
            {/* Anneau extérieur avec ombre */}
            <div className="absolute inset-0 rounded-full border-6 border-black shadow-depth-2 dark:border-white" />

            {/* Cercle central plein plus gros avec dégradé subtil */}
            <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-black to-black/90 shadow-depth-2 dark:from-white dark:to-white/90" />
          </>
        )}

        {variant === 'full' && (
          <>
            {/* Cercle complètement rempli avec dégradé et ombre */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black via-black to-black/80 shadow-depth-3 dark:from-white dark:via-white dark:to-white/80" />
            {/* Reflet de lumière */}
            <div className="absolute left-[20%] top-[20%] h-[30%] w-[30%] rounded-full bg-white/20 blur-sm dark:bg-white/30" />
          </>
        )}
      </motion.div>

      {/* Label simple sans effets de lumière */}
      <span className="border border-black px-1 py-0 font-mono text-xs dark:border-white sm:text-sm">
        {label}
      </span>
    </motion.div>
  )
}

'use client'

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from './ProjectCard'

interface Project {
  image: string
  tag: string
  defi: string
  vision: string
}

interface ProjectCardStackProps {
  projects: Project[]
}

export default function ProjectCardStack({ projects }: ProjectCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100

    if (Math.abs(info.offset.x) > swipeThreshold) {
      // Swipe détecté
      if (info.offset.x > 0) {
        // Swipe right - projet précédent
        goToPrevious()
      } else {
        // Swipe left - projet suivant
        goToNext()
      }
    }
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 20 : -20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    // Exit désactivé - on garde seulement l'animation d'arrivée
    exit: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
  }

  return (
    <div className="relative">
      {/* Stack de cards */}
      <div className="relative min-h-[500px] sm:min-h-[600px]">
        {/* Card actuelle - draggable sur mobile */}
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            rotate: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          style={{
            x,
            rotate,
            opacity,
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          <ProjectCard {...projects[currentIndex]} />
        </motion.div>

        {/* Cards suivantes en arrière-plan (effet de stack) */}
        {[1, 2].map((offset) => {
          const index = (currentIndex + offset) % projects.length
          return (
            <motion.div
              key={`stack-${index}`}
              className="pointer-events-none absolute inset-0"
              initial={{ scale: 1 - offset * 0.05, y: offset * 10, opacity: 0.5 }}
              animate={{ scale: 1 - offset * 0.05, y: offset * 10, opacity: 0.5 }}
              style={{ zIndex: -offset }}
            >
              <div className="opacity-40">
                <ProjectCard {...projects[index]} />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation - Boutons pour desktop */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="rounded-lg border border-black px-4 py-2 font-mono text-sm uppercase transition-all hover:scale-105 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          aria-label="Projet précédent"
        >
          ← Précédent
        </button>

        {/* Dots indicator */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-black dark:bg-white'
                  : 'bg-black/30 hover:bg-black/50 dark:bg-white/30 dark:hover:bg-white/50'
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="rounded-lg border border-black px-4 py-2 font-mono text-sm uppercase transition-all hover:scale-105 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          aria-label="Projet suivant"
        >
          Suivant →
        </button>
      </div>

      {/* Indicateur de swipe pour mobile */}
      <p className="mt-4 text-center text-xs text-muted sm:hidden">
        ← Glissez pour naviguer →
      </p>
    </div>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useModal } from '@/contexts/ModalContext'

interface ProjectSection {
  title: string
  content: string
}

interface Project {
  image: string
  tag: string
  type: string
  sections: ProjectSection[]
  link?: string
}

interface ProjectCardModalProps {
  project: Project
  allProjects: Project[]
  index: number
}

export default function ProjectCardModal({ project, allProjects, index }: ProjectCardModalProps) {
  const { setIsModalOpen } = useModal()
  const [isOpen, setIsOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(index)
  const [direction, setDirection] = useState(0)

  const currentProject = allProjects[currentProjectIndex]

  // Synchroniser l'état local avec le contexte global
  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen, setIsModalOpen])

  const goToNext = () => {
    setDirection(1)
    setCurrentProjectIndex((prev) => (prev + 1) % allProjects.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <>
      {/* Card cliquable */}
      <motion.div
        onClick={() => {
          setCurrentProjectIndex(index)
          setIsOpen(true)
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 1.2,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-depth-middle shadow-depth-2 transition-all duration-500 hover:shadow-depth-3"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.tag}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay au hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Titre */}
        <div className="p-4">
          <h3 className="text-base font-semibold sm:text-lg">
            {project.tag}
          </h3>
        </div>

        {/* Effet de lumière au hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed z-[9999] bg-black/80 backdrop-blur-md"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                minHeight: '-webkit-fill-available'
              }}
            />

            {/* Contenu de la modale */}
            <div
              className="fixed z-[9999] flex items-center justify-center gap-4 px-4 sm:gap-8"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100vw',
                height: '100vh',
                minHeight: '-webkit-fill-available'
              }}
            >
              {/* Navigation gauche */}
              {allProjects.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="hidden rounded-full bg-depth-top p-3 transition-all hover:scale-110 hover:bg-depth-top-hover sm:block"
                  aria-label="Projet précédent"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-depth-middle shadow-depth-4 dark:border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Bouton fermer - Fixe */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-depth-top p-2 transition-all hover:scale-110 hover:bg-depth-top-hover"
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Contenu scrollable */}
                <div className="overflow-y-auto">
                  {/* Contenu animé */}
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentProjectIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                    {/* Image bannière 16:9 */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={currentProject.image}
                        alt={currentProject.tag}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="p-6 sm:p-12">
                      <div className="space-y-4">
                        {/* Tag/Titre */}
                        <h2 className="text-xl font-semibold sm:text-3xl">
                          {currentProject.tag}
                        </h2>

                        {/* Badge type de projet - sous l'image - muted car c'est un tag */}
                        <div className="inline-block rounded-lg bg-black/5 px-3 py-1.5 dark:bg-white/5">
                          <span className="text-xs text-muted sm:text-sm">
                            {currentProject.type}
                          </span>
                        </div>

                        {/* Sections dynamiques du projet */}
                        {currentProject.sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="mb-2 text-sm font-semibold sm:text-base">{section.title}</h3>
                            <p className="text-sm font-light leading-relaxed sm:text-base">
                              {section.content}
                            </p>
                          </div>
                        ))}

                        {/* Bouton voir le projet - Aligné à droite */}
                        {currentProject.link && (
                          <div className="flex justify-end pt-4">
                            <a
                              href={currentProject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-2xl border-2 border-black bg-gradient-to-br from-black to-black/90 px-6 py-3 font-semibold text-white shadow-lg inner-highlight transition-all hover:scale-105 hover:shadow-xl dark:border-white dark:from-white dark:to-white/90 dark:text-black"
                            >
                              Voir le projet
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                </div>
              </motion.div>

              {/* Navigation droite */}
              {allProjects.length > 1 && (
                <button
                  onClick={goToNext}
                  className="hidden rounded-full bg-depth-top p-3 transition-all hover:scale-110 hover:bg-depth-top-hover sm:block"
                  aria-label="Projet suivant"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

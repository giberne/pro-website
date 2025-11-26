'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'
import RichText from '@/components/v1/ui/RichText'
import ScrollToCalendlyButton from '@/components/v1/ui/ScrollToCalendlyButton'

interface ServiceSection {
  content: string
}

interface Service {
  title: string
  description: string
  details?: string  // Ancien format (rétrocompatibilité)
  sections?: ServiceSection[]  // Nouveau format avec sections
}

interface ServiceCardModalProps {
  title: string
  description: string
  details?: string
  sections?: ServiceSection[]
  index?: number
  allServices?: Service[]
}

export default function ServiceCardModal({
  title,
  description,
  details,
  sections,
  index = 0,
  allServices = [],
}: ServiceCardModalProps) {
  const { setIsModalOpen } = useModal()
  const [isOpen, setIsOpen] = useState(false)
  const [currentServiceIndex, setCurrentServiceIndex] = useState(index)
  const [direction, setDirection] = useState(0)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-100px' })

  const currentService = allServices.length > 0 ? allServices[currentServiceIndex] : { title, description, details, sections }

  // Synchroniser l'état local avec le contexte global
  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen, setIsModalOpen])

  const goToNext = () => {
    setDirection(1)
    setCurrentServiceIndex((prev) => (prev + 1) % allServices.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentServiceIndex((prev) => (prev - 1 + allServices.length) % allServices.length)
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

  const baseStyles =
    'group relative w-full cursor-pointer overflow-hidden rounded-xl border border-black/10 bg-depth-middle px-4 py-3 text-left text-black shadow-depth-2 backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:shadow-depth-3 hover:border-black/20 dark:border-white/10 dark:text-white dark:hover:border-white/20 sm:px-5 sm:py-4'

  return (
    <>
      {/* Card cliquable avec animation au scroll */}
      <motion.div
        ref={cardRef}
        onClick={() => {
          setCurrentServiceIndex(index)
          setIsOpen(true)
        }}
        className={baseStyles}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{
          duration: 1.2,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Effet de lumière au hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10" />

        {/* Contenu flex pour pousser le bouton en bas */}
        <div className="relative flex h-full flex-col">
          {/* Titre */}
          <h3 className="mb-3 text-base font-semibold sm:text-lg">{title}</h3>

          {/* Description courte */}
          <p className="text-sm sm:text-base font-light leading-relaxed opacity-80">
            {description}
          </p>

          {/* Bouton flèche pour en savoir plus - toujours en bas à droite */}
          <div className="mt-auto flex items-center justify-end pt-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-depth-top inner-highlight transition-all duration-300 group-hover:scale-110 hover:bg-depth-top-hover">
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modale */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop avec blur */}
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

            {/* Contenu de la modale avec navigation */}
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
              {allServices.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="hidden rounded-full bg-depth-top p-3 transition-all hover:scale-110 hover:bg-depth-top-hover sm:block"
                  aria-label="Service précédent"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-depth-middle shadow-depth-4 backdrop-blur-xl dark:border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Effet de lumière subtil */}
                <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-b from-black/5 to-transparent blur-3xl dark:from-white/5" />

                {/* Bouton fermer - Fixe */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 z-20 rounded-full bg-depth-bottom inner-shadow  p-2 transition-all hover:scale-110 hover:bg-depth-top-hover"
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Contenu scrollable */}
                <div className="overflow-y-auto">
                  {/* Contenu animé */}
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentServiceIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      className="p-6 sm:p-8"
                    >
                    <div className="relative space-y-4">
                      {/* Titre */}
                      <h2 className="pr-12 text-lg font-semibold sm:text-xl">{currentService.title}</h2>

                      {/* Description courte - muted car c'est un sous-titre */}
                      <p className="text-sm font-normal text-muted sm:text-base">{currentService.description}</p>

                      {/* Séparateur avec dégradé */}
                      <div className="h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />

                      {/* Détails complets - Nouveau format avec sections ou ancien format */}
                      {currentService.sections && currentService.sections.length > 0 ? (
                        <div className="space-y-4 text-sm font-light sm:text-base">
                          {currentService.sections.map((section, idx) => (
                            <RichText key={idx} content={section.content} />
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <h3 className="text-sm font-semibold sm:text-base">Description complète</h3>
                          <p className="text-sm font-light leading-relaxed sm:text-base">{currentService.details}</p>
                        </div>
                      )}

                      {/* CTA - Aligné à droite */}
                      <div className="flex justify-end pt-4">
                        <ScrollToCalendlyButton
                          text="Discutons de votre projet"
                          onBeforeScroll={() => setIsOpen(false)}
                          className="inline-block rounded-2xl border border-black/20 bg-gradient-to-br from-black to-black/90 px-6 py-3 font-semibold text-white shadow-lg inner-highlight transition-all hover:scale-105 hover:shadow-xl dark:border-white/20 dark:from-white dark:to-white/90 dark:text-black"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                </div>
              </motion.div>

              {/* Navigation droite */}
              {allServices.length > 1 && (
                <button
                  onClick={goToNext}
                  className="hidden rounded-full bg-depth-top p-3 transition-all hover:scale-110 hover:bg-depth-top-hover sm:block"
                  aria-label="Service suivant"
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

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Plus } from 'lucide-react'
import Image from 'next/image'
import ButtonV2 from '../ui/ButtonV2'
import CardV2 from '../ui/CardV2'
import { projects } from '@/data/v2/portfolio'

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex(
      (prev) => (prev + newDirection + projects.length) % projects.length,
    )
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="portfolio" className="py-20">
      <div className="container-v2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2
            className="text-2xl md:text-[32px] font-bold"
            style={{ fontFamily: 'var(--font-oxanium-v2)' }}
          >
            Projets & Réalisations
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-stretch"
            >
              {/* Left Column: Image (60%) */}
              <div className="relative flex justify-center md:justify-start">
                {/* Navigation Buttons - Positioned on sides */}
                <motion.button
                  onClick={() => paginate(-1)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: 'var(--shadow-primary)',
                  }}
                  whileTap={{ scale: 0.90 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-[var(--shadow-md)] flex items-center justify-center border-[3px] border-transparent hover:border-[var(--color-primary)] transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={16} className="md:w-5 md:h-5" color="var(--color-primary)" />
                </motion.button>

                <motion.button
                  onClick={() => paginate(1)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: 'var(--shadow-primary)',
                  }}
                  whileTap={{ scale: 0.90 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-[var(--shadow-md)] flex items-center justify-center border-[3px] border-transparent hover:border-[var(--color-primary)] transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight size={16} className="md:w-5 md:h-5" color="var(--color-primary)" />
                </motion.button>

                {/* Project Image */}
                {currentProject.image && (
                  <div className="relative w-[85%] md:w-full overflow-hidden">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      unoptimized
                    />
                  </div>
                )}
              </div>

              {/* Right Column: Description Card (40%) */}
              <div className="flex flex-col h-full">
                {/* Spacer - Prend l'espace disponible */}
                <div className="flex-1" />

                <CardV2 variant="upper" className="!p-4 md:!p-8">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-4"
                  >
                    {currentProject.subtitle}
                  </h3>
                  <p className="text-sm md:text-base text-[var(--color-muted)] mb-6">
                    {currentProject.result}
                  </p>

                  {/* Features List with Plus Icons */}
                  <ul className="space-y-3">
                    {currentProject.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Plus
                          size={14}
                          className="text-[var(--color-foreground)] mt-0.5 flex-shrink-0"
                          strokeWidth={3}
                        />
                        <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardV2>

                {/* CTA Button - Juste sous la card */}
                <div className="pt-4">
                  <ButtonV2
                    href={currentProject.link}
                    variant="secondary"
                    className="w-full !flex !flex-row items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Voir le projet</span>
                    <ExternalLink size={16} />
                  </ButtonV2>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

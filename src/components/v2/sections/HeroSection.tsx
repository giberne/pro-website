'use client'

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import TabButton from '../ui/TabButton'
import { services } from '@/data/v2/services'
import { useServicesCarousel } from '@/contexts/ServicesCarouselContext'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import AnimatedGrid from '../ui/AnimatedGrid'
import TypewriterText from '../ui/TypewriterText'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const { activeTab, setActiveTab, direction, setDirection } = useServicesCarousel()
  const scrollTo = useScrollToSection()

  // Parallax effect: image descend au scroll et se positionne au-dessus de la section Services
  // [0, 1000] = intervalle de scroll (0px → 1000px de scroll)
  // [1, 0.9] = scale de l'image (1 → 0.9)
  // [0, 300] = position Y (0px → 300px vers le bas)
  const mockupScale = useTransform(scrollY, [0, 1000], [1, 0.9])
  const mockupY = useTransform(scrollY, [0, 2000], [0, 600])

  // Animation de la card de texte - apparait APRÈS que l'image a fini de descendre (juste fade in)
  // [800, 1200] = la card apparaît entre 800px et 1200px de scroll
  // [0, 1] = opacity de 0 (invisible) à 1 (visible)
  const cardOpacity = useTransform(scrollY, [200, 600], [0, 1])

  // Tilt effect pour l'image au hover - avec stiffness réduit pour moins de calculs
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // Smooth spring animations pour le tilt - optimisé pour performance
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20, restDelta: 0.001 })
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20, restDelta: 0.001 })

  // Handler pour le mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Calcul des rotations (max ±10 degrés)
    const rotateXValue = (mouseY / (rect.height / 2)) * -10
    const rotateYValue = (mouseX / (rect.width / 2)) * 10

    rotateX.set(rotateXValue)
    rotateY.set(rotateYValue)
  }

  // Reset au mouse leave
  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  // Mots-clés pour l'effet typewriter
  const targetKeywords = [
    'ARTISANS>',
    'ARTISTES>',
    'COMMERÇANTS>',
    'CREATEURS>',
    'CONSULTANTS>',
    'E-COMMERCE>',
  ]

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  }

  const handleTabChange = (newIndex: number) => {
    setDirection(newIndex > activeTab ? 1 : -1)
    setActiveTab(newIndex)
  }

  // Animation slide pour les images
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  }

  // Animation fade simple pour le texte (pas de mouvement)
  const fadeVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section
      ref={ref}
      className="relative overflow-x-hidden"
      style={{ minHeight: '220vh' }}
    >
      {/* Grille animée en arrière-plan */}
      <AnimatedGrid />

      {/* Partie fixe en haut - Titre et CTA - Positionné avec padding-top intelligent */}
      <div className="min-h-screen relative z-10" style={{ paddingTop: 'clamp(120px, 25vh, 25vh)' }}>
        <div className="container-v2 text-center pb-8 sm:pb-0">
        {/* Titre avec effet typewriter */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl font-black mb-4 leading-tight tracking-tight mx-auto max-w-3xl min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center"
          style={{ fontFamily: 'var(--font-poppin-v2)', fontWeight: 600 }}
        >
          <span className="block">CRÉATION DE SITES WEB</span>
          <span className="block">
            POUR{' '}
            <span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
              style={{ fontFamily: 'var(--font-oxanium-v2)', fontWeight: 900 }}
            >
              &lt;/
              <span className="inline-block tracking-tighter text-left" style={{ minWidth: '10ch' }}>
                <TypewriterText
                  words={targetKeywords}
                  typingSpeed={120}
                  deletingSpeed={80}
                  delayBetweenWords={2000}
                />
              </span>
            </span>
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm md:text-lg text-[var(--color-muted)] mb-8 max-w-xl mx-auto px-4"
        >
          Je conçois et développe des solutions web sur mesure, du design à la
          mise en ligne.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#contact')
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative inline-block cursor-pointer text-white rounded-[var(--radius-full)] font-bold [background:var(--color-primary-gradient)] hover:[background:white] hover:text-[var(--color-primary)] hover:border-[3px] hover:border-[var(--color-primary)] shadow-[var(--shadow-primary)] transition-all duration-200 px-6 py-4 overflow-hidden group"
          >
            {/* Effet de brillance */}
            <span className="absolute inset-0 w-full h-full">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_3s_ease-in-out_infinite] group-hover:animate-none" />
            </span>
            <span className="relative z-10">Discutons de votre projet</span>
          </motion.a>
        </motion.div>
        </div>
      </div>

      {/* Container avec image + card positionnées ensemble */}
      <div className="relative w-full z-30" style={{ marginTop: 'clamp(-15rem, -30vh, -30rem)' }}>
        {/* Carrousel d'images avec parallax - descend au scroll */}
        <motion.div
          style={{
            scale: mockupScale,
            y: mockupY,
            maxWidth: 'min(80rem, 100vh)',
          }}
          className="w-full px-8 md:px-16 z-20 relative mx-auto"
        >
          <motion.div
            className="relative"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeTab}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto shadow-[var(--shadow-md)] rounded-[var(--radius-sm)] sm:rounded-[var(--radius-lg)] will-change-transform"
                  priority={activeTab === 0}
                  loading={activeTab === 0 ? "eager" : "lazy"}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Card avec le texte */}
          <motion.div
            style={{
              opacity: cardOpacity,
            }}
            className="relative z-10 mt-8"
          >
            <div className="max-w-3xl mx-auto text-center bg-white rounded-[var(--radius-lg)] p-6 md:p-8 shadow-[var(--shadow-lg)]">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeTab}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h2
                    className="text-xl md:text-[24px] text-primary font-bold mb-6"
                    style={{ fontFamily: 'var(--font-oxanium-v2)' }}
                  >
                    {services[activeTab].title}
                  </h2>
                  <p className="text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                    {services[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Boutons tabs - positionnés sous la card */}
          <motion.div
            style={{
              opacity: cardOpacity,
            }}
            className="relative z-10 mt-8 flex items-center justify-center gap-4"
          >
            {services.map((_, index) => (
              <TabButton
                key={index}
                isActive={activeTab === index}
                onClick={() => handleTabChange(index)}
              >
                {index + 1}
              </TabButton>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

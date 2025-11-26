'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ThemeToggle } from '@/components/v1/ui/ThemeToggle'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()

  // Transformations basées sur le scroll (0 à 400px de scroll)
  // Taille du prénom : 36px -> 14px
  const firstNameSize = useTransform(scrollY, [0, 400], [36, 14])
  // Taille du nom : 72px -> 14px
  const lastNameSize = useTransform(scrollY, [0, 400], [72, 14])
  // Position Y : 0 -> scroll vers le haut
  const titleY = useTransform(scrollY, [0, 400], [0, -200])
  // Opacité du sous-titre
  const subtitleOpacity = useTransform(scrollY, [0, 200], [1, 0])
  // Opacité des eyes : disparaissent entre 200px et 500px de scroll
  const eyesOpacity = useTransform(scrollY, [200, 500], [1, 0])

  // Fonctions de scroll vers les sections
  const handleDirectionClick = () => {
    const section = document.getElementById('direction-artistique')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDevClick = () => {
    const section = document.getElementById('developpement-web')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Bouton Dark Mode - Position fixe centrée en haut */}
      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6 lg:top-8"
      >
        <ThemeToggle />
      </motion.div>

      {/* Contenu centré avec padding-top pour éviter le ThemeToggle */}
      <div className="flex flex-col items-center space-y-18 pt-24 text-center sm:pt-0 lg:space-y-24">
        {/* Nom principal - animation progressive avec le scroll */}
        <div className="space-y-3">
          <motion.h1
            style={{ y: titleY }}
            className="flex flex-col items-center font-bold uppercase leading-none tracking-tight"
          >
            {/* Prénom - Taille qui rétrécit avec le scroll */}
            <motion.span style={{ fontSize: firstNameSize }}>Thomas</motion.span>
            {/* Nom - Taille qui rétrécit avec le scroll */}
            <motion.span style={{ fontSize: lastNameSize }}>Giberné</motion.span>
          </motion.h1>
          <motion.p
            style={{ opacity: subtitleOpacity }}
            className="font-mono text-base font-light text-muted sm:text-lg lg:text-xl"
          >
            Développeur & Designer
          </motion.p>
        </div>

        {/* Nouveaux designs SVG - Eyes avec animation de scroll */}
        <div className="flex flex-row items-center gap-8 sm:gap-16 lg:gap-22">
          
          <motion.div
            style={{ opacity: eyesOpacity }}
            onClick={handleDevClick}
            className="flex cursor-pointer flex-col items-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              className="dark:invert"
            >
              <Image
                src="/graphics/code-eye.svg"
                alt="Code Eye"
                width={93}
                height={56}
                className="block h-auto w-[60px] sm:w-[70px] md:w-[80px] lg:w-[93px]"
              />
            </motion.div>
            <span className="border border-black px-1 py-0 font-mono text-xs dark:border-white sm:text-sm">
              Développement Web
            </span>
          </motion.div>
          <motion.div
            style={{ opacity: eyesOpacity }}
            onClick={handleDirectionClick}
            className="flex cursor-pointer flex-col items-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0 }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              className="dark:invert"
            >
              <Image
                src="/graphics/realeye.svg"
                alt="Real Eye"
                width={93}
                height={56}
                className="block h-auto w-[60px] sm:w-[70px] md:w-[80px] lg:w-[93px]"
              />
            </motion.div>
            <span className="border border-black px-1 py-0 font-mono text-xs dark:border-white sm:text-sm">
              Identité Visuelle
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import SectionTitle from '@/components/v1/ui/SectionTitle'
import CircleIcon from '@/components/v1/ui/CircleIcon'
import ScrollToCalendlyButton from '@/components/v1/ui/ScrollToCalendlyButton'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PhilosophieSection() {
  const circlesRef = useRef(null)
  const isInView = useInView(circlesRef, { once: true, amount: 0.3 })
  const buttonRef = useRef(null)
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.3 })

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
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Ma Démarche" />

        {/* 3 Cercles graphiques animés avec animation de scroll */}
        <motion.div
          ref={circlesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 lg:gap-18"
        >
          <CircleIcon label="Identité Visuelle" variant="triple" onClick={handleDirectionClick} disableScrollAnimation />
          <CircleIcon label="Développement Web" variant="double" onClick={handleDevClick} disableScrollAnimation />
          <CircleIcon label="Expérience immersive" variant="full" onClick={handleDevClick} disableScrollAnimation />
        </motion.div>

        <p className="mx-auto mt-18 max-w-3xl text-center text-base font-normal">
          Ma philosophie est de bâtir des ponts entre la vision et l&apos;outil, entre l&apos;esthétique et la fonction. Je conçois mon travail comme une collaboration étroite où je ne suis pas un simple prestataire, mais un partenaire stratégique.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal">
          Ma conviction est que l&apos;efficacité naît de la simplicité : je crée des expériences épurées où chaque élément a sa raison d&apos;être, pour donner naissance à des produits numériques qui sont à la fois clairs, performants et mémorables.
        </p>

        {/* Bouton CTA + Label Gratuit avec animation */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <ScrollToCalendlyButton
            text="Réserver un appel"
            className="inline-block rounded-2xl border border-black/20 bg-gradient-to-br from-black to-black/90 px-6 py-3 text-base font-semibold text-white shadow-lg inner-highlight transition-all hover:scale-105 hover:shadow-xl dark:border-white/20 dark:from-white dark:to-white/90 dark:text-black sm:px-8 sm:py-4 sm:text-lg"
          />
          <span className=" text-xs  tracking-wider text-muted sm:text-sm">
            Gratuit
          </span>
        </motion.div>
      </div>
    </section>
  )
}

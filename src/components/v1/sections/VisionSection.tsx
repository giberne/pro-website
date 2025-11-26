'use client'

import SectionTitle from '@/components/v1/ui/SectionTitle'
import ScrollToCalendlyButton from '@/components/v1/ui/ScrollToCalendlyButton'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function VisionSection() {
  const buttonRef = useRef(null)
  const isInView = useInView(buttonRef, { once: true, amount: 0.3 })

  return (
    <section className="px-8 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="De l'idée à l'expérience" />

        {/* Paragraphe explicatif */}
        <p className="mb-8 mt-6 text-base font-normal text-muted sm:mb-10">
          J’unis design et développement pour donner forme à vos idées. Mon rôle : transformer une vision en un produit clair, esthétique et fonctionnel.
        </p>

        {/* Bouton CTA + Label Gratuit avec animation */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center gap-2"
        >
          <ScrollToCalendlyButton
            text="Réserver un appel"
            className="inline-block rounded-2xl border border-black/20 bg-gradient-to-br from-black to-black/90 px-6 py-3 text-base font-semibold text-white shadow-lg inner-highlight transition-all hover:scale-105 hover:shadow-xl dark:border-white/20 dark:from-white dark:to-white/90 dark:text-black sm:px-8 sm:py-4 sm:text-lg"
          />
          <span className="text-xs tracking-wider text-muted sm:text-sm">
            Gratuit
          </span>
        </motion.div>
      </div>
    </section>
  )
}

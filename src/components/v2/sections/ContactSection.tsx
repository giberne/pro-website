'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function ContactSection() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const url = 'https://calendly.com/giberne/diagnostic'

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1080)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !containerRef.current) return

    // V2 utilise light mode uniquement
    const backgroundColor = 'F2F2F2'
    const textColor = '0D0D0D'
    const primaryColor = '3C87DD'

    const calendlyUrl = `${url}?background_color=${backgroundColor}&text_color=${textColor}&primary_color=${primaryColor}`

    // Fonction pour initialiser le widget
    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        // Nettoyer le conteneur avant d'initialiser
        containerRef.current.innerHTML = ''

        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
        })
      }
    }

    // Vérifier si le script est déjà chargé
    if (window.Calendly) {
      initWidget()
    } else {
      // Attendre que le script soit chargé
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly)
          initWidget()
        }
      }, 100)

      return () => clearInterval(checkCalendly)
    }
  }, [mounted, url])

  // Hauteur fixe responsive : mobile (1100px) / desktop (1400px pour tout afficher)
  const height = isMobile ? '1100px' : '800px'

  // Ne pas afficher tant que le composant n'est pas monté côté client
  if (!mounted) {
    return (
      <section id="contact" className="py-20">
        <div className="container-v2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-2xl md:text-[32px] font-bold"
              style={{ fontFamily: 'var(--font-oxanium-v2)' }}
            >
              Réservez votre appel stratégique
            </h2>
            <p className="text-[var(--color-muted)] text-base md:text-lg max-w-2xl mx-auto mt-4">
              Discutons de votre projet et voyons comment je peux vous aider à le
              concrétiser.
            </p>
          </motion.div>

          <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] overflow-hidden max-w-6xl mx-auto">
            <div
              style={{
                width: '100%',
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
              }}
            >
              <p className="text-[var(--color-muted)]">Chargement...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20">
      <div className="container-v2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl md:text-[32px] font-bold"
            style={{ fontFamily: 'var(--font-oxanium-v2)' }}
          >
            Réservez votre appel stratégique
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg max-w-2xl mx-auto mt-4">
            Discutons de votre projet et voyons comment je peux vous aider à le
            concrétiser.
          </p>
        </motion.div>

        {/* Calendly Widget */}
        <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] overflow-hidden max-w-6xl mx-auto">
          <div
            ref={containerRef}
            className="calendly-container"
            style={{
              width: '100%',
              height,
            }}
          />
        </div>
      </div>
    </section>
  )
}

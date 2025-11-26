'use client'

import { useEffect, useState, useRef } from 'react'
import { useTheme } from 'next-themes'

interface CalendlyInlineProps {
  url?: string
}

export default function CalendlyInline({
  url = "https://calendly.com/giberne/diagnostic"
}: CalendlyInlineProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
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

    // Construire l'URL avec les paramètres de couleur selon le thème
    const isDark = resolvedTheme === 'dark'
    const backgroundColor = isDark ? '0C0D10' : 'F5F3F0'
    const textColor = isDark ? 'ffffff' : '000000'
    const primaryColor = isDark ? 'A9FFDA' : '3657C8'

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
  }, [mounted, resolvedTheme, url])

  // Hauteur fixe responsive : mobile (1100px) / desktop (700px)
  const height = isMobile ? '1100px' : '700px'

  // Ne pas afficher tant que le composant n'est pas monté côté client
  if (!mounted) {
    return (
      <div
        style={{
          width: '100%',
          height,
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--background)',
        }}
      >
        <p className="text-muted">Chargement...</p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="calendly-container"
      style={{
        width: '100%',
        height,
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    />
  )
}

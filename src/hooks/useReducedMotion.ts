import { useEffect, useState } from 'react'

/**
 * Hook pour détecter si l'utilisateur préfère réduire les animations
 * ou si l'appareil a des performances limitées
 */
export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    // Vérifier la préférence système
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduceMotion(mediaQuery.matches)

    // Écouter les changements
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return shouldReduceMotion
}

/**
 * Hook pour détecter si l'appareil a de faibles performances
 * Basé sur le nombre de cores et la mémoire disponible
 */
export function useLowPerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    // Détection basique des performances
    const checkPerformance = () => {
      // @ts-expect-error - navigator.hardwareConcurrency existe mais n'est pas typé partout
      const cores = navigator.hardwareConcurrency || 2
      // @ts-expect-error - navigator.deviceMemory est expérimental
      const memory = navigator.deviceMemory || 4

      // Si moins de 4 cores ou moins de 4GB RAM, considérer comme faible performance
      const isLow = cores < 4 || memory < 4

      setIsLowPerformance(isLow)
    }

    checkPerformance()
  }, [])

  return isLowPerformance
}

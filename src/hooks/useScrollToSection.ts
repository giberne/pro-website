export function useScrollToSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -120 // Offset pour le header
      const targetY = element.getBoundingClientRect().top + window.scrollY + yOffset

      // Animation fade pendant le scroll
      const mainElement = document.querySelector('main')
      if (mainElement) {
        mainElement.style.transition = 'opacity 0.2s ease-out'
        mainElement.style.opacity = '0.3'
      }

      // Désactiver temporairement le smooth scroll pour éviter les conflits avec Framer Motion
      document.documentElement.style.scrollBehavior = 'auto'

      // Scroll immédiat après un très court délai pour voir le fade
      setTimeout(() => {
        window.scrollTo(0, targetY)

        // Fade-in rapide après le scroll
        if (mainElement) {
          setTimeout(() => {
            mainElement.style.opacity = '1'

            // Nettoyer les styles après l'animation
            setTimeout(() => {
              mainElement.style.transition = ''
            }, 200)
          }, 50)
        }

        // Réactiver le scroll behavior
        document.documentElement.style.scrollBehavior = ''
      }, 100)
    }
  }

  return scrollToSection
}

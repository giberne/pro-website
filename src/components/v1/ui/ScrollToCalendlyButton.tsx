'use client'

interface ScrollToCalendlyButtonProps {
  text?: string
  className?: string
  children?: React.ReactNode
  onBeforeScroll?: () => void
}

export default function ScrollToCalendlyButton({
  text = "Réserver un appel",
  className = "",
  children,
  onBeforeScroll
}: ScrollToCalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Exécuter la fonction de callback (ex: fermer la modale)
    if (onBeforeScroll) {
      onBeforeScroll()
    }

    // Attendre un peu que la modale se ferme avant de scroller
    setTimeout(() => {
      const calendlySection = document.getElementById('calendly-section')
      if (calendlySection) {
        calendlySection.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }, 300) // 300ms pour laisser le temps à l'animation de fermeture
  }

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children || text}
    </button>
  )
}

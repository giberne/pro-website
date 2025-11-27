'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
  className?: string
  onComplete?: () => void
}

export default function TypewriterText({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenWords = 2000,
  className = '',
  onComplete,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [hasCalledComplete, setHasCalledComplete] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Phase d'écriture
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            // Mot complet - attendre puis commencer à supprimer
            setTimeout(() => setIsDeleting(true), delayBetweenWords)
          }
        } else {
          // Phase de suppression
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Mot supprimé - passer au suivant
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  // Appeler onComplete quand le premier mot est complètement tapé
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    if (
      !hasCalledComplete &&
      !isDeleting &&
      currentText.length === currentWord.length &&
      currentWordIndex === 0 &&
      onComplete
    ) {
      setHasCalledComplete(true)
      onComplete()
    }
  }, [currentText, isDeleting, currentWordIndex, hasCalledComplete, onComplete, words])

  return (
    <span className={className}>
      {currentText}
      <span className="inline-block" style={{ animation: 'blink 1s step-end infinite' }}>|</span>
    </span>
  )
}

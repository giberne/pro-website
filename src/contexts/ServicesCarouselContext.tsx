'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ServicesCarouselContextType {
  activeTab: number
  setActiveTab: (index: number) => void
  direction: number
  setDirection: (dir: number) => void
}

const ServicesCarouselContext = createContext<ServicesCarouselContextType | undefined>(undefined)

export function ServicesCarouselProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState(0)

  return (
    <ServicesCarouselContext.Provider value={{ activeTab, setActiveTab, direction, setDirection }}>
      {children}
    </ServicesCarouselContext.Provider>
  )
}

export function useServicesCarousel() {
  const context = useContext(ServicesCarouselContext)
  if (!context) {
    throw new Error('useServicesCarousel must be used within ServicesCarouselProvider')
  }
  return context
}

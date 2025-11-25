'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion, useLowPerformance } from '@/hooks/useReducedMotion'

interface GridCell {
  id: string
  x: number
  y: number
  width: number
  height: number
  opacity: number
  animationDelay: number
  animationDuration: number
}

export default function AnimatedGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const isLowPerformance = useLowPerformance()
  const [isMobile, setIsMobile] = useState(false)

  // Détection mobile pour désactiver complètement la grille
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Disparition au scroll - simple fade out sans translation pour meilleures performances
  const gridOpacity = useTransform(scrollY, [0, 400], [1, 0])

  // Génération de la grille architecturale avec zones d'opacité variables
  const [cells, setCells] = useState<GridCell[]>([])

  useEffect(() => {
    const generateGrid = () => {
      const cellsArray: GridCell[] = []
      // Adapter le nombre de cellules selon les performances
      // Mobile: 15x10 = 150 cellules (très réduit)
      // Faible performance: 20x12 = 240 cellules
      // Performance normale: 40x25 = 1000 cellules
      const cols = isMobile ? 15 : (isLowPerformance ? 20 : 40)
      const rows = isMobile ? 10 : (isLowPerformance ? 12 : 25)
      const cellSize = isMobile ? 80 : (isLowPerformance ? 60 : 30)

      // Créer des "taches" d'opacité - zones avec opacité plus forte
      const opacityZones = [
        { x: 0.2, y: 0.3, radius: 0.25 },
        { x: 0.7, y: 0.6, radius: 0.2 },
        { x: 0.5, y: 0.8, radius: 0.15 },
      ]

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Position normalisée (0-1)
          const normX = col / cols
          const normY = row / rows

          // Calculer l'opacité basée sur la proximité aux zones
          let opacity = 0.08 // opacité de base réduite (était 0.15)

          opacityZones.forEach(zone => {
            const distance = Math.sqrt(
              Math.pow(normX - zone.x, 2) + Math.pow(normY - zone.y, 2)
            )
            if (distance < zone.radius) {
              // Plus proche du centre de la zone = plus opaque
              const factor = 1 - distance / zone.radius
              opacity = Math.max(opacity, 0.12 + factor * 0.18) // réduit (était 0.2 + 0.3)
            }
          })

          // Taille uniforme pour éviter les superpositions
          const width = cellSize
          const height = cellSize

          cellsArray.push({
            id: `cell-${row}-${col}`,
            x: col * cellSize,
            y: row * cellSize,
            width,
            height,
            opacity,
            animationDelay: Math.random() * 5, // délai aléatoire entre 0 et 5 secondes
            animationDuration: 2 + Math.random() * 3, // durée aléatoire entre 2 et 5 secondes
          })
        }
      }

      setCells(cellsArray)
    }

    generateGrid()
  }, [isLowPerformance, isMobile])

  // Si l'utilisateur préfère réduire les animations, ne rien afficher
  if (shouldReduceMotion) {
    return null
  }

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
      style={{
        opacity: gridOpacity,
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ pointerEvents: 'none' }}
      >
        {cells.map((cell) => {
          return (
            <GridCellComponent
              key={cell.id}
              cell={cell}
            />
          )
        })}
      </svg>
    </motion.div>
  )
}

// Composant pour une cellule individuelle
interface GridCellComponentProps {
  cell: GridCell
}

function GridCellComponent({
  cell,
}: GridCellComponentProps) {
  return (
    <motion.rect
      x={cell.x}
      y={cell.y}
      width={cell.width}
      height={cell.height}
      fill="#5c5ef073"
      stroke="#c0c0c0ff"
      strokeWidth={0.5}
      initial={{ opacity: cell.opacity }}
      animate={{
        opacity: [cell.opacity, cell.opacity * 1.8, cell.opacity],
      }}
      transition={{
        duration: cell.animationDuration,
        repeat: Infinity,
        delay: cell.animationDelay,
        ease: 'linear',
      }}
      style={{
        pointerEvents: 'none',
      }}
    />
  )
}

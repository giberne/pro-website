'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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

  // Disparition au scroll - la grille fade out et descend légèrement
  const gridOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const gridY = useTransform(scrollY, [0, 500], [0, 100])

  // État pour la cellule en hover
  const [hoveredCell, setHoveredCell] = useState<string | null>(null)

  // Génération de la grille architecturale avec zones d'opacité variables
  const [cells, setCells] = useState<GridCell[]>([])

  useEffect(() => {
    const generateGrid = () => {
      const cellsArray: GridCell[] = []
      const cols = 60 // nombre de colonnes (pour carrés 20px)
      const rows = 45 // nombre de lignes (pour carrés 20px)
      const cellSize = 20 // taille de base (20x20px)

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
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
      style={{
        opacity: gridOpacity,
        y: gridY,
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ pointerEvents: 'auto' }}
      >
        <defs>
          {/* Gradient pour les cellules hover */}
          <radialGradient id="hoverGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#666666" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#666666" stopOpacity="0" />
          </radialGradient>

          {/* Filtre pour le glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {cells.map((cell) => {
          return (
            <GridCellComponent
              key={cell.id}
              cell={cell}
              isHovered={hoveredCell === cell.id}
              onHover={() => setHoveredCell(cell.id)}
              onLeave={() => setHoveredCell(null)}
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
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function GridCellComponent({
  cell,
  isHovered,
  onHover,
  onLeave,
}: GridCellComponentProps) {
  return (
    <motion.rect
      x={cell.x}
      y={cell.y}
      width={cell.width}
      height={cell.height}
      fill="#c9c9c9ff"
      stroke="#c0c0c0ff"
      strokeWidth={0.5}
      initial={{ opacity: cell.opacity }}
      animate={{
        opacity: [cell.opacity, cell.opacity * 2.5, cell.opacity],
      }}
      transition={{
        duration: cell.animationDuration,
        repeat: Infinity,
        delay: cell.animationDelay,
        ease: 'easeInOut',
      }}
      whileHover={{
        opacity: Math.min(cell.opacity * 3, 0.6),
        strokeWidth: 1.5,
      }}
      onPointerEnter={onHover}
      onPointerLeave={onLeave}
      style={{
        pointerEvents: 'all',
      }}
    />
  )
}

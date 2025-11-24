'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { processSteps } from '@/data/v2/process'

export default function ProcessSection() {
  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="processus" className="py-20">
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
            Processus de création
          </h2>
        </motion.div>

        {/* Steps Grid - Horizontal sur desktop, vertical sur mobile */}
        <div className="grid md:grid-cols-4 gap-6 items-start">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={step.id} step={step} index={index} stepVariants={stepVariants} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProcessStepCardProps {
  step: {
    id: number
    title: string
    description: string
    icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>
  }
  index: number
  stepVariants: {
    hidden: { opacity: number; x: number }
    visible: (i: number) => {
      opacity: number
      x: number
      transition: { delay: number; duration: number }
    }
  }
}

function ProcessStepCard({ step, index, stepVariants }: ProcessStepCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const IconComponent = step.icon

  // Détecter la taille d'écran côté client pour éviter l'erreur d'hydratation
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Listen for resize
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.div
      custom={index}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="card-upper-sm cursor-pointer min-h-[140px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          y: isHovered ? -5 : 0,
          boxShadow: isHovered ? 'var(--shadow-primary)' : 'var(--shadow-lg)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col items-start text-left">
          {/* Icon */}
          <div className="mb-4">
            <IconComponent
              size={32}
              color="var(--color-primary)"
              strokeWidth={2}
            />
          </div>

          {/* Title */}
          <h3
            className="text-base md:text-lg font-bold"
            style={{ fontFamily: 'var(--font-oxanium-v2)' }}
          >
            {step.title}
          </h3>

          {/* Description - Always visible on mobile, hover on desktop */}
          <motion.div
            initial={false}
            animate={{
              height: isHovered || isMobile ? 'auto' : 0,
              opacity: isHovered || isMobile ? 1 : 0,
              marginTop: isHovered || isMobile ? 12 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-sm text-[var(--color-muted)]">
              {step.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

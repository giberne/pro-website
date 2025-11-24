'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

interface AccordionProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function Accordion({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <motion.div
      className="card-upper"
      whileHover={{ boxShadow: 'var(--shadow-primary)' }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold text-base md:text-lg pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <Plus size={24} color="var(--color-primary)" strokeWidth={3} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pt-4 text-sm md:text-base text-[var(--color-muted)]">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

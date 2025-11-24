'use client'

import { motion } from 'framer-motion'
import { Check, Plus } from 'lucide-react'
import ButtonV2 from '../ui/ButtonV2'
import CardV2 from '../ui/CardV2'
import { includedItems, optionalItems, offerContent } from '@/data/v2/offer'

export default function CompleteOfferSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20">
      <div className="container-v2">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl md:text-[32px] font-bold mb-4"
            style={{ fontFamily: 'var(--font-oxanium-v2)' }}
          >
            {offerContent.title}
          </h2>
          <p className="text-sm md:text-base text-[var(--color-muted)] max-w-3xl mx-auto">
            {offerContent.subtitle}
          </p>
        </motion.div>

        {/* Grille avec 2 colonnes séparées */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-6 mb-12">
          {/* Colonne Inclus - Card UNDER avec mini-cards UPPER en grid 3x2 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardV2 variant="under" className="!p-4 md:!p-8">
              <h3
                className="text-xl md:text-2xl font-bold mb-6 text-center"
                style={{ fontFamily: 'var(--font-oxanium-v2)' }}
              >
                Inclus :
              </h3>
              {/* Grid 2 colonnes mobile, 3 colonnes desktop (max) */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {includedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="aspect-square"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 }
                      }}
                      className="h-full cursor-pointer"
                    >
                      <CardV2 variant="upper" className="!p-4 h-full relative flex items-center justify-center text-center transition-colors duration-200 hover:bg-[var(--color-primary)]/10">
                        {/* Check icon dans le coin supérieur droit */}
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full shadow-[var(--shadow-primary)] flex items-center justify-center transition-all duration-200"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                          <Check
                            className="w-3 h-3 md:w-4 md:h-4"
                            color="#FFFFFF"
                            strokeWidth={3}
                          />
                        </motion.div>
                        {/* Texte centré */}
                        <span className="text-sm font-medium leading-tight">
                          {item.label}
                        </span>
                      </CardV2>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm text-[var(--color-muted)]">
                + 2 phases de retouches incluses
              </p>
            </CardV2>
          </motion.div>

          {/* Colonne Options - Card UNDER + CTA en dessous */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 mt-auto"
          >
            {/* Card Options */}
            <CardV2 variant="under">
              <h3
                className="text-lg md:text-xl font-bold mb-6 text-left"
                style={{ fontFamily: 'var(--font-oxanium-v2)' }}
              >
                Option disponible :
              </h3>
              <div className="grid gap-4">
                {optionalItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ rotate: 90, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 mt-0.5"
                    >
                      <Plus
                        size={14}
                        color="var(--color-foreground)"
                        strokeWidth={3}
                      />
                    </motion.div>
                    <span className="text-xs md:text-sm text-left">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </CardV2>

            {/* CTA et Prix - Séparés de la card */}
            <div className="text-center">
              <ButtonV2 href="#contact">
                {offerContent.cta}
              </ButtonV2>
              <p className="text-sm text-[var(--color-muted)] mt-4">
                {offerContent.price}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

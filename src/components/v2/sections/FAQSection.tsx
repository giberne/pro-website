'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Accordion from '../ui/Accordion'
import ButtonV2 from '../ui/ButtonV2'
import { faqItems } from '@/data/v2/faq'

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="faq" className="py-20">
      <div className="container-v2 max-w-4xl">
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
            Foire aux Questions
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {faqItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Accordion
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <ButtonV2 href="#contact">Discutons de votre projet</ButtonV2>
        </motion.div>
      </div>
    </section>
  )
}

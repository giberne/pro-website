'use client'

import SectionTitle from '@/components/v1/ui/SectionTitle'
import CalendlyInline from '@/components/v1/ui/CalendlyInline'

export default function CalendlySection() {
  return (
    <section id="calendly-section" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Tout commence par un échange" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Discutons de votre projet. Réservez un créneau pour un diagnostic gratuit.
        </p>

        <div className="mt-12 sm:mt-16">
          <CalendlyInline />
        </div>
      </div>
    </section>
  )
}

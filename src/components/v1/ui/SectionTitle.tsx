interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-4 ${centered ? 'text-center' : ''}`}>
      {/* Titre principal - Chivo Mono, uppercase, large letter spacing */}
      <h2 className="font-mono text-[32px] font-semibold uppercase sm:text-[34px] lg:text-[38px]">
        {title}
      </h2>

      {/* Sous-titre optionnel - Poppins */}
      {subtitle && (
        <p className="mt-3 text-sm font-light sm:mt-4 sm:text-base lg:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface ServiceCardProps {
  title: string
  variant?: 'filled' | 'outline'
}

export default function ServiceCard({ title, variant = 'outline' }: ServiceCardProps) {
  const baseStyles =
    'w-full rounded-[10px] px-4 py-3 text-center font-medium transition-all duration-300 sm:px-6 sm:py-4'

  const variantStyles = {
    // Filled: Fond noir (light) / blanc (dark)
    filled: 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90',

    // Outline: Bordure uniquement
    outline:
      'border-2 border-black bg-transparent text-black dark:border-white dark:text-white hover:bg-black/5 dark:hover:bg-white/5',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`}>
      <span className="text-xs sm:text-sm lg:text-base">{title}</span>
    </div>
  )
}

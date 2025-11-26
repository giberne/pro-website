interface TextBlockProps {
  title: string
  content: string
}

export default function TextBlock({ title, content }: TextBlockProps) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Titre du bloc */}
      <h3 className="text-base font-semibold sm:text-lg lg:text-xl">
        {title}
      </h3>

      {/* Contenu / Paragraphe */}
      <p className="text-xs font-light leading-relaxed sm:text-sm lg:text-base">
        {content}
      </p>
    </div>
  )
}

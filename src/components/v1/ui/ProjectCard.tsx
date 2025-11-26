import Image from 'next/image'

interface ProjectCardProps {
  image: string
  tag: string
  defi: string
  vision: string
}

export default function ProjectCard({ image, tag, defi, vision }: ProjectCardProps) {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 sm:space-y-8">
      {/* Image du projet avec fond légèrement teinté */}
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-black/5 dark:bg-white/5">
        <Image
          src={image}
          alt={tag}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Tag du projet */}
      <div className="flex justify-center">
        <span className="font-mono text-xs uppercase tracking-widest sm:text-sm">
          {tag}
        </span>
      </div>

      {/* Sections "Le Défi" et "La Vision" */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {/* Le Défi */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold sm:text-base">Le Défi :</h4>
          <p className="text-xs font-light leading-relaxed sm:text-sm">
            {defi}
          </p>
        </div>

        {/* La Vision */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold sm:text-base">La Vision :</h4>
          <p className="text-xs font-light leading-relaxed sm:text-sm">
            {vision}
          </p>
        </div>
      </div>
    </div>
  )
}

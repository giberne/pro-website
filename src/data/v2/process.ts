import { LucideIcon, Phone, Palette, Wrench, Send } from 'lucide-react'

export interface ProcessStep {
  id: number
  title: string
  description: string
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Appel découverte',
    description:
      'On échange sur ton projet pour comprendre tes besoins, ta vision, et tes objectifs.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'Design & maquette',
    description:
      'Création de l\'identité visuelle et des maquettes de ton site pour un résultat unique et moderne.',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Développement',
    description:
      'Développement rapide avec les technologies modernes. Code propre, performant, et optimisé pour tous les appareils.',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'Mise en ligne',
    description:
      'Déploiement sur ton hébergement, configuration du nom de domaine, et formation complète pour gérer ton site en autonomie.',
    icon: Send,
  },
]

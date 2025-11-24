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
      'Nous définissons ensemble vos objectifs, votre univers et les fonctionnalités de votre futur site.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'Design & maquette',
    description:
      'Je crée une maquette adaptée à votre demande, avec possibilité de retouches avant validation.',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Développement & intégration',
    description:
      'Je développe avec des technologies modernes, performantes et optimisées pour mobile.',
    icon: Wrench,
  },
  {
    id: 4,
    title: 'Mise en ligne & formation',
    description:
      'Le site est déployé sur un hébergeur optimisé et je vous apprend à gérer votre contenu en toute autonomie.',
    icon: Send,
  },
]

export interface OfferItem {
  id: number
  label: string
  icon: 'check' | 'plus'
}

export const includedItems: OfferItem[] = [
  {
    id: 1,
    label: 'Design d\'interface personnalisé',
    icon: 'check',
  },
  {
    id: 2,
    label: 'Développement moderne & rapide',
    icon: 'check',
  },
  {
    id: 3,
    label: 'Responsive & Mobile-First',
    icon: 'check',
  },
  {
    id: 4,
    label: 'Intégration de contenu',
    icon: 'check',
  },
  {
    id: 5,
    label: 'Déploiement & mise en ligne',
    icon: 'check',
  },
  {
    id: 6,
    label: 'Formation & support',
    icon: 'check',
  },
]

export const optionalItems: OfferItem[] = [
  {
    id: 1,
    label: 'CMS - Gestion de contenu autonome',
    icon: 'plus',
  },
  {
    id: 2,
    label: 'CRM - Gestion des contacts et clients',
    icon: 'plus',
  },
  {
    id: 3,
    label: 'Fonctionnalités avancées sur mesure',
    icon: 'plus',
  },
  {
    id: 4,
    label: 'Rédaction SEO professionnelle',
    icon: 'plus',
  },
  {
    id: 5,
    label: 'Identité visuelle & branding',
    icon: 'plus',
  },
]

export const offerContent = {
  title: 'Une Offre Complète',
  subtitle:
    'Création de Site Web Professionnel : design personnalisé, développement moderne, gestion du contenu et mise en ligne.',
  price: 'À partir de 800€ HT',
  cta: 'Discutons de ton projet',
}

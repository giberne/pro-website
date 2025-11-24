export interface OfferItem {
  id: number
  label: string
  icon: 'check' | 'plus'
}

export const includedItems: OfferItem[] = [
  {
    id: 1,
     label: 'Design d\'interface',
    icon: 'check',
  },
  {
    id: 2,
    label: 'Développement rapide ',
    icon: 'check',
  },
  {
    id: 3,
    label: 'Mobile-first',
    icon: 'check',
  },
  {
    id: 4,
    label: 'Intégration de vos contenus',
    icon: 'check',
  },
  {
    id: 5,
    label: 'Mise en ligne professionnelle',
    icon: 'check',
  },
  {
    id: 6,
    label: 'Formation à l\'outil',
    icon: 'check',
  },
]

export const optionalItems: OfferItem[] = [
  {
    id: 1,
    label: 'CMS - Gérez votre contenu',
    icon: 'plus',
  },
  {
    id: 2,
    label: 'CRM - Gérez vos clients',
    icon: 'plus',
  },
  {
    id: 3,
    label: 'Fonctions avancées / E-commerce',
    icon: 'plus',
  },
  {
    id: 4,
    label: 'Rédaction SEO',
    icon: 'plus',
  },
  {
    id: 5,
    label: 'Identité visuelle (logo + palette)',
    icon: 'plus',
  },
]

export const offerContent = {
  title: 'Une Offre Complète',
  subtitle:
    'Création de Site Web Professionnel : design, développement, gestion du contenu et mise en ligne.',
  price: 'Gratuit',
  cta: 'Discutons de votre projet',
}

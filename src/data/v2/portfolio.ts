export interface Project {
  id: number
  title: string
  subtitle: string
  tags: string
  features: string[]
  result: string
  link: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 2,
    title: '1HEURE42',
    subtitle: 'Site vitrine immersif pour DJ',
    tags: 'Développement Web - UI/UX - CMS sur mesure',
    features: [
      'Design immersif créé sur Figma, inspiré de l\'univers musical du DJ.',
      'Player audio intégré pour une expérience musicale continue.',
      'Navigation fluide et transitions dynamiques.',
      'CMS personnalisé pour gérer dates, galeries et morceaux.',
      'Développement complet + mise en ligne performante.',
    ],
    result: 'Un site professionnel, immersif et simple à gérer.',
    link: 'https://1heure42.vercel.app',
    image: '/portfolio/Rectangle 545.png',
  },
  {
    id: 4,
    title: 'Playlyst',
    subtitle: 'Landing page d\'inscription',
    tags: 'Site Web - UI/UX - Landing Page',
    features: [
      'Design épuré et moderne inspiré des standards produits tech.',
      'Interface responsive et fluide.',
      'Landing page optimisée pour la conversion.',
      'Présentation claire des fonctionnalités et de la valeur de l\'app.',
      'Développement performant (Next.js).',
      'Formulaire d\'inscription relié à une base de données.',
    ],
    result:
      'Une page claire et efficace pour attirer des utilisateurs en pré-lancement.',
    link: 'https://playlyst.akisama.fr',
    image: '/portfolio/image 48.png',
  },
  {
    id: 3,
    title: 'Virtual Spaces',
    subtitle: 'Portail vers des galeries 3D interactives',
    tags: 'Site Web - UI/UX - Intégration OnCyber',
    features: [
      'Hub central vers plusieurs galeries 3D interactives.',
      'Design minimaliste et identitaire.',
      'Navigation simple pour explorer différents espaces virtuels.',
      'Développement performant pour une expérience fluide.',
      'Intégration professionnelle des scènes OnCyber.',
      'Accessible sur mobile, tablette et ordinateur.',
    ],
    result:
      'Un portail élégant permettant d\'accéder rapidement à plusieurs environments 3D immersifs.',
    link: 'https://www.akisama.fr/virtual-spaces',
    image: '/portfolio/image 47.png',
  },
  {
    id: 1,
    title: 'Portfolio créatif animé',
    subtitle: 'Portfolio moderne avec animations Framer Motion',
    tags: 'Site Web - UI/UX - Framer Motion - CMS',
    features: [
      'Développement fidèle d\'une maquette fournie.',
      'Animations fluides réalisées avec Framer Motion.',
      'CMS dynamique pour gérer projets et contenus.',
      'Mise en page pixel-perfect.',
      'Déploiement rapide et performant.',
      'Site responsive et fluide sur tous les appareils.',
    ],
    result: 'Un portfolio moderne, animé et entièrement administrable.',
    link: 'https://agisquet.com/',
    image: '/portfolio/image 49.png',
  },
]

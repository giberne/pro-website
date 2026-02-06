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
    id: 1,
    title: 'Portfolio interactif & blog',
    subtitle: 'Une interface web expérimentale mêlant design, animation.',
    tags: 'Site Web - UI/UX - Plateforme Gaming',
    features: [
      'Page d’accueil animée avec effets de survol.',
      'Interface inspirée du style BentoBox.',
      'Blog dynamique connecté à un CMS.',
      'Interface claire, rapide et responsive.',
      'Optimisation des performances et des animations.',
    ],
    result:
    'Un portfolio qui propose une expérience utilisateur immersive et engageante.',
    link: 'https://akisama.fr',
    image: '/portfolio/akisama-fr.png',
  },
  {
    id: 2,
    title: 'Portfolio créatif animé',
    subtitle: 'Portfolio moderne avec animations Framer Motion',
    tags: 'Site Web - UI/UX - Framer Motion - CMS',
    features: [
      'Développement fidèle d\'une maquette fournie.',
      'Animations fluides réalisées avec Framer Motion.',
      'CMS dynamique pour gérer projets et contenus.',
      'Mise en page pixel-perfect.',
      'Site responsive et fluide sur tous les appareils.',
    ],
    result: 'Un portfolio moderne, animé et entièrement administrable. Développement rapide et de qualité.',
    link: 'https://agisquet.com/',
    image: '/portfolio/image 49.png',
  },
  {
    id: 3,
    title: 'Gaming Playlyst',
    subtitle: 'Moteur de recherche de jeux vidéo',
    tags: 'Site Web - UI/UX - Plateforme Gaming',
    features: [
      'Recherche parmi plus de 300 000 jeux.',
      'Fiches jeux accessibles en français.',
      'Mise en avant des jeux du moment.',
      'Interface claire, rapide et responsive.',
      'Accès à la bêta mobile via une page dédiée.',
    ],
    result:
    'Une page d’accueil pensée comme un véritable point d’entrée produit.',
    link: 'https://playlyst.akisama.fr',
    image: '/portfolio/playlyst-home.png',
  },
  {
    id: 4,
    title: '1HEURE42',
    subtitle: 'Site vitrine immersif pour DJ',
    tags: 'Développement Web - UI/UX - CMS sur mesure',
    features: [
      'Design immersif inspiré de l\'univers musical du DJ.',
      'Player audio intégré pour une expérience musicale continue.',
      'Navigation fluide et transitions dynamiques.',
      'CMS personnalisé pour gérer dates, galeries et morceaux.',
      'Développement complet + mise en ligne performante.',
    ],
    result: 'Un site professionnel, immersif et simple à gérer. Design unique et moderne.',
    link: 'https://1heure42.vercel.app',
    image: '/portfolio/Rectangle 545.png',
  },
]

export interface Service {
  id: number
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Sites Web Modernes & Sur Mesure',
    description:
      'Je conçois et développe des sites vitrine ou e-commerce légers, modernes, rapides et adaptés aux besoins professionnels.',
    image: '/mockup-minimal.png',
  },
  {
    id: 2,
    title: 'Gestion de Contenu & Outils Professionnels',
    description:
      'J\'intègre des CMS et CRM simples permettant de gérer vos pages, vos contenus et vos contacts en totale autonomie.',
    image: '/cms-minimal.png',
  },
  {
    id: 3,
    title: 'Déploiement, Hébergement & Optimisation',
    description:
      'Je m\'occupe du déploiement complet avec une optimisation des performances, de la sécurité et du référencement.',
    image: '/deploy-minimal.png',
  },
]

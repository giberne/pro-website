export interface Service {
  id: number
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Sites web modernes sur mesure',
    description:
      'Sites vitrine ou e-commerce, avec un design innovant et un développement rapide. Adaptés à votre activité, responsive, et optimisés pour convertir.',
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

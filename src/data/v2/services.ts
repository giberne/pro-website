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
      'Sites vitrine et e-commerce légers, conçus avec l\'IA pour un design innovant et un développement rapide. Adaptés à ton activité, responsive, et optimisés pour convertir.',
    image: '/mockup-minimal.png',
  },
  {
    id: 2,
    title: 'Identité visuelle & branding digital',
    description:
      'Logo, charte graphique, et design d\'interface pour une identité unique et moderne. Ton projet mérite une image qui se démarque.',
    image: '/cms-minimal.png',
  },
  {
    id: 3,
    title: 'Gestion de contenu & outils pros',
    description:
      'Intégration de CMS et CRM simples pour gérer ton site en autonomie : pages, contenu, contacts. Formation incluse pour que tu puisses tout gérer toi-même après le lancement.',
    image: '/deploy-minimal.png',
  },
]

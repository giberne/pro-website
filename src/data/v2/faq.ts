export interface FAQItem {
  id: number
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Combien coûte un site web ?',
    answer:
      'À partir de 800€ HT pour un site vitrine simple (1-2 pages). Ce prix inclut : design personnalisé, développement rapide, intégration de contenu, mise en ligne, et formation. Les options comme un CMS, un service e-commerce, ou des fonctionnalités sur mesure sont en supplément.',
  },
  {
    id: 2,
    question: 'Combien de temps pour créer mon site ?',
    answer:
      '3 à 5 jours pour un site vitrine simple. Les projets avec CMS ou fonctionnalités sur mesure prennent entre 1 et 3 semaines. Grâce à l\'IA, je peux créer des designs uniques rapidement, et le développement moderne me permet de livrer en quelques jours sans sacrifier la qualité. Le délai exact est défini lors de notre appel découverte, selon la complexité de votre projet.',
  },
  {
    id: 3,
    question: 'Concrètement, qu\'est-ce que l\'IA apporte à mon site ?',
    answer:
      'L\'intelligence artificielle me permet de : créer des designs uniques (pas de templates génériques), développer plus rapidement (délais divisés par 2 ou 3), et trouver la bonne direction créative. L\'IA génère plusieurs pistes visuelles que nous affinons ensemble. L\'IA est un outil puissant, mais c\'est mon expertise en design et développement qui garantit un résultat professionnel adapté à vos besoins.',
  },
  {
    id: 4,
    question: 'Pourrai-je modifier le contenu de mon site après la livraison ?',
    answer:
      'Oui, absolument ! J\'intègre un système de gestion de contenu (CMS) simple en option. Vous pourrez modifier textes, images, ajouter des pages, sans toucher au code. Même sans CMS, je vous forme à faire des modifications de base. Une formation d\'1h en visio est incluse, avec documentation complète.',
  },
  {
    id: 5,
    question: 'Qu\'est-ce qui est inclus dans les 800€ ?',
    answer:
      'Le prix de base inclut : design d\'interface personnalisé, développement responsive (mobile, tablette, desktop), intégration de votre contenu (textes, images, vidéos), optimisation SEO de base, déploiement et mise en ligne, formation à la gestion (1h en visio), et 30 jours de support après livraison. Ce qui n\'est pas inclus : CMS, CRM, fonctionnalités avancées, rédaction SEO, identité visuelle complète (disponibles en option).',
  },
  {
    id: 6,
    question: 'Je n\'ai pas de contenu (textes, photos), pouvez-vous m\'aider ?',
    answer:
      'Oui ! Pour les photos, nous pouvons utiliser des photos de banque d\'images ou des visuels générés par IA le temps que vous ayez vos propres photos. Pour les textes, je peux rédiger les textes de base (option "Rédaction SEO") ou vous aider à structurer vos idées. L\'IA peut aussi aider à générer des brouillons que nous affinons ensemble. L\'idéal reste d\'avoir votre propre contenu, mais je vous accompagne dans tous les cas.',
  },
  {
    id: 7,
    question: 'Est-ce que je suis propriétaire du site et du code ?',
    answer:
      'Oui, absolument. Dès le paiement final, vous êtes propriétaire à 100% du site et du code source. Pas d\'abonnement mensuel forcé, pas de dépendance. Vous pouvez choisir votre hébergeur, votre nom de domaine, et même confier la maintenance à quelqu\'un d\'autre si vous le souhaitez (même si je reste disponible pour cela). Liberté totale.',
  },
  {
    id: 8,
    question: 'Gérez-vous l\'hébergement et le nom de domaine ?',
    answer:
      'Oui, je m\'occupe de tout : je vous conseille les meilleures solutions (Cloudflare Pages, Vercel, etc.), je configure tout pour vous (déploiement, SSL, optimisations), et je vous aide à réserver votre nom de domaine ou je connecte votre domaine existant. Vous pouvez aussi gérer l\'hébergement vous-même si vous préférez (je vous guide).',
  },
  {
    id: 9,
    question: 'Si j\'ai un problème après la livraison, pouvez-vous m\'aider ?',
    answer:
      'Oui ! 30 jours de support sont inclus après la mise en ligne. Si vous avez des questions, un bug, ou besoin d\'un ajustement mineur, je suis là. Après ces 30 jours, vous pouvez gérer vous-même (vous êtes formé pour cela), me contacter pour du support ponctuel (tarif horaire), ou souscrire à un contrat de maintenance mensuel (optionnel). Mon objectif : que vous soyez autonome.',
  },
]

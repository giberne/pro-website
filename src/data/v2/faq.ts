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
      'À partir de 800€ HT pour un site vitrine simple (5-7 pages). Ce prix inclut : design personnalisé, développement responsive, intégration de contenu, mise en ligne, et formation. Les options comme un CMS, un e-commerce, ou des fonctionnalités sur mesure sont en supplément. Après notre appel découverte, tu reçois un devis précis adapté à ton projet.',
  },
  {
    id: 2,
    question: 'Combien de temps pour créer mon site ?',
    answer:
      '3 à 5 jours pour un site vitrine simple. Les projets avec CMS ou fonctionnalités sur mesure prennent entre 1 et 3 semaines. Grâce à l\'IA, je peux créer des designs uniques rapidement, et le développement moderne me permet de livrer en quelques jours sans sacrifier la qualité. Le délai exact est défini lors de notre appel découverte, selon la complexité de ton projet.',
  },
  {
    id: 3,
    question: 'Concrètement, qu\'est-ce que l\'IA apporte à mon site ?',
    answer:
      'L\'intelligence artificielle me permet de : créer des designs uniques (pas de templates génériques), développer plus rapidement (délais divisés par 2 ou 3), et trouver la bonne direction créative. L\'IA génère plusieurs pistes visuelles qu\'on affine ensemble. L\'IA est un outil puissant, mais c\'est mon expertise en design et développement qui garantit un résultat professionnel adapté à tes besoins.',
  },
  {
    id: 4,
    question: 'Pourrai-je modifier le contenu de mon site après la livraison ?',
    answer:
      'Oui, absolument ! J\'intègre un système de gestion de contenu (CMS) simple si tu prends cette option. Tu pourras modifier textes, images, ajouter des pages, sans toucher au code. Même sans CMS, je te forme à faire des modifications de base. Une formation d\'1h en visio est incluse, avec documentation complète. Tu repars autonome.',
  },
  {
    id: 5,
    question: 'Qu\'est-ce qui est inclus dans les 800€ ?',
    answer:
      'Le prix de base inclut : design d\'interface personnalisé, développement responsive (mobile, tablette, desktop), intégration de ton contenu (textes, images, vidéos), optimisation SEO de base, déploiement et mise en ligne, formation à la gestion (1h en visio), et 30 jours de support après livraison. Ce qui n\'est pas inclus : CMS, CRM, fonctionnalités avancées, rédaction SEO, identité visuelle complète (disponibles en option).',
  },
  {
    id: 6,
    question: 'Je n\'ai pas de contenu (textes, photos), tu peux m\'aider ?',
    answer:
      'Oui ! Pour les photos, on peut utiliser des photos de banque d\'images ou des visuels générés par IA le temps que tu aies tes propres photos. Pour les textes, je peux rédiger les textes de base (option "Rédaction SEO") ou t\'aider à structurer tes idées. L\'IA peut aussi aider à générer des brouillons qu\'on affine ensemble. L\'idéal reste d\'avoir ton propre contenu, mais je t\'accompagne dans tous les cas.',
  },
  {
    id: 7,
    question: 'Est-ce que je suis propriétaire du site et du code ?',
    answer:
      'Oui, absolument. Dès le paiement final, tu es propriétaire à 100% du site et du code source. Pas d\'abonnement mensuel forcé, pas de dépendance. Tu peux choisir ton hébergeur, ton nom de domaine, et même confier la maintenance à quelqu\'un d\'autre si tu veux (même si je reste disponible pour ça). Liberté totale.',
  },
  {
    id: 8,
    question: 'Tu gères l\'hébergement et le nom de domaine ?',
    answer:
      'Oui, je m\'occupe de tout : je te conseille les meilleures solutions (Cloudflare Pages, Vercel, etc.), je configure tout pour toi (déploiement, SSL, optimisations), et je t\'aide à réserver ton nom de domaine ou je connecte ton domaine existant. Tu peux aussi gérer l\'hébergement toi-même si tu préfères (je te guide).',
  },
  {
    id: 9,
    question: 'Si j\'ai un problème après la livraison, tu peux m\'aider ?',
    answer:
      'Oui ! 30 jours de support sont inclus après la mise en ligne. Si tu as des questions, un bug, ou besoin d\'un ajustement mineur, je suis là. Après ces 30 jours, tu peux gérer toi-même (tu es formé pour ça), me contacter pour du support ponctuel (tarif horaire), ou souscrire à un contrat de maintenance mensuel (optionnel). Mon objectif : que tu sois autonome.',
  },
]

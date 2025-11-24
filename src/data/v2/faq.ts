export interface FAQItem {
  id: number
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Quels sont les tarifs d\'un site professionnel ?',
    answer:
      'Mes sites vitrine commencent à partir de 600–800 €, selon la structure, le nombre de pages et les éventuelles options (CMS, CRM, e-commerce léger, rédaction, identité visuelle…). Un devis personnalisé est fourni après l\'appel découverte pour définir précisément vos besoins.',
  },
  {
    id: 2,
    question: 'En combien de temps mon site peut-il être en ligne ?',
    answer:
      'Un site vitrine simple peut être livré en 3 à 5 jours, si tous les contenus (textes, photos, logo) sont fournis rapidement. Les projets plus complets (CMS, e-commerce, pages supplémentaires) nécessitent un délai légèrement plus long.',
  },
  {
    id: 3,
    question: 'Proposez-vous des services de maintenance/support ?',
    answer:
      'Oui. Je propose un service de maintenance optionnel pour garder votre site sécurisé, à jour et performant. Sans contrat, toutes les petites interventions restent possibles ponctuellement, sur simple demande.',
  },
  {
    id: 4,
    question: 'Est-ce adapté aux entreprises ?',
    answer:
      'Oui, totalement. Mes sites sont pensés pour les entrepreneurs, indépendants, TPE, PME ou créateurs ayant besoin d\'une présence professionnelle, fiable et cohérente avec leur activité.',
  },
  {
    id: 5,
    question: 'Puis-je gérer le site moi-même ?',
    answer:
      'Oui. Si vous choisissez un CMS, vous pourrez mettre à jour vos textes, images, projets ou prestations en totale autonomie, sans toucher au code. Une courte formation est incluse à la fin de chaque projet.',
  },
  {
    id: 6,
    question: 'Proposez-vous du e-commerce ?',
    answer:
      'Oui, pour des besoins simples ou intermédiaires : vente de produits, paiement sécurisé, gestion de catalogue, réservations ou prestations. Pour les gros e-commerce complexes, je propose une solution sur-mesure après analyse de vos besoins.',
  },
  {
    id: 7,
    question: 'C\'est quoi un CMS ? Comment ça fonctionne ?',
    answer:
      'Un CMS (Content Management System) est un outil qui vous permet de modifier le contenu de votre site facilement, via une interface simple, sans écrire de code. Vous changez un texte, une photo ou une section… et votre site se met à jour instantanément.',
  },
  {
    id: 8,
    question: 'Pouvez-vous intégrer un CRM ?',
    answer:
      'Oui. Je peux intégrer un CRM simple pour gérer vos contacts, demandes, prospects ou messages provenant de votre site. Cela permet de structurer votre prospection et votre relation client au même endroit.',
  },
  {
    id: 9,
    question: 'Suis-je propriétaire de mon site web ?',
    answer:
      'Oui, entièrement. À la livraison et une fois le solde réglé, vous possédez votre site, vos accès, vos fichiers et votre nom de domaine. Je vous fournis toutes les clés nécessaires pour rester totalement autonome.',
  },
]

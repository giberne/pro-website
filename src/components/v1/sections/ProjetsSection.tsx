'use client'

import SectionTitle from '@/components/v1/ui/SectionTitle'
import ProjectCardModal from '@/components/v1/ui/ProjectCardModal'

export default function ProjetsSection() {
  const projects = [
    {
      image: '/images/moretales.jpg',
      tag: 'Marque de vêtement',
      type: 'Direction Artistique • Identité Visuelle • E-Commerce',
      sections: [
        {
          title: 'Le Projet',
          content: 'Moretales est une marque de vêtement que j\'ai créée de A à Z, de la vision initiale à la première vente. C\'est un projet 360° qui démontre une maîtrise complète du processus de création de marque.',
        },
        {
          title: 'Mon intervention',
          content: 'J\'ai assuré la création de l\'identité visuelle complète, le design des collections textiles, la direction de la photographie, ainsi que la configuration de la boutique e-commerce sur Shopify. Chaque aspect a été pensé pour construire une expérience de marque cohérente et mémorable.',
        },
      ],
      link: 'https://akisama.fr/moretales',
    },
    {
      image: '/images/1heure42.jpg',
      tag: 'Site Vitrine pour DJ',
      type: 'Développement Web • Design d\'Interface (UI/UX) • CMS sur mesure',
      sections: [
        {
          title: 'Le Projet',
          content: 'Le défi était de créer une expérience digitale immersive pour le DJ et producteur 1HEURE42, au-delà d\'un simple site vitrine. L\'objectif était de concevoir une plateforme professionnelle pour les organisateurs d\'événements, tout en plongeant le visiteur dans son univers musical énergique.',
        },
        {
          title: 'Mon intervention',
          content: 'J\'ai piloté le projet de la conception sur Figma jusqu\'à la mise en ligne. En traduisant les besoins de l\'artiste, j\'ai imaginé une interface immersive centrée sur un player audio permanent et une navigation fluide. J\'ai ensuite développé cette vision en un site web performant, auquel j\'ai intégré un système de gestion de contenu (CMS) sur mesure. Ce dernier offre à l\'artiste une autonomie complète pour mettre à jour ses dates de tournée, ses galeries et sa musique, transformant le site en un véritable outil de communication.',
        },
      ],
      link: 'https://1heure42.vercel.app',
    },
    {
      image: '/images/virtual-space.jpg',
      tag: 'Galeries virtuelles ',
      type: 'Direction Artistique • Scénographie Virtuelle • Expérience Immersive',
      sections: [
        {
          title: 'Le Projet',
          content: 'Virtual Spaces est une exploration de galeries d\'art 3D, créées via la plateforme Oncyber. L\'objectif est d\'offrir aux artistes un nouveau type d\'espace d\'exposition, immersif et accessible directement depuis un navigateur web.',
        },
        {
          title: 'Mon intervention',
          content: 'Mon intervention s\'est concentrée sur la scénographie virtuelle : j\'ai assuré la curation artistique de plusieurs expositions et designé un espace 3D sur mesure. Mon rôle a été de penser l\'agencement des œuvres, l\'architecture et l\'éclairage pour créer une expérience visiteur mémorable et mettre en valeur la vision des créateurs.',
        },
      ],
      link: 'https://akisama.fr/virtual-spaces',
    },
    {
      image: '/images/playlyst.jpg',
      tag: 'Application Mobile',
      type: 'Product Design • UI/UX Design • Développement Mobile',
      sections: [
        {
          title: 'Le Projet',
          content: 'Concevoir une application pour les passionnés de jeux vidéo, capable de centraliser leurs collections et de suivre les actualités, tout en offrant une interface intuitive et agréable à utiliser au quotidien.',
        },
        {
          title: 'Mon intervention',
          content: 'J\'ai mené le projet de A à Z : de l\'idée initiale au design de l\'interface sur Figma, jusqu\'au développement de l\'application. L\'accent a été mis sur une expérience simple et une interface épurée pour suivre sa collection, sa progression et sa wishlist.',
        },
      ],
      link: 'https://playlyst.akisama.fr',
    },
  ]

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Réalisations" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Une sélection de projets où design, développement et stratégie créative se rencontrent.
        </p>

        {/* Grille de projets */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
          {projects.map((project, index) => (
            <ProjectCardModal
              key={index}
              project={project}
              allProjects={projects}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

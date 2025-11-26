import SectionTitle from '@/components/v1/ui/SectionTitle'
import ServiceCardModal from '@/components/v1/ui/ServiceCardModal'

const services = [
  {
    title: "Fondation de Marque : Stratégie & Exploration",
    description: "Définir l'ADN de votre marque et lui donner une direction visuelle claire.",
    sections: [
      {
        content: "Tout projet solide commence par des fondations solides. Au cours d'ateliers de co-création, nous faisons le pont entre le fond et la forme. Nous ne laissons rien au hasard : nous définissons votre raison d'être, clarifions votre message et identifions ce qui vous rend unique."
      },
      {
        content: "En parallèle, nous explorons des univers visuels à travers un moodboard stratégique pour traduire vos ambitions en une direction artistique concrète."
      },
      {
        content: `À l'issue de cette étape, vous disposerez de :

- **Un positionnement de marque clair** (vos valeurs, votre mission et votre voix).
- **Une direction artistique validée** (un cap visuel pour garantir la cohérence).
- **Un brief créatif complet**, prêt à guider toutes les futures décisions.`
      }
    ]
  },
  {
    title: "Création du Logotype",
    description: "Concevoir le symbole unique qui incarne votre stratégie.",
    sections: [
      {
        content: "Le logotype est le visage de votre marque. En m'appuyant sur la fondation que nous avons bâtie, je conçois un symbole sur mesure qui raconte votre histoire en un regard."
      },
      {
        content: "Chaque ligne, chaque courbe et chaque espace est pensé pour créer un signe distinctif, équilibré et intemporel. Mon processus est itératif et collaboratif, assurant un résultat qui n'est pas seulement esthétique, mais surtout juste et pertinent."
      },
      {
        content: `Le livrable final inclut :

- **Votre logotype principal et ses variations** (monochrome, icône seule).
- **Des fichiers prêts à l'emploi pour tous les supports** (web, print, etc.).
- **La cession complète des droits d'auteur.**`
      }
    ]
  },
  {
    title: "Système d'Identité Visuelle : Charte Graphique",
    description: "Déployer un langage visuel cohérent pour une marque reconnaissable, partout.",
    sections: [
      {
        content: "Un logo seul ne suffit pas. Pour exister, une marque a besoin d'un système. Je construis cet écosystème visuel complet qui garantira votre cohérence sur tous les points de contact. De la palette de couleurs qui évoque la bonne émotion aux typographies qui structurent votre message, chaque élément est choisi pour renforcer votre identité."
      },
      {
        content: "Ce système est documenté dans une charte graphique, votre guide de référence pour une communication toujours professionnelle et alignée."
      },
      {
        content: `Votre système d'identité complet comprendra :

- **La définition de vos couleurs et typographies officielles.**
- **Des règles d'usage du logo et des éléments graphiques.**
- **Des exemples de mise en page** pour inspirer vos futurs supports.
- **Une charte graphique (PDF)**, claire et facile à partager avec vos équipes ou partenaires.`
      }
    ]
  }
]

export default function DirectionSection() {
  return (
    <section id="direction-artistique" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Direction Artistique & Identité de Marque" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Une marque ne se résume pas à son apparence, mais à ce qu&apos;elle fait ressentir. Je vous guide à travers 3 étapes clés pour construire un univers de marque clair, cohérent et mémorable. De la stratégie à l&apos;identité visuelle complète.
        </p>

        {/* Grille de services avec modales */}
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 lg:gap-4">
          {services.map((service, index) => (
            <ServiceCardModal
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              sections={service.sections}
              allServices={services}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

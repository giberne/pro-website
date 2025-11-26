import SectionTitle from '@/components/v1/ui/SectionTitle'
import ServiceCardModal from '@/components/v1/ui/ServiceCardModal'

const services = [
  {
    title: "Finalisation de Site IA",
    description: "Vous avez généré un site via une IA, mais le résultat manque de stabilité, de cohérence ou de personnalité. Vous sentez que vous êtes bloqué.",
    details: "Je reprends là où l'IA s'arrête. J'analyse, nettoie et restructure le code pour en faire un site professionnel, rapide et fiable. Mon rôle est de transformer une base imparfaite en un produit prêt à être présenté, utilisé et admiré."
  },
  {
    title: "Refonte de Site Existant",
    description: "Votre site ne reflète plus la qualité de votre travail : il est lent, daté ou mal adapté au mobile.",
    details: "Je modernise votre plateforme sur le fond comme sur la forme. Nouvelle architecture, design repensé, performance optimisée : tout est aligné pour redonner force et cohérence à votre présence en ligne."
  },
  {
    title: "Création de Site Web Complet",
    description: "Vous partez de zéro et souhaitez une vitrine claire, élégante et durable pour lancer votre projet.",
    details: "Je développe votre site sur mesure, qu'il s'agisse d'une page unique ou d'un site complet à plusieurs sections. Chaque détail est pensé pour servir vos objectifs."
  },
  {
    title: "Design d'Interface (UI/UX)",
    description: "Vous souhaitez valider le design et l'ergonomie de votre projet avant d'investir dans le développement.",
    details: "Je conçois les maquettes haute-fidélité de votre site ou application sur Figma, un véritable plan de construction interactif. Ce service garantit un développement fluide, sans surprise, et un résultat final parfaitement aligné avec vos attentes."
  }
]

export default function DeveloppementSection() {
  return (
    <section id="developpement-web" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Développement Web & Design d'interface" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          De la conception à la mise en ligne, j&apos;accompagne vos projets web avec exigence et clarté. Chaque interface que je conçois vise un équilibre entre esthétique, performance et fiabilité.
        </p>

        {/* Grille de services avec modales */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 md:grid-cols-4 lg:gap-3">
          {services.map((service, index) => (
            <ServiceCardModal
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              details={service.details}
              allServices={services}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Thomas Giberné',
  description: 'Consultez les conditions générales de vente de Thomas Giberné, freelance en création de site web et identité de marque.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header simple */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-white">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-12 text-gray-700 dark:text-gray-300">
          {/* Chapitre 1 */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Chapitre 1 : Dispositions Générales et Conditions des Prestations de Création
            </h2>

            {/* Article 1 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 1 : Champ d&apos;application
              </h3>
              <p className="leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent l&apos;ensemble des prestations
                de services fournies par Thomas Giberné, exerçant sous le nom commercial{' '}
                <strong>The Crystal Lad</strong> (ci-après &quot;le Prestataire&quot;), notamment en
                développement web, design graphique, identité visuelle et maintenance. Elles s&apos;appliquent
                à toute commande passée par un <strong>Client professionnel</strong> et constituent le socle
                de la relation contractuelle, à l&apos;exclusion de tout autre document.
              </p>
            </section>

            {/* Article 2 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 2 : Définitions
              </h3>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  <strong>Prestataire</strong> : The Crystal Lad, micro-entreprise exploitée par Thomas Giberné,
                  immatriculée sous le SIRET 99336665700019, dont le siège social est situé au 513 Avenue du Val
                  de Montferrand, 34090 Montpellier.
                </li>
                <li>
                  <strong>Client</strong> : Personne morale ou physique agissant dans le cadre de son activité
                  professionnelle et commandant une prestation.
                </li>
                <li>
                  <strong>Livrables</strong> : Éléments concrets remis au Client à l&apos;issue de la prestation
                  (maquettes, exports, codes sources du site, documents).
                </li>
              </ul>
            </section>

            {/* Article 3 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 3 : Devis et Commande
              </h3>
              <p className="leading-relaxed">
                Toute prestation fait l&apos;objet d&apos;un devis détaillé, précisant le périmètre, le planning
                indicatif, le prix et les conditions particulières. Le devis est valable <strong>30 jours</strong> à
                compter de sa date d&apos;émission.
              </p>
              <p className="mt-4 leading-relaxed">
                La commande est considérée comme ferme et définitive à réception par le Prestataire du{' '}
                <strong>devis daté et signé</strong> avec la mention &quot;Bon pour accord&quot; ET du{' '}
                <strong>paiement de l&apos;acompte de 30%</strong> du montant total, sauf mention contraire sur le devis.
              </p>
            </section>

            {/* Article 4 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 4 : Exécution et Livraison de la Prestation
              </h3>
              <p className="leading-relaxed">
                Le devis délimite précisément le périmètre des prestations. Sauf mention contraire,{' '}
                <strong>deux (2) phases de retours et modifications</strong> sont incluses. Tout travail ne
                figurant pas sur le devis ou toute phase de retours supplémentaire fera l&apos;objet d&apos;un
                devis complémentaire.
              </p>
              <p className="mt-4 leading-relaxed">
                À la livraison finale, le Client dispose de <strong>5 jours ouvrés</strong> pour émettre par
                écrit d&apos;éventuelles réserves. En l&apos;absence de réserve dans ce délai, la prestation
                est considérée comme définitivement acceptée.
              </p>
            </section>

            {/* Article 5 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 5 : Obligations du Client
              </h3>
              <p className="leading-relaxed">
                Le Client s&apos;engage à collaborer activement avec le Prestataire en fournissant en temps utile
                l&apos;ensemble des contenus nécessaires (textes, images, logos, etc.), dont il certifie posséder
                les droits d&apos;exploitation. Tout retard de la part du Client dans la fourniture d&apos;informations
                ou la validation d&apos;étapes pourra entraîner un report du délai de livraison.
              </p>
            </section>

            {/* Article 6 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 6 : Propriété Intellectuelle et Droit de Citation
              </h3>
              <p className="leading-relaxed">
                Sous réserve du paiement intégral du prix, le Prestataire cède au Client les droits patrimoniaux
                sur les livrables créés spécifiquement pour lui, pour les usages et supports définis dans le devis.
                Les fichiers sources (fichiers de travail natifs) ne sont pas inclus dans la cession, sauf accord
                spécifique et facturation complémentaire.
              </p>
              <p className="mt-4 leading-relaxed">
                Le Prestataire conserve la propriété de son savoir-faire, de ses outils et de ses composants logiciels
                préexistants. Sauf demande écrite contraire du Client, le Prestataire se réserve le droit de mentionner
                sa réalisation comme référence dans ses supports de communication (portfolio, site web, etc.).
              </p>
            </section>

            {/* Article 7 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 7 : Tarifs et Modalités de Paiement
              </h3>
              <p className="leading-relaxed">
                Les prix des prestations sont indiqués en euros (€). En tant que micro-entrepreneur, le Prestataire
                bénéficie de la franchise en base de TVA : <strong>TVA non applicable, art. 293 B du CGI.</strong>{' '}
                Les prix sont donc nets de taxes.
              </p>
              <p className="mt-4 leading-relaxed">
                Sauf mention contraire sur le devis, les modalités de paiement sont :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 leading-relaxed">
                <li><strong>30% d&apos;acompte</strong> à la commande.</li>
                <li><strong>70% de solde</strong> à la livraison de la prestation.</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Paiement s&apos;effectue par virement bancaire ou via plateforme sécurisée (Stripe, Whop ou équivalent).
                Le solde est payable <strong>à réception de la facture finale</strong>.
              </p>
            </section>

            {/* Article 8 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 8 : Pénalités de Retard
              </h3>
              <p className="leading-relaxed">
                Conformément à la loi, tout retard de paiement entraînera de plein droit l&apos;application de
                pénalités de retard calculées sur la base du taux d&apos;intérêt appliqué par la BCE à son opération
                de refinancement la plus récente majoré de 10 points de pourcentage, ainsi qu&apos;une{' '}
                <strong>indemnité forfaitaire pour frais de recouvrement de 40 €</strong>.
              </p>
            </section>

            {/* Article 9 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 9 : Responsabilité et Garantie
              </h3>
              <p className="leading-relaxed">
                Le Prestataire est tenu par une <strong>obligation de moyens</strong>. Il s&apos;engage à réaliser
                les prestations avec tout le soin et la diligence requis. Sa responsabilité ne pourra être engagée
                pour un préjudice qui résulterait d&apos;une faute du Client (ex: fourniture d&apos;informations
                erronées) ou d&apos;un problème lié à des services tiers (hébergeur, registar, etc.).
              </p>
              <p className="mt-4 leading-relaxed">
                En tout état de cause, la responsabilité du Prestataire est <strong>limitée au montant total hors
                taxes payé par le Client</strong> pour la prestation concernée.
              </p>
            </section>

            {/* Article 10 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 10 : Maintenance et Support
              </h3>
              <p className="leading-relaxed">
                Une garantie corrective de 30 jours est incluse après la mise en ligne, couvrant les bugs imputables
                au travail du Prestataire. Toute intervention ultérieure, qu&apos;elle soit corrective, évolutive ou
                de support, est réalisée dans le cadre d&apos;un <strong>contrat de maintenance optionnel</strong> ou
                facturée au tarif en vigueur, sur la base d&apos;un devis préalable.
              </p>
            </section>

            {/* Article 11 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 11 : Annulation et Résiliation
              </h3>
              <p className="leading-relaxed">
                En cas d&apos;annulation de la commande par le Client avant son démarrage, l&apos;acompte versé reste
                acquis au Prestataire à titre de dédommagement. Si l&apos;annulation intervient en cours de projet,
                le Prestataire facturera les travaux déjà réalisés au prorata.
              </p>
              <p className="mt-4 leading-relaxed">
                Chaque partie peut résilier le contrat en cas de manquement grave de l&apos;autre partie, après une
                mise en demeure par lettre recommandée restée sans effet pendant 15 jours.
              </p>
            </section>

            {/* Article 12 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 12 : Force Majeure
              </h3>
              <p className="leading-relaxed">
                Aucune des parties ne pourra être tenue pour responsable d&apos;un manquement à ses obligations
                contractuelles dû à un événement de force majeure, tel que défini par la jurisprudence française.
              </p>
            </section>

            {/* Article 13 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 13 : Droit Applicable et Juridiction
              </h3>
              <p className="leading-relaxed">
                Les présentes CGV sont soumises au <strong>droit français</strong>. En cas de litige, et après une
                tentative de résolution amiable, compétence exclusive est attribuée aux{' '}
                <strong>tribunaux de Montpellier</strong>.
              </p>
            </section>
          </div>

          {/* Chapitre 2 */}
          <div className="space-y-8 border-t border-gray-200 pt-12 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Chapitre 2 : Conditions Spécifiques aux Services de Maintenance
            </h2>
            <p className="italic text-gray-600 dark:text-gray-400">
              (Applicable aux Clients ayant souscrit à un service de maintenance)
            </p>

            {/* Article 14 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 14 : Objet et Souscription au Service de Maintenance
              </h3>
              <p className="leading-relaxed">
                Le service de maintenance a pour objet d&apos;assurer le bon fonctionnement, la sécurité et la
                performance du site web du Client. La souscription est formalisée par l&apos;acceptation d&apos;un
                devis spécifiant la formule choisie (annuelle ou mensuelle) et le tarif applicable.
              </p>
            </section>

            {/* Article 15 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 15 : Formules d&apos;Abonnement et Engagement
              </h3>
              <p className="leading-relaxed">
                Le Client peut opter pour l&apos;une des formules suivantes :
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-black dark:text-white">15.1. Formule Annuelle :</h4>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                    <li>
                      <strong>Engagement :</strong> Le service est souscrit pour une période initiale ferme de{' '}
                      <strong>douze (12) mois</strong>.
                    </li>
                    <li>
                      <strong>Renouvellement :</strong> À l&apos;issue de cette période, le contrat est renouvelé
                      par <strong>tacite reconduction</strong> pour des périodes successives de 12 mois, sauf
                      résiliation par l&apos;une des parties par écrit au moins <strong>30 jours avant la date
                      d&apos;échéance</strong>.
                    </li>
                    <li>
                      <strong>Paiement :</strong> La redevance est annuelle et payable d&apos;avance pour la
                      période de 12 mois.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-black dark:text-white">15.2. Formule Mensuelle :</h4>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                    <li>
                      <strong>Engagement :</strong> Le service est souscrit pour une période initiale ferme de{' '}
                      <strong>douze (12) mois</strong>, renouvelable par tacite reconduction chaque mois après
                      cette période.
                    </li>
                    <li>
                      <strong>Résiliation :</strong> Le service est <strong>sans engagement de durée</strong> au-delà
                      des 12 premier mois. Chaque partie peut résilier le service à tout moment, la résiliation prenant
                      effet à la fin de la période mensuelle en cours. La demande de résiliation doit être notifiée
                      par écrit.
                    </li>
                    <li>
                      <strong>Paiement :</strong> La redevance est mensuelle et payable d&apos;avance pour chaque
                      mois à venir.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Article 16 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 16 : Périmètre des Services Inclus
              </h3>
              <p className="leading-relaxed">
                Sauf mention contraire sur le devis, le service de maintenance inclut :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  <strong>Support Technique :</strong> Corrections de bugs, mises à jour de sécurité, monitoring
                  de disponibilité. Prise en charge des demandes par email avec une réponse sous 72h (jours ouvrés).
                </li>
                <li>
                  <strong>Mises à Jour de Contenu :</strong> Un crédit de <strong>deux (2) heures par mois</strong>,
                  non reportable, pour des modifications mineures (textes, images, etc.). Les heures supplémentaires
                  sont facturées à 80 € HT.
                </li>
                <li>
                  <strong>Performance & SEO :</strong> Monitoring de base des performances et optimisation des
                  nouvelles images.
                </li>
                <li>
                  <strong>Hébergement :</strong> L&apos;hébergement du site web est inclus. Le nom de domaine reste
                  à la charge et sous la responsabilité du Client.
                </li>
              </ul>
            </section>

            {/* Article 17 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 17 : Prestations Exclues de la Maintenance
              </h3>
              <p className="leading-relaxed">
                Sont exclus et feront l&apos;objet d&apos;un devis séparé : la création de nouvelles pages ou
                fonctionnalités majeures, la refonte design et les campagnes marketing et tout autres services
                non mentionnés ci-dessus.
              </p>
            </section>

            {/* Article 18 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 18 : Accès et Administration
              </h3>
              <p className="leading-relaxed">
                Pour garantir l&apos;intégrité et la sécurité du site, et pour permettre l&apos;exécution efficace
                des prestations de maintenance et d&apos;hébergement,{' '}
                <strong>le Prestataire conservera les accès exclusifs d&apos;administration au serveur
                d&apos;hébergement et au back-office du site</strong> pendant toute la durée du contrat de maintenance.
              </p>
              <p className="mt-4 leading-relaxed">
                Des accès de type &quot;éditeur&quot; ou &quot;contributeur&quot;, permettant la gestion de contenu,
                pourront être fournis au Client sur demande.
              </p>
            </section>

            {/* Article 19 */}
            <section>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Article 19 : Fin du Contrat de Maintenance
              </h3>
              <p className="leading-relaxed">
                À la résiliation du contrat, quelle qu&apos;en soit la cause :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  Le Prestataire cesse toute prestation de maintenance, de surveillance et d&apos;hébergement à la
                  date de fin effective du service.
                </li>
                <li>
                  Le Client devient seul responsable de la gestion et de la sauvegarde de son site.
                </li>
                <li>
                  Une prestation de migration du site vers un autre hébergeur sera proposée au Client sur devis.
                  Cette migration inclura la fourniture d&apos;une archive complète des fichiers du site et de sa
                  base de données le cas échéant.
                </li>
                <li>
                  Les accès administrateur seront transmis au Client (ou à son nouveau prestataire) uniquement après
                  le règlement complet de la prestation de migration.
                </li>
              </ul>
            </section>
          </div>

          {/* Date de dernière mise à jour */}
          <div className="mt-12 border-t border-gray-200 pt-6 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dernière mise à jour : 07/11/2025
            </p>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Accueil
            </Link>
            <Link href="/mentions-legales" className="hover:text-black dark:hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

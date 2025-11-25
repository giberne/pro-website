import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderV2 from '@/components/v2/layout/HeaderV2'
import FooterV2 from '@/components/v2/layout/FooterV2'
import { ArrowLeft } from 'lucide-react'

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
    <div className="min-h-screen v2-wrapper" style={{ background: 'var(--color-bg-gradient)' }}>
      <HeaderV2 />

      <main className="container-v2 pt-24 md:pt-32 pb-12 md:pb-20">
        {/* Retour à l'accueil */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l&apos;accueil
        </Link>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: 'var(--font-headings)' }}>
          Conditions Générales de Vente
        </h1>

        {/* Contenu dans une carte */}
        <div className="card-upper space-y-12">
          {/* Chapitre 1 */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-headings)' }}>
              Chapitre 1 : Dispositions Générales et Conditions des Prestations de Création
            </h2>

            {/* Article 1 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 1 : Champ d&apos;application
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Les présentes Conditions Générales de Vente (CGV) régissent l&apos;ensemble des prestations
                de services fournies par Thomas Giberné, exerçant sous le nom commercial{' '}
                <strong>The Crystal Lad</strong> (ci-après &quot;le Prestataire&quot;), notamment en
                développement web, design graphique, identité visuelle et maintenance. Elles s&apos;appliquent
                à toute commande passée par un <strong>Client professionnel</strong> et constituent le socle
                de la relation contractuelle, à l&apos;exclusion de tout autre document.
              </p>
            </section>

            {/* Article 2 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 2 : Définitions
              </h3>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-[var(--color-foreground)]">
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
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 3 : Devis et Commande
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Toute prestation fait l&apos;objet d&apos;un devis détaillé, précisant le périmètre, le planning
                indicatif, le prix et les conditions particulières. Le devis est valable <strong>30 jours</strong> à
                compter de sa date d&apos;émission.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                La commande est considérée comme ferme et définitive à réception par le Prestataire du{' '}
                <strong>devis daté et signé</strong> avec la mention &quot;Bon pour accord&quot; ET du{' '}
                <strong>paiement de l&apos;acompte de 30%</strong> du montant total, sauf mention contraire sur le devis.
              </p>
            </section>

            {/* Article 4 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 4 : Exécution et Livraison de la Prestation
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Le devis délimite précisément le périmètre des prestations. Sauf mention contraire,{' '}
                <strong>deux (2) phases de retours et modifications</strong> sont incluses. Tout travail ne
                figurant pas sur le devis ou toute phase de retours supplémentaire fera l&apos;objet d&apos;un
                devis complémentaire.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                À la livraison finale, le Client dispose de <strong>5 jours ouvrés</strong> pour émettre par
                écrit d&apos;éventuelles réserves. En l&apos;absence de réserve dans ce délai, la prestation
                est considérée comme définitivement acceptée.
              </p>
            </section>

            {/* Article 5 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 5 : Obligations du Client
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Le Client s&apos;engage à collaborer activement avec le Prestataire en fournissant en temps utile
                l&apos;ensemble des contenus nécessaires (textes, images, logos, etc.), dont il certifie posséder
                les droits d&apos;exploitation. Tout retard de la part du Client dans la fourniture d&apos;informations
                ou la validation d&apos;étapes pourra entraîner un report du délai de livraison.
              </p>
            </section>

            {/* Article 6 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 6 : Propriété Intellectuelle et Droit de Citation
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Sous réserve du paiement intégral du prix, le Prestataire cède au Client les droits patrimoniaux
                sur les livrables créés spécifiquement pour lui, pour les usages et supports définis dans le devis.
                Les fichiers sources (fichiers de travail natifs) ne sont pas inclus dans la cession, sauf accord
                spécifique et facturation complémentaire.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                Le Prestataire conserve la propriété de son savoir-faire, de ses outils et de ses composants logiciels
                préexistants. Sauf demande écrite contraire du Client, le Prestataire se réserve le droit de mentionner
                sa réalisation comme référence dans ses supports de communication (portfolio, site web, etc.).
              </p>
            </section>

            {/* Article 7 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 7 : Tarifs et Modalités de Paiement
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Les prix des prestations sont indiqués en euros (€). En tant que micro-entrepreneur, le Prestataire
                bénéficie de la franchise en base de TVA : <strong>TVA non applicable, art. 293 B du CGI.</strong>{' '}
                Les prix sont donc nets de taxes.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                Sauf mention contraire sur le devis, les modalités de paiement sont :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6 leading-relaxed text-[var(--color-foreground)]">
                <li><strong>30% d&apos;acompte</strong> à la commande.</li>
                <li><strong>70% de solde</strong> à la livraison de la prestation.</li>
              </ul>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                Paiement s&apos;effectue par virement bancaire ou via plateforme sécurisée (Stripe, Whop ou équivalent).
                Le solde est payable <strong>à réception de la facture finale</strong>.
              </p>
            </section>

            {/* Article 8 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 8 : Pénalités de Retard
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Conformément à la loi, tout retard de paiement entraînera de plein droit l&apos;application de
                pénalités de retard calculées sur la base du taux d&apos;intérêt appliqué par la BCE à son opération
                de refinancement la plus récente majoré de 10 points de pourcentage, ainsi qu&apos;une{' '}
                <strong>indemnité forfaitaire pour frais de recouvrement de 40 €</strong>.
              </p>
            </section>

            {/* Article 9 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 9 : Responsabilité et Garantie
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Le Prestataire est tenu par une <strong>obligation de moyens</strong>. Il s&apos;engage à réaliser
                les prestations avec tout le soin et la diligence requis. Sa responsabilité ne pourra être engagée
                pour un préjudice qui résulterait d&apos;une faute du Client (ex: fourniture d&apos;informations
                erronées) ou d&apos;un problème lié à des services tiers (hébergeur, registar, etc.).
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                En tout état de cause, la responsabilité du Prestataire est <strong>limitée au montant total hors
                taxes payé par le Client</strong> pour la prestation concernée.
              </p>
            </section>

            {/* Article 10 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 10 : Maintenance et Support
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Une garantie corrective de 30 jours est incluse après la mise en ligne, couvrant les bugs imputables
                au travail du Prestataire. Toute intervention ultérieure, qu&apos;elle soit corrective, évolutive ou
                de support, est réalisée dans le cadre d&apos;un <strong>contrat de maintenance optionnel</strong> ou
                facturée au tarif en vigueur, sur la base d&apos;un devis préalable.
              </p>
            </section>

            {/* Article 11 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 11 : Annulation et Résiliation
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                En cas d&apos;annulation de la commande par le Client avant son démarrage, l&apos;acompte versé reste
                acquis au Prestataire à titre de dédommagement. Si l&apos;annulation intervient en cours de projet,
                le Prestataire facturera les travaux déjà réalisés au prorata.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                Chaque partie peut résilier le contrat en cas de manquement grave de l&apos;autre partie, après une
                mise en demeure par lettre recommandée restée sans effet pendant 15 jours.
              </p>
            </section>

            {/* Article 12 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 12 : Force Majeure
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Aucune des parties ne pourra être tenue pour responsable d&apos;un manquement à ses obligations
                contractuelles dû à un événement de force majeure, tel que défini par la jurisprudence française.
              </p>
            </section>

            {/* Article 13 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 13 : Droit Applicable et Juridiction
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Les présentes CGV sont soumises au <strong>droit français</strong>. En cas de litige, et après une
                tentative de résolution amiable, compétence exclusive est attribuée aux{' '}
                <strong>tribunaux de Montpellier</strong>.
              </p>
            </section>
          </div>

          {/* Chapitre 2 */}
          <div className="space-y-8 border-t border-[var(--color-bg-under)] pt-12">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'var(--font-headings)' }}>
              Chapitre 2 : Conditions Spécifiques aux Services de Maintenance
            </h2>
            <p className="italic text-[var(--color-muted)]">
              (Applicable aux Clients ayant souscrit à un service de maintenance)
            </p>

            {/* Article 14 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 14 : Objet et Souscription au Service de Maintenance
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Le service de maintenance a pour objet d&apos;assurer le bon fonctionnement, la sécurité et la
                performance du site web du Client. La souscription est formalisée par l&apos;acceptation d&apos;un
                devis spécifiant la formule choisie (annuelle ou mensuelle) et le tarif applicable.
              </p>
            </section>

            {/* Article 15 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 15 : Formules d&apos;Abonnement et Engagement
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Le Client peut opter pour l&apos;une des formules suivantes :
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold text-[var(--color-foreground)]">15.1. Formule Annuelle :</h4>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-[var(--color-foreground)]">
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
                  <h4 className="mb-2 font-semibold text-[var(--color-foreground)]">15.2. Formule Mensuelle :</h4>
                  <ul className="list-disc space-y-2 pl-6 leading-relaxed text-[var(--color-foreground)]">
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
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 16 : Périmètre des Services Inclus
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Sauf mention contraire sur le devis, le service de maintenance inclut :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-[var(--color-foreground)]">
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
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 17 : Prestations Exclues de la Maintenance
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Sont exclus et feront l&apos;objet d&apos;un devis séparé : la création de nouvelles pages ou
                fonctionnalités majeures, la refonte design et les campagnes marketing et tout autres services
                non mentionnés ci-dessus.
              </p>
            </section>

            {/* Article 18 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 18 : Accès et Administration
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                Pour garantir l&apos;intégrité et la sécurité du site, et pour permettre l&apos;exécution efficace
                des prestations de maintenance et d&apos;hébergement,{' '}
                <strong>le Prestataire conservera les accès exclusifs d&apos;administration au serveur
                d&apos;hébergement et au back-office du site</strong> pendant toute la durée du contrat de maintenance.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--color-foreground)]">
                Des accès de type &quot;éditeur&quot; ou &quot;contributeur&quot;, permettant la gestion de contenu,
                pourront être fournis au Client sur demande.
              </p>
            </section>

            {/* Article 19 */}
            <section className="space-y-3">
              <h3 className="text-lg md:text-xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
                Article 19 : Fin du Contrat de Maintenance
              </h3>
              <p className="leading-relaxed text-[var(--color-foreground)]">
                À la résiliation du contrat, quelle qu&apos;en soit la cause :
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-[var(--color-foreground)]">
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
          <div className="mt-12 border-t border-[var(--color-bg-under)] pt-6">
            <p className="text-sm text-[var(--color-muted)]">
              Dernière mise à jour : 07/11/2025
            </p>
          </div>
        </div>
      </main>

      <FooterV2 />
    </div>
  )
}

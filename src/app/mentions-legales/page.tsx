import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales | Thomas Giberné',
  description: 'Consultez les mentions légales du site de Thomas Giberné, freelance en création de site web et identité de marque.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
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
          Mentions Légales
        </h1>

        <div className="space-y-8 text-gray-700 dark:text-gray-300">
          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p><strong>Thomas Giberné</strong>, exerçant sous le nom commercial <strong>The Crystal Lad</strong>.</p>
              <p><strong>Statut :</strong> Micro‑entreprise (prestation de services numériques)</p>
              <p><strong>SIREN / SIRET :</strong> 99336665700019</p>
              <p><strong>Siège social :</strong> 513 Avenue du Val de Montferrand 34090 MONTPELLIER</p>
              <p><strong>E‑mail :</strong> <a href="mailto:contact@giberne.dev" className="underline hover:text-black dark:hover:text-white">contact@giberne.dev</a></p>
              <p><strong>Téléphone :</strong> +33 771328947</p>
              <p><strong>TVA non applicable, art. 293 B du CGI</strong></p>
              <p><strong>Directeur de la publication :</strong> Thomas Giberné</p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              2. Hébergement du site
            </h2>
            <div className="space-y-2 leading-relaxed">
              <p><strong>Hébergeur :</strong> Cloudflare, Inc</p>
              <p><strong>Adresse du siège :</strong> 101 Townsend St., San Francisco, California 94107, USA.</p>
              <p><strong>Forme juridique :</strong> société américaine (voir les conditions d&apos;utilisation).</p>
              <p>
                <strong>Site web de l&apos;hébergeur :</strong>{' '}
                <a
                  href="https://www.cloudflare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black dark:hover:text-white"
                >
                  https://www.cloudflare.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              3. Propriété intellectuelle
            </h2>
            <p className="leading-relaxed">
              L&apos;ensemble de ce site, y compris sa structure, ses textes, images, logos et tout autre
              élément le composant, est la propriété exclusive de Thomas Giberné (The Crystal Lad). Toute
              représentation ou reproduction, totale ou partielle, est interdite sans autorisation écrite
              préalable et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              4. Responsabilité
            </h2>
            <p className="leading-relaxed">
              Les informations diffusées sur le site giberne.dev sont aussi précises que possible, mais peuvent
              contenir des inexactitudes ou des omissions. L&apos;utilisateur du site est seul responsable de
              l&apos;utilisation de ces informations. The Crystal Lad ne pourra être tenu responsable des
              dommages directs ou indirects résultant de l&apos;accès ou de l&apos;utilisation du site.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              5. Données personnelles (RGPD)
            </h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                <strong>Responsable de traitement :</strong> Giberné Thomas -{' '}
                <a href="mailto:contact@giberne.dev" className="underline hover:text-black dark:hover:text-white">
                  contact@giberne.dev
                </a>
              </p>
              <p>
                Conformément au RGPD, les données personnelles collectées via les formulaires de contact ou
                lors de la navigation sont utilisées pour les finalités suivantes : gestion des demandes de
                contact, réalisation des prestations, facturation, et analyse de l&apos;audience (avec consentement).
              </p>
              <p>
                Les destinataires de ces données sont Thomas Giberné et ses sous-traitants techniques (hébergeur,
                services d&apos;emailing, etc.). La durée de conservation est limitée à la nécessité de la relation
                commerciale (3 ans pour les prospects, 10 ans pour les données de facturation).
              </p>
              <p>
                Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition
                et de portabilité de vos données. Pour exercer ces droits, veuillez contacter{' '}
                <a href="mailto:contact@giberne.dev" className="underline hover:text-black dark:hover:text-white">
                  contact@giberne.dev
                </a>{' '}
                avec un justificatif d&apos;identité. En cas de litige, vous pouvez introduire une réclamation
                auprès de la CNIL.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              6. Cookies & traceurs
            </h2>
            <p className="leading-relaxed">
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Des cookies tiers
              (analyse d&apos;audience, marketing) peuvent être déposés sous réserve de votre consentement,
              que vous pouvez gérer à tout moment via notre bandeau de gestion des cookies.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              7. Contact
            </h2>
            <p className="leading-relaxed">
              Pour toute question sur le site et vos données, écrire à :{' '}
              <a href="mailto:contact@giberne.dev" className="font-semibold underline hover:text-black dark:hover:text-white">
                contact@giberne.dev
              </a>
            </p>
          </section>

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
            <Link href="/cgv" className="hover:text-black dark:hover:text-white transition-colors">
              Conditions Générales de Vente
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

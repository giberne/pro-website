import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderV2 from '@/components/v2/layout/HeaderV2'
import FooterV2 from '@/components/v2/layout/FooterV2'
import { ArrowLeft } from 'lucide-react'

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
    <div className="min-h-screen v2-wrapper" style={{ background: 'var(--color-bg-gradient)' }}>
      <HeaderV2 />

      <main className="container-v2 py-12 md:py-20">
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
          Mentions Légales
        </h1>

        {/* Contenu dans une carte */}
        <div className="card-upper space-y-8">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              1. Éditeur du site
            </h2>
            <div className="space-y-2 leading-relaxed text-[var(--color-foreground)]">
              <p><strong>Thomas Giberné</strong>, exerçant sous le nom commercial <strong>The Crystal Lad</strong>.</p>
              <p><strong>Statut :</strong> Micro‑entreprise (prestation de services numériques)</p>
              <p><strong>SIREN / SIRET :</strong> 99336665700019</p>
              <p><strong>Siège social :</strong> 513 Avenue du Val de Montferrand 34090 MONTPELLIER</p>
              <p>
                <strong>E‑mail :</strong>{' '}
                <a href="mailto:contact@giberne.dev" className="text-[var(--color-primary)] hover:underline">
                  contact@giberne.dev
                </a>
              </p>
              <p><strong>Téléphone :</strong> +33 771328947</p>
              <p><strong>TVA non applicable, art. 293 B du CGI</strong></p>
              <p><strong>Directeur de la publication :</strong> Thomas Giberné</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              2. Hébergement du site
            </h2>
            <div className="space-y-2 leading-relaxed text-[var(--color-foreground)]">
              <p><strong>Hébergeur :</strong> Cloudflare, Inc</p>
              <p><strong>Adresse du siège :</strong> 101 Townsend St., San Francisco, California 94107, USA.</p>
              <p><strong>Forme juridique :</strong> société américaine (voir les conditions d&apos;utilisation).</p>
              <p>
                <strong>Site web de l&apos;hébergeur :</strong>{' '}
                <a
                  href="https://www.cloudflare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  https://www.cloudflare.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              3. Propriété intellectuelle
            </h2>
            <p className="leading-relaxed text-[var(--color-foreground)]">
              L&apos;ensemble de ce site, y compris sa structure, ses textes, images, logos et tout autre
              élément le composant, est la propriété exclusive de Thomas Giberné (The Crystal Lad). Toute
              représentation ou reproduction, totale ou partielle, est interdite sans autorisation écrite
              préalable et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              4. Responsabilité
            </h2>
            <p className="leading-relaxed text-[var(--color-foreground)]">
              Les informations diffusées sur le site giberne.dev sont aussi précises que possible, mais peuvent
              contenir des inexactitudes ou des omissions. L&apos;utilisateur du site est seul responsable de
              l&apos;utilisation de ces informations. The Crystal Lad ne pourra être tenu responsable des
              dommages directs ou indirects résultant de l&apos;accès ou de l&apos;utilisation du site.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              5. Données personnelles (RGPD)
            </h2>
            <div className="space-y-4 leading-relaxed text-[var(--color-foreground)]">
              <p>
                <strong>Responsable de traitement :</strong> Giberné Thomas -{' '}
                <a href="mailto:contact@giberne.dev" className="text-[var(--color-primary)] hover:underline">
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
                <a href="mailto:contact@giberne.dev" className="text-[var(--color-primary)] hover:underline">
                  contact@giberne.dev
                </a>{' '}
                avec un justificatif d&apos;identité. En cas de litige, vous pouvez introduire une réclamation
                auprès de la CNIL.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              6. Cookies & traceurs
            </h2>
            <p className="leading-relaxed text-[var(--color-foreground)]">
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Des cookies tiers
              (analyse d&apos;audience, marketing) peuvent être déposés sous réserve de votre consentement,
              que vous pouvez gérer à tout moment via notre bandeau de gestion des cookies.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-headings)' }}>
              7. Contact
            </h2>
            <p className="leading-relaxed text-[var(--color-foreground)]">
              Pour toute question sur le site et vos données, écrire à :{' '}
              <a href="mailto:contact@giberne.dev" className="font-semibold text-[var(--color-primary)] hover:underline">
                contact@giberne.dev
              </a>
            </p>
          </section>

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

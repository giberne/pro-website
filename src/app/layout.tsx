import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { poppins, chivoMono } from './fonts'
import { poppins as poppinsV2, chivoMono as chivoMonoV2, oxanium } from './fonts-v2'
import './globals.css'
import './globals-v2.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/contexts/ModalContext'

export const metadata: Metadata = {
  // --- URL DE BASE DU SITE (IMPORTANT pour SEO) ---
  metadataBase: new URL('https://giberne.dev'),

  // --- URL CANONIQUE (Redirection www vers domaine principal) ---
  alternates: {
    canonical: 'https://giberne.dev',
  },

  // --- METADONNÉES PRINCIPALES (SEO) ---
  title: 'The Crystal Lad | Création de Sites Web pour Artisans, Artistes & Entrepreneurs',
  description: 'Studio web spécialisé dans la création de sites modernes sur mesure. Design personnalisé, développement performant, CMS/CRM intégrés. Du design à la mise en ligne, solutions complètes pour artisans, commerçants, artistes et consultants.',
  keywords: [
    // Nom du Studio
    'The Crystal Lad',
    'studio web',
    'agence web freelance',

    // Core Business
    'création site web',
    'développement web',
    'site web sur mesure',
    'site web moderne',
    'site web professionnel',

    // Services Principaux
    'design web personnalisé',
    'développement Next.js',
    'intégration CMS',
    'CRM web',
    'gestion de contenu',
    'hébergement web',
    'déploiement site web',

    // Types de Sites
    'site vitrine',
    'portfolio professionnel',
    'site e-commerce',
    'landing page',

    // Public Cible
    'site web artisan',
    'site web commerçant',
    'site web artiste',
    'site web entrepreneur',
    'site web consultant',
    'site web TPE PME',
    'site web créatif',

    // Design & UX
    'UI design',
    'UX design',
    'design d\'interface',
    'site responsive',
    'mobile-first',

    // Performance
    'site web rapide',
    'optimisation performance',
    'optimisation SEO',
    'référencement naturel',

    // Solutions Complètes
    'conception à la mise en ligne',
    'solution web complète',
    'accompagnement web',

    // Créateur
    'Thomas Giberné',
    'développeur web France',
    'giberne.dev',
  ],
  authors: [{ name: 'Thomas Giberné' }],
  creator: 'Thomas Giberné',

  // --- FAVICONS ---
  // Next.js utilise automatiquement icon.svg dans src/app/
  // Pas besoin de configuration manuelle ici

  // --- OPEN GRAPH (Partage sur les réseaux sociaux comme Facebook, LinkedIn) ---
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://giberne.dev',
    siteName: 'The Crystal Lad',
    title: 'The Crystal Lad | Création de Sites Web sur Mesure',
    description: 'Studio web spécialisé dans la création de sites modernes. Design personnalisé, développement performant, intégration CMS/CRM. Solutions complètes du design à la mise en ligne pour artisans, commerçants, artistes et entrepreneurs.',
    images: [
      {
        url: '/images/pro-banner.png',
        width: 1200,
        height: 630,
        alt: 'The Crystal Lad - Studio de Création Web',
      },
    ],
  },

  // --- TWITTER CARD (Partage sur Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'The Crystal Lad | Studio de Création Web',
    description: 'Création de sites web modernes sur mesure. Design personnalisé, développement performant, CMS/CRM intégrés. Solutions complètes pour artisans, artistes et entrepreneurs.',
    images: ['/images/pro-banner.png'],
    creator: '@akisama_fr',
  },

  // --- ROBOTS (Instructions pour Google et les autres moteurs de recherche) ---
  robots: {
    index: true,        // ✅ Google PEUT référencer votre site
    follow: true,       // ✅ Google PEUT suivre tous les liens
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Open Graph pour les previews réseaux sociaux */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="The Crystal Lad" />
        <meta property="og:title" content="The Crystal Lad | Création de Sites Web sur Mesure" />
        <meta property="og:description" content="Studio web spécialisé dans la création de sites modernes. Design personnalisé, développement performant, intégration CMS/CRM. Solutions complètes du design à la mise en ligne." />
        <meta property="og:url" content="https://giberne.dev" />
        <meta property="og:image" content="https://giberne.dev/images/pro-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Crystal Lad - Studio de Création Web" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@akisama_fr" />
        <meta name="twitter:title" content="The Crystal Lad | Studio de Création Web" />
        <meta name="twitter:description" content="Création de sites web modernes sur mesure. Design personnalisé, développement performant, CMS/CRM intégrés." />
        <meta name="twitter:image" content="https://giberne.dev/images/pro-banner.png" />

        {/* Calendly CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} ${chivoMono.variable} ${poppinsV2.variable} ${chivoMonoV2.variable} ${oxanium.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ModalProvider>
            {children}
          </ModalProvider>
        </ThemeProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

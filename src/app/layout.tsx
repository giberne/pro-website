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
  title: 'Thomas Giberné | Communication Digitale & Sites Web Propulsés par l\'IA',
  description: 'Créez une présence en ligne impactante grâce à l\'IA. Sites web modernes, identité visuelle, stratégie digitale pour artisans, commerçants et entrepreneurs. Design innovant, développement rapide. À partir de 800€ HT.',
  keywords: [
    // Core Business - Communication Digitale
    'communication digitale',
    'présence digitale',
    'présence en ligne',
    'lancement digital',

    // IA Focus
    'site web IA',
    'création site web intelligence artificielle',
    'design web IA',
    'site web assisté IA',
    'développement web IA',

    // Services
    'création site web',
    'développement web',
    'site web sur mesure',
    'site web moderne',
    'site web professionnel',
    'développeur web freelance',

    // Types de Sites
    'site vitrine',
    'portfolio en ligne',
    'site e-commerce léger',
    'landing page',
    'site corporate',

    // Public Cible
    'site web artisan',
    'site web commerçant',
    'site web artiste',
    'site web entrepreneur',
    'site web consultant',
    'site web TPE PME',
    'site web freelance',
    'site web photographe',

    // Design & Branding
    'identité visuelle',
    'branding digital',
    'logo professionnel',
    'charte graphique',
    'design d\'interface',
    'UI design',
    'UX design',

    // Technologies
    'développement Next.js',
    'site responsive',
    'mobile-first',
    'site web rapide',
    'optimisation performance',

    // Services Additionnels
    'intégration CMS',
    'CRM web',
    'gestion contenu',
    'formation site web',
    'accompagnement digital',

    // SEO & Performance
    'référencement naturel',
    'optimisation SEO',
    'site web optimisé',

    // Prix & Délais
    'tarif site web',
    'prix site web',
    'à partir de 800€',
    'site web abordable',
    'création rapide site web',

    // Localisation
    'développeur web France',

    // Nom
    'Thomas Giberné',
    'giberne.dev',
  ],
  authors: [{ name: 'Thomas Giberné' }],
  creator: 'Thomas Giberné',

  // --- FAVICONS ---
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },

  // --- OPEN GRAPH (Partage sur les réseaux sociaux comme Facebook, LinkedIn) ---
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://giberne.dev',
    siteName: 'Thomas Giberné - Communication Digitale',
    title: 'Créez une Présence en Ligne Impactante grâce à l\'IA',
    description: 'Sites web modernes créés avec l\'intelligence artificielle. Design sur mesure, développement rapide, accompagnement complet pour artisans, commerçants et entrepreneurs. Dès 800€.',
    images: [
      {
        url: '/images/pro-banner.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Giberné - Communication Digitale avec IA',
      },
    ],
  },

  // --- TWITTER CARD (Partage sur Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'Créez une Présence en Ligne Impactante grâce à l\'IA',
    description: 'Sites web modernes créés avec l\'IA. Design sur mesure, développement rapide, accompagnement complet. Dès 800€.',
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
        <meta property="og:site_name" content="Thomas Giberné - Communication Digitale" />
        <meta property="og:title" content="Créez une Présence en Ligne Impactante grâce à l'IA" />
        <meta property="og:description" content="Sites web modernes créés avec l'intelligence artificielle. Design sur mesure, développement rapide, accompagnement complet pour artisans, commerçants et entrepreneurs. Dès 800€." />
        <meta property="og:url" content="https://giberne.dev" />
        <meta property="og:image" content="https://giberne.dev/images/pro-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Thomas Giberné - Communication Digitale avec IA" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@akisama_fr" />
        <meta name="twitter:title" content="Créez une Présence en Ligne Impactante grâce à l'IA" />
        <meta name="twitter:description" content="Sites web modernes créés avec l'IA. Design sur mesure, développement rapide, accompagnement complet. Dès 800€." />
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

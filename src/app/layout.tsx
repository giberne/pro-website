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
  title: 'Thomas Giberné | Création de Site Web & Identité de Marque',
  description: 'Freelance spécialisé en création de site web sur mesure, design d\'interface (UI/UX) et identité de marque. De la stratégie à la mise en ligne, je donne vie à vos projets.',
  keywords: [
  'développeur web freelance',
    'création de site web',
    'refonte de site',
    'designer web',
    'UI design',
    'UX design',
    'Figma',
    'développeur Next.js',
    'identité de marque',
    'identité visuelle',
    'création de logo',
    'charte graphique',
    'direction artistique',
    'portfolio',
    'Thomas Giberné',
    'finaliser site IA',
    'améliorer site existant',
    'aide site web bloqué',
    'site web lent',
    'corriger bug site web',
    'optimisation de site web',
    'rendre site professionnel',
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
    siteName: 'Thomas Giberné | Design & Développement',
    title: 'Thomas Giberné | Designer & Développeur - De la vision au produit fini',
    description: 'Je transforme vos idées en expériences numériques mémorables : sites web sur mesure, design d\'interface et identités de marque fortes.',
    images: [
      {
        url: '/images/pro-banner.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Giberné - Création de site web et identité de marque',
      },
    ],
  },

  // --- TWITTER CARD (Partage sur Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Giberné | Designer & Développeur - De la vision au produit fini',
    description: 'Je transforme vos idées en expériences numériques mémorables : sites web sur mesure, design d\'interface et identités de marque fortes.',
    images: ['/images/pro-banner.png'],
    creator: '@akisama_fr',
  },

  // --- ROBOTS (Instructions pour Google et les autres moteurs de recherche) ---
  robots: {
    index: true,        // ✅ Google PEUT référencer ton site
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
  viewportFit: 'cover',
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
        <meta property="og:site_name" content="Thomas Giberné | Design & Développement" />
        <meta property="og:title" content="Thomas Giberné | Designer & Développeur - De la vision au produit fini" />
        <meta property="og:description" content="Je transforme vos idées en expériences numériques mémorables : sites web sur mesure, design d'interface et identités de marque fortes." />
        <meta property="og:url" content="https://giberne.dev" />
        <meta property="og:image" content="https://giberne.dev/images/pro-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Thomas Giberné - Création de site web et identité de marque" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@akisama_fr" />
        <meta name="twitter:title" content="Thomas Giberné | Designer & Développeur - De la vision au produit fini" />
        <meta name="twitter:description" content="Je transforme vos idées en expériences numériques mémorables : sites web sur mesure, design d'interface et identités de marque fortes." />
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

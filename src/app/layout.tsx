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
  title: 'Thomas Giberné | Création de Sites Web Adaptés à Votre Activité',
  description: 'Création de sites web modernes sur mesure : sites vitrine, e-commerce légers, applications web. Du design à la mise en ligne, je développe des solutions rapides, responsive et adaptées à vos besoins. À partir de 600€ HT.',
  keywords: [
    'développeur web freelance',
    'création de site web',
    'site web sur mesure',
    'site vitrine',
    'site e-commerce',
    'e-commerce',
    'refonte de site',
    'designer web',
    'UI design',
    'UX design',
    'design personnalisé',
    'interface personnalisée',
    'Figma',
    'développeur Next.js',
    'développement rapide',
    'site responsive',
    'mobile-first',
    'responsive design',
    'CMS',
    'gestion de contenu',
    'mise en ligne',
    'hébergement web',
    'identité de marque',
    'identité visuelle',
    'création de logo',
    'charte graphique',
    'direction artistique',
    'portfolio',
    'Thomas Giberné',
    'site web professionnel',
    'site web moderne',
    'optimisation de site web',
    'tarif site web',
    'prix site web',
    'à partir de 600€',
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
    siteName: 'Thomas Giberné | Création de Sites Web',
    title: 'Thomas Giberné | Création de Sites Web Adaptés à Votre Activité',
    description: 'Création de sites web modernes sur mesure : sites vitrine, e-commerce, applications web. Du design à la mise en ligne. Responsive, rapide et professionnel. À partir de 600€ HT.',
    images: [
      {
        url: '/images/pro-banner.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Giberné - Création de sites web modernes sur mesure',
      },
    ],
  },

  // --- TWITTER CARD (Partage sur Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Giberné | Création de Sites Web Adaptés à Votre Activité',
    description: 'Sites web modernes sur mesure : vitrine, e-commerce, applications web. Design personnalisé, développement rapide, responsive. À partir de 600€ HT.',
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
        <meta property="og:site_name" content="Thomas Giberné | Création de Sites Web" />
        <meta property="og:title" content="Thomas Giberné | Création de Sites Web Adaptés à Votre Activité" />
        <meta property="og:description" content="Création de sites web modernes sur mesure : sites vitrine, e-commerce, applications web. Du design à la mise en ligne. Responsive, rapide et professionnel. À partir de 600€ HT." />
        <meta property="og:url" content="https://giberne.dev" />
        <meta property="og:image" content="https://giberne.dev/images/pro-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Thomas Giberné - Création de sites web modernes sur mesure" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@akisama_fr" />
        <meta name="twitter:title" content="Thomas Giberné | Création de Sites Web Adaptés à Votre Activité" />
        <meta name="twitter:description" content="Sites web modernes sur mesure : vitrine, e-commerce, applications web. Design personnalisé, développement rapide, responsive. À partir de 600€ HT." />
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

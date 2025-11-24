import { Poppins, Chivo_Mono, Oxanium } from 'next/font/google'

// Poppins - Corps de texte
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins-v2',
  display: 'swap',
})

// Chivo Mono - Logo
export const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-chivo-mono-v2',
  display: 'swap',
})

// Oxanium - Titres (H1, H2, H3)
export const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['700'], // Bold uniquement selon le style guide
  variable: '--font-oxanium-v2',
  display: 'swap',
})

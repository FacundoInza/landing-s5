import { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './contexts/language-context'

export const metadata: Metadata = {
  title: {
    default: 'Silver5 AI - Inteligencia Artificial',
    template: '%s | Silver5 AI'
  },
  description: 'Plataforma de inteligencia artificial especializada en Migracion a la nube, automatizacion de tareas, automatizacion de procesos, automatizacion de flujos de trabajo con IA, chatbots, apps moviles, etc.',
  keywords: [
    'landing page',
    'vsl',
    'vsl page',
    'chatbots',
    'mensajes automaticos',
    'mensajes automaticos con IA',
    'chatbots con IA',
    'responder mensajes automaticamente',
    'responder mensajes automaticamente con IA',
    'facturacion automatica',
    'facturacion automatica con IA',
    'migracion de datos',
    'google sheets',
    'google sheets api',
    'google sheets api python',
    'google sheets api javascript',
    'google sheets api node',
    'api',
    'automatizacion',
    'automatizacion de tareas',
    'automatizacion de procesos',
    'automatizacion de flujos de trabajo',
    'automatizacion de flujos de trabajo',
    'inteligencia artificial',
    'IA',
    'amazon web services',
    'aws',
    'amazon web services',
    'google cloud',
    'google cloud platform',
    'google cloud functions',
    'google cloud functions python',
    'google cloud functions javascript',
    'google cloud functions node',
    'google cloud functions api',
    'google cloud functions api python',
    'google cloud functions api javascript',
    'google cloud functions api node',
    'react',
    'react js',
    'react native',
    'react native js',
    'react native python',
    'react native node',
    'react native api',
    'react native api python',
    'react native api javascript',
    'react native api node',
    'apps',
    'apps moviles',
    'apps moviles en react native',
    'apps moviles en react native js',
    'apps moviles en react native python',
    'apps moviles en react native node',
    'apps moviles en react native api',
    'apps moviles en react native api python',
    'apps moviles en react native api javascript',
    'apps moviles en react native api node',

  ],
  authors: [{ name: 'Silver5', url: 'https://silver5ai.com' }],
  creator: 'Silver5',
  publisher: 'Silver5',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://silver5ai.com',
    siteName: 'Silver5 AI',
    title: 'Silver5 AI - Inteligencia Artificial para Nutrición',
    description: 'Plataforma de inteligencia artificial especializada en nutrición y bienestar. Obtén planes nutricionales personalizados y asesoramiento mediante IA.',
    images: [
      {
        url: 'https://silver5ai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silver5 AI Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silver5 AI - Inteligencia Artificial para Nutrición',
    description: 'Plataforma de inteligencia artificial especializada en nutrición y bienestar. Obtén planes nutricionales personalizados y asesoramiento mediante IA.',
    images: ['https://silver5ai.com/twitter-image.jpg'],
    creator: '@silver5ai',
    site: '@silver5ai',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-de-verificacion-yandex',
    yahoo: 'tu-codigo-de-verificacion-yahoo',
    other: {
      me: ['tu-email@silver5ai.com'],
    },
  },
  alternates: {
    canonical: 'https://silver5ai.com',
    languages: {
      'es-ES': 'https://silver5ai.com/es',
      'en-US': 'https://silver5ai.com/en',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}


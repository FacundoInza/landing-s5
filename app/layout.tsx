import { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './contexts/language-context'

export const metadata: Metadata = {
  title: {
    default: 'Silver5 AI - Soluciones para Financieras en Binance P2P',
    template: '%s | Silver5 AI'
  },
  description: 'Plataforma especializada en automatización y centralización de operaciones para financieras en el mercado P2P de Binance. Optimiza procesos y asegura el cumplimiento normativo.',
  keywords: [
    'financieras',
    'Binance P2P',
    'automatización',
    'centralización de operaciones',
    'cumplimiento normativo',
    'trading automatizado',
    'bots de trading',
    'gestión de riesgos',
    'verificación de clientes',
    'integración de compliance',
    'automatización de procesos',
    'inteligencia artificial',
    'IA',
    'automatización de tareas',
    'automatización de flujos de trabajo',
    'plataforma de trading',
    'soluciones para financieras',
    'gestión de datos',
    'seguridad financiera',
    'auditoría de operaciones',
    'control de transferencias',
    'optimización de trading',
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
    title: 'Silver5 AI - Soluciones para Financieras en Binance P2P',
    description: 'Plataforma especializada en automatización y centralización de operaciones para financieras en el mercado P2P de Binance.',
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
    title: 'Silver5 AI - Soluciones para Financieras en Binance P2P',
    description: 'Plataforma especializada en automatización y centralización de operaciones para financieras en el mercado P2P de Binance.',
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
  category: 'finance',
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


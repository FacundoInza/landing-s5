import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bot de Posicionamiento P2P - Automatización 24/7 | P2P Manager',
  description: 'Bot inteligente que automatiza la actualización de precios P2P las 24 horas. 3 modos: Conservador, Agresivo y Precio Fijo. +45% más ventas comprobadas. Configuración en 30 minutos.',
  keywords: [
    'bot posicionamiento p2p',
    'automatización precios binance',
    'bot trading p2p',
    'actualización automática precios',
    'posicionamiento competitivo p2p',
    'bot precio fijo p2p',
    'modo agresivo conservador',
    'monitoreo competencia 24/7',
    'optimización precios p2p',
    'rentabilidad automatizada'
  ],
  openGraph: {
    title: 'Bot de Posicionamiento P2P - Automatización 24/7',
    description: 'Bot inteligente que automatiza la actualización de precios P2P las 24 horas. +45% más ventas comprobadas.',
    type: 'website',
    images: [
      {
        url: '/images/og/bot-posicionamiento-p2p.jpg',
        width: 1200,
        height: 630,
        alt: 'Bot de Posicionamiento P2P Manager - Automatización Inteligente'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bot de Posicionamiento P2P - Automatización 24/7',
    description: 'Bot inteligente que automatiza la actualización de precios P2P las 24 horas. +45% más ventas comprobadas.',
    images: ['/images/og/bot-posicionamiento-p2p.jpg']
  },
  alternates: {
    canonical: '/p2p-manager/bot-posicionamiento'
  }
}

export default function BotPosicionamientoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Schema.org structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "P2P Manager - Bot de Posicionamiento",
            "description": "Bot inteligente para automatizar la actualización de precios P2P con 3 modos de operación: Conservador, Agresivo y Precio Fijo.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Prueba gratuita de 7 días"
            },
            "featureList": [
              "Automatización 24/7",
              "3 modos inteligentes de operación",
              "Monitoreo continuo de competencia",
              "Ajustes automáticos de precios",
              "Reportes en tiempo real"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "127",
              "bestRating": "5"
            },
            "provider": {
              "@type": "Organization",
              "name": "Silver5 AI",
              "url": "https://silver5ai.com"
            }
          })
        }}
      />
      {children}
    </>
  )
} 
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agente IA P2P - Soporte Conversacional 24/7 | P2P Manager',
  description: 'Agente conversacional inteligente para consultas P2P. Modos simulado y live. Reduce 90% consultas de soporte. Respuesta en 2 segundos. Disponibilidad 24/7 garantizada.',
  keywords: [
    'agente ia p2p',
    'soporte conversacional p2p',
    'chatbot inteligente crypto',
    'automatización soporte p2p',
    'agente virtual binance',
    'ia consultas p2p',
    'soporte automatico 24/7',
    'bot conversacional crypto',
    'asistente virtual p2p',
    'respuestas automáticas p2p'
  ],
  openGraph: {
    title: 'Agente IA P2P - Soporte Conversacional 24/7',
    description: 'Agente conversacional inteligente para consultas P2P. Reduce 90% consultas de soporte. Respuesta en 2 segundos.',
    type: 'website',
    images: [
      {
        url: '/images/og/agente-ia-conversacional.jpg',
        width: 1200,
        height: 630,
        alt: 'Agente IA P2P Manager - Soporte Conversacional Inteligente'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agente IA P2P - Soporte Conversacional 24/7',
    description: 'Agente conversacional inteligente para consultas P2P. Reduce 90% consultas de soporte.',
    images: ['/images/og/agente-ia-conversacional.jpg']
  },
  alternates: {
    canonical: '/p2p-manager/agente-ia'
  }
}

export default function AgenteIALayout({
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
            "name": "P2P Manager - Agente IA Conversacional",
            "description": "Agente conversacional inteligente especializado en consultas P2P con modos simulado y live para soporte automatizado 24/7.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Demo interactiva gratuita"
            },
            "featureList": [
              "Respuestas automáticas en 2 segundos",
              "Modo simulado para entrenamiento",
              "Modo live para atención real",
              "Conocimiento especializado P2P",
              "Escalamiento inteligente a humanos",
              "Disponibilidad 24/7 sin interrupciones",
              "Aprendizaje continuo automático"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "203",
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
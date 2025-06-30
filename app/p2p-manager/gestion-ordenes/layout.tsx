import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestión de Órdenes P2P - Captura Automática 100% | P2P Manager',
  description: 'Captura automática de todas las órdenes P2P en tiempo real. Panel centralizado con priorización inteligente. 0 órdenes perdidas garantizado. +28% más ingresos comprobados.',
  keywords: [
    'gestión órdenes p2p',
    'captura automática órdenes',
    'panel centralizado p2p',
    'priorización órdenes binance',
    'seguimiento órdenes p2p',
    'automatización órdenes crypto',
    'gestión centralizada p2p',
    'monitoreo órdenes tiempo real',
    'eficiencia operativa p2p',
    'reportes órdenes automáticos'
  ],
  openGraph: {
    title: 'Gestión de Órdenes P2P - Captura Automática 100%',
    description: 'Captura automática de todas las órdenes P2P en tiempo real. 0 órdenes perdidas garantizado. +28% más ingresos.',
    type: 'website',
    images: [
      {
        url: '/images/og/gestion-ordenes-p2p.jpg',
        width: 1200,
        height: 630,
        alt: 'Gestión de Órdenes P2P Manager - Captura Automática'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión de Órdenes P2P - Captura Automática 100%',
    description: 'Captura automática de todas las órdenes P2P en tiempo real. 0 órdenes perdidas garantizado.',
    images: ['/images/og/gestion-ordenes-p2p.jpg']
  },
  alternates: {
    canonical: '/p2p-manager/gestion-ordenes'
  }
}

export default function GestionOrdenesLayout({
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
            "name": "P2P Manager - Gestión de Órdenes",
            "description": "Sistema de captura automática y gestión centralizada de órdenes P2P con priorización inteligente y seguimiento en tiempo real.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Demo gratuita personalizada"
            },
            "featureList": [
              "Captura automática 24/7",
              "Panel centralizado unificado",
              "Priorización inteligente por rentabilidad",
              "Seguimiento en tiempo real",
              "Reportes detallados automáticos",
              "Cero órdenes perdidas garantizado"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "94",
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
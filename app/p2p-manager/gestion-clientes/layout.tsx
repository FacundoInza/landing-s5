import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestión de Clientes P2P - KYC/AML Automatizado con Didit | P2P Manager',
  description: 'Sistema completo de gestión de clientes P2P con verificación KYC/AML automatizada. Integración Didit. Verificación en 2 minutos. 99.8% precisión AML. Cumplimiento 100% garantizado.',
  keywords: [
    'gestión clientes p2p',
    'kyc aml automatizado',
    'verificación identidad didit',
    'compliance automatico p2p',
    'kyc binance automatico',
    'aml screening tiempo real',
    'verificación biométrica',
    'cumplimiento regulatorio',
    'onboarding automatizado',
    'due diligence digital'
  ],
  openGraph: {
    title: 'Gestión de Clientes P2P - KYC/AML Automatizado con Didit',
    description: 'Sistema completo de gestión de clientes P2P con verificación KYC/AML automatizada. Verificación en 2 minutos. 99.8% precisión AML.',
    type: 'website',
    images: [
      {
        url: '/images/og/gestion-clientes-kyc-aml.jpg',
        width: 1200,
        height: 630,
        alt: 'Gestión de Clientes P2P Manager - KYC/AML Automatizado con Didit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gestión de Clientes P2P - KYC/AML Automatizado con Didit',
    description: 'Sistema completo de gestión de clientes P2P con verificación KYC/AML automatizada. Verificación en 2 minutos.',
    images: ['/images/og/gestion-clientes-kyc-aml.jpg']
  },
  alternates: {
    canonical: '/p2p-manager/gestion-clientes'
  }
}

export default function GestionClientesLayout({
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
            "name": "P2P Manager - Gestión de Clientes KYC/AML",
            "description": "Sistema completo de gestión de clientes P2P con verificación KYC/AML automatizada mediante integración con Didit. Cumplimiento regulatorio sin fricción.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Consultoría compliance gratuita"
            },
            "featureList": [
              "Verificación KYC en 2 minutos",
              "Screening AML automático 99.8% precisión",
              "Integración nativa con Didit",
              "Verificación biométrica avanzada",
              "Base de datos unificada de clientes",
              "Reportes regulatorios automáticos",
              "Cumplimiento 24/7 garantizado"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "156",
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
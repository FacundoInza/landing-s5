import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chats Centralizados P2P - Gestiona Sin Compartir Credenciales | P2P Manager',
  description: 'Gestiona todas las conversaciones P2P de múltiples cuentas Binance desde una única interfaz. Tu equipo opera sin acceso a credenciales, con visibilidad completa y control total. Implementación en 48 horas.',
  keywords: [
    'chats centralizados p2p',
    'gestión multicuenta binance',
    'operadores sin credenciales',
    'supervisión chats p2p',
    'interfaz unificada binance',
    'seguridad operadores p2p',
    'historial conversaciones p2p',
    'asignación automática chats',
    'quality control p2p',
    'compliance chats binance'
  ],
  openGraph: {
    title: 'Chats Centralizados P2P - Gestiona Sin Compartir Credenciales',
    description: 'Gestiona todas las conversaciones P2P de múltiples cuentas Binance desde una única interfaz. Tu equipo opera sin acceso a credenciales.',
    type: 'website',
    images: [
      {
        url: '/images/og/chats-centralizados-p2p.jpg',
        width: 1200,
        height: 630,
        alt: 'Chats Centralizados P2P Manager - Interfaz Unificada'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chats Centralizados P2P - Gestiona Sin Compartir Credenciales',
    description: 'Gestiona todas las conversaciones P2P de múltiples cuentas Binance desde una única interfaz.',
    images: ['/images/og/chats-centralizados-p2p.jpg']
  },
  alternates: {
    canonical: '/p2p-manager/chats-centralizados'
  }
}

export default function ChatsCentralizadosLayout({
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
            "name": "P2P Manager - Chats Centralizados",
            "description": "Módulo especializado para gestionar conversaciones P2P de múltiples cuentas Binance desde una interfaz unificada, sin compartir credenciales.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Demo gratuita personalizada"
            },
            "featureList": [
              "Interfaz unificada para múltiples cuentas",
              "Operadores sin acceso a credenciales",
              "Supervisión en tiempo real",
              "Historial completo de conversaciones",
              "Asignación automática de chats"
            ],
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
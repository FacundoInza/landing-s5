import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'P2P Manager - Gestión Centralizada Multicuenta',
    template: '%s | P2P Manager - Silver5 AI'
  },
  description: 'Sistema integral para gestionar múltiples cuentas Binance P2P sin compartir credenciales. Ideal para VASPs y OTC Partners que necesitan escalar sus operaciones de forma segura.',
  keywords: [
    'p2p manager',
    'gestión multicuenta',
    'binance p2p',
    'vasp',
    'otc partners',
    'chats centralizados',
    'bot posicionamiento',
    'gestión órdenes',
    'gestión clientes',
    'agente ia',
    'compliance',
    'seguridad financiera'
  ],
  openGraph: {
    title: 'P2P Manager - Gestión Centralizada Multicuenta',
    description: 'Sistema integral para gestionar múltiples cuentas Binance P2P sin compartir credenciales.',
    url: 'https://silver5ai.com/p2p-manager',
    images: [
      {
        url: 'https://silver5ai.com/p2p-manager-og.jpg',
        width: 1200,
        height: 630,
        alt: 'P2P Manager Dashboard',
      },
    ],
  },
}

export default function P2PManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-silver5-dark via-silver5-dark to-gray-900 text-white">
      {children}
    </div>
  )
} 
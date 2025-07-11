import { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from './contexts/language-context'
import { Navbar } from '@/components/navbar'
import { FloatingMenu } from '@/components/floating-menu'
import { Footer } from '@/components/Footer-main'

export const metadata: Metadata = {
  title: {
    default: 'Silver5 AI - Soluciones Financieras con IA',
    template: '%s | Silver5 AI'
  },
  description: 'Plataforma especializada en soluciones financieras con IA. Automatización de operaciones P2P, gestión de criptomonedas, compliance y más. Optimiza tus operaciones financieras con nuestra tecnología.',
  keywords: [
    'fintech',
    'criptomonedas',
    'trading',
    'p2p',
    'binance p2p',
    'automatización financiera',
    'compliance',
    'kyc',
    'aml',
    'gestión de riesgos',
    'trading bot',
    'bot p2p',
    'cripto trading',
    'operaciones financieras',
    'inteligencia artificial financiera',
    'finanzas automatizadas',
    'seguridad financiera',
    'regulaciones financieras',
    'gestión de activos',
    'liquidez',
    'mercado p2p',
    'trading automatizado',
    'criptomonedas trading',
    'binance api',
    'api financiera',
    'automatización de procesos',
    'gestión de riesgos financieros',
    'compliance financiero',
    'regulaciones cripto',
    'seguridad cripto'
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
    title: 'Silver5 AI - Soluciones Financieras con IA',
    description: 'Optimiza tus operaciones financieras con nuestra plataforma de IA. Automatización P2P, gestión de criptomonedas y compliance financiero.',
    images: [
      {
        url: 'https://silver5ai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silver5 AI - Plataforma Financiera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silver5 AI - Soluciones Financieras con IA',
    description: 'Optimiza tus operaciones financieras con nuestra plataforma de IA. Automatización P2P, gestión de criptomonedas y compliance financiero.',
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
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '666652519119327');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=666652519119327&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        <LanguageProvider>
          <Navbar calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver-5-ai/silver-5-p2p'} />
          {children}
          <Footer calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver-5-ai/silver-5-p2p'} />
          <FloatingMenu />
        </LanguageProvider>
      </body>
    </html>
  )
}


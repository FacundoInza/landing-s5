'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

// Reemplazar 'any' con tipos específicos
interface FacebookPixel {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: (...args: unknown[]) => void;
  loaded: boolean;
  version: string;
  (...args: unknown[]): void;
}

declare global {
  interface Window {
    fbq: FacebookPixel;
    _fbq: FacebookPixel;
  }
}

export default function MetaPixel({ pixelId }: { pixelId: string }) {
  const pathname = usePathname()

  useEffect(() => {
    // Inicializar el pixel
    if (!window.fbq) {
      window.fbq = function(...args: unknown[]) {
        if (window.fbq.callMethod) {
          window.fbq.callMethod(...args);
        } else {
          window.fbq.queue.push(args);
        }
      } as FacebookPixel;
      
      if (!window._fbq) window._fbq = window.fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Cargar el script de Facebook
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    // Inicializar el pixel con tu ID
    window.fbq('init', pixelId)
    
    // Trackear la vista de página inicial
    window.fbq('track', 'PageView')

    // Limpiar al desmontar
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [pixelId])

  // Trackear cambios de página en navegaciones del lado del cliente
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  // Agregar el noscript para navegadores sin JavaScript
  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
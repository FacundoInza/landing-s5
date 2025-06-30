'use client'

import Link from 'next/link'
import { useLanguage } from '@/app/contexts/language-context'

interface RegisterButtonProps {
  /** Variante de tamaño del botón */
  size?: 'sm' | 'md' | 'lg'
  /** Variante de estilo */
  variant?: 'primary' | 'secondary' | 'outline'
  /** Texto personalizado (opcional, usa traducción por defecto) */
  children?: React.ReactNode
  /** URL personalizada (opcional, usa la URL por defecto) */
  href?: string
  /** Clases adicionales */
  className?: string
  /** Función onClick personalizada */
  onClick?: () => void
  /** Si debe abrir en nueva pestaña */
  openInNewTab?: boolean
  /** Si es un botón de bloque (ancho completo) */
  fullWidth?: boolean
  /** Si debe mostrar efectos reducidos (para contextos sutiles) */
  subtle?: boolean
}

export function RegisterButton({
  size = 'md',
  variant = 'primary',
  children,
  href = 'https://app.silver5ai.com/register',
  className = '',
  onClick,
  openInNewTab = true,
  fullWidth = false,
  subtle = false
}: RegisterButtonProps) {
  const { language } = useLanguage()

  // Traducciones
  const translations = {
    es: {
      registerFree: 'Regístrate gratis',
      startNow: 'Comenzar ahora',
      tryFree: 'Probar gratis',
      getStarted: 'Empezar'
    },
    en: {
      registerFree: 'Sign up free',
      startNow: 'Start now',
      tryFree: 'Try free',
      getStarted: 'Get started'
    }
  }

  const t = translations[language as keyof typeof translations]

  // Configuración de tamaños
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  }

  // Configuración de variantes
  const variantClasses = {
    primary: {
      base: 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-white border-white/20',
      hover: 'hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-600',
      glow: 'from-emerald-600/50 via-cyan-600/50 to-blue-600/50',
      shadow: 'hover:shadow-cyan-500/25'
    },
    secondary: {
      base: 'bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white border-white/20',
      hover: 'hover:from-purple-500 hover:via-pink-500 hover:to-red-500',
      glow: 'from-purple-600/50 via-pink-600/50 to-red-600/50',
      shadow: 'hover:shadow-pink-500/25'
    },
    outline: {
      base: 'bg-transparent text-white border-2 border-cyan-400/50',
      hover: 'hover:bg-gradient-to-r hover:from-cyan-400/10 hover:to-blue-400/10 hover:border-cyan-400',
      glow: 'from-cyan-600/30 via-blue-600/30 to-cyan-600/30',
      shadow: 'hover:shadow-cyan-400/20'
    }
  }

  const currentVariant = variantClasses[variant]

  // Clases base del componente
  const baseClasses = `
    relative font-semibold rounded-full
    transition-all duration-500
    shadow-lg hover:shadow-2xl
    transform hover:scale-110 hover:-translate-y-1
    group overflow-hidden backdrop-blur-sm
    ${subtle ? 'hover:scale-105 hover:-translate-y-0.5' : ''}
    ${fullWidth ? 'w-full block text-center' : 'inline-flex items-center justify-center'}
    ${sizeClasses[size]}
    ${currentVariant.base}
    ${currentVariant.hover}
    ${currentVariant.shadow}
    ${className}
  `

  const content = (
    <>
      {/* Efecto de glow de fondo */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentVariant.glow} ${subtle ? 'blur-lg' : 'blur-xl'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Efecto de brillo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      
      {/* Overlay de textura */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full"></div>
      
      {/* Puntos de luz decorativos */}
      {!subtle && (
        <>
          <div className="absolute top-1 left-1 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
          <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
        </>
      )}
      
      {/* Contenido del botón */}
      <span className="relative z-10">
        {children || t.registerFree}
      </span>
    </>
  )

  // Si tiene onClick personalizado, renderizar como button
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={baseClasses}
      >
        {content}
      </button>
    )
  }

  // Por defecto, renderizar como Link
  return (
    <Link
      href={href}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      className={baseClasses}
    >
      {content}
    </Link>
  )
} 
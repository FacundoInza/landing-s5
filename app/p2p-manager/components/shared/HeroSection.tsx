import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Play } from 'lucide-react'

interface HeroSectionProps {
  badge?: string
  title: string
  titleHighlight?: string
  titleEnd?: string
  description: string
  primaryCta: string
  secondaryCta?: string
  onPrimaryCta: () => void
  onSecondaryCta?: () => void
  backgroundVariant?: 'default' | 'chats' | 'bot' | 'orders' | 'clients' | 'ai'
  heroVisual?: ReactNode
  stats?: Array<{
    value: string
    label: string
  }>
}

const backgroundVariants = {
  default: 'from-silver5-chats via-silver5-orders to-silver5-navy',
  chats: 'from-silver5-chats via-silver5-orders to-silver5-navy',
  bot: 'from-silver5-bot via-silver5-ai to-silver5-chats',
  orders: 'from-silver5-orders via-silver5-navy to-silver5-chats',
  clients: 'from-silver5-kyc via-silver5-navy to-silver5-chats',
  ai: 'from-silver5-ai via-silver5-chats to-silver5-bot'
}

const highlightVariants = {
  default: 'text-transparent bg-clip-text bg-gradient-to-r from-silver5-chats to-silver5-orders',
  chats: 'text-transparent bg-clip-text bg-gradient-to-r from-silver5-chats to-silver5-orders',
  bot: 'text-transparent bg-clip-text bg-gradient-to-r from-silver5-bot to-silver5-ai',
  orders: 'text-transparent bg-clip-text bg-gradient-to-r from-silver5-orders to-silver5-navy',
  clients: 'text-transparent bg-clip-text bg-gradient-to-r from-silver5-kyc to-silver5-navy',
  ai: 'text-transparent bg-clip-text bg-gradient-to-r from-silver5-ai to-silver5-chats'
}

export default function HeroSection({
  badge,
  title,
  titleHighlight,
  titleEnd,
  description,
  primaryCta,
  secondaryCta,
  onPrimaryCta,
  onSecondaryCta,
  backgroundVariant = 'default',
  heroVisual,
  stats
}: HeroSectionProps) {
  return (
    <section className="py-20 relative min-h-screen flex items-center justify-center bg-gradient-to-b from-silver5-cyan-500/15 via-transparent to-transparent overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}{' '}
              {titleHighlight && (
                <span className={highlightVariants[backgroundVariant]}>
                  {titleHighlight}
                </span>
              )}
              {titleEnd && <span className="text-white"> {titleEnd}</span>}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center sm:items-start">
              {/* Botón Primario */}
              <button
                onClick={onPrimaryCta}
                className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-xl shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:scale-105 active:scale-95 min-w-[200px]"
                aria-label="Abrir formulario para ver demo personalizada"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">{primaryCta}</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              </button>

              {/* Botón Secundario */}
              {secondaryCta && onSecondaryCta && (
                <a
                  href="https://app.silver5ai.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/30 focus:scale-105 active:scale-95 min-w-[200px]"
                  aria-label="Ir a página de registro gratuito"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="tracking-wide">{secondaryCta}</span>
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              )}
            </div>

            {/* Stats */}
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual */}
          {heroVisual && (
            <div className="relative">
              <div className="relative z-10">
                {heroVisual}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-silver5-chats/20 to-silver5-orders/20 blur-3xl -z-10" />
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
} 
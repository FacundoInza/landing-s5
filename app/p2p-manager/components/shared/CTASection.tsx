import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Download, MessageSquare, Play, Zap } from 'lucide-react'
import Image from 'next/image'

interface CTAButton {
  text: string
  action: () => void
  variant: 'primary' | 'secondary' | 'outline'
  icon?: ReactNode
}

interface CTASectionProps {
  title: string
  description: string
  buttons: CTAButton[]
  variant?: 'default' | 'chats' | 'bot' | 'orders' | 'clients' | 'ai'
  urgency?: string
  guarantee?: string
  backgroundImage?: string
  testimonialQuote?: string
  testimonialAuthor?: string
  testimonialCompany?: string
}

const variantColors = {
  default: {
    bg: 'from-silver5-chats via-silver5-orders to-silver5-navy',
    accent: 'text-silver5-chats',
    primary: 'from-silver5-chats to-silver5-orders hover:from-silver5-orders hover:to-silver5-navy',
    secondary: 'from-silver5-orders to-silver5-navy hover:from-silver5-navy hover:to-silver5-chats'
  },
  chats: {
    bg: 'from-silver5-chats via-silver5-orders to-silver5-navy',
    accent: 'text-silver5-chats',
    primary: 'from-silver5-chats to-silver5-orders hover:from-silver5-orders hover:to-silver5-navy',
    secondary: 'from-silver5-orders to-silver5-navy hover:from-silver5-navy hover:to-silver5-chats'
  },
  bot: {
    bg: 'from-silver5-bot via-silver5-ai to-silver5-chats',
    accent: 'text-silver5-bot',
    primary: 'from-silver5-bot to-silver5-ai hover:from-silver5-ai hover:to-silver5-chats',
    secondary: 'from-silver5-ai to-silver5-chats hover:from-silver5-chats hover:to-silver5-bot'
  },
  orders: {
    bg: 'from-silver5-orders via-silver5-navy to-silver5-chats',
    accent: 'text-silver5-orders',
    primary: 'from-silver5-orders to-silver5-navy hover:from-silver5-navy hover:to-silver5-chats',
    secondary: 'from-silver5-navy to-silver5-chats hover:from-silver5-chats hover:to-silver5-orders'
  },
  clients: {
    bg: 'from-silver5-kyc via-silver5-navy to-silver5-chats',
    accent: 'text-silver5-kyc',
    primary: 'from-silver5-kyc to-silver5-navy hover:from-silver5-navy hover:to-silver5-chats',
    secondary: 'from-silver5-navy to-silver5-chats hover:from-silver5-chats hover:to-silver5-kyc'
  },
  ai: {
    bg: 'from-silver5-ai via-silver5-chats to-silver5-bot',
    accent: 'text-silver5-ai',
    primary: 'from-silver5-ai to-silver5-chats hover:from-silver5-chats hover:to-silver5-bot',
    secondary: 'from-silver5-chats to-silver5-bot hover:from-silver5-bot hover:to-silver5-ai'
  }
}

const defaultIcons = {
  demo: <Play className="w-5 h-5" />,
  calendar: <Calendar className="w-5 h-5" />,
  download: <Download className="w-5 h-5" />,
  contact: <MessageSquare className="w-5 h-5" />,
  start: <Zap className="w-5 h-5" />
}

export default function CTASection({
  title,
  description,
  buttons,
  variant = 'default',
  urgency,
  guarantee,
  backgroundImage,
  testimonialQuote,
  testimonialAuthor,
  testimonialCompany
}: CTASectionProps) {
  const colors = variantColors[variant]

  return (
    <section className="relative py-20 via-transparent to-transparent overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 opacity-10">
          <Image 
            src={backgroundImage} 
            alt="Background" 
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency Badge */}
        {urgency && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-sm font-medium text-red-400">{urgency}</span>
          </div>
        )}

        {/* Main Content */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Testimonial */}
        {testimonialQuote && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <blockquote className="text-lg text-gray-300 italic mb-4">
              &ldquo;{testimonialQuote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-white">{testimonialAuthor}</div>
                <div className="text-sm text-gray-400">{testimonialCompany}</div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 items-center">
          {buttons.map((button, index) => {
            if (button.variant === 'primary') {
              return (
                <button
                  key={index}
                  onClick={button.action}
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-xl shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:scale-105 active:scale-95 min-w-[200px]"
                  aria-label={`Ejecutar acción: ${button.text}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    {button.icon || defaultIcons.demo}
                    <span className="tracking-wide">{button.text}</span>
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                </button>
              )
            } else {
              return (
                <button
                  key={index}
                  onClick={button.action}
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-white/30 focus:scale-105 active:scale-95 min-w-[200px]"
                  aria-label={`Ejecutar acción: ${button.text}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    {button.icon || defaultIcons.demo}
                    <span className="tracking-wide">{button.text}</span>
                    <ArrowRight className="w-4 h-4 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )
            }
          })}
        </div>

        {/* Guarantee */}
        {guarantee && (
          <div className="flex items-center justify-center text-sm text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              {guarantee}
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">30 min</div>
              <div className="text-sm text-gray-400">Demo personalizada</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Soporte técnico</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime garantizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
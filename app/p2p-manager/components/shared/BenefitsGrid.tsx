import { ReactNode } from 'react'
import { TrendingUp, Clock, Shield, Users, DollarSign, Zap } from 'lucide-react'

interface Benefit {
  title: string
  description: string
  value?: string
  metric?: string
  icon?: ReactNode
  highlight?: boolean
}

interface BenefitsGridProps {
  title: string
  subtitle?: string
  benefits: Benefit[]
  variant?: 'default' | 'chats' | 'bot' | 'orders' | 'clients' | 'ai'
  layout?: 'grid' | 'cards'
}

const variantColors = {
  default: {
    accent: 'text-silver5-chats',
    bg: 'bg-silver5-chats/10',
    border: 'border-silver5-chats/20',
    highlight: 'from-silver5-chats to-silver5-bot'
  },
  chats: {
    accent: 'text-silver5-chats',
    bg: 'bg-silver5-chats/10',
    border: 'border-silver5-chats/20',
    highlight: 'from-silver5-chats to-silver5-orders'
  },
  bot: {
    accent: 'text-silver5-bot',
    bg: 'bg-silver5-bot/10',
    border: 'border-silver5-bot/20',
    highlight: 'from-silver5-bot to-silver5-ai'
  },
  orders: {
    accent: 'text-silver5-orders',
    bg: 'bg-silver5-orders/10',
    border: 'border-silver5-orders/20',
    highlight: 'from-silver5-orders to-silver5-navy'
  },
  clients: {
    accent: 'text-silver5-kyc',
    bg: 'bg-silver5-kyc/10',
    border: 'border-silver5-kyc/20',
    highlight: 'from-silver5-kyc to-silver5-navy'
  },
  ai: {
    accent: 'text-silver5-ai',
    bg: 'bg-silver5-ai/10',
    border: 'border-silver5-ai/20',
    highlight: 'from-silver5-ai to-silver5-chats'
  }
}

const defaultIcons = {
  time: <Clock className="w-8 h-8" />,
  money: <DollarSign className="w-8 h-8" />,
  security: <Shield className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  performance: <TrendingUp className="w-8 h-8" />,
  efficiency: <Zap className="w-8 h-8" />
}

export default function BenefitsGrid({
  title,
  subtitle,
  benefits,
  variant = 'default',
  layout = 'grid'
}: BenefitsGridProps) {
  const colors = variantColors[variant]

  return (
    <section className="py-20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className={`grid ${layout === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                ${benefit.highlight 
                  ? `bg-gradient-to-br ${colors.highlight} p-1 rounded-xl` 
                  : `${colors.bg} border ${colors.border}`
                } 
                rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 group cursor-pointer
              `}
            >
              <div className={`
                ${benefit.highlight ? 'bg-slate-900 m-1 rounded-lg' : ''} 
                p-6 h-full
              `}>
                {/* Icon */}
                <div className={`
                  ${benefit.highlight ? 'text-white' : colors.accent} 
                  mb-4 group-hover:scale-110 transition-transform duration-300
                `}>
                  {benefit.icon || defaultIcons.performance}
                </div>

                {/* Value/Metric */}
                {benefit.value && (
                  <div className="mb-4">
                    <div className={`
                      text-3xl md:text-4xl font-bold 
                      ${benefit.highlight ? 'text-white' : colors.accent}
                    `}>
                      {benefit.value}
                    </div>
                    {benefit.metric && (
                      <div className="text-sm text-gray-400 mt-1">
                        {benefit.metric}
                      </div>
                    )}
                  </div>
                )}

                {/* Content */}
                <h3 className={`
                  text-xl font-bold mb-3 
                  ${benefit.highlight ? 'text-white' : 'text-white'}
                `}>
                  {benefit.title}
                </h3>
                
                <p className={`
                  ${benefit.highlight ? 'text-gray-100' : 'text-gray-300'}
                  leading-relaxed
                `}>
                  {benefit.description}
                </p>

                {/* Hover effect indicator */}
                <div className={`
                  w-full h-1 bg-gradient-to-r ${colors.highlight} 
                  rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
            <TrendingUp className={`w-5 h-5 ${colors.accent} mr-2`} />
            <span className="text-white font-medium">
              Resultados comprobados en más de 50 implementaciones
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 
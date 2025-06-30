import { ReactNode } from 'react'
import { AlertTriangle, X, CheckCircle } from 'lucide-react'

interface PainPoint {
  problem: string
  consequence: string
  icon?: ReactNode
}

interface PainPointSectionProps {
  title: string
  subtitle?: string
  description: string
  painPoints: PainPoint[]
  solutionTitle: string
  solutionDescription: string
  solutionPoints: string[]
  variant?: 'default' | 'chats' | 'bot' | 'orders' | 'clients' | 'ai'
}

const variantColors = {
  default: {
    accent: 'text-silver5-chats',
    bg: 'bg-silver5-chats/10',
    border: 'border-silver5-chats/20',
    solution: 'from-silver5-chats to-silver5-bot'
  },
  chats: {
    accent: 'text-silver5-chats',
    bg: 'bg-silver5-chats/10',
    border: 'border-silver5-chats/20',
    solution: 'from-silver5-chats to-silver5-orders'
  },
  bot: {
    accent: 'text-silver5-bot',
    bg: 'bg-silver5-bot/10',
    border: 'border-silver5-bot/20',
    solution: 'from-silver5-bot to-silver5-ai'
  },
  orders: {
    accent: 'text-silver5-orders',
    bg: 'bg-silver5-orders/10',
    border: 'border-silver5-orders/20',
    solution: 'from-silver5-orders to-silver5-navy'
  },
  clients: {
    accent: 'text-silver5-kyc',
    bg: 'bg-silver5-kyc/10',
    border: 'border-silver5-kyc/20',
    solution: 'from-silver5-kyc to-silver5-navy'
  },
  ai: {
    accent: 'text-silver5-ai',
    bg: 'bg-silver5-ai/10',
    border: 'border-silver5-ai/20',
    solution: 'from-silver5-ai to-silver5-chats'
  }
}

export default function PainPointSection({
  title,
  subtitle,
  description,
  painPoints,
  solutionTitle,
  solutionDescription,
  solutionPoints,
  variant = 'default'
}: PainPointSectionProps) {
  const colors = variantColors[variant]

  return (
    <section className="py-20  via-transparent to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl ${colors.accent} mb-6`}>
              {subtitle}
            </p>
          )}
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pain Points */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">
                Problemas Actuales
              </h3>
            </div>

            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-red-500/5 border border-red-500/20 rounded-lg p-6 backdrop-blur-sm hover:bg-red-500/10 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {point.icon || <X className="w-6 h-6 text-red-400 mt-1" />}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {point.problem}
                    </h4>
                    <p className="text-gray-300">
                      {point.consequence}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="flex items-center mb-8">
              <CheckCircle className={`w-8 h-8 ${colors.accent} mr-3`} />
              <h3 className="text-2xl font-bold text-white">
                {solutionTitle}
              </h3>
            </div>

            <div className={`${colors.bg} border ${colors.border} rounded-lg p-6 backdrop-blur-sm`}>
              <p className="text-lg text-gray-300 mb-6">
                {solutionDescription}
              </p>

              <div className="space-y-4">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`w-5 h-5 ${colors.accent} mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action visual */}
            <div className={`bg-gradient-to-r ${colors.solution} p-6 rounded-lg text-center`}>
              <h4 className="text-xl font-bold text-white mb-2">
                ¿Listo para resolver este problema?
              </h4>
              <p className="text-white/90">
                Descubre cómo nuestro sistema puede transformar tu operación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
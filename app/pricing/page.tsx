'use client'

import { useState } from 'react'
import { Check, X, Bot, Users, Cpu, ArrowRight, Star, Crown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RegisterButton } from '@/components/RegisterButton'
import Link from 'next/link'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      id: 'basico',
      name: 'Plan Básico',
      description: 'Perfecto para arbitradores individuales',
      icon: <Bot className="w-8 h-8" />,
      price: {
        monthly: 99,
        annual: 1069
      },
      originalPrice: {
        monthly: null,
        annual: 1188
      },
      features: [
        '3 bots de posicionamiento',
        '1 cuenta de operador',
        'Gestión de chats centralizada',
        '+200 clientes verificados por mes',
        'Órdenes ilimitadas',
        'Soporte técnico básico',
        'Dashboard de métricas',
        'Configuración básica de estrategias'
      ],
      notIncluded: [
        'Agente de IA personalizado',
        'Integración API',
        'Soporte prioritario',
        'Consultoría especializada'
      ],
      buttonText: 'Comenzar ahora',
      popular: false,
      target: 'Arbitradores individuales',
      color: 'from-silver5-cyan-400 to-blue-500',
      borderColor: 'border-silver5-cyan-400/30'
    },
    {
      id: 'avanzado',
      name: 'Plan Avanzado',
      description: 'Para equipos y operaciones más grandes',
      icon: <Users className="w-8 h-8" />,
      price: {
        monthly: 299,
        annual: 3229
      },
      originalPrice: {
        monthly: null,
        annual: 3588
      },
      features: [
        '10 bots de posicionamiento',
        '5 cuentas de operador',
        'Gestión avanzada de equipos',
        '+1000 clientes verificados por mes',
        'Órdenes ilimitadas',
        'Análisis avanzado de mercado',
        'Reportes personalizados',
        'Soporte prioritario',
        'Configuración avanzada de estrategias',
        'Integración con múltiples exchanges'
      ],
      notIncluded: [
        'Agente de IA personalizado',
        'Integración API completa'
      ],
      buttonText: 'Escalar ahora',
      popular: true,
      target: 'Equipos y empresas medianas',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'empresa',
      name: 'Plan Empresa',
      description: 'Solución empresarial completa',
      icon: <Crown className="w-8 h-8" />,
      price: {
        monthly: 'Consultar',
        annual: 'Consultar'
      },
      features: [
        'Bots ilimitados',
        'Operadores ilimitados',
        'Agente de IA personalizado para P2P',
        'Integración completa vía API',
        'Clientes ilimitados',
        'Órdenes ilimitadas',
        'Soporte 24/7 dedicado',
        'Consultoría especializada',
        'Configuración personalizada',
        'SLA garantizado',
        'Capacitación del equipo',
        'Implementación asistida'
      ],
      notIncluded: [],
      buttonText: 'Contactar ventas',
      popular: false,
      target: 'Grandes empresas y VASPs',
      color: 'from-amber-400 to-orange-500',
      borderColor: 'border-amber-400/30'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-silver5-dark via-silver5-dark to-gray-900 text-white">

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-silver5-cyan-400/10 border border-silver5-cyan-400/20 text-silver5-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Planes y Precios
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Elige el plan{' '}
            <span className="bg-gradient-to-r from-silver5-cyan-400 to-silver5-chats bg-clip-text text-transparent">
              perfecto
            </span>{' '}
            para ti
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Desde arbitradores individuales hasta grandes empresas. Tenemos la solución ideal para automatizar tus operaciones P2P.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Mensual
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-silver5-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingPeriod === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Anual
            </span>
            {billingPeriod === 'annual' && (
              <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                Ahorra 10%
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-2 border-purple-400/30 scale-105' 
                    : `bg-gradient-to-b from-gray-800/30 to-gray-900/30 border ${plan.borderColor}`
                } backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-opacity-50`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Más Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-4`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Dirigido a:</div>
                    <div className="text-silver5-cyan-400 font-medium">{plan.target}</div>
                  </div>
                  
                  <div className="mb-6">
                    {typeof plan.price[billingPeriod] === 'string' ? (
                      <div className="text-3xl font-bold text-amber-400">
                        {plan.price[billingPeriod]}
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-3xl font-bold">
                            ${plan.price[billingPeriod]}
                          </span>
                          <span className="text-gray-400">
                            /{billingPeriod === 'monthly' ? 'mes' : 'año'}
                          </span>
                        </div>
                        {plan.originalPrice && plan.originalPrice[billingPeriod] && (
                          <div className="text-sm text-gray-500 line-through">
                            ${plan.originalPrice[billingPeriod]} {billingPeriod === 'monthly' ? '/mes' : '/año'}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {plan.id === 'empresa' ? (
                    <Link 
                      href="https://calendly.com/silver-5-ai/silver-5-p2p"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${plan.color} text-white hover:opacity-90`}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <RegisterButton 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                    />
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                      <Check className="w-4 h-4 mr-2" />
                      Incluido
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-3 flex items-center">
                        <X className="w-4 h-4 mr-2" />
                        No incluido
                      </h4>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-500">
                            <X className="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-400">Todo lo que necesitas saber sobre nuestros planes</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "¿Puedo cambiar de plan en cualquier momento?",
                answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se ajustará la facturación de forma proporcional."
              },
              {
                question: "¿Qué incluye el agente de IA personalizado?",
                answer: "El agente de IA personalizado del Plan Empresa incluye automatización completa de negociaciones P2P, análisis predictivo de mercado, y respuestas automáticas personalizadas según tu estrategia comercial."
              },
              {
                question: "¿Hay periodo de prueba gratuito?",
                answer: "Sí, todos los planes incluyen un periodo de prueba de 14 días completamente gratuito. No necesitas tarjeta de crédito para comenzar."
              },
              {
                question: "¿Qué soporte técnico incluye cada plan?",
                answer: "Plan Básico incluye soporte por email. Plan Avanzado incluye soporte prioritario con respuesta en 4 horas. Plan Empresa incluye soporte 24/7 con manager dedicado."
              },
              {
                question: "¿Cómo funciona la integración API?",
                answer: "La integración API está disponible solo en el Plan Empresa e incluye documentación completa, endpoints personalizados y asistencia técnica para la implementación."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6 bg-gray-800/30">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-silver5-cyan-400/10 to-silver5-chats/10 border-y border-silver5-cyan-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para automatizar tus operaciones P2P?
          </h2>
          <p className="text-gray-400 mb-8">
            Únete a cientos de arbitradores que ya confían en Silver5 AI para maximizar sus ganancias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RegisterButton variant="primary" size="lg" />
            <Link 
              href="https://calendly.com/silver-5-ai/silver-5-p2p"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
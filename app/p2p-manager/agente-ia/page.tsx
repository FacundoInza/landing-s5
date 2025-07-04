'use client'

import { useState } from 'react'
import { useLanguage } from '../../contexts/language-context'
import { 
  Bot, 
  Brain, 
  MessageCircle, 
  Zap,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Play,
  Calendar,
  ArrowRight,
  DollarSign,
  Star,
  Users,
  Activity,
  Sparkles,
  User
} from 'lucide-react'

// Componentes compartidos
import HeroSection from '../components/shared/HeroSection'
import PainPointSection from '../components/shared/PainPointSection'
import BenefitsGrid from '../components/shared/BenefitsGrid'
import CTASection from '../components/shared/CTASection'
import ContactForm from '../components/ContactForm'

export default function AgenteIAPage() {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  // Datos específicos para Agente IA
  const heroData = {
    badge: "Módulo Especializado P2P Manager",
    title: "Agente Conversacional",
    titleHighlight: "con IA Avanzada",
    titleEnd: "24/7",
    description: "Agente conversacional inteligente que atiende consultas P2P automáticamente. Modos simulado y live para máxima flexibilidad. Reduce 90% la carga de soporte mientras mejora la experiencia del cliente.",
    primaryCta: "Ver Demo Personalizada",
    secondaryCta: "Registrarte Gratis",
    stats: [
      { value: "90%", label: "Menos Consultas" },
      { value: "24/7", label: "Disponibilidad" },
      { value: "2 seg", label: "Respuesta" }
    ]
  }

  const painPointsData = {
    title: "¿Soporte P2P Saturado?",
    subtitle: "El desafío de atender consultas P2P complejas 24/7",
    description: "Las operaciones P2P generan consultas técnicas constantes. Tu equipo no puede estar disponible 24/7 y las respuestas inconsistentes afectan la confianza del cliente.",
    painPoints: [
      {
        problem: "Consultas P2P repetitivas y complejas",
        consequence: "Equipo saturado y tiempo perdido en preguntas básicas",
        icon: <MessageCircle className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Soporte limitado a horarios de oficina",
        consequence: "Clientes abandonan por falta de atención inmediata",
        icon: <Clock className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Respuestas inconsistentes del equipo",
        consequence: "Confusión del cliente y pérdida de confianza",
        icon: <AlertTriangle className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Escalamiento manual de consultas complejas",
        consequence: "Demoras y frustración en resolución de problemas",
        icon: <Users className="w-6 h-6 text-red-400" />
      }
    ],
    solutionTitle: "IA Conversacional: Soporte Inteligente",
    solutionDescription: "Agente IA especializado en P2P que maneja consultas automáticamente con precisión humana y disponibilidad 24/7.",
    solutionPoints: [
      "Respuestas instantáneas a consultas P2P",
      "Conocimiento especializado actualizado",
      "Escalamiento inteligente a humanos",
      "Disponibilidad 24/7 sin interrupciones",
      "Aprendizaje continuo de interacciones"
    ]
  }

  const benefitsData = {
    title: "Resultados del Agente IA",
    subtitle: "Impacto medible en soporte y satisfacción",
    benefits: [
      {
        title: "Reducción Consultas",
        description: "Disminución en consultas que llegan al equipo humano",
        value: "90%",
        metric: "Menos carga",
        icon: <MessageCircle className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Tiempo de Respuesta",
        description: "Respuesta inmediata a cualquier consulta P2P",
        value: "2 seg",
        metric: "Respuesta",
        icon: <Zap className="w-8 h-8" />
      },
      {
        title: "Satisfacción Cliente",
        description: "Mejora en satisfacción por atención inmediata",
        value: "+92%",
        metric: "Más satisfacción",
        icon: <Star className="w-8 h-8" />
      },
      {
        title: "Disponibilidad",
        description: "Cobertura completa sin horarios ni interrupciones",
        value: "100%",
        metric: "Uptime",
        icon: <Clock className="w-8 h-8" />
      },
      {
        title: "Costos de Soporte",
        description: "Reducción en costos operativos de atención al cliente",
        value: "75%",
        metric: "Menos costos",
        icon: <DollarSign className="w-8 h-8" />
      },
      {
        title: "Precisión Respuestas",
        description: "Exactitud en respuestas técnicas P2P especializadas",
        value: "98%",
        metric: "Precisión",
        icon: <Brain className="w-8 h-8" />
      }
    ]
  }

  const featuresData = {
    title: "Capacidades del Agente IA",
    subtitle: "Inteligencia artificial especializada en P2P",
    benefits: [
      {
        title: "Modo Simulado",
        description: "Entrena y prueba respuestas antes de activar el modo live",
        icon: <Activity className="w-8 h-8" />
      },
      {
        title: "Modo Live",
        description: "Atención real a clientes con escalamiento inteligente",
        icon: <Zap className="w-8 h-8" />
      },
      {
        title: "Conocimiento P2P",
        description: "Base de conocimiento especializada en operaciones P2P",
        icon: <Brain className="w-8 h-8" />
      },
      {
        title: "Aprendizaje Continuo",
        description: "Mejora automáticamente con cada interacción",
        icon: <Sparkles className="w-8 h-8" />
      }
    ]
  }

  const ctaData = {
    title: "¿Listo para Soporte IA 24/7?",
    description: "Únete a VASPs que ya resuelven 90% de consultas automáticamente. Implementación inmediata con modo simulado.",
    buttons: [
      {
        text: "Ver Agente IA",
        action: () => setShowForm(true),
        variant: 'primary' as const,
        icon: <Play className="w-5 h-5" />
      },
      {
        text: "Demo Interactiva",
        action: () => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, '_blank'),
        variant: 'secondary' as const,
        icon: <Calendar className="w-5 h-5" />
      }
    ],
    urgency: "🤖 IA Lista: Activación inmediata",
    guarantee: "Garantía de reducción 90% consultas en 30 días",
    testimonialQuote: "El agente IA resuelve el 92% de nuestras consultas P2P automáticamente. Nuestro equipo ahora se enfoca en casos complejos y los clientes están más satisfechos.",
    testimonialAuthor: "Roberto Silva",
    testimonialCompany: "Exchange Líder Brasil"
  }

  // Funciones para las acciones
  const handlePrimaryAction = () => {
    setShowForm(true)
  }

  const handleSecondaryAction = () => {
    window.open('https://app.silver5ai.com/register', '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        badge={heroData.badge}
        title={heroData.title}
        titleHighlight={heroData.titleHighlight}
        titleEnd={heroData.titleEnd}
        description={heroData.description}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        onPrimaryCta={handlePrimaryAction}
        onSecondaryCta={handleSecondaryAction}
        backgroundVariant="ai"
        stats={heroData.stats}
        heroVisual={
          <div className="relative">
            {/* AI Agent Chat Mockup */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-silver5-ai/20 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <Bot className="w-6 h-6 text-silver5-ai mr-2" />
                <div className="text-lg font-semibold text-white">Agente IA</div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-silver5-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-silver5-green-400">Modo Live</span>
                  </div>
                </div>
              </div>
              
              {/* AI Conversation */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-silver5-chats to-silver5-orders rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-silver5-chats/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">¿Puedes ayudarme con mi orden?</p>
                    <span className="text-xs text-silver5-chats">Cliente • 14:25</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-silver5-ai to-silver5-chats rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-silver5-ai/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">¡Por supuesto! Veo que tienes una orden de $500 USDT. ¿Necesitas actualizar el precio o tienes alguna consulta específica?</p>
                    <span className="text-xs text-silver5-ai">IA • 14:25</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-silver5-bot to-silver5-orders rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-silver5-bot/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">Perfecto, ¿puedes actualizar el precio automáticamente?</p>
                    <span className="text-xs text-silver5-bot">Cliente • 14:26</span>
                  </div>
                </div>
              </div>
              
              {/* AI Stats */}
              <div className="mt-4 pt-4 border-t border-silver5-ai/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Consultas resueltas hoy</span>
                  <span className="text-silver5-ai font-semibold">47</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-ai to-silver5-chats rounded-full flex items-center justify-center shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-kyc to-silver5-navy rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
        }
      />

      {/* Pain Points Section */}
      <PainPointSection
        title={painPointsData.title}
        subtitle={painPointsData.subtitle}
        description={painPointsData.description}
        painPoints={painPointsData.painPoints}
        solutionTitle={painPointsData.solutionTitle}
        solutionDescription={painPointsData.solutionDescription}
        solutionPoints={painPointsData.solutionPoints}
        variant="ai"
      />

      {/* Benefits Section */}
      <BenefitsGrid
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        benefits={benefitsData.benefits}
        variant="ai"
        layout="grid"
      />

      {/* Features Section */}
      <BenefitsGrid
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        benefits={featuresData.benefits}
        variant="ai"
        layout="cards"
      />

      {/* Modes Comparison Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modo Simulado vs Modo Live
            </h2>
            <p className="text-xl text-gray-300">
              Entrena y perfecciona antes de activar atención real
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Modo Simulado */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-500/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Modo Simulado</h3>
                <p className="text-gray-300">Entrena y optimiza respuestas</p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Prueba respuestas sin riesgo",
                  "Entrena con casos reales",
                  "Ajusta conocimiento base",
                  "Valida precisión antes del live",
                  "Simula diferentes escenarios"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modo Live */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-xl p-8 border border-cyan-500/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Modo Live</h3>
                <p className="text-gray-300">Atención real a clientes</p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Atención automática 24/7",
                  "Escalamiento inteligente",
                  "Respuestas en tiempo real",
                  "Aprendizaje continuo",
                  "Métricas de satisfacción"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title={ctaData.title}
        description={ctaData.description}
        buttons={ctaData.buttons}
        variant="ai"
        urgency={ctaData.urgency}
        guarantee={ctaData.guarantee}
        testimonialQuote={ctaData.testimonialQuote}
        testimonialAuthor={ctaData.testimonialAuthor}
        testimonialCompany={ctaData.testimonialCompany}
      />

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <ContactForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
} 
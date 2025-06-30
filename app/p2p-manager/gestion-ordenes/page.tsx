'use client'

import { useState } from 'react'
import { useLanguage } from '../../contexts/language-context'
import { 
  ClipboardList, 
  Zap, 
  Eye, 
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Play,
  Calendar,
  ArrowRight,
  DollarSign,
  Target,
  BarChart3
} from 'lucide-react'

// Componentes compartidos
import HeroSection from '../components/shared/HeroSection'
import PainPointSection from '../components/shared/PainPointSection'
import BenefitsGrid from '../components/shared/BenefitsGrid'
import CTASection from '../components/shared/CTASection'
import ContactForm from '../components/ContactForm'

export default function GestionOrdenesPage() {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  // Datos específicos para Gestión de Órdenes
  const heroData = {
    badge: "Módulo Especializado P2P Manager",
    title: "Gestión de Órdenes",
    titleHighlight: "Captura Automática",
    titleEnd: "y Control Total",
    description: "Captura automáticamente todas las órdenes P2P de múltiples cuentas en un panel centralizado. Nunca más pierdas una orden o tengas que buscar manualmente entre cuentas.",
    primaryCta: "Ver Panel de Órdenes",
    secondaryCta: "Descargar Flujo",
    stats: [
      { value: "100%", label: "Órdenes Capturadas" },
      { value: "0", label: "Órdenes Perdidas" },
      { value: "Real-time", label: "Sincronización" }
    ]
  }

  const painPointsData = {
    title: "¿Pierdes Órdenes por Gestión Manual?",
    subtitle: "El caos de manejar múltiples cuentas sin centralización",
    description: "Cada orden perdida es dinero que se va. La gestión manual de múltiples cuentas P2P es insostenible cuando quieres escalar.",
    painPoints: [
      {
        problem: "Revisión manual de órdenes en múltiples cuentas",
        consequence: "Pérdida de tiempo y órdenes que pasan desapercibidas",
        icon: <Eye className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Imposible priorizar órdenes por rentabilidad",
        consequence: "Atención a órdenes menos rentables primero",
        icon: <Target className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Sin visibilidad del estado de órdenes",
        consequence: "Demoras en procesamiento y pérdida de clientes",
        icon: <BarChart3 className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Reportes manuales y fragmentados",
        consequence: "Imposible optimizar operaciones o medir rendimiento",
        icon: <ClipboardList className="w-6 h-6 text-red-400" />
      }
    ],
    solutionTitle: "Gestión Centralizada: Control Total",
    solutionDescription: "Nuestro módulo captura automáticamente todas las órdenes P2P y las centraliza en un panel inteligente con priorización automática.",
    solutionPoints: [
      "Captura automática de órdenes en tiempo real",
      "Panel unificado con todas las cuentas",
      "Priorización inteligente por rentabilidad",
      "Estados y seguimiento automático",
      "Reportes detallados y analytics"
    ]
  }

  const benefitsData = {
    title: "Resultados de la Gestión Centralizada",
    subtitle: "Impacto medible en los primeros 15 días",
    benefits: [
      {
        title: "Cero Órdenes Perdidas",
        description: "Captura automática garantiza que ninguna orden pase desapercibida",
        value: "100%",
        metric: "Captura exitosa",
        icon: <Target className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Tiempo de Procesamiento",
        description: "Reducción en tiempo promedio de atención a órdenes",
        value: "70%",
        metric: "Más rápido",
        icon: <Clock className="w-8 h-8" />
      },
      {
        title: "Incremento de Ingresos",
        description: "Aumento en ingresos por mejor priorización y eficiencia",
        value: "+28%",
        metric: "Más ingresos",
        icon: <DollarSign className="w-8 h-8" />
      },
      {
        title: "Visibilidad Operativa",
        description: "Vista completa del estado de todas las órdenes en tiempo real",
        value: "360°",
        metric: "Visibilidad",
        icon: <Eye className="w-8 h-8" />
      },
      {
        title: "Eficiencia del Equipo",
        description: "Mejora en productividad del equipo de operaciones",
        value: "+85%",
        metric: "Más eficiente",
        icon: <Zap className="w-8 h-8" />
      },
      {
        title: "Precisión de Reportes",
        description: "Exactitud en reportes y métricas de rendimiento",
        value: "99.9%",
        metric: "Precisión",
        icon: <BarChart3 className="w-8 h-8" />
      }
    ]
  }

  const featuresData = {
    title: "Características del Panel de Órdenes",
    subtitle: "Tecnología avanzada para máximo control operativo",
    benefits: [
      {
        title: "Captura Automática",
        description: "Detecta y captura todas las órdenes P2P en tiempo real sin intervención manual",
        icon: <Zap className="w-8 h-8" />
      },
      {
        title: "Priorización Inteligente",
        description: "Ordena automáticamente por rentabilidad, urgencia y criterios personalizados",
        icon: <Target className="w-8 h-8" />
      },
      {
        title: "Estados en Tiempo Real",
        description: "Seguimiento automático del estado de cada orden desde creación hasta completado",
        icon: <Eye className="w-8 h-8" />
      },
      {
        title: "Analytics Avanzados",
        description: "Reportes detallados de rendimiento, tendencias y oportunidades de optimización",
        icon: <BarChart3 className="w-8 h-8" />
      }
    ]
  }

  const ctaData = {
    title: "¿Listo para Nunca Más Perder una Orden?",
    description: "Únete a VASPs que ya procesan 100% de sus órdenes de forma automática. Implementación inmediata.",
    buttons: [
      {
        text: "Ver Panel de Órdenes",
        action: () => setShowForm(true),
        variant: 'primary' as const,
        icon: <Play className="w-5 h-5" />
      },
      {
        text: "Consultoría Operativa",
        action: () => window.open(process.env.NEXT_PUBLIC_CALENDLY_URL, '_blank'),
        variant: 'secondary' as const,
        icon: <Calendar className="w-5 h-5" />
      }
    ],
    urgency: "⚡ Activación Inmediata: Hoy mismo",
    guarantee: "Garantía de captura 100% desde el día 1",
    testimonialQuote: "Desde que implementamos la gestión centralizada, no hemos perdido ni una sola orden. Nuestros ingresos aumentaron 28% en el primer mes.",
    testimonialAuthor: "Luis Fernández",
    testimonialCompany: "VASP Líder Colombia"
  }

  // Funciones para las acciones
  const handlePrimaryAction = () => {
    setShowForm(true)
  }

  const handleSecondaryAction = () => {
    window.open('/recursos/flujo-gestion-ordenes.pdf', '_blank')
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
        backgroundVariant="orders"
        stats={heroData.stats}
        heroVisual={
          <div className="relative">
            {/* Orders Dashboard Mockup */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-silver5-orders/20 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                <ClipboardList className="w-6 h-6 text-silver5-orders mr-2" />
                <div className="text-lg font-semibold text-white">Panel de Órdenes</div>
                <div className="ml-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-silver5-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-silver5-green-400">Sincronizado</span>
                  </div>
                </div>
              </div>
              
              {/* Orders List */}
              <div className="space-y-3">
                <div className="bg-silver5-orders/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Orden #1234</span>
                    <span className="text-xs bg-silver5-green-400/20 text-silver5-green-400 px-2 py-1 rounded-full">Completada</span>
                  </div>
                  <div className="text-xs text-gray-400">USDT → ARS • $500 • Cliente: Juan P.</div>
                </div>
                
                <div className="bg-silver5-chats/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Orden #1235</span>
                    <span className="text-xs bg-silver5-orders/20 text-silver5-orders px-2 py-1 rounded-full">En proceso</span>
                  </div>
                  <div className="text-xs text-gray-400">BTC → USD • $1,200 • Cliente: Maria L.</div>
                </div>
                
                <div className="bg-silver5-bot/20 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">Orden #1236</span>
                    <span className="text-xs bg-silver5-ai/20 text-silver5-ai px-2 py-1 rounded-full">Pendiente</span>
                  </div>
                  <div className="text-xs text-gray-400">ETH → USDT • $800 • Cliente: Carlos R.</div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-silver5-orders/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-silver5-orders">24</div>
                    <div className="text-xs text-gray-400">Completadas</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-silver5-chats">3</div>
                    <div className="text-xs text-gray-400">En proceso</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-silver5-ai">1</div>
                    <div className="text-xs text-gray-400">Pendientes</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-orders to-silver5-navy rounded-full flex items-center justify-center shadow-lg">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-chats to-silver5-bot rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
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
        variant="orders"
      />

      {/* Benefits Section */}
      <BenefitsGrid
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        benefits={benefitsData.benefits}
        variant="orders"
        layout="grid"
      />

      {/* Features Section */}
      <BenefitsGrid
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        benefits={featuresData.benefits}
        variant="orders"
        layout="cards"
      />

      {/* How it Works Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Cómo Funciona la Captura Automática?
            </h2>
            <p className="text-xl text-gray-300">
              Proceso automático sin intervención manual
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Conexión Automática",
                description: "Se conecta a todas tus cuentas P2P y comienza la captura inmediatamente"
              },
              {
                step: "02", 
                title: "Detección Inteligente",
                description: "Identifica automáticamente nuevas órdenes y cambios de estado en tiempo real"
              },
              {
                step: "03",
                title: "Priorización Automática",
                description: "Ordena por rentabilidad, urgencia y criterios personalizados"
              },
              {
                step: "04",
                title: "Seguimiento Completo",
                description: "Monitorea el estado de cada orden hasta su completado y genera reportes"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-silver5-orders to-silver5-navy rounded-full text-white font-bold text-xl mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title={ctaData.title}
        description={ctaData.description}
        buttons={ctaData.buttons}
        variant="orders"
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
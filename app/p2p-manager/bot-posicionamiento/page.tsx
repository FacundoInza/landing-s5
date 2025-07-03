'use client'

import { useState } from 'react'
import { useLanguage } from '../../contexts/language-context'
import { 
  Bot, 
  Zap, 
  Target, 
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  Play,
  Calendar,
  ArrowRight,
  DollarSign,
  Activity,
  Settings,
  ArrowUp
} from 'lucide-react'
import Image from 'next/image'

// Componentes compartidos
import HeroSection from '../components/shared/HeroSection'
import PainPointSection from '../components/shared/PainPointSection'
import BenefitsGrid from '../components/shared/BenefitsGrid'
import CTASection from '../components/shared/CTASection'
import ContactForm from '../components/ContactForm'

export default function BotPosicionamientoPage() {
  const { language } = useLanguage()
  const [showForm, setShowForm] = useState(false)

  // Datos específicos para Bot de Posicionamiento
  const heroData = {
    badge: "Módulo Especializado P2P Manager",
    title: "Bot de Posicionamiento",
    titleHighlight: "Automático 24/7",
    titleEnd: "con 3 Modos Inteligentes",
    description: "Automatiza completamente la actualización de precios en tus anuncios P2P. Conservador, Agresivo o Precio Fijo. Mantén siempre la mejor posición sin intervención manual.",
    primaryCta: "Ver Demo Personalizada",
    secondaryCta: "Registrarte Gratis",
    stats: [
      { value: "24/7", label: "Operación Continua" },
      { value: "3", label: "Modos Inteligentes" },
      { value: "99.9%", label: "Precisión Precios" }
    ]
  }

  const painPointsData = {
    title: "¿Pierdes Ventas por Precios Desactualizados?",
    subtitle: "El costo oculto de la actualización manual de precios",
    description: "Cada minuto que tus precios no están optimizados, pierdes oportunidades de venta. La competencia automatizada te está dejando atrás.",
    painPoints: [
      {
        problem: "Actualización manual de precios todo el día",
        consequence: "Pérdida de tiempo valioso y oportunidades de negocio",
        icon: <Clock className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Precios desactualizados durante horas/días",
        consequence: "Pérdida directa de ventas y posicionamiento competitivo",
        icon: <TrendingUp className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Imposible monitorear competencia 24/7",
        consequence: "Reacción tardía a cambios de mercado",
        icon: <Target className="w-6 h-6 text-red-400" />
      },
      {
        problem: "Estrategias de pricing inconsistentes",
        consequence: "Rentabilidad impredecible y decisiones emocionales",
        icon: <Activity className="w-6 h-6 text-red-400" />
      }
    ],
    solutionTitle: "Bot de Posicionamiento: Automatización Inteligente",
    solutionDescription: "Nuestro bot actualiza automáticamente tus precios las 24 horas, con 3 estrategias probadas para maximizar ventas y rentabilidad.",
    solutionPoints: [
      "Modo Conservador: Mantiene margen de seguridad",
      "Modo Agresivo: Maximiza volumen de ventas",
      "Modo Precio Fijo: Control total de márgenes",
      "Monitoreo continuo de competencia",
      "Ajustes automáticos según volatilidad del mercado"
    ]
  }

  const benefitsData = {
    title: "Resultados del Bot de Posicionamiento",
    subtitle: "Métricas reales de clientes en los primeros 30 días",
    benefits: [
      {
        title: "Incremento en Ventas",
        description: "Aumento promedio en volumen de transacciones por mejor posicionamiento",
        value: "+45%",
        metric: "Más ventas",
        icon: <DollarSign className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Ahorro de Tiempo",
        description: "Horas semanales ahorradas en actualización manual de precios",
        value: "25hrs",
        metric: "Semanales ahorradas",
        icon: <Clock className="w-8 h-8" />
      },
      {
        title: "Mejora en Posicionamiento",
        description: "Porcentaje de tiempo en top 3 de resultados de búsqueda",
        value: "85%",
        metric: "Top 3 posición",
        icon: <Target className="w-8 h-8" />
      },
      {
        title: "Consistencia Operativa",
        description: "Uptime del bot y precisión en actualizaciones de precios",
        value: "99.9%",
        metric: "Precisión",
        icon: <Shield className="w-8 h-8" />
      },
      {
        title: "Respuesta al Mercado",
        description: "Tiempo promedio de reacción a cambios de precios competitivos",
        value: "30seg",
        metric: "Tiempo respuesta",
        icon: <Zap className="w-8 h-8" />
      },
      {
        title: "ROI Comprobado",
        description: "Retorno de inversión promedio en el primer trimestre",
        value: "340%",
        metric: "ROI",
        icon: <TrendingUp className="w-8 h-8" />
      }
    ]
  }

  const modesData = {
    title: "3 Modos de Operación Inteligente",
    subtitle: "Elige la estrategia perfecta para cada situación de mercado",
    benefits: [
      {
        title: "Modo Conservador",
        description: "Mantiene márgenes seguros mientras optimiza posicionamiento. Ideal para productos de alto valor.",
        icon: <Shield className="w-8 h-8" />,
        highlight: false
      },
      {
        title: "Modo Agresivo",
        description: "Maximiza volumen de ventas compitiendo agresivamente en precios. Perfecto para alta rotación.",
        icon: <Zap className="w-8 h-8" />,
        highlight: true
      },
      {
        title: "Modo Precio Fijo",
        description: "Control total sobre márgenes con precios predefinidos. Para estrategias específicas de rentabilidad.",
        icon: <Target className="w-8 h-8" />,
        highlight: false
      },
      {
        title: "Configuración Personalizada",
        description: "Ajusta parámetros específicos por par de monedas, horarios y condiciones de mercado.",
        icon: <Settings className="w-8 h-8" />,
        highlight: false
      }
    ]
  }

  const ctaData = {
    title: "¿Listo para Automatizar tu Posicionamiento P2P?",
    description: "Únete a traders que ya generan +45% más ventas con nuestro bot inteligente. Configuración en menos de 30 minutos.",
    buttons: [
      {
        text: "Ver Demo Personalizada",
        action: () => setShowForm(true),
        variant: 'primary' as const,
        icon: <Play className="w-5 h-5" />
      },
      {
        text: "Registrarte Gratis",
        action: () => window.open('https://app.silver5ai.com/register', '_blank'),
        variant: 'secondary' as const,
        icon: <CheckCircle className="w-5 h-5" />
      }
    ],
    urgency: "🚀 Setup Express: 30 minutos",
    guarantee: "Prueba gratuita de 7 días sin compromiso",
    testimonialQuote: "El bot incrementó nuestras ventas 45% en el primer mes. Nunca más nos preocupamos por actualizar precios manualmente.",
    testimonialAuthor: "Roberto Silva",
    testimonialCompany: "OTC Partners Brasil"
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
        backgroundVariant="bot"
        stats={heroData.stats}
        heroVisual={
          <div className="relative">
            {/* Binance Integration Badge - Más grande y llamativo */}
            <div className="absolute -top-6 -right-0 z-10 bg-gradient-to-br from-silver5-bot/20 to-silver5-ai/20 backdrop-blur-sm border-2 border-silver5-bot/40 rounded-full p-4 hover:scale-110 hover:border-silver5-bot/60 transition-all duration-300 shadow-lg hover:shadow-silver5-bot/25">
              <Image
                src="/Binance.svg"
                alt="Integración oficial con Binance"
                width={60}
                height={60}
                className="opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Bots Laptop Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/bots-laptop.png"
                alt="Bot de Posicionamiento Dashboard - Automatización de precios P2P Binance"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay con información adicional - Más prominente */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/Binance-3.svg"
                    alt="Powered by Binance"
                    width={100}
                    height={25}
                    className="opacity-90"
                  />
                  <div className="h-6 w-px bg-white/40"></div>
                  <span className="text-white text-base font-semibold">Bot de Posicionamiento</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements específicos para Bot */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-bot to-silver5-ai rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Bot className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-chats to-silver5-orders rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
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
        variant="bot"
      />

      {/* Benefits Section */}
      <BenefitsGrid
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        benefits={benefitsData.benefits}
        variant="bot"
        layout="grid"
      />

      {/* Modes Section */}
      <BenefitsGrid
        title={modesData.title}
        subtitle={modesData.subtitle}
        benefits={modesData.benefits}
        variant="bot"
        layout="cards"
      />

      {/* How it Works Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Cómo Funciona el Bot?
            </h2>
            <p className="text-xl text-gray-300">
              Configuración simple, resultados automáticos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Configuración Inicial",
                description: "Define tus parámetros de riesgo, márgenes mínimos y estrategia por par de monedas"
              },
              {
                step: "02", 
                title: "Monitoreo Continuo",
                description: "El bot analiza precios competitivos y condiciones de mercado cada 30 segundos"
              },
              {
                step: "03",
                title: "Ajuste Automático",
                description: "Actualiza tus precios automáticamente según la estrategia seleccionada"
              },
              {
                step: "04",
                title: "Reportes en Tiempo Real",
                description: "Recibe notificaciones y reportes detallados de rendimiento y ajustes realizados"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-bold text-xl mb-6">
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
        variant="bot"
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
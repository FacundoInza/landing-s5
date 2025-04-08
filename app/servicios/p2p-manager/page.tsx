'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, Shield, Code, Cpu, Mail, MapPin, Clock, CheckCircle, ChevronRight, Laptop, MessageSquare, LockKeyhole, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver5-ai';

export default function P2PManagerPage() {
  const { language } = useLanguage();
  
  // Traducciones específicas para esta página
  const translations = {
    es: {
      hero: {
        badge: 'Sistema de Gestión P2P',
        title: 'Centralice, Optimice y Controle',
        titleHighlight: 'todas sus Operaciones P2P',
        titleEnd: 'de Binance',
        description: 'Silver P2P Manager - la plataforma definitiva diseñada específicamente para VASPs, Exchanges y proveedores de servicios OTC Crypto que necesitan maximizar la eficiencia de sus operaciones P2P en Binance.',
        primaryCta: 'Solicitar Demo',
        secondaryCta: 'Contáctanos',
      },
      features: {
        title: 'Una plataforma. Control total.',
        subtitle: 'Solución Avanzada para VASPs y Exchanges Crypto',
        description: 'Silver P2P Manager revoluciona la forma en que las empresas financieras gestionan sus operaciones P2P.',
      },
      keyFeatures: [
        {
          title: "Gestión Centralizada",
          description: "Integre todas sus cuentas de Binance en un único panel de control con trazabilidad total y funcionalidades de compliance integradas.",
          icon: <Laptop className="h-12 w-12 text-cyan-400" />,
          points: [
            "Integración de múltiples cuentas Binance",
            "Operación sin acceso a credenciales",
            "Registro automático de órdenes",
            "Validación AML/KYC integrada"
          ]
        },
        {
          title: "Automatización Inteligente",
          description: "Maximice su posicionamiento en el mercado P2P de Binance con nuestro bot de trading automatizado integrado en la plataforma.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "Posicionamiento automático 24/7",
            "Estrategias personalizables",
            "Optimización de precios inteligente",
            "Control total de parámetros"
          ]
        },
        {
          title: "Chat Centralizado",
          description: "Gestione todas las comunicaciones con sus clientes desde una interfaz unificada con historial completo y notificaciones en tiempo real.",
          icon: <MessageSquare className="h-12 w-12 text-green-400" />,
          points: [
            "Panel unificado de conversaciones",
            "Historial completo de chats",
            "Notificaciones en tiempo real",
            "Asignación de operadores"
          ]
        },
        {
          title: "Seguridad y Compliance",
          description: "Diseñado pensando en los estrictos requisitos regulatorios para operadores de Stablecoins y Crypto con validación automática.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Validación con listas de riesgo",
            "Auditoría completa de transacciones",
            "Reglas personalizables de compliance",
            "Arquitectura segura certificada"
          ]
        }
      ],
      otcPartners: {
        title: "Ideal Para Partners OTC Crypto",
        description: "Optimice sus operaciones mayoristas de compra/venta de criptomonedas y Stablecoins con herramientas especializadas para grandes volúmenes y gestión eficiente de liquidez.",
        features: [
          "Gestión de grandes volúmenes",
          "Tracking de liquidez en tiempo real",
          "Reportes personalizados de operaciones",
          "Optimización de spreads automática"
        ]
      },
      demo: {
        title: "Vea la plataforma en acción",
        description: "Solicite una demostración personalizada y descubra cómo Silver P2P Manager puede transformar sus operaciones P2P.",
        cta: "Solicitar Demostración"
      },
      benefits: {
        title: "Beneficios comprobados",
        items: [
          {
            title: "Eficiencia Operativa",
            description: "Reduzca hasta un 80% el tiempo dedicado a la gestión manual de operaciones P2P.",
            value: "80%"
          },
          {
            title: "Seguridad Mejorada",
            description: "Minimice riesgos operativos con un sistema de permisos y validaciones multinivel.",
            value: "100%"
          },
          {
            title: "Cumplimiento Normativo",
            description: "Asegure el cumplimiento regulatorio con validaciones automáticas KYC/AML.",
            value: "24/7"
          },
          {
            title: "Experiencia de Cliente",
            description: "Mejore la satisfacción con tiempos de respuesta optimizados en órdenes P2P.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "¿Listo para transformar sus operaciones P2P?",
        description: "Únase a los principales VASPs y exchanges que ya optimizan sus operaciones con Silver P2P Manager.",
        primary: "Solicitar Demo",
        secondary: "Hablar con un Especialista"
      }
    },
    en: {
      hero: {
        badge: 'P2P Management System',
        title: 'Centralize, Optimize and Control',
        titleHighlight: 'all your P2P Operations',
        titleEnd: 'on Binance',
        description: 'Silver P2P Manager - the ultimate platform specifically designed for VASPs, Exchanges and Crypto OTC service providers who need to maximize the efficiency of their P2P operations on Binance.',
        primaryCta: 'Request Demo',
        secondaryCta: 'Contact Us',
      },
      features: {
        title: 'One platform. Total control.',
        subtitle: 'Advanced Solution for VASPs and Crypto Exchanges',
        description: 'Silver P2P Manager revolutionizes how financial companies manage their P2P operations.',
      },
      keyFeatures: [
        {
          title: "Centralized Management",
          description: "Integrate all your Binance accounts into a single dashboard with complete traceability and integrated compliance features.",
          icon: <Laptop className="h-12 w-12 text-cyan-400" />,
          points: [
            "Multiple Binance account integration",
            "Operation without credential access",
            "Automatic order logging",
            "Integrated AML/KYC validation"
          ]
        },
        {
          title: "Intelligent Automation",
          description: "Maximize your positioning in Binance's P2P market with our automated trading bot integrated into the platform.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "Automatic positioning 24/7",
            "Customizable strategies",
            "Intelligent price optimization",
            "Complete parameter control"
          ]
        },
        {
          title: "Centralized Chat",
          description: "Manage all communications with your customers from a unified interface with complete history and real-time notifications.",
          icon: <MessageSquare className="h-12 w-12 text-green-400" />,
          points: [
            "Unified conversation panel",
            "Complete chat history",
            "Real-time notifications",
            "Operator assignment"
          ]
        },
        {
          title: "Security and Compliance",
          description: "Designed with the strict regulatory requirements for Stablecoin and Crypto operators in mind with automatic validation.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Validation with risk lists",
            "Complete transaction audit",
            "Customizable compliance rules",
            "Certified secure architecture"
          ]
        }
      ],
      otcPartners: {
        title: "Ideal For Crypto OTC Partners",
        description: "Optimize your wholesale cryptocurrency and Stablecoin buying/selling operations with specialized tools for large volumes and efficient liquidity management.",
        features: [
          "Large volume management",
          "Real-time liquidity tracking",
          "Custom operation reports",
          "Automatic spread optimization"
        ]
      },
      demo: {
        title: "See the platform in action",
        description: "Request a personalized demonstration and discover how Silver P2P Manager can transform your P2P operations.",
        cta: "Request Demonstration"
      },
      benefits: {
        title: "Proven benefits",
        items: [
          {
            title: "Operational Efficiency",
            description: "Reduce time spent on manual P2P operations management by up to 80%.",
            value: "80%"
          },
          {
            title: "Enhanced Security",
            description: "Minimize operational risks with a multi-level permissions and validations system.",
            value: "100%"
          },
          {
            title: "Regulatory Compliance",
            description: "Ensure regulatory compliance with automatic KYC/AML validations.",
            value: "24/7"
          },
          {
            title: "Customer Experience",
            description: "Improve satisfaction with optimized response times on P2P orders.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "Ready to transform your P2P operations?",
        description: "Join the leading VASPs and exchanges already optimizing their operations with Silver P2P Manager.",
        primary: "Request Demo",
        secondary: "Talk to a Specialist"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
          
          {/* Elementos gráficos financieros */}
          <div className="absolute top-1/4 right-[15%] animate-pulse">
            <div className="text-cyan-400 opacity-30 text-6xl font-bold">₿</div>
          </div>
          <div className="absolute bottom-1/3 left-[15%] animate-pulse delay-300">
            <div className="text-purple-400 opacity-30 text-6xl font-bold">Ξ</div>
          </div>
          
          {/* Gráfico de trading estilizado */}
          <div className="absolute bottom-1/4 right-[30%] w-32 h-16 opacity-20">
            <svg viewBox="0 0 100 50" className="w-full h-full">
              <path d="M0,25 L10,20 L20,30 L30,15 L40,25 L50,10 L60,20 L70,5 L80,15 L90,10 L100,20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    className="text-cyan-400" />
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {t.hero.title} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link href={calendlyUrl}>
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 w-full">
                    {t.hero.primaryCta}
                  </Button>
                </Link>
                <Link href="#contacto">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 w-full">
                    {t.hero.secondaryCta}
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image - Dashboard Mockup */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-400/20 blur-xl rounded-xl"></div>
                <div className="relative bg-gray-900 border-2 border-cyan-400 rounded-lg overflow-hidden shadow-2xl">
                  {/* Mockup header */}
                  <div className="bg-gray-800 p-2 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-sm text-gray-400">manager.silver5ai.com</div>
                  </div>
                  
                  {/* Dashboard de Silver P2P Manager */}
                  <div className="p-4">
                    {/* Barra de navegación */}
                    <div className="bg-gray-800 p-3 rounded-md mb-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center mr-2">
                            <span className="text-xs font-bold text-gray-900">S5</span>
                          </div>
                          <div className="text-cyan-400 font-medium">Silver P2P Manager</div>
                        </div>
                        <div className="bg-green-500 text-xs px-2 py-1 rounded-full text-white">Activo</div>
                      </div>
                    </div>
                    
                    {/* Panel principal con stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-gray-800 p-3 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Cuentas</div>
                        <div className="text-xl font-bold text-white">12</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Órdenes</div>
                        <div className="text-xl font-bold text-cyan-400">128</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Volumen</div>
                        <div className="text-xl font-bold text-green-400">$25K</div>
                      </div>
                    </div>
                    
                    {/* Lista de órdenes activas */}
                    <div className="bg-gray-800 p-3 rounded-md mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-white font-medium">Órdenes Activas</div>
                        <div className="bg-cyan-400 text-xs px-2 py-0.5 rounded-full text-gray-900">8</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-900 p-2 rounded-md border border-gray-700">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm">Orden #58923</span>
                            </div>
                            <span className="text-xs text-cyan-400">USDT/COP</span>
                          </div>
                          <div className="flex justify-between mt-1 text-xs">
                            <span className="text-gray-400">4.100 COP</span>
                            <span className="text-gray-400">500 USDT</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-900 p-2 rounded-md border border-gray-700">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                              <span className="text-sm">Orden #58924</span>
                            </div>
                            <span className="text-xs text-cyan-400">BTC/USD</span>
                          </div>
                          <div className="flex justify-between mt-1 text-xs">
                            <span className="text-gray-400">55,420 USD</span>
                            <span className="text-gray-400">0.25 BTC</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Panel de Chats */}
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="flex items-center mb-2">
                        <MessageSquare className="h-4 w-4 text-cyan-400 mr-2" />
                        <div className="text-white font-medium">Chats Recientes</div>
                      </div>
                      
                      <div className="bg-gray-900 p-2 rounded-md border border-gray-700">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-purple-400/30 flex items-center justify-center mr-2">
                              <span className="text-xs font-medium">JD</span>
                            </div>
                            <span className="text-sm">Juan D.</span>
                          </div>
                          <span className="text-xs text-gray-400">hace 2 min</span>
                        </div>
                        <div className="mt-1 text-xs text-gray-400 truncate">
                          Hola, quisiera confirmar el método de pago para...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Panel Administrativo
                </div>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <div className="text-cyan-400 opacity-70 text-4xl font-bold">₿</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-cyan-400 text-xl mb-6">{t.features.subtitle}</p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t.features.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl p-8 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 flex flex-col h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 mb-6 inline-block group-hover:bg-gray-800/80 transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTC Partners Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Content */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
                Partners OTC
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.otcPartners.title}</h2>
              <p className="text-gray-400 mb-8">
                {t.otcPartners.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {t.otcPartners.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-cyan-400/10 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-6 py-3 font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40">
                  {t.demo.cta}
                </Button>
              </Link>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-400/20 blur-xl rounded-xl"></div>
                <div className="relative overflow-hidden rounded-xl border-2 border-cyan-400">
                  <Image 
                    src="/otc-dashboard.png" 
                    alt="OTC Dashboard" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Panel OTC Avanzado</h3>
                      <p className="text-gray-300 text-sm">
                        Herramientas especializadas para operaciones de alto volumen con múltiples contrapartes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              Resultados Comprobados
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.benefits.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Nuestros clientes han experimentado mejoras significativas en sus operaciones P2P.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {item.value}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              ¿Listo para comenzar?
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 w-full sm:w-auto">
                  {t.cta.primary}
                </Button>
              </Link>
              <Link href="#contacto">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                  {t.cta.secondary}
                </Button>
              </Link>
            </div>
            
            {/* Logos de clientes (placeholders) */}
            <div className="mt-16">
              <p className="text-sm text-gray-500 mb-6">Confían en nosotros:</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                <div className="h-8 w-24 bg-gray-700 rounded"></div>
                <div className="h-8 w-16 bg-gray-700 rounded"></div>
                <div className="h-8 w-20 bg-gray-700 rounded"></div>
                <div className="h-8 w-24 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
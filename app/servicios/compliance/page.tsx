'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, CheckCircle, FileCheck, AlertTriangle, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver-5-ai/silver-5-p2p';

export default function CompliancePage() {
  const { language } = useLanguage();
  
  // Traducciones específicas para esta página
  const translations = {
    es: {
      hero: {
        badge: 'Cumplimiento Normativo',
        title: 'Soluciones de',
        titleHighlight: 'Compliance AML/KYC',
        titleEnd: 'para VASPs',
        description: 'Automatice y optimice sus procesos de cumplimiento normativo con nuestra solución integral diseñada específicamente para proveedores de servicios de activos virtuales.',
        primaryCta: 'Solicitar Demo',
        secondaryCta: 'Explorar Solución',
      },
      features: {
        title: 'Compliance automatizado para el mundo cripto',
        subtitle: 'Cumpla con todas las regulaciones sin sacrificar eficiencia',
        description: 'Nuestra solución integra las últimas tecnologías para garantizar el cumplimiento normativo mientras optimiza los recursos operativos.',
      },
      keyFeatures: [
        {
          title: "Validación KYC Avanzada",
          description: "Automatice la verificación de identidad de clientes con herramientas de última generación que garantizan la precisión y cumplen con estándares globales.",
          icon: <FileCheck className="h-12 w-12 text-cyan-400" />,
          points: [
            "Verificación de documentos con IA",
            "Biometría facial y detección de vida",
            "Validación contra bases PEP y sanciones",
            "Flujos de verificación personalizables"
          ]
        },
        {
          title: "Monitoreo AML en Tiempo Real",
          description: "Detecte actividades sospechosas al instante con nuestro sistema de monitoreo continuo y evaluación de riesgos basado en inteligencia artificial.",
          icon: <AlertTriangle className="h-12 w-12 text-purple-400" />,
          points: [
            "Análisis de patrones transaccionales",
            "Evaluación de riesgo en tiempo real",
            "Alertas configurables por nivel de riesgo",
            "Integración con blockchain analytics"
          ]
        },
        {
          title: "Reportería Regulatoria",
          description: "Genere automáticamente informes de cumplimiento para presentar a reguladores, ahorrando tiempo y recursos a su equipo de compliance.",
          icon: <BarChart3 className="h-12 w-12 text-green-400" />,
          points: [
            "Reportes SAR/STR automatizados",
            "Plantillas adaptadas a regulaciones locales",
            "Histórico completo de actividades",
            "Exportación en múltiples formatos"
          ]
        },
        {
          title: "Cumplimiento Travel Rule",
          description: "Cumpla con la regla de viaje FATF con nuestra solución integrada para el intercambio seguro de información entre VASPs.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Compatibilidad con protocolos estándar",
            "Transferencia segura de datos",
            "Validación automática de contrapartes",
            "Auditoría completa de transferencias"
          ]
        }
      ],
      dashboard: {
        title: "Panel de Control Compliance",
        description: "Visualice todos sus métricas de cumplimiento en un único panel intuitivo que facilita la gestión y seguimiento de actividades.",
        features: [
          "Vista 360° de actividades KYC/AML",
          "Métricas de eficiencia y tiempos de respuesta",
          "Seguimiento de casos por estado",
          "Cuadros de mando personalizables"
        ]
      },
      integration: {
        title: "Integración perfecta con sus sistemas",
        description: "Nuestra solución se adapta a su infraestructura existente, conectándose con cualquier plataforma mediante APIs seguras y robustas.",
        items: [
          {
            title: "Integración con Exchanges",
            description: "Conectamos con Binance, Coinbase y otras plataformas para automatizar la validación de transacciones."
          },
          {
            title: "Conexión con Sistemas CRM",
            description: "Sincronizamos datos de clientes con sus sistemas actuales para mantener una visión unificada."
          },
          {
            title: "APIs RESTful Documentadas",
            description: "Ofrecemos APIs completas para integrar con cualquier sistema o desarrollo personalizado."
          },
          {
            title: "Single Sign-On (SSO)",
            description: "Compatible con su sistema de autenticación actual para una experiencia fluida."
          }
        ]
      },
      benefits: {
        title: "Beneficios comprobados",
        items: [
          {
            title: "Reducción de Costos",
            description: "Reduzca hasta un 70% los costos operativos relacionados con procesos manuales de compliance.",
            value: "70%"
          },
          {
            title: "Mayor Eficiencia",
            description: "Automatice hasta un 90% de los procesos de KYC/AML que tradicionalmente requieren intervención manual.",
            value: "90%"
          },
          {
            title: "Precisión Mejorada",
            description: "Reduzca los falsos positivos en la detección de actividades sospechosas.",
            value: "95%"
          },
          {
            title: "Tiempo Real",
            description: "Monitoreo continuo 24/7 de todas las transacciones y actividades con alertas instantáneas.",
            value: "24/7"
          }
        ]
      },
      cta: {
        title: "¿Listo para transformar su estrategia de compliance?",
        description: "Únase a los principales VASPs que ya cumplen eficientemente con todas las regulaciones gracias a nuestra plataforma.",
        primary: "Solicitar Demo",
        secondary: "Consultar con Especialista"
      }
    },
    en: {
      hero: {
        badge: 'Regulatory Compliance',
        title: 'AML/KYC',
        titleHighlight: 'Compliance Solutions',
        titleEnd: 'for VASPs',
        description: 'Automate and optimize your regulatory compliance processes with our comprehensive solution specifically designed for virtual asset service providers.',
        primaryCta: 'Request Demo',
        secondaryCta: 'Explore Solution',
      },
      features: {
        title: 'Automated compliance for the crypto world',
        subtitle: 'Meet all regulations without sacrificing efficiency',
        description: 'Our solution integrates the latest technologies to ensure regulatory compliance while optimizing operational resources.',
      },
      keyFeatures: [
        {
          title: "Advanced KYC Validation",
          description: "Automate customer identity verification with cutting-edge tools that ensure accuracy and comply with global standards.",
          icon: <FileCheck className="h-12 w-12 text-cyan-400" />,
          points: [
            "AI-powered document verification",
            "Facial biometrics and liveness detection",
            "Validation against PEP and sanctions databases",
            "Customizable verification workflows"
          ]
        },
        {
          title: "Real-Time AML Monitoring",
          description: "Detect suspicious activities instantly with our continuous monitoring system and AI-based risk assessment.",
          icon: <AlertTriangle className="h-12 w-12 text-purple-400" />,
          points: [
            "Transactional pattern analysis",
            "Real-time risk assessment",
            "Configurable risk-level alerts",
            "Blockchain analytics integration"
          ]
        },
        {
          title: "Regulatory Reporting",
          description: "Automatically generate compliance reports for submission to regulators, saving time and resources for your compliance team.",
          icon: <BarChart3 className="h-12 w-12 text-green-400" />,
          points: [
            "Automated SAR/STR reports",
            "Templates adapted to local regulations",
            "Complete activity history",
            "Export in multiple formats"
          ]
        },
        {
          title: "Travel Rule Compliance",
          description: "Comply with the FATF Travel Rule with our integrated solution for secure information exchange between VASPs.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Compatibility with standard protocols",
            "Secure data transfer",
            "Automatic counterparty validation",
            "Complete transfer audit"
          ]
        }
      ],
      dashboard: {
        title: "Compliance Control Panel",
        description: "Visualize all your compliance metrics in a single intuitive dashboard that facilitates the management and tracking of activities.",
        features: [
          "360° view of KYC/AML activities",
          "Efficiency metrics and response times",
          "Case tracking by status",
          "Customizable dashboards"
        ]
      },
      integration: {
        title: "Seamless integration with your systems",
        description: "Our solution adapts to your existing infrastructure, connecting with any platform through secure and robust APIs.",
        items: [
          {
            title: "Exchange Integration",
            description: "We connect with Binance, Coinbase and other platforms to automate transaction validation."
          },
          {
            title: "CRM System Connection",
            description: "We synchronize customer data with your current systems to maintain a unified view."
          },
          {
            title: "Documented RESTful APIs",
            description: "We offer complete APIs to integrate with any system or custom development."
          },
          {
            title: "Single Sign-On (SSO)",
            description: "Compatible with your current authentication system for a seamless experience."
          }
        ]
      },
      benefits: {
        title: "Proven benefits",
        items: [
          {
            title: "Cost Reduction",
            description: "Reduce operational costs related to manual compliance processes by up to 70%.",
            value: "70%"
          },
          {
            title: "Greater Efficiency",
            description: "Automate up to 90% of KYC/AML processes that traditionally require manual intervention.",
            value: "90%"
          },
          {
            title: "Improved Accuracy",
            description: "Reduce false positives in detecting suspicious activities.",
            value: "95%"
          },
          {
            title: "Real Time",
            description: "Continuous 24/7 monitoring of all transactions and activities with instant alerts.",
            value: "24/7"
          }
        ]
      },
      cta: {
        title: "Ready to transform your compliance strategy?",
        description: "Join the leading VASPs that already efficiently comply with all regulations thanks to our platform.",
        primary: "Request Demo",
        secondary: "Consult with Specialist"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/15 via-transparent to-transparent" />
          
          {/* Elementos decorativos */}
          <div className="absolute top-1/4 right-[15%] animate-pulse">
            <Shield className="h-20 w-20 text-purple-400 opacity-20" />
          </div>
          <div className="absolute bottom-1/3 left-[15%] animate-pulse delay-300">
            <FileCheck className="h-20 w-20 text-cyan-400 opacity-20" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-6">
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {t.hero.title} <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link href={calendlyUrl}>
                  <Button className="bg-purple-400 hover:bg-purple-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 w-full">
                    {t.hero.primaryCta}
                  </Button>
                </Link>
                <Link href="#caracteristicas">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 w-full">
                    {t.hero.secondaryCta}
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image - Dashboard Mockup */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-400/20 blur-xl rounded-xl"></div>
                <div className="relative bg-gray-900 border-2 border-purple-400 rounded-lg overflow-hidden shadow-2xl">
                  {/* Mockup header */}
                  <div className="bg-gray-800 p-2 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-sm text-gray-400">compliance.silver5ai.com</div>
                  </div>
                  
                  {/* Dashboard de Compliance */}
                  <div className="p-4">
                    {/* Barra de navegación */}
                    <div className="bg-gray-800 p-3 rounded-md mb-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center mr-2">
                            <span className="text-xs font-bold text-gray-900">S5</span>
                          </div>
                          <div className="text-purple-400 font-medium">Silver Compliance</div>
                        </div>
                        <div className="bg-green-500 text-xs px-2 py-1 rounded-full text-white">Online</div>
                      </div>
                    </div>
                    
                    {/* Panel principal con stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-gray-800 p-3 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">KYC Pendientes</div>
                        <div className="text-xl font-bold text-white">24</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Alertas AML</div>
                        <div className="text-xl font-bold text-red-400">8</div>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Aprobados Hoy</div>
                        <div className="text-xl font-bold text-green-400">56</div>
                      </div>
                    </div>
                    
                    {/* Verificación KYC */}
                    <div className="bg-gray-800 p-3 rounded-md mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-white font-medium">Verificaciones Recientes</div>
                        <div className="bg-purple-400 text-xs px-2 py-0.5 rounded-full text-gray-900">5 nuevas</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-gray-900 p-2 rounded-md border border-gray-700">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                              <span className="text-sm">Carlos M.</span>
                            </div>
                            <span className="text-xs text-yellow-400">En revisión</span>
                          </div>
                          <div className="flex justify-between mt-1 text-xs">
                            <span className="text-gray-400">ID: #58923</span>
                            <span className="text-gray-400">hace 10 min</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-900 p-2 rounded-md border border-gray-700">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-sm">Laura S.</span>
                            </div>
                            <span className="text-xs text-green-400">Aprobado</span>
                          </div>
                          <div className="flex justify-between mt-1 text-xs">
                            <span className="text-gray-400">ID: #58924</span>
                            <span className="text-gray-400">hace 25 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Panel de Alertas AML */}
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-400 mr-2" />
                        <div className="text-white font-medium">Alertas AML</div>
                      </div>
                      
                      <div className="bg-gray-900 p-2 rounded-md border border-red-900/40">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-red-400/30 flex items-center justify-center mr-2">
                              <AlertTriangle className="h-3 w-3 text-red-300" />
                            </div>
                            <span className="text-sm text-red-300">Transacción sospechosa</span>
                          </div>
                          <span className="text-xs text-gray-400">hace 5 min</span>
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          Usuario ID #45892 - Múltiples transacciones fragmentadas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Control Panel
                </div>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <Shield className="h-10 w-10 text-purple-400 opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-purple-400 text-xl mb-6">{t.features.subtitle}</p>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <div className="bg-gray-800/50 rounded-xl p-4 mb-6 inline-block group-hover:bg-gray-800/80 transition-colors duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-400 mr-2 shrink-0 mt-0.5" />
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

      {/* Dashboard Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-400/20 blur-xl rounded-xl"></div>
                <div className="relative overflow-hidden rounded-xl border-2 border-purple-400">
                  <Image 
                    src="/compliance-dashboard.png" 
                    alt="Compliance Dashboard" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Panel Centralizado</h3>
                      <p className="text-gray-300 text-sm">
                        Visualice todas sus métricas de compliance en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-4">
                Dashboard Intuitivo
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t.dashboard.title}</h2>
              <p className="text-gray-400 mb-8">
                {t.dashboard.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {t.dashboard.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-400/10 rounded-full p-1 mr-3 mt-1">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
              
              <Link href={calendlyUrl}>
                <Button className="bg-purple-400 hover:bg-purple-500 text-gray-900 rounded-full px-6 py-3 font-medium transition-all duration-300 shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40">
                  {t.hero.primaryCta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-4">
              Integración Perfecta
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.integration.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t.integration.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.integration.items.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative border-t border-gray-800 bg-gradient-to-b from-gray-900 to-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-4">
              Resultados Comprobados
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.benefits.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Nuestros clientes han experimentado mejoras significativas en sus procesos de compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-cyan-400/20 to-purple-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
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
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-4">
              ¿Listo para comenzar?
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-purple-400 hover:bg-purple-500 text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 w-full sm:w-auto">
                  {t.cta.primary}
                </Button>
              </Link>
              <Link href="#contacto">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                  {t.cta.secondary}
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
} 
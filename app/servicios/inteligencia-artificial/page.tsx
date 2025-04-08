'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, ArrowLeft, Brain, Network, CheckCircle, Code, Cpu, Shield, MessageSquare, ArrowRight, Laptop, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver5-ai';

export default function InteligenciaArtificial() {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  // Datos y traducciones específicas para esta página
  const translations = {
    es: {
      hero: {
        title: 'Agentes Inteligentes',
        subtitle: 'Soluciones Avanzadas de IA',
        description: 'Automatiza procesos, aumenta la productividad y mejora la toma de decisiones con nuestros agentes de inteligencia artificial diseñados para resolver desafíos empresariales específicos.'
      },
      features: {
        title: 'Agentes de IA adaptados a tu negocio',
        description: 'Desarrollamos soluciones de inteligencia artificial que transforman la manera en que las empresas operan y brindan servicio.',
      },
      agentTypes: [
        {
          title: "Asistentes Virtuales",
          description: "Agentes conversacionales que atienden consultas y brindan soporte 24/7 a tus clientes o empleados.",
          icon: <MessageSquare className="h-12 w-12 text-cyan-400" />,
          points: [
            "Disponibilidad constante para atención al cliente",
            "Respuestas contextuales personalizadas",
            "Capacidad multiidioma y escalable",
            "Integración con tus sistemas existentes"
          ]
        },
        {
          title: "Agentes de Automatización",
          description: "Sistemas inteligentes que automatizan tareas repetitivas y flujos de trabajo completos para liberar el potencial humano.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "Procesamiento de datos a alta velocidad",
            "Automatización de tareas administrativas",
            "Reducción de errores humanos",
            "Análisis y reportes automatizados"
          ]
        },
        {
          title: "Agentes de Análisis Predictivo",
          description: "Soluciones que procesan grandes volúmenes de datos para identificar patrones y realizar predicciones accionables.",
          icon: <Cpu className="h-12 w-12 text-green-400" />,
          points: [
            "Modelos predictivos personalizados",
            "Detección temprana de tendencias",
            "Optimización de procesos basada en datos",
            "Insights accionables para tu negocio"
          ]
        },
        {
          title: "Agentes de Compliance",
          description: "Sistemas especializados en monitoreo y verificación para asegurar el cumplimiento normativo en sectores regulados.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Verificación KYC/AML automatizada",
            "Monitoreo continuo de transacciones",
            "Alertas en tiempo real ante irregularidades",
            "Generación de reportes regulatorios"
          ]
        }
      ],
      useCases: {
        title: 'Casos de Uso',
        cases: [
          {
            title: 'Asistentes de Gmail Inteligentes',
            description: 'Agentes que categorizan, responden y priorizan emails automáticamente, ahorrando tiempo y mejorando la productividad.',
            image: '/email-assistant.png',
          },
          {
            title: 'Chatbots para Atención al Cliente',
            description: 'Agentes conversacionales que responden consultas 24/7, escalan a agentes humanos cuando es necesario y mejoran con cada interacción.',
            image: '/customer-service-bot.png',
          },
          {
            title: 'Asistentes de Análisis Financiero',
            description: 'Agentes que procesan datos financieros, identifican anomalías y generan reportes automatizados con insights accionables.',
            image: '/financial-analysis.png',
          },
          {
            title: 'Agentes para Automatización de Marketing',
            description: 'Soluciones que optimizan campañas, personalizan mensajes y analizan resultados para maximizar el ROI.',
            image: '/marketing-automation.png',
          }
        ],
      },
      workflow: {
        title: 'Nuestro Proceso',
        steps: [
          {
            title: 'Análisis de Necesidades',
            description: 'Identificamos los desafíos específicos y oportunidades de mejora en tus procesos.'
          },
          {
            title: 'Diseño del Agente',
            description: 'Desarrollamos la arquitectura del agente y definimos sus capacidades y límites.'
          },
          {
            title: 'Entrenamiento e Integración',
            description: 'Entrenamos al agente con tus datos y lo integramos con tus sistemas existentes.'
          },
          {
            title: 'Monitoreo y Mejora Continua',
            description: 'Supervisamos el rendimiento y optimizamos constantemente su funcionamiento.'
          }
        ]
      },
      benefits: {
        title: 'Beneficios Comprobados',
        items: [
          {
            title: "Aumento de Productividad",
            description: "Automatiza tareas repetitivas para que tu equipo se enfoque en lo que realmente importa.",
            value: "40%"
          },
          {
            title: "Atención 24/7",
            description: "Proporciona servicio ininterrumpido a clientes y usuarios en cualquier momento.",
            value: "24/7"
          },
          {
            title: "Reducción de Costos",
            description: "Optimiza recursos y reduce gastos operativos a largo plazo.",
            value: "30%"
          },
          {
            title: "Precisión Mejorada",
            description: "Minimiza errores humanos y garantiza consistencia en los procesos.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "¿Listo para implementar agentes inteligentes en tu empresa?",
        description: "Agenda una demostración personalizada y descubre cómo nuestros agentes de IA pueden transformar tu negocio.",
        primary: "Solicitar Demo",
        secondary: "Contactar un Especialista"
      }
    },
    en: {
      hero: {
        title: 'Intelligent Agents',
        subtitle: 'Advanced AI Solutions',
        description: 'Automate processes, increase productivity, and improve decision-making with our artificial intelligence agents designed to solve specific business challenges.'
      },
      features: {
        title: 'AI Agents tailored to your business',
        description: 'We develop artificial intelligence solutions that transform the way companies operate and provide service.',
      },
      agentTypes: [
        {
          title: "Virtual Assistants",
          description: "Conversational agents that attend to inquiries and provide 24/7 support to your customers or employees.",
          icon: <MessageSquare className="h-12 w-12 text-cyan-400" />,
          points: [
            "Constant availability for customer service",
            "Personalized contextual responses",
            "Multi-language and scalable capability",
            "Integration with your existing systems"
          ]
        },
        {
          title: "Automation Agents",
          description: "Intelligent systems that automate repetitive tasks and complete workflows to unleash human potential.",
          icon: <Bot className="h-12 w-12 text-purple-400" />,
          points: [
            "High-speed data processing",
            "Automation of administrative tasks",
            "Reduction of human errors",
            "Automated analysis and reports"
          ]
        },
        {
          title: "Predictive Analysis Agents",
          description: "Solutions that process large volumes of data to identify patterns and make actionable predictions.",
          icon: <Cpu className="h-12 w-12 text-green-400" />,
          points: [
            "Customized predictive models",
            "Early trend detection",
            "Data-based process optimization",
            "Actionable insights for your business"
          ]
        },
        {
          title: "Compliance Agents",
          description: "Specialized systems in monitoring and verification to ensure regulatory compliance in regulated sectors.",
          icon: <Shield className="h-12 w-12 text-yellow-400" />,
          points: [
            "Automated KYC/AML verification",
            "Continuous transaction monitoring",
            "Real-time alerts for irregularities",
            "Generation of regulatory reports"
          ]
        }
      ],
      useCases: {
        title: 'Use Cases',
        cases: [
          {
            title: 'Intelligent Gmail Assistants',
            description: 'Agents that automatically categorize, respond to, and prioritize emails, saving time and improving productivity.',
            image: '/email-assistant.png',
          },
          {
            title: 'Customer Service Chatbots',
            description: 'Conversational agents that respond to inquiries 24/7, escalate to human agents when necessary, and improve with each interaction.',
            image: '/customer-service-bot.png',
          },
          {
            title: 'Financial Analysis Assistants',
            description: 'Agents that process financial data, identify anomalies, and generate automated reports with actionable insights.',
            image: '/financial-analysis.png',
          },
          {
            title: 'Marketing Automation Agents',
            description: 'Solutions that optimize campaigns, personalize messages, and analyze results to maximize ROI.',
            image: '/marketing-automation.png',
          }
        ],
      },
      workflow: {
        title: 'Our Process',
        steps: [
          {
            title: 'Needs Analysis',
            description: 'We identify specific challenges and opportunities for improvement in your processes.'
          },
          {
            title: 'Agent Design',
            description: 'We develop the agent architecture and define its capabilities and limits.'
          },
          {
            title: 'Training and Integration',
            description: 'We train the agent with your data and integrate it with your existing systems.'
          },
          {
            title: 'Monitoring and Continuous Improvement',
            description: 'We monitor performance and constantly optimize its operation.'
          }
        ]
      },
      benefits: {
        title: 'Proven Benefits',
        items: [
          {
            title: "Increased Productivity",
            description: "Automate repetitive tasks so your team can focus on what really matters.",
            value: "40%"
          },
          {
            title: "24/7 Attention",
            description: "Provide uninterrupted service to customers and users at any time.",
            value: "24/7"
          },
          {
            title: "Cost Reduction",
            description: "Optimize resources and reduce long-term operational expenses.",
            value: "30%"
          },
          {
            title: "Improved Accuracy",
            description: "Minimize human errors and ensure consistency in processes.",
            value: "95%"
          }
        ]
      },
      cta: {
        title: "Ready to implement intelligent agents in your company?",
        description: "Schedule a personalized demonstration and discover how our AI agents can transform your business.",
        primary: "Request Demo",
        secondary: "Contact a Specialist"
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
          
          {/* Elementos decorativos */}
          <div className="absolute top-1/4 right-[15%] animate-pulse">
            <Brain className="h-20 w-20 text-cyan-400 opacity-20" />
          </div>
          <div className="absolute bottom-1/3 left-[15%] animate-pulse delay-300">
            <Network className="h-20 w-20 text-purple-400 opacity-20" />
          </div>
          
          {/* Nodos de red neuronal estilizados */}
          <div className="absolute bottom-1/4 right-[30%] w-64 h-48 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="20" cy="20" r="3" fill="#06b6d4" />
              <circle cx="50" cy="15" r="3" fill="#06b6d4" />
              <circle cx="80" cy="20" r="3" fill="#06b6d4" />
              <circle cx="15" cy="50" r="3" fill="#a855f7" />
              <circle cx="50" cy="50" r="4" fill="#a855f7" />
              <circle cx="85" cy="50" r="3" fill="#a855f7" />
              <circle cx="20" cy="80" r="3" fill="#06b6d4" />
              <circle cx="50" cy="85" r="3" fill="#06b6d4" />
              <circle cx="80" cy="80" r="3" fill="#06b6d4" />
              
              <line x1="20" y1="20" x2="50" y2="15" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="80" y2="20" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="20" y1="20" x2="15" y2="50" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="80" y1="20" x2="85" y2="50" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="15" y1="50" x2="50" y2="50" stroke="#a855f7" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="85" y2="50" stroke="#a855f7" strokeWidth="0.5" />
              <line x1="15" y1="50" x2="20" y2="80" stroke="#a855f7" strokeWidth="0.5" />
              <line x1="85" y1="50" x2="80" y2="80" stroke="#a855f7" strokeWidth="0.5" />
              <line x1="20" y1="80" x2="50" y2="85" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="50" y1="85" x2="80" y2="80" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="50" y2="50" stroke="#06b6d4" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="85" stroke="#a855f7" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                {isSpanish ? 'Inteligencia Artificial' : 'Artificial Intelligence'}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {translations[language].hero.title} <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{translations[language].hero.subtitle}</span>
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                {translations[language].hero.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link href={calendlyUrl}>
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 w-full">
                    {isSpanish ? 'Solicitar Demo' : 'Request Demo'}
                  </Button>
                </Link>
                <Link href="#caracteristicas">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 w-full">
                    {isSpanish ? 'Explorar Soluciones' : 'Explore Solutions'}
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image - AI Brain Visualization */}
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
                    <div className="mx-auto text-sm text-gray-400">ai.silver5ai.com</div>
                  </div>
                  
                  {/* AI Brain Visualization */}
                  <div className="p-4">
                    <div className="mb-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center mr-2">
                          <Brain className="w-5 h-5 text-gray-900" />
                        </div>
                        <span className="text-cyan-400 font-medium">Silver AI Agent</span>
                      </div>
                      <div className="bg-green-500 text-xs px-2 py-1 rounded-full text-white">Activo</div>
                    </div>
                    
                    {/* Panel de estadísticas del agente */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-800 p-2 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Solicitudes</div>
                        <div className="text-lg font-bold text-white">2.4K</div>
                      </div>
                      <div className="bg-gray-800 p-2 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Precisión</div>
                        <div className="text-lg font-bold text-cyan-400">98.2%</div>
                      </div>
                      <div className="bg-gray-800 p-2 rounded-md text-center">
                        <div className="text-xs text-gray-400 mb-1">Latencia</div>
                        <div className="text-lg font-bold text-green-400">52ms</div>
                      </div>
                    </div>
                    
                    {/* Visualización de actividad */}
                    <div className="bg-gray-800 p-3 rounded-md mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-white text-sm font-medium">Actividad del Agente</div>
                        <div className="text-xs text-gray-400">Última actualización: 2 min</div>
                      </div>
                      
                      <div className="h-20 w-full">
                        {/* Gráfico de actividad estilizado */}
                        <svg viewBox="0 0 100 40" className="w-full h-full">
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d="M0,30 L10,28 L20,25 L30,15 L40,20 L50,10 L60,5 L70,15 L80,12 L90,18 L100,5" 
                                stroke="#06b6d4" 
                                strokeWidth="2" 
                                fill="none" />
                          <path d="M0,30 L10,28 L20,25 L30,15 L40,20 L50,10 L60,5 L70,15 L80,12 L90,18 L100,5 V40 H0 Z" 
                                fill="url(#gradient)" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Ejemplos de operaciones */}
                    <div className="bg-gray-800 p-3 rounded-md mb-3">
                      <div className="flex items-center mb-2">
                        <Code className="h-4 w-4 text-cyan-400 mr-2" />
                        <div className="text-white text-sm font-medium">Operaciones Recientes</div>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div className="bg-gray-900 px-3 py-2 rounded-md border border-gray-700">
                          <div className="flex justify-between">
                            <span className="text-cyan-400">Análisis de datos</span>
                            <span className="text-gray-400">10:45</span>
                          </div>
                          <div className="mt-1 text-gray-400">Procesamiento de 1.2GB de datos completado en 8.7s</div>
                        </div>
                        <div className="bg-gray-900 px-3 py-2 rounded-md border border-gray-700">
                          <div className="flex justify-between">
                            <span className="text-green-400">Predicción completada</span>
                            <span className="text-gray-400">10:32</span>
                          </div>
                          <div className="mt-1 text-gray-400">Generado modelo predictivo con 94.7% de precisión</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 bg-cyan-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Agente Inteligente
                </div>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <div className="text-cyan-400 opacity-70 text-4xl"><Brain className="w-10 h-10" /></div>
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
            <h2 className="text-4xl font-bold mb-4">{translations[language].features.title}</h2>
            <p className="text-cyan-400 text-xl mb-6">{isSpanish ? 'Soluciones a medida' : 'Tailored Solutions'}</p>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {translations[language].features.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {translations[language].agentTypes.map((feature, index) => (
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

      {/* Use Cases Section - Mejorado */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-[#0A0B14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              {isSpanish ? 'Aplicaciones Prácticas' : 'Practical Applications'}
            </div>
            <h2 className="text-4xl font-bold mb-6">{translations[language].useCases.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {isSpanish ? 
                'Nuestros agentes de IA ya están transformando industrias enteras con aplicaciones concretas y resultados medibles.' : 
                'Our AI agents are already transforming entire industries with concrete applications and measurable results.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {translations[language].useCases.cases.map((useCase, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-800/30 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                
                {/* Ilustración generada para cada caso de uso */}
                <div className="h-64 bg-gray-900 relative overflow-hidden">
                  {/* Generamos una ilustración genérica si no hay imagen específica */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Fondo abstracto */}
                      <div className="absolute inset-0 opacity-30">
                        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={index % 2 === 0 ? "#06b6d4" : "#a855f7"} />
                              <stop offset="100%" stopColor={index % 2 === 0 ? "#a855f7" : "#06b6d4"} />
                            </linearGradient>
                          </defs>
                          <path 
                            d={`M0,${20 + index * 5} C${20 + index * 10},${50 - index * 3} ${50 + index * 5},${30 + index * 2} 100,${60 + index * 3}`} 
                            stroke={`url(#gradient-${index})`} 
                            strokeWidth="0.5" 
                            fill="none" 
                          />
                          <path 
                            d={`M0,${50 + index * 2} C${30 - index * 2},${20 + index * 5} ${70 - index * 3},${70 + index * 2} 100,${40 - index * 3}`} 
                            stroke={`url(#gradient-${index})`} 
                            strokeWidth="0.5" 
                            fill="none" 
                          />
                          <path 
                            d={`M0,${80 - index * 4} C${40 + index * 3},${50 + index * 2} ${60 + index * 2},${30 - index * 2} 100,${70 + index * 3}`} 
                            stroke={`url(#gradient-${index})`} 
                            strokeWidth="0.5" 
                            fill="none" 
                          />
                        </svg>
                      </div>
                      
                      {/* Elementos de diseño específicos para cada caso */}
                      {index === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-32 h-20 rounded-lg bg-gray-800 border border-cyan-400/30 flex flex-col p-2">
                              <div className="flex items-center mb-2">
                                <div className="w-3 h-3 rounded-full bg-cyan-400 mr-1"></div>
                                <div className="text-xs text-cyan-400">Inbox</div>
                              </div>
                              <div className="space-y-1">
                                <div className="h-2 w-full bg-gray-700 rounded"></div>
                                <div className="h-2 w-4/5 bg-gray-700 rounded"></div>
                                <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
                              </div>
                            </div>
                            <div className="absolute -right-12 top-6">
                              <Cpu className="w-6 h-6 text-cyan-400" />
                            </div>
                            <svg viewBox="0 0 100 20" className="absolute -right-16 top-10 w-16">
                              <path d="M0,10 L100,10" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2" />
                            </svg>
                            <div className="absolute -right-36 top-4">
                              <div className="w-20 h-12 rounded-lg bg-gray-800 border border-purple-400/30 p-2">
                                <div className="h-2 w-full bg-purple-400/50 rounded mb-1"></div>
                                <div className="h-2 w-1/2 bg-purple-400/50 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-40 h-32 rounded-lg bg-gray-800 border border-cyan-400/30 flex flex-col p-3">
                              <div className="flex justify-between items-center mb-3">
                                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                                  <MessageSquare className="w-3 h-3 text-cyan-400" />
                                </div>
                                <div className="w-20 h-4 bg-gray-700 rounded"></div>
                              </div>
                              <div className="space-y-2">
                                <div className="h-4 w-3/4 bg-gray-700 rounded-full ml-auto"></div>
                                <div className="h-4 w-1/2 bg-gray-700 rounded-full"></div>
                                <div className="h-4 w-3/5 bg-gray-700 rounded-full ml-auto"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-48 h-28 rounded-lg bg-gray-800 border border-purple-400/30 p-3">
                              <div className="flex justify-between mb-3">
                                <div className="text-xs text-purple-400">Análisis</div>
                                <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
                                  <ArrowRight className="w-2 h-2 text-purple-400" />
                                </div>
                              </div>
                              <div className="flex space-x-1 h-12">
                                <div className="w-1/5 bg-purple-400/20 rounded-sm flex items-end">
                                  <div className="w-full bg-purple-400 rounded-sm h-3/5"></div>
                                </div>
                                <div className="w-1/5 bg-purple-400/20 rounded-sm flex items-end">
                                  <div className="w-full bg-purple-400 rounded-sm h-4/5"></div>
                                </div>
                                <div className="w-1/5 bg-purple-400/20 rounded-sm flex items-end">
                                  <div className="w-full bg-purple-400 rounded-sm h-2/5"></div>
                                </div>
                                <div className="w-1/5 bg-purple-400/20 rounded-sm flex items-end">
                                  <div className="w-full bg-purple-400 rounded-sm h-3/4"></div>
                                </div>
                                <div className="w-1/5 bg-purple-400/20 rounded-sm flex items-end">
                                  <div className="w-full bg-purple-400 rounded-sm h-1/2"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {index === 3 && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gray-800 border border-cyan-400/30 flex items-center justify-center absolute -left-8 top-0">
                              <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                              </div>
                            </div>
                            <svg viewBox="0 0 50 20" className="absolute left-4 top-6 w-12">
                              <path d="M0,10 L50,10" stroke="#06b6d4" strokeWidth="0.5" />
                              <polygon points="48,8 48,12 50,10" fill="#06b6d4" />
                            </svg>
                            <div className="w-20 h-20 rounded-lg bg-gray-800 border border-cyan-400/30 p-2 flex flex-col justify-between">
                              <div className="h-3 w-full bg-gray-700 rounded"></div>
                              <div className="flex space-x-1">
                                <div className="h-8 w-4 bg-cyan-400/30 rounded flex items-end">
                                  <div className="w-full bg-cyan-400 rounded-sm h-1/3"></div>
                                </div>
                                <div className="h-8 w-4 bg-cyan-400/30 rounded flex items-end">
                                  <div className="w-full bg-cyan-400 rounded-sm h-2/3"></div>
                                </div>
                                <div className="h-8 w-4 bg-cyan-400/30 rounded flex items-end">
                                  <div className="w-full bg-cyan-400 rounded-sm h-full"></div>
                                </div>
                              </div>
                            </div>
                            <svg viewBox="0 0 50 20" className="absolute -right-12 top-10 w-12">
                              <path d="M0,10 L50,10" stroke="#06b6d4" strokeWidth="0.5" />
                              <polygon points="48,8 48,12 50,10" fill="#06b6d4" />
                            </svg>
                            <div className="w-8 h-8 rounded-full bg-gray-800 border border-cyan-400/30 flex items-center justify-center absolute -right-16 top-6">
                              <div className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Gradiente para mejorar la legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                  
                  <div className="mt-4 flex justify-end">
                    <Link href={calendlyUrl} className="text-cyan-400 hover:text-cyan-300 flex items-center text-sm font-medium">
                      <span>{isSpanish ? 'Más información' : 'Learn more'}</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative border-t border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              {isSpanish ? 'Metodología' : 'Methodology'}
            </div>
            <h2 className="text-4xl font-bold mb-6">{translations[language].workflow.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {isSpanish ? 
                'Implementamos agentes de IA mediante un proceso estructurado que garantiza soluciones efectivas y adaptadas a cada necesidad específica.' : 
                'We implement AI agents through a structured process that ensures effective solutions tailored to each specific need.'
              }
            </p>
          </div>
          
          <div className="relative">
            {/* Línea conectora */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-8rem)] bg-gradient-to-b from-cyan-400 to-purple-400 hidden md:block"></div>
            
            <div className="space-y-20 relative">
              {translations[language].workflow.steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} mb-8 md:mb-0`}>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${
                      index === 0 ? 'from-cyan-400 to-cyan-500' : 
                      index === 1 ? 'from-cyan-400 to-blue-500' :
                      index === 2 ? 'from-blue-400 to-purple-500' :
                      'from-purple-400 to-pink-500'
                    }`}>
                      <span className="text-gray-900 font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="bg-gray-800/30 rounded-2xl p-5 border border-gray-700">
                      <div className="flex items-center mb-3">
                        {index === 0 && (
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                              <Brain className="h-4 w-4 text-cyan-400" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center">
                              <Bot className="h-4 w-4 text-purple-400" />
                            </div>
                          </div>
                        )}
                        {index === 1 && (
                          <svg width="80" height="40" viewBox="0 0 80 40">
                            <rect x="5" y="5" width="30" height="30" rx="2" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
                            <rect x="45" y="5" width="30" height="30" rx="2" fill="#1e293b" stroke="#a855f7" strokeWidth="1" />
                            <path d="M35,20 L45,20" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2" />
                            <circle cx="15" cy="15" r="3" fill="#06b6d4" />
                            <circle cx="25" cy="25" r="3" fill="#06b6d4" />
                            <circle cx="55" cy="15" r="3" fill="#a855f7" />
                            <circle cx="65" cy="25" r="3" fill="#a855f7" />
                            <path d="M15,15 L25,25" stroke="#06b6d4" strokeWidth="0.5" />
                            <path d="M55,15 L65,25" stroke="#a855f7" strokeWidth="0.5" />
                            <path d="M25,25 L55,15" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2" />
                          </svg>
                        )}
                        {index === 2 && (
                          <div className="flex flex-col space-y-2">
                            <div className="h-3 w-24 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                            </div>
                            <div className="h-3 w-24 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                            </div>
                            <div className="h-3 w-24 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full w-5/6 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                            </div>
                          </div>
                        )}
                        {index === 3 && (
                          <svg width="80" height="40" viewBox="0 0 80 40">
                            <path d="M10,20 C25,5 55,35 70,20" stroke="#06b6d4" strokeWidth="1" fill="none" />
                            <path d="M10,20 C25,35 55,5 70,20" stroke="#a855f7" strokeWidth="1" fill="none" />
                            <circle cx="10" cy="20" r="3" fill="#06b6d4" />
                            <circle cx="30" cy="10" r="3" fill="#06b6d4" />
                            <circle cx="50" cy="30" r="3" fill="#06b6d4" />
                            <circle cx="70" cy="20" r="3" fill="#06b6d4" />
                            <circle cx="40" cy="20" r="5" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
                            <path d="M37,20 L43,20 M40,17 L40,23" stroke="#06b6d4" strokeWidth="1" />
                          </svg>
                        )}
                      </div>
                      <div className="h-4 w-3/4 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative border-t border-gray-800 bg-gradient-to-b from-gray-900 to-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              {isSpanish ? 'Resultados Comprobados' : 'Proven Results'}
            </div>
            <h2 className="text-4xl font-bold mb-6">{translations[language].benefits.title}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {isSpanish ? 
                'Nuestros clientes han experimentado mejoras significativas en sus operaciones tras implementar nuestros agentes de IA.' : 
                'Our clients have experienced significant improvements in their operations after implementing our AI agents.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations[language].benefits.items.map((item, index) => (
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
      <section className="py-20 border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
              {isSpanish ? '¿Listo para comenzar?' : 'Ready to start?'}
            </div>
            <h2 className="text-4xl font-bold mb-6">{translations[language].cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8">
              {translations[language].cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 w-full sm:w-auto">
                  {translations[language].cta.primary}
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                  {translations[language].cta.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


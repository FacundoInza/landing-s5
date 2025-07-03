'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Code, Shield, Bot, Box, Cpu, Mail, MapPin, Clock, Twitter, Linkedin, Github, Instagram, User, ArrowRight, ChevronDown, Users, MessageSquare, ClipboardList, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RegisterButton } from '@/components/RegisterButton'
import { useLanguage } from './contexts/language-context'
import { translations } from './translations'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { HeroSection } from "./components/ui/HeroSection";

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver-5-ai/silver-5-p2p';

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  // Estado para la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState('/silver-laptop.png');
  
  // Estado para acordeones de FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Estados para el formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  // Función para manejar acordeones
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Manejar cambios en los campos del formulario
  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar envío del formulario
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Por favor completa todos los campos requeridos'
      });
      return;
    }
    
    setFormStatus({
      ...formStatus,
      isSubmitting: true,
      isError: false,
      message: ''
    });
    
    try {
      const response = await fetch('https://n8n.silver5ai.com/webhook/427b5284-5b72-428e-9b1b-d0d9b0329ab0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log(response);
      
      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
        });
        // Limpiar el formulario
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.'
      });
    }
  };

  // Resetear el mensaje de éxito después de 5 segundos
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (formStatus.isSuccess || formStatus.isError) {
      timer = setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSuccess: false,
          isError: false,
          message: ''
        }));
      }, 5000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [formStatus.isSuccess, formStatus.isError]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-silver5-dark via-silver5-dark to-gray-900 text-white">
      {/* Hero Section */}
      <HeroSection
        title={
          <>
            <span className="text-silver5-gray-900">Soluciones de automatización</span>{' '}
            <span className="text-silver5-cyan-500 bg-gradient-to-r from-silver5-cyan-400 to-silver5-chats bg-clip-text text-transparent">financiera</span>{' '}
            <span className="text-silver5-gray-900">para VASPs</span>
          </>
        }
        subtitle={"Especialistas en automatización de procesos críticos para proveedores de servicios de activos virtuales (VASPs), integrando Binance y otras plataformas con sistemas de compliance y gestión."}
        primaryButton={{
          text: 'Regístrate gratis',
          href: 'https://app.silver5ai.com/register',
          icon: <User className="w-5 h-5" />,
          variant: 'primary',
        }}
        secondaryButton={{
          text: 'Ponerse en contacto',
          href: calendlyUrl,
          icon: <Calendar className="w-5 h-5" />,
          variant: 'secondary',
        }}
        image={
          <div className="relative">
            {/* Binance Integration Badge */}
            <div className="absolute -top-4 -right-4 z-10 bg-gradient-to-br from-silver5-cyan-400/20 to-silver5-navy/20 backdrop-blur-sm border-2 border-silver5-cyan-400/40 rounded-full p-3 hover:scale-110 hover:border-silver5-cyan-400/60 transition-all duration-300 shadow-lg hover:shadow-silver5-cyan-400/25">
              <Image
                src="/Binance.svg"
                alt="Integración oficial con Binance"
                width={50}
                height={50}
                className="opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Silver Laptop Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/silver-laptop.png"
                alt="P2P Manager Dashboard - Plataforma integral para VASPs"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Overlay con información */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/Binance-3.svg"
                    alt="Powered by Binance"
                    width={80}
                    height={20}
                    className="opacity-90"
                  />
                  <div className="h-6 w-px bg-white/40"></div>
                  <span className="text-white text-sm font-semibold">P2P Manager</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-silver5-cyan-400 to-silver5-navy rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Shield className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-silver5-green-400 to-silver5-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>
        }
      />

      {/* Módulos P2P Manager Section */}
      <section id="servicios" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-silver5-cyan-400/10 border border-silver5-cyan-400/20 text-silver5-cyan-400 text-sm font-medium mb-4">
              Módulos P2P Manager
            </div>
            <h2 className="text-4xl font-bold mb-6">Soluciones Especializadas para VASPs</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Plataforma integral que automatiza cada aspecto de tu operación P2P con módulos especializados y compliance automático.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-silver5-kyc" />,
                title: "Gestión de Clientes",
                description: "KYC automatizado con integración Didit. Verificación en 2 minutos.",
                details: ["Verificación KYC en 2min", "Integración Didit nativa", "Compliance automático", "Screening AML 24/7"],
                color: 'from-silver5-kyc',
                link: '/p2p-manager/gestion-clientes'
              },
              {
                icon: <Bot className="h-10 w-10 text-silver5-bot" />,
                title: "Bot de Posicionamiento",
                description: "Trading automático P2P con algoritmos avanzados de Binance.",
                details: ["Trading 24/7 automatizado", "Algoritmos optimizados", "Gestión de riesgo", "Análisis de mercado"],
                color: 'from-silver5-bot',
                link: '/p2p-manager/bot-posicionamiento'
              },
              {
                icon: <ClipboardList className="h-10 w-10 text-silver5-orders" />,
                title: "Gestión de Órdenes",
                description: "Control centralizado de todas tus operaciones P2P en tiempo real.",
                details: ["Dashboard unificado", "Seguimiento en tiempo real", "Automatización de flujos", "Reportes avanzados"],
                color: 'from-silver5-orders',
                link: '/p2p-manager/gestion-ordenes'
              },
              {
                icon: <MessageSquare className="h-10 w-10 text-silver5-chats" />,
                title: "Chats Centralizados",
                description: "Comunicación unificada con clientes y soporte automatizado.",
                details: ["Chat unificado", "Respuestas automáticas", "Historial completo", "Soporte 24/7"],
                color: 'from-silver5-chats',
                link: '/p2p-manager/chats-centralizados'
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl -z-10`}></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6 inline-block group-hover:bg-white/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                {service.details && service.details.length > 0 && (
                  <ul className="space-y-2 text-sm text-gray-400 mb-6">
                    {service.details.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-silver5-cyan-400 mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <Link href={service.link} className="mt-6 inline-block">
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:border-silver5-cyan-400 hover:bg-white/10 rounded-full transition-all duration-300 group/btn"
                  >
                    <span className="mr-2">Explorar módulo</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso para VASPs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Casos de Uso P2P Manager</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Soluciones especializadas para proveedores de servicios de activos virtuales que automatizan procesos críticos y garantizan el cumplimiento normativo.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "KYC Automatizado con Didit",
                    description: "Verificación de identidad en 2 minutos con compliance automático y screening AML 24/7.",
                    image: '/KYC-clients.png'
                  },
                  {
                    title: "Trading P2P Optimizado",
                    description: "Bots inteligentes que ejecutan operaciones 24/7 con algoritmos avanzados de posicionamiento.",
                    image: '/bots-laptop.png'
                  },
                  {
                    title: "Gestión Centralizada",
                    description: "Control total de órdenes, chats y clientes desde un dashboard unificado en tiempo real.",
                    image: '/orders-laptop.png'
                  }
                ].map((useCase, index) => (
                  <div
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer hover:border-silver5-cyan-400/30 ${selectedImage === useCase.image ? 'border-silver5-cyan-400 bg-white/10' : ''}`}
                    onClick={() => setSelectedImage(useCase.image)}
                  >
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${selectedImage === useCase.image ? 'bg-silver5-cyan-400' : 'bg-white/20'}`}>
                        <span className="font-bold text-gray-900">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                        <p className="text-gray-400">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-silver5-cyan-400/20 blur-xl rounded-xl"></div>
                <div className="relative bg-gray-900 border-2 border-silver5-cyan-400 rounded-lg overflow-hidden shadow-2xl">
                  {/* Mockup header */}
                  <div className="bg-gray-800 p-2 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-sm text-gray-400">app.silver5ai.com</div>
                  </div>
                  
                  {/* Imagen dinámica según el caso de uso seleccionado */}
                  <div className="relative">
                    <Image
                      src={selectedImage}
                      alt="P2P Manager Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Overlay con información */}
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/Binance-3.svg"
                          alt="Powered by Binance"
                          width={60}
                          height={15}
                          className="opacity-90"
                        />
                        <div className="h-4 w-px bg-white/40"></div>
                        <span className="text-white text-sm font-semibold">
                          {selectedImage === '/KYC-clients.png' && 'KYC Automatizado'}
                          {selectedImage === '/bots-laptop.png' && 'Bot Trading P2P'}
                          {selectedImage === '/orders-laptop.png' && 'Gestión Centralizada'}
                          {selectedImage === '/silver-laptop.png' && 'P2P Manager'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                  Silver5 P2P Manager
                </div>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <div className="text-silver5-cyan-400 opacity-70 text-4xl font-bold">₿</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.silver5ai.com/register">
                <Button className="bg-silver5-cyan-400 hover:bg-silver5-cyan-500 text-gray-900 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg shadow-silver5-cyan-400/20 hover:shadow-silver5-cyan-400/40 hover:scale-105 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Regístrate gratis
                </Button>
              </Link>
              <Link href={calendlyUrl}>
                <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Ver Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-silver5-cyan-400/10 border border-silver5-cyan-400/20 text-silver5-cyan-400 text-sm font-medium mb-4">
              Nuestro Equipo
            </div>
            <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              Somos un equipo de expertos en tecnología financiera con amplia experiencia en el desarrollo de soluciones para VASPs y operadores de criptomonedas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                name: 'Julian Besteiro', 
                role: 'Especialista en Automatización', 
                linkedin: 'https://www.linkedin.com/in/julian-besteiro-software-engineer/', 
                image: '/juli.jpeg',
                expertise: ['Automatización de procesos', 'Desarrollo Full Stack', 'DevOps']
              },
              { 
                name: 'Facundo Inza', 
                role: 'Experto en Compliance', 
                linkedin: 'https://www.linkedin.com/in/facundo-inza/', 
                image: '/facu.jpeg',
                expertise: ['Regulación Cripto', 'KYC/AML', 'Gestión de Riesgos']
              },
              { 
                name: 'Miguel Angel Lupani', 
                role: 'Desarrollador de Bots P2P', 
                linkedin: 'https://www.linkedin.com/in/miguel-angel-lupani-5847b720a/', 
                image: '/migue.jpeg',
                expertise: ['Trading Algorítmico', 'Binance API', 'Optimización']
              },
              { 
                name: 'Santiago Sosa', 
                role: 'Ingeniero de Software', 
                linkedin: 'https://www.linkedin.com/in/santi-sosa/', 
                image: '/santi-sosa.jpeg',
                expertise: ['Trading Algorítmico', 'Arquitectura de Software', 'Sistemas Distribuidos']
              },
              { 
                name: 'Francisco Inza', 
                role: 'Sales Manager', 
                linkedin: 'https://www.linkedin.com/in/francisco-inza/', 
                image: '/fran.jpeg',
                expertise: ['Ventas B2B', 'Desarrollo de Negocios', 'Estrategia Comercial']
              }
            ].map((person, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 text-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-silver5-cyan-400/20 via-purple-400/20 to-silver5-cyan-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <Image 
                    src={person.image} 
                    alt={person.name} 
                    fill
                    className="rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-silver5-cyan-400/30 group-hover:border-silver5-cyan-400 transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-silver5-cyan-400 mb-3 text-sm">{person.role}</p>
                <div className="space-y-1 mb-4">
                  {person.expertise.map((skill, idx) => (
                    <div key={idx} className="text-xs text-gray-400">
                      {skill}
                    </div>
                  ))}
                </div>
                <Link 
                  href={person.linkedin}
                  target="_blank"
                  className="inline-flex items-center text-gray-400 hover:text-silver5-cyan-400 transition-colors duration-300 text-xs"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Ver perfil
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to optimize Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-silver5-cyan-400/10 border border-silver5-cyan-400/20 text-silver5-cyan-400 text-sm font-medium mb-4">
              ¿Listo para comenzar?
            </div>
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-gray-400 text-lg mb-8">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-silver5-cyan-400 hover:bg-silver5-cyan-500 text-gray-900 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 shadow-lg shadow-silver5-cyan-400/20 hover:shadow-silver5-cyan-400/40 w-full sm:w-auto">
                  {t.cta.button}
                </Button>
              </Link>
              <Link href="#contacto">
                <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                  Agendar llamada
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-silver5-cyan-400/10 border border-silver5-cyan-400/20 text-silver5-cyan-400 text-sm font-medium mb-4">
              Contacto
            </div>
            <h2 className="text-4xl font-bold mb-6">¿Hablamos de tu proyecto?</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Estamos aquí para ayudarte a automatizar y optimizar tus operaciones financieras.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-silver5-cyan-400/10 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-silver5-cyan-400" />
                  </div>
            <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a href="mailto:office@silver5ai.com" className="text-white hover:text-silver5-cyan-400 transition-colors duration-300">
                      office@silver5ai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-silver5-cyan-400/10 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-silver5-cyan-400" />
            </div>
            <div>
                    <div className="text-sm text-gray-400">Ubicación</div>
                    <div className="text-white">Buenos Aires, Argentina</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-silver5-cyan-400/10 flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-silver5-cyan-400" />
            </div>
            <div>
                    <div className="text-sm text-gray-400">Horario de Atención</div>
                    <div className="text-white">Lun - Vie: 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
                </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleFormChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-silver5-cyan-400 transition-colors duration-300"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-silver5-cyan-400 transition-colors duration-300"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Asunto</label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleFormChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-silver5-cyan-400 transition-colors duration-300"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleFormChange}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-silver5-cyan-400 transition-colors duration-300"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    required
                  ></textarea>
                </div>
                
                {/* Mensajes de estado del formulario */}
                {formStatus.message && (
                  <div className={`p-3 rounded-lg text-sm ${
                    formStatus.isSuccess 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {formStatus.message}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className={`w-full bg-silver5-cyan-400 hover:bg-silver5-cyan-500 text-gray-900 rounded-lg py-4 text-lg font-medium transition-all duration-300 ${
                    formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


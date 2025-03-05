'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { LanguageSwitcher } from '@/components/language-switcher'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../contexts/language-context'
import { translations } from '../translations'
import { trackContact, trackCustomEvent, trackViewContent } from '../utils/analytics'
import { VSLPlayer } from './vsl-player'

// Importa la variable de entorno del correo electrónico
const emailContact = process.env.NEXT_PUBLIC_EMAIL_CONTACT || "office@silver5.ai"

export default function Home() {
  const { language, setLanguage } = useLanguage()
  const router = useRouter()
  const [searchParamsReady, setSearchParamsReady] = useState(false)
  const t = translations[language]

  // Estado para el caso de uso seleccionado
  const [selectedCase, setSelectedCase] = useState(0);

  // Mover la lógica de useSearchParams a un efecto que se ejecuta solo en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      const langParam = url.searchParams.get('language')
      
      if (langParam && (langParam === 'es' || langParam === 'en')) {
        setLanguage(langParam)
      }
      
      setSearchParamsReady(true)
    }
  }, [setLanguage])

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Rastrear vista de secciones importantes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Rastrear vista de la página principal
    trackViewContent('Homepage', 'Landing Page')
    
    // Configurar observadores para secciones importantes
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          switch(sectionId) {
            case 'tecnologias':
              trackViewContent('Tecnologías', 'Section')
              break
            case 'casos-de-uso':
              trackViewContent('Casos de Uso', 'Section')
              break
            case 'identificacion-de-dolor':
              trackViewContent('Puntos de Dolor', 'Section')
              break
            case 'servicios-automatizados':
              trackViewContent('Servicios Automatizados', 'Section')
              break
            case 'contacto':
              trackViewContent('Contacto', 'Section')
              break
          }
          // Desconectar después de ver la sección
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    
    // Observar todas las secciones importantes
    const sections = [
      'tecnologias', 
      'casos-de-uso', 
      'identificacion-de-dolor',
      'servicios-automatizados',
      'contacto'
    ]
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [])
  
  // Rastrear cuando alguien contacta por email
  const handleEmailContact = () => {
    trackContact()
    trackCustomEvent('EmailContact')
  }
  
  // Rastrear cuando alguien selecciona un caso de uso
  const handleCaseSelection = (index: number) => {
    setSelectedCase(index)
    trackViewContent(
      t.useCases.cases[index].title, 
      'Caso de Uso'
    )
  }

  if (!searchParamsReady && typeof window !== 'undefined') {
    return <div className="min-h-screen bg-[#0A0B14] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
  }

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 sticky top-0 z-50 bg-[#0A0B14]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-s5-w.png" alt="Silver5 AI" width={40} height={40} />
                <span className="font-bold text-xl">Silver5</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="#tecnologias" 
                className="text-gray-300 hover:text-white hidden sm:block"
                onClick={() => trackCustomEvent('NavClick', { section: 'Tecnologías' })}
              >
                Tecnologías
              </Link>
              <Link 
                href="#casos-de-uso" 
                className="text-gray-300 hover:text-white hidden sm:block"
                onClick={() => trackCustomEvent('NavClick', { section: 'Casos de Uso' })}
              >
                Casos de Uso
              </Link>
              <Link 
                href="#contacto" 
                className="text-gray-300 hover:text-white hidden sm:block"
                onClick={() => trackCustomEvent('NavClick', { section: 'Contacto' })}
              >
                Contacto
              </Link>
              <LanguageSwitcher />
              <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); }}>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-full">
                  {t.nav.launchApp}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col justify-start items-center overflow-hidden min-h-screen bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-10 right-[20%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10 w-full lg:max-w-7xl">
          <div className="text-center mx-auto">
            <h1 className="text-base sm:text-lg lg:text-xl tracking-tight mb-4 text-white uppercase">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 mb-8">
              {t.hero.description.split(' ').map((word, index) => {
                if (word === 'Anuncios' || word === 'Volumen' || word === 'Bot' || 
                    word === 'Sin' || word === 'Pantalla' || word === 'Manual' || word === 'Margen' ||
                    word === 'Without' || word === 'Screen' || word === 'Manual' || word === 'Margin') {
                  return <span key={index} className="text-cyan-400">{word} </span>;
                }
                return word + ' ';
              })}
            </p>
            
            {/* Botón CTA en la parte superior del hero */}
            <div className="mb-8">
              <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); trackCustomEvent('HeroTopCTAClick'); }}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110 animate-pulse">
                  {t.hero.trialButton}
                </Button>
              </Link>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-6 text-white">
              {t.hero.cta}
            </h2>
            <div className="flex justify-center">
              <VSLPlayer className="w-full" />
            </div>
            
            {/* Botón CTA después del video */}
            <div className="mt-8">
              <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); trackCustomEvent('HeroBottomCTAClick'); }}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110 animate-pulse">
                  {t.hero.trialButton}
                </Button>
              </Link>
              <p className="text-gray-400 mt-2 text-sm">Sin tarjeta de crédito. Cancela cuando quieras.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section id="tecnologias" className="relative flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-10 right-[20%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Tecnologías que Utilizamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Binance', description: 'Automatización y gestión de operaciones en Binance.', logo: '/binance-logo.svg' },
              { name: 'N8N', description: 'Automatización de flujos de trabajo con N8N.', logo: '/n8n.png' },
              { name: 'AWS', description: 'Implementación rápida y personalizada en servidores de AWS.', logo: '/aws.png' },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                <img src={tech.logo} alt={tech.name} className="mb-4 w-20 h-20 object-contain" />
                <h3 className={`text-2xl font-bold mb-2 ${tech.name === 'Binance' ? 'text-yellow-500' : 'text-white'}`}>{tech.name}</h3>
                <p className="text-gray-400 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características del Bot */}
      <section className="relative flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.botFeatures.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.botFeatures.features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA después de características */}
          <div className="mt-12 text-center">
            <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); trackCustomEvent('FeaturesCTAClick'); }}>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110">
                Probar Gratis por 7 Días
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios del Bot */}
      <section className="relative flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.botBenefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.botBenefits.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section id="casos-de-uso" className="relative py-16 border-t border-gray-800 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-cyan-400">{t.useCases.title}</h2>
          
          {/* Visualización móvil: Carrusel con navegación */}
          <div className="block sm:hidden">
            {/* Caso seleccionado */}
            <div className="mb-6">
              <div className="bg-gray-900 rounded-t-lg overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={t.useCases.cases[selectedCase].image} 
                    alt={t.useCases.cases[selectedCase].title} 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                    {t.useCases.cases[selectedCase].title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {t.useCases.cases[selectedCase].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navegación de carrusel */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => handleCaseSelection(
                  selectedCase === 0 ? t.useCases.cases.length - 1 : selectedCase - 1
                )}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white"
                aria-label="Caso anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {t.useCases.cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleCaseSelection(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedCase === index ? 'bg-cyan-400 w-5' : 'bg-gray-600'
                    }`}
                    aria-label={`Ver caso ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => handleCaseSelection(
                  selectedCase === t.useCases.cases.length - 1 ? 0 : selectedCase + 1
                )}
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-white"
                aria-label="Caso siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Visualización desktop: Pestañas y contenido */}
          <div className="hidden sm:block">
            {/* Pestañas de navegación */}
            <div className="flex flex-wrap justify-center mb-10 gap-3">
              {t.useCases.cases.map((useCase, index) => (
                <button
                  key={index}
                  onClick={() => handleCaseSelection(index)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCase === index 
                      ? 'bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/20' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {useCase.title}
                </button>
              ))}
            </div>
            
            {/* Contenido del caso seleccionado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {t.useCases.cases[selectedCase].title}
                  </h3>
                  <p className="text-gray-400">
                    {t.useCases.cases[selectedCase].description}
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={t.useCases.cases[selectedCase].image} 
                    alt={t.useCases.cases[selectedCase].title} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </div>
            
            {/* CTA después de casos de uso */}
            <div className="mt-12 text-center">
              <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); trackCustomEvent('UseCasesCTAClick'); }}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110">
                  Comenzar Mi Prueba Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Identificación de Dolor */}
      <section id="identificacion-de-dolor" className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-[15%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute bottom-20 right-[25%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.painPoints.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {t.painPoints.points.map((point, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a la Acción Final */}
      <section id="cta-final" className="border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">{t.finalCta.title}</h2>
          <p className="text-xl text-gray-300 mb-8">Activa tu prueba gratuita de 7 días y descubre cómo nuestro bot puede transformar tu operativa en Binance P2P.</p>
          <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); trackCustomEvent('FinalCTAClick'); }}>
            <Button 
              className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full font-bold py-3 px-8 text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110"
            >
              {t.finalCta.cta}
            </Button>
          </Link>
          <p className="text-gray-400 mt-4">Sin compromisos. Sin tarjeta de crédito. Cancela cuando quieras.</p>
        </div>
      </section>

      {/* Nuestros Servicios Automatizados */}
      <section id="servicios-automatizados" className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-10 left-[20%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 left-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.servicesAutomated.title}</h2>
          <ul className="space-y-8">
            {t.servicesAutomated.services.map((service, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sección de LinkedIn */}
      <section id="linkedin" className="relative border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Conéctate con Nosotros</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: 'Julian Besteiro', linkedin: 'https://www.linkedin.com/in/julian-besteiro-software-engineer/', image: '/juli.jpeg' },
              { name: 'Facundo Inza', linkedin: 'https://www.linkedin.com/in/facundo-inza/', image: '/facu.jpeg' },
              { name: 'Miguel Angel Lupani', linkedin: 'https://www.linkedin.com/in/miguel-angel-lupani-5847b720a/', image: '/migue.jpeg' },
            ].map((profile, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                <img src={profile.image} alt={profile.name} className="mb-4 w-24 h-24 rounded-full object-cover" />
                <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:underline"
                  onClick={() => trackCustomEvent('LinkedInClick', { profile: profile.name })}
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section id="beneficios-clave" className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-15 left-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute bottom-15 right-[35%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[20%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.keyBenefits.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {t.keyBenefits.benefits.map((benefit, index) => (
              <div key={index} className={`bg-gray-${index % 2 === 0 ? '900' : '800'} rounded-xl p-6 shadow-md`}>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* CTA después de beneficios clave */}
          <div className="mt-12 text-center">
            <Link href="/lead-form" onClick={(e) => { e.preventDefault(); router.push('/lead-form'); trackCustomEvent('BenefitsCTAClick'); }}>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-bold py-3 px-6 rounded-full text-lg shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-110">
                Probar Bot Gratis Durante 7 Días
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios / Casos de Éxito */}
      <section id="testimonios" className="relative border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-5 left-[25%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-5 right-[30%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-10 right-[15%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {t.testimonials.cases.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <p className="text-gray-400 italic">&quot;{testimonial.content}&quot;</p>
                <h3 className="text-xl font-semibold mt-4 text-white">{testimonial.author}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="relative border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-5 left-[20%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute bottom-5 right-[25%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-10 right-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">Resuelve todas tus dudas antes de nuestra reunión.</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-white">{emailContact}</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4 mb-4">
              Contáctanos por correo: 
              <a 
                href={`mailto:${emailContact}`} 
                className="text-cyan-400 hover:underline ml-1"
                onClick={handleEmailContact}
              >
                {emailContact}
              </a>
            </p>
          </div>
          <div>
            <img src="/blueprint.png" alt="Contact Illustration" width={300} height={300} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.company}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#tecnologias" className="text-gray-400 hover:text-white">Tecnologías</Link></li>
                <li><Link href="#casos-de-uso" className="text-gray-400 hover:text-white">Casos de Uso</Link></li>
                <li><Link href="#contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.services}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#tecnologias" className="text-gray-400 hover:text-white">Tecnologías</Link></li>
                <li><Link href="#casos-de-uso" className="text-gray-400 hover:text-white">Casos de Uso</Link></li>
                <li><Link href="#contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.legal}
              </h3>
              <ul className="space-y-2">
                <li><Link href="/politicas" className="text-gray-400 hover:text-white">{t.footer.privacy}</Link></li>
                <li><Link href="/terminos" className="text-gray-400 hover:text-white">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


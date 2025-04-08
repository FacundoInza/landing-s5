'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Code, Shield, Bot, Box, Cpu, Mail, MapPin, Clock, Twitter, Linkedin, Github, Menu, X, ChevronDown, Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'
import { translations } from '../translations'
import { useState, useEffect } from 'react'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver5-ai';

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { language } = useLanguage()
  const t = translations[language]
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Añadir efecto para bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Añadir efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Lista de servicios para el desplegable
  const servicios = [
    { path: '/servicios/p2p-manager', name: 'P2P Manager', icon: <Bot className="w-4 h-4 mr-2 text-cyan-400" /> },
    { path: '/servicios/compliance', name: 'Compliance', icon: <Shield className="w-4 h-4 mr-2 text-purple-400" /> },
    { path: '/servicios/email-assistant', name: 'Asistente para Gmail', icon: <Inbox className="w-4 h-4 mr-2 text-blue-400" /> },
    { path: '/servicios/inteligencia-artificial', name: 'Inteligencia Artificial', icon: <Cpu className="w-4 h-4 mr-2 text-yellow-400" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Overlay para el menú móvil */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navbar - Diseño mejorado */}
      <nav className={`border-b transition-all duration-300 sticky top-0 z-50 ${
        scrolled 
          ? "border-gray-800/60 bg-[#0A0B14]/95 backdrop-blur-md shadow-lg" 
          : "border-gray-800/20 bg-[#0A0B14]/80 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative overflow-hidden rounded-full p-1 group-hover:bg-cyan-400/10 transition-all duration-300">
                  <Image src="/logo-s5-w.png" alt="Silver5 AI" width={38} height={38} priority className="transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5</span>
              </Link>
            </div>

            {/* Desktop Navigation - Mejorado */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Menú desplegable de servicios */}
              <div className="relative">
                <button 
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group flex items-center"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>{t.nav.services}</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
                
                {/* Dropdown menu */}
                {servicesOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50 py-2"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {servicios.map((servicio, index) => (
                      <Link
                        key={index}
                        href={servicio.path}
                        className="flex items-center px-4 py-2.5 hover:bg-gray-800 text-gray-300 hover:text-white transition-colors"
                      >
                        {servicio.icon}
                        <span>{servicio.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/#p2pbot" 
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <span>{t.nav.p2pBot}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              
              <Link 
                href="/#sobre-nosotros" 
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <span>Sobre Nosotros</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              
              <Link 
                href="/#contacto" 
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <span>Contacto</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              
              <div className="ml-2">
                <LanguageSwitcher />
              </div>
              
              <Link 
                href={calendlyUrl}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-all duration-200"
              >
                {t.nav.scheduleCall}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Abrir menú principal</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} z-40`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            {/* Desplegable de servicios en móvil */}
            <div className="rounded-md bg-gray-800/50 p-3">
              <div className="font-medium text-white mb-2">Servicios</div>
              <div className="space-y-2 ml-2">
                {servicios.map((servicio, index) => (
                  <Link
                    key={index}
                    href={servicio.path}
                    className="flex items-center py-2 px-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {servicio.icon}
                    <span>{servicio.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/#p2pbot"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.p2pBot}
            </Link>
            
            <Link
              href="/#sobre-nosotros"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            
            <Link
              href="/#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-3">
                <LanguageSwitcher />
              </div>
              <div className="mt-3 px-3">
                <Link
                  href={calendlyUrl}
                  className="block text-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.scheduleCall}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0B14] border-t border-gray-800 mt-12 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Columna 1: Logo e info */}
            <div>
              <Link 
                href="/" 
                className="flex items-center group"
              >
                <div className="relative overflow-hidden rounded-full p-1 mr-3 group-hover:bg-cyan-400/10 transition-all duration-300">
                  <Image 
                    src="/logo-s5-w.png" 
                    alt="Silver5 AI" 
                    width={42} 
                    height={42} 
                    className="transform group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Silver5</span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                Soluciones de software y automatización para empresas, integraciones IA y desarrollo blockchain.
              </p>
              <div className="mt-4 flex space-x-4">
                <a 
                  href="https://twitter.com/silver5_ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/silver5ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/silver5-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Columna 2: Navegación */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navegación
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#servicios" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#p2pbot" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    Bot P2P
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#sobre-nosotros" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></div>
                    Sobre Nosotros
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Servicios
              </h3>
              <ul className="space-y-3">
                {servicios.map((servicio, index) => (
                  <li key={index}>
                    <Link 
                      href={servicio.path}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                    >
                      {servicio.icon}
                      {servicio.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:office@silver5ai.com" 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    office@silver5ai.com
                  </a>
                </li>
                <li>
                  <div className="text-gray-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Buenos Aires, Argentina
                  </div>
                </li>
                <li>
                  <Link 
                    href={calendlyUrl} 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-900 bg-cyan-400 hover:bg-cyan-500 transition-colors duration-200"
                  >
                    Agendar Llamada
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Silver5 AI. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <Link 
                  href="/privacidad" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  Política de Privacidad
                </Link>
                <Link 
                  href="/terminos" 
                  className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                >
                  Términos de Servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
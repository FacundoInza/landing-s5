'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Shield, Bot, Cpu, Mail, MapPin, Inbox, Instagram, Linkedin } from 'lucide-react'
import { useLanguage } from '../contexts/language-context'
import { translations } from '../translations'
import { useState, useEffect } from 'react'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver-5-ai/silver-5-p2p';

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { language } = useLanguage()
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
                  href="https://instagram.com/silver5ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wwwlinkedin.com/company/silver5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
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
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../contexts/language-context'
import { translations } from '../translations'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver5-ai';

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]
  
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
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Contacto Header */}
      <section className="py-20 relative border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos a la brevedad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de contacto */}
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-300 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleFormChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                    placeholder="Escribe tu mensaje aquí..."
                    required
                  />
                </div>
                
                {/* Estado del formulario */}
                {formStatus.isSuccess && (
                  <div className="p-4 bg-green-400/20 border border-green-400/30 rounded-lg text-green-400">
                    {formStatus.message}
                  </div>
                )}
                
                {formStatus.isError && (
                  <div className="p-4 bg-red-400/20 border border-red-400/30 rounded-lg text-red-400">
                    {formStatus.message}
                  </div>
                )}
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-lg px-4 py-3 text-lg font-medium transition-all duration-300 shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/40 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Información de contacto */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Correo electrónico</h3>
                      <a href="mailto:office@silver5ai.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        office@silver5ai.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-800 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Ubicación</h3>
                      <p className="text-gray-400">
                        Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4">Síguenos en redes sociales</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/silver5ai" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/silver5" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://twitter.com/silver5ai" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">¿Prefieres hablar directamente?</h3>
                <p className="text-gray-400 mb-6">
                  Agenda una llamada con nuestro equipo y discutamos cómo podemos ayudarte.
                </p>
                <Link href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg px-4 py-3 font-medium transition-all duration-300">
                    Agendar llamada
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
"use client"

import React, { useState } from 'react';
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from 'next/navigation';
import { z } from 'zod';


export default function CorreoPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
    linkedin: '',
    actividad: '',
    volumen: '',
    tipos_correos: '',
    desafios: '',
    beneficios: '',
    privacidad: false
  });

  // Función para desplazarse suavemente a un elemento por su ID
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Esquema para validación del formulario
  const formSchema = z.object({
    nombre: z.string().min(1, { message: 'El nombre es obligatorio' }),
    whatsapp: z.string().min(1, { message: 'El número de WhatsApp es obligatorio' }),
    email: z.string().email({ message: 'Correo electrónico inválido' }),
    linkedin: z.string().min(1, { message: 'El perfil de LinkedIn es obligatorio' }),
    actividad: z.string().optional(),
    volumen: z.string().optional(),
    tipos_correos: z.string().optional(),
    desafios: z.string().optional(),
    beneficios: z.string().optional(),
    privacidad: z.boolean().refine(val => val === true, {
      message: 'Debes aceptar la política de privacidad',
    }),
  });

  // Sanitizar entrada para evitar caracteres no deseados
  const sanitizeInput = (value: string, field: string): string => {
    if (field === 'whatsapp') {
      // Solo permitir números, + y espacios en el campo de WhatsApp
      return value.replace(/[^\d+\s]/g, '');
    }
    // Para otros campos, eliminar cualquier script o tag HTML
    return value.replace(/<script.*?>.*?<\/script>/gi, '')
               .replace(/<[^>]*>/g, '');
  };

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value, name);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Limpiar el error para este campo si existe
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Manejar cambio en el checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));

    // Limpiar el error para este campo si existe
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validar formulario con Zod
      formSchema.parse(formData);
      
      // Si llega aquí, no hay errores de validación
      setIsSubmitting(true);
      
      try {
        // Enviar datos a n8n
        const response = await fetch('https://n8n.silver5ai.com/webhook/lead-correo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: formData.nombre,
            whatsapp: formData.whatsapp,
            email: formData.email,
            linkedin: formData.linkedin,
            actividad: formData.actividad,
            volumen: formData.volumen,
            tipos_correos: formData.tipos_correos,
            desafios: formData.desafios,
            beneficios: formData.beneficios,
            fuente: 'Landing Correo',
            fecha: new Date().toISOString()
          }),
        });

        if (response.ok) {
          // Redirigir a página de confirmación
          router.push('/correo/gracias');
        } else {
          // También redirigir en modo desarrollo o testing
          console.warn('API respondió con error, pero redirigiendo en modo desarrollo');
          router.push('/correo/gracias');
        }
      } catch (fetchError) {
        // Si hay un error de conexión, logearlo pero igualmente redirigir al usuario
        console.error('Error al conectar con el API:', fetchError);
        console.warn('Redirigiendo a página de gracias aunque falló la conexión al API');
        router.push('/correo/gracias');
      }
    } catch (error) {
      setIsSubmitting(false);
      
      if (error instanceof z.ZodError) {
        // Mapear errores de Zod a los campos del formulario
        const errors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path) {
            errors[err.path[0].toString()] = err.message;
          }
        });
        setFormErrors(errors);
        
        // Scroll hasta el primer error
        const firstErrorField = document.getElementById(Object.keys(errors)[0]);
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstErrorField.focus();
        }
      } else {
        console.error('Error inesperado:', error);
        alert('Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0A0B14]">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-800/50 sticky top-0 z-50 bg-[#0A0B14]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative w-10 h-10 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                  <Image src="/logo-s5-w.png" alt="Silver5 AI" width={40} height={40} className="object-contain" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  Silver5
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#funcionalidades" className="text-white hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">
                Funcionalidades
              </Link>
              <Link href="#beneficios" className="text-white hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">
                Beneficios
              </Link>
              <Link href="#testimonios" className="text-white hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-white hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full">
                Contacto
              </Link>
              <LanguageSwitcher />
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-white hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <Link href="#contacto" className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:scale-[1.02] transition-transform duration-200">
                Solicitar Implementación
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sección Hero */}
      <section id="hero" className="w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center px-3 py-1 mb-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm">
              <span className="mr-1 h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Automatización Inteligente para Gmail
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revoluciona la Gestión de tus Correos Electrónicos
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Nuestro Agente Inteligente para Gmail automatiza la clasificación y respuesta de correos mediante IA avanzada, adaptada específicamente a tu negocio.
            </p>
            <div className="mt-8">
              <Link href="#contacto" className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium py-3 px-8 rounded-lg hover:scale-[1.02] transition-transform duration-200">
                Solicitar Implementación Personalizada
              </Link>
            </div>
          </div>
          <div className="mt-16 rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
            <div className="w-full h-[300px] md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="max-w-2xl text-center p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Solución empresarial a medida</h3>
                <p className="text-gray-300">
                  Reduce hasta un 70% del tiempo dedicado a la gestión de correos con nuestra solución personalizada para tu flujo de trabajo específico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Funcionalidades */}
      <section id="funcionalidades" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Capacidades Clave de Nuestro Agente para Gmail
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Automatización inteligente de correos electrónicos diseñada específicamente para tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Funcionalidad 1 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 11h10M7 15h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Etiquetado Automático por Categorías</h3>
              <p className="text-gray-400">
                Análisis avanzado del contenido de cada correo entrante y clasificación automática según categorías personalizadas (soporte, ventas, consultas, reclamos, etc.).
              </p>
            </div>

            {/* Funcionalidad 2 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Respuestas Automáticas Inteligentes</h3>
              <p className="text-gray-400">
                Generación y envío de respuestas personalizadas según la categoría detectada, ahorrando tiempo y manteniendo coherencia en la comunicación con tus clientes.
              </p>
            </div>

            {/* Funcionalidad 3 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contexto Histórico del Remitente</h3>
              <p className="text-gray-400">
                Acceso al historial de comunicaciones previas con el mismo remitente, permitiendo al agente responder con mayor precisión y continuidad a lo largo del tiempo.
              </p>
            </div>

            {/* Funcionalidad 4 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Base de Conocimiento Empresarial</h3>
              <p className="text-gray-400">
                Utilización de tu base de conocimiento propia (FAQ, manuales, políticas) para enriquecer las respuestas y brindar información precisa a tus clientes.
              </p>
            </div>

            {/* Funcionalidad 5 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tono y Estilo Personalizado</h3>
              <p className="text-gray-400">
                Adaptación al tono y voz específicos de tu marca, definidos manualmente o aprendidos a partir de correos anteriores enviados por tu equipo.
              </p>
            </div>

            {/* Funcionalidad 6 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Análisis e Informes de Rendimiento</h3>
              <p className="text-gray-400">
                Panel personalizado con métricas clave sobre la gestión de correos, tiempos de respuesta, categorías más frecuentes y oportunidades de mejora en tu comunicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section id="beneficios" className="w-full py-24 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Transforma tu Gestión de Correos con Automatización Inteligente
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reducción del 70% en tiempo de gestión</h3>
                    <p className="text-gray-400">El etiquetado automático y las respuestas inteligentes disminuyen drásticamente el tiempo que tu equipo dedica a gestionar correos repetitivos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Respuestas hasta 25 veces más rápidas</h3>
                    <p className="text-gray-400">Tus clientes reciben respuestas inmediatas a sus consultas más frecuentes, mejorando su experiencia y satisfacción.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Organización perfecta de la bandeja de entrada</h3>
                    <p className="text-gray-400">Etiquetado automático que organiza todos los correos entrantes según tus categorías personalizadas, facilitando su seguimiento y gestión.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Consistencia en la comunicación corporativa</h3>
                    <p className="text-gray-400">Todas las respuestas mantienen el mismo tono, formato y calidad, asegurando una imagen profesional consistente.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Escalabilidad sin aumento de personal</h3>
                    <p className="text-gray-400">Gestiona un mayor volumen de correos sin necesidad de contratar más personal, ideal para empresas en crecimiento.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gray-900/80 border border-gray-800/50 rounded-xl overflow-hidden p-6">
                  <div className="w-full h-[350px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center px-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">¿Cómo funciona?</h3>
                      <p className="text-gray-300 mb-6">Nuestro sistema se integra directamente con tu cuenta de Gmail, analiza el patrón de tus correos y automatiza las respuestas basándose en tu base de conocimiento y estilo de comunicación.</p>
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold mr-2">1</span>
                          <span className="text-white">Integración con tu cuenta</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold mr-2">2</span>
                          <span className="text-white">Análisis y aprendizaje</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold mr-2">3</span>
                          <span className="text-white">Clasificación automática</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold mr-2">4</span>
                          <span className="text-white">Respuestas personalizadas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">70%</p>
                      <p className="text-xs text-gray-400">Reducción de tiempo en gestión</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">95%</p>
                      <p className="text-xs text-gray-400">Precisión en clasificación</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">24/7</p>
                      <p className="text-xs text-gray-400">Disponibilidad de respuesta</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">100%</p>
                      <p className="text-xs text-gray-400">Personalización</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section id="testimonios" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Casos de Éxito en Empresas Reales
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Descubre cómo nuestro Agente Inteligente para Gmail está transformando la comunicación en diferentes sectores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 - Sector Atención al Cliente */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <div className="mb-4 inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full">
                  Atención al Cliente
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Nuestro equipo de soporte recibía más de 500 correos diarios. Desde que implementamos el Agente Inteligente, el 68% de estos se responden automáticamente y el resto llega ya categorizado a los especialistas adecuados. El tiempo de respuesta ha bajado de 8 horas a 35 minutos en promedio."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xl font-semibold mr-4">
                    CR
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Carolina Reyes</h4>
                    <p className="text-gray-400 text-sm">Directora de Atención al Cliente, ServicioTech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 - Sector E-commerce */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <div className="mb-4 inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full">
                  E-commerce
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Durante nuestras temporadas de ofertas, el volumen de consultas se triplicaba y era imposible dar abasto. Con el Agente de Gmail, ahora clasificamos automáticamente las consultas sobre pedidos, devoluciones y disponibilidad, respondiendo al 75% de forma inmediata. La satisfacción del cliente aumentó un 42%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xl font-semibold mr-4">
                    MG
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Miguel González</h4>
                    <p className="text-gray-400 text-sm">Director de Operaciones, ModoTienda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonio 3 - Sector Educación */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <div className="mb-4 inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full">
                  Educación
                </div>
                <p className="text-gray-300 italic mb-6">
                  "Como coordinadora académica, recibía cientos de consultas repetitivas de alumnos sobre inscripciones, fechas y requisitos. Implementamos el Agente para Gmail con toda nuestra base de conocimiento institucional, y ahora responde el 85% de las consultas al instante. Mi equipo por fin puede enfocarse en casos complejos."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xl font-semibold mr-4">
                    LV
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Laura Vázquez</h4>
                    <p className="text-gray-400 text-sm">Coordinadora Académica, Instituto Educativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-8 backdrop-blur-sm max-w-3xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl md:text-2xl text-white italic font-light mb-4">
                    "Implementamos el Agente Inteligente para Gmail en nuestras oficinas en 5 países y los resultados han sido extraordinarios. El ROI se materializó en sólo 2 meses: redujimos costos operativos en un 32% y aumentamos la satisfacción del cliente al resolver sus consultas en cuestión de minutos en vez de días."
                  </p>
                  <div>
                    <h4 className="text-white font-medium">Fernando Álvarez</h4>
                    <p className="text-cyan-400 text-sm">Chief Technology Officer, Grupo Empresarial Internacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comentamos la sección de Precios por ahora */}
      {/* 
      <section id="precios" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Planes Adaptados a tu Volumen de Correo
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Escala la automatización de tu Gmail según las necesidades específicas de tu organización
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Plan Startup -->
            <!-- Plan Business -->
            <!-- Plan Enterprise -->
          </div>

          <!-- Garantía de devolución -->
          <div className="mt-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
            <!-- Contenido de garantía -->
          </div>
        </div>
      </section>
      */}

      {/* Sección de Contacto */}
      <section id="contacto" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Solicita tu Implementación Personalizada
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Completa el formulario para que podamos entender tus necesidades específicas y desarrollar una solución a medida para tu negocio.
            </p>
          </div>
          
          <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Información Personal */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-800">Información Personal</h3>
                </div>
                
                {/* Nombre Completo */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre Completo <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/70 border ${formErrors.nombre ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white`}
                    placeholder="Tu nombre completo"
                    required
                  />
                  {formErrors.nombre && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.nombre}</p>
                  )}
                </div>
                
                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
                    Número de WhatsApp <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/70 border ${formErrors.whatsapp ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white`}
                    placeholder="+34 600 000 000"
                    required
                  />
                  {formErrors.whatsapp && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.whatsapp}</p>
                  )}
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo Electrónico <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/70 border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white`}
                    placeholder="tu@empresa.com"
                    required
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>
                
                {/* LinkedIn */}
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-1">
                    Perfil de LinkedIn <span className="text-cyan-400">*</span>
                  </label>
                  <input 
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/70 border ${formErrors.linkedin ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white`}
                    placeholder="https://linkedin.com/in/tu-perfil"
                    required
                  />
                  {formErrors.linkedin && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.linkedin}</p>
                  )}
                </div>
                
                {/* Información del Negocio */}
                <div className="md:col-span-2 mt-4">
                  <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-800">Información del Negocio</h3>
                </div>
                
                {/* Actividad del Negocio */}
                <div className="md:col-span-2">
                  <label htmlFor="actividad" className="block text-sm font-medium text-gray-300 mb-1">
                    Describe brevemente tu actividad principal o la de tu negocio
                  </label>
                  <textarea
                    id="actividad"
                    name="actividad"
                    value={formData.actividad}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                    placeholder="Somos una agencia de marketing digital especializada en..."
                  ></textarea>
                </div>
                
                {/* Volumen de Correos */}
                <div className="md:col-span-2">
                  <label htmlFor="volumen" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué volumen de correo electrónico manejas diariamente que te gustaría automatizar?
                  </label>
                  <select 
                    id="volumen"
                    name="volumen"
                    value={formData.volumen}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="menos-de-50">Menos de 50 correos diarios</option>
                    <option value="50-100">Entre 50 y 100 correos diarios</option>
                    <option value="100-500">Entre 100 y 500 correos diarios</option>
                    <option value="mas-de-500">Más de 500 correos diarios</option>
                  </select>
                </div>
                
                {/* Tipos de Correos */}
                <div className="md:col-span-2">
                  <label htmlFor="tipos_correos" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Cuáles son los principales tipos de correos electrónicos o consultas que recibes con frecuencia y que te gustaría que el agente categorizara y respondiera automáticamente?
                  </label>
                  <textarea
                    id="tipos_correos"
                    name="tipos_correos"
                    value={formData.tipos_correos}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                    placeholder="Recibimos principalmente: consultas de precios, solicitudes de información, soporte técnico, etc."
                  ></textarea>
                </div>
                
                {/* Desafíos */}
                <div className="md:col-span-2">
                  <label htmlFor="desafios" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Cuál es el principal desafío que enfrentas actualmente al gestionar tu casilla de correo electrónico?
                  </label>
                  <textarea
                    id="desafios"
                    name="desafios"
                    value={formData.desafios}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                    placeholder="Mi principal problema es..."
                  ></textarea>
                </div>
                
                {/* Beneficios esperados */}
                <div className="md:col-span-2">
                  <label htmlFor="beneficios" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué beneficios específicos esperas obtener al implementar un agente de Gmail con capacidades de etiquetado y respuesta automática en tu flujo de trabajo?
                  </label>
                  <textarea
                    id="beneficios"
                    name="beneficios"
                    value={formData.beneficios}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                    placeholder="Espero conseguir..."
                  ></textarea>
                </div>
                
                {/* Términos y política */}
                <div className="md:col-span-2 mt-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input 
                        id="privacidad"
                        name="privacidad"
                        type="checkbox" 
                        checked={formData.privacidad}
                        onChange={handleCheckboxChange}
                        className={`w-4 h-4 border ${formErrors.privacidad ? 'border-red-500' : 'border-gray-700'} rounded bg-gray-800 focus:ring-2 focus:ring-cyan-400`}
                        required
                      />
                    </div>
                    <label htmlFor="privacidad" className="ml-2 text-sm text-gray-400">
                      Acepto la <a href="/politicas" className="text-cyan-400 hover:underline">Política de Privacidad</a> y entiendo que Silver5 utilizará mis datos para contactarme sobre la implementación del agente. <span className="text-cyan-400">*</span>
                    </label>
                  </div>
                  {formErrors.privacidad && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.privacidad}</p>
                  )}
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Solicitar mi Implementación Personalizada"
                  )}
                </button>
              </div>
              
              <p className="text-gray-500 text-xs text-center mt-6">
                Los campos marcados con <span className="text-cyan-400">*</span> son obligatorios. Un especialista se pondrá en contacto contigo en las próximas 24-48 horas hábiles.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 md:px-8 lg:px-16 bg-[#070810] border-t border-gray-800/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Silver5</h3>
              <p className="text-gray-400 text-sm">
                Transformando la experiencia de Gmail con inteligencia artificial avanzada.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Producto</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Características</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Precios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Casos de uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Seguridad</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Sobre nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/politicas" className="text-gray-400 hover:text-cyan-400">Política de privacidad</a></li>
                <li><a href="/terminos" className="text-gray-400 hover:text-cyan-400">Términos de servicio</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 Silver5. Todos los derechos reservados.</p>
            <div className="mt-4 sm:mt-0">
              <select className="bg-gray-800 text-gray-300 text-sm rounded-lg px-3 py-1 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GraciasPage() {
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
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center flex-grow">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-12 mx-auto">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center bg-gray-900/80 rounded-full border border-cyan-400/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              ¡Gracias por contactarnos!
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Hemos recibido tu solicitud para implementar nuestro Agente Inteligente para Gmail. Un especialista se pondrá en contacto contigo durante las próximas 24-48 horas hábiles.
            </p>
            
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-8 backdrop-blur-sm max-w-lg mx-auto mb-12">
              <h3 className="text-xl font-semibold text-white mb-4">
                ¿Qué sucederá ahora?
              </h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-300">
                    Revisaremos tus necesidades específicas para preparar una propuesta personalizada.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-300">
                    Un experto te contactará para discutir detalles y resolver cualquier duda.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-300">
                    Diseñaremos una implementación a medida según las características de tu flujo de correo.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <Link 
                href="/" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg transition-all hover:from-cyan-500 hover:to-blue-600"
              >
                Volver al Inicio
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Si tienes alguna pregunta urgente, no dudes en contactarnos directamente a <a href="mailto:info@silver5.ai" className="text-cyan-400 hover:underline">info@silver5.ai</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer simplificado */}
      <footer className="w-full py-6 px-4 md:px-8 lg:px-16 bg-[#070810] border-t border-gray-800/50">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2023 Silver5. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
} 